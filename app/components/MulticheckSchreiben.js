'use client';

// Multicheck IMS, Textschreiben: freie Texte schreiben (ohne automatische Bewertung) und der Schreib-Sprint im Dojo.
// Alles bleibt lokal im Browser (localStorage, Schlüssel kp_multicheck_text). Es wird nichts an einen Server gesendet.
import { useState } from 'react';
import { Hanko, DojoKopf, AufstiegMeldung, dojoPalette, zufall } from './Lernkarte';
import { ladeDojo, speichereDojo, guertelIndex, verbucheAntwort } from '../lib/dojo_guertel';
import { SENSEI_SPRUECHE } from '../lib/sensei_sprueche';
import { TEXT_MIN, DOJO_MIN, AUFGABE, CHECKLISTE, BEISPIEL, BEISPIEL_ARTEN, DOJO_THEMEN } from '../lib/multicheck/schreib_daten.mjs';
import { kannAbschicken, lade, entwurfSpeichern, abschicken, loeschen } from '../lib/multicheck/schreib_logik.mjs';

const speicher = () => (typeof window !== 'undefined' ? window.localStorage : { getItem: () => null, setItem: () => {} });
const woerter = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);
const datumText = (iso) => { try { return new Date(iso).toLocaleDateString('de-CH'); } catch { return ''; } };
const ersteZeile = (t) => { const z = t.split('\n')[0]; return z.length > 70 ? z.slice(0, 70) + '…' : z; };

export function anzahlTexte() {
  return lade(speicher()).texte.length;
}

function Textfeld({ text, setText, min }) {
  const n = text.trim().length;
  return (
    <>
      <textarea className="stx" lang="de-CH" spellCheck autoComplete="off" value={text} onChange={e => setText(e.target.value)} placeholder="Schreibe hier deinen Text …" />
      <div className="txt" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--mut)', fontSize: 12.5, margin: '4px auto 0' }}>
        <span>{text.length} Zeichen · {woerter(text)} Wörter</span>
        <span>{n >= min ? 'Du kannst abschicken.' : `Noch ${min - n} Zeichen bis zum Abschicken`}</span>
      </div>
    </>
  );
}

