# AGENTS.md — ethereumclassic-com

The consumer and institutional portal for Ethereum Classic — wallets, exchanges,
mining, developer tools, markets, news, research, and the Olympia upgrade. It
routes visitors to real ETC activity rather than reimplementing it.

- **Domain:** ethereumclassic.com
- **Repo:** `ethereumclassic-com/landing-site` (public)
- **Branch:** work on `main`; it deploys.
- **Companion site:** ethereumclassic.org is the community and protocol-docs
  site. This one is the consumer gateway. Keep the split.

---

## Setup and commands

```bash
pnpm install            # install dependencies
pnpm dev                # dev server (http://localhost:3000)
pnpm build              # production build
pnpm start              # production server
pnpm lint               # ESLint
pnpm exec tsc --noEmit  # typecheck
```

**Validation before every commit:** `pnpm lint && pnpm exec tsc --noEmit && pnpm build`.

There is **no `test` script and no `typecheck` script** in `package.json`. Do not
assume either exists or invent a call to one. Typechecking goes through `tsc`
directly, as above.

**pnpm is the package manager**, pinned by `packageManager` in `package.json`.
`pnpm-lock.yaml` is the only lockfile — do not add a second one, and do not run
`npm install` here.

## Stack

Read from `package.json`; versions below are the major series actually in use.

| Layer | Technology | Version |
|-------|------------|---------|
| Runtime | Node.js | 24.x (`engines.node: 24.x`) — Active LTS, and Vercel's default runtime |
| Framework | Next.js | 16.x (App Router) |
| UI | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 12.x |
| Charts | Recharts | 3.x |
| Icons | Lucide React | 1.x |
| Package manager | pnpm | 10.x (`packageManager: pnpm@10.34.5`) |

No test runner and no Prettier config exist anywhere in the repo. Match
surrounding style by hand rather than trusting a gate that is not there.

## Structure

```
app/
  layout.tsx            → root layout: fonts, metadata, JSON-LD, nav, footer
  globals.css           → base styles, noise/grid overlays
  styles/tokens.css     → design tokens (light + dark)
  api/                  → route handlers: hashrate, pools, network, price, rates
  components/           → shared UI
    ui/                 → FadeIn, SectionDivider, Card, Button, Badge, Modal
    ecip1017/           → emission charts, era table, ECIP-1017 explainer
    homepage/           → homepage sections
  <section>/            → one directory per site section
    components/         → that section's components
    data/               → that section's data
lib/                    → cross-section data fetching and helpers
hooks/                  → client hooks
docs/                   → contributor documentation and site content data
public/llms.txt         → machine-readable site summary; keep in sync with copy
```

**Colocation rule:** section data lives in `app/<section>/data/*.ts` and is
imported by that section's pages. Only cross-section data belongs in `lib/`.
Components shared by two or more routes move to `app/components/`, not into
whichever route happened to need them first.

## Live data

The site fetches at request or build time; it is not fully static.

| Source | Module | Provides |
|---|---|---|
| Blockscout ETC | `lib/hashrate.ts` | network hashrate + multi-timeframe history |
| Blockscout ETC | `lib/pool-hashrate.ts` | per-pool share, from block attribution |
| Blockscout ETC | `lib/blockscout.ts` | blocks, chain statistics |
| CoinGecko | `lib/` price helpers | market data |

**Hashrate is derived, not reported.** Blockscout exposes no hashrate field: it
is block difficulty ÷ Blockscout's own `average_block_time` from `/stats`. Never
substitute a hardcoded block time — dividing by a fixed 13s put the site roughly
7% above what Blockscout reports for as long as it was there. `lib/hashrate.ts`
is the single implementation and route handlers delegate to it; a second copy in
`app/api/hashrate/route.ts` drifted exactly that way.

**Never hardcode a hashrate figure in prose.** Standing "200+ TH/s" and
"~185 TH/s" values went stale across a dozen files and had to be removed.

## Emission and eras

Block reward follows ECIP-1017: 5 ETC in Era 1, reduced 20% every 5,000,000
blocks. Era state is derived, never written down twice.

- `app/research/data/emission.ts` holds the math and
  `CURRENT_ERA_REFERENCE_BLOCK` — the single value to update when a fifthing
  lands.
- Anything holding a live block height calls `getEraForBlock` with it rather
  than reading the constant.
- Chart reference lines bind to keys exported from
  `app/research/data/fifthingChartData.ts`. A reference line pointed at a key
  that matches no data point renders nothing and raises no error, so verify
  rendered output rather than source.

Use the protocol subsidy in tables, never a block's total reward — a block total
includes transaction fees, which vary per block.

## Design system

- **Brand:** `--brand-green` — `#007a53` on light, brightened on dark
- **Theme-aware:** light and dark tokens both defined in `app/styles/tokens.css`.
  Never hardcode `text-white` or `text-black`; use `var(--text-primary)`,
  `var(--color-text-muted)`, `var(--border-default)`, `var(--panel)`.
