// Antworten prüfen für alle Multicheck-Fragetypen. Die Regeln (norm, numWhy,
// diffTxt und die Prüfung pro Typ) stammen unverändert aus der Übungsprüfung.
// Der Antwortstand «U» hat die Form:
// { sel, set, val, korr, w, cols, asg }
import { check as planCheck } from './plan';
import { PFEIL_TEXT } from './raeumlich.mjs';

export function neuerStand(q) {
  return { sel: null, set: {}, val: q.prefix || '', korr: false, w: -1, cols: [0, 0, 0, 0, 0, 0, 0, 0], asg: {}, rows: q.items ? q.items.map(() => null) : [] };
}

function norm(s, q) {
  s = String(s).trim().toLowerCase().replace(/\s+/g, '');
  if (q.letters) return s.replace(/[^a-z]/g, '');
  return s.replace(/\*/g, '').replace(/,/g, '.').replace(/'/g, '');
}

function numWhy(a, b) {
  a = a.replace(/'/g, ''); b = b.replace(/'/g, '');
  if (a.length > b.length) return 'Diese Antwort hat zu viele Stellen (' + a.length + ' statt ' + b.length + ').';
  if (a.length < b.length) return 'Diese Antwort hat zu wenige Stellen (' + a.length + ' statt ' + b.length + ').';
  if (a.slice(-1) !== b.slice(-1)) return 'Die letzte Ziffer stimmt nicht (…' + a.slice(-1) + ' statt …' + b.slice(-1) + ').';
  return 'Die Grössenordnung passt, aber die vorderen Ziffern sind anders.';
}

function diffTxt(a, b) {
  if (a.length !== b.length) return '';
  const s = a.split('').sort().join(''), t = b.split('').sort().join('');
  const pos = [];
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) pos.push(i + 1);
  return (s === t ? 'Dieselben Zeichen, aber in anderer Reihenfolge: ' : 'Ein Zeichen ist anders: ') + 'Unterschiede an Position ' + pos.join(', ') + ' (deine Wahl «' + a + '», richtig «' + b + '»).';
}

// Numerische Verarbeitungskapazität: Anzeigedauer pro Schritt (ähnlich wie bei den
// Farbkombinationen, dort knapp eine Sekunde pro Kreis) und kurze Pause dazwischen.
export const NUMPROC = { SICHTBAR: 1200, LUECKE: 400 };

// Reihenfolge der Anzeige: Startzahl oben, Startzahl unten, dann abwechselnd oben und unten ein Rechenschritt.
export function numprocEreignisse(q) {
  const ev = [{ reihe: 'top', text: String(q.top.start) }, { reihe: 'bottom', text: String(q.bottom.start) }];
  const schritt = (s) => (s > 0 ? '+' : '–') + Math.abs(s);
  const n = Math.max(q.top.steps.length, q.bottom.steps.length);
  for (let i = 0; i < n; i++) {
    if (i < q.top.steps.length) ev.push({ reihe: 'top', text: schritt(q.top.steps[i]) });
    if (i < q.bottom.steps.length) ev.push({ reihe: 'bottom', text: schritt(q.bottom.steps[i]) });
  }
  return ev;
}

// Erwartete Antwort einer Einzelaufgabe in einem Block: 'g' (gleich) oder 'n' (nicht gleich) bzw. «XY».
export function erwartetAntwort(q, item) {
  return q.type === 'numcmp' ? (item.gleich ? 'g' : 'n') : item.a;
}

// true, wenn noch nichts (vollständig) beantwortet ist.
export function istLeer(q, U) {
  const t = q.type;
  if ((t === 'mc' || t === 'memchoice' || t === 'numproc' || t === 'figmc' || t === 'spatial' || t === 'net') && U.sel == null) return true;
  if ((t === 'numcmp' || t === 'coord') && U.rows.some(x => x == null)) return true;
  if (t === 'multi' && !Object.keys(U.set).some(k => U.set[k])) return true;
  if (t === 'input' && !U.val.trim()) return true;
  if (t === 'gap' && !U.korr && !U.val.trim()) return true;
  if (t === 'spell' && !U.korr && (U.w < 0 || !U.val.trim())) return true;
  if (t === 'memcolor' && U.cols.every(c => !c)) return true;
  if (t === 'plan' && q.plan.mov.some(m => { const a = U.asg[m.n]; return !a || a.d == null || (!(m.c && m.c.two) && a.s == null); })) return true;
  return false;
}

// Gibt { ok, user, extra, planRes } zurück.
export function auswerten(q, U, timeout) {
  const t = q.type;
  let ok = false, user = '', extra = '', planRes = null;
  if (timeout && t !== 'plan') {
    user = 'keine Antwort (Zeit abgelaufen)';
  } else if (t === 'mc' || t === 'memchoice') {
    ok = U.sel === q.correct;
    user = q.options[U.sel].t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const o = q.options[U.sel];
    if (!ok) {
      if (q.numeric) extra = numWhy(o.t, q.options[q.correct].t);
      else if (t === 'memchoice') extra = diffTxt(o.t, q.options[q.correct].t);
      else if (o.why) extra = o.why;
    }
  } else if (t === 'numcmp' || t === 'coord') {
    const falsch = q.items.map((it, i) => (U.rows[i] === erwartetAntwort(q, it) ? 0 : i + 1)).filter(Boolean);
    ok = falsch.length === 0;
    if (!ok) extra = (t === 'numcmp' ? 'Falsch in Zeile ' : 'Falsch bei Feld ') + falsch.join(', ') + '.';
  } else if (t === 'spatial') {
    ok = U.sel === q.correct;
    user = PFEIL_TEXT[U.sel];
  } else if (t === 'net') {
    ok = U.sel === q.correct;
    user = 'Figur ' + 'ABCDE'[U.sel];
    if (!ok) extra = q.options[U.sel].why;
  } else if (t === 'figmc') {
    ok = U.sel === q.correct;
    user = 'Bild ' + (U.sel + 1);
  } else if (t === 'numproc') {
    ok = U.sel === q.answer;
    user = String(U.sel);
  } else if (t === 'multi') {
    const ch = Object.keys(U.set).filter(k => U.set[k]).map(Number).sort();
    ok = JSON.stringify(ch) === JSON.stringify(q.correct);
    user = ch.map(i => q.options[i].t).join(' / ');
  } else if (t === 'input') {
    const v = norm(U.val, q);
    user = U.val.trim();
    if (q.num) {
      const n = parseFloat(v);
      ok = q.accept.some(a => Math.abs(parseFloat(a) - n) < 1e-9);
    } else ok = q.accept.some(a => norm(a, q) === v);
  } else if (t === 'gap') {
    if (U.korr) { ok = q.accept === null; user = 'korrekt'; }
    else { user = U.val.trim(); ok = !!q.accept && q.accept.some(a => a.toLowerCase() === user.toLowerCase()); }
  } else if (t === 'spell') {
    if (U.korr) { ok = q.wrong < 0; user = 'korrekt'; }
    else { user = '«' + q.words[U.w].replace(/[.,]$/, '') + '» → ' + U.val.trim(); ok = U.w === q.wrong && U.val.trim() === q.fix; }
  } else if (t === 'memcolor') {
    ok = q.seq.every((c, i) => U.cols[i] === c + 1);
    const nm = ['–', 'rot', 'blau', 'schwarz'];
    user = U.cols.map(c => nm[c]).join(', ');
  } else if (t === 'plan') {
    planRes = planCheck(q.plan, U.asg);
    ok = planRes.ok;
  }
  return { ok, user, extra, planRes };
}
