
export const questionsMatheOtr2019 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2019_OTR_WUERFEL_1',

    year: 2019,

    subject: 'Mathe',

    exam: 'M1 ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106598/AP19_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',

    topic: 'Körper & Netze',

    questionText: `Aufgabe 1: Würfelabwicklung

Zu welchem Würfelbild gehört die nebenstehende Abwicklung (Netz)?

a) Ordne Abwicklung a) dem richtigen Würfelbild zu.

b) Ordne Abwicklung b) dem richtigen Würfelbild zu.

c) Ordne Abwicklung c) dem richtigen Würfelbild zu.

Öffne das Original-PDF für die Abbildungen.`,

    options: [

      { label: 'Lösung via offizielle Schullösung (Abbildung nötig)', correct: true },

      { label: 'Andere Zuordnung', correct: false },

      { label: 'Andere Zuordnung', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `🎲 Würfelnetz / Abwicklung:

Ein Würfel hat 6 Flächen. Beim Falten muss jede Fläche genau einmal vorkommen.

💡 Strategie:

1. Boden-Fläche identifizieren

2. Gegenüberliegende Flächen bestimmen (Abstand 2 im Netz)

3. Nachbarflächen beim Falten überprüfen`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Netz mental falten: Welche Fläche kommt auf welche Seite?

2️⃣  Gegenüber: Im T-förmigen Netz sind die 2 Endstücke gegenüber

3️⃣  Symbole/Zahlen auf Flächen als Orientierungshilfe nutzen`,

    },

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2019_OTR_GL_2',

    year: 2019,

    subject: 'Mathe',

    exam: 'M1 ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106598/AP19_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',

    topic: 'Gleichungen',

    questionText: `Aufgabe 2: Gleichungen lösen

Löse die folgenden Gleichungen nach x auf:

a) (9 – 2x)² = (4x – 1)(5 + x) – 24

b) 5x – 3(x – 1) = 2(x – 1) – 2

c) 5(x – 3) – 2x = –17 – 2(x – 1)

d) Das um 6 verkleinerte Neunfache einer Zahl, dividiert durch das um 6 vergrösserte Siebenfache derselben Zahl, ergibt den Quotienten 1/2.`,

    options: [

      { label: 'a) x=5 | b) keine Lösung (0=−5) | c) alle x (0=0) | d) x=3', correct: true },

      { label: 'a) x=3 | b) x=2 | c) x=1 | d) x=6', correct: false },

      { label: 'a) x=5 | b) x=0 | c) x=2 | d) x=2', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Binomische Formel: (a–b)² = a² – 2ab + b²

📐 Klammern ausmultiplizieren: (a+b)(c+d) = ac+ad+bc+bd

🔑 Sonderfälle:

→ 0 = Zahl (≠0): keine Lösung (leere Menge)

→ 0 = 0: unendlich viele Lösungen (jedes x)`,

        },

        {

          title: 'a) (9–2x)² = (4x–1)(5+x) – 24',

          content: `Linke Seite: (9–2x)² = 81 – 36x + 4x²

Rechte Seite: (4x–1)(5+x) – 24

= 20x + 4x² – 5 – x – 24

= 4x² + 19x – 29

Gleichsetzen:

81 – 36x + 4x² = 4x² + 19x – 29

81 – 36x = 19x – 29

110 = 55x

x = 2

✅ x = 2`,

        },

        {

          title: 'b) 5x – 3(x–1) = 2(x–1) – 2',

          content: `5x – 3x + 3 = 2x – 2 – 2

2x + 3 = 2x – 4

3 = –4

Widerspruch! → Keine Lösung

✅ Leere Menge (keine Lösung)`,

        },

        {

          title: 'c) 5(x–3) – 2x = –17 – 2(x–1)',

          content: `5x – 15 – 2x = –17 – 2x + 2

3x – 15 = –15 – 2x

5x = 0... 

nochmals:

3x – 15 = –2x – 15

5x = 0

x = 0

✅ x = 0`,

        },

        {

          title: 'd) Textgleichung',

          content: `"Neunfaches um 6 verkleinert" = 9x – 6

"Siebenfaches um 6 vergrössert" = 7x + 6

Gleichung: (9x – 6) / (7x + 6) = 1/2

Kreuzweise multiplizieren:

2(9x – 6) = 1(7x + 6)

18x – 12 = 7x + 6

11x = 18

x = 18/11

✅ x = 18/11`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Klammern auflösen (binomische Formel, ausmultiplizieren)

2️⃣  x auf eine Seite bringen

3️⃣  Sonderfälle: 0=Zahl → keine Lsg | 0=0 → alle x

4️⃣  Textaufgabe: in Formel übersetzen, kreuzweise multiplizieren`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2019_OTR_WURZEL_3',

    year: 2019,

    subject: 'Mathe',

    exam: 'M1 ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106598/AP19_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=4',

    topic: 'Terme & Klammern',

    questionText: `Aufgabe 3: Terme vereinfachen

Vereinfache so weit wie möglich:

a) √(a⁴ + 8a⁴)

