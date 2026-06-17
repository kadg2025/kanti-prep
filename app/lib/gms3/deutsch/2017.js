// app/lib/gms3/deutsch/2017.js
// Aufnahmeprüfung 2017 – Deutsch GMS 3 (Kanti Frauenfeld)

export const questions2017 = [

  {
    id: 'D3_2017_TEXTVERST_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=1',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Der Ich-Erzähler ist ein Jugendlicher.
2. Der Himmel über dem Hafen ist bedeckt.
3. Der Ich-Erzähler kennt die Umgebung des Hafens seit seiner Kindheit.
4. Der Ich-Erzähler versucht in das ölverschmutzte Wasser zu springen.
5. Die Möwen werden vom Ich-Erzähler mit altem Brot gefüttert.
6. Der Ich-Erzähler beobachtet Möwen und Schwalben.
7. Der Ich-Erzähler vergleicht sich mit einer Vogelscheuche.
8. Der Ich-Erzähler würde gerne den Flug der Vögel verändern.
9. Der Polizist überführt den Ich-Erzähler des Diebstahls.
10. Der Ich-Erzähler wird nicht das erste Mal verhaftet.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 2, 3, 4, 7, 8, 10 | stimmt nicht: 1, 5, 6, 9',
        correct: true,
      },
      {
        label: 'stimmt: 1, 2, 4, 7, 8, 9 | stimmt nicht: 3, 5, 6, 10',
        correct: false,
      },
      {
        label: 'stimmt: 2, 3, 5, 7, 8, 10 | stimmt nicht: 1, 4, 6, 9',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: Textverständnis',
          content: `Jede Aussage muss direkt mit einer Textstelle belegt werden. Vorsicht vor Details, die fast stimmen!`,
        },
        {
          title: 'Auflösung der 10 Aussagen',
          content: `1. ❌ stimmt nicht – Kein Hinweis im Text, dass er ein Jugendlicher ist. Er spricht von «Stätten meiner Jugend» (Z. 60) → er ist bereits erwachsen.

2. ✅ stimmt – «blickte in den schönen grauen Himmel» (Z. 38) → grauer Himmel = bedeckt.

3. ✅ stimmt – «er führte mich durch die Stätten meiner Jugend» (Z. 60) → er kennt die Gegend seit der Jugend.

4. ✅ stimmt – «versuchte, mich mit einer plötzlichen Wendung ins Wasser zu stürzen» (Z. 38–39).

5. ❌ stimmt nicht – Er hat kein Brot: «Aber auch ich war hungrig wie sie» (Z. 15). Der Wunsch, Brot zu haben, ist nur ein Konjunktiv («Hätte ich einen Wunsch…», Z. 10).

6. ❌ stimmt nicht – Er beobachtet nur Möwen; eine einzelne Möwe wird mit einer Schwalbe verglichen, aber er beobachtet keine Schwalben direkt.

7. ✅ stimmt – «Er schob mich vor sich her wie eine Vogelscheuche» (Z. 55) → der Polizist vergleicht ihn damit; der Erzähler übernimmt dieses Bild.

8. ✅ stimmt – «den planlosen Flügen einen weissen Punkt zu bestimmen, ein Ziel zu setzen» (Z. 12) → er möchte den Flug lenken/verändern.

9. ❌ stimmt nicht – Der Grund für die Verhaftung ist sein «trauriges Gesicht» (Z. 44), nicht Diebstahl. Der Vergleich mit der Vogelscheuche «des Diebstahls überführt» ist eine Metapher.

10. ✅ stimmt – «wusste ich, dass ich wieder verloren war» (Z. 35) → «wieder» deutet auf frühere Verhaftungen hin.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Textstelle suchen, nicht nach Gefühl urteilen
2️⃣  Konjunktiv-Wünsche («hätte ich…») sind keine echten Handlungen!
3️⃣  «wieder» = Schlüsselwort für Wiederholung → Nr. 10 stimmt
4️⃣  Vergleiche/Metaphern sind keine wörtlichen Fakten → Nr. 9 stimmt nicht`,
    },
  },

  {
    id: 'D3_2017_TEXTVERST_CHRONOLOGIE_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Textverständnis',

    questionText: `Aufgabe 2 (2 Punkte): Chronologische Abfolge.

Bringe die Ereignisse in die richtige zeitliche Reihenfolge (1 = frühestes, 4 = spätestes):

– Der Ich-Erzähler wird verhaftet.
– Das neue Gesetz wird verkündet.
– Der Betrieb des Hafens wird eingestellt.
– Der Ich-Erzähler möchte sich ins Wasser stürzen.

Welche Reihenfolge stimmt?`,

    options: [
      {
        label: '1. Betrieb des Hafens eingestellt | 2. Gesetz verkündet | 3. Erzähler verhaftet | 4. Erzähler möchte sich ins Wasser stürzen',
        correct: true,
      },
      {
        label: '1. Gesetz verkündet | 2. Betrieb eingestellt | 3. Verhaftung | 4. Ins Wasser stürzen',
        correct: false,
      },
      {
        label: '1. Betrieb eingestellt | 2. Verhaftung | 3. Gesetz verkündet | 4. Ins Wasser stürzen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Zeitliche Logik aus dem Text',
          content: `1️⃣  Betrieb des Hafens eingestellt – «Viele Jahre schon war jede Verbindung nach aussen abgeschnitten» (Z. 6) → liegt am weitesten in der Vergangenheit.

2️⃣  Gesetz verkündet – «Es ist sechsunddreissig Stunden alt» (Z. 47) → vor 36 Stunden, also kurz vor der Handlung.

3️⃣  Erzähler verhaftet – geschieht während der Haupthandlung, nachdem der Polizist ihn anspricht.

4️⃣  Erzähler möchte sich ins Wasser stürzen – passiert erst NACH der Verhaftung (Handschelle), als letzter Fluchtversuch (Z. 37–39).`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Fixpunkte zuerst: «Viele Jahre schon» = weit in der Vergangenheit → Nr. 1
2️⃣  «sechsunddreissig Stunden alt» → kurz vor der Szene → Nr. 2
3️⃣  Verhaftung und Fluchtversuch: logische Handlungsreihenfolge im Text → 3, dann 4`,
    },
  },

  {
    id: 'D3_2017_WORTSCHATZ_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Sinngemässe Ersetzung.

«Ehe ich mich versehen hatte, war mein linkes Handgelenk mit einer dünnen Kette umschlossen.» [Z. 34]

Die unterstrichene Wortgruppe «Ehe ich mich versehen hatte» kann sinngemäss ersetzt werden durch:

A) Unerwartet schnell
B) Aus Versehen
C) Bevor ich es realisierte
D) Ehe ich mich umgesehen hatte

Welche stimmen, welche nicht?`,

    options: [
      {
        label: 'stimmt: A (Unerwartet schnell), C (Bevor ich es realisierte) | stimmt nicht: B (Aus Versehen), D (Ehe ich mich umgesehen hatte)',
        correct: true,
      },
      {
        label: 'stimmt: B, C | stimmt nicht: A, D',
        correct: false,
      },
      {
        label: 'stimmt: A, B, C | stimmt nicht: D',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriff: «sich versehen»',
          content: `«Ehe ich mich versehen hatte» = idiomatische Wendung = bevor ich überhaupt bemerkte, was passierte / bevor ich es realisierte / so schnell, dass ich es kaum wahrnahm.

→ A) «Unerwartet schnell» ✅ – trifft die Bedeutung: so schnell, dass man es nicht mitbekam.
→ B) «Aus Versehen» ❌ – «aus Versehen» bedeutet «unabsichtlich» → ganz andere Bedeutung!
→ C) «Bevor ich es realisierte» ✅ – trifft die Bedeutung genau.
→ D) «Ehe ich mich umgesehen hatte» ❌ – «umsehen» = schauen, nicht «bemerken» → zu wörtlich, falscher Sinn.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Idiom verstehen: «sich versehen» ≠ «sich umsehen» → bedeutet «bemerken/realisieren»
2️⃣  «aus Versehen» = Falle! Klingt ähnlich, bedeutet aber «unabsichtlich»
3️⃣  Bedeutungstest: Ersatzwort in den Satz einsetzen → ergibt es Sinn?`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_VERBEN_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=2',
    topic: 'Zeitformen',

    questionText: `Aufgabe 4 (4 Punkte): Verben bestimmen.

«Hätte ich einen Wunsch aussprechen können, so wäre mir ein Brot das Liebste gewesen, es den Möwen zu verfüttern, … auf das sie zufliegen würden…» [Z. 10]

Bestimme die Verben: hätte / aussprechen / können / wäre / gewesen / verfüttern / zufliegen / würden

Kategorien: Vollverb | Modalverb | Infinitiv | Partizip | Hilfsverb | Konjunktiv

Welche Zuordnung ist vollständig korrekt?`,

    options: [
      {
        label: 'hätte: Hilfsverb+Konj. | aussprechen: Vollverb+Inf. | können: Modalverb+Inf. | wäre: Hilfsverb+Konj. | gewesen: Vollverb+Partizip | verfüttern: Vollverb+Inf. | zufliegen: Vollverb+Inf. | würden: Hilfsverb+Konj.',
        correct: true,
      },
      {
        label: 'hätte: Modalverb+Konj. | aussprechen: Vollverb+Inf. | können: Modalverb+Konj. | wäre: Hilfsverb+Konj. | gewesen: Hilfsverb+Partizip | verfüttern: Vollverb+Inf. | zufliegen: Vollverb+Inf. | würden: Modalverb+Konj.',
        correct: false,
      },
      {
        label: 'hätte: Hilfsverb+Konj. | aussprechen: Vollverb+Inf. | können: Vollverb+Inf. | wäre: Hilfsverb+Konj. | gewesen: Vollverb+Partizip | verfüttern: Vollverb+Inf. | zufliegen: Vollverb+Inf. | würden: Hilfsverb+Konj.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffe: Verbkategorien',
          content: `Vollverb: trägt die inhaltliche Bedeutung.
Modalverb: können, müssen, dürfen, sollen, wollen, mögen.
Hilfsverb: haben, sein, werden (bilden zusammengesetzte Formen).
Infinitiv: Grundform, endet auf -(e)n, nicht konjugiert.
Partizip: II. Partizip (ge-…-t/en), bildet Perfekt/Plusquamperfekt.
Konjunktiv: Möglichkeits-/Wunschform (hätte, wäre, würde…).`,
        },
        {
          title: 'Zuordnung der 8 Verben',
          content: `hätte → Hilfsverb ✅ + Konjunktiv II ✅ (Konjunktiv II von «haben»)

aussprechen → Vollverb ✅ + Infinitiv ✅ (Grundform, nicht konjugiert)

können → Modalverb ✅ + Infinitiv ✅ (steht im Infinitiv nach «hätte … aussprechen können»)

wäre → Hilfsverb ✅ + Konjunktiv II ✅ (Konjunktiv II von «sein»)

gewesen → Vollverb ✅ + Partizip ✅ (Partizip II von «sein» als Vollverb)

verfüttern → Vollverb ✅ + Infinitiv ✅ (Grundform in Infinitivgruppe)

zufliegen → Vollverb ✅ + Infinitiv ✅ (Grundform in Relativsatz)

würden → Hilfsverb ✅ + Konjunktiv II ✅ (bildet Konjunktiv II von «zufliegen»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Modalverben: können/müssen/dürfen/sollen/wollen/mögen
2️⃣  Hilfsverben: haben/sein/werden → Konjunktiv II: hätte/wäre/würde
3️⃣  Infinitiv: nicht konjugiert, endet auf -en
4️⃣  Partizip II: ge-…-t oder ge-…-en (gewesen, gegangen, gemacht)
5️⃣  Konjunktiv II erkennbar an: hätte/wäre/würde + Umlaut bei starken Verben`,
    },
  },

  {
    id: 'D3_2017_WORTSCHATZ_2',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Wortschatz',

    questionText: `Aufgabe 5 (2 Punkte): Synonym und Antonym.

Teil A: «…der Hafen war verödet…» [Z. 3]
Suche für «verödet» ein Wort mit entsprechender (gleicher) Bedeutung.

Teil B: «…hier blickte er mich verächtlich an…» [Z. 49]
Suche für «verächtlich» ein Wort mit GEGENTEILIGER Bedeutung.

Welche Kombination ist korrekt?`,

    options: [
      {
        label: 'A: verlassen / verwaist / unbelebt | B: bewundernd / respektvoll / hochachtungsvoll',
        correct: true,
      },
      {
        label: 'A: belebt / blühend | B: abweisend / kalt',
        correct: false,
      },
      {
        label: 'A: verlassen | B: gleichgültig / desinteressiert',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «verödet» und «verächtlich»',
          content: `«verödet» = menschenleer, verfallen, ohne Leben/Betrieb:
→ ✅ verlassen, verwaist, unbelebt, heruntergekommen, runtergekommen
→ ❌ belebt, blühend (= Gegenteil!)

«verächtlich» = mit Verachtung, herabsetzend, abschätzig:
→ Antonym (Gegenteil): bewundernd, respektvoll, hochachtungsvoll, würdigend, achtungsvoll, verehrend
→ ❌ gleichgültig = kein echtes Gegenteil (gleichgültig bedeutet «egal», nicht «respektvoll»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Synonym = bedeutungsähnlich, passt in den Satz
2️⃣  Antonym = echtes Gegenteil, nicht nur «anders»
3️⃣  «verächtlich» → denke an Verachtung vs. Achtung/Respekt → Antonym = respektvoll`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_PASSIV_ZEITFORM_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Aktiv / Passiv',

    questionText: `Aufgabe 6 (2 Punkte): Handlungsrichtung und Zeitform bestimmen.

«Eine bestimmte Möwe war von mir ins Auge gefasst worden.»

Bestimme: Aktiv oder Passiv? Und welche Zeitform?`,

    options: [
      { label: 'Passiv | Plusquamperfekt', correct: true },
      { label: 'Passiv | Perfekt', correct: false },
      { label: 'Aktiv | Präteritum', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Passiv und Zeitform bestimmen',
          content: `Passiv erkennen:
→ «von mir» = Täter steht im Dativ nach «von» (typisch für Passiv)
→ Struktur: war … gefasst worden → Hilfsverb «sein» + Partizip II + «worden» = Passiv ✅

Zeitform:
→ Plusquamperfekt Passiv: war + Partizip II + worden
→ Perfekt Passiv wäre: ist + Partizip II + worden
→ Hier: «war … worden» → Plusquamperfekt ✅

⚠️ Eselsbrücke:
• «ist/sind … worden» = Perfekt Passiv
• «war/waren … worden» = Plusquamperfekt Passiv`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Passiv: «worden» am Ende + Hilfsverb «sein»
2️⃣  «war … worden» → Plusquamperfekt Passiv
3️⃣  «ist … worden» → Perfekt Passiv
4️⃣  «von + Person» = Täterangabe im Passiv → bestätigt Passiv`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_OBJEKT_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Satzglieder',

    questionText: `Aufgabe 7 (1 Punkt): Satzglied bestimmen.

«Er zog mich fort.» [Z. 52]

Was ist «mich» für ein Satzglied?`,

    options: [
      { label: 'Akkusativobjekt', correct: true },
      { label: 'Dativobjekt', correct: false },
      { label: 'Subjekt', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglied bestimmen',
          content: `Frage: Er zog WEN? → mich → Akkusativ ✅
→ «mich» = Akkusativform von «ich» → Akkusativobjekt

⚠️ Nicht verwechseln:
→ «mir» = Dativform (Dativobjekt)
→ «mich» = Akkusativform (Akkusativobjekt)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wen oder was? → Akkusativ (mich, ihn, sie, es)
2️⃣  Wem? → Dativ (mir, ihm, ihr)
3️⃣  Falle: «mich» klingt wie Subjekt, ist aber Akkusativ!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_ZEITFORM_2',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Zeitformen',

    questionText: `Aufgabe 8 (2 Punkte): Zeitformen bestimmen.

«Er schob mich vor sich her wie eine Vogelscheuche, die, des Diebstahls überführt, die Stätte ihrer Träume am Feldrain hat verlassen müssen.» [Z. 55]

In welcher Zeitform stehen die Teilsätze?

Teilsatz 1: «Er schob mich vor sich her wie eine Vogelscheuche»
Teilsatz 2: «die Stätte ihrer Träume am Feldrain hat verlassen müssen»`,

    options: [
      {
        label: 'Teilsatz 1: Präteritum | Teilsatz 2: Perfekt',
        correct: true,
      },
      {
        label: 'Teilsatz 1: Präteritum | Teilsatz 2: Plusquamperfekt',
        correct: false,
      },
      {
        label: 'Teilsatz 1: Perfekt | Teilsatz 2: Perfekt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zeitformen erkennen',
          content: `Teilsatz 1: «Er schob mich vor sich her»
→ «schob» = Präteritum von «schieben» (starkes Verb, Stammvokalwechsel: ie → o) ✅

Teilsatz 2: «hat verlassen müssen»
→ Struktur: hat + Partizip II + Infinitiv (Modalverb)
→ «hat» = Perfekt-Hilfsverb in Präsens → Perfekt ✅
→ ⚠️ Plusquamperfekt wäre: «hatte verlassen müssen»
→ Hier steht «hat» (Präsens), nicht «hatte» (Präteritum) → Perfekt!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präteritum: einfache Vergangenheitsform (schob, sagte, ging)
2️⃣  Perfekt: hat/haben/ist/sind + Partizip II
3️⃣  Plusquamperfekt: hatte/hatten/war/waren + Partizip II
4️⃣  «hat verlassen müssen» → «hat» (Präsens) → Perfekt, nicht Plusquamperfekt!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_INDIREKTE_REDE_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Direkte / Indirekte Rede',

    questionText: `Aufgabe 9 (2 Punkte): Indirekte Rede (Konjunktiv I).

Setze in die indirekte Rede (mit Konjunktiv I):

«Es gibt keine Herren», rief er zornig. «Wir sind alle Kameraden.» [Z. 22]

Er rief zornig, …`,

    options: [
      {
        label: 'Er rief zornig, es gebe keine Herren, wir/sie seien alle Kameraden.',
        correct: true,
      },
      {
        label: 'Er rief zornig, es gibt keine Herren, wir sind alle Kameraden.',
        correct: false,
      },
      {
        label: 'Er rief zornig, dass es keine Herren gäbe und sie alle Kameraden wären.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Indirekte Rede mit Konjunktiv I',
          content: `Direkte Rede → Indirekte Rede: Konjunktiv I verwenden.

Konjunktiv I bilden: Infinitivstamm + e:
→ geben → er/es gebe (Konj. I) ✅
→ sein → wir/sie seien (Konj. I) ✅

Pronomen anpassen:
→ «Es» bleibt «es» (kein Pronominenwechsel nötig)
→ «Wir» (der Polizist meint alle) → «wir» oder «sie» möglich

⚠️ Aufgabe verlangt explizit Konjunktiv I → nicht Konjunktiv II (gäbe, wären) verwenden!`,
        },
        {
          title: 'Musterlösung',
          content: `Er rief zornig, es gebe keine Herren, wir (sie) seien alle Kameraden.

Alternativen (alle akzeptiert):
→ «… es gebe keine Herren und wir (sie) seien alle Kameraden.»
→ «… es gebe keine Herren. Wir (Sie) seien alle Kameraden.»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Konjunktiv I: Infinitivstamm + e (geben → gebe, sein → sei/seien)
2️⃣  Pronomen anpassen (Perspektive wechseln)
3️⃣  Anführungszeichen weg, kein «dass» nötig (freie indirekte Rede)
4️⃣  Konjunktiv I ≠ Indikativ? → Konj. I verwenden. Gleich? → Konj. II nehmen`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_WORTARTEN_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Wortarten',

    questionText: `Aufgabe 10 (4 Punkte): Wortarten bestimmen (5 Grundwortarten).

«Ehe ich mich versehen hatte, war mein linkes Handgelenk mit einer dünnen Kette umschlossen. Und in diesem Augenblick wusste ich, dass ich wieder verloren war.» [Z. 34]

Bestimme: Ehe / versehen / Handgelenk / Und / in / diesem / ich / wieder`,

    options: [
      {
        label: 'Ehe: Partikel | versehen: Verb | Handgelenk: Nomen | Und: Partikel | in: Partikel | diesem: Pronomen | ich: Pronomen | wieder: Partikel',
        correct: true,
      },
      {
        label: 'Ehe: Konjunktion | versehen: Verb | Handgelenk: Nomen | Und: Konjunktion | in: Präposition | diesem: Adjektiv | ich: Pronomen | wieder: Adverb',
        correct: false,
      },
      {
        label: 'Ehe: Partikel | versehen: Adjektiv | Handgelenk: Nomen | Und: Partikel | in: Partikel | diesem: Pronomen | ich: Pronomen | wieder: Partikel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die 5 Grundwortarten (Kurzübersicht)',
          content: `1. Nomen: grossgeschrieben, bezeichnen Dinge/Personen/Abstraktes
2. Verb: konjugierbar (tätig, zustandsbeschreibend)
3. Adjektiv: deklinierbar, beschreibend (Eigenschaft)
4. Pronomen: Nomenvertreter (ich, dieser, mein, der…)
5. Partikel: alles Unveränderliche (Präpositionen, Konjunktionen, Adverbien, Modalpartikeln)

⚠️ Wichtig: In diesem Aufgabenformat werden Konjunktionen, Präpositionen und Adverbien ALLE als «Partikel» zusammengefasst!`,
        },
        {
          title: 'Zuordnung der 8 Wörter',
          content: `Ehe → Partikel (temporale Konjunktion, unveränderlich) ✅
versehen → Verb (konjugierbar: sich versehen) ✅
Handgelenk → Nomen (grossgeschrieben, Sache) ✅
Und → Partikel (Konjunktion, unveränderlich) ✅
in → Partikel (Präposition, unveränderlich) ✅
diesem → Pronomen (Demonstrativpronomen «dieser» dekliniert) ✅
ich → Pronomen (Personalpronomen) ✅
wieder → Partikel (Temporaladverb, unveränderlich) ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Grossgeschrieben → Nomen
2️⃣  Konjugierbar → Verb
3️⃣  Deklinierbar + beschreibend → Adjektiv
4️⃣  Nomenvertreter → Pronomen
5️⃣  Alles andere (unveränderlich) → Partikel (auch Konjunktionen und Präpositionen!)`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_PARTIKELN_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wortarten',

    questionText: `Aufgabe 11 (3 Punkte): Partikeln zuordnen.

«Die Strassen waren leer, der Weg zum Revier nicht weit, und obwohl ich gewusst hatte, dass sie bald wieder einen Grund finden würden, mich zu verhaften, so wurde mein Herz doch schwer, denn er führte mich durch die Stätten meiner Jugend, die ich nach der Besichtigung des Hafens hatte besuchen wollen.» [Z. 56]

Ordne die unterstrichenen Partikeln zu: durch / nach / und / obwohl / dass / denn / nicht / bald

– Präposition
– Konjunktion
– Sonstige (Adverbien, Modalpartikeln)`,

    options: [
      {
        label: 'Präpositionen: durch, nach | Konjunktionen: und, obwohl, dass, denn | Sonstige: nicht, bald',
        correct: true,
      },
      {
        label: 'Präpositionen: durch, nach, denn | Konjunktionen: und, obwohl, dass | Sonstige: nicht, bald',
        correct: false,
      },
      {
        label: 'Präpositionen: durch | Konjunktionen: nach, und, obwohl, dass, denn | Sonstige: nicht, bald',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Partikel-Unterarten',
          content: `Präpositionen: stehen vor Nomen, bestimmen den Fall.
→ durch (+ Akkusativ), nach (+ Dativ)

Konjunktionen: verbinden Sätze oder Satzteile.
→ und (nebenordnend), obwohl (unterordnend), dass (unterordnend), denn (nebenordnend)

Sonstige (Adverbien/Modalpartikeln): veränderlich weder durch Flexion noch Kasus.
→ nicht (Negationspartikel), bald (Temporaladverb)`,
        },
        {
          title: 'Zuordnung im Detail',
          content: `Präpositionen:
→ durch (die Stätten) ✅
→ nach (der Besichtigung) ✅

Konjunktionen:
→ und ✅ (nebenordnend)
→ obwohl ✅ (konzessiv, unterordnend)
→ dass ✅ (unterordnend, Objektsatz)
→ denn ✅ (kausal, nebenordnend)

Sonstige:
→ nicht ✅ (Negationspartikel/Adverb)
→ bald ✅ (Temporaladverb)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präposition: steht VOR Nomen, regiert Fall → durch, nach ✅
2️⃣  Konjunktion: verbindet → und, obwohl, dass, denn ✅
3️⃣  Sonstige: weder noch → nicht (Negation), bald (Zeit) ✅
4️⃣  «denn» = Konjunktion (kausal), nicht Partikel «denn» (in Fragen)!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_SUBJEKT_VERB_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Satzglieder',

    questionText: `Aufgabe 12 (2 Punkte): Subjekt und Verb herausschreiben.

«Viele Jahre schon war jede Verbindung nach aussen abgeschnitten.» [Z. 6]

A) Schreibe die Nominalgruppe im Nominativ (= Subjekt) heraus.
B) Schreibe die verbalen Teile heraus.`,

    options: [
      {
        label: 'A: jede Verbindung (nach aussen) | B: war abgeschnitten',
        correct: true,
      },
      {
        label: 'A: Viele Jahre | B: war abgeschnitten',
        correct: false,
      },
      {
        label: 'A: jede Verbindung | B: war schon abgeschnitten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Subjekt und Verb finden',
          content: `Subjekt (Nominativ):
→ Frage: Wer oder was «war abgeschnitten»?
→ «jede Verbindung» ✅ (Nominativ Singular, Artikel «jede» + Nomen)
→ Optional mit Erweiterung: «jede Verbindung nach aussen» auch akzeptiert

⚠️ «Viele Jahre» = Temporalangabe (Akkusativ der Zeit), kein Subjekt!

Verbale Teile:
→ «war abgeschnitten» = Passiv Präteritum (Zustandspassiv)
→ «schon» ist Adverb, kein verbaler Teil`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Subjekt: Wer/Was + Verb? → im Nominativ → «jede Verbindung»
2️⃣  Zeitangaben (Viele Jahre) = kein Subjekt, sondern Angabe
3️⃣  Verbale Teile: alle Teile des Prädikats (Hilfsverb + Partizip) → war abgeschnitten
4️⃣  Adverbien (schon) gehören NICHT zum verbalen Teil`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_FRAGESATZ_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Satzbau',

    questionText: `Aufgabe 13 (1 Punkt): Aussagesatz → Fragesatz im Präsens.

Wandle um:
«Viele Jahre schon war jede Verbindung nach aussen abgeschnitten.» [Z. 6]

→ Fragesatz im Präsens`,

    options: [
      {
        label: 'Ist jede Verbindung nach aussen (schon) viele Jahre abgeschnitten?',
        correct: true,
      },
      {
        label: 'Jede Verbindung nach aussen ist schon viele Jahre abgeschnitten?',
        correct: false,
      },
      {
        label: 'War jede Verbindung nach aussen viele Jahre abgeschnitten?',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Aussagesatz → Fragesatz (Ja/Nein-Frage)',
          content: `Schritte:
1. Präsens statt Präteritum: «war» → «ist»
2. Verb an erste Position (Verberststellung bei Ja/Nein-Frage)
3. Fragezeichen ans Ende

Aussagesatz: Viele Jahre schon war jede Verbindung …
→ Verb («war») rückt an Position 1 → «Ist»
→ Präsens: ist (nicht war!)
→ Fragezeichen!

✅ Ist jede Verbindung nach aussen (schon) viele Jahre abgeschnitten?`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Ja/Nein-Frage: Verb an 1. Stelle
2️⃣  Tempuswechsel nicht vergessen: Präteritum → Präsens (war → ist)
3️⃣  Fragezeichen ans Ende!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_PRONOMEN_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Wortarten',

    questionText: `Aufgabe 14 (4 Punkte): Pronomen in Spalten einordnen.

«Als ich an der Hafenmauer stand, um den Möwen zuzusehen, fiel mein trauriges Gesicht einem Polizisten auf, der in diesem Viertel die Runde zu gehen hatte.» [Z. 1]

Ordne alle Pronomen ein:
ich / diesem / der / den / einem / die / mein / der (zweites)

Kategorien: Personalpronomen | Demonstrativpronomen | Artikel | Possessivpronomen | Relativpronomen`,

    options: [
      {
        label: 'Personal: ich | Demonstrativ: diesem | Artikel: den, einem, die | Possessiv: mein | Relativ: der (beide)',
        correct: true,
      },
      {
        label: 'Personal: ich | Demonstrativ: diesem, der | Artikel: den, einem, die | Possessiv: mein | Relativ: –',
        correct: false,
      },
      {
        label: 'Personal: ich | Demonstrativ: diesem | Artikel: den, einem, die, der | Possessiv: mein | Relativ: –',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Pronomen-Kategorien',
          content: `Personalpronomen: ich, du, er, sie, es, wir, ihr, sie → stehen für Personen/Dinge.
Demonstrativpronomen: dieser, jener, der (allein stehend, zeigend).
Artikel: der, die, das, ein, eine, einem → stehen VOR einem Nomen.
Possessivpronomen: mein, dein, sein, ihr, unser, euer → Zugehörigkeit.
Relativpronomen: der, die, das, welcher → leiten Relativsatz ein.`,
        },
        {
          title: 'Analyse der Wörter',
          content: `ich → Personalpronomen ✅ (steht für den Erzähler)

diesem → Demonstrativpronomen ✅ («in diesem Viertel» → zeigt auf das Viertel, steht aber vor Nomen → Grenzfall; offizielle Lösung: Demonstrativpronomen)

der (1. «der in diesem Viertel…») → Relativpronomen ✅ (leitet Relativsatz ein, bezieht sich auf «Polizisten»)

den → Artikel ✅ (vor «Möwen» = bestimmter Artikel Dativ Plural)

einem → Artikel ✅ (vor «Polizisten» = unbestimmter Artikel Dativ Singular)

die → Artikel ✅ (vor «Runde» = bestimmter Artikel Akkusativ Singular)

mein → Possessivpronomen ✅ (vor «Gesicht» = Zugehörigkeit)

der (2. «der in diesem Viertel die Runde») → Relativpronomen ✅ (Wiederholung: ebenfalls Relativpronomen)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Artikel: steht VOR Nomen ohne eigene Bedeutung → den, einem, die
2️⃣  Relativpronomen: leitet Relativsatz ein → «der in diesem Viertel…»
3️⃣  Possessivpronomen: zeigt Besitz → mein
4️⃣  Demonstrativpronomen: «dieser/diese/dieses» zeigt auf etwas → diesem`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_HAUPTSATZ_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Satzbau',

    questionText: `Aufgabe 15 (1 Punkt): Hauptsatz herausschreiben.

«Als ich an der Hafenmauer stand, um den Möwen zuzusehen, fiel mein trauriges Gesicht einem Polizisten auf, der in diesem Viertel die Runde zu gehen hatte.» [Z. 1]

Schreibe den Hauptsatz heraus.`,

    options: [
      {
        label: 'fiel mein trauriges Gesicht einem Polizisten auf',
        correct: true,
      },
      {
        label: 'Als ich an der Hafenmauer stand',
        correct: false,
      },
      {
        label: 'der in diesem Viertel die Runde zu gehen hatte',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Hauptsatz erkennen',
          content: `Hauptsatz = kann allein stehen, Verb an 2. Position (oder 1. bei Fragen/Befehlen).

Analyse:
→ «Als ich an der Hafenmauer stand» = Nebensatz (eingeleitet durch «als», Verb am Ende: stand) ❌
→ «fiel mein trauriges Gesicht einem Polizisten auf» = Hauptsatz! (Verb «fiel» an 1. Pos. wegen Voranstellung des NS) ✅
→ «der in diesem Viertel die Runde zu gehen hatte» = Relativsatz (eingeleitet durch «der», Verb am Ende: hatte) ❌

⚠️ Wenn ein Nebensatz vorangestellt ist, rückt das Verb des HS an Position 1 — das ist trotzdem ein Hauptsatz!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Einleiter (als, weil, der, die…) → Nebensatz
2️⃣  Kein Einleiter, Verb kann an 1. oder 2. Stelle stehen → Hauptsatz
3️⃣  Vorangestellter NS «kippt» das Verb des HS an Stelle 1 → trotzdem Hauptsatz!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_PRAEPOSITIONAL_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Präpositionen',

    questionText: `Aufgabe 16 (4 Punkte): Präpositionalgefüge herausschreiben.

«Das Gesetz wurde vorgestern durch alle Lautsprecher und in allen Zeitungen verkündet. … Diesen wurde es durch Flugblätter bekanntgegeben. Über allen Strassen des Reiches wurden diese abgeworfen.»

Schreibe alle Präpositionalgefüge heraus.`,

    options: [
      {
        label: 'durch alle Lautsprecher | in allen Zeitungen | durch Flugblätter | über allen Strassen des Reiches',
        correct: true,
      },
      {
        label: 'durch alle Lautsprecher | in allen Zeitungen | durch Flugblätter',
        correct: false,
      },
      {
        label: 'durch alle Lautsprecher | in allen Zeitungen | über allen Strassen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präpositionalgefüge (Präpositionalgruppe)',
          content: `Ein Präpositionalgefüge = Präposition + Nomengruppe (inklusive Artikel, Adjektive, Erweiterungen).

→ «durch alle Lautsprecher» ✅ (durch + alle Lautsprecher)
→ «in allen Zeitungen» ✅ (in + allen Zeitungen)
→ «durch Flugblätter» ✅ (durch + Flugblätter)
→ «über allen Strassen des Reiches» ✅ (über + allen Strassen des Reiches — inklusive Genitiv-Erweiterung!)

⚠️ «des Reiches» ist Genitiv-Attribut zu «Strassen» → gehört zum Präpositionalgefüge dazu!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präposition finden (durch, in, über, mit, von…)
2️⃣  Gesamte Nomengruppe dahinter mitnehmen (Artikel + Adj. + Nomen + Erweiterungen)
3️⃣  Genitiv-Attribute (des Reiches) gehören zur Nomengruppe dazu!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_OBJEKTE_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Satzglieder',

    questionText: `Aufgabe 17 (3 Punkte): Objekte bestimmen.

«Ich stand an der Hafenmauer. Ich sah den Möwen zu. Mein trauriges Gesicht fiel einem Polizisten auf. Dieser hatte in diesem Viertel die Runde zu gehen.»

Ordne die Objekte ein:
– Akkusativobjekt
– Genitivobjekt
– Dativobjekt`,

    options: [
      {
        label: 'Akkusativ: die Runde | Dativ: den Möwen, einem Polizisten | Genitiv: –',
        correct: true,
      },
      {
        label: 'Akkusativ: die Runde, den Möwen | Dativ: einem Polizisten | Genitiv: –',
        correct: false,
      },
      {
        label: 'Akkusativ: die Runde | Dativ: einem Polizisten | Genitiv: den Möwen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Objekte bestimmen',
          content: `«Ich sah den Möwen zu»
→ zusehen + Dativ: Wem sah er zu? → den Möwen → Dativobjekt ✅
⚠️ «zuschauen/zusehen» regiert Dativ: Man sieht JEMANDEM zu!

«Mein trauriges Gesicht fiel einem Polizisten auf»
→ auffallen + Dativ: Wem fiel es auf? → einem Polizisten → Dativobjekt ✅

«Dieser hatte die Runde zu gehen»
→ zu gehen WAS? → die Runde → Akkusativobjekt ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wen/Was? → Akkusativ (die Runde)
2️⃣  Wem? → Dativ (den Möwen, einem Polizisten)
3️⃣  Verben mit festem Dativ merken: zusehen, auffallen, helfen, gehören…
4️⃣  «den Möwen» klingt wie Akkusativ, ist aber Dativ Plural! (der Artikel «den» = Dativ Pl.)`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_NEBENSATZ_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Satzbau',

    questionText: `Aufgabe 18 (2 Punkte): Nebensätze herausschreiben.

«Ängstlich wie eine Schwalbe, die das Unwetter ahnt, schwebte sie meist nahe der Oberfläche des Wassers, manchmal nur wagte sie kreischend den Sturz nach oben, um ihre Bahn mit der der Genossen zu vereinen.» [Z. 8]

Schreibe alle Nebensätze heraus.`,

    options: [
      {
        label: '1. die das Unwetter ahnt | 2. um ihre Bahn mit der der Genossen zu vereinen',
        correct: true,
      },
      {
        label: '1. wie eine Schwalbe, die das Unwetter ahnt | 2. um ihre Bahn zu vereinen',
        correct: false,
      },
      {
        label: '1. die das Unwetter ahnt | 2. manchmal nur wagte sie den Sturz nach oben',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Nebensätze erkennen',
          content: `Nebensätze haben:
→ einen Einleiter (Konjunktion, Relativpronomen, «um … zu»)
→ das Verb am Ende

«die das Unwetter ahnt»
→ Relativpronomen «die» → Relativsatz ✅, Verb «ahnt» am Ende ✅

«um ihre Bahn mit der der Genossen zu vereinen»
→ Finalsatz mit «um … zu» → Infinitivsatz = Nebensatz ✅

⚠️ «wie eine Schwalbe» = Vergleichsgruppe, kein vollständiger Nebensatz (kein eigenes Verb)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Einleiter + Verb am Ende → Nebensatz
2️⃣  «um … zu» + Infinitiv = Finalsatz (auch Nebensatz)
3️⃣  Vergleichsgruppen («wie eine Schwalbe» ohne Verb) = kein Nebensatz!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_HAUPTSAETZE_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Satzbau',

    questionText: `Aufgabe 19 (2 Punkte): Wie viele Hauptsätze?

«Jetzt erst spürte ich, dass es kalt war und ich keinen Mantel hatte, jetzt erst kam mein Hunger richtig hoch und knurrte vor der Pforte des Magens, jetzt erst begriff ich, dass ich auch schmutzig war, unrasiert, zerlumpt, und dass es Gesetze gab, nach denen jeder Kamerad sauber, rasiert, glücklich und satt zu sein hatte.» [Z. 52]

Wie viele Hauptsätze gibt es?`,

    options: [
      { label: '3 Hauptsätze', correct: true },
      { label: '4 Hauptsätze', correct: false },
      { label: '2 Hauptsätze', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Hauptsätze zählen',
          content: `Vorgehen: Konjugierte Verben in Hauptsätzen suchen (Verb an 2. Stelle, kein Einleiter).

HS 1: «Jetzt erst spürte ich» (spürte = Präteritum, Verb an 2. Stelle nach «jetzt erst») ✅
→ «dass es kalt war» etc. = Nebensätze!

HS 2: «jetzt erst kam mein Hunger richtig hoch und knurrte vor der Pforte des Magens»
→ «kam» + «knurrte» = zwei Prädikate, aber VERBUNDEN durch «und» → 1 Hauptsatz mit erweitertem Prädikat ✅

HS 3: «jetzt erst begriff ich» ✅
→ «dass ich auch schmutzig war» etc. = Nebensätze!

✅ Total: 3 Hauptsätze`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verb an 2. Stelle ohne Einleiter = Hauptsatz
2️⃣  «und» zwischen zwei Prädikaten im gleichen HS = nur 1 HS
3️⃣  «dass / weil / obwohl / der/die/das» = Einleiter → Nebensatz, nicht zählen
4️⃣  «jetzt erst» als Signal: 3× «jetzt erst» → 3 Hauptsätze!`,
    },
  },

  {
    id: 'D3_2017_GRAMMATIK_KONJUNKTION_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Satzbau',

    questionText: `Aufgabe 20 (1 Punkt): Definition vervollständigen.

«Unterordnende Konjunktionen leiten ______________ ein.»

Was ist die richtige Antwort?`,

    options: [
      { label: 'einen Nebensatz / Nebensätze', correct: true },
      { label: 'einen Hauptsatz', correct: false },
      { label: 'eine Infinitivgruppe', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Konjunktionsarten',
          content: `Nebenordnende Konjunktionen: verbinden Hauptsätze oder gleichrangige Satzteile.
→ Beispiele: und, oder, aber, denn, sondern

Unterordnende (subordinierende) Konjunktionen: leiten Nebensätze ein, das Verb steht am Ende.
→ Beispiele: weil, dass, obwohl, als, wenn, während, damit, ob

✅ Unterordnende Konjunktionen leiten Nebensätze ein.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
Unterordnend = subordinierend = bringt das Verb ans Ende → leitet Nebensatz ein.
Merke: WEIL, DASS, OBWOHL, ALS, WENN → immer Nebensatz → Verb am Ende!`,
    },
  },

  {
    id: 'D3_2017_WORTSCHATZ_3',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106605/AP17_D_GMS3_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Wortschatz',

    questionText: `Aufgabe 21 (4 Punkte): Sinnverwandte Wörter finden.

a) «Durchbrenner» [Z. 29] – was bedeutet das?
→ Brandstifter / Ausreisser / Feuerwehrmann / Panzerknacker

b) «Revier» [Z. 56] – was bedeutet das hier?
→ Zone / Wache / Jagdgebiet / Posten / Bezirk / Bereich

c) «Entweichen» [Z. 39] – was bedeutet das?
→ Fliehen / Rennen / Abtreten / Entrinnen

d) Ersetze «auch» [Z. 53] durch ein gleichbedeutendes Wort.`,

    options: [
      {
        label: 'a: Ausreisser | b: Wache, Posten, Bezirk, Bereich | c: Fliehen, Entrinnen | d: ausserdem / zudem / ja',
        correct: true,
      },
      {
        label: 'a: Brandstifter | b: Wache, Zone | c: Rennen, Fliehen | d: auch noch',
        correct: false,
      },
      {
        label: 'a: Ausreisser | b: Jagdgebiet, Zone | c: Fliehen, Abtreten | d: ausserdem',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Auflösung der 4 Teilaufgaben',
          content: `a) «Durchbrenner»: jemand, der «durchbrennt» = flieht, sich unerlaubt davonmacht.
→ ✅ Ausreisser (= jemand, der ausreisst/flüchtet)
→ ❌ Brandstifter (= legt Feuer) / Feuerwehrmann / Panzerknacker (= Einbrecher)

b) «Revier» im Kontext «Weg zum Revier nicht weit» (nach einer Verhaftung):
→ ✅ Wache (= Polizeiwache) ✅ Posten ✅ Bezirk ✅ Bereich
→ ❌ Jagdgebiet (= falsche Bedeutungsebene, auch wenn «Revier» das bedeuten kann)
→ ❌ Zone (zu unspezifisch)

c) «Entweichen»: entkommen, fliehen:
→ ✅ Fliehen (= entkommen durch Wegrennen)
→ ✅ Entrinnen (= entkommen, sehr ähnliche Bedeutung)
→ ❌ Rennen (= zu allgemein, kein «Entkommen» impliziert)
→ ❌ Abtreten (= weggehen/sterben, andere Bedeutung)

d) «auch» in «ich war auch schmutzig» = zusätzlich/ebenfalls:
→ ✅ ausserdem, zudem, ja (Verstärkungs-/Ergänzungspartikel)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106604/AP17_D_GMS3_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Kontext beachten: «Revier» nach Verhaftung → Polizeiwache, nicht Jagdgebiet
2️⃣  «Durchbrenner» = Verb «durchbrennen» → abhauen/flüchten → Ausreisser
3️⃣  «Entweichen» ≠ «Rennen» → Entweichen = entkommen (mit Erfolg)
4️⃣  «auch» = Additiv-Partikel → ausserdem / zudem`,
    },
  },

];