// ─── Üben: drei Runden «Gedanken formulieren» ───────────────────────────────
export function SchreibTeil({ thema, unter, onBack }) {
  const qs = unter.qs;
  const [ansicht, setAnsicht] = useState('menu');
  const [runde, setRunde] = useState(0);
  const [wahl, setWahl] = useState(0);
  const [text, setText] = useState('');
  const [sendId, setSendId] = useState(null);
  const [haken, setHaken] = useState([]);
  const [offenId, setOffenId] = useState(null);
  const [loeschId, setLoeschId] = useState(null);
  const [kopiertId, setKopiertId] = useState(null);
  const [version, setVersion] = useState(0);
  const daten = lade(speicher());
  void version;

  function oeffne(i) {
    const e = lade(speicher()).entwuerfe[i];
    setRunde(i); setWahl(e ? e.wahl : 0); setText(e ? e.text : ''); setSendId(null); setHaken([]);
    setAnsicht('schreiben');
  }
  function aendereText(t) { setText(t); entwurfSpeichern(speicher(), runde, wahl, t); }
  function aendereWahl(w) { setWahl(w); entwurfSpeichern(speicher(), runde, w, text); }
  function senden() {
    const id = abschicken(speicher(), { runde, thema: qs[runde].themen[wahl], text, id: sendId });
    if (!id) return;
    setSendId(id); setAnsicht('gesendet'); setVersion(v => v + 1);
  }
  // Thema und Text in die Zwischenablage kopieren (nur lokal, nichts wird gesendet)
  async function kopieren(t) {
    const inhalt = t.thema + '\n\n' + t.text;
    try {
      await navigator.clipboard.writeText(inhalt);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = inhalt; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch { /* nicht möglich */ }
      document.body.removeChild(ta);
    }
    setKopiertId(t.id);
    setTimeout(() => setKopiertId(cur => (cur === t.id ? null : cur)), 2000);
  }
  function ueberarbeiten() { entwurfSpeichern(speicher(), runde, wahl, text); setAnsicht('schreiben'); }
  function naechste() { if (runde + 1 < qs.length) oeffne(runde + 1); else setAnsicht('menu'); }

  const kopf = (
    <div className="qhead"><span>{unter.name}{ansicht === 'schreiben' || ansicht === 'gesendet' ? ` · Runde ${runde + 1} von ${qs.length}` : ''}</span><a onClick={ansicht === 'menu' ? onBack : () => setAnsicht('menu')}>{ansicht === 'menu' ? '← Zurück' : 'Zur Übersicht'}</a></div>
  );

  if (ansicht === 'menu') {
    return (
      <div>
        {kopf}
        <h1 style={{ color: 'var(--a)', fontSize: 26, textAlign: 'center', margin: '14px 0 4px' }}>{unter.name}</h1>
        <div style={{ color: 'var(--a)', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>{thema.name}</div>
        <div className="txt">{unter.intro}</div>
        <div className="txt">Es gibt keine automatische Bewertung und kein Zeitlimit. Dein Text bleibt auf diesem Gerät. Nach dem Abschicken bekommst du eine Checkliste zum Selbstprüfen.</div>
        <div className="btnrow" style={{ flexDirection: 'column', alignItems: 'center' }}>
          {qs.map((q, i) => <button key={q.id} className="btn" onClick={() => oeffne(i)}>Runde {i + 1}{daten.entwuerfe[i] ? ' · Entwurf vorhanden' : ''}{daten.texte.some(t => t.runde === i) ? ' ✓' : ''}</button>)}
          <button className="btn sec" onClick={() => setAnsicht('beispiel')}>Beispieltext ansehen</button>
          <button className="btn sec" onClick={() => setAnsicht('meine')}>Meine Texte ({daten.texte.length})</button>
        </div>
      </div>
    );
  }

  if (ansicht === 'beispiel') {
    return (
      <div>
        {kopf}
        <h2 className="qt">Beispieltext: {BEISPIEL.thema}</h2>
        <div className="txt">So kann ein Text aufgebaut sein. Die Farben zeigen die Teile. Dieser Text zählt nicht.</div>
        <div className="mtx" style={{ lineHeight: 2 }}>
          {BEISPIEL.teile.map((t, i) => <span key={i} style={{ background: BEISPIEL_ARTEN[t.art][1], borderRadius: 4, padding: '2px 3px', marginRight: 4 }}>{t.t} </span>)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', margin: '10px 0' }}>
          {Object.values(BEISPIEL_ARTEN).map(([name, farbe]) => <span key={name} style={{ background: farbe, color: '#222', borderRadius: 6, padding: '3px 10px', fontSize: 13, fontWeight: 'bold' }}>{name}</span>)}
        </div>
        <div className="btnrow"><button className="btn" onClick={() => setAnsicht('menu')}>Zurück</button></div>
      </div>
    );
  }

  if (ansicht === 'meine') {
    const liste = [...daten.texte].reverse();
    return (
      <div>
        {kopf}
        <h2 className="qt">Meine Texte</h2>
        <div className="txt">Diese Texte sind nur auf diesem Gerät gespeichert.</div>
        {liste.length === 0 && <div className="txt" style={{ textAlign: 'center', color: 'var(--mut)' }}>Du hast noch keinen Text abgeschickt.</div>}
        {liste.map(t => (
          <div key={t.id} className="vzs" style={{ maxWidth: 700, margin: '8px auto' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <a style={{ cursor: 'pointer', flex: 1, minWidth: 200 }} onClick={() => setOffenId(offenId === t.id ? null : t.id)}>
                <b>{datumText(t.datum)} · {t.thema}</b><br /><span style={{ color: 'var(--mut)', fontSize: 13 }}>{ersteZeile(t.text)}</span>
              </a>
              <button className="btn sec" style={{ padding: '4px 10px' }} onClick={() => kopieren(t)}>{kopiertId === t.id ? 'Kopiert ✓' : 'Text kopieren'}</button>
              {loeschId === t.id
                ? <span style={{ display: 'flex', gap: 6 }}><button className="btn sec" style={{ padding: '4px 10px' }} onClick={() => { loeschen(speicher(), t.id); setLoeschId(null); setOffenId(null); setVersion(v => v + 1); }}>Wirklich löschen</button><button className="btn sec" style={{ padding: '4px 10px' }} onClick={() => setLoeschId(null)}>Abbrechen</button></span>
                : <button className="btn sec" style={{ padding: '4px 10px' }} onClick={() => setLoeschId(t.id)}>Löschen</button>}
            </div>
            {offenId === t.id && <div style={{ whiteSpace: 'pre-wrap', marginTop: 8, lineHeight: 1.6, fontSize: 14 }}>{t.text}</div>}
          </div>
        ))}
        <div className="btnrow"><button className="btn" onClick={() => setAnsicht('menu')}>Zurück</button></div>
      </div>
    );
  }

  const q = qs[runde];
  if (ansicht === 'gesendet') {
    return (
      <div>
        {kopf}
        <h2 className="qt">{q.themen[wahl]}</h2>
        <div className="vsw" style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', gap: 18 }}>
          <div className="mtx" style={{ flex: '1 1 320px', margin: 0, whiteSpace: 'pre-wrap' }}>{text}</div>
          <div style={{ flex: '1 1 260px' }}>
            <b>Checkliste zum Abhaken</b>
            <div className="txt" style={{ fontSize: 12.5, color: 'var(--mut)', margin: '2px 0 6px' }}>Nur für dich, ohne Resultat.</div>
            {CHECKLISTE.map((c, i) => (
              <label key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', margin: '6px 0', fontSize: 14, lineHeight: 1.45, cursor: 'pointer' }}>
                <input type="checkbox" checked={!!haken[i]} onChange={() => setHaken(h => { const n = h.slice(); n[i] = !n[i]; return n; })} style={{ marginTop: 3 }} />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="btnrow"><button className="btn sec" onClick={ueberarbeiten}>Text überarbeiten</button><button className="btn" onClick={naechste}>{runde + 1 < qs.length ? 'Nächste Runde' : 'Fertig'}</button></div>
      </div>
    );
  }

  return (
    <div>
      {kopf}
      <h2 className="qt">Gedanken formulieren</h2>
      <div className="instr">{AUFGABE}</div>
      <div style={{ maxWidth: 700, margin: '0 auto 10px' }}>
        <label htmlFor="sw-thema" style={{ fontSize: 13, fontWeight: 'bold', display: 'block', marginBottom: 4 }}>Thema</label>
        <select id="sw-thema" className="sel" value={wahl} onChange={e => aendereWahl(Number(e.target.value))} style={{ width: '100%', padding: 8, fontSize: 15, borderRadius: 8, border: '1.5px solid var(--a)', background: 'var(--bg)', color: 'var(--tx)' }}>
          {q.themen.map((t, i) => <option key={i} value={i}>{t}</option>)}
        </select>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <Textfeld text={text} setText={aendereText} min={TEXT_MIN} />
      </div>
      <div className="btnrow"><button className="btn" disabled={!kannAbschicken(text)} onClick={senden}>Abschicken</button></div>
    </div>
  );
}

// ─── Dojo: Schreib-Sprint ───────────────────────────────────────────────────
function waehleSprint(dojo, letzte) {
  const ids = DOJO_THEMEN.map((_, i) => i);
  const offen = ids.filter(i => !dojo.geloest.includes('mc:schreiben-d' + (i + 1)));
  let pool = offen.length ? offen : ids;
  if (pool.length > 1) pool = pool.filter(i => i !== letzte);
  return zufall(pool);
}

export function SchreibDojo({ thema, dm, dark, isMobile, onBack }) {
  const dj = dojoPalette(dark);
  const [dojo, setDojo] = useState(ladeDojo);
  const [meldung, setMeldung] = useState(() => ({ spruch: zufall(SENSEI_SPRUECHE.start), aufstieg: null }));
  const [idx, setIdx] = useState(() => waehleSprint(ladeDojo(), null));
  const [text, setText] = useState(() => '');
  const [gesendet, setGesendet] = useState(false);
  const [gestartet, setGestartet] = useState(false);
  const s = DOJO_THEMEN[idx];
  const geloest = DOJO_THEMEN.filter((_, i) => dojo.geloest.includes('mc:schreiben-d' + (i + 1))).length;
  const wert = gestartet ? text : s.anfang + ' ';

  function senden() {
    if (!kannAbschicken(wert, DOJO_MIN)) return;
    const res = verbucheAntwort(dojo, true, 'mc:schreiben-d' + (idx + 1));
    setDojo(res.state);
    speichereDojo(res.state);
    const aufstieg = res.aufstieg ? guertelIndex(res.state.xp) : null;
    setMeldung({ spruch: zufall(SENSEI_SPRUECHE[aufstieg !== null ? 'aufstieg' : 'richtig']), aufstieg });
    setGesendet(true);
  }
  function weiter() {
    setIdx(waehleSprint(dojo, idx)); setText(''); setGestartet(false); setGesendet(false);
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 10, fontSize: isMobile ? 17 : 19, fontWeight: 800, color: dj.tinte }}><Hanko size={32} dark={dark} /> Dojo: {thema.name}</p>
        <button onClick={onBack} aria-label="Dojo verlassen" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: dm.text3, padding: 4 }}>✕</button>
      </div>
      {meldung.aufstieg !== null && <AufstiegMeldung index={meldung.aufstieg} spruch={meldung.spruch} onClose={() => setMeldung(m => ({ ...m, aufstieg: null }))} dark={dark} />}
      <DojoKopf state={dojo} aufstieg={meldung.aufstieg !== null} spruch={meldung.aufstieg !== null ? null : meldung.spruch} dark={dark} isMobile={isMobile} />
      <p style={{ margin: '0 0 12px', fontSize: 12, fontWeight: 700, color: dj.tinte2 }}>Geschrieben in diesem Thema: {geloest} von {DOJO_THEMEN.length} · XP gibt es nur beim ersten Abschicken pro Thema.</p>
      <div style={{ background: dj.cremeKarte, border: `1px solid ${dj.rand}`, borderLeft: `5px solid ${dj.rot}`, borderRadius: 16, padding: isMobile ? '18px 14px' : '24px 26px', color: dm.text }}>
        <p style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: dj.tinte2 }}>Schreib-Sprint</p>
        <p style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 800 }}>Thema: {s.thema}</p>
        <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.5 }}>Schreibe drei Sätze. Beginne mit dem Anfangssatz. Mindestens {DOJO_MIN} Zeichen. Es gibt keine Bewertung.</p>
        <div>
          <textarea className="stx" lang="de-CH" spellCheck autoComplete="off" disabled={gesendet} value={wert} onChange={e => { setGestartet(true); setText(e.target.value); }} style={{ minHeight: 130 }} />
          <div className="txt" style={{ color: 'var(--mut)', fontSize: 12.5, margin: '4px 0 0' }}>{wert.length} Zeichen · {kannAbschicken(wert, DOJO_MIN) ? 'Du kannst abschicken.' : `Noch ${DOJO_MIN - wert.trim().length} Zeichen bis zum Abschicken`}</div>
          <div className="btnrow">
            {!gesendet
              ? <button className="btn" disabled={!kannAbschicken(wert, DOJO_MIN)} onClick={senden}>Abschicken</button>
              : <><span style={{ alignSelf: 'center', fontWeight: 700 }}>Gut gemacht! Dein Text bleibt nur hier.</span><button className="btn" onClick={weiter}>Nächster Sprint</button></>}
          </div>
        </div>
      </div>
    </div>
  );
}
