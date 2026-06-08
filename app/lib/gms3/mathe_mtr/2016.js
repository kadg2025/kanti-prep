export const questions2016 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2016_MTR_PROZ_1',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106441/AP16_M_GMS3_Teil_2_Pruefung.pdf?fp=1#page=1',

    topic: 'Prozent & Zins', // NEU

    questionText: `Aufgabe 1: Sabine hat an ihrem Velo einen Kilometerzähler.

a) Sie fährt eine Strecke ab, die auf der Karte im Massstab 1:25 000 exakt 49 cm misst. Ihr Zähler gibt 13 km an.

Um wie viel % weicht die Zählerangabe von der wirklichen Streckenlänge gemäss Karte ab?

b) Heute beträgt der Zählerstand 1464 km. Sie möchte so weit fahren, bis der Zähler das nächste Mal nur zwei verschiedene Ziffern zeigt.

b1) Welche Zahl zeigt der Zähler an?

b2) Welches ist die wirkliche Länge der heutigen Strecke gemäss Karte?

(Wenn du a) nicht lösen konntest, nimm an, dass die Zählerangabe von der wirklichen Streckenlänge um 4.35% abweicht.)`,

    options: [

      { label: 'a) ≈ 6.12% | b1) 1511 | b2) ≈ 44.29 km', correct: true },

      { label: 'a) ≈ 6.12% | b1) 1515 | b2) ≈ 44.50 km', correct: false },

      { label: 'a) ≈ 5.88% | b1) 1500 | b2) ≈ 34.00 km', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Begriffe',

          content: `🗺️ Massstab
Ein Massstab wie 1:25 000 bedeutet: alles auf der Karte ist 25 000× kleiner als in der Realität.
→ 1 cm auf der Karte = 25 000 cm = 250 m = 0.25 km in Wirklichkeit
→ Formel: Kartenmass × Massstabszahl = Wirkliche Länge
→ Einheit beachten! Ergebnis in cm → dann in km umrechnen (÷ 100 000)

📏 Prozentuale Abweichung
Zeigt, um wie viel Prozent ein Messwert vom echten Wert abweicht.
→ Formel: (Messwert − Sollwert) / Sollwert × 100
→ ⚠️ Wir teilen durch den SOLLWERT (= die wirkliche Strecke), NICHT durch den Messwert!
→ Positives Ergebnis = Zähler zeigt zu viel an

❓ Warum brauchen wir das?
Velo-Kilometerzähler sind nie 100% genau — der Reifendruck, die Reifengrösse und Verschleiss beeinflussen die Messung. Wenn wir die prozentuale Abweichung kennen, können wir alle Messungen korrigieren: Wirkliche Strecke = Zählerangabe ÷ (1 + Abweichung/100).`,

        },

        {

          title: 'Schritt 1: Wirkliche Strecke aus Massstab berechnen',

          content: `Kartenmass: 49 cm
Massstab: 1:25 000
Wirkliche Strecke = 49 × 25 000 = 1 225 000 cm = 12.25 km`,

        },

        {

          title: 'Schritt 2: Prozentuale Abweichung berechnen',

          content: `Messwert (Zähler): 13 km
Sollwert (wirklich): 12.25 km
Abweichung = (13 − 12.25) / 12.25 × 100
           = 0.75 / 12.25 × 100
           ≈ 6.12 %
✅ Der Zähler zeigt 6.12% zu viel an.`,

        },

        {

          title: 'Schritt 3: b1) Nächste Zahl mit nur 2 verschiedenen Ziffern',

          content: `Zählerstand: 1464 → wir suchen die nächste Zahl > 1464 mit max. 2 verschiedenen Ziffern.
1465 → {1,4,6,5} = 4 Ziffern ❌
1500 → {1,5,0} = 3 Ziffern ❌
1511 → {1,5} = 2 Ziffern ✅
✅ Antwort: 1511`,

        },

        {

          title: 'Schritt 4: b2) Wirkliche Streckenlänge',

          content: `Zähler-Strecke = 1511 − 1464 = 47 km
Abweichung = 6.1224%
Wirkliche Strecke = 47 ÷ (1 + 0.061224)
                  = 47 ÷ 1.061224
                  ≈ 44.29 km
✅ Die wirkliche Strecke beträgt ca. 44.29 km.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106619/AP16_M_GMS3_Teil_2_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Massstab: Kartenmass × Massstabszahl → in km umrechnen (÷ 100 000)
2️⃣  Abweichung: (Messwert − Sollwert) / Sollwert × 100
3️⃣  Korrektur: Wirkliche Strecke = Zählerangabe ÷ (1 + Abweichung/100)
⚠️  Immer durch den SOLLWERT teilen — nicht durch den Messwert!`,

    },

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2016_MTR_VOL_1',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106441/AP16_M_GMS3_Teil_2_Pruefung.pdf?fp=1#page=3',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 2: Marco wärmt sich Suppe auf.
a) Marco wärmt sich seine gefrorene Gemüsesuppe (V = 1250 cm³) in einer zylinderförmigen Pfanne auf (d = 20 cm, h = 12 cm).
Wie hoch steht die geschmolzene Suppe in der Pfanne? (Runde auf 2 Nachkommastellen)
Das Volumen der Suppe verändert sich beim Schmelzen nicht.
Volumenformel: V = π · r² · h
b) Wie viel Liter Wasser passen noch in die Pfanne, wenn die Suppe drin ist?
c) Eine Dose hat d = 8 cm und h = 12 cm. Wie viel % mehr Volumen hat die Pfanne als die Dose? (Runde auf 2 Nachkommastellen)`,

    options: [

      { label: 'a) ≈ 3.98 cm | b) ≈ 2.52 l | c) ≈ 525.00%', correct: true },

      { label: 'a) ≈ 4.50 cm | b) ≈ 2.10 l | c) ≈ 500.00%', correct: false },

      { label: 'a) ≈ 3.98 cm | b) ≈ 2.00 l | c) ≈ 491.15%', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Begriffe',

          content: `🥫 Zylinder
