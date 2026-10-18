# Prüfungsmuster "Mathe ohne TR" — Analyse 2020–2025

Quelle: `Mathe_ohne_TR/AP{JAHR}_GMS3_M1_oTR_Prüfung.pdf` (PyMuPDF-Textextraktion).
Alle Jahre: **45 Minuten**, keine Hilfsmittel, 6–7 Aufgaben.

**Punkte-Darstellung unterscheidet sich je Jahr:**
- **2020–2022**: jede Teilaufgabe hat ihren eigenen Punkte-Blank `____ (N)` im PDF
  → Punkte pro Teilaufgabe sind exakt bekannt.
- **2023–2025**: nur EIN Punktwert pro ganzer Aufgabe (`(N P)` am Anfang der
  Aufgabe), keine Aufschlüsselung pro Teilaufgabe im PDF
  → in der neuen Probeprüfung werden diese Punkte **gleichmässig auf die
  Teilaufgaben verteilt** (z. B. Aufgabe mit 3 Teilaufgaben und 9 Punkten
  total → je 3 Punkte). Das ist eine **eigene Annahme**, keine offizielle
  Aufteilung.

## Themenreihenfolge pro Jahr (Aufgabe 1 → letzte Aufgabe)

| Jahr | Reihenfolge der Themen |
|---|---|
| 2020 | Zahlen&Teilbarkeit/Gleichungen (1) → Wahrscheinlichkeit (2) → Geometrie (3) → Funktionen (4) → Gleichungen (5) → Terme&Klammern (6) |
| 2021 | Terme&Klammern (1,2) → Gleichungen (3) → Terme&Klammern (4) → Körper&Netze (5) → Statistik&Diagramme (6) |
| 2022 | Terme&Klammern (1) → Gleichungen (2) → Terme&Klammern (3) → Proportionalität (4) → Prozent&Zins (5) → Geometrie (6) → Körper&Netze (7) |
| 2023 | Gleichungen (1) → Terme&Klammern (2,3) → Funktionen (4) → Statistik&Diagramme (5) → Geometrie (6) |
| 2024 | Gleichungen (1) → Terme&Klammern (2) → Funktionen (3) → Proportionalität (4) → Geometrie (5) → Zahlen&Teilbarkeit (6) |
| 2025 | Terme&Klammern (1) → Gleichungen (2) → Terme&Klammern (3) → Wahrscheinlichkeit (4) → Prozent&Zins (5) → Geometrie (6) |

**Beobachtung über alle Jahre:** fast immer startet die Prüfung mit
Terme/Gleichungen, Geometrie kommt fast immer gegen Ende, Wahrscheinlichkeit/
Statistik/Körper&Netze wechseln sich in der Mitte/am Ende ab. Prozent&Zins
und Proportionalität erscheinen seltener (meist 1× pro Jahr, manchmal gar
nicht).

## Anzahl Aufgaben / Teilaufgaben / Punkte pro Jahr

| Jahr | # Aufgaben | # Teilaufgaben total | Punkte total |
|---|---|---|---|
| 2020 | 6 | 21 | 46 |
| 2021 | 6 | 16 | 38 |
| 2022 | 7 | 17 | 43 |
| 2023 | 6 | ~16 (keine Einzel-Punkte im PDF) | 50 |
| 2024 | 6 | ~17 (keine Einzel-Punkte im PDF) | 50 |
| 2025 | 6 | ~18 (keine Einzel-Punkte im PDF) | ~50 |

## Punkte pro Teilaufgabe, wo im PDF bekannt (2020–2022)

```
2020  Aufg.1: 2,2,2,3   Aufg.2: 3,1,1,5   Aufg.3: 3,5
      Aufg.4: 1,2,2,2,3,2   Aufg.5: 2,2   Aufg.6: 2,2,3
2021  Aufg.1: 1,2,2,2   Aufg.2: 4,4,4   Aufg.3: 3,3
      Aufg.4: 2,2,2,2   Aufg.5: 4,4   Aufg.6: 1
2022  Aufg.1: 2,2,2,2   Aufg.2: 3,3,4   Aufg.3: 3,3,2
      Aufg.4: 1,1,3   Aufg.5: 5   Aufg.6: 7   Aufg.7: 2,5
```

## Verwendung in dieser App

Diese Analyse ist die Grundlage für:
- **Modus A ("Originalprüfung")**: Aufgaben werden in genau dieser
  Reihenfolge und Gruppierung dargestellt, mit den hier dokumentierten
  Punktwerten (exakt für 2020–2022, gleichmässig verteilt für 2023–2025).
- **Modus B ("Neue Prüfung")**: die neue Prüfung folgt demselben Muster
  (Anzahl Aufgaben, ungefähre Themenreihenfolge, ähnliche Gesamtpunktzahl
  ~45–50 Punkte).

Die bestehenden Aufgaben-IDs in `app/lib/gms3/mathe_otr/{jahr}.js` (z. B.
`M1_2022_OTR_TERM_1`) folgen bereits dieser Aufgaben-Gruppierung — eine
Aufgabe mit mehreren Teilaufgaben ist aktuell aber oft EINE Frage mit
kombinierter Antwort ("a) ... | b) ..."). Für die neue Probeprüfung werden
diese IDs als Gruppierungs-Basis verwendet, aber pro Teilaufgabe in eine
eigene 4-Optionen-Multiple-Choice-Frage mit korrektem Punktwert umgebaut
(neue, separate Datenstruktur unter `app/lib/gms3/mathe_otr/pruefung/`,
die bestehenden Übungs-Fragen in `app/lib/gms3/mathe_otr/{jahr}.js` werden
NICHT verändert).

