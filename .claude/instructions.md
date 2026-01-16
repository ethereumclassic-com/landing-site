# Claude Code Instructions: EthereumClassic.com

## Product Context

You're working on **EthereumClassic.com**, the commercial/consumer gateway for Ethereum Classic modeled after Bitcoin.com.

### Strategic Positioning

**EthereumClassic.com** = Commercial portal, product suite (THIS SITE)
**EthereumClassic.org** = Open source project, protocol docs (community-run)

**Advisory:** Roger Ver (Bitcoin.com founder) advised positioning as consumer product platform with no external investment.

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

### Current State (v0.2 Phase 1 - ACTIVE)

**v0.1 is archived** - See [`docs/archive/SCOPE-v0.1-complete.md`](../docs/archive/SCOPE-v0.1-complete.md)

**Now implementing v0.2 Phase 1** - Transform into multi-section consumer platform (Bitcoin.com model):

**Phase 1 deliverables (current focus):**
- ✅ Navigation with sections: News, Wallet, Apps, Buy, Learn, Build
- ✅ Homepage redesign: Product cards, stats, ecosystem showcase
- ✅ Wallet page: Classic OS promotion
- ✅ Apps directory: Curated dApps (ETCswap, ClassicUSD, Olympia DAO)

**Future phases:**
- Phase 2: Learn section, News section, Markets page
- Phase 3: Buy page, Build section, enhanced Apps directory
- Phase 4: User accounts, newsletter, events, multilingual

**See:** [`docs/PHASE-1-implementation-plan.md`](../docs/PHASE-1-implementation-plan.md) for detailed implementation steps
**See:** [`docs/SCOPE-v0.2-roadmap.md`](../docs/SCOPE-v0.2-roadmap.md) for complete vision

**Architect:** Christopher Mercer (ETCswap V2/V3/Launchpad founder, USC primary organizer, ETC core dev, Fukuii contributor)

---

## Tech Stack

- **Next.js:** 16.1.1 (App Router)
- **React:** 19.2.3
- **Tailwind CSS:** 4.x
- **Framer Motion:** 12.24.0
- **TypeScript:** 5.x
- **Node:** 22.x

---

