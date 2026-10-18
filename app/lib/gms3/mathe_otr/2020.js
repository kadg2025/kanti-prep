
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

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WAHR_2',
    verified: true,
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 2: Glücksbeutel

In einem Glücksbeutel sind 4 Kugeln: 1× N, 1× J, 2× A. Es werden ohne Zurücklegen alle 4 Kugeln gezogen.

a) Notiere sämtliche möglichen "Wörter", die bei einer Ziehung entstehen können.

b) Wie gross ist die Wahrscheinlichkeit, dass die vier Buchstaben in der Reihenfolge J-A-N-A gezogen werden?

c) Die Kugel mit J wird durch eine Kugel mit N ersetzt (nun: 2× N, 2× A). Wie viele Wörter können nun entstehen?

Im Glücksbeutel befinden sich nun 3× A und 1× N. Es werden 2 Kugeln ohne Zurücklegen gezogen. Michael gewinnt, wenn beide Kugeln A zeigen. Robin gewinnt, wenn die beiden Kugeln verschiedene Buchstaben zeigen.

d) Zeichne einen Wahrscheinlichkeitsbaum und begründe, warum beide die gleichen Gewinnchancen haben.`,
    options: [
      { label: 'a) 12 Wörter | b) 1/12 | c) 6 Wörter | d) P(Michael)=P(Robin)=1/2', correct: true },
      { label: 'a) 24 Wörter | b) 1/24 | c) 12 Wörter | d) P(Michael)=1/4, P(Robin)=3/4', correct: false },
      { label: 'a) 6 Wörter | b) 1/6 | c) 4 Wörter | d) P(Michael)=2/3, P(Robin)=1/3', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔑 Anordnungen mit gleichen Elementen: n! / (k₁! · k₂! · ...), wobei k₁, k₂, ... die Anzahl gleicher Buchstaben sind.
📐 Pfadregel (ohne Zurücklegen): An jedem Zug ändert sich die Gesamtzahl der Kugeln UND die Zusammensetzung im Beutel — die Wahrscheinlichkeiten für den nächsten Zug hängen vom vorigen Ergebnis ab.
🔑 Faires Spiel: Zwei Spieler haben die gleichen Gewinnchancen, wenn ihre Gewinnwahrscheinlichkeiten gleich gross sind.`,
        },
        {
          title: 'a) Alle möglichen Wörter',
          content: `Wir haben 4 Buchstaben: J, N, A, A.
Da die zwei A's gleich sind, gibt es nicht 4! = 24, sondern 4!/2! = 12 verschiedene Anordnungen.

Mit J am Anfang: JNAA, JANA, JAAN
Mit N am Anfang: NJAA, NAJA, NAAJ
Mit A am Anfang: AANJ, AAJN, ANAJ, ANJA, AJAN, AJNA

✅ 12 verschiedene Wörter`,
        },
        {
          title: 'b) Wahrscheinlichkeit für J-A-N-A',
          content: `Es gibt 12 gleich wahrscheinliche Anordnungen (aus Teil a). Davon ist genau 1 die Reihenfolge J-A-N-A.
P(J-A-N-A) = 1/12

Alternativ mit der Pfadregel:
1. Zug: P(J) = 1/4
2. Zug: P(A) = 2/3  (noch 3 Kugeln: N, A, A)
3. Zug: P(N) = 1/2  (noch 2 Kugeln: N, A)
4. Zug: P(A) = 1  (nur noch A übrig)
P = 1/4 · 2/3 · 1/2 · 1 = 2/24 = 1/12

✅ Die Wahrscheinlichkeit beträgt 1/12.`,
        },
        {
          title: 'c) J durch N ersetzt',
          content: `Wir haben jetzt 4 Buchstaben: N, N, A, A. Zwei gleiche N's und zwei gleiche A's.
Anzahl Anordnungen = 4! / (2! · 2!) = 24 / 4 = 6

Die 6 Wörter: AANN, ANAN, ANNA, NNAA, NANA, NAAN

✅ Es gibt 6 verschiedene Wörter.`,
        },
        {
          title: 'd) Wahrscheinlichkeitsbaum: Michael vs. Robin',
          content: `Beutel: A, A, A, N (4 Kugeln total)

1. Zug A (P = 3/4):
   └─ 2. Zug A (P = 2/3): → AA → P = 3/4 · 2/3 = 1/2  (Michael gewinnt)
   └─ 2. Zug N (P = 1/3): → AN → P = 3/4 · 1/3 = 1/4  (Robin gewinnt)
1. Zug N (P = 1/4):
   └─ 2. Zug A (P = 1):   → NA → P = 1/4 · 1 = 1/4    (Robin gewinnt)

P(Michael) = P(AA) = 3/4 · 2/3 = 1/2
P(Robin) = P(AN) + P(NA) = 1/4 + 1/4 = 1/2

✅ Beide haben P = 1/2 → das Spiel ist fair!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119941/AP20_GMS3_M1_oTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Anordnungen mit gleichen Buchstaben: n! / (k₁! · k₂! · ...).
2️⃣  Für eine bestimmte Reihenfolge: günstige Fälle / alle Fälle, oder Pfadregel zug für Zug.
3️⃣  Ohne Zurücklegen: Nenner wird bei jedem Zug kleiner.
4️⃣  Faires Spiel prüfen: alle Gewinnpfade pro Spieler addieren und vergleichen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Anordnungen mit gleichen Elementen und Pfadregel ohne Zurücklegen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Wie viele Anordnungen gibt es für die 3 verschiedenen Buchstaben A, B, C?', answer: '6', tip: '3! = 3·2·1.' },
      { level: 'einfach', q: 'Ein Beutel hat 3 Kugeln: A, A, B. Nach dem Ziehen von A (ohne Zurücklegen) — wie viele Kugeln sind noch im Beutel?', answer: '2', tip: 'Eine Kugel weniger als vorher.' },
      { level: 'einfach', q: 'Berechne: 1/2 · 1/2', answer: '1/4', tip: 'Zähler mal Zähler, Nenner mal Nenner.' },

      { level: 'mittel', q: 'Wie viele Anordnungen gibt es für die Buchstaben M, M, A, T (M kommt doppelt vor)?', answer: '12', tip: '4!/2!.' },
      { level: 'mittel', q: 'Ein Beutel hat 4 Kugeln: 2× rot, 2× blau. Wie viele verschiedene Ziehreihenfolgen (alle 4 ohne Zurücklegen) gibt es?', answer: '6', tip: '4!/(2!·2!).' },
      { level: 'mittel', q: 'Ein Beutel hat 5 Kugeln: 3× A, 2× B. Wie viele verschiedene Wörter (alle 5 gezogen) gibt es?', answer: '10', tip: '5!/(3!·2!).' },

      { level: 'schwer', q: 'Ein Beutel hat 3× A, 1× N (4 Kugeln). Es werden 2 ohne Zurücklegen gezogen. Wie gross ist P(erste A, zweite N)?', answer: '1/4', tip: 'P(A)=3/4, dann P(N|A gezogen)=1/3 aus den verbleibenden 3 Kugeln.' },
      { level: 'schwer', q: 'Gleicher Beutel (3×A, 1×N): Wie gross ist P(beide Kugeln A)?', answer: '1/2', tip: 'P(A)=3/4, dann P(A|A gezogen)=2/3 aus den verbleibenden 3 Kugeln.' },

      { level: 'kanti', q: 'Wie im Original: Beutel mit 1×N, 1×J, 2×A (4 Kugeln, ohne Zurücklegen alle gezogen). Wie viele verschiedene Wörter gibt es?', answer: '12', tip: '4!/2! = 12 — genau wie im Original a).' },
      { level: 'kanti', q: 'Wie im Original: Bei 12 gleich wahrscheinlichen Wörtern — wie gross ist die Wahrscheinlichkeit für genau ein bestimmtes Wort (z.B. J-A-N-A)?', answer: '1/12', tip: 'Nur 1 von 12 gleich wahrscheinlichen Möglichkeiten passt.' },
    ],
  },

  // ── AUFGABE 3a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WINKEL_3a',
    year: 2020,
    verified: true,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    figureUrl: '/figuren/2020_winkel3a.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2020',
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

    // ── ÜBUNGEN: aufbauend zu Winkelsumme, Scheitel-, Stufen- und Wechselwinkeln.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein Dreieck hat die Winkel 90° und 51°. Wie gross ist der dritte Winkel?', answer: '39', tip: 'Winkelsumme im Dreieck = 180°.' },
      { level: 'einfach', q: 'Zwei Geraden schneiden sich. Ein Winkel beträgt 78°. Wie gross ist der Scheitelwinkel?', answer: '78', tip: 'Scheitelwinkel sind immer gleich gross.' },
      { level: 'einfach', q: 'An zwei parallelen Geraden entsteht ein Stufenwinkel von 51°. Wie gross ist der zugehörige Stufenwinkel an der anderen Geraden?', answer: '51', tip: 'Stufenwinkel an Parallelen sind gleich gross.' },

      { level: 'mittel', q: 'Ein Dreieck hat die Winkel 78° und 51°. Wie gross ist der dritte Winkel?', answer: '51', tip: 'Winkelsumme im Dreieck = 180°.' },
      { level: 'mittel', q: 'Ein Winkel und sein Nebenwinkel — was ergeben sie zusammen immer?', answer: '180', tip: 'Nebenwinkel ergänzen sich zu einem gestreckten Winkel.' },
      { level: 'mittel', q: 'Ein Winkel beträgt 27°, sein Nebenwinkel also?', answer: '153', tip: '180° minus den gegebenen Winkel.' },

      { level: 'schwer', q: 'In einem Dreieck sind zwei Winkel durch Wechselwinkel an Parallelen bekannt: 78° und 51°. Wie gross ist der dritte Winkel?', answer: '51', tip: 'Winkelsumme im Dreieck = 180°, die anderen zwei über die Parallelenregeln bestimmen.' },
      { level: 'schwer', q: 'Ein Aussenwinkel eines Dreiecks beträgt 129°. Die beiden nicht anliegenden Innenwinkel sind gleich gross. Wie gross ist jeder?', answer: '64.5', tip: 'Aussenwinkel = Summe der zwei nicht anliegenden Innenwinkel.' },

      { level: 'kanti', q: 'Wie im Original 3a: Mit Winkelsumme im Dreieck, Scheitel-, Stufen- und Wechselwinkeln ergeben sich α, β, γ. Wenn α=78° und γ=27°, wie gross ist β (im gleichen Dreieck)?', answer: '75', tip: 'Winkelsumme im Dreieck = 180° − α − γ.' },
      { level: 'kanti', q: 'Wie im Original 3b: Nenne die wichtigste Regel, um einen unbekannten Winkel über eine Hilfslinie (Parallele) zu bestimmen.', answer: 'Stufen- oder Wechselwinkel an Parallelen sind gleich gross', tip: 'Hilfslinie als Parallele einzeichnen, dann Stufen-/Wechselwinkel nutzen.' },
    ],
  },

  // ── AUFGABE 3b ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_WINKEL_3b',
    year: 2020,
    verified: true,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106466/AP20_GMS3_M1_oTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    figureUrl: '/figuren/2020_winkel3b.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2020',
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

    // ── ÜBUNGEN: aufbauend zu Hilfslinien, Winkelsumme und Nebenwinkeln.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein Dreieck hat die Winkel 90° und 48°. Wie gross ist der dritte Winkel?', answer: '42', tip: 'Winkelsumme im Dreieck = 180°.' },
      { level: 'einfach', q: 'Ein Winkel beträgt 138°. Wie gross ist sein Nebenwinkel?', answer: '42', tip: 'Nebenwinkel ergänzen sich zu 180°.' },
      { level: 'einfach', q: 'Zwei Geraden schneiden sich. Ein Winkel beträgt 42°. Wie gross ist der Scheitelwinkel?', answer: '42', tip: 'Scheitelwinkel sind immer gleich gross.' },

      { level: 'mittel', q: 'Ein Dreieck hat die Winkel 55° und 83°. Wie gross ist der dritte Winkel?', answer: '42', tip: 'Winkelsumme im Dreieck = 180°.' },
      { level: 'mittel', q: 'Warum hilft eine eingezeichnete Parallele oft beim Bestimmen eines unbekannten Winkels?', answer: 'weil dadurch Stufen- oder Wechselwinkel entstehen, die gleich gross sind', tip: 'Parallelen erzeugen gleich grosse Winkelpaare an der Schnittgeraden.' },
      { level: 'mittel', q: 'Ein Winkel entsteht als Summe zweier bekannter Winkel 18° und 24°. Wie gross ist er?', answer: '42', tip: 'Einfach addieren, wenn die Winkel aneinanderliegen.' },

      { level: 'schwer', q: 'In einem Dreieck ist ein Winkel doppelt so gross wie ein anderer, der dritte ist 42°. Die beiden anderen summieren sich auf wie viel Grad?', answer: '138', tip: '180° minus den bekannten Winkel.' },
      { level: 'schwer', q: 'Ein Aussenwinkel eines Dreiecks beträgt 138°. Wie gross ist der anliegende Innenwinkel?', answer: '42', tip: 'Aussenwinkel und anliegender Innenwinkel sind Nebenwinkel (Summe 180°).' },

      { level: 'kanti', q: 'Wie im Original: Mit Hilfslinien (Parallele einzeichnen), bekannten Winkeln und der Winkelsumme im Dreieck ergibt sich α = 42°. Was ist der erste Schritt bei einer solchen Aufgabe ohne offensichtliche Parallele?', answer: 'eine Hilfslinie parallel zu einer gegebenen Geraden einzeichnen', tip: 'Hilfslinien machen versteckte Stufen-/Wechselwinkel sichtbar.' },
      { level: 'kanti', q: 'Warum kann man bei "nicht massstabsgetreuen" Figuren nicht einfach mit dem Geodreieck messen?', answer: 'weil die Zeichnung nicht winkeltreu ist, nur die Rechnung zählt', tip: 'Die Aufgabe verlangt eine rechnerische Lösung über Winkelregeln, nicht das Abmessen.' },
    ],
  },

  // ── AUFGABE 4a ────────────────────────────────────────────
  {
    id: 'M1_2020_OTR_FUNK_4a',
    verified: true,
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
    verified: true,
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
    verified: true,
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
    verified: true,
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
    verified: true,
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

