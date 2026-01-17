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

### Phase 1: Framework & Shell (Active)

**Goal:** Establish complete site architecture with all URL endpoints defined.

**Current Milestone:** 1.3 UI Component Library (Next)

**Completed:**
- [x] 1.1 RESEARCH.md - Bitcoin.com analysis
- [x] 1.1 URL-STRUCTURE.md - Complete endpoint mapping (180+ URLs)
- [x] 1.1 ARCHITECTURE.md - Technical architecture
- [x] 1.1 COMPONENTS.md - Component specifications
- [x] 1.1 MILESTONES.md - Development phases
- [x] 1.1 README.md - Updated
- [x] 1.1 instructions.md - Updated
- [x] 1.2 Design tokens (colors, typography, spacing)
- [x] 1.2 Tailwind configuration
- [x] 1.2 Base CSS variables
- [x] 1.2 Dark theme setup

**Next Steps (Milestone 1.3 - UI Component Library):**
- [ ] Button component (all variants)
- [ ] Card component (all variants)
- [ ] Badge component
- [ ] Input/Select components
- [ ] Tabs component
- [ ] Table component
- [ ] Modal component
- [ ] Tooltip component
- [ ] Skeleton/Loading states
- [ ] Icon system

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

| Product | Description | Destination |
|---------|-------------|-------------|
| Classic OS | Economic operating system | app.classicos.org |
| ETCswap | DEX V2/V3 | etcswap.com |
| ClassicUSD (USC) | ETC-native stablecoin | - |
| Olympia DAO | Governance | - |
| Fukuii | ETC client | - |

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

**Current Focus:** Phase 1 - Framework & Shell
**Current Milestone:** 1.3 - UI Component Library
