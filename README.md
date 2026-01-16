# EthereumClassic.com

Commercial/consumer gateway for Ethereum Classic - modeled after Bitcoin.com.

**Live at:** ethereumclassic.com

---

## Strategic Vision

**EthereumClassic.com** is the **commercial portal** for Ethereum Classic (like Bitcoin.com is to Bitcoin.org):

- **EthereumClassic.org** = Open source project, protocol docs (community-run)
- **EthereumClassic.com** = Consumer gateway, product suite (THIS SITE)

**Advisory:** Roger Ver (Bitcoin.com founder) advised positioning as consumer product platform with no external investment.

---

## Ecosystem Context

This site is the **awareness layer** and evolving into a **multi-section product platform**:

```
EthereumClassic.com (THIS SITE) → ClassicOS.org → app.classicos.org → docs.classicos.org
   (awareness + products)         (consideration)    (conversion)       (onboarding)
```

**Architect:** Christopher Mercer
- ETCswap V2/V3/Launchpad founder
- Classic USD (USC) primary organizer
- Ethereum Classic core developer
- Fukuii client contributor

---

## Current State (v0.1)

**Purpose:** Answer "Why should I use Ethereum Classic, and where do I go next?"

**Goal:** Route visitors to real ETC activity within 60 seconds.

**Structure:** Single landing page, five sections, router model.

---

## Positioning

Ethereum Classic is:
- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with Ethereum ecosystem
- A first-class execution layer for real on-chain activity

**Forward-looking** - No historical disputes, forks, or governance debates.

---

## Tech Stack

- **Next.js:** 16.1.1 (App Router)
- **React:** 19.2.3
- **Tailwind CSS:** 4.x
- **Framer Motion:** 12.24.0
- **TypeScript:** 5.x
- **Node:** 22.x

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

## Site Structure

### v0.1 (Current - Locked)

**Five sections (locked):**

1. **Hero** - Clear positioning, one CTA
2. **Why Ethereum Classic** - 3-4 value statements
3. **What Can I Do on ETC?** - Three paths: Use, Earn, Build
4. **Who Is ETC For?** - Segmentation: users, miners, builders, institutions
5. **Footer** - Essential navigation, external links

**See:** [docs/SCOPE-v0.1.md](docs/SCOPE-v0.1.md) for complete locked scope.

### v0.2+ (Roadmap)

**Multi-section consumer platform:**

```
Navigation: News | Wallet | Apps | Buy | Learn | Build | [Launch App]
```

**Sections:**
- **Wallet** - Classic OS hub, download CTAs
- **Buy/Sell** - Fiat on-ramps, exchange links
- **Apps** - Curated dApp directory (ETCswap, ClassicUSD, Olympia DAO)
- **News** - ETC ecosystem blog
- **Learn** - Education center (What is ETC?, guides)
- **Markets** - Price, charts, network stats
- **Build** - Developer resources

**Model:** Bitcoin.com multi-section product platform

**See:** [docs/SCOPE-v0.2-roadmap.md](docs/SCOPE-v0.2-roadmap.md) for complete vision and implementation plan.

---

## For Developers

### Documentation

- **Current scope (v0.1):** [docs/SCOPE-v0.1.md](docs/SCOPE-v0.1.md)
- **Future roadmap (v0.2+):** [docs/SCOPE-v0.2-roadmap.md](docs/SCOPE-v0.2-roadmap.md)
- **Strategic positioning:** [/docs/ecosystem/positioning-ethereumclassic-com.md](../../docs/ecosystem/positioning-ethereumclassic-com.md)
- **Product docs:** [docs/README.md](docs/README.md)
- **Ecosystem context:** [/docs/ecosystem/phase-0/](../../docs/ecosystem/phase-0/)

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

### For AI Agents

- **Claude Code:** [.claude/instructions.md](.claude/instructions.md)
- **GitHub Copilot:** [.github/copilot-instructions.md](.github/copilot-instructions.md)

---

## What This Site Is

- **Router** - Direct visitors to real ETC activity
- **For-profit funnel** - Track clicks, optimize conversion
- **Legitimacy layer** - Establish credibility for ETC ecosystem
- **Fast** - Mobile-first, minimal copy, action-oriented

## What This Site Is NOT

- **Not a community site** - No forums, governance, ECIP content
- **Not documentation** - No tutorials or technical guides
- **Not the app** - No wallet connection, no DeFi interactions
- **Not a blog** - No content engine or CMS

**Success = downstream clicks, NOT time on site.**

---

## License

See [LICENSE](LICENSE)
