// Multicheck IMS: Thema «Vernetztes Denken». Informationen aus Montageanleitung, Teileliste und
// Produktbeschreibung verbinden. Die Fragen werden aus den Szenario-Daten berechnet (vernetzt_fragen.mjs).
import vn from './vernetzt_fragen.mjs';

const INTRO = "Es werden dir verschiedene Aufgaben gestellt, die du mithilfe der Montageanleitung, der Teileliste und der Produktbeschreibung lösen kannst. Um die Fragen richtig zu beantworten, musst du in den Dokumenten nach Informationen suchen und diese miteinander kombinieren.<br><br><b>Hinweis:</b> Du musst die Dokumente nicht komplett lesen, sondern lediglich nach den relevanten Informationen durchsuchen.";

const thema = {
  id: "vernetzt",
  name: "Vernetztes Denken",
  sub: "Informationen aus mehreren Dokumenten verbinden",
  intro: "Du übst, Informationen in verschiedenen Dokumenten zu suchen und zu verbinden. Es gibt kein Zeitlimit.",
  unterInfo: {
    a: { intro: INTRO, demo: vn.beispiel },
    b: { intro: INTRO, demo: vn.beispiel },
  },
  qs: vn.qs,
  konzepte: {
    "n_info": {"n":"Informationen verbinden","b":[["Montageanleitung","Sie zeigt, in welchem Schritt welche Teile gebraucht werden. Die Teile stehen nur als Nummer da."],["Teileliste","Sie zeigt, wie viele Teile es insgesamt gibt. Auch hier stehen nur Nummern."],["Produktbeschreibung","Sie ist die einzige Liste mit den Namen. Dort stehen auch Masse und Verwendung."]],"bsp":["Wo wird der Holzleim gebraucht? Holzleim hat die Nummer 08. Nummer 08 steht in Montageschritt 3."],"z":["Alle drei Dokumente (über die Knöpfe oben)"],"s":["Suche den Namen in der Produktbeschreibung und merke dir die Nummer.","Suche die Nummer in der Montageanleitung oder in der Teileliste.","Rechne bei Bedarf: Mengen pro Schritt zusammenzählen oder Masse addieren.","Prüfe, ob deine Antwort zur Frage passt."],"t":"Lies nicht alles. Suche nur die Zeile, die du brauchst."}
  },
};

export default thema;
