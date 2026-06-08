export const questions2022 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D3_2022_TEXTVERST_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Der See liegt in einer einsamen Gegend.
2. Bei der Bootsfahrt ist es praktisch windstill.
3. Es ist so dunkel, dass Adam seine Begleiterin auf dem Boot nicht erkennen kann.
4. Adam nimmt sich vor, Amber zur Rede zu stellen, wenn er sie trifft.
5. Während seiner Rede hat Adam Amber nicht in die Augen geschaut.
6. Die Beziehung von Adam zu Amber ist in einer schwierigen Phase.
7. Adam ist froh, dass er zornig wird.
8. Adam wollte die Beziehung mit Amber auf dem Boot beenden.
9. Adam kann Auto fahren.
10. Bevor Adam an Land ankommt, hört man Tiere in der Nähe.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 2, 5, 6, 7, 9, 10 | stimmt nicht: 1, 3, 4, 8',
        correct: true,
      },
      {
        label: 'stimmt: 1, 2, 5, 6, 9, 10 | stimmt nicht: 3, 4, 7, 8',
        correct: false,
      },
      {
        label: 'stimmt: 2, 4, 6, 7, 9, 10 | stimmt nicht: 1, 3, 5, 8',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: stimmt / stimmt nicht',
          content: `Jede Aussage direkt mit einer Textstelle belegen. Vorsicht vor Details, die fast stimmen!`,
        },
        {
          title: 'Auflösung der 10 Aussagen',
          content: `1. ❌ stimmt nicht – Der See liegt mitten in Reihenhaussiedlungen: «der von grossen Reihenhaussiedlungen umgeben war» (Z. 1) → keine einsame Gegend.

2. ✅ stimmt – «Kein Wind» / die Wasseroberfläche ist glatt (Z. 13: «glatte Oberfläche») → praktisch windstill.

3. ❌ stimmt nicht – Er hört ihre Feuerzeug-Geräusche und sieht den Rauch (Z. 4–5) → er kann sie wahrnehmen, es ist nicht komplett dunkel.

4. ❌ stimmt nicht – Er hatte sich VORHER vorgenommen zu reden, aber spontan eine Rede gehalten: «Er hatte sich nicht vorgenommen» → er hatte es nicht geplant, er tat es aus dem Gefühl heraus.

5. ✅ stimmt – «Als er sich umdrehte … war Amber verschwunden» (Z. 8) → er hat während der Rede weggeschaut (in die Ferne).

6. ✅ stimmt – Aus Adams Rede und Verhalten geht eine schwierige Beziehung hervor; er redet über Probleme, Fehler, Erwartungen.

7. ✅ stimmt – «Er war froh über seinen Zorn» oder ähnliche Textstelle: der Zorn gibt ihm Energie/Klarheit.

8. ❌ stimmt nicht – Er wollte reden und sich klären, nicht die Beziehung beenden. Er springt ins Wasser, um ihr nachzugehen.

9. ✅ stimmt – «er nicht einmal mit Schaltgetriebe fahren konnte» (Z. 28) → er kann Auto fahren, aber nicht mit Schaltgetriebe. Er kann also grundsätzlich Auto fahren (Automatik).

10. ✅ stimmt – «Das laute Krachen brachte die Ochsenfrösche in der Nähe zum Schweigen» (Z. 37) → Frösche hört man, bevor er anlegt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  See ist von Reihenhaussiedlungen umgeben → Nr. 1 stimmt nicht
2️⃣  «Schaltgetriebe»: Er kann Auto fahren, nur nicht schalten → Nr. 9 stimmt
3️⃣  Ochsenfrösche verstummen = man hört sie VOR dem Krachen → Nr. 10 stimmt
4️⃣  Beziehung beenden ≠ reden wollen → Nr. 8 stimmt nicht`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D3_2022_WORTSCHATZ_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 2 (3 Punkte): Synonyme finden.

a) «Adam sass vorn im Boot und betrachtete ein unstetes blaues Licht am Ufer.» [Z. 3]
Finde für «unstetes» ein Wort mit entsprechender Bedeutung, das im obigen Satz eingesetzt werden kann.

b) «Leise schob er einen Flügel auf und schlüpfte hinein.» [Z. 43]
Finde für «schlüpfte» einen Begriff mit entsprechender Bedeutung, der im obigen Satz eingesetzt werden kann.

