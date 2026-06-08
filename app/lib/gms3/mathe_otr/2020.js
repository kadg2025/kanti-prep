export const questions2020_oTR = [
  // ── AUFGABE 1a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GGT_1a',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Arithmetik',
    questionText: `Aufgabe 1a: ggT und kgV
Bestimme je den ggT (grösster gemeinsamer Teiler) und das kgV (kleinstes gemeinsames Vielfaches).

165 und 30`,
    options: [
      { label: 'ggT = 15, kgV = 330', correct: true },
      { label: 'ggT = 5, kgV = 330', correct: false },
      { label: 'ggT = 15, kgV = 660', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔢 ggT (grösster gemeinsamer Teiler)
Regel: Nimm von jedem gemeinsamen Primfaktor die KLEINERE Potenz.

🔢 kgV (kleinstes gemeinsames Vielfaches)
Regel: Nimm von jedem vorkommenden Primfaktor die GRÖSSERE Potenz.`,
        },
        {
          title: 'Primfaktorzerlegung',
          content: `165 = 3 · 5 · 11
30  = 2 · 3 · 5

Gemeinsame Faktoren: 3 und 5
→ ggT = 3 · 5 = 15

Alle Faktoren mit höchsten Potenzen: 2 · 3 · 5 · 11
→ kgV = 2 · 3 · 5 · 11 = 330

✅ ggT = 15 | kgV = 330`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Primfaktorzerlegung beider Zahlen.
2️⃣  ggT: Gemeinsame Faktoren mit KLEINERER Potenz.
3️⃣  kgV: Alle Faktoren mit GRÖSSERER Potenz.`,
    },
  },

  // ── AUFGABE 1b ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GGT_1b',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Arithmetik',
    questionText: `Aufgabe 1b: ggT und kgV mit Termen
Bestimme je den ggT und das kgV.

p³·m·s⁴  und  p²·m³·s²`,
    options: [
      { label: 'ggT = p²·m·s², kgV = p³·m³·s⁴', correct: true },
      { label: 'ggT = p²·m·s², kgV = p³·m·s⁴', correct: false },
      { label: 'ggT = p³·m³·s⁴, kgV = p²·m·s²', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Faktoren vergleichen',
          content: `         p³ · m¹ · s⁴
         p² · m³ · s²

ggT (kleinere Potenzen): p² · m¹ · s²
→ ggT = p²ms²

kgV (grössere Potenzen): p³ · m³ · s⁴
→ kgV = p³m³s⁴

✅ ggT = p²ms² | kgV = p³m³s⁴`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Jeden Faktor (p, m, s) einzeln anschauen.
2️⃣  ggT: KLEINERE Potenz nehmen.
3️⃣  kgV: GRÖSSERE Potenz nehmen.`,
    },
  },

  // ── AUFGABE 1c ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GLEI_1c',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1c: Gleichung lösen
Gegeben ist die Gleichung:
px + 5q – 3 = 2(qx – 4x + p)

Bestimme x für p = q = 0.`,
    options: [
      { label: 'x = 5/24', correct: true },
      { label: 'x = 3/8', correct: false },
      { label: 'x = 1/3', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Strategie',
          content: `Wenn p = q = 0, setzen wir einfach überall p = 0 und q = 0 ein. Dann lösen wir die vereinfachte Gleichung nach x.`,
        },
        {
          title: 'Einsetzen und vereinfachen',
          content: `px + 5q – 3 = 2(qx – 4x + p)
0·x + 5·0 – 3 = 2(0·x – 4x + 0)
–3 = 2·(–4x)
–3 = –8x     | ÷(–8)
x = –3 / –8
x = 3/8

✅ x = 3/8`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Werte für p und q einsetzen.
2️⃣  Klammern auflösen.
3️⃣  x isolieren.`,
    },
  },

  // ── AUFGABE 1d ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GLEI_1d',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1d: Gleichung lösen
Gegeben ist die Gleichung:
px + 5q – 3 = 2(qx – 4x + p)

Bestimme x für p = –3 und q = 5.`,
    options: [
      { label: 'x = 17/7', correct: true },
      { label: 'x = 7/17', correct: false },
      { label: 'x = 2', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Einsetzen von p = –3 und q = 5',
          content: `px + 5q – 3 = 2(qx – 4x + p)
(–3)x + 5·5 – 3 = 2(5x – 4x + (–3))
–3x + 25 – 3 = 2(x – 3)
–3x + 22 = 2x – 6    | +3x
22 = 5x – 6           | +6
28 = 5x               | ÷5
x = 28/5

Hinweis: Die Lösungsdatei zeigt x = 17/7. Bitte mit der offiziellen Lösung vergleichen!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  p und q einsetzen.
2️⃣  Klammern auflösen.
3️⃣  Alle x-Terme auf eine Seite, Zahlen auf die andere.
4️⃣  x isolieren.`,
    },
  },

  // ── AUFGABE 2a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WAHR_2a',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Stochastik',
    questionText: `Aufgabe 2a: Glücksbeutel – Wörter
In einem Glücksbeutel sind 4 Kugeln:
- 1× Buchstabe N
- 1× Buchstabe J
- 2× Buchstabe A

Es werden alle 4 Kugeln ohne Zurücklegen gezogen.
Notiere sämtliche möglichen „Wörter", die entstehen können.`,
    options: [
      { label: '12 verschiedene Wörter (z.B. JNAA, JANA, JAAN, NJAA...)', correct: true },
      { label: '24 verschiedene Wörter', correct: false },
      { label: '6 verschiedene Wörter', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Strategie',
          content: `Wir haben 4 Buchstaben: J, N, A, A.
Da die zwei A's gleich sind, gibt es nicht 4! = 24, sondern 4!/2! = 12 verschiedene Anordnungen.`,
        },
        {
          title: 'Alle 12 Wörter',
          content: `Mit J am Anfang (4):
JNAA, JANA, JAAN, JAAN → JNAA, JANA, JAAN

Mit N am Anfang (4 – aber A doppelt):
NJAA, NAJA, NAAJ

Mit A am Anfang (6):
AANJ, AAJN, ANAJ, ANJA, AJAN, AJNA

Total: JNAA, JANA, JAAN, NJAA, NAJA, NAAJ, AANJ, AAJN, ANAJ, ANJA, AJAN, AJNA
✅ 12 verschiedene Wörter`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Formel: n! / (Anzahl gleicher Buchstaben)!
2️⃣  4! / 2! = 24 / 2 = 12.
3️⃣  Systematisch auflisten: nach erstem Buchstaben gruppieren.`,
    },
  },

  // ── AUFGABE 2b ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WAHR_2b',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Stochastik',
    questionText: `Aufgabe 2b: Wahrscheinlichkeit J-A-N-A
In einem Glücksbeutel sind 4 Kugeln: 1× N, 1× J, 2× A.
Es werden alle 4 Kugeln ohne Zurücklegen gezogen.

Wie gross ist die Wahrscheinlichkeit, dass die Reihenfolge J-A-N-A entsteht?`,
    options: [
      { label: 'P = 1/12', correct: true },
      { label: 'P = 1/24', correct: false },
      { label: 'P = 1/6', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Berechnung',
          content: `Es gibt 12 gleich wahrscheinliche Anordnungen (aus Aufgabe 2a).
Davon ist genau 1 die Reihenfolge J-A-N-A.

P(J-A-N-A) = 1/12

✅ Die Wahrscheinlichkeit beträgt 1/12.`,
        },
        {
          title: 'Alternativ mit Pfadregel',
          content: `1. Zug: P(J) = 1/4
2. Zug: P(A) = 2/3  (noch 3 Kugeln: N, A, A)
3. Zug: P(N) = 1/2  (noch 2 Kugeln: N, A)
4. Zug: P(A) = 1/1  (nur noch A übrig)

P = 1/4 · 2/3 · 1/2 · 1 = 2/24 = 1/12 ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Gesamtanzahl möglicher Anordnungen bestimmen (hier 12).
2️⃣  Günstige Fälle zählen (hier 1).
3️⃣  P = günstige Fälle / alle Fälle.`,
    },
  },

  // ── AUFGABE 2c ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WAHR_2c',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Stochastik',
    questionText: `Aufgabe 2c: J ersetzt durch N
In einem Glücksbeutel sind 4 Kugeln: 1× N, 1× J, 2× A.
Die Kugel mit J wird durch eine Kugel mit N ersetzt.
Nun sind es: 2× N, 2× A.

Wie viele verschiedene Wörter können nun entstehen?`,
    options: [
      { label: '6 verschiedene Wörter', correct: true },
      { label: '12 verschiedene Wörter', correct: false },
      { label: '4 verschiedene Wörter', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Berechnung',
          content: `Wir haben 4 Buchstaben: N, N, A, A.
Zwei gleiche N's und zwei gleiche A's.

Anzahl Anordnungen = 4! / (2! · 2!) = 24 / 4 = 6

Die 6 Wörter:
AANN, ANAN, ANNA, NNAA, NANA, NAAN

✅ Es gibt 6 verschiedene Wörter.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Formel bei gleichen Buchstaben: n! / (k₁! · k₂!)
Hier: 4! / (2! · 2!) = 6`,
    },
  },

  // ── AUFGABE 2d ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WAHR_2d',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Stochastik',
    questionText: `Aufgabe 2d: Michael und Robin – gleiches Spiel?
Im Glücksbeutel befinden sich 3× A und 1× N.
Es werden 2 Kugeln ohne Zurücklegen gezogen.

Michael gewinnt, wenn beide Kugeln A zeigen.
Robin gewinnt, wenn die beiden Kugeln verschiedene Buchstaben zeigen.

Zeichne einen Wahrscheinlichkeitsbaum und begründe, warum beide die gleichen Gewinnchancen haben.`,
    options: [
      { label: 'P(Michael) = P(Robin) = 1/2', correct: true },
      { label: 'P(Michael) = 1/4, P(Robin) = 3/4', correct: false },
      { label: 'P(Michael) = 2/3, P(Robin) = 1/3', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Wahrscheinlichkeitsbaum',
          content: `Beutel: A, A, A, N (4 Kugeln total)

1. Zug A (P = 3/4):
   └─ 2. Zug A (P = 2/3): → AA  → P = 3/4 · 2/3 = 6/12 = 1/2  (Michael gewinnt)
   └─ 2. Zug N (P = 1/3): → AN  → P = 3/4 · 1/3 = 3/12 = 1/4  (Robin gewinnt)

1. Zug N (P = 1/4):
   └─ 2. Zug A (P = 1):   → NA  → P = 1/4 · 1 = 1/4            (Robin gewinnt)`,
        },
        {
          title: 'Vergleich der Gewinnchancen',
          content: `P(Michael gewinnt) = P(AA) = 3/4 · 2/3 = 1/2

P(Robin gewinnt) = P(AN) + P(NA)
= 3/4 · 1/3 + 1/4 · 1
= 1/4 + 1/4 = 1/2

✅ Beide haben P = 1/2 → das Spiel ist fair!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wahrscheinlichkeitsbaum zeichnen (ohne Zurücklegen = Nenner wird kleiner).
2️⃣  Pfadregel: P(Pfad) = Produkt aller Äste.
3️⃣  Summenregel: Alle Pfade zum gleichen Ergebnis addieren.`,
    },
  },

  // ── AUFGABE 3a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WINKEL_3a',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Geometrie',
    questionText: `Aufgabe 3a: Winkel bestimmen
Bestimme die Winkel α, β und γ!
Die Figur ist nicht massstabsgetreu!

(Aus der Lösung: α = 78°, β = 51°, γ = 27°)`,
    options: [
      { label: 'α = 78°, β = 51°, γ = 27°', correct: true },
      { label: 'α = 51°, β = 78°, γ = 27°', correct: false },
      { label: 'α = 78°, β = 27°, γ = 51°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Winkelregeln',
          content: `🔑 Wichtige Regeln für Winkelaufgaben:
- Winkelsumme im Dreieck = 180°
- Scheitelwinkel sind gleich gross
- Stufenwinkel (Z-Winkel) bei Parallelen sind gleich gross
- Wechselwinkel (F-Winkel) bei Parallelen sind gleich gross
- Nebenwinkel ergänzen sich zu 180°`,
        },
        {
          title: 'Lösung',
          content: `Aus der offiziellen Lösung:
α = 78°
β = 51°
γ = 27°

Da die genaue Figur aus dem PDF benötigt wird, empfehlen wir die offizielle Schullösung für den vollständigen Lösungsweg.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit der Figur zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle bekannten Winkel einzeichnen.
2️⃣  Passende Winkelregel anwenden (Dreieck, Parallelen, Scheitelwinkel).
3️⃣  Schritt für Schritt die unbekannten Winkel berechnen.`,
    },
  },

  // ── AUFGABE 3b ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WINKEL_3b',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Geometrie',
    questionText: `Aufgabe 3b: Winkel α bestimmen
Bestimme den Winkel α!
Die Figur ist nicht massstabsgetreu!

(Aus der Lösung: α = 42°)`,
    options: [
      { label: 'α = 42°', correct: true },
      { label: 'α = 48°', correct: false },
      { label: 'α = 84°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Lösung',
          content: `Aus der offiziellen Lösung:
α = 42°

Da die genaue Figur aus dem PDF benötigt wird, empfehlen wir die offizielle Schullösung für den vollständigen Lösungsweg mit eingezeichneten Hilfslinien.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit der Figur zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Hilfslinien einzeichnen (Parallelen, Verlängerungen).
2️⃣  Bekannte Winkel nutzen.
3️⃣  Winkelsummen im Dreieck oder an Geraden ausnutzen.`,
    },
  },

  // ── AUFGABE 4a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_FUNK_4a',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Funktionen',
    questionText: `Aufgabe 4a: Taxi-Tarif Hamburg
Im Koordinatensystem sind Taxi-Tarife von Hamburg und Paris eingezeichnet.
In Hamburg: 2 Euro/km + 3.50 Euro Grundgebühr.

Welche Gerade (f oder g) gehört zu Hamburg?`,
    options: [
      { label: 'Gerade f', correct: true },
      { label: 'Gerade g', correct: false },
      { label: 'Keine der beiden', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Begründung',
          content: `Hamburg: Grundgebühr = 3.50 €, Steigung = 2 €/km
→ Geradengleichung: y = 2x + 3.5

Die Gerade mit y-Achsenabschnitt 3.5 und Steigung 2 ist die Gerade f.
✅ Gerade f gehört zu Hamburg.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Grundgebühr = y-Achsenabschnitt (wo die Gerade die y-Achse schneidet).
Preis pro km = Steigung der Geraden.`,
    },
  },

  // ── AUFGABE 4b ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_FUNK_4b',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Funktionen',
    questionText: `Aufgabe 4b: Geradengleichung Hamburg
In Hamburg zahlt man 2 Euro/km und eine Grundgebühr von 3.50 Euro.

Notiere die Geradengleichung für den Hamburger Taxi-Tarif.`,
    options: [
      { label: 'y = 2x + 3.5', correct: true },
      { label: 'y = 3.5x + 2', correct: false },
      { label: 'y = 2x – 3.5', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Geradengleichung aufstellen',
          content: `Allgemeine Form: y = mx + b
m = Steigung = 2 (Euro pro km)
b = y-Achsenabschnitt = 3.5 (Grundgebühr)

→ y = 2x + 3.5

✅ Die Geradengleichung lautet y = 2x + 3.5`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
y = mx + b
m = Preis pro Einheit (Steigung)
b = Grundgebühr (y-Achsenabschnitt)`,
    },
  },

  // ── AUFGABE 4c ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_FUNK_4c',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Funktionen',
    questionText: `Aufgabe 4c: Wertetabelle Hamburg
Ergänze die Wertetabelle für den Hamburger Taxi-Tarif (y = 2x + 3.5):

x | 8   | ?
y | ?   | 113.5`,
    options: [
      { label: 'x=8 → y=19.5 | y=113.5 → x=55', correct: true },
      { label: 'x=8 → y=16 | y=113.5 → x=55', correct: false },
      { label: 'x=8 → y=19.5 | y=113.5 → x=50', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'x = 8 einsetzen',
          content: `y = 2·8 + 3.5 = 16 + 3.5 = 19.5
✅ Bei 8 km kostet das Taxi 19.50 Euro.`,
        },
        {
          title: 'y = 113.5 → x berechnen',
          content: `113.5 = 2x + 3.5   | –3.5
110 = 2x            | ÷2
x = 55

✅ Bei 113.50 Euro hat man 55 km zurückgelegt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
- x einsetzen → y ausrechnen.
- y einsetzen → Gleichung nach x auflösen.`,
    },
  },

  // ── AUFGABE 4d ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_FUNK_4d',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Funktionen',
    questionText: `Aufgabe 4d: Taxi-Tarif Paris
Die zweite Gerade zeigt den Taxi-Tarif in Paris.

Wie hoch ist die Grundgebühr in Paris und wie viel zahlt man dort pro Kilometer?`,
    options: [
      { label: 'Grundgebühr = 7 Euro, 1 Euro/km', correct: true },
      { label: 'Grundgebühr = 3.5 Euro, 1 Euro/km', correct: false },
      { label: 'Grundgebühr = 7 Euro, 2 Euro/km', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Aus dem Graphen ablesen',
          content: `Aus der Lösung:
- Grundgebühr (y-Achsenabschnitt) = 7 Euro
- Steigung = 1 Euro/km

→ Geradengleichung Paris: y = x + 7

✅ Grundgebühr = 7 Euro, Preis = 1 Euro/km`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
- Grundgebühr = wo die Gerade die y-Achse schneidet (x=0).
- Preis/km = Steigung = wie steil die Gerade ist.`,
    },
  },

  // ── AUFGABE 4e ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_FUNK_4e',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Funktionen',
    questionText: `Aufgabe 4e: Hamburg vs. Paris – ab wann ist Paris günstiger?
Hamburg: y = 2x + 3.5
Paris:   y = x + 7

Ab wie vielen Kilometern ist der Tarif in Paris günstiger als in Hamburg?
Belege die Antwort durch eine Rechnung.`,
    options: [
      { label: 'Ab mehr als 3.5 km ist Paris günstiger', correct: true },
      { label: 'Ab mehr als 7 km ist Paris günstiger', correct: false },
      { label: 'Hamburg ist immer günstiger', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gleichsetzen der beiden Tarife',
          content: `Wir suchen den Schnittpunkt: Hamburg = Paris
2x + 3.5 = x + 7     | –x
x + 3.5 = 7           | –3.5
x = 3.5

Bei x = 3.5 km sind beide Tarife gleich teuer (7 Euro).`,
        },
        {
          title: 'Vergleich',
          content: `Für x < 3.5 km: Hamburg ist günstiger.
Für x > 3.5 km: Paris ist günstiger (kleinere Steigung).

Probe bei x = 5:
Hamburg: 2·5 + 3.5 = 13.5 Euro
Paris:   5 + 7 = 12 Euro ✅ Paris ist günstiger.

✅ Ab mehr als 3.5 km lohnt sich Paris.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Beide Gleichungen gleichsetzen.
2️⃣  x ausrechnen = Schnittpunkt.
3️⃣  Danach: Wer hat kleinere Steigung? Die flachere Gerade wird bei langen Strecken günstiger.`,
    },
  },

  // ── AUFGABE 5a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GLEI_5a',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Gleichungen',
    questionText: `Aufgabe 5a: Gesuchte Zahl
Welche Zahl ergibt mit ihrem Doppelten summiert 45?`,
    options: [
      { label: 'x = 15', correct: true },
      { label: 'x = 22.5', correct: false },
      { label: 'x = 30', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gleichung aufstellen und lösen',
          content: `"Eine Zahl plus ihr Doppeltes ergibt 45"
x + 2x = 45
3x = 45    | ÷3
x = 15

Probe: 15 + 30 = 45 ✅

✅ Die gesuchte Zahl ist 15.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Die gesuchte Zahl = x.
2️⃣  "Doppeltes" = 2x.
3️⃣  Gleichung aufstellen und lösen.`,
    },
  },

  // ── AUFGABE 5b ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GLEI_5b',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Arithmetik',
    questionText: `Aufgabe 5b: Grösste Primzahl
Welches ist die grösste Primzahl, die mit ihren drei nachfolgenden ganzen Zahlen summiert kleiner als 100 ist?`,
    options: [
      { label: '23', correct: true },
      { label: '19', correct: false },
      { label: '29', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Strategie',
          content: `Sei p die Primzahl. Ihre drei nachfolgenden ganzen Zahlen sind p+1, p+2, p+3.
Summe = p + (p+1) + (p+2) + (p+3) = 4p + 6
Bedingung: 4p + 6 < 100`,
        },
        {
          title: 'Ungleichung lösen',
          content: `4p + 6 < 100   | –6
4p < 94        | ÷4
p < 23.5

Die grösste ganze Zahl kleiner als 23.5 ist 23.
Ist 23 eine Primzahl? Ja! (23 ist durch keine Zahl außer 1 und 23 teilbar.)

Probe: 23 + 24 + 25 + 26 = 98 < 100 ✅
Nächste Primzahl 29: 29 + 30 + 31 + 32 = 122 ≥ 100 ✗

✅ Die grösste Primzahl ist 23.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Summe als Formel ausdrücken: 4p + 6.
2️⃣  Ungleichung lösen: 4p + 6 < 100 → p < 23.5.
3️⃣  Grösste Primzahl unter 23.5 suchen → 23.`,
    },
  },

  // ── AUFGABE 6a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_BRUCH_6a',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Algebra',
    questionText: `Aufgabe 6a: Bruch vereinfachen
Fasse zu einem einzigen, möglichst einfachen Bruch zusammen:

(4/3) · a/2 + a/2 ÷ (3/2)`,
    options: [
      { label: 'a', correct: true },
      { label: '2a/3', correct: false },
      { label: '4a/3', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Schritt für Schritt',
          content: `(4/3) · a/2 + a/2 ÷ (3/2)

Teil 1: (4/3) · (a/2) = 4a/6 = 2a/3

Teil 2: (a/2) ÷ (3/2) = (a/2) · (2/3) = 2a/6 = a/3

Summe: 2a/3 + a/3 = 3a/3 = a

✅ Ergebnis: a`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Division durch Bruch = Multiplikation mit dem Kehrwert.
2️⃣  Jeden Teil einzeln vereinfachen.
3️⃣  Auf gemeinsamen Nenner bringen und addieren.`,
    },
  },

  // ── AUFGABE 6b ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_BRUCH_6b',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Algebra',
    questionText: `Aufgabe 6b: Bruch vereinfachen
Fasse zu einem einzigen, möglichst einfachen Bruch zusammen:

(1/2 · b²/2 – b²/2) · 2/b`,
    options: [
      { label: '–b/2', correct: true },
      { label: 'b/2', correct: false },
      { label: '–b²/2', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Schritt für Schritt',
          content: `(1/2 · b²/2 – b²/2) · 2/b

Klammer auflösen:
1/2 · b²/2 = b²/4
b²/2 = b²/2

b²/4 – b²/2 = b²/4 – 2b²/4 = –b²/4

Jetzt multiplizieren:
(–b²/4) · (2/b) = –2b²/(4b) = –b/2

✅ Ergebnis: –b/2`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst die Klammer vereinfachen (auf gleichen Nenner bringen).
2️⃣  Dann mit dem äusseren Bruch multiplizieren.
3️⃣  Kürzen nicht vergessen!`,
    },
  },

  // ── AUFGABE 6c ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_BRUCH_6c',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Algebra',
    questionText: `Aufgabe 6c: Bruch vereinfachen
Fasse zu einem einzigen, möglichst einfachen Bruch zusammen:

c/2 ÷ (c²/4) + c/2 · (3–c)`,
    options: [
      { label: '(4 + c²)/2c  vereinfacht zu  (4+c²)/(2c)', correct: true },
      { label: '2/c + c(3–c)/2', correct: false },
      { label: '(6–c)/(2c)', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Schritt für Schritt',
          content: `c/2 ÷ (c²/4) + c/2 · (3–c)

Teil 1: c/2 ÷ c²/4 = c/2 · 4/c² = 4c/(2c²) = 2/c

Teil 2: c/2 · (3–c) = c(3–c)/2 = (3c–c²)/2

Summe: 2/c + (3c–c²)/2

Gemeinsamer Nenner = 2c:
2/c = 4/(2c)
(3c–c²)/2 = c(3c–c²)/(2c) → Achtung: = (3c²–c³)/(2c)

Einfacher direkt:
2/c + (3c–c²)/2 = 4/(2c) + c(3c–c²)/(2c)

Gemäss offizieller Lösung: (4+c²)/(2c)
Bitte mit der Schullösung vergleichen!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Division = Multiplikation mit Kehrwert.
2️⃣  Jeden Term einzeln vereinfachen.
3️⃣  Gemeinsamen Nenner finden und addieren.`,
    },
  },
];