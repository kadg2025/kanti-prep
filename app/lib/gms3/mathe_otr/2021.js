
import { frac } from '../../mathFormat';

export const questions2021_oTR = [
  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M1_2021_OTR_POT_1a',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 1: Potenzen
Womit muss man y⁶ multiplizieren, damit man folgendes erhält?

a) 2y⁶
b) (2y)⁶
c) y¹⁸
d) ${frac('1', 'y⁶')}`,
    options: [
      { label: 'a) 2 | b) 64 | c) y¹² | d) y⁻¹² = 1/y¹²', correct: true },
      { label: 'a) 2 | b) 2⁶ | c) y¹² | d) –y⁶', correct: false },
      { label: 'a) 2 | b) 64 | c) y³ | d) 1/y¹²', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Potenzregeln',
          content: `🔑 Wichtige Regeln:
- yᵃ · yᵇ = yᵃ⁺ᵇ  (gleiche Basis → Exponenten addieren)
- (a · b)ⁿ = aⁿ · bⁿ  (Produkt in Potenz)
- y⁻ⁿ = 1/yⁿ  (negativer Exponent = Kehrwert)`,
        },
        {
          title: 'a) y⁶ · ? = 2y⁶',
          content: `y⁶ · 2 = 2y⁶
✅ Antwort: 2`,
        },
        {
          title: 'b) y⁶ · ? = (2y)⁶',
          content: `(2y)⁶ = 2⁶ · y⁶ = 64 · y⁶
y⁶ · 64 = 64y⁶
✅ Antwort: 64`,
        },
        {
          title: 'c) y⁶ · ? = y¹⁸',
          content: `y⁶ · y¹² = y⁶⁺¹² = y¹⁸
✅ Antwort: y¹²`,
        },
        {
          title: 'd) y⁶ · ? = 1/y⁶',
          content: `y⁶ · y⁻¹² = y⁶⁻¹² = y⁻⁶ = 1/y⁶
✅ Antwort: y⁻¹² = 1/y¹²`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Ziel durch y⁶ dividieren = gesuchter Faktor.
2️⃣ yᵃ / yᵇ = yᵃ⁻ᵇ.
3️⃣ Negativer Exponent = Kehrwert.`,
    },

    // ── ÜBUNGEN: aufbauend zu Potenzgesetzen (Basis multiplizieren, Exponenten addieren/subtrahieren).
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung. Gefragt wird nach Zahl/Exponent,
    //    damit die Antwort ohne Hochstellungs-Zeichen eingetippt werden kann.
    practice: [
      { level: 'einfach', q: 'y³ · y² = y^?  Wie lautet der Exponent?', answer: '5', tip: 'Bei gleicher Basis werden die Exponenten addiert.' },
      { level: 'einfach', q: '(2y)³ = ? · y³.  Wie lautet die Zahl vor y³?', answer: '8', tip: 'Zahl und Variable werden separat potenziert: (2y)³ = 2³ · y³.' },
      { level: 'einfach', q: 'y⁵ · y⁴ = y^?  Wie lautet der Exponent?', answer: '9', tip: 'Bei gleicher Basis werden die Exponenten addiert.' },

      { level: 'mittel', q: 'y⁷ · ? = y¹⁰.  Wie lautet der gesuchte Exponent?', answer: '3', tip: 'Ziel-Exponent minus vorhandener Exponent.' },
      { level: 'mittel', q: '(3y)⁴ = ? · y⁴.  Wie lautet die Zahl?', answer: '81', tip: 'Rechne 3⁴ separat aus.' },
      { level: 'mittel', q: 'y⁴ · ? = 1/y⁴.  Wie lautet der gesuchte Exponent (mit Vorzeichen)?', answer: '-8', tip: 'Damit 4 + ? = −4 wird, muss der gesuchte Exponent negativ sein.' },

      { level: 'schwer', q: 'y⁹ · ? = y²⁰.  Wie lautet der gesuchte Exponent?', answer: '11', tip: 'Ziel-Exponent minus vorhandener Exponent.' },
      { level: 'schwer', q: '(5y)² = ? · y².  Wie lautet die Zahl?', answer: '25', tip: 'Rechne 5² separat aus.' },

      { level: 'kanti', q: 'y⁶ · ? = 3y⁶.  Wie lautet die gesuchte Zahl?', answer: '3', tip: 'Gleiche Struktur wie im Original, nur mit einer anderen Zahl.' },
      { level: 'kanti', q: 'y⁸ · ? = 1/y².  Wie lautet der gesuchte Exponent?', answer: '-10', tip: 'Damit yᵃ · y? = y⁻ᵇ wird, muss a + ? = −b gelten.' },
    ],
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M1_2021_OTR_TERM_2',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 2: Terme ordnen
Gegeben sind drei Terme:
A = ${frac('2', '3')}x² + 1
B = 2 − ${frac('4', '3')}x
C = ${frac('8', 'x')} + ${frac('2', '3')}

