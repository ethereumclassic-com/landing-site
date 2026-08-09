#!/usr/bin/env python3
"""
Generate the news category banners in public/news/images/.

These are NOT social cards. An OG card is a standalone object a scraper shows in
a feed, so it carries a headline, a CTA and the URL. A banner is the art band at
the top of a news card whose own title, category and date render directly below
it -- repeating any of that in the image would collide with the card's markup.
So the banners inherit the OG card's *substrate and instrument chrome* and drop
its copy furniture entirely.

Two things here are decisions rather than taste:

1. THE BANNER IS INVERTED AGAINST THE PAGE, and each palette is a SEPARATE FILE
   that the component picks. A light page gets a dark banner and a dark page a
   light one, so the band reads as a distinct object -- the way a photograph
   would -- rather than as a washed-out continuation of the card.

   The obvious implementation is one file carrying both palettes behind
   `@media (prefers-color-scheme: ...)`, and it was built that way first. IT DOES
   NOT WORK HERE, for a reason worth writing down because it looks like it should:

     - An SVG in an `<img>` cannot see the page's class, so the media query is
       the only theming channel available to it. That query tracks the OS.
     - The page does not track the OS. `app/layout.tsx` sets
       `defaultTheme="dark"`, which pins a visitor with no stored preference to
       dark REGARDLESS of their OS. `enableSystem` only adds "system" as a choice
       in the toggle; it does not make it the default.
     - So for a first-time visitor on a light OS: page dark, media query light,
       banner dark. Dark on dark -- exactly the failure the inversion exists to
       prevent.

   Verified, not reasoned: dumping the DOM with the OS forced light and forced
   dark returned `class="... dark"` both times.

   Tailwind's `dark:` variant is not a way out either -- in Tailwind 4 it keys
   off `prefers-color-scheme` unless `@custom-variant dark` is declared, and this
   repo does not declare it (`app/globals.css` is protected, so adding it is not
   a wiring decision to make in passing).

   What is left is the component reading the resolved theme, which is what
   `NewsCardHero` now does. Two files per category, named for the page they
   belong on, so the lookup is `-on-${resolvedTheme}`.

2. ALPHAS ARE PER-PALETTE, AND THE LIGHT ONE NEEDS **MORE**. The OG card
   documents the opposite asymmetry -- a dark line on a light field reading
   stronger at equal alpha -- and that was carried in here and turned out to be
   wrong for this pairing. Measured side by side, `#007a53` at 0.11 over
   `#f8faf9` is markedly fainter than `#00ffae` at 0.16 over `#0a0f10`: mint on
   near-black is a much larger luminance jump than mid-green on off-white, so
   the low-alpha end of the two ramps is nowhere near equivalent. The light
   palette therefore runs roughly 1.4x the dark one. Trust the side-by-side
   render, not the inherited rule -- the OG card's version is true at ITS alphas
   and on ITS one background, and does not generalise.

Geometry is constrained by how the banner is actually cropped, and the slot is
much wider than it is tall. A placeholder carries no information, so it does not
earn a photograph's height: NewsCardHero gives a real image `h-52` and a
placeholder `h-32` (128px), which on a ~700px card is a 5.5:1 letterbox.

    desktop ~700px wide, h-32 -> scale .875, 127 units clipped top AND bottom
    mobile  ~390px wide, h-32 -> scale .49,  car full height, 8 units off each side

That leaves a survivable band of roughly y 130..270 -- 140 of the 400 units. A
vertically stacked lockup (glyph above wordmark) does not fit in it; the first
build stacked them and the wordmark fell outside the crop entirely. The lockup is
therefore HORIZONTAL, reticle beside wordmark, both on the center line.

Run:  pnpm brand:banners
"""

import pathlib
import re

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = pathlib.Path(__file__).resolve().parents[2]
FONT = ROOT / "brand/fonts/inter/InterVariable.ttf"
OUT = ROOT / "public/news/images"

W, H = 800, 400
CY = 200                   # center line; the crop is symmetric about it
R = 46                     # reticle radius, sized to the ~140-unit surviving band

# ---------------------------------------------------------------- text metrics

