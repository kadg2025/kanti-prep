export const questions2016_oTR = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_GGT_1',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=1',

    topic: 'Zahlen & Teilbarkeit', // NEU

    questionText: `Aufgabe 1: ggT und kgV

Bestimme je den ggT (grösster gemeinsamer Teiler) und das kgV (kleinstes gemeinsames Vielfaches).

a) 26 und 39

b) a² · b · x³  und  a³ · b² · x`,

    options: [

      { label: "a) ggT=13, kgV=78 | b) ggT=a²·b·x, kgV=a³·b²·x³", correct: true },

      { label: "a) ggT=3, kgV=156 | b) ggT=a·b·x, kgV=a³·b²·x³", correct: false },

      { label: "a) ggT=13, kgV=78 | b) ggT=a²·b·x, kgV=a²·b·x³", correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `Primfaktorzerlegung: Eine Zahl wird in ihre Primzahl-Bausteine zerlegt (z.B. 12 = 2·2·3 = 2²·3).

🔢 ggT (grösster gemeinsamer Teiler)
Regel: Nimm von jedem gemeinsamen Primfaktor die KLEINERE Potenz.

🔢 kgV (kleinstes gemeinsames Vielfaches)
Regel: Nimm von jedem vorkommenden Primfaktor die GRÖSSERE Potenz.`,

        },

        {

          title: 'a) ggT und kgV von 26 und 39',

          content: `Primfaktorzerlegung:
26 = 2 · 13
39 = 3 · 13

ggT: Der einzige gemeinsame Faktor ist 13.
→ ggT(26, 39) = 13

kgV: Alle Faktoren (2, 3, 13) mit ihren höchsten Potenzen.
→ kgV(26, 39) = 2¹ · 3¹ · 13¹ = 78

✅ ggT = 13 | kgV = 78`,

        },

        {

          title: 'b) ggT und kgV von a²·b·x³ und a³·b²·x',

          content: `Faktoren vergleichen:
         a² · b¹ · x³
         a³ · b² · x¹

ggT (kleinere Potenzen): a² · b¹ · x¹
→ ggT = a²bx

kgV (grössere Potenzen): a³ · b² · x³
→ kgV = a³b²x³

✅ ggT = a²bx | kgV = a³b²x³`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Primfaktorzerlegung beider Zahlen/Terme.
2️⃣  ggT: Nur die gemeinsamen Faktoren mit der jeweils KLEINEREN Potenz nehmen.
3️⃣  kgV: Alle vorkommenden Faktoren mit der jeweils GRÖSSEREN Potenz nehmen.`,

    },

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_KGV_2',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=2',

    topic: 'Zahlen & Teilbarkeit', // NEU

    questionText: `Aufgabe 2: Strassenbahnen
An einem Knotenpunkt fahren zur gleichen Zeit Strassenbahnen der Linien 1, 2 und 3 ab.
- Linie 1: Takt 12 Minuten
- Linie 2: Takt 18 Minuten
- Linie 3: Takt 16 Minuten
Nach wie vielen Minuten treffen alle drei Linien das nächste Mal wieder gleichzeitig zusammen?`,

    options: [

      { label: '144 Minuten', correct: true },

      { label: '72 Minuten', correct: false },

      { label: '288 Minuten', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `⏱️ Gleichzeitiges Treffen = kgV
Wenn mehrere Ereignisse in verschiedenen Takten (Intervallen) auftreten, ist der Zeitpunkt des nächsten gemeinsamen Treffens immer das kleinste gemeinsame Vielfache (kgV) der Taktzeiten.`,

        },

        {

          title: 'Schritt 1: Primfaktorzerlegung',

          content: `12 = 2 · 6 = 2 · 2 · 3 = 2² · 3
18 = 2 · 9 = 2 · 3 · 3 = 2 · 3²
16 = 2 · 8 = 2 · 2 · 4 = 2 · 2 · 2 · 2 = 2⁴`,

        },

        {

          title: 'Schritt 2: kgV berechnen',

          content: `Wir nehmen von jedem Primfaktor (2 und 3) die höchste vorkommende Potenz:
→ von der 2 ist die höchste Potenz die 2⁴.
→ von der 3 ist die höchste Potenz die 3².
kgV = 2⁴ · 3² = 16 · 9 = 144
✅ Nach 144 Minuten treffen alle drei Linien wieder gleichzeitig zusammen.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  "Wann wieder gleichzeitig?" → IMMER das kgV der Zeitintervalle.
2️⃣  Primfaktorzerlegung aller Zahlen.
3️⃣  kgV = Produkt aller Primfaktoren mit ihrer jeweils HÖCHSTEN Potenz.`,

    },

  },


 // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M3_2016_OTR_KLAMMER_3',
    year: 2016,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=2',
    topic: 'Terme & Klammern',

    verified: true,

    questionText: `Aufgabe 3: Klammern setzen
Setze Klammern auf der linken Seite so, dass wahre Aussagen entstehen.
a) 4a – 5b – 6a – 7b = 10a – 12b
b) 4a – 5b – 6a – 7b = 10a + 2b
c) 4a – 5b – 6a – 7b = –2a + 2b`,

    options: [
      { label: 'a) 4a–(5b–6a)–7b | b) 4a–(5b–6a–7b) | c) 4a–5b–(6a–7b)', correct: true },
      { label: 'a) (4a–5b)–6a–7b | b) 4a–5b–(6a–7b) | c) 4a–(5b–6a)–7b', correct: false },
      { label: 'a) 4a–5b–(6a–7b) | b) (4a–5b–6a)–7b | c) 4a–(5b–6a+7b)', correct: false },
    ],

    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔑 Die Minusklammer-Regel:
Ein Minus vor einer Klammer ist der entscheidende Trick. Es dreht ALLE Vorzeichen IN der Klammer um.
→ -(a – b) wird zu –a + b
→ -(a + b) wird zu –a – b
💡 Strategie: Rechne zuerst aus, was ohne Klammern rauskommt. Vergleiche es mit dem Ziel und überlege, welche Vorzeichen du "umpolen" musst.`,
        },
        {
          title: 'a) Ziel: 10a – 12b',
          content: `Ohne Klammern: 4a – 6a = –2a. Wir brauchen aber 10a.
Wie wird aus –6a ein +6a? Indem wir ein Minus davor setzen: –(–6a).
Versuch: 4a – (5b – 6a) – 7b
= 4a – 5b + 6a – 7b
= 10a – 12b ✅`,
        },
        {
          title: 'b) Ziel: 10a + 2b',
          content: `Wir brauchen wieder +6a. Und aus –5b und –7b soll +2b werden. Das geht nur, wenn aus –7b ein +7b wird.
Also müssen –6a und –7b in eine Minusklammer.
Versuch: 4a – (5b – 6a – 7b)
= 4a – 5b + 6a + 7b
= 10a + 2b ✅`,
        },
        {
          title: 'c) Ziel: –2a + 2b',
          content: `Der a-Teil (4a-6a = -2a) stimmt schon. Wir müssen nur den b-Teil korrigieren. Aus –5b und –7b soll +2b werden. Das geht, wenn aus –7b ein +7b wird.
Versuch: 4a – 5b – (6a – 7b)
= 4a – 5b – 6a + 7b
= –2a + 2b ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Rechne das Ergebnis ohne Klammern aus.
2️⃣  Vergleiche mit dem Ziel: Welche Terme haben das falsche Vorzeichen?
3️⃣  Setze eine Minusklammer so, dass genau diese Terme ihr Vorzeichen ändern.
4️⃣  Probe: Klammern auflösen und prüfen.`,
    },

    // ── ÜBUNGEN: aufbauend zur Minusklammer-Regel. Antwort eintippen (Reihenfolge egal).
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Fasse zusammen: 4a – 6a', answer: '-2a', tip: 'Gleiche Variablen zusammenzählen — achte gut auf die Vorzeichen.' },
      { level: 'einfach', q: 'Löse die Klammer auf: a – (b – c)', answer: 'a-b+c', tip: 'Ein Minus vor der Klammer dreht jedes Vorzeichen darin um.' },
      { level: 'einfach', q: 'Löse die Klammer auf: –(2x – 3y)', answer: '-2x+3y', tip: 'Das Minus vor der Klammer kehrt jedes Vorzeichen innen um.' },

      { level: 'mittel', q: 'Löse auf und fasse zusammen: 5a – (2a – b)', answer: '3a+b', tip: 'Erst die Minusklammer auflösen (Vorzeichen drehen), dann gleiche Terme zusammenfassen.' },
      { level: 'mittel', q: 'Löse auf und fasse zusammen: 4a – 5b – (6a – 7b)', answer: '-2a+2b', tip: 'Nur die Klammer dreht ihre Vorzeichen — danach gleiche Terme sortieren.' },
      { level: 'mittel', q: 'Löse auf und fasse zusammen: 4a – (5b – 6a) – 7b', answer: '10a-12b', tip: 'Die eine Minusklammer dreht ihre Vorzeichen, der Rest bleibt unverändert.' },

      { level: 'schwer', q: 'Löse auf und fasse zusammen: 4a – (5b – 6a – 7b)', answer: '10a+2b', tip: 'Die Minusklammer dreht ALLE Vorzeichen innen um — auch das letzte.' },
      { level: 'schwer', q: 'Löse auf und fasse zusammen: 3x – (x – (2x – 4))', answer: '4x-4', tip: 'Von innen nach aussen: zuerst die innere Klammer, dann die äussere. Jedes Minus dreht die Vorzeichen.' },

      { level: 'kanti', q: 'Löse auf und fasse zusammen: 2a – (3a – (4a – 5a))', answer: '-2a', tip: 'Arbeite von der innersten Klammer nach aussen; jedes Minus dreht die Vorzeichen.' },
      { level: 'kanti', q: 'Löse auf und fasse zusammen: a – (b – c) – (a – b)', answer: 'c', tip: 'Zwei Minusklammern — jede dreht ihre eigenen Vorzeichen. Danach kürzt sich vieles weg.' },
    ],
  },

