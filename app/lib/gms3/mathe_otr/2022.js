
import { frac, sqrt } from '../../mathFormat';

export const questions2022_oTR = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'M1_2022_OTR_TERM_1',
    year: 2022,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132684/AP22_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 1: Term berechnen

Berechne den Wert des Terms ${frac('2x³', 'x² − 2')} für folgende Werte von x:

a) x = 2
b) x = 0
c) x = -1
d) x = ${frac('1', '2')}`,
    options: [
      { label: 'a) 8, b) 0, c) 2, d) -1/7', correct: true },
      { label: 'a) 4, b) 0, c) -2, d) 1/7', correct: false },
      { label: 'a) 8, b) 2, c) 2, d) -1/7', correct: false },
    ],
    solution: {
      intro: `Wir setzen die gegebenen Werte direkt in den Term ein und rechnen sorgfältig aus.`,
      steps: [
        {
          title: 'a) x = 2',
          content: `(2·2³) / (2² - 2)
= (2·8) / (4 - 2)
= 16 / 2
= 8

✅ Ergebnis: 8`,
        },
        {
          title: 'b) x = 0',
          content: `(2·0³) / (0² - 2)
= 0 / (-2)
= 0

✅ Ergebnis: 0`,
        },
        {
          title: 'c) x = -1',
          content: `(2·(-1)³) / ((-1)² - 2)
= (2·(-1)) / (1 - 2)
= -2 / -1
= 2

✅ Ergebnis: 2`,
        },
        {
          title: 'd) x = 1/2',
          content: `(2·(1/2)³) / ((1/2)² - 2)
= (2·1/8) / (1/4 - 2)
= (1/4) / (-7/4)
= 1/4 · 4/(-7)
= -1/7

