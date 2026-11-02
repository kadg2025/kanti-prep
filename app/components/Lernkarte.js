'use client';

import { useState } from 'react';
import { lernkarten } from '../lib/lernkarten';
import { renderFigur } from '../lib/multicheck/figur';
import { renderRaster } from '../lib/multicheck/raster';
import { SENSEI_SPRUECHE } from '../lib/sensei_sprueche';
import { DOJO_GUERTEL, ladeDojo, speichereDojo, guertelIndex, verbucheAntwort } from '../lib/dojo_guertel';

const KACHEL_COLORS = ['#534AB7', '#0f766e', '#f59e0b', '#ef4444', '#3b82f6', '#ec4899', '#14b8a6', '#8b5cf6'];

// Farbmarkierung im Kartentext: [[tag|Text]] setzt den Text farbig und halbfett.
// Erster Wert ist der helle Modus, zweiter der Dunkelmodus; beide haben auf dem
// Kartenhintergrund (dm.card) mindestens 4.5:1 Kontrast. Hier anpassen, wenn
// eine Farbe geaendert werden soll.
const KARTEN_FARBEN = {
  pr:  { light: '#15803d', dark: '#4ade80' },  // Praesens
  pt:  { light: '#1d4ed8', dark: '#93c5fd' },  // Praeteritum
  pf:  { light: '#6d28d9', dark: '#c4b5fd' },  // Perfekt
  pq:  { light: '#0f766e', dark: '#5eead4' },  // Plusquamperfekt
  fu:  { light: '#be123c', dark: '#fda4af' },  // Futur I
  vv:  { light: '#c2410c', dark: '#fdba74' },  // Vollverb
  hv:  { light: '#0e7490', dark: '#67e8f9' },  // Hilfsverb
  mv:  { light: '#a21caf', dark: '#f0abfc' },  // Modalverb
  k1:  { light: '#4d7c0f', dark: '#bef264' },  // Konjunktiv I
  k2:  { light: '#a16207', dark: '#fcd34d' },  // Konjunktiv II
  aen: { light: '#713f12', dark: '#fde68a', bg: { light: '#fef08a', dark: '#4a3a0b' } },  // der Teil, der sich aendert

  // Satzglieder und Faelle: Subjekt/Nominativ, Akkusativ, Dativ, Genitiv
  // teilen sich je eine Farbe, weil sie zusammengehoeren.
  su:  { light: '#15803d', dark: '#4ade80' },  // Subjekt
  nom: { light: '#15803d', dark: '#4ade80' },  // Nominativ
  ao:  { light: '#1d4ed8', dark: '#93c5fd' },  // Akkusativobjekt
  akk: { light: '#1d4ed8', dark: '#93c5fd' },  // Akkusativ
  do:  { light: '#c2410c', dark: '#fdba74' },  // Dativobjekt
  dat: { light: '#c2410c', dark: '#fdba74' },  // Dativ
  go:  { light: '#a21caf', dark: '#f0abfc' },  // Genitivobjekt
  gen: { light: '#a21caf', dark: '#f0abfc' },  // Genitiv
  prd: { light: '#6d28d9', dark: '#c4b5fd' },  // Praedikat
  pg:  { light: '#0f766e', dark: '#5eead4' },  // Praepositionalgefuege

  // Die fuenf Wortarten
  nn:  { light: '#15803d', dark: '#4ade80' },  // Nomen
  vb:  { light: '#be123c', dark: '#fda4af' },  // Verb
  adj: { light: '#a16207', dark: '#fcd34d' },  // Adjektiv
  pro: { light: '#6d28d9', dark: '#c4b5fd' },  // Pronomen
  pa:  { light: '#0f766e', dark: '#5eead4' },  // Partikel

  // Satzbau
  hs:   { light: '#15803d', dark: '#4ade80' },  // Hauptsatz
  ns:   { light: '#be123c', dark: '#fda4af' },  // Nebensatz
  konj: { light: '#c2410c', dark: '#fdba74' },  // Konjunktion

  // Handlungsrichtung
  akt: { light: '#0e7490', dark: '#67e8f9' },  // Aktiv
  pas: { light: '#a21caf', dark: '#f0abfc' },  // Passiv

  // Rede
  dr: { light: '#1d4ed8', dark: '#93c5fd' },  // direkte Rede
  ir: { light: '#a16207', dark: '#fcd34d' },  // indirekte Rede

  // Multicheck: gruen = richtig/Regel, rot = Falle/Fehler, blau = Merkhilfe/Schluesselwort
  mcok:    { light: '#15803d', dark: '#4ade80' },
  mcfalle: { light: '#be123c', dark: '#fda4af' },
  mcmerk:  { light: '#1d4ed8', dark: '#93c5fd' },

  // Wortschatz
  syn: { light: '#15803d', dark: '#4ade80' },  // gleiche Bedeutung
  geg: { light: '#be123c', dark: '#fda4af' },  // gegenteilige Bedeutung
};

const MARKIERUNG = /\[\[([a-zA-Z0-9]+)\|([^\]]*)\]\]/g;
const KLAMMER_RESTE = /\[\[[a-zA-Z0-9]*\|?|\]\]/g;

// Eine unvollstaendige Markierung soll den Text zeigen, nicht die Klammern.
function roh(teil) {
  return teil.includes('[[') || teil.includes(']]') ? teil.replace(KLAMMER_RESTE, '') : teil;
}

