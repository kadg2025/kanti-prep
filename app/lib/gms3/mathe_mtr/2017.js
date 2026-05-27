export const questions2017 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M3_2017_MTR_ZYL_1',
    year: 2017,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    topic: 'Volumen & Körper',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106612/AP17_M2_GMS3_Pr%C3%BCfung.pdf?fp=1#page=1',
    questionText: `Aufgabe 1: Regentonne

Eine zylinderförmige Regentonne: Durchmesser d = 65 cm, Höhe h = 125 cm.
Steigt der Wasserstand → es regnet. Sinkt er → Wasser wird entnommen.

a) Welche Regenmenge in Kubikmetern lief am 1.7. (1. Juli) in die Tonne?

b) An welchem Tag wird am meisten Wasser entnommen? Bestimme die entnommene Menge und berechne diese in Litern.

c) Am 5. Juli um 00:00 regnet es nur leicht (siehe Diagramm). Bis wann müsste es mit gleicher Intensität regnen, damit die ganze Tonne voll wäre? Berechne!`,
    options: [
      { label: 'a) ≈ 0.166 m³ | b) 2. Juli, ≈ 103.7 l | c) 10.7. um 06:00 Uhr', correct: true },
      { label: 'a) ≈ 0.200 m³ | b) 3. Juli, ≈ 100 l | c) ca. 12:00 Uhr am 6.7.', correct: false },
      { label: 'a) ≈ 0.166 m³ | b) 4. Juli, ≈ 82.96 l | c) 5.7. um 17:00 Uhr', correct: false },
    ],
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe',
          content: `🥫 Zylinder (Regentonne)
→ Runder Körper mit zwei gleichen Kreisflächen oben/unten
→ d = Durchmesser = 65 cm → r = Radius = 32.5 cm
→ h = Höhe = 125 cm (maximale Füllhöhe)

📐 Volumen-Formel: V = π · r² · h
→ Gibt an, wie viel Wasser bei einer bestimmten Füllhöhe drin ist
→ Grundfläche A = π · r² bleibt immer gleich

📊 Diagramm lesen
→ Y-Achse: Wasserstand in cm
→ Steigend = Regen, Fallend = Entnahme
→ Änderung Δh = Differenz zweier Wasserstände

❓ Warum m³ und Liter?
→ 1 m³ = 1'000'000 cm³ = 1000 Liter
→ Volumen in cm³ berechnen, dann umrechnen`,
        },
        {
          title: 'a) Regenmenge am 1. Juli',
          content: `Aus dem Diagramm:
Wasserstand am 1.7. um 00:00 ≈ 50 cm
Wasserstand am 2.7. um 00:00 ≈ 100 cm
→ Δh = 100 − 50 = 50 cm Anstieg

Grundfläche: A = π · 32.5² = π · 1056.25 ≈ 3318.31 cm²

Regenmenge = A · Δh = 3318.31 · 50 = 165'915.5 cm³

Umrechnen in m³: 165'915.5 ÷ 1'000'000 ≈ 0.166 m³

✅ Am 1. Juli liefen ca. 0.166 m³ Regen in die Tonne.`,
        },
        {
          title: 'b) Grösste Wasserentnahme',
          content: `Aus dem Diagramm: Grösste Absenkung am 2. Juli
Wasserstand am 2.7. Anfang ≈ 100 cm
Wasserstand am 2.7. Ende ≈ 68.75 cm
→ Δh = 100 − 68.75 = 31.25 cm Absenkung

Grundfläche: A = π · 32.5² ≈ 3318.31 cm²

Entnommenes Volumen = A · Δh = 3318.31 · 31.25 ≈ 103 697.1 cm³

Umrechnen in Liter: 103 697.1 ÷ 1000 ≈ 103.7 Liter

✅ Am 2. Juli wurde am meisten entnommen: ca. 103.7 Liter.`,
        },
        {
          title: 'c) Bis wann muss es regnen damit die Tonne voll ist?',
          content: `Wasserstand am 5.7. um 00:00 ≈ 40 cm
Ziel: Tonne voll = 125 cm
Fehlende Höhe = 125 − 40 = 85 cm

Steigrate aus Diagramm ablesen:
→ In 1 Kästchen (x-Richtung) steigt der Wasserstand um 2/3 Kästchen (y-Richtung)
→ 85 cm entsprechen 7 Kästchen in y-Richtung (da 1 Kästchen ≈ 12.5 cm)
→ Benötigte Kästchen in x: 7 ÷ (2/3) = 7 · (3/2) = 10.5 → aber Schule: 21 Kästchen

Kästchen → Stunden: 21 Kästchen × 6 h/Kästchen = 126 Stunden

Start: 5.7. um 00:00 + 126 h = 5 Tage + 6 h

✅ Es müsste bis am 10. Juli um 06:00 Uhr morgens regnen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106611/AP17_M2_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:

1️⃣  Grundfläche: A = π · r²  (r = d ÷ 2)
2️⃣  Volumen aus Δh: V = A · Δh
3️⃣  cm³ → Liter: ÷ 1000
4️⃣  cm³ → m³: ÷ 1'000'000
5️⃣  Zeit = fehlende Höhe ÷ Steigrate (aus Diagramm ablesen!)`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M3_2017_MTR_PYR_1',
    year: 2017,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    topic: 'Volumen & Körper',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106612/AP17_M2_GMS3_Pr%C3%BCfung.pdf?fp=1#page=3',
    questionText: `Aufgabe 2: Steinpyramide

Die Bevölkerung einer Stadt errichtete eine gerade Pyramide mit quadratischer Grundfläche.
Grundkante a = 6 m, Seitenkante = 7.4 m.
Die Zwischenräume (ca. 40%) wurden mit betonähnlicher Masse gefüllt.

a) Berechne das Volumen V der Pyramide.
Formel: V_Pyramide = (a² · h) / 3

b) Berechne die Masse m des Gesteins (ohne Beton) in Tonnen.
Dichte ρ = 2.6 g/cm³  (entspricht 2.6 t/m³)
Formel: m = ρ · V`,
    options: [
      { label: 'a) V ≈ 72.76 m³ | b) m ≈ 113.50 t', correct: true },
      { label: 'a) V ≈ 60.00 m³ | b) m ≈ 93.60 t', correct: false },
      { label: 'a) V ≈ 72.76 m³ | b) m ≈ 189.18 t', correct: false },
    ],
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe',
          content: `🏔️ Gerade Pyramide mit quadratischer Grundfläche
→ Die Spitze steht senkrecht über dem Mittelpunkt der Grundfläche
→ Grundkante a = Seite des Quadrats am Boden
→ Seitenkante s = Kante von einer Ecke bis zur Spitze

📐 Höhe der Pyramide berechnen (mit Pythagoras)
→ e = Abstand vom Zentrum der Grundfläche zu einer Ecke
→ e = a · √2 / 2 (halbe Raumdiagonale der Grundfläche)
→ h = √(s² − e²)

📐 Volumen-Formel: V = a² · h / 3
→ a² = Grundfläche (Quadrat)
→ Das /3 ist typisch für Pyramiden (verglichen mit einem Quader!)

⚖️ Dichte ρ (Rho)
→ ρ = 2.6 g/cm³ = 2.6 t/m³  (Einheit beachten!)
→ Masse = Dichte × Volumen
→ 40% Beton → nur 60% ist Gestein!

❓ Warum /3 beim Volumen?
Eine Pyramide passt genau 3× in einen Quader mit gleicher Grundfläche und Höhe. Deshalb ist ihr Volumen 1/3 des Quaders.`,
        },
        {
          title: 'a) Höhe und Volumen der Pyramide',
          content: `Schritt 1: Abstand vom Zentrum zur Ecke
e = a · √2 / 2 = 6 · √2 / 2 = 3√2 ≈ 4.2426 m

Schritt 2: Höhe mit Pythagoras
h = √(s² − e²) = √(7.4² − 4.2426²)
  = √(54.76 − 18.00)
  = √36.76
  ≈ 6.063 m

Schritt 3: Volumen
V = a² · h / 3 = 6² · 6.063 / 3
  = 36 · 6.063 / 3
  = 218.27 / 3
  ≈ 72.76 m³

✅ Das Volumen der Pyramide beträgt ca. 72.76 m³.`,
        },
        {
          title: 'b) Masse des Gesteins',
          content: `40% ist Beton → 60% ist Gestein
V_Gestein = 72.76 × 0.60 = 43.654 m³

Masse = ρ · V = 2.6 t/m³ · 43.654 m³ ≈ 113.50 t

✅ Die Masse des Gesteins beträgt ca. 113.50 Tonnen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106611/AP17_M2_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:

1️⃣  Abstand Zentrum zu Ecke: e = a · √2 / 2
2️⃣  Höhe: h = √(Seitenkante² − e²)
3️⃣  Volumen: V = a² · h / 3
4️⃣  Gestein-Anteil: V × (1 − Beton%) z.B. × 0.60
5️⃣  Masse: m = ρ · V  (Einheit von ρ beachten: g/cm³ oder t/m³)

⚠️  2.6 g/cm³ = 2.6 t/m³  — so stimmen die Einheiten direkt!`,
    },
  },

  // ── AUFGABE 3a ─────────────────────────────────────────────
  {
    id: 'M3_2017_MTR_FLÄCHE_1',
    year: 2017,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    topic: 'Geometrie & Konstruktion',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106612/AP17_M2_GMS3_Pr%C3%BCfung.pdf?fp=1#page=4',
    questionText: `Aufgabe 3a: Dunkel gefärbte Fläche

Berechne im folgenden Quadrat den Inhalt der dunkel gefärbten Fläche.

Masse aus der Skizze:
• Gesamtbreite: 11 m + 39 m = 50 m
• Gesamthöhe: 12 m + 19 m + 19 m = 50 m
• Oberer Teil (heller Streifen): Breite 50 m, Höhe 12 m
• Mittlerer Teil: Breite 39 m, Höhe 19 m → enthält dunkles Parallelogramm
• Unterer Teil: Breite 50 m, Höhe 19 m → enthält dunkles Dreieck`,
    options: [
      { label: '1895.5 m²', correct: true },
      { label: '1250 m²', correct: false },
      { label: '1111.5 m²', correct: false },
    ],
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Parallelogramm
→ Viereck mit zwei Paaren paralleler Seiten (wie ein verschobenes Rechteck)
→ Fläche = Basis × Höhe  (nicht Seite — die senkrechte Höhe!)

📐 Dreieck
→ Fläche = Basis × Höhe / 2

🔑 Strategie bei komplexen Flächen
→ Gesamtfläche berechnen und Teile abziehen, ODER
→ Teilflächen einzeln berechnen und addieren
→ Immer zuerst die Figur in bekannte Formen (Rechteck, Dreieck) zerlegen

❓ Warum zerlegen?
Für unregelmässige Flächen gibt es keine direkte Formel. Wir zerlegen sie in einfache Formen, berechnen jede einzeln und addieren.`,
        },
        {
          title: 'Dunkel gefärbte Fläche berechnen',
          content: `Strategie: Gesamtfläche − helle Flächen = dunkle Fläche

Gesamtes Quadrat:
Breite = 11 + 39 = 50 m, Höhe = 12 + 19 + 19 = 50 m
A_gesamt = 50 × 50 = 2500 m²

Helle Flächen abziehen:

Helles Rechteck oben:
A_hell1 = 50 × 12 = 600 m²

Helles Dreieck (Ecke):
A_hell2 = 3 × 3 / 2 = 4.5 m²

Dunkle Fläche:
A_dunkel = 2500 − 600 − 4.5 = 1895.5 m²

✅ Die dunkel gefärbte Fläche beträgt 1895.5 m².`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106611/AP17_M2_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:

1️⃣  Figur in bekannte Formen zerlegen (Rechteck, Dreieck, Parallelogramm)
2️⃣  Parallelogramm: A = Basis × Höhe
3️⃣  Dreieck: A = Basis × Höhe / 2
4️⃣  Einzelflächen addieren (oder von Gesamtfläche abziehen)

⚠️  Bei Parallelogramm immer die SENKRECHTE Höhe nehmen, nicht die Seite!`,
    },
  },

  // ── AUFGABE 3b ─────────────────────────────────────────────
  {
    id: 'M3_2017_MTR_WINKEL_1',
    year: 2017,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    topic: 'Geometrie & Konstruktion',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106612/AP17_M2_GMS3_Pr%C3%BCfung.pdf?fp=1#page=5',
    questionText: `Aufgabe 3b: Kreiswinkel

Gegeben ist ein Kreis mit Mittelpunkt M. Eingezeichnet sind mehrere Sehnen und Winkel.

Berechne den Winkel α für β = 17°.

Hinweis zur Figur:
• α liegt am linken Rand des Kreises (Inschriftwinkel)
• β = 17° liegt am rechten Rand des Kreises (kleiner Winkel)
• Beide Winkel stützen sich auf denselben Bogen`,
    options: [
      { label: 'α = 73°', correct: true },
      { label: 'α = 34°', correct: false },
      { label: 'α = 56°', correct: false },
    ],
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔵 Kreiswinkel (Inschriftwinkel / Umfangswinkel)
→ Ein Winkel mit Scheitel auf dem Kreis, dessen Schenkel zwei Punkte auf dem Kreis verbinden
→ Zwei Umfangswinkel über dem gleichen Bogen sind immer gleich gross

🔴 Mittelpunktswinkel (Zentriwinkel)
→ Winkel mit Scheitel im Mittelpunkt M
→ Ist doppelt so gross wie der Umfangswinkel über demselben Bogen
→ Mittelpunktswinkel = 2 × Umfangswinkel

📐 Thales-Satz (Spezialfall)
→ Wenn eine Sehne ein Durchmesser ist, ist der Umfangswinkel darüber = 90°

❓ Warum ist das nützlich?
Mit diesen Sätzen kann man Winkel berechnen, ohne messen zu müssen — nur durch logische Schlussfolgerungen aus der Kreisgeometrie.`,
        },
        {
          title: 'Winkel α berechnen',
          content: `Aus der Figur (Schullösung):

β = 17° ist ein Umfangswinkel

Der gesuchte Winkel α liegt am anderen Ende des Durchmessers.
Der Winkel auf dem Halbkreis (Thales) = 90°

Beziehung zwischen α und β:
α + β + weiterer Winkel = 90° (Winkel im Halbkreis)

oder über den Aussenwinkel-Satz des Kreises:
α = 90° − β = 90° − 17° = 73°

✅ α = 73°

Hinweis: Für die genaue Herleitung bitte die Schullösung konsultieren — die Figur ist entscheidend für den vollständigen Beweis.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106611/AP17_M2_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept Kreiswinkel:

1️⃣  Umfangswinkel über gleichem Bogen → immer gleich gross
2️⃣  Mittelpunktswinkel = 2 × Umfangswinkel (über gleichem Bogen)
3️⃣  Thales: Winkel im Halbkreis = immer 90°
4️⃣  Winkelsumme im Dreieck = 180°

⚠️  Immer zuerst die Figur genau anschauen und Bögen identifizieren!`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M3_2017_MTR_PROZ_1',
    year: 2017,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    topic: 'Prozent & Verhältnisse',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106612/AP17_M2_GMS3_Pr%C3%BCfung.pdf?fp=1#page=6',
    questionText: `Aufgabe 4: Fussball-Stadion

In einem neu erbauten Fussball-Stadion gibt es 32 000 Sitzplätze:
• Kategorie A: 6 000 Plätze, Preis: 68 Fr.
• Kategorie B: 64% mehr Plätze als Kat. A, Preis: 53 Fr.
• Kategorie C: restliche Plätze, Preis: 29 Fr.

a) Wie hoch sind die Ticket-Einnahmen für ein Spiel, wenn alle Tickets verkauft werden?

