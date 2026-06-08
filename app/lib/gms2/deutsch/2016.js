// app/lib/gms2/deutsch/2016.js
// Aufnahmeprüfung 2016 – Deutsch GMS 2 (Thurgauische Kantonsschulen)
// Teil A: Sprachprüfung — Textgrundlage: Antje Babendererde, «Libellensommer» (S. 7/8)
// Teil B: Schreibaufgabe — 4 Themen zur Wahl

export const questions2016 = [

  // ════════════════════════════════════════════════════════════
  // TEIL A – SPRACHPRÜFUNG
  // ════════════════════════════════════════════════════════════

  // ── AUFGABE 1 ─────────────────────────────────────────────

  {
    id: 'D2_2016_TEXTVERST_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Textverständnis',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=3',

    questionText: `Aufgabe 1 (8 Punkte): Kreuze an – richtig, falsch oder kommt im Text nicht vor?

1. Die Ich-Erzählerin sagt, dass sie Angst hat, wenn die Eltern so laut sind.
2. Jodies Vater arbeitete bei Papermill.
3. Jodies Mutter ist auch arbeitslos.
4. Für Jodie waren die Indianer schuld an der Entlassung ihres Vaters.
5. Allen war klar gewesen, dass der Boykott funktionieren würde.
6. Nicci schlief in Jodies Bett schnell wieder ein.
7. Der Boykott hatte die Entlassung von Jodies Vater zur Folge.
8. Mit einer hoch qualifizierteren Ausbildung hätte Jodies Vater schneller wieder einen Job gefunden.`,

    options: [
      {
        label: '1: falsch | 2: falsch | 3: kommt nicht vor | 4: richtig | 5: falsch | 6: kommt nicht vor | 7: richtig | 8: falsch',
        correct: true,
      },
      {
        label: '1: richtig | 2: falsch | 3: kommt nicht vor | 4: richtig | 5: falsch | 6: kommt nicht vor | 7: richtig | 8: falsch',
        correct: false,
      },
      {
        label: '1: falsch | 2: richtig | 3: falsch | 4: richtig | 5: falsch | 6: kommt nicht vor | 7: richtig | 8: falsch',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Auflösung aller 8 Aussagen',
          content: `1. ❌ falsch – Es war NICCI, die Angst hat: «Kann ich mit in dein Bett kommen? Ich hab Angst, wenn sie so laut sind.» (Z. 40) → Die Ich-Erzählerin sagt das nicht von sich selbst.

2. ❌ falsch – Jodies Vater arbeitete in der PAPPFABRIK (Z. 22), nicht bei Papermill. Papermill ist der kanadische Papierkonzern (Z. 26), der das Holz lieferte, aber Dads Fabrik ist eine andere Firma.

3. 🔲 kommt im Text nicht vor – Über Jodies Mutter und ihre Arbeitssituation wird im Text keine Aussage gemacht.

4. ✅ richtig – «Für Jodie waren die Indianer schuld daran, dass die Pappfabrik schliessen musste» (Z. 1–3) → und die Entlassung des Vaters folgte daraus.

5. ❌ falsch – «Es passierte, womit zunächst keiner gerechnet hatte: Der Boykott funktionierte.» (Z. 28) → Allen war gerade NICHT klar, dass er funktionieren würde.

6. 🔲 kommt im Text nicht vor – Ob Nicci schnell wieder einschlief, wird im Text nicht erwähnt. Der Text endet mit Niccis Aussage (Z. 40), ohne Aussage über Schlaf.

7. ✅ richtig – Der Boykott führte zur Schliessung der Firma (Z. 30–31), was zur Entlassung des Vaters führte.

8. ❌ falsch – «Er war ein hoch qualifizierter Facharbeiter» (Z. 34–35) → er war bereits hoch qualifiziert. Eine höhere Qualifikation hätte nichts geändert, da es keine Verwendung für seine Qualifikation gab (Z. 35).`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «kommt nicht vor» = weder bestätigt noch widerlegt im Text → z.B. Jodies Mutter (Nr. 3)
2️⃣  Nr. 1: Nicci sagt es, nicht die Ich-Erzählerin → falsch!
3️⃣  Nr. 2: Papermill = Papierkonzern, Dads Fabrik = Pappfabrik → nicht dasselbe!
4️⃣  Je 1 Punkt Abzug für fehlende oder falsche Lösung`,
    },
  },

  // ── AUFGABE 2 ─────────────────────────────────────────────

  {
    id: 'D2_2016_TEXTVERST_2',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Textverständnis',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=3',

    questionText: `Aufgabe 2 (8 Punkte): Beantworte die folgenden Fragen stichwortartig.

a) Z. 8/9 («…um damit fertig zu werden»): Womit musste Jodies Familie fertig werden?
b) Z. 13: Was konkret tat Jodie weh? Nenne zwei Dinge.
c) Z. 18: Was meinte Jodie mit «dahin zurück»?
d) Nach welchen zwei Dingen sehnte sie sich konkret bei dieser Vorstellung?
e) Was für Produkte lieferte Dads Fabrik an die Fastfood-Ketten?
f) Worin bestand aus der Sicht der Indianer die Ungerechtigkeit, die Dads Firma beging?
g) Was bezweckte der Boykott gegen die genannten Fastfood-Ketten letztendlich?`,

    options: [
      {
        label: 'a: Entlassung von Dad / Schliessung der Fabrik | b: mit ansehen zu müssen, dass ihre Familie auseinanderfiel + nichts dagegen tun zu können | c: zurück in den Bauch ihrer Mutter | d: Wärme und Sicherheit | e: Produkte aus Pappe/Karton | f: Firma kaufte Holz bei Konzern, der Wälder der Indianer abholzte | g: dass Wälder der Indianer nicht mehr abgeholzt werden sollten',
        correct: true,
      },
      {
        label: 'a: Arbeitslosigkeit | b: Streit der Eltern + Schreien | c: zurück nach Kanada | d: Ruhe und Schlaf | e: Fastfood | f: Indianer wurden nicht entschädigt | g: Schliessung der Fastfood-Ketten',
        correct: false,
      },
      {
        label: 'a: Entlassung von Dad | b: Eltern stritten + Jodie konnte nicht schlafen | c: ins Zimmer der Mutter | d: Wärme und Geborgenheit | e: Holz | f: Bäume wurden gefällt | g: Entlassung von Jodies Vater',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Antworten aus dem Text',
          content: `a) «womit» = mit der Entlassung von Dad / der Schliessung der Fabrik (Z. 8–9: «…und dann bleibt einem nichts anderes übrig, als einen Weg zu finden, um damit fertig zu werden.» → bezieht sich auf die gesamte Situation)

b) Z. 13: «Es tat weh, das mit ansehen zu müssen, ohne etwas dagegen tun zu können.»
→ 1. mit ansehen müssen, dass die Familie auseinanderfiel
→ 2. nichts dagegen tun können

c) «dahin zurück» = zurück in den Bauch ihrer Mutter (Z. 17–18: «Wie ein Baby im Bauch seiner Mutter. Manchmal wünschte ich mich dahin zurück.»)

d) nach Wärme und Sicherheit (Z. 19–20: «Aber warm und sicher war es bestimmt.»)

e) Produkte aus Pappe/Karton (Teller, Becher, Schalen, Verpackungsmaterial aus Pappe) — Z. 29–30: «die Produkte aus Dads Fabrik verwendeten» + die Fabrik ist eine Pappfabrik

f) Dass Dads Firma bei einem Konzern Holz kaufte, der die Wälder der Indianer abholzte (Z. 23–27)

