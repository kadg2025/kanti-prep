// app/lib/gms3/deutsch/2018.js
// Aufnahmeprüfung 2018 – Deutsch GMS 3
// Grundlage: Kurbjuweit, «Zweier ohne» (Textauszug)

export const questions2018 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D3_2018_TEXTVERST_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=1',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Die Schüler haben Angst, vom Rektor bestraft zu werden.
2. Der erste Besuch bei Ludwig findet im Sommer statt.
3. Das städtische Gymnasium ist angesehener als die Schule des Ich-Erzählers.
4. Die Brücke ist zu schmal für eine vierspurige Autobahn.
5. Ludwigs Eltern wohnen nicht in dem Städtchen.
6. Die beiden Jungen dürfen nicht im Fluss schwimmen.
7. Ludwig wird richtig schwindelig, als er von der Brücke schaut.
8. Die Weisse Flotte fährt ganzjährig.
9. In den Seen vor dem Schulzimmer hat es Algen und Fische.
10. Für den Ich-Erzähler war der Regen interessanter als das Gedicht.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 1, 3, 5, 6, 10 | stimmt nicht: 2, 4, 7, 8, 9',
        correct: true,
      },
      {
        label: 'stimmt: 1, 2, 3, 6, 9 | stimmt nicht: 4, 5, 7, 8, 10',
        correct: false,
      },
      {
        label: 'stimmt: 3, 4, 5, 7, 10 | stimmt nicht: 1, 2, 6, 8, 9',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: Aussagen mit dem Text prüfen',
          content: `Bei «stimmt / stimmt nicht»-Aufgaben musst du jede Aussage direkt am Text kontrollieren.
→ Lies nicht nach Gefühl.
→ Suche die passende Textstelle.
→ Prüfe dann genau, ob wirklich alles stimmt.

Wichtig:
Schon ein kleines falsches Detail macht die ganze Aussage falsch. Genau das ist hier oft die Falle.`,
        },
        {
          title: 'Auflösung der 10 Aussagen',
          content: `1. ✅ stimmt – Die Klasse hat Angst, weil jemand etwas Verbotenes tut und «die Strafe alle treffen wird» (Z. 40–41).
2. ❌ stimmt nicht – Die Weisse Flotte fährt «im Sommer» (Z. 4–5), aber der erste Besuch bei Ludwig findet nicht im Sommer statt; später regnet es stark, und es wirkt nicht wie Sommerferien.
3. ✅ stimmt – Ludwig wechselt «vom Gymnasium der Nachbarstadt» (Z. 23–24), und die Klasse reagiert so, als sei diese Schule angesehener.
4. ❌ stimmt nicht – Im Text steht, die Brücke sei «zu schmal für den Wind, für die grossen Laster, für vier Spuren Autobahn» (Z. 14–15). Gemeint ist nicht, dass die ganze Brücke zu schmal für vierspurige Autobahn wäre, sondern dass ihre Pfeiler / Konstruktion verstörend schmal wirken.
5. ✅ stimmt – Zum Haus von Ludwigs Eltern fährt man «von unserem Städtchen» aus nur eine Viertelstunde mit dem Fahrrad (Z. 2–3). Also wohnen sie nicht im Städtchen selbst.
6. ✅ stimmt – Im Fluss «durften wir nicht schwimmen» (Z. 6–7).
7. ❌ stimmt nicht – Schwindelig wird nicht Ludwig, sondern allgemein «einem», wenn man so angestrengt schaut (Z. 11–12).
8. ❌ stimmt nicht – Die Weisse Flotte unterhielt «im Sommer einen kleinen Liniendienst» (Z. 4–5), also nicht ganzjährig.
9. ❌ stimmt nicht – Die Seen mit Algen und Fisch sind ein Bild in der Fantasie des Erzählers («dachte ich», Z. 31–32), nicht echte Seen vor dem Schulzimmer.
10. ✅ stimmt – Während des Gedichts betrachtet der Erzähler den Regen und ist «nicht konzentriert» (Z. 28–30). Der Regen interessiert ihn also mehr als das Gedicht.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Aussage lesen
2️⃣ Passende Zeile im Text suchen
3️⃣ Jedes Detail prüfen: Wer? Wann? Was genau?
4️⃣ Klingt etwas nur fast richtig → dann ist es falsch`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D3_2018_TEXTVERST_CHRONOLOGIE_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=2',
    topic: 'Textverständnis',

    questionText: `Aufgabe 2 (2 Punkte): Chronologische Abfolge.

Bringe die Ereignisse in eine zeitlich geordnete Reihenfolge.
1 = frühestes Ereignis, 4 = spätestes Ereignis

– Der Ich-Erzähler vergisst den Regen.
– Der Ich-Erzähler fährt zum ersten Mal zu Ludwig.
– Ludwig muss die Schule der Nachbarstadt verlassen.
– Ludwig wird der neuen Klasse vorgestellt.

Welche Reihenfolge ist richtig?`,

    options: [
      {
        label: '1. Ludwig muss die Schule der Nachbarstadt verlassen | 2. Ludwig wird der neuen Klasse vorgestellt | 3. Der Ich-Erzähler vergisst den Regen | 4. Der Ich-Erzähler fährt zum ersten Mal zu Ludwig',
        correct: true,
      },
      {
        label: '1. Ludwig wird vorgestellt | 2. Ludwig verlässt die Schule | 3. Fahrt zu Ludwig | 4. Regen vergessen',
        correct: false,
      },
      {
        label: '1. Fahrt zu Ludwig | 2. Ludwig wird vorgestellt | 3. Ludwig verlässt die Schule | 4. Regen vergessen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: Zeitliche Reihenfolge erkennen',
          content: `Bei Chronologie-Aufgaben suchst du nach Signalwörtern wie:
→ «zwei Wochen zuvor»
→ «nach der Schule»
→ «zum ersten Mal»
→ «plötzlich»

Solche Hinweise zeigen dir, was früher und was später passiert.`,
        },
        {
          title: 'Die richtige Reihenfolge',
          content: `1️⃣ Ludwig muss die Schule der Nachbarstadt verlassen.
→ Das ist der Grund, warum er überhaupt in die neue Klasse kommt (Z. 23–26).

2️⃣ Ludwig wird der neuen Klasse vorgestellt.
→ Der Rektor bringt ihn ins Klassenzimmer (Z. 22–24).

3️⃣ Der Ich-Erzähler vergisst den Regen.
→ Als Ludwig grinst, heisst es: «Ich vergass den Regen.» (Z. 38).

4️⃣ Der Ich-Erzähler fährt zum ersten Mal zu Ludwig.
→ Ganz am Anfang des Textausschnitts: «Nach der Schule waren wir zu Ludwig nach Hause gefahren. Er hatte mich eingeladen, zum ersten Mal.» (Z. 1). Diese Fahrt passiert nach dem Kennenlernen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Zuerst Ursache suchen
2️⃣ Dann Einführung / Vorstellung
3️⃣ Danach Reaktion im Klassenzimmer
4️⃣ Erst ganz am Schluss den späteren Besuch einordnen`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D3_2018_WORTSCHATZ_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Bedeutungsgleiche Wörter finden.

Teil A:
«Wir rührten uns nicht.» [Z. 40]
Welches Wort entspricht dem unterstrichenen Wort «rührten»?

Teil B:
«Alle, die da gescheitert waren.» [Z. 26]
Welches Wort entspricht dem Wort «scheitern»?

Welche Kombination ist korrekt?`,

    options: [
      {
        label: 'A: bewegten | B: versagen, fehlschlagen',
        correct: true,
      },
      {
        label: 'A: berührten | B: entsagen',
        correct: false,
      },
      {
        label: 'A: mischten | B: brennen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Wortbedeutung immer im Kontext prüfen',
          content: `Das gleiche Wort kann in verschiedenen Sätzen etwas anderes bedeuten.
Darum musst du immer schauen:
→ In welcher Situation steht das Wort?
→ Was passiert gerade?

«sich rühren» bedeutet hier nicht «etwas anfassen», sondern «sich bewegen».  
«scheitern» bedeutet hier nicht wörtlich kaputtgehen, sondern «keinen Erfolg haben».`,
        },
        {
          title: 'Lösung Teil A und Teil B',
          content: `Teil A:
«Wir rührten uns nicht.»
→ Das bedeutet: Wir bewegten uns nicht. ✅
→ «berührten» passt nicht, weil hier niemand etwas anfasst.

Teil B:
«gescheitert»
→ bedeutet hier: keinen Erfolg haben, versagen, fehlschlagen. ✅
→ «entsagen» bedeutet auf etwas verzichten.
→ «brennen» oder «Holz schlagen» passen überhaupt nicht.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Satz lesen
2️⃣ Wort probeweise ersetzen
3️⃣ Klingt der Satz noch sinnvoll?
4️⃣ Nur dann ist es ein passendes Synonym`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D3_2018_WORTSCHATZ_2',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=2',
    topic: 'Wortschatz',

    questionText: `Aufgabe 4 (4 Punkte): Synonyme finden.

Teil A:
«Ich war nicht konzentriert.» [Z. 29]
Finde für «konzentriert» ein entsprechendes Wort oder eine passende Wendung.

Teil B:
«… liessen wir spüren, dass sie einmal zu mehr Hoffnung Anlass gegeben hatten als wir selbst.» [Z. 26]
Finde für «spüren» ein passendes Synonym.

Welche Kombination passt am besten?`,

    options: [
      {
        label: 'A: bei der Sache / aufmerksam / fokussiert | B: merken / empfinden / fühlen / erleben',
        correct: true,
      },
      {
        label: 'A: müde / langsam | B: erklären / sagen',
        correct: false,
      },
      {
        label: 'A: traurig / still | B: rechnen / schreiben',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Synonyme müssen zur Situation passen',
          content: `Ein Synonym ist ein Wort mit ähnlicher Bedeutung.
Aber: Nicht jedes ähnliche Wort passt in jeden Satz.

Hier musst du den genauen Sinn im Text treffen:
→ «konzentriert» = geistig bei der Sache
→ «spüren» = etwas merken / fühlen / empfinden`,
        },
        {
          title: 'Lösung zu A und B',
          content: `Teil A:
«nicht konzentriert»
→ passende Umschreibungen sind:
bei der Sache, geistig anwesend, fokussiert, aufmerksam ✅

Teil B:
«liessen wir spüren»
→ bedeutet hier:
merken lassen, fühlen lassen, empfinden lassen, erleben lassen ✅

Unpassend wären Wörter, die eher «sagen», «erklären» oder «denken» bedeuten.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Unterstrichenes Wort genau verstehen
2️⃣ Den Satz mit einem Ersatzwort lesen
3️⃣ Passt der Sinn noch?
4️⃣ Wenn ja, ist es ein gutes Synonym`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_ZEITFORM_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 5 (2 Punkte): Zeitformen umformen.

«Ich weiss auch nicht, wie hoch die Brücke ist, ich kenne keine genaue Zahl, obwohl wir uns viel damit beschäftigt haben.» [Z. 16]

Forme den Satz sinngemäss in die Zeitformen Präteritum und Plusquamperfekt um.

Welche Umformung ist richtig?`,

    options: [
      {
        label: 'Ich wusste auch nicht, wie hoch die Brücke war, ich kannte keine genaue Zahl, obwohl wir uns viel damit beschäftigt hatten.',
        correct: true,
      },
      {
        label: 'Ich habe auch nicht gewusst, wie hoch die Brücke gewesen ist, ich habe keine genaue Zahl gekannt, obwohl wir uns viel damit beschäftigt haben.',
        correct: false,
      },
      {
        label: 'Ich wusste auch nicht, wie hoch die Brücke ist, ich kannte keine genaue Zahl, obwohl wir uns viel damit beschäftigt haben.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präteritum und Plusquamperfekt unterscheiden',
          content: `Präteritum = einfache Vergangenheit
→ ich wusste, ich kannte, sie war

Plusquamperfekt = Vorvergangenheit
→ hatte / waren + Partizip II
→ wir hatten uns beschäftigt

Hier werden die ersten beiden Verben ins Präteritum gesetzt und der Nebensatz ins Plusquamperfekt.`,
        },
        {
          title: 'Schritt für Schritt umformen',
          content: `Original:
Ich weiss … die Brücke ist … ich kenne … obwohl wir uns … beschäftigt haben.

Umformung:
→ weiss → wusste
→ ist → war
→ kenne → kannte
→ haben beschäftigt → hatten beschäftigt

✅ Ergebnis:
Ich wusste auch nicht, wie hoch die Brücke war, ich kannte keine genaue Zahl, obwohl wir uns viel damit beschäftigt hatten.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Präsens erkennen
2️⃣ In die Vergangenheit setzen
3️⃣ Vorvergangenheit mit «hatte / waren + Partizip II»
4️⃣ Sinn des Satzes beibehalten`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_PARTIKELN_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 6 (2 Punkte): Verbzusatz oder Präposition?

«Ich fing links an, mein Blick wanderte von Pfeiler zu Pfeiler, und ich zählte zügig bis sechs.» [Z. 8]

Ordne die Wörter richtig zu:
an / von / zu / bis

Welche Zuordnung stimmt?`,

    options: [
      {
        label: 'Verbzusatz: an | Präpositionen: von, zu, bis',
        correct: true,
      },
      {
        label: 'Verbzusätze: an, zu | Präpositionen: von, bis',
        correct: false,
      },
      {
        label: 'Verbzusatz: bis | Präpositionen: an, von, zu',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbzusatz vs. Präposition',
          content: `Ein Verbzusatz gehört direkt zu einem Verb:
→ anfangen = an + fangen

Eine Präposition steht vor einem Nomen oder einer Nomengruppe:
→ von Pfeiler
→ zu Pfeiler
→ bis sechs`,
        },
        {
          title: 'Die richtige Zuordnung',
          content: `an → Verbzusatz ✅
→ gehört zu «anfing»

von → Präposition ✅
→ von Pfeiler

zu → Präposition ✅
→ zu Pfeiler

bis → Präposition ✅
→ bis sechs

Darum ist die richtige Lösung:
Verbzusatz: an
Präpositionen: von, zu, bis`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Gehört das Wort fest zum Verb? → Verbzusatz
2️⃣ Steht es vor einem Nomen? → Präposition
3️⃣ «anfangen» merkst du dir als Ganzes`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_VERBEN_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=3',
    topic: 'Grammatik',

    questionText: `Aufgabe 7 (4 Punkte): Verben bestimmen.

«Es konnte einen fertig machen, es konnte einem sogar richtig schwindelig werden, weil man so angestrengt schaute.» [Z. 12]

Bestimme für die Verben:
konnte / machen / werden / schaute

Welche Zuordnung ist richtig?`,

    options: [
      {
        label: 'konnte = Modalverb + Personalform | machen = Vollverb + Infinitiv | werden = Hilfsverb + Infinitiv | schaute = Vollverb + Personalform',
        correct: true,
      },
      {
        label: 'konnte = Vollverb + Infinitiv | machen = Hilfsverb | werden = Partizip | schaute = Modalverb',
        correct: false,
      },
      {
        label: 'konnte = Hilfsverb | machen = Vollverb + Personalform | werden = Modalverb | schaute = Infinitiv',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbarten kurz erklärt',
          content: `Vollverb = trägt die eigentliche Bedeutung
→ machen, schauen

Modalverb = kann, muss, darf, soll, will, mag
→ konnte

Hilfsverb = hilft beim Bilden anderer Formen
→ werden, haben, sein

Infinitiv = Grundform
→ machen, werden

Personalform = konjugierte Form
→ konnte, schaute`,
        },
        {
          title: 'Zuordnung der vier Verben',
          content: `konnte
→ Modalverb ✅
→ Personalform ✅

machen
→ Vollverb ✅
→ Infinitiv ✅

werden
→ Hilfsverb ✅
→ Infinitiv ✅

schaute
→ Vollverb ✅
→ Personalform ✅

Genau so steht es auch in der Lösungstabelle.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Endung prüfen: konjugiert oder Grundform?
2️⃣ Kann das Verb «müssen / können / dürfen ...» sein? → Modalverb
3️⃣ Trägt es die Hauptbedeutung? → Vollverb
4️⃣ Hilft es nur beim Bilden? → Hilfsverb`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_PASSIV_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 8 (2 Punkte): Aktiv ins Passiv setzen.

«Zwei Wochen zuvor hatte ich Ludwig zum ersten Mal gesehen.» [Z. 22]

Setze den Satz ins Passiv.

Welche Lösung ist richtig?`,

    options: [
      {
        label: 'Zwei Wochen zuvor war Ludwig (von mir) zum ersten Mal gesehen worden.',
        correct: true,
      },
      {
        label: 'Zwei Wochen zuvor wurde Ludwig von mir zum ersten Mal gesehen gewesen.',
        correct: false,
      },
      {
        label: 'Ludwig hatte zwei Wochen zuvor von mir zum ersten Mal gesehen worden.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Aktiv → Passiv',
          content: `Beim Passiv wird das Objekt zum neuen Subjekt.

Aktiv:
Ich hatte Ludwig gesehen.

Passiv:
Ludwig war gesehen worden.

Weil der Aktivsatz im Plusquamperfekt steht, braucht das Passiv auch Plusquamperfekt Passiv:
→ war + Partizip II + worden`,
        },
        {
          title: 'Umformung Schritt für Schritt',
          content: `Aktiv:
Ich hatte Ludwig zum ersten Mal gesehen.

1️⃣ Objekt finden:
Ludwig

2️⃣ Neues Subjekt machen:
Ludwig

3️⃣ Verb umformen:
hatte gesehen → war gesehen worden

4️⃣ Täter ergänzen:
von mir (optional)

✅ Ergebnis:
Zwei Wochen zuvor war Ludwig (von mir) zum ersten Mal gesehen worden.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Objekt suchen
2️⃣ Zum neuen Subjekt machen
3️⃣ Tempus beibehalten
4️⃣ Plusquamperfekt Passiv = war + Partizip II + worden`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_PRONOMEN_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 9 (4 Punkte): Pronomen zuordnen.

«Wir hatten die Angst, die man hat, wenn andere etwas Verbotenes tun, aber die Strafe alle treffen wird.» [Z. 41]

Ordne die Pronomen richtig zu:
Wir / die / man / andere / etwas / alle / die

Welche Zuordnung ist vollständig richtig?`,

    options: [
      {
        label: 'Personalpronomen: Wir, man | Artikel: die, die | Indefinitpronomen: andere, etwas, alle | Relativpronomen: die',
        correct: true,
      },
      {
        label: 'Personalpronomen: Wir | Demonstrativpronomen: die | Artikel: man | Indefinitpronomen: andere, alle | Relativpronomen: etwas',
        correct: false,
      },
      {
        label: 'Personalpronomen: Wir, andere | Artikel: die | Indefinitpronomen: man, etwas | Relativpronomen: die, alle',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die Pronomenarten kurz erklärt',
          content: `Personalpronomen:
ich, du, er, sie, es, wir, man

Artikel:
der, die, das vor einem Nomen

Indefinitpronomen:
andere, etwas, alle, manche ...

Relativpronomen:
der, die, das – wenn es einen Relativsatz einleitet`,
        },
        {
          title: 'Zuordnung im Satz',
          content: `Wir → Personalpronomen ✅
die Angst → «die» = Artikel ✅
die man hat → «die» = Relativpronomen ✅
man → Personalpronomen ✅
andere → Indefinitpronomen ✅
etwas → Indefinitpronomen ✅
die Strafe → «die» = Artikel ✅
alle → Indefinitpronomen ✅

Darum lautet die richtige Gesamtzuordnung:
Personalpronomen: Wir, man
Artikel: die, die
Indefinitpronomen: andere, etwas, alle
Relativpronomen: die`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Steht «die» vor einem Nomen? → Artikel
2️⃣ Leitet «die» einen Nebensatz ein? → Relativpronomen
3️⃣ Unbestimmte Wörter wie «etwas», «alle», «andere» → oft Indefinitpronomen`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_SATZBAU_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=4',
    topic: 'Grammatik',

    questionText: `Aufgabe 10 (2 Punkte): Satzbaumuster prüfen.

«Die Klinke an der Tür sprang nach unten und wir wussten sofort, dass der Rektor kommt, weil nur er der Klinke einen solchen Hieb versetzte, dass sie wie erschrocken nach unten sprang.» [Z. 32]

Welches Satzbaumuster ist richtig?`,

    options: [
      {
        label: 'HS-HS-NS-NS-NS',
        correct: true,
      },
      {
        label: 'NS-HS-HS-NS-HS',
        correct: false,
      },
      {
        label: 'HS-NS-NS-HS-NS',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Hauptsatz und Nebensatz erkennen',
          content: `Hauptsatz:
→ Verb meist an 2. Stelle
→ kann alleine stehen

Nebensatz:
→ wird oft mit dass, weil, wenn ... eingeleitet
→ Verb steht meist am Ende`,
        },
        {
          title: 'Satz zerlegen',
          content: `1. Die Klinke an der Tür sprang nach unten
→ Hauptsatz ✅

2. und wir wussten sofort
→ Hauptsatz ✅

3. dass der Rektor kommt
→ Nebensatz ✅

4. weil nur er der Klinke einen solchen Hieb versetzte
→ Nebensatz ✅

5. dass sie wie erschrocken nach unten sprang
→ Nebensatz ✅

→ Muster: HS-HS-NS-NS-NS ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Satz in Teile schneiden
2️⃣ Einleitungswörter suchen: dass, weil ...
3️⃣ Verbposition prüfen
4️⃣ Dann HS / NS notieren`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_SATZART_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=5',
    topic: 'Grammatik',

    questionText: `Aufgabe 11 (2 Punkte): Einfachen Satz herausschreiben.

Er stand ein wenig schief, wie alle, die der Rektor zu uns brachte.
Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.
Ich sah erst jetzt, dass Ludwig tropfte.
Er hatte seine Regenjacke nicht ausgezogen, eine dünne Jacke, wie wir sie alle trugen, mit Kapuze.
Seine war rot. [Z. 45 ff.]

Welcher ist der erste einfache Satz?`,

    options: [
      {
        label: 'Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.',
        correct: true,
      },
      {
        label: 'Er stand ein wenig schief, wie alle, die der Rektor zu uns brachte.',
        correct: false,
      },
      {
        label: 'Ich sah erst jetzt, dass Ludwig tropfte.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Was ist ein einfacher Satz?',
          content: `Ein einfacher Satz hat nur ein Verbzentrum / nur einen Teilsatz.
Sobald ein Nebensatz dazukommt, ist es kein einfacher Satz mehr.

Achte also auf:
→ Relativsätze
→ dass-Sätze
→ mehrere Satzteile mit eigener Verbform`,
        },
        {
          title: 'Prüfung der Sätze',
          content: `«Er stand ein wenig schief, wie alle, die der Rektor zu uns brachte.»
→ nicht einfach, weil ein Relativsatz dabei ist ❌

«Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.»
→ nur ein Satzkern, kein Nebensatz ✅

«Ich sah erst jetzt, dass Ludwig tropfte.»
→ nicht einfach, weil ein dass-Satz dabei ist ❌

Darum ist der erste einfache Satz:
✅ Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Nach Nebensätzen suchen
2️⃣ Hat der Satz nur ein Verbzentrum?
3️⃣ Wenn ja → einfacher Satz
4️⃣ Wenn nein → zusammengesetzter Satz`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_KONJUNKTIONEN_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=5',
    topic: 'Grammatik',

    questionText: `Aufgabe 12 (3 Punkte): Konjunktionen zuordnen.

«Die Klinke an der Tür sprang nach unten, und wir wussten sofort, dass der Rektor kommt, weil nur er der Klinke einen solchen Hieb versetzte, dass sie wie erschrocken nach unten sprang.» [Z. 33]

Ordne die unterstrichenen Wörter richtig zu:
und / dass / weil / an / nur / unten

Welche Zuordnung stimmt?`,

    options: [
      {
        label: 'Beiordnende Konjunktion: und | Unterordnende Konjunktionen: dass, weil | Keine Konjunktionen: an, nur, unten',
        correct: true,
      },
      {
        label: 'Beiordnende Konjunktionen: und, weil | Unterordnende Konjunktion: dass | Keine Konjunktionen: an, nur, unten',
        correct: false,
      },
      {
        label: 'Beiordnende Konjunktion: nur | Unterordnende Konjunktionen: dass, weil, und | Keine Konjunktionen: an, unten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Konjunktionen erkennen',
          content: `Beiordnende Konjunktionen verbinden Gleiches:
→ und, oder, aber

Unterordnende Konjunktionen leiten Nebensätze ein:
→ dass, weil, wenn, obwohl

Andere Wörter wie Präpositionen oder Adverbien sind keine Konjunktionen.`,
        },
        {
          title: 'Zuordnung der Wörter',
          content: `und → beiordnende Konjunktion ✅
dass → unterordnende Konjunktion ✅
weil → unterordnende Konjunktion ✅
an → keine Konjunktion ✅
nur → keine Konjunktion ✅
unten → keine Konjunktion ✅

Das ist genau die Lösung aus dem offiziellen Blatt.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Verbindet das Wort zwei Satzteile? → Konjunktion prüfen
2️⃣ Leitet es einen Nebensatz ein? → unterordnend
3️⃣ Verbindet es Gleiches? → beiordnend
4️⃣ Sonst meist keine Konjunktion`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_WORTARTEN_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=5',
    topic: 'Grammatik',

    questionText: `Aufgabe 13 (3 Punkte): Wortarten bestimmen.

«Ludwig war so gross wie ich.» [Z. 42]

Bestimme die Wortarten der Wörter:
Ludwig / war / so / gross / wie / ich

Welche Zuordnung ist richtig?`,

    options: [
      {
        label: 'Ludwig = Nomen | war = Verb | so = Partikel | gross = Adjektiv | wie = Partikel | ich = Pronomen',
        correct: true,
      },
      {
        label: 'Ludwig = Pronomen | war = Hilfsverb | so = Adjektiv | gross = Nomen | wie = Konjunktion | ich = Nomen',
        correct: false,
      },
      {
        label: 'Ludwig = Nomen | war = Adjektiv | so = Partikel | gross = Verb | wie = Pronomen | ich = Partikel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die fünf Grundwortarten',
          content: `Nomen = Dinge, Personen, Namen
Verb = Tätigkeiten, Vorgänge, Zustände
Adjektiv = beschreibt Eigenschaften
Pronomen = Stellvertreter
Partikel = unveränderliche Wörter wie so, wie, und, nur, doch ...`,
        },
        {
          title: 'Die richtige Zuordnung',
          content: `Ludwig → Nomen ✅
war → Verb ✅
so → Partikel ✅
gross → Adjektiv ✅
wie → Partikel ✅
ich → Pronomen ✅

Genau so steht es in der offiziellen Lösung.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Name / Ding → Nomen
2️⃣ Tun / Sein → Verb
3️⃣ Eigenschaft → Adjektiv
4️⃣ Ersatzwort → Pronomen
5️⃣ Unveränderlich → Partikel`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_WORTARTEN_2',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 14 (4 Punkte): Wie viele Wortarten kommen vor?

Unterscheide nur nach den fünf Grundwortarten.

Satz A:
«Ich weiss nicht, ob das stimmt.» [Z. 20]

Satz B:
«Hoch ist die Brücke, sehr hoch.» [Z. 21]

Welche Lösung ist richtig?`,

    options: [
      {
        label: 'Satz A: 3 Wortarten | Satz B: 5 Wortarten',
        correct: true,
      },
      {
        label: 'Satz A: 4 Wortarten | Satz B: 4 Wortarten',
        correct: false,
      },
      {
        label: 'Satz A: 5 Wortarten | Satz B: 3 Wortarten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 So zählt man Wortarten',
          content: `Du zählst nicht die Wörter, sondern die verschiedenen Wortarten, die im Satz vorkommen.

Beispiel:
Wenn in einem Satz zwei Verben vorkommen, zählt das trotzdem nur als 1 Wortart: Verb.`,
        },
        {
          title: 'Auswertung beider Sätze',
          content: `Satz A:
«Ich weiss nicht, ob das stimmt.»
→ Pronomen: ich, das
→ Verb: weiss, stimmt
→ Partikel: nicht, ob
= 3 Wortarten ✅

Satz B:
«Hoch ist die Brücke, sehr hoch.»
→ Adjektiv: hoch
→ Verb: ist
→ Artikel: die
→ Nomen: Brücke
→ Partikel: sehr
= 5 Wortarten ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Wörter markieren
2️⃣ Wortarten bestimmen
3️⃣ Gleiche Wortarten nur einmal zählen
4️⃣ Am Schluss Anzahl notieren`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_KONJUNKTIV_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 15 (1 Punkt): Konjunktiv II bilden.

«Seine war rot.» [Z. 47]

Übertrage den Satz in den Konjunktiv II.

Welche Form ist richtig?`,

    options: [
      {
        label: 'Seine wäre rot gewesen.',
        correct: true,
      },
      {
        label: 'Seine sei rot gewesen.',
        correct: false,
      },
      {
        label: 'Seine war rot geworden.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Konjunktiv II',
          content: `Der Konjunktiv II drückt etwas Irreales, Gedachtes oder Vorgestelltes aus.

Bei «sein» ist die typische Form:
→ wäre

Wenn sich der Satz auf Vergangenheit bezieht, nimmst du:
→ wäre + Partizip II
→ wäre gewesen`,
        },
        {
          title: 'Die richtige Form',
          content: `Original:
Seine war rot.

Konjunktiv II:
→ wäre rot gewesen

✅ Richtig ist also:
Seine wäre rot gewesen.

Die offizielle Lösung nennt zusätzlich auch:
«Seine würde rot gewesen sein.»
Die Standardlösung ist aber klar:
✅ Seine wäre rot gewesen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Bei «sein» an «wäre» denken
2️⃣ Vergangenheit? → «gewesen» dazunehmen
3️⃣ Ergebnis: wäre gewesen`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────

  {
    id: 'D3_2018_WORTSCHATZ_3',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=6',
    topic: 'Wortschatz',

    questionText: `Aufgabe 16 (2 Punkte): Gemeinsames inhaltliches Merkmal finden.

Teil A:
Brücke, Wolkenkratzer, Stauwehr, Schiff

Teil B:
Himmel, Mount Everest, Regen, Wind

Welche inhaltliche Gemeinsamkeit ist richtig?`,

    options: [
      {
        label: 'A: von Menschen gemacht / künstlich / Zivilisation | B: Natur / nicht von Menschen gemacht',
        correct: true,
      },
      {
        label: 'A: Natur | B: Technik',
        correct: false,
      },
      {
        label: 'A: Tiere | B: Gebäude',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Oberbegriff finden',
          content: `Hier sollst du nicht einzelne Wörter erklären, sondern einen gemeinsamen Oberbegriff finden.

Frage dich:
→ Was haben alle Wörter in der Gruppe gemeinsam?`,
        },
        {
          title: 'Lösung zu A und B',
          content: `Teil A:
Brücke, Wolkenkratzer, Stauwehr, Schiff
→ alle sind von Menschen gemacht
→ künstlich, gebaut, Zivilisation ✅

Teil B:
Himmel, Mount Everest, Regen, Wind
→ gehören zur Natur
→ nicht von Menschen gemacht ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Alle Wörter anschauen
2️⃣ Gemeinsamkeit suchen
3️⃣ Einen kurzen Oberbegriff formulieren
4️⃣ Möglichst allgemein bleiben`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────

  {
    id: 'D3_2018_WORTSCHATZ_4',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=7',
    topic: 'Wortschatz',

    questionText: `Aufgabe 17 (2 Punkte): Sinngemässe Ersetzung.

«… um uns kleinen Geistern auf die Sprünge zu helfen.» [Z. 23]

Welche Ersetzung passt sinngemäss?`,

    options: [
      {
        label: 'nachzuhelfen / zu zeigen, wie man es macht',
        correct: true,
      },
      {
        label: 'gute Manieren zu lehren',
        correct: false,
      },
      {
        label: 'im Sportunterricht zu zeigen, was Sache ist',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Redewendung verstehen',
          content: `«jemandem auf die Sprünge helfen» ist eine Redewendung.
Sie bedeutet:
→ jemandem weiterhelfen
→ jemandem einen Anstoss geben
→ jemandem zeigen, wie es geht`,
        },
        {
          title: 'Die passende Ersetzung',
          content: `«nachzuhelfen» passt gut, weil Ludwig der Klasse helfen oder sie voranbringen soll. ✅
Auch «zu zeigen, wie man es macht» trifft die Bedeutung gut. ✅

Nicht passend sind:
→ «gute Manieren lehren»
→ «im Sportunterricht zeigen, was Sache ist»

Denn die Redewendung meint allgemein helfen, nicht erziehen oder Sport machen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Redewendung als Ganzes lesen
2️⃣ Nicht wörtlich verstehen
3️⃣ Nach der übertragenen Bedeutung suchen
4️⃣ Passende Alltagssprache einsetzen`,
    },
  },

  // ── AUFGABE 18 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_SATZGLIEDER_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 18 (3 Punkte): Satzglieder bestimmen.

«Nach der Schule waren wir zu Ludwig nach Hause gefahren.» [Z. 1]

Bestimme die Satzglieder:
– Nach der Schule
– wir
– zu Ludwig nach Hause

Welche Zuordnung stimmt?`,

    options: [
      {
        label: 'Nach der Schule = Präpositionalgefüge | wir = Subjekt (Nominalgruppe im Nominativ) | zu Ludwig nach Hause = Präpositionalgefüge',
        correct: true,
      },
      {
        label: 'Nach der Schule = Subjekt | wir = Präpositionalgefüge | zu Ludwig nach Hause = Akkusativobjekt',
        correct: false,
      },
      {
        label: 'Nach der Schule = Adjektivgruppe | wir = Objekt | zu Ludwig nach Hause = Subjekt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder erkennen',
          content: `Ein Satzglied ist eine Einheit im Satz, die zusammengehört.

Typische Satzglieder:
→ Subjekt
→ Objekt
→ Präpositionalgefüge / Präpositionalgruppe
→ Adverbiale Bestimmungen`,
        },
        {
          title: 'Zuordnung der drei Teile',
          content: `Nach der Schule
→ beginnt mit der Präposition «nach» → Präpositionalgefüge ✅

wir
→ fragt man: Wer fuhr?
→ Antwort: wir → Subjekt / Nominalgruppe im Nominativ ✅

zu Ludwig nach Hause
→ enthält die Präposition «zu» → Präpositionalgefüge ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Nach Präpositionen suchen
2️⃣ «Wer oder was?» fragen → Subjekt
3️⃣ Gruppen zusammenlassen
4️⃣ Nicht einzelne Wörter zerreissen`,
    },
  },

  // ── AUFGABE 19 ─────────────────────────────────────────────

  {
    id: 'D3_2018_GRAMMATIK_SUBJEKT_OBJEKT_1',
    year: 2018,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 19 (6 Punkte): Subjekte und Akkusativobjekte bestimmen.

«Wir lasen ein Gedicht, aber ich war nicht konzentriert, sondern betrachtete den Regen, den stärksten in diesem Sommer. Breit rann das Wasser die vier Fenster hinunter, man sah keine Tropfen, man sah vier Vorhänge aus Wasser, dahinter einen grünen Schimmer, die Kastanien im Hof.» [Z. 29 ff.]

Welche Auflistung ist richtig?`,

    options: [
      {
        label: 'Subjekte: Wir, ich, das Wasser, man, man | Akkusativobjekte: ein Gedicht, den Regen, die vier Fenster, keine Tropfen, vier Vorhänge aus Wasser, einen grünen Schimmer, die Kastanien im Hof',
        correct: true,
      },
      {
        label: 'Subjekte: Wir, den Regen, das Wasser | Akkusativobjekte: ich, man, man, ein Gedicht',
        correct: false,
      },
      {
        label: 'Subjekte: Wir, ich, man | Akkusativobjekte: den Regen, keine Tropfen, die Kastanien',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Subjekt und Akkusativobjekt unterscheiden',
          content: `Subjekt:
→ Wer oder was tut etwas?

Akkusativobjekt:
→ Wen oder was?

Du musst bei jedem Verb neu fragen.`,
        },
        {
          title: 'Lösung Schritt für Schritt',
          content: `Subjekte:
→ Wir lasen
→ ich war / betrachtete
→ das Wasser rann
→ man sah
→ man sah

Also:
✅ Wir, ich, das Wasser, man, man

Akkusativobjekte:
→ lasen was? → ein Gedicht
→ betrachtete was? → den Regen
→ rann was hinunter? → die vier Fenster
→ sah was? → keine Tropfen
→ sah was? → vier Vorhänge aus Wasser
→ sah was? → einen grünen Schimmer
→ sah was? → die Kastanien im Hof

✅ Das ist die richtige vollständige Lösung.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button, um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106600/AP18%20GMS3%20D%20L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣ Jedes Verb einzeln anschauen
2️⃣ «Wer oder was?» → Subjekt
3️⃣ «Wen oder was?» → Akkusativobjekt
4️⃣ Bei längeren Nomengruppen alles vollständig mitschreiben`,
    },
  },

];