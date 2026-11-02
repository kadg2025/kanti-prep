'use client';

// Multicheck IMS: Probeprüfung. Gebiet für Gebiet, mit Rückwärts-Uhr, ohne Rückmeldung während der Aufgaben,
// mit Selbsteinschätzung und Auswertung am Ende. Alle Zeiten sind geschätzt (probe_config.mjs).
// Alles bleibt lokal im Browser (localStorage). Die Aufgaben-Bausteine kommen von Multicheck.js («kit»).
import { useState, useEffect, useRef } from 'react';
import { MULTICHECK_THEMEN } from '../lib/multicheck';
import { VERSIONEN, HINWEIS, PAUSE, baueVersion, unterFuerFragen } from '../lib/multicheck/probe_config.mjs';
import { bewerte, prozent, einschaetzung, SELBST_SCHRITTE, zeitText, darfSpringen, ladeLauf, speichereLauf, loescheLauf, ladeVerlauf, verlaufHinzu } from '../lib/multicheck/probe_logik.mjs';
import { istLeer, auswerten, erwartetAntwort } from '../lib/multicheck/pruefen';
import { LERNZEIT } from '../lib/multicheck/merk_konfig.mjs';
import { RUNDEN, TEXT_MIN } from '../lib/multicheck/schreib_daten.mjs';
import { kannAbschicken, abschicken } from '../lib/multicheck/schreib_logik.mjs';
import { renderRaster } from '../lib/multicheck/raster';

const THEMEN = Object.fromEntries(MULTICHECK_THEMEN.filter(t => !t.bald).map(t => [t.id, t]));
const PR = { istLeer, auswerten, erwartetAntwort };
const speicher = () => (typeof window !== 'undefined' ? window.localStorage : { getItem: () => null, setItem: () => {} });

function neuerLauf(version) {
  return { version, si: 0, phase: 'uebersicht', sub: 0, qi: 0, antworten: {}, restMs: 0, ergebnisse: {}, selbstTmp: null, beendenFrage: false, schreibText: '', schreibWahl: 0, gestartet: new Date().toISOString(), gespeichert: false };
}
const naechsteStation = (x, anzahl) => (x.si + 1 >= anzahl ? { phase: 'ende' } : { si: x.si + 1, phase: 'uebersicht', sub: 0, qi: 0, restMs: 0, selbstTmp: null });
const beantwortet = (q, U) => !!U && (q.items ? !!U.rows && U.rows.some(r => r != null) : !istLeer(q, U));

