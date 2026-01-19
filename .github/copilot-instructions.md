# GitHub Copilot Instructions: EthereumClassic.com

## Product

EthereumClassic.com - Commercial/consumer gateway for Ethereum Classic (modeled after Bitcoin.com)

## Current Status

**v0.2 Build:** 137 pages built, Phase 7 QA in progress (76% complete)

## Tech Stack

- Next.js 16.x (App Router)
- React 19.x
- Tailwind CSS 4.x
- Framer Motion 12.x
- TypeScript 5.x

## Key Rules

1. **Forward-looking positioning** - No fork debates, governance disputes, or historical controversies
2. **Consumer gateway** - Route visitors to real ETC activity, don't rebuild wallet/dApp functionality
3. **Live data where available** - Use `usePrice` and `useNetworkStats` hooks
4. **Mobile-first responsive** - All pages must work on mobile

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

## Site Structure

| Section | URLs | Status |
|---------|------|--------|
| Homepage | / | Complete |
| Wallet | /wallet/* | Complete |
| Buy/Sell | /buy/*, /sell/* | Complete |
| Apps | /apps/* | Complete |
| Learn | /learn/* | Complete |
| News | /news/* | Complete |
| Mining | /mining/* | Complete |
| Build | /build/* | Complete |
| Exchanges | /exchanges/* | Complete |
| Markets | /markets, /price/* | Complete |
| Research | /research/* | Complete |
| Tools | /tools/* | Complete |
| Directory | /directory/* | Complete |
| Community | /community/* | Complete |
| Network | /network | Complete |
| Store | /store | Complete |

## Protected Files

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `docs/MILESTONES.md` (without explicit request)

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

## What NOT to Build

- Wallet connection (route to Classic OS)
- Portfolio views (route to Classic OS)
- DEX interfaces (route to ETCswap)
- DeFi interactions (route to Classic OS / ETCswap)
- Governance/voting (route to Olympia DAO)
- Technical docs (route to docs.classicos.org)

## Documentation

See `/docs` folder for:
- [MILESTONES.md](../docs/MILESTONES.md) - Development roadmap
- [URL-STRUCTURE.md](../docs/URL-STRUCTURE.md) - All URL endpoints
- [ARCHITECTURE.md](../docs/ARCHITECTURE.md) - Technical architecture
- [COMPONENTS.md](../docs/COMPONENTS.md) - Component specifications
- [ETC-KNOWLEDGE.md](../docs/ETC-KNOWLEDGE.md) - ETC technical details

**Success = downstream clicks, NOT time on site.**
