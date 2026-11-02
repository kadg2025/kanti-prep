import { fig } from './figur';

const S1 = [
  { art: 'quader', x: -2, y: 0, w: 1.5, d: 1.5, rot: 0, h: 3, farbe: 'rot' },
  { art: 'zylinder', x: 2, y: 1.5, w: 1.5, d: 1.5, rot: 0, h: 2, farbe: 'blau' },
  { art: 'quader', x: 0, y: -2.5, w: 2, d: 1, rot: 0, h: 1, farbe: 'gelb' },
];
const S2 = [
  { art: 'quader', x: 0, y: -1.5, w: 2, d: 2, rot: 0, h: 2, farbe: 'rot' },
  { art: 'zylinder', x: 0.5, y: 1.5, w: 1.5, d: 1.5, rot: 0, h: 3, farbe: 'blau' },
];
const S3 = [{ art: 'quader', x: 0, y: 0, w: 2, d: 2, rot: 0, h: 2, farbe: 'rot' }];
const NETZ1 = [
  { c: 0, z: 1, p: 'punkt', rot: 0 }, { c: 1, z: 1, p: 'kreuz', rot: 0 }, { c: 2, z: 1, p: 'diag', rot: 0 },
  { c: 3, z: 1, p: 'leer', rot: 0 }, { c: 1, z: 0, p: 'streifen', rot: 0 }, { c: 1, z: 2, p: 'dreieck', rot: 0 },
];


// Frag Sensei für Multicheck IMS: pro Thema Kacheln, gleiche Form wie
// app/lib/lernkarten.js (Kacheln mit karten/check, dazu «Typische Fehler» und «Dojo»).
// Der Schlüssel ist die Themen-ID aus index.js. Kachel-IDs sind über alle Themen
// eindeutig (Präfix mc_), weil der Lernfortschritt pro Kachel-ID gespeichert wird.
// Videos: Das Feld «videos» ist leer, wenn noch kein passendes Video gefunden ist.
// Farben im Text: [[mcok|…]] richtig/Regel, [[mcfalle|…]] Falle, [[mcmerk|…]] Merkhilfe.

// Frage mit vier Antworten; die erste Antwort ist die richtige (gemischt wird beim Anzeigen).
const c = (frage, optionen, erklaerung) => ({ frage, optionen, richtig: 0, erklaerung });

// Dojo-Karte mit drei Antworten (erste = richtig) und Lösungsweg.
const d = (text, richtig, falsch, loesung) => ({
  text,
  options: [{ text: richtig, correct: true }, ...falsch.map(t => ({ text: t, correct: false }))],
  loesung,
});

// «Typische Fehler»: Paare aus falsch und richtig.
const fehler = (id, paare) => ({
  id, emoji: '⚠️', titel: 'Typische Fehler', videos: [],
  karten: paare.map(([f, r]) => ({ text: `❌ ${f}\n✅ ${r}` })),
  check: [],
});

const dojo = (id, karten) => ({ id, emoji: '🥋', titel: 'Dojo', videos: [], minLoesungen: 8, karten, check: [] });

