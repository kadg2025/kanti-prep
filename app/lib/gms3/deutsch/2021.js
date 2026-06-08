// app/lib/gms3/deutsch/2021.js
// Aufnahmeprüfung 2021 – Deutsch GMS 3 (Pädagogische Maturitätsschule Kreuzlingen)
// Grundlage: Robert Seethaler, «Der Trafikant» (Textauszug: Das Gewitter am Attersee)

export const questions2021 = [

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D3_2021_TEXTVERST_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=4',
    topic: 'Textverständnis',

    questionText: `Aufgabe 1 (10 Punkte): Kreuze an – stimmt oder stimmt nicht?

1. Franz ist nicht zu Hause, als er ein aufkommendes Gewitter bemerkt.
2. In der Behausung hängt ein geschnitzter Jesus am Kreuz.
3. Die Behausung steht nah am Wasser.
4. Vor Franz und seiner Mutter lebten viele Fischer in der Behausung.
5. Nach dem Gewitter zittert der Boden des Fischerhauses noch immer.
6. Als die Mutter die Behausung betritt, entfacht Franz das Herdfeuer neu.
7. Franz benutzt Stroh, um Feuer zu machen.
8. Die Mutter von Franz ist dünn.
9. Franz hat eine zärtliche Mutter.
10. Die Mutter musste sich noch nie von Franz trösten lassen.

Welche Kombination stimmt?`,

    options: [
      {
        label: 'stimmt: 1, 3, 4, 8, 9, 10 | stimmt nicht: 2, 5, 6, 7',
        correct: true,
      },
      {
        label: 'stimmt: 1, 2, 3, 8, 9, 10 | stimmt nicht: 4, 5, 6, 7',
        correct: false,
      },
      {
        label: 'stimmt: 1, 3, 4, 7, 8, 9 | stimmt nicht: 2, 5, 6, 10',
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
          content: `1. ✅ stimmt – «Schon beim ersten fernen Donnergrollen war Franz in das kleine Fischerhaus gelaufen» (Z. 4) → er war also vorher draussen, nicht zu Hause.

2. ❌ stimmt nicht – «der eiserne Jesus» (Z. 12) → Jesus ist aus Eisen, nicht geschnitzt (aus Holz).

3. ✅ stimmt – «vom nahen Ufer war das Krachen der Fischerboote zu hören» (Z. 13) → das Ufer liegt nah an der Behausung.

4. ✅ stimmt – «die russschwarzen, von Generationen schwerer Fischerstiefel ausgetretenen Dielen» (Z. 17) → Generationen von Fischern lebten hier.

5. ❌ stimmt nicht – Nach dem Gewitter «heranzitterte» der Sonnenstrahl an sein Bett (Z. 17–18), nicht der Boden. Der Sonnenstrahl zittert, nicht der Boden.

6. ❌ stimmt nicht – Franz macht das Feuer bereits VOR dem Eintreffen der Mutter: «Das Brennholz … flammte auf wie Stroh» (Z. 24–25), und dann erst: «aufflog» die Tür.

7. ❌ stimmt nicht – «Das Brennholz … flammte auf wie Stroh» (Z. 24) → «wie Stroh» ist ein Vergleich! Franz benutzt Brennholz, nicht Stroh.

8. ✅ stimmt – «Frau Huchel war eine schmale Frau … wenngleich auch schon etwas ausgemergelt» (Z. 26–28) → dünn/ausgemergelt.

9. ✅ stimmt – «Bislang war es umgekehrt gewesen: Er hatte geheult, und die Mutter hatte ihn gestreichelt» (Z. 44–45) → sie hat ihn früher getröstet und gestreichelt → zärtlich.

10. ✅ stimmt – «Bislang war es umgekehrt gewesen» (Z. 44) → zum ersten Mal tröstet jetzt Franz die Mutter → sie musste sich vorher nie trösten lassen.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «wie Stroh» = Vergleich → kein Stroh verwendet (Nr. 7 stimmt nicht)
2️⃣  «eisern» ≠ «geschnitzt» → Nr. 2 stimmt nicht
3️⃣  «heranzitterte» bezieht sich auf den Sonnenstrahl → Nr. 5 stimmt nicht
4️⃣  Herdfeuer war schon entfacht, bevor die Mutter kam → Nr. 6 stimmt nicht`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D3_2021_WORTSCHATZ_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wortschatz',

    questionText: `Aufgabe 2 (2 Punkte): Synonyme finden.

a) «Von Böen getrieben, prasselte der Regen gegen die Fensterscheiben, vor denen ein paar geköpfte Blumen in ihren Kübeln ersoffen.» [Z. 10]
Finde für «prasselte» ein Wort mit entsprechender Bedeutung, das im obigen Satz eingesetzt werden kann.

b) «Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf und begann ungeschickt über ihr Haar zu streicheln.» [Z. 41]
Finde für «ungeschickt» ein Wort mit entsprechender Bedeutung, das im obigen Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'a: peitschte / trommelte / klopfte / dröhnte | b: tapsig / unbeholfen / umständlich / ungeübt',
        correct: true,
      },
      {
        label: 'a: floss / rann / tropfte | b: zögerlich / langsam / ängstlich',
        correct: false,
      },
      {
        label: 'a: rauschte / strömte | b: ungeschickt / fahrig',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 «prasseln» und «ungeschickt»',
          content: `«prasseln» = mit lautem Geräusch auftreffen, schlagen (von Regen, Hagel):
→ ✅ peitschte, trommelte, klopfte, dröhnte, toste
→ ❌ floss/rann → beschreibt ruhige Bewegung, kein Geräusch

«ungeschickt» = ohne Geschick, tolpatschig, linkisch:
→ ✅ tapsig, unbeholfen, umständlich, ungeübt, wirr
→ ❌ zögerlich → beschreibt Zögern, nicht Unbeholfenheit (das ist Aufgabe 3b)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «prasseln» → Laut- und Auftreffvorgang → Geräuschverb: peitschte/trommelte
2️⃣  «ungeschickt» → Bewegungsqualität → tapsig/unbeholfen
3️⃣  Ersatzwort in den Satz einsetzen und prüfen, ob es passt`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D3_2021_WORTSCHATZ_2',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wortschatz',

    questionText: `Aufgabe 3 (2 Punkte): Antonyme finden.

a) «Sie stand einfach nur da, eine Hand an den Türpfosten gelehnt, keuchend und mit gesenktem Kopf.» [Z. 29]
Finde für «gesenktem» ein Wort mit gegensätzlicher Bedeutung, das im obigen Satz eingesetzt werden kann.

b) «Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf und begann ungeschickt über ihr Haar zu streicheln.» [Z. 41]
Finde für «zögerlichen» ein Wort mit gegensätzlicher Bedeutung, das im obigen Satz eingesetzt werden kann.`,

    options: [
      {
        label: 'a: erhobenem / aufgerichtetem / aufrechtem / geradem | b: raschen / entschiedenen / sicheren / zielgerichteten',
        correct: true,
      },
      {
        label: 'a: stolzem / geradem | b: schnellem / plötzlichem',
        correct: false,
      },
      {
        label: 'a: hohem / aufgeblasenem | b: mutigen / starken',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Gegenteil von «gesenkt» und «zögerlich»',
          content: `«gesenktem» (Kopf) = nach unten gerichtet:
Antonym: ✅ erhobenem / aufgerichtetem / aufrechtem / geradem
→ «mit erhobenem Kopf» = Kopf nach oben gerichtet, aufgerichtet
→ ❌ «hohem Kopf» = Adjektivphrase, aber «hohem» passt weniger präzise

«zögerlichen» (Schritt) = unsicher, zögernd:
Antonym: ✅ raschen / entschiedenen / sicheren / zielgerichteten / gelenkigen / überzeugten
→ ❌ «schnellem» ist akzeptierbar, aber «raschen/entschiedenen» sind präziser`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Antonym = echtes Gegenteil in der GLEICHEN grammatischen Form (Dativ hier!)
2️⃣  «gesenkt» → Richtung nach unten → Gegenteil: erhoben/aufgerichtet
3️⃣  «zögerlich» → Unsicherheit → Gegenteil: entschieden/sicher/rasch
4️⃣  Kasus beachten: «gesenktem» → Dativ m. Sg. → «erhobenem» (nicht «erhoben»!)`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D3_2021_WORTSCHATZ_3',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=5',
    topic: 'Wortschatz',

    questionText: `Aufgabe 4 (2 Punkte): Wendung verstehen.

«Für einen Moment schien sie sich suchend umzusehen.» [Z. 38]

Kreuze an, wie die unterstrichene Wortgruppe «Für einen Moment» sinngemäss ersetzt werden kann.

A) Sofort
B) Einen Augenblick lang
C) Hin und wieder
D) Kurzzeitig`,

    options: [
      {
        label: 'B: Einen Augenblick lang | D: Kurzzeitig',
        correct: true,
      },
      {
        label: 'A: Sofort | B: Einen Augenblick lang',
        correct: false,
      },
      {
        label: 'B: Einen Augenblick lang | C: Hin und wieder',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Wendung «für einen Moment»',
          content: `«Für einen Moment» = für eine kurze Zeitspanne, vorübergehend:
→ ✅ «Einen Augenblick lang» = kurze Zeitspanne (fast wörtliches Synonym)
→ ✅ «Kurzzeitig» = für kurze Zeit (sinngemäss passend)
→ ❌ «Sofort» = unverzüglich, ohne Verzögerung → anderes Konzept (Zeitpunkt, nicht Dauer)
→ ❌ «Hin und wieder» = gelegentlich, manchmal → bezeichnet Häufigkeit, nicht Dauer

⚠️ Laut offizieller Lösung: Jeder Fehler = 1 Punkt Abzug.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «Für einen Moment» = kurze Zeitdauer → kein Zeitpunkt («sofort»), keine Häufigkeit («hin und wieder»)
2️⃣  «Einen Augenblick lang» ≈ direktes Synonym → ✅
3️⃣  «Kurzzeitig» = für kurze Zeit → ✅
4️⃣  «Sofort» = im selben Augenblick, keine Dauer → ❌`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_KONJ_PRAEP_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 5 (4 Punkte): Konjunktionen und Präpositionen herausschreiben.

«Als sich das Gewitter endlich ausgetobt hatte und sich ein erster zaghafter Sonnenstrahl über die russschwarzen, von Generationen schwerer Fischerstiefel ausgetretenen Dielen an sein Bett heranzitterte, rollte sich Franz in einem kleinen Wohligkeitsanfall zusammen, nur um gleich darauf seinen Kopf unter der Decke hervorzustrecken und sich umzuschauen.» [Z. 16]

a) Schreibe alle Konjunktionen der Reihe nach heraus.
b) Schreibe alle Präpositionen der Reihe nach heraus.`,

    options: [
      {
        label: 'a: als, und, um, und | b: über, von, an, in, unter',
        correct: true,
      },
      {
        label: 'a: als, und, um | b: über, von, an, in, unter',
        correct: false,
      },
      {
        label: 'a: als, und, und | b: über, von, an, in, unter',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Konjunktionen und Präpositionen im Satz',
          content: `Konjunktionen (verbinden Sätze oder Satzteile):
1️⃣  «Als» (Z. 16) → unterordnende Konjunktion (leitet Nebensatz ein) ✅
2️⃣  «und» (…hatte UND sich ein erster …) → nebenordnend ✅
3️⃣  «um» (…nur UM gleich darauf …) → unterordnend (Infinitivsatz mit «um … zu») ✅
4️⃣  «und» (…hervorzustrecken UND sich umzuschauen) → nebenordnend ✅

Präpositionen (stehen vor Nomengruppen, regieren Fall):
1️⃣  «über» → über die russschwarzen Dielen ✅
2️⃣  «von» → von Generationen ✅
3️⃣  «an» → an sein Bett ✅
4️⃣  «in» → in einem kleinen Wohligkeitsanfall ✅
5️⃣  «unter» → unter der Decke ✅

⚠️ «nur» = Partikel/Adverb, keine Konjunktion!
⚠️ «darauf» = Pronominaladverb, keine eigenständige Präposition hier`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Konjunktionen: «als» (unterordnend), «und» (2×, nebenordnend), «um» (Infinitivkonjunktion)
2️⃣  «um … zu» zählt als Konjunktion «um» ✅
3️⃣  Präpositionen: stehen direkt vor einer Nomengruppe und regieren deren Kasus
4️⃣  Reihenfolge beachten: Konjunktionen UND Präpositionen in Textfolge aufschreiben`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_PRONOMEN_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 6 (2 Punkte): Pronomen näher bestimmen.

«Statt einer Antwort stiess sich die Mutter vom Türrahmen ab, kam mit ein paar unsicheren Schritten auf ihn zu, blieb dann aber mitten im Raum wieder stehen.» [Z. 37]

Bestimme die unterstrichenen Pronomen näher:
– «einer» (in «Statt einer Antwort»)
– «die» (in «die Mutter»)
– «ein paar» (in «ein paar unsicheren Schritten»)
– «ihn» (in «auf ihn zu»)`,

    options: [
      {
        label: 'einer: Unbestimmter Artikel | die: Bestimmter Artikel | ein paar: Indefinitpronomen | ihn: Personalpronomen',
        correct: true,
      },
      {
        label: 'einer: Indefinitpronomen | die: Bestimmter Artikel | ein paar: Unbestimmter Artikel | ihn: Personalpronomen',
        correct: false,
      },
      {
        label: 'einer: Unbestimmter Artikel | die: Demonstrativpronomen | ein paar: Indefinitpronomen | ihn: Reflexivpronomen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Pronomen-Analyse',
          content: `«einer» → «Statt einer Antwort»
→ steht direkt vor dem Nomen «Antwort» → Unbestimmter Artikel ✅
(Genitiv Fem. Sg.: «einer Antwort»)

«die» → «die Mutter»
→ steht direkt vor dem Nomen «Mutter» → Bestimmter Artikel ✅
(Nominativ Fem. Sg.: «die Mutter»)

«ein paar» → «ein paar unsicheren Schritten»
→ steht allein (nicht direkt als Artikel eines Nomens verstanden, sondern als Mengenangabe) → Indefinitpronomen ✅
(«ein paar» = einige, unbestimmte Anzahl)

«ihn» → «auf ihn zu»
→ vertritt eine Person (Franz) → Personalpronomen ✅
(Akkusativ m. Sg.: «ihn»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Bestimmter Artikel: der/die/das/dem/den/des → direkt vor Nomen
2️⃣  Unbestimmter Artikel: ein/eine/einer → direkt vor Nomen, unbestimmt
3️⃣  Indefinitpronomen: «ein paar», «einige», «manche» → unbestimmte Menge
4️⃣  Personalpronomen: ich/du/er/sie/es/ihn/ihm → vertritt eine Person/Sache`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_WORTARTEN_ZAEHLEN_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=6',
    topic: 'Grammatik',

    questionText: `Aufgabe 7 (3 Punkte): Wie viele Wortarten kommen vor? (5 Grundwortarten)

Satz A: «Die Hütte war stehen geblieben.»
Satz B: «Franz kroch aus dem Bett.»
Satz C: «Ihr Kopf fühlte sich zart an.»`,

    options: [
      {
        label: 'A: 3 | B: 4 | C: 4',
        correct: true,
      },
      {
        label: 'A: 4 | B: 3 | C: 4',
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
          content: `Satz A: «Die Hütte war stehen geblieben.»
→ Die = Pronomen (Bestimmter Artikel)
→ Hütte = Nomen
→ war … geblieben = Verb (Plusquamperfekt)
→ stehen = Verb (Infinitiv in der Konstruktion «stehenbleiben»)
→ Wortarten: Pronomen, Nomen, Verb = 3 ✅
(Kein Adjektiv, kein Partikel im eigentlichen Sinne)

Satz B: «Franz kroch aus dem Bett.»
→ Franz = Nomen (Eigenname)
→ kroch = Verb
→ aus = Partikel (Präposition)
→ dem = Pronomen (Bestimmter Artikel)
→ Bett = Nomen
→ Wortarten: Nomen, Verb, Partikel, Pronomen = 4 ✅

Satz C: «Ihr Kopf fühlte sich zart an.»
→ Ihr = Pronomen (Possessivpronomen)
→ Kopf = Nomen
→ fühlte … an = Verb (trennbares Verb «anfühlen»)
→ sich = Pronomen (Reflexivpronomen)
→ zart = Adjektiv
→ Wortarten: Pronomen, Nomen, Verb, Adjektiv = 4 ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Nur VERSCHIEDENE Wortarten zählen (nicht einzelne Wörter!)
2️⃣  Satz A: kein Adjektiv, kein Partikel → nur 3 Wortarten
3️⃣  Satz B: «aus» = Präposition (Partikel) → 4 Wortarten
4️⃣  Satz C: «zart» = Adjektiv → 4 Wortarten`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_WORTARTEN_DETAIL_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 8 (5 Punkte): Wortart + nähere Bestimmung.

«Für einen Moment schien sie sich suchend umzusehen.» [Z. 38]

Nenne für jedes Wort die Wortart (nach 5 Wortarten) + nähere Bestimmung:

Wörter: Für / einen / Moment / schien / sie / sich`,

    options: [
      {
        label: 'Für: Partikel/Präposition | einen: Pronomen/Unbestimmter Artikel | Moment: Nomen/— | schien: Verb/— | sie: Pronomen/Personalpronomen | sich: Pronomen/Reflexivpronomen',
        correct: true,
      },
      {
        label: 'Für: Partikel/Präposition | einen: Pronomen/Indefinitpronomen | Moment: Nomen/— | schien: Verb/— | sie: Pronomen/Personalpronomen | sich: Pronomen/Personalpronomen',
        correct: false,
      },
      {
        label: 'Für: Konjunktion/— | einen: Pronomen/Unbestimmter Artikel | Moment: Nomen/— | schien: Verb/— | sie: Pronomen/Personalpronomen | sich: Pronomen/Reflexivpronomen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Analyse aller 6 Wörter',
          content: `Für → Partikel (nach 5 Wortarten) / nähere Bestimmung: Präposition ✅
(steht vor «einen Moment», regiert Akkusativ)

einen → Pronomen / nähere Bestimmung: Unbestimmter Artikel ✅
(steht vor «Moment», unbestimmt, Akk. m. Sg.)

Moment → Nomen / nähere Bestimmung: — ✅
(Eigenschaft des Nomens: kein weiterer Untertyp nötig)

schien → Verb / nähere Bestimmung: — ✅
(konjugiertes Verb, hier als Modalverb-ähnliche Konstruktion)

sie → Pronomen / nähere Bestimmung: Personalpronomen ✅
(vertritt eine Person, Nom. 3. Pers. Sg. fem.)

sich → Pronomen / nähere Bestimmung: Reflexivpronomen ✅
(bezieht sich auf das Subjekt «sie» zurück)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Partikel (5-WA-System): Präpositionen, Konjunktionen, Adverbien → «Für» = Präposition
2️⃣  Unbestimmter Artikel NICHT mit Indefinitpronomen verwechseln: «einen Moment» → steht VOR Nomen → Artikel
3️⃣  Reflexivpronomen: «sich» bezieht sich auf das Subjekt des gleichen Satzes → «sich» ≠ Personalpronomen
4️⃣  Nomen und Verben haben keine obligatorische nähere Bestimmung in diesem System`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_OBJEKTE_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 9 (4 Punkte): Objekte herausschreiben und bestimmen.

«Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf und begann ungeschickt über ihr Haar zu streicheln.» [Z. 41]

Schreibe aus dem obigen Satz die Objekte untereinander der Reihe nach heraus und bestimme sie.`,

    options: [
      {
        label: 'einen zögerlichen Schritt: Akkusativobjekt | seine Hand: Akkusativobjekt',
        correct: true,
      },
      {
        label: 'einen zögerlichen Schritt: Akkusativobjekt | seine Hand: Akkusativobjekt | ihren Kopf: Akkusativobjekt | ihr Haar: Akkusativobjekt',
        correct: false,
      },
      {
        label: 'einen zögerlichen Schritt: Akkusativobjekt | ihren Kopf: Dativobjekt | seine Hand: Akkusativobjekt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Objekte finden',
          content: `«Franz tat einen zögerlichen Schritt»
→ tat WAS? → einen zögerlichen Schritt → Akkusativobjekt ✅

«legte seine Hand auf ihren Kopf»
→ legte WAS? → seine Hand → Akkusativobjekt ✅
→ «auf ihren Kopf» = Präpositionalgefüge (Lokalangabe: WOHIN?), kein Objekt!

«begann ungeschickt über ihr Haar zu streicheln»
→ begann … zu streicheln → Infinitivkonstruktion, kein eigentliches Objekt im Sinne einer Nominalgruppe
→ «über ihr Haar» = Präpositionalgefüge, kein klassisches Akkusativobjekt

✅ Laut offizieller Lösung: nur «einen zögerlichen Schritt» und «seine Hand» als Objekte.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Akkusativobjekt: Wen/Was? direkt ohne Präposition
2️⃣  Präpositionalgefüge (auf ihren Kopf, über ihr Haar) = Angaben, keine Objekte
3️⃣  Infinitivkonstruktionen («zu streicheln») = kein klassisches Objekt
4️⃣  Nur Nominalgruppen ohne Präposition als Objekte zählen`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_SUBJEKTE_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=7',
    topic: 'Grammatik',

    questionText: `Aufgabe 10 (2 Punkte): Subjekte herausschreiben.

«Bislang war es umgekehrt gewesen: Er hatte geheult, und die Mutter hatte ihn gestreichelt.» [Z. 44]

Schreibe der Reihe nach alle Subjekte heraus.`,

    options: [
      { label: 'es | Er | die Mutter', correct: true },
      { label: 'es | Er | die Mutter | ihn', correct: false },
      { label: 'Er | die Mutter', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Subjekte finden',
          content: `«Bislang war es umgekehrt gewesen»
→ WAS war umgekehrt? → es → Subjekt ✅ (Platzhalter-Subjekt, Nominativ)

«Er hatte geheult»
→ WER hatte geheult? → Er → Subjekt ✅ (Personalpronomen, Nom.)

«die Mutter hatte ihn gestreichelt»
→ WER hatte gestreichelt? → die Mutter → Subjekt ✅ (Nom.)

⚠️ «ihn» = Akkusativobjekt (WEN gestreichelt?) → kein Subjekt!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Subjekt: WER/WAS + Verb? → Nominativ
2️⃣  Platzhalter-«es» trotzdem als Subjekt aufschreiben!
3️⃣  «ihn» = Akkusativ → kein Subjekt
4️⃣  Reihenfolge im Satz beachten`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_SATZGLIEDER_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 11 (3 Punkte): Satzglieder herausschreiben und bestimmen.

«Unter ihrer Kopfhaut spürte er das warme Pulsieren.» [Z. 46]

Schreibe aus dem obigen Satz die Satzglieder untereinander der Reihe nach heraus und bestimme sie.`,

    options: [
      {
        label: 'Unter ihrer Kopfhaut: Präpositionalgefüge | er: Subjekt | das warme Pulsieren: Akkusativobjekt',
        correct: true,
      },
      {
        label: 'Unter ihrer Kopfhaut: Dativobjekt | er: Subjekt | das warme Pulsieren: Akkusativobjekt',
        correct: false,
      },
      {
        label: 'Unter ihrer Kopfhaut: Präpositionalgefüge | er: Subjekt | das warme Pulsieren: Prädikat',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder bestimmen',
          content: `«Unter ihrer Kopfhaut spürte er das warme Pulsieren.»
→ Prädikat: «spürte» (konjugiertes Verb)

«Unter ihrer Kopfhaut»
→ Präposition «unter» + Nomengruppe → Präpositionalgefüge ✅
→ Funktion: Lokalangabe (WO?)

«er»
→ WER spürte? → er → Subjekt ✅ (Nominativ, Personalpronomen)

«das warme Pulsieren»
→ spürte WAS? → das warme Pulsieren → Akkusativobjekt ✅ (Akkusativ)

⚠️ Das Prädikat («spürte») wird beim Herausschreiben der Satzglieder nicht extra aufgeführt — nur die anderen Satzglieder!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Prädikat (Verb) zuerst finden → «spürte»
2️⃣  WER/WAS? → Subjekt: «er»
3️⃣  spürte WAS? → Akkusativobjekt: «das warme Pulsieren»
4️⃣  Präp. + Nomengruppe → Präpositionalgefüge: «unter ihrer Kopfhaut»`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_DIREKTE_REDE_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 12 (1 Punkt): Direkte Rede → indirekte Rede.

«Er ist ertrunken», sagte sie leise. [Z. 47]

Schreibe den Satz um und setze die direkte Rede durch indirekte Rede.`,

    options: [
      { label: 'Sie sagte leise, er sei ertrunken. / Er sei ertrunken, sagte sie leise.', correct: true },
      { label: 'Sie sagte leise, er ist ertrunken.', correct: false },
      { label: 'Sie sagte leise, er wäre ertrunken.', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Direkte → indirekte Rede',
          content: `Direkte Rede: «Er ist ertrunken» → Indikativ Perfekt: «ist ertrunken»
→ In der indirekten Rede: Konjunktiv I verwenden
→ Perfekt Konjunktiv I: «sei ertrunken» (sein → sei)

✅ Sie sagte leise, er sei ertrunken.
✅ (oder: Er sei ertrunken, sagte sie leise.)

⚠️ «ist ertrunken» (Indikativ) → bleibt nicht im Indikativ → muss in Konjunktiv I
⚠️ «wäre ertrunken» = Konjunktiv II → falsch für indirekte Rede (außer Konjunktiv I gleicht Indikativ)

Satzrahmen: «sagte sie leise» wird zum Begleitsatz (Verbum dicendi)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Indirekte Rede → Konjunktiv I: sein → sei → «er sei ertrunken» ✅
2️⃣  Konjunktiv I Perfekt: sein (Konj. I) + Partizip II: sei ertrunken
3️⃣  Anführungszeichen weglassen, «dass» optional einfügen
4️⃣  NICHT Konjunktiv II («wäre»): der wird nur verwendet, wenn Konj. I = Indikativ`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_FUTUR_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 13 (2 Punkte): Futur I bilden.

«Die Tränen vermischten sich mit dem Regenwasser, und ihre Schultern bebten.» [Z. 34]

Setze den Satz ins Futur I.`,

    options: [
      {
        label: 'Die Tränen werden sich mit dem Regenwasser vermischen, und ihre Schultern werden beben.',
        correct: true,
      },
      {
        label: 'Die Tränen werden sich mit dem Regenwasser vermischt haben, und ihre Schultern werden gebebt haben.',
        correct: false,
      },
      {
        label: 'Die Tränen werden sich mit dem Regenwasser vermischen, und ihre Schultern beben.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Futur I bilden',
          content: `Futur I: werden + Infinitiv (für BEIDE Teilsätze!)

Teilsatz 1: «Die Tränen vermischten sich mit dem Regenwasser»
→ Präteritum «vermischten» → Futur I: «werden … vermischen»
→ ✅ Die Tränen werden sich mit dem Regenwasser vermischen

Teilsatz 2: «ihre Schultern bebten»
→ Präteritum «bebten» → Futur I: «werden … beben»
→ ✅ ihre Schultern werden beben

⚠️ Futur II wäre: werden + Partizip II + haben/sein → «werden … vermischt haben» → NICHT gefragt!
⚠️ Beide Teilsätze umformen — nicht nur einen!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Futur I: werden + Infinitiv (KEIN Partizip II!)
2️⃣  Beide Hauptsätze (durch «und» verbunden) ins Futur I setzen
3️⃣  Reflexivpronomen «sich» bleibt: «werden sich … vermischen»
4️⃣  Futur II ≠ Futur I: Partizip II + haben/sein → falsches Zeitform`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_ZEITFORMEN_ZAEHLEN_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=8',
    topic: 'Grammatik',

    questionText: `Aufgabe 14 (1 Punkt): Zeitformen zählen.

«Schon beim ersten fernen Donnergrollen war Franz in das kleine Fischerhaus gelaufen, das er und seine Mutter in dem Örtchen Nussdorf am Attersee bewohnten.» [Z. 4]

Kreuze an, wie viele VERSCHIEDENE Zeitformen in dem obigen Satz zu finden sind.

A) 1
B) 2
C) 3`,

    options: [
      { label: 'B: 2', correct: true },
      { label: 'A: 1', correct: false },
      { label: 'C: 3', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zeitformen im Satz',
          content: `Hauptsatz: «war … gelaufen»
→ Plusquamperfekt (war + Partizip II) ✅ — Zeitform 1

Relativsatz: «das er und seine Mutter … bewohnten»
→ Präteritum («bewohnten») ✅ — Zeitform 2

⚠️ Im Satz kommen also 2 VERSCHIEDENE Zeitformen vor: Plusquamperfekt und Präteritum.
(«gelaufen» gehört zum Plusquamperfekt von «war … gelaufen», kein eigenes Präteritum!)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Plusquamperfekt: war + Partizip II → «war … gelaufen»
2️⃣  Präteritum: «bewohnten» (einfache Vergangenheit)
3️⃣  Zwei verschiedene Verben, zwei verschiedene Zeitformen → Antwort: 2
4️⃣  Partizip II allein (gelaufen) ist kein eigenständiges Tempus!`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_INFINITIVE_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Grammatik',

    questionText: `Aufgabe 15 (2 Punkte): Alle Verben in der Infinitivform.

«Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf und begann ungeschickt über ihr Haar zu streicheln.» [Z. 41]

Schreibe alle Verben aus dem obigen Satz der Reihe nach untereinander in der Infinitivform auf.`,

    options: [
      { label: 'tun | legen | beginnen | streicheln', correct: true },
      { label: 'tun | legen | beginnen | streicheln | zu streicheln', correct: false },
      { label: 'tat | legen | beginnen | streicheln', correct: false },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verben in der Infinitivform',
          content: `«tat» → Präteritum von «tun» → Infinitiv: tun ✅
«legte» → Präteritum von «legen» → Infinitiv: legen ✅
«begann» → Präteritum von «beginnen» (stark: beginnen → begann) → Infinitiv: beginnen ✅
«streicheln» → steht bereits als Infinitiv (in der «zu streicheln»-Konstruktion) → Infinitiv: streicheln ✅

⚠️ «zu streicheln» = Infinitiv mit «zu» → den Infinitiv «streicheln» aufschreiben, nicht «zu streicheln»
⚠️ «begann … zu streicheln» → zwei Verben: «beginnen» und «streicheln» → beide aufschreiben!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Alle konjugierten Verben UND Infinitive im Satz finden
2️⃣  Konjugierte Formen → Infinitiv: tat→tun, legte→legen, begann→beginnen
3️⃣  Infinitiv mit «zu» → nur den nackten Infinitiv aufschreiben (streicheln, nicht zu streicheln)
4️⃣  Anzahl prüfen: 4 Verben = 4 Infinitive`,
    },
  },

  // ── AUFGABE 16 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_VERBALTEIL_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Grammatik',

    questionText: `Aufgabe 16 (8 Punkte): Verbale Teile näher bestimmen.

«An der Wand über der Altkleiderkiste wackelte der eiserne Jesus, als könnte er sich jeden Augenblick von seinen Nägeln losreissen und vom Kreuz springen, und vom nahen Ufer war das Krachen der Fischerboote zu hören, die von den aufgepeitschten Wellen gegen ihre Uferpflöcke geschleudert wurden.» [Z. 11]

Betrachte die verbalen Teile und kreuze alles Zutreffende an:

Vollverb | Hilfsverb | Modalverb | Personalform | Infinitiv | Partizip II | Konjunktiv

wackelte / könnte / losreissen / springen / war / hören / geschleudert / wurden`,

    options: [
      {
        label: 'wackelte: Vollverb+Personalform | könnte: Modalverb+Personalform+Konjunktiv | losreissen: Vollverb+Infinitiv | springen: Vollverb+Infinitiv | war: Hilfsverb+Personalform | hören: Vollverb+Infinitiv | geschleudert: Vollverb+Partizip II | wurden: Hilfsverb+Personalform',
        correct: true,
      },
      {
        label: 'wackelte: Vollverb+Personalform | könnte: Hilfsverb+Konjunktiv | losreissen: Vollverb+Infinitiv | springen: Vollverb+Infinitiv | war: Hilfsverb+Personalform | hören: Vollverb+Infinitiv | geschleudert: Vollverb+Partizip II | wurden: Hilfsverb+Personalform',
        correct: false,
      },
      {
        label: 'wackelte: Vollverb+Personalform+Konjunktiv | könnte: Modalverb+Personalform+Konjunktiv | losreissen: Vollverb+Infinitiv | springen: Vollverb+Infinitiv | war: Vollverb+Personalform | hören: Vollverb+Infinitiv | geschleudert: Vollverb+Partizip II | wurden: Hilfsverb+Personalform',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Verbale Teile analysieren',
          content: `wackelte → Vollverb ✅ | Personalform ✅
(konjugiert, Präteritum 3. Pers. Sg., kein Hilfs-/Modalverb)

könnte → Modalverb ✅ | Personalform ✅ | Konjunktiv ✅
(Konjunktiv II von «können», modales Verb, konjugiert)

losreissen → Vollverb ✅ | Infinitiv ✅
(trennbares Verb «losreissen», steht im Infinitiv nach «könnte»)

springen → Vollverb ✅ | Infinitiv ✅
(steht im Infinitiv nach «könnte»)

war → Hilfsverb ✅ | Personalform ✅
(«war … zu hören» = Konstruktion mit Infinitiv, «war» als Hilfsverb)

hören → Vollverb ✅ | Infinitiv ✅
(«zu hören» → Infinitiv des Vollverbs «hören»)

geschleudert → Vollverb ✅ | Partizip II ✅
(Partizip II von «schleudern», bildet mit «wurden» Passiv)

wurden → Hilfsverb ✅ | Personalform ✅
(Hilfsverb für Passiv-Bildung mit «geschleudert»)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Modalverb: können/müssen/sollen/wollen/dürfen/mögen → «könnte» = können (Konj. II)
2️⃣  Konjunktiv II: könnte, wäre, hätte, müsste → mit «-te» oder Umlaut
3️⃣  Hilfsverb: haben/sein/werden → bilden Perfekt, Passiv, Futur
4️⃣  Partizip II + wurden = Passiv → «wurden» = Hilfsverb, «geschleudert» = Vollverb
5️⃣  Infinitive nach Modal-/Hilfsverben immer: Vollverb + Infinitiv`,
    },
  },

  // ── AUFGABE 17 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_NEBENSAETZE_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=9',
    topic: 'Grammatik',

    questionText: `Aufgabe 17 (2 Punkte): Zusammengezogene Nebensätze vollständig aufschreiben.

«An der Wand über der Altkleiderkiste wackelte der eiserne Jesus, als könnte er sich jeden Augenblick von seinen Nägeln losreissen und vom Kreuz springen.» [Z. 11]

Im unterstrichenen Teil sind zwei Nebensätze zusammengezogen. Schreibe sie vollständig auf.

1. als könnte _______________________________________________
2. als könnte _______________________________________________`,

    options: [
      {
        label: '1: als könnte er sich jeden Augenblick von seinen Nägeln losreissen. | 2: als könnte er (jeden Augenblick) vom Kreuz springen.',
        correct: true,
      },
      {
        label: '1: als er sich jeden Augenblick von seinen Nägeln losreissen könnte. | 2: als er vom Kreuz springen könnte.',
        correct: false,
      },
      {
        label: '1: als könnte er losreissen. | 2: als könnte er springen.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zusammengezogene Nebensätze auflösen',
          content: `Zusammengezogen: «als könnte er sich jeden Augenblick von seinen Nägeln losreissen UND vom Kreuz springen»
→ «und» verbindet zwei parallele Nebensätze mit gleichem Subjekt und gleichem Modalverb

Vollständig ausgeschrieben:
1. als könnte er sich jeden Augenblick von seinen Nägeln losreissen.
2. als könnte er (jeden Augenblick) vom Kreuz springen.

⚠️ «als könnte» wird in BEIDEN Nebensätzen wiederholt (nicht «als er … könnte»)
⚠️ «sich» gehört nur zum ersten Nebensatz («losreissen» als Reflexivverb)
⚠️ «jeden Augenblick» kann in Nebensatz 2 weggelassen werden (in Klammern)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Zusammengezogen = zwei Sätze mit gleichem Anfang → «als könnte er …» gilt für beide
2️⃣  Jeden Nebensatz vollständig mit Subjekt + Modalverb + Infinitiv aufschreiben
3️⃣  Reflexivpronomen «sich» nur wenn nötig: «losreissen» → sich losreissen ✅
4️⃣  «springen» ist intransitiv, kein Reflexivpronomen nötig`,
    },
  },

  // ── AUFGABE 18 ─────────────────────────────────────────────

  {
    id: 'D3_2021_GRAMMATIK_KOMMA_1',
    year: 2021,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 3',
    group: 'Alte Prüfungen',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1#page=10',
    topic: 'Grammatik',

    questionText: `Aufgabe 18 (3 Punkte): Kommas setzen.

Setze in der untenstehenden Textvariante alle nötigen Kommas:

«Jeden Augenblick schien der eiserne Jesus der an der Wand über der Altkleiderkiste wackelte sich von seinen Nägeln loszureissen als ob er vom Kreuz springen wollte und er hörte ein dumpfes Geräusch ein furchterregendes Krachen denn die aufgepeitschten Wellen schleuderten die Fischerboote gegen die Uferpflöcke und gegen die Kaimauer.»`,

    options: [
      {
        label: 'Jeden Augenblick schien der eiserne Jesus, der an der Wand über der Altkleiderkiste wackelte, sich von seinen Nägeln loszureissen, als ob er vom Kreuz springen wollte, und er hörte ein dumpfes Geräusch, ein furchterregendes Krachen, denn die aufgepeitschten Wellen schleuderten die Fischerboote gegen die Uferpflöcke und gegen die Kaimauer.',
        correct: true,
      },
      {
        label: 'Jeden Augenblick schien der eiserne Jesus der an der Wand wackelte sich loszureissen als ob er springen wollte und er hörte ein Geräusch ein Krachen denn die Wellen schleuderten die Boote.',
        correct: false,
      },
      {
        label: 'Jeden Augenblick schien der eiserne Jesus, der an der Wand über der Altkleiderkiste wackelte sich von seinen Nägeln loszureissen, als ob er vom Kreuz springen wollte und er hörte ein dumpfes Geräusch, ein furchterregendes Krachen denn die aufgepeitschten Wellen schleuderten die Fischerboote.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Kommaregeln anwenden',
          content: `Komma 1: vor «der» → Relativsatz einschliessen
→ «der eiserne Jesus[,] der an der Wand … wackelte[,]» → eingeschobener Relativsatz → je ein Komma davor und danach ✅

Komma 2 + 3: nach «wackelte» (Ende Relativsatz) → bereits erklärt oben

Komma 4: vor «als ob» → Nebensatz: «als ob er vom Kreuz springen wollte»
→ «loszureissen[,] als ob …» ✅

Komma 5: vor «und» → verbindet zwei Hauptsätze → «… wollte[,] und er hörte …» ✅
(Komma vor «und» wenn zwei vollständige Hauptsätze folgen)

Komma 6: «ein dumpfes Geräusch[,] ein furchterregendes Krachen» → Apposition/Erläuterung ✅

Komma 7: vor «denn» → nebenordnende Konjunktion zwischen zwei Hauptsätzen → «Krachen[,] denn …» ✅

⚠️ Jedes falsche ODER fehlende Komma = 0,5 Punkte Abzug!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung der Kanti Frauenfeld zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/132704/AP21_GMS3_D_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Eingeschobener Relativsatz → Komma VOR und NACH dem Satz
2️⃣  Vor unterordnenden Konjunktionen: «als ob» → Komma ✅
3️⃣  Vor «und» zwischen zwei Hauptsätzen → Komma ✅
4️⃣  Vor «denn» (= kausal, nebenordnend) → Komma ✅
5️⃣  Apposition/Erläuterung: «ein Geräusch, ein Krachen» → Komma ✅`,
    },
  },

];