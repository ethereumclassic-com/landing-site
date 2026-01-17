# EthereumClassic.com v0.2 Phase 1 — Implementation Plan

**Status:** Ready for implementation
**Target completion:** 2026 Q1
**Phase goal:** Transform from single landing page to multi-section consumer platform foundation

---

## Overview

Phase 1 transforms EthereumClassic.com from a simple router into a **Bitcoin.com-style consumer platform** with proper navigation, multiple page sections, and clear product positioning.

### What Was v0.1?

v0.1 was a single landing page with five sections (Hero, Why ETC, Paths, Audience, Footer) designed to route visitors to Classic OS and ETCswap within 60 seconds.

**Archived:** [`docs/archive/SCOPE-v0.1-complete.md`](archive/SCOPE-v0.1-complete.md)

### What Is v0.2 Phase 1?

Multi-section platform with:
- **Navigation** - News | Wallet | Apps | Buy | Learn | Build | [Launch App]
- **Homepage** - Product-focused, stats-driven, modern layout
- **Apps Directory** - Curated ETC dApps (ETCswap, ClassicUSD, Olympia DAO)
- **Buy/Markets Page** - Where to buy ETC (100+ CEXs + ETCswap DEX)
- **Wallet Page** - Wallet directory + Classic OS as control plane
- **Stub Pages** - News, Learn, Build (Phase 2/3)

---

## Strategic Context

**Roger Ver (Bitcoin.com founder)** advised positioning EthereumClassic.com as the **commercial/consumer gateway** for Ethereum Classic, modeled after Bitcoin.com.

**Key docs to read:**
- [`SCOPE-v0.2-roadmap.md`](SCOPE-v0.2-roadmap.md) - Complete v0.2 vision
- [`/docs/ecosystem/positioning-ethereumclassic-com.md`](../../../docs/ecosystem/positioning-ethereumclassic-com.md) - Strategic positioning
- [`.claude/instructions.md`](../.claude/instructions.md) - Agent instructions (now v0.2 active)

---

## Phase 1 Sub-Phases

Phase 1 is broken into three sub-phases for clear milestones:

### Phase 1.1: Foundation (Navigation + Homepage)
**Goal:** Core structure and homepage transformation
- Navigation with all sections
- Homepage redesign with 9 sections
- **Milestone:** Multi-section site structure complete

### Phase 1.2: Content Pages (Apps + Buy/Markets + Wallet)
**Goal:** Three main content pages
- Apps directory with featured apps
- Buy/Markets page with exchange listings
- Wallet page with wallet directory + Classic OS
- **Milestone:** All primary content pages complete

### Phase 1.3: Polish (Stubs + Validation)
**Goal:** Finish stub pages and validate everything
- Create stub pages (News, Learn, Build)
- Run complete validation checklist
- Mobile testing, performance testing
- **Milestone:** Phase 1 ready for production

---

## Important: Classic OS Positioning

### Classic OS Is NOT a Wallet

**CRITICAL UNDERSTANDING:**

Classic OS is a **complete economic operating system** (control plane / meta dApp for ETC), not a wallet.

**What Classic OS actually is:**
- Control plane for economic activity on ETC
- Four modules: Produce (Mining OS), Portfolio, Deploy (DeFi automation), Markets
- Works WITH wallets (MetaMask, Ledger, etc.), doesn't replace them
- Think: Operating system for ETC, not just key management

**Wrong terminology:**
- ❌ "Classic OS Wallet"
- ❌ "Download Classic OS wallet"
- ❌ "Get wallet" (when referring only to Classic OS)

**Correct terminology:**
- ✅ "Classic OS - Economic Operating System"
- ✅ "Launch Classic OS"
- ✅ "Classic OS works with your wallet"
- ✅ "Control plane for ETC"

**This matters for:**
- Wallet page positioning (see Phase 1.2)
- All marketing copy
- User understanding of product

---

# Phase 1.1: Foundation (Navigation + Homepage)

**Goal:** Establish multi-section site structure and transform homepage

**Deliverables:**
1. Navigation with all sections (News, Wallet, Apps, Buy, Learn, Build, Launch App)
2. Homepage redesigned with 9 sections (product-focused)

**Estimated effort:** 3-4 hours

---

## Task 1.1.1: Navigation Restructure

**Goal:** Add top navigation with sections for all pages

**Files to modify:**
- `/products/ethereumclassic-com/app/components/Navigation.tsx` (create)
- `/products/ethereumclassic-com/app/layout.tsx` (add Navigation)

### Navigation Structure

```
[ETC Logo] News | Wallet | Apps | Buy | Learn | Build | [Launch App CTA]
```

### Implementation Steps

1. **Create Navigation component** (`app/components/Navigation.tsx`):

```tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white hover:text-green-500 transition">
          ETC
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/news" className="text-gray-300 hover:text-white transition">
            News
          </Link>
          <Link href="/wallet" className="text-gray-300 hover:text-white transition">
            Wallet
          </Link>
          <Link href="/apps" className="text-gray-300 hover:text-white transition">
            Apps
          </Link>
          <Link href="/buy" className="text-gray-300 hover:text-white transition">
            Buy
          </Link>
          <Link href="/learn" className="text-gray-300 hover:text-white transition">
            Learn
          </Link>
          <Link href="/build" className="text-gray-300 hover:text-white transition">
            Build
          </Link>
          <a
            href="https://app.classicos.org"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
          >
            Launch App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800 border-t border-gray-700"
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/news" className="text-gray-300 hover:text-white transition">
              News
            </Link>
            <Link href="/wallet" className="text-gray-300 hover:text-white transition">
              Wallet
            </Link>
            <Link href="/apps" className="text-gray-300 hover:text-white transition">
              Apps
            </Link>
            <Link href="/buy" className="text-gray-300 hover:text-white transition">
              Buy
            </Link>
            <Link href="/learn" className="text-gray-300 hover:text-white transition">
              Learn
            </Link>
            <Link href="/build" className="text-gray-300 hover:text-white transition">
              Build
            </Link>
            <a
              href="https://app.classicos.org"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium text-center"
            >
              Launch App
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
```

2. **Add Navigation to layout** (`app/layout.tsx`):

```tsx
import Navigation from './components/Navigation'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
```

3. **Validation:**
```bash
npm run lint
npm run build
# Test navigation on localhost:3000
# Test mobile hamburger menu
```

---

## Task 1.1.2: Homepage Redesign

**Goal:** Transform homepage from protocol explainer to product platform

**Files to modify:**
- `/products/ethereumclassic-com/app/page.tsx`
- Create component files in `/products/ethereumclassic-com/app/components/`

### New Homepage Structure

```
1. Hero - Action-oriented ("The Home of Ethereum Classic")
2. StatsStrip - Social proof (years running, transactions, TVL)
3. ProductCards - Wallet, Buy, Apps, Learn (4 cards)
4. TrendingNews - Recent articles (stub with placeholder data)
5. EcosystemStats - Network activity (hashrate, blocks, addresses, DeFi TVL)
6. ProductSuite - Classic OS, ETCswap, ClassicUSD, Olympia DAO (detailed cards)
7. TrustSignals - Security, longevity, EVM compatibility, immutability
8. FinalCTA - Download wallet, buy ETC, browse apps
9. Footer - Links, ecosystem references
```

