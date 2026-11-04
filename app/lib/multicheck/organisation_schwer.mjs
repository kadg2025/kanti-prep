// Multicheck IMS, Organisationsfähigkeit: schwere Fragen (org-31 bis org-40), Unterthema «Organisation, schwer».
// Tagestabellen und Lösungen werden aus den Terminen berechnet und geprüft (genau eine richtige Antwort).
import { tabelle, std } from './dojo_org.mjs';

const B = { topic: 'org', difficulty: 'schwer' };
const ST = [8, 9, 10, 11, 13, 14, 15, 16]; // nutzbare Stunden-Felder (12 = Mittagspause)

const belegt = (termine) => new Set(termine.flatMap(a => ST.filter(h => h >= a.s && h < a.e)));
// Wegzeit direkt nach dem Termin (entfällt bei Ende 12.00 und 17.00).
const wegNach = (termine) => new Set(termine.map(a => a.e).filter(e => ST.includes(e)));
const luecken = (frei) => {
  const l = [];
  for (const halb of [[8, 9, 10, 11], [13, 14, 15, 16]]) {
    let cur = 0;
    for (const h of halb) { if (frei.has(h)) cur++; else { if (cur) l.push(cur); cur = 0; } }
    if (cur) l.push(cur);
  }
  return l;
};
const ok = (c, m) => { if (!c) throw new Error('org-schwer: ' + m); };
const A = (n, p) => ({ ...p, ...B, id: `org-${n}` });
const inp = (n, ck, titel, instr, body, antwort, why) => A(n, { type: 'input', num: true, title: titel, instr, body, accept: [String(antwort)], answerText: String(antwort), why, ck });
const mc = (n, titel, ck, instr, body, opts, c, why) => A(n, {
  type: 'mc', title: titel, instr, body, options: opts.map(([t, w], i) => ({ t, why: i === c ? null : w })), correct: c, answerText: opts[c][0], why, ck,
});
const frage = (t) => `<div class="big" style="font-size:17px">${t}</div>`;
const TAGE = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
const tag2 = (i) => TAGE[i];

const out = [];

