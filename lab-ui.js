import {plotMarkup,drawPlot} from './plots.js';
import {experimentsFor} from './lab-content.js';
import {labModels} from './lab-models.js';
import {esc,prose} from './study-ui.js';

const sessions=new Map();
const numberText=v=>String(Number(Number(v).toFixed(5)));
const scientific=/(-?\d+(?:\.\d+)?)e([+-]?\d+)/g;
const mathProse=value=>prose(String(value).replace(/\$\$[\s\S]*?\$\$|\$[^$]*?\$/g,block=>block.replace(scientific,(_,m,e)=>`${m}\\times10^{${Number(e)}}`)));
const metricText=value=>String(value).replace(scientific,(_,m,e)=>`${m} × 10${String(Number(e)).split('').map(c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(c)]??'⁻').join('')}`);
function control(c){
 if(c.type==='select')return `<label class="control">${esc(c.label)}<select data-param="${c.key}">${c.options.map(([v,t])=>`<option value="${v}" ${String(c.value)===v?'selected':''}>${esc(t)}</option>`).join('')}</select></label>`;
 return `<label class="control">${esc(c.label)}<input data-param="${c.key}" type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}"><output>${c.value}</output></label>`;
}
export function initLab(host,{module,math,experiment}){
 const type=module.visual,labs=experimentsFor(type);
 if(!sessions.has(type))sessions.set(type,{selected:'overview',parameters:{}});
 const session=sessions.get(type);
 if(labs.some(l=>l.id===experiment))session.selected=experiment;
 function render(){
  const lab=labs.find(l=>l.id===session.selected)||labs[0];session.selected=lab.id;
  history.replaceState(null,'',`#/${module.id}/grafik/${lab.id}`);
  host.innerHTML=`<div class="section-picker lab-picker"><label for="lab-select">Experiment</label><select id="lab-select">${labs.map((l,i)=>`<option value="${l.id}" ${l.id===lab.id?'selected':''}>${i+1}. ${esc(l.title)}</option>`).join('')}</select></div><section class="panel lab"><h2>${esc(lab.title)}</h2><p class="lab-benefit">${esc(lab.benefit)}</p><div class="lab-presets" role="group" aria-label="Geführte Vergleiche">${lab.presets.map((p,i)=>`<button data-preset="${i}" aria-pressed="false">${esc(p.label)}</button>`).join('')}<button class="lab-reset" id="lab-reset">Zurücksetzen</button></div><p class="lab-guide" id="lab-guide">Wähle einen geführten Vergleich oder verändere die Regler. Achte auf die Beobachtung unter der Grafik.</p><div class="lab-layout"><div class="lab-controls"><h3>Einstellungen</h3>${lab.legacy?plotMarkup(type):lab.controls.map(control).join('')}<p class="meta">Regler lassen sich auch mit den Pfeiltasten verändern.</p></div><div class="lab-figures" id="lab-figures"></div></div><div class="lab-metrics" id="lab-metrics" aria-live="polite"></div><div class="lab-observation"><h3>Was du gerade siehst</h3><div id="lab-readout"></div></div><div class="lab-explanation"><h3>Warum das so ist</h3><div id="lab-explanation"></div></div><div id="lab-terms"></div><div class="lab-question"><h3>Kurz prüfen</h3><p>${esc(lab.quiz.question)}</p><div class="lab-answers" role="group" aria-label="Antwort wählen">${lab.quiz.answers.map((a,i)=>`<button data-lab-answer="${i}" aria-pressed="false">${esc(a)}</button>`).join('')}</div><div id="lab-feedback" class="lab-feedback" role="status" hidden></div></div><div class="lab-transfer"><h3>Jetzt selbst anwenden</h3><div class="actions"><a href="#/${module.id}/theorie/${lab.theory}">Passende Aussage →</a><a href="#/${module.id}/aufgaben/${lab.exercise}">Passende Aufgabe rechnen →</a></div></div><p class="meta lab-source">${esc(lab.source)}. Die Beobachtung an Beispielen ersetzt nicht die allgemeine Aussage mit ihren Voraussetzungen.</p><div class="focus-pager lab-pager"><button id="lab-previous" ${lab===labs[0]?'disabled':''}>← Vorheriges Experiment</button><span class="meta">${labs.indexOf(lab)+1} / ${labs.length}</span><button id="lab-next" ${lab===labs.at(-1)?'disabled':''}>Nächstes Experiment →</button></div></section>`;
  const inputs=[...host.querySelectorAll('[data-param]')],defaults=Object.fromEntries(inputs.map(e=>[e.dataset.param,e.value]));
  for(const input of inputs){
   const key=input.dataset.param;input.id=`lab-${type}-${key}`;input.closest('label').htmlFor=input.id;
   if(session.parameters[lab.id]?.[key]!==undefined)input.value=session.parameters[lab.id][key];
  }
  function update(){
   const p=Object.fromEntries(inputs.map(e=>[e.dataset.param,e.value]));session.parameters[lab.id]=p;
   for(const input of inputs){
    const output=input.parentElement.querySelector('output');if(output)output.textContent=numberText(input.value);
    input.disabled=(lab.id==='cover'&&input.dataset.param==='epsilon'&&p.mode==='without-zero')||(lab.legacy&&type==='extrema'&&input.dataset.param==='angle'&&p.mode==='curve');
   }
   let result;
   if(lab.legacy){const r=drawPlot(type,p);result={figures:[{title:'',svg:r.svg,caption:r.legend}],text:r.text,explanation:lab.explanation};}
   else result=labModels[lab.id](p);
   host.querySelector('#lab-figures').innerHTML=result.figures.map((f,i)=>`<figure>${f.title?`<h3>${esc(f.title)}</h3>`:''}${f.svg.replaceAll('plotclip',`lab-clip-${type}-${i}`)}<figcaption>${esc(f.caption||'')}</figcaption></figure>`).join('');
   host.querySelector('#lab-metrics').innerHTML=(result.metrics||[]).map(m=>`<div><span>${esc(m.label)}</span><strong>${esc(metricText(m.value))}</strong></div>`).join('');
   const readout=host.querySelector('#lab-readout'),explanation=host.querySelector('#lab-explanation'),terms=host.querySelector('#lab-terms');
   readout.innerHTML=mathProse(result.text);explanation.innerHTML=mathProse(result.explanation);
   terms.innerHTML=result.terms?`<section class="lab-term-filter"><h3>Welche Terme bleiben?</h3><p class="small">Terme bis Gesamtgrad ${result.degree} bleiben im Polynom. Die übrigen gehören in den Rest. Gezeigt sind die Terme bis Grad 3; höhere Grade gehören ebenfalls zum Rest.</p><div class="lab-term-list">${result.terms.map(([term,degree])=>`<div class="${degree<=result.degree?'included':'excluded'}"><span>$${term}$</span><small>Grad ${degree} · ${degree<=result.degree?'bleibt':'Rest'}</small></div>`).join('')}</div></section>`:'';
   for(const node of [readout,explanation,terms])math(node);
   const match=lab.presets.findIndex(s=>Object.entries(s.values).every(([k,v])=>Number.isFinite(Number(v))&&Number.isFinite(Number(p[k]))?Math.abs(Number(v)-Number(p[k]))<1e-6:String(v)===p[k]));
   host.querySelectorAll('[data-preset]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===match)));
   host.querySelector('#lab-guide').textContent=match>=0?lab.presets[match].explain:'Eigene Einstellung: Vergleiche die Werte mit der Erklärung und verändere danach nur einen Regler.';
  }
  const setParameters=values=>{for(const input of inputs)if(values[input.dataset.param]!==undefined)input.value=values[input.dataset.param];update();};
  inputs.forEach(input=>input.addEventListener('input',update));
  host.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>setParameters(lab.presets[Number(b.dataset.preset)].values));
  host.querySelector('#lab-reset').onclick=()=>{setParameters(defaults);host.querySelector('#lab-feedback').hidden=true;host.querySelectorAll('[data-lab-answer]').forEach(b=>b.setAttribute('aria-pressed','false'));};
  host.querySelectorAll('[data-lab-answer]').forEach(button=>button.onclick=()=>{
   const answer=Number(button.dataset.labAnswer),ok=answer===lab.quiz.correct,feedback=host.querySelector('#lab-feedback');
   host.querySelectorAll('[data-lab-answer]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   feedback.hidden=false;feedback.className='lab-feedback '+(ok?'correct':'retry');
   feedback.innerHTML=`<strong>${ok?'Richtig.':'Noch einmal unterscheiden.'}</strong><p>${esc(lab.quiz.explain)}</p>${ok?'':`<p class="small">Richtige Antwort: ${esc(lab.quiz.answers[lab.quiz.correct])}</p>`}`;
  });
  const jump=id=>{session.selected=id;render();host.scrollIntoView({block:'start'});};
  host.querySelector('#lab-select').onchange=e=>jump(e.target.value);
  host.querySelector('#lab-previous').onclick=()=>jump(labs[Math.max(0,labs.indexOf(lab)-1)].id);
  host.querySelector('#lab-next').onclick=()=>jump(labs[Math.min(labs.length-1,labs.indexOf(lab)+1)].id);
  math(host);update();
 }
 render();
}
