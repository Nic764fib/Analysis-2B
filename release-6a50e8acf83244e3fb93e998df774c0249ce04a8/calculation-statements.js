import {esc,prose} from './study-ui.js';

const R=String.raw;
export const calculationStatements = [
 {
  title:'Implizite Funktionen',
  statement:R`Da $F\in C^1$, $F(p)=0$ und $\det D_yF(p)\ne0$, ist $F(x,y)=0$ nach dem impliziten Funktionensatz bei $p$ lokal eindeutig nach $y=g(x)$ mit $g\in C^1$ auflösbar.`,
  note:R`(Aufpassen: $C^1$ in einer offenen Umgebung von $p$. $D_yF$ ist der quadratische Block für die gesuchten Variablen; dort den Punkt $p$ einsetzen.)`,
 },
 {
  title:'Umkehrsatz',
  statement:R`Da $f\in C^1$ und $\det Df(a)\ne0$, ist $f$ nach dem Umkehrsatz bei $a$ lokal invertierbar.`,
  note:R`(Aufpassen: $C^1$ in einer offenen Umgebung von $a$. $a$ ist der Eingabepunkt; bei gegebener Ausgabe $b$ zuerst $f(a)=b$ lösen.)`,
 },
 {
  title:'Taylor · Restabschätzung für T₂',
  statement:R`Da $f\in C^3$ in einer offenen Umgebung von $a$ ist, gilt nach Taylor:
$$\begin{gathered}f(x,y)=T_2(x,y)+R_2(x,y),\\|R_2(x,y)|\le C\|(x,y)-a\|^3\end{gathered}$$
für ein festes $C>0$ und alle $(x,y)$ nahe $a$.`,
  note:R`(Aufpassen: $a$ durch den Entwicklungspunkt ersetzen. $C^2$ allein reicht für diese kubische Schranke nicht. Allgemein genügt für $T_n$ die Voraussetzung $C^{n+1}$ für die Restpotenz $n+1$.)`,
 },
];

export function renderCalculationStatements({shell}){
 shell(`<div class="eyebrow">Kurz lernen</div><h1>Drei Rechensätze</h1><p class="lead">Kurze Begründungen zum Dazuschreiben. Die Voraussetzungen jeweils in deiner Rechnung prüfen.</p><div class="calculation-statements">${calculationStatements.map((item,i)=>`<article class="panel calculation-statement"><div class="calculation-statement-heading"><h2>${i+1}. ${esc(item.title)}</h2><button class="statement-toggle" aria-expanded="true" aria-controls="calculation-statement-${i}" aria-label="${esc(item.title)}: Satz verdecken">Verdecken</button></div><div id="calculation-statement-${i}" class="statement-body"><div class="formal">${prose(item.statement)}</div><div class="small muted statement-note">${prose(item.note)}</div></div></article>`).join('')}</div><a class="button-link" href="#/abfragen">← Zurück zu Sätze abfragen</a>`,'abfragen','Wiederholen / Drei Rechensätze');
 document.querySelectorAll('.statement-toggle').forEach((button,i)=>button.onclick=()=>{
  const body=document.getElementById(button.getAttribute('aria-controls'));
  body.hidden=!body.hidden;
  button.setAttribute('aria-expanded',String(!body.hidden));
  button.textContent=body.hidden?'Anzeigen':'Verdecken';
  button.setAttribute('aria-label',`${calculationStatements[i].title}: Satz ${body.hidden?'anzeigen':'verdecken'}`);
 });
}
