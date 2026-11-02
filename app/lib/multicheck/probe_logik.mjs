// Probeprüfung: Auswertung, Selbsteinschätzung und lokales Speichern. Nichts geht an einen Server.
// «speicher» ist localStorage oder ein Objekt mit getItem und setItem.
import { VORWAERTS_TYPEN } from './probe_config.mjs';

export const SELBST_SCHRITTE = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const LAUF_KEY = 'kp_multicheck_probe_lauf';
export const VERLAUF_KEY = 'kp_multicheck_probe_verlauf';

// Auswertung einer Station. antworten: { qId: Antwortstand }. fn: { istLeer, auswerten, erwartetAntwort } aus pruefen.js.
// Eine Einheit ist eine Aufgabe oder bei Blöcken (items) eine Zeile bzw. ein Feld.
export function bewerte(fragen, antworten, fn) {
  let richtig = 0, falsch = 0, offen = 0;
  const fehlerIds = [];
  for (const q of fragen) {
    const U = antworten[q.id];
    let fehler = false;
    if (q.items) {
      q.items.forEach((it, i) => {
        const a = U && U.rows ? U.rows[i] : null;
        if (a == null) offen++;
        else if (a === fn.erwartetAntwort(q, it)) richtig++;
        else { falsch++; fehler = true; }
      });
    } else if (!U || fn.istLeer(q, U)) {
      offen++;
    } else if (fn.auswerten(q, U, false).ok) {
      richtig++;
    } else {
      falsch++; fehler = true;
    }
    if (fehler) fehlerIds.push(q.id);
  }
  return { richtig, falsch, offen, total: richtig + falsch + offen, fehlerIds };
}

export const prozent = (r) => (r.total ? Math.round(r.richtig / r.total * 100) : 0);

// Vergleich Selbsteinschätzung und tatsächlich richtig (beides in Prozent). Nur ein Übungshinweis.
export function einschaetzung(selbst, tatsaechlich) {
  const d = selbst - tatsaechlich;
  if (Math.abs(d) <= 10) return { art: 'realistisch', satz: 'Deine Einschätzung war realistisch.' };
  if (d > 10) return { art: 'überschätzt', satz: `Du hast dich überschätzt: Du dachtest ${selbst} %, richtig waren ${tatsaechlich} %.` };
  return { art: 'unterschätzt', satz: `Du hast dich unterschätzt: Du dachtest ${selbst} %, richtig waren ${tatsaechlich} %.` };
}

export const zeitText = (sek) => `${Math.floor(Math.max(0, sek) / 60)}:${String(Math.max(0, Math.round(sek)) % 60).padStart(2, '0')}`;

// Springen zwischen Aufgaben: nur bei Typen ohne Ablauf, und nicht über ablaufende Aufgaben hinweg.
export function darfSpringen(fragen, von, nach) {
  if (von === nach || nach < 0 || nach >= fragen.length) return false;
  const a = Math.min(von, nach), b = Math.max(von, nach);
  for (let i = a; i <= b; i++) if (VORWAERTS_TYPEN.includes(fragen[i].type)) return false;
  return true;
}

// ─── Speichern ──────────────────────────────────────────────────────────────
export function ladeLauf(speicher) {
  try { return JSON.parse(speicher.getItem(LAUF_KEY) || 'null'); } catch { return null; }
}
export function speichereLauf(speicher, lauf) {
  try { speicher.setItem(LAUF_KEY, JSON.stringify(lauf)); } catch { /* Speicher voll */ }
}
export function loescheLauf(speicher) {
  try { speicher.setItem(LAUF_KEY, 'null'); } catch { /* nichts */ }
}
export function ladeVerlauf(speicher) {
  try { const v = JSON.parse(speicher.getItem(VERLAUF_KEY) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; }
}
// Die letzten drei Versuche bleiben gespeichert.
export function verlaufHinzu(speicher, eintrag) {
  const v = [...ladeVerlauf(speicher), eintrag].slice(-3);
  try { speicher.setItem(VERLAUF_KEY, JSON.stringify(v)); } catch { /* nichts */ }
  return v;
}