### Implementation Steps

**Create all components, then update page.tsx:**

#### 1. Hero Component (`app/components/Hero.tsx`):

```tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-20 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        The Home of Ethereum Classic
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
        The only mature Proof-of-Work blockchain with smart contracts
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="/wallet"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
        >
          Get Wallet
        </a>
        <a
          href="/buy"
          className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium"
        >
          Buy ETC
        </a>
      </div>
    </motion.section>
  )
}
```

#### 2. StatsStrip Component (`app/components/StatsStrip.tsx`):

```tsx
interface StatProps {
  label: string
  value: string
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-green-500">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <section className="border-y border-gray-800 bg-gray-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat label="Years Running" value="9+" />
          <Stat label="Active Wallets" value="1M+" />
          <Stat label="DeFi TVL" value="$XXM" />
          <Stat label="Daily Transactions" value="XXk" />
        </div>
      </div>
    </section>
  )
}
```

**Note:** Use static values initially. Phase 2 will add real-time data.

#### 3. ProductCards Component (`app/components/ProductCards.tsx`):

```tsx
interface ProductCardProps {
  title: string
  description: string
  link: string
  icon: string
}

function ProductCard({ title, description, link, icon }: ProductCardProps) {
  return (
    <a
      href={link}
      className="p-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition group"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </a>
  )
}

export default function ProductCards() {
  const products = [
    {
      title: 'Wallet',
      description: 'Secure wallets and Classic OS control plane for ETC',
      link: '/wallet',
      icon: '💼'
    },
    {
      title: 'Buy',
      description: 'Get ETC on 100+ exchanges or ETCswap DEX',
      link: '/buy',
      icon: '💰'
    },
    {
      title: 'Apps',
      description: 'Discover DeFi, tools, and dApps on ETC',
      link: '/apps',
      icon: '🚀'
    },
    {
      title: 'Learn',
      description: 'Education center and guides for ETC',
      link: '/learn',
      icon: '📚'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get Started with Ethereum Classic
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  )
}
```

#### 4. TrendingNews Component (`app/components/TrendingNews.tsx`):

```tsx
interface NewsCardProps {
  title: string
  date: string
  link: string
}

function NewsCard({ title, date, link }: NewsCardProps) {
  return (
    <a
      href={link}
      className="p-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition"
    >
      <h3 className="font-bold mb-2 hover:text-green-500 transition">{title}</h3>
      <p className="text-sm text-gray-400">{date}</p>
    </a>
  )
}

export default function TrendingNews() {
  // Stub data - Phase 2 will add actual blog/news system
  const articles = [
    { title: 'Classic OS v1.0 Launches', date: '2026-01-15', link: '#' },
    { title: 'ETCswap V3 Now Live', date: '2026-01-10', link: '#' },
    { title: 'Fukuii Client Update', date: '2026-01-05', link: '#' }
  ]

  return (
    <section className="container mx-auto px-4 py-20 bg-gray-900/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest News</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {articles.map(article => (
          <NewsCard key={article.title} {...article} />
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/news" className="text-green-500 hover:text-green-400 transition">
          View All News →
        </a>
      </div>
    </section>
  )
}
```

#### 5. EcosystemStats Component (`app/components/EcosystemStats.tsx`):

```tsx
interface StatCardProps {
  label: string
  value: string
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
      <div className="text-2xl font-bold text-green-500 mb-2">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default function EcosystemStats() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Network Activity
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard label="Hashrate" value="XXX TH/s" />
        <StatCard label="Block Time" value="~13s" />
        <StatCard label="Active Addresses" value="XXk" />
        <StatCard label="DeFi Volume" value="$XXM" />
      </div>
    </section>
  )
}
```

**Note:** Static values for Phase 1. Phase 2 adds real-time data from ETC RPC nodes.

#### 6. ProductSuite Component (`app/components/ProductSuite.tsx`):

```tsx
interface ProductFeatureCardProps {
  name: string
  description: string
  features: string[]
  link: string
}

function ProductFeatureCard({ name, description, features, link }: ProductFeatureCardProps) {
  return (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map(feature => (
          <li key={feature} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={link}
        className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
      >
        Learn More
      </a>
    </div>
  )
}

export default function ProductSuite() {
  const products = [
    {
      name: 'Classic OS',
      description: 'Complete economic operating system for Ethereum Classic',
      features: [
        'Mining OS - Create capital',
        'Portfolio - Observe positions',
        'Deploy - DeFi automation',
        'Markets - Access liquidity'
      ],
      link: 'https://classicos.org'
    },
    {
      name: 'ETCswap',
      description: 'Decentralized exchange infrastructure (V2/V3/Launchpad)',
      features: [
        'Swap tokens',
        'Provide liquidity',
        'Yield farming',
        'Token launchpad'
      ],
      link: 'https://etcswap.org'
    },
    {
      name: 'ClassicUSD',
      description: 'ETC-native stablecoin via Brale partnership',
      features: [
        'Fiat on-ramp (ACH)',
        'Stable value',
        'DeFi integration',
        'Low fees'
      ],
      link: '#'
    },
    {
      name: 'Olympia DAO',
      description: 'Governance for the ETC ecosystem',
      features: [
        'Voting on proposals',
        'Treasury management',
        'Community coordination',
        'Protocol upgrades'
      ],
      link: '#'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20 bg-gray-900/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Product Suite
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Vertically integrated products built by the same architect
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map(product => (
          <ProductFeatureCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}
```

#### 7. TrustSignals Component (`app/components/TrustSignals.tsx`):

```tsx
interface TrustCardProps {
  title: string
  description: string
  icon: string
}

function TrustCard({ title, description, icon }: TrustCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default function TrustSignals() {
  const signals = [
    {
      title: 'Security',
      description: 'PoW-secured, battle-tested since 2015',
      icon: '🔒'
    },
    {
      title: 'Longevity',
      description: '9+ years continuous operation',
      icon: '⏱️'
    },
    {
      title: 'EVM Compatible',
      description: 'Ethereum tooling works on ETC',
      icon: '🔧'
    },
    {
      title: 'Immutable',
      description: 'Code is law, no contentious forks',
      icon: '⚖️'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Why Ethereum Classic?
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {signals.map(signal => (
          <TrustCard key={signal.title} {...signal} />
        ))}
      </div>
    </section>
  )
}
```

#### 8. FinalCTA Component (`app/components/FinalCTA.tsx`):

```tsx
export default function FinalCTA() {
  return (
    <section className="container mx-auto px-4 py-20 text-center bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Start Using Ethereum Classic Today
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="/wallet"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
        >
          Get Wallet
        </a>
        <a
          href="/buy"
          className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium"
        >
          Buy ETC
        </a>
        <a
          href="/apps"
          className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium"
        >
          Browse Apps
        </a>
      </div>
    </section>
  )
}
```

