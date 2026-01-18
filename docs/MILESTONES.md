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
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Exchange directory page (/exchanges with full filtering, table/card views, 30+ exchanges)
- [x] ExchangeFilters component (inline filters: type, region, payment, KYC, search)
- [x] Feature-based filtering (CEX/DEX, payment methods, KYC requirements, regions)
- [x] Sortable table (sort by volume, name, fee)
- [x] Quick filter links (No KYC, US Friendly, Lowest Fees, Most Secure, DEX, Beginners)
- [x] Exchange data file with 30+ exchanges (buy/data/exchanges.ts)

### Milestone 3.10: Directory Section
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Wallet directory (/directory/wallets with filtering, grid/table views, 25+ wallets)
- [x] Exchange directory (/directory/exchanges with filtering, grid/table views, 30+ exchanges)
- [x] Unified directory hub (/directory with category cards, quick stats, quick access links)

---

## Phase 4: Content Expansion (P2)

**Goal**: Build all P2 pages and expand content.

### Milestone 4.1: Wallet Reviews
**Status**: Complete
**Dependencies**: 3.1

**Deliverables**:
- [x] Wallet reviews listing (/wallet/reviews with filtering, sorting, search)
- [x] Individual wallet review pages (/wallet/reviews/[wallet] with 10 in-depth reviews)
- [x] Review template (WalletReviewContent component with full review layout)
- [x] Rating system (5-star ratings with breakdown: security, usability, features, support)

### Milestone 4.2: Exchange Reviews ✅
**Dependencies**: 3.9

**Deliverables**:
- [x] Exchange reviews listing (/buy/reviews with search, filter by type/verdict, sort by rating/name/fees)
- [x] Individual exchange review pages (/buy/reviews/[exchange] with 10 in-depth reviews)
- [x] Review template (ExchangeReviewContent component with full review layout)
- [x] Rating system (5-star ratings with breakdown: security, fees, liquidity, UX, support)

### Milestone 4.3: Buy/Sell Expansion
**Status**: Complete
**Dependencies**: 3.2

**Deliverables**:
- [x] Instant buy options page (/buy/instant)
- [x] P2P trading page (/buy/p2p)
- [x] Buy with card guide (/buy/card)
- [x] Buy with bank guide (/buy/bank)
- [x] Sell hub and pages (/sell, /sell/exchanges)
- [x] Native on-ramp path via Brale/ClassicUSD (added to /buy)
- [x] Native off-ramp path via Brale/ClassicUSD (added to /sell)
- [x] Ecosystem payment products (Rain Cards, 1Konto, Coinflow)
- [x] New Payments category in Apps directory (/apps/payments)

### Milestone 4.4: Learn Full Expansion
**Status**: Complete
**Dependencies**: 3.4

**Deliverables**:
- [x] All category landing pages (Trading, DeFi, Security, Staking)
- [x] Trading guides (category page with trading features, exchange info)
- [x] DeFi guides (category page with protocol info, safety notices)
- [x] Security guides (category page with security tips, hardware wallet CTA)
- [x] 30+ total articles (35 articles in articles.ts)
- [x] Glossary page (60+ terms across 6 categories with search and filtering)

### Milestone 4.5: News Full Implementation
**Status**: Complete
**Dependencies**: 3.5

**Deliverables**:
- [x] Individual article pages (15 articles with full markdown content)
- [x] Category pages (4 categories: Updates, Security, Ecosystem, Community)
- [x] Tag filtering (tag pages with article lists)
- [x] Author attribution (author profiles with roles and Twitter links)
- [x] Related content (smart algorithm: same category, matching tags, recent fallback)

### Milestone 4.6: Markets Expansion
**Status**: Complete
**Dependencies**: 3.6

**Deliverables**:
- [x] Additional price pairs (16 pairs: USD, USDT, USDC, BUSD, DAI, BTC, ETH, BNB, EUR, GBP, KRW, JPY, CAD, AUD, TRY, BRL)
- [x] Price converter tool (/markets/converter - 17 currencies with real-time conversion)
- [x] Investment calculator (/markets/calculator - ROI projections, price scenarios, DCA tables)

### Milestone 4.7: Mining Expansion
**Status**: Complete
**Dependencies**: 3.7

