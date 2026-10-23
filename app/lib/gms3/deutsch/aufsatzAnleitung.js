// app/lib/gms3/deutsch/aufsatzAnleitung.js
// Texte für den Ordner «Aufsatz» (Deutsch GMS 3).
//
// Woher die Angaben kommen:
// – «So läuft der Aufsatz»: Zeiten, Gewichtung, Schreibtipps und allgemeine
//   Anweisungen stehen wörtlich oder sinngleich in den Prüfungs-PDFs in Deutsch/.
//   Zitate sind als solche gekennzeichnet.
// – «Textsorten»: «Das verlangt die Prüfung» kommt aus aufsatz.js (und damit
//   aus den PDFs). Aufbau, Checkliste, typische Fehler und Satzanfänge sind
//   unsere eigenen Tipps, keine Prüfungsvorgaben.
// – Ein offizielles Bewertungsraster gibt es nicht. Was bewertet wird, steht
//   einzig in den Schreibtipps der Prüfung.
//
// Diese Texte sind keine Aufgaben: Sie zählen nicht im Fortschritt.

export const AUFSATZ_SEITEN = [
  { key: 'ablauf', label: 'So läuft der Aufsatz', icon: '🗓️' },
  { key: 'textsorten', label: 'Textsorten', icon: '🗂️' },
  { key: 'alte', label: 'Alte Aufgabenstellungen', icon: '✍️' },
  { key: 'selbstcheck', label: 'Selbstcheck', icon: '✅' },
];

// ─── «So läuft der Aufsatz» ────────────────────────────────────────────────

export const ablaufTitel = 'So läuft der Aufsatz';

export const ablaufBloecke = [
  {
    art: 'abschnitt',
    titel: '⏱️ Zeit und Gewichtung',
    punkte: [
      'Die schriftliche Deutschprüfung dauert 115 Minuten: 40 Minuten Sprachprüfung, 75 Minuten Aufsatz.',
      'Die Sprachprüfung zählt ein Drittel, der Aufsatz zählt zwei Drittel.',
      'Der Aufsatz ist also der grössere Teil deiner Deutschnote.',
    ],
  },
  {
    art: 'abschnitt',
    titel: '🗂️ Was du zur Auswahl hast',
    punkte: [
      'Bis 2023: Du bekommst vier Themen und wählst jenes, das dich am meisten anspricht.',
      'Ab 2024: Du bekommst einen Lesetext und dazu drei Schreibaufgaben. Du wählst eine davon.',
      'Ab 2024 gehören zwei Dinge zur Aufgabe: Du setzt einen eigenen Titel und du beziehst dich inhaltlich auf den gelesenen Text.',
    ],
  },
  {
    art: 'zitat',
    titel: '📄 Die offiziellen Schreibtipps',
    einleitung: 'Auf dem Aufsatzblatt steht: «Achte bei der Schreibplanung, beim Schreiben und Überarbeiten auf Folgendes:»',
    punkte: [
      '«Beziehe dich inhaltlich auf den gelesenen Text.» (ab 2024)',
      '«Aufbau deines Textes: Gestalte ihn so, dass wir deinen Überlegungen gut folgen können.»',
      '«Sprachliche Gestaltung und Rechtschreibung: Bemühe dich darum, präzise und ansprechend zu formulieren und Fehler zu vermeiden.»',
      '«Setze einen eigenen Titel.» (ab 2024)',
    ],
    fussnote: 'In den Prüfungen bis 2023 ist der Wortlaut leicht anders, zum Beispiel «störende Fehler zu vermeiden».',
  },
  {
    art: 'abschnitt',
    titel: '✒️ Allgemeine Anweisungen',
    punkte: [
      'Schreibe mit dunkelblauem oder schwarzem Stift. Korrekturen mit Bleistift werden nicht berücksichtigt.',
      'Wenn du die Aufgabe «Eine Geschichte fortsetzen» wählst: In den Prüfungen 2019, 2020 und 2021 musst du den Textanfang zuerst wörtlich abschreiben, bevor du mit deiner Fortsetzung anfängst. 2018 und 2023 war das nicht verlangt.',
      'Lies die Aufgabenstellung deines Themas ganz durch. Was dort als Punkt aufgeführt ist, gehört in den Text.',
    ],
  },
  {
    art: 'zeitplan',
    titel: '💡 Unser Vorschlag für die 75 Minuten',
    schritte: [
      { minuten: '10 Min.', was: 'Planen: Thema wählen, Ideen notieren, Reihenfolge festlegen, Titel überlegen.' },
      { minuten: '55 Min.', was: 'Schreiben: durchschreiben, ohne alles sofort perfekt machen zu wollen.' },
      { minuten: '10 Min.', was: 'Überarbeiten: durchlesen, Rechtschreibung und Satzanfänge prüfen, Schluss kontrollieren.' },
    ],
    fussnote: 'Das ist unsere Aufteilung, keine Vorgabe der Prüfung. Die Prüfung gibt nur die 75 Minuten vor.',
  },
  {
    art: 'hinweis',
    text: 'Ein offizielles Bewertungsraster gibt es nicht. Was bewertet wird, steht einzig in den Schreibtipps oben: Aufbau sowie sprachliche Gestaltung und Rechtschreibung, ab 2024 zusätzlich eigener Titel und Bezug zum Lesetext.',
  },
];

