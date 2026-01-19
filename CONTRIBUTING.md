# Contributing to EthereumClassic.com

Welcome! This guide will help you contribute to EthereumClassic.com.

**Last Updated:** January 2026

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

## Project Overview

EthereumClassic.com is the **commercial gateway** for Ethereum Classic:

```
EthereumClassic.com (THIS SITE) → ClassicOS.org → app.classicos.org
   (awareness + products)         (consideration)    (conversion)
```

**Purpose:** Answer "Why should I use Ethereum Classic, and where do I go next?"

**Current Status:** 137 pages built, Phase 6 complete (~81% of v0.2 roadmap)

---

## Key Principles

### 1. Consumer Gateway

This site is:
- Entry point for ETC users
- Product platform (Wallet, Apps, Buy/Sell, Learn, Mining)
- For-profit funnel with click tracking
- Legitimacy layer for ETC ecosystem

### 2. Forward-Looking Positioning

- **Focus on:** PoW security, smart contracts, EVM compatibility, longevity
- **Avoid:** Fork debates, governance disputes, historical controversies

### 3. Success = Downstream Clicks

We measure success by **clicks to real ETC activity**, not time on site.

---

## Development Workflow

### 1. Before You Start

Read these docs:
- [README.md](README.md) - Project overview
- [docs/MILESTONES.md](docs/MILESTONES.md) - Development roadmap
- [docs/URL-STRUCTURE.md](docs/URL-STRUCTURE.md) - URL mapping

### 2. Making Changes

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
- **CoinGecko API** - Price data via `/api/price`
- **Blockscout API** - Network stats via `/api/network`

---

## Site Structure

### Primary Navigation
```
[Logo] News | Wallet | Apps | Buy | Learn | Mining | Build | [Markets] [Launch App]
```

### Complete Sections

| Section | Pages | Description |
|---------|-------|-------------|
| Homepage | 1 | Hero, stats, ecosystem |
| Wallet | 7 | Classic OS, hardware, compare, reviews |
| Buy/Sell | 11 | Exchanges, methods, reviews |
| Exchanges | 14 | Directory, compare, feature filters |
| Apps | 11 | DeFi, NFT, games, tools |
| Learn | 20+ | Dynamic categories and articles |
| News | 5 | Hub, articles, RSS feed |
| Mining | 10 | Pools, hardware, software |
| Build | 10 | Clients, docs, tools |
| Markets | 8 | Price, charts, calculator |
| Research | 8 | Reports, network stats |
| Tools | 6 | Gas tracker, explorer |
| Directory | 6 | Ecosystem listings |
| Community | 4 | Social, events |
| Network | 1 | Live status dashboard |
| Store | 1 | Hardware e-commerce |

**Total:** 137 page.tsx files

---

## Hooks and Live Data

Use these hooks for live data:

```typescript
// ETC Price
import { usePrice } from '@/app/hooks/usePrice'
const { price, change24h, marketCap } = usePrice('usd')

// Network Stats
import { useNetworkStats } from '@/app/hooks/useNetworkStats'
const { stats, formatted, loading } = useNetworkStats()

// Gas Prices
import { useGasPrices } from '@/app/hooks/useNetworkStats'
const { slow, average, fast } = useGasPrices()
```

---

## Component Patterns

### Page Structure

```typescript
// app/section/page.tsx
'use client'

import { motion } from 'framer-motion'

export default function SectionPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Content */}
        </div>
      </section>
    </main>
  )
}
```

### Animation

```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  {/* Content */}
</motion.div>
```

---

## Style Guidelines

### Design Tokens

```css
--color-primary: #3AB83A (ETC Green)
--bg: #0a0a0a
--panel: #111
--border: #222
--color-text-primary: #fff
--color-text-secondary: #a0a0a0
--color-text-muted: #666
```

### Responsive Design

Mobile-first approach:

```tsx
className="text-base md:text-lg lg:text-xl"
className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
```

---

## Code Review Checklist

Reviewers will check for:
- ✅ Lint and build pass
- ✅ Mobile-responsive
- ✅ Fast load time
- ✅ Forward-looking positioning
- ✅ Uses live data hooks where applicable
- ✅ Small, focused diffs

---

## Getting Help

- **Documentation:** See `/docs` folder
- **Milestones:** [docs/MILESTONES.md](docs/MILESTONES.md)
- **URL Structure:** [docs/URL-STRUCTURE.md](docs/URL-STRUCTURE.md)
- **Architecture:** [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

---

## Thank You!

Your contributions help make Ethereum Classic more accessible to new users, miners, and builders.