c) «Er hoffte, Amber war vor seinem weitschweifigen Gefühlsbekenntnis ins Wasser gesprungen.» [Z. 22]
Finde für «weitschweifigen» einen Begriff mit entsprechender Bedeutung, der im obigen Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'a: schwankendes / flackerndes / unregelmässiges / blinkendes | b: schlich / stahl sich / glitt / huschte | c: ausführlichen / umfangreichen / langfädigen / ausufernden',
        correct: true,
      },
      {
        label: 'a: helles / weisses | b: lief / sprang | c: kurzen / knappen',
        correct: false,
      },
      {
        label: 'a: flackerndes | b: schlich | c: emotionalen / sentimentalen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «unstet», «schlüpfen», «weitschweifig»',
          content: `«unstet» = nicht ruhig, flackernd, schwankend, unbeständig:
→ ✅ schwankend, flackernd, unregelmässig, blinkend, tanzend, instabil, unbeständig
→ ❌ hell / weiss → andere Eigenschaft

«schlüpfen» = sich leise, behände, unauffällig bewegen, sich hineinbewegen:
→ ✅ schlich, stahl sich, glitt, huschte
→ ❌ lief / sprang → zu laut/direkt, passt nicht zur Heimlichkeit

«weitschweifig» = ausschweifend, lang, umständlich, viele Details enthaltend:
→ ✅ ausführlich, umfangreich, langfädig, ausufernd, detailliert
→ ❌ emotional / sentimental → anderer Aspekt (Inhalt, nicht Länge)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «unstet» → Licht, das nicht stillsteht → flackernd/schwankend
2️⃣  «schlüpfen» → leise, unauffällig → schleichen/gleiten
3️⃣  «weitschweifig» → lang und umständlich → ausführlich/langfädig
4️⃣  Ersatzwort immer in den Satz einsetzen und auf Sinnhaftigkeit prüfen`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D3_2022_WORTSCHATZ_2',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Antonyme finden.

a) «Einige Vögel strichen über die glatte Oberfläche des Sees.» [Z. 13]
Finde für «glatte» ein Wort mit gegensätzlicher Bedeutung, das im obigen Satz eingesetzt werden kann.