## Quick Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
```

---

## Site Structure (v0.2 Phase 1)

**v0.1 single-page structure is archived.** Now implementing multi-section platform:

### Navigation Structure (New)
```
[ETC Logo] News | Wallet | Apps | Buy | Learn | Build | [Launch App]
```

### Page Structure (Phase 1)

**Homepage (Redesigned):**
1. Hero - Action-oriented ("The Home of Ethereum Classic")
2. Stats Strip - Social proof (years running, transactions, TVL)
3. Product Cards - Wallet, Buy, Apps, Learn
4. Trending News - Recent articles (stub)
5. Ecosystem Stats - Network activity
6. Product Suite - Classic OS, ETCswap, ClassicUSD, Olympia DAO
7. Trust Signals - Security, longevity, EVM compatibility
8. Final CTA - Download wallet, buy ETC, browse apps
9. Footer

**Wallet Page (New):**
- Dedicated Classic OS promotion
- Four modules showcase (Produce, Portfolio, Deploy, Markets)
- Download CTAs
- Trust signals, comparison, screenshots

**Apps Directory (New):**
- Featured apps (ETCswap, ClassicUSD, Olympia DAO)
- Categories: DeFi, Infrastructure, Governance, Tools
- App cards with descriptions and links

**Stub Pages (Phase 1):**
- News, Buy, Learn, Build (coming in Phase 2/3)

---

## Positioning (Non-Negotiable)

Ethereum Classic is:
- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with Ethereum ecosystem
- A first-class execution layer for real on-chain activity

**Forward-looking:** No historical disputes, forks, or governance debates.

---

## Core Principles

### This Is a Consumer Gateway (v0.2)

**Evolution from router to platform:**
- **v0.1:** Simple router to Classic OS and ETCswap
- **v0.2:** Multi-section consumer platform (Bitcoin.com model)

**What this means:**
- **For-profit funnel** - Track clicks, optimize conversion
- **Legitimacy layer** - Establish credibility for ETC ecosystem
- **Product platform** - Wallet hub, Apps directory, Buy/Sell, News, Learn
- **Fast** - Mobile-first, <3s load time, action-oriented
- **Success metric (Phase 1)** - Wallet adoption, app discovery, downstream clicks
- **Success metric (Phase 2+)** - Return visitors, content engagement, ecosystem growth

### What NOT to Add

❌ **No wallet integration** - Promote Classic OS, don't build another wallet
❌ **No portfolio views** - Route to Classic OS instead
❌ **No DeFi interactions** - Route to ETCswap/Classic OS
❌ **No governance** - No historical debates or fork discussions

**Philosophy:** EthereumClassic.com promotes products, it doesn't replace them.

---

## Routing Strategy

### Three Primary Paths

#### 1. Use ETC
**Target:** People who want to use Ethereum Classic for DeFi, transactions, applications

**CTAs:**
- **Classic OS** → classicos.org (primary)
- **ETCswap** → etcswap.com
- **Wallets** → MetaMask, hardware wallets (with referral codes)

#### 2. Earn ETC
**Target:** Miners, liquidity providers, yield seekers

**CTAs:**
- **Mining Pools** → Link to major ETC pools
- **Classic OS (Mining OS)** → classicos.org
- **ETCswap Liquidity** → etcswap.com/liquidity

#### 3. Build on ETC
**Target:** Developers, infrastructure providers, protocol builders

**CTAs:**
- **Fukuii Client** → Link to Fukuii
- **Core-Geth** → Link to Core-Geth
- **Developer Docs** → docs.ethereumclassic.org (if exists) or GitHub

---

## Design Principles

### Visual Language

- **Protocol-grade aesthetic** - Inspired by aura.build
- **Subtle motion** - Polish and professionalism
- **Component-based** - Modern layouts, not long static sections
- **Mobile-first** - Responsive, touch-optimized
- **Fast load** - Minimal dependencies, optimized assets

### Motion Guidelines

- **Use Framer Motion** - Already in package.json
- **Subtle transitions** - Fade-ins, slide-ups on scroll
- **Performance-conscious** - No heavy animations
- **Accessibility** - Respect prefers-reduced-motion

---

## Messaging Guidelines

### Ethereum Classic Value Propositions

1. **Proof-of-Work Security**
   - Only mature PoW chain with smart contracts
   - Immutable, censorship-resistant
   - Mining-secured network

2. **Longevity & Reliability**
   - Live since 2015 (9+ years)
   - Continuous operation, no downtime
   - Battle-tested infrastructure

3. **Smart Contracts**
   - Full EVM compatibility
   - Deploy Ethereum contracts on ETC
   - Interoperable with Ethereum tooling

4. **EVM Compatibility**
   - Works with MetaMask, Remix, Hardhat
   - Existing Ethereum contracts deployable
   - First-class execution layer

### Tone

- **Confident** - ETC is mature, proven infrastructure
- **Clear** - No jargon, accessible to newcomers
- **Action-oriented** - Every section drives visitors forward
- **Forward-looking** - Focus on present capabilities and future, not past disputes

---

## Protected Files

These files define the project structure and shouldn't be modified without explicit request:

- `package.json` - Dependencies and scripts
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `docs/SCOPE-v0.2-roadmap.md` - Complete v0.2 vision
- `docs/PHASE-1-implementation-plan.md` - Phase 1 task breakdown

---

## Development Workflow (v0.2)

### Before Making Changes

1. **Read Phase 1 plan** - [`docs/PHASE-1-implementation-plan.md`](../docs/PHASE-1-implementation-plan.md)
2. **Read v0.2 roadmap** - [`docs/SCOPE-v0.2-roadmap.md`](../docs/SCOPE-v0.2-roadmap.md)
3. **Check existing code** - Understand patterns before adding

### When Adding Features

1. **Ask:** Is this in Phase 1 scope?
   - Navigation, Homepage, Wallet page, Apps directory → ✅ In scope
   - News content, Markets data, Buy functionality → ❌ Phase 2/3, defer

2. **Ask:** Does this require wallet connection or DeFi interaction?
   - If yes → **It belongs in Classic OS, not here.**

3. **Ask:** Does this require CMS or dynamic content?
   - If yes → **Phase 2+, use static content/stubs for now**

### Validation Requirements (Multi-Page Structure)

Before committing:

```bash
npm run lint         # Must pass
npm run build        # Must succeed
# Test all routes (/, /wallet, /apps, /news, /buy, /learn, /build)
# Test mobile responsive
# Test <3s load time
```

**All validation must pass.** Fix errors before committing.

---

## Component Patterns

### Page Structure (v0.2)

```typescript
// app/page.tsx (Homepage - Redesigned)
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import ProductCards from './components/ProductCards'
import TrendingNews from './components/TrendingNews'
import EcosystemStats from './components/EcosystemStats'
import ProductSuite from './components/ProductSuite'
import TrustSignals from './components/TrustSignals'
import FinalCTA from './components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProductCards />
      <TrendingNews />
      <EcosystemStats />
      <ProductSuite />
      <TrustSignals />
      <FinalCTA />
    </>
  )
}
```

```typescript
// app/wallet/page.tsx (New)
import WalletHero from './components/WalletHero'
import ClassicOSFeatures from './components/ClassicOSFeatures'
import DownloadCTAs from './components/DownloadCTAs'

