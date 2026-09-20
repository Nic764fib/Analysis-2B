# Abgleich der Theorie mit den Lecture Notes 2026

Stand: 20. September 2026. Primärquelle: die bereitgestellte `Lecture Notes.pdf` (67 PDF-Seiten; gedruckte Seitenzahlen beginnen auf PDF-Seite 4). Die Original-PDF wird nicht veröffentlicht.

Geprüft wurden die Theorieeinträge der Website auf Voraussetzungen, Quantoren, Aussage, Formel, lokale bzw. globale Gültigkeit und Zuordnung zur Quelle. Die deutschen Fassungen sind Übersetzungen, keine englischen Originalzitate. Die englischen Titel der benannten Aussagen werden separat angezeigt. Wo das Skript keinen eigenen Titel vergibt, ist die deutsche Überschrift als beschreibend gekennzeichnet.

## Ergebnis und Änderungen

- Sämtliche 46 nummerierten Definitionen, Theoreme, Lemmata, Propositionen und Korollare von 1.1–1.12 und 2.1–2.34 sind erfasst. Zusammengefasste Karten behalten beide Nummern und trennen die Aussagen im Text.
- Neun ergänzende Karten schließen die fehlenden Zuordnungen: Eindeutigkeit der Ableitung, Komponenten, Konvexität, invertierbare Operatoren, C¹-Umkehrbarkeit, lineare Blockauflösung, Vektorfelder, Rechteck-Mittelwerteigenschaft und Ableitungen entlang einer Strecke.
- Definition 2.13 und Theorem 2.14 sind klar getrennt. Beim Kriterium werden nur eine offene Definitionsmenge und die Abbildung vorausgesetzt; Differenzierbarkeit folgt aus stetigen partiellen Ableitungen.
- Die Definition höherer Ableitungen verwendet in Teil (i) wieder „selbst differenzierbar“ wie das Skript. Der schon markierte Indexfehler in Teil (ii) bleibt korrigiert.
- Definition 1.8 verwendet ausdrücklich „unendlich viele Indizes“. Dies vermeidet die Verwechslung mit unendlich vielen verschiedenen Folgewerten.
- Der Hinweis zu Theorem 2.30 behauptet unter bloßer Differenzierbarkeit nicht mehr ohne Zusatz, dass eine Niveaumenge einen Tangentialraum besitzt. Die orthogonale Beziehung zu differenzierbaren Kurven ist die unmittelbar anwendbare Aussage.
- Definition 2.31 nennt auch den Stetigkeitskontext aus Remark 2.6.2. Das lokale Vergleichskriterium bleibt unverändert.
- Das Hesse-Kriterium ist als Rechenhilfe aus Taylor gekennzeichnet. Es steht in den Lecture Notes nicht als eigener hinreichender Extremstellensatz.
- Beim gleichmäßigen Cauchy-Kriterium ist der Zielkörper einheitlich K ∈ {R, C}.
- Jeder Theorieeintrag trägt eine Herkunft: Lecture Notes, Übungsblatt/Grundlage dazu, Folgerung/Rechenhilfe oder vorausgesetzte Rechengrundlage. Insbesondere werden Arzelà–Ascoli, Majorantentest und Grenzübergangssätze nicht als nummerierte Originalaussagen der Lecture Notes ausgegeben.

Die eigenständige Ansicht **Satz erkennen** enthält Suche, englische Titel, inhaltliche Erkennungsmerkmale, Abgrenzungen und einen Modus „Beschreibung → Bezeichnung“. Die Kurzbeschreibungen ersetzen nicht die vollständigen Satzformulierungen. Lernfragen sind keine behaupteten Klausurzitate.

## Bewusst markierte Präzisierungen gegenüber dem Skript

- Banach: Der metrische Raum muss nichtleer sein. Die Originalformulierung nennt diese notwendige Voraussetzung nicht ausdrücklich.
- Cantor: Die endliche Schnittbedingung umfasst auch die leere Teilfamilie, damit der Randfall A = ∅ korrekt erfasst ist.
- Impliziter Satz: b ∈ W und die Einschränkung der Umgebung auf das Definitionsgebiet sind ausdrücklich genannt; die Originalfassung verwendet bereits g(b) = a.
- Höhere Ableitungen: Variablenindizes laufen über {1,…,n}, nicht über {1,…,k}.
- Gradient: Richtungsvektoren liegen in Rⁿ; an der betreffenden Skriptstelle steht versehentlich v ∈ E.
- Die inverse Ableitungsformel und Banachs Iterationsfehler stehen als Folgerungen aus den Beweisen, nicht als zusätzlich erfundene Teile der nummerierten Aussagen.

Dies sind keine inhaltlichen Erweiterungen um externe Lehrbuchtheoreme. Nachweislich problematische Skriptstellen werden nicht stillschweigend als mathematisch richtige Formulierungen ausgegeben.

## Nummerierte Aussagen und Lernkarten

