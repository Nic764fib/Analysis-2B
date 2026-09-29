import {trainingSets} from './training.js';

export function examSets(modules,examInfo){
 const theories=modules.flatMap(m=>m.theory),exercises=modules.flatMap(m=>m.exercises);
 const legacy={id:'2025',title:'Altklausur 2025',description:'Vier Aufgaben zu je 10 Punkten. Originalfehler in Aufgabe 3 ausdrücklich gekennzeichnet.',source:'Vorliegende Altklausur 2025. Kein verbindlicher Aufbau für die Prüfung 2026.',tasks:examInfo.parts.map((p,i)=>({
  id:'legacy-'+i,title:p.title,points:10,source:'Altklausur 2025 · Aufgabe '+(i+1),
  parts:[...p.theoryIds.map(id=>{const t=theories.find(t=>t.id===id);return {label:t.kind,prompt:'Formuliere: '+t.title+'.',solution:t.text,checks:t.checks};}),...(i===0?['mean-proof','chain-exam']:p.ids).map(id=>{const e=exercises.find(e=>e.id===id);return {label:e.source,prompt:e.prompt,steps:e.steps,checks:e.checks};})]
 }))};
 const recall={
  'a-inverse':'inverse-theorem',
  'a-implicit':'implicit-theorem',
  'b-taylor':'taylor-theorem',
  'c-fixed':'banach'
 };
 const current=trainingSets.map(set=>({...set,tasks:set.tasks.map(task=>{
  const theory=theories.find(t=>t.id===recall[task.id]);
  return theory?{...task,parts:[{label:'Theorie',prompt:'Formuliere vollständig mit Voraussetzungen: '+theory.title+'.',solution:theory.text,checks:theory.checks},...task.parts]}:task;
 })}));
 return [...current,legacy];
}
export {renderPractice as renderExam} from './practice-ui.js';
