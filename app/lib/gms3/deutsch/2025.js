// app/lib/gms3/deutsch/2025.js
// Aufnahmeprüfung 2025 – Deutsch GMS 3 (Pädagogische Maturitätsschule Kreuzlingen)
// Sprachprüfung: Textauszug «Der Spaziergang» (Carl, Eltern wollen auswandern)
// Schreibaufgabe: Textauszug «Die Neue» (Ich-Erzähler, neue Mitschülerin)

export const questions2025 = [

  // ════════════════════════════════════════════════════════════
  // TEIL 1 – SPRACHPRÜFUNG
  // ════════════════════════════════════════════════════════════

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D3_2025_TEXTVERST_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Textverständnis',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=1',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Zwei Kinder fahren den Wagen durch den Flur.
2. Carls Mutter ist eher klein.
3. Im Herbst 77 ist Carls Vater gerade 50 Jahre alt geworden.
4. Carl ist beim Abendessen unwohl.
5. Carl erinnert sich daran, wie die Mutter ihn früher umsorgte.
6. Die Mutter ist kräftig gebaut.
7. Carls Mutter weiss, was sie will.
8. Carl ist Einzelkind.
9. Carl studiert noch.
10. Carl erinnert sich daran, wie der Vater ihn früher umsorgte.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 2, 4, 5, 6, 7, 8, 9 | stimmt nicht: 1, 3, 10',
        correct: true,
      },
      {
        label: 'stimmt: 2, 4, 5, 6, 7, 8 | stimmt nicht: 1, 3, 9, 10',
        correct: false,
      },
      {
        label: 'stimmt: 1, 2, 4, 5, 6, 8, 9 | stimmt nicht: 3, 7, 10',
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
          content: `1. ❌ stimmt nicht – «Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur» (Z. 30) → es sind CARL und sein VATER (zwei Erwachsene), nicht zwei Kinder. «Wie zwei Kinder» ist ein Vergleich!

2. ✅ stimmt – «was sie noch kleiner erscheinen liess» (Z. 38–39) → sie ist eher klein.

3. ❌ stimmt nicht – Im Herbst 77 war es ein Foto der MUTTER (Z. 10: «Daneben seine Mutter … Herbst 77»). Der Vater «war gerade fünfzig Jahre alt geworden» (Z. 3), aber das Foto von Herbst 77 zeigt die Mutter, nicht den Vater.

4. ✅ stimmt – «Auch beim Abendbrot kam kein Gespräch in Gang. Die Stimmung war angespannt» (Z. 20) + Carl hält alles für eine «ungute Hypnose» → er ist unwohl.

5. ✅ stimmt – «Ach Carl, mach dich doch ein bisschen lang. Und hier, nimm noch das Kissen…» (Z. 34–35) → Erinnerung daran, wie die Mutter ihn auf dem Sofa umsorg te.

6. ✅ stimmt – «leicht zu erkennen, wie viel Kraft in ihr steckte» (Z. 39–40) → kräftig gebaut.

7. ✅ stimmt – «wie viel Zielstrebigkeit» (Z. 40) → sie weiss, was sie will.

8. ✅ stimmt – «Carl Bischoff, einziges Kind von Inge und Walter Bischoff» (Z. 46) → Einzelkind.

9. ✅ stimmt – «zurzeit Student» (Z. 47) → er studiert noch (auch wenn «nur dünn und mit Bleistift eingetragen»).

10. ❌ stimmt nicht – Die Erinnerung an das Umsorg en auf dem Sofa ist eine Erinnerung an die MUTTER («Ach Carl, mach dich doch ein bisschen lang…», Z. 34), nicht den Vater.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «Wie zwei Kinder» = Vergleich → es sind Carl und sein Vater → Nr. 1 stimmt nicht
2️⃣  Herbst 77-Foto = Mutter, nicht Vater → Nr. 3 stimmt nicht
3️⃣  Sofa-Erinnerung = Mutter («nimm noch das Kissen») → Nr. 10 stimmt nicht
4️⃣  «einziges Kind» (Z. 46) → Einzelkind → Nr. 8 stimmt
5️⃣  «zurzeit Student» → Nr. 9 stimmt (auch wenn mit Bleistift = vorläufig)`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D3_2025_WORTSCHATZ_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=2',

    questionText: `Aufgabe 2 (2 Punkte): Synonyme finden.

a) «Schweigend gingen sie weiter flussaufwärts – Mutter, Vater, Kind zwischen all den Attrappen ihres plötzlich ausgedienten, abgepfiffenen Lebens.» [Z. 18]
Finde für das unterstrichene Wort «ausgedienten» einen Begriff oder eine Wendung mit entsprechender Bedeutung, der oder die im obigen Satz eingesetzt werden kann.

b) «Sein dunkles Rollgeräusch auf dem Teppich, altvertraut, das leise Scheppern des Geschirrs.» [Z. 24]
Finde für das unterstrichene Wort «Scheppern» einen Begriff oder eine Wendung mit entsprechender Bedeutung, der oder die im obigen Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'a: beendeten / abgelegten / nicht mehr gebrauchten / veralteten | b: Klappern / Klingeln / Rumpeln / Poltern',
        correct: true,
      },
      {
        label: 'a: vergessenen / traurigen | b: Lärmen / Brüllen / Toben',
        correct: false,
      },
      {
        label: 'a: abgelegten | b: Schnattern / Raunen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «ausgedient» und «Scheppern»',
          content: `«ausgedient» = nicht mehr in Gebrauch, überholt, abgelegt:
→ ✅ beendet, abgelegt, nicht mehr gebraucht, veraltet, abgenutzt
→ ❌ vergessen → anderer Aspekt (kein aktiver Entschluss zum Ablegen)
→ ❌ traurig → keine Bedeutungsähnlichkeit

«Scheppern» = ein metallisch-klapperiges, helles Geräusch (von Geschirr, Blech):
→ ✅ Klappern, Klingeln, Rumpeln, Poltern
→ ❌ Lärmen → zu unspezifisch, nicht «leise» möglich
→ ❌ Brüllen/Toben → keine Bedeutungsähnlichkeit

⚠️ «Lärmen» ist laut ausgeschlossen, weil es im Satz «leise Scheppern» heisst!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «ausgedient» → Dienst geleistet, jetzt vorbei → abgelegt/nicht mehr gebraucht
2️⃣  «Scheppern» → Klang von Geschirr → Klappern/Klingeln ✅
3️⃣  Kontext beachten: «leise Scheppern» → das Ersatzwort muss auch «leise» möglich machen
4️⃣  Ersatzwort in den Satz einsetzen und auf Passung prüfen`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D3_2025_WORTSCHATZ_2',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=2',

    questionText: `Aufgabe 3 (2 Punkte): Antonyme finden.

a) «Sein Vater war schmal geworden, die braune Lederjacke, die herabhängenden Schultern und das dünne graue Haar am Hinterkopf, so hatte Carl ihn nie gesehen.» [Z. 3]
Finde für das unterstrichene Wort «herabhängenden» einen Begriff mit gegensätzlicher Bedeutung, der im obigen Satz eingesetzt werden kann.

