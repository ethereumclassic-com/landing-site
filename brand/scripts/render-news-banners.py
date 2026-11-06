#!/usr/bin/env python3
"""
Generate the art every news article's banner is drawn on:
brand/news/banner-base-on-light.svg and brand/news/banner-base-on-dark.svg.

A banner is NOT a social card. An OG card is a standalone object a scraper shows
in a feed, so it carries a headline, a CTA and the URL. A banner is the art band
at the top of a news card, and of an article's own page, whose title, category
and date render directly below it -- repeating any of that in the image would
collide with the markup. So a banner inherits the OG card's *substrate and
instrument chrome* and drops its copy furniture.

What makes one article's banner its own is drawn at build, by
app/news/lib/banner.tsx: a reticle around the article's category glyph, the
article's subject beside it, and a readout of its identifiers and date. This
script draws only what every banner shares, so a new article needs no run of it.

Three things here are decisions rather than taste:

1. THE BANNER IS INVERTED AGAINST THE PAGE, and each palette is a SEPARATE FILE
   that the caller picks. A light page gets a dark banner and a dark page a
   light one, so the band reads as a distinct object -- the way a photograph
   would -- rather than as a washed-out continuation of the card.

   The obvious implementation is one file carrying both palettes behind
   `@media (prefers-color-scheme: ...)`, and it was built that way first. IT DOES
   NOT WORK HERE, for a reason worth writing down because it looks like it should:

     - An image cannot see the page's class, so the media query is the only
       theming channel available to it. That query tracks the OS.
     - The page does not track the OS. `app/layout.tsx` sets
       `defaultTheme="dark"`, which pins a visitor with no stored preference to
       dark REGARDLESS of their OS. `enableSystem` only adds "system" as a choice
       in the toggle; it does not make it the default.
     - So for a first-time visitor on a light OS: page dark, media query light,
       banner dark. Dark on dark -- exactly the failure the inversion exists to
       prevent.

   Verified, not reasoned: dumping the DOM with the OS forced light and forced
   dark returned `class="... dark"` both times. So the caller reads the resolved
   theme and asks for the banner drawn for that page, `banner-on-${theme}.png`.

2. ALPHAS ARE PER-PALETTE, AND THE LIGHT ONE NEEDS **MORE**. The OG card
   documents the opposite asymmetry -- a dark line on a light field reading
   stronger at equal alpha -- and that was carried in here and turned out to be
   wrong for this pairing. Measured side by side, `#007a53` at 0.11 over
   `#f8faf9` is markedly fainter than `#00ffae` at 0.16 over `#0a0f10`: mint on
   near-black is a much larger luminance jump than mid-green on off-white, so
   the low-alpha end of the two ramps is nowhere near equivalent. The light
   palette therefore runs roughly 1.4x the dark one. Trust the side-by-side
   render, not the inherited rule.

3. COLORS ARE WRITTEN AS LITERAL VALUES. next/og draws this file with resvg,
   which does not resolve CSS custom properties, and an unresolved var() in a
   presentation attribute falls back to the property's initial value -- the
   grain at opacity 1, covering the art. The palettes keep their names here and
   are substituted on the way out.

Geometry is constrained by how the banner is actually cropped, and the slots are
much wider than they are tall:

    a ~700px card at h-40 -> scale .875, ~60 units clipped top AND bottom
    a ~390px card at h-40 -> full height, ~40 units off each side

That leaves a survivable band of roughly y 130..270 -- 140 of the 400 units --
and a lockup no wider than about 600 of the 800. The circuit and the chrome
stop short of the center so the lockup has the band to itself, and the lockup
is HORIZONTAL, reticle beside the subject, both on the center line.

Run:  pnpm brand:banners
"""

import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "brand/news"

W, H = 800, 400

# ------------------------------------------------------------------- palettes
#
# Values are the site's own tokens from app/styles/tokens.css. The DARK banner
# uses the .dark block, the LIGHT banner the :root block -- no separate brand
# palette, because duplicating one is how the two drift apart.

DARK_BANNER = dict(  # shown on LIGHT pages
    g0="#0a0f10", g1="#131a18", g2="#0d1412",
    ink="#00ffae", ink2="#00c88a",
    tx="#ffffff", tm="#9ca3af", grid="#ffffff",
    a_grid="0.055", a_grain="0.035",
    a_t1="0.16", a_t2="0.26", a_t3="0.38",
    a_pad="0.20", a_pad2="0.30",
    a_hud="0.22", a_hud2="0.32", a_hud3="0.46",
    a_wash1="0.10", a_wash2="0.06", a_wash3="0.05",
    a_glyph="0.85", a_ret="0.30", a_ret2="0.46",
)

