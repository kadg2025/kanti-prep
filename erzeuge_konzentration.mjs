// Erzeugt die festen Aufgaben für das Thema «Konzentration» (Multicheck IMS).
// Aufruf: node erzeuge_konzentration.mjs  → schreibt app/lib/multicheck/konzentration_daten.js
// Die Aufgaben sind mit festem Startwert erzeugt, nicht zufällig zur Laufzeit.
import fs from 'node:fs';

function prng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = prng(20261103);
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const mischen = (l) => { const a = l.slice(); for (let i = a.length - 1; i > 0; i--) { const j = zahl(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ─── Zahlenreihen: 9 Ziffern, keine führende Null ───────────────────────────
function grundzahl() {
  let s = String(zahl(1, 9));
  for (let i = 1; i < 9; i++) s += zahl(0, 9);
  return s;
}

// Eine Ziffer um 1 oder 2 verändern, oder zwei benachbarte, verschiedene Ziffern vertauschen.
function veraendern(s) {
  for (;;) {
    const d = s.split('');
    if (rnd() < 0.7) {
      const i = zahl(0, 8), delta = [-2, -1, 1, 2][zahl(0, 3)];
      const neu = Number(d[i]) + delta;
      if (neu < 0 || neu > 9 || (i === 0 && neu === 0)) continue;
      d[i] = String(neu);
    } else {
      const i = zahl(0, 7);
      if (d[i] === d[i + 1] || (i === 0 && d[1] === '0')) continue;
      [d[i], d[i + 1]] = [d[i + 1], d[i]];
    }
    return d.join('');
  }
}

// Anzahl «gleich» pro Block: pro Teil 15 von 30 Zeilen.
const gleichProBlock = [3, 2, 4, 3, 3, 3, 4, 2, 3, 3];
const zahlen = gleichProBlock.map((g) => {
  const basen = [];
  const zeilen = [];
  const arten = mischen([...Array(g).fill(true), ...Array(6 - g).fill(false)]);
  for (const gleich of arten) {
    // Gleiche Grundzahlen dürfen im Block mehrfach vorkommen.
    const basis = basen.length && rnd() < 0.25 ? basen[zahl(0, basen.length - 1)] : grundzahl();
    basen.push(basis);
    let a = basis, b = gleich ? basis : veraendern(basis);
    if (rnd() < 0.5) [a, b] = [b, a];
    zeilen.push({ a, b, gleich });
  }
  return zeilen;
});

// ─── Koordinaten: pro Teil 10 Felder, alle 9 Felder kommen vor, kein Feld direkt zweimal ──
// Ein Feld ist {c, r}: Spalte von links und Zeile von oben (je 0 bis 2) wie im Bild.
// Die erwartete Eingabe «a» ist X (Spalte von links) und Y (Zeile von unten).
function folge() {
  for (;;) {
    const l = mischen([0, 1, 2, 3, 4, 5, 6, 7, 8, zahl(0, 8)]);
    if (l.every((v, i) => i === 0 || v !== l[i - 1])) return l;
  }
}
const koord = [];
for (let teil = 0; teil < 2; teil++) {
  const felder = folge().map((n) => { const c = n % 3, r = Math.floor(n / 3); return { c, r, a: `${c + 1}${3 - r}` }; });
  koord.push(felder.slice(0, 5), felder.slice(5));
}

const kopf = '// Multicheck IMS, Konzentration: feste Aufgaben, erzeugt mit erzeuge_konzentration.mjs.\n// Nicht von Hand ändern: Skript anpassen und neu erzeugen.\n';
fs.writeFileSync('app/lib/multicheck/konzentration_daten.js', kopf + 'const daten = ' + JSON.stringify({ zahlen, koord }, null, 1).replace(/\n\s+/g, ' ').replace(/\[ /g, '[').replace(/ \]/g, ']') + ';\n\nexport default daten;\n');
console.log(zahlen.map(b => b.map(z => (z.gleich ? '=' : '≠')).join('')).join(' '));
console.log(koord.map(b => b.map(f => f.a).join(' ')).join(' | '));
