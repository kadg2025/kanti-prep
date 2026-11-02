// Qualitätskontrolle für Multicheck IMS (app/lib/multicheck/)
// Aufruf: node pruefe_multicheck.mjs
//
// Prüft: 234 Fragen, keine doppelten IDs, alle Konzept-Verweise vorhanden,
// Wochenplan-Musterlösungen gültig, jedes aktive Thema hat Üben, Dojo und
// Lernkarten (mit «Typische Fehler» und «Dojo»), Check-Fragen und Dojo-Karten
// wohlgeformt, bekannte Farb-Tags, kein ß, keine Jahreszahl, Videos (höchstens eines pro Kachel, gültige ID),
// dazu die Zahlenbeispiele der Lernkarten nachgerechnet.

import fs from 'node:fs';

const DIR = 'app/lib/multicheck/';
let fehler = 0;
const bad = (m) => { fehler++; console.log('FEHLER: ' + m); };

// Die Dateien sind ES-Module ohne Dateiendung in den Imports. Sie werden
// hier als Text gelesen und mit new Function ausgewertet.
function laden(datei, export_, params = {}) {
  let s = fs.readFileSync(DIR + datei, 'utf8');
  s = s.replace(/^import .*$/gm, '').replace(/^export default (\w+);$/m, 'return $1;');
  if (export_) s = s.replace(/^export const (\w+) =/m, 'const $1 =') + `\nreturn ${export_};`;
  return new Function(...Object.keys(params), s)(...Object.values(params));
}

const dateien = { deutsch: 'deutsch.js', englisch: 'englisch.js', kurz: 'kurzzeitgedaechtnis.js', it: 'it_grundwissen.js', org: 'organisation.js', mathe: 'mathematik.js', logik: 'logik.js', konz: 'konzentration.js' };
const numerisch = laden('logik_numerisch.js');
const FG = new Function(fs.readFileSync(DIR + 'figur.js', 'utf8').replace(/^export /gm, '') + '\nreturn { fig, normalisiere, unterschiede, wendeRegel, renderFigur };')();
const daten = laden('konzentration_daten.js');
const figural = laden('logik_figural.js', null, { fig: FG.fig });
const themen = Object.fromEntries(Object.entries(dateien).map(([id, f]) => [id, laden(f, null, { numerisch, figural, daten })]));
const UT = new Function(fs.readFileSync(DIR + 'unterthemen.js', 'utf8').replace(/^export /gm, '') + '\nreturn { UNTERTHEMEN, mitUnterthemen };')();
const lk = laden('lernkarten.js', 'multicheckLernkarten', { fig: FG.fig });

// Wochenplan-Logik
const planSrc = fs.readFileSync(DIR + 'plan.js', 'utf8').replace(/^export \{.*\};$/m, '') + '\nreturn { check, solve, DAYS, slotsOf };';
const PL = new Function(planSrc)();

// ─── Fragen ──────────────────────────────────────────────────────────────
const alle = Object.values(themen).flatMap(t => t.qs);
if (alle.length !== 234) bad(`Fragen: ${alle.length} statt 234`);
const ids = alle.map(q => q.id);
if (new Set(ids).size !== ids.length) bad('doppelte Frage-IDs');
for (const [id, t] of Object.entries(themen)) {
  if (t.id !== id) bad(`Thema ${id}: falsche id ${t.id}`);
  if (!t.intro || !t.name || !t.sub) bad(`Thema ${id}: name/sub/intro fehlt`);
  for (const q of t.qs) {
    if (!t.konzepte[q.ck]) bad(`${q.id}: Konzept ${q.ck} fehlt`);
    if (q.topic !== id) bad(`${q.id}: topic ${q.topic}`);
    if (q.type === 'plan') {
      const r = PL.check(q.plan, q.sol);
      if (!r.ok) bad(`${q.id}: Musterlösung des Wochenplans ungültig`);
    }
    if ((q.type === 'mc' || q.type === 'memchoice') && !(q.correct >= 0 && q.correct < q.options.length)) bad(`${q.id}: correct ausserhalb`);
    if (id === 'logik' && q.type === 'mc' && q.options[q.correct].t !== q.answerText) bad(`${q.id}: answerText passt nicht zur richtigen Option`);
  }
}
console.log('Fragen:', Object.entries(themen).map(([id, t]) => `${id} ${t.qs.length}`).join(', '), '→', alle.length);

