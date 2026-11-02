'use client';

// Multicheck IMS: Übersicht, Üben (Übungsprüfung), Dojo (Zufallsfragen mit
// Gürtel/XP) und Frag Sensei (Lernkarten). Daten: app/lib/multicheck/.
import { useState, useEffect, useRef } from 'react';
import { MULTICHECK_THEMEN, multicheckThema, multicheckLernkarten } from '../lib/multicheck';
import { DAYS, slotsOf } from '../lib/multicheck/plan';
import { neuerStand, istLeer, auswerten, NUMPROC, numprocEreignisse } from '../lib/multicheck/pruefen';
import LernkartePage, { Hanko, DojoKopf, AufstiegMeldung, dojoPalette, DOJO_ROT, GLOBAL_KEYFRAMES, zufall } from './Lernkarte';
import { ladeDojo, speichereDojo, guertelIndex, verbucheAntwort } from '../lib/dojo_guertel';
import { SENSEI_SPRUECHE } from '../lib/sensei_sprueche';

const MC_BLAU = '#0a35b0';

// Stil der Fragen (aus der Übungsprüfung übernommen, mit Farbvariablen für Hell/Dunkel).
const CSS = `
.mcq{--a:#0a35b0;--soft:#eef2ff;--bd:#cfd3e6;--tx:#222;--bg:#fff;--bg2:#fafafa;--ok:#1b8a3a;--okbg:#eaf7ee;--bad:#c62828;--badbg:#fdecec;--or:#f47c00;--orbg:#fff7ec;--mut:#777;color:var(--tx)}
.mcq.dk{--a:#8fa8ff;--soft:#22284d;--bd:#363a60;--tx:#e9e9f2;--bg:#1b1d33;--bg2:#16172b;--ok:#4ade80;--okbg:#13291d;--bad:#f87171;--badbg:#2a1515;--or:#fb923c;--orbg:#2b2115;--mut:#a9abc4}
.mcq .qhead{display:flex;justify-content:space-between;font-size:12px;color:var(--mut);margin-bottom:6px}
.mcq .qhead a{color:var(--a);cursor:pointer}
.mcq .qt{color:var(--a);font-size:17px;text-align:center;margin:4px 0 14px}
.mcq .instr{color:var(--a);font-weight:bold;font-size:13px;line-height:1.5;padding-bottom:5px;border-bottom:1px solid var(--a);margin-bottom:20px}
.mcq .big{font-size:22px;text-align:center;margin:10px 0 18px}
.mcq .opts{display:grid;gap:9px;max-width:620px;margin:0 auto}
.mcq .opts.g2{grid-template-columns:1fr 1fr;max-width:760px}
.mcq .opts.g4{grid-template-columns:repeat(4,1fr);max-width:660px}
.mcq .opt{display:flex;gap:10px;align-items:flex-start;border:1.5px solid var(--bd);border-radius:12px;padding:10px 14px;font-size:14px;cursor:pointer;line-height:1.45;background:var(--bg)}
.mcq .opt:hover{border-color:var(--a)}
.mcq .opt.sel{border-color:var(--a);background:var(--soft)}
.mcq .opt .rad{flex:none;width:15px;height:15px;border:2px solid var(--a);border-radius:50%;margin-top:2px;position:relative}
.mcq .opt.cb .rad{border-radius:3px}
.mcq .opt.sel .rad:after{content:"";position:absolute;inset:2px;background:var(--a);border-radius:inherit}
.mcq .opt.right{border-color:var(--ok);background:var(--okbg)}
.mcq .opt.wrong{border-color:var(--bad);background:var(--badbg)}
.mcq .opt .why{display:block;font-size:12.5px;opacity:.85;margin-top:5px}
.mcq .opts.g4 .opt{justify-content:center;font-family:"Courier New",monospace;font-size:16px;letter-spacing:1px}
.mcq .opts.g4 .opt .rad{display:none}
.mcq .btnrow{text-align:center;margin-top:22px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.mcq button.btn{background:var(--a);color:#fff;border:0;border-radius:20px;padding:10px 26px;font-size:14px;font-weight:bold;cursor:pointer}
.mcq.dk button.btn{color:#0f1020}
.mcq button.btn.sec{background:none;color:var(--a);border:1.5px solid var(--a)}
.mcq input.in{border:1.5px solid var(--a);border-radius:8px;padding:8px 10px;font-size:15px;width:170px;text-align:center;background:var(--bg);color:var(--tx)}
.mcq input.in.w{width:130px}
.mcq .inrow{text-align:center;margin-top:8px}
.mcq .kor{display:inline-flex;gap:6px;align-items:center;font-size:13px;color:var(--a);margin-left:14px;cursor:pointer}
.mcq .mcbody{margin-bottom:12px}
.mcq.dk .mcbody{background:#fff;color:#222;border-radius:12px;padding:10px}
.mcq .script{background:#fafafa;border:1.5px solid #ccc;border-radius:12px;padding:14px 20px;font-family:"Courier New",monospace;font-size:13.5px;line-height:1.6;max-width:520px;margin:0 auto 18px;color:#111}
.mcq .textbox{background:#fafafa;border:1.5px solid #ddd;border-radius:12px;padding:14px 18px;font-size:13.5px;line-height:1.6;margin:0 0 18px;color:#222}
.mcq .chat{max-width:560px;margin:0 auto 14px}
.mcq .bubble{background:#eee;border-radius:14px;padding:10px 14px;margin:8px 0;font-size:13.5px;width:fit-content;max-width:90%;color:#222}
.mcq .bubble.you{background:#d6e4ff;margin-left:auto}
.mcq .flow{max-width:420px;margin:0 auto 14px;text-align:center;font-size:13px;color:#222}
.mcq .flow .fb{border:1.5px solid #0a35b0;padding:7px 12px;background:#fff;display:inline-block;min-width:150px}
.mcq .flow .oval{border-radius:20px}.mcq .flow .para{transform:skewX(-8deg)}.mcq .flow .dia{background:#fff6e8;border-color:#f47c00}.mcq .flow .wave{border-radius:4px 4px 16px 16px/4px 4px 12px 12px}
.mcq .flow .arr{color:#0a35b0;line-height:1.2}
.mcq .flow .branch{display:flex;justify-content:center;gap:16px;font-size:12px;color:#444;margin-top:3px}
.mcq .words{text-align:center;font-size:17px;line-height:2.1;margin:6px 0 10px}
.mcq .words span{padding:2px 4px;border-radius:5px;cursor:pointer}.mcq .words span:hover{background:var(--soft)}
.mcq .words span.pick{background:#ffe3b8;color:#222;outline:1.5px solid #f47c00}
.mcq .circ{display:flex;gap:10px;justify-content:center;margin:12px 0}
.mcq .circ i{width:34px;height:34px;border-radius:50%;border:2px solid #888;display:inline-block;background:#fff}
.mcq .circ i.c1{background:#e53935}.mcq .circ i.c2{background:#1e63e9}.mcq .circ i.c3{background:#111}
.mcq .circ.click i{cursor:pointer}
.mcq .show{font-family:"Courier New",monospace;font-size:44px;letter-spacing:6px;text-align:center;margin:40px 0}
.mcq .tbox{max-width:420px;margin:0 auto 10px}
.mcq .tbar{height:7px;background:var(--bd);border-radius:5px;overflow:hidden}
.mcq .tbar b{display:block;height:100%;background:var(--a)}
.mcq .tl{font-size:12px;color:var(--mut);text-align:center;margin-top:3px}
.mcq .txt{font-size:14px;line-height:1.55;max-width:640px;margin:0 auto 12px}
.mcq .fbk{margin-top:22px;border-radius:14px;padding:14px 18px;font-size:14px;line-height:1.55}
.mcq .fbk.ok{background:var(--okbg);border:1.5px solid var(--ok)}
.mcq .fbk.bad{background:var(--badbg);border:1.5px solid var(--bad)}
.mcq .fbk h4{margin:0 0 6px;font-size:16px}
.mcq .concept{margin-top:14px;border:1.5px solid var(--a);border-radius:14px;padding:14px 18px;font-size:13.5px;line-height:1.55;background:var(--soft)}
.mcq .concept h4{margin:0 0 8px;color:var(--a);font-size:15px}
.mcq .concept h5{margin:12px 0 4px;color:var(--a);font-size:12.5px;text-transform:uppercase;letter-spacing:.5px}
.mcq .concept dt{font-weight:bold;margin-top:4px}.mcq .concept dd{margin:0 0 2px 0}.mcq .concept dl{margin:0}
.mcq .concept ul,.mcq .concept ol{margin:4px 0 4px 20px;padding:0}
.mcq .recipe{background:var(--orbg);border:1.5px dashed var(--or);border-radius:12px;padding:8px 14px;margin-top:10px}
.mcq .recipe h5{color:var(--or);margin-top:4px}
.mcq .tip{margin-top:10px;background:var(--bg);border-left:4px solid var(--or);padding:7px 12px}
.mcq details.concept summary{cursor:pointer;color:var(--a);font-weight:bold}
.mcq table.pl{border-collapse:collapse;width:100%;font-size:12px;margin:8px 0}
.mcq .pl th{background:var(--soft);color:var(--a);padding:4px;border:1px solid var(--bd)}
.mcq .pl td{border:1px solid var(--bd);height:24px;padding:1px 4px;text-align:center;width:17%}
.mcq .pl td.t{width:11%;color:var(--mut)}
.mcq .pl td.fx{background:#f9b04a;color:#222}.mcq .pl td.mv{background:#a9c4ff;color:#102a6b}.mcq .pl td.lunch{background:#d8d8d8;color:#555}
.mcq .pl td.clash{background:#ff9a9a;color:#222}
.mcq .mvrow{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:6px 0;font-size:13px;background:var(--soft);border-radius:10px;padding:6px 10px}
.mcq .mvrow b{flex:1 1 260px}
.mcq .mvrow select{padding:4px;font-size:13px;border-radius:6px;border:1px solid var(--a);background:var(--bg);color:var(--tx)}
.mcq .rules{font-size:12.5px;background:var(--bg2);border:1px solid var(--bd);border-radius:10px;padding:6px 12px;margin-bottom:8px}
.mcq .rules summary{cursor:pointer;color:var(--a);font-weight:bold}
.mcq .daytab{margin:0 auto;border-collapse:collapse;font-size:13px}.mcq .daytab th{background:#0a35b0;color:#fff;padding:5px}.mcq .daytab td{border:1px solid #ccc;padding:3px 10px;min-width:70px}.mcq .daytab td.fx{background:#f9b04a}
.mcq .res{max-width:560px;margin:0 auto}.mcq .res .score{font-size:44px;color:var(--a);font-weight:bold;text-align:center}
.mcq .res table{width:100%;border-collapse:collapse;font-size:13px;margin-top:10px}.mcq .res td{border-bottom:1px solid var(--bd);padding:5px 4px}
.mcq .npw{display:flex;flex-direction:column;align-items:center;gap:16px;margin:14px 0}
.mcq .npg{display:grid;grid-template-columns:repeat(3,54px);grid-template-rows:repeat(3,54px);gap:4px;background:var(--bd);padding:4px;border-radius:8px}
.mcq .npg i{background:#b9bccb;border-radius:4px;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:24px;font-weight:bold;color:#222}
.mcq .npg i.wf{background:#fff;border:2px solid var(--a)}
.mcq .nums{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:10px 0}
.mcq .nums button{width:46px;height:46px;font-size:20px;font-weight:bold;border-radius:10px;border:1.5px solid var(--bd);background:var(--bg);color:var(--tx);cursor:pointer}
.mcq .nums button.sel{border-color:var(--a);background:var(--soft)}
.mcq .nums button.right{border-color:var(--ok);background:var(--okbg)}.mcq .nums button.wrong{border-color:var(--bad);background:var(--badbg)}
@media(max-width:640px){.mcq .opts.g2{grid-template-columns:1fr}.mcq .opts.g4{grid-template-columns:repeat(2,1fr)}.mcq .show{font-size:30px}}
`;

