// app/lib/gms3/deutsch/2026.js
// Aufnahmeprüfung 2026 – Deutsch GMS 3 (Kanti Frauenfeld)
//
// Für 2026 liegt noch keine offizielle Lösung vor. Alle Aufgaben tragen
// deshalb loesungStatus: 'inoffiziell' und kein solutionUrl.

export const questions2026 = [

  // ════════════════════════════════════════════════════════════
  // TEIL 1 – SPRACHPRÜFUNG
  // ════════════════════════════════════════════════════════════

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D3_2026_TEXTVERST_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Textverständnis',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=1',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Franz Escher hat Erfahrung mit Handwerkern, die nicht erscheinen.
2. Das Warten auf den Handwerker führt ihn zu Erinnerungen an seinen letzten Geburtstag.
3. Franz Escher hat Angst, dass Martine seine Einladung nicht annimmt.
4. Franz Escher würde manche Erinnerungen an den Abend der Feier lieber vergessen.
5. Franz Escher macht immer alles so einfach wie möglich.
6. Martine ist schön anzusehen.
7. Franz Escher hat sich bis zu seinem 19. Geburtstag äusserlich positiv entwickelt.
8. Daniela fragt Martine, ob sie zu Eschers Geburtstag mitkommen wolle.
9. Escher weiss nicht, wie er das Geschenk verstehen soll.
10. Auf der Geburtstagsfeier sind sieben Leute anwesend.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 1, 3, 4, 6, 7, 9 | stimmt nicht: 2, 5, 8, 10',
        correct: true,
      },
      {
        label: 'stimmt: 1, 2, 4, 6, 7, 10 | stimmt nicht: 3, 5, 8, 9',
        correct: false,
      },
      {
        label: 'stimmt: 3, 4, 5, 6, 8, 9 | stimmt nicht: 1, 2, 7, 10',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Auflösung der 10 Aussagen',
          content: `1. ✅ stimmt – «Er befand sich nur in der üblichen Warteschleife, auf deren Umlaufbahn man von nicht aufkreuzenden Handwerkern geschickt wurde» (Z. 6–7) → «üblich» heisst: Das kennt er schon.

2. ❌ stimmt nicht – Er denkt an seinen 19. Geburtstag, und der ist «über dreissig Jahre her» (Z. 10–11), also nicht der letzte.

3. ✅ stimmt – Er lädt Martine «wie nebenbei» ein und «linderte er die Schmach der zu erwartenden Abfuhr» (Z. 17) → er rechnet mit einem Nein.

4. ✅ stimmt – «Nach all den Jahren erinnerte er sich immer noch genauer an die Situation, als ihm lieb war» (Z. 22).

5. ❌ stimmt nicht – Umgekehrt: «Eschers Herangehensweise an die einfachsten Dinge des Lebens war derart umständlich» (Z. 26).

6. ✅ stimmt – «dieser bezaubernden Erscheinung» (Z. 29) und «nicht nur Martine die Anmut in Person» (Z. 37).

7. ✅ stimmt – «Auch Eschers kräftige Statur konnte sich sehen lassen», und der Spitzname «Neandertaler» «war ihm seit Jahren nicht mehr zu Ohren gekommen» (Z. 37–40).

8. ❌ stimmt nicht – Escher selbst spricht die Einladung aus: Es gelang ihm, «wie nebenbei zu ihrer stillen Freundin zu sagen, sie könne gern auch kommen» (Z. 15–17).

9. ✅ stimmt – «Er war nicht ganz sicher, ob er sich verarscht fühlen sollte» (Z. 43).

10. ❌ stimmt nicht – Eingeladen sind Andi, drei Schulkollegen, das Paar aus der Nachbarwohnung, Daniela und deren WG-Mitbewohnerin (Z. 13–15) → acht Gäste, mit Escher neun Personen.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Für jede Aussage die Textstelle suchen, nie nach Gefühl entscheiden
2️⃣  Auf Zahlen achten: Gefeiert wurde der 19. Geburtstag, und der liegt über dreissig Jahre zurück
3️⃣  Aussagen mit «immer» oder «alle» sind oft zu stark formuliert
4️⃣  Bei Aussage 10 die Gäste in der Aufzählung einzeln mitzählen`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D3_2026_WORTSCHATZ_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=2',

    questionText: `Aufgabe 2 (3 Punkte): Wörter ersetzen.

a) «Um sie ging es ja eigentlich, doch mit dem Nebenbei-Trick linderte er die Schmach der zu erwartenden Abfuhr.» [Z. 17]
Finde für «linderte» einen Begriff mit gleicher Bedeutung, der im Satz eingesetzt werden kann.

b) Gleicher Satz: Finde für «Abfuhr» einen Begriff mit entsprechender Bedeutung.

c) «…und starrte das zum Vorschein gekommene Päckchen ungläubig an.» [Z. 42]
Streiche alle Wörter, die nicht an Stelle von «ungläubig» stehen können:
baff / freudig / überrascht / verblüfft / perplex / komplex

Welche Kombination stimmt?`,

    options: [
      {
        label: 'a) mildern | b) Ablehnung | c) streichen: freudig, komplex',
        correct: true,
      },
      {
        label: 'a) verschärfen | b) Zustimmung | c) streichen: baff, perplex',
        correct: false,
      },
      {
        label: 'a) mildern | b) Ablehnung | c) streichen: freudig, überrascht, komplex',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 a) «linderte» – gleiche Bedeutung',
          content: `«lindern» heisst: etwas Unangenehmes schwächer machen.
→ Akzeptiert sind zum Beispiel: abschwächen, dämpfen, erleichtern, mildern, reduzieren, verringern, mässigen, verkleinern.
→ Die Antwort darf im Infinitiv oder in der 3. Person Singular stehen, also «mildern» oder «milderte».`,
        },
        {
          title: '📖 b) «Abfuhr» – entsprechende Bedeutung',
          content: `Eine «Abfuhr» ist ein deutliches Nein auf eine Frage oder Bitte.
→ Akzeptiert sind zum Beispiel: Ablehnung, Absage, Korb, Nein, Verweigerung, Weigerung, Zurückweisung, Versagung, Abweisung.
→ Der Begriff darf auch gebeugt sein und muss grammatikalisch nicht in den Satz passen.`,
        },
        {
          title: '📖 c) «ungläubig» – was passt nicht?',
          content: `«ungläubig» heisst hier: Er kann es kaum glauben, er ist überrascht.
→ ✅ baff, überrascht, verblüfft, perplex bleiben stehen: alle vier bedeuten «sehr überrascht».
→ ❌ freudig wird gestrichen: Escher freut sich gerade nicht, er weiss nicht, was er vom Geschenk halten soll.
→ ❌ komplex wird gestrichen: Das heisst «vielschichtig» und beschreibt keine Reaktion.
→ Den Punkt gibt es nur, wenn beide gestrichen sind und sonst keines.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Wort probeweise in den Satz einsetzen und laut lesen
2️⃣  Bei «gleicher Bedeutung» ein Wort suchen, das genau dasselbe sagt
3️⃣  Bei Streichaufgaben jedes Wort einzeln prüfen, auch die, die ähnlich klingen
4️⃣  «komplex» und «perplex» klingen gleich, bedeuten aber etwas völlig anderes`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D3_2026_WORTSCHATZ_2',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=2',

    questionText: `Aufgabe 3 (1 Punkt): Gegenteil finden.

«Eschers Herangehensweise an die einfachsten Dinge des Lebens war derart umständlich, dass er schon das Veranstalten eines kleinen Geburtstagsfestes als »einfädeln« empfand.» [Z. 26]

Finde für «umständlich» einen Begriff mit gegensätzlicher Bedeutung, der im obigen Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'unkompliziert',
        correct: true,
      },
      {
        label: 'aufwendig',
        correct: false,
      },
      {
        label: 'langwierig',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Gegenteil von «umständlich»',
          content: `«umständlich» heisst: mit viel zu viel Aufwand, kompliziert.
→ Akzeptiert sind zum Beispiel: einfach, unkompliziert, leicht, mühelos, problemlos, unproblematisch, reibungslos.

❌ «aufwendig» und «langwierig» sind keine Gegenteile, sondern sagen fast dasselbe wie «umständlich».

Probe: Setze dein Wort in den Satz ein und lies ihn ganz durch – es muss auch grammatikalisch passen.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst die Bedeutung des Wortes in eigenen Worten sagen
2️⃣  Dann das Gegenteil davon suchen, nicht ein ähnliches Wort
3️⃣  Die Vorsilbe «un-» hilft oft: kompliziert → unkompliziert
4️⃣  Zum Schluss ins Satzmuster einsetzen und prüfen`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D3_2026_WORTSCHATZ_3',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=3',

    questionText: `Aufgabe 4 (2 Punkte): Vervollständige den Satz grammatikalisch und inhaltlich korrekt.

a) Ein Grobian zeichnet sich beim Auspacken eines Geschenks dadurch aus, dass er…

b) Der Verhaltenskodex einer Gesellschaft gibt vor, wie …

