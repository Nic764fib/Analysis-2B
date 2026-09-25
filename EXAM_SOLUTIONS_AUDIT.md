# Klausurfassungen: alle 32 Aufgaben / 50 Teilaufgaben

Stand: 25.09.2026. Gegenstand ist das aktuelle Klausurtraining `#/klausur`.
Alle dort verwendeten Musterlösungen stehen in `dist/practice-worked.js`.
Aufgabenstellungen, Quellen, Eingabefelder, erwartete Zahlen, Hinweise, Rezepte,
Auswahlfragen, Aufgaben-IDs und gespeicherter Lernstand werden nicht verändert.

Referenz: `Analysis_IIb_Rechenguide_Injektivitaet_vereinfacht.pdf`, 44 PDF-Seiten.
Die folgende Tabelle verwendet die **gedruckten Seitenzahlen** des Guides.
Der Guide selbst bleibt unverändert.

## Redaktioneller Maßstab

- Eine direkt aufschreibbare Klausurlösung: Rechnung plus notwendige Begründung.
- Keine Anleitungen zum Lernen oder wiederholten Erläuterungen von Symbolen in der Lösung.
- Definitionen, Voraussetzungen, Einsetzen, relevante Zwischenrechnungen und Schluss bleiben erhalten.
- Ein vollständiger kurzer Beweisweg je Behauptung; ausführliche Lernhilfe im vorhandenen Rezept.
- Bei Bildmengen beide Inklusionen; bei impliziten Funktionen Nullstelle, C¹, richtiger Block und Ableitung; bei Taylor jede verlangte Teilaufgabe einschließlich direkter Kontrolle und Rest.
- Bekannte Berichtigungen der Aufgabenstellung bleiben sichtbar: dritte Komponente bei B.5.3 tatsächlich `r cos ψ`, `+4` in der korrigierten Klausuraufgabe und natürliche Logarithmusgebiete.

## Einzelprüfung des Rechenwegs

