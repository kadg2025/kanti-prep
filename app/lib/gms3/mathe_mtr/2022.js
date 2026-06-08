export const questions2022 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2022_MTR_ZUGE_1',

    year: 2022,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132685/AP22_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=2',

    topic: 'Algebra', // NEU

    questionText: `Aufgabe 1: Kurts Zugreise

Kurt fährt mit dem Zug nach Frankfurt. Der Zug legt pro Stunde 90 km zurück. Durch das Fenster sieht Kurt einen entgegenkommenden ICE-Zug vorbeifahren.

a) Wie viele Meter legt Kurts Zug in einer Sekunde zurück?

b) Wie viele Kilometer pro Stunde fährt der ICE, wenn die Vorbeifahrt des 450 m langen Zuges an Kurts Fenster genau 6 s dauert?`,

    solution: {

      intro: ``,

      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `1. Der 3.6-Trick (km/h ↔ m/s)
Stell dir vor, du fährst mit dem Velo 36 km/h. Fühlt sich schnell an, oder? Aber wie viele Meter sind das pro Sekunde? Um das auszurechnen, gibt es einen Zaubertrick:
• km/h → m/s: Wert ÷ 3.6 (weil 1h = 3600s und 1km = 1000m)
• m/s → km/h: Wert × 3.6

2. Teamwork-Geschwindigkeit (Relativgeschwindigkeit)
Wenn zwei Dinge aufeinander zukommen, addieren sich ihre Geschwindigkeiten. Sie legen die Distanz zwischen sich also gemeinsam zurück. Es ist, als würden sie im Team arbeiten!
→ v_Team = v_Kurt + v_ICE`,
        },
        {
          title: 'a) Kurts Zug in m/s',
          content: `Kurts Zug fährt mit 90 km/h. Wir wenden den 3.6-Trick an:
90 km/h ÷ 3.6 = 25 m/s

✅ Cool, Kurts Zug legt also jede Sekunde die Länge eines halben Olympia-Schwimmbeckens zurück!`,
        },
        {
          title: 'b) Wie schnell ist der ICE?',
          content: `Plan: Der ICE ist 450 m lang und rauscht in 6 s an Kurt vorbei. Die "Strecke" ist also die Länge des ICE.
1. Team-Geschwindigkeit ausrechnen:
   v_Team = Strecke ÷ Zeit = 450 m ÷ 6 s = 75 m/s
2. ICE-Geschwindigkeit finden:
   Wir wissen: v_Team = v_Kurt + v_ICE
   75 m/s = 25 m/s + v_ICE
   v_ICE = 75 - 25 = 50 m/s
3. In km/h umrechnen:
   50 m/s × 3.6 = 180 km/h

✅ Der ICE brettert mit 180 km/h vorbei. Ziemlich schnell!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147236/AP22_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],

      tip: `🍳 Dein Gameplan:
1️⃣ Umrechnen: Wandle Kurts Tempo mit dem ÷ 3.6 Trick in m/s um.
2️⃣ Team-Speed: Berechne die gemeinsame Geschwindigkeit, mit der die 450 m des ICE "abgearbeitet" werden (Weg ÷ Zeit).
3️⃣ Solo-Speed: Ziehe Kurts Tempo vom Team-Speed ab, um die Geschwindigkeit des ICE in m/s zu erhalten.
4️⃣ Zurückrechnen: Nutze den × 3.6 Trick, um das Ergebnis in km/h anzugeben.`,

    },

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2022_MTR_WAHL_1',

    year: 2022,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132685/AP22_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=3',

    topic: 'Prozent & Zins', // NEU

    questionText: `Aufgabe 2: Wahlen im Land X

Bei Wahlen im Land X bekam Partei A 18% der Stimmen und Partei B 40%. 708'000 Stimmen entfielen auf Partei C und die restlichen 12% auf kleinere Parteien oder waren ungültig.

a) Wie viele Wahlberechtigte haben gewählt?

b) Von den Wählern der Partei C waren 52% weiblich, von diesen wiederum 65% unter 40 Jahre alt. Wie viele weibliche Wählerinnen der Partei C sind 40 Jahre oder älter?

c) Umfragen haben ergeben, dass 5% derjenigen, die ihre Stimme Partei A gaben, vor 4 Jahren noch Partei B wählten. Wie viel Prozent hätte Partei B erhalten, wenn dies nicht geschehen wäre?

Hinweis: Die Anzahl der Wähler hat sich nicht geändert.`,

    solution: {

      intro: ``,

      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `1. Das grosse Ganze (100%) finden
