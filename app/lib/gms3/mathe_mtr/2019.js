
export const questions2019 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2019_MTR_GEO_1',

    year: 2019,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106599/AP19_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=2',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 1: Trapez im Rechteck

Ein Trapez liegt in einem Rechteck (Skizze nicht massstabsgetreu). Gegeben: mehrere Seiten und rechte Winkel (5.4, 3, 6.18, b, 7.41, 8.01, 3.13, 1.52, a).

Berechne die Strecken a und b, sowie die Fläche des Trapezes.

📐 Für diese Aufgabe: originelle Prüfung und Lösung öffnen!`,

    options: [

      { label: 'Lösung über offizielle Schullösung verfügbar', correct: true },

      { label: 'Nicht lösbar ohne Zeichnung', correct: false },

      { label: 'a = 3.5 cm, b = 2.1 cm', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Methode: Pythagoras für rechtwinklige Dreiecke',

          content: `Diese Aufgabe braucht die Originalskizze! Die rechten Winkel (Punkte) zeigen, wo Pythagoras angewendet wird.

Allgemeine Methode:
1. Rechten Winkel identifizieren
2. Katheten und Hypotenuse bestimmen
3. Pythagoras: a² + b² = c²
   → unbekannte Seite: c = √(a²+b²) oder a = √(c²−b²)
Überprüfung: √(5.4² + 3²) = √(29.16 + 9) = √38.16 ≈ 6.18 ✓`,

        },

        {

          title: '📐 Trapez-Flächenformel',

          content: `Fläche Trapez = (a + b) / 2 × h
