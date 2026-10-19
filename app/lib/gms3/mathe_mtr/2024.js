

export const questions2024 = [
  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M2_2024_MTR_LIN_1',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164190/AP24_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Funktionen', // NEU
    questionText: `Aufgabe 1: Das Schwimmbecken
Ein quaderförmiges Schwimmbecken mit einer Wasserhöhe von 2,5 m soll leer gepumpt werden. Dabei sinkt der Wasserspiegel pro Stunde um 0,4 m.
a) Vervollständige die Wertetabelle.
b) Zeichne die Gerade ins Koordinatensystem.
c) Notiere die Geradengleichung.
d) Wann ist das Becken leer?
e) Die Pumpe bewegt 6 m³ Wasser pro Stunde. Wie gross ist die Grundfläche des Beckens?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Lineare Funktion: y = mx + q
Das ist die Formel für jede gerade Linie.
• y: Der Wert auf der senkrechten Achse (hier: Wasserhöhe).
• x: Der Wert auf der waagerechten Achse (hier: Zeit in Stunden).
• m: Die Steigung. Wie stark ändert sich y pro x? Hier sinkt die Höhe, also ist m negativ!
• q: Der Startwert bei x=0 (y-Achsenabschnitt).

Volumen: Grundfläche × Höhe
Das Volumen ist die Basisfläche mal die Höhe des Wassers.`,
        },
        {
          title: 'a) Wertetabelle ausfüllen',
          content: `Start (x=0): Die Höhe ist 2.5 m.
Nach 1h (x=1): Die Höhe ist 2.5 m - 0.4 m = 2.1 m.
Für y=1.1: 2.5 - 0.4x = 1.1 => 1.4 = 0.4x => x = 3.5 Stunden.
Für y=0.5: 2.5 - 0.4x = 0.5 => 2.0 = 0.4x => x = 5 Stunden.

✅ Die Werte sind: (0 | 2.5), (1 | 2.1), (3.5 | 1.1), (5 | 0.5).`,
        },
        {
          title: 'c) Die Geradengleichung',
          content: `Wir benutzen y = mx + q.
• Startwert q: Zu Beginn (x=0) ist die Höhe 2.5 m. Also ist q = 2.5.
• Steigung m: Pro Stunde sinkt das Wasser um 0.4 m. Die Steigung ist also m = -0.4.

✅ Die Gleichung lautet: y = -0.4x + 2.5`,
        },
        {
          title: 'd) Wann ist das Becken leer?',
          content: `"Leer" bedeutet, die Wasserhöhe y ist 0. Wir setzen das in unsere Gleichung ein:
0 = -0.4x + 2.5
0.4x = 2.5
x = 2.5 / 0.4 = 6.25 Stunden.

0.25 Stunden sind ein Viertel einer Stunde, also 15 Minuten.
✅ Das Becken ist nach 6 Stunden und 15 Minuten leer.`,
        },
        {
          title: 'e) Grundfläche des Beckens',
          content: `Die Pumpe zieht pro Stunde 6 m³ Wasser raus. Das ist das Volumen, das pro Stunde verschwindet.
Wir wissen auch, dass die Höhe pro Stunde um 0.4 m sinkt.

Volumenänderung = Grundfläche × Höhenänderung
6 m³ = Grundfläche × 0.4 m
Grundfläche = 6 m³ / 0.4 m = 15 m²

✅ Die Grundfläche des Beckens beträgt 15 m².`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179313/AP24_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Gleichung finden: Identifiziere den Startwert (q) und die stündliche Änderung (m).
2️⃣ Leer-Zeitpunkt: Setze y=0 in die Gleichung ein.
3️⃣ Grundfläche: Das pro Stunde gepumpte Volumen ist die "Volumenänderung". Teile diese durch die "Höhenänderung" (0.4 m).`,
    },
  },
    // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M2_2024_MTR_MISCH_1',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164190/AP24_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Prozent & Zins', // NEU
    questionText: `Aufgabe 2: Marmelade & Kaffee
a) Tina mischt 500g Marmelade (30% Kirschen) mit 750g einer anderen Sorte (40% Kirschen). Wie gross ist der Kirschanteil in der Mischung?
b) 10 kg ungerösteter Kaffee für 85.80 CHF verlieren beim Rösten 22% ihres Gewichts. Was kosten 15 kg des gerösteten Kaffees?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Mischungsrechnen: Die goldene Regel ist, immer die absoluten Mengen zu berechnen, nicht die Prozentsätze zu mitteln!
Gesamtanteil = (Absolute Menge Zutat) / (Gesamtmenge der Mischung)

