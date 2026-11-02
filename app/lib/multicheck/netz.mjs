// Abwicklungen (Multicheck IMS, Vorstellungsvermögen): Würfelnetze falten und isometrisch zeichnen.
//
// Netz: Zellen { c, z, p, rot } (Spalte, Zeile von oben, Muster, Vierteldrehungen im Uhrzeigersinn).
// Falten in 3D: Das Netz liegt mit der bedruckten Seite oben auf dem Würfel (Fläche z = +1) und wird
// an den Kanten nach unten um den Würfel [-1, 1]³ geklappt. Jede Fläche bekommt
//   n  = Normale (nach aussen), ex / ey = Richtung von «rechts» und «unten» des Netzes im Raum.
// Ein Muster-Punkt (px, py) in [-1, 1]² liegt dann bei n + px·ex + py·ey.

export const MUSTER = ['leer', 'diag', 'kreuz', 'punkt', 'streifen', 'dreieck'];
export const RICHTUNGSABHAENGIG = ['diag', 'punkt', 'streifen', 'dreieck'];
export const MUSTER_NAME = { leer: 'leere Fläche', diag: 'Diagonale', kreuz: 'Kreuz', punkt: 'Punkt', streifen: 'Streifen', dreieck: 'Dreieck' };
const MIT = { diag: 'der Diagonale', kreuz: 'dem Kreuz', punkt: 'dem Punkt', streifen: 'den Streifen', dreieck: 'dem Dreieck' };
export const flaecheNom = (p) => (p === 'leer' ? 'Die leere Fläche' : `Die Fläche mit ${MIT[p]}`);
export const flaecheDat = (p) => (p === 'leer' ? 'der leeren Fläche' : `der Fläche mit ${MIT[p]}`);

// Muster in lokalen Koordinaten (x rechts, y unten).
const PRIM = {
  leer: [],
  diag: [{ t: 's', p: [[-0.8, 0.8], [0.8, -0.8]] }],
  kreuz: [{ t: 's', p: [[-0.8, 0.8], [0.8, -0.8]] }, { t: 's', p: [[-0.8, -0.8], [0.8, 0.8]] }],
  punkt: [{ t: 'c', p: [[0.5, -0.5]], r: 0.22 }],
  streifen: [{ t: 's', p: [[-0.8, -0.35], [0.8, -0.35]] }, { t: 's', p: [[-0.8, 0.35], [0.8, 0.35]] }],
  dreieck: [{ t: 't', p: [[-0.8, 0.8], [0.8, 0.8], [0.8, -0.8]] }],
};

// Muster drehen (rot Vierteldrehungen im Uhrzeigersinn) und danach links-rechts spiegeln (m).
function lokal(p, rot, m) {
  const f = ([x, y]) => { let a = x, b = y; for (let i = 0; i < (((rot || 0) % 4) + 4) % 4; i++) [a, b] = [-b, a]; if (m) a = -a; return [a, b]; };
  return PRIM[p].map(pr => ({ ...pr, p: pr.p.map(f) }));
}

// ─── Vektoren ───────────────────────────────────────────────────────────────
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const mul = (a, k) => a.map(v => v * k);
const sub = (a, b) => a.map((v, i) => v - b[i]);
const add = (a, b) => a.map((v, i) => v + b[i]);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => mul(a, 1 / Math.sqrt(dot(a, a)));
const rund = (v) => { const r = Math.round(v * 100) / 100; return r === 0 ? 0 : r; };