Wobei:
a = eine parallele Seite
b = andere parallele Seite
h = Höhe (senkrechter Abstand zwischen den parallelen Seiten)`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106454/AP19_GMS3_%20M2_mTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Rechtwinklige Dreiecke in der Skizze identifizieren
2️⃣  Pythagoras: fehlende Seite = √(hyp² − kathete²)
3️⃣  Trapezfläche: (a+b)/2 × h`,

    },

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2019_MTR_PROZ_1',

    year: 2019,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106599/AP19_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=3',

    topic: 'Prozent & Zins', // NEU

    questionText: `Aufgabe 2: Schulklasse Zugfahrt
Eine Schulklasse mit 20 SchülerInnen fährt mit dem Zug ins Klassenlager. Ein Weg (A→B) kostet Fr. 25.– pro Person.
• 20% besitzen ein GA → zahlen nichts
• 5/8 der Übrigen haben Halbtax → zahlen die Hälfte
a) Wie hoch sind die Reisekosten der ganzen Klasse für Hin- und Rückfahrt?
b) Ein Gruppenticket gibt Rabatt → nur noch Fr. 522.50.
   i. Wie viel % Rabatt ist das?
   ii. Was kostet die Reise nun für Vollzahler?`,

    options: [

      { label: 'a) Fr. 550.– | b.i) 5% | b.ii) Fr. 47.50', correct: true },

      { label: 'a) Fr. 600.– | b.i) 12.9% | b.ii) Fr. 43.50', correct: false },

      { label: 'a) Fr. 480.– | b.i) 8% | b.ii) Fr. 46.00', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `🎫 Abo-Typen (Schweizer System):
• GA (General-Abonnement): zahlt nichts → Preis = Fr. 0
• Halbtax: zahlt die Hälfte → Preis = 25 × 0.5 = Fr. 12.50
• Vollzahler: zahlt vollen Preis → Preis = Fr. 25
📐 5/8 des Restes:
Nach GA sind 80% = 16 SchülerInnen übrig.
5/8 von 16 = 10 SchülerInnen → Halbtax
6 SchülerInnen → Vollzahler
💡 Rabatt:
Rabatt% = (Originalpreis − Rabattpreis) / Originalpreis × 100`,

        },

        {

          title: 'Schritt 1: Anzahl pro Gruppe',

          content: `Gesamt: 20 SchülerInnen
GA: 20% × 20 = 4 SchülerInnen (zahlen nichts)
Rest: 16 SchülerInnen
Halbtax: 5/8 × 16 = 10 SchülerInnen
Vollzahler: 16 − 10 = 6 SchülerInnen`,

        },

        {

          title: 'Schritt 2: Kosten für einen Weg',

          content: `GA:        4 × Fr. 0.–    =   Fr. 0.–
Halbtax:  10 × Fr. 12.50  = Fr. 125.–
Vollzahler: 6 × Fr. 25.–  = Fr. 150.–
──────────────────────────────────
Total ein Weg:              Fr. 275.–`,

        },

        {

          title: 'Schritt 3: a) Hin- und Rückfahrt',

          content: `Total = Fr. 275.– × 2 = Fr. 550.–
✅ Die Reisekosten betragen Fr. 550.–`,

        },

        {

          title: 'Schritt 4: b.i) Rabatt berechnen',

          content: `Originalpreis: Fr. 550.–
Mit Rabatt: Fr. 522.50
Ersparnis: 550 − 522.50 = Fr. 27.50
Rabatt% = 27.50 / 550 × 100 = 5%
✅ Der Rabatt beträgt 5%.`,

        },

        {

          title: 'Schritt 5: b.ii) Preis für Vollzahler mit Rabatt',

          content: `Originalpreis für einen Vollzahler (Hin+Rück): 2 × 25 = Fr. 50.–
Mit 5% Rabatt: 50 × 0.95 = Fr. 47.50
✅ Vollzahler zahlen nun Fr. 47.50.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106454/AP19_GMS3_%20M2_mTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  GA: % × Gesamt → Rest berechnen
2️⃣  Halbtax: 5/8 × Rest; Vollzahler = Rest − Halbtax
3️⃣  Kosten = ∑ (Anzahl × Preis) × 2 (Hin+Rück)
4️⃣  Rabatt% = Ersparnis / Original × 100
5️⃣  Neue Kosten = Original × (1 − Rabatt/100)`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2019_MTR_GESCH_1',

    year: 2019,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106599/AP19_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=4',

    topic: 'Bewegung & Geschwindigkeit', // NEU

    questionText: `Aufgabe 3: Auto und Lastwagen nach München (310 km)
a) Wie viele Minuten früher ist der Autofahrer am Ziel? Auto: 85 km/h, LKW: 52 km/h. (Runde auf ganze Minuten)
b) Das Auto fährt 2 h 30 min SPÄTER ab. Der LKW fährt 20% schneller als in a). Wie schnell muss das Auto fahren, damit beide gleichzeitig ankommen? (Ganze km/h)
c) Beide starten gleichzeitig in München Richtung Prag. Wie viel % der Strecke hat der LKW geschafft, wenn das Auto in Prag ist?`,

    options: [

      { label: 'a) ≈ 139 min | b) ≈ 126 km/h | c) ≈ 61.2%', correct: true },

      { label: 'a) 52 min | b) 80 km/h | c) 58%', correct: false },

      { label: 'a) 40 min | b) 70 km/h | c) 65%', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `⏱️ Zeit = Strecke ÷ Geschwindigkeit
→ Zeitdifferenz = t_LKW − t_Auto (in Minuten)
📐 LKW 20% schneller:
v_LKW_neu = 52 × 1.20 = 62.4 km/h
💡 Gleichzeitig ankommen:
Das Auto muss in [t_LKW − 2.5h] die 310 km schaffen.
t_Auto = t_LKW − 2.5 h → v_Auto = 310 ÷ t_Auto`,

        },

        {

          title: 'a) Zeitdifferenz',

          content: `t_Auto = 310 km / 85 km/h ≈ 3.647 h
t_LKW  = 310 km / 52 km/h ≈ 5.962 h
Differenz = 5.962 h − 3.647 h = 2.315 h
2.315 h * 60 min/h ≈ 139 Minuten
✅ Das Auto ist ca. 139 Minuten früher am Ziel.`,

        },

        {

          title: 'b) Neue Geschwindigkeit Auto',

          content: `v_LKW_neu = 52 km/h * 1.20 = 62.4 km/h
t_LKW_neu = 310 km / 62.4 km/h ≈ 4.968 h
Das Auto hat weniger Zeit:
t_Auto = 4.968 h − 2.5 h = 2.468 h
v_Auto = 310 km / 2.468 h ≈ 125.6 km/h
✅ Das Auto muss ca. 126 km/h fahren.`,

        },

        {

          title: 'c) % der LKW-Strecke',

          content: `Wir berechnen die Zeit, die das Auto für die Strecke braucht:
t_Auto = 310 km / 85 km/h ≈ 3.647 h
In dieser Zeit fährt der LKW:
Strecke_LKW = 52 km/h * 3.647 h ≈ 189.65 km
Prozentualer Anteil an der Gesamtstrecke:
% = (189.65 km / 310 km) * 100 ≈ 61.2%
✅ Der LKW hat ≈ 61.2% der Strecke geschafft.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106454/AP19_GMS3_%20M2_mTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
a) t = d/v → Differenz × 60 = Minuten
b) v_neu = v × 1.20 → t_LKW_neu − 2.5h = t_Auto → v_Auto = d ÷ t_Auto
c) % = (v_LKW × t_Auto) ÷ Strecke × 100`,

    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M3_2019_MTR_PROP_1',

    year: 2019,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106599/AP19_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',

    topic: 'Proportionalität', // NEU

    questionText: `Aufgabe 4: Raumstation ISS und Mars
a) Die ISS umkreist die Erde 7.25 mal in 10 h 52 min 30 s. Wie viele Umrundungen macht sie in 31 Tagen?
b) Standardvorräte reichen für 6 Crew-Mitglieder 99 Tage. Wie viele Tage würden 5 Astronauten überleben, wenn sie die Rationen halbieren?
c) 4 Astronauten stranden auf dem Mars mit Vorräten für 302 Tage. Nach 53 Tagen finden sie weitere Vorräte (reicht für 25 Personen × 32 Tage). Wie viele Tage reichen die Vorräte ab dem 54. Tag?`,

    options: [

      { label: 'a) ≈ 496 | b) 237.6 Tage | c) 449 Tage', correct: true },

      { label: 'a) ≈ 5100 | b) ≈ 220 Tage | c) ≈ 300 Tage', correct: false },

      { label: 'a) ≈ 4800 | b) ≈ 250 Tage | c) ≈ 180 Tage', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Dreisatz / Proportionalität
Direkte Proportionalität (a): Mehr Zeit → mehr Umrundungen.
Umgekehrte Proportionalität (b): Mehr Personen → weniger Tage.
Formel: Personen₁ × Tage₁ = Personen₂ × Tage₂
💡 Personentage (c):
Ein "Personentag" ist die Menge an Vorräten, die eine Person pro Tag braucht. Das ist eine super Einheit, um Vorräte zu addieren.
Total Vorräte = Anzahl Personen × Anzahl Tage`,

        },

        {

          title: 'a) ISS-Umrundungen in 31 Tagen',

          content: `Zeit umrechnen: 10 h 52 min 30 s = 10 + 52/60 + 30/3600 = 10.875 Stunden.
Rate: 7.25 Umrundungen / 10.875 h ≈ 0.666... Umrundungen pro Stunde.
Gesamtzeit: 31 Tage * 24 h/Tag = 744 Stunden.
Gesamtumrundungen = Rate * Gesamtzeit ≈ 0.666... * 744 ≈ 496.
✅ Die ISS macht ca. 496 Umrundungen.`,

        },

        {

          title: 'b) Überlebenstage bei halben Rationen',

          content: `Halbe Ration → doppelt so lange Vorräte!
Die Vorräte für 6 Personen reichen statt 99 Tage neu 198 Tage.
Jetzt Dreisatz:
6 Personen → 198 Tage
1 Person → 198 * 6 = 1188 Tage
5 Personen → 1188 / 5 = 237.6 Tage
✅ 5 Astronauten überleben 237.6 Tage.`,

        },

        {

          title: 'c) Mars: Vorräte ab 54. Tag',

          content: `Vorräte in "Personentagen" berechnen:
Originalvorrat: 4 Personen * 302 Tage = 1208 Personentage.
Verbraucht: 4 Personen * 53 Tage = 212 Personentage.
Rest Original: 1208 - 212 = 996 Personentage.
Neue Vorräte: 25 Personen * 32 Tage = 800 Personentage.
Total verfügbar: 996 + 800 = 1796 Personentage.
Diese Vorräte müssen für 4 Astronauten reichen:
Tage = Total Personentage / Personen = 1796 / 4 = 449 Tage.
✅ Die Vorräte reichen noch für 449 Tage.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106454/AP19_GMS3_%20M2_mTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
a) Umrundungen/h berechnen → × (31 × 24) Stunden
b) Halbe Ration = doppelte Dauer → dann Dreisatz
c) Personentage: (Rest_original + Neue) / Personen`,

    },

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2019_MTR_KOMB_1',

    year: 2019,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106599/AP19_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=6',

    topic: 'Körper & Netze', // NEU

    questionText: `Aufgabe 5: Würfel anmalen und zerschneiden
Ein Würfel wird rot angemalt und dann in gleiche Würfelchen zerschnitten.
a) In 27 Würfelchen (3×3×3): Wie viele haben 3 / 2 / 1 / 0 bemalte Flächen?
b) In 125 Würfelchen (5×5×5): Wie viele haben 2 / 1 / 0 bemalte Flächen?
c) In n³ Würfelchen (n > 2): Wie viele haben 2 / 1 / 0 bemalte Flächen? (Formel)`,

    options: [

      { label: 'a) 3-bem:8 | 2-bem:12 | 1-bem:6 | 0-bem:1 | b) 2-bem:36 | 1-bem:54 | 0-bem:27 | c) 12(n−2) / 6(n−2)² / (n−2)³', correct: true },

      { label: 'a) 3-bem:4 | 2-bem:8 | 1-bem:12 | 0-bem:3 | b) 2-bem:24 | 1-bem:48 | 0-bem:8', correct: false },

      { label: 'a) 3-bem:6 | 2-bem:12 | 1-bem:9 | 0-bem:0', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `🎲 Würfel zerschneiden: n×n×n Würfelchen