Welche Fortsetzung passt zu beiden Sätzen?`,

    options: [
      {
        label: 'a) …dass er das Geschenkpapier ohne Rücksicht zerreisst. | b) …wie man sich in einer bestimmten Situation verhalten soll, zum Beispiel beim Annehmen eines Geschenks.',
        correct: true,
      },
      {
        label: 'a) …dass er das Papier mit einem Sackmesser aufschneidet. | b) …wie viele Gäste man an einen Geburtstag einladen muss.',
        correct: false,
      },
      {
        label: 'a) …dass er sich über jedes Geschenk freut. | b) …wie teuer ein Geschenk sein darf.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 a) Was macht einen Grobian aus?',
          content: `Der Text sagt es indirekt: Escher öffnet das Päckchen sehr sorgfältig, «ohne sich bei Martine durch Zerreissen des schönen Papiers als gefühlloser Grobian zu disqualifizieren» (Z. 22–23).

→ Ein Grobian ist also jemand, der grob und ohne Rücksicht vorgeht: Er reisst das Papier auf, statt es sorgfältig zu öffnen.

⚠️ Deine Fortsetzung beginnt mit «dass er» und hat das Verb am Ende, zum Beispiel: dass er das Geschenkpapier ohne Rücksicht zerreisst.`,
        },
        {
          title: '📖 b) Was ist ein Verhaltenskodex?',
          content: `Im Text: «Es gelang ihm, dem allgemeinen Verhaltenskodex für Geschenkannahme entsprechend seinen Ausruf nicht enttäuscht klingen zu lassen» (Z. 44–46).

