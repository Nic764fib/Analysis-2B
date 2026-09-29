import assert from 'node:assert/strict';
import katex from '../dist/vendor/katex/katex.mjs';
import {focusRecallIds} from '../dist/exam-recall.js';
import {gameTopics,gameItems,itemById} from '../dist/focus-game-data.js';
import {emptyGame,cleanGame,totalXP,stars,startRound,answer,advance,nextQueue} from '../dist/focus-game-engine.js';
assert.equal(gameTopics.length,13);
assert.deepEqual(new Set(gameTopics.map(t=>t.id)),new Set(focusRecallIds));
assert.equal(new Set(gameItems.map(t=>t.id)).size,39);
let formulas=0;
function strings(x){return typeof x==='string'?[x]:Array.isArray(x)?x.flatMap(strings):x&&typeof x==='object'?Object.values(x).flatMap(strings):[];}
for(const t of gameTopics){
 assert(t.checks.length>=2);assert.equal(t.questions.length,2);
 for(const q of t.questions){assert.equal(new Set(q.options).size,4);assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);assert(q.explanation);}
}
for(const str of strings(gameTopics))for(const m of str.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)){katex.renderToString(m[1]??m[2],{throwOnError:true,strict:'ignore'});formulas++;}
const game=emptyGame();
assert.equal(nextQueue(game).length,5);
startRound(game,{topic:'heine-borel'},()=>.2);
const q=itemById.get(game.session.queue[0]);
assert.equal(answer(game,(q.answer+1)%4).ok,false);
assert.equal(game.session.queue.filter(id=>id===q.id).length,2);
assert.equal(answer(game,q.answer),null);
assert.equal(totalXP(game),0);
const loaded=cleanGame(JSON.parse(JSON.stringify(game)));
assert.deepEqual(loaded,game);
advance(game);
while(game.session.index<game.session.queue.length){
 const item=itemById.get(game.session.queue[game.session.index]);
 if(item.type==='recall'){
  assert.equal(answer(game,'complete'),null);
  game.session.revealed=true;
 }
 const result=answer(game,item.type==='recall'?'complete':item.answer);
 assert(result.ok);assert.equal(answer(game,item.type==='recall'?'complete':item.answer),null);
 advance(game);
}
assert.equal(totalXP(game),40);assert.equal(stars(game,'heine-borel'),3);assert.equal(game.rounds,1);
for(const t of gameTopics){
 startRound(game,{topic:t.id});
 while(game.session.index<game.session.queue.length){
  const item=itemById.get(game.session.queue[game.session.index]);
  game.session.revealed=true;
  answer(game,item.type==='recall'?'complete':item.answer);advance(game);
 }
}
assert.equal(totalXP(game),520);
assert(gameTopics.every(t=>stars(game,t.id)===3));
assert.equal(nextQueue(game,{weak:true}).length,5);
startRound(game,{topic:'heine-borel'});
answer(game,1);advance(game);answer(game,0);advance(game);
game.session.revealed=true;answer(game,'partial');advance(game);
while(game.session.index<game.session.queue.length){const item=itemById.get(game.session.queue[game.session.index]);game.session.revealed=true;answer(game,item.type==='recall'?'again':(item.answer+1)%4);advance(game);}
assert.equal(game.session.queue.length,6,'each missed item retried only once');
assert.equal(totalXP(game),520,'earned XP retained without repeat farming');
assert.equal(stars(game,'heine-borel'),0);
assert.deepEqual(cleanGame({passed:{evil:true},awards:{evil:true},session:{queue:['evil'],index:0},streak:-1}),emptyGame());
console.log(JSON.stringify({topics:13,questions:26,freeRecall:13,formulas,retry:'once per round',maxXP:520,persistence:'passed',validation:'passed'}));
