// Räumliches Sehen (Multicheck IMS, Vorstellungsvermögen): Szenen aus Beschreibungen.
// Eine Szene ist eine Liste von Formen auf einem Brett (Blick von oben, x nach rechts, y nach oben):
//   { art: 'quader' | 'zylinder', x, y, w, d, rot, h, farbe }
//   quader: Grundriss w × d, um rot Grad gedreht (gegen den Uhrzeigersinn), Höhe h
//   zylinder: Durchmesser w, Höhe h
// Standort des Betrachters: Himmelsrichtung vom Brett aus gesehen; er schaut zur Mitte.
// Der Pfeil unten (Süden) heisst: Betrachter steht unten und schaut nach oben, links bleibt links.

export const RICHTUNGEN = ['N', 'NO', 'O', 'SO', 'S', 'SW', 'W', 'NW'];
const WINKEL = { O: 0, NO: 45, N: 90, NW: 135, W: 180, SW: 225, S: 270, SO: 315 };
export const PFEIL_TEXT = { N: 'Pfeil oben', NO: 'Pfeil oben rechts', O: 'Pfeil rechts', SO: 'Pfeil unten rechts', S: 'Pfeil unten', SW: 'Pfeil unten links', W: 'Pfeil links', NW: 'Pfeil oben links' };
export const FARBEN = { rot: '#e53935', blau: '#1e63e9', gelb: '#f4c20d', gruen: '#2e9e4f' };
const FARB_ADJ = { rot: 'roter', blau: 'blauer', gelb: 'gelber', gruen: 'grüner' };

const rad = (g) => g * Math.PI / 180;
const r1 = (v) => Math.round(v * 10) / 10;

// Ansicht von der Seite: Liste der Rechtecke, von hinten nach vorne.
export function ansicht(szene, richtung) {
  const phi = rad(WINKEL[richtung]);
  const u = [Math.cos(phi), Math.sin(phi)];      // Richtung zum Betrachter
  const r = [-Math.sin(phi), Math.cos(phi)];     // rechts vom Betrachter
  return szene.map((f, i) => {
    const mitte = f.x * r[0] + f.y * r[1];
    const tiefe = f.x * u[0] + f.y * u[1];
    let breite;
    if (f.art === 'zylinder') breite = f.w;
    else {
      const th = rad(f.rot || 0);
      const a = [Math.cos(th), Math.sin(th)], b = [-Math.sin(th), Math.cos(th)];
      breite = f.w * Math.abs(a[0] * r[0] + a[1] * r[1]) + f.d * Math.abs(b[0] * r[0] + b[1] * r[1]);
    }
    return { i, mitte, breite, h: f.h, farbe: f.farbe, art: f.art, tiefe };
  }).sort((p, q) => p.tiefe - q.tiefe);
}

// Signatur einer Ansicht: Rechtecke mit Farbe, auf eine Nachkommastelle gerundet.
export function signatur(szene, richtung) {
  return ansicht(szene, richtung).map(s => [r1(s.mitte), r1(s.breite), s.h, s.farbe].join('|')).sort().join(';');
}

// Wie verschieden sehen zwei Ansichten aus? Farbreihenfolge anders = 99, sonst grösster Unterschied in Längeneinheiten.
export function abstand(szene, r1_, r2_) {
  const links = (richtung) => ansicht(szene, richtung).sort((p, q) => p.mitte - q.mitte || p.breite - q.breite);
  const a = links(r1_), b = links(r2_);
  let m = 0;
  for (let k = 0; k < a.length; k++) {
    if (a[k].farbe !== b[k].farbe || a[k].art !== b[k].art) return 99;
    m = Math.max(m, Math.abs(a[k].mitte - b[k].mitte), Math.abs(a[k].breite - b[k].breite), Math.abs(a[k].h - b[k].h));
  }
  return m;
}

export function formName(f) {
  if (f.art === 'zylinder') return 'Zylinder';
  return f.w === f.d && f.h === f.w ? 'Würfel' : 'Quader';
}