→ Ein Verhaltenskodex ist eine ungeschriebene Regel, wie man sich in einer bestimmten Situation verhält. Hier: Man zeigt beim Auspacken Freude, auch wenn man enttäuscht ist.

⚠️ Nach «wie» folgt ein Nebensatz mit dem Verb am Ende, zum Beispiel: wie man sich in einer bestimmten Situation verhalten soll.

Hier gibt es mehrere richtige Formulierungen. Die Prüfung ist bei der Grammatik streng und beim Inhalt etwas offener – ein gutes Beispiel genügt.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Satzanfang nochmals lesen: Welches Einleitewort steht da, «dass» oder «wie»?
2️⃣  Nebensatz heisst: Verb ans Ende
3️⃣  Inhalt aus dem Text holen, nicht erfinden
4️⃣  Zum Schluss den ganzen Satz von vorne lesen und auf Rechtschreibung prüfen`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_NOMINALISIERUNG_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Nomen & Adjektive',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=3',

    questionText: `Aufgabe 5 (3 Punkte): Nominalisierung.

Wandle die Verben und Adjektive im folgenden Satz in Nomen um. Setze den Artikel im Nominativ dazu.

«Um sie ging es ja eigentlich, doch mit dem Nebenbei-Trick linderte er die Schmach der zu erwartenden Abfuhr.» [Z. 17]

Umzuwandeln sind: ging / linderte / erwartenden`,

    options: [
      {
        label: 'das Gehen | das Lindern (die Linderung) | das Erwarten (die Erwartung)',
        correct: true,
      },
      {
        label: 'der Gang | die Linde | der Erwarter',
        correct: false,
      },
      {
        label: 'das Gehen | die Linderung | die Erwartungen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verben und Adjektive zu Nomen machen',
          content: `ging → das Gehen ✅
→ Der Infinitiv «gehen» wird grossgeschrieben und bekommt den Artikel «das».

linderte → das Lindern ✅ oder die Linderung ✅
→ Beide Formen sind möglich: der Infinitiv «das Lindern» oder das Nomen auf -ung.

erwartenden → das Erwarten ✅ oder die Erwartung ✅
→ «zu erwartenden» kommt von «erwarten», also «das Erwarten» oder «die Erwartung».

⚠️ Der Artikel muss im Nominativ stehen: das, die, der – nicht «dem» oder «des».
⚠️ Singular, nicht Plural: «die Erwartung», nicht «die Erwartungen».`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verb in den Infinitiv setzen: linderte → lindern
2️⃣  Gross schreiben und «das» davorsetzen: das Lindern
3️⃣  Prüfen, ob es auch eine Form auf -ung gibt: die Linderung
4️⃣  1 Punkt pro richtiges Feld, der Artikel gehört dazu`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_PLURAL_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Nomen & Adjektive',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 6 (3.5 Punkte): Singular und Plural mit Artikel.

Trage die Wörter mit korrektem Artikel im Nominativ ein und ergänze das andere Feld. Wo kein Plural oder Singular möglich ist, setze ein Kreuz.

Beispiel: das Licht – die Lichter | der Tiefsinn – ✗ | ✗ – die Eltern

Wörter: Leben / Länge / Mäntel / Leute / Papier / Päckchen / Ziehen

Welche Zeile ist überall richtig?`,

    options: [
      {
        label: 'das Leben – die Leben | die Länge – die Längen | der Mantel – die Mäntel | ✗ – die Leute | das Papier – die Papiere | das Päckchen – die Päckchen | das Ziehen – ✗',
        correct: true,
      },
      {
        label: 'das Leben – die Lebens | die Länge – die Längen | der Mantel – die Mantel | die Leute – die Leuten | das Papier – die Papiers | das Päckchen – die Päckchens | das Ziehen – die Ziehen',
        correct: false,
      },
      {
        label: 'das Leben – ✗ | die Länge – die Längen | der Mantel – die Mäntel | ✗ – die Leute | das Papier – die Papiere | das Päckchen – die Päckchen | das Ziehen – die Ziehungen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zeile für Zeile',
          content: `das Leben → die Leben ✅ (gleiche Form im Plural)
die Länge → die Längen ✅ (Femininum auf -e → -en)
der Mantel → die Mäntel ✅ (Umlaut, gleiche Endung)
✗ → die Leute ✅ («Leute» gibt es nur im Plural)
das Papier → die Papiere ✅ (-e)
das Päckchen → die Päckchen ✅ (Verkleinerung auf -chen → gleiche Form)
das Ziehen → ✗ ✅ (nominalisierter Infinitiv, kein Plural)

