// Multicheck IMS, Mathematik: eigener Fragenpool für das Dojo (neue Aufgaben, etwas schwieriger als die Themenfragen).
const B = { topic: 'mathe' };
const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "'");
let nr = 0;
const id = () => `mathe-d${++nr}`;

// Schätzaufgabe: richtiger Wert und fünf falsche Werte; die richtige Stelle wechselt.
const schaetz = (ck, text, richtig, falsch, why) => {
  const k = nr % 6;
  const opts = falsch.map(fmt); opts.splice(k, 0, fmt(richtig));
  return {
    type: 'mc', numeric: true, title: 'Schätzaufgabe', instr: 'Schätze die Lösung durch mathematische Überlegungen. Du musst nicht genau ausrechnen.',
    body: `<div class="big">${text}</div>`, options: opts.map(t => ({ t })), correct: k, time: 30, answerText: fmt(richtig), why, ck, ...B, id: id(),
  };
};
const rechne = (ck, titel, instr, text, accept, answerText, why, extra = {}) => ({
  type: 'input', ...extra, title: titel, instr, body: `<div class="big" style="font-size:17px;line-height:1.7">${text}</div>`, accept, answerText, why, ck, ...B, id: id(),
});
const RI = 'Gib das Resultat ohne Leerschläge und ohne Klammern ein.';
const TR = 'Der Taschenrechner ist erlaubt. Gib nur die Zahl ein.';
const gm = (ck, frage, opts, c, why) => ({
  type: 'mc', title: 'Geometrie', instr: 'Klicke die richtige Antwort an.', body: `<div class="big" style="font-size:17px">${frage}</div>`,
  options: opts.map(([t, w], i) => (i === c ? { t } : { t, why: w })), correct: c, answerText: opts[c][0], why, ck, ...B, id: id(),
});

