export const questions2025 = [
  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M2_2025_MTR_VOL_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179275/AP25_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Geometrie', // NEU
    questionText: `Aufgabe 1: Der Goldbarren
Natalie erbt einen prismenförmigen Goldbarren (Länge 12 cm, Höhe 0.8 cm, obere Vorderkante 4 cm, untere Vorderkante 6 cm). Die Dichte von Gold beträgt 19.3 g/cm³. 1 kg Gold ist derzeit 71'070 Fr. wert. Wieviel Wert hat ihr kleiner Goldbarren?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `1. Volumen eines Prismas: V = Grundfläche × Länge. Unsere Grundfläche ist das vordere Trapez.
2. Trapezfläche: A = ((a + c) / 2) * h, wobei a und c die parallelen Seiten sind.
3. Masse (Gewicht): Masse = Volumen × Dichte.
4. Wert berechnen: Wir brauchen den Preis pro Gramm, oder wir rechnen die Masse in kg um.`,
        },
        {
          title: 'Schritt 1: Volumen des Goldbarrens',
          content: `Die Grundfläche ist ein Trapez.
- Parallele Seiten: a = 4 cm, c = 6 cm.
- Höhe des Trapezes: h = 0.8 cm.
- Fläche Trapez = ((4 + 6) / 2) * 0.8 = 5 * 0.8 = 4 cm².

Das Volumen ist diese Fläche mal die Länge des Barrens.
- Volumen = 4 cm² * 12 cm = 48 cm³.`,
        },
        {
          title: 'Schritt 2: Masse (Gewicht) des Goldes',
          content: `Jetzt bringen wir die Dichte ins Spiel.
- Masse = Volumen * Dichte = 48 cm³ * 19.3 g/cm³ = 926.4 g.
Das ist fast ein ganzes Kilo!`,
        },
        {
          title: 'Schritt 3: Wert des Goldbarrens',
          content: `Der Preis ist für 1 kg (1000 g) gegeben. Wir können den Preis pro Gramm ausrechnen.
- Preis pro Gramm = 71'070 CHF / 1000 g = 71.07 CHF/g.

Jetzt berechnen wir den Wert unseres Barrens.
- Wert = Masse * Preis pro Gramm = 926.4 g * 71.07 CHF/g ≈ 65'835.53 CHF.

✅ Der Goldbarren hat einen Wert von ca. 65'835.50 CHF.`,
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Trapezfläche: Berechne die Fläche der Vorderseite.
2️⃣ Volumen: Multipliziere die Fläche mit der Länge des Barrens (12 cm).
3️⃣ Gewicht: Multipliziere das Volumen mit der Dichte von Gold (19.3 g/cm³).
4️⃣ Wert: Finde den Preis pro Gramm und multipliziere ihn mit dem Gewicht deines Barrens.`,
    },
  },
    // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M2_2025_MTR_GRAPH_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179275/AP25_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Algebra', // NEU
    questionText: `Aufgabe 2: Funktionsgraphen zuordnen
Finde zu jeder Situation den am besten passenden Funktionsgraphen.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: 'Situation a: Tageskarte Skifahren',
          content: `Ich zahle einmal einen festen Preis (der Graph springt hoch) und kann dann so viel fahren, wie ich will (der Preis ändert sich nicht mehr, die Linie bleibt horizontal).
✅ Graph IV passt perfekt.`,
        },
        {
          title: 'Situation b: Äpfel mit Gratis-Kilo',
          content: `Der Preis steigt an, während ich Äpfel kaufe. Bei 2kg bleibt der Preis kurz gleich, weil ich 1kg gratis bekomme, dann steigt er wieder an. Das erzeugt Stufen.
✅ Graph V zeigt dieses Stufen-Wachstum.`,
        },
        {
          title: 'Situation c: Stromrechnung',
          content: `Es gibt eine fixe Grundgebühr, auch wenn ich keinen Strom verbrauche. Der Preis startet also nicht bei Null. Ab dann steigt der Preis für jede verbrauchte kWh gleichmässig an (linear).
✅ Graph II zeigt einen Startwert über Null und dann einen konstanten Anstieg.`,
        },
        {
          title: 'Situation d: Bezahlung im Stundenlohn',
          content: `Für null Stunden Arbeit bekomme ich null Lohn. Jede Stunde, die ich arbeite, bekomme ich den gleichen Betrag dazu. Das ist ein klassischer linearer Anstieg, der bei Null beginnt.
✅ Graph I passt hierzu.`,
        },
        {
          title: 'Situation e: Mengenrabatt',
          content: `Bis 20 Exemplare steigt der Preis normal an (linear). Ab 20 Stück wird es für jedes weitere Exemplar günstiger. Die Linie muss also nach 20 Exemplaren flacher werden (weniger Preisanstieg pro Stück).
✅ Graph VI zeigt eine lineare Steigung, die dann ab einem Punkt abflacht.`,
        },
        {
          title: 'Zusammenfassung der Lösungen',
          content: `a → IV
b → V
c → II
d → I
e → VI`,
        },
      ],
      tip: `🍳 Dein Gameplan:
- Fixpreis: Der Graph macht einen Sprung nach oben und verläuft dann flach.
- Linear: Gleichmässiger Anstieg, der Graph ist eine gerade Linie.
- Stufen: Der Preis steigt, bleibt kurz flach, und steigt dann weiter.
- Knick: Die Steigung (also der Anstieg) der Linie ändert sich plötzlich.`,
    },
  },
  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M2_2025_MTR_PROZ_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179275/AP25_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Prozent & Zins', // NEU
    questionText: `Aufgabe 3: Das Rennrad
Ein Rennrad kostet im Jubiläumsverkauf nach 20% Reduktion nur noch 460 Fr. Rudi weiss aber nicht, dass der Preis davor um 15% erhöht wurde.
a) Wie viel kostete das Rad ursprünglich?
b) Wie viel Prozent beträgt der Preisnachlass in Wirklichkeit?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Prozentrechnung rückwärts:
- Wenn ein Preis um 20% reduziert wurde, entsprechen die 460 Fr. genau 80% des Preises davor. Um den 100%-Preis zu finden, rechnest du: 460 / 0.80.
- Wenn ein Preis um 15% erhöht wurde, entspricht er 115% des Ursprungspreises. Um zurückzurechnen, teilst du durch 1.15.`,
        },
        {
          title: 'a) Der ursprüngliche Preis',
          content: `Wir müssen die Preisänderungen Schritt für Schritt rückgängig machen.

1. Preis VOR der 20% Reduktion:
   Der Verkaufspreis von 460 Fr. entspricht 80% des Preises vor dem Jubiläum.
   Preis vor Jubiläum = 460 Fr. / 0.80 = 575 Fr.

2. Preis VOR der 15% Erhöhung (der "ganz ursprüngliche" Preis):
   Die 575 Fr. sind das Ergebnis der 15% Erhöhung, entsprechen also 115% des Ursprungspreises.
   Ursprungspreis = 575 Fr. / 1.15 = 500 Fr.

✅ Das Rad kostete ursprünglich 500 Fr.`,
        },
        {
          title: 'b) Der tatsächliche Preisnachlass',
          content: `Wir vergleichen den Endpreis (460 Fr.) mit dem allerersten Originalpreis (500 Fr.).
- Preisdifferenz = 500 Fr. - 460 Fr. = 40 Fr.

Um den prozentualen Nachlass zu finden, beziehen wir die Differenz auf den Originalpreis.
- Prozentualer Nachlass = (Preisdifferenz / Originalpreis) * 100
- Prozentualer Nachlass = (40 Fr. / 500 Fr.) * 100 = 8%.

✅ Der Preisnachlass beträgt in Wirklichkeit nur 8%.`,
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Rechne rückwärts: Nimm den Endpreis und mache die Rabatte und Erhöhungen rückgängig, indem du durch die entsprechenden Prozentwerte (z.B. 0.80 oder 1.15) teilst.
2️⃣ Echter Rabatt: Vergleiche den Endpreis mit dem ganz am Anfang stehenden Originalpreis, um den wahren Unterschied zu sehen.`,
    },
  },
  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M2_2025_MTR_RAUM_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179275/AP25_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Geometrie', // NEU
    questionText: `Aufgabe 4: Das Puzzleteil
Welches der Teile a bis f passt genau in die Aussparung des Körpers, der auf der linken Bildseite dargestellt ist?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: 'Analyse der Lücke',
          content: `Wir müssen die "negative" Form der Aussparung verstehen.
- Die Lücke hat eine breite, L-förmige Grundfläche.
- In der Mitte ragt ein kleiner, einstufiger "Turm" nach oben.
- Auf der rechten Seite der Lücke gibt es eine hohe, senkrechte Wand.
- Auf der linken Seite gibt es eine zweistufige "Treppe", die nach aussen führt.`,
        },
        {
          title: 'Die Teile im Check',
          content: `Wir suchen das Teil, das diese Lücke exakt füllt.
- Teil a: Zu einfach, passt nicht zur komplexen Form.
- Teil b: Sieht vielversprechend aus. Es hat eine L-Form und eine Stufe in der Mitte. Wenn man es hineinschiebt, scheint die Stufe den "Turm" zu umschliessen und die Rückseite passt an die Wand.
- Teil c: Die Aussparung in c ist falsch herum.
- Teil d: Hat eine schräge Fläche, die in der Lücke nicht vorkommt.
- Teil e: Ist zu blockartig und hat die falsche Form.
- Teil f: Hat eine Stufe an der falschen Stelle.

Wenn man Teil b gedanklich in die Lücke schiebt, füllt sein unterer Teil die L-Form am Boden. Der höhere Teil von b legt sich an die hohe Wand rechts. Die Aussparung in b passt genau über den kleinen Turm in der Mitte der Lücke.
✅ Teil b ist die richtige Lösung.`,
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Negativ-Form: Konzentriere dich auf die Form der Lücke, nicht des Körpers. Stell sie dir als eigenes Bauteil vor.
2. Charakteristika: Suche markante Merkmale wie Stufen, L-Formen oder Türme in der Lücke.
3. Ausschlussverfahren: Gehe die Teile durch und schliesse alle aus, die ein Merkmal haben, das nicht zur Lücke passt (z.B. eine Schräge).
4. Mentale Rotation: Versuche, das wahrscheinlichste Teil gedanklich zu drehen und in die Lücke zu schieben.`,
    },
  },
  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M2_2025_MTR_BEWEG_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179275/AP25_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Algebra', // NEU
    questionText: `Aufgabe 5: Der Krankenwagen
Ein Krankenwagen fährt mit 65 km/h.
a) Er braucht 18 min von der Zentrale zum Krankenhaus. Wie weit ist das?
b) Wie lange braucht er für eine 26 km lange Strecke zum Unfallort?
c) Vom Unfallort (36 km vom KH entfernt) fährt er los. Gleichzeitig startet ein Notarzt (95 km/h) vom KH aus ihm entgegen. Wann treffen sie sich?
d) Wie weit vom Krankenhaus entfernt ist der Treffpunkt?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Die magische Formel: Weg = Geschwindigkeit × Zeit (s = v * t).
Einheiten umrechnen: Die Zeit muss immer in Stunden sein, wenn die Geschwindigkeit in km/h ist!
- Minuten in Stunden: Minuten / 60.
- Stunden in Minuten: Stunden * 60.
Relativgeschwindigkeit: Wenn zwei Fahrzeuge aufeinander zufahren, addieren sich ihre Geschwindigkeiten zur "Team-Geschwindigkeit".`,
        },
        {
          title: 'a) Distanz Zentrale → Krankenhaus',
          content: `Zeit in Stunden: 18 min / 60 = 0.3 h.