⚠️ Bei «Mäntel» ist die Aufgabe rückwärts: Du musst den Singular «der Mantel» finden.
⚠️ Pro richtige Zeile 0.5 Punkte, bei einem Schreibfehler ist die ganze Zeile falsch.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst den Artikel bestimmen: der, die oder das?
2️⃣  Verkleinerungen auf -chen und -lein bleiben im Plural gleich
3️⃣  Nomen aus Verben (das Ziehen, das Gehen) haben keinen Plural
4️⃣  «Leute», «Eltern», «Ferien» gibt es nur im Plural → Kreuz beim Singular`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_WORTARTEN_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 7 (3 Punkte): Wortart bestimmen (nur nach den 5 Wortarten).

«Auch für die anderen Geburtstagsgäste war es eine klare Angelegenheit.» [Z. 36]

Bestimme: Auch / für / die / war / es / klare`,

    options: [
      {
        label: 'Auch: Partikel | für: Partikel | die: Pronomen | war: Verb | es: Pronomen | klare: Adjektiv',
        correct: true,
      },
      {
        label: 'Auch: Partikel | für: Partikel | die: Pronomen | war: Verb | es: Nomen | klare: Adjektiv',
        correct: false,
      },
      {
        label: 'Auch: Adjektiv | für: Partikel | die: Pronomen | war: Verb | es: Pronomen | klare: Partikel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Wort für Wort',
          content: `Auch → Partikel ✅ (unveränderlich, verstärkt die Aussage)
für → Partikel ✅ (Präposition, und Präpositionen gehören zu den Partikeln)
die → Pronomen ✅ (bestimmter Artikel vor «Geburtstagsgäste»; die genauere Bestimmung ist erlaubt)
war → Verb ✅ (Personalform von «sein»)
es → Pronomen ✅ (Personalpronomen)
klare → Adjektiv ✅ (beschreibt «Angelegenheit», ist gebeugt)

⚠️ Die fünf Wortarten sind: Nomen, Verb, Adjektiv, Pronomen, Partikel. Präpositionen und Konjunktionen sind Partikeln.
⚠️ Ist eine Nennung falsch, gilt die ganze Lösung als falsch.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Kannst du das Wort beugen? Nomen, Verb, Adjektiv und Pronomen ja, Partikel nein
2️⃣  Steht es vor einem Nomen und bestimmt es? → Artikel, also Pronomen
3️⃣  Alles Unveränderliche (auch, für, und, nicht) → Partikel
4️⃣  0.5 Punkte pro richtige Nennung, eine genauere Bestimmung ist zulässig`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_WORTARTEN_ZAEHLEN_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 8 (2 Punkte): Wie viele Wortarten kommen vor? (nur die 5 Wortarten)

Satz A: «Escher war kein übertrieben ungeduldiger Mensch.» [Z. 8]
Satz B: «Mit der Sprechanlage war aber alles in Ordnung.» [Z. 5–6]

Gib je die Anzahl an.`,

    options: [
      {
        label: 'Satz A: 4 | Satz B: 4',
        correct: true,
      },
      {
        label: 'Satz A: 3 | Satz B: 4',
        correct: false,
      },
      {
        label: 'Satz A: 4 | Satz B: 5',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satz A: 4 Wortarten',
          content: `Escher → Nomen
war → Verb
kein → Pronomen (Artikelwort)
übertrieben → Adjektiv
ungeduldiger → Adjektiv
Mensch → Nomen

→ Vorkommende Wortarten: Nomen, Verb, Pronomen, Adjektiv = 4 ✅
→ Es wird nicht gezählt, wie viele Wörter es sind, sondern wie viele verschiedene Wortarten.`,
        },
        {
          title: '📖 Satz B: 4 Wortarten',
          content: `Mit → Partikel (Präposition)
der → Pronomen (Artikel)
Sprechanlage → Nomen
war → Verb
aber → Partikel
alles → Pronomen
in → Partikel
Ordnung → Nomen

→ Vorkommende Wortarten: Partikel, Pronomen, Nomen, Verb = 4 ✅
→ Ein Adjektiv kommt in Satz B nicht vor.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Jedes Wort einzeln bestimmen, am besten darüberschreiben
2️⃣  Dann die verschiedenen Wortarten zusammenzählen, nicht die Wörter
3️⃣  Höchstens 5 sind möglich: Nomen, Verb, Adjektiv, Pronomen, Partikel
4️⃣  1 Punkt pro richtige Zahl`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_VOLLVERBEN_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Zeitformen',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 9 (2 Punkte): Vollverben in der Infinitivform.

«Franz Escher wartete immer noch auf den Elektriker, als er mit dem Puzzle fertig war. Vorsichtshalber schaute er nach, ob er versehentlich die Klingel abgestellt hatte.» [Z. 1]

Schreibe alle Vollverben der Reihe nach in der Infinitivform auf.`,

    options: [
      {
        label: 'warten, sein, nachschauen, abstellen',
        correct: true,
      },
      {
        label: 'warten, sein, nachschauen, abstellen, haben',
        correct: false,
      },
      {
        label: 'warten, sein, schauen, abstellen, hatte',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die Vollverben der Reihe nach',
          content: `wartete → warten ✅ (Vollverb, trägt die Bedeutung)
war → sein ✅ (hier Vollverb: «fertig war» – «sein» ist die Aussage selbst)
schaute … nach → nachschauen ✅ (Verb mit Verbzusatz: im Infinitiv zusammen)
abgestellt (hatte) → abstellen ✅ (Vollverb im Plusquamperfekt)

⚠️ «hatte» ist hier Hilfsverb und gehört NICHT dazu: Für «haben» gibt es 0.5 Punkte Abzug, ebenso für jedes andere falsche Wort.
⚠️ «nachschauen» muss zusammengeschrieben werden, nicht nur «schauen».`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle Verbformen im Satz suchen, auch die am Satzende
2️⃣  Bilden sie zusammen eine Zeitform? Dann ist das vordere Verb Hilfsverb
3️⃣  Verbzusätze (nach, ab, auf) gehören im Infinitiv an den Anfang
4️⃣  0.5 Punkte pro richtige Lösung`,
    },
  },

  // ── AUFGABE 10 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_AKTIV_PASSIV_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Aktiv / Passiv',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 10 (4 Punkte): Verbale Teile näher bestimmen.

«Escher war stolz darauf, dass es ihm beim Aussprechen seiner Einladung an die Mitstudentin gelang, wie nebenbei zu ihrer stillen Freundin zu sagen, sie könne gern auch kommen, falls sie nichts Besseres zu tun habe.» [Z. 15]

Kreuze alles Zutreffende an für die vier Teilsätze:
Aktiv | Passiv | Indikativ | Konjunktiv | Präsens | Präteritum | Perfekt

1. «Escher war stolz darauf,»
2. «dass es ihm beim Aussprechen seiner Einladung an die Mitstudentin gelang,»
3. «sie könne gern auch kommen,»
4. «falls sie nichts Besseres zu tun habe.»`,

    options: [
      {
        label: '1: Aktiv+Indikativ+Präteritum | 2: Aktiv+Indikativ+Präteritum | 3: Aktiv+Konjunktiv+Präsens | 4: Aktiv+Konjunktiv+Präsens',
        correct: true,
      },
      {
        label: '1: Aktiv+Indikativ+Präteritum | 2: Passiv+Indikativ+Präteritum | 3: Aktiv+Konjunktiv+Präsens | 4: Aktiv+Indikativ+Präsens',
        correct: false,
      },
      {
        label: '1: Aktiv+Indikativ+Präsens | 2: Aktiv+Indikativ+Präteritum | 3: Aktiv+Konjunktiv+Präteritum | 4: Aktiv+Konjunktiv+Präsens',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Teilsatz für Teilsatz',
          content: `1. «Escher war stolz darauf,»
→ Aktiv ✅ (kein «werden» + Partizip II)
→ Indikativ ✅ (normale Aussage)
→ Präteritum ✅ («war»)

2. «dass es ihm … gelang,»
→ Aktiv ✅ – «gelingen» hat kein Passiv mit «werden»
→ Indikativ ✅
→ Präteritum ✅ («gelang»)

3. «sie könne gern auch kommen,»
→ Aktiv ✅
→ Konjunktiv ✅ («könne» = Konjunktiv I, indirekte Rede)
→ Präsens ✅ (Konjunktiv I wird vom Präsens gebildet)

4. «falls sie nichts Besseres zu tun habe.»
→ Aktiv ✅
→ Konjunktiv ✅ («habe» = Konjunktiv I)
→ Präsens ✅

⚠️ Die Teilsätze 3 und 4 geben wieder, was Escher gesagt hat → indirekte Rede mit Konjunktiv I.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Passiv erkennst du an «werden» + Partizip II – fehlt das, ist es Aktiv
2️⃣  Konjunktiv I: «sie könne», «sie habe» statt «sie kann», «sie hat»
3️⃣  Konjunktiv I gehört zum Präsens, Konjunktiv II zum Präteritum
4️⃣  Jede richtige Zeile 1 Punkt, ein Fehler in der Zeile gibt 0 Punkte`,
    },
  },

  // ── AUFGABE 11 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_ZEITFORMEN_ZAEHLEN_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Zeitformen',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 11 (2 Punkte): Zeitformen zählen.

«Als Escher das Geburtstagsgeschenk mithilfe eines Sackmessers, dessen scharfe Klinge die Klebestreifen mit chirurgischer Präzision durchtrennte, ohne das Papier zu verletzen, und einer schwungvollen, aber nicht zu torrerohaften Ziehbewegung vom Geschenkpapier befreit hatte, grinste Andi ihm begeistert zu und sandte ermunternde Augenbrauensignale aus seinem eifrig nickenden Kopf.» [Z. 31]

Kreuze an, wie viele verschiedene Zeitformen in dem obigen Satz zu finden sind.

A) 1   B) 2   C) 3   D) 4`,

    options: [
      {
        label: 'B: 2',
        correct: true,
      },
      {
        label: 'C: 3',
        correct: false,
      },
      {
        label: 'D: 4',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbformen sammeln',
          content: `durchtrennte → Präteritum