✅ Ergebnis: -1/7`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147235/AP22_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Wert für x sauber einsetzen.
2️⃣ Zähler und Nenner separat berechnen.
3️⃣ Erst am Schluss dividieren.
4️⃣ Bei Brüchen immer vollständig kürzen.`,
    },

    // ── ÜBUNGEN: aufbauend zu "Wert einsetzen", Vorzeichen-Regeln und Bruch-Division.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 2 · 2³', answer: '16', tip: 'Erst die Potenz, dann multiplizieren.' },
      { level: 'einfach', q: 'Berechne: 2² − 2', answer: '2', tip: 'Erst quadrieren, dann subtrahieren.' },
      { level: 'einfach', q: 'Berechne: 16 / 2', answer: '8', tip: 'Teile den Zähler durch den Nenner.' },

      { level: 'mittel', q: 'Berechne: 2 · 0³', answer: '0', tip: 'Null hoch irgendetwas bleibt null.' },
      { level: 'mittel', q: 'Berechne: 2 · (−1)³', answer: '-2', tip: 'Eine negative Zahl hoch 3 bleibt negativ.' },
      { level: 'mittel', q: 'Berechne: (−1)² − 2', answer: '-1', tip: 'Eine negative Zahl im Quadrat wird positiv.' },

      { level: 'schwer', q: 'Berechne: (−2) / (−1)', answer: '2', tip: 'Minus geteilt durch Minus ergibt Plus.' },
      { level: 'schwer', q: 'Berechne: 2 · (1/2)³', answer: '1/4', tip: 'Bruch hoch 3: Zähler und Nenner einzeln hoch 3 nehmen.' },

      { level: 'kanti', q: 'Berechne: (1/2)² − 2', answer: '-7/4', tip: 'Erst quadrieren, dann von 2 den Bruch abziehen — gemeinsamen Nenner suchen.' },
      { level: 'kanti', q: 'Berechne: (1/4) / (−7/4)', answer: '-1/7', tip: 'Division von Brüchen: mit dem Kehrwert multiplizieren.' },
    ],
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'M1_2022_OTR_GLEI_2',
    year: 2022,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132684/AP22_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Gleichungen',
    questionText: `Aufgabe 2: Gleichungen lösen

Löse die folgenden Gleichungen nach x auf:

a) x - 5 - (5 - x) = 0
b) -3(x + 7) = 7(x - 3)
c) (3/4)(x - 4) + x/2 = 3(x + 1/6)`,
    options: [
      { label: 'a) x = 5, b) x = 0, c) x = -2', correct: true },
      { label: 'a) x = -5, b) x = 0, c) x = 2', correct: false },
      { label: 'a) x = 5, b) x = 3, c) x = -2', correct: false },
    ],
    solution: {
      intro: `Wir lösen jede Gleichung Schritt für Schritt durch Klammern auflösen und Umformen.`,
      steps: [
        {
          title: 'a) x - 5 - (5 - x) = 0',
          content: `x - 5 - 5 + x = 0
2x - 10 = 0
2x = 10
x = 5

✅ Ergebnis: x = 5`,
        },
        {
          title: 'b) -3(x + 7) = 7(x - 3)',
          content: `-3x - 21 = 7x - 21
-21 = 10x - 21
0 = 10x
x = 0

✅ Ergebnis: x = 0`,
        },
        {
          title: 'c) (3/4)(x - 4) + x/2 = 3(x + 1/6)',
          content: `(3/4)x - 3 + x/2 = 3x + 1/2
(3/4)x + (2/4)x - 3 = 3x + 1/2
(5/4)x - 3 = 3x + 1/2

Mit 4 multiplizieren:
5x - 12 = 12x + 2
-14 = 7x
x = -2

✅ Ergebnis: x = -2`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147235/AP22_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Klammern auflösen.
2️⃣ Gleichartige Terme zusammenfassen.
3️⃣ Alle x-Terme auf eine Seite bringen.
4️⃣ Zum Schluss durch den Koeffizienten teilen.`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'M1_2022_OTR_TERM_3',
    year: 2022,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132684/AP22_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 3: Terme vereinfachen

a) Vereinfache so weit wie möglich und gib das Resultat ohne Klammern an (Bruch fertig gekürzt):
${frac('3p + 9q', 'p + 3q')} · ${frac('2p + 6q', '12')}

b) Fasse so weit wie möglich zusammen:
${frac('3', '5')} · ${sqrt(frac('a', '3'))} · ${frac('1', '4')} · ${sqrt(frac('4a', '3'))} · ${sqrt('49')}

c) Bestimme die Lösung für x:
a¹² : a⁴ = aˣ`,
    options: [
      { label: 'a) 1/2p+3/2q, b) 7a/10, c) x = 8', correct: true },
      { label: 'a) 1/4p+3/4q, b) 7a/5, c) x = 3', correct: false },
      { label: 'a) 1/2p+3/2q, b) 7a/20, c) x = 16', correct: false },
    ],
    solution: {
      intro: `Hier arbeiten wir mit Kürzen, Wurzelregeln und Potenzregeln. Alles Schritt für Schritt.`,
      steps: [
        {
          title: 'a) Bruchterm vereinfachen',
          content: `(3p + 9q) / (p + 3q) · (2p + 6q) / 12

3p + 9q = 3(p + 3q)
2p + 6q = 2(p + 3q)

= (3(p+3q) / (p+3q)) · (2(p+3q) / 12)
= 3 · (2(p+3q) / 12)
= 6(p+3q) / 12
= (p+3q)/2
= 1/2 p + 3/2 q

✅ Ergebnis: 1/2 p + 3/2 q`,
        },
        {
          title: 'b) Wurzelterm vereinfachen',
          content: `3/5 · √(a/3) · 1/4 · √(4a/3) · √49

Zuerst √49 = 7

Dann:
√(a/3) · √(4a/3) = √((a/3)·(4a/3)) = √(4a²/9) = 2a/3

Also:
3/5 · 1/4 · 7 · (2a/3)
= 21/20 · 2a/3
= 42a/60
= 7a/10

✅ Ergebnis: 7a/10`,
        },
        {
          title: 'c) Potenzgleichung',
          content: `a¹² : a⁴ = a^(12-4) = a⁸

Also gilt:
aˣ = a⁸
→ x = 8

✅ Ergebnis: x = 8`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147235/AP22_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Faktorisieren, damit man kürzen kann.
2️⃣ Bei Wurzeln: √a · √b = √(ab).
3️⃣ Bei Potenzen: aᵐ : aⁿ = aᵐ⁻ⁿ.`,
    },

    // ── ÜBUNGEN: aufbauend zu Faktorisieren/Kürzen, Wurzeln und Potenzregeln.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Faktorisiere: 3p+9q. Was ist der gemeinsame Faktor?', answer: '3', tip: 'ggT der beiden Zahlen vor p und q.' },
      { level: 'einfach', q: 'Berechne: √49', answer: '7', tip: 'Welche Zahl mal sich selbst ergibt 49?' },
      { level: 'einfach', q: 'Bestimme x: a⁵ : a² = aˣ', answer: '3', tip: 'Bei Division mit gleicher Basis: Exponenten subtrahieren.' },

      { level: 'mittel', q: 'Vereinfache: (3p+9q)/(p+3q)', answer: '3', tip: 'Klammere im Zähler 3 aus — dann kürzt sich (p+3q) weg.' },
      { level: 'mittel', q: 'Berechne: 3/5 · 1/4', answer: '3/20', tip: 'Zähler mal Zähler, Nenner mal Nenner.' },
      { level: 'mittel', q: 'Bestimme x: a¹⁰ : a³ = aˣ', answer: '7', tip: 'Exponenten subtrahieren.' },

      { level: 'schwer', q: 'Vereinfache: (2p+6q)/12', answer: '(p+3q)/6', tip: 'Klammere im Zähler 2 aus, dann kürze mit dem Nenner.' },
      { level: 'schwer', q: 'Berechne: 3/20 · 7', answer: '21/20', tip: 'Multipliziere den Bruch mit der ganzen Zahl.' },

      { level: 'kanti', q: 'Vereinfache: (3p+9q)/(p+3q) · (2p+6q)/12', answer: '1/2p+3/2q', tip: 'Beide Brüche einzeln kürzen, dann multiplizieren.' },
      { level: 'kanti', q: 'Bestimme x: a¹² : a⁴ = aˣ', answer: '8', tip: 'Exponenten subtrahieren — genau wie im Original.' },
    ],
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'M1_2022_OTR_TEXT_4',
    year: 2022,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132684/AP22_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Proportionalität',
    questionText: `Aufgabe 4: Sachaufgaben

a) Für 5 Tage kostet eine Klassenfahrt 250 Fr pro Person. Wie viel kostet sie pro Person für 7 Tage?
b) Jörg muss 20-mal gehen, wenn er jedes Mal 6 Steine trägt. Wie oft muss er gehen, wenn er 8 Steine trägt?
c) Ein 120 m langes Seil wird so geteilt, dass ein Stück 2/3 der Länge des anderen ist. Wie lang ist das kürzere Stück?`,
    options: [
      { label: 'a) 350 Fr, b) 15-mal, c) 48 m', correct: true },
      { label: 'a) 300 Fr, b) 16-mal, c) 40 m', correct: false },
      { label: 'a) 350 Fr, b) 15-mal, c) 72 m', correct: false },
    ],
    solution: {
      intro: `Hier kommen Proportionalität, Dreisatz und Gleichungen vor.`,
      steps: [
        {
          title: 'a) Klassenfahrt',
          content: `5 Tage → 250 Fr
1 Tag → 250 / 5 = 50 Fr
7 Tage → 7 · 50 = 350 Fr

✅ Ergebnis: 350 Fr`,
        },
        {
          title: 'b) Steine tragen',
          content: `Gesamtzahl Steine:
20 · 6 = 120 Steine

Wenn Jörg 8 Steine pro Gang trägt:
120 / 8 = 15

✅ Ergebnis: 15-mal`,
        },
        {
          title: 'c) Seil teilen',
          content: `Sei das längere Stück x.
Dann ist das kürzere Stück (2/3)x.

Zusammen:
x + (2/3)x = 120
(5/3)x = 120
x = 120 · 3/5 = 72

Kürzeres Stück:
(2/3) · 72 = 48

✅ Ergebnis: 48 m`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147235/AP22_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Bei proportionalen Aufgaben zuerst auf 1 Einheit rechnen.
2️⃣ Bei Gesamtmengen: erst Total bestimmen.
3️⃣ Bei Verhältnis-Aufgaben eine Gleichung aufstellen.`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'M1_2022_OTR_PROZ_5',
    year: 2022,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132684/AP22_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5: Weihnachtssocken

Ein Duo-Pack mit 2 Paar Socken kostet 3.80 Fr.
Familie Meier möchte 7 Paar, Familie Bühler 9 Paar.

a) Welchen Betrag muss Frau Meier für ihre Familie und für Familie Bühler berechnen?
b) Nach Weihnachten gibt es ein Fünferpack mit 5 Paar für 7.60 Fr.
Wie viel Prozent billiger ist jetzt ein Paar Socken?`,
    options: [
      { label: 'a) Meier: 13.30 Fr, Bühler: 17.10 Fr, b) 20%', correct: true },
      { label: 'a) Meier: 13.30 Fr, Bühler: 15.20 Fr, b) 25%', correct: false },
      { label: 'a) Meier: 14.00 Fr, Bühler: 17.10 Fr, b) 20%', correct: false },
    ],
    solution: {
      intro: `Hier rechnen wir zuerst den Preis pro Paar aus und dann mit Prozenten.`,
      steps: [
        {
          title: 'a) Preis pro Paar und Familienkosten',
          content: `Duo-Pack: 2 Paar kosten 3.80 Fr
→ 1 Paar kostet 3.80 / 2 = 1.90 Fr

Familie Meier:
7 · 1.90 = 13.30 Fr

Familie Bühler:
9 · 1.90 = 17.10 Fr

✅ Meier: 13.30 Fr
✅ Bühler: 17.10 Fr`,
        },
        {
          title: 'b) Prozentuale Verbilligung',
          content: `Neuer Preis:
5 Paar kosten 7.60 Fr
→ 1 Paar kostet 7.60 / 5 = 1.52 Fr

Preisreduktion pro Paar:
1.90 - 1.52 = 0.38 Fr

Prozentuale Verbilligung:
0.38 / 1.90 = 0.20 = 20%

✅ Ergebnis: 20% billiger`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147235/AP22_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Immer zuerst den Preis pro Stück/Paar berechnen.
2️⃣ Differenz zwischen altem und neuem Preis bilden.
3️⃣ Prozent = Differenz / alter Preis · 100.`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'M1_2022_OTR_WINKEL_6',
    year: 2022,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132684/AP22_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Geometrie',
    questionText: `Aufgabe 6: Winkel bestimmen

Bestimme die Winkel α, β und γ.
In der Figur sind Längen und Winkel nicht massstabsgetreu.`,
    options: [
      { label: 'α = 67.5°, β = 45°, γ = 78.75°', correct: true },
      { label: 'α = 67.5°, β = 78.75°, γ = 45°', correct: false },
      { label: 'α = 45°, β = 67.5°, γ = 78.75°', correct: false },
    ],
    solution: {
      intro: `Die exakten Werte stehen in der offiziellen Lösung. Da die Figur im PDF wichtig ist, ist der vollständige geometrische Lösungsweg ohne Zeichnung nur eingeschränkt nachvollziehbar.`,
      steps: [
        {
          title: 'Ergebnisse',
          content: `Aus der offiziellen Lösung:
α = 67.5°
β = 45°
γ = 78.75°

✅ Das sind die gesuchten Winkel.`,
        },
        {
          title: 'Hinweis zur Figur',
          content: `Bei solchen Winkelaufgaben braucht man meist Nebenwinkel, Scheitelwinkel, Winkelsumme im Dreieck oder Parallelenwinkel. Für den vollständigen Schritt-für-Schritt-Weg ist die Figur aus der Prüfung entscheidend.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit der Figur zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147235/AP22_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Alle bekannten Winkel in die Figur eintragen.
2️⃣ Nebenwinkel und Scheitelwinkel nutzen.
3️⃣ Winkelsumme im Dreieck = 180°.
4️⃣ Bei Parallelen: Z-, F- und Wechselwinkel prüfen.`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'M1_2022_OTR_WUERFEL_7',
    year: 2022,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132684/AP22_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Körper & Netze',
    questionText: `Aufgabe 7: Würfel mit Mustern

Ein Würfel hat auf jeder Fläche ein anderes Muster. Zwei Ansichten sind gegeben.

a) Ergänze die obere Fläche in der abgebildeten Ansicht mit dem korrekten Muster.
b) Ergänze das Würfelnetz mit den korrekten Mustern.`,
    options: [
      { label: 'Mit der offiziellen Würfel-Lösung ergänzen', correct: true },
      { label: 'Beliebige Anordnung der Muster ist möglich', correct: false },
      { label: 'Die obere Fläche kann nicht bestimmt werden', correct: false },
    ],
    solution: {
      intro: `Das ist eine reine Visualisierungs- und Raumvorstellungsaufgabe. Die korrekte Lösung hängt direkt von den abgebildeten Mustern und Würfelansichten ab.`,
      steps: [
        {
          title: 'a) Obere Fläche bestimmen',
          content: `Man vergleicht die zwei gegebenen Würfelansichten und schaut, welche Flächen nebeneinander liegen und welche einander gegenüberliegen. So lässt sich das fehlende Muster auf der oberen Fläche eindeutig bestimmen.`,
        },
        {
          title: 'b) Würfelnetz ergänzen',
          content: `Im Netz müssen die Muster so eingetragen werden, dass sie nach dem Falten genau dieselben Nachbarschaften wie in den zwei Würfelbildern ergeben. Die offizielle Lösung zeigt die korrekte Platzierung der Muster.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung mit den ergänzten Mustern zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147235/AP22_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Prüfe, welche Flächen Nachbarn sind.
2️⃣ Prüfe, welche Flächen nie gleichzeitig sichtbar sind → oft Gegenflächen.
3️⃣ Übertrage diese Beziehungen ins Netz.
4️⃣ Immer kontrollieren: Nach dem Falten müssen die Muster genau passen.`,
    },
  },

];

