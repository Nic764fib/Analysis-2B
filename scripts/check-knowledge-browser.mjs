import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {emptyState} from '../dist/storage.js';
import {modules} from '../dist/content.js';
import {examPriority} from '../dist/exam-recall.js';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const browser=await chromium.launch({channel:'msedge',headless:true});
const context=await browser.newContext({viewport:{width:1400,height:1100}});
const page=await context.newPage(),errors=[];
page.on('pageerror',e=>errors.push(e.message));
const url=(process.env.CHECK_URL||'http://127.0.0.1:5193/')+'#/abfragen';
const key='analysis2b-v1';
const seed=emptyState();
for(const c of modules.flatMap(m=>m.theory).slice(0,25)){
 seed.known[c.id]=true;seed.reviews[c.id]={level:2,due:Date.now()+86400000,schedule:2};
}
seed.notes={'recall-heine-borel':'Meine vorhandene Formulierung',exercise:'Notiz behalten'};
seed.done.example=true;seed.scores.example=7;seed.positions.example=3;
seed.examSessions['fokus-a']={startedAt:Date.now(),part:1,assessments:{a:'secure'}};
const read=()=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);
fs.mkdirSync('tmp/knowledge-reset',{recursive:true});
try{
 await page.goto(url);
 await page.evaluate(({key,seed})=>localStorage.setItem(key,JSON.stringify(seed)),{key,seed});
 await page.reload();
 assert.equal(await page.locator('#known-count').innerText(),'25 / 75 sicher');
 const other=await context.newPage();await other.goto(url);
 await page.locator('#reset-knowledge').click();
 assert.equal(await page.locator('#known-count').innerText(),'0 / 75 sicher');
 assert.deepEqual(await read(),{...seed,known:{},reviews:{}});
 await other.getByRole('link',{name:'0 / 75 sicher',exact:true}).waitFor();
 await other.locator('#recall-note').fill('Notiz nach Reset im zweiten Tab');
 assert.deepEqual((await read()).known,{});
 // A module tab must update its marks without saving its navigation again.
 await other.goto(url.replace('#/abfragen','#/ableitungen/theorie/total'));
 const afterNavigation=await read();
 await page.locator('#restore-knowledge').click();
 await other.locator('[data-known="total"]:checked').waitFor();
 await page.locator('#reset-knowledge').click();
 await other.locator('[data-known="total"]:not(:checked)').waitFor();
 assert.equal((await read()).last,afterNavigation.last);
 await other.close();
 await page.reload();
 assert.equal(await page.locator('#known-count').innerText(),'0 / 75 sicher');
 await page.locator('#restore-knowledge').click();
 assert.equal(await page.locator('#known-count').innerText(),'25 / 75 sicher');
 const restored=await read();
 assert.deepEqual(restored.known,seed.known);assert.deepEqual(restored.reviews,seed.reviews);
 assert.equal(restored.notes['recall-heine-borel'],'Notiz nach Reset im zweiten Tab');
 assert.deepEqual(restored.examSessions,seed.examSessions);
 await page.locator('#reset-knowledge').click();
 assert.equal(await page.locator('#recall-module').inputValue(),'klausurtheorie');
 assert.equal(await page.locator('#recall-only').inputValue(),'priority');
 assert.equal(await page.locator('.priority-list li').count(),24);
 for(const [i,card] of examPriority.entries()){
  assert.equal(await page.locator('#recall-note').getAttribute('data-note'),'recall-'+card.id);
  assert.equal(await page.locator('.priority-rank').innerText(),`Lernpriorität ${i+1} / 24`);
  await page.locator('#reveal-card').click();
  assert.equal(await page.locator('.katex-error').count(),0);
  await page.locator(['#recall-again','#recall-partial','#recall-known'][i%3]).click();
 }
 assert.equal(await page.locator('#recall-note').getAttribute('data-note'),'recall-heine-borel');
 assert.equal(Object.keys((await read()).reviews).length,24);
 await page.locator('#reset-knowledge').click();
 for(const width of [1400,390]){
  await page.setViewportSize({width,height:1100});
  await page.screenshot({path:`tmp/knowledge-reset/reset-${width}.png`,fullPage:true});
  await page.locator('.priority-overview summary').click();
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'rank list overflow');
  assert.equal(await page.locator('.priority-start').count(),24);
  await page.screenshot({path:`tmp/knowledge-reset/list-${width}.png`,fullPage:true});
  await page.locator('[data-priority-id="divergence"]').click();
  assert.equal(await page.locator('.priority-rank').innerText(),'Lernpriorität 24 / 24');
  await page.locator('#reset-knowledge').click();
 }
 // A failed backup must leave all knowledge intact.
 await page.locator('#restore-knowledge').click();
 const before=await read();
 await page.evaluate(()=>{const original=Storage.prototype.setItem;Storage.prototype.setItem=function(key,value){if(key.endsWith('-knowledge-backup'))throw new DOMException('Blocked','QuotaExceededError');return original.call(this,key,value);};});
 await page.locator('#reset-knowledge').click();
 assert.deepEqual(await read(),before);
 assert.match(await page.locator('.review-message').innerText(),/nichts zurückgesetzt/);
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({reset:'25 → 0',undo:'survives reload',preservation:'notes, tasks, scores, positions, exam sessions and practice',crossTab:'passed',priorityOrder:24,layouts:'desktop and mobile',backupFailure:'safe'}));
}finally{await browser.close();}