// Gibt den Text mit farbigen Stellen zurueck. Ohne Markierung kommt der Text
// unveraendert zurueck, damit sich am bisherigen Aussehen nichts aendert.
// Unbekannte Tags erscheinen als normaler Text, ohne Klammern und ohne Farbe.
function Markiert({ text, dark }) {
  if (typeof text !== 'string' || !text.includes('[[')) return text ?? null;
  const teile = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(MARKIERUNG)) {
    if (m.index > last) teile.push(<span key={key++}>{roh(text.slice(last, m.index))}</span>);
    const farbe = KARTEN_FARBEN[m[1].toLowerCase()];
    if (farbe) {
      const bg = farbe.bg ? (dark ? farbe.bg.dark : farbe.bg.light) : undefined;
      teile.push(
        <span key={key++} style={{ color: dark ? farbe.dark : farbe.light, fontWeight: '600', background: bg, borderRadius: bg ? '4px' : undefined, padding: bg ? '1px 4px' : undefined }}>{m[2]}</span>
      );
    } else {
      teile.push(<span key={key++}>{m[2]}</span>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) teile.push(<span key={key++}>{roh(text.slice(last))}</span>);
  return teile;
}

const BELT_LEVELS = [
  { min: 0, max: 0, label: 'Weisser Gürtel', fill: '#f3f4f6', border: '#9ca3af' },
  { min: 1, max: 2, label: 'Gelber Gürtel', fill: '#facc15', border: '#ca8a04' },
  { min: 3, max: 4, label: 'Oranger Gürtel', fill: '#fb923c', border: '#c2410c' },
  { min: 5, max: 5, label: 'Grüner Gürtel', fill: '#4ade80', border: '#15803d' },
  { min: 6, max: 6, label: 'Blauer Gürtel', fill: '#60a5fa', border: '#1d4ed8' },
  { min: 7, max: 7, label: 'Brauner Gürtel', fill: '#b45309', border: '#78350f' },
  { min: 8, max: 8, label: 'Schwarzer Gürtel', fill: '#1f2937', border: '#000000' },
];

function beltFor(count) {
  return BELT_LEVELS.find(b => count >= b.min && count <= b.max) || BELT_LEVELS[BELT_LEVELS.length - 1];
}

export const GLOBAL_KEYFRAMES = `
@keyframes fadeSlideIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes cardEnter { from { opacity: 0; transform: translateX(12px); } to { opacity: 1; transform: translateX(0); } }
@keyframes pop { 0% { transform: scale(0.6); opacity: 0; } 60% { transform: scale(1.18); opacity: 1; } 100% { transform: scale(1); } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.kp-tile { transition: transform 0.12s ease; }
.kp-tile:active { transform: scale(0.96); }
@media (prefers-reduced-motion: reduce) {
  *[style*="animation"] { animation: none !important; }
  .kp-tile { transition: none; }
}
`;

function useLernkarteDone() {
  const [done, setDone] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('kp_lernkarte') || '[]')); } catch { return new Set(); }
  });
  const markDone = (id) => {
    setDone(prev => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      try { localStorage.setItem('kp_lernkarte', JSON.stringify([...next])); } catch {}
      return next;
    });
  };
  return { done, markDone };
}

function TreeNode({ children, prime, dm, dark }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      minWidth: '34px', height: '34px', padding: '0 6px', borderRadius: prime ? '50%' : '8px',
      border: prime ? '2.5px solid #22c55e' : `2px solid ${dm.border}`,
      background: prime ? (dark ? '#16291d' : '#dcfce7') : dm.bg3,
      color: prime ? (dark ? '#86efac' : '#166534') : dm.text,
      fontWeight: '700', fontSize: '15px',
    }}>{children}</span>
  );
}

function Faktorbaum({ n, dm, dark }) {
  const trees = {
    24: [[24, 2, 12], [12, 2, 6], [6, 2, 3]],
    36: [[36, 2, 18], [18, 2, 9], [9, 3, 3]],
  };
  const rows = trees[n] || [];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '14px 0', alignItems: 'center' }}>
      {rows.map(([val, left, right], i) => {
        const rightIsPrime = i === rows.length - 1;
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', animation: `fadeSlideIn 320ms ease ${i * 180}ms both`, flexWrap: 'wrap', justifyContent: 'center' }}>
            <TreeNode dm={dm} dark={dark}>{val}</TreeNode>
            <span style={{ color: dm.text3, fontSize: '15px' }}>→</span>
            <TreeNode dm={dm} dark={dark} prime>{left}</TreeNode>
            <span style={{ color: dm.text3, fontSize: '15px' }}>·</span>
            <TreeNode dm={dm} dark={dark} prime={rightIsPrime}>{right}</TreeNode>
          </div>
        );
      })}
    </div>
  );
}

function Chip({ v, hl, dm, dark }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '30px', height: '30px',
      margin: '2px', padding: '0 6px', borderRadius: '8px', fontWeight: '700', fontSize: '14px',
      background: hl ? (dark ? '#16291d' : '#dcfce7') : dm.bg3,
      color: hl ? (dark ? '#86efac' : '#166534') : dm.text2,
      border: hl ? '2px solid #22c55e' : `1px solid ${dm.border}`,
    }}>{v}</span>
  );
}