Ein Zylinder ist ein runder Körper — wie eine Dose oder eine Pfanne. Er hat zwei gleiche Kreisflächen (oben und unten) und eine gerade Seite dazwischen.
📐 Die wichtigen Grössen:
d = Durchmesser → der Abstand von einem Rand zum anderen durch die Mitte
r = Radius = d ÷ 2 → der Abstand vom Mittelpunkt zum Rand
⚠️ Immer zuerst d halbieren, bevor man rechnet!
h = Höhe → wie hoch der Zylinder ist
V = Volumen → wie viel Platz (Inhalt) drin ist
📐 Formel: V = π · r² · h
→ π (Pi) ≈ 3.14159 — eine mathematische Konstante
→ r² = r × r = Fläche des Kreises
→ Kreisfläche × Höhe = Volumen
❓ Warum diese Formel?
Stell dir die Pfanne als einen Stapel hauchdünner Kreisscheiben vor. Jede Scheibe hat die Fläche π·r². Wenn man alle Scheiben bis zur Höhe h aufstapelt, ergibt das das Volumen. Deshalb: Kreisfläche × Höhe.`,

        },

        {

          title: 'Schritt 1: a) Höhe der Suppe berechnen',

          content: `Gegeben: V = 1250 cm³, d = 20 cm → r = 10 cm
Formel umstellen nach h:
h = V ÷ (π · r²)
h = 1250 ÷ (π · 100)
h = 1250 ÷ 314.159
h ≈ 3.98 cm
✅ Die Suppe steht 3.98 cm hoch in der Pfanne.`,

        },

        {

          title: 'Schritt 2: b) Verbleibendes Volumen',

          content: `V_Pfanne = π · 10² · 12 = 1200π ≈ 3769.91 cm³
V_Suppe = 1250 cm³
V_Rest = 3769.91 − 1250 = 2519.91 cm³
Umrechnen: 2519.91 ÷ 1000 ≈ 2.52 Liter
✅ Es passen noch ca. 2.52 Liter in die Pfanne.`,

        },

        {

          title: 'Schritt 3: c) Prozentvergleich Pfanne vs. Dose',

          content: `Dose: d = 8 cm → r = 4 cm
V_Dose = π · 4² · 12 = 192π ≈ 603.19 cm³
Mehr % = (V_Pfanne − V_Dose) / V_Dose × 100
       = (3769.91 − 603.19) / 603.19 × 100
       ≈ 525.00%
