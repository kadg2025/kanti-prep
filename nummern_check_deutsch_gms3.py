# nummern_check_deutsch_gms3.py
# Vergleicht Aufgabennummern und Punktzahlen der Deutsch-GMS3-Prüfungen
# mit den Einträgen in app/lib/gms3/deutsch/<jahr>.js.
#
# Quelle PDF : Deutsch/<Prüfungsdatei>.pdf (Textebene, pymupdf)
#              Nummer und Punktzahl stehen auf derselben Zeile: die Nummer
#              in der linken Randspalte, die Punktzahl rechts vor dem «│».
# Quelle App : questionText, Muster «Aufgabe N (X Punkte)»
#
# Aufruf: python nummern_check_deutsch_gms3.py
# Ändert nichts, schreibt nur einen Bericht auf die Konsole.

import io
import os
import re
import sys

try:
    import pymupdf
except ImportError:
    sys.exit('pymupdf fehlt: pip install pymupdf')

SRC = os.path.join('app', 'lib', 'gms3', 'deutsch')
PDF_DIR = 'Deutsch'

# Jahr -> Sprachprüfung in Deutsch/ (die Schreibaufgabe hat keine Nummern)
PDFS = {
    2016: 'AP16_D_GMS3_Pruefung.pdf',
    2017: 'AP17_D_GMS3_Prüfung.pdf',
    2018: 'AP18 GMS3 D.pdf',
    2019: 'AP19_GMS3_D_Prüfung.pdf',
    2020: 'AP20_GMS3_D_Prüfung.pdf',
    2021: 'AP21_GMS3_D_Prüfung.pdf',
    2022: 'AP22_GMS3_Deutsch_Prüfung.pdf',
    2023: 'AP23_GMS3_D_Prüfung.pdf',
    2024: 'AP24_GMS3_D_Sprachsprüfung.pdf',
    2025: 'AP25_GMS3_D_Sprachprüfung.pdf',
}

RE_NR = re.compile(r'(\d{1,2})\.')
RE_ZAHL = re.compile(r'\d+(?:[.,]\d+)?')
RE_APP = re.compile(r'Aufgabe\s+(\d{1,2})\s*\((\d+(?:[.,]\d+)?)\s*Punkte?\)')
RE_ID = re.compile(r"id:\s*'([^']+)'")

NR_MAX_X = 130.0     # linke Randspalte
BASIS_TOL = 4.0      # gleiche Zeile


def zahl(text):
    return float(text.replace(',', '.'))


def fmt(wert):
    if wert is None:
        return '?'
    return ('%g' % wert).replace('.', ',')


def pdf_aufgaben(pfad):
    """[(nr, punkte)] aus der Textebene des Prüfungs-PDF, in Dokumentreihenfolge."""
    doc = pymupdf.open(pfad)
    treffer = []
    for seite in doc:
        woerter = seite.get_text('words')
        mitte = seite.rect.width / 2

        nummern = [w for w in woerter
                   if RE_NR.fullmatch(w[4]) and w[0] < NR_MAX_X]
        punkte = []
        for i, w in enumerate(woerter):
            if not RE_ZAHL.fullmatch(w[4]) or w[0] <= mitte:
                continue
            folgt = woerter[i + 1][4] if i + 1 < len(woerter) else ''
            if folgt.startswith('Pt') or folgt.startswith('Punkt'):
                punkte.append(w)

        for n in nummern:
            for p in punkte:
                if abs(n[1] - p[1]) <= BASIS_TOL:
                    treffer.append((int(n[4][:-1]), zahl(p[4])))
                    break
    doc.close()
    return treffer


def app_aufgaben(jahr):
    """[(nr, punkte, id)] aus app/lib/gms3/deutsch/<jahr>.js."""
    pfad = os.path.join(SRC, '%d.js' % jahr)
    if not os.path.exists(pfad):
        return None
    quelle = io.open(pfad, encoding='utf-8').read()

    eintraege = []
    stellen = [(m.start(), m.group(1)) for m in RE_ID.finditer(quelle)]
    for i, (pos, kennung) in enumerate(stellen):
        ende = stellen[i + 1][0] if i + 1 < len(stellen) else len(quelle)
        m = RE_APP.search(quelle, pos, ende)
        if m:
            eintraege.append((int(m.group(1)), zahl(m.group(2)), kennung))
        else:
            eintraege.append((None, None, kennung))
    return eintraege


def pruefe(jahr):
    pdf_pfad = os.path.join(PDF_DIR, PDFS[jahr])
    if not os.path.exists(pdf_pfad):
        return None, None, ['PDF fehlt: %s' % pdf_pfad]

    im_pdf = pdf_aufgaben(pdf_pfad)
    if not im_pdf:
        return None, None, ['PDF liefert keine Aufgabennummern - nicht geraten']

    in_app = app_aufgaben(jahr)
    if in_app is None:
        return im_pdf, None, ['keine Datei %d.js' % jahr]

    pdf_map = dict(im_pdf)
    app_map = {}
    for nr, punkte, kennung in in_app:
        app_map.setdefault(nr, []).append((punkte, kennung))

    meldungen = []
    for nr, punkte, kennung in in_app:
        if nr is None:
            meldungen.append('%s: keine Aufgabennummer im questionText' % kennung)
        elif nr not in pdf_map:
            meldungen.append('%s: Aufgabe %d gibt es im PDF nicht' % (kennung, nr))
        elif punkte != pdf_map[nr]:
            meldungen.append('%s: Aufgabe %d mit %s Pt., PDF sagt %s Pt.'
                             % (kennung, nr, fmt(punkte), fmt(pdf_map[nr])))

    fehlend = [nr for nr, _ in im_pdf if nr not in app_map]
    if fehlend:
        meldungen.append('kein App-Eintrag zu Aufgabe %s'
                         % ', '.join(str(n) for n in fehlend))

    for nr, liste in sorted(app_map.items(),
                            key=lambda e: (e[0] is None, e[0])):
        if nr is not None and len(liste) > 1:
            meldungen.append('Aufgabe %d doppelt belegt: %s'
                             % (nr, ', '.join(k for _, k in liste)))

    return im_pdf, in_app, meldungen


def main():
    print('%-6s %-5s %-5s %-11s %s' % ('Jahr', 'PDF', 'App', 'Pt. App/PDF',
                                       'Abweichungen'))
    print('-' * 110)
    for jahr in sorted(PDFS):
        im_pdf, in_app, meldungen = pruefe(jahr)
        anzahl_pdf = len(im_pdf) if im_pdf else '-'
        anzahl_app = len(in_app) if in_app else '-'
        if im_pdf and in_app:
            summen = '%s/%s' % (fmt(sum(p for _, p, _ in in_app if p)),
                                fmt(sum(p for _, p in im_pdf)))
        else:
            summen = '-'
        print('%-6d %-5s %-5s %-11s %s' % (
            jahr, anzahl_pdf, anzahl_app, summen,
            '; '.join(meldungen) if meldungen else 'keine'))
    print('-' * 110)


if __name__ == '__main__':
    main()