function GgtListen({ dm, dark }) {
  const a = [1, 2, 3, 4, 6, 12];
  const b = [1, 2, 3, 6, 9, 18];
  const common = new Set([1, 2, 3, 6]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0' }}>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: '700', color: dm.text2 }}>Teiler von 12</p>
        <div>{a.map(v => <Chip key={v} v={v} hl={common.has(v)} dm={dm} dark={dark} />)}</div>
      </div>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: '700', color: dm.text2 }}>Teiler von 18</p>
        <div>{b.map(v => <Chip key={v} v={v} hl={common.has(v)} dm={dm} dark={dark} />)}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
        <span style={{ fontSize: '13px', color: dm.text2, fontWeight: '600' }}>ggT =</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '42px', height: '42px', borderRadius: '10px', background: '#22c55e', color: '#fff', fontWeight: '800', fontSize: '18px' }}>6</span>
      </div>
    </div>
  );
}

function KgvReihen({ dm, dark }) {
  const a = [4, 8, 12, 16, 20, 24];
  const b = [6, 12, 18, 24];
  const common = new Set([12, 24]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0' }}>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: '700', color: dm.text2 }}>4er-Reihe</p>
        <div>{a.map(v => <Chip key={v} v={v} hl={common.has(v)} dm={dm} dark={dark} />)}</div>
      </div>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: '700', color: dm.text2 }}>6er-Reihe</p>
        <div>{b.map(v => <Chip key={v} v={v} hl={common.has(v)} dm={dm} dark={dark} />)}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
        <span style={{ fontSize: '13px', color: dm.text2, fontWeight: '600' }}>kgV =</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '42px', height: '42px', borderRadius: '10px', background: '#22c55e', color: '#fff', fontWeight: '800', fontSize: '18px' }}>12</span>
      </div>
    </div>
  );
}

function ChipsVisual({ chips, dm, dark }) {
  const [open, setOpen] = useState(null);
  const active = chips.find(c => c.n === open);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
        {chips.map(c => (
          <button
            key={c.n}
            onClick={() => setOpen(o => o === c.n ? null : c.n)}
            className="kp-tile"
            style={{
              padding: '8px 16px', borderRadius: '20px', border: `2px solid ${open === c.n ? '#534AB7' : dm.border}`,
              background: open === c.n ? (dark ? '#2b2658' : '#ede9fc') : dm.bg3,
              color: open === c.n ? (dark ? '#c4b5fd' : '#534AB7') : dm.text2,
              fontWeight: '700', fontSize: '15px', cursor: 'pointer',
            }}
          >
            {c.n}
          </button>
        ))}
      </div>
      {active && (
        <p key={active.n} style={{ margin: '12px 0 0', fontSize: '13px', lineHeight: '1.6', color: dm.text2, background: dm.bg3, borderRadius: '10px', padding: '10px 12px', animation: 'fadeSlideIn 200ms ease' }}>
          {active.prefix ?? ''}{active.n}: {active.regel}
        </p>
      )}
    </div>
  );
}

const DIAGRAM_COLORS = {
  accent: '#534AB7',
  ok: '#22c55e',
  warn: '#f59e0b',
  danger: '#ef4444',
};

function diagramStroke(el, dm) {
  return DIAGRAM_COLORS[el.color] || dm.text2;
}

