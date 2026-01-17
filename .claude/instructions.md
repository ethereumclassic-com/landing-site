# Claude Code Instructions: EthereumClassic.com v0.2

## Project Status

**v0.2 Rebuild in Progress** - We are rebuilding from scratch with comprehensive planning.

**Key Documents (READ THESE FIRST):**
1. [docs/RESEARCH.md](../docs/RESEARCH.md) - Bitcoin.com analysis
2. [docs/URL-STRUCTURE.md](../docs/URL-STRUCTURE.md) - All 180+ URL endpoints
3. [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md) - Technical architecture
4. [docs/COMPONENTS.md](../docs/COMPONENTS.md) - Component specifications
5. [docs/MILESTONES.md](../docs/MILESTONES.md) - Development phases

---

## Product Context

**EthereumClassic.com** is the commercial/consumer gateway for Ethereum Classic, modeled after Bitcoin.com.

| Site | Purpose |
|------|---------|
| EthereumClassic.org | Community, protocol docs |
| **EthereumClassic.com** | Consumer gateway, products (THIS SITE) |

### Ecosystem Funnel

```
EthereumClassic.com (THIS SITE)
    ↓ (awareness + products)
ClassicOS.org
    ↓ (consideration)
app.classicos.org
    ↓ (conversion)
docs.classicos.org
    ↓ (documentation / onboarding)
```

**Architect:** Christopher Mercer (ETCswap V2/V3/Launchpad founder, USC primary organizer, ETC core dev, Fukuii contributor)

---

## Current Development Phase

### Phase 2: Core Pages (Complete)

**Goal:** Build primary user-facing pages for core sections.

**Current Milestone:** Phase 3 - Secondary Pages

**Completed Phases:**
- [x] Phase 1: Framework & Shell (1.1 - 1.7)
- [x] Phase 2: Core Pages (2.1 - 2.5)
  - [x] 2.1 Homepage rebuild
  - [x] 2.2 Wallet landing page
  - [x] 2.3 Buy landing page
  - [x] 2.4 Apps directory
  - [x] 2.5 Learn landing page

**Next Steps (Phase 3 - Secondary Pages):**
- [ ] 3.1 Wallet Section Expansion (MetaMask guide, hardware wallets)
- [ ] 3.2 Buy Section Expansion (Exchange listings)
- [ ] 3.3 Apps Section Expansion (More app pages)
- [ ] 3.4 Learn Section Expansion (More articles)
- [ ] 3.5 News Section
- [ ] 3.6 Markets Section
- [ ] 3.7 Mining Section

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

## Quick Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
```

---

## Site Structure (Target)

### Navigation
```
[Logo] News | Wallet | Apps | Buy | Learn | Mining | Build | [Markets ▼] [Launch App]
```

### Complete Section List

| Section | URLs | Status |
|---------|------|--------|
| Homepage | / | Rebuild |
| Wallet | /wallet/* | Rebuild |
| Buy | /buy/*, /sell/* | Rebuild |
| Apps | /apps/* | Rebuild |
| Learn | /learn/* | Build |
| News | /news/* | Build |
| Mining | /mining/* | Build |
| Build | /build/* | Build |
| Exchanges | /exchanges/* | Build |
| Markets | /markets, /price/* | Build |
| Research | /research/* | Stub |
| Tools | /tools/* | Stub |
| Directory | /directory/* | Build |
| Community | /community/* | Stub |
| Account | /account/* | Stub (Phase 5) |

**See [docs/URL-STRUCTURE.md](../docs/URL-STRUCTURE.md) for complete URL mapping.**

---

## Development Approach

### All Endpoints First

Every URL endpoint is defined upfront (see URL-STRUCTURE.md). Build stub pages for unbuilt sections.

### Stub Page Pattern

```typescript
import { StubPage } from '@/components/StubPage'

