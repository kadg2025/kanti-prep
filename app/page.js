'use client';

import { useState, useEffect, useRef } from 'react';
import { questions } from './lib/questions';
import { facts } from './lib/facts';

// ─── BUILD TREE ───────────────────────────────────────────────────────────
function buildTree(subject) {
  const filtered = questions.filter(q => {
    if (subject === 'Mathe ohne TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR');
    if (subject === 'Mathe mit TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR');
    if (subject === 'Deutsch') return q.subject === 'Deutsch';
    if (subject === 'Mathe Neu') return q.subject === 'Mathe' && q.exam === 'Neue Aufgabe';
    if (subject === 'Deutsch Neu') return q.subject === 'Deutsch' && q.group === 'Neue Übungsaufgaben';
    return false;
  });
  const tree = {};
  filtered.forEach(q => {
    const g = q.group || 'Sonstiges';
    const t = q.topic || 'Allgemein';
    if (!tree[g]) tree[g] = {};
    if (!tree[g][t]) tree[g][t] = [];
    tree[g][t].push(q);
  });
  return tree;
}

// ─── LOFI PLAYER (Sidebar) ────────────────────────────────────────────────
const lofiTracks = [
  { name: 'Study Chill Beats', vibe: 'Fokus & Flow', emoji: '🌙', freq: 432 },
  { name: 'Rainy Café Session', vibe: 'Konzentration', emoji: '☕', freq: 528 },
  { name: 'Late Night Study', vibe: 'Tiefe Konzentration', emoji: '🌃', freq: 396 },
  { name: 'Morning Focus', vibe: 'Frisch & Klar', emoji: '☀️', freq: 440 },
  { name: 'Zen Mode', vibe: 'Entspannt & fokussiert', emoji: '🎋', freq: 480 },
];
const lofiEmojis = ['🎵', '🎶', '✨', '🎵', '🎶', '🌙'];

