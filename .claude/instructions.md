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

### Current Role (v0.1)

Answer "Why should I use Ethereum Classic, and where do I go next?" Route visitors to real ETC activity within 60 seconds.

### Evolution (v0.2+)

Transform into multi-section consumer platform (Bitcoin.com model):
- Wallet hub (Classic OS)
- Apps directory (ETCswap, ClassicUSD, Olympia DAO)
- Buy/Sell (fiat on-ramps, exchanges)
- News section (ecosystem blog)
- Learn section (education center)
- Markets (price, charts, stats)

**See:** [`docs/SCOPE-v0.2-roadmap.md`](../docs/SCOPE-v0.2-roadmap.md) for complete vision.

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

## Locked Scope

**This scope is locked.** See [`docs/SCOPE-v0.1.md`](../docs/SCOPE-v0.1.md) for complete definition.

Any change requires:
- Written decision in `control/decisions/`
- Architect approval

### Five Sections (Fixed)

1. **Hero** - Clear positioning, one CTA
2. **Why Ethereum Classic** - 3-4 value statements (PoW, longevity, smart contracts, EVM)
3. **What Can I Do on ETC?** - Three paths: Use, Earn, Build
4. **Who Is ETC For?** - Segmentation: users, miners, builders, institutions
5. **Footer** - Essential navigation, external links, legitimacy signals

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

### This Is a Router

- **For-profit funnel** - Track clicks, optimize conversion
- **Legitimacy layer** - Establish credibility for ETC ecosystem
- **Fast** - Mobile-first, minimal copy, action-oriented
- **Success metric** - Downstream clicks, NOT time on site

### What NOT to Add

❌ **No wallet integration** - Router only, not an app
❌ **No portfolio views** - Route to ClassicOS instead
❌ **No DeFi interactions** - Route to ETCswap/ClassicOS
❌ **No content engine** - No blog, no CMS, no ECIP content
❌ **No governance** - No historical debates or fork discussions

**If it's interactive, it belongs in ClassicOS, not here.**

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
- `docs/SCOPE-v0.1.md` - Locked scope definition

---

## Development Workflow

### Before Making Changes

1. **Read locked scope** - [`docs/SCOPE-v0.1.md`](../docs/SCOPE-v0.1.md)
2. **Verify it's in scope** - If not explicitly listed, it's out of scope
3. **Check existing code** - Understand patterns before adding

### When Adding Features

1. **Ask:** Is this in the locked scope?
   - If no → **Stop. Get architect approval first.**
   - If yes → Proceed with small, focused changes

2. **Ask:** Does this require interactivity?
   - If yes → **It belongs in ClassicOS, not here.**

### Validation Requirements

Before committing:

```bash
npm run lint         # Must pass
npm run build        # Must succeed
```

**Both must pass.** Fix errors before committing.

---

## Component Patterns

### Page Structure

```typescript
// app/page.tsx
import Hero from './components/Hero'
import WhyETC from './components/WhyETC'
import Paths from './components/Paths'
// ...

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyETC />
      <Paths />
      {/* ... */}
    </>
  )
}
```

### Component Example

```typescript
// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="..."
    >
      <h1>The Only Mature PoW Chain with Smart Contracts</h1>
      <p>Ethereum Classic: EVM-native, immutable, and continuously operating since 2015</p>
      <a href="https://classicos.org">Use ETC</a>
    </motion.section>
  )
}
```

---

## CTA Strategy

### Primary CTAs

All CTAs route visitors to real ETC activity:
- **Classic OS** - classicos.org (Complete economic OS)
- **ETCswap** - etcswap.com (V2/V3 DEX)
- **Mining resources** - Pools, clients (Fukuii, Core-Geth, Besu)
- **Exchanges** - With referral codes where applicable
- **Wallets** - MetaMask, hardware wallets (with referral codes)

**All links tracked.** Success measured by downstream clicks.

---

## Explicitly Out of Scope (v0.1)

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
