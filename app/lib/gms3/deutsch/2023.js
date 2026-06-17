// app/lib/gms3/deutsch/2023.js
// Aufnahmeprüfung 2023 – Deutsch GMS 3 (Kanti Frauenfeld)

export const questions2023 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────
  {
    id: 'D3_2023_TEXTVERST_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=3',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Henry geht teilweise bergab.
2. Henry hat schon vor dem Sturz Schmerzen.
3. Henry versucht mehrmals, seine Familie zu erreichen.
4. Im Gras liegend denkt Henry an seine Kindheit zurück.
5. Henry kennt eine gute Abkürzung.
6. Auf seiner Tour hat Henry keine Menschen gesehen.
7. Henry ist spät dran.
8. Der Regen ermutigt Henry.
9. Henry wurde von Welpen gebissen.
10. Am selben Tag hat Henrys Tochter in einem Pool gebadet.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 2, 3, 7, 10 | stimmt nicht: 1, 4, 5, 6, 8, 9',
        correct: true,
      },
      {
        label: 'stimmt: 1, 2, 3, 7, 10 | stimmt nicht: 4, 5, 6, 8, 9',
        correct: false,
      },
      {
        label: 'stimmt: 2, 3, 5, 7, 9, 10 | stimmt nicht: 1, 4, 6, 8',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Strategie: Aussagen sauber prüfen',
          content: `Jede Aussage muss direkt am Text überprüft werden. Besonders gefährlich sind Aussagen, die fast stimmen, aber an einem kleinen Detail scheitern.`,
        },
        {
          title: 'Auflösung der 10 Aussagen',
          content: `1. ❌ stimmt nicht – Henry geht nicht «teilweise bergab», sondern er verlässt den Serpentinenweg und nimmt «eine Abkürzung über die Wiese» (Z. 8–9). Die Richtung «bergab» wird nicht ausdrücklich gesagt.

2. ✅ stimmt – Schon vor dem Sturz hat Henry Beschwerden: «Das Stechen in seinem Knie liess nicht nach» (Z. 6). Schmerzen sind also bereits früh vorhanden.

3. ✅ stimmt – Gleich am Anfang ruft er «mehrmals» zu Hause an (Z. 2), und später versucht er «wieder», seine Familie zu erreichen (Z. 40). Das sind mehrere Kontaktversuche.

4. ❌ stimmt nicht – Im Gras denkt Henry nicht an seine Kindheit zurück. Nach dem Sturz denkt er an den Hund und an seine Angst; erst am Ende erscheint die Erinnerung an den Pool und seine Tochter (Z. 43–44).

5. ❌ stimmt nicht – Henry glaubt nur, eine Abkürzung zu nehmen: «Henry beschloss, den Serpentinenweg zu verlassen und eine Abkürzung über die Wiese zu nehmen» (Z. 8–9). Der weitere Verlauf zeigt aber, dass das keine gute Abkürzung ist.

6. ❌ stimmt nicht – Er hat zwar «schon lange keinen anderen Wanderer mehr gesehen» (Z. 9–10), aber daraus folgt nicht, dass er auf der ganzen Tour niemanden gesehen hat. Die Aussage ist zu absolut formuliert.

7. ✅ stimmt – «Er würde es nicht pünktlich bis zur Feier um acht schaffen» (Z. 7–8). Damit ist klar: Henry ist zu spät dran.

8. ❌ stimmt nicht – Der Regen motiviert ihn nicht, sondern verschlechtert die Lage: Mit dem Regen kommen Kälte, Schmerzen und Verzweiflung (Z. 30–39).

9. ❌ stimmt nicht – Henry wurde nicht von Welpen gebissen, sondern «früher ... von einem Nachbarshund» (Z. 16). Von den Welpen seiner Freunde heisst es nur, dass sie bellten.

10. ✅ stimmt – Am Schluss heisst es, es sei «ein anderer Tag gewesen», als er «am Pool gestanden und den Sprüngen seiner Tochter zugesehen hatte» (Z. 43–44). Das zeigt: seine Tochter war am selben Tag im Pool.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Textverständnis bedeutet: Aussagen mit Textbelegen überprüfen. Wörter wie «mehrmals», «kein», «gut», «teilweise» oder «am selben Tag» sind Schlüsselwörter; genau sie entscheiden oft darüber, ob eine Aussage stimmt oder nicht.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Immer Signalwörter markieren: «mehrmals», «kein», «gut», «am selben Tag»
2️⃣  Zu absolute Aussagen misstrauisch prüfen
3️⃣  Nicht vermuten – Textstelle suchen
4️⃣  Am Schluss alle 10 Aussagen nochmals mit der gewählten Kombination vergleichen`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────
  {
    id: 'D3_2023_WORTSCHATZ_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Wortschatz',

    questionText: `Aufgabe 2 (2 Punkte): Synonyme finden.

a) «Irritiert verabschiedete er sich, dann ging er in Richtung Tal.» [Z. 1]
Unterstreiche, was dem Begriff «irritiert» entspricht.

b) «Er wähnte sich bereits in Sicherheit ...» [Z. 20]
Finde für «wähnte» einen Begriff mit entsprechender Bedeutung, der im Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'a: verwirrt / verwundert / verunsichert | b: glaubte / vermutete / dachte',
        correct: true,
      },
      {
        label: 'a: verrückt / glücklich | b: sah / verstand / wiegte',
        correct: false,
      },
      {
        label: 'a: nachgemacht | b: fühlte',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «irritiert» und «wähnte»',
          content: `«irritiert» bedeutet hier: verwirrt, verunsichert, aus dem Gleichgewicht gebracht. Auch «verwundert» passt je nach Kontext noch.

«wähnen» bedeutet: glauben, meinen, vermuten, sich etwas vorstellen. Im Satz passt also besonders gut «glaubte».`,
        },
        {
          title: 'Warum andere Wörter nicht passen',
          content: `«verrückt» beschreibt keine vorübergehende Verunsicherung, sondern etwas ganz anderes. «glücklich» ist das Gegenteil der Situation. Bei «wähnte» passen «sah» oder «verstand» nicht, weil es um eine innere Annahme geht, nicht um Wahrnehmung oder Einsicht.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Ein Synonym ist ein Wort mit gleicher oder sehr ähnlicher Bedeutung. In solchen Aufgaben hilft die Einsetzprobe: Ersatzwort in den Satz einsetzen und prüfen, ob Bedeutung und Ton noch stimmen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst die Grundbedeutung klären
2️⃣  Dann Ersatzwort direkt einsetzen
3️⃣  Prüfen: passt Inhalt UND Stil?
4️⃣  Bei «wähnen» fast immer an «glauben / meinen / vermuten» denken`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────
  {
    id: 'D3_2023_WORTSCHATZ_2',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Antonyme finden.

a) «... beobachtete ihn jedoch aufmerksam.» [Z. 15]
Finde für «aufmerksam» ein Wort mit gegensätzlicher Bedeutung (nicht «unaufmerksam»).

b) «Mühsam ging er weiter ...» [Z. 38]
Finde für «mühsam» ein Wort mit gegensätzlicher Bedeutung.`,

    options: [
      {
        label: 'a: achtlos / zerstreut / nachlässig | b: mühelos / leichtfüssig / anstrengungslos',
        correct: true,
      },
      {
        label: 'a: aufmerksam | b: schwierig / hart',
        correct: false,
      },
      {
        label: 'a: verunsichert | b: beharrlich',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Gegensätzliche Bedeutung finden',
          content: `Bei a) ist ein echtes Gegenwort zu «aufmerksam» gesucht. Passend sind z. B. «achtlos», «zerstreut», «nachlässig», «unkonzentriert» oder «beiläufig».

Bei b) ist das Gegenwort zu «mühsam» gesucht. Passend sind «mühelos», «leichtfüssig», «anstrengungslos», «locker» oder «behende».`,
        },
        {
          title: 'Typischer Denkfehler',
          content: `Gefragt ist nicht einfach irgendein ähnliches Wort, sondern ein Antonym. Deshalb muss die Bedeutung wirklich in die entgegengesetzte Richtung gehen. «Unaufmerksam» wäre zwar naheliegend, ist aber ausdrücklich ausgeschlossen.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Ein Antonym ist ein Gegenwort. Wichtig ist, dass es inhaltlich passt und im Satz grammatisch sinnvoll eingesetzt werden kann.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wortart beibehalten: Adjektiv bleibt Adjektiv
2️⃣  Echte Gegenrichtung suchen
3️⃣  Ersatzwort einsetzen und laut lesen
4️⃣  Zusatzhinweise in der Aufgabe beachten – hier: nicht «unaufmerksam»`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────
  {
    id: 'D3_2023_WORTSCHATZ_3',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Wortschatz',

    questionText: `Aufgabe 4 (1 Punkt): Sinnentsprechung.

«... wurde es auf dieser Höhe ein wenig kalt, wie er zugeben musste.» [Z. 4]
Kreuze an, wie das unterstrichene Wort sinngemäss ersetzt werden kann:

obwohl / weil / bevor`,

    options: [
      { label: 'obwohl', correct: true },
      { label: 'weil', correct: false },
      { label: 'bevor', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Bedeutung von «wie» im Satz',
          content: `In diesem Satz bedeutet «wie» nicht «auf welche Art», sondern sinngemäss «obwohl». Henry muss zugeben, dass es kalt wird, auch wenn er das vielleicht nicht gern eingesteht.

«weil» wäre eine Begründung und passt hier nicht. «bevor» beschreibt eine zeitliche Reihenfolge und ist ebenfalls unpassend.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Sinngemäss ersetzen heisst: nicht am Wortlaut hängen, sondern die Funktion im Satz erkennen. Hier erfüllt «wie» eine einräumende Bedeutung.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Nicht nur das Wort anschauen, sondern den ganzen Satz
2️⃣  Fragen: Ist es Grund, Zeit oder Gegensatz?
3️⃣  Hier liegt ein Gegensatz vor → «obwohl»
4️⃣  Bei Unsicherheit Ersatzprobe machen`,
    },
  },
    // ── AUFGABE 5 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_WORTARTEN_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wortarten',

    questionText: `Aufgabe 5 (3 Punkte): Wortarten nach den 5 Wortarten.

«Panisch lief er davon, doch auf der weiten Wiese gab es keinen Baum, auf den er sich retten konnte.» [Z. 22]

Bestimme die Wortart von:
weiten / keinen / auf / den / sich / konnte`,

    options: [
      {
        label: 'weiten: Adjektiv | keinen: Pronomen | auf: Partikel | den: Pronomen | sich: Pronomen | konnte: Verb',
        correct: true,
      },
      {
        label: 'weiten: Nomen | keinen: Adjektiv | auf: Verb | den: Artikel | sich: Partikel | konnte: Pronomen',
        correct: false,
      },
      {
        label: 'weiten: Adjektiv | keinen: Pronomen | auf: Präposition | den: Artikel | sich: Pronomen | konnte: Hilfsverb',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Lösung Wort für Wort',
          content: `«weiten» beschreibt die Wiese näher → Adjektiv.
«keinen» steht stellvertretend bzw. begleitend beim Nomen «Baum» → im 5-Wortarten-System: Pronomen.
«auf» gehört zu den Partikeln; genauer ist es hier eine Präposition.
«den» zählt im 5-Wortarten-System ebenfalls zu den Pronomen; genauer: Relativpronomen.
«sich» = Pronomen.
«konnte» = Verb.`,
        },
        {
          title: 'Warum das so geprüft wird',
          content: `In der Kanti-Lösung wird nach den 5 Wortarten klassifiziert. Deshalb werden Artikel und viele Untergruppen nicht separat gezählt, sondern unter Pronomen oder Partikeln eingeordnet.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Die 5 Grundwortarten sind: Nomen, Verb, Adjektiv, Pronomen und Partikel. Innerhalb dieser Grundwortarten kann man Wörter genauer bestimmen, zum Beispiel «Relativpronomen» oder «Präposition».`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Erst das Wort im Satz anschauen
2️⃣  Dann fragen: benennt, beschreibt, ersetzt oder verbindet es etwas?
3️⃣  Im 5-Wortarten-System Artikel oft als Pronomen mitdenken
4️⃣  Präpositionen und Konjunktionen gehören hier zu den Partikeln`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_WORTARTEN_2',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wortarten',

    questionText: `Aufgabe 6 (3 Punkte): Wie viele Wortarten kommen vor?

Gib in Zahlen an, wie viele Wortarten jeweils in den Sätzen vorkommen. Unterscheide nur nach den 5 Wortarten.

1. Mit dem Regen kam die Kälte.
2. Dann entdeckte er ihn.
3. Dann wurde das Display schwarz.`,

    options: [
      { label: '1: 4 | 2: 3 | 3: 5', correct: true },
      { label: '1: 3 | 2: 3 | 3: 4', correct: false },
      { label: '1: 5 | 2: 4 | 3: 5', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die drei Sätze analysieren',
          content: `1. «Mit dem Regen kam die Kälte.»
→ mit = Partikel, dem = Pronomen, Regen/Kälte = Nomen, kam = Verb
→ insgesamt 4 Wortarten.

2. «Dann entdeckte er ihn.»
→ dann = Partikel, entdeckte = Verb, er/ihn = Pronomen
→ insgesamt 3 Wortarten.

3. «Dann wurde das Display schwarz.»
→ dann = Partikel, wurde = Verb, das = Pronomen, Display = Nomen, schwarz = Adjektiv
→ insgesamt 5 Wortarten.`,
        },
        {
          title: 'Typischer Fehler',
          content: `Gezählt werden nicht die Wörter, sondern die verschiedenen Wortarten. Wenn in einem Satz zwei Pronomen vorkommen, zählt das trotzdem nur als eine Wortart.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Die Aufgabe fragt nach Wortarteninventar, nicht nach Wortanzahl. Entscheidend ist also die Vielfalt der Wortarten im Satz.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle Wörter kurz markieren
2️⃣  Jedem Wort eine Grundwortart zuordnen
3️⃣  Doppelte Wortarten nur einmal zählen
4️⃣  Erst am Schluss die Zahl notieren`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_PARTIKELN_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wortarten',

    questionText: `Aufgabe 7 (5 Punkte): Partikeln und Konjunktionen.

«Aber früher war er mal von einem Nachbarshund gebissen worden, und selbst die Welpen seiner Freunde bellten sofort, wenn sie ihn sahen.» [Z. 16]

a) Schreibe alle Partikeln der Reihe nach heraus.
b) Schreibe alle Konjunktionen der Reihe nach heraus.`,

    options: [
      {
        label: 'a: aber, früher, mal, von, und, selbst, sofort, wenn | b: aber, und, wenn',
        correct: true,
      },
      {
        label: 'a: aber, von, und | b: früher, mal, sofort',
        correct: false,
      },
      {
        label: 'a: aber, früher, selbst | b: aber, wenn, selbst',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Partikeln herausfiltern',
          content: `Nach der offiziellen Lösung gehören hier zu den Partikeln: «aber», «früher», «mal», «von», «und», «selbst», «sofort», «wenn».

Zu den Konjunktionen gehören davon genauer: «aber», «und», «wenn».`,
        },
        {
          title: 'Wichtiges Verständnis',
          content: `Im 5-Wortarten-System ist «Partikel» eine Sammelgruppe. Dazu gehören unter anderem Konjunktionen, Präpositionen und Adverbien. Deshalb kann ein Wort zuerst als Partikel und danach noch genauer als Konjunktion bestimmt werden.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Konjunktionen verbinden Wörter, Satzteile oder Sätze. Präpositionen stehen vor Nominalgruppen. Adverbien geben nähere Umstände an. Im 5-Wortarten-System laufen diese Unterarten unter dem Oberbegriff «Partikel».`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst alle Nicht-Nomen, Nicht-Verben, Nicht-Adjektive, Nicht-Pronomen prüfen
2️⃣  Dann Partikeln der Reihe nach notieren
3️⃣  Danach Teilmenge der Konjunktionen herausziehen
4️⃣  Reihenfolge im Satz genau beibehalten`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_SATZGLIEDER_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Satzglieder',

    questionText: `Aufgabe 8 (2 Punkte): Satzglieder bestimmen.

Bestimme die unterstrichenen Satzglieder:
- die Orientierung
- Mit dem Regen
- die Kälte
- wegen der stärker werdenden Schmerzen im Knöchel`,

    options: [
      {
        label: 'die Orientierung: Akkusativobjekt | Mit dem Regen: Präpositionalgefüge | die Kälte: Subjekt | wegen der stärker werdenden Schmerzen im Knöchel: Präpositionalgefüge',
        correct: true,
      },
      {
        label: 'die Orientierung: Subjekt | Mit dem Regen: Adverbiale | die Kälte: Akkusativobjekt | wegen ...: Dativobjekt',
        correct: false,
      },
      {
        label: 'die Orientierung: Nominativ | Mit dem Regen: Subjekt | die Kälte: Objekt | wegen ...: Attribut',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglied für Satzglied',
          content: `«die Orientierung» in «Henry musste ... die Orientierung verloren haben» beantwortet die Frage Wen oder was? → Akkusativobjekt.

«Mit dem Regen» ist eine Präpositionalgruppe und damit ein Präpositionalgefüge.

«die Kälte» ist in «Mit dem Regen kam die Kälte» das Subjekt, denn sie kommt.

«wegen der stärker werdenden Schmerzen im Knöchel» ist ebenfalls ein Präpositionalgefüge; es gibt den Grund an.`,
        },
        {
          title: 'Probe mit Fragen',
          content: `Subjekt findet man mit «Wer oder was?». Objekte hängen vom Verb ab, etwa «Wen oder was?» beim Akkusativobjekt. Präpositionalgefüge erkennt man meist an einer Präposition wie «mit» oder «wegen».`,
        },
        {
          title: '🧠 Terminologie',
          content: `Ein Satzglied ist eine zusammengehörige Einheit im Satz. Präpositionalgefüge bestehen aus Präposition plus Nominalgruppe.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Erst den ganzen Satz lesen
2️⃣  Frageprobe machen: Wer/was? Wen/was? Womit? Weswegen?
3️⃣  Präposition am Anfang? → oft Präpositionalgefüge
4️⃣  Nie nur das einzelne Wort ansehen – immer die ganze Wortgruppe`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_PLUSQUAMPERFEKT_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Zeitformen',

    questionText: `Aufgabe 9 (3 Punkte): Setze die Sätze ins Plusquamperfekt.

«Mit dem Regen kam die Kälte. Sie prallte zunächst an ihm ab, aber nach und nach drang sie in seine Knochen und in sein Gemüt.» [Z. 35]`,

    options: [
      {
        label: 'Mit dem Regen war die Kälte gekommen. Sie war zunächst an ihm abgeprallt, aber nach und nach war sie in seine Knochen und in sein Gemüt gedrungen.',
        correct: true,
      },
      {
        label: 'Mit dem Regen ist die Kälte gekommen. Sie prallte zunächst an ihm ab ...',
        correct: false,
      },
      {
        label: 'Mit dem Regen wäre die Kälte gekommen. Sie wäre ... gedrungen.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Plusquamperfekt bilden',
          content: `Das Plusquamperfekt besteht aus Hilfsverb im Präteritum + Partizip II.

«kam» → «war gekommen»
«prallte ... ab» → «war ... abgeprallt»
«drang» → «war ... gedrungen»

Die korrekte Lösung lautet:
«Mit dem Regen war die Kälte gekommen. Sie war zunächst an ihm abgeprallt, aber nach und nach war sie in seine Knochen und in sein Gemüt gedrungen.»`,
        },
        {
          title: 'Typische Fehler',
          content: `«ist gekommen» wäre Perfekt, nicht Plusquamperfekt. «wäre gekommen» wäre Konjunktiv, nicht Indikativ. Bei trennbaren Verben muss das Partizip vollständig gebildet werden: «abgeprallt».`,
        },
        {
          title: '🧠 Terminologie',
          content: `Das Plusquamperfekt bezeichnet Vorvergangenheit, also etwas, das vor einem anderen vergangenen Ereignis bereits abgeschlossen war.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verb im Satz finden
2️⃣  Hilfsverb bestimmen: haben oder sein
3️⃣  Hilfsverb ins Präteritum setzen: hatte / war
4️⃣  Partizip II dazustellen`,
    },
  },
    // ── AUFGABE 10 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_SUBJEKTE_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Satzglieder',

    questionText: `Aufgabe 10 (2 Punkte): Subjekte herausschreiben.

«Anders konnte er sich nicht erklären, dass der Wald noch immer so weit entfernt war, als die ersten Tropfen vom Himmel fielen und die drückende Hitze sich in einem heftigen Regenschauer entlud.» [Z. 30]

Schreibe der Reihe nach alle Subjekte {Nominalgruppen im Nominativ} heraus.`,

    options: [
      {
        label: 'er | der Wald | die ersten Tropfen | die drückende Hitze',
        correct: true,
      },
      {
        label: 'sich | der Wald | vom Himmel | die Hitze',
        correct: false,
      },
      {
        label: 'er | der Wald | den Himmel | einem Regenschauer',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die Subjekte der Reihe nach',
          content: `Im Hauptsatz ist «er» das Subjekt: Er konnte sich nicht erklären ...
Im dass-Satz ist «der Wald» das Subjekt.
Im als-Satz ist zuerst «die ersten Tropfen» das Subjekt von «fielen».
Danach ist «die drückende Hitze» das Subjekt von «entlud sich».

Richtige Reihenfolge: er, der Wald, die ersten Tropfen, die drückende Hitze.`,
        },
        {
          title: 'Worauf man achten muss',
          content: `Bei längeren Satzgefügen wechseln die Teilsätze und damit oft auch die Subjekte. Deshalb Satz für Satz bzw. Teilsatz für Teilsatz vorgehen.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Das Subjekt steht im Nominativ und ist das Satzglied, das mit dem Prädikat verbunden ist. In verschachtelten Sätzen können mehrere Subjekte auftreten.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Satz in Teilsätze zerlegen
2️⃣  Zu jedem Verb fragen: Wer oder was?
3️⃣  Nur Nominativgruppen notieren
4️⃣  Reihenfolge im Originalsatz beibehalten`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_VERBEN_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Zeitformen',

    questionText: `Aufgabe 11 (8 Punkte): Kreuze alles Zutreffende an.

«Jetzt, wo die Sonne verschwunden war, wurde es auf dieser Höhe ein wenig kalt, wie er zugeben musste. Die Jacke hätte er vielleicht doch lieber mitnehmen sollen.» [Z. 4]

Bestimme für die Formen:
verschwunden / war / wurde / zugeben / musste / hätte / mitnehmen / sollen`,

    options: [
      {
        label: 'verschwunden: Vollverb + Partizip II | war: Hilfsverb + Personalform | wurde: Vollverb + Personalform | zugeben: Vollverb + Infinitiv | musste: Modalverb + Personalform | hätte: Hilfsverb + Personalform | mitnehmen: Vollverb + Infinitiv | sollen: Modalverb + Infinitiv',
        correct: true,
      },
      {
        label: 'verschwunden: Hilfsverb | war: Partizip II | wurde: Modalverb | zugeben: Personalform | musste: Infinitiv | hätte: Konjunktion | mitnehmen: Partikel | sollen: Partizip II',
        correct: false,
      },
      {
        label: 'alle Formen sind Personalformen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Formen korrekt zuordnen',
          content: `«verschwunden» = Vollverb + Partizip II.
«war» = Hilfsverb + Personalform.
«wurde» = Vollverb + Personalform.
«zugeben» = Vollverb + Infinitiv.
«musste» = Modalverb + Personalform.
«hätte» = Hilfsverb + Personalform.
«mitnehmen» = Vollverb + Infinitiv.
«sollen» = Modalverb + Infinitiv.`,
        },
        {
          title: 'Wie man das erkennt',
          content: `Personalformen sind finite, also konjugierte Verbformen. Infinitive sind die Grundformen. Partizip II erkennt man oft an ge- oder an typischen Endungen, hier z. B. «verschwunden». Modalverben sind etwa können, müssen, dürfen, sollen, wollen, mögen.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Ein Vollverb trägt die eigentliche Bedeutung. Ein Hilfsverb hilft bei Tempus- oder Modusbildung. Ein Modalverb verändert die Aussage hinsichtlich Möglichkeit, Notwendigkeit oder Absicht.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Erst finite Formen suchen → Personalformen
2️⃣  Dann Grundformen → Infinitive
3️⃣  Partizip II separat erkennen
4️⃣  Zum Schluss fragen: Vollverb, Hilfsverb oder Modalverb?`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_INFINITIVE_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Zeitformen',

    questionText: `Aufgabe 12 (3 Punkte): Verben in der Infinitivform.

«Das Stechen in seinem Knie liess nicht nach, und er spürte, wie der Schmerz allmählich seine Stimmung verdarb.» [Z. 6]

Schreibe alle Verben der Reihe nach in der Infinitivform auf.`,

    options: [
      { label: 'nachlassen | spüren | verderben', correct: true },
      { label: 'lassen | spüren | verdarben', correct: false },
      { label: 'nachliess | spüren | verdorben', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verben zurück in die Grundform',
          content: `«liess ... nach» gehört zusammen und ergibt das trennbare Verb «nachlassen».
«spürte» wird zum Infinitiv «spüren».
«verdarb» wird zum Infinitiv «verderben».

Die richtige Reihenfolge lautet also: nachlassen, spüren, verderben.`,
        },
        {
          title: 'Häufige Stolperfalle',
          content: `Bei trennbaren Verben darf der Verbzusatz nicht verloren gehen. Aus «liess nicht nach» wird nicht nur «lassen», sondern «nachlassen».`,
        },
        {
          title: '🧠 Terminologie',
          content: `Der Infinitiv ist die Grundform des Verbs. Trennbare Verben müssen im Infinitiv wieder zusammengeschrieben werden.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle Verbformen im Satz markieren
2️⃣  Bei trennbaren Verben den Zusatz wieder dazunehmen
3️⃣  Konjugierte Form in Grundform verwandeln
4️⃣  Reihenfolge nicht verändern`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_ZEITFORMEN_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Zeitformen',

    questionText: `Aufgabe 13 (1 Punkt): Wie viele verschiedene Zeitformen kommen vor?

«Er hatte jetzt schon lange keinen anderen Wanderer mehr gesehen, was ihn wunderte, und auf dieser neuen Route schien er definitiv der Einzige zu sein.» [Z. 10]`,

    options: [
      { label: '2', correct: true },
      { label: '3', correct: false },
      { label: '4', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zeitformen zählen',
          content: `«hatte ... gesehen» = Plusquamperfekt.
«wunderte» = Präteritum.
«schien» = Präteritum.
«zu sein» ist ein Infinitiv und zählt hier nicht als eigene Zeitform.

Darum kommen insgesamt 2 verschiedene Zeitformen vor: Plusquamperfekt und Präteritum.`,
        },
        {
          title: 'Typischer Fehler',
          content: `Man zählt nicht die Anzahl der Verbformen, sondern die Anzahl der verschiedenen Tempora. Zwei Verben im Präteritum bleiben also trotzdem nur eine Zeitform.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Zeitformen oder Tempora sind z. B. Präsens, Präteritum, Perfekt, Plusquamperfekt und Futur.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle Verbformen markieren
2️⃣  Jede Form einem Tempus zuordnen
3️⃣  Gleiche Tempora nur einmal zählen
4️⃣  Infinitive nicht mit Zeitformen verwechseln`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_VERBALTEIL_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Zeitformen',

    questionText: `Aufgabe 14 (2 Punkte): Kreuze alles Zutreffende an.

1. «Die Jacke hätte er vielleicht doch lieber mitnehmen sollen.» [Z. 5]
2. «Aber früher war er mal von einem Nachbarshund gebissen worden.» [Z. 16]

Mögliche Kategorien: Aktiv / Passiv / Indikativ / Konjunktiv / Perfekt / Plusquamperfekt`,

    options: [
      {
        label: '1: Aktiv + Konjunktiv | 2: Passiv + Indikativ + Plusquamperfekt',
        correct: true,
      },
      {
        label: '1: Aktiv + Indikativ + Perfekt | 2: Aktiv + Konjunktiv + Perfekt',
        correct: false,
      },
      {
        label: '1: Passiv + Konjunktiv | 2: Aktiv + Indikativ + Präteritum',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Erster verbaler Teil',
          content: `«hätte ... mitnehmen sollen» ist Aktiv, weil das Subjekt selbst handelt bzw. handeln würde. Es ist Konjunktiv, weil «hätte» eine Möglichkeits- bzw. Irrealform markiert.`,
        },
        {
          title: '📖 Zweiter verbaler Teil',
          content: `«war ... gebissen worden» ist Passiv, weil mit Henry etwas geschieht. Es ist Indikativ und steht im Plusquamperfekt: «war» + Partizip II + «worden».`,
        },
        {
          title: '🧠 Terminologie',
          content: `Aktiv bedeutet: Das Subjekt handelt. Passiv bedeutet: Mit dem Subjekt geschieht etwas. Indikativ ist die Wirklichkeitsform, Konjunktiv die Möglichkeits-, Wunsch- oder indirekte Redeform.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst Aktiv oder Passiv klären
2️⃣  Dann Indikativ oder Konjunktiv prüfen
3️⃣  Danach die Zeitform bestimmen
4️⃣  Bei Passivformen auf «worden» achten`,
    },
  },
    // ── AUFGABE 15 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_PRAEPOSITIONALGEFUEGE_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Präpositionen',

    questionText: `Aufgabe 15 (4 Punkte): Präpositionalgefüge herausschreiben.

«Henry drehte sich um und sah aus den Augenwinkeln, wie der Schäferhund losrannte. Panisch lief er davon, doch auf der weiten Wiese gab es keinen Baum. Er stolperte über eine Wurzel und schlug hart im Gras auf.» [Z. 21]

Schreibe alle Präpositionalgefüge der Reihe nach heraus.`,

    options: [
      {
        label: 'aus den Augenwinkeln | auf der weiten Wiese | über eine Wurzel | im Gras',
        correct: true,
      },
      {
        label: 'wie der Schäferhund losrannte | auf der weiten Wiese | im Gras',
        correct: false,
      },
      {
        label: 'drehte sich um | auf der weiten Wiese | schlug auf',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle Präpositionalgefüge finden',
          content: `Gesucht sind Wortgruppen mit Präposition:
«aus den Augenwinkeln»
«auf der weiten Wiese»
«über eine Wurzel»
«im Gras»

Diese vier Gruppen müssen in der richtigen Reihenfolge notiert werden.`,
        },
        {
          title: 'Was nicht dazugehört',
          content: `«drehte sich um» enthält zwar einen Verbzusatz, aber kein Präpositionalgefüge. Auch ganze Nebensätze wie «wie der Schäferhund losrannte» gehören nicht dazu.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Ein Präpositionalgefüge besteht aus einer Präposition und der zugehörigen Nominalgruppe, zum Beispiel «über eine Wurzel».`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präpositionen markieren: aus, auf, über, in ...
2️⃣  Die ganze Wortgruppe mitnehmen
3️⃣  Verbzusätze nicht verwechseln mit Präpositionen
4️⃣  Reihenfolge im Text beibehalten`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_FAELLE_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=10',
    topic: 'Satzglieder',

    questionText: `Aufgabe 16 (2 Punkte): Fälle bestimmen.

Bestimme die Fälle der unterstrichenen Wörter:
Hund / Richtung / Holzpflock / Wiese`,

    options: [
      {
        label: 'Hund: Nominativ | Richtung: Akkusativ | Holzpflock: Nominativ | Wiese: Dativ',
        correct: true,
      },
      {
        label: 'Hund: Akkusativ | Richtung: Dativ | Holzpflock: Akkusativ | Wiese: Genitiv',
        correct: false,
      },
      {
        label: 'Hund: Dativ | Richtung: Nominativ | Holzpflock: Genitiv | Wiese: Akkusativ',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Fälle einzeln bestimmen',
          content: `«Hund» ist Nominativ, weil er das Subjekt des Satzes ist.
«Richtung» steht nach «in eine andere Richtung» im Akkusativ.
«Holzpflock» ist Nominativ, weil er das Subjekt von «war» ist.
«Wiese» steht in «auf der Wiese» im Dativ.`,
        },
        {
          title: 'Wie man das erkennt',
          content: `Kasus erkennt man oft an Artikeln, Pronomen oder an der Rektion einer Präposition. «in eine Richtung» zeigt hier den Akkusativ, «auf der Wiese» den Dativ.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Die vier Fälle sind Nominativ, Genitiv, Dativ und Akkusativ. Der Kasus zeigt die Funktion eines Wortes im Satz an.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst den Satzbau verstehen
2️⃣  Dann auf Artikel und Präposition achten
3️⃣  Wer oder was? → oft Nominativ
4️⃣  Wohin? oft Akkusativ, wo? oft Dativ`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────
  {
    id: 'D3_2023_GRAMMATIK_SATZGLIEDSCHEMEN_1',
    year: 2023,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=10',
    topic: 'Satzbau',

    questionText: `Aufgabe 17 (5 Punkte): Ordne die Satzgliedschemen A, B, C oder D zu.

A = Präpositionalgefüge – Prädikat – Subjekt
B = Präpositionalgefüge – Prädikat – Subjekt – Akkusativobjekt
C = Subjekt – Prädikat – Präpositionalgefüge
D = Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge – (Prädikat)

Ordne zu:
- Ein kühler Luftzug wehte über den Hang.
- Er schien etwas an sich zu haben.
- Mitten auf der Wiese stand ein grosser Schäferhund.
- In der Ferne spaltete ein mächtiger Blitz den schieferfarbenen Horizont.
- In diesem Augenblick entdeckte er ihn.`,

    options: [
      {
        label: 'C | D | A | B | B',
        correct: true,
      },
      {
        label: 'A | D | C | B | A',
        correct: false,
      },
      {
        label: 'C | B | A | D | B',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zuordnung der fünf Sätze',
          content: `«Ein kühler Luftzug wehte über den Hang.» → C, denn zuerst kommt das Subjekt, dann das Prädikat, dann das Präpositionalgefüge.

«Er schien etwas an sich zu haben.» → D, denn auf Subjekt und Prädikat folgen Akkusativobjekt, Präpositionalgefüge und ein weiterer verbaler Teil.

«Mitten auf der Wiese stand ein grosser Schäferhund.» → A, denn zuerst steht das Präpositionalgefüge.

«In der Ferne spaltete ein mächtiger Blitz den schieferfarbenen Horizont.» → B.

«In diesem Augenblick entdeckte er ihn.» → B.`,
        },
        {
          title: 'Wie man systematisch vorgeht',
          content: `Am einfachsten markiert man in jedem Satz zuerst Prädikat, Subjekt, Objekte und Präpositionalgefüge. Danach vergleicht man die Reihenfolge mit den vorgegebenen Mustern A–D.`,
        },
        {
          title: '🧠 Terminologie',
          content: `Ein Satzgliedschema beschreibt nicht die Wörter selbst, sondern die Reihenfolge der Satzglieder im Satz.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/164187/AP23_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  In jedem Satz zuerst das Prädikat finden
2️⃣  Dann Subjekt, Objekt und Präpositionalgefüge bestimmen
3️⃣  Reihenfolge notieren
4️⃣  Erst dann mit A, B, C, D vergleichen`,
    },
  },

];


// app/lib/gms3/deutsch/2024.js
// Aufnahmeprüfung 2024 – Deutsch GMS 3 (Pädagogische Maturitätsschule Kreuzlingen)
// Sprachprüfung: Textauszug «Als ich jung war» (Hochzeitsfotograf, Schlossrestaurant)
// Schreibaufgabe: Textauszug «Die Abschiedsparty» (nach John Green, «Eine wie Alaska»)