export const questions2021 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2021_MTR_GESCH_1',

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=2',

    topic: 'Algebra', // NEU

    questionText: `Aufgabe 1: E-Bike

a) Max startet um 08:15 Uhr und muss um 08:40 Uhr am vereinbarten Ort sein. Die Strecke ist 11 000 m lang. Das Sichern des E-Bikes dauert 60 Sekunden. Wie schnell muss er fahren? (km/h)

b) Wie lang muss die Strecke sein, damit es sich lohnt, statt Velo (18 km/h) das Auto (54 km/h) zu nehmen, wenn für Bereitstellung und Parkieren des Autos zusammen 5 Minuten mehr als für die Sicherung des Velos gerechnet werden müssen?`,

    options: [

      { label: 'a) 27.5 km/h | b) 2.25 km', correct: true },

      { label: 'a) 26.4 km/h | b) 3.0 km', correct: false },

      { label: 'a) 30.0 km/h | b) 1.5 km', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `⏱️ Verfügbare Zeit = Zeitfenster − Nebenzeiten
→ Reine Fahrzeit = (08:40 − 08:15) − 60 s = 25 min − 1 min = 24 min
📐 Geschwindigkeit = Strecke ÷ Zeit
🚗 Break-Even (b):
Ab welcher Strecke ist die Gesamtdauer für Auto und Velo gleich?
→ Zeit_Velo = Zeit_Auto. Wir müssen die Nebenzeiten einrechnen!
→ (Strecke / v_Velo) = (Strecke / v_Auto) + 5 min`,

        },

        {

          title: 'a) Benötigte Geschwindigkeit',

          content: `Fahrzeit = 25 min − 1 min = 24 min = 24/60 h = 0.4 h
Strecke = 11 000 m = 11 km
v = 11 km ÷ 0.4 h = 27.5 km/h
✅ Max muss mit durchschnittlich 27.5 km/h fahren.`,

        },

        {

          title: 'b) Break-Even-Strecke',

          content: `Sei d die gesuchte Strecke in km.
Zeit Velo = d / 18
Zeit Auto = d / 54
Die Autonutzung dauert 5 Minuten ( = 5/60 h = 1/12 h) länger durch die Nebenzeiten.
Wir setzen die Gesamtdauern gleich:
Zeit_Velo = Zeit_Auto + Nebendauer
d/18 = d/54 + 1/12
d/18 − d/54 = 1/12
3d/54 − d/54 = 1/12
2d/54 = 1/12
d = 54 / (2 * 12) = 54 / 24 = 2.25 km
✅ Ab einer Strecke von 2.25 km lohnt es sich, das Auto zu nehmen.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132745/AP21_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

        },

      ],
      tip: `🍳 Kochrezept:
a) Reine Fahrzeit berechnen (Gesamtzeit - Nebenzeiten). Dann v = s/t.
b) Gleichung aufstellen: t_velo = t_auto + nebenzeit_auto. Also: d/18 = d/54 + 5/60. Dann nach d auflösen.`
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2021_MTR_GEO_1',

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=3',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 2: Geometrische Orte
Konstruiere geometrische Orte nach den gegebenen Bedingungen.
📐 Für diese Aufgabe: originelle Prüfung und Lösung öffnen!`,

    options: [

      { label: 'Lösung über offizielle Schullösung verfügbar', correct: true },

      { label: 'Kein geometrischer Ort existiert', correct: false },

      { label: 'Nur Kreise als geometrische Orte', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Methode: Geometrische Orte',

          content: `Ein geometrischer Ort ist die Menge aller Punkte, die eine bestimmte Bedingung erfüllen.
Wichtige geometrische Orte sind:
• Gleicher Abstand zu einem Punkt → Kreis
• Gleicher Abstand zu zwei Punkten → Mittelsenkrechte
• Gleicher Abstand zu zwei Geraden → Winkelhalbierende
• Gleicher Abstand zu einer Geraden → Parallele Gerade
• Alle Punkte, die über einer Strecke einen rechten Winkel bilden → Thaleskreis`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: 'Konstruktionen sind visuell. Klicke auf den Button, um die offizielle Schullösung mit den Zeichnungen zu sehen.',

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132745/AP21_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1. Bedingung genau lesen ("Abstand zu Punkt A", "Abstand zu Gerade g", etc.).
2. Passenden geometrischen Ort aus der Liste oben identifizieren.
3. Mit Zirkel und Lineal konstruieren.`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2021_MTR_TAB_1',

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=4',

    topic: 'Prozent & Zins', // NEU

    questionText: `Aufgabe 3: Geschirrspüler
| Programm  | Strom   | Wasser | Dauer  |
|-----------|---------|--------|--------|
| KURZ      | 0.6 kWh | 10 l   | 42 min |
| NORMAL    | 0.8 kWh | 12 l   | 66 min |
| UNIVERSAL | 1.2 kWh | 17 l   | 84 min |
| INTENSIV  | 1.7 kWh | 22 l   | 98 min |
Spargang = −0.2 kWh und −2 l pro Waschgang.
Familie nutzt GS alle 2 Tage (= 182 ×/Jahr).
a) Wassereinsparung (l und %) wenn NORMAL statt INTENSIV (in einem Jahr)?
b) Stromeinsparung (%) bei KURZ mit Spargang-Taste?
c) kWh: Fr. 0.17 (Niedertarif) / Fr. 0.23 (Hochtarif). Wasser: Fr. 1.18/m³. Mittel+Klarspüler: Fr. 0.15/Wäsche. Wie viel spart man bei 200 Waschgängen: INTENSIV Hochtarif vs. KURZ Niedertarif mit Spartaste?`,

    options: [

      { label: 'a) 1820 l / 45.5% | b) 33.3% | c) ca. Fr. 68.–', correct: true },

      { label: 'a) 910 l / 40% | b) 25% | c) ca. Fr. 45.–', correct: false },

      { label: 'a) 2000 l / 50% | b) 20% | c) ca. Fr. 80.–', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `💧 Wassereinsparung = Differenz pro Wäsche × Anzahl Wäschen
