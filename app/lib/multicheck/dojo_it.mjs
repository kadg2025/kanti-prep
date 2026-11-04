// Multicheck IMS, IT-Grundwissen: eigener Fragenpool für das Dojo (neue Aufgaben, etwas schwieriger als die Themenfragen).
const B = { topic: 'it' };
const sk = (...z) => `<div class="script">${z.join('<br>')}</div>`;
const sp = '&nbsp;&nbsp;';
const stmt = (n, titel, body, opts, c, why) => ({
  type: 'mc', title: titel, instr: 'Welche Aussage stimmt nicht? Nur eine Antwort ist richtig.', body,
  options: opts.map(([t, w], i) => ({ t, why: w })), correct: c, answerText: opts[c][0], why: why || 'Gesucht ist die Aussage, die <b>nicht</b> zum Skript passt.',
  ck: 'it_stmt', ...B, id: `it-d${n}`,
});
const zahl = (n, titel, body, accept, why, ck = 'it_var', instr = 'Welche Zahl wird am Ende des abgebildeten Skripts ausgegeben? Gib die Zahl ein.') => ({
  type: 'input', num: true, title: titel, instr, body, accept, answerText: accept[0], why, ck, ...B, id: `it-d${n}`,
});
const zeichnen = (n, frage, skripte, c, why) => ({
  type: 'mc', scriptOpts: true, title: 'Scratch: Figur zeichnen', instr: frage,
  body: '<div class="big" style="font-size:16px">Die Figur startet am Anfang mit dem Stift aus und schaut nach rechts.</div>',
  options: skripte.map(([z, w], i) => ({ t: `<b>Skript ${i + 1}</b><br>${z.join('<br>')}`, why: i === c ? 'Richtig' : w })),
  correct: c, answerText: `Skript ${c + 1}`, why, ck: 'it_draw', ...B, id: `it-d${n}`,
});
const flow = (n, titel, zeilen, opts, c) => ({
  type: 'mc', title: titel, instr: 'Welche Aussage ist falsch? Nur eine Antwort ist richtig.',
  body: `<div class="script" style="font-family:Arial">${zeilen.join('<br>')}</div>`,
  options: opts.map(([t, w]) => ({ t, why: w })), correct: c, answerText: opts[c][0], why: 'Gesucht ist die Aussage, die <b>nicht</b> zum Flussdiagramm passt.', ck: 'it_flow_stmt', ...B, id: `it-d${n}`,
});

