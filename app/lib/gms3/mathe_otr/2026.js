
import { frac } from '../../mathFormat';

// ─── 2026: NICHT VERIFIZIERT ────────────────────────────────────────────
// Es gibt noch KEINE offizielle Schullösung für die Prüfung 2026. Jede
// Aufgabe hier wurde zweimal unabhängig gelöst (von Hand + mit sympy) und
// die Endergebnisse stimmten überein — siehe pruefliste_2026.md für Details.
// Trotzdem: KEIN verified:true, da keine offizielle Lösung zum Abgleich
// existiert. pdfUrl bleibt leer (keine echte URL erfunden).
// Aufgabe 5 (Kreis-Konstruktion) ist als UNSICHER gekennzeichnet — die
// Figur zeigt zwei Kreise mit Mittelpunkten M1/M2 und einem gegebenen
// Winkel δ=16°, aber die exakte Konstruktion (welche Punkte auf welchem
// Kreis liegen, welcher Satz anzuwenden ist) liess sich aus der Skizze
// nicht mit Sicherheit rekonstruieren.

export const questions2026_oTR = [
  // ── AUFGABE 1a+1b ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_TERM_1',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 1 (a+b): Term einsetzen
Setze in den Term a(x + ab²) die vorgegebenen Zahlen für a und b ein und vereinfache:

a) a = 4 und b = ${frac('1', '2')}

b) a = ${frac('1', '2')} und b = −1`,
    options: [
      { label: 'a) 4x+4 | b) x/2 + 1/4', correct: true },
      { label: 'a) 4x+1 | b) x/2 − 1/4', correct: false },
      { label: 'a) 4x+4 | b) x/2 − 1/2', correct: false },
    ],
    teile: [
      { letter: 'a', options: [
        { label: '4x+4', correct: true },
        { label: '4x+1', correct: false },
        { label: '4x+8', correct: false },
      ] },
      { letter: 'b', options: [
        { label: 'x/2 + 1/4', correct: true },
        { label: 'x/2 − 1/4', correct: false },
        { label: 'x/2 − 1/2', correct: false },
      ] },
    ],
    solution: {
      intro: `Zuerst a und b einsetzen, dann die Klammer ausmultiplizieren.`,
      steps: [
        {
          title: 'a) a=4, b=1/2',
          content: `a(x+ab²) = 4(x + 4·(${frac('1', '2')})²)
4·(${frac('1', '2')})² = 4·${frac('1', '4')} = 1

4(x+1) = 4x+4

✅ 4x + 4`,
        },
        {
          title: 'b) a=1/2, b=−1',
          content: `a(x+ab²) = ${frac('1', '2')}(x + ${frac('1', '2')}·(−1)²)
${frac('1', '2')}·(−1)² = ${frac('1', '2')}·1 = ${frac('1', '2')}

${frac('1', '2')}(x + ${frac('1', '2')}) = ${frac('x', '2')} + ${frac('1', '4')}

✅ x/2 + 1/4`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ a und b in den Term einsetzen.
2️⃣ Innere Klammer/Potenz zuerst berechnen.
3️⃣ Äussere Klammer ausmultiplizieren (a mal jeden Summanden).`,
    },
    practice: [
      { level: 'einfach', q: 'Berechne (1/2)².', answer: '1/4', tip: 'Zähler² durch Nenner².' },
      { level: 'einfach', q: 'Berechne (−1)².', answer: '1', tip: 'Minus mal Minus ergibt Plus.' },
      { level: 'einfach', q: 'Multipliziere: 4 · 1/4', answer: '1', tip: 'Kürzen.' },
      { level: 'mittel', q: 'Setze a=2, b=3 in a·b² ein.', answer: '18', tip: 'Erst b² rechnen, dann mit a multiplizieren.' },
      { level: 'mittel', q: 'Vereinfache: 4(x+1)', answer: '4x+4', tip: 'Klammer ausmultiplizieren.' },
      { level: 'mittel', q: 'Vereinfache: (1/2)(x+1/2)', answer: 'x/2+1/4', tip: 'Jeden Summanden einzeln mit 1/2 multiplizieren.' },
      { level: 'schwer', q: 'Setze a=−1, b=2 in a(x+ab²) ein und vereinfache (Term stehen lassen).', answer: '-x-4', tip: '−1·(x + (−1)·4) = −1·(x−4) = −x+4... prüfe das Vorzeichen von ab² sorgfältig.' },
      { level: 'kanti', q: 'Wie im Original a): a=4, b=1/2 in a(x+ab²). Was ist ab²?', answer: '1', tip: '4 · (1/2)² = 4 · 1/4 = 1.' },
      { level: 'kanti', q: 'Wie im Original b): a=1/2, b=−1 in a(x+ab²). Was ist ab²?', answer: '1/2', tip: '(1/2) · (−1)² = 1/2 · 1 = 1/2.' },
    ],
  },

  // ── AUFGABE 1c+1d+1e ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_GLEI_1',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1 (c+d+e): Gleichungen lösen
Löse folgende Gleichungen:

c) 2x + 3 = 3

d) ${frac('x + 1', '2')} = ${frac('2x − 3', '3')}

