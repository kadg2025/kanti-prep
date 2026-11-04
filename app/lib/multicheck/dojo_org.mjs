// Multicheck IMS, Organisationsfähigkeit: eigener Fragenpool für das Dojo (neue Aufgaben, etwas schwieriger als die Themenfragen).
// Die Tagestabellen und Lösungen werden aus den Terminen berechnet. Tag: 08.00 bis 17.00, Mittagspause 12.00 bis 13.00.
const B = { topic: 'org' };
export const std = (h) => String(h).padStart(2, '0') + '.00';

export function tabelle(tag, termine) {
  let t = `<table class="daytab"><tr><th colspan="2">${tag}</th></tr>`;
  for (let h = 8; h <= 16; h++) {
    const x = termine.find(a => h >= a.s && h < a.e);
    if (h === 12) t += `<tr><td>${std(h)}</td><td class="lunch">Mittagspause</td></tr>`;
    else t += `<tr><td>${std(h)}</td><td class="${x ? 'fx' : ''}">${x ? (h === x.s ? x.n : '″') : ''}</td></tr>`;
  }
  return t + '</table>';
}
// Verletzung für einen Starttermin: null = möglich, sonst die Begründung.
export function problem(termine, start, dauer) {
  const ende = start + dauer;
  if (ende > 17) return `Der Termin würde bis ${std(ende)} dauern, der Tag endet aber um 17.00 Uhr.`;
  if (start < 12 && ende > 12) return 'Der Termin überschneidet sich mit der Mittagspause (12.00–13.00).';
  const x = termine.find(a => start < a.e && ende > a.s);
  if (x) return `Überschneidung mit «${x.n}» (${std(x.s)}–${std(x.e)}).`;
  return null;
}

const frei = (n, tag, termine) => {
  const belegt = termine.reduce((s, a) => s + a.e - a.s, 0);
  return {
    type: 'input', num: true, title: 'Freie Zeit berechnen',
    instr: 'Die Mittagspause (12.00–13.00) bleibt immer frei. Wie viele Stunden sind an diesem Tag für neue Termine noch frei? Gib die Zahl ein.',
    body: tabelle(tag, termine), accept: [String(8 - belegt)], answerText: String(8 - belegt),
    why: `Belegt: ${termine.map(a => `${a.n} ${a.e - a.s} h`).join(' + ')} = ${belegt} Stunden. Von 8 nutzbaren Stunden bleiben 8 − ${belegt} = <b>${8 - belegt}</b> frei. (Die Mittagspause zählt nicht mit.)`,
    ck: 'o_free', ...B, id: `org-d${n}`,
  };
};
const passt = (n, tag, termine, dauer, starts, richtig) => {
  const gueltig = starts.filter(s => !problem(termine, s, dauer));
  if (gueltig.length !== 1 || gueltig[0] !== richtig) throw new Error('org-d' + n + ': genau eine gültige Startzeit nötig');
  return {
    type: 'mc', title: 'Termin einordnen',
    instr: 'Ein neuer Termin soll an diesem Tag eingetragen werden. Termine beginnen immer zur vollen Stunde und dürfen sich nicht überschneiden. Welche Startzeit ist möglich?',
    body: tabelle(tag, termine) + `<div class="big" style="font-size:16px;margin-top:8px">Neuer Termin: Dauer <b>${dauer} h</b></div>`,
    options: starts.map(s => ({ t: `Start ${std(s)} Uhr (bis ${std(s + dauer)})`, why: problem(termine, s, dauer) })),
    correct: starts.indexOf(richtig), answerText: `Start ${std(richtig)} Uhr (bis ${std(richtig + dauer)})`,
    why: `Die Zeit von ${std(richtig)} bis ${std(richtig + dauer)} ist frei und liegt nicht in der Mittagspause.`, ck: 'o_fit', ...B, id: `org-d${n}`,
  };
};
const mc = (n, titel, instr, frage, opts, c, why, ck) => ({
  type: 'mc', title: titel, instr, body: `<div class="big" style="font-size:17px">${frage}</div>`,
  options: opts.map(([t, w], i) => ({ t, why: i === c ? null : w })), correct: c, answerText: opts[c][0], why, ck, ...B, id: `org-d${n}`,
});

