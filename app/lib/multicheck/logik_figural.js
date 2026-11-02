// Multicheck IMS, Logik: «Figurale Analogien». Zehn Aufgaben aus Bildbeschreibungen (siehe figur.js).
// Jede Aufgabe: Bilder A, B, C, richtige Option D, fünf falsche Optionen und die Regel als Liste.
import { fig } from './figur';

// Position der richtigen Option (0 bis 5) pro Aufgabe, bewusst gemischt.
const POS = [2, 5, 0, 3, 1, 4, 3, 0, 5, 1];

function aufgabe(nr, regel, [a, b, c, d], falsch, why) {
  const pos = POS[nr - 1];
  const opts = falsch.slice();
  opts.splice(pos, 0, d);
  return {
    type: 'figmc',
    title: 'Figurale Analogien',
    instr: 'Bilde das zweite Bildpaar.',
    a, b, c,
    options: opts.map(spec => ({ spec })),
    correct: pos,
    regel,
    answerText: `Bild ${pos + 1}`,
    why,
    ck: 'l_fig', topic: 'logik', id: `logik-${20 + nr}`,
  };
}

const pfeil = (rot) => fig('arrow', 'g', 'w', { rot });
const mit = (shape, side, anhang) => fig(shape, 'g', 'w', { attach: { side, shape: anhang } });
const innen = (shape, inner, extra = {}) => fig(shape, 'g', 'w', { inner: { shape: inner, ...extra } });

const aufgaben = [
  aufgabe(1, [{ t: 'size', to: 'k' }],
    [fig('circle', 'g', 'w'), fig('circle', 'k', 'w'), fig('square', 'g', 'b'), fig('square', 'k', 'b')],
    [fig('square', 'g', 'b'), fig('square', 'k', 'w'), fig('circle', 'k', 'b'), fig('square', 'k', '/'), fig('square', 'g', 'w')],
    'Das Bild wird kleiner, sonst bleibt alles gleich.'),
  aufgabe(2, [{ t: 'fill', to: 'b' }],
    [fig('triangle', 'g', 'w'), fig('triangle', 'g', 'b'), fig('square', 'g', 'w'), fig('square', 'g', 'b')],
    [fig('square', 'g', 'w'), fig('square', 'g', '/'), fig('circle', 'g', 'b'), fig('square', 'g', '.'), fig('triangle', 'g', 'b')],
    'Das Bild wird schwarz ausgefüllt, die Form bleibt.'),
  aufgabe(3, [{ t: 'shape', to: 'circle' }],
    [fig('square', 'g', 'w'), fig('circle', 'g', 'w'), fig('square', 'g', 'b'), fig('circle', 'g', 'b')],
    [fig('circle', 'g', 'w'), fig('square', 'g', 'b'), fig('triangle', 'g', 'b'), fig('circle', 'g', '/'), fig('ellipseB', 'g', 'b')],
    'Das Quadrat wird zum Kreis, die Farbe bleibt.'),
  aufgabe(4, [{ t: 'rot90' }],
    [pfeil(0), pfeil(90), pfeil(180), pfeil(270)],
    [pfeil(0), pfeil(90), pfeil(180), pfeil(45), pfeil(225)],
    'Der Pfeil wird um 90 Grad im Uhrzeigersinn gedreht.'),
  aufgabe(5, [{ t: 'mirrorAttach' }],
    [mit('square', 'l', 'triangle'), mit('square', 'r', 'triangle'), mit('rectH', 'l', 'circle'), mit('rectH', 'r', 'circle')],
    [mit('rectH', 'l', 'circle'), mit('rectH', 'o', 'circle'), mit('rectH', 'u', 'circle'), mit('rectB', 'r', 'circle'), mit('square', 'r', 'circle')],
    'Das Anhängsel wechselt von links nach rechts.'),
  aufgabe(6, [{ t: 'swapInner' }],
    [innen('circle', 'square'), innen('square', 'circle'), innen('triangle', 'circle'), innen('circle', 'triangle')],
    [innen('triangle', 'circle'), fig('circle', 'g', 'w'), fig('triangle', 'g', 'w'), innen('circle', 'circle'), innen('circle', 'triangle', { fill: 'b' })],
    'Innere und äussere Form tauschen die Plätze.'),
  aufgabe(7, [{ t: 'count', to: 2 }],
    [fig('circle', 'g', 'w'), fig('circle', 'g', 'w', { count: 2 }), fig('triangle', 'g', 'w'), fig('triangle', 'g', 'w', { count: 2 })],
    [fig('triangle', 'g', 'w'), fig('triangle', 'g', 'w', { count: 3 }), fig('circle', 'g', 'w', { count: 2 }), fig('square', 'g', 'w', { count: 2 }), fig('triangle', 'g', 'w', { count: 2, layout: 'v', size2: 'k' })],
    'Aus einer Form werden zwei gleiche Formen.'),
  aufgabe(8, [{ t: 'size', to: 'k' }, { t: 'fill', to: 'b' }],
    [fig('circle', 'g', 'w'), fig('circle', 'k', 'b'), fig('square', 'g', 'w'), fig('square', 'k', 'b')],
    [fig('square', 'k', 'w'), fig('square', 'g', 'b'), fig('circle', 'k', 'b'), fig('square', 'g', 'w'), fig('square', 'k', '/')],
    'Das Bild wird kleiner und zugleich schwarz.'),
  aufgabe(9, [{ t: 'flipHatch' }],
    [fig('square', 'g', '/'), fig('square', 'g', '\\'), fig('circle', 'g', '/'), fig('circle', 'g', '\\')],
    [fig('circle', 'g', '/'), fig('circle', 'g', 'b'), fig('circle', 'g', 'w'), fig('circle', 'g', '.'), fig('square', 'g', '\\')],
    'Die Schraffur kippt in die andere Richtung.'),
  aufgabe(10, [{ t: 'rot90' }, { t: 'fill', to: 'b' }],
    [fig('rectH', 'g', 'w'), fig('rectB', 'g', 'b'), fig('ellipseH', 'g', 'w'), fig('ellipseB', 'g', 'b')],
    [fig('ellipseB', 'g', 'w'), fig('ellipseH', 'g', 'b'), fig('rectB', 'g', 'b'), fig('ellipseH', 'g', 'w'), fig('circle', 'g', 'b')],
    'Das Bild wird um 90 Grad gedreht und schwarz gefüllt.'),
];

export default aufgaben;
