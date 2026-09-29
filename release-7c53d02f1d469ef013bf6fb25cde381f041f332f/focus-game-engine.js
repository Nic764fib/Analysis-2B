import {gameTopics,gameItems,itemById,topicById} from './focus-game-data.js';

export const GAME_KEY='analysis2b-satzsprint-v1';
export const emptyGame=()=>({passed:{},awards:{},streak:0,best:0,rounds:0,session:null});
const validCount=value=>Number.isInteger(value)&&value>=0&&value<=100000;
export function cleanGame(raw){
 const game=emptyGame();if(!raw||typeof raw!=='object')return game;
 for(const field of ['passed','awards'])for(const item of gameItems)if(typeof raw[field]?.[item.id]==='boolean')game[field][item.id]=raw[field][item.id];
 for(const field of ['streak','best','rounds'])if(validCount(raw[field]))game[field]=raw[field];
 const s=raw.session;
 if(s&&Array.isArray(s.queue)&&s.queue.length>0&&s.queue.length<=26&&s.queue.every(id=>itemById.has(id))&&Number.isInteger(s.index)&&s.index>=0&&s.index<=s.queue.length){
  const choices={};
  for(const id of new Set(s.queue))if(itemById.get(id).type==='choice'){
   const order=s.choices?.[id];choices[id]=Array.isArray(order)&&order.length===4&&new Set(order).size===4&&order.every(n=>Number.isInteger(n)&&n>=0&&n<4)?order:[0,1,2,3];
  }
  game.session={queue:[...s.queue],index:s.index,choices,feedback:null,draft:typeof s.draft==='string'?s.draft.slice(0,15000):'',revealed:!!s.revealed,checks:Array.isArray(s.checks)?[...new Set(s.checks.filter(n=>Number.isInteger(n)&&n>=0&&n<10))]:[],topic:topicById.has(s.topic)?s.topic:null,earned:validCount(s.earned)?s.earned:0,answers:Array.isArray(s.answers)?s.answers.filter(a=>itemById.has(a?.id)&&typeof a.ok==='boolean').slice(0,26).map(a=>({id:a.id,ok:a.ok})):[]};
  const current=itemById.get(s.queue[s.index]);
  if(current&&s.feedback&&typeof s.feedback.ok==='boolean'&&[null,0,1,2,3].includes(s.feedback.selected)&&validCount(s.feedback.xp))game.session.feedback={ok:s.feedback.ok,selected:s.feedback.selected,xp:s.feedback.xp};
 }
 return game;
}
export const totalXP=game=>gameItems.reduce((sum,item)=>sum+(game.awards[item.id]?(item.type==='recall'?20:10):0),0);
export const stars=(game,topic)=>[`${topic}:q0`,`${topic}:q1`,`${topic}:recall`].filter(id=>game.passed[id]).length;
export const recalledCount=game=>gameTopics.filter(t=>game.passed[`${t.id}:recall`]).length;
export function shuffle(values,random=Math.random){const result=[...values];for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
export function nextQueue(game,{topic=null,weak=false}={}){
 if(topicById.has(topic))return [`${topic}:q0`,`${topic}:q1`,`${topic}:recall`];
 const candidates=gameTopics.map((t,rank)=>{
  const ids=[`${t.id}:q0`,`${t.id}:q1`,`${t.id}:recall`];
  return {id:ids.find(id=>!game.passed[id])||ids[game.rounds%3],rank,stars:stars(game,t.id)};
 });
 const available=weak?candidates.filter(c=>c.stars<3):candidates;
 const pool=available.length?available:candidates;
 return pool.sort((a,b)=>a.stars-b.stars||((a.rank-game.rounds*5+1300)%13)-((b.rank-game.rounds*5+1300)%13)).slice(0,5).map(c=>c.id);
}
export function startRound(game,options={},random=Math.random){
 const queue=nextQueue(game,options),choices={};
 for(const id of queue)if(itemById.get(id).type==='choice')choices[id]=shuffle([0,1,2,3],random);
 game.session={queue,index:0,choices,feedback:null,draft:'',revealed:false,checks:[],topic:options.topic||null,earned:0,answers:[]};
 return game.session;
}
export function answer(game,result){
 const s=game.session,item=itemById.get(s?.queue[s.index]);
 if(!item||s.feedback)return null;
 if(item.type==='choice'&&(!Number.isInteger(result)||result<0||result>3))return null;
 if(item.type==='recall'&&(!s.revealed||!['again','partial','complete'].includes(result)))return null;
 const ok=item.type==='choice'?result===item.answer:result==='complete';
 const xp=ok&&!game.awards[item.id]?(item.type==='choice'?10:20):0;
 game.passed[item.id]=ok;
 if(ok){game.awards[item.id]=true;game.streak++;game.best=Math.max(game.best,game.streak);}else game.streak=0;
 s.earned+=xp;s.answers.push({id:item.id,ok});s.feedback={ok,selected:item.type==='choice'?result:null,xp};
 if(!ok&&s.queue.filter(id=>id===item.id).length<2){
  s.queue.splice(Math.min(s.index+3,s.queue.length),0,item.id);
 }
 return {...s.feedback,item};
}
export function advance(game){
 const s=game.session;if(!s?.feedback)return false;
 s.index++;s.feedback=null;s.draft='';s.revealed=false;s.checks=[];
 if(s.index===s.queue.length){game.rounds++;return true;}return false;
}
export const roundMistakes=game=>[...new Set((game.session?.answers||[]).filter(a=>!a.ok).map(a=>a.id))];
