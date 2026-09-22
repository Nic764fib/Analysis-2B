import {modules,examInfo,sources,errata} from './content.js';
import {learningGroups} from './curriculum.js';
import {worksheets} from './worksheet-data.js';
import {generate,parseNumber} from './generators.js';
import {initLab} from './lab-ui.js';
import {esc,prose,partCard,checklist} from './study-ui.js';
import {renderExam} from './exam-ui.js';
import {emptyState,mergeState} from './storage.js';
import {nameCaption,recognitionHint} from './theory-name-ui.js';
import {originLabels} from './theory-names.js';
import {examRecallSources,isExamRecall,examFocus,isExamFocus} from './exam-recall.js';
import {nextReview,reviewLabel,migrateReviews,reviewQueue} from './review.js';

const app=document.querySelector('#app'),KEY='analysis2b-v1';
let state=emptyState(),storageOK=true;
try{mergeState(state,JSON.parse(localStorage.getItem(KEY)||'null'),modules.map(m=>m.id));}catch{storageOK=false;}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{storageOK=false;const status=document.querySelector('#storage-status');if(status)status.textContent='Speichern nicht verfügbar. Bitte den Lernstand exportieren.';}}
const allTheory=modules.flatMap(m=>m.theory.map(t=>({...t,module:m.id,moduleTitle:m.title})));
const allExercises=modules.flatMap(m=>m.exercises.map(e=>({...e,module:m.id})));
const visualMark=e=>e.visualLink?`<a class="visual-mark" href="#/${e.visualLink}/grafik">Interaktiv ansehen ↗</a>`:'';
if(migrateReviews(state.reviews))save();
function rate(t,rating){state.known[t.id]=rating==='complete';state.reviews[t.id]=nextReview(state.reviews[t.id],rating);save();}
const focusBadge=t=>isExamFocus(t)?`<span class="exam-focus" title="${esc(examFocus[t.id])}">★ Schwerpunkt · zuerst lernen</span>`:'';
let recallMessage='';
let recallIndex=0,recallModule='all',recallOnly='due',variant=null,timer=null;
function clearTimer(){if(timer!==null){clearInterval(timer);timer=null;}}
function math(node=app){if(window.renderMathInElement)window.renderMathInElement(node,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:'ignore',trust:false});}
function route(){return location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);}
function navLink(id,title,num,active){return `<a class="nav-item ${active===id?'active':''}" href="#/${id}" ${active===id?'aria-current="page"':''}>${num?`<span class="num">${num}</span>`:''}${esc(title)}</a>`;}
function shell(content,active,breadcrumb='Lernplan'){
 app.innerHTML=`<div class="shell"><aside class="sidebar"><div class="sidebar-head"><a class="brand" href="#/">Analysis 2B</a><button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">Module &amp; Training</button></div><nav id="site-nav" aria-label="Hauptnavigation">${navLink('','Lernplan',null,active)}<div class="nav-label">Module</div>${modules.map((m,i)=>navLink(m.id,m.title,String(i+1).padStart(2,'0'),active)).join('')}<div class="nav-label">Üben und wiederholen</div>${navLink('blaetter','Übungsblätter 1–7',null,active)}${navLink('abfragen','Sätze abfragen',null,active)}${navLink('klausur','Klausurtraining',null,active)}${navLink('quellen','Quellen und Lernstand',null,active)}</nav><div class="sidebar-bottom">Klausur am 30. September<br>Keine Hilfsmittel<div id="storage-status" class="rule">${storageOK?'Fortschritt wird in diesem Browser gespeichert.':'Speichern nicht verfügbar.'}</div></div></aside><main class="main" id="main" tabindex="-1"><header class="topbar"><span>${esc(breadcrumb)}</span><a id="known-count" href="#/abfragen">${allTheory.filter(t=>state.known[t.id]).length} / ${allTheory.length} sicher</a></header><div class="content">${content}</div></main></div>`;
 math();bind();
 const toggle=document.querySelector('.menu-toggle');toggle.onclick=()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));document.querySelector('.sidebar').classList.toggle('menu-open',open);};
}
function moduleRow(m){const i=modules.indexOf(m);return `<a class="module-row" href="#/${m.id}"><span class="num">${String(i+1).padStart(2,'0')}</span><div><h3>${esc(m.title)}</h3><p>${esc(m.description)}</p><span class="meta">${m.theory.length} ${m.theory.length===1?'Aussage':'Aussagen'} · ${m.exercises.length} Aufgaben · ${m.exercises.filter(e=>state.done[e.id]).length} gelöst</span></div><span class="badge">${esc(m.priority)}</span></a>`;}
function home(){
 const solved=allExercises.filter(e=>state.done[e.id]).length;
 shell(`<div class="eyebrow">Analysis IIb · 2026</div><h1>Analysis IIb</h1><p class="lead">Die Voraussetzungen eines Satzes kennen und ihn selbstständig anwenden. Danach mit der Lösung vergleichen.</p><div class="two-col"><section class="panel"><div class="label">Weiterlernen</div><h3>${esc(modules.find(m=>m.id===state.last).title)}</h3><p class="small muted">${solved} von ${allExercises.length} Aufgaben als selbstständig gelöst markiert</p><div class="progress"><span style="width:${solved/allExercises.length*100}%"></span></div><a class="button-link primary" href="#/${state.last}">Modul fortsetzen</a></section><section class="panel"><div class="label">Gemischt üben</div><h3>Klausurtraining 2026</h3><p class="small">Aufgaben zu den vier Schwerpunkten. Mit freiwilligen Hinweisen, Rechenrezepten und passenden Wiederholungen.</p><a class="button-link" href="#/klausur">Training öffnen</a></section></div><div class="study-route"><span>1 · Satz mit Voraussetzungen</span><span>2 · Aufgabe ohne Hilfe</span><span>3 · Fehler nachrechnen</span><span>4 · Später erneut abfragen</span></div>${learningGroups.map(g=>`<section class="learning-group"><h2>${esc(g.title)}</h2><p class="small muted">${esc(g.description)}</p><div class="module-list">${g.ids.map(id=>moduleRow(modules.find(m=>m.id===id))).join('')}</div></section>`).join('')}<section class="panel rule"><h3>Übungsblätter 1–7</h3><p>Jede Originalangabe mit der zugehörigen Lösung, getrennt nach Teilaufgaben. Blatt 3–7 zuerst; Blatt 1–2 bei Bedarf ergänzen.</p><a href="#/blaetter/3">Mit Blatt 3 beginnen →</a></section><p class="meta">Lecture Notes und aktuelle Übungsblätter bestimmen den Stoff. Die Altklausur 2025 ergänzt das Training; der Bericht 2026 ist ein Erinnerungsbericht.</p>`,'');
}
function theoryCard(t){return `<article class="panel theorem" id="${t.id}"><div class="label">${esc(originLabels[t.origin])} · ${esc(t.kind)}</div>${focusBadge(t)}<h3>${esc(t.title)}</h3>${nameCaption(t)}${recognitionHint(t)}${visualMark(t)}${t.intro?`<details class="intuition"><summary>Bedeutung</summary>${prose(t.intro)}</details>`:''}<div class="formal">${prose(t.text)}</div>${t.note?`<details class="rule"><summary>Einordnung und Präzisierungen</summary>${prose(t.note)}</details>`:''}<p class="meta">${esc(t.source)}</p><details class="rule"><summary>Voraussetzungen und Aussage prüfen</summary>${checklist(t.checks)}</details>${t.proofIdea?`<details class="rule"><summary>Kurze Beweisidee</summary>${prose(t.proofIdea)}</details>`:''}<label class="check-row"><input type="checkbox" data-known="${t.id}" ${state.known[t.id]?'checked':''}>Kann ich ohne Vorlage vollständig formulieren</label></article>`;}
function exerciseCard(e){
 const original=e.parts?.length;
 return `<article class="panel exercise" id="${e.id}"><div class="exercise-title"><div><div class="label">${esc(e.source)}</div><h3>${esc(e.title)}</h3></div></div>${visualMark(e)}${original?`<div class="original-intro">${prose(e.originalIntro)}</div>${e.parts.map(p=>partCard(p,{key:`sheet-${e.originalNumber}-${p.label||'all'}`,state})).join('')}<p class="meta"><a href="#/blaetter/${e.originalNumber.split('.')[1]}/${e.originalNumber}">Ganze Aufgabe im Übungsblatt →</a></p>${state.notes[e.id]?`<details><summary>Bisheriger eigener Ansatz</summary><textarea aria-label="Bisheriger eigener Ansatz" data-note="${e.id}">${esc(state.notes[e.id])}</textarea></details>`:''}`:`<div class="statement">${prose(e.prompt)}</div><label class="note-label" for="note-${e.id}">Eigener Ansatz <span>oder auf Papier</span></label><textarea id="note-${e.id}" data-note="${e.id}" placeholder="Voraussetzungen, Rechnung, Ergebnis …">${esc(state.notes[e.id]||'')}</textarea><details><summary>Hinweise</summary><ol class="steps">${e.hint.map(h=>`<li>${prose(h)}</li>`).join('')}</ol></details><details class="solution"><summary>Lösung</summary><ol class="steps">${e.steps.map(s=>`<li>${prose(s)}</li>`).join('')}</ol>${e.pitfall?`<div class="callout">${prose(e.pitfall)}</div>`:''}</details>`}<details class="rule"><summary>Eigenen Lösungsweg kontrollieren</summary>${checklist(e.checks)}</details><label class="check-row"><input type="checkbox" data-done="${e.id}" ${state.done[e.id]?'checked':''}>Ohne Lösungshilfe selbstständig gelöst</label></article>`;
}

