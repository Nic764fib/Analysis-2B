import {esc,prose} from './study-ui.js';
import {gameTopics,itemById,topicById} from './focus-game-data.js';
import {GAME_KEY,emptyGame,cleanGame,totalXP,stars,recalledCount,startRound,answer,advance,roundMistakes} from './focus-game-engine.js';

export function renderFocusGame({shell,state,rate}){
 let game=emptyGame(),storageOK=true;
 try{game=cleanGame(JSON.parse(localStorage.getItem(GAME_KEY)||'null'));}catch{storageOK=false;}
 const persist=()=>{try{localStorage.setItem(GAME_KEY,JSON.stringify(game));return true;}catch{storageOK=false;const warning=document.querySelector('#game-save-warning');if(warning){warning.hidden=false;warning.textContent='Dein Spielstand konnte nicht gespeichert werden. Lass diese Seite zum Weiterlernen geöffnet.';}return false;}};
 const go=hash=>{if(location.hash===hash)draw();else location.hash=hash;};
 const begin=options=>{startRound(game,options);persist();go('#/satzsprint/runde');};
 const tag=(text,cls='')=>`<span class="game-tag ${cls}">${esc(text)}</span>`;
 const meter=(value,max,label)=>`<div class="game-meter" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${value}"><span style="width:${Math.min(100,100*value/max)}%"></span></div>`;
 const savedWarning=()=>`<p id="game-save-warning" role="status" class="game-save-warning" ${storageOK?'hidden':''}>Dein Spielstand konnte nicht geladen oder gespeichert werden.</p>`;
 const source=topic=>`<details class="game-source"><summary>Vollständige Aussage nachlesen</summary><div class="formal">${prose(topic.card.text)}</div>${topic.card.note?prose(topic.card.note):''}<p class="meta">${esc(topic.card.source)}</p></details>`;
 function dashboard(){
  const xp=totalXP(game),free=recalledCount(game),active=game.session&&game.session.index<game.session.queue.length;
  return `<div class="game-home"><section class="game-hero"><div><div class="game-eyebrow">DEINE 13 SCHWERPUNKTE</div><h1>SatzSprint</h1><p>Eine kurze Runde. Ein bisschen sicherer.</p><p class="game-hero-detail">Erkennen, Stolperstellen klären, frei aufsagen.<br>Du lernst in deinem Tempo.</p><div class="actions"><button class="game-start" id="game-start">${active?'Neue 5er-Runde':'5 Fragen spielen'} <span aria-hidden="true">→</span></button>${active?'<button class="game-resume" id="game-resume">Runde fortsetzen</button>':''}</div></div><div class="game-ring" style="--game-fill:${free/13*100}%"><div><strong>${free}<span>/13</span></strong><span>frei aufgesagt*</span></div></div></section>
   <div class="game-stats"><div><span>Punkte</span><strong>${xp}<small> / 520 XP</small></strong></div><div><span>Beste Antwortfolge</span><strong>${game.best}<small> in Folge</small></strong></div><div><span>Abgeschlossene Runden</span><strong>${game.rounds}</strong></div></div>
   <div class="game-section-head"><div><h2>Deine 13 Stationen</h2><p>Pro Aussage: Grundidee → Stolperstelle → frei aufsagen.</p></div><button id="game-weak">Wacklige Aussagen üben</button></div>
   <div class="game-topics">${gameTopics.map((t,i)=>`<button class="game-topic ${stars(game,t.id)===3?'is-complete':''}" data-game-topic="${t.id}"><span class="game-topic-top"><span>${String(i+1).padStart(2,'0')} · ${esc(t.group)}</span><span class="game-stars" aria-label="${stars(game,t.id)} von 3 Schritten geschafft">${[`${t.id}:q0`,`${t.id}:q1`,`${t.id}:recall`].map(id=>`<span class="${game.passed[id]?'is-filled':''}" aria-hidden="true">★</span>`).join('')}</span></span><strong>${esc(t.name)}</strong><span class="game-topic-bottom">${stars(game,t.id)===3?'Noch einmal festigen':game.passed[`${t.id}:q0`]&&game.passed[`${t.id}:q1`]?'Bereit zum freien Aufsagen':stars(game,t.id)?'Weiterlernen':'Loslegen'} <span aria-hidden="true">→</span></span></button>`).join('')}</div>
   <div class="game-badges" aria-label="Erreichte Lernziele">${tag('Erste Runde',game.rounds?'earned':'')}${tag('Alle 13 ausprobiert',gameTopics.every(t=>t.questions.some(q=>game.awards[q.id])||game.awards[`${t.id}:recall`])?'earned':'')}${tag('Alle 13 frei aufgesagt',free===13?'earned':'')}</div>
   <details class="game-help"><summary>So zählen Fortschritt und Punkte</summary><p>Für jede erstmals richtig beantwortete Auswahlfrage gibt es 10 XP. Für jede erstmals als vollständig bewertete freie Aussage gibt es 20 XP. Wiederholungen festigen deinen Stand; bereits erspielte Punkte bleiben erhalten. Fehler werden in derselben Runde einmal erneut abgefragt.</p><p>* „Frei aufgesagt“ ist deine Selbsteinschätzung nach dem Vergleich mit der vollständigen Aussage. Nur diese freie Abfrage übernimmt eine Bewertung in deinen bisherigen Wissensstand und Wiederholungsplan. Richtig angeklickte Antworten allein markieren keinen Satz als sicher.</p><p>Dein Spielstand wird in diesem Browser gespeichert. Du kannst eine Runde verlassen und später fortsetzen.</p></details>
   <p class="meta"><a href="#/abfragen/schwerpunkte">Zur klassischen Abfrage der 13 Aussagen →</a></p></div>`;
 }
 function summary(){
  const s=game.session,mistakes=roundMistakes(game),topics=[...new Set(mistakes.map(id=>itemById.get(id).topic))];
  const solved=s.answers.filter(a=>a.ok).length;
  return `<section class="game-finish"><div class="game-finish-mark" aria-hidden="true">✓</div><div class="game-eyebrow">RUNDE ABGESCHLOSSEN</div><h1>Ein Stück weiter.</h1><p>${solved} von ${s.answers.length} Antworten waren richtig oder nach deiner Kontrolle vollständig.</p><strong class="game-earned">+${s.earned} XP</strong><p class="muted">${s.earned?'Die Punkte sind gespeichert.':'Diese Punkte hattest du schon. Die Wiederholung zählt fürs Lernen.'}</p>${topics.length?`<div class="game-finish-review"><h2>Hier lohnt sich eine Wiederholung</h2><div class="actions">${topics.map(id=>`<button data-game-topic="${id}">${esc(topicById.get(id).name)}</button>`).join('')}</div></div>`:'<p>Diese Runde hast du ohne Fehlversuch abgeschlossen.</p>'}<div class="actions"><button class="primary" id="game-start">Nächste 5er-Runde</button><a class="button-link" href="#/satzsprint">Zu meinen Stationen</a></div></section>`;
 }
 function question(){
  const s=game.session,item=itemById.get(s.queue[s.index]),topic=topicById.get(item.topic),f=s.feedback;
  const feedback=f?`<div class="game-feedback ${f.ok?'correct':'incorrect'}" id="game-feedback" tabindex="-1" role="status"><strong>${f.ok?(item.type==='recall'?'Als vollständig bewertet.':'Richtig.'):(item.type==='recall'?'Kommt noch einmal.':'Noch einmal ansehen.')}${f.xp?` <span>+${f.xp} XP</span>`:''}</strong>${item.type==='choice'?prose(item.explanation):'<p>Vergleiche besonders die Voraussetzungen und die Formel. Deine Selbsteinschätzung ist gespeichert.</p>'}${!f.ok?'<p class="small">Du bekommst in dieser Runde höchstens einen zweiten Versuch.</p>':''}</div><div class="actions"><button class="primary" id="game-next">${s.index===s.queue.length-1?'Runde abschließen':'Weiter →'}</button></div>`:'';
  const choices=item.type==='choice'?`<div class="game-prompt">${prose(item.prompt)}</div><div class="game-options">${s.choices[item.id].map((index,n)=>`<button class="game-option ${f?(index===item.answer?'is-right':index===f.selected?'is-wrong':''):''}" data-game-choice="${index}" ${f?'disabled':''}><span class="game-option-letter">${String.fromCharCode(65+n)}</span><span>${prose(item.options[index])}${f&&index===item.answer?'<span class="game-choice-result">✓ Richtige Antwort</span>':''}${f&&index===f.selected&&!f.ok?'<span class="game-choice-result">Deine Auswahl</span>':''}</span></button>`).join('')}</div>${feedback}${source(topic)}`:'';
  const recall=item.type==='recall'?`<p class="game-prompt">Formuliere <strong>${esc(topic.name)}</strong> vollständig: Voraussetzungen, Aussage und Formel. Sprich laut oder schreibe hier.</p><label class="sr-only" for="game-draft">Deine Formulierung</label><textarea id="game-draft" placeholder="Erst aus dem Gedächtnis …" ${f?'readonly':''}>${esc(s.draft)}</textarea>${!s.revealed?'<div class="actions"><button class="primary" id="game-reveal">Mit der vollständigen Aussage vergleichen</button></div>':`<div class="game-recall-answer"><div class="label">Vergleichen und selbst prüfen</div><div class="formal">${prose(topic.card.text)}</div>${topic.card.note?`<details><summary>Präzisierung</summary>${prose(topic.card.note)}</details>`:''}<p class="meta">${esc(topic.card.source)}</p><p><strong>Was war in deiner eigenen Antwort enthalten?</strong></p>${topic.checks.map((check,i)=>`<label class="check-row"><input type="checkbox" data-game-check="${i}" ${s.checks.includes(i)?'checked':''} ${f?'disabled':''}>${esc(check)}</label>`).join('')}<p class="meta">Hake nur ab, was du ohne Vorlage genannt hast. „Vollständig“ wird freigeschaltet, wenn alle Punkte abgehakt sind.</p>${!f?'<div class="game-ratings"><button data-game-rating="again">Noch nicht<br><small>1 Minute</small></button><button data-game-rating="partial">Teilweise<br><small>10 Minuten</small></button><button data-game-rating="complete" class="primary" disabled>Vollständig<br><small>Wiederholung planen</small></button></div>':''}</div>${feedback}`}`:'';
  return `<div class="game-round"><div class="game-round-nav"><a href="#/satzsprint">← Stationen</a><span>${tag(`${totalXP(game)} XP`)} ${tag(`${game.streak} in Folge`)}</span></div><div class="game-round-progress"><span>Schritt ${s.index+1} / ${s.queue.length}</span><span>${esc(topic.group)}</span></div>${meter(s.index,s.queue.length,'Fortschritt dieser Runde')}<article class="game-question"><div class="game-eyebrow">${esc(item.kind)} · ${esc(topic.name)}</div><h1>${item.type==='recall'?'Jetzt ohne Vorlage.':item.kind==='Grundidee'?'Was stimmt?':'Auf das Detail kommt es an.'}</h1>${choices}${recall}</article></div>`;
 }
 function draw(){
  const playing=location.hash==='#/satzsprint/runde';
  const content=playing&&game.session?(game.session.index>=game.session.queue.length?summary():question()):dashboard();
  shell(`<div class="focus-game">${savedWarning()}${content}</div>`,'satzsprint','Lernspiel / 13 Schwerpunkt-Theoriefragen');
  document.querySelector('#game-start')?.addEventListener('click',()=>begin());
  document.querySelector('#game-weak')?.addEventListener('click',()=>begin({weak:true}));
  document.querySelector('#game-resume')?.addEventListener('click',()=>go('#/satzsprint/runde'));
  document.querySelectorAll('[data-game-topic]').forEach(button=>button.onclick=()=>begin({topic:button.dataset.gameTopic}));
  const showFeedback=()=>{persist();draw();document.querySelector('#game-feedback')?.focus({preventScroll:true});document.querySelector('#game-feedback')?.scrollIntoView({block:'nearest',behavior:'instant'});};
  document.querySelectorAll('[data-game-choice]').forEach(button=>button.onclick=()=>{if(answer(game,Number(button.dataset.gameChoice)))showFeedback();});
  document.querySelector('#game-next')?.addEventListener('click',()=>{advance(game);persist();draw();document.querySelector('.game-question h1,.game-finish h1')?.scrollIntoView({block:'nearest'});});
  document.querySelector('#game-draft')?.addEventListener('input',e=>{game.session.draft=e.target.value;persist();});
  document.querySelector('#game-reveal')?.addEventListener('click',()=>{game.session.revealed=true;persist();draw();document.querySelector('.game-recall-answer')?.scrollIntoView({block:'start'});});
  document.querySelectorAll('[data-game-check]').forEach(input=>input.onchange=()=>{game.session.checks=[...document.querySelectorAll('[data-game-check]:checked')].map(x=>Number(x.dataset.gameCheck));persist();const complete=document.querySelector('[data-game-rating="complete"]');if(complete)complete.disabled=[...document.querySelectorAll('[data-game-check]')].some(x=>!x.checked);});
  const completeButton=document.querySelector('[data-game-rating="complete"]');
  if(completeButton)completeButton.disabled=[...document.querySelectorAll('[data-game-check]')].some(input=>!input.checked);
  document.querySelectorAll('[data-game-rating]').forEach(button=>button.onclick=()=>{
   if(button.disabled)return;
   const result=answer(game,button.dataset.gameRating);if(!result)return;
   const topic=topicById.get(result.item.topic);
   if(game.session.draft.trim())state.notes['recall-'+topic.id]=game.session.draft;
   rate(topic.card,button.dataset.gameRating);
   showFeedback();
  });
 }
 draw();
}
