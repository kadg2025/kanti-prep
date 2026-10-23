# -*- coding: utf-8 -*-
"""Prueft, ob die woertlichen Zitate in den Deutsch-GMS3-Aufgaben wirklich
im Pruefungs-PDF des jeweiligen Jahres stehen.

Gesucht wird in questionText, in den Optionen und in der solution
(intro, Schritt-Titel, Schritt-Inhalte, tip). Als Zitat gilt alles, was in
«...», „..." oder "..." steht. Zitate mit Auslassungen (...) werden an den
Auslassungen in Teilstuecke geteilt; geprueft werden Teilstuecke mit
mindestens MIN_WORTE Woertern.

Normalisiert werden Whitespace, Silbentrennung am Zeilenende und
Anfuehrungszeichen. Weil die PDFs Zeilennummern mitten in den Textfluss
setzen, wird zusaetzlich gegen eine Fassung ohne alleinstehende Zahlen
geprueft.

Aufruf:  python zitate_check_deutsch_gms3.py [jahr ...]
"""

import io
import os
import re
import sys

import pymupdf

BASIS = os.path.dirname(os.path.abspath(__file__))
JS_DIR = os.path.join(BASIS, 'app', 'lib', 'gms3', 'deutsch')
PDF_DIR = os.path.join(BASIS, 'Deutsch')

PDFS = {
    2016: ['AP16_D_GMS3_Pruefung.pdf'],
    2017: ['AP17_D_GMS3_Prüfung.pdf'],
    2018: ['AP18 GMS3 D.pdf'],
    2019: ['AP19_GMS3_D_Prüfung.pdf'],
    2020: ['AP20_GMS3_D_Prüfung.pdf'],
    2021: ['AP21_GMS3_D_Prüfung.pdf'],
    2022: ['AP22_GMS3_Deutsch_Prüfung.pdf'],
    2023: ['AP23_GMS3_D_Prüfung.pdf'],
    2024: ['AP24_GMS3_D_Sprachsprüfung.pdf', 'AP24_GMS3_D_Schreibaufgabe.pdf'],
    2025: ['AP25_GMS3_D_Sprachprüfung.pdf', 'AP25_GMS3_D_Schreibaufgabe.pdf'],
    2026: ['AP26_GMS3_Deutsch_Sprachprüfung.pdf', 'AP26_GMS3_Deutsch_Schreibaufgabe.pdf'],
}

MIN_WORTE = 4

RE_ID = re.compile(r"id:\s*'([^']+)'")
RE_ZITAT = re.compile(r'«([^»]{3,400})»|„([^“]{3,400})“|"([^"\n]{3,400})"')
RE_AUSLASSUNG = re.compile(r'\s*(?:…|\.\.\.)\s*')
RE_ZEILE = re.compile(r'\s*\[Z\.[^\]]*\]')


def normiere(text):
    """Whitespace, Silbentrennung am Zeilenende und Sonderzeichen vereinheitlichen."""
    t = text.replace('­', '')
    t = re.sub(r'-\s*\n\s*', '', t)                      # Silbentrennung
    t = t.replace('’', "'").replace('‘', "'")
    t = t.replace('‚', "'").replace('′', "'")
    t = re.sub(r'[«»“”„"]', '', t)
    t = t.replace('–', '-').replace('—', '-')
    t = t.replace(' ', ' ').replace(' ', ' ')
    t = re.sub(r'\s+', ' ', t)
    return t.strip().lower()


def pdf_text(jahr):
    teile = []
    for name in PDFS[jahr]:
        pfad = os.path.join(PDF_DIR, name)
        if not os.path.exists(pfad):
            continue
        doc = pymupdf.open(pfad)
        teile.append('\n'.join(seite.get_text() for seite in doc))
        doc.close()
    text = '\n'.join(teile).strip()
    return text or None


def ohne_zeilennummern(heu):
    """Fassung ohne alleinstehende Zahlen - die PDFs nummerieren die Textzeilen."""
    vorher = None
    while vorher != heu:
        vorher = heu
        heu = re.sub(r' \d{1,3} ', ' ', heu)
    return heu


def eintraege(jahr):
    """Jede Aufgabe als (id, Quelltext-Ausschnitt)."""
    pfad = os.path.join(JS_DIR, '%d.js' % jahr)
    src = io.open(pfad, encoding='utf-8', newline='').read().replace('\r\n', '\n')
    treffer = list(RE_ID.finditer(src))
    out = []
    for i, m in enumerate(treffer):
        ende = treffer[i + 1].start() if i + 1 < len(treffer) else len(src)
        out.append((m.group(1), src[m.start():ende]))
    return out


def zitate(block):
    """Alle Zitat-Teilstuecke eines Aufgaben-Blocks: (ganzes Zitat, Teilstueck)."""
    out = []
    for m in RE_ZITAT.finditer(block):
        ganz = m.group(1) or m.group(2) or m.group(3)
        ganz = RE_ZEILE.sub('', ganz).strip()
        for teil in RE_AUSLASSUNG.split(ganz):
            teil = teil.strip(' –-,;:')
            if len(teil.split()) >= MIN_WORTE:
                out.append((ganz, teil))
    return out


def pruefe(jahr):
    text = pdf_text(jahr)
    if not text:
        print('%d: PDF fehlt oder liefert keinen Text -> uebersprungen' % jahr)
        return None
    heu = normiere(text)
    heu2 = ohne_zeilennummern(heu)
    anzahl = 0
    fehlend = []
    for aufgabe_id, block in eintraege(jahr):
        for ganz, teil in zitate(block):
            anzahl += 1
            n = normiere(teil).rstrip('.,;:!? ')
            if n not in heu and n not in heu2:
                fehlend.append((aufgabe_id, teil, ganz))
    print('%d: %d Zitate geprueft, %d nicht gefunden' % (jahr, anzahl, len(fehlend)))
    for aufgabe_id, teil, ganz in fehlend:
        print('   %-42s %s' % (aufgabe_id, teil))
    return anzahl, fehlend


if __name__ == '__main__':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
    jahre = [int(a) for a in sys.argv[1:]] or sorted(PDFS)
    gesamt = offen = 0
    for jahr in jahre:
        e = pruefe(jahr)
        if e:
            gesamt += e[0]
            offen += len(e[1])
    print('\nSumme: %d Zitate, %d nicht gefunden' % (gesamt, offen))