export default function WalletPage() {
  return (
    <>
      <WalletHero />
      <ClassicOSFeatures />
      <DownloadCTAs />
    </>
  )
}
```

```typescript
// app/apps/page.tsx (New)
import AppsHero from './components/AppsHero'
import FeaturedApps from './components/FeaturedApps'
import CategorySections from './components/CategorySections'

export default function AppsPage() {
  return (
    <>
      <AppsHero />
      <FeaturedApps />
      <CategorySections />
    </>
  )
}
```

### Component Example (v0.2)

```typescript
// app/components/Hero.tsx (Redesigned)
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="..."
    >
      <h1>The Home of Ethereum Classic</h1>
      <p>The only mature Proof-of-Work blockchain with smart contracts</p>
      <div className="flex gap-4">
        <a href="/wallet">Get Wallet</a>
        <a href="/buy">Buy ETC</a>
      </div>
    </motion.section>
  )
}
```

---

## CTA Strategy (v0.2)

### Primary CTAs (Phase 1)

**Navigation:**
- "Launch App" → app.classicos.org (most prominent)

**Homepage:**
- "Get Wallet" → /wallet (internal)
- "Buy ETC" → /buy (internal, stub for Phase 3)
- Product cards → /wallet, /buy, /apps, /learn

**Wallet page:**
- "Launch Classic OS" → app.classicos.org
- "Read Documentation" → docs.classicos.org

**Apps directory:**
- Featured apps → ETCswap, ClassicUSD, Olympia DAO
- Category apps → Fukuii, Core-Geth, Besu, BlockScout

**All external links tracked.** Success measured by:
- Phase 1: Wallet adoption, app discovery, downstream clicks
- Phase 2+: Content engagement, return visitors

---

## Phase 1 Focus (Current)

The following are **NOT permitted**:

- Wallet connection
- Portfolio views
- DEX interfaces
- Charts or advanced dashboards
- DeFi protocol management
- Governance or ECIP content
- Historical timelines or fork debates
- Documentation or tutorials
- User accounts
- Community forums

**Anything interactive belongs in ClassicOS.**

---

## Ecosystem Context

### Read This First

**Before working on any task**, read:
- [`/docs/ecosystem/phase-0/README.md`](../../../docs/ecosystem/phase-0/README.md) - Ecosystem context
- [`docs/SCOPE-v0.1.md`](../docs/SCOPE-v0.1.md) - Locked scope
- [`docs/README.md`](../docs/README.md) - Product-specific context

### How This Site Fits

EthereumClassic.com is the **awareness layer**. Visitors come here to learn about Ethereum Classic.

**Your job:** Orient visitors and route them to their next destination within 60 seconds.

### Vertical Integration Context

Built by the architect of:
- ETCswap V2/V3/Launchpad
- Classic USD (USC)
- Fukuii ETC client
- Classic OS

**Why this matters:** All these products work together. EthereumClassic.com routes to them.

---

## Commit Guidelines

### Format

```
scope: brief description

