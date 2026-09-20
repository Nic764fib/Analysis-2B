import {esc} from './study-ui.js';
import {findTheorems,namingLabel,originLabels} from './theory-names.js';

export function nameCaption(t){return `<p class="name-caption">${esc(namingLabel(t))}</p>`;}
export function recognitionHint(t){return `<details class="recognition-hint"><summary>Woran erkenne ich diese Aussage?</summary><p>${esc(t.recognize)}</p>${t.contrast?`<p class="name-contrast">${esc(t.contrast)}</p>`:''}<a href="#/satznamen">Satznamen vergleichen →</a></details>`;}

let query='',selectedModule='all',scope='script',index=0;
const theoryLink=t=>`#/${t.module}/theorie/${t.id}`;
const recognitionExamples=[
 ['Jede offene Überdeckung hat eine endliche Teilüberdeckung.','Definition der Überdeckungskompaktheit','kompaktheit/theorie/compact-def'],
 ['Jede Folge hat eine Teilfolge mit Grenzwert in der Menge.','Folgenkompaktheit; Äquivalenz zur Kompaktheit','kompaktheit/theorie/sequential'],
 ['Abgeschlossene Mengen: endliche Schnittbedingung ⇒ gemeinsamer Punkt.','Cantorscher Durchschnittssatz','kompaktheit/theorie/cantor'],
 ['Endlichdimensional: kompakt ⇔ abgeschlossen und beschränkt.','Heine–Borel','kompaktheit/theorie/heine-borel']
];
export function renderTheoremNames({shell,modules,entries,quiz=false}){
 const list=()=>findTheorems(entries,{query:quiz?'':query,module:selectedModule,scope});
 const filters=`<div class="name-filters"><label>Modul<select id="names-module"><option value="all">Alle Module</option>${modules.map(m=>`<option value="${m.id}" ${selectedModule===m.id?'selected':''}>${esc(m.title)}</option>`).join('')}</select></label><label>Quelle<select id="names-scope"><option value="script" ${scope==='script'?'selected':''}>Lecture Notes</option><option value="all" ${scope==='all'?'selected':''}>Alle Einträge inkl. Rechenhilfen</option></select></label></div>`;
 shell(`<div class="eyebrow">Bezeichnungen und Aussagen</div><h1>Satz erkennen</h1><p class="lead">Erkenne an der Beschreibung, welche Definition oder welcher Satz gemeint ist. Lerne anschließend die vollständige Aussage mit Voraussetzungen.</p><nav class="tabs" aria-label="Satznamen"><a href="#/satznamen" class="${quiz?'':'active'}" ${quiz?'':'aria-current="page"'}>Nachschlagen</a><a href="#/satznamen/abfragen" class="${quiz?'active':''}" ${quiz?'aria-current="page"':''}>Namen abfragen</a></nav>${quiz?'':`<details class="panel name-examples"><summary>„Überdeckung und Kompaktheit“ – welche Aussage?</summary><p class="small muted">Diese Wörter allein sind nicht eindeutig. Entscheidend ist, welche Eigenschaft in der Frage beschrieben wird.</p><dl>${recognitionExamples.map(([cue,name,link])=>`<div><dt>${esc(cue)}</dt><dd><a href="#/${link}">${esc(name)}</a></dd></div>`).join('')}</dl></details><label class="name-search" for="names-search">Bezeichnung oder Stichwörter<input id="names-search" type="search" value="${esc(query)}" placeholder="z. B. Cantor, endliche Teilüberdeckung, Mean value property" autocomplete="off"></label>`}${filters}<p class="meta">„Skripttitel“ bezeichnet die englische Originalüberschrift. Aussagen ohne eigenen Titel tragen eine beschreibende deutsche Überschrift. Die Nummer dient zum Nachschlagen.</p><div id="names-results"></div>`,'satznamen','Wiederholen / Satz erkennen');
 const host=document.querySelector('#names-results');
 function renderResults(){
  const cards=list();
  if(!quiz){
   host.innerHTML=`<p class="meta" role="status">${cards.length} ${cards.length===1?'Eintrag':'Einträge'}</p><div class="name-results">${cards.map(t=>`<article class="name-result"><div class="label">${esc(t.moduleTitle)} · ${esc(originLabels[t.origin])}</div><h2><a href="${theoryLink(t)}">${esc(t.title)}</a></h2>${nameCaption(t)}<p>${esc(t.recognize)}</p>${t.contrast?`<details><summary>Genau unterscheiden</summary><p class="small">${esc(t.contrast)}</p></details>`:''}<p class="meta">${esc(t.kind)} · <a href="${theoryLink(t)}">Vollständige Formulierung →</a></p></article>`).join('')||'<p>Keine passende Aussage gefunden. Verwende weniger Stichwörter oder wähle alle Module.</p>'}</div>`;
   return;
  }
  if(index>=cards.length)index=0;
  const t=cards[index];
  host.innerHTML=t?`<article class="panel name-quiz"><div class="label">${esc(t.moduleTitle)} · ${index+1} / ${cards.length}</div><h2>Welche Aussage ist gemeint?</h2><p class="recognition-cue">${esc(t.recognize)}</p><p class="small muted">Nenne die Bezeichnung. Formuliere dann die Voraussetzungen und die Aussage aus dem Gedächtnis.</p><button class="primary" id="name-reveal">Bezeichnung aufdecken</button><div id="name-answer" class="rule" hidden><h3>${esc(t.title)}</h3>${nameCaption(t)}<p class="meta">${esc(t.kind)} · ${esc(originLabels[t.origin])}</p>${t.contrast?`<p class="name-contrast">${esc(t.contrast)}</p>`:''}<a href="${theoryLink(t)}">Mit der vollständigen Aussage vergleichen →</a></div><div class="focus-pager rule"><button id="name-previous" ${index===0?'disabled':''}>← Zurück</button><button id="name-next">${index===cards.length-1?'Von vorn beginnen':'Nächste Beschreibung →'}</button></div></article><p class="meta">Die Beschreibungen sind Lernfragen, keine Zitate aus einer Klausur.</p>`:'<p>Für diese Auswahl gibt es keine Einträge. Wähle ein anderes Modul oder alle Quellen.</p>';
  if(t){
   document.querySelector('#name-reveal').onclick=e=>{document.querySelector('#name-answer').hidden=false;e.target.hidden=true;};
   document.querySelector('#name-next').onclick=()=>{index=(index+1)%cards.length;renderResults();};
   document.querySelector('#name-previous').onclick=()=>{index=Math.max(0,index-1);renderResults();};
  }
 }
 document.querySelector('#names-module').onchange=e=>{selectedModule=e.target.value;index=0;renderResults();};
 document.querySelector('#names-scope').onchange=e=>{scope=e.target.value;index=0;renderResults();};
 const search=document.querySelector('#names-search');if(search)search.oninput=e=>{query=e.target.value;renderResults();};
 renderResults();
}
