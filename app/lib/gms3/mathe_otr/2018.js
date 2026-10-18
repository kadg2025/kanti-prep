
import { frac } from '../../mathFormat';

export const questions2018_oTR = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_TERME_1',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=1',

    topic: 'Terme & Klammern',

    verified: true,

    questionText: `Aufgabe 1: Terme vereinfachen & Gleichung lösen

a) Schreibe ohne Klammern und möglichst einfach:

${frac('1', '3')} · (a + 0.5·a − 0.5·3²)

b) Bestimme x in der folgenden Gleichung:

${frac('1', '2')} · (x − ${frac('1', '3')}·x + 2·0.5²) = 0`,

    options: [

      { label: 'a) a/2 - 3/2 | b) x = -3/4', correct: true },

      { label: 'a) a/3 - 3/2 | b) x = 3/4', correct: false },

      { label: 'a) a/2 - 9/2 | b) x = -1/2', correct: false },

    ],

    teile: [
      { letter: 'a', options: [
        { label: 'a/2 - 3/2', correct: true },
        { label: 'a/3 - 3/2', correct: false },
        { label: 'a/2 - 9/2', correct: false },
      ] },
      { letter: 'b', options: [
        { label: 'x = -3/4', correct: true },
        { label: 'x = 3/4', correct: false },
        { label: 'x = -1/2', correct: false },
      ] },
    ],

    solution: {

      intro: 'Der Trick bei beiden Teilaufgaben: Erst alles INNERHALB der Klammer fertig ausrechnen (Potenzen, Punktrechnung), dann erst den Bruch davor ausmultiplizieren.',

      steps: [

        {

          title: '📖 Deine Werkzeuge',

          content: `Ausklammern eines Bruchs: 1/3 · (A + B) heisst, der Bruch wird mit JEDEM Term in der Klammer einzeln multipliziert: 1/3·A + 1/3·B.

Reihenfolge: Potenz zuerst (3² = 9), dann Punktrechnung (0.5 · 9), erst danach die Klammer ausmultiplizieren.

Brüche zusammenfassen: Nur Brüche mit dem GLEICHEN Nenner darfst du addieren/subtrahieren. Bringe sie zuerst auf einen gemeinsamen Nenner.`,

        },

        {

          title: 'a) Klammer berechnen',

          content: `0.5 · 3² = 0.5 · 9 = 4.5
Die Klammer wird zu: (a + 0.5a − 4.5)`,

        },

        {

          title: 'a) Ausmultiplizieren und zusammenfassen',

          content: `1/3 · (a + 0.5a − 4.5)
= 1/3·a + 1/6·a − 1/6·9
= 2/6·a + 1/6·a − 9/6
= 3/6·a − 9/6
= a/2 − 3/2
✅ Ergebnis: a/2 − 3/2`,

        },

        {

          title: 'b) Klammer berechnen',

          content: `2 · 0.5² = 2 · 0.25 = 0.5
Die Klammer wird zu: (x − 1/3·x + 0.5)`,

        },

        {

          title: 'b) Ausmultiplizieren',

          content: `1/2 · (x − 1/3·x + 0.5) = 0
= 1/2·x − 1/6·x + 1/4 = 0`,

        },

        {

          title: 'b) x isolieren',

          content: `1/2·x − 1/6·x = 3/6·x − 1/6·x = 2/6·x = 1/3·x
1/3·x + 1/4 = 0   | −1/4
1/3·x = −1/4    | ·3
x = −3/4
✅ Ergebnis: x = −3/4`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:
1️⃣ Potenzen und Punktrechnung IN der Klammer zuerst berechnen.
2️⃣ Den äusseren Bruch mit JEDEM Term einzeln ausmultiplizieren.
3️⃣ Gleichnamige Brüche zusammenfassen (gemeinsamer Nenner).
4️⃣ Bei Gleichungen: x-Terme auf eine Seite, Zahlen auf die andere.`,

    },

    // ── ÜBUNGEN: aufbauend zu Klammern-mit-Bruch-ausmultiplizieren und Brüche zusammenfassen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 0.5 · 3²', answer: '4.5', tip: 'Zuerst die Potenz berechnen, dann multiplizieren (Punkt vor Strich).' },
      { level: 'einfach', q: 'Berechne: 2 · 0.5²', answer: '0.5', tip: 'Erst quadrieren, dann multiplizieren.' },
      { level: 'einfach', q: 'Fasse zusammen: 1/3 + 1/6', answer: '1/2', tip: 'Bringe beide Brüche zuerst auf denselben Nenner.' },

      { level: 'mittel', q: 'Multipliziere aus: 1/3 · (a + 3)', answer: 'a/3+1', tip: 'Multipliziere den Bruch mit JEDEM Term einzeln.' },
      { level: 'mittel', q: 'Fasse zusammen: 1/2 − 1/6', answer: '1/3', tip: 'Bringe beide Brüche auf den Nenner 6.' },
      { level: 'mittel', q: 'Löse: 1/3·x + 1/4 = 0', answer: 'x=-3/4', tip: 'Bringe die Zahl auf die andere Seite, dann mit dem Kehrwert des Bruchs multiplizieren.' },

      { level: 'schwer', q: 'Multipliziere aus und fasse zusammen: 1/3 · (a + 0.5a)', answer: 'a/2', tip: 'Erst die Klammer zusammenfassen (a+0.5a), dann mit dem Bruch multiplizieren.' },
      { level: 'schwer', q: 'Fasse zusammen: x − 1/3·x', answer: '2x/3', tip: 'Bringe x auf den Nenner 3 (x = 3/3·x), dann subtrahieren.' },

      { level: 'kanti', q: 'Vereinfache: 1/3 · (a + 0.5·a − 0.5·3²)', answer: 'a/2-3/2', tip: 'Erst Potenz und Punktrechnung in der Klammer, dann den Bruch ausmultiplizieren und zusammenfassen.' },
      { level: 'kanti', q: 'Löse nach x auf: 1/2 · (x − 1/3·x + 2·0.5²) = 0', answer: 'x=-3/4', tip: 'Genau wie bei den einfacheren Übungen — nur mit mehr Zwischenschritten.' },
    ],

  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_FOLGE_2',

    verified: true,

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=2',

    topic: 'Zahlen & Teilbarkeit',

    questionText: `Aufgabe 2: Zahlenfolgen

Führe die Zahlenfolge fort. Notiere bei jeder Folge die nächsten 2 Glieder.

a) 7, 11, 15, 19, 23, …

b) 3, 4, 7, 11, 18, 29, …

c) 0.2, 0.6, 1.8, 5.4, …

