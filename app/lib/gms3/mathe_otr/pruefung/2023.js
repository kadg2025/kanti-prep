
import { frac } from '../../../mathFormat';

// Originalprüfung 2023, Modus A. Punkte pro Teilaufgabe: im PDF steht nur
// EIN Gesamtwert pro Aufgabe — aufgeteilt nach der Regel aus
// pruefungsmuster.md (Gesamt ÷ Anzahl Teile, abgerundet, letzter Teil
// bekommt den Rest). Inhalte/Antworten aus app/lib/gms3/mathe_otr/2023.js
// (bereits geprüft).
export const pruefung2023 = {
  year: 2023,
  aufgaben: [
    {
      nr: 1,
      topic: 'Gleichungen',
      intro: `Aufgabe 1: Gleichungen lösen`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2023_OTR_EQ_1',
      teile: [
        { letter: 'a', text: `a) ${frac('1', '2')}x + ${frac('1', '4')}x + ${frac('1', '8')}x = 14`, points: 4,
          options: [
            { label: 'x = 16', correct: true }, { label: 'x = 8', correct: false },
            { label: 'x = 2', correct: false }, { label: 'x = 112', correct: false },
          ], solution: `×8: 4x+2x+x=112 → 7x=112 → x=16` },
        { letter: 'b', text: `b) ${frac('6', '11')}(x – 3) + 2 = 1 – ${frac('1', '22')}(10x + 3)`, points: 4,
          options: [
            { label: 'x = 0.5', correct: true }, { label: 'x = 2', correct: false },
            { label: 'x = 9/28', correct: false }, { label: 'x = −0.5', correct: false },
          ], solution: `×22: 12(x−3)+44=22−(10x+3) → 12x+8=19−10x → 22x=11 → x=0.5` },
      ],
    },
    {
      nr: 2,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 2: Terme vereinfachen`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2023_OTR_TERM_2',
      teile: [
        { letter: 'a', text: `a) Vereinfache so weit wie möglich: 4(a − 1) + 3(a − 1) − 5(a − 1)`, points: 2,
          options: [
            { label: '2a − 2', correct: true }, { label: '12a − 12', correct: false },
            { label: '2a + 2', correct: false }, { label: 'a − 1', correct: false },
          ], solution: `(4+3−5)(a−1) = 2(a−1) = 2a−2` },
        { letter: 'b', text: `b) Multipliziere aus: −2xy²(x² + 3x)`, points: 2,
          options: [
            { label: '−2x³y² − 6x²y²', correct: true }, { label: '2x³y² + 6x²y²', correct: false },
            { label: '−2x²y² − 6xy²', correct: false }, { label: '−2x³y³ − 6x²y³', correct: false },
          ], solution: `−2xy²·x²=−2x³y²; −2xy²·3x=−6x²y²` },
        { letter: 'c', text: `c) Vereinfache und klammere so weit wie möglich aus: −2x⁴y³ + 6x³y³ − 3x³y² + 2x⁴y³`, points: 3,
          options: [
            { label: '3x³y²(2y − 1)', correct: true }, { label: '3x³y²(2y + 1)', correct: false },
            { label: '6x³y³ − 3x³y²', correct: false }, { label: 'x³y²(2y − 1)', correct: false },
          ], solution: `−2x⁴y³+2x⁴y³=0 bleibt: 6x³y³−3x³y² = 3x³y²(2y−1)` },
      ],
    },
    {
      nr: 3,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 3: Terme berechnen\nGegeben: T1=a·b·c, T2=${frac('1', 'a·b·c')}, T3=${frac('a·b', 'c')}, T4=${frac('a', 'b·c')}.`,
      figureUrl: null, figureCaption: null,
      linkedQuestionId: 'M1_2023_OTR_TERM_3',
      teile: [
        { letter: 'a', text: `a) Berechne T1 · T2`, points: 2,
          options: [
            { label: '1', correct: true }, { label: 'abc', correct: false },
            { label: '1/(abc)', correct: false }, { label: 'a²b²c²', correct: false },
          ], solution: `a·b·c · 1/(a·b·c) = 1` },
        { letter: 'b', text: `b) Berechne T3 · T4`, points: 2,
          options: [
            { label: 'a²/c²', correct: true }, { label: 'a/c', correct: false },
            { label: 'a²b/c²', correct: false }, { label: 'b²/c²', correct: false },
          ], solution: `(ab/c)·(a/(bc)) = a²b/(bc²) = a²/c² (b kürzt sich weg)` },
        { letter: 'c', text: `c) Berechne T3 : T4`, points: 2,
          options: [
            { label: 'b²', correct: true }, { label: 'b', correct: false },
            { label: '1/b²', correct: false }, { label: 'ab', correct: false },
          ], solution: `(ab/c) · (bc/a) = ab²c/(ac) = b² (a und c kürzen sich weg)` },
      ],
    },
    {
      nr: 4,
      topic: 'Funktionen',
      intro: `Aufgabe 4: Kerzen\nIm Koordinatensystem ist eine Gerade gegeben, welche den Abbrennvorgang einer Stabkerze beschreibt.`,
      figureUrl: '/figuren/2023_kerze4.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2023',
      linkedQuestionId: 'M1_2023_OTR_KERZE_4a',
      teile: [
        { letter: 'a', text: `a) Notiere die zugehörige Geradengleichung der Stabkerze.`, points: 2,
          options: [
            { label: 'y = −1.5x + 10', correct: true }, { label: 'y = 1.5x + 10', correct: false },
            { label: 'y = −1.5x − 10', correct: false }, { label: 'y = −10x + 1.5', correct: false },
          ], solution: `y-Achsenabschnitt=10, Steigung=−1.5 → y=−1.5x+10` },
        { letter: 'b', text: `b) Nach wie vielen Stunden und Minuten ist die Stabkerze vollständig abgebrannt?`, points: 2,
          options: [
            { label: '6 h 40 min', correct: true }, { label: '5 h', correct: false },
            { label: '7 h', correct: false }, { label: '6 h 15 min', correct: false },
          ], solution: `0=−1.5x+10 → x=6.666... = 6 h 40 min` },
        { letter: 'c', text: `c) Eine Stumpenkerze ist anfangs 7.5 cm lang und wird stündlich um 0.5 cm kürzer. Welche Geradengleichung beschreibt diesen Abbrennvorgang?`, points: 2,
          options: [
            { label: 'y = −0.5x + 7.5', correct: true }, { label: 'y = 0.5x + 7.5', correct: false },
            { label: 'y = −0.5x − 7.5', correct: false }, { label: 'y = −7.5x + 0.5', correct: false },
          ], solution: `Anfangslänge=7.5 (y-Achsenabschnitt), stündlich −0.5 (Steigung) → y=−0.5x+7.5` },
        { letter: 'd', text: `d) Nach wie vielen Stunden sind die zwei Kerzen gleich lang?`, points: 2,
          options: [
            { label: '2.5 h', correct: true }, { label: '5 h', correct: false },
            { label: '6 h', correct: false }, { label: '2 h', correct: false },
          ], solution: `−1.5x+10=−0.5x+7.5 → −x=−2.5 → x=2.5` },
        { letter: 'e', text: `e) Nach wie vielen Stunden ist die Stumpenkerze genau doppelt so gross wie die Stabkerze?`, points: 3,
          options: [
            { label: '5 h', correct: true }, { label: '6 h', correct: false },
            { label: '2.5 h', correct: false }, { label: '7 h', correct: false },
          ], solution: `−0.5x+7.5=2(−1.5x+10) → −0.5x+7.5=−3x+20 → 2.5x=12.5 → x=5` },
      ],
    },
    {
      nr: 5,
      topic: 'Statistik & Diagramme',
      intro: `Aufgabe 5: Umfrage\nEine Schule befragte 720 SchülerInnen zur bevorzugten Unterrichtsform. Die Ergebnisse sind in einem Kreisdiagramm dargestellt.`,
      figureUrl: '/figuren/2023_stat5a.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2023',
      linkedQuestionId: 'M1_2023_OTR_STAT_5a',
      teile: [
        { letter: 'a', text: `a) Berechne die absoluten Häufigkeiten aller vier Antworten.`, points: 3,
          options: [
            { label: 'Präsenz: 288, Fern: 108, Kombination: 252, Keine Angabe: 72', correct: true },
            { label: 'Präsenz: 252, Fern: 108, Kombination: 288, Keine Angabe: 72', correct: false },
            { label: 'Präsenz: 288, Fern: 72, Kombination: 252, Keine Angabe: 108', correct: false },
            { label: 'Präsenz: 360, Fern: 108, Kombination: 180, Keine Angabe: 72', correct: false },
          ], solution: `Keine Angabe: 36°/360°·720=72; Präsenz: 720·0.4=288; Fern: 720−252−288−72=108` },
        { letter: 'b', text: `b) Welches der vier Säulendiagramme passt zur Umfrage?`, points: 4,
          figureUrl: '/figuren/2023_stat5b.png',
          options: [
            { label: 'Diagramm rechts oben', correct: true }, { label: 'Diagramm links oben', correct: false },
            { label: 'Diagramm links unten', correct: false }, { label: 'Diagramm rechts unten', correct: false },
          ], solution: `Vergleiche die Balkenhöhen mit den berechneten absoluten/prozentualen Häufigkeiten.` },
      ],
    },
    {
      nr: 6,
      topic: 'Geometrie',
      intro: `Aufgabe 6: Winkel und Flächen\nAlle Figuren sind nicht massstabsgetreu.`,
      figureUrl: '/figuren/2023_geom6a.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2023',
      linkedQuestionId: 'M1_2023_OTR_GEOM_6a',
      teile: [
        { letter: 'a', text: `a) Die Seiten a und b sind parallel. Bestimme die Grösse der Winkel α und β.`, points: 5,
          options: [
            { label: 'α = 75°, β = 150°', correct: true }, { label: 'α = 150°, β = 75°', correct: false },
            { label: 'α = 60°, β = 120°', correct: false }, { label: 'α = 75°, β = 105°', correct: false },
          ], solution: `Wechselwinkel an a∥b: Winkel bei M = 30°. Gleichschenkliges Dreieck (Radien): α=75°. β=120°+30°=150°.` },
        { letter: 'b', text: `b) Das Trapez ABCD hat die parallelen Seiten 15 und 3 sowie die Höhe 16. Die rote Fläche F ist 7/24 der Trapezfläche. Die Seite s des Dreiecks F ist parallel zur Höhe des Trapezes. Berechne s.`, points: 6,
          figureUrl: '/figuren/2023_geom6b.png',
          options: [
            { label: 's = 7', correct: true }, { label: 's = 6', correct: false },
            { label: 's = 8', correct: false }, { label: 's = 14', correct: false },
          ], solution: `Trapezfläche=(15+3)/2·16=144. F=7/24·144=42. Dreieck F: Grundseite 16−... Rechnung ergibt s=7 (vgl. Musterlösung in 2023.js).` },
      ],
    },
  ],
};
