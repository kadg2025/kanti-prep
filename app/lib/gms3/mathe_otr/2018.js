
export const questions2018_oTR = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_TERME_1',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=1',

    topic: 'Terme & Klammern',

    questionText: `Aufgabe 1: Terme vereinfachen & Gleichung lösen

a) Schreibe ohne Klammern und möglichst einfach:

(1/3) · (a + 0.5·a - 0.5·3²)

b) Bestimme x in der folgenden Gleichung:

(1/2) · (x - (1/3)·x + 2·0.5²) = 0`,

    options: [

      { label: 'a) a/2 - 3/2 | b) x = -3/4', correct: true },

      { label: 'a) a/3 - 3/2 | b) x = 3/4', correct: false },

      { label: 'a) a/2 - 9/2 | b) x = -1/2', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'a) Term vereinfachen',

          content: `(1/3)(a + 0.5a - 0.5·3²)

= (1/3)(a + 0.5a - 0.5·9)

= (1/3)(1.5a - 4.5)

= 0.5a - 1.5

= a/2 - 3/2

✅ Ergebnis: a/2 - 3/2`,

        },

        {

          title: 'b) Gleichung lösen',

          content: `(1/2)(x - (1/3)x + 2·0.5²) = 0

= (1/2)(x - (1/3)x + 2·0.25)

= (1/2)(x - (1/3)x + 0.5)

x - (1/3)x = (2/3)x

Also:

(1/2)((2/3)x + 0.5) = 0

(1/3)x + 1/4 = 0

(1/3)x = -1/4

x = -3/4

✅ Ergebnis: x = -3/4`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Zuerst Zahlen in der Klammer berechnen.

2️⃣ Dann mit dem äusseren Faktor multiplizieren.

3️⃣ Bei Gleichungen Brüche sauber zusammenfassen.`,

    },

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_FOLGE_2',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=2',

    topic: 'Zahlen & Teilbarkeit',

    questionText: `Aufgabe 2: Zahlenfolgen

Führe die Zahlenfolge fort. Notiere bei jeder Folge die nächsten 2 Glieder.

a) 7, 11, 15, 19, 23, …

b) 3, 4, 7, 11, 18, 29, …

c) 0.2, 0.6, 1.8, 5.4, …

d) 1, 3, 7, 15, 31, 63, …`,

    options: [

      { label: 'a) 27, 31 | b) 47, 76 | c) 16.2, 48.6 | d) 127, 255', correct: true },

      { label: 'a) 27, 31 | b) 48, 78 | c) 16.2, 48.6 | d) 125, 253', correct: false },

      { label: 'a) 25, 29 | b) 47, 76 | c) 15.6, 46.8 | d) 127, 255', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'a) Arithmetische Folge',

          content: `Immer +4:

23 + 4 = 27

27 + 4 = 31

✅ 27, 31`,

        },

        {

          title: 'b) Fibonacci-artige Folge',

          content: `Immer die letzten zwei Zahlen addieren:

18 + 29 = 47

29 + 47 = 76

✅ 47, 76`,

        },

        {

          title: 'c) Geometrische Folge',

          content: `Immer mal 3:

5.4 · 3 = 16.2

16.2 · 3 = 48.6

✅ 16.2, 48.6`,

        },

        {

          title: 'd) Verdoppeln und +1',

          content: `63 · 2 + 1 = 127

127 · 2 + 1 = 255

