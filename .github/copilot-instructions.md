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
gateway. Keep the split.

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
   historical controversy.
2. **Consumer gateway** — route visitors out to real activity; do not rebuild
   wallet, DEX, or governance functionality here.
3. **Live data, never hardcoded** — the site fetches from Blockscout and
   CoinGecko server-side. Never hardcode a hashrate, block reward, or era number
   that a derived value already provides.
4. **Mobile-first responsive** — every page works on mobile.
5. **Theme-aware** — use `var(--text-primary)`, `var(--brand-green)` and the rest
   of `app/styles/tokens.css`. Never hardcode `text-white` or `text-black`.

## Positioning

Ethereum Classic is the only mature Proof-of-Work blockchain with native smart
contracts, live since 2015, EVM-native and interoperable with Ethereum.

- **Olympia** advances the execution layer through Dencun, Pectra and Fusaka, and
  carries that work into Glamsterdam. Do not claim "full Glamsterdam parity" —
  ECIP-1121 includes two of Glamsterdam's seven execution-layer EIPs. Activation
  is targeted for 2027; the activation block is TBD.
- **Clients** — Fukuii is ETC's first native client. Core-Geth is a go-ethereum
  derivative, not native and not a plugin. Besu, Erigon, Ethrex, Go-Ethereum,
  Nethermind and Reth are ETC *plugins*, never "overlays", and never counted
  among built client implementations.

## Consumer copy

Internal and development language must not reach the UI. Avoid "Product Suite",
"vertically integrated", "built by the same architect", and "architecture" /
"infrastructure" / "protocol" in consumer headlines. No milestone numbers, phase
references, or roadmap terminology in rendered content.

**Write timeless.** No "coming soon", "not yet", "planned post-X". Describe what a
thing is; put mutable status in a badge or status property so changing it later is
one edit.

## Three paths

1. **Use ETC** → ETCswap, wallets
2. **Earn ETC** → mining pools, liquidity
3. **Build on ETC** → Fukuii, Core-Geth, developer docs

## Do not build

Wallet connection, portfolio views, DEX interfaces, DeFi interactions, and
governance voting all route out — to ETCswap, established wallets, or the
Olympia DAO.

## Listing apps and products

Never add an app, exchange, or product without maintainer approval; some are
excluded by maintainer decision. Where a partner has an affiliate link, use the
one already in the codebase rather than the direct product URL.

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