Ordne A, B, C der Grösse nach für:

a) x = 3

b) x = ${frac('1', '2')}

c) x = −${frac('1', '2')}`,
    options: [
      { label: 'a) B<C<A | b) A<B<C | c) C<A<B', correct: true },
      { label: 'a) A<B<C | b) B<C<A | c) C<A<B', correct: false },
      { label: 'a) B<C<A | b) A<B<C | c) A<B<C', correct: false },
    ],
    solution: {
      intro: 'Setze den gegebenen x-Wert in jeden der drei Terme ein und berechne den Zahlenwert. Achtung bei negativem x: x² ist immer positiv, auch wenn x negativ ist!',
      steps: [
        {
          title: 'a) x = 3 einsetzen',
          content: `A = 2/3·3² + 1 = 2/3·9 + 1 = 6 + 1 = 7
B = 2 – 4/3·3 = 2 – 4 = –2
C = 8/3 + 2/3 = 10/3 ≈ 3.33

Reihenfolge: –2 < 10/3 < 7
✅ B < C < A`,
        },
        {
          title: 'b) x = 1/2 einsetzen',
          content: `A = 2/3·(1/2)² + 1 = 2/3·1/4 + 1 = 2/12 + 1 = 1/6 + 1 = 7/6 ≈ 1.17
B = 2 – 4/3·1/2 = 2 – 2/3 = 4/3 ≈ 1.33
C = 8/(1/2) + 2/3 = 16 + 2/3 = 50/3 ≈ 16.67

Achtung bei 8/x: Wenn x = 1/2 → 8 ÷ (1/2) = 8 · 2 = 16!

Reihenfolge: 7/6 < 4/3 < 50/3
✅ A < B < C`,
        },
        {
          title: 'c) x = –1/2 einsetzen',
          content: `A = 2/3·(–1/2)² + 1 = 2/3·1/4 + 1 = 1/6 + 1 = 7/6 ≈ 1.17
B = 2 – 4/3·(–1/2) = 2 + 2/3 = 8/3 ≈ 2.67
C = 8/(–1/2) + 2/3 = –16 + 2/3 = –46/3 ≈ –15.33

Achtung bei negativen x:
- x² ist immer positiv: (–1/2)² = +1/4.
- 8/(–1/2) = –16 (negativ!).
- 4/3·(–1/2) = –2/3 → minus mal minus = plus.

