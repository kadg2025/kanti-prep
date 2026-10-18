
import { frac } from '../../mathFormat';

export const questions2025_oTR = [
  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_TERM_1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 1: Terme multiplizieren

Multipliziere die folgenden Terme mit 5a² und vereinfache danach so weit wie möglich:

a) 2b · 3ab³

b) (5a)²

c) 2b + 3ab³

d) ${frac('2a', '5a³ + 10a²b')}`,
    options: [
      { label: 'a) 30a³b⁴ | b) 125a⁴ | c) 10a²b+15a³b³ | d) 2a/(a+2b)', correct: true },
      { label: 'a) 30a³b⁴ | b) 25a⁴ | c) 10a²b+15a³b³ | d) 2a/(a+2b)', correct: false },
      { label: 'a) 6a³b⁴ | b) 125a⁴ | c) 10a²b+15ab³ | d) 2/(a+2b)', correct: false },
    ],
    teile: [
      { letter: 'a', options: [
        { label: '30a³b⁴', correct: true },
        { label: '6a³b⁴', correct: false },
        { label: '30a³b³', correct: false },
      ] },
      { letter: 'b', options: [
        { label: '125a⁴', correct: true },
        { label: '25a⁴', correct: false },
        { label: '125a²', correct: false },
      ] },
      { letter: 'c', options: [
        { label: '10a²b+15a³b³', correct: true },
        { label: '10a²b+15ab³', correct: false },
        { label: '10a²b+3ab³', correct: false },
      ] },
      { letter: 'd', options: [
        { label: '2a/(a+2b)', correct: true },
        { label: '2/(a+2b)', correct: false },
        { label: '2/(5a(a+2b))', correct: false },
      ] },
    ],
    solution: {
      intro: `Bei jedem Teil gibt es zwei Schritte: erst den gegebenen Term selbst vereinfachen, dann das Ergebnis mit 5a² multiplizieren.`,
      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `Bei einer Summe (wie in c) musst du 5a² mit JEDEM Summanden einzeln multiplizieren.
Bei einem Bruch (wie in d) multiplizierst du nur den Zähler mit 5a² — der Nenner bleibt stehen.`,
        },
        {
          title: 'a) 2b · 3ab³',
          content: `Erst das Produkt: 2b · 3ab³ = 6ab⁴

Dann mit 5a² multiplizieren:
6ab⁴ · 5a² = 30a³b⁴

✅ Ergebnis: 30a³b⁴`,
        },
        {
          title: 'b) (5a)²',
          content: `Erst die Potenz: (5a)² = 5² · a² = 25a²

Dann mit 5a² multiplizieren:
25a² · 5a² = 125a⁴

✅ Ergebnis: 125a⁴`,
        },
        {
          title: 'c) 2b + 3ab³',
          content: `Hier ist keine Vereinfachung der Summe möglich (2b und 3ab³ sind keine gleichartigen Terme).

Also direkt mit 5a² multiplizieren — jeden Summanden einzeln:
5a² · 2b = 10a²b
5a² · 3ab³ = 15a³b³

✅ Ergebnis: 10a²b + 15a³b³`,
        },
        {
          title: 'd) 2a / (5a³ + 10a²b)',
          content: `Zähler mit 5a² multiplizieren:
2a · 5a² = 10a³

Term: 10a³ / (5a³ + 10a²b)

Nenner faktorisieren: 5a³ + 10a²b = 5a²(a + 2b)

= 10a³ / (5a²(a + 2b))

Kürzen mit 5a²:
10a³ / 5a² = 2a

= 2a / (a + 2b)

