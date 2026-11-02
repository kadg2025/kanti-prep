// Qualitätskontrolle für Multicheck IMS (app/lib/multicheck/)
// Aufruf: node pruefe_multicheck.mjs
//
// Prüft: 271 Fragen, keine doppelten IDs, alle Konzept-Verweise vorhanden,
// Wochenplan-Musterlösungen gültig, jedes aktive Thema hat Üben, Dojo und
// Lernkarten (mit «Typische Fehler» und «Dojo»), Check-Fragen und Dojo-Karten
// wohlgeformt, bekannte Farb-Tags, kein ß, keine Jahreszahl, Videos (höchstens eines pro Kachel, gültige ID),
// dazu die Zahlenbeispiele der Lernkarten nachgerechnet.

import fs from 'node:fs';
import * as R from './app/lib/multicheck/raeumlich.mjs';
import * as N from './app/lib/multicheck/netz.mjs';
import { renderBild } from './app/lib/multicheck/vorstellung_bilder.mjs';
import * as VF from './app/lib/multicheck/vernetzt_fragen.mjs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SYMBOLE as MS } from './app/lib/multicheck/merk_symbole.mjs';
import * as MT from './app/lib/multicheck/merk_texte.mjs';
import { LERNZEIT } from './app/lib/multicheck/merk_konfig.mjs';
import MF from './app/lib/multicheck/merk_fragen.mjs';
import MD from './app/lib/multicheck/merk_daten.mjs';
import * as SD from './app/lib/multicheck/schreib_daten.mjs';
import * as SL from './app/lib/multicheck/schreib_logik.mjs';
import { SYMBOLE } from './app/lib/multicheck/vernetzt_symbole.mjs';

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

const dateien = { deutsch: 'deutsch.js', englisch: 'englisch.js', kurz: 'kurzzeitgedaechtnis.js', it: 'it_grundwissen.js', org: 'organisation.js', mathe: 'mathematik.js', logik: 'logik.js', konz: 'konzentration.js', vorst: 'vorstellung.js', vernetzt: 'vernetzt.js', merk: 'merkfaehigkeit.js', schreiben: 'schreiben.js' };
const numerisch = laden('logik_numerisch.js');
const FG = new Function(fs.readFileSync(DIR + 'figur.js', 'utf8').replace(/^export /gm, '') + '\nreturn { fig, normalisiere, unterschiede, wendeRegel, renderFigur };')();
const daten = laden('konzentration_daten.js');
const vdaten = laden('vorstellung_daten.js');
const figural = laden('logik_figural.js', null, { fig: FG.fig });
const themen = Object.fromEntries(Object.entries(dateien).map(([id, f]) => [id, laden(f, null, { numerisch, figural, daten, vdaten, vn: VF.default, mf: MF, ...(f === 'schreiben.js' ? SD : {}) })]));
const UT = new Function(fs.readFileSync(DIR + 'unterthemen.js', 'utf8').replace(/^export /gm, '') + '\nreturn { UNTERTHEMEN, mitUnterthemen };')();
const lk = laden('lernkarten.js', 'multicheckLernkarten', { fig: FG.fig });

// Wochenplan-Logik
const planSrc = fs.readFileSync(DIR + 'plan.js', 'utf8').replace(/^export \{.*\};$/m, '') + '\nreturn { check, solve, DAYS, slotsOf };';
const PL = new Function(planSrc)();

// ─── Fragen ──────────────────────────────────────────────────────────────
const alle = Object.values(themen).flatMap(t => t.qs);
if (alle.length !== 271) bad(`Fragen: ${alle.length} statt 271`);
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