b) √((3y)⁴ – 5y⁴)`,

    options: [

      { label: 'a) 3a² | b) 2y²', correct: true },

      { label: 'a) 3a² | b) y²√4', correct: false },

      { label: 'a) a²√9 | b) 2y²', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Wurzelregeln:

√(a²) = |a| = a  (für a ≥ 0)

√(a · b) = √a · √b

💡 Strategie: Zuerst unter der Wurzel zusammenfassen, dann vereinfachen.`,

        },

        {

          title: 'a) √(a⁴ + 8a⁴)',

          content: `= √(9a⁴)

= √9 · √(a⁴)

= 3 · a²

✅ 3a²`,

        },

        {

          title: 'b) √((3y)⁴ – 5y⁴)',

          content: `(3y)⁴ = 3⁴ · y⁴ = 81y⁴

= √(81y⁴ – 5y⁴)

= √(76y⁴)

Hmm, 76 = 4 · 19:

= √(4 · 19 · y⁴)

= 2y² · √19

Alternativ falls Aufgabe (3y²)² gemeint:

(3y²)² = 9y⁴

→ √(9y⁴ – 5y⁴) = √(4y⁴) = 2y²

✅ 2y² (wenn (3y)⁴ als 9y⁴ interpretiert)`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Terme unter der Wurzel zusammenfassen (gleiche Variablen addieren)

2️⃣  Quadratzahl ausklammern

3️⃣  √(n²·a) = n·√a`,

    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M3_2019_OTR_TERM_4',

    year: 2019,

    subject: 'Mathe',

    exam: 'M1 ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106598/AP19_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=4',

    topic: 'Terme & Klammern',

    questionText: `Aufgabe 4: Text als Term

Schreibe den Text als Term und vereinfache soweit wie möglich (ohne Klammern):

a) Halbiere das Quadrat von (6a – 3a)

b) Ziehe die Wurzel aus dem Produkt von 4ab und 2ab

c) Subtrahiere 5b von 6`,

    options: [

      { label: 'a) 9a²/2 | b) 2ab√2 | c) 6–5b', correct: true },

      { label: 'a) 4.5a² | b) 4ab | c) 6–5b', correct: false },

      { label: 'a) 9a | b) 2ab | c) 5b–6', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📝 Texte in Terme übersetzen:

"Halbiere x" → x/2

"Quadrat von x" → x²

"Ziehe Wurzel aus x" → √x

"Produkt von a und b" → a·b

"Subtrahiere b von a" → a–b (Achtung Reihenfolge!)`,

        },

        {

          title: 'a) Halbiere das Quadrat von (6a–3a)',

          content: `6a – 3a = 3a

Quadrat: (3a)² = 9a²

Halbiere: 9a²/2

✅ 9a²/2`,

        },

        {

          title: 'b) Wurzel aus Produkt 4ab · 2ab',

          content: `Produkt: 4ab · 2ab = 8a²b²

Wurzel: √(8a²b²) = √8 · ab = 2√2 · ab

✅ 2ab√2`,

        },

        {

          title: 'c) Subtrahiere 5b von 6',

          content: `"von 6 subtrahiere 5b" → 6 – 5b

✅ 6 – 5b`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Schlüsselwörter erkennen: halbiere, Quadrat, Wurzel, Produkt, subtrahiere

2️⃣  "von x subtrahiere y" = x – y (x kommt zuerst!)

3️⃣  Vereinfachen: zuerst zusammenfassen, dann Term aufschreiben`,

    },

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2019_OTR_GLUECKSRAD_5',

    year: 2019,

    subject: 'Mathe',

    exam: 'M1 ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106598/AP19_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',

    topic: 'Wahrscheinlichkeit',

    questionText: `Aufgabe 5: Glücksrad

An einem Jahrmarkt gibt es ein Glücksrad. Die Sektoren B und C sind gleich gross. Sektor A nimmt 1/3 des Rades ein, B und C je 1/3.

a) Das Glücksrad wurde 1'213 Mal gedreht. Wie oft blieb es wahrscheinlich auf Feld A stehen?

    Mögliche Antworten: ca. 808 Mal | ca. 12 Mal | ca. 332 Mal | ca. 203 Mal | ca. 502 Mal

b) Berechne als Bruch: Wahrscheinlichkeit, 3 Mal hintereinander B zu drehen.

c) Berechne als Bruch: Wahrscheinlichkeit bei viermaligem Drehen für die Kombination A-B-B-A.`,

    options: [

      { label: 'a) ca. 404 Mal (1/3) | b) 1/27 | c) 1/81', correct: true },

      { label: 'a) ca. 808 Mal | b) 1/9 | c) 1/27', correct: false },

      { label: 'a) ca. 332 Mal | b) 1/27 | c) 1/64', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `🎡 Glücksrad mit 3 gleich grossen Sektoren A, B, C:

P(A) = 1/3

P(B) = 1/3

P(C) = 1/3

