'use client';

import { useMemo, useState } from 'react';
import { aufsatzGms3 } from '../lib/gms3/deutsch/aufsatz';
import { ACCENT, TEXTSORTEN_FARBEN } from './AufsatzPage';
import {
  ablaufTitel,
  ablaufBloecke,
  textsortenTitel,
  textsortenHinweis,
  textsortenTipps,
  selbstcheckTitel,
  selbstcheckHinweis,
  selbstcheckPunkte,
  SELBSTCHECK_KEY,
} from '../lib/gms3/deutsch/aufsatzAnleitung';

const SEITEN_TITEL = {
  ablauf: { icon: '🗓️', titel: ablaufTitel },
  textsorten: { icon: '🗂️', titel: textsortenTitel },
  selbstcheck: { icon: '✅', titel: selbstcheckTitel },
};

function Karte({ dm, children, akzent = false }) {
  return (
    <div style={{
      border: `1px solid ${dm.border}`,
      borderLeft: akzent ? `4px solid ${ACCENT}` : `1px solid ${dm.border}`,
      borderRadius: '12px', background: dm.bg2,
      padding: '16px 18px', marginBottom: '12px',
    }}>
      {children}
    </div>
  );
}

function KartenTitel({ dm, children }) {
  return (
    <p style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '800', color: dm.text }}>{children}</p>
  );
}

function Liste({ dm, punkte }) {
  return (
    <ul style={{ margin: 0, padding: '0 0 0 20px', listStyle: 'disc' }}>
      {punkte.map((p, i) => (
        <li key={i} style={{ fontSize: '14px', lineHeight: '1.65', color: dm.text2, marginBottom: '5px' }}>{p}</li>
      ))}
    </ul>
  );
}

function Fussnote({ dm, children }) {
  return (
    <p style={{ margin: '10px 0 0 0', fontSize: '12px', lineHeight: '1.5', color: dm.text3 }}>{children}</p>
  );
}

// ─── «So läuft der Aufsatz» ────────────────────────────────────────────────

function AblaufSeite({ dm }) {
  return (
    <>
      {ablaufBloecke.map((block, i) => {
        if (block.art === 'hinweis') {
          return (
            <div key={i} style={{
              border: `1px dashed ${dm.border}`, borderRadius: '10px',
              padding: '12px 14px', marginBottom: '12px',
            }}>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: dm.text3 }}>{block.text}</p>
            </div>
          );
        }

        if (block.art === 'zeitplan') {
          return (
            <Karte key={i} dm={dm} akzent>
              <KartenTitel dm={dm}>{block.titel}</KartenTitel>
              {block.schritte.map((s, j) => (
                <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '7px' }}>
                  <span style={{
                    minWidth: '62px', fontSize: '13px', fontWeight: '800', color: ACCENT,
                  }}>{s.minuten}</span>
                  <span style={{ fontSize: '14px', lineHeight: '1.6', color: dm.text2 }}>{s.was}</span>
                </div>
              ))}
              <Fussnote dm={dm}>{block.fussnote}</Fussnote>
            </Karte>
          );
        }

        return (
          <Karte key={i} dm={dm} akzent={block.art === 'zitat'}>
            <KartenTitel dm={dm}>{block.titel}</KartenTitel>
            {block.einleitung && (
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', lineHeight: '1.65', color: dm.text2 }}>{block.einleitung}</p>
            )}
            <Liste dm={dm} punkte={block.punkte} />
            {block.fussnote && <Fussnote dm={dm}>{block.fussnote}</Fussnote>}
          </Karte>
        );
      })}
    </>
  );
}

// ─── «Textsorten» ──────────────────────────────────────────────────────────

function TextsorteKachel({ tipp, dm, jahre, beispiel }) {
  const farbe = TEXTSORTEN_FARBEN[tipp.textsorte] || ACCENT;
  const [offen, setOffen] = useState(false);

  const block = (titel, punkte) => (
    <div style={{ marginBottom: '12px' }}>
      <p style={{ margin: '0 0 6px 0', fontSize: '12px', fontWeight: '800', color: dm.text3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{titel}</p>
      <Liste dm={dm} punkte={punkte} />
    </div>
  );

  return (
    <div style={{
      border: `1px solid ${dm.border}`, borderTop: `3px solid ${farbe}`,
      borderRadius: '12px', background: dm.bg2, padding: '16px 18px', marginBottom: '12px',
    }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: '800', color: dm.text }}>{tipp.textsorte}</p>

      <div style={{ marginBottom: '12px' }}>
        <p style={{ margin: '0 0 6px 0', fontSize: '12px', fontWeight: '800', color: farbe, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Das verlangt die Prüfung</p>
        <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: dm.text3 }}>
          {jahre.length > 0
            ? `Kam vor in: ${jahre.join(', ')}.`
            : 'In den vorliegenden Prüfungsblättern nicht enthalten.'}
        </p>
        {beispiel && (
          <div style={{ borderLeft: `3px solid ${dm.border}`, paddingLeft: '12px' }}>
            <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: dm.text3 }}>
              Beispiel {beispiel.year}{beispiel.titel ? ` · «${beispiel.titel}»` : ''}:
            </p>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: dm.text2, whiteSpace: 'pre-line' }}>{beispiel.aufgabe}</p>
          </div>
        )}
      </div>

      {offen ? (
        <>
          {block('So baust du es auf', tipp.aufbau)}
          {block('Checkliste', tipp.checkliste)}
          {block('Typische Fehler', tipp.fehler)}
          {block('Satzanfänge', tipp.satzanfaenge)}
          <button onClick={() => setOffen(false)} style={{
            padding: '7px 14px', borderRadius: '8px', cursor: 'pointer',
            border: `1px solid ${dm.border}`, background: 'none',
            color: dm.text2, fontSize: '12px', fontWeight: '700',
          }}>Tipps zuklappen</button>
        </>
      ) : (
        <button onClick={() => setOffen(true)} style={{
          padding: '9px 16px', borderRadius: '9px', cursor: 'pointer', border: 'none',
          background: farbe, color: '#fff', fontSize: '13px', fontWeight: '700',
        }}>Unsere Tipps anzeigen</button>
      )}
    </div>
  );
}

