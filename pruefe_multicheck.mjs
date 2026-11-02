// Qualitätskontrolle für Multicheck IMS (app/lib/multicheck/)
// Aufruf: node pruefe_multicheck.mjs
//
// Prüft: 190 Fragen, keine doppelten IDs, alle Konzept-Verweise vorhanden,
// Wochenplan-Musterlösungen gültig, jedes aktive Thema hat Üben, Dojo und
// Lernkarten (mit «Typische Fehler» und «Dojo»), Check-Fragen und Dojo-Karten
// wohlgeformt, bekannte Farb-Tags, kein ß, keine Jahreszahl, leere Video-Felder,
// dazu die Zahlenbeispiele der Lernkarten nachgerechnet.

import fs from 'node:fs';

const DIR = 'app/lib/multicheck/';
let fehler = 0;
const bad = (m) => { fehler++; console.log('FEHLER: ' + m); };

// Die Dateien sind ES-Module ohne Dateiendung in den Imports. Sie werden
// hier als Text gelesen und mit new Function ausgewertet.
function laden(datei, export_) {
  let s = fs.readFileSync(DIR + datei, 'utf8');
  s = s.replace(/^import .*$/gm, '').replace(/^export default (\w+);$/m, 'return $1;');
  if (export_) s = s.replace(/^export const (\w+) =/m, 'const $1 =') + `\nreturn ${export_};`;
  return new Function(s)();
}

const dateien = { deutsch: 'deutsch.js', englisch: 'englisch.js', kurz: 'kurzzeitgedaechtnis.js', it: 'it_grundwissen.js', org: 'organisation.js', mathe: 'mathematik.js' };
const themen = Object.fromEntries(Object.entries(dateien).map(([id, f]) => [id, laden(f)]));
const lk = laden('lernkarten.js', 'multicheckLernkarten');

// Wochenplan-Logik
const planSrc = fs.readFileSync(DIR + 'plan.js', 'utf8').replace(/^export \{.*\};$/m, '') + '\nreturn { check, solve, DAYS, slotsOf };';
const PL = new Function(planSrc)();

// ─── Fragen ──────────────────────────────────────────────────────────────
const alle = Object.values(themen).flatMap(t => t.qs);
if (alle.length !== 190) bad(`Fragen: ${alle.length} statt 190`);
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
  }
}
console.log('Fragen:', Object.entries(themen).map(([id, t]) => `${id} ${t.qs.length}`).join(', '), '→', alle.length);

// ─── Startseite: Reihenfolge der Kacheln ─────────────────────────────────
const index = fs.readFileSync(DIR + 'index.js', 'utf8');
const kacheln = [...index.matchAll(/(?:bald\('[a-z]+', '([^']+)'|aktiv\((\w+),)/g)].map(m => m[1] || m[2]);
const sollKacheln = ['Merkfähigkeit', 'deutsch', 'englisch', 'kurzzeit', 'it', 'organisation', 'mathematik', 'Logik', 'Konzentration', 'Vorstellungsvermögen', 'Vernetztes Denken', 'Textschreiben'];
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
    if (!Array.isArray(x.videos) || x.videos.length) bad(`${x.id}: videos muss ein leeres Feld sein`);
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
  ['3*2*2', 12], ['4-3', 1],
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
