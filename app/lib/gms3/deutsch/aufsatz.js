// app/lib/gms3/deutsch/aufsatz.js
// Aufsatz / Schreibaufgaben der Aufnahmeprüfungen GMS 3 (Deutsch).
// Titel und Aufgabenstellungen sind wörtlich aus den Prüfungs-PDFs übernommen
// (Originalschreibweise). Textanfänge und Lesetexte stehen nicht hier – dafür
// führt der Link ins Prüfungs-PDF.
//
// form: 'bis2023' = vier Themen zur Auswahl
//       'ab2024'  = drei Schreibaufgaben zu einem gemeinsamen Lesetext
//
// Diese Einträge sind kein Aufgaben-Pool: Sie zählen nicht im Fortschritt.

const AP18 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/106446/AP18%20GMS3%20D.pdf?fp=1';
const AP19 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/106596/AP19_GMS3_D_Pr%C3%BCfung.pdf?fp=2';
const AP20 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/106463/AP20_GMS3_D_Pr%C3%BCfung.pdf?fp=2';
const AP21 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/119954/AP21_GMS3_D_Pr%C3%BCfung.pdf?fp=1';
const AP23 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/147190/AP23_GMS3_D_Pr%C3%BCfung.pdf?fp=1';
const AP24 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/164519/AP24_GMS3_D_Schreibaufgabe.pdf?fp=1';
const AP25 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/179272/AP25_GMS3_D_Schreibaufgabe.pdf?fp=1';
const AP26 = 'https://www.kanti-frauenfeld.ch/public/upload/assets/190991/AP26_GMS3_Deutsch_Schreibaufgabe.pdf?fp=1';

// Hinweise zur Fortsetzungsaufgabe – wörtlich, pro Jahrgang leicht verschieden.
const FORTSETZUNG_OHNE_ABSCHREIBEN = `Der untenstehende Text geht noch weiter. Schreibe eine glaubwürdige Fortsetzung und beachte dabei Folgendes:
• Der Inhalt und die sprachliche Gestaltung der Fortsetzung sollen zum Textanfang passen.
• Die Fortsetzung soll ein überzeugendes Ende haben.
• Die Geschichte soll einen passenden Titel haben.`;

const FORTSETZUNG_MIT_ABSCHREIBEN = `${FORTSETZUNG_OHNE_ABSCHREIBEN}
• Schreibe den Textanfang wörtlich ab, bevor du mit deiner Fortsetzung anfängst.`;