g) Dass die Wälder der Indianer nicht mehr abgeholzt werden sollten (sinngemäss) — Z. 28–30`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Stichwortartig = kurze, präzise Antworten (kein ganzer Aufsatz)
2️⃣  b): ZWEI Dinge nennen → beide Teilantworten nötig
3️⃣  d): konkret «Wärme» und «Sicherheit» aus Z. 19–20 ableiten
4️⃣  Je ½–1 Punkt Abzug für nicht sinngemässe oder inhaltlich unvollständige Antwort`,
    },
  },

  // ── AUFGABE 3 ─────────────────────────────────────────────

  {
    id: 'D2_2016_WORTSCHATZ_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=4',

    questionText: `Aufgabe 3 (3 Punkte): Synonyme finden.

Ersetze die folgenden Ausdrücke durch ein bedeutungsgleiches Wort. Der Sinn, den die Wörter im Text haben, muss erhalten bleiben.

– Anspruch (Z. 24)
– empört (Z. 29)
– qualifiziert (Z. 35)`,

    options: [
      {
        label: 'Anspruch: Recht / Anrecht / Berechtigung | empört: aufgebracht / wütend / entrüstet / erbost / verärgert | qualifiziert: geeignet / ausgebildet / fachkundig / kompetent',
        correct: true,
      },
      {
        label: 'Anspruch: Forderung / Verlangen | empört: traurig / besorgt | qualifiziert: intelligent / klug',
        correct: false,
      },
      {
        label: 'Anspruch: Besitz / Eigentum | empört: überrascht / schockiert | qualifiziert: erfahren / routiniert',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Die drei Wörter im Kontext',
          content: `«Anspruch» (Z. 24) → «auf die [Wälder], auf die es angeblich Anspruch hatte»
= rechtmässiger Anspruch, Recht auf etwas:
→ ✅ Recht, Anrecht, Berechtigung, Vorrecht

«empört» (Z. 29) → «Viele Leute waren empört über die Ungerechtigkeit»
= aufgebracht, zornig, entrüstet:
→ ✅ aufgebracht, wütend, entrüstet, erbost, verärgert, sauer, zornig
→ ❌ traurig/besorgt → anderer Aspekt (Trauer ≠ Empörung)
→ ❌ überrascht → keine Bedeutungsähnlichkeit

«qualifiziert» (Z. 35) → «ein hoch qualifizierter Facharbeiter»
= fachlich ausgebildet, kompetent, geeignet:
→ ✅ geeignet, ausgebildet, befähigt, fachkundig, sachkundig, kompetent
→ ❌ intelligent/klug → andere Dimension (Intelligenz ≠ fachliche Qualifikation)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Kontext beachten: «Anspruch auf Wälder» → Recht/Berechtigung ✅
2️⃣  «empört» = aktive Emotion (Zorn/Entrüstung) → nicht bloss traurig
3️⃣  «qualifiziert» = fachlich ausgebildet → nicht nur intelligent
4️⃣  Je 1 Punkt pro korrekter Lösung; ½ Punkt Abzug für Rechtschreibfehler`,
    },
  },

  // ── AUFGABE 4 ─────────────────────────────────────────────

  {
    id: 'D2_2016_WORTSCHATZ_2',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=4',

    questionText: `Aufgabe 4 (2 Punkte): Begriffe erklären.

Beschreibe mit je einem vollständigen Satz die folgenden zwei Begriffe:

– Ureinwohner sind _______________________________________________
– Ein Boykott ist ________________________________________________`,

    options: [
      {
        label: 'Ureinwohner sind Menschen/Völker, die seit jeher (ursprünglich) in gewissen Gebieten/Ländern gewohnt haben. | Ein Boykott ist die Weigerung, eine bestimmte Ware zu kaufen oder eine bestimmte Firma zu beliefern.',
        correct: true,
      },
      {
        label: 'Ureinwohner sind Indianer in Amerika. | Ein Boykott ist ein Streik von Arbeitern.',
        correct: false,
      },
      {
        label: 'Ureinwohner sind die ersten Menschen auf der Erde. | Ein Boykott ist ein Protest gegen eine Regierung.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Begriffserklärungen',
          content: `Ureinwohner:
→ ✅ «Ureinwohner sind Menschen (Völker), die seit jeher (schon immer / ursprünglich) in gewissen (ihren) Gebieten (Ländern) gewohnt (gelebt) haben.»
→ ❌ Nur «Indianer» → zu eng, da «Ureinwohner» ein allgemeiner Begriff ist

Boykott:
→ ✅ «Ein Boykott ist die Weigerung, eine bestimmte Ware zu kaufen, bei einer bestimmten Firma zu kaufen oder diese zu beliefern.»
→ ❌ Streik → Streik = Arbeitsniederlegung (andere Bedeutung)
→ ❌ Protest gegen Regierung → zu unspezifisch

⚠️ Ein vollständiger Satz ist Bedingung: «Ureinwohner sind …» → Satz muss grammatisch vollständig sein.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Ureinwohner: «ursprünglich / seit jeher in gewissen Gebieten» → der Schlüssel
2️⃣  Boykott: Weigerung zu kaufen/zu beliefern → wirtschaftlicher Druck
3️⃣  Vollständiger Satz: «Ureinwohner SIND …» → Satzgefüge muss komplett sein
4️⃣  Je 1 Punkt für treffende, korrekte Lösung; ½ Punkt Abzug für sprachliche Mängel`,
    },
  },

  // ── AUFGABE 5 ─────────────────────────────────────────────

  {
    id: 'D2_2016_WORTSCHATZ_3',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=4',

    questionText: `Aufgabe 5 (2 Punkte): Wortfamilie «Angst».

Notiere vier Adjektive, die zur Wortfamilie «Angst» gehören.

a) _______________  b) _______________
c) _______________  d) _______________`,

    options: [
      {
        label: 'ängstlich | angsterfüllt | angstfrei | beängstigend | verängstigt | angsteinflössend | angstvoll',
        correct: true,
      },
      {
        label: 'angst | Angst | ängstigen | erschrecken',
        correct: false,
      },
      {
        label: 'ängstlich | mutig | tapfer | sicher',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Adjektive aus der Wortfamilie «Angst»',
          content: `Wortfamilie «Angst» → Adjektive (nicht Nomen oder Verben!):
→ ✅ ängstlich (Angst + -lich)
→ ✅ angsterfüllt (angst- + erfüllt)
→ ✅ angstfrei (angst- + -frei)
→ ✅ beängstigend (be- + ängstigen + -d → Partizip I als Adjektiv)
→ ✅ verängstigt (ver- + ängstigt → Partizip II als Adjektiv)
→ ✅ angsteinflössend (angst- + einflössend)
→ ✅ angstvoll (angst- + -voll)

⚠️ KEINE Nomen (die Angst) oder Verben (sich ängstigen) angeben!
⚠️ Je ½ Punkt pro korrekter Lösung → 4 richtige = 2 Punkte`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Adjektiv-Suffixe: -lich, -voll, -frei, -erfüllt → ängstlich, angstvoll, angstfrei, angsterfüllt
2️⃣  Partizipien als Adjektive: verängstigt, beängstigend
3️⃣  Nur ADJEKTIVE zählen (nicht Nomen «Angst», nicht Verb «ängstigen»!)
4️⃣  Je ½ Punkt pro richtiger Lösung`,
    },
  },

  // ── AUFGABE 6 ─────────────────────────────────────────────

  {
    id: 'D2_2016_WORTSCHATZ_4',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Wortschatz',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=5',

    questionText: `Aufgabe 6 (6 Punkte): Redewendungen – Bedeutungen zuordnen.

Suche für die folgenden Redewendungen die entsprechende Bedeutung aus der Liste und notiere die Ziffer:

a) für jemanden eine Lanze brechen ____
b) jemandem den Kopf waschen ____
c) jemandem auf der Nase herumtanzen ____
d) das Kind mit dem Bad ausschütten ____
e) jemandem kommt die Galle hoch ____
f) etwas schlägt jemandem auf den Magen ____

