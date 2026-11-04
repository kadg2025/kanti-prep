// Multicheck IMS, Deutsch: eigener Fragenpool für das Dojo (neue Aufgaben, etwas schwieriger als die Themenfragen).
const B = { topic: 'deutsch' };
const SP = 'In der Zeile steckt höchstens ein Fehler. Klicke das falsche Wort an und schreibe es richtig ins Kästchen. Gibt es keinen Fehler, wähle «korrekt».';
const spell = (n, words, wrong, fix, why) => ({
  type: 'spell', title: 'Rechtschreibung', instr: SP, words, wrong, fix: fix || '',
  answerText: fix ? `«${words[wrong].replace(/[.,!?]$/, '')}» → ${fix}` : 'korrekt', why, ck: 'd_spell', ...B, id: `deutsch-d${n}`,
});
const GI = 'Ergänze das Wort. Stimmt der Satz schon, wähle «korrekt». Höchstens ein Wort.';
const gap = (n, before, after, accept, why) => ({
  type: 'gap', title: 'Grammatik', instr: GI, before, prefix: '', after, accept, answerText: accept ? accept[0] : 'korrekt', why, ck: 'd_gram', ...B, id: `deutsch-d${n}`,
});
const MI = 'Lies den Text. Eine oder maximal zwei Aussagen sind richtig. Klicke alle richtigen Aussagen an.';
const multi = (n, titel, text, opts, why) => ({
  type: 'multi', title: 'Textverständnis: ' + titel, instr: MI, body: `<div class="textbox">${text}</div>`,
  options: opts.map(([t, ok, w]) => ({ t, ok, why: w })),
  correct: opts.map((o, i) => (o[1] ? i : -1)).filter(i => i >= 0),
  answerText: opts.filter(o => o[1]).map(o => o[0]).join(' / '),
  why: why || 'Prüfe jede Aussage am Text. Unten siehst du bei jeder Aussage die Begründung.', ck: 'd_text', ...B, id: `deutsch-d${n}`,
});