✅ Die Pfanne hat 525% mehr Volumen als die Dose.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106619/AP16_M_GMS3_Teil_2_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Radius: r = d ÷ 2  (nie vergessen!)
2️⃣  Volumen: V = π · r² · h
3️⃣  Höhe suchen: h = V ÷ (π · r²)
4️⃣  Liter: cm³ ÷ 1000 = Liter
5️⃣  Prozent mehr: (Gross − Klein) / Klein × 100`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2016_MTR_GEO_1',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106441/AP16_M_GMS3_Teil_2_Pruefung.pdf?fp=1#page=4',

    topic: 'Geometrie', // NEU

    solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106619/AP16_M_GMS3_Teil_2_L%C3%B6sung.pdf',

    solutionHint: 'Aufgabe 3: Gegeben sind zwei Punkte A und B. Konstruiere ein Rechteck 12×4 cm.',

    questionText: `Aufgabe 3: Konstruktionsaufgabe
Gegeben sind zwei Punkte A und B.
Konstruiere ein Rechteck mit den Seitenlängen 12 cm und 4 cm mit den folgenden beiden Eigenschaften:
− A ist der Mittelpunkt des Rechtecks.
− B liegt auf einer der längeren Seiten des Rechtecks.
Beschreibe deine Konstruktionsschritte.`,

    options: [

      { label: 'Mittelpunkt A → Halbdiagonale berechnen → Kreis um A → Schnittpunkt mit Linie durch A und B bestimmt Ecken', correct: true },

      { label: 'Einfach ein 12×4 Rechteck mit A als Eckpunkt zeichnen', correct: false },

      { label: 'Kreis um B mit r=6 zeichnen und senkrecht dazu 4 cm', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Begriffe',

          content: `🔵 Mittelpunkt eines Rechtecks
Der Mittelpunkt liegt genau in der Mitte — dort, wo sich die beiden Diagonalen schneiden.
→ Er ist von allen 4 Ecken gleich weit entfernt
→ Diese Distanz heisst "halbe Diagonale" oder Halbdiagonale
📐 Diagonale
Eine Diagonale verbindet zwei gegenüberliegende Ecken eines Rechtecks.
→ Länge berechnen mit Pythagoras: d = √(Seite1² + Seite2²)
→ Die halbe Diagonale = d ÷ 2 = Abstand vom Mittelpunkt zu jeder Ecke
🔑 Schlüsselidee für die Konstruktion
Da alle Ecken gleich weit vom Mittelpunkt A entfernt sind, liegen sie alle auf einem Kreis um A.
→ Wir zeichnen diesen Kreis mit dem Zirkel
→ Punkt B auf der langen Seite zeigt uns die Ausrichtung des Rechtecks
❓ Warum hilft das?
Mit Zirkel und Lineal können wir keinen Punkt "frei in der Luft" setzen — wir brauchen geometrische Bedingungen. Der Kreis um A gibt uns genau diese Bedingung: alle Ecken müssen auf ihm liegen.`,

        },

        {

          title: 'Schritt 1: Halbdiagonale berechnen',

          content: `Seiten: 12 cm und 4 cm
d² = 12² + 4² = 144 + 16 = 160
d = √160 ≈ 12.65 cm
Halbdiagonale = 12.65 ÷ 2 ≈ 6.32 cm
✅ Jede Ecke ist 6.32 cm von A entfernt.`,

        },

        {

          title: 'Schritt 2: Konstruktionsschritte',

          content: `1. Gerade durch A und B zeichnen (= Richtung der langen Seite)
