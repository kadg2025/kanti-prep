'use client';

import { useState, useMemo } from 'react';
import { lernkarten } from '../lib/lernkarten';

const KACHEL_COLORS = ['#534AB7', '#0f766e', '#f59e0b', '#ef4444', '#3b82f6', '#ec4899', '#14b8a6', '#8b5cf6'];

const GLOBAL_KEYFRAMES = `
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
  const a = [4, 8, 12, 16];
  const b = [6, 12, 18];
  const common = new Set([12]);
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
          Teilbar durch {active.n}: {active.regel}
        </p>
      )}
    </div>
  );
}

function VisualBlock({ type, chips, dm, dark }) {
  if (type === 'chips') return <ChipsVisual chips={chips} dm={dm} dark={dark} />;
  if (type === 'faktorbaum24') return <Faktorbaum n={24} dm={dm} dark={dark} />;
  if (type === 'faktorbaum36') return <Faktorbaum n={36} dm={dm} dark={dark} />;
  if (type === 'ggt_listen') return <GgtListen dm={dm} dark={dark} />;
  if (type === 'kgv_reihen') return <KgvReihen dm={dm} dark={dark} />;
  return null;
}

function KarteView({ karte, dm, dark, isMobile, revealed, onToggleLoesung }) {
  return (
    <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '16px', padding: isMobile ? '22px 18px' : '30px', minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
      <p style={{ margin: 0, fontSize: isMobile ? '17px' : '18px', lineHeight: '1.7', color: dm.text, whiteSpace: 'pre-wrap', fontWeight: karte.loesung ? '700' : '400' }}>{karte.text}</p>
      {karte.visual && <VisualBlock type={karte.visual} chips={karte.chips} dm={dm} dark={dark} />}
      {karte.loesung && (
        <div>
          <button
            onClick={onToggleLoesung}
            style={{ padding: '9px 16px', background: revealed ? dm.accentBg : dm.bg3, border: `1px solid ${revealed ? (dark ? '#4c3f8f' : '#c4b5fd') : dm.border}`, borderRadius: '9px', fontSize: '13px', fontWeight: '600', color: revealed ? (dark ? '#c4b5fd' : '#534AB7') : dm.text2, cursor: 'pointer' }}
          >
            {revealed ? 'Lösung ausblenden' : 'Lösung zeigen'}
          </button>
          {revealed && (
            <p key="loesung" style={{ margin: '12px 0 0', fontSize: '15px', lineHeight: '1.6', color: dm.text, whiteSpace: 'pre-wrap', animation: 'fadeSlideIn 200ms ease' }}>{karte.loesung}</p>
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
      <p style={{ margin: '0 0 16px', fontSize: isMobile ? '16px' : '17px', fontWeight: '700', color: dm.text, lineHeight: '1.6' }}>{step.frage}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {step.optionen.map((opt, i) => {
          const isRichtig = i === step.richtig;
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
              {isRichtig && answered ? '✓ ' : isSel && !isRichtig ? '❌ ' : ''}{opt}{isSel && isRichtig ? ' 🎉' : ''}
            </button>
          );
        })}
      </div>
      {answered && (
        <p style={{ margin: '14px 0 0', fontSize: '13px', color: dm.text2, lineHeight: '1.6', animation: 'fadeSlideIn 200ms ease' }}>{step.erklaerung}</p>
      )}
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

function buildSteps(kachel) {
  const steps = [];
  kachel.karten.forEach((k, i) => steps.push({ type: 'karte', karteIdx: i, ...k }));
  kachel.check.forEach((c, i) => steps.push({ type: 'check', checkIdx: i, ...c }));
  return steps;
}

function MiniLektion({ kachel, color, dm, dark, isMobile, onClose, onFinish }) {
  const steps = useMemo(() => buildSteps(kachel), [kachel.id]);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState(() => new Set());

  const step = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;
  const hasLoesungKarten = kachel.karten.some(k => k.loesung);

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
        complete = kachel.check.every((_, i) => answers[kachel.karten.length + i] !== undefined);
      } else if (hasLoesungKarten) {
        const loesungIdxs = kachel.karten.map((k, i) => (k.loesung ? i : -1)).filter(i => i >= 0);
        complete = loesungIdxs.every(i => revealed.has(i));
      } else {
        complete = true;
      }
      if (complete) onFinish(); else onClose();
      return;
    }
    setStepIdx(i => i + 1);
  }
  function back() { setStepIdx(i => Math.max(0, i - 1)); }

  const weiterDisabled = step.type === 'check' && answers[stepIdx] === undefined;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <p style={{ margin: 0, fontSize: isMobile ? '17px' : '19px', fontWeight: '700', color: dm.text }}>{kachel.emoji} {kachel.titel}</p>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: dm.text3, padding: '4px' }}>✕</button>
      </div>
      <ProgressDots total={steps.length} current={stepIdx} color={color} dm={dm} />
      <div key={stepIdx} style={{ animation: 'cardEnter 220ms ease' }}>
        {step.type === 'karte' ? (
          <KarteView karte={step} dm={dm} dark={dark} isMobile={isMobile} revealed={revealed.has(step.karteIdx)} onToggleLoesung={() => toggleLoesung(step.karteIdx)} />
        ) : (
          <CheckView step={step} dm={dm} dark={dark} isMobile={isMobile} selected={answers[stepIdx]} onAnswer={answerCheck} />
        )}
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
        <button onClick={back} disabled={stepIdx === 0} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: `1px solid ${dm.border}`, background: 'none', color: stepIdx === 0 ? dm.text3 : dm.text2, fontSize: '14px', fontWeight: '600', cursor: stepIdx === 0 ? 'default' : 'pointer' }}>← Zurück</button>
        <button onClick={next} disabled={weiterDisabled} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: 'none', background: weiterDisabled ? dm.bg3 : color, color: weiterDisabled ? dm.text3 : '#fff', fontSize: '14px', fontWeight: '700', cursor: weiterDisabled ? 'default' : 'pointer' }}>
          {isLast ? 'Fertig ✓' : 'Weiter →'}
        </button>
      </div>
    </div>
  );
}

function KachelGrid({ karte, dm, isMobile, done, justDone, onOpen, onClose }) {
  return (
    <div>
      <button onClick={onClose} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '9px', fontSize: '13px', fontWeight: '600', color: dm.text2, cursor: 'pointer', marginBottom: '18px' }}>← Zurück</button>
      <h1 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '700', color: dm.text, margin: '0 0 4px' }}>{karte.titel}</h1>
      <p style={{ fontSize: '14px', color: dm.text2, margin: '0 0 20px' }}>Was willst du lernen?</p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '12px' }}>
        {karte.kacheln.map((k, i) => {
          const color = KACHEL_COLORS[i % KACHEL_COLORS.length];
          const isDone = done.has(k.id);
          const pop = justDone === k.id;
          return (
            <button
              key={k.id}
              className="kp-tile"
              onClick={() => onOpen(k.id)}
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: isMobile ? '20px 10px' : '24px 14px', borderRadius: '16px', border: `2px solid ${isDone ? '#22c55e' : dm.border}`, background: dm.card, cursor: 'pointer' }}
            >
              {isDone && <span style={{ position: 'absolute', top: '8px', right: '10px', fontSize: '16px', color: '#22c55e', animation: pop ? 'pop 400ms ease' : 'none' }}>✓</span>}
              <span style={{ width: '54px', height: '54px', borderRadius: '50%', background: color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>{k.emoji}</span>
              <span style={{ fontSize: '13px', fontWeight: '700', color: dm.text, textAlign: 'center' }}>{k.titel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function LernkartePage({ topic, dm, dark, isMobile, onClose }) {
  const karte = lernkarten[topic];
  const { done, markDone } = useLernkarteDone();
  const [openKachelId, setOpenKachelId] = useState(null);
  const [justDone, setJustDone] = useState(null);

  if (!karte) return null;

  const kachelIdx = karte.kacheln.findIndex(k => k.id === openKachelId);
  const kachel = kachelIdx >= 0 ? karte.kacheln[kachelIdx] : null;
  const color = KACHEL_COLORS[kachelIdx >= 0 ? kachelIdx % KACHEL_COLORS.length : 0];

  function finishKachel(id) {
    markDone(id);
    setJustDone(id);
    setOpenKachelId(null);
    setTimeout(() => setJustDone(null), 700);
  }

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '64px 16px 40px' : '40px', background: dm.bg }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {kachel ? (
          <MiniLektion kachel={kachel} color={color} dm={dm} dark={dark} isMobile={isMobile} onClose={() => setOpenKachelId(null)} onFinish={() => finishKachel(kachel.id)} />
        ) : (
          <KachelGrid karte={karte} dm={dm} isMobile={isMobile} done={done} justDone={justDone} onOpen={setOpenKachelId} onClose={onClose} />
        )}
      </div>
      <style>{GLOBAL_KEYFRAMES}</style>
    </main>
  );
}
