# EthereumClassic.com

> The commercial/consumer gateway for Ethereum Classic - modeled after Bitcoin.com.

**Live at:** ethereumclassic.com

---

## Project Status: v0.2 Rebuild

We are rebuilding EthereumClassic.com from scratch with comprehensive planning based on deep analysis of Bitcoin.com's structure and features.

**Approach:** All URL endpoints defined upfront. Features built incrementally. Stub pages for unbuilt sections.

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

## Ecosystem Context

This site is the **awareness layer** for the ETC ecosystem:

```
EthereumClassic.com (THIS SITE) → ClassicOS.org → app.classicos.org → docs.classicos.org
   (awareness + products)         (consideration)    (conversion)       (onboarding)
```

---

## Site Structure (v0.2 Target)

### Primary Navigation
```
[Logo] News | Wallet | Apps | Buy | Learn | Mining | Build | [Markets ▼] [Launch App]
```

### Complete Section Map

| Section | Description | Status |
|---------|-------------|--------|
| **Homepage** | Hero, products, stats, CTAs | Rebuild |
| **Wallet** | Classic OS + wallet reviews | Rebuild |
| **Buy** | Exchanges, on-ramps, guides | Rebuild |
| **Apps** | dApp directory (DeFi, NFT, Tools) | Rebuild |
| **Learn** | Education center, guides, glossary | Build |
| **News** | Ecosystem news and updates | Build |
| **Mining** | Pools, hardware, profitability | Build |
| **Build** | Developer resources, clients | Build |
| **Exchanges** | Exchange directory and reviews | Build |
| **Markets** | Price data, charts, tools | Build |
| **Research** | Reports and analysis | Stub |
| **Tools** | Calculators, converters | Stub |
| **Directory** | Ecosystem listings | Build |
| **Community** | Social links, events | Stub |

**Total Endpoints:** 180+ URLs mapped

See [docs/URL-STRUCTURE.md](docs/URL-STRUCTURE.md) for complete URL mapping.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | App Router, SSG/SSR |
| React | 19.x | UI components |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |
| Node.js | 22.x | Runtime |

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

### Planning & Research
| Document | Purpose |
|----------|---------|
| [docs/RESEARCH.md](docs/RESEARCH.md) | Bitcoin.com analysis and findings |
| [docs/URL-STRUCTURE.md](docs/URL-STRUCTURE.md) | Complete URL endpoint mapping |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Technical architecture |
| [docs/COMPONENTS.md](docs/COMPONENTS.md) | Component specifications |
| [docs/MILESTONES.md](docs/MILESTONES.md) | Phased development plan |

### Development
| Document | Purpose |
|----------|---------|
| [CONTRIBUTING.md](CONTRIBUTING.md) | Development guidelines |
| [.claude/instructions.md](.claude/instructions.md) | AI agent instructions |
| [.github/copilot-instructions.md](.github/copilot-instructions.md) | GitHub Copilot context |

---

## Development Phases

### Phase 1: Framework & Shell (Current)
- Design system and tokens
- UI component library
- Layout components
- Stub page system for all URLs
- Navigation and routing

### Phase 2: Core Pages (P0)
- Homepage
- Wallet hub + Classic OS
- Buy ETC hub
- Apps directory
- Learn landing

### Phase 3: Secondary Pages (P1)
- Wallet section expansion
- Buy section expansion
- Apps expansion
- Learn articles
- News, Markets, Mining, Build sections
- Exchange directory

### Phase 4: Content Expansion (P2)
- Wallet and exchange reviews
- Full learn section (30+ articles)
- Mining guides and tools
- Research section
- Tools section

### Phase 5: Advanced Features (P3)
- User accounts
- CMS integration
- API layer
- Internationalization

See [docs/MILESTONES.md](docs/MILESTONES.md) for detailed milestone breakdown.

---

## Positioning

Ethereum Classic is:
- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with Ethereum ecosystem
- A first-class execution layer for real on-chain activity

**Forward-looking:** No historical disputes, forks, or governance debates.

---

## What This Site Is

- **Consumer gateway** - Entry point for ETC users
- **Product platform** - Wallet, Apps, Buy/Sell, Learn, Mining
- **For-profit funnel** - Track clicks, optimize conversion
- **Legitimacy layer** - Establish credibility for ETC ecosystem
- **Fast** - Mobile-first, <3s load time

## What This Site Is NOT

- **Not a community site** - No forums, governance, ECIP content
- **Not the app** - No wallet connection, no DeFi interactions (route to Classic OS)
- **Not documentation** - Route to docs.classicos.org
- **Not a blog CMS** - Static content, CMS in Phase 5

**Success = wallet adoption + app discovery + downstream clicks**

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