d) 1, 3, 7, 15, 31, 63, …`,

    options: [

      { label: 'a) 27, 31 | b) 47, 76 | c) 16.2, 48.6 | d) 127, 255', correct: true },

      { label: 'a) 27, 31 | b) 48, 78 | c) 16.2, 48.6 | d) 125, 253', correct: false },

      { label: 'a) 25, 29 | b) 47, 76 | c) 15.6, 46.8 | d) 127, 255', correct: false },

    ],

    teile: [
      { letter: 'a', options: [
        { label: '27, 31', correct: true },
        { label: '25, 29', correct: false },
        { label: '27, 27', correct: false },
      ] },
      { letter: 'b', options: [
        { label: '47, 76', correct: true },
        { label: '48, 78', correct: false },
        { label: '47, 65', correct: false },
      ] },
      { letter: 'c', options: [
        { label: '16.2, 48.6', correct: true },
        { label: '15.6, 46.8', correct: false },
        { label: '16.2, 32.4', correct: false },
      ] },
      { letter: 'd', options: [
        { label: '127, 255', correct: true },
        { label: '125, 253', correct: false },
        { label: '126, 252', correct: false },
      ] },
    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'a) Arithmetische Folge',

          content: `Immer +4:

23 + 4 = 27

27 + 4 = 31