function modulePage(m,tab='theorie',entryId){
 if(!['theorie','aufgaben','grafik','varianten'].includes(tab)||tab==='varianten'&&!m.generator||tab==='grafik'&&!m.visual)tab='theorie';
 state.last=m.id;const key=m.id+'-'+tab,entries=tab==='theorie'?m.theory:m.exercises;
 const fromLink=entries.findIndex(e=>e.id===entryId);
 const selected=fromLink>=0?fromLink:Math.min(state.positions[key]||0,entries.length-1);state.positions[key]=selected;save();
 const i=modules.indexOf(m),tabs=[['theorie','Theorie'],['aufgaben','Aufgaben'],['grafik','Veranschaulichung'],['varianten','Zahlenvarianten']].filter(([id])=>id!=='varianten'||m.generator).filter(([id])=>id!=='grafik'||m.visual);
 const chooser=`<div class="section-picker"><label for="section-select">${tab==='theorie'?'Aussage':'Aufgabe'} ${selected+1} von ${entries.length}</label><select id="section-select">${entries.map((e,j)=>`<option value="${j}" ${j===selected?'selected':''}>${j+1}. ${isExamFocus(e)?'★ Schwerpunkt · ':''}${esc(e.title)}</option>`).join('')}</select></div>`;
 const pager=`<div class="focus-pager"><button id="prev-section" ${selected===0?'disabled':''}>← Zurück</button><span class="meta">${selected+1} / ${entries.length}</span><button id="next-section" ${selected===entries.length-1?'disabled':''}>Weiter →</button></div>`;
 let body;
 if(tab==='theorie')body=`<div class="focus-content">${chooser}${theoryCard(entries[selected])}${pager}<details class="rule"><summary>Das muss ich für die Prüfung können</summary>${m.goals.map(g=>`<p class="small">${esc(g)}</p>`).join('')}</details><div class="actions rule"><button data-recall-module="${m.id}">Dieses Modul abfragen</button><a href="#/${m.id}/aufgaben">Zu den Aufgaben →</a></div></div>`;
 else if(tab==='aufgaben')body=`<div class="focus-content">${chooser}${exerciseCard(entries[selected])}${pager}</div>`;
 else if(tab==='grafik')body=`<div class="visual-wide"><div id="visual-lab"></div></div>`;
 else body=`<section class="panel focus-content"><div class="label">Rechentraining</div><h3>Zahlenvarianten</h3><p class="small muted">Gleicher Aufgabentyp mit neuen Zahlen. Brüche wie 2/3 sind möglich. Die Prüfung kontrolliert dein Ergebnis; die Begründung vergleichst du selbst. Für andere Aufgabenstrukturen: <a href="#/klausur">Klausurtraining</a>.</p><div id="variant"></div></section>`;
 shell(`<div class="eyebrow">Modul ${String(i+1).padStart(2,'0')} · ${esc(m.priority)}</div><h1>${esc(m.title)}</h1><p class="lead">${esc(m.description)}</p>${m.connection?`<details class="prerequisites"><summary>Was du dafür brauchst</summary><p class="small">${esc(m.connection.text)}</p><div class="actions">${m.connection.before.map(id=>`<a href="#/${id}">${esc(modules.find(n=>n.id===id).title)}</a>`).join('')}</div></details>`:''}<p class="meta">${esc(m.source)}</p><nav class="tabs" aria-label="Modulansichten">${tabs.map(([id,label])=>`<a href="#/${m.id}/${id}" class="${tab===id?'active':''}" ${tab===id?'aria-current="page"':''}>${label}</a>`).join('')}</nav>${body}<div class="actions rule">${i>0?`<a href="#/${modules[i-1].id}">← ${esc(modules[i-1].title)}</a>`:''}${i<modules.length-1?`<a href="#/${modules[i+1].id}">${esc(modules[i+1].title)} →</a>`:''}</div>`,m.id,`Module / ${m.title}`);
 if(tab==='grafik')initLab(document.querySelector('#visual-lab'),{module:m,math,experiment:entryId});if(tab==='varianten')newVariant(m.generator);
 const choose=document.querySelector('#section-select');if(choose){const jump=n=>{location.hash=`/${m.id}/${tab}/${entries[n].id}`;};choose.onchange=e=>jump(Number(e.target.value));document.querySelector('#prev-section').onclick=()=>jump(Math.max(0,selected-1));document.querySelector('#next-section').onclick=()=>jump(Math.min(entries.length-1,selected+1));}
}
function worksheetPage(sheetValue='3',number){
 const sheet=Number(sheetValue);if(!Number.isInteger(sheet)||sheet<1||sheet>7){location.hash='/blaetter/3';return;}
 const tasks=Object.values(worksheets).filter(t=>t.sheet===sheet),fromLink=tasks.findIndex(t=>t.number===number),key='sheet-'+sheet;
 const selected=fromLink>=0?fromLink:Math.min(state.positions[key]||0,tasks.length-1),task=tasks[selected];state.positions[key]=selected;save();
 const related=allExercises.filter(e=>e.originalNumber===task.number);
 shell(`<div class="eyebrow">Übungsblätter 2026</div><h1>Blatt ${sheet}</h1><nav class="sheet-tabs" aria-label="Übungsblatt">${Array.from({length:7},(_,i)=>`<a href="#/blaetter/${i+1}" class="${sheet===i+1?'active':''}" ${sheet===i+1?'aria-current="page"':''}>${i+1}</a>`).join('')}</nav><p class="meta">Originalangaben · Lösung jeweils direkt unter der Teilaufgabe</p><div class="focus-content"><div class="section-picker"><label for="sheet-task">Aufgabe ${selected+1} von ${tasks.length}</label><select id="sheet-task">${tasks.map((t,i)=>`<option value="${i}" ${i===selected?'selected':''}>${t.number}</option>`).join('')}</select></div><article class="panel exercise"><div class="label">${esc(task.source)}</div><h2 class="task-heading">${esc(task.number)}</h2><div class="original-intro">${prose(task.intro)}</div>${task.parts.map(p=>partCard(p,{key:`sheet-${task.number}-${p.label||'all'}`,state})).join('')}<label class="check-row rule"><input type="checkbox" data-sheet-done="${task.number}" ${state.done[task.id]?'checked':''}>Alle Teilaufgaben ohne Lösungshilfe gelöst</label>${related.length?`<div class="rule"><span class="small muted">Passendes Modul</span><div class="actions">${related.map(e=>`<a href="#/${e.module}/aufgaben/${e.id}">${esc(e.title)}</a>`).join('')}</div></div>`:''}</article><div class="focus-pager"><button id="sheet-prev" ${selected===0?'disabled':''}>← Zurück</button><span class="meta">${selected+1} / ${tasks.length}</span><button id="sheet-next" ${selected===tasks.length-1?'disabled':''}>Weiter →</button></div></div>`,'blaetter',`Übungsblätter / Blatt ${sheet}`);
 const jump=n=>{location.hash=`/blaetter/${sheet}/${tasks[n].number}`;};document.querySelector('#sheet-task').onchange=e=>jump(Number(e.target.value));document.querySelector('#sheet-prev').onclick=()=>jump(Math.max(0,selected-1));document.querySelector('#sheet-next').onclick=()=>jump(Math.min(tasks.length-1,selected+1));
}