1. jemanden entwaffnen
2. jemandem die Nase vermöbeln
3. jemandem vor dem Frisieren die Haare waschen
4. jemandem wird übel
5. jemanden ertränken
6. jemanden verletzen
7. über das Ziel hinausschiessen
8. die Anweisungen von jemandem missachten
9. jemanden täuschen
10. jemand wird zornig
11. jemandem deutlich die Meinung sagen
12. den Kontakt zu jemandem abbrechen
13. sich für jemanden einsetzen
14. etwas verdirbt jemandem die Laune
15. jemand muss sich übergeben`,

    options: [
      {
        label: 'a: 13 | b: 11 | c: 8 | d: 7 | e: 10 | f: 14',
        correct: true,
      },
      {
        label: 'a: 1 | b: 11 | c: 8 | d: 7 | e: 10 | f: 4',
        correct: false,
      },
      {
        label: 'a: 13 | b: 3 | c: 8 | d: 7 | e: 10 | f: 14',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Redewendungen und ihre Bedeutungen',
          content: `a) «für jemanden eine Lanze brechen»
→ sich für jemanden einsetzen, jemanden verteidigen
→ ✅ 13: sich für jemanden einsetzen

b) «jemandem den Kopf waschen»
→ jemandem deutlich sagen, was man denkt; jemanden scharf tadeln
→ ✅ 11: jemandem deutlich die Meinung sagen

c) «jemandem auf der Nase herumtanzen»
→ jemandes Anordnungen/Anweisungen ignorieren
→ ✅ 8: die Anweisungen von jemandem missachten

d) «das Kind mit dem Bad ausschütten»
→ im Versuch, etwas Schlechtes zu beseitigen, auch das Gute wegwerfen; über das Ziel hinausschiessen
→ ✅ 7: über das Ziel hinausschiessen

e) «jemandem kommt die Galle hoch»
→ jemand wird sehr zornig/wütend
→ ✅ 10: jemand wird zornig

f) «etwas schlägt jemandem auf den Magen»
→ etwas verdirbt jemandem die Laune / etwas macht jemandem zu schaffen
→ ✅ 14: etwas verdirbt jemandem die Laune

