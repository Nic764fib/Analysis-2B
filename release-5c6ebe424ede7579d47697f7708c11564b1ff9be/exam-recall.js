// Auswahl vorhandener Karten; Lernstände bleiben an ihre bisherigen IDs gebunden.
// Klausurauswahl: 24 Definitionen und Satzaussagen, keine Beweisaufgaben.
export const examRecallSources = Object.freeze({
 'compact-def': 'T.3.2(a)',
 sequential: 'T.3.2(b)',
 'heine-borel': 'T.4.1(b); Prüfungsbericht 2026',
 cantor: 'T.4.1(a)',
 stability: 'Satz 1.12; B.3.3–B.3.4; Schwerpunkt Kompaktheit',
 total: 'Definition 2.1: Totale Differenzierbarkeit (Lecture Notes, S. 12–13)',
 jacobi: 'Definition 2.8 und Satz 2.9; Grundlage der Umkehrsätze',
 c1: 'Definition 2.13 und Satz 2.14; Voraussetzung der Umkehrsätze',
 chain: 'Altklausur 2025, 1(a)',
 mean: 'Satz 2.11: Schrankensatz; Anwendung in Altklausur 2025, 1(b)',
 diffeo: 'T.5.1',
 'inverse-theorem': 'T.4.2; Altklausur 2025, 2(a)',
 'implicit-theorem': 'T.5.2; Altklausur 2025, 3(a)',
 ck: 'T.6.1(a,c)',
 schwarz: 'T.7.1; Altklausur 2025, 4(b)',
 hessian: 'Lecture Notes, S. 55; B.7.2–B.7.3; Schwerpunkt Taylor',
 divergence: 'T.6.1(b)',
 laplace: 'Altklausur 2025, 4(a)',
 'taylor-theorem': 'T.7.2; Dozentenmail und Prüfungsbericht 2026',
 gradient: 'Lecture Notes, §2.4 und §2.6; Grundlagen für B.7.5(a)',
 'critical-definition': 'Satz 2.32 und Definition 2.33; B.7.4–B.7.5; Ergänzung zu Taylor',
 complete: 'T.2.1; T.3.1(a)',
 contraction: 'Definition 1.2; Voraussetzung von T.3.1(b)',
 banach: 'T.3.1(b)',
});
export const isExamRecall = card => Object.hasOwn(examRecallSources, card.id);

// Lernempfehlung aus den bereitgestellten Quellen, keine Eintrittswahrscheinlichkeiten.
export const examPriority = Object.freeze([
 ['heine-borel', 'In der Dozentenmail hervorgehoben; im Bericht 2026 ausdrücklich als Theoriefrage genannt.'],
 ['implicit-theorem', 'Schwerpunkt der Dozentenmail; Thema im Bericht 2026; Satzaussage in der Altklausur 2025.'],
 ['inverse-theorem', 'Schwerpunkt der Dozentenmail; Satzaussage 2025; im Bericht 2026 unter Vorbehalt genannt.'],
 ['taylor-theorem', 'Schwerpunkt der Dozentenmail und Thema im Bericht 2026. Voraussetzungen und Restterm mitlernen.'],
 ['compact-def', 'Die Definition gehört zum Schwerpunkt Kompaktheit und wird in T.3.2(a) abgefragt.'],
 ['stability', 'Stetige Bilder und Produkte kompakter Mengen werden für die Kompaktheitsaufgaben gebraucht.'],
 ['sequential', 'Folgenkompaktheit ist ein zentraler Zugang zu Kompaktheit; Theorieaufgabe T.3.2(b).'],
 ['jacobi', 'Die Jacobi-Matrix wird in beiden Umkehrsätzen und den zugehörigen Rechnungen gebraucht.'],
 ['c1', 'Stetige Differenzierbarkeit gehört zu den Voraussetzungen beider Umkehrsätze.'],
 ['total', 'Grundbegriff für Ableitung, Kettenregel und Umkehrsätze.'],
 ['diffeo', 'Beschreibt die differenzierbare Umkehrbarkeit; Theorieaufgabe T.5.1.'],
 ['hessian', 'Die Hesse-Matrix wird für Taylorpolynome zweiten Grades und Extremstellen gebraucht.'],
 ['ck', 'Die Klassen C^k beschreiben die Glattheitsvoraussetzungen von Taylor und Schwarz.'],
 ['schwarz', 'Satzaussage in der Altklausur 2025; wichtig für gemischte Ableitungen und die Hesse-Matrix.'],
 ['chain', 'Satzaussage in der Altklausur 2025; auch für Ableitungen von Umkehrfunktionen wichtig.'],
 ['mean', 'In der Altklausur 2025 als Beweisaufgabe zur Kettenregel verwendet.'],
 ['gradient', 'Wird für Richtungsableitungen, Taylor und Extremstellen gebraucht; B.7.5(a).'],
 ['critical-definition', 'Ergänzt Taylor und die Extremstellenaufgaben B.7.4–B.7.5.'],
 ['cantor', 'Weiterer Satz im Schwerpunkt Kompaktheit; Theorieaufgabe T.4.1(a).'],
 ['laplace', 'Definition in der Altklausur 2025; von der Dozentenmail nicht eigens hervorgehoben.'],
 ['banach', 'Eigene Theorieaufgabe T.3.1(b); außerhalb der vier ausdrücklich genannten Schwerpunkte.'],
 ['complete', 'Voraussetzung des Banachschen Fixpunktsatzes; T.2.1 und T.3.1(a).'],
 ['contraction', 'Voraussetzung des Banachschen Fixpunktsatzes; Definition 1.2.'],
 ['divergence', 'Theorieaufgabe T.6.1(b); in den bereitgestellten Klausurhinweisen nicht eigens hervorgehoben.'],
].map(([id,reason],i)=>Object.freeze({id,rank:i+1,reason})));
const priorityById = new Map(examPriority.map(item=>[item.id,item]));
export const priorityOf = card => priorityById.get(card.id);
export const orderExamRecall = cards => [...cards].sort((a,b)=>(priorityOf(a)?.rank??Infinity)-(priorityOf(b)?.rank??Infinity));