// ─── «Textsorten» ──────────────────────────────────────────────────────────

export const textsortenTitel = 'Unsere Tipps';

export const textsortenHinweis =
  'Unter «Das verlangt die Prüfung» steht, was die Prüfungen tatsächlich verlangen. Alles andere auf dieser Seite ist unser Vorschlag, keine Vorgabe.';

export const textsortenTipps = [
  {
    textsorte: 'Brief',
    beispielId: 'D3_AUFSATZ_2023_3',
    aufbau: [
      'Kläre zuerst: Wer schreibt an wen und warum?',
      'Anrede setzen und im Brief dieselbe Anredeform durchhalten.',
      'Im ersten Abschnitt sagen, worum es geht.',
      'Dann dein Anliegen begründen: zwei bis drei Gründe, jeder in einem eigenen Abschnitt.',
      'Am Schluss sagen, was du dir wünschst, und mit Grussformel schliessen.',
    ],
    checkliste: [
      'Eigener Titel gesetzt (ab 2024 verlangt).',
      'Anrede und Grussformel vorhanden.',
      'Die Person, an die du schreibst, wird durchgehend gleich angesprochen.',
      'Mein Anliegen ist in einem Satz klar erkennbar.',
      'Jeder Grund steht in einem eigenen Abschnitt.',
      'Alle Punkte der Aufgabenstellung kommen vor.',
    ],
    fehler: [
      'Mitten im Brief von «Sie» zu «du» wechseln.',
      'Das Anliegen nur behaupten und nicht begründen.',
      'Den Schluss vergessen, sodass der Brief einfach aufhört.',
    ],
    satzanfaenge: [
      'Ich schreibe Ihnen, weil …',
      'Mir ist aufgefallen, dass …',
      'Dafür gibt es vor allem einen Grund: …',
      'Ein zweiter Punkt kommt dazu: …',
      'Das liesse sich einfach umsetzen, indem …',
      'Ich kann mir gut vorstellen, dass …',
      'Darum möchte ich Sie bitten, …',
      'Über eine Antwort würde ich mich freuen.',
      'Schreibst du an eine Person, die du duzt, ändere «Sie» in «du».',
    ],
  },
  {
    textsorte: 'Geschichte fortsetzen',
    beispielId: 'D3_AUFSATZ_2021_4',
    aufbau: [
      'Textanfang zweimal lesen: Wer kommt vor, wo spielt es, wie ist die Stimmung?',
      'Zeitform und Erzählperson des Anfangs übernehmen und nicht wechseln.',
      'Überlegen, worauf der Anfang zusteuert, und einen Höhepunkt planen.',
      'Fortsetzung schreiben: erst weiterführen, dann zum Höhepunkt, dann zum Ende.',
      'Einen Titel setzen, der zur ganzen Geschichte passt.',
    ],
    checkliste: [
      'Titel gesetzt (die Aufgabe verlangt ihn ausdrücklich).',
      '2019 bis 2021: Textanfang wörtlich abgeschrieben.',
      'Gleiche Erzählperson wie im Textanfang (ich oder er/sie).',
      'Gleiche Zeitform wie im Textanfang.',
      'Die Figuren verhalten sich so, wie der Anfang es glaubhaft macht.',
      'Die Geschichte hat ein überzeugendes Ende, keinen abgebrochenen Satz.',
    ],
    fehler: [
      'Vom Präteritum unbemerkt ins Präsens rutschen.',
      'Eine völlig neue Geschichte erzählen, die nichts mit dem Anfang zu tun hat.',
      'Mit «und dann wachte ich auf» oder «Fortsetzung folgt» enden.',
    ],
    satzanfaenge: [
      'Einen Moment lang …',
      'Kaum hatte sie das gesagt, …',
      'Je länger er wartete, desto …',
      'Dann ging alles sehr schnell: …',
      'Erst jetzt merkte ich, dass …',
      'Als sich die Tür öffnete, …',
      'Später konnte niemand mehr sagen, wer …',
      'Am Ende blieb nur …',
    ],
  },
  {
    textsorte: 'Freier Text',
    beispielId: 'D3_AUFSATZ_2023_1',
    aufbau: [
      'Titel genau lesen und für dich in eigene Worte fassen.',
      'Entscheiden, wie du schreibst: erzählend, nachdenkend oder beides.',
      'Zwei bis drei Punkte sammeln, die du sicher sagen willst.',
      'Mit einer kurzen Szene oder einer Frage einsteigen.',
      'Jeden Punkt in einem eigenen Abschnitt ausführen, am besten mit einem Beispiel.',
      'Im Schluss zum Titel zurückkommen.',
    ],
    checkliste: [
      'Mein Text passt wirklich zum Titel der Aufgabe.',
      'Eigener Titel gesetzt, falls die Aufgabe das verlangt.',
      'Einleitung, Hauptteil und Schluss sind erkennbar.',
      'Ich habe eigene Erfahrungen oder Beispiele eingebaut, wenn die Aufgabe es verlangt.',
      'Die Abschnitte stehen in einer sinnvollen Reihenfolge.',
      'Der Schluss ist mehr als ein Wiederholen der Einleitung.',
    ],
    fehler: [
      'Nur am Rand über das Thema schreiben und das Eigentliche nie sagen.',
      'Alles in einen einzigen langen Abschnitt packen.',
      'Allgemein bleiben, ohne ein einziges Beispiel.',
    ],
    satzanfaenge: [
      'Wenn ich an … denke, fällt mir zuerst … ein.',
      'Mir ist das zum ersten Mal aufgefallen, als …',
      'Dabei geht es mir weniger um … als um …',
      'Ein Beispiel dafür ist …',
      'Genau umgekehrt ist es, wenn …',
      'Das hat sich für mich geändert, seit …',
      'Was bleibt, ist …',
      'Darum glaube ich, dass …',
    ],
  },
  {
    textsorte: 'Erzählen aus einer Rolle',
    beispielId: 'D3_AUFSATZ_2025_1',
    aufbau: [
      'Aus dem Lesetext heraussuchen, wer du bist und was diese Figur weiss.',
      'Festlegen, wann du erzählst: während des Geschehens oder im Rückblick.',
      'In der Ich-Form schreiben und dabei bleiben.',
      'Nicht nur erzählen, was passiert, sondern auch, wie es der Figur dabei geht.',
      'Am Schluss sagen, wie die Figur jetzt darüber denkt.',
    ],
    checkliste: [
      'Eigener Titel gesetzt.',
      'Bezug zum Lesetext ist klar erkennbar.',
      'Ich schreibe durchgehend aus der verlangten Figur, nicht aus meiner eigenen Sicht.',
      'Die Figur weiss nur, was sie wissen kann.',
      'Gefühle und Gedanken der Figur kommen vor.',
      'Die Zeitform bleibt gleich.',
      'Der Schluss rundet die Zeit ab, von der die Aufgabe spricht.',
    ],
    fehler: [
      'Die Rolle verlassen und plötzlich alles wissen, was die Figur nicht wissen kann.',
      'Den Lesetext nur nacherzählen, statt aus der Rolle zu erzählen.',
      'Von «ich» unbemerkt zu «er» oder «sie» wechseln.',
    ],
    satzanfaenge: [
      'Als ich an diesem Morgen …',
      'Ich hätte nie gedacht, dass …',
      'Mir wurde erst später klar, dass …',
      'Am liebsten hätte ich …',
      'Die ganze Woche über …',
      'Was mich dabei am meisten beschäftigt hat, war …',
      'Heute würde ich wohl anders …',
      'Wenn ich zurückschaue, …',
    ],
  },
  {
    textsorte: 'Tagebucheintrag',
    beispielId: 'D3_AUFSATZ_2025_2',
    aufbau: [
      'Klären, wer schreibt, an welchem Tag und zu welcher Uhrzeit.',
      'Datum oder Tageszeit über den Eintrag setzen.',
      'Vom Tag erzählen, aber nur das, was für die Figur wichtig war.',
      'Dazu schreiben, was die Figur fühlt und denkt.',
      'Mit einem Gedanken an morgen oder einer offenen Frage schliessen.',
      'Wenn die Aufgabe zwei Einträge verlangt: beide klar trennen und den Unterschied zeigen.',
    ],
    checkliste: [
      'Eigener Titel gesetzt.',
      'Bezug zum Lesetext ist klar erkennbar.',
      'Jeder Eintrag hat Datum oder Tageszeit.',
      'Verlangte Anzahl Einträge geschrieben.',
      'Es ist deutlich, dass die Figur zu sich selbst spricht.',
      'Zwischen den Einträgen hat sich etwas verändert.',
    ],
    fehler: [
      'Wie ein Protokoll nur auflisten, was passiert ist, ohne Gefühle.',
      'Beide Einträge gleich klingen lassen, sodass keine Entwicklung sichtbar wird.',
      'Dinge erwähnen, die die Figur an diesem Abend noch nicht wissen kann.',
    ],
    satzanfaenge: [
      'Liebes Tagebuch, heute …',
      'Ich weiss gar nicht, wo ich anfangen soll.',
      'Den ganzen Tag musste ich daran denken, dass …',
      'Am schlimmsten war der Moment, als …',
      'Eigentlich hatte ich gehofft, dass …',
      'Jetzt sitze ich hier und …',
      'Morgen muss ich …',
      'Vielleicht sieht das alles morgen anders aus.',
    ],
  },
  {
    textsorte: 'Erörterung',
    beispielId: 'D3_AUFSATZ_2025_3',
    aufbau: [
      'Die Frage der Aufgabe in einem Satz aufschreiben.',
      'Argumente auf beide Seiten sammeln, je zwei bis drei.',
      'Mit der Frage und ihrer Bedeutung einsteigen.',
      'Erst die eine Seite ausführen, dann die andere, jeweils mit Beispiel.',
      'Am Schluss deine eigene Antwort geben und begründen.',
    ],
    checkliste: [
      'Eigener Titel gesetzt.',
      'Bezug zum Lesetext ist klar erkennbar.',
      'Beide Seiten kommen vor, nicht nur meine Meinung.',
      'Jedes Argument ist begründet, nicht nur behauptet.',
      'Zu mindestens zwei Argumenten gibt es ein Beispiel.',
      'Am Schluss steht eine eigene Antwort.',
      'Ich habe Wörter wie «einerseits», «dagegen», «darum» benutzt, damit man mir folgen kann.',
    ],
    fehler: [
      'Nur die eigene Meinung wiederholen, ohne Gegenargument.',
      'Argumente aufzählen, aber nie begründen.',
      'Am Schluss offenlassen, was man selber denkt.',
    ],
    satzanfaenge: [
      'Immer häufiger hört man, dass …',
      'Für … spricht vor allem, dass …',
      'Ein Beispiel dafür ist …',
      'Dagegen lässt sich einwenden, dass …',
      'Andererseits darf man nicht vergessen, dass …',
      'Besonders wichtig finde ich dabei, dass …',
      'Wenn ich beides abwäge, …',
      'Darum bin ich der Meinung, dass …',
    ],
  },
];

