# GitHub Copilot Instructions — ethereumclassic-com

Self-contained by design. Copilot reads `AGENTS.md` on some surfaces and not
others, and this is a public repo whose audience is not one person's toolchain,
so this file duplicates the context rather than pointing at it. Keep the two in
sync when either changes.

## Product

The consumer and institutional portal for Ethereum Classic — wallets, exchanges,
mining, developer tools, markets, news, research, and the Olympia upgrade. It
routes visitors to real ETC activity rather than reimplementing it.

ethereumclassic.org is the community and protocol-docs site. This is the consumer
gateway, the home of Ethereum Classic, in the relationship bitcoin.com has to
bitcoin.org. Keep the split.

**Success is downstream clicks, not time on site.**

## Stack

Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS 4 ·
Framer Motion 12 · Recharts 3 · Lucide React · Node.js 24 · pnpm 10.

## Commands

```bash
pnpm dev                # dev server
pnpm build              # production build
pnpm lint               # ESLint
pnpm exec tsc --noEmit  # typecheck
```

`pnpm lint && pnpm exec tsc --noEmit && pnpm build` must pass before committing.

There is **no `test` script and no `typecheck` script** in `package.json`. Do not
assume either exists. No test runner and no Prettier config exist in the repo, so
match surrounding style by hand.

pnpm is the package manager, pinned by `packageManager` in `package.json`.
`pnpm-lock.yaml` is the only lockfile — do not run `npm install` here.

## Key rules

1. **Forward-looking positioning** — no fork debates, governance disputes, or
   historical controversy, except the research and history articles
   (`/research/dao-fork`, `/why-classic/genesis`, `/olympia/history`), which
   belong here.
2. **Consumer gateway** — route visitors out to real activity; do not rebuild
   wallet, DEX, or governance functionality here.
3. **Live data, never hardcoded** — the site fetches from Blockscout and
   CoinGecko server-side. Never hardcode a hashrate, block reward, or era number
   that a derived value already provides. A figure no source supplies shows as
   "—", never as a typed stand-in; Blockscout stands in for CoinGecko's ETC/USD
   price, change and market cap.
4. **Mobile-first responsive** — every page works on mobile.
5. **Theme-aware** — use `var(--text-primary)`, `var(--brand-green)` and the rest
   of `app/styles/tokens.css`. Never hardcode `text-white` or `text-black`.

## Positioning

Ethereum Classic is the only mature Proof-of-Work blockchain with native smart
contracts, live since 2015, EVM-native and interoperable with Ethereum.

- **Olympia is a proposal**: draft ECIPs, activation block TBD, targeted for
  mainnet activation in 2027. Write it in proposal voice, and show its state as
  `OLYMPIA_STATUS` from `app/olympia/data/olympia.ts`, where the countdown's
  placeholder date also lives. It advances the execution layer through Dencun,
  Pectra and Fusaka and carries that work into Glamsterdam; ECIP-1121 adopts
  part of Glamsterdam's set, so full Glamsterdam parity is never claimed, nor
  "EVM alignment through Glamsterdam": write "through Fusaka and into
  Glamsterdam". ECIP titles come from `lib/olympia-ecips.ts` and every EIP list
  or count from `lib/olympia-eips.ts`. ECIP-1122, 1123 and 1124 are unpublished
  and never cited, nor are ECIP-1120 and ECIP-1130, other authors' proposals.
- **Naming** — "The DAO" is only the 2016 organization behind the ETH/ETC
  split, never Olympia DAO or Ethereum Classic DAO. Write "Ethereum Classic DAO"
  in full every time, never "the LLC"; its legal name, Ethereum Classic DAO LLC,
  only where its legal identity is the point. The mining algorithm is "Etchash" in prose.
- **The site's identity** — ethereumclassic.com is the home of Ethereum Classic,
  bitcoin.com's position beside bitcoin.org, with ethereumclassic.org in
  bitcoin.org's place. Its descriptor, "immutable infrastructure, programmable
  global finance", leads the home page's description and fills the hero badge,
  footer, llms summary and network structured data; the title stays "Ethereum
  Classic: The Original Ethereum Virtual Machine". Never "official", as
  bitcoin.com is not; nothing contradicts ethereumclassic.org's "no official
  anything". `lib/site-identity.ts` and
  `lib/site-facts.ts` feed the structured data, the About page and the llms files.
- **Ethereum Classic DAO and Olympia** — ECIP-1114 names Ethereum Classic DAO LLC as the legal
  wrapper it contemplates for Olympia DAO, downstream of it in authority, with
  no role until Olympia DAO is operating. Ecosystem Growth DAOs (ECIP-1117) are
  funded by season and not governed by Olympia DAO; never "Child-DAO".