function H({ t }) { return <span dangerouslySetInnerHTML={{ __html: t }} />; }
function HB({ t, className }) { return <div className={className} dangerouslySetInnerHTML={{ __html: t }} />; }

// ─── Wochenplan-Raster ─────────────────────────────────────────────────────
function PlanGrid({ q, asg }) {
  const cell = {};
  q.plan.fixed.forEach(f => { for (let h = f.s; h < f.e; h++) cell[f.d + '-' + h] = { t: h === f.s ? f.n : '', c: 'fx' }; });
  q.plan.mov.forEach(m => {
    const a = asg[m.n];
    if (!a || a.d == null) return;
    const two = m.c && m.c.two;
    if (!two && a.s == null) return;
    const sl = slotsOf(m, { d: a.d, s: a.s });
    sl.forEach((s, ix) => {
      if (s[0] > 4 || s[1] < 8 || s[1] > 16) return;
      const k = s[0] + '-' + s[1];
      const first = ix === 0 || sl[ix - 1][0] !== s[0];
      if (cell[k] && cell[k].c.indexOf('fx') >= 0) cell[k] = { t: cell[k].t, c: 'fx clash' };
      else if (cell[k] && cell[k].c.indexOf('mv') >= 0) cell[k] = { t: cell[k].t, c: 'mv clash' };
      else cell[k] = { t: first ? m.n : '', c: s[1] === 12 ? 'mv clash' : 'mv' };
    });
  });
  const stunden = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <table className="pl">
      <thead><tr><th></th>{DAYS.map(d => <th key={d}>{d.slice(0, 2)}</th>)}</tr></thead>
      <tbody>
        {stunden.map(hr => (
          <tr key={hr}>
            <td className="t">{(hr < 10 ? '0' : '') + hr}.00</td>
            {[0, 1, 2, 3, 4].map(d => {
              const c = cell[d + '-' + hr];
              if (hr === 12 && !c) return <td key={d} className="lunch">Mittag</td>;
              if (c) return <td key={d} className={c.c}>{c.t}</td>;
              return <td key={d}></td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Zwei 3×3-Raster. Weisses Feld oben: links oben. Weisses Feld unten: rechts unten.
function NumRaster({ wert }) {
  const weiss = { top: 0, bottom: 8 };
  return (
    <div className="npw">
      {['top', 'bottom'].map(r => (
        <div className="npg" key={r}>
          {Array.from({ length: 9 }, (_, i) => <i key={i} className={i === weiss[r] ? 'wf' : ''}>{i === weiss[r] ? (wert[r] || '') : ''}</i>)}
        </div>
      ))}
    </div>
  );
}

function Konzept({ c, offen }) {
  const inner = (
    <>
      <h4>So geht das: {c.n}</h4>
      <h5>Begriffe</h5>
      <dl>{c.b.map((x, i) => <div key={i}><dt><H t={x[0]} /></dt><dd><H t={x[1]} /></dd></div>)}</dl>
      <h5>Beispiele</h5>
      <ul>{c.bsp.map((x, i) => <li key={i}><H t={x} /></li>)}</ul>
      <div className="recipe">
        <h5>Rezept</h5>
        <b>Zutaten:</b>
        <ul>{c.z.map((x, i) => <li key={i}><H t={x} /></li>)}</ul>
        <b>Zubereitung:</b>
        <ol>{c.s.map((x, i) => <li key={i}><H t={x} /></li>)}</ol>
      </div>
      <div className="tip"><b>Tipp:</b> <H t={c.t} /></div>
    </>
  );
  return offen
    ? <div className="concept">{inner}</div>
    : <details className="concept"><summary>Rezept und Erklärung anzeigen: {c.n}</summary>{inner}</details>;
}

// ─── Eine Frage (alle Fragetypen) ──────────────────────────────────────────
// onFertig(ok, q) wird einmal beim Prüfen aufgerufen. onWeiter() beim Klick auf den Weiter-Knopf.
function Frage({ q, thema, zeitlimit, onFertig, onWeiter, weiterText }) {
  const [U, setU] = useState(() => neuerStand(q));
  const [phase, setPhase] = useState(q.type === 'memcolor' || q.type === 'memchoice' || q.type === 'numproc' ? 'ready' : 'answer');
  const [fb, setFb] = useState(null);
  const [msg, setMsg] = useState('');
  const startTimer = q.time && zeitlimit && q.type !== 'memcolor';
  const [tm, setTm] = useState(() => (startTimer ? { kind: 'answer', sec: q.time, t0: Date.now() } : null));
  const [left, setLeft] = useState(startTimer ? q.time * 1000 : 0);
  const ref = useRef({});
  const [ev, setEv] = useState(-1);
  useEffect(() => { ref.current = { U, fb, q }; });
  useEffect(() => {
    if (q.type !== 'numproc' || phase !== 'show') return;
    const liste = numprocEreignisse(q);
    const takt = NUMPROC.SICHTBAR + NUMPROC.LUECKE;
    const timer = [];
    liste.forEach((_, i) => {
      timer.push(setTimeout(() => setEv(i), 400 + i * takt));
      timer.push(setTimeout(() => setEv(-1), 400 + i * takt + NUMPROC.SICHTBAR));
    });
    timer.push(setTimeout(() => setPhase('answer'), 400 + liste.length * takt));
    return () => timer.forEach(clearTimeout);
  }, [phase, q]);
  const done = !!fb;
  const up = (p) => setU(u => ({ ...u, ...p }));

  function pruefen(timeout) {
    const { U: u, fb: f, q: qq } = ref.current;
    if (f) return;
    if (!timeout && istLeer(qq, u)) { setMsg('Bitte beantworte die Frage zuerst vollständig.'); return; }
    setTm(null);
    const r = auswerten(qq, u, timeout);
    setFb({ ...r, timeout: !!timeout });
    setPhase('answer');
    if (onFertig) onFertig(r.ok, qq);
  }

  useEffect(() => {
    if (!tm) return;
    const total = tm.sec * 1000;
    const end = tm.t0 + total;
    const id = setInterval(() => {
      const l = end - Date.now();
      if (l <= 0) {
        clearInterval(id);
        setLeft(0);
        setTm(null);
        if (tm.kind === 'show') setPhase('answer'); else pruefen(true);
      } else setLeft(l);
    }, 200);
    return () => clearInterval(id);
  }, [tm]); // eslint-disable-line react-hooks/exhaustive-deps

  const t = q.type;
  const konz = thema.konzepte[q.ck];

  const zeitBalken = tm && !done ? (
    <div className="tbox"><div className="tbar"><b style={{ width: Math.max(0, left / (tm.sec * 1000) * 100) + '%' }} /></div><div className="tl">{Math.max(0, Math.ceil(left / 1000))} Sekunden</div></div>
  ) : null;

  let inhalt;
  if (phase === 'ready') {
    inhalt = (
      <>
        {t === 'numproc'
          ? <div className="txt" style={{ textAlign: 'center', marginTop: 30 }}>Gleich erscheinen nacheinander Zahlen und Rechenschritte in den beiden weissen Feldern. Jede Anzeige verschwindet wieder. Halte beide Zwischenergebnisse getrennt im Kopf.</div>
          : <div className="txt" style={{ textAlign: 'center', marginTop: 30 }}>Gleich wird etwas gezeigt, das nur <b>{q.showSec} Sekunden</b> sichtbar ist. Merke es dir gut. Danach musst du es wiedergeben.</div>}
        <div className="btnrow"><button className="btn" onClick={() => { setPhase('show'); if (t !== 'numproc') { setLeft(q.showSec * 1000); setTm({ kind: 'show', sec: q.showSec, t0: Date.now() }); } }}>Anzeige starten</button></div>
      </>
    );
  } else if (phase === 'show') {
    inhalt = (
      <>
        {zeitBalken}
        {t === 'numproc'
          ? <NumRaster wert={ev >= 0 ? { [numprocEreignisse(q)[ev].reihe]: numprocEreignisse(q)[ev].text } : {}} />
          : t === 'memcolor'
          ? <div className="circ">{q.seq.map((c, i) => <i key={i} className={'c' + (c + 1)} />)}</div>
          : <div className="show">{q.show}</div>}
      </>
    );
  } else {
    inhalt = (
      <>
        {zeitBalken}
        {q.body && <HB className="mcbody" t={q.body} />}
        {t === 'plan' && (
          <details className="rules"><summary>i – Planungsvorgaben</summary><ul><li>Termine beginnen immer zur vollen Stunde.</li><li>Termine dürfen sich nicht überschneiden.</li><li>Die Mittagspause (12.00–13.00) muss frei bleiben.</li><li>Nur Termine, die länger als 4 Stunden dauern, dürfen über 2 Tage gehen (Nachmittag + nächster Vormittag).</li></ul></details>
        )}
        {(t === 'mc' || t === 'memchoice') && (
          <div className={'opts' + (t === 'memchoice' ? ' g4' : q.scriptOpts ? ' g2' : '')}>
            {q.options.map((o, i) => {
              let c = 'opt';
              if (U.sel === i) c += ' sel';
              if (done) { if (i === q.correct) c += ' right'; else if (U.sel === i) c += ' wrong'; }
              return (
                <label key={i} className={c} onClick={() => { if (!done) up({ sel: i }); }}>
                  <span className="rad" />
                  <span><H t={o.t} />{done && o.why && i !== q.correct && U.sel === i && <span className="why"><H t={o.why} /></span>}</span>
                </label>
              );
            })}
          </div>
        )}
        {t === 'numproc' && (
          <>
            <NumRaster wert={{ [q.ask]: '?' }} />
            <div className="txt" style={{ textAlign: 'center' }}>Welche Zahl gehört an die Stelle des «?» ({q.ask === 'top' ? 'oberes' : 'unteres'} Raster)?</div>
            <div className="nums">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
                let c = U.sel === n ? 'sel' : '';
                if (done) { if (n === q.answer) c = 'right'; else if (U.sel === n) c = 'wrong'; }
                return <button key={n} className={c} onClick={() => { if (!done) up({ sel: n }); }}>{n}</button>;
              })}
            </div>
          </>
        )}
        {t === 'multi' && (
          <div className="opts">
            {q.options.map((o, i) => {
              let c = 'opt cb';
              if (U.set[i]) c += ' sel';
              if (done) c += o.ok ? ' right' : (U.set[i] ? ' wrong' : '');
              return (
                <label key={i} className={c} onClick={() => { if (!done) up({ set: { ...U.set, [i]: !U.set[i] } }); }}>
                  <span className="rad" />
                  <span><H t={o.t} />{done && <span className="why">{o.ok ? '✔ ' : '✘ '}<H t={o.why} /></span>}</span>
                </label>
              );
            })}
          </div>
        )}
        {t === 'input' && (
          <div className="inrow"><input className="in" autoComplete="off" disabled={done} value={U.val} placeholder="Antwort" onChange={e => up({ val: e.target.value })} onKeyDown={e => { if (e.key === 'Enter') pruefen(false); }} /></div>
        )}
        {t === 'gap' && (
          <>
            <div className="big" style={{ fontSize: 18 }}><H t={q.before} /> <input className="in w" autoComplete="off" disabled={done} value={U.val} onChange={e => up({ val: e.target.value })} onKeyDown={e => { if (e.key === 'Enter') pruefen(false); }} /> <H t={q.after} /></div>
            <div className="inrow"><label className="kor"><input type="checkbox" checked={U.korr} disabled={done} onChange={e => up(e.target.checked ? { korr: true, w: -1, val: '' } : { korr: false })} /> korrekt</label></div>
          </>
        )}
        {t === 'spell' && (
          <>
            <div className="words">
              {q.words.map((w, i) => <span key={i}><span className={U.w === i ? 'pick' : ''} onClick={() => { if (!done) up({ w: i, korr: false, val: '' }); }}>{w}</span>{' '}</span>)}
            </div>
            <div className="inrow">
              {U.w >= 0
                ? <><input className="in" autoComplete="off" disabled={done} value={U.val} placeholder="richtig schreiben" onChange={e => up({ val: e.target.value })} onKeyDown={e => { if (e.key === 'Enter') pruefen(false); }} />{' '}</>
                : <><span style={{ fontSize: 12.5, color: 'var(--mut)' }}>Klicke das falsche Wort an.</span>{' '}</>}
              <label className="kor"><input type="checkbox" checked={U.korr} disabled={done} onChange={e => up(e.target.checked ? { korr: true, w: -1, val: '' } : { korr: false })} /> korrekt</label>
            </div>
          </>
        )}
        {t === 'memcolor' && !done && (
          <>
            <div className="txt" style={{ textAlign: 'center' }}>Klicke die Kreise: 1× = rot, 2× = blau, 3× = schwarz.</div>
            <div className="circ click">{U.cols.map((c, i) => <i key={i} className={'c' + c} onClick={() => up({ cols: U.cols.map((x, j) => (j === i ? (x + 1) % 4 : x)) })} />)}</div>
          </>
        )}
        {t === 'plan' && (
          <>
            <PlanGrid q={q} asg={U.asg} />
            {q.plan.mov.map(m => {
              const a = U.asg[m.n] || {};
              const two = m.c && m.c.two;
              return (
                <div className="mvrow" key={m.n}>
                  <b>{q.labels[m.n]}</b>
                  <select disabled={done} value={a.d == null ? '' : a.d} onChange={e => { const v = e.target.value === '' ? null : +e.target.value; up({ asg: { ...U.asg, [m.n]: { ...a, d: v, ...(two ? { s: 13 } : {}) } } }); }}>
                    <option value="">Tag</option>
                    {DAYS.map((x, i) => <option key={i} value={i}>{x}</option>)}
                  </select>
                  {two
                    ? <span style={{ fontSize: 12 }}>13.00 + nächster Tag 08.00</span>
                    : (
                      <select disabled={done} value={a.s == null ? '' : a.s} onChange={e => { const v = e.target.value === '' ? null : +e.target.value; up({ asg: { ...U.asg, [m.n]: { ...a, s: v } } }); }}>
                        <option value="">Zeit</option>
                        {[8, 9, 10, 11, 12, 13, 14, 15, 16].map(s => <option key={s} value={s}>{(s < 10 ? '0' : '') + s}.00</option>)}
                      </select>
                    )}
                </div>
              );
            })}
          </>
        )}
        {fb && <Rueckmeldung q={q} fb={fb} U={U} />}
        {fb && konz && <Konzept c={konz} offen={!fb.ok} />}
        {!done && <div className="btnrow"><button className="btn" onClick={() => pruefen(false)}>Prüfen</button></div>}
        {!done && msg && <div className="txt" style={{ color: 'var(--bad)', textAlign: 'center', marginTop: 8 }}>{msg}</div>}
        {done && <div className="btnrow"><button className="btn" onClick={onWeiter}>{weiterText}</button></div>}
      </>
    );
  }

  return (
    <div>
      <h2 className="qt">{q.title}</h2>
      <HB className="instr" t={q.instr} />
      {inhalt}
    </div>
  );
}

function Rueckmeldung({ q, fb, U }) {
  const { ok, user, extra, planRes, timeout } = fb;
  const reihe = (a, b) => (
    <div className="circ" style={{ margin: '4px 0' }}>
      {a.map((c, i) => <i key={i} className={'c' + c} style={{ width: 26, height: 26, ...(b && b[i] !== c ? { outline: '3px solid #c62828', outlineOffset: 2 } : {}) }} />)}
    </div>
  );
  return (
    <div className={'fbk ' + (ok ? 'ok' : 'bad')}>
      <h4>{ok ? 'Richtig!' : (timeout && q.type !== 'plan' ? 'Zeit abgelaufen.' : 'Leider nicht richtig.')}</h4>
      {q.type === 'plan' ? (
        ok ? 'Alle Regeln sind erfüllt. Dein Wochenplan ist gültig.' : (
          <>
            Diese Regeln sind verletzt:
            <ul>{Object.keys(planRes.err).flatMap(n => planRes.err[n].map((m, i) => <li key={n + i}><b>{n}</b> {m}</li>))}</ul>
            {q.sol && <><b>Eine gültige Lösung:</b><PlanGrid q={q} asg={q.sol} /></>}
          </>
        )
      ) : (
        <>
          {!ok && user && <div>Deine Antwort: <b>{user}</b></div>}
          {!ok && <div>Richtige Antwort: <b><H t={q.answerText} /></b></div>}
          {!ok && extra && <div style={{ marginTop: 4 }}><H t={extra} /></div>}
          {q.type === 'memcolor' && (
            <>
              <div style={{ marginTop: 8 }}>Richtig:</div>
              {reihe(q.seq.map(c => c + 1), null)}
              <div>Deine Reihe:</div>
              {reihe(U.cols, q.seq.map(c => c + 1))}
            </>
          )}
          {q.type === 'multi' && <div style={{ marginTop: 6 }}>Bei jeder Aussage siehst du oben die Begründung (✔ = richtig, ✘ = falsch).</div>}
          <div style={{ marginTop: 8 }}><H t={q.why} /></div>
        </>
      )}
    </div>
  );
}

// ─── Üben: die Übungsprüfung eines Themas ──────────────────────────────────
const KEY_ERGEBNIS = 'kp_multicheck';
function ladeErgebnis() { try { return JSON.parse(localStorage.getItem(KEY_ERGEBNIS) || '{}'); } catch { return {}; } }
function speichereErgebnis(o) { try { localStorage.setItem(KEY_ERGEBNIS, JSON.stringify(o)); } catch {} }

function Ueben({ thema, demo, dm, dark, onBack, onFehler = () => {}, onRemoveFehler = () => {} }) {
  const [saved, setSaved] = useState(ladeErgebnis);
  const [ansicht, setAnsicht] = useState('intro');
  const [fragen, setFragen] = useState([]);
  const [idx, setIdx] = useState(0);
  const [res, setRes] = useState({});
  const [zeit, setZeit] = useState(true);
  const r = saved[thema.id] || {};
  const n = thema.qs.filter(q => r[q.id] != null).length;
  const ok = thema.qs.filter(q => r[q.id]).length;

  function start(nurFalsche) {
    let liste = nurFalsche ? thema.qs.filter(q => r[q.id] === 0) : thema.qs.slice();
    if (!liste.length) liste = thema.qs.slice();
    setFragen(liste); setIdx(0); setRes({}); setAnsicht('q');
  }

  function fertig(richtig, q) {
    setRes(x => ({ ...x, [q.id]: richtig ? 1 : 0 }));
    if (richtig) onRemoveFehler('mc:' + q.id); else onFehler('mc:' + q.id);
    setSaved(s => {
      const next = { ...s, [thema.id]: { ...(s[thema.id] || {}), [q.id]: richtig ? 1 : 0 } };
      speichereErgebnis(next);
      return next;
    });
  }

  const kopf = (
    <div className="qhead"><span>{ansicht === 'q' ? `${thema.name} · Frage ${idx + 1} von ${fragen.length}` : thema.name}</span><a onClick={ansicht === 'q' ? () => setAnsicht('intro') : onBack}>{ansicht === 'q' ? 'Beenden' : '← Zurück'}</a></div>
  );

  if (ansicht === 'intro') {
    return (
      <div>
        {kopf}
        <h1 style={{ color: 'var(--a)', fontSize: 26, textAlign: 'center', margin: '14px 0 4px' }}>{thema.name}</h1>
        <div style={{ color: 'var(--a)', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>{thema.sub}</div>
        <div className="txt"><H t={thema.intro} /></div>
        <div className="txt"><b>{thema.qs.length} Fragen.</b> Du siehst zuerst die Aufgabe. Danach drückst du auf «Prüfen». Bei einer falschen Antwort erklärt dir dieser Test das Thema Schritt für Schritt.</div>
        {thema.id === 'mathe' && thema.qs.some(q => q.time) && <div className="txt"><label><input type="checkbox" checked={zeit} onChange={e => setZeit(e.target.checked)} /> Mit Zeitlimit üben (30 Sekunden bei Schätzaufgaben)</label></div>}
        {n > 0 && <div className="txt" style={{ textAlign: 'center', color: 'var(--mut)' }}>Letztes Resultat: {ok} von {n} richtig</div>}
        <div className="btnrow">
          {demo && <button className="btn sec" onClick={() => setAnsicht('demo')}>Demo ansehen</button>}
          <button className="btn" onClick={() => start(false)}>Start</button>
          {n > 0 && <button className="btn sec" onClick={() => start(true)}>Nur falsche Fragen üben</button>}
        </div>
      </div>
    );
  }

  if (ansicht === 'demo') {
    return (
      <div>
        {kopf}
        <Frage key="demo" q={demo} thema={thema} zeitlimit={false} weiterText="Zurück" onWeiter={() => setAnsicht('intro')} />
      </div>
    );
  }

  if (ansicht === 'res') {
    const by = {};
    let richtig = 0;
    fragen.forEach(q => { const v = res[q.id] ? 1 : 0; richtig += v; const b = (by[q.ck] = by[q.ck] || { n: 0, ok: 0 }); b.n++; b.ok += v; });
    const strong = [], weak = [];
    const name = k => (thema.konzepte[k] ? thema.konzepte[k].n : k);
    Object.keys(by).forEach(k => { const p = by[k].ok / by[k].n; if (p >= 0.8) strong.push(name(k)); else if (p < 0.6) weak.push(name(k)); });
    return (
      <div className="res">
        {kopf}
        <div style={{ textAlign: 'center', color: 'var(--a)', fontWeight: 'bold', marginBottom: 6 }}>Auswertung: {thema.name}</div>
        <div className="score">{richtig} / {fragen.length}</div>
        <div style={{ textAlign: 'center', color: 'var(--mut)', fontSize: 13 }}>{Math.round(richtig / fragen.length * 100)} % richtig</div>
        <table><tbody>{Object.keys(by).map(k => <tr key={k}><td>{name(k)}</td><td>{by[k].ok} / {by[k].n}</td></tr>)}</tbody></table>
        <div className="fbk ok" style={{ marginTop: 16 }}><b>Stärken:</b> {strong.length ? strong.join(', ') : 'Noch keine klare Stärke. Das kommt mit Üben!'}</div>
        <div className="fbk" style={{ marginTop: 10, background: 'var(--orbg)', border: '1.5px solid var(--or)' }}><b>Nächster Schritt:</b> {weak.length ? 'Übe nochmals: ' + weak.join(', ') + '. Lies dazu die Rezepte oben bei den falschen Fragen und wiederhole nur die falschen Fragen.' : 'Sehr gut! Erhöhe das Tempo (Zeitlimit einschalten) oder wechsle zum nächsten Thema.'}</div>
        <div className="btnrow"><button className="btn" onClick={() => start(true)}>Falsche Fragen wiederholen</button><button className="btn sec" onClick={() => start(false)}>Nochmals von vorne</button><button className="btn sec" onClick={() => setAnsicht('intro')}>Zurück</button></div>
      </div>
    );
  }

  const q = fragen[idx];
  return (
    <div>
      {kopf}
      <Frage key={q.id + ':' + idx} q={q} thema={thema} zeitlimit={thema.id === 'mathe' ? zeit : true} onFertig={fertig} weiterText={idx + 1 < fragen.length ? 'Weiter' : 'Auswertung'} onWeiter={() => { if (idx + 1 < fragen.length) setIdx(idx + 1); else setAnsicht('res'); }} />
    </div>
  );
}

// ─── Dojo: Zufallsfragen mit Gürtel und XP ─────────────────────────────────
function waehleFrage(thema, dojo, letzteId) {
  const offen = thema.qs.filter(q => !dojo.geloest.includes('mc:' + q.id));
  let pool = offen.length ? offen : thema.qs;
  if (pool.length > 1) pool = pool.filter(q => q.id !== letzteId);
  return zufall(pool);
}

function MulticheckDojo({ thema, dm, dark, isMobile, onBack, onFehler, onRemoveFehler }) {
  const dj = dojoPalette(dark);
  const [dojo, setDojo] = useState(ladeDojo);
  const [meldung, setMeldung] = useState(() => ({ spruch: zufall(SENSEI_SPRUECHE.start), aufstieg: null }));
  const [runde, setRunde] = useState(0);
  const [q, setQ] = useState(() => waehleFrage(thema, ladeDojo(), null));
  const geloest = thema.qs.filter(x => dojo.geloest.includes('mc:' + x.id)).length;

  function fertig(richtig, frage) {
    const id = 'mc:' + frage.id;
    const res = verbucheAntwort(dojo, richtig, id);
    setDojo(res.state);
    speichereDojo(res.state);
    if (richtig) onRemoveFehler(id); else onFehler(id);
    const aufstieg = res.aufstieg ? guertelIndex(res.state.xp) : null;
    setMeldung({ spruch: zufall(SENSEI_SPRUECHE[aufstieg !== null ? 'aufstieg' : richtig ? 'richtig' : 'falsch']), aufstieg });
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 10, fontSize: isMobile ? 17 : 19, fontWeight: 800, color: dj.tinte }}><Hanko size={32} dark={dark} /> Dojo: {thema.name}</p>
        <button onClick={onBack} aria-label="Dojo verlassen" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: dm.text3, padding: 4 }}>✕</button>
      </div>
      {meldung.aufstieg !== null && <AufstiegMeldung index={meldung.aufstieg} spruch={meldung.spruch} onClose={() => setMeldung(m => ({ ...m, aufstieg: null }))} dark={dark} />}
      <DojoKopf state={dojo} aufstieg={meldung.aufstieg !== null} spruch={meldung.aufstieg !== null ? null : meldung.spruch} dark={dark} isMobile={isMobile} />
      <p style={{ margin: '0 0 12px', fontSize: 12, fontWeight: 700, color: dj.tinte2 }}>Gelöst in diesem Thema: {geloest} von {thema.qs.length} · XP gibt es nur beim ersten richtigen Lösen.</p>
      <div style={{ background: dj.cremeKarte, border: `1px solid ${dj.rand}`, borderLeft: `5px solid ${dj.rot}`, borderRadius: 16, padding: isMobile ? '18px 14px' : '24px 26px' }}>
        <Frage key={runde} q={q} thema={thema} zeitlimit={false} onFertig={fertig} weiterText="Nächste Frage" onWeiter={() => { setQ(waehleFrage(thema, dojo, q.id)); setRunde(r => r + 1); }} />
      </div>
    </div>
  );
}

// ─── Übersicht und Themenseite ─────────────────────────────────────────────
function ThemaKachel({ t, dm, onOpen, isMobile }) {
  const lock = t.bald;
  return (
    <button disabled={lock} onClick={() => onOpen(t.id)} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: isMobile ? '18px 8px' : '22px 12px', borderRadius: 16, border: `2px solid ${lock ? dm.border : MC_BLAU + '55'}`, background: lock ? dm.bg3 : dm.card, cursor: lock ? 'not-allowed' : 'pointer', opacity: lock ? 0.65 : 1 }}>
      {lock && <span style={{ position: 'absolute', top: 8, right: 10, fontSize: 10, fontWeight: 700, color: dm.text3, background: dm.bg, border: `1px solid ${dm.border}`, borderRadius: 20, padding: '1px 8px' }}>🔒 Bald</span>}
      <span style={{ fontSize: 30, filter: lock ? 'grayscale(1)' : 'none' }}>{t.emoji}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: lock ? dm.text3 : dm.text, textAlign: 'center' }}>{t.name}</span>
      {!lock && <span style={{ fontSize: 11, color: dm.text3, textAlign: 'center' }}>{t.qs.length} Fragen</span>}
    </button>
  );
}

