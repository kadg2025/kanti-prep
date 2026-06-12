'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { questions } from './lib/questions';
import { facts } from './lib/facts';
import LinksPage from './LinksPage';
import FeedbackButton from './components/FeedbackButton';



// ─── PROGRESS (localStorage) ──────────────────────────────────────────────
function useSolved() {
  const [solved, setSolved] = useState(new Set());
  useEffect(() => {
    try { setSolved(new Set(JSON.parse(localStorage.getItem('kp_solved') || '[]'))); } catch {}
  }, []);
  const markSolved = useCallback((id) => {
    setSolved(prev => {
      const next = new Set(prev);
      next.add(id);
      try { localStorage.setItem('kp_solved', JSON.stringify([...next])); } catch {}
      return next;
    });
  }, []);
  const clearSolved = useCallback(() => {
    setSolved(new Set());
    try { localStorage.removeItem('kp_solved'); } catch {}
  }, []);
  return { solved, markSolved, clearSolved };
}

// ─── STREAK ───────────────────────────────────────────────────────────────
function useStreak() {
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('kp_streak') || '{}');
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (data.last === today) setStreak(data.count || 1);
      else if (data.last === yesterday) setStreak(data.count || 1);
    } catch {}
  }, []);

  const bumpStreak = useCallback(() => {
    const today = new Date().toDateString();
    try {
      const data = JSON.parse(localStorage.getItem('kp_streak') || '{}');
      if (data.last === today) return;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const newCount = data.last === yesterday ? (data.count || 1) + 1 : 1;
      localStorage.setItem('kp_streak', JSON.stringify({ last: today, count: newCount }));
      setStreak(newCount);
    } catch {}
  }, []);

  return { streak, bumpStreak };
}

// ─── DARK MODE ────────────────────────────────────────────────────────────
function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kp_dark');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = saved !== null ? saved === 'true' : prefersDark;
      setDark(isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } catch {}
  }, []);
  const toggleDark = useCallback(() => {
    setDark(d => {
      const next = !d;
      try {
        localStorage.setItem('kp_dark', String(next));
        document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
      } catch {}
      return next;
    });
  }, []);
  return { dark, toggleDark };
}

// ─── LERNPLAN ─────────────────────────────────────────────────────────────
function useLernplan() {
  const [pruefungsDatum, setPruefungsDatum] = useState('');
  useEffect(() => {
    try { setPruefungsDatum(localStorage.getItem('kp_pruefung') || ''); } catch {}
  }, []);
  const saveDatum = useCallback((datum) => {
    setPruefungsDatum(datum);
    try { localStorage.setItem('kp_pruefung', datum); } catch {}
  }, []);
  const daysLeft = pruefungsDatum ? Math.ceil((new Date(pruefungsDatum) - new Date()) / 86400000) : null;
  const aufgabenProTag = daysLeft > 0 ? Math.ceil(questions.length / daysLeft) : null;
  return { pruefungsDatum, saveDatum, daysLeft, aufgabenProTag };
}

// ─── KONFETTI ─────────────────────────────────────────────────────────────
function Konfetti({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3500);
    return () => clearTimeout(timer);
  }, [onDone]);
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: ['#534AB7', '#0f766e', '#f59e0b', '#ef4444', '#22c55e', '#3b82f6'][Math.floor(Math.random() * 6)],
    delay: Math.random() * 1.5,
    size: 8 + Math.random() * 8,
  }));
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 9998, overflow: 'hidden' }}>
      {pieces.map(p => (
        <div key={p.id} style={{
          position: 'absolute', left: `${p.x}%`, top: '-20px',
          width: p.size, height: p.size, background: p.color, borderRadius: '2px',
          animation: `fall ${2 + Math.random()}s ${p.delay}s linear forwards`,
        }} />
      ))}
      <style>{`@keyframes fall { to { transform: translateY(110vh) rotate(720deg); opacity: 0; } }`}</style>
    </div>
  );
}