Ein Würfel hat 6 Flächen, 12 Kanten, 8 Ecken.
Bemalte Flächen:
• 3 bemalte Flächen: Eckwürfelchen → IMMER 8 (die Würfelecken)
• 2 bemalte Flächen: Kantenwürfelchen (ohne Ecken) → (n−2) pro Kante × 12 Kanten
• 1 bemalte Fläche: Flächenwürfelchen (nur in der Mitte) → (n−2)² pro Fläche × 6 Flächen
• 0 bemalte Flächen: Innenwürfelchen (der Kern) → (n−2)³`,

        },

        {

          title: 'a) n = 3 (27 Würfelchen)',

          content: `n = 3, also ist der "innere" Teil (n−2) = 1.
3 bemalte Flächen (Ecken): 8
2 bemalte Flächen (Kanten): 12 × (3−2) = 12 × 1 = 12
1 bemalte Fläche (Seiten): 6 × (3−2)² = 6 × 1² = 6
0 bemalte Flächen (Innen): (3−2)³ = 1³ = 1
Probe: 8+12+6+1 = 27 ✓`,

        },

        {

          title: 'b) n = 5 (125 Würfelchen)',

          content: `n = 5, also ist der "innere" Teil (n−2) = 3.
3 bemalte Flächen: 8
2 bemalte Flächen: 12 × (5-2) = 12 × 3 = 36
1 bemalte Fläche:  6 × (5-2)² = 6 × 9 = 54
0 bemalte Flächen: (5-2)³ = 3³ = 27
Probe: 8+36+54+27 = 125 ✓`,

        },

        {

          title: 'c) Allgemeine Formel für n³ Würfelchen',

          content: `3 bemalte Flächen: 8
