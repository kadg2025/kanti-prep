
export const questions2020 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_GESCH_1',
    verified: true,
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
    verified: true,
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
      { label: 'Ca. 153 m (SA≈49.68 + AB=26 + BC≈69.24 + CF=8)', correct: true },
      { label: 'Ca. 120 m (Höhenunterschied bei BC vergessen)', correct: false },
      { label: 'Ca. 161 m (CF nicht halbiert, mit 16 statt 8 gerechnet)', correct: false },
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
          title: 'Schritt 1: SA (Weg auf dem Boden)',
          content: `Aus den Mass-Angaben (77m, 23m, 45m, 16m) ergeben sich die beiden Katheten:
77 − 23 − 16 = 38 m und 77 − 45 = 32 m
SA = √(32² + 38²) = √(1024 + 1444) = √2468 ≈ 49.68 m`,
        },
        {
          title: 'Schritt 2: AB (Gebäudewand hoch)',
          content: `AB ist die Höhe des ersten Gebäudes: AB = 26 m.`,
        },
        {
          title: 'Schritt 3: BC (über das zweite Gebäude)',
          content: `Mit Hilfspunkten D, E (nicht in der Aufgabenstellung, nur zur Berechnung):
BD = 23 m, DE = 45 − 34/2 = 28 m, EC = 85 − 26 = 59 m
BC = √(23² + 28² + 59²) = √(529 + 784 + 3481) = √4794 ≈ 69.24 m`,
        },
        {
          title: 'Schritt 4: CF (bis zur Dachmitte) und Total',
          content: `Das Dach ist an dieser Kante 16 m breit. F liegt in der Mitte:
CF = 16 ÷ 2 = 8 m
Weglänge: SA + AB + BC + CF = 49.68 + 26 + 69.24 + 8 = 152.92 m
✅ Auf ganze Meter gerundet: ca. 153 m.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Koordinaten/Hilfsstrecken aus den Mass-Angaben ableiten
2️⃣  Für jede Teilstrecke: √(Δx²+Δy²+Δz²)
3️⃣  Alle Teilstrecken addieren (SA+AB+BC+CF) → auf ganze Meter runden`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_KOERPER_1',
    verified: true,
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106465/AP20_GMS3_M1_mTr_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Körper & Netze',
    questionText: `Aufgabe 3: Pyramide – Netz vervollständigen

Eine Pyramide hat eine rechteckige Grundfläche ABCD. H ist der Höhenfusspunkt der Pyramide, die Spitze wird mit S bezeichnet.

Gegeben ist bereits ein Teil des Netzes: die Grundfläche ABCD und die Seitenfläche (Dreieck SAB).

Konstruiere das vollständige Netz, d.h. die drei fehlenden Seitenflächen (Dreiecke bei BC, CD und DA).`,
    options: [
      { label: 'Kreis um A (Radius AS) und Parallele zu AB durch H schneiden sich in S\' – analog für die Seiten BC und CD', correct: true },
      { label: 'Nur mit bekannter Pyramidenhöhe konstruierbar', correct: false },
      { label: 'Netz hat nur 2 Dreiecke, da Grundfläche quadratisch ist', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Methode: Netz einer geraden Pyramide',
          content: `Das Netz besteht aus der Grundfläche ABCD und 4 Seitendreiecken (SAB, SBC, SCD, SDA).
Gegeben ist bereits die Grundfläche und das Dreieck SAB – die 3 fehlenden Seitendreiecke müssen konstruiert werden.

💡 Trick: Da H der Höhenfusspunkt ist (Mitte der Grundfläche), haben gegenüberliegende Eckpunkte den gleichen Abstand zur Spitze: AS = CS und BS = DS.`,
        },
        {
          title: 'Schritt 1: Seite bei D (gegenüber von B)',
          content: `Kreis um A mit Radius AS zeichnen (die Strecke AS mit dem Zirkel aus dem gegebenen Dreieck SAB abgreifen).
Parallele zu AB durch H zeichnen → Schnittpunkt mit dem Kreis ergibt S'.
S' mit D verbinden → das ist die 2. Seitenfläche (Dreieck S'AD).`,
        },
        {
          title: 'Schritt 2: gegenüberliegende Seite (bei C)',
          content: `Analoges Vorgehen auf der Seite BC: Kreis um B mit Radius BS, Parallele zu AB durch H → Schnittpunkt S''.
S'' mit C verbinden → 3. Seitenfläche (Dreieck S''BC).`,
        },
        {
          title: 'Schritt 3: Seite auf CD',
          content: `Kreis um D mit Radius DS (= BS) bzw. um C mit Radius CS (= AS).
Parallele zu AD durch H zeichnen → Schnittpunkt S'''.
S''' mit C und D verbinden → 4. Seitenfläche (Dreieck S'''CD).
✅ Damit ist das vollständige Netz konstruiert: Grundfläche ABCD + 4 Seitendreiecke.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  AS = CS und BS = DS (H = Mitte der rechteckigen Grundfläche)
2️⃣  Für jede fehlende Seite: Kreis mit passendem Radius um die Ecke + Parallele zu AB bzw. AD durch H
3️⃣  Schnittpunkt mit dem gegenüberliegenden Eckpunkt verbinden → fertige Seitenfläche`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_KOMB_1',
    verified: true,
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

c) Ein Freund ist sicher, dass die erste Ziffer eine 5 war, die zweite grösser als die erste und die dritte grösser als die zweite. Gerade Ziffern kann er nicht ausschliessen. Wie viele Einstellungen sind so noch möglich?`,
    options: [
      { label: 'a) 2 h 46 min 40 s | b) 125 | c) 6 (567, 568, 569, 578, 579, 589)', correct: true },
      { label: 'a) 1 h 30 min | b) 243 | c) 10', correct: false },
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
          title: 'c) Erste Ziffer 5, aufsteigend',
          content: `1. Ziffer ist fix: 5.
2. und 3. Ziffer müssen aufsteigend sein und grösser als die vorherige (gerade Ziffern erlaubt!): 5 < d₂ < d₃, mit d₂, d₃ ∈ {6,7,8,9}.

Alle möglichen Paare (d₂, d₃):
(6,7), (6,8), (6,9), (7,8), (7,9), (8,9) → 6 Möglichkeiten

Das ergibt die Einstellungen: 567, 568, 569, 578, 579, 589

✅ Es gibt 6 mögliche Einstellungen.`,
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
c) 1. Ziffer fix (5), dann alle aufsteigenden Paare aus den grösseren Ziffern auflisten`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M3_2020_MTR_PROZ_1',
    verified: true,
    year: 2020,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106465/AP20_GMS3_M1_mTr_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Prozent & Zins',
    questionText: `Aufgabe 5: Flüssigkeiten mischen

Ein Behälter enthält 20 ml Flüssigkeit A, 70 ml B und 70 ml C.

a) Wie viel % macht Flüssigkeit A aus?

b) Wie viel ml B muss man dazugeben, damit Flüssigkeit C nur noch 40% des Gemisches ausmacht?

c) 10 ml Flüssigkeit A kosten Fr. 20.–. Flüssigkeit B ist (pro gleicher Menge) 15% teurer. Das ursprüngliche Gemisch (20 ml A + 70 ml B + 70 ml C) kostet insgesamt Fr. 329.80. Um wie viel Prozent ist Flüssigkeit C billiger als Flüssigkeit A (pro gleicher Menge)?`,
    options: [
      { label: 'a) 12.5% | b) 15 ml B hinzufügen | c) 8% billiger', correct: true },
      { label: 'a) 10% | b) 20 ml B | c) 25% billiger', correct: false },
      { label: 'a) 15% | b) 10 ml B | c) 15% billiger', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Prozentteil = Anteil ÷ Gesamtmenge × 100
💡 Wenn man etwas hinzufügt: Gesamtmenge ändert sich!
→ Neue Bedingung aufstellen: Anteil_C ÷ (Gesamt + x) = 40%

💰 Preisvergleich: Kosten pro gleicher Menge berechnen, dann prozentualen Unterschied bestimmen
% billiger = (Preis_A − Preis_C) ÷ Preis_A × 100`,
        },
        {
          title: 'a) Anteil Flüssigkeit A',
          content: `Gesamtmenge = 20 + 70 + 70 = 160 ml
Anteil A = 20 ÷ 160 × 100 = 12.5%

✅ Flüssigkeit A macht 12.5% aus.`,
        },
        {
          title: 'b) Menge B für 40% C-Anteil',
          content: `C = 70 ml (bleibt unverändert, nur B wird ergänzt)
Neue Gesamtmenge = 160 + x ml (x = hinzugefügtes B)

Bedingung: 70 ÷ (160 + x) = 0.40
160 + x = 70 ÷ 0.40 = 175
x = 175 − 160 = 15 ml

✅ Man muss 15 ml B hinzufügen, damit C nur noch 40% des Gemisches ausmacht.`,
        },
        {
          title: 'c) Preisvergleich A und C',
          content: `Preis pro 10 ml A = Fr. 20.–
Preis pro 10 ml B = Fr. 20.– × 1.15 = Fr. 23.– (15% teurer)

Ursprüngliches Gemisch: 20 ml A + 70 ml B + 70 ml C
Kosten A (20 ml = 2 × 10 ml): 2 × Fr. 20.– = Fr. 40.–
Kosten B (70 ml = 7 × 10 ml): 7 × Fr. 23.– = Fr. 161.–
Kosten C: Fr. 329.80 − Fr. 40.– − Fr. 161.– = Fr. 128.80

Preis pro 10 ml C = Fr. 128.80 ÷ 7 = Fr. 18.40

Vergleich: Fr. 18.40 ÷ Fr. 20.– = 0.92 → C kostet 92% von A
✅ Flüssigkeit C ist 8% billiger als Flüssigkeit A.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119942/AP20_GMS3_M2_mTr_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
a) A ÷ Gesamt × 100
b) C bleibt bei 70 ml fix → 70 ÷ (160 + x) = 0.40 → x auflösen (x = zugefügtes B)
c) Kosten A und B berechnen (B = A × 1.15) → Kosten C = Total − Kosten A − Kosten B → Preis pro gleicher Menge vergleichen`,
    },
  },

];