#### 9. Update page.tsx

```tsx
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

### Validation

```bash
npm run lint
npm run build
# Test all homepage sections render
# Test mobile responsive (375px, 768px, 1024px)
# Test all CTAs work
```

---

## Phase 1.1 Validation Checklist

- [ ] Navigation displays on all pages
- [ ] Navigation responsive with hamburger menu on mobile
- [ ] "Launch App" CTA prominent in navigation
- [ ] Homepage shows all 9 sections
- [ ] All internal links work (/, /news, /wallet, /apps, /buy, /learn, /build)
- [ ] Mobile responsive tested (375px, 768px, 1024px, 1440px)
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] No console errors

**Milestone:** Multi-section site structure complete ✅

---

# Phase 1.2: Content Pages (Apps + Buy/Markets + Wallet)

**Goal:** Create three main content pages with proper data structures

**Deliverables:**
1. Apps directory with featured apps
2. Buy/Markets page with exchange listings
3. Wallet page with wallet directory + Classic OS positioning

**Estimated effort:** 4-5 hours

**Implementation order:** Apps → Buy/Markets → Wallet (Wallet page references Buy page)

---

## Task 1.2.1: Apps Directory

**Goal:** Create curated ecosystem dApps directory

**Files to create:**
- `/products/ethereumclassic-com/app/apps/page.tsx`
- `/products/ethereumclassic-com/app/apps/data/apps.ts`
- `/products/ethereumclassic-com/app/apps/components/` (as needed)

### Apps Directory Structure

```
1. Hero - "Discover the Ethereum Classic Ecosystem"
2. Featured Apps - ETCswap, ClassicUSD, Olympia DAO (with "Featured" badges)
3. Category Sections - DeFi, Infrastructure, Governance, Tools
```

### Implementation Steps

#### 1. Define Apps Data Structure (`app/apps/data/apps.ts`):

```typescript
export interface App {
  name: string
  description: string
  category: 'DeFi' | 'Infrastructure' | 'Governance' | 'Tools'
  link: string
  logo?: string
  featured?: boolean
}

export const apps: App[] = [
  // Featured Apps
  {
    name: 'ETCswap',
    description: 'Decentralized exchange with V2/V3/Launchpad. Swap, provide liquidity, and farm yields on Ethereum Classic.',
    category: 'DeFi',
    link: 'https://etcswap.org',
    featured: true
  },
  {
    name: 'ClassicUSD',
    description: 'ETC-native stablecoin via Brale. Fiat on-ramp with ACH deposits and DeFi integration.',
    category: 'DeFi',
    link: '#',
    featured: true
  },
  {
    name: 'Olympia DAO',
    description: 'Governance for the ETC ecosystem. Proposals, voting, and treasury management.',
    category: 'Governance',
    link: '#',
    featured: true
  },

  // Infrastructure
  {
    name: 'Fukuii',
    description: 'First-class enterprise Ethereum Classic client with no upstream dependencies.',
    category: 'Infrastructure',
    link: 'https://github.com/etclabscore/core-geth'
  },
  {
    name: 'Core-Geth',
    description: 'Ethereum Classic client based on go-ethereum.',
    category: 'Infrastructure',
    link: 'https://github.com/etclabscore/core-geth'
  },
  {
    name: 'Besu',
    description: 'Enterprise-grade Ethereum client supporting ETC.',
    category: 'Infrastructure',
    link: 'https://github.com/hyperledger/besu'
  },

  // Tools
  {
    name: 'BlockScout',
    description: 'Ethereum Classic block explorer for viewing transactions, addresses, and contracts.',
    category: 'Tools',
    link: 'https://blockscout.com/etc/mainnet'
  },
  {
    name: 'Classic OS',
    description: 'Economic operating system with Mining OS, Portfolio tracking, DeFi automation, and Markets access.',
    category: 'Tools',
    link: 'https://app.classicos.org'
  }
]
```

#### 2. Create Apps Page (`app/apps/page.tsx`):

```tsx
import type { Metadata } from 'next'
import AppsHero from './components/AppsHero'
import FeaturedApps from './components/FeaturedApps'
import CategorySections from './components/CategorySections'

export const metadata: Metadata = {
  title: 'Apps | EthereumClassic.com',
  description: 'Discover DeFi, tools, and dApps built on Ethereum Classic'
}

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

#### 3. AppsHero Component (`app/apps/components/AppsHero.tsx`):

```tsx
export default function AppsHero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Discover the Ethereum Classic Ecosystem
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Explore DeFi protocols, developer tools, and infrastructure built on Ethereum Classic
      </p>
    </section>
  )
}
```

#### 4. AppCard Component (`app/apps/components/AppCard.tsx`):

```tsx
import type { App } from '../data/apps'

interface AppCardProps {
  app: App
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <a
      href={app.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition group relative"
    >
      {app.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
          Featured
        </div>
      )}

      <div className="mb-4">
        {app.logo ? (
          <img src={app.logo} alt={app.name} className="h-12 w-12" />
        ) : (
          <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            {app.name[0]}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition">
        {app.name}
      </h3>

      <p className="text-gray-400 mb-4">{app.description}</p>

      <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
        {app.category}
      </span>
    </a>
  )
}
```

#### 5. FeaturedApps Component (`app/apps/components/FeaturedApps.tsx`):

```tsx
import { apps } from '../data/apps'
import AppCard from './AppCard'

export default function FeaturedApps() {
  const featuredApps = apps.filter(app => app.featured)

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Apps</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {featuredApps.map(app => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  )
}
```

#### 6. CategorySections Component (`app/apps/components/CategorySections.tsx`):

```tsx
import { apps } from '../data/apps'
import AppCard from './AppCard'

export default function CategorySections() {
  const categories = ['DeFi', 'Infrastructure', 'Governance', 'Tools'] as const

  return (
    <div className="bg-gray-900/30">
      {categories.map(category => {
        const categoryApps = apps.filter(app => app.category === category)

        if (categoryApps.length === 0) return null

        return (
          <section key={category} className="container mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{category}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {categoryApps.map(app => (
                <AppCard key={app.name} app={app} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
```

### Validation

```bash
npm run lint
npm run build
# Test /apps route
# Test featured badges display
# Test all app links
# Test categories render correctly
```

---

## Task 1.2.2: Buy/Markets Page

**Goal:** Create page listing where to buy ETC (100+ CEXs + ETCswap DEX)

**Files to create:**
- `/products/ethereumclassic-com/app/buy/page.tsx`
- `/products/ethereumclassic-com/app/buy/data/exchanges.ts`
- `/products/ethereumclassic-com/app/buy/components/` (as needed)

### Buy/Markets Page Structure

```
1. Hero - "Buy Ethereum Classic"
2. DEX Section (Featured) - ETCswap
3. Major CEX Section - Top 10 by 24h volume
4. All Exchanges Section - 100+ CEXs
5. How to Buy Guide - Step-by-step instructions
```