Reihenfolge: –46/3 < 7/6 < 8/3
✅ C < A < B`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ x-Wert in jeden Term einsetzen.
2️⃣ Achtung bei Brüchen als x: 8/(1/2) = 8 · 2 = 16 (Division durch einen Bruch = Multiplikation mit dem Kehrwert).
3️⃣ Achtung bei negativem x: x² wird immer positiv, aber –4/3·x kann das Vorzeichen wechseln.
4️⃣ Ergebnisse von klein nach gross sortieren.`,
    },

    // ── ÜBUNGEN: aufbauend zu x-Wert-Einsetzen in Terme mit Brüchen, Potenzen und negativen Zahlen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 2/3 · 3² + 1', answer: '7', tip: 'Erst die Potenz, dann Punkt-, dann Strichrechnung.' },
      { level: 'einfach', q: 'Berechne: 2 − 4/3 · 3', answer: '-2', tip: 'Erst die Multiplikation, dann die Subtraktion.' },
      { level: 'einfach', q: 'Berechne: 8/3 + 2/3', answer: '10/3', tip: 'Gleicher Nenner — einfach die Zähler addieren.' },

      { level: 'mittel', q: 'Berechne: 2/3 · (1/2)² + 1', answer: '7/6', tip: 'Erst quadrieren, dann multiplizieren, dann addieren.' },
      { level: 'mittel', q: 'Berechne: 2 − 4/3 · 1/2', answer: '4/3', tip: 'Bruch mal Bruch, dann von 2 subtrahieren.' },
      { level: 'mittel', q: 'Berechne: 8 ÷ (1/2) + 2/3', answer: '50/3', tip: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert.' },

      { level: 'schwer', q: 'Berechne: 2/3 · (−1/2)² + 1', answer: '7/6', tip: 'Achtung: Eine negative Zahl im Quadrat wird positiv.' },
      { level: 'schwer', q: 'Berechne: 8 ÷ (−1/2) + 2/3', answer: '-46/3', tip: 'Division durch eine negative Zahl ergibt ein negatives Ergebnis.' },

      { level: 'kanti', q: 'Setze x=2 in A = 2/3·x² + 1 ein und vereinfache.', answer: '11/3', tip: 'Gleiches Vorgehen wie bei den anderen x-Werten.' },
      { level: 'kanti', q: 'Setze x=−1 in C = 8/x + 2/3 ein und vereinfache.', answer: '-22/3', tip: 'Achtung beim Vorzeichen der Division.' },
    ],
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M1_2021_OTR_BRUCH_3a',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Gleichungen',
    questionText: `Aufgabe 3a: Bruchgleichung lösen

3x/8 – 6x/2 = 3x/4 + 9/5`,
    options: [
      { label: 'x = –8/15', correct: true },
      { label: 'x = 8/15', correct: false },
      { label: 'x = –15/8', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Strategie',
          content: `Bei Bruchgleichungen: Alle Nenner bestimmen → kgV berechnen → beide Seiten mit kgV multiplizieren → Nenner verschwinden.`,
        },
        {
          title: 'kgV der Nenner bestimmen',
          content: `Nenner: 8, 2, 4, 5
kgV(8, 2, 4, 5) = 40

Beide Seiten mit 40 multiplizieren:
40 · 3x/8 – 40 · 6x/2 = 40 · 3x/4 + 40 · 9/5
15x – 120x = 30x + 72`,
        },
        {
          title: 'Gleichung lösen',
          content: `15x – 120x = 30x + 72
–105x = 30x + 72     | –30x
–135x = 72           | ÷(–135)
x = 72/(–135) = –72/135 = –8/15

✅ x = –8/15`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ kgV aller Nenner berechnen.
2️⃣ Beide Seiten mit kgV multiplizieren.
3️⃣ Brüche verschwinden → normale Gleichung lösen.`,
    },
  },

  {
    id: 'M1_2021_OTR_BRUCH_3b',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Gleichungen',
    questionText: `Aufgabe 3b: Bruchgleichung lösen

8/x + 7/x = 5`,
    options: [
      { label: 'x = 3', correct: true },
      { label: 'x = 5', correct: false },
      { label: 'x = 15', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Linke Seite zusammenfassen',
          content: `8/x + 7/x = 15/x
(gleicher Nenner → Zähler addieren)`,
        },
        {
          title: 'Gleichung lösen',
          content: `15/x = 5     | · x
15 = 5x      | ÷5
x = 3

Probe: 8/3 + 7/3 = 15/3 = 5 ✅

✅ x = 3`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Brüche mit gleichem Nenner zusammenfassen.
2️⃣ Beide Seiten mit x multiplizieren.
3️⃣ Nach x auflösen.`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M1_2021_OTR_KLAMMER_4',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 4: Klammern
Klammere soweit wie möglich aus:

a) 12a + 39ax

b) 14b − 42ab²

