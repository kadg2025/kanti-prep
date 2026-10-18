
import { frac } from '../../../mathFormat';

// Originalprüfung 2020, Modus A — Punkte aus dem PDF (siehe pruefungsmuster.md).
// Bei Aufgabe 4 war die Blank-Extraktion nicht ganz eindeutig (6 Werte für
// 5 Teile a–e); Punkte dort näherungsweise verteilt (Summe stimmt: 10).
export const pruefung2020 = {
  year: 2020,
  aufgaben: [
    {
      nr: 1,
      topic: 'Zahlen & Teilbarkeit',
      intro: `Aufgabe 1: ggT, kgV und eine Gleichung mit Parametern`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2020_OTR_GGT_1',
      teile: [
        { letter: 'a', text: `a) Bestimme ggT und kgV von 165 und 30.`, points: 2,
          options: [
            { label: 'ggT=15, kgV=330', correct: true }, { label: 'ggT=5, kgV=330', correct: false },
            { label: 'ggT=15, kgV=165', correct: false }, { label: 'ggT=30, kgV=330', correct: false },
          ], solution: `165=3·5·11, 30=2·3·5 → ggT=3·5=15, kgV=2·3·5·11=330` },
        { letter: 'b', text: `b) Bestimme ggT und kgV von p³·m·s⁴ und p²·m³·s².`, points: 2,
          options: [
            { label: 'ggT=p²ms², kgV=p³m³s⁴', correct: true }, { label: 'ggT=p³m³s⁴, kgV=p²ms²', correct: false },
            { label: 'ggT=p²m³s², kgV=p³ms⁴', correct: false }, { label: 'ggT=pms², kgV=p³m³s⁴', correct: false },
          ], solution: `ggT: kleinere Potenzen je Variable; kgV: grössere Potenzen je Variable.` },
        { letter: 'c-i', text: `c) Gegeben: ${frac('px + 5', 'q – 3')} = 2(qx – 4x + p). (i) Löse für p = q = 0.`, points: 2,
          options: [
            { label: 'x = 5/24', correct: true }, { label: 'x = −5/24', correct: false },
            { label: 'x = 3/8', correct: false }, { label: 'x = 5/8', correct: false },
          ], solution: `5/(–3) = –8x → x = 5/24` },
        { letter: 'c-ii', text: `(ii) Löse für p = –3 und q = 5.`, points: 3,
          options: [
            { label: 'x = 17/7', correct: true }, { label: 'x = −17/7', correct: false },
            { label: 'x = 7/17', correct: false }, { label: 'x = 28/5', correct: false },
          ], solution: `(–3x+5)/2 = 2x–6 → 17 = 7x → x = 17/7` },
      ],
    },
    {
      nr: 2,
      topic: 'Wahrscheinlichkeit',
      intro: `Aufgabe 2: Glücksbeutel\nIn einem Glücksbeutel sind 4 Kugeln: 1× N, 1× J, 2× A. Es werden ohne Zurücklegen alle 4 Kugeln gezogen.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2020_OTR_WAHR_2',
      teile: [
        { letter: 'a', text: `a) Notiere sämtliche möglichen "Wörter", die bei einer Ziehung entstehen können.`, points: 3,
          options: [
            { label: '12 Wörter', correct: true }, { label: '24 Wörter', correct: false },
            { label: '6 Wörter', correct: false }, { label: '4 Wörter', correct: false },
          ], solution: `4 Buchstaben, 2 davon gleich (A,A): 4!/2! = 12` },
        { letter: 'b', text: `b) Wie gross ist die Wahrscheinlichkeit, dass die vier Buchstaben in der Reihenfolge J-A-N-A gezogen werden?`, points: 1,
          options: [
            { label: '1/12', correct: true }, { label: '1/24', correct: false },
            { label: '1/6', correct: false }, { label: '1/4', correct: false },
          ], solution: `Genau 1 von 12 gleich wahrscheinlichen Wörtern → 1/12` },
        { letter: 'c', text: `c) Die Kugel mit J wird durch eine Kugel mit N ersetzt (nun: 2× N, 2× A). Wie viele Wörter können nun entstehen?`, points: 1,
          options: [
            { label: '6 Wörter', correct: true }, { label: '12 Wörter', correct: false },
            { label: '24 Wörter', correct: false }, { label: '3 Wörter', correct: false },
          ], solution: `4!/(2!·2!) = 6` },
        { letter: 'd', text: `d) Nun 3×A, 1×N im Beutel, 2 Kugeln ohne Zurücklegen gezogen. Michael gewinnt bei zwei A, Robin bei verschiedenen Buchstaben. Begründe, warum beide gleiche Gewinnchancen haben.`, points: 5,
          options: [
            { label: 'P(Michael) = P(Robin) = 1/2', correct: true },
            { label: 'P(Michael) = 1/4, P(Robin) = 3/4', correct: false },
            { label: 'P(Michael) = 2/3, P(Robin) = 1/3', correct: false },
            { label: 'P(Michael) = 1/3, P(Robin) = 2/3', correct: false },
          ], solution: `P(AA)=3/4·2/3=1/2; P(AN)+P(NA)=1/4+1/4=1/2 → beide 1/2` },
      ],
    },
    {
      nr: 3,
      topic: 'Geometrie',
      intro: `Aufgabe 3: Winkel bestimmen\nDie Figuren sind nicht massstabsgetreu.`,
      figureUrl: '/figuren/2020_winkel3a.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2020',
      linkedQuestionId: 'M1_2020_OTR_WINKEL_3a',
      teile: [
        { letter: 'a', text: `a) Bestimme die Winkel α, β und γ.`, points: 3,
          options: [
            { label: 'α = 78°, β = 51°, γ = 27°', correct: true },
            { label: 'α = 51°, β = 78°, γ = 27°', correct: false },
            { label: 'α = 78°, β = 27°, γ = 51°', correct: false },
            { label: 'α = 27°, β = 51°, γ = 78°', correct: false },
          ], solution: `Mit Winkelsumme, Scheitel-/Stufenwinkeln: α=78°, β=51°, γ=27°.` },
        { letter: 'b', text: `b) Bestimme den Winkel α.`, points: 5,
          figureUrl: '/figuren/2020_winkel3b.png',
          options: [
            { label: 'α = 42°', correct: true }, { label: 'α = 48°', correct: false },
            { label: 'α = 84°', correct: false }, { label: 'α = 96°', correct: false },
          ], solution: `Mit Hilfslinie (Parallele) und Winkelsumme im Dreieck: α=42°.` },
      ],
    },
    {
      nr: 4,
      topic: 'Funktionen',
      intro: `Aufgabe 4: Taxi-Tarife\nIm Koordinatensystem sind Taxi-Tarife von Hamburg und Paris eingezeichnet. In Hamburg: 2 Euro/km + 3.50 Euro Grundgebühr.`,
      figureUrl: '/figuren/2020_funk4.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2020',
      linkedQuestionId: 'M1_2020_OTR_FUNK_4a',
      teile: [
        { letter: 'a', text: `a) Welche Gerade (f oder g) gehört zu Hamburg?`, points: 1,
          options: [
            { label: 'Gerade f', correct: true }, { label: 'Gerade g', correct: false },
            { label: 'Keine der beiden', correct: false }, { label: 'Beide Geraden gleichzeitig', correct: false },
          ], solution: `y=2x+3.5 hat y-Achsenabschnitt 3.5 und Steigung 2 → Gerade f.` },
        { letter: 'b', text: `b) Notiere die Geradengleichung für den Hamburger Taxi-Tarif.`, points: 2,
          options: [
            { label: 'y = 2x + 3.5', correct: true }, { label: 'y = 3.5x + 2', correct: false },
            { label: 'y = 2x – 3.5', correct: false }, { label: 'y = 3.5x – 2', correct: false },
          ], solution: `m=Steigung=2, b=Grundgebühr=3.5 → y=2x+3.5` },
        { letter: 'c', text: `c) Ergänze die Wertetabelle (y=2x+3.5): x=8 → y=? sowie y=113.5 → x=?`, points: 2,
          options: [
            { label: 'x=8→y=19.5 | y=113.5→x=55', correct: true },
            { label: 'x=8→y=16 | y=113.5→x=55', correct: false },
            { label: 'x=8→y=19.5 | y=113.5→x=50', correct: false },
            { label: 'x=8→y=16 | y=113.5→x=50', correct: false },
          ], solution: `2·8+3.5=19.5; (113.5−3.5)/2=55` },
        { letter: 'd', text: `d) Die zweite Gerade zeigt den Taxi-Tarif in Paris. Wie hoch ist die Grundgebühr und der Preis pro km?`, points: 2,
          options: [
            { label: 'Grundgebühr = 7 Euro, 1 Euro/km', correct: true },
            { label: 'Grundgebühr = 3.5 Euro, 1 Euro/km', correct: false },
            { label: 'Grundgebühr = 7 Euro, 2 Euro/km', correct: false },
            { label: 'Grundgebühr = 1 Euro, 7 Euro/km', correct: false },
          ], solution: `Aus dem Graphen: y-Achsenabschnitt=7, Steigung=1 → y=x+7` },
        { letter: 'e', text: `e) Ab wie vielen Kilometern ist Paris günstiger als Hamburg?`, points: 3,
          options: [
            { label: 'Ab mehr als 3.5 km', correct: true }, { label: 'Ab mehr als 7 km', correct: false },
            { label: 'Hamburg ist immer günstiger', correct: false }, { label: 'Ab mehr als 7.5 km', correct: false },
          ], solution: `2x+3.5=x+7 → x=3.5 km (Schnittpunkt), danach ist Paris günstiger.` },
      ],
    },
    {
      nr: 5,
      topic: 'Zahlen & Teilbarkeit',
      intro: `Aufgabe 5: Gesuchte Zahl`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2020_OTR_GLEI_5',
      teile: [
        { letter: 'a', text: `a) Welche Zahl ergibt mit ihrem Doppelten summiert 45?`, points: 2,
          options: [
            { label: 'x = 15', correct: true }, { label: 'x = 22.5', correct: false },
            { label: 'x = 30', correct: false }, { label: 'x = 9', correct: false },
          ], solution: `x+2x=45 → 3x=45 → x=15` },
        { letter: 'b', text: `b) Welches ist die grösste Primzahl, die mit ihren drei nachfolgenden ganzen Zahlen summiert kleiner als 100 ist?`, points: 2,
          options: [
            { label: '23', correct: true }, { label: '19', correct: false },
            { label: '29', correct: false }, { label: '22', correct: false },
          ], solution: `4p+6<100 → p<23.5 → grösste Primzahl darunter: 23 (Probe: 23+24+25+26=98<100)` },
      ],
    },
    {
      nr: 6,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 6: Bruch vereinfachen\nFasse jeweils zu einem einzigen, möglichst einfachen Bruch zusammen.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2020_OTR_BRUCH_6',
      teile: [
        { letter: 'a', text: `a) ${frac('4', '3')} · ${frac('a', '2')} + ${frac('a', '2')} ÷ ${frac('3', '2')}`, points: 2,
          options: [
            { label: 'a', correct: true }, { label: '2a/3', correct: false },
            { label: '3a/2', correct: false }, { label: 'a/3', correct: false },
          ], solution: `2a/3 + a/3 = a` },
        { letter: 'b', text: `b) (${frac('1', '2')} · ${frac('b²', '2')} − ${frac('b²', '2')}) · ${frac('2', 'b')}`, points: 2,
          options: [
            { label: '−b/2', correct: true }, { label: 'b/2', correct: false },
            { label: '−b/4', correct: false }, { label: '−2b', correct: false },
          ], solution: `(b²/4−b²/2)=−b²/4; (−b²/4)·(2/b)=−b/2` },
        { letter: 'c', text: `c) ${frac('c', '2')} ÷ ${frac('c²', '4')} + ${frac('c', '2')} · 3 − c`, points: 3,
          options: [
            { label: '(4+c²)/(2c)', correct: true }, { label: '(4−c²)/(2c)', correct: false },
            { label: '(c²−4)/(2c)', correct: false }, { label: '(4+c²)/(4c)', correct: false },
          ], solution: `2/c + c/2 = 4/(2c)+c²/(2c) = (4+c²)/(2c)` },
      ],
    },
  ],
};
