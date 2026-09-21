// Auswahl vorhandener Karten; keine Kopien und kein eigener Lernstand.
// Explizite Theoriefragen in Altklausur/Übungsblättern, ergänzt um die
// Definition der Kontraktion als Voraussetzung des Banachschen Fixpunktsatzes.
export const examRecallSources = Object.freeze({
 'compact-def': 'T.3.2(a)',
 sequential: 'T.3.2(b)',
 'heine-borel': 'T.4.1(b); Prüfungsbericht 2026',
 cantor: 'T.4.1(a)',
 chain: 'Altklausur 2025, 1(a)',
 diffeo: 'T.5.1',
 'inverse-theorem': 'T.4.2; Altklausur 2025, 2(a)',
 'implicit-theorem': 'T.5.2; Altklausur 2025, 3(a)',
 ck: 'T.6.1(a,c)',
 schwarz: 'T.7.1; Altklausur 2025, 4(b)',
 divergence: 'T.6.1(b)',
 laplace: 'Altklausur 2025, 4(a)',
 'taylor-theorem': 'T.7.2; Dozentenmail und Prüfungsbericht 2026',
 complete: 'T.2.1; T.3.1(a)',
 contraction: 'Definition 1.2; Voraussetzung von T.3.1(b)',
 banach: 'T.3.1(b)',
 convergence: 'T.1.1',
 'uniform-criteria': 'T.1.2',
 'integral-limit': 'T.2.2(a)',
 'derivative-limit': 'T.2.2(b)',
});
export const isExamRecall = card => Object.hasOwn(examRecallSources, card.id);
