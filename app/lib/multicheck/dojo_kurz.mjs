// Multicheck IMS, Kurzzeitgedächtnis: eigener Fragenpool für das Dojo (neue Aufgaben, etwas schwieriger als die Themenfragen).
// Die Aufgaben werden mit festem Startwert berechnet, sie sind bei jedem Start gleich.
let seed = 20261107;
const rnd = () => {
  seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const mischen = (l) => { const a = l.slice(); for (let i = a.length - 1; i > 0; i--) { const j = zahl(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// Einstufung pro Aufgabe (Nummer → Stufe).
const D = { 1: 'mittel', 2: 'mittel', 3: 'mittel', 4: 'mittel', 5: 'schwer', 6: 'mittel', 7: 'mittel', 8: 'schwer', 9: 'schwer', 10: 'mittel', 11: 'schwer', 12: 'schwer', 13: 'schwer', 14: 'schwer', 15: 'schwer', 16: 'schwer' };

const FARBE = ['rot', 'blau', 'schwarz'];
const farbAufgabe = (n, seq, showSec) => ({
  type: 'memcolor', title: 'Farbkombinationen behalten',
  instr: `Kurz wird eine Reihe mit ${seq.length} Kreisen gezeigt. Danach siehst du leere Kreise. Baue die Farbkombination nach: 1× klicken = rot, 2× = blau, 3× = schwarz.`,
  seq, showSec, answerText: seq.map(v => FARBE[v]).join(', '),
  why: 'Du hast die Reihe von links nach rechts nachgebaut. Unten siehst du richtige Reihe und deine Reihe untereinander.',
  ck: 'k_color', topic: 'kurz', id: `kurz-d${n}`, difficulty: D[n],
});

// Falsche Varianten: eine Stelle ändern, zwei Nachbarn tauschen, Ende abschneiden und anhängen u. a.
function varianten(s, zeichen) {
  const out = new Set();
  const a = s.split('');
  let guard = 0;
  while (out.size < 7 && guard++ < 500) {
    const d = a.slice();
    const art = zahl(0, 3);
    if (art === 0) { const i = zahl(0, d.length - 1); let z; do { z = zeichen[zahl(0, zeichen.length - 1)]; } while (z === d[i]); d[i] = z; }
    else if (art === 1) { const i = zahl(0, d.length - 2); [d[i], d[i + 1]] = [d[i + 1], d[i]]; }
    else if (art === 2) { d.push(d.shift()); }
    else { const i = zahl(0, d.length - 1), j = zahl(0, d.length - 1); [d[i], d[j]] = [d[j], d[i]]; }
    const v = d.join('');
    if (v !== s) out.add(v);
  }
  return [...out];
}
const zeichenAufgabe = (n, show, showSec, ziffern) => {
  const falsch = varianten(show, ziffern ? '0123456789'.split('') : 'BCDFGHKLMNPRSTWXZ'.split(''));
  const pos = zahl(0, 7);
  const opts = falsch.slice(0, 7); opts.splice(pos, 0, show);
  return {
    type: 'memchoice', title: 'Kombination aus Zeichen behalten',
    instr: `Kurz wird eine ${ziffern ? 'Zahlenkombination' : 'Zeichenkombination'} gezeigt. Danach klickst du die Kombination an, die du gesehen hast.`,
    show, showSec, options: opts.map(t => ({ t })), correct: pos, answerText: show, why: `Gezeigt wurde <b>${show}</b>.`,
    ck: ziffern ? 'k_digits' : 'k_letters', mono: true, topic: 'kurz', id: `kurz-d${n}`, difficulty: D[n],
  };
};
const buchstaben = (len) => mischen('BCDFGHKLMNPRSTWXZ'.split('')).slice(0, len).join('');
const ziffernfolge = (len) => { let s = ''; for (let i = 0; i < len; i++) s += zahl(0, 9); return s; };
const farbfolge = (len) => { const l = []; for (let i = 0; i < len; i++) l.push(zahl(0, 2)); return l; };

export default [
  farbAufgabe(1, [1, 2, 0, 0, 1, 2, 1, 0, 2], 7),
  farbAufgabe(2, [0, 1, 1, 2, 0, 2, 1, 0], 6),
  farbAufgabe(3, [2, 2, 1, 0, 1, 2, 0, 0, 1], 6),
  farbAufgabe(4, [1, 0, 2, 1, 2, 0, 1, 1], 5),
  farbAufgabe(5, farbfolge(9), 5),
  zeichenAufgabe(6, buchstaben(6), 5, false),
  zeichenAufgabe(7, buchstaben(7), 5, false),
  zeichenAufgabe(8, buchstaben(7), 4, false),
  zeichenAufgabe(9, buchstaben(8), 4, false),
  zeichenAufgabe(10, ziffernfolge(7), 5, true),
  zeichenAufgabe(11, ziffernfolge(8), 4, true),
  zeichenAufgabe(12, ziffernfolge(8), 4, true),
  farbAufgabe(13, farbfolge(10), 4),
  farbAufgabe(14, farbfolge(10), 5),
  zeichenAufgabe(15, buchstaben(9), 4, false),
  zeichenAufgabe(16, ziffernfolge(9), 4, true),
];