✅ 127, 255`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Differenz prüfen.

2️⃣ Faktor prüfen.

3️⃣ Prüfen, ob zwei Vorgänger addiert werden.`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_MAURER_3',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=3',

    topic: 'Proportionalität',

    questionText: `Aufgabe 3: Maurer

24 Maurer stellen eine Mauer in 15 Tagen fertig, wenn sie täglich 8 Stunden arbeiten.

a) Wie lange brauchen 20 Maurer für die gleiche Arbeit, wenn sie täglich 9 Stunden arbeiten?

b) In wie vielen ganzen Tagen zu wie vielen ganzen Stunden können 24 Maurer die Arbeit noch erledigen, wenn die tägliche Arbeitszeit max. 15 Stunden beträgt und nicht mehr als 20 Tage benötigt werden dürfen? Gib alle möglichen Lösungen an.

c) Nach 6 Tagen fallen 4 der 24 Maurer aus. Die Verbleibenden erhöhen ihre tägliche Arbeitszeit um 1 Stunde. Wie viele Tage brauchen die verbleibenden Maurer noch?`,

    options: [

      { label: 'a) 16 Tage | b) z.B. 8T/15h, 10T/12h, 12T/10h, 15T/8h, 20T/6h | c) 9.6 Tage', correct: true },

      { label: 'a) 18 Tage | b) nur 10T/12h | c) 12 Tage', correct: false },

      { label: 'a) 14 Tage | b) 15T/8h und 20T/6h | c) 8 Tage', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'Gesamtarbeit',

          content: `Gesamtarbeit = 24 · 15 · 8 = 2880 Personenstunden`,

        },

        {

          title: 'a) Neue Bedingungen',

          content: `Tage = 2880 / (20 · 9) = 2880 / 180 = 16

✅ Ergebnis: 16 Tage`,

        },

        {

          title: 'b) Mögliche Arbeitspläne',

          content: `Für 24 Maurer gilt:

24 · Tage · Stunden = 2880

Tage · Stunden = 120

Mit ganzen Zahlen, Tage ≤ 20 und Stunden ≤ 15:

8T / 15h

10T / 12h

12T / 10h

15T / 8h

20T / 6h

✅ Alle möglichen Lösungen laut Rechnung`,

        },

        {

          title: 'c) Nach 6 Tagen',

          content: `Bereits geleistet:

24 · 6 · 8 = 1152 Personenstunden

Restarbeit:

2880 - 1152 = 1728 Personenstunden

Neues Team:

20 Maurer, 9 h/Tag

Tage = 1728 / (20 · 9) = 1728 / 180 = 9.6

✅ Ergebnis: 9.6 Tage`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Gesamtarbeit berechnen.

2️⃣ Neue Leistung pro Tag ausrechnen.

3️⃣ Restarbeit bei Teil c) separat berechnen.`,

    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_BEWEISE_4',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=4',

    topic: 'Zahlen & Teilbarkeit',

    questionText: `Aufgabe 4: Beweise / Gegenbeispiele

a) Jemand behauptet: „Die Summe von 7 aufeinanderfolgenden natürlichen Zahlen ist immer durch 7 teilbar."

i) Überprüfe anhand eines Beispiels.

ii) Zeige mit der Variablen n, dass die Behauptung stimmt.

b) Zeige mit einem Gegenbeispiel, dass diese Behauptung FALSCH ist:

„Die Summe von 6 aufeinanderfolgenden natürlichen Zahlen ist immer durch 6 teilbar."`,

    options: [

      { label: 'a) Stimmt: 7n + 21 = 7(n+3) | b) Falsch: z.B. 1+2+3+4+5+6=21', correct: true },

      { label: 'a) Stimmt nur manchmal | b) Es gibt kein Gegenbeispiel', correct: false },

      { label: 'a) Summe = 7n+14 | b) Stimmt immer', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'a) Beispiel',

          content: `1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

28 ist durch 7 teilbar.

✅ Die Behauptung könnte stimmen`,

        },

        {

          title: 'a) Allgemeiner Beweis',

          content: `n + (n+1) + (n+2) + (n+3) + (n+4) + (n+5) + (n+6)

= 7n + 21

= 7(n + 3)

✅ Immer durch 7 teilbar`,

        },

        {

          title: 'b) Gegenbeispiel',

          content: `1 + 2 + 3 + 4 + 5 + 6 = 21

21 ist nicht durch 6 teilbar.

✅ Die Behauptung ist falsch`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Für einen Beweis mit n arbeiten.

2️⃣ Für ein Gegenbeispiel reicht ein einziges falsches Beispiel.`,

    },

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_WAHR_5',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=5',

    topic: 'Wahrscheinlichkeit',

    questionText: `Aufgabe 5: Urne mit Kugeln

Eine Urne enthält 2 rote, 3 schwarze und 5 gelbe Kugeln. Nacheinander werden zwei Kugeln MIT Zurücklegen gezogen.

a) Zeichne einen Wahrscheinlichkeitsbaum und beschrifte alle Äste.

Bestimme die Wahrscheinlichkeit für:

b) Beide Kugeln sind gelb.

