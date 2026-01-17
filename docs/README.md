# EthereumClassic.com Documentation

Primary funnel site for Ethereum Classic ecosystem.

---

## Product Purpose

EthereumClassic.com is the **top-of-funnel awareness site** in the three-product ecosystem:

1. **EthereumClassic.com** - Primary funnel (this site)
2. **ClassicOS Landing Site** - Product marketing
3. **Classic OS App** - The actual product

**Goal:** Answer "Why should I use Ethereum Classic, and where do I go next?" Route visitors to real ETC activity within 60 seconds.

---

## Ecosystem Context

**Read first:** [`/docs/ecosystem/phase-0/README.md`](../../../docs/ecosystem/phase-0/README.md)

This site is part of a coordinated launch orchestrated by **Christopher Mercer**:
- ETCswap V2/V3/Launchpad founder
- Classic USD (USC) primary organizer
- Ethereum Classic core developer
- Fukuii client contributor

**Strategic advantage:** Vertical integration (protocols + interface by same architect)

---

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **React:** 19.2.3
- **Styling:** Tailwind CSS 4
- **Motion:** Framer Motion 12.24.0
- **TypeScript:** 5.x
- **Node:** 22.x

---

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

---

## Site Structure

### v0.1 Scope

See [`SCOPE-v0.1.md`](SCOPE-v0.1.md) for complete, locked scope definition.

**Five sections (fixed):**

1. **Hero** - Clear positioning statement, one CTA
2. **Why Ethereum Classic** - 3-4 value statements (PoW, longevity, smart contracts, EVM)
3. **What Can I Do on ETC?** - Three equal paths:
   - Use ETC (ClassicOS, ETCswap)
   - Earn ETC (mining, yield)
   - Build on ETC (clients, infrastructure)
4. **Who Is ETC For?** - Segmentation (users, miners, builders, institutions)
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

## Development Guidelines

### What This Site Is

- **Router** - Direct visitors to real ETC activity
- **For-profit funnel** - Track clicks, optimize conversion
- **Legitimacy layer** - Establish credibility for ETC ecosystem
- **Fast** - Mobile-first, minimal copy, action-oriented

### What This Site Is Not

- **Not a community site** - No forums, governance, or ECIP content
- **Not documentation** - No tutorials or technical guides
- **Not the app** - No wallet connection, no DeFi interactions
- **Not a blog** - No content engine or CMS

### Design Principles

- **Fast load time** - Optimized for speed
- **Mobile-first** - Responsive and touch-optimized
- **Minimal copy** - Clear, concise messaging
- **Action-oriented CTAs** - Every section routes visitors forward
- **Subtle motion** - Protocol-grade aesthetic (inspired by aura.build)

---

## Routing Strategy

### Primary CTAs

All CTAs route visitors to real ETC activity:
- **ClassicOS** - Complete economic OS
- **ETCswap** - V2/V3 DEX and launchpad
- **Mining resources** - Pools, clients (Fukuii, Core-Geth, Besu)
- **Exchanges** - With referral codes
- **Wallets** - With referral codes

**Success metric:** Downstream clicks, not time on site.

---

## Relationship to Other Products

### To ClassicOS Landing
Visitors who want to "Use ETC" click through to classicos.io to learn about the product.

### To Classic OS App
After learning about Classic OS on the landing page, visitors click through to app.classicos.io.

### Funnel Flow
```
EthereumClassic.com (awareness)
    ↓
ClassicOS.io (consideration)
    ↓
app.classicos.io (conversion)
```

---

## Scope Management

**This scope is locked.** See [`SCOPE-v0.1.md`](SCOPE-v0.1.md).

Any change requires:
- Written decision in `control/decisions/`
- Architect approval

### Explicitly Out of Scope (v0.1)

- Wallet connection
- Portfolio views
- DEX interfaces
- Charts or dashboards
- DeFi protocol management
- Governance or ECIP content
- Historical timelines
- Documentation or tutorials
- User accounts
- Community forums

**If it's interactive, it belongs in ClassicOS, not here.**

---

## File Structure

```
/app/                      # Next.js App Router
├── layout.tsx            # Root layout
├── page.tsx              # Homepage (five sections)
├── globals.css           # Global styles
└── ...

/docs/
├── README.md             # This file
└── SCOPE-v0.1.md         # Locked scope definition

/public/
└── ...                   # Static assets
```

---

## For AI Agents

### Starting Work

1. **Read ecosystem context:** [`/docs/ecosystem/phase-0/README.md`](../../../docs/ecosystem/phase-0/README.md)
2. **Read locked scope:** [`SCOPE-v0.1.md`](SCOPE-v0.1.md)
3. **Read agent instructions:** [`.claude/instructions.md`](../.claude/instructions.md)

### Key Constraints

- **Respect locked scope** - No features beyond v0.1 definition
- **No wallet integration** - Router only, not an app
- **No interactive features** - Route to ClassicOS/ETCswap instead
- **No content expansion** - Five sections, no more
- **Fast and minimal** - Every dependency must be justified

---

## Definition of Done (v0.1)

Site is complete when:
- Cold visitor can understand what Ethereum Classic is
- Visitor can identify themselves in one of three paths
- Visitor can click into real ETC usage within 60 seconds
- All CTAs resolve to real destinations
- No placeholder content exists
- Site deployed to production

---

## References

- **Ecosystem docs:** [`/docs/ecosystem/phase-0/`](../../../docs/ecosystem/phase-0/)
- **Locked scope:** [`SCOPE-v0.1.md`](SCOPE-v0.1.md)
- **Classic OS landing:** [ClassicOS site docs](../classicos-site/docs/)
- **Classic OS app:** [Classic OS app docs](../classicos-app/docs/)
