// Erzeugt die festen Aufgaben für «Numerische Verarbeitungskapazität» (Logik).
// Aufruf: node erzeuge_numproc.mjs  → schreibt app/lib/multicheck/logik_numerisch.js
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
const rnd = prng(20261102);
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));

// Eine Reihe: Startzahl und n Schritte (+/−1…4), alle Zwischenwerte 1…9, Ende ≠ Start.
function reihe(n) {
  for (;;) {
    const start = zahl(1, 9);
    let z = start; const steps = [];
    for (let i = 0; i < n; i++) {
      const moegl = [];
      for (let d = -4; d <= 4; d++) if (d && z + d >= 1 && z + d <= 9) moegl.push(d);
      const d = moegl[zahl(0, moegl.length - 1)];
      steps.push(d); z += d;
    }
    if (z !== start && (n < 3 || steps.some(s => s > 0) && steps.some(s => s < 0))) return { start, steps, end: z };
  }
}

const schritte = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4];       // Aufgaben 1–4: 2, 5–7: 3, 8–10: 3 bis 4
const gleichEnde = new Set([0, 5, 8]);                   // nur diese Aufgaben enden oben und unten gleich
const aufgaben = [];
for (let i = 0; i < 10; i++) {
  let o, u;
  do { o = reihe(schritte[i]); u = reihe(schritte[i]); } while ((o.end === u.end) !== gleichEnde.has(i) || o.start === u.start);
  const frageOben = i % 2 === 0;
  const antwort = frageOben ? o.end : u.end;
  const weg = (r) => { let z = r.start; const t = []; for (const s of r.steps) { t.push(`${z} ${s > 0 ? '+' : '–'} ${Math.abs(s)} = ${z + s}`); z += s; } return `Start ${r.start}, dann ${t.join(', ')}`; };
  aufgaben.push({
    type: 'numproc',
    title: 'Numerische Verarbeitungskapazität',
    instr: 'Zahlen und Rechenschritte erscheinen nacheinander in den beiden weissen Feldern und verschwinden wieder. Rechne beide Reihen getrennt im Kopf. Am Ende erscheint ein «?». Gib die Zahl ein, die dort stehen müsste (1 bis 9).',
    top: { start: o.start, steps: o.steps },
    bottom: { start: u.start, steps: u.steps },
    ask: frageOben ? 'top' : 'bottom',
    answer: antwort,
    answerText: String(antwort),
    why: `Oben: ${weg(o)}. Unten: ${weg(u)}. Gefragt war das ${frageOben ? 'obere' : 'untere'} Feld: ${antwort}.`,
    ck: 'l_num', topic: 'logik', id: `logik-${11 + i}`,
  });
}
const kopf = `// Multicheck IMS, Logik: «Numerische Verarbeitungskapazität». Feste Aufgaben, erzeugt mit erzeuge_numproc.mjs.\n// Nicht von Hand ändern: Skript anpassen und neu erzeugen.\nconst aufgaben = `;
fs.writeFileSync('app/lib/multicheck/logik_numerisch.js', kopf + JSON.stringify(aufgaben, null, 1).replace(/\n\s+/g, ' ').replace(/\[ /g, '[').replace(/ \]/g, ']').replace(/^\[ ?/, '[\n').replace(/\}, \{/g, '},\n{') + ';\n\nexport default aufgaben;\n');
console.log(aufgaben.map(a => `${a.id} oben ${a.top.start}${a.top.steps.map(s => (s > 0 ? '+' : '') + s).join('')} unten ${a.bottom.start}${a.bottom.steps.map(s => (s > 0 ? '+' : '') + s).join('')} ? ${a.ask} = ${a.answer}`).join('\n'));
