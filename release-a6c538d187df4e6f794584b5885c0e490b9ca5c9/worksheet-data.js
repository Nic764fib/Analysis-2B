// Transkription der bereitgestellten Übungsblätter und geprüfte Lösungen.
export const worksheets = {
  "T.1.1": {
    "id": "sheet-T.1.1",
    "number": "T.1.1",
    "sheet": 1,
    "source": "Übungsblatt 1 · T.1.1",
    "intro": "Sei $(f_n)_{n\\in\\mathbb N}$ eine Folge von Funktionen $f_n:D\\to\\mathbb K$. Definieren Sie die folgenden Begriffe:",
    "parts": [
      {
        "label": "a",
        "prompt": "punktweise Konvergenz und punktweiser Grenzwert von $(f_n)_{n\\in\\mathbb N}$ auf $D$;",
        "solution": "Seien $f_n,f:D\\to\\mathbb K$.\n\nDie Folge $(f_n)$ konvergiert **punktweise** auf $D$ gegen $f$, wenn\n\n$$\n\\forall x\\in D\\ \\forall\\varepsilon>0\\ \\exists N=N(x,\\varepsilon)\\ \\forall n\\ge N:\\quad |f_n(x)-f(x)|<\\varepsilon.\n$$\n\nDie Funktion $f(x)=\\lim_{n\\to\\infty}f_n(x)$ heißt punktweiser Grenzwert.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "gleichmäßige Konvergenz und gleichmäßiger Grenzwert von $(f_n)_{n\\in\\mathbb N}$ auf $D$.",
        "solution": "Die Folge $(f_n)$ konvergiert **gleichmäßig** auf $D$ gegen $f$, wenn\n\n$$\n\\forall\\varepsilon>0\\ \\exists N=N(\\varepsilon)\\ \\forall n\\ge N\\ \\forall x\\in D:\\quad |f_n(x)-f(x)|<\\varepsilon.\n$$\n\nDie Funktion $f$ heißt gleichmäßiger Grenzwert; $N$ ist unabhängig von $x$.",
        "sketch": null
      }
    ]
  },
  "T.1.2": {
    "id": "sheet-T.1.2",
    "number": "T.1.2",
    "sheet": 1,
    "source": "Übungsblatt 1 · T.1.2",
    "intro": "Sei $D\\ne\\varnothing$ eine beliebige Menge und seien $f_n,f:D\\to\\mathbb K$. Formulieren Sie die folgenden Kriterien für die gleichmäßige Konvergenz:",
    "parts": [
      {
        "label": "a",
        "prompt": "Folgencharakterisierung;",
        "solution": "Sei $D\\ne\\varnothing$ und $\\mathbb K\\in\\{\\mathbb R,\\mathbb C\\}$.\n\n**Folgencharakterisierung.**\n\n$$\nf_n\\to f\\text{ gleichmäßig auf }D\n\\quad\\Longleftrightarrow\\quad\nf_n(x_n)-f(x_n)\\to0\\text{ für jede Folge }(x_n)\\subset D.\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Nullfolgenkriterium;",
        "solution": "**Nullfolgenkriterium.**\n\nGleichmäßige Konvergenz gegen $f$ ist äquivalent zur Existenz einer reellen Nullfolge $(a_n)$ mit $a_n\\ge0$, sodass für alle hinreichend großen $n$\n\n$$\n|f_n(x)-f(x)|\\le a_n\\qquad\\forall x\\in D.\n$$\n\nÄquivalent ist $\\sup_{x\\in D}|f_n(x)-f(x)|\\to0$.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Cauchy-Kriterium.",
        "solution": "**Cauchy-Kriterium.**\n\nDie Folge $(f_n)$ besitzt genau dann einen gleichmäßigen Grenzwert auf $D$, wenn\n\n$$\n\\forall\\varepsilon>0\\ \\exists N\\ \\forall n,m\\ge N\\ \\forall x\\in D:\\quad |f_n(x)-f_m(x)|<\\varepsilon.\n$$\n\nIst bereits $f_n\\to f$ punktweise bekannt, so ist dieser gleichmäßige Grenzwert $f$.",
        "sketch": null
      }
    ]
  },
  "B.1.1": {
    "id": "sheet-B.1.1",
    "number": "B.1.1",
    "sheet": 1,
    "source": "Übungsblatt 1 · B.1.1",
    "intro": "Es seien $(X,\\mathcal T_X)$, $(Y,\\mathcal T_Y)$ und $(Z,\\mathcal T_Z)$ topologische Räume, sowie $f:X\\to Y$ und $g:Y\\to Z$ zwei Funktionen. Zeigen Sie: Ist $f$ stetig im Punkt $x_0\\in X$ und $g$ stetig im Punkt $f(x_0)\\in Y$, dann ist auch ihre Komposition\n\n$$\ng\\circ f:X\\to Z,\\qquad(g\\circ f)(x)=g(f(x))\n$$\n\nstetig im Punkt $x_0\\in X$.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Sei $W$ eine offene Umgebung von $g(f(x_0))$. Wegen der Stetigkeit von $g$ in $f(x_0)$ gibt es eine offene Umgebung $V$ von $f(x_0)$ mit $g(V)\\subset W$. Wegen der Stetigkeit von $f$ in $x_0$ gibt es eine offene Umgebung $U$ von $x_0$ mit $f(U)\\subset V$. Damit\n\n$$\n(g\\circ f)(U)\\subset g(V)\\subset W.\n$$\n\nAlso ist $g\\circ f$ in $x_0$ stetig.",
        "sketch": null
      }
    ]
  },
  "B.1.2": {
    "id": "sheet-B.1.2",
    "number": "B.1.2",
    "sheet": 1,
    "source": "Übungsblatt 1 · B.1.2",
    "intro": "Untersuchen Sie die folgenden Funktionen auf Stetigkeit und gleichmäßige Stetigkeit auf den gegebenen Definitionsbereichen:",
    "parts": [
      {
        "label": "a",
        "prompt": "$f_1(x):=\\sqrt x$, definiert für $x\\in[0,\\infty)$.",
        "solution": "Für $x,y\\ge0$ gilt\n\n$$\n|\\sqrt{x}-\\sqrt{y}|^2\\le|x-y|.\n$$\n\nFür $x\\ge y$ folgt dies aus $x+y-2\\sqrt{xy}\\le x-y$, da $y\\le\\sqrt{xy}$; der andere Fall ist symmetrisch. Mit $\\delta=\\varepsilon^2$ folgt gleichmäßige Stetigkeit von $f_1(x)=\\sqrt x$ auf $[0,\\infty)$, insbesondere Stetigkeit.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "$f_2(x):=\\frac1{x^2}$, definiert für $x\\in(0,1]$.",
        "solution": "Die Funktion $f_2(x)=x^{-2}$ ist auf $(0,1]$ stetig. Für $x_n=1/n$ und $y_n=1/(n+1)$ gilt jedoch\n\n$$\n|x_n-y_n|=\\frac1{n(n+1)}\\to0,\\qquad |f_2(x_n)-f_2(y_n)|=(n+1)^2-n^2=2n+1.\n$$\n\nDaher ist $f_2$ nicht gleichmäßig stetig.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "$f_3(x):=x^2$, definiert für $x\\in[-1,1]$.",
        "solution": "Für $x,y\\in[-1,1]$ gilt\n\n$$\n|f_3(x)-f_3(y)|=|x^2-y^2|=|x-y||x+y|\\le2|x-y|.\n$$\n\nAlso ist $f_3$ Lipschitz-stetig und damit gleichmäßig stetig und stetig.",
        "sketch": null
      },
      {
        "label": "d",
        "prompt": "$f_4(x):=\\frac1{1+x^2}$, definiert für $x\\in\\mathbb R$.",
        "solution": "Die Funktion $f_4(x)=(1+x^2)^{-1}$ ist auf $\\mathbb R$ differenzierbar, und\n\n$$\n|f_4'(x)|=\\frac{2|x|}{(1+x^2)^2}\\le\\frac1{1+x^2}\\le1.\n$$\n\nNach dem Mittelwertsatz ist $|f_4(x)-f_4(y)|\\le|x-y|$. Somit ist $f_4$ gleichmäßig stetig und stetig auf $\\mathbb R$.",
        "sketch": null
      },
      {
        "label": "e",
        "prompt": "$$\nf_5(x):=\\begin{cases}\\sin\\left(\\frac1x\\right)&\\text{wenn }x\\ne0\\\\0&\\text{wenn }x=0.\\end{cases}\n$$",
        "solution": "Für $x\\ne0$ ist $f_5(x)=\\sin(1/x)$ stetig. Die Folge\n\n$$\nx_n=\\frac1{\\pi/2+2\\pi n}\\to0\n$$\n\nerfüllt $f_5(x_n)=1\\not\\to0=f_5(0)$. Daher ist $f_5$ im Ursprung unstetig und auf $\\mathbb R$ nicht gleichmäßig stetig.",
        "sketch": null
      }
    ]
  },
  "B.1.3": {
    "id": "sheet-B.1.3",
    "number": "B.1.3",
    "sheet": 1,
    "source": "Übungsblatt 1 · B.1.3",
    "intro": "Untersuchen Sie die folgenden Funktionenfolgen $(f_n)_{n\\in\\mathbb N}$ auf punktweise bzw. gleichmäßige Konvergenz für $n\\to\\infty$. Geben Sie im Fall der Konvergenz jeweils an, gegen welche Funktion $f$ die Folge $(f_n)_{n\\in\\mathbb N}$ konvergiert.",
    "parts": [
      {
        "label": "a",
        "prompt": "$$\nf_n(x)=\\frac{\\sin(nx)}{n^2},\\qquad x\\in\\mathbb R,\n$$",
        "solution": "Für $f_n(x)=\\sin(nx)/n^2$ gilt\n\n$$\n\\sup_{x\\in\\mathbb R}|f_n(x)|\\le\\frac1{n^2}\\to0.\n$$\n\nAlso konvergiert $f_n$ auf $\\mathbb R$ gleichmäßig und punktweise gegen $f=0$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "$$\nf_n(x)=\\frac{e^{-x^2}}{3x^2+\\sqrt n},\\qquad x\\in\\mathbb R.\n$$",
        "solution": "Für $f_n(x)=e^{-x^2}/(3x^2+\\sqrt n)$ gilt\n\n$$\n0\\le f_n(x)\\le\\frac1{\\sqrt n}\\to0.\n$$\n\nAlso konvergiert $f_n$ auf $\\mathbb R$ gleichmäßig und punktweise gegen $f=0$.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "$$\nf_n(x)=\\frac{|x^3+2nx-n|}{n^2},\\qquad x\\in\\left[0,\\frac32\\right],\n$$",
        "solution": "Für $x\\in[0,3/2]$ ist $|2x-1|\\le2$ und $|x|^3\\le27/8$. Folglich\n\n$$\n0\\le\\frac{|x^3+2nx-n|}{n^2}\\le\\frac{27}{8n^2}+\\frac2n\\to0.\n$$\n\nDie Konvergenz gegen $f=0$ ist auf $[0,3/2]$ gleichmäßig und damit punktweise.",
        "sketch": null
      },
      {
        "label": "d",
        "prompt": "$$\nf_n(x)=\\sqrt{\\frac1{\\sqrt n}+x^2},\\qquad x\\in\\mathbb R.\n$$",
        "solution": "Für jedes $x\\in\\mathbb R$ gilt $\\sqrt{x^2+n^{-1/2}}\\to|x|$. Außerdem\n\n$$\n0\\le\\sqrt{x^2+n^{-1/2}}-|x|\\le\\sqrt{n^{-1/2}}=n^{-1/4}.\n$$\n\nSomit ist die Konvergenz gegen $f(x)=|x|$ auf ganz $\\mathbb R$ gleichmäßig.",
        "sketch": null
      }
    ]
  },
  "B.1.4": {
    "id": "sheet-B.1.4",
    "number": "B.1.4",
    "sheet": 1,
    "source": "Übungsblatt 1 · B.1.4",
    "intro": "Sei $f:[a,b]\\to\\mathbb R$ stetig. Für $\\delta>0$ definieren wir den Stetigkeitsmodul\n\n$$\n\\omega_f:(0,\\infty)\\to\\mathbb R_{\\ge0},\\qquad\n\\omega_f(\\delta):=\\sup\\{|f(x)-f(y)|:x,y\\in[a,b],|x-y|<\\delta\\}.\n$$\n\nZeigen Sie, dass $f$ genau dann gleichmäßig stetig ist, wenn\n\n$$\n\\lim_{\\delta\\downarrow0}\\omega_f(\\delta)=0\n$$\n\ngilt.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Da $f$ stetig auf dem kompakten Intervall $[a,b]$ ist, ist $f$ beschränkt und $\\omega_f(\\delta)$ endlich.\n\nSei zunächst $f$ gleichmäßig stetig. Zu $\\varepsilon>0$ existiert $\\eta>0$, sodass $|x-y|<\\eta$ die Ungleichung $|f(x)-f(y)|<\\varepsilon/2$ impliziert. Für $0<\\delta\\le\\eta$ folgt\n\n$$\n0\\le\\omega_f(\\delta)\\le\\frac\\varepsilon2<\\varepsilon.\n$$\n\nAlso ist $\\lim_{\\delta\\downarrow0}\\omega_f(\\delta)=0$.\n\nGelte umgekehrt dieser Grenzwert. Zu $\\varepsilon>0$ wähle $\\delta>0$ mit $\\omega_f(\\delta)<\\varepsilon$. Dann gilt für alle $x,y\\in[a,b]$ mit $|x-y|<\\delta$\n\n$$\n|f(x)-f(y)|\\le\\omega_f(\\delta)<\\varepsilon.\n$$\n\nDies ist die gleichmäßige Stetigkeit von $f$.",
        "sketch": null
      }
    ]
  },
  "B.1.5": {
    "id": "sheet-B.1.5",
    "number": "B.1.5",
    "sheet": 1,
    "source": "Übungsblatt 1 · B.1.5",
    "intro": "Erinnern Sie sich, dass eine Folge reeller Zahlen $(x_n)_{n\\in\\mathbb N}$ genau dann eine Cauchy-Folge ist, wenn für jedes $\\varepsilon>0$, eine natürliche Zahl $N$ existiert so, dass\n\n$$\n|x_n-x_m|<\\varepsilon,\\quad\\text{für alle }n,m\\ge N.\n$$\n\nBeweisen Sie die folgenden Eigenschaften:",
    "parts": [
      {
        "label": "a",
        "prompt": "Es sei $f:\\mathbb R\\supset E\\to\\mathbb R$ eine gleichmäßig stetige Funktion auf $E$ und $(x_n)_{n\\in\\mathbb N}$ eine Cauchy-Folge in $E$. Zeigen Sie, dass damit auch die Folge $(f(x_n))_{n\\in\\mathbb N}$ eine Cauchy-Folge in $\\mathbb R$ ist.",
        "solution": "Sei $\\varepsilon>0$. Wegen der gleichmäßigen Stetigkeit existiert $\\delta>0$ mit\n\n$$\nx,y\\in E,\\quad |x-y|<\\delta\\ \\Longrightarrow\\ |f(x)-f(y)|<\\varepsilon.\n$$\n\nDa $(x_n)$ Cauchy ist, gibt es $N$ mit $|x_n-x_m|<\\delta$ für alle $n,m\\ge N$. Folglich ist $|f(x_n)-f(x_m)|<\\varepsilon$ für alle $n,m\\ge N$; also ist $(f(x_n))$ Cauchy.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Zeigen Sie, dass die Aussage in Teil (a) im Allgemeinen nicht für (punktweise) stetige Funktionen gilt. Geben Sie dazu ein Gegenbeispiel an.",
        "solution": "Auf $E=(0,1]$ ist $f(x)=1/x$ stetig. Die Folge $x_n=1/n$ ist Cauchy, aber $f(x_n)=n$ ist keine Cauchy-Folge.",
        "sketch": null
      }
    ]
  },
  "T.2.1": {
    "id": "sheet-T.2.1",
    "number": "T.2.1",
    "sheet": 2,
    "source": "Übungsblatt 2 · T.2.1",
    "intro": "Geben Sie die Definition eines vollständigen metrischen Raumes an.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Ein metrischer Raum $(X,d)$ heißt **vollständig**, wenn jede Cauchy-Folge in $X$ gegen einen Punkt in $X$ konvergiert. Dabei heißt $(x_n)$ Cauchy, wenn\n\n$$\n\\forall\\varepsilon>0\\ \\exists N\\ \\forall n,m\\ge N:\\quad d(x_n,x_m)<\\varepsilon.\n$$",
        "sketch": null
      }
    ]
  },
  "T.2.2": {
    "id": "sheet-T.2.2",
    "number": "T.2.2",
    "sheet": 2,
    "source": "Übungsblatt 2 · T.2.2",
    "intro": "",
    "parts": [
      {
        "label": "a",
        "prompt": "Formulieren Sie den Satz über die Vertauschung von Integration und Grenzübergang.",
        "solution": "Seien $f_n:[a,b]\\to\\mathbb R$ Riemann-integrierbar und $f_n\\to f$ gleichmäßig auf $[a,b]$. Dann ist $f$ Riemann-integrierbar, und\n\n$$\n\\lim_{n\\to\\infty}\\int_a^b f_n(x)\\,dx=\\int_a^b f(x)\\,dx.\n$$\n\nInsbesondere gilt die Abschätzung\n\n$$\n\\left|\\int_a^b f_n(x)\\,dx-\\int_a^b f(x)\\,dx\\right|\\le(b-a)\\|f_n-f\\|_\\infty\\to0.\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Formulieren Sie den Satz über die gliedweise Differentiation.",
        "solution": "Seien $f_n:[a,b]\\to\\mathbb R$ stetig und auf $(a,b)$ differenzierbar. Die Ableitungen $f_n'$ konvergieren gleichmäßig auf $(a,b)$ gegen $g$, und für ein $x_0\\in[a,b]$ konvergiert $(f_n(x_0))$. Dann konvergiert $(f_n)$ gleichmäßig auf $[a,b]$ gegen eine Funktion $f$, die auf $(a,b)$ differenzierbar ist, mit\n\n$$\nf'(x)=g(x)=\\lim_{n\\to\\infty}f_n'(x)\\qquad(x\\in(a,b)).\n$$\n\nFür eine Funktionenreihe erhält man durch Anwendung auf die Partialsummen: Konvergiert $\\sum u_n(x_0)$ an einer Stelle und $\\sum u_n'$ gleichmäßig, so darf gliedweise differenziert werden,\n\n$$\n\\left(\\sum_{n=1}^{\\infty}u_n\\right)'=\\sum_{n=1}^{\\infty}u_n'.\n$$",
        "sketch": null
      }
    ]
  },
  "B.2.1": {
    "id": "sheet-B.2.1",
    "number": "B.2.1",
    "sheet": 2,
    "source": "Übungsblatt 2 · B.2.1",
    "intro": "Bestimmen Sie, welche der folgenden normierten Räume vollständig sind:",
    "parts": [
      {
        "label": "a",
        "prompt": "$(C([0,1]),\\|\\cdot\\|_\\infty)$, wobei\n\n$$\n\\|f\\|_\\infty=\\sup_{x\\in[0,1]}|f(x)|.\n$$",
        "solution": "Sei $(f_n)$ eine Cauchy-Folge in $(C([0,1]),\\|\\cdot\\|_\\infty)$. Für jedes $x$ ist $(f_n(x))$ eine reelle Cauchy-Folge. Definiere $f(x)=\\lim_{n\\to\\infty}f_n(x)$. Zu $\\varepsilon>0$ gibt es $N$ mit\n\n$$\n|f_n(x)-f_m(x)|<\\frac\\varepsilon2\\qquad(n,m\\ge N,\\ x\\in[0,1]).\n$$\n\nFür $m\\to\\infty$ folgt $|f_n(x)-f(x)|\\le\\varepsilon/2$, also $\\|f_n-f\\|_\\infty\\le\\varepsilon/2<\\varepsilon$.\n\nDie Grenzfunktion ist stetig: Für $x_0\\in[0,1]$ wähle $n$ mit $\\|f-f_n\\|_\\infty<\\varepsilon/3$. Die Stetigkeit von $f_n$ liefert $\\delta>0$, sodass für $|x-x_0|<\\delta$\n\n$$\n|f(x)-f(x_0)|\\le|f(x)-f_n(x)|+|f_n(x)-f_n(x_0)|+|f_n(x_0)-f(x_0)|<\\varepsilon.\n$$\n\nDamit liegt $f$ in $C([0,1])$. Der Raum ist vollständig.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "$(\\ell^2,\\|\\cdot\\|_2)$, wobei\n\n$$\n\\|x\\|_2=\\left(\\sum_{n=1}^\\infty|x_n|^2\\right)^{1/2}.\n$$",
        "solution": "Sei $(x^{(k)})$ Cauchy in $\\ell^2$. Aus $|x_j^{(k)}-x_j^{(l)}|\\le\\|x^{(k)}-x^{(l)}\\|_2$ folgt für jedes $j$ ein Grenzwert $x_j=\\lim_kx_j^{(k)}$. Die Cauchy-Folge ist beschränkt, etwa $\\|x^{(k)}\\|_2\\le M$. Für jedes $J$ gilt\n\n$$\n\\sum_{j=1}^J|x_j|^2=\\lim_{k\\to\\infty}\\sum_{j=1}^J|x_j^{(k)}|^2\\le M^2.\n$$\n\nFür $J\\to\\infty$ folgt $x=(x_j)\\in\\ell^2$. Wähle nun $K$ mit $\\|x^{(k)}-x^{(l)}\\|_2<\\varepsilon/2$ für $k,l\\ge K$. Für jedes $J$ und $k\\ge K$ liefert $l\\to\\infty$\n\n$$\n\\sum_{j=1}^J|x_j^{(k)}-x_j|^2\\le\\frac{\\varepsilon^2}{4}.\n$$\n\nMit $J\\to\\infty$ folgt $\\|x^{(k)}-x\\|_2\\le\\varepsilon/2<\\varepsilon$. Somit ist $\\ell^2$ vollständig.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "$(c_{00},\\|\\cdot\\|_2)$, wobei $c_{00}$ den Raum aller reellen Folgen bezeichnet, die ab einem Index konstant Null sind, und\n\n$$\n\\|x\\|_2=\\left(\\sum_{n=1}^\\infty|x_n|^2\\right)^{1/2}.\n$$",
        "solution": "Betrachte\n\n$$\nx^{(k)}=\\left(1,\\frac12,\\ldots,\\frac1k,0,0,\\ldots\\right)\\in c_{00}.\n$$\n\nFür $l>k$ gilt\n\n$$\n\\|x^{(l)}-x^{(k)}\\|_2^2=\\sum_{j=k+1}^l\\frac1{j^2}\\le\\sum_{j=k+1}^l\\frac1{j(j-1)}=\\frac1k-\\frac1l\\le\\frac1k.\n$$\n\nAlso ist $(x^{(k)})$ Cauchy. Ein Normgrenzwert müsste koordinatenweise $x_j=1/j$ erfüllen und kann daher nicht in $c_{00}$ liegen. Somit ist $c_{00}$ nicht vollständig.",
        "sketch": null
      }
    ]
  },
  "B.2.2": {
    "id": "sheet-B.2.2",
    "number": "B.2.2",
    "sheet": 2,
    "source": "Übungsblatt 2 · B.2.2",
    "intro": "",
    "parts": [
      {
        "label": "a",
        "prompt": "Seien $D\\subset\\mathbb R$ und $f_n:D\\to\\mathbb R$ für alle $n\\in\\mathbb N$. Weiter sei $f:D\\to\\mathbb R$ eine Funktion. Zeigen Sie die folgende Äquivalenz:\n\n$$\nf_n\\to f\\text{ gleichmäßig auf }D\\quad\\Longleftrightarrow\\quad\\lim_{n\\to\\infty}\\|f_n-f\\|_\\infty=0.\n$$",
        "solution": "Aus $\\|f_n-f\\|_\\infty\\to0$ folgt wegen $|f_n(x)-f(x)|\\le\\|f_n-f\\|_\\infty$ unmittelbar gleichmäßige Konvergenz. Konvergiert umgekehrt $f_n\\to f$ gleichmäßig, so gibt es zu $\\varepsilon>0$ ein $N$ mit\n\n$$\n|f_n(x)-f(x)|<\\frac\\varepsilon2\\qquad(n\\ge N,\\ x\\in D).\n$$\n\nSupremumsbildung ergibt $\\|f_n-f\\|_\\infty\\le\\varepsilon/2<\\varepsilon$ für alle $n\\ge N$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Seien $f_n:D\\to\\mathbb R$ für jedes $n\\in\\mathbb N$ gleichmäßig stetig und $f_n\\to f$ gleichmäßig auf $D$ bei $n\\to\\infty$ für ein $f:D\\to\\mathbb R$. Zeigen Sie, dass dann auch $f$ gleichmäßig stetig ist.",
        "solution": "Sei $\\varepsilon>0$. Wähle ein festes $n$ mit $\\|f-f_n\\|_\\infty<\\varepsilon/3$. Wegen der gleichmäßigen Stetigkeit von $f_n$ existiert $\\delta>0$, sodass für $x,y\\in D$ mit $|x-y|<\\delta$\n\n$$\n|f_n(x)-f_n(y)|<\\frac\\varepsilon3.\n$$\n\nDann gilt\n\n$$\n|f(x)-f(y)|\\le|f(x)-f_n(x)|+|f_n(x)-f_n(y)|+|f_n(y)-f(y)|<\\varepsilon.\n$$\n\nDamit ist $f$ gleichmäßig stetig auf $D$.",
        "sketch": null
      }
    ]
  },
  "B.2.3": {
    "id": "sheet-B.2.3",
    "number": "B.2.3",
    "sheet": 2,
    "source": "Übungsblatt 2 · B.2.3",
    "intro": "Überprüfen Sie für die unten stehenden Funktionenfolgen, ob\n\n$$\n\\lim_{n\\to\\infty}\\int_a^b f_n(x)\\,dx=\\int_a^b\\lim_{n\\to\\infty}f_n(x)\\,dx\n$$\n\ngilt.",
    "parts": [
      {
        "label": "a",
        "prompt": "$a=-\\pi$, $b=\\pi$ und $f_n(x)=\\frac{\\sin(nx)}n$ für alle $x\\in[-\\pi,\\pi]$, $n\\in\\mathbb N$",
        "solution": "Es gilt $\\|f_n\\|_\\infty\\le1/n\\to0$, also $f_n\\to0$ gleichmäßig auf $[-\\pi,\\pi]$. Da $\\sin(nx)$ ungerade ist,\n\n$$\n\\lim_{n\\to\\infty}\\int_{-\\pi}^{\\pi}\\frac{\\sin(nx)}n\\,dx=0=\\int_{-\\pi}^{\\pi}\\lim_{n\\to\\infty}\\frac{\\sin(nx)}n\\,dx.\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "$a=0$, $b=2$ und $f_n(x)=n^2x\\chi_{[0,\\frac1n]}(x)+(2n-n^2x)\\chi_{(\\frac1n,\\frac2n]}(x)$ für alle $x\\in[0,2]$, $n\\in\\mathbb N$\n\nDabei bezeichnet $\\chi$ die sogenannte charakteristische (auch Indikator-) Funktion und ist für beliebiges $A\\subset\\mathbb R$ folgendermaßen definiert\n\n$$\n\\chi_A(x)=\\begin{cases}1,&x\\in A\\\\0,&\\text{sonst.}\\end{cases}\n$$\n\nInterpretieren Sie Ihre Ergebnisse und stellen Sie den wesentlichen Unterschied der beiden untersuchten Funktionenfolgen fest.",
        "solution": "Es gilt $f_n(0)=0$. Für festes $x>0$ ist $x>2/n$ für alle hinreichend großen $n$, also schließlich $f_n(x)=0$. Der punktweise Grenzwert ist somit $f=0$. Dagegen\n\n$$\n\\begin{aligned}\n\\int_0^2f_n(x)\\,dx\n&=\\int_0^{1/n}n^2x\\,dx+\\int_{1/n}^{2/n}(2n-n^2x)\\,dx\\\\\n&=\\frac12+\\frac12=1.\n\\end{aligned}\n$$\n\nDaher ist\n\n$$\n\\lim_{n\\to\\infty}\\int_0^2f_n(x)\\,dx=1\\ne0=\\int_0^2\\lim_{n\\to\\infty}f_n(x)\\,dx.\n$$\n\nDie Konvergenz ist nicht gleichmäßig, denn $f_n(1/n)=n$ und $\\|f_n\\|_\\infty=n$. Im ersten Fall kontrolliert gleichmäßige Konvergenz die Integrale; im zweiten Fall bleiben die Flächen der immer schmaleren und höheren Dreiecke gleich $1$.",
        "sketch": null
      }
    ]
  },
  "B.2.4": {
    "id": "sheet-B.2.4",
    "number": "B.2.4",
    "sheet": 2,
    "source": "Übungsblatt 2 · B.2.4",
    "intro": "",
    "parts": [
      {
        "label": "a",
        "prompt": "Seien $a<b$ mit $a,b\\in\\mathbb R$. Wir betrachten die Funktion $f(x)=\\sum_{n=1}^\\infty\\frac{\\sin(nx)}{n^3}$. Bestimmen Sie die Ableitung von $f$.",
        "solution": "Setze $s_N(x)=\\sum_{n=1}^N\\sin(nx)/n^3$. Dann\n\n$$\ns_N'(x)=\\sum_{n=1}^N\\frac{\\cos(nx)}{n^2}.\n$$\n\nFür $M>N\\ge1$ gilt gleichmäßig in $x$\n\n$$\n|s_M'(x)-s_N'(x)|\\le\\sum_{n=N+1}^M\\frac1{n^2}\\le\\frac1N.\n$$\n\nAlso konvergiert die Ableitungsreihe gleichmäßig. Auch die ursprüngliche Reihe konvergiert absolut, denn\n\n$$\n\\sum_{n=1}^{\\infty}\\frac{|\\sin(nx)|}{n^3}\\le\\sum_{n=1}^{\\infty}\\frac1{n^3}<\\infty.\n$$\n\nNach gliedweiser Differentiation auf jedem kompakten Intervall folgt\n\n$$\n\\boxed{f'(x)=\\sum_{n=1}^{\\infty}\\frac{\\cos(nx)}{n^2}.}\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Wir betrachten die Funktionenfolge $f_n(x)=\\frac{x}{1+x^2n^2}$ für alle $x\\in\\mathbb R$, $n\\in\\mathbb N$. Bestimmen Sie die Grenzfunktion $f$ der Funktionenfolge. Gilt $\\lim_{n\\to\\infty}f_n'(0)=f'(0)$?",
        "solution": "Für $x=0$ gilt $f_n(0)=0$, für $x\\ne0$ gilt $x/(1+n^2x^2)\\to0$. Somit ist $f=0$ auf $\\mathbb R$. Mit $2n|x|\\le1+n^2x^2$ folgt sogar\n\n$$\n\\|f_n\\|_\\infty=\\frac1{2n}\\to0.\n$$\n\nAndererseits ist\n\n$$\nf_n'(x)=\\frac{1-n^2x^2}{(1+n^2x^2)^2},\\qquad f_n'(0)=1,\n$$\n\nalso $\\lim_{n\\to\\infty}f_n'(0)=1\\ne0=f'(0)$.",
        "sketch": null
      }
    ]
  },
  "B.2.5": {
    "id": "sheet-B.2.5",
    "number": "B.2.5",
    "sheet": 2,
    "source": "Übungsblatt 2 · B.2.5",
    "intro": "Sei für alle $n\\in\\mathbb N$ die Funktionenfolge $f_n:[0,1]\\to\\mathbb R^2$ definiert durch\n\n$$\nf_n(x)=\\left(\\frac{\\sin(nx)}{n+1}+1,(e^x+1)^{\\frac1n}\\right).\n$$",
    "parts": [
      {
        "label": "a",
        "prompt": "Bestimmen Sie die punktweise Grenzfunktion $f$ von $(f_n)_{n\\in\\mathbb N}$.",
        "solution": "Für jedes $x\\in[0,1]$ gilt\n\n$$\n\\frac{\\sin(nx)}{n+1}+1\\to1,\\qquad(e^x+1)^{1/n}=\\exp\\left(\\frac{\\log(e^x+1)}n\\right)\\to1.\n$$\n\nDie punktweise Grenzfunktion ist $f(x)=(1,1)$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Auf $\\mathbb R^2$ betrachten wir nun die Normen\n\n$$\n\\|(x,y)\\|_1:=|x|+|y|,\\quad\\|(x,y)\\|_2:=\\sqrt{x^2+y^2}.\n$$\n\nZeigen Sie, dass die beiden obigen Normen äquivalent sind, d.h. dass es Konstanten $c,\\widetilde c>0$ gibt, so dass\n\n$$\nc\\|(x,y)\\|_1\\le\\|(x,y)\\|_2\\le\\widetilde c\\|(x,y)\\|_1\n$$\n\nfür alle $(x,y)\\in\\mathbb R^2$ gilt.",
        "solution": "Für $(x,y)\\in\\mathbb R^2$ gilt\n\n$$\nx^2+y^2\\le(|x|+|y|)^2=x^2+2|xy|+y^2\\le2(x^2+y^2).\n$$\n\nWurzelziehen ergibt\n\n$$\n\\boxed{\\frac1{\\sqrt2}\\|(x,y)\\|_1\\le\\|(x,y)\\|_2\\le\\|(x,y)\\|_1.}\n$$\n\nDamit sind die Normen äquivalent, etwa mit $c=1/\\sqrt2$ und $\\widetilde c=1$.",
        "sketch": null
      }
    ]
  },
  "T.3.1": {
    "id": "sheet-T.3.1",
    "number": "T.3.1",
    "sheet": 3,
    "source": "Übungsblatt 3 · T.3.1",
    "intro": "",
    "parts": [
      {
        "label": "a",
        "prompt": "Definieren Sie die Begriffe Banachraum und Hilbertraum.",
        "solution": "Ein **Banachraum** ist ein vollständiger normierter Raum. Ein **Hilbertraum** ist ein Skalarproduktraum, der bezüglich der induzierten Norm $\\|x\\|=\\sqrt{\\langle x,x\\rangle}$ vollständig ist.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Geben Sie den Banach’schen Fixpunktsatz an.",
        "solution": "Sei $(X,d)$ ein nichtleerer vollständiger metrischer Raum und $\\varphi:X\\to X$ eine Kontraktion, d. h. es existiert $c<1$ mit\n\n$$\nd(\\varphi(x),\\varphi(y))\\le c\\,d(x,y)\\qquad\\forall x,y\\in X.\n$$\n\nDann existiert genau ein $x_*\\in X$ mit $\\varphi(x_*)=x_*$ (Banach'scher Fixpunktsatz, Theorem 1.3).",
        "sketch": null
      }
    ]
  },
  "T.3.2": {
    "id": "sheet-T.3.2",
    "number": "T.3.2",
    "sheet": 3,
    "source": "Übungsblatt 3 · T.3.2",
    "intro": "",
    "parts": [
      {
        "label": "a",
        "prompt": "Geben Sie die Definition einer kompakten Teilmenge eines metrischen Raumes an.",
        "solution": "Sei $(X,d)$ ein metrischer Raum und $A\\subset X$.\n\n$A$ heißt **kompakt**, wenn jede offene Überdeckung $(U_i)_{i\\in I}$ von $A$ eine endliche Teilüberdeckung besitzt:\n\n$$\nA\\subset\\bigcup_{i\\in I}U_i\\quad\\Longrightarrow\\quad\\exists i_1,\\ldots,i_N\\in I:\\ A\\subset\\bigcup_{j=1}^NU_{i_j}.\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Geben Sie die Definition der Folgenkompaktheit einer Teilmenge eines metrischen Raumes an.",
        "solution": "$A$ heißt **folgenkompakt**, wenn jede Folge $(x_n)\\subset A$ eine Teilfolge $(x_{n_k})$ besitzt, die gegen einen Punkt $x\\in A$ konvergiert.",
        "sketch": null
      }
    ]
  },
  "B.3.1": {
    "id": "sheet-B.3.1",
    "number": "B.3.1",
    "sheet": 3,
    "source": "Übungsblatt 3 · B.3.1",
    "intro": "Sei $X\\subset\\mathbb R^n$ und $\\varphi:X\\to X$ eine Kontraktion, d.h. es existiert $c<1$, so dass\n\n$$\n\\|\\varphi(x)-\\varphi(y)\\|\\le c\\|x-y\\|\\quad\\text{für alle }x,y\\in X.\n$$\n\nZeigen Sie, dass wenn $X$ eine geschlossene Kugel $\\overline B_r(\\mathbf a)$ enthält, so dass $|\\varphi(\\mathbf a)-\\mathbf a|\\le(1-c)r$, so besitzt $\\varphi$ einen Fixpunkt in $\\overline B_r(\\mathbf a)$.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Für $x\\in\\overline B_r(a)$ gilt\n\n$$\n\\begin{aligned}\n\\|\\varphi(x)-a\\|&\\le\\|\\varphi(x)-\\varphi(a)\\|+\\|\\varphi(a)-a\\|\\\\\n&\\le c\\|x-a\\|+(1-c)r\\le cr+(1-c)r=r.\n\\end{aligned}\n$$\n\nDamit ist $\\varphi(\\overline B_r(a))\\subset\\overline B_r(a)$. Die abgeschlossene Kugel ist als abgeschlossene Teilmenge von $\\mathbb R^n$ vollständig und nichtleer. Die Einschränkung von $\\varphi$ auf diese Kugel bleibt eine Kontraktion. Nach Theorem 1.3 besitzt sie genau einen Fixpunkt in $\\overline B_r(a)$.",
        "sketch": null
      }
    ]
  },
  "B.3.2": {
    "id": "sheet-B.3.2",
    "number": "B.3.2",
    "sheet": 3,
    "source": "Übungsblatt 3 · B.3.2",
    "intro": "Sei $\\varnothing\\ne A\\subset\\mathbb R^n$ kompakt und $(f_n)_{n\\in\\mathbb N}$ eine Folge von Lipschitz-stetigen Funktionen $f_n:A\\to A$ mit Lipschitz-Konstante $0<L_n<1$, d.h. für alle $n\\in\\mathbb N$ existiert eine Zahl $L_n\\in(0,1)$ mit\n\n$$\n\\|f_n(x)-f_n(y)\\|\\le L_n\\|x-y\\|\\quad\\text{für alle }x,y\\in A.\n$$\n\nZudem konvergiere die Funktionenfolge $(f_n)_{n\\in\\mathbb N}$ bei $n\\to\\infty$ punktweise gegen eine Funktion $f:A\\to A$. Zeigen Sie die folgenden Aussagen:",
    "parts": [
      {
        "label": "a",
        "prompt": "Jede Funktion $f_n$ besitzt genau einen Fixpunkt $a_n$.",
        "solution": "Die kompakte Menge $A\\subset\\mathbb R^n$ ist abgeschlossen und damit vollständig. Für jedes $n$ ist $f_n:A\\to A$ eine Kontraktion. Nach Theorem 1.3 existiert genau ein $a_n\\in A$ mit $f_n(a_n)=a_n$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Es existiert eine Teilfolge $(n_k)_{k\\in\\mathbb N}$ so, dass die Funktionenfolge $(f_{n_k})_{k\\in\\mathbb N}$ gleichmäßig gegen die Funktion $f$ konvergiert. (Hinweis: Um gleichmäßige Konvergenz nachzuweisen, ist häufig der Satz von Arzelà-Ascoli, siehe unten, hilfreich.)\n\nSatz [Arzelà-Ascoli]: Seien $(X,d)$ ein metrischer Raum, $(Y,\\|\\cdot\\|_Y)$ ein endlich-dimensionaler normierter Raum, und $\\varnothing\\ne A\\subset X$ eine kompakte Menge. Sei $(f_n)_{n\\in\\mathbb N}$ eine Folge gleichmäßig beschränkter und gleichgradig stetiger Abbildungen $f_n:A\\to Y$. Dann existiert eine Teilfolge $(f_{n_k})_{k\\in\\mathbb N}$, die gleichmäßig auf $A$ konvergiert. Dabei heißt eine Funktionenfolge $(f_n)_{n\\in\\mathbb N}$\n\n- gleichmäßig beschränkt genau dann, wenn $\\sup_{n\\in\\mathbb N}\\sup_{x\\in A}\\|f_n(x)\\|_Y<\\infty$;\n- gleichgradig stetig genau dann, wenn es für alle $a\\in A$ und für alle $\\varepsilon>0$ ein $\\delta>0$ gibt so, dass $\\|f_n(x)-f_n(a)\\|_Y<\\varepsilon$ für alle $x\\in A\\cap U_\\delta(a)$ und alle $n\\in\\mathbb N$.",
        "solution": "Für alle $x,y\\in A$ gilt\n\n$$\n\\|f(x)-f(y)\\|=\\lim_{n\\to\\infty}\\|f_n(x)-f_n(y)\\|\\le\\|x-y\\|.\n$$\n\nSei $\\varepsilon>0$. Aus der Kompaktheit folgt eine endliche Überdeckung $A\\subset\\bigcup_{i=1}^MB_{\\varepsilon/4}(z_i)$ mit $z_i\\in A$. Wegen der punktweisen Konvergenz gibt es ein gemeinsames $N$ mit $\\|f_n(z_i)-f(z_i)\\|<\\varepsilon/2$ für alle $n\\ge N$ und $i=1,\\ldots,M$.\n\nZu $x\\in A$ wähle $i$ mit $\\|x-z_i\\|<\\varepsilon/4$. Dann gilt für $n\\ge N$\n\n$$\n\\begin{aligned}\n\\|f_n(x)-f(x)\\|&\\le\\|f_n(x)-f_n(z_i)\\|+\\|f_n(z_i)-f(z_i)\\|+\\|f(z_i)-f(x)\\|\\\\\n&<\\frac\\varepsilon4+\\frac\\varepsilon2+\\frac\\varepsilon4=\\varepsilon.\n\\end{aligned}\n$$\n\nSomit konvergiert sogar die ganze Folge gleichmäßig gegen $f$; insbesondere existiert die verlangte Teilfolge.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Die Folge der Fixpunkte $(a_{n_k})_{k\\in\\mathbb N}$ besitzt eine konvergente Teilfolge.",
        "solution": "Nach der Folgenkompaktheit von $A$ besitzt $(a_{n_k})$ eine Teilfolge $a_{n_{k_j}}\\to a\\in A$.",
        "sketch": null
      },
      {
        "label": "d",
        "prompt": "Die Funktion $f$ besitzt einen Fixpunkt.",
        "solution": "Setze $m_j=n_{k_j}$. Wegen $a_{m_j}=f_{m_j}(a_{m_j})$ und der Lipschitz-Stetigkeit von $f$ gilt\n\n$$\n\\begin{aligned}\n\\|a-f(a)\\|&\\le\\|a-a_{m_j}\\|+\\|f_{m_j}(a_{m_j})-f(a_{m_j})\\|+\\|f(a_{m_j})-f(a)\\|\\\\\n&\\le2\\|a-a_{m_j}\\|+\\sup_{x\\in A}\\|f_{m_j}(x)-f(x)\\|\\longrightarrow0.\n\\end{aligned}\n$$\n\nFolglich $f(a)=a$.",
        "sketch": null
      },
      {
        "label": "e",
        "prompt": "Überlegen Sie sich anhand eines Gegenbeispiels, warum die in (b) gezeigte gleichmäßige Konvergenz notwendig für die Existenz eines Fixpunkts von $f$ ist.",
        "solution": "Unter den gegebenen Voraussetzungen kann das verlangte Gegenbeispiel nicht existieren: Nach (b) ist die Konvergenz bereits gleichmäßig. Gleichmäßige Konvergenz ist auch allgemein keine notwendige Bedingung dafür, dass ein Grenzwert einen Fixpunkt besitzt.\n\nOhne die gemeinsame Lipschitz-Schranke genügt punktweise Konvergenz jedoch nicht zur Übertragung von Fixpunkten. Auf $[0,1]$ seien\n\n$$\nh_n(x)=\\max\\{1-nx,0\\}.\n$$\n\nJedes $h_n$ hat den Fixpunkt $x_n=1/(n+1)$. Der punktweise Grenzwert ist $h(0)=1$ und $h(x)=0$ für $x>0$ und hat keinen Fixpunkt. Diese $h_n$ erfüllen die Kontraktionsvoraussetzung der Aufgabe nicht.",
        "sketch": null
      }
    ]
  },
  "B.3.3": {
    "id": "sheet-B.3.3",
    "number": "B.3.3",
    "sheet": 3,
    "source": "Übungsblatt 3 · B.3.3",
    "intro": "Sei $(X,d)$ ein metrischer Raum und sei $A\\subset X$ eine kompakte Menge. Sei $(A_i)_{i\\in I}$ eine Familie von Teilmengen von $X$. Beweisen Sie die folgenden Eigenschaften:",
    "parts": [
      {
        "label": "a",
        "prompt": "Wenn $A_i$ für alle $i\\in I$ kompakt ist, dann ist $\\bigcap_{i\\in I}A_i$ kompakt.",
        "solution": "Sei $I\\ne\\varnothing$ und $i_0\\in I$. Da jedes $A_i$ kompakt und damit abgeschlossen ist, ist $F=\\bigcap_{i\\in I}A_i$ abgeschlossen. Wegen $F\\subset A_{i_0}$ ist $F$ eine abgeschlossene Teilmenge einer kompakten Menge und nach Theorem 1.12 kompakt. Für $I=\\varnothing$ ist der Schnitt $X$; ohne Kompaktheit von $X$ gilt die Behauptung dann nicht.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Wenn $A_1,\\ldots,A_n$ kompakte Mengen sind, dann ist $\\bigcup_{i=1}^nA_i$ kompakt.",
        "solution": "Sei $(U_j)_{j\\in J}$ eine offene Überdeckung von $\\bigcup_{i=1}^nA_i$. Für jedes kompakte $A_i$ existiert eine endliche Teilfamilie, die $A_i$ überdeckt. Die Vereinigung dieser $n$ endlichen Familien ist endlich und überdeckt $\\bigcup_{i=1}^nA_i$. Also ist die Vereinigung kompakt.",
        "sketch": null
      }
    ]
  },
  "B.3.4": {
    "id": "sheet-B.3.4",
    "number": "B.3.4",
    "sheet": 3,
    "source": "Übungsblatt 3 · B.3.4",
    "intro": "Sei $A\\subset\\mathbb R$ kompakt. Zeigen Sie, dass die folgenden Mengen auch kompakt sind:",
    "parts": [
      {
        "label": "a",
        "prompt": "$S=\\{x+y;x,y\\in A\\}$,",
        "solution": "Da $A$ kompakt ist, ist auch $K=A\\times A$ kompakt.\n\nDefiniere $f:\\mathbb R^2\\to\\mathbb R$ durch $f(x,y)=x+y$. Die Funktion $f$ ist stetig, und es gilt\n\n$$S=\\{x+y:x,y\\in A\\}=f(K).$$\n\nAls stetiges Bild der kompakten Menge $K$ ist $S$ kompakt.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "$D=\\{x-y;x,y\\in A\\}$,",
        "solution": "Da $A$ kompakt ist, ist auch $K=A\\times A$ kompakt.\n\nDefiniere $f:\\mathbb R^2\\to\\mathbb R$ durch $f(x,y)=x-y$. Die Funktion $f$ ist stetig, und es gilt\n\n$$D=\\{x-y:x,y\\in A\\}=f(K).$$\n\nAls stetiges Bild der kompakten Menge $K$ ist $D$ kompakt.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "$P=\\{x\\cdot y;x,y\\in A\\}$,",
        "solution": "Da $A$ kompakt ist, ist auch $K=A\\times A$ kompakt.\n\nDefiniere $f:\\mathbb R^2\\to\\mathbb R$ durch $f(x,y)=xy$. Die Funktion $f$ ist stetig, und es gilt\n\n$$P=\\{xy:x,y\\in A\\}=f(K).$$\n\nAls stetiges Bild der kompakten Menge $K$ ist $P$ kompakt.",
        "sketch": null
      },
      {
        "label": "d",
        "prompt": "$Q=\\left\\{\\frac xy;x,y\\in A,\\ y\\ne0\\right\\}$.",
        "solution": "**Gegenbeispiel:** Wähle $A=[0,1]$. Dieses Intervall ist abgeschlossen und beschränkt, also nach Heine–Borel kompakt.\n\nFür jedes $n\\ge1$ liegen $x=1$ und $y=1/n$ in $A$, und $y\\ne0$. Daher gilt\n\n$$\\frac{x}{y}=\\frac{1}{1/n}=n\\in Q.$$\n\nSomit ist $Q$ unbeschränkt und nicht kompakt. Die Behauptung gilt also nicht für jedes kompakte $A$.\n\n**Mit der Zusatzannahme $0\\notin A$ ist $Q$ kompakt:** Die Menge $K=A\\times A$ ist kompakt. Weil kein Nenner null ist, ist\n\n$$q:K\\to\\mathbb R,\\qquad q(x,y)=\\frac{x}{y}$$\n\nauf ganz $K$ definiert und stetig. Wegen $Q=q(K)$ ist $Q$ als stetiges Bild einer kompakten Menge kompakt.",
        "sketch": null
      }
    ]
  },
  "B.3.5": {
    "id": "sheet-B.3.5",
    "number": "B.3.5",
    "sheet": 3,
    "source": "Übungsblatt 3 · B.3.5",
    "intro": "Zeigen Sie die folgenden Eigenschaften kompakter und abgeschlossener Mengen in $\\mathbb R^n$.",
    "parts": [
      {
        "label": "a",
        "prompt": "Sei $K\\subset U\\subset\\mathbb R^n$ mit $K$ kompakt und $U$ offen. Zeigen Sie, dass es ein $\\varepsilon>0$ gibt, sodass für alle $x\\in K$ und $y\\in\\mathbb R^n$ gilt:\n\n$$\n|x-y|<\\varepsilon\\quad\\Longrightarrow\\quad[x,y]\\subset U.\n$$\n\nDabei bezeichnet $[x,y]$ die Verbindungsstrecke zwischen $x$ und $y$.",
        "solution": "Für $K=\\varnothing$ ist die Behauptung trivial. Sei $K\\ne\\varnothing$. Zu jedem $a\\in K$ wähle $r_a>0$ mit $B_{2r_a}(a)\\subset U$. Endlich viele der Kugeln $B_{r_a}(a)$ überdecken $K$, etwa\n\n$$\nK\\subset\\bigcup_{i=1}^NB_{r_i}(a_i).\n$$\n\nSetze $\\varepsilon=\\min_i r_i>0$. Zu $x\\in K$ wähle $i$ mit $\\|x-a_i\\|<r_i$. Für $\\|y-x\\|<\\varepsilon$ und $z=(1-t)x+ty$, $0\\le t\\le1$, gilt\n\n$$\n\\|z-a_i\\|\\le\\|x-a_i\\|+t\\|y-x\\|<r_i+\\varepsilon\\le2r_i.\n$$\n\nAlso liegt jedes $z\\in[x,y]$ in $B_{2r_i}(a_i)\\subset U$, d. h. $[x,y]\\subset U$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Sei $X\\subset\\mathbb R^n$ so, dass für jede kompakte Menge $K\\subset\\mathbb R^n$ der Durchschnitt\n\n$$\nX\\cap K\n$$\n\nkompakt ist. Zeigen Sie, dass $X$ abgeschlossen ist.",
        "solution": "Sei $(x_n)\\subset X$ mit $x_n\\to x\\in\\mathbb R^n$. Die Menge $K=\\{x\\}\\cup\\{x_n:n\\in\\mathbb N\\}$ ist kompakt: Eine Überdeckungsmenge um $x$ enthält alle bis auf endlich viele $x_n$; für die übrigen reichen endlich viele weitere Überdeckungsmengen.\n\nNach Voraussetzung ist $X\\cap K$ kompakt und damit abgeschlossen. Da $x_n\\in X\\cap K$ und $x_n\\to x$, folgt $x\\in X\\cap K\\subset X$. Somit ist $X$ abgeschlossen.",
        "sketch": null
      }
    ]
  },
  "T.4.1": {
    "id": "sheet-T.4.1",
    "number": "T.4.1",
    "sheet": 4,
    "source": "Übungsblatt 4 · T.4.1",
    "intro": "",
    "parts": [
      {
        "label": "a",
        "prompt": "Formuliere den Satz von Cantor über Schnittmengen.",
        "solution": "**Satz von Cantor über Schnittmengen (Theorem 1.6).**\n\nSei $(X,d)$ ein metrischer Raum und $A\\subset X$. Dann sind äquivalent:\n\n1. $A$ ist kompakt.\n2. Für jede Familie $(C_i)_{i\\in I}$ abgeschlossener Teilmengen von $X$ gilt: Ist $A\\cap C_{i_1}\\cap\\cdots\\cap C_{i_k}\\ne\\varnothing$ für jede endliche Teilfamilie, so ist auch\n\n$$\nA\\cap\\bigcap_{i\\in I}C_i\\ne\\varnothing.\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Formuliere den Satz von Heine-Borel.",
        "solution": "**Satz von Heine–Borel (Theorem 1.11).**\n\nEine Teilmenge von $\\mathbb R^n$ ist genau dann kompakt, wenn sie abgeschlossen und beschränkt ist.",
        "sketch": null
      }
    ]
  },
  "T.4.2": {
    "id": "sheet-T.4.2",
    "number": "T.4.2",
    "sheet": 4,
    "source": "Übungsblatt 4 · T.4.2",
    "intro": "Formulieren Sie den Satz über die Umkehrfunktion.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "**Satz über die Umkehrfunktion (Theorem 2.17).** Sei $E\\subset\\mathbb R^n$ offen, $f\\in C^1(E,\\mathbb R^n)$, $a\\in E$ und $b=f(a)$. Ist $Df(a)$ invertierbar, so gibt es offene Umgebungen $U\\subset E$ von $a$ und $V$ von $b$, sodass $f|_U:U\\to V$ bijektiv ist. Die Umkehrfunktion $g:V\\to U$ ist von Klasse $C^1$, und es gilt\n\n$$\nDg(y)=\\bigl[Df(g(y))\\bigr]^{-1},\\qquad y\\in V.\n$$",
        "sketch": null
      }
    ]
  },
  "B.4.1": {
    "id": "sheet-B.4.1",
    "number": "B.4.1",
    "sheet": 4,
    "source": "Übungsblatt 4 · B.4.1",
    "intro": "Sei $U\\subset\\mathbb R^m$ eine offene Menge. Angenommen, $\\varphi:U\\to\\mathbb R^m$ ist eine Kontraktion. Definiere die Abbildung $f:U\\to\\mathbb R^m$ durch $f(x)=x+\\varphi(x)$ definiert. Beweisen Sie, dass $f$ ein Homöomorphismus von $U$ auf eine offene Teilmenge von $\\mathbb R^m$ ist.\n\nAnmerkung: Eine Abbildung $f:X\\to Y$ wird als Homöomorphismus bezeichnet, wenn $f$ bijektiv und stetig ist und $f^{-1}:Y\\to X$ stetig ist.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Sei $0\\le c<1$ eine Kontraktionskonstante von $\\varphi$. Für $x,z\\in U$ gilt\n\n$$\n\\begin{aligned}\n\\|f(x)-f(z)\\|&\\le\\|x-z\\|+\\|\\varphi(x)-\\varphi(z)\\|\\le(1+c)\\|x-z\\|,\\\\\n\\|f(x)-f(z)\\|&\\ge\\|x-z\\|-\\|\\varphi(x)-\\varphi(z)\\|\\ge(1-c)\\|x-z\\|.\n\\end{aligned}\n$$\n\nDamit ist $f$ stetig und injektiv. Außerdem ist die Umkehrfunktion auf $f(U)$ stetig, denn\n\n$$\n\\|f^{-1}(u)-f^{-1}(v)\\|\\le\\frac1{1-c}\\|u-v\\|.\n$$\n\nEs bleibt zu zeigen, dass $f(U)$ offen ist. Sei $x_0\\in U$. Wähle $r>0$ mit $\\overline B_r(x_0)\\subset U$ und sei $\\|y-f(x_0)\\|<(1-c)r$. Die Abbildung\n\n$$\nT_y:\\overline B_r(x_0)\\to\\mathbb R^m,\\qquad T_y(x)=y-\\varphi(x),\n$$\n\nist eine Kontraktion mit Konstante $c$. Für $x\\in\\overline B_r(x_0)$ gilt\n\n$$\n\\|T_y(x)-x_0\\|\\le\\|y-f(x_0)\\|+\\|\\varphi(x_0)-\\varphi(x)\\|<(1-c)r+cr=r.\n$$\n\nAlso bildet $T_y$ die vollständige Menge $\\overline B_r(x_0)$ in sich ab. Nach dem Banachschen Fixpunktsatz gibt es $x\\in\\overline B_r(x_0)$ mit $x=y-\\varphi(x)$, also $f(x)=y$. Folglich\n\n$$\nB_{(1-c)r}(f(x_0))\\subset f(U).\n$$\n\nDamit ist $f(U)$ offen und $f:U\\to f(U)$ ein Homöomorphismus.",
        "sketch": null
      }
    ]
  },
  "B.4.2": {
    "id": "sheet-B.4.2",
    "number": "B.4.2",
    "sheet": 4,
    "source": "Übungsblatt 4 · B.4.2",
    "intro": "Ein Strahl mit Ursprung $0$ in $\\mathbb R^n$ ist eine Menge der Form\n\n$$\n\\ell=\\{tv\\mid t\\ge0,\\ 0\\ne v\\in\\mathbb R^n\\}.\n$$\n\nSei $X\\subset\\mathbb R^n\\setminus\\{0\\}$ eine kompakte Menge mit der Eigenschaft, dass $X$ mit jedem Strahl durch den Ursprung genau einen Punkt gemeinsam hat. Zeigen Sie, dass $X$ homöomorph zur Sphäre\n\n$$\nS^{n-1}=\\{x\\in\\mathbb R^n:\\|x\\|=1\\}\n$$\n\nist.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Definiere\n\n$$\np:X\\to S^{n-1},\\qquad p(x)=\\frac{x}{\\|x\\|}.\n$$\n\nDa $0\\notin X$, ist $p$ stetig. Zu jedem $v\\in S^{n-1}$ enthält der Strahl $\\{tv:t\\ge0\\}$ genau einen Punkt $x\\in X$; für diesen gilt $p(x)=v$. Also ist $p$ surjektiv. Aus $p(x)=p(y)$ folgt, dass $x$ und $y$ auf demselben Strahl liegen, also $x=y$. Somit ist $p$ bijektiv.\n\nIst $F\\subset X$ abgeschlossen, so ist $F$ kompakt. Das stetige Bild $p(F)$ ist kompakt und daher in $S^{n-1}$ abgeschlossen. Wegen $(p^{-1})^{-1}(F)=p(F)$ ist $p^{-1}$ stetig. Also ist $p$ ein Homöomorphismus.",
        "sketch": null
      }
    ]
  },
  "B.4.3": {
    "id": "sheet-B.4.3",
    "number": "B.4.3",
    "sheet": 4,
    "source": "Übungsblatt 4 · B.4.3",
    "intro": "Sei $f:\\mathbb R^2\\to\\mathbb R^2$ definiert durch\n\n$$\nf(r,\\theta)=(r\\cos\\theta,r\\sin\\theta).\n$$\n\nMan nennt $f$ die Polarkoordinatentransformation.",
    "parts": [
      {
        "label": "a",
        "prompt": "Berechnen Sie für jedes $\\mathbf x\\in\\mathbb R^2$ die Ableitung von $f$ in $\\mathbf x$ und die Determinante der Ableitungsmatrix $Df(\\mathbf x)$.",
        "solution": "Für $f(r,\\theta)=(r\\cos\\theta,r\\sin\\theta)$ gilt\n\n$$\nDf(r,\\theta)=\n\\begin{pmatrix}\n\\cos\\theta&-r\\sin\\theta\\\\\n\\sin\\theta&r\\cos\\theta\n\\end{pmatrix},\\qquad\n\\det Df(r,\\theta)=r(\\cos^2\\theta+\\sin^2\\theta)=r.\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Skizzieren Sie das Bild von $f$ unter der Menge $S=[1,2]\\times[0,\\pi]$, d.h. skizzieren Sie die Menge $f(S)\\subset\\mathbb R^2$.\n\nHinweis: Skizzieren Sie zuerst die Bilder von $f$ unter den Liniensegmenten, die $S$ begrenzen.",
        "solution": "Die vier Randstücke von $S=[1,2]\\times[0,\\pi]$ haben die Bilder\n\n$$\n\\begin{aligned}\nf(1,\\theta)&=(\\cos\\theta,\\sin\\theta),&0\\le\\theta\\le\\pi,\\\\\nf(2,\\theta)&=(2\\cos\\theta,2\\sin\\theta),&0\\le\\theta\\le\\pi,\\\\\nf(r,0)&=(r,0),&1\\le r\\le2,\\\\\nf(r,\\pi)&=(-r,0),&1\\le r\\le2.\n\\end{aligned}\n$$\n\nDa $\\|f(r,\\theta)\\|=r$ und $\\sin\\theta\\ge0$, ist das Bild der abgeschlossene obere Halbring:\n\n$$\n\\boxed{f(S)=\\{(u,v)\\in\\mathbb R^2:1\\le u^2+v^2\\le4,\\ v\\ge0\\}.}\n$$\n\nJeder Punkt dieser Menge besitzt Polarkoordinaten mit $r\\in[1,2]$ und $\\theta\\in[0,\\pi]$.",
        "sketch": "polar-region"
      }
    ]
  },
  "B.4.4": {
    "id": "sheet-B.4.4",
    "number": "B.4.4",
    "sheet": 4,
    "source": "Übungsblatt 4 · B.4.4",
    "intro": "Sei $g:\\mathbb R^2\\to\\mathbb R^2$ definiert durch\n\n$$\ng(x,y)=(x^2-y^2,2xy).\n$$",
    "parts": [
      {
        "label": "a",
        "prompt": "Berechnen Sie für jedes $\\mathbf x\\in\\mathbb R^2$ die Ableitung von $g$ in $\\mathbf x$ und die Determinante der Ableitungsmatrix $Dg(\\mathbf x)$.",
        "solution": "Für $g(x,y)=(x^2-y^2,2xy)$ gilt\n\n$$\nDg(x,y)=\\begin{pmatrix}2x&-2y\\\\2y&2x\\end{pmatrix},\\qquad\n\\det Dg(x,y)=4(x^2+y^2).\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Skizzieren Sie das Bild von $g$ unter der Menge\n\n$$\nS=\\{(x,y)\\mid x^2+y^2\\le a^2\\text{ und }x\\ge0\\text{ und }y\\ge0\\}.\n$$\n\nHinweis: Parametrisieren Sie einen Teil des Randes von $S$, indem Sie $x=a\\cos t$ und $y=a\\sin t$ setzen, und finden Sie dann das Bild dieser Kurve. Gehen Sie für den Rest des Randes von $S$ ähnlich vor.",
        "solution": "Schreibe $x=r\\cos t$, $y=r\\sin t$ mit $0\\le r\\le|a|$ und $0\\le t\\le\\pi/2$. Dann\n\n$$\ng(x,y)=(r^2\\cos(2t),r^2\\sin(2t)).\n$$\n\nDer Viertelkreisbogen $r=|a|$ wird auf den oberen Halbkreis mit Radius $a^2$ abgebildet. Die Randstücke auf den Koordinatenachsen werden zu\n\n$$\ng(x,0)=(x^2,0),\\qquad g(0,y)=(-y^2,0),\\qquad 0\\le x,y\\le|a|.\n$$\n\nDa $r^2$ alle Werte in $[0,a^2]$ und $2t$ alle Winkel in $[0,\\pi]$ annimmt, ist das Bild die abgeschlossene obere Halbkreisscheibe:\n\n$$\n\\boxed{g(S)=\\{(u,v)\\in\\mathbb R^2:u^2+v^2\\le a^4,\\ v\\ge0\\}.}\n$$\n\nFür $a=0$ ist $g(S)=\\{(0,0)\\}$.",
        "sketch": "square-region"
      }
    ]
  },
  "B.4.5": {
    "id": "sheet-B.4.5",
    "number": "B.4.5",
    "sheet": 4,
    "source": "Übungsblatt 4 · B.4.5",
    "intro": "Sei $f:\\mathbb R^2\\to\\mathbb R^2$ definiert durch\n\n$$\nf(x,y)=(e^x\\cos y,e^x\\sin y),\n$$",
    "parts": [
      {
        "label": "a",
        "prompt": "Zeigen Sie, dass $f$ injektiv auf der Menge $A:=\\mathbb R\\times(0,2\\pi)$ ist.\n\nHinweis: Wenn $f(x,y)=f(a,b)$, dann $\\|f(x,y)\\|=\\|f(a,b)\\|$.",
        "solution": "Sei $f(x,y)=f(a,b)$ mit $y,b\\in(0,2\\pi)$. Aus\n\n$$\ne^x=\\|f(x,y)\\|=\\|f(a,b)\\|=e^a\n$$\n\nfolgt $x=a$. Damit gelten $\\cos y=\\cos b$ und $\\sin y=\\sin b$, also $y-b\\in2\\pi\\mathbb Z$. Wegen $y,b\\in(0,2\\pi)$ folgt $y=b$. Somit ist $f|_A$ injektiv.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Wie lautet die Menge $B=f(A)$?",
        "solution": "Der Radius $e^x$ durchläuft $(0,\\infty)$, der Winkel $y$ durchläuft $(0,2\\pi)$. Deshalb\n\n$$\nB=f(A)=\\mathbb R^2\\setminus\\{(u,0):u\\ge0\\}.\n$$",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Sei $g:B\\to A$ die Umkehrfunktion von $f$ auf $A$. Berechnen Sie die Ableitungsmatrix von $g$ im Punkt $(0,1)$.",
        "solution": "Es gilt $f(0,\\pi/2)=(0,1)$ und\n\n$$\nDf(x,y)=e^x\\begin{pmatrix}\\cos y&-\\sin y\\\\\\sin y&\\cos y\\end{pmatrix},\\qquad\n\\det Df(x,y)=e^{2x}>0.\n$$\n\nNach Theorem 2.17 ist die Umkehrfunktion differenzierbar, und\n\n$$\n\\boxed{Dg(0,1)=\\bigl[Df(0,\\pi/2)\\bigr]^{-1}\n=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}^{-1}\n=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}.}\n$$",
        "sketch": null
      }
    ]
  },
  "T.5.1": {
    "id": "sheet-T.5.1",
    "number": "T.5.1",
    "sheet": 5,
    "source": "Übungsblatt 5 · T.5.1",
    "intro": "Was versteht man unter einem lokalen/globalen Diffeomorphismus?",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "**Definition 2.18.** Seien $U,V\\subset\\mathbb R^n$ offen und $f:U\\to V$ von Klasse $C^1$.\n\nEin **globaler Diffeomorphismus** ist eine bijektive Abbildung $f$, deren Umkehrfunktion $f^{-1}:V\\to U$ ebenfalls von Klasse $C^1$ ist.\n\n$f$ heißt **lokaler Diffeomorphismus in $p\\in U$**, wenn eine offene Umgebung $W\\subset U$ von $p$ existiert, sodass $f(W)$ offen und $f|_W:W\\to f(W)$ ein Diffeomorphismus ist. Gilt dies für jedes $p\\in U$, so heißt $f$ ein lokaler Diffeomorphismus.",
        "sketch": null
      }
    ]
  },
  "T.5.2": {
    "id": "sheet-T.5.2",
    "number": "T.5.2",
    "sheet": 5,
    "source": "Übungsblatt 5 · T.5.2",
    "intro": "Formulieren Sie den Satz über implizite Funktionen.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "**Satz über implizite Funktionen (Theorem 2.21).** Sei $E\\subset\\mathbb R^{n+m}$ offen, $f\\in C^1(E,\\mathbb R^n)$ und $f(a,b)=0$ für $(a,b)\\in E$. Zerlege\n\n$$\nA=Df(a,b)=[A_x\\ A_y],\\qquad A_x=D_xf(a,b),\\quad A_y=D_yf(a,b).\n$$\n\nIst $A_x$ invertierbar, so gibt es offene Umgebungen $U\\subset E$ von $(a,b)$ und $W\\subset\\mathbb R^m$ von $b$, sodass zu jedem $y\\in W$ genau ein $x$ mit $(x,y)\\in U$ und $f(x,y)=0$ gehört. Die dadurch definierte Abbildung $g:W\\to\\mathbb R^n$ ist von Klasse $C^1$ und erfüllt\n\n$$\ng(b)=a,\\qquad f(g(y),y)=0,\\qquad Dg(b)=-A_x^{-1}A_y.\n$$",
        "sketch": null
      }
    ]
  },
  "B.5.1": {
    "id": "sheet-B.5.1",
    "number": "B.5.1",
    "sheet": 5,
    "source": "Übungsblatt 5 · B.5.1",
    "intro": "Sei $U\\subset\\mathbb R^n$ eine offene Menge und sei $f:U\\to\\mathbb R^n$ eine $C^1$-Abbildung. Beweisen Sie, dass $f$ an einem Punkt $p\\in U$ genau dann ein lokaler Diffeomorphismus ist, wenn die Jacobi-Matrix $Df(p)$ invertierbar ist, d.h.\n\n$$\n\\det Df(p)\\ne0.\n$$",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "**$\\Leftarrow$:** Ist $Df(p)$ invertierbar, liefert Theorem 2.17 eine offene Umgebung $W$ von $p$, auf der $f$ eine $C^1$-Umkehrfunktion besitzt. Also ist $f$ in $p$ ein lokaler Diffeomorphismus.\n\n**$\\Rightarrow$:** Sei $g=(f|_W)^{-1}$ von Klasse $C^1$. Aus $g\\circ f=\\operatorname{id}_W$ folgt mit der Kettenregel\n\n$$\nDg(f(p))\\,Df(p)=I_n.\n$$\n\nDaher besitzt die quadratische Matrix $Df(p)$ eine Inverse, also $\\det Df(p)\\ne0$.",
        "sketch": null
      }
    ]
  },
  "B.5.2": {
    "id": "sheet-B.5.2",
    "number": "B.5.2",
    "sheet": 5,
    "source": "Übungsblatt 5 · B.5.2",
    "intro": "Bestimmen Sie alle Stellen $(x,y)\\in(0,\\infty)\\times(0,\\infty)$, für welche die Abbildung $f:(0,\\infty)\\times(0,\\infty)\\to\\mathbb R^2$, definiert durch\n\n$$\nf(x,y)=(x^y,y^x),\n$$\n\nein lokaler Diffeomorphismus ist. Begründen Sie Ihre Antwort.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Auf $(0,\\infty)^2$ ist $f(x,y)=(x^y,y^x)$ von Klasse $C^1$, da $x^y=e^{y\\ln x}$ und $y^x=e^{x\\ln y}$. Es gilt\n\n$$\nDf(x,y)=\\begin{pmatrix}\nyx^{y-1}&x^y\\ln x\\\\\ny^x\\ln y&xy^{x-1}\n\\end{pmatrix}.\n$$\n\nSomit\n\n$$\n\\det Df(x,y)=xy\\,x^{y-1}y^{x-1}-x^yy^x\\ln x\\ln y\n=x^yy^x(1-\\ln x\\ln y).\n$$\n\nDa $x^yy^x>0$, ist $f$ genau an den Stellen\n\n$$\n\\boxed{\\{(x,y)\\in(0,\\infty)^2:\\ln x\\ln y\\ne1\\}}\n$$\n\nein lokaler Diffeomorphismus.",
        "sketch": null
      }
    ]
  },
  "B.5.3": {
    "id": "sheet-B.5.3",
    "number": "B.5.3",
    "sheet": 5,
    "source": "Übungsblatt 5 · B.5.3",
    "intro": "Bestimmen Sie alle Stellen $(r,\\phi,\\psi)\\in\\mathbb R^3$, für welche die Abbildung $f:\\mathbb R^3\\to\\mathbb R^3$, definiert durch\n\n$$\nf(r,\\phi,\\psi)=(r\\sin\\phi\\cos\\psi,r\\sin\\phi\\sin\\psi,r\\cos\\psi),\n$$\n\nein lokaler Diffeomorphismus ist. Begründen Sie Ihre Antwort.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Für die angegebene Abbildung $f(r,\\varphi,\\psi)=(r\\sin\\varphi\\cos\\psi,r\\sin\\varphi\\sin\\psi,r\\cos\\psi)$ gilt\n\n$$\nDf=\\begin{pmatrix}\n\\sin\\varphi\\cos\\psi&r\\cos\\varphi\\cos\\psi&-r\\sin\\varphi\\sin\\psi\\\\\n\\sin\\varphi\\sin\\psi&r\\cos\\varphi\\sin\\psi&r\\sin\\varphi\\cos\\psi\\\\\n\\cos\\psi&0&-r\\sin\\psi\n\\end{pmatrix}.\n$$\n\nEntwicklung nach der dritten Zeile liefert\n\n$$\n\\begin{aligned}\n\\det Df\n&=\\cos\\psi\\,r^2\\sin\\varphi\\cos\\varphi(\\cos^2\\psi+\\sin^2\\psi)\\\\\n&\\quad-r\\sin\\psi\\bigl(r\\sin\\varphi\\cos\\varphi\\cos\\psi\\sin\\psi\n-r\\sin\\varphi\\cos\\varphi\\sin\\psi\\cos\\psi\\bigr)\\\\\n&=r^2\\sin\\varphi\\cos\\varphi\\cos\\psi.\n\\end{aligned}\n$$\n\nDa $f\\in C^1$, ist $f$ genau dann ein lokaler Diffeomorphismus, wenn\n\n$$\n\\boxed{r\\ne0,\\qquad \\varphi\\notin\\frac\\pi2\\mathbb Z,\\qquad\n\\psi\\notin\\frac\\pi2+\\pi\\mathbb Z.}\n$$",
        "sketch": null
      }
    ]
  },
  "B.5.4": {
    "id": "sheet-B.5.4",
    "number": "B.5.4",
    "sheet": 5,
    "source": "Übungsblatt 5 · B.5.4",
    "intro": "Betrachten Sie die folgenden Aufgaben:",
    "parts": [
      {
        "label": "a",
        "prompt": "Wir betrachten die Abbildung $F:\\mathbb R^2\\to\\mathbb R$, definiert durch\n\n$$\nF(x,y)=x-3y+e^{xy^2}+2.\n$$\n\nIst die Gleichung $F(x,y)=0$ an der Stelle $(0,1)$ lokal nach $y$ auflösbar? Bestimmen Sie gegebenenfalls die Ableitung von $y=f(x)$ an der Stelle $0$.",
        "solution": "Es gilt $F(0,1)=0-3+1+2=0$. Die partiellen Ableitungen sind\n\n$$\nF_x(x,y)=1+y^2e^{xy^2},\\qquad F_y(x,y)=-3+2xy e^{xy^2}.\n$$\n\nWegen $F_y(0,1)=-3\\ne0$ liefert Theorem 2.21 eine eindeutige lokale $C^1$-Funktion $y=h(x)$ mit $h(0)=1$. Ihre Ableitung ist\n\n$$\n\\boxed{h'(0)=-\\frac{F_x(0,1)}{F_y(0,1)}=-\\frac2{-3}=\\frac23.}\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Wir betrachten die Abbildung $F:\\mathbb R^2\\to\\mathbb R$, definiert durch\n\n$$\nF(x,y)=y^2-x^2(1-x^2).\n$$\n\nSei $P=(x_0,y_0)\\in\\mathbb R^2$ mit $F(x_0,y_0)=0$. Für welche dieser Punkte $P$ ist die Gleichung $F(x,y)=0$ lokal nach $y$ auflösbar? Bestimmen Sie gegebenenfalls die Ableitung von $y=f(x)$ an den entsprechenden Stellen $x_0$.",
        "solution": "Die Nullstellen erfüllen $y_0^2=x_0^2(1-x_0^2)$, insbesondere $|x_0|\\le1$. Es gilt\n\n$$\nF_x(x,y)=-2x+4x^3,\\qquad F_y(x,y)=2y.\n$$\n\nFür $y_0\\ne0$, also $0<|x_0|<1$, ist die Gleichung lokal eindeutig nach $y=h(x)$ auflösbar. Dabei\n\n$$\n\\boxed{h'(x_0)=-\\frac{F_x(x_0,y_0)}{F_y(x_0,y_0)}\n=\\frac{x_0-2x_0^3}{y_0}.}\n$$\n\nFür $y_0=0$ bleiben die Punkte $(0,0)$ und $(\\pm1,0)$:\n\nAm Ursprung gibt es die beiden glatten Lösungszweige\n\n$$\nh_+(x)=x\\sqrt{1-x^2},\\qquad h_-(x)=-x\\sqrt{1-x^2},\\qquad |x|<1,\n$$\n\nmit $h_+'(0)=1$ und $h_-'(0)=-1$. Die gesamte Nullstellenmenge ist dort jedoch kein eindeutiger Graph $y=h(x)$, da für beliebig kleine $x\\ne0$ zwei verschiedene $y$-Werte auftreten.\n\nBei $(\\pm1,0)$ existiert kein Lösungszweig auf einer offenen Umgebung von $x_0$: Jede solche Umgebung enthält $x$ mit $|x|>1$, für die $x^2(1-x^2)<0$ gilt.\n\nIm Sinne der eindeutigen lokalen Auflösung sind daher genau die Nullstellen mit $y_0\\ne0$ zulässig; einzelne differenzierbare Zweige existieren zusätzlich am Ursprung.",
        "sketch": null
      }
    ]
  },
  "B.5.5": {
    "id": "sheet-B.5.5",
    "number": "B.5.5",
    "sheet": 5,
    "source": "Übungsblatt 5 · B.5.5",
    "intro": "Sei $f:\\mathbb R^2\\to\\mathbb R$ der Klasse $C^1$, mit $f(2,-1)=-1$. Seien\n\n$$\nG(x,y,u)=f(x,y)+u^2\\quad\\text{und}\\quad H(x,y,u)=ux+3y^3+u^3.\n$$\n\nDie Gleichungen $G(x,y,u)=0$ und $H(x,y,u)=0$ haben die Lösung $(x,y,u)=(2,-1,1)$.",
    "parts": [
      {
        "label": "a",
        "prompt": "Welche Bedingungen an $Df$ stellen sicher, dass es $C^1$ Funktionen $x=g(y)$ und $u=h(y)$ gibt, die auf einer offenen Menge in $\\mathbb R$ definiert sind und beide Gleichungen erfüllen, so dass $g(-1)=2$ und $h(-1)=1$?",
        "solution": "Am Punkt $(2,-1,1)$ gilt $G=-1+1=0$ und $H=2-3+1=0$. Für die abhängigen Variablen $(x,u)$ und den Parameter $y$ lauten die Ableitungsblöcke\n\n$$\nA=\\frac{\\partial(G,H)}{\\partial(x,u)}(2,-1,1)\n=\\begin{pmatrix}f_x(2,-1)&2\\\\1&5\\end{pmatrix},\\qquad\nb=\\frac{\\partial(G,H)}{\\partial y}(2,-1,1)\n=\\begin{pmatrix}f_y(2,-1)\\\\9\\end{pmatrix}.\n$$\n\nDer Satz über implizite Funktionen liefert die gesuchten $C^1$-Funktionen, sofern\n\n$$\n\\boxed{\\det A=5f_x(2,-1)-2\\ne0.}\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Finden Sie unter den Bedingungen von (a) und unter der Annahme, dass $Df(2,-1)=[1\\ -3]$, die Ableitungen $g'(-1)$ und $h'(-1)$.",
        "solution": "Mit $Df(2,-1)=[1\\ -3]$ folgt durch Differenzieren beider Gleichungen nach $y$:\n\n$$\n\\begin{pmatrix}1&2\\\\1&5\\end{pmatrix}\n\\begin{pmatrix}g'(-1)\\\\h'(-1)\\end{pmatrix}\n=-\\begin{pmatrix}-3\\\\9\\end{pmatrix}\n=\\begin{pmatrix}3\\\\-9\\end{pmatrix}.\n$$\n\nSubtraktion der ersten von der zweiten Zeile ergibt $3h'(-1)=-12$. Daher\n\n$$\n\\boxed{h'(-1)=-4,\\qquad g'(-1)=3-2(-4)=11.}\n$$",
        "sketch": null
      }
    ]
  },
  "T.6.1": {
    "id": "sheet-T.6.1",
    "number": "T.6.1",
    "sheet": 6,
    "source": "Übungsblatt 6 · T.6.1",
    "intro": "Sei $E\\subseteq\\mathbb R^n$ offen und sei $f:E\\to\\mathbb R^n$.",
    "parts": [
      {
        "label": "a",
        "prompt": "Definieren Sie, was es bedeutet, dass $f$ auf $E$ $k$-mal stetig differenzierbar ist.",
        "solution": "Sei $E\\subset\\mathbb R^n$ offen. Eine Abbildung $f:E\\to\\mathbb R^n$ ist **$k$-mal stetig differenzierbar**, geschrieben $f\\in C^k(E,\\mathbb R^n)$, wenn alle partiellen Ableitungen ihrer Komponenten bis einschließlich Ordnung $k$ existieren und stetig sind. Äquivalent: $f$ ist $k$-mal differenzierbar und $D^kf$ ist stetig.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Geben Sie die Definition der Divergenz von $f$ in einem Punkt $x\\in E$ an.",
        "solution": "Für $f=(f_1,\\ldots,f_n)\\in C^1(E,\\mathbb R^n)$ ist die **Divergenz** in $x\\in E$ definiert durch\n\n$$\n\\operatorname{div}f(x)=\\sum_{i=1}^nD_if_i(x)=\\operatorname{tr}Df(x).\n$$",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Definieren Sie, was es bedeutet, dass eine Funktion auf $E$ zur Klasse $C^\\infty$ gehört.",
        "solution": "$f$ gehört zur Klasse **$C^\\infty$**, wenn $f\\in C^k$ für jedes $k\\in\\mathbb N$ gilt, also partielle Ableitungen jeder Ordnung existieren und stetig sind.",
        "sketch": null
      }
    ]
  },
  "B.6.1": {
    "id": "sheet-B.6.1",
    "number": "B.6.1",
    "sheet": 6,
    "source": "Übungsblatt 6 · B.6.1",
    "intro": "Sei $U\\subset\\mathbb R^n$ eine offene Menge. Beweisen Sie die folgenden Eigenschaften für $C^k$-Abbildungen:",
    "parts": [
      {
        "label": "a",
        "prompt": "Zeigen Sie, dass wenn $f,g\\in C^k(U)$, dann auch $f+g\\in C^k(U)$ und $f\\cdot g\\in C^k(U)$ gelten.",
        "solution": "Induktion über $k$. Für $k=0$ folgt die Behauptung aus der Stetigkeit von Summe und Produkt stetiger Funktionen.\n\nSei die Behauptung für $k-1$ bewiesen und seien $f,g\\in C^k(U)$. Für jedes $j$ gilt\n\n$$\nD_j(f+g)=D_jf+D_jg,\\qquad D_j(fg)=(D_jf)g+f(D_jg).\n$$\n\nAlle Funktionen auf der rechten Seite sind von Klasse $C^{k-1}$. Nach Induktionsvoraussetzung sind ihre Produkte und Summen ebenfalls von Klasse $C^{k-1}$. Somit sind alle ersten partiellen Ableitungen von $f+g$ und $fg$ von Klasse $C^{k-1}$, also $f+g,fg\\in C^k(U)$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Sei $f\\in C^k(U)$ und sei $\\varphi:V\\to\\mathbb R^n$ eine $C^k$-Abbildung mit $\\varphi(V)\\subset U$. Zeigen Sie, dass die Verkettung\n\n$$\nf\\circ\\varphi:V\\to\\mathbb R\n$$\n\nzur Klasse $C^k$ gehört.",
        "solution": "Sei $V$ offen und $\\varphi:V\\to\\mathbb R^n$ mit $\\varphi(V)\\subset U$. Wieder Induktion über $k$. Für $k=0$ ist die Verkettung stetiger Funktionen stetig. Für $k\\ge1$ gilt nach der Kettenregel\n\n$$\nD_j(f\\circ\\varphi)=\\sum_{i=1}^n(D_if\\circ\\varphi)\\,D_j\\varphi_i.\n$$\n\nNach der Induktionsvoraussetzung sind $D_if\\circ\\varphi$ von Klasse $C^{k-1}$. Auch $D_j\\varphi_i\\in C^{k-1}$. Nach (a) liegt die rechte Seite in $C^{k-1}$, also $f\\circ\\varphi\\in C^k(V)$.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Nennn Sie ein Beispiel für eine Funktion $f:\\mathbb R\\to\\mathbb R$, die zu $C^{k-1}$, aber nicht zu $C^k$ gehört.",
        "solution": "Für $k\\ge1$ setze\n\n$$\nf(t)=\\begin{cases}t^k,&t>0,\\\\0,&t\\le0.\\end{cases}\n$$\n\nFür $0\\le j\\le k-1$ gilt\n\n$$\nf^{(j)}(t)=\\begin{cases}\\dfrac{k!}{(k-j)!}t^{k-j},&t>0,\\\\0,&t\\le0.\\end{cases}\n$$\n\nDiese Ableitungen sind auch in $0$ stetig. Jedoch ist $f^{(k-1)}(t)=k!\\max\\{t,0\\}$ in $0$ nicht differenzierbar: Der linke Differenzenquotient ist $0$, der rechte $k!$. Damit $f\\in C^{k-1}(\\mathbb R)\\setminus C^k(\\mathbb R)$.",
        "sketch": null
      }
    ]
  },
  "B.6.2": {
    "id": "sheet-B.6.2",
    "number": "B.6.2",
    "sheet": 6,
    "source": "Übungsblatt 6 · B.6.2",
    "intro": "Sei $r=\\sqrt{x^2+y^2+z^2}$. Angenommen,\n\n$$\nF(x,y,z)=f(r)(x,y,z),\n$$\n\nwobei $f$ differenzierbar ist. Zeigen Sie, dass\n\n$$\n\\operatorname{div}F=3f(r)+rf'(r).\n$$",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Für $r=\\sqrt{x^2+y^2+z^2}>0$ gilt $\\partial_xr=x/r$ und entsprechend für $y,z$. Daher\n\n$$\n\\begin{aligned}\n\\operatorname{div}F\n&=\\partial_x(xf(r))+\\partial_y(yf(r))+\\partial_z(zf(r))\\\\\n&=f(r)+\\frac{x^2}{r}f'(r)+f(r)+\\frac{y^2}{r}f'(r)+f(r)+\\frac{z^2}{r}f'(r)\\\\\n&=\\boxed{3f(r)+rf'(r).}\n\\end{aligned}\n$$\n\nIst $f$ auch in $0$ definiert und differenzierbar, so folgt aus der Stetigkeit von $f$:\n\n$$\n\\frac{\\|F(h)-F(0)-f(0)h\\|}{\\|h\\|}=|f(\\|h\\|)-f(0)|\\longrightarrow0.\n$$\n\nDamit $DF(0)=f(0)I_3$ und $\\operatorname{div}F(0)=3f(0)$; die Formel gilt also auch in $0$.",
        "sketch": null
      }
    ]
  },
  "B.6.3": {
    "id": "sheet-B.6.3",
    "number": "B.6.3",
    "sheet": 6,
    "source": "Übungsblatt 6 · B.6.3",
    "intro": "Seien $f:\\mathbb R^n\\to\\mathbb R$ und $g:\\mathbb R^n\\to\\mathbb R$ so, dass $g(x)=f(x)+f(x)^5$ gilt. Angenommen, $f$ ist stetig und $g\\in C^r$, dann zeigen Sie, dass $f\\in C^r$ ist.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "Setze $q(t)=t+t^5$. Dann ist $q\\in C^\\infty(\\mathbb R)$ und\n\n$$\nq'(t)=1+5t^4>0.\n$$\n\nAlso ist $q$ streng monoton steigend; wegen $q(t)\\to\\pm\\infty$ für $t\\to\\pm\\infty$ ist $q:\\mathbb R\\to\\mathbb R$ bijektiv. Nach Theorem 2.17 besitzt $q$ eine $C^1$-Umkehrfunktion $h=q^{-1}$ mit\n\n$$\nh'(s)=\\frac1{1+5h(s)^4}.\n$$\n\nIst $h\\in C^j$, so ist die rechte Seite nach Produkt- und Kettenregel von Klasse $C^j$, also $h\\in C^{j+1}$. Induktiv folgt $h\\in C^\\infty$.\n\nAus $g=q\\circ f$ folgt $f=h\\circ g$. Wegen $g\\in C^r$ und $h\\in C^\\infty$ ergibt B.6.1(b)\n\n$$\n\\boxed{f\\in C^r(\\mathbb R^n).}\n$$",
        "sketch": null
      }
    ]
  },
  "B.6.4": {
    "id": "sheet-B.6.4",
    "number": "B.6.4",
    "sheet": 6,
    "source": "Übungsblatt 6 · B.6.4",
    "intro": "Sei $f:\\mathbb R^n\\to\\mathbb R^n$ durch die Gleichung $f(\\mathbf x)=\\|\\mathbf x\\|^2\\cdot\\mathbf x$ gegeben. Beweisen Sie die folgenden Eigenschaften:",
    "parts": [
      {
        "label": "a",
        "prompt": "Zeigen Sie, dass $f$ zur Klasse $C^\\infty$ gehört;",
        "solution": "Die Komponenten von $f(x)=\\|x\\|^2x$ sind\n\n$$\nf_i(x)=\\left(\\sum_{j=1}^nx_j^2\\right)x_i.\n$$\n\nSie sind Polynome, also $f\\in C^\\infty(\\mathbb R^n,\\mathbb R^n)$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Beweisen Sie, dass $f$ die Einheitskugel $B_1(\\mathbf0)$ mit Mittelpunkt $\\mathbf0$ und Radius $1$ bijektiv auf sich selbst abbildet.",
        "solution": "Für $x=r\\omega$ mit $r\\ge0$ und $\\|\\omega\\|=1$ gilt $f(x)=r^3\\omega$. Die Richtung bleibt erhalten und $r\\mapsto r^3$ bildet $[0,1)$ bijektiv auf $[0,1)$ ab. Explizit lautet die Umkehrfunktion\n\n$$\ng(y)=\\begin{cases}\\dfrac{y}{\\|y\\|^{2/3}},&y\\ne0,\\\\0,&y=0.\\end{cases}\n$$\n\nFür $y\\in B_1(0)$ gilt $\\|g(y)\\|=\\|y\\|^{1/3}<1$ und $f(g(y))=y$; ebenso $g(f(x))=x$. Somit bildet $f$ die Einheitskugel bijektiv auf sich ab.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Zeigen Sie, dass die Umkehrfunktion von $f$ in $\\mathbf0$ nicht differenzierbar ist.",
        "solution": "Für einen Einheitsvektor $e$ und $t>0$ gilt\n\n$$\n\\frac{g(te)-g(0)}t=\\frac{t^{1/3}e}{t}=t^{-2/3}e.\n$$\n\nDieser Quotient besitzt für $t\\downarrow0$ keinen endlichen Grenzwert. Also ist $g$ in $0$ nicht differenzierbar.",
        "sketch": null
      }
    ]
  },
  "B.6.5": {
    "id": "sheet-B.6.5",
    "number": "B.6.5",
    "sheet": 6,
    "source": "Übungsblatt 6 · B.6.5",
    "intro": "Für eine Funktion $u:\\mathbb R^n\\to\\mathbb R$ ist der Laplace-Operator wie folgt definiert:\n\n$$\n\\Delta u=\\frac{\\partial^2u}{\\partial x_1^2}+\\frac{\\partial^2u}{\\partial x_2^2}+\\ldots+\\frac{\\partial^2u}{\\partial x_n^2}.\n$$\n\nBerechnen Sie für jede der folgenden Funktionen $\\Delta u$.",
    "parts": [
      {
        "label": "a",
        "prompt": "$$\nu(x_1,x_2,x_3)=\\ln\\bigl(1+(x_1^2+x_2^2+x_3^2)^2\\bigr).\n$$",
        "solution": "Für $s=\\sum_{i=1}^nx_i^2$ und $u(x)=q(s)$ gilt\n\n$$\n\\partial_i u=2x_iq'(s),\\qquad\n\\partial_{ii}u=2q'(s)+4x_i^2q''(s),\\qquad\n\\Delta u=2nq'(s)+4sq''(s).\n$$\n\nSei $s=x_1^2+x_2^2+x_3^2$ und $q(s)=\\ln(1+s^2)$. Für $n=3$ folgt\n\n$$\n\\begin{gathered}\nq'(s)=\\frac{2s}{1+s^2},\\qquad q''(s)=\\frac{2(1-s^2)}{(1+s^2)^2},\\\\[4pt]\n\\boxed{\\Delta u=\\frac{12s}{1+s^2}+\\frac{8s(1-s^2)}{(1+s^2)^2}\n=\\frac{4s(5+s^2)}{(1+s^2)^2}.}\n\\end{gathered}\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "$$\nu(x_1,x_2,x_3)=e^{-(x^2+y^2+z^2)}\\cos(x_1x_2+x_2x_3+x_3x_1).\n$$",
        "solution": "Mit $(x,y,z)=(x_1,x_2,x_3)$ setze\n\n$$\ns=x_1^2+x_2^2+x_3^2,\\qquad p=x_1x_2+x_2x_3+x_3x_1,\\qquad u=e^{-s}\\cos p.\n$$\n\n$$\n\\begin{gathered}\n\\nabla e^{-s}=-2e^{-s}(x_1,x_2,x_3),\\qquad \\Delta e^{-s}=(4s-6)e^{-s},\\\\\n\\nabla p=(x_2+x_3,x_1+x_3,x_1+x_2),\\qquad\\Delta p=0,\\\\\n\\|\\nabla p\\|^2=2(s+p),\\qquad (x_1,x_2,x_3)\\cdot\\nabla p=2p,\\\\\n\\nabla\\cos p=-\\sin p\\,\\nabla p,\\qquad\\Delta\\cos p=-2(s+p)\\cos p.\n\\end{gathered}\n$$\n\nMit der Produktregel folgt\n\n$$\n\\begin{aligned}\n\\Delta u\n&=(\\Delta e^{-s})\\cos p+2\\nabla e^{-s}\\cdot\\nabla\\cos p+e^{-s}\\Delta\\cos p\\\\\n&=e^{-s}\\bigl[(4s-6)\\cos p+8p\\sin p-2(s+p)\\cos p\\bigr]\\\\\n&=\\boxed{e^{-s}\\bigl[(2s-2p-6)\\cos p+8p\\sin p\\bigr].}\n\\end{aligned}\n$$",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "$$\nu(x_1,x_2)=\\frac{\\sin(r^2)}{(1+r^2)^2},\\qquad r^2=x_1^2+x_2^2.\n$$",
        "solution": "Sei $s=r^2=x_1^2+x_2^2$ und $q(s)=\\sin s/(1+s)^2$. Für $n=2$ gilt\n\n$$\n\\begin{aligned}\nq'(s)&=\\frac{\\cos s}{(1+s)^2}-\\frac{2\\sin s}{(1+s)^3},\\\\\nq''(s)&=-\\frac{\\sin s}{(1+s)^2}-\\frac{4\\cos s}{(1+s)^3}+\\frac{6\\sin s}{(1+s)^4}.\n\\end{aligned}\n$$\n\n$$\n\\begin{aligned}\n\\Delta u=4q'(s)+4sq''(s)\n&=\\frac{4\\cos s-4s\\sin s}{(1+s)^2}\n-\\frac{8\\sin s+16s\\cos s}{(1+s)^3}\n+\\frac{24s\\sin s}{(1+s)^4}\\\\\n&=\\boxed{\\frac{4\\bigl[(1-2s-3s^2)\\cos s+(-2+3s-2s^2-s^3)\\sin s\\bigr]}{(1+s)^4}.}\n\\end{aligned}\n$$",
        "sketch": null
      },
      {
        "label": "d",
        "prompt": "$u(x_1,x_2,x_3)=f(x_1^2+x_2^2+x_3^2)$, wobei $f\\in C^2(\\mathbb R)$.",
        "solution": "Für $s=x_1^2+x_2^2+x_3^2$ und $u=f(s)$ erhält man unmittelbar\n\n$$\n\\boxed{\\Delta u=6f'(s)+4sf''(s).}\n$$",
        "sketch": null
      },
      {
        "label": "e",
        "prompt": "$$\nu(x_1,x_2,x_3)=\\frac1{(1+x_1^2+x_2^2+x_3^2)^k}.\n$$",
        "solution": "Sei $s=x_1^2+x_2^2+x_3^2$ und $q(s)=(1+s)^{-k}$. Für $n=3$ folgt\n\n$$\n\\begin{gathered}\nq'(s)=-k(1+s)^{-k-1},\\qquad q''(s)=k(k+1)(1+s)^{-k-2},\\\\[4pt]\n\\boxed{\\Delta u=-\\frac{6k}{(1+s)^{k+1}}+\\frac{4k(k+1)s}{(1+s)^{k+2}}\n=\\frac{2k\\bigl[(2k-1)s-3\\bigr]}{(1+s)^{k+2}}.}\n\\end{gathered}\n$$",
        "sketch": null
      },
      {
        "label": "f",
        "prompt": "$$\nu(x_1,\\ldots,x_n)=\\ln\\bigl(2026+(x_1^2+\\cdots+x_n^2)^2\\bigr).\n$$",
        "solution": "Sei $s=x_1^2+\\cdots+x_n^2$ und $q(s)=\\ln(2026+s^2)$. Dann\n\n$$\n\\begin{gathered}\nq'(s)=\\frac{2s}{2026+s^2},\\qquad q''(s)=\\frac{2(2026-s^2)}{(2026+s^2)^2},\\\\[4pt]\n\\boxed{\\Delta u=\\frac{4ns}{2026+s^2}+\\frac{8s(2026-s^2)}{(2026+s^2)^2}\n=\\frac{4s\\bigl[2026(n+2)+(n-2)s^2\\bigr]}{(2026+s^2)^2}.}\n\\end{gathered}\n$$",
        "sketch": null
      }
    ]
  },
  "T.7.1": {
    "id": "sheet-T.7.1",
    "number": "T.7.1",
    "sheet": 7,
    "source": "Übungsblatt 7 · T.7.1",
    "intro": "Formulieren Sie den Satz von Schwarz.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "**Satz von Schwarz (Theorem 2.26).** Sei $E\\subset\\mathbb R^2$ offen und $f:E\\to\\mathbb R$. Die partiellen Ableitungen $D_1f$, $D_{21}f$ und $D_2f$ mögen in jedem Punkt von $E$ existieren. Ist $D_{21}f$ in $(a,b)\\in E$ stetig, so existiert $D_{12}f(a,b)$, und\n\n$$\nD_{12}f(a,b)=D_{21}f(a,b).\n$$\n\nInsbesondere gilt für $f\\in C^2(E)$, $E\\subset\\mathbb R^n$ offen,\n\n$$\nD_{ij}f=D_{ji}f\\qquad(1\\le i,j\\le n),\n$$\n\nalso ist die Hesse-Matrix symmetrisch (Corollary 2.27).",
        "sketch": null
      }
    ]
  },
  "T.7.2": {
    "id": "sheet-T.7.2",
    "number": "T.7.2",
    "sheet": 7,
    "source": "Übungsblatt 7 · T.7.2",
    "intro": "Erläutern Sie den mehrdimensionalen Satz von Taylor.",
    "parts": [
      {
        "label": "",
        "prompt": "",
        "solution": "**Mehrdimensionaler Satz von Taylor (Theorem 2.29).** Sei $E\\subset\\mathbb R^n$ offen, $f\\in C^{k+1}(E)$ und $x\\in E$. Für $\\xi\\in\\mathbb R^n$ liege die gesamte Strecke $x+t\\xi$, $0\\le t\\le1$, in $E$. Dann existiert $\\theta\\in[0,1]$ mit\n\n$$\nf(x+\\xi)=\\sum_{|\\alpha|\\le k}\\frac{D^\\alpha f(x)}{\\alpha!}\\xi^\\alpha\n+\\sum_{|\\alpha|=k+1}\\frac{D^\\alpha f(x+\\theta\\xi)}{\\alpha!}\\xi^\\alpha.\n$$\n\nDabei bezeichnet $\\alpha=(\\alpha_1,\\ldots,\\alpha_n)\\in\\mathbb N_0^n$ einen Multiindex mit\n\n$$\n|\\alpha|=\\sum_{i=1}^n\\alpha_i,\\qquad\n\\alpha!=\\prod_{i=1}^n\\alpha_i!,\\qquad\n\\xi^\\alpha=\\prod_{i=1}^n\\xi_i^{\\alpha_i},\\qquad\nD^\\alpha=D_1^{\\alpha_1}\\cdots D_n^{\\alpha_n}.\n$$\n\nDie erste Summe ist das Taylorpolynom vom Grad höchstens $k$, die zweite der Restterm. Lokal ist dieser von Ordnung $O(\\|\\xi\\|^{k+1})$, da die Ableitungen der Ordnung $k+1$ auf einer hinreichend kleinen abgeschlossenen Kugel beschränkt sind. Für $k=2$ lautet die Formel\n\n$$\nf(x+\\xi)=f(x)+\\nabla f(x)\\cdot\\xi+\\frac12\\xi^\\top H_f(x)\\xi+R_2(\\xi),\n\\qquad R_2(\\xi)=O(\\|\\xi\\|^3).\n$$",
        "sketch": null
      }
    ]
  },
  "B.7.1": {
    "id": "sheet-B.7.1",
    "number": "B.7.1",
    "sheet": 7,
    "source": "Übungsblatt 7 · B.7.1",
    "intro": "Bestimmen Sie das Taylor-Polynom vom Grad $n$ am Punkt $a$ für die folgenden Funktionen:",
    "parts": [
      {
        "label": "a",
        "prompt": "$f:(0,\\infty)\\times(0,\\infty)\\to\\mathbb R$, $f(x,y)=\\log(1+x+y)$, mit $n=3$ und $a=(0,1)$;",
        "solution": "Der Entwicklungspunkt $(0,1)$ liegt nicht im angegebenen Definitionsbereich $(0,\\infty)^2$. Für die glatte Fortsetzung $f(x,y)=\\ln(1+x+y)$ auf $\\{1+x+y>0\\}$ ist die Entwicklung jedoch definiert.\n\nSetze $u=x$, $v=y-1$ und $\\rho=\\sqrt{u^2+v^2}$. Mit\n\n$$\n\\ln(2+t)=\\ln2+\\frac t2-\\frac{t^2}8+\\frac{t^3}{24}+O(t^4)\n$$\n\nfolgt für $t=u+v$ das Taylorpolynom\n\n$$\n\\boxed{T_3(f;(0,1))(x,y)=\\ln2+\\frac{x+y-1}2\n-\\frac{(x+y-1)^2}8+\\frac{(x+y-1)^3}{24}.}\n$$\n\nDer Restterm ist $O(\\rho^4)$.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "$g:\\mathbb R^3\\to\\mathbb R$, $g(x,y,z)=e^{yz}(\\cos x+\\sin z)$, mit $n=2$ und $a=(0,0,0)$.",
        "solution": "Setze $\\rho=\\sqrt{x^2+y^2+z^2}$. Es gilt\n\n$$\ne^{yz}=1+yz+O(\\rho^4),\\qquad\n\\cos x+\\sin z=1+z-\\frac{x^2}2+O(\\rho^3).\n$$\n\nMultiplikation und Zusammenfassen aller Terme bis zum Gesamtgrad $2$ ergeben\n\n$$\ng(x,y,z)=1+z-\\frac{x^2}2+yz+O(\\rho^3),\\qquad\n\\boxed{T_2(g;0)(x,y,z)=1+z-\\frac{x^2}2+yz.}\n$$",
        "sketch": null
      }
    ]
  },
  "B.7.2": {
    "id": "sheet-B.7.2",
    "number": "B.7.2",
    "sheet": 7,
    "source": "Übungsblatt 7 · B.7.2",
    "intro": "Sei $f:\\mathbb R^2\\to\\mathbb R$ durch folgende Funktion definiert:\n\n$$\nf(x,y)=\\ln(1+x+y^2)+e^{xy}.\n$$",
    "parts": [
      {
        "label": "a",
        "prompt": "Berechnen Sie die Taylor-Entwicklung zweiter Ordnung von $f$ im Punkt $(0,0)$ unter Verwendung bekannter Taylor-Entwicklungen für eine Variable.",
        "solution": "Der natürliche Definitionsbereich ist $D=\\{(x,y):1+x+y^2>0\\}$; er enthält eine offene Umgebung von $(0,0)$.\n\nMit $\\rho=\\sqrt{x^2+y^2}$ gilt\n\n$$\n\\begin{aligned}\n\\ln(1+x+y^2)\n&=(x+y^2)-\\frac12(x+y^2)^2+O(\\rho^3)\n=x+y^2-\\frac{x^2}2+O(\\rho^3),\\\\\ne^{xy}&=1+xy+O(\\rho^4).\n\\end{aligned}\n$$\n\nDamit lautet die Entwicklung\n\n$$\n\\boxed{f(x,y)=1+x-\\frac{x^2}2+xy+y^2+R_2(x,y),\\qquad R_2(x,y)=O(\\rho^3).}\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Schreiben Sie die Entwicklung in der Form\n\n$$\nf(x,y)=f(0,0)+\\nabla f(0,0)\\cdot(x,y)+\\frac12(x,y)H_f(0,0)(x,y)^\\top+R_2(x,y),\n$$\n\nwobei $R_2(x,y)$ den Restterm bezeichnet.",
        "solution": "In Matrixform:\n\n$$\nf(x,y)=1+\\begin{pmatrix}1&0\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}\n+\\frac12\\begin{pmatrix}x&y\\end{pmatrix}\n\\begin{pmatrix}-1&1\\\\1&2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}+R_2(x,y).\n$$",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Bestimmen Sie die Hesse-Matrix $H_f(0,0)$.",
        "solution": "Aus den quadratischen Termen folgt\n\n$$\n\\boxed{H_f(0,0)=\\begin{pmatrix}-1&1\\\\1&2\\end{pmatrix}.}\n$$",
        "sketch": null
      },
      {
        "label": "d",
        "prompt": "Überprüfen Sie Ihr Ergebnis durch direkte Berechnung der zweiten Ableitungen.",
        "solution": "Setze $q=1+x+y^2$. Die ersten Ableitungen sind\n\n$$\nf_x=\\frac1q+ye^{xy},\\qquad f_y=\\frac{2y}q+xe^{xy}.\n$$\n\nNochmals differenzieren ergibt\n\n$$\n\\begin{aligned}\nf_{xx}&=-\\frac1{q^2}+y^2e^{xy},\\\\\nf_{xy}=f_{yx}&=-\\frac{2y}{q^2}+(1+xy)e^{xy},\\\\\nf_{yy}&=\\frac2q-\\frac{4y^2}{q^2}+x^2e^{xy}.\n\\end{aligned}\n$$\n\nEinsetzen von $(0,0)$ liefert $f(0,0)=1$, $\\nabla f(0,0)=(1,0)$ und\n\n$$\nf_{xx}(0,0)=-1,\\qquad f_{xy}(0,0)=1,\\qquad f_{yy}(0,0)=2,\n$$\n\nin Übereinstimmung mit (b) und (c).",
        "sketch": null
      }
    ]
  },
  "B.7.3": {
    "id": "sheet-B.7.3",
    "number": "B.7.3",
    "sheet": 7,
    "source": "Übungsblatt 7 · B.7.3",
    "intro": "Sei $f:\\mathbb R^3\\to\\mathbb R$ durch folgende Funktion definiert:\n\n$$\nf(x,y,z)=\\frac{e^{x+y}-1}{1-z}+\\sin(xz)+y^2e^z.\n$$",
    "parts": [
      {
        "label": "a",
        "prompt": "Berechnen Sie die Taylor-Entwicklung zweiter Ordnung von $f$ im Punkt $(0,0,0)$ unter Verwendung bekannter Taylor-Entwicklungen für eine Variable.",
        "solution": "Die Funktion ist auf $D=\\{(x,y,z):z\\ne1\\}$ definiert und in einer Umgebung von $0$ glatt.\n\nSetze $\\rho=\\sqrt{x^2+y^2+z^2}$. Die eindimensionalen Entwicklungen liefern\n\n$$\n\\begin{aligned}\ne^{x+y}-1&=x+y+\\frac12(x+y)^2+O(\\rho^3),\\\\\n\\frac1{1-z}&=1+z+z^2+O(\\rho^3),\\\\\n\\sin(xz)&=xz+O(\\rho^6),\\\\\ny^2e^z&=y^2+O(\\rho^3).\n\\end{aligned}\n$$\n\nSomit\n\n$$\n\\frac{e^{x+y}-1}{1-z}=x+y+\\frac{x^2}2+xy+\\frac{y^2}2+xz+yz+O(\\rho^3),\n$$\n\nund insgesamt\n\n$$\n\\boxed{f(x,y,z)=x+y+\\frac{x^2}2+xy+\\frac32y^2+2xz+yz+R_2(x,y,z),}\n\\qquad R_2(x,y,z)=O(\\rho^3).\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Schreiben Sie die Entwicklung in der Form\n\n$$\nf(x,y,z)=f(0,0,0)+\\nabla f(0,0,0)\\cdot(x,y,z)+\\frac12(x,y,z)H_f(0,0,0)(x,y,z)^\\top+R_2(x,y,z),\n$$\n\nwobei $R_2(x,y,z)$ den Restterm bezeichnet.",
        "solution": "In Matrixform:\n\n$$\nf(x,y,z)=\\begin{pmatrix}1&1&0\\end{pmatrix}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}\n+\\frac12\\begin{pmatrix}x&y&z\\end{pmatrix}\n\\begin{pmatrix}1&1&2\\\\1&3&1\\\\2&1&0\\end{pmatrix}\n\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}+R_2(x,y,z).\n$$",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Bestimmen Sie die Hessematrix $H_f(0,0,0)$.",
        "solution": "Die Hesse-Matrix ist\n\n$$\n\\boxed{H_f(0,0,0)=\\begin{pmatrix}1&1&2\\\\1&3&1\\\\2&1&0\\end{pmatrix}.}\n$$",
        "sketch": null
      },
      {
        "label": "d",
        "prompt": "Überprüfen Sie Ihr Ergebnis durch direkte Berechnung der zweiten Ableitungen.",
        "solution": "Setze $A=e^{x+y}$ und $d=1-z$. Dann\n\n$$\n\\begin{aligned}\nf_x&=\\frac Ad+z\\cos(xz),\\\\\nf_y&=\\frac Ad+2ye^z,\\\\\nf_z&=\\frac{A-1}{d^2}+x\\cos(xz)+y^2e^z.\n\\end{aligned}\n$$\n\nDie zweiten Ableitungen lauten\n\n$$\n\\begin{aligned}\nf_{xx}&=\\frac Ad-z^2\\sin(xz),&\nf_{xy}&=\\frac Ad,\\\\\nf_{xz}&=\\frac A{d^2}+\\cos(xz)-xz\\sin(xz),&\nf_{yy}&=\\frac Ad+2e^z,\\\\\nf_{yz}&=\\frac A{d^2}+2ye^z,&\nf_{zz}&=\\frac{2(A-1)}{d^3}-x^2\\sin(xz)+y^2e^z.\n\\end{aligned}\n$$\n\nBei $0$ sind $A=d=1$. Somit $f(0)=0$, $\\nabla f(0)=(1,1,0)$ und\n\n$$\nf_{xx}(0)=1,\\quad f_{xy}(0)=1,\\quad f_{xz}(0)=2,\\quad\nf_{yy}(0)=3,\\quad f_{yz}(0)=1,\\quad f_{zz}(0)=0.\n$$\n\nDies bestätigt die Hesse-Matrix aus (c).",
        "sketch": null
      }
    ]
  },
  "B.7.4": {
    "id": "sheet-B.7.4",
    "number": "B.7.4",
    "sheet": 7,
    "source": "Übungsblatt 7 · B.7.4",
    "intro": "Wir betrachten die Funktion $f:\\mathbb R^2\\to\\mathbb R$, definiert durch\n\n$$\nf(x,y):=2x^4-3x^2y+y^2.\n$$",
    "parts": [
      {
        "label": "a",
        "prompt": "Bestimmen Sie alle kritischen Punkte von $f$.",
        "solution": "Es gilt\n\n$$\n\\nabla f(x,y)=(8x^3-6xy,\\,-3x^2+2y).\n$$\n\nAus $-3x^2+2y=0$ folgt $y=\\tfrac32x^2$. Einsetzen in die erste Gleichung ergibt\n\n$$\n8x^3-6x\\cdot\\frac32x^2=-x^3=0.\n$$\n\nDamit ist $\\boxed{(0,0)}$ der einzige kritische Punkt.",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Zeigen Sie, dass $f$ am kritischen Punkt $(0,0)$ kein lokales Minimum hat.",
        "solution": "Entlang der Parabel $y=\\tfrac32x^2$ gilt\n\n$$\nf\\left(x,\\frac32x^2\\right)=2x^4-\\frac92x^4+\\frac94x^4=-\\frac14x^4<0=f(0,0)\n\\qquad(x\\ne0).\n$$\n\nSolche Punkte liegen beliebig nahe bei $(0,0)$. Daher besitzt $f$ dort kein lokales Minimum.",
        "sketch": null
      },
      {
        "label": "c",
        "prompt": "Zeigen Sie, dass für jede Gerade durch $(0,0)$ die Beschränkung von $f$ auf diese Gerade ein lokales Minimum bei $(0,0)$ hat.",
        "solution": "Jede Gerade durch $0$ lässt sich als $(x,y)=(ta,tb)$ mit $(a,b)\\ne(0,0)$ parametrisieren. Die Einschränkung lautet\n\n$$\nf(ta,tb)=2a^4t^4-3a^2bt^3+b^2t^2\n=t^2\\bigl(b^2-3a^2bt+2a^4t^2\\bigr).\n$$\n\nIst $b\\ne0$, so ist der Klammerausdruck bei $t=0$ gleich $b^2>0$ und wegen seiner Stetigkeit auch für hinreichend kleine $|t|$ positiv. Für solche $t\\ne0$ gilt $f(ta,tb)>0$.\n\nIst $b=0$, so ist $a\\ne0$ und $f(ta,0)=2a^4t^4>0$ für $t\\ne0$. Auf jeder Geraden hat die Einschränkung somit in $0$ ein striktes lokales Minimum.",
        "sketch": null
      }
    ]
  },
  "B.7.5": {
    "id": "sheet-B.7.5",
    "number": "B.7.5",
    "sheet": 7,
    "source": "Übungsblatt 7 · B.7.5",
    "intro": "Wir betrachten die Funktion\n\n$$\nf:\\mathbb R^3\\to\\mathbb R,\\quad f(x,y,z)=x\\sin y+z^2.\n$$",
    "parts": [
      {
        "label": "a",
        "prompt": "Bestimmen Sie die Richtung, in der $f$ am Punkt $(1,0,1)^T$ am schnellsten ansteigt, und berechnen Sie die entsprechende Richtungsableitung.",
        "solution": "Die Funktion $f(x,y,z)=x\\sin y+z^2$ hat den Gradienten\n\n$$\n\\nabla f(x,y,z)=(\\sin y,x\\cos y,2z),\\qquad \\nabla f(1,0,1)=(0,1,2).\n$$\n\nFür einen Einheitsvektor $v$ gilt nach der Cauchy–Schwarz-Ungleichung\n\n$$\nD_vf(1,0,1)=\\nabla f(1,0,1)\\cdot v\\le\\|\\nabla f(1,0,1)\\|=\\sqrt5.\n$$\n\nGleichheit gilt in Richtung des normierten Gradienten. Daher\n\n$$\n\\boxed{v_{\\max}=\\frac1{\\sqrt5}(0,1,2)^\\top,\\qquad D_{v_{\\max}}f(1,0,1)=\\sqrt5.}\n$$",
        "sketch": null
      },
      {
        "label": "b",
        "prompt": "Finden Sie alle kritischen Punkte von $f$.",
        "solution": "Die Gleichung $\\nabla f(x,y,z)=0$ ist äquivalent zu\n\n$$\n\\sin y=0,\\qquad x\\cos y=0,\\qquad 2z=0.\n$$\n\nAlso $y=k\\pi$ mit $k\\in\\mathbb Z$ und $z=0$. Wegen $\\cos(k\\pi)=(-1)^k\\ne0$ folgt $x=0$. Die kritischen Punkte sind genau\n\n$$\n\\boxed{\\{(0,k\\pi,0):k\\in\\mathbb Z\\}.}\n$$",
        "sketch": null
      }
    ]
  }
};
