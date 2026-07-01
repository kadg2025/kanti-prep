
import { sqrt } from '../../mathFormat';

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

    verified: true,

    questionText: `Aufgabe 3: Terme vereinfachen

Vereinfache so weit wie möglich:

a) ${sqrt('a² + 8a²')}

b) ${sqrt('(3y)² − 5y²')}`,

    options: [

      { label: 'a) 3a | b) 2y', correct: true },

      { label: 'a) 3a² | b) 2y²', correct: false },

      { label: 'a) 9a | b) 4y', correct: false },

    ],

    solution: {

      intro: 'Der Aufgabentext war in einer früheren Version dieser App fehlerhaft (a⁴ statt a² durch einen Erfassungsfehler) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version.',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Wurzelregeln:

√(a²) = |a| = a  (für a ≥ 0)

Innerhalb der Wurzel zuerst zusammenfassen (gleiche Variablenteile addieren/subtrahieren), erst danach die Wurzel ziehen.

(3y)² bedeutet: die GANZE Klammer wird quadriert → (3y)² = 9y².`,

        },

        {

          title: 'a) √(a² + 8a²)',

          content: `a² + 8a² = 9a²

√(9a²) = √9 · √(a²) = 3 · a

✅ 3a`,

        },

        {

          title: 'b) √((3y)² − 5y²)',

          content: `(3y)² = 9y²

9y² − 5y² = 4y²

√(4y²) = √4 · √(y²) = 2 · y

✅ 2y`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Erst innerhalb der Wurzel alles zusammenfassen.

2️⃣  (n·x)² separat ausrechnen, bevor du weiterrechnest.

3️⃣  √(n²·x²) = n·x (für n, x ≥ 0).`,

    },

    // ── ÜBUNGEN: aufbauend zu "unter der Wurzel zusammenfassen" und Quadratzahlen erkennen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Fasse zusammen: a + 8a', answer: '9a', tip: 'Addiere die Vorfaktoren, die Variable bleibt gleich.' },
      { level: 'einfach', q: 'Berechne: √9', answer: '3', tip: 'Welche Zahl mal sich selbst ergibt 9?' },
      { level: 'einfach', q: 'Berechne: 3²', answer: '9', tip: 'Quadrieren heisst: die Zahl mit sich selbst multiplizieren.' },

      { level: 'mittel', q: 'Fasse zusammen: 9y − 5y', answer: '4y', tip: 'Nur die Vorfaktoren werden subtrahiert, die Variable bleibt gleich.' },
      { level: 'mittel', q: 'Vereinfache: √(9k²)', answer: '3k', tip: 'Ziehe die Wurzel aus der Zahl und aus der Variable einzeln.' },
      { level: 'mittel', q: 'Vereinfache: √(4m²)', answer: '2m', tip: 'Gleiches Prinzip: Wurzel aus Zahl und Variable getrennt ziehen.' },

      { level: 'schwer', q: 'Vereinfache: √(a² + 8a²)', answer: '3a', tip: 'Erst unter der Wurzel zusammenfassen, dann die Wurzel ziehen.' },
      { level: 'schwer', q: 'Vereinfache: √((3y)² − 5y²)', answer: '2y', tip: '(3y)² zuerst ausrechnen, dann zusammenfassen, dann die Wurzel ziehen.' },

      { level: 'kanti', q: 'Vereinfache: √(a² + 3a²)', answer: '2a', tip: 'Gleiches Vorgehen wie bei den vorherigen Aufgaben, nur mit anderen Zahlen.' },
      { level: 'kanti', q: 'Vereinfache: √((2y)² + 5y²)', answer: '3y', tip: 'Erst die Klammer quadrieren, dann zusammenfassen, dann die Wurzel ziehen.' },
    ],

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

    verified: true,

    questionText: `Aufgabe 4: Text als Term

Schreibe den Text als Term und vereinfache soweit wie möglich (ohne Klammern):

a) Halbiere das Quadrat von 6a.

b) Quadriere das Produkt von 3a³ und 4ab.

c) Multipliziere das Dreifache der Summe von 2ab und 5b² mit 6.`,

    options: [

      { label: 'a) 18a² | b) 144a⁸b² | c) 36ab + 90b²', correct: true },

      { label: 'a) 9a² | b) 144a⁸b² | c) 36ab + 90b²', correct: false },

      { label: 'a) 18a² | b) 12a⁴b | c) 30ab + 90b²', correct: false },

    ],

    solution: {

      intro: 'Der Aufgabentext war in einer früheren Version dieser App komplett anders (und falsch) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version.',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📝 Texte in Terme übersetzen:

"Halbiere x" → x : 2

"Quadriere x" → x²

"Produkt von a und b" → a · b

"Summe von a und b" → a + b

"Das n-fache von x" → n · x

Reihenfolge: Erst die innere Operation (Produkt/Summe) bilden, DANN die äussere (halbieren/quadrieren/malnehmen) anwenden.`,

        },

        {

          title: 'a) Halbiere das Quadrat von 6a',

          content: `Quadrat von 6a: (6a)² = 36a²

Halbieren: 36a² : 2 = 18a²

✅ 18a²`,

        },

        {

          title: 'b) Quadriere das Produkt von 3a³ und 4ab',

          content: `Produkt: 3a³ · 4ab = 12a⁴b

Quadrieren: (12a⁴b)² = 144a⁸b²

✅ 144a⁸b²`,

        },

        {

          title: 'c) Multipliziere das Dreifache der Summe von 2ab und 5b² mit 6',

          content: `Summe: 2ab + 5b²

Dreifache der Summe: 3 · (2ab + 5b²) = 6ab + 15b²

Mit 6 multiplizieren: 6 · (6ab + 15b²) = 36ab + 90b²

✅ 36ab + 90b²`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106457/AP19_GMS3_M1_oTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣  Schlüsselwörter erkennen: halbiere, Quadrat, Produkt, Summe, das n-fache

2️⃣  Von innen nach aussen übersetzen — erst Produkt/Summe bilden, dann die äussere Operation anwenden

3️⃣  Potenzgesetz beim Quadrieren beachten: (n·a^k)² = n²·a^(2k)`,

    },

    // ── ÜBUNGEN: aufbauend zu "Text in Term übersetzen" und Potenzen/Klammern ausmultiplizieren.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 6²', answer: '36', tip: 'Quadrieren heisst: die Zahl mit sich selbst multiplizieren.' },
      { level: 'einfach', q: 'Berechne: 36 : 2', answer: '18', tip: 'Teile 36 durch 2.' },
      { level: 'einfach', q: 'Berechne: 3 · 4', answer: '12', tip: 'Die Zahlen vor den Variablen werden zuerst multipliziert.' },

      { level: 'mittel', q: 'Multipliziere aus: 3a · 4b', answer: '12ab', tip: 'Zahlen multiplizieren, Variablen einfach nebeneinander schreiben.' },
      { level: 'mittel', q: 'Vereinfache: 3 · (2ab + 5c)', answer: '6ab+15c', tip: 'Multipliziere die 3 mit JEDEM Summanden einzeln.' },
      { level: 'mittel', q: 'Vereinfache: 6 · (6ab + 15c)', answer: '36ab+90c', tip: 'Genau wie zuvor — multipliziere mit jedem Summanden einzeln.' },

      { level: 'schwer', q: 'Vereinfache: 3 · (2ab + 5c) · 4', answer: '24ab+60c', tip: 'Erst die Klammer ausmultiplizieren, dann das Ergebnis mit der zweiten Zahl multiplizieren.' },
      { level: 'schwer', q: 'Multipliziere aus: 2a · 3b · 4c', answer: '24abc', tip: 'Alle Zahlen zusammen multiplizieren, alle Variablen nebeneinander schreiben.' },

      { level: 'kanti', q: 'Halbiere das Quadrat von 4a. Wie lautet der Vorfaktor (die Zahl) vor a² im Ergebnis?', answer: '8', tip: 'Erst quadrieren (4² = 16), dann halbieren.' },
      { level: 'kanti', q: 'Quadriere das Produkt von 2a² und 3ab. Wie lautet der Vorfaktor (die Zahl) im Ergebnis?', answer: '36', tip: 'Erst das Produkt bilden, dann alles quadrieren: (n·Term)² = n² · Term².' },
    ],

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