function newVariant(type){variant=generate(type,Math.floor(Math.random()*4294967296));renderVariant();}
function renderVariant(){const host=document.querySelector('#variant');if(!host)return;host.innerHTML=`<p>${esc(variant.prompt)}</p><div class="answer-grid">${variant.fields.map((f,i)=>`<label>${f.label}${f.options?`<select data-answer="${i}"><option value="">Auswählen</option>${f.options.map(o=>`<option value="${o.value}">${o.label}</option>`).join('')}</select>`:`<input type="text" inputmode="text" data-answer="${i}" autocomplete="off" placeholder="Ergebnis">`}</label>`).join('')}</div><div class="actions"><button class="primary" id="check-variant">Ergebnisse prüfen</button><button id="next-variant">Neue Variante</button></div><div id="variant-status" class="status" role="status"></div><details class="rule"><summary>Lösungsweg anzeigen</summary><p>${esc(variant.solution)}</p></details><p class="meta">Variante ${variant.seed}</p>`;math(host);host.querySelector('#next-variant').onclick=()=>newVariant(variant.type);host.querySelector('#check-variant').onclick=()=>{let missing=false,count=0;host.querySelectorAll('[data-answer]').forEach((input,i)=>{const v=parseNumber(input.value),ok=Number.isFinite(v)&&Math.abs(v-variant.fields[i].answer)<=1e-6*Math.max(1,Math.abs(variant.fields[i].answer));if(!Number.isFinite(v))missing=true;input.classList.toggle('input-good',ok);input.classList.toggle('input-bad',!ok);input.setAttribute('aria-invalid',String(!ok));if(ok)count++;});const status=host.querySelector('#variant-status');status.className='status '+(count===variant.fields.length?'good':'');status.textContent=missing?'Bitte alle Felder mit Zahlen oder Brüchen ausfüllen.':count===variant.fields.length?'Alle Ergebnisse stimmen. Prüfe jetzt noch deine Voraussetzungen und Begründung.':`${count} von ${variant.fields.length} Ergebnissen stimmen. Überprüfe die markierten Felder oder öffne den Lösungsweg.`;};}
function recallScope(){return allTheory.filter(t=>recallModule==='all'||(recallModule==='klausur'?isExamRecall(t):t.module===recallModule));}
function recallCards(){return reviewQueue(recallScope(),state.reviews,state.known,recallOnly,isExamFocus);}
function recall(){
 clearTimer();
 const cards=recallCards();
 if(recallIndex>=cards.length)recallIndex=0;
 const t=cards[recallIndex];
 const review=t?state.reviews[t.id]:null;
 shell(`<div class="eyebrow">Wiederholen</div><h1>Sätze abfragen</h1>
 <p class="lead">Erst aus dem Gedächtnis formulieren, dann vergleichen und bewerten. Nicht gewusst: nach 1 Minute. Grob gewusst: nach 10 Minuten. Vollständig: nach 1, dann 2, danach jeweils 3 Tagen.</p>
 <details class="recall-help"><summary>So funktioniert die Wiederholung</summary><p class="small">Wähle „Jetzt fällig oder neu“ für die geplante Wiederholung. Fällige Wiederholungen kommen vor neuen Karten; unter neuen Karten starten die vier Schwerpunkte. Eine unvollständige Antwort setzt die Tagesfolge zurück. Nach der nächsten vollständigen Antwort beginnt sie wieder bei 1 Tag. Vorzeitiges freies Wiederholen erhöht die Stufe nicht und verschiebt den Termin nicht nach hinten.</p></details>
 <div class="two-col"><label class="small">Modul<select id="recall-module"><option value="all" ${recallModule==='all'?'selected':''}>Alle Module</option><option value="klausur" ${recallModule==='klausur'?'selected':''}>Klausursätze lernen · ${Object.keys(examRecallSources).length} Karten</option>${modules.map(m=>`<option value="${m.id}" ${recallModule===m.id?'selected':''}>${m.title}</option>`).join('')}</select></label>
 <label class="small">Auswahl<select id="recall-only"><option value="due" ${recallOnly==='due'?'selected':''}>Jetzt fällig oder neu</option><option value="all" ${recallOnly==='all'?'selected':''}>Alle Aussagen · frei wiederholen</option><option value="open" ${recallOnly==='open'?'selected':''}>Noch nicht sicher · frei wiederholen</option></select></label></div>
 ${recallModule==='klausur'?`<p class="small muted">${Object.keys(examRecallSources).length} ausgewählte Definitionen und Satzaussagen: Voraussetzungen, Aussage und Formel vollständig formulieren. ★ markiert Heine–Borel, Umkehrsatz, impliziten Satz und Taylor.</p><details class="recall-help"><summary>Alle ${Object.keys(examRecallSources).length} Klausurkarten ansehen</summary><ol class="recall-overview">${recallScope().map(c=>`<li><a href="#/${c.module}/theorie/${c.id}">${esc(c.title)}</a>${isExamFocus(c)?' <strong>★ Schwerpunkt</strong>':''}</li>`).join('')}</ol></details>`:''}
 <p class="small muted" id="recall-live"></p><p class="small review-message" role="status">${esc(recallMessage)}</p>
 <div class="flash" style="margin-top:20px">${t?`<article class="panel"><div class="label">${t.moduleTitle} · ${recallIndex+1} / ${cards.length}</div>${focusBadge(t)}<h2 style="margin-top:0">${esc(t.title)}</h2>${nameCaption(t)}
 <p class="small muted">Formuliere ${t.kind.startsWith('Definition')?'die Definition':'die vollständige Aussage'} einschließlich aller Voraussetzungen und der zugehörigen Formel.</p>
 <label class="sr-only" for="recall-note">Deine Formulierung</label><textarea id="recall-note" data-note="recall-${t.id}" placeholder="Deine Formulierung …">${esc(state.notes['recall-'+t.id]||'')}</textarea>
 <div class="actions"><button class="primary" id="reveal-card">Mit der Aussage vergleichen</button><button id="next-card">Überspringen</button></div>
 <div id="flash-answer" hidden><div class="flash-answer">${prose(t.text)}<p class="meta">${esc(t.source)}</p>
 ${t.note?`<details class="rule"><summary>Einordnung und Präzisierungen</summary>${prose(t.note)}</details>`:''}
 ${t.checks.map(c=>`<label class="check-row"><input type="checkbox">${esc(c)}</label>`).join('')}
 <p class="meta">Bewerte selbst, ob Voraussetzungen und Aussage vollständig waren.</p>
 <div class="actions review-ratings"><button id="recall-again" data-rating="again">Nicht gewusst <span>1 Minute</span></button><button id="recall-partial" data-rating="partial">Grob gewusst <span>10 Minuten</span></button><button class="primary" id="recall-known" data-rating="complete">Vollständig <span>${reviewLabel(review,'complete')}</span></button></div>
 </div></div></article>`:'<div class="panel empty"><h2>Für den Moment geschafft</h2><p>Die nächste fällige Karte erscheint hier automatisch. Du kannst inzwischen auf „Alle Aussagen“ wechseln oder andere Aufgaben üben.</p></div>'}</div>`,'abfragen','Wiederholen / Sätze');
 document.querySelector('#recall-module').onchange=e=>{recallModule=e.target.value;recallIndex=0;recallMessage='';recall();};
 document.querySelector('#recall-only').onchange=e=>{recallOnly=e.target.value;recallIndex=0;recallMessage='';recall();};
 if(t){
  document.querySelector('#reveal-card').onclick=e=>{document.querySelector('#flash-answer').hidden=false;e.target.hidden=true;};
  const next=()=>{const fresh=recallCards();recallIndex=(fresh.findIndex(c=>c.id===t.id)+1)%Math.max(fresh.length,1);recall();};
  document.querySelector('#next-card').onclick=()=>{recallMessage='';next();document.querySelector('.flash').scrollIntoView({block:'start'});};
  document.querySelectorAll('[data-rating]').forEach(button=>button.onclick=()=>{
   const rating=button.dataset.rating,label=reviewLabel(state.reviews[t.id],rating);
   rate(t,rating);
   recallMessage=`${t.title}: ${label==='Termin bleibt'?'Der geplante Wiederholungstermin bleibt bestehen.':`Wiederholung geplant (${label}).`}`;
   if(recallOnly==='all')next();else{recallIndex=0;recall();}
   document.querySelector('.flash').scrollIntoView({block:'start'});
  });
 }
 const tick=()=>{
  const now=Date.now(),scope=recallScope(),pending=scope.filter(c=>state.reviews[c.id]?.due<=now).length,newCount=scope.filter(c=>!state.reviews[c.id]).length;
  const nextDue=Math.min(...scope.map(c=>state.reviews[c.id]?.due).filter(d=>d>now));
  let status=`${pending} fällig · ${newCount} neu`;
  if(Number.isFinite(nextDue)){
   const seconds=Math.max(1,Math.ceil((nextDue-now)/1000));
   status+=seconds<3600?` · Nächste Wiederholung in ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')} min`:` · Nächste Wiederholung: ${new Date(nextDue).toLocaleString('de-DE',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}`;
  }
  document.querySelector('#recall-live').textContent=status;
  const completeButton=document.querySelector('#recall-known span');
  if(completeButton)completeButton.textContent=reviewLabel(state.reviews[t.id],'complete',now);
  if(!t&&recallOnly==='due'&&(pending||newCount))recall();
 };
 timer=setInterval(tick,1000);tick();
}