### Exchange Data

**Source:** CoinGecko (2026-01-16)

**Top 10 by 24h volume:**
1. Binance - $4.17M (7.25%)
2. MEXC - $2.84M (4.94%)
3. Upbit - $2.48M (4.31%)
4. Gate.io - $1.48M (2.56%)
5. OKX - $1.29M (2.24%)
6. Coinbase - $0.52M (0.91%)
7. KuCoin - $0.52M (0.91%)
8. Bybit - $0.31M (0.53%)
9. Kraken - $0.11M (0.20%)
10. Bitget - $0.15M (0.26%)

**Plus 100+ additional CEXs** from CoinGecko list.

### Implementation Steps

#### 1. Define Exchange Data Structure (`app/buy/data/exchanges.ts`):

```typescript
export interface Exchange {
  name: string
  type: 'CEX' | 'DEX'
  featured?: boolean
  volume24h?: string  // Static for Phase 1
  pairs: string[]
  regions: string[]  // e.g., ['Global', 'US', 'EU', 'Asia']
  link: string
  referralLink?: string  // Use when affiliate program signed up
  logo?: string
}

export const exchanges: Exchange[] = [
  // DEX (Featured)
  {
    name: 'ETCswap',
    type: 'DEX',
    featured: true,
    pairs: ['ETC/USDC', 'ETC/USC', 'ETC/WBTC'],
    regions: ['Global'],
    link: 'https://etcswap.org',
    volume24h: 'DEX'
  },

  // Top 10 CEXs by Volume (Featured)
  {
    name: 'Binance',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USDT', 'ETC/BTC', 'ETC/USDC', 'ETC/FDUSD', 'ETC/ETH', 'ETC/TRY'],
    regions: ['Global'],
    link: 'https://www.binance.com',
    // referralLink: 'https://www.binance.com?ref=XXX', // TODO: Sign up for affiliate
    volume24h: '$4.17M'
  },
  {
    name: 'MEXC',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USDT', 'ETC/BTC', 'ETC/USDC'],
    regions: ['Global'],
    link: 'https://www.mexc.com',
    volume24h: '$2.84M'
  },
  {
    name: 'Upbit',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/KRW', 'ETC/USDT', 'ETC/BTC'],
    regions: ['Asia', 'Korea'],
    link: 'https://upbit.com',
    volume24h: '$2.48M'
  },
  {
    name: 'Gate.io',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USDT', 'ETC/ETH'],
    regions: ['Global'],
    link: 'https://www.gate.io',
    volume24h: '$1.48M'
  },
  {
    name: 'OKX',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USDT', 'ETC/USD'],
    regions: ['Global', 'Asia', 'EU'],
    link: 'https://www.okx.com',
    volume24h: '$1.29M'
  },
  {
    name: 'Coinbase',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USD', 'ETC/GBP', 'ETC/EUR', 'ETC/BTC'],
    regions: ['US', 'EU', 'UK'],
    link: 'https://www.coinbase.com',
    volume24h: '$0.52M'
  },
  {
    name: 'KuCoin',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USDT', 'ETC/ETH', 'ETC/USDC'],
    regions: ['Global'],
    link: 'https://www.kucoin.com',
    volume24h: '$0.52M'
  },
  {
    name: 'Bybit',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USDT'],
    regions: ['Global'],
    link: 'https://www.bybit.com',
    volume24h: '$0.31M'
  },
  {
    name: 'Kraken',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USD', 'ETC/EUR', 'ETC/BTC', 'ETC/ETH'],
    regions: ['US', 'EU'],
    link: 'https://www.kraken.com',
    volume24h: '$0.11M'
  },
  {
    name: 'Bitget',
    type: 'CEX',
    featured: true,
    pairs: ['ETC/USDT', 'ETC/BTC'],
    regions: ['Global'],
    link: 'https://www.bitget.com',
    volume24h: '$0.15M'
  },

  // Additional CEXs (90+ more from CoinGecko list)
  {
    name: 'HTX',
    type: 'CEX',
    pairs: ['ETC/USDT'],
    regions: ['Global', 'Asia'],
    link: 'https://www.htx.com',
    volume24h: '$0.07M'
  },
  {
    name: 'WhiteBIT',
    type: 'CEX',
    pairs: ['ETC/USDT', 'ETC/USDC', 'ETC/BTC', 'ETC/EUR', 'ETC/TRY', 'ETC/UAH'],
    regions: ['EU'],
    link: 'https://whitebit.com',
    volume24h: '$1.39M'
  },
  {
    name: 'Bitfinex',
    type: 'CEX',
    pairs: ['ETC/USD', 'ETC/BTC', 'ETC/USDT'],
    regions: ['Global'],
    link: 'https://www.bitfinex.com',
    volume24h: '$0.01M'
  },
  {
    name: 'Poloniex',
    type: 'CEX',
    pairs: ['ETC/USDT', 'ETC/BTC', 'ETC/ETH'],
    regions: ['Global'],
    link: 'https://poloniex.com',
    volume24h: '$2.70M'
  },
  {
    name: 'CoinEx',
    type: 'CEX',
    pairs: ['ETC/USDT', 'ETC/BTC', 'ETC/USDC'],
    regions: ['Global'],
    link: 'https://www.coinex.com',
    volume24h: '$0.12M'
  },
  {
    name: 'Bithumb',
    type: 'CEX',
    pairs: ['ETC/KRW'],
    regions: ['Asia', 'Korea'],
    link: 'https://www.bithumb.com',
    volume24h: '$0.65M'
  },
  {
    name: 'Phemex',
    type: 'CEX',
    pairs: ['ETC/USDT'],
    regions: ['Global'],
    link: 'https://phemex.com',
    volume24h: '$0.93M'
  },
  {
    name: 'BingX',
    type: 'CEX',
    pairs: ['ETC/USDT'],
    regions: ['Global'],
    link: 'https://bingx.com',
    volume24h: '$0.52M'
  },
  {
    name: 'Crypto.com',
    type: 'CEX',
    pairs: ['ETC/USD', 'ETC/USDT'],
    regions: ['Global', 'US', 'EU'],
    link: 'https://crypto.com',
    volume24h: '$0.01M'
  },
  {
    name: 'Bitstamp',
    type: 'CEX',
    pairs: ['ETC/USD', 'ETC/EUR'],
    regions: ['US', 'EU'],
    link: 'https://www.bitstamp.net',
    volume24h: '$0.03M'
  }

  // TODO: Add remaining 80+ exchanges from CoinGecko list
  // See user-provided data for complete list
]
```

#### 2. Create Buy Page (`app/buy/page.tsx`):