✅ 27, 31`,

        },

        {

          title: 'b) Fibonacci-artige Folge',

          content: `Immer die letzten zwei Zahlen addieren:

18 + 29 = 47

29 + 47 = 76

✅ 47, 76`,

        },

        {

          title: 'c) Geometrische Folge',

          content: `Immer mal 3:

5.4 · 3 = 16.2

16.2 · 3 = 48.6

✅ 16.2, 48.6`,

        },

        {

          title: 'd) Verdoppeln und +1',

          content: `63 · 2 + 1 = 127

127 · 2 + 1 = 255

✅ 127, 255`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Differenz prüfen.

2️⃣ Faktor prüfen.

3️⃣ Prüfen, ob zwei Vorgänger addiert werden.`,


    },

    // ── ÜBUNGEN: aufbauend zu arithmetischen, geometrischen und rekursiven Zahlenfolgen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Setze fort: 2, 5, 8, 11, ? (arithmetische Folge)', answer: '14', tip: 'Finde die konstante Differenz zwischen den Zahlen.' },
      { level: 'einfach', q: 'Setze fort: 1, 2, 4, 8, ? (geometrische Folge)', answer: '16', tip: 'Finde den konstanten Faktor zwischen den Zahlen.' },
      { level: 'einfach', q: 'Berechne: 1 + 2', answer: '3', tip: 'Addiere die beiden Zahlen.' },

      { level: 'mittel', q: 'Setze fort: 5, 8, 11, 14, ?', answer: '17', tip: 'Ist die Differenz konstant? Addiere sie erneut.' },
      { level: 'mittel', q: 'Setze fort: 2, 6, 18, 54, ?', answer: '162', tip: 'Ist der Faktor konstant? Multipliziere erneut.' },
      { level: 'mittel', q: 'Setze fort (Fibonacci-artig): 2, 3, 5, 8, 13, ?', answer: '21', tip: 'Addiere die letzten zwei Zahlen.' },

      { level: 'schwer', q: 'Setze fort: 1, 3, 7, 15, ? (verdoppeln und +1)', answer: '31', tip: 'Verdopple die letzte Zahl und addiere 1.' },
      { level: 'schwer', q: 'Setze fort: 0.5, 1.5, 4.5, 13.5, ? (mal 3)', answer: '40.5', tip: 'Multipliziere die letzte Zahl mit 3.' },

      { level: 'kanti', q: 'Setze die Folge fort: 7, 11, 15, 19, 23, ... Wie lautet das nächste Glied?', answer: '27', tip: 'Finde zuerst die konstante Differenz — genau wie im Original.' },
      { level: 'kanti', q: 'Setze die Folge fort: 1, 3, 7, 15, 31, 63, ... Wie lautet das nächste Glied?', answer: '127', tip: 'Verdopple die letzte Zahl und addiere 1 — genau wie im Original.' },
    ],

  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_MAURER_3',

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=3',

    topic: 'Proportionalität',

    questionText: `Aufgabe 3: Maurer

24 Maurer stellen eine Mauer in 15 Tagen fertig, wenn sie täglich 8 Stunden arbeiten.

a) Wie lange brauchen 20 Maurer für die gleiche Arbeit, wenn sie täglich 9 Stunden arbeiten?

b) In wie vielen ganzen Tagen zu wie vielen ganzen Stunden können 24 Maurer die Arbeit noch erledigen, wenn die tägliche Arbeitszeit max. 15 Stunden beträgt und nicht mehr als 20 Tage benötigt werden dürfen? Gib alle möglichen Lösungen an.

c) Nach 6 Tagen fallen 4 der 24 Maurer aus. Die Verbleibenden erhöhen ihre tägliche Arbeitszeit um 1 Stunde. Wie viele Tage brauchen die verbleibenden Maurer noch?`,

    options: [

      { label: 'a) 16 Tage | b) z.B. 8T/15h, 10T/12h, 12T/10h, 15T/8h, 20T/6h | c) 9.6 Tage', correct: true },

      { label: 'a) 18 Tage | b) nur 10T/12h | c) 12 Tage', correct: false },

      { label: 'a) 14 Tage | b) 15T/8h und 20T/6h | c) 8 Tage', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'Gesamtarbeit',

          content: `Gesamtarbeit = 24 · 15 · 8 = 2880 Personenstunden`,

        },

        {

          title: 'a) Neue Bedingungen',

          content: `Tage = 2880 / (20 · 9) = 2880 / 180 = 16

✅ Ergebnis: 16 Tage`,

        },

        {

          title: 'b) Mögliche Arbeitspläne',

          content: `Für 24 Maurer gilt:

24 · Tage · Stunden = 2880

Tage · Stunden = 120

Mit ganzen Zahlen, Tage ≤ 20 und Stunden ≤ 15:

8T / 15h

10T / 12h

12T / 10h

15T / 8h

20T / 6h

✅ Alle möglichen Lösungen laut Rechnung`,

        },

        {

          title: 'c) Nach 6 Tagen',

          content: `Bereits geleistet:

24 · 6 · 8 = 1152 Personenstunden

Restarbeit:

2880 - 1152 = 1728 Personenstunden

Neues Team:

20 Maurer, 9 h/Tag

Tage = 1728 / (20 · 9) = 1728 / 180 = 9.6

✅ Ergebnis: 9.6 Tage`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Gesamtarbeit berechnen.

2️⃣ Neue Leistung pro Tag ausrechnen.

3️⃣ Restarbeit bei Teil c) separat berechnen.`,

    },

  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_BEWEISE_4',

    verified: true,

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=4',

    topic: 'Zahlen & Teilbarkeit',

    questionText: `Aufgabe 4: Beweise / Gegenbeispiele

a) Jemand behauptet: „Die Summe von 7 aufeinanderfolgenden natürlichen Zahlen ist immer durch 7 teilbar."

