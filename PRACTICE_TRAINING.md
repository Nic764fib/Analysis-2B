# Klausurtraining: Auswahl, Lernablauf und Prüfung

Stand: 22. September 2026. 32 kuratierte Aufgaben, 12 Verfahren, jeweils acht Aufgaben aus vier Schwerpunkten. Die Zahl ist ein Inhaltsumfang und kein Pflichtpensum. Theorieabfrage und ihre 24 ausgewählten Karten bleiben unverändert.

Aktualisierung der Musterlösungen am 25. September 2026: Alle 32 Aufgaben mit 50 Teilaufgaben verwenden kompakte Klausurfassungen aus `practice-worked.js`. Grundlage ist der inzwischen 44-seitige Rechenguide `Analysis_IIb_Rechenguide_Injektivitaet_vereinfacht.pdf`. Rechnung und notwendige Begründung stehen in der Musterlösung; ausführliche Lernhilfen bleiben im Rezept. Einzelabgleich und Prüfumfang: [EXAM_SOLUTIONS_AUDIT.md](EXAM_SOLUTIONS_AUDIT.md).

## Quellen und Grenzen

Die Dozenten-Mail nennt Kompaktheit, Umkehrfunktionen, implizite Funktionen und Taylor als Schwerpunkte, ohne die anderen Vorlesungsthemen auszuschließen. Der Bericht 2026 erinnert Aufgaben aus diesen Bereichen; die Erinnerung an Umkehrfunktionen ist ausdrücklich unsicher. Er ist keine Originalklausur und begründet keine Prozentprognosen. Darauf folgen die aktuellen Lecture Notes, passende Blattaufgaben 3–7 und ergänzend die Originalklausur 2025. Einzelfragen aus dem Chat haben die Verteilung nicht bestimmt.

Gelesen und abgeglichen: Lecture Notes 1.11–1.12, 2.17, 2.21, Beispiel 9–10 und 2.29; Blätter 3, 4, 5, 7; die relevanten Rechenrezepte und Beispiele im bestehenden 26-seitigen Rechenguide. Die Rezeptseiten sind 2–5, 6–12, 13–17 und 18–26. Original-PDFs und private Nachrichten werden nicht in `dist` veröffentlicht.

Umfangreiche allgemeine Beweise (etwa Beweis des Umkehrsatzes oder Banach) sind kein eigener Trainingsstrang. Notwendige Begründungen der konkreten Aufgaben sind vollständig enthalten. Die übrigen Themen bleiben in ihren bisherigen Modulen zugänglich. Die Fokussierung ist keine amtliche Stoffabgrenzung.

## Mathematische Quellenkorrekturen

- B.3.4(d): Die Quotientenmenge muss ohne zusätzliche Bedingung nicht kompakt sein. `k-operations` enthält das Gegenbeispiel und die hinreichende Zusatzannahme `0 ∉ A`.
- B.3.3: Ein Schnitt einer Familie kompakter Mengen benötigt für die allgemeine Stabilitätsaussage eine nichtleere Indexmenge. Das konkrete Training verwendet `n ≥ 1`.
- B.5.3: Die dritte Komponente ist im Original `r cos ψ`, nicht `r cos φ`. Die Aufgabe verwendet die tatsächliche Angabe samt passender Determinante.
- Klausur 2025, Aufgabe 3(b): Der Originalpunkt liefert `(-4,0)`. `p-exam` kennzeichnet in der Aufgabenstellung die Korrektur `+4` in der ersten Komponente.
- B.7.1(a): Der Punkt `(0,1)` liegt nicht im ursprünglich genannten positiven Quadranten. `t-log-shift` bezeichnet ausdrücklich die glatte Fortsetzung auf `1+x+y>0`.
- B.7.2 und B.7.3: Natürliche Definitionsmengen statt der zu weit gefassten Angabe des gesamten euklidischen Raums.

## Lernablauf