// ─── Falten ─────────────────────────────────────────────────────────────────
// Gibt die sechs Flächen { n, ex, ey, p, rot, m } zurück oder null, wenn das Netz kein Würfelnetz ist.
export function falten(zellen) {
  const idx = new Map(zellen.map((z, i) => [z.c + ',' + z.z, i]));
  const res = new Array(zellen.length).fill(null);
  res[0] = { n: [0, 0, 1], ex: [1, 0, 0], ey: [0, -1, 0], cen: [0, 0, 1] };
  const queue = [0];
  while (queue.length) {
    const i = queue.shift(), cur = res[i], z = zellen[i];
    for (const [dc, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const j = idx.get((z.c + dc) + ',' + (z.z + dz));
      if (j == null || res[j]) continue;
      const s = dc !== 0 ? mul(cur.ex, dc) : mul(cur.ey, dz);
      res[j] = {
        n: s, cen: sub(add(cur.cen, s), cur.n),
        ex: dc !== 0 ? mul(cur.n, -dc) : cur.ex,
        ey: dc !== 0 ? cur.ey : mul(cur.n, -dz),
      };
      queue.push(j);
    }
  }
  if (res.some(r => !r) || zellen.length !== 6) return null;
  if (new Set(res.map(r => r.n.join(','))).size !== 6) return null;
  return res.map((r, i) => ({ n: r.n, ex: r.ex, ey: r.ey, p: zellen[i].p, rot: zellen[i].rot || 0, m: 0 }));
}

// Alle 35 Sechser-Polyominos, davon die 11 gültigen Würfelnetze (in kanonischer Lage).
const SYM = [([c, z]) => [c, z], ([c, z]) => [-z, c], ([c, z]) => [-c, -z], ([c, z]) => [z, -c], ([c, z]) => [-c, z], ([c, z]) => [z, c], ([c, z]) => [c, -z], ([c, z]) => [-z, -c]];
export const symmetrie = (zellen, k) => {
  const t = zellen.map(z => ({ ...z, ...(() => { const [c, zz] = SYM[k]([z.c, z.z]); return { c, z: zz }; })() }));
  const mc = Math.min(...t.map(z => z.c)), mz = Math.min(...t.map(z => z.z));
  return t.map(z => ({ ...z, c: z.c - mc, z: z.z - mz }));
};
const kanon = (zellen) => {
  const alle = SYM.map((_, k) => symmetrie(zellen, k).map(z => z.c * 10 + z.z).sort((a, b) => a - b).join(','));
  return alle.sort()[0];
};
export function sechserPolyominos() {
  let stufe = new Map([['0', [{ c: 0, z: 0 }]]]);
  for (let n = 1; n < 6; n++) {
    const neu = new Map();
    for (const zellen of stufe.values()) {
      for (const z of zellen) {
        for (const [dc, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const c = z.c + dc, zz = z.z + dz;
          if (zellen.some(q => q.c === c && q.z === zz)) continue;
          const t = symmetrie([...zellen, { c, z: zz }], 0);
          const k = kanon(t);
          if (!neu.has(k)) neu.set(k, t);
        }
      }
    }
    stufe = neu;
  }
  return [...stufe.values()];
}
export function wuerfelnetze() {
  return sechserPolyominos().filter(z => falten(z.map(q => ({ ...q, p: 'leer', rot: 0 })))).sort((a, b) => kanon(a).localeCompare(kanon(b)));
}

// ─── Ansicht aus einer Ecke ─────────────────────────────────────────────────
export const ECKEN = [[1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1], [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]];

function kamera(ecke) {
  const w = norm(ecke), hoch = [0, 0, 1];
  const U = norm(sub(hoch, mul(w, dot(hoch, w))));
  return { R: cross(mul(w, -1), U), U };
}

// Die drei sichtbaren Flächen in der Reihenfolge oben, links, rechts.
export function sichtbar(flaechen, ecke) {
  const { R, U } = kamera(ecke);
  const drei = flaechen.filter(f => dot(f.n, ecke) > 0.5);
  drei.sort((a, b) => dot(b.n, U) - dot(a.n, U));
  const [oben, a, b] = drei;
  return dot(a.n, R) <= dot(b.n, R) ? [oben, a, b] : [oben, b, a];
}

// Schlüssel einer Fläche: Muster in Bildschirm-Koordinaten (ohne Verschiebung und Grösse).
function schluessel(f, ecke) {
  const { R, U } = kamera(ecke);
  const X = [dot(f.ex, R), dot(f.ex, U)], Y = [dot(f.ey, R), dot(f.ey, U)];
  const pt = ([px, py]) => `${rund(px * X[0] + py * Y[0])},${rund(px * X[1] + py * Y[1])}`;
  return lokal(f.p, f.rot, f.m).map(pr => {
    if (pr.t === 's') return 'S' + pr.p.map(pt).sort().join('>');
    if (pr.t === 'c') return 'C' + pt(pr.p[0]);
    return 'T' + pr.p.map(pt).sort().join('>');
  }).sort().join('|');
}
export function ansichtSchluessel(flaechen, ecke) {
  return sichtbar(flaechen, ecke).map(f => schluessel(f, ecke)).join('#');
}
// Passt die Figur (drei Flächen, gesehen aus ecke) zum Würfel aus irgendeiner seiner acht Ecken?
export function passt(wuerfel, figurFlaechen, figurEcke) {
  const ziel = ansichtSchluessel(figurFlaechen, figurEcke);
  return ECKEN.some(e => ansichtSchluessel(wuerfel, e) === ziel);
}
export function spiegeln(flaechen) {
  const sp = (v) => [-v[0], v[1], v[2]];
  return flaechen.map(f => ({ ...f, n: sp(f.n), ex: sp(f.ex), ey: sp(f.ey) }));
}

// ─── Zeichnen ───────────────────────────────────────────────────────────────
const f2 = (v) => Math.round(v * 100) / 100;

// Muster auf eine Fläche zeichnen: Punkt (px, py) → o + px·X + py·Y.
function musterSvg(fl, o, X, Y) {
  const pt = ([px, py]) => `${f2(o[0] + px * X[0] + py * Y[0])},${f2(o[1] + px * X[1] + py * Y[1])}`;
  let s = '';
  for (const pr of lokal(fl.p, fl.rot, fl.m)) {
    if (pr.t === 's') s += `<polyline points="${pr.p.map(pt).join(' ')}" fill="none" stroke="#111" stroke-width="2.2" stroke-linecap="round"/>`;
    else if (pr.t === 't') s += `<polygon points="${pr.p.map(pt).join(' ')}" fill="#111" stroke="#111" stroke-width="1"/>`;
    else {
      const [cx, cy] = pr.p[0], k = [];
      for (let i = 0; i < 16; i++) k.push(pt([cx + pr.r * Math.cos(i * Math.PI / 8), cy + pr.r * Math.sin(i * Math.PI / 8)]));
      s += `<polygon points="${k.join(' ')}" fill="#777" stroke="#555" stroke-width="1"/>`;
    }
  }
  return s;
}

// Netz als SVG (Zellen mit Mustern).
export function renderNetz(zellen) {
  const Z = 30, pad = 6;
  const mc = Math.min(...zellen.map(z => z.c)), mz = Math.min(...zellen.map(z => z.z));
  const W = (Math.max(...zellen.map(z => z.c)) - mc + 1) * Z + 2 * pad, H = (Math.max(...zellen.map(z => z.z)) - mz + 1) * Z + 2 * pad;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-hidden="true"><rect width="${W}" height="${H}" fill="#fff"/>`;
  for (const z of zellen) {
    const x = pad + (z.c - mc) * Z, y = pad + (z.z - mz) * Z;
    s += `<rect x="${x}" y="${y}" width="${Z}" height="${Z}" fill="#fff" stroke="#111" stroke-width="2"/>`;
    s += musterSvg({ p: z.p, rot: z.rot || 0, m: 0 }, [x + Z / 2, y + Z / 2], [Z * 0.45, 0], [0, Z * 0.45]);
  }
  return s + '</svg>';
}

// Würfel in isometrischer Ansicht aus einer Ecke (drei sichtbare Flächen).
export function renderWuerfel(flaechen, ecke) {
  const { R, U } = kamera(ecke), S = 27, ox = 50, oy = 50;
  const bild = (v) => [dot(v, R) * S, -dot(v, U) * S];
  let s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-hidden="true"><rect width="100" height="100" fill="#fff"/>';
  for (const f of sichtbar(flaechen, ecke)) {
    const c = bild(f.n), X = bild(f.ex), Y = bild(f.ey);
    const ecken = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => `${f2(ox + c[0] + a * X[0] + b * Y[0])},${f2(oy + c[1] + a * X[1] + b * Y[1])}`);
    s += `<polygon points="${ecken.join(' ')}" fill="#fff" stroke="#111" stroke-width="2" stroke-linejoin="round"/>`;
    s += musterSvg(f, [ox + c[0], oy + c[1]], X, Y);
  }
  return s + '</svg>';
}
