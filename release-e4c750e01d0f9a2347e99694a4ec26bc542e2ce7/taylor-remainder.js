const R=String.raw;

// One convention: R_n is a function of the original input, also at shifted centres.
export function remainderEstimate(degree,variables,centre='0',name='f'){
 const point=`(${variables})`,distance=centre==='0'?point:`${point}-${centre}`;
 return R`Da $${name}\in C^{${degree+1}}$ in einer offenen Umgebung von $${centre}$ ist, gilt
$$\begin{gathered}
${name}${point}=T_${degree}${point}+R_${degree}${point},\\
|R_${degree}${point}|\le C\|${distance}\|^{${degree+1}}.
\end{gathered}$$
Die Abschätzung gilt nahe $${centre}$ für eine feste Konstante $C>0$.`;
}

export const remainderGuide=R`**Was ist der Rest?** $R_n(x)=f(x)-T_n(x)$ ist der Fehler der Näherung. Das Taylorpolynom selbst enthält keinen Rest:
$$f(x)=T_n(x)+R_n(x).$$
**Vorlage für die Restabschätzung:** Ist $f\in C^{n+1}$ in einer offenen Umgebung des Entwicklungspunkts $a$, dann gibt es $C>0$ und $\delta>0$ mit
$$\begin{gathered}|R_n(x)|\le C\|x-a\|^{n+1}\\\text{für }\|x-a\|<\delta.\end{gathered}$$
Hier bezeichnet $x$ den ganzen Eingabevektor. Bei Entwicklung um $0$ steht nur $\|x\|$; bei einem anderen Punkt steht der Abstand $\|x-a\|$.
**Was ist $C$?** Eine feste positive Zahl, die den Fehler nach oben begrenzt. Sie darf von der Funktion, dem Taylorgrad und der gewählten Umgebung abhängen, aber nicht vom eingesetzten Punkt $x$. Sie stammt aus Schranken für die Ableitungen der Ordnung $n+1$. Ein Zahlenwert ist nur nötig, wenn die Aufgabe eine konkrete Fehlerschranke verlangt.
**Für die Klausur:** Bei $T_2$ und $f\in C^3$ verwendest du die dritte Potenz; bei $T_3$ und $f\in C^4$ die vierte. „Glatt“ bedeutet, dass diese Ableitungen vorhanden und stetig sind. Nur $+R_n$ benennt den Rest; erst die Ungleichung schätzt ihn ab. Wird der exakte Rest verlangt, gibst du zusätzlich $R_n=f-T_n$ konkret an.
**Nicht ohne Voraussetzungen übernehmen:** Aus $f\in C^n$ allein folgt im Allgemeinen nur
$$\lim_{x\to a,\,x\ne a}\frac{|R_n(x)|}{\|x-a\|^n}=0,$$
keine Schranke mit der Potenz $n+1$.`;

export const secondOrderTaylor=R`Für $f\in C^2$ in einer offenen Umgebung von $a$ gilt
$$\begin{aligned}
f(a+h)&=f(a)+\nabla f(a)\cdot h\\
&\quad+\frac12h^\top H_f(a)h+R_2(a+h),
\end{aligned}$$
wobei
$$\lim_{h\to0,\,h\ne0}\frac{|R_2(a+h)|}{\|h\|^2}=0.$$
Für $h=(u,v)^\top$ ist der quadratische Teil $\frac12f_{xx}(a)u^2+f_{xy}(a)uv+\frac12f_{yy}(a)v^2$.
Ist zusätzlich $f\in C^3$ in einer offenen Umgebung von $a$, gilt die stärkere Restabschätzung
$$|R_2(a+h)|\le C\|h\|^3$$
für kleine $h$ und eine feste Konstante $C>0$.`;