i) Überprüfe anhand eines Beispiels.

ii) Zeige mit der Variablen n, dass die Behauptung stimmt.

b) Zeige mit einem Gegenbeispiel, dass diese Behauptung FALSCH ist:

„Die Summe von 6 aufeinanderfolgenden natürlichen Zahlen ist immer durch 6 teilbar."`,

    options: [

      { label: 'a) Stimmt: 7n + 21 = 7(n+3) | b) Falsch: z.B. 1+2+3+4+5+6=21', correct: true },

      { label: 'a) Stimmt nur manchmal | b) Es gibt kein Gegenbeispiel', correct: false },

      { label: 'a) Summe = 7n+14 | b) Stimmt immer', correct: false },

    ],

    teile: [
      { letter: 'a', options: [
        { label: 'Stimmt: 7n+21', correct: true },
        { label: 'Stimmt nur manchmal', correct: false },
        { label: 'Summe = 7n+14', correct: false },
      ] },
      { letter: 'b', options: [
        { label: 'Falsch: Summe=21', correct: true },
        { label: 'Es gibt kein Gegenbeispiel', correct: false },
        { label: 'Stimmt immer', correct: false },
      ] },
    ],

    solution: {

      intro: '',

      steps: [

        {

          title: 'a) Beispiel',

          content: `1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

28 ist durch 7 teilbar.

✅ Die Behauptung könnte stimmen`,

        },

        {

          title: 'a) Allgemeiner Beweis',

          content: `n + (n+1) + (n+2) + (n+3) + (n+4) + (n+5) + (n+6)

= 7n + 21

= 7(n + 3)

✅ Immer durch 7 teilbar`,

        },

        {

          title: 'b) Gegenbeispiel',

          content: `1 + 2 + 3 + 4 + 5 + 6 = 21

21 ist nicht durch 6 teilbar.

✅ Die Behauptung ist falsch`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Für einen Beweis mit n arbeiten.

2️⃣ Für ein Gegenbeispiel reicht ein einziges falsches Beispiel.`,


    },

    // ── ÜBUNGEN: aufbauend zu Summenformeln, Ausklammern und Gegenbeispielen.
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Berechne: 1+2+3', answer: '6', tip: 'Addiere der Reihe nach.' },
      { level: 'einfach', q: 'Ist 15 durch 3 teilbar?', answer: 'ja', tip: 'Teile 15 durch 3 — geht es ohne Rest?' },
      { level: 'einfach', q: 'Ist 20 durch 6 teilbar?', answer: 'nein', tip: 'Teile 20 durch 6 — bleibt ein Rest?' },

      { level: 'mittel', q: 'Berechne: 1+2+3+4+5', answer: '15', tip: 'Addiere der Reihe nach.' },
      { level: 'mittel', q: 'Vereinfache: n + (n+1) + (n+2)', answer: '3n+3', tip: 'Fasse alle n zusammen, dann die Zahlen.' },
      { level: 'mittel', q: 'Klammere aus: 3n+3', answer: '3(n+1)', tip: 'ggT von 3 und 3 vor die Klammer ziehen.' },

      { level: 'schwer', q: 'Vereinfache: n + (n+1) + (n+2) + (n+3) + (n+4)', answer: '5n+10', tip: 'Fasse alle n zusammen, dann alle Zahlen.' },
      { level: 'schwer', q: 'Klammere aus: 5n+10. Ist das Ergebnis für jedes n durch 5 teilbar?', answer: 'ja', tip: 'Klammere 5 aus: 5(n+2) — ist das immer durch 5 teilbar?' },

      { level: 'kanti', q: 'Vereinfache: n + (n+1) + (n+2) + (n+3) + (n+4) + (n+5) + (n+6)', answer: '7n+21', tip: 'Addiere alle n (7 Stück) und alle Zahlen von 0 bis 6 — genau wie im Original.' },
      { level: 'kanti', q: 'Finde ein Gegenbeispiel: Berechne 1+2+3+4+5+6.', answer: '21', tip: 'Einfach ausrechnen — ist das Ergebnis durch 6 teilbar?' },
    ],

  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_WAHR_5',

    verified: true,

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=5',

    topic: 'Wahrscheinlichkeit',

    questionText: `Aufgabe 5: Urne mit Kugeln

Eine Urne enthält 2 rote, 3 schwarze und 5 gelbe Kugeln. Nacheinander werden zwei Kugeln MIT Zurücklegen gezogen.

a) Zeichne einen Wahrscheinlichkeitsbaum und beschrifte alle Äste.

Bestimme die Wahrscheinlichkeit für:

b) Beide Kugeln sind gelb.

c) Beide Kugeln sind gleichfarbig.

