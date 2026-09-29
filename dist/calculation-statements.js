const R=String.raw;
export const calculationRecallCards = [
 {
  id:'calculation-implicit',
  title:'Implizite Funktionen',
  prompt:'Formuliere den kurzen Begründungssatz für die lokale Auflösbarkeit nach den gesuchten Variablen.',
  text:R`Da $F\in C^1$, $F(p)=0$ und $\det D_yF(p)\ne0$, ist $F(x,y)=0$ nach dem impliziten Funktionensatz bei $p$ lokal eindeutig nach $y=g(x)$ mit $g\in C^1$ auflösbar.`,
  note:R`(Aufpassen: $C^1$ in einer offenen Umgebung von $p$. $D_yF$ ist der quadratische Block für die gesuchten Variablen; dort den Punkt $p$ einsetzen.)`,
 },
 {
  id:'calculation-inverse',
  title:'Umkehrsatz',
  prompt:'Formuliere den kurzen Begründungssatz für die lokale Umkehrbarkeit.',
  text:R`Da $f\in C^1$ und $\det Df(a)\ne0$, ist $f$ nach dem Umkehrsatz bei $a$ lokal invertierbar.`,
  note:R`(Aufpassen: $C^1$ in einer offenen Umgebung von $a$. $a$ ist der Eingabepunkt; bei gegebener Ausgabe $b$ zuerst $f(a)=b$ lösen.)`,
 },
 {
  id:'calculation-taylor',
  title:'Taylor · Restabschätzung für T₂',
  prompt:'Formuliere die Begründung und die Restabschätzung für ein Taylorpolynom zweiten Grades um den Punkt a.',
  text:R`Da $f\in C^3$ in einer offenen Umgebung von $a$ ist, gilt nach Taylor:
$$\begin{gathered}f(x,y)=T_2(x,y)+R_2(x,y),\\|R_2(x,y)|\le C\|(x,y)-a\|^3\end{gathered}$$
für ein festes $C>0$ und alle $(x,y)$ nahe $a$.`,
  note:R`(Aufpassen: $a$ durch den Entwicklungspunkt ersetzen. $C^2$ allein reicht für diese kubische Schranke nicht. Allgemein genügt für $T_n$ die Voraussetzung $C^{n+1}$ für die Restpotenz $n+1$.)`,
 },
].map(card=>({...card,kind:'Rechensatz',module:'rechensaetze',moduleTitle:'Drei Rechensätze',source:'Kurze Begründung für Rechenaufgaben',checks:[]}));

export const isCalculationRecall=card=>card.module==='rechensaetze';
