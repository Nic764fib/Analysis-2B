// Auswahl vorhandener Karten; keine Kopien und kein eigener Lernstand.
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
 'gradient-theorem': 'Satz 2.30; B.7.5(a); zusätzliche Absicherung',
 'critical-definition': 'Satz 2.32 und Definition 2.33; B.7.4–B.7.5; Ergänzung zu Taylor',
 complete: 'T.2.1; T.3.1(a)',
 contraction: 'Definition 1.2; Voraussetzung von T.3.1(b)',
 banach: 'T.3.1(b)',
});
export const isExamRecall = card => Object.hasOwn(examRecallSources, card.id);
export const examFocus = Object.freeze({
 'heine-borel': '2026 ausdrücklich als Theoriefrage berichtet; T.4.1(b).',
 'inverse-theorem': 'Schwerpunkt der Dozentenmail; im Bericht 2026 unter Vorbehalt genannt; T.4.2.',
 'implicit-theorem': 'Thema im Bericht 2026 und Schwerpunkt der Dozentenmail; T.5.2.',
 'taylor-theorem': 'Thema im Bericht 2026 und Schwerpunkt der Dozentenmail; T.7.2.',
});
export const isExamFocus = card => Object.hasOwn(examFocus, card.id);
