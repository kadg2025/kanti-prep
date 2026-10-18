
import { frac } from '../../mathFormat';

export const questions2024_oTR = [
  {
    id: 'M1_2024_OTR_EQ_1',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1: Löse folgende Gleichungen.

a) ${frac('15', '7')}x – ${frac('3', '7')}x = ${frac('1', '2')}x + 3

b) ${frac('5', '2')}x + 0.5 = ${frac('15', '2')} – 7

c) 3(4x + 5) = 4(3x + 5)

d) Löse mit Hilfe einer Gleichung: Von welcher Zahl ist das Sechsfache verkleinert um 22 ebenso viel, wie das Vierfache vergrössert um 24?`,
    options: [
      { label: 'a) x = 42/17 | b) x = 0 | c) keine Lösung | d) x = 23', correct: true },
      { label: 'a) x = 17/42 | b) x = 2 | c) x = 0 | d) x = 11', correct: false },
      { label: 'a) x = 3 | b) x = -0.5 | c) x = 15 | d) x = -23', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Gleichungen lösen: Ziel ist immer, x auf einer Seite allein stehen zu haben.
🔑 Klammern auflösen, dann gleichartige Terme zusammenfassen.
🔑 Sonderfall: Heben sich alle x-Terme auf und bleibt eine falsche Aussage übrig (z.B. 15=20), gibt es keine Lösung.
🔑 Textaufgabe: Wörter Schritt für Schritt in eine Gleichung übersetzen (z.B. "verkleinert um" → –, "vergrössert um" → +, "ebenso viel wie" → =).`,
        },
        {
          title: 'a) Brüche zusammenfassen',
          content: `15/7 x – 3/7 x = 1/2 x + 3
12/7 x = 1/2 x + 3     | ×14
24x = 7x + 42
17x = 42
x = 42/17

✅ x = 42/17`,
        },
        {
          title: 'b) Nach x auflösen',
          content: `5/2 x + 0.5 = 15/2 – 7
5/2 x + 0.5 = 0.5     | –0.5
5/2 x = 0
x = 0

✅ x = 0`,
        },
        {
          title: 'c) Klammern auflösen',
          content: `3(4x + 5) = 4(3x + 5)
12x + 15 = 12x + 20     | –12x
15 = 20

Das ist falsch (15 ≠ 20) — die Gleichung hat keine Lösung.

✅ keine Lösung`,
        },
        {
          title: 'd) Text in Gleichung übersetzen',
          content: `"Eine Zahl" = x
"Das Sechsfache verkleinert um 22" = 6x – 22
"Das Vierfache vergrössert um 24" = 4x + 24
"ebenso viel wie" = Gleichheitszeichen

6x – 22 = 4x + 24
2x – 22 = 24
2x = 46
x = 23

✅ x = 23`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Brüche/Dezimalzahlen mit dem kgV bzw. direkt zusammenfassen.
2️⃣ Klammern auflösen.
3️⃣ Alle x-Terme auf eine Seite bringen — bleibt keine Variable übrig und die Aussage ist falsch, gibt es keine Lösung.
4️⃣ Textaufgabe: Wörter Schritt für Schritt in eine Gleichung übersetzen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Bruchgleichungen, Klammern und Textgleichungen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Löse: 3/2 x - 1/2 x = 4', answer: '4', tip: 'Erst die Brüche mit gleichem Nenner zusammenfassen.' },
      { level: 'einfach', q: 'Löse: 2x + 0.5 = 4.5', answer: '2', tip: 'Zuerst 0.5 auf die andere Seite bringen.' },
      { level: 'einfach', q: 'Löse: 2(x + 3) = 2(x + 1) + 4', answer: 'alle x', tip: 'Klammern auflösen und schauen, was von den x-Termen übrig bleibt.' },

      { level: 'mittel', q: 'Löse: 10/3 x - 1/3 x = 1/2 x + 5,5. Gib die Lösung als gekürzten Bruch an.', answer: '11/5', tip: 'Brüche zusammenfassen, dann mit dem kgV multiplizieren.' },
      { level: 'mittel', q: 'Löse: 3/2 x + 1.5 = 9/2 - 2', answer: '2/3', tip: 'Rechte Seite zuerst vereinfachen, dann x isolieren.' },
      { level: 'mittel', q: 'Löse: 2(3x + 4) = 3(2x + 4)', answer: 'keine Lösung', tip: 'Klammern auflösen — was passiert mit den x-Termen?' },

      { level: 'schwer', q: 'Löse: 20/9 x - 2/9 x = 1/3 x + 3. Gib die Lösung als gekürzten Bruch an.', answer: '9/5', tip: 'Brüche zusammenfassen (gemeinsamer Nenner 9), dann mit dem kgV multiplizieren.' },
      { level: 'schwer', q: 'Löse mit Hilfe einer Gleichung: Von welcher Zahl ist das Fünffache verkleinert um 10 ebenso viel wie das Dreifache vergrössert um 20?', answer: '15', tip: '"Verkleinert um" = minus, "vergrössert um" = plus. Gleichung aufstellen und lösen.' },

      { level: 'kanti', q: 'Löse: 15/7 x - 3/7 x = 1/2 x + 3. Gib die Lösung als gekürzten Bruch an.', answer: '42/17', tip: 'Genau wie im Original a): Brüche zusammenfassen, dann mit 14 multiplizieren.' },
      { level: 'kanti', q: 'Löse: 3(4x + 5) = 4(3x + 5). Antwort: "keine Lösung" falls zutreffend.', answer: 'keine Lösung', tip: 'Klammern auflösen — die x-Terme heben sich auf. Was bedeutet das für die Zahlen, die übrig bleiben?' },
    ],
  },

  {
    id: 'M1_2024_OTR_TERM_2',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 2: Terme vereinfachen

Vereinfache so weit wie möglich.

a) ${frac('36x³y²z', '15x²z')}

