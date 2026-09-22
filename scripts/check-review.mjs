import assert from 'node:assert/strict';
import {nextReview,reviewLabel,migrateReviews,reviewQueue} from '../dist/review.js';
import {emptyState,mergeState} from '../dist/storage.js';
import {modules} from '../dist/curriculum.js';
import {examRecallSources,examFocus,isExamRecall,isExamFocus} from '../dist/exam-recall.js';

const now=1800000000000,day=86400000;
const cards=modules.flatMap(m=>m.theory);
assert.equal(cards.filter(isExamRecall).length,24);
assert.equal(Object.keys(examRecallSources).length,24);
assert.equal(cards.filter(isExamFocus).length,4);
assert(Object.keys(examFocus).every(id=>isExamRecall({id})));
const selected=['compact-def','sequential','heine-borel','cantor','stability','total','jacobi','c1','chain','mean','diffeo','inverse-theorem','implicit-theorem','ck','schwarz','hessian','divergence','laplace','taylor-theorem','gradient-theorem','critical-definition','complete','contraction','banach'];
assert.deepEqual(cards.filter(isExamRecall).map(t=>t.id).sort(),selected.sort());
for(const id of ['orthogonal','convergence','uniform-criteria','integral-limit','derivative-limit']){
 assert(!isExamRecall({id}),`${id} must stay outside exam recall`);
 assert(cards.some(t=>t.id===id),`${id} must remain available in its module`);
}

assert.deepEqual(nextReview(null,'again',now),{level:0,due:now+60000,schedule:2});
assert.deepEqual(nextReview(null,'partial',now),{level:0,due:now+600000,schedule:2});
let review=nextReview(null,'complete',now);
assert.equal(review.due,now+day);
assert.equal(reviewLabel(review,'complete',now),'Termin bleibt');
assert.deepEqual(nextReview(review,'complete',now+1000),review);
review=nextReview(review,'complete',review.due);
assert.equal(review.due,now+3*day);
review=nextReview(review,'complete',review.due);
assert.equal(review.due,now+6*day);
review=nextReview(review,'complete',review.due);
assert.equal(review.due,now+9*day);
for(const rating of ['again','partial']){
 const failed=nextReview(review,rating,now);
 assert.equal(failed.level,0);
 assert.equal(nextReview(failed,'complete',failed.due).due,failed.due+day);
}
assert.throws(()=>nextReview(null,'bad',now));

const legacy={a:{level:1,due:now+day},b:{level:2,due:now+3*day},c:{level:3,due:now+7*day},d:{level:0,due:now+600000}};
assert(migrateReviews(legacy));
assert.deepEqual(Object.values(legacy).map(r=>r.due),[now+day,now+2*day,now+3*day,now+600000]);
assert.equal(migrateReviews(legacy),false);
const saved={...emptyState(),reviews:legacy,notes:{'recall-total':'Mein Entwurf'},known:{total:true}};
assert.deepEqual(mergeState(emptyState(),JSON.parse(JSON.stringify(saved)),modules.map(m=>m.id)),saved);

const queueCards=['new','focus','due','dueFocus','later'].map(id=>({id}));
const reviews={due:{level:0,due:now-1000},dueFocus:{level:1,due:now},later:{level:0,due:now+60000}};
const focused=t=>t.id.toLowerCase().includes('focus');
assert.deepEqual(reviewQueue(queueCards,reviews,{},'due',focused,now).map(t=>t.id),['due','dueFocus','focus','new']);
assert.equal(reviewQueue(queueCards,reviews,{},'due',focused,now+60000).length,5);
assert.equal(reviewQueue(queueCards,reviews,{due:true},'open',focused,now).length,4);
assert.equal(reviewQueue(queueCards,reviews,{},'all',focused,now).length,5);
console.log(JSON.stringify({examRecall:24,focus:4,reviewIntervals:'1m / 10m / 1d / 2d / 3d',migration:'passed',queue:'passed'}));
