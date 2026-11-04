// Multicheck IMS: Thema «Logik». Verbale Analogien (mc) und numerische Verarbeitungskapazität (numproc).
// Figurale Analogien folgen später mit Bildern; dafür gibt es noch keine Fragen.
import numerisch from './logik_numerisch';
import figural from './logik_figural';
import logikSchwer from './logik_schwer.mjs';
import dojoQs from './dojo_logik.mjs';

// Feste Reihenfolge der Antworten: Die richtige Antwort steht im Rohdatensatz zuerst
// und wird mit einer festen Umordnung (pro Frage verschieden) an eine andere Stelle gesetzt.
const ORDNUNG = [[2, 0, 4, 1, 3], [3, 1, 0, 4, 2], [1, 4, 2, 0, 3], [4, 2, 1, 3, 0], [3, 0, 2, 4, 1]];

function analogie(nr, a, b, c, optionen, why) {
  const ord = ORDNUNG[nr % ORDNUNG.length];
  const opts = ord.map(i => ({ t: optionen[i] }));
  return {
    type: 'mc',
    title: 'Verbale Analogien',
    instr: 'Finde die Beziehung zwischen den ersten zwei Wörtern. Wende sie auf das dritte Wort an und klicke das passende Wort an.',
    body: `<div class="big" style="font-size:17px">${a} zu ${b} wie ${c} zu ?</div>`,
    options: opts,
    correct: ord.indexOf(0),
    answerText: optionen[0],
    why,
    ck: 'l_verbal', topic: 'logik', id: `logik-${nr + 1}`,
  };
}