**Reference**:
- https://whattomine.com/coins/162-etc-etchash (calculator, network stats, ASIC/GPU tables)
- https://www.coinwarz.com/mining/ethereum-classic/calculator (advanced mining calculator)

**Deliverables**:
- [x] Individual pool pages (/mining/pools/[pool] - 6 pools with detailed info, server addresses, payout schemes)
- [x] Hardware guide with ASIC/GPU profitability tables
- [x] Software guide (/mining/software - 4 miners with comparison table, config examples, optimization tips)
- [x] Profitability calculator (hashrate, power, electricity inputs)
- [x] Network stats page (hashrate tracker, difficulty, block reward)

### Milestone 4.8: Build Expansion
**Status**: Complete
**Dependencies**: 3.8

**Deliverables**:
- [x] Tools directory (/build/tools - 11 tools across 4 categories with config examples)
- [x] Individual client pages (/build/clients/[client] - Core-Geth, Besu, Fukuii with install/config guides)
- [x] Network info page (/build/networks - Chain IDs, RPC endpoints, wallet config, Chainlist links)
- [x] Testnet faucets page (/build/faucets - 2 faucets with METC info, how-to guide, troubleshooting)

### Milestone 4.9: Research Section
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Research hub page (/research with hero, report categories, featured reports, research areas)
- [x] Reports listing (Report cards with types, topics, key findings)
- [x] Network analysis page (/research/network with metrics, charts, analysis sections)
- [x] Report template (ReportCard component with category styling)

### Milestone 4.10: Tools Section
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Tools hub page (/tools with hero, tool categories, featured tools, quick access cards)
- [x] Price converter (/tools/converter with multi-currency conversion, live calculations)
- [x] Investment calculator (/tools/calculator with ROI projections, price scenarios)
- [x] Gas tracker (/tools/gas with gas tiers, transaction cost calculator, optimization tips)
- [x] Block explorer page (/tools/explorer with mainnet/Mordor explorers, features, quick links)
- [x] Contract verifier page (/tools/verify with verification methods, steps, requirements)

### Milestone 4.11: Apps Expansion
**Status**: Complete
**Dependencies**: 3.3

**Deliverables**:
- [x] NFT category (/apps/nft with marketplaces, collections, creator tools, "Why NFTs on ETC")
- [x] Games category (/apps/games with play-to-earn, casino, predictions, provably fair info)
- [x] Tools category (ClearPath, GasWatch, Contract Wizard apps added)
- [x] Submit app page (already existed)
- [x] All individual app pages (dynamic [app] route with 22 apps)
- [x] Add FairWins (Alpha status) - Prediction Market with offline CLOB matching
- [x] Add ClearPath (Coming Soon) - Futarchy Prediction markets for Olympia DAO
- [x] Add TokenMint (Coming Soon) - Enterprise token management app
- [x] Additional apps: ClassicPunks, ETC Art Gallery, CryptoQuest ETC, ETC Lottery, ChainBet

### Milestone 4.12: Community Section
**Status**: Complete
**Dependencies**: Phase 1

**Deliverables**:
- [x] Community hub page (/community with stats, social channels, ways to contribute, principles)
- [x] Social media links (/community/social with official channels, regional communities, guidelines)
- [x] Events page (/community/events with event types, recurring events, past events, host CTA)

---

## Phase 5: Advanced Features (P3)

**Goal**: Add advanced functionality and future features.

### Milestone 5.1: User Accounts
**Status**: Complete
**Dependencies**: Phase 4

**Deliverables**:
- [x] Authentication system (AuthContext with localStorage persistence)
- [x] Account dashboard (/account with portfolio/watchlist summary)
- [x] Login/Register pages (/account/login, /account/register)
- [x] Settings page (/account/settings with profile, preferences, danger zone)
- [x] Watchlist feature (/account/watchlist with add/remove/search)
- [x] Portfolio tracker (/account/portfolio with holdings management)

### Milestone 5.2: Advanced Mining
**Status**: Complete
**Dependencies**: 4.7

**Deliverables**:
- [x] ATM locator (/buy/atm with 6 providers, filters, aggregator links)
- [x] Mining OS integration (/mining/os with HiveOS, minerstat, RaveOS, MMPOS, Simple Mining)
- [x] Advanced profitability tools (already complete from Phase 4 - /mining/profitability, /mining/hardware)

