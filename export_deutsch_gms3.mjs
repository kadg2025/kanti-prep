// Erzeugt pro Jahrgang eine kompakte Exportdatei Deutsch/_export/gms3_<jahr>.md
// zur Verifikation gegen die offiziellen Loesungs-PDFs.
// Aufruf: node export_deutsch_gms3.mjs
// Die erzeugten Dateien werden bewusst nicht versioniert (.git/info/exclude).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SRC = path.resolve('app/lib/gms3/deutsch');
const OUT = path.resolve('Deutsch/_export');
const YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
const MAX_WORDS = 15;

// Die Jahresdateien sind ES-Module mit der Endung .js; ueber eine .mjs-Kopie
// im Temp-Verzeichnis lassen sie sich ohne Umbau des Projekts importieren.
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'd3-export-'));

function kurzfrage(text) {
  const woerter = String(text).replace(/\s+/g, ' ').trim().split(' ');
  if (woerter.length <= MAX_WORDS) return woerter.join(' ');
  return woerter.slice(0, MAX_WORDS).join(' ') + ' …';
}

fs.mkdirSync(OUT, { recursive: true });
let gesamt = 0;

for (const jahr of YEARS) {
  const quelle = path.join(SRC, `${jahr}.js`);
  if (!fs.existsSync(quelle)) continue;
  const kopie = path.join(tmp, `${jahr}.mjs`);
  fs.copyFileSync(quelle, kopie);
  const modul = await import(pathToFileURL(kopie).href);
  const fragen = Object.values(modul)[0] ?? [];

  const zeilen = [
    `# Deutsch GMS 3 – ${jahr} (${fragen.length} Aufgaben)`,
    '',
    'Format: ID | Frage (max. 15 Wörter) | als correct markierte Option(en), wörtlich.',
    'Die Optionen können selbst «|» enthalten – daher nur an den ersten zwei «|» trennen.',
    'Mehrere richtige Optionen sind mit « /// » verkettet.',
    '',
  ];

  for (const f of fragen) {
    const richtige = (f.options ?? []).filter((o) => o.correct).map((o) => o.label);
    zeilen.push(`${f.id} | ${kurzfrage(f.questionText)} | ${richtige.join(' /// ') || '(keine)'}`);
  }

  const ziel = path.join(OUT, `gms3_${jahr}.md`);
  fs.writeFileSync(ziel, zeilen.join('\n') + '\n', 'utf8');
  gesamt += fragen.length;
  console.log(`${path.relative(process.cwd(), ziel)}: ${fragen.length} Zeilen`);
}

fs.rmSync(tmp, { recursive: true, force: true });
console.log(`Gesamt: ${gesamt} Aufgaben`);
