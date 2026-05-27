export const questions2018 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'M3_2018_MTR_PROZ_1',
    year: 2018,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106449/AP18%20GMS3%20M2_mTR.pdf?fp=1#page=1',
    topic: 'Prozent & Verhältnisse',
    questionText: `Aufgabe 1: Kaffeepreise

Zwei Kaffeegeschäfte verkaufen den gleichen Kaffee mit einem Preisunterschied von Fr. 1.20 pro Kilogramm. Im günstigeren Geschäft bekommt man 450g zum Preis von Fr. 6.75.

Wie viel bezahlt man für 1.5 kg Kaffee im teureren Geschäft?

Schreibe einen Antwortsatz.`,
    options: [
      { label: 'Fr. 24.30', correct: true },
      { label: 'Fr. 22.50', correct: false },
      { label: 'Fr. 25.00', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Preis pro Kilogramm (Grundpreis)
Um Preise vergleichen zu können, rechnet man immer auf die gleiche Menge um — hier auf 1 kg.
→ Formel: Preis ÷ Menge = Grundpreis
→ Einheit beachten: 450g = 0.45 kg

💡 Preisunterschied anwenden
Wenn der Preisunterschied bekannt ist, einfach addieren oder subtrahieren.
→ Teurer = Günstig + Aufschlag

❓ Warum umrechnen?
Weil 450g ≠ 1 kg — wir können nicht direkt vergleichen ohne gemeinsame Basis.`,
        },
        {
          title: 'Schritt 1: Preis pro kg im günstigeren Geschäft',
          content: `Gegeben: 450 g → Fr. 6.75
450 g = 0.45 kg

Preis/kg = 6.75 ÷ 0.45 = Fr. 15.00 pro kg`,
        },
        {
          title: 'Schritt 2: Preis pro kg im teureren Geschäft',
          content: `Preisunterschied = Fr. 1.20 pro kg

Preis teurer = 15.00 + 1.20 = Fr. 16.20 pro kg`,
        },
        {
          title: 'Schritt 3: Preis für 1.5 kg im teureren Geschäft',
          content: `1.5 kg × Fr. 16.20/kg = Fr. 24.30

✅ Antwortsatz: Für 1.5 kg Kaffee im teureren Geschäft bezahlt man Fr. 24.30.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106603/AP18%20GMS3%20M2_mTR%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Preis ÷ Menge (in kg) → Grundpreis pro kg
2️⃣  + Aufschlag → Preis teurer Laden
3️⃣  × gewünschte Menge → Endpreis`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'M3_2018_MTR_STAT_1',
    year: 2018,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106449/AP18%20GMS3%20M2_mTR.pdf?fp=1#page=2',
    topic: 'Statistik & Diagramme',
    questionText: `Aufgabe 2: Soziale Netzwerke

Eine Umfrage: Welches soziale Netzwerk nutzen Internetnutzer am häufigsten?
- 532 gaben Facebook an
- 12% nutzen meistens Twitter
- jeder 5. Befragte nutzt am häufigsten Instagram
- Youtube belegt Platz 2 mit 1/4 Anteil aller Befragten
- 5% gaben keines der genannten Netzwerke an

a) Fülle die Tabelle vollständig aus (Anzahl & %).
b) Stelle die Ergebnisse in einem Säulendiagramm dar.`,
    options: [
      { label: 'Gesamt = 1400 | Facebook 38% | Twitter 168 | Instagram 280 | Youtube 350 | Keine 70', correct: true },
      { label: 'Gesamt = 1200 | Facebook 44% | Twitter 144 | Instagram 240 | Youtube 300 | Keine 60', correct: false },
      { label: 'Gesamt = 1600 | Facebook 33% | Twitter 192 | Instagram 320 | Youtube 400 | Keine 80', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🔢 Gesamtanzahl berechnen
Wenn wir eine Anzahl (532) und ihren Prozentanteil kennen, können wir die Gesamtzahl herleiten.
→ Formel: Gesamtzahl = Anzahl ÷ Prozentanteil

📐 Alle Prozentzahlen addieren = 100%
Facebook% = 100% − 12% − 20% − 25% − 5% = 38%
→ Jetzt können wir rückwärts rechnen: 532 Personen = 38%

❓ Warum summieren wir zuerst?
Weil wir den fehlenden Prozentanteil (Facebook) nur durch Subtraktion der bekannten Teile von 100% finden.`,
        },
        {
          title: 'Schritt 1: Prozentzahlen bestimmen',
          content: `Bekannt:
Twitter: 12%
Instagram: jeder 5. = 1/5 = 20%
Youtube: 1/4 = 25%
Keine: 5%

Facebook = 100% − 12% − 20% − 25% − 5% = 38%`,
        },
        {
          title: 'Schritt 2: Gesamtzahl berechnen',
          content: `532 Personen = 38%
Gesamt = 532 ÷ 0.38 = 1400 Personen`,
        },
        {
          title: 'Schritt 3: Tabelle ausfüllen',
          content: `Facebook:  532 Personen | 38%
Twitter:   168 Personen | 12%   (1400 × 0.12)
Instagram: 280 Personen | 20%   (1400 × 0.20)
Youtube:   350 Personen | 25%   (1400 × 0.25)
Keine:      70 Personen |  5%   (1400 × 0.05)
──────────────────────────────────
Gesamt:   1400 Personen | 100% ✅`,
        },
        {
          title: '📊 Säulendiagramm',
          content: `Beschriftung:
→ X-Achse: Soziale Netzwerke (Facebook, Twitter, Instagram, Youtube, Keine)
→ Y-Achse: Anzahl Befragte (0 bis 600)
→ Jede Säule entspricht der Anzahl aus der Tabelle.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106603/AP18%20GMS3%20M2_mTR%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle bekannten % summieren → fehlenden % = 100% − Rest
2️⃣  Gesamtzahl = bekannte Anzahl ÷ ihr Anteil
3️⃣  Alle anderen: Gesamtzahl × jeweiliger Anteil`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'M3_2018_MTR_GLSYS_1',
    year: 2018,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106449/AP18%20GMS3%20M2_mTR.pdf?fp=1#page=3',
    topic: 'Terme & Algebra',
    questionText: `Aufgabe 3: Teppichplatten

Ein rechteckiges Zimmer wird mit quadratischen Platten (Seitenlänge s) und rechteckigen Platten (16 dm × 12 dm) belegt.

Variante 1: 9 rechteckige + 6 quadratische Platten
Variante 2: 3 rechteckige + 24 quadratische Platten
(beide Varianten decken das ganze Zimmer)

Variante 2 ist total Fr. 27.– teurer.
Eine rechteckige Platte kostet Fr. 75.–

a) Wie lang ist die Seitenlänge s?
b) Wie teuer ist eine quadratische Platte?`,
    options: [
      { label: 'a) s = 8 dm | b) Fr. 26.50', correct: true },
      { label: 'a) s = 6 dm | b) Fr. 32.00', correct: false },
      { label: 'a) s = 10 dm | b) Fr. 20.00', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Gleiches Zimmer = gleiche Fläche
Beide Varianten decken dasselbe Zimmer → Gesamtfläche ist identisch.
→ Wir können die Flächengleichung aufstellen!

🔢 Fläche rechteckige Platte: 16 × 12 = 192 dm²
🔢 Fläche quadratische Platte: s × s = s²

💡 Gleichungssystem
Zwei Varianten → eine Gleichung aus der Fläche, eine aus dem Preis.`,
        },
        {
          title: 'Schritt 1: Gleichung aus Flächengleichheit',
          content: `Variante 1: 9 × 192 + 6 × s² = Zimmerfläche
Variante 2: 3 × 192 + 24 × s² = Zimmerfläche

Da beide gleich sind:
9 × 192 + 6s² = 3 × 192 + 24s²
1728 + 6s² = 576 + 24s²
1728 − 576 = 24s² − 6s²
1152 = 18s²
s² = 64
s = 8 dm

✅ Die quadratische Platte hat Seitenlänge 8 dm.`,
        },
        {
          title: 'Schritt 2: Preis der quadratischen Platte',
          content: `Sei p = Preis einer quadratischen Platte.

Variante 1 kostet: 9 × 75 + 6p = 675 + 6p
Variante 2 kostet: 3 × 75 + 24p = 225 + 24p

Variante 2 ist Fr. 27 teurer:
225 + 24p = 675 + 6p + 27
225 + 24p = 702 + 6p
18p = 477
p = Fr. 26.50

✅ Eine quadratische Platte kostet Fr. 26.50.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106603/AP18%20GMS3%20M2_mTR%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Gleiche Gesamtfläche → Gleichung aufstellen und s² lösen
2️⃣  s = √(s²)
3️⃣  Preisgleichung: Variante 2 − Variante 1 = +27 Fr. → p lösen`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'M3_2018_MTR_GEO_1',
    year: 2018,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106449/AP18%20GMS3%20M2_mTR.pdf?fp=1#page=4',
    topic: 'Geometrie & Flächeninhalt',
    questionText: `Aufgabe 4: Rechtecke A, B, C, D und E

Die Rechtecke A, B und C haben alle den gleichen Umfang von 39 cm. Die Breite von A und B beträgt 14 cm (siehe Zeichnung).

a) Berechne die fehlenden Seitenlängen der Rechtecke A, B und C.
b) Der Flächeninhalt von Rechteck D beträgt 67.5 cm². Berechne die Seitenlängen von D.
c) Das grosse Rechteck (A+B+C+D+E) hat Umfang 79.5 cm. Berechne den Flächeninhalt von E.`,
    options: [
      { label: 'a) A&B: h=5.5cm, C: b=8.5cm | b) D: h=3cm, b=22.5cm | c) E: 45.5 cm²', correct: true },
      { label: 'a) A&B: h=5cm, C: b=9cm | b) D: h=3.5cm | c) E: 50 cm²', correct: false },
      { label: 'a) A&B: h=6cm, C: b=7.5cm | b) D: h=2.5cm | c) E: 40 cm²', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Umfang Rechteck = 2 × (Länge + Breite)
→ Umgestellt: fehlende Seite = U/2 − bekannte Seite

🏗️ Aufbau des grossen Rechtecks:
A und B: nebeneinander links (Breite 14 cm, je eigene Höhe)
C: rechts von A und B (Höhe = h_A + h_B)
D: oben über A und C
E: ganz rechts (volle Höhe des grossen Rechtecks)`,
        },
        {
          title: 'Schritt 1: a) Seitenlängen A und B',
          content: `Umfang A = 39 cm, Breite = 14 cm
2(14 + h) = 39 → h = 39/2 − 14 = 19.5 − 14 = 5.5 cm

✅ A und B haben je Höhe 5.5 cm.`,
        },
        {
          title: 'Schritt 2: a) Seitenlänge C',
          content: `C ist rechts von A+B → Höhe von C = h_A + h_B = 5.5 + 5.5 = 11 cm
Umfang C = 39 cm:
2(b_C + 11) = 39 → b_C = 19.5 − 11 = 8.5 cm

✅ C hat Breite 8.5 cm.`,
        },
        {
          title: 'Schritt 3: b) Seitenlängen D',
          content: `D liegt oben → Breite von D = 14 + 8.5 = 22.5 cm
Fläche D = 67.5 cm²:
Höhe D = 67.5 ÷ 22.5 = 3 cm

✅ D: 22.5 cm × 3 cm`,
        },
        {
          title: 'Schritt 4: c) Flächeninhalt E',
          content: `Gesamthöhe = h_D + h_A + h_B = 3 + 5.5 + 5.5 = 14 cm
Gesamtumfang = 79.5 cm:
2(Gesamtbreite + 14) = 79.5
Gesamtbreite = 39.75 − 14 = 25.75 cm

Breite E = 25.75 − 14 − 8.5 = 3.25 cm
Fläche E = 3.25 × 14 = 45.5 cm²

✅ Flächeninhalt E = 45.5 cm²`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106603/AP18%20GMS3%20M2_mTR%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  A, B: Höhe = U/2 − 14
2️⃣  C: Höhe = h_A + h_B → Breite = U/2 − Höhe
3️⃣  D: Breite = 14+Breite_C → Höhe = Fläche ÷ Breite
4️⃣  E: Gesamthöhe über Umfang → Breite E = Rest → Fläche = Breite × Höhe`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'M3_2018_MTR_PYTH_1',
    year: 2018,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106449/AP18%20GMS3%20M2_mTR.pdf?fp=1#page=5',
    topic: 'Pythagoras & Trigonometrie',
    questionText: `Aufgabe 5: Tablet-Ständer

Ein Tablet steht schräg auf einem Ständer. Der Ständer ist in der Mitte der Höhe h des Tablets angebracht. Das Seitenverhältnis h:b = 2:3. Die eingezeichnete Strecke s₁ = 15 cm. Der Winkel am Boden beträgt 45°.

a) Berechne die Höhe h des Tablets. (Runde auf 2 Nachkommastellen)
b) Berechne die Länge der Diagonalen d des Tablets. (Runde auf 2 Nachkommastellen)`,
    options: [
      { label: 'a) h = 30.00 cm | b) d ≈ 54.08 cm', correct: true },
      { label: 'a) h = 15.00 cm | b) d ≈ 27.04 cm', correct: false },
      { label: 'a) h = 24.00 cm | b) d ≈ 43.27 cm', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `📐 Ständer-Dreieck (rechtwinkliges Dreieck)
