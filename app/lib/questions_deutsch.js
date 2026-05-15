export const questionsDeutsch = [

  // ════════════════════════════════════════════════════════
  // AP 2025 – WORTARTEN
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_WORT_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Wortarten',
    questionText: `Bestimme die Wortart (nur 5 Wortarten: Nomen, Verb, Adjektiv, Partikel, Pronomen):

"Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche."

Bestimme: Wie / zwei / Kinder / fuhren / dann / kleinen`,
    solution: {
      intro: `Die 5 Wortarten sind wie 5 Schubladen – jedes Wort gehört in genau eine! 🗂️`,
      steps: [
        { title: 'Die 5 Wortarten', content: `1. Nomen: Dinge/Personen (grossgeschrieben)\n2. Verb: Tätigkeiten (konjugiert)\n3. Adjektiv: Eigenschaften\n4. Pronomen: ersetzen Nomen (ich, du, er, die, der...)\n5. Partikel: ALLES andere (Präpositionen, Adverbien, Konjunktionen)` },
        { title: 'Lösungen', content: `Wie → Partikel\nzwei → Pronomen (Zahlwort)\nKinder → Nomen\nfuhren → Verb\ndann → Partikel\nkleinen → Adjektiv` },
      ],
      tip: `🎯 Trick:\n"zwei" ist Pronomen, nicht Adjektiv!\nGrossgeschrieben = fast immer Nomen\nPräpositionen, Adverbien, Konjunktionen = alle Partikel`,
      youtube: 'https://www.youtube.com/embed/2RuqDdkYFPk',
    },
  },
  {
    id: 'D_2025_WORT_2', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Wortarten',
    questionText: `Wie viele verschiedene Wortarten (nur 5) kommen in folgenden Sätzen vor?

a) "Sein Vater blieb stehen und drehte sich um."
b) "Carl wusste nicht mehr, wer den Vorschlag gemacht hatte."`,
    solution: {
      intro: `Zählen – aber jeden Typ nur einmal! 🔢`,
      steps: [
        { title: 'a) Analyse', content: `Sein → Pronomen\nVater → Nomen\nblieb stehen / drehte → Verb\nund / um → Partikel\nsich → Pronomen\n\n→ Nomen, Verb, Pronomen, Partikel\n👉 4 Wortarten` },
        { title: 'b) Analyse', content: `Carl → Nomen\nwusste / gemacht hatte → Verb\nnicht / mehr → Partikel\nwer / den → Pronomen\nVorschlag → Nomen\n\n→ Nomen, Verb, Pronomen, Partikel\n👉 4 Wortarten` },
      ],
      tip: `🎯 Jeden Typ nur EINMAL zählen!\nMehrere Verben = trotzdem nur 1 Wortart "Verb"`,
      youtube: 'https://www.youtube.com/embed/2RuqDdkYFPk',
    },
  },
  {
    id: 'D_2025_WORT_3', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Wortarten',
    questionText: `Schreibe alle Pronomen aus diesem Satz heraus:

"Da ist jemand, der die Arbeit sieht, war das höchste Lob, das sein Vater zu vergeben hatte."`,
    solution: {
      intro: `Pronomen ersetzen Nomen oder zeigen auf sie hin! 👆`,
      steps: [
        { title: 'Pronomen-Typen', content: `Personal: ich, du, er, sie, es...\nRelativ: der, die, das, welcher...\nIndefinit: jemand, niemand, etwas...\nPossessiv: mein, dein, sein, ihr...\nDemonstrativ: dieser, jener...` },
        { title: 'Lösung', content: `jemand → Indefinitpronomen\nder → Relativpronomen\ndie → Pronomen (ersetzt "Arbeit")\ndas → Relativpronomen\ndas → Demonstrativpronomen\nsein → Possessivpronomen\n\n👉 jemand, der, die, das, das, sein` },
      ],
      tip: `⚠️ "die/der/das" = Artikel wenn direkt vor Nomen\n"die/der/das" = Pronomen wenn alleine stehend!\n"die Arbeit" → Artikel\n"das war..." → Pronomen`,
      youtube: 'https://www.youtube.com/embed/2RuqDdkYFPk',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2025 – KASUS
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_KASUS_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Kasus (Fälle)',
    questionText: `Bestimme den Fall der unterstrichenen Wörter:

"Auch beim Abendbrot kam kein Gespräch in Gang. Die Stimmung war angespannt, und Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten."

Bestimme: Abendbrot / Stimmung / Ganze / Ergebnis / Hypnose`,
    solution: {
      intro: `Die 4 Fälle – Fragemethode ist der beste Trick! 🎯`,
      steps: [
        { title: 'Die 4 Fälle', content: `Nominativ (1.): Wer/Was? → Subjekt\nGenitiv (2.): Wessen? → Besitz\nDativ (3.): Wem? → indirektes Objekt\nAkkusativ (4.): Wen/Was? → direktes Objekt` },
        { title: 'Lösungen', content: `Abendbrot → beim (=bei dem) → Dativ\nStimmung → Wer/was war? → Nominativ\nGanze → Wen/was hielt er? → Akkusativ\nErgebnis → für das Ergebnis → Akkusativ\nHypnose → einer unguten Hypnose → Genitiv` },
      ],
      tip: `🎯 Dativ-Präpositionen (immer Dativ):\nmit, von, zu, aus, bei, nach, seit, gegenüber\nAkkusativ-Präpositionen (immer Akkusativ):\nfür, durch, ohne, gegen, um`,
      youtube: 'https://www.youtube.com/embed/iXiWWEkWFGQ',
    },
  },
  {
    id: 'D_NEU_KASUS_1', year: 2025, subject: 'Deutsch', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Kasus (Fälle)',
    questionText: `Bestimme den Fall:

a) Der Lehrer erklärt dem Schüler die Aufgabe.
b) Das ist das Buch meines Vaters.
c) Wir fahren mit dem Zug in die Stadt.`,
    solution: {
      intro: `Fragepronomen anwenden – immer fragen! 🙋`,
      steps: [
        { title: 'a)', content: `Lehrer → Wer erklärt? → Nominativ\nSchüler → Wem? → Dativ` },
        { title: 'b)', content: `meines Vaters → Wessen? → Genitiv` },
        { title: 'c)', content: `Zug → mit dem (Dativ-Präp.) → Dativ\nStadt → in die (wohin?) → Akkusativ` },
      ],
      tip: `🎯 Dativ-Präpositionen: mit, von, zu, aus, bei, nach, seit, gegenüber\nAkkusativ-Präpositionen: für, durch, ohne, gegen, um`,
      youtube: 'https://www.youtube.com/embed/iXiWWEkWFGQ',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2025 – AKTIV / PASSIV & ZEITFORMEN
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_PASSIV_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Bestimme: Aktiv/Passiv, Indikativ/Konjunktiv, Zeitform:

a) "Über die Schwelle wurde der Wagen getragen"
b) "das machte sein Vater"
c) "sprang Carl auf und half"
d) "damit nichts verrutschte"`,
    solution: {
      intro: `Aktiv = jemand tut etwas / Passiv = etwas wird getan 🔄`,
      steps: [
        { title: 'Definitionen', content: `Aktiv: Subjekt handelt → "Carl half"\nPassiv: Subjekt erleidet → "wurde getragen"\nIndikativ: Wirklichkeitsform\nKonjunktiv: nach "damit", "als ob", "würde"...` },
        { title: 'Lösungen', content: `a) "wurde getragen" → Passiv | Indikativ | Präteritum\nb) "machte" → Aktiv | Indikativ | Präteritum\nc) "sprang / half" → Aktiv | Indikativ | Präteritum\nd) "verrutschte" → Aktiv | Konjunktiv | Präteritum\n(damit → Zwecksatz → Konjunktiv!)` },
      ],
      tip: `🎯 Passiv erkennen: werden + Partizip II\nKonjunktiv nach: damit, als ob, würde, hätte, wäre`,
      youtube: 'https://www.youtube.com/embed/5pXHBvVbTO0',
    },
  },
  {
    id: 'D_2025_VERB_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Schreibe alle Verben in der Infinitivform:

"Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten, in die er nicht noch tiefer hineingezogen werden wollte."`,
    solution: {
      intro: `Alle Verbformen auf den Infinitiv zurückführen! ↩️`,
      steps: [
        { title: 'Verben finden', content: `begann → beginnen\nhalten → halten\nhineingezogen → hineinziehen\nwerden → werden\nwollte → wollen` },
        { title: 'Reihenfolge', content: `👉 beginnen, halten, hineinziehen, werden, wollen\n\n5 Verben – auch Partizipien und Hilfsverben zählen!` },
      ],
      tip: `🎯 Verbformen erkennen:\nPartizipien (hineingezogen) → auch Verben!\nzu + Infinitiv (zu halten) → auch Verb!\nHilfsverben (werden, wollen) → auch zählen!`,
      youtube: 'https://www.youtube.com/embed/5pXHBvVbTO0',
    },
  },
  {
    id: 'D_2025_PLUS_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Setze ins Plusquamperfekt:

"Über die Schwelle in den Korridor wurde der Wagen getragen, das machte sein Vater."`,
    solution: {
      intro: `Plusquamperfekt = die Vergangenheit VOR der Vergangenheit 🕰️`,
      steps: [
        { title: 'Formeln', content: `Aktiv: hatte/war + Partizip II\nPassiv: war + Partizip II + worden\n\n"worden" (nicht "geworden"!) im Passiv!` },
        { title: 'Lösung', content: `"wurde getragen" → war getragen worden\n"machte" → hatte gemacht\n\n👉 "war der Wagen getragen worden, das hatte sein Vater gemacht."` },
      ],
      tip: `🎯 Plusquamperfekt:\nAktiv: hatte + Partizip II\nPassiv: war + Partizip II + worden`,
      youtube: 'https://www.youtube.com/embed/5pXHBvVbTO0',
    },
  },
  {
    id: 'D_NEU_PASSIV_1', year: 2025, subject: 'Deutsch', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Forme von Aktiv in Passiv um (Präteritum):

a) Der Lehrer korrigierte die Aufsätze.
b) Maria öffnete das Fenster.
c) Die Schüler lösten die Aufgaben.`,
    solution: {
      intro: `Aktiv → Passiv: Objekt wird zum Subjekt! 🔄`,
      steps: [
        { title: 'Formel', content: `Aktiv: Subjekt + Verb + Objekt\nPassiv Präteritum: (altes Objekt) + wurde + Partizip II + (von + altem Subjekt)` },
        { title: 'Lösungen', content: `a) Die Aufsätze wurden (vom Lehrer) korrigiert.\nb) Das Fenster wurde (von Maria) geöffnet.\nc) Die Aufgaben wurden (von den Schülern) gelöst.` },
      ],
      tip: `🎯 Passiv-Formel:\nPräsens: wird + Partizip II\nPräteritum: wurde + Partizip II\nPerfekt: ist + Partizip II + worden`,
      youtube: 'https://www.youtube.com/embed/5pXHBvVbTO0',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2025 – PRÄPOSITIONEN
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_PRAEP_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Präpositionen',
    questionText: `Schreibe alle Präpositionen heraus:

"Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten, in die er nicht tiefer hineingezogen werden wollte. Alles mit dem Servierwagen zurück in die Küche gefahren, mit verchromtem Gestell. Rollgeräusch auf dem Teppich."`,
    solution: {
      intro: `Präpositionen stehen vor Nomen und zeigen Beziehungen! 📍`,
      steps: [
        { title: 'Was sind Präpositionen?', content: `Ort: in, auf, unter, über, neben, bei, vor, hinter, an\nZeit: vor, nach, seit, bis, während\nArt: mit, ohne, durch\nGrund: wegen, trotz, dank` },
        { title: 'Lösung', content: `für → (für das Ergebnis)\nin → (in die er...)\nmit → (mit dem Servierwagen)\nin → (in die Küche)\nmit → (mit verchromtem Gestell)\nauf → (auf dem Teppich)\n\n👉 für, in, mit, in, mit, auf` },
      ],
      tip: `⚠️ "zurück" hier = Partikel (kein eigenes Nomen danach)\n"hinein" = Verbpräfix, keine Präposition\nNur echte Präpositionen vor Nomen zählen!`,
      youtube: 'https://www.youtube.com/embed/Sk0Kd8DPLHU',
    },
  },
  {
    id: 'D_NEU_PRAEP_1', year: 2025, subject: 'Deutsch', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Präpositionen',
    questionText: `Ergänze die richtige Präposition und den richtigen Artikel:

a) Wir gehen ___ Schule. (Ziel)
b) Das Buch liegt ___ Tisch. (Ort)
c) Er wartet ___ seinen Freund.`,
    solution: {
      intro: `Präpositionen bestimmen den Fall! 🎯`,
      steps: [
        { title: 'Wechselpräpositionen', content: `in, an, auf, über, unter, vor, hinter, neben, zwischen\nWohin? (Bewegung) = Akkusativ\nWo? (Ruhe) = Dativ` },
        { title: 'Lösungen', content: `a) in die Schule (wohin? → Akkusativ)\nb) auf dem Tisch (wo? → Dativ)\nc) auf seinen Freund (warten auf = Akkusativ)` },
      ],
      tip: `🎯 Dativ-Präpositionen (immer):\naus, bei, mit, nach, seit, von, zu, gegenüber\nAkkusativ-Präpositionen (immer):\nbis, durch, für, gegen, ohne, um`,
      youtube: 'https://www.youtube.com/embed/Sk0Kd8DPLHU',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2025 – SATZGLIEDER
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_SATZ_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Satzglieder',
    questionText: `Bestimme die Satzglieder:

"Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche."

- sie
- den kleinen Wagen
- durch den Flur
- in die Küche`,
    solution: {
      intro: `Satzglieder sind Bausteine des Satzes! 🏗️`,
      steps: [
        { title: 'Die Satzglieder', content: `Subjekt: Wer/Was? → Nominativ\nAkkusativobjekt: Wen/Was?\nDativobjekt: Wem?\nPräpositionalgefüge: Präp. + Nomen` },
        { title: 'Lösungen', content: `sie → Wer fuhr? → Subjekt\nden kleinen Wagen → Was fuhren sie? → Akkusativobjekt\ndurch den Flur → Präp. + Nomen → Präpositionalgefüge\nin die Küche → Präp. + Nomen → Präpositionalgefüge` },
      ],
      tip: `🎯 Fragemethode:\n1. Wer/Was? → Subjekt\n2. Wen/Was? → Akkusativobjekt\n3. Wem? → Dativobjekt\n4. Präp. + Nomen → Präpositionalgefüge`,
      youtube: 'https://www.youtube.com/embed/KuBOgjz1XUU',
    },
  },
  {
    id: 'D_2025_SATZ_2', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Satzglieder',
    questionText: `Ordne die Satzgliedschemen zu:
A = Subj. – Prädik. – Präpositionalgefüge
B = Präpositionalgefüge – Prädik. – Akkobj. – Subj.
C = Subj. – Prädik. – Akkobj. – Präpositionalgefüge
D = Präpositionalgefüge – Prädik. – Subj.

1. "Am Abend übermannte ihn das Heimweh."
2. "Sein Vater hielt ihn am Arm."
3. "Über die Schwelle wurde der Wagen getragen."`,
    solution: {
      intro: `Erst Satzglieder bestimmen, dann Schema ablesen! 📋`,
      steps: [
        { title: '1. "Am Abend übermannte ihn das Heimweh"', content: `"Am Abend" → Präpositionalgefüge\n"übermannte" → Prädikat\n"ihn" → Akkusativobjekt\n"das Heimweh" → Subjekt\n👉 B` },
        { title: '2. "Sein Vater hielt ihn am Arm"', content: `"Sein Vater" → Subjekt\n"hielt" → Prädikat\n"ihn" → Akkusativobjekt\n"am Arm" → Präpositionalgefüge\n👉 C` },
        { title: '3. "Über die Schwelle wurde getragen"', content: `"Über die Schwelle" → Präpositionalgefüge\n"wurde getragen" → Prädikat (Passiv)\n"der Wagen" → Subjekt\n👉 D` },
      ],
      tip: `🎯 Im deutschen Satz: Prädikat steht an 2. Stelle!\nBei Passiv: Subjekt = das Ding, das "erleidet"`,
      youtube: 'https://www.youtube.com/embed/KuBOgjz1XUU',
    },
  },
  {
    id: 'D_NEU_SATZ_1', year: 2025, subject: 'Deutsch', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Satzglieder',
    questionText: `Bestimme alle Satzglieder:

a) "Der Schüler gibt der Lehrerin das Heft."
b) "Nach dem Unterricht geht Maria schnell nach Hause."`,
    solution: {
      intro: `Jeden Satzbaustein einzeln befragen! 🔍`,
      steps: [
        { title: 'a)', content: `Der Schüler → Subjekt\ngibt → Prädikat\nder Lehrerin → Dativobjekt\ndas Heft → Akkusativobjekt` },
        { title: 'b)', content: `Nach dem Unterricht → Präpositionalgefüge\ngeht → Prädikat\nMaria → Subjekt\nnach Hause → Präpositionalgefüge` },
      ],
      tip: `🎯 Umstellprobe: Wenn umstellbar und Satz bleibt korrekt → eigenes Satzglied!\n"Maria geht nach dem Unterricht nach Hause." ✓`,
      youtube: 'https://www.youtube.com/embed/KuBOgjz1XUU',
    },
  },

  // ════════════════════════════════════════════════════════
  // PLURAL
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_PLURAL_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Plural-Formen',
    questionText: `Bilde den Plural:

Fluss / Hemd / Land / Ergebnis / Wägelchen / Korridor / Ankunft / Flucht`,
    solution: {
      intro: `Deutschen Plural – leider kein einheitliches System! 📚`,
      steps: [
        { title: 'Lösungen', content: `Fluss → Flüsse\nHemd → Hemden\nLand → Länder\nErgebnis → Ergebnisse\nWägelchen → Wägelchen (unveränderlich!)\nKorridor → Korridore\nAnkunft → Ankünfte\nFlucht → Fluchten` },
      ],
      tip: `🎯 Unveränderlich im Plural:\nWörter auf: -er, -el, -chen, -lein\nz.B. Lehrer, Onkel, Mädchen, Wägelchen`,
      youtube: 'https://www.youtube.com/embed/VB3RFrHKp-s',
    },
  },
  {
    id: 'D_2024_PLURAL_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Plural-Formen',
    questionText: `Bilde den Plural:

Braut / Kegelbahn / Nachfolger / Begräbnis / Schloss / Ruf`,
    solution: {
      intro: `Plural üben – je mehr desto besser! 💪`,
      steps: [
        { title: 'Lösungen', content: `Braut → Bräute\nKegelbahn → Kegelbahnen\nNachfolger → Nachfolger (unveränderlich!)\nBegräbnis → Begräbnisse\nSchloss → Schlösser\nRuf → Rufe` },
      ],
      tip: `🎯 Maskulin auf -er: meist unveränderlich\nNeutrum auf -nis: → -nisse\nFeminin: meist -en oder Umlaut+e`,
      youtube: 'https://www.youtube.com/embed/VB3RFrHKp-s',
    },
  },
  {
    id: 'D_NEU_PLURAL_1', year: 2025, subject: 'Deutsch', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Plural-Formen',
    questionText: `Bilde den Plural:

Maus / Kind / Auto / Frau / Baum / Blatt / Fenster / Zeitung`,
    solution: {
      intro: `Pluralformen üben! 💪`,
      steps: [
        { title: 'Lösungen', content: `Maus → Mäuse\nKind → Kinder\nAuto → Autos\nFrau → Frauen\nBaum → Bäume\nBlatt → Blätter\nFenster → Fenster\nZeitung → Zeitungen` },
      ],
      tip: `🎯 Häufige Muster:\n-e: Baum→Bäume\n-er: Kind→Kinder\n-en: Frau→Frauen\n-s: Auto→Autos\nunverändert: Fenster`,
      youtube: 'https://www.youtube.com/embed/VB3RFrHKp-s',
    },
  },

  // ════════════════════════════════════════════════════════
  // WORTSCHATZ
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_WORTSCH_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Wortschatz und Wortbildung',
    questionText: `a) Synonym für "ausgedienten" (abgelegt, nicht mehr gebraucht)
b) Synonym für "Scheppern"
c) Antonym für "herabhängend"
d) Nominalisiere: sauber / gewissenhaft / dunkel`,
    solution: {
      intro: `Wortschatz ist wie ein Werkzeugkasten! 🔧`,
      steps: [
        { title: 'a) + b) Synonyme', content: `ausgedienten → abgelegten, veralteten, überholten\nScheppern → Klappern, Klingeln, Rumpeln, Klirren` },
        { title: 'c) Antonym', content: `herabhängend ↔ hochgezogen, straff, angespannt` },
        { title: 'd) Nominalisierung', content: `sauber → die Sauberkeit / das Saubere\ngewissenhaft → die Gewissenhaftigkeit / das Gewissenhafte\ndunkel → die Dunkelheit / das Dunkle` },
      ],
      tip: `🎯 Nominalisierung:\n-heit: sauber → Sauberkeit\n-keit: gewissenhaft → Gewissenhaftigkeit\noder: das + grossgeschriebenes Adjektiv`,
      youtube: 'https://www.youtube.com/embed/6_GHJXlzAfc',
    },
  },
  {
    id: 'D_2024_WORTSCH_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Wortschatz und Wortbildung',
    questionText: `a) Synonym für "darauf setzte" (er hoffte darauf)
b) Synonym für "ausstaffiert" (gekleidet)
c) Antonym für "ernsthaft" (nicht "unernsthaft")
d) Antonym für "zustande bringen" (nicht "nicht zustande bringen")`,
    solution: {
      intro: `Elegante Synonyme und Antonyme! 🗝️`,
      steps: [
        { title: 'a) + b) Synonyme', content: `darauf setzte → hoffte, damit rechnete, darauf vertraute\nausstaffiert → gekleidet, herausgeputzt, gestylt` },
        { title: 'c) + d) Antonyme', content: `ernsthaft ↔ scherzhaft, ironisch, humorvoll\nzustande bringen ↔ vermasseln, verpatzen, versauen` },
      ],
      tip: `🎯 Für den Aufsatz – elegante Antonyme:\nstatt "nicht gut machen" → vermasseln, verpatzen\nstatt "nicht mögen" → ablehnen, verachten`,
      youtube: 'https://www.youtube.com/embed/6_GHJXlzAfc',
    },
  },
  {
    id: 'D_NEU_WORTSCH_1', year: 2025, subject: 'Deutsch', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Wortschatz und Wortbildung',
    questionText: `a) Nenne 2 Synonyme: schön / schnell / traurig
b) Nenne Antonyme: fleissig / laut / gross
c) Nominalisiere: laut / freundlich / tapfer`,
    solution: {
      intro: `Reicher Wortschatz = bessere Aufsätze! ✍️`,
      steps: [
        { title: 'a) Synonyme', content: `schön → wunderschön, hübsch, anmutig\nschnell → rasch, flink, zügig\ntraurig → betrübt, niedergeschlagen` },
        { title: 'b) Antonyme', content: `fleissig ↔ faul\nlaut ↔ leise\ngross ↔ klein / winzig` },
        { title: 'c) Nominalisierung', content: `laut → die Lautstärke / das Laute\nfreundlich → die Freundlichkeit\ntapfer → die Tapferkeit` },
      ],
      tip: `🎯 Synonyme machen Aufsätze interessanter!\nStatt "schön" → herrlich, bezaubernd, reizvoll...`,
      youtube: 'https://www.youtube.com/embed/6_GHJXlzAfc',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2024 – WORTARTEN & PARTIKELN
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2024_WORT_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Wortarten',
    questionText: `Bestimme die Wortart (nur 5 Wortarten):

"Er hatte das Restaurant in kürzester Zeit zu seinem früheren Ruf geführt."

Bestimme: Er / in / zu / früheren / Ruf / geführt`,
    solution: {
      intro: `5 Wortarten – systematisch zuordnen! 🗂️`,
      steps: [
        { title: 'Lösungen', content: `Er → Pronomen\nin → Partikel (Präposition)\nzu → Partikel (Präposition)\nfrüheren → Adjektiv\nRuf → Nomen\ngeführt → Verb (Partizip II)` },
      ],
      tip: `⚠️ Partikeln = alles was nicht Nomen/Verb/Adjektiv/Pronomen ist!\nPräpositionen (in, zu, mit), Adverbien (dann, auch), Konjunktionen (und, aber, weil)`,
      youtube: 'https://www.youtube.com/embed/2RuqDdkYFPk',
    },
  },
  {
    id: 'D_2024_PART_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Wortarten',
    questionText: `a) Schreibe alle Partikeln heraus:
"Ich war fünfzehn, Internatsschüler, und hatte noch kein Mädchen geküsst, als ich bei den Feiern zu fotografieren begann."

b) Schreibe alle Konjunktionen heraus:
"Und weil er auf alles mit dem Blick des Geschäftsmannes sah und gleichzeitig keinen falschen Respekt hatte, wie er sagte, wunderte ich mich nicht, dass er mit dem Vorschlag kam."`,
    solution: {
      intro: `Partikeln = alle 5-Wortarten-Partikel. Konjunktionen verbinden Sätze! 🔗`,
      steps: [
        { title: 'a) Partikeln', content: `und → Partikel\nnoch → Partikel\nals → Partikel\nbei → Partikel\nzu → Partikel\n\n👉 und, noch, als, bei, zu` },
        { title: 'b) Konjunktionen', content: `Und → Konjunktion\nweil → Konjunktion\nund → Konjunktion\nwie → Konjunktion\ndass → Konjunktion\n\n👉 Und, weil, und, wie, dass` },
      ],
      tip: `🎯 Konjunktionen verbinden Sätze:\nNebenordnend: und, aber, oder, denn\nUnterordnend: weil, dass, wenn, als, ob, damit`,
      youtube: 'https://www.youtube.com/embed/2RuqDdkYFPk',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2024 – KASUS
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2024_KASUS_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Kasus (Fälle)',
    questionText: `Bestimme den Fall:

"Man hatte meinem Bruder gegenüber mehreren Mitbewerbern den Vorzug gegeben, als der Mietvertrag ausgeschrieben worden war."

- Man
- meinem Bruder
- den Vorzug
- der Mietvertrag`,
    solution: {
      intro: `Fragemethode anwenden! 🙋`,
      steps: [
        { title: 'Lösungen', content: `Man → Wer hatte gegeben? → Nominativ\nmeinem Bruder → gegenüber = Dativ → Dativ\nden Vorzug → Wen/Was hatte man gegeben? → Akkusativ\nder Mietvertrag → Wer war ausgeschrieben? → Nominativ` },
      ],
      tip: `🎯 Artikel als Signale:\nNOM: der/die/das\nGEN: des/der\nDAT: dem/der / "meinem"\nAKK: den/die/das / "den"`,
      youtube: 'https://www.youtube.com/embed/iXiWWEkWFGQ',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2024 – AKTIV/PASSIV & ZEITFORMEN
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2024_PASSIV_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Bestimme: Aktiv/Passiv, Indikativ/Konjunktiv, Zeitform:

a) "Ich war damit aufgewachsen,"
b) "wie unser Vater sie ironisch nannte,"
c) "wie sie von allen ernsthaft tituliert wurde,"`,
    solution: {
      intro: `Drei Merkmale pro Satzteil – systematisch! 📋`,
      steps: [
        { title: 'a) "war aufgewachsen"', content: `Aktiv | Indikativ | Plusquamperfekt\n(war + Partizip II)` },
        { title: 'b) "nannte"', content: `Aktiv | Indikativ | Präteritum` },
        { title: 'c) "tituliert wurde"', content: `Passiv (wurde + Partizip II) | Indikativ | Präteritum` },
      ],
      tip: `🎯 Passiv: wurde/wird + Partizip II\nPlusquamperfekt: war/hatte + Partizip II\nPräteritum: einfache Vergangenheit (nannte, ging...)`,
      youtube: 'https://www.youtube.com/embed/5pXHBvVbTO0',
    },
  },
  {
    id: 'D_2024_VERB_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `a) Alle Verben im Infinitiv:
"Das Hotel blieb im Sommer geschlossen, unser Vater fuhr alle paar Tage hin, um nach dem Rechten zu sehen."

b) Wie viele verschiedene Zeitformen?
"Ich war fünfzehn und hatte noch kein Mädchen geküsst, als ich bei den Feiern zu fotografieren begann."`,
    solution: {
      intro: `Verben finden – auch Partizipien zählen! 🔍`,
      steps: [
        { title: 'a) Infinitive', content: `blieb → bleiben\ngeschlossen → schliessen\nfuhr hin → hinfahren\nzu sehen → sehen\n\n👉 bleiben, schliessen, hinfahren, sehen` },
        { title: 'b) Zeitformen', content: `"war fünfzehn" → Präteritum\n"hatte geküsst" → Plusquamperfekt\n"begann" → Präteritum\n\n→ Präteritum + Plusquamperfekt\n👉 2 Zeitformen` },
      ],
      tip: `🎯 Zeitformen:\nPräteritum: ging, kam, nannte\nPerfekt: ist gegangen, hat gemacht\nPlusquamperfekt: war gegangen, hatte gemacht`,
      youtube: 'https://www.youtube.com/embed/5pXHBvVbTO0',
    },
  },
  {
    id: 'D_2024_PLUS_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Aktiv, Passiv und Zeitformen',
    questionText: `Setze ins Plusquamperfekt:

"Das Hotel blieb im Sommer geschlossen, unser Vater fuhr alle paar Tage hin, um nach dem Rechten zu sehen."`,
    solution: {
      intro: `Plusquamperfekt = Vergangenheit in der Vergangenheit 🕰️`,
      steps: [
        { title: 'Sein-Verben', content: `bleiben, fahren → Bewegung/Zustand\n→ war + Partizip II` },
        { title: 'Lösung', content: `"blieb geschlossen" → war geschlossen geblieben\n"fuhr hin" → war hingefahren\n\n👉 "Das Hotel war geschlossen geblieben, unser Vater war hingefahren, um nach dem Rechten zu sehen."` },
      ],
      tip: `🎯 Sein-Verben (mit "war"):\nBewegung: fahren, gehen, fliegen\nZustand: bleiben, werden\nAlle anderen → hatte + Partizip II`,
      youtube: 'https://www.youtube.com/embed/5pXHBvVbTO0',
    },
  },

  // ════════════════════════════════════════════════════════
  // AP 2024 – PRÄPOSITIONALGEFÜGE & SATZGLIEDER
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2024_PRAEP_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Präpositionen',
    questionText: `Schreibe alle Präpositionalgefüge heraus:

"Kaum jemand aus den umliegenden Dörfern schlug sein Angebot aus, aber die Leute kamen auch aus der Stadt, entschieden sich für eine der drei Möglichkeiten und liessen sich von unserem Vater beraten."`,
    solution: {
      intro: `Präpositionalgefüge = Präposition + Nomengruppe 📍`,
      steps: [
        { title: 'Alle finden', content: `aus den umliegenden Dörfern\naus der Stadt\nfür eine der drei Möglichkeiten\nvon unserem Vater\n\n👉 4 Präpositionalgefüge` },
      ],
      tip: `🎯 Präpositionalgefüge:\nPräp. + (Art.) + (Adj.) + Nomen\n"aus den umliegenden Dörfern" = aus + den + umliegenden + Dörfern`,
      youtube: 'https://www.youtube.com/embed/Sk0Kd8DPLHU',
    },
  },
  {
    id: 'D_2024_SATZ_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Satzglieder',
    questionText: `Ordne die Satzgliedschemen zu:
A = Subj. – Prädik. – Akkobj. – Präpgefüge – Präpgefüge
B = Akkobj. – Prädik. – Subj.
C = Subj. – Prädik. – Präpgefüge
D = Subj. – Prädik. – Akkobj.

1. "Das bisschen Knipserei würde ich bringen."
2. "Jemand schlug sein Angebot aus."
3. "Er hatte das Restaurant in kürzester Zeit zu seinem Ruf geführt."
4. "Das Hotel blieb im Sommer geschlossen."`,
    solution: {
      intro: `Satzglieder bestimmen, dann Schema ablesen! 📋`,
      steps: [
        { title: '1. + 2.', content: `1. "Knipserei" → Akkobj., "ich" → Subj. → B\n2. "Jemand" → Subj., "Angebot" → Akkobj. → D` },
        { title: '3. + 4.', content: `3. "Er" → Subj., "Restaurant" → Akkobj., 2× Präpgefüge → A\n4. "Hotel" → Subj., "im Sommer" → Präpgefüge → C` },
      ],
      tip: `🎯 Reihenfolge:\n1. Prädikat (Verb)\n2. Subjekt: Wer/was?\n3. Akkusativobjekt: Wen/was?\n4. Rest: Präpositionalgefüge`,
      youtube: 'https://www.youtube.com/embed/KuBOgjz1XUU',
    },
  },

  // ════════════════════════════════════════════════════════
  // TEXTVERSTEHEN
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_TEXT_1', year: 2025, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Textverstehen',
    questionText: `Text "Der Spaziergang" (AP 2025) – Stimmt oder stimmt nicht?