// ─── Vorstellungsvermögen ────────────────────────────────────────────────
{
  const vq = themen.vorst;
  const rq = vq.qs.filter(q => q.type === 'spatial'), nq = vq.qs.filter(q => q.type === 'net');
  if (rq.length !== 10 || nq.length !== 10) bad('Vorstellung: ' + rq.length + ' räumliche, ' + nq.length + ' Abwicklungen');
  // SVG wohlgeformt: Anfang und Ende, Tags ausgeglichen, keine ungültigen Zahlen
  const wohlgeformt = (svg, wo) => {
    if (!svg.startsWith('<svg ') || !svg.endsWith('</svg>')) bad(wo + ': SVG beginnt oder endet falsch');
    if (/NaN|undefined|Infinity/.test(svg)) bad(wo + ': ungültiger Wert im SVG');
    const stack = [];
    for (const m of svg.matchAll(/<([/]?)([a-z]+)([^>]*?)([/]?)>/g)) {
      if (m[4]) continue;
      if (m[1]) { if (stack.pop() !== m[2]) { bad(wo + ': Tags nicht ausgeglichen bei ' + m[2]); return; } } else stack.push(m[2]);
    }
    if (stack.length) bad(wo + ': offene Tags ' + stack.join(','));
  };
  // Räumliches Sehen
  const rb = (g) => (g.art === 'zylinder' ? g.w / 2 : Math.hypot(g.w, g.d) / 2);
  const szenen = [...rq.map((q, i) => [q, q.id, i]), [vq.unterInfo.raum.demo, 'Beispiel', -1]];
  for (const [q, wo, i] of szenen) {
    const sz = q.szene;
    const soll = i < 0 ? [3, 6] : i < 3 ? [4, 4] : i < 7 ? [5, 5] : [6, 6];
    if (sz.length < soll[0] || sz.length > soll[1]) bad(wo + ': ' + sz.length + ' Formen');
    const farben = new Set(sz.map(f => f.farbe));
    if (farben.size < 2 || farben.size > 3) bad(wo + ': ' + farben.size + ' Farben');
    sz.forEach((f, a) => {
      if (!R.FARBEN[f.farbe] || !['quader', 'zylinder'].includes(f.art)) bad(wo + ': unbekannte Form oder Farbe');
      if (Math.hypot(f.x, f.y) + rb(f) > 4.6) bad(wo + ': Form liegt nicht auf dem Brett');
      sz.slice(a + 1).forEach(g => { if (Math.hypot(f.x - g.x, f.y - g.y) < rb(f) + rb(g) + 0.25) bad(wo + ': Formen überlappen'); });
    });
    const sigs = R.RICHTUNGEN.map(d => R.signatur(sz, d));
    if (new Set(sigs).size !== 8) bad(wo + ': nicht alle 8 Ansichten verschieden');
    for (let a = 0; a < 8; a++) for (let b = a + 1; b < 8; b++) if (R.abstand(sz, R.RICHTUNGEN[a], R.RICHTUNGEN[b]) < 0.6) bad(wo + ': Ansichten ' + R.RICHTUNGEN[a] + ' und ' + R.RICHTUNGEN[b] + ' zu ähnlich');
    if (!R.RICHTUNGEN.includes(q.correct)) bad(wo + ': unbekannte Richtung');
    if (!/von links nach rechts/.test(q.why) || !/Auffällig/.test(q.why)) bad(wo + ': Erklärung unvollständig');
    R.RICHTUNGEN.forEach(d => wohlgeformt(R.renderSeite(sz, d), wo + ' Seite ' + d));
    const oben = R.renderOben(sz, 'N', q.correct);
    wohlgeformt(oben, wo + ' oben');
    if ((oben.match(/data-dir=/g) || []).length !== 8) bad(wo + ': keine 8 Pfeile');
  }
  const verteilung = new Set(rq.map(q => q.correct));
  if (verteilung.size !== 8) bad('Vorstellung: nicht jede der 8 Richtungen kommt vor (' + [...verteilung].join(',') + ')');
  // Probe der Rechnung: Körper rechts (x = 3) erscheint von Süden rechts, von Norden links; 45 Grad gedreht ist ein Würfel breiter; Zylinder immer gleich breit
  const probe = { art: 'quader', x: 3, y: 0, w: 1, d: 1, rot: 0, h: 2, farbe: 'rot' };
  if (R.ansicht([probe], 'S')[0].mitte !== 3 || R.ansicht([probe], 'N')[0].mitte !== -3) bad('Vorstellung: Probe links/rechts');
  if (Math.abs(R.ansicht([{ ...probe, rot: 45 }], 'S')[0].breite - Math.SQRT2) > 1e-9 || Math.abs(R.ansicht([probe], 'S')[0].breite - 1) > 1e-9) bad('Vorstellung: Probe Breite');
  if (Math.abs(R.ansicht([{ art: 'zylinder', x: 1, y: 2, w: 1.5, d: 1.5, rot: 20, h: 2, farbe: 'rot' }], 'NO')[0].breite - 1.5) > 1e-9) bad('Vorstellung: Probe Zylinder');
  const ost = { art: 'quader', x: 0, y: 3, w: 1, d: 1, rot: 0, h: 2, farbe: 'rot' };   // Körper im Norden
  const tn = R.ansicht([ost, { ...probe, x: 0, y: -3, farbe: 'blau' }], 'S');          // von Süden: Nord-Körper hinten
  if (tn[0].farbe !== 'rot' || tn[1].farbe !== 'blau') bad('Vorstellung: Probe vorne/hinten');

  // Abwicklungen
  const netze = N.wuerfelnetze();
  if (N.sechserPolyominos().length !== 35) bad('Netze: nicht 35 Sechser-Polyominos');
  if (netze.length !== 11) bad('Netze: ' + netze.length + ' gültige Würfelnetze statt 11');
  const nk = (zellen) => zellen.map(z => z.c + ',' + z.z).sort().join(';');
  const erlaubt = new Set(netze.flatMap(n => [0, 1, 2, 3, 4, 5, 6, 7].map(k => nk(N.symmetrie(n, k)))));
  const KANTE = { '1,0': [[[1, -1], [1, 1]], [[-1, -1], [-1, 1]]], '-1,0': [[[-1, -1], [-1, 1]], [[1, -1], [1, 1]]], '0,1': [[[-1, 1], [1, 1]], [[-1, -1], [1, -1]]], '0,-1': [[[-1, -1], [1, -1]], [[-1, 1], [1, 1]]] };
  const punkt3 = (f, [px, py]) => [0, 1, 2].map(k => f.n[k] + px * f.ex[k] + py * f.ey[k]);
  const aufgaben = [...nq.map((q, i) => [q, q.id, i]), [vq.unterInfo.netz.demo, 'Beispiel', -1]];
  for (const [q, wo, i] of aufgaben) {
    const z = q.zellen;
    if (z.length !== 6 || !erlaubt.has(nk(N.symmetrie(z, 0)))) bad(wo + ': kein gültiges Würfelnetz');
    const wahr = N.falten(z);
    if (!wahr) { bad(wo + ': Netz lässt sich nicht falten'); continue; }
    z.forEach((a, ia) => z.forEach((b, ib) => {
      const k = (b.c - a.c) + ',' + (b.z - a.z);
      if (!KANTE[k]) return;
      const [pa, pb] = KANTE[k];
      for (let m = 0; m < 2; m++) { const u = punkt3(wahr[ia], pa[m]), v = punkt3(wahr[ib], pb[m]); if (u.some((x, t) => Math.abs(x - v[t]) > 1e-9)) bad(wo + ': Kanten beim Falten passen nicht'); }
    }));
    const muster = new Set(z.map(c => c.p));
    const kSoll = i < 0 ? 3 : i < 3 ? 3 : i < 7 ? 4 : 5;
    if (muster.size !== kSoll) bad(wo + ': ' + muster.size + ' Muster statt ' + kSoll);
    if (i >= 7 && [...muster].filter(m => N.RICHTUNGSABHAENGIG.includes(m)).length < 4) bad(wo + ': zu wenige richtungsabhängige Muster');
    if (q.options.length !== 5) bad(wo + ': ' + q.options.length + ' Optionen statt 5');
    const treffer = q.options.map(o => {
      if (o.flaechen.length !== 3 || !N.ECKEN.some(e => e.join() === o.ecke.join()) || N.sichtbar(o.flaechen, o.ecke).length !== 3) bad(wo + ': Figur ist keine Ansicht aus einer Ecke');
      return N.passt(wahr, o.flaechen, o.ecke);
    });
    if (treffer.filter(Boolean).length !== 1 || !treffer[q.correct]) bad(wo + ': nicht genau eine passende Figur (' + treffer.join(',') + ', richtig ' + q.correct + ')');
    const sichtbar = q.options.map(o => N.ansichtSchluessel(o.flaechen, o.ecke));
    if (new Set(sichtbar).size !== 5) bad(wo + ': zwei Figuren sehen gleich aus');
    const arten = q.options.filter((o, k) => k !== q.correct).map(o => (o.why.match(/gedreht|vertauscht|ersetzt|Spiegelbild/) || ['?'])[0]);
    if (new Set(arten).size !== 4) bad(wo + ': Falschfiguren nicht alle verschieden (' + arten.join(',') + ')');
    if (!q.why || !/Fläche/.test(q.why)) bad(wo + ': Erklärung fehlt');
    wohlgeformt(N.renderNetz(z), wo + ' Netz');
    q.options.forEach((o, k) => wohlgeformt(N.renderWuerfel(o.flaechen, o.ecke), wo + ' Figur ' + 'ABCDE'[k]));
  }
  if (new Set(nq.map(q => q.correct)).size !== 5) bad('Vorstellung: richtige Figur steht nicht an allen fünf Positionen');
  // Bilder der Lernkarten
  let bilder = 0;
  for (const k of lk.vorst.kacheln) for (const kk of k.karten) for (const b of kk.svgs || []) { bilder++; wohlgeformt(renderBild(b), k.id + ' Bild ' + b.typ); }
  console.log('Vorstellung: ' + rq.length + ' räumliche Szenen (Richtungen ' + rq.map(q => q.correct).join(' ') + '), ' + nq.length + ' Abwicklungen (Position ' + nq.map(q => 'ABCDE'[q.correct]).join('') + '), 11 Würfelnetze, ' + bilder + ' Lernkarten-Bilder');
}