// ─── BUILD TREE ───────────────────────────────────────────────────────────
function buildTree(subject) {
  const filtered = questions.filter(q => {
    if (subject === 'Mathe ohne TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR');
    if (subject === 'Mathe mit TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR');
    if (subject === 'Deutsch') return q.subject === 'Deutsch' && (q.id.startsWith('D3_') || q.id.startsWith('D_'));
    if (subject === 'Deutsch GMS2') return q.subject === 'Deutsch' && q.id.startsWith('D2_');
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

// ─── LOFI PLAYER ─────────────────────────────────────────────────────────
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
    setTimeout(() => { if (audioRef.current) playChord(ctx, gain, freq); }, 3500);
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
    <div style={{ padding: '10px 14px', borderBottom: '1px solid #e5e3f0', display: 'flex', alignItems: 'center', gap: '8px', background: isPlaying ? '#f0eeff' : '#f8f7ff' }}>
      <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{displayEmoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: '#1a1a2e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.name}</p>
        <p style={{ margin: 0, fontSize: '10px', color: '#999' }}>{track.vibe}</p>
      </div>
      <button onClick={() => changeTrack(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '12px', padding: '2px' }}>⏮</button>
      <button onClick={toggle} style={{ width: '28px', height: '28px', borderRadius: '50%', background: isPlaying ? color : '#e5e3f0', border: 'none', cursor: 'pointer', color: isPlaying ? '#fff' : '#666', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{isPlaying ? '⏸' : '▶'}</button>
      <button onClick={() => changeTrack(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '12px', padding: '2px' }}>⏭</button>
      <input type="range" min="0" max="100" value={vol} onChange={e => changeVol(Number(e.target.value))} style={{ width: '50px' }} />
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

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages]);

  useEffect(() => {
    if (screen === 'dino') startDino();
    else stopDino();
    return () => stopDino();
  }, [screen]);

  function startDino() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dino = { x: 60, y: 100, w: 22, h: 28, vy: 0, onGround: true, frame: 0 };
    let obstacles = [], clouds = [], score = 0, best = 0, speed = 4, frameCount = 0, gameOver = false, nightMode = false;
    let running = true;
    const stars = Array.from({ length: 20 }, () => ({ x: Math.random() * 460, y: Math.random() * 55, r: Math.random() * 1.5 + 0.5 }));
    const ground = 118;
    function jump() { if (gameOver) { reset(); return; } if (dino.onGround) { dino.vy = -12; dino.onGround = false; } }
    function reset() { dino = { x: 60, y: 100, w: 22, h: 28, vy: 0, onGround: true, frame: 0 }; obstacles = []; clouds = []; score = 0; speed = 4; frameCount = 0; gameOver = false; }
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
        const lastObstacle = obstacles.length > 0 ? obstacles[obstacles.length - 1] : null;
        const minGap = 200;
        const canSpawn = !lastObstacle || lastObstacle.x < W - minGap;
        if (canSpawn && frameCount % Math.max(55, 85 - Math.floor(speed * 4)) === 0) { const h = 18 + Math.random() * 20; obstacles.push({ x: W, y: ground - h, w: 14, h, type: 'cactus' }); }
        // Bird: either very high (y=15-25, jump over) or very low (y=85-95, duck/run under)
        if (canSpawn && score > 400 && frameCount % 140 === 0 && Math.random() < 0.35) {
          const birdHigh = Math.random() < 0.5;
          const birdY = birdHigh ? 15 + Math.random() * 10 : 88 + Math.random() * 8;
          obstacles.push({ x: W, y: birdY, w: 28, h: 14, type: 'bird', frame: 0 });
        }
        if (frameCount % 90 === 0) clouds.push({ x: W, y: 15 + Math.random() * 30, w: 55 + Math.random() * 30, speed: 0.8 + Math.random() });
        clouds.forEach(c => c.x -= c.speed); clouds = clouds.filter(c => c.x > -90);
        obstacles.forEach(o => { o.x -= speed; if (o.type === 'bird') o.frame = Math.floor(frameCount / 6) % 2; });
        obstacles = obstacles.filter(o => o.x + o.w > 0);
        for (const o of obstacles) { if (dino.x + 3 < o.x + o.w && dino.x + dino.w - 3 > o.x && dino.y + 3 < o.y + o.h && dino.y + dino.h > o.y) { gameOver = true; if (score > best) best = score; } }
      }
      ctx.fillStyle = nightMode ? '#bbb' : '#ddd';
      clouds.forEach(c => { ctx.beginPath(); ctx.ellipse(c.x, c.y, c.w / 2, 10, 0, 0, Math.PI * 2); ctx.fill(); });
      const dc = nightMode ? '#4ade80' : '#15803d';
      ctx.fillStyle = dc; ctx.fillRect(dino.x, dino.y, dino.w, dino.h);
      ctx.fillStyle = bg; ctx.fillRect(dino.x + 14, dino.y + 4, 6, 6);
      if (dino.onGround) { ctx.fillStyle = dc; ctx.fillRect(dino.x + 4, dino.y + dino.h, 7, dino.frame === 0 ? 5 : 8); ctx.fillRect(dino.x + 11, dino.y + dino.h, 7, dino.frame === 0 ? 8 : 5); }
      obstacles.forEach(o => {
        if (o.type === 'cactus') { ctx.fillStyle = nightMode ? '#86efac' : '#16a34a'; ctx.fillRect(o.x, o.y, o.w, o.h); ctx.fillRect(o.x + 2, o.y - 6, o.w - 4, 8); ctx.fillRect(o.x - 5, o.y + 6, 6, o.h - 10); ctx.fillRect(o.x + o.w - 1, o.y + 8, 6, o.h - 14); }
        else { ctx.fillStyle = nightMode ? '#fbbf24' : '#d97706'; ctx.fillRect(o.x, o.y, o.w, o.h); ctx.fillRect(o.x + 8, o.y - 6, 10, 7); ctx.fillRect(o.x + (o.frame === 0 ? 0 : 4), o.y + o.h, 10, 5); }
      });
      ctx.fillStyle = nightMode ? '#aaa' : '#555'; ctx.font = '12px system-ui'; ctx.textAlign = 'left';
      ctx.fillText(`Score: ${score}  Best: ${best}`, 8, 16);
      if (gameOver) { ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, W, H); ctx.fillStyle = '#fff'; ctx.font = '500 15px system-ui'; ctx.textAlign = 'center'; ctx.fillText('Game Over — Klicken zum Neustart', W / 2, H / 2); ctx.textAlign = 'left'; }
      dinoRef.current = requestAnimationFrame(loop);
    }
    dinoRef.current = requestAnimationFrame(loop);
    return () => { running = false; document.removeEventListener('keydown', onKey); };
  }

  function stopDino() { if (dinoRef.current) cancelAnimationFrame(dinoRef.current); }

  async function sendChat() {
    const text = chatInput.trim();
    if (!text || isLoading) return;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', text }]);
    const newHistory = [...chatHistory, { role: 'user', content: text }];
    setChatHistory(newHistory);
    setIsLoading(true);
    setChatMessages(prev => [...prev, { role: 'assistant', text: '...' }]);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 150, system: personas[personaKey].system, messages: newHistory }) });
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
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e5e3f0', padding: '1.5rem', width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '16px', fontWeight: '700', margin: 0, color: '#1a1a2e' }}>
            {screen === 'choice' ? 'Pause verdient! 🎉' : screen === 'dino' ? '🦕 Dino Game' : screen === 'meme' ? '😂 Meme' : screen === 'music' ? '🎧 Musik' : '🧑‍🔬 Chat'}
          </p>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#999' }}>✕</button>
        </div>
        {screen === 'choice' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1rem' }}>
              {[{ key: 'music', emoji: '🎧', label: 'Musik', sub: 'Hip Hop · Pop · Rap' }, { key: 'dino', emoji: '🦕', label: 'Dino Game', sub: 'Kaktus & Vögel' }, { key: 'meme', emoji: '😂', label: 'Meme', sub: 'Lachen ist Medizin' }, { key: 'einstein', emoji: '🧑‍🔬', label: 'Chat', sub: 'Einstein · Yoda · mehr' }].map(opt => (
                <button key={opt.key} onClick={() => setScreen(opt.key)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '1.25rem 0.5rem', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '12px', cursor: 'pointer' }}>
                  <span style={{ fontSize: '32px' }}>{opt.emoji}</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a2e' }}>{opt.label}</span>
                  <span style={{ fontSize: '11px', color: '#999' }}>{opt.sub}</span>
                </button>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: '#bbb', textAlign: 'center', margin: 0 }}>5 Minuten — dann zurück zum Lernen 💪</p>
          </div>
        )}
        {screen === 'music' && (
          <div>
            <p style={{ fontSize: '14px', color: '#555', margin: '0 0 1rem' }}>Wähle eine Playlist — öffnet Spotify in neuem Tab:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1rem' }}>
              {musicLinks.map(m => (<a key={m.label} href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', textDecoration: 'none', color: '#1a1a2e', fontSize: '14px', fontWeight: '600' }}>{m.label}<span style={{ fontSize: '12px', color: '#999' }}>↗ öffnen</span></a>))}
            </div>
            <p style={{ fontSize: '11px', color: '#bbb', margin: '0 0 1rem', textAlign: 'center' }}>Kostenlos mit Spotify Free 🎵</p>
            <button onClick={() => setScreen('choice')} style={{ width: '100%', padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>← Zurück</button>
          </div>
        )}
        {screen === 'dino' && (
          <div>
            <div style={{ background: '#111', borderRadius: '12px', padding: '1rem', marginBottom: '1rem' }}>
              <canvas ref={canvasRef} width={460} height={140} style={{ width: '100%', display: 'block', borderRadius: '4px', cursor: 'pointer' }} />
            </div>
            <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', margin: '0 0 1rem' }}>Klicken oder Leertaste zum Springen</p>
            <button onClick={() => setScreen('choice')} style={{ width: '100%', padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>← Zurück</button>
          </div>
        )}
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
        {screen === 'einstein' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', padding: '0.75rem', background: '#f8f7ff', borderRadius: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{personas[personaKey].emoji}</div>
              <div style={{ flex: 1 }}><p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#1a1a2e' }}>{personas[personaKey].name}</p></div>
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
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: msg.role === 'user' ? '#0f766e' : color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>{msg.role === 'user' ? '👤' : personas[personaKey].emoji}</div>
                  <div style={{ maxWidth: '80%', padding: '8px 12px', borderRadius: '12px', fontSize: '13px', lineHeight: '1.6', background: msg.role === 'user' ? '#0f766e' : '#fff', color: msg.role === 'user' ? '#fff' : '#1a1a2e', border: msg.role === 'user' ? 'none' : '1px solid #e5e3f0' }}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat()} placeholder="Stell eine Frage..." style={{ flex: 1, padding: '8px 12px', fontSize: '13px', borderRadius: '8px', border: '1px solid #e5e3f0' }} />
              <button onClick={sendChat} disabled={isLoading} style={{ padding: '8px 16px', background: color, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', cursor: 'pointer' }}>{isLoading ? '...' : '→'}</button>
            </div>
            <button onClick={() => setScreen('choice')} style={{ width: '100%', padding: '10px', background: '#f8f7ff', border: '1px solid #e5e3f0', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: '#555' }}>← Zurück</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────
function Sidebar({ subject, selectedId, onSelect, onBack, solved = new Set(), clearSolved, dark = false, toggleDark = () => {}, streak = 0, dm = {} }) {
  const tree = buildTree(subject);
  const [openGroups, setOpenGroups] = useState(() => { const s = {}; Object.keys(tree).forEach(g => { s[g] = true; }); return s; });
  const [openTopics, setOpenTopics] = useState({});
  function toggleGroup(g) { setOpenGroups(p => ({ ...p, [g]: !p[g] })); }
  function toggleTopic(key) { setOpenTopics(p => ({ ...p, [key]: !p[key] })); }
  function isTopicOpen(g, t) { const key = g + '||' + t; return key in openTopics ? openTopics[key] : false; }

  const subjectColors = { 'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e', 'Deutsch': '#b45309', 'Deutsch GMS2': '#b45309', 'Mathe Neu': '#534AB7', 'Deutsch Neu': '#b45309' };
  const color = subjectColors[subject] || '#534AB7';
  const subjectEmojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝', 'Deutsch GMS2': '📝', 'Mathe Neu': '✨', 'Deutsch Neu': '✨' };
  const subjectLabels = { 'Mathe ohne TR': 'Mathe ohne TR', 'Mathe mit TR': 'Mathe mit TR', 'Deutsch': 'Deutsch GMS3', 'Deutsch GMS2': 'Deutsch GMS2', 'Mathe Neu': 'Mathe Neu', 'Deutsch Neu': 'Deutsch Neu' };

  const totalCount = questions.filter(q => {
    if (subject === 'Mathe ohne TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR');
    if (subject === 'Mathe mit TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR');
    if (subject === 'Deutsch') return q.subject === 'Deutsch' && (q.id.startsWith('D3_') || q.id.startsWith('D_'));
    if (subject === 'Deutsch GMS2') return q.subject === 'Deutsch' && q.id.startsWith('D2_');
    return false;
  }).length;

  const gmsLabel = subject.includes('GMS2') ? 'GMS 2' : 'GMS 3';

  return (
    <aside style={{ width: '270px', minWidth: '270px', background: dark ? '#1a1a2e' : '#f8f7ff', borderRight: `1px solid ${dark ? '#2d3748' : '#e5e3f0'}`, display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto', color: dark ? '#e2e8f0' : '#1a1a2e' }}>
      <div style={{ padding: '12px 16px', borderBottom: `1px solid ${dark ? '#2d3748' : '#e5e3f0'}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {streak > 0 && <span style={{ background: '#f97316', color: '#fff', borderRadius: '20px', padding: '2px 10px', fontSize: '12px', fontWeight: '700' }}>🔥 {streak}</span>}
            {streak >= 3 && <span style={{ fontSize: '11px', color: '#f97316', fontWeight: '600' }}>Streak!</span>}
          </div>
          <button onClick={toggleDark} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', padding: '4px' }}>{dark ? '☀️' : '🌙'}</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px' }}>
            {subjectEmojis[subject]}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: dark ? '#e2e8f0' : '#1a1a2e' }}>{subject}</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>{totalCount} Aufgaben · GMS 3</p>
          </div>
        </div>
      </div>
      <LofiPlayer />
      {/* Progress Bar */}
      {(() => {
        const subjectQids = new Set(Object.values(buildTree(subject)).flatMap(topics => Object.values(topics).flatMap(items => items.map(q => q.id))));
        const total = subjectQids.size;
        const solvedCount = [...solved].filter(id => subjectQids.has(id)).length;
        const pct = total > 0 ? Math.round((solvedCount / total) * 100) : 0;
        return (
          <div style={{ padding: '10px 16px', borderBottom: '1px solid #e5e3f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '11px', color: '#999' }}>Fortschritt</span>
              <span style={{ fontSize: '11px', color: color, fontWeight: '600' }}>{solvedCount}/{total} ✓</span>
            </div>
            <div style={{ height: '6px', background: '#e5e3f0', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: '3px', transition: 'width 0.4s ease' }} />
            </div>
          </div>
        );
      })()}
      <nav style={{ flex: 1, padding: '8px 0' }}>
        {Object.entries(tree).map(([groupName, topics]) => (
          <div key={groupName}>
            <button onClick={() => toggleGroup(groupName)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', color: color, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '13px' }}>{openGroups[groupName] ? '📂' : '📁'}</span>{groupName}
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
                      <span style={{ fontSize: '12px', opacity: 0.5 }}>{open ? '▾' : '▸'}</span>{topicName}
                    </span>
                    <span style={{ fontSize: '10px', background: '#e5e3f0', color: color, borderRadius: '10px', padding: '1px 7px', fontWeight: '700' }}>{items.length}</span>
                  </button>
                  {open && (
                    <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 6px 0' }}>
                      {items.sort((a, b) => b.year - a.year).map(q => (
                        <li key={q.id}>
                          <button onClick={() => onSelect(q.id)} style={{ width: '100%', textAlign: 'left', padding: '8px 16px 8px 40px', background: selectedId === q.id ? '#ede9fc' : solved.has(q.id) ? '#f0fdf4' : 'none', border: 'none', borderLeft: selectedId === q.id ? `3px solid ${color}` : solved.has(q.id) ? '3px solid #22c55e' : '3px solid transparent', cursor: 'pointer', color: selectedId === q.id ? color : '#555', fontSize: '13px', lineHeight: '1.4', transition: 'all 0.12s', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                            onMouseEnter={e => { if (selectedId !== q.id) e.currentTarget.style.background = '#f0eeff'; }}
                            onMouseLeave={e => { if (selectedId !== q.id) e.currentTarget.style.background = solved.has(q.id) ? '#f0fdf4' : 'none'; }}
                          >
                            <span style={{ display: 'block', fontSize: '11px', color: '#aaa', marginBottom: '1px' }}>{q.year}</span>
                            {solved.has(q.id) && <span style={{ fontSize: '13px', color: '#22c55e' }}>✓</span>}
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
        <button onClick={onBack} style={{ width: '100%', padding: '9px', background: 'none', border: '1px solid #d0cce8', borderRadius: '8px', cursor: 'pointer', color: '#777', fontSize: '13px', marginBottom: '6px' }}>← Zurück zur Übersicht</button>
        <button onClick={() => { if (confirm('Fortschritt zurücksetzen?')) clearSolved(); }} style={{ width: '100%', padding: '7px', background: 'none', border: '1px solid #fca5a5', borderRadius: '8px', cursor: 'pointer', color: '#ef4444', fontSize: '12px' }}>🗑️ Fortschritt zurücksetzen</button>
      </div>
    </aside>
  );
}

// ─── QUESTION DISPLAY ─────────────────────────────────────────────────────
function QuestionDisplay({ question, subject, onSolved = () => {}, solved = new Set(), dark = false, dm = {}, onKonfetti = () => {}, buildTree: bt }) {
  const [showSolution, setShowSolution] = useState(false);
  const [showPause, setShowPause] = useState(false);
  const [prevId, setPrevId] = useState(null);
  const [solvedCount, setSolvedCount] = useState(0);
  const [pauseUsed, setPauseUsed] = useState(false);
  if (question && question.id !== prevId) { setShowSolution(false); setPrevId(question.id); setPauseUsed(false); }
  const pauseAvailable = solvedCount > 0 && solvedCount % 5 === 0 && !pauseUsed;
  const subjectColors = { 'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e', 'Deutsch': '#b45309', 'Deutsch GMS2': '#b45309', 'Mathe Neu': '#534AB7', 'Deutsch Neu': '#b45309' };
  const color = subjectColors[subject] || '#534AB7';

  if (!question) {
    const emojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝', 'Deutsch GMS2': '📝' };
    const tips = { 'Mathe ohne TR': 'Kein Taschenrechner erlaubt – Kopfrechnen trainieren! 🧠', 'Mathe mit TR': 'Taschenrechner erlaubt – aber den Rechenweg aufzeigen! ✏️', 'Deutsch': 'Lies die Texte genau – Details sind entscheidend! 🔍', 'Deutsch GMS2': 'GMS2 Deutsch — Wortarten, Satzbau, Zeitformen! 🎯' };
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>{emojis[subject] || '📚'}</div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 8px' }}>Bereit zum Üben? 💪</h2>
          <p style={{ color: '#999', margin: '0 0 20px', lineHeight: '1.6', fontSize: '15px' }}>Wähle links eine Aufgabe aus, um zu beginnen.</p>
          <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '12px', padding: '16px', fontSize: '14px', color: '#666' }}>💡 {tips[subject] || 'Viel Erfolg!'}</div>
        </div>
      </div>
    );
  }

  const s = question.solution;

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '40px', background: '#fff' }}>
      {showPause && <PauseModal onClose={() => setShowPause(false)} />}
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {[[question.year, '#ede9fc', color], [question.exam, '#ede9fc', color],
            [question.group === 'Alte Prüfungen' ? '📄 Alte Prüfung' : '✨ Neue Aufgabe', question.group === 'Alte Prüfungen' ? '#fef3c7' : '#dcfce7', question.group === 'Alte Prüfungen' ? '#92400e' : '#166534']
          ].map(([label, bg, c]) => (<span key={label} style={{ background: bg, color: c, padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{label}</span>))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a2e', margin: 0 }}>{question.topic}</h1>
          {question.pdfUrl && (
            <a href={question.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#fff7ed', border: '1px solid #fdba74', borderRadius: '10px', fontSize: '13px', fontWeight: '600', color: '#c2410c', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              📄 Originale Prüfung
            </a>
          )}
        </div>
        <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '12px', padding: '22px', marginBottom: '16px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.8', color: '#333', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }} dangerouslySetInnerHTML={{ __html: question.questionText.replace(/__(.*?)__/g, '<u>$1</u>') }} />
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
          <button onClick={() => {
              if (!showSolution && question) {
                onSolved(question.id);
                setSolvedCount(c => c + 1);
                // Check if topic 100% done
                if (bt) {
                  const tree = bt(subject);
                  const topicItems = tree[question.group]?.[question.topic] || [];
                  const allSolved = topicItems.every(q => q.id === question.id || solved.has(q.id));
                  if (allSolved && topicItems.length > 1) onKonfetti();
                }
              }
              setShowSolution(v => !v);
            }} style={{ padding: '12px 28px', background: showSolution ? '#f0eeff' : color, color: showSolution ? color : '#fff', border: showSolution ? `1px solid #c4b5fd` : 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
            {showSolution ? '🙈 Lösungsweg ausblenden' : '💡 Lösungsweg anzeigen'}
          </button>
          <button onClick={() => setShowPause(true)} style={{ padding: '12px 18px', background: 'linear-gradient(135deg, #534AB7, #0f766e)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>🎲 Pause</button>
        </div>
        {showSolution && (
          <div style={{ marginTop: '28px' }}>
            <div style={{ background: 'transparent', padding: '0 0 16px 0', marginBottom: '4px', fontSize: '14px', color: '#444', lineHeight: '1.9', whiteSpace: 'pre-wrap' }}>{s.intro}</div>
            {s.svg && (
              <div style={{ marginBottom: '20px', textAlign: 'center' }}
                dangerouslySetInnerHTML={{ __html: s.svg }}
              />
            )}
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '28px', width: '28px', height: '28px', borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', marginTop: '2px' }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 5px', fontWeight: '600', fontSize: '14px', color: '#1a1a2e' }}>{step.title}</p>
                  <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '8px', padding: '11px 15px', fontSize: '14px', color: '#333', lineHeight: '1.7', whiteSpace: 'pre-wrap', fontFamily: 'ui-monospace, monospace' }}>{step.content}</div>
                  {step.solutionUrl && (
                    <a href={step.solutionUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '10px', padding: '10px 18px', background: '#166534', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#fff', textDecoration: 'none' }}>
                      📄 Offizielle Schullösung öffnen
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '10px', padding: '14px 18px', margin: '20px 0', fontSize: '14px', color: '#166534', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>{s.tip}</div>
            {question.solutionUrl && (
              <div style={{ marginTop: '16px', padding: '14px 18px', background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '10px' }}>
                <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#166534', fontWeight: '700' }}>
                  📌 {question.solutionHint || question.topic}
                </p>
                <a href={question.solutionUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: '#166534', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#fff', textDecoration: 'none' }}>
                  ✅ Offizielle Lösung öffnen ↗
                </a>
              </div>
            )}
          </div>
        )}
        
        <FeedbackButton questionId={question.id} />   {/* ← NEU: diese Zeile einfügen */}

      </div>
    </main>
  );
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────
function LandingPage({ onSelect, streak = 0 }) {
  const [fact, setFact] = useState(null);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);
  useEffect(() => { setFact(facts[Math.floor(Math.random() * facts.length)]); }, []);
  useEffect(() => { if (logoClicks >= 5) { setShowEgg(true); setLogoClicks(0); setTimeout(() => setShowEgg(false), 5000); } }, [logoClicks]);

  const matheOhneTR = questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR') && q.group === 'Alte Prüfungen').length;
  const matheMitTR = questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR') && q.group === 'Alte Prüfungen').length;
  const deutschGMS3 = questions.filter(q => q.subject === 'Deutsch' && q.group === 'Alte Prüfungen' && q.id.startsWith('D3_')).length;
  const deutschGMS2 = questions.filter(q => q.subject === 'Deutsch' && q.group === 'Alte Prüfungen' && q.id.startsWith('D2_')).length;

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8f7ff 0%, #fff 100%)', padding: '40px 20px', fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', width: '100%' }}>

        {/* Header */}
        <div onClick={() => setLogoClicks(c => c + 1)} style={{ fontSize: '52px', marginBottom: '8px', cursor: 'default', userSelect: 'none' }}>🎓</div>
        {streak > 0 && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '20px', padding: '4px 14px', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#c2410c' }}>
            🔥 {streak} {streak === 1 ? 'Tag' : 'Tage'} Streak{streak >= 3 ? ' — Feuer!' : ''}
          </div>
        )}
        <h1 style={{ fontSize: '34px', fontWeight: '800', color: '#1a1a2e', margin: '0 0 6px' }}>KantiPrep Thurgau</h1>
        <p style={{ fontSize: '15px', color: '#999', margin: '0 0 28px' }}>Aufnahmeprüfung Thurgau · GMS 2 & GMS 3</p>

        {/* GMS 2 & GMS 3 — ZUERST */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>

          {/* GMS 2 */}
          <div style={{ background: '#fff', border: '2px solid #b45309', borderRadius: '18px', padding: '22px', textAlign: 'left', boxShadow: '0 4px 20px rgba(180,83,9,0.10)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ background: '#b45309', borderRadius: '8px', padding: '5px 12px', fontSize: '12px', fontWeight: '700', color: '#fff' }}>GMS 2</div>
              <span style={{ fontSize: '12px', color: '#999' }}>2. Sek</span>
              <span style={{ marginLeft: 'auto', background: '#dcfce7', color: '#166534', fontSize: '10px', padding: '2px 8px', borderRadius: '20px', fontWeight: '600' }}>✅ 2016–2025</span>
            </div>
            {[
              { emoji: '📝', label: 'Deutsch', key: 'Deutsch GMS2', count: deutschGMS2, color: '#b45309', bg: '#fffbeb', border: '#fcd34d' },
              { emoji: '📐', label: 'Mathe ohne TR', key: null, color: '#aaa', bg: '#f3f4f6', border: '#f3f4f6' },
              { emoji: '🔢', label: 'Mathe mit TR', key: null, color: '#aaa', bg: '#f3f4f6', border: '#f3f4f6' },
            ].map(item => item.key ? (
              <button key={item.label} onClick={() => onSelect(item.key)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: item.bg, border: `1px solid ${item.border}`, marginBottom: '8px', cursor: 'pointer', transition: 'transform 0.15s', textAlign: 'left' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <span style={{ fontSize: '16px' }}>{item.emoji}</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: item.color }}>{item.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: item.color, fontWeight: '700' }}>{item.count}</span>
              </button>
            ) : (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: item.bg, marginBottom: '8px', cursor: 'not-allowed' }}>
                <span style={{ fontSize: '16px', opacity: 0.4 }}>{item.emoji}</span>
                <span style={{ fontSize: '13px', color: '#bbb' }}>{item.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#ccc' }}>Bald</span>
              </div>
            ))}
          </div>

          {/* GMS 3 */}
          <div style={{ background: '#fff', border: '2px solid #534AB7', borderRadius: '18px', padding: '22px', textAlign: 'left', boxShadow: '0 4px 20px rgba(83,74,183,0.10)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ background: '#534AB7', borderRadius: '8px', padding: '5px 12px', fontSize: '12px', fontWeight: '700', color: '#fff' }}>GMS 3</div>
              <span style={{ fontSize: '12px', color: '#999' }}>3. Sek</span>
              <span style={{ marginLeft: 'auto', background: '#dcfce7', color: '#166534', fontSize: '10px', padding: '2px 8px', borderRadius: '20px', fontWeight: '600' }}>✅ 2016–2025</span>
            </div>
            {[
              { emoji: '📝', label: 'Deutsch', key: 'Deutsch', count: deutschGMS3, color: '#b45309', bg: '#fffbeb', border: '#fcd34d' },
              { emoji: '📐', label: 'Mathe ohne TR', key: 'Mathe ohne TR', count: matheOhneTR, color: '#534AB7', bg: '#f0eeff', border: '#c4b5fd' },
              { emoji: '🔢', label: 'Mathe mit TR', key: 'Mathe mit TR', count: matheMitTR, color: '#0f766e', bg: '#f0fdf4', border: '#86efac' },
            ].map(item => (
              <button key={item.label} onClick={() => onSelect(item.key)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: item.bg, border: `1px solid ${item.border}`, marginBottom: '8px', cursor: 'pointer', transition: 'transform 0.15s', textAlign: 'left' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <span style={{ fontSize: '16px' }}>{item.emoji}</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: item.color }}>{item.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: item.color, fontWeight: '700' }}>{item.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mind-Blow + Links — DANACH */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '12px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div style={{ background: '#f9f8ff', border: '1px solid #e5e3f0', borderRadius: '14px', padding: '16px 20px', textAlign: 'left', flex: 1, minWidth: '240px', maxWidth: '580px' }}>
            <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: '700', color: '#534AB7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🤯 Mind-Blow des Tages</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#444', lineHeight: '1.6' }}>{fact ? `${fact.emoji} ${fact.text}` : ''}</p>
          </div>
          <button onClick={() => onSelect('links')} style={{ padding: '16px 20px', background: '#534AB7', border: 'none', borderRadius: '14px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', minWidth: '110px' }}>
            <span style={{ fontSize: '24px' }}>🌐</span>
            <span>Links</span>
          </button>
        </div>

        <p style={{ fontSize: '11px', color: '#ccc', margin: 0 }}>Made with ❤️ in Thurgau by Deli · Für meine Tochter und alle Schüler:innen 🌟</p>

        {showEgg && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', maxWidth: '380px' }}>
              <div style={{ fontSize: '52px', marginBottom: '1rem' }}>❤️</div>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 0.75rem', lineHeight: '1.5' }}>Schön dass Du meine Tochter bist...</p>
              <p style={{ fontSize: '16px', color: '#534AB7', margin: 0, fontWeight: '500' }}>Wenn Du willst, du wirst es schaffen ❤️</p>
              <p style={{ fontSize: '12px', color: '#ccc', marginTop: '1.5rem' }}>— Dein Vater</p>
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px', textAlign: 'center', paddingBottom: '30px' }}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px', fontWeight: '600' }}>
          🗣️ Deine Meinung zählt!
        </p>
        <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: '#fff',
        border: '1px solid #e5e3f0',
        borderRadius: '14px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        padding: '10px 14px',
        maxWidth: 'min(90vw, 380px)',
      }}>
          <FeedbackButton
            questionId="ALLGEMEIN_STARTSEITE"
            label="💬 Sag's uns"
            placeholder="Was ist gut? Was nervt? Was fehlt? Raus damit 🙂"
          />
        </div>
      </div>

      </div>
    </main>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [subject, setSubject] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showLinks, setShowLinks] = useState(false);
  const { solved, markSolved, clearSolved } = useSolved();
  const { dark, toggleDark } = useDarkMode();
  const { streak, bumpStreak } = useStreak();
  const { pruefungsDatum, saveDatum, daysLeft, aufgabenProTag } = useLernplan();
  const [konfetti, setKonfetti] = useState(false);

  const handleSolved = useCallback((id) => { markSolved(id); bumpStreak(); }, [markSolved, bumpStreak]);

 const dm = {
  bg:      'var(--bg)',
  bg2:     'var(--bg2)',
  bg3:     'var(--bg3)',
  text:    'var(--text)',
  text2:   'var(--text2)',
  border:  'var(--border)',
};

  if (showLinks) return <LinksPage onBack={() => setShowLinks(false)} />;
  if (!subject) return <LandingPage onSelect={s => { if (s === 'links') { setShowLinks(true); return; } setSubject(s); setSelectedId(null); }} streak={streak} />;

  const selectedQuestion = questions.find(q => q.id === selectedId) || null;
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Nunito', 'Segoe UI', sans-serif", background: dm.bg, color: dm.text }}>
      {konfetti && <Konfetti onDone={() => setKonfetti(false)} />}
      <Sidebar subject={subject} selectedId={selectedId} onSelect={setSelectedId} onBack={() => { setSubject(null); setSelectedId(null); }} solved={solved} clearSolved={clearSolved} dark={dark} toggleDark={toggleDark} streak={streak} dm={dm} />
      <QuestionDisplay question={selectedQuestion} subject={subject} onSolved={handleSolved} solved={solved} dark={dark} dm={dm} onKonfetti={() => setKonfetti(true)} buildTree={buildTree} />
    </div>
  );
}