b) ${frac('8a³', '9 − 3a')} : ${frac('4a⁵', '3 − a')}

c) ${frac('8a · 27b²(4 + 7y)', '(8 + 14y) · 18a² · 6b')}`,
    options: [
      { label: 'a) 12xy²/5 | b) 2/(3a²) | c) b/a', correct: true },
      { label: 'a) 12xy²/5 | b) 2a³/3 | c) b/a', correct: false },
      { label: 'a) 12x/5 | b) 2/(3a²) | c) a/b', correct: false },
    ],
    solution: {
      intro: 'Diese Aufgabe war in einer früheren Version dieser App komplett anders (und falsch) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version. Es fehlten ausserdem die Teile b) und c) komplett.',
      steps: [
        {
          title: 'a) Kürzen',
          content: `36x³y²z / 15x²z

Zahlen kürzen: 36/15 = 12/5
x-Potenzen kürzen: x³/x² = x
z kürzt sich komplett weg (z/z = 1)

= 12xy² / 5

✅ Ergebnis: 12xy²/5`,
        },
        {
          title: 'b) Division durch Kürzen der Klammern',
          content: `8a³/(9−3a) : 4a⁵/(3−a)

9−3a = 3(3−a)

= 8a³/(3(3−a)) : 4a⁵/(3−a)
= 8a³/(3(3−a)) · (3−a)/4a⁵     (Division = Multiplikation mit dem Kehrwert)

(3−a) kürzt sich weg:

= 8a³/(3·4a⁵)
= 8a³/(12a⁵)
= 8/(12a²)
= 2/(3a²)

✅ Ergebnis: 2/(3a²)`,
        },
        {
          title: 'c) Grossen Bruch kürzen',
          content: `[8a · 27b²(4+7y)] / [(8+14y) · 18a² · 6b]

8+14y = 2(4+7y)

= [8a · 27b²(4+7y)] / [2(4+7y) · 18a² · 6b]

(4+7y) kürzt sich weg:

= [8a · 27b²] / [2 · 18a² · 6b]
= 216ab² / 216a²b
= b/a     (a²/a=a, b²/b=b, 216/216=1)