Preis nach Gewichtsverlust: Der Preis für die ursprüngliche Menge verteilt sich auf die neue, kleinere Menge. Der Preis pro kg steigt also!`,
        },
        {
          title: 'a) Kirschen-Marmelade',
          content: `1. Absolute Kirschmenge berechnen:
   - Sorte 1: 30% von 500g = 0.30 * 500g = 150g Kirschen.
   - Sorte 2: 40% von 750g = 0.40 * 750g = 300g Kirschen.
   - Total Kirschen: 150g + 300g = 450g.

2. Gesamtmenge der Marmelade:
   - 500g + 750g = 1250g.

3. Prozentanteil berechnen:
   - Anteil = (Total Kirschen / Total Marmelade) * 100
   - Anteil = (450g / 1250g) * 100 = 36%.

✅ Der Kirschanteil in der gemischten Marmelade beträgt 36%.`,
        },
        {
          title: 'b) Gerösteter Kaffee',
          content: `1. Preis pro kg für Rohkaffee:
   - 85.80 CHF / 10 kg = 8.58 CHF/kg.

2. Gewicht nach dem Rösten:
   - 10 kg verlieren 22% -> 10 kg * (1 - 0.22) = 10 kg * 0.78 = 7.8 kg.
   - Der Preis für diese 7.8 kg ist aber immer noch 85.80 CHF!

3. Preis pro kg für gerösteten Kaffee:
   - 85.80 CHF / 7.8 kg ≈ 11 CHF/kg.

4. Kosten für 15 kg gerösteten Kaffee:
   - 15 kg * 11 CHF/kg = 165 CHF.

✅ 15 kg gerösteter Kaffee kosten 165 CHF.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179313/AP24_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
a) Rechne für jede Sorte aus, wie viel Gramm Kirschen drin sind. Addiere alles. Teile das Ergebnis durch das neue Gesamtgewicht.
b) Rechne den Preis pro Kilo für den Rohkaffee aus. Berechne dann das neue, leichtere Gewicht nach dem Rösten. Der Gesamtpreis bleibt gleich! Finde den neuen, teureren Preis pro Kilo und rechne ihn auf 15kg hoch.`,
    },
  },
  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M2_2024_MTR_KONSTR_1',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164190/AP24_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Geometrie', // NEU
    questionText: `Aufgabe 3: Kreis konstruieren
Konstruiere einen Kreis, der den gegebenen Kreis k im Punkt S berührt und durch den Punkt T geht.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Kreisberührung: Wenn sich zwei Kreise berühren, liegen ihre Mittelpunkte und der Berührpunkt auf einer geraden Linie. Das ist das grosse Geheimnis!

Mittelsenkrechte: Alle Punkte, die von zwei anderen Punkten (z.B. S und T) gleich weit entfernt sind, liegen auf der Mittelsenkrechten dieser beiden Punkte. Der Mittelpunkt unseres neuen Kreises muss also hier liegen.`,
        },
        {
          title: 'Der Konstruktions-Plan',
          content: `Wir suchen den Mittelpunkt M' unseres neuen Kreises. Er muss zwei Bedingungen erfüllen:

