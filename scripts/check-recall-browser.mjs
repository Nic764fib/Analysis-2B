import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {taylorRecallCards} from '../dist/taylor-recall.js';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1400,height:1100}});
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
fs.mkdirSync('tmp',{recursive:true});
try{
 await page.goto((process.env.CHECK_URL||'http://127.0.0.1:5193/')+'#/abfragen');
 await page.locator('#recall-module').selectOption('klausur');
 assert.match(await page.locator('#recall-module option:checked').innerText(),/31 Karten/);
 assert.equal(await page.locator('.recall-overview li').count(),31);
 await page.locator('#recall-module').selectOption('taylorreihen');
 await page.locator('#recall-only').selectOption('all');
 for(const width of [1400,390]){
  await page.setViewportSize({width,height:1100});
  for(const card of taylorRecallCards){
   assert.equal(await page.locator('#recall-note').getAttribute('data-note'),'recall-'+card.id);
   assert.equal(await page.locator('#flash-answer').isVisible(),false);
   assert.equal(await page.locator('.flash h2 .katex').count(),1);
   assert.equal(await page.locator('.flash .name-caption').count(),0);
   await page.locator('#reveal-card').click();
   assert.equal(await page.locator('#flash-answer').isVisible(),true);
   assert.deepEqual(await page.locator('.taylor-recall-answer th').allTextContents(),['Bis Grad 1','Bis Grad 2','Bis Grad 3']);
   assert.deepEqual(await page.locator('.taylor-recall-answer annotation').allTextContents(),card.polynomials);
   assert.equal(await page.locator('.katex-error').count(),0);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),card.id+' page overflow');
   assert(await page.locator('.taylor-recall-answer').evaluate(table=>table.scrollWidth<=table.clientWidth+1),card.id+' answer overflow');
   if(card.id==='series-sqrt')await page.screenshot({path:`tmp/taylor-recall-${width}.png`,fullPage:true});
   await page.locator('#next-card').click();
  }
 }
 // A review and note use the existing storage and survive switching scopes/reload.
 await page.locator('#recall-note').fill('Grad 1: 1+x; Grad 2 und 3 auf Papier');
 await page.locator('#reveal-card').click();
 const before=Date.now();
 await page.locator('#recall-known').click();
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('analysis2b-v1')));
 assert.equal(saved.known['series-exp'],true);
 assert.equal(saved.reviews['series-exp'].level,1);
 assert(saved.reviews['series-exp'].due>=before+86400000);
 await page.reload();
 await page.locator('#recall-module').selectOption('taylorreihen');
 await page.locator('#recall-only').selectOption('all');
 assert.equal(await page.locator('#recall-note').inputValue(),saved.notes['recall-series-exp']);
 assert.match(await page.locator('#known-count').innerText(),/^1 \/ 72 sicher$/);
 await page.locator('#recall-only').selectOption('due');
 assert.notEqual(await page.locator('#recall-note').getAttribute('data-note'),'recall-series-exp');
 await page.locator('#recall-module').selectOption('klausur');
 assert.match(await page.locator('#reveal-card').innerText(),/Mit der Aussage vergleichen/);
 await page.locator('#reveal-card').click();
 assert.equal(await page.locator('#flash-answer').isVisible(),true);
 assert.equal(await page.locator('.taylor-recall-answer').count(),0);
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({taylorCards:7,examCards:31,layouts:'desktop and mobile',reveal:'passed',reviewPersistence:'passed',theoryRegression:'passed'}));
}finally{await browser.close();}