✅ Ergebnis: b/a`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Zahlen und gleiche Buchstaben in Zähler und Nenner getrennt kürzen.
2️⃣ Division = Multiplikation mit dem Kehrwert.
3️⃣ Klammern faktorisieren, wenn sie sich in Zähler und Nenner wiederholen — dann kürzen sie sich weg.`,
    },

    // ── ÜBUNGEN a): Zahlen und Potenzen kürzen.
    // ── ÜBUNGEN b): Kehrwert-Division mit Faktorisieren.
    // ── ÜBUNGEN c): grossen Bruch mit gemeinsamem Klammerfaktor kürzen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Kürze: 36/15', answer: '12/5', tip: 'Teile Zähler und Nenner durch den ggT.' },
      { level: 'einfach', q: 'Kürze: x³/x². Was bleibt übrig?', answer: 'x', tip: 'Bei gleicher Basis: Exponenten subtrahieren.' },
      { level: 'einfach', q: 'Faktorisiere: 9−3a. Was ist der gemeinsame Faktor?', answer: '3', tip: 'ggT von 9 und 3.' },

      { level: 'mittel', q: 'Kürze: a⁵/a³. Welchen Exponenten hat das Ergebnis?', answer: '2', tip: 'Exponenten subtrahieren.' },
      { level: 'mittel', q: 'Kürze so weit wie möglich: 8/(3·4)', answer: '2/3', tip: 'Kürze den Bruch so weit wie möglich.' },
      { level: 'mittel', q: 'Faktorisiere: 8+14y. Was ist der gemeinsame Faktor?', answer: '2', tip: 'ggT von 8 und 14.' },

      { level: 'schwer', q: 'Kürze: 216/216', answer: '1', tip: 'Eine Zahl durch sich selbst geteilt.' },
      { level: 'schwer', q: 'Vereinfache: a³/a⁵. Welchen Exponenten hat a im Ergebnis (mit Vorzeichen, falls negativ)?', answer: '-2', tip: 'Exponenten subtrahieren — auch negative Exponenten sind erlaubt.' },

      { level: 'kanti', q: 'Vereinfache: 36x³y²z / 15x²z. Wie lautet der gekürzte Zahlen-Vorfaktor?', answer: '12/5', tip: 'Kürze nur den Zahlenanteil des Bruchs.' },
      { level: 'kanti', q: 'Vereinfache: [8a·27b²(4+7y)] / [(8+14y)·18a²·6b]. Welche Variable bleibt im Zähler stehen?', answer: 'b', tip: 'Kürze zuerst den Faktor (4+7y) weg, dann die Zahlen und a.' },
    ],
  },

  {
    id: 'M1_2024_OTR_ROLL_3a',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    figureUrl: '/figuren/2024_roll3.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2024',
    topic: 'Funktionen',
    questionText: `Aufgabe 3a: Wie viele Meter unterhalb des Strassenniveaus ist Monika nach einer Minute Rolltreppenfahrt?`,
    options: [
      { label: '10.5 m', correct: true },
      { label: '21 m', correct: false },
      { label: '7 m', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Pro Minute ablesen',
          content: `21 m in 2 min
=> 10.5 m in 1 min

✅ Ergebnis: 10.5 m`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Bei gleichmässiger Bewegung zuerst auf 1 Minute umrechnen.`,
    },
  },

  {
    id: 'M1_2024_OTR_ROLL_3b',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    figureUrl: '/figuren/2024_roll3.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2024',
    topic: 'Funktionen',
    questionText: `Aufgabe 3b: Berechne, wie viele Sekunden es dauert, bis Monika 7 m höher ist als das Bahnsteigniveau.`,
    options: [
      { label: '40 s', correct: true },
      { label: '23 s', correct: false },
      { label: '60 s', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Zeit berechnen',
          content: `21 m in 2 min
=> 10.5 m in 1 min

7 m entsprechen:
7 / 10.5 = 2/3 min

2/3 min = 40 s

✅ Ergebnis: 40 s`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Meter pro Minute bestimmen.
2️⃣ Gesuchte Strecke durch diese Rate teilen.
3️⃣ Minuten in Sekunden umrechnen.`,
    },
  },

  {
    id: 'M1_2024_OTR_ROLL_3c',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    figureUrl: '/figuren/2024_roll3.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2024',
    topic: 'Funktionen',
    questionText: `Aufgabe 3c: Zeichne den Graphen von Sven in das Koordinatensystem ein.`,
    options: [
      { label: 'Graph nach Lösung einzeichnen', correct: true },
      { label: 'Gerade durch Ursprung', correct: false },
      { label: 'Beliebige fallende Gerade', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Hinweis',
          content: `Die offizielle Lösung verlangt eine graphische Darstellung im Koordinatensystem. Der genaue Verlauf ist in der Lösungsskizze gegeben.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Graphen immer mit den gegebenen Punkten und der Steigung einzeichnen.`,
    },
  },

  {
    id: 'M1_2024_OTR_RATE_4a',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Proportionalität',
    questionText: `Aufgabe 4a: Ein Fahrzeug legt in 4.5 Stunden 441 km zurück. Welche Strecke hat es bei gleichbleibender Durchschnittsgeschwindigkeit nach 5 Stunden zurückgelegt?`,
    options: [
      { label: '490 km', correct: true },
      { label: '441 km', correct: false },
      { label: '500 km', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Geschwindigkeit bestimmen',
          content: `441 km in 4.5 h
=> 441 / 4.5 = 98 km/h

Nach 5 h:
98 · 5 = 490 km

✅ Ergebnis: 490 km`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Pro Stunde rechnen.
2️⃣ Dann mit der neuen Zeit multiplizieren.`,
    },
  },

  {
    id: 'M1_2024_OTR_RATE_4b',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Proportionalität',
    questionText: `Aufgabe 4b: Nach einem Klassenfest brauchen 3 SchülerInnen 48 Minuten für die Aufräumarbeiten. Nach wie vielen Minuten wären 8 SchülerInnen mit der Arbeit fertig?`,
    options: [
      { label: '18 Minuten', correct: true },
      { label: '24 Minuten', correct: false },
      { label: '12 Minuten', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Umgekehrt proportional',
          content: `3 SchülerInnen · 48 min = 144 Schüler-Minuten
144 / 8 = 18 min

✅ Ergebnis: 18 Minuten`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Mehr Personen = weniger Zeit, also umgekehrt proportional.`,
    },
  },

  {
    id: 'M1_2024_OTR_RATE_4c',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Proportionalität',
    questionText: `Aufgabe 4c: Der Neubau einer Schule kann von 6 Malern in 17 Tagen gestrichen werden. Nach 2 Tagen meldet sich ein Maler krank. Wie lange dauern die Arbeiten jetzt?`,
    options: [
      { label: '20 Tage', correct: true },
      { label: '18 Tage', correct: false },
      { label: '15 Tage', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Restarbeit',
          content: `6 Maler · 17 Tage = 102 Maler-Tage
Nach 2 Tagen:
6 · 2 = 12 Maler-Tage erledigt
Restarbeit = 90 Maler-Tage

Nun arbeiten 5 Maler weiter:
90 / 5 = 18 Tage

2 Tage + 18 Tage = 20 Tage

✅ Ergebnis: 20 Tage`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gesamtarbeit bestimmen.
2️⃣ Bereits erledigte Arbeit abziehen.
3️⃣ Rest durch neue Teamgrösse teilen.`,
    },
  },

  {
    id: 'M1_2024_OTR_WINKEL_5a',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    figureUrl: '/figuren/2024_winkel5a.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2024',
    topic: 'Geometrie',
    questionText: `Aufgabe 5a: Die Geraden g1 und g2 sind parallel. Bestimme die Grösse des Winkels α.`,
    options: [
      { label: 'α = 51°', correct: true },
      { label: 'α = 129°', correct: false },
      { label: 'α = 17°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Winkel bestimmen',
          content: `Mit gleichschenkligen Dreiecken und Wechselwinkeln:
112° im gleichschenkligen Dreieck
17° im anderen gleichschenkligen Dreieck
129° mit Winkelsumme im Dreieck
51° mit Nebenwinkel

✅ Ergebnis: α = 51°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Gleichschenklige Dreiecke, Wechselwinkel und Nebenwinkel nutzen.`,
    },

    // ── ÜBUNGEN: aufbauend zu gleichschenkligen Dreiecken, Wechselwinkeln und Nebenwinkeln.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein gleichschenkliges Dreieck hat einen Spitzenwinkel von 112°. Wie gross ist je ein Basiswinkel?', answer: '34', tip: '(180° − Spitzenwinkel) ÷ 2.' },
      { level: 'einfach', q: 'Ein Winkel beträgt 163°. Wie gross ist sein Nebenwinkel?', answer: '17', tip: 'Nebenwinkel ergänzen sich zu 180°.' },
      { level: 'einfach', q: 'Ein Dreieck hat die Winkel 34° und 17°. Wie gross ist der dritte Winkel (Winkelsumme im Dreieck)?', answer: '129', tip: '180° minus die beiden bekannten Winkel.' },

      { level: 'mittel', q: 'Ein gleichschenkliges Dreieck hat einen Basiswinkel von 34°. Wie gross ist der Spitzenwinkel?', answer: '112', tip: '180° − 2×Basiswinkel.' },
      { level: 'mittel', q: 'An zwei parallelen Geraden ist ein Wechselwinkel 17°. Wie gross ist der zugehörige Wechselwinkel an der anderen Geraden?', answer: '17', tip: 'Wechselwinkel an Parallelen sind gleich gross.' },
      { level: 'mittel', q: 'Ein Winkel von 129° hat welchen Nebenwinkel?', answer: '51', tip: '180° minus den gegebenen Winkel.' },

      { level: 'schwer', q: 'Ein Dreieck hat die Winkel 34° und 17° (aus zwei gleichschenkligen Teildreiecken). Der dritte Winkel wird über die Winkelsumme berechnet. Wie gross ist sein Nebenwinkel?', answer: '51', tip: 'Erst 180°−34°−17°=129° berechnen, dann den Nebenwinkel (180°−129°) bilden.' },
      { level: 'schwer', q: 'Zwei gleichschenklige Dreiecke haben die Spitzenwinkel 112° und 146°. Wie gross sind ihre Basiswinkel je?', answer: '34 und 17', tip: '(180°−Spitzenwinkel)÷2 für jedes Dreieck einzeln.' },

      { level: 'kanti', q: 'Wie im Original: Über zwei gleichschenklige Dreiecke ergeben sich die Winkel 112° (Spitze 1) und 146° (Spitze 2). Wie gross sind die zugehörigen Basiswinkel?', answer: '34 und 17', tip: '(180°−112°)÷2=34° und (180°−146°)÷2=17°.' },
      { level: 'kanti', q: 'Wie im Original: Mit Basiswinkeln 34° und 17°, Winkelsumme im Dreieck (129°) und Nebenwinkel ergibt sich α. Wie gross ist α?', answer: '51', tip: '180°−129°=51°.' },
    ],
  },

  {
    id: 'M1_2024_OTR_FLACHE_5b',
    verified: true,
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=8',
    figureUrl: '/figuren/2024_flache5b.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2024',
    topic: 'Geometrie',
    questionText: `Aufgabe 5b: Gegeben ist ein Halbkreis mit Mittelpunkt M auf der Strecke AD. Die Punkte B und C liegen auf AD zwischen A und D. F und E liegen auf dem Halbkreis, wobei BF und CE senkrecht auf AD stehen (rechtwinklig bei B und C).
Die Streckenlängen betragen: AB = 4, BC = 14, CD = 2.
Bestimme die grün gefärbte Fläche (das Viereck BFEC).
Die Figur ist nicht massstabsgetreu!`,
    options: [
      { label: 'F = 98', correct: true },
      { label: 'F = 84', correct: false },
      { label: 'F = 112', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Alle Punkte auf einem Halbkreis haben vom Mittelpunkt M denselben Abstand: den Radius r.
📐 Satz des Pythagoras: In einem rechtwinkligen Dreieck gilt a² + b² = c² (c = Hypotenuse).
🔑 Strategie: Da BF und CE senkrecht auf AD stehen, bilden M, B, F sowie M, C, E jeweils ein rechtwinkliges Dreieck mit dem Radius als Hypotenuse (MF bzw. ME).`,
        },
        {
          title: 'Radius bestimmen',
          content: `AD = AB + BC + CD = 4 + 14 + 2 = 20
M ist der Mittelpunkt von AD, also:
r = AD / 2 = 10`,
        },
        {
          title: 'Höhe BF berechnen (1. Pythagoras)',
          content: `Abstand von M zu B: MB = r − AB = 10 − 4 = 6
Im rechtwinkligen Dreieck MBF ist MF = r = 10 die Hypotenuse:
BF² + MB² = MF²
BF² = 10² − 6² = 100 − 36 = 64
BF = 8`,
        },
        {
          title: 'Höhe CE berechnen (2. Pythagoras)',
          content: `Abstand von M zu C: MC = r − CD = 10 − 2 = 8
Im rechtwinkligen Dreieck MCE ist ME = r = 10 die Hypotenuse:
CE² + MC² = ME²
CE² = 10² − 8² = 100 − 64 = 36
CE = 6`,
        },
        {
          title: 'Fläche des Vierecks BFEC berechnen',
          content: `BFEC ist ein Trapez mit den parallelen Seiten BF = 8 und CE = 6 (beide senkrecht auf AD) und der Höhe BC = 14 (Abstand zwischen den parallelen Seiten):

F = (BF + CE)/2 · BC = (8 + 6)/2 · 14 = 7 · 14 = 98

✅ Ergebnis: F = 98`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Radius über die Gesamtstrecke bestimmen (r = AD/2).
2️⃣ Für jeden Fusspunkt (B, C) den Abstand zum Mittelpunkt M berechnen.
3️⃣ Mit Pythagoras (Hypotenuse = Radius) die jeweilige Höhe (BF, CE) berechnen.
4️⃣ Trapezformel (BF+CE)/2 · BC anwenden.`,
    },

    // ── ÜBUNGEN: aufbauend zu Radius, Pythagoras im Halbkreis und Trapezfläche.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein Halbkreis hat den Durchmesser 20. Wie gross ist der Radius?', answer: '10', tip: 'Radius = Durchmesser ÷ 2.' },
      { level: 'einfach', q: 'Berechne mit Pythagoras: Ein rechtwinkliges Dreieck hat die Hypotenuse 10 und eine Kathete 6. Wie lang ist die andere Kathete?', answer: '8', tip: 'a² = c² − b².' },
      { level: 'einfach', q: 'Berechne die Fläche eines Trapezes mit parallelen Seiten 8 und 6 und Höhe 14.', answer: '98', tip: 'Fläche = (a+c)/2 · h.' },

      { level: 'mittel', q: 'Eine Strecke AD = 24 hat den Mittelpunkt M. Punkt B liegt bei AB=4. Wie gross ist der Abstand MB, wenn der Radius 12 ist?', answer: '8', tip: 'MB = Radius − AB.' },
      { level: 'mittel', q: 'Ein rechtwinkliges Dreieck hat die Hypotenuse 10 und eine Kathete 8. Wie lang ist die andere Kathete?', answer: '6', tip: 'b² = c² − a².' },
      { level: 'mittel', q: 'Ein Trapez hat die parallelen Seiten 8 und 6. Die Fläche beträgt 70. Wie gross ist die Höhe?', answer: '10', tip: 'Höhe = Fläche ÷ ((a+c)/2).' },

      { level: 'schwer', q: 'Eine Strecke AD=30 hat drei Abschnitte: AB=5, BC=x, CD=5, mit Mittelpunkt M genau in der Mitte von AD. Wie gross ist der Radius?', answer: '15', tip: 'Radius = AD/2, unabhängig von der Aufteilung der Abschnitte.' },
      { level: 'schwer', q: 'M ist Mittelpunkt eines Halbkreises mit Radius 13. Ein Punkt B liegt im Abstand MB=5 von M, mit BF senkrecht auf dem Durchmesser (F auf dem Kreis). Wie lang ist BF?', answer: '12', tip: 'BF² = Radius² − MB² (Pythagoras, da MF=Radius die Hypotenuse ist).' },

      { level: 'kanti', q: 'Wie im Original: AB=4, BC=14, CD=2. Wie gross ist der Radius des Halbkreises?', answer: '10', tip: '(AB+BC+CD)/2 = 20/2 = 10.' },
      { level: 'kanti', q: 'Wie im Original: Mit Radius 10 und MB=6, wie lang ist BF?', answer: '8', tip: 'BF² = 10² − 6² = 64, also BF=8.' },
    ],
  },

  {
    id: 'M1_2024_OTR_HOLZ_6',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Zahlen & Teilbarkeit',
    verified: true,
    questionText: `Aufgabe 6: Holzstäbe zersägen

Drei Holzstäbe von 90 cm, 144 cm und 270 cm Länge sollen in gleich lange, aber möglichst grosse Stücke zersägt werden, so dass kein Reststück übrigbleibt.

a) Welches ist die Länge eines solchen Stücks? Wie oft muss man insgesamt sägen, wenn jeder Holzstab einzeln bearbeitet wird?

b) Es soll wieder so gesägt werden, dass gleich lange, aber möglichst grosse Stücke entstehen. Nun darf aber bei einem der drei Holzstäbe ein Reststück von 9 cm übrigbleiben. Wie lang sind die Stücke dann? Bei welchem Stab bleibt der Rest?`,
    options: [
      { label: 'a) 18 cm, 25 Schnitte | b) 45 cm, Rest beim 144-cm-Stab', correct: true },
      { label: 'a) 18 cm, 24 Schnitte | b) 45 cm, Rest beim 144-cm-Stab', correct: false },
      { label: 'a) 18 cm, 25 Schnitte | b) 27 cm, Rest beim 144-cm-Stab', correct: false },
    ],
    solution: {
      intro: 'Teil b) war in einer früheren Version dieser App falsch berechnet (27 cm statt 45 cm) und Teil a) hatte einen Tippfehler in der Antwortoption (24 statt 25 Schnitte) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version.',
      steps: [
        {
          title: 'a) Länge bestimmen',
          content: `ggT(90, 144, 270) = 18

Anzahl Stücke:
90/18 = 5
144/18 = 8
270/18 = 15

Schnitte:
5-1 = 4
8-1 = 7
15-1 = 14

Total = 4 + 7 + 14 = 25

✅ Ergebnis: 18 cm, 25 Schnitte`,
        },
        {
          title: 'b) Länge mit Reststück bestimmen',
          content: `Der Rest von 9 cm darf bei GENAU EINEM der drei Stäbe entstehen. Wir probieren beim 144-cm-Stab: 144 − 9 = 135 cm ist dann die "nutzbare" Länge dieses Stabs.

Primfaktorzerlegung:
90 = 2 · 3² · 5
135 = 3³ · 5     (= 144 − 9)
270 = 2 · 3³ · 5

ggT(90, 135, 270): von jedem Primfaktor die kleinste Potenz
→ 3² · 5 = 45     (2 fällt weg, da 135 keinen Faktor 2 hat)

Probe: 144 = 3 · 45 + 9 ✅ (3 volle Stücke plus 9 cm Rest)

✅ Stücklänge: 45 cm
✅ Der Rest von 9 cm bleibt beim 144-cm-Stab.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  ggT bestimmen: von jedem gemeinsamen Primfaktor die kleinste Potenz.
2️⃣  Anzahl Stücke pro Stab = Stablänge ÷ Stücklänge; Schnitte = Stücke − 1.
3️⃣  Bei erlaubtem Reststück: probiere, bei welchem Stab (Länge − Rest) den grössten ggT mit den anderen Stäben ergibt.`,
    },

    // ── ÜBUNGEN a): ggT dreier Zahlen und Schnitte zählen.
    // ── ÜBUNGEN b): ggT mit angepasster (Länge−Rest)-Zahl.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Primfaktorzerlegung: 18 = 2 · 3 · ?', answer: '3', tip: 'Welcher Faktor fehlt, damit 2·3·?=18 ist?' },
      { level: 'einfach', q: 'Bestimme den ggT von 12 und 18.', answer: '6', tip: '12=2²·3, 18=2·3² — gemeinsame Faktoren mit kleinerer Potenz.' },
      { level: 'einfach', q: 'Berechne: 90/18', answer: '5', tip: 'Wie oft passt 18 in 90?' },

      { level: 'mittel', q: 'Bestimme den ggT von 90, 144 und 270.', answer: '18', tip: 'Primfaktorzerlegung aller drei Zahlen, dann von jedem Faktor die kleinste Potenz.' },
      { level: 'mittel', q: 'Berechne: 8−1', answer: '7', tip: 'Bei n Stücken braucht es n−1 Schnitte.' },
      { level: 'mittel', q: 'Ein 60cm-Stab wird in 15cm-Stücke gesägt. Wie viele Schnitte braucht es?', answer: '3', tip: 'Erst die Anzahl Stücke berechnen, dann 1 abziehen.' },

      { level: 'schwer', q: 'Bestimme den ggT von 90 und 135.', answer: '45', tip: '90=2·3²·5, 135=3³·5 — gemeinsame Faktoren mit kleinerer Potenz.' },
      { level: 'schwer', q: 'Berechne: 144 − 9', answer: '135', tip: 'Ziehe den Rest von der Stablänge ab.' },

      { level: 'kanti', q: 'Bestimme den ggT von 90, 144 und 270. Wie oft muss der 270cm-Stab gesägt werden (Schnitte)?', answer: '14', tip: 'Erst die Anzahl Stücke berechnen (270 durch die Stücklänge), dann 1 abziehen.' },
      { level: 'kanti', q: 'Bestimme den ggT von 90, 135 (=144−9) und 270.', answer: '45', tip: 'Von jedem Primfaktor die kleinste Potenz nehmen — genau wie im Original.' },
    ],
  },

];