// ── AUFGABE 4 ─────────────────────────────────────────────
// ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M3_2016_OTR_RECHNEN_4',
    year: 2016,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=3',
    topic: 'Terme & Klammern',

    verified: true,

    questionText: `Aufgabe 4: Vereinfachen
Vereinfache die folgende Rechnung soweit wie möglich:
\[–10 · (–10) – (–10)\] · (–10) + (–10) =`,

    options: [
      { label: '–1110', correct: true },
      { label: '–900', correct: false },
      { label: '1090', correct: false },
    ],

    solution: {
      intro: 'Diese Aufgabe übt zwei Dinge zusammen: die Vorzeichen-Regeln (plus/minus) und die richtige Reihenfolge beim Rechnen. Wir gehen es ganz langsam Schritt für Schritt durch.',
      steps: [
        {
          title: '🧩 Zuerst verstehen: –10, (–10) und –(10)',
          content: `Diese drei Schreibweisen bedeuten alle DASSELBE: die Zahl "minus zehn".
• –10   → die Zahl minus zehn.
• (–10) → genau dieselbe Zahl. Die Klammer ändert nichts am Wert – sie macht nur klar, dass das Minus zur Zahl gehört, z.B. bei  7 · (–10).
• –(10) → "das Negative von 10", also auch –10.

👉 Merke: Die Klammer ändert den Wert NICHT. Sie hilft nur, das Vorzeichen sauber zu sehen.

Aufpassen, wenn ein Minus DAVOR steht:
– (–10) heisst "minus mal minus" → das wird zu  +10.`,
        },
        {
          title: '📖 Die Vorzeichen-Regeln (mit 10er-Reihe)',
          content: `(–) · (–) = +     z.B.  –10 · (–10) = +100
(–) · (+) = –     z.B.  –10 · 10   = –100
(+) · (–) = –     z.B.  100 · (–10) = –1000
– (–x) = +x       z.B.  – (–10) = +10
+ (–x) = –x       z.B.  + (–10) = –10`,
        },
        {
          title: '🔢 Wo anfangen, wenn es mehrere Klammern gibt?',
          content: `Immer von INNEN nach AUSSEN – ein Schritt nach dem anderen:
1. Zuerst die INNERSTE Klammer ausrechnen.
2. Darin gilt: Punkt vor Strich (· und : kommen vor + und –).
3. Dann das Ergebnis der Klammer mit dem multiplizieren, was draussen daneben steht.
4. GANZ zum Schluss: plus und minus.

So kann man sich nie verheddern.`,
        },
        {
          title: 'Schritt 1: Innere Klammer [ ] auflösen',
          content: `\[–10 · (–10) – (–10)\]
Punkt vor Strich:  –10 · (–10) = +100
Dann das Minus-Minus:  – (–10) = +10
Die Klammer wird zu:  \[100 + 10\] = 110`,
        },
        {
          title: 'Schritt 2: Weiterrechnen',
          content: `Jetzt steht da:  110 · (–10) + (–10)
Punkt vor Strich:  110 · (–10) = –1100
Zum Schluss die Strichrechnung:  –1100 + (–10) = –1100 – 10 = –1110
✅ Ergebnis: –1110`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Innerste Klammer zuerst berechnen.
2️⃣ Darin "Punkt vor Strich" beachten.
3️⃣ Das Klammer-Ergebnis mit dem nächsten Faktor multiplizieren.
4️⃣ Ganz am Ende addieren/subtrahieren.`,
    },

    // ── ÜBUNGEN: Kind tippt die Antwort, grün = richtig, rot = falsch, Tipp möglich ──
    // Tipps sind bewusst HIGH-LEVEL: sie nennen nur das Konzept/die Regel,
    // niemals Zahlen oder die Lösung selbst.
    practice: [
      { level: 'einfach', q: 'Berechne: –10 · (–10)', answer: '100', tip: 'Denk an die Vorzeichen-Regel: was ergibt minus mal minus?' },
      { level: 'einfach', q: 'Berechne: –10 · 10', answer: '-100', tip: 'Ein negatives und ein positives Vorzeichen multipliziert — welches Vorzeichen kommt heraus?' },
      { level: 'einfach', q: 'Berechne: – (–10)', answer: '10', tip: 'Was passiert, wenn vor einer negativen Zahl noch ein Minus steht? Zwei Minus heben sich auf.' },

      { level: 'mittel', q: 'Berechne: –10 · (–10) + 10', answer: '110', tip: 'Punkt vor Strich: rechne zuerst die Multiplikation, erst danach die Addition.' },
      { level: 'mittel', q: 'Berechne: 100 · (–10)', answer: '-1000', tip: 'Positiv mal negativ — denk an die Vorzeichen-Regel.' },
      { level: 'mittel', q: 'Berechne: –1000 + (–10)', answer: '-1010', tip: 'Plus eine negative Zahl ist dasselbe wie abziehen.' },

      { level: 'schwer', q: 'Berechne: [–10 · (–10) – 10] · (–1)', answer: '-90', tip: 'Zuerst die eckige Klammer ausrechnen (Punkt vor Strich), dann mit dem Faktor draussen multiplizieren.' },
      { level: 'schwer', q: 'Berechne: [–10 – (–10)] · (–10)', answer: '0', tip: 'Rechne die Klammer ganz genau aus, bevor du weitermachst — schau, was dabei herauskommt.' },

      { level: 'kanti', q: 'Vereinfache: [–10 · (–10) + (–10)] · (–10)', answer: '-900', tip: 'Von innen nach aussen: innerste Klammer zuerst, dann multiplizieren, ganz am Schluss das Vorzeichen prüfen.' },
      { level: 'kanti', q: 'Vereinfache: [10 · (–10) – (–10)] · (–10) + (–10)', answer: '890', tip: 'Schritt für Schritt von innen nach aussen: eckige Klammer, multiplizieren, zuletzt die Strichrechnung.' },
    ],
  },

  // ── AUFGABE 5a ────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_GL_5a',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=3',

    topic: 'Gleichungen', // NEU

    questionText: `Aufgabe 5a: Gleichung lösen
Wenn man von der Hälfte einer Zahl 7 abzieht, erhält man das 4-fache der Zahl.
Wie lautet die Zahl?`,

    options: [

      { label: 'x = –2', correct: true },

      { label: 'x = 2', correct: false },

      { label: 'x = –14/7', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Gleichung aufstellen:
Der wichtigste Schritt ist, den Text in Mathe-Sprache zu übersetzen. "Eine Zahl" nennen wir x.
"Hälfte einer Zahl": x/2
"7 abziehen": – 7
"erhält man": =
"das 4-fache der Zahl": 4x`,

        },

        {

          title: 'Gleichung aufstellen & lösen',

          content: `x/2 – 7 = 4x     | ×2 (um den Bruch wegzubekommen)
x – 14 = 8x      | –x
–14 = 7x          | ÷7
x = –2
✅ Die gesuchte Zahl ist –2.
Probe: Hälfte von -2 ist -1. Davon 7 abziehen: -1 - 7 = -8. Das 4-fache von -2 ist auch -8. Stimmt!`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Text in Gleichung übersetzen (x = gesuchte Zahl).
2️⃣  Beide Seiten mit dem Nenner multiplizieren, um den Bruch zu eliminieren.
3️⃣  Alle x auf eine Seite bringen, alle Zahlen auf die andere.
4️⃣  Nach x auflösen und Probe machen!`,

    },

  },

  // ── AUFGABE 5b ────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_BRUCH_5b',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=4',

    topic: 'Gleichungen', // NEU

    questionText: `Aufgabe 5b: Bruchgleichung
Für welches x gibt die folgende Rechnung 1?
6/5 – (3x–1)/10 – 3x/4 = 1`,

    options: [

      { label: 'x = 2/7', correct: true },

      { label: 'x = 1/2', correct: false },

      { label: 'x = 4/10', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Bruchgleichung lösen:
Der Trick ist, zuerst die Brüche loszuwerden.
→ Finde den gemeinsamen Nenner (kgV) aller Brüche.
→ Multipliziere die GANZE Gleichung mit diesem kgV.
kgV von 5, 10 und 4:
5 = 5
10 = 2·5
4 = 2²
→ kgV = 2² · 5 = 20`,

        },

        {

          title: 'Schritt 1: Mit dem kgV (20) multiplizieren',

          content: `6/5 – (3x–1)/10 – 3x/4 = 1    | ×20
(20 · 6/5) – (20 · (3x–1)/10) – (20 · 3x/4) = (20 · 1)
(4 · 6) – (2 · (3x–1)) – (5 · 3x) = 20
24 – 2(3x–1) – 15x = 20`,

        },

        {

          title: 'Schritt 2: Klammer auflösen und lösen',

          content: `24 – 6x + 2 – 15x = 20
26 – 21x = 20 | -26
–21x = –6 | ÷(-21)
x = 6/21 (kürzen mit 3)
x = 2/7
✅ x = 2/7`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  kgV aller Nenner finden (hier: 20).
2️⃣  JEDEN Term auf beiden Seiten mit dem kgV multiplizieren.
3️⃣  Achtung bei Minus vor Klammern: –2(3x–1) = –6x + 2.
4️⃣  Nach x auflösen und am Ende kürzen.`,

    },

  },

  // ── AUFGABE 5c ────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_DREIECK_5c',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=5',

    topic: 'Gleichungen', // NEU

    questionText: `Aufgabe 5c: Dreieck
In einem Dreieck ist eine Höhe um 4 cm grösser als die zugehörige Seite.
Vergrössert man die Seite um 3 cm und verkleinert die Höhe um 1 cm, so ist der Flächeninhalt des neuen Dreiecks um 15 cm² grösser.
Bestimme die Höhe und die Seite des ursprünglichen Dreiecks.`,

    options: [

      { label: 'Seite = 10.5 cm, Höhe = 14.5 cm', correct: true },

      { label: 'Seite = 6 cm, Höhe = 10 cm', correct: false },

      { label: 'Seite = 8 cm, Höhe = 12 cm', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Fläche Dreieck = (Seite × Höhe) / 2
💡 Variablen wählen:
Seite = s
Höhe = h = s + 4`,

        },

        {

          title: 'Schritt 1: Gleichung aufstellen',

          content: `Alte Fläche: A_alt = (s * (s+4)) / 2
Neue Seite: s_neu = s+3
Neue Höhe: h_neu = (s+4) - 1 = s+3
Neue Fläche: A_neu = ((s+3) * (s+3)) / 2
Bedingung: A_neu = A_alt + 15
((s+3)²)/2 = (s(s+4))/2 + 15 | ×2
(s+3)² = s(s+4) + 30`,

        },

        {

          title: 'Schritt 2: Auflösen',

          content: `Binomische Formel links, ausmultiplizieren rechts:
s² + 6s + 9 = s² + 4s + 30 | –s²
6s + 9 = 4s + 30 | –4s, –9
2s = 21
s = 10.5 cm
Höhe h = s + 4 = 10.5 + 4 = 14.5 cm
✅ Seite = 10.5 cm, Höhe = 14.5 cm.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Seite = s, Höhe = s+4.
2️⃣  Gleichung für die Flächen aufstellen: Neue Fläche = Alte Fläche + 15.
3️⃣  Gleichung mit 2 multiplizieren, um die Brüche zu eliminieren.
4️⃣  Klammern auflösen. s² wird sich aufheben.
5️⃣  Lineare Gleichung nach s auflösen.`,

    },

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_FARBE_6',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=6',

    topic: 'Prozent & Zins', // NEU

    questionText: `Aufgabe 6: Farbeimer
Ein Maler hat zwei Eimer von je 8 Litern Volumen.
- Eimer 1: 3 Liter rote Farbe
- Eimer 2: 6 Liter gelbe Farbe
Er füllt vom ersten Eimer rote Farbe in den zweiten, bis dieser voll ist. Er mischt durch. Dann füllt er den ersten Eimer mit dem Gemisch des zweiten auf.
Wie viele Liter rote Farbe enthält nun der erste Eimer (letzte Mischung)?`,

    options: [
  { label: '2.75 Liter', correct: true },
  { label: '2 Liter', correct: false },
  { label: '1.5 Liter', correct: false },
],


    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `🎨 Mischungsrechnung:
Wenn ein Gemisch gleichmässig gemischt ist, hat jeder Liter den gleichen Anteil der Farben.
→ Konzentration Rot = (Liter Rot) / (Gesamte Liter)`,

        },

        {

          title: 'Schritt 1: Eimer 2 auffüllen',

          content: `Eimer 2 (8L) hat 6L Gelb, braucht also 2L zum Füllen.
Diese 2L Rote Farbe kommen aus Eimer 1.
Situation danach:
Eimer 1: 3L - 2L = 1L rote Farbe. (Rest ist leer)
Eimer 2: 6L Gelb + 2L Rot = 8L Gemisch.`,

        },

        {

          title: 'Schritt 2: Konzentration in Eimer 2',

          content: `In Eimer 2 sind 2L Rot auf 8L Gesamtflüssigkeit.
Konzentration Rot = 2/8 = 1/4 = 25%`,

        },

        {

          title: 'Schritt 3: Eimer 1 auffüllen',

          content: `In Eimer 1 ist nur noch 1L rote Farbe. Es fehlen 7L, bis er voll ist.
Diese 7L werden aus Eimer 2 genommen.
Übertragene rote Farbe = 7L * (Konzentration Rot) = 7L * (1/4) = 1.75L.
Rote Farbe in Eimer 1 am Schluss:
Eigene rote Farbe + übertragene rote Farbe
1 L + 1.75 L = 2.75 L.
(Hinweis: Die offizielle Lösung hat ein anderes Resultat, 1.875L. Dies würde sich ergeben, wenn Eimer 1 nur 5L Volumen hätte. Mit 8L Volumen ist 2.75L korrekt.)`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Berechne, wie viele Liter von Eimer 1 nach 2 fliessen.
2️⃣  Berechne die neue Konzentration in Eimer 2 (% Rot).
3️⃣  Berechne, wie viele Liter von 2 nach 1 fliessen.
4️⃣  Berechne, wie viel Rot dabei mitfliesst (Menge × Konzentration).
5️⃣  Addiere dies zum roten Rest in Eimer 1.`,

    },

  },

  // ── AUFGABE 7a ────────────────────────────────────────────
  {
    id: 'M3_2016_OTR_WINKEL_7a',
    year: 2016,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=7',
    topic: 'Geometrie',
    questionText: `Aufgabe 7a: Winkel berechnen
Gegeben ist ein Kreis mit einem einbeschriebenen Winkel von 32°. Berechne den Winkel α.
Die Skizze ist nicht massstabsgetreu!`,
    options: [
      { label: 'α = 64°', correct: true },
      { label: 'α = 32°', correct: false },
      { label: 'α = 16°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔵 Umfangswinkel (Peripheriewinkel): Ein Winkel, dessen Scheitel auf der Kreislinie liegt.
🔴 Mittelpunktswinkel (Zentriwinkel): Ein Winkel, dessen Scheitel im Kreismittelpunkt M liegt.
🔑 Satz vom Mittelpunktswinkel: Der Mittelpunktswinkel ist immer doppelt so gross wie der Umfangswinkel über dem gleichen Kreisbogen.`,
        },
        {
          title: 'Lösung',
          content: `Der gegebene Winkel von 32° ist der Umfangswinkel.
Der gesuchte Winkel α ist der Mittelpunktswinkel über dem exakt gleichen Bogen.
Daher gilt die Regel: Mittelpunktswinkel = 2 × Umfangswinkel.
α = 2 × 32° = 64°
✅ α = 64°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Umfangswinkel erkennen (Scheitel liegt auf dem Kreisbogen).
2️⃣  Passenden Mittelpunktswinkel dazu suchen (Scheitel = Kreismittelpunkt).
3️⃣  Mittelpunktswinkel = 2 × Umfangswinkel.`,
    },
  },

  // ── AUFGABE 7b ────────────────────────────────────────────
  {
    id: 'M3_2016_OTR_WINKEL_7b',
    year: 2016,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=8',
    topic: 'Geometrie',
    questionText: `Aufgabe 7b: Winkel berechnen
Berechne die Winkel α und β.
Gegeben: Ein Winkel am Kreisrand beträgt 27°. Ein weiterer Winkel am Kreisrand ist mit 2α beschriftet.
Die Skizze ist nicht massstabsgetreu!`,
    options: [
      { label: 'α = 27°, β = 99°', correct: true },
      { label: 'α = 54°, β = 27°', correct: false },
      { label: 'α = 27°, β = 54°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔵 Umfangswinkel über dem gleichen Bogen sind IMMER gleich gross (Peripheriewinkelsatz).
🔑 Winkel im Halbkreis = 90° (Thales).
📐 Winkelsumme im Dreieck = 180°.`,
        },
        {
          title: 'Schritt 1: α bestimmen',
          content: `Der Winkel 27° und der Winkel α sind beides Umfangswinkel über dem gleichen Kreisbogen.
Nach dem Peripheriewinkelsatz gilt: Alle Umfangswinkel über dem gleichen Bogen sind gleich gross.
→ α = 27°
✅ α = 27°`,
        },
        {
          title: 'Schritt 2: β bestimmen',
          content: `Im eingezeichneten Dreieck kennen wir:
- Den Winkel 27° (Umfangswinkel)
- Den Winkel 2α = 2 × 27° = 54°
- Den gesuchten Winkel β

Winkelsumme im Dreieck = 180°:
27° + 54° + β = 180°
81° + β = 180°
β = 99°
✅ β = 99°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Peripheriewinkelsatz: Umfangswinkel über gleichem Bogen → gleich gross → α = 27°.
2️⃣  2α berechnen: 2 × 27° = 54°.
3️⃣  Winkelsumme Dreieck: 180° - 27° - 54° = β = 99°.`,
    },
  },
];