```tsx
import type { Metadata } from 'next'
import BuyHero from './components/BuyHero'
import FeaturedDEX from './components/FeaturedDEX'
import MajorExchanges from './components/MajorExchanges'
import AllExchanges from './components/AllExchanges'
import HowToBuy from './components/HowToBuy'

export const metadata: Metadata = {
  title: 'Buy ETC | EthereumClassic.com',
  description: 'Buy Ethereum Classic on 100+ exchanges or ETCswap DEX'
}

export default function BuyPage() {
  return (
    <>
      <BuyHero />
      <FeaturedDEX />
      <MajorExchanges />
      <AllExchanges />
      <HowToBuy />
    </>
  )
}
```

#### 3. BuyHero Component (`app/buy/components/BuyHero.tsx`):

```tsx
export default function BuyHero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Buy Ethereum Classic
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Get ETC on major centralized exchanges or trade directly on ETCswap DEX
      </p>
    </section>
  )
}
```

#### 4. ExchangeCard Component (`app/buy/components/ExchangeCard.tsx`):

```typescript
import type { Exchange } from '../data/exchanges'

interface ExchangeCardProps {
  exchange: Exchange
}

export default function ExchangeCard({ exchange }: ExchangeCardProps) {
  const href = exchange.referralLink || exchange.link

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition group relative"
    >
      {exchange.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
          Featured
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold group-hover:text-green-500 transition">
            {exchange.name}
          </h3>
          <span className="text-sm text-gray-400">{exchange.type}</span>
        </div>
        {exchange.volume24h && (
          <div className="text-right">
            <div className="text-sm text-gray-400">24h Volume</div>
            <div className="font-bold text-green-500">{exchange.volume24h}</div>
          </div>
        )}
      </div>

      <div className="mb-3">
        <div className="text-sm text-gray-400 mb-1">Trading Pairs:</div>
        <div className="flex flex-wrap gap-2">
          {exchange.pairs.slice(0, 3).map(pair => (
            <span key={pair} className="px-2 py-1 bg-gray-700 text-xs rounded">
              {pair}
            </span>
          ))}
          {exchange.pairs.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-xs rounded">
              +{exchange.pairs.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-400">
        {exchange.regions.join(', ')}
      </div>
    </a>
  )
}
```

#### 5. FeaturedDEX Component (`app/buy/components/FeaturedDEX.tsx`):

```tsx
import { exchanges } from '../data/exchanges'
import ExchangeCard from './ExchangeCard'

export default function FeaturedDEX() {
  const dex = exchanges.find(ex => ex.type === 'DEX' && ex.featured)

  if (!dex) return null

  return (
    <section className="container mx-auto px-4 py-12 bg-green-900/10 border-y border-green-900/30">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Trade on Decentralized Exchange
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        ETCswap is Ethereum Classic's native DEX - trade directly from your wallet with no KYC
      </p>
      <div className="max-w-2xl mx-auto">
        <ExchangeCard exchange={dex} />
      </div>
    </section>
  )
}
```

#### 6. MajorExchanges Component (`app/buy/components/MajorExchanges.tsx`):

```tsx
import { exchanges } from '../data/exchanges'
import ExchangeCard from './ExchangeCard'

export default function MajorExchanges() {
  const majorExchanges = exchanges
    .filter(ex => ex.type === 'CEX' && ex.featured)
    .sort((a, b) => {
      const aVol = parseFloat(a.volume24h?.replace(/[$M,]/g, '') || '0')
      const bVol = parseFloat(b.volume24h?.replace(/[$M,]/g, '') || '0')
      return bVol - aVol
    })

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Major Exchanges
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Top centralized exchanges by 24h trading volume
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {majorExchanges.map(exchange => (
          <ExchangeCard key={exchange.name} exchange={exchange} />
        ))}
      </div>
    </section>
  )
}
```

#### 7. AllExchanges Component (`app/buy/components/AllExchanges.tsx`):

```tsx
import { exchanges } from '../data/exchanges'
import ExchangeCard from './ExchangeCard'

export default function AllExchanges() {
  const additionalExchanges = exchanges.filter(ex => ex.type === 'CEX' && !ex.featured)

  return (
    <section className="container mx-auto px-4 py-20 bg-gray-900/30">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        All Exchanges
      </h2>
      <p className="text-gray-400 text-center mb-12">
        100+ centralized exchanges support ETC
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalExchanges.map(exchange => (
          <ExchangeCard key={exchange.name} exchange={exchange} />
        ))}
      </div>
    </section>
  )
}
```

#### 8. HowToBuy Component (`app/buy/components/HowToBuy.tsx`):

```tsx
interface StepProps {
  number: number
  title: string
  description: string
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default function HowToBuy() {
  const steps = [
    {
      number: 1,
      title: 'Choose an Exchange',
      description: 'Select a centralized exchange (CEX) or use ETCswap DEX for direct trading from your wallet.'
    },
    {
      number: 2,
      title: 'Create Account (CEX only)',
      description: 'Sign up and complete KYC verification. DEX trading requires no account.'
    },
    {
      number: 3,
      title: 'Deposit Funds',
      description: 'Deposit fiat currency (USD, EUR, etc.) or cryptocurrency (BTC, USDT, etc.).'
    },
    {
      number: 4,
      title: 'Buy ETC',
      description: 'Place a buy order for ETC using your preferred trading pair.'
    },
    {
      number: 5,
      title: 'Withdraw to Wallet',
      description: 'Transfer ETC to your personal wallet or use Classic OS as your control plane.'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        How to Buy ETC
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map(step => (
          <Step key={step.number} {...step} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="/wallet"
          className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
        >
          Get a Wallet
        </a>
      </div>
    </section>
  )
}
```

### Validation

```bash
npm run lint
npm run build
# Test /buy route
# Test DEX section (ETCswap)
# Test Major Exchanges display top 10
# Test All Exchanges section
# Test all exchange links open correctly
```

---

## Task 1.2.3: Wallet Page (Corrected Positioning)

**Goal:** Create Wallet directory + Classic OS as control plane

**IMPORTANT:** This page is NOT "Classic OS Wallet page" - it's "Wallets + Classic OS" page.

**Files to create:**
- `/products/ethereumclassic-com/app/wallet/page.tsx`
- `/products/ethereumclassic-com/app/wallet/data/wallets.ts`
- `/products/ethereumclassic-com/app/wallet/components/` (as needed)

### Wallet Page Structure

```
1. Hero - "Wallets & Interface for Ethereum Classic"
2. Classic OS Section - "Your Control Plane for ETC" (NOT "wallet")
3. Wallet Directory - Categories: Hardware, Browser, Mobile, Web (50+ wallets)
4. Why Classic OS Section - Comparison between basic wallet and Classic OS experience
```

### Wallet Data

**Source:** https://ethereumclassic.org/services/wallets

**Categories:**
- **Hardware:** Ledger, Trezor, SafePal, CoolBitX, Ellipal, HTC Exodus, KeyPal, Parity Signer
- **Browser:** MetaMask, MathWallet, TokenPocket, Nifty Wallet, Brave, Opera, SimpleHold
- **Mobile:** Trust Wallet, Exodus, Coinomi, Edge, Atomic Wallet, Guarda, Emerald Wallet, Alpha Wallet, Zelcore, ZenGo
- **Web:** MyEtherWallet, MyCrypto, Coin Wallet, Portis

