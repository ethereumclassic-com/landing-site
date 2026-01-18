# Milestones - EthereumClassic.com v0.2

> **Purpose**: Phased development plan with clear milestones and deliverables.
>
> **Approach**: Framework/shell first, then core pages, then content expansion.

---

## Development Phases Overview

```
Phase 1: Framework & Shell ✓
    ↓
Phase 2: Core Pages (P0) ✓
    ↓
Phase 3: Secondary Pages (P1) ✓
    ↓
Phase 4: Content Expansion (P2) ✓
    ↓
Phase 5: Advanced Features (P3) ✓
    ↓
Phase 6: Autonomous Completion (Claude can complete without blocking)
    ↓
Phase 7: Human Review & Infrastructure (Requires human involvement)
```

### Phase Reorganization Strategy

**Phase 6 (Autonomous)** contains tasks Claude Code can complete independently:
- Sitemap updates
- SEO/metadata implementation
- RSS feed building
- UI/UX fixes (code-level)
- Performance optimization
- Accessibility fixes

**Phase 7 (Human-Blocked)** contains tasks requiring human involvement:
- Content accuracy review (human sanity check)
- Social account creation
- Exchange referral signups
- Merchandise/store setup
- Local node infrastructure
- Mining pool operations

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

---

## Phase 6: Autonomous Completion

**Goal**: Complete all remaining tasks that Claude Code can execute independently without human blocking.

### Milestone 6.1: Sitemap & Technical SEO
**Status**: Not Started
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Update sitemap.xml with all new pages
- [ ] Audit sitemap against URL-STRUCTURE.md for completeness
- [ ] Verify all pages are accessible and linked appropriately
- [ ] Implement XML content structure for LLM search engines
- [ ] Rich metadata implementation (OG images, Twitter cards)
- [ ] Structured data markup (JSON-LD) for key pages
- [ ] Build RSS feed for news section

### Milestone 6.2: UI/UX Code Fixes
**Status**: Not Started
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Fix mobile navigation - Move "Launch App" CTA to top (Safari iOS URL bar issue)
- [ ] Fix "Launch App" button color - adjust green to match website theme
- [ ] Homepage fixes: Remove unverifiable "500k community members" statistic
- [ ] Homepage fixes: Fix transaction count display format
- [ ] Expand "Why Ethereum Classic?" section with substantive detail
- [ ] Fix footer social links (use "#" placeholder until accounts created)
- [ ] General mobile UX audit and fixes

### Milestone 6.3: Performance & Accessibility
**Status**: Not Started
**Dependencies**: 6.2

**Deliverables**:
- [ ] Lighthouse performance audit (target 90+)
- [ ] Fix layout shifts (CLS)
- [ ] Optimize images
- [ ] Keyboard navigation audit
- [ ] Focus states visibility
- [ ] Color contrast WCAG AA compliance
- [ ] Alt text audit
- [ ] Heading hierarchy audit

### Milestone 6.4: Link Verification
**Status**: Not Started
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Verify all internal links work correctly
- [ ] Check external links open in new tabs
- [ ] Validate form functionality
- [ ] Test search functionality across all indexed content

### Milestone 6.5: Mining Hardware Affiliate Pages
**Status**: Not Started
**Dependencies**: Phase 5

**Reference**: https://www.coinwarz.com/mining/ethereum%20classic/hardware

**Deliverables**:
- [ ] Hardware marketplace page structure for ETChash ASICs and GPUs
- [ ] Product listings with specs, pricing, availability
- [ ] Profitability rankings based on current network difficulty and ETC price
- [ ] Hardware comparison tool (efficiency, ROI calculator per device)
- [ ] Affiliate link placeholders (actual links added in Phase 7)

### Milestone 6.6: Classic USD Documentation
**Status**: Not Started
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Position Classic USD as primary fiat on-ramp for ETC
- [ ] Document USD → USC stablecoin → ETCswap DEX (WETC/USC) flow
- [ ] Create on-ramp funnel from ethereumclassic.com to Classic OS

### Milestone 6.7: Mining Pool Dashboard Scaffolding
**Status**: Not Started
**Dependencies**: Phase 5

**Reference**: https://etc.2miners.com/, https://etc.f2pool.com/, https://k1pool.com/pool/etc

**Goal**: Build full mining pool UI with sample data, emulating existing pools. When pool infrastructure is ready (Phase 7), simply connect to real backend.

