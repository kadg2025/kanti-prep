// Figurale Bilder für Multicheck IMS (Logik). Ein Bild wird durch eine Beschreibung (Spec) festgelegt
// und von renderFigur() als Inline-SVG gezeichnet: schwarze Linien auf weissem Grund.
//
// Spec-Attribute:
//   shape   circle | square | triangle | rectH | rectB | ellipseH | ellipseB | arrow
//   size    g (gross) | k (klein)
//   fill    w (weiss) | b (schwarz) | / | \ (Schraffur) | . (gepunktet)
//   rot     0, 45, 90 … 315 (Grad im Uhrzeigersinn; 45er-Schritte nur für falsche Optionen)
//   mirror  true | false (links-rechts gespiegelt)
//   count   1, 2 oder 3 gleiche Formen; layout h (nebeneinander) | v (übereinander); size2 = Grösse der zweiten Form
//   inner   { shape, size, fill }  eine kleinere Form im Innern
//   attach  { side: l | r | o | u, shape, size, fill }  ein Anhängsel an der Seite

const STANDARD = { shape: 'circle', size: 'g', fill: 'w', rot: 0, mirror: false, count: 1, layout: 'h', size2: null, inner: null, attach: null };

export const fig = (shape, size = 'g', fill = 'w', extra = {}) => ({ shape, size, fill, ...extra });

export function normalisiere(spec) {
  const o = { ...STANDARD, ...spec };
  if (o.inner) o.inner = { shape: 'circle', size: 'k', fill: 'w', ...o.inner };
  if (o.attach) o.attach = { side: 'l', shape: 'circle', size: 'k', fill: 'w', ...o.attach };
  if (o.count === 1) { o.layout = 'h'; o.size2 = null; }
  return o;
}

const ATTRIBUTE = ['shape', 'size', 'fill', 'rot', 'mirror', 'count', 'layout', 'size2', 'inner', 'attach'];

// Liste der Attribute, in denen sich zwei Specs unterscheiden.
export function unterschiede(a, b) {
  const x = normalisiere(a), y = normalisiere(b);
  return ATTRIBUTE.filter(k => JSON.stringify(x[k]) !== JSON.stringify(y[k]));
}

// Regeln auf ein Bild anwenden. Jede Regel ist { t: 'size' | 'fill' | 'shape' | 'rot90' | 'mirrorAttach' | 'swapInner' | 'count' | 'flipHatch', to? }.
const DREHEN = { rectH: 'rectB', rectB: 'rectH', ellipseH: 'ellipseB', ellipseB: 'ellipseH' };
const SEITE = { l: 'r', r: 'l', o: 'u', u: 'o' };
export function wendeRegel(spec, regeln) {
  const s = normalisiere(spec);
  for (const r of regeln) {
    if (r.t === 'size') s.size = r.to;
    else if (r.t === 'fill') s.fill = r.to;
    else if (r.t === 'shape') s.shape = r.to;
    else if (r.t === 'rot90') { if (DREHEN[s.shape]) s.shape = DREHEN[s.shape]; else s.rot = (s.rot + 90) % 360; }
    else if (r.t === 'mirrorAttach') s.attach = { ...s.attach, side: SEITE[s.attach.side] };
    else if (r.t === 'swapInner') { const t = s.shape; s.shape = s.inner.shape; s.inner = { ...s.inner, shape: t }; }
    else if (r.t === 'count') s.count = r.to;
    else if (r.t === 'flipHatch') s.fill = s.fill === '/' ? '\\' : s.fill === '\\' ? '/' : s.fill;
  }
  return normalisiere(s);
}

const GROESSE = { g: 56, k: 28 };
const GROESSE_MEHRFACH = { g: 40, k: 24 };

// Halbe Breite und Höhe einer Form der Grösse s (ohne Drehung).
function halb(shape, s) {
  switch (shape) {
    case 'triangle': return [0.55 * s, 0.5 * s];
    case 'rectH': return [0.275 * s, 0.5 * s];
    case 'rectB': return [0.5 * s, 0.275 * s];
    case 'ellipseH': return [0.3 * s, 0.5 * s];
    case 'ellipseB': return [0.5 * s, 0.3 * s];
    case 'arrow': return [0.35 * s, 0.5 * s];
    default: return [0.5 * s, 0.5 * s];
  }
}

function fuellung(f, u) {
  if (f === 'b') return '#111';
  if (f === '/') return `url(#${u}-h1)`;
  if (f === '\\') return `url(#${u}-h2)`;
  if (f === '.') return `url(#${u}-pt)`;
  return '#fff';
}

const r2 = (n) => Math.round(n * 100) / 100;