LIGHT_BANNER = dict(  # shown on DARK pages
    g0="#f8faf9", g1="#f1f5f3", g2="#eef3f1",
    ink="#007a53", ink2="#00503c",
    tx="#0a0f10", tm="#5f6673", grid="#000000",
    a_grid="0.10", a_grain="0.03",
    a_t1="0.17", a_t2="0.28", a_t3="0.42",
    a_pad="0.22", a_pad2="0.34",
    a_hud="0.26", a_hud2="0.36", a_hud3="0.50",
    a_wash1="0.09", a_wash2="0.05", a_wash3="0.04",
    a_glyph="0.78", a_ret="0.34", a_ret2="0.50",
)


# ------------------------------------------------------------------- ornament


def circuit() -> str:
    """PCB routing in three depth layers, 45-degree corners, via pads at the ends.

    Routes run inward from the four edges and stop short of the reticle, so the
    center stays clear for the glyph. Coordinates are hand-placed rather than
    generated: a random walk produces crossings and dead-ends that read as noise.
    """
    out = ['<g id="circuit">']

    # layer 1 (back) -- long single routes
    l1 = [
        "M0 68 L104 68 L116 56 L188 56 L236 56",
        "M0 344 L92 344 L104 356 L196 356 L252 356",
        "M800 92 L706 92 L694 104 L612 104 L556 104",
        "M800 320 L718 320 L706 308 L628 308 L572 308",
        "M148 400 L148 352 L160 340 L160 300",
        "M652 0 L652 44 L640 56 L640 96",
    ]
    for d in l1:
        out.append(
            f'<path d="{d}" fill="none" stroke="var(--ink)" stroke-opacity="var(--a-t1)" '
            'stroke-width="1.1" stroke-linejoin="round"/>'
        )
        x, y = _endpoint(d)
        out.append(_pad(x, y, 3.0, 1.0, "var(--a-pad)", "var(--a-t1)"))

    # layer 2 (mid) -- parallel bundles, the densest read
    for bx, by, sign in ((0, 150, 1), (800, 250, -1), (0, 262, 1), (800, 158, -1)):
        run = 96 if bx == 0 else -96
        for i, off in enumerate((-11, 0, 11)):
            y = by + off
            jog = 12 if i % 2 == 0 else -12
            d = (
                f"M{bx} {y} L{bx + run} {y} L{bx + run + (14 if bx == 0 else -14)} {y + jog} "
                f"L{bx + run + (58 if bx == 0 else -58)} {y + jog} "
                f"L{bx + run + (104 if bx == 0 else -104)} {y + jog}"
            )
            out.append(
                f'<path d="{d}" fill="none" stroke="var(--ink)" stroke-opacity="var(--a-t2)" '
                'stroke-width="1.2" stroke-linejoin="round"/>'
            )
        ex = bx + run + (104 if bx == 0 else -104)
        out.append(_pad(ex, by, 3.4, 1.2, "var(--a-pad2)", "var(--a-t2)"))
        _ = sign

    # layer 3 (front) -- short, brightest stubs that give the surface a near plane
    l3 = [
        "M60 208 L92 208 L104 196 L136 196",
        "M740 192 L708 192 L696 204 L664 204",
        "M300 372 L300 344 L312 332 L344 332",
        "M500 28 L500 56 L488 68 L456 68",
    ]
    for d in l3:
        out.append(
            f'<path d="{d}" fill="none" stroke="var(--ink)" stroke-opacity="var(--a-t3)" '
            'stroke-width="1.3" stroke-linejoin="round"/>'
        )
        x, y = _endpoint(d)
        out.append(_pad(x, y, 3.8, 1.4, "var(--a-t3)", "var(--a-t3)"))

    out.append("</g>")
    return "\n    ".join(out)


def _endpoint(d: str) -> tuple[float, float]:
    nums = re.findall(r"-?\d+\.?\d*", d)
    return float(nums[-2]), float(nums[-1])


def _pad(x, y, r, ri, a_ring, a_fill) -> str:
    return (
        f'<circle cx="{x}" cy="{y}" r="{r}" fill="none" stroke="var(--ink)" '
        f'stroke-opacity="{a_ring}" stroke-width="1.6"/>'
        f'<circle cx="{x}" cy="{y}" r="{ri}" fill="var(--ink)" fill-opacity="{a_fill}"/>'
    )


