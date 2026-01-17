# Milestones - EthereumClassic.com v0.2

> **Purpose**: Phased development plan with clear milestones and deliverables.
>
> **Approach**: Framework/shell first, then core pages, then content expansion.

---

## Development Phases Overview

```
Phase 1: Framework & Shell
    ↓
Phase 2: Core Pages (P0)
    ↓
Phase 3: Secondary Pages (P1)
    ↓
Phase 4: Content Expansion (P2)
    ↓
Phase 5: Advanced Features (P3)
```

---

## Phase 1: Framework & Shell

**Goal**: Establish complete site architecture with all URL endpoints.

### Milestone 1.1: Project Setup & Documentation
**Status**: Complete

**Deliverables**:
- [x] RESEARCH.md - Bitcoin.com analysis + EthereumClassic.org content sourcing
- [x] URL-STRUCTURE.md - Complete endpoint mapping (180+ URLs)
- [x] ARCHITECTURE.md - Technical architecture + data schemas
- [x] COMPONENTS.md - Component specifications
- [x] MILESTONES.md - Development phases
- [x] Updated README.md
- [x] Updated .claude/instructions.md

### Milestone 1.2: Design System Foundation
**Status**: Complete
**Dependencies**: 1.1

**Deliverables**:
- [x] Design tokens (colors, typography, spacing)
- [x] Tailwind configuration
- [x] Base CSS variables
- [x] Dark theme setup

### Milestone 1.3: UI Component Library
**Status**: Complete
**Dependencies**: 1.2

**Deliverables**:
- [x] Button component (all variants)
- [x] Card component (all variants)
- [x] Badge component
- [x] Input/Select components
- [x] Tabs component
- [x] Table component
- [x] Modal component
- [x] Tooltip component
- [x] Skeleton/Loading states
- [x] Icon system

### Milestone 1.4: Layout Components
**Status**: Complete
**Dependencies**: 1.3

**Deliverables**:
- [x] Navigation (desktop + mobile)
- [x] Footer
- [x] Container
- [x] Section
- [x] Grid
- [x] PageHeader
- [x] Breadcrumbs
- [x] Sidebar

### Milestone 1.5: Section Components
**Status**: Complete
**Dependencies**: 1.3

**Deliverables**:
- [x] Hero (home, page, minimal variants)
- [x] StatsStrip
- [x] ProductCards
- [x] FeatureGrid
- [x] CTABanner
- [x] FAQAccordion
- [x] NewsletterSignup
- [x] TrustSignals

### Milestone 1.6: Stub Page System
**Status**: Complete
**Dependencies**: 1.4

**Deliverables**:
- [x] StubPage template component
- [x] All stub pages created for every URL endpoint
- [x] Proper routing structure in place
- [x] 404 page
- [x] Sitemap generation

**Stub Pages Required** (see URL-STRUCTURE.md for complete list):
```
Core: /about, /contact, /advertise, /partners, /legal, /privacy
Wallet: /wallet/reviews, /wallet/reviews/[wallet]
Buy: /buy/instant, /buy/p2p, /buy/atm, /buy/card, /buy/bank
Sell: /sell, /sell/exchanges
Exchanges: /exchanges/reviews, /exchanges/reviews/[exchange], /exchanges/[feature]
Apps: /apps/nft, /apps/games, /apps/tools, /apps/submit, /apps/[app]
Learn: All category and article pages
News: /news/[slug], /news/category/[category]
Markets: /price/[pair], /converter, /calculator
Mining: /mining/pools/[pool], /mining/hardware, /mining/software, etc.
Build: /build/tools, /build/clients/[client], /build/networks, etc.
Research: All pages
Tools: All pages
Directory: /directory/mining, /directory/developers, /directory/community
Community: All pages
Account: All pages
```

### Milestone 1.7: Navigation & Routing
**Status**: Complete
**Dependencies**: 1.6

