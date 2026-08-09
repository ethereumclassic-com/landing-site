# Brand assets — ethereumclassic.com

Design source for this site's shareable assets. Modeled on
`fukuii-project/fukuii-brand`, which is the fuller reference if you are adding a
category this directory does not yet cover.

```
brand/
  fonts/          vendored typefaces + scoped fontconfig
  logo/           etc-mark.svg — the source of truth for every mark on the site
  social/         Open Graph / Twitter card art (.svg source, .png artifact)
  scripts/        regeneration
```

## Regenerating

```bash
pnpm brand:og        # -> public/og.png
pnpm brand:icons     # -> public/icons/*, public/favicon.ico
pnpm brand:banners   # -> public/news/images/*
```

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
