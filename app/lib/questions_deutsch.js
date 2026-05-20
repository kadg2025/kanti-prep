// KantiPrep – Deutsch GMS3 Sprachprüfung
// Aufnahmeprüfungen 2016–2025, Pädagogische Maturitätsschule Kreuzlingen
// Themen gemäss Bild: Wortarten | Kasus (Fälle) | Aktiv/Passiv/Zeitformen | Präpositionen | Satzglieder | Plural-Formen | Wortschatz und Wortbildung | Aufsatz und Schreiben

export const questionsDeutschGMS3 = [

  // ============================================================
  // WORTARTEN
  // ============================================================

  {
    id: 'D3_2016_WORTART_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
   questionText: `Bestimme die unterstrichenen Pronomen näher. (Text: Alfred Andersch, «Tochter»)\n\na) «__Es__ hat etwas von einer Skihütte...» [Z. 13]\nb) ...um nachzusehen, __was__ in London los war. [Z. 9]\nc) Ich möchte später in einem Land wohnen, __das__ ganz flach ist. [Z. 32]\nd) «__Das__ sind Häuser!» rief sie. [Z. 27]\ne) Thérèse deutete auf __das__ Fährschiff... [Z. 36]\nf) ...«Daddy, ist __das__ unser Schiff?» [Z. 36]`,
  options: [
    { label: 'a) Personalpronomen, b) Interrogativpronomen, c) Relativpronomen, d) Demonstrativpronomen, e) Artikel, f) Demonstrativpronomen', correct: true },
    { label: 'a) Personalpronomen, b) Relativpronomen, c) Relativpronomen, d) Demonstrativpronomen, e) Demonstrativpronomen, f) Possessivpronomen', correct: false },
    { label: 'a) Reflexivpronomen, b) Interrogativpronomen, c) Demonstrativpronomen, d) Relativpronomen, e) Possessivpronomen, f) Indefinitpronomen', correct: false },
  ],
  solution: {
    intro: 'Werde zum Pronomen-Meister! 🥋 Jedes "Fürwort" hat eine geheime Identität. Lass uns gemeinsam aufdecken, welche Rolle sie in den Sätzen spielen.',
    steps: [
      {
        title: 'a) "Es" → Persönliches Fürwort (Personalpronomen)',
        content: 'Es steht hier einfach für "die Sache" oder "die Situation". Es ist ein Stellvertreter, wie "er" oder "sie".'
      },
      {
        title: 'b) "was" → Fragendes Fürwort (Interrogativpronomen)',
        content: 'Leitet eine indirekte Frage ein. Trick: Du könntest auch direkt fragen: "Was war in London los?". Deshalb ist es ein Fragefürwort.'
      },
      {
        title: 'c) "das" → Bezügliches Fürwort (Relativpronomen)',
        content: 'Bezieht sich auf das Wort "Land" aus dem Hauptsatz und leitet einen Nebensatz ein. Trick: Man kann es oft durch "welches" ersetzen: "...ein Land, welches ganz flach ist."'
      },
      {
        title: 'd) "Das" → Hinweisendes Fürwort (Demonstrativpronomen)',
        content: 'Es weist auf etwas hin, wie mit dem Fingerzeig: "Schau mal, DAS da sind Häuser!".'
      },
      {
        title: 'e) "das" → Bestimmter Artikel (Begleiter)',
        content: 'Achtung, Falle! Hier ist "das" kein Stellvertreter, sondern der Begleiter des Nomens "Fährschiff". Es bestimmt das Nomen näher, daher ist es ein Artikel.'
      },
      {
        title: 'f) "das" → Hinweisendes Fürwort (Demonstrativpronomen)',
        content: 'Hier ist es wieder ein Fingerzeig: "Ist DAS da unser Schiff?". Es steht alleine und weist auf das Schiff hin.'
      }
    ],
    tip: '🎯 Super-Tipp: Ein Artikel (wie in e) kann NIE alleine stehen, er braucht immer ein Nomen bei sich. Ein Pronomen (wie in d und f) kann alleine stehen!',
youtube: 'https://www.youtube.com/watch?v=vaLIHu4J89Y',
  },
},

  {
    id: 'D3_2017_WORTART_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Bestimme die unterstrichenen Wörter nur nach den 5 Wortarten. (Text: Heinrich Böll, «Mein trauriges Gesicht»)\n\nEhe ich mich versehen hatte, war mein linkes Handgelenk mit einer dünnen Kette umschlossen. Und in diesem Augenblick wusste ich, dass ich wieder verloren war. [Z. 34]\n\nWelche Wortart ist: Ehe / versehen / Handgelenk / Und / in / diesem / ich / wieder`,
    options: [
      { label: 'Ehe=Partikel, versehen=Verb, Handgelenk=Nomen, Und=Partikel, in=Partikel, diesem=Pronomen, ich=Pronomen, wieder=Partikel', correct: true },
      { label: 'Ehe=Nomen, versehen=Adjektiv, Handgelenk=Nomen, Und=Partikel, in=Adjektiv, diesem=Adjektiv, ich=Pronomen, wieder=Adjektiv', correct: false },
      { label: 'Ehe=Partikel, versehen=Nomen, Handgelenk=Verb, Und=Nomen, in=Verb, diesem=Partikel, ich=Verb, wieder=Nomen', correct: false },
    ],
    solution: {
      intro: `Die 5-Wortarten-Challenge! 🏆 Nomen, Verb, Adjektiv, Pronomen, Partikel – das sind deine Waffen!`,
      steps: [
        { title: 'Die 5 Wortarten im Überblick', content: 'Nomen (Substantiv), Verb, Adjektiv, Pronomen, Partikel (= alles andere: Präpositionen, Konjunktionen, Adverbien, Modalpartikeln)' },
        { title: 'Auflösung', content: '"Ehe" = Partikel (Konjunktion) | "versehen" = Verb | "Handgelenk" = Nomen | "Und" = Partikel | "in" = Partikel (Präposition) | "diesem" = Pronomen (Demonstrativpronomen/Artikel) | "ich" = Pronomen | "wieder" = Partikel (Adverb)' },
      ],
      tip: '🎯 Alles, das kein Nomen, Verb, Adjektiv oder Pronomen ist → Partikel!',
      youtube: 'https://www.youtube.com/watch?v=SOiYENc1G_4',
    },
  },

  {
    id: 'D3_2018_WORTART_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Bestimme die Wortarten. Nenne nur die Oberbegriffe (5 Wortarten).\n\nLudwig war so gross wie ich. [Z. 42]\n\nWas ist die Wortart von: Ludwig / war / so / gross / wie / ich`,
    options: [
      { label: 'Ludwig=Nomen, war=Verb, so=Partikel, gross=Adjektiv, wie=Partikel, ich=Pronomen', correct: true },
      { label: 'Ludwig=Pronomen, war=Partikel, so=Adjektiv, gross=Nomen, wie=Verb, ich=Adjektiv', correct: false },
      { label: 'Ludwig=Nomen, war=Adjektiv, so=Verb, gross=Partikel, wie=Nomen, ich=Verb', correct: false },
    ],
    solution: {
      intro: `Kurzer Satz, grosse Übung! 💪 «Ludwig war so gross wie ich.» – analysieren wir ihn!`,
      steps: [
        { title: 'Analyse', content: '"Ludwig" = Eigenname → Nomen | "war" = Verb | "so" = Partikel (Adverb/Gradpartikel) | "gross" = Adjektiv | "wie" = Partikel (Vergleichspartikel) | "ich" = Pronomen (Personalpronomen)' },
      ],
      tip: '🎯 "So" und "wie" in Vergleichssätzen sind immer Partikeln!',
      youtube: 'https://www.youtube.com/embed/K5GDKDmMOvY',
    },
  },

  {
    id: 'D3_2019_WORTART_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Nenne die Wortart. Unterscheide nur nach den fünf Wortarten. (Text: Raymond Chandler, «Der grosse Schlaf»)\n\nIhr Gesicht war fahl und wirkte nicht sehr gesund. [Z. 38]\n\nWortart von: Ihr / Gesicht / war / fahl / und / wirkte / nicht / sehr / gesund`,
    options: [
      { label: 'Ihr=Pronomen, Gesicht=Nomen, war=Verb, fahl=Adjektiv, und=Partikel, wirkte=Verb, nicht=Partikel, sehr=Partikel, gesund=Adjektiv', correct: true },
      { label: 'Ihr=Adjektiv, Gesicht=Verb, war=Nomen, fahl=Partikel, und=Adjektiv, wirkte=Pronomen, nicht=Verb, sehr=Nomen, gesund=Partikel', correct: false },
      { label: 'Ihr=Pronomen, Gesicht=Nomen, war=Adjektiv, fahl=Verb, und=Nomen, wirkte=Adjektiv, nicht=Pronomen, sehr=Verb, gesund=Partikel', correct: false },
    ],
    solution: {
      intro: `Chandler-Detektiv-Modus an! 🕵️ Wir analysieren jeden Verdächtigen im Satz!`,
      steps: [
        { title: 'Lösung', content: '"Ihr" = Pronomen (Possessivpronomen) | "Gesicht" = Nomen | "war" = Verb | "fahl" = Adjektiv | "und" = Partikel (Konjunktion) | "wirkte" = Verb | "nicht" = Partikel (Negationspartikel) | "sehr" = Partikel (Gradpartikel) | "gesund" = Adjektiv' },
      ],
      tip: '🎯 "Nicht" und "sehr" sind immer Partikeln – sie begleiten andere Wörter, sind aber keine eigene Hauptkategorie.',
      youtube: 'https://www.youtube.com/embed/K5GDKDmMOvY',
    },
  },

  {
    id: 'D3_2020_WORTART_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Nenne die Wortart (nach den 5 Wortarten) und bestimme die Wortarten näher. (Text: Thomas Hürlimann, «Das Innere des Himmels»)\n\nUnd plötzlich standen wir vor der langen Front des Klosters. [Z. 43]\n\nBestimme: Und / plötzlich / standen / wir / vor / der / langen / Front / des / Klosters`,
    options: [
      { label: 'Und=Partikel(Konjunktion), plötzlich=Adjektiv, standen=Verb, wir=Pronomen(Personal), vor=Partikel(Präp.), der=Pronomen(Artikel), langen=Adjektiv, Front=Nomen, des=Pronomen(Artikel), Klosters=Nomen', correct: true },
      { label: 'Und=Nomen, plötzlich=Verb, standen=Adjektiv, wir=Nomen, vor=Pronomen, der=Verb, langen=Partikel, Front=Adjektiv, des=Verb, Klosters=Partikel', correct: false },
      { label: 'Und=Partikel, plötzlich=Partikel, standen=Verb, wir=Adjektiv, vor=Nomen, der=Partikel, langen=Verb, Front=Pronomen, des=Nomen, Klosters=Adjektiv', correct: false },
    ],
    solution: {
      intro: `10-Wörter-Analyse! 💥 Konzentriert bleiben – jedes Wort zählt!`,
      steps: [
        { title: 'Lösung', content: '"Und" = Partikel (beiordnende Konjunktion) | "plötzlich" = Adjektiv (prädikativ/adverbial) | "standen" = Verb | "wir" = Pronomen (Personalpronomen) | "vor" = Partikel (Präposition) | "der" = Pronomen (bestimmter Artikel) | "langen" = Adjektiv | "Front" = Nomen | "des" = Pronomen (bestimmter Artikel) | "Klosters" = Nomen' },
      ],
      tip: '🎯 Artikel (der/die/das/des/dem...) gelten in diesem Lehrmittel als Pronomen (Bestimmer)!',
      youtube: 'https://www.youtube.com/embed/K5GDKDmMOvY',
    },
  },

  {
    id: 'D3_2022_WORTART_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Nenne zuerst die Wortart (nach den 5 Wortarten) und bestimme diese dann näher. (Text: Ben Lerner, «Die Topeka-Schule»)\n\nAls er sich dem Land näherte, schaltete er den Motor aus, doch es gelang ihm nicht, parallel zum Bootssteg anzulegen. [Z. 37]\n\nBestimme: Als / sich / dem / Motor / nicht / parallel`,
    options: [
      { label: 'Als=Partikel(Konjunktion), sich=Pronomen(Reflexiv), dem=Pronomen(Artikel), Motor=Nomen, nicht=Partikel, parallel=Adjektiv', correct: true },
      { label: 'Als=Adjektiv, sich=Nomen, dem=Verb, Motor=Partikel, nicht=Pronomen, parallel=Verb', correct: false },
      { label: 'Als=Partikel, sich=Adjektiv, dem=Nomen, Motor=Verb, nicht=Adjektiv, parallel=Partikel', correct: false },
    ],
    solution: {
      intro: `Boots-Grammatik! ⛵ Kurshalten und Wortarten bestimmen!`,
      steps: [
        { title: 'Lösung', content: '"Als" = Partikel (unterordnende Konjunktion) | "sich" = Pronomen (Reflexivpronomen) | "dem" = Pronomen (bestimmter Artikel im Dativ) | "Motor" = Nomen | "nicht" = Partikel (Negationspartikel) | "parallel" = Adjektiv' },
      ],
      tip: '🎯 "Sich" ist immer ein Reflexivpronomen!',
      youtube: 'https://www.youtube.com/embed/K5GDKDmMOvY',
    },
  },

  {
    id: 'D3_2023_WORTART_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Nenne die Wortart (nach den 5 Wortarten). (Text: «Die Wanderung»)\n\nPanisch lief er davon, doch auf der weiten Wiese gab es keinen Baum, auf den er sich retten konnte. [Z. 22]\n\nWortart von: weiten / keinen / auf / den / sich / konnte`,
    options: [
      { label: 'weiten=Adjektiv, keinen=Pronomen, auf=Partikel, den=Pronomen, sich=Pronomen, konnte=Verb', correct: true },
      { label: 'weiten=Partikel, keinen=Adjektiv, auf=Verb, den=Nomen, sich=Adjektiv, konnte=Partikel', correct: false },
      { label: 'weiten=Nomen, keinen=Verb, auf=Pronomen, den=Partikel, sich=Nomen, konnte=Adjektiv', correct: false },
    ],
    solution: {
      intro: `Henry flieht vor dem Hund 🐕 und du vor den falschen Antworten! Auf geht's!`,
      steps: [
        { title: 'Lösung', content: '"weiten" = Adjektiv (attributiv) | "keinen" = Pronomen (Indefinitpronomen/Negationsartikel) | "auf" = Partikel (Präposition) | "den" = Pronomen (Relativpronomen) | "sich" = Pronomen (Reflexivpronomen) | "konnte" = Verb (Modalverb)' },
      ],
      tip: '🎯 "keinen" = Pronomen, weil es ein Nomen begleitet oder ersetzt (Negationsartikel/Indefinitpronomen).',
      youtube: 'https://www.youtube.com/embed/K5GDKDmMOvY',
    },
  },

  {
    id: 'D3_2024_WORTART_1',
    year: 2024,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Nenne die Wortart (nur nach den 5 Wortarten). (Text: «Als ich jung war»)\n\nEr hatte das Restaurant in kürzester Zeit zu seinem früheren Ruf geführt. [Z. 11]\n\nWortart von: Er / in / zu / früheren / Ruf / geführt`,
    options: [
      { label: 'Er=Pronomen, in=Partikel, zu=Partikel, früheren=Adjektiv, Ruf=Nomen, geführt=Verb', correct: true },
      { label: 'Er=Nomen, in=Verb, zu=Adjektiv, früheren=Partikel, Ruf=Verb, geführt=Nomen', correct: false },
      { label: 'Er=Adjektiv, in=Pronomen, zu=Nomen, früheren=Verb, Ruf=Partikel, geführt=Adjektiv', correct: false },
    ],
    solution: {
      intro: `Hochzeitsfotograf auf Wortarten-Jagd 📸 – klick die richtige Antwort!`,
      steps: [
        { title: 'Lösung', content: '"Er" = Pronomen | "in" = Partikel (Präposition) | "zu" = Partikel (Präposition) | "früheren" = Adjektiv | "Ruf" = Nomen | "geführt" = Verb (Partizip II)' },
      ],
      tip: '🎯 Partizip II (geführt, gemacht, gespielt) = immer Verb!',
      youtube: 'https://www.youtube.com/embed/K5GDKDmMOvY',
    },
  },

  {
    id: 'D3_2025_WORTART_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Nenne die Wortart (nur nach den 5 Wortarten). (Text: «Der Spaziergang»)\n\nWie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche. [Z. 30]\n\nWortart von: Wie / zwei / Kinder / fuhren / dann / kleinen`,
    options: [
      { label: 'Wie=Partikel, zwei=Pronomen, Kinder=Nomen, fuhren=Verb, dann=Partikel, kleinen=Adjektiv', correct: true },
      { label: 'Wie=Adjektiv, zwei=Nomen, Kinder=Verb, fuhren=Partikel, dann=Pronomen, kleinen=Nomen', correct: false },
      { label: 'Wie=Verb, zwei=Adjektiv, Kinder=Partikel, fuhren=Nomen, dann=Verb, kleinen=Pronomen', correct: false },
    ],
    solution: {
      intro: `Carl schiebt den Wagen – du bestimmst die Wortarten! 🍽️`,
      steps: [
        { title: 'Lösung', content: '"Wie" = Partikel (Vergleichspartikel) | "zwei" = Pronomen (Zahlwort/Numeral) | "Kinder" = Nomen | "fuhren" = Verb | "dann" = Partikel (Temporaladverb) | "kleinen" = Adjektiv' },
      ],
      tip: '🎯 Zahlwörter (zwei, drei, viele...) gelten in den Sprachstarken als Pronomen!',
      youtube: 'https://www.youtube.com/embed/K5GDKDmMOvY',
    },
  },

  // Verb-Analyse (Vollverb/Hilfsverb/Modalverb...)
  {
    id: 'D3_2017_WORTART_VERB',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Bestimme die unterstrichenen Verben durch Ankreuzen. (Text: Heinrich Böll)\n\nHätte ich einen Wunsch aussprechen können, so wäre mir ein Brot das Liebste gewesen … [Z. 10]\n\nWelche Zuordnung ist korrekt?\n- hätte: ?\n- aussprechen: ?\n- können: ?\n- wäre: ?\n- gewesen: ?`,
    options: [
      { label: 'hätte=Hilfsverb/Konjunktiv, aussprechen=Vollverb/Infinitiv, können=Modalverb/Infinitiv, wäre=Hilfsverb/Konjunktiv, gewesen=Vollverb/Partizip II', correct: true },
      { label: 'hätte=Vollverb/Personalform, aussprechen=Hilfsverb/Partizip, können=Vollverb/Personalform, wäre=Modalverb/Infinitiv, gewesen=Hilfsverb/Konjunktiv', correct: false },
      { label: 'hätte=Modalverb/Konjunktiv, aussprechen=Vollverb/Personalform, können=Hilfsverb/Infinitiv, wäre=Vollverb/Infinitiv, gewesen=Modalverb/Personalform', correct: false },
    ],
    solution: {
      intro: `Verben sezieren wie ein Profi-Koch! 🔪 Vollverb, Hilfsverb, Modalverb – drei Klassen, eine Mission!`,
      steps: [
        { title: 'Die Verbklassen', content: 'Vollverb = trägt die Hauptbedeutung | Hilfsverb = haben/sein/werden (helfen Zeitform/Passiv zu bilden) | Modalverb = können/müssen/wollen/sollen/dürfen/mögen' },
        { title: 'Konjunktiv II erkennnen', content: '"hätte" und "wäre" = Konjunktiv II (= irreale Formen von "haben/sein")' },
        { title: 'Lösung', content: '"hätte" = Hilfsverb, Personalform, Konjunktiv | "aussprechen" = Vollverb, Infinitiv | "können" = Modalverb, Infinitiv | "wäre" = Hilfsverb, Personalform, Konjunktiv | "gewesen" = Vollverb (sein), Partizip II' },
      ],
      tip: '🎯 Modalverben = können, müssen, wollen, sollen, dürfen, mögen – auswendig lernen!',
      youtube: 'https://www.youtube.com/embed/dVr7Vu_XNKM',
    },
  },

  {
    id: 'D3_2021_WORTART_VERB',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    questionText: `Betrachte die verbalen Teile und kreuze alles Zutreffende an. (Text: Robert Seethaler, «Der Trafikant»)\n\nAn der Wand über der Altkleiderkiste wackelte der eiserne Jesus, als könnte er sich jeden Augenblick von seinen Nägeln losreissen und vom Kreuz springen, und vom nahen Ufer war das Krachen der Fischerboote zu hören, die von den aufgepeitschten Wellen gegen ihre Uferpflöcke geschleudert wurden.\n\nWelche Reihe ist korrekt für: wackelte / könnte / war / geschleudert / wurden`,
    options: [
      { label: 'wackelte=Vollverb/Personalform | könnte=Modalverb/Personalform/Konjunktiv | war=Hilfsverb/Personalform | geschleudert=Vollverb/Partizip II | wurden=Hilfsverb/Personalform', correct: true },
      { label: 'wackelte=Hilfsverb/Infinitiv | könnte=Vollverb/Personalform | war=Modalverb/Konjunktiv | geschleudert=Hilfsverb/Infinitiv | wurden=Vollverb/Personalform', correct: false },
      { label: 'wackelte=Modalverb/Konjunktiv | könnte=Hilfsverb/Infinitiv | war=Vollverb/Partizip | geschleudert=Modalverb/Personalform | wurden=Modalverb/Infinitiv', correct: false },
    ],
    solution: {
      intro: `Jesus wackelt am Kreuz – und du wackelst nicht bei den Verben! 💪`,
      steps: [
        { title: 'Analyse', content: '"wackelte" = Vollverb, Personalform, Indikativ, Präteritum | "könnte" = Modalverb, Personalform, Konjunktiv II | "war" = Hilfsverb (sein), Personalform | "geschleudert" = Vollverb, Partizip II (im Passiv) | "wurden" = Hilfsverb (werden), Personalform' },
      ],
      tip: '🎯 "werden + Partizip II" = immer Passiv-Konstruktion!',
      youtube: 'https://www.youtube.com/embed/dVr7Vu_XNKM',
    },
  },

  // ============================================================
  // KASUS (FÄLLE)
  // ============================================================

  {
    id: 'D3_2023_KASUS_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Kasus (Fälle)',
    questionText: `Bestimme die Fälle der unterstrichenen Wörter. (Text: «Die Wanderung»)\n\nDoch der Hund schien in eine andere Richtung davongelaufen zu sein. Alles, was er dort noch entdeckte, war ein grosser, dunkler Holzpflock mitten auf der Wiese. [Z. 26]\n\nFall von: Hund / Richtung / Holzpflock / Wiese`,
    options: [
      { label: 'Hund=Nominativ, Richtung=Akkusativ, Holzpflock=Nominativ, Wiese=Dativ', correct: true },
      { label: 'Hund=Akkusativ, Richtung=Nominativ, Holzpflock=Dativ, Wiese=Akkusativ', correct: false },
      { label: 'Hund=Dativ, Richtung=Genitiv, Holzpflock=Akkusativ, Wiese=Nominativ', correct: false },
    ],
    solution: {
      intro: `Wer? Was? Wessen? Wem? Wen/Was? – die vier Kasus-Fragen! 🎯`,
      steps: [
        { title: 'Fragen stellen', content: '"der Hund schien" → Wer schien? = Hund → Nominativ | "in eine andere Richtung" → Wohin/Präp. "in" + Richtungsangabe → Akkusativ | "war ein grosser Holzpflock" → Was war es? = Holzpflock → Nominativ | "auf der Wiese" → Wo? = "auf" + Dativ → Wiese im Dativ' },
      ],
      tip: '🎯 Nach "auf" mit Ort (wo?) = Dativ. Nach "auf" mit Richtung (wohin?) = Akkusativ.',
      youtube: 'https://www.youtube.com/embed/4WqVN7axEKM',
    },
  },

  {
    id: 'D3_2024_KASUS_1',
    year: 2024,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Kasus (Fälle)',
    questionText: `Bestimme die Fälle der unterstrichenen Wörter. (Text: «Als ich jung war»)\n\nMan hatte meinem Bruder gegenüber mehreren Mitbewerbern den Vorzug gegeben, als der Mietvertrag im vergangenen Jahr erneut ausgeschrieben worden war. [Z. 9]\n\nFall von: Man / meinem Bruder / den Vorzug / der Mietvertrag`,
    options: [
      { label: 'Man=Nominativ, meinem Bruder=Dativ, den Vorzug=Akkusativ, der Mietvertrag=Nominativ', correct: true },
      { label: 'Man=Akkusativ, meinem Bruder=Nominativ, den Vorzug=Dativ, der Mietvertrag=Genitiv', correct: false },
      { label: 'Man=Dativ, meinem Bruder=Akkusativ, den Vorzug=Nominativ, der Mietvertrag=Dativ', correct: false },
    ],
    solution: {
      intro: `Hochzeits-Grammatik! 💍 Wer kriegt welchen Kasus?`,
      steps: [
        { title: 'Fragen stellen', content: '"Man hatte gegeben" → Wer? = Man → Nominativ | "meinem Bruder" → Wem? (Dativobjekt, Vorzug geben + Dativ) → Dativ | "den Vorzug" → Wen/Was? (Akkusativobjekt) → Akkusativ | "der Mietvertrag... ausgeschrieben worden war" → Wer? (Subjekt im Passivsatz) → Nominativ' },
      ],
      tip: '🎯 Subjekte stehen immer im Nominativ – auch im Passivsatz!',
      youtube: 'https://www.youtube.com/embed/4WqVN7axEKM',
    },
  },

  {
    id: 'D3_2025_KASUS_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Kasus (Fälle)',
    questionText: `Bestimme die Fälle der unterstrichenen Wörter. (Text: «Der Spaziergang»)\n\nAuch beim Abendbrot kam kein Gespräch in Gang. Die Stimmung war angespannt, und Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten. [Z. 20]\n\nFall von: Abendbrot / Stimmung / Ganze / Ergebnis / Hypnose`,
    options: [
      { label: 'Abendbrot=Dativ, Stimmung=Nominativ, Ganze=Akkusativ, Ergebnis=Akkusativ, Hypnose=Genitiv', correct: true },
      { label: 'Abendbrot=Nominativ, Stimmung=Akkusativ, Ganze=Nominativ, Ergebnis=Dativ, Hypnose=Akkusativ', correct: false },
      { label: 'Abendbrot=Genitiv, Stimmung=Dativ, Ganze=Genitiv, Ergebnis=Nominativ, Hypnose=Dativ', correct: false },
    ],
    solution: {
      intro: `Angespannte Stimmung, angespannte Grammatik! 😤 Fälle bestimmen!`,
      steps: [
        { title: 'Analyse', content: '"beim Abendbrot" = bei + Dativ → Dativ | "Die Stimmung war" → Wer? Nominativ | "das Ganze...halten" → für + Akkusativ → Akkusativ | "das Ergebnis" → für + Akkusativ → Akkusativ | "einer unguten Hypnose" → Genitiv-Attribut (das Ergebnis WESSEN?) → Genitiv' },
      ],
      tip: '🎯 "bei" verlangt immer Dativ. "für" verlangt immer Akkusativ.',
      youtube: 'https://www.youtube.com/embed/4WqVN7axEKM',
    },
  },

  // ============================================================
  // AKTIV, PASSIV UND ZEITFORMEN
  // ============================================================

  {
    id: 'D3_2017_AKTPAS_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Bestimme Handlungsrichtung und Zeitform. (Text: Heinrich Böll)\n\nEine bestimmte Möwe war von mir ins Auge gefasst worden.\n\nWas trifft zu?`,
    options: [
      { label: 'Passiv, Plusquamperfekt', correct: true },
      { label: 'Aktiv, Präteritum', correct: false },
      { label: 'Passiv, Präteritum', correct: false },
      { label: 'Aktiv, Plusquamperfekt', correct: false },
    ],
    solution: {
      intro: `Möwen im Passiv! 🐦 Nicht die Möwe handelt – sie wird angestarrt!`,
      steps: [
        { title: 'Passiv erkennen', content: '"war... gefasst worden" = worden-Form → Passiv!' },
        { title: 'Zeitform', content: '"war... worden" = Plusquamperfekt Passiv (war + Partizip II + worden)' },
      ],
      tip: '🎯 Passiv mit "worden" = Vorgangspassiv. "war + Partizip II + worden" = Plusquamperfekt Passiv.',
      youtube: 'https://www.youtube.com/embed/Wl2CX5XBKNI',
    },
  },

  {
    id: 'D3_2018_ZEITFORM_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Forme den Satz sinngemäss in die Zeitformen Präteritum und Plusquamperfekt um. (Text: Kurbjuweit, «Zweier ohne»)\n\nIch weiss auch nicht, wie hoch die Brücke ist, ich kenne keine genaue Zahl, obwohl wir uns viel damit beschäftigt haben. [Z. 16]\n\nWelche Umformung ins Plusquamperfekt ist korrekt?`,
    options: [
      { label: 'Ich wusste auch nicht, wie hoch die Brücke war, ich kannte keine genaue Zahl, obwohl wir uns viel damit beschäftigt hatten.', correct: true },
      { label: 'Ich werde nicht wissen, wie hoch die Brücke ist, ich kenne keine genaue Zahl, obwohl wir uns viel damit beschäftigt haben werden.', correct: false },
      { label: 'Ich wusste auch nicht, wie hoch die Brücke ist, ich hatte keine genaue Zahl gekannt, obwohl wir uns viel damit beschäftigen.', correct: false },
    ],
    solution: {
      intro: `Brücken-Zeitreise! ⏰ Von Präsens ins Präteritum/Plusquamperfekt!`,
      steps: [
        { title: 'Präteritum', content: '"weiss" → wusste | "ist" → war | "kenne" → kannte' },
        { title: 'Plusquamperfekt', content: '"haben beschäftigt" → hatten beschäftigt (= Plusquamperfekt = hatte/hatten + Partizip II)' },
        { title: 'Ergebnis', content: '"Ich wusste auch nicht, wie hoch die Brücke war, ich kannte keine genaue Zahl, obwohl wir uns viel damit beschäftigt hatten."' },
      ],
      tip: '🎯 Plusquamperfekt = hatte/hatten/war/waren + Partizip II – für Handlungen, die VOR einer anderen Vergangenheit lagen.',
      youtube: 'https://www.youtube.com/embed/9t9b-fOFlR4',
    },
  },

  {
    id: 'D3_2018_PASSIV_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Setze den Satz ins Passiv. (Text: Kurbjuweit, «Zweier ohne»)\n\nZwei Wochen zuvor hatte ich Ludwig zum ersten Mal gesehen. [Z. 22]\n\nWelche Passivform ist korrekt?`,
    options: [
      { label: 'Zwei Wochen zuvor war Ludwig (von mir) zum ersten Mal gesehen worden.', correct: true },
      { label: 'Zwei Wochen zuvor hatte Ludwig von mir zum ersten Mal gesehen werden.', correct: false },
      { label: 'Zwei Wochen zuvor wurde Ludwig von mir zum ersten Mal gesehen.', correct: false },
    ],
    solution: {
      intro: `Ludwig taucht in der Klasse auf 🕶️ – im Passiv, wie von Geisterhand!`,
      steps: [
        { title: 'Passiv im Plusquamperfekt', content: 'Aktiv (Plusquamperfekt): "hatte...gesehen" → Passiv: "war...gesehen worden"' },
        { title: 'Struktur', content: 'Passiv Plusquamperfekt = war/waren + Partizip II + worden' },
        { title: 'Mit "von mir"', content: 'Den Täter nennt man mit "von": "war (von mir) zum ersten Mal gesehen worden"' },
      ],
      tip: '🎯 Passiv Plusquamperfekt = war + Partizip II + worden.',
      youtube: 'https://www.youtube.com/embed/Wl2CX5XBKNI',
    },
  },

  {
    id: 'D3_2019_AKTPAS_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Kreuze an, was auf den Satz zutrifft. (Text: Raymond Chandler)\n\nIch wurde von vier Millionen Dollar erwartet. [Z. 6]\n\nWas stimmt?`,
    options: [
      { label: 'Indikativ und Passiv', correct: true },
      { label: 'Konjunktiv und Aktiv', correct: false },
      { label: 'Imperativ und Passiv', correct: false },
      { label: 'Indikativ und Aktiv', correct: false },
    ],
    solution: {
      intro: `4 Millionen Dollar! 💸 Aber kein Aktiv-Satz – hier ist jemand erwartet worden!`,
      steps: [
        { title: 'Passiv', content: '"wurde...erwartet" = "werden + Partizip II" → Vorgangspassiv!' },
        { title: 'Indikativ vs. Konjunktiv', content: '"wurde" ist Indikativ (reale Aussage). Konjunktiv wäre: "würde erwartet werden".' },
      ],
      tip: '🎯 Immer fragen: Steht "werden + Partizip II"? Dann = Passiv!',
      youtube: 'https://www.youtube.com/embed/Wl2CX5XBKNI',
    },
  },

  {
    id: 'D3_2019_AKTPAS_2',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Der folgende Satz steht im Passiv. Wandle ihn ins Aktiv um. (Text: Raymond Chandler)\n\nIch wurde von vier Millionen Dollar erwartet. [Z. 5]\n\nWelche Aktivform ist korrekt?`,
    options: [
      { label: 'Vier Millionen Dollar erwarteten mich.', correct: true },
      { label: 'Ich erwartete vier Millionen Dollar.', correct: false },
      { label: 'Von mir wurden vier Millionen Dollar erwartet.', correct: false },
    ],
    solution: {
      intro: `Passiv aufknacken! 🔓 Das «von»-Agens wird zum Subjekt im Aktiv!`,
      steps: [
        { title: 'Passiv → Aktiv Regel', content: 'Passiv: Ich (Subjekt) + wurde erwartet + von vier Millionen Dollar (Agens) → Aktiv: Vier Millionen Dollar (neues Subjekt) + erwarteten + mich (Akkusativobjekt)' },
      ],
      tip: '🎯 "von + Nomen" im Passiv = das Subjekt im Aktiv!',
      youtube: 'https://www.youtube.com/embed/Wl2CX5XBKNI',
    },
  },

  {
    id: 'D3_2022_AKTPAS_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Kreuze alles, was auf den Satz zutrifft, an. (Text: Ben Lerner, «Die Topeka-Schule»)\n\nDas laute Krachen brachte die Ochsenfrösche in der Nähe zum Schweigen. [Z. 37]\n\nWas trifft zu?`,
    options: [
      { label: 'Aktiv, Indikativ, Präteritum', correct: true },
      { label: 'Passiv, Konjunktiv, Perfekt', correct: false },
      { label: 'Aktiv, Konjunktiv, Plusquamperfekt', correct: false },
      { label: 'Passiv, Indikativ, Präteritum', correct: false },
    ],
    solution: {
      intro: `Frösche zum Schweigen gebracht! 🐸 Aktiv oder Passiv? Vergangenheit?`,
      steps: [
        { title: 'Aktiv/Passiv', content: '"brachte" = Vollverb, kein "werden + Partizip II" → Aktiv' },
        { title: 'Indikativ/Konjunktiv', content: '"brachte" ist Indikativ (reale Aussage)' },
        { title: 'Zeitform', content: '"brachte" = Präteritum von "bringen"' },
      ],
      tip: '🎯 Wenn kein "werden + Partizip II" vorhanden = immer Aktiv!',
      youtube: 'https://www.youtube.com/embed/9t9b-fOFlR4',
    },
  },

  {
    id: 'D3_2023_ZEITFORM_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Setze die Sätze ins Plusquamperfekt. (Text: «Die Wanderung»)\n\nMit dem Regen kam die Kälte. Sie prallte zunächst an ihm ab, aber nach und nach drang sie in seine Knochen und in sein Gemüt. [Z. 35]\n\nWelche Plusquamperfekt-Bildung ist korrekt?`,
    options: [
      { label: 'Mit dem Regen war die Kälte gekommen. Sie war zunächst an ihm abgeprallt, aber nach und nach war sie in seine Knochen und in sein Gemüt gedrungen.', correct: true },
      { label: 'Mit dem Regen hat die Kälte gekommen. Sie hat zunächst an ihm abgeprallt, aber nach und nach hat sie in seine Knochen und in sein Gemüt gedrungen.', correct: false },
      { label: 'Mit dem Regen wird die Kälte kommen. Sie wird zunächst an ihm abprallen, aber nach und nach wird sie in seine Knochen und in sein Gemüt dringen.', correct: false },
    ],
    solution: {
      intro: `Kälte ins Plusquamperfekt schicken ❄️ – das schaffst du!`,
      steps: [
        { title: 'Plusquamperfekt mit Bewegungsverben', content: '"kommen" → "war gekommen" (sein-Verb!) | "abprallen" → "war abgeprallt" (sein-Verb) | "dringen" → "war gedrungen" (sein-Verb)' },
        { title: 'Wann "sein", wann "haben"?', content: 'Bewegungsverben + Zustandsveränderungen = "sein" + Partizip II | Handlungen mit Objekt = "haben" + Partizip II' },
      ],
      tip: '🎯 Plusquamperfekt = war/waren + Partizip II (bei sein-Verben) oder hatte/hatten + Partizip II.',
      youtube: 'https://www.youtube.com/embed/9t9b-fOFlR4',
    },
  },

  {
    id: 'D3_2024_AKTPAS_1',
    year: 2024,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Kreuze alles Zutreffende an. (Text: «Als ich jung war»)\n\nIch war damit aufgewachsen, im Winter das Hotel und die Skischule, im Sommer die Hochzeitsfabrik... wie sie dann aber von allen ernsthaft tituliert wurde...\n\nWelche Zeile beschreibt «wie sie dann aber von allen ernsthaft tituliert wurde» korrekt?`,
    options: [
      { label: 'Passiv, Indikativ, Präteritum', correct: true },
      { label: 'Aktiv, Konjunktiv, Präteritum', correct: false },
      { label: 'Passiv, Konjunktiv, Plusquamperfekt', correct: false },
      { label: 'Aktiv, Indikativ, Perfekt', correct: false },
    ],
    solution: {
      intro: `Hochzeitsfabrik im Grammatik-Check! 👰 Passiv? Aktiv? Wann?`,
      steps: [
        { title: 'Passiv/Aktiv', content: '"wurde tituliert" = "werden + Partizip II" → Passiv' },
        { title: 'Zeitform', content: '"wurde" = Präteritum von "werden" → Präteritum Passiv' },
        { title: 'Modus', content: '"wurde" = Indikativ (reale Aussage, keine Konjunktivform)' },
      ],
      tip: '🎯 "wurde + Partizip II" = Präteritum Passiv!',
      youtube: 'https://www.youtube.com/watch?v=vaLIHu4J89Y',
    },
  },

  {
    id: 'D3_2025_AKTPAS_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Kreuze alles Zutreffende an. (Text: «Der Spaziergang»)\n\nÜber die Schwelle in den Korridor wurde der Wagen getragen – das machte sein Vater, aber jetzt sprang Carl auf und half, behutsam, damit nichts verrutschte. [Z. 26]\n\nWelche Zeile beschreibt «Über die Schwelle in den Korridor wurde der Wagen getragen» korrekt?`,
    options: [
      { label: 'Passiv, Indikativ, Präteritum', correct: true },
      { label: 'Aktiv, Indikativ, Präteritum', correct: false },
      { label: 'Passiv, Konjunktiv, Plusquamperfekt', correct: false },
      { label: 'Aktiv, Konjunktiv, Präteritum', correct: false },
    ],
    solution: {
      intro: `Wagen schleppen – im Passiv! 🛒 «wurde getragen» ist das Schlüsselmuster!`,
      steps: [
        { title: 'Passiv', content: '"wurde getragen" = "werden + Partizip II" → Vorgangspassiv' },
        { title: 'Zeitform', content: '"wurde" = Präteritum von "werden" → Präteritum Passiv' },
        { title: 'Modus', content: 'Indikativ (keine Konjunktiv-Form)' },
      ],
      tip: '🎯 Präteritum Passiv = wurde/wurden + Partizip II.',
      youtube: 'https://www.youtube.com/embed/Wl2CX5XBKNI',
    },
  },

  // ============================================================
  // PRÄPOSITIONEN
  // ============================================================

  {
    id: 'D3_2016_PRAEP_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Präpositionen',
    questionText: `Schreibe die Präpositionalgefüge untereinander heraus und bestimme den Fall. (Text: Alfred Andersch, «Tochter»)\n\nAus Sparsamkeit, aus erzieherischen Gründen und weil Thérèse in den Weihnachtsferien mit dem gleichen Zug und in der gleichen Klasse reisen... sollte, hatte Dr. Wenger kein Schlafwagenabteil erster Klasse bestellt. [Z. 3]\n\nWelche Auflistung ist korrekt?`,
    options: [
      { label: 'aus Sparsamkeit (Dativ) / aus erzieherischen Gründen (Dativ) / in den Weihnachtsferien (Dativ) / mit dem gleichen Zug (Dativ) / in der gleichen Klasse (Dativ)', correct: true },
      { label: 'aus Sparsamkeit (Genitiv) / aus erzieherischen Gründen (Akkusativ) / in den Weihnachtsferien (Akkusativ) / mit dem gleichen Zug (Genitiv) / in der gleichen Klasse (Akkusativ)', correct: false },
      { label: 'aus Sparsamkeit (Nominativ) / aus erzieherischen Gründen (Dativ) / in den Weihnachtsferien (Genitiv) / mit dem gleichen Zug (Akkusativ) / in der gleichen Klasse (Nominativ)', correct: false },
    ],
    solution: {
      intro: `Präpositionsgefüge-Detektiv! 🔍 «aus» und «mit» und «in» (Dativ) – wir schauen genau hin!`,
      steps: [
        { title: 'Präpositionen mit Dativ', content: '"aus", "mit", "von", "nach", "bei", "seit", "zu", "gegenüber" → immer Dativ!' },
        { title: '"in" mit Dativ', content: '"in den Weihnachtsferien" → Ort/Zeit-Angabe (wo/wann?) → Dativ | "in der gleichen Klasse" → Ort → Dativ' },
      ],
      tip: '🎯 Merksatz: "Aus, bei, mit, nach, seit, von, zu, gegenüber" = immer Dativ!',
      youtube: 'https://www.youtube.com/embed/Wr2kGCK0v1A',
    },
  },

  {
    id: 'D3_2017_PRAEP_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Präpositionen',
    questionText: `Schreibe die Präpositionalgefüge untereinander heraus. (Text: Heinrich Böll, «Mein trauriges Gesicht»)\n\n«Das Gesetz wurde vorgestern durch alle Lautsprecher und in allen Zeitungen verkündet.» ... «Diesen wurde es durch Flugblätter bekanntgegeben. Über allen Strassen des Reiches wurden diese abgeworfen.» [Z.]\n\nWelche vier Präpositionalgefüge gibt es?`,
    options: [
      { label: 'durch alle Lautsprecher / in allen Zeitungen / durch Flugblätter / über allen Strassen des Reiches', correct: true },
      { label: 'das Gesetz / alle Lautsprecher / allen Zeitungen / durch das Reich', correct: false },
      { label: 'vorgestern / in / durch / über', correct: false },
    ],
    solution: {
      intro: `Gesetze werden verkündet! 📢 Finde alle Präpositionsgefüge im Text!`,
      steps: [
        { title: 'Was ist ein Präpositionsgefüge?', content: 'Präposition + Nominalgruppe = Präpositionsgefüge (z.B. "durch alle Lautsprecher")' },
        { title: 'Lösung', content: '1) durch alle Lautsprecher | 2) in allen Zeitungen | 3) durch Flugblätter | 4) über allen Strassen des Reiches' },
      ],
      tip: '🎯 Präpositionsgefüge = Präposition + Artikel + Nomen (oder ohne Artikel).',
      youtube: 'https://www.youtube.com/embed/Wr2kGCK0v1A',
    },
  },

  {
    id: 'D3_2022_PRAEP_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Präpositionen',
    questionText: `Schreibe alle Präpositionalgefüge untereinander heraus. (Text: Ben Lerner, «Die Topeka-Schule»)\n\nSie trieben im Boot von Ambers Stiefvater mitten auf einem ansonsten leeren künstlichen See, der von grossen Reihenhaussiedlungen umgeben war. [Z. 1]\n\nWelche drei Präpositionalgefüge gibt es?`,
    options: [
      { label: 'im Boot von Ambers Stiefvater / (mitten) auf einem ansonsten leeren künstlichen See / von grossen Reihenhaussiedlungen', correct: true },
      { label: 'im Boot / von Amber / auf einem See', correct: false },
      { label: 'im Boot / mitten auf / von grossen', correct: false },
    ],
    solution: {
      intro: `Boot auf dem See 🛥️ – und wir fischen die Präpositionalgefüge heraus!`,
      steps: [
        { title: 'Lösung', content: '1) im Boot von Ambers Stiefvater (= im Boot + Attribut) | 2) (mitten) auf einem ansonsten leeren künstlichen See | 3) von grossen Reihenhaussiedlungen' },
      ],
      tip: '🎯 Präpositionsgefüge können auch eingebettete Attribute haben – alles zur Präposition gehörende mitschreiben!',
      youtube: 'https://www.youtube.com/embed/Wr2kGCK0v1A',
    },
  },

  {
    id: 'D3_2024_PRAEP_1',
    year: 2024,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Präpositionen',
    questionText: `Schreibe alle Präpositionalgefüge untereinander heraus. (Text: «Als ich jung war»)\n\nKaum jemand aus den umliegenden Dörfern schlug sein Angebot aus, aber die Leute kamen auch aus der Stadt, entschieden sich für eine der drei Möglichkeiten und liessen sich von unserem Vater beraten. [Z. 25]\n\nWelche vier Präpositionalgefüge gibt es?`,
    options: [
      { label: 'aus den umliegenden Dörfern / aus der Stadt / für eine der drei Möglichkeiten / von unserem Vater', correct: true },
      { label: 'aus / aus / für / von', correct: false },
      { label: 'den umliegenden Dörfern / der Stadt / eine der drei Möglichkeiten / unserem Vater', correct: false },
    ],
    solution: {
      intro: `Hochzeitsklima-Analyse 💒 Präpositionsgefüge suchen!`,
      steps: [
        { title: 'Lösung', content: '1) aus den umliegenden Dörfern | 2) aus der Stadt | 3) für eine der drei Möglichkeiten | 4) von unserem Vater' },
      ],
      tip: '🎯 Jede Präposition + zugehörige Nominalgruppe = ein Gefüge.',
      youtube: 'https://www.youtube.com/embed/Wr2kGCK0v1A',
    },
  },

  // ============================================================
  // SATZGLIEDER
  // ============================================================

  {
    id: 'D3_2018_SATZGL_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Satzglieder',
    questionText: `Schreibe die Satzglieder heraus und bestimme sie. (Text: Kurbjuweit, «Zweier ohne»)\n\nNach der Schule waren wir zu Ludwig nach Hause gefahren. [Z. 1]\n\nWelche Satzglied-Bestimmung ist korrekt?`,
    options: [
      { label: '"Nach der Schule" = Präpositionalgefüge / "wir" = Subjekt (Nominalgruppe im Nominativ) / "zu Ludwig nach Hause" = Präpositionalgefüge', correct: true },
      { label: '"Nach der Schule" = Subjekt / "wir" = Akkusativobjekt / "zu Ludwig nach Hause" = Dativobjekt', correct: false },
      { label: '"Nach der Schule" = Akkusativobjekt / "wir" = Präpositionalgefüge / "zu Ludwig nach Hause" = Subjekt', correct: false },
    ],
    solution: {
      intro: `Satzglieder-Detektiv! 🔎 Wer? Was? Wo? – die drei magischen Fragen!`,
      steps: [
        { title: 'Subjekt finden', content: '"waren gefahren" → Wer? = WIR → Subjekt (Nominalgruppe im Nominativ)' },
        { title: 'Präpositionalgefüge', content: '"Nach der Schule" = Präposition "nach" + Nominalgruppe → Präpositionalgefüge (zeitlich) | "zu Ludwig nach Hause" = Präposition + Nominalgruppe → Präpositionalgefüge (direktional)' },
      ],
      tip: '🎯 Frage: "Wer/Was?" → Subjekt | "Wohin/Wo/Wann?" mit Präposition → Präpositionalgefüge.',
      youtube: 'https://www.youtube.com/embed/iXl9u4kKcFY',
    },
  },

  {
    id: 'D3_2019_SATZGL_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Satzglieder',
    questionText: `Schreibe alle Objekte heraus und ordne sie ein. (Text: Heinrich Böll, «Mein trauriges Gesicht»)\n\nIch stand an der Hafenmauer. Ich sah den Möwen zu. Mein trauriges Gesicht fiel einem Polizisten auf. Dieser hatte in diesem Viertel die Runde zu gehen.\n\nWelche Zuordnung ist korrekt?`,
    options: [
      { label: 'Akkusativobjekt: "die Runde" | Dativobjekt: "den Möwen" / "einem Polizisten"', correct: true },
      { label: 'Akkusativobjekt: "die Runde" / "den Möwen" | Dativobjekt: "einem Polizisten"', correct: false },
      { label: 'Genitivobjekt: "die Runde" | Akkusativobjekt: "einem Polizisten" | Dativobjekt: "den Möwen"', correct: false },
    ],
    solution: {
      intro: `Objekte im Hafen fischen! 🐟 Wem? Wen/Was?`,
      steps: [
        { title: 'Dativobjekte', content: '"den Möwen" → zuschauen + WEM? → Dativ | "einem Polizisten" → auffallen + WEM? → Dativ' },
        { title: 'Akkusativobjekt', content: '"die Runde" → gehen + WEN/WAS? → Akkusativ (die Runde gehen = feste Wendung)' },
      ],
      tip: '🎯 Verben mit "zu" = oft Dativ (zuschauen, zuhören). "Haben + WEN/WAS" = Akkusativobjekt.',
      youtube: 'https://www.youtube.com/embed/iXl9u4kKcFY',
    },
  },

  {
    id: 'D3_2021_SATZGL_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Satzglieder',
    questionText: `Schreibe aus dem Satz alle Satzglieder untereinander heraus und bestimme sie. (Text: Robert Seethaler, «Der Trafikant»)\n\nUnter ihrer Kopfhaut spürte er das warme Pulsieren. [Z. 46]\n\nWelche Bestimmung ist korrekt?`,
    options: [
      { label: '"Unter ihrer Kopfhaut" = Präpositionalgefüge | "er" = Subjekt (Nominalgruppe im Nominativ) | "das warme Pulsieren" = Akkusativobjekt (Nominalgruppe im Akkusativ)', correct: true },
      { label: '"Unter ihrer Kopfhaut" = Subjekt | "er" = Dativobjekt | "das warme Pulsieren" = Präpositionalgefüge', correct: false },
      { label: '"Unter ihrer Kopfhaut" = Akkusativobjekt | "er" = Präpositionalgefüge | "das warme Pulsieren" = Subjekt', correct: false },
    ],
    solution: {
      intro: `Franz spürt – aber was? 🤔 Satzglieder finden!`,
      steps: [
        { title: 'Analyse', content: '"spürte" → Wer? er (Subjekt, Nominativ) | "spürte" → Wen/Was? = das warme Pulsieren (Akkusativobjekt) | "Unter ihrer Kopfhaut" = Präp. + Nom. → Präpositionalgefüge (Ort)' },
      ],
      tip: '🎯 Subjekt = Nominativ (Wer?) | Akkusativobjekt = Akkusativ (Wen/Was?).',
      youtube: 'https://www.youtube.com/embed/iXl9u4kKcFY',
    },
  },

  {
    id: 'D3_2023_SATZGL_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Satzglieder',
    questionText: `Bestimme die unterstrichenen Satzglieder. (Text: «Die Wanderung»)\n\nHenry musste bei seiner Flucht die Orientierung verloren haben. [...] Mit dem Regen kam die Kälte. [...] wegen der stärker werdenden Schmerzen im Knöchel blieb er kurz stehen. [Z. 30]\n\nWelche Bestimmung ist korrekt für: «die Orientierung» / «Mit dem Regen» / «die Kälte» / «wegen der stärker werdenden Schmerzen im Knöchel»?`,
    options: [
      { label: '"die Orientierung" = Akkusativobjekt | "Mit dem Regen" = Präpositionalgefüge | "die Kälte" = Subjekt | "wegen der...Schmerzen im Knöchel" = Präpositionalgefüge', correct: true },
      { label: '"die Orientierung" = Subjekt | "Mit dem Regen" = Akkusativobjekt | "die Kälte" = Präpositionalgefüge | "wegen der...Schmerzen" = Dativobjekt', correct: false },
      { label: '"die Orientierung" = Dativobjekt | "Mit dem Regen" = Subjekt | "die Kälte" = Akkusativobjekt | "wegen der...Schmerzen" = Subjekt', correct: false },
    ],
    solution: {
      intro: `Henry verliert die Orientierung – du nicht! 🧭 Satzglieder bestimmen!`,
      steps: [
        { title: 'Analyse', content: '"die Orientierung verloren" → WEN/WAS? → Akkusativobjekt | "Mit dem Regen" → Präp. "mit" + Nom. → Präpositionalgefüge | "kam die Kälte" → WER/WAS kam? → Subjekt | "wegen der...Schmerzen" → Präp. "wegen" + Genitiv → Präpositionalgefüge' },
      ],
      tip: '🎯 "wegen" + Genitiv = immer Präpositionalgefüge!',
      youtube: 'https://www.youtube.com/embed/iXl9u4kKcFY',
    },
  },

  // ============================================================
  // PLURAL-FORMEN
  // ============================================================

  {
    id: 'D3_2024_PLURAL_1',
    year: 2024,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Plural-Formen',
    questionText: `Setze die folgenden Wörter in den Plural. (Aufnahmeprüfung 2024)\n\nBraut / Kegelbahn / Nachfolger / Begräbnis / Schloss / Ruf\n\nWelche Pluralformen sind korrekt?`,
    options: [
      { label: 'Bräute / Kegelbahnen / Nachfolger / Begräbnisse / Schlösser / Rufe', correct: true },
      { label: 'Brauten / Kegelbahne / Nachfolgers / Begräbnise / Schlossen / Rufen', correct: false },
      { label: 'Bräuten / Kegelbahnen / Nachfolgern / Begräbnissen / Schlösse / Rufes', correct: false },
    ],
    solution: {
      intro: `Pluralformen – der Albtraum der deutschen Sprache! 😱 Aber keine Sorge, wir schaffen das!`,
      steps: [
        { title: 'Erklärung', content: '"Braut" → Bräute (Umlaut + e) | "Kegelbahn" → Kegelbahnen (n-Plural) | "Nachfolger" → Nachfolger (kein Plural-Endung bei er-Wörtern) | "Begräbnis" → Begräbnisse (is → isse) | "Schloss" → Schlösser (Umlaut + er) | "Ruf" → Rufe (e-Plural)' },
      ],
      tip: '🎯 Wörter auf "-er", "-el", "-en" haben oft keinen Plural-Zusatz. Wörter auf "-nis" werden zu "-nisse".',
      youtube: 'https://www.youtube.com/embed/qBxFB3K4ZY4',
    },
  },

  {
    id: 'D3_2025_PLURAL_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Plural-Formen',
    questionText: `Setze die folgenden Wörter in den Plural. (Aufnahmeprüfung 2025)\n\nFluss / Hemd / Land / Ergebnis / Wägelchen / Korridor / Ankunft / Flucht\n\nWelche Pluralformen sind korrekt?`,
    options: [
      { label: 'Flüsse / Hemden / Länder / Ergebnisse / Wägelchen / Korridore / Ankünfte / Fluchten', correct: true },
      { label: 'Flussen / Hemde / Lände / Ergebnise / Wägelchens / Korridoren / Ankünften / Fluchtens', correct: false },
      { label: 'Flusses / Hemds / Ländere / Ergebnissen / Wägelchene / Korridors / Ankunfte / Flüchte', correct: false },
    ],
    solution: {
      intro: `8 Plurale auf einmal – das ist der Hardcore-Modus! 💪`,
      steps: [
        { title: 'Erklärung', content: '"Fluss" → Flüsse (Umlaut+e) | "Hemd" → Hemden | "Land" → Länder (Umlaut+er) | "Ergebnis" → Ergebnisse | "Wägelchen" → Wägelchen (chen-Wörter: immer gleich) | "Korridor" → Korridore | "Ankunft" → Ankünfte (Umlaut+e) | "Flucht" → Fluchten' },
      ],
      tip: '🎯 Wörter auf "-chen" und "-lein" haben IMMER den gleichen Plural wie den Singular!',
      youtube: 'https://www.youtube.com/embed/qBxFB3K4ZY4',
    },
  },

  // ============================================================
  // WORTSCHATZ UND WORTBILDUNG
  // ============================================================

  {
    id: 'D3_2016_WORTSCH_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz und Wortbildung',
    questionText: `Suche für das unterstrichene Wort eine Wendung oder ein Wort mit entsprechender Bedeutung. (Text: Alfred Andersch, «Tochter»)\n\na) «Sie unterbrach sich höchstens eine Sekunde.» [Z. 30]\n– Was bedeutet «höchstens»?\n\nb) «Mammi und du, ihr seid überhaupt keine Spiesser.» [Z. 30]\n– Was bedeutet «überhaupt» hier?`,
    options: [
      { label: 'a) maximal, im besten Fall, nicht mehr als | b) absolut, wirklich, gar', correct: true },
      { label: 'a) mindestens, wenigstens, nicht weniger als | b) manchmal, gelegentlich, hin und wieder', correct: false },
      { label: 'a) ungefähr, etwa, fast | b) selten, kaum, kaum einmal', correct: false },
    ],
    solution: {
      intro: `Wortschatz-Power! 💡 Synonyme und Bedeutungen erforschen!`,
      steps: [
        { title: 'höchstens', content: '"höchstens" = maximal, im besten Fall, nicht mehr als → Gegenteil: "mindestens"' },
        { title: 'überhaupt', content: '"überhaupt" = in diesem Kontext: "absolut, gar, wirklich" → "ihr seid absolut keine Spiesser"' },
      ],
      tip: '🎯 Ersetze das Wort im Satz durch dein Synonym – klingt es noch sinnvoll? Dann ist es richtig!',
      youtube: 'https://www.youtube.com/embed/mTBEEt2MrIw',
    },
  },

  {
    id: 'D3_2019_WORTSCH_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz und Wortbildung',
    questionText: `Finde Synonyme und Antonyme. (Text: Raymond Chandler, «Der grosse Schlaf»)\n\n«…weiss wie frisches Orangenmark und schimmernd wie Porzellan.» [Z. 37]\n\na) Finde ein Wort mit ENTSPRECHENDER Bedeutung für «schimmernd».\nb) Finde ein Wort mit GEGENTEILIGER Bedeutung für «schimmernd».`,
    options: [
      { label: 'a) glänzend / leuchtend / brilliant | b) matt / stumpf / glanzlos', correct: true },
      { label: 'a) matt / trüb / stumpf | b) glänzend / leuchtend / scheinend', correct: false },
      { label: 'a) dunkel / schwarz / trüb | b) hell / strahlend / glitzernd', correct: false },
    ],
    solution: {
      intro: `Synonym-Jagd! 🦊 Gleiche Bedeutung, gegenteilige Bedeutung – zwei Fliegen mit einer Klappe!`,
      steps: [
        { title: 'Synonym von schimmernd', content: '"schimmernd" = leuchten/glänzen in schwacher Form → glänzend, leuchtend, scheinend, brilliant' },
        { title: 'Antonym von schimmernd', content: 'Gegenteil von glänzend = matt, stumpf, glanzlos, trüb' },
      ],
      tip: '🎯 Antonym = Gegenteil! Synonym = gleiche Bedeutung!',
      youtube: 'https://www.youtube.com/embed/mTBEEt2MrIw',
    },
  },

  {
    id: 'D3_2025_WORTBILD_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Sprachprüfung',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz und Wortbildung',
    questionText: `Nominalisiere das angegebene Adjektiv und füge den bestimmten Artikel hinzu. (Aufnahmeprüfung 2025)\n\nWelche Nominalisierungen sind korrekt?\n\nsauber / gewissenhaft / glatt / dunkel`,
    options: [
      { label: 'die Sauberkeit / die Gewissenhaftigkeit / die Glätte (das Glatte) / die Dunkelheit (das Dunkle)', correct: true },
      { label: 'der Saubere / der Gewissenhafte / der Glatte / der Dunkle', correct: false },
      { label: 'das Saubern / das Gewissenhaften / das Glätten / das Dunkeln', correct: false },
    ],
    solution: {
      intro: `Adjektive werden zu Nomen! ✨ Nominalisierung – groß schreiben und Artikel!`,
      steps: [
        { title: 'Endungen für Nominalisierungen', content: 'Adjektiv + "-keit"/"-heit" = abstrakte Nomen: sauber → Sauberkeit | gewissenhaft → Gewissenhaftigkeit | glatt → Glätte (Umlaut!) | dunkel → Dunkelheit' },
        { title: 'Alternativformen', content: 'Adjektive können auch mit Artikel großgeschrieben werden: das Glatte, das Dunkle, das Saubere' },
      ],
      tip: '🎯 Die meisten Adjektive → Nomen auf -keit oder -heit. Artikel = immer "die" bei -keit/-heit!',
      youtube: 'https://www.youtube.com/embed/mTBEEt2MrIw',
    },
  },

  // ============================================================
  // AUFSATZ UND SCHREIBEN
  // ============================================================

  {
    id: 'D3_2024_SCHREIB_1',
    year: 2024,
    subject: 'Deutsch',
    exam: 'Schreibaufgabe',
    group: 'Alte Prüfungen',
    topic: 'Aufsatz und Schreiben',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164519/AP24_GMS3_D_Schreibaufgabe.pdf?fp=1',
    questionText: `Die Abschiedsparty \n\n──────────────────────\nVerfasse einen Text zu EINER Schreibaufgabe:\n\n1) Stell dir vor, du bist Miles. Erzähle, wie es aus deiner Sicht dazu gekommen ist, dass lediglich zwei Personen zu deiner «Abschiedsparty» erschienen sind.\n\n2) Was hältst du davon, mit 16 Jahren von zuhause auszuziehen und in einem Internat zu wohnen? Erläutere Vor- und Nachteile.\n\n3) Schreibe einen Tagebucheintrag aus der Sicht von Miles' Mutter nach dem Fest.\n\n→ Welche Kriterien sind bei dieser Schreibaufgabe am wichtigsten?`,
    options: [
      { label: 'Inhaltlicher Bezug zum Basistext, klarer Aufbau, eigener Titel, präzise und flüssige Sprache, sinnvolle Abschnitte', correct: true },
      { label: 'Möglichst langer Text, viele Adjektive, kein Bezug zum Text nötig', correct: false },
      { label: 'Stichpunkte reichen, kein Titel nötig, Grammatikfehler egal', correct: false },
    ],
    solution: {
      intro: `Schreiben ist Kunst! ✍️ Hier die Tipps für alle drei Aufgaben!`,
      steps: [
        { title: 'Aufgabe 1 – Erzählung (Miles Perspektive)', content: 'Ich-Perspektive! Innere Gedanken zeigen. Warum kamen nur 2 Leute? Eigene Einsamkeit, fehlende Freundschaften thematisieren. Bezug zum Text: Theatertruppe, Cafeteria, Mutter.' },
        { title: 'Aufgabe 2 – Erörterung (Internat mit 16)', content: 'VORTEILE: Selbstständigkeit, neue Freunde, Abstand von Familie | NACHTEILE: Heimweh, Kosten, wenig Privatsphäre | Fazit: eigene Meinung klar formulieren.' },
        { title: 'Aufgabe 3 – Tagebucheintrag (Mutter)', content: 'Datum angeben! Ich-Perspektive der Mutter. Gefühle: Enttäuschung, Sorge, Liebe. Kontrast: sie hat alles vorbereitet, nur 2 kamen. Sohn zieht bald weg.' },
        { title: 'Für alle Aufgaben gilt', content: '✅ Eigener Titel | ✅ Abschnitte | ✅ Bezug zum Text | ✅ Präzise Sprache | ✅ 5 Min. planen vor dem Schreiben' },
      ],
      tip: '🎯 Tagebucheintrag = Datum + Ich-Perspektive + Gefühle. Erörterung = These + Argumente + Fazit.',
      youtube: 'https://www.youtube.com/embed/3S1INtcx8yQ',
    },
  },

];

export default questionsDeutschGMS3;