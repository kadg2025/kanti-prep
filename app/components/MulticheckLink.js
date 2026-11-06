'use client';

// Kleiner Button «Link kopieren» für Multicheck (kopiert die volle URL der Ansicht, ohne Fortschritt).
import { useState } from 'react';
import { mcUrl } from '../lib/multicheck/links.mjs';

export default function MulticheckLink({ zustand, dm, dark }) {
  const [kopiert, setKopiert] = useState(false);
  const kopieren = async () => {
    try {
      await navigator.clipboard.writeText(mcUrl(window.location.origin, window.location.pathname, zustand));
      setKopiert(true);
      setTimeout(() => setKopiert(false), 1800);
    } catch {}
  };
  return (
    <button onClick={kopieren} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: kopiert ? (dark ? '#16291d' : '#dcfce7') : dm.bg3, border: `1px solid ${kopiert ? '#22c55e' : dm.border}`, borderRadius: 10, fontSize: 13, fontWeight: 600, color: kopiert ? '#22c55e' : dm.text2, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit' }}>
      {kopiert ? '✓ Link kopiert' : '🔗 Link kopieren'}
    </button>
  );
}
