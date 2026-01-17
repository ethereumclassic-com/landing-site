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
**Dependencies**: 1.3

**Deliverables**:
- [ ] Navigation (desktop + mobile)
- [ ] Footer
- [ ] Container
- [ ] Section
- [ ] Grid
- [ ] PageHeader
- [ ] Breadcrumbs
- [ ] Sidebar

### Milestone 1.5: Section Components
**Dependencies**: 1.3

**Deliverables**:
- [ ] Hero (home, page, minimal variants)
- [ ] StatsStrip
- [ ] ProductCards
- [ ] FeatureGrid
- [ ] CTABanner
- [ ] FAQAccordion
- [ ] NewsletterSignup
- [ ] TrustSignals

### Milestone 1.6: Stub Page System
**Dependencies**: 1.4

**Deliverables**:
- [ ] StubPage template component
- [ ] All stub pages created for every URL endpoint
- [ ] Proper routing structure in place
- [ ] 404 page
- [ ] Sitemap generation

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
**Dependencies**: 1.6

**Deliverables**:
- [ ] Full navigation with all sections
- [ ] Mobile navigation (hamburger menu)
- [ ] Dropdown menus
- [ ] Active state indicators
- [ ] Breadcrumb system
- [ ] Search placeholder

---

## Phase 2: Core Pages (P0)

**Goal**: Build all priority P0 pages with full content.

### Milestone 2.1: Homepage
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Hero section with stats
- [ ] Product cards (Wallet, Buy, Apps, Learn)
- [ ] Trending news section (static/placeholder)
- [ ] Ecosystem stats
- [ ] Product suite showcase
- [ ] Trust signals
- [ ] Final CTA
- [ ] Mobile responsive
- [ ] Performance optimization (<3s load)

### Milestone 2.2: Wallet Hub
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Wallet landing page
- [ ] Classic OS dedicated page
- [ ] WalletCard component
- [ ] Featured wallet section
- [ ] Download CTAs
- [ ] Security messaging
- [ ] Platform icons (iOS, Android, Desktop)

### Milestone 2.3: Buy ETC Hub
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Buy landing page
- [ ] Exchange listings
- [ ] Purchase flow visualization
- [ ] Payment method icons
- [ ] Trust signals
- [ ] Geographic messaging

### Milestone 2.4: Apps Directory
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Apps landing page
- [ ] Featured apps section
- [ ] AppCard component
- [ ] Category navigation
- [ ] DeFi category page
- [ ] Infrastructure category page
- [ ] Governance category page
- [ ] Individual app pages (ETCswap, ClassicUSD, Olympia DAO)

### Milestone 2.5: Learn Landing
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Learn hub page
- [ ] "What is Ethereum Classic?" article
- [ ] Category tabs
- [ ] ArticleCard component
- [ ] Basics category landing

---

## Phase 3: Secondary Pages (P1)

**Goal**: Build priority P1 pages expanding core sections.

### Milestone 3.1: Wallet Section Expansion
**Dependencies**: 2.2

**Deliverables**:
- [ ] MetaMask setup guide
- [ ] Hardware wallet guide
- [ ] Wallet comparison page
- [ ] WalletComparison component

### Milestone 3.2: Buy Section Expansion
**Dependencies**: 2.3

**Deliverables**:
- [ ] Exchange listings page
- [ ] ExchangeCard component
- [ ] ExchangeTable component

### Milestone 3.3: Apps Section Expansion
**Dependencies**: 2.4

**Deliverables**:
- [ ] All featured app pages
- [ ] DeFi apps listing
- [ ] Infrastructure apps listing
- [ ] Governance apps listing

### Milestone 3.4: Learn Section Expansion
**Dependencies**: 2.5

**Deliverables**:
- [ ] Basics category with articles
- [ ] Wallets category with guides
- [ ] Mining category with guides
- [ ] 10+ core articles

### Milestone 3.5: News Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] News hub page
- [ ] News card component
- [ ] Static news entries (placeholder for CMS)
- [ ] Category filtering

### Milestone 3.6: Markets Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Markets overview page
- [ ] ETC price page
- [ ] PriceDisplay component
- [ ] PriceChart component (basic)
- [ ] External API integration (CoinGecko)

### Milestone 3.7: Mining Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Mining hub page
- [ ] Getting started guide
- [ ] Pool directory page
- [ ] PoolCard component
- [ ] HashRateChart component

### Milestone 3.8: Build Section
**Dependencies**: Phase 1

**Deliverables**:
- [ ] Developer hub page
- [ ] Getting started guide
- [ ] Documentation links
- [ ] Node clients page

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

### Milestone 4.5: News Full Implementation
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

**Deliverables**:
- [ ] Individual pool pages
- [ ] Hardware guide
- [ ] Software guide
- [ ] Profitability calculator
- [ ] Network stats page

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

### Milestone 5.6: Advanced Features
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
| Phase 1 | 7 | 3 | 43% | (1.1, 1.2, 1.3 Complete)
| Phase 2 | 5 | 0 | 0% |
| Phase 3 | 10 | 0 | 0% |
| Phase 4 | 12 | 0 | 0% |
| Phase 5 | 6 | 0 | 0% |
| **Total** | **40** | **3** | **7.5%** |

### Current Focus

**Active Milestone**: 1.4 - Layout Components

**Next Up**: 1.5 - Section Components

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