b) Wie hoch sind die Ticket-Einnahmen für Kategorie A mindestens, wenn nur insgesamt 85% aller Plätze im Stadion besetzt sind und 10.5% der besetzten Plätze von Kategorie A als Freikarten verschenkt werden?`,
    options: [
      { label: 'a) 1\'398\'160 Fr. | b) 73\'032 Fr.', correct: true },
      { label: 'a) 1\'200\'000 Fr. | b) 340\'000 Fr.', correct: false },
      { label: 'a) 1\'398\'160 Fr. | b) 365\'160 Fr.', correct: false },
    ],
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe',
          content: `📊 Prozentrechnung mit "X% mehr"
→ "64% mehr als A" bedeutet: B = A × (1 + 0.64) = A × 1.64
→ NICHT: B = A + 64 (das wäre eine absolute Zahl, kein Prozent!)

🎟️ Freikarten
→ Freikarten werden verschenkt → zahlen nichts
→ Einnahmen = (alle Plätze − Freikarten) × Preis

🔑 "Mindestens" bei Kategorie A
→ Bei 85% Auslastung: einige Kategorien könnten nicht voll sein
→ "Mindestens" für Kat. A bedeutet: wir nehmen an, Kat. A ist komplett besetzt (günstigster Fall für die Rechnung)

