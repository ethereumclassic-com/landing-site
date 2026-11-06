# Brand assets — ethereumclassic.com

Design source for this site's shareable assets. Modeled on
`fukuii-project/fukuii-brand`, which is the fuller reference if you are adding a
category this directory does not yet cover.

```
brand/
  fonts/          vendored typefaces + scoped fontconfig
    */static/     static instances for the generated cards and banners (derived, see below)
  logo/           etc-mark.svg — the source of truth for every mark on the site
  news/           the art every news article's banner is drawn on (.svg), and its palettes
  social/         Open Graph / Twitter card art (.svg source, .png artifact)
  scripts/        regeneration
```

## Regenerating

```bash
pnpm brand:og        # -> brand/social/*.png, and public/og.png
pnpm brand:og-fonts  # -> brand/fonts/{inter,jetbrains-mono}/static/*
pnpm brand:icons     # -> public/icons/*, public/favicon.ico
pnpm brand:banners   # -> brand/news/*
```

`pnpm brand:og` re-renders every SVG in `social/`, and `pnpm brand:og-fonts` every
static instance. Commit only the files whose source you changed: re-rendering an
unchanged source can still change a binary's bytes, and a binary diff with no
source change behind it is noise in review.

## Article cards and banners are drawn at build, not committed

Each news article gets two generated images, and no per-article image is committed:

| Image | Drawn by | Shown |
|---|---|---|
| Share card, 1200×630 | `app/news/[slug]/opengraph-image.tsx` through `lib/og-card.tsx` | link previews, the feeds, the article's structured data |
| Banner, 1600×800, one per page theme | `app/news/[slug]/banner-on-{light,dark}.png/` through `app/news/lib/banner.tsx` | the news cards and the head of the article page |

So a card always carries its article's current title. A card is the sitewide card with its copy layer
replaced: `social/og-news-base.svg` keeps the background, the circuit, the HUD and
the mark, and the article's eyebrow, headline, subline and chips are set in the same
type, sizes and positions as the sitewide card's copy.

A banner sits directly above the article's title in the markup, so it carries no
headline. It is `news/banner-base-on-{light,dark}.svg`, the substrate and chrome of
the category banners it replaced, with the article's own lockup on the center line:
the category glyph in a reticle, the article's `subject` from
`app/news/data/articles.ts` in the card's headline face, and a JetBrains Mono readout
of the ECIP, ECBP, EIP, BIP and SLIP numbers among its tags and its date. It is
inverted against the page, so the caller picks the file for the page's resolved
theme; `scripts/render-news-banners.py` says why the image cannot pick for itself.

next/og cannot read a variable font, so `scripts/instance-og-fonts.py` derives the
static weights the images use from `fonts/inter/InterVariable.ttf` and
`fonts/jetbrains-mono/JetBrainsMono[wght].ttf`. The headline
uses Inter's display optical size, because that is what librsvg draws the sitewide
card's 62px headline with: measured, both end "The Original" on the same pixel.

## Two marks, and they are not interchangeable

This is the distinction most likely to be got wrong, so it is stated first.

| Mark | File | Means |
|---|---|---|
| **Flat silhouette** | `brand/logo/etc-mark.svg` | **this website.** Header, footer, favicons, app icons, the OG card |
| **Faceted full-color diamond** | `public/etc-network/etc-diamond.png` | **the ETC network.** Chain selectors, token rows, network badges — the mark a wallet or dApp shows to mean "this chain" |

If the network mark also serves as the site logo it stops signaling the network
and just means "this page". The faceted greens also turn to mud below ~32px,
which is most of where an icon is actually seen.

`etc-mark.svg` ships `fill="currentColor"`. In a page, use
`app/components/ui/EtcMark.tsx`, which inlines it and therefore follows the
theme; an `<img>` cannot, because it gets its own document with no access to the
page's tokens. `public/brand/etc-diamond-flat.svg` is the same mark as a servable
URL for consumers that need one.

**The SVG is the source of truth.** The PNGs are build artifacts that happen to
be committed, because scrapers cannot read SVG for `og:image`. Editing a PNG
directly is always wrong — edit the SVG and re-run.

## Why the fonts are vendored

`brand/fonts/` carries Inter Variable and JetBrains Mono, plus a **hermetic**
`fonts.conf` that makes those files the only fonts a render can see.

This is not neatness. It is the bug the directory exists to prevent:

> The OG card was rendered and reviewed **four times in the wrong typeface**. The
> SVG asked for `Inter`; no family by that exact name is installed here (the
> installed family is `Inter Variable`). Fontconfig substituted **Noto Sans**
> silently, and because both are neo-grotesques the output looked entirely
> plausible. It was caught only by querying fontconfig for an exact family
> match — `fc-list : family | grep -ix inter` — after a substring grep had
> already returned 20 false hits.

Two guards now make that failure loud rather than silent:

1. `fonts.conf` excludes `/etc/fonts/fonts.conf` entirely, so a system font
   cannot win the match and no render depends on what a given machine happens to
   have installed. Verify with:
   `FONTCONFIG_FILE=brand/fonts/fonts.conf fc-list : family` — it should list
   exactly `Inter Variable` and `JetBrains Mono`.
2. `render-og.mjs` refuses to run at all if `FONTCONFIG_FILE` is unset.

The vendored render was confirmed **byte-identical** to a correct system-font
render, so pinning costs nothing in fidelity.

`install-fonts.sh` is optional and only needed to edit the SVG in a GUI. Both
families are SIL Open Font License; each `OFL.txt` sits beside its font, and the
installer copies them along, because the license must travel with the files.

## Typography

Matches the site, which loads both through `next/font/google` in
`app/layout.tsx`:

| Role | Family | Used for |
|---|---|---|
| Display / UI | **Inter** (`Inter Variable` locally) | everything on the card |
| Mono | **JetBrains Mono** | vendored for parity; not currently on the card |

The SVG asks for `Inter` first and `fonts.conf` maps it onto the vendored
variable family, so the source stays readable and matches what the browser gets.
The variable weight axis is honored by the renderer — verified by measuring ink
density across weights 400/500/700, which rises monotonically.

## Color

The card uses the **light theme** from `app/styles/tokens.css`. There is no
separate brand palette here; duplicating one is how the two drift apart.

| Token | Value | Note |
|---|---|---|
| `--background` | `#f8faf9` | |
| `--bg-elevated` | `#f1f5f3` | |
| `--brand-green` | `#007a53` | **light** value — never the dark `#00ffae` |
| `--text-primary` | `#0a0f10` | |
| `--text-muted` | `#5f6673` | |
| `--border-brand` | `rgba(0,122,83,0.25)` | card borders sit near this, at 0.32 |

## Relationship to the sibling brand repos

`olympiadao/olympia-brand` holds the canonical ETC diamond and a **dark** OG
template used by the DAO, treasury and futarchy sites. The mark here is that
same mark. The template is deliberately **not** reused — this card reproduces
ethereumclassic.com's own light hero, so a shared link looks like the site it
points at. See `social/README.md` for the full reasoning and the approaches that
were tried and rejected.