Stell dir vor, du kennst nur einen Teil von etwas. Wenn du weisst, dass 708'000 Stimmen genau 30% sind, kannst du das Ganze (den Grundwert) ausrechnen.
• Anteil von Partei C: 100% - 18% (A) - 40% (B) - 12% (Rest) = 30%
• Grundwert G = Prozentwert P ÷ Prozentsatz p (z.B. 708'000 ÷ 0.30)

2. Anteile von Anteilen (Kaskade)
Das ist wie bei einer Zwiebel. Du schälst eine Schicht nach der anderen ab. Zuerst rechnest du den Anteil der weiblichen Wähler aus und davon dann den Anteil derer, die unter 40 sind.`,
        },
        {
          title: 'a) Wie viele haben gewählt?',
          content: `Wir wissen: 30% der Wähler entsprechen 708'000 Menschen.
Wir wollen 100% (das grosse Ganze) wissen.
Grundwert = 708'000 ÷ 0.30 = 2'360'000

✅ Insgesamt haben 2'360'000 Menschen gewählt.`,
        },
        {
          title: 'b) Wählerinnen ≥ 40',
          content: `Schritt 1: Finde alle weiblichen C-Wählerinnen.
52% von 708'000 → 708'000 × 0.52 = 368'160

Schritt 2: Finde davon die, die 40 oder älter sind.
Wenn 65% unter 40 sind, dann sind die restlichen 100% - 65% = 35% über 40.
35% von 368'160 → 368'160 × 0.35 = 128'856

✅ Es sind 128'856 Wählerinnen der Partei C 40 Jahre oder älter.`,
        },
        {
          title: 'c) Was wäre, wenn ...?',
          content: `Schritt 1: Wie viele Stimmen sind 5% von Partei A?
• Stimmen für A: 18% von 2'360'000 = 424'800
• Wechsler: 5% von 424'800 = 21'240 Stimmen

Schritt 2: Gib diese Stimmen zurück an Partei B.
• Originalstimmen B: 40% von 2'360'000 = 944'000
• Neue Stimmen B: 944'000 + 21'240 = 965'240

Schritt 3: Rechne den neuen Prozentanteil aus.
Anteil = (Teil ÷ Ganzes) × 100 = (965'240 ÷ 2'360'000) × 100 ≈ 40.9%

✅ Partei B hätte rund 40.9% der Stimmen erhalten.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147236/AP22_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],

      tip: `🍳 Dein Gameplan:
1️⃣ Anteil C: Finde heraus, wie viel Prozent für Partei C übrig bleiben (100% – alle anderen).
2️⃣ Das Ganze: Rechne von den Stimmen für C auf die 100% hoch (Wert ÷ 0.30).
3️⃣ Zwiebel schälen: Berechne für b) erst den Anteil der Frauen und davon dann den Anteil der Älteren (100% - 65%).
4️⃣ Stimmen wandern: Berechne für c) die absolute Zahl der Wechsler (5% von den A-Stimmen) und addiere sie zu den B-Stimmen.
5️⃣ Neuer Anteil: Berechne den neuen Prozentanteil von Partei B am grossen Ganzen.`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2022_MTR_PYTH_1',

    year: 2022,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132685/AP22_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=4',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 3: Gaskessel-Kugel

Die Kugel eines Gaskessels hat einen Radius von 14 m. Sie soll durch ebenfalls 14 m lange Streben gehalten werden, welche die Kugel berühren. Der tiefste Punkt der Kugel soll 4 m über dem Erdboden liegen.

Berechne den Abstand der Punkte A₁ und A₂, in dem die Streben in der Erde befestigt werden. Runde auf eine Stelle nach dem Komma.

Hinweis: Der gesuchte Abstand beträgt NICHT 14 m.`,

    solution: {

      intro: ``,

      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `🔵 Tangente trifft Radius → 90°
Stell dir vor, du lehnst eine Leiter (die Strebe) an einen riesigen Ball (die Kugel). Genau dort, wo die Leiter den Ball berührt (Punkt T), bildet der Weg zum Mittelpunkt des Balls (der Radius) einen perfekten 90°-Winkel zur Leiter. Das ist ein Naturgesetz der Geometrie!

📐 Pythagoras: a² + b² = c²
Und wo ein 90°-Winkel ist, ist unser Freund Pythagoras nicht weit. Wir werden ihn zweimal brauchen!

🗺️ Die Szene von der Seite
• Der Mittelpunkt M der Kugel ist 4 m (Boden) + 14 m (Radius) = 18 m hoch.
• Wir haben zwei versteckte rechtwinklige Dreiecke!`,
        },
        {
          title: 'Schritt 1: Finde den schrägen Abstand MA',
          content: `Wir schauen uns das erste Dreieck an: M-T-A. Der rechte Winkel ist bei T (wo die Strebe die Kugel berührt).
• MT (Kathete) = 14 m (Radius)
• AT (Kathete) = 14 m (Länge der Strebe)
• MA (Hypotenuse) = ?

MA² = 14² + 14² = 196 + 196 = 392
MA = √392 ≈ 19.8 m
Das ist der schräge Abstand vom Kugelmittelpunkt zum Ankerpunkt A am Boden.`,
        },
        {
          title: 'Schritt 2: Finde den horizontalen Abstand',
          content: `Jetzt zum zweiten Dreieck! Stell es dir aufrecht stehend vor.
• Hypotenuse = MA (unser Ergebnis von eben, ≈ 19.8 m)
• Eine Kathete = die Höhe von M über dem Boden (18 m)
• Andere Kathete = der gesuchte horizontale Abstand d vom Mittelpunkt zum Ankerpunkt A.

d² = MA² - Höhe²
d² = 392 - 18² = 392 - 324 = 68
d = √68 ≈ 8.25 m

Das ist aber nur die halbe Strecke! Der gesuchte Abstand ist von A₁ bis A₂.
Abstand A₁A₂ = 2 × d = 2 × 8.25 ≈ 16.5 m

✅ Der Abstand der beiden Ankerpunkte beträgt ca. 16.5 m.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147236/AP22_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],

      tip: `🍳 Dein Gameplan:
1️⃣ Skizze machen: Zeichne die Kugel, den Boden und die Strebe. Markiere den Mittelpunkt M.
2️⃣ Höhe finden: Berechne die Höhe von M über dem Boden (Abstand + Radius).
3️⃣ Pythagoras #1 (schräg): Nutze den 90°-Winkel bei der Berührung, um den Abstand MA auszurechnen.
4️⃣ Pythagoras #2 (flach): Nutze MA und die Höhe, um den horizontalen Abstand d zu finden.
5️⃣ Verdoppeln: Denk daran, das Ergebnis zu verdoppeln, um den ganzen Abstand von A₁ bis A₂ zu erhalten!`,
    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M3_2022_MTR_WAHR_1',

    year: 2022,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132685/AP22_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=5',

    topic: 'Stochastik', // NEU

    questionText: `Aufgabe 4: Uhren im Koffer

In einem Koffer befinden sich 200 Uhren. Davon sind 70% Originaluhren und 30% Fälschungen. Von den Originaluhren sind 5% defekt, von den Fälschungen sind 30% defekt.

a) Wie gross ist die Wahrscheinlichkeit, eine funktionierende Fälschung zu erhalten, wenn man eine Uhr nimmt?