Weg = v * t = 65 km/h * 0.3 h = 19.5 km.
✅ Das Krankenhaus ist 19.5 km von der Einsatzzentrale entfernt.`,
        },
        {
          title: 'b) Zeit zum Unfallort',
          content: `Zeit = Weg / Geschwindigkeit = 26 km / 65 km/h = 0.4 h.
Zeit in Minuten: 0.4 h * 60 min/h = 24 min.
✅ Der Krankenwagen braucht 24 Minuten zum Unfallort.`,
        },
        {
          title: 'c) Zeitpunkt des Treffens',
          content: `Die Fahrzeuge fahren aufeinander zu. Ihre "Team-Geschwindigkeit" ist die Summe ihrer Einzelgeschwindigkeiten.
- v_team = 65 km/h + 95 km/h = 160 km/h.
Sie müssen zusammen die Distanz von 36 km überbrücken.
- Zeit = Weg / v_team = 36 km / 160 km/h = 0.225 h.

Zeit in Minuten und Sekunden:
- 0.225 h * 60 = 13.5 Minuten.
- 0.5 Minuten sind 30 Sekunden.
✅ Sie treffen sich nach 13 Minuten und 30 Sekunden.`,
        },
        {
          title: 'd) Ort des Treffens',
          content: `Wir berechnen, wie weit das schnellere Notarztfahrzeug in dieser Zeit gekommen ist. Die Distanz rechnen wir vom Krankenhaus aus.