2 bemalte Flächen: 12(n−2)
1 bemalte Fläche:  6(n−2)²
0 bemalte Flächen: (n−2)³`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106454/AP19_GMS3_%20M2_mTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
• Ecken: immer 8 (haben 3 bemalte Flächen)
• Kanten: 12 × (n−2) (haben 2 bemalte Flächen)
• Flächen: 6 × (n−2)² (haben 1 bemalte Fläche)
• Innen: (n−2)³ (haben 0 bemalte Flächen)
⚠️ Probe: alle zusammen = n³`,

    },

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2019_MTR_KONSTR_1',

    year: 2019,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106599/AP19_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=7',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 6: Dreieck spiegeln
Das Dreieck ABC soll so an einer Achse gespiegelt werden, dass die Höhe h'c des gespiegelten Dreiecks A'B'C' auf der Geraden g liegt.
a) Erstelle eine Skizze mit allen möglichen Spiegelachsen und der Spiegelung des Dreiecks an einer dieser Achsen.
b) Konstruiere alle möglichen Spiegelachsen in der gegebenen Vorlage.
c) Spiegle das Dreieck ABC an einer dieser Achsen.
📐 Für diese Aufgabe: originelle Prüfung und Lösung öffnen!`,

    options: [

      { label: 'Lösung über offizielle Schullösung verfügbar', correct: true },

      { label: 'Keine Spiegelachse existiert', correct: false },

      { label: 'Nur eine Spiegelachse möglich', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Methode: Spiegelung',

          content: `Die Bedingung: Die Höhe auf die Seite c' (also h'c) soll auf der Geraden g liegen.
Die Höhe h'c steht senkrecht auf der Seite A'B'. Das heisst, die gespiegelte Seite A'B' muss senkrecht zur Geraden g sein.

Vorgehen:
1. Zielposition finden: Zeichne eine Gerade, die senkrecht zu g ist. Das ist die Linie, auf der A'B' liegen wird.
2. Spiegelachse finden: Die Spiegelachse ist die Winkelhalbierende zwischen der ursprünglichen Gerade AB und der neuen Gerade A'B'.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen. Die Konstruktion ist visuell am besten dort nachzuvollziehen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106454/AP19_GMS3_%20M2_mTR_L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Ziel-Richtung für A'B' finden (muss senkrecht zu g sein).
2️⃣  Winkelhalbierende zwischen AB und der Ziel-Richtung konstruieren. Das ist die Spiegelachse.
3️⃣  Alle Punkte an dieser Achse spiegeln.`,

    },

  },

];


