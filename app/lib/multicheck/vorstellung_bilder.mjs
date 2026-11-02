// Mini-Bilder für die Lernkarten (Frag Sensei) im Thema Vorstellungsvermögen.
// Ein Bild ist eine Beschreibung: { typ: 'seite' | 'oben' | 'netz' | 'wuerfel', ... }.
import { renderSeite, renderOben } from './raeumlich.mjs';
import { falten, sichtbar, renderNetz, renderWuerfel } from './netz.mjs';

export function renderBild(b) {
  if (b.typ === 'seite') return renderSeite(b.szene, b.richtung);
  if (b.typ === 'oben') return renderOben(b.szene, b.sel || null, null);
  if (b.typ === 'netz') return renderNetz(b.zellen);
  if (b.typ === 'wuerfel') return renderWuerfel(sichtbar(falten(b.zellen), b.ecke), b.ecke);
  return '';
}
