"""Draws simple bottle illustrations for the beer list into ../assets/products/.
Usage:  python tools/make_beer_art.py
To use a real photo instead, put e.g. beer-castel.jpg in assets/products/
and change the item's `photo` in menu-data.js."""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "assets" / "products"
OUT.mkdir(parents=True, exist_ok=True)

GLASS = {"amber": ("#7a4310", "#a5611d"), "green": ("#1f5a2a", "#2f7d3c"), "dark": ("#1b1410", "#3a2a1e")}

BEERS = [  # slug, label text, glass, label colour, text colour
    ("33-export", "33 EXPORT", "amber", "#f3ead7", "#b3261e"),
    ("castel", "CASTEL", "amber", "#f2d36b", "#7a1f12"),
    ("mutzig", "MÜTZIG", "amber", "#14284b", "#e9d8b0"),
    ("beaufort-lager", "BEAUFORT", "amber", "#e9e4d6", "#1d3f7a"),
    ("beaufort-light", "BEAUFORT LIGHT", "amber", "#cfe3f3", "#1d3f7a"),
    ("isenbeck", "ISENBECK", "amber", "#f4f1ea", "#0f5132"),
    ("kadji", "KADJI", "amber", "#f0c419", "#5b1a10"),
    ("k44", "K44", "amber", "#111111", "#d6b97c"),
    ("harp", "HARP", "green", "#f2e6c4", "#1d3f7a"),
    ("guinness", "GUINNESS", "dark", "#f1e7d0", "#111111"),
    ("heineken", "HEINEKEN", "green", "#f4f1ea", "#1f6b30"),
    ("imported", "IMPORTED", "amber", "#d6b97c", "#111111"),
]

TPL = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="{text} bottle">
<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="{g1}"/><stop offset=".55" stop-color="{g2}"/><stop offset="1" stop-color="{g1}"/></linearGradient></defs>
<rect width="120" height="120" rx="14" fill="#17171a"/>
<ellipse cx="60" cy="113" rx="24" ry="3" fill="#000" opacity=".5"/>
<rect x="54" y="8" width="12" height="7" rx="1.5" fill="#d6b97c"/>
<path d="M55,14 L65,14 L65,38 C65,48 77,50 77,60 L77,106 Q77,112 71,112 L49,112 Q43,112 43,106 L43,60 C43,50 55,48 55,38 Z" fill="url(#g)"/>
<rect x="55" y="28" width="10" height="9" fill="{label}"/>
<rect x="43" y="68" width="34" height="28" fill="{label}"/>
<rect x="43" y="68" width="34" height="2" fill="#d6b97c"/><rect x="43" y="94" width="34" height="2" fill="#d6b97c"/>
<text x="60" y="85" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="{fs}" fill="{ink}" textLength="{tl}" lengthAdjust="spacingAndGlyphs">{text}</text>
<rect x="47" y="58" width="3" height="46" rx="1.5" fill="#fff" opacity=".18"/>
</svg>
"""

for slug, text, glass, label, ink in BEERS:
    g1, g2 = GLASS[glass]
    tl = min(30, 4.6 * len(text))
    fs = 7 if len(text) <= 9 else 5.5
    (OUT / f"beer-{slug}.svg").write_text(
        TPL.format(text=text, g1=g1, g2=g2, label=label, ink=ink, tl=tl, fs=fs), encoding="utf-8")
print(len(BEERS), "beer illustrations ->", OUT)