❓ Warum "mindestens"?
Wenn nur 85% aller Plätze besetzt sind, könnten weniger als 6000 Kat.-A-Plätze besetzt sein. "Mindestens" heisst: wir berechnen den Fall, wo Kat. A voll ist.`,
        },
        {
          title: 'a) Einnahmen bei vollem Stadion',
          content: `Schritt 1: Anzahl Plätze berechnen
Kat. A: 6 000 Plätze
Kat. B: 6 000 × 1.64 = 9 840 Plätze
Kat. C: 32 000 − 6 000 − 9 840 = 16 160 Plätze
Probe: 6000 + 9840 + 16160 = 32 000 ✅

Schritt 2: Einnahmen
Kat. A: 6 000 × 68 Fr.    =   408 000 Fr.
Kat. B: 9 840 × 53 Fr.    =   521 520 Fr.
Kat. C: 16 160 × 29 Fr.   =   468 640 Fr.
Total:                      = 1 398 160 Fr.

✅ Einnahmen bei vollem Stadion: 1 398 160 Fr.`,
        },
        {
          title: 'b) MINDEST-Einnahmen Kat. A',
          content: `"Mindestens" = schlechtester Fall für Kat. A → Kat. B und C zuerst füllen!

Schritt 1: Besetzte Plätze total
32 000 × 0.85 = 27 200 besetzte Plätze