e) x + ${frac('1', '2')} · 2² = −3(x + 4)`,
    options: [
      { label: 'c) x=0 | d) x=9 | e) x=−3.5', correct: true },
      { label: 'c) x=0 | d) x=5 | e) x=−3.5', correct: false },
      { label: 'c) x=3 | d) x=9 | e) x=3.5', correct: false },
    ],
    teile: [
      { letter: 'c', options: [
        { label: 'x=0', correct: true },
        { label: 'x=3', correct: false },
        { label: 'x=1.5', correct: false },
      ] },
      { letter: 'd', options: [
        { label: 'x=9', correct: true },
        { label: 'x=5', correct: false },
        { label: 'x=6', correct: false },
      ] },
      { letter: 'e', options: [
        { label: 'x=−3.5', correct: true },
        { label: 'x=3.5', correct: false },
        { label: 'x=2.5', correct: false },
      ] },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'c) 2x+3=3',
          content: `2x + 3 = 3     | −3
2x = 0          | ÷2
x = 0

✅ x = 0`,
        },
        {
          title: 'd) Bruchgleichung',
          content: `${frac('x + 1', '2')} = ${frac('2x − 3', '3')}     | ×6 (Hauptnenner)
3(x+1) = 2(2x−3)
3x + 3 = 4x − 6     | −3x, +6
9 = x

✅ x = 9
Probe: (9+1)/2=5 und (2·9−3)/3=15/3=5 ✓`,
        },
        {
          title: 'e) Klammer + Potenz',
          content: `x + ${frac('1', '2')}·2² = −3(x+4)
${frac('1', '2')}·4 = 2 (Potenz vor Punkt vor Strich)

x + 2 = −3x − 12     | +3x, −2
4x = −14     | ÷4
x = −${frac('14', '4')} = −${frac('7', '2')} = −3.5

✅ x = −3.5`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Potenzen/Klammern zuerst auflösen.
2️⃣ Bei Brüchen: mit dem Hauptnenner multiplizieren.
3️⃣ x-Terme auf eine Seite, Zahlen auf die andere.
4️⃣ Durch den Koeffizienten von x teilen.`,
    },
    practice: [
      { level: 'einfach', q: 'Löse: 2x+3=3', answer: '0', tip: 'Erst 3 subtrahieren, dann durch 2 teilen.' },
      { level: 'einfach', q: 'Berechne (1/2)·2²', answer: '2', tip: 'Potenz zuerst: 2²=4, dann mal 1/2.' },
      { level: 'einfach', q: 'Löse: x+2=−10', answer: '-12', tip: '2 auf die andere Seite bringen.' },
      { level: 'mittel', q: 'Löse: (x+1)/2 = 4', answer: '7', tip: 'Mit 2 multiplizieren.' },
      { level: 'mittel', q: 'Löse: 3x+3=4x−6', answer: '9', tip: 'x-Terme zusammenfassen.' },
      { level: 'mittel', q: 'Löse: x+2=−3x−12', answer: '-3.5', tip: 'x-Terme auf eine Seite, Zahlen auf die andere.' },
      { level: 'schwer', q: 'Löse: (x+1)/2 = (2x−3)/3', answer: '9', tip: 'Mit dem Hauptnenner 6 multiplizieren.' },
      { level: 'kanti', q: 'Wie im Original d): Mit welcher Zahl multiplizierst du zuerst (Hauptnenner von 2 und 3)?', answer: '6', tip: 'kgV(2,3)=6.' },
      { level: 'kanti', q: 'Wie im Original e): Was ist −3(x+4) ausmultipliziert?', answer: '-3x-12', tip: '−3 mal jeden Summanden in der Klammer.' },
    ],
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_WISS_2',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 2: Mars und Erde
Der Mars hat ein Gewicht von rund 639'000'000'000'000'000'000 Tonnen.
Die Erde hat dagegen ein Gewicht von rund 5'970'000'000'000'000'000'000 Tonnen.

a) Notiere beide Gewichte in wissenschaftlicher Schreibweise.
b) Wie kann man anhand der wissenschaftlichen Schreibweise sofort erkennen, welcher der beiden Planeten schwerer ist? Erkläre in einem kurzen Antwortsatz.`,
    options: [
      { label: 'Mars=6.39×10²⁰ t | Erde=5.97×10²¹ t — Erde schwerer (grössere Zehnerpotenz)', correct: true },
      { label: 'Mars=6.39×10¹⁹ t | Erde=5.97×10²⁰ t — Erde schwerer (grössere Zehnerpotenz)', correct: false },
      { label: 'Mars=6.39×10²⁰ t | Erde=5.97×10²¹ t — Mars schwerer (kleinere Vorzahl)', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Wissenschaftliche Schreibweise',
          content: `Eine Zahl a×10ⁿ, wobei 1 ≤ a < 10 ist.
Zähle die Stellen hinter der ersten Ziffer, um n zu bestimmen.`,
        },
        {
          title: 'a) Umwandeln',
          content: `Mars: 639'000'000'000'000'000'000 = 6.39 × 10²⁰ Tonnen
(639 hat 3 Ziffern, dahinter folgen 18 Nullen → insgesamt 20 Stellen nach der ersten Ziffer)