⚠️ Je 1 Punkt Abzug für fehlende oder falsche Lösung!`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «Lanze brechen» → Ritter verteidigt jemanden → einsetzen (13) ✅
2️⃣  «Kopf waschen» → zurechtweisen → Meinung sagen (11) ✅
3️⃣  «Galle hoch» → Galle = Bitterkeit/Zorn → zornig werden (10) ✅
4️⃣  «Kind mit Bad ausschütten» → Baby wegschütten = Gutes verlieren → zu weit gehen (7) ✅
5️⃣  «auf den Magen schlagen» → macht einem zu schaffen → Laune verderben (14) ✅`,
    },
  },

  // ── AUFGABE 7 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_MORPHEME_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=5',

    questionText: `Aufgabe 7 (2 Punkte): Stamm-Morpheme (Wortstämme) notieren.

Notiere alle Stamm-Morpheme (Wortstämme) der folgenden Wörter:

a) getanzt
b) verarbeitet
c) Gemüsebeet
d) verfluchen`,

    options: [
      {
        label: 'a: tanz (Tanz) | b: arbeit (Arbeit) | c: Gemüse + Beet | d: fluch (Fluch)',
        correct: true,
      },
      {
        label: 'a: tanz | b: arbeit | c: Gemüsebeet | d: fluch',
        correct: false,
      },
      {
        label: 'a: getanzt | b: verarbeit | c: Gemüse | d: verfluchen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Stammorpheme (Wortstämme) bestimmen',
          content: `a) «getanzt» → ge- (Präfix) + tanz + -t (Suffix)
→ Stamm: tanz / Tanz ✅

b) «verarbeitet» → ver- (Präfix) + arbeit + -et (Suffix)
→ Stamm: arbeit / Arbeit ✅

c) «Gemüsebeet» → Gemüse + Beet (Kompositum aus zwei Stämmen!)
→ Stämme: Gemüse + Beet (beet / Gemüse-beet) ✅
⚠️ Bei Komposita BEIDE Stämme angeben!

d) «verfluchen» → ver- (Präfix) + fluch + -en (Suffix)
→ Stamm: fluch / Fluch ✅

⚠️ Präfixe (ge-, ver-) und Suffixe (-t, -et, -en) sind KEINE Stämme → weglassen!
⚠️ Je ½ Punkt Abzug für fehlende, falsche oder unvollständige Lösung`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Präfixe entfernen: ge-, ver- → gehören nicht zum Stamm
2️⃣  Suffixe entfernen: -t, -et, -en → gehören nicht zum Stamm
3️⃣  Kompositum: Gemüsebeet = 2 Stämme → BEIDE aufschreiben!
4️⃣  Stamm = der unveränderliche Kern des Wortes`,
    },
  },

  // ── AUFGABE 8 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_WORTARTEN_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=6',

    questionText: `Aufgabe 8 (7 Punkte): Wortarten bestimmen.

Bestimme die Wortarten der im Text unterstrichenen und fett gedruckten Wörter möglichst genau. Verwende die Fachbegriffe (keine Abkürzungen).

«Während einer Stunde hatte ich unter der Bettdecke vergeblich versucht, Nicci zu trösten. Doch nun beruhigte sie sich wieder und ihr Schluchzen hörte langsam auf. Ich weiss nicht, ob meine kleine Schwester mir glaubte. Wo ich doch selbst nicht so recht an das glauben konnte, was ich gesagt hatte. Aber als ich ihr flüsternd eine schöne Geschichte nach der anderen erzählte, hörte ich sie immer gleichmässiger atmen. Doch was sollte ich nun tun, um mich selber zu beruhigen? Ich schaltete um auf träumen. Darin war ich Meisterin. Nachts, wenn alles dunkel und still war, liess es sich am besten träumen.»

Wörter: während / ihr / konnte / hatte / als / was / alles`,

    options: [
      {
        label: 'während: Präposition | ihr: Possessivpronomen | konnte: Modalverb | hatte: Hilfsverb | als: Konjunktion | was: Interrogativpronomen | alles: Indefinitpronomen',
        correct: true,
      },
      {
        label: 'während: Konjunktion | ihr: Personalpronomen | konnte: Hilfsverb | hatte: Hilfsverb | als: Konjunktion | was: Relativpronomen | alles: Adjektiv',
        correct: false,
      },
      {
        label: 'während: Präposition | ihr: Possessivpronomen | konnte: Modalverb | hatte: Modalverb | als: Präposition | was: Interrogativpronomen | alles: Indefinitpronomen',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle 7 Wörter analysieren',
          content: `«während» → «Während einer Stunde» → steht VOR einer Nomengruppe, regiert Genitiv
→ ✅ Präposition
⚠️ «während» kann auch Konjunktion sein (z.B. «während er schläft»), aber hier steht «während EINER STUNDE» → Präposition!

«ihr» → «ihr Schluchzen» → steht vor dem Nomen «Schluchzen», zeigt Zugehörigkeit
→ ✅ Possessivpronomen

«konnte» → «glauben konnte» → drückt Fähigkeit/Können aus, Modalverb
→ ✅ Modalverb

«hatte» → «ich gesagt hatte» → bildet zusammen mit «gesagt» das Plusquamperfekt (Hilfsverb)
→ ✅ Hilfsverb

«als» → «als ich ihr … erzählte» → leitet Nebensatz ein → Konjunktion (unterordnend)
→ ✅ Konjunktion

«was» → «was sollte ich nun tun?» → fragt nach Sache → Interrogativpronomen
→ ✅ Interrogativpronomen (Fragewort)

«alles» → «wenn alles dunkel … war» → unbestimmte Gesamtheit → Indefinitpronomen
→ ✅ Indefinitpronomen`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  «während» + Nomengruppe = Präposition; «während» + Nebensatz = Konjunktion
2️⃣  «ihr Schluchzen» = Possessivpronomen (wessen Schluchzen? → ihr)
3️⃣  «konnte» = Modalverb (können/müssen/dürfen/sollen/wollen/mögen)
4️⃣  «hatte gesagt» = Hilfsverb (haben/sein/werden für Zeitformen)
5️⃣  «was» als Frage = Interrogativpronomen; nach Aussage = Relativpronomen
6️⃣  «alles» = Indefinitpronomen (unbestimmte Totalität)`,
    },
  },

  // ── AUFGABE 9 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_SATZGLIEDER_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=6',

    questionText: `Aufgabe 9 (3 Punkte): Satzglieder mit Senkrechtstrichen trennen.

Trenne in den folgenden zwei Sätzen die Satzglieder mit Senkrechtstrichen.

Satz 1: «Nachts war ich in meinen Träumen die Heldin schillernder Abenteuer in verschiedenen Zeitepochen und auf anderen Erdteilen.»

Satz 2: «Tim, mein Held, rettete mich aus jeder noch so verzwickten Situation.»`,

    options: [
      {
        label: 'S1: Nachts / war / ich / in meinen Träumen / die Heldin schillernder Abenteuer in verschiedenen Zeitepochen und auf anderen Erdteilen. | S2: Tim, mein Held, / rettete / mich / aus jeder noch so verzwickten Situation.',
        correct: true,
      },
      {
        label: 'S1: Nachts / war / ich / in meinen Träumen / die Heldin / schillernder Abenteuer / in verschiedenen Zeitepochen / und / auf anderen Erdteilen. | S2: Tim / mein Held / rettete / mich / aus jeder / noch so verzwickten Situation.',
        correct: false,
      },
      {
        label: 'S1: Nachts war ich / in meinen Träumen die Heldin / schillernder Abenteuer in verschiedenen Zeitepochen und auf anderen Erdteilen. | S2: Tim, mein Held, rettete mich / aus jeder noch so verzwickten Situation.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Satzglieder trennen',
          content: `Satz 1: «Nachts war ich in meinen Träumen die Heldin schillernder Abenteuer in verschiedenen Zeitepochen und auf anderen Erdteilen.»

→ «Nachts» = Temporalangabe (WANN?) = Satzglied 1
→ «war» = Prädikat
→ «ich» = Subjekt
→ «in meinen Träumen» = Präpositionalgefüge (WO?)
→ «die Heldin schillernder Abenteuer in verschiedenen Zeitepochen und auf anderen Erdteilen» = Prädikativum/Akkusativobjekt (WAS war ich?)

✅ Nachts / war / ich / in meinen Träumen / die Heldin schillernder Abenteuer in verschiedenen Zeitepochen und auf anderen Erdteilen.

Satz 2: «Tim, mein Held, rettete mich aus jeder noch so verzwickten Situation.»

→ «Tim, mein Held,» = Subjekt (mit Apposition «mein Held»)
→ «rettete» = Prädikat
→ «mich» = Akkusativobjekt (WEN?)
→ «aus jeder noch so verzwickten Situation» = Präpositionalgefüge (WORAUS?)

✅ Tim, mein Held, / rettete / mich / aus jeder noch so verzwickten Situation.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Satzglied = Einheit, die als Ganzes verschoben werden kann
2️⃣  Apposition («mein Held») gehört zum Subjekt («Tim») → nicht trennen
3️⃣  Lange Nomengruppen («die Heldin schillernder … Erdteilen») = EIN Satzglied
4️⃣  Je ½ Punkt Abzug für fehlende oder falsche Trennung (max. 1½ Pt. pro Satz)`,
    },
  },

  // ── AUFGABE 10 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_SATZGLIEDER_2',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=7',

    questionText: `Aufgabe 10 (6 Punkte): Satzglieder bestimmen.

Bestimme die fett gedruckten Satzglieder so genau wie möglich. Notiere die vollständigen Fachbegriffe (keine Abkürzungen).

«Die vorliegende Problematik (1) sollte man auf keinen Fall unterschätzen. Immer wieder geschehen Dinge (2), mit denen (3) man nicht gerechnet hat. Und dann bleibt einem (4) nichts anderes (5) übrig, als eine Lösung (6) zu finden, um mit der Situation fertig zu werden.»

(1) Die vorliegende Problematik
(2) Dinge
(3) mit denen
(4) einem
(5) nichts anderes
(6) eine Lösung`,

    options: [
      {
        label: '(1): Akkusativobjekt / Nominalgruppe im Akkusativ | (2): Subjekt / Nominalgruppe im Nominativ | (3): Präpositionalgruppe / Präpositionalgelüge | (4): Dativobjekt / Nominalgruppe im Dativ | (5): Subjekt / Nominalgruppe im Nominativ | (6): Akkusativobjekt / Nominalgruppe im Akkusativ',
        correct: true,
      },
      {
        label: '(1): Subjekt | (2): Objekt | (3): Dativobjekt | (4): Akkusativobjekt | (5): Akkusativobjekt | (6): Subjekt',
        correct: false,
      },
      {
        label: '(1): Akkusativobjekt | (2): Akkusativobjekt | (3): Relativpronomen | (4): Dativobjekt | (5): Nominativ | (6): Präpositionalgefüge',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle 6 Satzglieder analysieren',
          content: `(1) «Die vorliegende Problematik» → sollte unterschätzen WAS? → Akkusativobjekt ✅
(Nominalgruppe im Akkusativ: «die … Problematik» = Akk. Fem. Sg.)

(2) «Dinge» → WAS geschehen? → Subjekt ✅
(Nominalgruppe im Nominativ: Dinge = Nom. Pl.)

(3) «mit denen» → Präposition «mit» + Relativpronomen «denen» → Präpositionalgruppe / Präpositionalgefüge ✅
(bezieht sich auf «Dinge», leitet Relativsatz ein)

(4) «einem» → bleibt WEM übrig? → Dativobjekt ✅
(Nominalgruppe im Dativ: «einem» = Dat. Sg., Indefinitpronomen)

(5) «nichts anderes» → WAS bleibt übrig? → Subjekt ✅
(Nominalgruppe im Nominativ: «nichts anderes» = Nom. Sg.)

(6) «eine Lösung» → zu finden WAS? → Akkusativobjekt ✅
(Nominalgruppe im Akkusativ: «eine Lösung» = Akk. Fem. Sg.)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  (1): «unterschätzen WAS?» → Akk. → Akkusativobjekt
2️⃣  (2): «WAS geschieht?» → Nom. → Subjekt
3️⃣  (3): Präp. + Pronomen = Präpositionalgefüge (kein reines Objekt)
4️⃣  (4): «WEM bleibt?» → Dativ → Dativobjekt
5️⃣  (5): «WAS bleibt?» → Nom. → Subjekt (auch wenn es nach dem Verb steht!)
6️⃣  (6): «finden WAS?» → Akk. → Akkusativobjekt`,
    },
  },

  // ── AUFGABE 11 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_DIREKTE_REDE_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=7',

    questionText: `Aufgabe 11 (6 Punkte): Direkte Rede / Satzzeichen.

Notiere die folgenden Sätze korrekt (mit Interpunktion, Gross-/Kleinschreibung):

a) schschsch flüsterte ich nicht weinen es wird alles gut werden
b) Nicci fragte mich ob ich wisse wo Cookie unser Hund jetzt sei
c) ich beschwichtigte sie der ist jetzt bestimmt bei Leuten die es gut meinen`,

    options: [
      {
        label: 'a: «Schschsch», flüsterte ich, «nicht weinen, es wird alles gut werden.» | b: Nicci fragte mich, ob ich wisse, wo Cookie, unser Hund, jetzt sei. | c: Ich beschwichtigte sie: «Der ist jetzt bestimmt bei Leuten, die es gut meinen.»',
        correct: true,
      },
      {
        label: 'a: «schschsch», flüsterte ich «nicht weinen es wird alles gut werden» | b: Nicci fragte mich ob ich wisse wo Cookie unser Hund jetzt sei | c: ich beschwichtigte sie «der ist jetzt bestimmt bei Leuten die es gut meinen»',
        correct: false,
      },
      {
        label: 'a: «Schschsch!» flüsterte ich. «Nicht weinen, es wird alles gut werden.» | b: Nicci fragte mich, ob ich wisse wo Cookie unser Hund jetzt sei. | c: Ich beschwichtigte sie: Der ist jetzt bestimmt bei Leuten, die es gut meinen.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Direkte Rede und Satzzeichen',
          content: `a) «schschsch flüsterte ich nicht weinen es wird alles gut werden»
→ «Schschsch» = direkte Rede (Lautmalerei) → Anführungszeichen + Komma + grosses «f»
→ «nicht weinen, es wird alles gut werden» = zweiter Teil der direkten Rede
→ ✅ «Schschsch», flüsterte ich, «nicht weinen, es wird alles gut werden.»
(Hinweis: «Schschsch(!)» – Ausrufezeichen oder Komma beide akzeptiert)

b) «Nicci fragte mich ob ich wisse wo Cookie unser Hund jetzt sei»
→ Indirekte Rede + eingeschobene Apposition → Kommas
→ ✅ Nicci fragte mich, ob ich wisse, wo Cookie, unser Hund, jetzt sei.

c) «ich beschwichtigte sie der ist jetzt bestimmt bei Leuten die es gut meinen»
→ «ich beschwichtigte sie:» = Redeeinleitung mit Doppelpunkt → dann direkte Rede
→ «der ist» → «Der ist» (Großschreibung nach Anführungszeichen)
→ Relativsatz «die es gut meinen» → Komma vor «die»
→ ✅ Ich beschwichtigte sie: «Der ist jetzt bestimmt bei Leuten, die es gut meinen.»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Direkte Rede: «…», Verb, «…» → Komma VOR und NACH dem Redebegleitsatz
2️⃣  Redeeinleitung mit Doppelpunkt: «sie:» → dann Anführungszeichen + Grossbuchstabe
3️⃣  Apposition («unser Hund») = Einschub → je ein Komma davor und danach
4️⃣  2 Punkte pro Satz; 1 Punkt Abzug pro Fehler; max. 2 Punkte Abzug pro Satz`,
    },
  },

  // ── AUFGABE 12 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_ZEITFORMEN_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=8',

    questionText: `Aufgabe 12 (6 Punkte): Zeitformen bilden.

Setze die folgenden Sätze in die gewünschte Zeitform:

a) Eigentlich hatte ich nichts gegen Indianer. → Perfekt:
b) Viele Arbeiter werden entlassen. → Plusquamperfekt:
c) Sie verlieren den Job. → Futur 2:
d) Es war eine schwierige Zeit für unsere Familie. → Futur 1:
e) Die Pappfabrik wird schliessen müssen. → Präsens:
f) Ich werde es trotzdem hören. → Plusquamperfekt:`,

    options: [
      {
        label: 'a: Eigentlich habe ich nichts gegen Indianer gehabt. | b: Viele Arbeiter waren entlassen worden. | c: Sie werden den Job verloren haben. | d: Es wird eine schwierige Zeit für unsere Familie sein. | e: Die Pappfabrik muss schliessen. | f: Ich hatte es trotzdem gehört.',
        correct: true,
      },
      {
        label: 'a: Eigentlich habe ich nichts gegen Indianer gehabt. | b: Viele Arbeiter hatten entlassen worden. | c: Sie werden den Job verlieren. | d: Es wird eine schwierige Zeit sein. | e: Die Pappfabrik wird schliessen müssen. | f: Ich hatte es trotzdem gehört.',
        correct: false,
      },
      {
        label: 'a: Eigentlich hatte ich nichts gegen Indianer gehabt. | b: Viele Arbeiter waren entlassen worden. | c: Sie werden den Job verloren haben. | d: Es wird eine schwierige Zeit für unsere Familie sein. | e: Die Pappfabrik muss schliessen. | f: Ich werde es trotzdem gehört haben.',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Zeitformen bilden',
          content: `a) Plusquamperfekt → Perfekt: «hatte gehabt» → «habe … gehabt»
→ ✅ Eigentlich habe ich nichts gegen Indianer gehabt.

b) «Viele Arbeiter werden entlassen» (Präsens Passiv) → Plusquamperfekt Passiv:
→ «waren entlassen worden» ✅ (sein Prät. + PII + worden)
→ ✅ Viele Arbeiter waren entlassen worden.

c) «Sie verlieren den Job» → Futur 2:
→ Futur 2 = werden + Infinitiv Perfekt (PII + haben/sein)
→ «verloren haben» → «werden … verloren haben»
→ ✅ Sie werden den Job verloren haben.

d) «Es war eine schwierige Zeit» → Futur 1:
→ Futur 1 = werden + Infinitiv
→ «sein» → «wird … sein»
→ ✅ Es wird eine schwierige Zeit für unsere Familie sein.

e) «Die Pappfabrik wird schliessen müssen» (Futur 1 mit Modalverb) → Präsens:
→ «wird … müssen» → «muss»
→ ✅ Die Pappfabrik muss schliessen.

f) «Ich werde es trotzdem hören» (Futur 1) → Plusquamperfekt:
→ Plusquamperfekt von «hören» (haben-Verb) = hatte + gehört
→ ✅ Ich hatte es trotzdem gehört.`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Perfekt: haben/sein Präsens + PII
2️⃣  Plusquamperfekt: haben/sein Präteritum + PII
3️⃣  Futur 1: werden + Infinitiv
4️⃣  Futur 2: werden + PII + haben/sein (vollendete Zukunft)
5️⃣  Passiv-Plusquamperfekt: war/waren + PII + worden (nicht «geworden»!)
6️⃣  Je 1 Punkt pro korrekt geschriebener Verbform`,
    },
  },

  // ── AUFGABE 13 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_AKTIV_PASSIV_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=8',

    questionText: `Aufgabe 13 (8 Punkte): Aktiv / Passiv und Zeitform bestimmen.

Bestimme die Zeitform der folgenden Sätze und notiere, ob die Sätze im Aktiv oder Passiv stehen (keine Abkürzungen):

a) Gegen Abend wurde es immer kälter.
b) Das Stadion wird erst am Abend geöffnet.
c) Das nächste Spiel werden wir bestimmt gewinnen.
d) Warum hattet ihr das letzte Spiel verloren?
e) Weshalb musste die Fabrik geschlossen werden?
f) Der Anwalt wird den Prozess gewonnen haben.
g) Die Wälder müssen besser geschützt werden.
h) Die Wälder sind durch das Gesetz geschützt worden.`,

    options: [
      {
        label: 'a: Präteritum/Aktiv | b: Präsens/Passiv | c: Futur 1/Aktiv | d: Plusquamperfekt/Aktiv | e: Präteritum/Passiv | f: Futur 2/Aktiv | g: Präsens/Passiv | h: Perfekt/Passiv',
        correct: true,
      },
      {
        label: 'a: Präteritum/Passiv | b: Präsens/Passiv | c: Futur 1/Aktiv | d: Plusquamperfekt/Aktiv | e: Präteritum/Passiv | f: Futur 2/Aktiv | g: Präsens/Passiv | h: Perfekt/Passiv',
        correct: false,
      },
      {
        label: 'a: Präteritum/Aktiv | b: Futur 1/Passiv | c: Futur 1/Aktiv | d: Plusquamperfekt/Aktiv | e: Präteritum/Passiv | f: Futur 2/Aktiv | g: Präsens/Passiv | h: Plusquamperfekt/Passiv',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Alle 8 Sätze analysieren',
          content: `a) «Gegen Abend wurde es immer kälter.»