export const aufsatzGms3 = [
  // ─── 2026 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2026_1',
    year: 2026,
    nr: 1,
    textsorte: 'Erörterung',
    titel: null,
    aufgabe: `«Immer mehr Eltern fahren ihre Kinder mit dem Auto zur Schule.» Erörtere diese Entwicklung. Verwende dazu Beispiele aus dem Text und schreibe auch über vergleichbare Situationen, in denen es nicht um den Schulweg geht.`,
    lesetext: 'Wer seine Kinder zur Schule fährt, schadet ihnen',
    pdfUrl: `${AP26}#page=1`,
    form: 'ab2024',
  },
  {
    id: 'D3_AUFSATZ_2026_2',
    year: 2026,
    nr: 2,
    textsorte: 'Freier Text',
    titel: null,
    aufgabe: `Wo hättest du gern, dass man sich mehr um dich kümmert, wo nicht? Schreibe, ausgehend vom Text, über Situationen, in denen das eine oder das andere der Fall ist!`,
    lesetext: 'Wer seine Kinder zur Schule fährt, schadet ihnen',
    pdfUrl: `${AP26}#page=1`,
    form: 'ab2024',
  },
  {
    id: 'D3_AUFSATZ_2026_3',
    year: 2026,
    nr: 3,
    textsorte: 'Freier Text',
    titel: null,
    aufgabe: `Vor 60 Jahren gab es noch keine «Probleme» mit Elterntaxis. Wie sieht das wohl in Zukunft aus? Erfinde ein Schulwegerlebnis im Jahr 2086, in das du auch das Thema des Ausgangstextes einbaust.`,
    lesetext: 'Wer seine Kinder zur Schule fährt, schadet ihnen',
    pdfUrl: `${AP26}#page=1`,
    form: 'ab2024',
  },

  // ─── 2025 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2025_1',
    year: 2025,
    nr: 1,
    textsorte: 'Erzählen aus einer Rolle',
    titel: null,
    aufgabe: `Stell dir vor, dass du der Ich-Erzähler bist und dass die Woche vorbei ist, in der die neue Schülerin in die Klasse gekommen ist. Erzähle, wie es dir dabei in der Zeit ergangen ist und wie du das Unheil erlebt hast.`,
    lesetext: 'Die Neue',
    pdfUrl: `${AP25}#page=1`,
    form: 'ab2024',
  },
  {
    id: 'D3_AUFSATZ_2025_2',
    year: 2025,
    nr: 2,
    textsorte: 'Tagebucheintrag',
    titel: null,
    aufgabe: `Schreibe zwei Tagebucheinträge aus der Sicht der Schülerin, die neu in die Klasse kommt: Am Abend vor dem ersten Schultag und am Abend nach dem ersten Schultag.`,
    lesetext: 'Die Neue',
    pdfUrl: `${AP25}#page=1`,
    form: 'ab2024',
  },
  {
    id: 'D3_AUFSATZ_2025_3',
    year: 2025,
    nr: 3,
    textsorte: 'Erörterung',
    titel: null,
    aufgabe: `Schreibe einen Text darüber, warum wir uns oft wünschen, dass etwas Besonderes passiert, und warum wir dennoch wollen, dass eigentlich alles gleich bleibt.
Zum Beispiel hätte der Ich-Erzähler gerne, dass in der langweiligen Klasse etwas passiert. Dass er jetzt aber auf eine Neue aufpassen muss, ist ihm auch nicht wirklich recht.`,
    lesetext: 'Die Neue',
    pdfUrl: `${AP25}#page=1`,
    form: 'ab2024',
  },

  // ─── 2024 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2024_1',
    year: 2024,
    nr: 1,
    textsorte: 'Erzählen aus einer Rolle',
    titel: null,
    aufgabe: `Stell dir vor, du bist Miles. Erzähle, wie es aus deiner Sicht dazu gekommen ist, dass lediglich zwei Personen zu deiner „Abschiedsparty“ erschienen sind.`,
    lesetext: 'Die Abschiedsparty',
    pdfUrl: `${AP24}#page=2`,
    form: 'ab2024',
  },
  {
    id: 'D3_AUFSATZ_2024_2',
    year: 2024,
    nr: 2,
    textsorte: 'Erörterung',
    titel: null,
    aufgabe: `Was hältst du davon, mit 16 Jahren von zuhause auszuziehen und in einem Internat zu wohnen? Erläutere Vor- und Nachteile.`,
    lesetext: 'Die Abschiedsparty',
    pdfUrl: `${AP24}#page=2`,
    form: 'ab2024',
  },
  {
    id: 'D3_AUFSATZ_2024_3',
    year: 2024,
    nr: 3,
    textsorte: 'Tagebucheintrag',
    titel: null,
    aufgabe: `Schreibe einen Tagebucheintrag aus der Sicht von Miles’ Mutter nach dem Fest.`,
    lesetext: 'Die Abschiedsparty',
    pdfUrl: `${AP24}#page=2`,
    form: 'ab2024',
  },

  // ─── 2023 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2023_1',
    year: 2023,
    nr: 1,
    textsorte: 'Freier Text',
    titel: 'Verstecke',
    aufgabe: `Was bedeuten für dich Verstecke? Und was können Verstecke allgemein sein und bedeuten?`,
    lesetext: null,
    pdfUrl: `${AP23}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2023_2',
    year: 2023,
    nr: 2,
    textsorte: 'Freier Text',
    titel: '«Darauf musst du noch warten!»',
    aufgabe: `Diese oder ähnliche Aussagen sind oft zu hören. Mache dir allgemeine Gedanken dazu und beziehe auch eigene Erfahrungen mit ein.`,
    lesetext: null,
    pdfUrl: `${AP23}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2023_3',
    year: 2023,
    nr: 3,
    textsorte: 'Brief',
    titel: 'Brief',
    aufgabe: `Schreibe einen Brief an die Schulleiterin deiner Schule, in dem die Halbierung des Papierverbrauchs angeregt wird. Begründe dein Anliegen und mache dir auch Gedanken über die gemeinsame Umsetzung von Massnamen an der Schule.`,
    lesetext: null,
    pdfUrl: `${AP23}#page=2`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2023_4',
    year: 2023,
    nr: 4,
    textsorte: 'Geschichte fortsetzen',
    titel: 'Eine Geschichte fortsetzen',
    aufgabe: FORTSETZUNG_OHNE_ABSCHREIBEN,
    lesetext: null,
    pdfUrl: `${AP23}#page=2`,
    form: 'bis2023',
  },

  // ─── 2021 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2021_1',
    year: 2021,
    nr: 1,
    textsorte: 'Freier Text',
    titel: 'Die Welt steht (nie) still',
    aufgabe: `Mache dir allgemeine Gedanken zu diesem Thema und beziehe auch eigene Erfahrungen mit ein.`,
    lesetext: null,
    pdfUrl: `${AP21}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2021_2',
    year: 2021,
    nr: 2,
    textsorte: 'Freier Text',
    titel: 'Postkarten',
    aufgabe: `Mache dir allgemeine Gedanken zu diesem Thema und beziehe auch eigene Erfahrungen mit ein.`,
    lesetext: null,
    pdfUrl: `${AP21}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2021_3',
    year: 2021,
    nr: 3,
    textsorte: 'Brief',
    titel: 'Brief',
    aufgabe: `In deiner Gemeinde soll bei der Bildung gespart werden. Die Schulleitung deiner Oberstufe überlegt sich unter anderem, ab sofort alle Klassenlager zu streichen. Begründet wird dies damit, dass sich die Klassen zum Beispiel auch in den Pausen kennenlernen könnten.
Verfasse einen Brief an die Schulleitung, in dem du Stellung zum Vorschlag und zur Begründung nimmst.`,
    lesetext: null,
    pdfUrl: `${AP21}#page=2`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2021_4',
    year: 2021,
    nr: 4,
    textsorte: 'Geschichte fortsetzen',
    titel: 'Eine Geschichte fortsetzen',
    aufgabe: FORTSETZUNG_MIT_ABSCHREIBEN,
    lesetext: null,
    pdfUrl: `${AP21}#page=2`,
    form: 'bis2023',
  },

  // ─── 2020 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2020_1',
    year: 2020,
    nr: 1,
    textsorte: 'Freier Text',
    titel: 'Gesichter im Zug',
    aufgabe: `Berichte von eigenen Erfahrungen und mache dir auch grundsätzliche Gedanken dazu.`,
    lesetext: null,
    pdfUrl: `${AP20}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2020_2',
    year: 2020,
    nr: 2,
    textsorte: 'Freier Text',
    titel: 'Spielabende',
    aufgabe: `Berichte von eigenen Erfahrungen und mache dir auch grundsätzliche Gedanken dazu.`,
    lesetext: null,
    pdfUrl: `${AP20}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2020_3',
    year: 2020,
    nr: 3,
    textsorte: 'Brief',
    titel: 'Brief',
    aufgabe: `Dein Schulleiter hat gerade die Pläne für eine neue Regelung bezüglich Joker-Tage gemacht. Die Anregung sei von Schülern und Schülerinnen gekommen, die sich seit ein paar Monaten in der ‘Klimabewegung’ engagieren. Neu soll es so sein, dass man Joker-Tage kurz vor oder nach den Ferien nur noch dann einziehen darf, wenn man nicht mit dem Flugzeug weg- oder zurückreist.
Antworte dem Schulleiter mit einem Brief und nimm zur neuen Regelung Stellung.`,
    lesetext: null,
    pdfUrl: `${AP20}#page=2`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2020_4',
    year: 2020,
    nr: 4,
    textsorte: 'Geschichte fortsetzen',
    titel: 'Eine Geschichte fortsetzen',
    aufgabe: FORTSETZUNG_MIT_ABSCHREIBEN,
    lesetext: null,
    pdfUrl: `${AP20}#page=2`,
    form: 'bis2023',
  },

  // ─── 2019 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2019_1',
    year: 2019,
    nr: 1,
    textsorte: 'Freier Text',
    titel: 'Über den Zaun schauen',
    aufgabe: `Die Wendung «Über den Zaun schauen» kann man wörtlich oder auch im übertragenen Sinne verstehen. Mache dir zu beiden Aspekten Gedanken.`,
    lesetext: null,
    pdfUrl: `${AP19}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2019_2',
    year: 2019,
    nr: 2,
    textsorte: 'Freier Text',
    titel: 'Besonders sein oder nicht auffallen?',
    aufgabe: `Mache dir allgemeine Gedanken und beziehe auch eigene Erfahrungen mit ein.`,
    lesetext: null,
    pdfUrl: `${AP19}#page=1`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2019_3',
    year: 2019,
    nr: 3,
    textsorte: 'Brief',
    titel: 'Brief',
    aufgabe: `Deine Klasse möchte in einer Klassenwoche gerne den Kletterpark am Rheinfall besuchen. Die Klassenlehrerin ist nicht besonders erfreut über diesen Vorschlag, da sie den Kletterpark für zu gefährlich hält.
Verfasse einen Brief, in welchem du versuchst, die Lehrperson vom Ausflug in den Kletterpark zu überzeugen.`,
    lesetext: null,
    pdfUrl: `${AP19}#page=2`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2019_4',
    year: 2019,
    nr: 4,
    textsorte: 'Geschichte fortsetzen',
    titel: 'Eine Geschichte fortsetzen',
    aufgabe: FORTSETZUNG_MIT_ABSCHREIBEN,
    lesetext: null,
    pdfUrl: `${AP19}#page=2`,
    form: 'bis2023',
  },

  // ─── 2018 ───────────────────────────────────────────────────────────────
  {
    id: 'D3_AUFSATZ_2018_1',
    year: 2018,
    nr: 1,
    textsorte: 'Freier Text',
    titel: 'Im Schatten',
    aufgabe: `Schreibe einen Text zu diesem Thema. Mache dir allgemeine Gedanken und beziehe auch eigene Erfahrungen mit ein.`,
    lesetext: null,
    pdfUrl: `${AP18}#page=9`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2018_2',
    year: 2018,
    nr: 2,
    textsorte: 'Freier Text',
    titel: 'Der Blick in den Kleiderschrank',
    aufgabe: `Schreibe einen Text zu diesem Thema. Mache dir allgemeine Gedanken und beziehe auch eigene Erfahrungen mit ein.`,
    lesetext: null,
    pdfUrl: `${AP18}#page=9`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2018_3',
    year: 2018,
    nr: 3,
    textsorte: 'Brief',
    titel: 'Brief',
    aufgabe: `Die Schulleiterin deiner Schule hat bekannt gegeben, dass geplant sei, das Handyverbot an der Schule wieder aufzuheben. Es wurde unter anderem argumentiert, es sei wichtig, dass die Jugendlichen lernen mit den aktuellen Medien umzugehen. Die Schulleiterin hat die Lehrerschaft, aber auch alle Schülerinnen und Schüler gebeten zu diesen Plänen schriftlich Stellung zu nehmen.
Schreibe der Schulleiterin einen Brief und begründe deine Ansichten zu diesen Plänen.`,
    lesetext: null,
    pdfUrl: `${AP18}#page=10`,
    form: 'bis2023',
  },
  {
    id: 'D3_AUFSATZ_2018_4',
    year: 2018,
    nr: 4,
    textsorte: 'Geschichte fortsetzen',
    titel: 'Eine Geschichte fortsetzen',
    aufgabe: FORTSETZUNG_OHNE_ABSCHREIBEN,
    lesetext: null,
    pdfUrl: `${AP18}#page=10`,
    form: 'bis2023',
  },
];

// Jahre, für die in den vorliegenden Prüfungs-PDFs kein Aufsatzblatt enthalten ist.
export const aufsatzJahreOhneBlatt = [
  { year: 2022, hinweis: 'Im Prüfungs-PDF 2022 ist nur die Sprachprüfung enthalten, das Aufsatzblatt fehlt.' },
  { year: 2017, hinweis: 'Im Prüfungs-PDF 2017 ist nur die Sprachprüfung enthalten, das Aufsatzblatt fehlt.' },
  { year: 2016, hinweis: 'Im Prüfungs-PDF 2016 ist nur die Sprachprüfung enthalten, das Aufsatzblatt fehlt.' },
];

export const AUFSATZ_TEXTSORTEN = [
  'Brief',
  'Geschichte fortsetzen',
  'Freier Text',
  'Erzählen aus einer Rolle',
  'Tagebucheintrag',
  'Erörterung',
];