// ─── Einstieg auf der Übersicht ─────────────────────────────────────────────
export function ProbeBereich({ dm, onStart }) {
  const [version, setVersion] = useState(0);
  const [abbr, setAbbr] = useState(false);
  const lauf = ladeLauf(speicher());
  const aktiv = lauf && lauf.version && lauf.phase !== 'ende';
  const verlauf = ladeVerlauf(speicher());
  void version;
  const karte = (key, aus) => (
    <button key={key} disabled={aus} onClick={() => onStart(key)} style={{ flex: '1 1 220px', textAlign: 'left', padding: '16px 18px', borderRadius: 14, border: `2px solid ${aus ? dm.border : '#0a35b0'}`, background: dm.card, cursor: aus ? 'default' : 'pointer', opacity: aus ? 0.5 : 1 }}>
      <span style={{ display: 'block', fontSize: 16, fontWeight: 800, color: dm.text }}>{VERSIONEN[key].titel}</span>
    </button>
  );
  return (
    <div style={{ marginTop: 30 }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: dm.text, margin: '0 0 6px' }}>Probeprüfung</h2>
      <p style={{ fontSize: 13.5, color: dm.text3, margin: '0 0 12px', lineHeight: 1.6 }}>Alle Gebiete nacheinander, mit Rückwärts-Uhr und ohne Rückmeldung. {HINWEIS} Die Zeiten sind geschätzt.</p>
      {aktiv && (
        <div style={{ border: `2px solid #f59e0b`, borderRadius: 12, padding: '12px 14px', marginBottom: 12, background: dm.card, color: dm.text, fontSize: 14 }}>
          <b>Laufende Probeprüfung</b> ({VERSIONEN[lauf.version].name}). Du kannst sie fortsetzen.
          <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
            <button onClick={() => onStart(lauf.version)} style={{ padding: '7px 14px', borderRadius: 8, border: 'none', background: '#0a35b0', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Fortsetzen</button>
            {abbr
              ? <><button onClick={() => { loescheLauf(speicher()); setAbbr(false); setVersion(v => v + 1); }} style={{ padding: '7px 14px', borderRadius: 8, border: `1px solid ${dm.border}`, background: 'none', color: dm.text, cursor: 'pointer' }}>Wirklich abbrechen</button><button onClick={() => setAbbr(false)} style={{ padding: '7px 14px', borderRadius: 8, border: `1px solid ${dm.border}`, background: 'none', color: dm.text2, cursor: 'pointer' }}>Nein</button></>
              : <button onClick={() => setAbbr(true)} style={{ padding: '7px 14px', borderRadius: 8, border: `1px solid ${dm.border}`, background: 'none', color: dm.text2, cursor: 'pointer' }}>Probeprüfung abbrechen</button>}
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{Object.keys(VERSIONEN).map(k => karte(k, aktiv))}</div>
      {verlauf.length > 0 && (
        <div style={{ marginTop: 14, fontSize: 13, color: dm.text2 }}>
          <b style={{ color: dm.text }}>Letzte Versuche</b> (nur auf diesem Gerät gespeichert)
          <ul style={{ margin: '4px 0 0 18px', padding: 0 }}>
            {[...verlauf].reverse().map((v, i) => <li key={i}>{new Date(v.datum).toLocaleDateString('de-CH')} · {VERSIONEN[v.version].name}: {v.richtig} von {v.total} Aufgaben richtig</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── Beispiel (zählt nicht, ohne Zeitbeschränkung) ──────────────────────────
function Beispiel({ kit, demo, thema }) {
  const { Frage, NumCmpBlock } = kit;
  if (demo.type === 'numcmp') {
    return (
      <div>
        <div className="txt">Beispiel: Zeile 1 ist <b>nicht gleich</b> (die dritte Stelle ist verschieden), Zeile 2 ist <b>gleich</b>.</div>
        <NumCmpBlock q={demo} rows={demo.items.map(z => (z.gleich ? 'g' : 'n'))} setRows={() => {}} locked zeige={false} />
      </div>
    );
  }
  if (demo.type === 'coord') {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="txt">Beispiel: Das rote Feld liegt oben in der Mitte. Seine Koordinaten sind <b>23</b>.</div>
        <span className="fgs cob" dangerouslySetInnerHTML={{ __html: renderRaster(demo.items[0].c, demo.items[0].r) }} />
      </div>
    );
  }
  return <Frage key={demo.id} q={demo} thema={thema} zeitlimit={false} demo weiterText="OK" onWeiter={() => {}} />;
}

// ─── Probeprüfung ───────────────────────────────────────────────────────────
export function ProbePruefung({ kit, version, dm, dark, isMobile, onBack, onFehler }) {
  const { Frage, PiktoAntwort, TextAntwort, PiktoLern, Countdown, H, HB } = kit;
  const stationen = baueVersion(version, THEMEN);
  const [s, setS] = useState(() => { const g = ladeLauf(speicher()); return g && g.version === version && g.phase !== 'ende' ? g : neuerLauf(version); });
  const [abbr, setAbbr] = useState(false);
  const [gelegt, setGelegt] = useState(false);
  const [textZeit, setTextZeit] = useState(false);
  const upd = (patch) => setS(x => ({ ...x, ...patch }));
  const st = stationen[s.si];
  const thema = THEMEN[st.thema];
  const letzter = useRef(Date.now());
  const beendeRef = useRef(null);

  // Stand speichern (nach jedem Schritt und jeder Sekunde)
  useEffect(() => { if (s.phase === 'ende') loescheLauf(speicher()); else speichereLauf(speicher(), s); }, [s]);

  // Rückwärts-Uhr
  useEffect(() => {
    if (s.phase !== 'lauf' && s.phase !== 'pause') return;
    letzter.current = Date.now();
    const id = setInterval(() => {
      const jetzt = Date.now(); const d = jetzt - letzter.current; letzter.current = jetzt;
      setS(x => ({ ...x, restMs: Math.max(0, x.restMs - d) }));
    }, 1000);
    return () => clearInterval(id);
  }, [s.phase, s.si]);

  // Gebiet endet bei Zeitablauf automatisch
  useEffect(() => { if (s.phase === 'lauf' && s.restMs <= 0 && beendeRef.current) beendeRef.current(); }, [s.phase, s.restMs]);

  // Am Ende: Versuch lokal merken (die letzten drei bleiben gespeichert)
  function speichereVerlauf(ergebnisse) {
    const teile = stationen.filter(x => ergebnisse[x.id] && ergebnisse[x.id].total != null);
    verlaufHinzu(speicher(), {
      datum: new Date().toISOString(), version,
      richtig: teile.reduce((n, x) => n + ergebnisse[x.id].richtig, 0),
      total: teile.reduce((n, x) => n + ergebnisse[x.id].total, 0),
    });
  }
  // Ergebnisse übernehmen und zum nächsten Schritt gehen
  function geheWeiter(ergebnisse, naechste) {
    if (naechste.phase === 'ende') speichereVerlauf(ergebnisse);
    setS(x => ({ ...x, ergebnisse, beendenFrage: false, selbstTmp: null, ...naechste }));
  }

  function beendeGebiet() {
    const genutzt = Math.max(0, st.minuten * 60 - s.restMs / 1000);
    let erg = { genutztSek: Math.round(genutzt), uebrigSek: Math.round(s.restMs / 1000) };
    const mitSelbst = st.art === 'aufgaben' || st.art === 'merkantwort';
    if (mitSelbst) erg = { ...erg, ...bewerte(st.fragen, s.antworten, PR) };
    if (st.art === 'schreiben') {
      const ok = kannAbschicken(s.schreibText);
      if (ok) abschicken(speicher(), { runde: 0, thema: RUNDEN[0][s.schreibWahl], text: s.schreibText });
      erg = { ...erg, geschrieben: ok, zeichen: s.schreibText.trim().length };
    }
    geheWeiter({ ...s.ergebnisse, [st.id]: erg }, mitSelbst ? { phase: 'selbst' } : naechsteNachGebiet(s));
  }
  useEffect(() => { beendeRef.current = beendeGebiet; });
  function naechsteNachGebiet(x) {
    if (stationen[x.si].id === PAUSE.nach) return { phase: 'pause', restMs: PAUSE.minuten * 60000 };
    return naechsteStation(x, stationen.length);
  }

  function seiten() {
    if (st.art === 'aufgaben') {
      const l = unterFuerFragen(thema, st.fragen).map(x => ({ ...x, hinweis: st.thema === 'mathe' && x.unterId === 'rechnen' ? 'Notizpapier erlaubt.' : null }));
      return l.length ? l : [{ titel: st.name, html: thema.intro, demo: null }];
    }
    if (st.art === 'merkantwort') return [{ titel: 'Merkfähigkeit: Antwortteil', html: thema.unterInfo.pikto.antwortIntro + '<br><br>' + thema.unterInfo.text.antwortIntro }];
    if (st.art === 'schreiben') return [{ titel: 'Textschreiben', html: thema.unterInfo.gedanken.intro + '<br><br>In der Probeprüfung hast du ' + st.minuten + ' Minuten und keine Rechtschreibhilfe.' }];
    return [];
  }
  function startLauf() { upd({ phase: 'lauf', qi: 0, restMs: st.minuten * 60000, beendenFrage: false }); setTextZeit(false); }

  // ── Kopf: Gebiet, Uhr, Abbrechen
  const kopf = (uhr) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 10, fontSize: 13 }}>
      <b style={{ color: 'var(--a)' }}>{VERSIONEN[version].name} · {st.name}</b>
      {uhr && <b style={{ fontSize: 20, color: s.restMs < 60000 ? 'var(--bad)' : 'var(--tx)', fontFamily: 'monospace' }} aria-label="Restzeit">⏱ {zeitText(s.restMs / 1000)}</b>}
      {abbr
        ? <span><button className="btn sec" style={{ padding: '3px 10px' }} onClick={() => { loescheLauf(speicher()); onBack(); }}>Wirklich abbrechen</button> <button className="btn sec" style={{ padding: '3px 10px' }} onClick={() => setAbbr(false)}>Nein</button></span>
        : <a style={{ cursor: 'pointer', color: 'var(--mut)' }} onClick={() => setAbbr(true)}>Probeprüfung abbrechen</a>}
    </div>
  );

  // ── Übersichtsseite
  if (s.phase === 'uebersicht') {
    return (
      <div>
        {kopf(false)}
        <h2 className="qt">Ablauf</h2>
        <div style={{ maxWidth: 420, margin: '0 auto 16px' }}>
          {stationen.map((x, i) => (
            <div key={x.id}>
              <div style={{ padding: '6px 12px', borderRadius: 8, margin: '3px 0', fontWeight: i === s.si ? 800 : 500, background: i === s.si ? 'var(--soft)' : 'transparent', color: i === s.si ? 'var(--a)' : i < s.si ? 'var(--mut)' : 'var(--tx)' }}>
                {i === s.si ? '» ' : ''}{x.name}{x.minuten ? ` · ca. ${x.minuten} Min.` : ''}{i < s.si ? ' ✓' : ''}
              </div>
              {x.id === PAUSE.nach && <div style={{ padding: '3px 12px', color: 'var(--mut)', fontSize: 12.5 }}>Pause ({PAUSE.minuten} Min.)</div>}
            </div>
          ))}
        </div>
        <div className="txt" style={{ textAlign: 'center', color: 'var(--mut)', fontSize: 12.5 }}>{HINWEIS} Die Zeiten sind geschätzt.</div>
        <div className="btnrow"><button className="btn" onClick={() => upd({ phase: 'instr', sub: 0 })}>Weiter</button></div>
      </div>
    );
  }

  // ── Merkfähigkeit: Lernphase
  if (st.art === 'merklern' && (s.phase === 'instr' || s.phase === 'lern')) {
    const info = thema.unterInfo[s.sub === 0 ? 'pikto' : 'text'];
    const qLern = thema.qs.find(q => q.id === (s.sub === 0 ? st.lernIds.pikto : st.lernIds.text));
    if (s.phase === 'instr') {
      return (
        <div>
          {kopf(false)}
          <h2 className="qt">Merkfähigkeit: {s.sub === 0 ? 'Piktogramme' : 'Text'}</h2>
          <div className="txt"><H t={info.intro} /></div>
          <div className="txt">{s.sub === 0 ? 'Die Bilder bleiben' : 'Der Text bleibt'} <b>{s.sub === 0 ? LERNZEIT.pikto : LERNZEIT.text} Sekunden</b> sichtbar. Die Fragen dazu kommen am Ende der Prüfung.</div>
          <div className="btnrow"><button className="btn" onClick={() => { setTextZeit(false); upd({ phase: 'lern' }); }}>Lernphase starten</button></div>
        </div>
      );
    }
    return (
      <div>
        {kopf(false)}
        <Countdown key={'c' + s.sub} sek={s.sub === 0 ? LERNZEIT.pikto : LERNZEIT.text} onEnde={() => { if (s.sub === 0) upd({ phase: 'instr', sub: 1 }); else setTextZeit(true); }} />
        {s.sub === 0
          ? <PiktoLern keys={qLern.lernen} />
          : (textZeit ? <div className="txt" style={{ textAlign: 'center', marginTop: 30 }}>Die Zeit ist um. Klicke auf «Weiter».</div> : <div className="mtx">{qLern.text.map((a, i) => <p key={i}>{a}</p>)}</div>)}
        {s.sub === 1 && <div className="btnrow"><button className="btn" onClick={() => upd(naechsteStation(s, stationen.length))}>Weiter</button></div>}
      </div>
    );
  }

  // ── Instruktion und Beispiel
  if (s.phase === 'instr') {
    const sl = seiten();
    const seite = sl[s.sub];
    const letzte = s.sub >= sl.length - 1;
    return (
      <div>
        {kopf(false)}
        <h2 className="qt">{seite.titel}</h2>
        <div className="txt"><H t={seite.html} /></div>
        {seite.hinweis && <div className="txt" style={{ fontWeight: 'bold', color: 'var(--or)' }}>{seite.hinweis}</div>}
        {seite.demo && <div style={{ margin: '14px 0' }}><div className="txt" style={{ fontWeight: 'bold' }}>Beispiel (ohne Zeitbeschränkung, zählt nicht)</div><Beispiel kit={kit} demo={seite.demo} thema={thema} /></div>}
        <div className="btnrow"><button className="btn" onClick={() => (letzte ? startLauf() : upd({ sub: s.sub + 1 }))}>{letzte ? 'Aufgaben starten' : 'Weiter'}</button></div>
        {letzte && <div className="txt" style={{ textAlign: 'center', color: 'var(--mut)', fontSize: 12.5 }}>Mit dem Start läuft die Uhr: {st.minuten} Minuten (geschätzt).</div>}
      </div>
    );
  }

  const beendenUi = (
    <div style={{ marginTop: 14, textAlign: 'center' }}>
      {s.beendenFrage
        ? <span>Gebiet wirklich beenden? Danach gibt es kein Zurück. <button className="btn" style={{ padding: '4px 12px' }} onClick={beendeGebiet}>Ja, beenden</button> <button className="btn sec" style={{ padding: '4px 12px' }} onClick={() => upd({ beendenFrage: false })}>Nein</button></span>
        : <button className="btn sec" onClick={() => upd({ beendenFrage: true })}>Gebiet beenden</button>}
    </div>
  );

  // ── Aufgaben mit Uhr
  if (s.phase === 'lauf' && st.art === 'aufgaben') {
    const fragen = st.fragen;
    const q = fragen[s.qi];
    const rechnen = st.thema === 'mathe' && thema.unter.find(u => u.id === 'rechnen').qs.includes(q);
    return (
      <div>
        {kopf(true)}
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center', margin: '4px 0 12px' }}>
          {fragen.map((x, i) => {
            const aus = i !== s.qi && !darfSpringen(fragen, s.qi, i);
            return <button key={x.id} disabled={aus} onClick={() => upd({ qi: i })} style={{ minWidth: 34, height: 34, borderRadius: 8, border: i === s.qi ? '2px solid var(--a)' : '1px solid var(--bd)', background: beantwortet(x, s.antworten[x.id]) ? 'var(--soft)' : 'var(--bg)', color: 'var(--tx)', fontWeight: i === s.qi ? 800 : 500, opacity: aus ? 0.4 : 1, cursor: aus ? 'default' : 'pointer' }}>{i + 1}</button>;
          })}
        </div>
        {rechnen && <div className="txt" style={{ fontWeight: 'bold', color: 'var(--or)', textAlign: 'center' }}>Notizpapier erlaubt.</div>}
        <Frage key={q.id} q={q} thema={thema} zeitlimit={false} pruefung initialU={s.antworten[q.id] || null} onU={u => setS(x => ({ ...x, antworten: { ...x.antworten, [q.id]: u } }))} weiterText="" onWeiter={() => {}} />
        <div className="btnrow">
          <button className="btn sec" disabled={!darfSpringen(fragen, s.qi, s.qi - 1)} onClick={() => upd({ qi: s.qi - 1 })}>Zurück</button>
          {s.qi + 1 < fragen.length
            ? <button className="btn" onClick={() => upd({ qi: s.qi + 1 })}>Weiter</button>
            : <button className="btn" onClick={() => upd({ beendenFrage: true })}>Fertig</button>}
        </div>
        {beendenUi}
      </div>
    );
  }

  // ── Merkfähigkeit: Antwortteil
  if (s.phase === 'lauf' && st.art === 'merkantwort') {
    const [qp, qt] = st.fragen;
    const rows = (q) => (s.antworten[q.id] && s.antworten[q.id].rows) || q.items.map(() => null);
    const setRows = (q) => (r) => setS(x => ({ ...x, antworten: { ...x.antworten, [q.id]: { rows: r } } }));
    return (
      <div>
        {kopf(true)}
        <h2 className="qt">Piktogramme</h2>
        <div className="txt"><H t={thema.unterInfo.pikto.antwortIntro} /></div>
        <HB className="instr" t={qp.instr} />
        <PiktoAntwort q={qp} rows={rows(qp)} setRows={setRows(qp)} />
        <h2 className="qt" style={{ marginTop: 30 }}>Text</h2>
        <div className="txt"><H t={thema.unterInfo.text.antwortIntro} /></div>
        <HB className="instr" t={qt.instr} />
        <TextAntwort q={qt} rows={rows(qt)} setRows={setRows(qt)} />
        {beendenUi}
      </div>
    );
  }

  // ── Textschreiben
  if (s.phase === 'lauf' && st.art === 'schreiben') {
    return (
      <div>
        {kopf(true)}
        <h2 className="qt">Gedanken formulieren</h2>
        <div className="instr">{thema.qs[0].instr}</div>
        <div style={{ maxWidth: 700, margin: '0 auto 10px' }}>
          <label htmlFor="pp-thema" style={{ fontSize: 13, fontWeight: 'bold', display: 'block', marginBottom: 4 }}>Thema</label>
          <select id="pp-thema" value={s.schreibWahl} onChange={e => upd({ schreibWahl: Number(e.target.value) })} style={{ width: '100%', padding: 8, fontSize: 15, borderRadius: 8, border: '1.5px solid var(--a)', background: 'var(--bg)', color: 'var(--tx)' }}>
            {RUNDEN[0].map((t, i) => <option key={i} value={i}>{t}</option>)}
          </select>
        </div>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <textarea className="stx" lang="de-CH" spellCheck={false} autoCorrect="off" autoCapitalize="off" autoComplete="off" value={s.schreibText} onChange={e => upd({ schreibText: e.target.value })} placeholder="Schreibe hier deinen Text …" />
          <div className="txt" style={{ color: 'var(--mut)', fontSize: 12.5, margin: '4px 0 0' }}>{s.schreibText.length} Zeichen · {kannAbschicken(s.schreibText) ? 'Dein Text wird am Ende in «Meine Texte» gespeichert.' : `Ab ${TEXT_MIN} Zeichen wird der Text gespeichert.`}</div>
        </div>
        {beendenUi}
      </div>
    );
  }

  // ── Selbsteinschätzung
  if (s.phase === 'selbst') {
    return (
      <div>
        {kopf(false)}
        <h2 className="qt">Selbsteinschätzung: {st.name}</h2>
        <div className="txt" style={{ textAlign: 'center' }}>Wie viel Prozent der Aufgaben hast du richtig gelöst?</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', margin: '14px 0' }}>
          {SELBST_SCHRITTE.map(p => <button key={p} className={'nb' + (s.selbstTmp === p ? ' sel' : '')} style={{ minWidth: 56, padding: '8px 10px' }} onClick={() => upd({ selbstTmp: p })}>{p} %</button>)}
        </div>
        <div className="btnrow"><button className="btn" disabled={s.selbstTmp == null} onClick={() => geheWeiter({ ...s.ergebnisse, [st.id]: { ...s.ergebnisse[st.id], selbst: s.selbstTmp } }, naechsteNachGebiet(s))}>Weiter</button></div>
      </div>
    );
  }

  // ── Pause
  if (s.phase === 'pause') {
    return (
      <div>
        {kopf(false)}
        <h2 className="qt">Pause</h2>
        <div className="txt" style={{ textAlign: 'center' }}>Mache eine Pause. Du kannst erst weitermachen, wenn die Zeit abgelaufen ist.</div>
        <div style={{ textAlign: 'center', fontSize: 40, fontFamily: 'monospace', fontWeight: 800, color: 'var(--a)', margin: '16px 0' }}>{zeitText(s.restMs / 1000)}</div>
        <div className="btnrow"><button className="btn" disabled={s.restMs > 0} onClick={() => upd({ ...naechsteStation(s, stationen.length) })}>Weiter</button></div>
        <div style={{ textAlign: 'center', marginTop: 10 }}><a style={{ cursor: 'pointer', fontSize: 12, color: 'var(--mut)' }} onClick={() => upd({ ...naechsteStation(s, stationen.length) })}>Pause überspringen (nur zum Üben)</a></div>
      </div>
    );
  }

  // ── Auswertung
  const mitWerten = stationen.filter(x => s.ergebnisse[x.id] && s.ergebnisse[x.id].total != null);
  const alleFehler = [...new Set(mitWerten.flatMap(x => s.ergebnisse[x.id].fehlerIds))];
  return (
    <div className="res" style={{ maxWidth: 680 }}>
      <h2 className="qt">Auswertung der Probeprüfung</h2>
      <div className="txt" style={{ textAlign: 'center', color: 'var(--mut)', fontSize: 12.5 }}>{HINWEIS} Die Zeiten waren geschätzt. Es gibt keine Prozentränge und keine Gesamtbewertung.</div>
      {mitWerten.map(x => {
        const r = s.ergebnisse[x.id];
        const tat = prozent(r);
        const e = r.selbst != null ? einschaetzung(r.selbst, tat) : null;
        const breit = (n) => (r.total ? (n / r.total * 100) : 0) + '%';
        return (
          <div key={x.id} style={{ margin: '14px 0', padding: '10px 12px', border: '1px solid var(--bd)', borderRadius: 12, background: 'var(--bg2)' }}>
            <b>{x.name}</b> <span style={{ color: 'var(--mut)', fontSize: 12.5 }}>· {r.richtig} richtig, {r.falsch} falsch, {r.offen} nicht bearbeitet (von {r.total})</span>
            <div style={{ display: 'flex', height: 16, borderRadius: 8, overflow: 'hidden', background: '#ddd', margin: '6px 0' }}>
              <div style={{ width: breit(r.richtig), background: '#22c55e' }} /><div style={{ width: breit(r.falsch), background: '#ef4444' }} /><div style={{ width: breit(r.offen), background: '#9ca3af' }} />
            </div>
            {r.selbst != null && (
              <>
                <div style={{ fontSize: 12.5, color: 'var(--mut)' }}>Selbsteinschätzung {r.selbst} % · tatsächlich richtig {tat} %</div>
                <div style={{ height: 8, borderRadius: 4, background: '#ddd', margin: '3px 0' }}><div style={{ width: r.selbst + '%', height: '100%', borderRadius: 4, background: '#16a34a' }} /></div>
                <div style={{ fontSize: 13 }}>{e.satz} <span style={{ color: 'var(--mut)', fontSize: 12 }}>(nur ein Übungshinweis)</span></div>
              </>
            )}
            <div style={{ fontSize: 12.5, color: 'var(--mut)', marginTop: 3 }}>Zeit: genutzt {zeitText(r.genutztSek)} · übrig {zeitText(r.uebrigSek)}</div>
          </div>
        );
      })}
      {s.ergebnisse.schreiben && (
        <div style={{ margin: '14px 0', padding: '10px 12px', border: '1px solid var(--bd)', borderRadius: 12, background: 'var(--bg2)' }}>
          <b>Textschreiben</b> <span style={{ color: 'var(--mut)', fontSize: 12.5 }}>· {s.ergebnisse.schreiben.geschrieben ? 'Text gespeichert in «Meine Texte»' : `kein Text gespeichert (unter ${TEXT_MIN} Zeichen)`} · Zeit: genutzt {zeitText(s.ergebnisse.schreiben.genutztSek)}, übrig {zeitText(s.ergebnisse.schreiben.uebrigSek)}</span>
        </div>
      )}
      <div className="btnrow">
        <button className="btn" disabled={gelegt || alleFehler.length === 0} onClick={() => { alleFehler.forEach(id => onFehler('mc:' + id)); setGelegt(true); }}>{gelegt ? 'In der Fehler-Kiste' : `Falsche Aufgaben in die Fehler-Kiste legen (${alleFehler.length})`}</button>
        <button className="btn sec" onClick={onBack}>Zurück zur Übersicht</button>
      </div>
    </div>
  );
}