function TextsortenSeite({ dm }) {
  const jahreNach = useMemo(() => {
    const map = new Map();
    aufsatzGms3.forEach(t => {
      if (!map.has(t.textsorte)) map.set(t.textsorte, new Set());
      map.get(t.textsorte).add(t.year);
    });
    return map;
  }, []);

  return (
    <>
      <div style={{
        border: `1px solid ${dm.border}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: '10px',
        background: dm.bg2, padding: '14px 16px', marginBottom: '18px',
      }}>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: dm.text2 }}>{textsortenHinweis}</p>
      </div>

      {textsortenTipps.map(tipp => (
        <TextsorteKachel
          key={tipp.textsorte}
          tipp={tipp}
          dm={dm}
          jahre={[...(jahreNach.get(tipp.textsorte) || [])].sort((a, b) => b - a)}
          beispiel={aufsatzGms3.find(t => t.id === tipp.beispielId) || null}
        />
      ))}
    </>
  );
}

// ─── «Selbstcheck» ─────────────────────────────────────────────────────────

function ladeStand() {
  if (typeof window === 'undefined') return {};
  try {
    const gespeichert = JSON.parse(window.localStorage.getItem(SELBSTCHECK_KEY) || '{}');
    return gespeichert && typeof gespeichert === 'object' ? gespeichert : {};
  } catch {
    return {};
  }
}

function SelbstcheckSeite({ dm }) {
  const [stand, setStand] = useState(ladeStand);

  const speichern = (naechster) => {
    setStand(naechster);
    try { localStorage.setItem(SELBSTCHECK_KEY, JSON.stringify(naechster)); } catch {}
  };

  const umschalten = (key) => speichern({ ...stand, [key]: !stand[key] });

  const zuruecksetzen = () => {
    setStand({});
    try { localStorage.removeItem(SELBSTCHECK_KEY); } catch {}
  };

  const erledigt = selbstcheckPunkte.filter(p => stand[p.key]).length;

  return (
    <>
      <div style={{
        border: `1px solid ${dm.border}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: '10px',
        background: dm.bg2, padding: '14px 16px', marginBottom: '18px',
      }}>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: dm.text2 }}>{selbstcheckHinweis}</p>
      </div>

      <p style={{ margin: '0 0 10px 0', fontSize: '13px', fontWeight: '700', color: dm.text3 }}>
        {erledigt} von {selbstcheckPunkte.length} abgehakt
      </p>

      {selbstcheckPunkte.map(punkt => {
        const an = !!stand[punkt.key];
        return (
          <button
            key={punkt.key}
            onClick={() => umschalten(punkt.key)}
            style={{
              display: 'flex', gap: '12px', alignItems: 'flex-start', width: '100%',
              textAlign: 'left', cursor: 'pointer', marginBottom: '8px',
              border: `1px solid ${an ? ACCENT : dm.border}`, borderRadius: '10px',
              background: dm.bg2, padding: '13px 15px',
            }}
          >
            <span style={{
              flex: '0 0 auto', width: '22px', height: '22px', borderRadius: '6px',
              border: `2px solid ${an ? ACCENT : dm.border}`, background: an ? ACCENT : 'none',
              color: '#fff', fontSize: '13px', fontWeight: '800',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{an ? '✓' : ''}</span>
            <span style={{ fontSize: '14px', lineHeight: '1.6', color: an ? dm.text : dm.text2 }}>{punkt.text}</span>
          </button>
        );
      })}

      <button onClick={zuruecksetzen} style={{
        marginTop: '10px', padding: '9px 16px', borderRadius: '9px', cursor: 'pointer',
        border: `1px solid ${dm.border}`, background: 'none', color: dm.text2,
        fontSize: '13px', fontWeight: '700',
      }}>Zurücksetzen</button>
    </>
  );
}

// ─── Rahmen ────────────────────────────────────────────────────────────────

export default function AufsatzAnleitungPage({ seite, dm, isMobile, onClose }) {
  const kopf = SEITEN_TITEL[seite] || SEITEN_TITEL.ablauf;

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '64px 16px 40px' : '40px', background: dm.bg }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
          <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '800', color: dm.text }}>{kopf.icon} {kopf.titel}</h1>
          <button onClick={onClose} style={{ background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text3, fontSize: '13px', padding: '6px 10px' }}>✕</button>
        </div>

        {seite === 'textsorten' && <TextsortenSeite dm={dm} />}
        {seite === 'selbstcheck' && <SelbstcheckSeite dm={dm} />}
        {seite !== 'textsorten' && seite !== 'selbstcheck' && <AblaufSeite dm={dm} />}
      </div>
    </main>
  );
}
