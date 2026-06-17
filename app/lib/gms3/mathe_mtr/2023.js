
export const questions2023 = [
  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M2_2023_MTR_TEMP_1',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147189/AP23_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Terme & Klammern', // NEU
    questionText: `Aufgabe 1: Temperatur-Formel
In den USA wird die Temperatur in Grad Fahrenheit (°F) gemessen, bei uns in Grad Celsius (°C).
a) Berechne die gesuchten Werte in der Tabelle mit dieser Formel: °C = 5/9 * (°F - 32)
b) Löse die Formel von a) nach der Temperatur in °F auf.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `1. Formeln sind Kochrezepte
Eine Formel ist wie ein Rezept. Du gibst eine Zutat (z.B. °F) hinein und bekommst ein Ergebnis (°C) heraus. Wir müssen die Zahlen nur richtig einsetzen.

2. Gleichungen umstellen = Aufräumen
Eine Gleichung nach einer Variablen aufzulösen, ist wie ein Zimmer aufräumen. Du bringst alles, was stört, auf die andere Seite, damit die gesuchte Variable (hier °F) allein dasteht. Wichtig: Immer auf beiden Seiten dasselbe tun!`,
        },
        {
          title: 'a) Tabelle ausfüllen',
          content: `Wir setzen die gegebenen Werte ins "Kochrezept" ein:

• Für °F = 32:
  °C = 5/9 * (32 - 32) = 5/9 * 0 = 0
  ✅ 32°F sind 0°C.

• Für °F = 200:
  °C = 5/9 * (200 - 32) = 5/9 * 168 = 93.33
  ✅ 200°F sind ca. 93.3°C.

• Für °C = 45:
  Hier müssen wir rückwärts denken. Wir setzen 45 für °C ein und lösen nach °F auf (siehe Teil b):
  45 = 5/9 * (°F - 32)   | × 9/5
  81 = °F - 32          | + 32
  113 = °F
  ✅ 45°C sind 113°F.`,
        },
        {
          title: 'b) Formel nach °F auflösen',
          content: `Jetzt räumen wir die Formel auf, damit °F alleine steht.

Original: °C = 5/9 * (°F - 32)

1. Bruch wegbringen (mit dem Kehrwert mal nehmen):
   °C * 9/5 = °F - 32

2. Die -32 auf die andere Seite bringen (mit +32):
   (°C * 9/5) + 32 = °F

✅ Fertig! Die umgestellte Formel lautet: °F = 9/5 * °C + 32.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164498/AP23_GMS3_M2_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Einsetzen: Setze für a) die gegebenen Fahrenheit-Werte in die Formel ein und rechne °C aus.
2️⃣ Umstellen: Um den Celsius-Wert umzurechnen, löse die Gleichung nach °F auf.
3️⃣ Aufräumen: Beseitige zuerst den Bruch (mal 9/5) und dann die Zahl (plus 32), um °F zu isolieren.
4️⃣ Notieren: Schreibe die saubere, neue Formel auf.`,
    },
  },
  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M2_2023_MTR_PROZ_1',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147189/AP23_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Prozent & Zins', // NEU
    questionText: `Aufgabe 2: Der Jeanskauf
