# Social share images

Open Graph and Twitter card art for ethereumclassic.com.

**The `.svg` is the source. The `.png` is a build artifact that happens to be
committed**, because scrapers cannot read SVG for `og:image`. Never edit a PNG
directly — edit the SVG and re-run:

```bash
pnpm brand:og
```

Fonts are vendored and pinned via a hermetic fontconfig — see `../README.md`.
The renderer refuses to run without it, because a missing family falls back
silently and the output looks plausible in the wrong typeface. That happened
here four times before it was caught.

---

## Specification

**1200 x 630 (1.91:1)** — the shared Open Graph and Twitter
`summary_large_image` target. Keep both in step with the declared dimensions in
`lib/seo.ts` (`OG_IMAGE`) and the root layout's `openGraph.images`. A
declaration that disagrees with the file is worse than no declaration: the
original art here was 1536x1024 while both places claimed 1200x630.

Current PNG is ~180KB, well inside the OG 8MB and Twitter 5MB limits, and small
enough that a scraper fetch is not a cost.

## Design decisions, and why

These were arrived at over several rounds. Recording them so they are not
re-litigated or "corrected" back.

### It is this site's theme, not the shared dark template

`olympia-brand/social/` holds a dark OG template (`#0e1614`, `#00ffae` neon,
circuit-trace corners) used by the sibling sites. This card deliberately does
**not** follow it. It reproduces ethereumclassic.com's own light hero instead,
so a shared link looks like the site it points at:

| | |
|---|---|
| Field | `#f8faf9` — `--background` |
| Ramp | `#f8faf9 -> #f1f5f3 -> #f8faf9`, matching `.hero-gradient` |
| Washes | the three radial greens from `.hero-gradient`, same positions |
| Grain | `feTurbulence` at 3%, matching `.noise-overlay` |
| Grid | 64px, matching `.grid-overlay` |
| Green | `#007a53` — the **light-theme** brand value, never the dark `#00ffae` |
| Text | `#0a0f10` / `#5f6673` |

### The grid alpha is 0.10 here, not the page's 0.03

Deliberate, and measured. At `0.03` a 1px line differs from the field by
**4/255** in the render, which disappears entirely once a feed scales the card
down. `0.10` gives a delta of 13 — same 64px pitch and colour, enough contrast
to survive. Do not "restore" it to match the CSS.

### Ornament is a circuit substrate under HUD chrome

Two layers with different jobs:

- **Circuit** (`#circuit`) — PCB routing: axis runs joined by 45-degree corners,
  every path terminating in a via pad. Drawn at **three alphas (0.11 / 0.19 /
  0.30)**. The layering is the point: it is what produces the floating parallax.
  A single flat alpha reads as a drawing however good the geometry is.
- **HUD** (`#hud`) — instrument chrome: tracking reticle on the mark, viewport
  corner brackets, edge scales, registration crosses on grid intersections.

The circuit is masked off the headline so type stays crisp, and sits beneath the
HUD because it is the substrate the HUD is reading.

Earlier attempts that were rejected, so they are not tried again: a hand-placed
node polygon (read as a drawn octagon, not a network), isometric cubes (read as
clipart), and a particles.js-style proximity field (better, but still discrete
objects sitting on the card rather than a surface).

### No live figures, ever

Every value is permanent: `ETChash`, `GPU + ASIC`, `Chain ID 61`. The homepage
hero shows network hashrate in the same position and that is **deliberately
omitted here**. An OG image is cached by scrapers effectively indefinitely, so a
hashrate or price baked in goes stale with no signal that it happened. This is
the same reasoning as AGENTS.md's rule against hardcoding a hashrate in prose,
applied to an asset that is far harder to correct after the fact.

### Measured, not estimated

Two sizes came from rendering the text and scanning for its ink extent:

- Eyebrow pill: **275px** (text ink ends at 256, plus 19px right padding to
  mirror the dot's inset). It was 330 and carried 55px of dead space.
- Chip row: **3 x 158 + 2 x 14 = 502px**, against the measured 503px of
  "Ethereum Virtual", so the row terminates on the headline's right edge.

If you change the copy, re-measure. Character-count arithmetic was off by ~20px
on the pill.

### Surfaces are white with a brand-green border

Chips and the eyebrow pill were `#f1f5f3` on `#e2e8f0` — a fill *darker* than
the field, so they sank into it. They are now `#ffffff` with `#007a53` at 0.32.
The white fill is what makes the border read as elevation rather than outline.

## Adding another card

Copy the SVG, change the content layer, keep the background stack and the
ornament layers. Re-run the render script. If it is for a specific route, wire
it in that route's `openGraph.images` rather than replacing the sitewide default.
