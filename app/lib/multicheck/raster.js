// 3×3-Raster mit Achsen für die Koordinaten-Aufgaben (Multicheck IMS, Konzentration).
// spalte und zeile zählen im Bild: 0 bis 2, Spalte von links, Zeile von oben. Ein Feld ist rot.
// X-Achse unten 1, 2, 3 (von links nach rechts), Y-Achse links 1, 2, 3 (von unten nach oben).
export function renderRaster(spalte, zeile) {
  const x0 = 30, y0 = 6, z = 28;
  let s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 124" role="img" aria-hidden="true">';
  s += '<rect width="130" height="124" fill="#fff"/>';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const rot = c === spalte && r === zeile;
      s += `<rect x="${x0 + c * z}" y="${y0 + r * z}" width="${z}" height="${z}" fill="${rot ? '#e53935' : '#fff'}" stroke="#111" stroke-width="1.5"/>`;
    }
  }
  const t = 'font-family="sans-serif" font-size="11" fill="#111"';
  for (let i = 0; i < 3; i++) {
    s += `<text x="${x0 + i * z + z / 2}" y="${y0 + 3 * z + 13}" text-anchor="middle" ${t}>${i + 1}</text>`;
    s += `<text x="${x0 - 7}" y="${y0 + i * z + z / 2 + 4}" text-anchor="end" ${t}>${3 - i}</text>`;
  }
  s += `<text x="${x0 + 1.5 * z}" y="120" text-anchor="middle" ${t} font-weight="bold">X-Achse</text>`;
  s += `<text transform="translate(8 ${y0 + 1.5 * z}) rotate(-90)" text-anchor="middle" ${t} font-weight="bold">Y-Achse</text>`;
  return s + '</svg>';
}