befreit hatte → Plusquamperfekt
grinste → Präteritum
sandte → Präteritum

→ Verschiedene Zeitformen: Präteritum und Plusquamperfekt = 2 ✅

⚠️ «zu verletzen» ist ein Infinitiv und bildet keine eigene Zeitform.
⚠️ Es zählt nicht, wie viele Verben es sind, sondern wie viele verschiedene Zeitformen.
⚠️ Die Aufgabe gibt 2 Punkte, aber nur ganz oder gar nicht.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle Verbformen unterstreichen, auch die weit auseinanderliegenden Teile
2️⃣  Mehrteilige Formen zusammennehmen: «hatte … befreit» = eine Zeitform
3️⃣  Jede Zeitform nur einmal zählen
4️⃣  Plusquamperfekt = hatte/war + Partizip II, es zeigt das Vorzeitige`,
    },
  },

  // ── AUFGABE 12 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_PLUSQUAMPERFEKT_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Zeitformen',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 12 (2 Punkte): Ins Plusquamperfekt setzen.

«Nach all den Jahren erinnerte er sich immer noch genauer an die Situation, als ihm lieb war.» [Z. 22]

Setze beide Teilsätze ins Plusquamperfekt.`,

    options: [
      {
        label: 'Nach all den Jahren hatte er sich immer noch genauer an die Situation erinnert, als ihm lieb gewesen war.',
        correct: true,
      },
      {
        label: 'Nach all den Jahren hat er sich immer noch genauer an die Situation erinnert, als ihm lieb gewesen ist.',
        correct: false,
      },
      {
        label: 'Nach all den Jahren hatte er sich immer noch genauer an die Situation erinnert, als ihm lieb war.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Beide Teilsätze umformen',
          content: `Teilsatz 1: «erinnerte er sich» → «hatte er sich … erinnert» ✅
→ Plusquamperfekt = hatte/war + Partizip II. Das Partizip rutscht ans Ende des Teilsatzes.

Teilsatz 2: «als ihm lieb war» → «als ihm lieb gewesen war» ✅
→ «sein» bildet das Plusquamperfekt mit «war» + «gewesen».

⚠️ «hat … erinnert» wäre Perfekt, nicht Plusquamperfekt.
⚠️ Beide Teilsätze müssen umgeformt werden: pro richtigen Teilsatz 1 Punkt.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Plusquamperfekt = Präteritum von haben/sein + Partizip II
2️⃣  «hatte» oder «war»? Bei «sein» und bei Bewegungsverben nimmt man «war»
3️⃣  Partizip II ans Ende des Teilsatzes stellen
4️⃣  Beide Teilsätze prüfen, nicht nur den ersten`,
    },
  },

  // ── AUFGABE 13 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_PARTIKELN_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortarten',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 13 (8 Punkte): Partikeln und Konjunktionen.