Cem hat in Konstanz eine tolle Jeans für 69.99 Euro gefunden. Mit einem Ausfuhrschein kann er die 19% Mehrwertsteuer zurückfordern. In Kreuzlingen kostet die gleiche Hose 75 Franken, aber es gibt 25% Rabatt. Der Wechselkurs ist 1 Euro = 0.98 Franken.
a) Wo soll Cem die Jeans kaufen? Begründe rechnerisch.
b) Wie viel Prozent spart Cem beim günstigeren Angebot?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `1. Netto-Preis: Der Preis ohne Märchensteuer (Mehrwertsteuer). Wenn 19% draufkamen, entspricht der Bruttopreis 119%. Um die Steuer abzuziehen, rechnest du: Preis / 1.19.

2. Rabatt: Ein Preisnachlass. Bei 25% Rabatt zahlst du nur noch 75% des Preises. Also einfach: Preis * 0.75.

3. Wechselkurs: Rechnet eine Währung in eine andere um. Hier: Euro-Preis * 0.98 = Franken-Preis.`,
        },
        {
          title: 'a) Shopping-Duell: Konstanz vs. Kreuzlingen',
          content: `Wir müssen beide Preise in Franken umrechnen, um sie vergleichen zu können.

Kosten in Konstanz (DE):
1. Preis ohne MwSt (Netto): 69.99 € / 1.19 = 58.82 €
2. In Franken umrechnen: 58.82 € * 0.98 = 57.65 CHF

Kosten in Kreuzlingen (CH):
1. Preis mit Rabatt: 75 CHF * 0.75 = 56.25 CHF

Vergleich: 56.25 CHF ist weniger als 57.65 CHF.
✅ Cem sollte die Jeans in Kreuzlingen kaufen, weil sie dort günstiger ist.`,
        },
        {
          title: 'b) Wie viel spart er?',
          content: `Wir vergleichen den günstigeren Preis (56.25 CHF) mit dem teureren (57.65 CHF). Der teurere Preis ist unser Ausgangspunkt (100%).

Prozentualer Anteil = (günstiger Preis / teurer Preis) * 100
= (56.25 / 57.65) * 100 ≈ 97.57%

Er bezahlt also nur 97.57% des Preises von Konstanz.
Ersparnis = 100% - 97.57% = 2.43%

✅ Cem spart rund 2.4% beim Kauf in Kreuzlingen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164498/AP23_GMS3_M2_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Preis DE: Nimm den Euro-Preis, entferne die MwSt. (geteilt durch 1.19) und rechne ihn in Franken um (mal 0.98).
2️⃣ Preis CH: Nimm den Franken-Preis und ziehe den Rabatt ab (mal 0.75).
3️⃣ Vergleichen: Schau, welcher Franken-Betrag kleiner ist.
4️⃣ Ersparnis berechnen: Teile den günstigen Preis durch den teuren und ziehe das Ergebnis von 100% ab.`,
    },
  },
  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M2_2023_MTR_PYTH_1',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147189/AP23_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Körper & Netze', // NEU
    questionText: `Aufgabe 3: Trapez im Würfel
Ein Würfel mit Kantenlänge 24cm wird geschnitten. Die Schnittfigur ist ein gleichschenkliges Trapez. Die Ecken des Trapezes haben von den Würfelecken einen Abstand von 6cm (siehe Skizze).
a) Berechne alle Seitenlängen des Trapezes.
b) Berechne die Höhe h des Trapezes.
c) Berechne die Länge einer der Diagonalen d des Trapezes.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Pythagoras im 3D-Raum: a² + b² = c²
Unser Superheld für diese Aufgabe! Wir müssen rechtwinklige Dreiecke im Würfel "sehen" lernen. Meistens sind das eine Würfelkante und eine Strecke auf einer Würfelfläche.

Trapez-Anatomie: Ein Trapez hat zwei parallele Seiten (Grundseiten) und zwei schräge Seiten (Schenkel). Bei einem gleichschenkligen Trapez sind die Schenkel gleich lang. Die Höhe ist der senkrechte Abstand zwischen den Grundseiten.`,
        },
        {
          title: 'a) Seitenlängen des Trapezes',
          content: `Wir müssen 3 Längen finden: die kurze Grundseite, die lange Grundseite und die beiden identischen Schenkel.

1. Kurze Grundseite (oben):
   Das ist die Diagonale eines kleinen Quadrats mit Seite 6cm.
   Länge² = 6² + 6² = 72 => Länge = √72 ≈ 8.49 cm

2. Lange Grundseite (unten):
   Die Ecken sind 6cm von den Würfelecken entfernt, bei einer Kantenlänge von 24cm. Die Seite des Quadrats unten ist also 24 - 6 = 18cm.
   Länge² = 18² + 18² = 648 => Länge = √648 ≈ 25.46 cm

3. Schenkel (schräge Seiten):
   Stell dir ein rechtwinkliges Dreieck vor, das in den Würfel hineinragt.
   - Eine Kathete ist die Würfelhöhe: 24cm.
   - Die andere Kathete ist der "horizontale Versatz": 18 - 6 = 12cm.
   Schenkel² = 24² + 12² = 576 + 144 = 720 => Schenkel = √720 ≈ 26.83 cm

✅ Seiten: 8.49 cm, 25.46 cm und 2x 26.83 cm.`,
        },
        {
          title: 'b) Höhe h des Trapezes',
          content: `Stell dir das flache Trapez vor. Wenn du links und rechts die Höhe einzeichnest, schneidest du zwei kleine, rechtwinklige Dreiecke ab.
- Hypotenuse = Schenkellänge (√720)
- Kurze Kathete am Boden = (Lange Grundseite - Kurze Grundseite) / 2 = (√648 - √72) / 2 ≈ 8.49 cm
- Lange Kathete = Höhe h

h² = Schenkel² - Bodenstück²
h² = (√720)² - ((√648 - √72)/2)² = 720 - (8.485...)² = 720 - 72 = 648
h = √648 ≈ 25.46 cm`,
        },
        {
          title: 'c) Diagonale d des Trapezes',
          content: `Wir nehmen wieder das flache Trapez und zeichnen eine Diagonale ein. Diese bildet ein rechtwinkliges Dreieck mit der Höhe h.
- Eine Kathete = Höhe h (√648)
- Andere Kathete = Lange Grundseite - Bodenstück = √648 - ((√648-√72)/2) ≈ 16.97 cm

d² = h² + (untere Kathete)²
d² = (√648)² + (16.97...)² = 648 + 288 = 936
d = √936 ≈ 30.59 cm

Alternative mit 3D-Pythagoras: Die Diagonale spannt sich im Würfel auf.
d² = (Breite)² + (Tiefe)² + (Höhe)²
Breite = 18cm, Tiefe = 6cm, Höhe = 24cm
d² = 18² + 6² + 24² = 324 + 36 + 576 = 936
d = √936 ≈ 30.59 cm

✅ Die Diagonale d ist ca. 30.59 cm lang.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164498/AP23_GMS3_M2_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Skizzen machen: Zeichne den Würfel UND das flache Trapez. Das hilft enorm!
2️⃣ Pythagoras für Seiten: Finde rechtwinklige Dreiecke auf den Würfelflächen für die Grundseiten und im Inneren für die Schenkel.
3️⃣ Pythagoras für Höhe: Nutze im flachen Trapez den Schenkel und das kleine Bodenstück ((lang-kurz)/2).
4️⃣ Pythagoras für Diagonale: Am einfachsten geht's mit dem 3D-Pythagoras, der die Diagonale direkt im Würfel aufspannt.`,
    },
  },
  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M2_2023_MTR_KONSTR_1',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147189/AP23_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Geometrie', // NEU
    questionText: `Aufgabe 4: Rechtwinklige Dreiecke
Konstruiere alle Punkte, die vom Punkt A 4 cm entfernt sind und mit den Punkten A und B ein rechtwinkliges Dreieck ergeben. Zeichne alle diese Dreiecke ein.`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `1. Ortslinie "gleicher Abstand": Alle Punkte, die von einem Punkt (A) den gleichen Abstand (4cm) haben, liegen auf einem Kreis um diesen Punkt A mit diesem Radius (4cm).

2. Satz des Thales: Alle Punkte (C), die mit den Enden einer Strecke (AB) ein rechtwinkliges Dreieck bilden, liegen auf einem Kreis über dieser Strecke. Man nennt ihn den Thaleskreis. Der Mittelpunkt des Kreises liegt genau in der Mitte von AB.

3. Rechter Winkel bei A oder B: Wenn der rechte Winkel bei A sein soll, muss die Seite BC die Hypotenuse sein. Die Seite AC (4cm) muss dann senkrecht auf AB stehen.`,
        },
        {
          title: 'Lösungsplan: 3 Fälle für den rechten Winkel',
          content: `Wir suchen Punkte C, die zwei Bedingungen erfüllen:
1. Sie liegen auf einem Kreis um A mit Radius 4cm (Ortslinie 1).
2. Sie bilden mit A und B ein rechtwinkliges Dreieck (Ortslinie 2).

Fall 1: Der rechte Winkel ist bei C.
Nach Thales liegen alle möglichen Punkte C auf dem Thaleskreis über der Strecke AB.
- Konstruktion: Finde die Mitte von AB, stich dort ein und zeichne einen Kreis, der durch A und B geht.
- Lösungspunkte: Die Schnittpunkte vom Thaleskreis und dem 4cm-Kreis um A sind unsere ersten Lösungen (C1, C2).

Fall 2: Der rechte Winkel ist bei A.
Die Seite AC (Länge 4cm) muss senkrecht zur Seite AB stehen.
- Konstruktion: Errichte eine Senkrechte zur Strecke AB im Punkt A.
- Lösungspunkte: Miss auf dieser Senkrechten 4cm ab. Das gibt zwei weitere Punkte (C3, C4).

Fall 3: Der rechte Winkel ist bei B.
Die Seite BC muss senkrecht zur Seite AB stehen.
- Konstruktion: Errichte eine Senkrechte zur Strecke AB im Punkt B.
- Lösungspunkt(e): Schau, wo diese Senkrechte den 4cm-Kreis um A schneidet. Das gibt je nach Lage von A und B null, einen oder zwei weitere Punkte (C5, C6).`,
        },
        {
          title: 'Konstruktion & Ergebnis',
          content: `1. Zeichne einen Kreis k1 mit Radius 4cm um A.
2. Konstruiere den Thaleskreis k2 über AB. Die Schnittpunkte k1 ∩ k2 sind die ersten beiden Dreieckspunkte.
3. Konstruiere die Senkrechte zu AB durch A. Die Schnittpunkte mit k1 sind die nächsten beiden Punkte.
4. Konstruiere die Senkrechte zu AB durch B. Die Schnittpunkte mit k1 sind die letzten möglichen Punkte.

✅ Verbinde A, B und jeden gefundenen Punkt zu einem Dreieck. Je nach Lage von A und B findest du bis zu 6 mögliche Punkte.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164498/AP23_GMS3_M2_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Kreis um A: Zeichne einen Kreis mit r=4cm um A. Alle Lösungen müssen hier drauf liegen.
2️⃣ Thaleskreis: Konstruiere den Kreis über AB. Wo er den ersten Kreis schneidet, ist der rechte Winkel bei C.
3️⃣ Senkrechte bei A: Errichte das Lot in A. Wo es den ersten Kreis schneidet, ist der rechte Winkel bei A.
4️⃣ Senkrechte bei B: Errichte das Lot in B. Wo es den ersten Kreis schneidet, ist der rechte Winkel bei B.
5️⃣ Alle Dreiecke einzeichnen.`,
    },
  },
  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M2_2023_MTR_WAHR_1',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147189/AP23_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Wahrscheinlichkeit', // NEU
    questionText: `Aufgabe 5: Kugeln ziehen
In einem Behälter sind 3 rote, 3 weisse und 2 blaue Kugeln (total 8). Es werden nacheinander zwei Kugeln OHNE Zurücklegen gezogen.
a) Zeichne einen vollständigen Wahrscheinlichkeitsbaum.
b) Mit welcher Wahrscheinlichkeit ist keine der Kugeln rot?
c) Berechne die Wahrscheinlichkeit, dass mindestens eine der Kugeln weiss oder blau ist.
d) Zu welchem Pfad passt die Wahrscheinlichkeit 1/28?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Baumdiagramm (ohne Zurücklegen):
Zeichne für jeden Zug eine Stufe. Die Wahrscheinlichkeiten ändern sich im zweiten Zug! Wenn du eine von 8 Kugeln ziehst, sind für den zweiten Zug nur noch 7 übrig.

Pfadregel (UND): Die Wahrscheinlichkeit für einen Pfad (z.B. "rot UND rot") findest du durch Multiplizieren der Wahrscheinlichkeiten entlang des Pfades.

Summenregel (ODER): Die Wahrscheinlichkeit für mehrere mögliche Pfade (z.B. "keine ist rot") findest du durch Addieren der einzelnen Pfad-Wahrscheinlichkeiten.

Gegenereignis: Manchmal ist es einfacher, das Gegenteil auszurechnen. Die Wahrscheinlichkeit für "mindestens eine ist NICHT rot" ist dasselbe wie 100% minus die Wahrscheinlichkeit für "alle sind rot".`,
        },
        {
          title: 'a) Der Wahrscheinlichkeitsbaum',
          content: `Stufe 1 (8 Kugeln total):
- Ast "rot": 3/8
- Ast "weiss": 3/8
- Ast "blau": 2/8

Stufe 2 (7 Kugeln total):
- Nach "rot": rot 2/7, weiss 3/7, blau 2/7
- Nach "weiss": rot 3/7, weiss 2/7, blau 2/7
- Nach "blau": rot 3/7, weiss 3/7, blau 1/7
(Der Baum sollte alle diese Äste zeigen)`,
        },
        {
          title: 'b) P(keine rote Kugel)',
          content: `"Keine rote Kugel" heisst: Die erste ist nicht rot UND die zweite ist nicht rot.
Die Wahrscheinlichkeit, keine rote zu ziehen, ist am Anfang 5/8 (3 weisse + 2 blaue).
Wenn eine nicht-rote Kugel weg ist, sind noch 4 nicht-rote von 7 Kugeln übrig.
P(nicht rot, nicht rot) = 5/8 * 4/7 = 20/56 = 5/14 ≈ 35.7%

Alternativ über die Pfade:
P(w,w) = 3/8 * 2/7 = 6/56
P(w,b) = 3/8 * 2/7 = 6/56
P(b,w) = 2/8 * 3/7 = 6/56
P(b,b) = 2/8 * 1/7 = 2/56
Total = (6+6+6+2)/56 = 20/56 = 5/14.

✅ Die Wahrscheinlichkeit für "keine rote Kugel" ist 5/14 (ca. 35.7%).`,
        },
        {
          title: 'c) P(mindestens eine weiss oder blau)',
          content: `"Mindestens eine weiss oder blau" ist das genaue Gegenteil von "beide sind rot". Das ist ein perfekter Fall für das Gegenereignis!

1. Berechne P(rot, rot):
   P(r, r) = 3/8 * 2/7 = 6/56 = 3/28

2. Ziehe das von 100% (also 1) ab:
   P(mind. eine w/b) = 1 - P(r, r) = 1 - 6/56 = 50/56 = 25/28 ≈ 89.3%

✅ Die Wahrscheinlichkeit beträgt 25/28 (ca. 89.3%).`,
        },
        {
          title: 'd) Welcher Pfad passt zu 1/28?',
          content: `Wir suchen einen Pfad, dessen Multiplikation 1/28 ergibt. 1/28 ist dasselbe wie 2/56. Schauen wir uns die Pfade an:

P(r,r) = 6/56
P(w,w) = 6/56
P(b,b) = 2/8 * 1/7 = 2/56 = 1/28

✅ Der Pfad "blau, blau" (zweimal eine blaue Kugel ziehen) hat die Wahrscheinlichkeit 1/28.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164498/AP23_GMS3_M2_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Baum zeichnen: Beachte, dass Nenner und Zähler im zweiten Zug kleiner werden!
2️⃣ P(keine rote): Multipliziere P(erste nicht rot) mit P(zweite nicht rot). Also 5/8 * 4/7.
3️⃣ Gegenereignis nutzen: Für c) ist es am schnellsten, P(rot, rot) auszurechnen und das Ergebnis von 1 abzuziehen.
4️⃣ Pfade testen: Rechne für d) die Wahrscheinlichkeiten für die "doppelten" Pfade (r,r), (w,w), (b,b) aus. Einer wird passen.`,
    },
  },
  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M2_2023_MTR_BEWEG_1',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147189/AP23_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Bewegung & Geschwindigkeit', // NEU
    questionText: `Aufgabe 6: Velofahrer
Simon (9 km/h) und Tanja (18 km/h) starten gleichzeitig an Ort A. 13 Minuten später startet ein Rennvelofahrer (33 km/h) ebenfalls in A.
a) Stelle einen Term auf für die Streckenmitte von Simon und Tanja zum Zeitpunkt t.
b) Welche Strecke ist der Rennvelofahrer zur Zeit t gefahren (t ist die Zeit seit dem Start von Simon/Tanja)?
c) Wann ist der Rennvelofahrer genau in der Mitte von Simon und Tanja?`,
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Weg = Geschwindigkeit × Zeit (s = v * t)
Das ist die goldene Regel aller Bewegungsaufgaben.