### Milestone 5.3: CMS Integration
**Status**: Complete
**Dependencies**: Phase 4

**Deliverables**:
- [x] MDX-based CMS setup (gray-matter for frontmatter parsing)
- [x] Content library (/lib/content.ts with article parsing, filtering, related articles)
- [x] Content editor page (/content-editor with form, MDX preview, download)
- [x] Content directory structure (/content/news/ for MDX articles)
- [x] Sample article template and documentation

### Milestone 5.4: API Layer
**Status**: Complete
**Dependencies**: Phase 4

**Deliverables**:
- [x] API documentation page (/build/api with endpoints, code examples, RPC info)
- [x] Price data API (/api/price, /api/price/history)
- [x] Network stats API (/api/network, /api/network/blocks)

### Milestone 5.5: Internationalization
**Status**: Complete
**Dependencies**: Phase 4

**Deliverables**:
- [x] i18n infrastructure (I18nProvider, useI18n hook, useTranslation)
- [x] Language selector component (default and compact variants)
- [x] Initial translations (English, Spanish, Chinese)

### Milestone 5.6: Content Review & Polish
**Status**: Complete
**Dependencies**: Phase 4

**Deliverables**:

**Public-Facing Copy Audit:**
- [x] Remove internal/technical language from all user-visible text
- [x] Fix homepage ProductSuite section - updated with consumer-friendly descriptions
- [x] Audit all section headers and taglines for consumer-friendly language
- [x] Remove development jargon (phase references removed from StubPage display)

**ETCswap Product Separation:**
- [x] Display ETCswap V2, ETCswap V3, ETCswap Launchpad as separate products in Apps data
- [x] Update homepage ProductSuite to show ETCswap V3 and Launchpad separately
- [x] Apps data already has separate ETCswap V2, V3, Launchpad entries

**Olympia DAO Repositioning:**
- [x] Olympia DAO already positioned as Infrastructure category in apps data
- [x] Removed from homepage ProductSuite section (replaced with Brale)
- [x] Status already shows "In Development" in apps data

**Data Accuracy - Blockscout Integration:**
- [x] Created /lib/blockscout.ts service for live network data
- [x] Updated /api/network to use live Blockscout data with caching
- [x] Created useNetworkStats hook for client-side live data
- [x] Updated mining pages to display live data with source indicators
- [x] Fixed block reward to ~2.05 ETC (actual average from Blockscout)
- [x] Fixed block time to ~13 seconds (actual from Blockscout - was incorrectly 15.6s)
- [x] Added Blockscout attribution links throughout mining section
- [x] Sanity check all public displayed data for accuracy - Updated Jan 2026
- [x] Updated fallback values: hashrate 174 TH/s, difficulty 2.47 PH, price $12.75, block time 13s
- [x] Add small data source attribution links where Blockscout data is displayed
- [x] Added Blockscout attribution to homepage EcosystemStats component

**Currency Conversion & Exchange Rates:**
- [x] Implement 24-hour cached exchange rate API (like Blockscout caching strategy)
- [x] Create /api/rates endpoint for cached exchange rate data (/lib/exchange-rates.ts)
- [x] Update converter page to use live API data instead of hardcoded sampleRates
- [x] Add currency data source attribution (CoinGecko live indicator on converter page)
- [x] Add "Live rates from CoinGecko" indicator on converter pages

**Navigation & Site Structure Review:**
- [x] Fix nav bar transparency - increased opacity to 95%, solid dropdown backgrounds with blur
- [x] Review nav bar links - confirmed high value links are appropriately placed
- [x] Move "Exchange Reviews" from Buy dropdown to More dropdown (with Exchanges Directory)
- [x] Added "Find ATM" to Buy dropdown for better nav access
- [x] Review for redundancies - fixed homepage (StatsStrip now social proof, EcosystemStats shows live network data)

**Footer Update:**
- [x] Update footer to match Bitcoin.com inspiration - multi-column layout with Products, Learn, Ecosystem, Company columns, social links, brand section, Blockscout attribution

**Network Data Dashboard:**
- [x] Build dashboard display for network data - /research/network now has live data dashboard
- [x] Include live metrics: price, market cap, block height, transactions, gas price, block time, block reward
- [x] Add charts - animated bar charts for mining pool distribution
- [x] Update /research/network to use live dashboard data from /api/network
- [x] Incorporate live data throughout site (homepage EcosystemStats, research/network)

