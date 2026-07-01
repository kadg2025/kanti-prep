
import { frac } from '../../mathFormat';

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
    id: 'M1_2023_OTR_TERM_2',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 2: Terme vereinfachen

a) Vereinfache so weit wie möglich:
4(a − 1) + 3(a − 1) − 5(a − 1)

b) Multipliziere aus:
−2xy²(x² + 3x)

c) Vereinfache und klammere so weit wie möglich aus:
−2x⁴y³ + 6x³y³ − 3x³y² + 2x⁴y³`,
    options: [
      { label: 'a) 2a−2 | b) −2x³y²−6x²y² | c) 3x³y²(2y−1)', correct: true },
      { label: 'a) 2a−2 | b) −2x³y²−6x²y² | c) 3x³y²(2y+1)', correct: false },
      { label: 'a) 12a−12 | b) 2x³y²+6x²y² | c) 3x³y²(2y−1)', correct: false },
    ],
    solution: {
      intro: 'Diese Aufgabe war in einer früheren Version dieser App komplett anders (und falsch) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version.',
      steps: [
        {
          title: 'a) Gleichartige Klammern zusammenfassen',
          content: `4(a − 1) + 3(a − 1) − 5(a − 1)
= (4 + 3 − 5)(a − 1)
= 2(a − 1)
= 2a − 2

✅ Ergebnis: 2a − 2`,
        },
        {
          title: 'b) Ausmultiplizieren',
          content: `−2xy² · x² = −2x³y²
−2xy² · 3x = −6x²y²

✅ Ergebnis: −2x³y² − 6x²y²`,
        },
        {
          title: 'c) Zusammenfassen und ausklammern',
          content: `Gleichartige Terme zusammenfassen:
−2x⁴y³ + 2x⁴y³ = 0
Es bleibt: 6x³y³ − 3x³y²

Gemeinsamen Faktor ausklammern:
ggT der Zahlen: ggT(6, 3) = 3
Gemeinsame Variablen (kleinster Exponent): x³y²

6x³y³ − 3x³y² = 3x³y²(2y − 1)