Terme aufstellen: Ein Term ist eine mathematische Beschreibung. Wir benutzen Variablen (wie t), um eine Situation für JEDEN beliebigen Zeitpunkt zu beschreiben.

Gleichung lösen: Wenn zwei Terme denselben Wert beschreiben sollen (z.B. "Position vom Rennfahrer" = "Mitte von S & T"), setzen wir sie gleich und lösen nach t auf.

Einheiten-Check: Geschwindigkeiten sind in km/h, die Zeit in Minuten. Das müssen wir anpassen! 13 Minuten = 13/60 Stunden.`,
        },
        {
          title: 'a) Die Mitte von Simon und Tanja',
          content: `Die Position einer Person ist s = v * t.
- Simons Position: 9 * t
- Tanjas Position: 18 * t

Die Mitte zwischen zwei Punkten ist ihr Durchschnitt: (Position 1 + Position 2) / 2.
Mitte = (9t + 18t) / 2 = 27t / 2 = 13.5t

✅ Der Term für die Mitte ist 13.5t.`,
        },
        {
          title: 'b) Die Strecke des Rennvelofahrers',
          content: `Der Rennvelofahrer startet 13 Minuten später. Seine Fahrzeit ist also immer 13 Minuten (oder 13/60 Stunden) kürzer als die von Simon und Tanja.
