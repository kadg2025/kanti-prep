import { useState } from 'react';

const actionCards = [
  { emoji: '🚀', challenge: 'Bau deine erste App in 10 Min', url: 'https://claude.ai' },
  { emoji: '🗂', challenge: 'Prüfungsstoff → Lernkarten in 2 Min', url: 'https://notebooklm.google.com' },
  { emoji: '🎵', challenge: 'Schreib deinen ersten KI-Song', url: 'https://suno.com' },
  { emoji: '🔍', challenge: 'Echt oder KI? Teste das Bild', url: 'https://lens.google.com' },
  { emoji: '👁', challenge: 'Wie viel weiss Google über dich?', url: 'https://myactivity.google.com' },
  { emoji: '🧠', challenge: 'Was denkt dein Feed über dich?', tip: 'Auf TikTok oder Instagram bei einem Video auf die drei Punkte tippen → „Warum sehe ich das?“' },
  { emoji: '📵', challenge: 'Autoplay aus — spür den Unterschied', tip: 'YouTube/Instagram → Einstellungen → Autoplay ausschalten. Schau mal, ob es sich anders anfühlt.' },
  { emoji: '⏱', challenge: 'Wie lang warst du diese Woche online?', tip: 'iOS: Einstellungen → Bildschirmzeit. Android: Einstellungen → Digitales Wohlbefinden.' },
];

const linkCategories = [
  {
    emoji: '🎓',
    title: 'Kanti & Lernen',
    subtitle: 'Für Stoff, der sitzen bleiben soll.',
    links: [
      { label: 'Kanti Frauenfeld', url: 'https://www.kanti-frauenfeld.ch' },
      { label: 'Khan Academy — Mathe', url: 'https://www.khanacademy.org/math' },
      { label: 'GeoGebra', url: 'https://www.geogebra.org' },
      { label: 'Duden', url: 'https://www.duden.de' },
      { label: 'Anki — Karteikarten', url: 'https://ankiweb.net' },
      { label: 'dict.cc — Wörterbuch', url: 'https://www.dict.cc' },
    ],
  },
  {
    emoji: '🤖',
    title: 'KI & Tools',
    subtitle: 'Probier aus, was dir wirklich hilft.',
    links: [
      { label: 'Claude — denkt mit', url: 'https://claude.ai', highlight: true },
      { label: 'ChatGPT', url: 'https://chatgpt.com' },
      { label: 'Gemini', url: 'https://gemini.google.com' },
      { label: 'NotebookLM — dein KI-Notizbuch', url: 'https://notebooklm.google.com' },
      { label: 'Perplexity — schnell nachschauen', url: 'https://www.perplexity.ai' },
    ],
  },
  {
    emoji: '🌍',
    title: 'Welt & Medien',
    subtitle: 'Offen denken, selber prüfen.',
    links: [
      { label: 'SRF News', url: 'https://www.srf.ch/news' },
      { label: 'BBC News', url: 'https://www.bbc.com/news' },
      { label: 'Watson', url: 'https://www.watson.ch' },
      { label: 'Our World in Data', url: 'https://ourworldindata.org' },
      { label: 'Mimikama — Fake-Check', url: 'https://www.mimikama.org' },
    ],
  },
  {
    emoji: '🎬',
    title: 'Filme & Dokus',
    subtitle: 'Geschichten, die im Kopf bleiben.',
    links: [
      { label: 'ARTE Dokus', url: 'https://www.arte.tv/de/videos/' },
      { label: 'SRF Dokus', url: 'https://www.srf.ch/play/tv/sendung/dok' },
      { label: 'Kurzgesagt', url: 'https://www.youtube.com/@kurzgesagt' },
      { label: 'TED-Ed', url: 'https://www.youtube.com/@TEDEd' },
    ],
  },
  {
    emoji: '🎨',
    title: 'Mach was draus',
    subtitle: 'Design, Musik, Code, Ideen.',
    links: [
      { label: 'Canva', url: 'https://www.canva.com' },
      { label: 'Figma', url: 'https://www.figma.com' },
      { label: 'CapCut', url: 'https://www.capcut.com' },
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'Photopea', url: 'https://www.photopea.com' },
    ],
  },
];