b) Wie gross ist die Wahrscheinlichkeit, eine defekte Uhr zu nehmen?`,

    solution: {

      intro: ``,

      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `🌳 Der Wahrscheinlichkeitsbaum
Das ist die beste Methode hier! Stell dir zwei Abzweigungen vor:
1. Stufe: Ist die Uhr echt? (Original 70% / Fälschung 30%)
2. Stufe: Funktioniert sie? (An jedem Ast geht es weiter mit defekt/funktioniert)

🛤️ Die Pfad-Regel (UND)
Um die Wahrscheinlichkeit für einen kompletten Pfad zu finden (z.B. Fälschung UND funktioniert), musst du die Wahrscheinlichkeiten entlang des Pfades multiplizieren.
→ P(Fälschung) × P(funktioniert)

➕ Die Summen-Regel (ODER)
Wenn mehrere Pfade zum Ziel führen (z.B. "defekte Uhr" kann ein Original ODER eine Fälschung sein), musst du die Ergebnisse der einzelnen Pfade addieren.`,
        },
        {
          title: 'a) P(funktionierende Fälschung)',
          content: `Wir folgen dem Pfad "Fälschung" → "funktioniert".
• P(Fälschung) = 30% = 0.30
• Von den Fälschungen sind 30% defekt, also sind 70% okay. P(funktioniert) = 0.70

Pfad-Regel: 0.30 × 0.70 = 0.21

✅ Die Wahrscheinlichkeit, eine funktionierende Fälschung zu ziehen, beträgt 21%.`,
        },
        {
          title: 'b) P(defekte Uhr)',
          content: `Hier führen zwei Wege nach Rom (bzw. zur defekten Uhr):