✅ Ergebnis: 2a/(a+2b)`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Zuerst den gegebenen Term für sich vereinfachen (multiplizieren, potenzieren, addieren oder faktorisieren).
2️⃣ Erst danach mit 5a² multiplizieren.
3️⃣ Bei einer Summe: jeden Summanden einzeln mit 5a² multiplizieren.
4️⃣ Bei einem Bruch: nur den Zähler mit 5a² multiplizieren, dann wenn möglich kürzen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Produkt/Potenz/Summe/Bruch mit 5a² multiplizieren.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 2 · 3', answer: '6', tip: 'Multipliziere zuerst nur die Zahlen.' },
      { level: 'einfach', q: 'Berechne: 5²', answer: '25', tip: 'Quadrieren heisst: die Zahl mit sich selbst multiplizieren.' },
      { level: 'einfach', q: 'Multipliziere aus: b · b³. Welchen Exponenten hat das Ergebnis?', answer: '4', tip: 'Bei gleicher Basis werden Exponenten addiert.' },

      { level: 'mittel', q: 'Multipliziere aus: 2k · 5k. Wie lautet der Vorfaktor (die Zahl) im Ergebnis?', answer: '10', tip: 'Multipliziere zuerst nur die Zahlen.' },
      { level: 'mittel', q: 'Multipliziere aus: 5 · (2m + 3n)', answer: '10m+15n', tip: 'Multipliziere die 5 mit JEDEM Summanden einzeln.' },
      { level: 'mittel', q: 'Faktorisiere: 5a³ + 10a²b. Was ist der gemeinsame Zahlenfaktor?', answer: '5', tip: 'ggT von 5 und 10.' },

      { level: 'schwer', q: 'Kürze: 10a³ / 5a²', answer: '2a', tip: 'Kürze zuerst die Zahlen, dann die Potenzen von a.' },
      { level: 'schwer', q: 'Multipliziere aus: 6ab⁴ · 5a². Welchen Exponenten hat a im Ergebnis?', answer: '3', tip: 'Exponenten der gleichen Basis addieren.' },

      { level: 'kanti', q: 'Multipliziere 2b·3ab³ zuerst aus, dann mit 5a². Welchen Exponenten hat b im Endergebnis?', answer: '4', tip: 'Der Exponent von b ändert sich bei der Multiplikation mit 5a² nicht mehr.' },
      { level: 'kanti', q: 'Vereinfache 2a/(5a³+10a²b), nachdem du mit 5a² multipliziert hast. Was ist der Nenner im gekürzten Ergebnis?', answer: 'a+2b', tip: 'Faktorisiere zuerst den Nenner: 5a³+10a²b = 5a²(a+2b), dann kürze.' },
    ],
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_GLEICH_2',
    verified: true,
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Gleichungen',
    questionText: `Aufgabe 2: Löse folgende Gleichungen.

a) ${frac('2', '3')} – 7x = –2x + ${frac('7', '3')} – ${frac('10', '6')}

b) 6 · (2 · (x + ${frac('1', '4')})) = 9 · (4x – 1)`,
    options: [
      { label: 'a) x = 0 | b) x = 0.5', correct: true },
      { label: 'a) x = 1 | b) x = 1', correct: false },
      { label: 'a) x = -2/5 | b) x = 1/12', correct: false },
    ],
    teile: [
      { letter: 'a', options: [
        { label: 'x = 0', correct: true },
        { label: 'x = 1', correct: false },
        { label: 'x = -2/5', correct: false },
      ] },
      { letter: 'b', options: [
        { label: 'x = 0.5', correct: true },
        { label: 'x = 1', correct: false },
        { label: 'x = 1/12', correct: false },
      ] },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Gleichungen lösen: Ziel ist immer, x auf einer Seite allein stehen zu haben.
🔑 Brüche mit gleichem Nenner: erst Zähler zusammenfassen, dann weiterrechnen.
🔑 Verschachtelte Klammern: von innen nach aussen auflösen — zuerst die innerste Klammer.`,
        },
        {
          title: 'a) Rechte Seite vereinfachen',
          content: `2/3 – 7x = –2x + 7/3 – 10/6

Zuerst 7/3 – 10/6 zusammenfassen (gemeinsamer Nenner 6):
7/3 = 14/6, also 14/6 – 10/6 = 4/6 = 2/3

2/3 – 7x = –2x + 2/3`,
        },
        {
          title: 'a) Nach x auflösen',
          content: `2/3 – 7x = –2x + 2/3     | –2/3
–7x = –2x     | +2x
–5x = 0
x = 0

✅ x = 0`,
        },
        {
          title: 'b) Klammern auflösen',
          content: `6 · (2 · (x + 1/4)) = 9 · (4x – 1)
12 · (x + 1/4) = 36x – 9
12x + 3 = 36x – 9`,
        },
        {
          title: 'b) Nach x auflösen',
          content: `12x + 3 = 36x – 9     | –12x, +9
12 = 24x
x = 12/24 = 1/2

✅ x = 0.5`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Brüche mit gemeinsamem Nenner zusammenfassen.
2️⃣ Verschachtelte Klammern von innen nach aussen auflösen.
3️⃣ Alle x-Terme auf eine Seite, Zahlen auf die andere.
4️⃣ Durch den Koeffizienten teilen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Bruchgleichungen und verschachtelten Klammern.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Löse: 1/2 - 3x = -2x + 1/2', answer: '0', tip: 'x-Terme auf eine Seite, Zahlen auf die andere.' },
      { level: 'einfach', q: 'Löse: 2(x + 3) = 4(x + 1)', answer: '1', tip: 'Beide Klammern auflösen, dann x isolieren.' },
      { level: 'einfach', q: 'Berechne: 5/3 - 4/6 (als gekürzter Bruch)', answer: '1', tip: 'Gemeinsamen Nenner finden, dann Zähler subtrahieren.' },

      { level: 'mittel', q: 'Löse: 3/4 - 5x = -4x + 5/4 - 3/2', answer: '1', tip: 'Rechte Seite zuerst zusammenfassen (gemeinsamer Nenner 4), dann x auf eine Seite.' },
      { level: 'mittel', q: 'Löse: 4 · (2 · (x + 1/2)) = 6 · (2x - 1)', answer: '5/2', tip: 'Innere Klammer zuerst mit dem äusseren Faktor multiplizieren.' },
      { level: 'mittel', q: 'Löse: 2/5 - 3x = -2x + 4/5 - 1/5', answer: '-1/5', tip: 'Rechte Seite zusammenfassen, dann x-Terme auf eine Seite.' },

      { level: 'schwer', q: 'Löse: 3 · (2 · (x - 1/3)) = 5 · (2x + 1)', answer: '-7/4', tip: 'Verschachtelte Klammer von innen nach aussen auflösen, dann x isolieren.' },
      { level: 'schwer', q: 'Löse: 5/6 - 4x = -3x + 5/2 - 5/3', answer: '0', tip: 'Rechte Seite mit gemeinsamem Nenner 6 zusammenfassen.' },

      { level: 'kanti', q: 'Löse: 2/3 - 7x = -2x + 7/3 - 10/6', answer: '0', tip: 'Genau wie im Original a): rechte Seite zusammenfassen, dann x-Terme auf eine Seite.' },
      { level: 'kanti', q: 'Löse: 6 · (2 · (x + 1/4)) = 9 · (4x - 1)', answer: '0.5', tip: 'Genau wie im Original b): verschachtelte Klammer auflösen, dann nach x auflösen.' },
    ],
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_VERHALTNIS_3',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 3: Verhältnisse und Terme vergleichen