def hud() -> str:
    """Instrument chrome: viewport brackets, edge scales, registration crosses.

    Brackets sit on the safe-band corners rather than the artboard corners --
    an artboard bracket is sliced in half by the object-cover crop and then
    reads as a rendering fault rather than as chrome.
    """
    o = ['<g id="hud" fill="none" stroke="var(--ink)" stroke-linecap="square">']
    x0, y0, x1, y1, L = 48, 96, 752, 304, 22

    for (x, y, sx, sy) in ((x0, y0, 1, 1), (x1, y0, -1, 1), (x0, y1, 1, -1), (x1, y1, -1, -1)):
        o.append(
            f'<path d="M{x} {y + sy * L} L{x} {y} L{x + sx * L} {y}" '
            'stroke-opacity="var(--a-hud2)" stroke-width="1.4"/>'
        )

    # edge scales: a long tick every 5th, mirrored left and right
    for side, x in (("r", 770), ("l", 30)):
        d = -1 if side == "r" else 1
        for i in range(11):
            y = 120 + i * 16
            ln = 11 if i % 5 == 0 else 6
            a = "var(--a-hud2)" if i % 5 == 0 else "var(--a-hud)"
            o.append(f'<line x1="{x}" y1="{y}" x2="{x + d * ln}" y2="{y}" stroke-opacity="{a}" stroke-width="1"/>')

    # registration crosses, placed on grid intersections (48px pitch)
    for (x, y, a, s) in (
        (192, 96, "var(--a-hud3)", 1.1), (624, 144, "var(--a-hud3)", 1.1),
        (144, 288, "var(--a-hud2)", 1.0), (672, 336, "var(--a-hud)", 1.0),
        (288, 48, "var(--a-hud)", 1.0), (528, 352, "var(--a-hud2)", 1.0),
    ):
        o.append(
            f'<g stroke-opacity="{a}" stroke-width="{s}">'
            f'<line x1="{x - 7}" y1="{y}" x2="{x + 7}" y2="{y}"/>'
            f'<line x1="{x}" y1="{y - 7}" x2="{x}" y2="{y + 7}"/></g>'
        )
    o.append("</g>")
    return "\n    ".join(o)



# ------------------------------------------------------------------- substrate


def literal(svg: str, palette: dict) -> str:
    """Replace every var(--name) with the palette's value. A name the palette lacks fails loud."""

    def value(match: re.Match) -> str:
        key = match.group(1).replace("-", "_")
        if key not in palette:
            raise KeyError(f"no palette value for --{match.group(1)}")
        return palette[key]

    return re.sub(r"var\(--([a-z0-9-]+)\)", value, svg)


def substrate(palette: dict, on_page: str) -> str:
    svg = f"""<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!--
    The art every news article's banner is drawn on, for an article shown on a
    {on_page.upper()} page. Generated by brand/scripts/render-news-banners.py. Do
    not hand-edit: the next run overwrites it. Change the generator instead.

    Substrate and instrument chrome only. The reticle, the category glyph, the
    subject and the readout are drawn per article at build, by
    app/news/lib/banner.tsx, centered on y 200.
  -->
  <defs>
    <linearGradient id="ramp" x1="0" y1="0" x2="0" y2="{H}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="var(--g0)"/><stop offset="45%" stop-color="var(--g1)"/><stop offset="100%" stop-color="var(--g2)"/>
    </linearGradient>
    <radialGradient id="w1" gradientUnits="userSpaceOnUse" cx="400" cy="-120" r="920"
      gradientTransform="translate(400,-120) scale(1,0.28) translate(-400,120)">
      <stop offset="0%" stop-color="var(--ink)" stop-opacity="var(--a-wash1)"/><stop offset="62%" stop-color="var(--ink)" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="w2" gradientUnits="userSpaceOnUse" cx="150" cy="80" r="620"
      gradientTransform="translate(150,80) scale(1,0.30) translate(-150,-80)">
      <stop offset="0%" stop-color="var(--ink)" stop-opacity="var(--a-wash2)"/><stop offset="55%" stop-color="var(--ink)" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="w3" gradientUnits="userSpaceOnUse" cx="660" cy="300" r="520"
      gradientTransform="translate(660,300) scale(1,0.44) translate(-660,-300)">
      <stop offset="0%" stop-color="var(--ink2)" stop-opacity="var(--a-wash3)"/><stop offset="55%" stop-color="var(--ink2)" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0 H0 V48" fill="none" stroke="var(--grid)" stroke-opacity="var(--a-grid)" stroke-width="1"/>
    </pattern>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>

  <rect width="{W}" height="{H}" fill="url(#ramp)"/>
  <rect width="{W}" height="{H}" fill="url(#w1)"/>
  <rect width="{W}" height="{H}" fill="url(#w2)"/>
  <rect width="{W}" height="{H}" fill="url(#w3)"/>
  <rect width="{W}" height="{H}" fill="url(#grid)"/>
  <rect width="{W}" height="{H}" filter="url(#grain)" opacity="var(--a-grain)"/>

  <g id="ornament">
    {circuit()}
  </g>

  <g id="chrome">
    {hud()}
  </g>
</svg>
"""
    return literal(svg, palette)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    # Named for the page they belong ON, not for their own color, so the
    # caller's lookup is a direct `-on-${resolvedTheme}` substitution and
    # nobody has to remember which way the inversion runs.
    pages = (("light", DARK_BANNER), ("dark", LIGHT_BANNER))
    for on_page, palette in pages:
        path = OUT / f"banner-base-on-{on_page}.svg"
        path.write_text(substrate(palette, on_page))
        print(f"  {path.relative_to(ROOT)}  {path.stat().st_size:,}B")
    # The per-article lockup is drawn in the same colors, so it reads them from
    # here rather than from a second copy of the palettes.
    path = OUT / "banner-palettes.json"
    path.write_text(json.dumps({f"on-{on_page}": palette for on_page, palette in pages}, indent=2) + "\n")
    print(f"  {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
