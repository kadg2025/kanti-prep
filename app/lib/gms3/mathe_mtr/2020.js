
export const questions2020 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_GESCH_1',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106465/AP20_GMS3_M1_mTr_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Bewegung & Geschwindigkeit',
    questionText: `Aufgabe 1: Bike & Run

Ein Athlet will einen Bike&Run in 10% besserer Zeit als sein bisheriges Resultat von 9h 40min absolvieren.

Die Strecke: 180 km Velo + 42.195 km Laufen.
Velo: 32 km/h. Transition (Wechsel): 4 min 30 s.

a) Wie lange hat er für die Laufstrecke? (in min und s)
b) Welches Lauftempo (min/km) muss er halten?`,
    options: [
      { label: 'a) 180 min | b) 4 min 16 s / km', correct: true },
      { label: 'a) 195 min | b) 4 min 37 s / km', correct: false },
      { label: 'a) 165 min | b) 3 min 54 s / km', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `⏱️ Zielzeit = bisherige Zeit × 0.9 (10% besser)
📐 Zeit verteilen:
Zielzeit = Velozeit + Transition + Laufzeit
→ Laufzeit = Zielzeit − Velozeit − Transition

🏃 Lauftempo = Laufzeit ÷ Laufstrecke (min/km)`,
        },
        {
          title: 'Schritt 1: Zielzeit berechnen',
          content: `Bisherige Zeit: 9h 40min = 580 min
10% besser: 580 × 0.9 = 522 min = 8h 42min`,
        },
        {
          title: 'Schritt 2: Velozeit',
          content: `180 km ÷ 32 km/h = 5.625 h = 337.5 min`,
        },
        {
          title: 'Schritt 3: a) Laufzeit',
          content: `Transition = 4 min 30 s = 4.5 min
Laufzeit = 522 − 337.5 − 4.5 = 180 min

✅ Er hat 180 Minuten für die Laufstrecke.`,
        },
        {
          title: 'Schritt 4: b) Lauftempo',
          content: `Tempo = 180 min ÷ 42.195 km ≈ 4.267 min/km
0.267 min = 0.267 × 60 ≈ 16 s

✅ Lauftempo: 4 min 16 s pro km`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zielzeit = alt × 0.9 (10% schneller)
2️⃣  Velozeit = Strecke ÷ Tempo → in Minuten
3️⃣  Laufzeit = Ziel − Velo − Transition
4️⃣  Tempo = Laufzeit ÷ km → Rest × 60 = Sekunden`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_GEO3D_1',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106465/AP20_GMS3_M1_mTr_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Körper & Netze',
    questionText: `Aufgabe 2: Spiderman

Spiderman S muss seinen Weg SABCF zurücklegen, um seine Freundin F auf der Mitte des Daches zu retten.

Masse des Gebäudes und Abstände sind in der Figur angegeben (77m, 23m, 85m, 26m, 45m, 16m, 34m).

Berechne die Weglänge (blauer Streckenzug SABCF). Runde auf ganze Meter.

📐 Für diese Aufgabe: originelle Prüfung und Lösung öffnen!`,
    options: [
      { label: 'Lösung über offizielle Schullösung verfügbar', correct: true },
      { label: 'Ca. 170 m', correct: false },
      { label: 'Ca. 250 m', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Methode: 3D-Pythagoras',
          content: `Für jede Teilstrecke: Pythagoras in 3D
→ Länge = √(Δx² + Δy² + Δz²)

Dabei:
• SA: Strecke auf dem Boden (grüne Fläche)
• AB: an der Gebäudewand hoch
• BC: über das Dach (oder Wand)
• CF: zur Mitte des Daches

Tipp: Koordinatensystem aufstellen!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Koordinaten für jeden Punkt bestimmen
2️⃣  Für jede Teilstrecke: √(Δx²+Δy²+Δz²)
3️⃣  Alle Teilstrecken addieren`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_KOERPER_1',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106465/AP20_GMS3_M1_mTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Körper & Netze',
    questionText: `Aufgabe 3: Pyramide – Netz und Oberfläche

Eine Pyramide mit quadratischer Grundfläche. Zeichne das Netz und berechne die Oberfläche.

📐 Für diese Aufgabe: originelle Prüfung und Lösung öffnen!`,
    options: [
      { label: 'Lösung über offizielle Schullösung verfügbar', correct: true },
      { label: 'Keine Berechnung möglich', correct: false },
      { label: 'Nur mit bekannter Höhe lösbar', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Methode: Pyramide Oberfläche',
          content: `Oberfläche Pyramide = Grundfläche + 4 × Seitenflächen

Grundfläche (Quadrat): G = a²
Seitenfläche (Dreieck): S = ½ × a × h_s
(h_s = Höhe der Dreiecksfläche, nicht Pyramidenhöhe!)

Netz: Ein Quadrat in der Mitte + 4 gleichschenklige Dreiecke drumherum.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Netz: Quadrat + 4 Dreiecke
2️⃣  Seitenhöhe h_s mit Pythagoras berechnen
3️⃣  O = a² + 4 × (a × h_s / 2)`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_KOMB_1',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106465/AP20_GMS3_M1_mTr_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Wahrscheinlichkeit',
    questionText: `Aufgabe 4: Zahlenschloss

Ein Zahlenschloss hat 3 Räder mit je den Ziffern 0–9.

a) Man braucht pro Versuch 10 s. Wie lange dauert es im schlimmsten Fall, die Kombination zu knacken? (h, min, s)

b) Wie viele Kombinationen gibt es, wenn alle 3 Ziffern ungerade sein müssen?

