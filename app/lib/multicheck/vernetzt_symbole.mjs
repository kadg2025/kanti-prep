// Einfache Symbole (Inline-SVG aus Code) für die Teile im Thema «Vernetztes Denken».
const ST = 'stroke="#111" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"';
const svg = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" role="img" aria-hidden="true">${inner}</svg>`;

export const SYMBOLE = {
  brett: svg(`<rect x="3" y="13" width="34" height="14" rx="1" fill="#e0b97c" ${ST}/><path d="M8 18h10M22 22h12M10 23h6" fill="none" stroke="#8a6a3a" stroke-width="1.5" stroke-linecap="round"/>`),
  pfosten: svg(`<rect x="14" y="3" width="12" height="34" fill="#c99a5b" ${ST}/><path d="M18 9v12M22 18v14" fill="none" stroke="#8a6a3a" stroke-width="1.5" stroke-linecap="round"/>`),
  schraubeLang: svg(`<rect x="15" y="3" width="10" height="5" rx="2" fill="#bbb" ${ST}/><rect x="18" y="8" width="4" height="29" fill="#ddd" ${ST}/><path d="M18 14h4M18 19h4M18 24h4M18 29h4" stroke="#111" stroke-width="1.5"/>`),
  schraubeKurz: svg(`<rect x="15" y="9" width="10" height="5" rx="2" fill="#bbb" ${ST}/><rect x="18" y="14" width="4" height="17" fill="#ddd" ${ST}/><path d="M18 19h4M18 24h4M18 28h4" stroke="#111" stroke-width="1.5"/>`),
  leim: svg(`<path d="M13 15h14v19a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2z" fill="#f4f0e6" ${ST}/><path d="M17 15v-5l3-5 3 5v5" fill="#f4c20d" ${ST}/><rect x="15" y="21" width="10" height="8" fill="#fff" stroke="#111" stroke-width="1.5"/>`),
  akku: svg(`<rect x="4" y="9" width="23" height="11" rx="3" fill="#2e9e4f" ${ST}/><path d="M12 20h9l-2 15h-6z" fill="#444" ${ST}/><rect x="27" y="12" width="10" height="5" fill="#bbb" ${ST}/>`),
  schnur: svg(`<path d="M20 3v9M13 12c-7 9 1 23 7 23s14-14 7-23z" fill="none" ${ST}/>`),
  folie: svg(`<rect x="4" y="8" width="32" height="24" fill="#cfe8ff" ${ST}/><path d="M8 17q4-4 8 0t8 0 8 0M8 25q4-4 8 0t8 0 8 0" fill="none" stroke="#5b9bd5" stroke-width="1.5"/>`),
  sack: svg(`<path d="M13 6h14l5 7v19a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V13z" fill="#8b5a2b" ${ST}/><path d="M13 6l4 5h6l4-5" fill="none" ${ST}/>`),
  kies: svg(`<circle cx="12" cy="27" r="6" fill="#b0b0b0" ${ST}/><circle cx="26" cy="28" r="7" fill="#999" ${ST}/><circle cx="19" cy="16" r="6" fill="#c4c4c4" ${ST}/>`),
};