«Als Escher das Geburtstagsgeschenk mithilfe eines Sackmessers, dessen scharfe Klinge die Klebestreifen mit chirurgischer Präzision durchtrennte, ohne das Papier zu verletzen, und einer schwungvollen, aber nicht zu torrerohaften Ziehbewegung vom Geschenkpapier befreit hatte, grinste Andi ihm begeistert zu und sandte ermunternde Augenbrauensignale aus seinem eifrig nickenden Kopf.» [Z. 31]

a) Schreibe alle Partikeln der Reihe nach heraus.
b) Schreibe alle Konjunktionen der Reihe nach heraus.`,

    options: [
      {
        label: 'a) Als, mithilfe, mit, ohne, und, aber, nicht, zu, von, und, aus | b) als, ohne, und, aber, und',
        correct: true,
      },
      {
        label: 'a) Als, mithilfe, mit, ohne, zu, und, aber, nicht, zu, von, und, aus | b) als, und, aber, und',
        correct: false,
      },
      {
        label: 'a) Als, mithilfe, mit, ohne, und, aber, nicht, von, und, aus | b) als, ohne, und, aber, und, dessen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 a) Die Partikeln der Reihe nach',
          content: `Als, mithilfe, mit, ohne, und, aber, nicht, zu, von, und, aus ✅

→ Partikeln sind alle unveränderlichen Wörter: Präpositionen (mithilfe, mit, von, aus), Konjunktionen (Als, ohne, und, aber) und Adverbien oder Verstärkungen (nicht, zu).
→ «zu» in «nicht zu torrerohaften» ist eine Gradpartikel und gehört dazu.

⚠️ Das «zu» in «zu verletzen» ist eine Infinitivpartikel: Die Prüfung lässt es hier weg.
⚠️ Für falsch herausgeschriebene Begriffe gibt es Abzug, die Reihenfolge selbst kostet keine Punkte.`,
        },
        {
          title: '📖 b) Die Konjunktionen',
          content: `als, ohne, und, aber, und ✅

