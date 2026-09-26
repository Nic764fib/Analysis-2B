# Einheitliche Taylor-Reste

Stand: 26.09.2026. Ergänzt die Klausurfassungen vom 25.09.2026.

## Konvention

- `f(x) = T_n(x) + R_n(x)`; `x` bezeichnet den gesamten Eingabevektor.
- `R_n` wird an der ursprünglichen Eingabe ausgewertet. Bei Verschiebung lautet dieselbe Schreibweise `R_n(a+h)`.
- Aus `C^(n+1)` in einer offenen Umgebung von `a` folgt lokal `|R_n(x)| <= C ||x-a||^(n+1)` für eine feste positive Konstante.
- `C` hängt nicht vom eingesetzten Punkt ab. Ein numerischer Wert ist nur bei einer verlangten konkreten Fehlerschranke erforderlich.
- Für `C^n` allein bleibt die Aussage erhalten, dass der durch `||x-a||^n` geteilte Rest gegen null geht. Insbesondere wird bei `C^2` keine kubische Schranke behauptet.
- Der Lagrange-Rest mit gemeinsamem Zwischenpunkt bleibt in der vollständigen Satzformulierung enthalten und heißt ausdrücklich `R_k`.
- Die Rechnung mit gekürzten Standardpolynomen wird als solche bezeichnet. Es gibt keine Gleichheit zwischen der ursprünglichen Funktion und einem endlichen Polynom ohne Rest.
- Der exakt verlangte Rest `x^3` bleibt erhalten; hier kann `C=1` gewählt werden.

## Umfang

Alle acht Taylor-Aufgaben im Klausurtraining, ihre zugehörigen Lösungen auf Blatt 7, Taylor-Modultheorie und Beispiele, ältere Trainingsfassungen, Rechenrezepte, Standardreihentabelle und generierte Zahlenvarianten verwenden diese Konvention. Die Erklärung von `R_n`, `C`, Nähe zum Entwicklungspunkt und den Regularitätsvoraussetzungen ist im Rezept aufklappbar und beim Spezialfall zweiter Ordnung zugänglich.

Aufgaben- und Karten-IDs, Aufgabenstellungen, erwartete Zahlen, Notizen und Lernstände bleiben erhalten. Die sieben Taylor-Abfragekarten fragen weiterhin ausdrücklich nach Polynomen; deshalb tragen die dortigen Polynome keinen Rest. PDF-Dateien wurden in diesem Auftrag nicht geändert.

## Prüfung

- Bestehende Inhalts-, KaTeX-, Zustands- und Zahlenvariantentests.
- Unabhängige symbolische Kontrolle der acht Taylorpolynome und ihrer Ableitungen.
- Browserprüfung des Klausurtrainings einschließlich gespeicherter Notizen und alter Sitzungen.
- 34 Ansichten auf Desktop und Handy: Taylor-Training, Theorie, Reihentabelle, Erklärung von C, Blattlösungen und Modulaufgaben; keine JavaScript- oder KaTeX-Fehler.
- Neue Lösungs- und Restformeln passen auf die geprüfte Handybreite. Bereits vorhandene lange Originalangaben und unveränderte Ableitungstabellen bleiben horizontal zugänglich.

Lokale Prüfberichte und Screenshots liegen im ignorierten Verzeichnis `tmp/taylor-rest/`.
