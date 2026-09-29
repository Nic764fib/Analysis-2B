import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {gameTopics,itemById} from '../dist/focus-game-data.js';
import {GAME_KEY} from '../dist/focus-game-engine.js';
import {emptyState} from '../dist/storage.js';
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_PATH||'playwright');
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1100}});
const url=(process.env.CHECK_URL||'http://127.0.0.1:5193/')+'#/satzsprint';
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const seed=emptyState();seed.notes.sentinel='Meine alte Notiz';seed.known['inverse-theorem']=true;seed.reviews['inverse-theorem']={level:2,due:Date.now()+172800000,schedule:2};
const readGame=()=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)),GAME_KEY);
const readMain=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('analysis2b-v1')));
const current=async()=>{const g=await readGame();return itemById.get(g.session.queue[g.session.index]);};
const checkPage=async()=>{assert.equal(await page.locator('.katex-error').count(),0);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'page overflow');};
fs.mkdirSync('tmp/focus-game',{recursive:true});
try{
 await page.addInitScript(seed=>{if(!localStorage.getItem('analysis2b-v1'))localStorage.setItem('analysis2b-v1',JSON.stringify(seed));},seed);
 await page.goto(url);assert.equal(await page.locator('[data-game-topic]').count(),13);
 await page.screenshot({path:'tmp/focus-game/home-desktop.png',fullPage:true});
 await page.locator('[data-game-topic="heine-borel"]').click();
 assert(page.url().endsWith('#/satzsprint/runde'));
 const first=await current();await page.locator(`[data-game-choice="${(first.answer+1)%4}"]`).click();
 assert.equal(await page.locator('.game-option.is-wrong').count(),1);
 assert.equal((await readGame()).session.queue.length,4);
 assert.deepEqual(await readMain(),seed,'choice answers do not change knowledge');
 const choices=await page.locator('[data-game-choice]').evaluateAll(buttons=>buttons.map(b=>b.dataset.gameChoice));
 await page.reload();assert.equal(await page.locator('.game-feedback.incorrect').count(),1);
 assert.deepEqual(await page.locator('[data-game-choice]').evaluateAll(buttons=>buttons.map(b=>b.dataset.gameChoice)),choices);
 await page.locator('#game-next').click();
 await page.locator(`[data-game-choice="${(await current()).answer}"]`).click();
 await page.locator('#game-next').click();
 assert.equal((await current()).type,'recall');
 assert.equal(await page.locator('.game-recall-answer').count(),0);
 await page.locator('#game-draft').fill('Abgeschlossen und beschränkt in einem endlichdimensionalen normierten Raum.');
 await page.reload();assert.match(await page.locator('#game-draft').inputValue(),/endlichdimensionalen/);
 await page.locator('#game-reveal').click();
 assert.equal(await page.locator('[data-game-rating="complete"]').isDisabled(),true);
 for(const input of await page.locator('[data-game-check]').all())await input.check();
 await page.reload();assert.equal(await page.locator('[data-game-rating="complete"]').isDisabled(),false);
 assert.equal(await page.locator('[data-game-check]:checked').count(),2);
 await page.locator('[data-game-rating="complete"]').click();
 assert.equal(await page.locator('[data-game-check]:checked').count(),2);
 const main=await readMain();assert.equal(main.known['heine-borel'],true);assert.equal(main.reviews['heine-borel'].level,1);
 assert.match(main.notes['recall-heine-borel'],/endlichdimensionalen/);assert.equal(main.notes.sentinel,seed.notes.sentinel);
 assert.deepEqual(main.reviews['inverse-theorem'],seed.reviews['inverse-theorem']);
 await page.locator('#game-next').click();assert.equal((await current()).id,first.id);
 await page.locator(`[data-game-choice="${first.answer}"]`).click();await page.locator('#game-next').click();
 assert.equal(await page.locator('.game-finish').count(),1);assert.match(await page.locator('.game-earned').innerText(),/40 XP/);
 await page.goto(url);assert.equal(await page.locator('.game-topic.is-complete').count(),1);
 // All 13 complete source statements and their questions, including narrow screens.
 for(const [i,topic] of gameTopics.entries()){
  await page.setViewportSize({width:i%2?390:1440,height:1100});
  await page.locator(`[data-game-topic="${topic.id}"]`).click();
  for(let stage=0;stage<3;stage++){
   const item=await current();
   if(item.type==='choice'){
    await checkPage();
    await page.locator(`[data-game-choice="${item.answer}"]`).click();
    assert.equal(await page.locator('.game-feedback.correct').count(),1);
    if(topic.id==='implicit-theorem'&&stage===1)await page.screenshot({path:'tmp/focus-game/question-mobile.png',fullPage:true});
   }else{
    await page.locator('#game-reveal').click();await checkPage();
    for(const input of await page.locator('[data-game-check]').all())await input.check();
    await page.locator('[data-game-rating="complete"]').click();
   }
   await page.locator('#game-next').click();
  }
  if(i===0)assert.match(await page.locator('.game-earned').innerText(),/0 XP/,'no XP farming');
  await page.goto(url);
 }
 const final=await readGame();assert.equal(Object.values(final.awards).filter(Boolean).length,39);
 assert.equal(await page.locator('.game-topic.is-complete').count(),13);
 assert.equal((await readMain()).notes.sentinel,seed.notes.sentinel);
 await page.setViewportSize({width:390,height:1100});await checkPage();
 await page.screenshot({path:'tmp/focus-game/home-mobile.png',fullPage:true});
 // Normal five-question round persists across dashboard navigation and reload.
 await page.locator('#game-start').click();const queue=(await readGame()).session.queue;
 assert.equal(queue.length,5);await page.goto(url);await page.reload();
 await page.locator('#game-resume').click();assert.deepEqual((await readGame()).session.queue,queue);
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({topics:13,math:'passed',mistakeRetry:'passed',reload:'passed',freeRecallGate:'passed',sharedReviews:'passed',maxAwards:39,layouts:'desktop and mobile',consoleErrors:0}));
}finally{await browser.close();}
