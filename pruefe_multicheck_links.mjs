// Prüft die teilbaren Multicheck-Links (app/lib/multicheck/links.mjs)
// Aufruf: node pruefe_multicheck_links.mjs
// Die Themen-Dateien lassen sich nicht direkt importieren (Imports ohne Endung); Thema- und Unterthemen-IDs
// werden darum aus index.js und unterthemen.js gelesen.
import fs from 'node:fs';
import { mcPfad, mcParse, themaSlug, unterSlug, PROBE_SLUG, TEILE, STARTSEITE } from './app/lib/multicheck/links.mjs';
import { VERSIONEN } from './app/lib/multicheck/probe_config.mjs';

let fehler = 0;
const bad = (m) => { fehler++; console.log('FEHLER: ' + m); };

const idx = fs.readFileSync('app/lib/multicheck/index.js', 'utf8');
const aktivNamen = [...idx.matchAll(/aktiv\((\w+),/g)].map(m => m[1]);
const dateiZuId = { deutsch: 'deutsch', englisch: 'englisch', kurzzeit: 'kurz', it: 'it', organisation: 'org', mathematik: 'mathe', logik: 'logik', konzentration: 'konz', vorstellung: 'vorst', vernetzt: 'vernetzt', merkfaehigkeit: 'merk', schreiben: 'schreiben' };
const ut = fs.readFileSync('app/lib/multicheck/unterthemen.js', 'utf8');
const unterProThema = {};
let cur = null;
for (const z of ut.split('\n')) {
  const t = z.match(/^  (\w+): \[/); if (t) { cur = t[1]; unterProThema[cur] = []; continue; }
  const u = z.match(/^\s+u\('([^']+)'/); if (u && cur) unterProThema[cur].push({ id: u[1] });
}
const themen = aktivNamen.map(n => ({ id: dateiZuId[n], bald: false, unter: unterProThema[dateiZuId[n]] || [] }));
if (themen.length !== 12) bad('erwartet 12 Themen, gefunden ' + themen.length);

const gesehen = new Map();
const pruefe = (z, label) => {
  const p = mcPfad(z);
  if (!/^[a-z0-9-]+(\/[a-z0-9-]+)?$/.test(p)) bad(`${label}: Pfad «${p}» nicht URL-sauber`);
  if (gesehen.has(p)) bad(`${label}: Pfad «${p}» doppelt (${gesehen.get(p)})`);
  gesehen.set(p, label);
  const r = mcParse(p, themen);
  const soll = { themaId: z.themaId || null, teil: z.teil || null, unterId: z.unterId || null, probe: z.probe || null };
  if (JSON.stringify(r) !== JSON.stringify(soll)) bad(`${label}: «${p}» ergibt ${JSON.stringify(r)}`);
};

pruefe({}, 'Startseite');
for (const k of Object.keys(VERSIONEN)) { if (!PROBE_SLUG[k]) bad('Slug für Probe ' + k + ' fehlt'); pruefe({ probe: k }, 'Probe ' + k); }
const themaSlugs = new Set();
for (const t of themen) {
  const s = themaSlug(t.id);
  if (themaSlugs.has(s) || s === STARTSEITE || Object.values(PROBE_SLUG).includes(s)) bad('Thema-Slug doppelt/reserviert: ' + s);
  themaSlugs.add(s);
  pruefe({ themaId: t.id }, 'Thema ' + t.id);
  pruefe({ themaId: t.id, teil: 'dojo' }, 'Dojo ' + t.id);
  pruefe({ themaId: t.id, teil: 'sensei' }, 'Sensei ' + t.id);
  const us = new Set();
  for (const x of t.unter) {
    const s2 = unterSlug(x.id);
    if (us.has(s2) || Object.values(TEILE).includes(s2)) bad(`Unterthema-Slug doppelt/reserviert: ${t.id}/${s2}`);
    us.add(s2);
    pruefe({ themaId: t.id, teil: 'ueben', unterId: x.id }, `Unterthema ${t.id}/${x.id}`);
  }
}
// Ungültige Slugs → Startseite, kein Fehler
for (const p of ['', 'gibtsnicht', 'englisch/x', 'probe-mittel', '../x']) {
  const r = mcParse(p, themen);
  if (p === 'englisch/x') { if (r.themaId !== 'englisch' || r.teil) bad('Ungültiges Unterthema sollte auf die Themenseite fallen'); }
  else if (r.themaId || r.probe || r.teil) bad(`«${p}» sollte auf die Startseite fallen`);
}
console.log(`${gesehen.size} Links geprüft, ${themen.length} Themen, ${fehler} Fehler`);
process.exit(fehler ? 1 : 0);
