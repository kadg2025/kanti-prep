
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
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Gleichungen',
    questionText: `Aufgabe 2: Löse folgende Gleichungen.

a) [Gleichung aus PDF einsetzen]
b) [Gleichung aus PDF einsetzen]`,
    options: [
      { label: 'Bitte PDF-Ausschnitt von Aufgabe 2 ergänzen', correct: true },
      { label: 'Platzhalter', correct: false },
      { label: 'Platzhalter', correct: false },
    ],
    solution: {
      intro: `Die beiden Gleichungen sind im PDF-Textauszug nicht lesbar genug.`,
      steps: [
        {
          title: '📖 Vorgehen',
          content: `1️⃣ Klammern auflösen.
2️⃣ Brüche oder Dezimalzahlen vereinfachen.
3️⃣ Alle x-Terme auf eine Seite bringen.
4️⃣ Zahlen auf die andere Seite bringen.
5️⃣ Durch den Koeffizienten teilen.`,
        },
        {
          title: '⚠️ Noch ergänzen',
          content: `Sobald du mir Seite 3 als Screenshot schickst, trage ich die Lösungen direkt ein.`,
        },
      ],
      tip: `🍳 Kochrezept:
Ordnung ist alles: erst vereinfachen, dann umformen, dann lösen.`,
    },
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

  // ── AUFGABE 4a ────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_URNE_4a',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4a: In einer Urne liegen 3 rote und 2 schwarze Kugeln. Es werden drei Kugeln nacheinander mit Zurücklegen gezogen und jeweils die Farbe notiert.

Erstelle eine Baumdarstellung. Du musst keine Wahrscheinlichkeiten eintragen.`,
    options: [
      { label: 'Start → R/S, dann von jedem Ast wieder R/S, dann nochmals R/S', correct: true },
      { label: 'Nur zwei Stufen zeichnen', correct: false },
      { label: 'Ohne Zurücklegen zeichnen', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Baumstruktur',
          content: `Da dreimal gezogen wird, hat der Baum 3 Stufen.
Auf jeder Stufe gibt es 2 Möglichkeiten:
- R (rot)
- S (schwarz)`,
        },
        {
          title: 'Warum immer gleich?',
          content: `Es wird mit Zurücklegen gezogen.
Deshalb bleibt die Urne jedes Mal gleich zusammengesetzt:
3 rote, 2 schwarze Kugeln.`,
        },
        {
          title: 'Endpfade',
          content: `Die möglichen Farbfolgen sind:
RRR, RRS, RSR, RSS, SRR, SRS, SSR, SSS`,
        },
      ],
      tip: `🍳 Kochrezept:
