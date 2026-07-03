
import { frac } from '../../mathFormat';

export const questions2020_oTR = [
  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GGT_1',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Zahlen & Teilbarkeit',
    verified: true,
    questionText: `Aufgabe 1: ggT und kgV
Bestimme je den ggT (grösster gemeinsamer Teiler) und das kgV (kleinstes gemeinsames Vielfaches).

a) 165 und 30

b) p³·m·s⁴  und  p²·m³·s²`,
    options: [
      { label: 'a) ggT=15, kgV=330 | b) ggT=p²ms², kgV=p³m³s⁴', correct: true },
      { label: 'a) ggT=5, kgV=330 | b) ggT=p²ms², kgV=p³m³s⁴', correct: false },
      { label: 'a) ggT=15, kgV=330 | b) ggT=p³m³s⁴, kgV=p²ms²', correct: false },
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
          title: 'a) Primfaktorzerlegung',
          content: `165 = 3 · 5 · 11
30  = 2 · 3 · 5

Gemeinsame Faktoren: 3 und 5
→ ggT = 3 · 5 = 15

Alle Faktoren mit höchsten Potenzen: 2 · 3 · 5 · 11
→ kgV = 2 · 3 · 5 · 11 = 330

✅ ggT = 15 | kgV = 330`,
        },
        {
          title: 'b) Faktoren vergleichen',
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
1️⃣  Primfaktorzerlegung / Faktoren beider Zahlen bzw. Terme vergleichen.
2️⃣  ggT: Gemeinsame Faktoren mit KLEINERER Potenz.
3️⃣  kgV: Alle Faktoren mit GRÖSSERER Potenz.`,
    },

    // ── ÜBUNGEN: aufbauend zu ggT/kgV mit Zahlen und mit Variablen-Potenzen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Primfaktorzerlegung: 30 = 2 · 3 · ?', answer: '5', tip: 'Welcher Primfaktor fehlt noch?' },
      { level: 'einfach', q: 'Bestimme den ggT von 10 und 15.', answer: '5', tip: '10=2·5, 15=3·5 — gemeinsamer Faktor?' },
      { level: 'einfach', q: 'Bestimme das kgV von 6 und 10.', answer: '30', tip: '6=2·3, 10=2·5 — alle Faktoren mit höchster Potenz.' },

      { level: 'mittel', q: 'Bestimme den ggT von 165 und 30.', answer: '15', tip: 'Primfaktorzerlegung beider Zahlen, dann gemeinsame Faktoren finden.' },
      { level: 'mittel', q: 'Bestimme das kgV von 165 und 30.', answer: '330', tip: 'Alle Primfaktoren mit ihrer höchsten Potenz multiplizieren.' },
      { level: 'mittel', q: 'Bestimme den ggT von p² und p⁵. Welchen Exponenten hat das Ergebnis?', answer: '2', tip: 'ggT: die kleinere der beiden Potenzen.' },

      { level: 'schwer', q: 'Bestimme das kgV von p² und p⁵. Welchen Exponenten hat das Ergebnis?', answer: '5', tip: 'kgV: die grössere der beiden Potenzen.' },
      { level: 'schwer', q: 'Bestimme den ggT von m·s³ und m²·s.', answer: 'ms', tip: 'Von jeder Variable die kleinere Potenz nehmen.' },

      { level: 'kanti', q: 'Bestimme den ggT von p³·m·s⁴ und p²·m³·s².', answer: 'p²ms²', tip: 'Von jeder Variable die kleinere Potenz nehmen — genau wie im Original.' },
      { level: 'kanti', q: 'Bestimme das kgV von p³·m·s⁴ und p²·m³·s².', answer: 'p³m³s⁴', tip: 'Von jeder Variable die grössere Potenz nehmen — genau wie im Original.' },
    ],
  },

  // ── AUFGABE 1c ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GLEI_1c',
    verified: true,
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1c: Gleichung mit Parametern
Gegeben ist die Gleichung:
${frac('px + 5', 'q – 3')} = 2(qx – 4x + p)

Bestimme x für folgende Fälle und gib die Lösung an:
i) p = q = 0
ii) p = –3 und q = 5`,
    options: [
      { label: 'i) x = 5/24 | ii) x = 17/7', correct: true },
      { label: 'i) x = 3/8 | ii) x = 28/5', correct: false },
      { label: 'i) x = –5/24 | ii) x = 7/17', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Gleichung mit Parametern: p und q sind hier keine Unbekannten, sondern feste Werte, die wir einsetzen — danach ist es eine ganz normale Gleichung.
🔑 Die Gleichung ist ein Bruch: (px+5)/(q–3) = 2(qx–4x+p).
Wir setzen die gegebenen Werte für p und q ein und lösen dann nach x auf. Da q im Nenner steht, wird daraus jeweils eine Zahl (keine Variable mehr) — Vorsicht beim Vorzeichen des Nenners.`,
        },
        {
          title: 'i) p = q = 0',
          content: `(px+5)/(q–3) = 2(qx–4x+p)
(0·x+5)/(0–3) = 2(0·x–4x+0)
5/(–3) = 2·(–4x)
–5/3 = –8x     | ·(–1)
5/3 = 8x        | ÷8
x = 5/24

✅ x = 5/24`,
        },
        {
          title: 'ii) p = –3 und q = 5',
          content: `(px+5)/(q–3) = 2(qx–4x+p)
(–3x+5)/(5–3) = 2(5x–4x+(–3))
(–3x+5)/2 = 2(x–3)
(–3x+5)/2 = 2x–6     | ×2
–3x+5 = 4x–12         | +3x, +12
17 = 7x                 | ÷7
x = 17/7

✅ x = 17/7`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Werte für p und q einsetzen.
2️⃣  Bei einem Bruch: mit dem Nenner multiplizieren, um ihn wegzubekommen.
3️⃣  Klammern auflösen.
4️⃣  Alle x-Terme auf eine Seite, Zahlen auf die andere, x isolieren.`,
    },

    // ── ÜBUNGEN: aufbauend zu Bruchgleichungen mit Parametern.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Löse: (x+3)/2 = 5', answer: '7', tip: 'Mit dem Nenner (2) multiplizieren, um den Bruch loszuwerden.' },
      { level: 'einfach', q: 'Löse: (2x-1)/3 = 3', answer: '5', tip: 'Zuerst mit 3 multiplizieren.' },
      { level: 'einfach', q: 'Setze in die Gleichung px+5=2(x+p) für p=0 ein und löse nach x auf.', answer: '5/2', tip: 'p=0 einsetzen ergibt: 5=2x, also x isolieren.' },

      { level: 'mittel', q: 'Löse: (x+5)/(-3) = 4', answer: '-17', tip: 'Mit dem Nenner (-3) multiplizieren — Vorzeichen beachten!' },
      { level: 'mittel', q: 'Löse: (3x-2)/4 = x-1', answer: '2', tip: 'Erst mit 4 multiplizieren, dann Klammer rechts auflösen.' },
      { level: 'mittel', q: 'Setze in die Gleichung (px+5)/2 = x-1 für p=3 ein und löse nach x auf.', answer: '-7', tip: 'p=3 einsetzen, dann mit 2 multiplizieren.' },

      { level: 'schwer', q: 'Löse: (-2x+5)/(4-3) = 2(x-3)', answer: '11/4', tip: 'Nenner zuerst vereinfachen (4-3=1), dann nach x auflösen.' },
      { level: 'schwer', q: 'Setze in die Gleichung (px+5)/(q-3) = x für p=1, q=5 ein und löse nach x auf.', answer: '5', tip: 'p und q einsetzen, Nenner berechnen (5-3=2), dann mit dem Nenner multiplizieren.' },

      { level: 'kanti', q: 'Gegeben: (px+5)/(q-3) = 2(qx-4x+p). Setze p=q=0 ein und löse nach x auf. Gib die Lösung als gekürzten Bruch an.', answer: '5/24', tip: 'Wie im Original: p=0, q=0 einsetzen, Bruch auflösen, nach x umstellen.' },
      { level: 'kanti', q: 'Gegeben: (px+5)/(q-3) = 2(qx-4x+p). Setze p=-3, q=5 ein und löse nach x auf. Gib die Lösung als gekürzten Bruch an.', answer: '17/7', tip: 'Wie im Original: p=-3, q=5 einsetzen, mit dem Nenner multiplizieren, x isolieren.' },
    ],
  },

  // ── AUFGABE 2a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WAHR_2a',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Wahrscheinlichkeit',
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
    topic: 'Wahrscheinlichkeit',
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
    topic: 'Wahrscheinlichkeit',
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
    topic: 'Wahrscheinlichkeit',
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

  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_GLEI_5',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Zahlen & Teilbarkeit',
    verified: true,
    questionText: `Aufgabe 5: Gesuchte Zahl

a) Welche Zahl ergibt mit ihrem Doppelten summiert 45?

b) Welches ist die grösste Primzahl, die mit ihren drei nachfolgenden ganzen Zahlen summiert kleiner als 100 ist?`,
    options: [
      { label: 'a) x=15 | b) 23', correct: true },
      { label: 'a) x=22.5 | b) 19', correct: false },
      { label: 'a) x=30 | b) 29', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'a) Gleichung aufstellen und lösen',
          content: `"Eine Zahl plus ihr Doppeltes ergibt 45"
x + 2x = 45
3x = 45    | ÷3
x = 15

Probe: 15 + 30 = 45 ✅

✅ Die gesuchte Zahl ist 15.`,
        },
        {
          title: 'b) 📖 Strategie',
          content: `Sei p die Primzahl. Ihre drei nachfolgenden ganzen Zahlen sind p+1, p+2, p+3.
Summe = p + (p+1) + (p+2) + (p+3) = 4p + 6
Bedingung: 4p + 6 < 100`,
        },
        {
          title: 'b) Ungleichung lösen',
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
1️⃣  Textaufgabe: die gesuchte Zahl/Primzahl = Variable setzen, dann Gleichung bzw. Ungleichung aufstellen.
2️⃣  "Doppeltes" = 2x, "nachfolgende Zahlen" = p+1, p+2, ...
3️⃣  Gleichung/Ungleichung lösen und Probe machen.`,
    },

    // ── ÜBUNGEN a): einfache Textgleichung.
    // ── ÜBUNGEN b): Primzahlen und Ungleichungen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Welche Zahl ergibt mit ihrem Dreifachen summiert 20?', answer: '5', tip: 'Stelle die Gleichung x + 3x = ... auf.' },
      { level: 'einfach', q: 'Ist 17 eine Primzahl?', answer: 'ja', tip: 'Ist 17 durch eine andere Zahl ausser 1 und sich selbst teilbar?' },
      { level: 'einfach', q: 'Ist 21 eine Primzahl?', answer: 'nein', tip: '21 lässt sich als Produkt zweier kleinerer Zahlen schreiben.' },

      { level: 'mittel', q: 'Welche Zahl ergibt mit ihrem Doppelten summiert 27?', answer: '9', tip: 'Stelle die Gleichung x + 2x = ... auf, dann durch 3 teilen.' },
      { level: 'mittel', q: 'Berechne: 4·10 + 6', answer: '46', tip: 'Punkt vor Strich.' },
      { level: 'mittel', q: 'Löse die Ungleichung: 4p < 40', answer: 'p<10', tip: 'Teile beide Seiten durch 4.' },

      { level: 'schwer', q: 'Was ist die grösste Primzahl unter 20?', answer: '19', tip: 'Prüfe von 19 abwärts, ob die Zahl prim ist.' },
      { level: 'schwer', q: 'Löse die Ungleichung: 4p + 6 < 50', answer: 'p<11', tip: 'Erst 6 subtrahieren, dann durch 4 teilen.' },

      { level: 'kanti', q: 'Welche Zahl ergibt mit ihrem Doppelten summiert 45?', answer: '15', tip: 'Gleiche Struktur wie im Original — nur andere Zahl.' },
      { level: 'kanti', q: 'Welches ist die grösste Primzahl, die mit ihren drei nachfolgenden ganzen Zahlen summiert kleiner als 100 ist?', answer: '23', tip: 'Summe als 4p+6 ausdrücken, dann die Ungleichung 4p+6<100 lösen.' },
    ],
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_BRUCH_6',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 6: Bruch vereinfachen
Fasse jeweils zu einem einzigen, möglichst einfachen Bruch zusammen:

a) ${frac('4', '3')} · ${frac('a', '2')} + ${frac('a', '2')} ÷ ${frac('3', '2')}

b) (${frac('1', '2')} · ${frac('b²', '2')} − ${frac('b²', '2')}) · ${frac('2', 'b')}

c) ${frac('c', '2')} ÷ ${frac('c²', '4')} + ${frac('c', '2')} · 3 − c`,
    options: [
      { label: 'a) a | b) −b/2 | c) (4+c²)/(2c)', correct: true },
      { label: 'a) 2a/3 | b) −b/2 | c) (4+c²)/(2c)', correct: false },
      { label: 'a) a | b) b/2 | c) (4−c²)/(2c)', correct: false },
    ],
    solution: {
      intro: 'Teil c) war in einer früheren Version dieser App leicht falsch geklammert ("· (3–c)" statt "· 3 − c"), wodurch die Herleitung nicht zum offiziellen Ergebnis passte. Hier die korrekte, gegen die offizielle Prüfung geprüfte Version aller drei Teile.',
      steps: [
        {
          title: 'a) Schritt für Schritt',
          content: `4/3 · a/2 + a/2 ÷ 3/2

Teil 1: 4/3 · a/2 = 4a/6 = 2a/3

Teil 2: a/2 ÷ 3/2 = a/2 · 2/3 = 2a/6 = a/3

Summe: 2a/3 + a/3 = 3a/3 = a

✅ Ergebnis: a`,
        },
        {
          title: 'b) Schritt für Schritt',
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
          title: 'c) Schritt für Schritt',
          content: `c/2 ÷ c²/4 + c/2 · 3 − c

Teil 1: c/2 ÷ c²/4 = c/2 · 4/c² = 4c/(2c²) = 2/c

Teil 2: c/2 · 3 = 3c/2

Teil 2 und den einzelnen Term −c zusammenfassen:
3c/2 − c = 3c/2 − 2c/2 = c/2

Teil 1 und Teil 2 addieren:
2/c + c/2

Gemeinsamer Nenner = 2c:
2/c = 4/(2c)
c/2 = c²/(2c)

Summe: 4/(2c) + c²/(2c) = (4 + c²)/(2c)

✅ Ergebnis: (4+c²)/(2c)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Division durch einen Bruch = Multiplikation mit dessen Kehrwert.
2️⃣  Klammern zuerst auf einen gemeinsamen Nenner bringen, dann vereinfachen.
3️⃣  Jeden Teil (Summand) einzeln berechnen, bevor du zusammenfasst.
4️⃣  Erst ganz am Schluss auf den gemeinsamen Nenner bringen, addieren und kürzen.`,
    },

    // ── ÜBUNGEN a): Bruchmultiplikation, Kehrwert-Division, Addition gleichnamiger Brüche.
    // ── ÜBUNGEN b): Klammer-mit-Brüchen vereinfachen und mit einem Bruch multiplizieren.
    // ── ÜBUNGEN c): Kehrwert-Division mit Potenzen, ungleichnamige Brüche addieren.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 4/3 · 1/2', answer: '2/3', tip: 'Zähler mal Zähler, Nenner mal Nenner.' },
      { level: 'einfach', q: 'Berechne: 1/2 ÷ 3/2', answer: '1/3', tip: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert.' },
      { level: 'einfach', q: 'Fasse zusammen: 2/3 + 1/3', answer: '1', tip: 'Gleicher Nenner — einfach die Zähler addieren.' },
      { level: 'einfach', q: 'Berechne: 1/2 · 1/2', answer: '1/4', tip: 'Zähler mal Zähler, Nenner mal Nenner.' },
      { level: 'einfach', q: 'Fasse zusammen: 1/4 − 1/2', answer: '-1/4', tip: 'Bringe beide Brüche auf den Nenner 4.' },
      { level: 'einfach', q: 'Berechne: 1/4 · 2', answer: '1/2', tip: 'Multipliziere den Zähler mit der 2, kürze wenn möglich.' },
      { level: 'einfach', q: 'Berechne: 1/2 ÷ 1/4', answer: '2', tip: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert.' },
      { level: 'einfach', q: 'Berechne: 1/2 · 3', answer: '3/2', tip: 'Multipliziere den Zähler mit der Zahl.' },
      { level: 'einfach', q: 'Fasse zusammen: 3/2 − 1', answer: '1/2', tip: 'Schreibe die 1 als 2/2, dann subtrahiere.' },

      { level: 'mittel', q: 'Berechne: 4/3 · a/2', answer: '2a/3', tip: 'Zahl mal Zahl, die Variable bleibt im Zähler stehen.' },
      { level: 'mittel', q: 'Berechne: a/2 ÷ 3/2', answer: 'a/3', tip: 'Mit dem Kehrwert von 3/2 multiplizieren, also mit 2/3.' },
      { level: 'mittel', q: 'Fasse zusammen: 2a/3 + a/3', answer: 'a', tip: 'Gleicher Nenner — Zähler addieren, dann kürzen falls möglich.' },
      { level: 'mittel', q: 'Berechne: 1/2 · b/2', answer: 'b/4', tip: 'Zahl mal Zahl, die Variable bleibt im Zähler.' },
      { level: 'mittel', q: 'Fasse zusammen: b/4 − b/2', answer: '-b/4', tip: 'Bringe beide Brüche auf den Nenner 4, dann subtrahiere.' },
      { level: 'mittel', q: 'Vereinfache: (-b/4) · 2', answer: '-b/2', tip: 'Kürze die 4 mit der 2.' },
      { level: 'mittel', q: 'Berechne: c/2 ÷ c/4', answer: '2', tip: 'Kehrwert des zweiten Bruchs nehmen — die c kürzen sich weg.' },
      { level: 'mittel', q: 'Berechne: c/2 · 3', answer: '3c/2', tip: 'Multipliziere den Zähler mit der 3.' },
      { level: 'mittel', q: 'Fasse zusammen: 3c/2 − c', answer: 'c/2', tip: 'Schreibe c als 2c/2, dann subtrahiere.' },

      { level: 'schwer', q: 'Vereinfache: 4/3 · a/2 + a/2 ÷ 3/2', answer: 'a', tip: 'Berechne beide Teile getrennt, dann addiere sie.' },
      { level: 'schwer', q: 'Berechne: 5/4 ÷ 5/2', answer: '1/2', tip: 'Kehrwert des zweiten Bruchs nehmen, dann kürzen.' },
      { level: 'schwer', q: 'Vereinfache: (1/2 · b/2 − b/2) · 2', answer: '-b/2', tip: 'Erst die Klammer vereinfachen, dann mit der Zahl davor multiplizieren.' },
      { level: 'schwer', q: 'Vereinfache: (1/2 · k/2 − k/2) · 2/k', answer: '-1/2', tip: 'Erst die Klammer vereinfachen, dann mit dem äusseren Bruch multiplizieren und kürzen.' },
      { level: 'schwer', q: 'Bringe 2/c auf den Nenner 2c. Wie lautet der neue Zähler?', answer: '4', tip: 'Erweitere den Bruch: womit musst du Zähler und Nenner multiplizieren, damit aus c der Nenner 2c wird?' },
      { level: 'schwer', q: 'Berechne: c/2 ÷ c²/4', answer: '2/c', tip: 'Mit dem Kehrwert multiplizieren, dann kürzen.' },

      { level: 'kanti', q: 'Vereinfache: 2/5 · a/4 + a/4 ÷ 5/2', answer: 'a/5', tip: 'Gleiches Vorgehen wie beim Original — nur mit anderen Zahlen.' },
      { level: 'kanti', q: 'Vereinfache: 3/2 · a/3 + a/3 ÷ 2/3', answer: 'a', tip: 'Gleiche Struktur wie die Originalaufgabe.' },
      { level: 'kanti', q: 'Vereinfache: (1/2 · b²/2 − b²/2) · 2/b', answer: '-b/2', tip: 'Gleiches Vorgehen wie im Kochrezept — die Potenz kürzt sich am Schluss weg.' },
      { level: 'kanti', q: 'Vereinfache: (1/3 · b²/2 − b²/2) · 2/b', answer: '-2b/3', tip: 'Gleiche Struktur, andere Zahl — sorgfältig durchrechnen.' },
      { level: 'kanti', q: 'Vereinfache: c/2 ÷ c²/4 + c/2 · 3 − c, und berechne den Wert für c=2.', answer: '2', tip: 'Setze c=2 direkt in die Ausgangsaufgabe ein und rechne Schritt für Schritt.' },
      { level: 'kanti', q: 'Fasse zusammen: 3/c + c/3, und berechne den Wert für c=3.', answer: '2', tip: 'Setze c=3 direkt in die Ausgangsterme ein.' },
    ],
  },
];