**Deliverables**:

**Pool Hub (/pool)**:
- [ ] Pool landing page with key stats (hashrate, miners, blocks found, luck)
- [ ] Getting started guide (how to connect, recommended software)
- [ ] Stratum server addresses (placeholder endpoints)
- [ ] Payout information (thresholds, fees, schedule)

**Pool Dashboard (/pool/dashboard)**:
- [ ] Miner dashboard (requires wallet address input)
- [ ] Worker stats table (name, hashrate, shares, last seen)
- [ ] Hashrate chart (24h worker performance)
- [ ] Payment history table
- [ ] Estimated earnings calculator

**Pool Statistics (/pool/stats)**:
- [ ] Pool hashrate chart (with sample historical data)
- [ ] Blocks found table (block #, reward, finder, time)
- [ ] Pool luck indicator
- [ ] Active miners count over time
- [ ] Network vs pool hashrate comparison

**Pool Blocks (/pool/blocks)**:
- [ ] Paginated blocks found list
- [ ] Block details (hash, reward, uncle status, maturity)
- [ ] Confirmation status indicators

**Pool Miners (/pool/miners)**:
- [ ] Top miners leaderboard (anonymized addresses)
- [ ] Miner distribution chart

**Data Architecture**:
- [ ] Sample pool data file (/app/pool/data/sample-pool.ts)
- [ ] Pool API structure (/api/pool/* returning sample data)
- [ ] Real-time simulation with mock WebSocket events (optional)

### Milestone 6.8: Merchandise Store Shell
**Status**: Not Started
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Store page layout (/store or /merch)
- [ ] Product card components
- [ ] Sample merchandise items (placeholder images, descriptions)
- [ ] Category navigation (Apparel, Accessories, etc.)
- [ ] "Coming Soon" or cart placeholder (actual checkout in Phase 7)

### Milestone 6.9: Historical Charts with Sample Data
**Status**: Not Started
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Chart components for hashrate/difficulty/fees over time
- [ ] Sample/mock historical data for chart demonstration
- [ ] Time range selectors (1D, 1W, 1M, 1Y, ALL)
- [ ] API endpoint structure for historical data (returns sample data)
- [ ] "Data powered by local node" attribution with note about upcoming live data

### Milestone 6.10: Referral Infrastructure
**Status**: Not Started
**Dependencies**: Phase 5

**Deliverables**:
- [ ] Referral link component with tracking parameter support
- [ ] Exchange referral link placeholders on /buy pages
- [ ] Hardware affiliate link placeholders on /mining/hardware
- [ ] Config file for easy referral code updates (/lib/referrals.ts)
- [ ] UTM parameter tracking structure

### Milestone 6.11: Network Health Dashboard Scaffolding
**Status**: Not Started
**Dependencies**: Phase 5

**Goal**: Build comprehensive ETC network monitoring dashboard for core contributors and stakeholders. Unified data hub for informed decision-making. Uses sample/mock data until local node infrastructure is ready.

**Reference**: https://ethernodes.org/, https://2miners.com/etc-network-hashrate, https://miningpoolstats.stream/ethereumclassic

**Network Health Hub (/network or /network-health)**:
- [ ] Dashboard overview with key health indicators
- [ ] Status summary cards (network healthy/degraded/warning)
- [ ] Quick links to detailed monitors
- [ ] Last updated timestamp with data source attribution

**Block Explorer (/network/explorer)**:
- [ ] Latest blocks table with real-time updates (sample data)
- [ ] Block detail page (/network/explorer/block/[number])
- [ ] Transaction detail page (/network/explorer/tx/[hash])
- [ ] Address lookup (/network/explorer/address/[address])
- [ ] Search functionality (block, tx, address)

**Node Monitor (/network/nodes)**:
- [ ] World map visualization of known node locations
- [ ] Node count by country/region
- [ ] Client version distribution (Core-Geth versions, Besu, Fukuii)
- [ ] Node version health (% on latest vs outdated)
- [ ] Historical node count chart

**Hashrate & Security (/network/security)**:
- [ ] Network hashrate display (live + historical chart)
- [ ] Security budget calculator (hashrate × electricity cost estimate)
- [ ] 51% attack cost estimation
- [ ] Hashrate centralization risk monitor:
  - [ ] Top pools by hashrate percentage
  - [ ] Nakamoto coefficient (pools needed for 51%)
  - [ ] Warning indicators for dangerous concentration
- [ ] Mining pool distribution pie chart

**Network Statistics (/network/stats)**:
- [ ] Current difficulty and difficulty chart
- [ ] Block time average and chart
- [ ] Gas usage and gas price trends
- [ ] Transaction throughput (TPS)
- [ ] Active addresses (daily unique)
- [ ] Supply metrics (circulating, inflation rate)

**RPC Endpoint Status (/network/rpc)**:
- [ ] Public RPC endpoint list with health status
- [ ] Latency monitoring for each endpoint
- [ ] Endpoint recommendation based on user location
- [ ] "Add to MetaMask" buttons
- [ ] Uptime history

**Data Architecture**:
- [ ] Sample network data file (/app/network/data/sample-network.ts)
- [ ] Network API structure (/api/network-health/* returning sample data)
- [ ] Mock node list with geographic distribution
- [ ] Mock pool distribution data
- [ ] Placeholder for real data connection points

**Components**:
- [ ] WorldMap component (node locations)
- [ ] HealthIndicator component (status badges)
- [ ] NetworkChart component (reusable time-series)
- [ ] PoolDistributionChart component
- [ ] NodeVersionChart component

### Milestone 6.12: Automated Testing & Report Generation
**Status**: Not Started
**Dependencies**: 6.1-6.11

**Scope**: FULL CODEBASE REVIEW - All code from Phase 1 through Phase 6. This is a comprehensive audit of the entire product developed by coding agents (Claude Code). Every file, component, page, and feature must be validated.

**Goal**: Run comprehensive automated tests on ALL features across the entire codebase. Validate best practices, coding standards, and development quality for all work produced by AI coding agents. Generate detailed reports documenting test results for due diligence trail.

**Deliverables**:

**Build & Lint Verification**:
- [ ] Run `npm run build` - verify all 180+ pages compile without errors
- [ ] Run `npm run lint` - verify zero lint warnings/errors
- [ ] Run TypeScript type checking - verify no type errors
- [ ] Document build output (page count, build time, bundle sizes)

**Link Integrity Testing**:
- [ ] Crawl all internal links and verify 200 status
- [ ] Identify and report any broken internal links
- [ ] Verify all dynamic routes generate correctly ([wallet], [exchange], [pool], etc.)
- [ ] Generate link integrity report

**API Endpoint Testing**:
- [ ] Test /api/price - verify response schema, fallback behavior
- [ ] Test /api/price/history - verify date range handling
- [ ] Test /api/network - verify Blockscout integration, caching
- [ ] Test /api/network/blocks - verify block data structure
- [ ] Test /api/rates - verify exchange rate responses
- [ ] Test /api/mining - verify calculation accuracy
- [ ] Generate API test report with response times and status codes

**Component Rendering Tests**:
- [ ] Verify all pages render without React errors
- [ ] Check for missing required props or undefined references
- [ ] Verify no hydration mismatches
- [ ] Generate component health report

**Data Integrity Verification**:
- [ ] Verify all wallet data entries have required fields
- [ ] Verify all exchange data entries have required fields
- [ ] Verify all mining pool data entries have required fields
- [ ] Verify all app data entries have required fields
- [ ] Verify all article data entries have required fields
- [ ] Generate data completeness report

**Accessibility Automated Checks**:
- [ ] Run axe-core accessibility audit on key pages
- [ ] Check for missing alt text on images
- [ ] Verify heading hierarchy (no skipped levels)
- [ ] Check color contrast ratios
- [ ] Generate accessibility report

**Performance Baseline**:
- [ ] Run Lighthouse CI on homepage
- [ ] Run Lighthouse CI on key section pages (wallet, buy, apps, learn, mining)
- [ ] Document Core Web Vitals (LCP, FID, CLS)
- [ ] Generate performance baseline report

**Code Quality & Best Practices Audit**:
- [ ] Review all TypeScript files for proper typing (no `any` abuse)
- [ ] Verify consistent code formatting across codebase
- [ ] Check for unused imports and dead code
- [ ] Verify proper error handling patterns
- [ ] Review React component patterns (hooks usage, memo optimization)
- [ ] Check for security best practices (no hardcoded secrets, XSS prevention)
- [ ] Verify proper use of environment variables
- [ ] Review API route implementations for proper error responses
- [ ] Check for proper loading and error states in UI components
- [ ] Verify consistent naming conventions throughout codebase
- [ ] Generate code quality report

**File Structure & Architecture Review**:
- [ ] Verify consistent file organization across all sections
- [ ] Check for proper separation of concerns (components, data, lib, hooks)
- [ ] Review data file structures for consistency
- [ ] Verify proper use of shared components vs duplicated code
- [ ] Check for circular dependencies
- [ ] Generate architecture compliance report

**Report Generation**:
- [ ] Create /docs/reports/ directory for test reports
- [ ] Generate PHASE-6-TEST-REPORT.md with all test results
- [ ] Include timestamp, git commit hash, and environment details
- [ ] Document any known issues or limitations
- [ ] Summary of all automated tests passed/failed
- [ ] Code quality metrics and recommendations
- [ ] Full file inventory with review status

---

## Phase 7: Human Review & Infrastructure

**Goal**: Tasks that ONLY humans can complete - account creation, program signups, infrastructure provisioning, content approval, product launches.

> **Note**: Phase 6 builds all scaffolding, shells, and sample data. Phase 7 contains ONLY the specific actions requiring human involvement.

### Milestone 7.1: Content Accuracy Review
**Status**: Not Started
**Dependencies**: Phase 6
**Blocker**: Human judgment required

**What Claude Built** (Phase 6): All pages, components, copy
**Human Must Do**:
- [ ] Review all page copy for accuracy and consumer-friendliness
- [ ] Verify all statistics are accurate and verifiable
- [ ] Fill in ETC Knowledge Bank [PLACEHOLDER] tags
- [ ] Approve or revise homepage messaging
- [ ] Cross-browser testing sign-off (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness sign-off (375px, 768px, 1024px, 1440px)

### Milestone 7.2: Social Account Creation
**Status**: Not Started
**Dependencies**: Phase 6
**Blocker**: Account registration requires human

**What Claude Built** (Phase 6): Footer with "#" placeholder links
**Human Must Do**:
- [ ] Create EthereumClassic.com Twitter/X account
- [ ] Create EthereumClassic.com Discord server (if separate)
- [ ] Update /lib/config.ts or footer with real social URLs

### Milestone 7.3: Affiliate Program Signups
**Status**: Not Started
**Dependencies**: 6.10 (Referral Infrastructure)
**Blocker**: Program registration requires human

**What Claude Built** (Phase 6): Referral link infrastructure, placeholder URLs, /lib/referrals.ts config
**Human Must Do**:
- [ ] Sign up for Binance referral program → add code to config
- [ ] Sign up for Coinbase referral program → add code to config
- [ ] Sign up for Kraken referral program → add code to config
- [ ] Sign up for hardware affiliate programs (Amazon, Newegg, etc.) → add codes
- [ ] Test tracking is working

### Milestone 7.4: Merchandise Store Launch
**Status**: Not Started
**Dependencies**: 6.8 (Store Shell)
**Blocker**: Vendor selection and product creation requires human

**What Claude Built** (Phase 6): Store page, product cards, sample items, category nav
**Human Must Do**:
- [ ] Select drop shipping vendor (Printful, Printify, etc.)
- [ ] Create actual product designs
- [ ] Upload real product images
- [ ] Configure payment integration (Stripe, etc.)
- [ ] Enable checkout functionality

### Milestone 7.5: Local Node Infrastructure
**Status**: Not Started
**Dependencies**: Phase 7.1
**Blocker**: Server provisioning requires human

**What Claude Built** (Phase 6): N/A (pure infrastructure)
**Human Must Do**:
- [ ] Provision server (500GB+ storage)
- [ ] Install Core-Geth
- [ ] Sync archive node from genesis (~1-3 days)
- [ ] Configure internal API access
- [ ] Set up monitoring/alerting

**Technical Notes**:
- Erigon does NOT support ETC
- Core-Geth is the only production archive node option

### Milestone 7.6: Historical Data Activation
**Status**: Not Started
**Dependencies**: 7.5 (Node Infrastructure), 6.9 (Chart Components)
**Blocker**: Requires synced local node

**What Claude Built** (Phase 6): Chart components, API structure, sample data display
**Human Must Do**:
- [ ] Point API endpoints to local node
- [ ] Run backfill script from genesis to present
- [ ] Verify data accuracy
- [ ] Switch charts from sample to live data
- [ ] Set up daily snapshot cron job

### Milestone 7.7: Mining Pool Launch
**Status**: Not Started
**Dependencies**: 7.5 (Node Infrastructure), 6.7 (Pool Dashboard Scaffolding)
**Blocker**: Pool infrastructure requires human ops

**What Claude Built** (Phase 6): Full pool dashboard UI with sample data:
- Pool hub, dashboard, stats, blocks, miners pages
- Worker management interface
- Payment history tables
- Hashrate charts
- All using mock/sample data

**Human Must Do**:
- [ ] Set up stratum server infrastructure
- [ ] Configure payout system and thresholds
- [ ] Point pool dashboard to real backend APIs
- [ ] Test with real miners
- [ ] Launch pool and switch from sample to live data

### Milestone 7.8: Ecosystem Product Launches
**Status**: Not Started
**Dependencies**: Product development timelines
**Blocker**: External product readiness

**What Claude Built** (Phase 6): App pages already show "Alpha"/"Coming Soon" status
**Human Must Do**:
- [ ] FairWins: Update status from "Alpha" to "Live" when ready
- [ ] ClearPath: Update status from "Coming Soon" to "Live" when ready
- [ ] TokenMint: Update status from "Coming Soon" to "Live" when ready
- [ ] Fukuii: Add promotion content post-Olympia upgrade

### Milestone 7.9: Network Health Dashboard Activation
**Status**: Not Started
**Dependencies**: 7.5 (Node Infrastructure), 6.11 (Dashboard Scaffolding)
**Blocker**: Requires node infrastructure and data sources

**What Claude Built** (Phase 6): Complete Network Health Dashboard UI:
- Dashboard hub with health indicators
- Block explorer (blocks, transactions, addresses)
- Node monitor with world map
- Security & hashrate centralization monitor
- Network statistics page
- RPC endpoint status page
- All using mock/sample data

**Human Must Do**:
- [ ] Connect block explorer to local node RPC
- [ ] Set up node discovery/crawling for node map
- [ ] Configure RPC endpoint health checks
- [ ] Point dashboard APIs to live data sources
- [ ] Verify data accuracy across all monitors
- [ ] Switch from sample to live data
- [ ] Set up alerting for network anomalies (optional)

### Milestone 7.10: Comprehensive Manual Testing & QA
**Status**: Not Started
**Dependencies**: Phase 6
**Blocker**: Human judgment and real-world testing required

**Scope**: FULL CODEBASE MANUAL REVIEW - All code from Phase 1 through Phase 6. This is a comprehensive human audit of the entire product developed by coding agents (Claude Code). Every user-facing feature, interaction, and data display must be manually verified by a human tester.

**Purpose**: Validate that AI-generated code meets production quality standards. Ensure all features work correctly in real-world usage. Document human sign-off on all aspects that cannot be automatically tested.

**What Claude Built** (Phases 1-6): Complete site with all features implemented
**Human Must Do**:

**Account System Testing**:
- [ ] Test user registration flow (form validation, error handling)
- [ ] Test login/logout functionality
- [ ] Test portfolio tracker (add/remove holdings, calculations)
- [ ] Test watchlist (add/remove items, search, persistence)
- [ ] Test settings page (profile updates, preferences, account deletion)
- [ ] Verify localStorage persistence across sessions
- [ ] Test password visibility toggle functionality
- [ ] Verify form validation messages are helpful

**API Endpoint Testing**:
- [ ] Test /api/price endpoint (response format, fallback behavior)
- [ ] Test /api/price/history endpoint (date ranges, data integrity)
- [ ] Test /api/network endpoint (live Blockscout data, caching)
- [ ] Test /api/network/blocks endpoint (recent blocks data)
- [ ] Test /api/rates endpoint (exchange rate accuracy, source attribution)
- [ ] Test /api/mining endpoint (profitability calculations)
- [ ] Verify API error handling and fallback data
- [ ] Test API rate limiting behavior

**Search Functionality Testing**:
- [ ] Test search across all content types (learn, news, apps, wallets, exchanges, pools, hardware)
- [ ] Test keyboard navigation (arrow keys, Enter, Escape, ⌘K/Ctrl+K)
- [ ] Verify search result relevance and ranking
- [ ] Test search with special characters
- [ ] Test search with empty/short queries
- [ ] Verify grouped results display correctly
- [ ] Test search modal open/close behavior
- [ ] Test search on mobile devices

**Core Feature Testing**:
- [ ] Mining profitability calculator (input validation, calculation accuracy)
- [ ] Price converter (currency conversion accuracy, live rate display)
- [ ] Investment calculator (ROI projections, DCA calculations)
- [ ] Gas tracker (tier display, transaction cost estimates)
- [ ] Newsletter signup form (validation, submission handling)
- [ ] Contact form (validation, submission handling)
- [ ] Language selector (locale switching, translation display)
- [ ] Ad banner system (placement rendering, dismiss functionality)

**Navigation & Routing Testing**:
- [ ] Test all internal navigation links
- [ ] Verify breadcrumb accuracy on all pages
- [ ] Test mobile hamburger menu functionality
- [ ] Test dropdown menu behavior (hover, click, keyboard)
- [ ] Verify active state indicators
- [ ] Test back/forward browser navigation
- [ ] Verify 404 page for invalid routes
- [ ] Test dynamic route parameters ([wallet], [exchange], [pool], etc.)

**Data Accuracy Verification**:
- [ ] Verify live network stats match Blockscout
- [ ] Verify exchange rates match CoinGecko
- [ ] Verify mining pool information is current
- [ ] Verify hardware specifications are accurate
- [ ] Verify exchange information (fees, features) is current
- [ ] Verify wallet feature lists are accurate
- [ ] Spot-check article content for accuracy
- [ ] Verify external links are valid and correct

**Cross-Browser Testing**:
- [ ] Chrome (latest) - full functionality
- [ ] Firefox (latest) - full functionality
- [ ] Safari (latest) - full functionality
- [ ] Edge (latest) - full functionality
- [ ] Safari iOS - mobile experience
- [ ] Chrome Android - mobile experience

**Performance Testing**:
- [ ] Run Lighthouse audit (target 90+ performance)
- [ ] Verify no console errors on production build
- [ ] Test page load times on slow connections (3G throttle)
- [ ] Verify images load progressively
- [ ] Test lazy loading behavior

**Accessibility Testing**:
- [ ] Keyboard-only navigation through all pages
- [ ] Screen reader testing (VoiceOver/NVDA)
- [ ] Color contrast verification
- [ ] Focus state visibility
- [ ] Alt text presence on images
- [ ] Heading hierarchy audit
- [ ] Form label associations

**Full Section-by-Section Review** (verify each major section works correctly):
- [ ] Homepage - hero, stats, product cards, CTAs
- [ ] Wallet Section - hub, Classic OS, MetaMask, hardware, compare, reviews
- [ ] Buy Section - hub, exchanges, instant, P2P, card, bank, ATM, reviews
- [ ] Sell Section - hub, exchanges
- [ ] Apps Section - hub, all categories (DeFi, NFT, Games, Tools, etc.), individual apps
- [ ] Learn Section - hub, all categories, all articles, glossary
- [ ] News Section - hub, articles, categories, tags
- [ ] Markets Section - hub, price pages, converter, calculator
- [ ] Mining Section - hub, pools, hardware, software, profitability, stats, OS
- [ ] Build Section - hub, docs, clients, networks, faucets, tools, grants, API
- [ ] Research Section - hub, reports, network, supply, fees, ecosystem
- [ ] Tools Section - hub, converter, calculator, gas, explorer, verify
- [ ] Community Section - hub, social, events, contribute
- [ ] Directory Section - hub, wallets, exchanges, mining, developers, community
- [ ] Account Section - dashboard, login, register, portfolio, watchlist, settings
- [ ] Static Pages - about, contact, advertise, partners, legal, privacy
- [ ] 404 Page - verify custom 404 displays correctly

**QA Report Generation**:
- [ ] Generate PHASE-7-QA-REPORT.md documenting all manual test results
- [ ] Include tester name, date, and environment details
- [ ] Document each test category with pass/fail status
- [ ] Screenshot evidence for key functionality tests
- [ ] List any issues found and their resolution status
- [ ] Sign-off checklist for production readiness
- [ ] Final due diligence certification statement

**Report Contents**:
```
PHASE-7-QA-REPORT.md
├── Executive Summary
│   ├── Overall test status (Pass/Fail)
│   ├── Test coverage summary
│   ├── Key findings
│   └── AI-generated code quality assessment
├── Test Environment
│   ├── Date/time of testing
│   ├── Tester information
│   ├── Browser versions tested
│   ├── Device types tested
│   └── Git commit hash
├── Test Results by Category
│   ├── Account System: [Pass/Fail] with details
│   ├── API Endpoints: [Pass/Fail] with details
│   ├── Search Functionality: [Pass/Fail] with details
│   ├── Core Features: [Pass/Fail] with details
│   ├── Navigation & Routing: [Pass/Fail] with details
│   ├── Data Accuracy: [Pass/Fail] with details
│   ├── Cross-Browser: [Pass/Fail] with details
│   ├── Performance: [Pass/Fail] with Lighthouse scores
│   └── Accessibility: [Pass/Fail] with details
├── Section-by-Section Review
│   ├── Homepage: [Pass/Fail]
│   ├── Wallet Section: [Pass/Fail]
│   ├── Buy Section: [Pass/Fail]
│   ├── Sell Section: [Pass/Fail]
│   ├── Apps Section: [Pass/Fail]
│   ├── Learn Section: [Pass/Fail]
│   ├── News Section: [Pass/Fail]
│   ├── Markets Section: [Pass/Fail]
│   ├── Mining Section: [Pass/Fail]
│   ├── Build Section: [Pass/Fail]
│   ├── Research Section: [Pass/Fail]
│   ├── Tools Section: [Pass/Fail]
│   ├── Community Section: [Pass/Fail]
│   ├── Directory Section: [Pass/Fail]
│   ├── Account Section: [Pass/Fail]
│   └── Static Pages: [Pass/Fail]
├── Issues Log
│   ├── Critical issues (blocking)
│   ├── Major issues (should fix)
│   ├── Minor issues (nice to fix)
│   └── Resolution status for each
├── Evidence
│   └── Screenshots/recordings folder reference
├── AI Code Generation Assessment
│   ├── Code quality observations
│   ├── Best practices compliance
│   ├── Areas requiring human attention
│   └── Recommendations for future AI-assisted development
└── Certification
    ├── Production readiness statement
    ├── Known limitations
    ├── Human reviewer sign-off
    └── Date and signature
```

---

## Milestone Tracking

### Progress Summary

| Phase | Milestones | Completed | Progress |
|-------|------------|-----------|----------|
| Phase 1 | 7 | 7 | 100% |
| Phase 2 | 5 | 5 | 100% |
| Phase 3 | 10 | 10 | 100% |
| Phase 4 | 12 | 12 | 100% |
| Phase 5 | 7 | 7 | 100% |
| Phase 6 | 12 | 0 | 0% | (Autonomous - Claude builds all scaffolding + automated tests)
| Phase 7 | 10 | 0 | 0% | (Human-only - specific blockers + manual QA)
| **Total** | **63** | **41** | **65%** |

### Current Focus

**Just Completed**: Phase 5 (All milestones 5.1-5.7)

**Next Up**: Phase 6 - Autonomous Scaffolding
Claude Code builds all shells, layouts, components, and sample data:
- 6.1 Sitemap & Technical SEO
- 6.2 UI/UX Code Fixes
- 6.3 Performance & Accessibility
- 6.4 Link Verification
- 6.5 Mining Hardware Affiliate Pages
- 6.6 Classic USD Documentation
- 6.7 Mining Pool Dashboard Scaffolding (full pool UI with sample data)
- 6.8 Merchandise Store Shell
- 6.9 Historical Charts with Sample Data
- 6.10 Referral Infrastructure
- 6.11 Network Health Dashboard (explorer, nodes, security, stats with sample data)
- 6.12 Automated Testing & Report Generation (PHASE-6-TEST-REPORT.md)

**Phase 7** (Human-only blockers):
| Milestone | What Human Must Do |
|-----------|-------------------|
| 7.1 Content Review | Approve all public copy |
| 7.2 Social Accounts | Create Twitter/X, Discord |
| 7.3 Affiliate Signups | Register for referral programs |
| 7.4 Store Launch | Select vendor, create products |
| 7.5 Node Infrastructure | Provision server, sync node |
| 7.6 Historical Data | Point APIs to node, run backfill |
| 7.7 Mining Pool Launch | Set up stratum server, connect to UI |
| 7.8 Product Launches | Update status when ready |
| 7.9 Network Dashboard | Connect to live data sources |
| 7.10 Manual Testing & QA | Test accounts, APIs, search, generate PHASE-7-QA-REPORT.md |

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