b) «Hunderte Fotos dazu im Familienalbum, von seiner Mutter sauber eingeklebt und gewissenhaft beschriftet.» [Z. 6]
Finde für das unterstrichene Wort «gewissenhaft» einen Begriff mit gegensätzlicher Bedeutung, der im obigen Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'a: hochgezogenen / straffen / angespannten / verkrampften | b: schludrig / schlampig / fahrlässig / ungenau',
        correct: true,
      },
      {
        label: 'a: grossen / breiten | b: hastig / schnell',
        correct: false,
      },
      {
        label: 'a: aufrechten / geraden | b: sorglos / vergesslich',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Gegenteil von «herabhängend» und «gewissenhaft»',
          content: `«herabhängend» (Schultern) = nach unten hängend, eingefallen, kraftlos:
→ Antonym: ✅ hochgezogen, straff, angespannt, verkrampft
→ ❌ «gross/breit» → andere Dimension (Grösse, nicht Haltung)
→ ❌ «aufrecht/gerade» → passt gut als Antonym der Körperhaltung ✅ (auch akzeptierbar)

«gewissenhaft» = sorgfältig, pflichtbewusst, genau:
→ Antonym: ✅ schludrig, schlampig, fahrlässig, ungenau, nachlässig
→ ❌ «hastig» → beschreibt Tempo, nicht Sorgfalt
→ ❌ «vergesslich» → anderer Aspekt`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «herabhängend» → nach unten → Gegenteil: nach oben / straff → hochgezogen ✅
2️⃣  «gewissenhaft» → Gewissen → Sorgfalt → Gegenteil: schlampig/schludrig ✅
3️⃣  Kasus beachten: «herabhängenden» → Dat. Pl. → «hochgezogenen» ✅`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_WORTARTEN_ZAEHLEN_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=2',

    questionText: `Aufgabe 4 (2 Punkte): Wie viele verschiedene Wortarten kommen vor? (5 Grundwortarten)

Satz A: «Sein Vater blieb stehen und drehte sich um.»
Satz B: «Carl wusste nicht mehr, wer den Vorschlag gemacht hatte.»`,

    options: [
      {
        label: 'A: 4 | B: 4',
        correct: true,
      },
      {
        label: 'A: 3 | B: 4',
        correct: false,
      },
      {
        label: 'A: 4 | B: 5',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: 'Analyse der zwei Sätze',
          content: `Satz A: «Sein Vater blieb stehen und drehte sich um.»
→ Sein = Pronomen (Possessivpronomen)
→ Vater = Nomen
→ blieb / stehen / drehte / um = Verb (stehenbleiben + umdrehen = 2 Verben, beide Verb)
→ und = Partikel (Konjunktion)
→ sich = Pronomen (Reflexivpronomen)
→ «Sein» und «sich» = beide Pronomen → 1×
→ Wortarten: Pronomen, Nomen, Verb, Partikel = 4 ✅
(kein Adjektiv!)

Satz B: «Carl wusste nicht mehr, wer den Vorschlag gemacht hatte.»
→ Carl = Nomen (Eigenname)
→ wusste / gemacht / hatte = Verb
→ nicht = Partikel (Negationsadverb)
→ mehr = Partikel (Adverb)
→ wer = Pronomen (Interrogativpronomen / Relativpronomen)
→ den = Pronomen (Bestimmter Artikel)
→ Vorschlag = Nomen
→ «wer» und «den» = beide Pronomen → 1×
→ «nicht» und «mehr» = beide Partikel → 1×
→ Wortarten: Nomen, Verb, Partikel, Pronomen = 4 ✅
(kein Adjektiv!)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Nur VERSCHIEDENE Wortarten zählen (sein + sich = beide Pronomen → 1×)
2️⃣  Adjektiv? → in beiden Sätzen kein Adjektiv → nie 5 Wortarten hier
3️⃣  «nicht» + «mehr» = beide Partikel → zählt nur 1×
4️⃣  Beide Sätze: je 4 Wortarten ✅`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_WORTARTEN_DETAIL_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=3',

    questionText: `Aufgabe 5 (3 Punkte): Wortart bestimmen (nur nach den 5 Wortarten).

«Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche.» [Z. 30]

Nenne die Wortart (nur nach den 5 Wortarten) für:
Wie / zwei / Kinder / fuhren / dann / kleinen`,

    options: [
      {
        label: 'Wie: Partikel | zwei: Pronomen | Kinder: Nomen | fuhren: Verb | dann: Partikel | kleinen: Adjektiv',
        correct: true,
      },
      {
        label: 'Wie: Partikel | zwei: Adjektiv | Kinder: Nomen | fuhren: Verb | dann: Partikel | kleinen: Adjektiv',
        correct: false,
      },
      {
        label: 'Wie: Konjunktion | zwei: Pronomen | Kinder: Nomen | fuhren: Verb | dann: Adjektiv | kleinen: Adjektiv',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Wortarten (5-WA-System)',
          content: `Wie → Partikel ✅
(Vergleichspartikel / Konjunktion im 5-WA-System → Partikel)

zwei → Pronomen ✅
(Zahlwort; im 5-WA-System gehören Zahlwörter zu den Pronomen, da sie keine Adjektive im engeren Sinne sind und sich wie Determinative verhalten)

Kinder → Nomen ✅
(Pl. von «Kind»)

fuhren → Verb ✅
(Präteritum von «fahren»)

dann → Partikel ✅
(Temporaladverb → Partikel im 5-WA-System)

kleinen → Adjektiv ✅
(beschreibt «Wagen», dekliniert: Akk. m. Sg.)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «Wie» als Vergleichspartikel → Partikel (nicht «Konjunktion» als eigenständige Kategorie!)
2️⃣  Zahlwörter («zwei») = Pronomen im 5-WA-System ✅
3️⃣  «dann» = Adverb → Partikel ✅
4️⃣  0.5 Punkte pro richtiger Nennung`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D3_2025_WORTSCHATZ_3',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=3',

    questionText: `Aufgabe 6 (4 Punkte): Pluralformen bilden.

Setze die untenstehenden Wörter in den Plural:

– Fluss
– Hemd
– Land
– Ergebnis
– Wägelchen
– Korridor
– Ankunft
– Flucht`,

    options: [
      {
        label: 'Flüsse | Hemden | Länder | Ergebnisse | Wägelchen | Korridore | Ankünfte | Fluchten',
        correct: true,
      },
      {
        label: 'Flüsse | Hemde | Länder | Ergebnisse | Wägelchens | Korridors | Ankünfte | Fluchten',
        correct: false,
      },
      {
        label: 'Flüsse | Hemden | Länder | Ergebnissen | Wägelchen | Korridore | Ankünften | Fluchten',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Pluralformen',
          content: `Fluss → Flüsse ✅ (Umlaut + e)
Hemd → Hemden ✅ (-en: Neutrum auf -d)
Land → Länder ✅ (Umlaut + er)
Ergebnis → Ergebnisse ✅ (-se: Nomen auf -nis → -nisse)
Wägelchen → Wägelchen ✅ (Nullplural: Diminutive auf -chen/-lein)
Korridor → Korridore ✅ (-e: Maskulinum auf -or)
Ankunft → Ankünfte ✅ (Umlaut + e)
Flucht → Fluchten ✅ (-en: Femininum)

⚠️ «Wägelchen» bleibt GLEICH (Diminutiv → Nullplural)!
⚠️ «Hemden» mit -en (nicht «Hemde»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Diminutive auf -chen/-lein → Nullplural: Wägelchen ✅
2️⃣  Umlaut-Typen: Fluss→Flüsse, Land→Länder, Ankunft→Ankünfte
3️⃣  -nis → -nisse: Ergebnis → Ergebnisse
4️⃣  0.5 Punkte pro richtiger Antwort (auch mit Artikel korrekt)`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_FAELLE_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=3',

    questionText: `Aufgabe 7 (2.5 Punkte): Fälle bestimmen.

«Auch beim Abendbrot kam kein Gespräch in Gang. Die Stimmung war angespannt, und Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten.» [Z. 20]

Bestimme die Fälle der unterstrichenen Wörter:
– Abendbrot
– Stimmung
– Ganze
– Ergebnis
– Hypnose`,

    options: [
      {
        label: 'Abendbrot: Dativ | Stimmung: Nominativ | Ganze: Akkusativ | Ergebnis: Akkusativ | Hypnose: Genitiv',
        correct: true,
      },
      {
        label: 'Abendbrot: Akkusativ | Stimmung: Nominativ | Ganze: Akkusativ | Ergebnis: Akkusativ | Hypnose: Genitiv',
        correct: false,
      },
      {
        label: 'Abendbrot: Dativ | Stimmung: Nominativ | Ganze: Akkusativ | Ergebnis: Dativ | Hypnose: Genitiv',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Fälle bestimmen',
          content: `«Abendbrot» → «beim Abendbrot» = bei + dem → Dativ ✅
(«beim» = Kontraktion von «bei dem» → immer Dativ)

«Stimmung» → «Die Stimmung war angespannt» → WAS war? → Stimmung → Nominativ ✅ (Subjekt)

«Ganze» → «das Ganze … halten» → hielt WAS? → das Ganze → Akkusativ ✅
(«halten für» → Akkusativobjekt)

«Ergebnis» → «das Ergebnis einer unguten Hypnose» → Akkusativ ✅
(«für das Ergebnis» → für + Akkusativ)

«Hypnose» → «einer unguten Hypnose» → Genitiv ✅
(«einer» = Genitiv Fem. Sg.; «das Ergebnis EINER Hypnose» = Genitivattribut)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «beim» = bei + dem → immer Dativ → Abendbrot Dativ ✅
2️⃣  Subjekt: WAS war angespannt? → Stimmung → Nominativ ✅
3️⃣  «für + Akk.»: das Ganze, das Ergebnis → Akkusativ ✅
4️⃣  Genitivattribut: «einer Hypnose» = dessen/deren → Genitiv ✅
5️⃣  0.5 Punkte pro richtiger Nennung`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_INFINITIVE_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 8 (2.5 Punkte): Alle Verben in der Infinitivform.

«Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten, in die er nicht noch tiefer hineingezogen werden wollte.» [Z. 20]

Schreibe alle Verben aus dem obigen Satz der Reihe nach in der Infinitivform auf.`,

    options: [
      { label: 'beginnen | halten | hineinziehen | werden | wollen', correct: true },
      { label: 'beginnen | halten | ziehen | werden | wollen', correct: false },
      { label: 'beginnen | halten | hineingezogen werden | wollen', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verben im Infinitiv',
          content: `«begann» → Präteritum von «beginnen» → Infinitiv: beginnen ✅

«zu halten» → Infinitiv mit «zu» → Infinitiv: halten ✅

«hineingezogen» → Partizip II von «hineinziehen» → Infinitiv: hineinziehen ✅
(trennbares Verb «hineinziehen»; NICHT nur «ziehen»!)

«werden» → Infinitiv: werden ✅
(Teil des Passivs «hineingezogen werden»; wird in der Konstruktion aufgeführt)

«wollte» → Präteritum von «wollen» → Infinitiv: wollen ✅

⚠️ «hineingezogen» = Partizip II von «hineinziehen», nicht von blossem «ziehen»
⚠️ Alle fünf Verben aufschreiben, nicht zusammenfassen`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Verbzusatz «hinein» zum Verb zählen: hineinziehen ✅ (nicht «ziehen»!)
2️⃣  Passiv-Konstruktion: «hineingezogen werden» → beide Verben: hineinziehen + werden
3️⃣  Modalverb «wollte» → wollen ✅
4️⃣  0.5 Punkte pro richtiger Nennung`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_ZEITFORMEN_ZAEHLEN_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 9 (3 Punkte): Zeitformen zählen.

«"Da ist jemand, der die Arbeit sieht", war das höchste Lob, das sein Vater zu vergeben hatte.» [Z. 28]

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
          content: `«Da ist jemand» / «der die Arbeit sieht»
→ «ist» = Präsens, «sieht» = Präsens → Zeitform 1: Präsens ✅

«war das höchste Lob»
→ «war» = Präteritum → Zeitform 2: Präteritum ✅

«das sein Vater zu vergeben hatte»
→ «hatte» = Präteritum von «haben» → ebenfalls Präteritum → gleiche Zeitform wie «war» → kein neues Zählen!

⚠️ «hatte zu vergeben» (Infinitiv-Konstruktion mit «zu») = Präteritum, kein eigenes Tempus
⚠️ «ist» und «sieht» = beide Präsens → 1×

✅ Insgesamt: 2 verschiedene Zeitformen (Präsens + Präteritum)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präsens: ist, sieht → Zeitform 1
2️⃣  Präteritum: war, hatte → gleiche Zeitform → Zeitform 2
3️⃣  Infinitiv («zu vergeben») = kein eigenständiges Tempus
4️⃣  Antwort: 2 ✅ (ganz oder gar nicht = 3 Punkte)`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_AKTIV_PASSIV_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=4',

    questionText: `Aufgabe 10 (4 Punkte): Verbalen Teil näher bestimmen.

«Über die Schwelle in den Korridor wurde der Wagen getragen, das machte sein Vater, aber jetzt sprang Carl auf und half, behutsam, damit nichts verrutschte.» [Z. 26]

Kreuze alles Zutreffende an für die vier Teilsätze:
Aktiv | Passiv | Indikativ | Konjunktiv | Präsens | Präteritum | Plusquamperfekt

1. «Über die Schwelle in den Korridor wurde der Wagen getragen»
2. «das machte sein Vater»
3. «aber jetzt sprang Carl auf und half»
4. «damit nichts verrutschte»`,

    options: [
      {
        label: '1: Passiv+Indikativ+Präteritum | 2: Aktiv+Indikativ+Präteritum | 3: Aktiv+Indikativ+Präteritum | 4: Aktiv+Konjunktiv+Präteritum',
        correct: true,
      },
      {
        label: '1: Passiv+Indikativ+Präteritum | 2: Aktiv+Indikativ+Präteritum | 3: Aktiv+Indikativ+Präteritum | 4: Aktiv+Indikativ+Präteritum',
        correct: false,
      },
      {
        label: '1: Passiv+Indikativ+Präteritum | 2: Aktiv+Indikativ+Präteritum | 3: Aktiv+Indikativ+Präsens | 4: Aktiv+Konjunktiv+Präteritum',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Vier Teilsätze analysieren',
          content: `1. «Über die Schwelle … wurde der Wagen getragen»
→ Passiv ✅ (wurde + Partizip II = Vorgangspassiv)
→ Indikativ ✅ (normale Aussageform)
→ Präteritum ✅ («wurde» = Prät. von «werden»)

2. «das machte sein Vater»
→ Aktiv ✅ (sein Vater = handelndes Subjekt)
→ Indikativ ✅
→ Präteritum ✅ («machte» = Prät. von «machen»)

3. «aber jetzt sprang Carl auf und half»
→ Aktiv ✅ (Carl = handelndes Subjekt)
→ Indikativ ✅
→ Präteritum ✅ («sprang», «half» = Prät.)
⚠️ «jetzt» = Gegenwartsadverb, aber die Zeitform des Verbs ist trotzdem Präteritum (erzählte Gegenwart)!

4. «damit nichts verrutschte»
→ Aktiv ✅ (niemand handelt direkt, aber kein Passiv)
→ Konjunktiv ✅ («damit»-Satz = Finalsatz → Konjunktiv I/II)
→ Präteritum ✅ («verrutschte» → Konjunktiv II Präteritum von «verrutschen»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «wurde … getragen» = Passiv (wurde + PII) ✅
2️⃣  «damit»-Sätze → Finalsatz → Konjunktiv! «verrutschte» = Konjunktiv ✅
3️⃣  «jetzt» täuscht → aber Verbform «sprang, half» = Präteritum ✅
4️⃣  Jede richtige Zeile = 1 Punkt; ein Fehler in der Zeile → 0 Punkte`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_PLUSQUAMPERFEKT_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 11 (2 Punkte): Plusquamperfekt bilden.

«Über die Schwelle in den Korridor wurde der Wagen getragen, das machte sein Vater» [Z. 26]

Setze den unterstrichenen Teil des Satzes ins Plusquamperfekt.`,

    options: [
      {
        label: 'Über die Schwelle in den Korridor war der Wagen getragen worden, das hatte sein Vater gemacht.',
        correct: true,
      },
      {
        label: 'Über die Schwelle in den Korridor war der Wagen getragen worden, das hatte sein Vater getan.',
        correct: false,
      },
      {
        label: 'Über die Schwelle in den Korridor hatte der Wagen getragen worden, das hatte sein Vater gemacht.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Passiv-Plusquamperfekt und Aktiv-Plusquamperfekt',
          content: `Satz 1: «wurde der Wagen getragen» → Vorgangspassiv Präteritum
→ Plusquamperfekt Passiv: war + Partizip II + worden
→ ✅ «war der Wagen getragen worden»

Satz 2: «das machte sein Vater» → Aktiv Präteritum
→ Plusquamperfekt Aktiv: hatte + Partizip II
→ «machen» → hatte gemacht ✅
→ ✅ «das hatte sein Vater gemacht»

⚠️ Passiv-Plusquamperfekt: war + PII + «worden» (NICHT «geworden»!)
⚠️ Pro richtigem Satz 1 Punkt`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Passiv-Plusquamperfekt: war + PII + worden (nicht «geworden»!)
2️⃣  Aktiv-Plusquamperfekt: hatte/war + PII → «hatte … gemacht»
3️⃣  «machen» nimmt «haben» → hatte gemacht ✅ (nicht «war gemacht»)
4️⃣  Je 1 Punkt pro korrektem Teilsatz`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_PRAEPOSITIONEN_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 12 (3 Punkte): Präpositionen herausschreiben.

«Die Stimmung war angespannt, und Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten, in die er nicht noch tiefer hineingezogen werden wollte. Zuerst musste gegessen werden, dann wurde abgeräumt und alles mit dem Servierwagen zurück in die Küche gefahren, ein zweistöckiges Wägelchen mit verchromtem Gestell. Sein dunkles Rollgeräusch auf dem Teppich, altvertraut, das leise Scheppern des Geschirrs, wie gewohnt.» [Z. 20]

Schreibe alle Präpositionen der Reihe nach heraus.`,

    options: [
      { label: 'für | in | mit | in | mit | auf', correct: true },
      { label: 'für | in | mit | in | mit | auf | des', correct: false },
      { label: 'für | in | mit | in | mit', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präpositionen finden',
          content: `«für das Ergebnis» → für ✅
«in die er» → in ✅
«mit dem Servierwagen» → mit ✅
«in die Küche» → in ✅
«mit verchromtem Gestell» → mit ✅
«auf dem Teppich» → auf ✅

⚠️ «des Geschirrs» → «des» = Genitivartikel, KEINE Präposition!
⚠️ «zurück» = Verbzusatz/Adverb → keine Präposition
⚠️ «wie gewohnt» → «wie» = Vergleichspartikel → keine Präposition
⚠️ Reihenfolge im Text beachten: für, in, mit, in, mit, auf`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präpositionen stehen VOR einer Nomengruppe und regieren den Kasus
2️⃣  «des» = Genitiv-Artikel → KEINE Präposition!
3️⃣  «zurück» = Verbzusatz/Adverb → KEINE Präposition!
4️⃣  0.5 Punkte pro richtige Nennung`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_PARTIKELN_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 13 (3 Punkte): Partikeln herausschreiben.

«Zuerst musste gegessen werden, dann wurde abgeräumt und alles mit dem Servierwagen zurück in die Küche gefahren, ein zweistöckiges Wägelchen mit verchromtem Gestell.» [Z. 22]

Schreibe alle Partikeln der Reihe nach heraus.`,

    options: [
      { label: 'zuerst | dann | und | mit | in | mit', correct: true },
      { label: 'zuerst | dann | und | mit | zurück | in | mit', correct: false },
      { label: 'zuerst | dann | und | mit | in', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Partikeln finden',
          content: `Im 5-WA-System sind Partikeln: Adverbien + Konjunktionen + Präpositionen + Verbzusätze (wenn nicht Teil des Verbs).

«zuerst» = Temporaladverb → Partikel ✅
«dann» = Temporaladverb → Partikel ✅
«und» = Konjunktion → Partikel ✅
«mit» (dem Servierwagen) = Präposition → Partikel ✅
«in» (die Küche) = Präposition → Partikel ✅
«mit» (verchromtem Gestell) = Präposition → Partikel ✅

⚠️ «zurück» → Im Kontext «zurück in die Küche gefahren» = Adverb/Verbzusatz; laut offizieller Lösung NICHT herausgeschrieben (da es als Verbzusatz von «zurückfahren» gilt)
⚠️ Pro Fehler/fehlende Nennung 0.5 Pt. Abzug → sorgfältig!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Partikeln (5-WA) = Präp. + Konj. + Adv. → zuerst, dann, und, mit, in, mit
2️⃣  «zurück» = Verbzusatz von «zurückfahren» → laut Lösung NICHT separat
3️⃣  Zwei «mit»: beide aufschreiben (einmal Präp. beim Servierwagen, einmal beim Gestell)
4️⃣  0.5 Punkte pro richtige Nennung, Abzug pro Fehler`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_NOMINALISIERUNG_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=5',

    questionText: `Aufgabe 14 (2 Punkte): Nominalisierung.

Nominalisiere das angegebene Adjektiv und füge den bestimmten Artikel hinzu.

– sauber
– gewissenhaft
– glatt
– dunkel`,

    options: [
      {
        label: 'sauber: die Sauberkeit / das Saubere | gewissenhaft: die Gewissenhaftigkeit / das Gewissenhafte | glatt: die Glätte / das Glatte / die Glattheit | dunkel: die Dunkelheit / das Dunkle / das Dunkel',
        correct: true,
      },
      {
        label: 'sauber: das Saubere | gewissenhaft: das Gewissenhafte | glatt: das Glattes | dunkel: das Dunkles',
        correct: false,
      },
      {
        label: 'sauber: die Sauberkeit | gewissenhaft: die Gewissenhaftigkeit | glatt: die Glätte | dunkel: das Dunkel',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Nominalisierungen',
          content: `«sauber» → 
→ die Sauberkeit ✅ (Abstraktnomen auf -keit)
→ das Saubere ✅ (substantiviertes Adjektiv: gross geschrieben, mit Artikel)

«gewissenhaft» →
→ die Gewissenhaftigkeit ✅ (Abstraktnomen auf -igkeit)
→ das Gewissenhafte ✅ (substantiviertes Adjektiv)

«glatt» →
→ die Glätte ✅ (Abstraktnomen auf -e, mit Umlaut)
→ die Glattheit ✅ (Abstraktnomen auf -heit)
→ das Glatte ✅ (substantiviertes Adjektiv)

«dunkel» →
→ die Dunkelheit ✅ (Abstraktnomen auf -heit)
→ das Dunkle ✅ (substantiviertes Adjektiv)
→ das Dunkel ✅ (Abstraktnomen ohne Suffix)

⚠️ 0.5 Punkte pro richtiger Antwort → mehrere Formen möglich!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zwei Wege: Abstraktnomen (-keit/-heit/-e) ODER substantiviertes Adjektiv (das/die Dunkle)
2️⃣  Substantiviertes Adjektiv: gross geschreiben + bestimmter Artikel
3️⃣  Bei -keit/-igkeit: -haft → -haftigkeit (Gewissenhaftigkeit)
4️⃣  «glatt» → Umlaut im Abstraktnomen: Glätte ✅`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_PRONOMEN_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 15 (3 Punkte): Alle Pronomen herausschreiben.

«"Da ist jemand, der die Arbeit sieht", war das höchste Lob, das sein Vater zu vergeben hatte.» [Z. 28]

Schreibe aus dem obigen Satz alle Pronomen der Reihe nach heraus.`,

    options: [
      { label: 'jemand | der | die | das | das | sein', correct: true },
      { label: 'jemand | der | das | das | sein', correct: false },
      { label: 'jemand | der | die | das | sein', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle Pronomen finden',
          content: `«jemand» → Indefinitpronomen ✅ («Da ist jemand»)
«der» → Relativpronomen ✅ («jemand, der die Arbeit sieht»)
«die» → Bestimmter Artikel ✅ («die Arbeit» → Artikel = Pronomen im 5-WA-System)
«das» → Bestimmter Artikel ✅ («das höchste Lob» → Artikel)
«das» → Relativpronomen ✅ («das sein Vater zu vergeben hatte»)
«sein» → Possessivpronomen ✅ («sein Vater»)

⚠️ Beide «das» aufschreiben: einmal Artikel («das höchste Lob»), einmal Relativpronomen!
⚠️ «die» = Bestimmter Artikel vor «Arbeit» → Pronomen ✅ (oft übersehen)
⚠️ Pro Fehler/fehlende Nennung 0.5 Pt. Abzug`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Im 5-WA-System: Artikel = Pronomen (der/die/das/ein/eine = Pronomen!)
2️⃣  Zwei «das» = beide aufschreiben!
3️⃣  «jemand» = Indefinitpronomen → auch ein Pronomen ✅
4️⃣  0.5 Punkte pro Nennung, Abzug pro Fehler`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_SATZGLIEDER_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 16 (2 Punkte): Satzglieder bestimmen.

«Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche.» [Z. 30]

Bestimme die unterstrichenen Satzglieder:
– sie
– den kleinen Wagen
– durch den Flur
– in die Küche`,

    options: [
      {
        label: 'sie: Subjekt | den kleinen Wagen: Akkusativobjekt | durch den Flur: Präpositionalgefüge | in die Küche: Präpositionalgefüge',
        correct: true,
      },
      {
        label: 'sie: Akkusativobjekt | den kleinen Wagen: Akkusativobjekt | durch den Flur: Präpositionalgefüge | in die Küche: Dativobjekt',
        correct: false,
      },
      {
        label: 'sie: Subjekt | den kleinen Wagen: Akkusativobjekt | durch den Flur: Dativobjekt | in die Küche: Präpositionalgefüge',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder bestimmen',
          content: `«sie» → WER fuhr? → sie → Subjekt ✅ (Nominativ)

«den kleinen Wagen» → fuhren WAS? → den kleinen Wagen → Akkusativobjekt ✅
(Akkusativ: «den» = Akk. m. Sg.)

«durch den Flur» → Präposition «durch» + Nomengruppe → Präpositionalgefüge ✅
(Lokalangabe: DURCH WEN/WAS?)

«in die Küche» → Präposition «in» + Nomengruppe → Präpositionalgefüge ✅
(Lokalangabe: WOHIN?)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Subjekt: WER fährt? → «sie» (Nominativ) ✅
2️⃣  Akkusativobjekt: WAS fahren sie? → «den kleinen Wagen» ✅
3️⃣  Präpositionalgefüge: Präp. + Nomengruppe → «durch den Flur», «in die Küche»
4️⃣  0.5 Punkte pro richtiger Antwort`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_SATZGLIEDER_2',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=6',

    questionText: `Aufgabe 17 (3 Punkte): Satzglieder herausschreiben und bestimmen.

«Sie reflektierten das Licht der kleinen Neonröhre.»

Schreibe die Satzglieder heraus und bestimme sie.`,

    options: [
      {
        label: 'Sie: Subjekt | das Licht der kleinen Neonröhre: Akkusativobjekt',
        correct: true,
      },
      {
        label: 'Sie: Subjekt | das Licht: Akkusativobjekt | der kleinen Neonröhre: Genitivobjekt',
        correct: false,
      },
      {
        label: 'Sie: Akkusativobjekt | das Licht der kleinen Neonröhre: Subjekt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder bestimmen',
          content: `«Sie»
→ WER reflektierte? → Sie → Subjekt ✅ (Nominativ Pl., Personalpronomen)
→ 1 Punkt für diese Zeile

«das Licht der kleinen Neonröhre»
→ reflektierten WAS? → das Licht (der kleinen Neonröhre) → Akkusativobjekt ✅
→ «der kleinen Neonröhre» = Genitivattribut, gehört zur Nomengruppe «das Licht» → vollständig herausschreiben!
→ 2 Punkte für diese Zeile (da komplexere Nomengruppe)

⚠️ «der kleinen Neonröhre» ist KEIN eigenes Satzglied, sondern ein Genitivattribut innerhalb des Akkusativobjekts → nicht trennen!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Subjekt: «Sie» → WER reflektiert? → 1 Punkt
2️⃣  Akkusativobjekt: vollständige Nomengruppe «das Licht der kleinen Neonröhre» → 2 Punkte
3️⃣  Genitivattribut («der kleinen Neonröhre») gehört zum Objekt → NICHT trennen!
4️⃣  Zeile falsch → 0 Punkte (kein halber Punkt)`,
    },
  },

  // ── AUFGABE 18 ─────────────────────────────────────────────

  {
    id: 'D3_2025_GRAMMATIK_SATZGLIEDSCHEMA_1',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1#page=7',

    questionText: `Aufgabe 18 (5 Punkte): Satzgliedschema zuordnen.

Ordne die Satzgliedschemen (A, B, C, D oder E) den Sätzen zu:

A = Subjekt – Prädikat – Präpositionalgefüge
B = Präpositionalgefüge – Prädikat – Akkusativobjekt – Subjekt
C = Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge
D = Präpositionalgefüge – Prädikat – Subjekt
E = Präpositionalgefüge – Prädikat – Präpositionalgefüge – Subjekt

1. «Am Abend übermannte ihn das Heimweh.»
2. «Der Eintrag "zurzeit Student" war mit Bleistift eingetragen.»
3. «Sein Vater hielt ihn am Arm.»
4. «Beim Abendbrot kam zwischen dem Vater und dem Sohn kein Gespräch auf.»
5. «Über die Schwelle in den Korridor wurde der Wagen getragen.»`,

    options: [
      {
        label: '1: B | 2: A | 3: C | 4: E | 5: D',
        correct: true,
      },
      {
        label: '1: B | 2: A | 3: D | 4: E | 5: C',
        correct: false,
      },
      {
        label: '1: D | 2: A | 3: C | 4: E | 5: B',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzgliedschemas zuordnen',
          content: `1. «Am Abend übermannte ihn das Heimweh.»
→ «Am Abend» = Präpositionalgefüge (vorne)
→ «übermannte» = Prädikat
→ «ihn» = Akkusativobjekt (WEN übermannte es?)
→ «das Heimweh» = Subjekt (WAS übermannte? → Nominativ)
→ Schema: PG – Prädikat – Akk.obj. – Subjekt = B ✅

2. «Der Eintrag "zurzeit Student" war mit Bleistift eingetragen.»
→ «Der Eintrag …» = Subjekt
→ «war … eingetragen» = Prädikat
→ «mit Bleistift» = Präpositionalgefüge
→ Schema: Subjekt – Prädikat – PG = A ✅

3. «Sein Vater hielt ihn am Arm.»
→ «Sein Vater» = Subjekt
→ «hielt» = Prädikat
→ «ihn» = Akkusativobjekt
→ «am Arm» = Präpositionalgefüge
→ Schema: Subjekt – Prädikat – Akk.obj. – PG = C ✅

4. «Beim Abendbrot kam zwischen dem Vater und dem Sohn kein Gespräch auf.»
→ «Beim Abendbrot» = Präpositionalgefüge 1
→ «kam … auf» = Prädikat
→ «zwischen dem Vater und dem Sohn» = Präpositionalgefüge 2
→ «kein Gespräch» = Subjekt
→ Schema: PG – Prädikat – PG – Subjekt = E ✅

5. «Über die Schwelle in den Korridor wurde der Wagen getragen.»
→ «Über die Schwelle in den Korridor» = Präpositionalgefüge (komplex)
→ «wurde … getragen» = Prädikat (Passiv)
→ «der Wagen» = Subjekt (Nominativ im Passivsatz)
→ Schema: PG – Prädikat – Subjekt = D ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179273/AP25_GMS3_D_Sprachpr%C3%BCfung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Vorangestelltes Objekt ≠ Subjekt! «ihn» (Akk.) → «das Heimweh» (Nom.) ist Subjekt → Schema B
2️⃣  Passivsatz: «der Wagen» ist Subjekt (Nominativ), kein Objekt → Schema D
3️⃣  Zwei Präpositionalgefüge → Schema E
4️⃣  1 Punkt pro richtiger Zuordnung`,
    },
  },

  // ════════════════════════════════════════════════════════════
  // TEIL 2 – SCHREIBAUFGABE
  // ════════════════════════════════════════════════════════════

  {
    id: 'D3_2025_SCHREIB_ICH_ERZAEHLER_WOCHE',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179272/AP25_GMS3_D_Schreibaufgabe.pdf?fp=1',

    questionText: `Schreibaufgabe 1 (Erzählung aus Figuren-Perspektive):

Lies den Text «Die Neue».

Stell dir vor, dass du der Ich-Erzähler bist und dass die Woche vorbei ist, in der die neue Schülerin in die Klasse gekommen ist. Erzähle, wie es dir dabei in der Zeit ergangen ist und wie du das Unheil erlebt hast.`,

    options: [
      {
        label: 'Ich-Perspektive (Erzähler) | Rückblick auf die vergangene Woche | Ton: selbstironisch, direkt, jugendlich | Bezug zum Text «Die Neue» | Eigener Titel',
        correct: true,
      },
      {
        label: 'Er-Perspektive (Beobachter) | Beschreibung der neuen Schülerin | Kein Bezug zum Text',
        correct: false,
      },
      {
        label: 'Ich-Perspektive der neuen Schülerin | Erlebnisse der neuen Woche | Kein Eigener Titel',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt eine Erzählung aus der Ich-Perspektive des Erzählers, der zurückblickt auf die Woche nach dem Erscheinen der neuen Schülerin. Ziel: glaubwürdig, zum Text passend, mit überzeugend geschildertem «Unheil».`,
      steps: [
        {
          title: '📖 Textanalyse: Wer ist der Ich-Erzähler?',
          content: `Aus dem Text «Die Neue» wissen wir:
→ Er ist pragmatisch und direkt («Shit!», «ein sehr naiver Trottel»)
→ Er sitzt gern allein an seinem Zweierpult → neue Mitschülerin = Einschränkung
→ Er gehört zu den Guten in der Klasse → kein Schreibproblem, aber kein Einzelgänger
→ Er nennt die Klasse «ein Verein von braven Lämmern» → Langeweile
→ Er nimmt sich ehrlich vor, sich um das Mädchen zu kümmern → hat ein Gewissen
→ Er ist neugierig auf das «Verruchte» → hoffte, sie sei rausgeflogen

Das «Unheil»: Er musste seinen Platz teilen, für jemanden verantwortlich sein, sein Komfort wurde gestört – aber vielleicht ergab sich auch Überraschendes?`,
        },
        {
          title: '✍️ Aufbau der Erzählung',
          content: `EINLEITUNG (Rückblick + Einstieg):
→ Rückblickendes Einleiten: «Die Woche ist vorbei. Was soll ich sagen…»
→ Kurze Zusammenfassung der Ausgangssituation
→ Eigenen Titel setzen (z.B. «Der Platz neben mir», «Eine Woche Chaos», «Das Mädchen aus Salzburg»)

HAUPTTEIL (Das Unheil schildern):
→ Montag: Ankunft der Neuen – wie es sich anfühlte, seinen Platz zu teilen
→ Erste Tage: konkrete Szenen (sie redet viel/wenig? Wie riecht es? Macht sie Lärm?)
→ Entwicklung: War sie wirklich so schlimm? Oder war das «Unheil» anders als erwartet?
→ Wendepunkt: Etwas Unerwartetes passiert → die Klasse verändert sich? Er verändert sich?

SCHLUSS (Fazit / Selbstreflexion):
→ Rückblickende Einschätzung: War es wirklich ein «Unheil»?
→ Offenes oder abgeschlossenes Ende
→ Ton: selbstironisch, ehrlich`,
        },
        {
          title: '🎯 Worauf die Korrektoren achten',
          content: `✅ Ich-Perspektive des ERZÄHLERS (nicht der neuen Schülerin!)
✅ Rückblick auf die VERGANGENE Woche (Vergangenheit, Perfekt oder Präteritum)
✅ Bezug zu Figuren und Details aus «Die Neue» (Vater, Pult, Klasse, Salzburg)
✅ Inhaltliches «Unheil» überzeugend geschildert (nicht melodramatisch)
✅ Ton passt zum Charakter: selbstironisch, direkt, jugendlich
✅ Eigener Titel gesetzt
✅ Aufbau: Leser kann folgen
✅ Überzeugendes Ende
✅ Sprachliche Qualität, keine störenden Fehler`,
        },
        {
          title: '💡 Formulierungshilfen',
          content: `Einstieg: «Eine Woche ist vergangen, seit sie zum ersten Mal neben mir sass. Ich hatte mir mehr davon versprochen – oder weniger. Ich weiss nicht mehr genau.»

Zwischenteil: «Am Dienstag rückte sie versehentlich mein Mäppchen auf ihre Seite. Ich schwieg. Am Mittwoch passierte es wieder – aber da habe ich schon nicht mehr hingeguckt.»

Wendung: «Am Donnerstag erklärte sie mir während der grossen Pause, ohne gefragt zu werden, warum sie Salzburg vermisst. Ich hörte zu. Ich weiss nicht warum.»

Schluss: «Das Unheil. Ja. Es ist passiert. Nur nicht so, wie ich gedacht hatte.»`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  PERSPEKTIVE: Ich = Erzähler (der Junge) → konsequent, kein Wechsel
2️⃣  ZEITFORM: Rückblick → Vergangenheit (Perfekt/Präteritum)
3️⃣  TON: selbstironisch, direkt, jugendlich → NICHT dramatisch
4️⃣  AUFBAU: Ausgangslage → konkrete Wochenszenen → Schluss/Fazit
5️⃣  BEZUG zum Text: Figuren/Situation aus «Die Neue» einbauen
6️⃣  TITEL und ÜBERZEUGEND ES ENDE nicht vergessen!`,
    },
  },

  {
    id: 'D3_2025_SCHREIB_TAGEBUCH_NEUE',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179272/AP25_GMS3_D_Schreibaufgabe.pdf?fp=1',

    questionText: `Schreibaufgabe 2 (Zwei Tagebucheinträge aus Figurenperspektive):

Lies den Text «Die Neue».

Schreibe zwei Tagebucheinträge aus der Sicht der Schülerin, die neu in die Klasse kommt:
– Am Abend VOR dem ersten Schultag
– Am Abend NACH dem ersten Schultag`,

    options: [
      {
        label: 'Ich-Perspektive (neue Schülerin) | Zwei klare Einträge mit Datum/Anrede | Innere Gedanken: Nervosität/Vorfreude DANN Erlebnisse | Bezug zum Text',
        correct: true,
      },
      {
        label: 'Ich-Perspektive (Erzähler) | Ein Eintrag | Keine Zeitangabe | Kein Textbezug',
        correct: false,
      },
      {
        label: 'Er-Perspektive | Beschreibung der Klasse | Nur Fakten | Kein Tagebuchformat',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt ZWEI Tagebucheinträge aus der Perspektive der neuen Schülerin: einmal vor, einmal nach dem ersten Schultag. Ziel: authentische Figurenstimme, Innenleben, klare zeitliche Struktur.`,
      steps: [
        {
          title: '📖 Was wissen wir über die neue Schülerin?',
          content: `Aus dem Text «Die Neue»:
→ Sie ist mit ihrer Mutter von Salzburg nach Wien gezogen (wegen des Jobs der Mutter)
→ Sie kennt in der neuen Stadt niemanden
→ Sie wechselt mitten im Schuljahr → schwieriger Start
→ Sie ist die Tochter einer Kollegin des Vaters
→ Der Erzähler wurde gebeten, sie zu empfangen → sie ist auf guten Willen angewiesen

Was sie fühlen könnte:
→ Vor dem ersten Tag: Nervosität, Heimweh nach Salzburg, Erwartungen (Hoffnung/Angst)
→ Nach dem ersten Tag: Wie war die Klasse? Wer hat ihr geholfen? War es besser/schlechter als gedacht?`,
        },
        {
          title: '✍️ Aufbau der zwei Tagebucheinträge',
          content: `EINTRAG 1: «Am Abend VOR dem ersten Schultag»
Format: Datum (z.B. «Sonntag, [Datum]»), «Liebes Tagebuch,» oder direkt

Inhalt:
→ Gedanken über den bevorstehenden ersten Tag
→ Heimweh nach Salzburg (alte Freunde, alte Schule)
→ Nervosität/Erwartung: Wie wird die Klasse sein? Wird jemand nett sein?
→ Vielleicht: Sorge, dass niemand mit ihr redet
→ Frage an sich selbst: Wird sie sich einleben können?

EINTRAG 2: «Am Abend NACH dem ersten Schultag»
Format: Datum (z.B. «Montag, [Datum]»)

Inhalt:
→ Rückblick auf den Tag: Was ist passiert?
→ Der Junge neben ihr: War er nett? Wirkte er widerwillig?
→ Erster Eindruck der Klasse («ein Verein von braven Lämmern»?)
→ Innere Gefühle: Erleichterung? Enttäuschung? Einsamkeit?
→ Ausblick auf die nächsten Tage`,
        },
        {
          title: '🎯 Worauf die Korrektoren achten',
          content: `✅ Ich-Perspektive der NEUEN SCHÜLERIN (nicht des Erzählers!)
✅ ZWEI klar getrennte Einträge mit zeitlicher Markierung (vor/nach)
✅ Typisches Tagebuchformat: Datum, persönlicher Ton, Innenleben
✅ Innere Gedanken und Gefühle (nicht nur Ereignisse schildern)
✅ Inhaltlicher Bezug zu «Die Neue» (Salzburg, neuer Pult, Klasse)
✅ Ton: authentisch jugendlich, keine Erwachsenensprache
✅ Eigener Titel für das Gesamtwerk
✅ Überzeugendes Ende (zweiter Eintrag)
✅ Sprachliche Qualität, keine störenden Fehler`,
        },
        {
          title: '💡 Formulierungshilfen',
          content: `Eintrag 1: «Sonntag. Liebes Tagebuch. Morgen ist es so weit. Neue Schule, neue Stadt, neue Leute. Ich vermisse Lena. Ich vermisse Salzburg. Mama sagt, das wird toll. Sie sagt das immer.»

Eintrag 2: «Montag. Es war nicht so schlimm, wie ich dachte. Aber auch nicht so gut. Der Junge neben mir, er heisst glaube ich … na ja, er hat mir seinen Namen nicht gesagt. Aber er hat mich auch nicht ignoriert. Irgendwie.»

Übergang: «Er hat einmal kurz gefragt, ob ich einen Stift brauche. Ich nicht. Aber es war nett.»

Schluss: «Ich werde sehen. Vielleicht wird es doch okay. Vielleicht.»`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  PERSPEKTIVE: Neue Schülerin («ich») → NICHT der Junge!
2️⃣  ZWEI EINTRÄGE: klar trennbar durch Datum/Zeitangabe
3️⃣  FORMAT: Datum + persönlicher Ton + Innenleben (Tagebuch, nicht Aufsatz)
4️⃣  GEFÜHLE: Eintrag 1 = Erwartung/Angst | Eintrag 2 = Verarbeitung des Erlebten
5️⃣  TEXTBEZUG: Salzburg, Pult, Klasse, der Junge einbauen
6️⃣  TITEL und ÜBERZEUGENDES ENDE nicht vergessen!`,
    },
  },

  {
    id: 'D3_2025_SCHREIB_WUNSCH_WANDEL',
    year: 2025,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/179272/AP25_GMS3_D_Schreibaufgabe.pdf?fp=1',

    questionText: `Schreibaufgabe 3 (Erörterung / Reflexion):

Lies den Text «Die Neue».

Schreibe einen Text darüber, warum wir uns oft wünschen, dass etwas Besonderes passiert, und warum wir dennoch wollen, dass eigentlich alles gleich bleibt.

Zum Beispiel hätte der Ich-Erzähler gerne, dass in der langweiligen Klasse etwas passiert. Dass er jetzt aber auf eine Neue aufpassen muss, ist ihm auch nicht wirklich recht.`,

    options: [
      {
        label: 'Eigene Gedanken | Widerspruch Veränderung vs. Beständigkeit | Bezug zum Text | Klarer Aufbau | Eigener Titel',
        correct: true,
      },
      {
        label: 'Nur Zusammenfassung des Textes | Keine eigene Meinung | Kein Aufbau',
        correct: false,
      },
      {
        label: 'Erzählung aus Figurenperspektive | Kein Argument | Kein Textbezug',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt eine nachdenkliche, reflexive Erörterung über das menschliche Spannungsverhältnis zwischen dem Wunsch nach Veränderung und dem Wunsch nach Beständigkeit.`,
      steps: [
        {
          title: '📖 Das zentrale Thema verstehen',
          content: `Das Thema beschreibt einen menschlichen Widerspruch:

WUNSCH NACH VERÄNDERUNG:
→ Langeweile, Routine, Eintönigkeit → man hofft auf etwas Besonderes
→ Der Erzähler: «In meiner Klasse ist sowieso nie irgendetwas Besonderes los»
→ Wunsch nach Aufregung, Abwechslung, Neuem

WUNSCH NACH BESTÄNDIGKEIT:
→ Veränderung kostet Energie, schafft Unsicherheit, bringt Unannehmlichkeiten
→ Der Erzähler: Er will seinen Platz behalten, seine Ruhe, seinen Raum
→ Die Neue = Veränderung → plötzlich NICHT mehr gewünscht

DER WIDERSPRUCH: Wir wollen, dass sich etwas ändert – aber nicht bei uns persönlich. Wir wollen Aufregung ohne Konsequenzen.`,
        },
        {
          title: '✍️ Aufbau des Textes',
          content: `EINLEITUNG (Einstieg + These):
→ Mit einem konkreten Beispiel aus dem Text beginnen
→ These formulieren: «Wir Menschen tragen einen tiefen Widerspruch in uns: den Wunsch nach Veränderung und gleichzeitig das Bedürfnis nach Sicherheit.»

HAUPTTEIL – WARUM WIR VERÄNDERUNG WÜNSCHEN:
→ Langeweile und Routine als Auslöser
→ Sehnsucht nach Bedeutsamem, Besonderem
→ Neugier als menschliches Grundbedürfnis
→ Bezug zum Text: der Erzähler und seine «Lammklasse»

HAUPTTEIL – WARUM WIR BESTÄNDIGKEIT WOLLEN:
→ Sicherheit und Vertrautheit geben Geborgenheit
→ Veränderung bedeutet Verlust von Kontrolle
→ Das Komfort-Paradox: Wir möchten Aufregung, aber keine Konsequenzen
→ Bezug zum Text: der Erzähler will seinen Platz behalten

SCHLUSS (Synthese):
→ Der Widerspruch ist keine Schwäche, sondern menschlich
→ Was können wir daraus lernen? (Offenheit für das Neue trotz Sicherheitsbedürfnis)
→ Eigene Position klar formulieren`,
        },
        {
          title: '🎯 Worauf die Korrektoren achten',
          content: `✅ Eigene Gedanken und Reflexion (keine blosse Nacherzählung)
✅ Beide Seiten des Widerspruchs erläutert (Veränderung UND Beständigkeit)
✅ Inhaltlicher Bezug zum Text «Die Neue»
✅ Eigener Titel gesetzt
✅ Klarer Aufbau: Leser kann Überlegungen folgen
✅ Argumente begründet, nicht nur behauptet
✅ Überzeugende Schlussfolgerung
✅ Sprachliche Qualität, keine störenden Fehler`,
        },
        {
          title: '💡 Formulierungshilfen',
          content: `Einstieg: «"In meiner Klasse ist sowieso nie irgendetwas Besonderes los." Dieser Satz aus dem Text trifft etwas Universelles: Wir alle kennen das Gefühl, auf Veränderung zu hoffen – und gleichzeitig froh zu sein, wenn alles beim Alten bleibt.»

These: «Es ist ein Widerspruch, der uns alle begleitet: Wir wünschen uns, dass etwas passiert – aber bitte nicht so, dass es uns persönlich betrifft.»

Argument 1: «Routine schafft Langeweile. Der Mensch braucht das Neue, das Unerwartete – aber nur so lange, wie es kontrollierbar bleibt.»

Schluss: «Der Widerspruch zwischen Veränderungswunsch und Beständigkeitsbedürfnis ist nicht auflösbar. Aber ihn zu erkennen ist der erste Schritt, offener auf das Neue zuzugehen – auch wenn es bedeutet, seinen Platz am Pult zu teilen.»`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  THEMA: Widerspruch Veränderung vs. Beständigkeit → beide Seiten zeigen
2️⃣  STRUKTUR: Einleitung (These) → Veränderungswunsch → Beständigkeitswunsch → Fazit
3️⃣  BEZUG zum Text: Erzähler, «Lammklasse», Neue Schülerin einbauen
4️⃣  EIGENE MEINUNG: Klar im Fazit nennen
5️⃣  ARGUMENTE: Immer begründen («weil / denn / da …»)
6️⃣  TITEL und ÜBERZEUGENDER SCHLUSS nicht vergessen!`,
    },
  },

];