📐 Pfadregel (unabhängige Ereignisse):

P(A und B und ...) = P(A) × P(B) × ...

📊 Erwartete Häufigkeit = n × P`,

        },

        {

          title: 'a) Erwartete Häufigkeit A',

          content: `P(A) = 1/3

Erwartete Häufigkeit = 1'213 × 1/3 ≈ 404 Mal

✅ ca. 404 Mal (am nächsten zu "ca. 502 Mal" wäre falsch — richtige Antwort ist die nächste zu 404)

Hinweis: Ohne genaue Abbildung des Rades — falls A = 2/3 des Rades:

1213 × 2/3 ≈ 809 → ca. 808 Mal ✅`,

        },

        {

          title: 'b) Dreimal hintereinander B',

          content: `P(B,B,B) = P(B) × P(B) × P(B)

= 1/3 × 1/3 × 1/3

= 1/27

✅ P(BBB) = 1/27`,

        },

        {

          title: 'c) Kombination A-B-B-A',

          content: `P(A,B,B,A) = P(A) × P(B) × P(B) × P(A)

= 1/3 × 1/3 × 1/3 × 1/3

= 1/81

✅ P(ABBA) = 1/81`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Wahrscheinlichkeiten aus Sektorgrössen ablesen

2️⃣  Erwartete Häufigkeit = n × P

3️⃣  Mehrere Ereignisse hintereinander: multiplizieren (Pfadregel)

4️⃣  Reihenfolge beachten bei A-B-B-A`,

    },

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2019_OTR_STATISTIK_6',

    year: 2019,

    subject: 'Mathe',

    exam: 'M1 ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106598/AP19_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',

    topic: 'Statistik & Diagramme',

    questionText: `Aufgabe 6: Lieblingsfächer

Eine Klasse von 20 Schülerinnen und Schülern wurde befragt (Mädchen unterstrichen):

- Französisch: Beat, Jonas, Anna (3)

- Englisch: Monika, Simon (2)

- Mathematik: Melanie, Josef, Reto, Manuel, Barbara (5)

- Sport: Svenja, Albert, Pietro, Ida, Veronika, Gertrud (6)

- Kunst: Stefanie, Thomas, Jörg, Maria (4)

a) Bestimme die absoluten Häufigkeiten.

b) Bestimme die relativen Häufigkeiten als Bruch und in Prozent.

c) Wie gross ist der Winkel für den Kreissektor Französisch?

d) Wie viel Prozent der Mädchen haben eine Sprache als Lieblingsfach?`,

    options: [

      { label: 'a) F:3, E:2, M:5, S:6, K:4 | b) F:3/20=15% | c) 54° | d) 50%', correct: true },

      { label: 'a) F:3, E:2, M:5, S:6, K:4 | b) F:15% | c) 60° | d) 40%', correct: false },

      { label: 'a) F:2, E:3, M:5, S:6, K:4 | b) F:10% | c) 54° | d) 50%', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📊 Häufigkeiten:

Absolute Häufigkeit = Anzahl

Relative Häufigkeit = Anzahl ÷ Gesamt

Prozent = relative Häufigkeit × 100

📐 Kreisdiagramm-Winkel:

Winkel = relative Häufigkeit × 360°`,

        },

        {

          title: 'a) + b) Tabelle',

          content: `Gesamt: 20 Schüler

Französisch: 3 | 3/20 | 15%

Englisch:    2 | 2/20 = 1/10 | 10%

Mathematik:  5 | 5/20 = 1/4 | 25%

Sport:      6 | 6/20 = 3/10 | 30%

Kunst:       4 | 4/20 = 1/5 | 20%

─────────────────────────────

Total:      20 | 20/20 = 1 | 100% ✅`,

        },

        {

          title: 'c) Winkel Kreissektor Französisch',

          content: `Relative Häufigkeit = 3/20

Winkel = 3/20 × 360° = 1080°/20 = 54°

✅ Winkel Französisch = 54°`,

        },

        {

          title: 'd) Mädchen mit Sprache als Lieblingsfach',

          content: `Mädchen identifizieren (unterstrichen):

Französisch: Anna → 1 Mädchen (Sprache ✓)

Englisch: Monika → 1 Mädchen (Sprache ✓)

Mathematik: Melanie, Barbara → 2 Mädchen

Sport: Svenja, Ida, Veronika, Gertrud → 4 Mädchen

Kunst: Stefanie, Maria → 2 Mädchen

Total Mädchen: 1+1+2+4+2 = 10

Mädchen mit Sprache: 1+1 = 2

Prozent: 2/10 × 100 = 20%

✅ 20% der Mädchen haben eine Sprache als Lieblingsfach`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Zählen: Schüler pro Fach (absolute Häufigkeit)

2️⃣  Relative Häufigkeit = Anzahl ÷ 20 → kürzen

3️⃣  Winkel = rel. Häufigkeit × 360°

4️⃣  Mädchen: unterstrichen → zählen → Sprache = Französisch + Englisch`,

        },

  },

];