Löse die Klammern auf:

c) z(7xz² + 8bz)

d) (7a²bk³ − 9kpu²) · 2k`,
    options: [
      { label: 'a) 3a(4+13x) | b) 14b(1−3ab) | c) 7xz³+8bz² | d) 14a²bk⁴−18k²pu²', correct: true },
      { label: 'a) 3(4a+13ax) | b) 7b(2−6ab²) | c) 7xz³+8bz² | d) 14a²bk⁴−18kpu²', correct: false },
      { label: 'a) 3a(4+13x) | b) 7b(2−6ab²) | c) 7xz²+8bz | d) 14a²bk⁴−18k²pu²', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Strategie',
          content: `Ausklammern = den grössten gemeinsamen Faktor (ggT) vor die Klammer ziehen. Was ist allen Termen gemeinsam? Zahlen UND Variablen prüfen!
Klammern auflösen (umgekehrter Weg) = jeden Term in der Klammer einzeln mit dem äusseren Faktor multiplizieren. Variablen: Exponenten addieren (xᵃ · xᵇ = xᵃ⁺ᵇ).`,
        },
        {
          title: 'a) 12a + 39ax',
          content: `ggT der Zahlen: ggT(12, 39) = 3
Gemeinsame Variable: a (kommt in beiden vor)
→ ggT = 3a

12a + 39ax = 3a · 4 + 3a · 13x = 3a(4 + 13x)

Probe: 3a · 4 = 12a ✅ | 3a · 13x = 39ax ✅`,
        },
        {
          title: 'b) 14b − 42ab²',
          content: `ggT der Zahlen: ggT(14, 42) = 14
Gemeinsame Variable: b (kommt als b¹ und b² vor → min. b¹)
→ ggT = 14b

14b − 42ab² = 14b · 1 − 14b · 3ab = 14b(1 − 3ab)

Probe: 14b · 1 = 14b ✅ | 14b · 3ab = 42ab² ✅`,
        },
        {
          title: 'c) z(7xz² + 8bz)',
          content: `z · 7xz² = 7xz³
z · 8bz = 8bz²

✅ Ergebnis: 7xz³ + 8bz²`,
        },
        {
          title: 'd) (7a²bk³ − 9kpu²) · 2k',
          content: `7a²bk³ · 2k = 14a²bk⁴
9kpu² · 2k = 18k²pu²