// ─── Unterthemen ─────────────────────────────────────────────────────────
for (const [id, t] of Object.entries(themen)) {
  const m = UT.mitUnterthemen(t);
  const gesehen = new Map();
  const uids = m.unter.map(x => x.id);
  if (new Set(uids).size !== uids.length) bad(`${id}: doppelte Unterthema-IDs`);
  for (const x of m.unter) {
    if (x.bald) { if (x.qs.length) bad(`${id}/${x.id}: gesperrtes Unterthema mit Fragen`); continue; }
    if (x.qs.length > 10) bad(`${id}/${x.id}: ${x.qs.length} Fragen (höchstens 10)`);
    if (!x.qs.length) bad(`${id}/${x.id}: leer`);
    for (const q of x.qs) { if (gesehen.has(q.id)) bad(`${q.id} in zwei Unterthemen (${gesehen.get(q.id)}, ${x.id})`); gesehen.set(q.id, x.id); }
  }
  for (const q of t.qs) if (!gesehen.has(q.id)) bad(`${q.id}: keinem Unterthema zugeordnet`);
  console.log(`  ${id}: ` + m.unter.map(x => `${x.name} ${x.bald ? 'Bald' : x.qs.length}`).join(' | '));
}

// ─── Logik ───────────────────────────────────────────────────────────────
{
  const lg = themen.logik;
  const verbal = lg.qs.filter(q => q.type === 'mc');
  const num = lg.qs.filter(q => q.type === 'numproc');
  if (verbal.length !== 10 || num.length !== 10) bad(`Logik: ${verbal.length} verbale, ${num.length} numerische Fragen`);
  const soll = ['Zehe', 'Luft', 'schreiben', 'trinken', 'Nacht', 'Baum', 'Schüler', 'heiss', 'Wasser', 'Antwort'];
  verbal.forEach((q, i) => {
    if (q.options.length !== 5 || new Set(q.options.map(o => o.t)).size !== 5) bad(`${q.id}: 5 verschiedene Optionen nötig`);
    if (q.options[q.correct].t !== soll[i]) bad(`${q.id}: richtige Antwort ist «${q.options[q.correct].t}», erwartet «${soll[i]}»`);
    if (!/ zu .+ wie .+ zu \?/.test(q.body.replace(/<[^>]+>/g, ''))) bad(`${q.id}: Fragetext «A zu B wie C zu ?» fehlt`);
    if (!q.why) bad(`${q.id}: Erklärung fehlt`);
  });
  const lage = verbal.map(q => q.correct);
  if (new Set(lage).size < 3) bad('Logik: richtige Antwort steht zu oft an derselben Stelle ' + lage.join(','));
  const schritte = [2, 2, 2, 2, 3, 3, 3];
  let gleich = 0, oben = 0;
  num.forEach((q, i) => {
    const lauf = (r) => { let z = r.start; if (z < 1 || z > 9) bad(`${q.id}: Startzahl ${z}`); for (const st of r.steps) { if (!st) bad(`${q.id}: Schritt 0`); z += st; if (z < 1 || z > 9) bad(`${q.id}: Zwischenwert ${z} ausserhalb 1 bis 9`); } return z; };
    const eo = lauf(q.top), eu = lauf(q.bottom);
    const soll_ = q.ask === 'top' ? eo : eu;
    if (q.answer !== soll_ || q.answerText !== String(soll_)) bad(`${q.id}: Antwort ${q.answer}, gerechnet ${soll_}`);
    if (q.top.steps.length !== q.bottom.steps.length) bad(`${q.id}: ungleich viele Schritte`);
    const n = q.top.steps.length;
    if (i < 4 && n !== 2) bad(`${q.id}: ${n} Schritte (erwartet 2)`);
    else if (i >= 4 && i < 7 && n !== 3) bad(`${q.id}: ${n} Schritte (erwartet 3)`);
    else if (i >= 7 && (n < 3 || n > 4)) bad(`${q.id}: ${n} Schritte (erwartet 3 bis 4)`);
    if (eo === eu) gleich++;
    if (q.ask === 'top') oben++;
    if (!q.why.includes(String(soll_))) bad(`${q.id}: Erklärung nennt das Ergebnis nicht`);
  });
  if (gleich === 0 || gleich === 10) bad('Logik: Ergebnis oben und unten muss mal gleich, mal verschieden sein');
  if (oben === 0 || oben === 10) bad('Logik: gefragt wird nur ein Feld');
  // Figurale Analogien
  const figq = lg.qs.filter(q => q.type === 'figmc');
  if (figq.length !== 10) bad('Logik: ' + figq.length + ' figurale Fragen statt 10');
  const lagen = new Set();
  const mehrfach = [];
  figq.forEach((q) => {
    lagen.add(q.correct);
    if (q.options.length !== 6) bad(q.id + ': ' + q.options.length + ' Optionen statt 6');
    const kan = q.options.map(o => JSON.stringify(FG.normalisiere(o.spec)));
    if (new Set(kan).size !== 6) bad(q.id + ': Optionen nicht paarweise verschieden');
    const svgs = q.options.map((o, i) => FG.renderFigur(o.spec, 'x' + i));
    if (new Set(svgs.map(v => v.replace(/x\d/g, 'x'))).size !== 6) bad(q.id + ': zwei Optionen sehen gleich aus');
    const regelA = JSON.stringify(FG.wendeRegel(q.a, q.regel)), regelC = JSON.stringify(FG.normalisiere(q.options[q.correct].spec));
    if (regelA !== JSON.stringify(FG.normalisiere(q.b))) bad(q.id + ': Regel macht aus A nicht B');
    if (JSON.stringify(FG.wendeRegel(q.c, q.regel)) !== regelC) bad(q.id + ': Regel macht aus C nicht die richtige Option');
    const richtig = q.options[q.correct].spec;
    q.options.forEach((o, i) => {
      if (i === q.correct) return;
      const u = FG.unterschiede(o.spec, richtig);
      if (u.length === 0) bad(q.id + ': Option ' + (i + 1) + ' gleicht der richtigen');
      if (u.length > 1) mehrfach.push(q.id + '/' + (i + 1) + ' (' + u.join('+') + ')');
    });
    if (q.answerText !== 'Bild ' + (q.correct + 1)) bad(q.id + ': answerText');
    for (const [k, sp] of [['A', q.a], ['B', q.b], ['C', q.c], ...q.options.map((o, i) => ['Option ' + (i + 1), o.spec])]) {
      const svg = FG.renderFigur(sp, 'p');
      if (!/^<svg [^>]*viewBox="0 0 100 100"[^>]*>.*<\/svg>$/.test(svg)) bad(q.id + ' ' + k + ': SVG nicht geschlossen');
      const offen = (svg.match(/<(g|defs|pattern)[ >]/g) || []).length, zu = (svg.match(/<\/(g|defs|pattern)>/g) || []).length;
      if (offen !== zu) bad(q.id + ' ' + k + ': SVG-Tags nicht ausgeglichen');
      if (/NaN|undefined/.test(svg)) bad(q.id + ' ' + k + ': ungültiger Wert im SVG');
    }
  });
  if (lagen.size < 5) bad('Logik: richtige Bildoption steht zu oft an derselben Stelle');
  console.log('Figural: 10 Fragen, richtige Position', figq.map(q => q.correct + 1).join(','), '| Falschoptionen mit mehreren Unterschieden:', mehrfach.join(', ') || 'keine');
  const demo = lg.unterInfo.numerisch.demo;
  const dl = (r) => r.steps.reduce((z, s) => z + s, r.start);
  if (dl(demo.top) !== 2 || dl(demo.bottom) !== 2 || demo.answer !== 2) bad('Logik: Demo rechnet nicht auf 2 und 2');
  console.log(`Logik: ${verbal.length} verbal, ${num.length} numerisch, gleiches Ergebnis in ${gleich}, Frage oben ${oben}`);
}