c) Wie viele Kombinationen gibt es mit 3 verschiedenen Ziffern, alle grösser als 4 und aufsteigend geordnet?`,
    options: [
      { label: 'a) 2 h 46 min 40 s | b) 125 | c) 10', correct: true },
      { label: 'a) 1 h 30 min | b) 243 | c) 6', correct: false },
      { label: 'a) 3 h 20 min | b) 100 | c) 15', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔢 Grundprinzip der Kombinatorik:
Wenn jede Stelle unabhängig ist: Anzahl = Möglichkeit₁ × Möglichkeit₂ × Möglichkeit₃

⚠️ Aufsteigend geordnet = Kombination (Reihenfolge nicht wichtig)
→ Man zählt einfach alle möglichen 3er-Gruppen auf!`,
        },
        {
          title: 'a) Maximale Knackzeit',
          content: `Gesamtmöglichkeiten: 10 × 10 × 10 = 1000
Zeit: 1000 × 10 s = 10 000 s

10 000 ÷ 3600 = 2 h Rest 2800 s
2800 ÷ 60 = 46 min Rest 40 s

✅ Im schlimmsten Fall: 2 h 46 min 40 s`,
        },
        {
          title: 'b) Alle Ziffern ungerade',
          content: `Ungerade Ziffern: 1, 3, 5, 7, 9 → 5 Möglichkeiten pro Rad

Anzahl = 5 × 5 × 5 = 125

✅ Es gibt 125 Kombinationen mit lauter ungeraden Ziffern.`,
        },
        {
          title: 'c) 3 verschiedene Ziffern > 4, aufsteigend',
          content: `Erlaubte Ziffern: 5, 6, 7, 8, 9 (grösser als 4)
Aufsteigend geordnet → nur 1 Anordnung pro Gruppe.

Alle möglichen aufsteigenden Dreiergruppen:
(5,6,7), (5,6,8), (5,6,9)
(5,7,8), (5,7,9), (5,8,9)
(6,7,8), (6,7,9), (6,8,9)
(7,8,9)

✅ Es gibt 10 Kombinationen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
a) 10³ = 1000 Möglichkeiten × 10 s → Sekunden umrechnen
b) Nur ungerade (5 Stück): 5³ = 125
c) Ziffern > 4 aufzählen, alle 3er-Gruppen auflisten`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_PROZ_1',
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106465/AP20_GMS3_M1_mTr_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5: Flüssigkeiten mischen

Ein Behälter enthält 20 ml Flüssigkeit A, 70 ml B und 70 ml C.

a) Wie viel % macht Flüssigkeit A aus?

b) Wie viel ml C muss man hinzufügen, damit B 40% des Gemisches ausmacht?

c) Kosten: A kostet Fr. 3.20/l, B kostet Fr. 1.80/l, C kostet Fr. 0.60/l.
Der Verkaufspreis des Gemisches beträgt Fr. 2.00/l.
Wie hoch ist der Gewinn in % gegenüber dem Einkaufspreis?`,
    options: [
      { label: 'a) 12.5% | b) 15 ml C hinzufügen | c) Schullösung beachten', correct: true },
      { label: 'a) 10% | b) 20 ml | c) 25%', correct: false },
      { label: 'a) 15% | b) 10 ml | c) 15%', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Prozentteil = Anteil ÷ Gesamtmenge × 100
💡 Wenn man etwas hinzufügt: Gesamtmenge ändert sich!
→ Neue Bedingung aufstellen: Anteil_B ÷ (Gesamt + x) = 40%

💰 Gewinn% = (Verkaufspreis − Einkaufspreis) ÷ Einkaufspreis × 100`,
        },
        {
          title: 'a) Anteil Flüssigkeit A',
          content: `Gesamtmenge = 20 + 70 + 70 = 160 ml
Anteil A = 20 ÷ 160 × 100 = 12.5%

✅ Flüssigkeit A macht 12.5% aus.`,
        },
        {
          title: 'b) Menge C für 40% B-Anteil',
          content: `B = 70 ml (bleibt unverändert)
Neue Gesamtmenge = 160 + x ml (x = hinzugefügtes C)

Bedingung: 70 ÷ (160 + x) = 0.40
160 + x = 70 ÷ 0.40 = 175
x = 175 − 160 = 15 ml

✅ Man muss 15 ml C hinzufügen.`,
        },
        {
          title: 'c) Gewinn berechnen',
          content: `Gemisch (nach a): 20 ml A + 70 ml B + 70 ml C = 160 ml = 0.16 l

Einkaufskosten:
A: 0.020 l × Fr. 3.20 = Fr. 0.064
B: 0.070 l × Fr. 1.80 = Fr. 0.126
C: 0.070 l × Fr. 0.60 = Fr. 0.042
Total = Fr. 0.232

Verkaufserlös: 0.16 l × Fr. 2.00 = Fr. 0.320

Gewinn = 0.320 − 0.232 = Fr. 0.088
Gewinn% = 0.088 ÷ 0.232 × 100 ≈ 37.9%

✅ Der Gewinn beträgt ca. 37.9% des Einkaufspreises.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
a) A ÷ Gesamt × 100
b) B ÷ (Gesamt + x) = 0.40 → x auflösen
c) Kosten pro Flüssigkeit addieren → Verkaufspreis − Einkauf → Gewinn%`,
    },
  },

];