_cache: dict[int, tuple[dict, int]] = {}


def _metrics(weight: int):
    """Advance widths for one weight of the variable font, in units/em."""
    if weight not in _cache:
        f = instantiateVariableFont(TTFont(FONT), {"wght": weight}, updateFontNames=False)
        _cache[weight] = (f.getBestCmap(), f["hmtx"].metrics, f["head"].unitsPerEm)
    return _cache[weight]


def text_width(s: str, size: float, weight: int = 600, tracking: float = 0.0) -> float:
    """Rendered advance width in user units. `tracking` is in em, as CSS letter-spacing."""
    cmap, hmtx, upem = _metrics(weight)
    total = 0.0
    for ch in s:
        g = cmap.get(ord(ch))
        total += (hmtx[g][0] if g and g in hmtx else upem * 0.5) / upem * size
    # letter-spacing applies after every glyph including the last, which is what
    # browsers do -- the trailing space is real and must be counted for centering.
    return total + tracking * size * len(s)


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


def style_block(palette: dict) -> str:
    # Python identifiers use underscores; CSS custom properties are referenced
    # with hyphens. Emitting the raw key leaves every multi-word var undefined,
    # and an undefined var() in a presentation attribute falls back to the
    # property's INITIAL value -- so `opacity="var(--a-grain)"` silently became
    # opacity:1 and the grain covered the artwork. Failing loud would have been
    # kinder; it does not, so the translation happens here.
    decls = "".join(f"--{k.replace('_', '-')}:{v};" for k, v in palette.items())
    return f"<style>:root{{{decls}}}</style>"


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


def reticle(cx: float) -> str:
    """Tracking reticle around the category glyph -- the OG card's mark reticle,
    re-centerd and shrunk to banner scale."""
    o = ['<g id="reticle" fill="none" stroke="var(--ink)">']
    o.append(f'<circle cx="{cx:.1f}" cy="{CY}" r="{R}" stroke-opacity="var(--a-ret)" stroke-width="1.1"/>')
    o.append(f'<circle cx="{cx:.1f}" cy="{CY}" r="{R - 9}" stroke-opacity="var(--a-ret)" stroke-width="0.75" '
             'stroke-dasharray="3 7"/>')

    # cardinal ticks
    for dx, dy in ((0, -1), (0, 1), (-1, 0), (1, 0)):
        o.append(
            f'<line x1="{cx + dx * (R - 5):.1f}" y1="{CY + dy * (R - 5)}" '
            f'x2="{cx + dx * (R + 7):.1f}" y2="{CY + dy * (R + 7)}" '
            'stroke-opacity="var(--a-ret2)" stroke-width="1.3"/>'
        )

    # quadrant arcs at 45 degrees, the part that makes it read as tracking
    for a0 in (30, 120, 210, 300):
        o.append(
            f'<path d="{_arc(cx, CY, R + 13, a0, a0 + 30)}" stroke-opacity="var(--a-ret)" stroke-width="1.2"/>'
        )
    o.append("</g>")
    return "\n    ".join(o)


def _arc(cx, cy, r, a0, a1) -> str:
    import math
    x0, y0 = cx + r * math.cos(math.radians(a0)), cy + r * math.sin(math.radians(a0))
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy + r * math.sin(math.radians(a1))
    return f"M{x0:.2f} {y0:.2f} A{r} {r} 0 0 1 {x1:.2f} {y1:.2f}"


# -------------------------------------------------------------------- content
#
# Glyphs are Heroicons v2 24-outline, matching the shield-check the previous
# banners already used, except Ecosystem: a generic globe says nothing a
# blockchain reader needs, so that one is a node graph drawn in the same
# 24-unit space and it echoes the circuit layer's via pads.

