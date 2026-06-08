// app/lib/gms2/deutsch/2017.js
// Aufnahmeprüfung 2017 – Deutsch GMS 2 (Thurgauische Kantonsschulen, MAR 2)
// Teil 1: Sprachprüfung — Textgrundlage: «Träume: Kino im Kopf» (GEOlino, Nr. 03, März 2016)
// Teil 2: Schreibaufgabe — 4 Themen zur Wahl

export const questions2017 = [

  // ════════════════════════════════════════════════════════════
  // TEIL 1 – SPRACHPRÜFUNG
  // ════════════════════════════════════════════════════════════

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D2_2017_TEXTVERST_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Textverständnis',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=3',

    questionText: `Aufgabe 1 (5 Punkte): Sind die folgenden Aussagen richtig, falsch oder kommen sie im Text gar nicht vor? Kreuze an.

1. Die mittelalterliche Vorstellung darüber, wieso Menschen Albträume haben, wird von heutigen Traumexperten widerlegt.
2. Stefan Klein ist Traumdeuter von Beruf.
3. Schlechte Träume ängstigen uns oft mehr als jeder Horrorfilm, weil sie eine Mischung aus eigener Erfahrung und Fantasie sind.
4. 80% all unserer Träume sind unangenehm.
5. Wenn sich während eines Traums unsere Augäpfel schnell bewegen, schlägt auch unser Herz schneller.`,

    options: [
      {
        label: '1: richtig | 2: falsch | 3: richtig | 4: falsch | 5: kommt nicht vor',
        correct: true,
      },
      {
        label: '1: richtig | 2: falsch | 3: richtig | 4: richtig | 5: falsch',
        correct: false,
      },
      {
        label: '1: falsch | 2: falsch | 3: richtig | 4: falsch | 5: kommt nicht vor',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Auflösung aller 5 Aussagen',
          content: `1. ✅ richtig – Der Text erklärt, dass heute das Gehirn (nicht Elfen) für Träume verantwortlich ist (Z. 11–12). Die mittelalterliche Vorstellung (Elfen = Alben) wird durch die heutige Wissenschaft ersetzt/widerlegt.

2. ❌ falsch – Stefan Klein ist «Wissenschafts-Journalist» und hat ein Buch über Träume geschrieben (Z. 14–15) → er ist KEIN Traumdeuter, sondern Journalist/Autor.

3. ✅ richtig – «Deshalb ängstigen uns schlechte Träume oft mehr als jeder Horrorfilm» (Z. 21) → weil die Fantasie «aus allem, was wir irgendwann einmal gesehen oder erlebt haben» (Z. 19) mischt → eigene Erfahrung + Fantasie.

4. ❌ falsch – «80 Prozent der Träume, an die wir uns erinnern, unangenehm» (Z. 22–23) → nur die ERINNERTEN Träume zu 80% → nicht alle Träume!

5. 🔲 kommt im Text nicht vor – Der Text erwähnt REM (schnelle Augenbewegungen) und dass die Augäpfel aktiv sind (Z. 32–34), aber über Herzschlag im Schlaf steht nichts.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Nr. 2: Traumdeuter ≠ Wissenschafts-Journalist → falsch!
2️⃣  Nr. 4: «80% der Träume, an die wir uns erinnern» ≠ alle Träume → falsch!
3️⃣  Nr. 5: Herzschlag im REM-Schlaf → steht nicht im Text → kommt nicht vor
4️⃣  Je 1 Punkt Abzug für fehlende oder falsche Lösung`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D2_2017_TEXTVERST_2',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Textverständnis',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=3',

    questionText: `Aufgabe 2 (8 Punkte): Beantworte die folgenden Fragen.

a) Für welche zwei Aspekte sind die Hirnregionen zuständig, die im Schlaf ruhen?
b) Welche zwei Muskeln (oder Organe) ruhen in keiner Schlafphase? Wieso ruhen sie nicht?
c) In welcher Schlafphase geht es in unserem Kopfkino besonders lebhaft zu?
d) Welche Vorstellung über Träume hatten die Menschen in der Antike?
e) Aufgrund welcher Feststellung kommt Stefan Klein zum Schluss, dass wir gut ein Drittel unseres Lebens im Traum verbringen?
f) «Genau das passiert im Schlaf.» (Z. 43) – Was ist mit dieser Aussage gemeint?
g) Aufgrund welcher Erkenntnis kommen Fachleute zum Schluss, dass wir im Schlaf lernen?`,

    options: [
      {
        label: 'a: Vernunft und Logik | b: Herz und Atemmuskulatur, weil lebenswichtig | c: REM-Phase | d: Götter vermitteln Menschen Botschaften | e: Schlafen heisst fast immer träumen | f: Das Hirn verarbeitet Erlebnisse des Tages / wird wie unordentliche Küche aufgeräumt | g: Menschen spielen im Traum schwierige Aufgaben durch und haben hinterher bessere Testergebnisse',
        correct: true,
      },
      {
        label: 'a: Fantasie und Logik | b: Gehirn und Herz | c: Tiefschlafphase | d: Träume sind zufällig | e: Wir erinnern uns an Träume | f: Das Gehirn ruht im Schlaf | g: Wir lesen im Schlaf',
        correct: false,
      },
      {
        label: 'a: Vernunft und Fantasie | b: Herz und Lunge | c: REM-Phase | d: Träume zeigen die Zukunft | e: Ein Drittel des Lebens schläft man | f: Träume sind wie Filme | g: Schlaf verbessert Gedächtnis',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Antworten aus dem Text',
          content: `a) Vernunft und Logik (Z. 12–13: «Die Regionen, die für Vernunft und Logik zuständig sind, arbeiten im Schlaf nicht»)

b) Herz und Atemmuskulatur (Z. 31–32: «nur lebenswichtige wie Herz und Atemmuskulatur arbeiten weiter»)
→ Warum: Sie sind lebenswichtig!

c) In der REM-Phase / Rapid Eye Movement – Phase (Z. 34–35: «In dieser Schlafphase geht es in unserem Kopfkino besonders lebhaft zu»)

d) Die Götter vermittelten den Menschen über Träume ihre Botschaften (Z. 39–40)

e) Schlafen heisst fast immer träumen → «Schlafen heisst fast immer träumen» (Z. 36) → deshalb verbringen wir ein Drittel unseres Lebens im Traum

f) Das Gehirn wird wie eine unordentliche Küche aufgeräumt / verarbeitet die Erlebnisse des Tages (Z. 41–44)

g) Viele Menschen spielen schwierige Aufgaben im Traum durch und haben hinterher bessere Testergebnisse (Z. 46–48)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Antworten mit Textstelle belegen → immer stichwortartig und präzise
2️⃣  b): WIESO auch beantworten! → lebenswichtig
3️⃣  f): «genau das» = das Aufräumen/Verarbeiten der Erlebnisse
4️⃣  Je ½–1 Punkt Abzug für nicht sinngemässe oder unvollständige Antwort`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D2_2017_TEXTVERST_3',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Textverständnis',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 3 (2 Punkte): Schreibe passende Erklärungen in ganzen Sätzen.

a) Erkläre, wieso wir für schlechte Träume die Bezeichnung «Albträume» haben.
b) Erkläre, wieso uns schlechte Träume eher in Erinnerung bleiben als schöne Träume.`,

    options: [
      {
        label: 'a: Im Mittelalter nannte man Elfen Alben. Man glaubte, fiese Elfen seien für schlechte Träume verantwortlich. | b: Aus schönen Träumen erwachen wir nicht; wir schlafen weiter und vergessen sie. Aus schlechten Träumen erwachen wir oft und das Gefühl bleibt in Erinnerung.',
        correct: true,
      },
      {
        label: 'a: «Alb» bedeutet auf Latein «schlecht». | b: Schlechte Träume sind aufregender als gute.',
        correct: false,
      },
      {
        label: 'a: Albträume kommen von Albino-Tieren. | b: Unser Gehirn speichert Schlechtes besser.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Erklärungen aus dem Text',
          content: `a) «Elfen nannte man damals Alben, daher kommt das Wort Albtraum» (Z. 10–11) + «Im Mittelalter glaubten die Menschen, schlechte Träume wie dieser würden ihnen von fiesen Elfen eingebrockt» (Z. 9–10)
→ ✅ Im Mittelalter nannte man Elfen «Alben». Man glaubte, diese fiesen Elfen seien für schlechte Träume verantwortlich → daher «Albtraum».

b) «Aber wenn wir einen Traum haben, in dem wir glücklich sind, schlafen wir einfach weiter – und am nächsten Morgen ist er vergessen» (Z. 26–28) + «Das liegt aber nur daran, dass wir aus schweren Träumen öfter erwachen. Und wenn wir voll Angst oder Ärger aus dem Schlaf hochfahren, bleiben uns diese Gefühle natürlich im Gedächtnis.» (Z. 23–25)
→ ✅ Schöne Träume werden vergessen, weil wir dabei weiterschlafen. Schlechte Träume wecken uns auf und das Angstgefühl bleibt in Erinnerung.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  GANZER SATZ: «Im Mittelalter nannte man …» → vollständige Erklärung
2️⃣  a): ZWEI Schritte: Name «Alben» + Grund (fiese Elfen)
3️⃣  b): ZWEI Seiten: schöne Träume vergessen + schlechte bleiben wegen Erwachen in Erinnerung
4️⃣  Je ½–1 Punkt Abzug für unvollständige Antwort`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D2_2017_WORTSCHATZ_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 4 (5 Punkte): Synonyme finden.

Ersetze die folgenden Ausdrücke durch ein bedeutungsgleiches Wort. Der Sinn, den die Wörter im Text haben, muss erhalten bleiben.

– Experte (Z. 14)
– Nickerchen (Z. 17)
– Prozent (Z. 22)
– Phase (Z. 35)
– passieren (Z. 43)`,

    options: [
      {
        label: 'Experte: Fachmann / Sachverständiger / Spezialist | Nickerchen: Schläfchen / kurzer Schlaf | Prozent: Hundertstel / hundertster Teil | Phase: Zeitdauer / Periode / Abschnitt | passieren: sich ereignen / geschehen',
        correct: true,
      },
      {
        label: 'Experte: Lehrer / Forscher | Nickerchen: Pause / Erholung | Prozent: Teil / Anteil | Phase: Zeit / Moment | passieren: vorkommen / existieren',
        correct: false,
      },
      {
        label: 'Experte: Fachmann | Nickerchen: Traum | Prozent: Menge | Phase: Schlaf | passieren: stattfinden',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Synonyme im Kontext',
          content: `«Experte» (Z. 14) → jemand mit Fachkenntnissen:
→ ✅ Fachmann, Fachperson, Sachverständiger, Kenner, Profi, Spezialist

«Nickerchen» (Z. 17) → kurzer, leichter Schlaf:
→ ✅ Schläfchen, leichter Schlaf, kurzer Schlaf
→ ❌ Pause → kein Schlaf

«Prozent» (Z. 22) → mathematischer Begriff:
→ ✅ Hundertstel, hundertster Teil
→ ❌ Teil/Anteil → zu unspezifisch, «Prozent» ist mathematisch präzise

«Phase» (Z. 35) → Abschnitt / Zeitraum:
→ ✅ Zeitdauer, Periode, Zeit, Dauer, Abschnitt
→ ❌ Schlaf → nicht bedeutungsgleich

«passieren» (Z. 43) → sich ereignen:
→ ✅ sich ereignen, geschehen
→ ❌ vorkommen → akzeptabel, aber weniger präzise`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Kontext prüfen: Passt das Ersatzwort in den Satz?
2️⃣  «Nickerchen» → Verkleinerungsform von «Nicken» → kurzer Schlaf ✅
3️⃣  «Prozent» → lat. «per centum» = pro Hundert → Hundertstel ✅
4️⃣  Je 1 Punkt pro korrekter Lösung; ½ Punkt Abzug für Rechtschreibfehler`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D2_2017_WORTSCHATZ_2',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 5 (2 Punkte): Wortfamilie «Traum».

Notiere vier Adjektive, die zur Wortfamilie «Traum» gehören.

a) _______________  b) _______________
c) _______________  d) _______________`,

    options: [
      {
        label: 'traumhaft | verträumt | träumerisch | traumlos | träumend | geträumt',
        correct: true,
      },
      {
        label: 'traumatisch | träumen | Traumreise | Traumbild',
        correct: false,
      },
      {
        label: 'traumhaft | glücklich | schön | wunderbar',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Adjektive aus der Wortfamilie «Traum»',
          content: `Nur ADJEKTIVE (nicht Nomen oder Verben!):
→ ✅ traumhaft (Traum + -haft)
→ ✅ verträumt (ver- + träumt → Partizip II als Adjektiv)
→ ✅ träumerisch (Träumer + -isch)
→ ✅ traumlos (Traum + -los)
→ ✅ träumend (träumen + -d → Partizip I als Adjektiv)
→ ✅ geträumt (ge- + träumt → Partizip II als Adjektiv)

⚠️ «traumatisch» → kommt von «Trauma» (Wunde), nicht von «Traum» → NICHT Wortfamilie «Traum»!
⚠️ «träumen» = Verb → kein Adjektiv
⚠️ «Traumreise», «Traumbild» = Nomen → keine Adjektive`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Nur Adjektive zählen: -haft, -isch, -los, -end, Partizipien
2️⃣  «traumatisch» ≠ Wortfamilie «Traum» → Falle!
3️⃣  Partizipien als Adjektive: träumend, geträumt, verträumt ✅
4️⃣  Je ½ Punkt pro korrekter Lösung`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D2_2017_WORTSCHATZ_3',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 6 (4 Punkte): Wortschatz 2 – Definitionen.

Sind die folgenden Definitionen richtig oder falsch? Kreuze an.

«schlurfen» (Z. 5):
– geräuschvoll und schleppend gehen
– auf einem Bein hüpfen
– auf Zehenspitzen gehen
– auf allen vieren kriechen

«zum Sprung ansetzen» (Z. 7):
– sich darauf vorbereiten, gleich abzuspringen
– Anlauf holen und mit einer Drehung möglichst weit springen
– sich setzen, um sich auf den Absprung zu konzentrieren
– im Begriff sein, jemanden mit einem Satz anzugreifen

«sturmfreie Bude haben» (Z. 18):
– die Möglichkeit haben, ungehindert Besuch zu empfangen
– wie ein Wirbelwind zu Hause herumtanzen
– als einziger Bewohner eines Hauses daheim sein
– ein Haus besitzen, das starken Windstössen trotzen kann`,

    options: [
      {
        label: 'schlurfen: R/F/F/F | zum Sprung ansetzen: R/F/F/R | sturmfreie Bude: R/F/R/F',
        correct: true,
      },
      {
        label: 'schlurfen: R/F/F/F | zum Sprung ansetzen: R/F/F/F | sturmfreie Bude: R/F/R/F',
        correct: false,
      },
      {
        label: 'schlurfen: R/F/F/F | zum Sprung ansetzen: R/R/F/R | sturmfreie Bude: R/F/F/F',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Definitionen prüfen',
          content: `«schlurfen»:
→ ✅ richtig: geräuschvoll und schleppend gehen (Füsse schleifen am Boden)
→ ❌ falsch: auf einem Bein hüpfen
→ ❌ falsch: auf Zehenspitzen gehen
→ ❌ falsch: auf allen vieren kriechen

«zum Sprung ansetzen»:
→ ✅ richtig: sich darauf vorbereiten, gleich abzuspringen
→ ❌ falsch: Anlauf holen und mit Drehung springen (= turnerischer Sprung)
→ ❌ falsch: sich setzen, um sich zu konzentrieren
→ ✅ richtig: im Begriff sein, jemanden mit einem Satz anzugreifen (übertragene Bedeutung: z.B. Tier/Monster bereitet Angriff vor)

«sturmfreie Bude haben»:
→ ✅ richtig: die Möglichkeit haben, ungehindert Besuch zu empfangen (= Eltern weg, man kann Freunde einladen)
→ ❌ falsch: wie ein Wirbelwind herumtanzen
→ ✅ richtig: als einziger Bewohner daheim sein
→ ❌ falsch: ein Haus das Windstössen trotzt (das wäre wörtlich, nicht idiomatisch)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «schlurfen» = Füsse schleifen, geräuschvoll → 1 richtige Definition
2️⃣  «zum Sprung ansetzen» = vorbereiten ODER (übertragen) angreifen wollen → 2 richtige
3️⃣  «sturmfreie Bude» = Eltern weg, man ist allein/kann einladen → 2 richtige
4️⃣  Je ½ Punkt Abzug pro falscher Antwort`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_VERBZUSATZ_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 7 (4 Punkte): Verben mit Verbzusatz finden und im Infinitiv notieren.

Lies den folgenden Text und notiere alle Verben mit Verbzusatz im Kasten. Notiere sie im Infinitiv.

«Drrrring, der Wecker klingelt. Du kletterst aus dem Bett, schlurfst ins Bad und knipst Licht an. Doch was ist das? Auf dem Klodeckel hockt – ein Monster! Gross, grau, gruselig, mit langen, spitzen Zähnen. Es knurrt, setzt zum Sprung an – da schlägst du die Augen auf. So ein Glück, alles nur geträumt!
Die Logik mixt aus allem, was wir irgendwann einmal gesehen oder erlebt haben, neue Bilder und Geschichten zusammen. Die Hirnteile, die zuständig sind für Gefühle, arbeiten dabei auf Hochtouren.»`,

    options: [
      { label: 'anknipsen | ansetzen | aufschlagen | zusammenmixen', correct: true },
      { label: 'anknipsen | ansetzen | aufschlagen | zusammenmixen | klingeln', correct: false },
      { label: 'anknipsen | ansetzen | aufschlagen | zusammenmixen | hochtouren', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verben mit Verbzusatz',
          content: `Ein Verbzusatz = abtrennbares Präfix (an-, auf-, zusammen-, etc.)

«knipst … an» → anknipsen ✅ (Verbzusatz: an-)
«setzt … an» → ansetzen ✅ (Verbzusatz: an-)
«schlägst … auf» → aufschlagen ✅ (Verbzusatz: auf-)
«mixt … zusammen» → zusammenmixen ✅ (Verbzusatz: zusammen-)

⚠️ «klingelt» = kein Verbzusatz (klingeln ist einteilig)
⚠️ «auf Hochtouren» = keine Verbform, sondern Nomengruppe
⚠️ «erlebt» = Partizip II von «erleben» → kein trennbarer Verbzusatz (er- = Präfix, nicht abtrennbar)
⚠️ «gesehen» = «sehen» ohne Verbzusatz`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verbzusatz = abtrennbares Präfix: an-, auf-, zusammen-, hinein-, weg-, etc.
2️⃣  Erkennbar: Verbzusatz steht am Satzende getrennt vom Stamm
3️⃣  «er-», «be-», «ver-» = NICHT abtrennbar → kein Verbzusatz
4️⃣  Im Infinitiv aufschreiben: anknipsen, ansetzen, aufschlagen, zusammenmixen
5️⃣  Je 1 Punkt Abzug bei fehlender/falscher Lösung oder Getrenntschreibung`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_AKTIV_PASSIV_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 8 (7 Punkte): Zeitform und Aktiv/Passiv bestimmen.

Bestimme die Zeitform der Verben in den folgenden Sätzen (keine Abkürzungen). Notiere, ob die Sätze im «Aktiv» (A) oder «Passiv» (P) stehen.

a) Über Träume wird schon seit Langem nachgedacht.
b) Als ich aus einem schönen Traum geweckt wurde,
c) in dem mir ein alter Freund begegnet war,
d) ist mir die Bedeutung unserer Freundschaft klar geworden.
e) Mein Oberstübchen wird mal wieder aufgeräumt werden.
f) Das Kind wird einen grässlichen Traum gehabt haben.
g) Das verängstigte Kind wird dies verarbeiten müssen.`,

    options: [
      {
        label: 'a: Präsens/P | b: Präteritum/P | c: Plusquamperfekt/A | d: Perfekt/A | e: Futur 1/P | f: Futur 2/A | g: Futur 1/A',
        correct: true,
      },
      {
        label: 'a: Präsens/P | b: Perfekt/P | c: Präteritum/A | d: Perfekt/A | e: Futur 1/P | f: Futur 2/A | g: Futur 1/A',
        correct: false,
      },
      {
        label: 'a: Präsens/P | b: Präteritum/P | c: Plusquamperfekt/A | d: Perfekt/A | e: Futur 2/P | f: Futur 2/A | g: Futur 1/P',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle 7 Sätze analysieren',
          content: `a) «wird … nachgedacht» → Präsens Passiv (wird + PII) → Präsens | P ✅

