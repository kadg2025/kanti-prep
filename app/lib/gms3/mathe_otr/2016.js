import { frac, sqrt } from '../../mathFormat';

export const questions2016_oTR = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_GGT_1',

    verified: true,

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

    // ── ÜBUNGEN: aufbauend zu ggT/kgV mit Zahlen und mit Variablen-Potenzen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Primfaktorzerlegung: 12 = 2 · 2 · ?', answer: '3', tip: 'Welche Primzahl fehlt noch, damit 2·2·? = 12 ist?' },
      { level: 'einfach', q: 'Bestimme den ggT von 8 und 12.', answer: '4', tip: 'Primfaktorzerlegung: 8=2³, 12=2²·3 — nimm die kleinere Potenz von 2.' },
      { level: 'einfach', q: 'Bestimme das kgV von 4 und 6.', answer: '12', tip: 'Primfaktorzerlegung: 4=2², 6=2·3 — nimm die grössere Potenz von jedem Faktor.' },

      { level: 'mittel', q: 'Bestimme den ggT von 26 und 39.', answer: '13', tip: 'Primfaktorzerlegung beider Zahlen, dann den gemeinsamen Faktor finden.' },
      { level: 'mittel', q: 'Bestimme das kgV von 26 und 39.', answer: '78', tip: 'Alle Primfaktoren mit ihrer höchsten Potenz multiplizieren.' },
      { level: 'mittel', q: 'Bestimme den ggT von a³ und a⁵. Welchen Exponenten hat das Ergebnis?', answer: '3', tip: 'ggT: die kleinere der beiden Potenzen.' },

      { level: 'schwer', q: 'Bestimme das kgV von a³ und a⁵. Welchen Exponenten hat das Ergebnis?', answer: '5', tip: 'kgV: die grössere der beiden Potenzen.' },
      { level: 'schwer', q: 'Bestimme den ggT von a²b und ab³.', answer: 'ab', tip: 'Nimm von jeder Variable die kleinere Potenz.' },

      { level: 'kanti', q: 'Bestimme den ggT von a²·b·x³ und a³·b²·x.', answer: 'a²bx', tip: 'Von jeder Variable die kleinere Potenz nehmen — genau wie im Original.' },
      { level: 'kanti', q: 'Bestimme das kgV von a²·b·x³ und a³·b²·x.', answer: 'a³b²x³', tip: 'Von jeder Variable die grössere Potenz nehmen — genau wie im Original.' },
    ],


  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_KGV_2',

    verified: true,

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

    // ── ÜBUNGEN: aufbauend zu kgV mit mehreren Zahlen (Takt-/Treffzeiten).
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Primfaktorzerlegung: 8 = 2 · 2 · ?', answer: '2', tip: 'Welcher Faktor fehlt, damit 2·2·?=8 ist?' },
      { level: 'einfach', q: 'Bestimme das kgV von 4 und 10.', answer: '20', tip: 'Primfaktorzerlegung: 4=2², 10=2·5 — grössere Potenzen nehmen.' },
      { level: 'einfach', q: 'Bestimme das kgV von 6 und 9.', answer: '18', tip: '6=2·3, 9=3² — grössere Potenzen nehmen.' },

      { level: 'mittel', q: 'Bestimme das kgV von 12 und 18.', answer: '36', tip: '12=2²·3, 18=2·3² — von jedem Faktor die grössere Potenz.' },
      { level: 'mittel', q: 'Bestimme das kgV von 12 und 16.', answer: '48', tip: '12=2²·3, 16=2⁴ — von jedem Faktor die grössere Potenz.' },
      { level: 'mittel', q: 'Bestimme das kgV von 18 und 16.', answer: '144', tip: '18=2·3², 16=2⁴ — von jedem Faktor die grössere Potenz.' },

      { level: 'schwer', q: 'Bestimme das kgV von 12, 18 und 16 (alle drei zusammen).', answer: '144', tip: 'Primfaktorzerlegung aller drei Zahlen, dann von jedem Faktor die höchste Potenz.' },
      { level: 'schwer', q: 'Zwei Busse fahren im Takt von 15 und 20 Minuten los. Nach wie vielen Minuten treffen sie sich wieder gleichzeitig?', answer: '60', tip: 'Gesucht ist das kgV der beiden Taktzeiten.' },

      { level: 'kanti', q: 'Drei Ampeln schalten im Takt von 12, 16 und 24 Sekunden auf Grün. Nach wie vielen Sekunden sind alle drei gleichzeitig grün?', answer: '48', tip: 'kgV aller drei Taktzeiten berechnen.' },
      { level: 'kanti', q: 'Drei Linien fahren im Takt von 10, 15 und 25 Minuten. Nach wie vielen Minuten treffen sich alle drei wieder?', answer: '150', tip: 'kgV aller drei Taktzeiten berechnen.' },
    ],


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

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_GL_5',

    verified: true,

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106440/AP16_M_GMS3_Teil_1_Pruefung.pdf?fp=1#page=3',

    topic: 'Gleichungen', // NEU

    questionText: `Aufgabe 5: Gleichungen lösen

a) Wenn man von der Hälfte einer Zahl 7 abzieht, erhält man das 4-fache der Zahl. Wie lautet die Zahl?

b) Für welches x gibt die folgende Rechnung 1?
${frac('6', '5')} – ${frac('3x–1', '10')} – ${frac('3x', '4')} = 1

c) In einem Dreieck ist eine Höhe um 4 cm grösser als die zugehörige Seite. Vergrössert man die Seite um 3 cm und verkleinert die Höhe um 1 cm, so ist der Flächeninhalt des neuen Dreiecks um 15 cm² grösser. Bestimme die Höhe und die Seite des ursprünglichen Dreiecks.`,

    options: [

      { label: 'a) x = –2 | b) x = 2/7 | c) Seite = 10.5 cm, Höhe = 14.5 cm', correct: true },

      { label: 'a) x = 2 | b) x = 1/2 | c) Seite = 6 cm, Höhe = 10 cm', correct: false },

      { label: 'a) x = –14/7 | b) x = 4/10 | c) Seite = 8 cm, Höhe = 12 cm', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Gleichungen lösen: Ziel ist immer, x auf einer Seite allein stehen zu haben.
🔑 Grundregeln beim Umformen: Was auf einer Seite gemacht wird (× ÷ + –), muss auch auf der anderen Seite gemacht werden.
🔑 Textaufgabe: Wörter Schritt für Schritt in eine Gleichung übersetzen (z.B. "Hälfte" → ÷2, "abziehen" → –, "erhält man" → =).
🔑 Bruchgleichung: Mit dem kgV aller Nenner multiplizieren, damit die Brüche verschwinden.
🔑 Textaufgabe mit Fläche: Variablen sinnvoll wählen (z.B. Seite = s, Höhe = s+4), dann die Bedingung als Gleichung aufstellen.`,

        },

        {

          title: 'a) Gleichung aufstellen & lösen',

          content: `📐 Gleichung aufstellen:
"Eine Zahl" nennen wir x.
"Hälfte einer Zahl": x/2
"7 abziehen": – 7
"erhält man": =
"das 4-fache der Zahl": 4x

x/2 – 7 = 4x     | ×2 (um den Bruch wegzubekommen)
x – 14 = 8x      | –x
–14 = 7x          | ÷7
x = –2
✅ Die gesuchte Zahl ist –2.
Probe: Hälfte von -2 ist -1. Davon 7 abziehen: -1 - 7 = -8. Das 4-fache von -2 ist auch -8. Stimmt!`,

        },

        {

          title: 'b) Bruchgleichung lösen',

          content: `📐 Zuerst die Brüche loswerden.
→ kgV von 5, 10 und 4:
5 = 5
10 = 2·5
4 = 2²
→ kgV = 2² · 5 = 20

6/5 – (3x–1)/10 – 3x/4 = 1    | ×20
(20 · 6/5) – (20 · (3x–1)/10) – (20 · 3x/4) = (20 · 1)
(4 · 6) – (2 · (3x–1)) – (5 · 3x) = 20
24 – 2(3x–1) – 15x = 20
24 – 6x + 2 – 15x = 20
26 – 21x = 20 | -26
–21x = –6 | ÷(-21)
x = 6/21 (kürzen mit 3)
x = 2/7
✅ x = 2/7`,

        },

        {

          title: 'c) Dreieck: Gleichung aufstellen & lösen',

          content: `📐 Fläche Dreieck = (Seite × Höhe) / 2
💡 Variablen wählen:
Seite = s
Höhe = h = s + 4

Alte Fläche: A_alt = (s * (s+4)) / 2
Neue Seite: s_neu = s+3
Neue Höhe: h_neu = (s+4) - 1 = s+3
Neue Fläche: A_neu = ((s+3) * (s+3)) / 2
Bedingung: A_neu = A_alt + 15
((s+3)²)/2 = (s(s+4))/2 + 15 | ×2
(s+3)² = s(s+4) + 30

Binomische Formel links, ausmultiplizieren rechts:
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
1️⃣  Text in Gleichung übersetzen bzw. Variablen sinnvoll wählen.
2️⃣  Beide Seiten mit dem kgV der Nenner multiplizieren, um Brüche zu eliminieren.
3️⃣  Klammern korrekt auflösen (Vorzeichen beachten!).
4️⃣  Alle x/Variablen auf eine Seite, alle Zahlen auf die andere.
5️⃣  Nach x auflösen und Probe machen!`,

    },

    // ── ÜBUNGEN: aufbauend zu linearen Gleichungen, Bruchgleichungen und Textaufgaben.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Löse: x/2 - 3 = 5', answer: '16', tip: 'Zuerst mit 2 multiplizieren, um den Bruch loszuwerden.' },
      { level: 'einfach', q: 'Löse: 2x + 5 = 3x - 1', answer: '6', tip: 'Bringe alle x auf eine Seite, alle Zahlen auf die andere.' },
      { level: 'einfach', q: 'Löse: x/4 + 1 = 3', answer: '8', tip: 'Zuerst mit 4 multiplizieren.' },

      { level: 'mittel', q: 'Löse: x/3 - x/6 = 2', answer: '12', tip: 'kgV von 3 und 6 ist 6 — damit multiplizieren.' },
      { level: 'mittel', q: 'Löse: (x-1)/2 + x/4 = 5', answer: '7', tip: 'kgV von 2 und 4 ist 4 — die ganze Gleichung damit multiplizieren, Klammer beachten.' },
      { level: 'mittel', q: 'Ein Rechteck hat die Breite b und die Länge b+3. Der Umfang ist 26. Wie gross ist b?', answer: '5', tip: 'Umfang = 2·(Länge+Breite). Gleichung aufstellen und nach b auflösen.' },

      { level: 'schwer', q: 'Löse: 3/4 - (2x-1)/8 = 1', answer: '-1/2', tip: 'kgV von 4 und 8 ist 8 — mit 8 multiplizieren, Minus vor der Klammer beachten.' },
      { level: 'schwer', q: 'Ein Quadrat hat die Seite s. Vergrössert man die Seite um 2 cm, wächst die Fläche um 20 cm². Wie lang ist s? (Binomische Formel nutzen: (s+2)² = s² + 4s + 4)', answer: '4', tip: 'Neue Fläche minus alte Fläche = 20. Binomische Formel anwenden, s² hebt sich weg.' },

      { level: 'kanti', q: 'Wenn man von der Hälfte einer Zahl 7 abzieht, erhält man das 4-fache der Zahl. Wie lautet die Zahl?', answer: '-2', tip: 'x/2 - 7 = 4x aufstellen, mit 2 multiplizieren, x isolieren.' },
      { level: 'kanti', q: 'Für welches x gilt: 6/5 - (3x-1)/10 - 3x/4 = 1? Gib die Lösung als gekürzten Bruch an.', answer: '2/7', tip: 'kgV von 5, 10, 4 ist 20 — die ganze Gleichung damit multiplizieren.' },
    ],

  },


  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2016_OTR_FARBE_6',

    verified: true,

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

✅ Ergebnis: 2.75 Liter rote Farbe`,

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
    // ── ÜBUNGEN: aufbauend zu Mischungsrechnung und Konzentration.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein Eimer fasst 10 Liter. Er enthält 4 Liter rote Farbe. Wie viele Liter fehlen bis er voll ist?', answer: '6', tip: 'Gesamtvolumen minus vorhandene Menge.' },
      { level: 'einfach', q: 'In einem Gemisch sind 3 Liter Rot auf 12 Liter Gesamtmenge. Wie gross ist der Anteil Rot (als gekürzter Bruch)?', answer: '1/4', tip: 'Anteil = Menge Rot / Gesamtmenge, dann kürzen.' },
      { level: 'einfach', q: 'Ein Anteil von 1/4 entspricht wie viel Prozent?', answer: '25', tip: 'Bruch mit 100 erweitern bzw. multiplizieren.' },

      { level: 'mittel', q: 'Ein 10-Liter-Eimer enthält 4 Liter Gelb. Wie viele Liter Rot braucht es, damit er voll ist?', answer: '6', tip: 'Gesamtvolumen minus vorhandene Farbe.' },
      { level: 'mittel', q: 'Nach dem Auffüllen sind in einem 10-Liter-Eimer 6 Liter Rot. Wie gross ist die Konzentration Rot (als gekürzter Bruch)?', answer: '3/5', tip: 'Menge Rot durch Gesamtmenge, dann kürzen.' },
      { level: 'mittel', q: 'Ein Eimer mit 1 Liter eigener roter Farbe braucht noch 5 Liter aus einem Gemisch mit Konzentration 3/5 Rot. Wie viel Rot kommt dazu?', answer: '3', tip: 'Übertragene Menge × Konzentration.' },

      { level: 'schwer', q: 'Ein 8-Liter-Eimer hat 2 Liter Blau. Wie viel fehlt bis er voll ist, und welche Konzentration Blau hat das volle Gemisch (als gekürzter Bruch)?', answer: '1/4', tip: 'Erst die fehlende Menge, dann Menge Blau durch neues Gesamtvolumen.' },
      { level: 'schwer', q: 'Ein Eimer mit 2 Liter eigener Farbe braucht noch 6 Liter aus einem Gemisch mit Konzentration 1/3. Wie viel Liter der gesuchten Farbe sind am Schluss im Eimer?', answer: '4', tip: 'Eigene Menge plus (übertragene Menge × Konzentration).' },

      { level: 'kanti', q: 'Eimer 2 (8L) enthält 5L Gelb. Wie viele Liter Rot müssen aus Eimer 1 dazu, bis Eimer 2 voll ist, und wie gross ist danach die Konzentration Rot (als gekürzter Bruch)?', answer: '3/8', tip: 'Fehlende Menge = 8 - 5 = 3L Rot, dann Konzentration = 3/8.' },
      { level: 'kanti', q: 'Wie im Original: Eimer 1 hat nach dem Umfüllen noch 1L eigene rote Farbe übrig und bekommt 7L aus einem Gemisch mit Konzentration 1/4 Rot zurück. Wie viel Rot ist am Schluss in Eimer 1?', answer: '2.75', tip: 'Eigene Menge (1L) plus übertragene Menge × Konzentration (7 × 1/4).' },
    ],


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
      { label: 'α = 96°', correct: true },
      { label: 'α = 64°', correct: false },
      { label: 'α = 32°', correct: false },
    ],
    solution: {
      intro: 'Die Figur enthält zwei ineinander verschachtelte Halbkreise mit unterschiedlichem Durchmesser. Der exakte Rechenweg mit den nötigen Hilfslinien lässt sich nur anhand der Original-Skizze sauber nachvollziehen — deshalb hier die Kernregeln und das offiziell bestätigte Ergebnis.',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔵 Umfangswinkel (Peripheriewinkel): Ein Winkel, dessen Scheitel auf der Kreislinie liegt.
🔴 Mittelpunktswinkel (Zentriwinkel): Ein Winkel, dessen Scheitel im Kreismittelpunkt M liegt.
🔑 Satz vom Mittelpunktswinkel: Der Mittelpunktswinkel ist immer doppelt so gross wie der Umfangswinkel über dem gleichen Kreisbogen.
🔺 Gleichschenklige Dreiecke: Zwei Radien desselben Kreises sind immer gleich lang — das erzeugt gleiche Basiswinkel, die man mit der Winkelsumme im Dreieck weiterverwenden kann.`,
        },
        {
          title: 'Lösung',
          content: `Der gegebene Winkel von 32° ist ein Umfangswinkel am Rand des Kreises.
Mit dem Satz vom Mittelpunktswinkel, gleichschenkligen Radien-Dreiecken und der Winkelsumme im Dreieck lässt sich daraus α bestimmen.

✅ Laut offizieller Schullösung: α = 96°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Umfangswinkel erkennen (Scheitel liegt auf dem Kreisbogen).
2️⃣  Radien einzeichnen — sie sind alle gleich lang, das erzeugt gleichschenklige Dreiecke.
3️⃣  Basiswinkel gleichschenkliger Dreiecke + Winkelsumme im Dreieck kombinieren.
4️⃣  Bei zwei verschachtelten Kreisen: für jeden Kreis einzeln Radien/Basiswinkel bestimmen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Umfangs-/Mittelpunktswinkel und gleichschenkligen Radien-Dreiecken.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein Umfangswinkel beträgt 20°. Wie gross ist der Mittelpunktswinkel über dem gleichen Bogen?', answer: '40', tip: 'Mittelpunktswinkel = 2 × Umfangswinkel.' },
      { level: 'einfach', q: 'In einem gleichschenkligen Dreieck sind beide Basiswinkel 40°. Wie gross ist der Winkel an der Spitze?', answer: '100', tip: 'Winkelsumme im Dreieck = 180°, minus die zwei gleichen Basiswinkel.' },
      { level: 'einfach', q: 'Zwei Radien desselben Kreises bilden die Schenkel eines Dreiecks. Wie nennt man ein solches Dreieck?', answer: 'gleichschenklig', tip: 'Alle Radien eines Kreises sind gleich lang.' },

      { level: 'mittel', q: 'Ein Umfangswinkel beträgt 35°. Wie gross ist der Mittelpunktswinkel über dem gleichen Bogen?', answer: '70', tip: 'Mittelpunktswinkel = 2 × Umfangswinkel.' },
      { level: 'mittel', q: 'In einem gleichschenkligen Dreieck mit Radien als Schenkel ist der Winkel an der Spitze (im Kreismittelpunkt) 70°. Wie gross ist je ein Basiswinkel?', answer: '55', tip: '(180° − Spitzenwinkel) ÷ 2.' },
      { level: 'mittel', q: 'Der Aussenwinkel eines Dreiecks beträgt 100°, ein anliegender Innenwinkel misst 40°. Wie gross ist der andere, nicht anliegende Innenwinkel?', answer: '60', tip: 'Aussenwinkel = Summe der beiden nicht anliegenden Innenwinkel.' },

      { level: 'schwer', q: 'In einem Kreis ist der Umfangswinkel über einem Bogen 32°. Zwei Radien zu den Endpunkten dieses Bogens bilden ein gleichschenkliges Dreieck mit dem Mittelpunktswinkel als Spitze. Wie gross ist je ein Basiswinkel dieses Dreiecks?', answer: '26', tip: '(180° − Mittelpunktswinkel) ÷ 2, wobei der Mittelpunktswinkel = 2 × 32° ist.' },
      { level: 'schwer', q: 'Zwei Kreise haben einen gemeinsamen Punkt P auf der gleichen Grundlinie. Im kleineren Kreis ist ein Umfangswinkel bei P gleich 27°. Wie gross ist der zugehörige Mittelpunktswinkel im kleineren Kreis?', answer: '54', tip: 'Mittelpunktswinkel = 2 × Umfangswinkel — für jeden Kreis separat betrachten.' },

      { level: 'kanti', q: 'Wie im Original: Ein Umfangswinkel von 32° gehört zu einem Kreis mit einem zweiten, kleineren Kreis auf derselben Grundlinie. Nenne die zwei Regeln, die zur Lösung nötig sind.', answer: 'Mittelpunktswinkelsatz und Winkelsumme im Dreieck', tip: 'Zentriwinkelsatz (2×Umfangswinkel) kombiniert mit gleichschenkligen Radien-Dreiecken.' },
      { level: 'kanti', q: 'Das offiziell bestätigte Ergebnis für Aufgabe 7a (2016) ist α = 96°. Um das Wievielfache des gegebenen 32°-Winkels ist das?', answer: '3', tip: '96 ÷ 32 = 3 — bedingt durch die Kombination zweier Regeln (Verdoppelung + gleichschenkliges Dreieck).' },
    ],
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
      { label: 'α = 42°, β = 111°', correct: true },
      { label: 'α = 27°, β = 99°', correct: false },
      { label: 'α = 54°, β = 27°', correct: false },
    ],
    solution: {
      intro: 'Auch diese Figur besteht aus zwei verschachtelten Halbkreisen (wie in Aufgabe 7a). Der exakte Rechenweg mit den nötigen Hilfslinien lässt sich nur anhand der Original-Skizze sauber nachvollziehen — deshalb hier die Kernregeln und das offiziell bestätigte Ergebnis.',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔵 Umfangswinkel über dem gleichen Bogen sind IMMER gleich gross (Peripheriewinkelsatz).
🔑 Satz vom Mittelpunktswinkel: Der Mittelpunktswinkel ist doppelt so gross wie der Umfangswinkel über dem gleichen Bogen (hier als "2α" markiert).
📐 Winkelsumme im Dreieck = 180°.`,
        },
        {
          title: 'Lösung',
          content: `Gegeben ist ein Umfangswinkel von 27° sowie ein als "2α" markierter Mittelpunktswinkel im kleineren der beiden Halbkreise.
Mit dem Satz vom Mittelpunktswinkel, gleichschenkligen Radien-Dreiecken und der Winkelsumme im Dreieck lassen sich daraus α und β bestimmen.

✅ Laut offizieller Schullösung: α = 42°, β = 111°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit der exakten Figur zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106617/AP16_M_GMS3_Tei_1_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Umfangswinkel erkennen (Scheitel liegt auf dem Kreisbogen).
2️⃣  Radien einzeichnen — sie sind alle gleich lang, das erzeugt gleichschenklige Dreiecke.
3️⃣  Basiswinkel gleichschenkliger Dreiecke + Winkelsumme im Dreieck kombinieren.
4️⃣  Bei zwei verschachtelten Kreisen: für jeden Kreis einzeln Radien/Basiswinkel bestimmen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Umfangs-/Mittelpunktswinkel und gleichschenkligen Radien-Dreiecken.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein Umfangswinkel beträgt 27°. Wie gross ist der Mittelpunktswinkel über dem gleichen Bogen?', answer: '54', tip: 'Mittelpunktswinkel = 2 × Umfangswinkel.' },
      { level: 'einfach', q: 'Ein Dreieck hat die Innenwinkel 27° und 42°. Wie gross ist der dritte Winkel?', answer: '111', tip: 'Winkelsumme im Dreieck = 180°.' },
      { level: 'einfach', q: 'In welchem Winkel treffen sich Radius und Umfangswinkel-Schenkel — wie nennt man ein Dreieck aus zwei Radien und einer Sehne?', answer: 'gleichschenklig', tip: 'Alle Radien eines Kreises sind gleich lang.' },

      { level: 'mittel', q: 'Ein Umfangswinkel beträgt 21°. Wie gross ist der zugehörige Mittelpunktswinkel?', answer: '42', tip: 'Mittelpunktswinkel = 2 × Umfangswinkel.' },
      { level: 'mittel', q: 'Ein Dreieck hat die Innenwinkel 27° und 54°. Wie gross ist der dritte Winkel?', answer: '99', tip: 'Winkelsumme im Dreieck = 180°.' },
      { level: 'mittel', q: 'Ein gleichschenkliges Dreieck hat einen Spitzenwinkel von 84°. Wie gross ist je ein Basiswinkel?', answer: '48', tip: '(180° − Spitzenwinkel) ÷ 2.' },

      { level: 'schwer', q: 'Ein Mittelpunktswinkel beträgt 84°. Wie gross ist der zugehörige Umfangswinkel über dem gleichen Bogen?', answer: '42', tip: 'Umfangswinkel = Mittelpunktswinkel ÷ 2.' },
      { level: 'schwer', q: 'In einem Dreieck sind zwei Winkel 27° und 2×21°. Wie gross ist der dritte Winkel?', answer: '111', tip: 'Erst 2×21° ausrechnen, dann die Winkelsumme im Dreieck (180°) verwenden.' },

      { level: 'kanti', q: 'Wie im Original: Ein Umfangswinkel beträgt 27°, ein Mittelpunktswinkel im kleineren Kreis ist mit "2α" markiert und α = 42°. Wie gross ist 2α?', answer: '84', tip: '2 × 42° = 84°.' },
      { level: 'kanti', q: 'Das offiziell bestätigte Ergebnis für Aufgabe 7b (2016) ist α = 42° und β = 111°. Was ergibt α + β?', answer: '153', tip: '42 + 111 = 153.' },
    ],
  },
];