- **Claims to avoid** — tooling that works "without modification" or "full
  JSON-RPC parity" (ECIP-1111 §Motivation: Foundry needs `--legacy` today); the
  CLARITY Act as settled (it is pending: "positioned for", "candidate"; its
  status fields read "Stalled in the Senate" since a cloture vote failed, 49 to
  50, on September 15, 2026); ETCG as an ETF (it is a trust); Classic USD as
  "compliant" or "the first" (it is "aligned with"); and superlatives, apart
  from the site's own "the home of Ethereum Classic".
- **Clients** — Core-Geth is the recommended client: a go-ethereum downstream,
  not native and not a plugin, recommended on its v1.13 line. A node older than
  v1.12.17 (coregeth.com's `MOVE_FLOOR`) never scheduled Spiral, so it resyncs
  from scratch instead of moving in place. Links follow coregeth.com's routing:
  installing goes to coregeth.com/guides/install/, a release's files and
  checksums to coregeth.com/downloads/, moving a node to
  coregeth.com/guides/migrate/, a node below that floor to the guide's check,
  coregeth.com/guides/migrate/#check, and a v1.12 node that has to wait to
  coregeth.com/guides/discovery/. A sentence that links a docs.coregeth.com page
  says it is the documentation's. Fukuii, an
  execution client in Scala 3 that Chippr Robotics LLC maintains as a
  continuation of IOHK's Mantis, is an alternative to try: its maintainers mark
  it alpha. fukuii.com and docs.fukuii.com lead its framing, and
  `lib/fukuii.ts` holds its copy and links. Besu, Erigon, Ethrex,
  Go-Ethereum, Nethermind and Reth are ETC *plugins*, never "overlays", never
  app cards of their own, and never counted among built client implementations.
  A plugin adds Ethereum Classic support to a client another project maintains,
  so that codebase and its decisions stay with that project: it is no substitute
  for Fukuii, an independent client, or for Core-Geth, a full implementation
  downstream of go-ethereum. The wording is `PLUGIN_POSITION` in
  `app/build/data/build.ts`.
- **Client URLs** — every client link outside the Olympia hub goes to
  `/build/clients` or `/build/clients/<id>`, which name no upgrade.
  `/olympia/clients` carries only Olympia readiness, and an `/olympia` link
  appears in the navigation only under the Olympia tab.

## Consumer copy

Internal and development language must not reach the UI. Avoid "Product Suite",
"vertically integrated", "built by the same architect", and "architecture" /
"infrastructure" / "protocol" in consumer headlines. No milestone numbers, phase
references, or roadmap terminology in rendered content.

**Write timeless.** No "coming soon", "not yet", "planned post-X". Describe what a
thing is; put mutable status in a badge or status property so changing it later is
one edit. Never type the version of a client's newest release: name the line a
recommendation needs, and link the release itself as `releases/latest`, labeled
"Latest release"; the site's copy never says "current release". A version a fix
first shipped in is history and stays.

## Three paths

1. **Use ETC** → ETCswap, wallets
2. **Earn ETC** → mining pools, liquidity
3. **Build on ETC** → Core-Geth, Fukuii, developer docs

## Do not build

Wallet connection, portfolio views, DEX interfaces, DeFi interactions, and
governance voting all route out — to ETCswap, established wallets, or the
Olympia DAO.

## Listing apps and products

Never add an app, exchange, or product without maintainer approval; some are
excluded by maintainer decision. Where a partner has an affiliate link, use the
one already in the codebase rather than the direct product URL. Every mining pool
is in `app/mining/data/pools.ts`, the one list the mining pages read; shares are
never stored, and blocks are matched to pools by `lib/pool-addresses.json`.
`/ecosystem` is the Ecosystem Directory of products that support ETC; `/partners`
is for real partners and the way to propose one; `/directory` is the Resource
Directory.

## Protected

`package.json` · `next.config.ts` · `tsconfig.json` · `app/styles/tokens.css` ·
`app/layout.tsx` · `docs/timeline.yaml` · `docs/ETC-KNOWLEDGE.md` · `LICENSE`.

Redirects in `next.config.ts` each stand in for a published URL — removing one
turns a live link into a 404. Dated news articles under `app/news/` are published
records; correct errors of fact, do not retro-edit them.

Never commit `.env` files, credentials, or anything under `.local/`.

## Documentation

- `AGENTS.md` — full agent context at the repo root
- `docs/URL-STRUCTURE.md` — URL endpoints
- `docs/ARCHITECTURE.md` — technical architecture
- `docs/COMPONENTS.md` — component specifications
- `docs/ETC-KNOWLEDGE.md` — ETC technical source of truth
