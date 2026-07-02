
import { frac } from '../../mathFormat';

export const questions2024_oTR = [
  {
    id: 'M1_2024_OTR_EQ_1a',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Gleichungen',
    questionText: `Aufgabe 1a: Löse folgende Gleichung.

6x - 22 = 4x + 24`,
    options: [
      { label: 'x = 23', correct: true },
      { label: 'x = 11', correct: false },
      { label: 'x = -23', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Gleichung lösen',
          content: `6x - 22 = 4x + 24
2x - 22 = 24
2x = 46
x = 23

✅ Ergebnis: x = 23`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ x-Terme auf eine Seite.
2️⃣ Zahlen auf die andere Seite.
3️⃣ Durch den Koeffizienten teilen.`,
    },
  },

  {
    id: 'M1_2024_OTR_TERM_2',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Terme & Klammern',
    verified: true,
    questionText: `Aufgabe 2: Terme vereinfachen

Vereinfache so weit wie möglich.

a) ${frac('36x³y²z', '15x²z')}

b) ${frac('8a³', '9 − 3a')} : ${frac('4a⁵', '3 − a')}

c) ${frac('8a · 27b²(4 + 7y)', '(8 + 14y) · 18a² · 6b')}`,
    options: [
      { label: 'a) 12xy²/5 | b) 2/(3a²) | c) b/a', correct: true },
      { label: 'a) 12xy²/5 | b) 2a³/3 | c) b/a', correct: false },
      { label: 'a) 12x/5 | b) 2/(3a²) | c) a/b', correct: false },
    ],
    solution: {
      intro: 'Diese Aufgabe war in einer früheren Version dieser App komplett anders (und falsch) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version. Es fehlten ausserdem die Teile b) und c) komplett.',
      steps: [
        {
          title: 'a) Kürzen',
          content: `36x³y²z / 15x²z

Zahlen kürzen: 36/15 = 12/5
x-Potenzen kürzen: x³/x² = x
z kürzt sich komplett weg (z/z = 1)

= 12xy² / 5

✅ Ergebnis: 12xy²/5`,
        },
        {
          title: 'b) Division durch Kürzen der Klammern',
          content: `8a³/(9−3a) : 4a⁵/(3−a)

9−3a = 3(3−a)

= 8a³/(3(3−a)) : 4a⁵/(3−a)
= 8a³/(3(3−a)) · (3−a)/4a⁵     (Division = Multiplikation mit dem Kehrwert)

(3−a) kürzt sich weg:

= 8a³/(3·4a⁵)
= 8a³/(12a⁵)
= 8/(12a²)
= 2/(3a²)

✅ Ergebnis: 2/(3a²)`,
        },
        {
          title: 'c) Grossen Bruch kürzen',
          content: `[8a · 27b²(4+7y)] / [(8+14y) · 18a² · 6b]

8+14y = 2(4+7y)

= [8a · 27b²(4+7y)] / [2(4+7y) · 18a² · 6b]

(4+7y) kürzt sich weg:

= [8a · 27b²] / [2 · 18a² · 6b]
= 216ab² / 216a²b
= b/a     (a²/a=a, b²/b=b, 216/216=1)

✅ Ergebnis: b/a`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Zahlen und gleiche Buchstaben in Zähler und Nenner getrennt kürzen.
2️⃣ Division = Multiplikation mit dem Kehrwert.
3️⃣ Klammern faktorisieren, wenn sie sich in Zähler und Nenner wiederholen — dann kürzen sie sich weg.`,
    },

    // ── ÜBUNGEN a): Zahlen und Potenzen kürzen.
    // ── ÜBUNGEN b): Kehrwert-Division mit Faktorisieren.
    // ── ÜBUNGEN c): grossen Bruch mit gemeinsamem Klammerfaktor kürzen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Kürze: 36/15', answer: '12/5', tip: 'Teile Zähler und Nenner durch den ggT.' },
      { level: 'einfach', q: 'Kürze: x³/x². Was bleibt übrig?', answer: 'x', tip: 'Bei gleicher Basis: Exponenten subtrahieren.' },
      { level: 'einfach', q: 'Faktorisiere: 9−3a. Was ist der gemeinsame Faktor?', answer: '3', tip: 'ggT von 9 und 3.' },

      { level: 'mittel', q: 'Kürze: a⁵/a³. Welchen Exponenten hat das Ergebnis?', answer: '2', tip: 'Exponenten subtrahieren.' },
      { level: 'mittel', q: 'Kürze so weit wie möglich: 8/(3·4)', answer: '2/3', tip: 'Kürze den Bruch so weit wie möglich.' },
      { level: 'mittel', q: 'Faktorisiere: 8+14y. Was ist der gemeinsame Faktor?', answer: '2', tip: 'ggT von 8 und 14.' },

      { level: 'schwer', q: 'Kürze: 216/216', answer: '1', tip: 'Eine Zahl durch sich selbst geteilt.' },
      { level: 'schwer', q: 'Vereinfache: a³/a⁵. Welchen Exponenten hat a im Ergebnis (mit Vorzeichen, falls negativ)?', answer: '-2', tip: 'Exponenten subtrahieren — auch negative Exponenten sind erlaubt.' },

      { level: 'kanti', q: 'Vereinfache: 36x³y²z / 15x²z. Wie lautet der gekürzte Zahlen-Vorfaktor?', answer: '12/5', tip: 'Kürze nur den Zahlenanteil des Bruchs.' },
      { level: 'kanti', q: 'Vereinfache: [8a·27b²(4+7y)] / [(8+14y)·18a²·6b]. Welche Variable bleibt im Zähler stehen?', answer: 'b', tip: 'Kürze zuerst den Faktor (4+7y) weg, dann die Zahlen und a.' },
    ],
  },

  {
    id: 'M1_2024_OTR_ROLL_3a',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Funktionen',
    questionText: `Aufgabe 3a: Wie viele Meter unterhalb des Strassenniveaus ist Monika nach einer Minute Rolltreppenfahrt?`,
    options: [
      { label: '10.5 m', correct: true },
      { label: '21 m', correct: false },
      { label: '7 m', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Pro Minute ablesen',
          content: `21 m in 2 min
=> 10.5 m in 1 min

✅ Ergebnis: 10.5 m`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Bei gleichmässiger Bewegung zuerst auf 1 Minute umrechnen.`,
    },
  },

  {
    id: 'M1_2024_OTR_ROLL_3b',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Funktionen',
    questionText: `Aufgabe 3b: Berechne, wie viele Sekunden es dauert, bis Monika 7 m höher ist als das Bahnsteigniveau.`,
    options: [
      { label: '40 s', correct: true },
      { label: '23 s', correct: false },
      { label: '60 s', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Zeit berechnen',
          content: `21 m in 2 min
=> 10.5 m in 1 min

7 m entsprechen:
7 / 10.5 = 2/3 min

2/3 min = 40 s

✅ Ergebnis: 40 s`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Meter pro Minute bestimmen.
2️⃣ Gesuchte Strecke durch diese Rate teilen.
3️⃣ Minuten in Sekunden umrechnen.`,
    },
  },

  {
    id: 'M1_2024_OTR_ROLL_3c',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Funktionen',
    questionText: `Aufgabe 3c: Zeichne den Graphen von Sven in das Koordinatensystem ein.`,
    options: [
      { label: 'Graph nach Lösung einzeichnen', correct: true },
      { label: 'Gerade durch Ursprung', correct: false },
      { label: 'Beliebige fallende Gerade', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Hinweis',
          content: `Die offizielle Lösung verlangt eine graphische Darstellung im Koordinatensystem. Der genaue Verlauf ist in der Lösungsskizze gegeben.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Graphen immer mit den gegebenen Punkten und der Steigung einzeichnen.`,
    },
  },

  {
    id: 'M1_2024_OTR_RATE_4a',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Proportionalität',
    questionText: `Aufgabe 4a: Ein Fahrzeug legt in 4.5 Stunden 441 km zurück. Welche Strecke hat es bei gleichbleibender Durchschnittsgeschwindigkeit nach 5 Stunden zurückgelegt?`,
    options: [
      { label: '490 km', correct: true },
      { label: '441 km', correct: false },
      { label: '500 km', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Geschwindigkeit bestimmen',
          content: `441 km in 4.5 h
=> 441 / 4.5 = 98 km/h

Nach 5 h:
98 · 5 = 490 km

✅ Ergebnis: 490 km`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Pro Stunde rechnen.
2️⃣ Dann mit der neuen Zeit multiplizieren.`,
    },
  },

  {
    id: 'M1_2024_OTR_RATE_4b',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Proportionalität',
    questionText: `Aufgabe 4b: Nach einem Klassenfest brauchen 3 SchülerInnen 48 Minuten für die Aufräumarbeiten. Nach wie vielen Minuten wären 8 SchülerInnen mit der Arbeit fertig?`,
    options: [
      { label: '18 Minuten', correct: true },
      { label: '24 Minuten', correct: false },
      { label: '12 Minuten', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Umgekehrt proportional',
          content: `3 SchülerInnen · 48 min = 144 Schüler-Minuten
144 / 8 = 18 min

✅ Ergebnis: 18 Minuten`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Mehr Personen = weniger Zeit, also umgekehrt proportional.`,
    },
  },

  {
    id: 'M1_2024_OTR_RATE_4c',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Proportionalität',
    questionText: `Aufgabe 4c: Der Neubau einer Schule kann von 6 Malern in 17 Tagen gestrichen werden. Nach 2 Tagen meldet sich ein Maler krank. Wie lange dauern die Arbeiten jetzt?`,
    options: [
      { label: '20 Tage', correct: true },
      { label: '18 Tage', correct: false },
      { label: '15 Tage', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Restarbeit',
          content: `6 Maler · 17 Tage = 102 Maler-Tage
Nach 2 Tagen:
6 · 2 = 12 Maler-Tage erledigt
Restarbeit = 90 Maler-Tage

Nun arbeiten 5 Maler weiter:
90 / 5 = 18 Tage

2 Tage + 18 Tage = 20 Tage

✅ Ergebnis: 20 Tage`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gesamtarbeit bestimmen.
2️⃣ Bereits erledigte Arbeit abziehen.
3️⃣ Rest durch neue Teamgrösse teilen.`,
    },
  },

  {
    id: 'M1_2024_OTR_WINKEL_5a',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Geometrie',
    questionText: `Aufgabe 5a: Die Geraden g1 und g2 sind parallel. Bestimme die Grösse des Winkels α.`,
    options: [
      { label: 'α = 51°', correct: true },
      { label: 'α = 129°', correct: false },
      { label: 'α = 17°', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Winkel bestimmen',
          content: `Mit gleichschenkligen Dreiecken und Wechselwinkeln:
112° im gleichschenkligen Dreieck
17° im anderen gleichschenkligen Dreieck
129° mit Winkelsumme im Dreieck
51° mit Nebenwinkel

✅ Ergebnis: α = 51°`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Gleichschenklige Dreiecke, Wechselwinkel und Nebenwinkel nutzen.`,
    },
  },

  {
    id: 'M1_2024_OTR_FLACHE_5b',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Geometrie',
    questionText: `Aufgabe 5b: Bestimme die grün gefärbte Fläche.`,
    options: [
      { label: 'F = 98', correct: true },
      { label: 'F = 84', correct: false },
      { label: 'F = 112', correct: false },
    ],
    solution: {
      intro: '',
      steps: [
        {
          title: 'Fläche berechnen',
          content: `Radius bestimmen, zweimal Satz des Pythagoras anwenden.
Die offizielle Lösung ergibt:

✅ F = 98`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Erst Hilfslängen bestimmen, dann Teilflächen addieren.`,
    },
  },

  {
    id: 'M1_2024_OTR_HOLZ_6',
    year: 2024,
    subject: 'Mathe',
    exam: 'Mathe ohne TR',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164189/AP24_GMS3_M1_oTR_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Zahlen & Teilbarkeit',
    verified: true,
    questionText: `Aufgabe 6: Holzstäbe zersägen

Drei Holzstäbe von 90 cm, 144 cm und 270 cm Länge sollen in gleich lange, aber möglichst grosse Stücke zersägt werden, so dass kein Reststück übrigbleibt.

a) Welches ist die Länge eines solchen Stücks? Wie oft muss man insgesamt sägen, wenn jeder Holzstab einzeln bearbeitet wird?

b) Es soll wieder so gesägt werden, dass gleich lange, aber möglichst grosse Stücke entstehen. Nun darf aber bei einem der drei Holzstäbe ein Reststück von 9 cm übrigbleiben. Wie lang sind die Stücke dann? Bei welchem Stab bleibt der Rest?`,
    options: [
      { label: 'a) 18 cm, 25 Schnitte | b) 45 cm, Rest beim 144-cm-Stab', correct: true },
      { label: 'a) 18 cm, 24 Schnitte | b) 45 cm, Rest beim 144-cm-Stab', correct: false },
      { label: 'a) 18 cm, 25 Schnitte | b) 27 cm, Rest beim 144-cm-Stab', correct: false },
    ],
    solution: {
      intro: 'Teil b) war in einer früheren Version dieser App falsch berechnet (27 cm statt 45 cm) und Teil a) hatte einen Tippfehler in der Antwortoption (24 statt 25 Schnitte) — hier die korrekte, gegen die offizielle Prüfung geprüfte Version.',
      steps: [
        {
          title: 'a) Länge bestimmen',
          content: `ggT(90, 144, 270) = 18

Anzahl Stücke:
90/18 = 5
144/18 = 8
270/18 = 15

Schnitte:
5-1 = 4
8-1 = 7
15-1 = 14

Total = 4 + 7 + 14 = 25

✅ Ergebnis: 18 cm, 25 Schnitte`,
        },
        {
          title: 'b) Länge mit Reststück bestimmen',
          content: `Der Rest von 9 cm darf bei GENAU EINEM der drei Stäbe entstehen. Wir probieren beim 144-cm-Stab: 144 − 9 = 135 cm ist dann die "nutzbare" Länge dieses Stabs.

Primfaktorzerlegung:
90 = 2 · 3² · 5
135 = 3³ · 5     (= 144 − 9)
270 = 2 · 3³ · 5

ggT(90, 135, 270): von jedem Primfaktor die kleinste Potenz
→ 3² · 5 = 45     (2 fällt weg, da 135 keinen Faktor 2 hat)

Probe: 144 = 3 · 45 + 9 ✅ (3 volle Stücke plus 9 cm Rest)

✅ Stücklänge: 45 cm
✅ Der Rest von 9 cm bleibt beim 144-cm-Stab.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179312/AP24_GMS3_M1_oTR_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  ggT bestimmen: von jedem gemeinsamen Primfaktor die kleinste Potenz.
2️⃣  Anzahl Stücke pro Stab = Stablänge ÷ Stücklänge; Schnitte = Stücke − 1.
3️⃣  Bei erlaubtem Reststück: probiere, bei welchem Stab (Länge − Rest) den grössten ggT mit den anderen Stäben ergibt.`,
    },

    // ── ÜBUNGEN a): ggT dreier Zahlen und Schnitte zählen.
    // ── ÜBUNGEN b): ggT mit angepasster (Länge−Rest)-Zahl.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Primfaktorzerlegung: 18 = 2 · 3 · ?', answer: '3', tip: 'Welcher Faktor fehlt, damit 2·3·?=18 ist?' },
      { level: 'einfach', q: 'Bestimme den ggT von 12 und 18.', answer: '6', tip: '12=2²·3, 18=2·3² — gemeinsame Faktoren mit kleinerer Potenz.' },
      { level: 'einfach', q: 'Berechne: 90/18', answer: '5', tip: 'Wie oft passt 18 in 90?' },

      { level: 'mittel', q: 'Bestimme den ggT von 90, 144 und 270.', answer: '18', tip: 'Primfaktorzerlegung aller drei Zahlen, dann von jedem Faktor die kleinste Potenz.' },
      { level: 'mittel', q: 'Berechne: 8−1', answer: '7', tip: 'Bei n Stücken braucht es n−1 Schnitte.' },
      { level: 'mittel', q: 'Ein 60cm-Stab wird in 15cm-Stücke gesägt. Wie viele Schnitte braucht es?', answer: '3', tip: 'Erst die Anzahl Stücke berechnen, dann 1 abziehen.' },

      { level: 'schwer', q: 'Bestimme den ggT von 90 und 135.', answer: '45', tip: '90=2·3²·5, 135=3³·5 — gemeinsame Faktoren mit kleinerer Potenz.' },
      { level: 'schwer', q: 'Berechne: 144 − 9', answer: '135', tip: 'Ziehe den Rest von der Stablänge ab.' },

      { level: 'kanti', q: 'Bestimme den ggT von 90, 144 und 270. Wie oft muss der 270cm-Stab gesägt werden (Schnitte)?', answer: '14', tip: 'Erst die Anzahl Stücke berechnen (270 durch die Stücklänge), dann 1 abziehen.' },
      { level: 'kanti', q: 'Bestimme den ggT von 90, 135 (=144−9) und 270.', answer: '45', tip: 'Von jedem Primfaktor die kleinste Potenz nehmen — genau wie im Original.' },
    ],
  },

];

