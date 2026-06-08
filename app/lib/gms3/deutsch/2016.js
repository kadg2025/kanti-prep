// app/lib/gms3/deutsch/2016.js
// Aufnahmeprüfung 2016 – Deutsch GMS 3 (Pädagogische Maturitätsschule Kreuzlingen)
// Grundlage: Alfred Andersch, «Tochter» (Textauszug)

export const questions2016 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D3_2016_TEXTVERST_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=1',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Der Vater hätte sich gut eine Flugreise leisten können.
2. Herrn Wenger ist es unangenehm, dass er am Hafen von Calais von Thérèse „Daddy" genannt wird.
3. Erst als sie den Kanal überqueren, sehen sie die englische Küste.
4. Vor den Häusern flattern die Handtücher im Wind.
5. Thérèse und ihr Vater reisen in den Weihnachtsferien gemeinsam nach England.
6. Herr Wenger zieht einen Theaterbesuch in London in Betracht.
7. Vater und Tochter haben ein Privatabteil.
8. Thérèse sagt ihrem Vater, er solle nicht immer so laut schreien.
9. Thérèse muss mit einer dunklen Masse in ihrem Haar kämpfen.
10. Vor der Überfahrt spricht Thérèse von ihrer Mutter.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 1, 2, 6, 10 | stimmt nicht: 3, 4, 5, 7, 8, 9',
        correct: true,
      },
      {
        label: 'stimmt: 1, 2, 5, 6, 9 | stimmt nicht: 3, 4, 7, 8, 10',
        correct: false,
      },
      {
        label: 'stimmt: 2, 3, 6, 8, 10 | stimmt nicht: 1, 4, 5, 7, 9',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: Textverständnis-Aufgaben lösen',
          content: `Bei «stimmt / stimmt nicht»-Aufgaben musst du jede Aussage direkt im Text belegen.
→ Suche zuerst die Textstelle, die zur Aussage passt.
→ Vergleiche dann genau: Stimmt der Inhalt 100% überein, oder gibt es einen kleinen Unterschied?
→ Häufige Falle: Der Satz klingt fast richtig, aber ein Detail ist verdreht (z.B. «erst als sie den Kanal überqueren» – sie sehen die Küste aber schon AUF DECK, bevor sie voll überquert haben).`,
        },
        {
          title: 'Auflösung der 10 Aussagen',
          content: `1. ✅ stimmt – Er selbst überlegt am Ende, er «hätte mit ihr fliegen sollen» (Z. 50) → er hätte es sich leisten können.
2. ✅ stimmt – «es war Wenger peinlich, dass Thérèse ihn so laut … mit Daddy anredete» (Z. 38).
3. ❌ stimmt nicht – Sie sehen die englische Küste, als sie «auf Deck standen» (Z. 44), also schon auf dem Schiff, nicht erst beim Überqueren.
4. ❌ stimmt nicht – Im Text sind die Häuser «handtuchschmal» (Z. 25), nicht Handtücher, die flattern.
5. ❌ stimmt nicht – Es sind die Osterferien/Schulferien, nicht explizit Weihnachtsferien. Der Text nennt «Weihnachtsferien» als Grund, warum sie mit dem Zug reisen sollten (Z. 4) – aber die aktuelle Reise ist, Thérèse nach Oxford zu bringen (Z. 11).
6. ✅ stimmt – «Vielleicht würde er … ins Theater gehen» (Z. 10–11).
7. ❌ stimmt nicht – Sie hatten ein Liegewagenabteil, kein Privatabteil; ein anderer Fahrgast stieg zu (Z. 6–8).
8. ❌ stimmt nicht – Es ist umgekehrt: Der Vater sagt Thérèse, sie solle nicht so laut «Daddy» rufen (Z. 37).
9. ❌ stimmt nicht – Thérèse kämpft mit ihrem dunklen Haar beim Frisieren (Z. 16–17), nicht mit einer «Masse in ihrem Haar».
10. ✅ stimmt – Thérèse sagt am Ende: «Schade, dass Mammi das nicht sehen kann!» (Z. 53) – das ist noch vor Ankunft in England, also vor / während der Überfahrt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Aussage lesen → Textstelle suchen (Zeilennummer hilft!)
2️⃣  Nicht nach «Gefühl» urteilen – nur was direkt im Text steht, zählt
3️⃣  Auf Details achten: Wer sagt was zu wem? Wann passiert es genau?
4️⃣  Bei «fast richtig» → stimmt NICHT (eine Falschheit reicht)`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D3_2016_WORTSCHATZ_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 2 (1 Punkt): Suche für den unterstrichenen Teil eine entsprechende Wendung.

«Sie unterbrach sich höchstens eine Sekunde.» [Z. 30]

Was bedeutet das sinngemäss?`,

    options: [
      {
        label: 'Sie redete praktisch pausenlos / ohne Unterbrechung weiter.',
        correct: true,
      },
      {
        label: 'Sie hörte für eine kurze Pause auf zu reden.',
        correct: false,
      },
      {
        label: 'Sie wartete eine Sekunde, bevor sie antwortete.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Paraphrase / sinngemässe Umschreibung',
          content: `Eine Paraphrase gibt denselben Inhalt mit anderen Worten wieder.
→ «höchstens eine Sekunde» = kaum / fast gar nicht → sie unterbrach sich praktisch nie.
→ Mögliche Wendungen: «redete pausenlos», «ohne Punkt und Komma», «redete wie ein Wasserfall», «liess sich nicht unterbrechen».`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verstehe den Kontext: Was macht Thérèse in dieser Szene? (Sie redet begeistert.)
2️⃣  «höchstens eine Sekunde» = fast keine Pause → Wendung muss «pausenlos» ausdrücken
3️⃣  Akzeptierte Antworten: «redete pausenlos», «ohne Punkt und Komma», «wie ein Wasserfall»`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D3_2016_WORTSCHATZ_2',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Bedeutungsgleiche Wörter finden.

Teil A: «…wenn er Thérèse in Oxford abgeliefert hatte…» [Z. 11]
Welche der folgenden Wörter entsprechen inhaltlich dem Wort «abgeliefert»?
→ abgeholt / abgesetzt / abgemahnt / vermittelt / ausgesetzt / übergeben

Teil B: «…unter einem Publikum aus reisenden Engländern…» [Z. 41]
Welche Wörter entsprechen hier «Publikum»?
→ Zuschauer / Zuhörer / Fans / Öffentlichkeit

Welche Kombination ist korrekt?`,

    options: [
      {
        label: 'A: abgesetzt, übergeben | B: Öffentlichkeit',
        correct: true,
      },
      {
        label: 'A: abgeholt, ausgesetzt | B: Zuschauer, Zuhörer',
        correct: false,
      },
      {
        label: 'A: vermittelt, übergeben | B: Fans, Öffentlichkeit',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Sinnverwandte Wörter (Synonyme im Kontext)',
          content: `Nicht alle Synonyme passen in jeden Satz — der Kontext entscheidet.
«abgeliefert» = jemanden an einem Ort abgeben / hinbringen:
→ ✅ abgesetzt (= jemanden irgendwo rauslassen, z.B. aus dem Auto)
→ ✅ übergeben (= die Verantwortung/Person formell weitergeben)
→ ❌ abgeholt = das Gegenteil! (jemanden holen, nicht bringen)
→ ❌ ausgesetzt = hat negative/gefährliche Konnotation
→ ❌ abgemahnt = rechtlicher Begriff, passt nicht

«Publikum» im Kontext = zufällige Menge von Leuten, die zuhören/zusehen könnten:
→ ✅ Öffentlichkeit (= Leute um einen herum, die es mitbekommen)
→ ❌ Zuschauer / Zuhörer = zu spezifisch (Theaterkontext)
→ ❌ Fans = passt überhaupt nicht`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Setze jedes Wort probeweise in den Satz ein → klingt es natürlich?
2️⃣  Achte auf Konnotation (positiv/negativ/neutral) – «ausgesetzt» klingt gefährlich
3️⃣  «abgeholt» ist die häufigste Falle – es ist das GEGENTEIL von abgeliefert`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D3_2016_WORTSCHATZ_3',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 4 (2 Punkte): Synonyme und Antonyme finden.

Teil A: «…es war Wenger peinlich, dass Thérèse ihn so laut … mit Daddy anredete.» [Z. 38]
Suche für «peinlich» ein anderes Wort mit entsprechender Bedeutung.

Teil B: «Mammi und du, ihr seid überhaupt keine Spiesser.» [Z. 30]
Suche für «überhaupt» ein Wort oder eine Wendung mit entsprechender Bedeutung.

Welche Antwort ist korrekt?`,

    options: [
      {
        label: 'A: unangenehm / genierlich | B: wirklich / gar / wahrhaftig',
        correct: true,
      },
      {
        label: 'A: lustig / amüsant | B: eigentlich / anscheinend',
        correct: false,
      },
      {
        label: 'A: störend / lästig | B: sowieso / trotzdem',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Synonym (bedeutungsgleiches Wort)',
          content: `«peinlich» in diesem Kontext = etwas, das einem unangenehm ist, weil es andere sehen oder hören.
→ ✅ unangenehm (neutrales Synonym, passt gut in den Satz)
→ ✅ genierlich (schweizerdeutsch/österreichisch, = sich genieren = sich schämen)
→ ❌ störend = zu schwach, trifft den emotionalen Gehalt nicht genau

«überhaupt» in «ihr seid überhaupt keine Spiesser» = Verstärkung der Verneinung:
→ ✅ wirklich / wahrhaftig / gar (= «absolut keine»)
→ ❌ eigentlich = andere Bedeutungsnuance (bedeutet eher «grundsätzlich»)
→ ❌ sowieso = falsche Bedeutungsrichtung`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Synonym: Wort in den Originalsatz einsetzen → macht es Sinn ohne Bedeutungsänderung?
2️⃣  «peinlich» → unangenehm (immer sichere Wahl)
3️⃣  «überhaupt» in Verneinungen = Verstärker → gar / wirklich / absolut`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_PRAEPOSITIONAL_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 5 (2,5 Punkte): Präpositionalgefüge bestimmen.

Schreibe die Präpositionalgefüge aus dem folgenden Satz heraus und bestimme den Fall:

«Aus Sparsamkeit, aus erzieherischen Gründen und weil Thérèse in den Weihnachtsferien mit dem gleichen Zug und in der gleichen Klasse reisen, Strecke und Art des Reisens also kennenlernen sollte, hatte Dr. Wenger kein Schlafwagenabteil erster Klasse bestellt.» [Z. 3]

Welche Kombination von Präpositionalgefüge + Fall ist richtig?`,

    options: [
      {
        label: 'aus Sparsamkeit (Dativ), aus erzieherischen Gründen (Dativ), in den Weihnachtsferien (Dativ), mit dem gleichen Zug (Dativ), in der gleichen Klasse (Dativ) — alle Dativ',
        correct: true,
      },
      {
        label: 'aus Sparsamkeit (Genitiv), in den Weihnachtsferien (Akkusativ), mit dem gleichen Zug (Dativ)',
        correct: false,
      },
      {
        label: 'aus Sparsamkeit (Dativ), in den Weihnachtsferien (Akkusativ), mit dem gleichen Zug (Akkusativ)',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Präpositionalgefüge und Kasus',
          content: `Ein Präpositionalgefüge = Präposition + Nomen(gruppe).
Jede Präposition «verlangt» einen bestimmten Fall (Kasus):

→ «aus» → immer Dativ: aus Sparsamkeit (D), aus erzieherischen Gründen (D)
→ «in» (bei Ort/Zeit wo?) → Dativ: in den Weihnachtsferien (D), in der gleichen Klasse (D)
   ⚠️ «in» bei Bewegung wohin? → Akkusativ. Hier: zeitliche Angabe → Dativ!
→ «mit» → immer Dativ: mit dem gleichen Zug (D)

Eselsbrücke:
• aus, bei, mit, nach, seit, von, zu, gegenüber → immer Dativ
• durch, für, gegen, ohne, um → immer Akkusativ
• in, an, auf, über, unter, vor, hinter, neben, zwischen → Dativ (Ort) / Akkusativ (Richtung)`,
        },
        {
          title: 'Die 5 Präpositionalgefüge im Überblick',
          content: `1. aus Sparsamkeit → Dativ
2. aus erzieherischen Gründen → Dativ
3. in den Weihnachtsferien → Dativ (zeitliche Lage, nicht Richtung)
4. mit dem gleichen Zug → Dativ
5. in der gleichen Klasse → Dativ (Lage)

✅ Alle fünf stehen im Dativ!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präposition identifizieren (aus / mit / in / an…)
2️⃣  Feste Präpositionen (aus, mit) → immer Dativ
3️⃣  Wechselpräpositionen (in, an…): Frage «Wo?» → Dativ | «Wohin?» → Akkusativ
4️⃣  Zeitangaben mit «in» → immer Dativ (kein Ziel, nur Zeitraum)`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_PARTIKELN_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 6 (3 Punkte): Partikeln zuordnen.

«Er hatte sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke gelegt und den Zug bereits zwei Stationen später wieder verlassen.» [Z. 7]

Ordne alle Partikeln richtig zu:
– Präpositionen
– Konjunktionen
– weder Präpositionen noch Konjunktionen

Welche Zuordnung ist korrekt?`,

    options: [
      {
        label: 'Präpositionen: auf | Konjunktionen: ohne, und, [wie] | Weder noch: so, [wie], bereits, wieder',
        correct: true,
      },
      {
        label: 'Präpositionen: auf, ohne | Konjunktionen: und, wie | Weder noch: so, bereits, wieder',
        correct: false,
      },
      {
        label: 'Präpositionen: auf, bereits | Konjunktionen: und, ohne, wie | Weder noch: so, wieder',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Partikeln und ihre Unterarten',
          content: `«Partikel» = Oberbegriff für unveränderliche Wörter (nicht konjugierbar, nicht deklinierbar).
Unterarten:

🔹 Präpositionen: stehen vor einem Nomen und bestimmen dessen Fall.
→ Beispiele: auf, in, mit, von, ohne* (wenn ohne + Nomen)

🔹 Konjunktionen: verbinden Sätze oder Satzteile.
→ Beispiele: und, oder, aber, ohne (wenn ohne + Infinitiv = Konjunktion!), wie

🔹 Weder-noch-Partikeln (Adverbien, Modalpartikeln, Gradpartikeln):
→ so (Gradpartikel), bereits (Temporaladverb), wieder (Temporaladverb), wie (kann auch Vergleichspartikel = weder Präp. noch Konj. sein)

⚠️ «wie» ist Sonderfall: in «so leise wie möglich» ist «wie» eine Vergleichspartikel — sie kann als Konjunktion ODER als Partikel (weder noch) gezählt werden → beide Antworten werden akzeptiert.`,
        },
        {
          title: 'Zuordnung der Wörter im Satz',
          content: `Präpositionen:
→ auf (eine der oberen Bänke) ✅

Konjunktionen:
→ ohne (das Licht anzuzünden) = Konjunktion + Infinitiv ✅
→ und (verbindet zwei Prädikate) ✅
→ wie (so leise wie möglich) = Vergleichskonjunktion [auch als Partikel akzeptiert] ✅

Weder Präpositionen noch Konjunktionen (= Adverbien/Partikeln):
→ so (Gradpartikel, verstärkt «leise») ✅
→ bereits (Temporaladverb) ✅
→ wieder (Temporaladverb) ✅
→ wie [alternativ hier] ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präposition: steht vor Nomen, regiert einen Fall → auf ✅
2️⃣  Konjunktion: verbindet → und ✅; «ohne + Infinitiv» → Konjunktion ✅
3️⃣  Adverbien/Partikeln: unveränderlich, kein Fall, keine Verbindung → bereits, wieder, so
4️⃣  «wie» ist Sonderfall → in Vergleichen akzeptabel als Konj. ODER Partikel`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_VERBALKETTE_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 7 (2 Punkte): Verbale Wortketten herausschreiben.

«Sie standen im Gang und Thérèse liess sich durch die Landschaft draussen von dem Thema ihres Aussehens ablenken.» [Z. 24]

Schreibe die verbalen Wortketten untereinander heraus.`,

    options: [
      {
        label: '1) im Gang stehen | 2) sich durch die Landschaft draussen von dem Thema ihres Aussehens ablenken lassen',
        correct: true,
      },
      {
        label: '1) standen im Gang | 2) liess sich ablenken',
        correct: false,
      },
      {
        label: '1) standen | 2) liess sich durch die Landschaft ablenken',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Verbale Wortkette (Infinitivgruppe)',
          content: `Eine verbale Wortkette besteht aus dem Verb + alle direkt dazugehörenden Ergänzungen und Angaben.
→ Man nennt sie die «erweiterte Infinitivform» oder den verbalen Kern mit Ergänzungen.
→ Wichtig: Die Kette enthält das Verb im Infinitiv (Grundform), nicht konjugiert.

Regel: Konjugiertes Verb → in Infinitiv umwandeln + alle Ergänzungen mitnehmen.
«standen im Gang» → im Gang stehen
«liess sich … ablenken» → sich … ablenken lassen (mit allen Angaben dazwischen!)`,
        },
        {
          title: 'Die zwei Wortketten',
          content: `Satz 1: «Sie standen im Gang»
→ Verbale Wortkette: im Gang stehen

Satz 2: «Thérèse liess sich durch die Landschaft draussen von dem Thema ihres Aussehens ablenken»
→ Verbale Wortkette: sich durch die Landschaft draussen von dem Thema ihres Aussehens ablenken lassen

⚠️ Die gesamte Ergänzungskette gehört dazu! Nicht nur «sich ablenken lassen».`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Konjugiertes Verb finden (standen / liess … ablenken)
2️⃣  In Infinitiv umwandeln (stehen / ablenken lassen)
3️⃣  Alle Ergänzungen und Angaben mitnehmen (Wo? Womit? Wovon?)
4️⃣  Reflexivpronomen (sich) immer mitschreiben!`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_INDIREKTE_REDE_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 8 (2 Punkte): Indirekte Rede.

Setze die folgenden Sätze in die indirekte Rede:
«Findest du unser Haus blöd?», fragte Wenger. «Es ist doch auch ein Chalet.» [Z. 28]`,

    options: [
      {
        label: 'Ob sie ihr Haus blöd finde (fände), fragte Wenger. Es sei (wäre) doch auch ein Chalet.',
        correct: true,
      },
      {
        label: 'Er fragte, ob sie ihr Haus blöd findet. Es ist doch auch ein Chalet.',
        correct: false,
      },
      {
        label: 'Wenger fragte, ob du unser Haus blöd findest. Es ist doch auch ein Chalet.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Indirekte Rede (Konjunktiv I)',
          content: `Direkte Rede = wörtliche Wiedergabe: «Findest du unser Haus blöd?»
Indirekte Rede = sinngemässe Wiedergabe mit Konjunktiv I.

Regeln:
1. Fragesatz ohne Fragewort → «ob»-Satz: «Findest du…?» → ob sie … finde
2. Konjunktiv I bilden: Infinitiv-Stamm + e:
   → finden → er/sie finde (Konj. I)
   → sein → er/sie sei (Konj. I) 
3. Personalpronomen anpassen: «du» (direkt zu Thérèse) → «sie» in der Erzählung
4. Possessivpronomen anpassen: «unser» bleibt «ihr» (Thérèses Perspektive)
5. Falls Konj. I = Indikativ (nicht unterscheidbar) → Konj. II verwenden (fände, wäre)`,
        },
        {
          title: 'Schritt für Schritt',
          content: `Direkter Fragesatz: «Findest du unser Haus blöd?»
→ Ob-Satz: Ob sie ihr Haus blöd finde? (Konj. I: finde)
→ Alternative mit Konj. II: … fände

Direkter Aussagesatz: «Es ist doch auch ein Chalet.»
→ Indirekte Rede: Es sei doch auch ein Chalet. (Konj. I: sei)
→ Alternative mit Konj. II: … wäre

✅ Vollständige Antwort:
Ob sie ihr Haus blöd finde (fände), fragte Wenger. Es sei (wäre) doch auch ein Chalet.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Fragesatz ohne Fragewort → «ob»-Satz
2️⃣  Konjunktiv I: Infinitivstamm + e (finden → finde, sein → sei)
3️⃣  Pronomen anpassen: «du» → «sie/er», «unser» → «ihr/sein»
4️⃣  Konj. I = Indikativ? → Konj. II nehmen (fände, wäre)`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_ZEITFORM_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 9 (1 Punkt): Zeitform bestimmen.

«Der Kosename war bei den Wengers wegen des Doktors Anglophilie in Gebrauch genommen worden.» [Z. 39]

Bestimme die Zeitform des Verbs «war … in Gebrauch genommen worden».`,

    options: [
      { label: 'Plusquamperfekt (Passiv)', correct: true },
      { label: 'Perfekt (Passiv)', correct: false },
      { label: 'Präteritum (Aktiv)', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Plusquamperfekt (Vorvergangenheit)',
          content: `Das Plusquamperfekt bezeichnet eine Handlung, die VOR einer anderen Vergangenheitshandlung abgeschlossen war.

Bildung Plusquamperfekt Aktiv: hatte/hatten + Partizip II
→ Er hatte geschlafen.

Bildung Plusquamperfekt Passiv: war/waren + Partizip II + worden
→ war … in Gebrauch genommen worden

⚠️ Das «worden» am Ende ist das entscheidende Zeichen für das Passiv!
→ «worden» (ohne ge-) = Passiv-Hilfswort
→ «geworden» (mit ge-) = Vollverb werden im Aktiv

Hier: «war … genommen worden» = Plusquamperfekt Passiv ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Hilfsverb bestimmen: war → Vergangenheit
2️⃣  Struktur: war + Partizip II + worden → Plusquamperfekt Passiv
3️⃣  Faustregel: «worden» am Ende = Passiv, «geworden» = Aktiv (werden als Vollverb)`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_PRONOMEN_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 10 (3 Punkte): Pronomen näher bestimmen.

Bestimme die unterstrichenen Pronomen (Unterkategorie):

1. «Es hat etwas von einer Skihütte, findest du nicht?» → «Es»
2. «Er hatte das Blatt … gekauft, um nachzusehen, was in London los war.» → «was»
3. «Ich möchte … in einem Land wohnen, das ganz flach ist.» → «das»
4. «Das sind Häuser!» rief sie. → «Das»
5. «Daddy, ist das unser Schiff?» → «das» (beim Fährschiff)
6. «Daddy, ist das unser Schiff?» → «unser»

Welche Zuordnung ist vollständig korrekt?`,

    options: [
      {
        label: '1: Personalpronomen | 2: Interrogativpronomen | 3: Relativpronomen | 4: Demonstrativpronomen | 5: Artikel (bestimmter) | 6: Demonstrativpronomen',
        correct: true,
      },
      {
        label: '1: Demonstrativpronomen | 2: Relativpronomen | 3: Relativpronomen | 4: Demonstrativpronomen | 5: Demonstrativpronomen | 6: Possessivpronomen',
        correct: false,
      },
      {
        label: '1: Personalpronomen | 2: Relativpronomen | 3: Relativpronomen | 4: Demonstrativpronomen | 5: Demonstrativpronomen | 6: Possessivpronomen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Pronomen-Übersicht',
          content: `Personalpronomen: ich, du, er, sie, es, wir, ihr, sie — steht für eine Person/Sache.
Demonstrativpronomen: dieser, jener, der, die, das (allein stehend, zeigend).
Relativpronomen: der, die, das, welcher (leitet Relativsatz ein, bezieht sich auf Bezugsnomen).
Interrogativpronomen: wer, was, welcher… (fragt nach etwas).
Possessivpronomen: mein, dein, sein, unser… (zeigt Zugehörigkeit).
Bestimmter Artikel: der, die, das (vor einem Nomen stehend, nicht allein).`,
        },
        {
          title: 'Zuordnung der 6 Pronomen',
          content: `1. «Es hat etwas von einer Skihütte» → Es = Personalpronomen (steht für das Liegewagenabteil) ✅

2. «was in London los war» → was = Interrogativpronomen (leitet indirekten Fragesatz ein: was?) ✅

3. «Land wohnen, das ganz flach ist» → das = Relativpronomen (bezieht sich auf «Land», leitet Relativsatz ein) ✅

4. «Das sind Häuser!» → Das = Demonstrativpronomen (steht allein, zeigt auf die Häuser) ✅

5. «ist das unser Schiff?» → das = bestimmter Artikel (steht direkt vor «Schiff») ✅

6. «ist das unser Schiff?» → unser = Demonstrativpronomen?
→ Nein! «unser» ist ein POSSESSIVPRONOMEN (zeigt Besitz: unser = uns gehörend).
→ ⚠️ Laut offizieller Lösung: Demonstrativpronomen — hier weicht die offizielle Lösung von der Standardgrammatik ab. In der Prüfung gilt: Demonstrativpronomen ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Steht das Pronomen allein (ohne Nomen dahinter)? → eher Demo./Personal./Relativ.
2️⃣  Leitet es einen Nebensatz ein? → Relativ- oder Interrogativpronomen
3️⃣  «das» vor Nomen = Artikel | «das» allein zeigend = Demonstrativpronomen | «das» im Relativsatz = Relativpronomen
4️⃣  «was» in indirekten Fragen = Interrogativpronomen`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D3_2016_TEXTVERST_CHRONOLOGIE_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=5',
    topic: 'Textverständnis',

    questionText: `Aufgabe 11 (2,5 Punkte): Chronologische Abfolge.

Bringe die Ereignisse in die richtige zeitliche Reihenfolge (1 = frühestes, 5 = spätestes):

– Der Gang durch die Passkontrolle
– Die nächtliche Fahrt im Zug
– Auf dem Bahnsteig in Calais
– Die Abfahrt nach Mitternacht
– Der Blick auf die Küste Englands

Welche Reihenfolge stimmt?`,

    options: [
      {
        label: '1. Abfahrt nach Mitternacht | 2. Nächtliche Fahrt im Zug | 3. Bahnsteig in Calais | 4. Gang durch die Passkontrolle | 5. Blick auf die Küste Englands',
        correct: true,
      },
      {
        label: '1. Nächtliche Fahrt im Zug | 2. Abfahrt nach Mitternacht | 3. Passkontrolle | 4. Bahnsteig in Calais | 5. Küste Englands',
        correct: false,
      },
      {
        label: '1. Abfahrt nach Mitternacht | 2. Bahnsteig in Calais | 3. Nächtliche Fahrt | 4. Passkontrolle | 5. Küste Englands',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: Chronologie im Text',
          content: `Bei Chronologie-Aufgaben hilft es, den Text mit Zeitangaben zu «markieren»:
→ «Basel um null Uhr fünfzig» = Abfahrt nach Mitternacht (Z. 2) → frühestes Ereignis (1)
→ «die Nacht in einem Liegewagen-Abteil verbracht» = nächtliche Fahrt (Z. 3) → (2)
→ «kamen gegen elf Uhr vormittags in Calais an» → Bahnsteig Calais (Z. 1) → (3)
→ «Passkontrolle» (Z. 38) = nach Ankunft in Calais → (4)
→ «Das Wetter war so klar … die englische Küste sehen konnten» = auf Deck des Schiffes (Z. 44) → (5)`,
        },
        {
          title: 'Die richtige Reihenfolge',
          content: `1️⃣  Die Abfahrt nach Mitternacht (Basel, 0:50 Uhr)
2️⃣  Die nächtliche Fahrt im Zug (Liegewagen)
3️⃣  Auf dem Bahnsteig in Calais (Ankunft ~11 Uhr)
4️⃣  Der Gang durch die Passkontrolle (vor der Schiffsabfahrt)
5️⃣  Der Blick auf die Küste Englands (auf Deck des Fährschiffes)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zeitangaben im Text suchen (Uhrzeit, «dann», «als», «nachdem»)
2️⃣  Logische Reihenfolge: Zug → Ankunft → Kontrolle → Schiff → Meer
3️⃣  Tipp: Erst eindeutige Fixpunkte (Abfahrt 0:50, Küste ganz am Ende) setzen, Rest einordnen`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_VERBEN_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=5',
    topic: 'Grammatik',

    questionText: `Aufgabe 12 (4 Punkte): Verben bestimmen.

«Und ich versteh ja, dass man in Davos nichts anderes bauen lassen kann.» [Z. 31]

Bestimme für jedes Verb: Infinitiv | Modalverb | Vollverb | Präsens Indikativ

Verben: versteh / bauen / lassen / kann

Welche Zuordnung ist korrekt?`,

    options: [
      {
        label: 'versteh: Vollverb + Präsens Indikativ | bauen: Infinitiv + Vollverb | lassen: Infinitiv + Vollverb | kann: Modalverb + Präsens Indikativ',
        correct: true,
      },
      {
        label: 'versteh: Modalverb + Präsens | bauen: Infinitiv + Vollverb | lassen: Modalverb + Infinitiv | kann: Modalverb + Präsens',
        correct: false,
      },
      {
        label: 'versteh: Vollverb + Präsens | bauen: Infinitiv + Vollverb | lassen: Modalverb + Infinitiv | kann: Vollverb + Präsens',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe: Verbarten',
          content: `Vollverb: trägt die eigentliche Bedeutung des Satzes («verstehen», «bauen», «schlafen»).
Modalverb: drückt Möglichkeit/Notwendigkeit/Wollen aus (können, müssen, dürfen, sollen, wollen, mögen).
Infinitiv: Grundform des Verbs (nicht konjugiert, endet meist auf -en).
Präsens Indikativ: Gegenwart, Wirklichkeit (ich verstehe, er kann).

Sonderfall «lassen»: Im Deutschen kann «lassen» als Vollverb (= «etwas zulassen») ODER in Verbindung mit Infinitiv als Hilfsverb fungieren. In «bauen lassen» = Kausativkonstruktion (jemanden etwas bauen lassen).`,
        },
        {
          title: 'Zuordnung der vier Verben',
          content: `versteh (= verstehe):
→ Vollverb ✅ (inhaltstragendes Verb: das Verstehen)
→ Präsens Indikativ ✅ (Gegenwart, Wirklichkeitsform)
→ kein Modalverb ❌

bauen:
→ Infinitiv ✅ (nicht konjugiert, Grundform)
→ Vollverb ✅ (trägt die Kernbedeutung: bauen)

lassen:
→ Infinitiv ✅ (nicht konjugiert)
→ Vollverb ✅ (oder: grosszügig auch als Modalverb akzeptiert, laut offizieller Lösung)

kann:
→ Modalverb ✅ (drückt Möglichkeit aus)
→ Präsens Indikativ ✅ (Gegenwart, Wirklichkeit)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Modalverben: können/müssen/dürfen/sollen/wollen/mögen → immer Modalverb
2️⃣  Infinitiv: endet auf -(e)n, nicht konjugiert → immer Infinitiv UND Vollverb
3️⃣  Konjugiertes Verb im Präsens? → Präsens Indikativ markieren
4️⃣  «lassen» = Sonderfall: kann als Voll- oder Modalverb gelten → beide Antworten können akzeptiert werden`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_SATZBAU_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=5',
    topic: 'Grammatik',

    questionText: `Aufgabe 13 (2 Punkte): Satzbaumuster bestimmen.

«Sie hatte sich zur Wand hin gerollt und er sah von ihr nur die Masse ihres dunklen Haars, das ihr immer solche Schwierigkeiten bereitete, mit dem sie Kämpfe ausfocht.» [Z. 15]

Welches der folgenden Satzbaumuster ist richtig?
(HS = Hauptsatz, NS = Nebensatz)

A) HS-NS-HS-NS
B) HS-HS-NS-NS
C) NS-HS-NS-HS
D) HS-NS-NS-NS`,

    options: [
      { label: 'B) HS-HS-NS-NS', correct: true },
      { label: 'A) HS-NS-HS-NS', correct: false },
      { label: 'D) HS-NS-NS-NS', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Hauptsatz vs. Nebensatz',
          content: `Hauptsatz (HS): kann allein stehen, Verb steht an 2. Position.
Nebensatz (NS): kann nicht allein stehen, Verb steht am Ende, eingeleitet durch Konjunktion oder Relativpronomen.

Erkennungsmerkmale NS:
→ Konjunktion (dass, weil, obwohl, als, wenn…) am Anfang
→ Relativpronomen (der, die, das, welcher…)
→ Verb steht ganz am Ende des Teilsatzes`,
        },
        {
          title: 'Analyse des Satzes',
          content: `Satz aufteilen:

[1] «Sie hatte sich zur Wand hin gerollt»
→ Verb (hatte … gerollt) an 2. Position ✅ → HAUPTSATZ

[2] «und er sah von ihr nur die Masse ihres dunklen Haars»
→ «und» verbindet zwei HS, Verb (sah) an 2. Position ✅ → HAUPTSATZ

[3] «das ihr immer solche Schwierigkeiten bereitete»
→ eingeleitet durch Relativpronomen «das», Verb (bereitete) am Ende ✅ → NEBENSATZ

[4] «mit dem sie Kämpfe ausfocht»
→ eingeleitet durch «mit dem» (Relativpronomen), Verb (ausfocht) am Ende ✅ → NEBENSATZ

→ Muster: HS – HS – NS – NS ✅ → Antwort B`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verb an 2. Stelle + kein Einleiter → Hauptsatz
2️⃣  Relativpronomen/Konjunktion am Anfang + Verb am Ende → Nebensatz
3️⃣  «und» zwischen zwei vollständigen Sätzen = verbindet HS + HS
4️⃣  Satz segmentieren: jeden Teilsatz einzeln analysieren`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_PASSIV_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 14 (2 Punkte): Aktiv → Passiv (mit Täter).

Setze den Satz ins Passiv (mit Nennung des Täters):

«Sie würden ihn für einen dieser amerikanisierten Deutschen halten, …» [Z. 41]`,

    options: [
      {
        label: 'Er würde von ihnen für einen dieser amerikanisierten Deutschen gehalten werden.',
        correct: true,
      },
      {
        label: 'Er würde für einen dieser amerikanisierten Deutschen von ihnen gehalten.',
        correct: false,
      },
      {
        label: 'Von ihnen würde er als amerikanisierter Deutscher gehalten werden.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Vorgangspassiv (werden-Passiv)',
          content: `Aktiv: Subjekt handelt → «Sie würden ihn … halten.»
Passiv: Das Objekt wird zum Subjekt, der ursprüngliche Täter steht als «von + Dativ»-Ergänzung.

Formel Passiv Konjunktiv II (Zukunft):
→ würde/würden + Partizip II + werden

Schritte:
1. Akkusativobjekt (ihn) → neues Subjekt (er)
2. Subjekt (sie) → von ihnen (Dativ)
3. Verb: halten → gehalten werden (Konjunktiv II: würde … gehalten werden)`,
        },
        {
          title: 'Umformung Schritt für Schritt',
          content: `Aktiv: Sie würden ihn für einen dieser amerikanisierten Deutschen halten.

Schritt 1: «ihn» (Akk.) → «er» (Nom., neues Subjekt)
Schritt 2: «sie» (Subj.) → «von ihnen» (Dativ-Ergänzung)
Schritt 3: «würden … halten» → «würde … gehalten werden»

✅ Ergebnis:
Er würde von ihnen für einen dieser amerikanisierten Deutschen gehalten werden.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Akkusativobjekt → Subjekt (Nominativ)
2️⃣  Subjekt → «von + Dativ»
3️⃣  Verb: würden + Infinitiv → würde + Partizip II + werden
4️⃣  Rest des Satzes bleibt unverändert`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_PRAETERITUM_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 15 (2 Punkte): Plusquamperfekt → Präteritum.

Setze den Satz ins Präteritum:

«Er hatte sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke gelegt und den Zug bereits zwei Stationen später wieder verlassen.» [Z. 7]`,

    options: [
      {
        label: 'Er legte sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke und verliess den Zug bereits zwei Stationen später wieder.',
        correct: true,
      },
      {
        label: 'Er hat sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke gelegt und den Zug bereits zwei Stationen später wieder verlassen.',
        correct: false,
      },
      {
        label: 'Er legte sich ohne Licht auf eine obere Bank und verliess den Zug zwei Stationen später.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Präteritum (einfache Vergangenheit)',
          content: `Plusquamperfekt: hatte/war + Partizip II → Vorvergangenheit
Präteritum: konjugierte Form des Verbs (ohne Hilfsverb) → einfache Vergangenheit

Unregelmässige Verben (starke Verben) im Präteritum:
→ legen (schwach): legte (+ sich, Reflexiv)
→ verlassen (stark): verliess (Stammvokalwechsel: a → ie)

⚠️ Der Rest des Satzes (Infinitivkonstruktionen, Angaben) bleibt unverändert!
→ «ohne das Licht anzuzünden» = bleibt gleich (kein Tempuswechsel nötig)
→ «so leise wie möglich» = bleibt gleich (Adverb)`,
        },
        {
          title: 'Umformung',
          content: `Original (Plusquamperfekt):
«Er hatte sich … auf eine der oberen Bänke gelegt und den Zug … verlassen.»

Präteritum:
→ hatte … gelegt → legte (sich)
→ [hatte] verlassen → verliess

✅ Ergebnis:
Er legte sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke und verliess den Zug bereits zwei Stationen später wieder.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Hilfsverb «hatte» entfernen
2️⃣  Partizip II → Präteritumform: gelegt → legte | verlassen → verliess
3️⃣  Infinitivgruppen (ohne … anzuzünden) bleiben unverändert
4️⃣  Starke Verben: Stammvokalwechsel merken (verlassen → verliess)`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_SUBJEKT_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 16 (1 Punkt): Subjekt bestimmen.

«Aber hier, in Calais, unter einem Publikum aus reisenden Engländern, störte es ihn plötzlich.» [Z. 41]

Schreibe das Subjekt heraus und gib den Fall an.`,

    options: [
      { label: 'es — Nominativ', correct: true },
      { label: 'ihn — Akkusativ', correct: false },
      { label: 'Publikum — Dativ', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Subjekt finden',
          content: `Das Subjekt:
→ steht im Nominativ
→ bestimmt die Verbform (Kongruenz)
→ Frage: Wer oder was «stört» hier?

«störte es ihn» — das Verb ist «störte» (3. Person Sg.)
→ Was störte? → «es» (Pronomen, verweist auf das «Daddy»-Rufen)
→ «ihn» = Akkusativobjekt (wen störte es? → ihn)

✅ Subjekt: es (Nominativ)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Frage: «Wer oder was + Verb?» → Subjekt im Nominativ
2️⃣  «ihn» → Akkusativ → Objekt, nicht Subjekt
3️⃣  «es» als Subjekt: oft unpersönliches Pronomen, das auf etwas Vorgenanntes verweist`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_STELLVERTRETER_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 17 (1 Punkt): Stellvertreter herausschreiben.

«Sie war begeistert von den handtuchschmalen Häusern, die am Zugfenster vorbeirauschten.» [Z. 25]

Schreibe alle Stellvertreter (= Pronomen) heraus.`,

    options: [
      { label: 'Sie, die', correct: true },
      { label: 'Sie, den, die', correct: false },
      { label: 'Sie, die, ihren', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Stellvertreter (Pronomen)',
          content: `Stellvertreter = Pronomen = Wörter, die ein Nomen ersetzen (vertreten).
→ Personalpronomen: ich, du, er, sie, es, wir, ihr, sie
→ Relativpronomen: der, die, das, welcher (im Relativsatz)
→ Demonstrativpronomen: dieser, jener, der (allein stehend)

Im Satz «Sie war begeistert von den handtuchschmalen Häusern, die vorbeirauschten»:
→ «Sie» = Personalpronomen (steht für Thérèse) ✅
→ «die» = Relativpronomen (steht für «die Häuser», leitet Relativsatz ein) ✅
→ «den» = Artikel (steht VOR dem Nomen «Häusern»), kein Stellvertreter ❌`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Stellvertreter = steht ALLEIN, ohne Nomen dahinter
2️⃣  Artikel (der, die, das) VOR Nomen → kein Stellvertreter!
3️⃣  Relativpronomen: leitet Nebensatz ein, steht für das Bezugsnomen`,
    },
  },

  // ── AUFGABE 18 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_OBJEKTE_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 18 (4 Punkte): Objekte bestimmen.

«Sie hatte sich zur Wand hin gerollt und er sah von ihr nur die Masse ihres dunklen Haars, das ihr immer solche Schwierigkeiten bereitete, mit dem sie Kämpfe ausfocht.» [Z. 15]

Schreibe die Objekte heraus und ordne sie ein:
– Akkusativobjekte
– Genitivobjekte
– Dativobjekte`,

    options: [
      {
        label: 'Akkusativ: (nur) die Masse ihres dunklen Haars, solche Schwierigkeiten, Kämpfe | Dativ: ihr',
        correct: true,
      },
      {
        label: 'Akkusativ: die Masse, Schwierigkeiten | Genitiv: ihres dunklen Haars | Dativ: ihr',
        correct: false,
      },
      {
        label: 'Akkusativ: die Masse ihres dunklen Haars | Dativ: ihr, solche Schwierigkeiten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Objekte und ihre Fälle',
          content: `Akkusativobjekt: antwortet auf «Wen oder was?» (4. Fall)
Dativobjekt: antwortet auf «Wem?» (3. Fall)
Genitivobjekt: antwortet auf «Wessen?» (2. Fall) — sehr selten, v.a. bei Verben wie «bedürfen», «gedenken»

Vorgehen: Verb finden → Frage stellen → Fall bestimmen`,
        },
        {
          title: 'Analyse der Objekte',
          content: `Teilsatz 1: «er sah von ihr nur die Masse ihres dunklen Haars»
→ er sah WEN/WAS? → die Masse ihres dunklen Haars → Akkusativobjekt ✅
→ «von ihr» = Präpositionalobjekt (kein «reines» Objekt) – nicht gefordert

Teilsatz 2: «das ihr immer solche Schwierigkeiten bereitete»
→ bereitete WEM? → ihr → Dativobjekt ✅
→ bereitete WAS? → solche Schwierigkeiten → Akkusativobjekt ✅

Teilsatz 3: «mit dem sie Kämpfe ausfocht»
→ ausfocht WAS? → Kämpfe → Akkusativobjekt ✅

✅ Zusammenfassung:
Akkusativobjekte: (nur) die Masse ihres dunklen Haars | solche Schwierigkeiten | Kämpfe
Dativobjekte: ihr
Genitivobjekte: keine`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wen/was? → Akkusativ
2️⃣  Wem? → Dativ
3️⃣  Wessen? → Genitiv (sehr selten als Objekt)
4️⃣  Präpositionalobjekte (von ihr, mit dem) sind eigene Kategorie – hier nicht gefordert`,
    },
  },

  // ── AUFGABE 19 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_WORTARTEN_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 19 (3 Punkte): Wortarten bestimmen (nur nach den fünf Grundwortarten).

«Übrigens hatten sie Glück gehabt, nur ein einziger Fahrgast war während der Nacht zugestiegen.» [Z. 6]

Bestimme die unterstrichenen Wörter nach den fünf Wortarten:
Übrigens / sie / Glück / einziger / war / während`,

    options: [
      {
        label: 'Übrigens: Partikel | sie: Pronomen | Glück: Nomen | einziger: Adjektiv | war: Verb | während: Partikel',
        correct: true,
      },
      {
        label: 'Übrigens: Adverb | sie: Pronomen | Glück: Nomen | einziger: Adjektiv | war: Verb | während: Konjunktion',
        correct: false,
      },
      {
        label: 'Übrigens: Partikel | sie: Pronomen | Glück: Adjektiv | einziger: Adjektiv | war: Hilfsverb | während: Partikel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die fünf Grundwortarten',
          content: `1. Nomen (Substantiv): Dinge, Personen, Abstraktes → grossgeschrieben: Glück, Fahrgast, Nacht
2. Verb: Tätigkeiten, Vorgänge, Zustände → konjugierbar: war, hatten, ist
3. Adjektiv: Eigenschaft, Beschaffenheit → deklinierbar: einziger, grosse, dunkle
4. Pronomen: Nomenvertreter → ich, sie, dieser, welcher
5. Partikel: alle übrigen unveränderlichen Wörter (Adverbien, Präpositionen, Konjunktionen, Modalpartikeln): übrigens, während, nur`,
        },
        {
          title: 'Zuordnung',
          content: `Übrigens → Partikel (Adverb/Modalpartikel, unveränderlich) ✅
sie → Pronomen (Personalpronomen, 3. Person Pl.) ✅
Glück → Nomen (grossgeschrieben, abstraktes Ding) ✅
einziger → Adjektiv (deklinierbar, beschreibt «Fahrgast») ✅
war → Verb (Hilfsverb, konjugiert: Präteritum von sein) ✅
während → Partikel (Konjunktion/Präposition, unveränderlich) ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Grossgeschrieben → Nomen
2️⃣  Konjugierbar → Verb
3️⃣  Deklinierbar (beschreibend) → Adjektiv
4️⃣  Ersetzt ein Nomen → Pronomen
5️⃣  Alles andere, unveränderlich → Partikel`,
    },
  },

  // ── AUFGABE 20 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_NOMEN_KATEGORIEN_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 20 (3 Punkte): Nomen nach Kategorien zuordnen.

«Er hätte mit ihr fliegen sollen; mit dem Flugzeug gelangte man binnen einer Stunde von Zürich nach London, es hätte für Thérèse ausgesehen wie nichts.» [Z. 50]

Schreibe alle Nomen in die richtige Zeile:
– Lebewesen
– Sachen
– Gedachtes (abstrakte Nomen)`,

    options: [
      {
        label: 'Lebewesen: Thérèse | Sachen: Flugzeug, Zürich, London | Gedachtes: Stunde',
        correct: true,
      },
      {
        label: 'Lebewesen: Thérèse | Sachen: Flugzeug | Gedachtes: Stunde, Zürich, London',
        correct: false,
      },
      {
        label: 'Lebewesen: Thérèse, man | Sachen: Flugzeug, London | Gedachtes: Stunde, Zürich',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Nomen-Kategorien',
          content: `Lebewesen (Eigennamen von Personen, Tiere): Personen, Tiere
→ Thérèse ✅ (Person, Eigenname)
→ «man» = Pronomen, kein Nomen ❌

Sachen (konkrete Dinge, Orte, Gegenstände):
→ Flugzeug ✅ (greifbares Ding)
→ Zürich ✅ (Ort = konkret)
→ London ✅ (Ort = konkret)

Gedachtes (abstrakte Begriffe, nicht greifbar):
→ Stunde ✅ (Zeitbegriff, nicht greifbar, gedacht/abstrakt)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Lebewesen: Personen- und Tiernamen (Eigennamen)
2️⃣  Sachen: anfassbare Dinge + Ortsnamen
3️⃣  Gedachtes: Zeit, Gefühle, Konzepte (Stunde, Freude, Idee)
4️⃣  «man» ist Pronomen → gehört nicht zu den Nomen!`,
    },
  },

  // ── AUFGABE 21 ─────────────────────────────────────────────

  {
    id: 'D3_2016_GRAMMATIK_KONJUGIERBAR_DEKLINIERBAR_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 21 (3 Punkte): Konjugierbare und deklinierbare Wörter.

«Sie brauchte auch diesen Morgen lange Zeit, um sich zu frisieren.» [Z. 18]

Schreibe heraus:
– alle konjugierbaren Wörter
– alle deklinierbaren Wörter`,

    options: [
      {
        label: 'Konjugierbar: brauchte, frisieren | Deklinierbar: Sie, diesen, Morgen, lange, Zeit, sich',
        correct: true,
      },
      {
        label: 'Konjugierbar: brauchte, frisieren, sich | Deklinierbar: diesen, Morgen, lange, Zeit',
        correct: false,
      },
      {
        label: 'Konjugierbar: brauchte | Deklinierbar: Sie, diesen, Morgen, lange, Zeit',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: Konjugierbar vs. Deklinierbar',
          content: `Konjugierbar = Verben: werden nach Person, Zahl, Tempus verändert.
→ brauchte (konjugiert), frisieren (Infinitiv → konjugierbar)

Deklinierbar = Nomen, Adjektive, Pronomen, Artikel: werden nach Fall, Zahl, Geschlecht verändert.
→ Sie (Pronomen), diesen (Artikel/Pronomen), Morgen (Nomen), lange (Adjektiv), Zeit (Nomen), sich (Reflexivpronomen)

⚠️ Auch der Infinitiv ist ein «konjugierbares Wort» — er ist die Grundform des Verbs!
⚠️ «sich» ist deklinierbar (Reflexivpronomen), nicht konjugierbar!
⚠️ «auch» und «um» = Partikeln → weder konjugierbar noch deklinierbar → nicht aufführen`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Konjugierbar = alle Verben (auch Infinitiv): brauchte, frisieren
2️⃣  Deklinierbar = Nomen + Adjektive + Pronomen + Artikel: Sie, diesen, Morgen, lange, Zeit, sich
3️⃣  Partikeln (auch, um, zu) → unveränderlich → weder noch
4️⃣  «sich» = Reflexivpronomen → deklinierbar!`,
    },
  },

  // ── AUFGABE 22 ─────────────────────────────────────────────

  {
    id: 'D3_2016_WORTSCHATZ_4',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106435/AP16_D_GMS3_Pruefung.pdf?fp=1#page=8',
    topic: 'Wortschatz',

    questionText: `Aufgabe 22 (2 Punkte): Synonyme und Antonyme.

Teil A: Suche ein Wort oder eine Wendung mit entsprechender Bedeutung.
«binnen» [Z. 51]

Teil B: Suche für «überwiegend» eine Wendung mit GEGENTEILIGER Bedeutung.
«Die Leute … schienen überwiegend Engländer zu sein.» [Z. 38]

Welche Kombination stimmt?`,

    options: [
      {
        label: 'A: innerhalb / innert / in der Zeit von | B: zum geringeren Teil / nur teilweise / nicht alle',
        correct: true,
      },
      {
        label: 'A: ausserhalb / nach / später als | B: grösstenteils / mehrheitlich',
        correct: false,
      },
      {
        label: 'A: innerhalb | B: ausschliesslich / nur',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: «binnen» und «überwiegend»',
          content: `«binnen» = zeitlich: innerhalb eines Zeitraums, in der Zeit von
→ «binnen einer Stunde» = innerhalb einer Stunde / innert einer Stunde
→ Synonyme: innerhalb, innert (schweizerdeutsch), in der Zeit von, im Verlauf von

«überwiegend» = zum grösseren Teil, mehrheitlich
→ Antonym (Gegenteil): zum geringeren Teil / nur teilweise / nicht alle / mehrheitlich nicht
→ ⚠️ «ausschliesslich» wäre das Gegenteil von «gar nicht», nicht von «überwiegend»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106614/AP16_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «binnen» = zeitlich → innerhalb / innert
2️⃣  Antonym von «überwiegend» = das Gegenteil der Mehrheit → zum geringeren Teil
3️⃣  Antonym-Falle: nicht «gar nicht» (= 0%) sondern «weniger als die Hälfte» ist das echte Gegenteil`,
    },
  },

];