Weg 1: Defektes Original
P = P(Original) × P(defekt) = 0.70 × 0.05 = 0.035

Weg 2: Defekte Fälschung
P = P(Fälschung) × P(defekt) = 0.30 × 0.30 = 0.090

Jetzt beide Wege addieren (Summen-Regel):
0.035 + 0.090 = 0.125

✅ Die Wahrscheinlichkeit, eine defekte Uhr zu erwischen, ist 12.5%.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147236/AP22_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],

      tip: `🍳 Dein Gameplan:
1️⃣ Baum zeichnen: Skizziere die zwei Stufen (Typ → Zustand) mit allen Prozentzahlen.
2️⃣ Pfad für a): Folge dem Pfad "Fälschung" & "funktioniert" und multipliziere die Werte.
3️⃣ Pfade für b): Finde die zwei Pfade, die bei "defekt" enden. Multipliziere die Werte für jeden Pfad.
4️⃣ Addieren: Zähle die Ergebnisse der beiden "defekt"-Pfade zusammen.
5️⃣ Probe: Rechne mit den 200 Uhren. 140 Original (7 defekt), 60 Fakes (18 defekt). Total 25 defekte von 200. Passt!`,
    },

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2022_MTR_VOL_1',

    year: 2022,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132685/AP22_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=6',

    topic: 'Geometrie', // NEU

    questionText: `Aufgabe 5: Prisma mit Quader

Aus einem senkrechten Prisma wird ein Quader herausgeschnitten, dessen Volumen ein Fünftel des ursprünglichen Prisma-Volumens beträgt.

Masse: Prisma-Grundfläche = rechtwinkliges Dreieck (Katheten 20 und 30), Höhe = 50

       Quader: 13 × 13 × 50

a) Berechne das Volumen des Restkörpers.

b) Berechne den Oberflächeninhalt des herausgeschnittenen Quaders.`,

    solution: {

      intro: ``,

      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `📦 Volumen: Grundfläche × Höhe
Stell dir vor, du stapelst Papier. Das Volumen ist einfach die Fläche von einem Blatt (Grundfläche) mal die Höhe des Stapels. Das gilt für Prisma und Quader.

🍰 Restkörper: Grosses Volumen - Kleines Volumen
Das ist wie beim Kuchenbacken: Du hast einen grossen Kuchen (Prisma) und stichst ein Stück aus (Quader). Der Rest ist das, was übrig bleibt.

🎁 Oberfläche: Die Geschenkpapier-Formel
Die Oberfläche eines Quaders ist die Fläche, die du brauchst, um ihn komplett einzupacken. Du rechnest die Fläche von Boden, Deckel und den vier Seiten zusammen.
→ O = 2 × (Länge×Breite + Länge×Höhe + Breite×Höhe)`,
        },
        {
          title: 'Schritt 1: Volumen des grossen Prismas',
          content: `Die Grundfläche ist ein rechtwinkliges Dreieck.
• Fläche Dreieck = (Kathete × Kathete) ÷ 2 = (20 × 30) ÷ 2 = 300 cm²
• Volumen Prisma = Grundfläche × Höhe = 300 × 50 = 15'000 cm³`,
        },
        {
          title: 'a) Volumen des Restkörpers',
          content: `Der Quader ist 1/5 vom Prisma.
• Volumen Quader = 15'000 ÷ 5 = 3'000 cm³

Jetzt ziehen wir das kleine Volumen vom grossen ab:
• V_Rest = V_Prisma - V_Quader = 15'000 - 3'000 = 12'000 cm³

✅ Das Volumen des Restkörpers ist 12'000 cm³.`,
        },
        {
          title: 'b) Oberfläche des Quaders',
          content: `Wir packen den Quader (13 × 13 × 50) in Geschenkpapier ein.
• Boden & Deckel: 2 × (13 × 13) = 2 × 169 = 338 cm²
• 4 Seitenwände: 4 × (13 × 50) = 4 × 650 = 2600 cm²
• Total: 338 + 2600 = 2'938 cm²

Oder mit der Formel:
O = 2 × (13×13 + 13×50 + 13×50) = 2 × (169 + 650 + 650) = 2 × 1469 = 2'938 cm²

✅ Die Oberfläche des Quaders beträgt 2'938 cm².`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147236/AP22_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],

      tip: `🍳 Dein Gameplan:
1️⃣ Prisma-Volumen: Rechne die dreieckige Grundfläche aus und multipliziere sie mit der Höhe.
2️⃣ Quader-Volumen: Nimm 1/5 vom Prisma-Volumen (ist so gegeben!).
3️⃣ Rest: Ziehe das Quader-Volumen vom Prisma-Volumen ab.
4️⃣ Oberfläche: Stell dir vor, du packst den Quader ein. Addiere die Flächen von allen 6 Seiten.`,
    },

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2022_MTR_RHOM_1',

    year: 2022,

    subject: 'Mathe',

    exam: 'Mathe mit TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132685/AP22_GMS3_M2_mTR_Pr%C3%BCfung.pdf?fp=1#page=7',

    topic: 'Geometrie', // NEU

    solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147236/AP22_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',

    solutionHint: 'Aufgabe 6: Rhombus mit Diagonalenschnittpunkt M auf Gerade g konstruieren.',

    questionText: `Aufgabe 6: Rhombus-Konstruktion

Die Strecke AB ist die Seite eines Rhombus. Der Schnittpunkt M seiner beiden Diagonalen liegt auf g.

a) Konstruiere alle möglichen Lösungen für M und beschrifte sie.

b) Konstruiere einen möglichen Rhombus.

Tipp: Die Diagonalen stehen rechtwinklig aufeinander.`,

    solution: {

      intro: ``,

      steps: [
        {
          title: '📖 Deine Werkzeuge',
          content: `🔷 Rhombus-Geheimnisse
Ein Rhombus (auch Raute genannt) ist ein verzogenes Quadrat. Er hat 4 gleich lange Seiten. Seine wichtigsten Geheimnisse:
1. Die Diagonalen stehen im 90°-Winkel aufeinander.
2. Die Diagonalen halbieren sich gegenseitig im Schnittpunkt M.

🔑 Der Schlüssel zur Lösung
Stell dir vor, der Rhombus ist ein Papierdrachen. Die Strecke AB ist eine Kante. Weil der Drachen perfekt symmetrisch ist, muss sein "Kreuz" (der Punkt M) genau auf der Symmetrieachse von A und B liegen. Diese Achse ist die Mittelsenkrechte!
→ M liegt also dort, wo sich die Mittelsenkrechte von AB und die Gerade g kreuzen.`,
        },
        {
          title: 'a) Den Punkt M finden',
          content: `1. Konstruiere die Mittelsenkrechte von AB:
   • Nimm den Zirkel, stich in A ein und wähle einen Radius, der grösser als die halbe Strecke AB ist. Zeichne einen Bogen.
   • Behalte den Radius bei, stich in B ein und zeichne einen zweiten Bogen.
   • Verbinde die beiden Schnittpunkte der Bögen mit einem Lineal. Das ist die Mittelsenkrechte.

2. Finde M:
   • Der Punkt, wo deine neue Linie die Gerade g schneidet, ist der gesuchte Punkt M! Beschrifte ihn.`,
        },
        {
          title: 'b) Den Rhombus fertig zeichnen',
          content: `Wir haben A, B und M. Es fehlen nur noch C und D.
1. Diagonale AC finden:
   • Verbinde A und M mit einer Linie.
   • Stich mit dem Zirkel in M ein, nimm die Distanz MA in den Zirkel und schlage sie auf der anderen Seite von M ab. Das ist Punkt C. Die Diagonale AC ist jetzt fertig.

2. Diagonale BD finden:
   • Wiederhole das Ganze für B: Verbinde B und M.
   • Nimm die Distanz MB in den Zirkel und schlage sie auf der anderen Seite von M ab. Das ist Punkt D.

3. Verbinden:
   • Verbinde die Punkte A, B, C und D zu einem Rhombus. Fertig! ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147236/AP22_GMS3_M2_mTR_L%C3%B6sung.pdf?fp=1',
        },
      ],

      tip: `🍳 Dein Gameplan:
1️⃣ Der Trick: Erkenne, dass M auf der Mittelsenkrechten von AB liegen muss (Symmetrie!).
2️⃣ Mittelsenkrechte konstruieren: Zirkel bei A, dann B, Bögen zeichnen, verbinden.
3️⃣ M finden: Der Schnittpunkt von deiner Mittelsenkrechten und der Geraden g ist M.
4️⃣ Spiegeln: Finde C, indem du A am Punkt M spiegelst. Finde D, indem du B am Punkt M spiegelst.
5️⃣ Verbinden: Zeichne die vier Seiten des Rhombus.`,
    },

  },

];
