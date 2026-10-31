"""Generates the menu QR code (PNG + SVG) in ../qr/.
Usage:  python tools/make_qr.py   (requires: pip install segno)"""
from pathlib import Path
import segno

URL = "https://shufaikom.github.io/onity-grove-menu/"
OUT = Path(__file__).resolve().parent.parent / "qr"
OUT.mkdir(exist_ok=True)

# High error correction so the code still scans if a card gets scratched or stained.
qr = segno.make(URL, error="h")
qr.save(OUT / "onity-grove-menu-qr.png", scale=24, border=4, dark="#000000", light="#ffffff")
qr.save(OUT / "onity-grove-menu-qr.svg", scale=10, border=4, dark="#000000", light="#ffffff",
        title="Onity Grove menu — " + URL)
print("QR for", URL, "->", OUT)
