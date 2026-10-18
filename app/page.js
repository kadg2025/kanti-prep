'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { questions } from './lib/questions';
import { facts } from './lib/facts';
import { pruefungenModusA, pruefungenModusB } from './lib/gms3/mathe_otr/pruefung';
import LinksPage from './LinksPage';
import FeedbackButton from './components/FeedbackButton';

// ─── MOBILE DETECTION ─────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

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

// ─── FARB-PALETTE (Light / Dark) ──────────────────────────────────────────
// Eine einzige Quelle der Wahrheit für alle Farben. Jede Komponente bekommt
// dieses `dm`-Objekt und benutzt NUR diese Werte – nie mehr harte Farben.
function makePalette(dark) {
  return dark ? {
    bg:       '#0f1020',  // Haupt-Hintergrund (Fragen-Teil)
    bg2:      '#16172b',  // Sidebar
    bg3:      '#22243f',  // leicht erhöhte Flächen
    card:     '#1b1d33',  // Karten / Boxen
    text:     '#e9e9f2',  // Haupttext
    text2:    '#a9abc4',  // Sekundärtext
    text3:    '#7a7d99',  // gedämpfter Text
    border:   '#2c2e4a',  // Rahmen
    hover:    '#262844',  // Hover-Flächen
    accentBg: '#2b2658',  // ausgewählt (lila getönt)
    okBg:     '#13291d',  // grüne Box Hintergrund
    okBorder: '#1f5036',  // grüne Box Rahmen
    okText:   '#86efac',  // grüne Box Text
    okTint:   '#15241b',  // gelöst-Markierung (sehr dezent grün)
  } : {
    bg:       '#ffffff',
    bg2:      '#f8f7ff',
    bg3:      '#f0eeff',
    card:     '#f9f8ff',
    text:     '#1a1a2e',
    text2:    '#555555',
    text3:    '#999999',
    border:   '#e5e3f0',
    hover:    '#f0eeff',
    accentBg: '#ede9fc',
    okBg:     '#f0fdf4',
    okBorder: '#86efac',
    okText:   '#166534',
    okTint:   '#f0fdf4',
  };
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

// ─── FEHLER-KISTE (localStorage) ──────────────────────────────────────────
// Sammelt IDs falsch beantworteter Aufgaben für die Fehler-Kiste (gezieltes
// Wiederholen). Fliegt eine Aufgabe nur raus, wenn sie beim allerersten
// Versuch richtig gelöst wird (siehe markCorrect in QuestionDisplay) —
// erst falsch, dann richtig tippen bleibt bewusst in der Kiste.
function useFehlerKiste() {
  const [fehler, setFehler] = useState([]);
  useEffect(() => {
    try { setFehler(JSON.parse(localStorage.getItem('kp_fehler') || '[]')); } catch {}
  }, []);
  const addFehler = useCallback((id) => {
    setFehler(prev => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      try { localStorage.setItem('kp_fehler', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);
  const removeFehler = useCallback((id) => {
    setFehler(prev => {
      if (!prev.includes(id)) return prev;
      const next = prev.filter(x => x !== id);
      try { localStorage.setItem('kp_fehler', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);
  const clearFehler = useCallback(() => {
    setFehler([]);
    try { localStorage.removeItem('kp_fehler'); } catch {}
  }, []);
  return { fehler, addFehler, removeFehler, clearFehler };
}

// ─── HEUTE ÜBEN ────────────────────────────────────────────────────────────
// Deterministischer Zufallsgenerator, mit dem Datum als Seed, damit der
// 5er-Mix den ganzen Tag über gleich bleibt (auch nach Reload — zusätzlich
// in kp_heute gecached).
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (Math.imul(31, h) + s.charCodeAt(i)) | 0; }
  return h;
}
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function addDays(dateStr, n) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
const WDH_STAGES = [1, 3, 7, 21]; // Tage: falsch → Stufe 0 (morgen), richtig → eine Stufe weiter

// Gruppiert zusammengehörige Teilaufgaben (z.B. KERZE_4a/4b/4d/4e) zu einer
// "ganzen Aufgabe" — IDs, die sich nur im letzten Kleinbuchstaben
// unterscheiden (…_4a, …_4b, …), teilen denselben Gruppenschlüssel.
function groupKeyOf(id) {
  return id.replace(/[a-z]$/, '');
}
function needsFigureButMissing(q) {
  const text = q.questionText || '';
  const mentionsFigure = /massstabsgetreu|siehe (Figur|Abbildung|Zeichnung|Skizze)|nebenstehend|abgebildet|Abbildung|Netz|Würfelbild/i.test(text);
  return mentionsFigure && !q.figureUrl;
}
// Baut "ganze Aufgaben" (Gruppen) aus dem flachen Fragen-Pool — für "Heute
// üben" zählt eine Gruppe als EIN Slot, nie eine einzelne Teilaufgabe.
function buildAufgabenGruppen(pool) {
  const usable = pool.filter(q => !needsFigureButMissing(q));
  const byKey = {};
  usable.forEach(q => { (byKey[groupKeyOf(q.id)] = byKey[groupKeyOf(q.id)] || []).push(q); });
  return Object.entries(byKey).map(([groupKey, items]) => ({
    groupKey,
    topic: items[0].topic,
    year: items[0].year,
    items,
    verified: items.every(q => q.verified),
    textLength: items.reduce((s, q) => s + q.questionText.length, 0),
  }));
}

// Wählt die 5 Aufgaben für "Heute üben" nach dem Nacht-Auftrag-Rezept:
// 1 leicht zum Einstieg, 1 aus der Fehler-Kiste, 1 aus dem schwächsten Thema
// (Annäherung: Thema mit den meisten aktuellen Fehler-Kiste-Einträgen, da wir
// keine Trefferquote pro Thema speichern), 1 nie gesehene, 1 fällige
// Wiederholung — kein Thema doppelt, letzte Aufgabe eher leicht.
// Wählt 5 GANZE Aufgaben (Gruppen, siehe buildAufgabenGruppen) — nie
// einzelne Teilaufgaben. Eine Gruppe gilt als "gelöst", wenn ALLE ihre
// Teile gelöst sind; als "in der Fehler-Kiste", wenn MINDESTENS ein Teil
// dort steht.
function pickHeuteUeben({ pool, solved, fehler, wdh, date }) {
  const gruppen = buildAufgabenGruppen(pool);
  const rnd = mulberry32(hashStr(date) >>> 0);
  const topicFreq = {};
  gruppen.forEach(g => { topicFreq[g.topic] = (topicFreq[g.topic] || 0) + 1; });
  const weightedPick = (arr) => {
    if (arr.length === 0) return null;
    const total = arr.reduce((s, g) => s + (topicFreq[g.topic] || 1), 0);
    let r = rnd() * total;
    for (const g of arr) { r -= (topicFreq[g.topic] || 1); if (r <= 0) return g; }
    return arr[arr.length - 1];
  };
  const used = new Set();
  const result = [];
  const byTopicFree = (arr) => arr.filter(g => !used.has(g.topic));
  const take = (g) => { if (g) { used.add(g.topic); result.push(g); } return g; };
  const preferVerified = (arr) => {
    const verified = arr.filter(g => g.verified);
    return verified.length > 0 ? verified : arr;
  };

  const everSolvedG = gruppen.filter(g => g.items.every(q => solved.has(q.id)));
  const everSeen = new Set([...solved, ...fehler]);
  const fehlerG = gruppen.filter(g => g.items.some(q => fehler.includes(q.id)));

  // Ohne jeden Verlauf: 5 verschiedene Themen, eher leicht (kurzer Text zuerst), geprüfte zuerst.
  if (everSolvedG.length === 0 && fehlerG.length === 0) {
    const sorted = [...gruppen].sort((a, b) => {
      if (!!b.verified !== !!a.verified) return (b.verified ? 1 : 0) - (a.verified ? 1 : 0);
      return a.textLength - b.textLength;
    });
    for (const g of sorted) {
      if (result.length >= 5) break;
      if (!used.has(g.topic)) take(g);
    }
    return result;
  }

  // 1) Leicht zum Einstieg: bevorzugt schon Gelöstes (vertraut = fühlt sich leicht an).
  take(weightedPick(preferVerified(byTopicFree(everSolvedG))) || weightedPick(preferVerified(byTopicFree(gruppen))));

  // 2) Aus der Fehler-Kiste.
  take(weightedPick(preferVerified(byTopicFree(fehlerG))) || weightedPick(preferVerified(byTopicFree(gruppen.filter(g => !g.items.some(q => everSeen.has(q.id)))))));

  // 3) Schwächstes Thema (die meisten offenen Fehler-Kiste-Einträge).
  const topicWrongCount = {};
  fehler.forEach(id => { const q = pool.find(x => x.id === id); if (q) topicWrongCount[q.topic] = (topicWrongCount[q.topic] || 0) + 1; });
  const weakTopics = Object.keys(topicWrongCount).filter(t => !used.has(t)).sort((a, b) => topicWrongCount[b] - topicWrongCount[a]);
  if (weakTopics.length > 0) {
    take(weightedPick(gruppen.filter(g => g.topic === weakTopics[0])));
  } else {
    take(weightedPick(preferVerified(byTopicFree(gruppen))));
  }

  // 4) Brandneu, nie gesehen.
  const neverSeen = byTopicFree(gruppen.filter(g => !g.items.some(q => everSeen.has(q.id))));
  take(weightedPick(preferVerified(neverSeen)) || weightedPick(preferVerified(byTopicFree(gruppen))));

  // 5) Fällige Wiederholung, sonst irgendeine gelöste — eher leicht (kurzer Text zuerst), geprüfte zuerst.
  const due = byTopicFree(everSolvedG).filter(g => g.items.every(q => !wdh[q.id] || wdh[q.id].due <= date));
  const dueSorted = [...preferVerified(due)].sort((a, b) => a.textLength - b.textLength);
  take(dueSorted[0] || weightedPick(preferVerified(byTopicFree(everSolvedG))) || weightedPick(preferVerified(byTopicFree(gruppen))));

  return result.filter(Boolean).slice(0, 5);
}

function useHeuteUeben(matheOhneTRPool, solved, fehler) {
  const [wdh, setWdh] = useState({});
  const [heute, setHeute] = useState(null); // { date, idGroups: string[][] }
  useEffect(() => {
    try { setWdh(JSON.parse(localStorage.getItem('kp_wdh') || '{}')); } catch {}
    try {
      const cached = JSON.parse(localStorage.getItem('kp_heute') || 'null');
      if (cached && cached.date === todayStr() && Array.isArray(cached.idGroups)) setHeute(cached);
    } catch {}
  }, []);

  // Gibt 5 Gruppen von IDs zurück (eine ganze Aufgabe pro Gruppe).
  const ensureToday = useCallback(() => {
    const date = todayStr();
    if (heute && heute.date === date) return heute.idGroups;
    const picked = pickHeuteUeben({ pool: matheOhneTRPool, solved, fehler, wdh, date });
    const idGroups = picked.map(g => g.items.map(q => q.id));
    const next = { date, idGroups };
    setHeute(next);
    try { localStorage.setItem('kp_heute', JSON.stringify(next)); } catch {}
    return idGroups;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heute]);

  const recordOutcome = useCallback((id, wasWrong) => {
    setWdh(prev => {
      const date = todayStr();
      const entry = prev[id];
      let next;
      if (wasWrong) {
        next = { stage: 0, due: addDays(date, WDH_STAGES[0]) };
      } else {
        const stage = entry ? Math.min(entry.stage + 1, WDH_STAGES.length - 1) : 1;
        next = { stage, due: addDays(date, WDH_STAGES[stage]) };
      }
      const merged = { ...prev, [id]: next };
      try { localStorage.setItem('kp_wdh', JSON.stringify(merged)); } catch {}
      return merged;
    });
  }, []);

  return { ensureToday, recordOutcome, wdh };
}

// Fisher-Yates — mischt die Multiple-Choice-Antworten, damit die richtige
// nicht immer an derselben Stelle steht.
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

// Hochgeladene Lofi-Videos (KEINE Live-Streams – die lassen sich nicht einbetten).
// Alle IDs geprüft. Falls eins regional gesperrt ist, einfach auf das nächste tippen.
const lofiStreams = [
  { label: '🌙 1 A.M', id: 'lTRiuFIWV54' },
  { label: '🌃 2 A.M', id: 'wAPCSnAhhC8' },
  { label: '🌌 3 A.M', id: 'BTYAsjAVa3I' },
  { label: '☕ 12 A.M', id: 'l98w9OSKVNA' },
  { label: '🎹 Synthwave', id: '3y2CC5LIoxQ' },
  { label: '✨ Best of', id: 'n61ULEU7CO0' },
];

const personas = {
  einstein: { name: 'Albert Einstein', emoji: '🧑‍🔬', system: 'Du bist Albert Einstein. Sprich Deutsch, sei freundlich, witzig und ermutigend. Liebe Mathe und Physik. Kurze Antworten (max 3 Sätze). Verwende manchmal deine echten Zitate.' },
  duden: { name: 'Der Duden', emoji: '📚', system: 'Du bist der personifizierte Duden. Sprich korrekt aber humorvoll. Liebe die deutsche Sprache. Max 3 Sätze.' },
  kanti: { name: 'Kanti-Schüler Luca', emoji: '🎓', system: 'Du bist Luca, 16 Jahre alt, Kanti-Schüler in Frauenfeld. Sprich locker auf Deutsch, sei ehrlich und motivierend. Max 3 Sätze.' },
  yoda: { name: 'Meister Yoda', emoji: '🟢', system: 'Du bist Yoda auf Deutsch. Sprich in Yoda-Sprache (Verb ans Ende). Max 2 Sätze. Beispiel: "Stark ist die Macht des Lernens. Üben du musst."' },
};

function PauseModal({ onClose, dm = makePalette(false) }) {
  const isMobile = useIsMobile();
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
    let cleanupDino;
    if (screen === 'dino') cleanupDino = startDino();
    else stopDino();
    return () => { if (cleanupDino) cleanupDino(); stopDino(); };
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
  const backBtn = { width: '100%', padding: '10px', background: dm.bg3, border: `1px solid ${dm.border}`, borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: dm.text2 };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: dm.bg2, borderRadius: '16px', border: `1px solid ${dm.border}`, padding: '1.5rem', width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '16px', fontWeight: '700', margin: 0, color: dm.text }}>
            {screen === 'choice' ? 'Pause verdient! 🎉' : screen === 'dino' ? '🦕 Dino Game' : screen === 'meme' ? '😂 Meme' : screen === 'music' ? '🎧 Musik' : '🧑‍🔬 Chat'}
          </p>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: dm.text3 }}>✕</button>
        </div>
        {screen === 'choice' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px', marginBottom: '1rem' }}>
              {[{ key: 'dino', emoji: '🦕', label: 'Dino Game', sub: 'Kaktus & Vögel' }, { key: 'meme', emoji: '😂', label: 'Meme', sub: 'Lachen ist Medizin' }, { key: 'einstein', emoji: '🧑‍🔬', label: 'Chat', sub: 'Einstein · Yoda · mehr' }].map(opt => (
                <button key={opt.key} onClick={() => setScreen(opt.key)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '1.25rem 0.5rem', background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '12px', cursor: 'pointer' }}>
                  <span style={{ fontSize: '32px' }}>{opt.emoji}</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: dm.text }}>{opt.label}</span>
                  <span style={{ fontSize: '11px', color: dm.text3 }}>{opt.sub}</span>
                </button>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: dm.text3, textAlign: 'center', margin: 0 }}>5 Minuten — dann zurück zum Lernen 💪</p>
          </div>
        )}
        {screen === 'dino' && (
          <div>
            <div style={{ background: '#111', borderRadius: '12px', padding: '1rem', marginBottom: '1rem' }}>
              <canvas ref={canvasRef} width={460} height={140} style={{ width: '100%', display: 'block', borderRadius: '4px', cursor: 'pointer' }} />
            </div>
            <p style={{ fontSize: '12px', color: dm.text3, textAlign: 'center', margin: '0 0 1rem' }}>Klicken oder Leertaste zum Springen</p>
            <button onClick={() => setScreen('choice')} style={backBtn}>← Zurück</button>
          </div>
        )}
        {screen === 'meme' && (
          <div>
            <div style={{ background: dm.card, borderRadius: '12px', padding: '1.5rem', textAlign: 'center', marginBottom: '1rem', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: `1px solid ${dm.border}` }}>
              <div style={{ fontSize: '52px', marginBottom: '0.75rem' }}>{memes[memeIdx].emoji}</div>
              <p style={{ fontSize: '14px', color: dm.text2, margin: '0 0 0.25rem' }}>{memes[memeIdx].top}</p>
              <p style={{ fontSize: '18px', fontWeight: '700', color: dm.text, margin: '0 0 0.75rem' }}>{memes[memeIdx].bottom}</p>
              <p style={{ fontSize: '12px', color: dm.text3, margin: 0, fontStyle: 'italic' }}>{memes[memeIdx].sub}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setMemeIdx(i => (i + 1) % memes.length)} style={{ ...backBtn, flex: 1, width: 'auto' }}>🔄 Nächstes</button>
              <button onClick={() => setScreen('choice')} style={{ ...backBtn, flex: 1, width: 'auto' }}>← Zurück</button>
            </div>
          </div>
        )}
        {screen === 'einstein' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', padding: '0.75rem', background: dm.card, borderRadius: '10px', border: `1px solid ${dm.border}` }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{personas[personaKey].emoji}</div>
              <div style={{ flex: 1 }}><p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: dm.text }}>{personas[personaKey].name}</p></div>
              <select value={personaKey} onChange={e => setPersonaKey(e.target.value)} style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '8px', border: `1px solid ${dm.border}`, background: dm.bg2, color: dm.text, cursor: 'pointer' }}>
                <option value="einstein">Einstein 🧑‍🔬</option>
                <option value="duden">Duden 📚</option>
                <option value="kanti">Luca 🎓</option>
                <option value="yoda">Yoda 🟢</option>
              </select>
            </div>
            <div style={{ height: '180px', overflowY: 'auto', background: dm.card, borderRadius: '10px', padding: '0.75rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '8px', border: `1px solid ${dm.border}` }}>
              {chatMessages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: msg.role === 'user' ? '#0f766e' : color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>{msg.role === 'user' ? '👤' : personas[personaKey].emoji}</div>
                  <div style={{ maxWidth: '80%', padding: '8px 12px', borderRadius: '12px', fontSize: '13px', lineHeight: '1.6', background: msg.role === 'user' ? '#0f766e' : dm.bg2, color: msg.role === 'user' ? '#fff' : dm.text, border: msg.role === 'user' ? 'none' : `1px solid ${dm.border}` }}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat()} placeholder="Stell eine Frage..." style={{ flex: 1, padding: '8px 12px', fontSize: '13px', borderRadius: '8px', border: `1px solid ${dm.border}`, background: dm.bg2, color: dm.text }} />
              <button onClick={sendChat} disabled={isLoading} style={{ padding: '8px 16px', background: color, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', cursor: 'pointer' }}>{isLoading ? '...' : '→'}</button>
            </div>
            <button onClick={() => setScreen('choice')} style={backBtn}>← Zurück</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────
function Sidebar({ subject, selectedId, onSelect, onBack, solved = new Set(), clearSolved, dark = false, toggleDark = () => {}, streak = 0, dm = makePalette(false), mobile = false, onClose = () => {}, onShowFehlerKiste = () => {}, fehlerCount = 0, onShowHeuteUeben = () => {}, onShowPruefung = () => {} }) {
  const tree = buildTree(subject);
  const [openGroups, setOpenGroups] = useState(() => { const s = {}; Object.keys(tree).forEach(g => { s[g] = true; }); return s; });
  const [openTopics, setOpenTopics] = useState({});
  const [showPause, setShowPause] = useState(false);
  function toggleGroup(g) { setOpenGroups(p => ({ ...p, [g]: !p[g] })); }
  function toggleTopic(key) { setOpenTopics(p => ({ ...p, [key]: !p[key] })); }
  function isTopicOpen(g, t) { const key = g + '||' + t; return key in openTopics ? openTopics[key] : false; }

  const subjectColors = { 'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e', 'Deutsch': '#b45309', 'Deutsch GMS2': '#b45309', 'Mathe Neu': '#534AB7', 'Deutsch Neu': '#b45309' };
  const color = subjectColors[subject] || '#534AB7';
  const subjectEmojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝', 'Deutsch GMS2': '📝', 'Mathe Neu': '✨', 'Deutsch Neu': '✨' };

  const totalCount = questions.filter(q => {
    if (subject === 'Mathe ohne TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR');
    if (subject === 'Mathe mit TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR');
    if (subject === 'Deutsch') return q.subject === 'Deutsch' && (q.id.startsWith('D3_') || q.id.startsWith('D_'));
    if (subject === 'Deutsch GMS2') return q.subject === 'Deutsch' && q.id.startsWith('D2_');
    return false;
  }).length;

  const gmsLabel = subject.includes('GMS2') ? 'GMS 2' : 'GMS 3';

  return (
    <aside style={{ width: mobile ? '100%' : '270px', minWidth: mobile ? '0' : '270px', background: dm.bg2, borderRight: `1px solid ${dm.border}`, display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto', color: dm.text }}>
      {showPause && <PauseModal onClose={() => setShowPause(false)} dm={dm} />}
      <div style={{ padding: '12px 16px', borderBottom: `1px solid ${dm.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {streak > 0 && <span style={{ background: '#f97316', color: '#fff', borderRadius: '20px', padding: '2px 10px', fontSize: '12px', fontWeight: '700' }}>🔥 {streak}</span>}
            {streak >= 3 && <span style={{ fontSize: '11px', color: '#f97316', fontWeight: '600' }}>Streak!</span>}
          </div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <button onClick={toggleDark} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', padding: '4px' }}>{dark ? '☀️' : '🌙'}</button>
            {mobile && <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', padding: '4px', color: dm.text3 }}>✕</button>}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px' }}>
            {subjectEmojis[subject]}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: dm.text }}>{subject}</p>
            <p style={{ margin: 0, fontSize: '11px', color: dm.text3 }}>{totalCount} Aufgaben · {gmsLabel}</p>
          </div>
        </div>
      </div>
      {/* Progress Bar */}
      {(() => {
        const subjectQids = new Set(Object.values(buildTree(subject)).flatMap(topics => Object.values(topics).flatMap(items => items.map(q => q.id))));
        const total = subjectQids.size;
        const solvedCount = [...solved].filter(id => subjectQids.has(id)).length;
        const pct = total > 0 ? Math.round((solvedCount / total) * 100) : 0;
        return (
          <div style={{ padding: '10px 16px', borderBottom: `1px solid ${dm.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '11px', color: dm.text3 }}>Fortschritt</span>
              <span style={{ fontSize: '11px', color: color, fontWeight: '600' }}>{solvedCount}/{total} ✓</span>
            </div>
            <div style={{ height: '6px', background: dm.bg3, borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: '3px', transition: 'width 0.4s ease' }} />
            </div>
          </div>
        );
      })()}
      {subject === 'Mathe ohne TR' && (
        <div style={{ display: 'flex', gap: '8px', padding: '10px 16px', borderBottom: `1px solid ${dm.border}` }}>
          <button onClick={onShowHeuteUeben} style={{ flex: 1, padding: '10px 8px', background: 'linear-gradient(135deg, #534AB7 0%, #7c6ee0 100%)', border: 'none', borderRadius: '10px', cursor: 'pointer', color: '#fff', textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: '700' }}>🎯 Heute üben</span>
            <span style={{ display: 'block', fontSize: '10px', opacity: 0.85 }}>5 Aufgaben</span>
          </button>
          <button onClick={onShowPruefung} style={{ flex: 1, padding: '10px 8px', background: 'none', border: `2px solid ${color}`, borderRadius: '10px', cursor: 'pointer', color: color, textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: '700' }}>📝 Probeprüfung</span>
            <span style={{ display: 'block', fontSize: '10px', opacity: 0.85 }}>45 Min</span>
          </button>
        </div>
      )}
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
                  <button onClick={() => toggleTopic(topicKey)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 8px 28px', background: 'none', border: 'none', cursor: 'pointer', color: dm.text2, fontSize: '13px', fontWeight: '600' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '12px', opacity: 0.5 }}>{open ? '▾' : '▸'}</span>{topicName}
                    </span>
                    <span style={{ fontSize: '10px', background: dm.bg3, color: color, borderRadius: '10px', padding: '1px 7px', fontWeight: '700' }}>{items.length}</span>
                  </button>
                  {open && (
                    <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 6px 0' }}>
                      {items.sort((a, b) => b.year - a.year).map(q => (
                        <li key={q.id}>
                          <button onClick={() => onSelect(q.id)} style={{ width: '100%', textAlign: 'left', padding: '8px 16px 8px 40px', background: selectedId === q.id ? dm.accentBg : solved.has(q.id) ? dm.okTint : 'none', border: 'none', borderLeft: selectedId === q.id ? `3px solid ${color}` : solved.has(q.id) ? '3px solid #22c55e' : '3px solid transparent', cursor: 'pointer', color: selectedId === q.id ? color : dm.text2, fontSize: '13px', lineHeight: '1.4', transition: 'all 0.12s', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                            onMouseEnter={e => { if (selectedId !== q.id) e.currentTarget.style.background = dm.hover; }}
                            onMouseLeave={e => { if (selectedId !== q.id) e.currentTarget.style.background = solved.has(q.id) ? dm.okTint : 'none'; }}
                          >
                            <span style={{ display: 'block', fontSize: '11px', color: dm.text3, marginBottom: '1px' }}>{q.year}</span>
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
      <div style={{ padding: '14px 16px', borderTop: `1px solid ${dm.border}` }}>
        <button onClick={() => setShowPause(true)} style={{ width: '100%', padding: '10px', background: 'linear-gradient(135deg, #534AB7, #0f766e)', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>☕ Pause machen</button>
        <button onClick={onShowFehlerKiste} style={{ width: '100%', padding: '9px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text2, fontSize: '13px', marginBottom: '6px' }}>📦 Fehler-Kiste{fehlerCount > 0 ? ` (${fehlerCount})` : ''}</button>
        <button onClick={onBack} style={{ width: '100%', padding: '9px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text2, fontSize: '13px', marginBottom: '6px' }}>← Zurück zur Übersicht</button>
        <button onClick={() => { if (confirm('Fortschritt zurücksetzen?')) clearSolved(); }} style={{ width: '100%', padding: '7px', background: 'none', border: '1px solid #fca5a5', borderRadius: '8px', cursor: 'pointer', color: '#ef4444', fontSize: '12px' }}>🗑️ Fortschritt zurücksetzen</button>
      </div>
    </aside>
  );
}

// ─── ÜBUNGSLEITER (Practice Ladder) ───────────────────────────────────────
// Statische, selbst geschriebene Übungsaufgaben pro Frage – gestuft von
// einfach bis Kanti-Niveau. Die Lösung wird NICHT gezeigt: das Kind tippt die
// Antwort in eine Box (grün = richtig, rot = falsch) und kann einen Tipp öffnen.
// Datenformat am Frage-Objekt:
//   practice: [ { level: 'einfach'|'mittel'|'schwer'|'kanti', q: '...', answer: '...', tip: '...' }, ... ]
const PRACTICE_LEVELS = [
  { key: 'einfach', label: 'Einfach — Grundkonzept', color: '#22c55e' },
  { key: 'mittel',  label: 'Mittel',                 color: '#3b82f6' },
  { key: 'schwer',  label: 'Schwer',                 color: '#f59e0b' },
  { key: 'kanti',   label: 'Kanti-Niveau',           color: '#ef4444' },
];

// Antwort normalisieren: Leerzeichen weg, alle Minus-Varianten (–, —, −) → -, Komma → Punkt
function normAnswer(s) {
  return String(s ?? '').trim().replace(/\s+/g, '').replace(/[–—−]/g, '-').replace(',', '.').toLowerCase();
}
// Lineare Terme (z.B. 4a-5b+3) in einen Vergleichs-Schlüssel umwandeln, damit die
// Reihenfolge egal ist: "2b-2a" zählt gleich wie "-2a+2b". Gibt null zurück, wenn
// es kein einfacher Term ist (dann wird Text direkt verglichen).
function termKey(s) {
  const t = normAnswer(s);
  if (t === '' || !/^[-+]?[0-9a-z.]+([-+][0-9a-z.]+)*$/.test(t)) return null;
  const parts = t.match(/[+-]?[^+-]+/g);
  if (!parts) return null;
  const map = {};
  for (let raw of parts) {
    let sign = 1, p = raw;
    if (p[0] === '+') p = p.slice(1);
    else if (p[0] === '-') { sign = -1; p = p.slice(1); }
    const m = p.match(/^([0-9]*\.?[0-9]*)([a-z]*)$/);
    if (!m) return null;
    let coeff = m[1] === '' ? 1 : parseFloat(m[1]);
    if (Number.isNaN(coeff)) return null;
    const v = m[2] || '_const';
    map[v] = (map[v] || 0) + sign * coeff;
  }
  const keys = Object.keys(map).filter((k) => Math.abs(map[k]) > 1e-9).sort();
  return keys.length ? keys.map((k) => `${map[k]}${k === '_const' ? '' : k}`).join('+') : '0';
}
function answerIsCorrect(input, answer) {
  const a = normAnswer(input), b = normAnswer(answer);
  if (a === '') return false;
  const na = Number(a), nb = Number(b);
  if (a !== '' && b !== '' && !Number.isNaN(na) && !Number.isNaN(nb)) return na === nb; // reine Zahlen
  const ka = termKey(input), kb = termKey(answer);
  if (ka !== null && kb !== null) return ka === kb; // Terme (Reihenfolge egal)
  return a === b; // sonst exakter Text
}

function PracticeLadder({ practice, dm, dark }) {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState({}); // i -> 'correct' | 'wrong' | undefined
  const [tips, setTips] = useState({});
  if (!Array.isArray(practice) || practice.length === 0) return null;

  const setVal = (i, v) => { setInputs((p) => ({ ...p, [i]: v })); setStatus((s) => ({ ...s, [i]: undefined })); };
  const check = (i, ans) => setStatus((s) => ({ ...s, [i]: answerIsCorrect(inputs[i], ans) ? 'correct' : 'wrong' }));

  return (
    <div style={{ marginTop: '32px' }}>
      <button onClick={() => setOpen((o) => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: open ? dm.bg3 : 'linear-gradient(135deg, #534AB7, #0f766e)', color: open ? dm.text : '#fff', border: open ? `1px solid ${dm.border}` : 'none', borderRadius: '12px', fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>
        <span>🎯 {practice.length} Übungsaufgaben — selbst lösen, Antwort prüfen</span>
        <span style={{ fontSize: '12px' }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div style={{ marginTop: '8px' }}>
          {PRACTICE_LEVELS.map((lvl) => {
            const items = practice.map((p, i) => ({ ...p, i })).filter((p) => (p.level || 'mittel') === lvl.key);
            if (items.length === 0) return null;
            return (
              <div key={lvl.key} style={{ marginTop: '18px' }}>
                <div style={{ display: 'inline-block', background: lvl.color, color: '#fff', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '3px 12px', borderRadius: '20px', marginBottom: '10px' }}>{lvl.label}</div>
                {items.map((p, n) => {
                  const st = status[p.i];
                  const borderCol = st === 'correct' ? '#22c55e' : st === 'wrong' ? '#ef4444' : dm.border;
                  return (
                    <div key={p.i} style={{ background: dm.card, border: `1px solid ${dm.border}`, borderLeft: `3px solid ${lvl.color}`, borderRadius: '10px', padding: '12px 16px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: lvl.color, fontWeight: '700', fontSize: '14px', minWidth: '20px' }}>{n + 1}.</span>
                        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: dm.text, whiteSpace: 'pre-wrap', flex: 1 }}>{p.q}</p>
                      </div>
                      <div style={{ marginLeft: '30px', marginTop: '10px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <input
                          value={inputs[p.i] || ''}
                          onChange={(e) => setVal(p.i, e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && check(p.i, p.answer)}
                          placeholder="Antwort…"
                          style={{ width: '130px', padding: '8px 10px', borderRadius: '8px', border: `2px solid ${borderCol}`, background: dm.bg2, color: dm.text, fontSize: '14px', outline: 'none' }}
                        />
                        <button onClick={() => check(p.i, p.answer)} style={{ padding: '8px 16px', background: lvl.color, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Prüfen</button>
                        {p.tip && <button onClick={() => setTips((t) => ({ ...t, [p.i]: !t[p.i] }))} style={{ padding: '8px 12px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: dm.text2, cursor: 'pointer' }}>💡 Tipp</button>}
                        {st === 'correct' && <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '13px' }}>✓ Richtig! 🎉</span>}
                        {st === 'wrong' && <span style={{ color: '#ef4444', fontWeight: '600', fontSize: '13px' }}>✗ Nochmal versuchen</span>}
                      </div>
                      {tips[p.i] && p.tip && (
                        <div style={{ marginLeft: '30px', marginTop: '8px', padding: '10px 14px', background: dark ? '#2a2719' : '#fef9c3', border: `1px solid ${dark ? '#5a4d1a' : '#fde047'}`, borderRadius: '8px', fontSize: '13px', color: dark ? '#d4b85a' : '#854d0e', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>💡 {p.tip}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── QUESTION DISPLAY ─────────────────────────────────────────────────────
function QuestionDisplay({ question, subject, onSolved = () => {}, onFehler = () => {}, onRemoveFehler = () => {}, solved = new Set(), dark = false, dm = makePalette(false), onKonfetti = () => {}, buildTree: bt }) {
  const isMobile = useIsMobile();
  const [showSolution, setShowSolution] = useState(false);
  const [solutionViewed, setSolutionViewed] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [prevId, setPrevId] = useState(null);
  // Erst versuchen, dann Lösung: Multiple-Choice-Zustand pro Aufgabe.
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [wrongOpts, setWrongOpts] = useState(() => new Set());
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  // War die (einzige) richtige Antwort der allererste Versuch? Nur dann
  // zählt die Aufgabe als "gelöst" — durchprobieren bringt kein Häkchen.
  const [firstTry, setFirstTry] = useState(false);
  const shuffledOptions = useMemo(() => {
    if (!question || !Array.isArray(question.options)) return [];
    return shuffleArray(question.options);
  }, [question?.id]);
  const hasTeile = !!question && Array.isArray(question.teile) && question.teile.length > 0;
  const shuffledTeile = useMemo(() => {
    if (!question || !Array.isArray(question.teile)) return [];
    return question.teile.map(teil => ({ letter: teil.letter, options: shuffleArray(teil.options) }));
  }, [question?.id]);
  // Teilaufgaben nacheinander: eigener Fortschritt pro Teil, "auf Anhieb
  // gelöst" gilt nur, wenn JEDER Teil beim allerersten Tippen richtig war.
  const [teilIdx, setTeilIdx] = useState(0);
  const [teilAnswered, setTeilAnswered] = useState([]);
  const [teilWrongOptsArr, setTeilWrongOptsArr] = useState([]);
  const [teilFirstTryOverall, setTeilFirstTryOverall] = useState(true);
  if (question && question.id !== prevId) {
    setShowSolution(false);
    setSolutionViewed(false);
    setPrevId(question.id);
    setWrongOpts(new Set());
    const already = solved.has(question.id);
    setAnswered(already);
    setIsCorrect(already);
    setFirstTry(already);
    setSelectedOpt(already ? shuffledOptions.find(o => o.correct) || null : null);
    if (hasTeile) {
      setTeilIdx(already ? shuffledTeile.length : 0);
      setTeilAnswered(shuffledTeile.map(() => already));
      setTeilWrongOptsArr(shuffledTeile.map(() => new Set()));
      setTeilFirstTryOverall(true);
    }
  }
  const subjectColors = { 'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e', 'Deutsch': '#b45309', 'Deutsch GMS2': '#b45309', 'Mathe Neu': '#534AB7', 'Deutsch Neu': '#b45309' };
  const color = subjectColors[subject] || '#534AB7';

  if (!question) {
    const emojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝', 'Deutsch GMS2': '📝' };
    const tips = { 'Mathe ohne TR': 'Kein Taschenrechner erlaubt – Kopfrechnen trainieren! 🧠', 'Mathe mit TR': 'Taschenrechner erlaubt – aber den Rechenweg aufzeigen! ✏️', 'Deutsch': 'Lies die Texte genau – Details sind entscheidend! 🔍', 'Deutsch GMS2': 'GMS2 Deutsch — Wortarten, Satzbau, Zeitformen! 🎯' };
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '64px 16px 40px' : '40px', background: dm.bg }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>{emojis[subject] || '📚'}</div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: dm.text, margin: '0 0 8px' }}>Bereit zum Üben? 💪</h2>
          <p style={{ color: dm.text3, margin: '0 0 20px', lineHeight: '1.6', fontSize: '15px' }}>{isMobile ? 'Tippe oben auf ☰ Aufgaben, um eine Aufgabe auszuwählen.' : 'Wähle links eine Aufgabe aus, um zu beginnen.'}</p>
          <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '12px', padding: '16px', fontSize: '14px', color: dm.text2 }}>💡 {tips[subject] || 'Viel Erfolg!'}</div>
        </div>
      </div>
    );
  }

  const s = question.solution;

  // Zählt die Aufgabe als gelöst (nur beim allerersten, richtigen Versuch)
  // + Streak + Konfetti + raus aus der Fehler-Kiste.
  function markCorrect() {
    if (!solved.has(question.id)) {
      onSolved(question.id);
      onRemoveFehler(question.id);
      if (bt) {
        const tree = bt(subject);
        const topicItems = tree[question.group]?.[question.topic] || [];
        const allSolved = topicItems.every(q => q.id === question.id || solved.has(q.id));
        if (allSolved && topicItems.length > 1) onKonfetti();
      }
    }
  }

  function handleTapOption(opt) {
    if (isCorrect || wrongOpts.has(opt)) return;
    setAnswered(true);
    setSelectedOpt(opt);
    if (opt.correct) {
      setIsCorrect(true);
      if (wrongOpts.size === 0) {
        // Erster Tap war schon richtig -> zählt als gelöst.
        setFirstTry(true);
        markCorrect();
      } else {
        // Erst falsch, dann richtig: Feedback ja, "gelöst" nein — bleibt in der Fehler-Kiste.
        setFirstTry(false);
      }
    } else {
      setWrongOpts(prev => new Set(prev).add(opt));
      onFehler(question.id);
    }
  }

  function handleTapTeil(i, opt) {
    if (teilAnswered[i] || teilWrongOptsArr[i]?.has(opt)) return;
    if (opt.correct) {
      setTeilAnswered(prev => { const next = [...prev]; next[i] = true; return next; });
      const nextIdx = i + 1;
      setTeilIdx(nextIdx);
      if (nextIdx >= shuffledTeile.length && teilFirstTryOverall) {
        markCorrect();
      }
    } else {
      setTeilWrongOptsArr(prev => { const next = [...prev]; next[i] = new Set(next[i]).add(opt); return next; });
      setTeilFirstTryOverall(false);
      onFehler(question.id);
    }
  }

  function handleIchHabsRichtig() {
    if (isCorrect || solutionViewed) return;
    setAnswered(true);
    setIsCorrect(true);
    setFirstTry(true);
    markCorrect();
  }

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '64px 16px 40px' : '40px', background: dm.bg }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {question.verified
            ? <span style={{ background: dark ? '#16291d' : '#dcfce7', color: dark ? '#86efac' : '#166534', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>✅ Lösung geprüft</span>
            : <span style={{ background: dark ? '#2a2719' : '#fef9c3', color: dark ? '#d4b85a' : '#854d0e', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>⏳ Lösung nicht geprüft</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '700', color: dm.text, margin: 0 }}>{question.topic}</h1>
          {question.pdfUrl && (
            <a href={question.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: dark ? '#3a2410' : '#fff7ed', border: `1px solid ${dark ? '#9a5a22' : '#fdba74'}`, borderRadius: '10px', fontSize: '13px', fontWeight: '600', color: dark ? '#fdba74' : '#c2410c', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              📄 Originale Prüfung
            </a>
          )}
          <button
            onClick={() => {
              try {
                const link = `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(question.id)}`;
                navigator.clipboard.writeText(link);
                setLinkCopied(true);
                setTimeout(() => setLinkCopied(false), 1800);
              } catch {}
            }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: linkCopied ? (dark ? '#16291d' : '#dcfce7') : dm.bg3, border: `1px solid ${linkCopied ? '#22c55e' : dm.border}`, borderRadius: '10px', fontSize: '13px', fontWeight: '600', color: linkCopied ? '#22c55e' : dm.text2, cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            {linkCopied ? '✓ Link kopiert!' : '🔗 Link teilen'}
          </button>
        </div>
        <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '12px', padding: isMobile ? '16px' : '22px', marginBottom: '16px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.8', color: dm.text, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }} dangerouslySetInnerHTML={{ __html: question.questionText.replace(/__(.*?)__/g, '<u>$1</u>') }} />
          {question.figureUrl && (
            <div style={{ marginTop: '16px' }}>
              <img src={question.figureUrl} alt={question.figureCaption || 'Figur zur Aufgabe'} style={{ maxWidth: '100%', borderRadius: '8px', border: `1px solid ${dm.border}`, background: '#fff' }} />
              {question.figureCaption && (
                <p style={{ margin: '6px 0 0', fontSize: '11px', color: dm.text2, fontStyle: 'italic' }}>{question.figureCaption}</p>
              )}
            </div>
          )}
        </div>
        {/* Erst versuchen: Multiple-Choice (falls vorhanden) oder Selbst-Check-Button */}
        <div style={{ marginBottom: '20px' }}>
          {hasTeile ? (
            <div>
              {shuffledTeile.slice(0, Math.min(teilIdx + 1, shuffledTeile.length)).map((teil, i) => {
                const wrongSet = teilWrongOptsArr[i] || new Set();
                const isDone = !!teilAnswered[i];
                return (
                  <div key={teil.letter} style={{ marginBottom: '18px' }}>
                    <p style={{ fontSize: '13px', fontWeight: '700', color: dm.text2, margin: '0 0 10px' }}>👉 Teilaufgabe {teil.letter}) — wähle die richtige Antwort:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {teil.options.map((opt, j) => {
                        const isWrongTap = wrongSet.has(opt);
                        const isRevealedCorrect = isDone && opt.correct;
                        const disabled = isDone || isWrongTap;
                        const bg = isRevealedCorrect ? dm.okTint : isWrongTap ? (dark ? '#2a1515' : '#fef2f2') : dm.card;
                        const border = isRevealedCorrect ? '#22c55e' : isWrongTap ? '#ef4444' : dm.border;
                        const textColor = isRevealedCorrect ? dm.okText : isWrongTap ? '#ef4444' : dm.text;
                        return (
                          <button
                            key={j}
                            onClick={() => handleTapTeil(i, opt)}
                            disabled={disabled}
                            style={{ textAlign: 'left', padding: '13px 16px', borderRadius: '10px', border: `2px solid ${border}`, background: bg, color: textColor, fontSize: '14px', lineHeight: '1.6', fontWeight: isRevealedCorrect ? '700' : '500', cursor: disabled ? 'default' : 'pointer', transition: 'all 0.15s', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}
                          >
                            {isRevealedCorrect ? '✓ ' : isWrongTap ? '❌ ' : ''}{opt.label}
                          </button>
                        );
                      })}
                    </div>
                    {isDone && <p style={{ color: '#22c55e', fontWeight: '700', fontSize: '14px', margin: '10px 0 0' }}>✓ Richtig!</p>}
                    {!isDone && wrongSet.size > 0 && <p style={{ color: '#ef4444', fontWeight: '600', fontSize: '13px', margin: '10px 0 0' }}>❌ Nochmal versuchen — die richtige Antwort ist noch dabei.</p>}
                  </div>
                );
              })}
              {teilIdx >= shuffledTeile.length && (
                <p style={{ color: '#22c55e', fontWeight: '700', fontSize: '14px', margin: '10px 0 0' }}>
                  {teilFirstTryOverall ? '✓ Alle Teilaufgaben richtig! 🎉' : '✓ Alle Teilaufgaben gelöst – beim nächsten Mal alle auf Anhieb! 💪'}
                </p>
              )}
            </div>
          ) : shuffledOptions.length > 0 ? (
            <div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: dm.text2, margin: '0 0 10px' }}>👉 Wähle die richtige Antwort:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {shuffledOptions.map((opt, i) => {
                  const isWrongTap = wrongOpts.has(opt);
                  const isRevealedCorrect = isCorrect && opt.correct;
                  const disabled = isCorrect || isWrongTap;
                  const bg = isRevealedCorrect ? dm.okTint : isWrongTap ? (dark ? '#2a1515' : '#fef2f2') : dm.card;
                  const border = isRevealedCorrect ? '#22c55e' : isWrongTap ? '#ef4444' : dm.border;
                  const textColor = isRevealedCorrect ? dm.okText : isWrongTap ? '#ef4444' : dm.text;
                  return (
                    <button
                      key={i}
                      onClick={() => handleTapOption(opt)}
                      disabled={disabled}
                      style={{ textAlign: 'left', padding: '13px 16px', borderRadius: '10px', border: `2px solid ${border}`, background: bg, color: textColor, fontSize: '14px', lineHeight: '1.6', fontWeight: isRevealedCorrect ? '700' : '500', cursor: disabled ? 'default' : 'pointer', transition: 'all 0.15s', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}
                    >
                      {isRevealedCorrect ? '✓ ' : isWrongTap ? '❌ ' : ''}{opt.label}
                    </button>
                  );
                })}
              </div>
              {isCorrect && (
                <p style={{ color: '#22c55e', fontWeight: '700', fontSize: '14px', margin: '10px 0 0' }}>
                  {firstTry ? '✓ Richtig! 🎉' : '✓ Richtig – beim nächsten Mal auf Anhieb! 💪'}
                </p>
              )}
              {answered && !isCorrect && <p style={{ color: '#ef4444', fontWeight: '600', fontSize: '13px', margin: '10px 0 0' }}>❌ Nochmal versuchen — die richtige Antwort ist noch dabei.</p>}
            </div>
          ) : (
            <div>
              <button
                onClick={handleIchHabsRichtig}
                disabled={isCorrect || solutionViewed}
                style={{ padding: '12px 24px', background: isCorrect ? dm.okTint : solutionViewed ? dm.bg3 : '#22c55e', color: isCorrect ? dm.okText : solutionViewed ? dm.text3 : '#fff', border: isCorrect ? `1px solid ${dm.okBorder}` : solutionViewed ? `1px solid ${dm.border}` : 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '700', cursor: (isCorrect || solutionViewed) ? 'default' : 'pointer' }}
              >
                {isCorrect ? '✓ Als richtig markiert 🎉' : solutionViewed ? '🔒 Lösung schon angeschaut' : "✅ Ich hab's richtig"}
              </button>
              {solutionViewed && !isCorrect && <p style={{ fontSize: '12px', color: dm.text3, margin: '8px 0 0' }}>Lösung schon angeschaut – probier es später nochmal 🙂</p>}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
          <button onClick={() => { setSolutionViewed(true); setShowSolution(v => !v); }} style={{ padding: '12px 28px', background: showSolution ? dm.accentBg : color, color: showSolution ? (dark ? '#c4b5fd' : color) : '#fff', border: showSolution ? `1px solid ${dark ? '#4c3f8f' : '#c4b5fd'}` : 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}>
            {showSolution ? '🙈 Lösungsweg ausblenden' : '💡 Lösungsweg anzeigen'}
          </button>
        </div>
        {showSolution && (
          <div style={{ marginTop: '28px' }}>
            <div style={{ background: 'transparent', padding: '0 0 16px 0', marginBottom: '4px', fontSize: '14px', color: dm.text2, lineHeight: '1.9', whiteSpace: 'pre-wrap' }}>{s.intro}</div>
            {s.svg && (
              <div style={{ marginBottom: '20px', textAlign: 'center' }}
                dangerouslySetInnerHTML={{ __html: s.svg }}
              />
            )}
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '28px', width: '28px', height: '28px', borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', marginTop: '2px' }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 5px', fontWeight: '600', fontSize: '14px', color: dm.text }}>{step.title}</p>
                  <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '8px', padding: '11px 15px', fontSize: '14px', color: dm.text, lineHeight: '1.7', whiteSpace: 'pre-wrap', fontFamily: 'ui-monospace, monospace' }}>{step.content}</div>
                  {step.solutionUrl && (
                    <a href={step.solutionUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '10px', padding: '10px 18px', background: '#166534', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#fff', textDecoration: 'none' }}>
                      📄 Offizielle Schullösung öffnen
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div style={{ background: dm.okBg, border: `1px solid ${dm.okBorder}`, borderRadius: '10px', padding: '14px 18px', margin: '20px 0', fontSize: '14px', color: dm.okText, lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>{s.tip}</div>
            {question.solutionUrl && (
              <div style={{ marginTop: '16px', padding: '14px 18px', background: dm.okBg, border: `1px solid ${dm.okBorder}`, borderRadius: '10px' }}>
                <p style={{ margin: '0 0 10px', fontSize: '13px', color: dm.okText, fontWeight: '700' }}>
                  📌 {question.solutionHint || question.topic}
                </p>
                <a href={question.solutionUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: '#166534', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#fff', textDecoration: 'none' }}>
                  ✅ Offizielle Lösung öffnen ↗
                </a>
              </div>
            )}
          </div>
        )}

        <FeedbackButton questionId={question.id} />

        <PracticeLadder key={question.id} practice={question.practice} dm={dm} dark={dark} />

      </div>
    </main>
  );
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────
function LandingPage({ onSelect, streak = 0, fehlerCount = 0 }) {
  const isMobile = useIsMobile();
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
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f8f7ff 0%, #fff 100%)', padding: isMobile ? '24px 16px 32px' : '40px 20px', fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', width: '100%' }}>

        {/* Header */}
        <div onClick={() => setLogoClicks(c => c + 1)} style={{ fontSize: '52px', marginBottom: '8px', cursor: 'default', userSelect: 'none' }}>🎓</div>
        {streak > 0 && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '20px', padding: '4px 14px', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#c2410c' }}>
            🔥 {streak} {streak === 1 ? 'Tag' : 'Tage'} Streak{streak >= 3 ? ' — Feuer!' : ''}
          </div>
        )}
        <h1 style={{ fontSize: isMobile ? '28px' : '34px', fontWeight: '800', color: '#1a1a2e', margin: '0 0 6px' }}>KantiPrep Thurgau</h1>
        <p style={{ fontSize: '15px', color: '#999', margin: '0 0 28px' }}>Aufnahmeprüfung Thurgau · GMS 2 & GMS 3</p>

        {/* GMS 2 & GMS 3 — ZUERST */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '24px' }}>

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
          <button onClick={() => onSelect('fehlerkiste')} style={{ padding: '16px 20px', background: '#534AB7', border: 'none', borderRadius: '14px', fontSize: '13px', fontWeight: '600', color: '#fff', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', minWidth: '110px' }}>
            <span style={{ fontSize: '24px' }}>📦</span>
            <span>Fehler-Kiste{fehlerCount > 0 ? ` (${fehlerCount})` : ''}</span>
          </button>
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

        {/* Feedback: auf dem Handy im normalen Layout (nicht schwebend, sonst überdeckt
            es Knöpfe weiter oben), auf Desktop weiterhin schwebend unten rechts. */}
        {isMobile ? (
          <div style={{
            marginTop: '16px',
            background: '#fff',
            border: '1px solid #e5e3f0',
            borderRadius: '14px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            padding: '8px 12px',
          }}>
            <FeedbackButton
              questionId="ALLGEMEIN_STARTSEITE"
              label="💬 Sag's uns"
              placeholder="Was ist gut? Was nervt? Was fehlt? Raus damit 🙂"
            />
          </div>
        ) : (
          <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
            background: '#fff',
            border: '1px solid #e5e3f0',
            borderRadius: '14px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            padding: '12px 16px',
            maxWidth: 'min(90vw, 380px)',
          }}>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px', fontWeight: '600' }}>
              🗣️ Deine Meinung zählt!
            </p>
            <FeedbackButton
              questionId="ALLGEMEIN_STARTSEITE"
              label="💬 Sag's uns"
              placeholder="Was ist gut? Was nervt? Was fehlt? Raus damit 🙂"
            />
          </div>
        )}

      </div>
    </main>
  );
}

// ─── FEHLER-KISTE PAGE ─────────────────────────────────────────────────────
// Liste aller falsch beantworteten Aufgaben (über alle Fächer hinweg),
// gruppiert nach Fach — mit Direktsprung zurück zur Aufgabe. Verschwindet
// eine Aufgabe von hier nur automatisch, wenn sie beim nächsten Besuch im
// allerersten Versuch richtig gelöst wird.
function FehlerKistePage({ fehlerIds, dm, onBack, onRemove, onClearAll, onJump }) {
  const isMobile = useIsMobile();
  const items = fehlerIds.map(id => questions.find(q => q.id === id)).filter(Boolean);
  const subjectColors = { 'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e', 'Deutsch': '#b45309', 'Deutsch GMS2': '#b45309' };
  const subjectEmojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝', 'Deutsch GMS2': '📝' };
  const grouped = {};
  items.forEach(q => {
    const key = subjectKeyOf(q) || 'Sonstiges';
    (grouped[key] = grouped[key] || []).push(q);
  });

  return (
    <main style={{ minHeight: '100vh', background: dm.bg, padding: isMobile ? '20px 16px 60px' : '40px', fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <button onClick={onBack} style={{ padding: '9px 16px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text2, fontSize: '13px', marginBottom: '20px' }}>← Zurück</button>
        <h1 style={{ fontSize: isMobile ? '24px' : '28px', fontWeight: '800', color: dm.text, margin: '0 0 6px' }}>📦 Fehler-Kiste</h1>
        <p style={{ fontSize: '14px', color: dm.text3, margin: '0 0 24px', lineHeight: '1.6' }}>Aufgaben, bei denen du zuletzt danebenlagst. Löst du sie richtig, fliegen sie automatisch wieder raus.</p>

        {items.length === 0 ? (
          <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '14px', padding: '32px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🎉</div>
            <p style={{ fontSize: '15px', fontWeight: '700', color: dm.text, margin: '0 0 4px' }}>Leer — stark!</p>
            <p style={{ fontSize: '13px', color: dm.text3, margin: 0 }}>Du hast bisher keine Aufgabe falsch beantwortet (oder schon alle korrigiert).</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '14px' }}>
              <button onClick={() => { if (confirm(`Fehler-Kiste wirklich leeren (${items.length} Aufgaben)?`)) onClearAll(); }} style={{ padding: '7px 14px', background: 'none', border: '1px solid #fca5a5', borderRadius: '8px', cursor: 'pointer', color: '#ef4444', fontSize: '12px' }}>🗑️ Alle entfernen</button>
            </div>
            {Object.entries(grouped).map(([subj, qs]) => (
              <div key={subj} style={{ marginBottom: '22px' }}>
                <p style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: subjectColors[subj] || dm.text2, margin: '0 0 8px' }}>
                  {subjectEmojis[subj] || '📚'} {subj} ({qs.length})
                </p>
                {qs.map(q => (
                  <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '10px', padding: '12px 14px', marginBottom: '8px' }}>
                    <div onClick={() => onJump(q)} style={{ flex: 1, minWidth: 0, cursor: 'pointer' }}>
                      <p style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: '600', color: dm.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{q.topic}</p>
                      <p style={{ margin: 0, fontSize: '11px', color: dm.text3 }}>{q.year}</p>
                    </div>
                    <button onClick={() => onJump(q)} style={{ padding: '8px 14px', background: subjectColors[subj] || '#534AB7', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' }}>↻ Nochmal</button>
                    <button onClick={() => onRemove(q.id)} title="Aus der Fehler-Kiste entfernen" style={{ padding: '8px 10px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text3, fontSize: '12px' }}>✕</button>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}

// ─── HEUTE ÜBEN (Session-Ansicht) ─────────────────────────────────────────
// Zeigt pro Slot eine GANZE Aufgabe (alle Teile zusammen, z.B. 4a+4b+4d+4e),
// nie eine einzelne Teilaufgabe — siehe buildAufgabenGruppen/pickHeuteUeben.
function HeuteUebenPage({ dm, solved, onSolved, onFehler, onRemoveFehler, onKonfetti, onBack, heuteUeben, streak, fehlerCount }) {
  const isMobile = useIsMobile();
  const matheOhneTRPool = useMemo(() => questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR') && q.group === 'Alte Prüfungen'), []);
  const [idGroups, setIdGroups] = useState(null);
  const [idx, setIdx] = useState(0);
  const [outcomes, setOutcomes] = useState({}); // groupKey -> 'first' | 'retry'
  const [wrongSeen, setWrongSeen] = useState(() => new Set());
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    void matheOhneTRPool; // sicherstellen, dass der Pool vor der Auswahl vorliegt
    setIdGroups(heuteUeben.ensureToday());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!idGroups) return <div style={{ minHeight: '100vh', background: dm.bg }} />;
  const groups = idGroups.map(ids => ids.map(id => questions.find(q => q.id === id)).filter(Boolean)).filter(g => g.length > 0);

  if (groups.length === 0) {
    return (
      <main style={{ minHeight: '100vh', background: dm.bg, padding: '40px 20px', fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <button onClick={onBack} style={{ padding: '9px 16px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text2, fontSize: '13px', marginBottom: '20px' }}>← Zurück</button>
          <p style={{ color: dm.text2 }}>Heute leider keine Aufgaben verfügbar.</p>
        </div>
      </main>
    );
  }

  const currentGroup = groups[idx];
  const currentKey = groupKeyOf(currentGroup[0].id);

  const handleFehlerWrap = (id) => {
    setWrongSeen(prev => new Set(prev).add(id));
    heuteUeben.recordOutcome(id, true);
    onFehler(id);
  };
  const handleSolvedWrap = (id) => {
    onSolved(id);
    heuteUeben.recordOutcome(id, false);
  };

  const goNext = () => {
    const allFirstTry = currentGroup.every(q => !wrongSeen.has(q.id));
    setOutcomes(prev => ({ ...prev, [currentKey]: allFirstTry ? 'first' : 'retry' }));
    if (idx + 1 >= groups.length) setFinished(true);
    else setIdx(idx + 1);
  };

  if (finished) {
    const correctFirst = Object.values(outcomes).filter(o => o === 'first').length;
    return (
      <main style={{ minHeight: '100vh', background: dm.bg, padding: isMobile ? '40px 16px' : '60px 20px', fontFamily: "'Nunito', 'Segoe UI', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center', background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '18px', padding: '32px 24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>{correctFirst === groups.length ? '🏆' : correctFirst >= Math.ceil(groups.length / 2) ? '🎉' : '💪'}</div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: dm.text, margin: '0 0 6px' }}>{correctFirst} von {groups.length} auf Anhieb</h2>
          <p style={{ fontSize: '14px', color: dm.text3, margin: '0 0 20px' }}>Geschafft für heute — komm morgen wieder für den nächsten Mix!</p>
          {streak > 0 && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '20px', padding: '4px 14px', marginBottom: '16px', fontSize: '13px', fontWeight: '600', color: '#c2410c' }}>
              🔥 {streak} {streak === 1 ? 'Tag' : 'Tage'} Streak
            </div>
          )}
          <p style={{ fontSize: '13px', color: dm.text3, margin: '0 0 20px' }}>📦 Fehler-Kiste: {fehlerCount} {fehlerCount === 1 ? 'Aufgabe' : 'Aufgaben'}</p>
          <button onClick={onBack} style={{ width: '100%', padding: '14px', background: '#534AB7', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>Fertig</button>
        </div>
      </main>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: dm.bg, fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <div style={{ padding: isMobile ? '14px 16px 0' : '20px 40px 0', maxWidth: '700px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <button onClick={onBack} style={{ padding: '7px 12px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text2, fontSize: '12px' }}>← Abbrechen</button>
          <span style={{ fontSize: '13px', fontWeight: '700', color: dm.text2 }}>🎯 Heute üben · {idx + 1} / {groups.length}</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
          {groups.map((g, i) => (
            <div key={groupKeyOf(g[0].id)} style={{ flex: 1, height: '6px', borderRadius: '3px', background: i < idx ? (outcomes[groupKeyOf(g[0].id)] === 'first' ? '#22c55e' : '#f59e0b') : i === idx ? '#534AB7' : dm.border }} />
          ))}
        </div>
      </div>
      {currentGroup.map((q, i) => (
        <div key={q.id} style={i > 0 ? { marginTop: '-8px' } : undefined}>
          <QuestionDisplay question={q} subject={subjectKeyOf(q)} onSolved={handleSolvedWrap} onFehler={handleFehlerWrap} onRemoveFehler={onRemoveFehler} solved={solved} dark={false} dm={dm} onKonfetti={onKonfetti} />
        </div>
      ))}
      <div style={{ padding: isMobile ? '0 16px 24px' : '0 40px 32px', maxWidth: '700px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <button onClick={goNext} style={{ width: '100%', padding: '14px', background: '#534AB7', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
          {idx + 1 >= groups.length ? 'Fertig ✓' : 'Weiter →'}
        </button>
      </div>
    </div>
  );
}

// ─── PROBEPRÜFUNG v2 (Mathe ohne TR) ──────────────────────────────────────
// Kompletter Neuaufbau: echter Prüfungsaufbau (eine Aufgabe = eine Seite mit
// allen Teilaufgaben zusammen), 4-Optionen-MC pro Teilaufgabe mit echten
// Punkten aus dem PDF, kein Lösungsweg während der Prüfung, Musterlösung erst
// in der Auswertung. Siehe pruefungsmuster.md für die Analyse und
// app/lib/gms3/mathe_otr/pruefung/ für die Daten (Modus A = Originalprüfungen,
// Modus B = neu erstellte Prüfungen).
const PROBE_DAUER_MIN = 45;

function renderHtmlText(text, style) {
  return <p style={style} dangerouslySetInnerHTML={{ __html: text }} />;
}

// Eine Teilaufgabe während der Prüfung: Text + 4 Optionen, KEINE
// Richtig/Falsch-Rückmeldung (das gibt es erst in der Auswertung).
function ExamTeilaufgabe({ teil, dm, selected, onSelect, isMobile }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      {renderHtmlText(teil.text, { margin: '0 0 4px', fontSize: '14px', lineHeight: '1.7', color: dm.text, fontWeight: '600' })}
      <span style={{ fontSize: '11px', color: dm.text3 }}>{teil.points} {teil.points === 1 ? 'Punkt' : 'Punkte'}</span>
      {teil.figureUrl && (
        <div style={{ margin: '10px 0' }}>
          <img src={teil.figureUrl} alt="Figur" style={{ maxWidth: '100%', borderRadius: '8px', border: `1px solid ${dm.border}`, background: '#fff' }} />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
        {teil.options.map((opt, i) => {
          const isSel = selected === i;
          return (
            <button key={i} onClick={() => onSelect(i)} style={{
              textAlign: 'left', padding: '11px 14px', borderRadius: '10px',
              border: `2px solid ${isSel ? '#534AB7' : dm.border}`,
              background: isSel ? (dm.accentBg || '#f0eeff') : dm.card,
              color: isSel ? '#534AB7' : dm.text, fontSize: '13px', fontWeight: isSel ? '700' : '500',
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <span dangerouslySetInnerHTML={{ __html: opt.label }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PruefungV2Page({ dm, onSolved, onFehler, onRemoveFehler, onBack }) {
  const isMobile = useIsMobile();
  const [phase, setPhase] = useState('intro'); // intro | exam | done
  const [exam, setExam] = useState(null); // { year, aufgaben, isNew?, label? }
  const [aufgabeIdx, setAufgabeIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // `${nr}-${letter}` -> option index
  const [secondsLeft, setSecondsLeft] = useState(PROBE_DAUER_MIN * 60);
  const [openSolutionFor, setOpenSolutionFor] = useState({}); // nr -> bool

  useEffect(() => {
    if (phase !== 'exam') return;
    if (secondsLeft <= 0) return;
    const t = setInterval(() => setSecondsLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [phase, secondsLeft]);

  const start = (chosenExam) => {
    setExam(chosenExam);
    setAufgabeIdx(0);
    setAnswers({});
    setOpenSolutionFor({});
    setSecondsLeft(PROBE_DAUER_MIN * 60);
    setPhase('exam');
  };

  const fmtTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  if (phase === 'intro') {
    return (
      <main style={{ minHeight: '100vh', background: dm.bg, padding: isMobile ? '40px 16px' : '60px 20px', fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <button onClick={onBack} style={{ padding: '9px 16px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text2, fontSize: '13px', marginBottom: '20px' }}>← Zurück</button>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '44px', marginBottom: '8px' }}>📝</div>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: dm.text, margin: '0 0 8px' }}>Probeprüfung Mathe ohne TR</h2>
            <p style={{ fontSize: '13px', color: dm.text3, margin: 0, lineHeight: '1.6' }}>{PROBE_DAUER_MIN} Minuten, echter Prüfungsaufbau. Kein Lösungsweg während der Prüfung — die Musterlösung gibt's am Ende, aufklappbar pro Aufgabe.</p>
          </div>

          <p style={{ fontSize: '13px', fontWeight: '700', color: dm.text2, margin: '0 0 10px' }}>📖 Modus A — Originalprüfung</p>
          {pruefungenModusA.length === 0 ? (
            <p style={{ fontSize: '12px', color: dm.text3, marginBottom: '20px' }}>Noch kein Jahr verfügbar.</p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {pruefungenModusA.map(p => (
                <button key={p.year} onClick={() => start(p)} style={{ padding: '12px 18px', background: dm.card, border: `2px solid ${dm.border}`, borderRadius: '10px', cursor: 'pointer', color: dm.text, fontSize: '14px', fontWeight: '700' }}>
                  {p.year}
                </button>
              ))}
            </div>
          )}

          <p style={{ fontSize: '13px', fontWeight: '700', color: dm.text2, margin: '0 0 10px' }}>✨ Modus B — Neue Prüfung</p>
          {pruefungenModusB.length === 0 ? (
            <p style={{ fontSize: '12px', color: dm.text3 }}>Noch keine neue Prüfung verfügbar.</p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {pruefungenModusB.map(p => (
                <button key={p.year} onClick={() => start(p)} style={{ padding: '12px 18px', background: '#f0eeff', border: '2px solid #534AB7', borderRadius: '10px', cursor: 'pointer', color: '#534AB7', fontSize: '14px', fontWeight: '700' }}>
                  {p.label || 'Neue Prüfung'}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    );
  }

  if (!exam) return null;
  const aufgaben = exam.aufgaben;

  if (phase === 'exam') {
    const auf = aufgaben[aufgabeIdx];
    const timeUp = secondsLeft <= 0;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: dm.bg, fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
        <div style={{ padding: isMobile ? '14px 16px 0' : '20px 40px 0', maxWidth: '700px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: dm.text2 }}>📝 Aufgabe {aufgabeIdx + 1} / {aufgaben.length}</span>
            <span style={{ fontSize: '15px', fontWeight: '800', color: timeUp ? '#ef4444' : dm.text }}>{timeUp ? '⏰ Zeit um!' : `⏱️ ${fmtTime(secondsLeft)}`}</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
            {aufgaben.map((a, i) => <div key={a.nr} style={{ flex: 1, height: '6px', borderRadius: '3px', background: i < aufgabeIdx ? '#534AB7' : i === aufgabeIdx ? '#a89ee8' : dm.border }} />)}
          </div>
          <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '12px', padding: isMobile ? '16px' : '22px', marginBottom: '16px' }}>
            {exam.isNew && <span style={{ display: 'inline-block', marginBottom: '10px', background: '#f0eeff', color: '#534AB7', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700' }}>✨ Neu im Kanti-Stil</span>}
            {renderHtmlText(auf.intro, { margin: '0 0 14px', fontSize: '15px', lineHeight: '1.8', color: dm.text, whiteSpace: 'pre-wrap' })}
            {auf.figureUrl && (
              <div style={{ marginBottom: '14px' }}>
                <img src={auf.figureUrl} alt={auf.figureCaption || 'Figur'} style={{ maxWidth: '100%', borderRadius: '8px', border: `1px solid ${dm.border}`, background: '#fff' }} />
                {auf.figureCaption && <p style={{ margin: '6px 0 0', fontSize: '11px', color: dm.text2, fontStyle: 'italic' }}>{auf.figureCaption}</p>}
              </div>
            )}
            {auf.teile.map(teil => {
              const key = `${auf.nr}-${teil.letter}`;
              return (
                <ExamTeilaufgabe
                  key={key}
                  teil={teil}
                  dm={dm}
                  isMobile={isMobile}
                  selected={answers[key]}
                  onSelect={(i) => setAnswers(prev => ({ ...prev, [key]: i }))}
                />
              );
            })}
          </div>
        </div>
        <div style={{ padding: isMobile ? '0 16px 24px' : '0 40px 32px', maxWidth: '700px', margin: '0 auto', width: '100%', boxSizing: 'border-box', display: 'flex', gap: '10px' }}>
          <button onClick={onBack} style={{ padding: '14px 18px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '12px', cursor: 'pointer', color: dm.text2, fontSize: '13px' }}>Abbrechen</button>
          <button onClick={() => (aufgabeIdx + 1 >= aufgaben.length ? setPhase('done') : setAufgabeIdx(aufgabeIdx + 1))} style={{ flex: 1, padding: '14px', background: '#534AB7', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
            {aufgabeIdx + 1 >= aufgaben.length ? 'Prüfung abgeben →' : 'Weiter →'}
          </button>
        </div>
      </div>
    );
  }

  // phase === 'done': auswerten
  let totalPoints = 0, maxPoints = 0;
  const byTopic = {};
  const rows = []; // { nr, letter, text, points, correct, correctLabel, selectedLabel }
  aufgaben.forEach(auf => {
    auf.teile.forEach(teil => {
      const key = `${auf.nr}-${teil.letter}`;
      const selIdx = answers[key];
      const correctIdx = teil.options.findIndex(o => o.correct);
      const isRight = selIdx === correctIdx;
      maxPoints += teil.points;
      if (isRight) totalPoints += teil.points;
      byTopic[auf.topic] = byTopic[auf.topic] || { total: 0, correct: 0 };
      byTopic[auf.topic].total++;
      if (isRight) byTopic[auf.topic].correct++;
      rows.push({
        nr: auf.nr, letter: teil.letter, text: teil.text, points: teil.points, isRight,
        correctLabel: teil.options[correctIdx]?.label, selectedLabel: selIdx != null ? teil.options[selIdx]?.label : null,
      });
      // Fehler-Kiste: nur wenn eine passende Übungsaufgabe im normalen Pool existiert.
      if (!isRight && auf.linkedQuestionId && questions.some(q => q.id === auf.linkedQuestionId)) {
        onFehler(auf.linkedQuestionId);
      } else if (isRight && auf.linkedQuestionId && questions.some(q => q.id === auf.linkedQuestionId)) {
        onSolved(auf.linkedQuestionId);
        onRemoveFehler(auf.linkedQuestionId);
      }
    });
  });
  const pct = maxPoints > 0 ? totalPoints / maxPoints : 0;
  const note = Math.min(6, Math.max(1, Math.round((1 + 5 * pct) * 2) / 2));

  return (
    <main style={{ minHeight: '100vh', background: dm.bg, padding: isMobile ? '32px 16px' : '50px 20px', fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ fontSize: '44px', marginBottom: '8px' }}>{pct === 1 ? '🏆' : pct >= 0.5 ? '🎉' : '💪'}</div>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: dm.text, margin: '0 0 6px' }}>{totalPoints} / {maxPoints} Punkte</h2>
          <p style={{ fontSize: '14px', color: dm.text3, margin: '0 0 4px' }}>Ungefähre Note: <strong style={{ color: dm.text }}>{note.toFixed(1)}</strong></p>
          <p style={{ fontSize: '11px', color: dm.text3, margin: 0 }}>(Annahme: linear von Note 1 bei 0% bis Note 6 bei 100% — kein offizieller Notenschlüssel bekannt)</p>
        </div>

        <div style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '14px', padding: '16px', marginBottom: '20px' }}>
          <p style={{ margin: '0 0 10px', fontSize: '13px', fontWeight: '700', color: dm.text2 }}>Auswertung pro Thema</p>
          {Object.entries(byTopic).map(([t, v]) => (
            <div key={t} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: dm.text, padding: '4px 0' }}>
              <span>{t}</span><span>{v.correct} / {v.total}</span>
            </div>
          ))}
        </div>

        {aufgaben.map(auf => {
          const open = !!openSolutionFor[auf.nr];
          const aufRows = rows.filter(r => r.nr === auf.nr);
          return (
            <div key={auf.nr} style={{ background: dm.card, border: `1px solid ${dm.border}`, borderRadius: '12px', marginBottom: '10px', overflow: 'hidden' }}>
              <div style={{ padding: '12px 16px' }}>
                <p style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: '700', color: dm.text2 }}>Aufgabe {auf.nr} · {auf.topic}</p>
                {aufRows.map(r => (
                  <div key={r.nr + '-' + r.letter} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '5px 0', fontSize: '13px', color: dm.text }}>
                    <span>{r.isRight ? '✅' : '❌'}</span>
                    <span style={{ flex: 1 }}>{r.letter ? `${r.letter}) ` : ''}{r.points} {r.points === 1 ? 'Punkt' : 'Punkte'}</span>
                  </div>
                ))}
                <button onClick={() => setOpenSolutionFor(prev => ({ ...prev, [auf.nr]: !open }))} style={{ marginTop: '8px', padding: '7px 12px', background: 'none', border: `1px solid ${dm.border}`, borderRadius: '8px', cursor: 'pointer', color: dm.text2, fontSize: '12px' }}>
                  {open ? '▾ Musterlösung ausblenden' : '▸ Musterlösung anzeigen'}
                </button>
              </div>
              {open && (
                <div style={{ background: dm.okBg, borderTop: `1px solid ${dm.okBorder}`, padding: '12px 16px' }}>
                  {auf.teile.map(teil => (
                    <div key={teil.letter} style={{ marginBottom: '8px' }}>
                      <p style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: '700', color: dm.okText }}>{teil.letter ? `${teil.letter}) ` : ''}✅ {teil.options.find(o => o.correct)?.label}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: dm.okText, whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: teil.solution }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <button onClick={onBack} style={{ width: '100%', padding: '14px', background: '#534AB7', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', marginTop: '10px' }}>Fertig</button>
      </div>
    </main>
  );
}

// ─── MINI-PLAYER (läuft im Hintergrund weiter) ────────────────────────────
// Hängt auf oberster Ebene der Lern-Ansicht und wird NIE neu gemountet, wenn
// man Aufgaben wechselt oder die Pause öffnet/schliesst. Darum spielt die
// Musik durchgehend weiter – auch beim Lernen. Beim Zuklappen wird der Player
// nur unsichtbar (opacity/pointer-events), bleibt aber im DOM → Ton läuft.
function MiniPlayer({ dm }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <button
        onClick={() => { if (!mounted) setMounted(true); setOpen(o => !o); }}
        title="Lernmusik"
        style={{ position: 'fixed', right: '16px', bottom: '16px', zIndex: 1600, width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, #534AB7, #0f766e)', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.28)', cursor: 'pointer', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {open ? '✕' : '🎧'}
      </button>

      {mounted && (
        <div style={{ position: 'fixed', right: '16px', bottom: '80px', zIndex: 1600, width: 'min(92vw, 320px)', background: dm.bg2, border: `1px solid ${dm.border}`, borderRadius: '16px', boxShadow: '0 8px 28px rgba(0,0,0,0.3)', padding: '12px', transform: open ? 'none' : 'translateY(16px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity 0.2s, transform 0.2s' }}>
          <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: '700', color: dm.text }}>🎧 Lernmusik</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px', marginBottom: '8px' }}>
            {lofiStreams.map((st, i) => (
              <button key={st.id} onClick={() => setIdx(i)} style={{ padding: '6px 4px', fontSize: '11px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer', border: `1px solid ${i === idx ? '#534AB7' : dm.border}`, background: i === idx ? '#534AB7' : dm.card, color: i === idx ? '#fff' : dm.text2 }}>{st.label}</button>
            ))}
          </div>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '10px', overflow: 'hidden', border: `1px solid ${dm.border}` }}>
            <iframe
              key={lofiStreams[idx].id}
              src={`https://www.youtube.com/embed/${lofiStreams[idx].id}?rel=0`}
              title="Lernmusik"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
          <p style={{ margin: '8px 0 0', fontSize: '10px', color: dm.text3, textAlign: 'center' }}>Knopf zuklappen — Musik spielt weiter ▶</p>
        </div>
      )}
    </>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────
// Leitet aus einer Frage das App-Fach ab (für teilbare Links ?id=…)
function subjectKeyOf(q) {
  if (!q) return null;
  if (q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR')) return 'Mathe ohne TR';
  if (q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR')) return 'Mathe mit TR';
  if (q.subject === 'Deutsch' && q.id.startsWith('D2_')) return 'Deutsch GMS2';
  if (q.subject === 'Deutsch') return 'Deutsch';
  return null;
}

export default function Home() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subject, setSubject] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showLinks, setShowLinks] = useState(false);
  const [showFehlerKiste, setShowFehlerKiste] = useState(false);
  const [showHeuteUeben, setShowHeuteUeben] = useState(false);
  const [showProbepruefung, setShowProbepruefung] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { solved, markSolved, clearSolved } = useSolved();
  const { dark, toggleDark } = useDarkMode();
  const { streak, bumpStreak } = useStreak();
  const { pruefungsDatum, saveDatum, daysLeft, aufgabenProTag } = useLernplan();
  const { fehler, addFehler, removeFehler, clearFehler } = useFehlerKiste();
  const matheOhneTRPool = useMemo(() => questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR') && q.group === 'Alte Prüfungen'), []);
  const heuteUeben = useHeuteUeben(matheOhneTRPool, solved, fehler);
  const [konfetti, setKonfetti] = useState(false);

  const handleSolved = useCallback((id) => { markSolved(id); bumpStreak(); }, [markSolved, bumpStreak]);

  const dm = makePalette(dark);

  // Beim Laden: ?id=… aus der URL lesen und direkt zur Aufgabe springen
  useEffect(() => {
    try {
      const qid = new URLSearchParams(window.location.search).get('id');
      if (qid) {
        const q = questions.find((x) => x.id === qid);
        if (q) { setSubject(subjectKeyOf(q)); setSelectedId(qid); }
      }
    } catch {}
    setMounted(true);
  }, []);

  // Zustand → URL spiegeln (ohne Reload), damit jede Aufgabe einen eigenen Link hat
  useEffect(() => {
    if (!mounted) return;
    try {
      const base = window.location.pathname;
      window.history.replaceState(null, '', selectedId ? `${base}?id=${encodeURIComponent(selectedId)}` : base);
    } catch {}
  }, [mounted, subject, selectedId]);

  if (showLinks) return <LinksPage onBack={() => setShowLinks(false)} />;
  if (showHeuteUeben) return (
    <HeuteUebenPage
      dm={dm}
      solved={solved}
      onSolved={handleSolved}
      onFehler={addFehler}
      onRemoveFehler={removeFehler}
      onKonfetti={() => setKonfetti(true)}
      onBack={() => setShowHeuteUeben(false)}
      heuteUeben={heuteUeben}
      streak={streak}
      fehlerCount={fehler.length}
    />
  );
  if (showProbepruefung) return (
    <PruefungV2Page
      dm={dm}
      onSolved={handleSolved}
      onFehler={addFehler}
      onRemoveFehler={removeFehler}
      onBack={() => setShowProbepruefung(false)}
    />
  );
  if (showFehlerKiste) return (
    <FehlerKistePage
      fehlerIds={fehler}
      dm={dm}
      onBack={() => setShowFehlerKiste(false)}
      onRemove={removeFehler}
      onClearAll={clearFehler}
      onJump={(q) => { setSubject(subjectKeyOf(q)); setSelectedId(q.id); setShowFehlerKiste(false); }}
    />
  );
  if (!subject) return <LandingPage onSelect={s => { if (s === 'links') { setShowLinks(true); return; } if (s === 'fehlerkiste') { setShowFehlerKiste(true); return; } if (s === 'heuteueben') { setShowHeuteUeben(true); return; } if (s === 'probepruefung') { setShowProbepruefung(true); return; } setSubject(s); setSelectedId(null); setSidebarOpen(true); }} streak={streak} fehlerCount={fehler.length} />;

  const selectedQuestion = questions.find(q => q.id === selectedId) || null;
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Nunito', 'Segoe UI', sans-serif", background: dm.bg, color: dm.text }}>
      {konfetti && <Konfetti onDone={() => setKonfetti(false)} />}

      {(!isMobile || sidebarOpen) && (
        <div style={isMobile ? { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2000 } : {}}>
          <Sidebar
            subject={subject}
            selectedId={selectedId}
            onSelect={(id) => { setSelectedId(id); if (isMobile) setSidebarOpen(false); }}
            onBack={() => { setSubject(null); setSelectedId(null); }}
            solved={solved}
            clearSolved={clearSolved}
            dark={dark}
            toggleDark={toggleDark}
            streak={streak}
            dm={dm}
            mobile={isMobile}
            onClose={() => setSidebarOpen(false)}
            onShowFehlerKiste={() => setShowFehlerKiste(true)}
            fehlerCount={fehler.length}
            onShowHeuteUeben={() => setShowHeuteUeben(true)}
            onShowPruefung={() => setShowProbepruefung(true)}
          />
        </div>
      )}

      {isMobile && !sidebarOpen && (
        <button onClick={() => setSidebarOpen(true)} style={{ position: 'fixed', top: '12px', left: '12px', zIndex: 1500, padding: '8px 14px', background: '#534AB7', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '600', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', cursor: 'pointer' }}>
        ☰ Aufgaben
        </button>
      )}

      <QuestionDisplay question={selectedQuestion} subject={subject} onSolved={handleSolved} onFehler={addFehler} onRemoveFehler={removeFehler} solved={solved} dark={dark} dm={dm} onKonfetti={() => setKonfetti(true)} buildTree={buildTree} />

      <MiniPlayer dm={dm} />
    </div>
  );
}