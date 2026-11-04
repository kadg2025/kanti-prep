// Multicheck IMS, Konzentration: schwere Zahlenreihen-Blöcke (konz-15 bis konz-24), Unterthema «Zahlenreihen, schwer».
// Längere Zahlen (11 und 12 Ziffern), 8 Zeilen pro Block, sehr ähnliche Paare: leicht verwechselbare Ziffern,
// vertauschte Ziffern (auch mit einer Ziffer dazwischen) und gedrehte Dreiergruppen. Feste Startwerte, nicht zufällig zur Laufzeit.
export function prng(start) {
  let seed = start;
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const AEHNLICH2 = [[3, 8], [5, 6], [6, 8], [1, 7], [0, 8], [6, 9], [2, 7], [5, 3]];

export function schwerBlock(rnd, { id, laenge, zeilen = 8, gleich }) {
  const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));
  const mischen = (l) => { const a = l.slice(); for (let i = a.length - 1; i > 0; i--) { const j = zahl(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const grund = () => {
    // Ziffern aus einem kleinen Vorrat, damit viele ähnliche Ziffern vorkommen.
    const vorrat = mischen([0, 1, 2, 3, 5, 6, 7, 8, 9]).slice(0, 6);
    let s = String(vorrat.filter(x => x > 0)[0]);
    while (s.length < laenge) s += vorrat[zahl(0, vorrat.length - 1)];
    return s;
  };
  const aendern = (s) => {
    for (let versuch = 0; versuch < 200; versuch++) {
      const d = s.split('');
      const art = zahl(0, 3);
      if (art === 0) {
        const i = zahl(1, laenge - 1);
        const paar = AEHNLICH2.find(p => p.includes(Number(d[i])) && rnd() < 0.7) || AEHNLICH2.find(p => p.includes(Number(d[i])));
        if (!paar) continue;
        d[i] = String(paar[0] === Number(d[i]) ? paar[1] : paar[0]);
      } else if (art === 1) {
        const i = zahl(1, laenge - 2);
        if (d[i] === d[i + 1]) continue;
        [d[i], d[i + 1]] = [d[i + 1], d[i]];
      } else if (art === 2) {
        const i = zahl(1, laenge - 3);
        if (d[i] === d[i + 2]) continue;
        [d[i], d[i + 2]] = [d[i + 2], d[i]];
      } else {
        const i = zahl(1, laenge - 3);
        if (d[i] === d[i + 1] && d[i + 1] === d[i + 2]) continue;
        const [a, b, c] = [d[i], d[i + 1], d[i + 2]];
        d[i] = b; d[i + 1] = c; d[i + 2] = a;
      }
      const neu = d.join('');
      if (neu !== s && neu[0] !== '0') return neu;
    }
    throw new Error('konz-schwer: keine Änderung gefunden');
  };
  const arten = mischen([...Array(gleich).fill(true), ...Array(zeilen - gleich).fill(false)]);
  const items = arten.map((g) => {
    const basis = grund();
    let a = basis, b = g ? basis : aendern(basis);
    if (rnd() < 0.5) [a, b] = [b, a];
    return { a, b, gleich: g };
  });
  items.forEach(z => { if ((z.a === z.b) !== z.gleich || z.a.length !== laenge || z.b.length !== laenge) throw new Error('konz-schwer: Zeile inkonsistent'); });
  return {
    type: 'numcmp', title: 'Zahlenreihen vergleichen',
    instr: 'Vergleiche in jeder Zeile die beiden Zahlenreihen. Klicke «Gleich» oder «Nicht gleich».',
    items, answerText: items.map((z, i) => `Zeile ${i + 1}: ${z.gleich ? 'gleich' : 'nicht gleich'}`).join(', '),
    why: 'Vergleiche die Zahlen in Dreiergruppen von links nach rechts. Achte auf vertauschte Ziffern und auf leicht verwechselbare Ziffern wie 3 und 8, 5 und 6, 6 und 9, 1 und 7. Sobald eine Gruppe nicht passt, sind die Reihen nicht gleich.',
    ck: 'k_cmp', topic: 'konz', difficulty: 'schwer', id,
  };
}

const rnd = prng(20261112);
const gleichProBlock = [3, 4, 2, 3, 4, 3, 2, 3, 4, 3];
export default gleichProBlock.map((g, i) => schwerBlock(rnd, { id: `konz-${15 + i}`, laenge: i % 2 === 0 ? 11 : 12, gleich: g }));