export default function ResearchPage() {
  return (
    <StubPage
      title="Research"
      description="Market analysis, ecosystem reports, and in-depth research."
      expectedPhase="Phase 4"
      relatedLinks={[
        { label: 'Learn about ETC', href: '/learn' },
        { label: 'View markets', href: '/markets' },
      ]}
    />
  )
}
```

### Priority System

| Priority | Meaning | Phase |
|----------|---------|-------|
| **P0** | Critical | Phase 2 |
| **P1** | Important | Phase 3 |
| **P2** | Standard | Phase 4 |
| **P3** | Future | Phase 5 |

---

## Component Architecture

### Hierarchy

```
UI Components (Atomic) → Layout Components → Section Components → Feature Components → Pages
```

### Key Directories

```
app/
├── components/
│   ├── ui/          # Button, Card, Badge, Input, etc.
│   ├── layout/      # Navigation, Footer, Container, etc.
│   ├── sections/    # Hero, StatsStrip, ProductCards, etc.
│   └── features/    # wallet/, exchange/, app/, price/, mining/, learn/
├── data/            # Static data (wallets.ts, exchanges.ts, apps.ts)
└── lib/             # Utilities
```

**See [docs/COMPONENTS.md](../docs/COMPONENTS.md) for full specifications.**

---

## Design System

### Colors (ETC Brand)

```css
--color-primary: #3AB83A;        /* ETC Green */
--color-bg-primary: #0B0F14;     /* Dark base */
--color-bg-secondary: #131A24;   /* Card backgrounds */
--color-text-primary: #FFFFFF;
--color-text-secondary: #94A3B8;
```

### Component Variants

- **Button:** primary, secondary, outline, ghost, link
- **Card:** default, elevated, outlined, interactive
- **Badge:** default, success, warning, error, info, outline

**See [docs/COMPONENTS.md](../docs/COMPONENTS.md) for design tokens.**

---

## Positioning (Non-Negotiable)

Ethereum Classic is:
- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with Ethereum ecosystem
- A first-class execution layer for real on-chain activity

**Forward-looking:** No historical disputes, forks, or governance debates.

---

## Content Curation Requirements

### App Vetting (CRITICAL)

ETC ecosystem has significant scam app prevalence. **Never list unvetted apps.**

**Trusted Apps (Approved):**
- ETCswap (architect-built)
- Classic USD (architect-organized)
- BlockScout (established infrastructure)

**Vetting Criteria:**
1. Manually approved by architect
2. Verifiable on-chain activity
3. Public team or established reputation
4. Security review for DeFi apps

**If asked to add an app:** Request explicit approval first.

### Content Sourcing from EthereumClassic.org

The community website ethereumclassic.org contains content that can be adapted.
**Source:** https://github.com/ethereumclassic/ethereumclassic.github.io

**CRITICAL: All sourced content MUST be reviewed for:**
- Dated/outdated information
- Scam projects (remove entirely)
- Dead/abandoned projects
- Biased/opinionated content
- Fork debates/history (remove - forward-looking policy)
- Governance/ECIP content (not for this site)

**Review Process:** Extract → Audit → Verify → Adapt tone → Architect approval

### Mining Pool Listings

Only list pools with significant hashrate (data: miningpoolstats.stream):

| Pool | Hashrate | Share | Priority |
|------|----------|-------|----------|
| F2Pool | ~79 TH/s | 41% | P1 |
| 2Miners | ~63 TH/s | 33% | P1 |
| K1Pool | ~25 TH/s | 13% | P1 |
| GTPool | ~11 TH/s | 5% | P2 |
| EMCD | ~7 TH/s | 4% | P2 |

**Future: EthereumClassic.com Mining Pool** - Reserved for in-house pool integrated with Fukuii.
Related: github.com/chippr-robotics/fukuii, prediction-dao-research

---

## What NOT to Build

This site promotes products, it doesn't replace them:

| Don't Build | Route To Instead |
|-------------|------------------|
| Wallet connection | Classic OS |
| Portfolio views | Classic OS |
| DEX interface | ETCswap |
| DeFi interactions | Classic OS / ETCswap |
| Governance/voting | Olympia DAO |
| Technical docs | docs.classicos.org |

---

## Key Products Promoted

### Classic OS
| Property | URL |
|----------|-----|
| Landing Page | https://classicos.org |
| App | https://app.classicos.org |
| Docs | https://docs.classicos.org |

### ETCswap
| Property | URL |
|----------|-----|
| Landing Site | https://etcswap.org |
| V2 DEX | https://v2.etcswap.org |
| V3 DEX | https://v3.etcswap.org |
| Launchpad (ILO) | https://launchpad.etcswap.org |
| Docs | https://docs.etcswap.org |
| V3 Market Data | https://info.etcswap.org |

### Classic USD (USC)
| Property | URL |
|----------|-----|
| Landing Site | https://classicusd.com |
| Brale (Licensed Operator) | https://brale.xyz |
| Mint/Redeem Platform | https://app.brale.xyz |
| CoinGecko | https://www.coingecko.com/en/coins/classic-usd |
| CoinGecko API ID | `classic-usd` |

### Wrapped Ether (WETC)
| Property | URL |
|----------|-----|
| Website | https://wrappedether.org |
| GitHub | https://github.com/wrappedether |
| CoinGecko | https://www.coingecko.com/en/coins/wrapped-ether |
| CoinGecko API ID | `wrapped-ether` |

### GeckoTerminal / Market Data
| Market | URL |
|--------|-----|
| ETC DEX Markets (All) | https://www.geckoterminal.com/ethereum_classic/pools |
| ETCswap V3 Pools | https://www.geckoterminal.com/ethereum_classic/etcswap-v3/pools |
| ETCswap V2 Pools | https://www.geckoterminal.com/ethereum_classic/etcswap-v2/pools |

### Olympia DAO
| Property | URL |
|----------|-----|
| Website | https://olympiadao.org |

### Fukuii
| Property | URL |
|----------|-----|
| GitHub | https://github.com/chippr-robotics/fukuii |

### Other Products
| Product | Description |
|---------|-------------|

---

## Routing Strategy

### Three Primary Paths

1. **Use ETC** → Classic OS, ETCswap, wallets
2. **Earn ETC** → Mining pools, Classic OS, ETCswap liquidity
3. **Build on ETC** → Fukuii, Core-Geth, developer docs

---

## Validation Requirements

Before committing:

```bash
npm run lint         # Must pass
npm run build        # Must succeed
```

Test:
- All routes render
- Mobile responsive
- <3s load time
- No console errors

---

## Common Tasks

### Add a New Page

1. Check URL-STRUCTURE.md for the endpoint
2. Create route: `app/[section]/page.tsx`
3. If not ready to build, use StubPage component
4. Add to navigation if needed
5. Validate: lint + build

### Add a New Component

1. Check COMPONENTS.md for specifications
2. Create in appropriate directory (ui/, layout/, sections/, features/)
3. Export from index.ts
4. Use in pages
5. Validate: lint + build

### Update Data

1. Find data file in `app/data/`
2. Follow existing schema (see ARCHITECTURE.md)
3. Update component if needed
4. Validate: lint + build

---

## File Ownership

**Do not modify without explicit request:**
- docs/RESEARCH.md
- docs/URL-STRUCTURE.md
- docs/ARCHITECTURE.md
- docs/COMPONENTS.md
- docs/MILESTONES.md
- package.json
- next.config.ts
- tsconfig.json

---

## Development Workflow

1. **Read docs first** - Especially URL-STRUCTURE and MILESTONES
2. **Check current milestone** - What's the immediate focus?
3. **Follow component specs** - Use COMPONENTS.md
4. **Validate before commit** - lint + build must pass
5. **Update docs after milestone completion** - REQUIRED (see below)

---

## Documentation Update Requirement (MANDATORY)

**After completing EVERY milestone, update documentation:**

1. **MILESTONES.md** - Mark deliverables as complete `[x]`, update status to "Complete", update Progress Summary table, update Current Focus section
2. **.claude/instructions.md** - Update "Current Milestone" if needed
3. **Any relevant docs** - If implementation differs from spec, update accordingly

This keeps documents reflective of development reality. Documentation updates should be committed with the milestone completion commit or immediately after.

---

## Context Compaction (MANDATORY)

**After every commit and push, perform a context compaction using `/compact`.**

This keeps the conversation efficient by summarizing completed work while preserving:
- Current milestone progress
- Key decisions made
- File locations and structure
- Any blockers or next steps

The git commit captures the actual code changes, so detailed implementation context can be safely compacted.

---

## External References

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## Summary

**You're building the ETC equivalent of Bitcoin.com.**

1. All 180+ URLs defined upfront (URL-STRUCTURE.md)
2. Phased development (MILESTONES.md)
3. Component-based architecture (COMPONENTS.md)
4. Framework/shell first, then content
5. Stub pages for unbuilt features
6. Forward-looking ETC positioning
7. Route to ecosystem products, don't rebuild them

**Current Focus:** Phase 3 - Secondary Pages
**Current Milestone:** 3.1 - Wallet Section Expansion