d) Die erste Kugel ist rot und die zweite ist schwarz.

e) Die zweite Kugel ist rot oder schwarz.`,

    options: [

      { label: 'b) 1/4 | c) 19/50 | d) 3/50 | e) 1/2', correct: true },

      { label: 'b) 1/5 | c) 2/5 | d) 1/25 | e) 2/5', correct: false },

      { label: 'b) 1/4 | c) 1/2 | d) 3/50 | e) 3/5', correct: false },

    ],

    teile: [
      { letter: 'b', options: [
        { label: '1/4', correct: true },
        { label: '1/5', correct: false },
        { label: '1', correct: false },
      ] },
      { letter: 'c', options: [
        { label: '19/50', correct: true },
        { label: '2/5', correct: false },
        { label: '1/2', correct: false },
      ] },
      { letter: 'd', options: [
        { label: '3/50', correct: true },
        { label: '1/25', correct: false },
        { label: '1/15', correct: false },
      ] },
      { letter: 'e', options: [
        { label: '1/2', correct: true },
        { label: '2/5', correct: false },
        { label: '3/5', correct: false },
      ] },
    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Mit Zurücklegen: Nach dem ersten Zug wird die Kugel zurückgelegt — die Wahrscheinlichkeiten bleiben beim zweiten Zug also gleich.
🔑 UND-Regel (Pfadregel): Wahrscheinlichkeiten entlang eines Pfades werden multipliziert.
🔑 ODER-Regel: Wahrscheinlichkeiten sich ausschliessender Ereignisse werden addiert.`,

        },

        {

          title: 'Grundwahrscheinlichkeiten',

          content: `Total = 10 Kugeln

P(R) = 2/10 = 1/5

P(S) = 3/10

P(G) = 5/10 = 1/2`,

        },

        {

          title: 'b) Beide gelb',

          content: `P(G,G) = 1/2 · 1/2 = 1/4`,

        },

        {

          title: 'c) Beide gleichfarbig',

          content: `P(R,R) = 1/5 · 1/5 = 1/25

P(S,S) = 3/10 · 3/10 = 9/100

P(G,G) = 1/2 · 1/2 = 1/4 = 25/100

Total = 4/100 + 9/100 + 25/100 = 38/100 = 19/50`,

        },

        {

          title: 'd) Erste rot, zweite schwarz',

          content: `P(R,S) = 1/5 · 3/10 = 3/50`,

        },

        {

          title: 'e) Zweite rot oder schwarz',

          content: `P(R oder S) = 1/5 + 3/10 = 1/2`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Mit Zurücklegen = gleiche Wahrscheinlichkeiten im 2. Zug.

2️⃣ UND = multiplizieren.

3️⃣ ODER = addieren.`,

    },

    // ── ÜBUNGEN: aufbauend zu Grundwahrscheinlichkeiten, UND- und ODER-Regel (mit Zurücklegen).
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Eine Urne hat 4 rote und 6 blaue Kugeln. Wie gross ist P(rot)?', answer: '2/5', tip: 'Anzahl rote Kugeln durch Gesamtzahl, dann kürzen.' },
      { level: 'einfach', q: 'Mit Zurücklegen werden zwei Kugeln gezogen. P(rot)=1/2 beim ersten Zug. Wie gross ist P(rot) beim zweiten Zug?', answer: '1/2', tip: 'Mit Zurücklegen ändert sich die Wahrscheinlichkeit nicht.' },
      { level: 'einfach', q: 'Berechne: 1/2 · 1/2', answer: '1/4', tip: 'Zähler mal Zähler, Nenner mal Nenner.' },

      { level: 'mittel', q: 'Eine Urne hat 3 rote und 7 gelbe Kugeln (10 total, mit Zurücklegen). Wie gross ist P(beide gelb)?', answer: '49/100', tip: 'P(gelb) beim ersten Zug hoch 2.' },
      { level: 'mittel', q: 'Gleiche Urne (3 rot, 7 gelb, mit Zurücklegen): Wie gross ist P(erste rot, zweite gelb)?', answer: '21/100', tip: 'P(rot) · P(gelb).' },
      { level: 'mittel', q: 'Gleiche Urne: Wie gross ist P(beide gleichfarbig)?', answer: '29/50', tip: 'P(rot,rot) + P(gelb,gelb) addieren.' },

      { level: 'schwer', q: 'Eine Urne hat 2 rote, 3 grüne, 5 blaue Kugeln (mit Zurücklegen). Wie gross ist P(beide blau)?', answer: '1/4', tip: 'P(blau) = 5/10 = 1/2, dann quadrieren.' },
      { level: 'schwer', q: 'Gleiche Urne: Wie gross ist P(zweite Kugel ist rot oder grün)?', answer: '1/2', tip: 'P(rot) + P(grün), da sich die Ereignisse ausschliessen.' },

      { level: 'kanti', q: 'Wie im Original: Urne mit 2 rot, 3 schwarz, 5 gelb (mit Zurücklegen). Wie gross ist P(beide gelb)?', answer: '1/4', tip: 'P(gelb) = 5/10 = 1/2, dann quadrieren — genau wie im Original b).' },
      { level: 'kanti', q: 'Wie im Original: Gleiche Urne. Wie gross ist P(erste rot, zweite schwarz)?', answer: '3/50', tip: 'P(rot) · P(schwarz) = 1/5 · 3/10 — genau wie im Original d).' },
    ],

  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {

    id: 'M3_2018_OTR_PYRAMIDE_6',

    verified: true,

    year: 2018,

    subject: 'Mathe',

    exam: 'Mathe ohne TR',

    group: 'Alte Prüfungen',

    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106448/AP18%20GMS3%20M1_oTR.pdf?fp=1#page=7',

    figureUrl: '/figuren/2018_pyramide6.png',

    figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2018',

    topic: 'Körper & Netze',

    questionText: `Aufgabe 6: Pyramide

Die Grundfläche einer Pyramide ist ein Quadrat mit Flächeninhalt 16 cm².

Die Pyramidenspitze befindet sich 3 cm senkrecht über einer Quadratecke.

a) Ergänze das Netz der Pyramide und trage alle rechten Winkel ein.