📐 % Einsparung = (Ersparnis / Originalwert) × 100
⚡ Spargang = −0.2 kWh und −2 l pro Wäsche`,

        },

        {

          title: 'a) Wassereinsparung NORMAL statt INTENSIV',

          content: `Pro Wäsche: 22 l − 12 l = 10 l gespart.
In einem Jahr (182 Wäschen): 182 × 10 l = 1820 l.
Prozentuale Einsparung: (10 l / 22 l) × 100 ≈ 45.5%
✅ 1820 Liter, was einer Ersparnis von ca. 45.5% entspricht.`,

        },

        {

          title: 'b) Stromeinsparung KURZ + Spargang',

          content: `KURZ normal: 0.6 kWh.
Spargang spart: 0.2 kWh.
Prozentuale Einsparung: (0.2 kWh / 0.6 kWh) × 100 ≈ 33.3%
✅ Die Stromeinsparung beträgt 33.3%.`,

        },

        {

          title: 'c) Kostenvergleich über 200 Wäschen',

          content: `Kosten INTENSIV (pro Wäsche):
Strom:  1.7 kWh × 0.23 Fr/kWh = 0.391 Fr.
Wasser: 22 l = 0.022 m³ → 0.022 m³ × 1.18 Fr/m³ = 0.026 Fr.
Mittel: 0.150 Fr.
Total = 0.567 Fr. pro Wäsche.

Kosten KURZ mit Spar-Taste (pro Wäsche):
Strom: (0.6 - 0.2) kWh × 0.17 Fr/kWh = 0.068 Fr.
Wasser: (10 - 2) l = 0.008 m³ → 0.008 m³ × 1.18 Fr/m³ = 0.009 Fr.
Mittel: 0.150 Fr.
Total = 0.227 Fr. pro Wäsche.

Kosten für 200 Wäschen:
INTENSIV: 200 × 0.567 Fr. = 113.40 Fr.
KURZ: 200 × 0.227 Fr. = 45.40 Fr.
Ersparnis = 113.40 Fr. − 45.40 Fr. = 68.00 Fr.
✅ Man spart Fr. 68.–.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132745/AP21_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
a) (Intensiv−Normal) × 182 → Liter; (Differenz/Intensiv) × 100 → %
b) (Ersparnis / Originalwert) × 100
c) Kosten pro Wäsche = (kWh×Tarif) + (l/1000 × Wasserpreis) + 0.15. Dann für 200 Wäschen hochrechnen und vergleichen.`,

    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M3_2021_MTR_WAHR_1',

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',

    topic: 'Stochastik', // NEU

    questionText: `Aufgabe 4: Kirschen
