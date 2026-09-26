const R=String.raw;
export const workedSteps={
 'k-annulus':[[
  R`**Abgeschlossenheit:** Die Funktionen $q(x,y)=x^2+y^2$ und $p(x,y)=x$ sind auf $\mathbb R^2$ stetig. Es gilt $$K=q^{-1}([1,4])\cap p^{-1}([0,\infty)).$$ Als Schnitt der Urbilder abgeschlossener Mengen ist $K$ abgeschlossen.`,
  R`**Beschränktheit:** Für $(x,y)\in K$ gilt $$\|(x,y)\|=\sqrt{x^2+y^2}\le\sqrt4=2.$$ Somit ist $K$ abgeschlossen und beschränkt, also nach Heine–Borel kompakt.`
 ]],
 'k-ellipse':[[
  R`**Abgeschlossenheit:** Die Funktionen $q(x,y)=x^2+4y^2$ und $p(x,y)=x+y$ sind auf $\mathbb R^2$ stetig. Es gilt $$K=q^{-1}((-\infty,4])\cap p^{-1}([0,\infty)).$$ Als Schnitt der Urbilder abgeschlossener Mengen ist $K$ abgeschlossen.`,
  R`**Beschränktheit:** Für $(x,y)\in K$ gilt $$\|(x,y)\|^2=x^2+y^2\le x^2+4y^2\le4.$$ Also $\|(x,y)\|\le2$. Nach Heine–Borel ist $K$ kompakt.`
 ]],
 'k-open':[[
  R`Für $n\ge1$ gilt $$\begin{gathered}z_n=(1-1/n,0)\in M,\\(1-1/n)^2<1.\end{gathered}$$ Aber $z_n\to(1,0)\notin M$. Also ist $M$ nicht abgeschlossen und nach Heine–Borel nicht kompakt.`
 ]],
 'k-hyperbola':[[
  R`**Abgeschlossenheit:** Setze $q(x,y)=xy$ und $p(x,y)=x$. Beide sind auf $\mathbb R^2$ stetig, und $$M=q^{-1}(\{1\})\cap p^{-1}([0,1]).$$ Dabei schließt $xy=1$ den Wert $x=0$ aus. Beide Zielmengen sind abgeschlossen; also ist $M$ abgeschlossen.`,
  R`**Unbeschränktheit:** Für $n\ge1$ gilt $$\begin{gathered}z_n=(1/n,n)\in M,\\\|z_n\|=\sqrt{\frac1{n^2}+n^2}\ge n\to\infty.\end{gathered}$$ Also ist $M$ unbeschränkt und nach Heine–Borel nicht kompakt.`
 ]],
 'k-sequence':[[
  R`Die Folge $z_n=(1/n,1/n^2)\in M$ erfüllt $$z_n\to(0,0)\notin M.$$ Somit ist $M$ nicht abgeschlossen und nicht kompakt.`,
  R`Sei $K=M\cup\{(0,0)\}$. Jede offene Überdeckung von $K$ enthält eine Menge $U$ mit $(0,0)\in U$. Wegen $z_n\to(0,0)$ liegen ab einem Index $N$ alle $z_n$ in $U$. Für die endlich vielen übrigen Punkte wähle je eine Überdeckungsmenge. Das ergibt eine endliche Teilüberdeckung. Also ist $K$ kompakt.`
 ]],
 'k-graph':[[
  R`$[1,2]$ ist abgeschlossen und beschränkt, also nach Heine–Borel kompakt. Die Abbildung $$\varphi:[1,2]\to\mathbb R^2,\qquad\varphi(t)=(t,1/t)$$ ist stetig, da $t\ne0$ auf $[1,2]$. Wegen $K=\varphi([1,2])$ ist $K$ als stetiges Bild einer kompakten Menge kompakt.`
 ]],
 'k-operations':[
  [R`Da $A$ kompakt ist, ist $K=A\times A$ kompakt. Die Funktionen $$f(x,y)=x+y,\qquad g(x,y)=xy$$ sind auf $\mathbb R^2$ stetig. Es gilt $S=f(K)$ und $P=g(K)$. Also sind $S$ und $P$ als stetige Bilder einer kompakten Menge kompakt.`],
  [R`**Nicht immer:** Wähle das kompakte $A=[0,1]$. Für $n\ge1$ sind $1,1/n\in A$ und $1/n\ne0$, also $$n=\frac{1}{1/n}\in Q.$$ Somit ist $Q$ unbeschränkt und nicht kompakt.`,
   R`**Falls $0\notin A$:** $K=A\times A$ ist kompakt und $$q:K\to\mathbb R,\qquad q(x,y)=x/y$$ ist wegen $y\ne0$ auf ganz $K$ stetig. Daher ist $Q=q(K)$ kompakt.`]
 ],
 'k-unions':[
  [R`Es gilt $$\begin{aligned}x\in\bigcap_{n\ge1}K_n&\iff |x|\le1/n\ \text{für alle }n\\&\iff x=0\qquad(1/n\to0).\end{aligned}$$ Daher ist $\bigcap_{n\ge1}K_n=\{0\}$. Außerdem $$K_2=[-1/2,1/2]\subseteq K_1=[-1,1],$$ also $K_1\cup K_2=[-1,1]$. Beide Ergebnismengen sind abgeschlossen und beschränkt, somit nach Heine–Borel kompakt.`],
  [R`Alle Intervalle liegen in $[0,\infty)$. Für jedes $x\ge0$ gibt es ein $n\in\mathbb N$ mit $n\ge\max\{1,x\}$, also $x\in[0,n]$. Daher $$U=\bigcup_{n\ge1}[0,n]=[0,\infty).$$ Wegen $n\in U$ und $|n|\to\infty$ ist $U$ unbeschränkt und nicht kompakt.`]
 ],
 'i-powers':[[
  R`Auf dem offenen Gebiet $(0,\infty)^2$ ist $f\in C^1$, denn $x^y=e^{y\ln x}$ und $y^x=e^{x\ln y}$. $$Df(x,y)=\begin{pmatrix}yx^{y-1}&x^y\ln x\\y^x\ln y&xy^{x-1}\end{pmatrix}.$$`,
  R`$$\begin{aligned}\det Df&=(yx^{y-1})(xy^{x-1})\\&\quad-(x^y\ln x)(y^x\ln y)\\&=x^yy^x(1-\ln x\ln y).\end{aligned}$$ Da $x^yy^x>0$, ist $f$ nach dem Umkehrsatz genau bei $\boxed{\ln x\ln y\ne1}$ ein lokaler $C^1$-Diffeomorphismus. Bei Determinante 0 ist eine $C^1$-Inverse nach der Kettenregel ausgeschlossen.`
 ]],
 'i-space':[[
  R`$f\in C^1(\mathbb R^3,\mathbb R^3)$, und $\mathbb R^3$ ist offen. Es gilt $$Df=\begin{pmatrix}\sin\phi\cos\psi&r\cos\phi\cos\psi&-r\sin\phi\sin\psi\\\sin\phi\sin\psi&r\cos\phi\sin\psi&r\sin\phi\cos\psi\\\cos\psi&0&-r\sin\psi\end{pmatrix}.$$`,
  R`Entwicklung nach der dritten Zeile: $$\begin{aligned}\det Df&=r^2\sin\phi\cos\phi\cos\psi\\&\quad\cdot(\cos^2\psi+\sin^2\psi)\\&\quad-r^2\sin\phi\cos\phi\sin\psi\\&\quad\cdot(\cos\psi\sin\psi-\sin\psi\cos\psi)\\&=r^2\sin\phi\cos\phi\cos\psi.\end{aligned}$$ Nach dem Umkehrsatz und der Kettenregel ist $f$ genau dann ein lokaler $C^1$-Diffeomorphismus, wenn $$\boxed{r\ne0,\quad\phi\notin\tfrac\pi2\mathbb Z,\quad\psi\notin\tfrac\pi2+\pi\mathbb Z.}$$`
 ]],
 'i-polar':[[
  R`$$Df(r,\theta)=\begin{pmatrix}\cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta\end{pmatrix},$$ $$\det Df=r\cos^2\theta+r\sin^2\theta=r.$$`,
  R`Für $(u,v)=f(r,\theta)$ mit $(r,\theta)\in S$ gilt $$u^2+v^2=r^2(\cos^2\theta+\sin^2\theta)=r^2\in[1,4],$$ $$v=r\sin\theta\ge0\qquad(0\le\theta\le\pi).$$ Umgekehrt wird jeder Punkt mit diesen Bedingungen durch seinen Radius $r=\sqrt{u^2+v^2}\in[1,2]$ und seinen Winkel $\theta\in[0,\pi]$ erreicht. Also ist das Bild der abgeschlossene obere Halbring: $$\boxed{\begin{gathered}f(S)=\{(u,v)\in\mathbb R^2:\\1\le u^2+v^2\le4,\ v\ge0\}.\end{gathered}}$$`
 ]],
 'i-square-image':[[
  R`$$Df(x,y)=\begin{pmatrix}2x&-2y\\2y&2x\end{pmatrix},$$ $$\begin{aligned}\det Df&=2x\cdot2x-(-2y)\cdot2y\\&=4(x^2+y^2).\end{aligned}$$`,
  R`Setze $u=x^2-y^2$ und $v=2xy$. Auf $S$ gilt $$\begin{aligned}u^2+v^2&=(x^2-y^2)^2+(2xy)^2\\&=x^4-2x^2y^2+y^4+4x^2y^2\\&=(x^2+y^2)^2\le16,\end{aligned}$$ und $v=2xy\ge0$, da $x,y\ge0$.`,
  R`Für festes $s=x^2+y^2\in[0,4]$ lasse $x^2$ von $0$ bis $s$ laufen und setze $y^2=s-x^2$, mit $x,y\ge0$. Dann durchläuft $u=2x^2-s$ das ganze Intervall $[-s,s]$. Zusammen mit $u^2+v^2=s^2$ und $v\ge0$ ergibt das den ganzen oberen Halbkreis mit Radius $s$. Alle $s\in[0,4]$ ergeben daher die abgeschlossene obere Halbkreisscheibe: $$\boxed{\begin{gathered}f(S)=\{(u,v)\in\mathbb R^2:\\u^2+v^2\le16,\ v\ge0\}.\end{gathered}}$$`
 ]],
 'i-exp':[
  [R`**Lokale Umkehrbarkeit:** $A$ ist offen und $f\in C^1(A,\mathbb R^2)$. $$Df(x,y)=\begin{pmatrix}e^x\cos y&-e^x\sin y\\e^x\sin y&e^x\cos y\end{pmatrix},$$ $$\det Df=e^{2x}(\cos^2y+\sin^2y)=e^{2x}>0.$$ Nach dem Umkehrsatz ist $f$ auf $A$ überall lokal $C^1$-umkehrbar.`,
   R`**Injektivität:** Seien $(x,y),(s,t)\in A$ mit $f(x,y)=f(s,t)$. Dann $$e^x\cos y=e^s\cos t,\qquad e^x\sin y=e^s\sin t.$$ Quadrieren und Addieren liefert $$\begin{aligned}e^{2x}(\cos^2y+\sin^2y)&=e^{2s}(\cos^2t+\sin^2t),\\e^{2x}&=e^{2s}\quad\Longrightarrow\quad x=s.\end{aligned}$$ Einsetzen von $s=x$ in beide ursprünglichen Gleichungen und Teilen durch $e^x>0$ ergibt $$e^x\cos y=e^x\cos t\quad\Longrightarrow\quad\cos y=\cos t,$$ $$e^x\sin y=e^x\sin t\quad\Longrightarrow\quad\sin y=\sin t.$$ Beide Winkel liegen in $(0,2\pi)$; dort bestimmt das Sinus-Kosinus-Paar den Winkel eindeutig. Also $y=t$ und damit $(x,y)=(s,t)$. Somit ist $f$ injektiv.`,
   R`**Bild:** Der Radius ist $\sqrt{u^2+v^2}=e^x\in(0,\infty)$, der Winkel ist $y\in(0,2\pi)$. Daher $$\boxed{f(A)=\mathbb R^2\setminus\{(u,0):u\ge0\}.}$$ Jeder Punkt dieser Menge mit Radius $\rho>0$ und Winkel $\theta\in(0,2\pi)$ wird durch $(\ln\rho,\theta)\in A$ erreicht.`],
  [R`Nein, denn $$\begin{gathered}(0,0)\ne(0,2\pi),\\f(0,0)=(1,0)=f(0,2\pi).\end{gathered}$$ Also ist $f$ auf $\mathbb R^2$ nicht injektiv.`]
 ],
 'i-triangle':[
  [R`$\mathbb R^2$ ist offen und $f\in C^1$. Es gilt $$Df(x,y)=\begin{pmatrix}1&2y\\0&1\end{pmatrix},\quad\det Df=1\ne0.$$ Nach dem Umkehrsatz ist $f$ in jedem Punkt lokal $C^1$-umkehrbar.`],
  [R`Aus $(u,v)=(x+y^2,y)$ folgt $y=v$ und $x=u-v^2$. Jeder Punkt $(u,v)\in\mathbb R^2$ hat genau dieses Urbild. Also ist $f$ bijektiv mit $$f^{-1}(u,v)=(u-v^2,v).$$`,
   R`Das Urbild von $b=(3,1)$ ist $a=(3-1^2,1)=(2,1)$. Somit $$Df(a)=\begin{pmatrix}1&2\\0&1\end{pmatrix},\qquad\det Df(a)=1,$$ $$D(f^{-1})(3,1)=[Df(a)]^{-1}=\begin{pmatrix}1&-2\\0&1\end{pmatrix}.$$`]
 ],
 'i-double':[
  [R`$A$ ist offen und $f\in C^1(A,\mathbb R^2)$. $$Df(x,y)=\begin{pmatrix}e^x\cos(2y)&-2e^x\sin(2y)\\e^x\sin(2y)&2e^x\cos(2y)\end{pmatrix},$$ $$\begin{aligned}\det Df&=2e^{2x}(\cos^2(2y)+\sin^2(2y))\\&=2e^{2x}>0.\end{aligned}$$ Nach dem Umkehrsatz ist $f$ auf $A$ überall lokal $C^1$-umkehrbar.`],
  [R`Seien $(x,y),(s,t)\in A$ mit $f(x,y)=f(s,t)$. Wegen $$\begin{aligned}\|f(x,y)\|^2&=e^{2x}(\cos^2(2y)+\sin^2(2y))\\&=e^{2x}\end{aligned}$$ folgt $e^{2x}=e^{2s}$, also $x=s$. Einsetzen in beide Komponentengleichungen und Teilen durch $e^x>0$ ergibt $$\begin{aligned}e^x\cos(2y)&=e^x\cos(2t)\\\Longrightarrow\quad\cos(2y)&=\cos(2t),\end{aligned}$$ $$\begin{aligned}e^x\sin(2y)&=e^x\sin(2t)\\\Longrightarrow\quad\sin(2y)&=\sin(2t).\end{aligned}$$ Beide Winkel $2y,2t$ liegen in $(0,2\pi)$; dort bestimmt das Sinus-Kosinus-Paar den Winkel eindeutig. Also $2y=2t$, somit $y=t$. Daher ist $f$ injektiv.`,
   R`Der Radius $e^x$ durchläuft $(0,\infty)$, der Winkel $2y$ durchläuft $(0,2\pi)$. Somit $$\boxed{f(A)=\mathbb R^2\setminus\{(u,0):u\ge0\}.}$$ Jeder Punkt dieser Menge mit Radius $\rho>0$ und Winkel $\theta\in(0,2\pi)$ hat das Urbild $(\ln\rho,\theta/2)\in A$.`],
  [R`Aus $f(x,y)=(0,2)$ folgt $$e^{2x}=0^2+2^2=4\quad\Longrightarrow\quad x=\ln2.$$ Damit $\cos(2y)=0$, $\sin(2y)=1$. Wegen $2y\in(0,2\pi)$ gilt $2y=\pi/2$, also $y=\pi/4$.`,
   R`$$\begin{gathered}M=Df(\ln2,\pi/4)=\begin{pmatrix}0&-4\\2&0\end{pmatrix},\\\det M=0\cdot0-(-4)\cdot2=8.\end{gathered}$$ Also $$\begin{aligned}D(f^{-1})(0,2)&=M^{-1}=\frac18\begin{pmatrix}0&4\\-2&0\end{pmatrix}\\&=\begin{pmatrix}0&1/2\\-1/4&0\end{pmatrix}.\end{aligned}$$`]
 ],
 'i-square-inverse':[[
  R`**Injektivität:** Für $(u,v)=f(x,y)$ gilt $$u^2+v^2=(x^2+y^2)^2,\qquad u=x^2-y^2.$$ Addition liefert $$2x^2=\sqrt{u^2+v^2}+u.$$ Wegen $x>0$ ist $x$ eindeutig bestimmt; dann ist auch $y=v/(2x)$ eindeutig. Also ist $f$ auf $A$ injektiv.`,
  R`$A$ ist offen, $f\in C^1$ und $$\begin{gathered}Df(x,y)=\begin{pmatrix}2x&-2y\\2y&2x\end{pmatrix},\\\det Df=4x^2+4y^2>0.\end{gathered}$$ Nach dem Umkehrsatz und der Injektivität ist $f^{-1}$ auf $f(A)$ von Klasse $C^1$.`,
  R`Für $f(x,y)=(3,4)$ gilt $$x^2+y^2=\sqrt{3^2+4^2}=5,\qquad x^2-y^2=3.$$ Also $2x^2=8$, wegen $x>0$ somit $x=2$ und $y=4/(2\cdot2)=1$. Daher $$\begin{gathered}M=Df(2,1)=\begin{pmatrix}4&-2\\2&4\end{pmatrix},\\\det M=16+4=20,\end{gathered}$$ $$D(f^{-1})(3,4)=M^{-1}=\frac1{20}\begin{pmatrix}4&2\\-2&4\end{pmatrix}.$$`
 ]],
 'p-exp':[[
  R`$F\in C^1(\mathbb R^2)$ und $$F(0,1)=0-3+e^0+2=0.$$ Die partiellen Ableitungen sind $$F_x=1+y^2e^{xy^2},\qquad F_y=-3+2xye^{xy^2}.$$ Wegen $F_y(0,1)=-3\ne0$ liefert der implizite Funktionensatz lokal eindeutig eine $C^1$-Lösung $y=g(x)$ mit $g(0)=1$.`,
  R`Aus $F(x,g(x))=0$ folgt $F_x+F_yg'=0$. Somit $$g'(0)=-\frac{F_x(0,1)}{F_y(0,1)}=-\frac{1+1}{-3}=\frac23.$$`
 ]],
 'p-ellipse':[
  [R`$F\in C^1(\mathbb R^2)$ und $F(1,2)=1+2+4-7=0$. Außerdem $$F_y=x+2y,\quad F_y(1,2)=1+4=5\ne0.$$ Nach dem impliziten Funktionensatz existiert lokal eindeutig eine $C^1$-Lösung $y=g(x)$ mit $g(1)=2$.`],
  [R`Es gilt $F_x=2x+y$, also $F_x(1,2)=4$. Aus $F_x+F_yg'=0$ folgt $$g'(1)=-\frac{F_x(1,2)}{F_y(1,2)}=-\frac45.$$`,
   R`Wegen $F_x(1,2)=4\ne0$ gibt es nach demselben Satz auch lokal eindeutig eine $C^1$-Lösung $x=h(y)$ mit $h(2)=1$. Aus $F_xh'+F_y=0$ folgt $$h'(2)=-\frac{F_y(1,2)}{F_x(1,2)}=-\frac54.$$`]
 ],
 'p-circle':[
  [R`$F\in C^1(\mathbb R^2)$ und $F(1,0)=1+0-1=0$. Es gilt $$F_x=2x,\quad F_y=2y,\quad F_x(1,0)=2\ne0.$$ Nach dem impliziten Funktionensatz existiert lokal eindeutig eine $C^1$-Lösung $x=h(y)$ mit $h(0)=1$. Ihre Ableitung ist $$h'(0)=-\frac{F_y(1,0)}{F_x(1,0)}=-\frac02=0.$$`],
  [R`$F_y(1,0)=0$, daher ist der implizite Funktionensatz für $y=g(x)$ nicht anwendbar. Hier existiert auch keine reelle Lösung auf einer offenen Umgebung von $x=1$: Jede solche Umgebung enthält $x>1$, und dann wäre $$g(x)^2=1-x^2<0,$$ ein Widerspruch.`]
 ],
 'p-system':[[
  R`Mit $F=(F_1,F_2)$ und $a=(1,1,0)$ gilt $F\in C^1(\mathbb R^3,\mathbb R^2)$ und $$F(a)=\binom{1+1+0-2}{1+2+0-3}=\binom00.$$`,
  R`Gesucht sind $(u,v)$, frei bleibt $t$. $$DF(u,v,t)=\begin{pmatrix}2u&1&1\\1&2&2t\end{pmatrix}.$$ Am Punkt $a$ sind die Blöcke $$\begin{gathered}A=D_{(u,v)}F(a)=\begin{pmatrix}2&1\\1&2\end{pmatrix},\\B=D_tF(a)=\binom10.\end{gathered}$$ Wegen $\det A=4-1=3\ne0$ existiert nach dem impliziten Funktionensatz lokal eindeutig eine $C^1$-Lösung $g$ mit $g(0)=(1,1)$.`,
  R`$$A^{-1}=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix},\qquad -B=\binom{-1}0.$$ Somit $$\begin{aligned}Dg(0)&=A^{-1}(-B)\\&=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\binom{-1}0\\&=\frac13\binom{-2}{1}=\binom{-2/3}{1/3}.\end{aligned}$$`
 ]],
 'p-sheet':[
  [R`$G,H\in C^1(\mathbb R^3)$, da $f\in C^1$. Für $a=(2,-1,1)$ gilt $$\begin{gathered}G(a)=-1+1^2=0,\\H(a)=2-3+1=0.\end{gathered}$$`,
   R`In der Reihenfolge $(x,y,u)$ gilt $$D(G,H)=\begin{pmatrix}f_x&f_y&2u\\u&9y^2&x+3u^2\end{pmatrix}.$$ Gesucht sind $(x,u)$, also $$A=D_{(x,u)}(G,H)(a)=\begin{pmatrix}f_x(2,-1)&2\\1&5\end{pmatrix}.$$ Hinreichend ist $$\begin{gathered}\det A=5f_x(2,-1)-2\ne0\\\iff f_x(2,-1)\ne\frac25.\end{gathered}$$ Dann liefert der implizite Funktionensatz lokal eindeutige $C^1$-Funktionen $x=g(y)$, $u=h(y)$ mit $g(-1)=2$, $h(-1)=1$.`],
  [R`Aus $Df(2,-1)=(1,-3)$ folgen $f_x(2,-1)=1$ und $f_y(2,-1)=-3$. Damit $$\begin{gathered}A=\begin{pmatrix}1&2\\1&5\end{pmatrix},\\B=D_y(G,H)(a)=\binom{-3}9,\end{gathered}$$ $$\begin{gathered}\det A=5-2=3,\\A^{-1}=\frac13\begin{pmatrix}5&-2\\-1&1\end{pmatrix}.\end{gathered}$$`,
   R`$$\begin{aligned}\binom{g'(-1)}{h'(-1)}&=A^{-1}(-B)\\&=\frac13\begin{pmatrix}5&-2\\-1&1\end{pmatrix}\binom3{-9}\\&=\frac13\binom{15+18}{-3-9}\\&=\frac13\binom{33}{-12}=\binom{11}{-4}.\end{aligned}$$ Also $g'(-1)=11$ und $h'(-1)=-4$.`]
 ],
 'p-exam':[
  [R`Für $a=(0,-1,\pi)$ gilt $$\begin{aligned}F_1(a)&=-e^0+2(-1)+\cos\pi+4\\&=-1-2-1+4=0,\\F_2(a)&=\pi\cdot0^2+5(-1)^3+\sin\pi+5\\&=0-5+0+5=0.\end{aligned}$$`,
   R`In der Reihenfolge $(x_1,x_2,y)$ gilt $$DF(x_1,x_2,y)=\begin{pmatrix}-e^{x_1}&2&-\sin y\\2\pi x_1&15x_2^2&\cos y\end{pmatrix}.$$ Einsetzen ergibt $$DF(0,-1,\pi)=\begin{pmatrix}-1&2&0\\0&15&-1\end{pmatrix}.$$`],
  [R`$F\in C^1(\mathbb R^3,\mathbb R^2)$ und $F(a)=0$. Für die gesuchten Variablen $(x_1,x_2)$ und die freie Variable $y$ gilt $$A=\begin{pmatrix}-1&2\\0&15\end{pmatrix},\qquad B=\binom0{-1}.$$ Wegen $\det A=(-1)\cdot15-2\cdot0=-15\ne0$ liefert der implizite Funktionensatz lokal eindeutig eine $C^1$-Lösung $g$ mit $g(\pi)=(0,-1)$.`,
   R`$$A^{-1}=-\frac1{15}\begin{pmatrix}15&-2\\0&-1\end{pmatrix},\qquad -B=\binom01.$$ Daher $$\begin{aligned}Dg(\pi)&=A^{-1}(-B)\\&=-\frac1{15}\begin{pmatrix}15&-2\\0&-1\end{pmatrix}\binom01\\&=-\frac1{15}\binom{-2}{-1}=\binom{2/15}{1/15}.\end{aligned}$$`]
 ],
 'p-multifree':[
  [R`Mit $F=(F_1,F_2)$ und $a=(1,1,0,0)$ gilt $F\in C^1(\mathbb R^4,\mathbb R^2)$ und $$F(a)=\binom{1+1+0-2}{1+2+0-3}=\binom00.$$`,
   R`Für die gesuchten Variablen $(u,v)$ ist $$\begin{aligned}A=D_{(u,v)}F(a)&=\begin{pmatrix}2u&1\\1&2\end{pmatrix}_{u=1}\\&=\begin{pmatrix}2&1\\1&2\end{pmatrix}.\end{aligned}$$ Wegen $\det A=4-1=3\ne0$ existiert nach dem impliziten Funktionensatz lokal eindeutig eine $C^1$-Lösung $(u,v)=g(s,t)$ mit $g(0,0)=(1,1)$.`],
  [R`Für die freien Variablen $(s,t)$ gilt $$B=D_{(s,t)}F(a)=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I_2,$$ $$A^{-1}=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}.$$ Somit $$\begin{aligned}Dg(0,0)&=A^{-1}(-B)\\&=\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}(-I_2)\\&=\begin{pmatrix}-2/3&1/3\\1/3&-2/3\end{pmatrix}.\end{aligned}$$ Die Zeilen gehören zu $(u,v)$, die Spalten zu $(s,t)$.`]
 ],
 'p-multifree-shift':[[
  R`Mit $F=(F_1,F_2)$ und $a=(1,1,2,2)$ gilt $F\in C^1(\mathbb R^4,\mathbb R^2)$ und $$F(a)=\binom{1+1^2-2}{1^2+1-2}=\binom00.$$`,
  R`Gesucht sind $(u,v)$, frei sind $(s,t)$. $$\begin{aligned}A=D_{(u,v)}F(a)&=\begin{pmatrix}1&2v\\2u&1\end{pmatrix}_{(u,v)=(1,1)}\\&=\begin{pmatrix}1&2\\2&1\end{pmatrix},\end{aligned}$$ $$B=D_{(s,t)}F(a)=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I_2.$$ Wegen $\det A=1-4=-3\ne0$ liefert der implizite Funktionensatz lokal eindeutig eine $C^1$-Lösung $g$ mit $g(2,2)=(1,1)$.`,
  R`$$A^{-1}=-\frac13\begin{pmatrix}1&-2\\-2&1\end{pmatrix}.$$ Da $-B=I_2$, folgt $$\begin{aligned}Dg(2,2)&=A^{-1}(-B)=-\frac13\begin{pmatrix}1&-2\\-2&1\end{pmatrix}I_2\\&=\begin{pmatrix}-1/3&2/3\\2/3&-1/3\end{pmatrix}.\end{aligned}$$ Die Zeilen gehören zu $(u,v)$, die Spalten zu $(s,t)$.`
 ]],
 't-logexp':[
  [
    "Verwende für den Logarithmus das Polynom $w-w^2/2$ mit $w=x+y^2$. Einsetzen und Ausmultiplizieren ergibt $$\\begin{aligned}&\\ (x+y^2)-\\frac12(x+y^2)^2\\\\&=x+y^2-\\frac{x^2}{2}-xy^2-\\frac{y^4}{2}.\\end{aligned}$$ Die letzten beiden Terme haben Grad 3 bzw. 4. Für $e^{xy}$ genügt das Polynom $1+xy$, denn $(xy)^2$ hat schon Grad 4. Addieren der Terme bis Grad 2 liefert $$\\boxed{T_2(x,y)=1+x-\\frac{x^2}{2}+xy+y^2}.$$",
    "Da $f\\in C^{3}$ in einer offenen Umgebung von $0$ ist, gilt\n$$\\begin{gathered}\nf(x,y)=T_2(x,y)+R_2(x,y),\\\\\n|R_2(x,y)|\\le C\\|(x,y)\\|^{3}.\n\\end{gathered}$$\nDie Abschätzung gilt nahe $0$ für eine feste Konstante $C>0$."
  ],
  [
    "Aus dem Polynom: $f(0)=1$, $\\nabla f(0)=(1,0)^T$. Mit $h=(x,y)^T$ lautet die Matrixform $$\\begin{aligned}f(x,y)&=1+(1,0)h\\\\&\\quad+\\frac12h^T\\begin{pmatrix}-1&1\\\\1&2\\end{pmatrix}h+R_2(x,y).\\end{aligned}$$ Wie in Teil a gilt nahe 0 $|R_2(x,y)|\\le C\\|(x,y)\\|^3$ für eine feste Konstante $C>0$, weil $f\\in C^3$ nahe 0 ist."
  ],
  [
    "Vergleich mit $\\frac12H_{11}x^2+H_{12}xy+\\frac12H_{22}y^2$ ergibt $$H_{11}=-1,\\quad H_{12}=H_{21}=1,\\quad H_{22}=2.$$ Also $$\\boxed{H_f(0,0)=\\begin{pmatrix}-1&1\\\\1&2\\end{pmatrix}.}$$"
  ],
  [
    "Setze $q=1+x+y^2$. Dann $$f_x=\\frac1q+ye^{xy},\\qquad f_y=\\frac{2y}q+xe^{xy}.$$ Weiter gilt $$\\begin{aligned}f_{xx}&=-\\frac1{q^2}+y^2e^{xy},\\\\f_{xy}=f_{yx}&=-\\frac{2y}{q^2}+(1+xy)e^{xy},\\\\f_{yy}&=\\frac2q-\\frac{4y^2}{q^2}+x^2e^{xy}.\\end{aligned}$$ Bei $(0,0)$ ist $q=1$, also $$\\begin{gathered}f_{xx}(0,0)=-1,\\quad f_{xy}(0,0)=1,\\\\f_{yy}(0,0)=2.\\end{gathered}$$ Das bestätigt die Hesse-Matrix."
  ]
],
 't-product':[
  [
    "Bis Gesamtgrad 2 brauchen wir die Taylorpolynome der beiden Faktoren: $$\\begin{aligned}T_2(e^{yz};0)&=1+yz,\\\\T_2(\\cos x+\\sin z;0)&=1+z-\\frac{x^2}{2}.\\end{aligned}$$ Denn $(yz)^2$ hat bereits Grad 4; die nächsten Sinus- und Kosinusterme haben Grad 3 bzw. 4.",
    "Multiplizieren ergibt $$\\begin{aligned}&\\ (1+yz)(1+z-x^2/2)\\\\&=1+z-x^2/2+yz+yz^2-x^2yz/2.\\end{aligned}$$ Die letzten beiden Terme haben Grad 3 bzw. 4 und gehören zum Rest. Daher $$\\boxed{T_2(x,y,z)=1+z-\\frac{x^2}{2}+yz}.$$",
    "Da $f\\in C^{3}$ in einer offenen Umgebung von $0$ ist, gilt\n$$\\begin{gathered}\nf(x,y,z)=T_2(x,y,z)+R_2(x,y,z),\\\\\n|R_2(x,y,z)|\\le C\\|(x,y,z)\\|^{3}.\n\\end{gathered}$$\nDie Abschätzung gilt nahe $0$ für eine feste Konstante $C>0$."
  ]
],
 't-log-shift':[
  [
    "Setze $u=x$, $v=y-1$. Dann $$\\begin{aligned}f(x,y)&=\\ln(2+u+v)\\\\&=\\ln2+\\ln\\!\\left(1+\\frac{u+v}{2}\\right).\\end{aligned}$$ Setze $w=(u+v)/2$ in das Logarithmuspolynom $w-w^2/2+w^3/3$ ein. Damit $$T_3=\\ln2+\\frac{u+v}{2}-\\frac{(u+v)^2}{8}+\\frac{(u+v)^3}{24}.$$",
    "Zurücksetzen ergibt $$\\boxed{\\begin{aligned}T_3(x,y)&=\\ln2+\\frac{x+y-1}{2}\\\\&\\quad-\\frac{(x+y-1)^2}{8}\\\\&\\quad+\\frac{(x+y-1)^3}{24}.\\end{aligned}}$$",
    "Da $f\\in C^{4}$ in einer offenen Umgebung von $(0,1)$ ist, gilt\n$$\\begin{gathered}\nf(x,y)=T_3(x,y)+R_3(x,y),\\\\\n|R_3(x,y)|\\le C\\|(x,y)-(0,1)\\|^{4}.\n\\end{gathered}$$\nDie Abschätzung gilt nahe $(0,1)$ für eine feste Konstante $C>0$."
  ]
],
 't-shift':[
  [
    "Setze $u=x-1$, $v=y$. Dann $$\\ln(2+u+v^2)=\\ln2+\\ln\\!\\left(1+\\frac{u+v^2}{2}\\right).$$ Das Logarithmuspolynom liefert nach Einsetzen $$\\begin{aligned}&\\ \\ln2+\\frac{u+v^2}{2}-\\frac{(u+v^2)^2}{8}\\\\&=\\ln2+\\frac u2+\\frac{v^2}{2}-\\frac{u^2}{8}-\\frac{uv^2}{4}-\\frac{v^4}{8}.\\end{aligned}$$ Die letzten beiden Terme haben Grad 3 bzw. 4. Für $e^{uv}$ genügt das Polynom $1+uv$.",
    "Addieren der Terme bis Grad 2 und Zurücksetzen liefert $$\\boxed{\\begin{aligned}T_2(x,y)&=1+\\ln2+\\frac{x-1}{2}-\\frac{(x-1)^2}{8}\\\\&\\quad+(x-1)y+\\frac{y^2}{2}.\\end{aligned}}$$",
    "Da $f\\in C^{3}$ in einer offenen Umgebung von $(1,0)$ ist, gilt\n$$\\begin{gathered}\nf(x,y)=T_2(x,y)+R_2(x,y),\\\\\n|R_2(x,y)|\\le C\\|(x,y)-(1,0)\\|^{3}.\n\\end{gathered}$$\nDie Abschätzung gilt nahe $(1,0)$ für eine feste Konstante $C>0$."
  ],
  [
    "Koeffizientenvergleich in $(u,v)$ liefert $$\\nabla f(a)=\\binom{1/2}0,\\qquad H_f(a)=\\begin{pmatrix}-1/4&1\\\\1&1\\end{pmatrix}.$$ Die Diagonaleinträge sind $2(-1/8)=-1/4$ und $2(1/2)=1$, der gemischte Eintrag ist 1. Mit $h=(u,v)^T$ gilt $$\\begin{aligned}f(a+h)&=1+\\ln2+(1/2,0)h\\\\&\\quad+\\frac12h^TH_f(a)h+R_2(a+h).\\end{aligned}$$ Wie in Teil a gilt $|R_2(a+h)|\\le C\\|h\\|^3$ für kleine $h$ und eine feste Konstante $C>0$, weil $f\\in C^3$ nahe $a$ ist."
  ]
],
 't-exp-shift':[
  [
    "Setze $u=x-1$, $v=y+1$. Dann $$xy=(1+u)(-1+v)=-1-u+v+uv.$$ Für $e^{x+y}=e^{u+v}$ verwenden wir das Polynom $$1+u+v+\\frac12(u^2+2uv+v^2).$$ Addieren von $xy$ ergibt $$T_2=2v+\\frac{u^2}{2}+2uv+\\frac{v^2}{2}.$$",
    "Somit $$\\boxed{\\begin{aligned}T_2(x,y)&=2(y+1)+\\frac{(x-1)^2}{2}\\\\&\\quad+2(x-1)(y+1)+\\frac{(y+1)^2}{2},\\end{aligned}}$$ $$\\nabla f(a)=\\binom02,\\qquad H_f(a)=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}.$$",
    "Da $f\\in C^{3}$ in einer offenen Umgebung von $(1,-1)$ ist, gilt\n$$\\begin{gathered}\nf(x,y)=T_2(x,y)+R_2(x,y),\\\\\n|R_2(x,y)|\\le C\\|(x,y)-(1,-1)\\|^{3}.\n\\end{gathered}$$\nDie Abschätzung gilt nahe $(1,-1)$ für eine feste Konstante $C>0$."
  ]
],
 't-fraction':[
  [
    "Für den Zähler verwenden wir das Polynom $x+y+(x+y)^2/2$, für den Faktor $(1-z)^{-1}$ das Polynom $1+z$. Dessen Term $z^2$ erzeugt mit dem Zähler erst Terme ab Grad 3. Multiplizieren ergibt $$\\begin{aligned}&\\ \\left(x+y+\\frac{(x+y)^2}{2}\\right)(1+z)\\\\&=x+y+\\frac{(x+y)^2}{2}\\\\&\\quad+(x+y)z+\\frac{(x+y)^2z}{2}.\\end{aligned}$$ Der letzte Term hat Grad 3 und gehört zum Rest.",
    "Aus $\\sin(xz)$ bleibt bis Grad 2 der Term $xz$, aus $y^2e^z$ der Term $y^2$. Addieren ergibt $$\\boxed{T_2=x+y+\\frac{x^2}{2}+xy+\\frac32y^2+2xz+yz}.$$",
    "Da $f\\in C^{3}$ in einer offenen Umgebung von $0$ ist, gilt\n$$\\begin{gathered}\nf(x,y,z)=T_2(x,y,z)+R_2(x,y,z),\\\\\n|R_2(x,y,z)|\\le C\\|(x,y,z)\\|^{3}.\n\\end{gathered}$$\nDie Abschätzung gilt nahe $0$ für eine feste Konstante $C>0$."
  ],
  [
    "Aus dem Polynom folgen $f(0)=0$ und $\\nabla f(0)=(1,1,0)^T$. Mit $h=(x,y,z)^T$ gilt $$\\begin{aligned}f(x,y,z)&=(1,1,0)h\\\\&\\quad+\\frac12h^T\\begin{pmatrix}1&1&2\\\\1&3&1\\\\2&1&0\\end{pmatrix}h\\\\&\\quad+R_2(x,y,z).\\end{aligned}$$ Wie in Teil a gilt nahe 0 $|R_2(x,y,z)|\\le C\\|(x,y,z)\\|^3$ für eine feste Konstante $C>0$, weil $f\\in C^3$ nahe 0 ist."
  ],
  [
    "Die reinen quadratischen Koeffizienten werden verdoppelt, die gemischten direkt übernommen: $$\\begin{gathered}H_{11}=1,\\quad H_{22}=3,\\quad H_{33}=0,\\\\H_{12}=1,\\quad H_{13}=2,\\quad H_{23}=1.\\end{gathered}$$ Mit $H_{ij}=H_{ji}$ folgt $$\\boxed{H_f(0)=\\begin{pmatrix}1&1&2\\\\1&3&1\\\\2&1&0\\end{pmatrix}.}$$"
  ],
  [
    "Setze $A=e^{x+y}$ und $d=1-z$. Die ersten Ableitungen sind $$\\begin{aligned}f_x&=\\frac Ad+z\\cos(xz),\\\\f_y&=\\frac Ad+2ye^z,\\\\f_z&=\\frac{A-1}{d^2}+x\\cos(xz)+y^2e^z.\\end{aligned}$$ Weiter gilt $$\\begin{aligned}f_{xx}&=\\frac Ad-z^2\\sin(xz),\\\\f_{xy}&=\\frac Ad,\\\\f_{xz}&=\\frac A{d^2}+\\cos(xz)-xz\\sin(xz),\\\\f_{yy}&=\\frac Ad+2e^z,\\\\f_{yz}&=\\frac A{d^2}+2ye^z,\\\\f_{zz}&=\\frac{2(A-1)}{d^3}-x^2\\sin(xz)+y^2e^z.\\end{aligned}$$ Bei 0 ist $A=d=1$. Somit $$\\begin{gathered}f_{xx}(0)=1,\\quad f_{yy}(0)=3,\\quad f_{zz}(0)=0,\\\\f_{xy}(0)=1,\\quad f_{xz}(0)=2,\\quad f_{yz}(0)=1.\\end{gathered}$$ Wegen $f\\in C^2$ stimmen die vertauschten gemischten Ableitungen überein. Das bestätigt die Hesse-Matrix."
  ]
],
 't-read':[
  [
    "Der Term $x^3$ hat Grad 3. Daher $$\\begin{gathered}T_2(x,y)=3+2x-y+4x^2-3xy+5y^2,\\\\f(x,y)=T_2(x,y)+R_2(x,y),\\\\R_2(x,y)=x^3.\\end{gathered}$$ Hier kennen wir den Rest exakt: $$|R_2(x,y)|=|x|^3\\le\\|(x,y)\\|^3.$$ Damit genügt sogar $C=1$.",
    "Koeffizientenvergleich liefert $$\\begin{gathered}\\nabla f(0)=\\binom2{-1},\\\\H_f(0)=\\begin{pmatrix}2\\cdot4&-3\\\\-3&2\\cdot5\\end{pmatrix}=\\begin{pmatrix}8&-3\\\\-3&10\\end{pmatrix}.\\end{gathered}$$ Direkte Kontrolle: $$\\begin{gathered}f_x=2+8x-3y+3x^2\\\\\\Longrightarrow\\quad f_{xy}(0)=-3.\\end{gathered}$$"
  ]
],
 't-read-shift':[
  [
    "Setze $u=x-1$, $v=y-2$. Einsetzen von $w=u^2+2v$ in das Exponentialpolynom $1+w+w^2/2$ ergibt $$\\begin{aligned}&\\ 1+(u^2+2v)+\\frac12(u^2+2v)^2\\\\&=1+u^2+2v+\\frac{u^4}{2}+2u^2v+2v^2.\\end{aligned}$$ Die Terme $u^4/2$ und $2u^2v$ haben Grad 4 bzw. 3 und gehören zum Rest. Mit dem zusätzlichen Term $uv$ folgt $$\\boxed{\\begin{aligned}T_2(x,y)&=1+2(y-2)+(x-1)^2\\\\&\\quad+(x-1)(y-2)+2(y-2)^2.\\end{aligned}}$$",
    "Aus den Koeffizienten in $(u,v)$ erhält man $$\\nabla f(a)=\\binom02,\\qquad H_f(a)=\\begin{pmatrix}2&1\\\\1&4\\end{pmatrix}.$$",
    "Da $f\\in C^{3}$ in einer offenen Umgebung von $(1,2)$ ist, gilt\n$$\\begin{gathered}\nf(x,y)=T_2(x,y)+R_2(x,y),\\\\\n|R_2(x,y)|\\le C\\|(x,y)-(1,2)\\|^{3}.\n\\end{gathered}$$\nDie Abschätzung gilt nahe $(1,2)$ für eine feste Konstante $C>0$."
  ]
],
};