Der Ständer bildet mit dem Tisch und dem Tablet ein rechtwinkliges Dreieck.
→ Winkel am Boden: 45°
→ Gegenkathete = Ankathete (bei 45° sind beide Katheten gleich lang)
→ tan(45°) = 1 → Gegenkathete = Ankathete = s₁

📏 Seitenverhältnis h:b = 2:3
→ b = 3/2 × h

📐 Pythagoras für die Diagonale:
d = √(h² + b²)`,
        },
        {
          title: 'Schritt 1: a) Höhe h berechnen',
          content: `Der Ständer ist bei h/2 befestigt.
Dreieck mit Winkel 45° und Basis s₁ = 15 cm:

tan(45°) = 1 → Höhe = Basis = 15 cm
Diese Höhe = h/2:

h/2 = 15 cm × tan(45°) = 15 cm
h = 30 cm

✅ h = 30.00 cm`,
        },
        {
          title: 'Schritt 2: b) Diagonale d berechnen',
          content: `Seitenverhältnis h:b = 2:3
b = 3/2 × 30 = 45 cm

Pythagoras:
d = √(h² + b²)
d = √(30² + 45²)
d = √(900 + 2025)
d = √2925
d ≈ 54.08 cm

✅ Diagonale d ≈ 54.08 cm`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106603/AP18%20GMS3%20M2_mTR%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Ständer: 45° → tan(45°)=1 → h/2 = s₁ → h = 2×s₁
2️⃣  Breite: b = 3/2 × h (aus Verhältnis 2:3)
3️⃣  Diagonale: d = √(h² + b²)`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'M3_2018_MTR_GESCH_1',
    year: 2018,
    subject: 'Mathe',
    exam: 'Mathe mit TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106449/AP18%20GMS3%20M2_mTR.pdf?fp=1#page=6',
    topic: 'Geschwindigkeit & Zeit',
    questionText: `Aufgabe 6: Züge und Autos

a) Zwei Schnellzüge befahren die 450 km Strecke zwischen Städten A und B auf parallelen Gleisen. Zug 1 von A→B mit 150 km/h. Zug 2 gleichzeitig von B→A mit 100 km/h. Nach wie vielen Minuten begegnen sie sich?

b) Ein Güterzug (Länge 350 m) fährt durch den Gotthardtunnel (15.6 km) mit 110 km/h. Wie lange dauert die vollständige Durchfahrt? (Gib Minuten und Sekunden an)

c) Ein rotes Auto (5 m) will ein blaues Auto (4 m) überholen. Beginn: roter Abstand 10 m hinter Blauem. Ende: rotes Auto 10 m vor Blauem. Rot: 90 km/h, Blau: 72 km/h. Wie viele Sekunden dauert der Überholvorgang?`,
    options: [
      { label: 'a) 108 min | b) 8 min 42 s | c) 5.8 s', correct: true },
      { label: 'a) 120 min | b) 9 min 10 s | c) 4.5 s', correct: false },
      { label: 'a) 90 min | b) 7 min 55 s | c) 6.2 s', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: '📖 Begriffe',
          content: `🚂 Entgegenkommende Züge (a)
Zwei Züge fahren aufeinander zu → ihre Geschwindigkeiten ADDIEREN sich.
→ Relativgeschwindigkeit = v₁ + v₂
→ Zeit = Distanz ÷ Relativgeschwindigkeit

🚄 Tunneldurchfahrt (b)
Der Zug muss komplett durch den Tunnel — also Zuglänge DAZU zählen.
→ Gesamtstrecke = Tunnellänge + Zuglänge

🚗 Überholvorgang (c)
Das rote Auto muss relativ zum blauen eine bestimmte Strecke aufholen.
→ Relativgeschwindigkeit = v_rot − v_blau
→ Strecke = Abstand_vor + Länge_blau + Länge_rot + Abstand_nach`,
        },
        {
          title: 'a) Begegnung der Züge',
          content: `Relativgeschwindigkeit = 150 + 100 = 250 km/h
Zeit = 450 ÷ 250 = 1.8 h = 108 Minuten

✅ Die Züge begegnen sich nach 108 Minuten.`,
        },
        {
          title: 'b) Tunneldurchfahrt',
          content: `Gesamtstrecke = 15 600 m + 350 m = 15 950 m = 15.95 km
Zeit = 15.95 ÷ 110 = 0.145 h
0.145 × 3600 = 522 Sekunden
= 8 Minuten 42 Sekunden

✅ Die Durchfahrt dauert 8 min 42 s.`,
        },
        {
          title: 'c) Überholvorgang',
          content: `Relativgeschwindigkeit = 90 − 72 = 18 km/h = 5 m/s

Strecke (relativ):
• 10 m (Abstand vorne, vor Beginn)
• + 4 m (Länge blaues Auto)
• + 5 m (Länge rotes Auto)
• + 10 m (Abstand hinten, nach Ende)
= 29 m

Zeit = 29 ÷ 5 = 5.8 Sekunden

✅ Der Überholvorgang dauert 5.8 Sekunden.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106603/AP18%20GMS3%20M2_mTR%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
a) Entgegen: Relativg. = v₁+v₂ → t = d ÷ Relativg.
b) Tunnel: Strecke = Tunnel + Zug → in km → ÷ v → ×3600 = Sek.
c) Überholen: Relativg. = Diff. → Strecke = 10+L_blau+L_rot+10 → ÷ Relativg.`,
    },
  },

];