→ «wurde … kälter» = Prädikativ mit «werden», kein Passiv (kein Partizip II!)
→ Zeitform: Präteritum | Aktiv ✅

b) «Das Stadion wird erst am Abend geöffnet.»
→ «wird … geöffnet» = Präsens Passiv (werden + PII)
→ Zeitform: Präsens | Passiv ✅

c) «Das nächste Spiel werden wir bestimmt gewinnen.»
→ «werden … gewinnen» = Futur 1 (werden + Infinitiv)
→ Zeitform: Futur 1 | Aktiv ✅

d) «Warum hattet ihr das letzte Spiel verloren?»
→ «hattet … verloren» = Plusquamperfekt (hatten + PII)
→ Zeitform: Plusquamperfekt | Aktiv ✅

e) «Weshalb musste die Fabrik geschlossen werden?»
→ «musste … geschlossen werden» = Modalverb + Passiv-Infinitiv
→ Zeitform: Präteritum | Passiv ✅

f) «Der Anwalt wird den Prozess gewonnen haben.»
→ «wird … gewonnen haben» = Futur 2 (werden + PII + haben)
→ Zeitform: Futur 2 | Aktiv ✅

g) «Die Wälder müssen besser geschützt werden.»
→ «müssen … geschützt werden» = Modalverb + Passiv-Infinitiv
→ Zeitform: Präsens | Passiv ✅