function LofiPlayer() {
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [vol, setVol] = useState(50);
  const [emojiIdx, setEmojiIdx] = useState(0);
  const audioRef = useRef(null);
  const gainRef = useRef(null);
  const oscsRef = useRef([]);
  const animRef = useRef(null);

  const track = lofiTracks[trackIdx];
  const color = '#534AB7';

  function stopAudio() {
    oscsRef.current.forEach(o => { try { o.stop(); } catch (e) { } });
    oscsRef.current = [];
    if (audioRef.current) { audioRef.current.close(); audioRef.current = null; }
    clearInterval(animRef.current);
  }

  function playChord(ctx, gain, freq) {
    oscsRef.current.forEach(o => { try { o.stop(); } catch (e) { } });
    oscsRef.current = [];
    [freq, freq * 1.25, freq * 1.5, freq * 0.5].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = f;
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.12 - i * 0.025, ctx.currentTime + 0.4);
      g.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 1.8);
      g.gain.linearRampToValueAtTime(0, ctx.currentTime + 3.8);
      osc.connect(g); g.connect(gain);
      osc.start(); osc.stop(ctx.currentTime + 3.8);
      oscsRef.current.push(osc);
    });
    return setTimeout(() => { if (audioRef.current) playChord(ctx, gain, freq); }, 3500);
  }

  function startAudio(idx, volume) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    audioRef.current = ctx;
    const gain = ctx.createGain();
    gain.gain.value = volume / 100 * 0.25;
    gain.connect(ctx.destination);
    gainRef.current = gain;
    playChord(ctx, gain, lofiTracks[idx].freq);
    animRef.current = setInterval(() => setEmojiIdx(i => (i + 1) % lofiEmojis.length), 600);
  }

  function toggle() {
    if (isPlaying) { stopAudio(); setIsPlaying(false); }
    else { startAudio(trackIdx, vol); setIsPlaying(true); }
  }

  function changeTrack(dir) {
    const newIdx = (trackIdx + dir + lofiTracks.length) % lofiTracks.length;
    setTrackIdx(newIdx);
    if (isPlaying) { stopAudio(); startAudio(newIdx, vol); }
  }

  function changeVol(v) {
    setVol(v);
    if (gainRef.current) gainRef.current.gain.value = v / 100 * 0.25;
  }

  useEffect(() => () => stopAudio(), []);

  const displayEmoji = isPlaying ? lofiEmojis[emojiIdx] : track.emoji;

  return (
    <div style={{
      padding: '10px 14px', borderBottom: '1px solid #e5e3f0',
      display: 'flex', alignItems: 'center', gap: '8px',
      background: isPlaying ? '#f0eeff' : '#f8f7ff',
    }}>
      <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{displayEmoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: '#1a1a2e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.name}</p>
        <p style={{ margin: 0, fontSize: '10px', color: '#999' }}>{track.vibe}</p>
      </div>
      <button onClick={() => changeTrack(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '12px', padding: '2px' }}>⏮</button>
      <button onClick={toggle} style={{
        width: '28px', height: '28px', borderRadius: '50%',
        background: isPlaying ? color : '#e5e3f0',
        border: 'none', cursor: 'pointer', color: isPlaying ? '#fff' : '#666',
        fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>{isPlaying ? '⏸' : '▶'}</button>
      <button onClick={() => changeTrack(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '12px', padding: '2px' }}>⏭</button>
      <input type="range" min="0" max="100" value={vol} onChange={e => changeVol(Number(e.target.value))}
        style={{ width: '50px' }} />
    </div>
  );
}

// ─── PAUSE MODAL ──────────────────────────────────────────────────────────
const memes = [
  { emoji: '😭', top: 'Ich beim Lernen um 22 Uhr:', bottom: '💤💤💤', sub: 'Das Bett gewinnt immer.' },
  { emoji: '🧠', top: '"Das kommt nie in der Prüfung"', bottom: 'Aufgabe 1: Genau das.', sub: 'Der Lehrer lacht irgendwo.' },
  { emoji: '😤', top: 'Ich: Ich habe alles verstanden!', bottom: 'Die Aufgabe: Berechne x...', sub: 'x = pure Panik' },
  { emoji: '📚', top: 'Plan: 2 Stunden lernen', bottom: 'Realität: 4 Stunden YouTube', sub: 'Der Algorithmus hat gewonnen.' },
  { emoji: '🤯', top: '"Die Prüfung wird nicht schwer"', bottom: '*Seite 1 von 12*', sub: 'Vertrauen? Nie wieder.' },
  { emoji: '🦕', top: 'Ich nach 10 Aufgaben:', bottom: 'PAUSE. JETZT. SOFORT.', sub: 'Du hast es verdient!' },
  { emoji: '😅', top: 'Mathe ohne TR:', bottom: '"Einfach im Kopf rechnen lol"', sub: 'Mein Kopf: ERROR 404' },
  { emoji: '🎯', top: 'Nach KantiPrep üben:', bottom: '"Ich bin bereit. ICH BIN BEREIT."', sub: 'Wirklich diesmal.' },
  { emoji: '😂', top: 'Deutsch: Bestimme den Kasus', bottom: 'Ich: Nominativ... bestimmt?', sub: 'Es war Genitiv. Natürlich.' },
  { emoji: '🔥', top: 'Du gerade:', bottom: '*löst Aufgabe nach Aufgabe*', sub: 'Das nennt man Momentum.' },
  { emoji: '🫠', top: 'Wenn die Lösung 5 Seiten lang ist', bottom: 'aber die Aufgabe 1 Zeile:', sub: 'Stille. Tiefe Stille.' },
  { emoji: '💀', top: 'Lehrer: "Wer hat noch Fragen?"', bottom: 'Ich: *versteht gar nichts*', sub: '"Nein alles klar danke."' },
];

const musicLinks = [
  { label: '🎤 Hip Hop', url: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd' },
  { label: '⭐ Pop Hits', url: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M' },
  { label: '🇩🇪 Rap DE', url: 'https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOQ1c' },
  { label: '🔥 Teen Mix', url: 'https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda' },
  { label: '😌 Chill', url: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6' },
];

const personas = {
  einstein: { name: 'Albert Einstein', emoji: '🧑‍🔬', system: 'Du bist Albert Einstein. Sprich Deutsch, sei freundlich, witzig und ermutigend. Liebe Mathe und Physik. Kurze Antworten (max 3 Sätze). Verwende manchmal deine echten Zitate.' },
  duden: { name: 'Der Duden', emoji: '📚', system: 'Du bist der personifizierte Duden. Sprich korrekt aber humorvoll. Liebe die deutsche Sprache. Max 3 Sätze.' },
  kanti: { name: 'Kanti-Schüler Luca', emoji: '🎓', system: 'Du bist Luca, 16 Jahre alt, Kanti-Schüler in Frauenfeld. Sprich locker auf Deutsch, sei ehrlich und motivierend. Max 3 Sätze.' },
  yoda: { name: 'Meister Yoda', emoji: '🟢', system: 'Du bist Yoda auf Deutsch. Sprich in Yoda-Sprache (Verb ans Ende). Max 2 Sätze. Beispiel: "Stark ist die Macht des Lernens. Üben du musst."' },
};

function PauseModal({ onClose }) {
  const [screen, setScreen] = useState('choice');
  const [memeIdx, setMemeIdx] = useState(0);
  const [personaKey, setPersonaKey] = useState('einstein');
  const [chatHistory, setChatHistory] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef(null);
  const dinoRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (screen === 'einstein') {
      const p = personas[personaKey];
      setChatMessages([{ role: 'assistant', text: `${p.emoji} Hallo! Ich bin ${p.name}. Was möchtest du wissen?` }]);
      setChatHistory([]);
    }
  }, [screen, personaKey]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
    if (screen === 'dino') startDino();
    else stopDino();
    return () => stopDino();
  }, [screen]);

  // ── DINO ──
  function startDino() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dino = { x: 60, y: 100, w: 22, h: 28, vy: 0, onGround: true, frame: 0 };
    let obstacles = [], clouds = [], score = 0, best = 0, speed = 4, frameCount = 0, gameOver = false, nightMode = false;
    let running = true;
    const stars = Array.from({ length: 20 }, () => ({ x: Math.random() * 460, y: Math.random() * 55, r: Math.random() * 1.5 + 0.5 }));
    const ground = 118;

    function jump() {
      if (gameOver) { reset(); return; }
      if (dino.onGround) { dino.vy = -12; dino.onGround = false; }
    }

    function reset() {
      dino = { x: 60, y: 100, w: 22, h: 28, vy: 0, onGround: true, frame: 0 };
      obstacles = []; clouds = []; score = 0; speed = 4; frameCount = 0; gameOver = false;
    }

    canvas.onclick = jump;
    const onKey = e => { if (e.code === 'Space') { e.preventDefault(); jump(); } };
    document.addEventListener('keydown', onKey);

    function loop() {
      if (!running) return;
      const W = canvas.width, H = canvas.height;
      nightMode = Math.floor(score / 600) % 2 === 1;
      const bg = nightMode ? '#111' : '#f0f0f0';
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      if (nightMode) { ctx.fillStyle = '#fff'; stars.forEach(s => { ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); }); }
      ctx.strokeStyle = nightMode ? '#444' : '#ccc'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, ground); ctx.lineTo(W, ground); ctx.stroke();

      if (!gameOver) {
        frameCount++; score++;
        dino.frame = Math.floor(frameCount / 8) % 2;
        if (score % 400 === 0) speed += 0.4;
        dino.vy += 0.75; dino.y += dino.vy;
        if (dino.y >= ground - dino.h) { dino.y = ground - dino.h; dino.vy = 0; dino.onGround = true; }
        if (frameCount % Math.max(50, 80 - Math.floor(speed * 4)) === 0) {
          const h = 18 + Math.random() * 20;
          obstacles.push({ x: W, y: ground - h, w: 14, h, type: 'cactus' });
        }
        if (score > 200 && frameCount % 110 === 0) obstacles.push({ x: W, y: 25 + Math.random() * 45, w: 34, h: 16, type: 'bird', frame: 0 });
        if (frameCount % 90 === 0) clouds.push({ x: W, y: 15 + Math.random() * 30, w: 55 + Math.random() * 30, speed: 0.8 + Math.random() });
        clouds.forEach(c => c.x -= c.speed); clouds = clouds.filter(c => c.x > -90);
        obstacles.forEach(o => { o.x -= speed; if (o.type === 'bird') o.frame = Math.floor(frameCount / 6) % 2; });
        obstacles = obstacles.filter(o => o.x + o.w > 0);
        for (const o of obstacles) {
          if (dino.x + 3 < o.x + o.w && dino.x + dino.w - 3 > o.x && dino.y + 3 < o.y + o.h && dino.y + dino.h > o.y) {
            gameOver = true;
            if (score > best) best = score;
          }
        }
      }

      ctx.fillStyle = nightMode ? '#bbb' : '#ddd';
      clouds.forEach(c => { ctx.beginPath(); ctx.ellipse(c.x, c.y, c.w / 2, 10, 0, 0, Math.PI * 2); ctx.fill(); });
      const dc = nightMode ? '#4ade80' : '#15803d';
      ctx.fillStyle = dc; ctx.fillRect(dino.x, dino.y, dino.w, dino.h);
      ctx.fillStyle = bg; ctx.fillRect(dino.x + 14, dino.y + 4, 6, 6);
      if (dino.onGround) {
        ctx.fillStyle = dc;
        ctx.fillRect(dino.x + 4, dino.y + dino.h, 7, dino.frame === 0 ? 5 : 8);
        ctx.fillRect(dino.x + 11, dino.y + dino.h, 7, dino.frame === 0 ? 8 : 5);
      }
      obstacles.forEach(o => {
        if (o.type === 'cactus') {
          ctx.fillStyle = nightMode ? '#86efac' : '#16a34a';
          ctx.fillRect(o.x, o.y, o.w, o.h);
          ctx.fillRect(o.x + 2, o.y - 6, o.w - 4, 8);
          ctx.fillRect(o.x - 5, o.y + 6, 6, o.h - 10);
          ctx.fillRect(o.x + o.w - 1, o.y + 8, 6, o.h - 14);
        } else {
          ctx.fillStyle = nightMode ? '#fbbf24' : '#d97706';
          ctx.fillRect(o.x, o.y, o.w, o.h);
          ctx.fillRect(o.x + 8, o.y - 6, 10, 7);
          ctx.fillRect(o.x + (o.frame === 0 ? 0 : 4), o.y + o.h, 10, 5);
        }
      });

      ctx.fillStyle = nightMode ? '#aaa' : '#555';
      ctx.font = '12px system-ui'; ctx.textAlign = 'left';
      ctx.fillText(`Score: ${score}  Best: ${best}`, 8, 16);

      if (gameOver) {
        ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#fff'; ctx.font = '500 15px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('Game Over — Klicken zum Neustart', W / 2, H / 2);
        ctx.textAlign = 'left';
      }
      dinoRef.current = requestAnimationFrame(loop);
    }

    dinoRef.current = requestAnimationFrame(loop);
    return () => { running = false; document.removeEventListener('keydown', onKey); };
  }

  function stopDino() {
    if (dinoRef.current) cancelAnimationFrame(dinoRef.current);
  }

  // ── CHAT ──
  async function sendChat() {
    const text = chatInput.trim();
    if (!text || isLoading) return;
    setChatInput('');
    const newMsg = { role: 'user', text };
    setChatMessages(prev => [...prev, newMsg]);
    const newHistory = [...chatHistory, { role: 'user', content: text }];
    setChatHistory(newHistory);
    setIsLoading(true);
    setChatMessages(prev => [...prev, { role: 'assistant', text: '...' }]);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 150,
          system: personas[personaKey].system,
          messages: newHistory,
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || 'Hmm, ich bin gerade offline...';
      setChatMessages(prev => [...prev.slice(0, -1), { role: 'assistant', text: reply }]);
      setChatHistory(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (e) {
      setChatMessages(prev => [...prev.slice(0, -1), { role: 'assistant', text: 'Verbindungsfehler — versuch es nochmal!' }]);
    }
    setIsLoading(false);
  }

  const color = '#534AB7';

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.6)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
    }}>
      <div style={{
        background: '#fff', borderRadius: '16px', border: '1px solid #e5e3f0',
        padding: '1.5rem', width: '100%', maxWidth: '500px',
        maxHeight: '90vh', overflowY: 'auto',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '16px', fontWeight: '700', margin: 0, color: '#1a1a2e' }}>
            {screen === 'choice' ? 'Pause verdient! 🎉' : screen === 'dino' ? '🦕 Dino Game' : screen === 'meme' ? '😂 Meme' : screen === 'music' ? '🎧 Musik' : '🧑‍🔬 Chat'}
          </p>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#999' }}>✕</button>
        </div>

        {/* CHOICE */}
        {screen === 'choice' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1rem' }}>
              {[
                { key: 'music', emoji: '🎧', label: 'Musik', sub: 'Hip Hop · Pop · Rap' },
                { key: 'dino', emoji: '🦕', label: 'Dino Game', sub: 'Kaktus & Vögel' },
                { key: 'meme', emoji: '😂', label: 'Meme', sub: 'Lachen ist Medizin' },
                { key: 'einstein', emoji: '🧑‍🔬', label: 'Chat', sub: 'Einstein · Yoda · mehr' },
              ].map(opt => (
                <button key={opt.key} onClick={() => setScreen(opt.key)} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                  padding: '1.25rem 0.5rem', background: '#f8f7ff',
                  border: '1px solid #e5e3f0', borderRadius: '12px', cursor: 'pointer',
                }}>
                  <span style={{ fontSize: '32px' }}>{opt.emoji}</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a2e' }}>{opt.label}</span>
                  <span style={{ fontSize: '11px', color: '#999' }}>{opt.sub}</span>
                </button>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: '#bbb', textAlign: 'center', margin: 0 }}>5 Minuten — dann zurück zum Lernen 💪</p>
          </div>
        )}

        {/* MUSIK */}
        {screen === 'music' && (
          <div>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 1rem' }}>Wähle eine Playlist — öffnet Spotify in neuem Tab:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1rem' }}>
              {musicLinks.map(m => (
                <a key={m.label} href={m.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 16px', background: '#f8f7ff', border: '1px solid #e5e3f0',
                  borderRadius: '10px', textDecoration: 'none', color: '#1a1a2e',
                  fontSize: '14px', fontWeight: '600',
                }}>
                  {m.label}
                  <span style={{ fontSize: '12px', color: '#999' }}>↗ öffnen</span>
                </a>
              ))}
            </div>
            <p style={{ fontSize: '11px', color: '#bbb', margin: '0 0 1rem', textAlign: 'center' }}>Kostenlos mit Spotify Free 🎵</p>
            <button onClick={() => setScreen('choice')} style={{ width: '100%', padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>← Zurück</button>
          </div>
        )}

        {/* DINO */}
        {screen === 'dino' && (
          <div>
            <div style={{ background: '#111', borderRadius: '12px', padding: '1rem', marginBottom: '1rem' }}>
              <canvas ref={canvasRef} width={460} height={140} style={{ width: '100%', display: 'block', borderRadius: '4px', cursor: 'pointer' }} />
            </div>
            <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', margin: '0 0 1rem' }}>Klicken oder Leertaste zum Springen</p>
            <button onClick={() => setScreen('choice')} style={{ width: '100%', padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>← Zurück</button>
          </div>
        )}

        {/* MEME */}
        {screen === 'meme' && (
          <div>
            <div style={{ background: '#f8f7ff', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', marginBottom: '1rem', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '52px', marginBottom: '0.75rem' }}>{memes[memeIdx].emoji}</div>
              <p style={{ fontSize: '14px', color: '#777', margin: '0 0 0.25rem' }}>{memes[memeIdx].top}</p>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 0.75rem' }}>{memes[memeIdx].bottom}</p>
              <p style={{ fontSize: '12px', color: '#aaa', margin: 0, fontStyle: 'italic' }}>{memes[memeIdx].sub}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setMemeIdx(i => (i + 1) % memes.length)} style={{ flex: 1, padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>🔄 Nächstes</button>
              <button onClick={() => setScreen('choice')} style={{ flex: 1, padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>← Zurück</button>
            </div>
          </div>
        )}

        {/* EINSTEIN CHAT */}
        {screen === 'einstein' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', padding: '0.75rem', background: '#f8f7ff', borderRadius: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                {personas[personaKey].emoji}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#1a1a2e' }}>{personas[personaKey].name}</p>
              </div>
              <select value={personaKey} onChange={e => setPersonaKey(e.target.value)} style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '8px', border: '1px solid #e5e3f0', background: '#fff', cursor: 'pointer' }}>
                <option value="einstein">Einstein 🧑‍🔬</option>
                <option value="duden">Duden 📚</option>
                <option value="kanti">Luca 🎓</option>
                <option value="yoda">Yoda 🟢</option>
              </select>
            </div>
            <div style={{ height: '180px', overflowY: 'auto', background: '#f8f7ff', borderRadius: '10px', padding: '0.75rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {chatMessages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: msg.role === 'user' ? '#0f766e' : color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>
                    {msg.role === 'user' ? '👤' : personas[personaKey].emoji}
                  </div>
                  <div style={{ maxWidth: '80%', padding: '8px 12px', borderRadius: '12px', fontSize: '13px', lineHeight: '1.6', background: msg.role === 'user' ? '#0f766e' : '#fff', color: msg.role === 'user' ? '#fff' : '#1a1a2e', border: msg.role === 'user' ? 'none' : '1px solid #e5e3f0' }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat()} placeholder="Stell eine Frage..." style={{ flex: 1, padding: '8px 12px', fontSize: '13px', borderRadius: '8px', border: '1px solid #e5e3f0' }} />
              <button onClick={sendChat} disabled={isLoading} style={{ padding: '8px 16px', background: color, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', cursor: 'pointer' }}>
                {isLoading ? '...' : '→'}
              </button>
            </div>
            <button onClick={() => setScreen('choice')} style={{ width: '100%', padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>← Zurück</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────
function Sidebar({ subject, selectedId, onSelect, onBack }) {
  const tree = buildTree(subject);
  const [openGroups, setOpenGroups] = useState(() => {
    const s = {};
    Object.keys(tree).forEach(g => { s[g] = true; });
    return s;
  });
  const [openTopics, setOpenTopics] = useState({});
  function toggleGroup(g) { setOpenGroups(p => ({ ...p, [g]: !p[g] })); }
  function toggleTopic(key) { setOpenTopics(p => ({ ...p, [key]: !p[key] })); }
  function isTopicOpen(g, t) {
    const key = g + '||' + t;
    return key in openTopics ? openTopics[key] : false;
  }
  const subjectColors = { 'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e', 'Deutsch': '#b45309', 'Mathe Neu': '#534AB7', 'Deutsch Neu': '#b45309' };
  const color = subjectColors[subject] || '#534AB7';
  const subjectEmojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝', 'Mathe Neu': '✨', 'Deutsch Neu': '✨' };
  const totalCount = questions.filter(q => {
    if (subject === 'Mathe ohne TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR');
    if (subject === 'Mathe mit TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR');
    if (subject === 'Deutsch') return q.subject === 'Deutsch';
    return false;
  }).length;

  return (
    <aside style={{ width: '270px', minWidth: '270px', background: '#f8f7ff', borderRight: '1px solid #e5e3f0', display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
      <div style={{ padding: '20px 16px 14px', borderBottom: '1px solid #e5e3f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px' }}>
            {subjectEmojis[subject]}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#1a1a2e' }}>{subject}</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>{totalCount} Aufgaben · GMS 3</p>
          </div>
        </div>
      </div>

      {/* Lo-Fi Player */}
      <LofiPlayer />

      <nav style={{ flex: 1, padding: '8px 0' }}>
        {Object.entries(tree).map(([groupName, topics]) => (
          <div key={groupName}>
            <button onClick={() => toggleGroup(groupName)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', color: color, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '13px' }}>{openGroups[groupName] ? '📂' : '📁'}</span>
                {groupName}
              </span>
              <span style={{ fontSize: '9px', opacity: 0.6 }}>{openGroups[groupName] ? '▲' : '▼'}</span>
            </button>
            {openGroups[groupName] && Object.entries(topics).map(([topicName, items]) => {
              const topicKey = groupName + '||' + topicName;
              const open = isTopicOpen(groupName, topicName);
              return (
                <div key={topicKey}>
                  <button onClick={() => toggleTopic(topicKey)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 8px 28px', background: 'none', border: 'none', cursor: 'pointer', color: '#444', fontSize: '13px', fontWeight: '600' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '12px', opacity: 0.5 }}>{open ? '▾' : '▸'}</span>
                      {topicName}
                    </span>
                    <span style={{ fontSize: '10px', background: '#e5e3f0', color: color, borderRadius: '10px', padding: '1px 7px', fontWeight: '700' }}>{items.length}</span>
                  </button>
                  {open && (
                    <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 6px 0' }}>
                      {items.sort((a, b) => b.year - a.year).map(q => (
                        <li key={q.id}>
                          <button onClick={() => onSelect(q.id)} style={{ width: '100%', textAlign: 'left', padding: '8px 16px 8px 40px', background: selectedId === q.id ? '#ede9fc' : 'none', border: 'none', borderLeft: selectedId === q.id ? `3px solid ${color}` : '3px solid transparent', cursor: 'pointer', color: selectedId === q.id ? color : '#555', fontSize: '13px', lineHeight: '1.4', transition: 'all 0.12s' }}
                            onMouseEnter={e => { if (selectedId !== q.id) e.currentTarget.style.background = '#f0eeff'; }}
                            onMouseLeave={e => { if (selectedId !== q.id) e.currentTarget.style.background = 'none'; }}
                          >
                            <span style={{ display: 'block', fontSize: '11px', color: '#aaa', marginBottom: '1px' }}>{q.year}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>
      <div style={{ padding: '14px 16px', borderTop: '1px solid #e5e3f0' }}>
        <button onClick={onBack} style={{ width: '100%', padding: '9px', background: 'none', border: '1px solid #d0cce8', borderRadius: '8px', cursor: 'pointer', color: '#777', fontSize: '13px' }}>
          ← Zurück zur Übersicht
        </button>
      </div>
    </aside>
  );
}

// ─── QUESTION DISPLAY ─────────────────────────────────────────────────────
function QuestionDisplay({ question, subject }) {
  const [showSolution, setShowSolution] = useState(false);
  const [showPause, setShowPause] = useState(false);
  const [prevId, setPrevId] = useState(null);
  if (question && question.id !== prevId) { setShowSolution(false); setPrevId(question.id); }

  const subjectColors = { 'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e', 'Deutsch': '#b45309', 'Mathe Neu': '#534AB7', 'Deutsch Neu': '#b45309' };
  const color = subjectColors[subject] || '#534AB7';

  if (!question) {
    const emojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝' };
    const tips = { 'Mathe ohne TR': 'Kein Taschenrechner erlaubt – Kopfrechnen trainieren! 🧠', 'Mathe mit TR': 'Taschenrechner erlaubt – aber den Rechenweg aufzeigen! ✏️', 'Deutsch': 'Lies die Texte genau – Details sind entscheidend! 🔍' };
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>{emojis[subject] || '📚'}</div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 8px' }}>Bereit zum Üben? 💪</h2>
          <p style={{ color: '#999', margin: '0 0 20px', lineHeight: '1.6', fontSize: '15px' }}>Wähle links eine Aufgabe aus, um zu beginnen.</p>
          <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '12px', padding: '16px', fontSize: '14px', color: '#666' }}>
            💡 {tips[subject] || 'Viel Erfolg!'}
          </div>
        </div>
      </div>
    );
  }

  const s = question.solution;
  const reactions = ['🔥 Hammer! Weiter so!', '⭐ Stark gemacht!', '🧠 Du bist ein Genie!', '💪 So geht das!', '🚀 Nichts kann dich stoppen!'];
  const reaction = reactions[Math.floor(Math.random() * reactions.length)];

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '40px', background: '#fff' }}>
      {showPause && <PauseModal onClose={() => setShowPause(false)} />}
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {[[question.year, '#ede9fc', color], [question.exam, '#ede9fc', color],
            [question.group === 'Alte Prüfungen' ? '📄 Alte Prüfung' : '✨ Neue Aufgabe', question.group === 'Alte Prüfungen' ? '#fef3c7' : '#dcfce7', question.group === 'Alte Prüfungen' ? '#92400e' : '#166534']
          ].map(([label, bg, c]) => (
            <span key={label} style={{ background: bg, color: c, padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{label}</span>
          ))}
        </div>

        <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 16px' }}>{question.topic}</h1>

        {question.pdfUrl && (
          <a href={question.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', marginBottom: '16px', background: '#fff7ed', border: '1px solid #fdba74', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#c2410c', textDecoration: 'none' }}>
            📄 Originale Prüfung öffnen
          </a>
        )}

        <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '12px', padding: '22px', marginBottom: '16px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.8', color: '#333', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}
            dangerouslySetInnerHTML={{ __html: question.questionText.replace(/__(.*?)__/g, '<u>$1</u>') }} />
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
          <button onClick={() => setShowSolution(v => !v)} style={{ padding: '12px 28px', background: showSolution ? '#f0eeff' : color, color: showSolution ? color : '#fff', border: showSolution ? `1px solid #c4b5fd` : 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
            {showSolution ? '🙈 Lösungsweg ausblenden' : '💡 Lösungsweg anzeigen'}
          </button>
          <button onClick={() => setShowPause(true)} style={{ padding: '12px 18px', background: 'linear-gradient(135deg, #534AB7, #0f766e)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            🎲 Pause
          </button>
        </div>

        {showSolution && (
          <div style={{ marginTop: '28px' }}>
            <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '10px', padding: '14px 18px', marginBottom: '8px', fontSize: '15px', fontWeight: '600', color: '#92400e' }}>{reaction}</div>
            <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '10px', padding: '14px 18px', marginBottom: '20px', fontSize: '14px', color: '#92400e', lineHeight: '1.7' }}>{s.intro}</div>
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '28px', width: '28px', height: '28px', borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', marginTop: '2px' }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 5px', fontWeight: '600', fontSize: '14px', color: '#1a1a2e' }}>{step.title}</p>
                  <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '8px', padding: '11px 15px', fontSize: '14px', color: '#333', lineHeight: '1.7', whiteSpace: 'pre-wrap', fontFamily: 'ui-monospace, monospace' }}>{step.content}</div>
                </div>
              </div>
            ))}
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '10px', padding: '14px 18px', margin: '20px 0', fontSize: '14px', color: '#166534', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>{s.tip}</div>
            {s.youtube && (
              <div style={{ marginTop: '22px' }}>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>📺 Erklärvideo zum Thema</p>
                <a href={s.youtube} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#166534', textDecoration: 'none' }}>
                  ▶ Video auf YouTube öffnen ↗
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────
function LandingPage({ onSelect }) {
  const [fact, setFact] = useState(null);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);
  useEffect(() => { setFact(facts[Math.floor(Math.random() * facts.length)]); }, []);
  useEffect(() => {
    if (logoClicks >= 5) {
      setShowEgg(true);
      setLogoClicks(0);
      setTimeout(() => setShowEgg(false), 5000);
    }
  }, [logoClicks]);
  const matheOhneTR = questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR') && q.group === 'Alte Prüfungen').length;
  const matheMitTR = questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR') && q.group === 'Alte Prüfungen').length;
  const deutsch = questions.filter(q => q.subject === 'Deutsch' && q.group === 'Alte Prüfungen').length;
  const neu = questions.filter(q => q.group === 'Neue Übungsaufgaben').length;

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8f7ff 0%, #fff 100%)', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', width: '100%' }}>
        <div onClick={() => setLogoClicks(c => c + 1)} style={{ fontSize: '52px', marginBottom: '12px', cursor: 'default', userSelect: 'none' }}>🎓</div>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a2e', margin: '0 0 8px' }}>KantiPrep Thurgau</h1>
        <p style={{ fontSize: '16px', color: '#777', margin: '0 0 8px' }}>Echte Prüfungen · 2020–2025 · GMS 2 & GMS 3</p>
        <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '16px', padding: '20px 24px', marginBottom: '40px', display: 'inline-block', textAlign: 'left', maxWidth: '90%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#534AB7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🤯 Mind-Blow des Tages</p>
          <p style={{ margin: '8px 0 0 0', fontSize: '15px', color: '#333', fontWeight: '500', lineHeight: '1.6' }}> {fact ? `${fact.emoji} ${fact.text}` : ''}
</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div style={{ background: '#fff', border: '2px solid #e5e3f0', borderRadius: '20px', padding: '28px', textAlign: 'left', opacity: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ background: '#e5e3f0', borderRadius: '10px', padding: '8px 16px', fontSize: '13px', fontWeight: '700', color: '#888' }}>GMS 2</div>
              <span style={{ fontSize: '13px', color: '#aaa' }}>2. Sekundarschule</span>
              <span style={{ marginLeft: 'auto', background: '#f3f4f6', color: '#9ca3af', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600' }}>🔒 Bald</span>
            </div>
            {[{ emoji: '📝', label: 'Deutsch' }, { emoji: '📐', label: 'Mathe ohne TR' }, { emoji: '🔢', label: 'Mathe mit TR' }].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '10px', background: '#e5e3f0', marginBottom: '8px', cursor: 'not-allowed' }}>
                <span style={{ fontSize: '18px' }}>{item.emoji}</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#aaa' }}>{item.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#bbb' }}>Bald verfügbar</span>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: '2px solid #534AB7', borderRadius: '20px', padding: '28px', textAlign: 'left', boxShadow: '0 4px 20px rgba(83,74,183,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ background: '#534AB7', borderRadius: '10px', padding: '8px 16px', fontSize: '13px', fontWeight: '700', color: '#fff' }}>GMS 3</div>
              <span style={{ fontSize: '13px', color: '#666' }}>3. Sekundarschule</span>
              <span style={{ marginLeft: 'auto', background: '#dcfce7', color: '#166534', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600' }}>✅ 2020–2025</span>
            </div>
            {[
              { emoji: '📝', label: 'Deutsch', key: 'Deutsch', count: deutsch, color: '#b45309', bg: '#fffbeb', border: '#fcd34d' },
              { emoji: '📐', label: 'Mathe ohne TR', key: 'Mathe ohne TR', count: matheOhneTR, color: '#534AB7', bg: '#f0eeff', border: '#c4b5fd' },
              { emoji: '🔢', label: 'Mathe mit TR', key: 'Mathe mit TR', count: matheMitTR, color: '#0f766e', bg: '#f0fdf4', border: '#86efac' },
            ].map(item => (
              <button key={item.label} onClick={() => onSelect(item.key)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '10px', background: item.bg, border: `1px solid ${item.border}`, marginBottom: '8px', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s', textAlign: 'left' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ fontSize: '18px' }}>{item.emoji}</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: item.color }}>{item.label}</span>
                <span style={{ marginLeft: 'auto', background: 'white', color: item.color, fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: '700', border: `1px solid ${item.border}` }}>{item.count} Aufgaben</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #534AB7, #0f766e)', borderRadius: '16px', padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
          <div style={{ color: '#fff' }}>
            <p style={{ margin: 0, fontSize: '16px', fontWeight: '700' }}>✨ Neue Übungsaufgaben</p>
            <p style={{ margin: 0, fontSize: '13px', opacity: 0.8 }}>KI-generierte Aufgaben · Ähnlich wie echte Prüfungen</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => onSelect('Mathe Neu')} style={{ padding: '8px 18px', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>📐 Mathe</button>
            <button onClick={() => onSelect('Deutsch Neu')} style={{ padding: '8px 18px', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>📝 Deutsch</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
          {[
            { num: questions.filter(q => q.group === 'Alte Prüfungen').length, label: 'Echte Prüfungsaufgaben', emoji: '📄' },
            { num: '2020–2025', label: 'Jahrgänge verfügbar', emoji: '📅' },
            { num: neu, label: 'Neue Übungsaufgaben', emoji: '✨' },
          ].map(s => (
            <div key={s.label} style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '20px', marginBottom: '4px' }}>{s.emoji}</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#534AB7' }}>{s.num}</div>
              <div style={{ fontSize: '11px', color: '#999' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: '#ccc' }}>Made with ❤️ in Thurgau by Deli · Für Zerya und alle Schüler:innen 🌟</p>

        {showEgg && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', maxWidth: '380px', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ fontSize: '52px', marginBottom: '1rem' }}>❤️</div>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 0.75rem', lineHeight: '1.5' }}>Schön dass Du meine Tochter bist...</p>
              <p style={{ fontSize: '16px', color: '#534AB7', margin: 0, fontWeight: '500' }}>Wenn Du willst, du wirst es schaffen ❤️</p>
              <p style={{ fontSize: '12px', color: '#ccc', marginTop: '1.5rem' }}>— Dein Vater</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [subject, setSubject] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  if (!subject) return <LandingPage onSelect={s => { setSubject(s); setSelectedId(null); }} />;
  const selectedQuestion = questions.find(q => q.id === selectedId) || null;
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Sidebar subject={subject} selectedId={selectedId} onSelect={setSelectedId} onBack={() => { setSubject(null); setSelectedId(null); }} />
      <QuestionDisplay question={selectedQuestion} subject={subject} />
    </div>
  );
}