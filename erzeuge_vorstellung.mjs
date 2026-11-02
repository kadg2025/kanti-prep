// Erzeugt die festen Aufgaben für «Vorstellungsvermögen» (Multicheck IMS):
//   Räumliches Sehen (10 + 1 Beispiel) und Abwicklungen (10 + 1 Beispiel).
// Aufruf: node erzeuge_vorstellung.mjs
//   → schreibt app/lib/multicheck/vorstellung_daten.js und preview/vorstellung.html (Vorschau mit Lösungen)
// Aufgaben, die nicht eindeutig sind, werden verworfen und neu gewürfelt. Fester Startwert.
import fs from 'node:fs';
import * as R from './app/lib/multicheck/raeumlich.mjs';
import * as N from './app/lib/multicheck/netz.mjs';

function prng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = prng(20261104);
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const wahl = (l) => l[zahl(0, l.length - 1)];
const mischen = (l) => { const a = l.slice(); for (let i = a.length - 1; i > 0; i--) { const j = zahl(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ─── Räumliches Sehen ───────────────────────────────────────────────────────
const MIN_ABSTAND = 0.6;   // Längeneinheiten: so verschieden müssen zwei Ansichten mindestens sein

function szene(anzahl, farbenAnzahl, schwierigkeit) {
  for (let versuch = 0; versuch < 20000; versuch++) {
    const farben = mischen(Object.keys(R.FARBEN)).slice(0, farbenAnzahl);
    const formen = [];
    let ok = true;
    for (let k = 0; k < anzahl && ok; k++) {
      let f = null;
      for (let t = 0; t < 60 && !f; t++) {
        const zyl = rnd() < 0.35;
        const w = wahl([1, 1.5, 2]);
        const wuerfel = !zyl && rnd() < 0.3;
        const d = zyl ? w : wuerfel ? w : wahl([1, 1.5, 2]);
        const h = wuerfel ? w : wahl([1, 1.5, 2, 2.5, 3, 4]);
        const drehen = schwierigkeit === 0 ? 0 : rnd() < (schwierigkeit === 1 ? 0.4 : 0.7) ? wahl(schwierigkeit === 1 ? [30, 45, 60] : [15, 30, 45, 60, 75]) : 0;
        const cand = { art: zyl ? 'zylinder' : 'quader', x: wahl([-3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5]), y: wahl([-3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5]), w, d, rot: zyl ? 0 : drehen, h, farbe: wahl(farben) };
        const rb = (g) => (g.art === 'zylinder' ? g.w / 2 : Math.hypot(g.w, g.d) / 2);
        if (Math.hypot(cand.x, cand.y) + rb(cand) > 4.5) continue;
        if (formen.some(g => Math.hypot(g.x - cand.x, g.y - cand.y) < rb(g) + rb(cand) + 0.3)) continue;
        f = cand;
      }
      if (!f) ok = false; else formen.push(f);
    }
    if (!ok || new Set(formen.map(f => f.farbe)).size < Math.min(2, farbenAnzahl)) continue;
    // Eindeutigkeit: alle acht Ansichten verschieden (Signatur) und deutlich verschieden (Abstand)
    const sigs = R.RICHTUNGEN.map(r => R.signatur(formen, r));
    if (new Set(sigs).size !== 8) continue;
    let eindeutig = true;
    for (let a = 0; a < 8 && eindeutig; a++) for (let b = a + 1; b < 8; b++) if (R.abstand(formen, R.RICHTUNGEN[a], R.RICHTUNGEN[b]) < MIN_ABSTAND) { eindeutig = false; break; }
    if (eindeutig) return formen;
  }
  throw new Error('keine eindeutige Szene gefunden');
}

// Richtungen: 1 bis 4 gerade, danach die Diagonalen und zwei weitere. Jede Richtung kommt mindestens einmal vor.
const gerade = mischen(['N', 'O', 'S', 'W']);
const diagonal = mischen(['NO', 'SO', 'SW', 'NW']);
const extra = mischen(R.RICHTUNGEN).slice(0, 2);
const richtungen = [...gerade, ...mischen([...diagonal, ...extra])];
const raeumlich = richtungen.map((richtig, i) => {
  const anzahl = i < 3 ? 4 : i < 7 ? 5 : 6, schw = i < 3 ? 0 : i < 7 ? 1 : 2;
  const formen = szene(anzahl, i < 3 ? 2 : 3, schw);
  return { szene: formen, richtig, why: R.erklaerung(formen, richtig) };
});
const demoRaeumlich = (() => {
  const formen = szene(3, 2, 0);
  return { szene: formen, richtig: 'SW', why: R.erklaerung(formen, 'SW') };
})();

// ─── Abwicklungen ───────────────────────────────────────────────────────────
const NETZE = N.wuerfelnetze();

function netz(k) {
  const richt = mischen(N.RICHTUNGSABHAENGIG);
  let satz;
  if (k === 3) satz = [...richt.slice(0, 2), wahl(N.MUSTER.filter(m => !richt.slice(0, 2).includes(m)))];
  else if (k === 4) satz = [...richt.slice(0, 3), wahl(N.MUSTER.filter(m => !richt.slice(0, 3).includes(m)))];
  else satz = [...richt, wahl(['leer', 'kreuz'])].slice(0, 5);
  const muster = mischen([...satz, ...Array.from({ length: 6 - k }, () => wahl(satz))]);
  const zellen = N.symmetrie(wahl(NETZE), zahl(0, 7)).map((z, i) => ({ c: z.c, z: z.z, p: muster[i], rot: zahl(0, 3) }));
  return zellen;
}

const frei = (flaechen) => flaechen.map(f => ({ ...f }));
const sichtbarIdx = (flaechen, ecke, idx) => idx.some(i => N.sichtbar(flaechen, ecke).includes(flaechen[i]));
const nameM = (p) => `«${N.MUSTER_NAME[p]}»`;

function falsch(wahr, art) {
  const f = frei(wahr);
  let geaendert, why;
  if (art === 'drehen') {
    const i = wahl(f.map((x, k) => k).filter(k => N.RICHTUNGSABHAENGIG.includes(f[k].p)));
    f[i].rot = (f[i].rot + 1) % 4; geaendert = [i];
    why = `Bei dieser Figur ist das Muster ${nameM(f[i].p)} um 90 Grad gedreht.`;
  } else if (art === 'tauschen') {
    const paare = [];
    for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) if (f[i].p !== f[j].p) paare.push([i, j]);
    const [i, j] = wahl(paare);
    const t = { p: f[i].p, rot: f[i].rot, m: f[i].m };
    Object.assign(f[i], { p: f[j].p, rot: f[j].rot, m: f[j].m }); Object.assign(f[j], t);
    geaendert = [i, j];
    why = `Bei dieser Figur sind die Muster ${nameM(f[j].p)} und ${nameM(f[i].p)} vertauscht.`;
  } else if (art === 'ersetzen') {
    const i = zahl(0, 5), alt = f[i].p, neu = wahl(N.MUSTER.filter(m => m !== alt));
    f[i].p = neu; geaendert = [i];
    why = `Bei dieser Figur ist das Muster ${nameM(alt)} durch ${nameM(neu)} ersetzt.`;
  } else {
    return { flaechen: N.spiegeln(f), geaendert: [0, 1, 2, 3, 4, 5], why: 'Diese Figur ist das Spiegelbild des richtigen Würfels.' };
  }
  return { flaechen: f, geaendert, why };
}

function aufgabeNetz(k) {
  for (let versuch = 0; versuch < 5000; versuch++) {
    const zellen = netz(k);
    const wahr = N.falten(zellen);
    if (!wahr) throw new Error('Netz lässt sich nicht falten');
    const eckeRichtig = wahl(N.ECKEN);
    const optionen = [{ ecke: eckeRichtig, flaechen: N.sichtbar(wahr, eckeRichtig), why: '' }];
    let ok = true;
    for (const art of ['drehen', 'tauschen', 'ersetzen', 'spiegeln']) {
      let gefunden = null;
      for (let t = 0; t < 200 && !gefunden; t++) {
        const m = falsch(wahr, art);
        const ecken = N.ECKEN.filter(e => sichtbarIdx(m.flaechen, e, m.geaendert));
        const ecke = wahl(ecken);
        const drei = N.sichtbar(m.flaechen, ecke);
        if (N.passt(wahr, drei, ecke)) continue;                                           // passt an irgendeiner Ecke: verwerfen
        const schl = N.ansichtSchluessel(drei, ecke);
        if (optionen.some(o => N.ansichtSchluessel(o.flaechen, o.ecke) === schl)) continue; // sieht aus wie eine andere Option
        gefunden = { ecke, flaechen: drei, why: m.why };
      }
      if (!gefunden) { ok = false; break; }
      optionen.push(gefunden);
    }
    if (!ok) continue;
    // Erklärung zum richtigen Würfel
    const teile = [];
    const f = wahr;
    const nachbar = [], gegen = [];
    for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) {
      if (f[i].p === f[j].p) continue;
      const d = f[i].n[0] * f[j].n[0] + f[i].n[1] * f[j].n[1] + f[i].n[2] * f[j].n[2];
      if (d === 0 && f[i].p !== 'leer' && f[j].p !== 'leer') nachbar.push([i, j]);
      if (d === -1) gegen.push([i, j]);
    }
    if (nachbar.length) { const [i, j] = nachbar[0]; teile.push(`${N.flaecheNom(f[i].p)} liegt neben ${N.flaecheDat(f[j].p)}.`); }
    if (gegen.length) { const [i, j] = gegen[gegen.length - 1]; teile.push(`${N.flaecheNom(f[i].p)} liegt gegenüber von ${N.flaecheDat(f[j].p)}.`); }
    return { zellen, optionen, why: teile.join(' ') };
  }
  throw new Error('keine eindeutige Abwicklung gefunden');
}

// Position der richtigen Figur über die zehn Aufgaben verteilen (A bis E).
const pos = mischen([0, 1, 2, 3, 4, 0, 1, 2, 3, 4]);
function mitPosition(a, p) {
  const richtig = a.optionen[0], rest = a.optionen.slice(1);
  rest.splice(p, 0, richtig);
  return { zellen: a.zellen, optionen: rest, richtig: p, why: a.why };
}
const ks = [3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
const netze = ks.map((k, i) => mitPosition(aufgabeNetz(k), pos[i]));
const demoNetz = mitPosition(aufgabeNetz(3), 2);

// ─── Speichern ──────────────────────────────────────────────────────────────
const daten = { raeumlich, demoRaeumlich, netze, demoNetz };
fs.writeFileSync('app/lib/multicheck/vorstellung_daten.js',
  '// Multicheck IMS, Vorstellungsvermögen: feste Aufgaben, erzeugt mit erzeuge_vorstellung.mjs.\n// Nicht von Hand ändern: Skript anpassen und neu erzeugen.\nconst vdaten = '
  + JSON.stringify(daten).replace(/\},\{"szene"/g, '},\n{"szene"').replace(/\},\{"zellen"/g, '},\n{"zellen"').replace(/^\{"raeumlich":\[/, '{"raeumlich":[\n') + ';\n\nexport default vdaten;\n');

// ─── Vorschauseite mit allen Aufgaben und Lösungen ──────────────────────────
const kopf = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Vorschau Vorstellungsvermögen</title><style>
body{font-family:Segoe UI,sans-serif;margin:20px;background:#f4f4f8;color:#222}h1{font-size:22px}h2{margin-top:30px}
.k{background:#fff;border:1px solid #ccc;border-radius:10px;padding:12px;margin:12px 0;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start}
.k svg{width:240px;height:auto;border:1px solid #999;display:block}.k .netz svg{width:200px}.w svg{width:110px}
.o{text-align:center;font-weight:bold}.o.r svg{outline:4px solid #1b8a3a}.t{max-width:420px;font-size:13px;line-height:1.5}
.f{display:flex;gap:8px;flex-wrap:wrap}</style></head><body><h1>Vorstellungsvermögen: alle Aufgaben mit Lösung</h1><p>Grün markiert ist die richtige Antwort.</p>`;
let html = kopf + '<h2>Räumliches Sehen</h2>';
[demoRaeumlich, ...raeumlich].forEach((q, i) => {
  html += `<div class="k"><div><b>${i === 0 ? 'Beispiel' : 'Aufgabe ' + i}</b><br>${R.renderSeite(q.szene, q.richtig)}</div><div>${R.renderOben(q.szene, null, q.richtig)}</div><div class="t"><b>Richtig: ${R.PFEIL_TEXT[q.richtig]}</b><br>${q.why}</div></div>`;
});
html += '<h2>Abwicklungen</h2>';
[demoNetz, ...netze].forEach((q, i) => {
  html += `<div class="k"><div class="netz"><b>${i === 0 ? 'Beispiel' : 'Aufgabe ' + i}</b><br>${N.renderNetz(q.zellen)}</div><div class="f">`;
  q.optionen.forEach((o, k) => { html += `<div class="o w${k === q.richtig ? ' r' : ''}">${N.renderWuerfel(o.flaechen, o.ecke)}${'ABCDE'[k]}</div>`; });
  html += `</div><div class="t"><b>Richtig: ${'ABCDE'[q.richtig]}</b><br>${q.why}<br>${q.optionen.map((o, k) => (k === q.richtig ? '' : `<br><b>${'ABCDE'[k]}:</b> ${o.why}`)).join('')}</div></div>`;
});
fs.mkdirSync('preview', { recursive: true });
fs.writeFileSync('preview/vorstellung.html', html + '</body></html>');
console.log('Richtungen:', richtungen.join(' '), '| Positionen:', netze.map(q => 'ABCDE'[q.richtig]).join(''));