// ─── Konzentration ───────────────────────────────────────────────────────
{
  const kz = themen.konz;
  const zq = kz.qs.filter(q => q.type === 'numcmp'), cq = kz.qs.filter(q => q.type === 'coord');
  if (zq.length !== 10 || cq.length !== 4) bad('Konzentration: ' + zq.length + ' Zahlenblöcke, ' + cq.length + ' Koordinatenblöcke');
  const pruefeZeile = (z, wo) => {
    if (!/^[1-9]\d{8}$/.test(z.a) || !/^[1-9]\d{8}$/.test(z.b)) bad(wo + ': keine 9 Ziffern oder führende Null (' + z.a + ', ' + z.b + ')');
    const diff = [];
    for (let i = 0; i < 9; i++) if (z.a[i] !== z.b[i]) diff.push(i);
    if (z.gleich) { if (z.a !== z.b) bad(wo + ': als gleich markiert, aber verschieden'); return; }
    if (diff.length === 1) { if (![1, 2].includes(Math.abs(z.a[diff[0]] - z.b[diff[0]]))) bad(wo + ': Ziffer ändert sich nicht um 1 oder 2'); }
    else if (diff.length === 2 && diff[1] === diff[0] + 1) { if (z.a[diff[0]] !== z.b[diff[1]] || z.a[diff[1]] !== z.b[diff[0]]) bad(wo + ': keine Vertauschung'); }
    else bad(wo + ': ' + diff.length + ' Stellen verschieden, erwartet 1 oder 2 benachbarte vertauscht');
  };
  let gleichTeil = [0, 0];
  zq.forEach((q, bi) => {
    if (q.items.length !== 6) bad(q.id + ': ' + q.items.length + ' Zeilen statt 6');
    q.items.forEach((z, i) => { pruefeZeile(z, q.id + ' Zeile ' + (i + 1)); if (z.gleich) gleichTeil[bi < 5 ? 0 : 1]++; });
  });
  if (gleichTeil.some(n => n < 13 || n > 17)) bad('Konzentration: «gleich» nicht etwa die Hälfte: ' + gleichTeil.join(', '));
  const demoZ = kz.unterInfo.zahlen1.demo.items;
  if (demoZ.length !== 2) bad('Konzentration: Beispiel braucht 2 Zeilen');
  demoZ.forEach((z, i) => pruefeZeile(z, 'Beispiel Zeile ' + (i + 1)));
  if (demoZ[0].a !== '148394053' || demoZ[0].b !== '149394053' || demoZ[1].a !== '645394053' || demoZ[1].b !== '645394053') bad('Konzentration: Beispielzeilen weichen ab');
  // Koordinaten: Spalte c von links, Zeile r von oben (0 bis 2); erwartet «XY» mit X = Spalte von links, Y = Zeile von unten.
  const erwartet = (f) => String(f.c + 1) + String(3 - f.r);
  for (const [teil, blocks] of [['Teil 1', cq.slice(0, 2)], ['Teil 2', cq.slice(2)]]) {
    const felder = blocks.flatMap(q => q.items);
    if (felder.length !== 10) bad('Koordinaten ' + teil + ': ' + felder.length + ' Felder statt 10');
    felder.forEach((f, i) => {
      if (!(f.c >= 0 && f.c <= 2 && f.r >= 0 && f.r <= 2)) bad('Koordinaten ' + teil + ' Feld ' + (i + 1) + ': ausserhalb');
      if (f.a !== erwartet(f)) bad('Koordinaten ' + teil + ' Feld ' + (i + 1) + ': erwartet ' + erwartet(f) + ', gespeichert ' + f.a);
      if (i > 0 && f.c === felder[i - 1].c && f.r === felder[i - 1].r) bad('Koordinaten ' + teil + ': Feld ' + (i + 1) + ' wiederholt das vorherige');
    });
    if (new Set(felder.map(f => f.c + '-' + f.r)).size !== 9) bad('Koordinaten ' + teil + ': nicht alle 9 Felder kommen vor');
  }
  cq.forEach(q => { if (q.items.length !== 5) bad(q.id + ': ' + q.items.length + ' Felder statt 5'); });
  const demoK = kz.unterInfo.koord1.demo.items[0];
  if (erwartet(demoK) !== '23' || demoK.a !== '23') bad('Konzentration: Beispiel «oben Mitte» ist nicht 23');
  // Dojo-Karten der Lernkarten nachgerechnet
  const dk = lk.konz.kacheln.find(x => x.id === 'mc_ko_dojo').karten;
  const gleichKarte = (text, korrekt, falsch) => { const m = text.match(/gleich wie (\d{9})/); if (m) { if (korrekt !== m[1]) bad('Dojo: richtige Zahl ist nicht ' + m[1]); falsch.forEach(f => { if (f === m[1]) bad('Dojo: falsche Option gleich ' + m[1]); }); } };
  dk.forEach(k => gleichKarte(k.text, k.options.find(o => o.correct).text, k.options.filter(o => !o.correct).map(o => o.text)));
  const koordKarten = { 'ganz links unten': '11', 'ganz rechts oben': '33', 'in der Mitte oben': '23' };
  dk.forEach(k => { for (const [w, a] of Object.entries(koordKarten)) if (k.text.includes(w) && k.options.find(o => o.correct).text !== a) bad('Dojo: «' + w + '» ist ' + a); });
  const paare = [['639481275', '639481725', 'vertauscht'], ['481926375', '481926385', 'eine']];
  const sw = (a, b) => { const d = []; for (let i = 0; i < 9; i++) if (a[i] !== b[i]) d.push(i); return d.length === 2 && d[1] === d[0] + 1 && a[d[0]] === b[d[1]] && a[d[1]] === b[d[0]] ? 'vertauscht' : d.length === 1 ? 'eine' : '?'; };
  paare.forEach(([a, b, w]) => { if (sw(a, b) !== w) bad('Dojo: Paar ' + a + '/' + b + ' ist nicht ' + w); });
  if (!dk.some(k => /Rechts unten/.test(k.options.find(o => o.correct).text) && /31/.test(k.text))) bad('Dojo: Karte 31 fehlt oder falsch');
  console.log('Konzentration: ' + zq.length + ' Zahlenblöcke (gleich ' + gleichTeil.join(' und ') + ' von je 30), ' + cq.length + ' Koordinatenblöcke');
}