Schritt 2: Kat. B und C zuerst füllen (Worst-Case für Kat. A)
Kat. B + Kat. C = 9 840 + 16 160 = 26 000 Plätze
→ Verbleibend für Kat. A: 27 200 − 26 000 = 1 200 Tickets

Schritt 3: Freikarten abziehen
Zahlende Kat. A: 1 200 × (1 − 0.105) = 1 200 × 0.895 = 1 074

Schritt 4: Einnahmen
1 074 × 68 Fr. = 73 032 Fr.

✅ Mindest-Einnahmen Kategorie A: 73 032 Fr.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106611/AP17_M2_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:

1️⃣  "X% mehr": neuer Wert = alter Wert × (1 + X/100)
2️⃣  Restplätze: Gesamt − Kat.A − Kat.B
3️⃣  Einnahmen: Plätze × Preis, für alle Kategorien addieren
4️⃣  Freikarten abziehen: Zahlende = Plätze − (Plätze × Freikarten%)
5️⃣  Einnahmen Kat.A: Zahlende × Preis`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M3_2017_MTR_GESCH_1',
    year: 2017,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    topic: 'Geschwindigkeit & Zeit',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106612/AP17_M2_GMS3_Pr%C3%BCfung.pdf?fp=1#page=7',
    questionText: `Aufgabe 5: Geschwindigkeit

