
export const questions2021 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2021_MTR_GESCH_1',

    verified: true,

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=2',

    topic: 'Bewegung & Geschwindigkeit', // NEU

    questionText: `Aufgabe 1: E-Bike

a) Max startet um 08:15 Uhr und muss um 08:40 Uhr am vereinbarten Ort sein. Die Strecke ist 11 000 m lang. Das Sichern des E-Bikes dauert 60 Sekunden. Wie schnell muss er fahren? (km/h)

b) Wie lang muss die Strecke sein, damit es sich lohnt, statt Velo (18 km/h) das Auto (54 km/h) zu nehmen, wenn für Bereitstellung und Parkieren des Autos zusammen 5 Minuten mehr als für die Sicherung des Velos gerechnet werden müssen?`,

    teile: [
      { letter: 'a', options: [
        { label: '27.5 km/h', correct: true },
        { label: '26.4 km/h', correct: false },
        { label: '30.0 km/h', correct: false },
      ] },
      { letter: 'b', options: [
        { label: '2.25 km', correct: true },
        { label: '3.0 km', correct: false },
        { label: '1.5 km', correct: false },
      ] },
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
Markiere alle Punkte, die von den Geraden g und h den gleichen Abstand haben und zudem mindestens zwei der folgenden drei Bedingungen erfüllen:
• Abstand von g mindestens 2.5 cm
• Abstand von h höchstens 1.5 cm
• Abstand vom Punkt P (auf h) höchstens 6 cm
Die Konstruktion muss klar ersichtlich sein.
📐 Für diese Aufgabe: originelle Prüfung und Lösung öffnen – die genaue Lage der gesuchten Punkte hängt von der Zeichnung ab!`,

    options: [

      { label: 'Die gesuchten Punkte liegen auf den beiden Winkelhalbierenden von g und h – eingeschränkt auf die Abschnitte, die mindestens 2 der 3 Bedingungen erfüllen', correct: true },

      { label: 'Nur Punkte auf einer einzigen Winkelhalbierenden', correct: false },

      { label: 'Alle Punkte auf g und h selbst', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `Ein geometrischer Ort ist die Menge aller Punkte, die eine bestimmte Bedingung erfüllen.
Wichtige geometrische Orte sind:
• Gleicher Abstand zu einem Punkt → Kreis
• Gleicher Abstand zu zwei Punkten → Mittelsenkrechte
• Gleicher Abstand zu zwei Geraden → Winkelhalbierende(n)
• Gleicher Abstand zu einer Geraden → Parallele Gerade
• Alle Punkte, die über einer Strecke einen rechten Winkel bilden → Thaleskreis

💡 In dieser Aufgabe: "Gleicher Abstand von g und h" → die gesuchten Punkte liegen auf den beiden Winkelhalbierenden von g und h (senkrecht zueinander).
Die drei Zusatzbedingungen grenzen das Gebiet weiter ein:
• Abstand von g ≥ 2.5 cm → ausserhalb eines Parallelenpaars zu g
• Abstand von h ≤ 1.5 cm → innerhalb eines Parallelenpaars zu h
• Abstand von P ≤ 6 cm → innerhalb eines Kreises um P
Markiert werden nur die Teile der Winkelhalbierenden, auf denen mindestens 2 dieser 3 Bedingungen gleichzeitig gelten.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: 'Konstruktionen sind visuell. Klicke auf den Button, um die offizielle Schullösung mit den Zeichnungen zu sehen.',

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132745/AP21_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1. Beide Winkelhalbierenden von g und h konstruieren (gleicher Abstand von g und h).
2. Hilfslinien für jede der 3 Bedingungen einzeichnen (Parallelen zu g/h, Kreis um P).
3. Nur die Abschnitte der Winkelhalbierenden markieren, auf denen mindestens 2 der 3 Bedingungen erfüllt sind.`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2021_MTR_TAB_1',

    verified: true,

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
c) kWh: Fr. 0.17 (Niedertarif) / Fr. 0.23 (Hochtarif). Wasser: Fr. 1.18/m³. Mittel+Klarspüler: Fr. 0.15/Wäsche. Wie viel spart man bei 200 Waschgängen im Programm INTENSIV, wenn man statt zum Hochtarif ohne Spartaste, immer zum Niedertarif mit zusätzlicher Spartaste spült?`,

    teile: [
      { letter: 'a', options: [
        { label: '1820 l / 45.5%', correct: true },
        { label: '910 l / 40%', correct: false },
        { label: '2000 l / 50%', correct: false },
      ] },
      { letter: 'b', options: [
        { label: '33.3%', correct: true },
        { label: '25%', correct: false },
        { label: '20%', correct: false },
      ] },
      { letter: 'c', options: [
        { label: 'ca. Fr. 27.70', correct: true },
        { label: 'ca. Fr. 68.–', correct: false },
        { label: 'ca. Fr. 20.40', correct: false },
      ] },
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

          title: 'c) Kostenvergleich über 200 Wäschen (Programm INTENSIV)',

          content: `Kosten INTENSIV, Hochtarif, ohne Spartaste (pro Wäsche):
Strom: 1.7 kWh × 0.23 Fr/kWh = 0.391 Fr.
Wasser: 22 l = 0.022 m³ → 0.022 m³ × 1.18 Fr/m³ = 0.026 Fr.
Mittel: 0.150 Fr.
Total = 0.567 Fr. pro Wäsche.

Kosten INTENSIV, Niedertarif, mit Spartaste (pro Wäsche):
Strom: (1.7 - 0.2) kWh × 0.17 Fr/kWh = 0.255 Fr.
Wasser: (22 - 2) l = 0.020 m³ → 0.020 m³ × 1.18 Fr/m³ = 0.024 Fr.
Mittel: 0.150 Fr.
Total = 0.429 Fr. pro Wäsche.

Kosten für 200 Wäschen:
Hochtarif ohne Spartaste: 200 × 0.567 Fr. = 113.40 Fr.
Niedertarif mit Spartaste: 200 × 0.429 Fr. = 85.70 Fr.
Ersparnis = 113.40 Fr. − 85.70 Fr. = 27.70 Fr.
✅ Man spart Fr. 27.70.`,

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

    verified: true,

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',

    topic: 'Wahrscheinlichkeit', // NEU

    questionText: `Aufgabe 4: Kirschen
Frau Müller hat 2 Kirschbäume. Baum A liefert 70%, Baum B den Rest der Kirschen.
• 30% der Kirschen von Baum A sind aufgeplatzt
• 10% der Kirschen von Baum B sind aufgeplatzt
a) Zeichne einen Wahrscheinlichkeitsbaum und berechne: Wie viel % aller Kirschen sind NICHT aufgeplatzt?
b) Ein Schälchen nicht aufgeplatzter Kirschen = Fr. 1.–, aufgeplatzter = Fr. 0.20.
Es werden 100 Schälchen geerntet und verkauft.
Berechne die Einnahmen.`,

    teile: [
      { letter: 'a', options: [
        { label: '76%', correct: true },
        { label: '80%', correct: false },
        { label: '70%', correct: false },
      ] },
      { letter: 'b', options: [
        { label: 'Fr. 80.80', correct: true },
        { label: 'Fr. 85.00', correct: false },
        { label: 'Fr. 75.50', correct: false },
      ] },
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

    verified: true,

    year: 2021,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119957/AP21_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=6',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 5: Gleiche Flächen
In der nicht massstabsgetreuen Abbildung ist A₁ = A₂ = A₃.
Die Figur ist – von oben nach unten – entlang einer gemeinsamen linken Kante in 3 Teile gegliedert:
• A₁ (oben): rechtwinkliges Dreieck mit linker (vertikaler) Kathete 18 cm. Die Hypotenuse führt zum Punkt E.
• A₂ (Mitte): rechtwinkliges Trapez; obere Parallelseite = horizontale Lage von E, untere Parallelseite 6 cm.
• A₃ (unten): rechtwinkliges Trapez mit linker Kathete 9 cm, unterer Grundseite 18 cm (gesamte Breite der Figur) und oberer Parallelseite 6 cm.
A₄ ist die Dreiecksfläche rechts aussen, zwischen dem Ende der 6-cm-Strecke, E und der unteren rechten Ecke der Figur.
Berechne A₄.`,

    options: [

      { label: 'A₄ = 99 cm²', correct: true },

      { label: 'A₄ = 135 cm²', correct: false },

      { label: 'A₄ = 162 cm²', correct: false },

          ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Trapezfläche: F = (a + b) / 2 × h (a, b = parallele Seiten, h = Höhe)
📐 Dreiecksfläche: F = Basis × Höhe / 2
💡 Strategie: Zuerst A₃ berechnen (einziges vollständig bekanntes Teilstück) → da A₁=A₂=A₃, kennen wir damit alle drei.
Danach die unbekannten Breiten x (für A₁) und y (für A₂) über deren Flächenformeln bestimmen.
Zum Schluss A₄ = grosses Trapez (A₂+A₃+A₄) − A₂ − A₃.`,

        },

        {

          title: 'Schritt 1: A₃ berechnen (vollständig bekannt)',

          content: `A₃ ist ein rechtwinkliges Trapez: untere Parallelseite 18 cm, obere Parallelseite 6 cm, Höhe (linke Kathete) 9 cm.
A₃ = (18 + 6) / 2 × 9 = 108 cm²
Da A₁ = A₂ = A₃, gilt auch A₁ = 108 cm² und A₂ = 108 cm².`,

        },

        {

          title: 'Schritt 2: Horizontale Lage von E (aus A₁)',

          content: `A₁ ist ein rechtwinkliges Dreieck mit linker Kathete 18 cm und horizontaler Kathete x (= horizontaler Abstand von E zur linken Kante).
A₁ = 18 × x / 2 = 108
x = 108 × 2 / 18 = 12 cm`,

        },

        {

          title: 'Schritt 3: Höhe von A₂',

          content: `A₂ ist ein rechtwinkliges Trapez mit oberer Parallelseite x = 12 cm, unterer Parallelseite 6 cm und unbekannter Höhe y.
A₂ = (12 + 6) / 2 × y = 108
9 × y = 108
y = 12 cm`,

        },

        {

          title: 'Schritt 4: Grosses Trapez (A₂+A₃+A₄)',

          content: `Das grosse Trapez (A₂+A₃+A₄ zusammen) hat obere Parallelseite x = 12 cm, untere Parallelseite 18 cm und Höhe y + 9 = 12 + 9 = 21 cm.
Fläche = (12 + 18) / 2 × 21 = 315 cm²`,

        },

        {

          title: 'Schritt 5: A₄ berechnen',

          content: `A₄ = 315 − (A₂ + A₃) = 315 − (108 + 108) = 315 − 216 = 99 cm²
✅ A₄ = 99 cm²`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: 'Klicke auf den Button, um die offizielle Schullösung zu öffnen.',

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132745/AP21_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  A₃ (bekanntes Trapez 18/6/9) berechnen → gilt auch für A₁ und A₂
2️⃣  Mit A₁ (Dreieck 18×x/2) die Breite x bestimmen
3️⃣  Mit A₂ (Trapez (x+6)/2×y) die Höhe y bestimmen
4️⃣  Grosses Trapez (x+18)/2×(y+9) berechnen
5️⃣  A₄ = grosses Trapez − A₂ − A₃`,

    },

  },
]