// ─── Vernetztes Denken ───────────────────────────────────────────────────
{
  const vt = themen.vernetzt;
  const SZ = VF.SZENARIEN;
  if (vt.qs.length !== 10) bad('Vernetzt: ' + vt.qs.length + ' Fragen statt 10');
  let rechenangabe = false;
  for (const sz of Object.values(SZ)) {
    const nrs = sz.teile.map(t => t.nr), namen = sz.teile.map(t => t.name);
    if (new Set(nrs).size !== nrs.length || new Set(namen).size !== namen.length) bad(sz.id + ': doppelte Nummern oder Namen');
    if (sz.teile.length < 9 || sz.teile.length > 10) bad(sz.id + ': ' + sz.teile.length + ' Teile');
    if (sz.schritte.length !== 4) bad(sz.id + ': ' + sz.schritte.length + ' Schritte statt 4');
    for (const t of sz.teile) {
      if (!SYMBOLE[t.symbol]) bad(sz.id + ' ' + t.nr + ': Symbol fehlt');
      const summe = sz.schritte.reduce((n, st) => n + st.teile.filter(([x]) => x === t.nr).reduce((m, [, k]) => m + k, 0), 0);
      const vorkommen = sz.schritte.filter(st => st.teile.some(([x]) => x === t.nr)).length;
      if (!vorkommen) bad(sz.id + ' ' + t.nr + ': kommt in keinem Schritt vor');
      if (t.werkzeug) { if (t.gesamt !== 1) bad(sz.id + ' ' + t.nr + ': Werkzeug braucht Gesamtmenge 1'); }
      else if (summe !== t.gesamt) bad(sz.id + ' ' + t.nr + ' ' + t.name + ': Teileliste ' + t.gesamt + ', Summe der Schritte ' + summe);
      if (t.verwendung && !/^(zur|zum|für) /.test(t.verwendung)) bad(sz.id + ' ' + t.nr + ': Verwendung beginnt nicht mit zur/zum/für');
    }
    sz.schritte.forEach((st, i) => {
      for (const [nr, m] of st.teile) if (!nrs.includes(nr) || !(m >= 1)) bad(sz.id + ' Schritt ' + (i + 1) + ': Nummer ' + nr + ' oder Menge ungültig');
      for (const t of sz.teile) if (st.satz.includes(t.name) || st.satz.includes(t.plural) || st.satz.toLowerCase().includes(t.name.split(' ')[0].toLowerCase())) bad(sz.id + ' Schritt ' + (i + 1) + ': Satz nennt den Namen «' + t.name + '»');
      for (const m of st.satz.matchAll(/Teil (\d\d)/g)) if (!st.teile.some(([n]) => n === m[1])) bad(sz.id + ' Schritt ' + (i + 1) + ': Satz nennt Teil ' + m[1] + ', der nicht im Schritt steht');
    });
    if (/ß/.test(JSON.stringify(sz))) bad(sz.id + ': ß im Szenario');
  }
  // Unabhängige Wahrheitsprüfung einer Aussage (ohne die Hilfsfunktion aus dem Fragenmodul)
  const wahr = (sz, st) => {
    const t = sz.teile.find(x => x.nr === st.nr);
    if (st.typ === 'schritt') return sz.schritte[st.wert - 1].teile.some(([n]) => n === st.nr);
    if (st.typ === 'menge') return (t.werkzeug ? 1 : sz.schritte.flatMap(x => x.teile).filter(([n]) => n === st.nr).reduce((m, [, k]) => m + k, 0)) === st.wert;
    if (st.typ === 'mass') return t.masse[st.key] === st.wert;
    if (st.typ === 'verwendung') return st.wert === st.nr;
    if (st.typ === 'inhalt') return sz.schritte.flatMap(x => x.teile).filter(([n]) => n === st.nr).reduce((m, [, k]) => m + k, 0) * t.inhalt.wert === st.wert;
    return null;
  };
  const alleFragen = [...vt.qs, vt.unterInfo.a.demo];
  const gesehen = new Set();
  for (const q of alleFragen) {
    const sz = SZ[q.szenario], pr = q.pruef;
    const texte = q.options.map(o => o.t);
    if (texte.length !== 4 || new Set(texte).size !== 4) bad(q.id + ': keine 4 verschiedenen Antworten');
    if (!(q.correct >= 0 && q.correct < 4) || q.answerText !== texte[q.correct]) bad(q.id + ': richtige Antwort ungültig');
    const schluessel = q.frage + '|' + texte.join('|');
    if (gesehen.has(schluessel)) bad(q.id + ': doppelte Frage'); gesehen.add(schluessel);
    if (pr.art === 'schritt') {
      const t = sz.teile.find(x => x.nr === pr.nr);
      const wo = sz.schritte.map((st, i) => (st.teile.some(([n]) => n === pr.nr) ? i + 1 : 0)).filter(Boolean);
      if (wo.length !== 1) bad(q.id + ': ' + t.name + ' kommt in ' + wo.length + ' Schritten vor');
      if (texte.some((x, k) => x !== 'Montageschritt ' + (k + 1)) || q.correct !== wo[0] - 1) bad(q.id + ': Schritt-Antworten falsch');
      if (!q.frage.includes(t.name)) bad(q.id + ': Frage nennt den Namen nicht');
    } else if (pr.art === 'menge') {
      const t = sz.teile.find(x => x.nr === pr.nr);
      const summe = sz.schritte.flatMap(x => x.teile).filter(([n]) => n === pr.nr).reduce((m, [, k]) => m + k, 0);
      if (summe !== t.gesamt) bad(q.id + ': Summe der Schritte ' + summe + ' ≠ Teileliste ' + t.gesamt);
      texte.forEach((x, k) => { if ((Number(x) === summe) !== (k === q.correct)) bad(q.id + ': Antwort ' + x + ' falsch eingeordnet'); });
    } else if (pr.art === 'rechnen') {
      const wert = (a) => a.reduce((m, x) => m + sz.teile.find(t => t.nr === x.nr).masse[x.key] * x.mal, 0);
      if (pr.ausdruck.some(a => a.mal > 1)) rechenangabe = true;
      texte.forEach((x, k) => { if ((parseFloat(x) === wert(pr.ausdruck)) !== (k === q.correct)) bad(q.id + ': Antwort ' + x + ' falsch eingeordnet'); });
      if (!/ cm$/.test(q.answerText)) bad(q.id + ': Einheit fehlt');
    } else if (pr.art === 'korrekt' || pr.art === 'falsch') {
      const soll = pr.art === 'korrekt';
      const w = pr.stmts.map(st => wahr(sz, st));
      if (pr.stmts.length !== 4 || w.filter(x => x === soll).length !== 1) bad(q.id + ': nicht genau eine ' + (soll ? 'korrekte' : 'falsche') + ' Aussage (' + w.join(',') + ')');
      if (w.indexOf(soll) !== q.correct) bad(q.id + ': richtige Antwort steht an der falschen Stelle');
      texte.forEach((x, k) => { if (x !== VF.aussage(sz, pr.stmts[k])) bad(q.id + ': Aussage ' + (k + 1) + ' passt nicht zu den Daten'); });
      if (!q.frage.includes(soll ? '<u>korrekt</u>' : '<u>falsch</u>')) bad(q.id + ': Unterstreichung fehlt');
      if (pr.stmts.some(st => st.typ === 'inhalt')) rechenangabe = true;
    } else bad(q.id + ': unbekannte Art ' + pr.art);
    if (!q.why || /ß/.test(JSON.stringify(q))) bad(q.id + ': Erklärung fehlt oder ß');
  }
  if (!rechenangabe) bad('Vernetzt: keine Rechenangabe in den Fragen');
  if (new Set(vt.qs.map(q => q.correct)).size !== 4) bad('Vernetzt: richtige Antwort nicht über alle 4 Positionen verteilt');
  if (vt.unterInfo.a.demo.answerText !== 'Montageschritt 3' || !/Holzleim/.test(vt.unterInfo.a.demo.frage)) bad('Vernetzt: Beispiel mit Holzleim ist nicht Schritt 3');
  console.log('Vernetzt: 10 Fragen (Positionen ' + vt.qs.map(q => q.correct + 1).join('') + '), Mengen in beiden Szenarien stimmig, ' + Object.values(SZ).map(z => z.teile.length + ' Teile').join(' und '));
}

