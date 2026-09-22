import {emptyPractice,cleanPractice} from './practice-engine.js';
const map=value=>value&&typeof value==='object'&&!Array.isArray(value);
const allowedKey=key=>!['__proto__','constructor','prototype'].includes(key);
export function emptyState(){return {known:{},done:{},notes:{},scores:{},reviews:{},positions:{},examSessions:{},selectedExam:'fokus-a',last:'kompaktheit',practice:emptyPractice()};}
export function mergeState(target,saved,moduleIds){
 if(!map(saved))return target;
 for(const field of ['known','done','notes','scores','reviews','positions']){
  if(!map(saved[field]))continue;
  for(const [key,value]of Object.entries(saved[field])){
   if(!allowedKey(key))continue;
   if(['known','done'].includes(field)&&typeof value==='boolean'||field==='notes'&&typeof value==='string'||field==='scores'&&Number.isFinite(value)&&value>=0&&value<=10||field==='positions'&&Number.isInteger(value)&&value>=0&&value<200)target[field][key]=value;
   if(field==='reviews'&&map(value)&&Number.isFinite(value.due)&&Number.isInteger(value.level)&&value.level>=0&&value.level<=3){
    target.reviews[key]={due:value.due,level:value.level};
    if(value.schedule===2)target.reviews[key].schedule=2;
   }
  }
 }
 for(const id of ['fokus-a','fokus-b','werkzeuge','2025']){
  const session=saved.examSessions?.[id];
  if(!map(session)||!Number.isFinite(session.startedAt)||session.startedAt<=0)continue;
  const clean={startedAt:session.startedAt,part:Number.isInteger(session.part)&&session.part>=0&&session.part<4?session.part:0,assessments:{}};
  if(Number.isFinite(session.finishedAt)&&session.finishedAt>=clean.startedAt)clean.finishedAt=session.finishedAt;
  if(map(session.assessments))for(const [key,value]of Object.entries(session.assessments))if(allowedKey(key)&&['','again','partial','secure'].includes(value))clean.assessments[key]=value;
  target.examSessions[id]=clean;
 }
 if(['fokus-a','fokus-b','werkzeuge','2025'].includes(saved.selectedExam))target.selectedExam=saved.selectedExam;
 if(moduleIds.includes(saved.last))target.last=saved.last;
 if(map(saved.practice))target.practice=cleanPractice(saved.practice);
 return target;
}