1. Zwei Kinder fahren den Wagen durch den Flur.
2. Carls Mutter ist eher klein.
3. Carl ist beim Abendessen unwohl.
4. Carl ist Einzelkind.`,
    solution: {
      intro: `Textverstehen – immer Textstelle suchen! 🔎`,
      steps: [
        { title: 'Lösungen', content: `1. stimmt nicht (Carl + Vater fuhren, "wie zwei Kinder")\n2. stimmt ("was sie noch kleiner erscheinen liess")\n3. stimmt (Hypnose-Gefühl, angespannte Stimmung)\n4. stimmt ("Carl Bischoff, einziges Kind")` },
      ],
      tip: `🎯 Textverstehen-Strategie:\n1. Schlüsselwort suchen\n2. Textstelle finden\n3. Genau lesen\n4. "Fast richtig" = stimmt NICHT!`,
      youtube: 'https://www.youtube.com/embed/N5vJSNXPEwA',
    },
  },
  {
    id: 'D_2024_TEXT_1', year: 2024, subject: 'Deutsch', exam: 'Sprachprüfung',
    group: 'Alte Prüfungen', topic: 'Textverstehen',
    questionText: `Text "Der Fotograf" (AP 2024) – Stimmt oder stimmt nicht?

1. Der Bruder tritt beruflich in die Fussstapfen des Vaters.
2. Der Erzähler kaufte sich einen Fotoapparat.
3. Der Bruder eröffnet eine Pizzeria.
4. Fotografieren gilt dem Vater als geringe Kunst.`,
    solution: {
      intro: `Immer im Text nachschauen! 🔍`,
      steps: [
        { title: 'Lösungen', content: `1. stimmt nicht (Bruder = Pizzeria, nicht Fotograf)\n2. stimmt nicht (Vater gab ihm Fotoapparat)\n3. stimmt ("eine Pizzeria eröffnete, Kegelbahn...")\n4. stimmt ("falschen Künsten" = Fotografie laut Vater)` },
      ],
      tip: `🎯 Immer beide Möglichkeiten prüfen:\n"stimmt" nur wenn exakt im Text bestätigt\n"stimmt nicht" auch wenn Text gar nichts sagt`,
      youtube: 'https://www.youtube.com/embed/N5vJSNXPEwA',
    },
  },

  // ════════════════════════════════════════════════════════
  // AUFSATZ
  // ════════════════════════════════════════════════════════
  {
    id: 'D_2025_AUFSATZ_1', year: 2025, subject: 'Deutsch', exam: 'Schreibaufgabe',
    group: 'Alte Prüfungen', topic: 'Aufsatz und Schreiben',
    questionText: `Text "Die Neue" (AP 2025) – Wähle eine Aufgabe:

1) Du bist der Ich-Erzähler. Die Woche ist vorbei. Erzähle wie es dir ergangen ist.
2) Zwei Tagebucheinträge aus Sicht der neuen Schülerin: Abend vor + Abend nach dem ersten Schultag.
3) Warum wünschen wir uns Veränderung, wollen aber eigentlich alles gleich?`,
    solution: {
      intro: `Aufsatz = 2/3 der Note – Zeit gut einteilen! ✍️`,
      steps: [
        { title: '📋 Checkliste', content: `✓ Eigener Titel setzen\n✓ Bezug auf den Text\n✓ Einleitung → Hauptteil → Schluss\n✓ 20 Min planen, 45 Min schreiben, 10 Min lesen` },
        { title: 'Tipps je Aufgabe', content: `1) Ich-Erzähler: Gefühle zeigen, Woche beschreiben\n2) Tagebuch: Datum + "Liebes Tagebuch", Vorher/Nachher\n3) Reflexion: These, Beispiele aus Text, eigene Meinung` },
      ],
      tip: `🎯 Häufige Fehler:\n❌ Kein Titel\n❌ Kein Textbezug\n❌ Kein Schluss\n❌ Immer gleiche Wörter`,
      youtube: 'https://www.youtube.com/embed/N5vJSNXPEwA',
    },
  },
  {
    id: 'D_2024_AUFSATZ_1', year: 2024, subject: 'Deutsch', exam: 'Schreibaufgabe',
    group: 'Alte Prüfungen', topic: 'Aufsatz und Schreiben',
    questionText: `Text "Die Abschiedsparty" (AP 2024) – Wähle eine Aufgabe:

1) Du bist Miles. Erzähle warum nur zwei Personen zur Party kamen.
2) Vor- und Nachteile: Mit 16 Jahren ins Internat.
3) Tagebucheintrag aus der Sicht von Miles' Mutter nach dem Fest.`,
    solution: {
      intro: `Aufsatz AP 2024 – Tipps für jede Aufgabe! ✍️`,
      steps: [
        { title: '1) Erzählung als Miles', content: `Ich-Perspektive halten\nErklären: warum keine echten Freunde?\nMiles ist NICHT enttäuscht → zeigen!\nTextbezug: Cafeteria, Theatergruppe` },
        { title: '2) Vor- und Nachteile', content: `Vorteile: Selbstständigkeit, neuer Start, Freunde\nNachteile: Heimweh, kein Familienanschluss\nEigene Meinung am Schluss\nTitel: z.B. "Freiheit oder Verlust?"` },
        { title: '3) Tagebuch Mutter', content: `Datum nicht vergessen!\nPerspektive der Mutter: enttäuscht aber versteht Miles\nTextbezug: Artischocken-Dip, Girlanden, Tischbomben` },
      ],
      tip: `✓ Eigener Titel\n✓ Textbezug\n✓ Klarer Aufbau\n✓ Rechtschreibung prüfen`,
      youtube: 'https://www.youtube.com/embed/N5vJSNXPEwA',
    },
  },
  {
    id: 'D_NEU_AUFSATZ_1', year: 2025, subject: 'Deutsch', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Aufsatz und Schreiben',
    questionText: `Schreibe einen Tagebucheintrag (ca. 150 Wörter):

Du bist in eine neue Stadt gezogen und hattest deinen ersten Schultag.
Schreibe über deine Gedanken und Gefühle.

Achte auf: Datum, "Liebes Tagebuch", Ich-Perspektive, eigener Titel`,
    solution: {
      intro: `Tagebucheintrag üben – häufige Aufgabe! 📖`,
      steps: [
        { title: 'Aufbau', content: `[Ort, Datum]\nLiebes Tagebuch,\nEinleitung: Was ist passiert?\nHauptteil: Gefühle, Gedanken\nSchluss: Ausblick/Hoffnung` },
        { title: 'Sprache', content: `✓ Ich-Perspektive durchhalten\n✓ Gefühle direkt benennen\n✓ Kurze + lange Sätze mischen\n✓ Abwechslungsreicher Wortschatz` },
      ],
      tip: `🎯 Bewertung:\n• Perspektive (Ich) konsequent?\n• Gefühle sichtbar?\n• Aufbau klar?\n• Sprache lebendig?`,
      youtube: 'https://www.youtube.com/embed/N5vJSNXPEwA',
    },
  },
];