// ─── Merkfähigkeit ───────────────────────────────────────────────────────
{
  const mt = themen.merk;
  const wf = (svg, wo) => {
    if (!svg.startsWith('<svg') || !svg.endsWith('</svg>') || /NaN|undefined/.test(svg)) bad(wo + ': SVG fehlerhaft');
    const stack = [];
    for (const m of svg.matchAll(/<([/]?)([a-zA-Z]+)([^>]*?)([/]?)>/g)) {
      if (m[4]) continue;
      if (m[1]) { if (stack.pop() !== m[2]) { bad(wo + ': Tags nicht ausgeglichen'); return; } } else stack.push(m[2]);
    }
    if (stack.length) bad(wo + ': offene Tags');
  };
  // Symbole
  const keys = Object.keys(MS);
  if (keys.length < 48) bad('Merk: nur ' + keys.length + ' Symbole (mindestens 48)');
  if (new Set(keys.map(k => MS[k].name)).size !== keys.length) bad('Merk: doppelte Symbolnamen');
  const svgs = {};
  for (const k of keys) {
    if (!MS[k].Icon) { bad('Merk: Symbol ' + k + ' fehlt in der Bibliothek'); continue; }
    svgs[k] = renderToStaticMarkup(createElement(MS[k].Icon, { size: 44, strokeWidth: 1.8, color: '#111' }));
    wf(svgs[k], 'Symbol ' + k);
  }
  if (new Set(Object.values(svgs)).size !== keys.length) bad('Merk: zwei Symbole sehen genau gleich aus');
  // Piktogramm-Runden
  const runden = MD.runden;
  if (runden.length !== 2 || mt.qs.filter(q => q.type === 'pikto').length !== 2) bad('Merk: nicht 2 Piktogramm-Runden');
  const gesehen = [];
  runden.forEach((rd, i) => {
    const wo = 'Runde ' + (i + 1);
    const syms = rd.items.map(x => x.sym);
    if (rd.items.length !== 12 || new Set(syms).size !== 12) bad(wo + ': nicht 12 verschiedene Symbole');
    const alt = rd.items.filter(x => x.alt).map(x => x.sym), neu = rd.items.filter(x => !x.alt).map(x => x.sym);
    if (alt.length !== 6 || neu.length !== 6) bad(wo + ': nicht 6 alte und 6 neue');
    if (JSON.stringify([...rd.lernen].sort()) !== JSON.stringify([...alt].sort())) bad(wo + ': Lernbilder sind nicht die alten Symbole');
    if (syms.some(k => !MS[k])) bad(wo + ': unbekanntes Symbol');
    const gruppen = (l) => l.map(k => MS[k].gruppe);
    if (i === 0 && new Set(gruppen(syms)).size !== 12) bad(wo + ': ähnliche Symbole in einer Runde');
    if (i === 1) { const nah = neu.filter(k => gruppen(alt).includes(MS[k].gruppe)).length; if (nah < 3) bad(wo + ': nur ' + nah + ' neue Symbole aus der Gruppe alter Symbole'); }
    if (!rd.items.slice(0, 6).some(x => x.alt) || rd.items.slice(0, 6).every(x => x.alt)) bad(wo + ': Reihenfolge nicht gemischt');
    gesehen.push(...syms);
  });
  if (new Set(gesehen).size !== 24) bad('Merk: ein Symbol kommt in beiden Runden vor');
  if (MD.demo.items.length !== 2 || MD.demo.items.some(x => !MS[x.sym])) bad('Merk: Beispiel-Runde hat nicht 2 Piktogramme');
  if (MD.dojo.length !== 8) bad('Merk: ' + MD.dojo.length + ' Dojo-Sets statt 8');
  MD.dojo.forEach((d, i) => {
    const syms = d.items.map(x => x.sym);
    if (d.lernen.length !== 4 || d.items.length !== 8 || new Set(syms).size !== 8 || d.items.filter(x => x.alt).length !== 4) bad('Dojo-Set ' + (i + 1) + ': nicht 4 lernen und 8 verschiedene beurteilen');
    if (new Set(syms.map(k => MS[k].gruppe)).size !== 8) bad('Dojo-Set ' + (i + 1) + ': ähnliche Symbole im Set');
  });
  // Texte
  const woerter = (t) => t.join(' ').split(/\s+/).filter(Boolean).length;
  const pruefeFragen = (t, wo, anzahl) => {
    const T = t.text.join(' ');
    if (t.fragen.length !== anzahl) bad(wo + ': ' + t.fragen.length + ' Fragen statt ' + anzahl);
    t.fragen.forEach((q, i) => {
      const w = wo + ' Frage ' + (i + 1);
      if (q.optionen.length !== 4 || new Set(q.optionen).size !== 4) bad(w + ': keine 4 verschiedenen Antworten');
      if (!(q.richtig >= 0 && q.richtig < 4)) { bad(w + ': richtig ungültig'); return; }
      const richtig = q.optionen[q.richtig];
      if (!T.includes(q.beleg)) bad(w + ': Beleg steht nicht wörtlich im Text');
      if (!q.beleg.includes(q.schluessel) || !richtig.includes(q.schluessel)) bad(w + ': wichtigstes Wort «' + q.schluessel + '» fehlt im Beleg oder in der richtigen Antwort');
      q.optionen.forEach((o, k) => { if (k !== q.richtig && (T.toLowerCase().includes(o.toLowerCase()) || o.includes(q.schluessel))) bad(w + ': Falschantwort «' + o + '» steht im Text'); });
      if (/ß/.test(JSON.stringify(q))) bad(w + ': ß');
    });
  };
  MT.TEXTE.forEach((t, i) => { const n = woerter(t.text); if (n < 130 || n > 170) bad('Text ' + (i + 1) + ': ' + n + ' Wörter'); pruefeFragen(t, 'Text ' + (i + 1), 5); });
  pruefeFragen(MT.BEISPIEL_TEXT, 'Beispieltext', 1);
  if (MT.DOJO_TEXTE.length !== 8) bad('Merk: ' + MT.DOJO_TEXTE.length + ' Dojo-Texte statt 8');
  MT.DOJO_TEXTE.forEach((t, i) => { const n = woerter(t.text); if (n < 60 || n > 80) bad('Dojo-Text ' + (i + 1) + ': ' + n + ' Wörter'); pruefeFragen(t, 'Dojo-Text ' + (i + 1), 2); });
  const hauptSaetze = new Set(MT.TEXTE.flatMap(t => t.text));
  MT.DOJO_TEXTE.forEach((t, i) => { if (t.text.some(a => hauptSaetze.has(a))) bad('Dojo-Text ' + (i + 1) + ' stammt aus den Haupttexten'); });
  if (new Set(MT.TEXTE.flatMap(t => t.fragen.map(q => q.richtig))).size < 3) bad('Merk: richtige Antwort steht zu oft an derselben Stelle');
  // Thema
  if (mt.qs.length !== 4 || mt.dojoQs.length !== 16) bad('Merk: ' + mt.qs.length + ' Runden, ' + mt.dojoQs.length + ' Dojo-Aufgaben');
  const ids = [...mt.qs, ...mt.dojoQs].map(q => q.id);
  if (new Set(ids).size !== ids.length) bad('Merk: doppelte IDs');
  if (!(LERNZEIT.pikto > 0 && LERNZEIT.text > 0)) bad('Merk: Lernzeit fehlt');
  for (const k of lk.merk.kacheln) for (const kk of k.karten) for (const sy of kk.symbole || []) if (!MS[sy]) bad(k.id + ': unbekanntes Symbol ' + sy);
  console.log('Merk: ' + keys.length + ' Symbole (lucide-react), 2 Runden mit je 6 alten und 6 neuen, 2 Texte (' + MT.TEXTE.map(t => woerter(t.text)).join(' und ') + ' Wörter), 8 Dojo-Sets, 8 Dojo-Texte');
}

