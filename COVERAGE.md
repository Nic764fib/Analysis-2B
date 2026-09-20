# Stoffabgleich

Die sichtbaren Inhalte werden in `dist/curriculum.js` zusammengestellt: 12 Module, 65 Theorieeinträge und 63 Aufgaben. Die Startseite priorisiert die vier Schwerpunkte der aktuellen Prüfungsinformationen. Banach, höhere Ableitungen, Gradient, Extremstellen und B.3.2 gehören ausdrücklich zum weiteren relevanten Übungsstoff. Benötigte Grundlagen sind direkt verlinkt. Modulnummern und vorhandene IDs bleiben erhalten.

Unter „Übungsblätter“ sind alle 48 Aufgaben der Blätter 1–7 mit 105 Angabe-Lösung-Paaren enthalten, einschließlich der T.-Aufgaben. Originalangaben bleiben unverändert; Fehlerkorrekturen stehen getrennt in den Lösungen. Die Module verwenden dieselben Teilaufgabendaten.

| Quelle | Umsetzung |
|---|---|
| Altklausur 2025, Aufgabe 1 | Kettenregel, Mittelwertungleichung mit Beweis, konkretes Matrixprodukt |
| Aufgabe 2 | Umkehrsatz, Injektivität und Bild der Exponential-Polarkoordinaten, inverse Ableitung |
| Aufgabe 3 | Impliziter Funktionensatz, Originalfehler und ausdrücklich gekennzeichnete Reparatur |
| Aufgabe 4 | Laplace-Definition, Schwarz in der genauen Skriptfassung, Invarianzbeweis |
| Mail und Prüfungsberichte | Kompaktheit, Umkehrsatz, implizite Funktionen und Taylor als Schwerpunkte 2026; Erinnerungsbericht ausdrücklich von der offiziellen Altklausur getrennt |
| T.1.1–T.1.2 | Punktweise/gleichmäßige Konvergenz, Folgen-, Nullfolgen- und Cauchy-Kriterium |
| T.2.1–T.2.2 | Vollständigkeit, Integration/Grenzübergang, gliedweise Differentiation |
| T.3.1–T.3.2 | Banach-/Hilbertraum, Banachs Fixpunktsatz, Kompaktheit/Folgenkompaktheit |
| T.4.1–T.4.2 | Cantor, Heine–Borel, Umkehrsatz |
| T.5.1–T.5.2 | Lokale/globale Diffeomorphismen, impliziter Funktionensatz |
| T.6.1 | Cᵏ, C∞, Divergenz |
| T.7.1–T.7.2 | Schwarz und Taylor |
| B.1.1–B.1.5 | Alle Aufgaben mit getrennten Angabe-Lösung-Paaren |
| B.2.1 | Alle drei Räume; Beweisskizzen für die positiven Fälle, konkreter Gegenbeweis für c₀₀ |
| B.2.2 | Vollständiger Beweis beider Teile, einschließlich Supremumsnorm-Kriterium |
| B.2.3–B.2.5 | Beide Integralbeispiele, beide Ableitungsbeispiele, Vektorgrenzwert und Normäquivalenz |
| B.3.1–B.3.5 | Alle Aufgaben; gemeinsame Lipschitz-Schranke und gleichmäßige Konvergenz vollständig begründet, unmögliche Forderung B.3.2(e) erläutert |
| B.4.1–B.4.5 | Alle Aufgaben, inklusive Topologiebeweise und Skizzen der Bildmengen |
| B.5.1–B.5.5 | Alle Aufgaben; B.5.3 exakt mit dem gedruckten cos ψ im dritten Eintrag |
| B.6.1–B.6.5 | Alle Aufgaben; Laplace (a,f) zusammen, Radialformel verallgemeinert |
| B.7.1–B.7.5 | Alle Aufgaben inklusive direkter Hesse-Kontrolle |

Umfangreiche Beweise der Hauptsätze sind kein zusätzlicher Pflichtpfad. Kurze Beweisideen sind optional aufklappbar; ausdrücklich verlangte Beweisaufgaben der Unterlagen bleiben vollständig enthalten.

## Ergänzte Anwendungen und Trainings

- Definitionen 1.7–1.8, Sätze 2.4–2.5, Korollar 2.12 mit seinen Gebietsvoraussetzungen, Satz 2.19 sowie Produktregeln 2.23–2.24.
- Example 10: zwei abhängige und drei freie Variablen; Vorzeichenkorrektur mit Kontrolle AₓDg + Aᵧ = 0.
- Example 15: gemischte Ableitungen am Sonderpunkt und konkret fehlende Stetigkeit.
- Schwerpunktset A: Heine–Borel, Winkelverdopplung, skalare Auflösung in beide Richtungen, verschobener Taylorpunkt.
- Schwerpunktset B: kompakte bzw. abgeschlossene unbeschränkte Graphen, globale Inverse, zwei freie Variablen, Taylor in drei Variablen.
- Weiterer Übungsstoff: Banach, normierte Gradientenrichtung, semidefinite Hesse-Matrix, radiale Laplace-Rechnung.
- Alle vier Aufgaben der Altklausur 2025 bleiben vorhanden, einschließlich Mittelwertungleichung und Laplace-Invarianz.

Neue Trainings sind eigene Varianten, keine rekonstruierte Originalklausur. Ausgewählte Satzformulierungen werden mit abgefragt. Lösungen bleiben bis zum Ende verborgen; Uhr und Ansätze überstehen Neuladen und Setwechsel. Es gibt keine erfundene offizielle Dauer oder Bestehensgrenze.

## Formale Fassungen

`dist/formal.js` enthält deutsche Fassungen der einschlägigen Skriptstellen. Sie erhalten E, A, x, ξ, f′, Aₓ/Aᵧ, Nummerierungen und lokale Voraussetzungen. Korrekturen sind in separaten Anmerkungen erläutert. Der Satz von Schwarz (2.26) wird ausdrücklich vom C²-Korollar (2.27) getrennt. Zusätzliche Rechenschemata sind keine als Original ausgegebenen Skriptsätze.

## Theorieabgleich und Satznamen

Alle 46 nummerierten Einträge (1.1–1.12 und 2.1–2.34) sind in 65 Theorie- und Hilfseinträgen abgedeckt. Davon behandeln 45 Einträge Originalaussagen bzw. Begriffe der Lecture Notes; 20 sind als Übungsblatt-Grundlagen, Voraussetzungen oder Folgerungen gekennzeichnet. Vollständige Zuordnung und fachliche Präzisierungen: [THEORY_AUDIT.md](THEORY_AUDIT.md). Die Such- und Abfrageansicht „Satz erkennen“ unterscheidet echte englische Skripttitel von eigenen beschreibenden Überschriften.

## Prüfung

- Datenreferenzen, sämtliche LaTeX-Inhalte, 700 reproduzierbare Varianten.
- Vollständigkeit aller 105 Teilaufgaben, Trainingsreferenzen, Übernahme alter Lernstände und Speicherung laufender Trainings.
- Alle 12 Grafiktypen über Rand- und Standardwerte sowie sämtliche Auswahlen (117 Fälle).
- Browserprüfung aller 12 Grafiken, Regler und Formeldarstellung; responsive Ansicht.
- Unabhängige symbolische Kontrolle der anspruchsvolleren Ableitungen und Taylor-Hesse-Matrizen.
- Freie Formulierungen und Beweise werden bewusst nicht automatisch benotet.
