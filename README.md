# EthereumClassic.com

> The commercial/consumer gateway for Ethereum Classic - modeled after Bitcoin.com.

**Live at:** ethereumclassic.com

---

## Project Status: v0.2 - Phase 7 Complete (84%)

**Last Updated:** January 2026

| Phase | Milestones | Complete | Status |
|-------|------------|----------|--------|
| Phase 1 | 7 | 7 | 100% |
| Phase 2 | 5 | 5 | 100% |
| Phase 3 | 10 | 10 | 100% |
| Phase 4 | 12 | 12 | 100% |
| Phase 5 | 7 | 7 | 100% |
| Phase 6 | 23 | 23 | 100% |
| Phase 7 | 19 | 19 | 100% |
| Phase 8 | 16 | 0 | 0% (Human-only) |
| **Total** | **99** | **83** | **84%** |

**Current:** 137 pages built. Ready for Phase 8 (Human-Only Tasks).

See [docs/MILESTONES.md](docs/MILESTONES.md) for detailed milestone breakdown.

---

## Strategic Vision

**EthereumClassic.com** is the **commercial portal** for Ethereum Classic:

| Site | Purpose |
|------|---------|
| EthereumClassic.org | Open source project, protocol docs (community-run) |
| **EthereumClassic.com** | Consumer gateway, product suite (THIS SITE) |

**Advisory:** Roger Ver (Bitcoin.com founder) advised positioning as consumer product platform with no external investment.

**Architect:** Christopher Mercer - ETCswap V2/V3/Launchpad founder, Classic USD (USC) primary organizer, Ethereum Classic core developer, Fukuii client contributor

---

## Site Structure

### Primary Navigation
```
[Logo] News | Wallet | Apps | Buy | Learn | Mining | Build | [Markets] [Launch App]
```

### Complete Section Map

| Section | Pages | Status | Features |
|---------|-------|--------|----------|
| **Homepage** | 1 | Complete | Hero, stats, ecosystem overview |
| **Wallet** | 7 | Complete | Classic OS, hardware, compare, reviews |
| **Buy/Sell** | 11 | Complete | Exchanges, reviews, methods |
| **Exchanges** | 14 | Complete | Directory, compare, reviews by feature |
| **Apps** | 11 | Complete | DeFi, NFT, games, tools, governance |
| **Learn** | 20+ | Complete | Dynamic categories and articles |
| **News** | 5 | Complete | Hub, articles, RSS feed |
| **Mining** | 10 | Complete | Pools, hardware, software, stats |
| **Build** | 10 | Complete | Clients, docs, tools, networks |
| **Markets/Price** | 8 | Complete | Live charts, calculator, converter |
| **Research** | 8 | Complete | Reports, network, supply tracker |
| **Tools** | 6 | 4/6 | Gas tracker, explorer (2 stubs) |
| **Directory** | 6 | Complete | Wallets, exchanges, mining, devs |
| **Community** | 4 | Complete | Social, events, contribute |
| **Network** | 1 | Complete | Live network status dashboard |
| **Store** | 1 | Complete | Mining hardware e-commerce |

**Total:** 137 page.tsx files | See [docs/URL-STRUCTURE.md](docs/URL-STRUCTURE.md)

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

### Live Data Integrations
- **CoinGecko API** - ETC price, market cap, volume
- **Blockscout API** - Block height, transactions, gas prices

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

---

## Documentation

| Document | Purpose |
|----------|---------|
| [docs/MILESTONES.md](docs/MILESTONES.md) | Phased development plan (99 milestones) |
| [docs/URL-STRUCTURE.md](docs/URL-STRUCTURE.md) | Complete URL endpoint mapping (137 pages) |
| [docs/STALE-DATA-AUDIT-REPORT.md](docs/STALE-DATA-AUDIT-REPORT.md) | Data freshness audit results |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Technical architecture |
| [docs/COMPONENTS.md](docs/COMPONENTS.md) | Component specifications |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Development guidelines |

---

## Key Features

### Live Data Integration
- Real-time ETC price from CoinGecko
- Live network stats from Blockscout
- Auto-refresh with fallback values

### Mining Section
- Pool directory with hashrate data
- Hardware profitability tables (ASICs & GPUs)
- Mining software comparison
- Getting started guides

### E-Commerce Store
- Mining hardware (ASICs, GPUs)
- Equipment (PSUs, frames, cooling)
- Network infrastructure
- Hardware wallets
- Merchandise

### Exchange Integration
- 80+ exchange listings
- Feature-based filtering
- Individual reviews
- Comparison tools

---

## Positioning

Ethereum Classic is:
- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with Ethereum ecosystem
- A first-class execution layer for real on-chain activity

---

## Key Products Promoted

| Product | Description | URL |
|---------|-------------|-----|
| Classic OS | Complete economic operating system | app.classicos.org |
| ETCswap | DEX protocol V2/V3 | etcswap.org |
| ClassicUSD (USC) | ETC-native stablecoin | - |
| Olympia DAO | Governance protocol | - |

---

## License

See [LICENSE](LICENSE)
