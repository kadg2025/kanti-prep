// Erzeugt die festen Piktogramm-Runden für «Merkfähigkeit» (Multicheck IMS) und die Vorschauseite.
// Aufruf: node erzeuge_merkfaehigkeit.mjs
//   → schreibt app/lib/multicheck/merk_daten.mjs und preview/merkfaehigkeit.html (alle Symbole, Runden, Texte mit Lösung)
// Fester Startwert: Die Runden sind nicht zufällig zur Laufzeit.
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SYMBOLE } from './app/lib/multicheck/merk_symbole.mjs';
import { TEXTE, BEISPIEL_TEXT, DOJO_TEXTE } from './app/lib/multicheck/merk_texte.mjs';
import { LERNZEIT } from './app/lib/multicheck/merk_konfig.mjs';

function prng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = prng(20261105);
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const mischen = (l) => { const a = l.slice(); for (let i = a.length - 1; i > 0; i--) { const j = zahl(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// Runde 1: zwölf Symbole aus zwölf verschiedenen Gruppen. Runde 2: vier neue Symbole sind Verwandte alter Symbole (gleiche Gruppe).
const RUNDEN = [
  { alt: ['schiff', 'thermometer', 'hund', 'tanne', 'burg', 'einkaufswagen'], neu: ['schluessel', 'gluehbirne', 'gitarre', 'apfel', 'velo', 'bleistift'] },
  { alt: ['auto', 'vogel', 'haus', 'sonne', 'pizza', 'kamera'], neu: ['lastwagen', 'fisch', 'kirche', 'schneeflocke', 'uhr', 'hammer'] },
];
const rundenDaten = RUNDEN.map(r => ({
  lernen: r.alt,
  items: mischen([...r.alt.map(sym => ({ sym, alt: true })), ...r.neu.map(sym => ({ sym, alt: false }))]),
}));
const demo = { lernen: ['mann'], items: [{ sym: 'mann', alt: true }, { sym: 'frau', alt: false }] };

// Dojo: 8 Sets, je 4 lernen und 8 beurteilen (4 alt, 4 neu), alle aus verschiedenen Gruppen.
const alleKeys = Object.keys(SYMBOLE);
const dojo = [];
for (let i = 0; i < 8; i++) {
  const gewaehlt = [], gruppen = new Set();
  for (const k of mischen(alleKeys)) {
    if (gruppen.has(SYMBOLE[k].gruppe) || SYMBOLE[k].gruppe === 'geschlecht') continue;
    gruppen.add(SYMBOLE[k].gruppe); gewaehlt.push(k);
    if (gewaehlt.length === 8) break;
  }
  const alt = gewaehlt.slice(0, 4), neu = gewaehlt.slice(4);
  dojo.push({ lernen: alt, items: mischen([...alt.map(sym => ({ sym, alt: true })), ...neu.map(sym => ({ sym, alt: false }))]) });
}
fs.writeFileSync('app/lib/multicheck/merk_daten.mjs',
  '// Multicheck IMS, Merkfähigkeit: feste Piktogramm-Runden, erzeugt mit erzeuge_merkfaehigkeit.mjs.\n// Nicht von Hand ändern: Skript anpassen und neu erzeugen.\nconst daten = '
  + JSON.stringify({ runden: rundenDaten, demo, dojo }, null, 1).replace(/\n\s+/g, ' ').replace(/\[ /g, '[').replace(/ \]/g, ']') + ';\n\nexport default daten;\n');

// ─── Vorschauseite ───────────────────────────────────────────────────────────
const icon = (k, gross = 44) => renderToStaticMarkup(createElement(SYMBOLE[k].Icon, { size: gross, strokeWidth: 1.8, color: '#111' }));
const zelle = (k, markiert = false, text = '') => `<div class="z${markiert ? ' alt' : ''}">${icon(k)}<span>${SYMBOLE[k].name}${text}</span></div>`;
let html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Vorschau Merkfähigkeit</title><style>
body{font-family:Segoe UI,sans-serif;margin:20px;background:#f4f4f8;color:#222}h2{margin-top:28px}
.g{display:flex;flex-wrap:wrap;gap:8px}.z{width:104px;background:#fff;border:2px solid #bbb;border-radius:14px;padding:8px;text-align:center;font-size:12px}
.z.alt{border-color:#1b8a3a;background:#eaf7ee}.z span{display:block;margin-top:4px}
.t{background:#fff;border:1px solid #ccc;border-radius:10px;padding:12px 16px;margin:10px 0;max-width:760px;line-height:1.55}
.ok{color:#1b8a3a;font-weight:bold}</style></head><body><h1>Merkfähigkeit: Vorschau</h1>`;
html += `<h2>Alle Symbole (${alleKeys.length})</h2><div class="g">${alleKeys.map(k => zelle(k, false, ` · ${SYMBOLE[k].gruppe}`)).join('')}</div>`;
rundenDaten.forEach((r, i) => {
  html += `<h2>Runde ${i + 1} (grün umrandet = alt, wurde in der Lernphase gezeigt; Lernzeit ${LERNZEIT.pikto} s)</h2><div class="g">${r.items.map(it => zelle(it.sym, it.alt, it.alt ? ' (alt)' : ' (neu)')).join('')}</div>`;
});
html += `<h2>Beispiel-Runde</h2><div class="g">${demo.items.map(it => zelle(it.sym, it.alt, it.alt ? ' (alt)' : ' (neu)')).join('')}</div>`;
dojo.forEach((r, i) => {
  html += `<h2>Dojo-Set ${i + 1}</h2><div class="g">${r.items.map(it => zelle(it.sym, it.alt, it.alt ? ' (alt)' : ' (neu)')).join('')}</div>`;
});
const textBlock = (t, kopf) => `<h2>${kopf}: ${t.titel} (${t.text.join(' ').split(/\s+/).length} Wörter)</h2><div class="t">${t.text.map(a => `<p>${a}</p>`).join('')}${t.fragen.map((q, i) => `<p><b>${i + 1}. ${q.frage}</b><br>${q.optionen.map((o, k) => (k === q.richtig ? `<span class="ok">✔ ${o}</span>` : `✘ ${o}`)).join('<br>')}<br><i>Beleg: «${q.beleg}»</i></p>`).join('')}</div>`;
TEXTE.forEach((t, i) => { html += textBlock(t, 'Text ' + (i + 1)); });
html += textBlock(BEISPIEL_TEXT, 'Beispieltext');
DOJO_TEXTE.forEach((t, i) => { html += textBlock(t, 'Dojo-Text ' + (i + 1)); });
fs.mkdirSync('preview', { recursive: true });
fs.writeFileSync('preview/merkfaehigkeit.html', html + '</body></html>');
console.log('Runde 1 Reihenfolge:', rundenDaten[0].items.map(i => i.sym + (i.alt ? '*' : '')).join(' '));