a) Zerlege die Zahl 63 in zwei Summanden, die sich zueinander verhalten wie 3 : 4.

b) Welcher Term hat den grösseren Wert? Begründe rechnerisch.

Term A: ${frac('25', '8')} : ${frac('31', '8')}

Term B: ${frac('13', '3')} : ${frac('31', '6')}`,
    options: [
      { label: 'a) 27 und 36 | b) Term B ist grösser (26/31 > 25/31)', correct: true },
      { label: 'a) 21 und 42 | b) Term A ist grösser', correct: false },
      { label: 'a) 27 und 36 | b) Term A ist grösser', correct: false },
    ],
    teile: [
      { letter: 'a', options: [
        { label: '27 und 36', correct: true },
        { label: '21 und 42', correct: false },
        { label: '15.75 und 21', correct: false },
      ] },
      { letter: 'b', options: [
        { label: 'Term B ist grösser', correct: true },
        { label: 'Term A ist grösser', correct: false },
        { label: 'Beide Terme sind gleich gross', correct: false },
      ] },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'a) Verhältnis verstehen',
          content: `Das Verhältnis 3 : 4 bedeutet:
Insgesamt haben wir 3 + 4 = 7 gleich grosse Teile.`,
        },
        {
          title: 'a) Einen Teil berechnen',
          content: `63 : 7 = 9
Ein Teil ist also 9.`,
        },
        {
          title: 'a) Beide Summanden berechnen',
          content: `Erster Summand: 3 · 9 = 27
Zweiter Summand: 4 · 9 = 36

✅ Ergebnis: 27 und 36`,
        },
        {
          title: 'b) Term A berechnen',
          content: `Term A = 25/8 : 31/8
= 25/8 · 8/31     (Division = Multiplikation mit dem Kehrwert)
= 25/31

✅ Term A = 25/31`,
        },
        {
          title: 'b) Term B berechnen',
          content: `Term B = 13/3 : 31/6
= 13/3 · 6/31
= 78/93
= 26/31     (kürzen mit 3)

✅ Term B = 26/31`,
        },
        {
          title: 'b) Vergleichen',
          content: `Term A = 25/31
Term B = 26/31

Gleicher Nenner → vergleiche die Zähler:
26 > 25