export default function MulticheckPage({ dm, dark, isMobile, onBack, onFehler = () => {}, onRemoveFehler = () => {}, startThema = null }) {
  const [themaId, setThemaId] = useState(startThema);
  const [teil, setTeil] = useState(null);
  const [unterId, setUnterId] = useState(null);
  const thema = themaId ? multicheckThema(themaId) : null;
  const dj = dojoPalette(dark);

  if (thema && teil === 'sensei') {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: dm.bg, fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
        <LernkartePage topic={thema.id} daten={multicheckLernkarten} fehlerPrefix="mcdojo" dm={dm} dark={dark} isMobile={isMobile} onClose={() => setTeil(null)} onFehler={onFehler} onRemoveFehler={onRemoveFehler} />
      </div>
    );
  }

  const zurueck = (text, fn) => (
    <button onClick={fn} style={{ padding: '9px 16px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: 8, cursor: 'pointer', color: dm.text2, fontSize: 13, marginBottom: 20 }}>{text}</button>
  );

  let inhalt;
  if (!thema) {
    inhalt = (
      <>
        {zurueck('← Startseite', onBack)}
        <h1 style={{ fontSize: isMobile ? 24 : 28, fontWeight: 800, color: dm.text, margin: '0 0 6px' }}>Multicheck IMS</h1>
        <p style={{ fontSize: 14, color: dm.text3, margin: '0 0 22px', lineHeight: 1.6 }}>Wähle ein Thema. Pro Thema gibt es die Übungsprüfung, das Dojo mit Zufallsfragen und Frag Sensei zum Lernen.</p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: 12 }}>
          {MULTICHECK_THEMEN.map(t => <ThemaKachel key={t.id} t={t} dm={dm} isMobile={isMobile} onOpen={setThemaId} />)}
        </div>
      </>
    );
  } else if (!teil) {
    const knopf = (key, symbol, titel, text, farbe) => (
      <button key={key} onClick={() => setTeil(key)} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', textAlign: 'left', padding: '16px 18px', marginBottom: 12, borderRadius: 14, border: `2px solid ${farbe}`, background: dm.card, cursor: 'pointer' }}>
        {symbol}
        <span style={{ flex: 1 }}>
          <span style={{ display: 'block', fontSize: 16, fontWeight: 800, color: dm.text }}>{titel}</span>
          <span style={{ display: 'block', fontSize: 13, color: dm.text2, marginTop: 2, lineHeight: 1.5 }}>{text}</span>
        </span>
      </button>
    );
    inhalt = (
      <>
        {zurueck('← Alle Themen', () => setThemaId(null))}
        <h1 style={{ fontSize: isMobile ? 24 : 28, fontWeight: 800, color: dm.text, margin: '0 0 4px' }}>{thema.emoji} {thema.name}</h1>
        <p style={{ fontSize: 14, color: dm.text3, margin: '0 0 22px' }}>{thema.sub}</p>
        <h2 style={{ fontSize: 16, fontWeight: 800, color: dm.text, margin: '0 0 4px' }}>📋 Üben</h2>
        <p style={{ fontSize: 13, color: dm.text2, margin: '0 0 12px', lineHeight: 1.5 }}>Wähle ein Unterthema. Du kannst jedes Unterthema beliebig oft wiederholen. Falsche Fragen kommen in die Fehler-Kiste.</p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: 12, marginBottom: 22 }}>
          {thema.unter.map(x => {
            const r = ladeErgebnis()[thema.id] || {};
            const n = x.qs.filter(q => r[q.id] != null).length;
            const richtig = x.qs.filter(q => r[q.id]).length;
            const erledigt = !x.bald && x.qs.length > 0 && n === x.qs.length;
            return (
              <button key={x.id} disabled={!!x.bald} onClick={() => { setUnterId(x.id); setTeil('ueben'); }} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: isMobile ? '18px 8px' : '20px 10px', borderRadius: 16, border: `2px solid ${x.bald ? dm.border : erledigt ? '#22c55e' : MC_BLAU}`, background: dm.card, cursor: x.bald ? 'default' : 'pointer', opacity: x.bald ? 0.6 : 1 }}>
                {x.bald && <span style={{ position: 'absolute', top: 8, right: 10, fontSize: 10, fontWeight: 700, color: dm.text3, background: dm.bg, border: `1px solid ${dm.border}`, borderRadius: 20, padding: '1px 8px' }}>🔒 Bald</span>}
                {erledigt && <span style={{ position: 'absolute', top: 6, right: 10, fontSize: 16, color: '#22c55e' }}>✓</span>}
                <span style={{ fontSize: 28, filter: x.bald ? 'grayscale(1)' : 'none' }}>{x.emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: x.bald ? dm.text3 : dm.text, textAlign: 'center' }}>{x.name}</span>
                {!x.bald && <span style={{ fontSize: 11, color: dm.text3 }}>{n > 0 ? `${richtig} von ${x.qs.length}` : `${x.qs.length} Fragen`}</span>}
              </button>
            );
          })}
        </div>
        {knopf('dojo', <Hanko size={40} dark={dark} />, 'Dojo', 'Zufallsfragen aus diesem Thema. Du sammelst XP und steigst im Gürtel auf.', DOJO_ROT)}
        {knopf('sensei', <span style={{ fontSize: 28 }}>🥋</span>, 'Frag Sensei', 'Kurz erklärt, mit Tipps für den Multicheck.', '#f59e0b')}
      </>
    );
  } else {
    const zu = () => setTeil(null);
    inhalt = (
      <div className={'mcq' + (dark ? ' dk' : '')}>
        {teil === 'ueben' && (() => {
          const x = thema.unter.find(y => y.id === unterId);
          return <Ueben thema={{ ...thema, qs: x.qs, name: x.name, sub: thema.name, intro: x.intro || thema.intro }} demo={x.demo} dm={dm} dark={dark} onBack={zu} onFehler={onFehler} onRemoveFehler={onRemoveFehler} />;
        })()}
        {teil === 'dojo' && <MulticheckDojo thema={thema} dm={dm} dark={dark} isMobile={isMobile} onBack={zu} onFehler={onFehler} onRemoveFehler={onRemoveFehler} />}
      </div>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: dm.bg, padding: isMobile ? '20px 16px 60px' : '40px', fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>{inhalt}</div>
      <style>{CSS}{GLOBAL_KEYFRAMES}</style>
    </main>
  );
}
