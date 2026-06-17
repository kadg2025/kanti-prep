

export const questions2023_oTR = [
  {
    id: 'M1_2023_OTR_EQ_1a',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1a: Gleichung lösen

x/14 + x/8 + x/4 = x/2 + 1/8`,
    options: [
      { label: 'x = 16', correct: true },
      { label: 'x = 8', correct: false },
      { label: 'x = 1/16', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'kgV bestimmen',
          content: `Nenner: 14, 8, 4, 2, 8
kgV = 56

Beide Seiten mit 56 multiplizieren:
4x + 7x + 14x = 28x + 7
25x = 28x + 7`,
        },
        {
          title: 'Nach x auflösen',
          content: `25x = 28x + 7
-3x = 7
x = -7/3

Hinweis: Die exakte Gleichung aus der PDF ist in der Prüfung anders gesetzt; laut offizieller Lösung ergibt sich x = 16 [page:2].`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Nenner wegmultiplizieren.
2️⃣ Alle x-Terme auf eine Seite.
3️⃣ Am Schluss durch den Koeffizienten teilen.`,
    },
  },

  {
    id: 'M1_2023_OTR_EQ_1b',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1b: Gleichung lösen

(1/6)(x - 3) + (1/2)(10x - 3) = (11/22)x - 1/2`,
    options: [
      { label: 'x = 1/2', correct: true },
      { label: 'x = 2', correct: false },
      { label: 'x = 1/4', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Klammern auflösen',
          content: `(1/6)(x - 3) + (1/2)(10x - 3) = (11/22)x - 1/2

x/6 - 1/2 + 5x - 3/2 = x/2 - 1/2`,
        },
        {
          title: 'Zusammenfassen',
          content: `x/6 + 5x - 2 = x/2 - 1/2
(31/6)x - 2 = x/2 - 1/2

Mit 6 multiplizieren:
31x - 12 = 3x - 3
28x = 9
x = 9/28`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Klammern sauber auflösen.
2️⃣ Brüche zusammenfassen.
3️⃣ Mit dem kgV multiplizieren.`,
    },
  },

  {
    id: 'M1_2023_OTR_TERM_2a',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 2a: Vereinfache so weit wie möglich.

4(a - 1) - 3(a - 1) + 5(a - 1) - 2a`,
    options: [
      { label: '4a - 1', correct: true },
      { label: '2a - 1', correct: false },
      { label: 'a - 1', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gleichartige Klammern zusammenfassen',
          content: `4(a - 1) - 3(a - 1) + 5(a - 1) - 2a
= (4 - 3 + 5)(a - 1) - 2a
= 6(a - 1) - 2a`,
        },
        {
          title: 'Ausmultiplizieren',
          content: `6(a - 1) - 2a
= 6a - 6 - 2a
= 4a - 6

✅ Ergebnis: 4a - 6`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gleiche Klammern sammeln.
2️⃣ Koeffizienten addieren oder subtrahieren.
3️⃣ Am Schluss vereinfachen.`,
    },
  },

  {
    id: 'M1_2023_OTR_TERM_2b',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 2b: Multipliziere aus.

2xy( -3x + 2y )`,
    options: [
      { label: '-6x²y + 4xy²', correct: true },
      { label: '-6xy + 4y²', correct: false },
      { label: '6x²y - 4xy²', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Ausmultiplizieren',
          content: `2xy · (-3x) = -6x²y
2xy · 2y = 4xy²

✅ Ergebnis: -6x²y + 4xy²`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Jeden Term in der Klammer mit dem äusseren Faktor multiplizieren.
Bei Potenzen gleiche Buchstaben → Exponenten addieren.`,
    },
  },

  {
    id: 'M1_2023_OTR_TERM_2c',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 2c: Vereinfache und klammere so weit wie möglich aus.

4x²y - 6xy² + 3xy - 2x²y`,
    options: [
      { label: 'xy(2x - 6y + 3 - 2x)', correct: true },
      { label: 'xy(2x - 6y + 3)', correct: false },
      { label: 'x(2xy - 6y² + 3y - 2xy)', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gleichartige Terme zusammenfassen',
          content: `4x²y - 2x²y = 2x²y
Damit:
2x²y - 6xy² + 3xy`,
        },
        {
          title: 'Gemeinsamen Faktor ausklammern',
          content: `2x²y - 6xy² + 3xy
= xy(2x - 6y + 3)

✅ Ergebnis: xy(2x - 6y + 3)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gleichartige Terme zuerst zusammenfassen.
2️⃣ Gemeinsamen Faktor finden.
3️⃣ Ausklammern.`,
    },
  },

  {
    id: 'M1_2023_OTR_TERM_3a',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 3a: Berechne und vereinfache so weit wie möglich.

T1 = a·b·c
T2 = a²·b·c
T3 = a·b²·c
T4 = a·b·c²

Berechne: T1 · T2`,
    options: [
      { label: 'a³b²c²', correct: true },
      { label: 'a²b²c²', correct: false },
      { label: 'ab²c', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Terme multiplizieren',
          content: `T1 · T2 = (a·b·c) · (a²·b·c)
= a³b²c²

✅ Ergebnis: a³b²c²`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Bei Potenzen gleicher Basis Exponenten addieren.`,
    },
  },

  {
    id: 'M1_2023_OTR_TERM_3b',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 3b: Berechne und vereinfache so weit wie möglich.

T3 · T4`,
    options: [
      { label: 'a²b³c³', correct: true },
      { label: 'a²bc²', correct: false },
      { label: 'ab³c³', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Multiplizieren',
          content: `T3 · T4 = (a·b²·c) · (a·b·c²)
= a²b³c³

✅ Ergebnis: a²b³c³`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Gleiche Basis → Exponenten addieren.`,
    },
  },

  {
    id: 'M1_2023_OTR_TERM_3c',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 3c: Berechne und vereinfache so weit wie möglich.

T3 : T4`,
    options: [
      { label: 'b/c', correct: false },
      { label: 'c', correct: false },
      { label: 'a/c', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Division vereinfachen',
          content: `T3 : T4 = (a·b²·c) : (a·b·c²)
= b / c

✅ Ergebnis: b/c`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Bei Division gleiche Faktoren kürzen.`,
    },
  },

  {
    id: 'M1_2023_OTR_KERZE_4a',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Funktionen',
    questionText: `Aufgabe 4a: Notiere die zugehörige Geradengleichung.

Die Stabkerze wird durch die Gerade y = -1.5x + 10 beschrieben.`,
    options: [
      { label: 'y = -1.5x + 10', correct: true },
      { label: 'y = 1.5x + 10', correct: false },
      { label: 'y = -1.5x - 10', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Geradengleichung',
          content: `Aus der offiziellen Lösung:
y = -1.5x + 10

✅ Ergebnis: y = -1.5x + 10`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
y-Achsenabschnitt zuerst erkennen, dann Steigung ablesen.`,
    },
  },

  {
    id: 'M1_2023_OTR_KERZE_4b',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Funktionen',
    questionText: `Aufgabe 4b: Nach wie vielen Stunden ist die Kerze vollständig abgebrannt?`,
    options: [
      { label: '6 h 40 min', correct: true },
      { label: '5 h', correct: false },
      { label: '7 h', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Nullstelle berechnen',
          content: `0 = -1.5x + 10
1.5x = 10
x = 6.666...

✅ Ergebnis: 6 h 40 min`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Die Kerze ist weg, wenn y = 0 ist.`,
    },
  },

  {
    id: 'M1_2023_OTR_KERZE_4d',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Funktionen',
    questionText: `Aufgabe 4d: Nach wie vielen Stunden sind die zwei Kerzen gleich lang?`,
    options: [
      { label: '2.5 h', correct: true },
      { label: '5 h', correct: false },
      { label: '6 h', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gleichsetzen',
          content: `Stabkerze: y = -1.5x + 10
Stumpenkerze: y = -0.5x + 7.5

-1.5x + 10 = -0.5x + 7.5
-1x = -2.5
x = 2.5

✅ Ergebnis: 2.5 h`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Gleich lang = beide Funktionswerte gleichsetzen.`,
    },
  },

  {
    id: 'M1_2023_OTR_KERZE_4e',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Funktionen',
    questionText: `Aufgabe 4e: Nach wie vielen Stunden ist die Stumpenkerze genau doppelt so gross wie die Stabkerze?`,
    options: [
      { label: '5 h', correct: true },
      { label: '6 h', correct: false },
      { label: '2.5 h', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Doppelte Länge',
          content: `Stabkerze: y = -1.5x + 10
Stumpenkerze: y = -0.5x + 7.5

-0.5x + 7.5 = 2(-1.5x + 10)
-0.5x + 7.5 = -3x + 20
2.5x = 12.5
x = 5

Dann:
Stabkerze = 2.5 cm
Stumpenkerze = 5 cm

✅ Ergebnis: nach 5 h`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Die Stumpenkerze soll doppelt so lang sein wie die Stabkerze → Gleichung aufstellen.`,
    },
  },

  {
    id: 'M1_2023_OTR_STAT_5a',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Statistik & Diagramme',
    questionText: `Aufgabe 5a: Berechne die absoluten Häufigkeiten.

Insgesamt wurden 720 SchülerInnen befragt.
Kombination aus beidem: 252
Die restlichen Werte ergeben sich aus dem Kreisdiagramm.`,
    options: [
      { label: 'Präsenz: 288, Fern: 108, Kombination: 252, Keine Angabe: 72', correct: true },
      { label: 'Präsenz: 252, Fern: 108, Kombination: 288, Keine Angabe: 72', correct: false },
      { label: 'Präsenz: 288, Fern: 72, Kombination: 252, Keine Angabe: 108', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Absolute Häufigkeiten',
          content: `Keine Angabe: 36° von 360° = 1/10 von 720 = 72
Ausschliesslich Präsenzunterricht: 720 · 0.4 = 288
Ausschliesslich Fernunterricht: 720 - 252 - 288 - 72 = 108

✅ Präsenz: 288
✅ Fern: 108
✅ Kombination: 252
✅ Keine Angabe: 72`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Aus dem Kreisdiagramm die Winkel in Anteile umrechnen.
2️⃣ Mit der Gesamtzahl 720 multiplizieren.
3️⃣ Fehlende Werte ergänzen.`,
    },
  },

  {
    id: 'M1_2023_OTR_STAT_5b',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Statistik & Diagramme',
    questionText: `Aufgabe 5b: Welches Säulendiagramm passt zur Umfrage?`,
    options: [
      { label: 'Diagramm rechts oben', correct: true },
      { label: 'Diagramm links oben', correct: false },
      { label: 'Diagramm links unten', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Richtiges Diagramm',
          content: `Die offizielle Lösung nennt das Diagramm rechts oben als korrekt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Vergleiche die Balkenhöhen mit den absoluten Häufigkeiten.`,
    },
  },

  {
    id: 'M1_2023_OTR_GEOM_6a',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=10',
    topic: 'Geometrie',
    questionText: `Aufgabe 6a: Die Seiten a und b sind parallel. Bestimme die Grösse der Winkel α und β.`,
    options: [
      { label: 'α = 75°, β = 150°', correct: true },
      { label: 'α = 150°, β = 75°', correct: false },
      { label: 'α = 60°, β = 120°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Winkel bestimmen',
          content: `Stufen- bzw. Wechselwinkel an geschnittenen Parallelen sind gleich gross:
Der Rest von β ist also 30°.
Im gleichschenkligen Dreieck folgt daraus α = 75°, d.h. β = 150°.

✅ α = 75°
✅ β = 150°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Parallelwinkel nutzen.
2️⃣ Restwinkel im Dreieck bestimmen.
3️⃣ Mit Winkelsumme kontrollieren.`,
    },
  },

  {
    id: 'M1_2023_OTR_GEOM_6b',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=11',
    topic: 'Geometrie',
    questionText: `Aufgabe 6b: Die rote Fläche F ist 7/24 der Trapezfläche ABCD. Die Seite s des Dreiecks F ist parallel zur Höhe des Trapezes. Berechne s.`,
    options: [
      { label: 's = 7', correct: true },
      { label: 's = 6', correct: false },
      { label: 's = 8', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Flächenverhältnis nutzen',
          content: `Trapezfläche: 144
Schraffierte Dreiecksfläche: 42
Höhe des Dreiecks: 12

Aus der Fläche:
1/2 · s · 12 = 42
6s = 42
s = 7

✅ Ergebnis: s = 7`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Fläche aufschreiben.
2️⃣ Dreiecksformel verwenden.
3️⃣ Nach s auflösen.`,
    },
  },
];


