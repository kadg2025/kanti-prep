// Textschreiben (Multicheck IMS): Speichern und Prüfen. Alles bleibt lokal (localStorage), nichts wird an einen Server gesendet.
// «speicher» ist localStorage oder ein gleich aufgebautes Objekt mit getItem und setItem.
import { TEXT_MIN } from './schreib_daten.mjs';

export const SCHREIB_KEY = 'kp_multicheck_text';

// Abschicken ist erst ab TEXT_MIN Zeichen möglich.
export const kannAbschicken = (text, min = TEXT_MIN) => String(text || '').trim().length >= min;

export function lade(speicher) {
  try {
    const d = JSON.parse(speicher.getItem(SCHREIB_KEY) || 'null');
    return { entwuerfe: (d && d.entwuerfe) || {}, texte: d && Array.isArray(d.texte) ? d.texte : [] };
  } catch {
    return { entwuerfe: {}, texte: [] };
  }
}

function sichern(speicher, d) {
  try { speicher.setItem(SCHREIB_KEY, JSON.stringify(d)); } catch { /* Speicher voll oder gesperrt */ }
}

// Entwurf pro Runde automatisch speichern (leerer Text löscht den Entwurf).
export function entwurfSpeichern(speicher, runde, wahl, text) {
  const d = lade(speicher);
  if (text) d.entwuerfe[runde] = { wahl, text }; else delete d.entwuerfe[runde];
  sichern(speicher, d);
}

// Gibt die ID des Textes zurück oder null, wenn der Text zu kurz ist. Mit id wird ein vorhandener Text überarbeitet.
export function abschicken(speicher, { runde, thema, text, id = null }) {
  if (!kannAbschicken(text)) return null;
  const d = lade(speicher);
  const eintrag = { id: id || Date.now() + '-' + runde, datum: new Date().toISOString(), runde, thema, text };
  const i = d.texte.findIndex(t => t.id === eintrag.id);
  if (i >= 0) d.texte[i] = { ...eintrag, datum: d.texte[i].datum }; else d.texte.push(eintrag);
  delete d.entwuerfe[runde];
  sichern(speicher, d);
  return eintrag.id;
}

export function loeschen(speicher, id) {
  const d = lade(speicher);
  d.texte = d.texte.filter(t => t.id !== id);
  sichern(speicher, d);
}
