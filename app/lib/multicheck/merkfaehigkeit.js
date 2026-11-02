// Multicheck IMS: Thema «Merkfähigkeit». Piktogramme merken und Text merken.
// Jede Runde: Lernphase, kurze Ablenkung (Koordinaten), Antwortphase. Die Dauer der Lernphase steht in merk_konfig.mjs.
import mf from './merk_fragen.mjs';

const thema = {
  id: "merk",
  name: "Merkfähigkeit",
  sub: "Piktogramme und Text merken",
  intro: "Du übst, dir Bilder und Texte zu merken. Jede Runde hat eine Lernphase, eine kurze Ablenkung und eine Antwortphase. Es gibt kein Zeitlimit bei den Antworten.",
  unterInfo: {
    pikto: {
      intro: "Dir werden gleich mehrere Piktogramme gezeigt. Merke sie dir. Später fragen wir dich, welche du schon gesehen hast.",
      antwortIntro: "Ganz am Anfang der Aufgaben wurden dir mehrere Piktogramme gezeigt. Nun zeigen wir dir wieder verschiedene Piktogramme. Einige wurden dir schon zu Beginn gezeigt, andere sind neu. Entscheide bei jedem Piktogramm, ob du es am Anfang schon gesehen hast oder nicht.",
      demo: mf.beispielPikto,
    },
    text: {
      intro: "Dir wird gleich ein Text gezeigt. Lies ihn aufmerksam und merke dir den Inhalt. Später fragen wir dich Aussagen zum Text.",
      antwortIntro: "Am Anfang der Aufgaben wurde dir ein Text gezeigt, den du dir merken solltest. Nun zeigen wir dir verschiedene Aussagen zum Inhalt dieses Textes. Du sollst entscheiden, welche Aussagen zum Text stimmen.",
      demo: mf.beispielText,
    },
  },
  qs: mf.qs,
  dojoQs: mf.dojoQs,
  konzepte: {
    "m_pikto": {"n":"Piktogramme merken","b":[["Piktogramm","Ein einfaches Bild, das für etwas steht, zum Beispiel ein Schiff."],["Alt und neu","Alt ist ein Bild aus der Lernphase. Neu ist ein Bild, das du dort nicht gesehen hast."]],"bsp":["Nenne jedes Bild in einem Wort: Schiff, Hund, Burg.","Verbinde die Bilder zu einer kurzen Geschichte: Der Hund fährt mit dem Schiff zur Burg."],"z":["Ruhe in der Lernphase"],"s":["Benenne jedes Bild in einem Wort.","Bilde Gruppen oder eine kurze Geschichte.","Achte auf ein Detail pro Bild.","Prüfe bei ähnlichen Bildern genau, ob es dasselbe Bild war.","Wenn du unsicher bist, entscheide nach deinem ersten Gefühl."],"t":"Neue Bilder können alten ähnlich sehen, zum Beispiel Auto und Lastwagen. Achte auf das genaue Bild."},
    "m_text": {"n":"Text merken","b":[["Kernsatz","Ein kurzer Satz, der den Inhalt eines Absatzes zusammenfasst."],["Beleg","Der Satz im Text, der eine Antwort bestätigt."]],"bsp":["Zahlen, Namen und Orte sind gute Fragen für die Prüfung. Merke sie dir gezielt.","Bilde pro Absatz einen Kernsatz."],"z":["Aufmerksames Lesen"],"s":["Lies ruhig und nicht zu hastig.","Merke dir Zahlen, Namen und Orte.","Bilde pro Absatz einen Kernsatz.","Frage dich: Wer, was, wann, wo, warum?"],"t":"Lies jede Antwort genau. Falsche Antworten klingen oft möglich, stehen aber nicht im Text."}
  },
};

export default thema;
