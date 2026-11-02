// Fragen für «Merkfähigkeit»: Piktogramme (pikto) und Text (merktext). Daten: merk_daten.mjs, merk_texte.mjs, merk_konfig.mjs.
import daten from './merk_daten.mjs';
import { TEXTE, BEISPIEL_TEXT, DOJO_TEXTE } from './merk_texte.mjs';
import { LERNZEIT } from './merk_konfig.mjs';

const AUFGABE_PIKTO = 'Wenn das Piktogramm am Anfang schon gezeigt wurde, wähle das Kästchen «JA» an. Wenn es am Anfang nicht gezeigt wurde, wähle das Kästchen «NEIN» an.';
const AUFGABE_TEXT = 'Zu Beginn des Tests wurde dir ein Text präsentiert. Nun zeigen wir dir jeweils 4 Aussagen zum Inhalt dieses Textes. Klicke jeweils das Kästchen mit der richtigen Antwort an.';

function pikto(id, r, extra = {}) {
  return {
    type: 'pikto', title: 'Piktogramme', instr: AUFGABE_PIKTO,
    lernen: r.lernen, items: r.items,
    answerText: 'Siehe die markierten Bilder.',
    why: 'Bilder, die du in der Lernphase gesehen hast, sind mit «JA» richtig. Alle anderen sind neu.',
    ck: 'm_pikto', topic: 'merk', id, ...extra,
  };
}

function textRunde(id, t, extra = {}) {
  return {
    type: 'merktext', title: 'Text', instr: AUFGABE_TEXT,
    text: t.text,
    items: t.fragen.map(fr => ({ frage: fr.frage, optionen: fr.optionen, correct: fr.richtig, beleg: fr.beleg, schluessel: fr.schluessel, why: `Im Text steht: «${fr.beleg}»` })),
    answerText: 'Siehe die markierten Antworten.',
    why: 'Unter jeder Frage steht der Satz aus dem Text, der die Antwort belegt.',
    ck: 'm_text', topic: 'merk', id, ...extra,
  };
}

const qs = [
  ...daten.runden.map((r, i) => pikto(`merk-${i + 1}`, r)),
  ...TEXTE.map((t, i) => textRunde(`merk-${3 + i}`, t)),
];
// Dojo: Kurzform ohne Ablenkung
const dojoQs = [
  ...daten.dojo.map((r, i) => pikto(`merk-d${i + 1}`, r, { dojo: true, showSec: LERNZEIT.dojoPikto })),
  ...DOJO_TEXTE.map((t, i) => textRunde(`merk-d${9 + i}`, t, { dojo: true, showSec: LERNZEIT.dojoText })),
];
const beispielPikto = pikto('merk-demo-1', daten.demo);
const beispielText = textRunde('merk-demo-2', BEISPIEL_TEXT);

const mf = { qs, dojoQs, beispielPikto, beispielText };
export default mf;