// Winkel in Grad, SVG-Konvention (0° = nach rechts, y-Achse zeigt nach unten).
// Der Bogen wird als Polylinie auf dem Kreis um (cx, cy) abgetastet - das macht
// ihn unabhängig von den fehleranfälligen large-arc/sweep-Flags des SVG-Arc-Befehls
// und garantiert, dass er exakt um den angegebenen Mittelpunkt liegt (immer der
// kürzere Weg zwischen den beiden Winkeln).
function arcPath(cx, cy, r, startDeg, endDeg, segments = 16) {
  let delta = endDeg - startDeg;
  while (delta > 180) delta -= 360;
  while (delta < -180) delta += 360;
  const toRad = (d) => (d * Math.PI) / 180;
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const a = toRad(startDeg + (delta * i) / segments);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M ${pts[0]} ` + pts.slice(1).map((p) => `L ${p}`).join(' ');
}

function DiagramEl({ el, dm }) {
  const stroke = diagramStroke(el, dm);
  const strokeWidth = el.strokeWidth || 2;
  const dash = el.dashed ? '4 4' : undefined;
  switch (el.type) {
    case 'line':
      return <line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={dash} strokeLinecap="round" />;
    case 'rect':
      return <rect x={el.x} y={el.y} width={el.w} height={el.h} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={dash} fill={el.fill ? DIAGRAM_COLORS[el.fill] || el.fill : 'none'} />;
    case 'circle':
      return <circle cx={el.cx} cy={el.cy} r={el.r} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={dash} fill={el.fill ? DIAGRAM_COLORS[el.fill] || el.fill : 'none'} />;
    case 'arc':
      return <path d={arcPath(el.cx, el.cy, el.r, el.startAngle, el.endAngle)} stroke={el.color ? stroke : DIAGRAM_COLORS.warn} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />;
    case 'path':
      return <path d={el.d} stroke={stroke} strokeWidth={strokeWidth} strokeDasharray={dash} fill={el.fill ? DIAGRAM_COLORS[el.fill] || el.fill : 'none'} />;
    case 'text':
      return (
        <text x={el.x} y={el.y} fontSize={el.size || 13} fontWeight={el.bold ? 700 : 600} fill={el.color ? stroke : dm.text} textAnchor={el.anchor || 'middle'}>
          {el.label}
        </text>
      );
    default:
      return null;
  }
}

function DiagramVisual({ diagram, dm }) {
  if (!diagram) return null;
  return (
    <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'center', animation: 'fadeSlideIn 320ms ease both' }}>
      <svg viewBox={diagram.viewBox || '0 0 200 160'} style={{ width: '100%', maxWidth: '280px', display: 'block' }}>
        {(diagram.elements || []).map((el, i) => <DiagramEl key={i} el={el} dm={dm} />)}
      </svg>
    </div>
  );
}

function VisualBlock({ type, chips, diagram, dm, dark }) {
  if (type === 'chips') return <ChipsVisual chips={chips} dm={dm} dark={dark} />;
  if (type === 'faktorbaum24') return <Faktorbaum n={24} dm={dm} dark={dark} />;
  if (type === 'faktorbaum36') return <Faktorbaum n={36} dm={dm} dark={dark} />;
  if (type === 'ggt_listen') return <GgtListen dm={dm} dark={dark} />;
  if (type === 'kgv_reihen') return <KgvReihen dm={dm} dark={dark} />;
  if (type === 'diagram') return <DiagramVisual diagram={diagram} dm={dm} />;
  return null;
}

// ─── DOJO: japanischer Look + Gürtel ──────────────────────────────────────
export const DOJO_ROT = '#B3202A';

export function dojoPalette(dark) {
  return {
    rot: DOJO_ROT,
    rotText: dark ? '#f0727a' : DOJO_ROT,
    cremeKarte: dark ? '#26211f' : '#fbf5e6',
    rand: dark ? '#4a3a3a' : '#e4d4b4',
    tinte: dark ? '#f3ece0' : '#24232a',
    tinte2: dark ? '#cbbfae' : '#4a4750',
  };
}

// Hanko-Stempel: rote Fläche, Zeichen in Creme, leicht gedreht.
export function Hanko({ zeichen = '道', size = 34, dark }) {
  const dj = dojoPalette(dark);
  return (
    <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: `${size}px`, height: `${size}px`, borderRadius: '8px', background: dj.rot, color: '#fbf5e6', fontSize: `${Math.round(size * 0.62)}px`, fontWeight: '800', lineHeight: 1, transform: 'rotate(-4deg)', boxShadow: 'inset 0 0 0 2px rgba(251,245,230,0.35)', flexShrink: 0 }}>{zeichen}</span>
  );
}

export function DojoKopf({ state, aufstieg, spruch, dark, isMobile }) {
  const dj = dojoPalette(dark);
  const idx = guertelIndex(state.xp);
  const g = DOJO_GUERTEL[idx];
  const naechster = DOJO_GUERTEL[idx + 1];
  const pct = naechster ? Math.round(((state.xp - g.xp) / (naechster.xp - g.xp)) * 100) : 100;
  return (
    <div style={{ background: dj.cremeKarte, border: `1px solid ${dj.rand}`, borderRadius: '14px', padding: isMobile ? '12px 14px' : '14px 18px', marginBottom: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', animation: aufstieg ? 'pop 500ms ease' : 'none' }}>
          <span style={{ width: '38px', height: '12px', borderRadius: '6px', background: g.fill, border: `2px solid ${g.border}`, boxSizing: 'border-box' }} />
          <span style={{ fontSize: '14px', fontWeight: '800', color: dj.tinte }}>{g.name}er Gürtel</span>
        </span>
        <span style={{ marginLeft: 'auto', fontSize: '13px', fontWeight: '800', color: dj.rotText }} title="Tage in Folge">🔥 {state.streak}</span>
      </div>
      <div style={{ height: '8px', borderRadius: '6px', background: dark ? '#3a3230' : '#eadfc6', margin: '10px 0 4px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, minWidth: pct > 0 ? '8px' : 0, background: dj.rot, borderRadius: '6px', transition: 'width 0.4s ease' }} />
      </div>
      <p style={{ margin: 0, fontSize: '11px', fontWeight: '700', color: dj.tinte2 }}>
        {naechster ? `${state.xp} / ${naechster.xp} XP bis ${naechster.name}` : `${state.xp} XP · höchster Gürtel erreicht`}
      </p>
      {spruch && <p style={{ margin: '8px 0 0', fontSize: '13px', fontStyle: 'italic', color: dj.tinte2 }}>«{spruch}»</p>}
    </div>
  );
}

export function AufstiegMeldung({ index, spruch, onClose, dark }) {
  const g = DOJO_GUERTEL[index];
  return (
    <div role="status" style={{ background: DOJO_ROT, color: '#fbf5e6', borderRadius: '14px', padding: '14px 16px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px', animation: 'pop 500ms ease' }}>
      <Hanko zeichen="昇" size={40} dark={dark} />
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: '15px', fontWeight: '800' }}>Neuer Gürtel: {g.name}</p>
        <p style={{ margin: '2px 0 0', fontSize: '13px' }}>«{spruch}»</p>
      </div>
      <button onClick={onClose} aria-label="Meldung schliessen" style={{ background: 'none', border: 'none', color: '#fbf5e6', fontSize: '20px', cursor: 'pointer' }}>✕</button>
    </div>
  );
}

function DojoOptionen({ karte, selected, onAnswer, dm, dark }) {
  const answered = selected !== undefined;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {karte.mcOptionen.map((opt, i) => {
        const isSel = i === selected;
        let bg = dm.card, border = dm.border, color = dm.text, anim = 'none';
        if (answered) {
          if (opt.correct) { bg = dm.okTint; border = '#22c55e'; color = dm.okText; if (isSel) anim = 'pop 350ms ease'; }
          else if (isSel) { bg = dark ? '#2a1515' : '#fef2f2'; border = '#ef4444'; color = '#ef4444'; anim = 'shake 350ms ease'; }
        }
        return (
          <button key={i} disabled={answered} onClick={() => onAnswer(i)}
            style={{ textAlign: 'left', padding: '12px 16px', borderRadius: '12px', border: `2px solid ${border}`, background: bg, color, fontSize: '14px', lineHeight: '1.5', fontWeight: opt.correct && answered ? '700' : '500', cursor: answered ? 'default' : 'pointer', animation: anim }}>
            {opt.correct && answered ? '✓ ' : isSel && !opt.correct ? '❌ ' : ''}{opt.text}
          </button>
        );
      })}
    </div>
  );
}

function KarteView({ karte, dm, dark, isMobile, revealed, onToggleLoesung, istDojo = false, mcSelected, onMcAnswer }) {
  const dj = dojoPalette(dark);
  const mc = istDojo && karte.mcOptionen;
  return (
    <div style={{ background: istDojo ? dj.cremeKarte : dm.card, border: `1px solid ${istDojo ? dj.rand : dm.border}`, borderLeft: istDojo ? `5px solid ${dj.rot}` : undefined, borderRadius: '16px', padding: isMobile ? '22px 18px' : '30px', minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
      <p style={{ margin: 0, fontSize: isMobile ? '17px' : '18px', lineHeight: '1.7', color: dm.text, whiteSpace: 'pre-wrap', fontWeight: karte.loesung ? '700' : '400' }}><Markiert text={karte.text} dark={dark} /></p>
      {karte.bilder && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          {karte.bilder.map(([x, y], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '24px', fontWeight: '700', color: dm.text }}>
              <span style={{ display: 'block', width: '84px', height: '84px', border: '1.5px solid #111', borderRadius: '6px', overflow: 'hidden', background: '#fff' }} dangerouslySetInnerHTML={{ __html: renderFigur(x, 'k' + i + 'a') }} />
              <span>→</span>
              <span style={{ display: 'block', width: '84px', height: '84px', border: '1.5px solid #111', borderRadius: '6px', overflow: 'hidden', background: '#fff' }} dangerouslySetInnerHTML={{ __html: renderFigur(y, 'k' + i + 'b') }} />
            </div>
          ))}
        </div>
      )}
      {karte.raster && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
          {karte.raster.map(([x, y], i) => (
            <div key={i} style={{ textAlign: 'center', color: dm.text, fontWeight: '700' }}>
              <span style={{ display: 'block', width: '130px', height: '124px', border: '1.5px solid #111', borderRadius: '6px', overflow: 'hidden', background: '#fff' }} dangerouslySetInnerHTML={{ __html: renderRaster(x - 1, 3 - y) }} />
              <span>{String(x) + String(y)}</span>
            </div>
          ))}
        </div>
      )}
      {karte.visual && <VisualBlock type={karte.visual} chips={karte.chips} diagram={karte.diagram} dm={dm} dark={dark} />}
      {mc && <DojoOptionen karte={karte} selected={mcSelected} onAnswer={onMcAnswer} dm={dm} dark={dark} />}
      {mc && karte.loesung && revealed && (
        <p key="loesung" style={{ margin: '4px 0 0', fontSize: '15px', lineHeight: '1.6', color: dm.text, whiteSpace: 'pre-wrap', animation: 'fadeSlideIn 200ms ease' }}><Markiert text={karte.loesung} dark={dark} /></p>
      )}
      {!mc && karte.loesung && (
        <div>
          <button
            onClick={onToggleLoesung}
            style={istDojo ? { padding: '9px 16px', background: revealed ? dj.rot : 'none', border: `1px solid ${dj.rot}`, borderRadius: '9px', fontSize: '13px', fontWeight: '700', color: revealed ? '#fbf5e6' : dj.rotText, cursor: 'pointer' } : { padding: '9px 16px', background: revealed ? dm.accentBg : dm.bg3, border: `1px solid ${revealed ? (dark ? '#4c3f8f' : '#c4b5fd') : dm.border}`, borderRadius: '9px', fontSize: '13px', fontWeight: '600', color: revealed ? (dark ? '#c4b5fd' : '#534AB7') : dm.text2, cursor: 'pointer' }}
          >
            {revealed ? 'Lösung ausblenden' : 'Lösung zeigen'}
          </button>
          {revealed && (
            <p key="loesung" style={{ margin: '12px 0 0', fontSize: '15px', lineHeight: '1.6', color: dm.text, whiteSpace: 'pre-wrap', animation: 'fadeSlideIn 200ms ease' }}><Markiert text={karte.loesung} dark={dark} /></p>
          )}
        </div>
      )}
    </div>
  );
}

function CheckView({ step, dm, dark, isMobile, selected, onAnswer }) {
  const answered = selected !== undefined;
  return (
    <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '16px', padding: isMobile ? '20px 18px' : '26px' }}>
      <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: '800', letterSpacing: '0.04em', textTransform: 'uppercase', color: dm.text3 }}>🥋 Dojo-Test</p>
      <p style={{ margin: '0 0 16px', fontSize: isMobile ? '16px' : '17px', fontWeight: '700', color: dm.text, lineHeight: '1.6' }}><Markiert text={step.frage} dark={dark} /></p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {step.optionen.map((opt, i) => {
          const isRichtig = opt.correct;
          const isSel = i === selected;
          let bg = dm.card, border = dm.border, textColor = dm.text, anim = 'none';
          if (answered) {
            if (isRichtig) { bg = dm.okTint; border = '#22c55e'; textColor = dm.okText; if (isSel) anim = 'pop 350ms ease'; }
            else if (isSel) { bg = dark ? '#2a1515' : '#fef2f2'; border = '#ef4444'; textColor = '#ef4444'; anim = 'shake 350ms ease'; }
          }
          return (
            <button
              key={i}
              disabled={answered}
              onClick={() => onAnswer(i)}
              style={{ textAlign: 'left', padding: '13px 16px', borderRadius: '10px', border: `2px solid ${border}`, background: bg, color: textColor, fontSize: '14px', lineHeight: '1.5', fontWeight: isRichtig && answered ? '700' : '500', cursor: answered ? 'default' : 'pointer', animation: anim }}
            >
              {isRichtig && answered ? '✓ ' : isSel && !isRichtig ? '❌ ' : ''}{opt.text}{isSel && isRichtig ? ' 🎉' : ''}
            </button>
          );
        })}
      </div>
      {answered && (
        <p style={{ margin: '14px 0 0', fontSize: '13px', color: dm.text2, lineHeight: '1.6', animation: 'fadeSlideIn 200ms ease' }}><Markiert text={step.erklaerung} dark={dark} /></p>
      )}
    </div>
  );
}

function VideoEmbed({ video, dm, dark }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: '12px', overflow: 'hidden', background: dm.bg3 }}>
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.titel || 'Video'}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="kp-tile"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', cursor: 'pointer', background: dark ? '#111827' : '#1a1a2e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            aria-label="Video laden und abspielen"
          >
            <span style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#ef4444', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>▶</span>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#fff' }}>Video abspielen</span>
          </button>
        )}
      </div>
      {video.titel && <p style={{ margin: 0, fontSize: '13px', color: dm.text2 }}>{video.titel}</p>}
      <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: dm.text3 }}>Auf YouTube öffnen ↗</a>
    </div>
  );
}

function VideoCard({ videos, dm, dark, isMobile }) {
  return (
    <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '16px', padding: isMobile ? '20px 18px' : '26px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <p style={{ margin: 0, fontSize: isMobile ? '16px' : '17px', fontWeight: '700', color: dm.text }}>📺 Noch unklar? Schau dir ein Video an</p>
      {videos.map((video, i) => <VideoEmbed key={i} video={video} dm={dm} dark={dark} />)}
    </div>
  );
}

function BeltBar({ count, total, pop, dm }) {
  const belt = beltFor(count);
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  const label = count >= total
    ? 'Schwarzer Gürtel – Sensei-Prüfung bestanden 🎉'
    : `${belt.label} · ${count} von ${total} Kacheln`;
  return (
    <div style={{ margin: '4px 0 20px' }}>
      <div style={{ height: '10px', borderRadius: '6px', background: dm.bg3, border: `1px solid ${dm.border}`, overflow: 'hidden', animation: pop ? 'pop 400ms ease' : 'none' }}>
        <div style={{ height: '100%', width: `${pct}%`, minWidth: pct > 0 ? '10px' : 0, background: belt.fill, border: `1.5px solid ${belt.border}`, boxSizing: 'border-box', borderRadius: '6px', transition: 'width 0.4s ease' }} />
      </div>
      <p style={{ margin: '6px 0 0', fontSize: '12px', fontWeight: '700', color: dm.text2 }}>{label}</p>
    </div>
  );
}

function ProgressDots({ total, current, color, dm }) {
  return (
    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', margin: '2px 0 18px' }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: i <= current ? color : dm.border, transition: 'background 250ms ease' }} />
      ))}
    </div>
  );
}

function hasVideos(kachel) {
  return Array.isArray(kachel.videos) && kachel.videos.length > 0;
}

// Optionen wie 'Keine der obigen' bleiben beim Mischen am Ende.
export function zufall(liste) {
  return liste[Math.floor(Math.random() * liste.length)];
}

const FESTE_OPTION = /^(keine|nichts).*(oben|obigen|genannt\w*|davon)/i;

// Fisher-Yates. Gibt [{ text, correct }] zurueck; die Richtigkeit haengt an der
// Option selbst, nicht am Index.
function mischeOptionen(optionen) {
  const frei = optionen.filter(o => !FESTE_OPTION.test(o.text));
  const fest = optionen.filter(o => FESTE_OPTION.test(o.text));
  for (let i = frei.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [frei[i], frei[j]] = [frei[j], frei[i]];
  }
  return [...frei, ...fest];
}

function buildSteps(kachel) {
  const steps = [];
  kachel.karten.forEach((k, i) => steps.push({
    type: 'karte', karteIdx: i, ...k,
    mcOptionen: Array.isArray(k.options) ? mischeOptionen(k.options.map(o => ({ text: o.text, correct: !!o.correct }))) : null,
  }));
  if (hasVideos(kachel)) steps.push({ type: 'video' });
  kachel.check.forEach((c, i) => steps.push({
    type: 'check', checkIdx: i, ...c,
    optionen: mischeOptionen(c.optionen.map((text, j) => ({ text, correct: j === c.richtig }))),
  }));
  return steps;
}

function MiniLektion({ kachel, color, dm, dark, isMobile, onClose, onFinish, dojo, onDojoAnswer }) {
  const istDojo = kachel.titel === 'Dojo';
  const [steps] = useState(() => buildSteps(kachel));
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState(() => new Set());
  const [mcAnswers, setMcAnswers] = useState({});
  const [meldung, setMeldung] = useState(() => ({ spruch: zufall(SENSEI_SPRUECHE.start), aufstieg: null }));

  function answerMc(karteIdx, optIdx) {
    if (mcAnswers[karteIdx] !== undefined) return;
    const karte = steps.find(st => st.type === 'karte' && st.karteIdx === karteIdx);
    const richtig = karte.mcOptionen[optIdx].correct;
    setMcAnswers(prev => ({ ...prev, [karteIdx]: optIdx }));
    setRevealed(prev => new Set(prev).add(karteIdx));
    const { aufstieg } = onDojoAnswer(karteIdx, richtig);
    setMeldung({ spruch: zufall(SENSEI_SPRUECHE[aufstieg !== null ? 'aufstieg' : richtig ? 'richtig' : 'falsch']), aufstieg });
  }

  const step = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;
  const hasLoesungKarten = kachel.karten.some(k => k.loesung);
  const checkBase = kachel.karten.length + (hasVideos(kachel) ? 1 : 0);

  function toggleLoesung(karteIdx) {
    setRevealed(prev => {
      const next = new Set(prev);
      if (next.has(karteIdx)) next.delete(karteIdx); else next.add(karteIdx);
      return next;
    });
  }

  function answerCheck(optIdx) {
    if (answers[stepIdx] !== undefined) return;
    setAnswers(prev => ({ ...prev, [stepIdx]: optIdx }));
  }

  function next() {
    if (isLast) {
      let complete;
      if (kachel.check.length > 0) {
        complete = kachel.check.every((_, i) => answers[checkBase + i] !== undefined);
      } else if (hasLoesungKarten) {
        const loesungIdxs = kachel.karten.map((k, i) => (k.loesung ? i : -1)).filter(i => i >= 0);
        const revealedCount = loesungIdxs.filter(i => revealed.has(i)).length;
        const threshold = kachel.minLoesungen ?? loesungIdxs.length;
        complete = revealedCount >= threshold;
      } else {
        complete = true;
      }
      if (complete) onFinish(); else onClose();
      return;
    }
    setStepIdx(i => i + 1);
  }
  function back() { setStepIdx(i => Math.max(0, i - 1)); }

  const weiterDisabled = (step.type === 'check' && answers[stepIdx] === undefined) || (istDojo && step.type === 'karte' && !!step.mcOptionen && mcAnswers[step.karteIdx] === undefined);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        {istDojo ? (
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', fontSize: isMobile ? '17px' : '19px', fontWeight: '800', color: dojoPalette(dark).tinte }}><Hanko size={32} dark={dark} /> {kachel.titel}</p>
        ) : (
          <p style={{ margin: 0, fontSize: isMobile ? '17px' : '19px', fontWeight: '700', color: dm.text }}>{kachel.emoji} {kachel.titel}</p>
        )}
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: dm.text3, padding: '4px' }}>✕</button>
      </div>
      {istDojo && meldung.aufstieg !== null && <AufstiegMeldung index={meldung.aufstieg} spruch={meldung.spruch} onClose={() => setMeldung(m => ({ ...m, aufstieg: null }))} dark={dark} />}
      {istDojo && <DojoKopf state={dojo} aufstieg={meldung.aufstieg !== null} spruch={meldung.aufstieg !== null ? null : meldung.spruch} dark={dark} isMobile={isMobile} />}
      <ProgressDots total={steps.length} current={stepIdx} color={istDojo ? DOJO_ROT : color} dm={dm} />
      <div key={stepIdx} style={{ animation: 'cardEnter 220ms ease' }}>
        {step.type === 'karte' ? (
          <KarteView karte={step} dm={dm} dark={dark} isMobile={isMobile} revealed={revealed.has(step.karteIdx)} onToggleLoesung={() => toggleLoesung(step.karteIdx)} istDojo={istDojo} mcSelected={mcAnswers[step.karteIdx]} onMcAnswer={(i) => answerMc(step.karteIdx, i)} />
        ) : step.type === 'check' ? (
          <CheckView step={step} dm={dm} dark={dark} isMobile={isMobile} selected={answers[stepIdx]} onAnswer={answerCheck} />
        ) : (
          <VideoCard videos={kachel.videos} dm={dm} dark={dark} isMobile={isMobile} />
        )}
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
        <button onClick={back} disabled={stepIdx === 0} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: `1px solid ${dm.border}`, background: 'none', color: stepIdx === 0 ? dm.text3 : dm.text2, fontSize: '14px', fontWeight: '600', cursor: stepIdx === 0 ? 'default' : 'pointer' }}>← Zurück</button>
        <button onClick={next} disabled={weiterDisabled} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: 'none', background: weiterDisabled ? dm.bg3 : (istDojo ? DOJO_ROT : color), color: weiterDisabled ? dm.text3 : '#fff', fontSize: '14px', fontWeight: '700', cursor: weiterDisabled ? 'default' : 'pointer' }}>
          {isLast ? 'Fertig ✓' : 'Weiter →'}
        </button>
      </div>
    </div>
  );
}

function KachelGrid({ karte, dm, dark, isMobile, done, justDone, beltPop, onOpen, onClose }) {
  return (
    <div>
      <button onClick={onClose} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '9px', fontSize: '13px', fontWeight: '600', color: dm.text2, cursor: 'pointer', marginBottom: '18px' }}>← Zurück</button>
      <h1 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '700', color: dm.text, margin: '0 0 12px' }}>🥋 Frag Sensei: {karte.titel}</h1>
      <BeltBar count={done.size} total={karte.kacheln.filter(k => !k.bald).length} pop={beltPop} dm={dm} />
      <p style={{ fontSize: '14px', color: dm.text2, margin: '0 0 20px' }}>Was willst du trainieren?</p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '12px' }}>
        {karte.kacheln.map((k, i) => {
          const color = KACHEL_COLORS[i % KACHEL_COLORS.length];
          const isDone = done.has(k.id);
          const pop = justDone === k.id;
          return (
            <button
              key={k.id}
              className="kp-tile"
              disabled={!!k.bald}
              onClick={() => onOpen(k.id)}
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: isMobile ? '20px 10px' : '24px 14px', borderRadius: '16px', border: `2px solid ${isDone ? '#22c55e' : dm.border}`, background: dm.card, cursor: k.bald ? 'default' : 'pointer', opacity: k.bald ? 0.6 : 1 }}
            >
              {k.bald && <span style={{ position: 'absolute', top: '8px', right: '10px', fontSize: '10px', fontWeight: '700', color: dm.text3, background: dm.bg, border: `1px solid ${dm.border}`, borderRadius: '20px', padding: '1px 8px' }}>🔒 Bald</span>}
              {isDone && <span style={{ position: 'absolute', top: '8px', right: '10px', fontSize: '16px', color: '#22c55e', animation: pop ? 'pop 400ms ease' : 'none' }}>✓</span>}
              {k.videos && k.videos.length > 0 && <span style={{ position: 'absolute', top: '8px', left: '10px', fontSize: '14px' }}>🎬</span>}
              {k.titel === 'Dojo'
                ? <Hanko size={54} dark={dark} />
                : <span style={{ width: '54px', height: '54px', borderRadius: '50%', background: color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>{k.emoji}</span>}
              <span style={{ fontSize: '13px', fontWeight: '700', color: dm.text, textAlign: 'center' }}>{k.titel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// daten/fehlerPrefix: andere Lernkarten-Sammlung (z. B. Multicheck) mit eigenem Fehler-Präfix.
export default function LernkartePage({ topic, dm, dark, isMobile, onClose, onFehler = () => {}, onRemoveFehler = () => {}, daten = lernkarten, fehlerPrefix = 'dojo' }) {
  const karte = daten[topic];
  const { done, markDone } = useLernkarteDone();
  const [dojo, setDojo] = useState(ladeDojo);
  const [openKachelId, setOpenKachelId] = useState(null);
  const [justDone, setJustDone] = useState(null);
  const [beltPop, setBeltPop] = useState(false);

  if (!karte) return null;

  const kachelIdx = karte.kacheln.findIndex(k => k.id === openKachelId);
  const kachel = kachelIdx >= 0 ? karte.kacheln[kachelIdx] : null;
  const color = KACHEL_COLORS[kachelIdx >= 0 ? kachelIdx % KACHEL_COLORS.length : 0];

  function dojoAntwort(karteIdx, richtig) {
    const fehlerId = `${fehlerPrefix}:${topic}:${openKachelId}:${karteIdx}`;
    const res = verbucheAntwort(dojo, richtig, fehlerId);
    setDojo(res.state);
    speichereDojo(res.state);
    if (richtig) onRemoveFehler(fehlerId); else onFehler(fehlerId);
    return { aufstieg: res.aufstieg ? guertelIndex(res.state.xp) : null };
  }

  function finishKachel(id) {
    const alreadyDone = done.has(id);
    const oldCount = done.size;
    markDone(id);
    setJustDone(id);
    setOpenKachelId(null);
    setTimeout(() => setJustDone(null), 700);
    if (!alreadyDone && beltFor(oldCount + 1) !== beltFor(oldCount)) {
      setBeltPop(true);
      setTimeout(() => setBeltPop(false), 700);
    }
  }

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '64px 16px 40px' : '40px', background: dm.bg }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {kachel ? (
          <MiniLektion kachel={kachel} color={color} dm={dm} dark={dark} isMobile={isMobile} onClose={() => setOpenKachelId(null)} onFinish={() => finishKachel(kachel.id)} dojo={dojo} onDojoAnswer={dojoAntwort} />
        ) : (
          <KachelGrid karte={karte} dm={dm} dark={dark} isMobile={isMobile} done={done} justDone={justDone} beltPop={beltPop} onOpen={setOpenKachelId} onClose={onClose} />
        )}
      </div>
      <style>{GLOBAL_KEYFRAMES}</style>
    </main>
  );
}
