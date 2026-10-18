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
        emoji: '✅',
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
        emoji: '🧩',
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
        emoji: '🚌',
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
        id: 'fehler',
        emoji: '⚠️',
        titel: 'Typische Fehler',
        videos: [],
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
        ],
        check: [],
      },
    ],
  },
  'Terme & Klammern': {
    titel: 'Terme & Klammern',
    kacheln: [
      {
        id: 'vorzeichen', emoji: '➖', titel: 'Vorzeichen & Klammern', videos: [],
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
        id: 'einsetzen', emoji: '🔤', titel: 'Einsetzen & Zusammenfassen', videos: [],
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
        id: 'potenzen', emoji: '⚡', titel: 'Potenzen', videos: [],
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
        ],
        check: [
          { frage: 'Was ist a³ · a⁴?', optionen: ['a⁷', 'a¹²', '2a⁷', 'a⁶'], richtig: 0, erklaerung: 'Gleiche Basis, Hochzahlen addieren: 3 + 4 = 7.' },
          { frage: 'Was ist (5a)²?', optionen: ['25a²', '5a²', '10a', '25a'], richtig: 0, erklaerung: '(5a)² = 5a · 5a = 25a². Die 5 wird mit quadriert.' },
          { frage: 'Welche Schreibweise ist die wissenschaftliche für 4 500 000?', optionen: ['4.5 · 10⁵', '4.5 · 10⁶', '45 · 10⁶', '4.5 · 10⁷'], richtig: 1, erklaerung: '4.5 · 1 000 000 = 4 500 000, und 1 000 000 = 10⁶.' },
          { frage: 'Was ist −3²?', optionen: ['9', '−9', '6', '−6'], richtig: 1, erklaerung: 'Nur die 3 wird quadriert: −(3 · 3) = −9.' },
        ],
      },
      {
        id: 'klammern', emoji: '🧮', titel: 'Ausmultiplizieren & Ausklammern', videos: [],
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
        id: 'bruch1', emoji: '🍰', titel: 'Bruchterme: Kürzen & Multiplizieren', videos: [],
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
        id: 'bruch2', emoji: '🍕', titel: 'Bruchterme: Dividieren & Addieren', videos: [],
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
        id: 'ueben', emoji: '🎯', titel: 'Dojo', videos: [], minLoesungen: 8,
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
};