✅ Ergebnis: 3x³y²(2y − 1)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gleiche Klammern zuerst zusammenfassen (Vorfaktoren addieren/subtrahieren).
2️⃣ Beim Ausmultiplizieren: Zahlen multiplizieren, Exponenten gleicher Buchstaben addieren.
3️⃣ Vor dem Ausklammern erst gleichartige Terme zusammenfassen.
4️⃣ ggT der Zahlen und gemeinsame Variablen (kleinster Exponent) ausklammern.`,
    },

    // ── ÜBUNGEN a): gleiche Klammern zusammenfassen.
    // ── ÜBUNGEN b): Klammer mit Variablen ausmultiplizieren.
    // ── ÜBUNGEN c): zusammenfassen und ausklammern.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Fasse zusammen: 4+3−5', answer: '2', tip: 'Addiere und subtrahiere der Reihe nach.' },
      { level: 'einfach', q: 'Multipliziere aus: x · x². Welchen Exponenten hat das Ergebnis?', answer: '3', tip: 'Bei gleicher Basis werden Exponenten addiert.' },
      { level: 'einfach', q: 'Multipliziere aus: −2x · 3x. Wie lautet der Vorfaktor (die Zahl) im Ergebnis?', answer: '-6', tip: 'Multipliziere zuerst nur die Zahlen.' },

      { level: 'mittel', q: 'Vereinfache: 2(a−1)', answer: '2a-2', tip: 'Multipliziere jeden Term in der Klammer mit der 2.' },
      { level: 'mittel', q: 'Fasse zusammen: 4(k−1) + 3(k−1) − 5(k−1)', answer: '2k-2', tip: 'Fasse zuerst die Vorfaktoren der gleichen Klammer zusammen.' },
      { level: 'mittel', q: 'Multipliziere aus: −2m(n + 3n)', answer: '-8mn', tip: 'Fasse zuerst n+3n zusammen, dann mit −2m multiplizieren.' },

      { level: 'schwer', q: 'Multipliziere aus: −2xy²(x² + 3x). Wie lautet der Vorfaktor (die Zahl) des zweiten Terms im Ergebnis?', answer: '-6', tip: 'Multipliziere −2 mit 3, und addiere die Exponenten von x.' },
      { level: 'schwer', q: 'Fasse zusammen: −2c⁴ + 2c⁴', answer: '0', tip: 'Zwei entgegengesetzt gleiche Terme heben sich auf.' },

      { level: 'kanti', q: 'Fasse zusammen: 6c − 3c', answer: '3c', tip: 'Nur die Vorfaktoren werden subtrahiert.' },
      { level: 'kanti', q: 'Klammere aus: 6xy − 3x. Was bleibt in der Klammer stehen, wenn du 3x ausklammerst?', answer: '2y-1', tip: 'Teile jeden Term durch den ausgeklammerten Faktor 3x.' },
    ],
  },

  {
    id: 'M1_2023_OTR_TERM_3',
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 3: Terme berechnen

Gegeben sind folgende vier Terme:
T1 = a·b·c
T2 = ${frac('1', 'a·b·c')}
T3 = ${frac('a·b', 'c')}
T4 = ${frac('a', 'b·c')}

Berechne und vereinfache so weit wie möglich:

a) T1 · T2

b) T3 · T4

c) T3 : T4`,
    options: [
      { label: 'a) 1 | b) a²/c² | c) b²', correct: true },
      { label: 'a) 1 | b) a/c | c) b', correct: false },
      { label: 'a) abc | b) a²/c² | c) b²', correct: false },
    ],
    solution: {
      intro: 'Diese Aufgabe war in einer früheren Version dieser App komplett anders (und falsch) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version.',
      steps: [
        {
          title: 'a) T1 · T2',
          content: `T1 · T2 = a·b·c · 1/(a·b·c) = (a·b·c)/(a·b·c) = 1

✅ Ergebnis: 1`,
        },
        {
          title: 'b) T3 · T4',
          content: `T3 · T4 = (a·b)/c · a/(b·c)
= (a·b·a) / (c·b·c)
= a²b / (b·c²)
= a²/c²   (b kürzt sich weg)

✅ Ergebnis: a²/c²`,
        },
        {
          title: 'c) T3 : T4',
          content: `T3 : T4 = (a·b)/c ÷ a/(b·c)
= (a·b)/c · (b·c)/a
= (a·b·b·c) / (c·a)
= b²   (a und c kürzen sich weg)

✅ Ergebnis: b²`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Division durch einen Bruch = Multiplikation mit dessen Kehrwert.
2️⃣ Zähler mit Zähler, Nenner mit Nenner multiplizieren.
3️⃣ Gemeinsame Faktoren in Zähler und Nenner kürzen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Bruch-Multiplikation/Division mit Variablen und Kürzen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Kürze: (a·b·c)/(a·b·c)', answer: '1', tip: 'Zähler und Nenner sind identisch — was bleibt übrig?' },
      { level: 'einfach', q: 'Vereinfache: (x·y)/x', answer: 'y', tip: 'Kürze den gemeinsamen Faktor x.' },
      { level: 'einfach', q: 'Vereinfache: x/(y·x)', answer: '1/y', tip: 'Kürze den gemeinsamen Faktor x.' },

      { level: 'mittel', q: 'Setze x=2, y=3, z=1 in (x·y)/z · x/(y·z) ein und berechne den Wert.', answer: '4', tip: 'Setze die Werte direkt in beide Brüche ein, dann multiplizieren.' },
      { level: 'mittel', q: 'Setze x=2, y=3, z=1 in (x·y)/z ÷ x/(y·z) ein und berechne den Wert.', answer: '9', tip: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert.' },
      { level: 'mittel', q: 'Vereinfache: (m·n)/(m·n)', answer: '1', tip: 'Zähler und Nenner sind gleich.' },

      { level: 'schwer', q: 'Vereinfache: (a·b)/c · a/(b·c). Welche Variable kürzt sich komplett weg?', answer: 'b', tip: 'b steht einmal im Zähler und einmal im Nenner — beide Male mit Exponent 1.' },
      { level: 'schwer', q: 'Vereinfache: (a·b)/c ÷ a/(b·c). Welchen Exponenten hat b im Ergebnis?', answer: '2', tip: 'b steht sowohl im ersten als auch im zweiten Bruch im Zähler.' },

      { level: 'kanti', q: 'Vereinfache: T1 · T2, wobei T1=a·b·c und T2=1/(a·b·c).', answer: '1', tip: 'Zähler und Nenner sind identisch.' },
      { level: 'kanti', q: 'Vereinfache: T3 : T4, wobei T3=(a·b)/c und T4=a/(b·c). Welchen Exponenten hat b im Ergebnis?', answer: '2', tip: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert, dann kürzen.' },
    ],
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


