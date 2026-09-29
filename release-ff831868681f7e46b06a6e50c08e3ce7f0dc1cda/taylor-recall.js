const R=String.raw;

// Separate cards for memorizing the seven standard Taylor polynomials at 0.
// Stable IDs share the existing note, rating and review storage.
export const taylorRecallCards=[
 {id:'series-exp',title:R`$e^x$`,polynomials:[R`1+x`,R`1+x+\frac{x^2}{2}`,R`1+x+\frac{x^2}{2}+\frac{x^3}{6}`]},
 {id:'series-log',title:R`$\ln(1+x)$`,polynomials:[R`x`,R`x-\frac{x^2}{2}`,R`x-\frac{x^2}{2}+\frac{x^3}{3}`]},
 {id:'series-sin',title:R`$\sin x$`,polynomials:[R`x`,R`x`,R`x-\frac{x^3}{6}`]},
 {id:'series-cos',title:R`$\cos x$`,polynomials:[R`1`,R`1-\frac{x^2}{2}`,R`1-\frac{x^2}{2}`]},
 {id:'series-geometric-minus',title:R`$\frac{1}{1-x}$`,polynomials:[R`1+x`,R`1+x+x^2`,R`1+x+x^2+x^3`]},
 {id:'series-geometric-plus',title:R`$\frac{1}{1+x}$`,polynomials:[R`1-x`,R`1-x+x^2`,R`1-x+x^2-x^3`]},
 {id:'series-sqrt',title:R`$\sqrt{1+x}$`,polynomials:[R`1+\frac{x}{2}`,R`1+\frac{x}{2}-\frac{x^2}{8}`,R`1+\frac{x}{2}-\frac{x^2}{8}+\frac{x^3}{16}`]},
].map(card=>({...card,kind:'Taylorpolynom',module:'taylor',moduleTitle:'Taylorreihen',source:'Standardreihen um 0 · Rechenguide, Taylor'}));

export const isTaylorRecall=card=>card.kind==='Taylorpolynom';
