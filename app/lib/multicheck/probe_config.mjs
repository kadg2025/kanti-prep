// Probeprüfung (Multicheck IMS): Stationen, Aufgabenauswahl und Zeiten.
// ACHTUNG: Alle Zeiten sind GESCHÄTZT. Die echten Zeiten sind nicht bekannt. Die Zeiten stehen nur in dieser Datei.
// Die Auswahl ist fest (keine Zufallsziehung): Sie folgt den Regeln unten und der Reihenfolge der Dateien (leicht nach schwer).

export const VERSIONEN = {
  kurz: { name: 'Kurzversion', titel: 'Kurzversion (ca. 75 Min.)' },
  voll: { name: 'Vollversion', titel: 'Vollversion (ca. 3,5 Std.)' },
};

export const HINWEIS = 'Das ist eine Übung. Das Ergebnis ist kein offizielles Multicheck-Ergebnis.';

// Pause nach diesem Gebiet (Minuten, geschätzt)
export const PAUSE = { nach: 'mathe', minuten: 10 };

// Textschreiben: 15 Minuten in beiden Versionen
export const TEXT_MINUTEN = 15;

// art: merklern (Lernphase), aufgaben, merkantwort (Antwortteil), schreiben
// zeit: Minuten pro Version (geschätzt)
// auswahl: gemischt (reihum aus allen Unterthemen), proUnter (je n pro Unterthema), alle, ids (feste Liste)
export const STATIONEN = [
  { id: 'merklern', art: 'merklern', name: 'Merkfähigkeit', thema: 'merk', lernIds: { pikto: 'merk-1', text: 'merk-3' } },
  { id: 'deutsch', art: 'aufgaben', name: 'Deutsch', thema: 'deutsch', zeit: { kurz: 6, voll: 18 }, auswahl: { kurz: { art: 'gemischt', anzahl: 10 }, voll: { art: 'gemischt', anzahl: 30 } } },
  { id: 'englisch', art: 'aufgaben', name: 'Englisch', thema: 'englisch', zeit: { kurz: 6, voll: 18 }, auswahl: { kurz: { art: 'gemischt', anzahl: 10 }, voll: { art: 'gemischt', anzahl: 30 } } },
  { id: 'kurz', art: 'aufgaben', name: 'Kurzzeitgedächtnis', thema: 'kurz', zeit: { kurz: 4, voll: 12 }, auswahl: { kurz: { art: 'gemischt', anzahl: 8 }, voll: { art: 'alle' } } },
  { id: 'it', art: 'aufgaben', name: 'IT-Grundwissen', thema: 'it', zeit: { kurz: 6, voll: 18 }, auswahl: { kurz: { art: 'gemischt', anzahl: 8 }, voll: { art: 'alle' } } },
  { id: 'org', art: 'aufgaben', name: 'Organisationsfähigkeit', thema: 'org', zeit: { kurz: 6, voll: 18 }, auswahl: { kurz: { art: 'gemischt', anzahl: 8 }, voll: { art: 'gemischt', anzahl: 30 } } },
  { id: 'mathe', art: 'aufgaben', name: 'Mathematik', thema: 'mathe', zeit: { kurz: 8, voll: 24 }, auswahl: { kurz: { art: 'gemischt', anzahl: 10 }, voll: { art: 'gemischt', anzahl: 40 } } },
  { id: 'logik', art: 'aufgaben', name: 'Logik', thema: 'logik', zeit: { kurz: 8, voll: 24 }, auswahl: { kurz: { art: 'proUnter', anzahl: 3 }, voll: { art: 'gemischt', anzahl: 30 } } },
  { id: 'konz', art: 'aufgaben', name: 'Konzentration', thema: 'konz', zeit: { kurz: 2, voll: 6 }, auswahl: { kurz: { art: 'ids', ids: ['konz-1', 'konz-11'] }, voll: { art: 'alle' } } },
  { id: 'vorst', art: 'aufgaben', name: 'Vorstellungsvermögen', thema: 'vorst', zeit: { kurz: 6, voll: 18 }, auswahl: { kurz: { art: 'proUnter', anzahl: 3 }, voll: { art: 'alle' } } },
  { id: 'vernetzt', art: 'aufgaben', name: 'Vernetztes Denken', thema: 'vernetzt', zeit: { kurz: 5, voll: 15 }, auswahl: { kurz: { art: 'ids', ids: ['vern-1', 'vern-2', 'vern-3', 'vern-4', 'vern-5'] }, voll: { art: 'alle' } } },
  { id: 'merkantwort', art: 'merkantwort', name: 'Merkfähigkeit (Antwortteil)', thema: 'merk', zeit: { kurz: 4, voll: 12 }, auswahl: { kurz: { art: 'ids', ids: ['merk-1', 'merk-3'] }, voll: { art: 'ids', ids: ['merk-1', 'merk-3'] } } },
  { id: 'schreiben', art: 'schreiben', name: 'Textschreiben', thema: 'schreiben', zeit: { kurz: TEXT_MINUTEN, voll: TEXT_MINUTEN }, auswahl: { kurz: { art: 'ids', ids: [] }, voll: { art: 'ids', ids: [] } } },
];

