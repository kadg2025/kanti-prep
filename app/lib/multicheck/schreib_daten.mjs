// Textschreiben (Multicheck IMS): Themen, Texte und Konstanten. Alles bleibt lokal im Browser.
export const TEXT_MIN = 20;     // Mindestlänge in Zeichen zum Abschicken
export const DOJO_MIN = 60;     // Mindestlänge im Schreib-Sprint

export const INTRO = 'Im Folgenden stehen dir verschiedene Themen zur Auswahl. Suche dir das Thema aus, welches dich am meisten interessiert. Formuliere dann einen Text, in dem du beschreibst, was du zu dem Thema denkst. Der Text muss keine bestimmte Länge haben, aber du kannst ihn nicht absenden, wenn er weniger als 20 Zeichen enthält.';
export const AUFGABE = 'In der Klappbox findest du eine Auswahl von vier verschiedenen Themen. Suche dir das Thema aus, welches dich am meisten interessiert, und schreibe einen Text dazu.';

// Drei Runden mit je vier Themen zur Auswahl
export const RUNDEN = [
  ['Ein Tag ohne Handy', 'Mein Lieblingsort', 'Was ich in zehn Jahren machen möchte', 'Eine Person, die ich bewundere'],
  ['Warum Pausen wichtig sind', 'Ein Fehler, aus dem ich gelernt habe', 'Wenn ich eine Stunde Lehrer wäre', 'Das beste Geschenk, das man machen kann'],
  ['Was Freundschaft für mich bedeutet', 'Eine Erfindung, ohne die ich nicht leben möchte', 'Wie ich mit Stress umgehe', 'Ein Ort, den ich gerne besuchen würde'],
];

export const CHECKLISTE = [
  'Hat mein Text einen klaren Anfang, einen Hauptteil und einen Schluss?',
  'Habe ich meine Meinung mit «weil» begründet?',
  'Habe ich mindestens ein Beispiel genannt?',
  'Habe ich den Text noch einmal laut gelesen?',
  'Habe ich Gross-/Kleinschreibung, «das/dass» und Satzzeichen geprüft?',
];

// Beispieltext zum Thema «Mein Lieblingsort» mit Markierung der Teile (art: anfang, haupt, grund, beispiel, schluss)
export const BEISPIEL = {
  thema: 'Mein Lieblingsort',
  teile: [
    { art: 'anfang', t: 'Mein Lieblingsort ist die alte Holzbrücke am Fluss in meinem Dorf.' },
    { art: 'haupt', t: 'Dort sitze ich fast jeden Nachmittag und schaue dem Wasser zu.' },
    { art: 'grund', t: 'Ich mag diesen Ort, weil es dort ruhig ist und ich in Ruhe nachdenken kann.' },
    { art: 'beispiel', t: 'Letzten Sommer habe ich dort für eine Prüfung gelernt. Nach einer Stunde konnte ich mir die Wörter viel besser merken als zu Hause.' },
    { art: 'haupt', t: 'Ausserdem treffe ich dort manchmal meine Freunde, und wir machen zusammen ein Picknick.' },
    { art: 'schluss', t: 'Deshalb möchte ich auch in zehn Jahren noch oft an diesen Ort zurückkehren.' },
  ],
};
export const BEISPIEL_ARTEN = {
  anfang: ['Anfang', '#bfdbfe'],
  haupt: ['Hauptteil', '#fde68a'],
  grund: ['Begründung', '#bbf7d0'],
  beispiel: ['Beispiel', '#fbcfe8'],
  schluss: ['Schluss', '#ddd6fe'],
};

// Dojo (Schreib-Sprint): andere Themen als oben, mit Anfangssatz
export const DOJO_THEMEN = [
  { thema: 'Mein Lieblingsessen', anfang: 'Am liebsten esse ich' },
  { thema: 'Ein perfekter Samstag', anfang: 'Ein perfekter Samstag beginnt bei mir mit' },
  { thema: 'Das Tier, das ich gern hätte', anfang: 'Wenn ich ein Tier haben dürfte, wäre es' },
  { thema: 'Ein Hobby, das ich empfehle', anfang: 'Ein Hobby, das ich weiterempfehle, ist' },
  { thema: 'Mein Weg zur Schule', anfang: 'Auf meinem Schulweg sehe ich jeden Tag' },
  { thema: 'Eine Reise, von der ich träume', anfang: 'Wenn ich verreisen könnte, würde ich fahren nach' },
  { thema: 'Was mich zum Lachen bringt', anfang: 'Am meisten muss ich lachen, wenn' },
  { thema: 'Mein Lieblingsfach', anfang: 'Mein Lieblingsfach ist' },
  { thema: 'Ein Film oder Buch, das ich mag', anfang: 'Ich finde dieses Buch oder diesen Film gut, weil' },
  { thema: 'Wie ich mich entspanne', anfang: 'Um mich zu entspannen, mache ich gern' },
  { thema: 'Ein Tag am See', anfang: 'Der Tag am See begann damit, dass' },
  { thema: 'Mein Rat an ein jüngeres Kind', anfang: 'Einem jüngeren Kind würde ich raten,' },
];
