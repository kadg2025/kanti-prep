// Multicheck-Dojo: XP pro Schwierigkeit und Gewichtung beim Ziehen nach Gürtel.
// Alle Werte stehen hier. Der Gürtel (0 = Weiss bis 6 = Schwarz) kommt aus lib/dojo_guertel.js.

export const STUFEN = ['einfach', 'mittel', 'schwer'];

// XP für die erste richtige Antwort pro Frage. Falsche Antworten geben nie Minus-XP.
export const XP_NACH_STUFE = { einfach: 10, mittel: 15, schwer: 25 };

// Ziehgewichte [einfach, mittel, schwer] pro Gürtel (Prozent, Summe 100).
export const GEWICHTE_NACH_GUERTEL = [
  [70, 25, 5],   // Weiss
  [55, 35, 10],  // Gelb
  [40, 40, 20],  // Orange
  [25, 45, 30],  // Grün
  [15, 40, 45],  // Blau
  [10, 30, 60],  // Braun
  [5, 25, 70],   // Schwarz
];

// Eine Runde = so viele Fragen, in denen keine Frage doppelt vorkommt. Danach beginnt eine neue Runde.
// (Eine Runde über den ganzen Pool würde jede Stufe gleich oft ziehen und die Gewichtung aufheben.)
export const RUNDE_LAENGE = 10;

export const stufeVon = (q) => (STUFEN.includes(q.difficulty) ? q.difficulty : 'mittel');
export const xpFuerFrage = (q) => XP_NACH_STUFE[stufeVon(q)];

// Zieht eine Stufe nach Gewicht; nur Stufen, die Fragen haben. Fehlt die gezogene Stufe,
// wird auf die nächstliegende Stufe ausgewichen (bei Gleichstand: unten bei niedrigem, oben bei hohem Gürtel).
function ziehStufe(vorhanden, guertel, rnd) {
  const w = GEWICHTE_NACH_GUERTEL[Math.max(0, Math.min(guertel, GEWICHTE_NACH_GUERTEL.length - 1))];
  const summe = w.reduce((a, b) => a + b, 0);
  let r = rnd() * summe, i = 0;
  for (; i < 2; i++) { if (r < w[i]) break; r -= w[i]; }
  if (vorhanden.has(STUFEN[i])) return STUFEN[i];
  const reihenfolge = STUFEN.map((s, k) => ({ s, d: Math.abs(k - i), k }))
    .filter(x => vorhanden.has(x.s))
    .sort((a, b) => a.d - b.d || (guertel < 3 ? a.k - b.k : b.k - a.k));
  return reihenfolge[0].s;
}

// Wählt die nächste Frage.
//  pool: alle Dojo-Fragen; geloest: Liste 'mc:<id>' (schon gelöst); gezeigt: IDs dieser Runde
//  stufe: 'alle' (Gewichtung) oder 'einfach'/'mittel'/'schwer' (manueller Filter, keine Gewichtung)
// Gibt { q, gezeigt } zurück. Innerhalb einer Runde (RUNDE_LAENGE Fragen, oder bis alle passenden dran waren) kommt keine Frage doppelt.
export function waehleGewichtet({ pool, geloest = [], gezeigt = [], letzteId = null, stufe = 'alle', guertel = 0, rnd = Math.random }) {
  const basis = stufe === 'alle' ? pool : pool.filter(q => stufeVon(q) === stufe);
  const quelle = basis.length ? basis : pool;
  let neu = quelle.filter(q => !gezeigt.includes(q.id));
  let verlauf = gezeigt;
  if (!neu.length || gezeigt.length >= RUNDE_LAENGE) { neu = quelle; verlauf = []; }
  if (neu.length > 1) neu = neu.filter(q => q.id !== letzteId);
  const offen = neu.filter(q => !geloest.includes('mc:' + q.id));
  const kandidaten = offen.length ? offen : neu;
  let wahl;
  if (stufe === 'alle') {
    const s = ziehStufe(new Set(kandidaten.map(stufeVon)), guertel, rnd);
    const inStufe = kandidaten.filter(q => stufeVon(q) === s);
    wahl = inStufe[Math.floor(rnd() * inStufe.length)];
  } else {
    wahl = kandidaten[Math.floor(rnd() * kandidaten.length)];
  }
  return { q: wahl, gezeigt: [...verlauf, wahl.id] };
}