// Eine Form um den Mittelpunkt (cx, cy) mit Grösse s.
function form(shape, s, cx, cy, rot, mirror, fill, u) {
  let k;
  switch (shape) {
    case 'square': k = `<rect x="${r2(-s / 2)}" y="${r2(-s / 2)}" width="${r2(s)}" height="${r2(s)}"/>`; break;
    case 'triangle': k = `<polygon points="0,${r2(-0.5 * s)} ${r2(-0.55 * s)},${r2(0.45 * s)} ${r2(0.55 * s)},${r2(0.45 * s)}"/>`; break;
    case 'rectH': case 'rectB': { const [w, h] = halb(shape, s); k = `<rect x="${r2(-w)}" y="${r2(-h)}" width="${r2(2 * w)}" height="${r2(2 * h)}"/>`; break; }
    case 'ellipseH': case 'ellipseB': { const [w, h] = halb(shape, s); k = `<ellipse cx="0" cy="0" rx="${r2(w)}" ry="${r2(h)}"/>`; break; }
    case 'arrow': {
      const p = [[0, -0.5], [0.35, -0.1], [0.15, -0.1], [0.15, 0.5], [-0.15, 0.5], [-0.15, -0.1], [-0.35, -0.1]];
      k = `<polygon points="${p.map(([x, y]) => `${r2(x * s)},${r2(y * s)}`).join(' ')}"/>`; break;
    }
    default: k = `<circle cx="0" cy="0" r="${r2(s / 2)}"/>`;
  }
  const t = `translate(${r2(cx)} ${r2(cy)})${rot ? ` rotate(${rot})` : ''}${mirror ? ' scale(-1 1)' : ''}`;
  return `<g transform="${t}" fill="${fuellung(fill, u)}" stroke="#111" stroke-width="2.5" stroke-linejoin="round">${k}</g>`;
}

// Gibt ein vollständiges <svg> zurück. «u» macht die Muster-IDs eindeutig auf der Seite.
export function renderFigur(spec, u = 'f') {
  const o = normalisiere(spec);
  const defs = '<defs>'
    + `<pattern id="${u}-h1" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#fff"/><path d="M-1 7 L7 -1 M-1 1 L1 -1 M5 7 L7 5" stroke="#111" stroke-width="1.4"/></pattern>`
    + `<pattern id="${u}-h2" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#fff"/><path d="M-1 -1 L7 7 M-1 5 L1 7 M5 -1 L7 1" stroke="#111" stroke-width="1.4"/></pattern>`
    + `<pattern id="${u}-pt" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="#fff"/><circle cx="3.5" cy="3.5" r="1.4" fill="#111"/></pattern>`
    + '</defs>';
  let inhalt = '';
  if (o.count >= 2) {
    const s1 = GROESSE_MEHRFACH[o.size], s2 = GROESSE_MEHRFACH[o.size2 || o.size];
    let pos;
    if (o.count === 3) pos = [[18, 50, 24], [50, 50, 24], [82, 50, 24]];
    else if (o.layout === 'v') pos = [[50, 27, s1], [50, 73, s2]];
    else pos = [[27, 50, s1], [73, 50, s2]];
    for (const [x, y, s] of pos) inhalt += form(o.shape, s, x, y, o.rot, o.mirror, o.fill, u);
  } else {
    const s = GROESSE[o.size];
    let cx = 50, cy = 50;
    if (o.attach) {
      const a = o.attach, as = GROESSE[a.size] * 0.75;
      const [hw, hh] = halb(o.shape, s), [aw, ah] = halb(a.shape, as);
      if (a.side === 'l' || a.side === 'r') {
        const v = a.side === 'l' ? -1 : 1, gesamt = 2 * hw + 2 * aw;
        cx = 50 - v * (gesamt / 2 - hw);
        inhalt += form(a.shape, as, cx + v * (hw + aw), 50, 0, false, a.fill, u);
      } else {
        const v = a.side === 'o' ? -1 : 1, gesamt = 2 * hh + 2 * ah;
        cy = 50 - v * (gesamt / 2 - hh);
        inhalt += form(a.shape, as, 50, cy + v * (hh + ah), 0, false, a.fill, u);
      }
    }
    inhalt += form(o.shape, s, cx, cy, o.rot, o.mirror, o.fill, u);
    if (o.inner) inhalt += form(o.inner.shape, s * (o.inner.size === 'k' ? 0.4 : 0.65), cx, cy, 0, false, o.inner.fill, u);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-hidden="true">${defs}<rect width="100" height="100" fill="#fff"/>${inhalt}</svg>`;
}