// ─── «Selbstcheck» ─────────────────────────────────────────────────────────

export const selbstcheckTitel = 'Selbstcheck';

export const selbstcheckHinweis =
  'Geh die Liste durch, wenn du fertig geschrieben hast. Sie ist unsere Zusammenstellung und kein offizielles Bewertungsraster.';

export const selbstcheckPunkte = [
  { key: 'titel', text: 'Ich habe einen eigenen Titel gesetzt (ab 2024 verlangt, bei «Geschichte fortsetzen» auch früher).' },
  { key: 'lesetext', text: 'Ab 2024: Mein Text bezieht sich inhaltlich auf den gelesenen Text.' },
  { key: 'aufbau', text: 'Einleitung, Hauptteil und Schluss sind erkennbar.' },
  { key: 'zeitform', text: 'Die Zeitform ist im ganzen Text dieselbe.' },
  { key: 'gross', text: 'Ich habe die Grossschreibung geprüft, vor allem bei Nomen und Satzanfängen.' },
  { key: 'satzanfaenge', text: 'Meine Satzanfänge sind abwechslungsreich, nicht immer «Ich …» oder «Dann …».' },
  { key: 'schluss', text: 'Der Schluss ist überzeugend und bricht nicht einfach ab.' },
  { key: 'gelesen', text: 'Ich habe den ganzen Text noch einmal von vorne gelesen.' },
];

export const SELBSTCHECK_KEY = 'kp_aufsatz_selbstcheck';