| Aufgabe | Guide | Geprüfter vollständiger Inhalt |
|---|---|---|
| k-annulus | 2, 3 | Stetige Urbilder zweier abgeschlossener Intervalle; Norm ≤ 2; Heine–Borel. |
| k-ellipse | 2, 3 | Alle Nebenbedingungen im Urbildschnitt; x²+y² ≤ x²+4y² ≤ 4; Heine–Borel. |
| k-open | 4 | Folge liegt für jedes n in M; fehlender Grenzpunkt (1,0); nicht kompakt. |
| k-hyperbola | 2c, 4 | xy=1 schließt x=0 aus; exakt gleicher Urbildschnitt; unbeschränkte Folge (1/n,n). |
| k-sequence | 2c, 4 | Fehlender Grenzpunkt; mit Grenzwert vollständiger endlicher Teilüberdeckungsbeweis. |
| k-graph | 2b, Weg A | Kompaktes Parameterintervall, stetige Abbildung, genau ihr Bild. |
| k-operations | 4a–4b | Kompaktes A×A; Summe und Produkt als stetige Bilder; Quotientengegenbeispiel; Zusatzfall 0∉A. |
| k-unions | 4c–4d | Schnitt {0} begründet; endliche Vereinigung [-1,1]; unendliche Vereinigung [0,∞) und Unbeschränktheit. |
| i-powers | 8, 12 | C¹ auf offenem Gebiet; beide Ableitungen pro Komponente; Determinantenrechnung; notwendiges und hinreichendes Kriterium. |
| i-space | 8, 11 | Tatsächlich gestellte Abbildung; 3×3-Ableitung; Entwicklung nach Zeile 3; vollständige Ausschlussmengen. |
| i-polar | 7b | Jacobi-Matrix, Determinante, Radiusquadrat, Vorzeichen, Ränder und Erreichbarkeit jedes Bildpunktes. |
| i-square-image | 7, algebraische Variante | Ausmultiplizieren statt Winkelverdopplung; Grenze 16 und v≥0; vollständiger oberer Halbkreis für jeden s∈[0,4]. |
| i-exp | 6a, 7a, 8 | Lokaler Satz; Gleichsetzen, Quadrieren/Addieren, x=s; Einsetzen in beide ursprünglichen Gleichungen; eindeutiger Winkel; Bild mit Urbild; Gegenbeispiel auf R². |
| i-triangle | 8–9a | C¹, Determinante 1; explizite globale Bijektion; korrektes Urbild (2,1) und inverse Matrix. |
| i-double | 6a, 7a, 10 | Kettenregel-Faktor 2; Normvergleich; Winkel 2y∈(0,2π); vollständiges Bild; Urbild (ln2,π/4); Zahlenmatrix invertiert. |
| i-square-inverse | 6, 8–9a | Eindeutiges x>0 und y; C¹-Inverse gerechtfertigt; Urbild (2,1); Determinante 20 und inverse Matrix. |
| p-exp | 13–14 | Nullstelle; F_y=-3; lokale eindeutige C¹-Lösung mit Anfangswert; Quotient 2/3. |
| p-ellipse | 13–14 | Nullstelle und beide zulässigen Richtungen; Anfangswerte; Ableitungen -4/5 und -5/4. |
| p-circle | 17e | Richtiger Ableitungsnenner und h'(0)=0; Satzversagen getrennt vom tatsächlichen Nichtexistenzbeweis für y(x). |
| p-system | 13, 15–16 | Nullstelle, vollständiges DF, A/B-Auswahl, det A=3, C¹-Lösung, A⁻¹(-B)=(-2/3,1/3). |
| p-sheet | 15–16 | Gegebener Funktionswert und Ableitungsdaten getrennt; gesuchte Spalten x,u; hinreichende Bedingung f_x≠2/5; vollständige Rechnung (11,-4). |
| p-exam | 17–17d | Beide korrigierten Nullstellenwerte; DF allgemein und am Punkt; det A=-15; Anfangswert; explizites A⁻¹(-B)=(2/15,1/15). |
| p-multifree | 13, 15–16 | Zwei freie Variablen; det A=3; Anfangswert; B=I₂; gesamte 2×2-Ableitung mit Variablenreihenfolge. |
| p-multifree-shift | 13, 15–16 | Nullstelle am verschobenen Punkt; det A=-3; B=-I₂; Anfangswert; korrektes Minuszeichen und volle Ableitung. |
| t-logexp | 18–22 | Einvariablenreihen, inneres Quadrat, T₂, Matrixform, Hesse-Koeffizienten, alle direkten zweiten Ableitungen und Rest O(ρ³). |
| t-product | 18–20, 24 | Beide Reihen, vollständiges endliches Produkt, Grad 3/4 gestrichen, T₂ und Abschätzung Cρ³. |
| t-log-shift | 18–20, 23 | Verschiebung, Konstante 2 ausklammern, Logarithmusreihe bis Grad 3, Zurücksetzen und Rest O(ρ⁴). |
| t-shift | 18–21, 23 | Verschiebung, Logarithmus und Exponentialreihe; Zurücksetzen; Gradient, Hesse-Matrix, Matrixform und Rest. |
| t-exp-shift | 18–21 | Exponentialreihe und xy einzeln; Konstanten/lineare Terme zusammengefasst; zurückgesetztes T₂, Gradient, Hesse und Rest. |
| t-fraction | 18–22, 25–26 | Zähler/Nenner, alle drei Summanden, Gradargument, T₂, Matrixform, sämtliche Hesse-Einträge, direkte erste/zweite Ableitungen und Rest. |
| t-read | 18, 21–22 | Exaktes T₂ und R₂=x³; Gradient und Hesse durch Koeffizientenvergleich; direkte Kontrolle f_xy=-3. |
| t-read-shift | 18–21 | Verschiebung, inneres Quadrat und Gradkürzung; zurückgesetztes T₂; Gradient, Hesse und Rest am richtigen Punkt. |

## Verifikation und Grenzen der automatischen Prüfungen

- `scripts/check.mjs`: Struktur, KaTeX, Aufgabenauswahl, Eingaben und gespeicherter Zustand. Der Trainingstest verlangt jetzt für jede Aufgabe und Teilaufgabe ausdrücklich eine Klausurfassung; kein stiller Rückfall auf die alten langen Lösungen.
- `scripts/verify-practice-math.py`: unabhängige symbolische Rechnung für die acht Umkehr-, acht impliziten und acht Taylor-Aufgaben; Abgleich aller 21 Aufgaben mit numerischen Antwortfeldern. Dieser Test prüft die Mathematik unabhängig, liest aber nicht den Beweistext als formalen Beweis ein.
- Deshalb zusätzlich der Einzelabgleich oben: tatsächlich angezeigte Formeln, Annahmen, beide Richtungen bei Bildmengen sowie Kompaktheits- und Injektivitätsargumente wurden inhaltlich geprüft.
- Vorher/nachher-Abgleich der tatsächlich zusammengeführten Aufgabenbank: ausschließlich die Lösungen geändert; alle übrigen Aufgabenfelder identisch.
- `scripts/check-practice-browser.mjs`: alle 32 Aufgaben bei 1400 und 390 Pixeln, Formeldarstellung, Lernstand, Notizen, Import/Export und Tastaturbedienung.
- Zusätzliche Renderprüfung aller 50 Teilaufgaben in beiden Breiten; gezählte Teilaufgaben/Rechenschritte stimmen mit der Datenquelle überein. Lange Gleichungen werden in lesbare Zeilen aufgeteilt. Die vollständige trigonometrische 3×3-Matrix bleibt auf schmalen Bildschirmen horizontal scrollbar.
