# Analysis 2B

Minimalistische, statische Lernplattform zur Klausur am 30.09.2026. Keine externen Dienste zur Laufzeit, kein Backend und keine Anmeldung. KaTeX 0.16.22 einschließlich Fonts ist lokal eingebunden; Lizenz unter `dist/vendor/katex/LICENSE`.

## Starten

`python -m http.server 5173 --directory dist` und `http://localhost:5173` öffnen. Wegen ES-Modulen über HTTP ausliefern, nicht per file://.

## Struktur

- `dist/modules/*.js`: Fachinhalte pro Modul, unabhängig von Oberfläche und Grafik.
- `dist/content.js`: Klausurstruktur, Quellen und Errata.
- `dist/curriculum.js`: 12 Kapitel, Reihenfolge, Zuordnung der Theorie- und Aufgaben-IDs.
- `dist/formal.js`: deutsche Skriptfassungen mit Originalnotation und markierten Korrekturen.
- `dist/practice.js` und `dist/recipes.js`: weitere Übungsaufgaben und allgemeine Lösungsmethoden.
- `dist/app.js`: Navigation, Theorie, Aufgaben, Abfrage, Prüfungsmodus und lokaler Lernstand.
- `dist/plots.js`: kontrollierbare SVG-Grafiken.
- `dist/generators.js`: reproduzierbare numerische Aufgabenvarianten und eingeschränkter Zahlenparser ohne eval.
- `dist/style.css`: gemeinsame Gestaltung und responsive Layouts.
- `scripts/check.mjs`: Datenreferenzen, Formeln und Generatoren prüfen: `node scripts/check.mjs`.

## Ein Modul ergänzen

Eine Datei unter `dist/modules` mit einem Standardexport anlegen, in `curriculum.js` importieren und in `modules` eintragen. Felder: `id`, `title`, `description`, `priority`, `source`, `visual`, `generator` (optional), `goals`, `theory`, `exercises`. Eindeutige stabile IDs sind wichtig für gespeicherte Fortschritte.

Theorieeintrag: `{id, kind, title, text, source, checks, note?, intro?, visualLink?}`. Aufgabe: `{id, title, source, prompt, hint (Array von Methodenschritten), steps, pitfall?, points?}`. LaTeX mit `String.raw` und `$...$`/`$$...$$` schreiben. Alle Inhalte werden als Text sicher eingebunden; keine HTML-Fragmente in Inhalte einfügen. Neue Grafiken in `plotMarkup` und `drawPlot`, neue Generatoren in `generate` ergänzen.

## Fachliche Entscheidungen

Primärquellen: bereitgestellte Altklausur 2025 (zwei Seiten), Lecture Notes, Übungsblätter 1–7 SS 2026; Schwerpunktsetzung zusätzlich nach Dozentenmail und Prüfungsberichten. Die Aufgabenauswahl und ihre genaue Zuordnung sind in COVERAGE.md dokumentiert. Die priorisierten Themen enthalten vollständige Definitionen, Sätze und ausgearbeitete Hauptaufgaben. Originaldateien und persönliche Screenshots sind nicht im Web-Verzeichnis.

Der Fehler in Klausuraufgabe 3 wird nicht stillschweigend korrigiert: Originalwert (−4,0), gekennzeichnete Übungsfassung F+(4,0). Weitere Errata unter `content.js`. Freie Beweise werden nicht automatisch als richtig bewertet. Generatoren prüfen Zahlen, nicht Argumentationen. Keine Aussage über garantierte Prüfungsthemen oder eine garantierte Note.

## Zustand und Teilen

Hash-URLs machen Module direkt teilbar. Notizen, Selbsteinschätzungen und Wiederholungsfälligkeiten liegen im localStorage-Schlüssel `analysis2b-v1`. Export/Import unter Quellen. Geräte oder Besucher teilen keinen Lernstand. Ein Reload setzt eine laufende Klausuruhr zurück, erhält aber Notizen. Exam-Dauer wurde nicht geraten; die Uhr zählt aufwärts.

Hosting-Identität steht in `.openai/hosting.json`. Bei Erweiterungen dieselbe Site weiterverwenden.
