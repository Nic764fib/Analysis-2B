import compact from './modules/compact.js';
import derivative from './modules/derivative.js';
import inverse from './modules/inverse.js';
import implicit from './modules/implicit.js';
import higher from './modules/higher.js';
import taylor from './modules/taylor.js';
import extra from './modules/extra.js';
import {formal,additions} from './formal.js';
import {practice} from './practice.js';
import {recipeFor} from './recipes.js';
import {extraTheory,extraExercises,proofIdeas} from './exam-supplements.js';
import {worksheets} from './worksheet-data.js';
const R=String.raw;
const base=[compact,derivative,inverse,implicit,higher,taylor,extra];
const theory=new Map([...base.flatMap(m=>m.theory),...additions,...extraTheory].map(t=>[t.id,{...t,...formal[t.id]}]));
const exercises=new Map([...base.flatMap(m=>m.exercises),...practice,...extraExercises].map(e=>[e.id,{...e,hint:Array.isArray(e.hint)?e.hint:recipeFor(e.id)}]));
theory.set('gradient',{...theory.get('gradient'),kind:'Definition · §2.4',text:R`Sei $f:E\to\mathbb R$ auf einer offenen Menge $E\subseteq\mathbb R^n$ partiell differenzierbar. Der Gradient ist das Vektorfeld $$\nabla f:E\to\mathbb R^n,\qquad\nabla f(x)=\sum_{j=1}^nD_jf(x)e_j.$$ Ist f in a differenzierbar und $v\in\mathbb R^n$, dann gilt $$D_vf(a)=\lim_{t\to0}\frac{f(a+tv)-f(a)}t=\nabla f(a)\cdot v=f'(a)v.$$`,source:'Lecture Notes · §2.4 und §2.6, S. 41 und 56'});
theory.set('gradient-theorem',{id:'gradient-theorem',kind:'Satz 2.30',title:'Anstieg und Niveaumengen',text:R`Sei E eine offene Menge in $\mathbb R^n$ und $f:E\to\mathbb R$ in $a\in E$ differenzierbar. Dann gilt:
1. Ist $\nabla f(a)\ne0$, so gilt für alle $v\in\mathbb R^n$ mit $\|v\|=1$: $$D_vf(a)=v\cdot\nabla f(a)\le\|\nabla f(a)\|,$$ mit Gleichheit genau dann, wenn $v=\nabla f(a)/\|\nabla f(a)\|$. Insbesondere ist $\nabla f(a)$ die Richtung des stärksten Anstiegs und $\max_{\|v\|=1}D_vf(a)=\|\nabla f(a)\|$.
2. Ist $v\cdot\nabla f(a)>0$, so gibt es $\varepsilon>0$ mit $f(a+tv)>f(a)$ für alle $t\in(0,\varepsilon)$. Für $v\cdot\nabla f(a)<0$ gilt entsprechend $f(a+tv)<f(a)$ für alle hinreichend kleinen positiven t.
3. Setze $s=f(a)$ und $N_s=\{x\in E:f(x)=s\}$. Ist $\gamma:(\alpha,\beta)\to E$ eine differenzierbare Kurve mit $\gamma(t_0)=a$ und $f(\gamma(t))=s$ für alle t, dann gilt $$\nabla f(a)\cdot\gamma'(t_0)=0.$$`,note:'Korrektur: Richtungsvektoren v liegen in ℝⁿ. Im Skript steht hier irrtümlich v ∈ E. Ein Tangentialraum der Niveaumenge ist an regulären Punkten ∇f(a) ≠ 0 definiert.',source:'Lecture Notes · Satz 2.30, S. 56',checks:['f differenzierbar in a.','Für maximalen Anstieg: Gradient nicht null und |v|=1.','Nur kleine positive Schritte bei Teil 2.','Für Teil 3 liegt die ganze Kurve in derselben Niveaumenge.']});
theory.set('homeomorphism',{id:'homeomorphism',kind:'Definition',title:'Homöomorphismus',text:R`Eine Abbildung $f:X\to Y$ heißt Homöomorphismus, wenn f bijektiv und stetig ist und $f^{-1}:Y\to X$ stetig ist.`,source:'Blatt 4 · Anmerkung zu B.4.1',checks:['Bijektion.','f und f⁻¹ stetig.']});
theory.set('weierstrass',{id:'weierstrass',kind:'Satz · Majorantentest',title:'Gleichmäßig konvergente Reihen',text:R`Seien $f_n:D\to\mathbb K$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, und $|f_n(x)|\le M_n$ für alle $x\in D$, wobei $\sum_{n=1}^\infty M_n<\infty$. Dann konvergiert $\sum_{n=1}^\infty f_n$ auf D gleichmäßig und absolut.`,source:'Benötigter Satz für B.2.4(a)',checks:['Summierbare Schranke Mₙ.','Unabhängig von x.']});
theory.set('uniform-limit',{id:'uniform-limit',kind:'Satz',title:'Stetigkeit des gleichmäßigen Grenzwerts',text:R`Konvergieren stetige Funktionen $f_n:D\to\mathbb K$ gleichmäßig gegen f, so ist f stetig. Sind alle fₙ gleichmäßig stetig, so ist auch f gleichmäßig stetig.`,source:'B.2.2(b); Grundlage für B.2.1(a)',checks:['Gleichmäßige, nicht nur punktweise Konvergenz.','Alle approximierenden Funktionen besitzen die jeweilige Eigenschaft.']});
// Die Funktionenfolgen werden auf den Übungsblättern für K = R oder C formuliert.
theory.get('extrema').kind='Notwendige Bedingung und Rechenkriterium';
for(const id of ['convergence','uniform-criteria']){const t=theory.get(id);t.text=R`Sei $D\ne\varnothing$. `+t.text.replaceAll('D\\to\\mathbb R','D\\to\\mathbb K')+R` Hier ist $\mathbb K\in\{\mathbb R,\mathbb C\}$.`;}
function make(m,ti,ei){return{...m,theory:ti.map(id=>{if(!theory.has(id))throw Error(id);return theory.get(id)}),exercises:ei.map(id=>{if(!exercises.has(id))throw Error(id);return exercises.get(id)})};}
const secondary=(id,title,description,source,visual,goals)=>({id,title,description,source,visual,priority:'Vertiefung',goals});
export const modules=[
make(compact,['compact-def','sequential','heine-borel','compact-closed','stability','cantor','closed-bounded','metric'],compact.exercises.map(e=>e.id)),
make({...derivative,priority:'Klausurgrundlage'},['total','jacobi','c1','chain','mean'],['jacobi-warmup','partial-counter','chain-exam','mean-proof']),
make(inverse,['bijective','homeomorphism','diffeo','inverse-theorem','matrix-inverse'],['polar','complex-square','inverse-exam','local-criterion','power-map','inverse-three','inverse-counter','inverse-sphere','inverse-contraction']),
make(implicit,['implicit-theorem','implicit-scalar','implicit-blocks'],implicit.exercises.map(e=>e.id)),
make(higher,['ck','schwarz','schwarz-corollary','hessian','divergence','laplace','orthogonal'],['div-radial','laplace-radial','laplace-power','laplace-log','laplace-sine','laplace-trig','laplace-proof','ck-rules','regularity-inverse']),
make({...taylor,description:'Entwicklungen in mehreren Variablen und passende Restterme.'},['multiindex','taylor-theorem','taylor-second','known-series'],['taylor-shift','taylor-three','taylor-log-exp','taylor-fraction','taylor-proof']),
make(secondary('gradient','Gradient und Richtungen','Richtungsableitungen, stärkster Anstieg und Niveaumengen.','Lecture Notes · §2.4 und §2.6; B.7.5(a)','gradient',['Gradient berechnen und normieren.','Richtungsableitungen als Skalarprodukt bestimmen.','Orthogonalität zu Niveaumengen begründen.']),['gradient','gradient-theorem'],['gradient-exercise','gradient-level']),
make(secondary('extremstellen','Extremstellen','Kritische Punkte, Hesse-Kriterium und Randbedingungen.','Lecture Notes · §2.6; B.7.4–B.7.5','extrema',['Kandidaten bestimmen.','Semidefinite Fälle durch Kurven untersuchen.','Innere Punkte und Rand getrennt prüfen.']),['local-extremum','critical-definition','extrema','boundary-extrema'],['critical-points','extrema-curves','boundary-example']),
make({...secondary('fixpunkte','Vollständigkeit und Fixpunkte','Cauchy-Folgen und Banachs Fixpunktsatz.','Lecture Notes · §1.1; Blatt 2–3','fixed',['Vollständigkeit und Kontraktion formulieren.','Selbstabbildung und Kontraktionsfaktor nachweisen.','Iteration und Fehlerabschätzung anwenden.']),generator:'fixed'},['complete','contraction','banach','banach-iteration'],['complete-examples','fixed-ball']),
make(secondary('gleichmaessige-stetigkeit','Gleichmäßige Stetigkeit','Ein δ für das gesamte Gebiet.','Blatt 1 · B.1.2–B.1.5','uniform',['Quantoren und gemeinsame Schranken verwenden.','Gegenbeispiele durch nahe Punktepaare konstruieren.']),['uniform-continuity'],['uniform-root','uniform-oscillation','uniform-modulus','uniform-cauchy']),
make(secondary('funktionenfolgen','Funktionenfolgen','Punktweise und gleichmäßige Konvergenz unterscheiden.','Blatt 1–3 · T.1.1–T.1.2, B.3.2','convergence',['Grenzfunktion bestimmen.','Supremumsfehler abschätzen.','Gleichmäßige Konvergenz und Kompaktheit verbinden.']),['convergence','uniform-criteria','uniform-limit','ascoli'],['uniform-example','uniform-more','uniform-vector','uniform-preserve','fixed-limit']),
make(secondary('grenzuebergaenge','Grenzübergänge','Wann Integral und Ableitung mit dem Grenzwert vertauschen.','Blatt 2 · T.2.2, B.2.3–B.2.4','limits',['Voraussetzungen für beide Vertauschungssätze prüfen.','Gegenbeispiele erklären.','Eine Funktionenreihe begründet ableiten.']),['integral-limit','derivative-limit','weierstrass'],['uniform-integral','integral-spike','limit-derivatives','series-derivative'])
];
const visualLinks={compact:'compact-def sequential heine-borel compact-disk compact-sequence',derivative:'total jacobi-warmup',inverse:'inverse-theorem inverse-exam',implicit:'implicit-theorem implicit-scalar implicit-simple',higher:'hessian laplace',taylor:'taylor-theorem taylor-second',gradient:'gradient gradient-theorem gradient-level',extrema:'extrema extrema-curves',fixed:'contraction banach banach-iteration fixed-ball',uniform:'uniform-continuity uniform-root',convergence:'convergence uniform-criteria',limits:'integral-limit integral-spike derivative-limit limit-derivatives'};
for(const m of modules){for(const t of [...m.theory,...m.exercises])if((visualLinks[m.visual]||'').split(' ').includes(t.id))t.visualLink=m.id;}