// Nur die Klausurabfrage verwendet diese vier Fassungen. Die Themenmodule
// behalten ihre vollständigen Skriptfassungen, einschließlich Satz 2.30.
const R=String.raw;
const examRecallText = Object.freeze({
 jacobi: {
  text: R`Sei $E\subset\mathbb R^n$ offen und $f:E\to\mathbb R^m$. Für $x\in E$, $1\le i\le m$ und $1\le j\le n$ definieren wir $$\frac{\partial f_i}{\partial x_j}(x)=\lim_{t\to0}\frac{f_i(x+te_j)-f_i(x)}t,$$ sofern der Grenzwert existiert. Dabei ist $e_j$ der $j$-te Standardbasisvektor von $\mathbb R^n$.
Existieren alle partiellen Ableitungen in $x$, bilden sie die Jacobi-Matrix $$J_f(x)=\begin{pmatrix}\frac{\partial f_1}{\partial x_1}(x)&\cdots&\frac{\partial f_1}{\partial x_n}(x)\\\vdots&&\vdots\\\frac{\partial f_m}{\partial x_1}(x)&\cdots&\frac{\partial f_m}{\partial x_n}(x)\end{pmatrix}.$$
Ist $f$ in $x$ total differenzierbar, existieren diese partiellen Ableitungen, und $J_f(x)$ ist die Darstellungsmatrix von $Df(x)$ bezüglich der Standardbasen.`,
 },
 ck: {
  text: R`Sei $E\subseteq\mathbb R^n$ offen und $f:E\to\mathbb R$.
Höhere partielle Ableitungen entstehen durch wiederholtes partielles Ableiten. Insbesondere bezeichnet $$D_{ij}f:=D_i(D_jf)\qquad(1\le i,j\le n)$$ die Ableitung zuerst nach $x_j$, dann nach $x_i$, sofern sie existiert.
Für $k\in\mathbb N$ heißt $f$ $k$-mal stetig differenzierbar, geschrieben $f\in C^k(E)$, wenn alle partiellen Ableitungen bis einschließlich Ordnung $k$ auf $E$ existieren und stetig sind.
Die Funktion heißt glatt, geschrieben $f\in C^\infty(E)$, wenn die partiellen Ableitungen jeder Ordnung existieren und stetig sind.`,
  note: 'Für vektorwertige Funktionen gelten die Definitionen komponentenweise.',
 },
 divergence: {
  text: R`Sei $E\subseteq\mathbb R^n$ offen und $f:E\to\mathbb R^n$ partiell differenzierbar. Die Divergenz von $f$ ist das Skalarfeld $$\operatorname{div}f:E\to\mathbb R,\qquad\operatorname{div}f(x)=\sum_{j=1}^n\frac{\partial f_j}{\partial x_j}(x).$$`,
 },
 gradient: {
  text: R`Sei $E\subseteq\mathbb R^n$ offen und $f:E\to\mathbb R$ partiell differenzierbar. Der Gradient in $a\in E$ ist $$\nabla f(a)=\begin{pmatrix}D_1f(a)\\\vdots\\D_nf(a)\end{pmatrix}.$$
Die Richtungsableitung in Richtung $v\in\mathbb R^n$ ist $$D_vf(a)=\lim_{t\to0}\frac{f(a+tv)-f(a)}t,$$ sofern dieser Grenzwert existiert.
Ist $f$ in $a$ total differenzierbar, gilt $$D_vf(a)=Df(a)v=\nabla f(a)\cdot v.$$`,
  checks: ['Der Gradient enthält alle ersten partiellen Ableitungen.', 'Die Formel mit dem Gradienten setzt totale Differenzierbarkeit voraus.'],
 },
});
export const examRecallCard = card => examRecallText[card.id] ? {...card,...examRecallText[card.id]} : card;
export const examFocus = Object.freeze({
 'heine-borel': '2026 ausdrücklich als Theoriefrage berichtet; T.4.1(b).',
 'inverse-theorem': 'Schwerpunkt der Dozentenmail; im Bericht 2026 unter Vorbehalt genannt; T.4.2.',
 'implicit-theorem': 'Thema im Bericht 2026 und Schwerpunkt der Dozentenmail; T.5.2.',
 'taylor-theorem': 'Thema im Bericht 2026 und Schwerpunkt der Dozentenmail; T.7.2.',
});
export const isExamFocus = card => Object.hasOwn(examFocus, card.id);