✅ Term B hat den grösseren Wert.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Verhältnis-Zahlen addieren, Gesamtzahl durch diese Summe teilen, dann mit den Verhältniszahlen multiplizieren.
2️⃣ Division durch einen Bruch = Multiplikation mit dem Kehrwert.
3️⃣ Beim Vergleich zweier Brüche: auf einen gemeinsamen Nenner bringen, dann die Zähler vergleichen.`,
    },

    // ── ÜBUNGEN a): Zahl im gegebenen Verhältnis zerlegen.
    // ── ÜBUNGEN b): Bruch-Division und Brüche vergleichen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 3+4', answer: '7', tip: 'Addiere die beiden Verhältniszahlen.' },
      { level: 'einfach', q: 'Berechne: 63 : 7', answer: '9', tip: 'Teile die Gesamtzahl durch die Summe der Verhältniszahlen.' },
      { level: 'einfach', q: 'Berechne: 25/8 · 8/31', answer: '25/31', tip: 'Kürze die 8, dann bleibt der Bruch übrig.' },

      { level: 'mittel', q: 'Zerlege 40 in zwei Summanden im Verhältnis 2:3. Wie gross ist der kleinere Summand?', answer: '16', tip: 'Teile 40 durch die Summe der Verhältniszahlen (2+3=5), dann mit 2 multiplizieren.' },
      { level: 'mittel', q: 'Berechne: 13/3 · 6/31', answer: '26/31', tip: 'Kürze wo möglich, dann multipliziere Zähler mal Zähler und Nenner mal Nenner.' },
      { level: 'mittel', q: 'Vergleiche: 7/12 und 8/12 — welcher Bruch ist grösser?', answer: '8/12', tip: 'Bei gleichem Nenner ist der Bruch mit dem grösseren Zähler grösser.' },

      { level: 'schwer', q: 'Kürze: 78/93 (mit 3)', answer: '26/31', tip: 'Teile Zähler und Nenner durch 3.' },
      { level: 'schwer', q: 'Berechne: 10/3 : 31/6', answer: '20/31', tip: 'Division durch einen Bruch = Multiplikation mit dem Kehrwert, dann kürzen.' },

      { level: 'kanti', q: 'Berechne: 25/8 : 31/8', answer: '25/31', tip: 'Gleicher Nenner bei Division — er kürzt sich weg.' },
      { level: 'kanti', q: 'Berechne: 13/3 : 31/6, und vergleiche mit 25/31. Welcher Bruch ist grösser?', answer: '26/31', tip: 'Berechne zuerst den Bruch, dann vergleiche die Zähler bei gleichem Nenner.' },
    ],
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_URNE_4',
    verified: true,
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4: Urne mit Kugeln

In einer Urne liegen 3 rote und 2 schwarze Kugeln. Es werden drei Kugeln nacheinander mit Zurücklegen gezogen und jeweils die Farbe notiert.

a) Erstelle eine Baumdarstellung. Du musst keine Wahrscheinlichkeiten eintragen.

Wie gross ist die Wahrscheinlichkeit, dass...
b1) ...drei rote Kugeln gezogen werden?
b2) ...genau zwei rote Kugeln dabei sind?
b3) ...lauter gleichfarbige Kugeln gezogen werden?

Nun werden die Kugeln pro Farbe durchnummeriert (rote Kugeln: 1, 2, 3 — schwarze Kugeln: 1, 2) und man zieht nacheinander zwei Kugeln mit Zurücklegen.

c1) Wie gross ist die Wahrscheinlichkeit, dass die erste gezogene Kugel die Nummer 1 und die zweite gezogene Kugel die Nummer 3 besitzt?
c2) Wie gross ist die Wahrscheinlichkeit, dass die Summe der beiden gezogenen Kugeln fünf beträgt?`,
    options: [
      { label: 'b1) 27/125 | b2) 54/125 | b3) 7/25 | c1) 2/25 | c2) 4/25', correct: true },
      { label: 'b1) 9/25 | b2) 27/125 | b3) 35/125 | c1) 1/25 | c2) 5/25', correct: false },
      { label: 'b1) 3/5 | b2) 72/125 | b3) 27/125 | c1) 1/5 | c2) 2/5', correct: false },
    ],
    teile: [
      { letter: 'b1', options: [
        { label: '27/125', correct: true },
        { label: '9/25', correct: false },
        { label: '3/5', correct: false },
      ] },
      { letter: 'b2', options: [
        { label: '54/125', correct: true },
        { label: '27/125', correct: false },
        { label: '72/125', correct: false },
      ] },
      { letter: 'b3', options: [
        { label: '7/25', correct: true },
        { label: '54/125', correct: false },
        { label: '27/125', correct: false },
      ] },
      { letter: 'c1', options: [
        { label: '2/25', correct: true },
        { label: '1/25', correct: false },
        { label: '1/5', correct: false },
      ] },
      { letter: 'c2', options: [
        { label: '4/25', correct: true },
        { label: '5/25', correct: false },
        { label: '2/5', correct: false },
      ] },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Mit Zurücklegen: Die Urne bleibt nach jedem Zug gleich zusammengesetzt — die Wahrscheinlichkeiten ändern sich nicht.
🔑 UND-Regel (Pfadregel): Wahrscheinlichkeiten entlang eines Pfades werden multipliziert.
🔑 ODER-Regel: Wahrscheinlichkeiten sich ausschliessender Fälle (z.B. mehrere passende Reihenfolgen) werden addiert.
⚠️ Achtung bei den Nummern (Teil c): Jede Farbe wird FÜR SICH nummeriert — rot: 1, 2, 3 und schwarz: 1, 2. Die Nummer 1 und die Nummer 2 kommen also je ZWEIMAL vor (einmal rot, einmal schwarz), nur die Nummer 3 gibt es nur einmal!`,
        },
        {
          title: 'a) Baumdarstellung',
          content: `Da dreimal gezogen wird, hat der Baum 3 Stufen. Auf jeder Stufe gibt es 2 Möglichkeiten: R (rot) oder S (schwarz).
Da mit Zurücklegen gezogen wird, bleibt die Urne jedes Mal gleich (3 rote, 2 schwarze Kugeln) — die Äste sehen auf jeder Stufe gleich aus.

Die möglichen Farbfolgen (Endpfade): RRR, RRS, RSR, RSS, SRR, SRS, SSR, SSS`,
        },
        {
          title: 'b1) Drei rote Kugeln',
          content: `P(Rot) = 3/5 (bleibt bei jedem Zug gleich)
P(RRR) = 3/5 · 3/5 · 3/5 = 27/125

✅ Ergebnis: 27/125`,
        },
        {
          title: 'b2) Genau zwei rote Kugeln',
          content: `Genau zwei rote Kugeln bedeutet: RRS, RSR oder SRR (3 Möglichkeiten).
Jede einzelne: P(RRS) = 3/5 · 3/5 · 2/5 = 18/125
Alle 3 Möglichkeiten addieren: 3 · 18/125 = 54/125

✅ Ergebnis: 54/125`,
        },
        {
          title: 'b3) Lauter gleichfarbige Kugeln',
          content: `Es gibt nur zwei passende Fälle: alle rot oder alle schwarz.
P(RRR) = 3/5 · 3/5 · 3/5 = 27/125
P(SSS) = 2/5 · 2/5 · 2/5 = 8/125
Addieren: 27/125 + 8/125 = 35/125 = 7/25

✅ Ergebnis: 7/25`,
        },
        {
          title: 'c1) Erste Kugel Nr. 1, zweite Kugel Nr. 3',
          content: `Achtung: Die Nummer 1 gibt es ZWEIMAL (eine rote, eine schwarze Kugel), die Nummer 3 nur EINMAL (nur bei rot, da schwarz nur bis 2 nummeriert ist).

P(erste Kugel = Nr. 1) = 2/5     (2 von 5 Kugeln tragen die 1)
P(zweite Kugel = Nr. 3) = 1/5     (nur 1 von 5 Kugeln trägt die 3)

Mit Zurücklegen sind die beiden Ziehungen unabhängig:
P = 2/5 · 1/5 = 2/25

✅ Ergebnis: 2/25`,
        },
        {
          title: 'c2) Summe der beiden Kugeln ist fünf',
          content: `Es werden zweimal mit Zurücklegen gezogen: 5 · 5 = 25 gleich wahrscheinliche geordnete Kugel-Paare.

Die vorkommenden Nummern sind 1, 1, 2, 2, 3 (die 1 und die 2 je zweimal, die 3 nur einmal). Die höchste Nummer ist 3 — als Summe 5 sind daher nur die Wertepaare (2,3) und (3,2) möglich:

(2,3): erste Kugel zeigt 2 → 2 Möglichkeiten (rot-2 oder schwarz-2), zweite Kugel zeigt 3 → 1 Möglichkeit → 2·1 = 2 Kugel-Paare
(3,2): erste Kugel zeigt 3 → 1 Möglichkeit, zweite Kugel zeigt 2 → 2 Möglichkeiten → 1·2 = 2 Kugel-Paare

Total: 2 + 2 = 4 günstige Kugel-Paare von 25
P = 4/25

✅ Ergebnis: 4/25`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Mit Zurücklegen: Wahrscheinlichkeiten bleiben bei jedem Zug gleich.
2️⃣ "UND" (ein bestimmter Pfad) → multiplizieren.
3️⃣ "ODER" (mehrere passende Pfade) → addieren.
4️⃣ Bei Nummern-Aufgaben: alle passenden geordneten Paare auflisten, dann durch die Gesamtzahl aller Fälle teilen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Pfadregel, Summenregel und Ziehungen mit Zurücklegen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Eine Urne hat 4 rote und 6 gelbe Kugeln. Wie gross ist P(rot)?', answer: '2/5', tip: 'Anzahl rot durch Gesamtzahl, dann kürzen.' },
      { level: 'einfach', q: 'Mit Zurücklegen: P(rot)=2/5 beim ersten Zug. Wie gross ist P(rot) beim dritten Zug?', answer: '2/5', tip: 'Mit Zurücklegen ändert sich die Wahrscheinlichkeit nicht.' },
      { level: 'einfach', q: 'Berechne: 2/5 · 2/5', answer: '4/25', tip: 'Zähler mal Zähler, Nenner mal Nenner.' },

      { level: 'mittel', q: 'Urne mit P(rot)=2/5, P(gelb)=3/5 (mit Zurücklegen, 3 Züge). Wie gross ist P(RRR)?', answer: '8/125', tip: '(2/5)³.' },
      { level: 'mittel', q: 'Gleiche Urne: Wie viele verschiedene Reihenfolgen gibt es für "genau eine rote Kugel bei 3 Zügen"?', answer: '3', tip: 'RGG, GRG, GGR — die rote Kugel kann an 3 Stellen stehen.' },
      { level: 'mittel', q: 'Gleiche Urne: Wie gross ist P(RGG) (eine bestimmte Reihenfolge)?', answer: '18/125', tip: '2/5 · 3/5 · 3/5.' },

      { level: 'schwer', q: 'Gleiche Urne (P(rot)=2/5, P(gelb)=3/5, 3 Züge): Wie gross ist P(genau eine rot)?', answer: '54/125', tip: '3 · P(RGG) = 3 · 18/125.' },
      { level: 'schwer', q: '6 nummerierte Kugeln (1-6), zweimal mit Zurücklegen gezogen. Wie viele geordnete Paare gibt es total?', answer: '36', tip: '6 · 6.' },

      { level: 'kanti', q: 'Wie im Original: 3 rote, 2 schwarze Kugeln (mit Zurücklegen, 3 Züge). Wie gross ist P(lauter gleichfarbig)?', answer: '7/25', tip: 'P(RRR)+P(SSS) = 27/125+8/125 = 35/125 = 7/25 — genau wie im Original b3).' },
      { level: 'kanti', q: 'Wie im Original: Nummern 1,1,2,2,3 (rot 1-3, schwarz 1-2), zweimal mit Zurücklegen. Wie viele der 25 geordneten Kugel-Paare ergeben die Summe 5?', answer: '4', tip: 'Nur die Wertepaare (2,3) und (3,2) ergeben 5 — je 2 Kugel-Paare, macht 4 — genau wie im Original c2).' },
    ],
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_ACKER_5',
    verified: true,
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5: Getreideanbau

a) Bauer Josten baut auf seinem Ackerland verschiedene Getreidearten an. In diesem Jahr baut er auf 40% der Fläche Gerste, auf 25% Weizen und auf der restlichen Fläche Mais an. Wie gross sind die Flächen, auf denen die verschiedenen Getreidesorten angebaut werden, wenn Herr Josten insgesamt 25 ha bewirtschaftet? (Zusätzlich: Zeichne eine mögliche Einteilung eines Rechtecks für die drei Flächen ein.)

b) Im Vergleich zum Vorjahr ist der Ertrag an Mais von 300 Tonnen auf 360 Tonnen gestiegen. Berechne den prozentualen Ertragszuwachs.

c) Leider ist der Ertrag von Weizen im Vergleich zum Vorjahr um 30% auf 105 Tonnen gefallen. Berechne, wie gross der Ertrag von Weizen im Vorjahr war.`,
    options: [
      { label: 'a) Gerste 10 ha, Weizen 6.25 ha, Mais 8.75 ha | b) 20% | c) 150 Tonnen', correct: true },
      { label: 'a) Gerste 8 ha, Weizen 5 ha, Mais 12 ha | b) 16.7% | c) 135 Tonnen', correct: false },
      { label: 'a) Gerste 10 ha, Weizen 6.25 ha, Mais 8.75 ha | b) 60% | c) 75 Tonnen', correct: false },
    ],
    teile: [
      { letter: 'a', options: [
        { label: 'Gerste 10 ha, Weizen 6.25 ha, Mais 8.75 ha', correct: true },
        { label: 'Gerste 8 ha, Weizen 5 ha, Mais 12 ha', correct: false },
        { label: 'Gerste 40 ha, Weizen 25 ha, Mais 35 ha', correct: false },
      ] },
      { letter: 'b', options: [
        { label: '20%', correct: true },
        { label: '16.7%', correct: false },
        { label: '60%', correct: false },
      ] },
      { letter: 'c', options: [
        { label: '150 Tonnen', correct: true },
        { label: '135 Tonnen', correct: false },
        { label: '75 Tonnen', correct: false },
      ] },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Prozent vom Ganzen: Prozentsatz zuerst in eine Dezimalzahl umwandeln (÷100), dann mit dem Ganzen multiplizieren.
🔑 Prozentuale Zunahme: Zuwachs = neuer Wert − alter Wert. Prozentsatz = Zuwachs / ALTER Wert · 100.
🔑 Prozentuale Abnahme rückwärts rechnen: Ist ein Wert um p% GEFALLEN, bleiben (100−p)% des ursprünglichen Werts übrig. Der neue Wert entspricht also (100−p)% vom alten Wert — daraus lässt sich der alte Wert zurückrechnen.`,
        },
        {
          title: 'a) Flächen berechnen',
          content: `Gesamtfläche: 25 ha

Gerste (40%): 0.4 · 25 = 10 ha
Weizen (25%): 0.25 · 25 = 6.25 ha
Mais (Rest): 100% − 40% − 25% = 35% → 0.35 · 25 = 8.75 ha

✅ Gerste: 10 ha | Weizen: 6.25 ha | Mais: 8.75 ha

Für die Skizze: Ein Rechteck z.B. in 20 gleich breite Streifen teilen — 8 Streifen Gerste (40%), 5 Streifen Weizen (25%), 7 Streifen Mais (35%).`,
        },
        {
          title: 'b) Prozentualer Ertragszuwachs (Mais)',
          content: `Zuwachs: 360 − 300 = 60 Tonnen

Auf den ALTEN Wert (300) beziehen:
60 / 300 = 0.2 = 20%

✅ Der Ertragszuwachs beträgt 20%.`,
        },
        {
          title: 'c) Ursprünglicher Ertrag (Weizen)',
          content: `Der Ertrag ist um 30% GEFALLEN → es bleiben 100% − 30% = 70% des ursprünglichen Werts übrig.
Diese 70% entsprechen den heutigen 105 Tonnen:

0.7 · x = 105     | ÷0.7
x = 105 / 0.7 = 150

✅ Der Weizenertrag im Vorjahr betrug 150 Tonnen.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Prozent vom Ganzen: Prozentsatz ÷100, dann mit dem Ganzen multiplizieren.
2️⃣ Prozentuale Zunahme: Differenz durch den ALTEN Wert teilen, dann ·100.
3️⃣ Rückwärts rechnen bei einer Abnahme: (100−p)% · ursprünglicher Wert = neuer Wert — nach dem ursprünglichen Wert auflösen.`,
    },

    // ── ÜBUNGEN: aufbauend zu Prozent vom Ganzen, Zunahme und Rückwärtsrechnen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne 40% von 25.', answer: '10', tip: 'Prozentsatz ÷100, dann mit der Zahl multiplizieren.' },
      { level: 'einfach', q: 'Berechne 25% von 25.', answer: '6.25', tip: 'Prozentsatz ÷100, dann mit der Zahl multiplizieren.' },
      { level: 'einfach', q: 'Wenn 40% und 25% schon vergeben sind, wie viel Prozent bleiben vom Ganzen übrig?', answer: '35', tip: '100% minus die bereits vergebenen Prozente.' },

      { level: 'mittel', q: 'Ein Ertrag steigt von 200 auf 240. Um wie viel Prozent ist er gestiegen?', answer: '20', tip: 'Zuwachs durch den ALTEN Wert teilen, dann mal 100.' },
      { level: 'mittel', q: 'Ein Ertrag steigt von 50 auf 60. Um wie viel Prozent ist er gestiegen?', answer: '20', tip: 'Zuwachs durch den ALTEN Wert teilen, dann mal 100.' },
      { level: 'mittel', q: 'Ein Wert ist um 20% gefallen und beträgt jetzt 80. Wie viel Prozent des ursprünglichen Werts sind das?', answer: '80', tip: '100% minus die Abnahme in Prozent.' },

      { level: 'schwer', q: 'Ein Wert fällt um 30% auf 70. Wie gross war der ursprüngliche Wert?', answer: '100', tip: 'Der neue Wert entspricht 70% des ursprünglichen Werts — Gleichung aufstellen und nach dem alten Wert auflösen.' },
      { level: 'schwer', q: 'Ein Wert fällt um 10% auf 90. Wie gross war der ursprüngliche Wert?', answer: '100', tip: 'Der neue Wert entspricht 90% des ursprünglichen Werts.' },

      { level: 'kanti', q: 'Ein Ertrag steigt von 300 auf 360. Um wie viel Prozent ist er gestiegen?', answer: '20', tip: 'Genau wie im Original b): Zuwachs (60) durch den alten Wert (300) teilen.' },
      { level: 'kanti', q: 'Ein Ertrag fällt um 30% auf 105. Wie gross war der Ertrag davor?', answer: '150', tip: 'Genau wie im Original c): 105 entspricht 70% vom ursprünglichen Wert — 0.7·x=105 nach x auflösen.' },
    ],
  },

// ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_FLAECHE_6',
    verified: true,
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=8',
    figureUrl: '/figuren/2025_flaeche6.png',
    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2025',
    topic: 'Geometrie',
    questionText: `Aufgabe 6: Das grüne Sechseck A und das rote Trapez B besitzen den gleichen Flächeninhalt.
Das Sechseck A hat eine obere Breite von 5 cm, eine linke Höhe von x, eine rechte Höhe von 2 cm (oben) und eine untere Breite von 2 cm (links). Das Trapez B schliesst rechts an A an: seine obere Seite (3 cm, = 5 cm − 2 cm) und untere Seite (6 cm) sind parallel, die Höhe des Trapezes ist (x − 2) cm.
Berechne x.
Beachte: das Schaubild ist nicht massstabsgetreu.`,
    options: [
      { label: 'x = 6', correct: true },
      { label: 'x = 8', correct: false },
      { label: 'x = 5', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Sechseck als Rechteck minus Rechteck: Ein L-förmiges Sechseck lässt sich als grosses Rechteck minus einem kleineren, herausgeschnittenen Rechteck berechnen.
📐 Trapezfläche: A = (a + c)/2 · h, wobei a und c die parallelen Seiten und h die Höhe sind.
🔑 Strategie: Beide Flächen in Abhängigkeit von x aufstellen, gleichsetzen, nach x auflösen.`,
        },
        {
          title: 'Fläche des Sechsecks A aufstellen',
          content: `Das Sechseck A ist ein grosses Rechteck (Breite 5, Höhe x) minus einem kleinen Rechteck unten rechts (Breite 5−2=3, Höhe x−2):

A = 5·x − 3·(x−2)
A = 5x − 3x + 6
A = 2x + 6`,
        },
        {
          title: 'Fläche des Trapezes B aufstellen',
          content: `Das Trapez B hat die parallelen Seiten 3 (oben, = 5−2) und 6 (unten) sowie die Höhe (x−2):

B = (3 + 6)/2 · (x−2)
B = 4.5 · (x−2)
B = 4.5x − 9`,
        },
        {
          title: 'Flächen gleichsetzen und nach x auflösen',
          content: `A = B
2x + 6 = 4.5x − 9     | −2x, +9
15 = 2.5x     | ÷2.5
x = 6

Probe: A = 2·6+6 = 18. B = 4.5·6−9 = 27−9 = 18. ✅ Stimmt überein!

✅ Ergebnis: x = 6`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Zusammengesetzte Flächen (Sechseck) als Rechteck minus Rechteck ausdrücken.
2️⃣ Trapezformel (a+c)/2 · h für die zweite Fläche verwenden.
3️⃣ Beide Flächenterme in Abhängigkeit von x gleichsetzen.
4️⃣ Nach x auflösen und mit einer Probe kontrollieren.`,
    },

    // ── ÜBUNGEN: aufbauend zu zusammengesetzten Flächen, Trapezformel und Gleichungen mit x.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Ein Rechteck (Breite 5, Höhe 4) hat ein kleineres Rechteck (Breite 2, Höhe 1) ausgeschnitten. Wie gross ist die Restfläche?', answer: '18', tip: 'Grosses Rechteck minus kleines Rechteck.' },
      { level: 'einfach', q: 'Berechne die Fläche eines Trapezes mit parallelen Seiten 3 und 6 und Höhe 4.', answer: '18', tip: 'Fläche = (a+c)/2 · h.' },
      { level: 'einfach', q: 'Löse: 2x + 6 = 18', answer: '6', tip: 'Erst 6 abziehen, dann durch 2 teilen.' },

      { level: 'mittel', q: 'Ein Sechseck besteht aus einem Rechteck (Breite 5, Höhe x) minus einem Rechteck (Breite 3, Höhe x−2). Stelle den Flächenterm auf und vereinfache.', answer: '2x+6', tip: '5x − 3(x−2) ausmultiplizieren und zusammenfassen.' },
      { level: 'mittel', q: 'Ein Trapez mit parallelen Seiten 3 und 6 hat die Höhe (x−2). Stelle den Flächenterm auf und vereinfache.', answer: '4.5x-9', tip: '(3+6)/2 · (x−2) ausmultiplizieren.' },
      { level: 'mittel', q: 'Löse: 2x + 6 = 4x - 4', answer: '5', tip: 'x-Terme auf eine Seite, Zahlen auf die andere.' },

      { level: 'schwer', q: 'Löse: 2x + 6 = 4.5x - 9', answer: '6', tip: 'x-Terme auf eine Seite, Zahlen auf die andere, dann durch den Koeffizienten teilen.' },
      { level: 'schwer', q: 'Ein Sechseck (Fläche 2x+6) und ein Trapez (Fläche 3x-6) sind flächengleich. Bestimme x.', answer: '12', tip: 'Beide Terme gleichsetzen und nach x auflösen.' },

      { level: 'kanti', q: 'Wie im Original: Sechseck A = 2x+6 und Trapez B = 4.5x-9 sind flächengleich. Bestimme x.', answer: '6', tip: 'Gleichsetzen: 2x+6 = 4.5x-9, dann nach x auflösen.' },
      { level: 'kanti', q: 'Wie im Original: Setze x=6 in beide Flächenterme (2x+6 und 4.5x-9) ein. Was ist der gemeinsame Flächenwert?', answer: '18', tip: '2·6+6=18 und 4.5·6-9=18 — beide sollten übereinstimmen (Probe).' },
    ],
  },
];