Bei drei Ziehungen braucht der Baum immer genau drei Ebenen.`,
    },
  },

  // ── AUFGABE 4b1 ───────────────────────────────────────────
  {
    id: 'M1_2025_OTR_URNE_4b1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4b1: Wie gross ist die Wahrscheinlichkeit, dass drei rote Kugeln gezogen werden?`,
    options: [
      { label: '27/125', correct: true },
      { label: '9/25', correct: false },
      { label: '3/5', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Wahrscheinlichkeit für Rot',
          content: `P(Rot) = 3/5`,
        },
        {
          title: 'Dreimal rot',
          content: `P(RRR) = 3/5 · 3/5 · 3/5
= 27/125`,
        },
        {
          title: 'Ergebnis',
          content: `✅ Die Wahrscheinlichkeit beträgt 27/125.`,
        },
      ],
      tip: `🍳 Kochrezept:
„UND“ bedeutet multiplizieren.`,
    },
  },

  // ── AUFGABE 4b2 ───────────────────────────────────────────
  {
    id: 'M1_2025_OTR_URNE_4b2',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4b2: Wie gross ist die Wahrscheinlichkeit, dass genau zwei rote Kugeln dabei sind?`,
    options: [
      { label: '54/125', correct: true },
      { label: '27/125', correct: false },
      { label: '72/125', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Mögliche Reihenfolgen',
          content: `Genau zwei rote Kugeln bedeuten:
RRS, RSR oder SRR
Das sind 3 Möglichkeiten.`,
        },
        {
          title: 'Eine Möglichkeit berechnen',
          content: `P(RRS) = 3/5 · 3/5 · 2/5 = 18/125`,
        },
        {
          title: 'Alle Möglichkeiten addieren',
          content: `3 · 18/125 = 54/125

✅ Die Wahrscheinlichkeit beträgt 54/125.`,
        },
      ],
      tip: `🍳 Kochrezept:
Bei „genau zwei rot“ zuerst alle passenden Farbfolgen sammeln.`,
    },
  },

  // ── AUFGABE 4b3 ───────────────────────────────────────────
  {
    id: 'M1_2025_OTR_URNE_4b3',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4b3: Wie gross ist die Wahrscheinlichkeit, dass lauter gleichfarbige Kugeln gezogen werden?`,
    options: [
      { label: '7/25', correct: true },
      { label: '35/125', correct: false },
      { label: '27/125', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gleiche Farbe',
          content: `Es gibt nur zwei Möglichkeiten:
- alle rot
- alle schwarz`,
        },
        {
          title: 'Beide Fälle berechnen',
          content: `P(RRR) = 3/5 · 3/5 · 3/5 = 27/125
P(SSS) = 2/5 · 2/5 · 2/5 = 8/125`,
        },
        {
          title: 'Addieren',
          content: `27/125 + 8/125 = 35/125 = 7/25

✅ Die Wahrscheinlichkeit beträgt 7/25.`,
        },
      ],
      tip: `🍳 Kochrezept:
Bei „ODER“ addierst du die passenden Fälle.`,
    },
  },

  // ── AUFGABE 4c1 ───────────────────────────────────────────
  {
    id: 'M1_2025_OTR_URNE_4c1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4c1: Nun werden die Kugeln jeweils durchnummeriert und man zieht nacheinander zwei Kugeln mit Zurücklegen. Wie gross ist die Wahrscheinlichkeit, dass die erste gezogene Kugel die Nummer 1 und die zweite gezogene Kugel die Nummer 3 besitzt?`,
    options: [
      { label: '1/25', correct: true },
      { label: '2/25', correct: false },
      { label: '1/5', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Einzelwahrscheinlichkeiten',
          content: `Es gibt insgesamt 5 durchnummerierte Kugeln.
P(erste Kugel = 1) = 1/5
P(zweite Kugel = 3) = 1/5`,
        },
        {
          title: 'Mit Zurücklegen',
          content: `Die Ziehungen sind unabhängig.
Darum:
1/5 · 1/5 = 1/25`,
        },
        {
          title: 'Ergebnis',
          content: `✅ Die Wahrscheinlichkeit beträgt 1/25.`,
        },
      ],
      tip: `🍳 Kochrezept:
Bei festen Nummern einfach Einzelwahrscheinlichkeiten multiplizieren.`,
    },
  },

  // ── AUFGABE 4c2 ───────────────────────────────────────────
  {
    id: 'M1_2025_OTR_URNE_4c2',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4c2: Wie gross ist die Wahrscheinlichkeit, dass die Summe der beiden gezogenen Kugeln fünf beträgt?`,
    options: [
      { label: '4/25', correct: true },
      { label: '5/25', correct: false },
      { label: '2/5', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Mögliche Zahlenpaare',
          content: `Mit den Nummern 1 bis 5 ergibt die Summe 5 bei:
(1,4), (2,3), (3,2), (4,1)

Das sind 4 günstige Fälle.`,
        },
        {
          title: 'Alle möglichen Fälle',
          content: `Es werden zweimal mit Zurücklegen 5 nummerierte Kugeln gezogen.
Also gibt es 5 · 5 = 25 gleich wahrscheinliche geordnete Fälle.`,
        },
        {
          title: 'Wahrscheinlichkeit',
          content: `4 von 25 Fällen sind günstig.

✅ Die Wahrscheinlichkeit beträgt 4/25.`,
        },
      ],
      tip: `🍳 Kochrezept:
Bei Nummern-Aufgaben zuerst alle passenden geordneten Paare auflisten.`,
    },
  },

  // ── AUFGABE 5a1 ───────────────────────────────────────────
  {
    id: 'M1_2025_OTR_ACKER_5a1',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5a(1): Bauer Josten baut auf 40% der Fläche Gerste, auf 25% Weizen und auf der restlichen Fläche Mais an. Wie gross sind die Flächen, wenn er insgesamt 25 ha bewirtschaftet?`,
    options: [
      { label: 'Gerste 10 ha, Weizen 6.25 ha, Mais 8.75 ha', correct: true },
      { label: 'Gerste 8 ha, Weizen 5 ha, Mais 12 ha', correct: false },
      { label: 'Gerste 10 ha, Weizen 5 ha, Mais 10 ha', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gerste',
          content: `40% von 25 ha = 0.4 · 25 = 10 ha`,
        },
        {
          title: 'Weizen',
          content: `25% von 25 ha = 0.25 · 25 = 6.25 ha`,
        },
        {
          title: 'Mais',
          content: `Rest = 100% - 40% - 25% = 35%
35% von 25 ha = 0.35 · 25 = 8.75 ha`,
        },
        {
          title: 'Ergebnis',
          content: `✅ Gerste: 10 ha
✅ Weizen: 6.25 ha
✅ Mais: 8.75 ha`,
        },
      ],
      tip: `🍳 Kochrezept:
Prozent immer erst in Dezimalzahl umwandeln, dann mit dem Ganzen multiplizieren.`,
    },
  },

  // ── AUFGABE 5a2 ───────────────────────────────────────────
  {
    id: 'M1_2025_OTR_ACKER_5a2',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5a(2): Zeichne eine mögliche Einteilung des Rechtecks für Gerste, Weizen und Mais ein.`,
    options: [
      { label: 'Jede Einteilung mit 40%, 25% und 35% ist möglich', correct: true },
      { label: 'Nur eine einzige Einteilung ist richtig', correct: false },
      { label: 'Gerste und Weizen müssen gleich gross sein', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Was ist wichtig?',
          content: `Nicht die genaue Form ist entscheidend, sondern die richtigen Flächenanteile:
- Gerste 40%
- Weizen 25%
- Mais 35%`,
        },
        {
          title: 'Mögliche Einteilung',
          content: `Zum Beispiel kann man ein Rechteck in 20 gleich breite Streifen teilen:
- 8 Streifen Gerste
- 5 Streifen Weizen
- 7 Streifen Mais`,
        },
      ],
      tip: `🍳 Kochrezept:
Wenn Zeichnen verlangt ist, hilft ein Rechteck mit gleich grossen Teilstreifen.`,
    },
  },

  // ── AUFGABE 5b ────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_PROZ_5b',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5b: Im Vergleich zum Vorjahr ist der Ertrag an Mais von 300 Tonnen auf 360 Tonnen gestiegen. Berechne den prozentualen Ertragszuwachs.`,
    options: [
      { label: '20%', correct: true },
      { label: '16.7%', correct: false },
      { label: '60%', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Zuwachs berechnen',
          content: `360 - 300 = 60 Tonnen`,
        },
        {
          title: 'Auf den Anfangswert beziehen',
          content: `60 / 300 = 0.2 = 20%`,
        },
        {
          title: 'Ergebnis',
          content: `✅ Der Ertragszuwachs beträgt 20%.`,
        },
      ],
      tip: `🍳 Kochrezept:
Prozentuale Veränderung immer durch den alten Wert teilen.`,
    },
  },

  // ── AUFGABE 5c ────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_PROZ_5c',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5c: Leider ist der Ertrag von Weizen im Vergleich zum Vorjahr um 30% auf 105 Tonnen gefallen. Berechne, wie gross der Ertrag im Vorjahr war.`,
    options: [
      { label: '150 Tonnen', correct: true },
      { label: '135 Tonnen', correct: false },
      { label: '75 Tonnen', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Bedeutung von 30% gefallen',
          content: `Wenn etwas um 30% fällt, bleiben 70% des ursprünglichen Werts übrig.`,
        },
        {
          title: 'Gleichung aufstellen',
          content: `0.7 · x = 105`,
        },
        {
          title: 'Lösen',
          content: `x = 105 / 0.7 = 150`,
        },
        {
          title: 'Ergebnis',
          content: `✅ Der Weizenertrag im Vorjahr betrug 150 Tonnen.`,
        },
      ],
      tip: `🍳 Kochrezept:
Bei einer Abnahme auf den neuen Wert nie 30% direkt addieren — erst den Restprozentsatz bestimmen.`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M1_2025_OTR_FLAECHE_6',
    year: 2025,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179274/AP25_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Geometrie',
    questionText: `Aufgabe 6: Das grüne Sechseck A und das rote Trapez B besitzen den gleichen Flächeninhalt. Berechne x.`,
    options: [
      { label: 'Bitte Bildausschnitt von Aufgabe 6 ergänzen', correct: true },
      { label: 'Platzhalter', correct: false },
      { label: 'Platzhalter', correct: false },
    ],
    solution: {
      intro: `Die Massangaben und die Skizze sind im Textauszug nicht lesbar.`,
      steps: [
        {
          title: '📖 Vorgehen',
          content: `1️⃣ Fläche des Sechsecks berechnen oder zerlegen.
2️⃣ Fläche des Trapezes mit der Trapezformel berechnen.
3️⃣ Beide Flächen gleichsetzen.
4️⃣ Nach x auflösen.`,
        },
        {
          title: '⚠️ Noch ergänzen',
          content: `Schick mir den Bildausschnitt von Seite 8, dann rechne ich x exakt aus.`,
        },
      ],
      tip: `🍳 Kochrezept:
Bei Flächenvergleich immer beide Figuren in bekannte Teilflächen zerlegen.`,
    },
  },
];