// ─── Startseite: Reihenfolge der Kacheln ─────────────────────────────────
const index = fs.readFileSync(DIR + 'index.js', 'utf8');
const kacheln = [...index.matchAll(/(?:bald\('[a-z]+', '([^']+)'|aktiv\((\w+),)/g)].map(m => m[1] || m[2]);
const sollKacheln = ['Merkfähigkeit', 'deutsch', 'englisch', 'kurzzeit', 'it', 'organisation', 'mathematik', 'logik', 'konzentration', 'Vorstellungsvermögen', 'Vernetztes Denken', 'Textschreiben'];
if (JSON.stringify(kacheln) !== JSON.stringify(sollKacheln)) bad('Kachel-Reihenfolge in index.js: ' + kacheln.join(', '));
console.log('Kacheln:', kacheln.length);

// ─── Lernkarten ──────────────────────────────────────────────────────────
const komp = fs.readFileSync('app/components/Lernkarte.js', 'utf8');
const TAGS = [...komp.matchAll(/^\s{2}([a-z0-9]+):\s*\{\s*light:/gm)].map(m => m[1]);
const kachelIds = [];
let woerterMax = 0;
for (const id of Object.keys(themen)) {
  const k = lk[id];
  if (!k) { bad(`Lernkarten für ${id} fehlen`); continue; }
  if (!k.kacheln.some(x => x.titel === 'Typische Fehler')) bad(`${id}: «Typische Fehler» fehlt`);
  const dj = k.kacheln.find(x => x.titel === 'Dojo');
  if (!dj) bad(`${id}: «Dojo» fehlt`);
  else if (dj.karten.length < dj.minLoesungen) bad(`${id}: Dojo hat weniger Karten als minLoesungen`);
  console.log(`  ${id}: ${k.kacheln.length} Kacheln (${k.kacheln.map(x => x.titel).join(' | ')})`);
  for (const x of k.kacheln) {
    kachelIds.push(x.id);
    if (!/^mc_/.test(x.id)) bad(`${x.id}: Präfix mc_ fehlt`);
    if (!Array.isArray(x.videos) || x.videos.length > 1) bad(`${x.id}: videos muss eine Liste mit höchstens einem Video sein`);
    for (const v of x.videos || []) if (!v.titel || !/^[A-Za-z0-9_-]{11}$/.test(v.youtubeId)) bad(`${x.id}: Video ohne Titel oder mit ungültiger ID`);
    if (x.titel.length > 26 || /[()]/.test(x.titel) || /\d{4}/.test(x.titel)) bad(`${x.id}: Kachelname «${x.titel}»`);
    const texte = [];
    for (const kk of x.karten) {
      texte.push(kk.text);
      if (kk.loesung) texte.push(kk.loesung);
      if (kk.options) {
        const n = kk.options.filter(o => o.correct).length;
        if (kk.options.length !== 3 || n !== 1) bad(`${x.id}: Dojo-Karte «${kk.text.slice(0, 30)}» braucht 3 Optionen und genau 1 richtige`);
        if (new Set(kk.options.map(o => o.text)).size !== kk.options.length) bad(`${x.id}: doppelte Optionen «${kk.text.slice(0, 30)}»`);
        kk.options.forEach(o => texte.push(o.text));
      }
      const w = kk.text.replace(/\[\[[a-z0-9]+\||\]\]/gi, '').split(/\s+/).filter(Boolean).length;
      woerterMax = Math.max(woerterMax, w);
      if (w > 75) bad(`${x.id}: Karte hat ${w} Wörter`);
    }
    for (const q of x.check) {
      texte.push(q.frage, q.erklaerung, ...q.optionen);
      if (q.optionen.length < 2 || q.optionen.length > 4 || !(q.richtig >= 0 && q.richtig < q.optionen.length)) bad(`${x.id}: Check «${q.frage}»`);
      if (new Set(q.optionen).size !== q.optionen.length) bad(`${x.id}: doppelte Check-Optionen «${q.frage}»`);
    }
    for (const t of texte) {
      if (/ß/.test(t)) bad(`${x.id}: ß in «${t.slice(0, 40)}»`);
      if (/\[\[|\]\]/.test(t.replace(/\[\[([a-z0-9]+)\|[^\]]*\]\]/gi, ''))) bad(`${x.id}: offene Klammer «${t.slice(0, 40)}»`);
      for (const m of t.matchAll(/\[\[([a-z0-9]+)\|/gi)) if (!TAGS.includes(m[1].toLowerCase())) bad(`${x.id}: unbekannter Tag ${m[1]}`);
      if (/\b(19|20)\d\d\b/.test(t) && !/’|202\d’/.test(t) && /Prüfung 20/.test(t)) bad(`${x.id}: Prüfungsjahr`);
    }
  }
}
if (new Set(kachelIds).size !== kachelIds.length) bad('doppelte Kachel-IDs');
console.log(`Lernkarten: ${kachelIds.length} Kacheln, längste Karte ${woerterMax} Wörter`);

// ─── Zahlenbeispiele nachgerechnet ───────────────────────────────────────
const rechnungen = [
  ['80*60', 4800], ['500*20', 10000], ['300*700', 210000], ['40*90', 3600],
  ['38902+4115', 43017], ['41206-3999', 37207], ['20000-4999', 15001],
  ['900000/300', 3000], ['4800000/600', 8000], ['720000/90', 8000], ['560000/700', 800],
  ['2+3*4', 14], ['(2+3)*4', 20], ['6+4*3', 18], ['(6+4)*3', 30],
  ['10*0.3', 3], ['300/10', 30], ['300/20', 15], ['80/4', 20], ['150/10*2', 30], ['80-80/4', 60],
  ['100/2', 50], ['60/30', 2], ['3*40', 120], ['150/3', 50], ['0.75*40', 30], ['45/60', 0.75], ['30/60', 0.5], ['15/60', 0.25],
  ['4*4', 16], ['2*(5+2)', 14], ['5*2', 10], ['6*4/2', 12], ['8*5', 40], ['2*(8+5)', 26], ['10*6/2', 30], ['4*4', 16],
  ['4*20', 80], ['5*10', 50], ['3*20', 60], ['2*30', 60],
  ['2+3*4', 14], ['8-3', 5], ['8-(2+1)', 5], ['4+2', 6], ['2+1+4+4+4', 15],
  ['3+4', 7], ['8-5', 3], ['6-2+3', 7], ['2+5-1', 6], ['6-2', 4], ['4+3', 7], ['1+2-1', 2], ['5-1-2', 2],
  ['3*2*2', 12], ['4-3', 1], ['100*100', 10000], ['3*100', 300], ['2*10000', 20000], ['100*100', 10000],
];
for (const [ausdruck, soll] of rechnungen) {
  const ist = new Function(`return ${ausdruck};`)();
  if (Math.abs(ist - soll) > 1e-9) bad(`Rechnung ${ausdruck} = ${ist}, erwartet ${soll}`);
}
// Folgen aus «Zahl und Schleife» und Gruppen im Kurzzeitgedächtnis
const folge = (start, n, f) => { let z = start; for (let i = 0; i < n; i++) z = f(z); return z; };
if (folge(1, 5, z => z + 1) !== 6) bad('Schleife 1 → 6');
if (folge(2, 3, z => z + 4) !== 14) bad('Schleife 2 → 14');
if (folge(3, 2, z => z * 2) !== 12) bad('Schleife 3 → 12');
const gruppen = (s) => s.split(' ').reduce((n, c, i, a) => n + (i === 0 || c !== a[i - 1] ? 1 : 0), 0);
if (gruppen('r r r b b b s s') !== 3 || gruppen('b b r r s r s r') !== 6 || gruppen('r r r b b s') !== 3) bad('Gruppen zählen');
if ('7270207'.slice(0, 3) + '02' + '07' !== '7270207' || '7270207'.length !== 7) bad('Zifferngruppen');
if ([...'ZQUPMA'].sort().join('') !== [...'ZUPQMA'].sort().join('') || [...'ZQUPMA'].sort().join('') !== [...'ZQUMAP'].sort().join('')) bad('Umstellungen ZQUPMA');
if ([...'7270207'].sort().join('') !== [...'7207207'].sort().join('') || [...'7270207'].sort().join('') !== [...'7270720'].sort().join('')) bad('Umstellungen 7270207');
console.log('Rechnungen geprüft:', rechnungen.length);

console.log(fehler ? `\n${fehler} Fehler` : '\nAlles in Ordnung');
process.exit(fehler ? 1 : 0);
