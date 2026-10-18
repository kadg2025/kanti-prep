
import { frac } from '../../../mathFormat';

// Originalprüfung 2025, Modus A. Punkte pro Teilaufgabe: im PDF steht nur
// EIN Gesamtwert pro Aufgabe — aufgeteilt nach der Regel aus
// pruefungsmuster.md (Gesamt ÷ Anzahl Teile, abgerundet, letzter Teil
// bekommt den Rest). Inhalte/Antworten aus app/lib/gms3/mathe_otr/2025.js
// (bereits geprüft). Teilaufgabe 4a (Baumdarstellung zeichnen) weggelassen,
// da rein zeichnerisch ohne MC-prüfbare Antwort — Aufgabe-4-Punkte dadurch
// 12→10.
export const pruefung2025 = {
  year: 2025,
  aufgaben: [
    {
      nr: 1,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 1: Terme multiplizieren\nMultipliziere die folgenden Terme mit 5a² und vereinfache danach so weit wie möglich.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2025_OTR_TERM_1',
      teile: [
        { letter: 'a', text: `a) 2b · 3ab³ (mit 5a² multiplizieren)`, points: 2,
          options: [
            { label: '30a³b⁴', correct: true }, { label: '6a³b⁴', correct: false },
            { label: '30ab⁴', correct: false }, { label: '30a²b⁴', correct: false },
          ], solution: `2b·3ab³=6ab⁴; 6ab⁴·5a²=30a³b⁴` },
        { letter: 'b', text: `b) (5a)² (mit 5a² multiplizieren)`, points: 2,
          options: [
            { label: '125a⁴', correct: true }, { label: '25a⁴', correct: false },
            { label: '625a⁴', correct: false }, { label: '125a²', correct: false },
          ], solution: `(5a)²=25a²; 25a²·5a²=125a⁴` },
        { letter: 'c', text: `c) 2b + 3ab³ (mit 5a² multiplizieren)`, points: 2,
          options: [
            { label: '10a²b + 15a³b³', correct: true }, { label: '10ab + 15a³b³', correct: false },
            { label: '10a²b + 15a²b³', correct: false }, { label: '2a²b + 3a³b³', correct: false },
          ], solution: `5a²·2b=10a²b; 5a²·3ab³=15a³b³` },
        { letter: 'd', text: `d) ${frac('2a', '5a³ + 10a²b')} (Zähler mit 5a² multiplizieren)`, points: 5,
          options: [
            { label: '2a/(a + 2b)', correct: true }, { label: '2/(a + 2b)', correct: false },
            { label: '2a/(5a + 2b)', correct: false }, { label: 'a/(a + 2b)', correct: false },
          ], solution: `2a·5a²=10a³; Nenner=5a²(a+2b); 10a³/(5a²(a+2b)) = 2a/(a+2b)` },
      ],
    },
    {
      nr: 2,
      topic: 'Gleichungen',
      intro: `Aufgabe 2: Löse folgende Gleichungen.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2025_OTR_GLEICH_2',
      teile: [
        { letter: 'a', text: `a) ${frac('2', '3')} – 7x = –2x + ${frac('7', '3')} – ${frac('10', '6')}`, points: 3,
          options: [
            { label: 'x = 0', correct: true }, { label: 'x = 1', correct: false },
            { label: 'x = −1', correct: false }, { label: 'x = 2', correct: false },
          ], solution: `7/3−10/6=2/3; 2/3−7x=−2x+2/3 → −5x=0 → x=0` },
        { letter: 'b', text: `b) 6 · (2 · (x + ${frac('1', '4')})) = 9 · (4x – 1)`, points: 4,
          options: [
            { label: 'x = 0.5', correct: true }, { label: 'x = 1', correct: false },
            { label: 'x = 1/12', correct: false }, { label: 'x = 2', correct: false },
          ], solution: `12x+3=36x−9 → 12=24x → x=0.5` },
      ],
    },
    {
      nr: 3,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 3: Verhältnisse und Terme vergleichen`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2025_OTR_VERHALTNIS_3',
      teile: [
        { letter: 'a', text: `a) Zerlege die Zahl 63 in zwei Summanden, die sich zueinander verhalten wie 3 : 4.`, points: 3,
          options: [
            { label: '27 und 36', correct: true }, { label: '21 und 42', correct: false },
            { label: '28 und 35', correct: false }, { label: '9 und 54', correct: false },
          ], solution: `63÷7=9; 3·9=27, 4·9=36` },
        { letter: 'b', text: `b) Welcher Term hat den grösseren Wert?\nTerm A: ${frac('25', '8')} : ${frac('31', '8')}\nTerm B: ${frac('13', '3')} : ${frac('31', '6')}`, points: 3,
          options: [
            { label: 'Term B ist grösser', correct: true }, { label: 'Term A ist grösser', correct: false },
            { label: 'Beide Terme sind gleich groß', correct: false }, { label: 'Keine Aussage möglich', correct: false },
          ], solution: `Term A=25/31, Term B=26/31. 26>25, also Term B grösser.` },
      ],
    },
    {
      nr: 4,
      topic: 'Wahrscheinlichkeit',
      intro: `Aufgabe 4: Urne mit Kugeln\nIn einer Urne liegen 3 rote und 2 schwarze Kugeln. Es werden drei Kugeln nacheinander mit Zurücklegen gezogen.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2025_OTR_URNE_4',
      teile: [
        { letter: 'b1', text: `b1) Wie gross ist die Wahrscheinlichkeit, dass drei rote Kugeln gezogen werden?`, points: 2,
          options: [
            { label: '27/125', correct: true }, { label: '9/25', correct: false },
            { label: '3/5', correct: false }, { label: '8/125', correct: false },
          ], solution: `(3/5)³ = 27/125` },
        { letter: 'b2', text: `b2) Wie gross ist die Wahrscheinlichkeit, dass genau zwei rote Kugeln dabei sind?`, points: 2,
          options: [
            { label: '54/125', correct: true }, { label: '27/125', correct: false },
            { label: '72/125', correct: false }, { label: '18/125', correct: false },
          ], solution: `3 · (3/5)²·(2/5) = 3·18/125 = 54/125` },
        { letter: 'b3', text: `b3) Wie gross ist die Wahrscheinlichkeit, dass lauter gleichfarbige Kugeln gezogen werden?`, points: 2,
          options: [
            { label: '7/25', correct: true }, { label: '27/125', correct: false },
            { label: '8/125', correct: false }, { label: '14/25', correct: false },
          ], solution: `P(RRR)+P(SSS) = 27/125+8/125 = 35/125 = 7/25` },
        { letter: 'c1', text: `c1) Kugeln pro Farbe nummeriert (rot: 1,2,3 — schwarz: 1,2), zweimal mit Zurücklegen gezogen. Wie gross ist die Wahrscheinlichkeit, dass die erste Kugel die Nummer 1 und die zweite die Nummer 3 trägt?`, points: 2,
          options: [
            { label: '2/25', correct: true }, { label: '1/25', correct: false },
            { label: '1/5', correct: false }, { label: '4/25', correct: false },
          ], solution: `P(Nr.1)=2/5, P(Nr.3)=1/5; 2/5·1/5 = 2/25` },
        { letter: 'c2', text: `c2) Wie gross ist die Wahrscheinlichkeit, dass die Summe der beiden gezogenen Kugeln fünf beträgt?`, points: 2,
          options: [
            { label: '4/25', correct: true }, { label: '5/25', correct: false },
            { label: '2/5', correct: false }, { label: '2/25', correct: false },
          ], solution: `Nur (2,3) und (3,2) ergeben 5: je 2 Kugel-Paare von 25 → 4/25` },
      ],
    },
    {
      nr: 5,
      topic: 'Prozent & Zins',
      intro: `Aufgabe 5: Getreideanbau`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2025_OTR_ACKER_5',
      teile: [
        { letter: 'a', text: `a) Bauer Josten bewirtschaftet 25 ha. Er baut auf 40% der Fläche Gerste, auf 25% Weizen und auf der restlichen Fläche Mais an. Wie gross sind die drei Flächen?`, points: 3,
          options: [
            { label: 'Gerste 10 ha, Weizen 6.25 ha, Mais 8.75 ha', correct: true },
            { label: 'Gerste 8 ha, Weizen 5 ha, Mais 12 ha', correct: false },
            { label: 'Gerste 10 ha, Weizen 5 ha, Mais 10 ha', correct: false },
            { label: 'Gerste 12.5 ha, Weizen 6.25 ha, Mais 6.25 ha', correct: false },
          ], solution: `0.4·25=10; 0.25·25=6.25; Rest 35%: 0.35·25=8.75` },
        { letter: 'b', text: `b) Der Ertrag an Mais ist von 300 Tonnen auf 360 Tonnen gestiegen. Berechne den prozentualen Ertragszuwachs.`, points: 3,
          options: [
            { label: '20%', correct: true }, { label: '16.7%', correct: false },
            { label: '60%', correct: false }, { label: '12%', correct: false },
          ], solution: `Zuwachs 60; 60/300 = 20%` },
        { letter: 'c', text: `c) Der Ertrag von Weizen ist um 30% auf 105 Tonnen gefallen. Berechne den Ertrag im Vorjahr.`, points: 3,
          options: [
            { label: '150 Tonnen', correct: true }, { label: '135 Tonnen', correct: false },
            { label: '75 Tonnen', correct: false }, { label: '136.5 Tonnen', correct: false },
          ], solution: `0.7·x=105 → x=150` },
      ],
    },
    {
      nr: 6,
      topic: 'Geometrie',
      intro: `Aufgabe 6: Flächen\nDas grüne Sechseck A und das rote Trapez B besitzen den gleichen Flächeninhalt. Das Schaubild ist nicht massstabsgetreu.`,
      figureUrl: '/figuren/2025_flaeche6.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2025',
      linkedQuestionId: 'M1_2025_OTR_FLAECHE_6',
      teile: [
        { letter: '', text: `Berechne x.`, points: 5,
          options: [
            { label: 'x = 6', correct: true }, { label: 'x = 8', correct: false },
            { label: 'x = 5', correct: false }, { label: 'x = 9', correct: false },
          ], solution: `A=2x+6, B=4.5x−9. Gleichsetzen: 2x+6=4.5x−9 → x=6` },
      ],
    },
  ],
};
