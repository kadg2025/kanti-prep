
import { frac } from '../../../mathFormat';

// Modus B — "Neue Prüfung" #1, im Stil der Originalprüfungen aufgebaut
// (gleiche Themenreihenfolge/Länge/Punkte wie in pruefungsmuster.md
// beschrieben). Bewusst OHNE figurenabhängige Themen (Geometrie, Körper
// & Netze, Statistik-Diagramme) gewählt, damit keine neuen Figuren per
// Python/matplotlib erzeugt werden mussten — siehe pruefliste_neu.md für
// die Begründung und die zweifache unabhängige Lösung jeder Teilaufgabe.
// isNew: true, KEIN verified.
export const pruefungNeu1 = {
  year: 'neu-1',
  label: 'Neu im Kanti-Stil #1',
  isNew: true,
  aufgaben: [
    {
      nr: 1,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 1: Term berechnen\nGegeben ist der Term T = 2a²b − 3ab. Berechne T für:`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) a = 3, b = 2`, points: 3,
          options: [
            { label: '18', correct: true }, { label: '−18', correct: false },
            { label: '36', correct: false }, { label: '24', correct: false },
          ], solution: `2·3²·2 − 3·3·2 = 36 − 18 = 18` },
        { letter: 'b', text: `b) a = −1, b = 4`, points: 3,
          options: [
            { label: '20', correct: true }, { label: '−20', correct: false },
            { label: '4', correct: false }, { label: '28', correct: false },
          ], solution: `2·(−1)²·4 − 3·(−1)·4 = 8 + 12 = 20` },
        { letter: 'c', text: `c) a = ${frac('1', '2')}, b = 2`, points: 3,
          options: [
            { label: '−2', correct: true }, { label: '2', correct: false },
            { label: '−1', correct: false }, { label: '0', correct: false },
          ], solution: `2·(1/4)·2 − 3·(1/2)·2 = 1 − 3 = −2` },
      ],
    },
    {
      nr: 2,
      topic: 'Gleichungen',
      intro: `Aufgabe 2: Gleichungen lösen`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) 3x − 7 = 2x + 5`, points: 3,
          options: [
            { label: 'x = 12', correct: true }, { label: 'x = −12', correct: false },
            { label: 'x = 2', correct: false }, { label: 'x = −2', correct: false },
          ], solution: `3x−2x=5+7 → x=12` },
        { letter: 'b', text: `b) ${frac('x + 2', '3')} = ${frac('2x − 1', '5')}`, points: 5,
          options: [
            { label: 'x = 13', correct: true }, { label: 'x = −13', correct: false },
            { label: 'x = 7/11', correct: false }, { label: 'x = 1', correct: false },
          ], solution: `5(x+2)=3(2x−1) → 5x+10=6x−3 → x=13` },
      ],
    },
    {
      nr: 3,
      topic: 'Proportionalität',
      intro: `Aufgabe 3: Sachaufgaben`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) 4 Arbeiter brauchen 9 Tage, um eine Mauer zu bauen. Wie lange brauchen 6 Arbeiter (gleiches Tempo)?`, points: 3,
          options: [
            { label: '6 Tage', correct: true }, { label: '13.5 Tage', correct: false },
            { label: '54 Tage', correct: false }, { label: '9 Tage', correct: false },
          ], solution: `4·9=36 Arbeiter-Tage; 36÷6=6 Tage` },
        { letter: 'b', text: `b) Ein Auto fährt 180 km in 2 Stunden. Wie weit kommt es in 3.5 Stunden bei gleichem Tempo?`, points: 5,
          options: [
            { label: '315 km', correct: true }, { label: '360 km', correct: false },
            { label: '90 km', correct: false }, { label: '630 km', correct: false },
          ], solution: `180÷2=90 km/h; 90·3.5=315 km` },
      ],
    },
    {
      nr: 4,
      topic: 'Prozent & Zins',
      intro: `Aufgabe 4: Prozent und Zins`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Ein Artikel kostet 80 Fr. und wird um 15% reduziert. Wie viel kostet er jetzt?`, points: 3,
          options: [
            { label: '68 Fr.', correct: true }, { label: '12 Fr.', correct: false },
            { label: '92 Fr.', correct: false }, { label: '65 Fr.', correct: false },
          ], solution: `80 · 0.85 = 68 Fr.` },
        { letter: 'b', text: `b) Ein Kapital von 2000 Fr. wird zu 3% einfachem Jahreszins für 4 Jahre angelegt. Wie viel Zins ergibt das total?`, points: 5,
          options: [
            { label: '240 Fr.', correct: true }, { label: '60 Fr.', correct: false },
            { label: '2240 Fr.', correct: false }, { label: '180 Fr.', correct: false },
          ], solution: `2000 · 0.03 · 4 = 240 Fr.` },
      ],
    },
    {
      nr: 5,
      topic: 'Wahrscheinlichkeit',
      intro: `Aufgabe 5: Urne\nEine Urne enthält 4 rote und 2 blaue Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen.`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Wie gross ist die Wahrscheinlichkeit, dass beide Kugeln rot sind?`, points: 4,
          options: [
            { label: '2/5', correct: true }, { label: '1/3', correct: false },
            { label: '4/9', correct: false }, { label: '1/2', correct: false },
          ], solution: `P = 4/6 · 3/5 = 12/30 = 2/5` },
        { letter: 'b', text: `b) Wie gross ist die Wahrscheinlichkeit, dass die beiden Kugeln verschiedene Farben haben?`, points: 5,
          options: [
            { label: '8/15', correct: true }, { label: '4/9', correct: false },
            { label: '1/2', correct: false }, { label: '7/15', correct: false },
          ], solution: `P(R,B)+P(B,R) = 4/6·2/5 + 2/6·4/5 = 8/30+8/30 = 16/30 = 8/15` },
      ],
    },
    {
      nr: 6,
      topic: 'Zahlen & Teilbarkeit',
      intro: `Aufgabe 6: ggT, kgV und eine Zahlenrätsel-Gleichung`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Bestimme ggT und kgV von 84 und 126.`, points: 4,
          options: [
            { label: 'ggT=42, kgV=252', correct: true }, { label: 'ggT=21, kgV=252', correct: false },
            { label: 'ggT=42, kgV=504', correct: false }, { label: 'ggT=7, kgV=252', correct: false },
          ], solution: `84=2²·3·7, 126=2·3²·7 → ggT=2·3·7=42, kgV=2²·3²·7=252` },
        { letter: 'b', text: `b) Welche Zahl ergibt mit ihrem Dreifachen summiert 68?`, points: 4,
          options: [
            { label: '17', correct: true }, { label: '−17', correct: false },
            { label: '22.67', correct: false }, { label: '23', correct: false },
          ], solution: `x+3x=68 → 4x=68 → x=17` },
      ],
    },
  ],
};
