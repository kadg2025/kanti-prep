// Unterthemen pro Multicheck-Thema: Gruppen von Fragen (höchstens 10).
// Die Fragen stehen in den Themen-Dateien; hier steht nur, welche Frage in welches Unterthema gehört.
// von/bis sind Nummern der Frage-IDs («mathe-27» = 27). Mehrere Bereiche sind erlaubt.
const u = (id, name, emoji, ...bereiche) => ({ id, name, emoji, bereiche });

export const UNTERTHEMEN = {
  deutsch: [
    u('rechtschreibung', 'Rechtschreibung', '✍️', [1, 10]),
    u('grammatik', 'Grammatik', '🧩', [11, 20]),
    u('textverstaendnis', 'Textverständnis', '📖', [21, 30]),
  ],
  englisch: [
    u('grammar', 'Grammar', '🔤', [1, 10]),
    u('wortschatz', 'Wortschatz', '📚', [21, 30]),
    u('gespraeche', 'Gesprächssituationen', '💬', [11, 20]),
  ],
  kurz: [
    u('zeichen1', 'Zeichen behalten, Teil 1', '🔤', [11, 20]),
    u('zeichen2', 'Zeichen behalten, Teil 2', '🔢', [21, 30]),
    u('farben', 'Farbkombinationen behalten', '🔴', [1, 10]),
  ],
  it: [
    u('scratch1', 'Scratch, Teil 1', '📜', [1, 8]),
    u('scratch2', 'Scratch, Teil 2', '🧭', [9, 17]),
    u('scratch3', 'Scratch, Teil 3', '🔁', [18, 22]),
    u('fluss', 'Flussdiagramme', '🔀', [23, 30]),
  ],
  org: [
    u('freiezeit', 'Freie Zeit berechnen', '⏱️', [9, 14]),
    u('termin', 'Termin einordnen', '🧱', [15, 20]),
    u('regeln', 'Planungsregeln und Bedingungen', '📏', [21, 30]),
    u('wochenplan', 'Wochenplan bauen', '🗓️', [1, 8]),
  ],
  mathe: [
    u('schaetzen1', 'Schätzen, Teil 1', '🎯', [1, 6]),
    u('schaetzen2', 'Schätzen, Teil 2', '🎯', [7, 12]),
    u('rechnen', 'Rechnen und Ordnen', '🧮', [13, 18], [24, 26]),
    u('geometrie', 'Geometrie', '📐', [35, 40]),
    u('einheiten', 'Einheiten', '📏', [19, 23]),
    u('prozent', 'Prozent und Textaufgaben', '％', [27, 34]),
  ],
  logik: [
    u('verbal', 'Verbale Analogien', '🔗', [1, 10]),
    { id: 'figural', name: 'Figurale Analogien', emoji: '🔷', bereiche: [], bald: true },
    u('numerisch', 'Numerische Verarbeitungskapazität', '🔢', [11, 20]),
  ],
};

// Fragen eines Themas den Unterthemen zuordnen.
export function mitUnterthemen(thema) {
  const nr = (q) => Number(q.id.split('-')[1]);
  const unter = (UNTERTHEMEN[thema.id] || []).map(x => ({
    ...x,
    ...((thema.unterInfo || {})[x.id] || {}),
    qs: thema.qs.filter(q => x.bereiche.some(([von, bis]) => nr(q) >= von && nr(q) <= bis)),
  }));
  return { ...thema, unter };
}