function exam(){renderExam({state,save,shell,modules,examInfo,clearTimer,setTimer:value=>{timer=value;}});}
function sourcePage(){
 shell(`<div class="eyebrow">Grundlage</div><h1>Quellen und Lernstand</h1><p class="lead">Die aktuellen Lecture Notes und Übungsblätter bestimmen den Stoff für 2026.</p>${sources.map(s=>`<section class="notice"><h3>${esc(s.title)}</h3>${prose(s.detail)}</section>`).join('')}<h2>Fehler und Präzisierungen im Material</h2>${errata.map(e=>`<section class="panel"><h3>${esc(e.title)}</h3>${prose(e.text)}</section>`).join('')}<h2>Lernstand sichern</h2><div class="panel"><p>„Sicher“ und „gelöst“ sind deine Selbsteinschätzungen. Kontrolliere dabei Voraussetzungen, Rechnung und Begründung.</p><p>Notizen, Markierungen und begonnene Trainings bleiben in diesem Browser. Mit einem Export kannst du sie sichern oder auf ein anderes Gerät übertragen.</p><div class="actions"><button id="export-state">Lernstand exportieren</button><label class="button-link" for="import-state">Lernstand importieren</label><input type="file" id="import-state" accept="application/json" hidden></div><p class="meta" id="import-status" role="status"></p></div><p class="meta">Die Original-PDFs und privaten Nachrichten werden nicht als Dateien veröffentlicht. Die Aufgaben sind transkribiert, die Lösungen für diese Seite ausgearbeitet.</p>`,'quellen','Quellen und Lernstand');
 document.querySelector('#export-state').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({version:1,state},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='analysis-2b-lernstand.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
 document.querySelector('#import-state').onchange=async e=>{const status=document.querySelector('#import-status');try{const file=e.target.files[0];if(!file)return;if(file.size>2000000)throw Error('Datei zu groß.');const data=JSON.parse(await file.text());if(data.version!==1||!data.state||typeof data.state!=='object'||Array.isArray(data.state))throw Error('Ungültiger Lernstand.');mergeState(state,data.state,modules.map(m=>m.id));migrateReviews(state.reviews);save();status.textContent='Lernstand importiert.';}catch(err){status.textContent=err.message;}};
}
function bind(){
 document.querySelectorAll('[data-sheet-done]').forEach(x=>x.onchange=()=>{const number=x.dataset.sheetDone;state.done[worksheets[number].id]=x.checked;allExercises.filter(e=>e.originalNumber===number).forEach(e=>{state.done[e.id]=x.checked;});save();});
 document.querySelectorAll('[data-known]').forEach(x=>x.onchange=()=>{rate({id:x.dataset.known},x.checked?'complete':'again');document.querySelector('#known-count').textContent=`${allTheory.filter(t=>state.known[t.id]).length} / ${allTheory.length} sicher`;});
 document.querySelectorAll('[data-done]').forEach(x=>x.onchange=()=>{state.done[x.dataset.done]=x.checked;const e=allExercises.find(e=>e.id===x.dataset.done);if(e?.originalNumber)state.done[worksheets[e.originalNumber].id]=allExercises.filter(t=>t.originalNumber===e.originalNumber).every(t=>state.done[t.id]);save();});
 document.querySelectorAll('[data-note]').forEach(x=>x.oninput=()=>{state.notes[x.dataset.note]=x.value;save();});
 document.querySelectorAll('[data-recall-module]').forEach(x=>x.onclick=()=>{recallModule=x.dataset.recallModule;recallIndex=0;location.hash='/abfragen';});
}
function render(){const [id,tab,entry]=route();clearTimer();if(!id)home();else if(id==='abfragen')recall();else if(id==='satznamen'){location.replace('#/abfragen');}else if(id==='klausur')exam();else if(id==='blaetter')worksheetPage(tab,entry);else if(id==='quellen')sourcePage();else{const m=modules.find(m=>m.id===id);if(m)modulePage(m,tab,entry);else shell('<h1>Modul nicht gefunden</h1><p><a href="#/">Zum Lernplan</a></p>','');}}
window.addEventListener('hashchange',()=>{render();window.scrollTo(0,0);});window.addEventListener('load',()=>math());render();
const ctx=document.modelContext;if(ctx?.registerTool){try{Promise.resolve(ctx.registerTool({name:'open_analysis_module',title:'Analysis-Modul öffnen',description:'Öffnet ein vorhandenes Lernmodul in der gewünschten Ansicht. Verändert keine Bewertungen.',inputSchema:{type:'object',properties:{module:{type:'string',enum:modules.map(m=>m.id)},view:{type:'string',enum:['theorie','aufgaben','grafik','varianten']}},required:['module'],additionalProperties:false},annotations:{readOnlyHint:false},execute:async input=>{if(!input||!modules.some(m=>m.id===input.module)||input.view&&!['theorie','aufgaben','grafik','varianten'].includes(input.view))throw Error('Ungültiges Modul oder ungültige Ansicht.');location.hash=`/${input.module}/${input.view||'theorie'}`;render();return{module:input.module,view:input.view||'theorie'};}})).catch(()=>{});}catch{}}
document.querySelector('.skip').onclick=e=>{e.preventDefault();document.querySelector('#main').focus();};