- Zeit des Rennfahrers: t - 13/60
- Strecke des Rennfahrers: 33 * (t - 13/60)

✅ Der Term für seine Strecke ist 33 * (t - 13/60).`,
        },
        {
          title: 'c) Der Treffpunkt in der Mitte',
          content: `Wir wollen wissen, wann der Rennfahrer in der Mitte ist. Wir setzen die beiden Terme gleich:
Position Rennfahrer = Mitte von S & T
33 * (t - 13/60) = 13.5t

Jetzt lösen wir nach t auf:
1. Klammer ausmultiplizieren:
   33t - (33 * 13 / 60) = 13.5t
   33t - 7.15 = 13.5t

2. Alle t auf eine Seite, alle Zahlen auf die andere:
   33t - 13.5t = 7.15
   19.5t = 7.15

3. Nach t auflösen:
   t = 7.15 / 19.5 ≈ 0.3666... Stunden

Das ist die Zeit seit dem Start von Simon & Tanja. Wir wollen die Zeit seit dem Start des Rennfahrers.
Zeit in Minuten: 0.3666... h * 60 min/h = 22 Minuten.
Das ist 22 Minuten, nachdem Simon und Tanja gestartet sind.
Der Rennfahrer startete 13 Minuten später, also ist seine Fahrzeit:
22 min - 13 min = 9 min.

✅ 9 Minuten nach seinem Start ist der Rennvelofahrer in der Mitte.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164498/AP23_GMS3_M2_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Dein Gameplan:
1️⃣ Term für Mitte: (Simons Weg + Tanjas Weg) / 2.
2️⃣ Term für Rennfahrer: Seine Geschwindigkeit * (t - Startverzögerung in Stunden).
3️⃣ Gleichsetzen: Setze die beiden Terme gleich.
4️⃣ Auflösen: Löse die Gleichung nach t auf. Das Ergebnis ist in Stunden!
5️⃣ Antwort finden: Rechne t in Minuten um und ziehe die 13 Minuten Startverzögerung ab, um die Fahrzeit des Rennfahrers zu erhalten.`,
    },
  },
];