export const multicheckLernkarten = {
  // ─── Deutsch ─────────────────────────────────────────────────────────────
  deutsch: {
    titel: 'Deutsch',
    kacheln: [
      {
        id: 'mc_de_fehler_finden', emoji: '🔍', titel: 'Fehler finden', videos: [],
        karten: [
          { text: 'In jeder Zeile steckt höchstens ein Fehler. Vielleicht ist auch gar keiner drin. Dann wählst du «korrekt».' },
          { text: 'Lies Wort für Wort, nicht den Sinn. Prüfe vier Dinge:\n\n[[mcmerk|Gross oder klein?]] Nomen schreibt man gross. Du kannst «ein», «der» oder «die» davorsetzen.\n[[mcmerk|Doppelt?]] Nach kurzem Vokal oft doppelt: immer, Fahrrad.\n[[mcmerk|Dehnung?]] Bei langem Vokal oft ein h (Zahn) oder doppelter Vokal (Boot).\n[[mcmerk|das oder dass?]] Dazu gibt es eine eigene Kachel.' },
          { text: 'Zwei Beispiele:\n\nFahrrad = Fahr + Rad. Beide r bleiben: [[mcok|Fahrrad]], nicht [[mcfalle|Fahrad]].\n\nBücher ist ein Nomen, also gross: [[mcok|Bücher]], nicht [[mcfalle|bücher]].' },
          { text: 'Tipp: Lies die Zeile einmal rückwärts, von rechts nach links. So liest du nicht den Sinn, sondern jedes Wort einzeln.' },
        ],
        check: [
          c('Welches Wort ist richtig geschrieben?', ['Fahrrad', 'Fahrad', 'Farrad', 'Fahrat'], 'Fahr + Rad: Beide r bleiben erhalten.'),
          c('«am besten»: Gross oder klein?', ['Klein: am besten', 'Gross: am Besten', 'Beides ist richtig', 'Es kommt auf den Satz an'], 'Eine Steigerung mit «am» (am besten, am schnellsten) schreibt man klein.'),
          c('Du findest in einer Zeile keinen Fehler. Was wählst du?', ['«korrekt»', 'Das längste Wort', 'Das erste Wort', 'Das letzte Wort'], 'Nicht jede Zeile hat einen Fehler. Dann ist «korrekt» die richtige Antwort.'),
        ],
      },
      {
        id: 'mc_de_das_dass', emoji: '🔀', titel: 'das oder dass', videos: [{ titel: 'Das oder dass (Studyflix)', youtubeId: 'G0Xils-p2wA' }],
        karten: [
          { text: 'Ein Nebensatz kann nicht allein stehen. Er hängt an einem anderen Satz, getrennt durch ein Komma.\n\n[[mcok|dass]] leitet einen Nebensatz ein, zum Beispiel nach «ich weiss», «ich glaube», «ich hoffe».\n\nIch weiss, [[mcok|dass]] du kommst.' },
          { text: 'Probe: Kannst du «dieses» oder «welches» einsetzen? Dann schreibst du [[mcok|das]] mit einem s.\n\nDas Auto, [[mcok|das]] dort steht. (= welches dort steht)\n\nPasst «dieses» oder «welches» nicht, schreibst du [[mcok|dass]].' },
        ],
        check: [
          c('Ich weiss, ___ du heute Geburtstag hast.', ['dass', 'das', 'dasz', 'dasss'], 'Nach «ich weiss» beginnt ein Nebensatz. «dieses» passt nicht, also «dass».'),
          c('Das ist das Buch, ___ ich gestern gelesen habe.', ['das', 'dass', 'dasz', 'dasss'], '«welches ich gelesen habe» passt. Also «das» mit einem s.'),
        ],
      },
      {
        id: 'mc_de_luecken', emoji: '🧩', titel: 'Lücken füllen', videos: [],
        karten: [
          { text: 'Lies zuerst den ganzen Satz. Dann fragst du: Welches Wort fehlt? Ein Verb, ein Pronomen oder ein Artikel?' },
          { text: 'Den Fall findest du mit Fragewörtern:\n\n[[nom|Wer oder was?]] Nominativ\n[[akk|Wen oder was?]] Akkusativ\n[[dat|Wem?]] Dativ\n[[gen|Wessen?]] Genitiv' },
          { text: 'Er gibt [[dat|seinem]] Bruder ein Geschenk. Wem gibt er es? Dem Bruder, also Dativ.\n\nWegen [[gen|des]] Regens bleiben wir zu Hause. «wegen» verlangt den Genitiv.' },
          { text: 'Zwei weitere Bausteine:\n\nBei «sich freuen» steht ein Reflexivpronomen (mich, dich, sich, uns, euch): Wir freuen [[mcmerk|uns]] auf die Ferien.\n\nTrennbare Verben zerfallen: aufstehen wird zu «Ich [[mcmerk|stehe]] jeden Morgen um sieben Uhr [[mcmerk|auf]]».' },
          { text: 'Steht schon alles richtig da? Dann klickst du «korrekt» an.' },
        ],
        check: [
          c('Er gibt ___ Bruder ein Geschenk.', ['seinem', 'seinen', 'sein', 'seines'], 'Wem gibt er es? Dem Bruder. Das ist der Dativ: seinem.'),
          c('Wegen ___ Regens bleiben wir zu Hause.', ['des', 'dem', 'den', 'der'], '«wegen» verlangt den Genitiv: wegen des Regens.'),
          c('Wir freuen ___ auf die Ferien.', ['uns', 'sich', 'euch', 'mich'], '«wir» passt zu «uns»: Wir freuen uns.'),
        ],
      },
      {
        id: 'mc_de_aussagen', emoji: '📖', titel: 'Aussagen prüfen', videos: [],
        karten: [
          { text: 'Du liest einen kurzen Text. Dann wählst du die Aussagen, die zum Text passen. Nur der Text zählt, nicht dein Wissen.' },
          { text: 'Lies den Text zweimal. Markiere Zahlen, Orte, Namen und Zeiten. Dort verstecken sich die Fallen.' },
          { text: 'Achte auf Stolperwörter. Sie verändern die Bedeutung stark:\n\n[[mcfalle|nur, alle, immer, nie, über, bis zu, mehr als]]' },
          { text: 'Im Text steht: «bis zu 64 Elektroden». Die Aussage «200 Elektroden» ist [[mcfalle|falsch]], denn die Zahl ist verändert.\n\nSteht etwas gar nicht im Text, ist die Aussage auch falsch, selbst wenn sie logisch klingt.' },
          { text: 'Frage dich bei jeder Aussage: [[mcmerk|Wo steht das?]]' },
        ],
        check: [
          c('Eine Aussage steht nicht im Text. Was gilt?', ['Sie ist falsch, auch wenn sie logisch klingt', 'Sie ist richtig, wenn sie logisch klingt', 'Sie ist richtig, wenn ich es weiss', 'Sie ist richtig, wenn sie kurz ist'], 'Nur der Text zählt. Was nicht im Text steht, ist nicht belegt.'),
          c('Im Text steht «bis zu 64 Elektroden». Was passt dazu?', ['Es sind höchstens 64 Elektroden.', 'Es sind genau 64 Elektroden.', 'Es sind mehr als 64 Elektroden.', 'Es sind genau 200 Elektroden.'], '«bis zu 64» heisst: 64 oder weniger, also höchstens 64.'),
        ],
      },
      fehler('mc_de_fehler', [
        ['Ich lese die Zeile nur für den Sinn.', 'Lies Wort für Wort, am besten einmal rückwärts.'],
        ['am Besten', 'Eine Steigerung (am besten, am schnellsten) schreibt man klein.'],
        ['Ich weiss, das du kommst.', 'Nach «ich weiss» beginnt ein Nebensatz: Ich weiss, dass du kommst.'],
        ['In jeder Zeile muss ein Fehler sein.', 'Nicht jede Zeile hat einen. Dann wählst du «korrekt».'],
        ['Die Aussage klingt logisch, also stimmt sie.', 'Nur der Text zählt. Frage dich: Wo steht das?'],
      ]),
      dojo('mc_de_dojo', [
        d('Welches Wort ist falsch? «Der Lehrer erklert die Aufgabe noch einmal.»', 'erklert → erklärt', ['Lehrer → Lerer', 'Aufgabe → Aufgabbe'], '«erklären» kommt von «klar». Aus a wird ä: er erklärt.'),
        d('Wie schreibt man es richtig? «Ich weiss, ___ du kommst.»', 'dass', ['das', 'beides geht'], 'Nach «ich weiss» beginnt ein Nebensatz. «dieses» passt nicht, also «dass».'),
        d('Wegen ___ Regens bleiben wir zu Hause.', 'des', ['dem', 'den'], '«wegen» verlangt den Genitiv: wegen des Regens.'),
        d('Wir freuen ___ auf die Ferien.', 'uns', ['dich', 'sich'], '«wir» passt zu «uns»: Wir freuen uns.'),
        d('Sie hat zwei ___ Katzen.', 'schwarze', ['schwarzen', 'schwarz'], 'Vor «Katzen» (Mehrzahl) steht ohne Artikel die Endung -e: zwei schwarze Katzen.'),
        d('Wie schreibt man das Wort richtig?', 'Fussball', ['Fusbal', 'Fuszball'], '«Fuss» + «Ball». Ball hat zwei l, und in der Schweiz schreibt man ss: Fussball.'),
        d('Im Text steht «bis zu 64 Elektroden». Welche Aussage passt?', 'Es sind höchstens 64 Elektroden.', ['Es sind mehr als 64 Elektroden.', 'Es sind genau 200 Elektroden.'], '«bis zu 64» heisst: 64 oder weniger. «mehr als 64» und «200» widersprechen dem Text.'),
        d('Ich ___ jeden Morgen um sieben Uhr auf.', 'stehe', ['aufstehe', 'stand'], '«aufstehen» ist ein trennbares Verb: Ich stehe … auf.'),
      ]),
    ],
  },

  // ─── Englisch ────────────────────────────────────────────────────────────
  englisch: {
    titel: 'Englisch',
    kacheln: [
      {
        id: 'mc_en_verbindungen', emoji: '🔗', titel: 'Feste Verbindungen', videos: [],
        karten: [
          { text: 'Manche Wörter gehören fest mit einem kleinen Wort zusammen. Das kleine Wort musst du auswendig kennen.' },
          { text: 'Die wichtigsten:\n\n[[mcmerk|afraid of]] = Angst vor\n[[mcmerk|interested in]] = interessiert an\n[[mcmerk|good at]] = gut in\n[[mcmerk|depend on]] = abhängen von\n[[mcmerk|apologise for]] = sich entschuldigen für\n[[mcmerk|look forward to]] + Verb mit -ing = sich freuen auf' },
          { text: 'Tipp: Schreibe die festen Verbindungen auf Kärtchen. Das spart im Test Zeit.' },
        ],
        check: [
          c('She is afraid ___ spiders.', ['of', 'at', 'from', 'with'], '«afraid of» ist eine feste Verbindung.'),
          c('He is good ___ maths.', ['at', 'of', 'on', 'for'], '«good at» ist eine feste Verbindung.'),
        ],
      },
      {
        id: 'mc_en_since_for', emoji: '⏳', titel: 'since oder for', videos: [],
        karten: [
          { text: '[[mcmerk|since]] + Zeitpunkt: since 2015, since Monday.\n[[mcmerk|for]] + Zeitdauer: for three years, for two hours.' },
          { text: 'Mit «since» und «for» steht «have» + 3. Form des Verbs:\n\n[[mcfalle|I live here since 2015.]]\n[[mcok|I have lived here since 2015.]]' },
        ],
        check: [
          c('I have lived in Bern ___ 2015.', ['since', 'for', 'from', 'at'], '2015 ist ein Zeitpunkt, also «since».'),
          c('She has played the piano ___ three years.', ['for', 'since', 'from', 'during'], 'Three years ist eine Zeitdauer, also «for».'),
        ],
      },
      {
        id: 'mc_en_wenn', emoji: '🌧️', titel: 'Wenn-Sätze', videos: [],
        karten: [
          { text: 'Ein Wenn-Satz mit «if» über die Zukunft hat zwei Teile:\n\n[[mcmerk|If]] + Gegenwart, [[mcmerk|will]] + Verb.\n\nIf it rains tomorrow, we [[mcok|will]] stay at home.' },
          { text: 'Im «if»-Teil steht die Gegenwart (it rains), nicht «will».' },
        ],
        check: [
          c('If it rains tomorrow, we ___ stay at home.', ['will', 'would', 'are', 'have'], 'Nach «if» + Gegenwart folgt im zweiten Teil «will» + Verb.'),
        ],
      },
      {
        id: 'mc_en_kleine_regeln', emoji: '✨', titel: 'Kleine Regeln', videos: [],
        karten: [
          { text: 'Nach dem Verb stehen die Pronomen me, you, him, her, it, us, them.\n\nCould you tell [[mcok|me]] where the station is?' },
          { text: 'Die Höchststufe (Superlativ) ist zum Beispiel «tallest» oder «best». Davor steht «the»:\n\nHe is [[mcok|the]] tallest boy in our class.' },
          { text: 'In verneinten Sätzen heisst «auch nicht» [[mcok|either]]. «too» steht nur in bejahten Sätzen.\n\nI don’t like coffee and my brother doesn’t like it [[mcok|either]].' },
          { text: 'Vor Sportarten steht kein Artikel: My brother plays [[mcok|football]] (nicht: the football).' },
          { text: 'Passiv heisst: Etwas wird gemacht. Dafür brauchst du was + die 3. Form des Verbs. Lerne die drei Formen zusammen: break – broke – [[mcok|broken]].\n\nThe window was [[mcok|broken]] by the storm.' },
        ],
        check: [
          c('I don’t like coffee and my brother doesn’t like it ___.', ['either', 'too', 'also', 'neither'], 'Im verneinten Satz heisst «auch nicht» «either».'),
          c('He is ___ tallest boy in our class.', ['the', 'a', 'more', 'most'], 'Beim Superlativ steht «the» davor.'),
          c('The window was ___ by the storm.', ['broken', 'broke', 'break', 'breaking'], 'Passiv: was + 3. Form. break – broke – broken.'),
        ],
      },
      {
        id: 'mc_en_gespraeche', emoji: '💬', titel: 'Gespräche', videos: [],
        karten: [
          { text: 'Du siehst ein kurzes Gespräch und wählst die passende Frage oder Antwort. Der Titel verrät, wo du bist und mit wem du sprichst.' },
          { text: 'Eine Frage braucht eine passende Antwort:\n\nBaker: «What would you like?»\nYou: «I’d like two rolls, please.»\n\nTeacher: «Why are you late?»\nYou: «Sorry, my bus was late.»' },
          { text: 'Höfliche Wörter sind oft richtig: please, thank you, I’d like …, sorry.' },
          { text: 'Typische Fallen: [[mcfalle|falsche Zeit]], [[mcfalle|falsche Person]] und Wörter, die ähnlich klingen. Streiche zuerst alles, was nicht zur Frage passt.' },
        ],
        check: [
          c('Baker: «What would you like?»', ['I’d like two rolls, please.', 'Yes, please.', 'The rolls are tomorrow.', 'I like rolls very much.'], '«What would you like?» verlangt eine Bestellung.'),
          c('Friend: «Hello, this is Sam. Can I speak to Anna?»', ['Sure, one moment please.', 'No, I am Sam.', 'Yes, she speaks English.', 'She was a doctor.'], 'Am Telefon antwortet man höflich: Sure, one moment please.'),
        ],
      },
      {
        id: 'mc_en_wortschatz', emoji: '📚', titel: 'Wortschatz', videos: [],
        karten: [
          { text: 'Zwei Fragearten:\n\n[[mcok|has the same meaning]] = gleiche Bedeutung\n[[mcfalle|has not the same meaning]] = du suchst den Aussenseiter' },
          { text: 'Gleiche Bedeutung: begin = start, purchase = buy, rapid = quick.' },
          { text: 'Aussenseiter: Bei «not the same meaning as big» gehören huge, large und giant zusammen. [[mcfalle|tiny]] ist der Aussenseiter.' },
          { text: 'Tipp: Lerne Wörter in Gruppen, zum Beispiel big – huge – large – giant. So erkennst du den Aussenseiter sofort.' },
        ],
        check: [
          c('Which word has not the same meaning as «big»?', ['tiny', 'huge', 'large', 'giant'], 'Huge, large und giant bedeuten gross. Tiny bedeutet winzig.'),
          c('«Purchase» has the same meaning as ...', ['buy', 'sell', 'sleep', 'walk'], 'purchase = kaufen = buy.'),
        ],
      },
      fehler('mc_en_fehler', [
        ['I live here since 2015.', 'I have lived here since 2015.'],
        ['I don’t like it too.', 'In verneinten Sätzen: I don’t like it either.'],
        ['My brother plays the football.', 'Vor Sportarten steht kein Artikel: plays football.'],
        ['He is tallest boy.', 'Beim Superlativ steht «the»: the tallest boy.'],
        ['The window was broke.', 'Passiv braucht die 3. Form: was broken.'],
        ['Ich nehme die Antwort, die zu einem anderen Zeitpunkt passt (yesterday statt now).', 'Achte auf die Zeit in der Frage.'],
      ]),
      dojo('mc_en_dojo', [
        d('She is afraid ___ spiders.', 'of', ['at', 'with'], '«afraid of» ist eine feste Verbindung.'),
        d('I have lived in Bern ___ 2015.', 'since', ['for', 'from'], '2015 ist ein Zeitpunkt, also «since». «for» steht bei einer Dauer.'),
        d('If it rains tomorrow, we ___ stay at home.', 'will', ['would', 'are'], 'Nach «if» + Gegenwart folgt «will» + Verb.'),
        d('Could you tell ___ where the station is?', 'me', ['I', 'my'], 'Nach dem Verb steht «me», nicht «I»: tell me.'),
        d('He is ___ tallest boy in our class.', 'the', ['a', 'more'], 'Beim Superlativ steht «the» davor.'),
        d('The window was ___ by the storm.', 'broken', ['broke', 'break'], 'Passiv: was + 3. Form. break – broke – broken.'),
        d('«Purchase» has the same meaning as ...', 'buy', ['sell', 'sleep'], 'purchase = kaufen = buy.'),
        d('Teacher: «Why are you late?»', 'Sorry, my bus was late.', ['Because I like school.', 'Yes, please.'], 'Die Frage nach dem Grund braucht eine Begründung, hier höflich mit «Sorry».'),
      ]),
    ],
  },

  // ─── Kurzzeitgedächtnis ──────────────────────────────────────────────────
  kurz: {
    titel: 'Kurzzeitgedächtnis',
    kacheln: [
      {
        id: 'mc_ku_farben', emoji: '🔴', titel: 'Farben merken', videos: [],
        karten: [
          { text: 'Eine Reihe aus roten, blauen und schwarzen Kreisen wird kurz gezeigt. Danach klickst du sie von links nach rechts nach:\n\n1× = rot, 2× = blau, 3× = schwarz.' },
          { text: 'Dein Kurzzeitgedächtnis ist der Speicher im Kopf für Dinge, die du nur wenige Sekunden brauchst. Er fasst nur etwa 5 bis 9 Einheiten. Darum merkst du dir nicht einzelne Kreise, sondern [[mcmerk|Gruppen]].\n\n«blau blau rot rot» sind 2 Gruppen statt 4 Kreise.' },
          { text: 'Beispiel: rot rot rot, blau blau blau, schwarz schwarz.\n\nDas sind nur 3 Gruppen: «3 rot, 3 blau, 2 schwarz».' },
          { text: 'Gib der Reihe einen Rhythmus, zum Beispiel «bb – rr – s – r – s – r». Ein Rhythmus lässt sich viel besser merken als einzelne Farben.' },
          { text: 'Verschwindet die Reihe, sprichst du sie leise im Kopf weiter. Beim Klicken zählst du laut mit.' },
        ],
        check: [
          c('Warum hilft Gruppieren?', ['Aus mehreren Kreisen wird eine Einheit. So musst du dir weniger Einheiten merken.', 'Man sieht die Kreise schneller.', 'Man muss die Reihe nicht mehr nachklicken.', 'Die Reihe wird länger angezeigt.'], 'Das Kurzzeitgedächtnis fasst nur wenige Einheiten. Gruppen zählen als eine Einheit.'),
          c('Wie viele Gruppen sind es? rot rot rot, blau blau, schwarz', ['3', '6', '2', '4'], 'rot-Block, blau-Block, schwarz: 3 Gruppen.'),
        ],
      },
      {
        id: 'mc_ku_buchstaben', emoji: '🔤', titel: 'Buchstaben merken', videos: [],
        karten: [
          { text: 'Eine Buchstabenfolge wird kurz gezeigt, zum Beispiel ZQUPMA. Danach wählst du aus mehreren Folgen die, die du gesehen hast.' },
          { text: 'Die falschen Auswahlen sind fast immer Umstellungen. Dieselben Buchstaben, aber in anderer Reihenfolge. Die Mitte oder das Ende ist vertauscht.' },
          { text: 'Anfang und Ende merkst du dir am besten. Die Mitte ist das Risiko.\n\nTeile die Folge in Gruppen aus 2 bis 3 Zeichen: ZQU – PMA. Sprich jede Gruppe leise als Klang aus.' },
          { text: 'Beim Auswählen vergleichst du zuerst den [[mcmerk|Anfang]], dann das [[mcmerk|Ende]], dann die [[mcmerk|Mitte]]. Streiche Falsche weg, bis nur eine bleibt.' },
        ],
        check: [
          c('Welche Teile einer Folge merkst du dir am besten?', ['Anfang und Ende', 'Nur die Mitte', 'Alle gleich gut', 'Nur das Ende'], 'Anfang und Ende prägen sich am besten ein. Die Mitte ist das Risiko.'),
          c('Gezeigt wurde ZQUPMA. Welche Auswahl stimmt?', ['ZQUPMA', 'ZUPQMA', 'ZQUMAP', 'ZQPUMA'], 'ZUPQMA hat die Mitte vertauscht, ZQUMAP das Ende, ZQPUMA die Mitte.'),
        ],
      },
      {
        id: 'mc_ku_zahlen', emoji: '🔢', titel: 'Zahlen merken', videos: [],
        karten: [
          { text: 'Eine Ziffernfolge wird kurz gezeigt, zum Beispiel 7270207. Du merkst sie als Folge von Ziffern, nicht als grosse Zahl.' },
          { text: 'Teile die Ziffern wie bei einer Telefonnummer, zum Beispiel 3 – 2 – 2:\n\n7270207 → [[mcmerk|727 – 02 – 07]]' },
          { text: 'Sprich die Gruppen leise als Zahlen aus: «sieben-zwei-sieben, null-zwei, null-sieben». Suche auch Muster, zum Beispiel gleiche Ziffern.' },
          { text: 'Falsche Auswahlen sind Umstellungen: 7207207 hat die Mitte vertauscht, 7270720 das Ende. Vergleiche Anfang, Ende und Mitte.' },
        ],
        check: [
          c('Wie merkst du dir eine Ziffernfolge am besten?', ['Gruppen bilden und rhythmisch aussprechen', 'Jede Ziffer einzeln wiederholen', 'Als eine grosse Zahl lesen', 'Nur den Anfang merken'], 'Gruppen wie bei einer Telefonnummer sind leichter zu merken als einzelne Ziffern.'),
          c('Gezeigt wurde 7270207. Welche Auswahl stimmt?', ['7270207', '7207207', '7270720', '7720207'], '7207207 hat die Mitte vertauscht, 7270720 das Ende.'),
        ],
      },
      fehler('mc_ku_fehler', [
        ['Ich merke mir jeden Kreis und jedes Zeichen einzeln.', 'Bilde Gruppen. Weniger Einheiten sind leichter zu merken.'],
        ['Ich merke mir nur den Anfang.', 'Anfang und Ende sind leicht. Übe gezielt die Mitte, sie ist das Risiko.'],
        ['Ich klicke hektisch los.', 'Zähle beim Klicken laut mit.'],
        ['Ich vergleiche nur ein Stück der Auswahl.', 'Vergleiche Anfang, Ende und Mitte. Streiche Falsche weg.'],
      ]),
      dojo('mc_ku_dojo', [
        d('Rot rot rot, blau blau blau, schwarz schwarz: Wie viele Gruppen sind es?', '3', ['8', '2'], 'rot-Block, blau-Block, schwarz-Block: 3 Gruppen statt 8 Kreise.'),
        d('Blau blau, rot rot, schwarz, rot, schwarz, rot: Wie viele Gruppen sind es?', '6', ['8', '4'], 'bb, rr, s, r, s, r: 6 Gruppen (2 + 2 + 1 + 1 + 1 + 1 = 8 Kreise).'),
        d('Wie viele Einheiten fasst dein Kurzzeitgedächtnis etwa?', '5 bis 9', ['20 bis 30', '1 bis 2'], 'Es fasst nur wenige Einheiten, etwa 5 bis 9.'),
        d('Gezeigt wurde ZQUPMA. Welche Auswahl stimmt?', 'ZQUPMA', ['ZUPQMA', 'ZQUMAP'], 'ZUPQMA hat die Mitte vertauscht, ZQUMAP das Ende.'),
        d('Welche Teile einer Folge merkst du dir am besten?', 'Anfang und Ende', ['Nur die Mitte', 'Alle gleich gut'], 'Anfang und Ende prägen sich am besten ein.'),
        d('Teile 7270207 in die Gruppen 3 – 2 – 2.', '727 – 02 – 07', ['72 – 702 – 07', '7270 – 20 – 7'], 'Die Gruppen haben 3, 2 und 2 Ziffern: 727, 02, 07.'),
        d('Du klickst einen Kreis zweimal an. Welche Farbe hat er?', 'Blau', ['Rot', 'Schwarz'], '1× = rot, 2× = blau, 3× = schwarz.'),
        d('Die Reihe ist verschwunden. Was tust du?', 'Sie leise im Kopf weitersprechen', ['Neu raten', 'Mit dem Klicken aufhören'], 'Sprich die Reihe im Kopf weiter, bis du sie nachgeklickt hast.'),
      ]),
    ],
  },

  // ─── IT-Grundwissen ──────────────────────────────────────────────────────
  it: {
    titel: 'IT-Grundwissen',
    kacheln: [
      {
        id: 'mc_it_skript', emoji: '📜', titel: 'Skript lesen', videos: [],
        karten: [
          { text: 'Ein Skript ist eine Folge von Befehlsblöcken. Sie werden der Reihe nach ausgeführt.' },
          { text: 'Die wichtigsten Blöcke:\n\n[[mcmerk|wiederhole X mal]]: Die Blöcke in der Klammer laufen X-mal.\n[[mcmerk|Stift ein / aus]]: Nur bei «Stift ein» zeichnet die Figur beim Gehen eine Linie.\n[[mcmerk|↻]] dreht nach rechts (Uhrzeigersinn), [[mcmerk|↺]] dreht nach links.' },
          { text: 'Beispiel: «wiederhole 4 mal {gehe 20er Schritt}» ergibt 4 · 20 = 80 Schritte.\n\n«gehe 10er Schritt» ohne Stift-Block: Die Figur geht, zeichnet aber nichts.' },
          { text: 'Prüfe jede Aussage Block für Block. Was nicht im Skript steht, stimmt nicht, auch wenn es logisch klingt.' },
        ],
        check: [
          c('«wiederhole 5 mal {gehe 10er Schritt}»: Wie viele Schritte geht die Figur?', ['50', '15', '10', '5'], '5 · 10 = 50 Schritte.'),
          c('Eine Aussage steht nicht im Skript, klingt aber logisch. Was gilt?', ['Sie stimmt nicht', 'Sie stimmt', 'Sie stimmt halb', 'Sie stimmt, wenn die Figur wandert'], 'Nur was im Skript steht, zählt.'),
        ],
      },
      {
        id: 'mc_it_labyrinth', emoji: '🧭', titel: 'Labyrinth', videos: [],
        karten: [
          { text: 'Die Figur schaut am Start nach rechts. ↻ dreht nach rechts, ↺ dreht nach links, von der Blickrichtung der Figur aus gesehen.' },
          { text: 'Beispiel: Blick nach rechts, dann ↺ 90: Die Figur schaut nach oben. Dann ↻ 90: Sie schaut wieder nach rechts.' },
          { text: 'Vergleiche die vier Skripte: Worin unterscheiden sie sich? In der Drehrichtung, in der Schrittzahl oder in einem fehlenden Block? Streiche Skripte mit falscher Drehung, falscher Zahl oder fehlendem Schlussblock.' },
          { text: 'Tipp: Halte den Finger auf den Start und drehe das Blatt mit der Figur mit. So wird «links» sofort klar.' },
        ],
        check: [
          c('Die Figur schaut nach rechts und macht ↺ 90. Wohin schaut sie?', ['Nach oben', 'Nach unten', 'Nach links', 'Nach rechts'], '↺ dreht nach links. Von rechts aus gesehen ist links oben.'),
          c('Du vergleichst vier Skripte. Worauf achtest du?', ['Drehrichtung, Schrittzahl, fehlender Block', 'Nur die Farbe der Blöcke', 'Nur die Länge des Skripts', 'Nur den ersten Block'], 'Die Skripte unterscheiden sich meist in diesen drei Punkten.'),
        ],
      },
      {
        id: 'mc_it_figur', emoji: '✏️', titel: 'Figur zeichnen', videos: [],
        karten: [
          { text: 'Du siehst eine Figur und wählst das Skript, das sie zeichnet. Zerlege die Figur in Stücke: Linie, Lücke, Drehung.' },
          { text: 'Eine Linie gibt es nur bei [[mcmerk|Stift ein]]. Eine Lücke in der Figur heisst: Der Stift war aus.' },
          { text: 'Das Mass A ist eine Einheitslänge. 3A bedeutet 3 · A Schritte.\n\nBeispiel mit A = 30: Eine Linie von 2A ist «gehe 60er Schritt» mit eingeschaltetem Stift.' },
          { text: 'Eine Lücke von der Länge A: «schalte Stift aus, gehe 30er Schritt, schalte Stift ein».\n\nReihenfolge: Erst den Stift einschalten, dann gehen. Erst drehen, dann in die neue Richtung gehen.' },
        ],
        check: [
          c('A = 20. Wie viele Schritte hat eine Linie von 3A?', ['60', '23', '20', '6'], '3A = 3 · 20 = 60.'),
          c('Wie entsteht in der Figur eine Lücke?', ['Der Stift ist ausgeschaltet', 'Die Figur dreht sich', 'Der Stift ist eingeschaltet', 'Die Schleife läuft zu oft'], 'Nur bei «Stift ein» wird gezeichnet. Eine Lücke heisst: Stift aus.'),
        ],
      },
      {
        id: 'mc_it_variable', emoji: '🔁', titel: 'Zahl und Schleife', videos: [],
        karten: [
          { text: 'Eine Variable ist ein Behälter mit einem Namen, zum Beispiel «Zahl». Darin steckt eine Zahl.\n\n«setze Zahl auf 1» legt den Wert 1 hinein.' },
          { text: 'Eine Schleife «wiederhole N mal» führt die Blöcke darin N-mal aus.\n\nBeispiel: setze Zahl auf 1, dann 5 mal «Zahl + 1»:\n1 → 2 → 3 → 4 → 5 → 6. Am Ende ist die Zahl [[mcok|6]].' },
          { text: 'So gehst du vor: Schreibe den Startwert auf. Mache eine Tabelle mit Durchgang 1, 2, 3 … und rechne in jedem Durchgang nach. Der Startwert zählt mit: Die Schleife startet beim «setze»-Wert, nicht bei 0.' },
        ],
        check: [
          c('setze Zahl auf 2, dann 3 mal «Zahl + 4». Wie gross ist die Zahl am Ende?', ['14', '12', '6', '10'], '2 → 6 → 10 → 14.'),
          c('setze Zahl auf 3, dann 2 mal «Zahl · 2». Wie gross ist die Zahl am Ende?', ['12', '6', '9', '5'], '3 → 6 → 12.'),
        ],
      },
      {
        id: 'mc_it_fluss', emoji: '🔀', titel: 'Flussdiagramm', videos: [{ titel: 'Flussdiagramm (Eduty)', youtubeId: 'coylYRocCvA' }],
        karten: [
          { text: 'Die Formen haben feste Bedeutungen:\n\n[[mcmerk|Oval]] = Start oder Ende\n[[mcmerk|Parallelogramm]] = Eingabe: Die Variablen bekommen ihre ersten Werte\n[[mcmerk|Rechteck]] = Hier wird gerechnet (zum Beispiel A = A + B)\n[[mcmerk|Raute]] = Entscheidung: Bedingung wahr, dann «Ja», sonst «Nein»\n[[mcmerk|Welle]] = Ausgabe des Ergebnisses' },
          { text: 'Beispiel: A = 2, B = 3.\n\nA = A + 2 ergibt A = 4.\nIst A > B? 4 > 3, also «Ja».\nA = A − B ergibt 4 − 3 = [[mcok|1]].' },
          { text: 'Rechne immer mit den aktuellen Werten. Streiche alte Werte durch und schreibe die neuen daneben.' },
          { text: 'Bei Aussagen zum Diagramm: Verfolge den Weg mit dem Finger und lies «ja» und «nein» an den Pfeilen genau. Bei «immer», «nie» oder «auf jeden Fall» suchst du einen Weg, der die Aussage widerlegt.' },
        ],
        check: [
          c('Welche Form steht für eine Entscheidung?', ['Raute', 'Oval', 'Rechteck', 'Welle'], 'Die Raute fragt eine Bedingung ab und hat einen «Ja»- und einen «Nein»-Pfeil.'),
          c('A = 5, B = 2. Zuerst A = A − B, dann die Frage «Ist A > B?». Welchen Pfeil nimmst du?', ['Ja, denn A = 3 und 3 > 2', 'Nein, denn A = 3 und 3 < 2', 'Ja, denn A = 7', 'Nein, denn A = 5'], 'A = 5 − 2 = 3. Und 3 > 2 stimmt, also «Ja».'),
        ],
      },
      fehler('mc_it_fehler', [
        ['Ich rechne mit dem alten Wert weiter.', 'Rechne immer mit dem aktuellen Wert. Streiche alte Werte durch.'],
        ['Die Schleife startet bei 0.', 'Sie startet beim Wert aus «setze …». Der Startwert zählt mit.'],
        ['↻ und ↺ vertauscht.', '↻ dreht nach rechts (Uhrzeigersinn), ↺ nach links.'],
        ['Die Aussage klingt logisch, also stimmt sie.', 'Nur was im Skript oder im Diagramm steht, zählt.'],
        ['Ich zeichne eine Linie, ohne den Stift einzuschalten.', 'Zuerst «Stift ein», dann gehen.'],
      ]),
      dojo('mc_it_dojo', [
        d('«wiederhole 4 mal {gehe 20er Schritt}»: Wie viele Schritte?', '80', ['24', '20'], '4 · 20 = 80.'),
        d('Die Figur schaut nach rechts und macht ↺ 90. Wohin schaut sie?', 'Nach oben', ['Nach unten', 'Nach links'], '↺ dreht nach links. Von rechts aus ist das oben.'),
        d('A = 30. Eine Linie von 2A: Welcher Block?', 'gehe 60er Schritt (Stift ein)', ['gehe 32er Schritt (Stift ein)', 'gehe 60er Schritt (Stift aus)'], '2A = 2 · 30 = 60. Für eine Linie muss der Stift eingeschaltet sein.'),
        d('setze Zahl auf 1, dann 5 mal «Zahl + 1». Endwert?', '6', ['5', '1'], '1 → 2 → 3 → 4 → 5 → 6.'),
        d('setze Zahl auf 3, dann 2 mal «Zahl · 2». Endwert?', '12', ['6', '9'], '3 → 6 → 12.'),
        d('Welche Form steht im Flussdiagramm für eine Entscheidung?', 'Raute', ['Oval', 'Rechteck'], 'Die Raute hat einen «Ja»- und einen «Nein»-Pfeil.'),
        d('A = 2, B = 3. Erst A = A + 2, dann ist A > B? Ja, dann A = A − B. Wie gross ist A?', '1', ['4', '3'], 'A = 2 + 2 = 4. Es gilt 4 > 3, also A = 4 − 3 = 1.'),
        d('Was bedeutet ↻?', 'Nach rechts drehen (Uhrzeigersinn)', ['Nach links drehen', 'Stift einschalten'], '↻ dreht nach rechts, ↺ nach links.'),
      ]),
    ],
  },

  // ─── Organisationsfähigkeit ──────────────────────────────────────────────
  org: {
    titel: 'Organisationsfähigkeit',
    kacheln: [
      {
        id: 'mc_or_regeln', emoji: '📏', titel: 'Regeln im Plan', videos: [],
        karten: [
          { text: 'Im Wochenplan gelten vier Regeln:\n\n1. Termine beginnen zur [[mcmerk|vollen Stunde]].\n2. Termine dürfen sich [[mcmerk|nicht überschneiden]].\n3. Die [[mcmerk|Mittagspause]] von 12.00 bis 13.00 bleibt frei.\n4. Nur Termine, die [[mcmerk|länger als 4 Stunden]] dauern, dürfen auf 2 Tage verteilt werden.' },
          { text: 'Ein 3-Stunden-Termin ab 10.00 würde bis 13.00 gehen. Er verletzt die Mittagspause.' },
          { text: 'Ein Termin über 2 Tage liegt am Nachmittag (13.00 bis 17.00) und am nächsten Vormittag (8.00 bis 12.00). Zusammen sind das 8 Stunden.' },
          { text: 'Tipp: Lerne die Regeln als Satz: «Volle Stunde, nie überschneiden, Mittag frei, nur über 4 Stunden auf 2 Tage.»' },
        ],
        check: [
          c('Ein Termin dauert 3 Stunden und beginnt um 10.00. Was ist das Problem?', ['Er geht in die Mittagspause', 'Er beginnt nicht zur vollen Stunde', 'Er dauert zu lange', 'Er geht über zwei Tage'], '10.00 bis 13.00: Die Stunde von 12.00 bis 13.00 ist die Mittagspause.'),
          c('Welche Termine dürfen auf 2 Tage verteilt werden?', ['Termine über 4 Stunden', 'Alle Termine', 'Termine unter 2 Stunden', 'Nur Termine am Freitag'], 'Nur Termine, die länger als 4 Stunden dauern, dürfen über 2 Tage gehen.'),
        ],
      },
      {
        id: 'mc_or_bedingungen', emoji: '🔖', titel: 'Bedingungen', videos: [],
        karten: [
          { text: 'Zu manchen Terminen steht eine Bedingung in Klammern.' },
          { text: '[[mcmerk|zwingend Mittwoch]] = Der Termin muss am Mittwoch sein.\n\n[[mcmerk|erst nach Mittwoch]] = Frühestens Donnerstag. Dazu kann «Vormittag» stehen: Dann nur bis 12.00 Uhr.\n\n[[mcmerk|vor «X»]] = Der Termin muss zu Ende sein, bevor «X» beginnt.' },
          { text: 'Beispiel: «vor Nachbesprechung» (Donnerstag 10 bis 11 Uhr). Erlaubt sind Montag, Dienstag, Mittwoch oder Donnerstag von 8 bis 10 Uhr.' },
          { text: '[[mcfalle|«nach Mittwoch»]] ist nicht «ab Mittwoch». Es heisst Donnerstag oder später.' },
        ],
        check: [
          c('«erst nach Mittwoch»: Welche Tage sind erlaubt?', ['Donnerstag und Freitag', 'Mittwoch und Donnerstag', 'Montag bis Mittwoch', 'Nur Freitag'], '«nach Mittwoch» heisst Donnerstag oder später.'),
          c('«zwingend Dienstag»: Was bedeutet das?', ['Der Termin muss am Dienstag sein', 'Der Termin darf am Dienstag sein', 'Der Termin ist nach Dienstag', 'Der Termin ist vor Dienstag'], '«zwingend» lässt nur diesen einen Tag zu.'),
        ],
      },
      {
        id: 'mc_or_freie_stunden', emoji: '⏱️', titel: 'Freie Stunden', videos: [],
        karten: [
          { text: 'Pro Tag hast du [[mcmerk|8 nutzbare Stunden]]: vier am Vormittag (8 bis 12) und vier am Nachmittag (13 bis 17). Die Mittagspause zählt nicht.' },
          { text: 'Ein Termin belegt immer ganze Stunden-Felder. Ein Termin von 1.5 Stunden belegt 2 Felder.' },
          { text: 'Beispiel: Fix von 8 bis 10 und von 14 bis 15.\n\nBelegt: 2 + 1 = 3 Felder.\nFrei: 8 − 3 = [[mcok|5]] Stunden.' },
          { text: 'Kontrolle: belegt + frei = 8. Tipp: Zeichne den Tag als Streifen mit 9 Kästchen und streiche das Mittagskästchen sofort grau an.' },
        ],
        check: [
          c('Fix von 9 bis 11 und von 13 bis 14. Wie viele Stunden sind noch frei?', ['5', '6', '3', '4'], 'Belegt: 2 + 1 = 3. Frei: 8 − 3 = 5.'),
          c('Wie viele Felder belegt ein Termin von 1.5 Stunden?', ['2', '1', '1.5', '3'], 'Ein Termin belegt immer ganze Felder, also aufgerundet 2.'),
        ],
      },
      {
        id: 'mc_or_passt', emoji: '🧱', titel: 'Passt der Termin?', videos: [],
        karten: [
          { text: 'Du suchst die Startzeit, bei der ein neuer Termin in eine Lücke passt.' },
          { text: 'Rechne die Dauer auf ganze Felder auf (1.5 Stunden wird zu 2). Prüfe jede Startzeit: Welche Felder werden belegt? Streiche Startzeiten, die einen fixen Termin, die Mittagspause oder 17.00 Uhr verletzen.' },
          { text: 'Beispiel: Fix von 9 bis 11. Neuer Termin von 2 Stunden:\n\n13.00 [[mcok|passt]].\n10.00 bis 12.00 [[mcfalle|überschneidet sich]].\n11.00 bis 13.00 [[mcfalle|liegt in der Mittagspause]].' },
          { text: 'Tipp: Beginnt ein Termin vor 12.00 Uhr, muss er spätestens um 12.00 Uhr zu Ende sein.' },
        ],
        check: [
          c('Fix von 9 bis 11. Ein Termin von 2 Stunden soll am selben Tag stattfinden. Welche Startzeit passt?', ['13.00 Uhr', '10.00 Uhr', '11.00 Uhr', '12.00 Uhr'], '10.00 überschneidet sich, 11.00 und 12.00 berühren die Mittagspause. 13.00 bis 15.00 ist frei.'),
          c('Wie viele Felder belegt ein Termin von 2.5 Stunden?', ['3', '2', '2.5', '5'], 'Aufgerundet auf ganze Felder sind es 3. Er startet zur vollen Stunde.'),
        ],
      },
      {
        id: 'mc_or_wochenplan', emoji: '🗓️', titel: 'Wochenplan bauen', videos: [],
        karten: [
          { text: 'Beim Wochenplan fehlen einzelne Termine. Du setzt sie wieder ein. Die orangen Termine sind fix. Die blauen musst du platzieren. Meist gibt es mehr als eine gültige Lösung.' },
          { text: 'So gehst du vor:\n\n1. Lies alle Termine. Notiere Dauer und Bedingung.\n2. Setze zuerst die streng gebundenen: «zwingend …», «erst nach …» und die 2-Tage-Termine.\n3. Setze dann die langen Termine.\n4. Setze zuletzt die kurzen in die Lücken.' },
          { text: 'Kontrolle am Schluss: Alles platziert? Keine Überschneidung? Start zur vollen Stunde? Mittag frei? Alle «vor»-Bedingungen erfüllt?' },
          { text: 'Tipp: Fange immer mit dem Termin an, der die wenigsten Möglichkeiten hat. Der Rest passt dann fast von selbst.' },
        ],
        check: [
          c('Mit welchem Termin fängst du an?', ['Mit dem, der die wenigsten Möglichkeiten hat', 'Mit dem kürzesten', 'Mit dem, der oben steht', 'Mit dem, der dir am besten gefällt'], 'Streng gebundene Termine lassen kaum Spielraum. Setze sie zuerst.'),
        ],
      },
      fehler('mc_or_fehler', [
        ['«nach Mittwoch» heisst ab Mittwoch.', 'Es heisst Donnerstag oder später.'],
        ['Die Mittagspause zählt als nutzbare Stunde.', 'Pro Tag sind es 8 nutzbare Stunden, die Mittagspause bleibt frei.'],
        ['Ein Termin von 1.5 Stunden belegt 1 Feld.', 'Er belegt 2 Felder.'],
        ['Ich setze zuerst die kurzen Termine.', 'Zuerst die streng gebundenen, dann die langen, zuletzt die kurzen.'],
        ['Ein 3-Stunden-Termin von 10.00 bis 13.00.', 'Das verletzt die Mittagspause.'],
      ]),
      dojo('mc_or_dojo', [
        d('Wie viele nutzbare Stunden hat ein Tag im Wochenplan?', '8', ['9', '7'], 'Vier am Vormittag (8 bis 12) und vier am Nachmittag (13 bis 17). Die Mittagspause zählt nicht.'),
        d('Fix von 8 bis 10 und von 14 bis 15. Wie viele Stunden sind frei?', '5', ['6', '4'], 'Belegt: 2 + 1 = 3. Frei: 8 − 3 = 5.'),
        d('Ein Termin von 3 Stunden beginnt um 10.00. Was ist das Problem?', 'Er geht in die Mittagspause', ['Er beginnt nicht zur vollen Stunde', 'Er dauert zu lange'], '10.00 bis 13.00 belegt auch die Stunde von 12.00 bis 13.00.'),
        d('«erst nach Mittwoch»: Welche Tage sind erlaubt?', 'Donnerstag und Freitag', ['Mittwoch und Donnerstag', 'Montag bis Mittwoch'], '«nach Mittwoch» heisst Donnerstag oder später.'),
        d('Welche Termine dürfen auf 2 Tage verteilt werden?', 'Termine über 4 Stunden', ['Alle Termine', 'Termine unter 2 Stunden'], 'Nur Termine, die länger als 4 Stunden dauern.'),
        d('Fix von 9 bis 11. Ein Termin von 2 Stunden: Welche Startzeit passt?', '13.00 Uhr', ['10.00 Uhr', '11.00 Uhr'], '10.00 überschneidet sich, 11.00 geht in die Mittagspause. 13.00 bis 15.00 ist frei.'),
        d('Wie viele Felder belegt ein Termin von 1.5 Stunden?', '2', ['1', '3'], 'Ein Termin belegt ganze Felder, also aufgerundet 2.'),
        d('Mit welchem Termin fängst du beim Wochenplan an?', 'Mit dem, der die wenigsten Möglichkeiten hat', ['Mit dem kürzesten', 'Mit dem, der oben steht'], 'Streng gebundene Termine zuerst, dann passt der Rest fast von selbst.'),
      ]),
    ],
  },

  // ─── Mathematik ──────────────────────────────────────────────────────────
  mathe: {
    titel: 'Mathematik',
    kacheln: [
      {
        id: 'mc_ma_schaetzen_mal', emoji: '✖️', titel: 'Schätzen: Mal', videos: [{ titel: 'Überschlagsrechnung, Schätzen (Lehrerschmidt)', youtubeId: '226hdyYW7sg' }],
        karten: [
          { text: 'Bei Schätzaufgaben rechnest du nicht genau, sondern geschickt. Bei Zahlen mit Endnullen geht das so:\n\n1. Streiche die Endnullen und zähle sie.\n2. Rechne die Kernzahlen mal. Kernzahl ist die Zahl ohne die Nullen am Ende.\n3. Hänge alle gezählten Nullen hinten an.' },
          { text: '80 · 60: Kernzahlen 8 · 6 = 48. Nullen: 1 + 1 = 2. Resultat: [[mcok|4’800]].\n\n500 · 20: Kernzahlen 5 · 2 = 10. Nullen: 2 + 1 = 3. Resultat: [[mcok|10’000]].' },
          { text: 'Tipp: Zähle die Nullen zuerst, rechne erst danach. So verzählst du dich nicht. Zum Schluss vergleichst du mit den Antworten: Stimmt die Anzahl Stellen?' },
        ],
        check: [
          c('300 · 700 = ?', ['210’000', '21’000', '2’100’000', '2’100'], '3 · 7 = 21 und 2 + 2 = 4 Nullen: 210’000.'),
          c('40 · 90 = ?', ['3’600', '360', '36’000', '3’060'], '4 · 9 = 36 und 1 + 1 = 2 Nullen: 3’600.'),
        ],
      },
      {
        id: 'mc_ma_schaetzen_plus', emoji: '➕', titel: 'Schätzen: Plus und Minus', videos: [{ titel: 'Überschlagsrechnung, Schätzen (Lehrerschmidt)', youtubeId: '226hdyYW7sg' }],
        karten: [
          { text: 'Plus: Runde beide Zahlen und addiere sie. Das gibt die Grössenordnung. Dann addierst du nur die Einerziffern (die letzten Ziffern). Die letzte Ziffer des Resultats muss dazu passen.\n\n38’902 + 4’115 ≈ 39’000 + 4’000 = 43’000. Einerziffern: 2 + 5 = 7. Resultat: [[mcok|43’017]].' },
          { text: 'Minus: Runde die Zahl, die abgezogen wird.\n\n41’206 − 3’999 ≈ 41’206 − 4’000 = 37’206. Es wurde 1 zu viel abgezogen, also kommt 1 dazu: [[mcok|37’207]].' },
          { text: 'Tipp: Wenn zwei Antworten fast gleich aussehen, entscheidet die Einerziffer. Bei 4’999, 3’999 oder 2’998 gehst du immer zuerst auf die runde Zahl und korrigierst dann kurz.' },
        ],
        check: [
          c('Auf welche Ziffer endet 38’902 + 4’115?', ['7', '2', '5', '3'], '2 + 5 = 7.'),
          c('Wie rechnest du 20’000 − 4’999 am schnellsten?', ['20’000 − 5’000 = 15’000, dann + 1 = 15’001', '20’000 − 5’000 = 15’000, dann − 1 = 14’999', '20’000 − 4’000 = 16’000, dann − 1 = 15’999', '20’000 − 4’999 = 16’001'], '5’000 ist 1 mehr als 4’999. Es wurde 1 zu viel abgezogen, also kommt 1 dazu: 15’001.'),
        ],
      },
      {
        id: 'mc_ma_schaetzen_geteilt', emoji: '➗', titel: 'Schätzen: Geteilt', videos: [{ titel: 'Überschlagsrechnung, Schätzen (Lehrerschmidt)', youtubeId: '226hdyYW7sg' }],
        karten: [
          { text: 'Bei Zahlen mit Endnullen streichst du unten alle Endnullen und oben gleich viele. Dann rechnest du die übrig gebliebene Aufgabe.' },
          { text: '900’000 : 300 → zwei Nullen streichen → 9’000 : 3 = [[mcok|3’000]].\n\n4’800’000 : 600 → zwei Nullen streichen → 48’000 : 6 = [[mcok|8’000]].' },
          { text: 'Probe mit Mal: Resultat · Divisor muss wieder den Dividenden geben. Der Dividend ist die Zahl, die geteilt wird, der Divisor die Zahl, durch die du teilst.' },
        ],
        check: [
          c('720’000 : 90 = ?', ['8’000', '800', '80’000', '7’200'], 'Eine Null streichen: 72’000 : 9 = 8’000.'),
          c('560’000 : 700 = ?', ['800', '8’000', '80', '8’600'], 'Zwei Nullen streichen: 5’600 : 7 = 800.'),
        ],
      },
      {
        id: 'mc_ma_rechnen', emoji: '🧮', titel: 'Rechnen', videos: [],
        karten: [
          { text: 'Die Reihenfolge:\n\n1. [[mcmerk|Klammern]] zuerst.\n2. Dann [[mcmerk|Mal und Geteilt]] (von links nach rechts).\n3. Zuletzt [[mcmerk|Plus und Minus]] (von links nach rechts).' },
          { text: '2 + 3 · 4 = 2 + 12 = [[mcok|14]] (nicht [[mcfalle|20]]).\n(2 + 3) · 4 = 5 · 4 = [[mcok|20]].' },
          { text: 'Bei Termen mit Buchstaben zählst du nur Gleiches zusammen:\n\n5a + 2a = [[mcok|7a]]\n5a + 2 bleibt [[mcok|5a + 2]], denn a und eine Zahl sind nicht gleichartig.' },
          { text: 'Tipp: Schreibe jedes Zwischenresultat auf das Blatt. Im Kopf passieren die meisten Fehler.' },
        ],
        check: [
          c('6 + 4 · 3 = ?', ['18', '30', '13', '24'], 'Mal zuerst: 4 · 3 = 12. Dann 6 + 12 = 18.'),
          c('(6 + 4) · 3 = ?', ['30', '18', '13', '10'], 'Die Klammer zuerst: 10 · 3 = 30.'),
          c('Was ist 5a + 2?', ['5a + 2', '7a', '7', '10a'], 'a und eine Zahl sind nicht gleichartig. Der Term lässt sich nicht weiter zusammenfassen.'),
        ],
      },
      {
        id: 'mc_ma_einheiten', emoji: '📏', titel: 'Einheiten', videos: [{ titel: 'Flächenmasse umrechnen (Lehrerschmidt)', youtubeId: 'bEgBxIdZZLs' }],
        karten: [
          { text: 'Diese Umrechnungen musst du kennen:\n\n[[mcmerk|Volumen]]: 1 l = 10 dl = 100 cl = 1’000 ml\n[[mcmerk|Masse]]: 1 kg = 1’000 g, 1 g = 1’000 mg\n[[mcmerk|Länge]]: 1 m = 100 cm, 1 cm = 10 mm, 1 m = 1’000 mm\n[[mcmerk|Zeit]]: 1 h = 60 min' },
          { text: '5 dl = 0.5 l, denn 10 dl sind 1 l.\n750 g = 0.75 kg.' },
          { text: '[[mcmerk|Flächen]] springen nicht in Zehner-, sondern in Hunderterschritten:\n\n1 m² = 100 dm²\n1 dm² = 100 cm²\n1 cm² = 100 mm²\n\nDarum ist 1 m² = 100 · 100 = 10’000 cm².' },
          { text: 'Für grosse Flächen gibt es zwei Extra-Einheiten:\n\n1 a = 100 m²\n1 ha = 100 a = 10’000 m²\n1 km² = 100 ha\n\nBeispiel: 3 m² = 300 dm².' },
          { text: 'So gehst du vor: Lies, in welcher Einheit das Resultat sein muss. Rechne jede Grösse in diese Einheit um. Zähle erst dann zusammen.\n\nGrössere Einheit, kleinere Zahl (g → kg: durch 1’000). Kleinere Einheit, grössere Zahl (kg → g: mal 1’000).' },
        ],
        check: [
          c('3 dl in l:', ['0.3 l', '30 l', '3 l', '0.03 l'], '10 dl sind 1 l, also 3 dl = 0.3 l.'),
          c('2 kg + 500 g in g:', ['2’500 g', '502 g', '2’050 g', '25’000 g'], '2 kg = 2’000 g. 2’000 + 500 = 2’500.'),
          c('2 m² in cm²:', ['20’000 cm²', '200 cm²', '2’000 cm²', '200’000 cm²'], '1 m² = 10’000 cm². Also 2 m² = 20’000 cm².'),
          c('1.5 h in Minuten:', ['90 min', '150 min', '105 min', '60 min'], '1 h = 60 min, 0.5 h = 30 min. Zusammen 90 min.'),
        ],
      },
      {
        id: 'mc_ma_ordnen', emoji: '↕️', titel: 'Zahlen ordnen', videos: [],
        karten: [
          { text: 'Aufsteigend heisst: vom Kleinsten zum Grössten. Vergleichen kannst du nur, wenn alles in derselben Einheit steht.\n\n2 kg und 1’500 g: 2 kg = 2’000 g, also ist 1’500 g kleiner.' },
          { text: 'Bei negativen Zahlen gilt: Je weiter weg von 0, desto kleiner. [[mcok|−3.45]] ist kleiner als [[mcok|−3.4]].\n\nReihenfolge von −2, −0.5, 0, 0.3: erst die Minuszahlen (−2 ist kleiner als −0.5), dann 0, dann die Pluszahlen.' },
          { text: 'Tipp: Zeichne einen kleinen Zahlenstrahl mit 0 in der Mitte. So siehst du, wo jede Zahl hingehört.' },
        ],
        check: [
          c('Welche Zahl ist die kleinste: −0.5, −2, 0, 0.3?', ['−2', '−0.5', '0', '0.3'], '−2 liegt am weitesten links von 0.'),
          c('Was ist grösser: 1’500 g oder 2 kg?', ['2 kg', '1’500 g', 'Beide sind gleich gross', 'Man kann es nicht vergleichen'], '2 kg = 2’000 g und 2’000 g sind mehr als 1’500 g.'),
        ],
      },
      {
        id: 'mc_ma_prozent', emoji: '％', titel: 'Prozent', videos: [],
        karten: [
          { text: 'Prozent heisst Hundertstel: 1 % ist 1 von 100. 50 % ist die Hälfte, 25 % ein Viertel.' },
          { text: 'Baue den gesuchten Prozentsatz aus Bausteinen:\n\nDer Grundwert ist die Zahl, von der du die Prozente nimmst.\n10 % = Grundwert durch 10\n1 % = Grundwert durch 100\n5 % = die Hälfte von 10 %\n\n10 % von 300 = 30. 5 % von 300 = 15. 25 % von 80 = 20.' },
          { text: '[[mcmerk|Rabatt]]: Der Preis wird kleiner, du ziehst ab.\n[[mcmerk|Aufschlag]]: Der Preis wird grösser, du zählst dazu.\n\nTipp: Viele Fehler entstehen, weil man nur den Rabatt angibt statt den neuen Preis. Lies die Frage zweimal.' },
        ],
        check: [
          c('20 % von 150 = ?', ['30', '15', '20', '3'], '10 % von 150 sind 15. 20 % sind doppelt so viel: 30.'),
          c('Ein Pulli kostet 80 Franken. Er ist 25 % billiger. Was kostet er jetzt?', ['60 Franken', '20 Franken', '55 Franken', '105 Franken'], '25 % von 80 sind 20. 80 − 20 = 60.'),
        ],
      },
      {
        id: 'mc_ma_tempo', emoji: '🚴', titel: 'Weg, Zeit, Tempo', videos: [],
        karten: [
          { text: 'Drei Grössen gehören zusammen:\n\n[[mcmerk|Tempo]] in km/h, [[mcmerk|Weg]] in km und [[mcmerk|Zeit]] in h.\n\nTempo = Weg : Zeit\nZeit = Weg : Tempo\nWeg = Tempo · Zeit' },
          { text: '100 km in 2 h → 100 : 2 = 50 km/h.\n60 km mit 30 km/h → 60 : 30 = 2 h.\n3 h mit 40 km/h → 3 · 40 = 120 km.' },
          { text: 'Minuten in Stunden: 30 min = 0.5 h, 45 min = 0.75 h, 15 min = 0.25 h.' },
          { text: 'So gehst du vor: Schreibe alle Zahlen mit Einheit auf. Zerlege die Geschichte in Etappen und rechne jede einzeln. Pausen zählen zur Gesamtzeit, nicht zur Fahrzeit.' },
        ],
        check: [
          c('150 km in 3 h. Wie schnell ist das Tempo?', ['50 km/h', '450 km/h', '153 km/h', '5 km/h'], 'Tempo = Weg : Zeit = 150 : 3 = 50.'),
          c('Wie weit kommst du in 45 Minuten mit 40 km/h?', ['30 km', '40 km', '45 km', '90 km'], '45 min = 0.75 h. 0.75 · 40 = 30.'),
        ],
      },
      {
        id: 'mc_ma_figuren', emoji: '📐', titel: 'Fläche und Umfang', videos: [],
        karten: [
          { text: '[[mcmerk|Fläche]] ist der Platz innen, in cm². [[mcmerk|Umfang]] ist die Länge rundherum, in cm. Denke an einen Zaun: Der Zaun ist der Umfang.' },
          { text: 'Die Formeln:\n\nQuadrat: Fläche a · a\nRechteck: Fläche a · b\nDreieck: Fläche g · h : 2 (g = Grundseite, h = Höhe)' },
          { text: 'Quadrat mit a = 4 cm: Fläche 16 cm², Umfang 16 cm.\nRechteck 5 cm × 2 cm: Fläche 10 cm², Umfang 2 · (5 + 2) = 14 cm.\nDreieck mit g = 6 cm und h = 4 cm: Fläche 6 · 4 : 2 = 12 cm².' },
        ],
        check: [
          c('Rechteck 8 cm × 5 cm. Wie gross ist die Fläche?', ['40 cm²', '26 cm²', '13 cm²', '40 cm'], '8 · 5 = 40 cm².'),
          c('Rechteck 8 cm × 5 cm. Wie gross ist der Umfang?', ['26 cm', '40 cm', '13 cm', '80 cm'], '2 · (8 + 5) = 26 cm.'),
          c('Dreieck mit g = 10 cm und h = 6 cm. Wie gross ist die Fläche?', ['30 cm²', '60 cm²', '16 cm²', '30 cm'], '10 · 6 : 2 = 30 cm².'),
        ],
      },
      {
        id: 'mc_ma_koerper', emoji: '🧊', titel: 'Körper', videos: [],
        karten: [
          { text: 'Eine Fläche ist eine Aussenseite. Eine Kante ist dort, wo zwei Flächen zusammenstossen. Eine Ecke ist dort, wo mehrere Kanten zusammentreffen. Der Mantel ist die gekrümmte Aussenfläche.' },
          { text: 'Merkhilfen:\n\n[[mcmerk|Würfel]]: 6 Flächen, 12 Kanten, 8 Ecken.\n[[mcmerk|Zylinder]] (Dose): 2 runde Deckflächen und ein gekrümmter Mantel.\n[[mcmerk|Kegel]] (Eistüte): 1 runde Grundfläche und eine Spitze.\n[[mcmerk|Kugel]] (Ball): nur eine runde Fläche, keine Kanten, keine Ecken.' },
          { text: 'Bei Aussagen mit «immer», «alle», «nie» oder «nur» suchst du ein Gegenbeispiel. Ein einziger Fall genügt: Ein Rechteck mit den Seiten 4 cm und 2 cm zeigt, dass «alle Seiten gleich lang» nicht immer stimmt. Eine Skizze macht das sofort sichtbar.' },
        ],
        check: [
          c('Welcher Körper hat zwei runde Deckflächen und einen gebogenen Mantel?', ['Zylinder', 'Kegel', 'Würfel', 'Kugel'], 'Das ist eine Dose: ein Zylinder.'),
          c('Welcher Körper hat 6 Flächen, 12 Kanten und 8 Ecken?', ['Würfel', 'Zylinder', 'Kegel', 'Kugel'], 'Das sind die Merkmale eines Würfels.'),
        ],
      },
      fehler('mc_ma_fehler', [
        ['2 + 3 · 4 = 20', 'Punkt vor Strich: 2 + 12 = 14.'],
        ['Ich verzähle mich bei den Nullen.', 'Zähle die Nullen zuerst, rechne erst danach.'],
        ['Ich gebe nur den Rabatt an.', 'Gefragt ist meist der neue Preis. Lies die Frage zweimal.'],
        ['Von g nach kg rechne ich mal 1’000.', 'Grössere Einheit, kleinere Zahl: durch 1’000.'],
        ['−3.45 ist grösser als −3.4.', 'Je weiter weg von 0, desto kleiner: −3.45 ist kleiner.'],
        ['5a + 2 = 7a', 'a und eine Zahl sind nicht gleichartig. 5a + 2 bleibt 5a + 2.'],
        ['30 min = 0.3 h', '30 min = 0.5 h, denn eine halbe Stunde.'],
      ]),
      dojo('mc_ma_dojo', [
        d('300 · 700 = ?', '210’000', ['21’000', '2’100’000'], '3 · 7 = 21 und 2 + 2 = 4 Nullen.'),
        d('38’902 + 4’115 = ?', '43’017', ['43’007', '42’017'], 'Gerundet 39’000 + 4’000 = 43’000. Einerziffern: 2 + 5 = 7. Also 43’017.'),
        d('900’000 : 300 = ?', '3’000', ['300', '30’000'], 'Zwei Nullen streichen: 9’000 : 3 = 3’000.'),
        d('6 + 4 · 3 = ?', '18', ['30', '13'], 'Mal zuerst: 4 · 3 = 12. Dann 6 + 12 = 18.'),
        d('3 dl in Liter:', '0.3 l', ['30 l', '3 l'], '10 dl sind 1 l, also 3 dl = 0.3 l.'),
        d('25 % von 80 = ?', '20', ['25', '2'], '25 % ist ein Viertel. 80 : 4 = 20.'),
        d('Wie weit kommst du in 45 Minuten mit 40 km/h?', '30 km', ['40 km', '45 km'], '45 min = 0.75 h. 0.75 · 40 = 30.'),
        d('Dreieck mit g = 10 cm und h = 6 cm. Fläche?', '30 cm²', ['60 cm²', '16 cm²'], '10 · 6 : 2 = 30 cm².'),
      ]),
    ],
  },

  // ─── Logik ───────────────────────────────────────────────────────────────
  logik: {
    titel: 'Logik',
    kacheln: [
      {
        id: 'mc_lo_verbal', emoji: '🔗', titel: 'Verbale Analogien', videos: [],
        karten: [
          { text: 'Eine [[mcmerk|Analogie]] sind zwei Wortpaare mit derselben Beziehung. «Hand zu Finger wie Fuss zu ?» fragt: Was ist für den Fuss das, was der Finger für die Hand ist? Die Antwort ist die Zehe.' },
          { text: 'Typische Beziehungen:\n\n[[mcmerk|Gegensatz]]: Sommer und Winter\n[[mcmerk|Teil von]]: Finger und Hand\n[[mcmerk|Werkzeug und Zweck]]: Messer und schneiden\n[[mcmerk|Ursache und Wirkung]]: Regen und nass\n[[mcmerk|Oberbegriff]]: Hund und Tier' },
          { text: 'Vorgehen:\n\n1. Sage die Beziehung der ersten zwei Wörter in einem Satz.\n2. Übertrage den Satz auf das dritte Wort.\n3. Prüfe jede Antwort mit diesem Satz.\n\nBeispiel: «Ein Messer dient zum Schneiden.» Also: «Ein Stift dient zum [[mcok|Schreiben]].»' },
          { text: 'Vorsicht vor Wörtern, die nur zum selben Thema gehören. Bei «Stift» passen Papier und Tinte zum Thema, aber nicht in den Satz «dient zum …». Das ist eine [[mcfalle|Falle]].' },
        ],
        check: [
          c('Welche Beziehung steht bei «Hund zu Tier»?', ['Oberbegriff', 'Gegensatz', 'Werkzeug und Zweck', 'Ursache und Wirkung'], 'Ein Hund ist ein Tier. Tier ist der Oberbegriff.'),
          c('Was machst du zuerst?', ['Die Beziehung der ersten zwei Wörter in einem Satz sagen', 'Das längste Wort wählen', 'Das dritte Wort streichen', 'Die Antwort raten'], 'Erst wenn du die Beziehung kennst, kannst du sie auf das dritte Wort übertragen.'),
          c('Sommer zu Winter wie Tag zu ?', ['Nacht', 'Sonne', 'Woche', 'Licht'], 'Sommer und Winter sind Gegensätze, ebenso Tag und Nacht.'),
        ],
      },
      {
        id: 'mc_lo_zahlen', emoji: '🔢', titel: 'Zahlen im Kopf behalten', videos: [],
        karten: [
          { text: 'Zwei Reihen laufen gleichzeitig: eine oben, eine unten. Jede hat eine Startzahl und Rechenschritte mit + oder –. Am Ende wird nach einer Zahl gefragt.' },
          { text: 'Musterbeispiel:\n\nOben: 1, dann +2, dann –1. Das gibt [[mcok|2]].\nUnten: 5, dann –1, dann –2. Das gibt [[mcok|2]].' },
          { text: 'Halte die Reihen [[mcmerk|getrennt]]. Bei jedem Schritt ändert sich nur die Zahl der Reihe, die gerade dran ist. Wiederhole danach das neue Zwischenergebnis leise. Mit ihm rechnest du weiter.' },
          { text: 'Beispiel: oben 3, unten 8. Dann kommt «+4» oben: du denkst «oben 7, unten 8». Dann «–5» unten: «oben 7, unten 3». Du wiederholst immer beide Zahlen.' },
        ],
        check: [
          c('Oben 4, dann +3. Unten 6, dann –2. Wie heisst die untere Zahl am Ende?', ['4', '7', '3', '8'], '6 – 2 = 4. Die obere Reihe (4 + 3 = 7) ist nicht gefragt.'),
          c('Was machst du nach jedem Rechenschritt?', ['Das neue Zwischenergebnis der Reihe leise wiederholen', 'Die beiden Reihen mischen', 'Die Startzahl vergessen', 'Beide Zahlen zusammenzählen'], 'So behältst du beide Zwischenergebnisse getrennt im Kopf.'),
        ],
      },
      {
        id: 'mc_lo_bilder', emoji: '🖼️', titel: 'Bilder vergleichen', videos: [],
        karten: [
          { text: 'Eine Bildanalogie hat zwei Bildpaare. Das erste Paar zeigt eine [[mcmerk|Regel]]: A wird zu B. Du wendest dieselbe Regel auf das dritte Bild C an und suchst das passende Bild D.' },
          { text: '[[mcmerk|Schritt 1:]] Was ändert sich von A zu B?\n\nPrüfe der Reihe nach: Grösse, Farbe, Muster, Richtung, Spiegelung, Form, innen und aussen, Anzahl.' },
          { text: '[[mcmerk|Schritt 2:]] Mache dasselbe mit C. Ändere nur das, was sich von A zu B geändert hat. Alles andere bleibt gleich.' },
          { text: '[[mcmerk|Schritt 3:]] Prüfe alle sechs Bilder einzeln. [[mcfalle|Falsche Bilder]] machen oft nur die Hälfte richtig, zum Beispiel die richtige Grösse, aber die falsche Farbe.' },
          { text: '[[mcmerk|Grösse:]] Das Bild wird grösser oder kleiner. Form und Füllung bleiben.', bilder: [[fig('circle', 'g', 'w'), fig('circle', 'k', 'w')]] },
          { text: '[[mcmerk|Füllung:]] Eine Form wird weiss, schwarz oder gepunktet. Die Form selbst bleibt.', bilder: [[fig('triangle', 'g', 'w'), fig('triangle', 'g', 'b')]] },
          { text: '[[mcmerk|Muster:]] Eine Schraffur (Streifen) kippt in die andere Richtung.', bilder: [[fig('square', 'g', '/'), fig('square', 'g', '\\')]] },
          { text: '[[mcmerk|Richtung:]] Ein Bild dreht sich, zum Beispiel um 90 Grad im Uhrzeigersinn. Das ist ein Viertel einer ganzen Drehung.', bilder: [[fig('arrow', 'g', 'w', { rot: 0 }), fig('arrow', 'g', 'w', { rot: 90 })]] },
          { text: '[[mcmerk|Spiegelung:]] Ein Teil wechselt auf die andere Seite, wie im Spiegel.', bilder: [[fig('square', 'g', 'w', { attach: { side: 'l', shape: 'triangle' } }), fig('square', 'g', 'w', { attach: { side: 'r', shape: 'triangle' } })]] },
          { text: '[[mcmerk|Form:]] Aus einer Form wird eine andere. Farbe und Grösse bleiben.', bilder: [[fig('square', 'g', 'w'), fig('circle', 'g', 'w')]] },
          { text: '[[mcmerk|Innen und aussen:]] Die innere und die äussere Form tauschen die Plätze.', bilder: [[fig('circle', 'g', 'w', { inner: { shape: 'square' } }), fig('square', 'g', 'w', { inner: { shape: 'circle' } })]] },
          { text: '[[mcmerk|Anzahl:]] Aus einer Form werden zwei oder mehr gleiche Formen.', bilder: [[fig('circle', 'g', 'w'), fig('circle', 'g', 'w', { count: 2 })]] },
        ],
        check: [
          c('Ein grosser Kreis wird zu einem kleinen Kreis. Was ändert sich?', ['Die Grösse', 'Die Form', 'Die Füllung', 'Die Richtung'], 'Nur die Grösse ändert sich. Form und Füllung bleiben gleich.'),
          c('Warum prüfst du alle sechs Bilder?', ['Falsche Bilder machen oft nur einen Teil der Regel richtig', 'Das erste Bild ist immer falsch', 'Alle Bilder sind gleich', 'Das letzte Bild ist immer richtig'], 'Ein falsches Bild kann zum Beispiel die richtige Grösse, aber die falsche Farbe haben.'),
        ],
      },
      fehler('mc_lo_fehler', [
        ['Ich wähle ein Wort, das nur zum Thema passt.', 'Das Wort muss in den Satz mit der Beziehung passen.'],
        ['Ich drehe die Reihenfolge um.', 'Frage zu Antwort ist nicht Antwort zu Frage. Behalte die Richtung des ersten Paars.'],
        ['Ich mische die obere und die untere Reihe.', 'Halte beide Reihen getrennt. Ändere nur die Reihe, die dran ist.'],
        ['Ich vergesse die Startzahl der anderen Reihe.', 'Sage nach jeder Anzeige beide Zahlen leise: «oben 3, unten 5».'],
        ['Ich prüfe bei Bildern nur die Form.', 'Prüfe Grösse, Füllung, Richtung und Anzahl einzeln.'],
        ['Ich lese –2 als +2.', 'Plus macht die Zahl grösser, minus kleiner. Schau aufs Vorzeichen.'],
      ]),
      dojo('mc_lo_dojo', [
        d('Auto zu Strasse wie Zug zu ?', 'Schiene', ['Bahnhof', 'Lokführer'], 'Das Auto fährt auf der Strasse, der Zug auf der Schiene.'),
        d('heiss zu kalt wie hell zu ?', 'dunkel', ['Lampe', 'Licht'], 'Beides sind Gegensätze.'),
        d('Seite zu Buch wie Zimmer zu ?', 'Haus', ['Tür', 'Möbel'], 'Eine Seite ist ein Teil des Buchs, ein Zimmer ein Teil des Hauses.'),
        d('Säge zu sägen wie Pinsel zu ?', 'malen', ['Farbe', 'Wand'], 'Werkzeug und Zweck: Man sägt mit der Säge und malt mit dem Pinsel.'),
        d('Hund zu Tier wie Rose zu ?', 'Blume', ['Dorn', 'Garten'], 'Tier ist der Oberbegriff für Hund, Blume der Oberbegriff für Rose.'),
        d('Sonne zu warm wie Eis zu ?', 'kalt', ['Wasser', 'Winter'], 'Die Sonne macht warm, Eis macht kalt.'),
        d('Oben 3, dann +4. Unten 8, dann –5. Wie heisst die obere Zahl?', '7', ['3', '4'], '3 + 4 = 7. Die untere Reihe ist jetzt 3, aber gefragt ist oben.'),
        d('Oben 6, –2, +3. Unten 2, +5, –1. Wie heisst die untere Zahl am Ende?', '6', ['7', '5'], 'Unten: 2 + 5 = 7, dann 7 – 1 = 6. Oben wäre 6 – 2 + 3 = 7.'),
      ]),
    ],
  },

  // ─── Konzentration ───────────────────────────────────────────────────────
  konz: {
    titel: 'Konzentration',
    kacheln: [
      {
        id: 'mc_ko_zahlen', emoji: '🔢', titel: 'Zahlenreihen vergleichen', videos: [],
        karten: [
          { text: 'Du vergleichst zwei Zahlenreihen und entscheidest: gleich oder nicht gleich. Zuerst zwei Begriffe: Eine [[mcmerk|Ziffer]] ist ein einzelnes Zeichen (0 bis 9). Eine [[mcmerk|Stelle]] ist der Platz einer Ziffer in der Zahl.' },
          { text: 'Lies nicht Ziffer für Ziffer. Teile die Zahl in [[mcmerk|Dreiergruppen]]:\n\n482 615 937\n482 615 397\n\nVergleiche Gruppe mit Gruppe von links nach rechts. Die letzte Gruppe ist anders, also [[mcok|nicht gleich]].' },
          { text: 'Manche Ziffern verwechselt man leicht: 5 und 6, 6 und 8, 8 und 9, 3 und 8. Schau an diesen Stellen zweimal hin.\n\nAuch [[mcfalle|vertauschte Ziffern]] fallen schnell durch: 586 und 568.' },
          { text: 'Nicht raten. Wenn du unsicher bist, schau die Gruppe nochmals an. Arbeite schnell, aber ruhig. [[mcmerk|Genauigkeit vor Tempo]]: Eine schnelle falsche Antwort bringt dir nichts.' },
          { text: 'Zwei Beispiele:\n\n735 190 284 und 735 190 284: [[mcok|gleich]].\n735 190 284 und 735 109 284: [[mcfalle|nicht gleich]], die Ziffern 9 und 0 sind vertauscht.' },
        ],
        check: [
          c('Wie vergleichst du die Zahlenreihen am besten?', ['In Dreiergruppen von links nach rechts', 'Nur die erste Ziffer', 'Die Ziffern raten', 'Nur die letzte Ziffer'], 'Gruppen sind schneller zu überblicken und du übersiehst weniger.'),
          c('Sind 482615937 und 482615397 gleich?', ['Nicht gleich', 'Gleich'], 'Die letzte Dreiergruppe ist anders: 937 und 397.'),
        ],
      },
      {
        id: 'mc_ko_koord', emoji: '📍', titel: 'Koordinaten', videos: [],
        karten: [
          { text: 'Koordinaten sagen dir, wo ein Feld im Raster liegt. Sie bestehen aus zwei Ziffern. Die [[mcmerk|X-Achse]] ist waagrecht und wird von links nach rechts gezählt: 1, 2, 3.' },
          { text: 'Die [[mcmerk|Y-Achse]] ist senkrecht und beginnt [[mcfalle|unten]]: 1 ist die unterste Reihe, 3 die oberste.\n\nDie Reihenfolge ist immer gleich: zuerst X, dann Y.' },
          { text: 'Beispiele: 23 ist Mitte oben, 32 ist rechts in der Mitte, 11 ist links unten, 31 ist rechts unten.', raster: [[2, 3], [3, 2], [1, 1], [3, 1]] },
          { text: 'Merkhilfe: Starte unten links. [[mcmerk|Zuerst nach rechts, dann nach oben.]] Der erste Wert sagt, wie weit du nach rechts gehst, der zweite, wie weit nach oben.' },
        ],
        check: [
          c('Welche Koordinaten hat das Feld ganz links unten?', ['11', '13', '31', '33'], 'Ganz links ist X = 1, ganz unten ist Y = 1.'),
          c('Das rote Feld ist rechts in der Mitte. Welche Koordinaten hat es?', ['32', '23', '31', '12'], 'Rechts ist X = 3, die Mitte ist Y = 2. Zuerst X, dann Y.'),
        ],
      },
      fehler('mc_ko_fehler', [
        ['Ich lese die Zahlen Ziffer für Ziffer.', 'Vergleiche in Dreiergruppen.'],
        ['Ich prüfe nur Anfang und Ende der Zahl.', 'Prüfe alle drei Gruppen, auch die mittlere.'],
        ['Ich nenne zuerst Y und dann X.', 'Immer zuerst X (waagrecht), dann Y (senkrecht).'],
        ['Ich zähle Y von oben.', 'Y beginnt unten: 1 ist die unterste Reihe.'],
      ]),
      dojo('mc_ko_dojo', [
        d('Welche Zahl ist gleich wie 574382916?', '574382916', ['574383916', '574328916'], 'Nur die erste Zahl stimmt in allen drei Gruppen: 574 382 916.'),
        d('Welche Zahl ist gleich wie 902716485?', '902716485', ['902716845', '902761485'], 'In Dreiergruppen: 902 716 485. Bei den anderen sind Ziffern vertauscht.'),
        d('Wie unterscheiden sich 639481275 und 639481725?', 'Zwei Ziffern sind vertauscht', ['Sie sind gleich', 'Die erste Ziffer ist anders'], 'Die letzte Gruppe: 275 und 725. Die Ziffern 2 und 7 sind vertauscht.'),
        d('Sind 481926375 und 481926385 gleich?', 'Nicht gleich: eine Ziffer ist anders', ['Gleich', 'Nicht gleich: die erste Ziffer ist anders'], 'Die letzte Gruppe: 375 und 385. Die 7 ist zur 8 geworden.'),
        d('Das rote Feld ist ganz links unten. Koordinaten?', '11', ['13', '31'], 'Ganz links ist X = 1, ganz unten ist Y = 1.'),
        d('Das rote Feld ist ganz rechts oben. Koordinaten?', '33', ['31', '13'], 'Rechts ist X = 3, oben ist Y = 3.'),
        d('Das rote Feld ist in der Mitte oben. Koordinaten?', '23', ['32', '13'], 'Mitte ist X = 2, oben ist Y = 3. Zuerst X, dann Y.'),
        d('Die Koordinaten sind 31. Wo liegt das Feld?', 'Rechts unten', ['Links oben', 'Rechts oben'], 'X = 3 ist ganz rechts, Y = 1 ist ganz unten.'),
      ]),
    ],
  },
  // ─── Vorstellungsvermögen ────────────────────────────────────────────────
  vorst: {
    titel: 'Vorstellungsvermögen',
    kacheln: [
      {
        id: 'mc_vo_raum', emoji: '🧭', titel: 'Räumliches Sehen', videos: [],
        karten: [
          { text: 'Du siehst ein Brett mit Formen von oben und darüber dieselbe Anordnung von der Seite. Der [[mcmerk|Pfeil]] zeigt, wo der Betrachter steht. Er schaut von dort zur Mitte.', svgs: [{ typ: 'oben', szene: S1, sel: 'S', cap: 'Betrachter unten' }] },
          { text: 'Suche zuerst die [[mcmerk|auffälligste Form]]: den höchsten Körper, den einzigen Zylinder oder die seltene Farbe. Sie hilft dir, die Richtung zu finden.' },
          { text: 'Gleiche links und rechts ab. Wer [[mcok|unten]] steht, behält links links. Wer auf der gegenüberliegenden Seite steht, sieht links und rechts vertauscht.', svgs: [{ typ: 'seite', szene: S1, richtung: 'S', cap: 'Von unten' }, { typ: 'seite', szene: S1, richtung: 'N', cap: 'Von oben' }] },
          { text: 'Vorne und hinten: Was näher beim Betrachter steht, verdeckt das, was dahinter steht. Hier verdeckt der rote Würfel einen Teil des Zylinders.', svgs: [{ typ: 'seite', szene: S2, richtung: 'S', cap: 'Von unten' }] },
          { text: 'Diagonal: Von einer Ecke aus wirkt ein Quadrat [[mcmerk|breiter]], etwa 1,4-mal so breit wie von der Seite.', svgs: [{ typ: 'seite', szene: S3, richtung: 'S', cap: 'Von der Seite' }, { typ: 'seite', szene: S3, richtung: 'SO', cap: 'Von der Ecke' }] },
        ],
        check: [
          c('Der Pfeil unten zeigt nach oben. Wo steht der Betrachter?', ['Unten', 'Oben', 'Links', 'Rechts'], 'Der Betrachter steht auf der Seite des Pfeils und schaut zur Mitte.'),
          c('Der Betrachter wechselt auf die gegenüberliegende Seite. Was geschieht mit links und rechts?', ['Sie werden vertauscht', 'Sie bleiben gleich', 'Nur oben und unten wechseln', 'Es ändert sich nichts'], 'Wer gegenüber steht, sieht alles andersherum: Links wird rechts.'),
        ],
      },
      {
        id: 'mc_vo_netz', emoji: '📦', titel: 'Abwicklungen', videos: [],
        karten: [
          { text: 'Eine [[mcmerk|Abwicklung]] ist ein aufgeklappter Würfel, flach hingelegt. Er hat 6 Flächen.', svgs: [{ typ: 'netz', zellen: NETZ1, cap: 'Abwicklung' }, { typ: 'wuerfel', zellen: NETZ1, ecke: [1, 1, 1], cap: 'Würfel von einer Ecke' }] },
          { text: 'Gegenüberliegende Flächen: In einer Reihe von vier Feldern liegen das [[mcmerk|1. und 3.]] Feld gegenüber, ebenso das [[mcmerk|2. und 4.]] Feld.' },
          { text: 'Gegenüberliegende Flächen sieht man nie gleichzeitig. Zeigt eine Figur zwei solche Muster nebeneinander, ist sie [[mcfalle|falsch]].' },
          { text: 'Wähle eine [[mcmerk|Ecke]] und vergleiche die drei Flächen, die dort zusammenstossen. Prüfe, welches Muster neben welchem liegt.' },
          { text: 'Prüfe die Richtung der Muster. Diagonale, Streifen, Punkt und Dreieck zeigen eine Drehung. Ein gedrehtes Muster ist ein Fehler.' },
          { text: 'Schliesse Falschfiguren aus. Typische Fehler sind ein gedrehtes, ein vertauschtes oder ein ersetztes Muster oder ein Spiegelbild.' },
        ],
        check: [
          c('Welche Felder liegen in einer Reihe von vier Feldern gegenüber?', ['1. und 3.', '1. und 2.', '1. und 4.', '3. und 4.'], 'Jedes zweite Feld liegt gegenüber: das 1. und 3., das 2. und 4.'),
          c('Kann man zwei gegenüberliegende Flächen gleichzeitig sehen?', ['Nein', 'Ja, von einer Ecke', 'Ja, von der Seite', 'Ja, von oben'], 'Von einer Ecke sieht man drei Flächen, die nebeneinander liegen. Gegenüberliegende sind nie dabei.'),
        ],
      },
      fehler('mc_vo_fehler', [
        ['Ich suche die Richtung nur nach der Form.', 'Gleiche auch links und rechts ab.'],
        ['Ich vergesse, dass links und rechts auf der Gegenseite vertauscht sind.', 'Wer gegenüber steht, sieht alles andersherum.'],
        ['Ich übersehe, was verdeckt ist.', 'Was näher beim Betrachter steht, verdeckt das Hintere.'],
        ['Ich achte nur auf das Muster, nicht auf die Richtung.', 'Prüfe, ob Diagonale, Streifen, Punkt und Dreieck gleich gedreht sind.'],
        ['Ich wähle eine Figur mit zwei gegenüberliegenden Mustern.', 'Gegenüberliegende Flächen sieht man nie zusammen.'],
      ]),
      dojo('mc_vo_dojo', [
        d('Der Pfeil unten zeigt nach oben. Wo steht der Betrachter?', 'Unten', ['Oben', 'In der Mitte'], 'Der Betrachter steht auf der Seite des Pfeils und schaut zur Mitte.'),
        d('Ein Körper steht links vom Betrachter. Der Betrachter geht auf die gegenüberliegende Seite. Wo steht der Körper jetzt?', 'Rechts', ['Links', 'Hinten'], 'Auf der Gegenseite werden links und rechts vertauscht.'),
        d('Welche Form verdeckt die andere?', 'Die Form, die näher beim Betrachter steht', ['Die höhere Form', 'Die rote Form'], 'Was näher steht, verdeckt das, was dahinter steht.'),
        d('Ein Würfel wird von einer Ecke aus betrachtet. Wie wirkt er?', 'Breiter als von der Seite', ['Schmaler als von der Seite', 'Gleich breit'], 'Von der Ecke sieht man die Diagonale, sie ist etwa 1,4-mal so breit.'),
        d('Welche Felder liegen in einer Reihe von vier Feldern gegenüber?', '1. und 3.', ['1. und 2.', '1. und 4.'], 'Jedes zweite Feld liegt gegenüber.'),
        d('Wie viele Flächen eines Würfels sieht man höchstens gleichzeitig?', '3', ['4', '6'], 'Von einer Ecke aus sieht man drei Flächen.'),
        d('Kann man zwei gegenüberliegende Flächen gleichzeitig sehen?', 'Nein', ['Ja, von einer Ecke', 'Ja, von der Seite'], 'Gegenüberliegende Flächen sind nie gleichzeitig sichtbar.'),
        d('Auf einer Figur ist die Diagonale gedreht, auf der Abwicklung nicht. Was heisst das?', 'Die Figur ist falsch', ['Die Figur ist richtig', 'Das spielt keine Rolle'], 'Die Richtung der Muster muss stimmen.'),
      ]),
    ],
  },
  // ─── Vernetztes Denken ───────────────────────────────────────────────────
  vernetzt: {
    titel: 'Vernetztes Denken',
    kacheln: [
      {
        id: 'mc_vn_dokumente', emoji: '📑', titel: 'Dokumente verbinden', videos: [],
        karten: [
          { text: 'Du hast drei Dokumente. Die [[mcmerk|Produktbeschreibung]] nennt die Namen der Teile. Die [[mcmerk|Montageanleitung]] und die [[mcmerk|Teileliste]] zeigen nur Nummern. Darum musst du Name und Nummer verbinden.' },
          { text: '[[mcmerk|Schritt 1:]] Suche den Namen in der Produktbeschreibung und merke dir die Nummer.\n[[mcmerk|Schritt 2:]] Suche die Nummer in der Montageanleitung oder in der Teileliste.\n[[mcmerk|Schritt 3:]] Prüfe, ob deine Antwort zur Frage passt.' },
          { text: 'Lies nicht alles. Du suchst nur die Zeile, die du brauchst.' },
          {
            text: 'Beispiel: In welchem Schritt wird der Holzleim gebraucht? Der Holzleim hat die Nummer 08. Die Nummer 08 steht in Schritt 3.',
            tabellen: [
              { titel: 'Produktbeschreibung', kopf: ['Nr.', 'Name'], zeilen: [['08', 'Holzleim']] },
              { titel: 'Montageanleitung', kopf: ['Schritt', 'Teile'], zeilen: [['3', '05 · 2x, 08 · 1x']] },
              { titel: 'Teileliste', kopf: ['Nr.', 'Menge'], zeilen: [['08', '1x']] },
            ],
          },
        ],
        check: [
          c('Wo steht der Name eines Teils?', ['In der Produktbeschreibung', 'In der Teileliste', 'In der Montageanleitung', 'Nirgends'], 'Nur die Produktbeschreibung nennt die Namen. Die anderen zeigen Nummern.'),
          c('Du kennst die Nummer eines Teils. Wo siehst du, in welchem Schritt es gebraucht wird?', ['In der Montageanleitung', 'In der Teileliste', 'In der Produktbeschreibung', 'Gar nicht'], 'Die Montageanleitung ordnet die Nummern den Schritten zu.'),
        ],
      },
      {
        id: 'mc_vn_mengen', emoji: '🧮', titel: 'Mengen und Masse', videos: [],
        karten: [
          { text: 'Eine [[mcmerk|Menge]] sagt, wie viele Teile du brauchst, zum Beispiel 10x. Ein [[mcmerk|Mass]] sagt, wie lang, breit oder hoch etwas ist, zum Beispiel 25 cm.' },
          { text: 'Mengen zusammenzählen: Schritt 1 braucht 6 Schrauben, Schritt 2 braucht 4. Zusammen sind das 10. Vergleiche mit der Teileliste: Dort steht 10x.' },
          { text: 'Masse addieren: Ein Brett ist 2 cm dick, die Seitenwand darauf ist 25 cm hoch. Zusammen sind es 27 cm. Achte immer auf die [[mcmerk|Einheit]] (cm, mm, Liter).' },
          { text: 'Rechne nur mit gleichen Teilen und gleichen Einheiten. [[mcfalle|Falle:]] Schrauben und Bretter darfst du nicht zusammenzählen, ebenso nicht cm und mm.' },
        ],
        check: [
          c('Schritt 1 braucht 6 Schrauben, Schritt 2 braucht 4. Wie viele sind es zusammen?', ['10', '6', '4', '24'], '6 + 4 = 10. Die Teileliste zeigt dieselbe Gesamtmenge.'),
          c('Ein Brett ist 2 cm dick und eine Wand darauf ist 25 cm hoch. Wie hoch sind beide zusammen?', ['27 cm', '23 cm', '50 cm', '25 cm'], '2 + 25 = 27 cm.'),
        ],
      },
      {
        id: 'mc_vn_aussagen', emoji: '✅', titel: 'Aussagen prüfen', videos: [],
        karten: [
          { text: 'Bei «Welche Aussage ist korrekt?» ist genau eine Aussage richtig. Prüfe jede Aussage einzeln mit den Dokumenten.' },
          { text: 'Bei «Welche Aussage ist falsch?» sind drei Aussagen richtig. Schliesse sie nacheinander aus. Die übrige Aussage ist falsch.' },
          { text: 'Vergleiche die Zahlen in der Aussage mit den Dokumenten: Schritt, Menge, Mass. Oft ist nur eine Zahl verändert. [[mcfalle|Achtung:]] Die Aussage klingt richtig, nur die Zahl stimmt nicht.' },
        ],
        check: [
          c('Bei «Welche Aussage ist falsch?»: Wie viele Aussagen sind richtig?', ['Drei', 'Eine', 'Alle vier', 'Keine'], 'Drei Aussagen stimmen, eine ist falsch.'),
          c('Was prüfst du bei jeder Aussage?', ['Die Zahlen und Namen mit den Dokumenten', 'Nur die erste Aussage', 'Nur die längste Aussage', 'Nichts, du rätst'], 'Jede Aussage wird einzeln mit den Dokumenten verglichen.'),
        ],
      },
      fehler('mc_vn_fehler', [
        ['Ich suche den Namen in der Montageanleitung.', 'Dort stehen nur Nummern. Den Namen findest du in der Produktbeschreibung.'],
        ['Ich nehme die Menge eines einzelnen Schritts.', 'Gefragt ist oft die Gesamtmenge. Zähle alle Schritte zusammen oder lies die Teileliste.'],
        ['Ich nehme bei «falsch» die erste passende Aussage.', 'Prüfe alle vier Aussagen. Nur eine ist falsch.'],
        ['Ich rechne cm und mm zusammen.', 'Achte auf die Einheit und rechne nur gleiche Einheiten zusammen.'],
        ['Ich verwechsle Teile mit ähnlichem Namen.', 'Prüfe die Nummer. Holzschrauben mit verschiedenen Massen sind verschiedene Teile.'],
      ]),
      dojo('mc_vn_dojo', [
        d('Wo findest du den Namen eines Teils?', 'In der Produktbeschreibung', ['In der Teileliste', 'In der Montageanleitung'], 'Nur die Produktbeschreibung nennt die Namen.'),
        d('Wo steht, in welchem Schritt ein Teil gebraucht wird?', 'In der Montageanleitung', ['In der Teileliste', 'In der Produktbeschreibung'], 'Die Montageanleitung ordnet die Teile den Schritten zu.'),
        d('Wo steht die Gesamtmenge eines Teils?', 'In der Teileliste', ['In der Montageanleitung', 'Nur in der Frage'], 'Die Teileliste zeigt die Gesamtmenge. Die Montageanleitung zeigt die Menge pro Schritt.'),
        d('Schritt 1 braucht 6 Schrauben, Schritt 2 braucht 4. Gesamtmenge?', '10', ['6', '24'], '6 + 4 = 10.'),
        d('Ein Brett ist 2 cm dick, ein Brett darauf 25 cm hoch. Wie hoch sind beide zusammen?', '27 cm', ['23 cm', '50 cm'], '2 + 25 = 27 cm.'),
        d('In einer Frage steht «Welche Aussage ist falsch?». Wie viele Aussagen sind richtig?', 'Drei', ['Eine', 'Alle vier'], 'Drei Aussagen stimmen, nur eine ist falsch.'),
        d('In einer Frage steht «Welche Aussage ist korrekt?». Wie viele Aussagen sind richtig?', 'Eine', ['Drei', 'Keine'], 'Genau eine Aussage stimmt.'),
        d('Du hast bei «Holzleim» die Nummer 08 gefunden. Was tust du als Nächstes?', 'Ich suche 08 in der Montageanleitung oder der Teileliste', ['Ich lese alle Dokumente von Anfang an', 'Ich suche «Holzleim» in der Teileliste'], 'In Anleitung und Teileliste stehen nur Nummern.'),
      ]),
    ],
  },
  // ─── Merkfähigkeit ───────────────────────────────────────────────────────
  merk: {
    titel: 'Merkfähigkeit',
    kacheln: [
      {
        id: 'mc_me_pikto', emoji: '🖼️', titel: 'Piktogramme merken', videos: [],
        karten: [
          { text: 'Ein [[mcmerk|Piktogramm]] ist ein einfaches Bild, das für etwas steht. In der Lernphase siehst du mehrere. Später entscheidest du bei jedem Bild: schon gesehen oder neu?', symbole: ['schiff', 'hund', 'burg'] },
          { text: '[[mcmerk|Tipp 1:]] Nenne jedes Bild in einem Wort, zum Beispiel Schiff, Hund, Burg. Mit Wörtern merkt man sich Bilder leichter.' },
          { text: '[[mcmerk|Tipp 2:]] Verbinde die Bilder zu einer kurzen Geschichte: Der Hund fährt mit dem Schiff zur Burg.' },
          { text: '[[mcmerk|Tipp 3:]] Achte bei jedem Bild auf ein Detail, das es besonders macht.' },
          { text: '[[mcfalle|Achtung:]] Neue Bilder können alten ähnlich sehen. Auto und Lastwagen sind zwei verschiedene Bilder. Prüfe genau.', symbole: ['auto', 'lastwagen'] },
          { text: 'Wenn du bei einem Bild unsicher bist, grüble nicht zu lange. Entscheide nach deinem ersten Gefühl und gehe weiter.' },
        ],
        check: [
          c('Welcher Tipp hilft beim Merken von Bildern?', ['Jedes Bild in einem Wort benennen', 'Nur die Farbe merken', 'Die Bilder nicht anschauen', 'Alle Bilder gleich nennen'], 'Ein Wort pro Bild gibt dem Bild einen Anker im Kopf.'),
          c('In der Lernphase kam ein Auto vor. Jetzt siehst du einen Lastwagen. Was ist richtig?', ['Der Lastwagen ist neu', 'Der Lastwagen war schon dabei', 'Auto und Lastwagen sind dasselbe Bild', 'Das kann man nicht entscheiden'], 'Auto und Lastwagen sehen ähnlich aus, sind aber zwei verschiedene Bilder.'),
        ],
      },
      {
        id: 'mc_me_text', emoji: '📄', titel: 'Text merken', videos: [],
        karten: [
          { text: 'Zu [[mcmerk|Zahlen, Namen und Orten]] kann man gut Fragen stellen. Merke sie dir beim Lesen gezielt.' },
          { text: 'Bilde pro Absatz einen [[mcmerk|Kernsatz]]. Das ist ein kurzer Satz, der den Absatz zusammenfasst.' },
          { text: 'Stell dir ein Raster im Kopf vor: [[mcmerk|Wer? Was? Wann? Wo? Warum?]] Fülle es beim Lesen mit Stichwörtern.' },
          { text: 'Lies nicht zu hastig. Wer zu schnell liest, überliest Zahlen und Namen. [[mcfalle|Falle:]] Falsche Antworten klingen möglich, stehen aber nicht im Text.' },
        ],
        check: [
          c('Was ist ein Kernsatz?', ['Ein kurzer Satz, der einen Absatz zusammenfasst', 'Der erste Satz des Textes', 'Ein Satz mit vielen Zahlen', 'Der längste Satz'], 'Ein Kernsatz fasst den Inhalt eines Absatzes kurz zusammen.'),
          c('Eine Antwort klingt gut, steht aber nicht im Text. Was tust du?', ['Ich wähle sie nicht', 'Ich wähle sie trotzdem', 'Ich rate', 'Ich wähle die längste Antwort'], 'Die richtige Antwort lässt sich im Text belegen.'),
        ],
      },
      fehler('mc_me_fehler', [
        ['Ich schaue die Bilder nur kurz an.', 'Nenne jedes Bild in einem Wort.'],
        ['Ich halte ähnliche Bilder für dasselbe.', 'Auto und Lastwagen sind verschieden. Prüfe genau.'],
        ['Ich lese den Text hastig.', 'Lies ruhig und merke dir Zahlen, Namen und Orte.'],
        ['Ich wähle die Antwort, die gut klingt.', 'Die richtige Antwort steht im Text.'],
        ['Ich grüble zu lange bei einem Bild.', 'Entscheide nach dem ersten Gefühl und gehe weiter.'],
      ]),
      dojo('mc_me_dojo', [
        d('Du hast ein Bild in der Lernphase nicht gesehen. Was wählst du?', 'NEIN', ['JA', 'Weder noch'], 'Ein Bild, das nicht gezeigt wurde, ist neu: NEIN.'),
        d('Welcher Tipp hilft beim Merken von Bildern?', 'Jedes Bild in einem Wort benennen', ['Die Bilder schnell ansehen', 'Nur die Farbe merken'], 'Wörter und Geschichten helfen dem Gedächtnis.'),
        d('In der Lernphase kam ein Auto vor. Jetzt siehst du einen Lastwagen. Was ist richtig?', 'Der Lastwagen ist neu', ['Der Lastwagen war dabei', 'Auto und Lastwagen sind gleich'], 'Es sind zwei verschiedene Bilder.'),
        d('Was ist ein Kernsatz?', 'Ein kurzer Satz, der einen Absatz zusammenfasst', ['Der erste Satz des Textes', 'Ein Satz mit Zahlen'], 'Der Kernsatz fasst den Absatz kurz zusammen.'),
        d('Welche Angaben merkst du dir gezielt?', 'Zahlen, Namen und Orte', ['Nur das Ende', 'Nur die Überschrift'], 'Dazu lassen sich gut Fragen stellen.'),
        d('Eine Antwort klingt gut, steht aber nicht im Text. Was tust du?', 'Ich wähle sie nicht', ['Ich wähle sie trotzdem', 'Ich rate'], 'Die richtige Antwort steht im Text.'),
        d('Was ist das Raster «Wer? Was? Wann? Wo? Warum?»?', 'Fragen, die man sich beim Lesen stellt', ['Eine Liste von Namen', 'Eine Rechenhilfe'], 'Mit den Fragen ordnest du den Inhalt im Kopf.'),
        d('Du bist bei einem Bild unsicher. Was tust du?', 'Ich entscheide nach dem ersten Gefühl', ['Ich grüble mehrere Minuten', 'Ich lasse es leer'], 'Nicht zu lange grübeln, sondern weitergehen.'),
      ]),
    ],
  },
  // ─── Textschreiben ───────────────────────────────────────────────────────
  schreiben: {
    titel: 'Textschreiben',
    kacheln: [
      {
        id: 'mc_sc_ordnen', emoji: '🧭', titel: 'Gedanken ordnen', videos: [],
        karten: [
          { text: 'Wähle das Thema, zu dem dir am meisten einfällt. Das ist oft nicht das schwierigste, sondern das, bei dem du gleich ein Beispiel findest.' },
          { text: 'Sammle vor dem Schreiben [[mcmerk|3 Stichwörter]]. Sie sind dein Gerüst und verhindern, dass du mitten im Text nicht mehr weiterweisst.' },
          { text: 'Baue den Text in drei Teilen auf:\n\n[[mcmerk|Einleitung]]: Worum geht es?\n[[mcmerk|Hauptteil]]: Deine Gedanken.\n[[mcmerk|Schluss]]: Ein kurzes Fazit.' },
          { text: 'Gib ein [[mcmerk|Beispiel]]. Ein kleines Erlebnis macht deine Aussage anschaulich.' },
          { text: 'Begründe mit «[[mcmerk|weil]]»: Ich mag den Fluss, weil es dort ruhig ist.' },
          { text: 'Mini-Beispiel:\n\nStichwörter: ruhig, Fluss, nachdenken.\nSätze: [[mcok|Ich mag den Fluss, weil es dort ruhig ist. Dort kann ich gut nachdenken.]]' },
        ],
        check: [
          c('Was machst du vor dem Schreiben?', ['3 Stichwörter sammeln', 'Sofort den Schluss schreiben', 'Alles auswendig lernen', 'Das Thema nicht wählen'], 'Stichwörter geben dir ein Gerüst für den Text.'),
          c('Welches Wort hilft beim Begründen?', ['weil', 'und dann', 'aber', 'oder'], 'Mit «weil» zeigst du den Grund für deine Meinung.'),
        ],
      },
      {
        id: 'mc_sc_formulieren', emoji: '💬', titel: 'Gut formulieren', videos: [],
        karten: [
          { text: 'Schreibe [[mcmerk|kurze, klare Sätze]]. Ein Gedanke pro Satz ist leichter zu lesen.' },
          { text: 'Vermeide Wiederholungen. Statt dreimal «sehr gut» kannst du schreiben: toll, hilfreich, angenehm.' },
          { text: '[[mcmerk|Verbindungswörter]] verbinden Sätze: denn, deshalb, ausserdem, trotzdem.' },
          { text: 'Beginne nicht alle Sätze gleich. Statt immer mit «Ich» kannst du mit einem Ort oder einer Zeit anfangen.' },
          { text: 'Vorher:\n❌ Ich gehe gern an den Fluss. Ich gehe gern dorthin, weil es schön ist. Ich bin dort oft.\n\nNachher:\n✅ Am Fluss fühle ich mich wohl, denn es ist dort ruhig. Deshalb bin ich oft dort.' },
          { text: 'Vorher:\n❌ Ich lese. Ich schreibe. Ich zeichne.\n\nNachher:\n✅ Nach der Schule lese ich gern. Am Abend schreibe ich oder zeichne.' },
        ],
        check: [
          c('Welches Wort ist ein Verbindungswort?', ['deshalb', 'Fluss', 'schnell', 'gestern'], 'Verbindungswörter wie «deshalb» verknüpfen zwei Sätze.'),
          c('Wie vermeidest du Wiederholungen?', ['Andere Wörter verwenden', 'Den Satz zweimal schreiben', 'Weniger denken', 'Keine Sätze schreiben'], 'Mit anderen Wörtern klingt der Text abwechslungsreicher.'),
        ],
      },
      {
        id: 'mc_sc_fehler_vermeiden', emoji: '🔎', titel: 'Fehler vermeiden', videos: [],
        karten: [
          { text: 'Lies deinen Text zum Schluss [[mcmerk|noch einmal]], am besten laut. So hörst du Fehler, die du beim Schreiben überliest.' },
          { text: '[[mcmerk|Gross- und Kleinschreibung]]: Nomen und Satzanfänge schreibst du gross.' },
          { text: '[[mcmerk|das oder dass]]: «das» kannst du oft durch «dieses» ersetzen. «dass» leitet einen Nebensatz ein: Ich weiss, [[mcok|dass]] es regnet.' },
          { text: '[[mcmerk|Satzzeichen]]: Am Satzende steht ein Punkt. Vor «weil» und «dass» steht ein Komma.' },
          { text: '[[mcmerk|Zahlen]]: Schreibe Zahlen einheitlich. Kleine Zahlen oft als Wort (drei), grosse als Ziffern (1500).' },
        ],
        check: [
          c('Welcher Satz ist richtig geschrieben?', ['Ich weiss, dass du kommst.', 'Ich weiss, das du kommst.', 'Ich weiss dass, du kommst.', 'ich weiss, dass du kommst.'], 'Nach «weiss» folgt ein Komma und «dass» leitet den Nebensatz ein. Der Satz beginnt gross.'),
          c('Wie liest du deinen Text am besten zum Schluss?', ['Laut und noch einmal', 'Gar nicht', 'Nur den Anfang', 'Nur die Überschrift'], 'Beim lauten Lesen fallen Fehler auf.'),
        ],
      },
      fehler('mc_sc_fehler', [
        ['Ich fange gleich an und denke nicht nach.', 'Sammle zuerst 3 Stichwörter.'],
        ['Ich schreibe «weil» ohne Komma.', 'Vor «weil» steht ein Komma.'],
        ['Ich schreibe «dass» immer mit einem s.', 'Kann ich «dieses» einsetzen? Dann «das». Sonst «dass».'],
        ['Ich lese meinen Text nicht mehr.', 'Lies ihn zum Schluss laut.'],
        ['Ich beginne jeden Satz mit «Ich».', 'Wechsle die Satzanfänge.'],
      ]),
      dojo('mc_sc_dojo', [
        d('Welches Wort verwendest du zum Begründen?', 'weil', ['dann', 'oder'], 'Mit «weil» nennst du den Grund.'),
        d('Was gehört in den Schluss?', 'Ein kurzes Fazit', ['Eine neue Geschichte', 'Eine Zahlenliste'], 'Der Schluss fasst kurz zusammen.'),
        d('Welcher Satz ist richtig?', 'Ich weiss, dass es regnet.', ['Ich weiss, das es regnet.', 'Ich weiss dass, es regnet.'], 'Nach dem Komma leitet «dass» den Nebensatz ein.'),
        d('Wie viele Stichwörter sammelst du vor dem Schreiben?', 'Drei', ['Keine', 'Hundert'], 'Drei Stichwörter geben ein gutes Gerüst.'),
        d('Welches Wort ist ein Verbindungswort?', 'deshalb', ['gestern', 'Fluss'], '«deshalb» verbindet zwei Sätze.'),
        d('Was machst du am Schluss mit deinem Text?', 'Ich lese ihn nochmals laut', ['Ich schicke ihn sofort ab', 'Ich lösche ihn'], 'Beim lauten Lesen findest du Fehler.'),
        d('Was macht ein Beispiel im Text?', 'Es macht deine Aussage anschaulich', ['Es macht den Text kürzer', 'Es ersetzt den Schluss'], 'Ein Beispiel zeigt, was du meinst.'),
        d('Womit beginnst du einen Text am besten?', 'Mit einer Einleitung, worum es geht', ['Mit dem Schluss', 'Mit einer Liste'], 'Die Einleitung sagt, worum es geht.'),
      ]),
    ],
  },
};