export default [
  schaetz('est_mul', '480 * 520 =', 249600, [24960, 2496000, 249060, 259600, 246900],
    'Kernzahlen: 48 * 52 = 2496 (48 * 50 = 2400, dazu 48 * 2 = 96). Endnullen: 1 + 1 = 2. Resultat: <b>249\'600</b>.'),
  schaetz('est_mul', '1\'200 * 450 =', 540000, [54000, 5400000, 504000, 450000, 550000],
    'Kernzahlen: 12 * 45 = 540. Endnullen: 2 + 1 = 3. Also 540 mit 3 Nullen. Resultat: <b>540\'000</b>.'),
  schaetz('est_add', '58\'764 + 3\'997 =', 62761, [62751, 61761, 627610, 6276, 72761],
    'Gerundet: 58\'764 + 4\'000 = 62\'764. Es wurde 3 zu viel addiert, also − 3 = 62\'761. Einerziffer: 4 + 7 = 11, also endet das Resultat auf 1. Resultat: <b>62\'761</b>.'),
  schaetz('est_sub', '81\'206 − 7\'995 =', 73211, [73201, 73216, 72211, 732110, 7321],
    'Gerundet: 81\'206 − 8\'000 = 73\'206. Es wurde 5 zu viel abgezogen, also + 5 = 73\'211. Resultat: <b>73\'211</b>.'),
  schaetz('est_div', '4\'320\'000 / 600 =', 7200, [720, 72000, 7020, 6200, 8200],
    'Streiche zwei Nullen: 43\'200 / 6 = 7\'200. Resultat: <b>7\'200</b>.'),
  rechne('calc', 'Rechnen', RI, 'Berechne: 7 * 8 + 6 * (9 − 4) =', ['86'], '86', 'Punkt vor Strich, Klammer zuerst: 9 − 4 = 5. Dann 7 * 8 = 56 und 6 * 5 = 30. Zusammen: 56 + 30 = 86.', { num: true }),
  rechne('calc', 'Rechnen', RI, 'Berechne: 120 − 4 * 15 + 18 / 3 =', ['66'], '66', 'Punkt vor Strich: 4 * 15 = 60 und 18 / 3 = 6. Dann von links: 120 − 60 = 60, 60 + 6 = 66.', { num: true }),
  rechne('units', 'Einheiten', 'Berechne den Gesamtbetrag in der verlangten Einheit. Gib nur die Zahl ein.', 'Ergebnis in Metern (m): 2.5 km − 1\'350 m =', ['1150'], '1150', '2.5 km = 2\'500 m. Dann 2\'500 − 1\'350 = 1\'150 m.', { num: true }),
  rechne('units', 'Einheiten', 'Berechne den Gesamtbetrag in der verlangten Einheit. Gib nur die Zahl ein.', 'Ergebnis in Minuten (min): 2.5 h + 45 min =', ['195'], '195', '2.5 h = 150 min (2 h = 120 min, 0.5 h = 30 min). Dann 150 + 45 = 195 min.', { num: true }),
  rechne('order', 'Ordnen', 'Ordne die Grössen. Gib nur die Buchstaben ein.', 'A: 0.4 kg   B: 350 g   C: 500\'000 mg   D: 0.6 kg<br>Ordne vom Kleinsten zum Grössten. Schreibe die Buchstaben hintereinander (z. B. ABCD).', ['BACD'], 'B A C D',
    'Alles in g: A = 400, B = 350, C = 500 (1 g = 1\'000 mg), D = 600. Sortiert: B (350), A (400), C (500), D (600).', { letters: true }),
  rechne('percent', 'Prozent', TR, 'Ein Pullover kostet nach 15 % Rabatt CHF 85.–. Wie viel kostete er vorher (in CHF)?', ['100'], '100', 'Nach dem Rabatt zahlst du 100 % − 15 % = 85 % des alten Preises. 85 % entsprechen CHF 85.–, also sind 100 % genau CHF 100.–.', { num: true }),
  rechne('percent', 'Prozent', TR, 'Die Miete steigt von CHF 1\'200.– um 5 %. Wie hoch ist die neue Miete (in CHF)?', ['1260'], '1260', '10 % von 1\'200 sind 120, also sind 5 % genau 60. Neue Miete: 1\'200 + 60 = 1\'260.', { num: true }),
  rechne('text', 'Textaufgabe', TR, 'Ein Zug fährt eine Strecke von 96 km mit durchschnittlich 64 km/h. Wie viele Minuten dauert die Fahrt?', ['90'], '90', 'Zeit = Strecke / Geschwindigkeit = 96 / 64 = 1.5 h. 1.5 h entsprechen 90 Minuten.', { num: true }),
  rechne('text', 'Textaufgabe', TR, 'Drei Freunde teilen die Kosten gleichmässig: CHF 84.– für Pizza und CHF 30.– für Getränke. Wie viel zahlt jeder (in CHF)?', ['38'], '38', 'Gesamtkosten: 84 + 30 = 114. Pro Person: 114 / 3 = 38.', { num: true }),
  gm('geo_body', 'Welcher Körper hat eine quadratische Grundfläche und vier dreieckige Seitenflächen, die in einer Spitze zusammenlaufen?',
    [['Würfel', 'Falsch: Ein Würfel hat sechs quadratische Flächen und keine Spitze.'], ['Kegel', 'Falsch: Ein Kegel hat eine runde Grundfläche.'], ['Pyramide', ''], ['Zylinder', 'Falsch: Ein Zylinder hat zwei runde Deckflächen.']], 2,
    'Quadratische Grundfläche, vier Dreiecke und eine Spitze: Das ist eine vierseitige <b>Pyramide</b>.'),
  gm('geo_body', 'Wie viele Ecken hat ein Würfel?',
    [['6', 'Falsch: Ein Würfel hat 6 Flächen, aber mehr Ecken.'], ['8', ''], ['12', 'Falsch: 12 ist die Anzahl der Kanten.'], ['4', 'Falsch: Schon die Grundfläche hat 4 Ecken, dazu kommen 4 Ecken oben.']], 1,
    'Unten 4 Ecken, oben 4 Ecken: zusammen <b>8</b> Ecken (und 12 Kanten, 6 Flächen).'),
  rechne('geo_area', 'Geometrie', 'Berechne und gib nur die Zahl ein (Einheit: cm).', 'Berechne den Umfang U eines Rechtecks mit den Seiten a = 12 cm und b = 7 cm.', ['38'], '38 cm', 'Umfang des Rechtecks = 2 * (a + b) = 2 * (12 + 7) = 2 * 19 = <b>38 cm</b>.', { num: true }),
  rechne('geo_area', 'Geometrie', 'Berechne und gib nur die Zahl ein (Einheit: cm²).', 'Berechne den Flächeninhalt F eines Dreiecks mit der Grundseite g = 14 cm und der Höhe h = 5 cm.', ['35'], '35 cm²', 'Fläche des Dreiecks = g * h / 2 = 14 * 5 / 2 = 70 / 2 = <b>35 cm²</b>.', { num: true }),
];