// org-31: längste freie Lücke statt Summe der freien Stunden
{
  const t = [{ n: 'Sitzung', s: 9, e: 10 }, { n: 'Arzt', s: 11, e: 12 }, { n: 'Probe', s: 13, e: 14 }, { n: 'Kurs', s: 16, e: 17 }];
  const frei = new Set(ST.filter(h => !belegt(t).has(h)));
  const l = luecken(frei); const max = Math.max(...l);
  ok(frei.size === 4 && max === 2, '31');
  out.push(inp(31, 'o_free', 'Freie Zeit berechnen', 'Die Mittagspause (12.00–13.00) bleibt immer frei. Ein neuer Termin muss an einem Stück stattfinden und darf die Mittagspause nicht überdecken. Wie viele Stunden dauert der längste neue Termin, der an diesem Tag noch möglich ist? Gib die Zahl ein.',
    tabelle('Mittwoch', t), max, `Die freien Lücken sind 08–09 (1 h), 10–11 (1 h) und 14–16 (2 h). Insgesamt sind zwar ${frei.size} Stunden frei, aber an einem Stück höchstens <b>${max}</b>.`));
}
// org-32: Wegzeit nach jedem Termin
{
  const t = [{ n: 'Kunde', s: 8, e: 10 }, { n: 'Sitzung', s: 11, e: 12 }, { n: 'Besuch', s: 14, e: 15 }];
  const b = belegt(t), w = wegNach(t);
  const fr = ST.filter(h => !b.has(h) && !w.has(h));
  ok(fr.length === 2 && fr.join() === '13,16', '32');
  out.push(inp(32, 'o_free', 'Freie Zeit berechnen', 'Nach jedem Termin braucht man 1 Stunde Wegzeit, die nicht für neue Termine genutzt werden kann. Endet ein Termin um 12.00 oder um 17.00 Uhr, entfällt die Wegzeit. Wie viele Stunden sind an diesem Tag noch für neue Termine frei? Gib die Zahl ein.',
    tabelle('Donnerstag', t), fr.length, `Belegt sind Kunde 08–10 (2 h), Wegzeit 10–11 (1 h), Sitzung 11–12 (1 h, danach Mittagspause, also keine Wegzeit), Besuch 14–15 (1 h) und Wegzeit 15–16 (1 h). Das sind 6 Stunden. Frei bleiben 8 − 6 = <b>${fr.length}</b> Stunden (13–14 und 16–17).`));
}
// org-33: Anzahl möglicher Startzeiten, wenn vor dem Termin 1 Stunde Wegzeit nötig ist
const passtHin = (b, s, d) => { for (let h = s; h < s + d; h++) if (!ST.includes(h) || b.has(h)) return false; return true; };
// Wegzeit im Feld direkt vor dem Start: nicht vor 8.00, nicht auf einem Termin; die Mittagspause darf als Wegzeit dienen.
const mitWeg = (b, s, d) => passtHin(b, s, d) && s >= 9 && (s === 13 || !b.has(s - 1));
{
  const t = [{ n: 'Besuch', s: 15, e: 17 }];
  const b = belegt(t);
  const ohne = ST.filter(s => passtHin(b, s, 2)), mit = ST.filter(s => mitWeg(b, s, 2));
  ok(ohne.join() === '8,9,10,13' && mit.join() === '9,10,13', '33');
  out.push(inp(33, 'o_rules', 'Planungsregeln', 'Ein neuer Termin dauert 2 Stunden und beginnt zur vollen Stunde. Davor braucht man 1 Stunde Wegzeit, die ebenfalls frei sein muss (vor 8.00 Uhr ist keine Wegzeit möglich, die Mittagspause darf als Wegzeit dienen). Wie viele verschiedene Startzeiten sind möglich? Gib die Zahl ein.',
    tabelle('Freitag', t), mit.length, `Ohne Wegzeit wären die Starts 8.00, 9.00, 10.00 und 13.00 möglich. Start 8.00 geht mit Wegzeit nicht, weil davor keine Stunde frei ist. Möglich sind also 9.00, 10.00 und 13.00, das sind <b>${mit.length}</b> Startzeiten (Start 14.00 scheitert am Besuch ab 15.00).`));
}
// org-34: Termin einordnen mit Wegzeit davor
{
  const t = [{ n: 'Probe', s: 8, e: 9 }, { n: 'Arzt', s: 11, e: 12 }, { n: 'Kurs', s: 15, e: 16 }];
  const b = belegt(t); const d = 2; const starts = [9, 10, 13, 14];
  ok(starts.filter(s => mitWeg(b, s, d)).join() === '13', '34');
  const w = {
    9: 'Der Termin selbst passt (09–11), aber die Wegzeit von 08.00 bis 09.00 liegt auf der Probe.',
    10: 'Überschneidung mit «Arzt» (11.00–12.00).',
    14: 'Überschneidung mit «Kurs» (15.00–16.00).',
  };
  out.push(mc(34, 'Termin einordnen', 'o_fit', 'Ein neuer Termin dauert 2 Stunden. Davor braucht man 1 Stunde Wegzeit, die frei sein muss; die Mittagspause darf als Wegzeit dienen. Welche Startzeit ist möglich?',
    tabelle('Dienstag', t) + `<div class="big" style="font-size:16px;margin-top:8px">Neuer Termin: Dauer <b>2 h</b>, davor 1 h Wegzeit</div>`,
    starts.map(s => [`Start ${std(s)} Uhr (bis ${std(s + d)})`, w[s]]), 2, 'Bei Start 13.00 Uhr ist die Wegzeit die Mittagspause (12.00–13.00), und von 13.00 bis 15.00 ist alles frei.'));
}
// org-35: zwei neue Termine nacheinander mit Pause dazwischen
{
  const t = [{ n: 'Sitzung', s: 8, e: 10 }, { n: 'Kunde', s: 14, e: 15 }];
  const b = belegt(t);
  const paare = [[10, 13], [10, 15], [11, 15], [10, 14], [15, 10]];
  const pruefe = ([x, y]) => {
    if (y < x + 2) return `Termin Y (ab ${std(y)}) muss nach Termin X (${std(x)}–${std(x + 2)}) stattfinden.`;
    if (!passtHin(b, x, 2)) return x === 11 ? 'Termin X würde in die Mittagspause reichen (11.00–13.00).' : 'Termin X überschneidet sich mit einem bestehenden Termin.';
    if (!passtHin(b, y, 1)) return `Termin Y (${std(y)}–${std(y + 1)}) überschneidet sich mit «Kunde» (14.00–15.00).`;
    if (y - (x + 2) < 2) return `Zwischen X (Ende ${std(x + 2)}) und Y (Start ${std(y)}) liegt nur 1 Stunde, verlangt sind 2 Stunden. Die Mittagspause zählt nicht als Pause.`;
    return null;
  };
  const g = paare.filter(p => !pruefe(p));
  ok(g.length === 1 && g[0].join() === '10,15', '35 ' + JSON.stringify(g));
  out.push(mc(35, 'Termin einordnen', 'o_fit', 'Zwei neue Termine sollen am selben Tag eingetragen werden: Termin X dauert 2 Stunden, Termin Y dauert 1 Stunde. Y muss nach X stattfinden, dazwischen müssen mindestens 2 Stunden Pause liegen. Die Mittagspause zählt nicht als Pause und darf nicht belegt werden. Welche Zeiten sind möglich?',
    tabelle('Mittwoch', t),
    paare.map(p => [`X ab ${std(p[0])} Uhr, Y ab ${std(p[1])} Uhr`, pruefe(p)]), 1, 'X belegt 10.00–12.00, Y belegt 15.00–16.00. Dazwischen liegen 3 Stunden (12–15). Alles ist frei, und die Pause ist lang genug.'));
}
// org-36: Planungsregeln mit mehreren Bedingungen
{
  // Fest: Zahnarzt Mittwoch 10–11. Referat (2 h) muss vor dem Zahnarzt stattfinden (früherer Tag oder am Mittwoch davor).
  // Training (2 h) muss nach dem Zahnarzt stattfinden und nicht am Tag des Referats.
  const zahn = { d: 2, s: 10, e: 11 };
  const vor = (a, b) => a.d < b.d || (a.d === b.d && a.e <= b.s);
  const slot = (d, s, dur) => ({ d, s, e: s + dur });
  const gueltigSlot = (x) => x.e <= 12 && x.s >= 8 || x.s >= 13 && x.e <= 17;
  const opts = [
    [slot(0, 13, 2), slot(2, 13, 2)],
    [slot(1, 8, 2), slot(1, 14, 2)],
    [slot(2, 13, 2), slot(4, 9, 2)],
    [slot(1, 11, 2), slot(3, 8, 2)],
    [slot(2, 8, 2), slot(2, 13, 2)],
  ];
  const pruefe = ([r, tr]) => {
    if (!gueltigSlot(r) || !gueltigSlot(tr)) return 'Das Referat von 11.00 bis 13.00 reicht in die Mittagspause.';
    if (!vor(r, zahn)) return 'Das Referat liegt nicht vor dem Zahnarzt (Mittwoch 10.00–11.00).';
    if (!vor(zahn, tr)) return 'Das Training liegt nicht nach dem Zahnarzt.';
    if (r.d === tr.d) return 'Referat und Training liegen am selben Tag, das ist nicht erlaubt.';
    return null;
  };
  const g = opts.filter(o => !pruefe(o));
  ok(g.length === 1 && g[0] === opts[0], '36');
  const f = ([r, tr]) => `Referat ${tag2(r.d)} ${std(r.s).slice(0, 2)}–${std(r.e).slice(0, 2)}, Training ${tag2(tr.d)} ${std(tr.s).slice(0, 2)}–${std(tr.e).slice(0, 2)}`;
  out.push(mc(36, 'Bedingungen beachten', 'o_cond', 'Der Zahnarzt ist fix am Mittwoch von 10.00 bis 11.00 Uhr. Das Referat (2 h) muss vor dem Zahnarzt stattfinden, das Training (2 h) nach dem Zahnarzt. Referat und Training dürfen nicht am selben Tag liegen. Die Mittagspause (12.00–13.00) bleibt frei. Welche Planung erfüllt alle Bedingungen?',
    frage('Welche Planung stimmt?'), opts.map(o => [f(o), pruefe(o)]), 0, 'Referat am Montag liegt vor dem Zahnarzt, das Training am Mittwoch ab 13.00 liegt danach. Die Tage sind verschieden, und die Mittagspause bleibt frei.'));
}
// org-37: Regeln mit Ausnahme
{
  const regeln = (a) => {
    const dauer = a.e - a.s;
    if (a.s < 12 && a.e > 12) return 'Der Termin reicht in die Mittagspause (12.00–13.00).';
    if (a.pruefung ? dauer > 4 : dauer > 3) return a.pruefung ? 'Auch Prüfungen dauern höchstens 4 Stunden.' : 'Ausser Prüfungen dauern Termine höchstens 3 Stunden.';
    if (a.pruefung && a.s >= 13) return 'Prüfungen finden nur am Vormittag statt.';
    if (a.d === 4 && a.e > 15) return 'Am Freitag enden alle Termine spätestens um 15.00 Uhr.';
    return null;
  };
  const opts = [
    { t: 'Prüfung, Montag 8.00–12.00', d: 0, s: 8, e: 12, pruefung: true },
    { t: 'Besprechung, Dienstag 13.00–17.00', d: 1, s: 13, e: 17 },
    { t: 'Prüfung, Mittwoch 13.00–16.00', d: 2, s: 13, e: 16, pruefung: true },
    { t: 'Training, Freitag 13.00–16.00', d: 4, s: 13, e: 16 },
    { t: 'Kurs, Donnerstag 10.00–13.00', d: 3, s: 10, e: 13 },
  ];
  const g = opts.filter(o => !regeln(o));
  ok(g.length === 1 && g[0] === opts[0], '37 ' + opts.map(regeln));
  out.push(mc(37, 'Planungsregeln', 'o_rules', 'Es gelten diese Regeln: Termine beginnen zur vollen Stunde und dauern höchstens 3 Stunden. Ausnahme: Prüfungen dürfen bis zu 4 Stunden dauern, finden aber nur am Vormittag statt. Die Mittagspause (12.00–13.00) bleibt frei. Am Freitag enden alle Termine spätestens um 15.00 Uhr. Welcher Termin ist erlaubt?',
    frage('Welcher Termin ist erlaubt?'), opts.map(o => [o.t, regeln(o)]), 0, 'Die Prüfung von 8.00 bis 12.00 Uhr dauert 4 Stunden (erlaubte Ausnahme), liegt am Vormittag und endet vor der Mittagspause.'));
}
// org-38: Anzahl möglicher Tage bei mehreren Bedingungen
{
  const tage = [0, 1, 2, 3, 4].filter(d => d !== 0 && d !== 2 && d !== 3);
  ok(tage.join() === '1,4', '38');
  out.push(inp(38, 'o_rules', 'Planungsregeln', 'Die Besprechung kann an einem Tag von Montag bis Freitag stattfinden. Es gelten diese Bedingungen: Nicht am Montag. Nicht am Tag der Prüfung (Mittwoch). Zwischen Prüfung und Besprechung muss mindestens ein Tag Abstand liegen, falls die Besprechung nach der Prüfung stattfindet. An wie vielen Tagen kann die Besprechung stattfinden? Gib die Zahl ein.',
    frage('An wie vielen Tagen ist die Besprechung möglich?'), tage.length, 'Montag und Mittwoch fallen weg. Donnerstag fällt weg, weil er direkt auf die Prüfung folgt (kein Tag Abstand). Möglich sind Dienstag und Freitag, das sind <b>2</b> Tage.'));
}
const perms = (a) => (a.length < 2 ? [a] : a.flatMap((x, i) => perms([...a.slice(0, i), ...a.slice(i + 1)]).map(p => [x, ...p])));
// org-39: Reihenfolge von vier Terminen (eindeutig)
{
  // p[k] = Tag (0 = Montag ... 3 = Donnerstag) von A, B, C, D
  const regel = ([a, b, c, d]) => {
    if (a === 0) return 'Termin A liegt am Montag.';
    if (b === 0) return 'Termin B liegt am Montag.';
    if (c !== a + 1) return 'Termin C liegt nicht am Tag direkt nach Termin A.';
    if (c === 3) return 'Termin C liegt am Donnerstag.';
    if (d > b) return 'Termin D liegt nicht vor Termin B.';
    return null;
  };
  const gut = perms([0, 1, 2, 3]).filter(p => !regel(p));
  ok(gut.length === 1 && gut[0].join() === '1,3,2,0', '39');
  const opts = [[1, 3, 2, 0], [0, 3, 1, 2], [2, 0, 3, 1], [1, 2, 3, 0], [2, 3, 3, 0]];
  const wochen = ['Mo', 'Di', 'Mi', 'Do'];
  const f = (p) => wochen.map((_, d) => 'ABCD'[p.indexOf(d)]).join(' – ');
  ok(opts.slice(0, 4).every(p => new Set(p).size === 4), '39b');
  opts.pop();
  opts.push([1, 2, 0, 3]);
  ok(opts.filter(p => !regel(p)).length === 1, '39c');
  out.push(mc(39, 'Bedingungen beachten', 'o_cond', 'Vier Termine A, B, C und D liegen an vier verschiedenen Tagen von Montag bis Donnerstag, pro Tag genau einer. Bedingungen: A und B liegen nicht am Montag. C liegt am Tag direkt nach A. C liegt nicht am Donnerstag. D liegt vor B. Welche Reihenfolge von Montag bis Donnerstag stimmt?',
    frage('Welche Reihenfolge (Montag bis Donnerstag) stimmt?'), opts.map(p => [f(p), regel(p)]), 0, 'D liegt am Montag, A am Dienstag, C am Mittwoch (direkt nach A, nicht Donnerstag) und B am Donnerstag. D liegt vor B, und A und B liegen nicht am Montag.'));
}
// org-40: Anzahl möglicher Anordnungen
{
  const n = perms([0, 1, 2, 3]).filter(([a, b, c, d]) => a < c && b !== 0 && d > a && c < d + 2);
  ok(n.length === 5, '40');
  out.push(inp(40, 'o_cond', 'Bedingungen beachten', 'Vier Termine A, B, C und D liegen an vier verschiedenen Tagen von Montag bis Donnerstag, pro Tag genau einer. Bedingungen: A liegt vor C. B liegt nicht am Montag. D liegt nach A. C liegt höchstens einen Tag nach D (C darf auch vor D liegen). Wie viele verschiedene Reihenfolgen sind möglich? Gib die Zahl ein.',
    frage('Wie viele Reihenfolgen sind möglich?'), n.length, 'Weil A vor C und vor D liegt und B nicht am Montag liegt, muss A am Montag stehen. B, C und D können dann auf die drei übrigen Tage verteilt werden (6 Möglichkeiten). Nur eine scheidet aus: D am Dienstag und C am Donnerstag, denn dann läge C zwei Tage nach D. Es bleiben <b>5</b>.'));
}
// Richtige Antwort nicht immer an derselben Stelle: Optionen drehen.
const drehe = (q, k) => { const o = q.options.slice(); const x = o.splice(0, k); o.push(...x); const c = (q.correct - k + o.length) % o.length; return { ...q, options: o, correct: c }; };
const rot = { 36: 2, 37: 3, 39: 1 };
export default out.map(q => (rot[q.id.split('-')[1]] ? drehe(q, rot[q.id.split('-')[1]]) : q));