CATEGORIES = {
    "updates": (
        "Updates",
        '<path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183'
        'a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>',
    ),
    "security": (
        "Security",
        '<path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749'
        'c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152'
        'c-3.196 0-6.1-1.248-8.25-3.285Z"/>',
    ),
    "ecosystem": (
        "Ecosystem",
        '<path d="M12 12 12 4M12 12 4.7 8.2M12 12l7.3-3.8M12 12l-5 7.4M12 12l5 7.4"/>'
        '<circle cx="12" cy="3.2" r="1.9"/><circle cx="3.6" cy="7.6" r="1.9"/>'
        '<circle cx="20.4" cy="7.6" r="1.9"/><circle cx="6.4" cy="20.1" r="1.9"/>'
        '<circle cx="17.6" cy="20.1" r="1.9"/><circle cx="12" cy="12" r="2.4"/>',
    ),
    "community": (
        "Community",
        '<path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493'
        'M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21'
        'c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375'
        'a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0'
        'a2.625 2.625 0 0 1 5.25 0Z"/>',
    ),
    "development": (
        "Development",
        '<path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>',
    ),
}


def banner(slug: str, palette: dict, on_page: str) -> str:
    label, glyph = CATEGORIES[slug]

    # Horizontal lockup: [reticle] gap [wordmark], centerd as one unit.
    # Widths are measured from the vendored font rather than estimated -- the
    # trailing letter-space is real and browsers include it, so text-anchor
    # "middle" would sit the wordmark half a space left of true center.
    fs, track = 17.0, 0.20
    w = text_width(label.upper(), fs, weight=600, tracking=track)
    gap = 30
    lock_w = 2 * R + gap + w
    lock_x = (W - lock_w) / 2
    cx = lock_x + R                      # reticle center
    tx_start = lock_x + 2 * R + gap      # wordmark left edge
    ty = CY + fs * 0.35                  # optical centering on the center line

    # hairline continuing past the wordmark, echoing the OG card's measure rule
    rule_x0 = tx_start + w + 14
    rule_x1 = rule_x0 + 40

    gs = 2.00  # 24-unit glyph -> 48px, sized inside the smaller reticle

    return f"""<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{label}">
  <!--
    {label} — news category banner, for use on a {on_page.upper()} page.
    Generated by brand/scripts/render-news-banners.py. Do not hand-edit: the next
    run overwrites it. Change the generator instead.

    Inverted against the page on purpose, so the band reads as art rather than as
    a faded extension of the card beneath it. The palette is baked in rather than
    switched by a media query, because the page's theme does not follow the OS —
    see the generator's docstring. NewsCardHero picks the file from the resolved
    theme.

    Substrate and instrument chrome are the OG card's; the headline, CTA and URL
    are deliberately absent, because the news card renders its own title,
    category and date directly below this image.
  -->
  {style_block(palette)}
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
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--ink)" stop-opacity="0.09"/><stop offset="100%" stop-color="var(--ink)" stop-opacity="0"/>
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

  <circle cx="{cx:.1f}" cy="{CY}" r="{R + 62}" fill="url(#halo)"/>
  {reticle(cx)}

  <g transform="translate({cx - 12 * gs:.1f}, {CY - 12 * gs:.1f}) scale({gs})"
     fill="none" stroke="var(--ink)" stroke-opacity="var(--a-glyph)" stroke-width="1.6"
     stroke-linecap="round" stroke-linejoin="round">
    {glyph}
  </g>

  <text x="{tx_start:.1f}" y="{ty:.1f}" font-family="Inter, system-ui, sans-serif" font-size="{fs}"
        font-weight="600" letter-spacing="{track * fs:.2f}" fill="var(--ink)">{label.upper()}</text>
  <line x1="{rule_x0:.1f}" y1="{CY}" x2="{rule_x1:.1f}" y2="{CY}"
        stroke="var(--ink)" stroke-opacity="var(--a-hud2)" stroke-width="1"/>
</svg>
"""


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    # Named for the page they belong ON, not for their own color, so the
    # component's lookup is a direct `-on-${resolvedTheme}` substitution and
    # nobody has to remember which way the inversion runs.
    for slug in CATEGORIES:
        for on_page, palette in (("light", DARK_BANNER), ("dark", LIGHT_BANNER)):
            p = OUT / f"placeholder-{slug}-on-{on_page}.svg"
            p.write_text(banner(slug, palette, on_page))
            print(f"  {p.relative_to(ROOT)}  {p.stat().st_size:,}B")


if __name__ == "__main__":
    main()