// ─── Textschreiben ───────────────────────────────────────────────────────
{
  const sc = themen.schreiben;
  // 3 Runden mit je 4 verschiedenen Auswahlthemen, zusammen 12 Themen
  if (SD.RUNDEN.length !== 3 || SD.RUNDEN.some(rd => rd.length !== 4 || new Set(rd).size !== 4 || rd.some(t => !t.trim()))) bad('Schreiben: nicht 3 Runden mit je 4 Themen');
  if (new Set(SD.RUNDEN.flat()).size !== 12) bad('Schreiben: nicht 12 verschiedene Themen');
  if (sc.qs.length !== 3 || sc.qs.some((q, i) => q.type !== 'freitext' || JSON.stringify(q.themen) !== JSON.stringify(SD.RUNDEN[i]))) bad('Schreiben: Runden im Thema stimmen nicht mit den Daten überein');
  if (!sc.unterInfo.gedanken.intro.includes('weniger als 20 Zeichen')) bad('Schreiben: Intro-Text fehlt');
  // Abschicken ist unter 20 Zeichen blockiert
  const k = SL.kannAbschicken;
  if (k('') || k('a'.repeat(19)) || k(' '.repeat(40)) || k('a'.repeat(19) + '   ') || !k('a'.repeat(20)) || SD.TEXT_MIN !== 20) bad('Schreiben: Abschicken-Sperre bei 20 Zeichen stimmt nicht');
  // Speichern und Laden (lokaler Speicher, hier ein Ersatzobjekt)
  const mem = {}; const sp = { getItem: (key) => (key in mem ? mem[key] : null), setItem: (key, v) => { mem[key] = String(v); } };
  if (SL.SCHREIB_KEY !== 'kp_multicheck_text') bad('Schreiben: falscher Speicher-Schlüssel');
  if (SL.abschicken(sp, { runde: 0, thema: 'Mein Lieblingsort', text: 'a'.repeat(19) }) !== null || SL.lade(sp).texte.length !== 0) bad('Schreiben: zu kurzer Text wurde gespeichert');
  SL.entwurfSpeichern(sp, 1, 2, 'Entwurf');
  const e = SL.lade(sp).entwuerfe[1];
  if (!e || e.wahl !== 2 || e.text !== 'Entwurf') bad('Schreiben: Entwurf wird nicht gespeichert oder geladen');
  const id = SL.abschicken(sp, { runde: 1, thema: 'Wie ich mit Stress umgehe', text: 'Das ist mein Text mit genug Zeichen.' });
  let d = SL.lade(sp);
  if (!id || d.texte.length !== 1 || d.texte[0].text !== 'Das ist mein Text mit genug Zeichen.' || d.texte[0].thema !== 'Wie ich mit Stress umgehe' || d.entwuerfe[1]) bad('Schreiben: abgeschickter Text wird nicht richtig gespeichert');
  SL.abschicken(sp, { runde: 1, thema: 'Wie ich mit Stress umgehe', text: 'Überarbeiteter Text mit genug Zeichen.', id });
  d = SL.lade(sp);
  if (d.texte.length !== 1 || d.texte[0].text !== 'Überarbeiteter Text mit genug Zeichen.') bad('Schreiben: Überarbeiten ersetzt den Text nicht');
  SL.loeschen(sp, id);
  if (SL.lade(sp).texte.length !== 0) bad('Schreiben: Löschen funktioniert nicht');
  // Keine Netzwerkaufrufe im Textschreiben-Code
  for (const f of ['app/lib/multicheck/schreib_daten.mjs', 'app/lib/multicheck/schreib_logik.mjs', 'app/lib/multicheck/schreiben.js', 'app/components/MulticheckSchreiben.js']) {
    const code = fs.readFileSync(f, 'utf8');
    if (/fetch\(|XMLHttpRequest|WebSocket|sendBeacon|axios|supabase|https?:[/][/]/i.test(code)) bad(f + ': enthält einen Netzwerkaufruf');
  }
  const comp = fs.readFileSync('app/components/MulticheckSchreiben.js', 'utf8');
  if (!comp.includes('disabled={!kannAbschicken(text)}') || !comp.includes("lang=\"de-CH\"") || !comp.includes('spellCheck')) bad('Schreiben: Oberfläche ohne Sperre, Sprache oder Rechtschreibprüfung');
  // Beispiel, Checkliste, Dojo-Themen
  const bw = SD.BEISPIEL.teile.map(t => t.t).join(' ').split(/\s+/).length;
  if (bw < 80 || bw > 110) bad('Schreiben: Beispieltext hat ' + bw + ' Wörter');
  if (new Set(SD.BEISPIEL.teile.map(t => t.art)).size !== 5 || SD.BEISPIEL.teile.some(t => !SD.BEISPIEL_ARTEN[t.art])) bad('Schreiben: Beispieltext markiert nicht alle 5 Teile');
  if (SD.CHECKLISTE.length !== 5) bad('Schreiben: Checkliste hat nicht 5 Punkte');
  if (SD.DOJO_THEMEN.length !== 12 || new Set(SD.DOJO_THEMEN.map(t => t.thema)).size !== 12 || SD.DOJO_THEMEN.some(t => SD.RUNDEN.flat().includes(t.thema) || !t.anfang.trim())) bad('Schreiben: Dojo-Themen (12, andere als im Üben) stimmen nicht');
  if (SD.DOJO_MIN !== 60) bad('Schreiben: Dojo-Mindestlänge ist nicht 60 Zeichen');
  if (/ß/.test(JSON.stringify(SD))) bad('Schreiben: ß in den Texten');
  // Übersicht: keine Kachel mehr auf «Bald»
  const idx = fs.readFileSync(DIR + 'index.js', 'utf8');
  if (/\bbald\('/.test(idx.replace(/^const bald = .*$/m, ''))) bad('Übersicht: es gibt noch Themen auf «Bald»');
  if ((idx.match(/aktiv\(/g) || []).length !== 12) bad('Übersicht: nicht 12 aktive Themen');
  console.log('Schreiben: 3 Runden mit je 4 Themen, Sperre bei 20 Zeichen, Speichern und Laden geprüft, keine Netzwerkaufrufe, alle 12 Themen aktiv');
}

// ─── Startseite: Reihenfolge der Kacheln ─────────────────────────────────
const index = fs.readFileSync(DIR + 'index.js', 'utf8');
const kacheln = [...index.matchAll(/(?:bald\('[a-z]+', '([^']+)'|aktiv\((\w+),)/g)].map(m => m[1] || m[2]);
const sollKacheln = ['merkfaehigkeit', 'deutsch', 'englisch', 'kurzzeit', 'it', 'organisation', 'mathematik', 'logik', 'konzentration', 'vorstellung', 'vernetzt', 'schreiben'];
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
