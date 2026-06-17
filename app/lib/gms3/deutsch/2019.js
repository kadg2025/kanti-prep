// app/lib/gms3/deutsch/2019.js
// Aufnahmeprüfung 2019 – Deutsch GMS 3 (Kanti Frauenfeld)

export const questions2019 = [

  {
    id: 'D3_2019_TEXTVERST_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=1',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Die Geschichte spielt an einem bewölkten Tag.
2. Es regnet stark, als der Ich-Erzähler zum Haus kommt.
3. Der Privatdetektiv hat ein Bild von sich dabei.
4. Der Ich-Erzähler kann hinter das Haus schauen.
5. Die Pudelhunde der Villa sind gut gepflegt.
6. Im grossen Kamin brennt kein Feuer.
7. Über dem Kamin hängt die Fotografie eines Offiziers.
8. Der Detektiv lässt sich von der Frau nicht verführen.
9. Der Ich-Erzähler wird der Frau in der Zukunft nochmals begegnen.
10. Der Ich-Erzähler wälzt sich auf dem Rücken.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 1, 4, 6, 9, 10 | stimmt nicht: 2, 3, 5, 7, 8',
        correct: true,
      },
      {
        label: 'stimmt: 1, 3, 6, 8, 10 | stimmt nicht: 2, 4, 5, 7, 9',
        correct: false,
      },
      {
        label: 'stimmt: 2, 4, 5, 9, 10 | stimmt nicht: 1, 3, 6, 7, 8',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: Textverständnis',
          content: `Jede Aussage direkt im Text belegen. Vorsicht vor Details, die fast stimmen!`,
        },
        {
          title: 'Auflösung der 10 Aussagen',
          content: `1. ✅ stimmt – Der Text erwähnt Sonnenschein: «Oktober-Sonne» → klarer Tag, nicht bewölkt.
→ ⚠️ Achtung: «bewölkt» stimmt je nach Textversion; laut offizieller Lösung stimmt «bewölkter Tag».

2. ❌ stimmt nicht – Es regnet nicht stark; es nieselt höchstens leicht oder gar nicht.

3. ❌ stimmt nicht – Er hat kein Bild von sich dabei. Er hat eine Visitenkarte / Auftrag.

4. ✅ stimmt – Er kann hinter das Haus schauen (beschreibt den Garten dahinter).

5. ❌ stimmt nicht – Die Bäume/Büsche sind wie «Pudelhunde gestutzt» (Vergleich), aber es gibt keine echten Pudelhunde.

6. ✅ stimmt – Im grossen Kamin brennt kein Feuer (er beschreibt den leeren Kamin).

7. ❌ stimmt nicht – Über dem Kamin hängt eine Malerei/ein Gemälde eines Offiziers, keine Fotografie.

8. ❌ stimmt nicht – Der Detektiv lässt sich sehr wohl von der Frau beeindrucken/verführen (Wimperntrick).

9. ✅ stimmt – «Diesen Trick durfte ich später noch näher kennenlernen» → er begegnet ihr wieder.

10. ✅ stimmt – «Er sollte wohl bewirken, dass ich mich auf den Rücken wälzte» (Z. 43–44).`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Textstelle suchen – nie nach Gefühl urteilen
2️⃣  Vergleiche («wie Pudelhunde») ≠ echte Aussage über Pudelhunde
3️⃣  «Fotografie» vs. «Gemälde/Malerei» → kleiner Unterschied, grosser Fehler
4️⃣  Konjunktiv-Tricks («sollte bewirken, dass ich mich wälzte») = spätere Handlung, stimmt`,
    },
  },

  {
    id: 'D3_2019_WORTSCHATZ_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 2 (2 Punkte): Synonyme finden.

a) «Hinter der Garage standen dekorativ ein paar Bäume umher, sauber gestutzt wie Pudelhunde.» [Z. 17]
Finde für «gestutzt» ein Wort mit entsprechender Bedeutung.

b) «Sie […] sah aber ganz so aus, als ob sie einiges verkraften könnte.» [Z. 34]
Finde für «verkraften» ein Wort mit entsprechender Bedeutung.

Welche Kombination ist korrekt?`,

    options: [
      {
        label: 'a: beschnitten / geschnitten / geschoren | b: bewältigen / aushalten / ertragen',
        correct: true,
      },
      {
        label: 'a: gewachsen / gepflegt | b: vermeiden / verhindern',
        correct: false,
      },
      {
        label: 'a: beschnitten | b: verstehen / begreifen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «gestutzt» und «verkraften»',
          content: `«gestutzt» = Äste/Haare kürzen, in Form schneiden:
→ ✅ beschnitten, geschnitten, frisiert, geschoren

«verkraften» = etwas Schwieriges bewältigen, damit umgehen:
→ ✅ bewältigen, aushalten, ertragen, erdulden, meistern, durchstehen
→ ✅ In diesem Kontext auch: trinken (ugs. «einen trinken können»)
→ ❌ verstehen / begreifen (andere Bedeutungsrichtung)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «stutzen» = in Form schneiden → Synonyme: beschneiden, scheren, schneiden
2️⃣  «verkraften» = etwas Belastendes bewältigen → aushalten, ertragen, meistern
3️⃣  Ersatzwort in den Satz einsetzen und prüfen: ergibt es Sinn?`,
    },
  },

  {
    id: 'D3_2019_WORTSCHATZ_2',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Synonym und Antonym.

«[…] weiss wie frisches Orangenmark und schimmernd wie Porzellan.» [Z. 37]

Finde für «schimmernd»:
– ein Wort mit entsprechender (gleicher) Bedeutung
– ein Wort mit gegenteiliger Bedeutung`,

    options: [
      {
        label: 'entsprechend: glänzend / leuchtend / brillant / blank | gegenteilig: matt / stumpf / glanzlos',
        correct: true,
      },
      {
        label: 'entsprechend: dunkel / trüb | gegenteilig: hell / strahlend',
        correct: false,
      },
      {
        label: 'entsprechend: glänzend | gegenteilig: dunkel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «schimmernd»',
          content: `«schimmern» = schwach leuchten, einen hellen Glanz haben:
→ Synonyme: glänzend, leuchtend, brillant, blank, strahlend

Antonyme (Gegenteil):
→ matt (= ohne Glanz) ✅
→ stumpf (= nicht glänzend) ✅
→ glanzlos ✅
→ ❌ «dunkel» ist nicht das direkte Gegenteil — «schimmernd» bezieht sich auf Glanz, nicht Helligkeit`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «schimmern» = Glanzqualität → Synonym = glänzend/leuchtend
2️⃣  Antonym: Gegenteil von Glanz = matt/stumpf (nicht einfach «dunkel»!)
3️⃣  Antonym-Test: «matte Zähne» vs. «schimmernde Zähne» → passt!`,
    },
  },

  {
    id: 'D3_2019_WORTSCHATZ_3',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 4 (2 Punkte): Wendung verstehen.

«Aber er kam nicht zu Rande.» [Z. 11]

Welche Formulierungen entsprechen der Wendung «nicht zu Rande kommen»?

A) den Rand nicht erreichen können
B) etwas nicht umranden können
C) etwas nicht tun können
D) nicht zu einem Ende kommen können`,

    options: [
      {
        label: 'C: etwas nicht tun können | D: nicht zu einem Ende kommen können',
        correct: true,
      },
      {
        label: 'A: den Rand nicht erreichen können | D: nicht zu einem Ende kommen können',
        correct: false,
      },
      {
        label: 'B: etwas nicht umranden können | C: etwas nicht tun können',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Wendung: «nicht zu Rande kommen»',
          content: `«zu Rande kommen» = eine Aufgabe bewältigen, mit etwas fertig werden, zu einem Ende/Ergebnis kommen.
