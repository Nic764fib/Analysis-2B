import {worksheets} from './worksheet-data.js';
import {trainingSets} from './training.js';
export const R=String.raw;
export const part=(prompt,...steps)=>({prompt,steps});
export const numberField=(label,answer)=>({label,answer:String(answer)});
export const question=(prompt,correct,explanation,wrong,whyWrong,other,whyOther)=>({prompt,options:[
 {text:correct,correct:true,explanation},{text:wrong,correct:false,explanation:whyWrong},{text:other,correct:false,explanation:whyOther}
]});
export function original(number,labels){const w=worksheets[number];return {source:`Originalaufgabe · ${w.source}`,sourceHref:`#/blaetter/${w.sheet}/${number}`,intro:w.intro,parts:w.parts.filter(p=>!labels||labels.includes(p.label)).map(p=>({...p}))};}
export function previous(id,indices){const t=trainingSets.flatMap(s=>s.tasks).find(t=>t.id===id);return {source:`Eigene Variante · ${t.source.replace(/^Variante[n]? zu /,'')}`,intro:'',parts:t.parts.filter((_,i)=>!indices||indices.includes(i)).map(p=>({...p}))};}
export const topics={compact:'Kompaktheit',inverse:'Umkehrfunktionen',implicit:'Implizite Funktionen',taylor:'Taylor'};
export const standardSeries={
 exp:[R`$e^w$`,R`$1+w+\frac{w^2}{2}+\frac{w^3}{6}$`],
 log:[R`$\ln(1+w)$`,R`$w-\frac{w^2}{2}+\frac{w^3}{3}$`],
 sin:[R`$\sin w$`,R`$w-\frac{w^3}{6}$`],
 cos:[R`$\cos w$`,R`$1-\frac{w^2}{2}$`],
 geometric:[R`$\frac1{1-w}$`,R`$1+w+w^2+w^3$`]
};
export const neededSeries={
 't-logexp':['log','exp'],'t-product':['exp','cos','sin'],'t-log-shift':['log'],
 't-shift':['log','exp'],'t-exp-shift':['exp'],'t-fraction':['exp','geometric','sin'],'t-read-shift':['exp']
};
export const families={
 closed:{topic:'compact',title:'Abgeschlossen und beschränkt',page:2,recipe:[R`Lies alle Bedingungen ab. Schreibe die Ausdrücke als stetige Funktionen, z. B. $q(x,y)=x^2+y^2$.`,R`Schreibe die Menge als Urbild abgeschlossener Wertebereiche bzw. als Schnitt solcher Urbilder. Beachte das Definitionsgebiet.`,R`Suche eine feste Normschranke: $x^2+y^2\le4$ ergibt $\|(x,y)\|\le2$.`,R`Schluss in $\mathbb R^n$: abgeschlossen und beschränkt, also nach Heine–Borel kompakt.`]},
 noncompact:{topic:'compact',title:'Kompaktheit widerlegen',page:4,recipe:[R`Prüfe, ob ein Grenzpunkt fehlt oder die Menge unbeschränkt ist. Einer der beiden Nachweise reicht.`,R`Fehlender Punkt: Wähle $z_n$ in der Menge und zeige $z_n\to z$ mit $z$ außerhalb.`,R`Unbeschränkt: Wähle $z_n$ in der Menge und zeige $\|z_n\|\to\infty$.`,R`Schreibe dazu, welche Eigenschaft fehlt. Ein erfolgloser Urbildansatz allein widerlegt nichts.`]},
 images:{topic:'compact',title:'Stetige Bilder und Mengenoperationen',page:5,recipe:[R`Suche die kompakte Ausgangsmenge: ein abgeschlossenes Intervall oder ein Produkt kompakter Mengen.`,R`Schreibe eine stetige Abbildung hin, deren Bild genau die gesuchte Menge ist.`,R`Bei Quotienten darf der Nenner auf dieser Ausgangsmenge nicht null werden.`,R`Stetiges Bild einer kompakten Menge ist kompakt. Endliche Vereinigungen und abgeschlossene Teilmengen kompakter Mengen sind ebenfalls kompakt.`]},
 local:{topic:'inverse',title:'Lokale Umkehrbarkeit',page:6,recipe:[R`Prüfe: offenes Gebiet und $f\in C^1$. Stetige partielle Ableitungen reichen für $C^1$.`,R`Stelle $Df$ auf: Zeilen sind Ausgaben, Spalten sind Eingabevariablen.`,R`Berechne die Determinante und setze gegebenenfalls den Punkt ein.`,R`Bei $\det Df(a)\ne0$ existiert lokal eine $C^1$-Umkehrfunktion. Globale Injektivität ist damit noch nicht gezeigt.`]},
 image:{topic:'inverse',title:'Injektivität und Bild',page:10,recipe:[R`Für Injektivität: Setze $f(P)=f(Q)$ und zeige $P=Q$. Zum Widerlegen reichen zwei verschiedene zulässige Punkte mit gleichem Bild.`,R`Bei Polarformen vergleiche zuerst die Normen, dann die Winkel im vorgegebenen Intervall.`,R`Für die Bildmenge übertrage Radius, Winkel und alle Randbedingungen.`,R`Begründe beide Richtungen: Alle Bilder liegen in der genannten Menge, und jeder dort genannte Punkt wird erreicht.`]},
 inverseDerivative:{topic:'inverse',title:'Ableitung der Umkehrfunktion',page:12,recipe:[R`Bestimme zuerst $a$ aus $f(a)=b$. Der vorgegebene Punkt $b$ ist ein Bildpunkt.`,R`Berechne $Df(a)$ und prüfe die Umkehrbarkeit.`,R`Es gilt $D(f^{-1})(b)=[Df(a)]^{-1}$.`,R`Für $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ gilt $M^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$. Kontrolliere bei Bedarf $MM^{-1}=I$.`]},
 scalar:{topic:'implicit',title:'Eine Gleichung auflösen',page:14,recipe:[R`Prüfe $F(a,b)=0$ und $F\in C^1$ nahe dem Punkt.`,R`Gesucht ist $y=g(x)$: Prüfe $F_y(a,b)\ne0$. Gesucht ist $x=h(y)$: Prüfe $F_x(a,b)\ne0$.`,R`Setze die Werte ein: $g'(a)=-\frac{F_x}{F_y}$ bzw. $h'(b)=-\frac{F_y}{F_x}$.`,R`Nenne lokale Existenz, Eindeutigkeit und den vorgegebenen Funktionswert. Ist der Nenner null, entscheidet diese Anwendung des Satzes nicht.`]},
 system:{topic:'implicit',title:'Gleichungssystem, eine freie Variable',page:13,recipe:[R`Bestimme die gesuchten Variablen und prüfe die Nullstellenbedingung in allen Gleichungen.`,R`Prüfe $C^1$. Stelle den quadratischen Block $A$ der Ableitungen nach den gesuchten Variablen auf.`,R`Ist $\det A\ne0$, existiert die eindeutige lokale $C^1$-Lösung. $B$ enthält die Ableitung nach der freien Variablen.`,R`Löse $A\,Dg=-B$; kontrolliere anschließend $A\,Dg+B=0$.`]},
 multifree:{topic:'implicit',title:'Gleichungssystem, mehrere freie Variablen',page:16,recipe:[R`Prüfe $F(a,b)=0$ und $C^1$ nahe dem Punkt.`,R`Bilde $A$ aus den Spalten der gesuchten Variablen; die übrigen Spalten in ihrer Reihenfolge bilden $B$.`,R`Prüfe $\det A\ne0$. Dann gilt lokal $g(b)=a$ und $Dg(b)=-A^{-1}B$.`,R`Löse für jede Spalte von $B$ ein lineares Gleichungssystem. Prüfe alle Spalten durch $A\,Dg+B=0$.`]},
 series:{topic:'taylor',title:'Standardreihen einsetzen',page:18,recipe:[R`Prüfe das Definitionsgebiet nahe dem Entwicklungspunkt. Verschiebe ihn auf $0$, falls nötig.`,R`Ersetze $e^u,\ln(1+u),\sin u,\cos u$ oder $(1-u)^{-1}$ durch ihre passende Reihe. Setze den gesamten inneren Ausdruck für $u$ ein.`,R`Multipliziere nur bis zum gefragten Gesamtgrad: $xy$ hat Grad 2, $xy^2$ Grad 3.`,R`Sammle die Terme zu $T_n$. Schreibe $f=T_n+R_n$ und begründe die Restordnung.`]},
 shift:{topic:'taylor',title:'Verschobener Entwicklungspunkt',page:23,recipe:[R`Setze bei $a=(a_1,a_2)$ die neuen Variablen $u=x-a_1$, $v=y-a_2$.`,R`Schreibe die ganze Funktion in $u,v$. Bei einem Logarithmus trenne die Konstante ab, z. B. $\ln(2+w)=\ln2+\ln(1+\frac w2)$.`,R`Setze Standardreihen ein und behalte nur den verlangten Gesamtgrad in $u,v$.`,R`Gib die Bedeutung von $u,v$ und $\rho=\|(u,v)\|$ an. Für eine glatte Funktion gilt nahe dem Punkt $R_n=O(\rho^{n+1})$.`]},
 hessian:{topic:'taylor',title:'Gradient, Hesse-Matrix und Rest',page:21,recipe:[R`Schreibe $f(a+h)=c+\ell^Th+\frac12h^THh+R_2(h)$.`,R`Die linearen Koeffizienten ergeben den Gradienten am Entwicklungspunkt.`,R`Verdopple reine quadratische Koeffizienten für die Diagonale. Der Koeffizient von $xy$ steht unverändert an beiden gemischten Stellen.`,R`Kontrolliere durch zweite Ableitungen, wenn verlangt. Bei $C^3$ nahe $a$ ist $R_2(h)=O(\|h\|^3)$.`]}
};