// Erklärtext zur richtigen Ansicht.
export function erklaerung(szene, richtung) {
  const von = ansicht(szene, richtung).sort((p, q) => p.mitte - q.mitte);
  const namen = von.map(s => `${FARB_ADJ[s.farbe]} ${formName(szene[s.i])}`);
  let auf;
  const zyl = von.filter(s => s.art === 'zylinder');
  if (zyl.length === 1) auf = zyl[0];
  else { const hoch = Math.max(...von.map(s => s.h)); auf = von.find(s => s.h === hoch); }
  const pos = von.indexOf(auf);
  const ort = pos === 0 ? 'ganz links' : pos === von.length - 1 ? 'ganz rechts' : 'weiter in der Mitte';
  const kenn = zyl.length === 1 ? 'der einzige Zylinder' : 'der höchste Körper';
  return `Von dieser Seite sieht man von links nach rechts: ${namen.join(', ')}. Formen, die hintereinander stehen, verdecken sich. Auffällig ist ${kenn}: der ${FARB_ADJ[auf.farbe]} ${formName(szene[auf.i])}. Er steht von dieser Seite aus ${ort}.`;
}

const f2 = (v) => Math.round(v * 100) / 100;

// Seitenansicht als SVG: Formen auf einer grauen Bodenlinie, hinten zuerst gezeichnet.
export function renderSeite(szene, richtung) {
  const M = 22, x0 = 150, boden = 112;
  let s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" role="img" aria-hidden="true"><rect width="300" height="130" fill="#fff"/>';
  for (const v of ansicht(szene, richtung)) {
    const x = x0 + (v.mitte - v.breite / 2) * M, h = v.h * M;
    s += `<rect x="${f2(x)}" y="${f2(boden - h)}" width="${f2(v.breite * M)}" height="${f2(h)}" fill="${FARBEN[v.farbe]}" stroke="#111" stroke-width="2"/>`;
  }
  return s + `<line x1="6" y1="${boden}" x2="294" y2="${boden}" stroke="#888" stroke-width="4"/></svg>`;
}

// Ansicht von oben mit acht Pfeilen. sel = gewählte Richtung (blau), richtig = richtige Richtung (grün, erst nach dem Prüfen).
export function renderOben(szene, sel = null, richtig = null) {
  const c = 125, M = 14;
  let s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" role="img" aria-hidden="true"><rect width="250" height="250" fill="#cfcfcf"/>';
  s += `<rect x="${c - 70}" y="${c - 70}" width="140" height="140" fill="#fff" stroke="#111" stroke-width="2"/>`;
  for (const f of szene) {
    const px = c + f.x * M, py = c - f.y * M;
    if (f.art === 'zylinder') s += `<circle cx="${f2(px)}" cy="${f2(py)}" r="${f2(f.w / 2 * M)}" fill="${FARBEN[f.farbe]}" stroke="#111" stroke-width="2"/>`;
    else {
      const th = rad(f.rot || 0), co = Math.cos(th), si = Math.sin(th);
      const pts = [[-f.w / 2, -f.d / 2], [f.w / 2, -f.d / 2], [f.w / 2, f.d / 2], [-f.w / 2, f.d / 2]].map(([a, b]) => `${f2(c + (f.x + a * co - b * si) * M)},${f2(c - (f.y + a * si + b * co) * M)}`);
      s += `<polygon points="${pts.join(' ')}" fill="${FARBEN[f.farbe]}" stroke="#111" stroke-width="2"/>`;
    }
  }
  const pos = { N: [0, -100], NO: [93, -93], O: [100, 0], SO: [93, 93], S: [0, 100], SW: [-93, 93], W: [-100, 0], NW: [-93, -93] };
  for (const d of RICHTUNGEN) {
    const [ax, ay] = pos[d];
    const grad = Math.round(Math.atan2(ax, -ay) * 180 / Math.PI);   // Pfeil zeigt zur Mitte
    const fill = d === richtig ? '#1b8a3a' : d === sel ? '#1e63e9' : '#fff';
    s += `<g data-dir="${d}" style="cursor:pointer" transform="translate(${c + ax} ${c + ay}) rotate(${grad})"><circle r="17" fill="transparent"/>`
      + `<polygon points="0,13 11,-2 4,-2 4,-13 -4,-13 -4,-2 -11,-2" fill="${fill}" stroke="#111" stroke-width="2"/></g>`;
  }
  return s + '</svg>';
}
