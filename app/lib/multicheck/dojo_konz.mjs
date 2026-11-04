// Multicheck IMS, Konzentration: eigener Fragenpool für das Dojo (neue Aufgaben, mit festem Startwert berechnet).
// Gleiche Regeln wie erzeuge_konzentration.mjs: Zahlenreihen mit 9 Ziffern, Koordinaten auf dem 3×3-Raster.
let seed = 20261109;
const rnd = () => {
  seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const mischen = (l) => { const a = l.slice(); for (let i = a.length - 1; i > 0; i--) { const j = zahl(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function grundzahl() {
  let s = String(zahl(1, 9));
  for (let i = 1; i < 9; i++) s += zahl(0, 9);
  return s;
}
function veraendern(s) {
  for (;;) {
    const d = s.split('');
    if (rnd() < 0.5) {
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
const zeilenText = (items) => items.map((z, i) => `Zeile ${i + 1}: ${z.gleich ? 'gleich' : 'nicht gleich'}`).join(', ');

function zahlenBlock(nr, g) {
  const arten = mischen([...Array(g).fill(true), ...Array(6 - g).fill(false)]);
  const items = arten.map((gleich) => {
    const basis = grundzahl();
    let a = basis, b = gleich ? basis : veraendern(basis);
    if (rnd() < 0.5) [a, b] = [b, a];
    return { a, b, gleich };
  });
  return {
    type: 'numcmp', title: 'Zahlenreihen vergleichen',
    instr: 'Vergleiche in jeder Zeile die beiden Zahlenreihen. Klicke «Gleich» oder «Nicht gleich».',
    items, answerText: zeilenText(items),
    why: 'Vergleiche die Zahlen in Dreiergruppen von links nach rechts. Sobald eine Gruppe nicht passt, sind die Reihen nicht gleich.',
    ck: 'k_cmp', topic: 'konz', id: `konz-d${nr}`,
  };
}
function koordBlock(nr) {
  const l = mischen([0, 1, 2, 3, 4, 5, 6, 7, 8]).slice(0, 5);
  const items = l.map((n) => { const c = n % 3, r = Math.floor(n / 3); return { c, r, a: `${c + 1}${3 - r}` }; });
  return {
    type: 'coord', title: 'Koordinaten',
    instr: 'Ein Feld ist rot. Tippe seine Koordinaten ein: zuerst die Ziffer der X-Achse, dann die Ziffer der Y-Achse.',
    items, answerText: items.map((f, i) => `Feld ${i + 1}: ${f.a}`).join(', '),
    why: 'X liegt waagrecht und wird von links gezählt. Y liegt senkrecht und wird von unten gezählt. Immer zuerst X, dann Y.',
    ck: 'k_coord', topic: 'konz', id: `konz-d${nr}`,
  };
}

export default [
  zahlenBlock(1, 3), zahlenBlock(2, 2), zahlenBlock(3, 4), zahlenBlock(4, 3), zahlenBlock(5, 3), zahlenBlock(6, 2),
  koordBlock(7), koordBlock(8), koordBlock(9), koordBlock(10), koordBlock(11),
];