c) Beide Kugeln sind gleichfarbig.

d) Die erste Kugel ist rot und die zweite ist schwarz.

e) Die zweite Kugel ist rot oder schwarz.`,

    options: [

      { label: 'b) 1/4 | c) 19/50 | d) 3/50 | e) 1/2', correct: true },

      { label: 'b) 1/5 | c) 2/5 | d) 1/25 | e) 2/5', correct: false },

      { label: 'b) 1/4 | c) 1/2 | d) 3/50 | e) 3/5', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'Grundwahrscheinlichkeiten',

          content: `Total = 10 Kugeln

P(R) = 2/10 = 1/5

P(S) = 3/10

P(G) = 5/10 = 1/2`,

        },

        {

          title: 'b) Beide gelb',

          content: `P(G,G) = 1/2 · 1/2 = 1/4`,

        },

        {

          title: 'c) Beide gleichfarbig',

          content: `P(R,R) = 1/5 · 1/5 = 1/25

P(S,S) = 3/10 · 3/10 = 9/100

P(G,G) = 1/2 · 1/2 = 1/4 = 25/100

Total = 4/100 + 9/100 + 25/100 = 38/100 = 19/50`,

        },

        {

          title: 'd) Erste rot, zweite schwarz',

          content: `P(R,S) = 1/5 · 3/10 = 3/50`,

        },

        {

          title: 'e) Zweite rot oder schwarz',

          content: `P(R oder S) = 1/5 + 3/10 = 1/2`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Mit Zurücklegen = gleiche Wahrscheinlichkeiten im 2. Zug.

2️⃣ UND = multiplizieren.

3️⃣ ODER = addieren.`,

    },

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_PYRAMIDE_6',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=7',

    topic: 'Körper & Netze',

    questionText: `Aufgabe 6: Pyramide

Die Grundfläche einer Pyramide ist ein Quadrat mit Flächeninhalt 16 cm².

Die Pyramidenspitze befindet sich 3 cm senkrecht über einer Quadratecke.

a) Ergänze das Netz der Pyramide und trage alle rechten Winkel ein.

b) Beschrifte alle Seiten des Netzes mit ihrer Länge.

c) Berechne den Oberflächeninhalt dieser Pyramide.`,

    options: [

      { label: 'O ≈ 46.3 cm²', correct: true },

      { label: 'O = 48 cm²', correct: false },

      { label: 'O = 52 cm²', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'Grundseite bestimmen',

          content: `Quadratfläche = 16 cm²

Seitenlänge = √16 = 4 cm`,

        },

        {

          title: 'Schräge Kanten',

          content: `Mit Pythagoras:

√(3² + 4²) = √25 = 5

Fehlende Seiten im Netz: 4 cm und 5 cm`,

        },

        {

          title: 'Oberfläche berechnen',

          content: `Grundfläche = 16

Zwei rechtwinklige Seitendreiecke:

2 · (4·3)/2 = 12

Zwei gleichschenklige Dreiecke:

Höhe = √(5² - 2²) = √21

Fläche zusammen = 2 · (4·√21)/2 = 4√21 ≈ 18.33

Total:

16 + 12 + 4√21 ≈ 46.3 cm²

✅ Ergebnis: O ≈ 46.3 cm²`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Aus der Grundfläche die Seitenlänge holen.

2️⃣ Mit Pythagoras die schrägen Seiten berechnen.

3️⃣ Flächen aller Dreiecke plus Quadrat addieren.`,

    },

  },

];