// Aufgabentypen, die im Prüfungsmodus ohne Rückmeldung laufen (Antwort wird nur gespeichert)
export const PRUEFUNGS_TYPEN = ['mc', 'vmc', 'memchoice', 'memcolor', 'multi', 'input', 'gap', 'spell', 'plan', 'numproc', 'figmc', 'spatial', 'net', 'numcmp', 'coord', 'pikto', 'merktext'];
// Typen, bei denen es nur vorwärts geht (kein Zurückspringen)
export const VORWAERTS_TYPEN = ['memchoice', 'memcolor', 'numproc', 'numcmp', 'coord', 'pikto', 'merktext'];

// ─── Aufgabenauswahl ────────────────────────────────────────────────────────
// thema: Themenobjekt mit qs und unter (Unterthemen mit qs). Ergebnis in der Reihenfolge der Datei.
export function waehleAufgaben(thema, regel) {
  if (regel.art === 'alle') return thema.qs.slice();
  if (regel.art === 'ids') return regel.ids.map(id => thema.qs.find(q => q.id === id)).filter(Boolean);
  const listen = thema.unter.filter(u => !u.bald).map(u => u.qs);
  const gewaehlt = new Set();
  if (regel.art === 'proUnter') {
    listen.forEach(l => l.slice(0, regel.anzahl).forEach(q => gewaehlt.add(q)));
  } else if (regel.art === 'gemischt') {
    for (let r = 0; gewaehlt.size < regel.anzahl; r++) {
      let weiter = false;
      for (const l of listen) {
        if (r < l.length) { gewaehlt.add(l[r]); weiter = true; if (gewaehlt.size >= regel.anzahl) break; }
      }
      if (!weiter) break;
    }
  }
  return thema.qs.filter(q => gewaehlt.has(q));
}

// Alle Stationen einer Version mit Aufgaben und Zeit. themen: { id: Themenobjekt mit unter }
export function baueVersion(version, themen) {
  return STATIONEN.map(st => {
    const thema = themen[st.thema];
    const fragen = st.art === 'merklern' || !st.auswahl ? [] : waehleAufgaben(thema, st.auswahl[version]);
    return { ...st, minuten: st.zeit ? st.zeit[version] : 0, fragen };
  });
}

// Anweisungen der Unterthemen, aus denen die Aufgaben einer Station stammen (ohne Doppelte)
export function unterFuerFragen(thema, fragen) {
  const ids = new Set(fragen.map(q => q.id));
  const seiten = [], gesehen = new Set();
  for (const u of thema.unter.filter(x => !x.bald && x.qs.some(q => ids.has(q.id)))) {
    const html = u.intro || thema.intro;
    const schluessel = html + '|' + (u.demo ? JSON.stringify(u.demo.id || u.demo.items || u.demo.type) : '');
    if (gesehen.has(schluessel)) continue;
    gesehen.add(schluessel);
    seiten.push({ titel: u.name, html, demo: u.demo || null, unterId: u.id });
  }
  return seiten;
}
