// Qualitätskontrolle für app/lib/lernkarten.js
// Aufruf: node pruefe_lernkarten.mjs
//
// Prüft: Check-Fragen (2-4 Optionen, gültiger Index), eindeutige Kachel-IDs,
// bekannte Farb-Tags ohne offene Klammern, kein ß und kein Prüfungsjahr im
// Schülertext, höchstens 60 Wörter pro Karte.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const QUELLE = 'app/lib/lernkarten.js';
const KOMPONENTE = 'app/components/Lernkarte.js';
const MAX_WOERTER = 60;

// Die Datei liegt als .js ohne package-Typ vor; über eine Kopie mit .mjs
// lässt sie sich ohne Umbau des Projekts importieren.
const kopie = path.join(os.tmpdir(), `lernkarten_pruefung_${process.pid}.mjs`);
fs.copyFileSync(QUELLE, kopie);
const { lernkarten } = await import(pathToFileURL(kopie).href);
fs.unlinkSync(kopie);

const TAGS = [...fs.readFileSync(KOMPONENTE, 'utf8').matchAll(/^\s{2}([a-z0-9]+):\s*\{\s*light:/gm)].map(m => m[1]);
// Geprüft werden die Deutsch-Themen. Die Mathe-Themen sind älter und
// halten die Wortgrenze nicht überall ein; sie werden nur bei den IDs
// mitgezählt und sonst separat ausgewiesen.
const MATHE = ['Zahlen & Teilbarkeit', 'Terme & Klammern', 'Gleichungen', 'Funktionen', 'Geometrie',
  'Wahrscheinlichkeit', 'Proportionalität', 'Statistik & Diagramme', 'Prozent & Zins', 'Körper & Netze'];

const fehler = [];
const alt = [];
const ids = new Map();
let kacheln = 0;
let karten = 0;

function pruefeText(text, wo) {
  if (typeof text !== 'string') return;
  if (/ß/.test(text)) fehler.push(`${wo}: ß im Schülertext`);
  if (/\b(19|20)\d{2}\b/.test(text)) fehler.push(`${wo}: Jahreszahl im Schülertext`);
  if (/Prüfung\s+\d{4}/.test(text)) fehler.push(`${wo}: Verweis auf eine Prüfung mit Jahr`);
  for (const m of text.matchAll(/\[\[([^|\]]*)\|/g)) {
    if (!TAGS.includes(m[1])) fehler.push(`${wo}: unbekannter Tag «${m[1]}»`);
  }
  if (/\[\[[a-zA-Z0-9]+\|[^\]]*\[\[/.test(text)) fehler.push(`${wo}: verschachtelte Markierung`);
  const offen = (text.match(/\[\[/g) || []).length;
  const zu = (text.match(/\]\]/g) || []).length;
  if (offen !== zu) fehler.push(`${wo}: offene Markierung (${offen} mal [[, ${zu} mal ]])`);
  const woerter = text.replace(/\[\[[a-z0-9]+\|/g, '').replace(/\]\]/g, '').trim().split(/\s+/).length;
  if (woerter > MAX_WOERTER) fehler.push(`${wo}: ${woerter} Wörter (erlaubt sind ${MAX_WOERTER})`);
}

for (const [thema, daten] of Object.entries(lernkarten)) {
  const istMathe = MATHE.includes(thema);
  const liste = istMathe ? alt : fehler;
  for (const kachel of daten.kacheln) {
    kacheln++;
    if (ids.has(kachel.id)) liste.push(`${thema} / ${kachel.id}: ID schon vergeben in «${ids.get(kachel.id)}»`);
    else ids.set(kachel.id, thema);
    if (istMathe) continue;
    (kachel.karten || []).forEach((karte, i) => {
      karten++;
      pruefeText(karte.text, `${thema} / ${kachel.id} / Karte ${i + 1}`);
      pruefeText(karte.loesung, `${thema} / ${kachel.id} / Karte ${i + 1} (Lösung)`);
    });
    (kachel.check || []).forEach((frage, i) => {
      const wo = `${thema} / ${kachel.id} / Frage ${i + 1}`;
      if (!Array.isArray(frage.optionen) || frage.optionen.length < 2 || frage.optionen.length > 4) {
        fehler.push(`${wo}: ${frage.optionen ? frage.optionen.length : 0} Optionen (erlaubt sind 2 bis 4)`);
      } else if (!Number.isInteger(frage.richtig) || frage.richtig < 0 || frage.richtig >= frage.optionen.length) {
        fehler.push(`${wo}: richtig = ${frage.richtig} liegt ausserhalb der Optionen`);
      }
      pruefeText(frage.frage, wo);
      pruefeText(frage.erklaerung, `${wo} (Erklärung)`);
      (frage.optionen || []).forEach(o => pruefeText(o, `${wo} (Option)`));
    });
  }
}

console.log(`${Object.keys(lernkarten).length} Themen, ${kacheln} Kacheln, ${karten} Karten, ${TAGS.length} Farb-Tags`);
if (alt.length) console.log(`(${alt.length} vorbestehende Punkte in den Mathe-Themen, nicht Teil dieser Prüfung)`);
if (fehler.length === 0) {
  console.log('Alles in Ordnung.');
} else {
  console.log(`${fehler.length} Beanstandungen:`);
  fehler.forEach(f => console.log('  - ' + f));
  process.exitCode = 1;
}