### Implementation Steps

#### 1. Define Wallet Data Structure (`app/wallet/data/wallets.ts`):

```typescript
export interface Wallet {
  name: string
  type: 'Hardware' | 'Browser' | 'Mobile' | 'Web'
  description: string
  link: string
  supportsClassicOS?: boolean  // Can connect to Classic OS
  logo?: string
}

export const wallets: Wallet[] = [
  // Hardware Wallets
  {
    name: 'Ledger',
    type: 'Hardware',
    description: 'Industry-standard hardware wallet with secure cold storage',
    link: 'https://www.ledger.com',
    supportsClassicOS: true
  },
  {
    name: 'Trezor',
    type: 'Hardware',
    description: 'Popular hardware wallet with open-source firmware',
    link: 'https://trezor.io',
    supportsClassicOS: true
  },
  {
    name: 'SafePal',
    type: 'Hardware',
    description: 'Hardware wallet solution with mobile app integration',
    link: 'https://www.safepal.com',
    supportsClassicOS: false
  },
  {
    name: 'CoolBitX',
    type: 'Hardware',
    description: 'Credit card-sized hardware wallet',
    link: 'https://coolbitx.com',
    supportsClassicOS: false
  },
  {
    name: 'Ellipal',
    type: 'Hardware',
    description: 'Air-gapped hardware wallet for maximum security',
    link: 'https://www.ellipal.com',
    supportsClassicOS: false
  },

  // Browser Wallets
  {
    name: 'MetaMask',
    type: 'Browser',
    description: 'Most popular browser extension wallet for Ethereum and ETC',
    link: 'https://metamask.io',
    supportsClassicOS: true
  },
  {
    name: 'MathWallet',
    type: 'Browser',
    description: 'Multi-chain browser extension wallet',
    link: 'https://mathwallet.org',
    supportsClassicOS: false
  },
  {
    name: 'TokenPocket',
    type: 'Browser',
    description: 'Multi-chain browser wallet with DeFi support',
    link: 'https://www.tokenpocket.pro',
    supportsClassicOS: false
  },
  {
    name: 'Brave Wallet',
    type: 'Browser',
    description: 'Built-in wallet in Brave browser',
    link: 'https://brave.com/wallet',
    supportsClassicOS: true
  },
  {
    name: 'Opera Crypto Wallet',
    type: 'Browser',
    description: 'Native crypto wallet in Opera browser',
    link: 'https://www.opera.com/crypto',
    supportsClassicOS: false
  },

  // Mobile Wallets
  {
    name: 'Trust Wallet',
    type: 'Mobile',
    description: 'Popular mobile wallet with DeFi browser',
    link: 'https://trustwallet.com',
    supportsClassicOS: false
  },
  {
    name: 'Exodus',
    type: 'Mobile',
    description: 'Beautiful multi-asset wallet with built-in exchange',
    link: 'https://www.exodus.com',
    supportsClassicOS: false
  },
  {
    name: 'Coinomi',
    type: 'Mobile',
    description: 'Multi-chain mobile wallet with strong privacy',
    link: 'https://www.coinomi.com',
    supportsClassicOS: false
  },
  {
    name: 'Edge',
    type: 'Mobile',
    description: 'Mobile wallet with buy/sell and exchange features',
    link: 'https://edge.app',
    supportsClassicOS: false
  },
  {
    name: 'Atomic Wallet',
    type: 'Mobile',
    description: 'Decentralized multi-asset wallet',
    link: 'https://atomicwallet.io',
    supportsClassicOS: false
  },
  {
    name: 'Guarda',
    type: 'Mobile',
    description: 'Multi-currency wallet with staking support',
    link: 'https://guarda.com',
    supportsClassicOS: false
  },
  {
    name: 'Emerald Wallet',
    type: 'Mobile',
    description: 'ETC-focused wallet by ETCLabs',
    link: 'https://emerald.cash',
    supportsClassicOS: false
  },
  {
    name: 'Zelcore',
    type: 'Mobile',
    description: 'Multi-asset wallet with advanced features',
    link: 'https://zelcore.io',
    supportsClassicOS: false
  },
  {
    name: 'ZenGo',
    type: 'Mobile',
    description: 'Keyless wallet with biometric security',
    link: 'https://zengo.com',
    supportsClassicOS: false
  },

  // Web Wallets
  {
    name: 'MyEtherWallet',
    type: 'Web',
    description: 'Popular web interface for Ethereum and ETC',
    link: 'https://www.myetherwallet.com',
    supportsClassicOS: false
  },
  {
    name: 'MyCrypto',
    type: 'Web',
    description: 'Web-based account management for ETC',
    link: 'https://mycrypto.com',
    supportsClassicOS: false
  },
  {
    name: 'Coin Wallet',
    type: 'Web',
    description: 'Simple web wallet for ETC',
    link: 'https://coin.space',
    supportsClassicOS: false
  }

  // TODO: Add remaining 30+ wallets from ethereumclassic.org/services/wallets
]
```

#### 2. Create Wallet Page (`app/wallet/page.tsx`):

```tsx
import type { Metadata } from 'next'
import WalletHero from './components/WalletHero'
import ClassicOSSection from './components/ClassicOSSection'
import WalletDirectory from './components/WalletDirectory'
import WhyClassicOS from './components/WhyClassicOS'

export const metadata: Metadata = {
  title: 'Wallets & Classic OS | EthereumClassic.com',
  description: 'Choose your ETC wallet and use Classic OS as your control plane'
}

export default function WalletPage() {
  return (
    <>
      <WalletHero />
      <ClassicOSSection />
      <WalletDirectory />
      <WhyClassicOS />
    </>
  )
}
```

#### 3. WalletHero Component (`app/wallet/components/WalletHero.tsx`):

```tsx
export default function WalletHero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Wallets & Interface for Ethereum Classic
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Choose a secure wallet for key management, then use Classic OS as your control plane for economic activity
      </p>
    </section>
  )
}
```

#### 4. ClassicOSSection Component (`app/wallet/components/ClassicOSSection.tsx`):