2. Kreis um A mit r = 6.32 cm zeichnen (alle Ecken liegen darauf)
3. Senkrechte zu AB durch A zeichnen (= Richtung der kurzen Seite)
4. Auf der Linie AB je 6 cm von A → 2 Ecken
5. Auf der Senkrechten je 2 cm von A → 2 weitere Ecken
6. Ecken verbinden → Rechteck fertig ✅`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106619/AP16_M_GMS3_Teil_2_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Halbdiagonale: d = √(a² + b²) ÷ 2
2️⃣  Kreis um Mittelpunkt A mit Radius = Halbdiagonale
3️⃣  Gerade durch A und B → Richtung der Seite
4️⃣  Ecken je halb-Seitenlänge vom Mittelpunkt abmessen
📄 Offizielle Zeichnung: siehe Schullösung (Button unten)`,

    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M3_2016_MTR_TERM_1',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106441/AP16_M_GMS3_Teil_2_Pruefung.pdf?fp=1#page=5',

    topic: 'Algebra', // NEU

    questionText: `Aufgabe 4: Terme mit dem Taschenrechner berechnen
Berechne folgende Terme mit dem Taschenrechner und runde das Resultat gegebenenfalls auf 4 Nachkommastellen.
a) (−1)² − 4 · (−2²) − 5 · ((−3) · 5 + (1)³)
b) \[2.7 · √(8.29² + 3.14)\] / \[4.3 · (7.4 − √2.8)\]
c) Berechne den Term: (x − 3)² · (2.5 − x³) : (6 + 3x) · x
   c1) für x = −3
   c2) für x = 1.2`,

    options: [

      { label: 'a) 87 (Schule: 97) | b) 0.9295 | c1) 1062 | c2) 0.31266', correct: true },

      { label: 'a) −87 | b) 0.9295 | c1) −1062 | c2) 0.2171', correct: false },

      { label: 'a) 87 | b) 1.2340 | c1) 118 | c2) 1.2000', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Term
Ein Term ist ein mathematischer Ausdruck mit Zahlen, Variablen und Rechenzeichen — ohne Gleichheitszeichen. Wir "werten ihn aus", d.h. wir berechnen seinen Wert.
⚠️ Die grösste Falle: −2² ist NICHT (−2)²
→ −2² = −(2²) = −4    Zuerst wird potenziert, DANN kommt das Minus davor
→ (−2)² = (−2)·(−2) = +4    Die Klammer "schützt" das Minus — es wird mitpotenziert!
Merkhilfe: Minus ohne Klammer = Vorzeichen, das am Ende drankommt.
📐 Reihenfolge der Operationen (immer einhalten!):
1. Klammern (von innen nach aussen)
2. Potenzen (², ³, √)
3. Multiplikation · und Division ÷ (von links nach rechts)
4. Addition + und Subtraktion − (von links nach rechts)
❓ Warum diese Reihenfolge?
Ohne klare Reihenfolge würde 2 + 3 · 4 für jeden etwas anderes bedeuten. Die Reihenfolge ist weltweit einheitlich festgelegt — und der Taschenrechner kennt sie auch.`,

        },

        {

          title: 'a) Term Schritt für Schritt',

          content: `(−1)² − 4 · (−2²) − 5 · ((−3) · 5 + (1)³)
Einzeln berechnen:
• (−1)² = 1
• −2² = −4
• (−3) · 5 = −15
• (1)³ = 1
• Klammer: −15 + 1 = −14
Einsetzen:
= 1 − 4·(−4) − 5·(−14)
= 1 + 16 + 70
= 87
⚠️ Schule gibt 97 — möglicherweise andere Klammersetzung im Original-PDF.`,

        },

        {

          title: 'b) Bruchterm mit Wurzeln',

          content: `Zähler: 2.7 · √(8.29² + 3.14)
= 2.7 · √71.8641 ≈ 22.889
Nenner: 4.3 · (7.4 − √2.8)
= 4.3 · 5.7267 ≈ 24.625
Resultat: 22.889 ÷ 24.625 ≈ 0.9295`,

        },

        {

          title: 'c1) x = −3 einsetzen',

          content: `Teile einzeln:
• (x−3)² = (−6)² = 36
• (2.5−x³) = 2.5−(−27) = 29.5
• (6+3x) = 6−9 = −3
= 36 · 29.5 ÷ (−3) · (−3)
= 1062 ÷ (−3) · (−3)
= −354 · (−3) = 1062`,

        },

        {

          title: 'c2) x = 1.2 einsetzen',

          content: `Teile einzeln:
• (x−3)² = (−1.8)² = 3.24
• (2.5−x³) = 2.5−1.728 = 0.772
• (6+3x) = 9.6
= 3.24 · 0.772 ÷ 9.6 · 1.2
= 2.50128 ÷ 9.6 · 1.2
= 0.31266`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106619/AP16_M_GMS3_Teil_2_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Reihenfolge: Klammern → Potenzen → · ÷ → + −
2️⃣  Falle: −2² = −4  aber  (−2)² = +4
3️⃣  Variablen: Jeden Teil einzeln berechnen, dann zusammensetzen
4️⃣  Negative Zahl hoch gerade Zahl → immer positiv: (−3)² = +9
5️⃣  Negative Zahl hoch ungerade Zahl → immer negativ: (−3)³ = −27`,

    },

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2016_MTR_SUMME_1',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106441/AP16_M_GMS3_Teil_2_Pruefung.pdf?fp=1#page=6',

    topic: 'Algebra', // NEU

    questionText: `Aufgabe 5: Summe der Quadratzahlen
Für die Berechnung der Summe aller Quadratzahlen von 1 bis n gilt die Formel:
1² + 2² + 3² + ... + n² = n/6 · (2n+1) · (n+1)
a) Wie gross ist die Summe aller Quadratzahlen
   a1) von 1 bis 50?
   a2) von 75 bis 150?
b) Wir haben 60 Würfel. Der erste Würfel hat Kantenlänge 1 cm, der zweite 2 cm, der dritte 3 cm usw.
Berechne die gesamte Oberfläche aller 60 Würfel zusammen.`,

    options: [

      { label: 'a1) 42 925 | a2) 998 450 | b) 442 860 cm²', correct: true },

      { label: 'a1) 42 925 | a2) 987 450 | b) 442 860 cm²', correct: false },

      { label: 'a1) 42 000 | a2) 998 450 | b) 400 000 cm²', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Begriffe',

          content: `∑ Summe der Quadratzahlen
1² + 2² + 3² + ... bedeutet: jede Zahl wird zuerst quadriert, dann werden alle Ergebnisse addiert.
→ Bei grossen n (z.B. n=150) wäre das 150 einzelne Rechnungen — viel zu aufwändig!
📐 Summenformel S(n) = n/6 · (2n+1) · (n+1)
Diese Formel gibt das Ergebnis von 1² + 2² + ... + n² sofort in einem Schritt.
→ n = die letzte Zahl bis zu der summiert wird
→ Einfach n einsetzen und ausrechnen — fertig!
🔑 Teilsumme (z.B. von 75 bis 150)
Wir wollen nicht von 1 anfangen, sondern erst ab 75.
→ Trick: S(75 bis 150) = S(1 bis 150) − S(1 bis 74)
→ Wir berechnen die grosse Summe und ziehen die unerwünschten Terme am Anfang ab
→ ⚠️ Achtung: bis 74, nicht bis 75 — sonst wird der Startterm auch abgezogen!
🎲 Würfeloberfläche
Ein Würfel hat 6 gleiche quadratische Seiten. Kantenlänge k:
→ Eine Seite = k² → alle 6 Seiten = 6 · k²
❓ Warum Summenformel?
Statt 60 Terme einzeln zu addieren gibt uns die Formel das Ergebnis in Sekunden. Das zeigt die Stärke der Mathematik: Muster erkennen, Abkürzung finden.`,

        },

        {

          title: 'a1) Summe von 1 bis 50',

          content: `n = 50:
S(50) = 50/6 · (2·50+1) · (50+1)
      = 50/6 · 101 · 51
      = 50/6 · 5151
      = 42 925
✅ 1² + 2² + ... + 50² = 42 925`,

        },

        {

          title: 'a2) Summe von 75 bis 150',

          content: `S(75 bis 150) = S(150) − S(74)
S(150) = 150/6 · 301 · 151 = 1 136 275
S(74)  = 74/6  · 149 · 75  =   137 825
S(75 bis 150) = 1 136 275 − 137 825 = 998 450
✅ 75² + 76² + ... + 150² = 998 450`,

        },

        {

          title: 'b) Gesamtoberfläche aller 60 Würfel',

          content: `Oberfläche Würfel k: O = 6·k²
Gesamtoberfläche = 6 · (1² + 2² + ... + 60²) = 6 · S(60)
S(60) = 60/6 · 121 · 61 = 10 · 121 · 61 = 73 810
Gesamtoberfläche = 6 · 73 810 = 442 860 cm²
✅ 442 860 cm²`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106619/AP16_M_GMS3_Teil_2_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  Formel: S(n) = n/6 · (2n+1) · (n+1)
2️⃣  Teilsumme: S(m bis n) = S(n) − S(m−1)  ⚠️ bis m−1, nicht m!
3️⃣  Würfeloberfläche: O = 6 · k² pro Würfel
4️⃣  Verbindung: Gesamtoberfläche = 6 · S(n)`,

    },

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2016_MTR_BRUCH_1',

    year: 2016,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106441/AP16_M_GMS3_Teil_2_Pruefung.pdf?fp=1#page=7',

    topic: 'Algebra', // NEU

    questionText: `Aufgabe 6: Brüche als Differenz
Die Zahl 8/77 soll als Differenz zweier positiver Brüche geschrieben werden:
− beide Brüche sollen kleiner als 1 sein.
− einer der Brüche soll dabei die Zahl 7 als Nenner haben, der andere die Zahl 11 als Nenner.
Welche Möglichkeiten gibt es?`,

    options: [

      { label: '2/7 − 2/11 ist die einzige Möglichkeit', correct: true },

      { label: '1/7 − 1/11 und 2/7 − 2/11 sind beide möglich', correct: false },

      { label: '3/7 − 5/11 ist die einzige Möglichkeit', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Begriffe',

          content: `🔢 Gemeinsamer Nenner
Damit man Brüche addieren oder subtrahieren kann, müssen sie denselben Nenner haben.
→ Beispiel: 1/7 − 1/11 geht nicht direkt, weil 7 ≠ 11
→ Wir suchen den kleinsten gemeinsamen Nenner (kgN)
→ kgN von 7 und 11: da beide Primzahlen sind → 7 × 11 = 77
📐 Brüche auf Nenner 77 erweitern:
→ a/7 = a×11 / 77 = 11a/77
→ b/11 = b×7 / 77 = 7b/77
→ So können wir die Zähler direkt vergleichen und rechnen
🔑 Systematisch suchen
Wir stellen eine Gleichung auf und prüfen alle möglichen Werte.
→ "Systematisch" = wir lassen nichts aus und überspringen nichts
→ Die Bedingung "b muss eine ganze Zahl sein" filtert die meisten Möglichkeiten heraus
❓ Warum diese Methode?
Bei Bruchaufgaben mit Bedingungen gibt es oft mehrere potenzielle Lösungen. Systematisches Prüfen stellt sicher, dass wir wirklich ALLE Möglichkeiten finden — und keine vergessen oder zu viel zählen.`,

        },

        {

          title: 'Schritt 1: Gleichung aufstellen',

          content: `a/7 − b/11 = 8/77
Auf Nenner 77:
11a/77 − 7b/77 = 8/77
→ 11a − 7b = 8
→ b = (11a − 8) / 7`,

        },

        {

          title: 'Schritt 2: Alle a-Werte prüfen',

          content: `a = 1: b = 3/7  → keine ganze Zahl ❌
a = 2: b = 14/7 = 2  → ganze Zahl! ✅
a = 3: b = 25/7 → keine ganze Zahl ❌
a = 4: b = 36/7 → keine ganze Zahl ❌
a = 5: b = 47/7 → keine ganze Zahl ❌
a = 6: b = 58/7 → keine ganze Zahl ❌
Nur a = 2, b = 2 funktioniert.`,

        },

        {

          title: 'Schritt 3: Probe',

          content: `2/7 − 2/11 = 22/77 − 14/77 = 8/77 ✅
2/7 ≈ 0.286 < 1 ✅
2/11 ≈ 0.182 < 1 ✅
✅ Einzige Möglichkeit: 2/7 − 2/11`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106619/AP16_M_GMS3_Teil_2_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣  kgN finden: Nenner multiplizieren (wenn beide Primzahlen)
2️⃣  Gleichung: Auf gemeinsamen Nenner bringen → 11a − 7b = 8
3️⃣  Variable isolieren: b = (11a − 8) / 7
4️⃣  Systematisch prüfen: alle a von 1 bis 6 einsetzen
5️⃣  Filter: b muss ganzzahlig UND kleiner als 1 (als Bruch) sein`,

    },

  },

];