b) Beschrifte alle Seiten des Netzes mit ihrer Länge.

c) Berechne den Oberflächeninhalt dieser Pyramide.`,

    options: [

      { label: 'O = 48 cm²', correct: true },

      { label: 'O ≈ 46.3 cm²', correct: false },

      { label: 'O = 52 cm²', correct: false },

    ],

    solution: {

      intro: '',

      steps: [

        {

          title: '📖 Begriffe',

          content: `📐 Die Pyramidenspitze steht senkrecht über einer Quadratecke A — nicht über der Mitte! Dadurch ist diese Pyramide "schief": die vier Seitendreiecke sind NICHT alle gleich geformt.
🔑 An der Ecke A selbst (wo die Spitze direkt darüber steht) treffen die senkrechte Höhe (3 cm) und die waagrechte Grundkante (4 cm) im rechten Winkel aufeinander — das ergibt zwei rechtwinklige Dreiecke mit Katheten 3 und 4.
🔑 An den beiden Nachbarecken (B und D) steht die bereits gefundene Kante (5 cm) ihrerseits rechtwinklig auf der Grundkante (4 cm) — auch das sind rechtwinklige Dreiecke, aber mit Katheten 5 und 4 (nicht gleichschenklig!).`,

        },

        {

          title: 'Grundseite bestimmen',

          content: `Quadratfläche = 16 cm²