→ «Als …» leitet den Nebensatz ein (unterordnende Konjunktion).
→ «ohne … zu verletzen» leitet ebenfalls einen Nebensatz ein.
→ «und», «aber», «und» verbinden Satzteile oder Teilsätze (nebenordnende Konjunktionen).

⚠️ «dessen» ist ein Relativpronomen, keine Konjunktion.
⚠️ Jede richtige Partikel und jede richtige Konjunktion gibt 0.5 Punkte.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Satz Wort für Wort durchgehen und alles Unveränderliche markieren
2️⃣  Dann fragen: Verbindet das Wort etwas? → auch Konjunktion
3️⃣  Pronomen wie «dessen» oder «ihm» sind keine Partikeln
4️⃣  Konjunktionen stehen beide Male in der Liste: einmal als Partikel, einmal als Konjunktion`,
    },
  },

  // ── AUFGABE 14 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_KONJUNKTIONEN_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Satzbau & Konjunktionen',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=7',

    questionText: `Aufgabe 14 (3 Punkte): Sätze mit einer Konjunktion verbinden.

Jede Konjunktion darf nur einmal verwendet werden: obwohl / während / weil / als
Beispiel: «Alle sind gespannt. Escher öffnet das Geschenk.» → «Alle sind gespannt, als Escher das Geschenk öffnet.»

a) Franz Escher wartet noch immer auf den Elektriker. Er legt das letzte Puzzleteil auf den Tisch.
b) Escher hat nicht gern zu viel Musse. Er denkt dann über sein Leben nach.
c) Escher erhält ein Puzzle zum Geburtstag. Er ist kein kleines Kind mehr.

Welche Zuordnung passt?`,

    options: [
      {
        label: 'a) während | b) weil | c) obwohl',
        correct: true,
      },
      {
        label: 'a) weil | b) während | c) obwohl',
        correct: false,
      },
      {
        label: 'a) während | b) obwohl | c) weil',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satz für Satz',
          content: `a) «Franz Escher wartet noch immer auf den Elektriker, während er das letzte Puzzleteil auf den Tisch legt.» ✅
→ Beides passiert gleichzeitig → «während».

b) «Escher hat nicht gern zu viel Musse, weil er dann über sein Leben nachdenkt.» ✅
→ Das ist der Grund → «weil». Im Text: «aber er mochte es nicht, wenn er zu viel Musse hatte und anfing, über sein Leben nachzudenken» (Z. 8–9).

c) «Escher erhält ein Puzzle zum Geburtstag, obwohl er kein kleines Kind mehr ist.» ✅
→ Das passt eigentlich nicht zusammen, ist also ein Gegensatz → «obwohl». Im Text: «Schliesslich war er kein kleines Kind mehr» (Z. 43).