## Stand & Entscheidungen (Probeprüfung v2)

**Modus A fertig umgebaut:** 2020, 2021, 2022 — diese drei Jahre haben exakte
Punkte pro Teilaufgabe aus dem PDF UND bereits geprüfte Antworten
(`verified`/korrekt gegengeprüft in früheren Sessions). Jede Teilaufgabe hat
jetzt 4 Optionen (1 richtig + 3 typische Schülerfehler als neue Distraktoren),
gruppiert nach der echten Aufgaben-Struktur aus dem PDF.

**2023–2025 jetzt auch umgebaut.** Ursprünglich bewusst zurückgestellt
(siehe Begründung unten), auf expliziten Wunsch aber mit einer einfachen
Punkte-Regel nachgezogen:

> **Punkte-Regel für Jahre ohne Einzelpunkte im PDF (2023–2025):**
> Gesamtpunkte der Aufgabe (aus dem PDF) ÷ Anzahl Teilaufgaben, **abgerundet**
> — die **letzte** Teilaufgabe bekommt den Rest. Beispiel: 7 Punkte, 2 Teile
> (a, b) → a=3, b=4. Beispiel: 10 Punkte, 3 Teile (a, b, c) → a=3, b=3, c=4.
> Wird eine Teilaufgabe weggelassen (siehe Zeichen-/Konstruktionsaufgaben
> unten), zählt sie für die Division trotzdem als eigener Teil — ihre
> Punkte fallen beim Weglassen einfach aus dem Total (z. B. 2024 Aufgabe 3:
> 5 Punkte auf 3 Teile a,b,c verteilt zu 1,1,3 — Teil c weggelassen, Rest
> a+b=2 Punkte zählen; 2025 Aufgabe 4: 12 Punkte auf 6 Teile a,b1,b2,b3,c1,c2
> zu je 2 verteilt — Teil a weggelassen, Rest 10 Punkte zählen).

Ursprüngliche Zurückstellungs-Begründung (nicht mehr aktuell, nur noch zur
Nachvollziehbarkeit): diese drei Jahre haben keine Einzelpunkte im PDF
(nur Aufgabe-Totale) UND mehr Teilaufgaben als 2020–2022, d. h. mehr
Annahmen UND mehr neue Distraktoren pro Jahr nötig gewesen wären. Mit der
Punkte-Regel oben ist diese Unsicherheit jetzt klar dokumentiert statt
implizit. Der Jahres-Wähler in der App zeigt automatisch nur die Jahre an,
für die eine Datei unter `app/lib/gms3/mathe_otr/pruefung/` existiert — ein
weiteres Jahr lässt sich später einfach ergänzen, ohne Code-Änderungen am
Prüfungsmotor.

**Modus B:** 1 neue Prüfung (`neu1.js`, 6 Aufgaben, 52 Punkte), überarbeitet
mit AP 2024 als explizitem Vorbild für Schwierigkeit/Aufbau — inklusive
Funktionen und Geometrie am Schluss, mit zwei selbst erzeugten
matplotlib-Figuren (`public/figuren/neu1_funktion.png`,
`neu1_geometrie.png`). Die Geometrie-Figur wurde mit selbst gewählten,
sauberen Pythagoras-Zahlen konstruiert — dadurch keine Unsicherheit wie
bei handgezeichneten Original-Figuren ohne offizielle Lösung. Details und
die zweifache unabhängige Lösung jeder Teilaufgabe: `pruefliste_neu.md`
(nicht committet).

**Zeichen-/Konstruktionsaufgaben in Modus A:** wo eine konkrete, prüfbare
Frage möglich war, wurde sie gestellt (z. B. 2021 Aufgabe 5: "Welche Fläche
enthält die Kante B-C?" statt vager "Beschrifte das Netz"-MC — eine reine
3D-Würfel-Logik-Frage, unabhängig von der genauen Netz-Faltung lösbar).
Wo das nicht ehrlich möglich war (2022 Aufgabe 7, Muster-Zuordnung auf
einem unbeschrifteten Würfelnetz — würde eine exakte Nachverfolgung der
Faltung ohne offizielle Lösung erfordern), wurde die Teilaufgabe
weggelassen; 2022s Gesamtpunktzahl sank dadurch von 43 auf 36.

**MC-Optionen:** alle Optionen in `pruefung/*.js` sind reine Antworten ohne
erklärende Klammerzusätze, die die Lösung verraten würden (z. B. nicht mehr
"Diagramm E (Skala 0–12, aber falsche Balken)", sondern nur "Diagramm E").

**Fehler-Kiste:** falsche Teilaufgaben lösen `onFehler(linkedQuestionId)`
aus — `linkedQuestionId` zeigt auf die passende, bereits existierende
Übungsaufgabe im normalen Fragenpool (z. B. `M1_2021_OTR_POT_1a`). Für die
neue Prüfung (Modus B) gibt es keine solche Verknüpfung, da keine
entsprechende Übungsaufgabe existiert — falsche Antworten dort landen
aktuell NICHT in der Fehler-Kiste (bekannte Einschränkung).

**Punkte bei 2020 Aufgabe 4:** die automatische Blank-Extraktion aus dem PDF
lieferte 6 Zahlen für 5 Teilaufgaben (a–e) — leicht uneindeutig. Punkte
wurden näherungsweise verteilt (1,2,2,2,3 = 10 Punkte total, stimmt mit der
Aufgaben-Gesamtpunktzahl überein), nicht 1:1 aus dem PDF übernommen.