✅ Ergebnis: 14a²bk⁴ − 18k²pu²`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Ausklammern: ggT der Zahlen UND gemeinsame Variablen (kleinster Exponent) bestimmen.
2️⃣ Klammern auflösen: jeden Term in der Klammer einzeln mit dem äusseren Faktor multiplizieren.
3️⃣ Bei Variablen: Exponenten addieren (xᵃ · xᵇ = xᵃ⁺ᵇ).
4️⃣ Probe machen: ausmultiplizieren und mit dem Original vergleichen.`,
    },

    // ── ÜBUNGEN a)/b): ggT bestimmen und ausklammern.
    // ── ÜBUNGEN c)/d): Klammer mit dem äusseren Faktor ausmultiplizieren.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Wie lautet der ggT von 12 und 39?', answer: '3', tip: 'Grösster gemeinsamer Teiler der beiden Zahlen.' },
      { level: 'einfach', q: 'Wie lautet der ggT von 14 und 42?', answer: '14', tip: 'Grösster gemeinsamer Teiler der beiden Zahlen.' },
      { level: 'einfach', q: 'Klammere aus: 6x + 9xy', answer: '3x(2+3y)', tip: 'ggT der Zahlen und gemeinsame Variable vor die Klammer ziehen.' },

      { level: 'mittel', q: 'Klammere aus: 10a + 25ab', answer: '5a(2+5b)', tip: 'ggT der Zahlen und gemeinsame Variable vor die Klammer ziehen.' },
      { level: 'mittel', q: 'Multipliziere aus: z(3x + 5b)', answer: '3xz+5bz', tip: 'Jeden Term in der Klammer einzeln mit z multiplizieren.' },
      { level: 'mittel', q: 'Multipliziere aus: (4a − 6b) · 3', answer: '12a-18b', tip: 'Jeden Term in der Klammer einzeln mit 3 multiplizieren.' },

      { level: 'schwer', q: 'Klammere so weit wie möglich aus: 8xy + 20xz', answer: '4x(2y+5z)', tip: 'ggT der Zahlen und gemeinsame Variable(n) vor die Klammer ziehen.' },
      { level: 'schwer', q: 'Multipliziere aus: w(4x + 7y)', answer: '4wx+7wy', tip: 'Jeden Term in der Klammer einzeln mit w multiplizieren.' },

      { level: 'kanti', q: 'Multipliziere aus: z · z². Welchen Exponenten hat das Ergebnis (bei der Basis z)?', answer: '3', tip: 'Bei gleicher Basis werden die Exponenten addiert.' },
      { level: 'kanti', q: 'Multipliziere aus: 2k · k³. Welchen Exponenten hat das Ergebnis (bei der Basis k)?', answer: '4', tip: 'Auch hier: Exponenten addieren, Vorfaktor separat multiplizieren.' },
    ],
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M1_2021_OTR_WUERFEL_5a',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Körper & Netze',
    questionText: `Aufgabe 5a: Würfelnetz beschriften
Gegeben ist ein Würfel mit Ecken A, B, C, D (unten) und E, F, G, H (oben).
Beschrifte das Würfelnetz vollständig und schraffiere die gesuchte Fläche (Fläche B-C).`,
    options: [
      { label: 'Beschriftung gemäss Würfelgeometrie, Fläche BCGF schraffiert', correct: true },
      { label: 'Beschriftung vertauscht, Fläche ABCD schraffiert', correct: false },
      { label: 'Beschriftung gemäss Würfelgeometrie, Fläche ABCD schraffiert', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Würfelecken',
          content: `Standard-Beschriftung eines Würfels:
Untere Fläche:  A (vorne-links), B (vorne-rechts), C (hinten-rechts), D (hinten-links)
Obere Fläche:   E (über A), F (über B), G (über C), H (über D)

Jede Kante verbindet zwei Ecken. Jede Fläche hat 4 Ecken.`,
        },
        {
          title: 'Lösung',
          content: `Das Netz muss so beschriftet werden, dass beim Falten alle Flächen an der richtigen Position landen.
Die Fläche B-C ist die Fläche BCGF (rechte Seitenfläche).

Da es sich um eine Zeichnungsaufgabe handelt, empfehlen wir die offizielle Schullösung mit der genauen Netzzeichnung.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit der vollständigen Netzzeichnung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Beginne mit der Grundfläche.
2️⃣ Klappe die Seitenflächen auf.
3️⃣ Prüfe: Gegenüberliegende Flächen sind A-G, B-H, C-E, D-F (beim Standard-Würfel).`,
    },
  },

  {
    id: 'M1_2021_OTR_WUERFEL_5b',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Körper & Netze',
    questionText: `Aufgabe 5b: Punkt P ins Würfelnetz übertragen
Gegeben ist ein Würfel mit Punkt P auf der Kante HG.
Übertrage P und alle Würfelecken ins Netz. Schraffiere im Raumbild die entsprechende Fläche.`,
    options: [
      { label: 'Fläche EFGH (Deckel) ist schraffiert, P liegt auf Kante GH im Netz', correct: true },
      { label: 'Fläche ABCD (Boden) ist schraffiert', correct: false },
      { label: 'Fläche ABFE ist schraffiert', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Lösung',
          content: `Der Punkt P liegt auf der Kante HP (zwischen H und G auf der oberen Fläche).
Die schraffierte Fläche ist der Deckel EFGH.
Im Netz muss P entsprechend auf der aufgeklappten oberen Fläche eingezeichnet werden.

Es gibt zwei mögliche Lösungen je nach Aufklapprichtung (nach aussen oder nach innen gefaltet).`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit der genauen Netzzeichnung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Im Raumbild: Wo liegt P? Auf welcher Kante?
2️⃣ Diese Kante im Netz finden.
3️⃣ P proportional auf der Kante einzeichnen.`,
    },
  },

  // ── AUFGABE 6a ────────────────────────────────────────────
  {
    id: 'M1_2021_OTR_STAT_6a',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Statistik & Diagramme',
    questionText: `Aufgabe 6a: Tischkicker – richtiges Diagramm
Susi gewinnt 2×, Moritz 3×, Giuliano 10×.
Giuliano möchte seine vielen Siege mit einem Balkendiagramm darstellen.

Welches der fünf Diagramme (A–E) ist das richtige?`,
    options: [
      { label: 'Diagramm C (Skala 0–12, Giuliano bei 10)', correct: true },
      { label: 'Diagramm B (Skala 0–10, Giuliano bei 10)', correct: false },
      { label: 'Diagramm E (Skala 0–12, aber falsche Balken)', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Was macht ein gutes Diagramm?',
          content: `Ein korrektes Balkendiagramm muss:
- Alle Werte vollständig darstellen (Giuliano = 10 muss sichtbar sein).
- Die Skala muss bis mindestens 10 gehen.
- Die Balkenlängen müssen exakt den Werten entsprechen: Susi=2, Moritz=3, Giuliano=10.`,
        },
        {
          title: 'Diagramme analysieren',
          content: `Diagramm A: Skala nur bis 9 → Giulianos 10 Siege sind nicht darstellbar ✗
Diagramm B: Skala bis 10, aber Giuliano geht exakt bis 10. Korrekt? Ja, aber Diagramm C ist laut Lösung richtig.
Diagramm C: Skala 0–12 (gerade Schritte: 0,2,4,6,8,10,12) → Giuliano bei 10 ✅
Diagramm D: Skala nur bis 9 → falsch ✗
Diagramm E: Skala 0–12, aber falsche Balkenlängen ✗

✅ Richtiges Diagramm: C`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Prüfe zuerst: Passt die Skala? (Maximalwert muss auf der Skala darstellbar sein.)
2️⃣ Dann: Stimmen die Balkenlängen mit den Werten überein?
3️⃣ Ein gutes Diagramm hat eine übersichtliche, sinnvolle Skaleneinteilung.`,
    },
  },

  // ── AUFGABE 6b ────────────────────────────────────────────
  {
    id: 'M1_2021_OTR_STAT_6b',
    year: 2021,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119956/AP21_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Statistik & Diagramme',
    questionText: `Aufgabe 6b: Kreisdiagramm
Susi gewinnt 2×, Moritz 3×, Giuliano 10×.
Stelle die Gewinnsituation in einem Kreisdiagramm dar.
Berechne die Winkel für jeden Spieler.`,
    options: [
      { label: 'Susi = 48°, Moritz = 72°, Giuliano = 240°', correct: true },
      { label: 'Susi = 45°, Moritz = 60°, Giuliano = 255°', correct: false },
      { label: 'Susi = 48°, Moritz = 72°, Giuliano = 200°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gesamtspiele und Anteil berechnen',
          content: `Total Spiele = 2 + 3 + 10 = 15

Ein Spiel entspricht: 360° / 15 = 24° pro Spiel`,
        },
        {
          title: 'Winkel berechnen',
          content: `Susi:     2 Spiele × 24°/Spiel = 48°
Moritz:   3 Spiele × 24°/Spiel = 72°
Giuliano: 10 Spiele × 24°/Spiel = 240°

Probe: 48° + 72° + 240° = 360° ✅

✅ Susi = 48°, Moritz = 72°, Giuliano = 240°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit dem fertigen Kreisdiagramm zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132706/AP21_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Total bestimmen.
2️⃣ Winkel pro Einheit = 360° / Total.
3️⃣ Jeden Anteil × Winkel pro Einheit.
4️⃣ Probe: Alle Winkel müssen 360° ergeben.`,
    },
  },
];




