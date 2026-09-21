import {trainingSets} from './training.js';
import {esc,prose,partCard,checklist} from './study-ui.js';

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
export function renderExam(ctx){
 ctx.clearTimer();
 const {state,save,shell,modules,examInfo}=ctx,sets=examSets(modules,examInfo);
 let selected=state.selectedExam||'fokus-a';
 const set=sets.find(s=>s.id===selected)||sets[0];selected=set.id;
 const session=state.examSessions?.[selected];
 const active=!!session?.startedAt,finished=!!session?.finishedAt;
 const overview=`<div class="eyebrow">Klausurtraining</div><h1>Ohne Lösungshilfe rechnen</h1><div class="training-choices" aria-label="Trainingsset">${sets.map(s=>`<button data-exam-set="${s.id}" class="${s.id===selected?'selected':''}" aria-pressed="${s.id===selected}">${esc(s.title)}</button>`).join('')}</div><p class="lead">${esc(set.description)}</p><p class="meta">${esc(set.source)}</p>`;
 let body=overview;
 if(!active){
  body+=`<div class="training-outline">${set.tasks.map((t,i)=>`<div><span class="num">${String(i+1).padStart(2,'0')}</span><span>${esc(t.title)}</span><span class="meta">${t.parts.length} Teilaufgaben</span></div>`).join('')}</div><div class="panel"><h3>Auf Papier oder direkt hier bearbeiten</h3><p>Die Uhr zählt deine Bearbeitungszeit. Lösungen und Kontrolllisten bleiben bis zur Auswertung verborgen.</p>${selected==='2025'?'<p class="small">Aufgabe 3 enthält eine falsche Nullstellenbehauptung. Die korrigierte Übungsfassung ist ausdrücklich benannt.</p>':''}<button class="primary" id="start-exam">Training beginnen</button></div>`;
 }else{
  const index=Math.min(session.part||0,set.tasks.length-1),task=set.tasks[index];
  body+=`<div class="exam-controls"><strong>${finished?'Auswertung':'Bearbeitung'}</strong><span id="exam-clock" aria-label="Bearbeitungszeit"></span><button id="${finished?'restart-exam':'finish-exam'}">${finished?'Neue Bearbeitung':'Beenden und Lösungen öffnen'}</button></div><div class="section-picker"><label for="exam-part">Aufgabe</label><select id="exam-part">${set.tasks.map((t,i)=>`<option value="${i}" ${i===index?'selected':''}>${i+1}. ${esc(t.title)}</option>`).join('')}</select></div><article class="panel exercise"><div class="label">${esc(task.source)}</div><h2 class="task-heading">${index+1}. ${esc(task.title)}${task.points?' <span class="badge">10 Punkte</span>':''}</h2>${task.parts.map((p,i)=>partCard(p,{key:`exam-${selected}-${session.startedAt}-${task.id}-${i}`,state,revealed:finished,exam:true})).join('')}${finished?`<div class="rule"><label for="assessment">Diese Aufgabe</label><select id="assessment"><option value="">Selbst einschätzen</option><option value="again" ${session.assessments?.[task.id]==='again'?'selected':''}>Noch üben</option><option value="partial" ${session.assessments?.[task.id]==='partial'?'selected':''}>Rechnung oder Begründung unvollständig</option><option value="secure" ${session.assessments?.[task.id]==='secure'?'selected':''}>Vollständig und ohne Hilfe gelöst</option></select></div>`:''}</article><div class="focus-pager"><button id="exam-prev" ${index===0?'disabled':''}>← Zurück</button><span class="meta">${index+1} / ${set.tasks.length}</span><button id="exam-next" ${index===set.tasks.length-1?'disabled':''}>Weiter →</button></div>`;
  if(finished){
   const secure=set.tasks.filter(t=>session.assessments?.[t.id]==='secure').length;
   body+=`<div class="panel"><h3>${secure} von ${set.tasks.length} Aufgaben vollständig gelöst</h3><p class="small muted">Deine Einschätzung anhand von Rechnung und Begründung. Keine automatische Benotung.</p><div class="actions"><a href="#/abfragen">Sätze wiederholen</a><a href="#/blaetter/3">Blatt 3–7 durcharbeiten</a></div></div>`;
  }
 }
 shell(body,'klausur','Klausurtraining');
 document.querySelectorAll('[data-exam-set]').forEach(button=>button.onclick=()=>{state.selectedExam=button.dataset.examSet;save();renderExam(ctx);});
 if(!active){document.querySelector('#start-exam').onclick=()=>{state.examSessions||={};state.examSessions[selected]={startedAt:Date.now(),part:0,assessments:{}};save();renderExam(ctx);};return;}
 const index=Math.min(session.part||0,set.tasks.length-1);
 const choose=i=>{session.part=i;save();renderExam(ctx);window.scrollTo(0,0);};
 document.querySelector('#exam-part').onchange=e=>choose(Number(e.target.value));
 document.querySelector('#exam-prev').onclick=()=>choose(Math.max(0,index-1));
 document.querySelector('#exam-next').onclick=()=>choose(Math.min(set.tasks.length-1,index+1));
 const tick=()=>{const el=document.querySelector('#exam-clock');if(el){const elapsed=Math.max(0,Math.floor(((session.finishedAt||Date.now())-session.startedAt)/1000));el.textContent=`${Math.floor(elapsed/60)}:${String(elapsed%60).padStart(2,'0')}`;}};
 tick();if(!finished)ctx.setTimer(setInterval(tick,1000));
 if(finished){
  document.querySelector('#restart-exam').onclick=()=>{state.examSessions[selected]={startedAt:Date.now(),part:0,assessments:{}};save();renderExam(ctx);};
  document.querySelector('#assessment').onchange=e=>{session.assessments||={};session.assessments[set.tasks[index].id]=e.target.value;save();renderExam(ctx);};
 }else document.querySelector('#finish-exam').onclick=()=>{session.finishedAt=Date.now();save();renderExam(ctx);window.scrollTo(0,0);};
}
