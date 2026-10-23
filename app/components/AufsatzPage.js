'use client';

import { useMemo, useState } from 'react';
import { aufsatzGms3, aufsatzJahreOhneBlatt, AUFSATZ_TEXTSORTEN } from '../lib/gms3/deutsch/aufsatz';

const ACCENT = '#b45309';

const TEXTSORTEN_FARBEN = {
  'Brief': '#0f766e',
  'Geschichte fortsetzen': '#7c3aed',
  'Freier Text': '#b45309',
  'Erzählen aus einer Rolle': '#be123c',
  'Tagebucheintrag': '#0369a1',
  'Erörterung': '#15803d',
};

const FORM_FILTER = [
  { key: 'alle', label: 'Alle Formen' },
  { key: 'ab2024', label: 'Ab 2024 — drei Schreibaufgaben zu einem Lesetext' },
  { key: 'bis2023', label: 'Bis 2023 — vier Themen zur Auswahl' },
];

function Badge({ textsorte, dark }) {
  const farbe = TEXTSORTEN_FARBEN[textsorte] || ACCENT;
  return (
    <span style={{
      display: 'inline-block', padding: '2px 10px', borderRadius: '20px',
      fontSize: '11px', fontWeight: '700', whiteSpace: 'nowrap',
      color: dark ? '#fff' : farbe,
      background: dark ? farbe : `${farbe}1a`,
      border: `1px solid ${farbe}`,
    }}>{textsorte}</span>
  );
}

function ThemaKarte({ thema, dm, dark }) {
  const titel = thema.titel || `Schreibaufgabe ${thema.nr}`;
  return (
    <div style={{
      border: `1px solid ${dm.border}`, borderRadius: '12px', background: dm.bg2,
      padding: '16px 18px', marginBottom: '10px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
        <span style={{ fontSize: '12px', fontWeight: '700', color: dm.text3 }}>{thema.year} · Nr. {thema.nr}</span>
        <Badge textsorte={thema.textsorte} dark={dark} />
      </div>
      <p style={{ margin: '0 0 8px 0', fontSize: '17px', fontWeight: '700', color: dm.text }}>{titel}</p>
      <p style={{ margin: '0 0 12px 0', fontSize: '14px', lineHeight: '1.6', color: dm.text2, whiteSpace: 'pre-line' }}>{thema.aufgabe}</p>
      {thema.lesetext && (
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: dm.text3 }}>
          📖 Lesetext: <span style={{ fontStyle: 'italic' }}>{thema.lesetext}</span> — steht im Prüfungs-PDF.
        </p>
      )}
      {thema.pdfUrl ? (
        <a href={thema.pdfUrl} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', padding: '9px 16px', borderRadius: '9px',
          background: ACCENT, color: '#fff', fontSize: '13px', fontWeight: '700', textDecoration: 'none',
        }}>📄 Im Prüfungs-PDF öffnen</a>
      ) : (
        <span style={{ fontSize: '12px', color: dm.text3 }}>Für diesen Jahrgang liegt noch kein Link zum Prüfungs-PDF vor.</span>
      )}
    </div>
  );
}

export default function AufsatzPage({ dm, dark, isMobile, onClose }) {
  const [textsorte, setTextsorte] = useState('alle');
  const [form, setForm] = useState('alle');

  const gefiltert = useMemo(() => aufsatzGms3.filter(t => (
    (textsorte === 'alle' || t.textsorte === textsorte) &&
    (form === 'alle' || t.form === form)
  )), [textsorte, form]);

  const jahre = useMemo(() => {
    const map = new Map();
    gefiltert.forEach(t => {
      if (!map.has(t.year)) map.set(t.year, []);
      map.get(t.year).push(t);
    });
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [gefiltert]);

  const btn = (aktiv) => ({
    padding: '6px 12px', borderRadius: '20px', cursor: 'pointer',
    fontSize: '12px', fontWeight: '700',
    border: `1px solid ${aktiv ? ACCENT : dm.border}`,
    background: aktiv ? ACCENT : 'none',
    color: aktiv ? '#fff' : dm.text2,
  });

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '64px 16px 40px' : '40px', background: dm.bg }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
          <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '800', color: dm.text }}>✍️ Aufsatz — alte Aufgabenstellungen</h1>
          <button onClick={onClose} style={{ background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text3, fontSize: '13px', padding: '6px 10px' }}>✕</button>
        </div>

        <div style={{
          border: `1px solid ${dm.border}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: '10px',
          background: dm.bg2, padding: '14px 16px', marginBottom: '18px',
        }}>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: dm.text2 }}>
            Aufsatz: 75 Minuten, eines von vier Themen (ab 2024: eine von drei Schreibaufgaben zu einem Lesetext), zählt zwei Drittel der Note.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
          <button onClick={() => setTextsorte('alle')} style={btn(textsorte === 'alle')}>Alle Textsorten</button>
          {AUFSATZ_TEXTSORTEN.map(ts => (
            <button key={ts} onClick={() => setTextsorte(ts)} style={btn(textsorte === ts)}>{ts}</button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {FORM_FILTER.map(f => (
            <button key={f.key} onClick={() => setForm(f.key)} style={btn(form === f.key)}>{f.label}</button>
          ))}
        </div>

        {jahre.length === 0 && (
          <p style={{ fontSize: '14px', color: dm.text3 }}>Zu dieser Auswahl gibt es keine Themen.</p>
        )}

        {jahre.map(([jahr, themen]) => (
          <section key={jahr} style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: dm.text }}>{jahr}</h2>
              {themen[0].form === 'ab2024' && (
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#fff', background: '#15803d', borderRadius: '20px', padding: '3px 10px' }}>Aktuelle Form</span>
              )}
            </div>
            {themen.sort((a, b) => a.nr - b.nr).map(t => (
              <ThemaKarte key={t.id} thema={t} dm={dm} dark={dark} />
            ))}
          </section>
        ))}

        <div style={{ borderTop: `1px solid ${dm.border}`, paddingTop: '14px', marginTop: '10px' }}>
          <p style={{ margin: '0 0 6px 0', fontSize: '12px', fontWeight: '700', color: dm.text3 }}>Jahrgänge ohne Aufsatzblatt</p>
          {aufsatzJahreOhneBlatt.map(j => (
            <p key={j.year} style={{ margin: '0 0 3px 0', fontSize: '12px', color: dm.text3 }}>{j.year}: {j.hinweis}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