**Deliverables**:
- [x] Full navigation with all sections
- [x] Mobile navigation (hamburger menu)
- [x] Dropdown menus
- [x] Active state indicators
- [x] Breadcrumb system (useBreadcrumbs hook + StubPage integration)
- [x] Search placeholder (modal with ⌘K shortcut)

---

## Phase 2: Core Pages (P0)

**Goal**: Build all priority P0 pages with full content.

### Milestone 2.1: Homepage
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Hero section with stats (gradient backgrounds, staggered animations, quick stats)
- [x] Product cards (Wallet, Buy, Apps, Learn) with hover animations
- [x] Trending news section (static/placeholder with category badges)
- [x] Ecosystem stats with icons and descriptions
- [x] Product suite showcase with badges and feature lists
- [x] Trust signals with icon animations
- [x] Final CTA with gradient background
- [x] Mobile responsive
- [x] Performance optimization (<3s load)

### Milestone 2.2: Wallet Hub
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Wallet landing page (Hero with gradient, staggered animations, category icons)
- [x] Classic OS dedicated page (Modules showcase, compatible wallets, CTAs)
- [x] WalletCard component (Framer Motion animations, platform icons, type badges)
- [x] Featured wallet section (Classic OS section with flagship badge)
- [x] Download CTAs (Launch Classic OS, Browse Wallets)
- [x] Security messaging (SecurityMessage component with tips)
- [x] Platform icons (iOS, Android, Desktop, Browser, Hardware icons)

### Milestone 2.3: Buy ETC Hub
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Buy landing page (Hero with gradient, staggered animations, CTAs)
- [x] Exchange listings (ExchangeCard with animations, volume, trading pairs)
- [x] Purchase flow visualization (5-step animated guide with connector lines)
- [x] Payment method icons (Credit Card, Bank, Crypto, P2P icons)
- [x] Trust signals (Security reminder, verified exchanges, global access)
- [x] Geographic messaging (Region icons on exchange cards)

### Milestone 2.4: Apps Directory
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Apps landing page (Hero with gradient, staggered animations, app count badge)
- [x] Featured apps section (ETCswap V2/V3, Classic USD, Olympia DAO with stats)
- [x] AppCard component (Framer Motion animations, category icons, tags, stats)
- [x] Category navigation (4 categories with icons and app counts)
- [x] DeFi category page (Feature cards, app grid, CTA section)
- [x] Infrastructure category page (Node clients, RPC, explorers)
- [x] Governance category page (DAOs, voting, treasury features)
- [x] Individual app pages (Dynamic [app] route with features, stats, CTAs)

### Milestone 2.5: Learn Landing
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Learn hub page (Hero with gradient, staggered animations, article count badge)
- [x] "What is Ethereum Classic?" article (Full content with prose styling)
- [x] Category tabs (7 categories with icons and article counts)
- [x] ArticleCard component (Framer Motion animations, 3 variants: default/featured/compact)
- [x] Basics category landing (Feature cards, article grid, CTA section)
- [x] Article data structure (app/learn/data/articles.ts with 24 articles defined)
- [x] ArticlePageClient component (Breadcrumbs, tags, prose content, related articles)

---

## Phase 3: Secondary Pages (P1)

**Goal**: Build priority P1 pages expanding core sections.

### Milestone 3.1: Wallet Section Expansion
**Status**: Complete
**Dependencies**: 2.2

**Deliverables**:
- [x] MetaMask setup guide (Step-by-step with network config, RPC endpoints, troubleshooting)
- [x] Hardware wallet guide (Ledger vs Trezor comparison, security benefits, setup steps)
- [x] Wallet comparison page (Table/card views, filtering, sorting)
- [x] WalletComparison component (Feature matrix, security levels, ease of use)
- [x] Enhanced wallet data (Features, platforms, security levels, ease ratings)

### Milestone 3.2: Buy Section Expansion
**Status**: Complete
**Dependencies**: 2.3

**Deliverables**:
- [x] Exchange listings page (Full filtering, search, table/card views, sorting)
- [x] ExchangeCard component (Enhanced with payment methods, fees, KYC status)
- [x] ExchangeTable component (Comprehensive table with all exchange details)

