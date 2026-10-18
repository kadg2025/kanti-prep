
import { frac } from '../../../mathFormat';

// Originalprüfung 2024, Modus A. Punkte pro Teilaufgabe: im PDF steht nur
// EIN Gesamtwert pro Aufgabe — aufgeteilt nach der Regel aus
// pruefungsmuster.md (Gesamt ÷ Anzahl Teile, abgerundet, letzter Teil
// bekommt den Rest). Inhalte/Antworten aus app/lib/gms3/mathe_otr/2024.js
// (bereits geprüft). Teilaufgabe 3c (Graph einzeichnen) weggelassen, da rein
// zeichnerisch ohne MC-prüfbare Antwort — Aufgabe-3-Punkte dadurch 5→2.
export const pruefung2024 = {
  year: 2024,
  aufgaben: [
    {
      nr: 1,
      topic: 'Gleichungen',
      intro: `Aufgabe 1: Löse folgende Gleichungen.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2024_OTR_EQ_1',
      teile: [
        { letter: 'a', text: `a) ${frac('15', '7')}x – ${frac('3', '7')}x = ${frac('1', '2')}x + 3`, points: 3,
          options: [
            { label: 'x = 42/17', correct: true }, { label: 'x = 17/42', correct: false },
            { label: 'x = 6', correct: false }, { label: 'x = 3', correct: false },
          ], solution: `12/7x = 1/2x+3 → ×14: 24x=7x+42 → 17x=42 → x=42/17` },
        { letter: 'b', text: `b) ${frac('5', '2')}x + 0.5 = ${frac('15', '2')} – 7`, points: 3,
          options: [
            { label: 'x = 0', correct: true }, { label: 'x = 1', correct: false },
            { label: 'x = −1', correct: false }, { label: 'x = 2', correct: false },
          ], solution: `Rechts: 7.5−7=0.5; 5/2x+0.5=0.5 → 5/2x=0 → x=0` },
        { letter: 'c', text: `c) 3(4x + 5) = 4(3x + 5)`, points: 3,
          options: [
            { label: 'keine Lösung', correct: true }, { label: 'x = 0', correct: false },
            { label: 'x = 5', correct: false }, { label: 'unendlich viele Lösungen', correct: false },
          ], solution: `12x+15=12x+20 → 15=20 (falsch) → keine Lösung` },
        { letter: 'd', text: `d) Löse mit Hilfe einer Gleichung: Von welcher Zahl ist das Sechsfache verkleinert um 22 ebenso viel, wie das Vierfache vergrössert um 24?`, points: 3,
          options: [
            { label: 'x = 23', correct: true }, { label: 'x = 11', correct: false },
            { label: 'x = −23', correct: false }, { label: 'x = 17', correct: false },
          ], solution: `6x−22=4x+24 → 2x=46 → x=23` },
      ],
    },
    {
      nr: 2,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 2: Terme vereinfachen\nVereinfache so weit wie möglich.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2024_OTR_TERM_2',
      teile: [
        { letter: 'a', text: `a) ${frac('36x³y²z', '15x²z')}`, points: 2,
          options: [
            { label: '12xy²/5', correct: true }, { label: '12xy/5', correct: false },
            { label: '36xy²/15', correct: false }, { label: '12x²y²/5', correct: false },
          ], solution: `36/15=12/5; x³/x²=x; z kürzt weg → 12xy²/5` },
        { letter: 'b', text: `b) ${frac('8a³', '9 − 3a')} : ${frac('4a⁵', '3 − a')}`, points: 2,
          options: [
            { label: '2/(3a²)', correct: true }, { label: '2a³/3', correct: false },
            { label: '3/(2a²)', correct: false }, { label: '2/(3a⁴)', correct: false },
          ], solution: `9−3a=3(3−a), kürzt: 8a³/(3·4a⁵) = 2/(3a²)` },
        { letter: 'c', text: `c) ${frac('8a · 27b²(4 + 7y)', '(8 + 14y) · 18a² · 6b')}`, points: 4,
          options: [
            { label: 'b/a', correct: true }, { label: 'a/b', correct: false },
            { label: 'ab', correct: false }, { label: 'b²/a', correct: false },
          ], solution: `8+14y=2(4+7y), kürzt: (8a·27b²)/(2·18a²·6b) = 216ab²/216a²b = b/a` },
      ],
    },
    {
      nr: 3,
      topic: 'Funktionen',
      intro: `Aufgabe 3: Rolltreppe\nMonika fährt mit der Rolltreppe nach unten. Nach 2 Minuten ist sie 21 m unterhalb des Strassenniveaus.`,
      figureUrl: '/figuren/2024_roll3.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2024',
      linkedQuestionId: 'M1_2024_OTR_ROLL_3a',
      teile: [
        { letter: 'a', text: `a) Wie viele Meter unterhalb des Strassenniveaus ist Monika nach einer Minute Rolltreppenfahrt?`, points: 1,
          options: [
            { label: '10.5 m', correct: true }, { label: '21 m', correct: false },
            { label: '7 m', correct: false }, { label: '5.25 m', correct: false },
          ], solution: `21 m in 2 min → 10.5 m in 1 min` },
        { letter: 'b', text: `b) Berechne, wie viele Sekunden es dauert, bis Monika 7 m höher ist als das Bahnsteigniveau.`, points: 1,
          options: [
            { label: '40 s', correct: true }, { label: '23 s', correct: false },
            { label: '60 s', correct: false }, { label: '30 s', correct: false },
          ], solution: `10.5 m/min; 7 m entspricht 2/3 min = 40 s` },
      ],
    },
    {
      nr: 4,
      topic: 'Proportionalität',
      intro: `Aufgabe 4: Sachaufgaben`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2024_OTR_RATE_4a',
      teile: [
        { letter: 'a', text: `a) Ein Fahrzeug legt in 4.5 Stunden 441 km zurück. Welche Strecke hat es bei gleichbleibender Durchschnittsgeschwindigkeit nach 5 Stunden zurückgelegt?`, points: 2,
          options: [
            { label: '490 km', correct: true }, { label: '441 km', correct: false },
            { label: '500 km', correct: false }, { label: '480 km', correct: false },
          ], solution: `441÷4.5=98 km/h; 98·5=490 km` },
        { letter: 'b', text: `b) Nach einem Klassenfest brauchen 3 SchülerInnen 48 Minuten für die Aufräumarbeiten. Nach wie vielen Minuten wären 8 SchülerInnen mit der Arbeit fertig?`, points: 2,
          options: [
            { label: '18 Minuten', correct: true }, { label: '24 Minuten', correct: false },
            { label: '12 Minuten', correct: false }, { label: '20 Minuten', correct: false },
          ], solution: `3·48=144 Schüler-Minuten; 144÷8=18 min` },
        { letter: 'c', text: `c) Der Neubau einer Schule kann von 6 Malern in 17 Tagen gestrichen werden. Nach 2 Tagen meldet sich ein Maler krank. Wie lange dauern die Arbeiten jetzt?`, points: 2,
          options: [
            { label: '20 Tage', correct: true }, { label: '18 Tage', correct: false },
            { label: '15 Tage', correct: false }, { label: '17 Tage', correct: false },
          ], solution: `6·17=102 Malertage; nach 2 Tagen 90 Rest, ÷5=18, +2=20 Tage` },
      ],
    },
    {
      nr: 5,
      topic: 'Geometrie',
      intro: `Aufgabe 5: Winkel und Flächen\nAlle Figuren sind nicht massstabsgetreu.`,
      figureUrl: '/figuren/2024_winkel5a.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2024',
      linkedQuestionId: 'M1_2024_OTR_WINKEL_5a',
      teile: [
        { letter: 'a', text: `a) Die Geraden g1 und g2 sind parallel. Bestimme die Grösse des Winkels α.`, points: 4,
          options: [
            { label: 'α = 51°', correct: true }, { label: 'α = 129°', correct: false },
            { label: 'α = 17°', correct: false }, { label: 'α = 34°', correct: false },
          ], solution: `Über gleichschenklige Dreiecke (34°, 17°), Winkelsumme (129°) und Nebenwinkel: α=51°` },
        { letter: 'b', text: `b) Gegeben ist ein Halbkreis mit Mittelpunkt M auf AD. B, C liegen auf AD, F, E auf dem Halbkreis, BF und CE stehen senkrecht auf AD. AB=4, BC=14, CD=2. Bestimme die grün gefärbte Fläche (Viereck BFEC).`, points: 5,
          figureUrl: '/figuren/2024_flache5b.png',
          options: [
            { label: 'F = 98', correct: true }, { label: 'F = 84', correct: false },
            { label: 'F = 112', correct: false }, { label: 'F = 70', correct: false },
          ], solution: `r=10 (AD/2); BF²=10²−6²=64→BF=8; CE²=10²−8²=36→CE=6; F=(8+6)/2·14=98` },
      ],
    },
    {
      nr: 6,
      topic: 'Zahlen & Teilbarkeit',
      intro: `Aufgabe 6: Holzstäbe zersägen\nDrei Holzstäbe von 90 cm, 144 cm und 270 cm Länge sollen in gleich lange, möglichst grosse Stücke ohne Rest zersägt werden.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2024_OTR_HOLZ_6',
      teile: [
        { letter: 'a', text: `a) Welches ist die Länge eines solchen Stücks? Wie oft muss man insgesamt sägen, wenn jeder Holzstab einzeln bearbeitet wird?`, points: 5,
          options: [
            { label: '18 cm, 25 Schnitte', correct: true }, { label: '18 cm, 24 Schnitte', correct: false },
            { label: '9 cm, 25 Schnitte', correct: false }, { label: '18 cm, 22 Schnitte', correct: false },
          ], solution: `ggT(90,144,270)=18; Stücke 5,8,15; Schnitte (5−1)+(8−1)+(15−1)=25` },
        { letter: 'b', text: `b) Nun darf bei einem der drei Holzstäbe ein Reststück von 9 cm übrigbleiben, sonst gleich lange, möglichst grosse Stücke. Wie lang sind die Stücke dann? Bei welchem Stab bleibt der Rest?`, points: 5,
          options: [
            { label: '45 cm, Rest beim 144-cm-Stab', correct: true },
            { label: '27 cm, Rest beim 144-cm-Stab', correct: false },
            { label: '45 cm, Rest beim 90-cm-Stab', correct: false },
            { label: '9 cm, Rest beim 144-cm-Stab', correct: false },
          ], solution: `144−9=135; ggT(90,135,270)=45; Probe: 144=3·45+9` },
      ],
    },
  ],
};
