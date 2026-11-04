// Multicheck IMS, Englisch: eigener Fragenpool für das Dojo (neue Aufgaben, etwas schwieriger als die Themenfragen).
const B = { topic: 'englisch' };
const gap = (n, before, after, a, why) => ({
  type: 'gap', title: 'Grammar', instr: 'Fill in the gap. Stimmt der Satz schon, wähle «korrekt». Höchstens ein Wort.',
  before, prefix: '', after, accept: [a], answerText: a, why, ck: 'e_gram', ...B, id: `englisch-d${n}`,
});
const voc = (n, body, opts, c, why, wrong) => ({
  type: 'mc', title: 'Wortschatz', instr: 'Klicke das Wort an, das am besten passt.', body: `<div class="big" style="font-size:17px">${body}</div>`,
  options: opts.map((t, i) => (i === c ? { t } : { t, why: wrong[i] })), correct: c, answerText: opts[c], why, ck: 'e_voc', ...B, id: `englisch-d${n}`,
});
const dia = (n, titel, sit, bubbles, opts, c, why, wrong) => ({
  type: 'mc', title: 'Gesprächssituation: ' + titel, instr: 'Wähle die Frage oder Antwort, die zum Gespräch passt.',
  body: (sit ? `<div style="margin-bottom:6px">${sit}</div>` : '') + `<div class="chat">${bubbles.map(b => `<div class="bubble">${b}</div>`).join('')}<div class="bubble you">You: <i>(wähle unten)</i></div></div>`,
  options: opts.map((t, i) => ({ t, why: i === c ? null : wrong[i] })), correct: c, answerText: opts[c], why, ck: 'e_dial', ...B, id: `englisch-d${n}`,
});

