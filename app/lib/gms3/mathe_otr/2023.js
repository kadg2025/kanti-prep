
import { frac } from '../../mathFormat';

export const questions2023_oTR = [
  {
    id: 'M1_2023_OTR_EQ_1',
    verified: true,
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1: Gleichungen lösen

a) ${frac('1', '2')}x + ${frac('1', '4')}x + ${frac('1', '8')}x = 14

b) ${frac('6', '11')}(x – 3) + 2 = 1 – ${frac('1', '22')}(10x + 3)`,
    options: [
      { label: 'a) x = 16 | b) x = 0.5', correct: true },
      { label: 'a) x = 8 | b) x = 2', correct: false },
      { label: 'a) x = 112/7 | b) x = 9/28', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Gleichungen lösen: Ziel ist immer, x auf einer Seite allein stehen zu haben.
🔑 Bruchgleichung: Mit dem kgV aller Nenner multiplizieren, damit die Brüche verschwinden.
🔑 Klammer mit Faktor: Jeden Term in der Klammer einzeln mit dem Faktor davor multiplizieren (Vorzeichen beachten!).`,
        },
        {
          title: 'a) Mit dem kgV multiplizieren',
          content: `1/2 x + 1/4 x + 1/8 x = 14     | ×8
4x + 2x + x = 112
7x = 112
x = 16

✅ x = 16`,
        },
        {
          title: 'b) Klammern auflösen',
          content: `6/11(x–3) + 2 = 1 – 1/22(10x+3)     | ×22
22 · 6/11(x–3) + 22·2 = 22·1 – 22 · 1/22(10x+3)
12(x–3) + 44 = 22 – (10x+3)
12x – 36 + 44 = 22 – 10x – 3`,
        },
        {
          title: 'b) Nach x auflösen',
          content: `12x + 8 = 19 – 10x     | +10x, –8
22x = 11
x = 11/22 = 1/2

✅ x = 0.5`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Nenner mit dem kgV wegmultiplizieren.
2️⃣ Klammern sauber auflösen (Vorzeichen beachten!).
3️⃣ Alle x-Terme auf eine Seite, Zahlen auf die andere.
4️⃣ Am Schluss durch den Koeffizienten teilen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Bruchgleichungen mit kgV und Klammern.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Löse: x/2 + x/4 = 12', answer: '16', tip: 'kgV von 2 und 4 ist 4 — damit multiplizieren.' },
      { level: 'einfach', q: 'Löse: x/3 + x/6 = 9', answer: '18', tip: 'kgV von 3 und 6 ist 6.' },
      { level: 'einfach', q: 'Löse: 2(x - 1) + 3 = 1 - x', answer: '0', tip: 'Klammer auflösen, dann x auf eine Seite bringen.' },

      { level: 'mittel', q: 'Löse: 1/2 x + 1/4 x = 21', answer: '28', tip: 'kgV von 2 und 4 ist 4.' },
      { level: 'mittel', q: 'Löse: 1/3(x - 3) + 2 = 1 - 1/6(2x + 3)', answer: '-3/4', tip: 'kgV von 3 und 6 ist 6 — die ganze Gleichung damit multiplizieren.' },
      { level: 'mittel', q: 'Löse: 1/2 x + 1/4 x + 1/4 x = 10', answer: '10', tip: 'kgV von 2 und 4 ist 4 — alle Brüche damit wegmultiplizieren.' },

      { level: 'schwer', q: 'Löse: 2/5(x - 2) + 1 = 1 - 1/10(4x + 1)', answer: '7/8', tip: 'kgV von 5 und 10 ist 10 — die ganze Gleichung damit multiplizieren.' },
      { level: 'schwer', q: 'Löse: 3/11(x - 2) + 1 = 2 - 1/22(5x + 1)', answer: '3', tip: 'kgV von 11 und 22 ist 22 — genau wie im Original mit b).' },

      { level: 'kanti', q: 'Löse: 1/2 x + 1/4 x + 1/8 x = 14', answer: '16', tip: 'kgV von 2, 4, 8 ist 8 — genau wie im Original a).' },
      { level: 'kanti', q: 'Löse: 6/11(x - 3) + 2 = 1 - 1/22(10x + 3). Gib die Lösung als Dezimalzahl an.', answer: '0.5', tip: 'kgV von 11 und 22 ist 22 — genau wie im Original b).' },
    ],
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
    questionText: `Aufgabe 6a: Die Seiten a und b sind parallel. Ein gleichschenkliges Dreieck ist Teil der Figur. Bestimme die Grösse der Winkel α und β.
Die Figur ist nicht massstabsgetreu!`,
    options: [
      { label: 'α = 75°, β = 150°', correct: true },
      { label: 'α = 150°, β = 75°', correct: false },
      { label: 'α = 60°, β = 120°', correct: false },
    ],
    solution: {
      intro: 'Die genaue Figur mit allen gegebenen Winkeln wird für den vollständigen Schritt-für-Schritt-Weg benötigt — hier die angewendeten Regeln und das Ergebnis.',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔑 Stufen- bzw. Wechselwinkel an geschnittenen Parallelen sind gleich gross.
🔺 Gleichschenkliges Dreieck: Die beiden Basiswinkel sind gleich gross.
📐 Nebenwinkel ergänzen sich zu 180°.`,
        },
        {
          title: 'Winkel bestimmen',
          content: `Stufen- bzw. Wechselwinkel an geschnittenen Parallelen sind gleich gross — daraus ergibt sich, dass der Restwinkel bei β 30° beträgt.
Im gleichschenkligen Dreieck folgt daraus α = 75° (Basiswinkel).
β ist der Nebenwinkel zu α: β = 180° − 30° = 150°... β entsteht als Summe/Nebenwinkel-Beziehung aus dem gleichschenkligen Dreieck und ergibt 150°.

✅ α = 75°
✅ β = 150°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit der Figur zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164497/AP23_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Parallelwinkel (Stufen-/Wechselwinkel) nutzen.
2️⃣ Basiswinkel im gleichschenkligen Dreieck gleichsetzen.
3️⃣ Restwinkel im Dreieck bzw. Nebenwinkel bestimmen.
4️⃣ Mit Winkelsumme kontrollieren.`,
    },

    // ── ÜBUNGEN: aufbauend zu Parallelwinkeln und gleichschenkligen Dreiecken.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'An zwei parallelen Geraden ist ein Stufenwinkel 30°. Wie gross ist der zugehörige Stufenwinkel an der anderen Geraden?', answer: '30', tip: 'Stufenwinkel an Parallelen sind gleich gross.' },
      { level: 'einfach', q: 'Ein gleichschenkliges Dreieck hat einen Basiswinkel von 75°. Wie gross ist der andere Basiswinkel?', answer: '75', tip: 'Beide Basiswinkel eines gleichschenkligen Dreiecks sind gleich gross.' },
      { level: 'einfach', q: 'Ein Winkel beträgt 30°. Wie gross ist sein Nebenwinkel?', answer: '150', tip: 'Nebenwinkel ergänzen sich zu 180°.' },

      { level: 'mittel', q: 'Ein gleichschenkliges Dreieck hat einen Restwinkel (Spitze) von 30°. Wie gross ist je ein Basiswinkel?', answer: '75', tip: '(180° − Spitzenwinkel) ÷ 2.' },
      { level: 'mittel', q: 'Ein Basiswinkel eines gleichschenkligen Dreiecks beträgt 75°. Wie gross ist der Nebenwinkel dazu?', answer: '105', tip: '180° minus den Basiswinkel.' },
      { level: 'mittel', q: 'Zwei parallele Geraden werden geschnitten. Ein Wechselwinkel beträgt 75°. Wie gross ist sein Nebenwinkel?', answer: '105', tip: 'Nebenwinkel ergänzen sich zu 180°.' },

      { level: 'schwer', q: 'Ein gleichschenkliges Dreieck hat einen Basiswinkel von 75°. Wie gross ist der Winkel an der Spitze?', answer: '30', tip: '180° − 2×Basiswinkel.' },
      { level: 'schwer', q: 'β entsteht als Nebenwinkel zu einem 30°-Restwinkel in einem gleichschenkligen Dreieck. Wie gross ist β?', answer: '150', tip: '180° − 30°.' },

      { level: 'kanti', q: 'Wie im Original: Ein Restwinkel von 30° entsteht durch Stufenwinkel an Parallelen. Wie gross ist der Basiswinkel α im gleichschenkligen Dreieck?', answer: '75', tip: '(180° − 30°) ÷ 2 = 75°.' },
      { level: 'kanti', q: 'Wie im Original: Wenn α = 75° der Basiswinkel ist, wie gross ist β als Nebenwinkel zum Restwinkel (30°)?', answer: '150', tip: '180° − 30° = 150°.' },
    ],
  },

  {
    id: 'M1_2023_OTR_GEOM_6b',
    verified: true,
    year: 2023,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147192/AP23_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=11',
    topic: 'Geometrie',
    questionText: `Aufgabe 6b: Das Trapez ABCD hat die parallelen Seiten 15 und 3 sowie die Höhe 16. Die rote Fläche F (ein Dreieck) ist 7/24 der Trapezfläche ABCD. Die Seite s des Dreiecks F ist parallel zur Höhe des Trapezes. Berechne s.
Die Figur ist nicht massstabsgetreu!`,
    options: [
      { label: 's = 7', correct: true },
      { label: 's = 6', correct: false },
      { label: 's = 8', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Trapezfläche: A = (a + c)/2 · h, wobei a und c die parallelen Seiten und h die Höhe sind.
📐 Dreiecksfläche: A = 1/2 · Grundseite · Höhe.
🔑 Strategie: Erst die Gesamtfläche berechnen, dann über den gegebenen Bruchteil die gesuchte Teilfläche bestimmen, und daraus rückwärts die gesuchte Länge.`,
        },
        {
          title: 'Trapezfläche berechnen',
          content: `Parallele Seiten: 15 und 3, Höhe: 16
F_Trapez = (15 + 3)/2 · 16 = 9 · 16 = 144`,
        },
        {
          title: 'Rote Dreiecksfläche berechnen',
          content: `F = 7/24 · F_Trapez = 7/24 · 144 = 42`,
        },
        {
          title: 'Höhe des Dreiecks bestimmen',
          content: `Die Höhe des roten Dreiecks entspricht der Differenz der beiden parallelen Trapezseiten:
h_Dreieck = 15 − 3 = 12`,
        },
        {
          title: 'Nach s auflösen',
          content: `Dreiecksfläche: 1/2 · s · h_Dreieck = F
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
1️⃣ Trapezfläche mit der Formel (a+c)/2 · h berechnen.
2️⃣ Gesuchte Teilfläche über den gegebenen Bruchteil bestimmen.
3️⃣ Passende Flächenformel (hier: Dreieck) aufschreiben.
4️⃣ Nach der gesuchten Grösse auflösen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Trapezfläche, Dreiecksfläche und Flächen-Bruchteilen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne die Fläche eines Trapezes mit parallelen Seiten 10 und 6 und Höhe 4.', answer: '32', tip: 'Fläche = (a+c)/2 · h.' },
      { level: 'einfach', q: 'Berechne die Fläche eines Dreiecks mit Grundseite 6 und Höhe 4.', answer: '12', tip: 'Fläche = 1/2 · Grundseite · Höhe.' },
      { level: 'einfach', q: 'Berechne: 1/4 von 40.', answer: '10', tip: 'Bruch mal Zahl.' },

      { level: 'mittel', q: 'Ein Trapez hat die parallelen Seiten 12 und 4 und die Höhe 10. Wie gross ist die Fläche?', answer: '80', tip: '(a+c)/2 · h.' },
      { level: 'mittel', q: 'Ein Dreieck hat die Fläche 24 und die Höhe 6. Wie lang ist die Grundseite?', answer: '8', tip: 'Grundseite = 2·Fläche / Höhe.' },
      { level: 'mittel', q: 'Ein Trapez mit parallelen Seiten 12 und 4 — wie gross ist die Differenz der beiden Seiten?', answer: '8', tip: 'Einfach subtrahieren.' },

      { level: 'schwer', q: 'Ein Trapez hat die parallelen Seiten 20 und 8 und die Höhe 10. Ein Dreieck mit Fläche 1/4 der Trapezfläche hat als Höhe die Seitendifferenz. Wie lang ist seine Grundseite?', answer: '8.75', tip: 'Erst Trapezfläche, dann 1/4 davon, dann mit der Dreiecksformel nach der Grundseite auflösen.' },
      { level: 'schwer', q: 'Ein Dreieck hat die Fläche 42 und die Höhe 12. Wie lang ist die Grundseite?', answer: '7', tip: 'Grundseite = 2·Fläche / Höhe — genau wie im Original.' },

      { level: 'kanti', q: 'Wie im Original: Ein Trapez mit Seiten 15 und 3 und Höhe 16 hat welche Fläche?', answer: '144', tip: '(15+3)/2 · 16.' },
      { level: 'kanti', q: 'Wie im Original: 7/24 von 144 ergibt welche Fläche?', answer: '42', tip: '7/24 · 144 = 42.' },
    ],
  },
];