b) «Ohne die Schlüssel, ihre Kleider, ihre Pfeife oder die Flasche mitzunehmen, sprintete er die Steigung hinauf durch das feuchte Gras auf das Haus ihrer Eltern zu.» [Z. 40]
Finde für «sprintete» ein Wort mit gegensätzlicher Bedeutung, das im obigen Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'a: gekräuselte / bewegte / aufgewühlte / gewellte | b: schlenderte / schlich / spazierte',
        correct: true,
      },
      {
        label: 'a: dunkle / tiefe | b: stolperte / fiel',
        correct: false,
      },
      {
        label: 'a: rauhe / unebene | b: rannte / eilte',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Gegenteil von «glatt» und «sprinten»',
          content: `«glatt» (Wasseroberfläche) = ruhig, ohne Wellen, spiegelglatt:
Antonym: ✅ gekräuselt, bewegt, aufgewühlt, gewellt
→ ❌ dunkel/tief → andere Eigenschaft (Farbe/Tiefe, nicht Textur)
→ ❌ rau → eher Oberflächen-Textur von Festkörpern

«sprintete» = sehr schnell laufen, rennen:
Antonym: ✅ schlenderte, schlich, spazierte (= langsam/gemächlich bewegen)
→ ❌ stolperte/fiel → nicht das Gegenteil von Geschwindigkeit
→ ❌ rannte → gleichbedeutend, kein Gegenteil!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «glatt» bei Wasser → spiegelglatt → Gegenteil: Wellen/Bewegung → gekräuselt ✅
2️⃣  «sprinten» → maximal schnell → Gegenteil: langsam/gemächlich → schlendern ✅
3️⃣  Antonym muss GRAMMATISCH passen: «glatte» → Adjektiv Dat./Akk. Fem. → «gekräuselte»`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D3_2022_WORTSCHATZ_3',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Wortschatz',

    questionText: `Aufgabe 4 (1 Punkt): Wendung verstehen.

«Falls das Boot wieder aufs Wasser hinaustrieb, wäre das ihre Schuld.» [Z. 41]

Kreuze an, wie das unterstrichene Wort «Falls» sinngemäss ersetzt werden kann.

A) Weil
B) Obwohl
C) Wenn
D) Sofern`,

    options: [
      {
        label: 'C: Wenn | D: Sofern',
        correct: true,
      },
      {
        label: 'A: Weil | C: Wenn',
        correct: false,
      },
      {
        label: 'B: Obwohl | D: Sofern',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «falls» als Konjunktion',
          content: `«falls» = konditionale (bedingende) Konjunktion: wenn die Bedingung eintritt, dann …
→ ✅ «Wenn» = ebenfalls konditional: «Wenn das Boot aufs Wasser hineintrieb …» ✅
→ ✅ «Sofern» = konditional: «Sofern das Boot aufs Wasser hineintrieb …» ✅
→ ❌ «Weil» = kausal: Ursache-Wirkung (hier keine Ursache, sondern Bedingung)
→ ❌ «Obwohl» = konzessiv: trotz einer Bedingung (Gegensatz)

⚠️ Laut offizieller Lösung: jeder Fehler = 1 Punkt Abzug.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «falls» = konditional (Bedingung) → wenn/sofern ✅
2️⃣  «weil» = kausal (Ursache) → ❌
3️⃣  «obwohl» = konzessiv (Einschränkung/Gegensatz) → ❌
4️⃣  Merke: falls/wenn/sofern sind alle austauschbar für Bedingungssätze`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_WORTARTEN_DETAIL_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 5 (6 Punkte): Wortart + nähere Bestimmung.

«Als er sich dem Land näherte, schaltete er den Motor aus, doch es gelang ihm nicht, parallel zum Bootssteg anzulegen.» [Z. 37]

Nenne zuerst die Wortart (nach den 5 Wortarten) und bestimme diese dann näher:

Wörter: Als / sich / dem / Motor / nicht / parallel`,

    options: [
      {
        label: 'Als: Partikel/Konjunktion | sich: Pronomen/Reflexivpronomen | dem: Pronomen/Bestimmter Artikel | Motor: Nomen/— | nicht: Partikel/— | parallel: Adjektiv/—',
        correct: true,
      },
      {
        label: 'Als: Partikel/Konjunktion | sich: Pronomen/Personalpronomen | dem: Pronomen/Bestimmter Artikel | Motor: Nomen/— | nicht: Partikel/— | parallel: Partikel/—',
        correct: false,
      },
      {
        label: 'Als: Konjunktion/— | sich: Pronomen/Reflexivpronomen | dem: Partikel/Bestimmter Artikel | Motor: Nomen/— | nicht: Adjektiv/— | parallel: Adjektiv/—',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Analyse aller 6 Wörter',
          content: `Als → Partikel (5-WA-System) / nähere Bestimmung: Konjunktion (unterordnend) ✅
(leitet den Temporalsatz «Als er sich dem Land näherte» ein)

sich → Pronomen / nähere Bestimmung: Reflexivpronomen ✅
(bezieht sich auf das Subjekt «er» zurück → reflexiv)

dem → Pronomen / nähere Bestimmung: Bestimmter Artikel ✅
(steht direkt vor «Land», Dativ n. Sg.)

Motor → Nomen / nähere Bestimmung: — ✅
(Eigenname-ähnliches Nomen, Maskulinum)

nicht → Partikel / nähere Bestimmung: — ✅
(Negationspartikel; im 5-WA-System gehört es zu den Partikeln/Adverbien)

parallel → Adjektiv / nähere Bestimmung: — ✅
(beschreibt die Art und Weise des Anlegens, prädikativ/adverbial)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «Als» leitet Nebensatz ein → Konjunktion (unterordnend) ✅
2️⃣  «sich» (reflexiv) ≠ «ihn/ihm» (personal) → Reflexivpronomen ✅
3️⃣  «dem» vor Nomen = Bestimmter Artikel (nicht Demonstrativpronomen!)
4️⃣  «nicht» = Negationspartikel → Partikel (5-WA-System) ✅
5️⃣  «parallel» = Adjektiv (kann dekliniert werden: «parallele Linie»)`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_WORTARTEN_ZAEHLEN_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 6 (3 Punkte): Wie viele verschiedene Wortarten kommen vor? (5 Grundwortarten)

Satz A: «Wie der Aussenbordmotor im Mondlicht glänzte.»
Satz B: «Er redete schon eine ganze Weile.»
Satz C: «Er sagte ihren Namen.»`,

    options: [
      {
        label: 'A: 4 | B: 5 | C: 3',
        correct: true,
      },
      {
        label: 'A: 3 | B: 5 | C: 3',
        correct: false,
      },
      {
        label: 'A: 4 | B: 4 | C: 4',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Analyse der drei Sätze',
          content: `Satz A: «Wie der Aussenbordmotor im Mondlicht glänzte.»
→ Wie = Partikel (Konjunktion/Vergleichspartikel)
→ der = Pronomen (Bestimmter Artikel)
→ Aussenbordmotor = Nomen
→ im = Partikel (Präposition: in + dem)
→ Mondlicht = Nomen
→ glänzte = Verb
→ Wortarten: Partikel, Pronomen, Nomen, Verb = 4 ✅

Satz B: «Er redete schon eine ganze Weile.»
→ Er = Pronomen (Personalpronomen)
→ redete = Verb
→ schon = Partikel (Adverb)
→ eine = Pronomen (Unbestimmter Artikel)
→ ganze = Adjektiv
→ Weile = Nomen
→ Wortarten: Pronomen, Verb, Partikel, Adjektiv, Nomen = 5 ✅

Satz C: «Er sagte ihren Namen.»
→ Er = Pronomen (Personalpronomen)
→ sagte = Verb
→ ihren = Pronomen (Possessivpronomen)
→ Namen = Nomen
→ Wortarten: Pronomen, Verb, Nomen = 3 ✅
(«ihren» und «Er» sind BEIDE Pronomen → zählen als EINE Wortart!)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Nur VERSCHIEDENE Wortarten zählen (Er + ihren = beide Pronomen → zählt 1×)
2️⃣  Satz B hat alle 5 Wortarten → seltener Vollsatz!
3️⃣  «schon» = Partikel (Adverb) → nicht vergessen in Satz B
4️⃣  «im» = Präposition (in + dem zusammengezogen) → Partikel`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_SATZGLIEDER_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 7 (2 Punkte): Satzglieder bestimmen.

«Sie trieben im Boot von Ambers Stiefvater mitten auf einem ansonsten leeren künstlichen See, der von grossen Reihenhaussiedlungen umgeben war. Es war Frühherbst, und sie tranken Southern Comfort aus der Flasche. Adam sass vorn im Boot und betrachtete ein unstetes blaues Licht am Ufer, wahrscheinlich ein Fernseher, gesehen durch ein Fenster oder eine Glastür. Er hörte das kratzende Geräusch ihres Feuerzeugs, dann sah er Rauch über sich schweben und zerfasern.» [Z. 1]

Bestimme die folgenden Satzglieder:
– im Boot von Ambers Stiefvater
– sie
– ein unstetes blaues Licht am Ufer
– das kratzende Geräusch ihres Feuerzeugs`,

    options: [
      {
        label: 'im Boot von Ambers Stiefvater: Präpositionalgefüge | sie: Subjekt | ein unstetes blaues Licht am Ufer: Akkusativobjekt | das kratzende Geräusch ihres Feuerzeugs: Akkusativobjekt',
        correct: true,
      },
      {
        label: 'im Boot von Ambers Stiefvater: Dativobjekt | sie: Subjekt | ein unstetes blaues Licht am Ufer: Akkusativobjekt | das kratzende Geräusch ihres Feuerzeugs: Subjekt',
        correct: false,
      },
      {
        label: 'im Boot von Ambers Stiefvater: Präpositionalgefüge | sie: Akkusativobjekt | ein unstetes blaues Licht am Ufer: Akkusativobjekt | das kratzende Geräusch ihres Feuerzeugs: Akkusativobjekt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder bestimmen',
          content: `«im Boot von Ambers Stiefvater»
→ Präposition «im» (in + dem) + Nomengruppe → Präpositionalgefüge ✅
→ Funktion: Lokalangabe (WO trieben sie?)

«sie» (in «sie tranken»)
→ WER trank? → sie → Subjekt ✅ (Nominativ, Personalpronomen)

«ein unstetes blaues Licht am Ufer»
→ betrachtete WAS? → ein unstetes blaues Licht → Akkusativobjekt ✅
(Akkusativ: «ein unstetes …» = Akk. n. Sg.)

«das kratzende Geräusch ihres Feuerzeugs»
→ hörte WAS? → das kratzende Geräusch → Akkusativobjekt ✅
(Akkusativ: «das … Geräusch» = Akk. n. Sg.)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präpositionalgefüge: Präp. + Nomengruppe → kein Objekt, sondern Angabe
2️⃣  Subjekt: WER/WAS + Verb? → «sie» (Nominativ)
3️⃣  Akkusativobjekt: Wen/Was? → «ein … Licht», «das … Geräusch»
4️⃣  Genitiv-Attribute («ihres Feuerzeugs») gehören zur Nomengruppe des Objekts`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_SUBJEKTE_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 8 (2 Punkte): Subjekte herausschreiben.

«Nichts passierte. Er schob den Hebel in eine andere Position und versuchte es erneut.» [Z. 31]

Schreibe der Reihe nach alle Subjekte heraus.`,

    options: [
      { label: 'Nichts | Er', correct: true },
      { label: 'Nichts | Er | es', correct: false },
      { label: 'Er', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Subjekte finden',
          content: `Satz 1: «Nichts passierte.»
→ WAS passierte? → Nichts → Subjekt ✅ (Indefinitpronomen im Nominativ)

Satz 2: «Er schob den Hebel … und versuchte es erneut.»
→ WER schob? / WER versuchte? → Er → Subjekt ✅ (Nom. m. Sg., Personalpronomen)
→ «es» = Akkusativobjekt (versuchte WAS? → es) → kein Subjekt!
→ «den Hebel» = Akkusativobjekt (schob WAS?) → kein Subjekt!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «Nichts» = Indefinitpronomen, kann Subjekt sein → WAS passierte? → Nichts ✅
2️⃣  «es» = Akkusativ (versuchte WAS?) → kein Subjekt!
3️⃣  Pro falsche oder fehlende Nennung: je 1 Punkt Abzug`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_PARTIKELN_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Grammatik',

    questionText: `Aufgabe 9 (4 Punkte): Partikeln herausschreiben und Konjunktionen unterstreichen.

«Alle, sogar die anderen Kids der Schule, zeigten eine für den Mittelwesten typische technische Grundkompetenz und konnten einen Ölwechsel selbst machen oder ein Gewehr reinigen, während er nicht einmal mit Schaltgetriebe fahren konnte.» [Z. 28]

Schreibe alle Partikeln der Reihe nach heraus und unterstreiche die Konjunktionen.`,

    options: [
      {
        label: 'Partikeln: sogar, für, und, oder, während, nicht, einmal, mit | Konjunktionen (unterstreichen): und, oder, während',
        correct: true,
      },
      {
        label: 'Partikeln: sogar, für, und, oder, während, nicht, mit | Konjunktionen: und, oder, während',
        correct: false,
      },
      {
        label: 'Partikeln: sogar, für, und, selbst, oder, während, nicht, einmal, mit | Konjunktionen: und, oder, während',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Partikeln und Konjunktionen',
          content: `Alle Partikeln (im 5-WA-System: Präpositionen + Konjunktionen + Adverbien):

sogar → Partikel (Fokuspartikel/Adverb) ✅
für → Partikel (Präposition) ✅
und → Partikel (Konjunktion, nebenordnend) ✅ → unterstreichen!
(selbst) → in manchen Lösungen akzeptiert als Partikel/Adverb
oder → Partikel (Konjunktion, nebenordnend) ✅ → unterstreichen!
während → Partikel (Konjunktion, unterordnend) ✅ → unterstreichen!
nicht → Partikel (Negationsadverb) ✅
einmal → Partikel (Adverb) ✅
mit → Partikel (Präposition) ✅

Konjunktionen zum Unterstreichen: und | oder | während

⚠️ «selbst» ist in manchen Varianten als Partikel akzeptiert, aber nicht obligatorisch.
⚠️ Pro falsche oder fehlende Nennung: je ½ Punkt Abzug.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Partikeln (5-WA-System) = Präpositionen + Konjunktionen + Adverbien
2️⃣  Konjunktionen speziell: verbinden Sätze oder Satzteile → und, oder, während
3️⃣  «während» = unterordnende Konjunktion (adversativ/temporal) → Verb am Ende
4️⃣  «nicht», «sogar», «einmal» = Adverbien/Fokuspartikeln → gehören zu Partikeln`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_VERBALTEIL_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 10 (6 Punkte): Verbale Teile näher bestimmen.

«Als er sich umdrehte, um festzustellen, welche Wirkung seine Rede gehabt hatte, war Amber verschwunden, Jeans und Sweater auf einem Häufchen mit Pfeife und Feuerzeug.» [Z. 7]

Betrachte die verbalen Teile und kreuze alles Zutreffende an:

Vollverb | Hilfsverb | Modalverb | Personalform | Infinitiv | Partizip II

umdrehte / festzustellen / gehabt / hatte / war / verschwunden`,

    options: [
      {
        label: 'umdrehte: Vollverb+Personalform | festzustellen: Vollverb+Infinitiv | gehabt: Vollverb+Partizip II | hatte: Hilfsverb+Personalform | war: Hilfsverb+Personalform | verschwunden: Vollverb+Partizip II',
        correct: true,
      },
      {
        label: 'umdrehte: Vollverb+Personalform | festzustellen: Vollverb+Infinitiv | gehabt: Hilfsverb+Partizip II | hatte: Hilfsverb+Personalform | war: Vollverb+Personalform | verschwunden: Vollverb+Partizip II',
        correct: false,
      },
      {
        label: 'umdrehte: Vollverb+Personalform | festzustellen: Modalverb+Infinitiv | gehabt: Vollverb+Partizip II | hatte: Hilfsverb+Personalform | war: Hilfsverb+Personalform | verschwunden: Vollverb+Partizip II',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbale Teile analysieren',
          content: `umdrehte → Vollverb ✅ | Personalform ✅
(konjugiert, Präteritum, trennbares Verb «umdrehen»; Hauptbedeutung trägt das Vollverb)

festzustellen → Vollverb ✅ | Infinitiv ✅
(Infinitiv mit «zu» von «feststellen»; steht nach «um»)

gehabt → Vollverb ✅ | Partizip II ✅
(Partizip II von «haben»; hier: «gehabt» = vollständiges Vollverb, nicht Hilfsverb, da «hatte … gehabt» → Plusquamperfekt von «haben»)

hatte → Hilfsverb ✅ | Personalform ✅
(bildet zusammen mit «gehabt» das Plusquamperfekt; konjugiert: 3. Pers. Sg. Prät.)

war → Hilfsverb ✅ | Personalform ✅
(bildet zusammen mit «verschwunden» Plusquamperfekt Passiv-ähnlich; konjugiert)

verschwunden → Vollverb ✅ | Partizip II ✅
(Partizip II von «verschwinden»; bildet mit «war» den verbalen Teil)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Vollverb: trägt die Hauptbedeutung (umdrehte, feststellen, gehabt, verschwunden)
2️⃣  Hilfsverb: haben/sein/werden → bildet zusammengesetzte Zeitformen (hatte, war)
3️⃣  Partizip II: ge-…-t / ge-…-en → gehabt, verschwunden ✅
4️⃣  Infinitiv mit «zu»: festzustellen → Infinitiv ✅ (kein Partizip, kein Konjunktiv)`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_FUTUR_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 11 (1 Punkt): Futur I bilden.

«Leise schob er einen Flügel auf und schlüpfte hinein.» [Z. 43]

Setze den Satz ins Futur I.`,

    options: [
      {
        label: 'Leise wird er einen Flügel aufschieben und hineinschlüpfen.',
        correct: true,
      },
      {
        label: 'Leise wird er einen Flügel aufgeschoben haben und hineingleiten.',
        correct: false,
      },
      {
        label: 'Leise wird er einen Flügel aufschieben und schlüpft hinein.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Futur I bilden',
          content: `Futur I: werden + Infinitiv

«schob … auf» → trennbares Verb «aufschieben» → Infinitiv: aufschieben
→ «wird … aufschieben» ✅

«schlüpfte hinein» → trennbares Verb «hineinschlüpfen» → Infinitiv: hineinschlüpfen
→ «hineinschlüpfen» ✅

Beide Verben mit «wird» im Futur I:
✅ Leise wird er einen Flügel aufschieben und hineinschlüpfen.

⚠️ Verbzusätze («auf», «hinein») müssen mit dem Infinitiv zusammengeführt werden: aufschieben, hineinschlüpfen
⚠️ Nur EINE Form von «werden» für beide Infinitive genügt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Futur I = werden + Infinitiv (nicht Partizip II!)
2️⃣  Trennbare Verben zusammenführen: schob auf → aufschieben | schlüpfte hinein → hineinschlüpfen
3️⃣  Ein «wird» für zwei Infinitive genügt (Ellipse möglich)`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_INFINITIVE_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 12 (2 Punkte): Alle Verben in der Infinitivform.

«Dann stand er wieder auf und blickte an den Rändern des Bootes entlang; vielleicht war sie ja direkt daneben und verbiss sich das Lachen.» [Z. 17]

Schreibe alle Verben aus dem obigen Satz der Reihe nach untereinander in der Infinitivform auf.`,

    options: [
      { label: 'aufstehen | entlangblicken | sein | (sich) verbeissen', correct: true },
      { label: 'stehen | blicken | sein | verbeissen', correct: false },
      { label: 'aufstehen | entlangblicken | werden | verbeissen', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verben im Infinitiv',
          content: `«stand … auf» → trennbares Verb «aufstehen» → Infinitiv: aufstehen ✅
(Verbzusatz «auf» gehört zum Verb!)

«blickte … entlang» → trennbares Verb «entlangblicken» → Infinitiv: entlangblicken ✅
(Verbzusatz «entlang» gehört zum Verb!)

«war» → Infinitiv: sein ✅
(Präteritum von «sein»: war → sein)

«verbiss sich» → trennbares/reflexives Verb «(sich) verbeissen» → Infinitiv: (sich) verbeissen ✅
(Präteritum von «verbeissen»; stark: verbeissen → verbiss)

⚠️ «stand auf» ≠ nur «stehen» — der Verbzusatz «auf» macht es zu «aufstehen»!
⚠️ Gleiches gilt für «blickte entlang» → «entlangblicken»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verbzusatz am Satzende immer zum Verb addieren: auf → aufstehen, entlang → entlangblicken
2️⃣  «war» → Infinitiv «sein» (stark/unregelmässig!)
3️⃣  «verbiss» → stark: verbeissen → verbiss → verbeissen
4️⃣  Reihenfolge des Textes beibehalten`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_AKTIV_PASSIV_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 13 (2 Punkte): Verbalen Teil näher bestimmen.

«Das laute Krachen brachte die Ochsenfrösche in der Nähe zum Schweigen.» [Z. 37]

Kreuze alles, was auf obigen Satz zutrifft, an.

Aktiv | Passiv | Indikativ | Konjunktiv | Perfekt | Präteritum`,

    options: [
      {
        label: 'Aktiv | Indikativ | Präteritum',
        correct: true,
      },
      {
        label: 'Passiv | Indikativ | Präteritum',
        correct: false,
      },
      {
        label: 'Aktiv | Konjunktiv | Perfekt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbalen Teil bestimmen',
          content: `«brachte … zum Schweigen» = Verbalkomplex («bringen … zum Schweigen»)

Genus verbi:
→ «Das laute Krachen brachte» = Subjekt handelt selbst → Aktiv ✅
→ Passiv wäre: «Die Ochsenfrösche wurden … zum Schweigen gebracht»

Modus:
→ Normale Aussageform, keine Konjunktiv-Endung → Indikativ ✅
→ Konjunktiv II wäre: «brächte»

Zeitform:
→ «brachte» = Präteritum von «bringen» (stark: bringen → brachte) ✅
→ Perfekt wäre: «hat … gebracht»

✅ Aktiv | Indikativ | Präteritum`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Aktiv: Subjekt handelt → «Das Krachen brachte» → Aktiv ✅
2️⃣  Indikativ: normale Form, kein Konjunktiv → «brachte» ✅
3️⃣  Präteritum: «brachte» (nicht «hat gebracht») → einfache Vergangenheit
4️⃣  Dreifach-Check: Genus verbi + Modus + Zeitform`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_ZEITFORMEN_ZAEHLEN_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 14 (1 Punkt): Zeitformen zählen.

«Als er sich umdrehte, um festzustellen, welche Wirkung seine Rede gehabt hatte, war Amber verschwunden, Jeans und Sweater auf einem Häufchen mit Pfeife und Feuerzeug.» [Z. 8]

Kreuze an, wie viele verschiedene Zeitformen in dem obigen Satz zu finden sind.

A) 1
B) 2
C) 3
D) 4`,

    options: [
      { label: 'B: 2', correct: true },
      { label: 'A: 1', correct: false },
      { label: 'C: 3', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zeitformen zählen',
          content: `«Als er sich umdrehte» → Präteritum (umdrehte) — Zeitform 1 ✅

«welche Wirkung seine Rede gehabt hatte» → Plusquamperfekt (hatte … gehabt) — Zeitform 2 ✅

«war Amber verschwunden» → ebenfalls Plusquamperfekt (war … verschwunden)
→ gleiche Zeitform wie «hatte gehabt» → zählt NICHT nochmals

⚠️ Infinitiv «festzustellen» = keine eigene Zeitform!
⚠️ «war verschwunden» und «hatte gehabt» sind BEIDE Plusquamperfekt → nur eine Zeitform

✅ Insgesamt: 2 verschiedene Zeitformen (Präteritum + Plusquamperfekt)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präteritum: «umdrehte» (einfache Vergangenheit) → Zeitform 1
2️⃣  Plusquamperfekt: «hatte gehabt», «war verschwunden» → gilt als EINE Zeitform
3️⃣  Infinitiv/Partizip ohne konjugiertes Hilfsverb = keine eigenständige Zeitform
4️⃣  Antwort: 2 ✅`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_PRAEPOSITIONALGRUPPEN_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 15 (3 Punkte): Präpositionalgefüge herausschreiben.

«Sie trieben im Boot von Ambers Stiefvater mitten auf einem ansonsten leeren künstlichen See, der von grossen Reihenhaussiedlungen umgeben war.» [Z. 1]

Schreibe aus dem obigen Satz alle Präpositionalgefüge untereinander der Reihe nach heraus.`,

    options: [
      {
        label: 'im Boot von Ambers Stiefvater | (mitten) auf einem ansonsten leeren künstlichen See | von grossen Reihenhaussiedlungen',
        correct: true,
      },
      {
        label: 'im Boot | von Ambers Stiefvater | auf einem See | von grossen Reihenhaussiedlungen',
        correct: false,
      },
      {
        label: 'im Boot von Ambers Stiefvater | auf einem künstlichen See | von Reihenhaussiedlungen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präpositionalgefüge herausschreiben',
          content: `Ein Präpositionalgefüge = Präposition + vollständige Nomengruppe (inkl. aller Attribute).

1. «im Boot von Ambers Stiefvater»
→ «im» (= in + dem) + «Boot von Ambers Stiefvater» ✅
→ «von Ambers Stiefvater» gehört als Genitivattribut zur Nomengruppe «das Boot» → alles zusammen

2. «(mitten) auf einem ansonsten leeren künstlichen See»
→ «auf» + «einem ansonsten leeren künstlichen See» ✅
→ «mitten» = Adverb, gehört als Verstärkung dazu (optional)

3. «von grossen Reihenhaussiedlungen»
→ «von» + «grossen Reihenhaussiedlungen» ✅ (im Relativsatz)

⚠️ NICHT «von Ambers Stiefvater» separat herausschreiben — es ist ein Genitivattribut von «Boot», kein eigenes Präpositionalgefüge!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präpositionalgefüge: Präp. + GESAMTE Nomengruppe (mit allen Attributen)
2️⃣  Attribute (Adjektive, Genitive) gehören zur Nomengruppe → mitherausschreiben
3️⃣  «von Ambers Stiefvater» ist Genitivattribut zu «Boot» → NICHT trennen
4️⃣  Relativsätze sind eigene Sätze → Präpositionalgefüge darin separat erfassen`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_PRONOMEN_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 16 (4 Punkte): Pronomen näher bestimmen.

«Adam sass vorn im Boot und betrachtete ein unstetes blaues Licht am Ufer, wahrscheinlich ein Fernseher, gesehen durch ein Fenster oder eine Glastür.» [Z. 3]

Bestimme die folgenden Pronomen näher:
– «ein» (in «ein unstetes blaues Licht»)
– «ein» (in «ein Fernseher»)
– «ein» (in «ein Fenster»)
– «eine» (in «eine Glastür»)`,

    options: [
      {
        label: 'Alle vier: Unbestimmter Artikel',
        correct: true,
      },
      {
        label: 'Alle vier: Indefinitpronomen',
        correct: false,
      },
      {
        label: 'ein (Licht): Unbestimmter Artikel | ein (Fernseher): Indefinitpronomen | ein (Fenster): Unbestimmter Artikel | eine (Glastür): Unbestimmter Artikel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Pronomen näher bestimmen',
          content: `«ein unstetes blaues Licht» → «ein» steht direkt vor dem Nomen «Licht» → Unbestimmter Artikel ✅
«ein Fernseher» → «ein» steht direkt vor «Fernseher» → Unbestimmter Artikel ✅
«ein Fenster» → «ein» steht direkt vor «Fenster» → Unbestimmter Artikel ✅
«eine Glastür» → «eine» steht direkt vor «Glastür» → Unbestimmter Artikel ✅

⚠️ Unbestimmter Artikel ≠ Indefinitpronomen:
→ Unbestimmter Artikel: steht DIREKT VOR einem Nomen (ein/eine/einen …)
→ Indefinitpronomen: steht ALLEIN, ohne nachfolgendes Nomen (z.B. «Einer kam», «nichts passierte»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «ein/eine» VOR Nomen = Unbestimmter Artikel ✅
2️⃣  «ein» OHNE Nomen danach = Indefinitpronomen (z.B. «Einer von ihnen»)
3️⃣  Alle vier Fälle hier: jeweils direkt vor Nomen → alle Unbestimmter Artikel
4️⃣  Abzug pro Fehler: 1 Punkt!`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_KOMPARATIV_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 17 (3 Punkte): Adjektive im Komparativ und Superlativ.

Schreibe von den folgenden Adjektiven den Komparativ und Superlativ auf:

a) laut
b) glatt
c) nah`,

    options: [
      {
        label: 'a: lauter / am lautesten | b: glatter / am glattesten | c: näher / am nächsten',
        correct: true,
      },
      {
        label: 'a: lauter / am lautsten | b: glatter / am glattsten | c: näher / am nähsten',
        correct: false,
      },
      {
        label: 'a: lauter / am lautesten | b: glätter / am glättesten | c: näher / am nächsten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Komparativ und Superlativ',
          content: `a) «laut»:
→ Komparativ: lauter (laut + er) ✅
→ Superlativ: am lautesten (laut + esten, mit e-Einschub vor st nach -t) ✅

b) «glatt»:
→ Komparativ: glatter (glatt + er) ✅
→ Superlativ: am glattesten (glatt + esten, mit e-Einschub) ✅
→ ❌ «glätter» = falsch (kein Umlaut bei «glatt» im Komparativ)

c) «nah»:
→ Komparativ: näher (nah + er + Umlaut: a→ä) ✅
→ Superlativ: am nächsten (unregelmässig! nah → nächst-) ✅
→ ❌ «am nähsten» = falsch (Superlativ von «nah» ist «nächst», nicht «nähst»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Komparativ: Grundform + -er (+ evtl. Umlaut): lauter, glatter, näher
2️⃣  Superlativ: am + Grundform + -sten (+ evtl. e-Einschub bei -t, -d, -s, -sch): am lautesten, am glattesten
3️⃣  UNREGELMÄSSIG: nah → näher → am nächsten (Superlativ «nächst»!)
4️⃣  «glatt» hat KEINEN Umlaut im Komparativ (nicht «glätter»)`,
    },
  },

  // ── AUFGABE 18 ─────────────────────────────────────────────

  {
    id: 'D3_2022_GRAMMATIK_KOMMA_1',
    year: 2022,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132682/AP22_GMS3_Deutsch_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Grammatik',

    questionText: `Aufgabe 18 (3 Punkte): Kommas setzen.

Setze in der untenstehenden Textvariante alle nötigen Kommas:

«Adam sass im Boot und betrachtete ein unstetes blaues Licht am Ufer wahrscheinlich ein Fernseher gesehen durch ein Fenster das nach Norden zeigte während Amber die er kaum sehen konnte an der Pfeife sog.»`,

    options: [
      {
        label: 'Adam sass im Boot und betrachtete ein unstetes blaues Licht am Ufer, wahrscheinlich ein Fernseher, gesehen durch ein Fenster, das nach Norden zeigte, während Amber, die er kaum sehen konnte, an der Pfeife sog.',
        correct: true,
      },
      {
        label: 'Adam sass im Boot und betrachtete ein unstetes blaues Licht am Ufer wahrscheinlich ein Fernseher gesehen durch ein Fenster das nach Norden zeigte während Amber die er kaum sehen konnte an der Pfeife sog.',
        correct: false,
      },
      {
        label: 'Adam sass im Boot, und betrachtete ein unstetes blaues Licht am Ufer, wahrscheinlich ein Fernseher, gesehen durch ein Fenster, das nach Norden zeigte, während Amber die er kaum sehen konnte an der Pfeife sog.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Kommaregeln anwenden',
          content: `Komma 1: «am Ufer[,] wahrscheinlich ein Fernseher»
→ Apposition/Einschub («wahrscheinlich ein Fernseher» erklärt «Licht») → Komma ✅

Komma 2: «ein Fernseher[,] gesehen durch ein Fenster»
→ nachgestelltes Partizipialgefüge («gesehen durch …») → Komma ✅

Komma 3: «ein Fenster[,] das nach Norden zeigte»
→ Relativsatz → Komma vor «das» ✅

Komma 4: «zeigte[,] während Amber …»
→ vor unterordnender Konjunktion «während» → Komma ✅

Komma 5 + 6: «während Amber[,] die er kaum sehen konnte[,]»
→ eingeschobener Relativsatz → je ein Komma davor und danach ✅

⚠️ Kein Komma nach «und» (verbindet Prädikate, kein vollständiger zweiter Hauptsatz)
⚠️ Jedes falsche und jedes fehlende Komma = 0,5 Punkte Abzug!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147233/AP22_GMS3_Deutsch_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Apposition/Erläuterung: «wahrscheinlich ein Fernseher» → Komma ✅
2️⃣  Nachgestelltes Partizipialgefüge: «gesehen durch …» → Komma ✅
3️⃣  Relativsatz: «das nach Norden zeigte» → Komma vor «das» ✅
4️⃣  Vor «während» (unterordnend) → Komma ✅
5️⃣  Eingeschobener Relativsatz: Komma VOR und NACH dem Satz ✅`,
    },
  },

];