h) «Die Wälder sind durch das Gesetz geschützt worden.»
→ «sind … worden» = Perfekt Passiv (sein Präs. + PII + worden)
→ Zeitform: Perfekt | Passiv ✅`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Passiv erkennen: werden/sein + Partizip II + «worden»
2️⃣  a) «wurde kälter» = KEINE Passiv! → Zustandsveränderung mit werden = Aktiv
3️⃣  Futur 2: werden + PII + haben/sein (vollendete Zukunft)
4️⃣  Modalverb + Passiv-Infinitiv = Passiv (e: musste … werden, g: müssen … werden)
5️⃣  Je 1 Punkt Abzug für falsche, unvollständige oder fehlende Lösung`,
    },
  },

  // ── AUFGABE 14 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_KASUS_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=9',

    questionText: `Aufgabe 14 (5 Punkte): Ausdrücke in Klammern in den richtigen Fall setzen.

a) Der Ausgang des laufenden Prozesses liegt ausserhalb (sein Einflussbereich) _______________.
b) Gemäss (das geltende Recht) _______________ dürfen bei uns Wälder nicht ohne (ein konkreter Wiederaufforstungsplan) _______________ abgeholzt werden.
c) Viele Leute haben gegenüber (der neue Bahnhof) _______________ demonstriert.
d) Roger Federer gilt als (einer der besten Tennisspieler) _______________ aller Zeiten.`,

    options: [
      {
        label: 'a: seines Einflussbereich(e)s | b: dem geltenden Recht / geltendem Recht | einen konkreten Wiederaufforstungsplan | c: dem neuen Bahnhof | d: einer der besten Tennisspieler',
        correct: true,
      },
      {
        label: 'a: seinem Einflussbereich | b: das geltende Recht | ein konkreter Wiederaufforstungsplan | c: den neuen Bahnhof | d: einen der besten Tennisspieler',
        correct: false,
      },
      {
        label: 'a: seines Einflussbereichs | b: dem geltenden Recht | einem konkreten Wiederaufforstungsplan | c: dem neuen Bahnhof | d: einer der besten Tennisspieler',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Präpositionen und ihre Kasus',
          content: `a) «ausserhalb» → regiert immer den GENITIV
→ «ausserhalb seines Einflussbereich(e)s» ✅ (Genitiv m. Sg.: seines …-s)

b) «gemäss» → regiert DATIV (Schweizer Schreibweise: gemäss + Dativ)
→ «gemäss dem geltenden Recht» / «gemäss geltendem Recht» ✅

«ohne» → regiert AKKUSATIV
→ «ohne einen konkreten Wiederaufforstungsplan» ✅ (Akk. m. Sg.: einen)

c) «gegenüber» → regiert DATIV
→ «gegenüber dem neuen Bahnhof» ✅ (Dat. m. Sg.: dem … Bahnhof)

d) «als» + Apposition → GLEICHSTAND: gleicher Fall wie der Bezugsausdruck
→ «gilt als» + Nominativ (appositiver Nominativ): «als einer der besten Tennisspieler» ✅
(«einer» = Nom. m. Sg. in dieser Konstruktion)`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  ausserhalb → Genitiv: seines Einflussbereich(e)s ✅
2️⃣  gemäss → Dativ: dem geltenden Recht ✅
3️⃣  ohne → Akkusativ: einen konkreten Plan ✅
4️⃣  gegenüber → Dativ: dem neuen Bahnhof ✅
5️⃣  «gilt als» → Nominativ-Apposition: einer der besten ✅`,
    },
  },

  // ── AUFGABE 15 ─────────────────────────────────────────────

  {
    id: 'D2_2016_GRAMMATIK_FEHLER_1',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Grammatik',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=9',

    questionText: `Aufgabe 15 (3 Punkte): Fehler finden und korrigieren.

In den folgenden Sätzen ist jeweils ein Wort unlogisch oder grammatikalisch nicht korrekt. Streiche dieses Wort durch und notiere auf der Linie ein korrektes Lösungswort! Die Satzstellung/Wortabfolge darf nicht verändert werden.

a) Die Abholzung der Wälder wurde verboten; deshalb missachten einige Konzerne das neue Gesetz.
b) Viele Menschen essen zu viel Fastfood, weshalb sie sich damit schaden.
c) Nachdem der Anwalt seine Klage eingereicht hat, dauerte es nur gerade ein halbes Jahr, bis die Abholzung der Wälder gestoppt wurde.`,

    options: [
      {
        label: 'a: deshalb → trotzdem / jedoch / dennoch / doch | b: weshalb → obschon / obwohl | c: hat → hatte',
        correct: true,
      },
      {
        label: 'a: verboten → erlaubt | b: schaden → helfen | c: dauerte → dauert',
        correct: false,
      },
      {
        label: 'a: missachten → befolgen | b: Fastfood → gesund | c: gestoppt → erlaubt',
        correct: false,
      },
    ],

    solution: {
      intro: ``,
      steps: [
        {
          title: '📖 Fehleranalyse',
          content: `a) «…wurde verboten; deshalb missachten einige Konzerne…»
→ «deshalb» = kausal-konsekutiv (weil verboten, DESHALB…) — logisch falsch: weil es verboten wurde, missachten sie es trotzdem → Adversativ/Konzessiv nötig
→ ❌ «deshalb» → ✅ «trotzdem» / «jedoch» / «dennoch» / «doch»

b) «…essen zu viel Fastfood, weshalb sie sich damit schaden.»
→ «weshalb» leitet einen Kausalsatz ein (= wegen dem) — logisch aber: «obwohl/obschon sie sich damit schaden, essen sie trotzdem viel»
→ ❌ «weshalb» → ✅ «obschon» / «obwohl»

