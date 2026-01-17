# GitHub Copilot Instructions: EthereumClassic.com

## Product

EthereumClassic.com - Top-of-funnel awareness site

## Tech Stack

- Next.js 16.1.1 (App Router)
- React 19.2.3
- Tailwind CSS 4
- Framer Motion 12.24.0
- TypeScript 5.x

## Key Rules

1. **Locked scope** - See docs/SCOPE-v0.1.md - any change needs architect approval
2. **This is a router** - Route visitors to real ETC activity within 60 seconds
3. **Five sections only** - Hero, Why ETC, Paths, Who, Footer
4. **No interactivity** - If it needs wallet, it belongs in ClassicOS

## Positioning

Ethereum Classic is:
- The only mature PoW blockchain with smart contracts
- Live since 2015
- EVM-native and Ethereum-compatible
- Forward-looking (no fork debates)

## Three Paths

1. **Use ETC** → ClassicOS, ETCswap, wallets
2. **Earn ETC** → Mining pools, liquidity provision
3. **Build on ETC** → Fukuii, Core-Geth, dev docs

## Protected Files

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `docs/SCOPE-v0.1.md`

## Validation

Before committing:
```bash
npm run lint
npm run build
```

Both must pass.

## Style

- Use Tailwind utility classes
- Use Framer Motion for subtle animations
- Protocol-grade aesthetic (aura.build inspiration)
- Mobile-first responsive

## Primary CTAs

- ClassicOS → classicos.org
- ETCswap → etcswap.org
- Mining/Clients → pool/client links

## What's Out of Scope (v0.1)

- Wallet connection
- Portfolio views
- DEX interfaces
- Charts/dashboards
- Governance/ECIP content
- Historical debates
- Documentation/tutorials
- User accounts
- Community forums

**Success = downstream clicks, NOT time on site.**