Eine Aufgabe ist sofort sichtbar. Ansatzfrage, schrittweise Hinweise, passendes Rezept, kurze Zahlenfelder und Notiz sind freiwillig. Die Musterlösung ist jederzeit erreichbar. Keine Uhr, Pflichtreihenfolge, Freischaltung oder automatische Note. Die Aufgabenstellung bleibt über der Lösung erhalten; ein Sprunglink führt zurück. Die Rezepte folgen dem Rechenguide; für Taylor werden zusätzlich nur die benötigten Standardreihen eingeblendet.

Alle Aufgaben haben eine konkrete Auswahlfrage mit erklärenden Rückmeldungen zu sämtlichen Optionen. Die Position der richtigen Antwort wird pro Bearbeitung reproduzierbar gemischt. Der erste Versuch bleibt gespeichert. Eine Auswahlantwort gilt allein nie als vollständige Lösung. Numerische Prüfungen unterscheiden exakte rationale Werte; `0,5`, `1/2` und `2/4` sind gleichwertig. Bei ungültigen und leeren Eingaben wird keine mathematische Fehlleistung unterstellt. Symbolische Beweise und längere Ausdrücke werden nicht automatisch benotet.

Die drei Gesamtbewertungen sind explizite Selbsteinschätzungen. Hinweise, geöffnetes Rezept, erste Ansatzfehler und korrigierte Zahlenfehler werden zusätzlich dokumentiert. Wer trotz Hilfen „selbstständig“ angibt, behält seine Angabe; sie wird im Lernstand mit dem Hilfevermerk versehen und von der Auswahlregel nicht als unbeeinflusster Erfolg behandelt. Lösungsvergleich allein ist keine behauptete Fehlleistung.

## Auswahlregel

`practice-engine.js` wählt aus einem festen, mathematisch geprüften Bestand. Quellenbasierte Anfängerbeispiele beginnen den Ablauf; anfangs werden alle vier Themen angeboten. Neue Verfahren und unbekannte Varianten erhalten Vorrang vor unnötiger Wiederholung. Schwierige Verfahren erhalten nach mindestens zwei anderen Bearbeitungen einen Bonus für eine verwandte Variante. Wiederholte identische Varianten werden abgewertet. Ein zunächst selbstständig gelöstes Verfahren wird zunächst zurückgestellt und nach einem Tag wieder stärker berücksichtigt. Die Zeit wird nur für die Wiederholung verwendet, nicht als Bearbeitungszeit gemessen oder angezeigt.

Bei gemischter Auswahl werden zuletzt vernachlässigte Themen berücksichtigt. Es gibt keine starre vierteilige Rotationsfolge. Eine einzelne Schwäche darf kein Thema dauerhaft verdrängen. Die Gewichtungen sind nachvollziehbare Gestaltungsentscheidungen, kein wissenschaftlich kalibrierter Beherrschungswert. Eine ungeöffnete Hilfe, bloßes Lesen oder Überspringen ist keine Bewertung. Freie Themen-, Verfahrens- und Aufgabenwahl bleibt möglich.

## Daten und Erhalt

Der bestehende Schlüssel `analysis2b-v1` bleibt bestehen. Der neue Bereich liegt getrennt in `state.practice`. Bisherige Notizen, Markierungen, Sätze-Wiederholungen und `examSessions` bleiben erhalten. Sie werden nicht in neue Erfolgsbewertungen umgerechnet. Alte Trainingsnotizen bleiben unter „Auswahl und Lernstand“ les- und editierbar. Frühere neue Bearbeitungen lassen sich dort einschließlich eigener Notizen erneut öffnen.

Gespeichert werden konkrete Aufgaben-ID, Bearbeitungs-ID, Eingaben, erste Ansatzantwort, numerische Teilergebnisse, Hilfen, offene Bereiche, Notiz und ausdrücklich abgegebene Bewertung. Eine neue Bearbeitung überschreibt keine frühere. Export/Import umfasst den neuen Bereich. Import validiert IDs, Felder und Datentypen. Veraltete Links zu `#/satznamen` führen zur Satzabfrage; Erkennungshinweise und englische Titel auf Theoriekarten bleiben erhalten.