Longer explanation if needed.

Examples:
- hero: update positioning statement
- paths: add Classic OS as primary Use ETC CTA
- footer: add Fukuii client link
```

### Commit Discipline

- **Small, focused commits** - One logical change per commit
- **Clear messages** - Explain what and why
- **Validated code** - Lint and build must pass

---

## Common Tasks

### Update Copy

1. Verify change is within locked scope
2. Find component with text
3. Update to match messaging guidelines
4. Test clarity and forward-looking tone
5. Validate: `npm run lint && npm run build`

### Add/Update CTA

1. Verify CTA destination is in locked scope
2. Track link with analytics (if implemented)
3. Test on mobile and desktop
4. Ensure clear value prop next to CTA

### Add Animation

1. Use Framer Motion
2. Keep subtle - fade-ins, slide-ups
3. Respect `prefers-reduced-motion`
4. Test performance on mobile

---

## Getting Help

### Documentation

**Product-Specific:**
- **Current scope (v0.1):** [`docs/SCOPE-v0.1.md`](../docs/SCOPE-v0.1.md)
- **Future roadmap (v0.2+):** [`docs/SCOPE-v0.2-roadmap.md`](../docs/SCOPE-v0.2-roadmap.md)
- **Product context:** [`docs/README.md`](../docs/README.md)

**Ecosystem-Wide:**
- **Strategic positioning:** [`/docs/ecosystem/positioning-ethereumclassic-com.md`](../../../docs/ecosystem/positioning-ethereumclassic-com.md)
- **Phase 0 context:** [`/docs/ecosystem/phase-0/`](../../../docs/ecosystem/phase-0/)

**Related Products:**
- **Classic OS app:** [`/products/classicos-app/docs/`](../classicos-app/docs/)
- **ClassicOS landing:** [`/products/classicos-site/docs/`](../classicos-site/docs/)

### External Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## Ecosystem Awareness

### Vertical Integration Context

All products in the ecosystem are built by the same architect:

- **EthereumClassic.com** (THIS SITE) - Consumer gateway
- **Classic OS** - Complete economic operating system
- **ETCswap V2/V3** - DEX protocols
- **ClassicUSD (USC)** - ETC-native stablecoin
- **Fukuii** - ETC client

**Benefit:** Deep integration, unified vision, no compromises.

### Cross-Product References

When working on this site, be aware of:

**Classic OS** (app.classicos.org)
- Four modules: Produce, Portfolio, Deploy, Markets
- Economic operating system positioning
- Primary destination for "Use ETC" CTA

**ClassicOS Landing** (classicos.org)
- Product marketing for Classic OS
- Consideration layer in funnel
- Explains "what is Classic OS"

**ETCswap** (etcswap.com)
- DEX V2/V3/Launchpad
- Featured in Apps directory (v0.2+)
- Primary DeFi destination

**ClassicUSD** (USC)
- ETC-native stablecoin via Brale
- Featured in Buy page (v0.2+)
- Fiat on-ramp integration

### Ecosystem Documentation

**Always read ecosystem context before starting work:**

1. [`/docs/ecosystem/phase-0/README.md`](../../../docs/ecosystem/phase-0/README.md) - Three-product launch strategy
2. [`/docs/ecosystem/positioning-ethereumclassic-com.md`](../../../docs/ecosystem/positioning-ethereumclassic-com.md) - Strategic positioning

**Why:** Understand how this site fits into the broader ecosystem strategy.

---

## Summary

**Remember:**
1. **Respect current scope (v0.1)** - Locked until ready for v0.2
2. **Be aware of v0.2 vision** - Bitcoin.com multi-section platform
3. This is a **router evolving into product platform**
4. **Forward-looking positioning** - No fork debates, no governance
5. Success = **downstream clicks** (v0.1) then **wallet adoption** (v0.2+)
6. **Validate before committing** - lint and build must pass
7. **Read ecosystem docs** - Understand vertical integration strategy
8. **Cross-product awareness** - Know how all products connect

You're building the consumer gateway for Ethereum Classic. v0.1 orients visitors and routes them to activity. v0.2+ becomes the primary platform for wallet, apps, news, learning, and markets.