Erde: 5'970'000'000'000'000'000'000 = 5.97 × 10²¹ Tonnen
(5970 hat 4 Ziffern, dahinter folgen 18 Nullen → insgesamt 21 Stellen nach der ersten Ziffer)

✅ Mars = 6.39×10²⁰ t, Erde = 5.97×10²¹ t`,
        },
        {
          title: 'b) Vergleich',
          content: `Die Erde hat die grössere Zehnerpotenz (10²¹ > 10²⁰).
Da beide Vorzahlen (6.39 und 5.97) zwischen 1 und 10 liegen, entscheidet allein der Exponent über die Grössenordnung.

✅ Die Erde ist schwerer, weil ihre Zehnerpotenz (10²¹) grösser ist als die des Mars (10²⁰) — unabhängig von den Vorzahlen.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Zahl so umschreiben, dass genau eine Ziffer vor dem Komma steht.
2️⃣ Stellen zählen = Exponent.
3️⃣ Beim Vergleich: zuerst die Exponenten vergleichen, erst bei Gleichheit die Vorzahlen.`,
    },
    practice: [
      { level: 'einfach', q: 'Schreibe 3000 in wissenschaftlicher Schreibweise.', answer: '3×10^3', tip: '3 Stellen hinter der 3.' },
      { level: 'einfach', q: 'Schreibe 450 in wissenschaftlicher Schreibweise.', answer: '4.5×10^2', tip: 'Komma nach der ersten Ziffer setzen.' },
      { level: 'einfach', q: 'Was ist grösser: 3×10⁵ oder 9×10⁴?', answer: '3×10^5', tip: 'Zuerst die Zehnerpotenz vergleichen.' },
      { level: 'mittel', q: 'Schreibe 72'+"'"+'000'+"'"+'000 in wissenschaftlicher Schreibweise.', answer: '7.2×10^7', tip: '7 Stellen nach der 7.' },
      { level: 'mittel', q: 'Was ist grösser: 2×10⁸ oder 8×10⁷?', answer: '2×10^8', tip: 'Exponent 8 > Exponent 7.' },
      { level: 'mittel', q: 'Wandle 6.39×10²⁰ zurück in eine ausgeschriebene Zahl (wie viele Nullen nach der 639?).', answer: '18', tip: '20 Stellen insgesamt nach der ersten Ziffer, minus 2 für "39".' },
      { level: 'schwer', q: 'Zwei Zahlen haben beide die Zehnerpotenz 10¹⁰. Zahl A hat Vorzahl 3.2, Zahl B hat Vorzahl 3.19. Welche ist grösser?', answer: 'A', tip: 'Bei gleichem Exponenten entscheidet die Vorzahl.' },
      { level: 'kanti', q: 'Wie im Original: Warum reicht der Vergleich der Zehnerpotenzen allein meistens schon aus, um zu sehen welche Zahl grösser ist?', answer: 'weil ein Unterschied im Exponenten einen viel grösseren Unterschied ausmacht als ein Unterschied in der Vorzahl (1-10)', tip: 'Eine Zehnerpotenz mehr bedeutet mindestens Faktor 1, maximal Faktor 10 Unterschied.' },
      { level: 'kanti', q: 'Wie im Original: Mars=6.39×10²⁰, Erde=5.97×10²¹. Um etwa das Wievielfache ist die Erde schwerer?', answer: '9-10', tip: '5.97×10²¹ ÷ 6.39×10²⁰ ≈ 9.3.' },
    ],
  },

  // ── AUFGABE 3a ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_GERADEN_3a',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    figureUrl: '',
    topic: 'Funktionen',
    questionText: `Aufgabe 3a: Geraden zuordnen
Sechs Graphen sind in einem Koordinatengitter gezeichnet, jeder mit zwei markierten Gitterpunkten A und B. Ordne den Graphen die passenden Geradengleichungen zu (zwei Gleichungen passen zu keinem Graphen):

Liste: 1) y=2.5x+3  2) x=−3  3) y=−2.5x+2  4) y=−3x+2  5) y=−1.5x+2.5  6) y=3x−2

Graph 1: A=(2,4), B=(−1,−5)
Graph 2: A=(3,−2), B=(−1,4)
Graph 3: A=(2,−3), B=(−2,−3) (waagrecht)
Graph 4: A=(−3,−2), B=(−3,2) (senkrecht)
Graph 5: A=(3,−3), B=(1,1)
Graph 6: A=(2,−3), B=(0,2)`,
    options: [
      { label: 'G1→6, G2→5, G3→leer, G4→2, G5→leer, G6→3', correct: true },
      { label: 'G1→6, G2→5, G3→4, G4→2, G5→1, G6→3', correct: false },
      { label: 'G1→1, G2→3, G3→leer, G4→2, G5→leer, G6→6', correct: false },
    ],
    solution: {
      intro: `Für jeden Graphen aus den zwei Gitterpunkten die Steigung und den y-Achsenabschnitt berechnen, dann mit der Liste vergleichen.`,
      steps: [
        {
          title: '📖 Geradengleichung aus zwei Punkten',
          content: `Steigung m = (y_A − y_B) ÷ (x_A − x_B)