## Wissenschaftliche Grundlage

- Der [IES-Leitfaden](https://ies.ed.gov/ncee/wwc/PracticeGuide/1) empfiehlt zeitlich verteiltes Lernen, aktives Abrufen und den Wechsel zwischen ausgearbeiteten Beispielen und eigenständigem Lösen. Die freiwilligen Hilfen und erneuten Anwendungen setzen diese Grundprinzipien um.
- [Butler & Roediger (2008)](https://pubmed.ncbi.nlm.nih.gov/18491500/) untersuchten korrigierende Rückmeldung nach Auswahlfragen. Deshalb werden falsche Optionen unmittelbar erklärt und nicht als ungeklärte Alternativen stehen gelassen.
- [Rohrer, Dedrick & Burgess (2014)](https://pubmed.ncbi.nlm.nih.gov/24578089/) fanden Vorteile gemischten Mathematikübens in einer Schulstudie. Dies begründet das Üben der Verfahrenswahl; es beweist keine bestimmte Zeitersparnis im Hochschulkurs.

## Abgleich mit dem finalen Rechenguide

Alle 32 Aufgaben wurden mit `Analysis_IIb_Rechenguide_Implizite_Matrixformel.pdf` abgeglichen. Aufgaben- und Verfahrens-IDs, Angaben, Auswahl, Zahlenantworten und Lernstand bleiben erhalten. Die Seitenverweise beziehen sich auf die gedruckten Seitenlabels des Guides, einschließlich der eingefügten Buchstabenseiten.

- Lokale Umkehrbarkeit und Umkehrableitung verwenden dasselbe durchgehende Rezept: Punkt klären, Voraussetzungen und Jacobi-Matrix prüfen, bei reiner Existenzfrage aufhören, sonst dieselbe Zahlenmatrix invertieren.
- Die Polaraufgaben führen von der Norm der Ausgabe über die möglichen Radien und Winkel zur Mengenformel, einschließlich Rändern und Nachweis, dass alle genannten Punkte erreicht werden. Die Injektivitätsbeweise vergleichen ausdrücklich zwei beliebige zulässige Eingaben.
- Implizite Systeme verwenden einheitlich die 2×2-Inversionsformel und danach `A⁻¹(−B)`. B.5.5 unterscheidet den Funktionswert von den erst in Teil (b) gegebenen Ableitungsdaten. Die korrigierte Klausuraufgabe zeigt Nullstellencheck, sämtliche partiellen Ableitungen, Spaltenwahl, Determinante, Inversion und Matrix-Vektor-Produkt.
- Taylor ergänzt fehlende Schritte beim Gesamtgrad und beim Ablesen der Hesse-Matrix. Die ursprünglichen direkten Ableitungskontrollen B.7.2(d)/B.7.3(d) und die bestehenden Restabschätzungen bleiben erhalten. Kompaktheit ergänzt die Ausgangsmenge bei stetigen Bildern und den vollständigen Quotienten-Gegenbeispielnachweis.
- `practice-worked.js` ergänzt nur die Trainingslösungen übernommener Aufgaben. Beim Zusammenführen ersetzt ein solcher Rechenweg die Kurzlösung; die Originalangaben und die Lösungen im Bereich „Übungsblätter“ bleiben unverändert.

### Kompaktheit: Abgleich mit den ergänzten Musterlösungen

Die acht Kompaktheitsaufgaben wurden zusätzlich mit `Analysis_IIb_Rechenguide_Kompaktheit_Aufgabentypen.pdf` (S. 2–4e) geprüft:

- `k-operations` trennt Ausgangsmenge, stetige Abbildung und Bildgleichheit für Summe und Produkt. Das Quotienten-Gegenbeispiel verwendet wie der Guide das kompakte Intervall `[0,1]` und die Quotienten `1/(1/n)=n`. Die Zusatzannahme `0 ∉ A` bleibt eine hinreichende Bedingung; ihr Fehlen behauptet nicht in jedem Einzelfall Nichtkompaktheit.
- `k-unions` begründet die Mengenidentitäten für Schnitt, endliche und unendliche Vereinigung jeweils vor der Kompaktheitsentscheidung.
- Halbring und Ellipse folgen „Urbild → abgeschlossen, Norm → beschränkt, Heine–Borel → kompakt“. Beim unbeschränkten Hyperbelgraphen wird Abgeschlossenheit über `q(x,y)=xy`, `p(x,y)=x` und die abgeschlossenen Zielmengen `{1}`, `[0,1]` gezeigt. Der kompakte Graph folgt dem vollständigen Bildbeweis auf S. 2b.
- Die korrekten Folgenbeweise bei `k-open` und `k-sequence` bleiben erhalten. Die Rezepte und betroffenen Hinweise entsprechen den überarbeiteten Lösungen.
- Auch die vier Lösungen von B.3.4 in den Übungsblättern und den daraus gespeisten Modulaufgaben verwenden diese Muster. B.3.3 bleibt im allgemeinen metrischen Raum formuliert; dort wird Heine–Borel nicht unzulässig eingesetzt.

Aufgabenstellungen, IDs, Zahlenantworten, Lernstand und Theorieabfrage bleiben unverändert.

## Prüfung

Die Trainingsaufgabe `i-square-image` verwendet den algebraischen Bildbeweis: Ausgabekomponenten ablesen, `u²+v²` ausmultiplizieren, die Eingabeschranke einsetzen, `v=2xy ≥ 0` prüfen und die Erreichbarkeit jedes oberen Halbkreises begründen. Die Skizzen zeigen die Viertelscheibe mit Radius 2 und die obere Halbkreisscheibe mit Radius 4. Das aufgabenspezifische Rezept und die Hinweise folgen demselben Weg; alle anderen Aufgaben verwenden weiterhin ihre bisherigen Rezepte. Aufgaben-ID und Angaben bleiben erhalten. Der Originaltext von B.4.4 im Bereich Übungsblätter bleibt unverändert.

- `node scripts/check.mjs`: vorhandene Modul-, Theorie-, Wiederholungs- und Mathematikprüfungen plus Aufgabenbestand, sämtliche Aufgabenformeln, Antwortparser, Import, Verfahrenabdeckung und Variantenzugänglichkeit. Simuliert Überspringen, selbstständiges Lösen und dauerhafte Schwierigkeiten in einem Thema.
- `python scripts/verify-practice-math.py` mit SymPy nach dem Node-Check: unabhängige symbolische Ableitungen, Nullstellen, Matrixinversionen, Blockgleichungen und Taylorpolynome. Alle 21 Aufgaben mit Zahlenfeldern werden gegen die tatsächlich ausgelieferte Datenbank geprüft. Die acht Taylorpolynome werden über eine unabhängige eindimensionale Hilfsvariable entwickelt.
- `node scripts/check-practice-browser.mjs` mit Playwright/Edge: alle 32 Aufgaben mit offenen Hilfen und Lösung auf 1400 und 390 Pixel Breite, KaTeX-Fehler, Seitenüberlauf, Unterbrechung/Neuladen, Eingaben, falsche/unbekannte/richtige Ansätze, Bewertung, Überspringen, Alt-Daten und Theorieabfrage. `CHECK_URL` erlaubt denselben Test gegen die veröffentlichte Version; `PLAYWRIGHT_PATH` erlaubt einen vorhandenen lokalen Playwright-Pfad.
- Visuelle Prüfung von Einstiegsansicht, Hinweisen, Rezept und ausführlichen Lösungen: Kompaktheit, inverse Ableitung, mehrspaltige implizite Ableitung und verschobenes Taylorpolynom. Lange Matrizen dürfen auf schmalen Displays innerhalb ihrer Formel horizontal gescrollt werden; die Seite selbst bleibt innerhalb des Bildschirms.

Die Kompaktheitsargumente wurden inhaltlich geprüft: durch stetige Urbilder, Normschranken, explizite Folgen innerhalb der Menge, endliche Teilüberdeckung bei Folge plus Grenzpunkt, stetige Bilder kompakter Ausgangsmengen und konkrete Mengenidentitäten. Endliche Stichproben werden nicht als Beweis von Kompaktheit ausgegeben.

## Aufgabenbestand

Die folgende Tabelle wird aus dem ausgelieferten Bestand erzeugt. „Stufe“ dient nur der anfänglichen Auswahl; es gibt keine gesperrten Stufen in der Oberfläche.

| ID | Verfahren | Quelle | Lernzweck |
|---|---|---|---|
| k-annulus | closed | Eigene Anwendung · Lecture Notes 1.11; Rechenguide S. 2–4; Grundaufgabentyp im Erinnerungsbericht 2026 | Mehrere abgeschlossene Bedingungen und eine gemeinsame Normschranke verbinden. |
| k-ellipse | closed | Eigene Anwendung · Lecture Notes 1.11; Rechenguide S. 2–4; Grundaufgabentyp im Erinnerungsbericht 2026 | Auch ohne unmittelbar vorgegebene Normquadratschranke eine einfache Schranke gewinnen. |
| k-open | noncompact | Eigene Anwendung · Lecture Notes 1.11; Rechenguide S. 2–4; Grundaufgabentyp im Erinnerungsbericht 2026 | Einen fehlenden Randpunkt durch eine konkrete Folge nachweisen. |
| k-hyperbola | noncompact | Eigene Variante · Kompaktheit und stetigen Bildern | Unbeschränktheit von fehlender Abgeschlossenheit unterscheiden. |
| k-sequence | noncompact | Eigene Variante · Lecture Notes Beispiel 3, Satz 1.11; Rechenguide S. 4 | Dieselbe beschränkte Punktmenge mit und ohne ihren Grenzpunkt vergleichen. |
| k-graph | images | Eigene Anwendung · Lecture Notes 1.12; stetige Bilder kompakter Mengen | Einen Graphen unmittelbar als stetiges Bild eines kompakten Intervalls erkennen. |
| k-operations | images | Anwendung von B.3.4(a,c,d) · Rechenguide S. 4a–4b | Stetige Bilder kompakter Mengen verwenden und beim Quotienten die Zusatzbedingung am Nenner prüfen. |
| k-unions | images | Eigene konkrete Variante · B.3.3; Lecture Notes 1.12 | Endliche und unendliche Vereinigung sowie einen Schnitt unterscheiden. |
| i-powers | local | Originaltyp · B.5.2; Lecture Notes 2.17 | Variable Exponenten richtig ableiten und die Menge aller regulären Punkte bestimmen. |
| i-space | local | Originalaufgabe · Übungsblatt 5 · B.5.3 | Das lokale Kriterium auf eine konkrete 3×3-Jacobi-Matrix übertragen; die tatsächliche Formel lesen. |
| i-polar | image | Originaltyp · B.4.3; Lecture Notes 2.17 | Radius, Winkel und mitgenommene Randstücke in die Bildmenge übertragen. |
| i-square-image | image | Zahlenvariante · B.4.4 mit Radius 2 | Die Bildmenge durch Ausmultiplizieren, Norm und Vorzeichen bestimmen und ihre Vollständigkeit begründen. |
| i-exp | image | B.4.5 / Lecture Notes Beispiel 9; Zusatzfrage zum erweiterten Gebiet | Lokale Umkehrbarkeit, globale Injektivität und vollständige Bildbeschreibung verbinden. |
| i-triangle | inverseDerivative | Eigene Variante · Variante zum Umkehrsatz | Globale Inverse durch Auflösen finden und die inverse Ableitung kontrollieren. |
| i-double | inverseDerivative | Eigene Variante · B.4.5 | Das Verfahren bei verändertem innerem Winkel vollständig anwenden. |
| i-square-inverse | inverseDerivative | Eigene Kombination · B.4.4–B.4.5; Lecture Notes 2.17 | Eine zulässige Inversenverzweigung erkennen, das Urbild lösen und die Zahlenmatrix invertieren. |
| p-exp | scalar | Originaltyp · B.5.4(a); Lecture Notes 2.21 | Nullstelle, passende partielle Ableitung und Ableitungsquotient der Reihe nach prüfen. |
| p-ellipse | scalar | Eigene Variante · B.5.4 | Den Ableitungsquotienten an die tatsächlich gesuchte Variable anpassen. |
| p-circle | scalar | Eigene Variante · B.5.4(b); Lecture Notes 2.21 | Bei verschwindender partieller Ableitung den Satz korrekt einordnen und die andere Richtung prüfen. |
| p-system | system | Eigene Variante · Lecture Notes 2.21; B.5.5 | Eine vollständige Blockrechnung mit übersichtlichen Zahlen durchführen. |
| p-sheet | system | Originalaufgabe · Übungsblatt 5 · B.5.5 | Mit unbekannter Funktion und vorgegebenem Df statt einer expliziten Formel arbeiten. |
| p-exam | system | Altklausur 2025, Aufgabe 3(b) · ausdrücklich korrigierte Übungsfassung: +4 in F₁ | Eine vollständige mehrteilige Klausuranwendung mit Nullstellencheck, Jacobi-Matrix und Lösungsableitung. |
| p-multifree | multifree | Eigene Variante · Lecture Notes · Example 10 | Beide Spalten einer Lösungsableitung berechnen statt nur einer Richtung. |
| p-multifree-shift | multifree | Eigene Variante · Lecture Notes 2.21 und Beispiel 10 | Am Punkt auswerten und das Minus bei einem negativen freien Block richtig behandeln. |
| t-logexp | series | Originalaufgabe · Übungsblatt 7 · B.7.2 | Standardreihen einsetzen, nach Gesamtgrad kürzen und durch direkte Ableitungen kontrollieren. |
| t-product | series | Originaltyp · B.7.1(b); Lecture Notes 2.29 | Die Ordnung eines inneren Produkts nutzen, um unnötige Potenzen wegzulassen. |
| t-log-shift | shift | B.7.1(a) · korrigiert auf der natürlichen offenen Definitionsmenge | Einen verschobenen Punkt und eine Entwicklung dritter Ordnung behandeln. |
| t-shift | shift | Eigene Variante · B.7.1–B.7.2 | Verschiebung, Einsetzen und Hesse-Matrix in einer zusammenhängenden Aufgabe verbinden. |
| t-exp-shift | shift | Eigene Variante · B.7.1–B.7.2; Lecture Notes 2.29 | Einen verschobenen Punkt mit einfachen Standardreihen einüben; auch den Zusatzterm verschieben. |
| t-fraction | hessian | Originalaufgabe · Übungsblatt 7 · B.7.3 | Die vollständige dreidimensionale Blattaufgabe einschließlich unabhängiger Ableitungskontrolle lösen. |
| t-read | hessian | Eigene Anwendung · B.7.2(b–d); Lecture Notes 2.25–2.29 | Den Faktor 1/2 bei reinen und gemischten quadratischen Termen richtig behandeln. |
| t-read-shift | hessian | Eigene Variante · B.7.1–B.7.2; Lecture Notes 2.29 | Die Ableitungen am richtigen Entwicklungspunkt aus einer zusammengesetzten Reihe ablesen. |