export default [
  zahl(1, 'Scratch: Variable',
    sk('Start', 'setze Zahl auf 2', 'wiederhole 5 mal {', sp + 'setze Zahl auf Zahl * 2', '}', 'sage Zahl'), ['64'],
    'Verdoppeln, 5 Durchgänge: 2 → 4 → 8 → 16 → 32 → 64. Am Ende steht <b>64</b> in der Variablen.'),
  zahl(2, 'Scratch: Zwei Variablen',
    sk('Start', 'setze A auf 20', 'setze B auf 5', 'wiederhole 3 mal {', sp + 'setze A auf A − B', sp + 'setze B auf B + 1', '}', 'sage A'), ['2'],
    'Durchgang 1: A = 20 − 5 = 15, B = 6. Durchgang 2: A = 15 − 6 = 9, B = 7. Durchgang 3: A = 9 − 7 = 2, B = 8. Ausgegeben wird A = <b>2</b>.'),
  zahl(3, 'Scratch: Bedingung in der Schleife',
    sk('Start', 'setze Summe auf 0', 'für Z von 1 bis 5 {', sp + 'falls Z &gt; 3 dann', sp + sp + 'setze Summe auf Summe + 10', sp + 'sonst', sp + sp + 'setze Summe auf Summe + 1', '}', 'sage Summe'), ['23'],
    'Z = 1, 2, 3: je +1, zusammen 3. Z = 4, 5: je +10, zusammen 20. Summe: 3 + 20 = <b>23</b>.'),
  zahl(4, 'Scratch: Wiederholen bis',
    sk('Start', 'setze Zahl auf 100', 'wiederhole bis Zahl &lt; 10 {', sp + 'setze Zahl auf Zahl / 2', '}', 'sage Zahl'), ['6.25', '6,25'],
    'Halbieren, bis die Zahl kleiner als 10 ist: 100 → 50 → 25 → 12.5 → 6.25. Erst bei 6.25 gilt «kleiner als 10». Ausgegeben wird <b>6.25</b>.'),
  zahl(5, 'Flussdiagramm lesen',
    '<div class="flow"><div class="fb oval">Start</div><div class="arr">↓</div><div class="fb para">Eingabe: A = 5, B = 3</div><div class="arr">↓</div><div class="fb rect">A = A + B</div><div class="arr">↓</div><div class="fb dia">A &gt; 6 ?</div><div class="branch"><span>Ja → B = B * 2</span><span>Nein → B = B + 1</span></div><div class="arr">↓</div><div class="fb wave">Ausgabe: B</div><div class="arr">↓</div><div class="fb oval">Ende</div></div>',
    ['6'], 'A = 5 + 3 = 8. Ist 8 &gt; 6? Ja → B = 3 * 2 = 6.', 'it_flow_read', 'Analysiere das Flussdiagramm. Welchen Wert hat B am Ende? Gib die Zahl ein.'),
  stmt(6, 'Scratch: Aussage zum Skript',
    sk('Start', 'setze Zahl auf 0', 'wiederhole 3 mal {', sp + 'addiere 2 zu Zahl', sp + 'gehe Zahl Schritte', '}'),
    [['Die Schleife wird dreimal durchlaufen.', 'Stimmt: wiederhole 3 mal.'],
     ['Am Ende hat die Variable Zahl den Wert 6.', 'Stimmt: 0 + 2 + 2 + 2 = 6.'],
     ['Im zweiten Durchgang geht die Figur 6 Schritte.', 'Stimmt nicht: Im zweiten Durchgang ist Zahl = 4, die Figur geht 4 Schritte.'],
     ['Die Figur geht insgesamt 12 Schritte.', 'Stimmt: 2 + 4 + 6 = 12 Schritte.']], 2),
  stmt(7, 'Scratch: Aussage zum Skript',
    sk('Start', 'frage «Wie alt bist du?» und warte', 'falls Antwort &lt; 18 dann', sp + 'sage «Du bist noch minderjährig.»', 'sonst', sp + 'sage «Du bist volljährig.»', 'sage «Tschüss!»'),
    [['Bei der Antwort 17 sagt die Figur «Du bist noch minderjährig.».', 'Stimmt: 17 &lt; 18.'],
     ['Bei der Antwort 18 sagt die Figur «Du bist noch minderjährig.».', 'Stimmt nicht: 18 ist nicht kleiner als 18, also kommt der «sonst»-Teil: «Du bist volljährig.».'],
     ['Die Figur sagt am Ende immer «Tschüss!».', 'Stimmt: Der Block steht nach der Bedingung.'],
     ['Die Figur stellt eine Frage und wartet auf eine Eingabe.', 'Stimmt: «frage … und warte».']], 1),
  zeichnen(8, 'Welches Skript zeichnet ein gleichseitiges Dreieck mit der Seitenlänge 50?',
    [[['schalte Stift ein', 'wiederhole 3 mal {', sp + 'gehe 50er Schritt', sp + 'drehe dich ↻ um 60 Grad', '}'], 'Mit 60 Grad Drehung entsteht kein geschlossenes Dreieck: Der Aussenwinkel muss 120 Grad sein.'],
     [['schalte Stift ein', 'wiederhole 3 mal {', sp + 'gehe 50er Schritt', sp + 'drehe dich ↻ um 120 Grad', '}'], ''],
     [['schalte Stift ein', 'wiederhole 3 mal {', sp + 'gehe 50er Schritt', sp + 'drehe dich ↻ um 90 Grad', '}'], 'Mit 90 Grad entsteht kein geschlossenes Dreieck, sondern eine offene Figur.'],
     [['schalte Stift ein', 'wiederhole 3 mal {', sp + 'gehe 30er Schritt', sp + 'drehe dich ↻ um 120 Grad', '}'], 'Das Dreieck ist gleichseitig, aber die Seitenlänge ist 30 statt 50.']], 1,
    'Beim gleichseitigen Dreieck ist jeder Innenwinkel 60 Grad. Die Figur dreht sich aber um den Aussenwinkel: 180 − 60 = 120 Grad. Das Skript wiederholt dies dreimal: 3 * 120 = 360 Grad.'),
  zeichnen(9, 'Welches Skript zeichnet ein Quadrat mit der Seitenlänge 40?',
    [[['schalte Stift ein', 'wiederhole 4 mal {', sp + 'gehe 40er Schritt', sp + 'drehe dich ↻ um 45 Grad', '}'], 'Mit 45 Grad Drehung kommt die Figur nach 4 Seiten nicht zum Start zurück.'],
     [['schalte Stift ein', 'wiederhole 4 mal {', sp + 'gehe 40er Schritt', sp + 'drehe dich ↻ um 90 Grad', '}'], ''],
     [['schalte Stift ein', 'wiederhole 3 mal {', sp + 'gehe 40er Schritt', sp + 'drehe dich ↻ um 90 Grad', '}'], 'Mit 3 Wiederholungen fehlt die vierte Seite.'],
     [['schalte Stift ein', 'wiederhole 4 mal {', sp + 'gehe 40er Schritt', '}', 'drehe dich ↻ um 90 Grad'], 'Hier steht die Drehung ausserhalb der Schleife: Die Figur zeichnet nur eine gerade Linie von 160.']], 1,
    'Ein Quadrat hat 4 gleich lange Seiten und 4 Drehungen um 90 Grad. Die Drehung gehört in die Schleife.'),
  flow(10, 'Flussdiagramm: Ampel',
    ['Start', '↓ Raute: <b>Ampel grün?</b>', '&nbsp;&nbsp;Ja → Strasse überqueren → Ende', '&nbsp;&nbsp;Nein → warten → zurück zu «Ampel grün?»'],
    [['Wenn die Ampel rot ist, wartest du und prüfst die Ampel nochmals.', 'Stimmt: Nein → warten → zurück zur Raute.'],
     ['Du überquerst die Strasse nur, wenn die Ampel grün ist.', 'Stimmt: Nur bei «Ja» geht es zum Überqueren.'],
     ['Wenn die Ampel rot ist, überquerst du trotzdem die Strasse.', 'Falsch: Bei «Nein» wartest du, du überquerst die Strasse nicht.'],
     ['Das Diagramm endet erst, wenn die Strasse überquert ist.', 'Stimmt: Das Ende steht nach «Strasse überqueren».']], 2),
  flow(11, 'Flussdiagramm: Passwort',
    ['Start', '↓ Passwort eingeben', '↓ Raute: <b>Passwort richtig?</b>', '&nbsp;&nbsp;Ja → Zugang erlaubt → Ende', '&nbsp;&nbsp;Nein → Raute: <b>Schon 3 Versuche?</b>', '&nbsp;&nbsp;&nbsp;&nbsp;Ja → Konto sperren → Ende', '&nbsp;&nbsp;&nbsp;&nbsp;Nein → zurück zu «Passwort eingeben»'],
    [['Nach dem ersten falschen Passwort wird das Konto gesperrt.', 'Falsch: Zuerst wird geprüft, ob es schon 3 Versuche waren. Beim ersten Fehler geht es zurück zur Eingabe.'],
     ['Bei einem richtigen Passwort wird der Zugang erlaubt.', 'Stimmt: Ja → Zugang erlaubt.'],
     ['Nach dem dritten falschen Versuch wird das Konto gesperrt.', 'Stimmt: Bei «Schon 3 Versuche? Ja» wird das Konto gesperrt.'],
     ['Nach einem falschen Passwort darf man das Passwort nochmals eingeben, sofern es nicht schon 3 Versuche waren.', 'Stimmt: Nein → zurück zu «Passwort eingeben».']], 0),
];