### Milestone 3.3: Apps Section Expansion
**Status**: Complete
**Dependencies**: 2.4

**Deliverables**:
- [x] All featured app pages (Featured Apps page with category grouping)
- [x] DeFi apps listing (Full category page with features)
- [x] Infrastructure apps listing (Full category page with features)
- [x] Governance apps listing (Full category page with features)
- [x] Tools apps listing (Full category page with features)
- [x] Submit App page (Requirements, categories, submission process)
- [x] Individual app pages (Dynamic route with 12 apps)

### Milestone 3.4: Learn Section Expansion
**Status**: Complete
**Dependencies**: 2.5

**Deliverables**:
- [x] Basics category with articles (7 articles with full content)
- [x] Wallets category with guides (4 articles with full content)
- [x] Mining category with guides (4 articles with full content)
- [x] 10+ core articles (15 total articles with full content)

### Milestone 3.5: News Section
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] News hub page (Full hub with hero, category navigation, featured articles, category sections)
- [x] News card component (NewsCard with category icons, date formatting, tags, featured variant)
- [x] Static news entries (15 articles across 4 categories: Updates, Security, Ecosystem, Community)
- [x] Category filtering (Category pages with tab navigation, tag pages)

### Milestone 3.6: Markets Section
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Markets overview page (Full hub with price display, chart, stats, trading pairs, price sources, timeline)
- [x] ETC price page (Dedicated price page with multi-currency display, metrics, milestones)
- [x] PriceDisplay component (Multiple variants: standard, compact, stat card)
- [x] PriceChart component (Basic SVG chart with time range selection, sparkline variant)
- [x] Market data file (Price sources, trading pairs, stats, milestones, resources)

### Milestone 3.7: Mining Section
**Status**: Complete

**Deliverables**:
- [x] Mining hub page (Full hub with network stats, pool distribution, resource cards, external resources)
- [x] Getting started guide (5-step guide with requirements, recommended pools, tips)
- [x] Pool directory page (Cards/table views, sorting, hashrate chart, payout scheme explanations)
- [x] PoolCard component (Full card and compact variants, table row variant)
- [x] HashRateChart component (Pie chart for pool distribution, stats bar, stat display components)
- [x] Mining data file (6 pools, 11 hardware items, network stats, software, resources)

### Milestone 3.8: Build Section
**Status**: Complete

**Deliverables**:
- [x] Developer hub page (Full hub with network config, recommended tools, node clients, learning resources)
- [x] Getting started guide (6-step guide with prerequisites, code examples, network config, tips)
- [x] Documentation links (Categorized docs, RPC endpoints, block explorers, APIs)
- [x] Node clients page (Core-Geth, Besu, Erigon with features, install commands, hardware requirements)
- [x] Build data file (Networks, RPC endpoints, node clients, dev tools, docs, faucets)

### Milestone 3.9: Exchanges Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Exchange directory page
- [ ] ExchangeFilters component
- [ ] Feature-based filtering
- [ ] Sortable table

### Milestone 3.10: Directory Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Wallet directory
- [ ] Exchange directory
- [ ] Unified directory hub

---

## Phase 4: Content Expansion (P2)

**Goal**: Build all P2 pages and expand content.

### Milestone 4.1: Wallet Reviews
**Dependencies**: 3.1

**Deliverables**:
- [ ] Wallet reviews listing
- [ ] Individual wallet review pages
- [ ] Review template
- [ ] Rating system

### Milestone 4.2: Exchange Reviews
**Dependencies**: 3.9

**Deliverables**:
- [ ] Exchange reviews listing
- [ ] Individual exchange review pages
- [ ] Review template
- [ ] Feature comparison tool

### Milestone 4.3: Buy/Sell Expansion
**Dependencies**: 3.2

**Deliverables**:
- [ ] Instant buy options page
- [ ] P2P trading page
- [ ] Buy with card guide
- [ ] Buy with bank guide
- [ ] Sell hub and pages

### Milestone 4.4: Learn Full Expansion
**Dependencies**: 3.4