**API Rate Limiting Strategy:**
- [x] Implement 24-hour cache for Blockscout data (changed from 5-minute)
- [x] Store cached data in persistent file location (.next/cache/blockscout/)
- [x] Only refresh data once daily to avoid flooding Blockscout APIs
- [x] Block explorer links for users who need real-time data

**Website Social Links:**
- [ ] Create EthereumClassic.com-specific social accounts (separate from ETC open source project)
- [ ] Update footer social links to use "#" placeholder until accounts are created
- [ ] Update global variables/config with EthereumClassic.com social URLs when available
- [ ] Note: These are for promoting the website and its functionality, not the open source project

**Mining Network Metrics (Miner Visibility):**
Inspiration: https://2miners.com/etc-network-hashrate, https://2miners.com/etc-stats/
- [x] Add network hashrate live metric (calculated from difficulty/blocktime via RPC)
- [x] Add network difficulty live metric (from ETC RPC endpoint)
- [x] Created /lib/etc-rpc.ts for RPC integration with fallback endpoints
- [x] Created /api/mining endpoint for mining-specific stats
- [x] Update /mining/stats page with comprehensive miner metrics (hashrate, difficulty, latest block info)

**ETC Emission Schedule & Supply Tracker (Inspiration: https://etcis.money/):**
ECIP-1017 emission schedule with 5M block eras and 20% reduction per era
- [x] Emission schedule chart showing total supply curve over time (/research/supply)
- [x] Current supply stats: total emitted, remaining supply, inflation rate
- [x] Era breakdown table (supply emitted per 5M block era)
- [x] Percentage of total supply emitted tracker
- [x] "Fifthening" countdown timer to next block reward reduction (live countdown)
- [x] Block reward history display (current era reward, previous eras)

**Network Fee Market Dashboard:**
Critical for monitoring ETC's transition from block reward to fee-based miner incentives
- [x] Gas price display (slow/average/fast tiers) (/research/fees)
- [x] Network utilization gauge
- [x] Average transaction fee display
- [x] Fee vs block reward ratio (fees as % of total miner revenue)
- [x] Fee market health indicators
- [x] Transaction cost estimator (simple transfer, token transfer, DEX swap, contract deploy)
- [x] Comparison to block reward (visualize fee market growth relative to declining block rewards)

### Milestone 5.7: Advanced Features
**Status**: Complete
**Dependencies**: Phase 4

**Deliverables**:
- [x] Search functionality (Fuse.js-powered fuzzy search with keyboard navigation, grouped results)
- [x] Newsletter integration (Newsletter component with 3 variants: default, compact, inline)
- [x] Contact form (/contact with form validation, community channels, FAQ)
- [x] Advertising system (AdBanner component with 4 placements, /advertise info page)
- [x] Partner directory (/partners with category filtering, 20+ partners)
- [x] Grants/funding page (/build/grants with funding sources, project ideas, application process)

### Milestone 5.8: Final Testing & QA
**Dependencies**: Phase 4

**Deliverables**:

**Sitemap Update:**
- [ ] Update sitemap with all new pages

**Manual Review:**
- [ ] Review all new pages for content accuracy and completeness
- [ ] Verify all internal links work correctly
- [ ] Check external links open in new tabs
- [ ] Validate form functionality where applicable

**Mobile Responsiveness:**
- [ ] Test at 375px (mobile phone)
- [ ] Test at 768px (tablet)
- [ ] Test at 1024px (desktop)
- [ ] Test at 1440px (large desktop)
- [ ] Verify navigation hamburger menu works on mobile
- [ ] Check touch targets are adequate size (44px minimum)

**Cross-Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Performance:**
- [ ] Lighthouse performance audit (target 90+)
- [ ] Check for layout shifts (CLS)
- [ ] Verify images are optimized
- [ ] Test page load times (<3s target)

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA
- [ ] Alt text on images
- [ ] Proper heading hierarchy

### Milestone 5.9: UI/UX Review & Polish (v0.1 Cleanup)
**Dependencies**: 5.8
**Status**: Not Started

**Sitemap & Page Inventory:**
- [ ] Update sitemap to accurately reflect all pages in the repository
- [ ] Audit for pages not currently accounted for in the sitemap
- [ ] Ensure all pages are accessible and linked appropriately
- [ ] Review sitemap against URL-STRUCTURE.md for completeness

**Homepage Public Copy Improvements:**
- [ ] Remove misleading "500k community members" statistic (inaccurate/unverifiable)
- [ ] Fix transaction count display - currently showing as USD number format (incorrect)
- [ ] Expand "Why Ethereum Classic?" section with meaningful, substantive detail
- [ ] Review and fix other small copy errors throughout homepage
- [ ] Ensure all statistics displayed are accurate and verifiable

**Strategy for Efficient Fixes:**
To minimize Claude Code usage while fixing many small UI/UX issues:
1. **Batch by file/component** - Group all fixes for a single file together
2. **Use issue lists** - Document all issues first, then fix in batches
3. **Prioritize by impact** - Fix high-visibility issues first (homepage, nav, footer)
4. **Component-level fixes** - Fix shared components once to propagate changes
5. **CSS/design token fixes** - Adjust design tokens for global improvements

**Layer 1: Core Pages & Global Components (High Priority)**
These are seen by every visitor - fix first.
- [ ] Homepage (/) - hero, stats strip, product cards, ecosystem stats, CTA
- [ ] Navigation component - desktop dropdown menus, mobile hamburger, active states
- [ ] Footer component - column layout, links, social icons, attribution
- [ ] Layout components - Container, Section, PageHeader spacing/typography
- [ ] Design tokens - colors, typography scale, spacing consistency

**Layer 2: Section Hub Pages (Medium Priority)**
Main entry points for each section.
- [ ] /wallet - hero, wallet cards, security messaging
- [ ] /buy - hero, exchange listings, purchase flow
- [ ] /apps - hero, app cards, category navigation
- [ ] /learn - hero, article cards, category tabs
- [ ] /mining - hero, stats, pool cards, resource links
- [ ] /markets - price display, chart, trading pairs
- [ ] /build - developer hub, tools, documentation links
- [ ] /news - news hub, category navigation, article cards
- [ ] /community - social links, events, contribution guide

**Layer 3: Secondary/Detail Pages (Lower Priority)**
Individual item pages and deep content.
- [ ] Wallet reviews (/wallet/reviews/[wallet])
- [ ] Exchange reviews (/buy/reviews/[exchange])
- [ ] Individual app pages (/apps/[app])
- [ ] Learn articles (/learn/[category]/[article])
- [ ] News articles (/news/[slug])
- [ ] Mining pool pages (/mining/pools/[pool])
- [ ] Build client pages (/build/clients/[client])
- [ ] Tool pages (/tools/*)

**Layer 4: Utility & Account Pages (Lowest Priority)**
Less trafficked but still need polish.
- [ ] Account pages (/account/*)
- [ ] Directory pages (/directory/*)
- [ ] Research pages (/research/*)
- [ ] Legal/privacy/contact pages

**Issue Tracking Template:**
```
Page: /example
Issues:
1. [Component] Description of issue
2. [Component] Description of issue
Fixes Applied: (date)
```

---

## Phase 6: Platform & Revenue (P4)

**Goal**: Build revenue streams, improve UX, and establish platform presence.

### Milestone 6.1: UI/UX Fixes
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Fix mobile navigation - Move "Launch App" CTA to top (currently hidden by Safari iOS URL bar)
- [ ] Fix "Launch App" button color - adjust green to better match website theme
- [ ] General mobile UX audit and fixes

### Milestone 6.2: SEO & Discovery Optimization
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Research 2025 SEO best practices for LLM/AI agent summaries
- [ ] Implement XML content structure for LLM search engines
- [ ] Rich metadata implementation (OG images, Twitter cards, favicons)
- [ ] Structured data markup (JSON-LD)
- [ ] Build RSS feed for news following best practices
- [ ] Backfill relevant content from ethereumclassic.org/news (polish formatting issues from .org feed)
- [ ] Position site as authoritative news source for aggregation websites

### Milestone 6.3: Social Media Presence
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Create EthereumClassic.com social accounts (separate from ETC open source project socials)
- [ ] Automate content generation flows from website to social outlets
- [ ] Research 2025 best practices for social automation
- [ ] Social sharing optimization

### Milestone 6.4: Revenue Streams - Referrals
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Review centralized exchanges for referral programs
- [ ] Create list of exchanges with referral programs
- [ ] Sign up for exchange referral programs
- [ ] Embed referral links throughout website (Buy/Exchanges pages)
- [ ] Track referral performance

### Milestone 6.5: Merchandise Store
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Set up drop shipping service integration
- [ ] Design ETC merchandise (shirts, hats, hoodies, socks)
- [ ] Build store page/section
- [ ] Product photography and descriptions
- [ ] Checkout/payment integration

### Milestone 6.6: Mining Hardware Marketplace
**Dependencies**: 4.7

**Reference**: https://www.coinwarz.com/mining/ethereum%20classic/hardware

**Deliverables**:
- [ ] Hardware marketplace/store section for ETChash ASICs and GPUs
- [ ] Research hardware retailers with referral/affiliate programs
- [ ] Embed affiliate links to hardware stores
- [ ] Product listings with specs, pricing, availability
- [ ] Price comparison features
- [ ] Profitability rankings based on current network difficulty and ETC price
- [ ] Hardware comparison tool (efficiency, ROI calculator per device)

### Milestone 6.7: Classic USD Integration
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Position Classic USD as primary fiat on-ramp for ETC
- [ ] Document USD → USC stablecoin → ETCswap DEX (WETC/USC) flow
- [ ] USDC/USDP to USC converter/bridge documentation (may live in Classic OS)
- [ ] Funnel integration from ethereumclassic.com to Classic OS for on-ramp

### Milestone 6.8: EthereumClassic.com Pool Announcement
**Dependencies**: 4.7

**Deliverables**:
- [ ] "Coming Soon" announcement for EthereumClassic.com Pool
- [ ] Feature pool in mining sections of website
- [ ] Pool landing page with waitlist/notification signup
- [ ] Integration documentation with Classic OS and Fukuii client

---

## Phase 7: Mining Pool & Advanced Products (P5)

**Goal**: Launch EthereumClassic.com mining pool and integrate advanced ecosystem products.

### Milestone 7.1: Mining Pool Development
**Dependencies**: Phase 6

**Deliverables**:
- [ ] EthereumClassic.com mining pool infrastructure
- [ ] Pool dashboard and statistics
- [ ] Miner registration and management
- [ ] Payout system
- [ ] Pool guides and documentation
- [ ] Classic OS integration
- [ ] Fukuii client integration (recommended client)

### Milestone 7.2: Fukuii & FairWins Integration
**Dependencies**: 7.1

**Reference**: https://github.com/chippr-robotics/prediction-dao-research

**Deliverables**:
- [ ] Fukuii client promotion and guides
- [ ] FairWins Prediction Market integration
- [ ] Offline CLOB matching fees documentation (rewards for Fukuii client runners)
- [ ] Full production launch of FairWins (from Alpha)

### Milestone 7.3: Advanced Ecosystem Products
**Dependencies**: Phase 6

**Deliverables**:
- [ ] ClearPath (Futarchy Prediction Markets for Olympia DAO) - full launch
- [ ] TokenMint (Enterprise Token Management) - full launch
- [ ] Ecosystem product integration guides
- [ ] Cross-product documentation

---

## Phase 8: Network Infrastructure & Historical Data (P6)

**Goal**: Establish EthereumClassic.com as a source of authoritative network data by running local infrastructure and building historical data archives.

**Strategy**:
- **Live data (current)**: Fetch tip-of-chain data from public RPC endpoints with 24-hour rate-limited caching
- **Historical data (this phase)**: Sync local ETC node to backfill historical data from genesis
- **Data ownership**: Own our data to be authoritative source, not dependent on third-party APIs

### Milestone 8.1: Local Node Infrastructure
**Dependencies**: Phase 7
**Status**: Not Started

**Deliverables**:
- [ ] Provision server for ETC node operation
- [ ] Install and sync Core-Geth (primary production client)
- [ ] Full chain sync from genesis (archive node preferred for historical queries)
- [ ] Configure node for internal API access
- [ ] Document node maintenance procedures
- [ ] Set up monitoring and alerting for node health
- [ ] Plan transition path to Fukuii post-Olympia upgrade

**Technical Notes**:
- Archive node required for historical state queries
- Estimated sync time: 1-3 days depending on hardware
- Storage requirement: ~500GB+ for archive node
- **Note**: Erigon does NOT support ETC (see docs/ETC-KNOWLEDGE.md)
- Core-Geth is currently the only production-grade archive node option
- Fukuii will be evaluated post-Olympia upgrade (2026)

### Milestone 8.2: Historical Data Collection System
**Dependencies**: 8.1
**Status**: Not Started

**Design**: Daily snapshots at 00:00 UTC for all historical charts, backfilled from local node

**Deliverables**:
- [ ] Design snapshot data schema (hashrate, difficulty, price, block height, pool distribution, fees)
- [ ] Build daily snapshot collection job (00:00 UTC cron trigger)
- [ ] Create snapshot storage system (JSON files in /data/snapshots/ or lightweight DB)
- [ ] Implement retroactive data backfill from local node (genesis to present)
- [ ] Build chart data API endpoints with time range support (1D, 1W, 1M, 1Y, ALL)
- [ ] Create reusable chart components for historical data visualization

**Data Points to Archive**:
```typescript
interface DailySnapshot {
  date: string           // YYYY-MM-DD
  blockHeight: number    // Block number at 00:00 UTC
  difficulty: number     // Network difficulty
  hashrate: number       // Calculated hashrate (difficulty / blocktime)
  price: number          // ETC price in USD (from CoinGecko archive)
  totalSupply: number    // Circulating supply at this block
  totalFees: number      // Total fees collected in 24h period
  avgGasPrice: number    // Average gas price for the day
  txCount: number        // Transaction count for the day
  activeAddresses: number // Unique addresses transacting
}
```

### Milestone 8.3: Advanced Mining Analytics
**Dependencies**: 8.2
**Status**: Not Started

**Inspiration**: https://2miners.com/etc-stats/, https://2miners.com/etc-network-hashrate

**Deliverables**:
- [ ] Hashrate historical chart (1D, 1W, 1M, 1Y views)
- [ ] Difficulty historical chart
- [ ] Pool distribution pie chart (calculated from block winners)
- [ ] Pool hashrate percentages with miner address attribution
- [ ] Top miners leaderboard (addresses winning most blocks in period)
- [ ] Block winner analysis API endpoint
- [ ] Real-time block feed with pool/miner attribution
- [ ] Mining pool percentage trends over time

### Milestone 8.4: Fee Market Historical Analytics
**Dependencies**: 8.2
**Status**: Not Started

**Deliverables**:
- [ ] Daily network fees tracker (total fees generated per day)
- [ ] Fee revenue trend chart (historical daily/weekly/monthly fees)
- [ ] Gas price trends over time
- [ ] Fee vs block reward ratio over time (critical for PoW sustainability analysis)
- [ ] Network utilization historical trends
- [ ] Supply calculator API endpoint (/api/supply)

### Milestone 8.5: Network Public Goods Planning (Planning Session)
**Dependencies**: Phase 7
**Status**: Not Started

**Goal**: Plan EthereumClassic.net infrastructure to complement EthereumClassic.com

**Domain Structure Planning**:
- `ethereumclassic.net` - Network infrastructure hub
- `explorer.ethereumclassic.net` - Block explorer (self-hosted Blockscout or custom)
- `rpc.ethereumclassic.net` - Public RPC endpoint
- `faucet.ethereumclassic.net` - Mordor testnet faucet
- `monitor.ethereumclassic.net` - Network health monitor

**Deliverables**:
- [ ] Planning session for EthereumClassic.net infrastructure scope
- [ ] Architecture document for network public goods
- [ ] Integration plan with Classic OS / Mining OS
- [ ] Resource and cost estimation
- [ ] Timeline and phasing for infrastructure rollout
- [ ] Document synergies with EthereumClassic.com website data needs

**Public Goods to Consider**:
- Mordor Faucet (currently hosted elsewhere, could self-host)
- Block Explorer (reduce dependency on third-party Blockscout)
- Public RPC Endpoints (community infrastructure)
- Network Monitor (node health, peer count, version distribution)
- Archive Node API (for dApps needing historical state)

**Mining OS Integration Points**:
- Pool statistics from self-hosted infrastructure
- Miner dashboard powered by own data
- Real-time block notifications
- Hashrate verification

---

## Milestone Tracking

### Progress Summary

| Phase | Milestones | Completed | Progress |
|-------|------------|-----------|----------|
| Phase 1 | 7 | 7 | 100% | (All Complete - 1.1 through 1.7)
| Phase 2 | 5 | 5 | 100% | (All Complete - 2.1 through 2.5)
| Phase 3 | 10 | 10 | 100% | (All Complete - 3.1 through 3.10)
| Phase 4 | 12 | 12 | 100% | (All Complete - 4.1 through 4.12)
| Phase 5 | 9 | 6 | 67% | (5.1-5.6 Complete, 5.7 Next)
| Phase 6 | 8 | 0 | 0% | (Platform & Revenue)
| Phase 7 | 3 | 0 | 0% | (Mining Pool & Advanced Products)
| Phase 8 | 5 | 0 | 0% | (Network Infrastructure & Historical Data)
| **Total** | **59** | **40** | **68%** |

### Current Focus

**Just Completed**: Phase 5 Milestones 5.1-5.6
- 5.1 User Accounts (auth system, dashboard, login/register, settings, watchlist, portfolio)
- 5.2 Advanced Mining (ATM locator, Mining OS page)
- 5.3 CMS Integration (MDX-based content system, content editor page)
- 5.4 API Layer (API docs page, price API, network stats API)
- 5.5 Internationalization (i18n infrastructure, language selector, ES/ZH translations)
- 5.6 Content Review & Polish:
  - Live network data from Blockscout/RPC with 24-hour caching
  - ETC emission schedule & Fifthening countdown (/research/supply)
  - Fee market dashboard (/research/fees)
  - Currency conversion with CoinGecko API (/api/rates)
  - ETC Knowledge Bank (docs/ETC-KNOWLEDGE.md) for authoritative ETC information
  - Node client corrections (Erigon does NOT support ETC)
  - "BlockScout" → "Blockscout" branding fix

**In Progress**: Milestone 5.7 - Advanced Features
- [ ] Search functionality
- [ ] Newsletter integration
- [ ] Contact form
- [ ] Advertising system
- [ ] Partner directory
- [ ] Grants/funding page

**Ongoing** (deferred from 5.6, requires external action):
- [ ] Website social accounts creation
- [ ] Backfill ETC Knowledge Bank with historical context (Core Contributor input needed)

**ETC Knowledge Bank** (docs/ETC-KNOWLEDGE.md):
Single source of truth for ETC-specific technical details, historical context, and insider knowledge.
Contains [PLACEHOLDER] tags for information needing Core Contributor input.

**Data Strategy**:
- **Live data (NOW)**: Tip-of-chain from public RPC endpoints, 24-hour rate-limited cache
- **Historical data (Phase 8)**: Backfill from local ETC node after sync from genesis

**Next Up**: 5.7 Advanced Features → 5.8 Final Testing → 5.9 UI/UX Polish

**Deferred to Phase 8** (requires local node infrastructure):
- Historical hashrate/difficulty charts
- Pool distribution from block winner analysis
- Daily fee revenue trends
- Mining pool percentage trends over time

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
├── 5.6 Content Review & Polish
├── 5.7 Advanced Features
├── 5.8 Final Testing & QA
└── 5.9 UI/UX Review & Polish
                                                        ↓
Phase 6 ←──────────────────────────────────────── Phase 5
├── 6.1 UI/UX Fixes
├── 6.2 SEO & Discovery
├── 6.3 Social Media Presence
├── 6.4 Revenue - Referrals
├── 6.5 Merchandise Store
├── 6.6 Mining Hardware Marketplace
├── 6.7 Classic USD Integration
└── 6.8 Pool Announcement
                                                        ↓
Phase 7 ←──────────────────────────────────────── Phase 6
├── 7.1 Mining Pool Development
├── 7.2 Fukuii & FairWins Integration
└── 7.3 Advanced Ecosystem Products
                                                        ↓
Phase 8 ←──────────────────────────────────────── Phase 7
├── 8.1 Local Node Infrastructure
├── 8.2 Historical Data Collection System ← 8.1
├── 8.3 Advanced Mining Analytics ← 8.2
├── 8.4 Fee Market Historical Analytics ← 8.2
└── 8.5 Network Public Goods Planning (EthereumClassic.net)
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
