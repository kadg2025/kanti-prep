// KantiPrep – Links Seite
// Einbinden in page.js: import LinksPage from './LinksPage';

const linkCategories = [
  {
    emoji: '🎓',
    title: 'Kanti vorbereitung',
    links: [
      { label: 'Kanti Frauenfeld', url: 'https://www.kanti-frauenfeld.ch' },
      { label: 'Khan Academy — Mathe', url: 'https://www.khanacademy.org/math' },
      { label: 'Wolfram Alpha', url: 'https://www.wolframalpha.com' },
      { label: 'Duden', url: 'https://www.duden.de' },
      { label: 'GeoGebra', url: 'https://www.geogebra.org' },
      { label: 'Simpleclub', url: 'https://www.simpleclub.com' },
    ],
  },
  {
    emoji: '🤖',
    title: 'KI ausprobieren',
    links: [
      { label: '✨ Claude — denkt, erklärt, schreibt', url: 'https://claude.ai', highlight: true },
      { label: 'ChatGPT', url: 'https://chatgpt.com' },
      { label: 'Gemini', url: 'https://gemini.google.com' },
      { label: 'Perplexity — googeln aber besser', url: 'https://www.perplexity.ai' },
      { label: 'Suno — KI macht deinen Song', url: 'https://suno.com' },
      { label: 'Midjourney — KI Bilder', url: 'https://www.midjourney.com' },
    ],
  },
  {
    emoji: '🎮',
    title: 'Games',
    links: [
      { label: 'Chess.com', url: 'https://www.chess.com' },
      { label: 'GeoGuessr — wo auf der Welt bin ich?', url: 'https://www.geoguessr.com' },
      { label: 'Wordle', url: 'https://www.nytimes.com/games/wordle' },
      { label: 'Lichess — Schach gratis', url: 'https://lichess.org' },
      { label: 'neal.fun — verrückte interaktive Sachen', url: 'https://neal.fun' },
      { label: 'Sporcle — Quiz über alles', url: 'https://www.sporcle.com' },
    ],
  },
  {
    emoji: '📺',
    title: 'YouTube — die guten Kanäle',
    links: [
      { label: 'Kurzgesagt — Universum, Biologie, Zukunft', url: 'https://www.youtube.com/@kurzgesagt' },
      { label: 'Veritasium — Wissenschaft krass erklärt', url: 'https://www.youtube.com/@Veritasium' },
      { label: 'maiLab — Wissenschaft auf Deutsch', url: 'https://www.youtube.com/@maiLab' },
      { label: 'Rezo — Politik, Gesellschaft, Klartext', url: 'https://www.youtube.com/@rezomusik' },
      { label: 'funk — News & Themen für Junge', url: 'https://www.youtube.com/@funk' },
      { label: 'MrBeast — kennst du eh', url: 'https://www.youtube.com/@MrBeast' },
    ],
  },
  {
    emoji: '🌍',
    title: 'Welt verstehen',
    links: [
      { label: 'SRF — Schweizer News', url: 'https://www.srf.ch/news' },
      { label: 'Watson — News ohne Langweile', url: 'https://www.watson.ch' },
      { label: 'Republik — Journalismus Schweiz', url: 'https://www.republik.ch' },
      { label: 'BBC — was läuft auf der Welt', url: 'https://www.bbc.com/news' },
      { label: 'TED Talks — kluge Leute reden', url: 'https://www.ted.com/talks' },
      { label: 'Reddit — Diskussionen über alles', url: 'https://www.reddit.com/r/de' },
    ],
  },
  {
    emoji: '🎨',
    title: 'Kreativ & Social',
    links: [
      { label: 'Canva — Design ohne Vorkenntnisse', url: 'https://www.canva.com' },
      { label: 'Spotify', url: 'https://open.spotify.com' },
      { label: 'Figma — Design & UI', url: 'https://www.figma.com' },
      { label: 'GitHub — Code der Welt', url: 'https://github.com' },
      { label: 'Pinterest — Inspiration ohne Ende', url: 'https://www.pinterest.com' },
      { label: 'Twitch — live zuschauen', url: 'https://www.twitch.tv' },
    ],
  },
];

export default function LinksPage({ onBack }) {
  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '40px', background: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '2rem' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#534AB7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
            🌐
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>Das Internet — aber das Gute davon</h1>
            <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>Kein Algorithmus hat dir das empfohlen. Wir schon.</p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {linkCategories.map(cat => (
            <div key={cat.title} style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '14px', padding: '1.25rem' }}>
              <p style={{ margin: '0 0 0.875rem', fontSize: '15px', fontWeight: '600', color: '#1a1a2e' }}>
                {cat.emoji} {cat.title}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {cat.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
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
                    onMouseEnter={e => { e.currentTarget.style.background = link.highlight ? '#ede9fc' : '#f0eeff'; e.currentTarget.style.borderColor = '#c4b5fd'; e.currentTarget.style.color = '#534AB7'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = link.highlight ? '#f0eeff' : '#fff'; e.currentTarget.style.borderColor = link.highlight ? '#c4b5fd' : '#e5e3f0'; e.currentTarget.style.color = link.highlight ? '#534AB7' : '#333'; }}
                  >
                    <span>{link.label}</span>
                    <span style={{ fontSize: '11px', color: '#bbb', flexShrink: 0 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '12px', color: '#ccc', textAlign: 'center' }}>
          alle links öffnen in neuem tab 🔗
        </p>
      </div>
    </main>
  );
}