// Verteiler für Multicheck IMS.
// Neues Thema: Datei <thema>.js anlegen (Form wie deutsch.js), oben importieren
// und den Platzhalter in MULTICHECK_THEMEN durch den Eintrag ersetzen. Die
// Lernkarten stehen in lernkarten.js unter dem Namen des Themas.
import deutsch from './deutsch';
import englisch from './englisch';
import kurzzeit from './kurzzeitgedaechtnis';
import it from './it_grundwissen';
import organisation from './organisation';
import mathematik from './mathematik';
import logik from './logik';
import konzentration from './konzentration';
import vorstellung from './vorstellung';
import vernetzt from './vernetzt';
import merkfaehigkeit from './merkfaehigkeit';
import { mitUnterthemen } from './unterthemen';
import { multicheckLernkarten } from './lernkarten';

const bald = (id, name, emoji) => ({ id, name, emoji, bald: true });
const aktiv = (thema, emoji) => ({ ...mitUnterthemen(thema), emoji, bald: false });

// Reihenfolge wie im echten Multicheck.
export const MULTICHECK_THEMEN = [
  aktiv(merkfaehigkeit, '🧠'),
  aktiv(deutsch, '📝'),
  aktiv(englisch, '🇬🇧'),
  aktiv(kurzzeit, '👁️'),
  aktiv(it, '💻'),
  aktiv(organisation, '🗓️'),
  aktiv(mathematik, '🔢'),
  aktiv(logik, '🧩'),
  aktiv(konzentration, '🎯'),
  aktiv(vorstellung, '🧊'),
  aktiv(vernetzt, '🕸️'),
  bald('textschreiben', 'Textschreiben', '✍️'),
];

export function multicheckThema(id) {
  return MULTICHECK_THEMEN.find(t => t.id === id && !t.bald) || null;
}

export { multicheckLernkarten };

// Fehler-Kiste: Multicheck-Einträge haben die ID
//   mc:<Frage-ID>                         (Dojo mit Zufallsfragen)
//   mcdojo:<Thema>:<Kachel>:<Karte>       (Dojo-Kachel in Frag Sensei)
export function multicheckFehlerItem(id) {
  const [prefix, a, b, c] = id.split(':');
  if (prefix === 'mc') {
    const thema = MULTICHECK_THEMEN.find(t => !t.bald && [...t.qs, ...(t.dojoQs || [])].some(q => q.id === a));
    if (!thema) return null;
    const q = [...thema.qs, ...(thema.dojoQs || [])].find(x => x.id === a);
    return { id, mcTopic: thema.id, topic: `Multicheck: ${thema.name}`, year: q.title };
  }
  if (prefix === 'mcdojo') {
    const thema = multicheckThema(a);
    const karte = multicheckLernkarten[a]?.kacheln.find(k => k.id === b)?.karten[Number(c)];
    if (!thema || !karte) return null;
    return { id, mcTopic: a, topic: `Multicheck Dojo: ${thema.name}`, year: karte.text.replace(/\s+/g, ' ').slice(0, 70) };
  }
  return null;
}