export default [
  spell(1, ['Die', 'Mannschaft', 'hat', 'das', 'Spiel', 'knapp', 'gewonnen.'], -1, '', 'Alle Wörter sind richtig geschrieben: «knapp» mit pp und «gewonnen» mit nn nach kurzem Vokal.'),
  spell(2, ['Das', 'Ergebnis', 'der', 'Messung', 'war', 'überraschent.'], 5, 'überraschend', 'Das Adjektiv endet auf «-end». Probe durch Verlängern: eine überraschende Nachricht, mit hörbarem d.'),
  spell(3, ['Der', 'Lehrer', 'hat', 'mich', 'ermahnd,', 'leise', 'zu', 'sein.'], 4, 'ermahnt', 'Die Verbform endet auf «-t»: er ermahnt, er hat ermahnt. Probe: Grundform ermahnen, er ermahnt.'),
  spell(4, ['Am', 'Abend', 'gehen', 'wir', 'Spazieren', 'im', 'Park.'], 4, 'spazieren', '«spazieren» ist hier ein Verb (wir gehen spazieren) und wird kleingeschrieben.'),
  spell(5, ['Er', 'wartet', 'seit', 'einer', 'Stunde', 'auf', 'den', 'Bus.'], -1, '', 'Alle Wörter sind richtig. «seit» (Zeitraum) wird mit t geschrieben, «Stunde» gross als Nomen.'),
  spell(6, ['Wir', 'haben', 'gestern', 'ein', 'Fussballspiel', 'gesehn.'], 5, 'gesehen', 'Das Partizip von «sehen» heisst «gesehen», mit Dehnungs-e. Probe: ich sehe, ich habe gesehen.'),
  gap(7, 'Das ist der Mann, mit', ' ich gestern gesprochen habe.', ['dem', 'welchem'], 'Bezug auf «der Mann» (männlich). «mit» verlangt den Dativ, deshalb «mit dem» (oder «mit welchem»).'),
  gap(8, 'Wegen', ' Regens fiel der Ausflug aus.', ['des'], '«wegen» verlangt den Genitiv. «Regen» ist männlich: wegen des Regens.'),
  gap(9, 'Sie ist sehr stolz', ' ihre Tochter.', ['auf'], '«stolz sein» steht mit «auf»: stolz auf jemanden sein.'),
  gap(10, 'Mein Onkel,', ' Auto kaputt ist, kommt zu Fuss.', ['dessen'], 'Das Relativpronomen zeigt den Besitz: «dessen Auto» (Genitiv zu «Onkel»).'),
  gap(11, 'Der Lehrer lobt', ' die ganze Klasse.', null, 'Der Satz stimmt schon: «Der Lehrer lobt die ganze Klasse» ist vollständig und richtig. Darum wählst du «korrekt».'),
  multi(12, 'Die Stadtbibliothek',
    'Die Stadtbibliothek Thun ist von Montag bis Samstag geöffnet. Unter der Woche ist sie von 9 bis 19 Uhr offen, am Samstag nur bis 16 Uhr. Wer ein Jahresabo für 40 Franken löst, kann bis zu zehn Medien gleichzeitig ausleihen. Jugendliche unter 16 Jahren zahlen nur die Hälfte. Verspätete Rückgaben kosten 50 Rappen pro Medium und Tag. Seit diesem Frühling gibt es zudem einen Raum zum Lernen, der kostenlos genutzt werden kann.',
    [['Am Samstag schliesst die Bibliothek um 16 Uhr.', true, 'Stimmt: «am Samstag nur bis 16 Uhr».'],
     ['Das Jahresabo kostet für Jugendliche unter 16 Jahren 20 Franken.', true, 'Stimmt: Sie zahlen die Hälfte von 40 Franken.'],
     ['Mit dem Abo darf man höchstens fünf Medien ausleihen.', false, 'Falsch: Es sind bis zu zehn Medien.'],
     ['Der Lernraum kostet eine kleine Gebühr.', false, 'Falsch: Er kann kostenlos genutzt werden.']]),
  multi(13, 'Neue Regeln in der Altstadt',
    'Seit dem 1. Mai gilt in der Altstadt von Luzern eine neue Regelung. Zwischen 11 und 18 Uhr dürfen keine Velos mehr gefahren werden, sie müssen geschoben werden. Wer sich nicht daran hält, bezahlt eine Busse von 40 Franken. Lieferwagen dürfen die Altstadt nur bis 10 Uhr befahren. Anwohnerinnen und Anwohner mit einem Parkausweis sind von der Regelung für Autos ausgenommen. Die Stadt will mit dieser Massnahme die Sicherheit der Fussgänger erhöhen.',
    [['Zwischen 11 und 18 Uhr müssen Velos geschoben werden.', true, 'Stimmt: «sie müssen geschoben werden».'],
     ['Lieferwagen dürfen den ganzen Tag in die Altstadt fahren.', false, 'Falsch: Nur bis 10 Uhr.'],
     ['Wer sein Velo trotzdem fährt, bezahlt 40 Franken Busse.', true, 'Stimmt: «Wer sich nicht daran hält, bezahlt eine Busse von 40 Franken».'],
     ['Anwohner mit Parkausweis dürfen nicht mit dem Auto in die Altstadt.', false, 'Falsch: Sie sind von der Regelung für Autos ausgenommen.']]),
  multi(14, 'Der Eisvogel',
    'Der Eisvogel lebt an sauberen Bächen und Flüssen. Er ist nur etwa so gross wie ein Spatz, fällt aber durch sein blau-oranges Gefieder auf. Zum Fischen sitzt er auf einem Ast und stürzt sich dann ins Wasser. Seine Beute, kleine Fische, verschlingt er meist im Ganzen. Im Frühling gräbt das Paar eine Brutröhre in eine steile Uferwand. Weil viele Bäche begradigt wurden, fehlen ihm geeignete Uferwände. Deshalb ist er in der Schweiz selten geworden.',
    [['Der Eisvogel ist deutlich grösser als ein Spatz.', false, 'Falsch: Er ist etwa so gross wie ein Spatz.'],
     ['Der Eisvogel brütet in einer Röhre in der Uferwand.', true, 'Stimmt: «gräbt das Paar eine Brutröhre in eine steile Uferwand».'],
     ['Er jagt vor allem Insekten in der Luft.', false, 'Falsch: Seine Beute sind kleine Fische.'],
     ['Er ist selten, weil die Bäche kein Wasser mehr führen.', false, 'Falsch: Der Grund sind begradigte Bäche ohne geeignete Uferwände.']]),
];