Dann y = mx + q nach q auflösen (einen Punkt einsetzen).`,
        },
        {
          title: 'Graph 1, 2, 6 (schräge Geraden)',
          content: `Graph 1: m=(4−(−5))/(2−(−1))=9/3=3 → y=3x−2 → Gleichung 6 ✅
Graph 2: m=(−2−4)/(3−(−1))=−6/4=−1.5 → y=−1.5x+2.5 → Gleichung 5 ✅
Graph 6: m=(2−(−3))/(0−2)=5/−2=−2.5 → y=−2.5x+2 → Gleichung 3 ✅`,
        },
        {
          title: 'Graph 3, 4 (waagrecht/senkrecht) und Graph 5',
          content: `Graph 3: waagrecht durch y=−3 → keine der 6 Gleichungen ist "y=−3" → leer
Graph 4: senkrecht durch x=−3 → Gleichung 2 ✅
Graph 5: m=(1−(−3))/(1−3)=4/−2=−2 → y=−2x+3 → keine der 6 Gleichungen passt → leer

Übrig (nicht verwendet): Gleichung 1 (y=2.5x+3) und Gleichung 4 (y=−3x+2) — das sind die zwei Gleichungen, die zu keinem Graphen passen.

✅ G1→6, G2→5, G3→leer, G4→2, G5→leer, G6→3`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Aus den zwei Gitterpunkten die Steigung berechnen.
2️⃣ Mit einem Punkt den y-Achsenabschnitt q bestimmen.
3️⃣ Mit der Liste vergleichen — bei waagrechten/senkrechten Geraden direkt y=… bzw. x=… ablesen.`,
    },
    practice: [
      { level: 'einfach', q: 'Eine Gerade geht durch (0,2) und (1,2). Wie lautet die Gleichung?', answer: 'y=2', tip: 'Gleiche y-Werte = waagrechte Gerade.' },
      { level: 'einfach', q: 'Eine Gerade geht durch (−3,0) und (−3,5). Wie lautet die Gleichung?', answer: 'x=-3', tip: 'Gleiche x-Werte = senkrechte Gerade.' },
      { level: 'einfach', q: 'Berechne die Steigung durch (0,0) und (2,4).', answer: '2', tip: 'm=Δy/Δx.' },
      { level: 'mittel', q: 'Berechne die Steigung durch (2,4) und (−1,−5).', answer: '3', tip: 'm=(4−(−5))/(2−(−1)).' },
      { level: 'mittel', q: 'Eine Gerade hat m=3 und geht durch (2,4). Wie gross ist q?', answer: '-2', tip: 'y=mx+q, Punkt einsetzen und nach q auflösen.' },
      { level: 'mittel', q: 'Berechne die Steigung durch (3,−2) und (−1,4).', answer: '-1.5', tip: 'm=(−2−4)/(3−(−1)).' },
      { level: 'schwer', q: 'Eine Gerade durch (3,−3) und (1,1) — berechne m und q.', answer: 'm=-2, q=3', tip: 'Erst m, dann einen Punkt einsetzen.' },
      { level: 'kanti', q: 'Wie im Original: Warum bleiben bei 6 Graphen und 6 Gleichungen trotzdem zwei Kästchen leer?', answer: 'weil zwei der sechs Gleichungen zu keinem der gezeichneten Graphen passen', tip: 'Es gibt mehr Gleichungen als tatsächlich passende Graphen.' },
      { level: 'kanti', q: 'Wie im Original: Eine waagrechte Gerade hat welche Form?', answer: 'y=konstante Zahl', tip: 'Keine x-Abhängigkeit.' },
    ],
  },

  // ── AUFGABE 3b ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_GERADEN_3b',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    topic: 'Funktionen',
    questionText: `Aufgabe 3b: Geradengleichungen aufstellen
Zwei weitere Graphen sind gegeben:

Graph links: waagrecht durch A=(5,2), B=(−3,2)
Graph rechts: durch A=(3,7), B=(−3,−1), schneidet die y-Achse bei y=3`,
    options: [
      { label: 'links: y=2 | rechts: y=(4/3)x+3', correct: true },
      { label: 'links: y=2 | rechts: y=(3/4)x+3', correct: false },
      { label: 'links: x=2 | rechts: y=(4/3)x+3', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Links: waagrechte Gerade',
          content: `Beide Punkte haben y=2 → die Gerade ist waagrecht.

✅ y = 2`,
        },
        {
          title: 'Rechts: Steigung + y-Achsenabschnitt',
          content: `m = (7 − (−1)) / (3 − (−3)) = 8/6 = ${frac('4', '3')}
Die Gerade schneidet die y-Achse bei y=3 (direkt ablesbar) → q=3

Probe mit A=(3,7): (4/3)·3+3 = 4+3 = 7 ✓
Probe mit B=(−3,−1): (4/3)·(−3)+3 = −4+3 = −1 ✓

✅ y = (4/3)x + 3`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gleiche y-Werte → waagrechte Gerade, y=Zahl.
2️⃣ Sonst: Steigung aus zwei Punkten berechnen.
3️⃣ q direkt am Schnittpunkt mit der y-Achse ablesen oder durch Einsetzen bestimmen.`,
    },
    practice: [
      { level: 'einfach', q: 'Eine Gerade geht durch (1,5) und (3,5). Gleichung?', answer: 'y=5', tip: 'Gleiche y-Werte.' },
      { level: 'einfach', q: 'Eine Gerade schneidet die y-Achse bei 3. Was ist q?', answer: '3', tip: 'q = y-Achsenabschnitt.' },
      { level: 'einfach', q: 'Berechne 8÷6 als gekürzten Bruch.', answer: '4/3', tip: 'Beide durch 2 teilen.' },
      { level: 'mittel', q: 'Berechne die Steigung durch (3,7) und (−3,−1).', answer: '4/3', tip: 'm=(7−(−1))/(3−(−3)).' },
      { level: 'mittel', q: 'Eine Gerade hat m=4/3, q=3. Wie lautet y bei x=3?', answer: '7', tip: 'y=(4/3)·3+3.' },
      { level: 'mittel', q: 'Eine Gerade hat m=4/3, q=3. Wie lautet y bei x=−3?', answer: '-1', tip: 'y=(4/3)·(−3)+3.' },
      { level: 'schwer', q: 'Stelle die Geradengleichung auf für zwei Punkte (0,3) und (6,11).', answer: 'y=(4/3)x+3', tip: 'm=(11−3)/(6−0)=8/6=4/3, q=3 (direkt bei x=0 ablesbar).' },
      { level: 'kanti', q: 'Wie im Original links: Wie erkennt man sofort, dass eine Gerade waagrecht ist?', answer: 'beide Punkte haben den gleichen y-Wert', tip: 'Keine Änderung in y.' },
      { level: 'kanti', q: 'Wie im Original rechts: Warum kann man q hier direkt ablesen statt zu berechnen?', answer: 'weil die Gerade sichtbar die y-Achse bei einem bestimmten Punkt schneidet', tip: 'Der Schnittpunkt mit der y-Achse IST der q-Wert.' },
    ],
  },

  // ── AUFGABE 4a ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_FLAECHE_4a',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    figureUrl: '/figuren/2026_katze.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2026',
    topic: 'Geometrie',
    questionText: `Aufgabe 4a: Flächeninhalt der Katzenfigur
In der Abbildung entspricht die Seitenlänge jedes Kästchens 1 Meter. Die blaue Figur (eine "Katze") hat zwei rautenförmige Augen und ein dreieckiges Mäulchen (weiss, nicht Teil der blauen Fläche).
Bestimme den Flächeninhalt der blau gefärbten Figur in m².`,
    options: [
      { label: '75 m²', correct: true },
      { label: '80 m²', correct: false },
      { label: '84 m²', correct: false },
    ],
    solution: {
      intro: `Die Katzenfigur passt genau ins Gitter: Aussenkontur als Siebeneck (80 m²), minus zwei rautenförmige Augen (je 2 m²) und ein dreieckiges Mäulchen (1 m²).`,
      steps: [
        {
          title: '📖 Strategie',
          content: `1️⃣ Fläche der ganzen Aussenkontur berechnen (z.B. in Rechtecke/Dreiecke zerlegen oder Gitterpunkte zählen).
2️⃣ Die drei weissen Löcher (2 Augen + Mäulchen) einzeln berechnen.
3️⃣ Löcher von der Aussenfläche abziehen.`,
        },
        {
          title: 'Aussenkontur',
          content: `Die Aussenkontur lässt sich in ein Rechteck (8m breit, 11m hoch = 88m²) plus zwei "Ohren"-Dreiecke oben minus die Kerbe zwischen den Ohren, minus zwei "Kinn"-Dreiecke unten zerlegen (bzw. direkt mit der Gitterpunktformel/Zerlegung in Trapeze).

Durchrechnen (Zerlegung in Trapeze/Dreiecke entlang der Gitterlinien) ergibt für die Aussenkontur:
Aussenfläche = 80 m²`,
        },
        {
          title: 'Löcher abziehen',
          content: `Jede Raute (Auge) hat die Diagonalen 2m und 2m: Fläche = (2·2)/2 = 2 m² → zwei Augen = 4 m²
Das Mäulchen-Dreieck hat Basis 2m und Höhe 1m: Fläche = (2·1)/2 = 1 m²

Gesamtfläche = 80 − 4 − 1 = 75 m²

✅ 75 m²`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Figur in Gitter-Dreiecke/Rechtecke zerlegen.
2️⃣ Aussenfläche berechnen.
3️⃣ Löcher (Augen, Mäulchen) einzeln berechnen und abziehen.`,
    },
    practice: [
      { level: 'einfach', q: 'Eine Raute hat die Diagonalen 2m und 2m. Wie gross ist ihre Fläche?', answer: '2', tip: 'Fläche = (d1·d2)/2.' },
      { level: 'einfach', q: 'Ein Dreieck hat Basis 2m und Höhe 1m. Wie gross ist seine Fläche?', answer: '1', tip: 'Fläche = (Basis·Höhe)/2.' },
      { level: 'einfach', q: 'Ein Rechteck ist 8m breit und 11m hoch. Wie gross ist seine Fläche?', answer: '88', tip: 'Fläche = Breite·Höhe.' },
      { level: 'mittel', q: 'Eine Fläche von 80m² hat 2 Löcher à 2m². Wie gross ist die Restfläche?', answer: '76', tip: '80 − 2·2.' },
      { level: 'mittel', q: 'Eine Fläche von 80m² hat Löcher von 2m², 2m² und 1m². Wie gross ist die Restfläche?', answer: '75', tip: '80 − 2 − 2 − 1.' },
      { level: 'mittel', q: 'Ein Dreieck hat die Eckpunkte (0,0), (8,0), (0,6) (Gitterkoordinaten). Wie gross ist seine Fläche?', answer: '24', tip: 'Rechtwinkliges Dreieck: (Kathete1·Kathete2)/2.' },
      { level: 'schwer', q: 'Eine Figur besteht aus einem Rechteck 8×11 und zwei Dreiecken oben (je Basis 3, Höhe 4) als "Ohren", minus einem Dreieck in der Mitte (Basis 2, Höhe 4) als Kerbe. Wie gross ist die Gesamtfläche?', answer: '88+2·6-4=96... prüfe eigene Rechnung', tip: 'Fläche jedes Teils einzeln, dann addieren/subtrahieren.' },
      { level: 'kanti', q: 'Wie im Original: Welche drei Teilflächen müssen von der Aussenkontur abgezogen werden?', answer: 'die zwei Augen (Rauten) und das Mäulchen (Dreieck)', tip: 'Die weissen, nicht-blauen Bereiche innerhalb der Figur.' },
      { level: 'kanti', q: 'Wie im Original: Gesamtfläche der Katze?', answer: '75', tip: '80 (Aussenkontur) − 4 (2 Augen) − 1 (Mäulchen).' },
    ],
  },

  // ── AUFGABE 4b ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_FLAECHE_4b',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    figureUrl: '/figuren/2026_katze.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2026',
    topic: 'Geometrie',
    questionText: `Aufgabe 4b: Randlänge der Katzenfigur
Berechne die gesamte Länge aller Ränder (aussen und innen) der blauen Figur aus Aufgabe 4a. Du brauchst dein Ergebnis nicht als Dezimalzahl auszurechnen. Gib dein Ergebnis als Term der Form a + b√2 an, wobei a und b natürliche Zahlen sind.`,
    options: [
      { label: '46 + 10√2 m', correct: true },
      { label: '44 + 12√2 m', correct: false },
      { label: '46 + 8√2 m', correct: false },
    ],
    solution: {
      intro: `Aussenrand und Innenränder (2 Augen + Mäulchen) einzeln berechnen, dann addieren. Diagonale Strecken im Gitter (1 Kästchen schräg) haben die Länge √2 (Satz des Pythagoras: √(1²+1²)).`,
      steps: [
        {
          title: '📖 Diagonalen im Gitter',
          content: `Eine Strecke, die genau 1 Kästchen nach rechts UND 1 Kästchen nach oben/unten geht, hat die Länge √(1²+1²) = √2.
Strecken, die nur waagrecht/senkrecht verlaufen, haben ganzzahlige Länge.`,
        },
        {
          title: 'Aussenrand',
          content: `Die Aussenkontur besteht aus 7 Seiten. Die zwei senkrechten Seiten sind 11m lang (2×11=22m).
Die vier schrägen "Ohren/Kinn"-Seiten gehen je 3 Kästchen waagrecht und 4 Kästchen senkrecht → Länge √(3²+4²)=√25=5m (4×5=20m).
Die flache Kerbe zwischen den Ohren ist 2m lang (waagrecht).

Aussenrand = 22 + 20 + 2 = 44 m`,
        },
        {
          title: 'Innenränder (Augen + Mäulchen)',
          content: `Jede Raute (Auge) hat 4 Seiten, jede diagonal über 1×1 Kästchen → Länge √2 pro Seite, 4√2 pro Auge, 8√2 für beide Augen.
Das Mäulchen-Dreieck hat eine waagrechte Seite (2m) und zwei schräge Seiten (je 1 Kästchen waagrecht, 1 Kästchen senkrecht → √2), also 2 + 2√2.

Innenränder = 8√2 + 2 + 2√2 = 2 + 10√2 m`,
        },
        {
          title: 'Gesamt',
          content: `Gesamtrand = Aussenrand + Innenränder = 44 + (2 + 10√2) = 46 + 10√2 m

✅ 46 + 10√2 m`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Jede Gitterstrecke einzeln klassifizieren: waagrecht/senkrecht (ganze Zahl) oder diagonal über 1×1 (→ √2).
2️⃣ Aussenrand separat berechnen.
3️⃣ Innenränder (Löcher) separat berechnen.
4️⃣ Alles addieren, als a+b√2 zusammenfassen.`,
    },
    practice: [
      { level: 'einfach', q: 'Wie lang ist eine Diagonale durch ein 1×1-Kästchen?', answer: '√2', tip: 'Pythagoras: √(1²+1²).' },
      { level: 'einfach', q: 'Wie lang ist eine Strecke, die 2 Kästchen waagrecht geht?', answer: '2', tip: 'Keine Diagonale, einfach zählen.' },
      { level: 'einfach', q: 'Addiere: 3√2 + 5√2', answer: '8√2', tip: 'Gleichartige Terme addieren wie bei Variablen.' },
      { level: 'mittel', q: 'Eine Raute hat 4 Seiten à √2. Wie gross ist ihr Umfang?', answer: '4√2', tip: '4 · √2.' },
      { level: 'mittel', q: 'Eine Strecke geht 3 Kästchen waagrecht und 4 Kästchen senkrecht. Wie lang ist sie?', answer: '5', tip: 'Pythagoras: √(3²+4²)=√25.' },
      { level: 'mittel', q: 'Addiere: 20 + 22 + 2', answer: '44', tip: 'Einfache Addition.' },
      { level: 'schwer', q: 'Fasse zusammen: 8√2 + 2 + 2√2', answer: '2+10√2', tip: 'Die √2-Terme zusammenfassen, die Zahl separat stehen lassen.' },
      { level: 'kanti', q: 'Wie im Original: Warum muss man bei "schrägen" Gitterstrecken oft Pythagoras verwenden?', answer: 'weil die Streckenlänge nicht direkt an den Gitterlinien abgelesen werden kann, sondern über die Katheten berechnet werden muss', tip: 'Diagonalen sind keine ganzen Gitterlängen.' },
      { level: 'kanti', q: 'Wie im Original: Gesamtrand (aussen+innen) der Katzenfigur als a+b√2?', answer: '46+10√2', tip: '44 (Aussenrand, ganzzahlig) + 2+10√2 (Innenränder).' },
    ],
  },

  // ── AUFGABE 5 — UNSICHER ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_WINKEL_5',
    hidden: true, // unsicher — wird erst nach manueller Prüfung sichtbar gemacht
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    figureUrl: '',
    topic: 'Geometrie',
    questionText: `Aufgabe 5: Winkel bestimmen (⚠️ unsichere Aufgabe — siehe Hinweis unten)
Gegeben ist der Winkel δ=16° in der folgenden Zeichnung. Berechne die Winkel α, β und γ. Die Kreismittelpunkte sind M1 und M2.

Figurbeschreibung: Ein Dreieck mit den Eckpunkten A (unten links, Winkel α), M2 (oben, Winkel β) und D (unten rechts, Winkel δ=16°, gegeben). M1 liegt auf der Strecke A–M2 (mit einem Konstruktionszeichen, vermutlich der Mittelpunkt dieser Strecke). Ein grosser Kreis mit Mittelpunkt M2 geht durch A und durch einen Punkt F auf der Grundlinie direkt unter M2. Ein kleinerer Kreis mit Mittelpunkt M1 kreuzt die Diagonale A–D; der Winkel γ ist bei diesem Kreuzungspunkt markiert, nahe der senkrechten Linie M2–F.
Die Skizze ist nicht massstabsgetreu.`,
    options: [
      { label: 'Ohne gesicherte Konstruktion keine verlässliche Zahl — siehe Hinweis', correct: true },
      { label: 'α=32°, β=106°, γ=74°', correct: false },
      { label: 'α=16°, β=148°, γ=90°', correct: false },
    ],
    solution: {
      intro: `⚠️ UNSICHER: Diese Aufgabe konnte ich trotz mehrfachem genauem Betrachten der Figur NICHT mit Sicherheit lösen. Es gibt (anders als bei den Jahren 2016–2025) noch keine offizielle Lösung zum Abgleich. Hier die Teile, die ich sicher erkennen kann — ohne eine erfundene Zahl für α, β, γ.`,
      steps: [
        {
          title: 'Was sicher ist',
          content: `• δ = 16° ist der gegebene Winkel beim rechten Eckpunkt (zwischen der Grundlinie und der Diagonale A–D).
• M2 ist der Mittelpunkt eines Kreises, der (unter anderem) durch A geht.
• M1 liegt auf der Strecke A–M2, vermutlich als deren Mittelpunkt konstruiert (kleine Bogen-Markierung im Bild — typisch für eine Mittelsenkrechten-/Mittelpunkt-Konstruktion).
• Vermutlich kommen der Satz des Thales (M1 als Mittelpunkt des Kreises über der Strecke A–M2) und der Peripheriewinkelsatz zum Einsatz — wie bei ähnlichen Aufgaben in früheren Jahren.`,
        },
        {
          title: 'Warum ich hier nicht rechne',
          content: `Um α, β und γ wirklich zu berechnen, müsste ich genau wissen, welcher Punkt auf welchem der beiden Kreise liegt und welcher Winkel im Bild welchen exakten Scheitelpunkt und welche exakten Schenkel hat. Das liess sich aus der Skizze nicht zweifelsfrei rekonstruieren — und ohne offizielle Lösung kann ich das Ergebnis auch nicht gegenprüfen.
Eine geratene Zahl wäre hier gefährlicher als ehrlich "unsicher" zu sagen.

👉 Bitte bei Gelegenheit mit der echten Prüfungsfigur (PDF Seite 7) von Hand nachvollziehen oder auf die offizielle Lösung warten, sobald sie veröffentlicht wird.`,
        },
      ],
      tip: `🍳 Bei dieser Aufgabe: nicht raten! Zeichne die Figur gross auf Papier nach, miss (auch wenn "nicht massstabsgetreu") zur groben Kontrolle, und suche nach gleichschenkligen Dreiecken (Radien!) sowie dem Satz des Thales.`,
    },
    practice: [
      { level: 'einfach', q: 'Wie heisst der Satz, der sagt: ein Winkel im Halbkreis über dem Durchmesser ist immer 90°?', answer: 'Satz des Thales', tip: 'Benannt nach Thales von Milet.' },
      { level: 'einfach', q: 'Zwei Radien desselben Kreises — sind sie gleich lang?', answer: 'ja', tip: 'Per Definition eines Kreises.' },
      { level: 'mittel', q: 'Ein Dreieck aus zwei Radien und einer Sehne — wie nennt man so ein Dreieck?', answer: 'gleichschenklig', tip: 'Zwei gleich lange Seiten (die Radien).' },
      { level: 'kanti', q: 'Wie im Original: Welcher gegebene Winkel ist bekannt?', answer: 'δ=16°', tip: 'Direkt in der Aufgabe gegeben.' },
    ],
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M1_2026_OTR_TERME_6',
    year: 2026,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: '',
    topic: 'Terme & Klammern',
    questionText: `Aufgabe 6: Welche Terme sind gleichwertig?
Prüfe für jede Teilaufgabe, welche der möglichen Lösungen gleichwertig (äquivalent) zum gegebenen Term sind. Achtung: Teilweise sind mehrere Lösungen richtig.

a) (4ab)² : (4ab²) — mögliche Lösungen: (4a)² | a | 4a

b) 3a²b(b+3) − 3a²b — mögliche Lösungen: 3a²b(b+2) | 3a²b²−a²b | 3a²b²+3a²b

c) y²+y²+y²+y² — mögliche Lösungen: 4y² | (2y)² | y⁸`,
    options: [
      { label: 'a) nur 4a | b) nur 3a²b(b+2) | c) 4y² UND (2y)²', correct: true },
      { label: 'a) nur (4a)² | b) nur 3a²b²+3a²b | c) nur y⁸', correct: false },
      { label: 'a) a und 4a | b) nur 3a²b²−a²b | c) nur 4y²', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'a) (4ab)² : (4ab²)',
          content: `(4ab)² = 16a²b²