const thema = {
  id: "logik",
  name: "Logik",
  sub: "Analogien mit Wörtern und Bildern, Zahlen im Kopf",
  intro: "Du übst, Beziehungen zwischen Wörtern zu erkennen und mit Zahlen im Kopf zu rechnen. Dazu kommen Bildanalogien.",
  // Einleitung und Demo pro Unterthema (Schlüssel = Unterthema-ID).
  unterInfo: {
    figural: { intro: "In den nächsten Aufgaben sollst du erkennen, wie zwei Bilder logisch zusammengehören. Links siehst du drei Bilder. Die ersten beiden bilden ein Paar, sie haben eine bestimmte Beziehung zueinander. Welches der sechs Bilder rechts passt zum dritten Bild, so wie das zweite Bild zum ersten passt?" },
    verbal: { intro: "In den folgenden Aufgaben geht es darum, die Logik zwischen Wörtern zu erkennen und anzuwenden." },
    numerisch: {
      intro: "Zwei Reihen mit je einer Startzahl und Rechenschritten (nur + und –) laufen gleichzeitig. Die Zahlen erscheinen nacheinander und verschwinden wieder. Zuerst kommt die Startzahl oben, dann die Startzahl unten, danach abwechselnd die Rechenschritte. Am Ende erscheint ein «?» in einem der beiden weissen Felder. Gib die Zahl ein, die dort stehen müsste. <br><br><b>Musterbeispiel:</b> Oben: 1, +2, –1 gibt 2. Unten: 5, –1, –2 gibt 2. Beim «?» im oberen Feld wäre die Antwort 2.",
      demo: {
        type: 'numproc', title: 'Demo: Numerische Verarbeitungskapazität',
        instr: 'So läuft eine Aufgabe ab. Oben: 1, +2, –1. Unten: 5, –1, –2. Diese Demo zählt nicht für dein Resultat.',
        top: { start: 1, steps: [2, -1] }, bottom: { start: 5, steps: [-1, -2] }, ask: 'top', answer: 2, answerText: '2',
        why: 'Oben: Start 1, dann 1 + 2 = 3, 3 – 1 = 2. Unten: Start 5, dann 5 – 1 = 4, 4 – 2 = 2. Gefragt war das obere Feld: 2.',
        ck: 'l_num', topic: 'logik', id: 'logik-demo',
      },
    },
  },
  qs: [
    analogie(0, 'Hand', 'Finger', 'Fuss', ['Zehe', 'Schuh', 'Knie', 'Socke', 'Bein'], 'Die Finger sind die beweglichen Enden der Hand, die Zehen die der Füsse.'),
    analogie(1, 'Fisch', 'Wasser', 'Vogel', ['Luft', 'Nest', 'Feder', 'Baum', 'Flügel'], 'Der Fisch bewegt sich im Wasser, der Vogel in der Luft.'),
    analogie(2, 'Messer', 'schneiden', 'Stift', ['schreiben', 'Papier', 'Tinte', 'Schule', 'Bleistift'], 'Ein Messer ist ein Werkzeug zum Schneiden, ein Stift zum Schreiben.'),
    analogie(3, 'Hunger', 'essen', 'Durst', ['trinken', 'Wasser', 'Glas', 'Hitze', 'Flasche'], 'Hunger stillt man durch Essen, Durst durch Trinken. Es geht um das Bedürfnis und die passende Tätigkeit.'),
    analogie(4, 'Sommer', 'Winter', 'Tag', ['Nacht', 'Sonne', 'Woche', 'Morgen', 'Licht'], 'Sommer und Winter sind Gegensätze, ebenso Tag und Nacht.'),
    analogie(5, 'Orchester', 'Musiker', 'Wald', ['Baum', 'Holz', 'Weg', 'Wiese', 'Blatt'], 'Ein Orchester besteht aus Musikern, ein Wald aus Bäumen.'),
    analogie(6, 'Arzt', 'Patient', 'Lehrer', ['Schüler', 'Schule', 'Buch', 'Prüfung', 'Direktor'], 'Der Arzt behandelt den Patienten, der Lehrer unterrichtet den Schüler.'),
    analogie(7, 'Regen', 'nass', 'Feuer', ['heiss', 'Rauch', 'Holz', 'Asche', 'löschen'], 'Regen macht nass, Feuer macht heiss. Es geht um die Eigenschaft, die entsteht.'),
    analogie(8, 'Zug', 'Schiene', 'Schiff', ['Wasser', 'Hafen', 'Segel', 'Kapitän', 'Welle'], 'Der Zug fährt auf der Schiene, das Schiff auf dem Wasser.'),
    analogie(9, 'Problem', 'Lösung', 'Frage', ['Antwort', 'Sorge', 'Rätsel', 'Hilfe', 'Lösung'], 'Ein Problem wird gelöst, eine Frage beantwortet. Das Gegenstück zur Frage ist die Antwort.'),
    ...numerisch,
    ...figural,
    ...logikSchwer,
  ],
  dojoQs,
  konzepte: {
    "l_verbal": {"n":"Verbale Analogien","b":[["Analogie","Zwei Wortpaare haben dieselbe Beziehung: A zu B wie C zu D."],["Beziehung","Wie hängen die ersten zwei Wörter zusammen? Zum Beispiel Gegensatz, Teil von, Werkzeug und Zweck, Ursache und Wirkung, Oberbegriff."]],"bsp":["Sommer zu Winter wie Tag zu Nacht: Gegensatz.","Messer zu schneiden wie Stift zu schreiben: Werkzeug und Zweck.","Orchester zu Musiker wie Wald zu Baum: das Ganze und seine Teile."],"z":["Das erste Wortpaar","Das dritte Wort"],"s":["Sage die Beziehung in einem Satz: «Ein Messer ist zum Schneiden da.»","Setze das dritte Wort in denselben Satz: «Ein Stift ist zum … da.»","Prüfe jede Antwort mit diesem Satz.","Streiche Wörter, die nur zum Thema passen, aber nicht in den Satz."],"t":"Achte auf die Richtung. «Frage zu Antwort» ist etwas anderes als «Antwort zu Frage». Prüfe die Reihenfolge im Satz."},
    "l_fig": {"n":"Figurale Analogien","b":[["Bildpaar","Zwei Bilder, die eine Regel zeigen: A wird zu B."],["Regel","Das, was sich von A zu B ändert: Grösse, Füllung, Muster, Richtung, Spiegelung, Form, innen und aussen oder Anzahl."]],"bsp":["Grosser Kreis wird kleiner Kreis: Die Regel ist «kleiner».","Pfeil nach oben wird Pfeil nach rechts: Die Regel ist «90 Grad im Uhrzeigersinn drehen»."],"z":["Das Bildpaar A und B","Das dritte Bild C"],"s":["Was ändert sich von A zu B? Prüfe Grösse, Füllung, Muster, Richtung, Spiegelung, Form, innen und aussen, Anzahl.","Mache dasselbe mit C. Alles andere bleibt gleich.","Prüfe alle sechs Bilder einzeln.","Streiche Bilder, bei denen etwas nicht stimmt, bis eines übrig bleibt."],"t":"Falsche Bilder machen oft nur einen Teil der Regel richtig. Prüfe darum jede Eigenschaft einzeln."},
    "l_num": {"n":"Zahlen im Kopf behalten","b":[["Reihe","Eine Zahl mit ihren Rechenschritten, hier oben oder unten."],["Zwischenergebnis","Das Ergebnis nach einem Rechenschritt. Es ist der Startwert für den nächsten Schritt."]],"bsp":["Oben: 1, dann +2, dann –1 gibt 2.","Unten: 5, dann –1, dann –2 gibt 2."],"z":["Zwei getrennte Zwischenergebnisse im Kopf"],"s":["Merke die Startzahl oben und die Startzahl unten.","Rechne bei jedem Schritt sofort: Nur die betroffene Reihe ändert sich.","Wiederhole nach jedem Schritt das neue Zwischenergebnis der Reihe leise.","Beim «?» weisst du, welches Feld gefragt ist, und nennst das Zwischenergebnis dieser Reihe."],"t":"Mische die Reihen nicht. Die obere Zahl und die untere Zahl bleiben zwei getrennte Zahlen."}
  },
};

export default thema;