| Skript | Bezeichnung auf der Website | Karten-ID |
|---|---|---|
| Definition 1.1 | Cauchy-Folge, Vollständigkeit, Banachraum, Hilbertraum | `complete` |
| Definition 1.2 | Kontraktion | `contraction` |
| Theorem 1.3 | Banachscher Fixpunktsatz | `banach` |
| Definition 1.4 | Überdeckung und offene Überdeckung | `compact-def` |
| Definition 1.5 | Folgen- und Überdeckungskompaktheit | `sequential`, `compact-def` |
| Theorem 1.6 | Cantorscher Durchschnittssatz | `cantor` |
| Definition 1.7 | Häufungspunkt einer Folge | `accumulation` |
| Definition 1.8 | Äquivalente Charakterisierung des Häufungspunkts | `accumulation` |
| Theorem 1.9 | Kompakt ⇔ folgenkompakt im metrischen Raum | `sequential` |
| Theorem 1.10 | Kompakt ⇒ abgeschlossen und beschränkt | `compact-closed` |
| Theorem 1.11 | Heine–Borel | `heine-borel` |
| Theorem 1.12 | Stabilitätseigenschaften der Kompaktheit | `stability` |
| Definition 2.1 | Differenzierbarkeit | `total` |
| Theorem 2.2 | Eindeutigkeit der Ableitung | `derivative-unique` |
| Theorem 2.3 | Kettenregel | `chain` |
| Theorem 2.4 | Mittelwertsatz für reellwertige Funktionen | `mean-scalar` |
| Theorem 2.5 | Mittelwertabschätzung für vektorwertige Kurven | `mean-vector` |
| Definition 2.6 | Komponenten | `components` |
| Theorem 2.7 | Komponentenweise Differenzierbarkeit | `components` |
| Definition 2.8 | Partielle Ableitung | `jacobi` |
| Theorem 2.9 | Matrixdarstellung der Ableitung | `jacobi` |
| Definition 2.10 | Konvexität | `convex` |
| Theorem 2.11 | Mittelwertungleichung / Lipschitz-Abschätzung | `mean` |
| Corollary 2.12 | Ableitung null ⇒ konstant | `zero-derivative` |
| Definition 2.13 | Stetige Differenzierbarkeit | `c1` |
| Theorem 2.14 | C¹-Kriterium über partielle Ableitungen | `c1` |
| Theorem 2.15 | Invertierbare Operatoren und stetige Inversion | `invertible-operators` |
| Definition 2.16 | C¹-Umkehrbarkeit | `c1-invertible` |
| Theorem 2.17 | Inverse Function Theorem / Umkehrsatz | `inverse-theorem` |
| Definition 2.18 | Lokaler und globaler Diffeomorphismus | `diffeo` |
| Theorem 2.19 | Offenheit bei überall invertierbarer Ableitung | `open-map` |
| Theorem 2.20 | Lineare Blockauflösung | `implicit-linear` |
| Theorem 2.21 | Implicit Function Theorem / impliziter Satz | `implicit-theorem` |
| Definition 2.22 | Vektorfeld | `vector-field` |
| Lemma 2.23 | Produktregel für den Gradienten | `field-products` |
| Proposition 2.24 | Produktregel für die Divergenz | `field-products` |
| Proposition 2.25 | Mean value property / Rechteck-Mittelwerteigenschaft | `rectangle-mean` |
| Theorem 2.26 | Schwarz mit den genauen Skriptvoraussetzungen | `schwarz` |
| Corollary 2.27 | Vertauschung gemischter Ableitungen bei C² | `schwarz-corollary` |
| Lemma 2.28 | Höhere Ableitungen entlang einer Strecke | `segment-derivatives` |
| Theorem 2.29 | Taylor mit Restglied | `taylor-theorem` |
| Theorem 2.30 | Stärkster Anstieg, Vorzeichenregel, Niveaumengen | `gradient-theorem` |
| Definition 2.31 | Lokale Minimum-/Maximumstelle | `local-extremum` |
| Theorem 2.32 | Notwendige Bedingung für innere Extremstellen | `critical-definition` |
| Definition 2.33 | Kritische Punkte und Werte | `critical-definition` |
| Theorem 2.34 | Notwendiges Kriterium für Randextrema | `boundary-extrema` |

Unnummerierte Begriffe und Definitionen sind zusätzlich erfasst: Skalarfeld, Gradient, Richtungsableitung, Divergenz, höhere Ableitungen/Cᵏ, Laplace-Operator, Multiindex-Notation und Hesse-Matrix. Der Bericht behauptet keine vollständige Reproduktion aller Beispiele, Bemerkungen und Beweise des Skripts.

## Prüfungen

`npm run check` prüft die Abdeckung aller 46 Nummern, eindeutige Zuordnung und Herkunft, deutsch-/englischsprachige Suchfälle, sämtliche Formeln, bestehende Aufgabenreferenzen und Lernstandsübernahme. Die mathematische Übereinstimmung wurde am Quelltext des PDFs geprüft; automatische Tests allein können sie nicht nachweisen. Zweifelhafte PDF-Extraktionen wurden an gerenderten Originalseiten kontrolliert.

Browserprüfung: Suche nach endlicher Teilüberdeckung und „Mean value property“, Filter, Aufdecken und Weiterblättern im Zuordnungstraining, direkte Theorielinks, reguläre Satzabfrage sowie Darstellung auf kleinem Bildschirm.