```tsx
'use client'

import { motion } from 'framer-motion'

interface ModuleCardProps {
  module: string
  title: string
  description: string
  icon: string
}

function ModuleCard({ module, title, description, icon }: ModuleCardProps) {
  return (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-sm text-green-500 font-bold mb-2">{module}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default function ClassicOSSection() {
  const modules = [
    {
      module: 'Produce',
      title: 'Create Capital',
      description: 'Mining OS with payout detection and direct pathway to DeFi',
      icon: '⛏️'
    },
    {
      module: 'Portfolio',
      title: 'Observe Capital',
      description: 'Unified dashboard, transaction history, P&L tracking',
      icon: '📊'
    },
    {
      module: 'Deploy',
      title: 'Allocate Capital',
      description: 'Automated position management, liquidation protection',
      icon: '🚀'
    },
    {
      module: 'Markets',
      title: 'Access Liquidity',
      description: 'DEX aggregation, stablecoin access, fiat on-ramps',
      icon: '💱'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20 bg-green-900/10 border-y border-green-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Classic OS: Your Control Plane for ETC
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            Classic OS is not a wallet - it's a complete economic operating system that works WITH your wallet.
            Think of it as the control plane for all your ETC economic activity.
          </p>
          <a
            href="https://app.classicos.org"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
          >
            Launch Classic OS
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map(module => (
            <ModuleCard key={module.module} {...module} />
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
          <p className="text-gray-300 text-center">
            <strong className="text-white">Works with any wallet:</strong> MetaMask, Ledger, Trezor, and more.
            Classic OS connects to your existing wallet for secure transaction signing.
          </p>
        </div>
      </div>
    </section>
  )
}
```

#### 5. WalletCard Component (`app/wallet/components/WalletCard.tsx`):

```tsx
import type { Wallet } from '../data/wallets'

interface WalletCardProps {
  wallet: Wallet
}

export default function WalletCard({ wallet }: WalletCardProps) {
  return (
    <a
      href={wallet.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition group"
    >
      <div className="mb-4">
        {wallet.logo ? (
          <img src={wallet.logo} alt={wallet.name} className="h-12 w-12" />
        ) : (
          <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            {wallet.name[0]}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition">
        {wallet.name}
      </h3>

      <p className="text-gray-400 text-sm mb-3">{wallet.description}</p>

      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
          {wallet.type}
        </span>
        {wallet.supportsClassicOS && (
          <span className="px-3 py-1 bg-green-900/50 text-green-400 text-xs rounded-full border border-green-900">
            Classic OS Compatible
          </span>
        )}
      </div>
    </a>
  )
}
```

#### 6. WalletDirectory Component (`app/wallet/components/WalletDirectory.tsx`):

```tsx
import { wallets } from '../data/wallets'
import WalletCard from './WalletCard'

export default function WalletDirectory() {
  const categories = ['Hardware', 'Browser', 'Mobile', 'Web'] as const

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Choose Your Wallet
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Secure your ETC with hardware wallets for maximum security, or use browser/mobile wallets for convenience
      </p>

      {categories.map(category => {
        const categoryWallets = wallets.filter(wallet => wallet.type === category)

        if (categoryWallets.length === 0) return null

        return (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold mb-6">{category} Wallets</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryWallets.map(wallet => (
                <WalletCard key={wallet.name} wallet={wallet} />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
```

#### 7. WhyClassicOS Component (`app/wallet/components/WhyClassicOS.tsx`):

```tsx
interface ComparisonCardProps {
  title: string
  features: string[]
  highlighted?: boolean
}

function ComparisonCard({ title, features, highlighted }: ComparisonCardProps) {
  return (
    <div className={`p-6 rounded-lg border ${
      highlighted
        ? 'bg-green-900/20 border-green-900'
        : 'bg-gray-800 border-gray-700'
    }`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map(feature => (
          <li key={feature} className="flex items-start">
            <span className={highlighted ? 'text-green-500' : 'text-gray-500'}>
              {highlighted ? '✓' : '○'}
            </span>
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function WhyClassicOS() {
  return (
    <section className="container mx-auto px-4 py-20 bg-gray-900/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Basic Wallet vs Classic OS Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ComparisonCard
          title="Basic Wallet"
          features={[
            'Send and receive ETC',
            'View token balances',
            'Transaction history',
            'Manual DeFi interaction',
            'No mining integration',
            'Limited portfolio tracking'
          ]}
        />

        <ComparisonCard
          title="Wallet + Classic OS"
          highlighted
          features={[
            'Everything a basic wallet does',
            '+ Mining OS with payout detection',
            '+ Unified portfolio dashboard',
            '+ Automated DeFi position management',
            '+ DEX aggregation across protocols',
            '+ Real-time P&L tracking',
            '+ Liquidation protection',
            '+ Fiat on-ramp integration'
          ]}
        />
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Classic OS enhances your wallet experience without replacing it.
          Use any wallet for key management, then connect to Classic OS for advanced features.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://app.classicos.org"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
          >
            Launch Classic OS
          </a>
          <a
            href="https://docs.classicos.org"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  )
}
```

### Validation

```bash
npm run lint
npm run build
# Test /wallet route
# Test Classic OS section positioning (control plane, NOT wallet)
# Test wallet directory displays all categories
# Test "Classic OS Compatible" badges
# Test comparison section clarity
```

---

## Phase 1.2 Validation Checklist

- [ ] Apps directory accessible via /apps
- [ ] Featured apps show "Featured" badges (ETCswap, ClassicUSD, Olympia DAO)
- [ ] All app categories display correctly
- [ ] All app links work
- [ ] Buy/Markets page accessible via /buy
- [ ] ETCswap DEX featured prominently
- [ ] Major exchanges section shows top 10
- [ ] All exchanges section shows 100+
- [ ] All exchange links work
- [ ] Wallet page accessible via /wallet
- [ ] Classic OS positioned as "control plane" NOT "wallet"
- [ ] Wallet directory shows all categories (Hardware, Browser, Mobile, Web)
- [ ] "Classic OS Compatible" badges display correctly
- [ ] Comparison section clear about wallet vs Classic OS
- [ ] Mobile responsive on all three pages
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds

**Milestone:** All primary content pages complete ✅

---

# Phase 1.3: Polish (Stubs + Validation)

**Goal:** Create stub pages and perform complete validation

**Deliverables:**
1. Stub pages for News, Learn, Build
2. Complete validation checklist
3. Mobile and performance testing

**Estimated effort:** 1-2 hours

---

## Task 1.3.1: Create Stub Pages

Create placeholder pages for sections coming in Phase 2/3.

### News Page Stub (`app/news/page.tsx`):

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News | EthereumClassic.com',
  description: 'Ethereum Classic ecosystem news and updates'
}

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-5xl font-bold mb-6">News</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Ecosystem news and blog coming in Phase 2
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">
          Back to Home
        </a>
        <a href="/apps" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
          Browse Apps
        </a>
      </div>
    </div>
  )
}
```

### Learn Page Stub (`app/learn/page.tsx`):

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn | EthereumClassic.com',
  description: 'Education center for Ethereum Classic'
}

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-5xl font-bold mb-6">Learn</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Education center and guides coming in Phase 2
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">
          Back to Home
        </a>
        <a href="https://docs.classicos.org" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
          Classic OS Docs
        </a>
      </div>
    </div>
  )
}
```

### Build Page Stub (`app/build/page.tsx`):

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build | EthereumClassic.com',
  description: 'Developer resources for Ethereum Classic'
}

export default function BuildPage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-5xl font-bold mb-6">Build on ETC</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Developer resources and documentation coming in Phase 3
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">
          Back to Home
        </a>
        <a href="/apps" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
          View Infrastructure
        </a>
      </div>
    </div>
  )
}
```

---

## Task 1.3.2: Complete Validation

### Functional Validation

```bash
# Run linting
npm run lint

