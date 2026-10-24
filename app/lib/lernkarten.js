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
        videos: [
          { titel: 'Primzahlen (Lehrerschmidt)', youtubeId: 'vc9BEjHzJIU' },
          { titel: 'Primzahlen einfach erklärt (MathemaTrick)', youtubeId: 'kesfaEFBcLY' },
        ],
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
        emoji: '➗',
        titel: 'Teilbarkeitsregeln',
        videos: [
          { titel: 'Teilbarkeitsregeln (Lehrerschmidt)', youtubeId: 'COe6sDmcFEo' },
        ],
        karten: [
          { text: 'Teilbar heisst: Beim Teilen bleibt kein Rest. 12 ist durch 3 teilbar (12 : 3 = 4), 13 nicht (es bleibt Rest 1). Die Regeln sind Abkürzungen, damit du nicht lange rechnen musst.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: '2', prefix: 'Teilbar durch ', regel: 'Letzte Ziffer gerade (0, 2, 4, 6, 8). Beispiel: 148.' },
              { n: '3', prefix: 'Teilbar durch ', regel: 'Quersumme durch 3 teilbar. Beispiel: 123, denn 1+2+3 = 6.' },
              { n: '4', prefix: 'Teilbar durch ', regel: 'Letzte zwei Ziffern durch 4 teilbar. Beispiel: 516, denn 16 ist durch 4 teilbar.' },
              { n: '5', prefix: 'Teilbar durch ', regel: 'Endet auf 0 oder 5. Beispiel: 235.' },
              { n: '6', prefix: 'Teilbar durch ', regel: 'Durch 2 UND durch 3 teilbar. Beispiel: 72, gerade, Quersumme 9.' },
              { n: '9', prefix: 'Teilbar durch ', regel: 'Quersumme durch 9 teilbar. Beispiel: 819, denn 8+1+9 = 18.' },
              { n: '10', prefix: 'Teilbar durch ', regel: 'Endet auf 0. Beispiel: 450.' },
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
        videos: [
          { titel: 'Primfaktorzerlegung (Lehrerschmidt)', youtubeId: '7Z-bwJ5F6-M' },
          { titel: 'Primfaktorzerlegung einfach erklärt (MathemaTrick)', youtubeId: 'l6vSWJmbh0s' },
        ],
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
        emoji: '🤝',
        titel: 'ggT',
        videos: [
          { titel: 'ggT einfach erklärt (Lehrerschmidt)', youtubeId: 'vCk1qe1FyDI' },
          { titel: 'ggT berechnen mit Primfaktorzerlegung (MathemaTrick)', youtubeId: 'vvXcBvyotjE' },
        ],
        karten: [
          { text: 'Teiler: Eine Zahl passt in eine andere, wenn beim Teilen nichts übrig bleibt. 4 ist ein Teiler von 12, denn 12 : 4 = 3. 5 ist kein Teiler von 12: Es bleibt ein Rest.' },
          { text: 'Teiler von 12: 1, 2, 3, 4, 6, 12. Teiler von 18: 1, 2, 3, 6, 9, 18. Gemeinsame Teiler, also in beiden: 1, 2, 3, 6.', visual: 'ggt_listen' },
          { text: 'ggT = der GRÖSSTE gemeinsame Teiler. Bei 12 und 18 ist das die 6. Merke: ggT = grösste gleiche Gruppen bilden, bei denen nichts übrig bleibt.' },
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
        videos: [
          { titel: 'kgV (Lehrerschmidt)', youtubeId: 'tGDCF575v2o' },
          { titel: 'kgV berechnen mit Primfaktorzerlegung (MathemaTrick)', youtubeId: 'G_2ex4DEaMM' },
        ],
        karten: [
          { text: 'Vielfache sind die Zahlen aus dem Einmaleins. Vielfache von 4: 4, 8, 12, 16, 20, immer plus 4.' },
          { text: '4er-Reihe: 4, 8, 12, 16, 20, 24. 6er-Reihe: 6, 12, 18, 24. Gemeinsame Vielfache, also in beiden: 12 und 24.', visual: 'kgv_reihen' },
          { text: 'kgV = das KLEINSTE gemeinsame Vielfache. Bei 4 und 6 ist das die 12. Merke: kgV = wann treffen sich zwei, die sich wiederholen, zum ersten Mal wieder.' },
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
        emoji: '📝',
        titel: 'Textaufgaben',
        videos: [
          { titel: 'kgV und ggT Textaufgaben (MathemaTrick)', youtubeId: 'S5P7ITOQwL0' },
        ],
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
        id: 'zahlenfolgen',
        emoji: '➡️',
        titel: 'Zahlenfolgen fortführen',
        videos: [],
        karten: [
          { text: 'Schau dir die Folge an: 7, 11, 15, 19, 23, … Bilde die Differenz zwischen den Nachbarzahlen: 11 − 7 = 4, 15 − 11 = 4, 19 − 15 = 4. Hier kommt bei jedem Schritt die gleiche Zahl dazu, nämlich 4. Die nächsten zwei Glieder: 23 + 4 = 27, 27 + 4 = 31.' },
          { text: 'Bei 0.2, 0.6, 1.8, 5.4, … hilft die Differenz nicht weiter (0.6 − 0.2 = 0.4, aber 1.8 − 0.6 = 1.2, das passt nicht). Prüfe stattdessen das Verhältnis: 0.6 : 0.2 = 3, 1.8 : 0.6 = 3, 5.4 : 1.8 = 3. Hier wird mit der gleichen Zahl malgenommen, nämlich mit 3. Die nächsten zwei Glieder: 5.4 · 3 = 16.2, 16.2 · 3 = 48.6.' },
          { text: 'Bei 1, 3, 7, 15, 31, 63, … ist weder die Differenz noch das Verhältnis konstant. Schau genauer hin: 1 · 2 + 1 = 3, 3 · 2 + 1 = 7, 7 · 2 + 1 = 15, 15 · 2 + 1 = 31. Hier verdoppelst du jede Zahl und zählst 1 dazu. Die nächsten zwei Glieder: 63 · 2 + 1 = 127, 127 · 2 + 1 = 255.' },
          { text: 'Bei 3, 4, 7, 11, 18, 29, … bringt weder Differenz noch Verhältnis noch Verdoppeln etwas. Schau dir statt der einzelnen Zahl die beiden Vorgänger an: 3 + 4 = 7, 4 + 7 = 11, 7 + 11 = 18, 11 + 18 = 29. Hier ist jedes Glied die Summe der letzten zwei Glieder, so wie beim Wachstum von Kaninchenpaaren im Fibonacci-Muster, falls du das schon kennst. Die nächsten zwei Glieder: 18 + 29 = 47, 29 + 47 = 76.' },
          { text: 'So findest du das passende Muster: Ist der Unterschied zwischen den Nachbarzahlen immer gleich? Dann wird eine feste Zahl addiert oder subtrahiert. Ist stattdessen das Verhältnis immer gleich? Dann wird mit einer festen Zahl malgenommen. Passt beides nicht, schau dir an, ob ein Glied von den letzten ZWEI Gliedern zusammen abhängt statt nur vom letzten.' },
        ],
        check: [
          { frage: 'Wie geht die Folge weiter? 5, 9, 13, 17, 21, …', optionen: ['23', '24', '25', '26'], richtig: 2, erklaerung: 'Jedes Glied ist um 4 grösser als das vorherige: 21 + 4 = 25.' },
          { frage: 'Wie geht die Folge weiter? 0.5, 1.5, 4.5, 13.5, …', optionen: ['16.5', '27', '40.5', '45'], richtig: 2, erklaerung: 'Jedes Glied wird mit 3 malgenommen: 13.5 · 3 = 40.5.' },
          { frage: 'Wie geht die Folge weiter? 2, 3, 5, 8, 13, 21, …', optionen: ['29', '33', '34', '36'], richtig: 2, erklaerung: 'Jedes Glied ist die Summe der letzten zwei Glieder: 13 + 21 = 34.' },
        ],
      },
      {
        id: 'fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Die 1 ist eine Primzahl. ✅ Nein, sie hat nur einen Teiler. Die erste Primzahl ist die 2.' },
          { text: '❌ Die Quersumme zeigt, ob eine Zahl durch 4 teilbar ist. ✅ Die Quersumme gilt nur für 3 und 9. Bei der 4 prüfst du die letzten zwei Ziffern.' },
          { text: '❌ ggT und kgV vertauscht. ✅ ggT: kleinste Hochzahlen, Ergebnis wird kleiner. kgV: grösste Hochzahlen, Ergebnis wird grösser.' },
          {
            text: 'TEST (Diagramm-Typ, wird wieder entfernt): Dreieck mit Winkelbogen am Punkt C.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'line', x1: 30, y1: 140, x2: 170, y2: 140 },
                { type: 'line', x1: 30, y1: 140, x2: 100, y2: 30 },
                { type: 'line', x1: 170, y1: 140, x2: 100, y2: 30 },
                { type: 'arc', cx: 100, cy: 30, r: 22, startAngle: 57.5, endAngle: 122.5 },
                { type: 'text', x: 100, y: 70, label: 'α', color: 'warn' },
                { type: 'text', x: 100, y: 16, label: 'C' },
                { type: 'text', x: 14, y: 150, label: 'A', anchor: 'start' },
                { type: 'text', x: 186, y: 150, label: 'B', anchor: 'end' },
              ],
            },
          },
          {
            text: 'TEST (Diagramm-Typ, wird wieder entfernt): Kreis mit Winkel am Rand (Punkt P).',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'circle', cx: 100, cy: 85, r: 60 },
                { type: 'line', x1: 100, y1: 145, x2: 43.6, y2: 64.5 },
                { type: 'line', x1: 100, y1: 145, x2: 156.4, y2: 64.5 },
                { type: 'arc', cx: 100, cy: 145, r: 18, startAngle: 305, endAngle: 235 },
                { type: 'text', x: 100, y: 118, label: 'β', color: 'warn' },
                { type: 'text', x: 100, y: 157, label: 'P' },
                { type: 'text', x: 34, y: 60, label: 'Q', anchor: 'end' },
                { type: 'text', x: 166, y: 60, label: 'R', anchor: 'start' },
              ],
            },
          },
          {
            text: 'TEST (Diagramm-Typ, wird wieder entfernt): Würfelnetz mit 6 Flächen.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'rect', x: 20, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 58, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 96, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 134, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 58, y: 24, w: 36, h: 36 },
                { type: 'rect', x: 58, y: 100, w: 36, h: 36 },
                { type: 'text', x: 76, y: 46, label: '1' },
                { type: 'text', x: 38, y: 84, label: '2' },
                { type: 'text', x: 76, y: 84, label: '3' },
                { type: 'text', x: 114, y: 84, label: '4' },
                { type: 'text', x: 152, y: 84, label: '5' },
                { type: 'text', x: 76, y: 122, label: '6' },
              ],
            },
          },
        ],
        check: [],
      },
      {
        id: 'ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 8,
        karten: [
          { text: 'Ist 512 durch 4 teilbar?', loesung: 'Ja. Die letzten zwei Ziffern 12 sind durch 4 teilbar.' },
          { text: 'Primfaktorzerlegung von 30.', loesung: '30 = 2 · 15 = 2 · 3 · 5' },
          { text: 'Eine Glocke läutet alle 15 Minuten, eine andere alle 20. Wann läuten beide wieder gemeinsam?', loesung: 'kgV von 15 = 3 · 5 und 20 = 2² · 5: 2² · 3 · 5 = 4 · 15 = 60. Nach 60 Minuten.' },
          { text: 'ggT und kgV von 18 und 24.', loesung: '18 = 2 · 3², 24 = 2³ · 3. ggT = 2 · 3 = 6. kgV = 2³ · 3² = 72.' },
          { text: 'Welche Zahlen zwischen 20 und 30 sind Primzahlen?', loesung: '23 und 29. Alle anderen haben mehr als zwei Teiler (z. B. 21 = 3 · 7, 27 = 3 · 9).' },
          { text: 'Ist 7245 durch 9 teilbar?', loesung: 'Quersumme 7 + 2 + 4 + 5 = 18. 18 ist durch 9 teilbar, also ja.' },
          { text: 'Ist 1236 durch 6 teilbar?', loesung: 'Gerade, also durch 2 teilbar. Quersumme 1 + 2 + 3 + 6 = 12, durch 3 teilbar. Also ja.' },
          { text: 'Primfaktorzerlegung von 60.', loesung: '60 = 2 · 30 = 2 · 2 · 15 = 2 · 2 · 3 · 5 = 2² · 3 · 5' },
          { text: 'ggT von 30 und 45.', loesung: '30 = 2 · 3 · 5, 45 = 3² · 5. Gemeinsame Faktoren mit kleinerer Hochzahl: 3 · 5 = 15.' },
          { text: 'kgV von 6 und 8.', loesung: '6 = 2 · 3, 8 = 2³. Grössere Hochzahlen: 2³ · 3 = 24.' },
          { text: 'Ein Rechteck 48 cm × 36 cm soll ohne Rest mit möglichst grossen Quadraten ausgelegt werden. Wie lang ist die Quadratseite?', loesung: 'Aufteilen, also ggT: 48 = 2⁴ · 3, 36 = 2² · 3². ggT = 2² · 3 = 12. Die Seite ist 12 cm (4 · 3 = 12 Quadrate).' },
          { text: 'Anna besucht Oma alle 6 Tage, Ben alle 9 Tage. Heute sind beide da. Nach wie vielen Tagen treffen sie sich dort wieder?', loesung: 'Wieder gleichzeitig, also kgV: 6 = 2 · 3, 9 = 3². kgV = 2 · 3² = 18. Nach 18 Tagen.' },
          { text: 'Kürze den Bruch 36/48 mit dem ggT.', loesung: 'ggT von 36 und 48 ist 12. 36 : 12 = 3 und 48 : 12 = 4. Ergebnis: 3/4.' },
          { text: 'Jemand sagt: Der ggT von 8 und 12 ist 24. Was stimmt nicht?', loesung: '8 = 2³, 12 = 2² · 3. Der ggT ist 2² = 4. Die 24 ist das kgV.' },
          { text: 'Führe die Folge fort und nenne die nächsten zwei Glieder: 9, 13, 17, 21, 25, …', loesung: 'Jedes Glied ist um 4 grösser als das vorherige. Die nächsten zwei Glieder: 29, 33.' },
          { text: 'Führe die Folge fort und nenne die nächsten zwei Glieder: 0.3, 0.9, 2.7, 8.1, …', loesung: 'Jedes Glied wird mit 3 malgenommen. Die nächsten zwei Glieder: 24.3, 72.9.' },
          { text: 'Führe die Folge fort und nenne die nächsten zwei Glieder: 4, 9, 19, 39, 79, …', loesung: 'Jedes Glied wird verdoppelt, dann zählst du 1 dazu. Die nächsten zwei Glieder: 159, 319.' },
        ],
        check: [],
      },
    ],
  },
  'Terme & Klammern': {
    titel: 'Terme & Klammern',
    kacheln: [
      {
        id: 'vorzeichen', emoji: '➖', titel: 'Vorzeichen & Klammern', videos: [{ titel: 'Vorzeichen & Klammern (Video 1)', youtubeId: 'yZGfccNtwbI' }, { titel: 'Vorzeichen & Klammern (Video 2)', youtubeId: 'N7xN_OI0nIA' }, { titel: 'Vorzeichen & Klammern (Video 3)', youtubeId: 'xbL27K2Ij4U' }],
        karten: [
          { text: 'Vorzeichen sind die Gegner im Dojo. Wer sie im Griff hat, rechnet fast fehlerfrei. Die Grundregel: Gleiche Zeichen ergeben Plus, verschiedene Zeichen ergeben Minus.' },
          { text: 'Tippe die Regeln an.', visual: 'chips', chips: [
            { n: '(+)·(+)', regel: 'Plus. Beispiel: 3 · 4 = 12.' },
            { n: '(−)·(−)', regel: 'Plus. Beispiel: (−3) · (−4) = 12.' },
            { n: '(−)·(+)', regel: 'Minus. Beispiel: (−3) · 4 = −12.' },
            { n: '−( … )', regel: 'Minus vor einer Klammer dreht alle Zeichen darin um. Beispiel: 10 − (3 − 5) = 10 − 3 + 5 = 12.' },
          ] },
          { text: 'Reihenfolge: Zuerst die Klammern, dann Punkt vor Strich (Mal und Geteilt vor Plus und Minus). Beispiel: 2 + 3 · 4 = 14, aber (2 + 3) · 4 = 20.' },
          { text: 'Klammern setzen heisst: Du musst die Reihenfolge so ändern, dass das Ergebnis stimmt. Beispiel: 3 + 4 · 5 soll 35 ergeben. Dann setzt du (3 + 4) · 5 = 7 · 5 = 35.' },
        ],
        check: [
          { frage: 'Was ist (−6) · (−2)?', optionen: ['−12', '12', '−8', '8'], richtig: 1, erklaerung: 'Minus mal Minus ergibt Plus: 6 · 2 = 12.' },
          { frage: 'Was ist 8 − (5 − 9)?', optionen: ['4', '12', '−6', '22'], richtig: 1, erklaerung: 'Minus vor der Klammer dreht die Zeichen um: 8 − 5 + 9 = 12.' },
          { frage: 'Wo setzt du Klammern, damit 2 + 3 · 4 = 20 stimmt?', optionen: ['2 + (3 · 4)', '(2 + 3) · 4', '2 + 3 · (4)', 'Das geht nicht'], richtig: 1, erklaerung: '(2 + 3) · 4 = 5 · 4 = 20. Bei den anderen Varianten kommt 14 heraus.' },
        ],
      },
      {
        id: 'einsetzen', emoji: '🔤', titel: 'Einsetzen & Zusammenfassen', videos: [{ titel: 'Einsetzen & Zusammenfassen', youtubeId: 'F8UDB8ExLVc' }],
        karten: [
          { text: 'Ein Term ist eine Rechenvorschrift mit einem Platzhalter, zum Beispiel 3a + 2. Einsetzen heisst: Du ersetzt den Platzhalter durch eine Zahl. Für a = 4 gilt 3 · 4 + 2 = 14.' },
          { text: 'Profi-Tipp: Setze die Zahl immer in Klammern ein. Für a = −2 ergibt 3a + 2 den Wert 3 · (−2) + 2 = −6 + 2 = −4. Ohne Klammern passieren Vorzeichenfehler.' },
          { text: 'Zusammenfassen darfst du nur gleichartige Terme, also gleicher Buchstabe mit gleicher Hochzahl. 3a + 5a = 8a. Aber 3a + 4b bleibt stehen, und 2a + 3a² auch, denn a und a² sind verschieden.' },
          { text: 'Ein einzelnes a hat die Zahl 1 vor sich. Darum gilt 7x − 3x + x = 5x. Terme ordnen geht so: Erst jeden Wert ausrechnen, dann der Grösse nach sortieren.' },
        ],
        check: [
          { frage: 'Welchen Wert hat 4x − 3 für x = −2?', optionen: ['−5', '−11', '5', '11'], richtig: 1, erklaerung: '4 · (−2) − 3 = −8 − 3 = −11.' },
          { frage: 'Fasse zusammen: 5a + 3b − 2a + b', optionen: ['3a + 4b', '7a + 4b', '3a + 2b', '8ab'], richtig: 0, erklaerung: 'a-Terme: 5a − 2a = 3a. b-Terme: 3b + b = 4b.' },
          { frage: 'Fasse zusammen: 3x + 2x²', optionen: ['5x²', 'Geht nicht, die Terme sind nicht gleichartig', '5x³', '6x³'], richtig: 1, erklaerung: 'x und x² sind verschieden, wie Äpfel und Birnen.' },
        ],
      },
      {
        id: 'potenzen', emoji: '⚡', titel: 'Potenzen & Wurzeln', videos: [{ titel: 'Potenzen', youtubeId: 'Oo7gFQoG16c' }],
        karten: [
          { text: 'Eine Potenz ist eine Abkürzung fürs Malnehmen: a³ = a · a · a. Die Hochzahl sagt, wie oft die Basis mit sich selbst multipliziert wird. Zum Beispiel 2⁴ = 2 · 2 · 2 · 2 = 16.' },
          { text: 'Tippe die Potenzregeln an.', visual: 'chips', chips: [
            { n: 'a³ · a⁴', regel: 'Gleiche Basis, malnehmen: Hochzahlen addieren. a³ · a⁴ = a⁷.' },
            { n: 'a⁵ : a²', regel: 'Gleiche Basis, teilen: Hochzahlen subtrahieren. a⁵ : a² = a³.' },
            { n: '(a²)³', regel: 'Potenz hoch Zahl: Hochzahlen multiplizieren. (a²)³ = a⁶.' },
            { n: '(5a)²', regel: 'Alles in der Klammer wird quadriert: (5a)² = 25a², nicht 5a².' },
          ] },
          { text: 'Achtung bei Minus: (−3)² = 9, aber −3² = −9. Im zweiten Fall wird nur die 3 quadriert, das Minus bleibt davor.' },
          { text: 'Zehnerpotenzen: 10³ = 1000 und 10⁻² = 0.01. Die wissenschaftliche Schreibweise ist eine Zahl zwischen 1 und 10 mal eine Zehnerpotenz. Beispiele: 4 500 000 = 4.5 · 10⁶ und 0.00032 = 3.2 · 10⁻⁴.' },
          { text: 'Eine Wurzel macht das Quadrieren rückgängig: √16 = 4, weil 4² = 16 ist. Für Terme gilt dasselbe: √(a²) = a. Und eine Wurzel aus einem Produkt darfst du einzeln auf jeden Faktor ziehen: √(a · b) = √a · √b. Zum Beispiel √(9a²) = √9 · √(a²) = 3 · a = 3a.' },
          { text: 'Vereinfache so weit wie möglich: √(a² + 8a²). Zuerst unter der Wurzel zusammenfassen: a² + 8a² = 9a². Dann die Wurzel ziehen: √(9a²) = 3a.' },
          { text: 'Vereinfache so weit wie möglich: √((3y)² − 5y²). Zuerst (3y)² ausrechnen: (3y)² = 9y². Dann unter der Wurzel zusammenfassen: 9y² − 5y² = 4y². Wurzel ziehen: √(4y²) = 2y.' },
          { text: 'Noch kniffliger, wenn mehrere Wurzeln multipliziert werden: (3/5) · √(a/3) · (1/4) · √(4a/3) · √49. Zuerst die Zahlen vor den Wurzeln einzeln multiplizieren: 3/5 · 1/4 · 7 = 21/20. Dann die beiden Wurzelterme zu einer Wurzel zusammenfassen: √(a/3) · √(4a/3) = √(a/3 · 4a/3) = √(4a²/9). Wurzel ziehen: √(4a²/9) = 2a/3. Alles zusammen: 21/20 · 2a/3 = 7a/10.' },
        ],
        check: [
          { frage: 'Was ist a³ · a⁴?', optionen: ['a⁷', 'a¹²', '2a⁷', 'a⁶'], richtig: 0, erklaerung: 'Gleiche Basis, Hochzahlen addieren: 3 + 4 = 7.' },
          { frage: 'Was ist (5a)²?', optionen: ['25a²', '5a²', '10a', '25a'], richtig: 0, erklaerung: '(5a)² = 5a · 5a = 25a². Die 5 wird mit quadriert.' },
          { frage: 'Welche Schreibweise ist die wissenschaftliche für 4 500 000?', optionen: ['4.5 · 10⁵', '4.5 · 10⁶', '45 · 10⁶', '4.5 · 10⁷'], richtig: 1, erklaerung: '4.5 · 1 000 000 = 4 500 000, und 1 000 000 = 10⁶.' },
          { frage: 'Was ist −3²?', optionen: ['9', '−9', '6', '−6'], richtig: 1, erklaerung: 'Nur die 3 wird quadriert: −(3 · 3) = −9.' },
          { frage: 'Vereinfache: √(a² + 3a²)', optionen: ['2a', '4a', '√4a', 'a²'], richtig: 0, erklaerung: 'Erst unter der Wurzel zusammenfassen: a² + 3a² = 4a². Dann die Wurzel ziehen: √(4a²) = 2a.' },
          { frage: 'Vereinfache: √((4y)² − 7y²)', optionen: ['3y', '9y', '3y²', '√9y'], richtig: 0, erklaerung: '(4y)² = 16y². Dann 16y² − 7y² = 9y². Wurzel ziehen: √(9y²) = 3y.' },
          { frage: 'Vereinfache so weit wie möglich: (3/5) · √(a/3) · (1/4) · √(4a/3) · √49', optionen: ['7a/10', '21a/20', '7a/5', '2a/3'], richtig: 0, erklaerung: 'Zahlen vor den Wurzeln: 3/5 · 1/4 · 7 = 21/20. Wurzeln zusammenfassen: √(a/3) · √(4a/3) = √(4a²/9) = 2a/3. Zusammen: 21/20 · 2a/3 = 7a/10.' },
        ],
      },
      {
        id: 'klammern', emoji: '🧮', titel: 'Ausmultiplizieren & Ausklammern', videos: [{ titel: 'Ausmultiplizieren & Ausklammern', youtubeId: 'X5E2bqby8f0' }],
        karten: [
          { text: 'Ausmultiplizieren: Der Faktor vor der Klammer wird mit jedem Summanden in der Klammer multipliziert. 3(a + 4) = 3a + 12. Und 2a(3a − 5) = 6a² − 10a.' },
          { text: 'Steht ein Minus vor der Klammer, dreht es alle Zeichen um: −(x − 2) = −x + 2. Denk an −1 als Faktor vor der Klammer.' },
          { text: 'Ausklammern ist das Rückwärts-Spiel: Du suchst den grössten gemeinsamen Faktor und ziehst ihn vor die Klammer. 6a + 9 = 3(2a + 3). Hier hilft dir der ggT aus dem ersten Thema!' },
          { text: 'Bei Buchstaben nimmst du die kleinste Hochzahl. Beispiel: 10a²b + 15a³b³. Zahlen: ggT(10, 15) = 5. a: kleinste Hochzahl 2. b: kleinste Hochzahl 1. Also 5a²b · (2 + 3ab²).' },
          { text: 'Probe: Multipliziere dein Ergebnis wieder aus. Du musst den ursprünglichen Term erhalten. 5a²b · 2 = 10a²b und 5a²b · 3ab² = 15a³b³. Passt.' },
        ],
        check: [
          { frage: 'Multipliziere aus: 3(2x − 5)', optionen: ['6x − 5', '6x − 15', '5x − 15', '6x + 15'], richtig: 1, erklaerung: '3 · 2x = 6x und 3 · (−5) = −15. Beide Summanden werden mit 3 multipliziert.' },
          { frage: 'Klammere den grössten gemeinsamen Faktor aus: 12a + 18', optionen: ['6(2a + 3)', '3(4a + 6)', '6(2a + 18)', '12(a + 18)'], richtig: 0, erklaerung: 'ggT(12, 18) = 6. Bei 3(4a + 6) steckt noch ein 2 in der Klammer, es ist also nicht vollständig ausgeklammert.' },
          { frage: 'Was ist −(x − 2)?', optionen: ['−x − 2', '−x + 2', 'x − 2', 'x + 2'], richtig: 1, erklaerung: 'Das Minus dreht beide Zeichen um: aus x wird −x und aus −2 wird +2.' },
        ],
      },
      {
        id: 'bruch1', emoji: '🍰', titel: 'Bruchterme: Kürzen & Multiplizieren', videos: [{ titel: 'Bruchterme: Kürzen & Multiplizieren (Video 1)', youtubeId: 'LA3VrJBGyNE' }, { titel: 'Bruchterme: Kürzen & Multiplizieren (Video 2)', youtubeId: 'OuncwqLqdSU' }],
        karten: [
          { text: 'Ein Bruchterm ist ein Bruch mit Buchstaben, zum Beispiel 6a/9. Kürzen funktioniert wie bei Zahlen: Zähler und Nenner durch denselben Faktor teilen. 6a/9 = 2a/3.' },
          { text: 'Mit mehreren Buchstaben kürzt du jeden einzeln. Beispiel: 12a²b / 18ab². Zahlen: 12/18 = 2/3. a²/a = a. b/b² = 1/b. Ergebnis: 2a / 3b.' },
          { text: 'Goldene Regel: Kürzen darfst du nur Faktoren, nie Summanden. (a + 3)/3 ist nicht a. Aber (2a + 4)/(a + 2) geht: Oben 2 ausklammern, 2(a + 2)/(a + 2) = 2. Ausklammern hilft also beim Kürzen!' },
          { text: 'Multiplizieren: Zähler mal Zähler, Nenner mal Nenner. Vorher kürzen spart Arbeit. 2a/3 · 9/(4a²): 9 und 3 geben 3, 2 und 4 geben 1/2, a und a² geben 1/a. Ergebnis: 3/(2a).' },
        ],
        check: [
          { frage: 'Kürze 12a/18.', optionen: ['2a/3', '2/3', 'Man kann nicht kürzen', 'a/6'], richtig: 0, erklaerung: 'Zahlen durch 6 teilen: 12/18 = 2/3, das a bleibt oben.' },
          { frage: 'Kürze (4a + 8)/(a + 2).', optionen: ['4', '4a', '4a + 4', 'Man kann nichts kürzen'], richtig: 0, erklaerung: 'Oben 4 ausklammern: 4(a + 2)/(a + 2) = 4.' },
          { frage: 'Was ist 3/a · a²/6?', optionen: ['a/2', 'a²/2', '1/2', '3a/2'], richtig: 0, erklaerung: '3a²/(6a): 3/6 = 1/2 und a²/a = a. Ergebnis a/2.' },
        ],
      },
      {
        id: 'bruch2', emoji: '🍕', titel: 'Bruchterme: Dividieren & Addieren', videos: [{ titel: 'Bruchterme: Dividieren & Addieren', youtubeId: 'qH8gLQuOG_k' }],
        karten: [
          { text: 'Dividieren: Teilen durch einen Bruch heisst malnehmen mit dem Kehrbruch (Zähler und Nenner vertauschen). (2a/5) : (4/15) = 2a/5 · 15/4 = 30a/20 = 3a/2.' },
          { text: 'Manchmal kürzt sich der Buchstabe ganz weg: (a/3) : (a/6) = a/3 · 6/a = 6/3 = 2.' },
          { text: 'Addieren und Subtrahieren: Brüche brauchen einen gemeinsamen Nenner, den Hauptnenner. Das ist das kgV aus dem ersten Thema! a/3 + a/4 = 4a/12 + 3a/12 = 7a/12.' },
          { text: 'Mit zwei Buchstaben im Nenner multiplizierst du kreuzweise: 1/a + 1/b = b/(ab) + a/(ab) = (a + b)/(ab). Nie die Nenner addieren: 1/3 + 1/4 ist nicht 2/7.' },
          { text: 'Falle beim Minus: Setze den ganzen Zähler in Klammern. a/2 − (a − 1)/3 = 3a/6 − 2(a − 1)/6 = (3a − 2a + 2)/6 = (a + 2)/6.' },
        ],
        check: [
          { frage: 'Was ist (a/3) : (a/6)?', optionen: ['2', '1/2', 'a/18', 'a²/18'], richtig: 0, erklaerung: 'Kehrbruch: a/3 · 6/a = 6a/(3a) = 2.' },
          { frage: 'Was ist a/3 + a/4?', optionen: ['7a/12', '2a/7', 'a/12', '2a/12'], richtig: 0, erklaerung: 'Hauptnenner 12: 4a/12 + 3a/12 = 7a/12.' },
          { frage: 'Was ist 1/a + 1/b?', optionen: ['(a + b)/(ab)', '2/(a + b)', '1/(ab)', '2/(ab)'], richtig: 0, erklaerung: 'Hauptnenner ab: b/(ab) + a/(ab) = (a + b)/(ab).' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ −3² = 9. ✅ −3² = −9, denn nur die 3 wird quadriert. Erst (−3)² ergibt 9.' },
          { text: '❌ 2a + 3a = 5a². ✅ 2a + 3a = 5a. Beim Addieren bleibt der Buchstabe gleich, nur die Zahlen werden addiert.' },
          { text: '❌ (5a)² = 5a². ✅ (5a)² = 25a². Die 5 wird mit quadriert.' },
          { text: '❌ a³ · a² = a⁶. ✅ a³ · a² = a⁵. Beim Malnehmen werden die Hochzahlen addiert, nicht multipliziert.' },
          { text: '❌ (a + 3)/3 = a. ✅ Nur Faktoren dürfen gekürzt werden, nicht Summanden. Richtig: (a + 3)/3 = a/3 + 1.' },
          { text: '❌ 5 − (x − 2) = 5 − x − 2. ✅ 5 − (x − 2) = 5 − x + 2 = 7 − x. Das Minus dreht beide Zeichen um.' },
          { text: '❌ 1/3 + 1/4 = 2/7. ✅ Brüche nie über die Nenner addieren. Hauptnenner 12: 4/12 + 3/12 = 7/12.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Berechne: 12 − (7 − 10)', loesung: 'Klammer zuerst: 7 − 10 = −3. Dann 12 − (−3) = 12 + 3 = 15.' },
          { text: 'Welchen Wert hat 3a² − 2a für a = −2?', loesung: '3 · (−2)² − 2 · (−2) = 3 · 4 + 4 = 12 + 4 = 16.' },
          { text: 'Fasse zusammen: 7x − 3y + 2x + 5y', loesung: 'x-Terme: 7x + 2x = 9x. y-Terme: −3y + 5y = 2y. Ergebnis: 9x + 2y.' },
          { text: 'Ordne die Terme 2a + 1, a² und 3a − 1 für a = 3 der Grösse nach, kleinster zuerst.', loesung: 'Für a = 3: 2a + 1 = 7, a² = 9, 3a − 1 = 8. Reihenfolge: 2a + 1, 3a − 1, a².' },
          { text: 'Vereinfache: a⁵ · a³ : a²', loesung: 'Zuerst a⁵ · a³ = a⁸, dann a⁸ : a² = a⁶.' },
          { text: 'Schreibe 0.00032 in wissenschaftlicher Schreibweise.', loesung: '0.00032 = 3.2 · 10⁻⁴. Das Komma wandert um 4 Stellen nach rechts.' },
          { text: 'Multipliziere aus: 2a(3a − 5)', loesung: '2a · 3a = 6a² und 2a · (−5) = −10a. Ergebnis: 6a² − 10a.' },
          { text: 'Klammere aus: 10a²b + 15a³b³', loesung: 'ggT(10, 15) = 5, a²: kleinste Hochzahl 2, b: kleinste Hochzahl 1. Ergebnis: 5a²b(2 + 3ab²).' },
          { text: 'Klammere aus: 4a²b + 6ab²', loesung: 'Zahlen: ggT(4, 6) = 2. a: Hochzahl 1, b: Hochzahl 1. Ergebnis: 2ab(2a + 3b). Probe: 2ab · 2a = 4a²b und 2ab · 3b = 6ab².' },
          { text: 'Kürze: 12a²b / 18ab²', loesung: '12/18 = 2/3, a²/a = a, b/b² = 1/b. Ergebnis: 2a / 3b.' },
          { text: 'Kürze: (3a + 6)/(a + 2)', loesung: 'Oben 3 ausklammern: 3(a + 2)/(a + 2) = 3.' },
          { text: 'Multipliziere: 2a/3 · 9/(4a²)', loesung: 'Zähler: 2a · 9 = 18a. Nenner: 3 · 4a² = 12a². 18a/(12a²) = 3/(2a).' },
          { text: 'Berechne: (2a/5) : (4/15)', loesung: 'Kehrbruch: 2a/5 · 15/4 = 30a/20 = 3a/2.' },
          { text: 'Fasse zusammen: a/2 − (a − 1)/3', loesung: 'Hauptnenner 6: 3a/6 − 2(a − 1)/6 = (3a − 2a + 2)/6 = (a + 2)/6.' },
        ],
        check: [],
      },
    ],
  },
  'Gleichungen': {
    titel: 'Gleichungen',
    kacheln: [
      {
        id: 'grundidee', emoji: '🎯', titel: 'Grundidee', videos: [],
        karten: [
          { text: 'Eine Gleichung ist wie eine Waage im Gleichgewicht. Beide Seiten müssen gleich schwer bleiben: Tust du auf der einen Seite etwas (z. B. 3 wegnehmen), musst du dasselbe auf der anderen Seite tun, sonst kippt die Waage.' },
          {
            text: 'Was darfst du mit einer Gleichung tun? Tippe an.',
            visual: 'chips',
            chips: [
              { n: '+', regel: 'Auf beiden Seiten dieselbe Zahl addieren. Die Waage bleibt im Gleichgewicht.' },
              { n: '−', regel: 'Auf beiden Seiten dieselbe Zahl subtrahieren.' },
              { n: '·', regel: 'Beide Seiten mit derselben Zahl multiplizieren (nicht mit 0).' },
              { n: ':', regel: 'Beide Seiten durch dieselbe Zahl teilen (nicht durch 0).' },
            ],
          },
          { text: 'Profi-Tipp: Rechne immer so, dass auf einer Seite nur noch x übrig bleibt. Frag dich bei jedem Schritt: Was muss ich wegmachen, um näher an "x = ..." zu kommen?' },
          { text: 'Löse 2x + 3 = 3 Schritt für Schritt.\n2x + 3 = 3\n| −3 auf beiden Seiten: 2x = 0\n| :2 auf beiden Seiten: x = 0' },
          { text: 'Probe: Setze x = 0 in die ursprüngliche Gleichung ein: 2 · 0 + 3 = 3. Das stimmt, also ist x = 0 richtig.' },
        ],
        check: [
          { frage: 'Löse: x + 7 = 12', optionen: ['5', '19', '−5', '12/7'], richtig: 0, erklaerung: 'Auf beiden Seiten 7 subtrahieren: x = 12 − 7 = 5. Bei 19 wurde addiert statt subtrahiert, bei −5 wurde das Vorzeichen falsch gedreht.' },
          { frage: 'Löse: 3x = 15', optionen: ['5', '45', '12', '18'], richtig: 0, erklaerung: 'Beide Seiten durch 3 teilen: x = 15 : 3 = 5. Bei 45 wurde mit 3 multipliziert statt dividiert, bei 12 und 18 wurde addiert oder subtrahiert statt dividiert.' },
          { frage: 'Löse: 4x − 5 = 11', optionen: ['4', '1.5', '16', '2.75'], richtig: 0, erklaerung: 'Erst +5 auf beiden Seiten: 4x = 16. Dann :4: x = 4. Bei 16 wurde nur addiert, aber nicht mehr durch 4 geteilt. Bei 1.5 wurde die 5 nochmals abgezogen statt addiert.' },
        ],
      },
      {
        id: 'klammern', emoji: '➖', titel: 'Klammern auflösen', videos: [],
        karten: [
          { text: 'Stell dir vor, du verteilst Süssigkeiten an 3 Gruppen mit je (x + 2) Stück. Das sind 3 · (x + 2) Stück insgesamt - die 3 muss an jeden Teil in der Klammer verteilt werden, nicht nur an den ersten.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'a(b+c)', regel: 'Jeden Summanden in der Klammer mit a multiplizieren: a · b + a · c.' },
              { n: 'a(b−c)', regel: 'a · b − a · c.' },
              { n: '−(b−c)', regel: 'Minus vor der Klammer dreht alle Zeichen um: −b + c.' },
              { n: 'verschachtelt', regel: 'Klammern in Klammern löst du von innen nach aussen auf.' },
            ],
          },
          { text: 'Profi-Tipp: Schreib dir bei einer Minusklammer immer −1 davor, dann siehst du es genau: −1 · (x − 5) = −x + 5. So vergisst du kein Vorzeichen.' },
          { text: 'x − 5 − (5 − x) = 0\n| Klammer auflösen, Minus dreht die Zeichen: x − 5 − 5 + x = 0\n| Zusammenfassen: 2x − 10 = 0\n| +10: 2x = 10\n| :2: x = 5' },
          { text: 'Probe: x = 5 einsetzen: 5 − 5 − (5 − 5) = 0 − 0 = 0. Stimmt!' },
          { text: 'Verschachtelte Klammern von innen nach aussen: 6 · (2 · (x + 1/4)) = 9 · (4x − 1)\n| Innere Klammer zuerst: 2 · (x + 1/4) = 2x + 1/2\n| Jetzt die äussere: 6 · (2x + 1/2) = 12x + 3\n| Rechte Seite ausmultiplizieren: 9 · (4x − 1) = 36x − 9\n| Gleichung: 12x + 3 = 36x − 9\n| −12x: 3 = 24x − 9\n| +9: 12 = 24x\n| :24: x = 1/2' },
        ],
        check: [
          { frage: 'Löse: 2(x + 3) = 10', optionen: ['2', '3.5', '8', '5'], richtig: 0, erklaerung: 'Richtig: 2x + 6 = 10, also 2x = 4, also x = 2. Bei 3.5 wurde die 3 in der Klammer nicht mit 2 multipliziert (2x + 3 = 10). Bei 8 wurde die 6 addiert statt subtrahiert. Bei 5 wurde nach x + 3 = 5 die 3 vergessen.' },
          { frage: 'Was ist −(x − 5)?', optionen: ['−x + 5', '−x − 5', 'x − 5', 'x + 5'], richtig: 0, erklaerung: 'Das Minus vor der Klammer dreht beide Zeichen um: aus x wird −x, aus −5 wird +5. Bei −x − 5 wurde nur ein Zeichen gedreht, bei x − 5 wurde das Minus ganz vergessen.' },
          { frage: 'Löse: −3(x + 7) = 7(x − 3)', optionen: ['0', '2.8', '−4.2', '4.2'], richtig: 0, erklaerung: 'Richtig ausmultipliziert: −3x − 21 = 7x − 21, die −21 heben sich weg, also −10x = 0, x = 0. Bei 2.8 wurde die Klammer links falsch aufgelöst (−3x + 7 statt −3x − 21), bei −4.2 wurde beim Ausmultiplizieren rechts ein Vorzeichen falsch gesetzt.' },
        ],
      },
      {
        id: 'xverschieben', emoji: '🔀', titel: 'x verschieben', videos: [],
        karten: [
          { text: 'x sammeln ist wie Freunde zu einer Gruppe einladen: Du willst alle x-Freunde auf eine Seite der Waage holen, und alle Zahlen auf die andere.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'x auf beiden Seiten', regel: 'Bring alle x-Terme auf eine Seite, indem du den kleineren x-Term abziehst.' },
              { n: 'x im Nenner', regel: 'Bei a/x wird x erst durch Multiplizieren mit x aus dem Nenner entfernt. x darf dabei nicht 0 sein.' },
              { n: 'keine Lösung', regel: 'Bleibt am Ende ein falscher Satz wie 15 = 20 stehen, gibt es keine Lösung.' },
              { n: 'x = 0', regel: '0 ist eine ganz normale Lösung, kein Fehler.' },
            ],
          },
          { text: 'Profi-Tipp: Bring immer den kleineren x-Term auf die andere Seite, dann bleibt die Zahl vor x positiv und du rechnest dich seltener in Vorzeichenfehler.' },
          { text: '8/x + 7/x = 5\n| Gleichartige Brüche zusammenfassen: 15/x = 5\n| Mit x multiplizieren: 15 = 5x\n| :5: x = 3\n\nProbe: 8/3 + 7/3 = 15/3 = 5. Stimmt!' },
          { text: 'Sonderfall "keine Lösung": 3(4x + 5) = 4(3x + 5) ergibt 12x + 15 = 12x + 20. Zieht man 12x auf beiden Seiten ab, bleibt 15 = 20 stehen - das ist nie wahr. Diese Gleichung hat keine Lösung.' },
          { text: 'Sonderfall "x = 0": 5/2 · x + 0.5 = 15/2 − 7 ergibt nach dem Umformen x = 0. Das ist eine gültige Lösung, kein Rechenfehler!' },
        ],
        check: [
          { frage: 'Löse: 5x + 2 = 2x + 11', optionen: ['3', '13/3', '9', '−3'], richtig: 0, erklaerung: '2x von beiden Seiten abziehen: 3x + 2 = 11, dann −2: 3x = 9, dann :3: x = 3. Bei 9 wurde die Division durch 3 vergessen, bei 13/3 wurde beim Verschieben ein Vorzeichen falsch gesetzt.' },
          { frage: 'Löse: 6/x = 2', optionen: ['3', '12', '1/3', '4'], richtig: 0, erklaerung: '6 = 2x (beide Seiten mit x multiplizieren), dann :2: x = 3. Bei 12 wurde 6 mit 2 multipliziert statt durch 2 geteilt, bei 1/3 wurde der Bruch verkehrt gebildet.' },
          { frage: 'Du erhältst nach dem Umformen 15 = 20. Was bedeutet das?', optionen: ['Die Gleichung hat keine Lösung', 'x = 0', 'x = 15', 'x = 5'], richtig: 0, erklaerung: '15 = 20 ist nie wahr, egal welchen Wert x hat. Das heisst: keine Lösung. x = 0 wäre es nur, wenn am Ende z. B. 0 = 0 stehen würde.' },
        ],
      },
      {
        id: 'brueche', emoji: '🍰', titel: 'Brüche vor x', videos: [],
        karten: [
          { text: 'Stell dir vor, x ist eine Pizza. 1/2 x und 1/4 x sind Stücke mit x als Grösse - um sie zusammenzuzählen, brauchen die Brüche vor dem x denselben Nenner, genau wie bei normaler Bruchrechnung.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'gleicher Nenner', regel: 'Zähler einfach addieren: 1/8x + 3/8x = 4/8x.' },
              { n: 'verschiedener Nenner', regel: 'Erst auf den Hauptnenner (kgV der Nenner) bringen, dann addieren.' },
              { n: 'Dezimalzahl', regel: '0.5 ist dasselbe wie 1/2 - du kannst zwischen beiden Schreibweisen wechseln.' },
              { n: 'kürzen', regel: 'Den Bruch vor x am Schluss so weit wie möglich kürzen.' },
            ],
          },
          { text: 'Profi-Tipp: Schreib dir den Hauptnenner klein daneben, bevor du die Brüche umwandelst. So verrechnest du dich seltener.' },
          { text: '1/2x + 1/4x + 1/8x = 14\n| Hauptnenner 8: 4/8x + 2/8x + 1/8x = 14\n| Zusammenfassen: 7/8x = 14\n| Mit 8/7 multiplizieren: x = 14 · 8/7\n| Kürzen: x = 16\n\nProbe: 1/2 · 16 + 1/4 · 16 + 1/8 · 16 = 8 + 4 + 2 = 14. Stimmt!' },
          { text: 'Schwieriger: 15/7 x − 3/7 x = 1/2 x + 3\n| Linke Seite zusammenfassen: 12/7 x = 1/2 x + 3\n| 1/2x abziehen, Hauptnenner 14: 24/14x − 7/14x = 3\n| Zusammenfassen: 17/14 x = 3\n| x = 3 · 14/17 = 42/17' },
        ],
        check: [
          { frage: 'Fasse zusammen: 1/3x + 1/6x', optionen: ['1/2 x', '2/9 x', '2/18 x', '1/3 x'], richtig: 0, erklaerung: 'Hauptnenner ist 6 (kgV von 3 und 6): 1/3x = 2/6x, zusammen mit 1/6x ergibt das 3/6x = 1/2x. Bei 2/9x wurden die Nenner addiert statt das kgV gesucht, bei 2/18x wurden die Nenner multipliziert.' },
          { frage: 'Löse: 3/5x = 12', optionen: ['20', '7.2', '4', '36'], richtig: 0, erklaerung: 'Mit dem Kehrbruch 5/3 multiplizieren: x = 12 · 5/3 = 20. Bei 7.2 wurde mit 3/5 multipliziert statt mit dem Kehrbruch 5/3.' },
          { frage: 'Fasse zusammen: 2/3x + 1/3x − x', optionen: ['0', 'x', '2x', '1/3x'], richtig: 0, erklaerung: '2/3x + 1/3x ergibt x, und x − x = 0. Das Ergebnis ist die Zahl 0, nicht mehr ein x-Term - das ist kein Fehler, nur ungewohnt.' },
        ],
      },
      {
        id: 'bruchgl', emoji: '🍕', titel: 'Bruchgleichungen', videos: [],
        karten: [
          { text: 'Eine Bruchgleichung hat Brüche mit x im Zähler oder Nenner auf beiden Seiten. Am einfachsten lässt du die Brüche ganz verschwinden, indem du mit dem Hauptnenner multiplizierst - wie wenn du Pizzastücke erst alle gleich gross machst und dann vergleichst.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'Hauptnenner finden', regel: 'Das kgV aller Nenner in der Gleichung.' },
              { n: 'mal Hauptnenner', regel: 'Jeden Term - auch die ohne Bruch! - mit dem Hauptnenner multiplizieren.' },
              { n: 'kürzen', regel: 'Nach dem Multiplizieren kürzt sich jeder Nenner weg.' },
              { n: 'Probe', regel: 'Am Schluss immer die Lösung einsetzen und nachrechnen.' },
            ],
          },
          { text: 'Profi-Tipp: Vergiss die Terme ohne Bruch nicht! Auch eine einzelne Zahl ohne Bruch muss mit dem Hauptnenner multipliziert werden, sonst stimmt die Gleichung nicht mehr.' },
          { text: '(x + 1)/2 = (2x − 3)/3\n| Hauptnenner 6, beide Seiten mal 6: 6 · (x+1)/2 = 6 · (2x−3)/3\n| Kürzen: 3(x + 1) = 2(2x − 3)\n| Ausmultiplizieren: 3x + 3 = 4x − 6\n| −3x: 3 = x − 6\n| +6: x = 9\n\nProbe: (9+1)/2 = 5 und (2·9−3)/3 = 15/3 = 5. Stimmt!' },
          { text: 'Schwieriger, mit Klammer und Hauptnenner 22: 6/11(x − 3) + 2 = 1 − 1/22(10x + 3)\n| Alles mal 22: 12(x − 3) + 44 = 22 − (10x + 3)\n| Ausmultiplizieren: 12x − 36 + 44 = 22 − 10x − 3\n| Zusammenfassen: 12x + 8 = 19 − 10x\n| +10x: 22x + 8 = 19\n| −8: 22x = 11\n| :22: x = 1/2' },
        ],
        check: [
          { frage: 'Was ist der Hauptnenner von x/4 + x/6 = 5?', optionen: ['12', '24', '10', '6'], richtig: 0, erklaerung: 'Das kgV von 4 und 6 ist 12 (4 · 3 = 6 · 2 = 12). 24 ist zwar auch ein gemeinsamer Nenner (4 · 6), aber nicht der kleinste. Bei 10 wurden die Nenner addiert, das ist bei Nennern nie erlaubt.' },
          { frage: 'Löse: x/3 = 2/5', optionen: ['6/5', '15/2', '2/5', '5/6'], richtig: 0, erklaerung: 'Über Kreuz multiplizieren: x · 5 = 3 · 2, also x = 6/5. Bei 15/2 wurden die Zahlen beim Kreuz-multiplizieren falsch zugeordnet (x · 2 = 3 · 5). Bei 2/5 wurde die 3 gar nicht beachtet.' },
          { frage: 'Löse: (x − 2)/4 = 3', optionen: ['14', '12', '2.75', '6'], richtig: 0, erklaerung: 'Beide Seiten mit 4 multiplizieren: x − 2 = 12. Dann +2: x = 14. Bei 12 wurde das +2 am Schluss vergessen. Bei 2.75 wurde durch 4 geteilt statt multipliziert.' },
        ],
      },
      {
        id: 'text', emoji: '📝', titel: 'Textaufgaben', videos: [],
        karten: [
          { text: 'Bei Textaufgaben steckt die Gleichung im Satz versteckt. Nenn die gesuchte Zahl x und übersetze den Satz Stück für Stück in Rechenzeichen.' },
          {
            text: 'Tippe die Signalwörter an.',
            visual: 'chips',
            chips: [
              { n: 'das Doppelte', regel: '2 · x oder 2x.' },
              { n: 'um … vergrössert', regel: '+ … am Ende dazu.' },
              { n: 'um … verkleinert', regel: '− … am Ende weg.' },
              { n: 'gleich viel wie', regel: 'Das Gleichheitszeichen =.' },
            ],
          },
          { text: 'Profi-Tipp: Lies den Satz zweimal. Beim ersten Mal verstehst du, worum es geht. Beim zweiten Mal übersetzt du jedes Wort einzeln in ein Rechenzeichen.' },
          { text: '"Das Sechsfache einer Zahl, verkleinert um 22, ist gleich viel wie das Vierfache, vergrössert um 24."\n| Gesuchte Zahl: x\n| Sechsfache, verkleinert um 22: 6x − 22\n| Vierfache, vergrössert um 24: 4x + 24\n| Gleichung: 6x − 22 = 4x + 24\n| −4x: 2x − 22 = 24\n| +22: 2x = 46\n| :2: x = 23\n\nProbe: 6 · 23 − 22 = 116, und 4 · 23 + 24 = 116. Stimmt!' },
          { text: '"Die Summe einer Zahl und ihres Dreifachen ist 48."\n| Gesuchte Zahl: x\n| Die Zahl und ihr Dreifaches: x + 3x\n| Gleichung: x + 3x = 48\n| Zusammenfassen: 4x = 48\n| :4: x = 12\n\nProbe: 12 + 3 · 12 = 12 + 36 = 48. Stimmt!' },
        ],
        check: [
          { frage: '"Das Doppelte einer Zahl, vermindert um 9, ist gleich viel wie die Zahl selbst, vermehrt um 15." Wie lautet die Zahl?', optionen: ['24', '−6', '33', '6'], richtig: 0, erklaerung: 'Die Gleichung lautet 2x − 9 = x + 15 (keine Klammer um x − 9). Daraus folgt x = 24. Bei 33 wurde fälschlich "2 mal (x − 9)" übersetzt, bei −6 wurde "vermehrt um 15" als Minus gelesen.' },
          { frage: 'Welche Gleichung passt zu: "Das Vierfache einer Zahl ist um 5 grösser als die Zahl selbst."?', optionen: ['4x = x + 5', '4x = x − 5', '4(x+5) = x', 'x = 4x + 5'], richtig: 0, erklaerung: '"Ist um 5 grösser als" heisst: + 5 auf der kleineren Seite. Das Vierfache (4x) ist gleich der Zahl selbst (x) plus 5.' },
          { frage: 'Löse: "Die Summe einer Zahl und ihres Doppelten ist 36."', optionen: ['12', '18', '9', '24'], richtig: 0, erklaerung: 'Die Zahl und ihr Doppeltes: x + 2x = 3x = 36, also x = 12. Bei 18 wurde nur 2x = 36 gerechnet, das einzelne x wurde vergessen.' },
        ],
      },
      {
        id: 'formelumstellung', emoji: '🔧', titel: 'Formeln umstellen', videos: [],
        karten: [
          { text: 'Manchmal sollst du eine Formel nicht nach x, sondern nach einem anderen Buchstaben auflösen - zum Beispiel nach b, v oder d. Das funktioniert genau gleich wie bei einer normalen Gleichung: Du behandelst alle anderen Buchstaben wie ganz normale Zahlen und wendest dieselben Waage-Regeln an (+, −, ·, :). Profi-Tipp: Markiere dir zuerst, nach welchem Buchstaben du auflösen sollst, und rechne Schritt für Schritt, bis genau dieser Buchstabe allein auf einer Seite steht.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'andere Buchstaben = Zahlen', regel: 'Alle Buchstaben ausser der gesuchten Variable behandelst du wie bekannte Zahlen.' },
              { n: 'mehrere Faktoren', regel: 'Steht die gesuchte Variable mit mehreren anderen Buchstaben multipliziert, teilst du am Schluss durch ALLE diese Faktoren auf einmal.' },
              { n: 'unter der Wurzel', regel: 'Steht die Variable unter einer Wurzel, quadrierst du zuerst beide Seiten, um die Wurzel wegzubekommen.' },
              { n: 'nur + sinnvoll', regel: 'Bei Längen wie einem Durchmesser ist nur die positive Lösung einer Wurzel sinnvoll, auch wenn mathematisch ± möglich wäre.' },
            ],
          },
          { text: 'Löse A = (b · r) / 2 nach b auf. (A = Fläche, b = Grundseite, r = Höhe eines Dreiecks)\nA = (b · r) / 2\n| ·2 auf beiden Seiten: 2A = b · r\n| :r auf beiden Seiten: 2A / r = b\n\nb = 2A / r' },
          { text: 'Löse a = (m · z + m · x) / 2 nach m auf. Hier steht m in zwei Summanden - zuerst musst du m ausklammern, bevor du teilen kannst.\na = (m · z + m · x) / 2\n| ·2 auf beiden Seiten: 2a = m · z + m · x\n| m ausklammern: 2a = m · (z + x)\n| :(z + x) auf beiden Seiten: 2a / (z + x) = m\n\nm = 2a / (z + x)' },
          { text: 'Löse A = (π/4) · (D² − d²) nach d auf. (A = Fläche eines Kreisrings, D = äusserer, d = innerer Durchmesser)\nA = (π/4) · (D² − d²)\n| ·4 auf beiden Seiten: 4A = π · (D² − d²)\n| :π auf beiden Seiten: 4A/π = D² − d²\n| D² auf die andere Seite: d² = D² − 4A/π\n| Wurzel ziehen: d = √(D² − 4A/π)\n\nNur die positive Wurzel ist sinnvoll, weil d eine Länge ist.' },
        ],
        check: [
          { frage: 'Löse n = v / (d · π) nach v auf. Was ist richtig?', optionen: ['v = n · d · π', 'v = n / (d · π)', 'v = n · d', 'v = n · π / d'], richtig: 0, erklaerung: 'Beide Seiten mit (d · π) multiplizieren: v = n · d · π. Bei "v = n / (d·π)" wurde gar nicht umgestellt, bei "v = n · d" wurde der Faktor π vergessen.' },
          { frage: 'Löse A = (b · r) / 2 nach r auf. Was ist richtig?', optionen: ['r = 2A / b', 'r = A / (2b)', 'r = 2A · b', 'r = A/2 · b'], richtig: 0, erklaerung: 'Erst ·2 auf beiden Seiten: 2A = b · r, dann :b: r = 2A / b. Bei "r = A / (2b)" wurde direkt durch 2b geteilt, statt zuerst mit 2 zu multiplizieren - das ergibt ein falsches Ergebnis.' },
          { frage: 'Du stellst A = (π/4)(D² − d²) nach d um und erhältst d² = D² − 4A/π. Wie geht es weiter?', optionen: ['d = √(D² − 4A/π), nur die positive Lösung ist sinnvoll', 'd = ±√(D² − 4A/π), beide Lösungen eintragen', 'd = (D² − 4A/π) / 2', 'd = √D² − √(4A/π)'], richtig: 0, erklaerung: 'Mathematisch gäbe es + und −, aber da d ein Durchmesser - also eine Länge - ist, ist nur die positive Lösung sinnvoll. Bei "d = (D² − 4A/π) / 2" wurde durch 2 geteilt statt die Wurzel gezogen. Bei "√D² − √(4A/π)" wurde die Wurzel fälschlich auf jeden Summanden einzeln angewendet - das ist nicht erlaubt.' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ −(x − 5) = −x − 5. ✅ Das Minus dreht beide Zeichen um: −(x − 5) = −x + 5.' },
          { text: '❌ 3(x + 4) = 3x + 4. ✅ Der Faktor muss mit JEDEM Summanden multipliziert werden: 3(x + 4) = 3x + 12.' },
          { text: '❌ Bei x + 5 = 10 wird links −5 gerechnet, aber rechts vergessen: x = 10. ✅ Was du links tust, musst du auch rechts tun: x + 5 − 5 = 10 − 5, also x = 5.' },
          { text: '❌ Bei x/2 + 3 = 7 wird nur der Bruch mit 2 multipliziert: x + 3 = 7. ✅ Auch Terme ohne Bruch werden mit dem Hauptnenner multipliziert: x + 6 = 14.' },
          { text: '❌ Bei 5/x = 0 wird einfach x = 0 eingesetzt. ✅ x darf bei einem Nenner nie 0 sein, Teilen durch 0 ist nicht erlaubt. Solche Lösungen fallen weg.' },
          { text: '❌ Am Ende steht 8 = 12, also ist x = 0. ✅ 8 = 12 ist nie wahr, egal welchen Wert x hat - das heisst, die Gleichung hat keine Lösung. x = 0 wäre nur richtig, wenn sich x = 0 sauber aus der Gleichung ergibt, nicht bei einem falschen Satz wie 8 = 12.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Löse: 3x + 4 = 19', loesung: '3x = 15 (−4 auf beiden Seiten). x = 5 (:3).' },
          { text: 'Löse: 7 − 2x = 1', loesung: '−2x = −6 (−7 auf beiden Seiten). x = 3 (:−2).' },
          { text: 'Löse: 2(x − 3) = 4', loesung: '2x − 6 = 4 (ausmultiplizieren). 2x = 10 (+6). x = 5 (:2).' },
          { text: 'Löse: 10 − (x + 2) = 1', loesung: 'Klammer auflösen: 10 − x − 2 = 1, also 8 − x = 1. x = 7 (8 − 1).' },
          { text: 'Löse: 4(x + 1) = 2(x + 9)', loesung: '4x + 4 = 2x + 18 (beide Seiten ausmultiplizieren). 2x = 14 (−2x, −4). x = 7 (:2).' },
          { text: 'Löse: 5x − 3 = 2x + 18', loesung: '3x = 21 (−2x, +3 auf beiden Seiten). x = 7 (:3).' },
          { text: 'Löse: 12/x = 4', loesung: '12 = 4x (mit x multiplizieren). x = 3 (:4).' },
          { text: 'Löse: 2(5x + 3) = 5(2x + 1)', loesung: '10x + 6 = 10x + 5 (ausmultiplizieren). Zieht man 10x ab, bleibt 6 = 5 stehen - das ist falsch. Keine Lösung.' },
          { text: 'Löse: 3/4x + 1/8x = 7', loesung: 'Hauptnenner 8: 6/8x + 1/8x = 7, also 7/8x = 7. x = 8 (mit 8/7 multiplizieren).' },
          { text: 'Löse: 2/3x − 1/6x = 3/2', loesung: 'Hauptnenner 6: 4/6x − 1/6x = 3/2, also 1/2x = 3/2. x = 3 (mit 2 multiplizieren).' },
          { text: 'Löse: (x + 3)/4 = (x − 1)/2', loesung: 'Über Kreuz: 2(x + 3) = 4(x − 1). 2x + 6 = 4x − 4. 10 = 2x (+4, −2x). x = 5 (:2).' },
          { text: 'Löse: 5/6(x − 2) + 1 = 2 − 1/3(x + 1)', loesung: 'Hauptnenner 6, alles mal 6: 5(x − 2) + 6 = 12 − 2(x + 1). Ausmultiplizieren: 5x − 10 + 6 = 12 − 2x − 2, also 5x − 4 = 10 − 2x. 7x = 14 (+2x, +4). x = 2 (:7).' },
          { text: 'Löse: "Das Fünffache einer Zahl, vergrössert um 6, ist gleich viel wie das Dreifache, vermindert um 8."', loesung: 'Gleichung: 5x + 6 = 3x − 8. 2x = −14 (−3x, −6). x = −7 (:2).' },
          { text: 'Löse: "Die Summe einer Zahl und ihres Vierfachen ist 40."', loesung: 'Gleichung: x + 4x = 40, also 5x = 40. x = 8 (:5).' },
          { text: 'Löse: 1/2(x + 4) = 3/4(x − 2)', loesung: 'Hauptnenner 4, alles mal 4: 2(x + 4) = 3(x − 2). Ausmultiplizieren: 2x + 8 = 3x − 6. 14 = x (8 + 6 auf eine Seite, x-Terme auf die andere). x = 14.' },
          { text: 'Löse: 2/5(3x − 1) − x/2 = 1 − 1/10(x + 4)', loesung: 'Hauptnenner 10, alles mal 10: 4(3x − 1) − 5x = 10 − (x + 4). Ausmultiplizieren: 12x − 4 − 5x = 10 − x − 4, also 7x − 4 = 6 − x. 8x = 10 (+x, +4). x = 5/4 (:8).' },
          { text: 'Löse A = (b · r) / 2 nach b auf.', loesung: 'b = 2A / r (·2 auf beiden Seiten: 2A = b · r, dann :r).' },
          { text: 'Löse n = v / (d · π) nach v auf.', loesung: 'v = n · d · π (beide Seiten mit d · π multiplizieren).' },
          { text: 'Löse a = (m · z + m · x) / 2 nach m auf.', loesung: 'm = 2a / (z + x) (·2: 2a = m · z + m · x, dann m ausklammern: 2a = m · (z + x), dann :(z + x)).' },
          { text: 'Löse A = (π/4) · (D² − d²) nach d auf.', loesung: 'd = √(D² − 4A/π) (·4, :π, D² auf die andere Seite bringen, dann Wurzel ziehen - nur die positive Lösung ist sinnvoll, da d eine Länge ist).' },
        ],
        check: [],
      },
    ],
  },
  'Funktionen': {
    titel: 'Funktionen',
    kacheln: [
      {
        id: 'formel', emoji: '📏', titel: 'Gerade als Formel', videos: [{ titel: 'Gerade als Formel (Video 1)', youtubeId: 'TKK-25nz-cE' }, { titel: 'Gerade als Formel (Video 2)', youtubeId: '50E1gIunhzE' }],
        karten: [
          { text: 'Stell dir ein Taxi vor: Du zahlst eine Grundgebühr, bevor es überhaupt losfährt, und dann noch einen festen Betrag pro Kilometer. Eine lineare Funktion rechnet genau so: y = m · x + b.' },
          {
            text: 'Tippe die Buchstaben an.',
            visual: 'chips',
            chips: [
              { n: 'm', regel: 'Die Steigung. Sagt, wie viel y bei jedem Schritt in x dazukommt (z. B. Franken pro Kilometer).' },
              { n: 'b', regel: 'Der Startwert (auch y-Achsenabschnitt genannt). Der y-Wert, wenn x = 0 ist.' },
              { n: 'm positiv', regel: 'Die Gerade steigt von links nach rechts.' },
              { n: 'm negativ', regel: 'Die Gerade fällt von links nach rechts.' },
            ],
          },
          { text: 'Profi-Tipp: Schau dir die Formel wie ein Rezept an. b ist das, was du sofort hast (bei x = 0). m ist das, was pro Schritt dazukommt oder weggeht.' },
          {
            text: 'Die Gerade y = 0.5x + 2: b ist der Start bei x = 0, das Dreieck zeigt die Steigung - 2 Schritte nach rechts (Δx), 1 Schritt nach oben (Δy). m = Δy/Δx = 1/2.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'line', x1: 13, y1: 140, x2: 192, y2: 140 },
                { type: 'line', x1: 30, y1: 148, x2: 30, y2: 35 },
                { type: 'text', x: 188, y: 134, label: 'x', anchor: 'end' },
                { type: 'text', x: 34, y: 40, label: 'y', anchor: 'start' },
                { type: 'line', x1: 30, y1: 110, x2: 166, y2: 50, color: 'accent', strokeWidth: 2.5 },
                { type: 'circle', cx: 30, cy: 110, r: 3, fill: 'accent' },
                { type: 'text', x: 18, y: 112, label: 'b', anchor: 'end', color: 'accent' },
                { type: 'line', x1: 64, y1: 95, x2: 98, y2: 95, color: 'warn', dashed: true },
                { type: 'line', x1: 98, y1: 95, x2: 98, y2: 80, color: 'warn', dashed: true },
                { type: 'text', x: 81, y: 108, label: 'Δx', color: 'warn' },
                { type: 'text', x: 102, y: 90, label: 'Δy', anchor: 'start', color: 'warn' },
              ],
            },
          },
          { text: 'Lies m und b ab: y = 3x − 2.\n| m (die Zahl direkt vor dem x): 3\n| b (die Zahl ohne x): −2\n| Bedeutung: Start bei −2, pro Schritt in x steigt y um 3.' },
          { text: 'Kontrolle: Setze x = 0 in die Formel ein: y = 3 · 0 − 2 = −2. Das ist genau b - stimmt.' },
        ],
        check: [
          { frage: 'Welche Zahl ist bei y = 4x − 7 die Steigung m?', optionen: ['4', '−7', '−4', '7'], richtig: 0, erklaerung: 'm ist immer die Zahl direkt vor dem x. Bei −7 wurde b statt m gewählt.' },
          { frage: 'Steigt oder fällt die Gerade y = −2x + 5?', optionen: ['Sie fällt (m ist negativ)', 'Sie steigt (m ist negativ)', 'Sie fällt (b ist positiv)', 'Sie bleibt gleich'], richtig: 0, erklaerung: 'm = −2 ist negativ, darum fällt die Gerade von links nach rechts. b sagt nichts über steigen oder fallen, nur über den Startwert.' },
          { frage: 'Eine Gerade geht bei x = 0 durch y = 6 und fällt pro Schritt in x um 3. Wie lautet die Formel?', optionen: ['y = −3x + 6', 'y = 3x + 6', 'y = −3x − 6', 'y = 6x − 3'], richtig: 0, erklaerung: 'Fällt heisst m ist negativ: m = −3. Start bei y = 6 heisst b = 6. Zusammen: y = −3x + 6.' },
        ],
      },
      {
        id: 'textformel', emoji: '💰', titel: 'Formel aus Text', videos: [{ titel: 'Formel aus Text', youtubeId: 'Q733CvZN8w0' }],
        karten: [
          { text: 'In Textaufgaben versteckt sich y = mx + b oft hinter Wörtern wie "Grundgebühr" und "pro". Die Grundgebühr ist b, der Preis pro Einheit ist m.' },
          {
            text: 'Tippe die Wörter an.',
            visual: 'chips',
            chips: [
              { n: 'Grundgebühr', regel: 'Das ist b, der Startwert - das zahlst du, bevor überhaupt etwas dazukommt.' },
              { n: 'pro km / Stück', regel: 'Das ist m, die Steigung - für jede Einheit kommt dieser Betrag dazu.' },
              { n: 'x', regel: 'Die Anzahl Einheiten (km, Stück, Stunden, ...).' },
              { n: 'y', regel: 'Der Betrag, den du am Ende zahlst.' },
            ],
          },
          { text: 'Profi-Tipp: Lies den Text zweimal. Beim ersten Mal suchst du die feste Grundgebühr (b), beim zweiten Mal den Preis pro Einheit (m).' },
          { text: 'Ein Velo-Verleih kostet 5 Franken Grundgebühr, dazu 2 Franken pro Stunde.\n| Grundgebühr → b = 5\n| Preis pro Stunde → m = 2\n| Formel: y = 2x + 5\n\nKontrolle für x = 3 Stunden: y = 2 · 3 + 5 = 11 Franken.' },
          { text: 'Nicht immer steht "Grundgebühr" wörtlich da: "Ein Praktikant verdient 50 Franken pro Tag, zusätzlich eine einmalige Startprämie von 20 Franken."\n| Einmalig, unabhängig von x → b = 20\n| Pro Tag → m = 50\n| Formel: y = 50x + 20' },
        ],
        check: [
          { frage: 'Ein Schwimmbad kostet 4 Franken Eintritt, dazu 1.50 Franken pro Stunde. Formel?', optionen: ['y = 1.5x + 4', 'y = 4x + 1.5', 'y = 1.5x − 4', 'y = 5.5x'], richtig: 0, erklaerung: 'Eintritt (Grundgebühr) ist b = 4, Preis pro Stunde ist m = 1.5. Bei y = 4x + 1.5 wurden m und b verwechselt, bei y = 5.5x wurden beide Zahlen einfach zusammengezählt statt als m und b eingesetzt.' },
          { frage: 'Ein Handyabo kostet 15 Franken pro Monat, keine weiteren Kosten pro SMS. Formel (x = Anzahl SMS)?', optionen: ['y = 15', 'y = 15x', 'y = x + 15', 'y = 15 − x'], richtig: 0, erklaerung: 'Keine Kosten pro SMS heisst m = 0. Die Formel wird y = 0x + 15 = 15 - ein fester Betrag, egal wie viele SMS. Bei y = 15x wurde die Grundgebühr als Steigung benutzt.' },
          { frage: 'Ein Fahrdienst verlangt 3 Franken pro km, keine Grundgebühr. Formel?', optionen: ['y = 3x', 'y = 3x + 3', 'y = x + 3', 'y = 3'], richtig: 0, erklaerung: 'Keine Grundgebühr heisst b = 0. Die Formel ist y = 3x + 0 = 3x.' },
        ],
      },
      {
        id: 'zweipunkte', emoji: '📐', titel: 'Gerade aus zwei Punkten', videos: [{ titel: 'Gerade aus zwei Punkten', youtubeId: 'fGi3XPMnSVA' }],
        karten: [
          { text: 'Du kennst zwei Punkte, durch die eine Gerade geht - wie zwei Ortschaften auf einer Wanderkarte. Daraus kannst du die ganze Formel berechnen.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'Steigung m', regel: 'm = (y-Wert von B − y-Wert von A) / (x-Wert von B − x-Wert von A).' },
              { n: 'b berechnen', regel: 'Einen der Punkte in y = mx + b einsetzen und nach b auflösen.' },
              { n: 'gleiche y-Werte', regel: 'Waagrechte Gerade: y = (dieser Wert), m = 0.' },
              { n: 'gleiche x-Werte', regel: 'Senkrechte Gerade: x = (dieser Wert) - das ist keine Funktion mehr.' },
            ],
          },
          { text: 'Profi-Tipp: Zeichne dir die zwei Punkte grob in ein Koordinatensystem. Dann siehst du sofort, ob die Gerade steigt, fällt oder waagrecht ist - bevor du überhaupt rechnest.' },
          { text: 'Gerade durch A(2, 5) und B(6, 13).\n| Steigung: m = (13 − 5)/(6 − 2) = 8/4 = 2\n| b berechnen, Punkt A einsetzen: 5 = 2 · 2 + b, also b = 1\n| Formel: y = 2x + 1\n\nKontrolle mit B: y = 2 · 6 + 1 = 13. Stimmt!' },
          { text: 'Sonderfälle: A(4, 3) und B(−2, 3) haben denselben y-Wert → waagrechte Gerade: y = 3 (m = 0).\nA(5, 1) und B(5, −4) haben denselben x-Wert → senkrechte Gerade: x = 5. Das ist keine Funktion, denn zu x = 5 gäbe es unendlich viele y-Werte.' },
        ],
        check: [
          { frage: 'Berechne die Steigung durch A(1, 4) und B(5, 16).', optionen: ['3', '12', '4/16', '1/3'], richtig: 0, erklaerung: 'm = (16 − 4)/(5 − 1) = 12/4 = 3. Bei 12 wurde nicht durch die x-Differenz geteilt, bei 1/3 wurde der Bruch verkehrt gebildet.' },
          { frage: 'A(2, 7) und B(8, 7) - welche Gerade ist das?', optionen: ['Eine waagrechte Gerade: y = 7', 'Eine senkrechte Gerade: x = 7', 'Eine steigende Gerade mit m = 7', 'Das geht nicht'], richtig: 0, erklaerung: 'Beide Punkte haben denselben y-Wert (7) - das ist eine waagrechte Gerade y = 7, mit Steigung m = 0.' },
          { frage: 'Gerade durch A(0, 2) und B(4, 10). Formel?', optionen: ['y = 2x + 2', 'y = 8x + 2', 'y = 2x + 4', 'y = 4x + 2'], richtig: 0, erklaerung: 'm = (10 − 2)/(4 − 0) = 2. Weil A bei x = 0 liegt, ist b direkt der y-Wert von A: b = 2. Formel: y = 2x + 2. Bei y = 8x + 2 wurde die Steigung nicht durch die x-Differenz geteilt.' },
        ],
      },
      {
        id: 'ablesen', emoji: '📊', titel: 'Werte ablesen & Nullstelle', videos: [{ titel: 'Werte ablesen & Nullstelle', youtubeId: 'dLfPBJgHgC4' }],
        karten: [
          { text: 'Ein Graph ist wie eine Tabelle, die man zeichnet. Du kannst m und b direkt ablesen, oder einzelne Werte einsetzen - in beide Richtungen: x hinein, y heraus, oder umgekehrt.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'b ablesen', regel: 'Da, wo die Gerade die y-Achse (x = 0) schneidet.' },
              { n: 'm ablesen', regel: 'Ein Schritt nach rechts (Δx), wie viel geht es hoch oder runter (Δy)? m = Δy/Δx.' },
              { n: 'x einsetzen', regel: 'Gegebenen x-Wert in die Formel einsetzen, y ausrechnen.' },
              { n: 'Nullstelle', regel: 'Der x-Wert, bei dem y = 0 ist - z. B. wann ein Tank leer oder eine Schuld abbezahlt ist.' },
            ],
          },
          { text: 'Profi-Tipp: Bei "wie lange bis..." oder "wann ist...leer/aufgebraucht/abbezahlt" geht es fast immer um die Nullstelle: Setze y = 0 und löse nach x auf.' },
          {
            text: 'Ein Wasserspeicher mit 16 Litern wird mit 2 Litern pro Minute leer gepumpt: y = −2x + 16. b = 16 ist der Start, bei y = 0 ist der Speicher leer.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'line', x1: 13, y1: 140, x2: 192, y2: 140 },
                { type: 'line', x1: 30, y1: 148, x2: 30, y2: 18 },
                { type: 'text', x: 188, y: 134, label: 'x', anchor: 'end' },
                { type: 'text', x: 34, y: 23, label: 'y', anchor: 'start' },
                { type: 'line', x1: 30, y1: 28, x2: 166, y2: 140, color: 'accent', strokeWidth: 2.5 },
                { type: 'circle', cx: 30, cy: 28, r: 3, fill: 'accent' },
                { type: 'text', x: 36, y: 24, label: 'b = 16 Liter', anchor: 'start', size: 11 },
                { type: 'circle', cx: 166, cy: 140, r: 3, fill: 'warn' },
                { type: 'text', x: 122, y: 152, label: 'Nullstelle: x = 8 Minuten', anchor: 'middle', size: 11, color: 'warn' },
              ],
            },
          },
          { text: 'Formel: y = −2x + 16 (Wasserstand nach x Minuten)\n| Für x = 3: y = −2 · 3 + 16 = 10 Liter\n| Für y = 4 gesucht: 4 = −2x + 16, also −12 = −2x, x = 6 Minuten' },
          { text: 'Wann ist der Speicher leer? Das heisst y = 0.\n0 = −2x + 16\n| +2x: 2x = 16\n| :2: x = 8\n\nNach 8 Minuten ist der Speicher leer.' },
        ],
        check: [
          { frage: 'Bei y = 3x − 9, wann ist y = 0 (die Nullstelle)?', optionen: ['3', '9', '−3', '1/3'], richtig: 0, erklaerung: '0 = 3x − 9, also 3x = 9, x = 3. Bei 9 wurde die Division durch 3 vergessen, bei −3 ein Vorzeichen falsch gesetzt.' },
          { frage: 'Formel y = 5x + 2. Was ist y für x = 4?', optionen: ['22', '20', '9', '7'], richtig: 0, erklaerung: 'y = 5 · 4 + 2 = 20 + 2 = 22. Bei 20 wurde das +2 vergessen, bei 9 wurde 5 + 4 statt 5 · 4 gerechnet.' },
          { frage: 'Formel y = 4x − 1. Für welches x ist y = 19?', optionen: ['5', '4.5', '20', '4.75'], richtig: 0, erklaerung: '19 = 4x − 1, also 4x = 20, x = 5. Bei 4.75 wurde die 1 nicht beachtet (19 : 4), bei 20 wurde nicht durch 4 geteilt.' },
        ],
      },
      {
        id: 'vergleichen', emoji: '⚖️', titel: 'Zwei Geraden vergleichen', videos: [{ titel: 'Zwei Geraden vergleichen', youtubeId: 'kPofqbNlkM4' }],
        karten: [
          { text: 'Zwei Angebote vergleichen heisst: Beide Formeln gleichsetzen und schauen, wo sie sich schneiden - der Punkt, ab dem sich etwas ändert.' },
          {
            text: 'Tippe die Schritte an.',
            visual: 'chips',
            chips: [
              { n: 'gleichsetzen', regel: 'Beide Formeln gleich setzen: m₁x + b₁ = m₂x + b₂, nach x auflösen.' },
              { n: 'Schnittpunkt', regel: 'Der x-Wert, bei dem beide Angebote gleich viel kosten.' },
              { n: 'danach', regel: 'Nach dem Schnittpunkt gewinnt die Gerade mit der kleineren Steigung - sie wächst langsamer.' },
              { n: 'Probe', regel: 'Einen x-Wert vor und einen nach dem Schnittpunkt einsetzen, um zu prüfen, wer wirklich günstiger ist.' },
            ],
          },
          { text: 'Profi-Tipp: Rechne nach dem Gleichsetzen nicht nur den Schnittpunkt aus - probiere danach einen x-Wert davor und einen danach. Das verhindert Verwechslungen.' },
          {
            text: 'Angebot A: y = 3x + 10 (dünne Linie, grössere Steigung ab dem Start). Angebot B: y = 5x + 4 (steiler). Sie schneiden sich bei x = 3, y = 19.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'line', x1: 22, y1: 140, x2: 184, y2: 140 },
                { type: 'line', x1: 30, y1: 144, x2: 30, y2: 20 },
                { type: 'line', x1: 30, y1: 100, x2: 170, y2: 40, color: 'accent', strokeWidth: 2.5 },
                { type: 'line', x1: 30, y1: 124, x2: 170, y2: 24, color: 'warn', strokeWidth: 2.5 },
                { type: 'text', x: 174, y: 38, label: 'A', anchor: 'start', color: 'accent' },
                { type: 'text', x: 174, y: 22, label: 'B', anchor: 'start', color: 'warn' },
                { type: 'circle', cx: 114, cy: 64, r: 3, fill: 'ok' },
                { type: 'text', x: 114, y: 77, label: 'Schnittpunkt', anchor: 'middle', size: 10, color: 'ok' },
              ],
            },
          },
          { text: 'Angebot A: y = 3x + 10. Angebot B: y = 5x + 4.\n| Gleichsetzen: 3x + 10 = 5x + 4\n| −3x: 10 = 2x + 4\n| −4: 6 = 2x\n| :2: x = 3\n\nProbe bei x = 0: A = 10, B = 4 → B günstiger. Probe bei x = 5: A = 25, B = 29 → A günstiger. Ab x = 3 lohnt sich also A, vorher B.' },
          { text: 'Schwieriger: Ab wann ist Kerze A doppelt so lang wie Kerze B? A: y = −x + 20. B: y = −2x + 16.\n| Gleichung: −x + 20 = 2 · (−2x + 16)\n| Ausmultiplizieren: −x + 20 = −4x + 32\n| +4x: 3x + 20 = 32\n| −20: 3x = 12\n| :3: x = 4' },
        ],
        check: [
          { frage: 'Angebot A: y = 2x + 8. Angebot B: y = 4x + 2. Bei welchem x sind beide gleich teuer?', optionen: ['3', '6', '2', '5'], richtig: 0, erklaerung: '2x + 8 = 4x + 2 → 6 = 2x → x = 3. Bei 6 wurde die Division durch 2 am Schluss vergessen.' },
          { frage: 'Bei x = 3 sind A (y = 2x + 8) und B (y = 4x + 2) gleich teuer. Für x = 10, welches Angebot ist günstiger?', optionen: ['A, weil B schneller wächst (grössere Steigung)', 'B, weil B eine kleinere Grundgebühr hat', 'A, weil A eine kleinere Grundgebühr hat', 'Beide gleich'], richtig: 0, erklaerung: 'Für grosse x gewinnt die Gerade mit der kleineren Steigung. A hat m = 2, B hat m = 4 - A wächst langsamer. Probe: A(10) = 28, B(10) = 42.' },
          { frage: 'Zwei Kerzen: A y = −x + 15, B y = −3x + 15. Wann sind sie gleich lang (ausser am Anfang)?', optionen: ['Nie wieder - zwei verschiedene Geraden schneiden sich nur einmal', 'Bei x = 5', 'Bei x = 15', 'Immer, weil beide bei 15 starten'], richtig: 0, erklaerung: 'Beide Geraden haben b = 15 und schneiden sich dort einmal, bei x = 0. Zwei nicht-parallele Geraden schneiden sich immer nur an genau einem Punkt - danach laufen sie auseinander.' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ Bei y = 3x + 7 denkt man, b = 3 und m = 7. ✅ m steht immer direkt vor dem x, b ist die Zahl ohne x: hier ist m = 3 und b = 7.' },
          { text: '❌ Bei der Steigung werden die x- und y-Werte vertauscht. ✅ m = (y₂ − y₁)/(x₂ − x₁), nie umgekehrt.' },
          { text: '❌ Bei gleichen y-Werten denkt man an eine senkrechte Gerade. ✅ Gleiche y-Werte → waagrechte Gerade (y = ...). Gleiche x-Werte → senkrechte Gerade (x = ...).' },
          { text: '❌ Die Grundgebühr wird als Steigung m statt als Startwert b eingesetzt. ✅ Die Grundgebühr ist das, was du bei 0 Einheiten schon zahlst - das ist b.' },
          { text: '❌ Beim Vergleichen zweier Geraden wird nur der Schnittpunkt berechnet, aber nicht geprüft, wer vorher und wer nachher günstiger ist. ✅ Nach dem Gleichsetzen immer einen x-Wert vor und einen nach dem Schnittpunkt einsetzen.' },
          { text: '❌ Bei der Nullstelle wird x = 0 statt y = 0 gesetzt. ✅ Nullstelle heisst y = 0 (wo die Gerade die x-Achse kreuzt), nicht x = 0.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Lies m und b ab: y = 6x − 4.', loesung: 'm = 6 (Steigung), b = −4 (Startwert).' },
          { text: 'Steigt oder fällt die Gerade y = −5x + 1?', loesung: 'Sie fällt, denn m = −5 ist negativ.' },
          { text: 'Ein Parkhaus kostet 2 Franken Grundgebühr, dazu 1.50 Franken pro Stunde. Formel?', loesung: 'y = 1.5x + 2 (m = 1.5 Franken pro Stunde, b = 2 Franken Grundgebühr).' },
          { text: 'Ein Abo kostet 25 Franken Startgebühr, danach nichts mehr pro Monat. Formel (x = Monate)?', loesung: 'y = 0x + 25 = 25 (konstant, m = 0).' },
          { text: 'Steigung durch A(3, 2) und B(7, 18)?', loesung: 'm = (18 − 2)/(7 − 3) = 16/4 = 4.' },
          { text: 'Formel durch A(0, −3) und B(5, 7)?', loesung: 'm = (7 − (−3))/(5 − 0) = 10/5 = 2. Weil A bei x = 0 liegt: b = −3. Formel: y = 2x − 3.' },
          { text: 'A(−2, 6) und B(4, 6) - welche Gerade?', loesung: 'Gleiche y-Werte → waagrechte Gerade: y = 6.' },
          { text: 'Formel y = 7x − 21. Nullstelle?', loesung: '0 = 7x − 21, also 7x = 21, x = 3.' },
          { text: 'Formel y = −4x + 32 (Liter Wasser nach x Minuten). Nach wie vielen Minuten ist der Speicher leer?', loesung: '0 = −4x + 32, also 4x = 32, x = 8. Nach 8 Minuten.' },
          { text: 'Formel y = 2.5x + 6. Für welches x ist y = 26?', loesung: '26 = 2.5x + 6, also 2.5x = 20, x = 8.' },
          { text: 'A: y = 4x + 5. B: y = 6x + 1. Ab welchem x sind sie gleich?', loesung: '4x + 5 = 6x + 1 → 4 = 2x → x = 2.' },
          { text: 'Bei A: y = 4x + 5, B: y = 6x + 1 (Schnittpunkt bei x = 2). Wer ist günstiger für x = 10?', loesung: 'A(10) = 4 · 10 + 5 = 45. B(10) = 6 · 10 + 1 = 61. A ist günstiger, weil B eine grössere Steigung hat und schneller wächst.' },
          { text: 'Eine Pflanze ist nach 2 Wochen 14 cm hoch, nach 5 Wochen 26 cm. Wie hoch war sie bei der Pflanzung (Woche 0), wenn sie linear wächst?', loesung: 'm = (26 − 14)/(5 − 2) = 12/3 = 4 cm pro Woche. Mit (2, 14): 14 = 4 · 2 + b, also b = 6. Bei der Pflanzung war sie 6 cm hoch.' },
          { text: 'Kerze A: y = −3x + 30. Kerze B: y = −2x + 40. Ab wann ist B doppelt so lang wie A?', loesung: 'Gleichung: −2x + 40 = 2 · (−3x + 30). Ausmultiplizieren: −2x + 40 = −6x + 60. +6x: 4x + 40 = 60. −40: 4x = 20. :4: x = 5. Kontrolle: A(5) = 15, B(5) = 30 = 2 · 15.' },
          { text: 'Gerade durch A(−4, 9) und B(2, −3). Formel?', loesung: 'm = (−3 − 9)/(2 − (−4)) = −12/6 = −2. Mit B(2, −3): −3 = −2 · 2 + b, also b = 1. Formel: y = −2x + 1.' },
          { text: 'A: y = 3x + 2. B: y = 7x − 6. Schnittpunkt?', loesung: '3x + 2 = 7x − 6 → 8 = 4x → x = 2.' },
        ],
        check: [],
      },
    ],
  },
  'Geometrie': {
    titel: 'Geometrie',
    kacheln: [
      {
        id: 'dreieck', emoji: '📐', titel: 'Winkel im Dreieck', videos: [{ titel: 'Winkel im Dreieck (Video 1)', youtubeId: 'TaOvMNWvZbA' }, { titel: 'Winkel im Dreieck (Video 2)', youtubeId: 'DRHsQoL6GAM' }],
        karten: [
          { text: 'Ein Dreieck ist wie ein Kuchen, der in drei Stücke geschnitten ist - die drei Winkel zusammen ergeben immer 180°, egal wie das Dreieck aussieht.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'Winkelsumme', regel: 'Alle drei Winkel in einem Dreieck ergeben zusammen immer 180°.' },
              { n: 'gleichschenklig', regel: 'Zwei Seiten gleich lang → die zwei Basiswinkel sind gleich gross.' },
              { n: 'gleichseitig', regel: 'Alle drei Seiten gleich lang → alle drei Winkel sind 60°.' },
              { n: 'rechtwinklig', regel: 'Ein Winkel ist 90° → die anderen zwei ergeben zusammen 90°.' },
            ],
          },
          { text: 'Profi-Tipp: Kennst du zwei Winkel, ist der dritte ein Kinderspiel: 180° minus die beiden anderen.' },
          { text: 'Ein Dreieck hat die Winkel 55° und 70°. Wie gross ist der dritte?\n180° − 55° − 70° = 55°' },
          { text: 'Ein gleichschenkliges Dreieck hat an der Spitze 40°. Wie gross sind die beiden Basiswinkel?\n| Rest: 180° − 40° = 140°\n| Beide Basiswinkel gleich, also halbieren: 140° : 2 = 70°\n\nKontrolle: 40° + 70° + 70° = 180°.' },
        ],
        check: [
          { frage: 'Ein Dreieck hat die Winkel 48° und 65°. Wie gross ist der dritte?', optionen: ['67°', '113°', '17°', '77°'], richtig: 0, erklaerung: '180° − 48° − 65° = 67°. Bei 113° wurden die zwei Winkel addiert statt von 180° abgezogen.' },
          { frage: 'Ein gleichschenkliges Dreieck hat einen Basiswinkel von 50°. Wie gross ist die Spitze?', optionen: ['80°', '50°', '100°', '130°'], richtig: 0, erklaerung: 'Beide Basiswinkel sind 50°, zusammen 100°. Spitze: 180° − 100° = 80°. Bei 100° wurde nur ein Basiswinkel abgezogen, nicht beide.' },
          { frage: 'Ein rechtwinkliges Dreieck hat einen Winkel von 35°. Wie gross ist der dritte?', optionen: ['55°', '65°', '35°', '145°'], richtig: 0, erklaerung: 'Ein Winkel ist 90°, der zweite 35°, zusammen 125°. Der dritte ist 180° − 125° = 55°. Bei 65° wurde nicht mit allen drei Winkeln gerechnet.' },
        ],
      },
      {
        id: 'geraden', emoji: '📏', titel: 'Winkel an Geraden', videos: [{ titel: 'Winkel an Geraden', youtubeId: 'D_9JeyujdaE' }],
        karten: [
          { text: 'Wenn eine Linie zwei parallele Strassen kreuzt, entstehen überall gleiche oder sich ergänzende Winkel - wie ein Muster, das sich wiederholt.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'Scheitelwinkel', regel: 'Gegenüberliegende Winkel an einer Kreuzung - immer gleich gross.' },
              { n: 'Stufenwinkel', regel: 'Gleiche Lage an den zwei Parallelen (z. B. beide oben rechts) - gleich gross.' },
              { n: 'Wechselwinkel', regel: 'Gegenüberliegende Lage an den zwei Parallelen (einmal oben rechts, einmal unten links) - auch gleich gross.' },
              { n: 'Nebenwinkel', regel: 'Winkel nebeneinander auf einer Linie - ergänzen sich zu 180°.' },
            ],
          },
          { text: 'Profi-Tipp: Suchst du einen unbekannten Winkel an Parallelen, zeichne dir in Gedanken ein grosses "Z" oder "F" - das hilft, Stufen- und Wechselwinkel zu erkennen.' },
          {
            text: 'Zwei parallele Linien, eine dritte Linie kreuzt beide. Der Winkel 65° kommt an der unteren Kreuzung an der gleichen Stelle wieder vor (Stufenwinkel) - direkt daneben entsteht der Nebenwinkel 115° (65° + 115° = 180°).',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'line', x1: 15, y1: 40, x2: 185, y2: 40 },
                { type: 'line', x1: 15, y1: 120, x2: 185, y2: 120 },
                { type: 'line', x1: 35, y1: 15, x2: 165, y2: 145, color: 'accent' },
                { type: 'circle', cx: 66, cy: 40, r: 2.5, fill: 'accent' },
                { type: 'circle', cx: 134, cy: 120, r: 2.5, fill: 'accent' },
                { type: 'text', x: 82, y: 32, label: '65°', anchor: 'start', color: 'accent' },
                { type: 'text', x: 150, y: 112, label: '65°', anchor: 'start', color: 'accent' },
                { type: 'text', x: 150, y: 134, label: '115°', anchor: 'start', color: 'warn' },
              ],
            },
          },
          { text: 'Wechselwinkel liegen gegenüber: Ist der Winkel oben links 72°, dann ist der Winkel unten rechts an der anderen Parallele auch 72°. Der Winkel unten links ist der Nebenwinkel dazu: 180° − 72° = 108°.' },
        ],
        check: [
          { frage: 'Zwei Parallelen werden von einer Linie gekreuzt. Ein Winkel ist 72°. Wie gross ist der Stufenwinkel an der anderen Parallele?', optionen: ['72°', '108°', '18°', '144°'], richtig: 0, erklaerung: 'Stufenwinkel an Parallelen sind immer gleich gross: 72°. Bei 108° wurde der Nebenwinkel berechnet (180° − 72°), nicht der Stufenwinkel.' },
          { frage: 'Ein Winkel an einer Kreuzung ist 55°. Wie gross ist sein Scheitelwinkel (direkt gegenüber)?', optionen: ['55°', '125°', '35°', '110°'], richtig: 0, erklaerung: 'Scheitelwinkel sind immer gleich gross: 55°. Bei 125° wurde stattdessen der Nebenwinkel (180° − 55°) berechnet.' },
          { frage: 'Ein Wechselwinkel-Paar an Parallelen: Der eine Winkel ist 38°. Wie gross ist der andere?', optionen: ['38°', '142°', '19°', '76°'], richtig: 0, erklaerung: 'Wechselwinkel an Parallelen sind gleich gross: 38°. Bei 142° wurde der Nebenwinkel gerechnet.' },
        ],
      },
      {
        id: 'kreis', emoji: '⭕', titel: 'Winkel am Kreis', videos: [{ titel: 'Winkel am Kreis', youtubeId: 'XpGbVXxOhEA' }],
        karten: [
          { text: 'Stell dir eine Pizza vor, die vom Mittelpunkt aus angeschnitten wird (Mittelpunktswinkel) - und einen Winkel, den du vom Rand aus auf dasselbe Stück siehst (Winkel am Kreisrand). Der Winkel am Rand ist immer halb so gross wie der Winkel in der Mitte.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'Mittelpunktswinkel', regel: 'Der Winkel im Mittelpunkt des Kreises, der auf ein Bogenstück zeigt.' },
              { n: 'Winkel am Kreisrand', regel: 'Ein Winkel von einem Punkt auf dem Kreisrand aus, der auf dasselbe Bogenstück zeigt.' },
              { n: 'doppelt/halb', regel: 'Mittelpunktswinkel = 2 × Winkel am Kreisrand, für denselben Bogen.' },
              { n: 'gleiche Bögen', regel: 'Zwei Winkel am Kreisrand, die auf denselben Bogen zeigen, sind gleich gross.' },
            ],
          },
          { text: 'Profi-Tipp: Zeichne dir die zwei Radien zum Bogen ein - sie bilden mit der Sehne ein gleichschenkliges Dreieck, das hilft oft beim Weiterrechnen.' },
          { text: 'Ein Winkel am Kreisrand beträgt 28°. Wie gross ist der Mittelpunktswinkel zum gleichen Bogen?\nMittelpunktswinkel = 2 × 28° = 56°' },
          { text: 'Ein Winkel am Kreisrand beträgt 40°. Verbindet man den Mittelpunkt mit den beiden Randpunkten, entsteht ein gleichschenkliges Dreieck mit Spitzenwinkel 2 × 40° = 80° (der Mittelpunktswinkel).\n| Basiswinkel gleich, also: (180° − 80°) : 2 = 50° je' },
        ],
        check: [
          { frage: 'Ein Winkel am Kreisrand ist 35°. Wie gross ist der Mittelpunktswinkel zum gleichen Bogen?', optionen: ['70°', '17.5°', '35°', '145°'], richtig: 0, erklaerung: 'Mittelpunktswinkel = 2 × Winkel am Kreisrand = 2 × 35° = 70°. Bei 17.5° wurde durch 2 geteilt statt verdoppelt.' },
          { frage: 'Der Mittelpunktswinkel ist 120°. Wie gross ist der Winkel am Kreisrand zum gleichen Bogen?', optionen: ['60°', '240°', '30°', '90°'], richtig: 0, erklaerung: 'Winkel am Kreisrand = Mittelpunktswinkel : 2 = 120° : 2 = 60°. Bei 240° wurde verdoppelt statt halbiert.' },
          { frage: 'Zwei Winkel am Kreisrand zeigen auf denselben Bogen. Der eine ist 42°. Wie gross ist der andere?', optionen: ['42°', '84°', '21°', '138°'], richtig: 0, erklaerung: 'Winkel am Kreisrand, die auf denselben Bogen zeigen, sind immer gleich gross: 42°.' },
        ],
      },
      {
        id: 'flaechen', emoji: '🟩', titel: 'Flächen & Umfang', videos: [{ titel: 'Flächen & Umfang (Video 1)', youtubeId: 's-QFShTrlOE' }, { titel: 'Flächen & Umfang (Video 2)', youtubeId: 'C4m9MwZbZuM' }],
        karten: [
          { text: 'Eine zusammengesetzte Figur ist wie ein Puzzle aus einfachen Formen. Teile sie in Rechtecke oder Dreiecke - rechne jedes Stück einzeln aus und addiere, oder zieh ein fehlendes Stück ab.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'zerlegen', regel: 'Die Figur in einfache Formen (Rechteck, Dreieck, Kreis) aufteilen.' },
              { n: 'addieren', regel: 'Flächen, die zur Figur gehören, zusammenzählen.' },
              { n: 'subtrahieren', regel: 'Löcher oder fehlende Teile von der Gesamtfläche abziehen.' },
              { n: 'Umfang ≠ Fläche', regel: 'Umfang ist die Länge rundherum, Fläche ist der Inhalt - nicht verwechseln.' },
            ],
          },
          { text: 'Profi-Tipp: Zeichne die Zerlegung mit Bleistift direkt in die Figur ein, bevor du rechnest - dann siehst du sofort, was du addieren und was du subtrahieren musst.' },
          {
            text: 'Diese Figur ist ein Rechteck mit einer fehlenden Ecke (gestrichelt). Fläche = grosses Rechteck minus die fehlende Ecke.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'rect', x: 30, y: 30, w: 120, h: 72 },
                { type: 'rect', x: 102, y: 30, w: 48, h: 36, dashed: true, color: 'warn' },
                { type: 'text', x: 90, y: 116, label: '10' },
                { type: 'text', x: 16, y: 66, label: '6', anchor: 'end' },
                { type: 'text', x: 126, y: 22, label: '4' },
                { type: 'text', x: 158, y: 48, label: '3', anchor: 'start' },
              ],
            },
          },
          { text: 'Fläche berechnen:\n| Grosses Rechteck: 10 · 6 = 60\n| Fehlende Ecke: 4 · 3 = 12\n| Fläche der Figur: 60 − 12 = 48' },
          { text: 'Überraschung beim Umfang: Er ist genau gleich gross wie beim vollen Rechteck: 2 · (10 + 6) = 32. Schneidest du eine rechteckige Ecke weg, verschiebst du nur Kanten - du verlierst keine Umfangslänge.' },
        ],
        check: [
          { frage: 'Ein Rechteck hat die Fläche 48 cm² und eine Seite von 6 cm. Wie lang ist die andere Seite x?', optionen: ['8 cm', '42 cm', '288 cm', '12 cm'], richtig: 0, erklaerung: '48 = 6 · x, also x = 48 : 6 = 8. Bei 288 wurde multipliziert statt dividiert, bei 42 wurde die 6 abgezogen statt dividiert.' },
          { frage: 'Eine L-förmige Figur: Rechteck 12 × 8, davon eine Ecke 5 × 3 weggeschnitten. Wie gross ist die Fläche?', optionen: ['81', '111', '96', '15'], richtig: 0, erklaerung: '96 (grosses Rechteck) − 15 (weggeschnittene Ecke) = 81. Bei 111 wurde addiert statt subtrahiert, bei 96 wurde die Ecke vergessen.' },
          { frage: 'Dieselbe Figur (12 × 8, Ecke 5 × 3 weg). Wie gross ist der Umfang?', optionen: ['40', '36', '81', '56'], richtig: 0, erklaerung: 'Beim Wegschneiden einer rechteckigen Ecke bleibt der Umfang gleich wie beim vollen Rechteck: 2 · (12 + 8) = 40.' },
        ],
      },
      {
        id: 'spiegeln', emoji: '🪞', titel: 'Spiegeln & Konstruieren', videos: [{ titel: 'Achsenspiegelung im Koordinatensystem', youtubeId: '_LV31JK6280' }, { titel: 'Achsenspiegelung mit Zirkel und Geodreieck', youtubeId: 'pej1BH3i6Yw' }, { titel: 'Punktspiegelung', youtubeId: 'S0x6ZZhX1lo' }],
        karten: [
          { text: 'Spiegeln ist wie ein Blick in den Spiegel: Die Form bleibt gleich, aber alles ist auf die andere Seite gedreht - jeder Punkt wandert gleich weit über die Spiegelachse.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'an der x-Achse', regel: 'Das Vorzeichen des y-Werts dreht sich um: (x, y) → (x, −y).' },
              { n: 'an der y-Achse', regel: 'Das Vorzeichen des x-Werts dreht sich um: (x, y) → (−x, y).' },
              { n: 'am Ursprung', regel: 'Beide Vorzeichen drehen sich um: (x, y) → (−x, −y).' },
              { n: 'Abstand bleibt gleich', regel: 'Der Punkt und sein Spiegelbild sind gleich weit von der Spiegelachse entfernt.' },
            ],
          },
          { text: 'Profi-Tipp: Zähle die Kästchen vom Punkt zur Spiegelachse - und genauso viele Kästchen auf der anderen Seite weiter. Dann kannst du nichts falsch machen.' },
          { text: 'Spiegle den Punkt A(3, 5) an der x-Achse.\n| Nur das Vorzeichen von y dreht sich um\n| A\' = (3, −5)' },
          { text: 'Spiegle das Dreieck A(2, 1), B(5, 1), C(4, 3) an der y-Achse.\n| Nur das Vorzeichen von x dreht sich um\n| A\' = (−2, 1), B\' = (−5, 1), C\' = (−4, 3)' },
          { text: 'Ein Kreis lässt sich mit Zirkel und Lineal konstruieren, wenn du Mittelpunkt und Radius kennst - oder wenn er eine Gerade und einen anderen Kreis berühren soll. Das ist eine Konstruktion mit dem Zirkel, keine Rechnung.' },
        ],
        check: [
          { frage: 'Spiegle den Punkt P(4, −2) an der x-Achse.', optionen: ['(4, 2)', '(−4, −2)', '(−4, 2)', '(2, 4)'], richtig: 0, erklaerung: 'An der x-Achse dreht sich nur das Vorzeichen von y um: aus −2 wird 2. Der x-Wert bleibt gleich.' },
          { frage: 'Spiegle den Punkt P(−3, 6) an der y-Achse.', optionen: ['(3, 6)', '(−3, −6)', '(3, −6)', '(6, −3)'], richtig: 0, erklaerung: 'An der y-Achse dreht sich nur das Vorzeichen von x um: aus −3 wird 3. Der y-Wert bleibt gleich.' },
          { frage: 'Spiegle den Punkt P(5, −4) am Ursprung.', optionen: ['(−5, 4)', '(5, 4)', '(−5, −4)', '(4, −5)'], richtig: 0, erklaerung: 'Am Ursprung drehen sich beide Vorzeichen um: aus (5, −4) wird (−5, 4).' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ Bei einem gleichschenkligen Dreieck wird die Spitze einfach durch 2 geteilt. ✅ Erst 180° minus Spitzenwinkel rechnen, dann DAS Ergebnis durch 2 teilen (für die zwei Basiswinkel).' },
          { text: '❌ Stufenwinkel und Nebenwinkel werden verwechselt. ✅ Stufenwinkel (gleiche Lage) sind gleich gross, Nebenwinkel (nebeneinander) ergänzen sich zu 180°.' },
          { text: '❌ Beim Winkel am Kreisrand wird durch 2 geteilt statt verdoppelt (oder umgekehrt). ✅ Der Mittelpunktswinkel ist immer das Doppelte vom Winkel am Kreisrand zum gleichen Bogen.' },
          { text: '❌ Umfang und Fläche werden verwechselt. ✅ Umfang ist die Länge rundherum (addieren), Fläche ist der Flächeninhalt (oft multiplizieren).' },
          { text: '❌ Beim Spiegeln werden beide Vorzeichen gedreht, auch wenn nur an einer Achse gespiegelt wird. ✅ An der x-Achse dreht sich nur y, an der y-Achse nur x. Beide drehen sich nur beim Spiegeln am Ursprung.' },
          { text: '❌ Bei einer zusammengesetzten Figur wird das fehlende Stück addiert statt abgezogen. ✅ Ein Loch oder eine fehlende Ecke wird von der Gesamtfläche subtrahiert.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Ein Dreieck hat die Winkel 62° und 74°. Wie gross ist der dritte Winkel?', loesung: '180° − 62° − 74° = 44°.' },
          { text: 'Ein gleichschenkliges Dreieck hat einen Basiswinkel von 65°. Wie gross ist die Spitze?', loesung: 'Beide Basiswinkel zusammen: 130°. Spitze: 180° − 130° = 50°.' },
          { text: 'Ein Winkel ist 48°. Wie gross ist sein Scheitelwinkel?', loesung: 'Scheitelwinkel sind gleich gross: 48°.' },
          { text: 'Ein Stufenwinkel-Paar an Parallelen: einer ist 83°. Wie gross ist der andere?', loesung: 'Stufenwinkel sind gleich gross: 83°.' },
          { text: 'Ein Winkel am Kreisrand ist 22°. Wie gross ist der Mittelpunktswinkel?', loesung: '2 × 22° = 44°.' },
          { text: 'Der Mittelpunktswinkel ist 150°. Wie gross ist der Winkel am Kreisrand zum gleichen Bogen?', loesung: '150° : 2 = 75°.' },
          { text: 'Rechteck 9 × 5, eine Ecke 2 × 2 weggeschnitten. Wie gross ist die Fläche?', loesung: '9 · 5 = 45. Ecke: 2 · 2 = 4. Fläche: 45 − 4 = 41.' },
          { text: 'Dieselbe Figur (9 × 5, Ecke 2 × 2 weg). Wie gross ist der Umfang?', loesung: 'Umfang bleibt wie beim vollen Rechteck: 2 · (9 + 5) = 28.' },
          { text: 'Ein Rechteck hat die Fläche 54 cm² und eine Seite von 9 cm. Wie lang ist die andere Seite?', loesung: '54 : 9 = 6 cm.' },
          { text: 'Spiegle P(6, −3) an der x-Achse.', loesung: 'Nur y dreht sich um: (6, 3).' },
          { text: 'Spiegle P(−7, 2) an der y-Achse.', loesung: 'Nur x dreht sich um: (7, 2).' },
          { text: 'Spiegle P(−4, −5) am Ursprung.', loesung: 'Beide Vorzeichen drehen sich um: (4, 5).' },
          { text: 'Zwei parallele Linien, eine Querlinie erzeugt einen Winkel von 110°. Im gleichschenkligen Dreieck mit dem Nebenwinkel als Spitzenwinkel - wie gross sind die Basiswinkel?', loesung: 'Nebenwinkel zu 110° ist 180° − 110° = 70° (Spitzenwinkel). Basiswinkel: (180° − 70°) : 2 = 55° je.' },
          { text: 'Ein Winkel am Kreisrand beträgt 37°. Wie gross sind die Basiswinkel des gleichschenkligen Radien-Dreiecks zu diesem Bogen?', loesung: 'Mittelpunktswinkel = 2 × 37° = 74° (die Spitze). Basiswinkel: (180° − 74°) : 2 = 53° je.' },
          { text: 'Ein Quadrat mit Seite x hat dieselbe Fläche wie ein Rechteck 16 × 9. Wie lang ist x?', loesung: '16 · 9 = 144. x² = 144, also x = 12 (denn 12 · 12 = 144).' },
          { text: 'Eine Figur: Rechteck 14 × 10, davon zwei gegenüberliegende Ecken je 3 × 2 weggeschnitten. Fläche und Umfang?', loesung: 'Fläche: 14 · 10 − 3 · 2 − 3 · 2 = 140 − 6 − 6 = 128. Umfang bleibt wie beim vollen Rechteck: 2 · (14 + 10) = 48.' },
        ],
        check: [],
      },
    ],
  },
  'Wahrscheinlichkeit': {
    titel: 'Wahrscheinlichkeit',
    kacheln: [
      {
        id: 'grundidee', emoji: '🎲', titel: 'Grundidee', videos: [{ titel: 'Einstufiger Zufallsversuch', youtubeId: 'rkLmLaFHodo' }],
        karten: [
          { text: 'Wahrscheinlichkeit ist ein Bruch: Anzahl der günstigen Ausgänge geteilt durch die Anzahl aller möglichen Ausgänge. 0 heisst unmöglich, 1 heisst sicher.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: '0', regel: 'Unmöglich - kann nie passieren.' },
              { n: '1', regel: 'Sicher - passiert immer.' },
              { n: 'P = günstig/möglich', regel: 'Wahrscheinlichkeit = Anzahl günstiger Ausgänge geteilt durch Anzahl aller möglichen Ausgänge.' },
              { n: 'als Prozent', regel: 'Einen Bruch wie 1/2 kannst du auch als 50% schreiben.' },
            ],
          },
          { text: 'Profi-Tipp: Zähl zuerst ALLE möglichen Ausgänge (der Nenner), dann die günstigen (der Zähler) - in dieser Reihenfolge verwechselst du am wenigsten.' },
          { text: 'Ein Würfel hat 6 Seiten. Wie gross ist die Wahrscheinlichkeit, eine gerade Zahl zu würfeln?\n| Günstige Ausgänge: 2, 4, 6 → 3 Stück\n| Alle möglichen: 6\n| P = 3/6 = 1/2' },
          { text: 'In einer Urne sind 4 rote und 6 blaue Kugeln. Wie gross ist P(rot)?\nP = 4/10 = 2/5' },
        ],
        check: [
          { frage: 'In einem Beutel sind 3 grüne und 7 gelbe Kugeln. Wie gross ist P(grün)?', optionen: ['3/10', '7/10', '3/7', '7/3'], richtig: 0, erklaerung: 'Günstig (grün) = 3, alle = 10. P = 3/10. Bei 3/7 wurden nur die gelben Kugeln als Nenner genommen.' },
          { frage: 'Ein Glücksrad bleibt sicher auf einem seiner 4 Felder stehen. Wie gross ist diese Wahrscheinlichkeit?', optionen: ['1 (100%)', '0', '4', '1/4'], richtig: 0, erklaerung: 'Ein sicheres Ereignis hat die Wahrscheinlichkeit 1 (= 100%). Bei 1/4 wurde mit der Wahrscheinlichkeit EINES bestimmten Feldes verwechselt.' },
          { frage: 'Ein Würfel wird 600 Mal geworfen. Wie oft erwartest du ungefähr eine 6?', optionen: ['ca. 100 Mal', 'ca. 600 Mal', 'ca. 6 Mal', 'ca. 50 Mal'], richtig: 0, erklaerung: 'P(6) = 1/6. Erwartete Anzahl: 600 · 1/6 = 100. Bei 50 wurde durch 12 statt durch 6 geteilt.' },
        ],
      },
      {
        id: 'baum', emoji: '🌳', titel: 'Baumdiagramm & Pfadregel', videos: [{ titel: 'Baumdiagramm', youtubeId: 'mBknBnww5fA' }, { titel: 'Zweistufiger Zufallsversuch', youtubeId: '-z3BBJjJPOE' }, { titel: 'Baumdiagramm (Realschule Abschlussprüfung)', youtubeId: 'sJfrgdfYlPM' }],
        karten: [
          { text: 'Ein Wahrscheinlichkeitsbaum zeigt alle möglichen Wege wie ein Wegweiser mit Verzweigungen. An jedem Ast steht eine Wahrscheinlichkeit.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'ein Ast entlang', regel: 'Die Wahrscheinlichkeiten entlang EINES Weges werden multipliziert.' },
              { n: 'mehrere Wege zum Ziel', regel: 'Führen mehrere Äste zum gleichen Ergebnis, werden ihre Wahrscheinlichkeiten addiert.' },
              { n: 'Summe an einer Verzweigung', regel: 'Alle Äste, die von einem Punkt abgehen, ergeben zusammen immer 1 (= 100%).' },
              { n: 'Pfadregel', regel: 'Der Name für "entlang multiplizieren, verschiedene Wege addieren".' },
            ],
          },
          { text: 'Profi-Tipp: Zeichne IMMER den ganzen Baum, auch wenn die Aufgabe nur einen Ast verlangt - so siehst du alle Wahrscheinlichkeiten auf einen Blick und verwechselst nichts.' },
          { text: 'Eine Urne hat 3 rote und 2 blaue Kugeln. Du ziehst 2 Mal MIT Zurücklegen. Wie gross ist P(beide rot)?\n| P(rot) beim 1. Zug: 3/5\n| P(rot) beim 2. Zug (wieder 3/5, da zurückgelegt): 3/5\n| Entlang des Astes multiplizieren: 3/5 · 3/5 = 9/25' },
          { text: 'Wie gross ist P(genau eine rote Kugel bei 2 Zügen)?\n| Weg 1: rot dann blau: 3/5 · 2/5 = 6/25\n| Weg 2: blau dann rot: 2/5 · 3/5 = 6/25\n| Zwei Wege zum selben Ziel, also addieren: 6/25 + 6/25 = 12/25' },
        ],
        check: [
          { frage: 'Urne: 4 rote, 1 blaue Kugel. 2 Züge MIT Zurücklegen. P(beide rot)?', optionen: ['16/25', '8/25', '4/5', '2/5'], richtig: 0, erklaerung: 'P(rot) = 4/5 bei jedem Zug. Entlang multiplizieren: 4/5 · 4/5 = 16/25. Bei 8/25 wurden die Brüche addiert statt multipliziert.' },
          { frage: 'Im Baumdiagramm gehen an einer Verzweigung zwei Äste ab, einer mit P = 0.3. Wie gross ist der andere Ast?', optionen: ['0.7', '0.3', '1.3', '0.4'], richtig: 0, erklaerung: 'Alle Äste an einer Verzweigung ergeben zusammen 1: 1 − 0.3 = 0.7.' },
          { frage: 'Eine Münze wird 2 Mal geworfen (Kopf/Zahl, je P = 1/2). Wie gross ist P(genau einmal Kopf)?', optionen: ['1/2', '1/4', '1', '3/4'], richtig: 0, erklaerung: 'Zwei Wege führen zu "genau einmal Kopf": Kopf-Zahl (1/2 · 1/2 = 1/4) und Zahl-Kopf (1/4). Addiert: 1/4 + 1/4 = 1/2.' },
        ],
      },
      {
        id: 'zuruecklegen', emoji: '🔁', titel: 'Mit oder ohne Zurücklegen', videos: [{ titel: 'Ziehen ohne Zurücklegen', youtubeId: 'TsiAKQtwY8Y' }],
        karten: [
          { text: 'Zurücklegen heisst: Die gezogene Kugel kommt zurück in die Urne, bevor du nochmal ziehst - die Chancen bleiben gleich. Ohne Zurücklegen wird die Urne jedes Mal kleiner, und die Chancen ändern sich.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'mit Zurücklegen', regel: 'Gleiche Wahrscheinlichkeiten bei jedem Zug - die Urne bleibt unverändert.' },
              { n: 'ohne Zurücklegen', regel: 'Die Anzahl Kugeln UND die Zusammensetzung ändern sich nach jedem Zug.' },
              { n: 'im Baum erkennen', regel: 'Mit Zurücklegen: An jeder Verzweigung die gleichen Zahlen. Ohne: Die Zahlen werden kleiner.' },
              { n: 'Reihenfolge ohne Zurücklegen', regel: 'Jede gezogene Kugel fehlt beim nächsten Zug im Nenner.' },
            ],
          },
          { text: 'Profi-Tipp: Lies die Aufgabe genau: Steht da "mit Zurücklegen" oder "ohne Zurücklegen"? Das ändert JEDEN Ast im Baum.' },
          { text: 'Urne mit 2 roten, 3 blauen Kugeln (5 total). 2 Züge.\nMIT Zurücklegen: P(rot, dann rot) = 2/5 · 2/5 = 4/25\nOHNE Zurücklegen: P(rot, dann rot) = 2/5 · 1/4 = 2/20 = 1/10\n\nOhne Zurücklegen bleibt nach dem ersten Zug nur noch 1 rote Kugel von 4 übrigen.' },
        ],
        check: [
          { frage: 'Urne: 3 rote, 2 blaue Kugeln (5 total), OHNE Zurücklegen. P(1. Zug rot, 2. Zug rot)?', optionen: ['3/10', '9/25', '3/5', '2/4'], richtig: 0, erklaerung: '1. Zug: 3/5. 2. Zug (ohne Zurücklegen, eine rote weg): 2/4. Zusammen: 3/5 · 2/4 = 6/20 = 3/10. Bei 9/25 wurde fälschlich mit Zurücklegen gerechnet (3/5 · 3/5).' },
          { frage: 'Urne: 3 rote, 2 blaue Kugeln, MIT Zurücklegen, 2 Züge. P(beide rot)?', optionen: ['9/25', '3/10', '6/20', '3/5'], richtig: 0, erklaerung: 'Mit Zurücklegen bleibt P(rot) = 3/5 bei jedem Zug: 3/5 · 3/5 = 9/25.' },
          { frage: 'Woran erkennst du im Baumdiagramm, dass OHNE Zurücklegen gezogen wurde?', optionen: ['Die Zahlen im Bruch werden bei jedem Ast kleiner', 'Die Zahlen bleiben bei jedem Ast gleich', 'Es gibt nur einen Ast', 'Die Summe an jeder Verzweigung ist nicht 1'], richtig: 0, erklaerung: 'Ohne Zurücklegen fehlt die gezogene Kugel beim nächsten Mal - Zähler und Nenner werden kleiner. Mit Zurücklegen bleiben die Zahlen gleich.' },
        ],
      },
      {
        id: 'gluecksrad', emoji: '🎡', titel: 'Glücksrad & Flächen', videos: [{ titel: 'Glücksrad - Baumdiagramm', youtubeId: 'IkAZPaNlemI' }, { titel: 'Glücksrad - Wahrscheinlichkeitsverteilung', youtubeId: 'q6Rk3xD0xNQ' }],
        karten: [
          { text: 'Ein Glücksrad mit ungleich grossen Feldern ist wie eine Pizza mit unterschiedlich grossen Stücken: Je grösser das Stück (der Winkel), desto grösser die Chance, dass der Zeiger dort stehen bleibt.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'ganzer Kreis = 360°', regel: 'Der ganze Kreis hat 360°, das entspricht der Wahrscheinlichkeit 1.' },
              { n: 'Winkel → Wahrscheinlichkeit', regel: 'P(Feld) = Winkel des Feldes : 360°.' },
              { n: 'Fläche statt Winkel', regel: 'Genauso geht es mit der Fläche: P(Feld) = Fläche des Feldes : Gesamtfläche.' },
              { n: 'alle Felder zusammen', regel: 'Alle Feld-Wahrscheinlichkeiten zusammen ergeben immer 1.' },
            ],
          },
          { text: 'Profi-Tipp: Kennst du nur die Winkel von drei der vier Felder, rechne das vierte über "360° minus die anderen".' },
          { text: 'Ein Glücksrad hat vier Felder: A ist ein Viertel (90°), D ist die Hälfte (180°). B und C teilen sich den Rest zu gleichen Teilen.\n| Rest für B und C: 360° − 90° − 180° = 90°\n| Je zur Hälfte: 90° : 2 = 45° je\n| P(B) = 45°/360° = 1/8' },
          { text: 'Das Rad wird 800 Mal gedreht. Wie oft bleibt es ungefähr auf A stehen?\nP(A) = 90°/360° = 1/4\n800 · 1/4 = 200 Mal' },
        ],
        check: [
          { frage: 'Ein Glücksrad-Feld hat 120°. Wie gross ist seine Wahrscheinlichkeit?', optionen: ['1/3', '1/12', '3', '120/360 (nicht kürzbar)'], richtig: 0, erklaerung: 'P = 120°/360° = 1/3. Bei 1/12 wurde falsch gekürzt.' },
          { frage: 'Drei Felder eines Glücksrads haben 90°, 120° und 60°. Wie gross ist der Winkel des vierten Feldes?', optionen: ['90°', '270°', '60°', '30°'], richtig: 0, erklaerung: '360° − 90° − 120° − 60° = 90°.' },
          { frage: 'Ein Feld mit P = 1/5 wird 400 Mal gedreht. Wie oft bleibt es ungefähr auf diesem Feld stehen?', optionen: ['ca. 80 Mal', 'ca. 20 Mal', 'ca. 400 Mal', 'ca. 5 Mal'], richtig: 0, erklaerung: '400 · 1/5 = 80.' },
        ],
      },
      {
        id: 'kombinatorik', emoji: '🔢', titel: 'Kombinatorik', videos: [{ titel: 'Anzahl der Möglichkeiten berechnen', youtubeId: 'GpioDtIFtN4' }, { titel: 'Produktregel', youtubeId: 'fLPxMfgUxVk' }],
        karten: [
          { text: 'Manchmal willst du nicht die Wahrscheinlichkeit wissen, sondern nur: Wie viele verschiedene Möglichkeiten gibt es überhaupt?' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'alle verschieden', regel: 'n verschiedene Dinge in einer Reihenfolge: n · (n−1) · (n−2) · ... · 1 (genannt n Fakultät, n!).' },
              { n: 'mit Wiederholung', regel: 'Kommen gleiche Dinge mehrmals vor, teilst du durch die Fakultät der Wiederholungen.' },
              { n: 'Baum/Liste', regel: 'Bei wenigen Möglichkeiten einfach alle auflisten oder einen Baum zeichnen.' },
              { n: 'mal statt plus', regel: 'Bei "erst dies, dann das" werden die Anzahl Möglichkeiten multipliziert.' },
            ],
          },
          { text: 'Profi-Tipp: Zähl zuerst, wie viele Plätze oder Schritte es gibt, und wie viele Möglichkeiten an jedem Platz - dann multiplizierst du alles zusammen.' },
          { text: 'Ein Beutel hat die Kugeln B, E, E (3 Kugeln, 2 davon gleich). Wie viele verschiedene "Wörter" entstehen, wenn alle 3 ohne Zurücklegen gezogen werden?\n| Wären alle 3 verschieden: 3! = 6\n| Die zwei E sind aber gleich, jede Reihenfolge der E\'s zählt doppelt: durch 2! = 2 teilen\n| 3! : 2! = 6 : 2 = 3\n\nDie 3 Wörter: BEE, EBE, EEB.' },
          { text: 'Wie gross ist P(genau das Wort "BEE")?\nAlle 3 Wörter sind gleich wahrscheinlich: P = 1/3' },
        ],
        check: [
          { frage: 'Ein Beutel hat die Kugeln X, Y, Y, Y (4 Kugeln, 3 gleich). Wie viele verschiedene Wörter entstehen?', optionen: ['4', '24', '12', '1'], richtig: 0, erklaerung: '4! = 24 (wenn alle verschieden wären), geteilt durch 3! = 6 (für die drei gleichen Y): 24 : 6 = 4. Die 4 Wörter: XYYY, YXYY, YYXY, YYYX.' },
          { frage: '3 verschiedene Freunde stellen sich in eine Reihe. Wie viele Reihenfolgen gibt es?', optionen: ['6', '3', '9', '1'], richtig: 0, erklaerung: '3 verschiedene Dinge in einer Reihenfolge: 3! = 3 · 2 · 1 = 6.' },
          { frage: 'Ein Beutel hat die Kugeln K, K, L, L (4 Kugeln, je 2 gleich). Wie viele verschiedene Wörter entstehen?', optionen: ['6', '24', '4', '12'], richtig: 0, erklaerung: '4! = 24, geteilt durch 2! (für K, K) UND durch 2! (für L, L): 24 : 2 : 2 = 6.' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ Bei zwei Zügen MIT Zurücklegen wird beim zweiten Zug trotzdem mit einer Kugel weniger gerechnet. ✅ Mit Zurücklegen bleibt die Urne bei jedem Zug gleich - gleiche Brüche.' },
          { text: '❌ Entlang eines Astes im Baum werden die Wahrscheinlichkeiten addiert statt multipliziert. ✅ Entlang EINES Weges multiplizieren, nur verschiedene Wege zum selben Ziel werden addiert.' },
          { text: '❌ Beim Glücksrad wird der Winkel direkt als Wahrscheinlichkeit verwendet (z. B. 90° = P von 90). ✅ Immer durch 360° teilen: P = Winkel : 360°.' },
          { text: '❌ Bei "mit Wiederholung" wird vergessen, durch die Fakultät der gleichen Elemente zu teilen. ✅ n! durch die Fakultät jeder Gruppe gleicher Elemente teilen.' },
          { text: '❌ Die Summe aller Äste an einer Verzweigung wird nicht auf 1 geprüft. ✅ Alle Äste, die von einem Punkt abgehen, müssen sich zu 1 (100%) addieren.' },
          { text: '❌ "Unmöglich" wird mit der Wahrscheinlichkeit 1 verwechselt. ✅ Unmöglich = 0, sicher = 1.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Urne: 5 rote, 3 blaue Kugeln. Wie gross ist P(rot)?', loesung: 'P = 5/8.' },
          { text: 'Ein Würfel wird 200 Mal geworfen. Wie oft ungefähr eine 3?', loesung: 'P(3) = 1/6. 200 · 1/6 ≈ 33 Mal.' },
          { text: 'Urne: 2 rote, 3 blaue (5 total). 2 Züge MIT Zurücklegen. P(beide blau)?', loesung: '3/5 · 3/5 = 9/25.' },
          { text: 'Eine Münze wird 2 Mal geworfen. Wie gross ist P(mindestens einmal Kopf)?', loesung: 'Gegenteil: P(keinmal Kopf) = 1/2 · 1/2 = 1/4. P(mindestens einmal) = 1 − 1/4 = 3/4.' },
          { text: 'Urne: 4 rote, 2 blaue (6 total), OHNE Zurücklegen, 2 Züge. P(beide rot)?', loesung: '4/6 · 3/5 = 12/30 = 2/5.' },
          { text: 'Dieselbe Urne (4 rote, 2 blaue), aber MIT Zurücklegen. P(beide rot)?', loesung: '4/6 · 4/6 = 16/36 = 4/9.' },
          { text: 'Ein Glücksrad-Feld hat 72°. Wie gross ist P?', loesung: 'P = 72°/360° = 1/5.' },
          { text: 'Zwei Felder eines Glücksrads haben 150° und 90°. Wie gross ist das dritte Feld?', loesung: '360° − 150° − 90° = 120°.' },
          { text: 'Ein Feld mit P = 3/10 wird 500 Mal gedreht. Wie oft ungefähr?', loesung: '500 · 3/10 = 150 Mal.' },
          { text: 'Kugeln A, A, B, B, B (5 Kugeln, 2 gleich A, 3 gleich B). Wie viele verschiedene Wörter?', loesung: '5! : (2! · 3!) = 120 : (2 · 6) = 10.' },
          { text: '4 verschiedene Bücher werden ins Regal gestellt. Wie viele Reihenfolgen gibt es?', loesung: '4! = 24.' },
          { text: 'Urne: 3 rote, 2 blaue (5 total). OHNE Zurücklegen, 2 Züge. P(genau eine rote)?', loesung: 'Weg rot-blau: 3/5 · 2/4 = 3/10. Weg blau-rot: 2/5 · 3/4 = 3/10. Zusammen: 3/10 + 3/10 = 3/5.' },
          { text: 'Glücksrad: A = 100°, B = 140°, C = Rest. Bei 900 Drehungen, wie oft ungefähr C?', loesung: 'C = 360° − 100° − 140° = 120°. P(C) = 120°/360° = 1/3. 900 · 1/3 = 300 Mal.' },
          { text: 'Kugeln R, R, R, G, G (5 Kugeln, 3 gleich R, 2 gleich G), alle gezogen. Wie viele Wörter, und wie gross ist P(ein bestimmtes Wort)?', loesung: '5! : (3! · 2!) = 120 : 12 = 10 Wörter. P(ein bestimmtes) = 1/10.' },
          { text: 'Urne: 1 rote, 4 blaue (5 total), MIT Zurücklegen, 3 Züge. P(alle 3 blau)?', loesung: '4/5 · 4/5 · 4/5 = 64/125.' },
          { text: 'Urne: 2 rote, 3 blaue (5 total), OHNE Zurücklegen, 3 Züge. P(1. rot, 2. rot, 3. blau)?', loesung: '2/5 · 1/4 · 3/3 = 2/20 = 1/10 (nach den zwei roten sind nur noch blaue übrig, also 3/3 = 1).' },
        ],
        check: [],
      },
    ],
  },
  'Proportionalität': {
    titel: 'Proportionalität',
    kacheln: [
      {
        id: 'direkt', emoji: '➡️', titel: 'Direkt proportional', videos: [{ titel: 'Dreisatz - Einführung', youtubeId: 'ELKsWSoQUjo' }, { titel: 'Proportionale Zuordnung', youtubeId: 'MT3hVo_BfT0' }],
        karten: [
          { text: 'Direkt proportional heisst: Doppelt so viel von der einen Sache → doppelt so viel von der anderen. Kaufst du doppelt so viele Äpfel, zahlst du doppelt so viel.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'doppelt → doppelt', regel: 'Mehr von der einen Grösse heisst gleich viel mehr von der anderen.' },
              { n: 'Dreisatz-Schema', regel: 'Erst auf EINS runterrechnen (geteilt), dann auf die gesuchte Anzahl hochrechnen (mal).' },
              { n: 'pro Einheit', regel: 'Der Wert für 1 Stück/Minute/km heisst Einheitswert.' },
              { n: 'Graph', regel: 'Eine direkt proportionale Grösse ergibt eine Gerade durch den Ursprung (0, 0).' },
            ],
          },
          { text: 'Profi-Tipp: Rechne immer über EINS: Wie viel ist es für 1 Stück/Minute/Kilometer? Von dort kommst du mit Malnehmen zu jeder beliebigen Menge.' },
          { text: 'Ein Drucker druckt 240 Seiten in 8 Minuten. Wie viele Seiten in 15 Minuten?\n| 1 Minute: 240 : 8 = 30 Seiten\n| 15 Minuten: 30 · 15 = 450 Seiten' },
          { text: 'Eine Pumpe fördert 360 Liter in 6 Minuten. Wie lange braucht sie für 900 Liter?\n| 1 Liter braucht: 6 : 360 = 1/60 Minute\n| 900 Liter: 900 · 1/60 = 15 Minuten' },
        ],
        check: [
          { frage: 'Ein Zug fährt 280 km in 3.5 Stunden. Wie weit kommt er in 5 Stunden bei gleicher Geschwindigkeit?', optionen: ['400 km', '560 km', '200 km', '350 km'], richtig: 0, erklaerung: '280 : 3.5 = 80 km/h. 80 · 5 = 400 km. Bei 560 wurde mit 3.5 multipliziert statt dividiert.' },
          { frage: 'Für 4 kg Äpfel zahlst du 10 Franken. Wie viel kosten 6 kg?', optionen: ['15 Fr', '12 Fr', '20 Fr', '6.67 Fr'], richtig: 0, erklaerung: '1 kg kostet 10 : 4 = 2.5 Fr. 6 kg kosten 6 · 2.5 = 15 Fr.' },
          { frage: 'Welche Aussage beschreibt "direkt proportional" richtig?', optionen: ['Doppelte Menge → doppelter Preis', 'Doppelte Menge → halber Preis', 'Doppelte Menge → gleicher Preis', 'Der Preis hat nichts mit der Menge zu tun'], richtig: 0, erklaerung: 'Direkt proportional heisst: Beide Grössen wachsen im gleichen Verhältnis - doppelt so viel heisst doppelt so teuer.' },
        ],
      },
      {
        id: 'umgekehrt', emoji: '🔄', titel: 'Umgekehrt proportional', videos: [{ titel: 'Umgekehrt-proportionale Zuordnung', youtubeId: 'ISGhREON0T4' }],
        karten: [
          { text: 'Umgekehrt proportional heisst: Mehr von der einen Sache → weniger von der anderen. Mehr Leute, die zusammen anpacken, brauchen weniger Zeit für die gleiche Arbeit.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'mehr → weniger', regel: 'Mehr Arbeiter oder Maschinen → weniger Zeit für die gleiche Arbeit.' },
              { n: 'Produkt bleibt gleich', regel: 'Anzahl · Zeit ergibt immer die gleiche "Gesamtarbeit" (z. B. Arbeitertage).' },
              { n: 'Dreisatz-Schema', regel: 'Erst die Gesamtarbeit berechnen (Anzahl · Zeit), dann durch die neue Anzahl teilen.' },
              { n: 'Graph', regel: 'Eine umgekehrt proportionale Grösse ergibt eine fallende Kurve, keine Gerade.' },
            ],
          },
          { text: 'Profi-Tipp: Rechne über die Gesamtarbeit: Wie viele "Arbeitertage" braucht das Ganze? Das bleibt immer gleich, egal wie viele mitmachen.' },
          { text: '7 Maler brauchen 9 Tage für ein Haus. Wie lange brauchen 3 Maler bei gleicher Leistung?\n| Gesamtarbeit: 7 · 9 = 63 Malertage\n| Mit 3 Malern: 63 : 3 = 21 Tage' },
          { text: '12 Maschinen füllen ein Lager in 10 Tagen. Wie lange brauchen 8 Maschinen?\n| Gesamtarbeit: 12 · 10 = 120 Maschinentage\n| Mit 8 Maschinen: 120 : 8 = 15 Tage' },
        ],
        check: [
          { frage: '6 Arbeiter streichen einen Zaun in 8 Tagen. Wie lange brauchen 4 Arbeiter?', optionen: ['12 Tage', '5.3 Tage', '32 Tage', '10 Tage'], richtig: 0, erklaerung: 'Gesamtarbeit: 6 · 8 = 48 Arbeitertage. Mit 4 Arbeitern: 48 : 4 = 12 Tage. Bei 5.3 wurde fälschlich wie bei direkt proportional gerechnet.' },
          { frage: 'Welche Situation ist umgekehrt proportional?', optionen: ['Mehr Bauarbeiter → weniger Tage für dasselbe Haus', 'Mehr Kilometer → mehr Benzinkosten', 'Mehr Stunden → mehr Lohn', 'Mehr Äpfel → mehr Kosten'], richtig: 0, erklaerung: 'Nur bei den Bauarbeitern wächst die eine Grösse, während die andere kleiner wird - das ist umgekehrt proportional. Die anderen drei sind direkt proportional.' },
          { frage: '9 Pumpen leeren einen Teich in 6 Stunden. Wie lange brauchen 3 Pumpen?', optionen: ['18 Stunden', '2 Stunden', '27 Stunden', '3 Stunden'], richtig: 0, erklaerung: 'Gesamtarbeit: 9 · 6 = 54 Pumpenstunden. Mit 3 Pumpen: 54 : 3 = 18 Stunden.' },
        ],
      },
      {
        id: 'erkennen', emoji: '🔍', titel: 'Direkt oder umgekehrt?', videos: [{ titel: 'Direkt oder umgekehrt?', youtubeId: 'KtZuohtlMCw' }],
        karten: [
          { text: 'Bevor du rechnest, frag dich: Wenn die eine Zahl grösser wird, wird die andere auch grösser (direkt) oder kleiner (umgekehrt)? Dieser kurze Check verhindert den grössten Fehler bei diesem Thema.' },
          {
            text: 'Tippe die Hinweise an.',
            visual: 'chips',
            chips: [
              { n: 'Signalwörter direkt', regel: 'Preis, Menge, Strecke bei gleicher Geschwindigkeit, Gewicht.' },
              { n: 'Signalwörter umgekehrt', regel: 'Mehrere Personen oder Maschinen teilen sich eine Arbeit, Geschwindigkeit und Zeit bei fester Strecke.' },
              { n: 'Plausibilität prüfen', regel: 'Ist die Antwort grösser oder kleiner als erwartet? Mehr Arbeiter sollten NIE mehr Zeit brauchen.' },
              { n: 'Extremfall-Trick', regel: 'Stell dir eine riesige Zahl vor (z. B. 1000 Arbeiter) - wird die Zeit dann riesig oder winzig klein?' },
            ],
          },
          { text: 'Profi-Tipp: Nutze den Extremfall-Trick: Müsste nur 1 Person die ganze Arbeit machen, bräuchte sie am längsten. Das bestätigt: mehr Personen → weniger Zeit, also umgekehrt proportional.' },
          { text: '"Eine Kerze brennt in 4 Stunden ab. Wie lange brennen 3 gleiche Kerzen?" - Trickfrage: Das ist WEDER direkt noch umgekehrt proportional! Jede Kerze brennt für sich 4 Stunden, egal wie viele es sind (sie brennen gleichzeitig, nicht nacheinander).' },
          { text: '"5 Kopien kosten 2 Franken. Wie viel kosten 20 Kopien?" - Mehr Kopien, mehr Kosten: direkt proportional. 2 : 5 = 0.4 Fr pro Kopie, 20 · 0.4 = 8 Franken.' },
        ],
        check: [
          { frage: '"3 Köche backen 60 Kuchen in 4 Stunden. Wie lange brauchen 6 Köche für 60 Kuchen?" Direkt oder umgekehrt proportional?', optionen: ['Umgekehrt - mehr Köche, weniger Zeit', 'Direkt - mehr Köche, mehr Zeit', 'Weder noch', 'Nicht bestimmbar'], richtig: 0, erklaerung: 'Mehr Köche schaffen die gleiche Arbeit schneller - das ist umgekehrt proportional.' },
          { frage: '"1 Liter Farbe reicht für 8 m² Wand. Wie viele Liter für 24 m²?" Direkt oder umgekehrt proportional?', optionen: ['Direkt - mehr Fläche, mehr Farbe', 'Umgekehrt - mehr Fläche, weniger Farbe', 'Weder noch', 'Nicht bestimmbar'], richtig: 0, erklaerung: 'Mehr Wandfläche braucht mehr Farbe im gleichen Verhältnis - direkt proportional.' },
          { frage: '"Ein Läufer braucht für 1 Runde 2 Minuten. Wie lange für 5 Runden?" Was für eine Beziehung ist das bei gleichem Tempo?', optionen: ['Direkt proportional', 'Umgekehrt proportional', 'Weder noch, die Zeit bleibt gleich', 'Nicht bestimmbar'], richtig: 0, erklaerung: 'Mehr Runden bei gleichem Tempo brauchen proportional mehr Zeit - direkt proportional.' },
        ],
      },
      {
        id: 'gemischt', emoji: '📝', titel: 'Gemischte Textaufgaben', videos: [{ titel: 'Gemischte Textaufgaben', youtubeId: 'EHYyHg1Wmuk' }],
        karten: [
          { text: 'Manche Aufgaben haben einen Zwischenschritt, der sich während der Aufgabe ändert - zum Beispiel wenn mitten in der Arbeit noch jemand dazukommt.' },
          {
            text: 'Tippe die Schritte an.',
            visual: 'chips',
            chips: [
              { n: 'Zwischenschritt', regel: 'Berechne zuerst, wie viel schon erledigt ist, bevor sich etwas ändert.' },
              { n: 'Rest berechnen', regel: 'Gesamtarbeit minus bereits erledigte Arbeit = was noch übrig bleibt.' },
              { n: 'neu aufteilen', regel: 'Den Rest mit der NEUEN Anzahl Personen oder Maschinen weiterrechnen.' },
              { n: 'Verhältnis teilen', regel: 'Eine Menge im Verhältnis a:b aufteilen: durch (a+b) teilen, dann mit a bzw. b multiplizieren.' },
            ],
          },
          { text: 'Profi-Tipp: Zeichne dir eine Zeitlinie: Erste Phase (alte Anzahl) - Wechsel - zweite Phase (neue Anzahl). So verlierst du den Überblick nicht.' },
          { text: 'Ein Projekt braucht 10 Techniker 18 Tage. Nach 6 Tagen kommen 5 weitere dazu (neu 15 total). Wie lange dauert das Projekt insgesamt?\n| Gesamtarbeit: 10 · 18 = 180 Technikertage\n| Nach 6 Tagen erledigt: 10 · 6 = 60\n| Rest: 180 − 60 = 120\n| Mit 15 Technikern: 120 : 15 = 8 Tage\n| Total: 6 + 8 = 14 Tage' },
          { text: 'Ein 150 m langes Kabel wird so geteilt, dass ein Stück 3/2 der Länge des anderen ist. Wie lang ist das kürzere Stück?\n| Verhältnis 2:3 (kürzer:länger)\n| In 5 Teile aufteilen: 150 : 5 = 30\n| Kürzeres Stück: 2 · 30 = 60 m' },
        ],
        check: [
          { frage: '8 Maler brauchen 12 Tage für ein Haus. Nach 3 Tagen kommen 4 weitere dazu (neu 12 total). Wie lange dauert es insgesamt?', optionen: ['9 Tage', '6 Tage', '15 Tage', '12 Tage'], richtig: 0, erklaerung: 'Gesamtarbeit: 8 · 12 = 96 Malertage. Nach 3 Tagen erledigt: 8 · 3 = 24. Rest: 96 − 24 = 72. Mit 12 Malern: 72 : 12 = 6 Tage. Total: 3 + 6 = 9 Tage.' },
          { frage: 'Ein 100 m langes Seil wird im Verhältnis 2:3 geteilt. Wie lang ist das kürzere Stück?', optionen: ['40 m', '60 m', '50 m', '33.3 m'], richtig: 0, erklaerung: 'Verhältnis 2:3 ergibt 5 Teile. 100 : 5 = 20 m pro Teil. Kürzeres Stück: 2 · 20 = 40 m.' },
          { frage: 'Ein 90 m Draht wird so geteilt, dass ein Stück doppelt so lang ist wie das andere. Wie lang ist das längere Stück?', optionen: ['60 m', '45 m', '30 m', '80 m'], richtig: 0, erklaerung: 'Verhältnis 1:2 ergibt 3 Teile. 90 : 3 = 30 m pro Teil. Längeres Stück: 2 · 30 = 60 m.' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ Bei umgekehrt proportional wird trotzdem einfach wie bei direkt proportional "über eins" gerechnet. ✅ Erst die Gesamtarbeit (Anzahl · Zeit) berechnen, dann durch die neue Anzahl teilen.' },
          { text: '❌ Mehr Arbeiter werden mit MEHR Zeit verbunden. ✅ Mehr Arbeiter bedeuten WENIGER Zeit für die gleiche Arbeit (umgekehrt proportional).' },
          { text: '❌ Bei einer Aufgabe mit Zwischenschritt wird die ganze Zeit mit der neuen Anzahl berechnet, nicht nur der Rest. ✅ Erst die bereits erledigte Arbeit abziehen, dann nur den Rest mit der neuen Anzahl weiterrechnen.' },
          { text: '❌ Beim Verhältnis-Teilen wird die Gesamtlänge direkt durch eine der beiden Verhältniszahlen geteilt. ✅ Erst die Verhältniszahlen addieren (die Anzahl Teile), dann die Gesamtlänge durch diese Summe teilen.' },
          { text: '❌ Es wird nicht geprüft, ob eine Aufgabe überhaupt proportional ist (z. B. "3 Kerzen brennen gleichzeitig"). ✅ Erst überlegen: Ändert sich die zweite Grösse überhaupt mit der ersten?' },
          { text: '❌ Beim Dreisatz wird direkt von der gegebenen Zahl auf die gesuchte Zahl gerechnet, ohne über die 1 zu gehen. ✅ Rechne immer zuerst auf 1 Einheit um, dann auf die gesuchte Menge.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Ein Drucker druckt 150 Seiten in 5 Minuten. Wie viele Seiten in 12 Minuten?', loesung: '150 : 5 = 30 Seiten/Minute. 30 · 12 = 360 Seiten.' },
          { text: '5 kg Mehl kosten 8 Franken. Wie viel kosten 12 kg?', loesung: '8 : 5 = 1.6 Fr/kg. 1.6 · 12 = 19.2 Franken.' },
          { text: '4 Bagger graben einen Graben in 10 Tagen. Wie lange brauchen 5 Bagger?', loesung: 'Gesamtarbeit: 4 · 10 = 40 Baggertage. 40 : 5 = 8 Tage.' },
          { text: '6 Maschinen füllen ein Lager in 14 Tagen. Wie lange brauchen 7 Maschinen?', loesung: 'Gesamtarbeit: 6 · 14 = 84 Maschinentage. 84 : 7 = 12 Tage.' },
          { text: '"2 Bäcker backen 100 Brote in 5 Stunden. Wie lange brauchen 4 Bäcker für 100 Brote?" Direkt oder umgekehrt?', loesung: 'Umgekehrt: 2 · 5 = 10 Bäckerstunden. 10 : 4 = 2.5 Stunden.' },
          { text: '"3 Liter Farbe reichen für 18 m² Wand. Wie viele Liter für 30 m²?" Direkt oder umgekehrt?', loesung: 'Direkt: 3 : 18 = 1/6 Liter pro m². 30 · 1/6 = 5 Liter.' },
          { text: 'Ein 72 m Seil wird im Verhältnis 3:5 geteilt. Wie lang ist das kürzere Stück?', loesung: '3 + 5 = 8 Teile. 72 : 8 = 9 m pro Teil. Kürzeres Stück: 3 · 9 = 27 m.' },
          { text: 'Ein 96 m Draht wird im Verhältnis 1:3 geteilt. Wie lang ist das längere Stück?', loesung: '1 + 3 = 4 Teile. 96 : 4 = 24 m pro Teil. Längeres Stück: 3 · 24 = 72 m.' },
          { text: 'Ein Auto fährt 180 km in 2.5 Stunden. Wie weit in 4 Stunden?', loesung: '180 : 2.5 = 72 km/h. 72 · 4 = 288 km.' },
          { text: '9 Arbeiter brauchen 8 Tage für ein Projekt. Wie viele Arbeiter braucht es, um es in 6 Tagen fertigzustellen?', loesung: 'Gesamtarbeit: 9 · 8 = 72 Arbeitertage. 72 : 6 = 12 Arbeiter.' },
          { text: '7 Maler brauchen 20 Tage für ein Haus. Nach 5 Tagen kommen 8 weitere dazu (neu 15 total). Wie lange dauert es insgesamt?', loesung: 'Gesamtarbeit: 7 · 20 = 140 Malertage. Erledigt nach 5 Tagen: 35. Rest: 105. Mit 15 Malern: 105 : 15 = 7 Tage. Total: 5 + 7 = 12 Tage.' },
          { text: '10 Techniker brauchen 21 Tage. Nach 7 Tagen kommen 4 weitere dazu (neu 14 total). Wie lange dauert es insgesamt?', loesung: 'Gesamtarbeit: 10 · 21 = 210 Technikertage. Erledigt nach 7 Tagen: 70. Rest: 140. Mit 14 Technikern: 140 : 14 = 10 Tage. Total: 7 + 10 = 17 Tage.' },
          { text: 'Ein 180 m langes Band wird im Verhältnis 4:5 geteilt. Das kürzere Stück wird danach nochmals in 2 gleiche Teile geschnitten. Wie lang ist jedes dieser kleinen Teile?', loesung: '4 + 5 = 9 Teile. 180 : 9 = 20 m pro Teil. Kürzeres Stück: 4 · 20 = 80 m. Geteilt durch 2: 40 m.' },
          { text: '15 Pumpen leeren einen Teich in 4.8 Stunden. Wie lange brauchen 8 Pumpen?', loesung: 'Gesamtarbeit: 15 · 4.8 = 72 Pumpenstunden. 72 : 8 = 9 Stunden.' },
          { text: '"5 Freunde teilen eine Pizza mit 20 Stücken zu gleichen Teilen. Wie viele Stücke bekommt jeder bei 4 Freunden?" Direkt oder umgekehrt - und wie viele Stücke?', loesung: 'Umgekehrt: Mehr Freunde, weniger Stücke pro Person. Bei 5 Freunden: 20 : 5 = 4 Stücke. Bei 4 Freunden: 20 : 4 = 5 Stücke.' },
          { text: '12 Arbeiter schaffen ein Projekt in 15 Tagen. Nach 5 Tagen fallen 2 Arbeiter aus (neu 10 total). Wie lange dauert das Projekt insgesamt?', loesung: 'Gesamtarbeit: 12 · 15 = 180 Arbeitertage. Erledigt nach 5 Tagen: 60. Rest: 120. Mit 10 Arbeitern: 120 : 10 = 12 Tage. Total: 5 + 12 = 17 Tage.' },
        ],
        check: [],
      },
    ],
  },
  'Statistik & Diagramme': {
    titel: 'Statistik & Diagramme',
    kacheln: [
      {
        id: 'haeufigkeiten', emoji: '📋', titel: 'Häufigkeiten', videos: [{ titel: 'Absolute & relative Häufigkeit', youtubeId: 'PBRoDcPymec' }],
        karten: [
          { text: 'Wenn du eine Umfrage auswertest, zählst du zuerst, wie oft jede Antwort vorkommt (absolute Häufigkeit) - und rechnest dann aus, welchen Anteil das von allen Antworten ist (relative Häufigkeit).' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'absolute Häufigkeit', regel: 'Wie oft kommt eine Antwort genau vor? Eine Zahl, kein Bruch.' },
              { n: 'relative Häufigkeit', regel: 'Absolute Häufigkeit geteilt durch die Gesamtzahl - als Bruch oder Prozent.' },
              { n: 'Summe = Gesamtzahl', regel: 'Alle absoluten Häufigkeiten zusammen ergeben die Gesamtzahl aller Befragten.' },
              { n: 'Summe = 100%', regel: 'Alle relativen Häufigkeiten (in Prozent) zusammen ergeben immer 100%.' },
            ],
          },
          { text: 'Profi-Tipp: Rechne zuerst alle absoluten Häufigkeiten aus und kontrolliere: Ergibt die Summe wirklich die Gesamtzahl? Erst dann die Prozente berechnen.' },
          { text: '25 Kinder wurden nach ihrem Lieblingstier gefragt: Hund 10, Katze 8, Pferd 7.\n| Absolute Häufigkeit Hund: 10\n| Relative Häufigkeit Hund: 10/25 = 2/5 = 40%\n| Kontrolle: 10 + 8 + 7 = 25 ✓' },
          { text: 'Relative Häufigkeiten in Prozent: Hund 40%, Katze 32%, Pferd 28%.\nKontrolle: 40% + 32% + 28% = 100% ✓' },
        ],
        check: [
          { frage: '40 Personen befragt: 16 mögen Kaffee. Wie gross ist die relative Häufigkeit in Prozent?', optionen: ['40%', '16%', '4%', '60%'], richtig: 0, erklaerung: '16 : 40 = 0.4 = 40%. Bei 16% wurde die absolute Häufigkeit direkt als Prozent gelesen.' },
          { frage: 'Bei einer Umfrage mit 50 Personen sind die relativen Häufigkeiten 30%, 45% und x%. Wie gross ist x?', optionen: ['25%', '75%', '15%', '35%'], richtig: 0, erklaerung: 'Alle relativen Häufigkeiten zusammen ergeben 100%: 100% − 30% − 45% = 25%.' },
          { frage: '60 Personen befragt, relative Häufigkeit einer Antwort ist 1/4. Wie viele Personen ist das?', optionen: ['15', '4', '24', '240'], richtig: 0, erklaerung: '1/4 von 60 = 60 : 4 = 15 Personen.' },
        ],
      },
      {
        id: 'balkendiagramm', emoji: '📊', titel: 'Richtiges Diagramm erkennen', videos: [{ titel: 'Säulendiagramm erstellen', youtubeId: 'yW2xP3_EGi4' }, { titel: 'Balkendiagramm erstellen', youtubeId: 'OKEL1dcCRVI' }],
        karten: [
          { text: 'Ein Balkendiagramm muss ehrlich sein: Die Höhe der Balken muss genau den Werten entsprechen, und die Skala muss alle Werte zeigen können.' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: 'Skala bei 0 beginnen', regel: 'Beginnt die Skala nicht bei 0, wirken Unterschiede viel grösser als sie sind.' },
              { n: 'Skala bis zum Maximum', regel: 'Die Skala muss mindestens bis zum grössten Wert reichen.' },
              { n: 'gleiche Schritte', regel: 'Die Skala sollte in gleichen, übersichtlichen Schritten steigen (z. B. 0, 2, 4, 6...).' },
              { n: 'Balkenlänge = Wert', regel: 'Die Länge jedes Balkens muss genau proportional zum Wert sein.' },
            ],
          },
          { text: 'Profi-Tipp: Schau zuerst auf die Skala an der Seite, bevor du die Balken vergleichst - eine falsche Skala kann auch richtige Zahlen völlig verzerrt aussehen lassen.' },
          {
            text: 'Drei Spieler gewinnen 4, 6 und 14 Spiele. Die Skala geht bis 16 in Schritten von 4 - jeder Balken ist genau so hoch wie sein Wert.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'line', x1: 30, y1: 140, x2: 185, y2: 140 },
                { type: 'line', x1: 30, y1: 148, x2: 30, y2: 20 },
                { type: 'text', x: 22, y: 143, label: '0', anchor: 'end', size: 10 },
                { type: 'text', x: 22, y: 113, label: '4', anchor: 'end', size: 10 },
                { type: 'text', x: 22, y: 83, label: '8', anchor: 'end', size: 10 },
                { type: 'text', x: 22, y: 53, label: '12', anchor: 'end', size: 10 },
                { type: 'text', x: 22, y: 23, label: '16', anchor: 'end', size: 10 },
                { type: 'rect', x: 50, y: 110, w: 30, h: 30, color: 'accent' },
                { type: 'rect', x: 95, y: 95, w: 30, h: 45, color: 'accent' },
                { type: 'rect', x: 140, y: 35, w: 30, h: 105, color: 'accent' },
                { type: 'text', x: 65, y: 150, label: 'A', size: 10 },
                { type: 'text', x: 110, y: 150, label: 'B', size: 10 },
                { type: 'text', x: 155, y: 150, label: 'C', size: 10 },
              ],
            },
          },
          { text: 'Falle: Würde die Skala nur bis 10 gehen, könnte der Balken für den Wert 14 gar nicht korrekt gezeichnet werden - er würde oben abgeschnitten oder falsch verkürzt wirken. Prüfe immer: Reicht die Skala bis zum höchsten Wert?' },
        ],
        check: [
          { frage: 'Drei Werte sind 3, 5 und 9. Welche Skala passt für ein korrektes Balkendiagramm?', optionen: ['0 bis 10 in Schritten von 2', '0 bis 8 in Schritten von 2', '5 bis 10 in Schritten von 1', '0 bis 9 in Schritten von 3 (9 selbst nicht enthalten)'], richtig: 0, erklaerung: 'Die Skala muss bei 0 beginnen und mindestens bis zum höchsten Wert (9) reichen - 0 bis 10 passt. Bei 0 bis 8 wäre der Wert 9 nicht darstellbar.' },
          { frage: 'Warum ist es unehrlich, wenn ein Balkendiagramm nicht bei 0 beginnt?', optionen: ['Die Unterschiede zwischen den Balken wirken grösser, als sie wirklich sind', 'Die Zahlen werden automatisch falsch', 'Es ist eigentlich kein Problem', 'Die Balken werden zu kurz'], richtig: 0, erklaerung: 'Wenn die Skala z. B. erst bei 8 beginnt, sehen kleine Unterschiede riesig aus, obwohl sie das in Wirklichkeit nicht sind.' },
          { frage: 'Ein Balken für den Wert 12 ist genau gleich lang gezeichnet wie ein Balken für den Wert 6. Was stimmt hier nicht?', optionen: ['Die Balkenlänge muss proportional zum Wert sein - 12 muss doppelt so lang sein wie 6', 'Das ist völlig richtig so', 'Die Skala ist zu klein', 'Die Werte wurden falsch addiert'], richtig: 0, erklaerung: 'Balkenlängen müssen genau proportional zu den Werten sein. 12 ist doppelt so viel wie 6, also muss der Balken auch doppelt so lang sein.' },
        ],
      },
      {
        id: 'kreisdiagramm', emoji: '🥧', titel: 'Kreisdiagramm berechnen', videos: [{ titel: 'Kreisdiagramm erstellen', youtubeId: 'ecdLniw5DM8' }],
        karten: [
          { text: 'Ein Kreisdiagramm teilt den vollen Kreis (360°) auf alle Antworten auf - wie ein Kuchen, der nach der Anzahl Stimmen angeschnitten wird.' },
          {
            text: 'Tippe die Schritte an.',
            visual: 'chips',
            chips: [
              { n: 'Gesamtzahl', regel: 'Erst alle Antworten zusammenzählen.' },
              { n: 'Grad pro Person', regel: '360° geteilt durch die Gesamtzahl.' },
              { n: 'Winkel pro Antwort', regel: 'Anzahl der Antwort mal Grad pro Person.' },
              { n: 'Kontrolle', regel: 'Alle Winkel zusammen müssen genau 360° ergeben.' },
            ],
          },
          { text: 'Profi-Tipp: Rechne immer zuerst "360° geteilt durch die Gesamtzahl" - dann hast du den Wert für EINE Person, und kannst jeden Winkel leicht ausrechnen.' },
          {
            text: 'Umfrage zur Lieblings-Eissorte bei 20 Personen: Vanille 5, Schoko 9, Erdbeere 6.\n| Grad pro Person: 360° : 20 = 18°\n| Vanille: 5 · 18° = 90°\n| Schoko: 9 · 18° = 162°\n| Erdbeere: 6 · 18° = 108°\n\nKontrolle: 90° + 162° + 108° = 360° ✓',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'circle', cx: 100, cy: 85, r: 55 },
                { type: 'line', x1: 100, y1: 85, x2: 155, y2: 85 },
                { type: 'line', x1: 100, y1: 85, x2: 100, y2: 140 },
                { type: 'line', x1: 100, y1: 85, x2: 83, y2: 32.7 },
                { type: 'text', x: 122.6, y: 107.6, label: 'Vanille', size: 10 },
                { type: 'text', x: 68.4, y: 90, label: 'Schoko', size: 10 },
                { type: 'text', x: 118.8, y: 59.1, label: 'Erdbeere', size: 10 },
              ],
            },
          },
        ],
        check: [
          { frage: 'Umfrage bei 30 Personen, eine Antwort kommt 9 Mal vor. Wie viel Grad entspricht das im Kreisdiagramm?', optionen: ['108°', '12°', '324°', '40°'], richtig: 0, erklaerung: '360° : 30 = 12° pro Person. 9 · 12° = 108°.' },
          { frage: 'In einem Kreisdiagramm sind drei Winkel bekannt: 90°, 150° und x°. Wie gross ist x?', optionen: ['120°', '240°', '60°', '210°'], richtig: 0, erklaerung: 'Alle Winkel zusammen ergeben 360°: 360° − 90° − 150° = 120°.' },
          { frage: 'Bei 40 Befragten ist eine Antwort-Gruppe 72° gross. Wie viele Personen sind das?', optionen: ['8', '40', '9', '32'], richtig: 0, erklaerung: '360° : 40 = 9° pro Person. 72° : 9° = 8 Personen.' },
        ],
      },
      {
        id: 'lesen', emoji: '🔍', titel: 'Diagramme lesen & Fehler finden', videos: [{ titel: 'Diagramme auswerten', youtubeId: 'hY_XiaT-3PI' }],
        karten: [
          { text: 'Ein Diagramm richtig zu lesen heisst: genau hinschauen, was die Achsen bedeuten, und nicht nur grob schätzen.' },
          {
            text: 'Tippe die Schritte an.',
            visual: 'chips',
            chips: [
              { n: 'Achsen lesen', regel: 'Was steht an der x-Achse, was an der y-Achse? Und in welchen Einheiten?' },
              { n: 'Balken/Sektoren vergleichen', regel: 'Welcher ist am grössten, welcher am kleinsten?' },
              { n: 'Werte ablesen', regel: 'Ziehe eine gedachte Linie vom Balken oder Sektor zur Skala.' },
              { n: 'Fehler erkennen', regel: 'Stimmen Balkenlänge oder Sektorgrösse wirklich mit den angegebenen Zahlen überein?' },
            ],
          },
          { text: 'Profi-Tipp: Rechne bei einem Kreisdiagramm nach, ob sich die angegebenen Prozente oder Winkel wirklich zu 100% bzw. 360° addieren - oft steckt genau da der Fehler.' },
          { text: 'Ein Kreisdiagramm zeigt drei Sektoren mit 40%, 35% und 20%. Was fällt auf?\n| Summe: 40% + 35% + 20% = 95%\n| Das sind nur 95%, nicht 100% - im Diagramm fehlt etwas, oder eine Zahl ist falsch.' },
          { text: 'Ein Balkendiagramm zeigt die Werte 5, 15 und 25 - aber alle drei Balken sind gleich lang gezeichnet. Das ist falsch: Die Balkenlängen müssten sich wie 1 : 3 : 5 verhalten.' },
        ],
        check: [
          { frage: 'Ein Kreisdiagramm zeigt vier Sektoren: 100°, 80°, 90° und 70°. Was fällt auf?', optionen: ['Die Summe ist nur 340°, es fehlen 20°', 'Alles stimmt, Summe ist 360°', 'Es sind zu viele Sektoren', 'Die Summe ist zu gross'], richtig: 0, erklaerung: '100° + 80° + 90° + 70° = 340°. Das sind 20° zu wenig - im Diagramm fehlt etwas oder eine Zahl ist falsch.' },
          { frage: 'Ein Balkendiagramm zeigt die Werte 10, 20, 30 - der Balken für 30 ist aber nur doppelt so lang wie der für 20 UND der für 10. Was stimmt hier?', optionen: ['Der Balken für 30 ist zu kurz, er müsste dreimal so lang sein wie der für 10', 'Das ist richtig so', 'Der Balken für 20 ist zu lang', 'Nichts, alles korrekt'], richtig: 0, erklaerung: '30 ist das Dreifache von 10, der Balken müsste also dreimal so lang sein wie für 10, nicht nur doppelt so lang wie für 20.' },
          { frage: 'Relative Häufigkeiten werden angegeben als 45%, 30%, 30%. Was fällt auf?', optionen: ['Summe ist 105%, das ist zu viel', 'Summe ist genau 100%', 'Es fehlen Prozente', 'Nichts Auffälliges'], richtig: 0, erklaerung: '45% + 30% + 30% = 105%. Relative Häufigkeiten dürfen zusammen nie mehr als 100% ergeben - hier stimmt eine Zahl nicht.' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ Relative Häufigkeit wird direkt als Prozentzahl der absoluten Häufigkeit gelesen. ✅ Relative Häufigkeit = absolute Häufigkeit geteilt durch die Gesamtzahl.' },
          { text: '❌ Bei einem Balkendiagramm wird die Skala ignoriert und nur die Balkenhöhe grob verglichen. ✅ Immer zuerst die Skala (Startwert, Schritte) anschauen.' },
          { text: '❌ Beim Kreisdiagramm wird der Anteil direkt mit 360° multipliziert, statt erst "Grad pro Einheit" zu berechnen. ✅ Erst 360° : Gesamtzahl rechnen, dann mit der Anzahl der jeweiligen Antwort multiplizieren.' },
          { text: '❌ Die Kontrolle (Winkel-Summe = 360° bzw. Prozent-Summe = 100%) wird vergessen. ✅ Am Schluss immer die Summe prüfen.' },
          { text: '❌ Absolute und relative Häufigkeit werden verwechselt. ✅ Absolut = die Anzahl (eine Zahl). Relativ = der Anteil (Bruch oder Prozent).' },
          { text: '❌ Bei einem verzerrten Diagramm (Skala beginnt nicht bei 0) wird trotzdem angenommen, die Unterschiede seien genauso gross wie sie aussehen. ✅ Immer prüfen, wo die Skala beginnt, bevor du die Balken vergleichst.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: '35 Personen befragt: 14 mögen Tee. Relative Häufigkeit in %?', loesung: '14 : 35 = 0.4 = 40%.' },
          { text: '80 Personen, relative Häufigkeiten 25%, 45% und x%. Wie gross ist x?', loesung: '100% − 25% − 45% = 30%.' },
          { text: '48 Personen, relative Häufigkeit einer Antwort ist 3/8. Absolute Häufigkeit?', loesung: '48 · 3/8 = 18.' },
          { text: 'Drei Werte sind 6, 18 und 24. Nenne eine passende Skala für ein korrektes Balkendiagramm.', loesung: 'Z. B. 0 bis 24 in Schritten von 6 (0, 6, 12, 18, 24).' },
          { text: '40 Personen, eine Antwort kommt 10 Mal vor. Wie viel Grad im Kreisdiagramm?', loesung: '360° : 40 = 9° pro Person. 10 · 9° = 90°.' },
          { text: 'Drei Winkel in einem Kreisdiagramm: 130°, 110° und x°. Wie gross ist x?', loesung: '360° − 130° − 110° = 120°.' },
          { text: '50 Befragte, eine Gruppe hat 108° im Kreisdiagramm. Wie viele Personen?', loesung: '360° : 50 = 7.2° pro Person. 108° : 7.2° = 15 Personen.' },
          { text: 'Kreisdiagramm-Winkel: 95°, 85°, 100°, 90°. Was fällt auf?', loesung: '95° + 85° + 100° + 90° = 370°. Das sind 10° zu viel - eine Zahl stimmt nicht.' },
          { text: 'Relative Häufigkeiten: 50%, 20%, 20%. Was fällt auf?', loesung: '50% + 20% + 20% = 90%. Es fehlen 10%.' },
          { text: '90 Personen, drei Antworten mit absoluten Häufigkeiten 30, 36 und x. Wie gross ist x?', loesung: '90 − 30 − 36 = 24.' },
          { text: 'Umfrage bei 24 Personen: A = 6, B = 10, C = 8. Berechne die Winkel für jede Antwort.', loesung: 'Grad pro Person: 360° : 24 = 15°. A: 6 · 15° = 90°. B: 10 · 15° = 150°. C: 8 · 15° = 120°. Kontrolle: 90° + 150° + 120° = 360°.' },
          { text: 'Zwei Balken haben die Werte 8 und 24. Der Balken für 24 ist nur doppelt so lang gezeichnet wie der für 8. Was stimmt nicht?', loesung: '24 ist das Dreifache von 8, der Balken müsste dreimal so lang sein, nicht nur doppelt so lang.' },
          { text: '120 Personen befragt. Antwort A hat im Kreisdiagramm 108°. Wie viele Personen haben A gewählt, und wie viel Prozent sind das?', loesung: 'Grad pro Person: 360° : 120 = 3°. Personen: 108° : 3° = 36. Prozent: 36 : 120 = 30%.' },
          { text: '200 Personen, vier Antworten mit relativen Häufigkeiten 35%, 25%, 15% und x%. Berechne x in % und als absolute Häufigkeit.', loesung: 'x% = 100% − 35% − 25% − 15% = 25%. Absolute Häufigkeit: 200 · 0.25 = 50.' },
          { text: '60 Personen, ein Sektor im Kreisdiagramm ist 150°. Wie viele Personen (absolut) und wie viel Prozent sind das?', loesung: 'Grad pro Person: 360° : 60 = 6°. Personen: 150° : 6° = 25. Prozent: 25 : 60 ≈ 41.7%.' },
          { text: 'Umfrage bei 45 Personen ergibt die Kreisdiagramm-Winkel 128°, 96°, 96° und x°. Finde x und die zugehörige absolute Häufigkeit.', loesung: 'x = 360° − 128° − 96° − 96° = 40°. Grad pro Person: 360° : 45 = 8°. Absolute Häufigkeit: 40° : 8° = 5.' },
        ],
        check: [],
      },
    ],
  },
  'Prozent & Zins': {
    titel: 'Prozent & Zins',
    kacheln: [
      {
        id: 'grundidee', emoji: '📊', titel: 'Grundidee Prozent', videos: [{ titel: 'Prozentrechnung - Formeldreieck', youtubeId: 'amSw62SFKDI' }],
        karten: [
          { text: 'Prozent heisst "von Hundert". 1% ist der hundertste Teil eines Ganzen - wie 1 Rappen von 1 Franken (100 Rappen).' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'Grundwert', regel: 'Das Ganze, von dem die Prozente genommen werden (100%).' },
              { n: 'Prozentsatz', regel: 'Wie viel Prozent - die Zahl vor dem %-Zeichen.' },
              { n: 'Prozentwert', regel: 'Das Ergebnis - so viel ist der Anteil in echten Einheiten (Fr, kg, ...).' },
              { n: 'Formel', regel: 'Prozentwert = Grundwert · Prozentsatz : 100.' },
            ],
          },
          { text: 'Profi-Tipp: Schreib dir die drei Grössen (Grundwert, Prozentsatz, Prozentwert) immer zuerst auf - zwei davon kennst du, die dritte suchst du.' },
          { text: 'Wie viel sind 30% von 80 Franken?\n| Grundwert: 80\n| Prozentsatz: 30\n| Prozentwert: 80 · 30 : 100 = 24 Franken' },
          { text: '120 ist der Prozentwert, der Grundwert ist 400. Wie viel Prozent ist das?\nProzentsatz = 120 : 400 · 100 = 30%' },
        ],
        check: [
          { frage: 'Wie viel sind 25% von 160?', optionen: ['40', '64', '4', '6.4'], richtig: 0, erklaerung: '160 · 25 : 100 = 40.' },
          { frage: '18 ist wie viel Prozent von 90?', optionen: ['20%', '18%', '5%', '50%'], richtig: 0, erklaerung: '18 : 90 · 100 = 20%.' },
          { frage: '15% von einer Zahl sind 45. Wie gross ist die Zahl (der Grundwert)?', optionen: ['300', '6.75', '450', '30'], richtig: 0, erklaerung: '45 : 15 · 100 = 300. Bei 6.75 wurde mit 0.15 multipliziert statt dividiert.' },
        ],
      },
      {
        id: 'ganzesteil', emoji: '🥧', titel: 'Vom Ganzen zum Teil und zurück', videos: [{ titel: 'Prozentwert berechnen', youtubeId: 'cMvTcS3vCOA' }, { titel: 'Grundwert berechnen', youtubeId: 'T3pw6lgtI7Y' }],
        karten: [
          { text: 'Manchmal wird ein Ganzes (eine Fläche, eine Menge) in mehrere Prozent-Teile aufgeteilt. Am Schluss müssen alle Teile zusammen wieder 100% ergeben.' },
          {
            text: 'Tippe die Schritte an.',
            visual: 'chips',
            chips: [
              { n: 'Teile addieren', regel: 'Alle Prozent-Teile zusammen ergeben 100%.' },
              { n: 'Rest berechnen', regel: 'Fehlt ein Teil, ziehst du die bekannten Prozente von 100% ab.' },
              { n: 'in echte Einheiten umrechnen', regel: 'Jeden Prozentsatz mit dem Grundwert multiplizieren (geteilt durch 100).' },
              { n: 'Kontrolle', regel: 'Die echten Einheiten der Teile addiert müssen wieder den Grundwert ergeben.' },
            ],
          },
          { text: 'Profi-Tipp: Rechne den fehlenden Prozentsatz zuerst aus (100% minus die bekannten), dann erst in echte Einheiten umrechnen - nicht umgekehrt.' },
          { text: 'Ein Bauer bewirtschaftet 40 ha. Er baut auf 30% Kartoffeln an, auf 45% Rüben, auf dem Rest Mais.\n| Rest in %: 100% − 30% − 45% = 25%\n| Kartoffeln: 40 · 30 : 100 = 12 ha\n| Rüben: 40 · 45 : 100 = 18 ha\n| Mais: 40 · 25 : 100 = 10 ha\n\nKontrolle: 12 + 18 + 10 = 40 ha ✓' },
        ],
        check: [
          { frage: 'Ein Garten von 60 m² wird zu 20% mit Rosen, zu 50% mit Rasen bepflanzt, der Rest ist ein Weg. Wie gross ist der Weg?', optionen: ['18 m²', '30 m²', '12 m²', '42 m²'], richtig: 0, erklaerung: 'Rest in %: 100% − 20% − 50% = 30%. 60 · 30 : 100 = 18 m².' },
          { frage: '70 kg Obst: 40% Äpfel, 35% Birnen, Rest Pflaumen. Wie viele kg sind Pflaumen?', optionen: ['17.5 kg', '24.5 kg', '52.5 kg', '25 kg'], richtig: 0, erklaerung: 'Rest in %: 100% − 40% − 35% = 25%. 70 · 25 : 100 = 17.5 kg.' },
          { frage: 'Eine Fläche wird in drei Teile zu 15%, 35% und x% aufgeteilt. Wie gross ist x?', optionen: ['50%', '40%', '60%', '45%'], richtig: 0, erklaerung: '100% − 15% − 35% = 50%.' },
        ],
      },
      {
        id: 'textaufgaben', emoji: '💰', titel: 'Textaufgaben mit Prozent', videos: [{ titel: 'Prozentwert berechnen - Textaufgaben', youtubeId: 'WZuEUyGgkBc' }],
        karten: [
          { text: 'Bei Mengenrabatt und Preisänderungen steckt oft ein Zwischenschritt: erst den Preis PRO STÜCK ausrechnen, dann vergleichen.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'Stückpreis', regel: 'Gesamtpreis geteilt durch Anzahl Stück.' },
              { n: 'prozentuale Veränderung', regel: '(alter Wert − neuer Wert) : alter Wert · 100.' },
              { n: 'Zuwachs vs. Abnahme', regel: 'Ist der neue Wert grösser, ist es ein Zuwachs (+), ist er kleiner, eine Abnahme (−).' },
              { n: 'rückwärts rechnen', regel: 'Kennst du den NEUEN Wert nach einer Veränderung, kannst du mit ihm den ALTEN Wert zurückrechnen.' },
            ],
          },
          { text: 'Profi-Tipp: Bei "wie viel Prozent teurer/billiger" immer durch den ALTEN (ursprünglichen) Wert teilen, nicht durch den neuen.' },
          { text: 'Ein 3er-Pack Kerzen kostet 4.50 Fr. Ein 6er-Pack kostet 7.80 Fr. Wie viel Prozent billiger ist eine Kerze im 6er-Pack?\n| Preis pro Kerze (3er): 4.50 : 3 = 1.50 Fr\n| Preis pro Kerze (6er): 7.80 : 6 = 1.30 Fr\n| Differenz: 1.50 − 1.30 = 0.20 Fr\n| Prozent: 0.20 : 1.50 · 100 ≈ 13.3%' },
          { text: 'Rückwärts rechnen: Der Ertrag ist um 20% auf 96 Tonnen gefallen. Wie gross war der Ertrag im Vorjahr?\n| 96 Tonnen sind 80% vom alten Wert (100% − 20%)\n| 0.8 · x = 96\n| x = 96 : 0.8 = 120 Tonnen' },
        ],
        check: [
          { frage: 'Ein Preis steigt von 80 auf 92 Franken. Wie viel Prozent ist das?', optionen: ['15%', '12%', '13%', '150%'], richtig: 0, erklaerung: 'Zuwachs: 92 − 80 = 12. 12 : 80 · 100 = 15%.' },
          { frage: 'Ein Preis fällt um 25% auf 60 Franken. Wie gross war der Preis vorher?', optionen: ['80 Fr', '75 Fr', '45 Fr', '90 Fr'], richtig: 0, erklaerung: '60 Fr sind 75% vom alten Preis (100% − 25%). 0.75 · x = 60, also x = 60 : 0.75 = 80 Fr.' },
          { frage: 'Ein 4er-Pack kostet 6 Fr, ein 10er-Pack 13 Fr. Wie viel Prozent billiger ist das Stück im 10er-Pack?', optionen: ['ca. 13.3%', 'ca. 20%', 'ca. 7.7%', 'ca. 15%'], richtig: 0, erklaerung: '4er-Pack: 6 : 4 = 1.50 Fr/Stück. 10er-Pack: 13 : 10 = 1.30 Fr/Stück. Differenz 0.20 Fr, geteilt durch den alten Preis 1.50: 0.20 : 1.50 · 100 ≈ 13.3%.' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ Bei "um X% gefallen auf Y" wird Y direkt als X% vom Grundwert verwendet. ✅ Y entspricht (100% − X%) vom Grundwert, nicht X% selbst.' },
          { text: '❌ Bei einer prozentualen Veränderung wird durch den NEUEN statt den ALTEN Wert geteilt. ✅ Prozentsatz = Differenz geteilt durch den ALTEN (ursprünglichen) Wert.' },
          { text: '❌ Bei einer Aufteilung in Prozent-Teile wird vergessen, dass alle Teile zusammen 100% ergeben müssen. ✅ Fehlt ein Teil, rechne 100% minus die bekannten Prozente.' },
          { text: '❌ Beim Mengenrabatt wird der Gesamtpreis statt der Preis pro Stück verglichen. ✅ Immer erst auf den Preis pro Stück umrechnen (Gesamtpreis : Anzahl), dann vergleichen.' },
          { text: '❌ Prozent und Prozentpunkte werden verwechselt (von 20% auf 25% ist nicht automatisch "5% mehr"). ✅ Von 20% auf 25% sind 5 Prozentpunkte, aber (25 − 20) : 20 = 25% relativer Zuwachs.' },
          { text: '❌ "Prozentwert = Grundwert · Prozentsatz" ohne durch 100 zu teilen. ✅ Immer durch 100 teilen: Prozentwert = Grundwert · Prozentsatz : 100.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Wie viel sind 40% von 150?', loesung: '150 · 40 : 100 = 60.' },
          { text: '24 ist wie viel Prozent von 80?', loesung: '24 : 80 · 100 = 30%.' },
          { text: '20% einer Zahl sind 50. Wie gross ist die Zahl?', loesung: '50 : 20 · 100 = 250.' },
          { text: 'Eine Fläche von 80 m² wird zu 25% Garten, zu 55% Haus, Rest Weg. Wie gross ist der Weg?', loesung: 'Rest: 100% − 25% − 55% = 20%. 80 · 20 : 100 = 16 m².' },
          { text: '90 kg Mischung: 30% Nüsse, 50% Rosinen, Rest Schokostückchen. Wie viele kg Schoko?', loesung: 'Rest: 100% − 30% − 50% = 20%. 90 · 20 : 100 = 18 kg.' },
          { text: 'Ein Preis steigt von 50 auf 60 Franken. Wie viel Prozent?', loesung: 'Zuwachs: 10. 10 : 50 · 100 = 20%.' },
          { text: 'Ein Preis fällt um 30% auf 70 Franken. Wie gross war er vorher?', loesung: '70 Fr sind 70% vom alten Preis. 70 : 0.7 = 100 Fr.' },
          { text: 'Ein 2er-Pack kostet 5 Fr, ein 5er-Pack 11 Fr. Wie viel Prozent billiger ist das Stück im 5er-Pack?', loesung: '2er: 5 : 2 = 2.50 Fr/Stück. 5er: 11 : 5 = 2.20 Fr/Stück. Differenz 0.30 Fr, geteilt durch 2.50: 0.30 : 2.50 · 100 = 12%.' },
          { text: 'Eine Zahl wird um 10% erhöht, dann um 10% verringert. Ist das Ergebnis wieder die Ursprungszahl?', loesung: 'Nein! 100 → 110 (erhöht) → 110 · 0.9 = 99 (verringert). Die 10% verringern bezieht sich auf 110, nicht mehr auf 100.' },
          { text: 'Der Umsatz stieg von 200 auf 250, dann wieder zurück auf 200. Um wie viel Prozent sank er beim zweiten Schritt?', loesung: 'Abnahme: 250 − 200 = 50. 50 : 250 · 100 = 20% (nicht 25%, weil jetzt 250 der alte Wert ist).' },
          { text: '60% einer Klasse mit 25 Personen sind Mädchen. Wie viele Jungen sind das?', loesung: 'Mädchen: 25 · 60 : 100 = 15. Jungen: 25 − 15 = 10.' },
          { text: 'Ein Acker von 36 ha: 1/4 Kartoffeln (in %), 30% Rüben, Rest Weizen. Wie viele ha Weizen?', loesung: '1/4 = 25%. Rest: 100% − 25% − 30% = 45%. 36 · 45 : 100 = 16.2 ha.' },
          { text: 'Ein Preis fällt um 15% auf 51 Franken. Wie gross war er vorher, und wie viele Franken Differenz sind das?', loesung: '51 Fr sind 85% vom alten Preis. 51 : 0.85 = 60 Fr. Differenz: 60 − 51 = 9 Fr.' },
          { text: 'Zwei aufeinanderfolgende Rabatte: erst 20%, dann weitere 10% auf den reduzierten Preis. Ein Artikel kostet ursprünglich 200 Fr. Wie viel kostet er am Ende?', loesung: '200 · 0.8 = 160 Fr (nach 20%). 160 · 0.9 = 144 Fr (nach weiteren 10%).' },
          { text: 'Ein 3er-Pack kostet 9 Fr, ein 8er-Pack 20 Fr. Wie viel Prozent billiger ist das Stück im 8er-Pack?', loesung: '3er: 9 : 3 = 3 Fr/Stück. 8er: 20 : 8 = 2.50 Fr/Stück. Differenz 0.50 Fr, geteilt durch 3: 0.50 : 3 · 100 ≈ 16.7%.' },
          { text: 'Eine Mischung von 50 Litern enthält 40% Wasser, der Rest ist Saft. Werden 10 Liter Wasser dazugegeben, wie viel Prozent Wasser hat die neue Mischung?', loesung: 'Wasser vorher: 50 · 40 : 100 = 20 L. Neu: 20 + 10 = 30 L Wasser, total 60 L. 30 : 60 · 100 = 50%.' },
        ],
        check: [],
      },
    ],
  },
  'Körper & Netze': {
    titel: 'Körper & Netze',
    kacheln: [
      {
        id: 'wuerfelnetz', emoji: '📦', titel: 'Würfel und sein Netz', videos: [{ titel: 'Würfel - Körpernetz erstellen', youtubeId: '_8qTI8Mi9_8' }],
        karten: [
          { text: 'Ein Würfelnetz ist ein Würfel, den du auseinandergefaltet und flachgelegt hast - 6 Quadrate, die zusammen alle 6 Seiten ergeben. Nicht jede Anordnung von 6 Quadraten lässt sich zu einem Würfel falten!' },
          {
            text: 'Tippe die Regeln an.',
            visual: 'chips',
            chips: [
              { n: '6 Quadrate', regel: 'Ein Würfelnetz hat immer genau 6 gleich grosse Quadrate.' },
              { n: 'nicht überlappen', regel: 'Beim Falten dürfen sich keine zwei Flächen überlappen.' },
              { n: 'alle 6 Seiten bedeckt', regel: 'Jede der 6 Würfelseiten muss genau einmal entstehen.' },
              { n: 'verschiedene Formen', regel: 'Es gibt 11 verschiedene Grundformen, die zu einem Würfel falten - viele andere Anordnungen funktionieren NICHT.' },
            ],
          },
          { text: 'Profi-Tipp: Stell dir vor, du faltest das Netz in Gedanken zusammen - oder zeichne kleine Pfeile, welche Kante auf welche andere Kante zu liegen kommt.' },
          {
            text: 'Dieses Netz funktioniert: 6 Quadrate in Kreuzform. Beim Zusammenfalten ergeben sie einen Würfel.',
            visual: 'diagram',
            diagram: {
              viewBox: '0 0 200 160',
              elements: [
                { type: 'rect', x: 20, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 58, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 96, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 134, y: 62, w: 36, h: 36 },
                { type: 'rect', x: 58, y: 24, w: 36, h: 36 },
                { type: 'rect', x: 58, y: 100, w: 36, h: 36 },
              ],
            },
          },
          { text: 'Nicht-Beispiel: 6 Quadrate einfach in einer geraden Reihe (1 × 6) funktionieren NICHT - beim Falten würden sich mehrere Flächen überlappen, und manche Seiten blieben offen.' },
        ],
        check: [
          { frage: 'Wie viele Quadrate hat ein Würfelnetz?', optionen: ['6', '4', '8', '12'], richtig: 0, erklaerung: 'Ein Würfel hat 6 Seiten, also braucht das Netz genau 6 Quadrate.' },
          { frage: 'Welche Anordnung von 6 Quadraten funktioniert sicher NICHT als Würfelnetz?', optionen: ['Alle 6 in einer geraden Reihe', 'Eine Kreuzform', 'Eine Treppenform mit versetzten Quadraten', 'Mehrere richtige Antworten möglich, es kommt auf die genaue Form an'], richtig: 0, erklaerung: '6 Quadrate in einer geraden Reihe lassen sich nicht zu einem Würfel falten - es gibt keine Möglichkeit, alle 6 Seiten ohne Überlappung zu bedecken.' },
          { frage: 'Was bedeutet es, wenn sich beim Falten zwei Flächen eines angeblichen "Würfelnetzes" überlappen?', optionen: ['Es ist gar kein gültiges Würfelnetz', 'Das ist normal und völlig in Ordnung', 'Es entsteht automatisch eine Pyramide', 'Der Würfel wird einfach kleiner'], richtig: 0, erklaerung: 'Ein gültiges Netz darf beim Falten nirgends überlappen - sonst bedeckt es die 6 Seiten nicht richtig.' },
        ],
      },
      {
        id: 'punkteuebertragen', emoji: '🧭', titel: 'Punkte und Kanten übertragen', videos: [{ titel: 'Punkte und Kanten übertragen', youtubeId: '_8qTI8Mi9_8' }],
        karten: [
          { text: 'Ein Würfel hat 8 Ecken. Standard-Beschriftung: unten A, B, C, D (im Kreis rum), oben genau darüber E, F, G, H (E über A, F über B, G über C, H über D).' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'unten/oben', regel: 'A, B, C, D unten im Kreis. E, F, G, H oben, jeweils direkt über dem Buchstaben darunter (E über A).' },
              { n: 'eine Fläche = 4 Ecken', regel: 'Jede der 6 Flächen wird durch ihre 4 Eckpunkte benannt, z. B. ABCD (Boden) oder EFGH (Deckel).' },
              { n: 'Seitenflächen', regel: 'Die vier Seitenflächen: vorne ABFE, rechts BCGF, hinten CDHG, links DAEH.' },
              { n: 'eine Kante gehört zu 2 Flächen', regel: 'Jede Kante liegt an der Grenze von genau zwei Flächen.' },
            ],
          },
          { text: 'Profi-Tipp: Suchst du die Flächen zu einer Kante, schau welche zwei Buchstaben die Kante hat, und ergänze sie einmal mit der Fläche darunter/darüber und einmal mit der Nachbarfläche daneben.' },
          { text: 'Welche zwei Flächen treffen sich an der Kante B-C (beide unten)?\n| B und C sind Nachbarn im unteren Quadrat\n| Die eine Fläche: der Boden ABCD\n| Die andere Fläche: die rechte Seite BCGF (B, C und die Punkte direkt darüber: G über C, F über B)' },
          { text: 'Welche zwei Flächen treffen sich an der Kante A-E (eine senkrechte Kante)?\n| A unten, E oben direkt darüber\n| Die eine Fläche: vorne ABFE\n| Die andere Fläche: links DAEH' },
        ],
        check: [
          { frage: 'Welche zwei Flächen treffen sich an der Kante F-G (beide oben)?', optionen: ['Deckel EFGH und rechte Seite BCGF', 'Boden ABCD und Deckel EFGH', 'Vorne ABFE und hinten CDHG', 'Links DAEH und rechts BCGF'], richtig: 0, erklaerung: 'F und G sind beide obere Ecken - sie liegen auf dem Deckel EFGH UND auf der rechten Seitenfläche BCGF (die auch F und G enthält).' },
          { frage: 'Welche zwei Flächen treffen sich an der Kante C-G (eine senkrechte Kante)?', optionen: ['Rechte Seite BCGF und hintere Seite CDHG', 'Boden ABCD und Deckel EFGH', 'Vorne ABFE und links DAEH', 'Nur die rechte Seite BCGF'], richtig: 0, erklaerung: 'C unten, G oben direkt darüber - eine senkrechte Kante. Sie liegt zwischen der rechten Seite BCGF und der hinteren Seite CDHG, die beide C und G enthalten.' },
          { frage: 'Wie viele Flächen treffen sich an jeder Kante eines Würfels?', optionen: ['2', '1', '3', '4'], richtig: 0, erklaerung: 'Jede Kante ist die gemeinsame Grenze von genau 2 Flächen - nie mehr, nie weniger.' },
        ],
      },
      {
        id: 'pyramide', emoji: '🔺', titel: 'Pyramide', videos: [{ titel: 'Pyramide - richtig beschriften', youtubeId: '9mmgxbaVCOA' }],
        karten: [
          { text: 'Eine Pyramide mit quadratischer Grundfläche hat 1 Quadrat als Boden und 4 gleiche Dreiecke als Seitenflächen, die sich oben in der Spitze treffen.' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'Grundfläche', regel: 'Das Quadrat am Boden - Fläche = Seite · Seite.' },
              { n: 'Seitenfläche', regel: 'Ein Dreieck - Fläche = Grundseite · Höhe des Dreiecks : 2.' },
              { n: 'Oberfläche', regel: 'Grundfläche plus alle 4 Seitendreiecke zusammen.' },
              { n: 'Höhe der Pyramide ≠ Höhe des Dreiecks', regel: 'Die Pyramidenhöhe steht senkrecht zur Grundfläche, die Dreieckshöhe liegt IN der Seitenfläche - meist unterschiedlich lang.' },
            ],
          },
          { text: 'Profi-Tipp: Zeichne das Netz: 1 Quadrat plus 4 Dreiecke. Rechne jede Fläche einzeln aus, dann addieren.' },
          { text: 'Eine Pyramide hat eine quadratische Grundfläche mit Seite 6 cm. Jede Seitenfläche ist ein Dreieck mit Grundseite 6 cm und Höhe 5 cm (die Höhe DES DREIECKS, nicht die Pyramidenhöhe).\n| Grundfläche: 6 · 6 = 36 cm²\n| Eine Seitenfläche: 6 · 5 : 2 = 15 cm²\n| Vier Seitenflächen: 4 · 15 = 60 cm²\n| Oberfläche total: 36 + 60 = 96 cm²' },
        ],
        check: [
          { frage: 'Grundfläche eines Quadrats mit Seite 5 cm?', optionen: ['25 cm²', '20 cm²', '10 cm²', '100 cm²'], richtig: 0, erklaerung: '5 · 5 = 25 cm².' },
          { frage: 'Eine Seitenfläche einer Pyramide ist ein Dreieck mit Grundseite 8 cm und Höhe 6 cm. Wie gross ist diese Fläche?', optionen: ['24 cm²', '48 cm²', '14 cm²', '28 cm²'], richtig: 0, erklaerung: '8 · 6 : 2 = 24 cm². Bei 48 wurde nicht durch 2 geteilt.' },
          { frage: 'Eine Pyramide hat Grundfläche 49 cm² und vier Seitenflächen von je 21 cm². Wie gross ist die gesamte Oberfläche?', optionen: ['133 cm²', '70 cm²', '84 cm²', '245 cm²'], richtig: 0, erklaerung: '49 + 4 · 21 = 49 + 84 = 133 cm².' },
        ],
      },
      {
        id: 'raeumlich', emoji: '👀', titel: 'Räumlich denken', videos: [{ titel: 'Räumlich denken', youtubeId: 'y1B1KugPSyI' }],
        karten: [
          { text: 'Bei Würfeln mit Mustern auf jeder Seite musst du dir vorstellen, wie der Würfel von verschiedenen Seiten aussieht - welche Fläche liegt gegenüber, welche daneben?' },
          {
            text: 'Tippe die Begriffe an.',
            visual: 'chips',
            chips: [
              { n: 'gegenüberliegend', regel: 'Zwei Flächen, die nie gleichzeitig sichtbar sind, wenn du geradeaus schaust - sie haben nie eine gemeinsame Kante.' },
              { n: 'benachbart', regel: 'Flächen, die eine gemeinsame Kante haben.' },
              { n: 'im Netz erkennen', regel: 'Im Kreuz-Netz liegen sich gegenüberliegende Flächen oft nicht direkt an - meist mit einem Feld dazwischen.' },
              { n: 'zwei Ansichten kombinieren', regel: 'Siehst du den Würfel von zwei Seiten, kannst du oft die restlichen Flächen ableiten.' },
            ],
          },
          { text: 'Profi-Tipp: Nummeriere die Flächen eines Standard-Spielwürfels (1-6), bei dem sich gegenüberliegende Zahlen zu 7 ergänzen (1↔6, 2↔5, 3↔4) - das hilft dir, dich zu orientieren.' },
          { text: 'Auf einem Spielwürfel ergänzen sich gegenüberliegende Zahlen zu 7. Du siehst die 1 oben. Welche Zahl ist unten?\n6 (denn 1 + 6 = 7)' },
          { text: 'Im Kreuz-Netz (4 Quadrate in einer Reihe, dazu 1 oben und 1 unten beim zweiten Quadrat): Die beiden Enden der langen Reihe (1. und 4. Quadrat) liegen sich beim gefalteten Würfel gegenüber - genauso wie das obere und das untere Quadrat.' },
        ],
        check: [
          { frage: 'Auf einem Spielwürfel ist die 3 oben. Welche Zahl ist unten (gegenüberliegende Seiten ergänzen sich zu 7)?', optionen: ['4', '3', '7', '1'], richtig: 0, erklaerung: '3 + 4 = 7, also liegt die 4 unten.' },
          { frage: 'Zwei Flächen eines Würfels haben eine gemeinsame Kante. Sind sie benachbart oder gegenüberliegend?', optionen: ['Benachbart', 'Gegenüberliegend', 'Weder noch', 'Das kommt darauf an'], richtig: 0, erklaerung: 'Flächen mit einer gemeinsamen Kante sind benachbart. Gegenüberliegende Flächen haben NIE eine gemeinsame Kante.' },
          { frage: 'Im Kreuz-Netz liegen 4 Quadrate in einer Reihe, dazu 1 oben und 1 unten beim zweiten Quadrat. Welche zwei Quadrate der Reihe liegen sich im gefalteten Würfel gegenüber?', optionen: ['Das 1. und das 4. Quadrat der Reihe', 'Das 1. und das 2. Quadrat', 'Das 2. und das 3. Quadrat', 'Keine zwei, alle sind benachbart'], richtig: 0, erklaerung: 'Beim Falten der 4er-Reihe um den Würfel treffen sich die beiden äusseren Enden (1. und 4. Quadrat) auf der gegenüberliegenden Seite.' },
        ],
      },
      {
        id: 'fehler', emoji: '⚠️', titel: 'Typische Fehler', videos: [],
        karten: [
          { text: '❌ Ein Würfelnetz wird aus irgendwelchen 6 Quadraten zusammengesetzt, ohne zu prüfen, ob sie sich beim Falten überlappen. ✅ Immer in Gedanken falten und prüfen, ob alle 6 Seiten ohne Überlappung entstehen.' },
          { text: '❌ Bei Würfel-Ecken wird angenommen, dass eine Kante nur zu EINER Fläche gehört. ✅ Jede Kante gehört immer zu genau 2 Flächen.' },
          { text: '❌ Pyramidenhöhe und die Höhe der Dreiecks-Seitenfläche werden verwechselt. ✅ Die Pyramidenhöhe steht senkrecht zur Grundfläche, die Dreieckshöhe liegt in der Seitenfläche - meist unterschiedlich lang.' },
          { text: '❌ Beim Oberflächeninhalt einer Pyramide wird die Grundfläche vergessen und nur die Seitendreiecke addiert. ✅ Oberfläche = Grundfläche plus alle Seitenflächen zusammen.' },
          { text: '❌ Benachbarte und gegenüberliegende Flächen eines Würfels werden verwechselt. ✅ Benachbart = gemeinsame Kante. Gegenüberliegend = nie eine gemeinsame Kante.' },
          { text: '❌ Bei einem Dreieck als Seitenfläche wird die Fläche ohne das ": 2" gerechnet. ✅ Eine Dreiecksfläche ist immer Grundseite · Höhe geteilt durch 2.' },
        ],
        check: [],
      },
      {
        id: 'ueben', emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8,
        karten: [
          { text: 'Wie viele Quadrate hat ein Würfelnetz?', loesung: '6, da ein Würfel 6 Seiten hat.' },
          { text: 'Wie viele Flächen treffen sich an jeder Kante eines Würfels?', loesung: '2 - jede Kante ist die Grenze zwischen genau 2 Flächen.' },
          { text: 'Welche zwei Flächen treffen sich an der Kante A-B (Würfel ABCD unten, EFGH oben, E über A usw.)?', loesung: 'Boden ABCD und vorne ABFE.' },
          { text: 'Welche zwei Flächen treffen sich an der Kante B-F (senkrechte Kante)?', loesung: 'Vorne ABFE und rechts BCGF.' },
          { text: 'Grundfläche eines Quadrats mit Seite 7 cm?', loesung: '7 · 7 = 49 cm².' },
          { text: 'Eine Pyramiden-Seitenfläche ist ein Dreieck mit Grundseite 10 cm und Höhe 8 cm. Wie gross ist die Fläche?', loesung: '10 · 8 : 2 = 40 cm².' },
          { text: 'Pyramide: Grundfläche 64 cm², 4 Seitenflächen je 30 cm². Wie gross ist die Oberfläche?', loesung: '64 + 4 · 30 = 64 + 120 = 184 cm².' },
          { text: 'Spielwürfel: oben ist die 2. Was ist unten (Summe gegenüberliegender Seiten = 7)?', loesung: '7 − 2 = 5.' },
          { text: 'Zwei Flächen haben eine gemeinsame Kante - benachbart oder gegenüberliegend?', loesung: 'Benachbart.' },
          { text: 'Eine quadratische Pyramide hat Grundseite 8 cm und Seitenflächen-Höhe 9 cm. Berechne die Oberfläche.', loesung: 'Grundfläche: 8 · 8 = 64 cm². Seitenfläche: 8 · 9 : 2 = 36 cm². Vier davon: 4 · 36 = 144 cm². Oberfläche: 64 + 144 = 208 cm².' },
          { text: 'Welche zwei Flächen treffen sich an der Kante C-D (beide unten)?', loesung: 'Boden ABCD und hinten CDHG.' },
          { text: 'Welche zwei Flächen treffen sich an der Kante D-H (senkrechte Kante)?', loesung: 'Hinten CDHG und links DAEH.' },
          { text: 'Spielwürfel: vorne ist die 4, oben die 1. Welche Zahl ist hinten?', loesung: 'Gegenüber von 4 liegt 3 (4 + 3 = 7).' },
          { text: 'Spielwürfel: oben die 6. Welche Zahl ist unten, und was lässt sich über vorne/hinten/links/rechts sagen?', loesung: 'Unten: 7 − 6 = 1. Vorne, hinten, links, rechts sind die restlichen Zahlen 2, 3, 4, 5 - in welcher genauen Anordnung, lässt sich ohne weitere Angabe nicht eindeutig bestimmen.' },
          { text: 'Eine Pyramide hat eine quadratische Grundfläche mit Flächeninhalt 100 cm². Die Seitenflächen sind Dreiecke mit Höhe 13 cm. Berechne die Oberfläche.', loesung: 'Grundfläche ist bereits 100 cm² (Seite 10 cm). Seitenfläche: 10 · 13 : 2 = 65 cm². Vier davon: 4 · 65 = 260 cm². Oberfläche: 100 + 260 = 360 cm².' },
          { text: 'Welche zwei Flächen treffen sich an der Kante E-F (beide oben)?', loesung: 'Deckel EFGH und vorne ABFE.' },
        ],
        check: [],
      },
    ],
  },
  // ─── Deutsch GMS 3 ────────────────────────────────────────────────────────
  'Zeitformen': {
    titel: 'Zeitformen',
    kacheln: [
      {
        id: 'zeitformen-erkennen',
        emoji: '⏰',
        titel: 'Zeitformen erkennen und zählen',
        videos: [
          { titel: 'Übersicht über die Zeitformen (Lehrerschmidt)', youtubeId: 'HJt1fllNbwg' },
          { titel: 'Perfekt (Lehrerschmidt)', youtubeId: 'Ip9gJgm1E9g' },
        ],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Verbaler Teil: alle Verbwörter, die zusammen die Zeitform bilden, zum Beispiel «hat gelacht».\n• Personalform: die Verbform, die sich nach der Person richtet (ich lache, er lacht).\n• Partizip II: die Form meist mit ge- (gelacht, gegangen).\n• Infinitiv: die Grundform (lachen).' },
          { text: 'Es gibt sechs Zeitformen. Diese fünf musst du in der Prüfung kennen:\n\n[[pr|Präsens]] (jetzt)\n[[pt|Präteritum]] (Vergangenheit)\n[[pf|Perfekt]] (Vergangenheit)\n[[pq|Plusquamperfekt]] (davor)\n[[fu|Futur I]] (Zukunft)' },
          { text: 'Ein Wort oder mehrere?\n\nEin Wort:\ner [[pr|lacht]] (Präsens)\ner [[pt|lachte]] (Präteritum)\n\nMehrere Wörter:\ner [[pf|hat gelacht]] (Perfekt)\ner [[pq|hatte gelacht]] (Plusquamperfekt)\ner [[fu|wird lachen]] (Futur I)' },
          { text: 'So erkennst du die zusammengesetzten Zeiten:\n\n[[pf|hat / ist]] + Partizip II → [[pf|Perfekt]]\n[[pq|hatte / war]] + Partizip II → [[pq|Plusquamperfekt]]\n[[fu|wird]] + Infinitiv → [[fu|Futur I]]' },
          { text: 'Verbzusatz: Bei «Er stellt den Koffer ab» gehören «stellt» und «ab» zusammen. Der verbale Teil ist «[[pr|stellt ab]]» (Präsens).' },
          { text: 'Zeitformen zählen: Zähle jede Zeitform nur einmal.\n\nBeispiel:\n«Da [[pr|ist]] jemand, der die Arbeit [[pr|sieht]]», [[pt|war]] das höchste Lob, das sein Vater zu vergeben [[pt|hatte]].\n\n→ Vier verbale Teile, aber nur zwei Zeitformen: [[pr|Präsens]] und [[pt|Präteritum]].' },
        ],
        check: [
          { frage: 'In welcher Zeitform steht «Sie hatte das Buch gelesen»?', optionen: ['Präteritum', 'Perfekt', 'Plusquamperfekt', 'Futur I'], richtig: 2, erklaerung: 'hatte + Partizip II (gelesen) ist das [[pq|Plusquamperfekt]].' },
          { frage: 'In welcher Zeitform steht «Wir werden morgen kommen»?', optionen: ['Präsens', 'Perfekt', 'Präteritum', 'Futur I'], richtig: 3, erklaerung: 'werden + Infinitiv (kommen) bildet das [[fu|Futur I]].' },
          { frage: 'In welcher Zeitform steht «Er ist gestern gerannt»?', optionen: ['Präteritum', 'Perfekt', 'Plusquamperfekt', 'Präsens'], richtig: 1, erklaerung: 'ist + Partizip II (gerannt) ist das [[pf|Perfekt]].' },
        ],
      },
      {
        id: 'zeitformen-bilden',
        emoji: '🔧',
        titel: 'Sätze in eine andere Zeitform setzen',
        videos: [
          { titel: 'Präteritum (Lehrerschmidt)', youtubeId: '7x_nH-BVkDw' },
          { titel: 'Futur I (Lehrerschmidt)', youtubeId: '5fxSc3GwDmw' },
        ],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Schwache Verben: bilden das Präteritum regelmässig mit -te (lachen → er [[pt|lachte]]).\n• Starke Verben: ändern den Vokal im Stamm (gehen → er [[pt|ging]], kommen → er [[pt|kam]]). Die lernst du auswendig.\n• Hilfsverb: haben, sein und werden helfen, zusammengesetzte Zeiten zu bilden.\n• Partizip II: die Form meist mit ge- (gelacht, gegangen).' },
          { text: 'Präteritum bilden: Du änderst die Verbform, sonst nichts.\n\nEr hat den Zug verlassen.\n→ Er [[pt|verliess]] den Zug.' },
          { text: 'Plusquamperfekt: [[pq|hatte / war]] + Partizip II\n\nEr [[pq|hatte]] gelacht.\nSie [[pq|war]] gegangen.\n\nDie Satzstellung bleibt, nur der verbale Teil ändert sich.' },
          { text: 'haben oder sein?\n\nVerben der Bewegung und der Veränderung bilden die Zeit meist mit sein (gehen, kommen, einschlafen). Die meisten anderen Verben mit haben.' },
          { text: 'Futur I: [[fu|wird]] + Infinitiv\n\nMeine Mutter hatte die Fahrprüfung bestanden.\n→ Meine Mutter [[fu|wird]] die Fahrprüfung [[fu|bestehen]].' },
          { text: 'Verben mit Verbzusatz:\n\nEr stellt ab.\n→ [[pt|Er stellte ab.]]\n→ [[pq|Er hatte abgestellt.]]\n→ [[fu|Er wird abstellen.]]' },
        ],
        check: [
          { frage: 'Wie lautet «Er hat den Zug verlassen» im Präteritum?', optionen: ['Er verliess den Zug.', 'Er verlasste den Zug.', 'Er hatte den Zug verlassen.', 'Er wird den Zug verlassen.'], richtig: 0, erklaerung: 'verlassen ist ein starkes Verb: er [[pt|verliess]].' },
          { frage: 'Wie lautet «Sie geht nach Hause» im Plusquamperfekt?', optionen: ['Sie ist nach Hause gegangen.', 'Sie war nach Hause gegangen.', 'Sie hatte nach Hause gegangen.', 'Sie wird nach Hause gehen.'], richtig: 1, erklaerung: 'gehen bildet die Zeit mit sein: [[pq|war]] + Partizip II (gegangen).' },
          { frage: 'Wie lautet «Er hat gewonnen» im Futur I?', optionen: ['Er wird gewinnen.', 'Er wird gewonnen.', 'Er würde gewinnen.', 'Er wird gewonnen haben.'], richtig: 0, erklaerung: 'Futur I: [[fu|wird]] + Infinitiv (gewinnen).' },
        ],
      },
      {
        id: 'verben-bestimmen',
        emoji: '🔍',
        titel: 'Verben genau bestimmen',
        karten: [
          { text: 'Jedes Verb gehört zu einer von drei Gruppen:\n\n[[vv|Vollverb]]\n[[hv|Hilfsverb]]\n[[mv|Modalverb]]' },
          { text: '[[vv|Vollverb]]: Es hat eine eigene Bedeutung und kann allein das Prädikat bilden.\n\nlachen, abstellen, warten' },
          { text: '[[hv|Hilfsverb]]: sein, haben und werden. Sie helfen, Zeitformen und das Passiv zu bilden.\n\ner [[hv|hat]] gelacht\nsie [[hv|wird]] kommen' },
          { text: '[[mv|Modalverb]]: können, müssen, dürfen, sollen, wollen, mögen. Sie verändern die Bedeutung des Vollverbs.\n\ner [[mv|muss]] gehen' },
          { text: 'Achtung: sein und haben können auch Vollverben sein, wenn sie allein stehen.\n\n«Anna [[vv|war]] müde.» (Vollverb)\n«Er [[vv|hat]] ein Fahrrad.» (Vollverb)\n«Sie [[hv|war]] gegangen.» (Hilfsverb)' },
          { text: 'Personalform, Infinitiv oder Partizip II?\n\n• Personalform: ändert sich mit der Person (ich lache, er lacht).\n• Infinitiv: die Grundform (lachen).\n• Partizip II: steht bei zusammengesetzten Zeiten (gelacht).' },
        ],
        check: [
          { frage: 'Welche Verbgruppe ist «hatte» in «Er hatte den Koffer abgestellt»?', optionen: ['Vollverb', 'Hilfsverb', 'Modalverb'], richtig: 1, erklaerung: '[[hv|hatte]] hilft, das Plusquamperfekt von «abstellen» zu bilden.' },
          { frage: 'Welche Verbgruppe ist «sollen» in «Er hätte fliegen sollen»?', optionen: ['Vollverb', 'Hilfsverb', 'Modalverb'], richtig: 2, erklaerung: '[[mv|sollen]] gehört zu können, müssen, dürfen, sollen, wollen, mögen.' },
          { frage: 'Welche Verbgruppe ist «war» in «Anna war müde»?', optionen: ['Vollverb', 'Hilfsverb', 'Modalverb'], richtig: 0, erklaerung: '[[vv|war]] steht allein und hat eine eigene Bedeutung.' },
        ],
      },
      {
        id: 'konjunktiv',
        emoji: '💭',
        titel: 'Konjunktiv erkennen und bilden',
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Modus: die Aussageart des Verbs.\n• Indikativ: die Wirklichkeitsform (er geht).\n• Konjunktiv: die Möglichkeitsform (er gehe, er ginge).\n• Indirekte Rede: Du gibst wieder, was jemand gesagt hat, ohne Anführungszeichen.' },
          { text: '[[k1|Konjunktiv I]]: Er gehört zur indirekten Rede.\n\nStamm + -e:\ner [[k1|gehe]], sie [[k1|habe]], er [[k1|sei]], sie [[k1|könne]]\n\n«Sie sagte, er [[k1|sei]] müde.»' },
          { text: '[[k2|Konjunktiv II]]: für Wünsche und Unwirkliches.\n\nPräteritumform mit Umlaut:\ner [[k2|käme]], sie [[k2|hätte]], er [[k2|wäre]]\n\noder würde + Infinitiv:\ner [[k2|würde gehen]]' },
          { text: 'Wenn der Konjunktiv I gleich aussieht wie der Indikativ (zum Beispiel «sie sagen»), nimmst du den [[k2|Konjunktiv II]].' },
          { text: 'So erkennst du ihn:\n\n«sei», «habe», «könne» → [[k1|Konjunktiv I]]\n«wäre», «hätte», «käme» → [[k2|Konjunktiv II]]' },
        ],
        check: [
          { frage: 'Welche Form ist Konjunktiv I?', optionen: ['sei', 'war', 'ist', 'wäre'], richtig: 0, erklaerung: '[[k1|sei]] ist der Konjunktiv I von sein.' },
          { frage: 'Welche Form ist Konjunktiv II?', optionen: ['habe', 'hatte', 'hätte', 'haben'], richtig: 2, erklaerung: '[[k2|hätte]] ist der Konjunktiv II von haben.' },
          { frage: 'Sie sagte, er ___ müde.', optionen: ['sei', 'ist', 'war', 'sein'], richtig: 0, erklaerung: 'In der indirekten Rede steht bevorzugt der Konjunktiv I: er [[k1|sei]] müde.' },
        ],
      },
      {
        id: 'infinitiv-bilden',
        emoji: '📝',
        titel: 'Verben in die Grundform setzen',
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Infinitiv: die Grundform des Verbs. Er endet meist auf -en (lachen, gehen), manchmal auf -n (sammeln).\n• Verbzusatz: ein Wortteil, der vom Verb getrennt stehen kann (ab- in «er stellt ab», nach- in «sie schaut nach»).' },
          { text: 'Aufgabe: Schreibe alle Verben im Infinitiv heraus.\n\n1. Suche alle verbalen Teile im Satz.\n2. Bilde zu jeder Form die Grundform.' },
          { text: 'Verbformen zurückführen:\n\nsie lachte → lachen\ner ging → gehen\ngekommen → kommen\nhat → haben' },
          { text: 'Verben mit Verbzusatz: Der Zusatz gehört zum Infinitiv.\n\ner stellt den Koffer [[aen|ab]] → [[aen|ab]]stellen\nsie schaut [[aen|nach]] → [[aen|nach]]schauen' },
          { text: 'Lies die Aufgabe genau. Sind nur Vollverben gesucht, schreibst du «haben», «sein» und «werden» nur auf, wenn sie im Satz Vollverben sind.' },
        ],
        check: [
          { frage: 'Wie lautet der Infinitiv von «sie ging»?', optionen: ['gehen', 'gang', 'gegangen', 'ging'], richtig: 0, erklaerung: 'ging ist die Präteritumform von gehen.' },
          { frage: 'Wie lautet der Infinitiv von «er stellte ab»?', optionen: ['abstellen', 'stellen', 'abgestellt', 'ab stellen'], richtig: 0, erklaerung: 'Der Verbzusatz «[[aen|ab]]» gehört zum Infinitiv: [[aen|ab]]stellen.' },
          { frage: 'Wie lautet der Infinitiv von «gekommen»?', optionen: ['kommen', 'gekommen', 'kam', 'kommt'], richtig: 0, erklaerung: 'gekommen ist das Partizip II von kommen.' },
        ],
      },
      {
        id: 'zeitformen-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ «hatte gelacht» ist Perfekt.\n✅ Nein: hatte oder war + Partizip II ist Plusquamperfekt. Das Perfekt bildest du mit hat oder ist.' },
          { text: '❌ Bei «Er stellt den Koffer ab» ist nur «stellt» der verbale Teil.\n✅ «ab» gehört dazu. Der verbale Teil ist «stellt ab».' },
          { text: '❌ Vier verbale Teile sind vier Zeitformen.\n✅ Du zählst jede Zeitform nur einmal. «ist, sieht, war, hatte» sind nur zwei Zeitformen: Präsens und Präteritum.' },
          { text: '❌ «war» ist immer ein Hilfsverb.\n✅ Steht es allein («Anna war müde»), ist es ein Vollverb. Hilfsverb ist es nur mit einem Partizip («sie war gegangen»).' },
          { text: '❌ «sei» ist Konjunktiv II.\n✅ «sei» ist der Konjunktiv I von sein. Der Konjunktiv II ist «wäre».' },
          { text: '❌ Plusquamperfekt von «Sie geht»: «Sie hatte gegangen.»\n✅ gehen bildet die Zeit mit sein: «Sie war gegangen.»' },
          { text: '❌ Futur I von «Er gewinnt»: «Er wird gewonnen.»\n✅ Nach wird steht der Infinitiv: «Er wird gewinnen.»' },
          { text: '❌ Der Infinitiv von «er stellte ab» ist «stellen».\n✅ Der Verbzusatz gehört zum Infinitiv: «abstellen».' },
        ],
        check: [],
      },
      {
        id: 'zeitformen-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 12,
        karten: [
          { text: 'Bestimme die Zeitform des verbalen Teils:\n\n«Der Kosename war bei den Wengers wegen des Doktors Anglophilie in Gebrauch genommen worden.»', loesung: '«war … in Gebrauch genommen worden» steht im [[pq|Plusquamperfekt]], und zwar im Passiv.' },
          { text: 'In welchen Zeitformen stehen die beiden Teilsätze?\n\n«Er schob mich vor sich her wie eine Vogelscheuche, die, des Diebstahls überführt, die Stätte ihrer Träume am Feldrain hat verlassen müssen.»', loesung: 'Teilsatz 1 «Er schob mich vor sich her»: [[pt|Präteritum]].\nTeilsatz 2 «die Stätte … hat verlassen müssen»: [[pf|Perfekt]].' },
          { text: 'Was trifft auf den verbalen Teil zu?\n\n«Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen.»', loesung: '«hatte … getragen»: [[pq|Plusquamperfekt]], Indikativ, Aktiv.' },
          { text: 'Was trifft auf den verbalen Teil zu?\n\n«Aber früher war er mal von einem Nachbarshund gebissen worden.»', loesung: '«war … gebissen worden»: Passiv, Indikativ, [[pq|Plusquamperfekt]].' },
          { text: 'Wie viele verschiedene Zeitformen kommen vor?\n\n«Schon beim ersten fernen Donnergrollen war Franz in das kleine Fischerhaus gelaufen, das er und seine Mutter in dem Örtchen Nussdorf am Attersee bewohnten.»', loesung: 'Zwei: «war gelaufen» ist [[pq|Plusquamperfekt]], «bewohnten» ist [[pt|Präteritum]].' },
          { text: 'Wie viele verschiedene Zeitformen kommen vor?\n\n«Er hatte jetzt schon lange keinen anderen Wanderer mehr gesehen, was ihn wunderte, und auf dieser neuen Route schien er definitiv der Einzige zu sein.»', loesung: 'Zwei: «hatte gesehen» ist [[pq|Plusquamperfekt]], «wunderte» und «schien» sind [[pt|Präteritum]].' },
          { text: 'Wie viele verschiedene Zeitformen kommen vor?\n\n«Ich war fünfzehn, Internatsschüler, und hatte noch kein Mädchen geküsst, als ich bei den Feiern zu fotografieren begann.»', loesung: 'Zwei: «war» und «begann» sind [[pt|Präteritum]], «hatte geküsst» ist [[pq|Plusquamperfekt]].' },
          { text: 'Wie viele verschiedene Zeitformen kommen vor?\n\n«Da ist jemand, der die Arbeit sieht», war das höchste Lob, das sein Vater zu vergeben hatte.', loesung: 'Zwei: «ist» und «sieht» sind [[pr|Präsens]], «war» und «hatte» sind [[pt|Präteritum]].' },
          { text: 'Schreibe alle Verben im Infinitiv auf und sag, wie viele verschiedene Zeitformen vorkommen:\n\n«Der Ritter hatte kontaktfreudig sein Visier hochgeklappt und fummelte an den Stricken herum.»', loesung: 'haben, hochklappen, herumfummeln.\nZwei Zeitformen: [[pq|Plusquamperfekt]] und [[pt|Präteritum]].' },
          { text: 'Schreibe alle Verben der Reihe nach im Infinitiv auf:\n\n«Alle hatten sie den Mantelkragen hochgeschlagen, sie behielten die nasse Zigarette zwischen den Lippen, und mit dem Daumen winkten sie zu unserm Ford herüber.»', loesung: 'haben, hochschlagen, behalten, herüberwinken' },
          { text: 'Schreibe alle Verben der Reihe nach im Infinitiv auf:\n\n«Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf und begann ungeschickt über ihr Haar zu streicheln.»', loesung: 'tun, legen, beginnen, streicheln' },
          { text: 'Schreibe alle Verben der Reihe nach im Infinitiv auf:\n\n«Das Stechen in seinem Knie liess nicht nach, und er spürte, wie der Schmerz allmählich seine Stimmung verdarb.»', loesung: 'nachlassen, spüren, verderben' },
          { text: 'Schreibe alle Verben der Reihe nach im Infinitiv auf:\n\n«Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten, in die er nicht noch tiefer hineingezogen werden wollte.»', loesung: 'beginnen, halten, hineinziehen, werden, wollen' },
          { text: 'Setze ins Präteritum:\n\n«Er hatte sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke gelegt und den Zug bereits zwei Stationen später wieder verlassen.»', loesung: 'Er [[pt|legte]] sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke und [[pt|verliess]] den Zug bereits zwei Stationen später wieder.' },
          { text: 'Setze ins Präteritum:\n\n«Ich weiss auch nicht, wie hoch die Brücke ist, ich kenne keine genaue Zahl, obwohl wir uns viel damit beschäftigt haben.»', loesung: 'Ich [[pt|wusste]] auch nicht, wie hoch die Brücke [[pt|war]], ich [[pt|kannte]] keine genaue Zahl, obwohl wir uns viel damit beschäftigt [[pq|hatten]].' },
          { text: 'Setze ins Präsens:\n\n«Sie senkte die Wimpern, bis sie ihr fast die Wangen streichelten, und hob sie langsam wieder wie einen Theatervorhang.»', loesung: 'Sie [[pr|senkt]] die Wimpern, bis sie ihr fast die Wangen [[pr|streicheln]], und [[pr|hebt]] sie langsam wieder wie einen Theatervorhang.' },
          { text: 'Setze ins Futur I:\n\n«Meine Mutter hatte die Fahrprüfung rechtzeitig bestanden.»', loesung: 'Meine Mutter [[fu|wird]] die Fahrprüfung rechtzeitig [[fu|bestehen]].' },
          { text: 'Setze ins Futur I:\n\n«Die Tränen vermischten sich mit dem Regenwasser, und ihre Schultern bebten.»', loesung: 'Die Tränen [[fu|werden]] sich mit dem Regenwasser [[fu|vermischen]], und ihre Schultern [[fu|werden beben]].' },
          { text: 'Setze ins Futur I:\n\n«Leise schob er einen Flügel auf und schlüpfte hinein.»', loesung: 'Leise [[fu|wird]] er einen Flügel [[fu|aufschieben]] und [[fu|hineinschlüpfen]].' },
          { text: 'Setze ins Plusquamperfekt:\n\n«Mit dem Regen kam die Kälte. Sie prallte zunächst an ihm ab, aber nach und nach drang sie in seine Knochen und in sein Gemüt.»', loesung: 'Mit dem Regen [[pq|war]] die Kälte [[pq|gekommen]]. Sie [[pq|war]] zunächst an ihm [[pq|abgeprallt]], aber nach und nach [[pq|war]] sie in seine Knochen und in sein Gemüt [[pq|gedrungen]].' },
          { text: 'Setze ins Plusquamperfekt:\n\n«Das Hotel blieb im Sommer geschlossen, unser Vater fuhr alle paar Tage hin, um nach dem Rechten zu sehen.»', loesung: 'Das Hotel [[pq|war]] im Sommer geschlossen [[pq|geblieben]], unser Vater [[pq|war]] alle paar Tage [[pq|hingefahren]], um nach dem Rechten zu sehen.' },
          { text: 'Setze ins Plusquamperfekt:\n\n«Über die Schwelle in den Korridor wurde der Wagen getragen, das machte sein Vater.»', loesung: 'Über die Schwelle in den Korridor [[pq|war]] der Wagen [[pq|getragen worden]], das [[pq|hatte]] sein Vater [[pq|gemacht]].' },
          { text: 'Bestimme Verbgruppe und Form:\n\n«Und ich versteh ja, dass man in Davos nichts anderes bauen lassen kann.»\n\nversteh / bauen / lassen / kann', loesung: 'versteh: Vollverb, Personalform.\nbauen und lassen: Vollverb im Infinitiv.\nkann: Modalverb, Personalform.' },
          { text: 'Bestimme Verbgruppe und Form:\n\n«Es konnte einen fertig machen, es konnte einem sogar richtig schwindelig werden, weil man so angestrengt schaute.»\n\nkonnte / machen / werden / schaute', loesung: 'konnte: Modalverb, Personalform.\nmachen: Vollverb, Infinitiv.\nwerden: Hilfsverb, Infinitiv.\nschaute: Vollverb, Personalform.' },
          { text: 'Bestimme Verbgruppe und Form:\n\n«Die älteren Schüler, die mit der Bahn eben angekommen waren, standen auf dem Vorplatz des Bahnhofs herum.»\n\nangekommen / waren / standen / herum', loesung: 'angekommen: Vollverb, Partizip.\nwaren: Hilfsverb, Personalform.\nstanden: Vollverb, Personalform.\nherum: Verbzusatz.' },
          { text: 'Übertrage in den Konjunktiv II:\n\n«Seine war rot.»', loesung: 'Seine [[k2|wäre]] rot [[k2|gewesen]].' },
          { text: 'Welcher Modus steht hier?\n\n«… er solle sich nicht erkälten …»', loesung: 'Konjunktiv, genauer der [[k1|Konjunktiv I]]. Er steht typischerweise in der indirekten Rede.' },
          { text: 'Setze das Verb «sein» in den Konjunktiv I:\n\nSie sagte, er ___ müde.', loesung: '[[k1|sei]]' },
        ],
        check: [],
      },
    ],
  },

  // ─── Textverständnis ──────────────────────────────────────────────────────
  'Textverständnis': {
    titel: 'Textverständnis',
    kacheln: [
      {
        id: 'textverstaendnis-aussagen',
        emoji: '✅',
        titel: 'Aussagen im Text prüfen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Aussage: ein Satz, von dem du sagen musst, ob er stimmt.\n• Beleg: die Stelle im Text, die es beweist.\n• Detail: eine kleine Angabe wie eine Zahl, ein Ort, eine Person.' },
          { text: 'So gehst du vor:\n\n1. Aussage lesen\n2. Die passende Stelle im Text suchen\n3. Wort für Wort vergleichen\n\n💡 Nie nach Gefühl entscheiden. Was du nicht belegen kannst, stimmt nicht.' },
          { text: 'Falle 1: Ein [[aen|Detail]] ist verdreht.\n\nAussage: «Vater und Tochter haben ein Privatabteil.»\nIm Text: Sie liegen in einem Liegewagenabteil, und ein anderer Fahrgast steigt zu.\n\n→ stimmt nicht' },
          { text: 'Falle 2: Ein [[aen|Vergleich]] ist keine Aussage über die Wirklichkeit.\n\nIm Text: «… ein paar Bäume, sauber gestutzt wie Pudelhunde.»\n\n→ Es gibt dort keine Pudelhunde. Eine Aussage über Hunde stimmt nicht.' },
          { text: 'Falle 3: Die [[aen|Richtung]] ist vertauscht.\n\nAussage: «Thérèse sagt ihrem Vater, er solle nicht so laut schreien.»\nIm Text: Der Vater sagt es ihr.\n\n→ stimmt nicht' },
          { text: '💡 Merksatz:\n\nKein Beleg im Text → die Aussage stimmt nicht.\n\nAchte besonders auf immer, alle, nie und auf Zahlen. Solche Wörter machen eine Aussage schnell zu stark.' },
        ],
        check: [
          { frage: 'Im Text steht: «Hinter der Garage standen ein paar Bäume, sauber gestutzt wie Pudelhunde.» Stimmt die Aussage «Im Garten laufen Pudelhunde herum»?', optionen: ['Ja, sie werden erwähnt', 'Nein, das ist nur ein Vergleich'], richtig: 1, erklaerung: 'Der Vergleich beschreibt die Form der Bäume, keine echten Hunde.' },
          { frage: 'Du findest zu einer Aussage keine Stelle im Text. Was kreuzt du an?', optionen: ['stimmt', 'stimmt nicht', 'Ich rate'], richtig: 1, erklaerung: 'Nur was im Text belegt ist, stimmt.' },
          { frage: 'Welche Wörter machen eine Aussage besonders verdächtig?', optionen: ['immer, alle, nie', 'vielleicht, manchmal', 'und, oder'], richtig: 0, erklaerung: 'Solche Wörter sind oft zu stark für das, was im Text wirklich steht.' },
        ],
      },
      {
        id: 'textverstaendnis-reihenfolge',
        emoji: '🔢',
        titel: 'Ereignisse in die richtige Reihenfolge bringen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Reihenfolge: in welcher Zeit die Ereignisse wirklich passieren.\n• Rückblende: der Text erzählt etwas, das vorher geschehen ist.\n• Zeitwörter: zuerst, dann, später, am nächsten Tag.' },
          { text: 'So gehst du vor:\n\n1. Jedes Ereignis im Text suchen und markieren\n2. Auf die [[aen|Zeitwörter]] achten\n3. Nummern 1 bis 5 vergeben' },
          { text: '⚠️ Die Erzählreihenfolge ist nicht immer die Zeitreihenfolge.\n\nEine [[aen|Rückblende]] erzählt mitten in der Geschichte etwas, das schon vorbei ist. Die Zeitform hilft: Plusquamperfekt zeigt, dass etwas vorher war.' },
          { text: 'Beispiel. Bringe diese Ereignisse in die richtige Reihenfolge:\n\n• Fahrt durch ein Moorgebiet\n• Mittagessen mit dem Lieblingsgericht\n• Bierflasche fliegt aus dem Zug\n• Ein Taxi wird überholt\n• Abschiedskuss für den Vater' },
          { text: 'Die Lösung dazu:\n\n1. Mittagessen\n2. Abschiedskuss\n3. Moorgebiet\n4. Bierflasche\n5. Taxi\n\n💡 Setze zuerst das Erste und das Letzte. Die Mitte ergibt sich dann fast von allein.' },
        ],
        check: [
          { frage: 'Woran erkennst du im Text eine Rückblende?', optionen: ['Am Plusquamperfekt', 'Am Präsens', 'An der Länge des Satzes'], richtig: 0, erklaerung: 'Das Plusquamperfekt zeigt, dass etwas vor dem Erzählten passiert ist.' },
          { frage: 'Welche Wörter helfen dir beim Ordnen am meisten?', optionen: ['zuerst, dann, später', 'schön, gross, laut', 'der, die, das'], richtig: 0, erklaerung: 'Das sind Zeitwörter, sie zeigen die Abfolge.' },
          { frage: 'Womit beginnst du am besten?', optionen: ['Mit dem ersten und dem letzten Ereignis', 'Mit dem mittleren Ereignis', 'Mit dem längsten Satz'], richtig: 0, erklaerung: 'Anfang und Ende sind meist am klarsten, der Rest ordnet sich dazwischen.' },
        ],
      },
    ],
  },

  // ─── Wortschatz ───────────────────────────────────────────────────────────
  'Wortschatz': {
    titel: 'Wortschatz',
    kacheln: [
      {
        id: 'wortschatz-synonyme',
        emoji: '🔁',
        titel: 'Synonyme finden',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• [[syn|Synonym]]: ein Wort mit gleicher oder sehr ähnlicher Bedeutung (gross – riesig).\n• Kontext: der Satz, in dem das Wort steht.\n• Einsetzprobe: Du setzt dein Wort in den Satz ein und liest ihn ganz durch.' },
          { text: 'So gehst du vor:\n\n1. Was heisst das Wort hier? Sag es in eigenen Worten.\n2. Ein Wort dazu suchen.\n3. [[aen|Einsetzprobe]]: in den Satz einsetzen und laut lesen.' },
          { text: 'Beispiel:\n\n«… der Hafen war verödet …»\n\nverödet = da ist niemand mehr\n→ [[syn|verlassen]], [[syn|verwaist]], [[syn|unbelebt]]' },
          { text: 'Beispiel:\n\n«Nach dem Essen kramte sie unter ihren Schürzen.»\n\nkramen = ungeordnet suchen\n→ [[syn|suchte]], [[syn|stöberte]], [[syn|wühlte]]' },
          { text: '⚠️ Dein Wort muss auch grammatikalisch passen.\n\n«Von Böen getrieben, prasselte der Regen gegen die Fensterscheiben.»\n→ [[syn|trommelte]], [[syn|peitschte]], [[syn|klopfte]]\n\nNicht «Trommeln»: Im Satz steht eine Verbform.' },
          { text: '💡 Merksatz:\n\nEin Synonym muss in DIESEN Satz passen, nicht nur ungefähr dasselbe heissen.\n\nDie Einsetzprobe entlarvt jedes Wort, das nur fast passt.' },
        ],
        check: [
          { frage: 'Welches Wort passt für «ratsam» in «… ob es ratsam sei, den Grossvater mitzunehmen»?', optionen: ['empfehlenswert', 'ratlos', 'rätselhaft'], richtig: 0, erklaerung: 'ratsam heisst: es ist sinnvoll, empfehlenswert.' },
          { frage: 'Welches Wort passt für «gestutzt» in «… ein paar Bäume, sauber gestutzt wie Pudelhunde»?', optionen: ['beschnitten', 'gestützt', 'gewachsen'], richtig: 0, erklaerung: 'stutzen heisst hier schneiden. «gestützt» ist ein anderes Wort.' },
          { frage: 'Was prüfst du zum Schluss immer?', optionen: ['Ob das Wort im Satz grammatikalisch passt', 'Ob das Wort kürzer ist', 'Ob das Wort moderner klingt'], richtig: 0, erklaerung: 'Die Einsetzprobe: Satz mit deinem Wort ganz durchlesen.' },
        ],
      },
      {
        id: 'wortschatz-gegenteile',
        emoji: '↔️',
        titel: 'Gegenteile finden',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• [[geg|Antonym]]: ein Wort mit gegenteiliger Bedeutung (hell – dunkel).\n• Vorsilbe: ein Wortteil vorne, zum Beispiel un- in unklar.' },
          { text: 'So gehst du vor:\n\n1. Bedeutung in eigenen Worten sagen\n2. Das Gegenteil davon denken\n3. Einsetzprobe im Satz\n\n→ Ein ähnliches Wort ist noch kein Gegenteil.' },
          { text: 'Beispiel:\n\n«… hier blickte er mich verächtlich an …»\n\nverächtlich = von oben herab\n→ [[geg|bewundernd]], [[geg|respektvoll]]' },
          { text: 'Beispiel:\n\n«Franz tat einen zögerlichen Schritt …»\n\nzögerlich = unsicher, langsam\n→ [[geg|raschen]], [[geg|entschiedenen]], [[geg|sicheren]]\n\nAchtung: Die Endung muss zum Satz passen.' },
          { text: '⚠️ Oft ist die Vorsilbe un- verboten.\n\n«… beobachtete ihn jedoch aufmerksam.»\nNicht erlaubt: unaufmerksam\n→ [[geg|achtlos]], [[geg|zerstreut]], [[geg|nachlässig]]' },
          { text: '💡 Merksatz:\n\nLies die Aufgabe genau: Steht dort «nicht mit un-», brauchst du ein eigenes Wort.\n\nSuch dann ein Wort, das die Sache von der anderen Seite beschreibt.' },
        ],
        check: [
          { frage: 'Welches Wort ist das Gegenteil von «mühsam»?', optionen: ['mühelos', 'mühevoll', 'müde'], richtig: 0, erklaerung: 'mühelos heisst: ohne Anstrengung.' },
          { frage: 'Gesucht ist das Gegenteil von «gesenktem» in «… mit gesenktem Kopf».', optionen: ['erhobenem', 'geneigtem', 'gebeugtem'], richtig: 0, erklaerung: 'erhoben ist das Gegenteil von gesenkt, die anderen bedeuten dasselbe.' },
          { frage: 'Die Aufgabe verbietet die Vorsilbe un-. Was tust du?', optionen: ['Ein eigenes Wort suchen', 'Trotzdem un- benutzen', 'Das Wort weglassen'], richtig: 0, erklaerung: 'Gesucht ist ein anderes Wort, etwa achtlos statt unaufmerksam.' },
        ],
      },
      {
        id: 'wortschatz-wendungen',
        emoji: '💬',
        titel: 'Wendungen ersetzen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Wendung: mehrere Wörter, die zusammen eine eigene Bedeutung haben (ins Wasser fallen = nicht stattfinden).\n• Sinngemäss ersetzen: etwas sagen, das dasselbe bedeutet, mit anderen Worten.' },
          { text: 'Wichtig: Eine Wendung darfst du nicht wörtlich nehmen.\n\n«Aber er kam nicht zu Rande.»\n\nNicht: er erreichte den Rand nicht\n→ Er konnte es nicht tun, er kam nicht zu einem Ende.' },
          { text: 'Beispiel:\n\n«… um uns kleinen Geistern auf die Sprünge zu helfen.»\n\n→ [[syn|nachzuhelfen]]; zu zeigen, wie man es macht\n\nEs geht ums Helfen, nicht ums Springen.' },
          { text: 'Beispiel:\n\n«Alles in allem bist du ein guter Bub gewesen.»\n\n→ [[syn|Insgesamt]]\n\nDie Wendung fasst zusammen. Sie sagt nichts darüber, wie oft etwas passiert.' },
          { text: 'Beispiel mit beiden Richtungen:\n\n«Die singende Gruppe liess uns passieren.»\n\n→ gleich: [[syn|machte uns Platz]]\n→ gegenteilig: [[geg|versperrte uns den Weg]]' },
          { text: '💡 Merksatz:\n\nFrag dich: Was tut die Person hier wirklich?\n\nDiese Antwort in einfachen Worten ist fast immer die gesuchte Ersetzung.' },
        ],
        check: [
          { frage: 'Was bedeutet «jemandem zur Hand gehen»?', optionen: ['helfen', 'die Hand geben', 'weggehen'], richtig: 0, erklaerung: 'zur Hand gehen heisst helfen, beistehen, unterstützen.' },
          { frage: 'Wie lässt sich «alles in allem» ersetzen?', optionen: ['Insgesamt', 'Immer', 'Selten'], richtig: 0, erklaerung: 'Die Wendung fasst zusammen: insgesamt.' },
          { frage: 'Was ist bei Wendungen der häufigste Fehler?', optionen: ['Man nimmt sie wörtlich', 'Man schreibt sie gross', 'Man kürzt sie ab'], richtig: 0, erklaerung: 'Die Bedeutung der ganzen Wendung zählt, nicht die der einzelnen Wörter.' },
        ],
      },
      {
        id: 'wortschatz-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Ein ähnliches Wort genügt.\n✅ Es muss in DIESEN Satz passen. Mach immer die Einsetzprobe.' },
          { text: '❌ Gegenteil mit un-, obwohl die Aufgabe das verbietet.\n✅ Ein eigenes Wort suchen: achtlos statt unaufmerksam, mühelos statt unmühsam.' },
          { text: '❌ Die Wendung wörtlich nehmen.\n✅ «nicht zu Rande kommen» hat nichts mit einem Rand zu tun: Es heisst, etwas nicht zu schaffen.' },
          { text: '❌ Die Wortform vergessen.\n✅ Steht im Satz ein Verb in der Vergangenheit, muss auch dein Wort passen: trommelte, nicht trommeln.' },
          { text: '❌ Nur ein Wort nennen, obwohl mehrere gesucht sind.\n✅ Lies, wie viele Wörter verlangt sind, und streiche beim Ankreuzen wirklich alle, die nicht passen.' },
          { text: '❌ Synonym und Gegenteil verwechseln.\n✅ Unterstreiche in der Aufgabe das Wort «entsprechend» oder «gegensätzlich», bevor du schreibst.' },
          { text: '❌ Raten, wenn du das Wort nicht kennst.\n✅ Lies den ganzen Satz: Oft verrät der Zusammenhang die Bedeutung.' },
        ],
        check: [],
      },
      {
        id: 'wortschatz-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 15,
        karten: [
          // 2016, Aufgabe 2
          { text: 'Was bedeutet die Wendung sinngemäss?\n\n«Sie unterbrach sich höchstens eine Sekunde.»', loesung: 'Sie redete praktisch pausenlos weiter, also ohne Unterbrechung.' },
          // 2016, Aufgabe 3a
          { text: 'Welche Wörter entsprechen «abgeliefert»?\n\n«… wenn er Thérèse in Oxford abgeliefert hatte …»\n\nabgeholt / abgesetzt / abgemahnt / vermittelt / ausgesetzt / übergeben', loesung: 'abgesetzt und übergeben. «abgeholt» ist das Gegenteil.' },
          // 2016, Aufgabe 3b
          { text: 'Welche Wörter entsprechen hier «Publikum»?\n\n«… unter einem Publikum aus reisenden Engländern …»\n\nZuschauer / Zuhörer / Fans / Öffentlichkeit', loesung: 'Zuschauer, Zuhörer und Öffentlichkeit. «Fans» passt nicht.' },
          // 2016, Aufgabe 4a
          { text: 'Finde ein Wort mit gleicher Bedeutung für «peinlich»:\n\n«… es war Wenger peinlich, dass Thérèse ihn so laut mit Daddy anredete.»', loesung: 'unangenehm, genierlich' },
          // 2016, Aufgabe 4b
          { text: 'Finde ein Wort mit gleicher Bedeutung für «überhaupt»:\n\n«Mammi und du, ihr seid überhaupt keine Spiesser.»', loesung: 'wirklich, gar, wahrhaftig' },
          // 2016, Aufgabe 22b
          { text: 'Finde eine Wendung mit gegenteiliger Bedeutung für «überwiegend»:\n\n«Die Leute … schienen überwiegend Engländer zu sein.»', loesung: 'zum geringeren Teil, nur teilweise, nicht alle' },
          // 2017, Aufgabe 3
          { text: 'Welche Ersetzungen passen für «Ehe ich mich versehen hatte»?\n\n«Ehe ich mich versehen hatte, war mein linkes Handgelenk mit einer dünnen Kette umschlossen.»\n\nUnerwartet schnell / Aus Versehen / Bevor ich es realisierte / Ehe ich mich umgesehen hatte', loesung: '«Unerwartet schnell» und «Bevor ich es realisierte».' },
          // 2017, Aufgabe 5a
          { text: 'Finde ein Wort mit gleicher Bedeutung für «verödet»:\n\n«… der Hafen war verödet …»', loesung: 'verlassen, verwaist, unbelebt' },
          // 2017, Aufgabe 5b
          { text: 'Finde ein Wort mit gegenteiliger Bedeutung für «verächtlich»:\n\n«… hier blickte er mich verächtlich an …»', loesung: 'bewundernd, respektvoll, hochachtungsvoll' },
          // 2017, Aufgabe 21a
          { text: 'Was bedeutet «Durchbrenner»?\n\nBrandstifter / Ausreisser / Feuerwehrmann / Panzerknacker', loesung: 'Ausreisser' },
          // 2017, Aufgabe 21c
          { text: 'Was bedeutet «entweichen»?\n\nFliehen / Rennen / Abtreten / Entrinnen', loesung: 'Fliehen und Entrinnen' },
          // 2018, Aufgabe 3a
          { text: 'Welches Wort entspricht «rührten»?\n\n«Wir rührten uns nicht.»', loesung: 'bewegten' },
          // 2018, Aufgabe 3b
          { text: 'Welches Wort entspricht «scheitern»?\n\n«Alle, die da gescheitert waren.»', loesung: 'versagen, fehlschlagen' },
          // 2018, Aufgabe 4a
          { text: 'Finde ein Wort oder eine Wendung für «konzentriert»:\n\n«Ich war nicht konzentriert.»', loesung: 'bei der Sache, aufmerksam, fokussiert' },
          // 2018, Aufgabe 16
          { text: 'Was haben diese Wörter gemeinsam?\n\na) Brücke, Wolkenkratzer, Stauwehr, Schiff\nb) Himmel, Mount Everest, Regen, Wind', loesung: 'a: alles von Menschen gemacht.\nb: alles Natur, nicht von Menschen gemacht.' },
          // 2018, Aufgabe 17
          { text: 'Wie lässt sich die Wendung ersetzen?\n\n«… um uns kleinen Geistern auf die Sprünge zu helfen.»', loesung: 'nachzuhelfen; zu zeigen, wie man es macht' },
          // 2019, Aufgabe 2a
          { text: 'Finde ein Wort mit gleicher Bedeutung für «gestutzt»:\n\n«Hinter der Garage standen dekorativ ein paar Bäume umher, sauber gestutzt wie Pudelhunde.»', loesung: 'beschnitten, geschnitten, geschoren' },
          // 2019, Aufgabe 2b
          { text: 'Finde ein Wort mit gleicher Bedeutung für «verkraften»:\n\n«Sie sah aber ganz so aus, als ob sie einiges verkraften könnte.»', loesung: 'bewältigen, aushalten, ertragen' },
          // 2019, Aufgabe 3
          { text: 'Finde für «schimmernd» ein Wort mit gleicher und eines mit gegenteiliger Bedeutung:\n\n«… weiss wie frisches Orangenmark und schimmernd wie Porzellan.»', loesung: 'Gleich: glänzend, leuchtend, blank.\nGegenteil: matt, stumpf, glanzlos.' },
          // 2019, Aufgabe 4
          { text: 'Was heisst «nicht zu Rande kommen»?\n\n«Aber er kam nicht zu Rande.»\n\nden Rand nicht erreichen / etwas nicht umranden / etwas nicht tun können / nicht zu einem Ende kommen', loesung: '«etwas nicht tun können» und «nicht zu einem Ende kommen können».' },
          // 2019, Aufgabe 12b
          { text: 'Welches Wort entspricht der Wendung «zur Hand gehen»?', loesung: 'helfen, beistehen, unterstützen' },
          // 2020, Aufgabe 2a
          { text: 'Finde ein Wort mit gleicher Bedeutung für «ratsam»:\n\n«Lange hatten die Eltern überlegt, ob es ratsam sei, den Grossvater mitzunehmen.»', loesung: 'empfehlenswert, vorteilhaft, sinnvoll' },
          // 2020, Aufgabe 2b
          { text: 'Finde ein Wort mit gleicher Bedeutung für «Windungen»:\n\n«… auf der anderen Seite des Flusses, dessen Windungen sie geschwind entlangschlängelte …»', loesung: 'Biegungen, Kehren, Kurven' },
          // 2020, Aufgabe 5
          { text: 'Finde ein Wort mit gleicher Bedeutung für «kramte»:\n\n«Nach dem Essen kramte sie unter ihren Schürzen; sie fand einen Fünfliber, den sie mir zuschob.»', loesung: 'suchte, stöberte, wühlte, fischte' },
          // 2020, Aufgabe 6
          { text: 'Ersetze «liess uns passieren» einmal mit gleicher, einmal mit gegenteiliger Bedeutung:\n\n«Die singende Gruppe … liess uns passieren.»', loesung: 'Gleich: machte uns Platz, ging zur Seite, trat aus dem Weg.\nGegenteil: versperrte uns den Weg.' },
          // 2020, Aufgabe 7
          { text: 'Wie lässt sich «alles in allem» ersetzen?\n\n«Alles in allem, sagte die Frau Luthiger, bist du ein guter Bub gewesen.»\n\nImmer / Nie / Insgesamt / Selten', loesung: 'Insgesamt' },
          // 2021, Aufgabe 2a
          { text: 'Finde ein Wort mit gleicher Bedeutung für «prasselte»:\n\n«Von Böen getrieben, prasselte der Regen gegen die Fensterscheiben.»', loesung: 'peitschte, trommelte, klopfte, dröhnte' },
          // 2021, Aufgabe 3b
          { text: 'Finde ein Wort mit gegenteiliger Bedeutung für «zögerlichen»:\n\n«Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf …»', loesung: 'raschen, entschiedenen, sicheren, zielgerichteten' },
          // 2022, Aufgabe 2c
          { text: 'Finde ein Wort mit gleicher Bedeutung für «weitschweifigen»:\n\n«Er hoffte, Amber war vor seinem weitschweifigen Gefühlsbekenntnis ins Wasser gesprungen.»', loesung: 'ausführlichen, umfangreichen, langfädigen, ausufernden' },
          // 2023, Aufgabe 2b
          { text: 'Finde ein Wort mit gleicher Bedeutung für «wähnte»:\n\n«Er wähnte sich bereits in Sicherheit …»', loesung: 'glaubte, vermutete, dachte' },
        ],
        check: [],
      },
    ],
  },

  // ─── Satzglieder ──────────────────────────────────────────────────────────
  'Satzglieder': {
    titel: 'Satzglieder',
    kacheln: [
      {
        id: 'satzglieder-subjekt',
        emoji: '🎯',
        titel: 'Subjekt finden',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Satzglied: ein Baustein des Satzes, der zusammen verschoben werden kann.\n• [[prd|Prädikat]]: der verbale Teil des Satzes.\n• [[su|Subjekt]]: wer oder was etwas tut. Es ist eine Nominalgruppe im [[nom|Nominativ]].' },
          { text: 'Der Fragetest:\n\n1. Zuerst das [[prd|Prädikat]] suchen\n2. Dann fragen: [[aen|Wer oder was]] + Prädikat?\n\n«Der Vater trug den Koffer.»\n→ Wer oder was trug? → [[su|der Vater]]' },
          { text: '⚠️ Das Subjekt steht nicht immer vorn.\n\n«In der Ferne reagierte ein [[su|Hund]].»\n\n→ Wer oder was reagierte? Ein Hund. Vorn steht nur eine Ortsangabe.' },
          { text: 'Auch ein kleines Wort kann Subjekt sein.\n\n«Aber hier, in Calais, unter einem Publikum aus reisenden Engländern, störte [[su|es]] ihn plötzlich.»\n\n→ Subjekt: es, im [[nom|Nominativ]].' },
          { text: 'Mehrere Teilsätze haben mehrere Subjekte.\n\n«Bislang war [[su|es]] umgekehrt gewesen: [[su|Er]] hatte geheult, und [[su|die Mutter]] hatte ihn gestreichelt.»\n\n→ drei Subjekte, eines pro Teilsatz.' },
          { text: '💡 Merksatz:\n\nSubjekt = «Wer oder was?» + Prädikat.\n\nDas Subjekt steht immer im [[nom|Nominativ]] und passt in der Form zum Verb: er geht, sie gehen.' },
        ],
        check: [
          { frage: 'Was ist das Subjekt in «Mitten auf der Wiese stand ein grosser Schäferhund»?', optionen: ['ein grosser Schäferhund', 'Mitten auf der Wiese', 'stand'], richtig: 0, erklaerung: 'Wer oder was stand? Ein grosser Schäferhund.' },
          { frage: 'In welchem Fall steht das Subjekt immer?', optionen: ['Nominativ', 'Akkusativ', 'Dativ'], richtig: 0, erklaerung: 'Das Subjekt ist eine Nominalgruppe im Nominativ.' },
          { frage: 'Wie viele Subjekte hat «Nichts passierte. Er schob den Hebel in eine andere Position»?', optionen: ['Zwei: Nichts und Er', 'Eines: Er', 'Drei'], richtig: 0, erklaerung: 'Jeder der beiden Sätze hat ein eigenes Subjekt.' },
        ],
      },
      {
        id: 'satzglieder-objekte',
        emoji: '🎒',
        titel: 'Objekte finden',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Objekt: die Ergänzung zum Verb, meist eine Nominalgruppe.\n• [[ao|Akkusativobjekt]], [[do|Dativobjekt]], [[go|Genitivobjekt]]: benannt nach ihrem Fall.' },
          { text: 'Die drei Fragetests:\n\n[[ao|Akkusativobjekt]] → Wen oder was?\n[[do|Dativobjekt]] → Wem?\n[[go|Genitivobjekt]] → Wessen?\n\nImmer zusammen mit dem Prädikat fragen.' },
          { text: 'Beispiel:\n\n«Er zog mich fort.»\n\n→ Wen oder was zog er fort? [[ao|mich]]\n→ Akkusativobjekt.' },
          { text: 'Beispiel mit Dativ:\n\n«Ich sah [[do|den Möwen]] zu. Mein trauriges Gesicht fiel [[do|einem Polizisten]] auf.»\n\n→ Wem sah ich zu? Wem fiel es auf? Beides Dativobjekte.' },
          { text: '⚠️ Was mit einer Präposition beginnt, ist kein Objekt.\n\n«Franz tat [[ao|einen zögerlichen Schritt]], legte [[ao|seine Hand]] auf ihren Kopf.»\n\n→ «auf ihren Kopf» ist ein [[pg|Präpositionalgefüge]].' },
          { text: '💡 Merksatz:\n\nErst das Prädikat, dann fragen.\n\nGenitivobjekte sind selten. Wenn du eines zu finden meinst, prüfe nochmals mit «Wessen?».' },
        ],
        check: [
          { frage: 'Welches Objekt ist «ihm» in «Ich gab ihm den Abschiedskuss»?', optionen: ['Dativobjekt', 'Akkusativobjekt', 'Genitivobjekt'], richtig: 0, erklaerung: 'Wem gab ich den Kuss? ihm. Das ist der Dativ.' },
          { frage: 'Mit welcher Frage findest du das Akkusativobjekt?', optionen: ['Wen oder was?', 'Wem?', 'Wer oder was?'], richtig: 0, erklaerung: '«Wer oder was?» führt zum Subjekt, «Wem?» zum Dativobjekt.' },
          { frage: 'Ist «auf ihren Kopf» in «legte seine Hand auf ihren Kopf» ein Objekt?', optionen: ['Nein, es ist ein Präpositionalgefüge', 'Ja, ein Akkusativobjekt', 'Ja, ein Dativobjekt'], richtig: 0, erklaerung: 'Es beginnt mit der Präposition «auf», also ein Präpositionalgefüge.' },
        ],
      },
      {
        id: 'satzglieder-bestimmen',
        emoji: '🧩',
        titel: 'Satzglieder bestimmen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Nominalgruppe: ein Nomen mit allem, was dazugehört (der kleine Wagen).\n• [[pg|Präpositionalgefüge]] {Präpositionalgruppe}: beginnt mit einer Präposition (durch den Flur).\n• Verschiebeprobe: Was gemeinsam an den Satzanfang passt, ist ein Satzglied.' },
          { text: 'So gehst du vor:\n\n1. [[prd|Prädikat]] suchen\n2. [[su|Subjekt]] erfragen\n3. Objekte erfragen\n4. Der Rest mit Präposition ist [[pg|Präpositionalgefüge]]' },
          { text: 'Beispiel:\n\n«Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen.»\n\n[[ao|Meinen Koffer]] – [[su|der Vater]] – [[pg|nach dem Mittagessen]] – [[pg|zum Auto]]' },
          { text: 'Beispiel:\n\n«Unter ihrer Kopfhaut spürte er das warme Pulsieren.»\n\n[[pg|Unter ihrer Kopfhaut]] – [[su|er]] – [[ao|das warme Pulsieren]]' },
          { text: '⚠️ Das [[prd|Prädikat]] schreibst du bei dieser Aufgabe nicht mit auf. Gefragt sind nur die übrigen Satzglieder.\n\n💡 Die Verschiebeprobe zeigt dir die Grenzen: «Zum Auto hatte der Vater …» funktioniert, also gehört es zusammen.' },
        ],
        check: [
          { frage: 'Was ist «durch den Flur» in «Sie fuhren den Wagen durch den Flur»?', optionen: ['Präpositionalgefüge', 'Akkusativobjekt', 'Subjekt'], richtig: 0, erklaerung: 'Es beginnt mit der Präposition «durch».' },
          { frage: 'Was gehört bei dieser Aufgabe NICHT in deine Liste?', optionen: ['Das Prädikat', 'Das Subjekt', 'Das Akkusativobjekt'], richtig: 0, erklaerung: 'Gefragt sind die Satzglieder ohne das Prädikat.' },
          { frage: 'Womit prüfst du, ob mehrere Wörter ein einziges Satzglied sind?', optionen: ['Mit der Verschiebeprobe', 'Mit der Zeitform', 'Mit der Silbenzahl'], richtig: 0, erklaerung: 'Nur ein vollständiges Satzglied lässt sich gemeinsam an den Satzanfang stellen.' },
        ],
      },
      {
        id: 'satzglieder-schema',
        emoji: '🗺️',
        titel: 'Satzgliedschemata zuordnen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Satzgliedschema: die Reihenfolge der Satzglieder, so wie sie im Satz stehen.\n\nBeispiel für ein Schema:\n[[su|Subjekt]] – [[prd|Prädikat]] – [[ao|Akkusativobjekt]]' },
          { text: 'So gehst du vor:\n\n1. Satzglieder bestimmen\n2. Sie in der Reihenfolge des Satzes aufschreiben\n3. Mit den Schemata vergleichen' },
          { text: 'Beispiel:\n\n«Er sagte ihren Namen.»\n\n[[su|Er]] – [[prd|sagte]] – [[ao|ihren Namen]]\n→ Subjekt – Prädikat – Akkusativobjekt' },
          { text: 'Beispiel mit umgekehrter Reihenfolge:\n\n«In der Ferne reagierte ein Hund.»\n\n[[pg|In der Ferne]] – [[prd|reagierte]] – [[su|ein Hund]]\n→ Präpositionalgefüge – Prädikat – Subjekt' },
          { text: 'Beispiel mit vier Gliedern:\n\n«Er spürte eine Welle von Zorn in sich aufsteigen.»\n\n[[su|Er]] – [[prd|spürte … aufsteigen]] – [[ao|eine Welle von Zorn]] – [[pg|in sich]]' },
          { text: '💡 Merksatz:\n\nEntscheidend ist die Reihenfolge in DIESEM Satz.\n\nSteht das Subjekt hinten, steht es auch im Schema hinten.' },
        ],
        check: [
          { frage: 'Welches Schema hat «Das Hotel blieb im Sommer geschlossen»?', optionen: ['Subjekt – Prädikat – Präpositionalgefüge', 'Präpositionalgefüge – Prädikat – Subjekt', 'Subjekt – Prädikat – Akkusativobjekt'], richtig: 0, erklaerung: 'Das Hotel ist das Subjekt, im Sommer ein Präpositionalgefüge.' },
          { frage: 'Welches Schema hat «Das bisschen Knipserei würde ich zustande bringen»?', optionen: ['Akkusativobjekt – Prädikat – Subjekt', 'Subjekt – Prädikat – Akkusativobjekt', 'Präpositionalgefüge – Prädikat – Subjekt'], richtig: 0, erklaerung: 'Vorn steht das Akkusativobjekt, das Subjekt ich steht dahinter.' },
          { frage: 'Worauf kommt es beim Schema an?', optionen: ['Auf die Reihenfolge im Satz', 'Auf die Länge der Satzglieder', 'Auf die Zeitform'], richtig: 0, erklaerung: 'Das Schema bildet genau die Abfolge im Satz ab.' },
        ],
      },
      {
        id: 'satzglieder-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Das erste Wort ist das Subjekt.\n✅ Frag immer «Wer oder was?». In «In der Ferne reagierte ein Hund» steht das Subjekt hinten.' },
          { text: '❌ Jede Ergänzung ist ein Objekt.\n✅ Was mit einer Präposition beginnt, ist ein Präpositionalgefüge: «auf ihren Kopf», «zum Auto».' },
          { text: '❌ Das Prädikat in die Liste der Satzglieder schreiben.\n✅ Bei dieser Aufgabe ist es nicht gefragt.' },
          { text: '❌ Nur ein Teil der Nominalgruppe herausschreiben.\n✅ Alles, was dazugehört: nicht «Wagen», sondern «den kleinen Wagen».' },
          { text: '❌ Bei mehreren Teilsätzen nur ein Subjekt suchen.\n✅ Jeder Teilsatz hat sein eigenes Subjekt.' },
          { text: '❌ «mich» und «mir» verwechseln.\n✅ mich antwortet auf «Wen oder was?» (Akkusativ), mir auf «Wem?» (Dativ).' },
          { text: '❌ Beim Schema die gewohnte Reihenfolge aufschreiben.\n✅ Es zählt, was wirklich im Satz steht, auch wenn das Objekt vorn steht.' },
        ],
        check: [],
      },
      {
        id: 'satzglieder-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 13,
        karten: [
          // 2016, Aufgabe 16
          { text: 'Schreibe das Subjekt heraus und gib den Fall an:\n\n«Aber hier, in Calais, unter einem Publikum aus reisenden Engländern, störte es ihn plötzlich.»', loesung: 'Subjekt: es — Nominativ.' },
          // 2016, Aufgabe 18
          { text: 'Schreibe die Objekte heraus und bestimme sie:\n\n«Sie hatte sich zur Wand hin gerollt und er sah von ihr nur die Masse ihres dunklen Haars, das ihr immer solche Schwierigkeiten bereitete, mit dem sie Kämpfe ausfocht.»', loesung: 'Akkusativobjekte: (nur) die Masse ihres dunklen Haars, solche Schwierigkeiten, Kämpfe.\nDativobjekt: ihr.' },
          // 2017, Aufgabe 7
          { text: 'Welches Satzglied ist «mich»?\n\n«Er zog mich fort.»', loesung: 'Akkusativobjekt' },
          // 2017, Aufgabe 12
          { text: 'Schreibe das Subjekt und die verbalen Teile heraus:\n\n«Viele Jahre schon war jede Verbindung nach aussen abgeschnitten.»', loesung: 'Subjekt: jede Verbindung (nach aussen).\nVerbale Teile: war abgeschnitten.' },
          // 2017, Aufgabe 17
          { text: 'Ordne die Objekte ein:\n\n«Ich stand an der Hafenmauer. Ich sah den Möwen zu. Mein trauriges Gesicht fiel einem Polizisten auf. Dieser hatte in diesem Viertel die Runde zu gehen.»', loesung: 'Akkusativobjekt: die Runde.\nDativobjekte: den Möwen, einem Polizisten.\nGenitivobjekt: keines.' },
          // 2018, Aufgabe 18
          { text: 'Bestimme die Satzglieder:\n\n«Nach der Schule waren wir zu Ludwig nach Hause gefahren.»', loesung: 'Nach der Schule: Präpositionalgefüge.\nwir: Subjekt.\nzu Ludwig nach Hause: Präpositionalgefüge.' },
          // 2019, Aufgabe 5
          { text: 'Schreibe alle Satzglieder heraus und bezeichne sie:\n\n«Auf der Malerei posierte ein steifer Offizier in einer Gala-Uniform. Er hatte heisse, harte, kohlschwarze Augen.»', loesung: 'Auf der Malerei: Präpositionalgefüge.\nein steifer Offizier in einer Gala-Uniform: Subjekt.\nEr: Subjekt.\nheisse, harte, kohlschwarze Augen: Akkusativobjekt.' },
          // 2019, Aufgabe 16
          { text: 'Schreibe alle Akkusativobjekte der Reihe nach heraus:\n\n«Sie senkte die Wimpern, bis sie ihr fast die Wangen streichelten, und hob sie langsam wieder. Diesen Trick durfte ich später noch näher kennenlernen.»', loesung: 'die Wimpern, die Wangen, sie, Diesen Trick' },
          // 2020, Aufgabe 9
          { text: 'Schreibe alle Satzglieder heraus und bestimme sie:\n\n«Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen.»', loesung: 'Meinen Koffer: Akkusativobjekt.\nder Vater: Subjekt.\nnach dem Mittagessen und zum Auto: Präpositionalgefüge.' },
          // 2020, Aufgabe 16
          { text: 'Schreibe alle Akkusativobjekte der Reihe nach heraus:\n\n«Sie steckten die Köpfe zusammen und wenn sie die Köpfe wieder hoben, hatten alle einen lachend geöffneten Mund, als wollten sie Regenwasser trinken. Man hielt die Zigarette in der Linken, die Asche tupfte man ab.»', loesung: 'die Köpfe, die Köpfe, einen lachend geöffneten Mund, Regenwasser, die Zigarette, die Asche' },
          // 2020, Aufgabe 18
          { text: 'Schreibe die Akkusativ- und die Dativobjekte heraus:\n\n«Dann machte er eine Verbeugung: Ich gab ihm den Abschiedskuss.»', loesung: 'Akkusativobjekte: eine Verbeugung, den Abschiedskuss.\nDativobjekt: ihm.' },
          // 2021, Aufgabe 9
          { text: 'Schreibe die Objekte heraus und bestimme sie:\n\n«Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf und begann ungeschickt über ihr Haar zu streicheln.»', loesung: 'einen zögerlichen Schritt: Akkusativobjekt.\nseine Hand: Akkusativobjekt.' },
          // 2021, Aufgabe 10
          { text: 'Schreibe alle Subjekte der Reihe nach heraus:\n\n«Bislang war es umgekehrt gewesen: Er hatte geheult, und die Mutter hatte ihn gestreichelt.»', loesung: 'es, Er, die Mutter' },
          // 2021, Aufgabe 11
          { text: 'Schreibe die Satzglieder heraus und bestimme sie:\n\n«Unter ihrer Kopfhaut spürte er das warme Pulsieren.»', loesung: 'Unter ihrer Kopfhaut: Präpositionalgefüge.\ner: Subjekt.\ndas warme Pulsieren: Akkusativobjekt.' },
          // 2022, Aufgabe 7
          { text: 'Bestimme die beiden Satzglieder:\n\n«Adam sass vorn im Boot und betrachtete ein unstetes blaues Licht am Ufer.»\n\n– im Boot\n– ein unstetes blaues Licht am Ufer', loesung: 'im Boot: Präpositionalgefüge.\nein unstetes blaues Licht am Ufer: Akkusativobjekt.' },
          // 2022, Aufgabe 8
          { text: 'Schreibe alle Subjekte der Reihe nach heraus:\n\n«Nichts passierte. Er schob den Hebel in eine andere Position und versuchte es erneut.»', loesung: 'Nichts, Er' },
          // 2022, Aufgabe 17.1
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Er sagte ihren Namen.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt' },
          // 2022, Aufgabe 17.2
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Einige Vögel strichen über die glatte Oberfläche des Sees.»', loesung: 'Subjekt – Prädikat – Präpositionalgefüge' },
          // 2022, Aufgabe 17.3
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«In der Ferne reagierte ein Hund.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt' },
          // 2022, Aufgabe 17.4
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Er spürte eine Welle von Zorn in sich aufsteigen.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge' },
          // 2023, Aufgabe 10
          { text: 'Schreibe alle Subjekte der Reihe nach heraus:\n\n«Anders konnte er sich nicht erklären, dass der Wald noch immer so weit entfernt war, als die ersten Tropfen vom Himmel fielen und die drückende Hitze sich in einem heftigen Regenschauer entlud.»', loesung: 'er, der Wald, die ersten Tropfen, die drückende Hitze' },
          // 2024, Aufgabe 16
          { text: 'Bestimme die Fälle:\n\n«Man hatte meinem Bruder gegenüber mehreren Mitbewerbern den Vorzug gegeben, als der Mietvertrag im vergangenen Jahr erneut ausgeschrieben worden war.»\n\nMan / meinem Bruder / den Vorzug / der Mietvertrag', loesung: 'Man: Nominativ.\nmeinem Bruder: Dativ.\nden Vorzug: Akkusativ.\nder Mietvertrag: Nominativ.' },
          // 2025, Aufgabe 7
          { text: 'Bestimme die Fälle:\n\n«Auch beim Abendbrot kam kein Gespräch in Gang. Die Stimmung war angespannt, und Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten.»\n\nAbendbrot / Stimmung / Ganze / Ergebnis / Hypnose', loesung: 'Abendbrot: Dativ.\nStimmung: Nominativ.\nGanze: Akkusativ.\nErgebnis: Akkusativ.\nHypnose: Genitiv.' },
          // 2025, Aufgabe 16
          { text: 'Bestimme die Satzglieder:\n\n«Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche.»\n\nsie / den kleinen Wagen / durch den Flur / in die Küche', loesung: 'sie: Subjekt.\nden kleinen Wagen: Akkusativobjekt.\ndurch den Flur und in die Küche: Präpositionalgefüge.' },
          // 2025, Aufgabe 17
          { text: 'Schreibe die Satzglieder heraus und bestimme sie:\n\n«Sie reflektierten das Licht der kleinen Neonröhre.»', loesung: 'Sie: Subjekt.\ndas Licht der kleinen Neonröhre: Akkusativobjekt.' },
        ],
        check: [],
      },
    ],
  },

  // ─── Wortarten ────────────────────────────────────────────────────────────
  'Wortarten': {
    titel: 'Wortarten',
    kacheln: [
      {
        id: 'wortarten-fuenf',
        emoji: '🖐️',
        titel: 'Die fünf Wortarten erkennen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du. Es gibt fünf Wortarten:\n\n[[nn|Nomen]] (Haus)\n[[vb|Verb]] (gehen)\n[[adj|Adjektiv]] (schnell)\n[[pro|Pronomen]] (er, der, mein)\n[[pa|Partikel]] (und, auf, nicht)' },
          { text: 'Der Test: Kannst du das Wort verändern?\n\n[[nn|Nomen]], [[vb|Verb]], [[adj|Adjektiv]] und [[pro|Pronomen]] lassen sich beugen: Haus – Häuser, geht – ging.\n\n[[pa|Partikel]] bleiben immer gleich: und, auf, nicht.' },
          { text: '⚠️ Merk dir diese zwei Zuordnungen:\n\nArtikel (der, die, das, ein) → [[pro|Pronomen]]\nPräpositionen und Konjunktionen (auf, und, weil) → [[pa|Partikel]]' },
          { text: 'Beispiel:\n\n«[[pro|Ihr]] [[nn|Gesicht]] [[vb|war]] [[adj|fahl]] [[pa|und]] [[vb|wirkte]] [[pa|nicht]] [[pa|sehr]] [[adj|gesund]].»' },
          { text: 'Beispiel:\n\n«[[pa|Wie]] [[pro|zwei]] [[nn|Kinder]] [[vb|fuhren]] sie [[pa|dann]] den [[adj|kleinen]] Wagen …»\n\n→ Zahlwörter wie zwei zählen zu den [[pro|Pronomen]].' },
          { text: '💡 Merksatz:\n\nUnveränderlich? → [[pa|Partikel]].\nBegleitet es ein Nomen? → [[pro|Pronomen]].\n\nAlles andere erkennst du an der Bedeutung: Ding, Tätigkeit oder Eigenschaft.' },
        ],
        check: [
          { frage: 'Welche Wortart ist «der» in «der Hafenmauer»?', optionen: ['Pronomen', 'Partikel', 'Nomen'], richtig: 0, erklaerung: 'Artikel gehören bei den fünf Wortarten zu den Pronomen.' },
          { frage: 'Welche Wortart ist «während»?', optionen: ['Partikel', 'Pronomen', 'Verb'], richtig: 0, erklaerung: 'Präpositionen und Konjunktionen sind Partikeln, sie bleiben unverändert.' },
          { frage: 'Welche Wortart ist «einziger» in «nur ein einziger Fahrgast»?', optionen: ['Adjektiv', 'Pronomen', 'Nomen'], richtig: 0, erklaerung: 'Es beschreibt den Fahrgast näher und ist gebeugt: ein Adjektiv.' },
        ],
      },
      {
        id: 'wortarten-zaehlen',
        emoji: '🔢',
        titel: 'Wortarten zählen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Verschiedene Wortarten zählen heisst: Jede Art zählt nur einmal, egal wie oft sie vorkommt.\n• Mehr als fünf geht nie.' },
          { text: 'So gehst du vor:\n\n1. Über jedes Wort die Wortart schreiben\n2. Die verschiedenen Arten zusammenzählen\n\nNicht die Wörter zählen, sondern die Arten.' },
          { text: 'Beispiel:\n\n«[[adj|Stumm]] [[vb|sahen]] [[pro|wir]] hinaus.»\n\n→ nur 3 Wortarten. «hinaus» ist ein [[aen|Verbzusatz]] und gehört zum Verb hinaussehen.' },
          { text: 'Beispiel mit allen fünf:\n\n«[[pa|Neben]] [[pro|einem]] [[adj|grauen]] [[nn|Fluss]] [[vb|hatte]] die Strasse [[pa|kaum]] Platz.»\n\n→ 5 Wortarten.' },
          { text: '💡 Merksatz:\n\nZähl zuletzt ab: Nomen? Verb? Adjektiv? Pronomen? Partikel?\n\nFünf Haken, fünf Fragen. Fehlt eine Art, zählst du sie nicht mit.' },
        ],
        check: [
          { frage: 'Wie viele verschiedene Wortarten hat «Er sagte ihren Namen»?', optionen: ['3', '4', '5'], richtig: 0, erklaerung: 'Pronomen (Er, ihren), Verb (sagte), Nomen (Namen).' },
          { frage: 'Wie viele verschiedene Wortarten hat «Die Hütte war stehen geblieben»?', optionen: ['3', '4', '2'], richtig: 0, erklaerung: 'Pronomen (Die), Nomen (Hütte), Verb (war stehen geblieben).' },
          { frage: 'Was zählst du bei dieser Aufgabe?', optionen: ['Die verschiedenen Wortarten', 'Alle Wörter', 'Die Silben'], richtig: 0, erklaerung: 'Jede Wortart zählt nur einmal.' },
        ],
      },
      {
        id: 'wortarten-partikeln',
        emoji: '🧷',
        titel: 'Partikeln erkennen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• [[pa|Partikel]]: unveränderliches Wort.\n• Präposition: steht vor einer Nominalgruppe (auf dem Tisch).\n• [[konj|Konjunktion]]: verbindet Sätze oder Satzteile (und, weil).' },
          { text: 'Partikeln lassen sich in drei Gruppen ordnen:\n\n1. Präpositionen: durch, nach, mit\n2. [[konj|Konjunktionen]]: und, obwohl, dass, denn\n3. Sonstige, etwa Adverbien: nicht, bald, sehr' },
          { text: 'Beispiel:\n\ndurch, nach → Präpositionen\n[[konj|und]], [[konj|obwohl]], [[konj|dass]], [[konj|denn]] → Konjunktionen\nnicht, bald → Sonstige\n\nAlle zusammen sind [[pa|Partikeln]].' },
          { text: '⚠️ Ein [[aen|Verbzusatz]] ist keine Präposition.\n\n«Ich fing links an, mein Blick wanderte von Pfeiler zu Pfeiler.»\n\n→ an gehört zu anfangen.\n→ von, zu, bis sind Präpositionen.' },
          { text: 'Beispiel zum Herausschreiben:\n\n«Aber früher war er mal von einem Nachbarshund gebissen worden, und selbst die Welpen bellten sofort, wenn sie ihn sahen.»\n\nPartikeln: aber, früher, mal, von, und, selbst, sofort, wenn' },
          { text: '💡 Merksatz:\n\nJede Konjunktion ist auch eine Partikel, aber nicht jede Partikel ist eine Konjunktion.\n\nFrag bei jedem Wort: Verbindet es etwas? Dann ist es eine Konjunktion.' },
        ],
        check: [
          { frage: 'Welche Gruppe gehört NICHT zu den Partikeln?', optionen: ['Pronomen', 'Präpositionen', 'Konjunktionen'], richtig: 0, erklaerung: 'Pronomen sind eine eigene Wortart.' },
          { frage: 'Was ist «an» in «Ich fing links an»?', optionen: ['Verbzusatz', 'Präposition', 'Konjunktion'], richtig: 0, erklaerung: 'Es gehört zum Verb anfangen.' },
          { frage: 'Welche dieser Partikeln ist eine Konjunktion?', optionen: ['während', 'bald', 'sehr'], richtig: 0, erklaerung: '«während» verbindet zwei Teilsätze.' },
        ],
      },
      {
        id: 'wortarten-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Artikel sind eine eigene Wortart.\n✅ Bei den fünf Wortarten gehören der, die, das, ein zu den Pronomen.' },
          { text: '❌ Präpositionen und Konjunktionen sind keine Partikeln.\n✅ Doch: auf, und, weil, obwohl sind alle Partikeln.' },
          { text: '❌ Den Verbzusatz als Präposition zählen.\n✅ In «Stumm sahen wir hinaus» gehört hinaus zum Verb hinaussehen.' },
          { text: '❌ Beim Zählen die Wörter statt die Arten zählen.\n✅ Jede Wortart zählt nur einmal, höchstens fünf.' },
          { text: '❌ Zahlwörter als eigene Wortart führen.\n✅ «zwei Kinder»: zwei gehört zu den Pronomen.' },
          { text: '❌ Ein Partizip für ein Adjektiv halten.\n✅ In «Er hatte das Restaurant geführt» ist geführt ein Verb.' },
          { text: '❌ Begriffe abkürzen oder falsch schreiben.\n✅ Schreib Nomen, Verb, Adjektiv, Pronomen, Partikel immer ganz aus.' },
        ],
        check: [],
      },
      {
        id: 'wortarten-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 14,
        karten: [
          // 2016, Aufgabe 6
          { text: 'Ordne die Partikeln zu (Präposition, Konjunktion, weder noch):\n\n«Er hatte sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke gelegt und den Zug bereits zwei Stationen später wieder verlassen.»', loesung: 'Präposition: auf.\nKonjunktionen: ohne, und, [wie].\nWeder noch: so, [wie], bereits, wieder.' },
          // 2016, Aufgabe 19
          { text: 'Bestimme die Wortart (nur die 5 Wortarten):\n\n«Übrigens hatten sie Glück gehabt, nur ein einziger Fahrgast war während der Nacht zugestiegen.»\n\nÜbrigens / sie / Glück / einziger / war / während', loesung: 'Übrigens: Partikel. sie: Pronomen. Glück: Nomen. einziger: Adjektiv. war: Verb. während: Partikel.' },
          // 2016, Aufgabe 21
          { text: 'Welche Wörter sind konjugierbar, welche deklinierbar?\n\n«Sie brauchte auch diesen Morgen lange Zeit, um sich zu frisieren.»', loesung: 'Konjugierbar: brauchte, frisieren.\nDeklinierbar: Sie, diesen, Morgen, lange, Zeit, sich.' },
          // 2017, Aufgabe 10
          { text: 'Bestimme die Wortart (nur die 5 Wortarten):\n\n«Ehe ich mich versehen hatte, war mein linkes Handgelenk mit einer dünnen Kette umschlossen. Und in diesem Augenblick wusste ich, dass ich wieder verloren war.»\n\nEhe / versehen / Handgelenk / Und / in / diesem / ich / wieder', loesung: 'Ehe, Und, in, wieder: Partikel. versehen: Verb. Handgelenk: Nomen. diesem, ich: Pronomen.' },
          // 2017, Aufgabe 11
          { text: 'Ordne die Partikeln zu (Präposition, Konjunktion, Sonstige):\n\ndurch / nach / und / obwohl / dass / denn / nicht / bald', loesung: 'Präpositionen: durch, nach.\nKonjunktionen: und, obwohl, dass, denn.\nSonstige: nicht, bald.' },
          // 2018, Aufgabe 6
          { text: 'Verbzusatz oder Präposition?\n\n«Ich fing links an, mein Blick wanderte von Pfeiler zu Pfeiler, und ich zählte zügig bis sechs.»\n\nan / von / zu / bis', loesung: 'Verbzusatz: an (von «anfangen»).\nPräpositionen: von, zu, bis.' },
          // 2018, Aufgabe 13
          { text: 'Bestimme die Wortarten:\n\n«Ludwig war so gross wie ich.»\n\nLudwig / war / so / gross / wie / ich', loesung: 'Ludwig: Nomen. war: Verb. so und wie: Partikel. gross: Adjektiv. ich: Pronomen.' },
          // 2018, Aufgabe 14
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Ich weiss nicht, ob das stimmt.»\nB: «Hoch ist die Brücke, sehr hoch.»', loesung: 'A: 3 Wortarten.\nB: 5 Wortarten.' },
          // 2019, Aufgabe 6
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Sie blitzten zwischen dünnen, gestrafften Lippen.»\nB: «Es war eine Frau.»\nC: «Sie sahen nicht so aus, als ob schon je einer drauf gesessen hätte.»', loesung: 'A: 5. B: 3. C: 3.' },
          // 2019, Aufgabe 8
          { text: 'Bestimme die Wortarten:\n\n«Ihr Gesicht war fahl und wirkte nicht sehr gesund.»', loesung: 'Ihr: Pronomen. Gesicht: Nomen. war und wirkte: Verb. fahl und gesund: Adjektiv. und, nicht, sehr: Partikel.' },
          // 2020, Aufgabe 13
          { text: 'Nenne Wortart und nähere Bestimmung:\n\n«Und plötzlich standen wir vor der langen Front des Klosters.»\n\nUnd / plötzlich / wir / vor / der / Klosters', loesung: 'Und: Partikel, Konjunktion. plötzlich: Adjektiv. wir: Pronomen, Personalpronomen. vor: Partikel, Präposition. der: Pronomen, Artikel. Klosters: Nomen.' },
          // 2020, Aufgabe 14
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Stumm sahen wir hinaus.»\nB: «Neben einem grauen Fluss hatte die Strasse kaum Platz.»\nC: «Einige gingen auf den Trottoirs in Gruppen.»', loesung: 'A: 3. B: 5. C: 4.' },
          // 2020, Aufgabe 21
          { text: 'Schreibe die Konjunktionen und die Präpositionen heraus:\n\n«Die Scheibenwischer schlugen Wasser weg, und aus den Hangwäldern zu beiden Seiten des Moorgebiets wuchsen schiefe Nebelsäulen.»', loesung: 'Konjunktion: und.\nPräpositionen: aus, zu.' },
          // 2021, Aufgabe 5
          { text: 'Schreibe alle Konjunktionen und alle Präpositionen heraus:\n\n«Als sich das Gewitter endlich ausgetobt hatte und sich ein erster zaghafter Sonnenstrahl über die ausgetretenen Dielen an sein Bett heranzitterte, rollte sich Franz in einem kleinen Wohligkeitsanfall zusammen, nur um gleich darauf seinen Kopf unter der Decke hervorzustrecken und sich umzuschauen.»', loesung: 'Konjunktionen: als, und, um, und.\nPräpositionen: über, an, in, unter.' },
          // 2021, Aufgabe 7
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Die Hütte war stehen geblieben.»\nB: «Franz kroch aus dem Bett.»\nC: «Ihr Kopf fühlte sich zart an.»', loesung: 'A: 3. B: 4. C: 4.' },
          // 2021, Aufgabe 8
          { text: 'Nenne Wortart und nähere Bestimmung:\n\n«Für einen Moment schien sie sich suchend umzusehen.»\n\nFür / einen / Moment / schien / sie / sich', loesung: 'Für: Partikel, Präposition. einen: Pronomen, unbestimmter Artikel. Moment: Nomen. schien: Verb. sie: Pronomen, Personalpronomen. sich: Pronomen, Reflexivpronomen.' },
          // 2022, Aufgabe 5
          { text: 'Nenne Wortart und nähere Bestimmung:\n\n«Als er sich dem Land näherte, schaltete er den Motor aus, doch es gelang ihm nicht, parallel zum Bootssteg anzulegen.»\n\nAls / sich / dem / Motor / nicht / parallel', loesung: 'Als: Partikel, Konjunktion. sich: Pronomen, Reflexivpronomen. dem: Pronomen, bestimmter Artikel. Motor: Nomen. nicht: Partikel. parallel: Adjektiv.' },
          // 2022, Aufgabe 6
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Wie der Aussenbordmotor im Mondlicht glänzte.»\nB: «Er redete schon eine ganze Weile.»\nC: «Er sagte ihren Namen.»', loesung: 'A: 4. B: 5. C: 3.' },
          // 2022, Aufgabe 9
          { text: 'Schreibe alle Partikeln heraus und sag, welche davon Konjunktionen sind:\n\n«Alle, sogar die anderen Kids der Schule, zeigten eine für den Mittelwesten typische technische Grundkompetenz und konnten einen Ölwechsel selbst machen oder ein Gewehr reinigen, während er nicht einmal mit Schaltgetriebe fahren konnte.»', loesung: 'Partikeln: sogar, für, und, (selbst), oder, während, nicht, einmal, mit.\nKonjunktionen davon: und, oder, während.' },
          // 2023, Aufgabe 5
          { text: 'Bestimme die Wortart:\n\n«Panisch lief er davon, doch auf der weiten Wiese gab es keinen Baum, auf den er sich retten konnte.»\n\nweiten / keinen / auf / den / sich / konnte', loesung: 'weiten: Adjektiv. keinen, den, sich: Pronomen. auf: Partikel. konnte: Verb.' },
          // 2023, Aufgabe 6
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\n1. «Mit dem Regen kam die Kälte.»\n2. «Dann entdeckte er ihn.»\n3. «Dann wurde das Display schwarz.»', loesung: '1: 4. 2: 3. 3: 5.' },
          // 2023, Aufgabe 7
          { text: 'Schreibe alle Partikeln und alle Konjunktionen heraus:\n\n«Aber früher war er mal von einem Nachbarshund gebissen worden, und selbst die Welpen seiner Freunde bellten sofort, wenn sie ihn sahen.»', loesung: 'Partikeln: aber, früher, mal, von, und, selbst, sofort, wenn.\nKonjunktionen: aber, und, wenn.' },
          // 2024, Aufgabe 6
          { text: 'Bestimme die Wortart:\n\n«Er hatte das Restaurant in kürzester Zeit zu seinem früheren Ruf geführt.»\n\nEr / in / zu / früheren / Ruf / geführt', loesung: 'Er: Pronomen. in und zu: Partikel. früheren: Adjektiv. Ruf: Nomen. geführt: Verb.' },
          // 2024, Aufgabe 7
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Zuerst wehrte ich mich.»\nB: «Und dann begann es auch schon mit den Hochzeiten.»', loesung: 'A: 3. B: 4.' },
          // 2024, Aufgabe 8
          { text: 'Schreibe alle Partikeln heraus:\n\n«Ich war fünfzehn, Internatsschüler, und hatte noch kein Mädchen geküsst, als ich bei den Feiern zu fotografieren begann.»', loesung: 'und, noch, als, bei, zu' },
          // 2025, Aufgabe 4
          { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Sein Vater blieb stehen und drehte sich um.»\nB: «Carl wusste nicht mehr, wer den Vorschlag gemacht hatte.»', loesung: 'A: 4. B: 4.' },
          // 2025, Aufgabe 5
          { text: 'Bestimme die Wortart:\n\n«Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche.»\n\nWie / zwei / Kinder / fuhren / dann / kleinen', loesung: 'Wie und dann: Partikel. zwei: Pronomen. Kinder: Nomen. fuhren: Verb. kleinen: Adjektiv.' },
          // 2025, Aufgabe 13
          { text: 'Schreibe alle Partikeln der Reihe nach heraus:\n\n«Zuerst musste gegessen werden, dann wurde abgeräumt und alles mit dem Servierwagen zurück in die Küche gefahren.»', loesung: 'zuerst, dann, und, mit, in' },
        ],
        check: [],
      },
    ],
  },

  // ─── Pronomen ─────────────────────────────────────────────────────────────
  'Pronomen': {
    titel: 'Pronomen',
    kacheln: [
      {
        id: 'pronomen-bestimmen',
        emoji: '👤',
        titel: 'Pronomen bestimmen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• [[pro|Pronomen]]: ein Wort, das für ein Nomen steht oder es begleitet.\n• Unterkategorie: die genaue Sorte, zum Beispiel Personalpronomen.\n• Bezugswort: das Nomen, auf das sich das Pronomen bezieht.' },
          { text: 'Die drei häufigsten Sorten:\n\nPersonalpronomen: ich, du, er, sie, es\nPossessivpronomen: mein, dein, sein, ihr\nReflexivpronomen: sich, mir, mich (zurück auf das Subjekt)' },
          { text: 'Relativpronomen leiten einen Nebensatz ein. Das Verb steht dann am Ende.\n\n«… einem Polizisten, [[pro|der]] in diesem Viertel die Runde zu gehen hatte.»\n\n→ der bezieht sich auf Polizisten.' },
          { text: 'Zwei weitere Sorten:\n\nInterrogativpronomen fragen: wer, was, welcher\nIndefinitpronomen bleiben unbestimmt: einige, ein paar, jemand, alle, etwas' },
          { text: 'Beispiel:\n\n«[[pro|Einige]] Vögel strichen über die Oberfläche [[pro|des]] Sees … Und [[pro|was]], wenn [[pro|sie]] ertrunken war?»\n\nEinige: Indefinitpronomen\ndes: bestimmter Artikel\nsie: Personalpronomen\nwas: Interrogativpronomen' },
          { text: '💡 Merksatz:\n\nFrag immer: Wofür steht das Wort?\n\nFür eine Person → Personalpronomen. Für Besitz → Possessivpronomen. Für etwas Unbestimmtes → Indefinitpronomen.' },
        ],
        check: [
          { frage: 'Was ist «mir» in «Ich hab es mir nicht ausgesucht»?', optionen: ['Reflexivpronomen', 'Possessivpronomen', 'Relativpronomen'], richtig: 0, erklaerung: 'Es weist auf das Subjekt zurück.' },
          { frage: 'Was ist «denen» in «… an den Stricken, mit denen die Dame gezurrt war»?', optionen: ['Relativpronomen', 'Demonstrativpronomen', 'Indefinitpronomen'], richtig: 0, erklaerung: 'Es leitet den Nebensatz ein und bezieht sich auf die Stricke.' },
          { frage: 'Was ist «ein paar» in «mit ein paar unsicheren Schritten»?', optionen: ['Indefinitpronomen', 'Unbestimmter Artikel', 'Personalpronomen'], richtig: 0, erklaerung: 'Es nennt eine unbestimmte Menge.' },
        ],
      },
      {
        id: 'pronomen-artikel',
        emoji: '🔍',
        titel: 'Artikel oder Pronomen?',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Artikel: der, die, das, ein, eine. Er begleitet ein Nomen.\n• Bei den fünf Wortarten gehört der Artikel zu den [[pro|Pronomen]]. Gefragt ist aber oft die Unterkategorie.' },
          { text: 'Der Test bei «der, die, das»:\n\nFolgt direkt ein Nomen (auch mit Adjektiv dazwischen)?\n→ [[aen|Artikel]]\n\nLeitet es einen Nebensatz ein, Verb am Ende?\n→ Relativpronomen' },
          { text: 'Beide in einem Satz:\n\n«Als ich an [[aen|der]] Hafenmauer stand … fiel mein Gesicht einem Polizisten auf, [[pro|der]] in diesem Viertel die Runde zu gehen hatte.»\n\nerstes der: Artikel\nzweites der: Relativpronomen' },
          { text: 'Noch ein Beispiel:\n\n«[[pro|Sein]] Schädel, [[pro|der]] auf [[aen|dem]] verdorrten Hals zu schwer geworden war …»\n\nSein: Possessivpronomen\nder: Relativpronomen\ndem: bestimmter Artikel' },
          { text: '💡 Merksatz:\n\nKomma davor und Verb am Ende → Relativpronomen.\nNomen direkt dahinter → Artikel.\n\nSteht das Wort allein und zeigt es auf etwas, ist es ein Demonstrativpronomen.' },
        ],
        check: [
          { frage: 'Was ist «die» in «Wir hatten die Angst»?', optionen: ['Artikel', 'Relativpronomen', 'Indefinitpronomen'], richtig: 0, erklaerung: 'Direkt danach steht das Nomen Angst.' },
          { frage: 'Was ist «die» in «die Angst, die man hat»?', optionen: ['Das zweite die ist ein Relativpronomen', 'Beide sind Artikel', 'Beide sind Relativpronomen'], richtig: 0, erklaerung: 'Das zweite die leitet den Nebensatz ein, das Verb hat steht am Ende.' },
          { frage: 'Woran erkennst du einen Artikel am schnellsten?', optionen: ['Es folgt ein Nomen', 'Es folgt ein Verb', 'Es steht am Satzende'], richtig: 0, erklaerung: 'Der Artikel begleitet immer ein Nomen.' },
        ],
      },
      {
        id: 'pronomen-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ «der» ist immer ein Artikel.\n✅ Leitet es einen Nebensatz ein, ist es ein Relativpronomen: «der Polizist, der die Runde ging».' },
          { text: '❌ «sich» vergessen.\n✅ Auch sich ist ein Pronomen: ein Reflexivpronomen.' },
          { text: '❌ Possessiv- und Reflexivpronomen verwechseln.\n✅ mein, sein, ihr zeigen Besitz. sich, mir weisen auf das Subjekt zurück.' },
          { text: '❌ «man» nicht als Pronomen zählen.\n✅ man ist ein Indefinitpronomen: unbestimmt, aber ein Pronomen.' },
          { text: '❌ Nur die Hauptkategorie nennen.\n✅ Verlangt ist meist die nähere Bestimmung, also Personalpronomen statt nur Pronomen.' },
          { text: '❌ Zusätzliche Wörter herausschreiben.\n✅ Schreib nur, was sicher ein Pronomen ist. Partikeln wie nicht gehören nicht dazu.' },
        ],
        check: [],
      },
      {
        id: 'pronomen-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 6,
        karten: [
          // 2016, Aufgabe 10 (1-3)
          { text: 'Bestimme die Pronomen näher:\n\n1. «Es hat etwas von einer Skihütte, findest du nicht?» → «Es»\n2. «… um nachzusehen, was in London los war.» → «was»\n3. «Ich möchte in einem Land wohnen, das ganz flach ist.» → «das»', loesung: '1: Personalpronomen. 2: Interrogativpronomen. 3: Relativpronomen.' },
          // 2016, Aufgabe 10 (4-6)
          { text: 'Bestimme die Pronomen näher:\n\n4. «Das sind Häuser!», rief sie. → «Das»\n5. «Daddy, ist das unser Schiff?» → «das»\n6. «Daddy, ist das unser Schiff?» → «unser»', loesung: '4: Demonstrativpronomen. 5: bestimmter Artikel. 6: Demonstrativpronomen.' },
          // 2016, Aufgabe 17
          { text: 'Schreibe alle Pronomen heraus:\n\n«Sie war begeistert von den handtuchschmalen Häusern, die am Zugfenster vorbeirauschten.»', loesung: 'Sie, die' },
          // 2017, Aufgabe 14
          { text: 'Ordne die Pronomen ein:\n\n«Als ich an der Hafenmauer stand, um den Möwen zuzusehen, fiel mein trauriges Gesicht einem Polizisten auf, der in diesem Viertel die Runde zu gehen hatte.»', loesung: 'Personalpronomen: ich.\nDemonstrativpronomen: diesem.\nArtikel: der (Hafenmauer), den, einem, die.\nPossessivpronomen: mein.\nRelativpronomen: der (im Relativsatz).' },
          // 2018, Aufgabe 9
          { text: 'Ordne die Pronomen zu:\n\n«Wir hatten die Angst, die man hat, wenn andere etwas Verbotenes tun, aber die Strafe alle treffen wird.»\n\nWir / die / man / andere / etwas / alle / die', loesung: 'Personalpronomen: Wir, man.\nArtikel: die, die.\nIndefinitpronomen: andere, etwas, alle.\nRelativpronomen: die.' },
          // 2019, Aufgabe 20 (1)
          { text: 'Bestimme das Pronomen näher:\n\n«Der Ritter fummelte an den Stricken herum, mit denen die Dame an den Baum gezurrt war.» → «denen»', loesung: 'Relativpronomen' },
          // 2019, Aufgabe 20 (2-3)
          { text: 'Bestimme die Pronomen näher:\n\n«Ihre Augen waren schiefergrau und fast völlig ausdruckslos.» → «Ihre»\n«Ich hab es mir nicht ausgesucht.» → «mir»', loesung: 'Ihre: Possessivpronomen.\nmir: Reflexivpronomen.' },
          // 2020, Aufgabe 20
          { text: 'Bestimme die Pronomen näher:\n\n«Sein Schädel, der auf dem verdorrten Hals zu schwer geworden war, nickte vor sich hin …»\n\nSein / der / dem', loesung: 'Sein: Possessivpronomen.\nder: Relativpronomen.\ndem: bestimmter Artikel.' },
          // 2021, Aufgabe 6
          { text: 'Bestimme die Pronomen näher:\n\n«Statt einer Antwort stiess sich die Mutter vom Türrahmen ab, kam mit ein paar unsicheren Schritten auf ihn zu.»\n\neiner / die / ein paar / ihn', loesung: 'einer: unbestimmter Artikel.\ndie: bestimmter Artikel.\nein paar: Indefinitpronomen.\nihn: Personalpronomen.' },
          // 2022, Aufgabe 16
          { text: 'Bestimme die Pronomen näher:\n\n«Einige Vögel strichen über die glatte Oberfläche des Sees; nein, es waren Fledermäuse. Wann war sie aus dem Boot gesprungen? Und was, wenn sie ertrunken war?»\n\nEinige / des / sie / es / was', loesung: 'Einige: Indefinitpronomen.\ndes: bestimmter Artikel.\nsie und es: Personalpronomen.\nwas: Interrogativpronomen.' },
          // 2025, Aufgabe 15
          { text: 'Schreibe alle Pronomen der Reihe nach heraus:\n\n«Da ist jemand, der die Arbeit sieht», war das höchste Lob, das sein Vater zu vergeben hatte.', loesung: 'jemand, der, die, das, das, sein' },
        ],
        check: [],
      },
    ],
  },

  // ─── Nomen & Adjektive ────────────────────────────────────────────────────
  'Nomen & Adjektive': {
    titel: 'Nomen & Adjektive',
    kacheln: [
      {
        id: 'nomenadj-faelle',
        emoji: '🎲',
        titel: 'Fälle bestimmen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Fall: die Form, in der ein Nomen steht.\n• Es gibt vier: [[nom|Nominativ]], [[gen|Genitiv]], [[dat|Dativ]], [[akk|Akkusativ]].' },
          { text: 'Die vier Fragen:\n\n[[nom|Nominativ]] → Wer oder was?\n[[gen|Genitiv]] → Wessen?\n[[dat|Dativ]] → Wem?\n[[akk|Akkusativ]] → Wen oder was?' },
          { text: 'Beispiel:\n\n«[[nom|Man]] hatte [[dat|meinem Bruder]] … [[akk|den Vorzug]] gegeben, als [[nom|der Mietvertrag]] erneut ausgeschrieben worden war.»' },
          { text: 'Beispiel mit Genitiv:\n\n«Carl begann, [[akk|das Ganze]] für [[akk|das Ergebnis]] [[gen|einer unguten Hypnose]] zu halten.»\n\n→ Wessen Ergebnis? Der Hypnose. Das ist der Genitiv.' },
          { text: '💡 Die Präposition verrät oft den Fall:\n\nmit, von, bei, zu, aus → [[dat|Dativ]]\nfür, durch, ohne, gegen → [[akk|Akkusativ]]\n\n«beim Abendbrot» → Dativ.' },
          { text: '💡 Merksatz:\n\nFrag mit dem Verb: Wer oder was? Wen oder was? Wem? Wessen?\n\nDie Frage, die eine sinnvolle Antwort gibt, nennt dir den Fall.' },
        ],
        check: [
          { frage: 'In welchem Fall steht «der Stimmung» in «wegen der Stimmung»?', optionen: ['Genitiv', 'Dativ', 'Nominativ'], richtig: 0, erklaerung: 'wegen verlangt den Genitiv: Wessen wegen?' },
          { frage: 'In welchem Fall steht «meinem Bruder»?', optionen: ['Dativ', 'Akkusativ', 'Genitiv'], richtig: 0, erklaerung: 'Wem hatte man den Vorzug gegeben? meinem Bruder.' },
          { frage: 'Welche Frage führt zum Akkusativ?', optionen: ['Wen oder was?', 'Wem?', 'Wessen?'], richtig: 0, erklaerung: '«Wen oder was?» fragt nach dem Akkusativ.' },
        ],
      },
      {
        id: 'nomenadj-plural',
        emoji: '📚',
        titel: 'Plural bilden',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Singular: Einzahl (das Hemd).\n• Plural: Mehrzahl (die Hemden).\n• Umlaut: a wird ä, o wird ö, u wird ü.\n• Im Plural heisst der Artikel immer die.' },
          { text: 'Die häufigsten Endungen:\n\n-e: Korridor → die Korridore\n-en: Hemd → die Hemden\n-er: Land → die Länder\nkeine Endung: Nachfolger → die Nachfolger' },
          { text: 'Mit [[aen|Umlaut]]:\n\nFluss → die Fl[[aen|ü]]sse\nBraut → die Br[[aen|äu]]te\nAnkunft → die Ank[[aen|ü]]nfte\nSchloss → die Schl[[aen|ö]]sser' },
          { text: '⚠️ Verkleinerungen auf -chen und -lein bleiben gleich:\n\nWägelchen → die Wägelchen\n\nNur der Artikel ändert sich: das Wägelchen, die Wägelchen.' },
          { text: '💡 Nomen auf -nis verdoppeln das s:\n\nErgebnis → die Ergebnisse\nBegräbnis → die Begräbnisse\n\nMerksatz: Sprich den Plural laut, dann hörst du Umlaut und Endung.' },
        ],
        check: [
          { frage: 'Wie lautet der Plural von «Schloss»?', optionen: ['die Schlösser', 'die Schlosse', 'die Schlössern'], richtig: 0, erklaerung: 'Umlaut und Endung -er.' },
          { frage: 'Wie lautet der Plural von «Wägelchen»?', optionen: ['die Wägelchen', 'die Wägelchens', 'die Wägelchene'], richtig: 0, erklaerung: 'Verkleinerungen auf -chen bleiben im Plural gleich.' },
          { frage: 'Wie lautet der Plural von «Ergebnis»?', optionen: ['die Ergebnisse', 'die Ergebnise', 'die Ergebnissen'], richtig: 0, erklaerung: 'Nomen auf -nis bekommen -nisse.' },
        ],
      },
      {
        id: 'nomenadj-steigern',
        emoji: '📈',
        titel: 'Steigern und nominalisieren',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Grundform (Positiv): schnell\n• Komparativ: schneller\n• Superlativ: am schnellsten\n• Nominalisierung: aus einem Adjektiv oder Verb wird ein Nomen.' },
          { text: 'Regelmässig steigern:\n\nüblich → üblicher → am üblichsten\nbezaubernd → bezaubernder → am bezauberndsten\n\n→ Endung -er, dann -sten.' },
          { text: '⚠️ Diese musst du auswendig können:\n\ngut → besser → am besten\ngern → lieber → am liebsten\nviel → mehr → am meisten' },
          { text: 'Vergleichsformen erkennen:\n\n«Je [[aen|näher]] wir an das Dorf herankamen, desto [[aen|grösser]] wurden die Häuser …»\n\n→ näher und grösser stehen im Komparativ.' },
          { text: 'Nominalisieren: Adjektiv → [[nn|Nomen]] mit Artikel.\n\nsauber → die Sauberkeit, das Saubere\ndunkel → die Dunkelheit, das Dunkle' },
          { text: 'Auch Verben werden zu Nomen:\n\ngehen → das Gehen\nlindern → das Lindern, die Linderung\n\n💡 Merksatz: Gross schreiben und immer den Artikel im [[nom|Nominativ]] dazusetzen.' },
        ],
        check: [
          { frage: 'Wie heisst der Komparativ von «gern»?', optionen: ['lieber', 'gerner', 'mehr gern'], richtig: 0, erklaerung: 'gern – lieber – am liebsten ist unregelmässig.' },
          { frage: 'Was ist die Grundform zu «bester»?', optionen: ['gut', 'bester', 'besser'], richtig: 0, erklaerung: 'gut – besser – am besten.' },
          { frage: 'Welche Nominalisierung von «glatt» ist richtig?', optionen: ['die Glätte', 'der Glätte', 'glattheit'], richtig: 0, erklaerung: 'Nomen werden grossgeschrieben, der Artikel steht im Nominativ.' },
        ],
      },
      {
        id: 'nomenadj-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Den Fall ohne Frage raten.\n✅ Immer mit dem Verb fragen: Wer oder was? Wen oder was? Wem? Wessen?' },
          { text: '❌ Nach «beim» den Akkusativ setzen.\n✅ bei, mit, von, zu verlangen den Dativ: beim Abendbrot.' },
          { text: '❌ Verkleinerungen im Plural verändern.\n✅ das Wägelchen → die Wägelchen, ohne Endung.' },
          { text: '❌ «die Ergebnise» mit einem s.\n✅ Nomen auf -nis verdoppeln es: die Ergebnisse.' },
          { text: '❌ Mit «mehr» steigern.\n✅ Im Deutschen heisst es üblicher, nicht mehr üblich.' },
          { text: '❌ Beim Nominalisieren den Artikel vergessen.\n✅ Verlangt ist das Nomen mit Artikel: die Sauberkeit, das Gehen.' },
          { text: '❌ Die Steigerungsform für die Grundform halten.\n✅ «bester» ist schon ein Superlativ, die Grundform ist gut.' },
        ],
        check: [],
      },
      {
        id: 'nomenadj-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 4,
        karten: [
          // 2016, Aufgabe 20
          { text: 'Ordne die Nomen ein (Lebewesen, Sachen, Gedachtes):\n\n«Er hätte mit ihr fliegen sollen; mit dem Flugzeug gelangte man binnen einer Stunde von Zürich nach London, es hätte für Thérèse ausgesehen wie nichts.»', loesung: 'Lebewesen: Thérèse.\nSachen: Flugzeug, Zürich, London.\nGedachtes: Stunde.' },
          // 2020, Aufgabe 8
          { text: 'Welche Adjektive stehen in einer Vergleichsform?\n\n«Je näher wir auf einer langen, geraden Betonpiste an das Dorf herankamen, desto grösser wurden die Häuser …»', loesung: 'näher und grösser' },
          // 2024, Aufgabe 4 (1. Hälfte)
          { text: 'Setze in den Plural:\n\nBraut / Kegelbahn / Nachfolger', loesung: 'die Bräute, die Kegelbahnen, die Nachfolger (gleiche Form)' },
          // 2024, Aufgabe 4 (2. Hälfte)
          { text: 'Setze in den Plural:\n\nBegräbnis / Schloss / Ruf', loesung: 'die Begräbnisse, die Schlösser, die Rufe' },
          // 2025, Aufgabe 6 (1. Hälfte)
          { text: 'Setze in den Plural:\n\nFluss / Hemd / Land / Ergebnis', loesung: 'die Flüsse, die Hemden, die Länder, die Ergebnisse' },
          // 2025, Aufgabe 6 (2. Hälfte)
          { text: 'Setze in den Plural:\n\nWägelchen / Korridor / Ankunft / Flucht', loesung: 'die Wägelchen (gleiche Form), die Korridore, die Ankünfte, die Fluchten' },
          // 2025, Aufgabe 14 (1. Hälfte)
          { text: 'Nominalisiere und setze den bestimmten Artikel dazu:\n\nsauber / gewissenhaft', loesung: 'die Sauberkeit oder das Saubere; die Gewissenhaftigkeit oder das Gewissenhafte' },
          // 2025, Aufgabe 14 (2. Hälfte)
          { text: 'Nominalisiere und setze den bestimmten Artikel dazu:\n\nglatt / dunkel', loesung: 'die Glätte, die Glattheit oder das Glatte; die Dunkelheit, das Dunkle oder das Dunkel' },
        ],
        check: [],
      },
    ],
  },

  // ─── Präpositionen ────────────────────────────────────────────────────────
  'Präpositionen': {
    titel: 'Präpositionen',
    kacheln: [
      {
        id: 'praepositionen-gefuege',
        emoji: '🔗',
        titel: 'Präpositionalgefüge und Verbzusatz',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Präposition: ein kleines Wort wie auf, in, mit, von, über.\n• [[pg|Präpositionalgefüge]] {Präpositionalgruppe}: die Präposition mit allem, was dazugehört.\n• [[aen|Verbzusatz]]: ein Wortteil, der zum Verb gehört (an in «er fängt an»).' },
          { text: 'Eine Präposition steht nie allein:\n\n[[pg|auf der weiten Wiese]]\n[[pg|über eine Wurzel]]\n\n→ Das ganze Gefüge ist ein Satzglied, nicht nur das erste Wort.' },
          { text: 'Beispiel zum Herausschreiben:\n\n«Henry sah [[pg|aus den Augenwinkeln]], wie der Schäferhund losrannte. Panisch lief er davon, doch [[pg|auf der weiten Wiese]] gab es keinen Baum.»' },
          { text: '💡 Verschmelzungen sind Präposition + Artikel:\n\nim = in dem\nzum = zu dem\nam = an dem\nbeim = bei dem\nvom = von dem\n\n«[[pg|im Gras]]» zählt also als Präpositionalgefüge.' },
          { text: '⚠️ Verbzusatz oder Präposition?\n\n«Ich fing links [[aen|an]], mein Blick wanderte von Pfeiler zu Pfeiler.»\n\nan → Verbzusatz, denn der Infinitiv heisst anfangen.\nvon, zu → Präpositionen.' },
          { text: '💡 Merksatz:\n\nLies die Aufgabe genau: Gefragt sind entweder nur die Präpositionen (auf, in, mit) oder die ganzen Gefüge (auf der weiten Wiese).\n\nTest für den Verbzusatz: Bilde den Infinitiv.' },
        ],
        check: [
          { frage: 'Was ist «im Gras» in «Er schlug hart im Gras auf»?', optionen: ['Ein Präpositionalgefüge', 'Ein Akkusativobjekt', 'Ein Verbzusatz'], richtig: 0, erklaerung: 'im ist die Verschmelzung von in dem, also eine Präposition mit Nominalgruppe.' },
          { frage: 'Was ist «auf» in «Er schlug hart im Gras auf»?', optionen: ['Verbzusatz von aufschlagen', 'Präposition', 'Konjunktion'], richtig: 0, erklaerung: 'Der Infinitiv heisst aufschlagen, also gehört auf zum Verb.' },
          { frage: 'Wie schreibst du das Gefüge heraus?', optionen: ['Mit allem, was dazugehört: von unserem Vater', 'Nur die Präposition: von', 'Nur das Nomen: Vater'], richtig: 0, erklaerung: 'Ein Präpositionalgefüge umfasst die ganze Gruppe.' },
        ],
      },
      {
        id: 'praepositionen-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Nur die Präposition herausschreiben, obwohl das Gefüge gefragt ist.\n✅ «aus den umliegenden Dörfern» gehört ganz dazu.' },
          { text: '❌ Verschmelzungen übersehen.\n✅ im, zum, am, beim, vom enthalten eine Präposition und zählen mit.' },
          { text: '❌ Den Verbzusatz als Präposition zählen.\n✅ In «er stellt den Koffer ab» gehört ab zum Verb abstellen.' },
          { text: '❌ Die Reihenfolge durcheinanderbringen.\n✅ Schreib die Gefüge so heraus, wie sie im Satz vorkommen.' },
          { text: '❌ Ein Präpositionalgefüge für ein Objekt halten.\n✅ Objekte stehen ohne Präposition: «seine Hand» ist ein Objekt, «auf ihren Kopf» nicht.' },
          { text: '❌ Den Fall vergessen, wenn er verlangt ist.\n✅ Nach aus, mit, bei, von, zu steht der Dativ: «aus Sparsamkeit», «mit dem gleichen Zug».' },
        ],
        check: [],
      },
      {
        id: 'praepositionen-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 4,
        karten: [
          // 2016, Aufgabe 5
          { text: 'Schreibe die Präpositionalgefüge heraus und gib den Fall an:\n\n«Aus Sparsamkeit, aus erzieherischen Gründen und weil Thérèse in den Weihnachtsferien mit dem gleichen Zug und in der gleichen Klasse reisen sollte, hatte Dr. Wenger kein Schlafwagenabteil erster Klasse bestellt.»', loesung: 'aus Sparsamkeit, aus erzieherischen Gründen, in den Weihnachtsferien, mit dem gleichen Zug, in der gleichen Klasse — alle im Dativ.' },
          // 2017, Aufgabe 16
          { text: 'Schreibe alle Präpositionalgefüge heraus:\n\n«Das Gesetz wurde vorgestern durch alle Lautsprecher und in allen Zeitungen verkündet. Diesen wurde es durch Flugblätter bekanntgegeben. Über allen Strassen des Reiches wurden diese abgeworfen.»', loesung: 'durch alle Lautsprecher, in allen Zeitungen, durch Flugblätter, über allen Strassen des Reiches' },
          // 2019, Aufgabe 17
          { text: 'Schreibe alle Präpositionen heraus:\n\n«Über den Türflügeln, die eine Herde indischer Elefanten durchgelassen hätten, war auf einem breiten bunten Glasfenster ein Ritter in dunklem Harnisch bei der Errettung einer Dame zu sehen.»', loesung: 'über, auf, in, bei' },
          // 2019, Aufgabe 18
          { text: 'Schreibe die Präpositionalgefüge heraus:\n\n«Sie kam auf mich zu und lächelte mit dem Mund und hatte kleine scharfe Raubtierzähne.»', loesung: 'auf mich, mit dem Mund' },
          // 2022, Aufgabe 15
          { text: 'Schreibe alle Präpositionalgefüge der Reihe nach heraus:\n\n«Sie trieben im Boot von Ambers Stiefvater mitten auf einem ansonsten leeren künstlichen See, der von grossen Reihenhaussiedlungen umgeben war.»', loesung: 'im Boot von Ambers Stiefvater; (mitten) auf einem ansonsten leeren künstlichen See; von grossen Reihenhaussiedlungen' },
          // 2023, Aufgabe 15
          { text: 'Schreibe alle Präpositionalgefüge der Reihe nach heraus:\n\n«Henry drehte sich um und sah aus den Augenwinkeln, wie der Schäferhund losrannte. Panisch lief er davon, doch auf der weiten Wiese gab es keinen Baum. Er stolperte über eine Wurzel und schlug hart im Gras auf.»', loesung: 'aus den Augenwinkeln, auf der weiten Wiese, über eine Wurzel, im Gras' },
          // 2024, Aufgabe 15
          { text: 'Schreibe alle Präpositionalgefüge der Reihe nach heraus:\n\n«Kaum jemand aus den umliegenden Dörfern schlug sein Angebot aus, aber die Leute kamen auch aus der Stadt, entschieden sich für eine der drei Möglichkeiten und liessen sich von unserem Vater beraten.»', loesung: 'aus den umliegenden Dörfern, aus der Stadt, für eine der drei Möglichkeiten, von unserem Vater' },
          // 2025, Aufgabe 12
          { text: 'Schreibe alle Präpositionen der Reihe nach heraus:\n\n«Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten, in die er nicht noch tiefer hineingezogen werden wollte. Dann wurde abgeräumt und alles mit dem Servierwagen zurück in die Küche gefahren.»', loesung: 'für, in, mit, in' },
        ],
        check: [],
      },
    ],
  },

  // ─── Satzbau & Konjunktionen ──────────────────────────────────────────────
  'Satzbau & Konjunktionen': {
    titel: 'Satzbau & Konjunktionen',
    kacheln: [
      {
        id: 'satzbau-hs-ns',
        emoji: '🏠',
        titel: 'Hauptsatz und Nebensatz erkennen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Teilsatz: ein Stück Satz mit eigener Personalform.\n• [[hs|Hauptsatz]]: kann allein stehen.\n• [[ns|Nebensatz]]: kann nicht allein stehen.\n• Personalform: das gebeugte Verb.' },
          { text: 'Der Test steht beim Verb:\n\n[[hs|Hauptsatz]] → Personalform an zweiter Stelle\n[[ns|Nebensatz]] → Personalform ganz am Ende, meist mit Einleitewort' },
          { text: 'Beispiel:\n\n«[[ns|Als ich an der Hafenmauer stand]], [[hs|fiel mein trauriges Gesicht einem Polizisten auf]], [[ns|der in diesem Viertel die Runde zu gehen hatte]].»' },
          { text: 'Nebensätze herausschreiben:\n\n«Ängstlich wie eine Schwalbe, [[ns|die das Unwetter ahnt]], schwebte sie nahe der Oberfläche … [[ns|um ihre Bahn mit der der Genossen zu vereinen]].»' },
          { text: 'Hauptsätze zählen:\n\n«Jetzt erst [[hs|spürte ich]] …, jetzt erst [[hs|kam mein Hunger hoch]] …, jetzt erst [[hs|begriff ich]] …»\n\n→ drei Hauptsätze.' },
          { text: '💡 Merksatz:\n\nSo viele Personalformen, so viele Teilsätze.\n\nSteht das Verb am Ende, ist es ein [[ns|Nebensatz]].' },
        ],
        check: [
          { frage: 'Was ist «weil nur er der Klinke einen solchen Hieb versetzte»?', optionen: ['Ein Nebensatz', 'Ein Hauptsatz', 'Kein Teilsatz'], richtig: 0, erklaerung: 'Einleitewort weil, Personalform versetzte am Ende.' },
          { frage: 'Wie erkennst du einen Hauptsatz?', optionen: ['Die Personalform steht an zweiter Stelle', 'Er ist der längste Teil', 'Er steht immer vorn'], richtig: 0, erklaerung: 'Im Hauptsatz steht das gebeugte Verb an zweiter Stelle.' },
          { frage: 'Wie viele Teilsätze hat ein Satz mit vier Personalformen?', optionen: ['Vier', 'Zwei', 'Das lässt sich nicht sagen'], richtig: 0, erklaerung: 'Jede Personalform gehört zu einem eigenen Teilsatz.' },
        ],
      },
      {
        id: 'satzbau-konjunktionen',
        emoji: '🔌',
        titel: 'Konjunktionen erkennen',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• [[konj|Konjunktion]]: ein Wort, das Sätze oder Satzteile verbindet.\n• beiordnend: verbindet Gleichwertiges (und, oder, aber, denn).\n• unterordnend: leitet einen [[ns|Nebensatz]] ein (dass, weil, als, wenn, obwohl).' },
          { text: 'Die Merkformel der Prüfung:\n\nUnterordnende [[konj|Konjunktionen]] leiten einen [[ns|Nebensatz]] ein.\n\n→ Und im Nebensatz steht die Personalform am Ende.' },
          { text: 'Beispiel:\n\n«Die Klinke sprang nach unten, [[konj|und]] wir wussten sofort, [[konj|dass]] der Rektor kommt, [[konj|weil]] nur er der Klinke einen Hieb versetzte.»\n\nund: beiordnend\ndass, weil: unterordnend' },
          { text: 'Alle Konjunktionen herausschreiben:\n\n«Ich stand da [[konj|und]] überlegte, [[konj|dass]] ich, [[konj|wenn]] ich in dem Haus wohnte, früher [[konj|oder]] später hinaufklettern [[konj|und]] ihm zur Hand gehen müsste, [[konj|denn]] …»' },
          { text: '⚠️ Nicht jedes kleine Wort ist eine Konjunktion.\n\nan, nur, unten verbinden nichts: Sie sind Partikeln, aber keine [[konj|Konjunktionen]].\n\n💡 Test: Lässt sich das Wort weglassen, ohne dass zwei Teile auseinanderfallen? Dann ist es keine.' },
        ],
        check: [
          { frage: 'Welche Konjunktion ist beiordnend?', optionen: ['denn', 'weil', 'obwohl'], richtig: 0, erklaerung: 'denn verbindet zwei Hauptsätze, weil und obwohl leiten Nebensätze ein.' },
          { frage: 'Was leiten unterordnende Konjunktionen ein?', optionen: ['Einen Nebensatz', 'Einen Hauptsatz', 'Ein Satzglied'], richtig: 0, erklaerung: 'Genau das ist ihre Aufgabe.' },
          { frage: 'Welches Wort ist KEINE Konjunktion?', optionen: ['nur', 'aber', 'dass'], richtig: 0, erklaerung: 'nur verbindet nichts, es ist eine Partikel.' },
        ],
      },
      {
        id: 'satzbau-muster',
        emoji: '🧱',
        titel: 'Satzbaumuster',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• Satzbaumuster: die Abfolge der Teilsätze, zum Beispiel [[hs|HS]]-[[ns|NS]]-[[hs|HS]].\n• HS steht für [[hs|Hauptsatz]], NS für [[ns|Nebensatz]].' },
          { text: 'So gehst du vor:\n\n1. Personalformen suchen\n2. An den Kommas und Konjunktionen trennen\n3. Jeden Teilsatz bestimmen\n4. In der Reihenfolge aufschreiben' },
          { text: 'Beispiel:\n\n«[[hs|Sie hatte sich zur Wand hin gerollt]] und [[hs|er sah von ihr nur die Masse ihres Haars]], [[ns|das ihr Schwierigkeiten bereitete]], [[ns|mit dem sie Kämpfe ausfocht]].»\n\n→ HS-HS-NS-NS' },
          { text: 'Beispiel mit fünf Teilsätzen:\n\n«[[hs|Die Klinke sprang nach unten]] und [[hs|wir wussten sofort]], [[ns|dass der Rektor kommt]], [[ns|weil nur er der Klinke einen Hieb versetzte]], [[ns|dass sie nach unten sprang]].»\n\n→ HS-HS-NS-NS-NS' },
          { text: 'Beispiel mit Nebensatz in der Mitte:\n\n«[[hs|Sie steckten die Köpfe zusammen]] und [[ns|wenn sie die Köpfe wieder hoben]], [[hs|hatten alle einen lachend geöffneten Mund]].»\n\n💡 Merksatz: Erst zählen, dann bestimmen, dann aufschreiben.' },
        ],
        check: [
          { frage: 'Welches Muster hat «Ich sah erst jetzt, dass Ludwig tropfte»?', optionen: ['HS-NS', 'HS-HS', 'NS-HS'], richtig: 0, erklaerung: 'Der zweite Teilsatz beginnt mit dass und hat das Verb am Ende.' },
          { frage: 'Woran trennst du die Teilsätze?', optionen: ['An Kommas und Konjunktionen', 'An den Nomen', 'Nach jeweils fünf Wörtern'], richtig: 0, erklaerung: 'Dort beginnt meist ein neuer Teilsatz.' },
          { frage: 'Wie viele Teilsätze hat das Muster HS-HS-NS-NS-NS?', optionen: ['Fünf', 'Drei', 'Zwei'], richtig: 0, erklaerung: 'Jedes Kürzel steht für einen Teilsatz.' },
        ],
      },
      {
        id: 'satzbau-verbinden',
        emoji: '🪡',
        titel: 'Sätze mit Konjunktionen verbinden',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du. Jede Konjunktion hat eine Bedeutung:\n\nweil → Grund\nobwohl → Gegensatz\nwährend → Gleichzeitigkeit\nals → einmaliger Zeitpunkt' },
          { text: 'So verbindest du zwei Sätze:\n\n1. Passende [[konj|Konjunktion]] wählen\n2. Komma setzen\n3. Im [[ns|Nebensatz]] das Verb ans Ende stellen' },
          { text: 'Beispiel:\n\n«Henry drehte sich um. Der Schäferhund rannte los.»\n\n→ Henry drehte sich um, [[konj|als]] der Schäferhund [[aen|losrannte]].' },
          { text: 'Beispiel mit Grund:\n\n«Er lief panisch davon. Auf der Wiese gab es keinen Baum.»\n\n→ Er lief panisch davon, [[konj|weil]] es auf der Wiese keinen Baum [[aen|gab]].' },
          { text: '⚠️ Achte auf zwei Dinge:\n\n1. Der Inhalt muss stimmen: weil nennt wirklich einen Grund.\n2. Jede Konjunktion darfst du nur einmal verwenden, wenn die Aufgabe das sagt.' },
          { text: '💡 Merksatz:\n\nFrag dich zuerst: Grund, Gegensatz oder Zeit?\n\nDanach kontrollierst du nur noch: Komma gesetzt, Verb am Ende.' },
        ],
        check: [
          { frage: 'Welche Konjunktion zeigt einen Gegensatz?', optionen: ['obwohl', 'weil', 'während'], richtig: 0, erklaerung: 'obwohl verbindet zwei Dinge, die nicht zusammenzupassen scheinen.' },
          { frage: 'Wie lässt sich «Falls das Boot hinaustrieb» ersetzen?', optionen: ['Wenn', 'Weil', 'Obwohl'], richtig: 0, erklaerung: 'falls nennt eine Bedingung, ebenso wenn und sofern.' },
          { frage: 'Wo steht das Verb im Nebensatz?', optionen: ['Am Ende', 'An zweiter Stelle', 'Ganz vorn'], richtig: 0, erklaerung: 'Im Nebensatz rutscht die Personalform ans Ende.' },
        ],
      },
      {
        id: 'satzbau-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Jeden Teil zwischen zwei Kommas für einen Nebensatz halten.\n✅ Entscheidend ist die Personalform: steht sie am Ende, ist es ein Nebensatz.' },
          { text: '❌ Den Hauptsatz mit dem ganzen Satz verwechseln.\n✅ Gefragt ist nur der Teil, der allein stehen kann: «fiel mein trauriges Gesicht einem Polizisten auf».' },
          { text: '❌ «denn» für unterordnend halten.\n✅ denn verbindet zwei Hauptsätze, das Verb bleibt an zweiter Stelle.' },
          { text: '❌ Partikeln wie nur oder unten als Konjunktion aufschreiben.\n✅ Eine Konjunktion verbindet immer zwei Teile.' },
          { text: '❌ Beim Verbinden das Komma oder das Verb am Ende vergessen.\n✅ «… , weil er dann über sein Leben nachdenkt.»' },
          { text: '❌ Eine Konjunktion zweimal verwenden, obwohl jede nur einmal erlaubt ist.\n✅ Zuerst alle Paare anschauen, dann verteilen.' },
          { text: '❌ Beim Satzbaumuster die Teilsätze falsch zählen.\n✅ Zähl die Personalformen: So viele Teilsätze hat der Satz.' },
        ],
        check: [],
      },
      {
        id: 'satzbau-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 14,
        karten: [
          // 2016, Aufgabe 13
          { text: 'Welches Satzbaumuster stimmt? (HS = Hauptsatz, NS = Nebensatz)\n\n«Sie hatte sich zur Wand hin gerollt und er sah von ihr nur die Masse ihres dunklen Haars, das ihr immer solche Schwierigkeiten bereitete, mit dem sie Kämpfe ausfocht.»', loesung: 'HS-HS-NS-NS' },
          // 2017, Aufgabe 13
          { text: 'Wandle in einen Fragesatz im Präsens um:\n\n«Viele Jahre schon war jede Verbindung nach aussen abgeschnitten.»', loesung: 'Ist jede Verbindung nach aussen (schon) viele Jahre abgeschnitten?' },
          // 2017, Aufgabe 15
          { text: 'Schreibe den Hauptsatz heraus:\n\n«Als ich an der Hafenmauer stand, um den Möwen zuzusehen, fiel mein trauriges Gesicht einem Polizisten auf, der in diesem Viertel die Runde zu gehen hatte.»', loesung: 'fiel mein trauriges Gesicht einem Polizisten auf' },
          // 2017, Aufgabe 18
          { text: 'Schreibe alle Nebensätze heraus:\n\n«Ängstlich wie eine Schwalbe, die das Unwetter ahnt, schwebte sie meist nahe der Oberfläche des Wassers, manchmal nur wagte sie kreischend den Sturz nach oben, um ihre Bahn mit der der Genossen zu vereinen.»', loesung: '1. die das Unwetter ahnt.\n2. um ihre Bahn mit der der Genossen zu vereinen.' },
          // 2017, Aufgabe 19
          { text: 'Wie viele Hauptsätze stecken darin?\n\n«Jetzt erst spürte ich, dass es kalt war und ich keinen Mantel hatte, jetzt erst kam mein Hunger richtig hoch und knurrte vor der Pforte des Magens, jetzt erst begriff ich, dass ich auch schmutzig war.»', loesung: 'Drei Hauptsätze.' },
          // 2017, Aufgabe 20
          { text: 'Vervollständige:\n\n«Unterordnende Konjunktionen leiten ______ ein.»', loesung: 'einen Nebensatz (Nebensätze)' },
          // 2018, Aufgabe 10
          { text: 'Welches Satzbaumuster stimmt?\n\n«Die Klinke an der Tür sprang nach unten und wir wussten sofort, dass der Rektor kommt, weil nur er der Klinke einen solchen Hieb versetzte, dass sie wie erschrocken nach unten sprang.»', loesung: 'HS-HS-NS-NS-NS' },
          // 2018, Aufgabe 11
          { text: 'Welcher dieser Sätze ist ein einfacher Satz (nur ein Teilsatz)?\n\n«Er stand ein wenig schief, wie alle, die der Rektor zu uns brachte.»\n«Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.»\n«Ich sah erst jetzt, dass Ludwig tropfte.»', loesung: '«Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.»' },
          // 2018, Aufgabe 12
          { text: 'Ordne zu (beiordnende Konjunktion, unterordnende Konjunktion, keine Konjunktion):\n\nund / dass / weil / an / nur / unten', loesung: 'Beiordnend: und.\nUnterordnend: dass, weil.\nKeine Konjunktionen: an, nur, unten.' },
          // 2019, Aufgabe 14
          { text: 'Schreibe alle Konjunktionen der Reihe nach heraus:\n\n«Ich stand da und überlegte, dass ich, wenn ich in dem Haus wohnte, früher oder später mal hinaufklettern und ihm zur Hand gehen müsste, denn so richtig Mühe schien er sich nicht zu geben.»', loesung: 'und, dass, wenn, oder, und, denn' },
          // 2020, Aufgabe 10
          { text: 'Welches Satzbaumuster stimmt?\n\n«Sie steckten die Köpfe zusammen und wenn sie die Köpfe wieder hoben, hatten alle einen lachend geöffneten Mund …»', loesung: 'Hauptsatz – Nebensatz – Hauptsatz' },
          // 2020, Aufgabe 15
          { text: 'Schreibe den Hauptsatz heraus:\n\n«Nur die Frau Luthiger, die einmal in der Woche zum Bügeln kam, begann über die Katholischen zu schimpfen.»', loesung: 'Nur die Frau Luthiger begann über die Katholischen zu schimpfen.' },
          // 2021, Aufgabe 17
          { text: 'Hier sind zwei Nebensätze zusammengezogen. Schreibe sie vollständig auf:\n\n«… als könnte er sich jeden Augenblick von seinen Nägeln losreissen und vom Kreuz springen.»', loesung: '1. als könnte er sich jeden Augenblick von seinen Nägeln losreissen.\n2. als könnte er (jeden Augenblick) vom Kreuz springen.' },
          // 2022, Aufgabe 4
          { text: 'Wie lässt sich «Falls» ersetzen?\n\n«Falls das Boot wieder aufs Wasser hinaustrieb, wäre das ihre Schuld.»\n\nWeil / Obwohl / Wenn / Sofern', loesung: 'Wenn und Sofern' },
          // 2023, Aufgabe 17.1
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Ein kühler Luftzug wehte über den Hang.»', loesung: 'Subjekt – Prädikat – Präpositionalgefüge' },
          // 2023, Aufgabe 17.3
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Mitten auf der Wiese stand ein grosser Schäferhund.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt' },
          // 2023, Aufgabe 17.4
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«In der Ferne spaltete ein mächtiger Blitz den schieferfarbenen Horizont.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt – Akkusativobjekt' },
          // 2023, Aufgabe 17.5
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«In diesem Augenblick entdeckte er ihn.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt – Akkusativobjekt' },
          // 2024, Aufgabe 5
          { text: 'Wie lässt sich «auch wenn» ersetzen?\n\n«Man heiratete im Schloss, auch wenn es in Wirklichkeit keines war und nur so hiess.»\n\nanstatt dass / weil / obschon / wenngleich', loesung: 'obschon und wenngleich' },
          // 2024, Aufgabe 17.1
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Das bisschen Knipserei würde ich zustande bringen.»', loesung: 'Akkusativobjekt – Prädikat – Subjekt' },
          // 2024, Aufgabe 17.2
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Kaum jemand aus den umliegenden Dörfern schlug sein Angebot aus.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt' },
          // 2024, Aufgabe 17.3
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Er hatte das Restaurant in kürzester Zeit zu seinem früheren Ruf geführt.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge – Präpositionalgefüge' },
          // 2024, Aufgabe 17.4
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Das Hotel blieb im Sommer geschlossen.»', loesung: 'Subjekt – Prädikat – Präpositionalgefüge' },
          // 2025, Aufgabe 18.1
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Am Abend übermannte ihn das Heimweh.»', loesung: 'Präpositionalgefüge – Prädikat – Akkusativobjekt – Subjekt' },
          // 2025, Aufgabe 18.3
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Sein Vater hielt ihn am Arm.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge' },
          // 2025, Aufgabe 18.4
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Beim Abendbrot kam zwischen dem Vater und dem Sohn kein Gespräch auf.»', loesung: 'Präpositionalgefüge – Prädikat – Präpositionalgefüge – Subjekt' },
          // 2025, Aufgabe 18.5
          { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Über die Schwelle in den Korridor wurde der Wagen getragen.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt' },
        ],
        check: [],
      },
    ],
  },

  // ─── Aktiv / Passiv ───────────────────────────────────────────────────────
  'Aktiv / Passiv': {
    titel: 'Aktiv / Passiv',
    kacheln: [
      {
        id: 'aktivpassiv-umwandeln',
        emoji: '🔄',
        titel: 'Aktiv und Passiv umwandeln',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• [[akt|Aktiv]]: Das Subjekt handelt selbst.\n• [[pas|Passiv]]: Es zählt, was geschieht; wer es tut, ist nebensächlich.\n• Täter: die handelnde Person, im Passiv mit von … genannt.' },
          { text: 'So erkennst du das [[pas|Passiv]]:\n\n[[aen|werden]] + Partizip II\n\n«Ich [[pas|wurde]] von vier Millionen Dollar [[pas|erwartet]].»\n\nFehlt diese Verbindung, ist der Satz [[akt|Aktiv]].' },
          { text: 'Vom [[akt|Aktiv]] zum [[pas|Passiv]]:\n\n1. Akkusativobjekt wird Subjekt\n2. Altes Subjekt wird «von …» oder fällt weg\n3. werden + Partizip II' },
          { text: 'Beispiel:\n\n[[akt|«Zwei Wochen zuvor hatte ich Ludwig zum ersten Mal gesehen.»]]\n\n→ [[pas|«Zwei Wochen zuvor war Ludwig von mir zum ersten Mal gesehen worden.»]]' },
          { text: 'Vom [[pas|Passiv]] zum [[akt|Aktiv]]:\n\n«Ich wurde von vier Millionen Dollar erwartet.»\n\n→ [[akt|«Vier Millionen Dollar erwarteten mich.»]]\n\nDer Täter wird zum Subjekt und steht am Anfang.' },
          { text: '💡 Merksatz:\n\nIm Passiv heisst es worden, nicht geworden:\n«… war gesehen [[aen|worden]]».\n\nDie Zeitform bleibt beim Umwandeln gleich.' },
        ],
        check: [
          { frage: 'Welcher Satz steht im Passiv?', optionen: ['Der Wagen wurde getragen.', 'Sein Vater trug den Wagen.', 'Er sprang auf und half.'], richtig: 0, erklaerung: 'wurde + Partizip II getragen ist Passiv.' },
          { frage: 'Was wird beim Umwandeln ins Passiv zum Subjekt?', optionen: ['Das Akkusativobjekt', 'Das Präpositionalgefüge', 'Das Prädikat'], richtig: 0, erklaerung: 'Aus «ich sah Ludwig» wird «Ludwig wurde gesehen».' },
          { frage: 'In welcher Zeitform steht «Eine Möwe war von mir ins Auge gefasst worden»?', optionen: ['Plusquamperfekt', 'Perfekt', 'Präteritum'], richtig: 0, erklaerung: 'war + Partizip II + worden ist das Plusquamperfekt im Passiv.' },
        ],
      },
      {
        id: 'aktivpassiv-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ Jedes «werden» ist ein Passiv.\n✅ Nur werden + Partizip II. «Er wird kommen» ist Futur I und Aktiv.' },
          { text: '❌ «geworden» statt «worden» schreiben.\n✅ Im Passiv heisst es: war gesehen worden.' },
          { text: '❌ Beim Umwandeln die Zeitform verändern.\n✅ Aus einem Plusquamperfekt wird wieder ein Plusquamperfekt.' },
          { text: '❌ Den Täter vergessen, obwohl er verlangt ist.\n✅ Steht «mit Nennung des Täters», gehört «von mir», «von ihnen» dazu.' },
          { text: '❌ Im Aktivsatz das alte Subjekt stehen lassen.\n✅ «Vier Millionen Dollar erwarteten mich»: aus «ich» wird «mich».' },
          { text: '❌ Aktiv annehmen, nur weil kein Täter genannt ist.\n✅ «Zuerst musste gegessen werden» hat keinen Täter und ist trotzdem Passiv.' },
        ],
        check: [],
      },
      {
        id: 'aktivpassiv-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 7,
        karten: [
          // 2016, Aufgabe 14
          { text: 'Setze ins Passiv (mit Nennung des Täters):\n\n«Sie würden ihn für einen dieser amerikanisierten Deutschen halten …»', loesung: 'Er würde von ihnen für einen dieser amerikanisierten Deutschen gehalten werden.' },
          // 2017, Aufgabe 6
          { text: 'Aktiv oder Passiv? Und welche Zeitform?\n\n«Eine bestimmte Möwe war von mir ins Auge gefasst worden.»', loesung: 'Passiv, Plusquamperfekt.' },
          // 2018, Aufgabe 8
          { text: 'Setze ins Passiv:\n\n«Zwei Wochen zuvor hatte ich Ludwig zum ersten Mal gesehen.»', loesung: 'Zwei Wochen zuvor war Ludwig (von mir) zum ersten Mal gesehen worden.' },
          // 2019, Aufgabe 10
          { text: 'Was trifft zu?\n\n«Ich wurde von vier Millionen Dollar erwartet.»\n\nIndikativ / Imperativ / Konjunktiv / Aktiv / Passiv', loesung: 'Indikativ und Passiv.' },
          // 2019, Aufgabe 13
          { text: 'Wandle ins Aktiv um:\n\n«Ich wurde von vier Millionen Dollar erwartet.»', loesung: 'Vier Millionen Dollar erwarteten mich.' },
          // 2022, Aufgabe 13
          { text: 'Was trifft auf den verbalen Teil zu?\n\n«Das laute Krachen brachte die Ochsenfrösche in der Nähe zum Schweigen.»', loesung: 'Aktiv, Indikativ, Präteritum.' },
          // 2024, Aufgabe 14.1
          { text: 'Was trifft auf diesen Teilsatz zu?\n\n«Ich war damit aufgewachsen …»', loesung: 'Aktiv, Indikativ, Plusquamperfekt.' },
          // 2024, Aufgabe 14.2
          { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… wie zuerst unser Vater sie ironisch nannte …»', loesung: 'Aktiv, Indikativ, Präteritum.' },
          // 2024, Aufgabe 14.3
          { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… wie sie dann aber von allen ernsthaft tituliert wurde …»', loesung: 'Passiv, Indikativ, Präteritum.' },
          // 2025, Aufgabe 10.1
          { text: 'Was trifft auf diesen Teilsatz zu?\n\n«Über die Schwelle in den Korridor wurde der Wagen getragen …»', loesung: 'Passiv, Indikativ, Präteritum.' },
          // 2025, Aufgabe 10.2
          { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… das machte sein Vater …»', loesung: 'Aktiv, Indikativ, Präteritum.' },
          // 2025, Aufgabe 10.3
          { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… aber jetzt sprang Carl auf und half …»', loesung: 'Aktiv, Indikativ, Präteritum.' },
          // 2025, Aufgabe 10.4
          { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… damit nichts verrutschte.»', loesung: 'Aktiv, Indikativ, Präteritum.' },
        ],
        check: [],
      },
    ],
  },

  // ─── Direkte / Indirekte Rede ─────────────────────────────────────────────
  'Direkte / Indirekte Rede': {
    titel: 'Direkte / Indirekte Rede',
    kacheln: [
      {
        id: 'rede-umwandeln',
        emoji: '🗣️',
        titel: 'Direkte und indirekte Rede umwandeln',
        videos: [],
        karten: [
          { text: 'Diese Wörter brauchst du:\n\n• [[dr|Direkte Rede]]: die Worte stehen in Anführungszeichen.\n• [[ir|Indirekte Rede]]: du gibst sie wieder, mit [[k1|Konjunktiv I]].\n• Begleitsatz: der Teil mit sagte, rief, fragte.' },
          { text: 'Von der [[dr|direkten]] zur [[ir|indirekten]] Rede:\n\n1. Anführungszeichen weg\n2. Verb in den [[k1|Konjunktiv I]]\n3. Pronomen anpassen (ich wird er oder sie)' },
          { text: 'Beispiel:\n\n«Er ist ertrunken», sagte sie leise.\n\n→ Sie sagte leise, er [[k1|sei]] ertrunken.' },
          { text: 'Fragen brauchen ein Einleitewort:\n\n«Findest du unser Haus blöd?», fragte Wenger.\n\n→ Wenger fragte, [[konj|ob]] sie ihr Haus blöd [[k1|finde]].\n\nBei einem Fragewort bleibt dieses: wann, wo, warum.' },
          { text: '⚠️ Sieht der [[k1|Konjunktiv I]] gleich aus wie der Indikativ, nimmst du den [[k2|Konjunktiv II]].\n\nsie sagen → nicht «sie sagen», sondern [[k2|sie sagten]] oder [[k2|sie würden sagen]].' },
          { text: 'Von der [[ir|indirekten]] zur [[dr|direkten]] Rede:\n\n«Der Grossvater, sagte die Mutter, [[ir|hole]] sich eine Erkältung.»\n\n→ Die Mutter sagte: «Der Grossvater [[dr|holt]] sich eine Erkältung.»\n\n💡 Doppelpunkt, Anführungszeichen, Indikativ.' },
        ],
        check: [
          { frage: 'Wie lautet «Es gibt keine Herren», rief er zornig, in der indirekten Rede?', optionen: ['Er rief zornig, es gebe keine Herren.', 'Er rief zornig, es gibt keine Herren.', 'Er rief zornig, es gäbe keine Herren gehabt.'], richtig: 0, erklaerung: 'gebe ist der Konjunktiv I von geben.' },
          { frage: 'Welches Wort leitet eine indirekte Entscheidungsfrage ein?', optionen: ['ob', 'dass', 'weil'], richtig: 0, erklaerung: '«Findest du …?» wird zu «… ob sie … finde».' },
          { frage: 'Was brauchst du beim Umwandeln in die direkte Rede?', optionen: ['Doppelpunkt und Anführungszeichen', 'Nur ein Komma', 'Den Konjunktiv I'], richtig: 0, erklaerung: 'In der direkten Rede steht der Indikativ in Anführungszeichen.' },
        ],
      },
      {
        id: 'rede-fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
        karten: [
          { text: '❌ In der indirekten Rede den Indikativ stehen lassen.\n✅ «Sie sagte, er ist müde» wird zu «Sie sagte, er sei müde».' },
          { text: '❌ Den Konjunktiv II nehmen, obwohl Konjunktiv I verlangt ist.\n✅ sei, habe, gebe, könne statt wäre, hätte, gäbe, könnte.' },
          { text: '❌ Die Anführungszeichen stehen lassen.\n✅ In der indirekten Rede fallen sie weg.' },
          { text: '❌ Die Pronomen vergessen.\n✅ Aus «ich bin müde» wird «er sei müde».' },
          { text: '❌ Bei der Frage das Einleitewort vergessen.\n✅ Ohne Fragewort brauchst du ob.' },
          { text: '❌ Beim Rückweg in die direkte Rede den Konjunktiv behalten.\n✅ «hole sich eine Erkältung» wird zu «holt sich eine Erkältung».' },
        ],
        check: [],
      },
      {
        id: 'rede-ueben',
        emoji: '🥋',
        titel: 'Dojo',
        videos: [],
        minLoesungen: 3,
        karten: [
          // 2016, Aufgabe 8 (Frage)
          { text: 'Setze in die indirekte Rede:\n\n«Findest du unser Haus blöd?», fragte Wenger.', loesung: 'Wenger fragte, ob sie ihr Haus blöd finde (fände).' },
          // 2016, Aufgabe 8 (Aussage)
          { text: 'Setze in die indirekte Rede:\n\n«Es ist doch auch ein Chalet.»', loesung: 'Es sei (wäre) doch auch ein Chalet.' },
          // 2017, Aufgabe 9
          { text: 'Setze in die indirekte Rede mit Konjunktiv I:\n\n«Es gibt keine Herren», rief er zornig. «Wir sind alle Kameraden.»', loesung: 'Er rief zornig, es gebe keine Herren, wir (sie) seien alle Kameraden.' },
          // 2020, Aufgabe 12
          { text: 'Ersetze die indirekte Rede durch direkte Rede:\n\n«Der Grossvater, sagte die Mutter, hole sich eine Erkältung.»', loesung: 'Die Mutter sagte: «Der Grossvater holt sich eine Erkältung.»' },
          // 2021, Aufgabe 12
          { text: 'Setze die direkte Rede in indirekte Rede:\n\n«Er ist ertrunken», sagte sie leise.', loesung: 'Sie sagte leise, er sei ertrunken.' },
        ],
        check: [],
      },
    ],
  },
};
