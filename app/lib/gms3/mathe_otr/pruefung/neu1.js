
import { frac } from '../../../mathFormat';

// Modus B — "Neue Prüfung" #1, komplett neu geschrieben auf echtem
// Kanti-Niveau nach dem Vorbild von AP 2024 (mehrstufige Gleichungen mit
// Bruch-/Textaufgaben-Teil, Bruchterme mit Faktorisieren, Dreisatz-Varianten
// mit Störfall, Funktionen mit Graph, Geometrie mit Pythagoras am Halbkreis,
// ggT/kgV-Textaufgabe). Themenreihenfolge wie im Muster, Funktionen und
// Geometrie bewusst am Schluss. Figuren selbst mit Python/matplotlib erzeugt
// (public/figuren/neu1_*.png) — siehe pruefliste_neu.md für die zweifache
// unabhängige Lösung jeder Teilaufgabe. isNew: true, KEIN verified.
export const pruefungNeu1 = {
  year: 'neu-1',
  label: 'Neu im Kanti-Stil #1',
  isNew: true,
  aufgaben: [
    {
      nr: 1,
      topic: 'Gleichungen',
      intro: `Aufgabe 1: Gleichungen lösen`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) ${frac('9', '4')}x − ${frac('1', '4')}x = ${frac('1', '2')}x + 6`, points: 3,
          options: [
            { label: 'x = 4', correct: true }, { label: 'x = −4', correct: false },
            { label: 'x = 24/5', correct: false }, { label: 'x = 12', correct: false },
          ], solution: `9/4x−1/4x=2x; 2x=1/2x+6 → 3/2x=6 → x=4` },
        { letter: 'b', text: `b) ${frac('3', '2')}x + 1.5 = ${frac('11', '2')} − 3`, points: 3,
          options: [
            { label: 'x = 2/3', correct: true }, { label: 'x = −2/3', correct: false },
            { label: 'x = 1', correct: false }, { label: 'x = 3/2', correct: false },
          ], solution: `Rechts: 11/2−3=2.5; 3/2x+1.5=2.5 → 3/2x=1 → x=2/3` },
        { letter: 'c', text: `c) 2(5x + 3) = 5(2x + 3)`, points: 3,
          options: [
            { label: 'keine Lösung', correct: true }, { label: 'x = 0', correct: false },
            { label: 'x = 9', correct: false }, { label: 'unendlich viele Lösungen', correct: false },
          ], solution: `10x+6=10x+15 → 6=15 (falsch) → keine Lösung` },
        { letter: 'd', text: `d) Löse mit Hilfe einer Gleichung: Das Fünffache einer Zahl, vermindert um 12, ist gleich gross wie das Dreifache der Zahl, vermehrt um 8.`, points: 3,
          options: [
            { label: 'x = 10', correct: true }, { label: 'x = −10', correct: false },
            { label: 'x = 17', correct: false }, { label: 'x = 2', correct: false },
          ], solution: `5x−12=3x+8 → 2x=20 → x=10` },
      ],
    },
    {
      nr: 2,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 2: Terme vereinfachen\nVereinfache so weit wie möglich.`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) ${frac('28x³y²', '21xy')}`, points: 3,
          options: [
            { label: '4/3 x²y', correct: true }, { label: '4/3 xy²', correct: false },
            { label: '28/21 x²y', correct: false }, { label: '4/3 x³y²', correct: false },
          ], solution: `28/21=4/3; x³/x=x²; y²/y=y → 4/3 x²y` },
        { letter: 'b', text: `b) ${frac('6a²', '10 − 5a')} : ${frac('3a⁴', '2 − a')}`, points: 2,
          options: [
            { label: '2/(5a²)', correct: true }, { label: '2a²/5', correct: false },
            { label: '2/(15a²)', correct: false }, { label: '2/(5a⁴)', correct: false },
          ], solution: `10−5a=5(2−a); 6a²/(5(2−a)) · (2−a)/3a⁴ = 6a²/(15a⁴) = 2/(5a²)` },
        { letter: 'c', text: `c) ${frac('6a · 20b²(3 + 5y)', '(6 + 10y) · 15a² · 4b')}`, points: 3,
          options: [
            { label: 'b/a', correct: true }, { label: 'a/b', correct: false },
            { label: 'ab', correct: false }, { label: 'b/a²', correct: false },
          ], solution: `6+10y=2(3+5y), kürzt sich weg: (6a·20b²)/(2·15a²·4b) = 120ab²/120a²b = b/a` },
      ],
    },
    {
      nr: 3,
      topic: 'Proportionalität',
      intro: `Aufgabe 3: Sachaufgaben`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Ein Zug legt 240 km in 3 Stunden zurück. Wie weit kommt er in 5 Stunden bei gleicher Geschwindigkeit?`, points: 2,
          options: [
            { label: '400 km', correct: true }, { label: '80 km', correct: false },
            { label: '360 km', correct: false }, { label: '450 km', correct: false },
          ], solution: `240÷3=80 km/h; 80·5=400 km` },
        { letter: 'b', text: `b) 8 Maschinen füllen ein Lager in 15 Tagen. Wie lange brauchen 6 Maschinen (gleiche Leistung pro Maschine)?`, points: 3,
          options: [
            { label: '20 Tage', correct: true }, { label: '18 Tage', correct: false },
            { label: '12 Tage', correct: false }, { label: '24 Tage', correct: false },
          ], solution: `8·15=120 Maschinentage; 120÷6=20 Tage` },
        { letter: 'c', text: `c) Eine Lagerhalle kann von 5 Maschinen in 12 Tagen gefüllt werden. Nach 4 Tagen fällt eine Maschine aus (nur noch 4). Wie lange dauern die Arbeiten jetzt total?`, points: 3,
          options: [
            { label: '14 Tage', correct: true }, { label: '10 Tage', correct: false },
            { label: '15 Tage', correct: false }, { label: '12 Tage', correct: false },
          ], solution: `5·12=60 Maschinentage total. Nach 4 Tagen erledigt: 5·4=20. Rest=40. Mit 4 Maschinen: 40÷4=10 Tage. 4+10=14 Tage.` },
      ],
    },
    {
      nr: 4,
      topic: 'Funktionen',
      intro: `Aufgabe 4: Wasserbecken\nEin Wasserbecken wird gleichmässig entleert. Das Diagramm zeigt die Wassermenge y (Liter) in Abhängigkeit von der Zeit t (Minuten).`,
      figureUrl: '/figuren/neu1_funktion.png',
      figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Bestimme die Geradengleichung y = mt + b.`, points: 3,
          options: [
            { label: 'y = −50t + 800', correct: true }, { label: 'y = 50t + 800', correct: false },
            { label: 'y = −50t + 300', correct: false }, { label: 'y = −80t + 800', correct: false },
          ], solution: `m=(300−800)/10=−50; b=800 (Wert bei t=0) → y=−50t+800` },
        { letter: 'b', text: `b) Nach wie vielen Minuten ist das Becken leer?`, points: 2,
          options: [
            { label: 't = 16', correct: true }, { label: 't = 8', correct: false },
            { label: 't = 10', correct: false }, { label: 't = 20', correct: false },
          ], solution: `0=−50t+800 → 50t=800 → t=16` },
        { letter: 'c', text: `c) Wie viele Liter sind nach 6 Minuten noch im Becken?`, points: 3,
          options: [
            { label: '500 Liter', correct: true }, { label: '300 Liter', correct: false },
            { label: '550 Liter', correct: false }, { label: '450 Liter', correct: false },
          ], solution: `y=−50·6+800=500` },
      ],
    },
    {
      nr: 5,
      topic: 'Geometrie',
      intro: `Aufgabe 5: Halbkreis\nGegeben ist ein Halbkreis mit Mittelpunkt M auf der Strecke AD (Durchmesser). B und C liegen zwischen A und D. BF und CE stehen senkrecht auf AD (F, E auf dem Halbkreis). AB = 4, CD = 2, AD = 20.`,
      figureUrl: '/figuren/neu1_geometrie.png',
      figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Bestimme den Radius r des Halbkreises.`, points: 2,
          options: [
            { label: 'r = 10', correct: true }, { label: 'r = 20', correct: false },
            { label: 'r = 18', correct: false }, { label: 'r = 9', correct: false },
          ], solution: `r = AD ÷ 2 = 20 ÷ 2 = 10` },
        { letter: 'b', text: `b) Bestimme die Länge von BF.`, points: 3,
          options: [
            { label: 'BF = 8', correct: true }, { label: 'BF = 6', correct: false },
            { label: 'BF = 4', correct: false }, { label: 'BF = √84', correct: false },
          ], solution: `MB=r−AB=10−4=6; BF²=r²−MB²=100−36=64 → BF=8` },
        { letter: 'c', text: `c) Bestimme den Flächeninhalt des Vierecks BFEC.`, points: 4,
          options: [
            { label: '98', correct: true }, { label: '84', correct: false },
            { label: '112', correct: false }, { label: '70', correct: false },
          ], solution: `MC=r−CD=10−2=8; CE²=100−64=36→CE=6. BC=AD−AB−CD=14. Fläche=(BF+CE)/2·BC=(8+6)/2·14=98` },
      ],
    },
    {
      nr: 6,
      topic: 'Zahlen & Teilbarkeit',
      intro: `Aufgabe 6: Teilbarkeit`,
      figureUrl: null, figureCaption: null,
      teile: [
        { letter: 'a', text: `a) Drei Holzstäbe von 72 cm, 120 cm und 168 cm Länge sollen in gleich lange, möglichst grosse Stücke ohne Rest zersägt werden. Wie lang ist ein Stück, und wie viele Schnitte braucht es insgesamt (jeder Stab einzeln)?`, points: 4,
          options: [
            { label: '24 cm, 12 Schnitte', correct: true }, { label: '24 cm, 15 Schnitte', correct: false },
            { label: '12 cm, 12 Schnitte', correct: false }, { label: '24 cm, 9 Schnitte', correct: false },
          ], solution: `ggT(72,120,168)=24. Stücke: 3,5,7 → Schnitte: 2+4+6=12` },
        { letter: 'b', text: `b) Welches ist die kleinste natürliche Zahl, die gleichzeitig durch 12, 18 und 20 teilbar ist?`, points: 3,
          options: [
            { label: '180', correct: true }, { label: '90', correct: false },
            { label: '360', correct: false }, { label: '60', correct: false },
          ], solution: `kgV(12,18,20): 12=2²·3, 18=2·3², 20=2²·5 → kgV=2²·3²·5=180` },
      ],
    },
  ],
};