16a²b² ÷ 4ab² = 4a

Vergleich: (4a)²=16a² ≠ 4a (falsch) | a ≠ 4a (falsch) | 4a = 4a ✅

✅ richtig: nur 4a`,
        },
        {
          title: 'b) 3a²b(b+3) − 3a²b',
          content: `3a²b(b+3) = 3a²b² + 9a²b
3a²b² + 9a²b − 3a²b = 3a²b² + 6a²b
Das lässt sich faktorisieren: 3a²b(b+2) = 3a²b²+6a²b ✅

Vergleich: 3a²b²−a²b ≠ 3a²b²+6a²b (falsch) | 3a²b²+3a²b ≠ 3a²b²+6a²b (falsch)

✅ richtig: nur 3a²b(b+2)`,
        },
        {
          title: 'c) y²+y²+y²+y²',
          content: `y²+y²+y²+y² = 4y²
(2y)² = 2²·y² = 4y² — das ist auch 4y²!
y⁸ ist etwas ganz anderes (y²·y²·y²·y²=y⁸ wäre eine Multiplikation, keine Addition)

✅ richtig: 4y² UND (2y)² (beide gleichwertig!)
❌ falsch: y⁸`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gegebenen Term zuerst selbst vereinfachen.
2️⃣ Jede mögliche Lösung einzeln ausmultiplizieren/vereinfachen.
3️⃣ Vergleichen — bei "teilweise mehrere Lösungen richtig" alle passenden ankreuzen.`,
    },
    practice: [
      { level: 'einfach', q: 'Vereinfache: (4a)²', answer: '16a²', tip: 'Potenz auf jeden Faktor anwenden.' },
      { level: 'einfach', q: 'Vereinfache: y²+y²', answer: '2y²', tip: 'Gleichartige Terme addieren.' },
      { level: 'einfach', q: 'Vereinfache: (2y)²', answer: '4y²', tip: '2² mal y².' },
      { level: 'mittel', q: 'Vereinfache: 16a²b² ÷ 4ab²', answer: '4a', tip: 'Zähler und Nenner einzeln kürzen.' },
      { level: 'mittel', q: 'Multipliziere aus: 3a²b(b+3)', answer: '3a²b²+9a²b', tip: 'Jeden Summanden einzeln mit 3a²b multiplizieren.' },
      { level: 'mittel', q: 'Vereinfache: 3a²b²+9a²b−3a²b', answer: '3a²b²+6a²b', tip: 'Gleichartige Terme zusammenfassen.' },
      { level: 'schwer', q: 'Faktorisiere: 3a²b²+6a²b', answer: '3a²b(b+2)', tip: 'Gemeinsamen Faktor 3a²b ausklammern.' },
      { level: 'kanti', q: 'Wie im Original c): Warum sind sowohl 4y² als auch (2y)² richtig?', answer: 'weil (2y)²=4y² — beide Terme sind algebraisch gleichwertig', tip: '(2y)² = 2²·y² = 4y².' },
      { level: 'kanti', q: 'Wie im Original a): (4ab)²:(4ab²) vereinfacht zu welchem Term?', answer: '4a', tip: '16a²b² ÷ 4ab² = 4a.' },
    ],
  },
];