1. Er muss auf der Geraden liegen, die durch den alten Mittelpunkt M und den Berührpunkt S geht. (Wegen der Kreisberührung)
2. Er muss auf der Mittelsenkrechten der Punkte S und T liegen. (Weil S und T beide auf dem neuen Kreis liegen und daher den gleichen Abstand zu M' haben müssen).

Der gesuchte Mittelpunkt M' ist also der Schnittpunkt dieser beiden Linien!`,
        },
        {
          title: 'Schritt-für-Schritt-Konstruktion',
          content: `1. Gerade MS zeichnen: Verbinde den Mittelpunkt M des alten Kreises mit dem Berührpunkt S und verlängere die Linie.
2. Mittelsenkrechte von ST konstruieren:
   - Stich mit dem Zirkel in S ein, wähle einen Radius, der grösser als die halbe Strecke ST ist und zeichne einen Bogen.
   - Behalte den Radius, stich in T ein und zeichne einen zweiten Bogen.
   - Verbinde die Schnittpunkte der Bögen mit dem Lineal.
3. Mittelpunkt M' finden: Der Schnittpunkt der Geraden (aus 1.) und der Mittelsenkrechten (aus 2.) ist der gesuchte Mittelpunkt M'.
4. Kreis zeichnen: Stich in M' ein, nimm den Abstand zu S (oder T) in den Zirkel und zeichne den Kreis. Fertig!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179313/AP24_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Linie MS: Ziehe eine Gerade durch den alten Mittelpunkt M und den Berührpunkt S.
2️⃣ Mittelsenkrechte ST: Konstruiere die Symmetrieachse zwischen S und T.
3️⃣ Schnittpunkt: Der Schnittpunkt der beiden Linien ist dein neuer Kreismittelpunkt.
4️⃣ Zeichnen: Zirkel in den neuen Mittelpunkt, Radius bis S einstellen, Kreis ziehen!`,
    },
  },
  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M2_2024_MTR_PYTH_1',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164190/AP24_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Geometrie', // NEU
    questionText: `Aufgabe 4: Die Rutschbahn
Eine Rutschbahn wird am Beckenrand aufgestellt (siehe Skizze). Die Einstiegsleiter (Strecke FS) ist 2.5m lang und trifft im Punkt S im rechten Winkel auf die 6m lange Rutschfläche (Strecke SB). Der Punkt F liegt 3m von der Wand A entfernt. Unter dem obersten Punkt S soll eine senkrechte Stütze s1 zum Boden führen, unter der Mitte der Rutschfläche eine zweite Stütze s2.
a) Berechne die Fläche des Stoffnetzes im Dreieck FBS.
b) Berechne die Breite AB.
c) Wie weit vom Beckenrand entfernt ist die Stütze s1 zu verankern und wie lang ist sie?
d) Wie lang ist die Stütze s2 in der Mitte der Rutschfläche?
e) Berechne das Gefälle der Rutschfläche in Prozent.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Pythagoras: a² + b² = c² für rechtwinklige Dreiecke.
Flächenformel: Die Fläche eines rechtwinkligen Dreiecks ist (Kathete₁ × Kathete₂) / 2. Du kannst dieselbe Fläche aber auch mit jeder anderen Seite als Grundlinie berechnen, wenn du die passende Höhe dazu kennst: Fläche = (Grundlinie × Höhe) / 2.
Strahlensatz: Wenn zwei Geraden von einem Punkt ausgehen und von zwei Parallelen geschnitten werden, bleiben die Verhältnisse gleich.
Gefälle: (Höhenunterschied / Horizontale Distanz) * 100`,
        },
        {
          title: 'a) Fläche Stoffnetz FBS',
          content: `Das Dreieck FBS ist bei S rechtwinklig - dort treffen sich die Einstiegsleiter (FS = 2.5m) und die Rutschfläche (SB = 6m) im rechten Winkel. Das sind also die beiden Katheten des Dreiecks.
Fläche = (FS × SB) / 2 = (2.5 × 6) / 2 = 7.5 m²
✅ Das Stoffnetz hat eine Fläche von 7.5 m².`,
        },
        {
          title: 'b) Breite AB',
          content: `Mit Pythagoras findest du zuerst die lange Seite FB - das ist die Hypotenuse des rechtwinkligen Dreiecks FBS (rechter Winkel bei S):
FB² = FS² + SB² = 2.5² + 6² = 6.25 + 36 = 42.25
FB = √42.25 = 6.5 m
Die Breite AB reicht von der Wand (A) bis zum Beckenrand (B): AB = AF + FB = 3 + 6.5 = 9.5 m
✅ Der Platz ist 9.5 m breit.`,
        },
        {
          title: 'c) Stütze s1',
          content: `s1 ist die Höhe des Dreiecks FBS, gemessen senkrecht von der Spitze S auf die lange Seite FB. Du findest sie, indem du die Fläche aus a) noch einmal nutzt - diesmal mit FB als Grundlinie:
Fläche = (FB × s1) / 2
7.5 = (6.5 × s1) / 2
s1 = (2 × 7.5) / 6.5 ≈ 2.31 m
Für den Abstand vom Beckenrand (B) nutzt du nochmals Pythagoras: im kleinen Dreieck ist die Rutsche (6m) die Hypotenuse und s1 eine Kathete.
Abstand = √(SB² - s1²) = √(6² - 2.31²) = √(36 - 5.34) = √30.66 ≈ 5.54 m
✅ Die Stütze s1 ist 2.31 m lang und wird 5.54 m vom Beckenrand entfernt verankert.`,
        },
        {
          title: 'd) Länge der Stütze s2',
          content: `s2 steht unter der Mitte der 6m langen Rutschfläche, also genau bei 3m - auf halbem Weg. Mit dem Strahlensatz vergleichst du diese Position mit der Einstiegsleiter (2.5m) am oberen Ende der Rutsche:
s2 / 2.5 = 3 / 6
s2 = 2.5 × 0.5 = 1.25 m
✅ Die Stütze s2 ist 1.25 m lang.`,
        },
        {
          title: 'e) Gefälle in Prozent',
          content: `Gefälle = (Höhenunterschied / Horizontale Distanz) * 100
Höhenunterschied = s1 ≈ 2.31 m
Horizontale Distanz = 5.54 m (der Abstand von s1 zum Beckenrand aus c))
Gefälle = (2.31 / 5.54) * 100 ≈ 41.7%
✅ Das Gefälle der Rutschfläche beträgt ca. 42%.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179313/AP24_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Rechtwinkliges Dreieck FBS: Die Einstiegsleiter (2.5m) und die Rutsche (6m) treffen sich bei S im rechten Winkel - das ist dein Schlüssel für a) und b).
2️⃣ Fläche doppelt nutzen: Du kennst die Fläche aus a). Setze sie mit der Grundlinie FB und der gesuchten Höhe s1 gleich, um s1 in c) zu berechnen.
3️⃣ Strahlensatz: Für s2 vergleichst du die Mitte der Rutsche (3m von 6m) mit der Einstiegsleiter (2.5m) am oberen Ende.
4️⃣ Gefälle: Teile den Höhenunterschied (s1) durch die horizontale Distanz zum Beckenrand und nimm das Ergebnis mal 100.`,
    },
  },
  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M2_2024_MTR_VOL_1',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164190/AP24_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Körper & Netze', // NEU
    questionText: `Aufgabe 5: Der Wassergraben
Ein Wassergraben (siehe Skizze) soll gefüllt werden. Er ist ein Prisma mit einer trapezförmigen Grundfläche.
a) Wie viele Liter Wasser sind zum Füllen erforderlich?
b) Der leere Graben wird gefüllt. Welcher Graph beschreibt den Zusammenhang zwischen Volumen (V) und Füllhöhe (h)?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Volumen Prisma: V = Grundfläche × Länge
Trapezfläche: A = ((a + c) / 2) * h_trapez, wobei a und c die parallelen Seiten sind.
Einheiten: 1 m³ = 1000 Liter. 1 dm³ = 1 Liter. Es ist oft am einfachsten, alles in Dezimeter (dm) umzurechnen.`,
        },
        {
          title: 'a) Wassermenge berechnen',
          content: `Schau dir die Seitenansicht des Grabens (in Laufrichtung) genau an: Sie ist ein Trapez.
- Die beiden parallelen Trapezseiten sind 350 cm (oben, auf Bodenniveau) und 30 cm (unten, der flache Boden direkt bei der Hürde).
- Die Trapezhöhe (die Tiefe des Grabens) ist 70 cm.
- Die "Länge" des Prismas ist die Breite des Grabens quer zur Laufbahn: 366 cm.

Rechnen wir in dm (10 cm = 1 dm), dann ist dm³ direkt Liter:
- Parallelseiten: 350 cm = 35 dm, 30 cm = 3 dm.
- Trapezhöhe: 70 cm = 7 dm.
- Länge (Breite des Grabens): 366 cm = 36.6 dm.

1. Fläche des Trapezes (Grundfläche):
   A = ((35 + 3) / 2) * 7 = (38 / 2) * 7 = 19 * 7 = 133 dm².

2. Volumen des Prismas:
   V = Grundfläche * Länge = 133 dm² * 36.6 dm = 4867.8 dm³.

3. In Liter umrechnen:
   Da 1 dm³ = 1 Liter, sind das 4867.8 Liter.

✅ Es sind 4867.8 Liter Wasser erforderlich.`,
        },
        {
          title: 'b) Welcher Graph passt?',
          content: `Der Wassergraben wird von unten nach oben breiter.
- Am Anfang (unten) ist der Graben schmal. Für jeden Liter Wasser, den man einfüllt, steigt die Höhe (h) relativ schnell an.
- Je höher das Wasser steigt, desto breiter wird die Wasseroberfläche. Man braucht also immer mehr Wasser (Volumen V), um die gleiche Höhendifferenz zu schaffen. Der Anstieg der Höhe verlangsamt sich.

Der Graph muss also am Anfang steil sein und dann immer flacher werden. Er beschreibt Höhe h in Abhängigkeit von Volumen V (h auf y-Achse, V auf x-Achse).

- Graph I: h steigt immer schneller. Falsch.
- Graph II: h steigt zuerst schnell, dann langsamer. Richtig.
- Graph III: Extrem ansteigend. Falsch.
- Graph IV: Konstant fallend. Falsch.
- Graph V: Steigt, aber sehr flach. Falsch.
- Graph VI: Linear. Falsch, das wäre ein Quader.

✅ Graph II beschreibt den Zusammenhang korrekt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179313/AP24_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Trapez erkennen: Die Seitenansicht in Laufrichtung ist ein Trapez mit den Parallelseiten 350cm und 30cm und der Höhe 70cm.
2️⃣ Einheiten umrechnen: Wandle alle cm in dm um, dann ist dm³ direkt Liter.
3️⃣ Volumen: Multipliziere die Trapezfläche mit der Breite des Grabens quer zur Laufbahn (366cm).
4️⃣ Graph: Überlege dir: Wird der Graben nach oben breiter oder schmaler? Breiter bedeutet, der Graph wird flacher. Schmaler bedeutet, er wird steiler.`,
    },
  },
  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M2_2024_MTR_WAHR_1',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164190/AP24_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Wahrscheinlichkeit', // NEU
    questionText: `Aufgabe 6: Glücksspiel
Ein Behälter enthält 5 rote, 3 weisse und 2 schwarze Kugeln (total 10). Man zieht zwei Kugeln ohne Zurücklegen.
a) Zeichne einen Wahrscheinlichkeitsbaum.
b) Berechne die Gewinnwahrscheinlichkeit für drei Varianten und entscheide, welche für die Klasse am besten ist.
A: Gewinn, wenn beide Kugeln die gleiche Farbe haben.
B: Gewinn, wenn keine Kugel rot ist.
C: Gewinn, wenn genau eine Kugel schwarz ist.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Wahrscheinlichkeitsbaum (ohne Zurücklegen): Die Wahrscheinlichkeiten ändern sich nach dem ersten Zug! Es sind dann nur noch 9 Kugeln im Topf.
Pfadregel (UND): Wahrscheinlichkeiten entlang eines Pfades werden multipliziert.
Summenregel (ODER): Wahrscheinlichkeiten für mehrere gewünschte Pfade werden addiert.
Klassen-Perspektive: Die Klasse will viel Geld einnehmen, also muss die Gewinnwahrscheinlichkeit für den Spieler möglichst GERING sein.`,
        },
        {
          title: 'a) Wahrscheinlichkeitsbaum',
          content: `Stufe 1 (10 Kugeln):
- P(rot) = 5/10
- P(weiss) = 3/10
- P(schwarz) = 2/10

Stufe 2 (9 Kugeln):
- nach rot: P(r)=4/9, P(w)=3/9, P(s)=2/9
- nach weiss: P(r)=5/9, P(w)=2/9, P(s)=2/9
- nach schwarz: P(r)=5/9, P(w)=3/9, P(s)=1/9`,
        },
        {
          title: 'b) Gewinnchancen berechnen',
          content: `Variante A: P(gleiche Farbe)
P(rot, rot) = 5/10 * 4/9 = 20/90
P(weiss, weiss) = 3/10 * 2/9 = 6/90
P(schwarz, schwarz) = 2/10 * 1/9 = 2/90
P(A) = (20 + 6 + 2) / 90 = 28/90 ≈ 31.1%

Variante B: P(keine rote Kugel)
Es gibt 5 nicht-rote Kugeln (3w, 2s).
P(1. nicht rot) = 5/10. Danach sind noch 4 von 9 Kugeln nicht-rot.
P(B) = 5/10 * 4/9 = 20/90 ≈ 22.2%

Variante C: P(genau eine schwarze)
Pfad 1: P(schwarz, nicht schwarz) = 2/10 * 8/9 = 16/90
Pfad 2: P(nicht schwarz, schwarz) = 8/10 * 2/9 = 16/90
P(C) = 16/90 + 16/90 = 32/90 ≈ 35.6%`,
        },
        {
          title: 'Die beste Variante für die Klasse',
          content: `Die Klasse möchte möglichst wenig Gewinne auszahlen. Sie sollte also die Variante mit der geringsten Gewinnwahrscheinlichkeit für den Spieler wählen.
- P(A) ≈ 31.1%
- P(B) ≈ 22.2%
- P(C) ≈ 35.6%

Die Wahrscheinlichkeit zu gewinnen ist bei Variante B am kleinsten.
✅ Martin und Karin sollten Variante B ("Keine Kugel ist rot") wählen, da hier die Gewinnchance am geringsten ist und die Klasse somit die meisten Einnahmen erzielt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179313/AP24_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Pfade finden: Identifiziere für jede Variante A, B, C die passenden Pfade im Baumdiagramm.
2️⃣ Pfade berechnen: Multipliziere die Wahrscheinlichkeiten entlang jedes Pfades.
3️⃣ Pfade addieren: Zähle die Ergebnisse der zusammengehörigen Pfade.
4️⃣ Entscheiden: Wähle die Variante mit der niedrigsten Wahrscheinlichkeit, um den Gewinn der Klasse zu maximieren.`,
    },
  },
];