**Deliverables**:
- [ ] All category landing pages
- [ ] Trading guides
- [ ] DeFi guides
- [ ] Security guides
- [ ] 30+ total articles
- [ ] Glossary page

### Milestone 4.5: o Full Implementation
**Dependencies**: 3.5

**Deliverables**:
- [ ] Individual article pages
- [ ] Category pages
- [ ] Tag filtering
- [ ] Author attribution
- [ ] Related content

### Milestone 4.6: Markets Expansion
**Dependencies**: 3.6

**Deliverables**:
- [ ] Additional price pairs
- [ ] Price converter tool
- [ ] Investment calculator

### Milestone 4.7: Mining Expansion
**Dependencies**: 3.7

**Reference**: https://whattomine.com/coins/162-etc-etchash (calculator, network stats, ASIC/GPU tables)

**Deliverables**:
- [ ] Individual pool pages
- [ ] Hardware guide with ASIC/GPU profitability tables
- [ ] Software guide
- [ ] Profitability calculator (hashrate, power, electricity inputs)
- [ ] Network stats page (hashrate tracker, difficulty, block reward)

### Milestone 4.8: Build Expansion
**Dependencies**: 3.8

**Deliverables**:
- [ ] Tools directory
- [ ] Individual client pages
- [ ] Network info page
- [ ] Testnet faucets page

### Milestone 4.9: Research Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Research hub page
- [ ] Reports listing
- [ ] Network analysis page
- [ ] Report template

### Milestone 4.10: Tools Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Tools hub page
- [ ] Price converter
- [ ] Investment calculator
- [ ] Gas tracker (basic)
- [ ] Explorer links

### Milestone 4.11: Apps Expansion
**Dependencies**: 3.3

**Deliverables**:
- [ ] NFT category
- [ ] Games category
- [ ] Tools category
- [ ] Submit app page
- [ ] All individual app pages

### Milestone 4.12: Community Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Community hub page
- [ ] Social media links
- [ ] Events page (basic)

---

## Phase 5: Advanced Features (P3)

**Goal**: Add advanced functionality and future features.

### Milestone 5.1: User Accounts
**Dependencies**: Phase 4

**Deliverables**:
- [ ] Authentication system
- [ ] Account dashboard
- [ ] Login/Register pages
- [ ] Settings page
- [ ] Watchlist feature
- [ ] Portfolio tracker (basic)

### Milestone 5.2: Advanced Mining
**Dependencies**: 4.7

**Deliverables**:
- [ ] ATM locator
- [ ] Mining OS integration
- [ ] Advanced profitability tools

### Milestone 5.3: CMS Integration
**Dependencies**: Phase 4

**Deliverables**:
- [ ] Headless CMS setup
- [ ] News article management
- [ ] Dynamic content updates

### Milestone 5.4: API Layer
**Dependencies**: Phase 4

**Deliverables**:
- [ ] API documentation page
- [ ] Price data API
- [ ] Network stats API

### Milestone 5.5: Internationalization
**Dependencies**: Phase 4

**Deliverables**:
- [ ] i18n infrastructure
- [ ] Language selector
- [ ] Initial translations (ES, ZH)

### Milestone 5.6: Content Review & Polish
**Dependencies**: Phase 4

**Deliverables**:
- [ ] Deep content review of all Learn articles
- [ ] Article formatting and prose styling improvements
- [ ] Content accuracy verification (technical details, links)
- [ ] Source content from ethereumclassic.org (with vetting per instructions)
- [ ] Add remaining article content (currently placeholder)
- [ ] SEO optimization for article pages
- [ ] Image/diagram additions where appropriate

### Milestone 5.7: Advanced Features
**Dependencies**: Phase 4

**Deliverables**:
- [ ] Search functionality
- [ ] Newsletter integration
- [ ] Contact form
- [ ] Advertising system
- [ ] Partner directory
- [ ] Grants/funding page

---

## Milestone Tracking

### Progress Summary