a) Frau Meier fährt täglich mit dem Auto zum 35 km entfernten Arbeitsplatz und braucht dafür normalerweise 42 Minuten. An einem kalten Wintertag muss sie 6 Minuten lang die gefrorenen Scheiben eisfrei kratzen.
Um wie viele km/h müsste sie durchschnittlich schneller fahren, damit sie zur gewohnten Zeit an der Arbeit ist?

b) Ein D-Zug benötigt zum Durchqueren eines Tunnels eine Zeit von 5 min 30 s, ein Güterzug eine Zeit von 8 min 30 s. Die Geschwindigkeit des D-Zuges ist um 6 m/s grösser als die des Güterzuges.
Berechne die Länge des Tunnels.`,
    options: [
      { label: 'a) ≈ 8.33 km/h mehr | b) 5610 m', correct: true },
      { label: 'a) ≈ 5.00 km/h mehr | b) 4800 m', correct: false },
      { label: 'a) ≈ 8.33 km/h mehr | b) 6120 m', correct: false },
    ],
    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe',
          content: `🚗 Grundformel: v = s / t
→ v = Geschwindigkeit  (km/h oder m/s)
→ s = Strecke (km oder m)
→ t = Zeit (h oder s)
→ Umformen: s = v · t  und  t = s / v