- **Fonts:** Inter (body) + JetBrains Mono (code) via `next/font/google`
- **Cards:** `rounded-xl` on `var(--panel)` or `var(--bg-elevated)` with a
  border; hover brightens the border toward the brand green
- **Sections:** alternating background with `SectionDivider`
- **Animation:** `FadeIn` wrapper for staggered section reveals
- **EIP badges:** violet CSS variables, linked to `eips.ethereum.org`. The
  renderers are data-driven — adding an EIP to the array gives it the badge and
  link automatically. Verify in built output, not source.

## Content and positioning

- **ETC claim:** the only mature Proof-of-Work blockchain with native smart
  contracts, operating continuously since 2015, EVM-native and interoperable
  with the Ethereum ecosystem.
- **Forward-looking.** No fork debates, governance disputes, or historical
  controversy — that is the community site's territory, not this one's.
- **Olympia:** advances the execution layer through Dencun, Pectra and Fusaka,
  and carries that work into Glamsterdam. Do **not** claim "full Glamsterdam
  parity" — ECIP-1121 includes two of Glamsterdam's seven execution-layer EIPs;
  the rest are blocked on EIP-7928 and EIP-4788 dependencies, not on
  Proof-of-Stake grounds.
- **Activation:** targeted for 2027. The activation *block* is TBD.
- **Clients:** Fukuii is ETC's first native client. Core-Geth is a go-ethereum
  derivative — not native, not a plugin. Besu, Erigon, Ethrex, Go-Ethereum,
  Nethermind and Reth are ETC *plugins* — never "overlays". A plugin is not a
  client implementation and is never counted among built or shipped clients.
- **Governance:** the Olympia DAO makes binding decisions via OpenZeppelin
  Governor 5.x. Futarchy (ECIP-1117/1118) is an open signal layer and a
  Child-DAO, never binding.

**Consumer copy.** Everything a visitor reads is consumer-facing; internal and
development language must not reach the UI.

| Instead of | Write |
|---|---|
| "Product Suite" | "ETC Ecosystem" |
| "Vertically integrated products" | "Products designed to work together" |
| "Core infrastructure layer" | "Essential tools for ETC" |

**Never say:** "vertically integrated", "built by the same architect", or
"architecture" / "infrastructure" / "protocol" in a consumer headline. No
milestone numbers, phase references, or roadmap terminology in rendered content.

**Write timeless.** No "future work", "coming soon", "planned post-X", "not yet".
Describe what a thing is; put mutable status in a structured field such as a
badge or status property, so changing it later is one edit rather than a prose
hunt.

## Listing apps, exchanges, and pools

The ETC ecosystem has meaningful scam prevalence, so nothing is listed on
reputation alone.

- **Never add an app, exchange, or product without maintainer approval.** Some
  products are excluded by maintainer decision — ask before listing.
- Vetting: verifiable on-chain activity, a public team or established
  reputation, and a security review for anything handling funds.
- Where a partner has an affiliate link, use the affiliate URL already present
  in the codebase rather than the direct product URL. Do not add new ones
  without approval.
- Content adapted from ethereumclassic.org must be audited for dated
  information, dead projects, and fork or governance material before use.

## Boundaries

**Protected — do not modify without explicit approval**

- `app/styles/tokens.css`, `app/globals.css` — design tokens
- `app/layout.tsx` — root layout, fonts, metadata, JSON-LD
- `docs/timeline.yaml` — historical record read by seven source files; entries
  are dated events, not copy to refresh
- `docs/ETC-KNOWLEDGE.md` — content source of truth; corrections must be
  authoritative, not inferred
- `tsconfig.json`, `next.config.ts` — build configuration
- `LICENSE` — this repo's licensing posture is deliberate. Do not add or change one.

**Ask first**

- Redirects in `next.config.ts` — each stands in for a published URL; removing
  one turns a live link into a 404
- Response shapes in `app/api/*` — changing one breaks its client consumers
- News articles under `app/news/` — dated published records. Correct errors of
  fact; do not retro-edit them into current phrasing
- Dependency changes, `pnpm-lock.yaml`, and the Node version — route these to the `sentinel` agent

**Never**

- Commit `.env` files, credentials, or anything under `.local/`
- Cite a `.local/` path from a tracked file, or move private material into one
- Hardcode a hashrate, block reward, or era number that a derived value already provides

## Upstream sources of truth

Content here is downstream of specs that live elsewhere. When they disagree, the
spec wins and the site is corrected.

| Subject | Authority |
|---|---|
| ETC technical claims, clients, upgrades | `docs/ETC-KNOWLEDGE.md` |
| Olympia ECIPs (1111–1122) | the ECIPs repository |
| EIP contents and dependencies | `eips.ethereum.org` |
| Fukuii positioning and URLs | fukuii.com and `chippr-robotics/fukuii` |
| Chain state — height, difficulty, block reward | Blockscout |
