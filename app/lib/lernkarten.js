// Lernkarten: eine Themenseite mit mehreren Kacheln (Mini-Lektionen) pro
// question.topic. Siehe app/components/Lernkarte.js für die Anzeige und
// app/page.js (Sidebar), wo geprüft wird, ob für question.topic ein Eintrag
// existiert.
export const lernkarten = {
  'Zahlen & Teilbarkeit': {
    titel: 'Zahlen & Teilbarkeit',
    kacheln: [
      {
        id: 'primzahlen',
        emoji: '🔢',
        titel: 'Primzahlen',
        karten: [
          { text: 'Stell dir Lego vor: Primzahlen sind die Grundsteine, die man nicht weiter zerlegen kann. Aus ihnen baust du jede andere Zahl durch Malnehmen. Zum Beispiel 6 = 2 · 3 und 20 = 2 · 2 · 5.' },
          { text: 'Primzahlen sind die Bausteine aller Zahlen. Sie haben genau zwei Teiler: 1 und sich selbst.' },
          { text: 'Die ersten: 2, 3, 5, 7, 11, 13, 17, 19. Die 2 ist die einzige gerade Primzahl.' },
          { text: 'Die 1 ist keine Primzahl, sie hat nur einen Teiler. Und 9 auch nicht: 9 = 3 · 3.' },
        ],
        check: [
          { frage: 'Welche Zahl ist eine Primzahl?', optionen: ['21', '23', '25', '27'], richtig: 1, erklaerung: '21 = 3 · 7, 25 = 5 · 5, 27 = 3 · 9. Nur 23 hat genau zwei Teiler.' },
          { frage: 'Welche Zahl ist KEINE Primzahl?', optionen: ['2', '11', '1', '13'], richtig: 2, erklaerung: 'Die 1 hat nur einen Teiler. Primzahlen haben genau zwei.' },
        ],
      },
      {
        id: 'teilbarkeit',
        emoji: '✅',
        titel: 'Teilbarkeitsregeln',
        karten: [
          { text: 'Teilbar heisst: Beim Teilen bleibt kein Rest. 12 ist durch 3 teilbar (12 : 3 = 4), 13 nicht (es bleibt Rest 1). Die Regeln sind Abkürzungen, damit du nicht lange rechnen musst.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: '2', regel: 'Letzte Ziffer gerade (0, 2, 4, 6, 8). Beispiel: 148.' },
              { n: '3', regel: 'Quersumme durch 3 teilbar. Beispiel: 123, denn 1+2+3 = 6.' },
              { n: '4', regel: 'Letzte zwei Ziffern durch 4 teilbar. Beispiel: 516, denn 16 ist durch 4 teilbar.' },
              { n: '5', regel: 'Endet auf 0 oder 5. Beispiel: 235.' },
              { n: '6', regel: 'Durch 2 UND durch 3 teilbar. Beispiel: 72, gerade, Quersumme 9.' },
              { n: '9', regel: 'Quersumme durch 9 teilbar. Beispiel: 819, denn 8+1+9 = 18.' },
              { n: '10', regel: 'Endet auf 0. Beispiel: 450.' },
            ],
          },
          { text: 'Warum klappt das bei 3 und 9? Von jedem Zehner und Hunderter bleibt beim Teilen durch 3 oder 9 immer Rest 1. Darum zählt die Quersumme.' },
        ],
        check: [
          { frage: 'Welche Zahl ist durch 9 teilbar?', optionen: ['523', '612', '425', '731'], richtig: 1, erklaerung: '6+1+2 = 9, und 9 ist durch 9 teilbar.' },
          { frage: 'Ist 516 durch 4 teilbar?', optionen: ['Ja, 16 ist durch 4 teilbar', 'Nein, 51 ist nicht durch 4 teilbar', 'Nein, sie endet nicht auf 0 oder 5', 'Ja, weil sie gerade ist'], richtig: 0, erklaerung: 'Bei der 4 zählen die letzten zwei Ziffern: 16 = 4 · 4.' },
        ],
      },
      {
        id: 'faktorbaum',
        emoji: '🌳',
        titel: 'Faktorbaum',
        karten: [
          { text: 'Faktoren sind die Zahlen, die man malnimmt. In 2 · 3 = 6 sind 2 und 3 die Faktoren. Der Faktorbaum zerlegt eine Zahl Ast für Ast in Primfaktoren.' },
          { text: 'Zerlege eine Zahl so lange, bis nur noch Primzahlen übrig sind. Wie ein Baum, der sich verzweigt.' },
          { text: '24 → 2 · 12, 12 → 2 · 6, 6 → 2 · 3. Die Primzahlen: 2, 2, 2, 3.', visual: 'faktorbaum24' },
          { text: 'Ergebnis: 24 = 2 · 2 · 2 · 3 = 2³ · 3. Gleiche Faktoren schreibst du als Hochzahl.' },
          { text: 'Jetzt du: 36 → 2 · 18, 18 → 2 · 9, 9 → 3 · 3. Ergebnis: 36 = 2² · 3².', visual: 'faktorbaum36' },
        ],
        check: [
          { frage: 'Wie lautet die Primfaktorzerlegung von 30?', optionen: ['2 · 15', '2 · 3 · 5', '3 · 10', '2 · 3 · 6'], richtig: 1, erklaerung: '30 = 2 · 15 = 2 · 3 · 5, alles Primzahlen.' },
        ],
      },
      {
        id: 'ggt',
        emoji: '🧩',
        titel: 'ggT',
        karten: [
          { text: 'Ein Teiler passt ohne Rest in eine Zahl. Ein gemeinsamer Teiler passt in beide Zahlen. Der grösste davon ist der ggT. Denk ans Aufteilen: möglichst grosse, gleiche Gruppen, nichts übrig.' },
          { text: 'Methode 1, kleine Zahlen: Teiler aufschreiben. 12: 1, 2, 3, 4, 6, 12. 18: 1, 2, 3, 6, 9, 18. Gemeinsam: 1, 2, 3, 6. Der grösste: 6.', visual: 'ggt_listen' },
          { text: 'Methode 2, grosse Zahlen: Primfaktoren. 24 = 2³ · 3 und 36 = 2² · 3². Nimm die gemeinsamen Faktoren mit der KLEINEREN Hochzahl: 2² · 3 = 12.' },
          { text: 'Warum die kleinere? Die 2³ aus der 24 passt nicht in die 2² der 36.' },
          { text: 'Beispiel: 24 Schokoriegel und 36 Gummibärli-Tüten, möglichst viele gleiche Teller, nichts übrig. ggT = 12 Teller, auf jedem 2 Riegel und 3 Tüten.' },
        ],
        check: [
          { frage: 'ggT von 18 und 24?', optionen: ['3', '6', '12', '72'], richtig: 1, erklaerung: '18 = 2 · 3², 24 = 2³ · 3. Kleinere Hochzahlen: 2 · 3 = 6.' },
        ],
      },
      {
        id: 'kgv',
        emoji: '🔁',
        titel: 'kgV',
        karten: [
          { text: 'Ein Vielfaches entsteht beim Malnehmen: Vielfache von 4 sind 4, 8, 12, 16 und so weiter. Gemeinsame Vielfache stehen in beiden Reihen, das kleinste davon ist das kgV. Denk an Dinge, die sich wiederholen.' },
          { text: 'Methode 1: Reihen aufschreiben. 4er: 4, 8, 12, 16. 6er: 6, 12, 18. Erstes gemeinsames: 12.', visual: 'kgv_reihen' },
          { text: 'Methode 2: Primfaktoren mit der GRÖSSEREN Hochzahl. 24 = 2³ · 3 und 36 = 2² · 3². kgV = 2³ · 3² = 8 · 9 = 72.' },
          { text: 'Warum die grössere? Sonst hätte die 24 mit ihren drei Zweien keinen Platz im Vielfachen.' },
          { text: 'Beispiel: Bus A fährt alle 12 Minuten, Bus B alle 18. Sie starten gemeinsam. 12 = 2² · 3 und 18 = 2 · 3², kgV = 2² · 3² = 36. Nach 36 Minuten treffen sie sich wieder.' },
        ],
        check: [
          { frage: 'kgV von 4 und 6?', optionen: ['2', '10', '12', '24'], richtig: 2, erklaerung: 'Das erste gemeinsame in den Reihen 4, 8, 12 und 6, 12 ist die 12.' },
        ],
      },
      {
        id: 'textaufgaben',
        emoji: '🚌',
        titel: 'Textaufgaben',
        karten: [
          { text: 'In Textaufgaben versteckt sich meist ggT oder kgV. Frag dich zuerst: Teile ich etwas auf (ggT) oder wiederholt sich etwas (kgV)?' },
          { text: 'ggT-Signalwörter: aufteilen, gleich grosse Stücke, Gruppen, zuschneiden, möglichst gross.' },
          { text: 'kgV-Signalwörter: wieder gleichzeitig, treffen sich, abwechselnd, nach wie vielen Minuten oder Tagen.' },
        ],
        check: [
          { frage: 'Eine 24 m und eine 36 m lange Schnur werden in gleich lange Stücke ohne Rest geschnitten. Wie lang sind die Stücke höchstens?', optionen: ['6 m', '12 m', '72 m', '2 m'], richtig: 1, erklaerung: 'Aufteilen, also ggT: ggT(24, 36) = 12.' },
          { frage: 'Eine Glocke läutet alle 15 Minuten, eine andere alle 20. Wann läuten beide wieder gemeinsam?', optionen: ['Nach 5 Minuten', 'Nach 30 Minuten', 'Nach 60 Minuten', 'Nach 300 Minuten'], richtig: 2, erklaerung: 'Wieder gleichzeitig, also kgV: 15 = 3 · 5, 20 = 2² · 5, kgV = 2² · 3 · 5 = 60.' },
          { frage: 'Zwei Lichter blinken alle 8 und alle 12 Sekunden. Wann blinken sie wieder gleichzeitig?', optionen: ['Nach 4 Sekunden', 'Nach 20 Sekunden', 'Nach 24 Sekunden', 'Nach 96 Sekunden'], richtig: 2, erklaerung: 'kgV(8, 12) = 2³ · 3 = 24.' },
        ],
      },
      {
        id: 'fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        karten: [
          { text: '❌ Die 1 ist eine Primzahl. ✅ Nein, sie hat nur einen Teiler. Die erste Primzahl ist die 2.' },
          { text: '❌ Die Quersumme zeigt, ob eine Zahl durch 4 teilbar ist. ✅ Die Quersumme gilt nur für 3 und 9. Bei der 4 prüfst du die letzten zwei Ziffern.' },
          { text: '❌ ggT und kgV vertauscht. ✅ ggT: kleinste Hochzahlen, Ergebnis wird kleiner. kgV: grösste Hochzahlen, Ergebnis wird grösser.' },
        ],
        check: [],
      },
      {
        id: 'ueben',
        emoji: '🎯',
        titel: 'Üben',
        karten: [
          { text: 'Ist 512 durch 4 teilbar?', loesung: 'Ja. Die letzten zwei Ziffern 12 sind durch 4 teilbar.' },
          { text: 'Primfaktorzerlegung von 30.', loesung: '30 = 2 · 15 = 2 · 3 · 5' },
          { text: 'Eine Glocke läutet alle 15 Minuten, eine andere alle 20. Wann läuten beide wieder gemeinsam?', loesung: 'kgV von 15 = 3 · 5 und 20 = 2² · 5: 2² · 3 · 5 = 4 · 15 = 60. Nach 60 Minuten.' },
          { text: 'ggT und kgV von 18 und 24.', loesung: '18 = 2 · 3², 24 = 2³ · 3. ggT = 2 · 3 = 6. kgV = 2³ · 3² = 72.' },
        ],
        check: [],
      },
    ],
  },
};