const STUFE = { 1: 'einfach', 2: 'einfach', 3: 'einfach', 4: 'mittel', 5: 'mittel', 6: 'mittel', 7: 'einfach', 8: 'einfach', 9: 'mittel', 10: 'schwer', 11: 'mittel', 12: 'mittel', 13: 'mittel', 14: 'mittel', 15: 'schwer', 16: 'schwer', 17: 'schwer' };
const alle = [
  frei(1, 'Dienstag', [{ n: 'Mathe', s: 8, e: 10 }, { n: 'Arzt', s: 10, e: 11 }, { n: 'Training', s: 14, e: 16 }]),
  frei(2, 'Mittwoch', [{ n: 'Nachhilfe', s: 9, e: 11 }, { n: 'Besuch', s: 13, e: 16 }, { n: 'Termin', s: 16, e: 17 }]),
  frei(3, 'Donnerstag', [{ n: 'Schule', s: 8, e: 12 }, { n: 'Probe', s: 13, e: 15 }, { n: 'Zahnarzt', s: 16, e: 17 }]),
  passt(4, 'Montag', [{ n: 'Zahnarzt', s: 8, e: 9 }, { n: 'Besuch', s: 14, e: 16 }], 2, [8, 10, 11, 15], 10),
  passt(5, 'Dienstag', [{ n: 'Chorprobe', s: 8, e: 10 }, { n: 'Besuch', s: 16, e: 17 }], 3, [8, 10, 13, 14], 13),
  passt(6, 'Mittwoch', [{ n: 'Tennis', s: 8, e: 9 }, { n: 'Arzt', s: 11, e: 12 }, { n: 'Besuch', s: 15, e: 17 }], 2, [9, 10, 11, 14], 9),
  mc(7, 'Planungsregeln', 'Beachte die Planungsvorgaben. Nur eine Antwort ist richtig.',
    'Jeder Termin dauert mindestens 1 Stunde und höchstens 3 Stunden. Termine beginnen immer zur vollen Stunde. Welcher Termin ist erlaubt?',
    [['Dauer 30 Minuten', 'Falsch: Das ist weniger als 1 Stunde.'], ['Dauer 4 Stunden', 'Falsch: Das ist mehr als 3 Stunden.'], ['Start 9.00 Uhr, Dauer 2 Stunden', ''], ['Start 9.30 Uhr, Dauer 2 Stunden', 'Falsch: 9.30 ist keine volle Stunde.']], 2,
    'Nur «Start 9.00 Uhr, Dauer 2 Stunden» erfüllt beide Regeln: volle Stunde und Dauer zwischen 1 und 3 Stunden.', 'o_rules'),
  mc(8, 'Planungsregeln', 'Beachte die Planungsvorgaben. Nur eine Antwort ist richtig.',
    'Die Mittagspause von 12.00 bis 13.00 Uhr bleibt frei. Welcher Termin ist erlaubt?',
    [['11.00 bis 13.00 Uhr', 'Falsch: Der Termin reicht in die Mittagspause hinein.'], ['12.00 bis 14.00 Uhr', 'Falsch: Der Termin beginnt in der Mittagspause.'], ['10.00 bis 13.00 Uhr', 'Falsch: Der Termin reicht bis 13.00 und damit durch die Mittagspause.'], ['13.00 bis 15.00 Uhr', '']], 3,
    'Ein Termin ab 13.00 Uhr beginnt erst nach der Mittagspause.', 'o_rules'),
  mc(9, 'Bedingungen beachten', 'Nur eine Antwort ist richtig.',
    'Der Sporttermin (2 h) muss nach dem Zahnarzt stattfinden. Der Zahnarzt ist fix am Dienstag 14.00–15.00. Welche Platzierung des Sporttermins stimmt?',
    [['Dienstag 14.00–16.00', 'Falsch: Das überschneidet sich mit dem Zahnarzt.'], ['Montag 15.00–17.00', 'Falsch: Montag liegt vor dem Zahnarzt.'], ['Dienstag 15.00–17.00', ''], ['Dienstag 8.00–10.00', 'Falsch: Das liegt vor dem Zahnarzt.']], 2,
    'Der Sport beginnt um 15.00, wenn der Zahnarzt zu Ende ist.', 'o_cond'),
  mc(10, 'Bedingungen beachten', 'Nur eine Antwort ist richtig.',
    'Die Nachhilfe ist fix am Mittwoch 9.00–10.00. Das Training (2 h) soll am selben Tag stattfinden. Dazwischen muss mindestens 1 Stunde Pause liegen. Die Mittagspause bleibt frei. Welche Platzierung stimmt?',
    [['Mittwoch 10.00–12.00', 'Falsch: Zwischen Nachhilfe und Training liegt keine Pause.'], ['Mittwoch 11.00–13.00', 'Falsch: Das Training reicht in die Mittagspause (12.00–13.00).'], ['Mittwoch 13.00–15.00', ''], ['Mittwoch 8.00–10.00', 'Falsch: Das überschneidet sich mit der Nachhilfe.']], 2,
    'Ab 13.00 Uhr liegt das Training nach der Mittagspause und weit genug von der Nachhilfe weg.', 'o_cond'),
  mc(11, 'Bedingungen beachten', 'Nur eine Antwort ist richtig.',
    'Der Vortrag (1 h) muss am Tag vor dem Abgabetermin stattfinden. Die Abgabe ist am Freitag um 10.00 Uhr. Die Mittagspause bleibt frei. Welche Platzierung stimmt?',
    [['Donnerstag 12.00–13.00', 'Falsch: Das ist die Mittagspause.'], ['Freitag 8.00–9.00', 'Falsch: Das ist am Tag der Abgabe, nicht am Tag davor.'], ['Mittwoch 9.00–10.00', 'Falsch: Das ist zwei Tage vor der Abgabe.'], ['Donnerstag 9.00–10.00', '']], 3,
    'Der Tag vor Freitag ist Donnerstag. Um 9.00 Uhr liegt der Vortrag nicht in der Mittagspause.', 'o_cond'),
  frei(12, 'Montag', [{ n: 'Sitzung', s: 8, e: 9 }, { n: 'Besuch', s: 9, e: 11 }, { n: 'Arzt', s: 13, e: 14 }, { n: 'Kurs', s: 14, e: 16 }, { n: 'Zahnarzt', s: 16, e: 17 }]),
  passt(13, 'Montag', [{ n: 'Probe', s: 9, e: 10 }, { n: 'Arzt', s: 13, e: 14 }], 3, [8, 10, 11, 14], 14),
  passt(14, 'Freitag', [{ n: 'Zahnarzt', s: 14, e: 15 }], 4, [8, 10, 13, 14], 8),
  mc(15, 'Planungsregeln', 'Beachte die Planungsvorgaben. Nur eine Antwort ist richtig.',
    'Termine beginnen zur vollen Stunde, dauern 1 bis 3 Stunden, enden spätestens um 17.00 Uhr und dürfen die Mittagspause (12.00–13.00) nicht belegen. Welcher Termin ist erlaubt?',
    [['Start 11.00 Uhr, Dauer 2 Stunden', 'Falsch: Der Termin reicht von 11.00 bis 13.00 und damit in die Mittagspause.'], ['Start 8.00 Uhr, Dauer 4 Stunden', 'Falsch: Mit 4 Stunden ist der Termin länger als erlaubt.'], ['Start 16.00 Uhr, Dauer 2 Stunden', 'Falsch: Der Termin würde bis 18.00 Uhr dauern.'], ['Start 13.00 Uhr, Dauer 3 Stunden', '']], 3,
    'Der Termin von 13.00 bis 16.00 Uhr beginnt nach der Mittagspause, dauert höchstens 3 Stunden und endet vor 17.00 Uhr.', 'o_rules'),
  mc(16, 'Bedingungen beachten', 'Nur eine Antwort ist richtig.',
    'Der Zahnarzt ist fix am Dienstag von 13.00 bis 14.00 Uhr. Das Training (2 h) soll am selben Tag danach stattfinden. Dazwischen muss mindestens 1 Stunde Pause liegen. Der Tag endet um 17.00 Uhr. Welche Platzierung stimmt?',
    [['Dienstag 14.00–16.00', 'Falsch: Zwischen Zahnarzt und Training liegt keine Pause.'], ['Dienstag 15.00–17.00', ''], ['Montag 15.00–17.00', 'Falsch: Das ist nicht am selben Tag.'], ['Dienstag 8.00–10.00', 'Falsch: Das liegt vor dem Zahnarzt.']], 1,
    'Der Zahnarzt endet um 14.00 Uhr. Mit einer Stunde Pause beginnt das Training frühestens um 15.00 Uhr und endet um 17.00 Uhr.', 'o_cond'),
  mc(17, 'Bedingungen beachten', 'Nur eine Antwort ist richtig.',
    'Die Prüfung ist fix am Donnerstag. Die Vorbereitung (3 h) muss genau zwei Tage vor der Prüfung stattfinden. Die Mittagspause bleibt frei. Welche Platzierung stimmt?',
    [['Montag 9.00–12.00', 'Falsch: Das ist drei Tage vor der Prüfung.'], ['Dienstag 10.00–13.00', 'Falsch: Der Tag stimmt, aber der Termin reicht in die Mittagspause.'], ['Mittwoch 9.00–12.00', 'Falsch: Das ist nur einen Tag vor der Prüfung.'], ['Dienstag 9.00–12.00', '']], 3,
    'Zwei Tage vor Donnerstag ist Dienstag. Von 9.00 bis 12.00 Uhr endet die Vorbereitung vor der Mittagspause.', 'o_cond'),
];
export default alle.map(q => ({ ...q, difficulty: STUFE[q.id.split('-d')[1]] }));
