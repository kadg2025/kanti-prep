
import { frac } from '../../../mathFormat';

// Modus B — "Neue Prüfung" #3, auf echtem Kanti-Niveau nach dem Vorbild von
// AP 2024 (wie neu1.js/neu2.js), mit wieder anderen Kontexten und Zahlen:
// Pumpe/Techniker-Baustelle, Heissluftballon-Aufstieg (statt Becken/Pool),
// rechtwinkliges Trapez mit Pythagoras (statt Halbkreis/Haus-Form), Kabel-
// Schnitte/Signallichter für ggT/kgV. Themenreihenfolge wie im Muster,
// Funktionen und Geometrie bewusst am Schluss. Figuren selbst mit Python/
// matplotlib erzeugt (public/figuren/neu3_*.png) — siehe pruefliste_neu.md
// für die zweifache unabhängige Lösung jeder Teilaufgabe. isNew: true,
// KEIN verified.
export const pruefungNeu3 = {
  year: 'neu-3',
  label: 'Neu im Kanti-Stil #3',
  isNew: true,
  aufgaben: [
    {
      nr: 1,
      topic: 'Gleichungen',
      intro: `Aufgabe 1: Gleichungen lösen`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) ${frac('5', '6')}x − ${frac('1', '6')}x = ${frac('1', '3')}x + 8`, points: 3,
          options: [
            { label: 'x = 24', correct: true }, { label: 'x = 12', correct: false },
            { label: 'x = 48', correct: false }, { label: 'x = 8', correct: false },
          ], solution: `5/6x−1/6x=2/3x; 2/3x=1/3x+8 → 1/3x=8 → x=24` },
        { letter: 'b', text: `b) ${frac('3', '2')}x + 2 = ${frac('15', '2')} − 4`, points: 3,
          options: [
            { label: 'x = 1', correct: true }, { label: 'x = −1', correct: false },
            { label: 'x = 3', correct: false }, { label: 'x = 2', correct: false },
          ], solution: `Rechts: 15/2−4=3.5; 3/2x+2=3.5 → 3/2x=1.5 → x=1` },
        { letter: 'c', text: `c) 5(2x − 1) = 3(3x + 4)`, points: 3,
          options: [
            { label: 'x = 17', correct: true }, { label: 'x = 15', correct: false },
            { label: 'x = 19', correct: false }, { label: 'x = 14', correct: false },
          ], solution: `10x−5=9x+12 → x=17` },
        { letter: 'd', text: `d) Löse mit Hilfe einer Gleichung: Das Achtfache einer Zahl, vermindert um 30, ist gleich gross wie das Fünffache der Zahl, vermehrt um 12.`, points: 3,
          options: [
            { label: 'x = 14', correct: true }, { label: 'x = 6', correct: false },
            { label: 'x = 18', correct: false }, { label: 'x = 10', correct: false },
          ], solution: `8x−30=5x+12 → 3x=42 → x=14` },
      ],
    },
    {
      nr: 2,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 2: Terme vereinfachen\nVereinfache so weit wie möglich.`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) ${frac('24a³b⁴', '16a²b')}`, points: 3,
          options: [
            { label: '3/2 ab³', correct: true }, { label: '3 ab³', correct: false },
            { label: '3/2 a²b³', correct: false }, { label: '3/2 ab⁴', correct: false },
          ], solution: `24/16=3/2; a³/a²=a; b⁴/b=b³ → 3/2 ab³` },
        { letter: 'b', text: `b) ${frac('10a⁴', '8 − 2a')} : ${frac('5a⁶', '4 − a')}`, points: 2,
          options: [
            { label: '1/a²', correct: true }, { label: 'a²', correct: false },
            { label: '1/a⁴', correct: false }, { label: '2/a²', correct: false },
          ], solution: `8−2a=2(4−a); 10a⁴/(2(4−a)) · (4−a)/5a⁶ = 10a⁴/(10a⁶) = 1/a²` },
        { letter: 'c', text: `c) ${frac('4a · 45b³(2 + 7y)', '(8 + 28y) · 20a² · 9b')}`, points: 3,
          options: [
            { label: 'b²/(4a)', correct: true }, { label: 'b/(4a)', correct: false },
            { label: '4b²/a', correct: false }, { label: 'b²/(2a)', correct: false },
          ], solution: `8+28y=4(2+7y), kürzt: (4a·45b³)/(4·20a²·9b) = 180ab³/720a²b = b²/(4a)` },
      ],
    },
    {
      nr: 3,
      topic: 'Proportionalität',
      intro: `Aufgabe 3: Sachaufgaben`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Eine Pumpe fördert 540 Liter in 9 Minuten. Wie viele Liter fördert sie bei gleicher Leistung in 14 Minuten?`, points: 2,
          options: [
            { label: '840 Liter', correct: true }, { label: '756 Liter', correct: false },
            { label: '800 Liter', correct: false }, { label: '900 Liter', correct: false },
          ], solution: `540÷9=60 L/min; 60·14=840` },
        { letter: 'b', text: `b) 5 Maler brauchen 12 Tage für ein Haus. Wie lange brauchen 3 Maler bei gleicher Leistung?`, points: 3,
          options: [
            { label: '20 Tage', correct: true }, { label: '15 Tage', correct: false },
            { label: '18 Tage', correct: false }, { label: '24 Tage', correct: false },
          ], solution: `5·12=60 Malertage; 60÷3=20` },
        { letter: 'c', text: `c) Ein Projekt kann von 6 Technikern in 20 Tagen abgeschlossen werden. Nach 5 Tagen werden 3 weitere Techniker eingesetzt (neu 9 total). Wie lange dauert das Projekt insgesamt?`, points: 3,
          options: [
            { label: '15 Tage', correct: true }, { label: '12 Tage', correct: false },
            { label: '18 Tage', correct: false }, { label: '20 Tage', correct: false },
          ], solution: `6·20=120 Technikertage. Nach 5 Tagen erledigt: 30. Rest=90. Mit 9: 90÷9=10. 5+10=15 Tage.` },
      ],
    },
    {
      nr: 4,
      topic: 'Funktionen',
      intro: `Aufgabe 4: Heissluftballon\nEin Heissluftballon steigt gleichmässig auf. Das Diagramm zeigt die Höhe y (Meter) in Abhängigkeit von der Zeit t (Minuten).`,
      figureUrl: '/figuren/neu3_funktion.png',
      figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Bestimme die Geradengleichung y = mt + b.`, points: 3,
          options: [
            { label: 'y = 30t + 50', correct: true }, { label: 'y = −30t + 50', correct: false },
            { label: 'y = 30t − 50', correct: false }, { label: 'y = 50t + 30', correct: false },
          ], solution: `m=(230−50)/6=30; b=50 (Wert bei t=0) → y=30t+50` },
        { letter: 'b', text: `b) In welcher Höhe ist der Ballon nach 10 Minuten?`, points: 2,
          options: [
            { label: '350 m', correct: true }, { label: '300 m', correct: false },
            { label: '380 m', correct: false }, { label: '320 m', correct: false },
          ], solution: `y=30·10+50=350` },
        { letter: 'c', text: `c) Nach wie vielen Minuten erreicht der Ballon eine Höhe von 500 m?`, points: 3,
          options: [
            { label: 't = 15', correct: true }, { label: 't = 12', correct: false },
            { label: 't = 18', correct: false }, { label: 't = 10', correct: false },
          ], solution: `30t+50=500 → 30t=450 → t=15` },
      ],
    },
    {
      nr: 5,
      topic: 'Geometrie',
      intro: `Aufgabe 5: Rechtwinkliges Trapez\nGegeben ist das rechtwinklige Trapez ABCD mit rechtem Winkel bei A. AB=15 (unten), DC=7 (oben, parallel zu AB), AD steht senkrecht auf AB. Die Seite BC ist 10 lang. Die Figur ist nicht massstabsgetreu.`,
      figureUrl: '/figuren/neu3_geometrie.png',
      figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Berechne die Höhe AD des Trapezes (Pythagoras).`, points: 2,
          options: [
            { label: 'AD = 6', correct: true }, { label: 'AD = 8', correct: false },
            { label: 'AD = 4', correct: false }, { label: 'AD = 64', correct: false },
          ], solution: `Horizontaler Versatz=15−7=8; AD²=10²−8²=36 → AD=6` },
        { letter: 'b', text: `b) Berechne den Flächeninhalt des Trapezes.`, points: 3,
          options: [
            { label: '66', correct: true }, { label: '60', correct: false },
            { label: '72', correct: false }, { label: '55', correct: false },
          ], solution: `F=(7+15)/2·6=66` },
        { letter: 'c', text: `c) Berechne den Umfang des Trapezes.`, points: 4,
          options: [
            { label: '38', correct: true }, { label: '32', correct: false },
            { label: '42', correct: false }, { label: '35', correct: false },
          ], solution: `AB=15, DC=7, AD=6, BC=10 → 15+7+6+10=38` },
      ],
    },
    {
      nr: 6,
      topic: 'Zahlen & Teilbarkeit',
      intro: `Aufgabe 6: Teilbarkeit`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Drei Kabel von 84 m, 126 m und 210 m Länge sollen in gleich lange, möglichst grosse Stücke ohne Rest geschnitten werden. Wie lang ist ein Stück, und wie viele Schnitte braucht es insgesamt (jedes Kabel einzeln)?`, points: 4,
          options: [
            { label: '42 m, 7 Schnitte', correct: true }, { label: '42 m, 10 Schnitte', correct: false },
            { label: '21 m, 7 Schnitte', correct: false }, { label: '42 m, 6 Schnitte', correct: false },
          ], solution: `ggT(84,126,210)=42. Stücke: 2,3,5 → Schnitte (2−1)+(3−1)+(5−1)=1+2+4=7` },
        { letter: 'b', text: `b) Drei Signallichter blinken im Abstand von 9, 12 und 15 Sekunden und starten gleichzeitig. Nach wie vielen Sekunden blinken sie zum ersten Mal wieder gleichzeitig?`, points: 3,
          options: [
            { label: '180 Sekunden', correct: true }, { label: '90 Sekunden', correct: false },
            { label: '135 Sekunden', correct: false }, { label: '60 Sekunden', correct: false },
          ], solution: `kgV(9,12,15): 9=3²,12=2²·3,15=3·5 → kgV=2²·3²·5=180` },
      ],
    },
  ],
};
