// Gürtel-System im Dojo: Konstanten und reine Funktionen. Der Fortschritt
// liegt pro Gerät in localStorage (kp_dojo).

// Schwellen hier anpassen. xp = Mindest-XP für den Gürtel.
export const DOJO_GUERTEL = [
  { name: 'Weiss',   xp: 0,    fill: '#f3f4f6', border: '#9ca3af' },
  { name: 'Gelb',    xp: 100,  fill: '#facc15', border: '#ca8a04' },
  { name: 'Orange',  xp: 250,  fill: '#fb923c', border: '#c2410c' },
  { name: 'Grün',    xp: 450,  fill: '#4ade80', border: '#15803d' },
  { name: 'Blau',    xp: 700,  fill: '#60a5fa', border: '#1d4ed8' },
  { name: 'Braun',   xp: 1000, fill: '#b45309', border: '#78350f' },
  { name: 'Schwarz', xp: 1400, fill: '#1f2937', border: '#000000' },
];

export const XP_RICHTIG = 10;
export const XP_STREAK_BONUS = 5;

const KEY = 'kp_dojo';
const LEER = { xp: 0, streak: 0, tag: null, bonusTag: null, geloest: [] };

export function ladeDojo() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (s && typeof s.xp === 'number') return { ...LEER, ...s };
  } catch {}
  return { ...LEER };
}

export function speichereDojo(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
}

export function guertelIndex(xp) {
  let idx = 0;
  DOJO_GUERTEL.forEach((g, i) => { if (xp >= g.xp) idx = i; });
  return idx;
}

function tagString(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function gestern(d) {
  const g = new Date(d);
  g.setDate(g.getDate() - 1);
  return tagString(g);
}

// Verbucht eine MC-Antwort. Der Streak zählt jeden Tag mit mindestens einer
// Antwort; der Bonus gibt es einmal pro Tag mit der ersten richtigen Antwort.
// XP gibt es pro Frage (id) nur beim ersten Mal richtig.
// Gibt { state, gewonnen, aufstieg } zurück.
export function verbucheAntwort(state, richtig, id, jetzt = new Date()) {
  const heute = tagString(jetzt);
  const next = { ...state };
  if (next.tag !== heute) {
    next.streak = next.tag === gestern(jetzt) ? next.streak + 1 : 1;
    next.tag = heute;
  }
  let gewonnen = 0;
  if (richtig && !state.geloest.includes(id)) {
    next.geloest = [...state.geloest, id];
    gewonnen = XP_RICHTIG;
    if (next.bonusTag !== heute) {
      gewonnen += XP_STREAK_BONUS;
      next.bonusTag = heute;
    }
  }
  const vorher = guertelIndex(state.xp);
  next.xp = state.xp + gewonnen;
  return { state: next, gewonnen, aufstieg: guertelIndex(next.xp) > vorher };
}