const addTo={
  kompaktheit:{theory:['accumulation']},
  ableitungen:{theory:['mean-scalar','mean-vector','zero-derivative']},
  umkehrfunktionen:{theory:['open-map']},
  'implizite-funktionen':{exercises:['implicit-multifree']},
  'hoehere-ableitungen':{theory:['field-products'],exercises:['schwarz-counter']},
  'gleichmaessige-stetigkeit':{exercises:['continuity-composition']},
  funktionenfolgen:{exercises:['uniform-sup-proof']}
};
const taskSources={
 'compact-union':['B.3.3'], 'compact-images':['B.3.4','abc'], 'compact-quotient':['B.3.4','d'],
 'compact-local-test':['B.3.5','b'], 'compact-distance':['B.3.5','a'],
 polar:['B.4.3'], 'complex-square':['B.4.4'], 'inverse-exam':['B.4.5'],
 'local-criterion':['B.5.1'], 'power-map':['B.5.2'], 'inverse-three':['B.5.3'],
 'inverse-counter':['B.6.4'], 'inverse-sphere':['B.4.2'], 'inverse-contraction':['B.4.1'],
 'implicit-simple':['B.5.4','a'], 'implicit-loop':['B.5.4','b'], 'implicit-system':['B.5.5'],
 'div-radial':['B.6.2'], 'laplace-radial':['B.6.5','d'], 'laplace-power':['B.6.5','e'],
 'laplace-log':['B.6.5','af'], 'laplace-sine':['B.6.5','c'], 'laplace-trig':['B.6.5','b'],
 'ck-rules':['B.6.1'], 'regularity-inverse':['B.6.3'],
 'taylor-shift':['B.7.1','a'], 'taylor-three':['B.7.1','b'], 'taylor-log-exp':['B.7.2'], 'taylor-fraction':['B.7.3'],
 'gradient-exercise':['B.7.5','a'], 'critical-points':['B.7.5','b'], 'extrema-curves':['B.7.4'],
 'complete-examples':['B.2.1'], 'fixed-ball':['B.3.1'], 'fixed-limit':['B.3.2'],
 'uniform-root':['B.1.2','abcd'], 'uniform-oscillation':['B.1.2','e'], 'uniform-modulus':['B.1.4'], 'uniform-cauchy':['B.1.5'],
 'uniform-example':['B.1.3','a'], 'uniform-more':['B.1.3','bcd'], 'uniform-vector':['B.2.5'], 'uniform-preserve':['B.2.2','b'],
 'uniform-integral':['B.2.3','a'], 'integral-spike':['B.2.3','b'], 'limit-derivatives':['B.2.4','b'], 'series-derivative':['B.2.4','a'],
 'continuity-composition':['B.1.1'], 'uniform-sup-proof':['B.2.2','a']
};
export const learningGroups=[
 {title:'Schwerpunkte 2026',description:'Kompaktheit, Umkehrsatz, impliziter Satz und Taylor: in der Dozentenmail ausdrücklich genannt.',ids:['kompaktheit','umkehrfunktionen','implizite-funktionen','taylor']},
 {title:'Werkzeuge und weiterer Übungsstoff',description:'Ableitungen zuerst auffrischen. Banach gehört zu Blatt 3; Gradient und kritische Punkte zu Blatt 7.',ids:['ableitungen','hoehere-ableitungen','gradient','extremstellen','fixpunkte','funktionenfolgen']},
 {title:'Grundlagen aus Blatt 1–2',description:'Stetigkeit und erlaubte Grenzübergänge.',ids:['gleichmaessige-stetigkeit','grenzuebergaenge']}
];
const connections={
 'kompaktheit':{before:['fixpunkte'],text:'Vollständigkeit und Fixpunkte werden in den Aufgaben von Blatt 3 ebenfalls gebraucht.'},
 'umkehrfunktionen':{before:['ableitungen','fixpunkte'],text:'Jacobi-Matrix und Kettenregel vorausgesetzt. Für B.4.1 wird Banach benötigt.'},
 'implizite-funktionen':{before:['umkehrfunktionen'],text:'Jacobi-Matrizen, lokale Umkehrbarkeit und lineare Gleichungssysteme.'},
 'hoehere-ableitungen':{before:['ableitungen'],text:'Produkt- und Kettenregel sicher anwenden.'},
 'taylor':{before:['hoehere-ableitungen'],text:'Partielle Ableitungen und Hesse-Matrix. Danach B.7.4–B.7.5 in den Modulen 7–8 rechnen.'},
 'gradient':{before:['ableitungen'],text:'Partielle Ableitungen und Skalarprodukt.'},
 'extremstellen':{before:['gradient','taylor'],text:'Gradient und quadratischer Taylor-Term.'},
 'fixpunkte':{before:[],text:'Vollständigkeit → Kontraktion → Banach → Selbstabbildung einer Kugel.'},
 'funktionenfolgen':{before:['kompaktheit','fixpunkte'],text:'B.3.2 verbindet Kompaktheit, Banach und gleichmäßige Konvergenz.'}
};
const checksByModule={
 kompaktheit:['Umgebenden Raum und passenden Kompaktheitssatz genannt.','Abgeschlossenheit und Beschränktheit bzw. Überdeckung/Teilfolge begründet.','Bei einem Gegenbeispiel Grenzwert oder Unbeschränktheit nachgewiesen.'],
 ableitungen:['Gebiet und Differenzierbarkeit geprüft.','Ableitungen am richtigen Punkt ausgewertet.','Matrixdimensionen und Reihenfolge der Verkettung kontrolliert.'],
 umkehrfunktionen:['C¹ und Determinante geprüft.','Lokale Aussage von globaler Injektivität getrennt.','Bildmenge einschließlich Rand angegeben bzw. inverse Ableitung am Urbild berechnet.'],
 'implizite-funktionen':['Nullstellenbedingung und C¹ geprüft.','Abhängige Variablen und invertierbaren Block festgelegt.','Lokale Eindeutigkeit genannt und A · Dg = −B korrekt gelöst.'],
 'hoehere-ableitungen':['Regularität und Definitionsgebiet geprüft.','Produkt- und Kettenregel vollständig angewendet.','Reine und gemischte Ableitungen sowie Raumdimension unterschieden.'],
 taylor:['Entwicklungspunkt im Gebiet; Zuwachs korrekt gewählt.','Alle Monome bis zum verlangten Gesamtgrad erfasst.','Restordnung begründet und Hesse-Koeffizienten kontrolliert.'],
 gradient:['Gradient am verlangten Punkt ausgewertet.','Einheitsrichtung richtig normiert.','Skalarprodukt bzw. maximale Steigung berechnet.'],
 extremstellen:['Alle Gradientengleichungen gleichzeitig gelöst.','Kritisch und Extremum unterschieden.','Bei semidefiniter Hesse-Matrix oder am Rand gesondert argumentiert.'],
 fixpunkte:['Nichtleere und Vollständigkeit des richtigen Raumes begründet.','Selbstabbildung nachgewiesen.','Ein gemeinsamer Kontraktionsfaktor kleiner als 1 bestimmt.'],
 funktionenfolgen:['Punktweisen Grenzwert und Sonderpunkte geprüft.','Gemeinsame Abschätzung oder Gegenbeispiel mit xₙ angegeben.','Jeden Grenzübergang durch die passende Konvergenz begründet.'],
 'gleichmaessige-stetigkeit':['Definitionsbereich und Stetigkeit geprüft.','Ein vom Ort unabhängiges δ bzw. eine gemeinsame Abschätzung angegeben.','Gegenbeispiele mit konkreten Punktefolgen begründet.'],
 grenzuebergaenge:['Grenzfunktion bestimmt.','Voraussetzungen des Vertauschungssatzes geprüft.','Beide Seiten getrennt kontrolliert, wenn der Satz nicht anwendbar ist.']
};
for(const m of modules){
 const add=addTo[m.id]||{};
 m.theory.push(...(add.theory||[]).map(id=>theory.get(id)));
 m.exercises.push(...(add.exercises||[]).map(id=>exercises.get(id)));
 m.priority=['kompaktheit','umkehrfunktionen','implizite-funktionen','taylor'].includes(m.id)?'Schwerpunkt':m.id==='ableitungen'?'Grundlage':m.id==='funktionenfolgen'?'Mit B.3.2':learningGroups[2].ids.includes(m.id)?'Blatt 1–2':'Übungsstoff 3–7';
 m.connection=connections[m.id];
 for(const t of m.theory){if(proofIdeas[t.id])t.proofIdea=proofIdeas[t.id];}
 for(const e of m.exercises){
   e.checks ||= checksByModule[m.id];
   const match=taskSources[e.id];
   if(match){
     const [number,letters]=match,original=worksheets[number];
     e.originalNumber=number;e.originalIntro=original.intro;
     e.parts=original.parts.filter(p=>!letters||letters.includes(p.label));
   }
 }
}
