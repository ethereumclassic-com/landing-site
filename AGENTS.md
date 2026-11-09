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
    ui/                 → small building blocks shared across sections
    ecip1017/           → emission charts, era table, ECIP-1017 explainer
    homepage/           → homepage sections
  <section>/            → one directory per site section
    components/         → that section's components
    data/               → that section's data
lib/                    → cross-section data fetching and helpers
hooks/                  → client hooks
docs/                   → contributor documentation and site content data
scripts/                → data generators, run by hand (`node scripts/chain-history.mjs`, `node scripts/pool-history.mjs`)
app/llms.txt/           → machine-readable site summary, generated from the data it cites
```

**Every fixed URL is listed once, in `lib/site-routes.ts`, with its section and
label.** `app/sitemap.ts` reads it for search engines and adds the pages built
from data; `/site-map` reads both and fails its build if the sitemap lists a
page it does not. A new page goes into `lib/site-routes.ts`.

**Colocation rule:** section data lives in `app/<section>/data/*.ts` and is
imported by that section's pages. Only cross-section data belongs in `lib/`.
Components shared by two or more routes move to `app/components/`, not into
whichever route happened to need them first.

## Live data

The site fetches at request or build time; it is not fully static.

| Source | Module | Provides |
|---|---|---|
| Blockscout ETC | `lib/hashrate.ts` | network hashrate + multi-timeframe history |
| Blockscout ETC | `lib/pool-hashrate.ts` | per-pool share of the last 1,000 blocks, from block attribution |
| Blockscout ETC | `lib/blockscout.ts` | blocks, chain statistics |
| Blockscout ETC | `lib/chain-history.ts` | monthly block time, difficulty, hashrate, transactions and fees since 2015 |
| Blockscout ETC, NiceHash | `lib/network-security.ts` | the hashrate's rental cost, hourly block rewards, block production |
| CoinGecko, then Blockscout | `lib/exchange-rates.ts` | prices and market data |
| CoinGecko, Kraken | `lib/price-history.ts` | the price chart: CoinGecko up to a year back, Kraken weekly closes since 2016 |
| CoinGecko | `lib/exchange-volume.ts` | each listed exchange's 24h ETC volume, which orders the exchange listings |

**A figure no source supplies shows as "—", never as a typed stand-in.** When
CoinGecko cannot be reached, Blockscout's `/stats` supplies ETC/USD, its 24h
change and the market cap (it reads them from CoinGecko); anything else is null
and the page shows it as unavailable. No price, volume, block height or count
is kept in code for a page to fall back on.

**The monthly chain history is generated, not fetched per render.**
`app/research/data/chainHistory.ts` is written by `scripts/chain-history.mjs`,
which reads Blockscout one request at a time (it rate-limits bursts, and its
JSON-RPC takes at most five calls per batch). `lib/chain-history.ts` computes
any later complete month live. Blockscout's monthly block counts are short
about 133 hours of blocks in September 2023, so month boundaries are checked
against block timestamps rather than taken from those counts.

**Pool shares over time are generated the same way.**
`app/mining/data/pool-history.json` is written by `scripts/pool-history.mjs`,
which samples 50 consecutive blocks every 690 from Blockscout and records, for
each day, the blocks each miner address found. `lib/pool-history.ts` names the
addresses from `lib/pool-addresses.json` when the site builds, so an address
added there re-attributes its history without another run. Run the script with
no arguments to extend the file through yesterday (UTC).

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
  controversy, which is the community site's territory, not this one's. The one
  sanctioned exception is the Core-Geth security material: the v1.12-versus-v1.13
  facts and the `/build/clients/core-geth-security-audit` page, kept aligned to
  coregeth.com's restraint (document the facts, name no individual, attribute the
  work to Ethereum Classic's core developers), with the deeper narrative linked
  out to coregeth.com and ethereumclassicdao.org rather than carried here. The
  research and history articles are the other exception and belong here:
  `/research/dao-fork`, `/why-classic/genesis` and `/olympia/history` stay, as
  research and as the record of how the chain came to be (maintainer decision).
- **Naming.** "The DAO" is the 2016 organization behind the ETH/ETC split and
  nothing else: never write it for Olympia DAO or Ethereum Classic DAO. Name the
  LLC "Ethereum Classic DAO"; its legal name, Ethereum Classic DAO LLC, appears
  only where its legal identity is the point, as in ECIP-1114's naming of the
  legal wrapper. The mining algorithm is "Etchash" in prose; `ETCHASH` and
  `etchash` stay only where a miner's command line spells them.
- **The site's identity.** Describe ethereumclassic.com by its domain, its
  sources and its relationships, never as "official": Ethereum Classic is an
  open network that no organization speaks for. `lib/site-identity.ts` (what the
  site is and where its figures come from) and `lib/site-facts.ts` (facts other
  sources often state wrongly) feed the structured data, the About page and both
  llms files, so change them there.
- **Olympia is a proposal.** Its ECIPs are drafts and its activation block is
  TBD, so every sentence about it is in proposal voice ("would", "proposed"),
  and its state shows as `OLYMPIA_STATUS`, "Proposed · Draft ECIPs ·
  Activation block TBD". It is targeted for mainnet activation in 2027. The
  countdowns run to `OLYMPIA_PLACEHOLDER_ISO`, a placeholder target and never
  an activation date, whose label is derived from it in UTC. All three live in
  `app/olympia/data/olympia.ts`, and every countdown reads them there.
- **The Olympia ECIPs:** named by number and front-matter title, from
  `lib/olympia-ecips.ts`, which every surface imports. The ECIPs repository is
  the authority; ecips.ethereumclassic.org can show an older version of a
  draft. Read the section a sentence comes from when writing it, and describe
  ECIP-1113 onward by what each would do rather than restating its mechanics.
  ECIP-1122, 1123 and 1124 are not published, so no page cites them or carries
  their specifics. ECIP-1120 and ECIP-1130 are other authors' proposals and are
  not cited either.
- **EVM alignment:** Olympia advances the execution layer through Dencun,
  Pectra and Fusaka, and carries that work into Glamsterdam. Every EIP list,
  table and count comes from `lib/olympia-eips.ts`, generated from ECIP-1121's
  rows, and the one fork timeline is `app/olympia/components/ForkTimeline.tsx`.
  ECIP-1121 adopts part of Glamsterdam's set, so full Glamsterdam parity is
  never claimed.
- **Tooling:** never write that Ethereum tools work "without modification", or
  of "full JSON-RPC parity". ECIP-1111 §Motivation records that tooling assuming
  EIP-1559 needs an ETC-specific path today: Foundry passes `--legacy`.
- **Clients:** Core-Geth is the recommended client to run: an Ethereum Classic
  execution client and public-good Go reference client (never "the"), a
  go-ethereum downstream released and maintained in the `ethereumclassic` GitHub
  organization. Its core developers and community contributors do the work, and
  the Ethereum Classic DAO maintains and funds it today as its funder of last
  resort. coregeth.com leads its framing. Recommend the v1.13 line, never a
  patch; the v1.12 line is vulnerable. A node on a release older than v1.12.17
  (coregeth.com's `MOVE_FLOOR`, which `lib/core-geth-record.ts` mirrors) never
  scheduled Spiral, so it has followed an obsolete chain since block 19,250,000:
  it resyncs from scratch and installs the v1.13 line, and does not move in
  place. Links follow coregeth.com's own routing: a reader told to install a
  node lands on coregeth.com/downloads/, a reader moving a node on its migration
  guide, /guides/migrate/, a node below that floor on the guide's check of what
  a node runs, /guides/migrate/#check, and a v1.12 node that has to wait on
  /guides/discovery/ (`CORE_GETH_MIGRATE_GUIDE_URL`, `CORE_GETH_MOVE_CHECK_URL`
  and `CORE_GETH_DISCOVERY_GUIDE_URL`, built from the `GUIDE_PAGES` that
  `lib/core-geth-record.ts` mirrors). This site carries no copy of the install
  commands. The move steps are mirrored, never written by hand:
  `lib/core-geth-moves.ts` is generated from the move tabs on coregeth.com's
  /downloads/, which renders the same steps as its migration guide, for this
  site's walkthrough article. Change a step on coregeth.com, then mirror the
  published page again; a step the article names by title that the mirror loses
  fails the build. Core-Geth is not native and not a plugin. Fukuii, an execution client
  in Scala 3 that Chippr Robotics LLC maintains as a continuation of IOHK's
  Mantis, is an alternative to try: its maintainers mark it alpha, and it is not
  the recommended client and not Core-Geth's successor. fukuii.com and
  docs.fukuii.com lead its framing, and `lib/fukuii.ts` holds its copy and
  links. `fukuii-project/fukuii-cli` is a separate codebase
  whose descriptions never describe Fukuii here. Besu, Erigon, Ethrex,
  Go-Ethereum, Nethermind and Reth are ETC *plugins*, never "overlays" and never
  app cards of their own; the plugin framework's status is planned. A plugin is
  not a client implementation and is never counted among built or shipped
  clients. The distinction is ownership: a plugin adds Ethereum Classic support
  to a client another project maintains, so that codebase and the decisions
  about it stay with that project. A plugin is no substitute for Fukuii, an
  independent client, or for Core-Geth, a full implementation downstream of
  go-ethereum. Every page takes that wording from `PLUGIN_POSITION` in
  `app/build/data/build.ts`; say no more about what a plugin validates until the
  framework's own documentation states it.
- **Client URLs:** `/build/clients` and `/build/clients/<id>` name no upgrade,
  so every client link outside the Olympia hub (navigation, footer, apps,
  mining, llms files) goes there. `/olympia/clients` and its guides carry only
  Olympia readiness, and an `/olympia` link appears in the navigation only
  under the Olympia tab.
- **The Treasury and Olympia DAO:** read ECIP-1112 and ECIP-1113 when writing
  about them. The copy they retire includes an "immutable" Treasury with "no
  proxy", a separate executor contract, a five-stage rollout, a base fee
  credited "at block finalization", and futarchy as a "Child-DAO" or a "signal
  layer": ECIP-1117 specifies Ecosystem Growth DAOs, which Olympia DAO would
  fund by season and not govern. Protocol change stays with ECIP-1000.
- **Ethereum Classic DAO and Olympia:** the line ethereumclassicdao.org
  settled, read from ECIP-1114 §"Off-Chain Legal Interface and Donations".
  Ethereum Classic DAO is the legal wrapper ECIP-1114 contemplates for Olympia
  DAO, downstream of it in authority, with no on-chain role and no role in
  anything ECIP-1114 specifies until Olympia DAO is operating.
  `app/olympia/components/LegalWrapper.tsx` carries the long form. What
  Ethereum Classic DAO does today comes from coregeth.com: it maintains and funds
  the public goods as their funder of last resort, and does not control or lead
  Ethereum Classic.
- **Fee economics:** Ethereum Classic has no base fee before Olympia, so nothing
  is "discarded", and the base fee would go to the Treasury, so it does not
  "grow miner revenue". Observed fee figures come from Blockscout, never typed.
- **Regulation:** the CLARITY Act is pending, so ETC is "positioned for"
  classification or a "candidate", never "classified" or "qualifies". ETCG is a
  trust product, never an ETF. Classic USD is issued by Brale and "aligned with"
  MiCA and the GENIUS Act, never "compliant" and never "the first".
- **No hype and no superlatives:** not "most significant", "unmatched", "the
  premier" or "gold standard".

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
hunt. A client's current release is mutable status too, and no field keeps up
with it: never type its version. Name the line where a recommendation needs one
(`CORE_GETH_RECOMMENDED_LINE`), and link the release itself as
`releases/latest`. A version a fix first shipped in is history and stays.

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
- Exchange listings are ordered by live 24h ETC volume, the measure of how much
  of ETC's market an exchange carries. `featured` is an editorial choice, not a
  volume rank, so do not re-derive it from the figures.
- Every mining pool the site lists is in `app/mining/data/pools.ts`, the one
  list the mining hub, `/mining/pools` and the directory read. Fees and payout
  schemes are each pool's ETC terms as MiningPoolStats lists them, or as
  minerstat lists a pool MiningPoolStats does not; shares are never stored, and
  come from Blockscout block attribution. A pool's blocks are matched by its
  address in `lib/pool-addresses.json`, the miner of the last block
  MiningPoolStats credits to it; a pool that changes address drops out of the
  shares until the new one is added. A pool that has closed comes off the list;
  a new one needs approval like any listing.
- `/ecosystem` is the Ecosystem Directory: products that support ETC, checked
  before listing, with requests to the listings address. `/partners` is for real
  partners only: listed there once a partnership is agreed, and otherwise the way
  to reach the partnerships address. `/directory` is the Resource Directory.

## Boundaries

**Protected — do not modify without explicit approval**

- `app/styles/tokens.css`, `app/globals.css` — design tokens
- `app/layout.tsx` — root layout, fonts, metadata, JSON-LD
- `docs/timeline.yaml` — historical record read by seven source files; entries
  are dated events, not copy to refresh
- `docs/ETC-KNOWLEDGE.md` — content source of truth; corrections must be
  authoritative, not inferred
- `tsconfig.json`, `next.config.ts` — build configuration
- `package.json` — scripts and dependencies; a dependency change also routes to
  the `sentinel` agent (below)
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
- Hardcode a hashrate, block reward, era number, or exchange volume that a derived value already provides

## Upstream sources of truth

Content here is downstream of specs that live elsewhere. When they disagree, the
spec wins and the site is corrected.

| Subject | Authority |
|---|---|
| ETC technical claims, clients, upgrades | `docs/ETC-KNOWLEDGE.md` |
| Core-Geth facts, v1.12/v1.13, security, MESS | coregeth.com, docs.coregeth.com, and `ethereumclassic/core-geth` |
| Olympia ECIPs (1111–1122), and ECBP-1100/1110 (MESS) | the ECIPs repository |
| EIP contents and dependencies | `eips.ethereum.org` |
| Fukuii positioning, releases and URLs | fukuii.com, docs.fukuii.com, and `chippr-robotics/fukuii` with its `NOTICE` |
| Chain state, height, difficulty, block reward | Blockscout |
