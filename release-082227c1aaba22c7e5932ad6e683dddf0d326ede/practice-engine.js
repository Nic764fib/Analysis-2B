import {practiceBank,taskById,families,topics} from './practice-bank.js';
const day=86400000;
const safeObject=x=>x&&typeof x==='object'&&!Array.isArray(x);
const finite=x=>Number.isFinite(x)&&x>=0;
export const ratings=['independent','helped','again'];
export function emptyPractice(){return {version:1,filter:'all',current:null,serial:0,attempts:[]};}
export function cleanPractice(saved){
 const out=emptyPractice();if(!safeObject(saved))return out;
 if(saved.filter==='all'||Object.hasOwn(topics,saved.filter)||Object.hasOwn(families,saved.filter))out.filter=saved.filter;
 const seen=new Set();
 for(const a of Array.isArray(saved.attempts)?saved.attempts:[]){
  if(!safeObject(a)||!Object.hasOwn(taskById,a.taskId)||!Number.isSafeInteger(a.id)||a.id<1||seen.has(a.id))continue;
  const t=taskById[a.taskId];seen.add(a.id);
  const c={id:a.id,taskId:a.taskId,startedAt:finite(a.startedAt)?a.startedAt:0,
   inputs:t.fields.map((_,i)=>typeof a.inputs?.[i]==='string'?a.inputs[i]:''),
   choices:t.questions.map((q,i)=>Number.isInteger(a.choices?.[i])&&a.choices[i]>=-1&&a.choices[i]<q.options.length?a.choices[i]:null),
   checks:t.fields.map((_,i)=>typeof a.checks?.[i]==='boolean'?a.checks[i]:null),
   hintCount:Number.isInteger(a.hintCount)?Math.max(0,Math.min(a.hintCount,t.hints.length)):0,
   note:typeof a.note==='string'?a.note:'',open:{},recipeSeen:a.recipeSeen===true,numericWrong:a.numericWrong===true};
  for(const k of ['approach','recipe','solution','notes','source','inputs'])c.open[k]=a.open?.[k]===true;
  if(ratings.includes(a.rating)){c.rating=a.rating;c.ratedAt=finite(a.ratedAt)?a.ratedAt:c.startedAt;}
  if(finite(a.advancedAt))c.advancedAt=a.advancedAt;
  out.attempts.push(c);
 }
 out.serial=Math.max(0,...out.attempts.map(a=>a.id));
 if(seen.has(saved.current))out.current=saved.current;
 return out;
}
export function currentAttempt(p){return p.attempts.find(a=>a.id===p.current);}
export function hasApproachError(a){return a.choices.some((value,i)=>value===-1||value!==null&&!taskById[a.taskId].questions[i].options[value]?.correct);}
export function usedHelp(a){return a.hintCount>0||a.recipeSeen||hasApproachError(a)||a.numericWrong;}
export function independent(a){return a.rating==='independent'&&!usedHelp(a);}
export function familyProgress(p){return Object.keys(families).map(id=>{
 const rated=p.attempts.filter(a=>taskById[a.taskId].family===id&&a.rating);
 const last=rated.at(-1);
 return {id,last,independent:!!last&&independent(last),attempts:rated.length};
});}
export function optionsFor(task,attemptId,questionIndex){
 const options=task.questions[questionIndex].options.map((o,i)=>({...o,index:i}));
 let seed=[...task.id].reduce((s,c)=>Math.imul(s,31)+c.charCodeAt(0),attemptId+questionIndex)>>>0;
 for(let i=options.length-1;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const j=seed%(i+1);[options[i],options[j]]=[options[j],options[i]];}
 return options;
}
export function chooseTask(p,now=Date.now()){
 let pool=practiceBank.filter(t=>p.filter==='all'||t.topic===p.filter||t.family===p.filter);
 const recent=p.attempts.slice(-7),current=currentAttempt(p);
 if(pool.length>1)pool=pool.filter(t=>t.id!==current?.taskId);
 const ranked=pool.map((t,index)=>{
  const familyAttempts=p.attempts.filter(a=>taskById[a.taskId].family===t.family);
  const observed=familyAttempts.filter(a=>a.rating||hasApproachError(a)||a.numericWrong||a.hintCount||a.recipeSeen);
  const last=observed.at(-1),rated=familyAttempts.filter(a=>a.rating).at(-1);
  const same=p.attempts.filter(a=>a.taskId===t.id),lastSame=same.at(-1);
  const topicVisits=p.attempts.filter(a=>taskById[a.taskId].topic===t.topic).length;
  const successful=familyAttempts.some(independent);
  let score=50-t.level*(successful?2:10)-Math.min(topicVisits,30)*2;
  if(!familyAttempts.length)score+=22;
  if(!same.length)score+=34;
  score-=Math.min(36,same.length*6);
  if(lastSame)score+=Math.min(16,Math.max(0,(now-lastSame.startedAt)/day)*4);
  if(recent.some(a=>a.taskId===t.id))score-=65;
  // A difficult method gets another variant after intervening work, not a permanent loop.
  if(last&&(last.rating==='again'||last.rating==='helped'||usedHelp(last))){
   const gap=p.attempts.length-1-p.attempts.indexOf(last);
   if(gap>=2)score+=38;
   if(t.level<=taskById[last.taskId].level)score+=5;
  }
  if(rated&&independent(rated)){
   const since=now-rated.ratedAt;
   score+=since>=day?24: -24;
  }
  if(p.filter==='all'){
   if(!topicVisits)score+=120;
   const previousTopic=recent.at(-1)&&taskById[recent.at(-1).taskId].topic;
   if(t.topic===previousTopic)score-=18;
   // The least recently visited topic cannot be crowded out by one persistent difficulty.
   if(p.attempts.length>=6&&!recent.slice(-6).some(a=>taskById[a.taskId].topic===t.topic))score+=90;
  }
  if(current&&taskById[current.taskId].family===t.family)score-=18;
  return {t,score,index};
 });
 ranked.sort((a,b)=>b.score-a.score||a.t.level-b.t.level||a.index-b.index);
 return ranked[0].t;
}
export function startAttempt(p,task,now=Date.now()){
 const a={id:++p.serial,taskId:task.id,startedAt:now,inputs:task.fields.map(()=>''),choices:task.questions.map(()=>null),checks:task.fields.map(()=>null),hintCount:0,note:'',recipeSeen:false,numericWrong:false,open:{approach:false,recipe:false,solution:false,notes:false,source:false,inputs:false}};
 p.attempts.push(a);p.current=a.id;return a;
}
export function ensureAttempt(p,now=Date.now()){return currentAttempt(p)||startAttempt(p,chooseTask(p,now),now);}
export function advance(p,now=Date.now()){
 const next=chooseTask(p,now);const current=currentAttempt(p);if(current)current.advancedAt=now;
 return startAttempt(p,next,now);
}
export function rateAttempt(a,rating,now=Date.now()){
 if(!ratings.includes(rating))throw Error('Unknown rating');
 a.rating=rating;a.ratedAt=now;
}
function decimal(s){
 if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)||s.length>100)return null;
 const negative=s[0]==='-';s=s.replace(/^[+-]/,'');const [integer='',fraction='']=s.split('.');
 return {n:BigInt((integer||'0')+fraction)*(negative?-1n:1n),d:10n**BigInt(fraction.length)};
}
export function rational(value){
 const s=String(value).trim().replaceAll('−','-').replaceAll(',','.');const parts=s.split('/').map(s=>s.trim());
 if(parts.length>2)return null;const a=decimal(parts[0]);if(!a)return null;
 if(parts.length===1)return a;const b=decimal(parts[1]);if(!b||b.n===0n)return null;
 return {n:a.n*b.d,d:a.d*b.n};
}
export function checkNumber(value,field){
 const a=rational(value),b=rational(field.answer);if(!a)return {valid:false,correct:false};
 if(!b)throw Error('Invalid answer in task bank');
 return {valid:true,correct:a.n*b.d===b.n*a.d};
}