function ActionCard({ card }) {
  const [showTip, setShowTip] = useState(false);

  const handleClick = () => {
    if (card.url) window.open(card.url, '_blank', 'noopener,noreferrer');
    else setShowTip(v => !v);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background: '#fff',
        border: '1.5px solid #e5e3f0',
        borderRadius: '12px',
        padding: '14px 16px',
        cursor: 'pointer',
        transition: 'all 0.15s',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        minWidth: 0,
        position: 'relative',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#a78bfa';
        e.currentTarget.style.background = '#f5f3ff';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(83,74,183,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#e5e3f0';
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: '20px', flexShrink: 0 }}>{card.emoji}</span>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a2e', lineHeight: '1.4' }}>
            {card.challenge}
          </span>
        </div>
        <span style={{ fontSize: '13px', color: card.url ? '#534AB7' : '#aaa', flexShrink: 0, marginTop: '1px' }}>
          {card.url ? '↗' : showTip ? '▲' : '▾'}
        </span>
      </div>
      {showTip && !card.url && (
        <div style={{
          marginTop: '4px',
          padding: '10px 12px',
          background: '#f0eeff',
          border: '1px solid #c4b5fd',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#534AB7',
          lineHeight: '1.6',
        }}>
          {card.tip}
        </div>
      )}
    </div>
  );
}

export default function LinksPage({ onBack }) {
  return (
    <main style={{
      flex: 1,
      overflowY: 'auto',
      padding: '40px 40px 60px',
      background: '#fff',
      fontFamily: "'Nunito', 'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '2rem' }}>
          <div style={{
            width: '46px', height: '46px', borderRadius: '12px', background: '#534AB7',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px', flexShrink: 0,
          }}>
            🌐
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
              Das andere Internet
            </h1>
            <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>
              Kein Algorithmus hat dir das empfohlen. Wir schon.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '0.75rem' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#1a1a2e' }}>
              ⚡ Probier's sofort
            </p>
            <span style={{ fontSize: '12px', color: '#aaa' }}>Klick, mach's, sieh selbst.</span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '8px',
          }}>
            {actionCards.map((card, i) => (
              <ActionCard key={i} card={card} />
            ))}
          </div>
        </div>

        <div style={{ height: '1px', background: '#e5e3f0', marginBottom: '2rem' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {linkCategories.map(cat => (
            <div key={cat.title} style={{
              background: '#f9f8ff',
              border: '1px solid #e5e3f0',
              borderRadius: '14px',
              padding: '1.25rem',
            }}>
              <p style={{ margin: '0 0 2px', fontSize: '15px', fontWeight: '600', color: '#1a1a2e' }}>
                {cat.emoji} {cat.title}
              </p>
              <p style={{ margin: '0 0 0.875rem', fontSize: '12px', color: '#aaa', fontStyle: 'italic' }}>
                {cat.subtitle}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {cat.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '9px 12px',
                      background: link.highlight ? '#f0eeff' : '#fff',
                      border: link.highlight ? '1px solid #c4b5fd' : '1px solid #e5e3f0',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: link.highlight ? '#534AB7' : '#333',
                      fontSize: '13px',
                      fontWeight: link.highlight ? '600' : '400',
                      transition: 'all 0.1s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = link.highlight ? '#ede9fc' : '#f0eeff';
                      e.currentTarget.style.borderColor = '#c4b5fd';
                      e.currentTarget.style.color = '#534AB7';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = link.highlight ? '#f0eeff' : '#fff';
                      e.currentTarget.style.borderColor = link.highlight ? '#c4b5fd' : '#e5e3f0';
                      e.currentTarget.style.color = link.highlight ? '#534AB7' : '#333';
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ fontSize: '11px', color: '#bbb', flexShrink: 0 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '12px', color: '#ccc', textAlign: 'center', marginBottom: '1.5rem' }}>
          alle links öffnen in neuem tab 🔗
        </p>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onBack}
            style={{
              padding: '9px 22px',
              background: 'none',
              border: '1px solid #d0cce8',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#777',
              fontSize: '13px',
            }}
          >
            ← Zurück
          </button>
        </div>
      </div>
    </main>
  );
}