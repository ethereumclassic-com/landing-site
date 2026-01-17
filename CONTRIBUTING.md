# Contributing to EthereumClassic.com

Welcome! This guide will help you contribute to EthereumClassic.com.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Lint and build (required before committing)
npm run lint
npm run build
```

Both lint and build **must pass** before committing.

---

## What Is This Site?

EthereumClassic.com is the **top-of-funnel awareness site** in our ecosystem:

```
EthereumClassic.com (THIS SITE) → ClassicOS.org → app.classicos.org
```

**Purpose:** Answer "Why should I use Ethereum Classic, and where do I go next?" Route visitors to real ETC activity within 60 seconds.

---

## IMPORTANT: Locked Scope

**This site has a locked scope.** See [docs/SCOPE-v0.1.md](docs/SCOPE-v0.1.md).

Any change to the scope requires:
- Written decision in `control/decisions/`
- Architect approval

**If it's not explicitly in the scope, it's out of scope.**

---

## Key Principles

### 1. This Is a Router, Not an App

❌ **Do NOT add:**
- Wallet integration
- Portfolio views
- DEX interfaces
- Charts or dashboards
- Governance or ECIP content
- Historical debates
- User accounts

✅ **DO add:**
- Clear positioning for Ethereum Classic
- CTAs to ClassicOS, ETCswap, mining resources
- Legitimacy signals (network age, clients, exchanges)

**Rule:** If it needs interactivity, it belongs in ClassicOS, not here.

### 2. Forward-Looking Positioning

- **Focus on:** PoW security, smart contracts, EVM compatibility, longevity
- **Avoid:** Fork debates, governance disputes, historical timelines

### 3. Success = Downstream Clicks

We measure success by **clicks to real ETC activity**, not time on site.

---

## Development Workflow

### 1. Before You Start

Read these docs:
- [README.md](README.md) - Project overview
- [docs/SCOPE-v0.1.md](docs/SCOPE-v0.1.md) - **Locked scope (CRITICAL)**
- [docs/README.md](docs/README.md) - Product context
- [/docs/ecosystem/phase-0/](../../docs/ecosystem/phase-0/) - Ecosystem context

### 2. Verify Your Change Is In Scope

**Ask:** Is this change explicitly allowed in the locked scope?
- If **NO** → Stop. Get architect approval first.
- If **YES** → Proceed.

### 3. Making Changes

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make focused changes**
   - One logical change per commit
   - Keep diffs small and reviewable

3. **Test your changes**
   - View on mobile and desktop
   - Test all CTAs
   - Ensure fast load time

4. **Validate before committing**
   ```bash
   npm run lint    # Must pass
   npm run build   # Must succeed
   ```

5. **Commit with clear message**
   ```bash
   git commit -m "scope: brief description"
   ```

   Examples:
   - `hero: update positioning statement`
   - `paths: add Classic OS as primary Use ETC CTA`
   - `footer: add Fukuii client link`

### 4. Submitting Changes

1. Push your branch
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a pull request with:
   - Clear description of what changed
   - **Confirmation that change is within locked scope**
   - Screenshots (if visual changes)

---

## Tech Stack

- **Next.js 16.1.1** (App Router)
- **React 19.2.3**
- **Tailwind CSS 4** for styling
- **Framer Motion 12.24.0** for animations
- **TypeScript 5**

---

## Site Structure (v0.1 - Locked)

**Five sections only:**

1. **Hero** - Clear positioning, one CTA
2. **Why Ethereum Classic** - 3-4 value statements (PoW, longevity, smart contracts, EVM)
3. **What Can I Do on ETC?** - Three paths: Use, Earn, Build
4. **Who Is ETC For?** - Segmentation: users, miners, builders, institutions
5. **Footer** - Essential navigation, external links

**No additional sections without architect approval.**

---

## Positioning (Non-Negotiable)

Ethereum Classic is:
- The **only mature Proof-of-Work blockchain with smart contracts**
- Live and operating continuously since 2015
- EVM-native and interoperable with Ethereum ecosystem
- A first-class execution layer for real on-chain activity

**Forward-looking** - No historical disputes or fork debates.

---

## Three Paths (Routing Strategy)

### 1. Use ETC
Route to:
- Classic OS (classicos.org) - Primary
- ETCswap (etcswap.org)
- Wallets (MetaMask, hardware wallets)

### 2. Earn ETC
Route to:
- Mining pools
- Classic OS Mining OS (classicos.org)
- ETCswap liquidity provision

### 3. Build on ETC
Route to:
- Fukuii client
- Core-Geth client
- Developer docs

---

## Component Patterns

### Page Structure

```typescript
// app/page.tsx
import Hero from './components/Hero'
import WhyETC from './components/WhyETC'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyETC />
    </>
  )
}
```

### Component with Animation

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
    >
      <h1>The Only Mature PoW Chain with Smart Contracts</h1>
      <a href="https://classicos.org">Use ETC</a>
    </motion.section>
  )
}
```

---

## Style Guidelines

### Tailwind CSS

Use utility classes:

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold">Ethereum Classic</h1>
</div>
```

### Responsive Design

Mobile-first:

```tsx
className="text-base md:text-lg lg:text-xl"
```

### Visual Inspiration

Protocol-grade aesthetic inspired by **aura.build**:
- Subtle motion
- Component-based layouts
- Modern, professional

---

## Common Tasks

### Update Copy

1. Verify change is in locked scope
2. Find the component with the text
3. Update to match positioning guidelines
4. Test on mobile and desktop
5. Validate and commit

### Add/Update CTA

1. Verify CTA destination is in locked scope
2. Update component with new link
3. Ensure clear value prop next to CTA
4. Test on mobile and desktop
5. Validate and commit

---

## Getting Help

- **Locked scope:** [docs/SCOPE-v0.1.md](docs/SCOPE-v0.1.md)
- **Product docs:** [docs/README.md](docs/README.md)
- **Ecosystem context:** [/docs/ecosystem/phase-0/](../../docs/ecosystem/phase-0/)
- **Agent instructions:** [.claude/instructions.md](.claude/instructions.md)

---

## Code Review

Reviewers will check for:
- ✅ Change is within locked scope
- ✅ Lint and build pass
- ✅ Mobile-responsive
- ✅ Fast load time
- ✅ Forward-looking positioning (no fork debates)
- ✅ Routes to real ETC activity
- ✅ Small, focused diffs

---

## Scope Change Process

If you want to add something outside the locked scope:

1. Document the proposed change in `control/decisions/`
2. Explain why it's needed and how it fits the router model
3. Get architect approval
4. Only then implement

**Do not implement scope changes without approval.**

---

## Thank You!

Your contributions help make Ethereum Classic more accessible to new users, miners, and builders.
