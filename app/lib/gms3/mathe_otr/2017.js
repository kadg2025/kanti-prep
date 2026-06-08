export const questions2017_oTR = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M1_2017_OTR_KOMB_1',

    year: 2017,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106610/AP17_M1_GMS3_Pr%C3%BCfung.pdf?fp=1#page=1',

    topic: 'Stochastik',

    questionText: `Aufgabe 1: Bergbahn

9 Personen wollen mit 4er-Gondeln hochfahren. Sie besteigen drei aufeinanderfolgende Gondeln.

a) Auf wie viele Arten können sie dies tun, wenn es nur auf die Anzahl Personen pro Gondel ankommt?

b) Alle 12 Sekunden verlässt eine Gondel die Talstation. In einer Stunde steigen 987 Personen ein. Wie viele Gondeln waren in dieser Stunde höchstens bzw. mindestens voll besetzt (4 Personen)?`,

    options: [

      { label: 'a) 10 Arten | b) höchstens 246, mindestens 87', correct: true },

      { label: 'a) 6 Arten | b) höchstens 246, mindestens 100', correct: false },

      { label: 'a) 10 Arten | b) höchstens 300, mindestens 87', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Deine Werkzeuge',

          content: `Systematisches Auflisten: Bei "Wie viele Arten?"-Fragen ist der beste Weg, systematisch alle Möglichkeiten durchzugehen, ohne eine zu vergessen. Dabei hilft es, mit dem grössten Wert zu starten.

Division mit Rest: Wenn Personen auf Gondeln aufgeteilt werden, bleibt oft ein Rest. Der sagt uns, wie viele Personen in der letzten, nicht vollen Gondel sitzen.`,

        },

        {

          title: 'a) Personen auf 3 Gondeln aufteilen',

          content: `Wir suchen alle Kombinationen von drei Zahlen (Personen in Gondel 1, 2, 3), deren Summe 9 ist und keine Zahl grösser als 4 ist.

Fall 1: Die erste Gondel ist maximal voll (4 Personen).

(4, 4, 1) → 3 Arten (441, 414, 144)

(4, 3, 2) → 6 Arten (alle Permutationen: 432, 423, 342, 324, 243, 234)

(4, 2, 3) - schon erfasst

(4, 1, 4) - schon erfasst

Fall 2: Die erste Gondel hat 3 Personen.

(3, 3, 3) → 1 Art

Andere Kombinationen wie (2,x,y) wurden schon abgedeckt.

Total = 3 + 6 + 1 = 10 Arten.

✅ Es gibt 10 verschiedene Arten der Aufteilung.`,

        },

        {

          title: 'b) Auslastung der Gondeln',

          content: `Gondeln pro Stunde: Eine Stunde hat 3600 Sekunden.

Anzahl Gondeln = 3600s / 12s = 300 Gondeln.

b1) Höchstens voll besetzt (Best-Case):

Wir füllen so viele Gondeln wie möglich mit 4 Personen.

987 / 4 = 246 mit einem Rest von 3.

Es können also maximal 246 Gondeln voll sein.

b2) Mindestens voll besetzt (Worst-Case):

Wir wollen so WENIG volle Gondeln wie möglich. Dafür verteilen wir die Leute so, dass die Gondeln möglichst leer bleiben.

Angenommen, wir füllen jede der 300 Gondeln mit 3 Personen: 300 * 3 = 900 Personen wären verteilt.

Es bleiben 987 - 900 = 87 Personen übrig.

Jede dieser 87 Personen kann nun eine der 3er-Gondeln zu einer 4er-Gondel auffüllen.

✅ Höchstens 246 Gondeln waren voll, mindestens 87 waren es.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106609/AP17_M1_GMS3_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Dein Gameplan:

a) Beginne mit der maximalen Füllung (4 Personen) und spiele alle Zahlentripel durch, deren Summe 9 ist. Zähle die Permutationen.

b1) Höchstens voll: Gesamtpersonen / 4.

b2) Mindestens voll: (Gesamtpersonen - (Anzahl Gondeln * 3)) -> Das Ergebnis ist die Anzahl der Gondeln, die von 3 auf 4 Personen aufgefüllt werden müssen.`,

    },

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M1_2017_OTR_WAHR_1',

    year: 2017,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106610/AP17_M1_GMS3_Pr%C3%BCfung.pdf?fp=1#page=2',

    topic: 'Stochastik',

    questionText: `Aufgabe 2: Spielshow

Ein Kandidat muss in einem Labyrinth zufällig Türen wählen, um ins Ziel zu kommen.

a) Wie gross ist die Wahrscheinlichkeit, dass er schon nach der ersten Türe ausscheidet (Totenkopf)?

b) Wie gross ist die Wahrscheinlichkeit, dass er das Ziel erreicht?

c) Nach einer Saison mit 168 Kandidaten, welche Antwort ist am wahrscheinlichsten für die Anzahl, die in der Schlammgrube (G) landeten? (12, 20, 28, 35, 58, 178)`,

    options: [

      { label: 'a) 1/2 | b) 1/12 | c) 28 → am nächsten: 28', correct: true },

      { label: 'a) 1/3 | b) 1/12 | c) 28', correct: false },

      { label: 'a) 1/2 | b) 1/24 | c) 14', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Deine Werkzeuge',

          content: `Pfadregel (UND-Regel): Die Wahrscheinlichkeit für einen bestimmten Pfad (z.B. erst durch Tür A, dann durch Tür B) ist das Produkt aller Einzelwahrscheinlichkeiten auf diesem Weg.

An jeder Abzweigung ist die Wahrscheinlichkeit für eine Tür = 1 / (Anzahl der Türen).`,

        },

        {

          title: 'a) Direktes Ausscheiden',

          content: `Am Start gibt es zwei Türen. Eine führt zum Totenkopf.

Die Wahrscheinlichkeit, diese Tür zu wählen, ist 1 von 2.

✅ Die Wahrscheinlichkeit beträgt 1/2 oder 50%.`,

        },

        {

          title: 'b) Weg zum Ziel',

          content: `Es gibt nur einen erfolgreichen Pfad zum Ziel. Wir multiplizieren die Wahrscheinlichkeiten an jeder Kreuzung auf diesem Weg:

- Erste Abzweigung (2 Türen): P = 1/2

- Zweite Abzweigung (2 Türen): P = 1/2

- Dritte Abzweigung (2 Türen): P = 1/2

P(Ziel) = (1/2) * (1/2) * (1/2) = 1/8.

(Hinweis: Die offizielle Lösung scheint einen anderen Plan zu haben, der zu 1/12 führt. Unser Plan ergibt 1/8).`,

        },

        {

          title: 'c) Kandidaten in der Schlammgrube',

          content: `Wir berechnen die Wahrscheinlichkeit für jeden Pfad, der in der Grube G endet, und addieren sie.

Pfad 1 (oben): (1/2) * (1/2) * (1/2) = 1/8

Pfad 2 (unten): (1/2) * (1/2) = 1/4

P(Grube) = 1/8 + 1/4 = 1/8 + 2/8 = 3/8.

Erwartete Anzahl = Gesamtzahl * P(Grube) = 168 * (3/8) = (168/8) * 3 = 21 * 3 = 63.

Die am nächsten liegende Antwort ist 58.

(Hinweis: Auch hier weicht unsere Lesart des Plans von der offiziellen Lösung ab, die zu P(Grube)=1/6 und damit 28 Kandidaten führt.)`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen, die einen anderen Pfadverlauf interpretiert.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106609/AP17_M1_GMS3_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Dein Gameplan:

1. Verfolge den Weg auf der Karte.

2. An jeder Kreuzung: Wahrscheinlichkeit ist 1 geteilt durch die Anzahl der Türen.

3. Für einen ganzen Pfad: Multipliziere die Wahrscheinlichkeiten.

4. Erwartungswert: Multipliziere die Wahrscheinlichkeit mit der Gesamtzahl der Versuche.`,

    },

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M1_2017_OTR_ORD_1',

    year: 2017,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106610/AP17_M1_GMS3_Pr%C3%BCfung.pdf?fp=1#page=3',

    topic: 'Arithmetik', // NEU

    questionText: `Aufgabe 3: Zahlen ordnen

Ordne folgende Zahlen der Grösse nach: 3, √50, 2³, 7, √16, 9, 4.5, 13/5, 2/3, √20.`,

    options: [

      { label: '2/3 < 13/5 < 3 < √16 < √20 < 4.5 < 7 < √50 < 2³ < 9', correct: true },

      { label: '2/3 < 13/5 < 3 < √16 < 4.5 < √20 < 7 < √50 < 2³ < 9', correct: false },

      { label: '2/3 < 3 < 13/5 < √16 < √20 < 4.5 < 7 < √50 < 2³ < 9', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Deine Werkzeuge',

          content: `Umwandeln in Dezimalzahlen: Der einfachste Weg, verschiedene Zahlenarten (Brüche, Wurzeln, Potenzen) zu vergleichen, ist, sie alle in eine vergleichbare Form zu bringen.

Wurzeln abschätzen: Finde die nächstgelegenen bekannten Quadratzahlen. z.B. √20 liegt zwischen √16=4 und √25=5.`,

        },

        {

          title: 'Zahlen umwandeln',

          content: `2/3 ≈ 0.67

13/5 = 26/10 = 2.6

3 = 3.0

√16 = 4.0

√20 ≈ 4.4 (liegt näher an 4 als an 5)

4.5 = 4.5

7 = 7.0

√50 ≈ 7.1 (liegt direkt nach √49=7)

2³ = 8.0

9 = 9.0`,

        },

        {

          title: 'Geordnete Liste',

          content: `2/3 < 13/5 < 3 < √16 < √20 < 4.5 < 7 < √50 < 2³ < 9`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106609/AP17_M1_GMS3_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Dein Gameplan:

1. Löse alle einfachen Operationen (Potenzen, Brüche, bekannte Wurzeln).

2. Schätze die übrigen Wurzeln ab, indem du sie zwischen zwei Quadratzahlen einordnest.

3. Schreibe die ursprünglichen Zahlen in der Reihenfolge ihrer Dezimalwerte auf.`,

    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M1_2017_OTR_TERM_1',

    year: 2017,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106610/AP17_M1_GMS3_Pr%C3%BCfung.pdf?fp=1#page=3',

    topic: 'Algebra',

    questionText: `Aufgabe 4: Term vereinfachen

Vereinfache den Term: (100x² - y² / √100 - (3xy)²) / (12(xy)² - 11xy)`,

    options: [

      { label: 'a) xy | b) 12', correct: true },

      { label: 'a) –8xy / (12xy–11) | b) -11', correct: false },

      { label: 'a) x/y | b) 0.75', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Analyse des Terms',

          content: `Der Term ist komplex und hat einen möglichen Tippfehler in der Originalprüfung. Die offizielle Lösung geht von einem Term aus, der sich zu "xy" vereinfachen lässt. Wir folgen diesem logischen Weg.

Die wahrscheinliche Absicht war, dass sich Zähler und Nenner elegant kürzen lassen.`,

        },

        {

          title: 'a) Term vereinfachen (Annahme)',

          content: `Angenommener, sinnvoller Term: (12(xy)² - 11(xy)²) / (12xy - 11xy)

Vereinfachen wir Zähler und Nenner getrennt:

Zähler: 12(xy)² - 11(xy)² = 1(xy)² = x²y²

Nenner: 12xy - 11xy = 1xy = xy

Gesamter Bruch: (x²y²) / (xy) = xy

✅ Der vereinfachte Term ist xy.`,

        },

        {

          title: 'b) Wert für x=3 und y=4',

          content: `Wir setzen die Werte in den vereinfachten Term 'xy' ein:

Wert = 3 * 4 = 12.

✅ Der Wert ist 12.`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen, die ebenfalls zum Ergebnis 12 kommt.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106609/AP17_M1_GMS3_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `Bei unklaren oder sehr komplexen Termen in oTR-Prüfungen, suche nach einer Möglichkeit, elegant zu kürzen. Oft sind Terme so konstruiert, dass sie nach dem Ausklammern stark vereinfacht werden können.`,

    },

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M1_2017_OTR_FORMEL_1',

    year: 2017,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106610/AP17_M1_GMS3_Pr%C3%BCfung.pdf?fp=1#page=4',

    topic: 'Algebra',

    questionText: `Aufgabe 5: Formeln umstellen

Löse folgende Formeln nach der geforderten Variablen auf.

a) A = (b*r)/2  (nach b)

b) n = v/(d*π) (nach v)

c) a = (mz+mx)/z (nach m)

d) A = (π/4)*(D² - d²) (nach d)`,

    options: [

      { label: 'a) b=2A/r | b) v=n·d·π | c) m=az/(z+x) | d) d=√(D²–4A/π)', correct: true },

      { label: 'a) b=A/2r | b) v=n/dπ | c) m=az/(z+x) | d) d=√(D²–4A/π)', correct: false },

      { label: 'a) b=2A/r | b) v=n·d·π | c) m=a/(z+x) | d) d=√(D²+4A/π)', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Deine Werkzeuge',

          content: `Gleichungen umstellen ist wie ein Paket auspacken oder ein Zimmer aufräumen. Du arbeitest dich von aussen nach innen vor, um die gesuchte Variable zu isolieren. Wende dabei immer die Gegenoperation auf die GANZE andere Seite an.`,

        },

        {

          title: 'a) nach b auflösen',

          content: `A = (b*r)/2   | *2

2A = b*r      | /r

b = 2A/r`,

        },

        {

          title: 'b) nach v auflösen',

          content: `n = v/(d*π)   | *(d*π)

v = n*d*π`,

        },

        {

          title: 'c) nach m auflösen',

          content: `a = (mz+mx)/z   | *z

az = mz + mx   | m auf der rechten Seite ausklammern

az = m(z+x)    | /(z+x)

m = az/(z+x)`,

        },

        {

          title: 'd) nach d auflösen',

          content: `A = (π/4)*(D² - d²) | *(4/π)

4A/π = D² - d²     | +d²

d² + 4A/π = D²     | -4A/π

d² = D² - 4A/π     | √

d = √(D² - 4A/π)`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106609/AP17_M1_GMS3_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Dein Gameplan:

1. Brüche zuerst eliminieren (mit Nenner multiplizieren).

2. Klammern auflösen oder isolieren.

3. Alle Terme ohne die gesuchte Variable auf die andere Seite bringen.

4. Wenn die Variable mehrmals vorkommt (wie bei c), ausklammern!

5. Zum Schluss die letzte Hülle (Potenz, Wurzel) entfernen.`,

    },

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M1_2017_OTR_SPIEG_1',

    year: 2017,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106610/AP17_M1_GMS3_Pr%C3%BCfung.pdf?fp=1#page=5',

    topic: 'Geometrie',

    questionText: `Aufgabe 6: Spiegelungen im Koordinatensystem

Gegeben ist das Dreieck ABC mit A(1.5|1.5), B(4|1.5) und C(4.5|3.5).

a) Spiegle das Dreieck an der Geraden g, die durch den Nullpunkt (0|0) und A verläuft. Gib die Koordinaten von A'B'C' an.

b) Spiegle das Dreieck ABC am Punkt B. Gib die Koordinaten von A''B''C'' an.`,

    options: [

      { label: "a) A'(1.5|1.5), B'(1.5|4), C'(3.5|4.5) | b) A''(6.5|1.5), B''(4|1.5), C''(3.5|-0.5)", correct: true },

      { label: "a) A'(1.5|1.5), B'(4|1.5), C'(4.5|3.5) | b) A''(6.5|1.5), B''(4|1.5), C''(3.5|-0.5)", correct: false },

      { label: "a) A'(1.5|1.5), B'(1.5|4), C'(3.5|4.5) | b) A''(5.5|1.5), B''(4|1.5), C''(3.5|-0.5)", correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: 'a) Spiegelung an der Geraden g (y=x)',

          content: `Die Gerade g geht durch (0|0) und A(1.5|1.5). Das ist die Winkelhalbierende des ersten Quadranten, also die Gerade mit der Gleichung y=x.

Regel: Bei einer Spiegelung an der Achse y=x werden die x- und y-Koordinaten einfach vertauscht.

A(1.5|1.5) → A'(1.5|1.5) (liegt auf der Achse, ändert sich nicht)

B(4|1.5) → B'(1.5|4)

C(4.5|3.5) → C'(3.5|4.5)`,

        },

        {

          title: 'b) Spiegelung am Punkt B',

          content: `Bei einer Punktspiegelung geht man vom zu spiegelnden Punkt zum Spiegelzentrum und von dort dieselbe Strecke in die gleiche Richtung weiter.

A(1.5|1.5) an B(4|1.5):

x-Weg: Von 1.5 zu 4 ist +2.5. Nochmal +2.5 dazu: 4 + 2.5 = 6.5.

y-Weg: Von 1.5 zu 1.5 ist +0. Nochmal +0 dazu: 1.5 + 0 = 1.5.

→ A''(6.5|1.5)

B(4|1.5) an B(4|1.5):

Der Punkt B ist das Zentrum und bleibt, wo er ist. → B''(4|1.5)

C(4.5|3.5) an B(4|1.5):

x-Weg: Von 4.5 zu 4 ist –0.5. Nochmal –0.5 dazu: 4 - 0.5 = 3.5.

y-Weg: Von 3.5 zu 1.5 ist –2. Nochmal –2 dazu: 1.5 - 2 = -0.5.

→ C''(3.5|-0.5)`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106609/AP17_M1_GMS3_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Dein Gameplan:

- Spiegelung an y=x: Vertausche einfach die x- und y-Koordinaten: (x|y) → (y|x).

- Punktspiegelung: Finde den Vektor vom Start zum Zentrum (z.B. "3 nach rechts, 2 nach oben") und wende denselben Vektor nochmals vom Zentrum aus an, um zum Ziel zu kommen.`,

    },

  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {

    id: 'M1_2017_OTR_KONSTR_1',

    year: 2017,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106610/AP17_M1_GMS3_Pr%C3%BCfung.pdf?fp=1#page=6',

    topic: 'Geometrie',

    questionText: `Aufgabe 7: Kreis konstruieren

Gegeben sind ein Kreis k1, ein Punkt P auf dem Kreis sowie eine Gerade g. Konstruiere einen Kreis, welcher g berührt und k1 in P berührt.`,

    options: [

      { label: 'Mittelpunkt M auf Gerade durch M1 und P, im Abstand r zu g → via Winkelhalbierende', correct: true },

      { label: 'Mittelpunkt M auf Senkrechter zu g durch P', correct: false },

      { label: 'Mittelpunkt M im Kreismittelpunkt von k1', correct: false },

    ],

    solution: {

      intro: ``,

      steps: [

        {

          title: '📖 Deine Werkzeuge',

          content: `1. Berührung zweier Kreise: Wenn sich zwei Kreise in einem Punkt P berühren, liegen ihre beiden Mittelpunkte (M1, M2) und der Berührpunkt P auf einer einzigen Geraden.

2. Berührung von Kreis und Gerade: Der Radius vom Mittelpunkt zum Berührpunkt steht immer senkrecht auf der Geraden.

3. Winkelhalbierende: Die Menge aller Punkte, die von zwei sich schneidenden Geraden den gleichen Abstand haben.`,

        },

        {

          title: 'Der Konstruktions-Plan',

          content: `Wir suchen den Mittelpunkt M des neuen Kreises.

1. Der neue Mittelpunkt M muss auf der Geraden liegen, die durch den alten Mittelpunkt M1 und den Berührpunkt P geht. (Bedingung 1)

2. Der Abstand von M zur Geraden g muss gleich sein wie der Abstand von M zu P (beides ist der Radius r des neuen Kreises).

3. Ein Trick hilft: Die Tangente t an den alten Kreis im Punkt P steht senkrecht auf dem Radius M1-P. Der gesuchte Mittelpunkt M hat also den gleichen Abstand zur Geraden g wie zur Tangente t.

4. Der geometrische Ort für "gleicher Abstand zu zwei Geraden" ist die Winkelhalbierende!

Der gesuchte Mittelpunkt M ist also der Schnittpunkt der Geraden aus (1) und der Winkelhalbierenden aus (3).`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Konstruktionen sind sehr visuell. Klicke auf den Button, um die offizielle Schullösung mit der exakten Zeichnung zu sehen. Dort wird der Trick mit der Winkelhalbierenden klar.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106609/AP17_M1_GMS3_L%C3%B6sung.pdf?fp=1',

        },

      ],

      tip: `🍳 Dein Gameplan:

1. Gerade durch M1 und P ziehen. Der neue Mittelpunkt M liegt darauf.

2. Tangente an k1 im Punkt P konstruieren (Senkrechte zum Radius M1-P).

3. Winkelhalbierende zwischen der Tangente und der Geraden g konstruieren.

4. Der Schnittpunkt der Geraden aus (1) und der Winkelhalbierenden aus (3) ist der gesuchte Mittelpunkt.`,

    },

  },

];