c) «Nachdem der Anwalt seine Klage eingereicht hat, dauerte es…»
→ «Nachdem» = Vorzeitigkeit → verlangt Plusquamperfekt im Nebensatz (NICHT Perfekt!)
→ ❌ «hat» (Perfekt) → ✅ «hatte» (Plusquamperfekt)
→ Korrekt: «Nachdem der Anwalt seine Klage eingereicht hatte, dauerte es…»`,
        },
        {
          title: '📄 Offizielle Schullösung',
          content: `Klicke auf den Button um die offizielle Schullösung zu öffnen.`,
          solutionUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106565/AP16_D_GMS2_L%C3%B6sung.pdf?fp=1',
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  a) «deshalb» impliziert Folge, aber Konzerne tun das TROTZ Verbot → «trotzdem/dennoch»
2️⃣  b) «weshalb» = Frageadverb/Kausal, aber Sinn: «obwohl sie sich schaden» → «obschon/obwohl»
3️⃣  c) «Nachdem» + Perfekt = Fehler! → «Nachdem» verlangt Plusquamperfekt → «hatte» ✅
4️⃣  Je 1 Punkt pro korrekter Lösung`,
    },
  },

  // ════════════════════════════════════════════════════════════
  // TEIL B – SCHREIBAUFGABE
  // ════════════════════════════════════════════════════════════

  {
    id: 'D2_2016_SCHREIB_ABENTEUER',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 1 – Ein grosses Abenteuer:

«Doch damals ahnte ich noch nicht, was mir bevorstand. Ein grosses Abenteuer. Vielleicht ein bisschen zu gross für mich.»
(Diese Sätze stammen aus dem Text der Sprachprüfung.)

Hast du auch schon ein grosses Abenteuer erlebt? Eines, das im Nachhinein «ein bisschen zu gross» für dich war?
Berichte möglichst anschaulich darüber!
Wie hast du dich dabei gefühlt? Wie bist du damit umgegangen?`,

    options: [
      {
        label: 'Ich-Perspektive | Erlebtes Abenteuer | Gefühle beschreiben | Rückblickende Reflexion | Passender Titel',
        correct: true,
      },
      {
        label: 'Allgemeines über Abenteuer | Keine persönliche Erfahrung | Kein Aufbau',
        correct: false,
      },
      {
        label: 'Fiktive Geschichte ohne Ichbezug | Keine Gefühle | Kein Titel',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt einen persönlichen Erlebnisbericht. Ziel: ein konkretes, anschauliches Abenteuer schildern und dabei Gefühle und Reflexion einbauen.`,
      steps: [
        {
          title: '📖 Was die Aufgabe verlangt',
          content: `→ Ein eigenes, persönlich erlebtes Abenteuer schildern (nicht erfunden)
→ Es soll «ein bisschen zu gross» gewesen sein → Herausforderung, Überforderung, Wagnis
→ Gefühle vor, während und nach dem Abenteuer beschreiben
→ Reflexion: Wie bist du damit umgegangen?
→ Textbezug zum «Libellensommer» empfohlen (aber nicht zwingend)`,
        },
        {
          title: '✍️ Aufbau',
          content: `TITEL: Passend zum Inhalt setzen (z.B. «Der Sprung ins Unbekannte», «Der Tag, an dem ich zu mutig war»)

EINLEITUNG: Einstieg mit konkreter Situation
→ Wann? Wo? Mit wem? → Leser in die Szene holen
→ Spannung aufbauen: «Ich hätte nie gedacht, dass…»

HAUPTTEIL: Das Abenteuer selbst
→ Was ist passiert? (chronologisch oder mit Rückblenden)
→ Konkrete Details, Dialoge, Sinneseindrücke
→ Der Moment, wo es «zu gross» wurde: Überforderung, Angst, Ungewissheit
→ Wie hast du reagiert?

SCHLUSS: Rückblick / Fazit
→ Wie endete das Abenteuer?
→ Was hast du dabei gelernt / wie hat es dich verändert?
→ Gefühl im Nachhinein: «Im Nachhinein bin ich froh, dass…»`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Anschauliche Schilderung (nicht nur aufzählen, sondern zeigen!)
✅ Persönliche Gefühle beschrieben (nicht nur Fakten)
✅ Klarer Aufbau mit Einleitung, Hauptteil, Schluss
✅ Eigener Titel
✅ Reflexion: «Wie bist du damit umgegangen?»
✅ Sprachliche Qualität: präzise, abwechslungsreich, korrekte Rechtschreibung
✅ Ca. 1–2 Seiten (breiter Rand für Korrekturen)`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  KONKRET: Nicht «Ich war mal auf einem Berg», sondern «Es war 6 Uhr morgens, der Nebel lag tief…»
2️⃣  GEFÜHLE: Zeigen statt benennen: statt «Ich hatte Angst» → «Meine Hände zitterten»
3️⃣  WENDEPUNKT: Der Moment, wo es «zu gross» wurde → das ist die Herzszene!
4️⃣  SCHLUSS: Was hast du gelernt? → gibt dem Text Tiefe
5️⃣  TITEL: Kein «Mein Abenteuer» → etwas Treffenderes!`,
    },
  },

  {
    id: 'D2_2016_SCHREIB_SICHERER_ORT',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 2 – Ein sicherer Ort:

Jodie, die Hauptfigur aus der Erzählung «Libellensommer», sehnt sich manchmal zurück in den Bauch ihrer Mutter, wo es sicher und warm war.

Gibt es für dich einen Ort, an dem du dich sicher fühlst? Beschreibe ihn!
Mach in deinem Text deutlich, was dir an diesem Ort Sicherheit gibt, und erkläre auch, was du mit «Sicherheit» meinst.`,

    options: [
      {
        label: 'Konkreter Ort beschreiben | Was gibt Sicherheit? | Eigene Definition von «Sicherheit» | Textbezug zu Jodie möglich | Passender Titel',
        correct: true,
      },
      {
        label: 'Abstrakte Definition von Sicherheit | Kein konkreter Ort | Kein Ich-Bezug',
        correct: false,
      },
      {
        label: 'Liste von sicheren Orten | Keine Gefühle | Kein Bezug zu eigenen Erfahrungen',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt eine persönliche Beschreibung eines sicheren Orts verbunden mit einer Reflexion über den Begriff «Sicherheit».`,
      steps: [
        {
          title: '📖 Was die Aufgabe verlangt',
          content: `→ Einen konkreten Ort beschreiben (kann real oder vorgestellt sein)
→ Erklären, was genau diesen Ort sicher macht (Atmosphäre, Menschen, Erinnerungen?)
→ Eigene Definition von «Sicherheit» einbauen
→ Verbindung zu Jodie/Text möglich, aber nicht zwingend`,
        },
        {
          title: '✍️ Aufbau',
          content: `TITEL: z.B. «Mein Hafen», «Wo die Welt draussen bleibt», «Das alte Sofa»

EINLEITUNG:
→ Einstieg mit dem Ort (Sinneseindrücke: Was siehst/riechst/hörst du dort?)
→ Bezug zu Jodie: «Wie Jodie sich nach dem Bauch ihrer Mutter sehnt, habe ich…»

HAUPTTEIL – DER ORT:
→ Konkrete Beschreibung: Wo? Wie sieht es aus?
→ Warum ist dieser Ort sicher? → Was gibt dir das Gefühl der Sicherheit?
→ Menschen? Vertrautheit? Stille? Erinnerungen?

HAUPTTEIL – WAS IST «SICHERHEIT»?:
→ Eigene Definition: Ist es körperliche Sicherheit? Emotionale? Geborgenheit?
→ Beispiel: «Sicherheit bedeutet für mich nicht die Abwesenheit von Gefahr, sondern…»

SCHLUSS:
→ Warum brauchst du diesen Ort?
→ Was passiert, wenn du dort bist?`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Konkreter Ort anschaulich beschrieben
✅ Erklärung, was dort Sicherheit gibt
✅ Eigene Definition von «Sicherheit» vorhanden
✅ Textbezug zu Jodie (empfohlen)
✅ Klarer Aufbau
✅ Sprachliche Qualität: präzise, ansprechend, Rechtschreibung
✅ Eigener Titel`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  Ort ZEIGEN: Sinneseindrücke (Gerüche, Geräusche, Texturen) → macht Text lebendig
2️⃣  Sicherheit DEFINIEREN: Was bedeutet es für dich persönlich? → Herzstück des Textes
3️⃣  JODIE-BEZUG: kurz erwähnen → zeigt Textverständnis
4️⃣  SCHLUSS mit Gewinn: Was gibt dir dieser Ort?`,
    },
  },

  {
    id: 'D2_2016_SCHREIB_UNGERECHTIGKEIT',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 3 – Eine Ungerechtigkeit:

Erzähle möglichst anschaulich von einem Ereignis, das du als ungerecht empfunden hast.
Erwähne auch, ob andere Menschen deine Empfindung geteilt haben oder nicht, und warum.
Zeige auf, weshalb oft dasselbe Ereignis von den einen Menschen als ungerecht und von den anderen als gerecht empfunden wird.`,

    options: [
      {
        label: 'Konkretes Erlebnis | Eigene Empfindung + Empfindung anderer | Perspektivenwechsel (gerecht/ungerecht) | Passender Titel',
        correct: true,
      },
      {
        label: 'Nur abstrakte Aussagen über Gerechtigkeit | Kein eigenes Erlebnis | Keine anderen Perspektiven',
        correct: false,
      },
      {
        label: 'Liste von Ungerechtigkeiten | Keine persönliche Betroffenheit | Kein Aufbau',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt eine erörternde Erzählung: ein konkretes Erlebnis + Reflexion über verschiedene Perspektiven auf Gerechtigkeit.`,
      steps: [
        {
          title: '📖 Was die Aufgabe verlangt',
          content: `→ Ein konkretes, persönlich erlebtes Ereignis schildern (anschaulich!)
→ Eigene Empfindung: Warum war es für dich ungerecht?
→ Anderer Blickwinkel: Wie sahen andere das? Warum anders?
→ Reflexion: Warum werden dieselben Ereignisse unterschiedlich wahrgenommen?`,
        },
        {
          title: '✍️ Aufbau',
          content: `TITEL: z.B. «Zwei Seiten einer Medaille», «Was du für Recht hältst…»

EINLEITUNG: Das Ereignis vorstellen (wann, wo, wer)

HAUPTTEIL 1 – DEINE PERSPEKTIVE:
→ Was genau ist passiert?
→ Warum hast du es als ungerecht empfunden?
→ Wie hast du dich gefühlt?

HAUPTTEIL 2 – ANDERE PERSPEKTIVE(N):
→ Wie haben andere das Ereignis wahrgenommen?
→ Haben sie deine Empfindung geteilt? Warum (nicht)?
→ Welche Argumente hatten sie für ihre Sicht?

HAUPTTEIL 3 – REFLEXION:
→ Warum sehen Menschen dasselbe Ereignis so unterschiedlich?
→ Eigene Werte, eigene Betroffenheit, unterschiedliche Interessen

SCHLUSS:
→ Was hast du aus diesem Erlebnis mitgenommen?
→ Kann es absolute Gerechtigkeit geben?`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Anschauliche Schilderung des Ereignisses
✅ Eigene Empfindung klar begründet
✅ Andere Perspektiven berücksichtigt und erklärt
✅ Reflexion über Wahrnehmung von Gerechtigkeit
✅ Klarer Aufbau
✅ Sprachliche Qualität
✅ Eigener Titel`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  KONKRET: Nicht «Manchmal ist das Leben ungerecht», sondern ein SPEZIFISCHES Ereignis
2️⃣  ZWEI SEITEN zeigen: deine Sicht + mindestens eine andere Sicht → zeigt Reife
3️⃣  REFLEXION: Warum sehen Menschen Gerechtigkeit unterschiedlich? → wichtigster Teil!
4️⃣  SCHLUSS: eigene Haltung klar machen`,
    },
  },

  {
    id: 'D2_2016_SCHREIB_FORTSETZUNG',
    year: 2016,
    subject: 'Deutsch',
    exam: 'Deutsch GMS 2',
    group: 'Alte Prüfungen',
    topic: 'Schreibaufgabe',
    pdfUrl: 'https://www.kanti-frauenfeld.ch/public/upload/assets/106434/AP16_D_GMS2_Pruefung.pdf?fp=1#page=10',

    questionText: `Schreibaufgabe 4 – Fortsetzungsgeschichte:

«Am nächsten Morgen erwachte ich unausgeschlafen, und der Tag in der Schule wurde zur Qual. Nicht mal meine beste Freundin Marla schaffte es, mich aufzumuntern, und ich war froh, als ich endlich nach Hause gehen konnte.
Dad war nicht da. Er hatte kein Essen für mich vorbereitet, aber ich dachte mir nichts dabei. Das war in letzter Zeit häufig vorgekommen.»

Erfinde und schreibe eine spannende Fortsetzung. Decke auch auf, wieso die Ich-Erzählerin oder der Ich-Erzähler unausgeschlafen ist und weshalb der Vater nicht da ist. Setze einen passenden Titel.`,

    options: [
      {
        label: 'Ich-Perspektive (Jodie) | Erklärung: warum unausgeschlafen + warum Vater weg | Spannende Fortsetzung | Glaubwürdiges Ende | Passender Titel',
        correct: true,
      },
      {
        label: 'Andere Perspektive | Keine Erklärungen | Keine Spannung | Kein Titel',
        correct: false,
      },
      {
        label: 'Beliebige Fortsetzung ohne Textbezug | Kein logischer Anschluss an den Vorgabetext',
        correct: false,
      },
    ],

    solution: {
      intro: `Diese Aufgabe verlangt eine kreative Fortsetzung im Stil des Originaltexts. Der Vorgabetext ist ein Auszug aus Antje Babendererdes «Libellensommer».`,
      steps: [
        {
          title: '📖 Was die Aufgabe verlangt',
          content: `→ Die Geschichte konsistent weiterführen (gleiche Ich-Erzählerin = Jodie)
→ ZWEI offene Fragen beantworten:
   1. Warum ist Jodie unausgeschlafen? (→ Streit der Eltern in der Nacht, Z. 14–16)
   2. Warum ist der Vater nicht da? (→ Jobsuche? Sozialamt? Streit mit Mutter?)
→ Spannende Handlung entwickeln
→ Überzeugender Schluss
→ Ton zum Original passend: jugendlich, direkt, leicht melancholisch`,
        },
        {
          title: '✍️ Möglicher Aufbau',
          content: `VORGABETEXT: Beginnt nach dem langen Nacht-/Elternstreit-Erlebnis

TITEL: z.B. «Stille im Haus», «Wo ist Dad?», «Der leere Tisch»

EINSTIEG (an Vorgabetext anschliessen):
→ Jodie kommt nach Hause → keine Erklärung zunächst → Spannung aufbauen
→ Jodie wartet, versucht Dad zu erreichen, denkt nach

WARUM UNAUSGESCHLAFEN (enthüllen):
→ Rückblende auf die Nacht: Elternstreit, Nicci, Kissen, Schreien
→ Bereits im Sprachprüfungstext angedeutet → logisch aufgreifen

WARUM DAD NICHT DA (enthüllen):
→ Möglichkeit 1: Er ist auf dem Sozialamt / Jobsuche (Z. 36: «blieb ihm nichts anderes übrig»)
→ Möglichkeit 2: Eltern haben sich getrennt / er ist ausgezogen
→ Kreative Möglichkeit: Er hat überraschend eine Arbeit bekommen

SCHLUSS:
→ Auflösung der Spannung → glaubwürdig
→ Jodie's Gefühle und Reaktion
→ Kein zu kitschiges Happy End, kein zu düsteres Ende → «offen, aber hoffnungsvoll»`,
        },
        {
          title: '🎯 Bewertungskriterien',
          content: `✅ Nahtloser Anschluss an den Vorgabetext
✅ Beide offenen Fragen beantwortet (warum unausgeschlafen + warum Vater weg)
✅ Spannende, abwechslungsreiche Handlung
✅ Glaubwürdiges, überzeugendes Ende
✅ Ton passt zum Original (Jodie's Stimme beibehalten)
✅ Eigener Titel gesetzt
✅ Klarer Aufbau, gute Rechtschreibung`,
        },
        {
          title: '💡 Formulierungshilfen',
          content: `Einstieg: «Die Stille im Haus war seltsam. Nicht die gute Stille, die eintritt, wenn alle schlafen – die andere Stille.»

Rückblende: «Ich hatte kaum geschlafen. Gegen zwei Uhr morgens war es schliesslich ruhig geworden, aber das Schreien hatte sich festgesetzt.»

Spannung: «Ich rief auf Dads Handy an. Dreimal. Beim vierten Mal schaltete es direkt auf die Mailbox.»

Wende: «Der Brief lag auf dem Küchentisch. Er war nicht zugemacht. Das war vielleicht das Schlimmste.»`,
        },
      ],
      tip: `🍳 Kochrezept:
1️⃣  TON beibehalten: Jodies Stimme → direkt, jugendlich, ein bisschen resigniert
2️⃣  BEIDE FRAGEN beantworten: unausgeschlafen + Vater weg → nicht vergessen!
3️⃣  SPANNUNG aufbauen: nicht alles sofort erklären → langsam enthüllen
4️⃣  SCHLUSS: nicht zu happyend, nicht zu düster → «realistisch offen»
5️⃣  TEXTBEZUG: Details aus dem Originaltext aufgreifen (Nicci, Sozialamt, Pappfabrik)`,
    },
  },

];