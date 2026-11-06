#!/usr/bin/env python3
"""
Derive the static font instances the generated share cards and news banners
use, from the vendored variable fonts.

    python3 brand/scripts/instance-og-fonts.py      (or: pnpm brand:og-fonts)

Why static files exist at all: the cards under app/**/opengraph-image.tsx are
drawn by next/og, whose font parser cannot read a variable font. Handed
InterVariable.ttf it throws while reading the axis names. So each weight the
card uses is pinned here as its own file, derived from the variable fonts in
brand/fonts, which stay the files this directory takes from upstream. The news
banners' readout is set in JetBrains Mono, pinned the same way.

Why two optical sizes: the sitewide card in brand/social is rendered by
librsvg, which sets Inter's `opsz` axis from the type size. The 62px headline
therefore draws at opsz 32 (Inter Display) and the small text at opsz 14.
Measured, not assumed: a next/og render at opsz 32 ends "The Original" and
"Machine" on the same pixel as public/og.png, while opsz 14 runs about 5% wide.

The instances are subset to the characters a card can carry. A card that asks
for a character outside these ranges fails the build (lib/og-card.tsx), rather
than letting next/og fetch a fallback font from the network mid-build.

InterDisplay-Bold and JetBrainsMono-Medium also get an advance-width table
beside them. The card breaks and sizes a headline, and a banner sizes its
subject and readout, from those widths, the way the sitewide card's copy was
measured rather than estimated from character counts.

Requires fontTools. The outputs are committed, so a deploy never runs this.
"""
import json
import shutil
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parents[2]
INTER = ROOT / "brand/fonts/inter/InterVariable.ttf"
MONO = ROOT / "brand/fonts/jetbrains-mono/JetBrainsMono[wght].ttf"

# Keep in step with SUPPORTED_RANGES in lib/og-card.tsx.
RANGES = [
    (0x0020, 0x007E),  # Basic Latin
    (0x00A0, 0x00FF),  # Latin-1 Supplement
    (0x0100, 0x017F),  # Latin Extended-A
    (0x2010, 0x2027),  # dashes, quotes, bullet, ellipsis
    (0x2030, 0x203A),  # per mille, primes, angle quotes
    (0x20AC, 0x20AC),  # euro
    (0x2122, 0x2122),  # trade mark
    (0x2190, 0x2193),  # arrows
    (0x2212, 0x2212),  # minus
]

INSTANCES = [
    # source, file name, axis values
    (INTER, "Inter-Regular.ttf", {"wght": 400, "opsz": 14}),
    (INTER, "Inter-Medium.ttf", {"wght": 500, "opsz": 14}),
    (INTER, "Inter-SemiBold.ttf", {"wght": 600, "opsz": 14}),
    (INTER, "Inter-Bold.ttf", {"wght": 700, "opsz": 14}),
    (INTER, "InterDisplay-Bold.ttf", {"wght": 700, "opsz": 32}),
    (MONO, "JetBrainsMono-Medium.ttf", {"wght": 500}),
]

# The faces whose advance widths the templates measure text with.
MEASURED = {"InterDisplay-Bold.ttf", "JetBrainsMono-Medium.ttf"}


def main() -> None:
    unicodes = [cp for lo, hi in RANGES for cp in range(lo, hi + 1)]
    for src, name, axes in INSTANCES:
        out = src.parent / "static"
        out.mkdir(parents=True, exist_ok=True)
        font = instancer.instantiateVariableFont(TTFont(src), axes)
        options = subset.Options()
        options.layout_features = ["kern", "liga", "calt"]
        options.name_IDs = ["*"]
        options.notdef_outline = True
        subsetter = subset.Subsetter(options)
        subsetter.populate(unicodes=unicodes)
        subsetter.subset(font)
        path = out / name
        font.save(path)
        print(f"{path.relative_to(ROOT)}  {axes}  {path.stat().st_size // 1024}KB")
        if name in MEASURED:
            hmtx = font["hmtx"]
            table = {
                "unitsPerEm": font["head"].unitsPerEm,
                "advances": {str(cp): hmtx[glyph][0] for cp, glyph in sorted(font.getBestCmap().items())},
            }
            widths = out / name.replace(".ttf", ".advances.json")
            widths.write_text(json.dumps(table, separators=(",", ":")) + "\n", encoding="utf-8")
            print(f"{widths.relative_to(ROOT)}  {len(table['advances'])} code points")
        # The license travels with every copy of the font files.
        shutil.copyfile(src.parent / "OFL.txt", out / "OFL.txt")


if __name__ == "__main__":
    main()
