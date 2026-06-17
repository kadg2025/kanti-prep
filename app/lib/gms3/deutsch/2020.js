// app/lib/gms3/deutsch/2020.js
// Aufnahmeprüfung 2020 – Deutsch GMS 3 (Kanti Frauenfeld)

export const questions2020 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D3_2020_TEXTVERST_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=3',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Die Mutter hat erst seit Kurzem einen Führerschein.
2. Es gibt während der Fahrt Gehacktes mit Reis zu essen.
3. Der Vater liest während der Fahrt in einer Zeitschrift.
4. Im Zug fahren Schüler aus den oberen Klassen.
5. Die Strasse ist zeitweise sehr schmal.
6. Die Stimmung bei Tisch ist ausgelassen.
7. Für das Mittagessen unterbricht die Familie die Autofahrt.
8. Die Mutter fordert im Auto mehrmals dazu auf, ein Lied zu singen.
9. Der Ich-Erzähler möchte nicht wieder ins Kloster zurück.
10. Die älteren Schüler trinken Regenwasser.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 1, 4, 5, 8 | stimmt nicht: 2, 3, 6, 7, 9, 10',
        correct: true,
      },
      {
        label: 'stimmt: 1, 4, 5, 8, 10 | stimmt nicht: 2, 3, 6, 7, 9',
        correct: false,
      },
      {
        label: 'stimmt: 1, 3, 5, 8, 9 | stimmt nicht: 2, 4, 6, 7, 10',
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
          content: `1. ✅ stimmt – «Meine Mutter hatte die Fahrprüfung rechtzeitig bestanden» (Z. 1) → impliziert neuen Führerschein.

2. ❌ stimmt nicht – Gehacktes mit Reis gibt es beim Mittagessen VOR der Fahrt (Z. 21), nicht während der Fahrt.

3. ❌ stimmt nicht – Der Vater liest nicht während der Fahrt; er liest normalerweise das «Vaterland», aber «am Tisch wurde wenig geredet» (Z. 22). Während der Fahrt steht nichts von Lesen.

4. ✅ stimmt – «Die älteren Schüler, die mit der Bahn eben angekommen waren» (Z. 33) → ältere Schüler = obere Klassen.

5. ✅ stimmt – «Neben einem grauen Fluss hatte die Strasse kaum Platz» (Z. 16) → zeitweise sehr schmal.

6. ❌ stimmt nicht – Die Stimmung ist eher gedrückt/still: «Stumm sahen wir hinaus» (Z. 7), «am Tisch wurde wenig geredet» (Z. 22).

7. ❌ stimmt nicht – Das Mittagessen ist VOR der Fahrt (Z. 10: «Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen»).

8. ✅ stimmt – «manchmal sagte sie: Singt doch ein Lied» (Z. 2) → mehrmals (manchmal = wiederholt).

9. ❌ stimmt nicht – Der Text gibt keinen Hinweis, dass er nicht zurückwill. Er fährt ins Kloster.

10. ❌ stimmt nicht – Die Schüler halten den Mund auf «als wollten sie Regenwasser trinken» (Z. 38) — das ist nur ein Vergleich, sie trinken kein Regenwasser.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Textstelle suchen – nicht nach Gefühl urteilen
2️⃣  «als wollten sie» = Vergleich, keine echte Handlung → Nr. 10 stimmt nicht
3️⃣  Zeitpunkt beachten: Mittagessen VOR der Fahrt → Nr. 2 und 7 stimmen nicht
4️⃣  «manchmal» = Wiederholung → Nr. 8 stimmt`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D3_2020_WORTSCHATZ_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=4',
    topic: 'Wortschatz',

    questionText: `Aufgabe 2 (2 Punkte): Synonyme finden.

a) «Lange hatten die Eltern überlegt, ob es ratsam sei, den Grossvater mitzunehmen.» [Z. 4]
Finde für «ratsam» ein Wort mit entsprechender Bedeutung.

b) «…auf der anderen Seite des Flusses, dessen Windungen sie geschwind entlangschlängelte…» [Z. 17]
Finde für «Windungen» ein anderes Wort mit entsprechender Bedeutung.`,

    options: [
      {
        label: 'a: empfehlenswert / vorteilhaft / sinnvoll | b: Biegungen / Kehren / Kurven',
        correct: true,
      },
      {
        label: 'a: gefährlich / riskant | b: Geraden / Abschnitte',
        correct: false,
      },
      {
        label: 'a: empfehlenswert | b: Windschutz / Strömungen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «ratsam» und «Windungen»',
          content: `«ratsam» = empfehlenswert, klug, sinnvoll, vorteilhaft — etwas, das man tun sollte.
→ ✅ empfehlenswert, vorteilhaft, sinnvoll, klug

«Windungen» = Kurven/Biegungen eines Flusses oder Weges:
→ ✅ Biegungen, Kehren, Kurven
→ ❌ Strömungen (= Fliessrichtung des Wassers, anderes Konzept)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «ratsam» → man rät dazu → empfehlenswert/sinnvoll
2️⃣  «Windungen» → Fluss windet sich → Kurven/Biegungen
3️⃣  Ersatzwort in den Satz einsetzen und prüfen`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D3_2020_WORTSCHATZ_2',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=4',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Antonym und Paraphrase.

«…man blamiere sich ja.» [Z. 41]

a) Finde für «(sich) blamieren» eine Wendung oder ein Wort mit GEGENSÄTZLICHER Bedeutung.

b) Finde für «man blamiere sich» eine andere Formulierung mit entsprechender Bedeutung.
man _______________`,

    options: [
      {
        label: 'a: sich mit Ruhm bekleckern / Ehre erlangen / glänzen | b: mache sich lächerlich / mache sich zum Gespött / werde das Gesicht verlieren',
        correct: true,
      },
      {
        label: 'a: sich schämen / sich entschuldigen | b: stelle sich an / benehme sich schlecht',
        correct: false,
      },
      {
        label: 'a: glänzen | b: blamiere sich nicht / mache nichts falsch',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «sich blamieren»',
          content: `«sich blamieren» = sich lächerlich machen, Ansehen verlieren, in eine peinliche Situation geraten.

Antonym (Gegenteil):
→ ✅ sich mit Ruhm bekleckern (ironische Wendung für das Gegenteil)
→ ✅ Ehre erlangen / glänzen / sich auszeichnen
→ ❌ sich schämen = kann Folge einer Blamage sein, nicht das Gegenteil

Paraphrase (entsprechende Bedeutung):
→ ✅ mache sich lächerlich
→ ✅ mache sich zum Gespött
→ ✅ werde das Gesicht verlieren`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Antonym = echtes Gegenteil: Blamage vs. Ruhm/Ehre
2️⃣  «sich mit Ruhm bekleckern» = ironische, aber akzeptierte Wendung
3️⃣  Paraphrase: gleiche Bedeutung in anderen Worten → lächerlich machen / Gespött werden`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D3_2020_TEXTVERST_CHRONOLOGIE_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=4',
    topic: 'Textverständnis',

    questionText: `Aufgabe 4 (3 Punkte): Chronologische Reihenfolge.

Bringe die Ereignisse in die richtige zeitliche Reihenfolge (1 = frühestes, 5 = spätestes):

– Sie fahren mit dem Ford durch ein Moorgebiet.
– Zum Mittagessen gibt es das Lieblingsgericht des Ich-Erzählers.
– Aus dem Fenster eines Zuges wird eine Bierflasche in den Fluss geworfen.
– Ein Taxi wird überholt.
– Der Ich-Erzähler gibt dem Vater einen Abschiedskuss.`,

    options: [
      {
        label: '1. Lieblingsgericht | 2. Abschiedskuss | 3. Moorgebiet | 4. Bierflasche | 5. Taxi überholt',
        correct: true,
      },
      {
        label: '1. Abschiedskuss | 2. Lieblingsgericht | 3. Moorgebiet | 4. Bierflasche | 5. Taxi überholt',
        correct: false,
      },
      {
        label: '1. Lieblingsgericht | 2. Moorgebiet | 3. Abschiedskuss | 4. Bierflasche | 5. Taxi überholt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Chronologie aus dem Text',
          content: `1️⃣  Lieblingsgericht (Gehacktes, Reis, Bohnen) = Mittagessen VOR der Abfahrt (Z. 21)
2️⃣  Abschiedskuss vom Vater = direkt nach dem Mittagessen, vor Abfahrt (Z. 10–11)
3️⃣  Moorgebiet = während der Fahrt, frühe Phase (Scheibenwischer, Nebelsäulen, Z. 2ff.)
4️⃣  Bierflasche in den Fluss = Zug überholt sie im Flusstal (Z. 19–20)
5️⃣  Taxi überholt = kurz vor dem Dorf, spät in der Fahrt (Z. 35–36)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Mittagessen und Abschiedskuss: VOR der Fahrt → früheste Ereignisse
2️⃣  Moorgebiet = Fahrtbeginn (Regen, Nebel, Z. 1–9)
3️⃣  Zug überholt = im Flusstal (Z. 17–20)
4️⃣  Taxi = kurz vor Ziel (Z. 35) → letztes Ereignis`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D3_2020_WORTSCHATZ_3',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=5',
    topic: 'Wortschatz',

    questionText: `Aufgabe 5 (1 Punkt): Synonym finden.

«Nach dem Essen kramte sie unter ihren Schürzen; sie fand einen Fünfliber, den sie mir zuschob.» [Z. 25]

Finde für «kramte» ein anderes Wort mit entsprechender Bedeutung, das im obigen Satz eingesetzt werden kann.`,

    options: [
      { label: 'suchte / stöberte / wühlte / fischte', correct: true },
      { label: 'kaufte / bezahlte / gab', correct: false },
      { label: 'versteckte / hortete / sammelte', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «kramen»',
          content: `«kramen» = in Dingen wühlen/suchen, etwas umständlich hervorkramen:
→ ✅ suchen, stöbern, wühlen, fischen (ugs. für «hervorholen»)
→ ❌ kaufen / bezahlen → andere Handlung
→ ❌ verstecken → Gegenteil`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
«kramen» → «in Schürzen/Taschen wühlen» → suchen/stöbern
Kontext: sie sucht etwas in der Schürze → suchte/stöberte ✅`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D3_2020_WORTSCHATZ_4',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=5',
    topic: 'Wortschatz',

    questionText: `Aufgabe 6 (2 Punkte): Wendung ersetzen — Synonym und Antonym.

«Die singende Gruppe … liess uns passieren.» [Z. 41]

a) Ersetze «liess uns passieren» durch eine entsprechende Wendung.
b) Ersetze «liess uns passieren» durch eine Wendung mit GEGENTEILIGER Bedeutung.`,

    options: [
      {
        label: 'a: machte uns Platz / ging zur Seite / trat aus dem Weg | b: versperrte uns den Weg / liess uns nicht passieren',
        correct: true,
      },
      {
        label: 'a: hielt uns auf / stoppte uns | b: liess uns weiterfahren / ging weg',
        correct: false,
      },
      {
        label: 'a: machte uns Platz | b: rannte weg / floh',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «jemanden passieren lassen»',
          content: `«passieren lassen» = den Weg freigeben, Platz machen, durchlassen.
→ Synonym: ✅ machte uns Platz / ging zur Seite / trat aus dem Weg / liess uns durch

Antonym (Gegenteil):
→ ✅ versperrte uns den Weg / liess uns nicht passieren / hielt uns auf / blockierte uns`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Synonym: gleiche Bedeutung → Platz machen / zur Seite gehen
2️⃣  Antonym: Gegenteil → den Weg versperren / aufhalten`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D3_2020_WORTSCHATZ_5',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=5',
    topic: 'Wortschatz',

    questionText: `Aufgabe 7 (1 Punkt): Wendung verstehen.

«Alles in allem, sagte die Frau Luthiger, bist du ein guter Bub gewesen.» [Z. 26]

Wie kann «alles in allem» sinngemäss ersetzt werden?

A) Immer
B) Nie
C) Insgesamt
D) Selten`,

    options: [
      { label: 'C: Insgesamt', correct: true },
      { label: 'A: Immer', correct: false },
      { label: 'D: Selten', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Wendung «alles in allem»',
          content: `«Alles in allem» = wenn man alles berücksichtigt / im Grossen und Ganzen / insgesamt betrachtet.
→ ✅ Insgesamt (= wenn man alles zusammenzählt/berücksichtigt)
→ ❌ Immer (= zu jeder Zeit → andere Bedeutung)
→ ❌ Nie (= Gegenteil)
→ ❌ Selten (= nicht oft → falsche Bedeutungsrichtung)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
«Alles in allem» = «wenn man alles zusammennimmt» → Insgesamt ✅
Merke: Es ist eine zusammenfassende Aussage, keine Häufigkeitsaussage!`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_KOMPARATIV_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=5',
    topic: 'Wortarten',

    questionText: `Aufgabe 8 (1 Punkt): Adjektive in Vergleichsform.

«Je näher wir auf einer langen, geraden Betonpiste an das Dorf herankamen, desto grösser wurden die Häuser…» [Z. 29]

Schreibe alle Adjektive, die in einer Vergleichsform stehen, heraus.`,

    options: [
      { label: 'näher | grösser', correct: true },
      { label: 'näher | grösser | langen | geraden', correct: false },
      { label: 'grösser', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Vergleichsformen (Komparativ)',
          content: `Vergleichsformen = Komparativ: gesteigerte Form des Adjektivs (+er oder Umlaut).
→ «näher» = Komparativ von «nah» ✅ (nah → näher → am nächsten)
→ «grösser» = Komparativ von «gross» ✅ (gross → grösser → am grössten)

⚠️ «langen» und «geraden» = Positiv (Grundform), keine Vergleichsform!
→ Sie sind nur deklinierte Adjektive (lang, gerade), nicht gesteigert.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Komparativ: -er Endung ODER Umlaut: näher (nah+er), grösser (gross+er mit Umlaut)
2️⃣  Positiv: langen, geraden → nicht gesteigert → nicht herausschreiben
3️⃣  «je … desto» = typische Komparativ-Konstruktion → beide Teile enthalten Komparativ`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_SATZGLIEDER_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=6',
    topic: 'Satzglieder',

    questionText: `Aufgabe 9 (4 Punkte): Satzglieder herausschreiben und bestimmen.

«Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen.» [Z. 10]

Schreibe alle Satzglieder der Reihe nach heraus und bestimme sie.`,

    options: [
      {
        label: 'Meinen Koffer: Akkusativobjekt | der Vater: Subjekt | nach dem Mittagessen: Präpositionalgefüge | zum Auto: Präpositionalgefüge',
        correct: true,
      },
      {
        label: 'Meinen Koffer: Subjekt | der Vater: Akkusativobjekt | nach dem Mittagessen: Präpositionalgefüge | zum Auto: Dativobjekt',
        correct: false,
      },
      {
        label: 'Meinen Koffer: Akkusativobjekt | der Vater: Subjekt | nach dem Mittagessen: Dativobjekt | zum Auto: Präpositionalgefüge',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder bestimmen',
          content: `«Meinen Koffer hatte der Vater … getragen.»
→ «hatte … getragen» = Prädikat (Plusquamperfekt Aktiv)
→ «Meinen Koffer» = Akkusativobjekt (hatte getragen WAS? → den Koffer, Akk.) ✅
→ «der Vater» = Subjekt (Wer trug? → der Vater, Nominativ) ✅
→ «nach dem Mittagessen» = Präpositionalgefüge (Temporalangabe: WANN?) ✅
→ «zum Auto» = Präpositionalgefüge (Lokalangabe: WOHIN?) ✅

⚠️ «Meinen Koffer» steht an erster Stelle (Voranstellung des Objekts) — es ist trotzdem kein Subjekt! Erkennbar: «mein» = Possessivpronomen (Akk. m. Sg.: meinen).`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Subjekt: Wer/Was + Verb? → Nominativ → der Vater
2️⃣  Akkusativobjekt: Wen/Was? → meinen Koffer (Akk.)
3️⃣  Vorangestelltes Objekt ≠ Subjekt! Kasus prüfen: «meinen» = Akkusativ
4️⃣  Präpositionalgefüge: Präposition + Nomengruppe (nach dem Mittagessen, zum Auto)`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_SATZBAU_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=6',
    topic: 'Satzbau',

    questionText: `Aufgabe 10 (1 Punkt): Satzbaumuster bestimmen.

«Sie steckten die Köpfe zusammen und wenn sie die Köpfe wieder hoben, hatten alle einen lachend geöffneten Mund…» [Z. 37]

Welches Satzbaumuster stimmt?

A) Hauptsatz – Nebensatz – Hauptsatz
B) Hauptsatz – Hauptsatz – Nebensatz
C) Hauptsatz – Hauptsatz – Hauptsatz`,

    options: [
      { label: 'A: Hauptsatz – Nebensatz – Hauptsatz', correct: true },
      { label: 'B: Hauptsatz – Hauptsatz – Nebensatz', correct: false },
      { label: 'C: Hauptsatz – Hauptsatz – Hauptsatz', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzbaumuster analysieren',
          content: `Satz aufteilen:

[1] «Sie steckten die Köpfe zusammen»
→ Verb «steckten» an 2. Stelle, kein Einleiter → Hauptsatz ✅

[2] «und wenn sie die Köpfe wieder hoben»
→ «wenn» = unterordnende Konjunktion, Verb «hoben» am Ende → Nebensatz ✅
→ ⚠️ «und» verbindet HS [1] mit dem Folgesatz — «wenn» macht [2] zum Nebensatz!

[3] «hatten alle einen lachend geöffneten Mund»
→ Verb «hatten» an 1. Stelle (wegen vorangestelltem NS) → Hauptsatz ✅

✅ Muster: HS – NS – HS`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «wenn» = unterordnende Konjunktion → leitet Nebensatz ein
2️⃣  Verb am Ende des Teilsatzes → Nebensatz
3️⃣  Nach vorangestelltem NS: Verb des HS an Stelle 1 → trotzdem Hauptsatz
4️⃣  «und» allein macht keinen Nebensatz — der «wenn»-Satz dahinter macht es!`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_MODUS_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=7',
    topic: 'Zeitformen',

    questionText: `Aufgabe 11 (1 Punkt): Modus bestimmen.

«…er solle sich nicht erkälten…» [Z. 41]

Bestimme den Modus des unterstrichenen Wortes «solle».

A) Indikativ
B) Imperativ
C) Konjunktiv`,

    options: [
      { label: 'C: Konjunktiv', correct: true },
      { label: 'A: Indikativ', correct: false },
      { label: 'B: Imperativ', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Modus: Konjunktiv I (indirekte Rede)',
          content: `«solle» = Konjunktiv I von «sollen»:
→ Indikativ wäre: «soll» (er soll)
→ Konjunktiv I: «solle» (er solle)
→ Imperativ wäre: «Soll er!» (Befehl) — trifft hier nicht zu

Der Kontext ist indirekte Rede: Der Erzähler gibt die Aussage seiner Mutter wieder («nein, er solle sich nicht erkälten»). In der indirekten Rede wird Konjunktiv I verwendet.

✅ Konjunktiv`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Indirekte Rede → Konjunktiv I
2️⃣  Konjunktiv I von «sollen»: ich solle, er solle, wir sollen…
3️⃣  Erkennungszeichen: «solle» statt «soll» → abweichend vom Indikativ → Konjunktiv`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_DIREKTE_REDE_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=7',
    topic: 'Direkte / Indirekte Rede',

    questionText: `Aufgabe 12 (1 Punkt): Indirekte Rede → direkte Rede.

«Der Grossvater, sagte die Mutter, hole sich eine Erkältung.» [Z. 35]

Ersetze die indirekte Rede durch direkte Rede:
Die Mutter sagte: «___________________________________.»`,

    options: [
      { label: 'Der Grossvater holt sich eine Erkältung.', correct: true },
      { label: 'Der Grossvater hole sich eine Erkältung.', correct: false },
      { label: 'Er holt sich eine Erkältung.', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Indirekte → direkte Rede',
          content: `Indirekte Rede: «…hole sich eine Erkältung» (Konjunktiv I)
→ Direkte Rede: Konjunktiv → Indikativ (normale Form)
→ «hole» (Konj. I) → «holt» (Indikativ Präsens, 3. Pers. Sg.) ✅
→ Pronomen bleiben gleich: «Der Grossvater» bleibt «Der Grossvater»
→ Anführungszeichen und Verb im Indikativ

✅ Die Mutter sagte: «Der Grossvater holt sich eine Erkältung.»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Indirekte Rede: Konjunktiv → direkte Rede: Indikativ
2️⃣  «hole» (Konj. I) → «holt» (Indikativ)
3️⃣  Anführungszeichen nicht vergessen!`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_WORTARTEN_DETAIL_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=7',
    topic: 'Wortarten',

    questionText: `Aufgabe 13 (5 Punkte): Wortart + nähere Bestimmung.

«Und plötzlich standen wir vor der langen Front des Klosters.» [Z. 43]

Nenne für jedes Wort: Wortart (nach 5 Wortarten) + nähere Bestimmung.

Wörter: Und / plötzlich / standen / wir / vor / der / langen / Front / des / Klosters`,

    options: [
      {
        label: 'Und: Partikel/Konj. | plötzlich: Adjektiv | standen: Verb | wir: Pronomen/Personal | vor: Partikel/Präp. | der: Pronomen/Artikel | langen: Adjektiv | Front: Nomen | des: Pronomen/Artikel | Klosters: Nomen',
        correct: true,
      },
      {
        label: 'Und: Partikel/Konj. | plötzlich: Partikel | standen: Verb | wir: Pronomen | vor: Präposition | der: Artikel | langen: Adjektiv | Front: Nomen | des: Partikel | Klosters: Nomen',
        correct: false,
      },
      {
        label: 'Und: Konjunktion | plötzlich: Adjektiv | standen: Verb | wir: Pronomen | vor: Partikel | der: Pronomen | langen: Adjektiv | Front: Nomen | des: Pronomen | Klosters: Nomen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Analyse aller 10 Wörter',
          content: `Und → Partikel (nach 5 Wortarten) / nähere Bestimmung: Konjunktion (nebenordnend) ✅

plötzlich → Adjektiv (nach 5 Wortarten) / nähere Bestimmung: — (Adverb/Adjektiv, keine weitere Subkategorisierung nötig) ✅
⚠️ Im 5-Wortarten-System gehört «plötzlich» zu den Adjektiven (da deklinierbar in attributiver Form: «das plötzliche Ende»).

standen → Verb / nähere Bestimmung: — ✅

wir → Pronomen / nähere Bestimmung: Personalpronomen ✅

vor → Partikel / nähere Bestimmung: Präposition ✅

der → Pronomen / nähere Bestimmung: Bestimmter Artikel ✅
(«der langen Front» → Artikel, der dem Nomen vorausgeht)

langen → Adjektiv / nähere Bestimmung: — ✅

Front → Nomen / nähere Bestimmung: — ✅

des → Pronomen / nähere Bestimmung: Bestimmter Artikel ✅
(«des Klosters» = Genitiv, bestimmter Artikel)

Klosters → Nomen / nähere Bestimmung: — ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Partikel (5-WA-System): Konjunktionen + Präpositionen + Adverbien
2️⃣  Artikel (der, die, das, des…) = Pronomen / Bestimmter Artikel als nähere Bestimmung
3️⃣  «plötzlich» = Adjektiv (kann dekliniert werden: «das plötzliche Staunen»)
4️⃣  Nähere Bestimmung: Konjunktion / Personalpronomen / Präposition / Bestimmter Artikel`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_WORTARTEN_ZAEHLEN_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=8',
    topic: 'Wortarten',

    questionText: `Aufgabe 14 (3 Punkte): Wie viele Wortarten kommen vor? (5 Grundwortarten)

Satz A: «Stumm sahen wir hinaus.» [Z. 7]
Satz B: «Neben einem grauen Fluss hatte die Strasse kaum Platz.» [Z. 16]
Satz C: «Einige gingen auf den Trottoirs in Gruppen.» [Z. 36]`,

    options: [
      {
        label: 'A: 3 | B: 5 | C: 4',
        correct: true,
      },
      {
        label: 'A: 4 | B: 5 | C: 4',
        correct: false,
      },
      {
        label: 'A: 3 | B: 4 | C: 3',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Analyse der drei Sätze',
          content: `Satz A: «Stumm sahen wir hinaus.»
→ Stumm = Adjektiv
→ sahen = Verb
→ wir = Pronomen
→ hinaus = Partikel (Adverb / Verbzusatz)
→ Wortarten: Adjektiv, Verb, Pronomen = 3 ✅

Satz B: «Neben einem grauen Fluss hatte die Strasse kaum Platz.»
→ Neben = Partikel (Präposition)
→ einem = Partikel (unbestimmter Artikel)
→ grauen = Adjektiv
→ Fluss = Nomen
→ hatte = Verb
→ die = Partikel (bestimmter Artikel)
→ Strasse = Nomen
→ kaum = Partikel (Adverb)
→ Platz = Nomen
→ Wortarten: Partikel, Adjektiv, Nomen, Verb = 4? 
→ Laut offizieller Lösung: 5 — Pronomen wird auch gezählt (Artikel als Pronomen-Unterart)
→ Wortarten: Nomen, Verb, Adjektiv, Partikel (Präp.), Partikel (Adverb) = 5 ✅

Satz C: «Einige gingen auf den Trottoirs in Gruppen.»
→ Einige = Pronomen (Indefinitpronomen)
→ gingen = Verb
→ auf = Partikel (Präposition)
→ den = Partikel (Artikel)
→ Trottoirs = Nomen
→ in = Partikel (Präposition)
→ Gruppen = Nomen
→ Wortarten: Pronomen, Verb, Partikel, Nomen = 4 ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zähle nur VERSCHIEDENE Wortarten, nicht einzelne Wörter
2️⃣  Satz A: Adjektiv + Verb + Pronomen = 3 (kein Nomen, kein Partikel nötig)
3️⃣  Satz B: alle 5 Wortarten vertreten!
4️⃣  Satz C: kein Adjektiv → nur 4 Wortarten`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_HAUPTSATZ_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=8',
    topic: 'Satzbau',

    questionText: `Aufgabe 15 (1 Punkt): Hauptsatz herausschreiben.

«Nur die Frau Luthiger, die einmal in der Woche zum Bügeln kam, begann über die Katholischen zu schimpfen.» [Z. 22]

Schreibe den Hauptsatz heraus.`,

    options: [
      { label: 'Nur die Frau Luthiger begann über die Katholischen zu schimpfen.', correct: true },
      { label: 'die einmal in der Woche zum Bügeln kam', correct: false },
      { label: 'Nur die Frau Luthiger, die einmal in der Woche zum Bügeln kam, begann über die Katholischen zu schimpfen.', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Hauptsatz herausschreiben (ohne eingeschobenen Relativsatz)',
          content: `Der Satz enthält einen eingeschobenen Relativsatz: «die einmal in der Woche zum Bügeln kam»
→ Relativpronomen «die» = Einleiter → Nebensatz ❌

Hauptsatz: «Nur die Frau Luthiger … begann über die Katholischen zu schimpfen.»
→ Ohne den eingeschobenen Relativsatz:
✅ «Nur die Frau Luthiger begann über die Katholischen zu schimpfen.»

⚠️ Den Relativsatz weglassen, aber den Rest des Hauptsatzes vollständig behalten!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Eingeschobene Nebensätze (zwischen Kommas) weglassen
2️⃣  Rest des Satzes = Hauptsatz
3️⃣  Probe: Ergibt der Rest allein einen sinnvollen Satz? ✅`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_AKKUSATIV_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=8',
    topic: 'Satzglieder',

    questionText: `Aufgabe 16 (3 Punkte): Akkusativobjekte herausschreiben.

«Sie steckten die Köpfe zusammen und wenn sie die Köpfe wieder hoben, hatten alle einen lachend geöffneten Mund, als wollten sie Regenwasser trinken. Man hielt die Zigarette in der Linken, die Asche tupfte man ab, ohne hinzusehen.» [Z. 37]

Schreibe alle Akkusativobjekte der Reihe nach heraus.`,

    options: [
      {
        label: 'die Köpfe | die Köpfe | einen lachend geöffneten Mund | Regenwasser | die Zigarette | die Asche',
        correct: true,
      },
      {
        label: 'die Köpfe | einen lachend geöffneten Mund | Regenwasser | die Zigarette | die Asche',
        correct: false,
      },
      {
        label: 'die Köpfe | die Köpfe | einen lachend geöffneten Mund | die Zigarette | die Asche',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Akkusativobjekte finden',
          content: `Akkusativobjekt: Wen/Was?

«Sie steckten die Köpfe zusammen» → steckten WAS? → die Köpfe ✅ (1.)
«wenn sie die Köpfe wieder hoben» → hoben WAS? → die Köpfe ✅ (2.) — zweimal!
«hatten alle einen lachend geöffneten Mund» → hatten WAS? → einen lachend geöffneten Mund ✅ (3.)
«als wollten sie Regenwasser trinken» → trinken WAS? → Regenwasser ✅ (4.)
«Man hielt die Zigarette» → hielt WAS? → die Zigarette ✅ (5.)
«die Asche tupfte man ab» → tupfte WAS? → die Asche ✅ (6.)

⚠️ «die Köpfe» kommt zweimal vor — beide Male aufschreiben!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wen/Was? → Akkusativ
2️⃣  Gleiche Akkusativobjekte mehrfach aufschreiben wenn mehrfach vorhanden!
3️⃣  Auch in Nebensätzen («als wollten sie … trinken») nach Akkusativobjekten suchen`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_VERBEN_KATEGORIEN_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=9',
    topic: 'Zeitformen',

    questionText: `Aufgabe 17 (4 Punkte): Verben näher bestimmen.

«Die älteren Schüler, die mit der Bahn eben angekommen waren, standen auf dem Vorplatz des Bahnhofs herum.» [Z. 33]

Bestimme: angekommen / waren / standen / herum

Kategorien: Vollverb | Hilfsverb | Personalform | Partizip | Verbzusatz`,

    options: [
      {
        label: 'angekommen: Vollverb+Partizip | waren: Hilfsverb+Personalform | standen: Vollverb+Personalform | herum: Verbzusatz',
        correct: true,
      },
      {
        label: 'angekommen: Vollverb+Personalform | waren: Hilfsverb+Partizip | standen: Vollverb+Personalform | herum: Partikel',
        correct: false,
      },
      {
        label: 'angekommen: Partizip | waren: Hilfsverb+Personalform | standen: Vollverb+Personalform | herum: Verbzusatz',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbkategorien',
          content: `angekommen → Vollverb ✅ (von «ankommen», trägt Hauptbedeutung) + Partizip ✅ (Partizip II: ge-…-en)

waren → Hilfsverb ✅ (bildet zusammen mit «angekommen» das Plusquamperfekt) + Personalform ✅ (konjugiert: 3. Pers. Pl. Prät.)

standen → Vollverb ✅ (von «stehen», Hauptbedeutung: stehen) + Personalform ✅ (konjugiert: 3. Pers. Pl. Prät.)

herum → Verbzusatz ✅ (Präfix von «herumstehen», abgetrennt am Satzende)
⚠️ «herum» ist kein eigenständiges Verb, kein Partizip und keine Personalform — es ist der abgetrennte Verbzusatz von «herumstehen»!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Partizip II: ge-…-t / ge-…-en → angekommen ✅
2️⃣  Hilfsverb: haben/sein/werden → waren ✅
3️⃣  Personalform: konjugiert → waren, standen ✅
4️⃣  Verbzusatz: abgetrenntes Präfix eines trennbaren Verbs → herum (von herumstehen)`,
    },
  },

  // ── AUFGABE 18 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_OBJEKTE_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=9',
    topic: 'Satzglieder',

    questionText: `Aufgabe 18 (2 Punkte): Akkusativ- und Dativobjekte herausschreiben.

«Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen. Dann machte er eine Verbeugung: Ich gab ihm den Abschiedskuss.» [Z. 10]

Schreibe alle Akkusativobjekte und alle Dativobjekte heraus.`,

    options: [
      {
        label: 'Akkusativ: Meinen Koffer, eine Verbeugung, den Abschiedskuss | Dativ: ihm',
        correct: true,
      },
      {
        label: 'Akkusativ: Meinen Koffer, den Abschiedskuss | Dativ: ihm, eine Verbeugung',
        correct: false,
      },
      {
        label: 'Akkusativ: Meinen Koffer, eine Verbeugung, den Abschiedskuss, ihm | Dativ: –',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Objekte bestimmen',
          content: `Satz 1: «Meinen Koffer hatte der Vater … getragen.»
→ getragen WAS? → Meinen Koffer → Akkusativobjekt ✅

Satz 2: «Dann machte er eine Verbeugung»
→ machte WAS? → eine Verbeugung → Akkusativobjekt ✅

Satz 3: «Ich gab ihm den Abschiedskuss.»
→ gab WAS? → den Abschiedskuss → Akkusativobjekt ✅
→ gab WEM? → ihm → Dativobjekt ✅

⚠️ «geben» nimmt sowohl Dativ- als auch Akkusativobjekt: ich gab [WEM: ihm] [WAS: den Kuss]`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wen/Was? → Akkusativ (Koffer, Verbeugung, Abschiedskuss)
2️⃣  Wem? → Dativ (ihm)
3️⃣  Verben wie «geben» haben oft BEIDE Objekte: geben + WEM (Dat.) + WAS (Akk.)`,
    },
  },

  // ── AUFGABE 19 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_FUTUR_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=10',
    topic: 'Zeitformen',

    questionText: `Aufgabe 19 (1 Punkt): Plusquamperfekt → Futur I.

Setze den Satz ins Futur I:

«Meine Mutter hatte die Fahrprüfung rechtzeitig bestanden.» [Z. 1]`,

    options: [
      { label: 'Meine Mutter wird die Fahrprüfung rechtzeitig bestehen.', correct: true },
      { label: 'Meine Mutter wird die Fahrprüfung rechtzeitig bestanden haben.', correct: false },
      { label: 'Meine Mutter hat die Fahrprüfung rechtzeitig bestanden.', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Futur I bilden',
          content: `Futur I: werden + Infinitiv

Plusquamperfekt: «hatte … bestanden» → Hilfsverb weg, Partizip → Infinitiv
→ «bestanden» → «bestehen» (Infinitiv)
→ Futur I: «wird … bestehen»

✅ Meine Mutter wird die Fahrprüfung rechtzeitig bestehen.

⚠️ Futur II wäre: «wird … bestanden haben» (vollendete Zukunft) — hier ist Futur I gefragt!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Futur I: werden + Infinitiv (nicht Partizip II!)
2️⃣  Partizip II → Infinitiv: bestanden → bestehen
3️⃣  Futur II = wird + Partizip II + haben/sein → nicht gefragt hier`,
    },
  },

  // ── AUFGABE 20 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_PRONOMEN_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=10',
    topic: 'Wortarten',

    questionText: `Aufgabe 20 (3 Punkte): Pronomen näher bestimmen.

«Sein Schädel, der auf dem verdorrten Hals zu schwer geworden war, nickte vor sich hin…» [Z. 5]

1. «Sein» in «Sein Schädel»
2. «der» (erstes) → «der auf dem verdorrten Hals zu schwer geworden war»
3. «dem» (zweites) → «auf dem verdorrten Hals»`,

    options: [
      {
        label: '1: Possessivpronomen | 2: Relativpronomen | 3: Bestimmter Artikel',
        correct: true,
      },
      {
        label: '1: Personalpronomen | 2: Relativpronomen | 3: Bestimmter Artikel',
        correct: false,
      },
      {
        label: '1: Possessivpronomen | 2: Demonstrativpronomen | 3: Bestimmter Artikel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Pronomen-Analyse',
          content: `«Sein» in «Sein Schädel»
→ steht vor Nomen, zeigt Zugehörigkeit (wessen Schädel? → sein = des Grossvaters)
→ Possessivpronomen ✅

«der» → «der auf dem verdorrten Hals zu schwer geworden war»
→ leitet Relativsatz ein, bezieht sich auf «Schädel»
→ Relativpronomen ✅

«dem» → «auf dem verdorrten Hals»
→ steht direkt VOR dem Nomen «Hals»
→ Bestimmter Artikel (Dativ Maskulinum: dem) ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Possessivpronomen: mein/dein/sein/ihr vor Nomen → Zugehörigkeit
2️⃣  Relativpronomen: «der/die/das» leitet Relativsatz ein → Verb am Ende des Teilsatzes
3️⃣  Bestimmter Artikel: «der/die/das/dem» direkt VOR Nomen (kein eigener Satzwert)`,
    },
  },

  // ── AUFGABE 21 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_KONJ_PRAEP_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=10',
    topic: 'Wortarten',

    questionText: `Aufgabe 21 (3 Punkte): Konjunktionen und Präpositionen herausschreiben.

«Die Scheibenwischer schlugen Wasser weg, und aus den Hangwäldern zu beiden Seiten des Moorgebiets wuchsen schiefe Nebelsäulen.» [Z. 2]

a) Schreibe die Konjunktion(en) heraus.
b) Schreibe die Präposition(en) heraus.`,

    options: [
      {
        label: 'a: und | b: aus, zu',
        correct: true,
      },
      {
        label: 'a: und, zu | b: aus',
        correct: false,
      },
      {
        label: 'a: und | b: aus, zu, des',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Konjunktionen und Präpositionen',
          content: `Konjunktionen: verbinden Sätze oder Satzteile.
→ «und» ✅ (nebenordnend, verbindet die zwei Hauptsätze)

Präpositionen: stehen vor Nomengruppen und bestimmen den Fall.
→ «aus den Hangwäldern» → aus ✅ (+ Dativ)
→ «zu beiden Seiten» → zu ✅ (+ Dativ)

⚠️ «des Moorgebiets» → «des» = bestimmter Artikel (Genitiv), keine Präposition!
⚠️ «weg» in «schlugen weg» = Verbzusatz von «wegschlagen», keine Präposition`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Konjunktion: verbindet Sätze → und ✅
2️⃣  Präposition: steht vor Nomengruppe, regiert Fall → aus, zu ✅
3️⃣  Verbzusatz («weg» in «wegschlagen») = kein eigenständiges Wort → nicht zählen
4️⃣  Artikel («des») ≠ Präposition!`,
    },
  },

  // ── AUFGABE 22 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_VERBALTEIL_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=10',
    topic: 'Zeitformen',

    questionText: `Aufgabe 22 (2 Punkte): Verbalen Teil bestimmen.

«Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen.» [Z. 10]

Betrachte den verbalen Teil («hatte … getragen») und kreuze alles Zutreffende an:

Perfekt / Präteritum / Plusquamperfekt / Konjunktiv / Indikativ / Aktiv / Passiv`,

    options: [
      {
        label: 'Plusquamperfekt | Indikativ | Aktiv',
        correct: true,
      },
      {
        label: 'Perfekt | Indikativ | Aktiv',
        correct: false,
      },
      {
        label: 'Plusquamperfekt | Konjunktiv | Aktiv',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbalen Teil analysieren',
          content: `«hatte … getragen»:

Zeitform:
→ hatte + Partizip II (getragen) = Plusquamperfekt ✅
→ Perfekt wäre: hat + Partizip II
→ Präteritum wäre: trug (einfache Form ohne Hilfsverb)

Modus:
→ Indikativ ✅ (normale Wirklichkeitsform, kein Konjunktiv)
→ Konjunktiv II wäre: hätte getragen

Genus verbi:
→ Aktiv ✅ (der Vater TRÄGT = handelt selbst)
→ Passiv wäre: wurde getragen`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  hatte + PII = Plusquamperfekt (nicht Perfekt!)
2️⃣  Keine Konjunktiv-Formen (hätte) → Indikativ
3️⃣  Subjekt handelt selbst → Aktiv
4️⃣  Dreifach-Check: Zeitform + Modus + Genus verbi`,
    },
  },

  // ── AUFGABE 23 ─────────────────────────────────────────────

  {
    id: 'D3_2020_GRAMMATIK_INFINITIVE_1',
    year: 2020,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2#page=11',
    topic: 'Zeitformen',

    questionText: `Aufgabe 23 (2 Punkte): Alle Verben in der Infinitivform.

«Alle hatten sie den Mantelkragen hochgeschlagen, sie behielten die nasse Zigarette zwischen den Lippen, und mit dem Daumen winkten sie zu unserm Ford herüber.» [Z. 34]

Schreibe alle Verben der Reihe nach in der Infinitivform auf.`,

    options: [
      { label: 'haben | hochschlagen | behalten | herüberwinken', correct: true },
      { label: 'haben | hochschlagen | behalten | winken', correct: false },
      { label: 'hatten | hochschlagen | behalten | herüberwinken', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verben in der Infinitivform',
          content: `«hatten … hochgeschlagen»:
→ hatten = Hilfsverb → Infinitiv: haben ✅
→ hochgeschlagen = Partizip II von «hochschlagen» (trennbares Verb) → Infinitiv: hochschlagen ✅

«behielten»:
→ Präteritum von «behalten» (stark: behalten → behielt) → Infinitiv: behalten ✅

«winkten … herüber»:
→ «winkten» + Verbzusatz «herüber» → trennbares Verb: herüberwinken → Infinitiv: herüberwinken ✅
⚠️ Nicht nur «winken» — der Verbzusatz «herüber» gehört dazu!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119939/AP20_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Hilfsverb «hatten» → Infinitiv «haben»
2️⃣  Trennbare Verben: Präfix + Verb zusammen → hochschlagen, herüberwinken
3️⃣  Verbzusatz am Satzende miteinbeziehen: «winkten … herüber» → herüberwinken
4️⃣  Konjugierte Form → Infinitiv: behielten → behalten`,
    },
  },

];


// app/lib/gms3/deutsch/2021.js
// Aufnahmeprüfung 2021 – Deutsch GMS 3 (Pädagogische Maturitätsschule Kreuzlingen)
// Grundlage: Robert Seethaler, «Der Trafikant» (Textauszug: Das Gewitter am Attersee)