Seitenlänge = √16 = 4 cm`,

        },

        {

          title: 'Schräge Kanten mit Pythagoras',

          content: `An der Ecke A (unter der Spitze) bilden die Höhe (3 cm) und die Grundkante (4 cm) ein rechtwinkliges Dreieck:
√(3² + 4²) = √25 = 5 cm

Das ist die Länge der beiden Kanten von der Spitze zu den Nachbarecken B und D.

Fehlende Seiten im Netz: 5 cm (zweimal, zu B und zu D) und zusätzlich die weit entfernte Kante zur gegenüberliegenden Ecke C (siehe nächster Schritt).`,

        },

        {

          title: 'Oberfläche berechnen — zwei Dreieckspaare',

          content: `Grundfläche = 16 cm²

Paar 1 — an der Ecke A (rechter Winkel dort, Katheten 3 und 4):
2 · (4·3)/2 = 12 cm²

Paar 2 — an den Ecken B und D (rechter Winkel dort, Katheten 5 und 4 — NICHT gleichschenklig!):
Die Kante von der Spitze zur Ecke B steht rechtwinklig auf der Grundkante BC (genauso bei D und DC), weil die Höhe BF ja über dem rechten Winkel bei A/B aufgebaut ist.
2 · (5·4)/2 = 20 cm²

Total:
16 + 12 + 20 = 48 cm²

✅ Ergebnis: O = 48 cm²`,

        },

        {

          title: '📄 Offizielle Schullösung',

          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,

          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106602/AP18%20GMS3%20M1_oTR%20L%C3%B6sungen.pdf?fp=1',

        },

      ],

      tip: `🍳 Kochrezept:

1️⃣ Aus der Grundfläche die Seitenlänge holen.

2️⃣ Mit Pythagoras die Kante von der Spitze zu den direkten Nachbarecken berechnen (Katheten = Höhe und Grundkante).

3️⃣ Achtung: Die beiden fernen Seitendreiecke sind rechtwinklig (Katheten = diese Kante und die Grundkante), NICHT gleichschenklig!

4️⃣ Alle vier Dreiecksflächen plus die quadratische Grundfläche addieren.`,

    },

    // ── ÜBUNGEN: aufbauend zur schiefen Pyramide (Spitze über einer Ecke) —
    //    Grundfläche, Pythagoras für die Kanten, und die beiden unterschiedlichen
    //    Dreieckspaare (rechtwinklig an A, rechtwinklig an B/D).
    //    Tipps sind high-level: nur Konzept, keine Zahlen, keine Lösung.
    practice: [
      { level: 'einfach', q: 'Eine quadratische Grundfläche hat den Flächeninhalt 25 cm². Wie lang ist eine Seite?', answer: '5', tip: 'Seite = √Flächeninhalt.' },
      { level: 'einfach', q: 'Berechne mit Pythagoras die Hypotenuse eines rechtwinkligen Dreiecks mit Katheten 3 und 4.', answer: '5', tip: '√(3²+4²).' },
      { level: 'einfach', q: 'Berechne die Fläche eines rechtwinkligen Dreiecks mit Katheten 3 und 4.', answer: '6', tip: 'Fläche = 1/2 · Kathete1 · Kathete2.' },

      { level: 'mittel', q: 'Eine Pyramidenspitze steht 6 cm senkrecht über einer Ecke eines Quadrats mit Seite 8 cm. Wie lang ist die Kante von der Spitze zu einer direkten Nachbarecke?', answer: '10', tip: '√(Höhe² + Seitenlänge²), wie bei den Katheten 3 und 4.' },
      { level: 'mittel', q: 'Berechne die Fläche eines rechtwinkligen Dreiecks mit Katheten 5 und 4.', answer: '10', tip: 'Fläche = 1/2 · Kathete1 · Kathete2.' },
      { level: 'mittel', q: 'Ein Quadrat mit Seite 4 cm bildet die Grundfläche einer Pyramide. Wie gross ist die Grundfläche?', answer: '16', tip: 'Seite · Seite.' },

      { level: 'schwer', q: 'Bei der Original-Pyramide (Grundseite 4, Höhe 3 über einer Ecke): Wie viele der vier Seitendreiecke sind rechtwinklig mit Katheten 3 und 4 (statt 5 und 4)?', answer: '2', tip: 'Nur die beiden Dreiecke an der Ecke direkt unter der Spitze.' },
      { level: 'schwer', q: 'Addiere die beiden Dreieckspaare: 2·(4·3)/2 + 2·(5·4)/2. Was ergibt das (ohne Grundfläche)?', answer: '32', tip: '12 + 20.' },

      { level: 'kanti', q: 'Wie im Original: Grundfläche 16 cm², Spitze 3 cm über einer Ecke. Wie gross ist die Gesamtoberfläche?', answer: '48', tip: 'Grundfläche (16) + zwei Dreiecke mit Katheten 3,4 (12) + zwei Dreiecke mit Katheten 5,4 (20) = 48.' },
      { level: 'kanti', q: 'Warum sind die beiden fernen Seitendreiecke NICHT gleichschenklig mit Seiten 5/5/4, sondern rechtwinklig mit Katheten 5/4?', answer: 'weil die 5cm-Kante rechtwinklig auf der Grundkante steht', tip: 'Der rechte Winkel entsteht, weil die Höhe der Pyramide senkrecht über der Ecke A steht — das pflanzt sich als rechter Winkel zu den Nachbarecken fort.' },
    ],

  },

];


