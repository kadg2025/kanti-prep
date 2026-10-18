
import { frac, sqrt } from '../../../mathFormat';

// Originalprüfung 2022, Modus A — Punkte exakt aus dem PDF übernommen
// (siehe pruefungsmuster.md). Inhalte basieren auf den bereits geprüften
// Antworten aus app/lib/gms3/mathe_otr/2022.js.
export const pruefung2022 = {
  year: 2022,
  aufgaben: [
    {
      nr: 1,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 1: Term berechnen\nBerechne den Wert des Terms ${frac('2x³', 'x² − 2')} für folgende Werte von x:`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2022_OTR_TERM_1',
      teile: [
        { letter: 'a', text: `a) x = 2`, points: 2,
          options: [
            { label: '8', correct: true }, { label: '4', correct: false },
            { label: '−8', correct: false }, { label: '2', correct: false },
          ], solution: `(2·2³)/(2²−2) = 16/2 = 8` },
        { letter: 'b', text: `b) x = 0`, points: 2,
          options: [
            { label: '0', correct: true }, { label: '−2', correct: false },
            { label: '2', correct: false }, { label: '1', correct: false },
          ], solution: `(2·0³)/(0²−2) = 0/(−2) = 0` },
        { letter: 'c', text: `c) x = −1`, points: 2,
          options: [
            { label: '2', correct: true }, { label: '−2', correct: false },
            { label: '1', correct: false }, { label: '−1', correct: false },
          ], solution: `(2·(−1)³)/((−1)²−2) = −2/−1 = 2` },
        { letter: 'd', text: `d) x = ${frac('1', '2')}`, points: 2,
          options: [
            { label: '−1/7', correct: true }, { label: '1/7', correct: false },
            { label: '−1/4', correct: false }, { label: '7', correct: false },
          ], solution: `(2·(1/2)³)/((1/2)²−2) = (1/4)/(−7/4) = −1/7` },
      ],
    },
    {
      nr: 2,
      topic: 'Gleichungen',
      intro: `Aufgabe 2: Gleichungen lösen\nLöse die folgenden Gleichungen nach x auf.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2022_OTR_GLEI_2',
      teile: [
        { letter: 'a', text: `a) x − 5 − (5 − x) = 0`, points: 3,
          options: [
            { label: 'x = 5', correct: true }, { label: 'x = −5', correct: false },
            { label: 'x = 0', correct: false }, { label: 'x = 10', correct: false },
          ], solution: `x−5−5+x=0 → 2x=10 → x=5` },
        { letter: 'b', text: `b) −3(x + 7) = 7(x − 3)`, points: 3,
          options: [
            { label: 'x = 0', correct: true }, { label: 'x = 3', correct: false },
            { label: 'x = −3', correct: false }, { label: 'x = 42', correct: false },
          ], solution: `−3x−21=7x−21 → 0=10x → x=0` },
        { letter: 'c', text: `c) ${frac('3', '4')}(x − 4) + ${frac('x', '2')} = 3(x + ${frac('1', '6')})`, points: 4,
          options: [
            { label: 'x = −2', correct: true }, { label: 'x = 2', correct: false },
            { label: 'x = −14', correct: false }, { label: 'x = 14/5', correct: false },
          ], solution: `(5/4)x−3=3x+1/2 → 5x−12=12x+2 → −14=7x → x=−2` },
      ],
    },
    {
      nr: 3,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 3: Terme vereinfachen`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2022_OTR_TERM_3',
      teile: [
        { letter: 'a', text: `a) ${frac('3p + 9q', 'p + 3q')} · ${frac('2p + 6q', '12')}`, points: 3,
          options: [
            { label: '1/2 p + 3/2 q', correct: true }, { label: '1/4 p + 3/4 q', correct: false },
            { label: '(p+3q)/6', correct: false }, { label: '3p + 9q', correct: false },
          ], solution: `= 3·(2(p+3q)/12) = 6(p+3q)/12 = (p+3q)/2 = 1/2 p + 3/2 q` },
        { letter: 'b', text: `b) ${frac('3', '5')} · ${sqrt(frac('a', '3'))} · ${frac('1', '4')} · ${sqrt(frac('4a', '3'))} · ${sqrt('49')}`, points: 3,
          options: [
            { label: '7a/10', correct: true }, { label: '7a/5', correct: false },
            { label: '7a/20', correct: false }, { label: '49a/60', correct: false },
          ], solution: `√49=7; √(a/3)·√(4a/3)=√(4a²/9)=2a/3 → 3/5·1/4·7·2a/3 = 7a/10` },
        { letter: 'c', text: `c) a¹² : a⁴ = aˣ`, points: 2,
          options: [
            { label: 'x = 8', correct: true }, { label: 'x = 3', correct: false },
            { label: 'x = 48', correct: false }, { label: 'x = 16', correct: false },
          ], solution: `a¹²:a⁴ = a⁽¹²⁻⁴⁾ = a⁸ → x=8` },
      ],
    },
    {
      nr: 4,
      topic: 'Proportionalität',
      intro: `Aufgabe 4: Sachaufgaben`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2022_OTR_TEXT_4',
      teile: [
        { letter: 'a', text: `a) Für 5 Tage kostet eine Klassenfahrt 250 Fr pro Person. Wie viel kostet sie pro Person für 7 Tage?`, points: 1,
          options: [
            { label: '350 Fr', correct: true }, { label: '300 Fr', correct: false },
            { label: '357 Fr', correct: false }, { label: '175 Fr', correct: false },
          ], solution: `250÷5=50 Fr/Tag; 7·50=350 Fr` },
        { letter: 'b', text: `b) Jörg muss 20-mal gehen, wenn er jedes Mal 6 Steine trägt. Wie oft muss er gehen, wenn er 8 Steine trägt?`, points: 1,
          options: [
            { label: '15-mal', correct: true }, { label: '16-mal', correct: false },
            { label: '24-mal', correct: false }, { label: '10-mal', correct: false },
          ], solution: `20·6=120 Steine total; 120÷8=15` },
        { letter: 'c', text: `c) Ein 120 m langes Seil wird so geteilt, dass ein Stück 2/3 der Länge des anderen ist. Wie lang ist das kürzere Stück?`, points: 3,
          options: [
            { label: '48 m', correct: true }, { label: '72 m', correct: false },
            { label: '40 m', correct: false }, { label: '80 m', correct: false },
          ], solution: `x+(2/3)x=120 → x=72 (längeres Stück); kürzeres = (2/3)·72 = 48 m` },
      ],
    },
    {
      nr: 5,
      topic: 'Prozent & Zins',
      intro: `Aufgabe 5: Weihnachtssocken\nEin Duo-Pack mit 2 Paar Socken kostet 3.80 Fr. Familie Meier möchte 7 Paar, Familie Bühler 9 Paar.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2022_OTR_PROZ_5',
      teile: [
        { letter: 'a', text: `a) Welchen Betrag muss Frau Meier für ihre Familie und für Familie Bühler bezahlen?`, points: 2,
          options: [
            { label: 'Meier: 13.30 Fr, Bühler: 17.10 Fr', correct: true },
            { label: 'Meier: 13.30 Fr, Bühler: 15.20 Fr', correct: false },
            { label: 'Meier: 14.00 Fr, Bühler: 17.10 Fr', correct: false },
            { label: 'Meier: 13.30 Fr, Bühler: 18.00 Fr', correct: false },
          ], solution: `1 Paar = 3.80÷2 = 1.90 Fr. Meier: 7·1.90=13.30 Fr. Bühler: 9·1.90=17.10 Fr.` },
        { letter: 'b', text: `b) Nach Weihnachten gibt es ein Fünferpack mit 5 Paar für 7.60 Fr. Wie viel Prozent billiger ist jetzt ein Paar Socken?`, points: 3,
          options: [
            { label: '20%', correct: true }, { label: '25%', correct: false },
            { label: '10%', correct: false }, { label: '38%', correct: false },
          ], solution: `Neu: 7.60÷5=1.52 Fr/Paar. Differenz 1.90−1.52=0.38. 0.38÷1.90=20%.` },
      ],
    },
    {
      nr: 6,
      topic: 'Geometrie',
      intro: `Aufgabe 6: Winkel bestimmen\nBestimme die Winkel α, β und γ. In der Figur sind Längen und Winkel nicht massstabsgetreu.`,
      figureUrl: '/figuren/2022_winkel6.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2022',
      linkedQuestionId: 'M1_2022_OTR_WINKEL_6',
      teile: [
        { letter: '', text: `Bestimme α, β und γ.`, points: 7,
          options: [
            { label: 'α = 67.5°, β = 45°, γ = 78.75°', correct: true },
            { label: 'α = 67.5°, β = 78.75°, γ = 45°', correct: false },
            { label: 'α = 45°, β = 67.5°, γ = 78.75°', correct: false },
            { label: 'α = 78.75°, β = 67.5°, γ = 45°', correct: false },
          ], solution: `Mit Nebenwinkel, Scheitelwinkel und Winkelsumme im Dreieck: α=67.5°, β=45°, γ=78.75°.` },
      ],
    },
    // Aufgabe 7 (Würfel mit Mustern) bewusst weggelassen: ohne die
    // offizielle Lösung lässt sich nicht mit Sicherheit bestimmen, welches
    // Muster auf welche Netz-Fläche gehört — eine MC-Antwort dafür wäre nur
    // geraten. Punkte-Total der Prüfung dadurch 7 Punkte niedriger als im
    // echten PDF (war 43, jetzt 36) — siehe pruefungsmuster.md.
  ],
};
