import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {practiceBank,taskById} from '../dist/practice-bank.js';
import {emptyState} from '../dist/storage.js';
import {startAttempt} from '../dist/practice-engine.js';
const require=createRequire(import.meta.url);
const {chromium}=process.env.PLAYWRIGHT_PATH?require(process.env.PLAYWRIGHT_PATH):require('playwright');
const base=process.env.CHECK_URL||'http://127.0.0.1:5191/';
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1400,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const now=Date.now();
try{
 await page.goto(base+'#/klausur');
 await page.locator('#practice-task-heading').waitFor();
 assert.equal(await page.getByRole('link',{name:'Satz erkennen',exact:true}).count(),0);
 assert.equal(await page.locator('#exam-clock').count(),0);
 assert.equal(await page.locator('.practice-solution').count(),0);
 const state=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('analysis2b-v1')));
 let saved=await state(),first=saved.practice.current;
 await page.locator('[data-practice-open="notes"]>summary').click();
 await page.locator('#practice-note').fill('Meine Notiz bleibt erhalten.');
 await page.locator('[data-practice-open="approach"]>summary').click();
 await page.locator('[data-choice="0:-1"]').click();
 assert.match(await page.locator('#choice-feedback-0').innerText(),/passende Ansatz/);
 await page.locator('#practice-hint').click();
 await page.locator('[data-practice-open="recipe"]>summary').click();
 await page.reload();await page.locator('#practice-task-heading').waitFor();
 saved=await state();let a=saved.practice.attempts.find(a=>a.id===first);
 assert.equal(a.note,'Meine Notiz bleibt erhalten.');assert.equal(a.hintCount,1);assert.equal(a.choices[0],-1);assert(a.recipeSeen);
 assert(await page.locator('[data-practice-open="recipe"]').getAttribute('open')!==null);
 await page.locator('#practice-solution').click();
 await page.locator('[data-practice-rating="helped"]').click();
 assert.match(await page.locator('#practice-rating-status').innerText(),/Gespeichert/);
 await page.locator('#practice-next-bottom').click();
 saved=await state();assert.notEqual(saved.practice.current,first);assert.equal(saved.practice.attempts.filter(a=>a.rating).length,1);
 await page.locator('#practice-next').click();saved=await state();assert.equal(saved.practice.attempts.filter(a=>a.rating).length,1,'Skip is not a failure');
 // Preserve the old notes, old sessions and existing theory data; test alongside new state.
 saved.known.total=true;saved.reviews.total={level:2,due:now+172800000,schedule:2};saved.notes['recall-total']='Theorie bleibt';saved.notes['exam-fokus-a-123-a-compact-1']='Alte Rechennotiz';saved.examSessions['fokus-a']={startedAt:now-10000,part:1,assessments:{'a-compact':'secure'}};
 await page.evaluate(s=>localStorage.setItem('analysis2b-v1',JSON.stringify(s)),saved);await page.reload();
 await page.locator('.practice-settings>summary').click();
 await page.locator('.practice-legacy>summary').click();assert.match(await page.locator('.practice-legacy').innerText(),/1 bisherige Selbsteinschätzungen/);
 await page.locator('#practice-task-select').selectOption('i-double');
 await page.locator('[data-practice-open="inputs"]>summary').click();
 await page.locator('#practice-input-0').fill('0,5');await page.locator('#practice-input-1').fill('−1/4');
 await page.locator('#check-practice-inputs').click();assert.equal(await page.locator('.input-good').count(),2);
 await page.locator('[data-practice-open="approach"]>summary').click();await page.locator('[data-choice="0:1"]').click();assert.match(await page.locator('#choice-feedback-0').innerText(),/anderer Ansatz/);
 await page.locator('#practice-hint').click();await page.locator('#practice-hint').click();
 await page.locator('[data-practice-open="recipe"]>summary').click();await page.locator('#practice-solution').click();
 await page.screenshot({path:'tmp/practice-inverse-desktop.png',fullPage:true});
 await page.reload();assert.equal(await page.locator('#practice-input-0').inputValue(),'0,5');assert.equal(await page.locator('.practice-solution').count(),1);
 const after=await state();assert.deepEqual(after.reviews.total,saved.reviews.total);assert.equal(after.notes['recall-total'],'Theorie bleibt');assert.deepEqual(after.examSessions,saved.examSessions);
 await page.locator('#practice-input-0').fill('1/0');await page.locator('#check-practice-inputs').click();assert.match(await page.locator('#numeric-status').innerText(),/gültige/);
 // Actual export/import controls, including the new training and old theory data.
 const beforeExport=await state();await page.goto(base+'#/quellen');
 const downloadPromise=page.waitForEvent('download');await page.locator('#export-state').click();const download=await downloadPromise;
 const exported=JSON.parse(fs.readFileSync(await download.path(),'utf8'));assert.deepEqual(exported.state,beforeExport);
 await page.evaluate(()=>localStorage.removeItem('analysis2b-v1'));await page.reload();
 await page.locator('#import-state').setInputFiles({name:'lernstand.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(exported))});
 await page.waitForFunction(()=>document.getElementById('import-status')?.textContent==='Lernstand importiert.');
 assert.deepEqual(await state(),beforeExport);await page.goto(base+'#/klausur');assert.equal(await page.locator('#practice-input-0').inputValue(),'1/0');
 // Every task, all hints, answers, recipe and solution: no math errors or document overflow.
 for(const width of [1400,390]){
  await page.setViewportSize({width,height:900});
  for(const task of practiceBank){
   const fixture=emptyState(),attempt=startAttempt(fixture.practice,task,now);attempt.hintCount=task.hints.length;attempt.recipeSeen=true;attempt.open={approach:true,recipe:true,solution:true,inputs:!!task.fields.length,notes:false,source:true};
   await page.evaluate(s=>localStorage.setItem('analysis2b-v1',JSON.stringify(s)),fixture);await page.reload();await page.locator('#solution-heading').waitFor();
   assert.equal(await page.locator('.katex-error').count(),0,task.id+' math');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),task.id+' document overflow '+width);
   assert.equal(await page.locator('.practice-options button').count(),4);
   assert.equal(await page.locator('.practice-hints li').count(),task.hints.length);
   assert((await page.locator('.practice-solution').innerText()).length>250,task.id+' substantive solution');
   if(['t-shift','p-multifree','k-annulus'].includes(task.id))await page.screenshot({path:`tmp/practice-${task.id}-${width}.png`,fullPage:true});
  }
 }
 // Fresh appearance and keyboard access on mobile.
 await page.evaluate(()=>localStorage.removeItem('analysis2b-v1'));await page.reload();await page.locator('#practice-task-heading').waitFor();
 await page.screenshot({path:'tmp/practice-mobile.png',fullPage:true});
 await page.locator('#practice-hint').focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.practice-hints li').count(),1);
 await page.locator('[data-practice-open="approach"]>summary').click();await page.locator('[data-choice="0:0"]').click();assert.match(await page.locator('#choice-feedback-0').innerText(),/Das passt/);
 await page.goto(base+'#/satznamen');await page.waitForURL('**/#/abfragen');await page.locator('#recall-module').selectOption('klausur');assert.equal(await page.locator('.recall-overview li').count(),24);
 await page.goto(base+'#/kompaktheit/theorie/heine-borel');assert.equal(await page.locator('.name-caption').count(),1);assert.equal(await page.locator('.recognition-hint').count(),1);
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({browser:'passed',tasks:32,viewports:[1400,390],persistence:'passed',legacyAndRecall:'preserved',keyboard:'passed',pageErrors:errors}));
}finally{await browser.close();}