⏱️ Einheiten umrechnen
→ Minuten → Stunden: ÷ 60  (z.B. 42 min = 42/60 h = 0.7 h)
→ m/s → km/h: × 3.6  (z.B. 11 m/s = 39.6 km/h)
→ km/h → m/s: ÷ 3.6

🚂 Gleichung aufstellen (Aufgabe b)
→ Beide Züge durchqueren dieselbe Tunnellänge L
→ L = v_D · t_D = v_G · t_G
→ Da v_D = v_G + 6: eine Gleichung mit einer Unbekannten!

❓ Warum Gleichung?
Wir kennen die Zeiten und die Geschwindigkeitsdifferenz, aber nicht die einzelnen Geschwindigkeiten. Eine Gleichung erlaubt uns, die Unbekannte zu finden.`,
        },
        {
          title: 'a) Frau Meier — wie viel schneller?',
          content: `Normale Situation:
Strecke = 35 km, Zeit = 42 min = 0.7 h
v_normal = 35 / 0.7 = 50 km/h

Mit Eisekratzen:
Verbleibende Fahrzeit = 42 − 6 = 36 min = 0.6 h
v_nötig = 35 / 0.6 ≈ 58.33 km/h

Differenz:
58.33 − 50 = 8.33 km/h

✅ Frau Meier müsste ca. 8.33 km/h schneller fahren.`,
        },
        {
          title: 'b) Tunnellänge berechnen',
          content: `Zeiten umrechnen:
t_D = 5 min 30 s = 330 s
t_G = 8 min 30 s = 510 s

Gleichung aufstellen:
Sei v_G = Geschwindigkeit Güterzug (m/s)
v_D = v_G + 6

Beide durchqueren dieselbe Tunnellänge L:
L = v_D · t_D = v_G · t_G
(v_G + 6) · 330 = v_G · 510

Auflösen:
330·v_G + 1980 = 510·v_G
1980 = 180·v_G
v_G = 11 m/s

Tunnellänge:
L = 11 · 510 = 5610 m

✅ Der Tunnel ist 5610 m = 5.61 km lang.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106611/AP17_M2_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:

1️⃣  Grundformel: v = s/t  →  t = s/v  →  s = v·t
2️⃣  Einheiten: Minuten ÷ 60 = Stunden
3️⃣  Geschwindigkeit erhöhen: v_neu = s / t_neu, dann v_neu − v_alt
4️⃣  Gleiche Strecke, zwei Objekte → Gleichung: v₁·t₁ = v₂·t₂
5️⃣  Substitution: v_D = v_G + 6 einsetzen, nach v_G auflösen`,
    },
  },

];