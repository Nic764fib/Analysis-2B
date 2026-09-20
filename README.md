# Analysis 2B

## Öffentlicher Link

**Online-Version:** [https://nic764fib.github.io/Analysis-2B/](https://nic764fib.github.io/Analysis-2B/?v=17ad399)

Direkt im Browser lernen – ohne Installation oder Anmeldung.

Minimalistische, statische Lernplattform zur Klausur am 30.09.2026. Keine externen Dienste zur Laufzeit, kein Backend und keine Anmeldung. KaTeX 0.16.22 einschließlich Fonts ist lokal eingebunden; Lizenz unter `dist/vendor/katex/LICENSE`.

## Starten

`python -m http.server 5173 --directory dist` und `http://localhost:5173` öffnen. Wegen ES-Modulen über HTTP ausliefern, nicht per file://.

## Struktur

- `dist/modules/*.js`: Fachinhalte pro Modul, unabhängig von Oberfläche und Grafik.
- `dist/content.js`: Klausurstruktur, Quellen und Errata.
- `dist/curriculum.js`: 12 Kapitel, Reihenfolge, Zuordnung der Theorie- und Aufgaben-IDs.
- `dist/formal.js`: deutsche Skriptfassungen mit Originalnotation und markierten Korrekturen.
- `dist/script-completions.js`: ergänzende nummerierte Aussagen der Lecture Notes.
- `dist/theory-names.js`, `dist/theory-name-ui.js`: Originalbezeichnungen, Herkunft, Satzsuche und Zuordnungstraining.
- `dist/practice.js` und `dist/recipes.js`: weitere Übungsaufgaben und allgemeine Lösungsmethoden.
- `dist/app.js`: Navigation, Theorie, Aufgaben, Abfrage, Prüfungsmodus und lokaler Lernstand.
- `dist/plots.js`: kontrollierbare SVG-Grafiken.
- `dist/generators.js`: reproduzierbare numerische Aufgabenvarianten und eingeschränkter Zahlenparser ohne eval.
- `dist/style.css`: gemeinsame Gestaltung und responsive Layouts.
- `dist/study.css`: Teilaufgaben, Trainingsauswahl und mobiles Menü.
- `dist/worksheet-data.js`: 48 Originalaufgaben mit 105 Angabe-Lösung-Paaren.
- `dist/exam-supplements.js`: ergänzte Skriptaussagen und Anwendungen.
- `dist/training.js`, `dist/exam-ui.js`: zwei Schwerpunktsets, weiterer Übungsstoff und Altklausur 2025.
- `dist/study-ui.js`, `dist/storage.js`: gemeinsame Aufgabenansicht und validierte Übernahme alter Lernstände.
- `scripts/check.mjs`: Datenreferenzen, Formeln und Generatoren prüfen: `node scripts/check.mjs`.

## Ein Modul ergänzen

Eine Datei unter `dist/modules` mit einem Standardexport anlegen, in `curriculum.js` importieren und in `modules` eintragen. Felder: `id`, `title`, `description`, `priority`, `source`, `visual`, `generator` (optional), `goals`, `theory`, `exercises`. Eindeutige stabile IDs sind wichtig für gespeicherte Fortschritte.

Theorieeintrag: `{id, kind, title, text, source, checks, note?, intro?, visualLink?}`. Aufgabe: `{id, title, source, prompt, hint (Array von Methodenschritten), steps, pitfall?, points?}`. LaTeX mit `String.raw` und `$...$`/`$$...$$` schreiben. Alle Inhalte werden als Text sicher eingebunden; keine HTML-Fragmente in Inhalte einfügen. Neue Grafiken in `plotMarkup` und `drawPlot`, neue Generatoren in `generate` ergänzen.

## Fachliche Entscheidungen

Primärquelle: Lecture Notes 2026. Dazu die aktuellen Übungsblätter 1–7 und Prüfungsinformationen. Die Altklausur 2025 ergänzt das Training; der Bericht 2026 bleibt als Erinnerungsbericht eingeordnet. Die Aufgabenabdeckung ist in [COVERAGE.md](COVERAGE.md), der Theorieabgleich in [THEORY_AUDIT.md](THEORY_AUDIT.md) dokumentiert. Alle 46 nummerierten Definitionen und Aussagen der Lecture Notes sind erfasst. Unter „Satz erkennen“ stehen die englischen Skripttitel und beschreibende deutsche Bezeichnungen mit Zuordnungstraining; Rechenhilfen und Blatt-Grundlagen sind getrennt gekennzeichnet. Alle Originalaufgaben sind je Teilaufgabe mit einer einzeln aufklappbaren Lösung vorhanden. Originaldateien und private Nachrichten sind nicht im Web-Verzeichnis.

Der Fehler in Klausuraufgabe 3 wird nicht stillschweigend korrigiert: Originalwert (−4,0), gekennzeichnete Übungsfassung F+(4,0). Weitere Errata unter `content.js`. Freie Beweise werden nicht automatisch als richtig bewertet. Generatoren prüfen Zahlen, nicht Argumentationen. Keine Aussage über garantierte Prüfungsthemen oder eine garantierte Note.

## Zustand und Teilen

Hash-URLs machen Module und einzelne Aufgaben direkt teilbar. Der Schlüssel `analysis2b-v1` und alle bisherigen Inhalts-IDs bleiben erhalten. Notizen, Markierungen, letzte Auswahl und laufende Trainings werden lokal gespeichert. Neuladen erhält auch die Klausuruhr. Export/Import unter „Quellen und Lernstand“ liest weiterhin alte Exporte. Gleiche Originalaufgaben teilen ihre neuen Teilaufgabennotizen zwischen Modul und Blatt. Es gibt keine erfundene offizielle Dauer oder Bestehensgrenze.

Die öffentliche Version läuft über GitHub Pages. Nach dem Commit und Push der Änderungen auf `main` veröffentlicht `node scripts/publish-pages.mjs` den Inhalt von `dist/` auf `gh-pages`. Die Startseite bindet Dateien über ein versionsabhängiges Verzeichnis ein, damit Browser keine alten und neuen Module vermischen. Die öffentliche Adresse bleibt gleich. Die bestehende Sites-Konfiguration in `.openai/hosting.json` gehört zur früheren Webadresse.

Ein Lernstand von der früheren Webadresse lässt sich dort exportieren und unter „Quellen und Lernstand“ in die neue Online-Version importieren.