- Zeit = 0.225 h
- Geschwindigkeit Notarzt = 95 km/h
- Weg = v * t = 95 km/h * 0.225 h = 21.375 km.

In Metern: 21.375 km = 21'375 m.
✅ Der Treffpunkt ist 21.375 km (oder 21'375 m) vom Krankenhaus entfernt.`,
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Einheiten: Wandle Minuten immer sofort in Stunden um (geteilt durch 60).
2️⃣ Formel-Dreieck: Behalte immer s = v * t und seine Umstellungen (t = s/v, v = s/t) im Kopf.
3️⃣ Entgegenkommen: Addiere die Geschwindigkeiten, um die gemeinsame "Team-Geschwindigkeit" zu finden.
4️⃣ Treffpunkt berechnen: Nutze die ausgerechnete Zeit und die Geschwindigkeit EINES der Fahrzeuge, um dessen zurückgelegten Weg zu finden.`,
    },
  },
  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M2_2025_MTR_KONSTR_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179275/AP25_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Geometrie', // NEU
    questionText: `Aufgabe 6: Kreise konstruieren
Konstruiere alle Kreise mit 2.5 cm Radius, welche den gegebenen Kreis k berühren und durch den Punkt P gehen.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Ortslinie 1: Alle Punkte, die von einem Punkt (P) einen festen Abstand (2.5 cm) haben, liegen auf einem Kreis um P mit diesem Radius.
Ortslinie 2: Alle Punkte (die Mittelpunkte unserer gesuchten Kreise), die von einem anderen Kreis (k) einen festen Abstand haben, liegen auf zwei konzentrischen Kreisen. Einem grösseren (Aussenberührung) und einem kleineren (Innenberührung).`,
        },
        {
          title: 'Der Konstruktions-Plan',
          content: `Wir suchen die Mittelpunkte M' der neuen Kreise. Diese müssen zwei Bedingungen gleichzeitig erfüllen:
1. Sie müssen 2.5 cm von P entfernt sein. Alle möglichen M' liegen also auf einem Kreis um P mit Radius 2.5 cm. (Ortslinie A)
2. Sie müssen einen Abstand zum Kreis k haben, der ihrem eigenen Radius (2.5cm) entspricht. Die Mittelpunkte M' liegen also auf einem "Hilfskreis" um den Mittelpunkt M von k.
   - Fall 1 (Aussenberührung): Der Hilfskreis hat den Radius r_k + 2.5 cm. (Ortslinie B1)
   - Fall 2 (Innenberührung): Der Hilfskreis hat den Radius r_k - 2.5 cm. (Ortslinie B2)

Die Lösungen sind die Schnittpunkte der Ortslinie A mit den Ortslinien B1 und B2.`,
        },
        {
          title: 'Schritt-für-Schritt-Konstruktion',
          content: `1. Konstruiere Ortslinie A: Zeichne einen Kreis um den Punkt P mit einem Radius von 2.5 cm.
2. Konstruiere Ortslinie B1: Miss den Radius des Kreises k (r_k). Zeichne um den Mittelpunkt M einen neuen, grösseren Kreis mit dem Radius r_k + 2.5 cm.
3. Konstruiere Ortslinie B2: Zeichne um den Mittelpunkt M einen kleineren Kreis mit dem Radius r_k - 2.5 cm (falls r_k > 2.5 cm).
4. Finde die Mittelpunkte: Die Schnittpunkte des Kreises um P (aus 1.) mit den beiden Kreisen um M (aus 2. und 3.) sind die gesuchten Mittelpunkte für deine neuen Kreise.
5. Kreise zeichnen: Stich in jeden gefundenen Mittelpunkt ein, stelle den Radius auf 2.5 cm und zeichne die Lösungskreise.`,
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Kreis um P: Zeichne einen Kreis mit dem Zielradius (2.5 cm) um den Punkt P.
2️⃣ Hilfskreise um M: Zeichne zwei Kreise um den Mittelpunkt M des gegebenen Kreises k. Einen mit Radius (r_k + 2.5) und einen mit (r_k - 2.5).
3️⃣ Schnittpunkte = Mittelpunkte: Dort, wo sich der P-Kreis und die M-Kreise schneiden, sind die Mittelpunkte deiner Lösungskreise.`,
    },
  },
  // ── AUFGABE 7 ─────────────────────────────────────────────
  {
    id: 'M2_2025_MTR_KOMB_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179275/AP25_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Stochastik', // NEU
    questionText: `Aufgabe 7: Saft einkaufen
Tim soll 4 Flaschen Saft einkaufen. Es gibt die Sorten Traubensaft (T), Apfelsaft (A) und Rhabarbersaft (R). Wie viele Einkaufsmöglichkeiten hat er? Liste alle auf.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: 'Das Problem verstehen',
          content: `Dies ist ein klassisches Kombinatorik-Problem vom Typ "Ziehen mit Zurücklegen, ohne Beachtung der Reihenfolge".
- Mit Zurücklegen: Weil wir mehrmals die gleiche Sorte wählen können (z.B. 4x Traubensaft).
- Ohne Beachtung der Reihenfolge: Weil es egal ist, ob Tim zuerst Apfel und dann Traube oder umgekehrt in den Korb legt. Das Ergebnis (1x Apfel, 1x Traube) ist dasselbe.
Wir suchen also alle möglichen Kombinationen von 4 Flaschen aus 3 Sorten.`,
        },
        {
          title: 'Systematisches Auflisten',
          content: `Am besten gehen wir systematisch vor, um keine Möglichkeit zu vergessen. Wir starten mit dem Fall, dass wir möglichst viele Flaschen einer Sorte nehmen.

Fall 1: Vier gleiche Flaschen
- TTTT
- AAAA
- RRRR
(3 Möglichkeiten)

Fall 2: Drei gleiche Flaschen
- TTTA, TTTR
- AAAT, AAAR
- RRRT, RRRA
(6 Möglichkeiten)

Fall 3: Zwei Paare
- TTAA, TTRR, AARR
(3 Möglichkeiten)

Fall 4: Ein Paar und zwei verschiedene
- TTAR
- AATR
- RRTA
(3 Möglichkeiten)

Total: 3 + 6 + 3 + 3 = 15 Möglichkeiten.`,
        },
        {
          title: 'Alle Möglichkeiten im Überblick',
          content: `1. TTTT
2. AAAA
3. RRRR
4. TTTA
5. TTTR
6. AAAT
7. AAAR
8. RRRT
9. RRRA
10. TTAA
11. TTRR
12. AARR
13. TTAR
14. AATR
15. RRTA

✅ Es gibt insgesamt 15 verschiedene Einkaufsmöglichkeiten.`,
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ System schaffen: Beginne mit dem extremsten Fall (z.B. alle Flaschen von einer Sorte).
2️⃣ Durchdeklinieren: Arbeite dich dann zu den gemischteren Fällen vor (drei gleiche, zwei Paare, ein Paar, etc.).
3️⃣ Ordnen: Halte eine Reihenfolge ein (z.B. immer alphabetisch T-A-R), um Doppelungen wie "TTA" und "ATA" zu vermeiden. Die Reihenfolge im Korb ist egal.`,
    },
  },
];