Frau Müller hat 2 Kirschbäume. Baum A liefert 70%, Baum B den Rest der Kirschen.
• 30% der Kirschen von Baum A sind aufgeplatzt
• 10% der Kirschen von Baum B sind aufgeplatzt
a) Zeichne einen Wahrscheinlichkeitsbaum und berechne: Wie viel % aller Kirschen sind NICHT aufgeplatzt?
b) Ein Schälchen nicht aufgeplatzter Kirschen = Fr. 1.–, aufgeplatzter = Fr. 0.20.
Es werden 100 Schälchen geerntet und verkauft.
Berechne die Einnahmen.`,

    options: [

      { label: 'a) 76% | b) Fr. 80.80', correct: true },

      { label: 'a) 80% | b) Fr. 85.00', correct: false },

      { label: 'a) 70% | b) Fr. 75.50', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `🌳 Wahrscheinlichkeitsbaum:
Stufe 1: Baum A (70%) oder Baum B (30%)
Stufe 2: aufgeplatzt oder nicht aufgeplatzt
📐 Pfadregel:
P(A und nicht aufgeplatzt) = P(A) × P(nicht | A)
📐 Summensatz:
P(nicht aufgeplatzt gesamt) = Summe aller günstigen Pfade`,

        },

        {

          title: 'a) Wahrscheinlichkeitsbaum & Prozent nicht aufgeplatzt',

          content: `Pfad 1: Baum A (0.7) → nicht aufgeplatzt (1 - 0.3 = 0.7)
   P = 0.7 × 0.7 = 0.49 (49%)
Pfad 2: Baum B (0.3) → nicht aufgeplatzt (1 - 0.1 = 0.9)
   P = 0.3 × 0.9 = 0.27 (27%)
Gesamtwahrscheinlichkeit (nicht aufgeplatzt) = 0.49 + 0.27 = 0.76
✅ 76% aller Kirschen sind nicht aufgeplatzt.`,

        },

        {

          title: 'b) Einnahmen bei 100 Schälchen',

          content: `Von 100 Schälchen sind:
- 76 nicht aufgeplatzt → 76 × 1.00 Fr. = 76.00 Fr.
- 24 aufgeplatzt → 24 × 0.20 Fr. = 4.80 Fr.
Total Einnahmen = 76.00 + 4.80 = 80.80 Fr.
✅ Die Einnahmen betragen Fr. 80.80.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132745/AP21_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Baum zeichnen: 2 Stufen (Baum → Zustand)
2️⃣  Pfadwahrscheinlichkeiten: multiplizieren
3️⃣  "Nicht aufgeplatzt": günstige Pfade addieren
4️⃣  Einnahmen: Anzahl × Preis für jede Kategorie`,

    },

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2021_MTR_FLAE_1',

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=6',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 5: Gleiche Flächen
In der Abbildung ist A₁ = A₂ = A₃.
Das grosse Dreieck ist rechtwinklig mit Basis 18 cm.
Die linke Seite ist aufgeteilt: oberer Teil 18 cm, unterer Teil 9 cm.
E liegt 6 cm horizontal vom unteren Teilungspunkt.
Berechne A₄.`,

    options: [

      { label: 'A₄ = 162 cm²', correct: true },

      { label: 'A₄ = 135 cm²', correct: false },

      { label: 'A₄ = 189 cm²', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Flächeninhalt grosses Dreieck:
F = ½ × Basis × Höhe
💡 Strategie: A₄ berechnen durch Subtraktion!
A₄ = F_gesamt − (A₁ + A₂ + A₃)
Da A₁ = A₂ = A₃, genügt es, eine davon zu berechnen.`,

        },

        {

          title: 'Schritt 1: Gesamtfläche',

          content: `Linke Seite (Höhe): 18 cm + 9 cm = 27 cm
Basis: 18 cm
F_gesamt = (18 * 27) / 2 = 243 cm²`,

        },

        {

          title: 'Schritt 2: Fläche A₃ berechnen',

          content: `A₃ ist das kleine rechtwinklige Dreieck unten links.
Senkrechter Schenkel: 9 cm
Waagrechter Schenkel: 6 cm
A₃ = (9 * 6) / 2 = 27 cm²`,

        },

        {

          title: 'Schritt 3: A₄ berechnen',

          content: `Wir wissen: A₁ = A₂ = A₃ = 27 cm².
Die Summe der drei kleinen Flächen ist:
3 × 27 cm² = 81 cm²
A₄ = F_gesamt − (A₁ + A₂ + A₃)
A₄ = 243 - 81 = 162 cm²
✅ A₄ = 162 cm²`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132745/AP21_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Gesamtfläche = ½ × Basis × Höhe
2️⃣  A₃ aus der Skizze berechnen: A₃ = ½ × 9 × 6 = 27 cm²
3️⃣  Da A₁=A₂=A₃, ist die Summe der drei Flächen 3 × 27 cm²
4️⃣  A₄ = Gesamtfläche − (3 × 27)`,

    },

  },
]
