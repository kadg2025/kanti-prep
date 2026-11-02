// Multicheck IMS: Thema «Textschreiben». Freie Texte ohne automatische Bewertung.
// Themen, Texte und Konstanten: schreib_daten.mjs. Speichern: schreib_logik.mjs. Oberfläche: components/MulticheckSchreiben.js.
import { INTRO, AUFGABE, RUNDEN } from './schreib_daten.mjs';

const thema = {
  id: "schreiben",
  name: "Textschreiben",
  sub: "Gedanken formulieren",
  intro: "Du schreibst kurze Texte zu Themen, die du selbst wählst. Es gibt keine automatische Bewertung, und dein Text bleibt auf deinem Gerät.",
  unterInfo: {
    gedanken: { intro: INTRO },
  },
  qs: RUNDEN.map((themen, i) => ({
    type: 'freitext',
    title: 'Gedanken formulieren',
    instr: AUFGABE,
    themen,
    ck: 's_text', topic: 'schreiben', id: `schreiben-${i + 1}`,
  })),
  konzepte: {
    "s_text": {"n":"Gedanken formulieren","b":[["Einleitung","Der Anfang: Worum geht es?"],["Hauptteil","Deine Gedanken, Gründe und Beispiele."],["Schluss","Ein kurzes Fazit am Ende."]],"bsp":["Ich mag den Fluss, weil es dort ruhig ist. Letzten Sommer habe ich dort gelernt."],"z":["Ein Thema, zu dem dir viel einfällt"],"s":["Wähle das Thema, zu dem dir am meisten einfällt.","Sammle drei Stichwörter.","Schreibe Einleitung, Hauptteil und Schluss.","Begründe mit «weil» und gib ein Beispiel.","Lies den Text noch einmal laut."],"t":"Prüfe zum Schluss Gross- und Kleinschreibung, «das» und «dass» und die Satzzeichen."}
  },
};

export default thema;
