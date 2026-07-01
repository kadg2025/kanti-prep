// Kleine HTML-Helfer, um Brüche und Wurzeln in questionText wie in der
// gedruckten Prüfung darzustellen (echter Zähler/Nenner-Stapel, echter
// Wurzelstrich), statt als "1/3" oder "√(...)". Nur für questionText
// verwendbar, da dieses Feld über dangerouslySetInnerHTML gerendert wird —
// solution.steps[].content und tip rendern reinen Text, dort bitte
// weiterhin "1/3" bzw. "√(...)" schreiben.

export const frac = (num, den) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.15;margin:0 2px;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px 1px;">${num}</span><span style="padding:1px 3px 0;">${den}</span></span>`;

export const sqrt = (content) =>
  `<span style="display:inline-flex;align-items:flex-start;margin:0 1px;"><span style="font-size:1.1em;">√</span><span style="border-top:1.5px solid currentColor;padding:0 2px;margin-top:2px;">${content}</span></span>`;