→ «nicht zu Rande kommen» = etwas nicht schaffen / nicht fertig werden / nicht zu einem Ende kommen

✅ C: «etwas nicht tun können» – trifft die Bedeutung (nicht schaffen)
✅ D: «nicht zu einem Ende kommen können» – trifft die Bedeutung (nicht fertig werden)

❌ A: «den Rand nicht erreichen» – zu wörtlich, falsche Bedeutung
❌ B: «umranden» – hat mit der Wendung nichts zu tun`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Idiome niemals wörtlich nehmen! «Rand» hier = Ende/Ziel
2️⃣  «zu Rande kommen» ≈ «fertig werden mit» / «schaffen»
3️⃣  Beide richtigen Antworten drücken Scheitern/Nicht-Fertigwerden aus`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_SATZGLIEDER_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=3',
    topic: 'Satzglieder',

    questionText: `Aufgabe 5 (4 Punkte): Satzglieder herausschreiben und bezeichnen.

«Auf der Malerei posierte ein steifer Offizier in einer Gala-Uniform. Er hatte heisse, harte, kohlschwarze Augen.» [Z. 26]

Schreibe alle Satzglieder der Reihe nach heraus und bezeichne sie.`,

    options: [
      {
        label: 'Auf der Malerei: Präpositionalgefüge | ein steifer Offizier in einer Gala-Uniform: Subjekt | Er: Subjekt | heisse, harte, kohlschwarze Augen: Akkusativobjekt',
        correct: true,
      },
      {
        label: 'Auf der Malerei: Subjekt | ein steifer Offizier: Akkusativobjekt | Er: Subjekt | Augen: Akkusativobjekt',
        correct: false,
      },
      {
        label: 'Auf der Malerei: Präpositionalgefüge | ein steifer Offizier: Akkusativobjekt | Er: Subjekt | heisse Augen: Dativobjekt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder bestimmen',
          content: `Satz 1: «Auf der Malerei posierte ein steifer Offizier in einer Gala-Uniform.»

→ «Auf der Malerei» = Präpositionalgefüge / Präpositionalgruppe (Lokalangabe: Wo?)
→ «posierte» = Prädikat (Verb)
→ «ein steifer Offizier in einer Gala-Uniform» = Subjekt (Wer posierte? → der Offizier, Nominativ)
   [«in einer Gala-Uniform» ist Attribut/Erweiterung des Subjekts; kann auch separat als Präpositionalgefüge angegeben werden]

Satz 2: «Er hatte heisse, harte, kohlschwarze Augen.»
→ «Er» = Subjekt (Nominativ)
→ «hatte» = Prädikat
→ «heisse, harte, kohlschwarze Augen» = Akkusativobjekt (hatte WAS? → Augen, Akkusativ)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Subjekt: Wer/Was + Verb? → Nominativ
2️⃣  Akkusativobjekt: Wen/Was? → Akkusativ
3️⃣  Präpositionalgefüge: beginnt mit Präposition (auf, in, mit…)
4️⃣  Adjektive vor Nomen = Attribute, kein eigenes Satzglied!`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_WORTARTEN_ZAEHLEN_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=3',
    topic: 'Wortarten',

    questionText: `Aufgabe 6 (3 Punkte): Wie viele verschiedene Wortarten kommen vor? (Nur 5 Grundwortarten)

Satz A: «Sie blitzten zwischen dünnen, gestrafften Lippen.» [Z. 38]
Satz B: «Es war eine Frau.» [Z. 33]
Satz C: «Sie sahen nicht so aus, als ob schon je einer drauf gesessen hätte.» [Z. 22]`,

    options: [
      {
        label: 'A: 5 Wortarten | B: 3 Wortarten | C: 3 Wortarten',
        correct: true,
      },
      {
        label: 'A: 4 Wortarten | B: 3 Wortarten | C: 4 Wortarten',
        correct: false,
      },
      {
        label: 'A: 5 Wortarten | B: 4 Wortarten | C: 3 Wortarten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die 5 Wortarten: Nomen / Verb / Adjektiv / Pronomen / Partikel',
          content: `Satz A: «Sie blitzten zwischen dünnen, gestrafften Lippen.»
→ Sie = Pronomen
→ blitzten = Verb
→ zwischen = Partikel (Präposition)
→ dünnen = Adjektiv
→ gestrafften = Adjektiv (auch Adjektiv = Partizip II als Adjektiv verwendet)
→ Lippen = Nomen
→ Wortarten: Pronomen, Verb, Partikel, Adjektiv, Nomen = 5 ✅

Satz B: «Es war eine Frau.»
→ Es = Pronomen
→ war = Verb
→ eine = Partikel (Artikel → zählt als Partikel in 5-Wortarten-System)
→ Frau = Nomen
→ Wortarten: Pronomen, Verb, Partikel, Nomen = 4?
→ ⚠️ Laut offizieller Lösung: 3 Wortarten (Pronomen, Verb, Nomen — «eine» als Artikel zur Partikel oder weggelassen)
→ Offizielle Antwort: 3 ✅

Satz C: «Sie sahen nicht so aus, als ob schon je einer drauf gesessen hätte.»
→ Pronomen (Sie, einer), Verb (sahen aus, gesessen hätte), Partikel (nicht, so, als ob, schon, je, drauf)
→ Kein Adjektiv, kein Nomen
→ Wortarten vertreten: Pronomen, Verb, Partikel = 3 ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Jedes Wort einer der 5 Kategorien zuordnen
2️⃣  Zähle nur VERSCHIEDENE Wortarten, nicht einzelne Wörter
3️⃣  Adjektiv (Partizip als Adj.) = eigene Wortart!
4️⃣  Artikel («eine», «der») = Partikel im 5-Wortarten-System`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_PRAESENS_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=3',
    topic: 'Zeitformen',

    questionText: `Aufgabe 7 (2 Punkte): Präteritum → Präsens.

Setze den Satz ins Präsens:

«Sie senkte die Wimpern, bis sie ihr fast die Wangen streichelten, und hob sie langsam wieder wie einen Theatervorhang.» [Z. 42]`,

    options: [
      {
        label: 'Sie senkt die Wimpern, bis sie ihr fast die Wangen streicheln, und hebt sie langsam wieder wie einen Theatervorhang.',
        correct: true,
      },
      {
        label: 'Sie senkt die Wimpern, bis sie ihr fast die Wangen streichelte, und hebt sie langsam wieder wie einen Theatervorhang.',
        correct: false,
      },
      {
        label: 'Sie senkte die Wimpern, bis sie ihr fast die Wangen streicheln, und hob sie langsam wieder wie einen Theatervorhang.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präteritum → Präsens: alle Verben umwandeln',
          content: `Alle konjugierten Verben müssen ins Präsens:

→ «senkte» (Präteritum) → «senkt» (Präsens) ✅
→ «streichelten» (Präteritum, Plural) → «streicheln» (Präsens, Plural) ✅
→ «hob» (Präteritum, stark) → «hebt» (Präsens) ✅

⚠️ Alle drei Verben müssen geändert werden – auch «streichelten» im Nebensatz!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle konjugierten Verben markieren (auch in Nebensätzen!)
2️⃣  Starke Verben im Präteritum: hob → hebt, sank → sinkt
3️⃣  Regelmässige: senkte → senkt, streichelten → streicheln
4️⃣  «wie einen Theatervorhang» = Vergleich, kein Verb → bleibt unverändert`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_WORTARTEN_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=4',
    topic: 'Wortarten',

    questionText: `Aufgabe 8 (4 Punkte): Wortarten bestimmen (5 Grundwortarten).

«Ihr Gesicht war fahl und wirkte nicht sehr gesund.» [Z. 38]

Bestimme: Ihr / Gesicht / war / fahl / und / wirkte / nicht / sehr / gesund`,

    options: [
      {
        label: 'Ihr: Pronomen | Gesicht: Nomen | war: Verb | fahl: Adjektiv | und: Partikel | wirkte: Verb | nicht: Partikel | sehr: Partikel | gesund: Adjektiv',
        correct: true,
      },
      {
        label: 'Ihr: Adjektiv | Gesicht: Nomen | war: Verb | fahl: Adjektiv | und: Partikel | wirkte: Verb | nicht: Adjektiv | sehr: Adverb | gesund: Adjektiv',
        correct: false,
      },
      {
        label: 'Ihr: Pronomen | Gesicht: Nomen | war: Partikel | fahl: Adjektiv | und: Konjunktion | wirkte: Verb | nicht: Partikel | sehr: Partikel | gesund: Adjektiv',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 5 Wortarten – Analyse',
          content: `Ihr → Pronomen ✅ (Possessivpronomen vor «Gesicht»; richtig auch wenn Subkategorie angegeben)
Gesicht → Nomen ✅ (grossgeschrieben, Sache)
war → Verb ✅ (konjugiert, Hilfsverb/Kopula)
fahl → Adjektiv ✅ (Eigenschaft: blass, farblos)
und → Partikel ✅ (nebenordnende Konjunktion → Partikel im 5-Wortarten-System)
wirkte → Verb ✅ (konjugiertes Vollverb)
nicht → Partikel ✅ (Negationspartikel)
sehr → Partikel ✅ (Gradpartikel/Adverb)
gesund → Adjektiv ✅ (Eigenschaft, prädikativ verwendet)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Grossgeschrieben → Nomen
2️⃣  Konjugierbar → Verb (auch Hilfsverben wie «war»!)
3️⃣  Beschreibend + veränderlich → Adjektiv
4️⃣  Nomenvertreter → Pronomen (auch Possessivpronomen)
5️⃣  Alles Unveränderliche → Partikel (inkl. «und», «nicht», «sehr»)`,
    },
  },

  {
    id: 'D3_2019_TEXTVERST_CHRONOLOGIE_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=4',
    topic: 'Textverständnis',

    questionText: `Aufgabe 9 (2 Punkte): Chronologische Reihenfolge.

Bringe die Ereignisse in die richtige zeitliche Reihenfolge (1 = frühestes, 5 = spätestes):

– Der Ich-Erzähler hat sich herausgeputzt.
– Der Ich-Erzähler und die Frau lernen sich näher kennen.
– Der Ich-Erzähler wird von der Frau angelächelt.
– Der Ich-Erzähler beschreibt einen Offizier.
– Der Ich-Erzähler beschreibt einen Ritter.`,

    options: [
      {
        label: '1. herausgeputzt | 2. Ritter beschrieben | 3. Offizier beschrieben | 4. angelächelt | 5. näher kennenlernen',
        correct: true,
      },
      {
        label: '1. Ritter beschrieben | 2. herausgeputzt | 3. Offizier beschrieben | 4. angelächelt | 5. näher kennenlernen',
        correct: false,
      },
      {
        label: '1. herausgeputzt | 2. Offizier beschrieben | 3. Ritter beschrieben | 4. näher kennenlernen | 5. angelächelt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Chronologie aus dem Text',
          content: `1️⃣  Der Ich-Erzähler hat sich herausgeputzt → vor dem Besuch (vorbereitet, Z. 1ff.)
2️⃣  Ritter beschrieben → er betritt das Haus, sieht das Glasfenster mit dem Ritter (Z. 7ff.)
3️⃣  Offizier beschrieben → er ist im Salon, sieht das Gemälde über dem Kamin (Z. 26ff.)
4️⃣  Angelächelt → die Frau erscheint und lächelt ihn an (Z. 36ff.)
5️⃣  Näher kennenlernen → «Diesen Trick durfte ich später noch näher kennenlernen» (Z. 43) → Zukunft`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Fixpunkte: Vorbereitung zuerst, Zukunft zuletzt
2️⃣  Reihenfolge im Text folgen: Eingang → Glasfenster (Ritter) → Salon (Offizier) → Frau erscheint
3️⃣  «später» = Hinweis auf zukünftiges Ereignis → letzter Platz`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_MODUS_GENUS_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=4',
    topic: 'Aktiv / Passiv',

    questionText: `Aufgabe 10 (1 Punkt): Modus und Genus verbi bestimmen.

«Ich wurde von vier Millionen Dollar erwartet.» [Z. 6]

Was trifft auf diesen Satz zu? (Mehrfachantwort möglich)

A) Indikativ
B) Imperativ
C) Konjunktiv
D) Aktiv
E) Passiv`,

    options: [
      { label: 'A: Indikativ | E: Passiv', correct: true },
      { label: 'A: Indikativ | D: Aktiv', correct: false },
      { label: 'C: Konjunktiv | E: Passiv', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Modus und Genus verbi',
          content: `Modus:
→ Indikativ = Wirklichkeitsform (neutrale Aussage über Tatsachen) ✅
→ Konjunktiv = Möglichkeits-/Wunschform (hätte, wäre, würde) ❌
→ Imperativ = Befehlsform (Geh! Komm!) ❌

Genus verbi:
→ Passiv erkennbar: «wurde … erwartet» = werden-Passiv ✅
   Struktur: wurde + Partizip II = Passiv Präteritum
→ «von vier Millionen Dollar» = Täterangabe (typisch für Passiv)
→ Aktiv wäre: «Vier Millionen Dollar erwarteten mich.»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Indikativ = normale Aussage (keine Konjunktivformen wie hätte/wäre)
2️⃣  Passiv: wurde/wird + Partizip II → hier: wurde erwartet ✅
3️⃣  «von + Person/Sache» = Täterangabe → bestätigt Passiv`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_VERBEN_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=5',
    topic: 'Zeitformen',

    questionText: `Aufgabe 11 (6 Punkte): Verben bestimmen.

«Diesen Trick durfte ich später noch näher kennenlernen. Er sollte wohl bewirken, dass ich mich auf den Rücken wälzte und alle viere von mir streckte.» [Z. 43]

Bestimme: durfte / kennenlernen / sollte / bewirken / wälzte / streckte

Kategorien: Vollverb | Modalverb | Hilfsverb | Infinitiv | Partizip | Personalform`,

    options: [
      {
        label: 'durfte: Modalverb+Personalform | kennenlernen: Vollverb+Infinitiv | sollte: Modalverb+Personalform | bewirken: Vollverb+Infinitiv | wälzte: Vollverb+Personalform | streckte: Vollverb+Personalform',
        correct: true,
      },
      {
        label: 'durfte: Hilfsverb+Personalform | kennenlernen: Vollverb+Infinitiv | sollte: Modalverb+Personalform | bewirken: Vollverb+Infinitiv | wälzte: Vollverb+Partizip | streckte: Vollverb+Personalform',
        correct: false,
      },
      {
        label: 'durfte: Modalverb+Personalform | kennenlernen: Vollverb+Infinitiv | sollte: Hilfsverb+Personalform | bewirken: Modalverb+Infinitiv | wälzte: Vollverb+Personalform | streckte: Vollverb+Personalform',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbkategorien',
          content: `Vollverb: trägt die Hauptbedeutung (kennenlernen, bewirken, wälzen, strecken).
Modalverb: dürfen, müssen, können, sollen, wollen, mögen.
Hilfsverb: haben, sein, werden.
Infinitiv: Grundform (endet auf -en, nicht konjugiert).
Personalform: konjugiertes Verb (durfte, sollte, wälzte, streckte).`,
        },
        {
          title: 'Zuordnung der 6 Verben',
          content: `durfte → Modalverb ✅ (von «dürfen») + Personalform ✅ (konjugiert, 1. Pers. Sg. Prät.)

kennenlernen → Vollverb ✅ + Infinitiv ✅ (Grundform, nach Modalverb «durfte»)

sollte → Modalverb ✅ (von «sollen») + Personalform ✅ (konjugiert, 3. Pers. Sg. Prät.)

bewirken → Vollverb ✅ + Infinitiv ✅ (nach Modalverb «sollte»)

wälzte → Vollverb ✅ + Personalform ✅ (konjugiert: ich wälzte = Prät.)
⚠️ Nicht Partizip! «wälzte» ist konjugiert (Präteritum), kein Partizip II («gewälzt»)

streckte → Vollverb ✅ + Personalform ✅ (konjugiert: ich streckte = Prät.)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Modalverben: dürfen/sollen/können/müssen/wollen/mögen → immer Modalverb
2️⃣  Nach Modalverb: Infinitiv (kennenlernen, bewirken)
3️⃣  Konjugiert in Vergangenheit = Personalform (wälzte, streckte = Prät.)
4️⃣  Partizip II hat «ge-»: gewälzt, gestreckt → hier NICHT der Fall!`,
    },
  },

  {
    id: 'D3_2019_WORTSCHATZ_4',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=5',
    topic: 'Wortschatz',

    questionText: `Aufgabe 12 (2 Punkte): Synonyme für Wörter und Wendungen.

a) «fahl» [Z. 38]
Suche ein Wort mit entsprechender Bedeutung.

b) «zur Hand gehen» [Z. 13]
Suche ein Wort, das dieser Wendung entspricht.`,

    options: [
      {
        label: 'a: blass / bleich / farblos | b: helfen / beistehen / unterstützen',
        correct: true,
      },
      {
        label: 'a: dunkel / grau | b: weggehen / fortgehen',
        correct: false,
      },
      {
        label: 'a: blass | b: beobachten / anschauen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «fahl» und «zur Hand gehen»',
          content: `«fahl» = blassgelb, blass, farblos (ungesunde Hautfarbe):
→ ✅ blass, bleich, farblos

«zur Hand gehen» = jemandem helfen, behilflich sein, assistieren:
→ ✅ helfen, beistehen, unterstützen
→ ❌ weggehen (völlig falsch — Richtung stimmt nicht)
→ Merke: «jemandem zur Hand gehen» = «eine helfende Hand reichen»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «fahl» = Farbadjektiv → blass/bleich/farblos
2️⃣  «zur Hand gehen» = Idiom → nicht wörtlich nehmen! → bedeutet «helfen»
3️⃣  Idiome: bildliche Bedeutung suchen, nicht wörtliche`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_AKTIV_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=5',
    topic: 'Aktiv / Passiv',

    questionText: `Aufgabe 13 (2 Punkte): Passiv → Aktiv.

«Ich wurde von vier Millionen Dollar erwartet.» [Z. 5]

Wandle den Satz ins Aktiv um.`,

    options: [
      { label: 'Vier Millionen Dollar erwarteten mich.', correct: true },
      { label: 'Mich erwarteten vier Millionen Dollar.', correct: true },
      { label: 'Ich erwartete vier Millionen Dollar.', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Passiv → Aktiv umformen',
          content: `Passiv: Ich wurde von vier Millionen Dollar erwartet.

Schritte:
1. «von vier Millionen Dollar» = Täter → wird neues Subjekt (Nominativ): «Vier Millionen Dollar»
2. «Ich» = Subjekt im Passiv → wird Akkusativobjekt im Aktiv: «mich»
3. Verb: «wurde erwartet» → Aktiv Präteritum: «erwarteten» (Pl., weil Millionen Dollar = Plural)

✅ Vier Millionen Dollar erwarteten mich.
✅ Auch akzeptiert: «Mich erwarteten vier Millionen Dollar.» (umgestellte Wortfolge)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «von + X» im Passiv → X wird Subjekt im Aktiv
2️⃣  Subjekt im Passiv («Ich») → Akkusativobjekt im Aktiv («mich»)
3️⃣  Verb: Passiv-Hilfsverb weg, Partizip → konjugiertes Aktiv-Verb
4️⃣  Plural-Subjekt → Plural-Verb: «Millionen Dollar erwarteten» (Pl.)`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_KONJUNKTIONEN_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=6',
    topic: 'Satzbau',

    questionText: `Aufgabe 14 (3 Punkte): Alle Konjunktionen herausschreiben.

«Ich stand da und überlegte, dass ich, wenn ich in dem Haus wohnte, früher oder später mal hinaufklettern und ihm zur Hand gehen müsste, denn so richtig Mühe schien er sich nicht zu geben.» [Z. 12]

Schreibe alle Konjunktionen der Reihe nach heraus.`,

    options: [
      {
        label: 'und, dass, wenn, oder, und, denn',
        correct: true,
      },
      {
        label: 'und, dass, wenn, oder, denn',
        correct: false,
      },
      {
        label: 'und, dass, wenn, oder, und, denn, so',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Konjunktionen finden',
          content: `Konjunktionen verbinden Wörter, Satzteile oder Sätze:

→ «und» (1. Mal): «stand da und überlegte» = nebenordnend ✅
→ «dass»: leitet Objektsatz ein (unterordnend) ✅
→ «wenn»: leitet Konditionalsatz ein (unterordnend) ✅
→ «oder»: «früher oder später» = nebenordnend ✅
→ «und» (2. Mal): «hinaufklettern und … gehen» = nebenordnend ✅
→ «denn»: kausale Konjunktion (nebenordnend) ✅

⚠️ «so» = Partikel (Adverb), keine Konjunktion hier!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Nebenordnend (verbinden gleichrangiges): und, oder, aber, denn, sondern
2️⃣  Unterordnend (leiten Nebensätze ein): dass, wenn, weil, obwohl, als
3️⃣  «so» in «so richtig» = Gradpartikel → keine Konjunktion!
4️⃣  «und» kann mehrfach vorkommen → beide Vorkommen zählen!`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_PERSONALFORM_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=6',
    topic: 'Zeitformen',

    questionText: `Aufgabe 15 (1 Punkt): Personalform des Hauptsatzes herausschreiben.

«Über den Türflügeln, die eine Herde indischer Elefanten durchgelassen hätten, war auf einem breiten bunten Glasfenster ein Ritter in dunkler Rüstung bei der Errettung einer Dame zu sehen, die an einen Baum gefesselt war und nichts weiter trug als eine Menge langes Haar.» [Z. 7]

Schreibe die Personalform des Hauptsatzes heraus.`,

    options: [
      { label: 'war (zu sehen)', correct: true },
      { label: 'hätten', correct: false },
      { label: 'war (gefesselt)', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Hauptsatz und Personalform',
          content: `Der Hauptsatz hat kein einleitendes Konjunktions-/Relativpronomen und das Verb steht an 1. oder 2. Stelle.

Analyse:
→ «Über den Türflügeln» = Präpositionalgefüge (vorangestellt)
→ «war … zu sehen» = Hauptsatz-Prädikat (Verb an «2.» Stelle nach Präpositionalgefüge) ✅
→ «die eine Herde … hätten» = Relativsatz (Einleiter «die», Verb am Ende: «hätten») ❌
→ «die an einen Baum gefesselt war» = zweiter Relativsatz ❌

Personalform des Hauptsatzes: «war» (in «war … zu sehen»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Hauptsatz: kein Einleiter, Verb an 1./2. Stelle
2️⃣  Relativsätze («die», «welche») = Nebensätze → nicht der Hauptsatz
3️⃣  Vorangestelltes Präpositionalgefüge «kippt» Verb des HS an Position 1`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_AKKUSATIV_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=6',
    topic: 'Satzglieder',

    questionText: `Aufgabe 16 (2 Punkte): Akkusativobjekte herausschreiben.

«Sie senkte die Wimpern, bis sie ihr fast die Wangen streichelten, und hob sie langsam wieder. Diesen Trick durfte ich später noch näher kennenlernen.» [Z. 42]

Schreibe alle Akkusativobjekte der Reihe nach heraus.`,

    options: [
      {
        label: 'die Wimpern | die Wangen | sie | Diesen Trick',
        correct: true,
      },
      {
        label: 'die Wimpern | sie | Diesen Trick',
        correct: false,
      },
      {
        label: 'die Wimpern | ihr | die Wangen | sie | Diesen Trick',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Akkusativobjekte finden',
          content: `Akkusativobjekt: beantwortet «Wen oder was?»

«Sie senkte die Wimpern» → senkte WAS? → die Wimpern (Akk.) ✅
«bis sie ihr fast die Wangen streichelten» → streichelten WAS? → die Wangen (Akk.) ✅
   ⚠️ «ihr» = Dativobjekt! (streichelten WEM? → ihr) → kein Akkusativobjekt
«hob sie langsam wieder» → hob WEN/WAS? → sie (Akk., Pronomen für die Wimpern) ✅
«Diesen Trick durfte ich … kennenlernen» → kennenlernen WAS? → Diesen Trick (Akk.) ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wen/Was? → Akkusativ
2️⃣  «ihr» = Dativ (Wem?) → kein Akkusativobjekt, Falle!
3️⃣  Pronomen «sie» kann Akkusativobjekt sein, wenn es «Wen/Was?» beantwortet
4️⃣  Reihenfolge beachten: der Reihe nach herausschreiben`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_PRAEPOSITIONEN_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=7',
    topic: 'Präpositionen',

    questionText: `Aufgabe 17 (2 Punkte): Alle Präpositionen herausschreiben.

«Über den Türflügeln, die eine Herde indischer Elefanten durchgelassen hätten, war auf einem breiten bunten Glasfenster ein Ritter in dunklem Harnisch bei der Errettung einer Dame zu sehen.» [Z. 7]`,

    options: [
      { label: 'über, auf, in, bei', correct: true },
      { label: 'über, auf, in, bei, durch', correct: false },
      { label: 'über, auf, in', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präpositionen im Satz finden',
          content: `Präpositionen stehen vor einer Nomengruppe und bestimmen deren Fall.

→ «Über den Türflügeln» → über ✅ (+ Dativ: Lage)
→ «auf einem breiten bunten Glasfenster» → auf ✅ (+ Dativ: Lage)
→ «in dunklem Harnisch» → in ✅ (+ Dativ: Zustand/Lage)
→ «bei der Errettung» → bei ✅ (+ Dativ)

⚠️ «durch» in «durchgelassen» = Verbpräfix (trennbares Verb «durchlassen»), keine eigenständige Präposition!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präposition: eigenständig VOR Nomengruppe, regiert Fall
2️⃣  Verbpräfix («durch-lassen», «auf-stehen») = kein eigenständiges Wort → zählt nicht!
3️⃣  über, auf, in, bei → alle ✅; durch in «durchgelassen» → ❌`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_PRAEPOSITIONAL_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=7',
    topic: 'Präpositionen',

    questionText: `Aufgabe 18 (1 Punkt): Präpositionalgefüge herausschreiben.

«Sie kam auf mich zu und lächelte mit dem Mund und hatte kleine scharfe Raubtierzähne, weiss wie frisches Orangenmark und schimmernd wie Porzellan.» [Z. 36]

Schreibe die Präpositionalgefüge heraus.`,

    options: [
      { label: 'auf mich | mit dem Mund', correct: true },
      { label: 'auf mich | mit dem Mund | wie Porzellan', correct: false },
      { label: 'mit dem Mund', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präpositionalgefüge erkennen',
          content: `Präpositionalgefüge = Präposition + Nomengruppe:

→ «auf mich» ✅ (Präposition auf + Pronomen mich)
→ «mit dem Mund» ✅ (Präposition mit + Nomengruppe «dem Mund»)

⚠️ «wie Porzellan» / «wie frisches Orangenmark» = Vergleichsgruppen (Partikel «wie» + Nomen), keine Präpositionalgefüge!
⚠️ «wie» ist keine Präposition in Vergleichen`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präpositionalgefüge: echte Präposition (auf, mit, in…) + Nomengruppe
2️⃣  «wie» in Vergleichen = Partikel, keine Präposition → kein Präpositionalgefüge
3️⃣  Nur 2 Präpositionalgefüge: auf mich + mit dem Mund`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_INFINITIVE_ZEITFORMEN_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=7',
    topic: 'Zeitformen',

    questionText: `Aufgabe 19 (4 Punkte): Infinitive und Zeitformen.

«Der Ritter hatte kontaktfreudig sein Visier hochgeklappt und fummelte an den Stricken herum.» [Z. 10]

a) Schreibe alle Verben in der Infinitivform auf.
b) Wie viele verschiedene Zeitformen kommen im Satz vor?`,

    options: [
      {
        label: 'a: haben, hochklappen, herumfummeln | b: 2 Zeitformen (Plusquamperfekt + Präteritum)',
        correct: true,
      },
      {
        label: 'a: haben, hochklappen, fummeln | b: 1 Zeitform',
        correct: false,
      },
      {
        label: 'a: haben, hochklappen, herumfummeln | b: 3 Zeitformen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Teil a: Infinitive',
          content: `«hatte … hochgeklappt» → Hilfsverb: haben + trennbares Verb hochklappen
→ Infinitive: haben ✅, hochklappen ✅

«fummelte … herum» → trennbares Verb: herumfummeln
→ Infinitiv: herumfummeln ✅

✅ Alle drei: haben / hochklappen / herumfummeln`,
        },
        {
          title: 'Teil b: Zeitformen zählen',
          content: `«hatte … hochgeklappt» → Plusquamperfekt (hatte + Partizip II) = Zeitform 1
«fummelte … herum» → Präteritum = Zeitform 2

✅ 2 verschiedene Zeitformen im Satz.

⚠️ Trennbare Verben: «hochgeklappt» ist Partizip II von «hochklappen»; «fummelte herum» gehört zu «herumfummeln».`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Trennbare Verben: «hochgeklappt» → Infinitiv «hochklappen»; «herum fummeln» → «herumfummeln»
2️⃣  Hilfsverb «hatte» → Infinitiv «haben»
3️⃣  Zeitformen: Plusquamperfekt (hatte+PII) + Präteritum (fummelte) = 2`,
    },
  },

  {
    id: 'D3_2019_GRAMMATIK_PRONOMEN_1',
    year: 2019,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=8',
    topic: 'Wortarten',

    questionText: `Aufgabe 20 (3 Punkte): Pronomen näher bestimmen.

1. «Der Ritter hatte … sein Visier hochgeklappt und fummelte an den Stricken herum, mit denen die Dame an den Baum gezurrt war.» [Z. 10] → «denen»

2. «Ihre Augen waren schiefergrau und fast völlig ausdruckslos, als sie mich ansahen.» [Z. 35] → «Ihre»

3. «Ich hab's mir nicht ausgesucht.» [Z. 41] → «mir»

Bestimme die Pronomen näher.`,

    options: [
      {
        label: 'denen: Relativpronomen | Ihre: Possessivpronomen | mir: Reflexivpronomen',
        correct: true,
      },
      {
        label: 'denen: Demonstrativpronomen | Ihre: Possessivpronomen | mir: Personalpronomen',
        correct: false,
      },
      {
        label: 'denen: Relativpronomen | Ihre: Personalpronomen | mir: Reflexivpronomen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Pronomen-Kategorien',
          content: `Relativpronomen: leiten Relativsatz ein, beziehen sich auf Bezugsnomen.
→ «mit denen» = Relativpronomen (bezieht sich auf «Stricken», leitet Relativsatz ein) ✅

Possessivpronomen: zeigen Zugehörigkeit (mein, dein, sein, ihr, unser…).
→ «Ihre Augen» = Possessivpronomen (zeigt, dass die Augen ihr gehören) ✅

Reflexivpronomen: beziehen sich auf das Subjekt zurück (mir, mich, sich, uns…).
→ «hab's mir nicht ausgesucht» = Reflexivpronomen ✅
   (ich suche mir aus → «mir» bezieht sich auf «ich» zurück)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106455/AP19_GMS3_D_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Relativpronomen: «der/die/das/denen» leitet Nebensatz ein → Relativpronomen
2️⃣  Possessivpronomen: vor Nomen, zeigt Besitz → ihr/sein/mein…
3️⃣  Reflexivpronomen: bezieht sich auf Subjekt zurück → mir/mich/sich/uns
4️⃣  Falle: «mir» kann Dativ-Personalpronomen ODER Reflexivpronomen sein → Kontext entscheidet!`,
    },
  },

];