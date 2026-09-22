import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from '../dist/vendor/katex/katex.mjs';
import {practiceBank,taskById,topics,families,readableMath} from '../dist/practice-bank.js';
import {emptyPractice,cleanPractice,ensureAttempt,startAttempt,advance,rateAttempt,chooseTask,checkNumber,optionsFor,independent,familyProgress} from '../dist/practice-engine.js';
import {emptyState,mergeState} from '../dist/storage.js';
import {modules} from '../dist/curriculum.js';
assert.equal(practiceBank.length,32);assert.equal(new Set(practiceBank.map(t=>t.id)).size,32);
let formulas=0;
function* strings(x){if(typeof x==='string')yield x;else if(x&&typeof x==='object')for(const v of Object.values(x))yield* strings(v);}
for(const topic of Object.keys(topics))assert.equal(practiceBank.filter(t=>t.topic===topic).length,8);
for(const id of Object.keys(families))assert(practiceBank.filter(t=>t.family===id).length>=2,id);
const positions=new Set();
assert.equal(readableMath(String.raw`$u^2/8+v^2/2$`),String.raw`$u^2/8+v^2/2$`,'Do not turn an exponent into a fraction');
assert.equal(readableMath(String.raw`$$\begin{pmatrix}-2/3&1/3\\1/3&-2/3\end{pmatrix}$$`),String.raw`$$\begin{pmatrix}-\frac{2}{3}&\frac{1}{3}\\\frac{1}{3}&-\frac{2}{3}\end{pmatrix}$$`);
assert.equal(readableMath('1/2'),'1/2','Numerical input expectations remain plain numbers');
for(const t of practiceBank){
 assert(t.source&&t.purpose&&t.title&&t.parts.length&&t.hints.length>=3&&t.recipe.length>=4,t.id);
 assert(t.questions.length>=1&&t.questions.length<=2,t.id);
 for(const part of t.parts)assert((t.intro||part.prompt)&&(part.solution||part.steps?.length>=1),t.id);
 for(const q of t.questions){assert.equal(q.options.filter(o=>o.correct).length,1);assert(q.options.every(o=>o.text&&o.explanation));}
 positions.add(optionsFor(t,1,0).findIndex(o=>o.correct));
 for(const f of t.fields)assert(checkNumber(f.answer,f).correct,t.id);
 for(const s of strings(t))for(const m of s.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)){katex.renderToString(m[1]??m[2],{throwOnError:true,strict:'ignore'});formulas++;}
}
assert.equal(positions.size,3,'Correct answers must vary in position');
for(const [input,answer] of [['−0,5','-1/2'],['2/6','1/3'],['0,25 / 0,5','1/2'],['+02.00','2']])assert(checkNumber(input,{answer}).correct,input);
for(const input of ['','1/0','alert(1)','2abc','1,2,3','Infinity','1/2/3'])assert(!checkNumber(input,{answer:'1'}).valid,input);
assert(!checkNumber('0.333333',{answer:'1/3'}).correct,'No silently accepted approximate answers');
const now=1800000000000,day=86400000;
let p=emptyPractice(),a=ensureAttempt(p,now);const first=a.taskId;
assert.equal(ensureAttempt(p,now+50000),a,'Opening or resuming must not create a fresh attempt');
a.open.recipe=true;a.recipeSeen=true;a.hintCount=2;a.note='A \"quoted\" note';a.inputs=['−1/2'];a.open.inputs=true;
a.choices=[-1];rateAttempt(a,'helped',now+5);
p=cleanPractice(JSON.parse(JSON.stringify(p)));assert.equal(p.attempts[0].note,a.note);assert.equal(p.attempts[0].hintCount,2);
const changed=advance(p,now+100);assert.notEqual(changed.taskId,first);
assert(!changed.rating);assert.equal(p.attempts.filter(a=>a.rating).length,1,'Skipping adds no assessment');
assert.deepEqual(cleanPractice(p),p,'Migration should be idempotent');
const malicious=cleanPractice(JSON.parse('{"filter":"__proto__","attempts":[{"id":1,"taskId":"constructor"},{"id":2,"taskId":"k-annulus","choices":[99],"open":{"recipe":true},"hintCount":999}]}'));
assert.equal(malicious.filter,'all');assert.equal(malicious.attempts.length,1);assert.equal(malicious.attempts[0].choices[0],null);assert.equal(malicious.attempts[0].hintCount,3);
const saved=emptyState();saved.practice=p;saved.notes={'exam-fokus-a-123-a-compact-1':'Alte Notiz','recall-total':'Theorieentwurf'};saved.known={total:true};saved.reviews={total:{level:2,due:now,schedule:2}};saved.examSessions={'fokus-a':{startedAt:now,part:2,assessments:{'a-inverse':'secure'}}};
const restored=mergeState(emptyState(),JSON.parse(JSON.stringify(saved)),modules.map(m=>m.id));assert.deepEqual(restored,saved,'Practice, notes, recall and old sessions survive roundtrip together');
// A single persistently difficult topic cannot take over the stream.
for(const condition of ['skip','independent','struggle']){
 const state=emptyPractice(),sequence=[];
 for(let i=0;i<120;i++){
  const at=ensureAttempt(state,now+i*60000),t=taskById[at.taskId];sequence.push(t);
  if(condition!=='skip')rateAttempt(at,condition==='struggle'&&t.topic==='implicit'?'again':'independent',now+i*60000);
  advance(state,now+(i+1)*60000);
 }
 assert.equal(new Set(sequence.slice(0,4).map(t=>t.topic)).size,4,'Initial coverage: '+condition);
 assert.equal(new Set(sequence.map(t=>t.id)).size,32,'All variants remain reachable: '+condition);
 for(let i=7;i<sequence.length;i++)assert.equal(new Set(sequence.slice(i-6,i+1).map(t=>t.topic)).size,4,'No starvation: '+condition);
}
// Targeting is voluntary; repeated tasks keep individual attempts instead of overwriting notes.
p=emptyPractice();p.filter='scalar';for(let i=0;i<8;i++){a=ensureAttempt(p,now+i);assert.equal(taskById[a.taskId].family,'scalar');advance(p,now+i+1);}
p=emptyPractice();a=startAttempt(p,taskById['i-triangle'],now);a.choices=[0];assert(!independent(a),'Selection alone is not independent solving');rateAttempt(a,'independent',now);assert(independent(a));a.hintCount=1;assert(!independent(a));
assert.equal(familyProgress(p).find(f=>f.id==='inverseDerivative').independent,false);
// A previously successful family becomes eligible again after a day.
p=emptyPractice();p.filter='inverseDerivative';a=startAttempt(p,taskById['i-triangle'],now);rateAttempt(a,'independent',now);assert.notEqual(chooseTask(p,now+day).id,a.taskId);
assert(!fs.readFileSync('dist/app.js','utf8').includes("navLink('satznamen'"));
assert(!fs.readFileSync('dist/theory-name-ui.js','utf8').includes('renderTheoremNames'));
fs.mkdirSync('tmp',{recursive:true});fs.writeFileSync('tmp/practice-bank.json',JSON.stringify(practiceBank,null,2));
console.log(JSON.stringify({practiceTasks:32,families:12,formulas,selection:'coverage and non-starvation passed',persistence:'passed',numeric:'exact fractions passed'}));
