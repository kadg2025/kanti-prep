
import { frac } from '../../../mathFormat';

// Modus B — "Neue Prüfung" #2, auf echtem Kanti-Niveau nach dem Vorbild von
// AP 2024 (wie neu1.js), aber mit anderen Kontexten und Zahlen: Schwimmbecken
// füllen (statt entleeren), Haus-Form aus Rechteck+Dreieck (statt Halbkreis),
// Gruppen/Busse für ggT/kgV (statt Sägen). Themenreihenfolge wie im Muster,
// Funktionen und Geometrie bewusst am Schluss. Figuren selbst mit Python/
// matplotlib erzeugt (public/figuren/neu2_*.png) — siehe pruefliste_neu.md
// für die zweifache unabhängige Lösung jeder Teilaufgabe. isNew: true,
// KEIN verified.
export const pruefungNeu2 = {
  year: 'neu-2',
  label: 'Neu im Kanti-Stil #2',
  isNew: true,
  aufgaben: [
    {
      nr: 1,
      topic: 'Gleichungen',
      intro: `Aufgabe 1: Gleichungen lösen`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) ${frac('7', '4')}x − ${frac('1', '4')}x = ${frac('1', '2')}x + 9`, points: 3,
          options: [
            { label: 'x = 9', correct: true }, { label: 'x = 3', correct: false },
            { label: 'x = 12', correct: false }, { label: 'x = −9', correct: false },
          ], solution: `7/4x−1/4x=3/2x; 3/2x=1/2x+9 → x=9` },
        { letter: 'b', text: `b) ${frac('4', '3')}x + 2 = ${frac('10', '3')} − 1`, points: 3,
          options: [
            { label: 'x = 1/4', correct: true }, { label: 'x = 1', correct: false },
            { label: 'x = 4', correct: false }, { label: 'x = −1/4', correct: false },
          ], solution: `Rechts: 10/3−1=7/3; 4/3x+2=7/3 → 4/3x=1/3 → x=1/4` },
        { letter: 'c', text: `c) 3(2x + 4) = 2(3x + 6)`, points: 3,
          options: [
            { label: 'unendlich viele Lösungen', correct: true }, { label: 'x = 0', correct: false },
            { label: 'keine Lösung', correct: false }, { label: 'x = 6', correct: false },
          ], solution: `6x+12=6x+12 → wahr für jedes x → unendlich viele Lösungen` },
        { letter: 'd', text: `d) Löse mit Hilfe einer Gleichung: Das Siebenfache einer Zahl, vermindert um 15, ist gleich gross wie das Dreifache der Zahl, vermehrt um 13.`, points: 3,
          options: [
            { label: 'x = 7', correct: true }, { label: 'x = 3', correct: false },
            { label: 'x = −7', correct: false }, { label: 'x = 4', correct: false },
          ], solution: `7x−15=3x+13 → 4x=28 → x=7` },
      ],
    },
    {
      nr: 2,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 2: Terme vereinfachen\nVereinfache so weit wie möglich.`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) ${frac('45x⁴y³', '18x²y')}`, points: 3,
          options: [
            { label: '5/2 x²y²', correct: true }, { label: '5/2 xy²', correct: false },
            { label: '5/4 x²y²', correct: false }, { label: '5/2 x²y', correct: false },
          ], solution: `45/18=5/2; x⁴/x²=x²; y³/y=y² → 5/2 x²y²` },
        { letter: 'b', text: `b) ${frac('9a²', '12 − 4a')} : ${frac('3a⁵', '3 − a')}`, points: 2,
          options: [
            { label: '3/(4a³)', correct: true }, { label: '3a³/4', correct: false },
            { label: '4/(3a³)', correct: false }, { label: '3/(4a⁵)', correct: false },
          ], solution: `12−4a=4(3−a); 9a²/(4(3−a)) · (3−a)/3a⁵ = 9a²/(12a⁵) = 3/(4a³)` },
        { letter: 'c', text: `c) ${frac('9a · 16b³(5 + 2y)', '(10 + 4y) · 27a² · 8b²')}`, points: 3,
          options: [
            { label: 'b/(3a)', correct: true }, { label: 'a/(3b)', correct: false },
            { label: '3b/a', correct: false }, { label: 'b/(9a)', correct: false },
          ], solution: `10+4y=2(5+2y), kürzt: (9a·16b³)/(2·27a²·8b²) = 144ab³/432a²b² = b/(3a)` },
      ],
    },
    {
      nr: 3,
      topic: 'Proportionalität',
      intro: `Aufgabe 3: Sachaufgaben`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Ein Drucker druckt 180 Seiten in 12 Minuten. Wie viele Seiten druckt er bei gleicher Geschwindigkeit in 20 Minuten?`, points: 2,
          options: [
            { label: '300 Seiten', correct: true }, { label: '270 Seiten', correct: false },
            { label: '280 Seiten', correct: false }, { label: '320 Seiten', correct: false },
          ], solution: `180÷12=15 Seiten/min; 15·20=300` },
        { letter: 'b', text: `b) 6 Maler streichen einen Zaun in 10 Tagen. Wie lange brauchen 4 Maler bei gleicher Leistung?`, points: 3,
          options: [
            { label: '15 Tage', correct: true }, { label: '12 Tage', correct: false },
            { label: '20 Tage', correct: false }, { label: '24 Tage', correct: false },
          ], solution: `6·10=60 Malertage; 60÷4=15` },
        { letter: 'c', text: `c) Eine Baustelle kann von 10 Arbeitern in 18 Tagen fertiggestellt werden. Nach 6 Tagen kommen 5 weitere Arbeiter dazu (neu 15 total). Wie lange dauert die Baustelle insgesamt?`, points: 3,
          options: [
            { label: '14 Tage', correct: true }, { label: '12 Tage', correct: false },
            { label: '18 Tage', correct: false }, { label: '16 Tage', correct: false },
          ], solution: `10·18=180 Arbeitertage. Nach 6 Tagen erledigt: 60. Rest=120. Mit 15: 120÷15=8. 6+8=14 Tage.` },
      ],
    },
    {
      nr: 4,
      topic: 'Funktionen',
      intro: `Aufgabe 4: Schwimmbecken\nEin Schwimmbecken wird gleichmässig gefüllt. Das Diagramm zeigt den Füllstand y (cm) in Abhängigkeit von der Zeit t (Minuten).`,
      figureUrl: '/figuren/neu2_funktion.png',
      figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Bestimme die Geradengleichung y = mt + b.`, points: 3,
          options: [
            { label: 'y = 10t + 20', correct: true }, { label: 'y = −10t + 20', correct: false },
            { label: 'y = 10t − 20', correct: false }, { label: 'y = 20t + 10', correct: false },
          ], solution: `m=(100−20)/8=10; b=20 (Wert bei t=0) → y=10t+20` },
        { letter: 'b', text: `b) Nach wie vielen Minuten ist der Füllstand 150 cm?`, points: 2,
          options: [
            { label: 't = 13', correct: true }, { label: 't = 10', correct: false },
            { label: 't = 15', correct: false }, { label: 't = 8', correct: false },
          ], solution: `10t+20=150 → 10t=130 → t=13` },
        { letter: 'c', text: `c) Wie hoch ist der Füllstand nach 5 Minuten?`, points: 3,
          options: [
            { label: '70 cm', correct: true }, { label: '60 cm', correct: false },
            { label: '75 cm', correct: false }, { label: '50 cm', correct: false },
          ], solution: `y=10·5+20=70` },
      ],
    },
    {
      nr: 5,
      topic: 'Geometrie',
      intro: `Aufgabe 5: Haus-Form\nDas Fünfeck ABCDE besteht aus einem Rechteck ABCD und einem gleichschenkligen Dreieck DCE als "Dach" darauf. AB=12, BC=5, die beiden Dachseiten DE und CE sind je 10 lang. Die Figur ist nicht massstabsgetreu.`,
      figureUrl: '/figuren/neu2_geometrie.png',
      figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Berechne die Höhe h des Dachdreiecks (von E senkrecht auf DC).`, points: 2,
          options: [
            { label: 'h = 8', correct: true }, { label: 'h = 6', correct: false },
            { label: 'h = 4', correct: false }, { label: 'h = 36', correct: false },
          ], solution: `Halbe Dachbreite=6; h²=10²−6²=64 → h=8` },
        { letter: 'b', text: `b) Berechne den gesamten Flächeninhalt des Fünfecks (Rechteck + Dachdreieck).`, points: 3,
          options: [
            { label: '108', correct: true }, { label: '96', correct: false },
            { label: '120', correct: false }, { label: '84', correct: false },
          ], solution: `Rechteck=12·5=60; Dreieck=12·8/2=48; total=60+48=108` },
        { letter: 'c', text: `c) Berechne den Umfang des ganzen Fünfecks.`, points: 4,
          options: [
            { label: '42', correct: true }, { label: '38', correct: false },
            { label: '44', correct: false }, { label: '32', correct: false },
          ], solution: `AB=12, BC=5, DA=5, DE=10, CE=10 → 12+5+5+10+10=42` },
      ],
    },
    {
      nr: 6,
      topic: 'Zahlen & Teilbarkeit',
      intro: `Aufgabe 6: Teilbarkeit`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) 36, 60 und 84 Kinder sollen je in gleich grosse, möglichst grosse Gruppen aufgeteilt werden, ohne dass jemand übrig bleibt. Wie gross ist eine Gruppe, und wie viele Gruppen gibt es insgesamt?`, points: 4,
          options: [
            { label: '12 Kinder, 15 Gruppen', correct: true }, { label: '12 Kinder, 12 Gruppen', correct: false },
            { label: '6 Kinder, 30 Gruppen', correct: false }, { label: '12 Kinder, 18 Gruppen', correct: false },
          ], solution: `ggT(36,60,84)=12. Gruppen: 3+5+7=15` },
        { letter: 'b', text: `b) Drei Busse fahren im Abstand von 8, 10 und 15 Minuten von derselben Haltestelle ab und starten gleichzeitig. Nach wie vielen Minuten fahren sie zum ersten Mal wieder gleichzeitig ab?`, points: 3,
          options: [
            { label: '120 Minuten', correct: true }, { label: '60 Minuten', correct: false },
            { label: '80 Minuten', correct: false }, { label: '150 Minuten', correct: false },
          ], solution: `kgV(8,10,15): 8=2³,10=2·5,15=3·5 → kgV=2³·3·5=120` },
      ],
    },
  ],
};