# Run build
npm run build

# Start dev server
npm run dev
```

**Test all routes:**
- [ ] / (homepage)
- [ ] /wallet
- [ ] /apps
- [ ] /buy
- [ ] /news (stub)
- [ ] /learn (stub)
- [ ] /build (stub)

**Test navigation:**
- [ ] Navigation displays on all pages
- [ ] Hamburger menu works on mobile
- [ ] All nav links work
- [ ] "Launch App" CTA works

**Test CTAs:**
- [ ] "Get Wallet" → /wallet
- [ ] "Buy ETC" → /buy
- [ ] "Browse Apps" → /apps
- [ ] "Launch Classic OS" → app.classicos.org
- [ ] "Read Documentation" → docs.classicos.org
- [ ] Exchange links open correctly
- [ ] Wallet links open correctly
- [ ] App links open correctly

### Mobile Responsive Testing

Test on these breakpoints:
- [ ] 375px (iPhone SE)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)
- [ ] 1440px (Desktop)

**Check:**
- [ ] Navigation hamburger menu on mobile
- [ ] All sections stack properly
- [ ] Text readable on mobile
- [ ] CTAs accessible on mobile
- [ ] No horizontal scroll
- [ ] Images/cards responsive

### Performance Testing

```bash
# Build for production
npm run build

# Check bundle size
npm run build -- --analyze  # if analyzer configured

# Test load time
# Use Chrome DevTools Network tab (throttle to 4G)
# Target: <3s load time
```

**Check:**
- [ ] Homepage loads <3s on 4G
- [ ] All pages load <3s on 4G
- [ ] No console errors
- [ ] No console warnings (except expected)
- [ ] Smooth animations (no jank)

### Visual Consistency

- [ ] Dark theme consistent across all pages
- [ ] ETC green accent (#059669 or similar) used correctly
- [ ] Typography hierarchy clear
- [ ] Spacing consistent (Tailwind spacing scale)
- [ ] Component styles match across pages
- [ ] "Featured" badges styled consistently

### SEO/Metadata

Check each page:
- [ ] Unique title
- [ ] Meta description
- [ ] OpenGraph tags (if configured)
- [ ] No broken links (404s)

---

## Phase 1.3 Validation Checklist

- [ ] Stub pages created (News, Learn, Build)
- [ ] All stub pages have "Coming in Phase X" messaging
- [ ] Stub pages link back to active pages
- [ ] All routes tested and working
- [ ] Navigation works on all pages
- [ ] Mobile responsive (375px to 1440px)
- [ ] Load time <3s on 4G
- [ ] No console errors
- [ ] `npm run lint` passes with 0 errors
- [ ] `npm run build` succeeds
- [ ] All CTAs tested and working
- [ ] Classic OS never called "wallet"
- [ ] All external links correct

**Milestone:** Phase 1 ready for production ✅

---

# Final Commit

When all validation passes, commit Phase 1:

```bash
git add .
git commit -m "$(cat <<'EOF'
v0.2 Phase 1: Multi-section platform foundation

Navigation & Structure:
- Add navigation with News, Wallet, Apps, Buy, Learn, Build sections
- Mobile-responsive hamburger menu
- Fixed navigation with "Launch App" CTA

Homepage Redesign:
- Transform from protocol explainer to product platform
- 9 sections: Hero, Stats, Product Cards, News, Ecosystem Stats, Product Suite, Trust Signals, Final CTA
- Product-focused messaging with clear CTAs

Apps Directory:
- Featured apps: ETCswap, ClassicUSD, Olympia DAO (with badges)
- Categories: DeFi, Infrastructure, Governance, Tools
- App cards with descriptions and links

Buy/Markets Page:
- ETCswap DEX featured prominently
- Major exchanges: Top 10 by 24h volume
- All exchanges: 100+ CEX listings from CoinGecko (2026-01-16)
- How to Buy guide with step-by-step instructions

Wallet Page (CORRECTED POSITIONING):
- Classic OS positioned as "control plane" NOT wallet
- Wallet directory: 50+ wallets (Hardware, Browser, Mobile, Web)
- Classic OS section: Four modules showcase
- Comparison: Basic wallet vs Classic OS experience
- Clear messaging: Classic OS works WITH wallets

Stub Pages:
- News, Learn, Build placeholder pages
- "Coming in Phase 2/3" messaging
- Links back to active content

All validation passing:
- Lint: 0 errors
- Build: Success
- Mobile responsive: 375px - 1440px
- Load time: <3s on 4G
- All routes working
- All CTAs tested

Phase 1 establishes foundation for Bitcoin.com-style consumer platform.
Ready for Phase 2 (Learn, News, Markets with real-time data).

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

# Next Steps (Phase 2 - Not Now)

**After Phase 1 is complete and live:**

### Phase 2: Content (v0.3)
- Learn section with 5-10 education guides
- News section with blog infrastructure and CMS
- Markets page with real-time price data (CoinGecko API)
- Enhanced ecosystem stats with live data from ETC RPC nodes

### Phase 3: Growth (v0.4)
- Buy page fiat on-ramp integration
- Build section with developer resources
- Enhanced Apps directory with user reviews
- Referral tracking and analytics

**See:** [SCOPE-v0.2-roadmap.md](SCOPE-v0.2-roadmap.md) for complete roadmap.

---

# Documentation References

**Read before starting:**
- [SCOPE-v0.2-roadmap.md](SCOPE-v0.2-roadmap.md) - Complete v0.2 vision
- [/docs/ecosystem/positioning-ethereumclassic-com.md](../../../docs/ecosystem/positioning-ethereumclassic-com.md) - Strategic context
- [.claude/instructions.md](../.claude/instructions.md) - Agent instructions (now v0.2 active)
- [README.md](../README.md) - Quick start

**Related product docs:**
- [/products/classicos-app/docs/product/000-product-model.md](../../classicos-app/docs/product/000-product-model.md) - Classic OS polished vision
- [/products/classicos-site/docs/README.md](../../classicos-site/docs/README.md) - ClassicOS landing site context

**Data sources:**
- Wallets: https://ethereumclassic.org/services/wallets
- Exchanges: https://www.coingecko.com/en/coins/ethereum-classic (2026-01-16 data)

---

# Questions? Issues?

If you encounter issues during implementation:

1. **Re-read this implementation plan** - Most details are here
2. **Check SCOPE-v0.2-roadmap.md** - Strategic vision and context
3. **Review positioning-ethereumclassic-com.md** - Strategic positioning
4. **Look at classicos-site code** - Similar patterns (product marketing site)

**Remember:**
- Classic OS is a control plane, NOT a wallet
- This site promotes products, doesn't replace them
- You're building the consumer gateway for Ethereum Classic
- Make it professional, fast, and compelling

**Roger Ver's vision:** Position EthereumClassic.com as the Bitcoin.com of Ethereum Classic.

---

**Good luck with Phase 1!** 🚀