⚠️ «als» ist im Beispiel schon verbraucht, jede Konjunktion darf nur einmal vorkommen.
⚠️ Nach der Konjunktion steht das Verb am Ende: «… legt», «… nachdenkt», «… ist».`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Fragen: Grund, Gegensatz oder Gleichzeitigkeit?
2️⃣  weil = Grund, obwohl = Gegensatz, während = gleichzeitig, als = einmaliger Zeitpunkt
3️⃣  Nebensatz heisst: Verb ans Ende, Komma davor
4️⃣  Inhalt muss zum Text passen – pro richtige Lösung 1 Punkt`,
    },
  },

  // ── AUFGABE 15 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_STEIGERUNG_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Nomen & Adjektive',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=8',

    questionText: `Aufgabe 15 (4 Punkte): Steigerungsformen.

Setze die unterstrichenen Adjektive in die Tabelle (Grundform – Komparativ – Superlativ):

Z. 6: «Er befand sich nur in der üblichen Warteschleife, auf deren Umlaufbahn…»
Z. 17: «… sie könne gern auch kommen …»
Z. 27: «…sein bester Freund Andi…»
Z. 29: «… dieser bezaubernden Erscheinung an diesem Abend näher zu kommen …»

Welche Zeile ist überall richtig?`,

    options: [
      {
        label: 'üblich – üblicher – (am) üblichsten | gern – lieber – (am) liebsten | gut – besser – (am) besten | bezaubernd – bezaubernder – (am) bezauberndsten',
        correct: true,
      },
      {
        label: 'üblich – üblicher – (am) üblichsten | gern – gerner – (am) gernsten | gut – besser – (am) besten | bezaubernd – mehr bezaubernd – (am) meisten bezaubernd',
        correct: false,
      },
      {
        label: 'üblich – mehr üblich – (am) üblichsten | gern – lieber – (am) liebsten | bester – besser – (am) besten | bezaubernd – bezaubernder – (am) bezauberndsten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die vier Zeilen',
          content: `Z. 6 «üblichen» → üblich – üblicher – (am) üblichsten ✅
→ Zuerst die Grundform ohne Endung suchen: üblichen → üblich.

Z. 17 «gern» → gern – lieber – (am) liebsten ✅
→ Unregelmässige Steigerung, die musst du auswendig wissen.

Z. 27 «bester» → gut – besser – (am) besten ✅
→ «bester» ist schon der Superlativ. Die Grundform ist «gut», ebenfalls unregelmässig.

Z. 29 «bezaubernden» → bezaubernd – bezaubernder – (am) bezauberndsten ✅
→ Das Partizip «bezaubernd» wird wie ein normales Adjektiv gesteigert.

⚠️ 1 Punkt pro Zeile, die ganze Zeile muss stimmen. Gebeugte Adjektive werden akzeptiert.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Erst die Grundform bilden, auch wenn im Text eine Steigerungsform steht
2️⃣  Normalfall: -er für den Komparativ, -sten für den Superlativ
3️⃣  Unregelmässig: gut – besser – besten, gern – lieber – liebsten, viel – mehr – meisten
4️⃣  Im Deutschen steigert man nicht mit «mehr» oder «am meisten»`,
    },
  },

  // ── AUFGABE 16 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_PRONOMEN_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Pronomen',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=8',

    questionText: `Aufgabe 16 (2.5 Punkte): Alle Pronomen herausschreiben.

«Er befand sich nur in der üblichen Warteschleife, auf deren Umlaufbahn man von nicht aufkreuzenden Handwerkern geschickt wurde.» [Z. 6]

Schreibe alle Pronomen der Reihe nach heraus.`,

    options: [
      {
        label: 'Er, sich, der, deren, man',
        correct: true,
      },
      {
        label: 'Er, sich, deren, man',
        correct: false,
      },
      {
        label: 'Er, sich, der, deren, man, nicht',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die fünf Pronomen',
          content: `Er → Personalpronomen ✅ (steht für Escher)
sich → Reflexivpronomen ✅ («befand sich»)
der → Artikel ✅ («in der üblichen Warteschleife») – Artikel zählen bei den fünf Wortarten zu den Pronomen
deren → Relativpronomen ✅ («auf deren Umlaufbahn» → bezieht sich auf die Warteschleife)
man → Indefinitpronomen ✅ (unbestimmt: irgendwer)

⚠️ «nicht» ist eine Partikel, kein Pronomen.
⚠️ 0.5 Punkte pro richtige Antwort, für ein falsches Wort 0.5 Punkte Abzug – also nur herausschreiben, was sicher ein Pronomen ist.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Pronomen stehen für ein Nomen oder begleiten es
2️⃣  Artikel (der, die, das, ein) gehören bei den 5 Wortarten zu den Pronomen
3️⃣  «sich» nicht vergessen, es gehört zum Verb und ist ein Pronomen
4️⃣  «man» ist unbestimmt und zählt mit, «nicht» dagegen nicht`,
    },
  },

  // ── AUFGABE 17 ────────────────────────────────────────────

  {
    id: 'D3_2026_GRAMMATIK_SATZGLIEDER_1',
    year: 2026,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Satzglieder',
    loesungStatus: 'inoffiziell',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/190992/AP26_GMS3_Deutsch_Sprachpr%C3%BCfung.pdf?fp=1#page=8',

    questionText: `Aufgabe 17 (3 Punkte): Satzglieder herausschreiben und bestimmen.

«Zu seinem 19. Geburtstag hatte er ein paar Leute eingeladen.» [Z. 13]

Schreibe die Satzglieder aus dem obigen Satz heraus und bestimme sie.`,

    options: [
      {
        label: 'Zu seinem 19. Geburtstag: Präpositionalgefüge | er: Subjekt | ein paar Leute: Akkusativobjekt',
        correct: true,
      },
      {
        label: 'Zu seinem 19. Geburtstag: Präpositionalgefüge | er: Subjekt | ein paar Leute: Dativobjekt | hatte eingeladen: Prädikat',
        correct: false,
      },
      {
        label: 'Zu seinem 19. Geburtstag: Akkusativobjekt | er: Subjekt | ein paar Leute: Präpositionalgefüge',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die drei Satzglieder',
          content: `Zu seinem 19. Geburtstag → Präpositionalgefüge {Präpositionalgruppe} ✅
→ Beginnt mit der Präposition «zu».

er → Subjekt {Nominalgruppe im Nominativ} ✅
→ Probe: Wer oder was hatte eingeladen? → er

ein paar Leute → Akkusativobjekt {Nominalgruppe im Akkusativ} ✅
→ Probe: Wen oder was hatte er eingeladen? → ein paar Leute

⚠️ Das Prädikat «hatte … eingeladen» NICHT aufschreiben: Dafür gibt die Prüfung 1 Punkt Abzug.
⚠️ Pro richtige Zeile 1 Punkt.`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zuerst das Prädikat suchen, aber nicht aufschreiben
2️⃣  «Wer oder was …?» → Subjekt
3️⃣  «Wen oder was …?» → Akkusativobjekt
4️⃣  Alles, was mit einer Präposition beginnt → Präpositionalgefüge`,
    },
  },

];
