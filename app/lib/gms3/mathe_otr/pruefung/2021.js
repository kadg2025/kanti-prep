
import { frac } from '../../../mathFormat';

// Originalprüfung 2021, Modus A — Punkte exakt aus dem PDF übernommen
// (siehe pruefungsmuster.md). Inhalte basieren auf den bereits geprüften
// Antworten aus app/lib/gms3/mathe_otr/2021.js (linkedQuestionId verweist
// dorthin, für Fehler-Kiste/Sprung-Funktion).
export const pruefung2021 = {
  year: 2021,
  aufgaben: [
    {
      nr: 1,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 1: Potenzen\nWomit muss man y⁶ multiplizieren, damit man folgendes erhält?`,
      figureUrl: null,
      figureCaption: null,
      linkedQuestionId: 'M1_2021_OTR_POT_1a',
      teile: [
        {
          letter: 'a', text: `a) 2y⁶`, points: 1,
          options: [
            { label: '2', correct: true },
            { label: '2y⁶', correct: false },
            { label: '0', correct: false },
            { label: '12', correct: false },
          ],
          solution: `y⁶ · 2 = 2y⁶ → gesuchter Faktor: 2`,
        },
        {
          letter: 'b', text: `b) (2y)⁶`, points: 2,
          options: [
            { label: '64', correct: true },
            { label: '2', correct: false },
            { label: '12', correct: false },
            { label: '32', correct: false },
          ],
          solution: `(2y)⁶ = 2⁶·y⁶ = 64y⁶ → gesuchter Faktor: 64`,
        },
        {
          letter: 'c', text: `c) y¹⁸`, points: 2,
          options: [
            { label: 'y¹²', correct: true },
            { label: 'y³', correct: false },
            { label: 'y¹⁰⁸', correct: false },
            { label: 'y²⁴', correct: false },
          ],
          solution: `y⁶ · y¹² = y⁶⁺¹² = y¹⁸ → gesuchter Faktor: y¹²`,
        },
        {
          letter: 'd', text: `d) ${frac('1', 'y⁶')}`, points: 2,
          options: [
            { label: 'y⁻¹² = 1/y¹²', correct: true },
            { label: 'y⁻⁶ = 1/y⁶', correct: false },
            { label: 'y⁰ = 1', correct: false },
            { label: 'y⁶', correct: false },
          ],
          solution: `y⁶ · y⁻¹² = y⁶⁻¹² = y⁻⁶ = 1/y⁶ → gesuchter Faktor: y⁻¹² = 1/y¹²`,
        },
      ],
    },
    {
      nr: 2,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 2: Terme ordnen\nGegeben sind drei Terme:\nA = ${frac('2', '3')}x² + 1\nB = 2 − ${frac('4', '3')}x\nC = ${frac('8', 'x')} + ${frac('2', '3')}\n\nOrdne A, B, C der Grösse nach.`,
      figureUrl: null,
      figureCaption: null,
      linkedQuestionId: 'M1_2021_OTR_TERM_2',
      teile: [
        {
          letter: 'a', text: `a) x = 3`, points: 4,
          options: [
            { label: 'B < C < A', correct: true },
            { label: 'A < C < B', correct: false },
            { label: 'A < B < C', correct: false },
            { label: 'C < B < A', correct: false },
          ],
          solution: `A=7, B=–2, C=10/3 ≈3.33 → B < C < A`,
        },
        {
          letter: 'b', text: `b) x = ${frac('1', '2')}`, points: 4,
          options: [
            { label: 'A < B < C', correct: true },
            { label: 'B < A < C', correct: false },
            { label: 'C < B < A', correct: false },
            { label: 'A < C < B', correct: false },
          ],
          solution: `A=7/6≈1.17, B=4/3≈1.33, C=50/3≈16.67 (Achtung: 8÷(1/2)=16!) → A < B < C`,
        },
        {
          letter: 'c', text: `c) x = −${frac('1', '2')}`, points: 4,
          options: [
            { label: 'C < A < B', correct: true },
            { label: 'A < C < B', correct: false },
            { label: 'B < A < C', correct: false },
            { label: 'C < B < A', correct: false },
          ],
          solution: `A=7/6≈1.17, B=8/3≈2.67, C=–46/3≈–15.33 (x²>0 trotz negativem x; 8÷(–1/2)=–16) → C < A < B`,
        },
      ],
    },
    {
      nr: 3,
      topic: 'Gleichungen',
      intro: `Aufgabe 3: Bruchgleichungen lösen`,
      figureUrl: null,
      figureCaption: null,
      linkedQuestionId: 'M1_2021_OTR_BRUCH_3',
      teile: [
        {
          letter: 'a', text: `a) ${frac('3x', '8')} – ${frac('6x', '2')} = ${frac('3x', '4')} + ${frac('9', '5')}`, points: 3,
          options: [
            { label: 'x = −8/15', correct: true },
            { label: 'x = 8/15', correct: false },
            { label: 'x = −15/8', correct: false },
            { label: 'x = 24/5', correct: false },
          ],
          solution: `kgV(8,2,4,5)=40 → 15x–120x=30x+72 → –135x=72 → x=–8/15`,
        },
        {
          letter: 'b', text: `b) ${frac('8', 'x')} + ${frac('7', 'x')} = 5`, points: 3,
          options: [
            { label: 'x = 3', correct: true },
            { label: 'x = 5', correct: false },
            { label: 'x = 15', correct: false },
            { label: 'x = −3', correct: false },
          ],
          solution: `8/x+7/x=15/x=5 → 15=5x → x=3`,
        },
      ],
    },
    {
      nr: 4,
      topic: 'Terme & Klammern',
      intro: `Aufgabe 4: Klammern\nKlammere soweit wie möglich aus (a,b) bzw. löse die Klammern auf (c,d).`,
      figureUrl: null,
      figureCaption: null,
      linkedQuestionId: 'M1_2021_OTR_KLAMMER_4',
      teile: [
        {
          letter: 'a', text: `a) 12a + 39ax`, points: 2,
          options: [
            { label: '3a(4 + 13x)', correct: true },
            { label: '3(4a + 13ax)', correct: false },
            { label: 'a(12 + 39x)', correct: false },
            { label: '3a(4 + 39x)', correct: false },
          ],
          solution: `ggT(12,39)=3, gemeinsame Variable a → 3a(4+13x)`,
        },
        {
          letter: 'b', text: `b) 14b − 42ab²`, points: 2,
          options: [
            { label: '14b(1 − 3ab)', correct: true },
            { label: '7b(2 − 6ab²)', correct: false },
            { label: '14b(1 − 3ab²)', correct: false },
            { label: 'b(14 − 42ab²)', correct: false },
          ],
          solution: `ggT(14,42)=14, gemeinsame Variable b (kleinster Exponent) → 14b(1−3ab)`,
        },
        {
          letter: 'c', text: `c) z(7xz² + 8bz)`, points: 2,
          options: [
            { label: '7xz³ + 8bz²', correct: true },
            { label: '7xz² + 8bz', correct: false },
            { label: '7xz⁴ + 8bz³', correct: false },
            { label: '15xz³ + 15bz²', correct: false },
          ],
          solution: `z·7xz²=7xz³, z·8bz=8bz² → 7xz³+8bz²`,
        },
        {
          letter: 'd', text: `d) (7a²bk³ − 9kpu²) · 2k`, points: 2,
          options: [
            { label: '14a²bk⁴ − 18k²pu²', correct: true },
            { label: '14a²bk³ − 18kpu²', correct: false },
            { label: '14a²bk⁴ − 18kpu²', correct: false },
            { label: '7a²bk⁴ − 9k²pu²', correct: false },
          ],
          solution: `7a²bk³·2k=14a²bk⁴, 9kpu²·2k=18k²pu² → 14a²bk⁴−18k²pu²`,
        },
      ],
    },
    {
      nr: 5,
      topic: 'Körper & Netze',
      intro: `Aufgabe 5: Würfel und Netz\nGegeben ist ein Würfel mit Ecken A, B, C, D (unten) und E, F, G, H (oben).`,
      figureUrl: '/figuren/2021_wuerfel5a.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2021',
      linkedQuestionId: 'M1_2021_OTR_WUERFEL_5a',
      teile: [
        {
          letter: 'a', text: `a) Beschrifte das Würfelnetz vollständig und schraffiere die gesuchte Fläche (Fläche B-C).`, points: 4,
          options: [
            { label: 'Beschriftung gemäss Würfelgeometrie, Fläche BCGF schraffiert', correct: true },
            { label: 'Beschriftung vertauscht, Fläche ABCD schraffiert', correct: false },
            { label: 'Beschriftung gemäss Würfelgeometrie, Fläche ABCD schraffiert', correct: false },
            { label: 'Beschriftung gemäss Würfelgeometrie, Fläche ABGH schraffiert', correct: false },
          ],
          solution: `Die Fläche B-C ist die rechte Seitenfläche BCGF.`,
        },
        {
          letter: 'b', text: `b) Gegeben ist ein Punkt P auf der Kante HG. Übertrage P und alle Würfelecken ins Netz. Schraffiere im Raumbild die entsprechende Fläche.`, points: 4,
          figureUrl: '/figuren/2021_wuerfel5b.png',
          options: [
            { label: 'Fläche EFGH (Deckel) ist schraffiert, P liegt auf Kante GH im Netz', correct: true },
            { label: 'Fläche ABCD (Boden) ist schraffiert', correct: false },
            { label: 'Fläche ABFE ist schraffiert', correct: false },
            { label: 'Fläche DCGH ist schraffiert', correct: false },
          ],
          solution: `P liegt auf Kante HG der oberen Fläche EFGH (Deckel) → diese Fläche ist schraffiert.`,
        },
      ],
    },
    {
      nr: 6,
      topic: 'Statistik & Diagramme',
      intro: `Aufgabe 6: Tischkicker\nSusi gewinnt 2×, Moritz 3×, Giuliano 10×.`,
      figureUrl: '/figuren/2021_stat6a.png',
      figureCaption: 'Quelle: Kanti Frauenfeld, Aufnahmeprüfung 2021',
      linkedQuestionId: 'M1_2021_OTR_STAT_6a',
      teile: [
        {
          letter: 'a', text: `a) Welches der fünf Balkendiagramme (A–E) ist richtig?`, points: 1,
          options: [
            { label: 'Diagramm C (Skala 0–12, Giuliano bei 10)', correct: true },
            { label: 'Diagramm B (Skala 0–10, Giuliano bei 10)', correct: false },
            { label: 'Diagramm E (Skala 0–12, aber falsche Balken)', correct: false },
            { label: 'Diagramm A (Skala nur bis 9)', correct: false },
          ],
          solution: `Skala muss bis mind. 10 reichen und übersichtliche Schritte haben (0,2,4,...,12) → Diagramm C.`,
        },
        {
          letter: 'b', text: `b) Stelle die Gewinnsituation in einem Kreisdiagramm dar. Berechne die Winkel für jeden Spieler.`, points: 4,
          options: [
            { label: 'Susi = 48°, Moritz = 72°, Giuliano = 240°', correct: true },
            { label: 'Susi = 45°, Moritz = 60°, Giuliano = 255°', correct: false },
            { label: 'Susi = 48°, Moritz = 72°, Giuliano = 200°', correct: false },
            { label: 'Susi = 40°, Moritz = 80°, Giuliano = 240°', correct: false },
          ],
          solution: `Total=15 Spiele, 360°/15=24°/Spiel → Susi 2·24=48°, Moritz 3·24=72°, Giuliano 10·24=240° (Probe: Summe=360°).`,
        },
      ],
    },
  ],
};