b) «geweckt wurde» → Präteritum Passiv (wurde + PII) → Präteritum | P ✅

c) «begegnet war» → Plusquamperfekt Aktiv (war + PII von «begegnen»)
→ «begegnen» ist ein intransitives Verb, das Perfekt mit «sein» bildet
→ Plusquamperfekt | A ✅

d) «klar geworden ist» / «ist … klar geworden» → Perfekt Aktiv (ist + PII von «werden»)
→ hier: Zustandsveränderung mit «werden» → kein Passiv!
→ Perfekt | A ✅

e) «wird … aufgeräumt werden» → Futur 1 Passiv (wird + PII + werden)
→ Futur 1 | P ✅

f) «wird … gehabt haben» → Futur 2 Aktiv (wird + PII + haben)
→ Futur 2 | A ✅

g) «wird … verarbeiten müssen» → Futur 1 Aktiv (wird + Infinitiv + Modalverb)
→ Futur 1 | A ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Passiv: werden/sein + PII + «worden» → a, b, e
2️⃣  c) «begegnet war» = Plusquamperfekt Aktiv (begegnen → ist mit «sein» → war begegnet)
3️⃣  d) «klar geworden ist» = Perfekt (Zustandsveränderung mit werden = Aktiv, kein Passiv!)
4️⃣  Futur 2: wird + PII + haben/sein → f
5️⃣  Je 1 Punkt Abzug für falsche/unvollständige Lösung`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_ZEITFORMEN_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 9 (5 Punkte): Zeitformen bilden.

Setze die folgenden Sätze in die gewünschte Zeitform:

a) Nachts erleben wir viel Schönes. → Perfekt:
b) Die Küche wird aufgeräumt. → Futur 1:
c) Die Menschen glaubten diesen Spuk. → Futur 2:
d) Dieses Ereignis wird mich im Traum verfolgen. → Präteritum:
e) Du wirst diesen Traum nicht vergessen. → Plusquamperfekt:`,

    options: [
      {
        label: 'a: Nachts haben wir viel Schönes erlebt. | b: Die Küche wird aufgeräumt werden. | c: Die Menschen werden diesen Spuk geglaubt haben. | d: Dieses Ereignis verfolgte mich im Traum. | e: Du hattest diesen Traum nicht vergessen.',
        correct: true,
      },
      {
        label: 'a: Nachts haben wir viel Schönes erlebt. | b: Die Küche wird aufgeräumt. | c: Die Menschen werden diesen Spuk glauben. | d: Dieses Ereignis verfolgte mich im Traum. | e: Du hattest diesen Traum nicht vergessen.',
        correct: false,
      },
      {
        label: 'a: Nachts erlebten wir viel Schönes. | b: Die Küche wird aufgeräumt werden. | c: Die Menschen werden diesen Spuk geglaubt haben. | d: Dieses Ereignis hat mich verfolgt. | e: Du hattest diesen Traum nicht vergessen.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zeitformen bilden',
          content: `a) «Nachts erleben wir viel Schönes.» → Perfekt:
→ haben + PII: «erlebt»
→ ✅ Nachts haben wir viel Schönes erlebt.

b) «Die Küche wird aufgeräumt.» (Präsens Passiv) → Futur 1:
→ Futur 1 Passiv: wird + PII + werden
→ ✅ Die Küche wird aufgeräumt werden.

c) «Die Menschen glaubten diesen Spuk.» (Präteritum Aktiv) → Futur 2:
→ Futur 2 Aktiv: werden + PII + haben
→ «geglaubt haben» → «werden … geglaubt haben»
→ ✅ Die Menschen werden diesen Spuk geglaubt haben.

d) «Dieses Ereignis wird mich im Traum verfolgen.» (Futur 1) → Präteritum:
→ Präteritum Aktiv: «verfolgte»
→ ✅ Dieses Ereignis verfolgte mich im Traum.

e) «Du wirst diesen Traum nicht vergessen.» (Futur 1) → Plusquamperfekt:
→ Plusquamperfekt Aktiv: hattest + PII (vergessen = PII von «vergessen», unregelmässig: glatt = PII)
→ ✅ Du hattest diesen Traum nicht vergessen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Futur 1 Passiv: wird + PII + «werden» (b)
2️⃣  Futur 2 Aktiv: werden + PII + haben/sein (c)
3️⃣  Plusquamperfekt: hatten/waren + PII (e)
4️⃣  «vergessen» → PII = «vergessen» (starkes Verb, gleichlautend!) ✅
5️⃣  Je 1 Punkt pro korrekt geschriebener Verbform`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_INFINITIVE_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=7',

    questionText: `Aufgabe 10 (4 Punkte): Alle vier Infinitive finden.

Suche im folgenden Text alle vier Infinitive und notiere sie im Kasten.

«"Wir müssen träumen, weil unser Gehirn so kompliziert ist. Nach einem ereignisreichen Tag gleicht es einer unordentlichen Küche, die wir aufräumen müssen." Genau das passiert im Schlaf. Die Hirnzellen verarbeiten die Erlebnisse des Tages. Und dabei lernen wir sogar. "Träume können mit einem Computerspiel verglichen werden, in dem wir für unser waches Leben trainieren." Auch deshalb empfehlen uns Fachleute, vor einer Prüfung gut zu schlafen: Labortests beweisen, dass viele Menschen schwierige Aufgaben im Traum durchspielen – und hinterher bessere Testergebnisse haben.»`,

    options: [
      { label: 'träumen | aufräumen | werden | schlafen', correct: true },
      { label: 'träumen | aufräumen | werden | schlafen | trainieren', correct: false },
      { label: 'träumen | aufräumen | verglichen | schlafen', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Infinitive finden',
          content: `Infinitiv = Grundform des Verbs (ohne Konjugation, steht nach Modalverb oder «zu»):

«müssen träumen» → träumen ✅ (nach Modalverb «müssen»)
«aufräumen müssen» → aufräumen ✅ (nach Modalverb «müssen», trennbares Verb!)
«verglichen werden» → werden ✅ (Passiv-Infinitiv: werden nach «können»)
«zu schlafen» → schlafen ✅ (Infinitiv mit «zu» nach «empfehlen»)

⚠️ «trainieren» = konjugiert («wir trainieren») → kein Infinitiv!
⚠️ «verglichen» = Partizip II → kein Infinitiv!
⚠️ «müssen» = Modalverb in Personalform → kein «nackter» Infinitiv hier
⚠️ Die Aufgabe fragt nach genau 4 Infinitiven.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Infinitiv = nach Modalverb ODER nach «zu»: träumen, aufräumen, werden, schlafen
2️⃣  «trainieren» = finit (wir trainieren) → kein Infinitiv!
3️⃣  «aufräumen» = trennbar → trotzdem ein Infinitiv, zusammenschreiben!
4️⃣  Je 1 Punkt Abzug für falsche/fehlende Lösung`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_WORTARTEN_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=7',

    questionText: `Aufgabe 11 (7 Punkte): Wortarten bestimmen.

Bestimme die Wortarten der im Text markierten Wörter. Verwende die vollständigen, möglichst genauen Fachbegriffe.

«Während (1) die Logik also ein Nickerchen macht, hat die Fantasie in unserem Oberstübchen sturmfreie Bude: Sie mixt aus (2) allem (3), was wir irgendwann einmal gesehen oder erlebt haben (4), neue Bilder und Geschichten zusammen, die wie Filme vor unserem inneren Auge ablaufen. Die Hirnteile, die für Gefühle zuständig sind (5), arbeiten dabei auf Hochtouren. Deshalb ängstigen uns schlechte Träume oft mehr als jeder Horrorfilm – und bleiben uns hartnäckig im Kopf. Wir müssen (6) träumen, weil unser (7) Gehirn so kompliziert ist.»

1: während / 2: aus / 3: allem / 4: haben / 5: sind / 6: müssen / 7: unser`,

    options: [
      {
        label: '1: Konjunktion | 2: Präposition | 3: Indefinitpronomen | 4: Hilfsverb | 5: (Voll-)Verb | 6: Modalverb | 7: Possessivpronomen',
        correct: true,
      },
      {
        label: '1: Präposition | 2: Präposition | 3: Indefinitpronomen | 4: Hilfsverb | 5: Hilfsverb | 6: Modalverb | 7: Possessivpronomen',
        correct: false,
      },
      {
        label: '1: Konjunktion | 2: Partikel | 3: Pronomen | 4: Vollverb | 5: (Voll-)Verb | 6: Modalverb | 7: Personalpronomen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle 7 Wörter analysieren',
          content: `1. «Während» → «Während die Logik … macht» → leitet Nebensatz ein → Konjunktion ✅
⚠️ Hier steht «während» VOR einem SATZ → Konjunktion (nicht Präposition!)

2. «aus» → «aus allem» → steht VOR Nomengruppe, regiert Dativ → Präposition ✅

3. «allem» → «aus allem, was wir … erlebt haben» → unbestimmte Gesamtheit, steht allein → Indefinitpronomen ✅

4. «haben» → «erlebt haben» → bildet zusammen mit «erlebt» das Perfekt → Hilfsverb ✅

5. «sind» → «zuständig sind» → ist hier VOLLVERB (nicht Hilfsverb!), da es mit «zuständig» ein Prädikativum bildet
→ ✅ (Voll-)Verb

6. «müssen» → «müssen träumen» → drückt Notwendigkeit aus → Modalverb ✅

7. «unser» → «unser Gehirn» → zeigt Zugehörigkeit, steht vor Nomen → Possessivpronomen ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «während» + SATZ = Konjunktion; «während» + Nomengruppe = Präposition
2️⃣  «allem» allein stehend = Indefinitpronomen (nicht Artikel!)
3️⃣  «haben» als Hilfsverb im Perfekt → Hilfsverb ✅
4️⃣  «sind» + Adjektiv (zuständig) = Vollverb (keine Hilfsverbfunktion)
5️⃣  Je 1 Punkt pro korrekter Lösung`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_SATZGLIEDER_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=7',

    questionText: `Aufgabe 12 (3 Punkte): Satzglieder mit Senkrechtstrichen trennen.

Trenne in den folgenden zwei Sätzen die Satzglieder mit Senkrechtstrichen.

Satz 1: «In manchen Schlafphasen arbeiten nur lebenswichtige Muskeln wie Herz und Atemmuskulatur weiter.»

Satz 2: «Nach einem langen, ereignisreichen Tag gleicht unser Hirn einer unordentlichen Küche.»`,

    options: [
      {
        label: 'S1: In manchen Schlafphasen / arbeiten / nur lebenswichtige Muskeln wie Herz und Atemmuskulatur / weiter. | S2: Nach einem langen, ereignisreichen Tag / gleicht / unser Hirn / einer unordentlichen Küche.',
        correct: true,
      },
      {
        label: 'S1: In manchen Schlafphasen / arbeiten / nur / lebenswichtige Muskeln / wie Herz / und Atemmuskulatur / weiter. | S2: Nach einem langen / ereignisreichen Tag / gleicht / unser Hirn / einer / unordentlichen Küche.',
        correct: false,
      },
      {
        label: 'S1: In manchen Schlafphasen arbeiten / nur lebenswichtige Muskeln wie Herz und Atemmuskulatur weiter. | S2: Nach einem langen, ereignisreichen Tag gleicht unser Hirn / einer unordentlichen Küche.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder trennen',
          content: `Satz 1: «In manchen Schlafphasen arbeiten nur lebenswichtige Muskeln wie Herz und Atemmuskulatur weiter.»
→ «In manchen Schlafphasen» = Präpositionalgefüge (WANN/WO?)
→ «arbeiten» = Prädikat
→ «nur lebenswichtige Muskeln wie Herz und Atemmuskulatur» = Subjekt (WER?)
→ «weiter» = Verbzusatz (Teil von «weiterarbeiten»)

✅ In manchen Schlafphasen / arbeiten / nur lebenswichtige Muskeln wie Herz und Atemmuskulatur / weiter.

Satz 2: «Nach einem langen, ereignisreichen Tag gleicht unser Hirn einer unordentlichen Küche.»
→ «Nach einem langen, ereignisreichen Tag» = Präpositionalgefüge (WANN?)
→ «gleicht» = Prädikat
→ «unser Hirn» = Subjekt
→ «einer unordentlichen Küche» = Dativobjekt / Prädikativum (WOMIT/WEM?)

✅ Nach einem langen, ereignisreichen Tag / gleicht / unser Hirn / einer unordentlichen Küche.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Satzglieder = Einheiten, die als Ganzes verschiebbar sind
2️⃣  «nur lebenswichtige Muskeln wie …» = EINE Nomengruppe → nicht aufteilen!
3️⃣  «weiter» = Verbzusatz → eigenes Satzglied-Segment
4️⃣  Je 1 Punkt Abzug für fehlende oder falsche Abtrennung`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_SATZGLIEDER_2',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=8',

    questionText: `Aufgabe 13 (5 Punkte): Satzglieder bestimmen.

Bestimme im folgenden Text die markierten Satzglieder. Verwende die entsprechenden Fachbegriffe.

«"Wir müssen träumen, weil unser Gehirn so kompliziert ist. Nach einem ereignisreichen Tag gleicht es einer unordentlichen Küche (1), die (2) aufgeräumt werden muss." Genau das (3) passiert im Schlaf. Das Gehirn verarbeitet die Erlebnisse des Tages (4). Und dabei lernen wir sogar. "Träume sind wie ein Computerspiel, in dem wir für unser waches Leben (5) trainieren."»

(1) einer unordentlichen Küche
(2) die
(3) das
(4) die Erlebnisse des Tages
(5) für unser waches Leben`,

    options: [
      {
        label: '(1): Dativobjekt / Nominalgruppe im Dativ | (2): Subjekt / Nominalgruppe im Nominativ | (3): Subjekt / Nominalgruppe im Nominativ | (4): Akkusativobjekt / Nominalgruppe im Akkusativ | (5): Präpositionalgefüge / Präpositionalobjekt',
        correct: true,
      },
      {
        label: '(1): Akkusativobjekt | (2): Relativpronomen | (3): Akkusativobjekt | (4): Akkusativobjekt | (5): Dativobjekt',
        correct: false,
      },
      {
        label: '(1): Dativobjekt | (2): Subjekt | (3): Subjekt | (4): Genitivobjekt | (5): Präpositionalgefüge',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle 5 Satzglieder analysieren',
          content: `(1) «einer unordentlichen Küche»
→ «gleicht WEM?» → Dativobjekt ✅
(«gleichen» regiert Dativ: es gleicht EINER Küche; «einer» = Dativ Fem. Sg.)

(2) «die»
→ «WAS muss aufgeräumt werden?» → Subjekt ✅
(Relativpronomen «die» steht für «Küche» und ist Subjekt des Relativsatzes)

(3) «das»
→ «WAS passiert?» → Subjekt ✅
(Demonstrativpronomen «das» = Nominativ, bezieht sich auf den ganzen vorigen Sachverhalt)

(4) «die Erlebnisse des Tages»
→ «verarbeitet WAS?» → Akkusativobjekt ✅
(Nominalgr. im Akkusativ: «die Erlebnisse» = Akk. Pl.)

(5) «für unser waches Leben»
→ Präposition «für» + Nomengruppe → Präpositionalgefüge ✅
(«trainieren für» → Präpositionalobjekt oder Präpositionalgefüge)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «gleichen» + WEM? → Dativ → Dativobjekt (1)
2️⃣  Relativpronomen als Subjekt des Relativsatzes → (2) = Subjekt ✅
3️⃣  «das» als Demonstrativpronomen = Subjekt: WAS passiert? (3)
4️⃣  «verarbeitet WAS?» → Akkusativ → Akkusativobjekt (4)
5️⃣  Präp. + Nomengruppe → Präpositionalgefüge (5)`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_AKKUSATIV_OBJ_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=8',

    questionText: `Aufgabe 14 (4 Punkte): Alle vier Akkusativobjekte finden.

Suche im folgenden Text alle vier Akkusativobjekte (Nominalgruppen im Akkusativ) und schreibe sie auf je eine Linie unterhalb des Textes.

«Damit wir die Luftsprünge, die wir im Traum vollführen, nicht in Wirklichkeit machen, liegt unser Körper schlapp und schlaff im Bett. In manchen Schlafphasen sind sogar fast alle Muskeln gelähmt – nur lebenswichtige wie Herz und Atemmuskulatur arbeiten weiter. Fleissig in Bewegung sind aber auch die Augäpfel: Diese gleiten unter den Lidern hin und her und verfolgen das Traumgeschehen. "Schlafen heisst fast immer träumen", erklärt Stefan Klein. "Wir verbringen also ein gutes Drittel unseres Lebens im Traum."»`,

    options: [
      {
        label: 'die Luftsprünge | die (Relativpronomen) | das Traumgeschehen | ein gutes Drittel unseres Lebens',
        correct: true,
      },
      {
        label: 'die Luftsprünge | das Traumgeschehen | ein gutes Drittel unseres Lebens | unser Körper',
        correct: false,
      },
      {
        label: 'die Luftsprünge | die Augäpfel | das Traumgeschehen | ein gutes Drittel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Akkusativobjekte finden',
          content: `Akkusativobjekt = WEN/WAS? (direkt, ohne Präposition)

1. «Damit wir die Luftsprünge … vollführen»
→ vollführen WAS? → die Luftsprünge ✅ (Akk. Pl.: «die»)

2. «die wir im Traum vollführen»
→ Relativpronomen «die» = ersetzt «die Luftsprünge» → Akkusativobjekt im Relativsatz: die ✅

3. «verfolgen das Traumgeschehen»
→ verfolgen WAS? → das Traumgeschehen ✅ (Akk. n. Sg.)

4. «Wir verbringen ein gutes Drittel unseres Lebens»
→ verbringen WAS? → ein gutes Drittel unseres Lebens ✅ (Akk. n. Sg. + Genitivattribut)

⚠️ «unser Körper» = Subjekt (Nominativ), KEIN Akkusativobjekt!
⚠️ «die Augäpfel» = Subjekt von «sind», nicht Akkusativobjekt
⚠️ Das vollständige Objekt inkl. Genitivattribut herausschreiben!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  WEN/WAS? direkt nach dem Verb → Akkusativobjekt
2️⃣  Relativpronomen «die» im Akkusativ (vollführen WAS?) → auch Akkusativobjekt ✅
3️⃣  «unser Körper» = liegt (WER liegt?) → Nominativ = Subjekt → KEIN Akkusativ!
4️⃣  Genitivattribut («unseres Lebens») gehört zur Akkusativgruppe → mitschreiben!`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_SATZTRANSFORMATION_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=9',

    questionText: `Aufgabe 15 (4 Punkte): Zusammengesetzte Sätze in einfache Sätze umformulieren.

Formuliere die folgenden mehrteiligen (zusammengesetzten) Sätze ohne Sinnveränderung so um, dass daraus ein einteiliger (einfacher) Satz entsteht.

Beispiel: «Nachdem das Kind gefrühstückt hatte, fühlte es sich wieder besser.»
→ «Nach dem Frühstück fühlte sich das Kind wieder besser.»

a) Als das Kind erwachte, sah es ein übles Monster vor sich.
b) Obschon es schlecht geträumt hatte, konnte das Kind wieder einschlafen.`,

    options: [
      {
        label: 'a: Beim Erwachen sah das Kind ein übles Monster vor sich. / Erwachend sah das Kind ein übles Monster vor sich. | b: Trotz eines schlechten Traum(e)s / Trotz schlechter Träume / Trotz des schlechten Traum(e)s konnte das Kind wieder einschlafen.',
        correct: true,
      },
      {
        label: 'a: Das Kind erwachte und sah ein übles Monster vor sich. | b: Obwohl es schlecht geträumt hatte, konnte das Kind einschlafen.',
        correct: false,
      },
      {
        label: 'a: Das Kind sah nach dem Erwachen ein Monster. | b: Das Kind schlief trotzdem wieder ein.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Mehrteilig → einteilig',
          content: `Ziel: Konjunktion durch Präposition ersetzen → aus zusammengesetztem Satz wird einfacher Satz.

a) «Als das Kind erwachte, sah es ein übles Monster vor sich.»
→ «Als» (temporal) → «beim» / Partizipkonstruktion:
→ ✅ Beim Erwachen sah das Kind ein übles Monster vor sich.
→ ✅ Erwachend sah das Kind ein übles Monster vor sich. (Partizip I)

b) «Obschon es schlecht geträumt hatte, konnte das Kind wieder einschlafen.»
→ «Obschon» (konzessiv) → «trotz»:
→ ✅ Trotz eines schlechten Traum(e)s konnte das Kind wieder einschlafen.
→ ✅ Trotz einem schlechten Traum / Trotz des schlechten Traum(e)s / Trotz schlechter Träume

⚠️ NICHT einfach «und» dazwischen setzen → das wäre immer noch zusammengesetzt!
⚠️ KEINE überflüssigen Kommas einfügen → Abzug!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «als» (temporal) → «beim» + Nomen ODER Partizip I (-end)
2️⃣  «obschon/obwohl» (konzessiv) → «trotz» + Genitiv/Dativ
3️⃣  Satz muss einteilig sein: KEIN Komma, KEIN Haupt-/Nebensatz-Paar
4️⃣  Je 2 Punkte pro korrekter Lösung; ½ Punkt Abzug für überflüssige Kommas`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_KASUS_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=9',

    questionText: `Aufgabe 16 (3 Punkte): Ausdrücke in den richtigen Fall setzen.

a) Infolge (ein schrecklicher Traum) _______________ konnte das Kind nicht mehr einschlafen.
b) Der ältere Herr wurde gegen (sein eigener Wille) _______________ in die Klinik gebracht.
c) Ausser (ein gut geschulter Pfleger) _______________ verstand sich niemand mit ihm.`,

    options: [
      {
        label: 'a: eines schrecklichen Traum(e)s | b: seinen eigenen Willen | c: einem gut geschulten Pfleger',
        correct: true,
      },
      {
        label: 'a: einem schrecklichen Traum | b: seinen eigenen Willen | c: einem gut geschulten Pfleger',
        correct: false,
      },
      {
        label: 'a: eines schrecklichen Traumes | b: seinem eigenen Willen | c: einen gut geschulten Pfleger',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präpositionen und ihre Kasus',
          content: `a) «Infolge» → regiert GENITIV:
→ «ein schrecklicher Traum» → Genitiv m. Sg.: «eines schrecklichen Traum(e)s» ✅
(Genitiv: ein- → eines; schrecklich → schrecklichen; Traum → Traum(e)s)

b) «gegen» → regiert AKKUSATIV:
→ «sein eigener Wille» → Akkusativ m. Sg.: «seinen eigenen Willen» ✅
(Akkusativ: sein → seinen; eigen → eigenen; Wille → Willen)

c) «ausser» → regiert DATIV:
→ «ein gut geschulter Pfleger» → Dativ m. Sg.: «einem gut geschulten Pfleger» ✅
(Dativ: ein → einem; gut geschult → gut geschulten; Pfleger bleibt)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «infolge» → Genitiv: eines schrecklichen Traum(e)s ✅
2️⃣  «gegen» → Akkusativ: seinen eigenen Willen ✅
3️⃣  «ausser» → Dativ: einem gut geschulten Pfleger ✅
4️⃣  Je 1 Punkt Abzug für falsche/fehlende Lösung`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────

  {
    id: 'D2_2017_GRAMMATIK_DIREKTE_REDE_1',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=9',

    questionText: `Aufgabe 17 (3 Punkte): Direkte Rede / Satzzeichen.

Notiere die folgenden Sätze korrekt (mit Interpunktion und Gross-/Kleinschreibung):

a) Gegen Albträume meint Stefan Klein hilft eine einfache Übung
b) Max schrie nachts Mama wachte auf sprang aus dem Bett und rannte zur Mutter`,

    options: [
      {
        label: 'a: «Gegen Albträume», meint Stefan Klein, «hilft eine einfache Übung.» | b: Max schrie nachts: «Mama!», wachte auf, sprang aus dem Bett und rannte zur Mutter.',
        correct: true,
      },
      {
        label: 'a: Gegen Albträume meint Stefan Klein hilft eine einfache Übung. | b: «Max schrie nachts Mama», wachte auf, sprang aus dem Bett und rannte zur Mutter.',
        correct: false,
      },
      {
        label: 'a: «Gegen Albträume meint Stefan Klein hilft eine einfache Übung.» | b: Max schrie: «nachts Mama», wachte auf, sprang aus dem Bett und rannte zur Mutter.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Direkte Rede und Satzzeichen',
          content: `a) «Gegen Albträume meint Stefan Klein hilft eine einfache Übung»
→ «Gegen Albträume … hilft eine einfache Übung» = direkte Rede (unterbrochen durch Redebegleitsatz)
→ «meint Stefan Klein» = eingeschobener Redebegleitsatz
→ ✅ «Gegen Albträume», meint Stefan Klein, «hilft eine einfache Übung.»
(Komma nach erster Redeeinheit, Komma nach Redebegleitsatz, dann zweite Redeeinheit mit «)

b) «Max schrie nachts Mama wachte auf sprang aus dem Bett und rannte zur Mutter»
→ «Mama» = direkte Rede, Ausruf → mit Ausrufezeichen und Anführungszeichen
→ «Max schrie nachts:» = Redeeinleitung mit Doppelpunkt
→ «wachte auf, sprang aus dem Bett und rannte zur Mutter» = Hauptsatz, Prädikate mit Komma
→ ✅ Max schrie nachts: «Mama!», wachte auf, sprang aus dem Bett und rannte zur Mutter.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106557/AP17_D_GMS2_L%C3%B6sungen.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Eingeschobener Redebegleitsatz: «…», meint X, «…» → Kommas vor und nach dem Begleitsatz
2️⃣  Redeeinleitung mit Doppelpunkt: «schrie:» → dann Anführungszeichen + Grossbuchstabe
3️⃣  «Mama!» = Ausruf → Ausrufezeichen innerhalb der Anführungszeichen
4️⃣  Je ½ Punkt Abzug für Rechtschreibfehler und fehlendes/falsches Satzzeichen`,
    },
  },

  // ════════════════════════════════════════════════════════════
  // TEIL 2 – SCHREIBAUFGABE
  // ════════════════════════════════════════════════════════════

  {
    id: 'D2_2017_SCHREIB_EIN_TRAUM',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 1 – Ein Traum:

Berichte von einem Traum, an den du dich gut erinnern kannst. Erzähle ihn und gehe in deinem Text auch auf folgende Fragen ein:
– Wie fühltest du dich beim Aufwachen, und welche Gefühle kommen in dir hoch, wenn du heute an den Traum zurückdenkst?
– Wieso ist dir dieser Traum wohl in Erinnerung geblieben?`,

    options: [
      {
        label: 'Konkreten Traum erzählen | Gefühle beim Aufwachen + Rückblick | Reflexion: warum in Erinnerung | Passender Titel',
        correct: true,
      },
      {
        label: 'Allgemeines über Träume | Keine persönliche Erinnerung | Kein Aufbau',
        correct: false,
      },
      {
        label: 'Fiktiver Traum | Keine Gefühle | Kein Textbezug zur Sprachprüfung',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt einen persönlichen Erlebnisbericht über einen konkreten Traum. Ziel: lebhafte Schilderung + Reflexion.`,
      steps: [
        {
          title: '📖 Was die Aufgabe verlangt',
          content: `→ Einen konkreten, eigenen Traum schildern (nicht erfunden)
→ Den Traum anschaulich erzählen (Bilder, Gefühle, Atmosphäre)
→ Gefühle beim Aufwachen beschreiben
→ Reflexion: Warum ist dieser Traum in Erinnerung geblieben?
→ Bezug zur Sprachprüfung möglich (Text über Träume)`,
        },
        {
          title: '✍️ Aufbau',
          content: `TITEL: z.B. «Der Traum, der mich nicht loslässt», «Das Haus am Ende der Strasse»

EINLEITUNG:
→ Wann war dieser Traum? Kontext
→ Einstieg mit Atmosphäre: «Es war dunkel, still, und ich befand mich an einem Ort…»

HAUPTTEIL – DER TRAUM:
→ Was ist passiert? Chronologisch oder mit Rückblenden
→ Personen, Orte, Handlungen
→ Emotionen im Traum selbst (Angst, Freude, Verwirrung?)

HAUPTTEIL – AUFWACHEN UND GEFÜHLE:
→ Wie war das Erwachen? Erleichtert? Verängstigt? Traurig?
→ Gefühle beim Rückdenken heute

SCHLUSS – REFLEXION:
→ Warum ist dieser Traum in Erinnerung geblieben?
→ Evtl. Bezug zu Stefan Kleins Erklärung: schlechte/intensive Träume bleiben besser in Erinnerung`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Konkreter Traum anschaulich geschildert
✅ Gefühle beim Aufwachen beschrieben
✅ Reflexion: Warum in Erinnerung?
✅ Klarer Aufbau
✅ Eigener Titel
✅ Sprachliche Qualität, korrekte Rechtschreibung`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  KONKRET: Nicht «Ich hatte mal einen schlimmen Traum», sondern den Traum ZEIGEN
2️⃣  GEFÜHLE: Beim Aufwachen UND heute beim Rückdenken
3️⃣  REFLEXION: Bezug zur Sprachprüfung möglich («Laut Stefan Klein…»)
4️⃣  TITEL: Kein «Mein Traum» → etwas Treffenderes!`,
    },
  },

  {
    id: 'D2_2017_SCHREIB_LEBE_DEINE_TRAEUME',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 2 – Lebe deine Träume!

Mit diesem Ausspruch werden wir aufgefordert, unsere Wünsche in die Tat umzusetzen.
Erzähle von einem Traum (Wunsch/Ziel), den du dir im Leben schon verwirklicht hast.
– Wie hast du das gemacht?
– Was war schwierig dabei?
– Hat es sich gelohnt? Wieso (nicht)?`,

    options: [
      {
        label: 'Persönlicher Wunsch/Ziel | Wie verwirklicht? | Schwierigkeiten | Rückblick: Hat es sich gelohnt? | Passender Titel',
        correct: true,
      },
      {
        label: 'Schlafdruck und Träume | Keine persönliche Geschichte | Kein Fazit',
        correct: false,
      },
      {
        label: 'Berufswunsch allgemein | Keine Erfahrung | Kein Aufbau',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt einen persönlichen Bericht über die Verwirklichung eines Traums/Wunsches — mit Reflexion.`,
      steps: [
        {
          title: '✍️ Aufbau',
          content: `TITEL: z.B. «Der Weg zum Ziel», «Wie ich es doch geschafft habe»

EINLEITUNG: Was war dein Traum/Wunsch? Warum war er dir wichtig?

HAUPTTEIL 1 – WIE HAST DU ES GEMACHT?:
→ Schritte zur Verwirklichung
→ Konkrete Handlungen, Entscheidungen
→ Wer hat geholfen?

HAUPTTEIL 2 – SCHWIERIGKEITEN:
→ Was lief nicht wie geplant?
→ Rückschläge, Zweifel
→ Wie hast du weitergemacht?

SCHLUSS – HAT ES SICH GELOHNT?:
→ Ergebnis
→ Gefühl danach
→ Was hast du gelernt?`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Persönlicher Wunsch/Ziel klar beschrieben
✅ Weg zur Verwirklichung geschildert
✅ Schwierigkeiten erwähnt
✅ Fazit: Hat es sich gelohnt?
✅ Klarer Aufbau, Titel
✅ Sprachliche Qualität`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «Traum» hier = Wunsch/Ziel (kein Schlaftraum!)
2️⃣  ALLE drei Fragen beantworten: Wie? Was war schwierig? Hat es sich gelohnt?
3️⃣  KONKRET: Spezifisches Erlebnis, keine Allgemeinaussagen
4️⃣  SCHLUSS mit persönlicher Bewertung`,
    },
  },

  {
    id: 'D2_2017_SCHREIB_TRAUMBERUF',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 3 – Traumberuf: Star

Viele Menschen träumen davon, berühmt zu sein.
– Warum wohl?
– Was zeichnet deiner Meinung nach einen Star aus?
– Schreibe auch über die Vor- und Nachteile, die ein Leben im Rampenlicht mit sich bringt.
– Und du: Wärst du selber auch gerne ein Star? Wieso (nicht)?`,

    options: [
      {
        label: 'Warum Berühmtheit? | Was ist ein Star? | Vor- UND Nachteile | Persönliche Meinung | Passender Titel',
        correct: true,
      },
      {
        label: 'Nur Nachteile | Keine eigene Meinung | Kein Aufbau',
        correct: false,
      },
      {
        label: 'Aufzählung bekannter Stars | Keine Argumentation | Kein Fazit',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt eine ausgewogene Erörterung mit persönlicher Stellungnahme.`,
      steps: [
        {
          title: '✍️ Aufbau',
          content: `TITEL: z.B. «Im Rampenlicht: Traum oder Alptraum?», «Der Preis des Ruhms»

EINLEITUNG: Warum träumen Menschen davon, berühmt zu sein?
→ Anerkennung, Reichtum, Bewunderung, Einfluss

WAS IST EIN STAR?:
→ Talent? Ausdauer? Glück? Öffentlichkeit?
→ Eigene Definition

VORTEILE eines Lebens im Rampenlicht:
→ Reichtum, Einfluss, Bewunderung, Möglichkeiten
→ Je mindestens 2 Argumente mit Begründung

NACHTEILE eines Lebens im Rampenlicht:
→ Privatsphäre, Druck, Neid, Vereinsamung, Abhängigkeit
→ Je mindestens 2 Argumente

PERSÖNLICHE MEINUNG:
→ Wärst du selbst gerne ein Star? → Klare Antwort + Begründung`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Alle vier Fragen beantwortet
✅ Vor- UND Nachteile (ausgewogen)
✅ Argumente begründet
✅ Persönliche Meinung klar formuliert
✅ Klarer Aufbau, Titel
✅ Sprachliche Qualität`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  ALLE vier Fragen beantworten → Struktur vorgibt die Gliederung
2️⃣  ARGUMENTE begründen: «Ein Star muss … weil …»
3️⃣  EIGENE MEINUNG: Am Schluss klar Stellung nehmen
4️⃣  AUSGEWOGEN: Nicht nur Vorteile oder nur Nachteile`,
    },
  },

  {
    id: 'D2_2017_SCHREIB_KINO_IM_KOPF',
    year: 2017,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106558/AP17_D_GMS2_Pr%C3%BCfung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 4 – Kino im Kopf: Ein Besuch (Fortsetzungsgeschichte)

«Er geht durch die Strassen, die ihm vertraut und doch fremd vorkommen. Nun biegt er um die Ecke, sein Herz beginnt etwas schneller zu schlagen. Da ist es, das Haus. Er betrachtet die Eingangstür, und sein Blick findet die Klingel. Er legt seinen Zeigefinger darauf, wartet noch einen Moment, holt tief Luft und drückt. Nach wenigen Augenblicken hört er gedämpfte Schritte. Die Tür geht auf …»

Erfinde und schreibe eine spannende Fortsetzung. Anstatt in der Er-Form darfst du auch in der Sie-Form (weiblichen Form) erzählen, wenn du möchtest. Achte darauf, dass deine Geschichte zum Titel «Kino im Kopf: Ein Besuch» passt.`,

    options: [
      {
        label: 'Er- oder Sie-Perspektive | Nahtloser Anschluss | Spannende Handlung | Zum Titel passend | Glaubwürdiges Ende',
        correct: true,
      },
      {
        label: 'Ich-Perspektive | Kein Anschluss | Beliebige Geschichte | Kein Bezug zum Titel',
        correct: false,
      },
      {
        label: 'Erzählung ohne Handlung | Kein Ende | Kein Anschluss an Vorgabetext',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt eine kreative Fortsetzungsgeschichte. Der Vorgabetext beschreibt jemanden, der ein Haus aufsucht — geheimnisvoll, mit Herzrasen. Die Tür öffnet sich…`,
      steps: [
        {
          title: '📖 Was die Aufgabe verlangt',
          content: `→ Nahtloser Anschluss an den Vorgabetext (gleiche Perspektive: Er/Sie)
→ Wer öffnet die Tür? (Überraschung? Erwartetes? Unerwartetes?)
→ Was ist das Ziel des Besuchs?
→ Warum ist das Herz schneller geschlagen?
→ Spannende Handlung, glaubwürdiges Ende
→ Bezug zum Titel: «Kino im Kopf» → könnte ein Traum sein? Eine Erinnerung?`,
        },
        {
          title: '✍️ Mögliche Aufbau-Ideen',
          content: `IDEE A: Reales Wiedersehen
→ Ein alter Freund/Geliebter öffnet die Tür
→ Freude, Überraschung, vielleicht Konflikt

IDEE B: Das Haus war verändert
→ Fremde Menschen öffnen → das Haus aus der Kindheit, die Familie ist weggezogen
→ Melancholisch-nachdenklich

IDEE C: Traumhafte Wendung (Bezug zu «Kino im Kopf»)
→ War alles nur ein Traum? → Die Tür öffnet sich und … er wacht auf
→ Bezug zum Titel «Kino im Kopf»

AUFBAU:
→ Türöffnung: Wer/Was erscheint?
→ Reaktion des Protagonisten
→ Gespräch / Handlung
→ Auflösung / Ende`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Nahtloser, stimmiger Anschluss an den Vorgabetext
✅ Er/Sie-Perspektive beibehalten
✅ Spannende, abwechslungsreiche Handlung
✅ Bezug zum Titel «Kino im Kopf: Ein Besuch»
✅ Glaubwürdiges, überzeugendes Ende
✅ Sprachliche Qualität, korrekte Rechtschreibung`,
        },
        {
          title: '💡 Formulierungshilfen',
          content: `Einstieg: «Die Tür schwang auf, und für einen Moment vergass er zu atmen.»
Oder: «Eine Frau stand im Türrahmen. Nicht diejenige, die er erwartet hatte.»

Zwischenteil: «Er schluckte. Wie oft hatte er sich diesen Moment vorgestellt? Hundertmal? Tausendmal?»

Bezug zu «Kino im Kopf»: «Plötzlich merkte er, dass er zitterte – nicht vor Kälte. Das Herz klopfte wie in einem Film, den man nicht wegschalten konnte.»

Ende: «Er stand noch lange vor der geschlossenen Tür. Dann wandte er sich ab und ging. Die Strassen, die ihm vertraut und doch fremd vorkamen, nahmen ihn wieder auf.»`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  PERSPEKTIVE: Er/Sie (nicht Ich!) → konsequent beibehalten
2️⃣  ANSCHLUSS: Direkt dort einsetzen, wo der Text aufhört («Die Tür geht auf…»)
3️⃣  TITEL beachten: «Kino im Kopf» → filmische Bildsprache, evtl. Traumelement
4️⃣  SPANNUNG: Nicht sofort alles erklären → Neugierde aufrechterhalten
5️⃣  ENDE: Abgeschlossen und stimmig`,
    },
  },

];