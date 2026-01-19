# EthereumClassic.com Documentation

**Last Updated:** January 2026

Commercial/consumer gateway for the Ethereum Classic ecosystem.

---

## Documentation Index

| Document | Description |
|----------|-------------|
| [MILESTONES.md](MILESTONES.md) | Development roadmap - 75 milestones across 7 phases |
| [URL-STRUCTURE.md](URL-STRUCTURE.md) | Complete URL mapping - 137 pages |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Technical architecture |
| [COMPONENTS.md](COMPONENTS.md) | Component specifications |
| [ETC-KNOWLEDGE.md](ETC-KNOWLEDGE.md) | Ethereum Classic reference data |
| [RESEARCH.md](RESEARCH.md) | Bitcoin.com analysis findings |
| [STALE-DATA-AUDIT-REPORT.md](STALE-DATA-AUDIT-REPORT.md) | Data freshness audit results |

---

## Project Status

| Phase | Milestones | Complete | Status |
|-------|------------|----------|--------|
| Phase 1 | 8 | 8 | 100% |
| Phase 2 | 5 | 5 | 100% |
| Phase 3 | 10 | 10 | 100% |
| Phase 4 | 12 | 12 | 100% |
| Phase 5 | 7 | 7 | 100% |
| Phase 6 | 23 | 21 | 91% |
| Phase 7 | 11 | 0 | 0% (Human-only) |
| **Total** | **75** | **63** | **84%** |

**Current:** 137 pages built (~87% complete)

---

## Product Purpose

EthereumClassic.com is the **commercial gateway** for Ethereum Classic:

```
EthereumClassic.com (THIS SITE) → ClassicOS.org → app.classicos.org
   (awareness + products)         (consideration)    (conversion)
```

**Goal:** Drive adoption of Ethereum Classic through:
- Wallet discovery and setup
- Exchange and purchase guides
- dApp ecosystem directory
- Mining resources
- Developer tools

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.x | App Router, SSG/SSR |
| React | 19.x | UI components |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |
| Node.js | 22.x | Runtime |

### Data Integrations

- **CoinGecko API** - ETC price, market cap, volume
- **Blockscout API** - Block height, transactions, gas prices

---

## Site Structure

### Primary Navigation
```
[Logo] News | Wallet | Apps | Buy | Learn | Mining | Build | [Markets] [Launch App]
```

### Complete Sections

| Section | Pages | Description |
|---------|-------|-------------|
| Homepage | 1 | Hero, stats, ecosystem overview |
| Wallet | 7 | Classic OS, hardware, compare, reviews |
| Buy/Sell | 11 | Exchanges, methods, reviews |
| Exchanges | 14 | Directory, compare, feature filters |
| Apps | 11 | DeFi, NFT, games, tools, governance |
| Learn | 20+ | Dynamic categories and articles |
| News | 5 | Hub, articles, RSS feed |
| Mining | 10 | Pools, hardware, software, stats |
| Build | 10 | Clients, docs, tools, networks |
| Markets | 8 | Price, charts, calculator |
| Research | 8 | Reports, network analysis |
| Tools | 6 | Gas tracker, explorer |
| Directory | 6 | Ecosystem listings |
| Community | 4 | Social, events |
| Network | 1 | Live status dashboard |
| Store | 1 | Mining hardware e-commerce |

**Total:** 137 page.tsx files

---

## Positioning

Ethereum Classic is:
- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with Ethereum ecosystem
- A first-class execution layer for real on-chain activity

**Forward-looking:** No historical disputes, forks, or governance debates.

---

## Key Products Promoted

| Product | Description | URL |
|---------|-------------|-----|
| Classic OS | Complete economic operating system | app.classicos.org |
| ETCswap | DEX protocol V2/V3 | etcswap.org |
| ClassicUSD (USC) | ETC-native stablecoin | - |
| Olympia DAO | Governance protocol | - |

---

## Development

See the root [README.md](../README.md) and [CONTRIBUTING.md](../CONTRIBUTING.md) for development setup and guidelines.

### Quick Start

```bash
npm install
npm run dev
npm run build
npm run lint
```

---

## Phase 7 Remaining Work (Human-Required)

The following require human intervention:
- Domain setup and DNS configuration
- Exchange API keys
- Manual accessibility testing
- Mobile device testing
- Content review
- Data source research for live APIs

See [MILESTONES.md](MILESTONES.md) for complete Phase 7 details.