export default [
  gap(1, 'I wish I', ' more money.', 'had', '«I wish» + Past Simple drückt einen unerfüllten Wunsch in der Gegenwart aus: I wish I had more money.'),
  gap(2, 'She suggested', ' to the cinema.', 'going', 'Nach «suggest» folgt die -ing-Form: She suggested going to the cinema.'),
  gap(3, 'The meeting has been put', ' until next week.', 'off', 'Phrasal Verb «put off» = verschieben. Im Passiv: has been put off.'),
  gap(4, 'This is the first time I', ' been to Scotland.', 'have', 'Nach «This is the first time» steht das Present Perfect: I have been.'),
  voc(5, 'The company decided to ______ the contract because the prices were too high.', ['cancel', 'withdraw', 'cease', 'quit', 'resign', 'dismiss'], 0,
    '«cancel a contract» = einen Vertrag auflösen oder absagen.',
    { 1: 'Falsch: «withdraw» braucht meist «from» (withdraw from a contract) oder meint «zurückziehen».', 2: 'Falsch: «cease» heisst «aufhören» und wird nicht mit einem Vertrag verbunden.', 3: 'Falsch: «quit» heisst «aufhören, verlassen» (quit a job).', 4: 'Falsch: «resign» bezieht sich auf die eigene Stelle (resign from a job).', 5: 'Falsch: «dismiss» heisst «entlassen» und bezieht sich auf Personen.' }),
  voc(6, 'Which English word means German «eventuell»?<br>______', ['eventually', 'possibly', 'finally', 'actually', 'hopefully', 'usually'], 1,
    '«possibly» = eventuell, möglicherweise. «eventually» heisst «schliesslich» (falscher Freund).',
    { 0: 'Falsch: «eventually» = schliesslich, am Ende.', 2: 'Falsch: «finally» = endlich, zuletzt.', 3: 'Falsch: «actually» = tatsächlich.', 4: 'Falsch: «hopefully» = hoffentlich.', 5: 'Falsch: «usually» = normalerweise.' }),
  voc(7, 'His ______ to learn languages quickly is amazing.', ['able', 'ability', 'ably', 'unable', 'abilities', 'enabled'], 1,
    'Nach «His» steht ein Nomen in der Einzahl, passend zu «is»: ability (Fähigkeit).',
    { 0: 'Falsch: «able» ist ein Adjektiv.', 2: 'Falsch: «ably» ist ein Adverb.', 3: 'Falsch: «unable» ist ein Adjektiv.', 4: 'Falsch: «abilities» steht in der Mehrzahl, aber danach folgt «is».', 5: 'Falsch: «enabled» ist eine Verbform.' }),
  voc(8, 'Which word does NOT belong to the group?', ['reply', 'answer', 'respond', 'retort', 'ask', 'rejoin'], 4,
    'reply, answer, respond, retort und rejoin bedeuten «antworten». «ask» heisst «fragen».',
    { 0: 'Falsch: «reply» = antworten, gehört zur Gruppe.', 1: 'Falsch: «answer» = antworten, gehört zur Gruppe.', 2: 'Falsch: «respond» = antworten, gehört zur Gruppe.', 3: 'Falsch: «retort» = scharf entgegnen, gehört zur Gruppe.', 5: 'Falsch: «rejoin» = erwidern, gehört zur Gruppe.' }),
  voc(9, "I can't ______ with my brother. We always argue.", ['get on', 'get over', 'get by', 'get away', 'get up', 'get off'], 0,
    '«get on with someone» = sich mit jemandem verstehen.',
    { 1: 'Falsch: «get over» = etwas überwinden.', 2: 'Falsch: «get by» = zurechtkommen.', 3: 'Falsch: «get away» = entkommen, wegkommen.', 4: 'Falsch: «get up» = aufstehen.', 5: 'Falsch: «get off» = aussteigen.' }),
  dia(10, 'Returning an item', 'Du willst eine Hose zurückgeben.', ['Shop assistant: «Do you have the receipt?»'],
    ['Yes, receipts are usually made of paper.', "No, I'm afraid I lost it. Is there any other way to prove I bought it here?", "I don't need a receipt. I need a refund, and fast!", 'I bought these trousers in 2019.'], 1,
    'Ehrlich antworten und höflich nach einer Lösung fragen.',
    { 0: 'Falsch: Antwortet nicht auf die Frage und wirkt witzig statt hilfsbereit.', 2: 'Falsch: Zu fordernd und unhöflich.', 3: 'Falsch: Beantwortet die Frage nach dem Kassenzettel nicht.' }),
  dia(11, 'Feedback', '', ['Teacher: «Your presentation was good, but you spoke a bit too fast.»'],
    ["That's your opinion. I think I was perfect.", 'Yes, I speak English and German.', "Thanks for the feedback. I'll try to slow down next time.", "No, I didn't speak at all."], 2,
    'Auf Kritik reagiert man offen: danken und sagen, was man ändern will.',
    { 0: 'Falsch: Wehrt die Kritik ab und wirkt unhöflich.', 1: 'Falsch: Hat nichts mit der Rückmeldung zu tun.', 3: 'Falsch: Das stimmt nicht, denn du hast ja eine Präsentation gehalten.' }),
  dia(12, 'Asking the way', 'Du suchst eine Apotheke und sprichst eine fremde Person an.', [],
    ["Where is the chemist's, quickly?", "Show me the way to the chemist's.", "Excuse me, could you tell me where the nearest chemist's is?", 'Chemists are shops where you can buy medicine.'], 2,
    'Bei fremden Personen fragst du höflich («Excuse me, could you tell me …»).',
    { 0: 'Falsch: Zu direkt und ohne Höflichkeitsformel.', 1: 'Falsch: Ein Befehl ist unhöflich.', 3: 'Falsch: Das ist eine Erklärung und keine Frage nach dem Weg.' }),
  dia(13, 'Making plans', '', ['Friend: «Shall we meet at six or at seven?»'],
    ['Yes, we shall.', 'Seven suits me better. I have football training until half past six.', 'We met at six last week.', "I'm meeting nobody at six or seven."], 1,
    '«Shall we … or …?» verlangt eine Wahl. Eine passende Antwort nennt die Wahl und einen Grund.',
    { 0: 'Falsch: «Yes» passt nicht zu einer Frage mit «or».', 2: 'Falsch: Die Zeit stimmt nicht, denn es geht um das nächste Treffen.', 3: 'Falsch: Klingt abweisend und beantwortet die Frage nicht.' }),
];