| Phase | Milestones | Completed | Progress |
|-------|------------|-----------|----------|
| Phase 1 | 7 | 7 | 100% | (All Complete - 1.1 through 1.7)
| Phase 2 | 5 | 5 | 100% | (All Complete - 2.1 through 2.5)
| Phase 3 | 10 | 8 | 80% | (3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8 Complete)
| Phase 4 | 12 | 0 | 0% |
| Phase 5 | 7 | 0 | 0% |
| **Total** | **41** | **20** | **49%** |

### Current Focus

**Active Milestone**: Phase 3 - Secondary Pages

**Next Up**: 3.9 - Exchanges Section

---

## Definition of Done

### Per Milestone
- [ ] All deliverables completed
- [ ] Code reviewed
- [ ] Tests passing (if applicable)
- [ ] Lint passing
- [ ] Build successful
- [ ] Mobile responsive
- [ ] Performance acceptable
- [ ] Accessibility checked
- [ ] Documentation updated

### Per Phase
- [ ] All milestones in phase completed
- [ ] Integration testing
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] Stakeholder review
- [ ] Production deployment

---

## Dependencies Graph

```
Phase 1
├── 1.1 Documentation ──────────────────────────────────┐
├── 1.2 Design System ← 1.1                             │
├── 1.3 UI Components ← 1.2                             │
├── 1.4 Layout Components ← 1.3                         │
├── 1.5 Section Components ← 1.3                        │
├── 1.6 Stub Pages ← 1.4                                │
└── 1.7 Navigation ← 1.6                                │
                                                        ↓
Phase 2 ←───────────────────────────────────────── Phase 1
├── 2.1 Homepage
├── 2.2 Wallet Hub
├── 2.3 Buy Hub
├── 2.4 Apps Directory
└── 2.5 Learn Landing
                                                        ↓
Phase 3 ←──────────────────────────────────────── Phase 2
├── 3.1 Wallet Expansion ← 2.2
├── 3.2 Buy Expansion ← 2.3
├── 3.3 Apps Expansion ← 2.4
├── 3.4 Learn Expansion ← 2.5
├── 3.5 News Section ← Phase 1
├── 3.6 Markets Section ← Phase 1
├── 3.7 Mining Section ← Phase 1
├── 3.8 Build Section ← Phase 1
├── 3.9 Exchanges Section ← Phase 1
└── 3.10 Directory Section ← Phase 1
                                                        ↓
Phase 4 ←──────────────────────────────────────── Phase 3
├── 4.1 Wallet Reviews ← 3.1
├── 4.2 Exchange Reviews ← 3.9
├── 4.3 Buy/Sell Expansion ← 3.2
├── 4.4 Learn Full ← 3.4
├── 4.5 News Full ← 3.5
├── 4.6 Markets Expansion ← 3.6
├── 4.7 Mining Expansion ← 3.7
├── 4.8 Build Expansion ← 3.8
├── 4.9 Research Section ← Phase 1
├── 4.10 Tools Section ← Phase 1
├── 4.11 Apps Expansion ← 3.3
└── 4.12 Community Section ← Phase 1
                                                        ↓
Phase 5 ←──────────────────────────────────────── Phase 4
├── 5.1 User Accounts
├── 5.2 Advanced Mining ← 4.7
├── 5.3 CMS Integration
├── 5.4 API Layer
├── 5.5 i18n
└── 5.6 Advanced Features
```

---

## Risk Mitigation

### Technical Risks
| Risk | Mitigation |
|------|------------|
| Performance degradation | Regular audits, lazy loading |
| SEO issues | Static generation, proper metadata |
| Mobile experience | Mobile-first development |
| Third-party API failures | Fallbacks, caching |

### Content Risks
| Risk | Mitigation |
|------|------------|
| Stale content | Regular review schedule |
| Inaccurate information | Expert review process |
| Missing translations | English-first, i18n later |

### Resource Risks
| Risk | Mitigation |
|------|------------|
| Scope creep | Strict phase boundaries |
| Feature bloat | Stick to MVP per phase |
| Documentation drift | Update docs with each milestone |
