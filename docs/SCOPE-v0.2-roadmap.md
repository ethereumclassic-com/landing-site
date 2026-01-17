# ethereumclassic.com v0.2 — Multi-Section Consumer Platform (Roadmap)

## Strategic Vision

**Transform EthereumClassic.com from a protocol explainer into a consumer product platform** modeled after Bitcoin.com.

### Bitcoin.com Model

Roger Ver (Bitcoin.com founder) advised positioning EthereumClassic.com as the **commercial/consumer portal** for Ethereum Classic, similar to how Bitcoin.com relates to Bitcoin.org:

- **EthereumClassic.org** = Open source project, protocol docs, developer resources (community-run)
- **EthereumClassic.com** = Consumer gateway, product suite, revenue generation (THIS SITE)

**Key insight:** Bitcoin.com became the primary entry point for Bitcoin adoption by focusing on products (Wallet, Buy, Exchange) rather than protocol documentation.

---

## Current State (v0.1)

**What we have:**
- Single landing page
- Five sections: Hero, Why ETC, Paths (Use/Earn/Build), Audience, Footer
- Protocol explainer focus
- Routes to: Classic OS, ETCswap, mining resources

**Gap:** Reads like a protocol site, not a product platform.

**Success metric:** Downstream clicks (router model)

---

## Target State (v0.2+)

**Transform into:** Multi-section consumer platform with clear product funnels

### Primary Navigation (Target)

```
[ETC Logo] News | Wallet | Apps | Buy | Learn | Build | [Launch App]
```

### Core Sections to Add

| Section | Purpose | Primary Product | Revenue Model |
|---------|---------|-----------------|---------------|
| **Wallet** | Self-custody wallet hub | Classic OS | Wallet adoption |
| **Buy/Sell** | Fiat on-ramps, exchange links | Brale + exchanges | Affiliate fees |
| **Apps** | Curated dApp directory | ETCswap, ClassicUSD, Olympia DAO | Ecosystem growth |
| **News** | ETC ecosystem blog/news | Educational content | Engagement, awareness |
| **Learn** | Education hub | Guides, tutorials | Onboarding funnel |
| **Markets** | Price, charts, network stats | Real-time data | Engagement, legitimacy |
| **Build** | Developer resources | Links to ethereumclassic.org | Developer onboarding |

---

## Homepage Redesign (v0.2)

### New Structure

**1. Hero (Action-Oriented)**
```
"The Home of Ethereum Classic"
Tagline: The only mature Proof-of-Work blockchain with smart contracts

[Get Wallet] [Buy ETC]
```

**2. Social Proof Strip**
- Years running (2015 - present)
- Total transactions
- Active wallets
- TVL in DeFi

**3. Product Cards (4 Primary)**
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   Wallet    │     Buy     │    Apps     │   Learn     │
│  Classic OS │   Get ETC   │  ETCswap    │   Guides    │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**4. Trending News**
- 3-4 recent ecosystem articles
- Link to full News section

**5. Ecosystem Stats Dashboard**
- Network hashrate
- Daily transactions
- Active addresses
- DeFi TVL

**6. Product Suite Feature**
Detailed cards for:
- Classic OS (Complete economic operating system)
- ETCswap (DEX infrastructure)
- ClassicUSD (ETC-native stablecoin)
- Olympia DAO (Governance)

**7. Trust Signals**
- Security track record (no successful 51% attacks since 2020)
- PoW benefits (immutability, censorship resistance)
- EVM compatibility (Ethereum tooling works)
- Longevity (9+ years continuous operation)

**8. Call to Action**
- "Start using Ethereum Classic today"
- [Download Wallet] [Buy ETC] [Browse Apps]

---

## Detailed Section Specs

### 1. Wallet Page

**URL:** `/wallet` or `wallet.ethereumclassic.com`

**Purpose:** Drive Classic OS adoption

**Content:**
- Hero: "Your gateway to Ethereum Classic"
- Classic OS features:
  - Wallet (self-custody)
  - Portfolio tracking
  - DeFi access (ETCswap, ClassicUSD)
  - Mining integration
- Download CTAs (web app, future mobile)
- Trust signals (non-custodial, open source)
- Comparison: Why Classic OS vs MetaMask/other wallets
- Screenshots/demo

**Success metric:** Classic OS activations

---

### 2. Buy/Sell Page

**URL:** `/buy`

**Purpose:** Fiat on-ramps, exchange links

**Content:**
- Fiat on-ramp via Brale (ACH, USDC)
- Exchange listings (with affiliate links):
  - Coinbase
  - Binance
  - OKX
  - Kraken
  - Regional exchanges
- P2P options
- Mining (create ETC)
- Tutorial: How to buy your first ETC

**Revenue model:** Affiliate fees, Brale partnership

---

### 3. Apps Directory

**URL:** `/apps`

**Purpose:** Curated ecosystem dApps

**Categories:**
- **DeFi:**
  - ETCswap (V2/V3/Launchpad)
  - ClassicUSD (Stablecoin)
  - Lending protocols (future)
- **Infrastructure:**
  - Block explorers
  - RPC providers
  - Clients (Fukuii, Core-Geth, Besu)
- **Governance:**
  - Olympia DAO
- **Tools:**
  - Wallet apps
  - Developer tools
  - Mining software

**Each app gets:**
- Logo, description, category
- Link to product
- "Featured" badge for vertically integrated products
- User ratings/reviews (future)

---

### 4. News Section

**URL:** `/news` or `news.ethereumclassic.com`

**Purpose:** Engagement, ecosystem awareness

**Content types:**
- Product announcements (Classic OS updates, ETCswap features)
- Ecosystem growth (new dApps, integrations)
- Network upgrades
- Mining updates
- Industry positioning (ETC vs other chains)
- Tutorial/how-to articles

**Publishing cadence:** 1-2 posts per week

**Revenue model:** Engagement (keeps users returning), potential ads (future)

---

### 5. Learn Section

**URL:** `/learn`

**Purpose:** Education, onboarding funnel

**Content structure:**

**Beginner:**
- What is Ethereum Classic?
- What is Proof-of-Work?
- Why ETC instead of ETH?
- How to buy your first ETC
- How to set up a wallet
- How to use ETCswap

**Intermediate:**
- Understanding DeFi on ETC
- Liquidity provision guide
- ClassicUSD stablecoin guide
- Mining ETC guide
- Network security

**Advanced:**
- ETC protocol architecture
- Smart contract development
- Running an ETC node
- Mining pool setup
- Governance participation

**Format:** Step-by-step guides, video tutorials, infographics

---

### 6. Markets Page

**URL:** `/markets`

**Purpose:** Price data, network stats, legitimacy

**Content:**
- ETC price (USD, BTC pairs)
- 24h volume, market cap, circulating supply
- Price charts (1D, 1W, 1M, 1Y, All)
- Network stats:
  - Hashrate
  - Block time
  - Difficulty
  - Daily transactions
  - Active addresses
- DeFi stats:
  - TVL
  - DEX volume (ETCswap)
  - ClassicUSD circulation
- Exchange listings

**Data sources:** CoinGecko API, ETC RPC nodes, ETCswap subgraphs

---

### 7. Build Section

**URL:** `/build`

**Purpose:** Developer onboarding

**Content:**
- Links to ethereumclassic.org (protocol docs)
- Client downloads (Fukuii, Core-Geth, Besu)
- RPC endpoints
- Block explorers
- Development tools (Remix, Hardhat, Foundry)
- Smart contract examples
- Testnet faucets
- Grant programs (if available)
- "Why build on ETC" positioning

**Success metric:** Developer engagement, contract deployments

---

## Product Suite Integration

### Classic OS
- **Homepage:** Feature card, hero CTA
- **Wallet page:** Primary product
- **Apps directory:** Featured listing
- **Buy page:** "After buying, store in Classic OS"

### ETCswap
- **Homepage:** Feature card
- **Apps directory:** Featured DeFi listing
- **Buy page:** "Trade on ETCswap"
- **Markets page:** DEX volume stats

### ClassicUSD
- **Homepage:** Feature card
- **Apps directory:** Featured stablecoin listing
- **Buy page:** Fiat → USDC → ClassicUSD pathway
- **Learn section:** ClassicUSD guide

### Olympia DAO
- **Homepage:** Feature card (governance)
- **Apps directory:** Featured governance listing
- **Learn section:** Governance guide

---

## Technical Considerations

### Stack
- Next.js (current)
- Tailwind CSS (current)
- Framer Motion (current)
- Markdown/MDX for content (News, Learn)
- CoinGecko API for price data
- ETC RPC for network stats
- ETCswap subgraphs for DeFi data

### Subdomain Structure (Optional)
- `ethereumclassic.com` - Main site
- `news.ethereumclassic.com` - News section (optional)
- `wallet.ethereumclassic.com` - Redirects to Classic OS
- `apps.ethereumclassic.com` - Apps directory (optional)

### Mobile
- Mobile-first responsive design
- Progressive Web App (PWA) support
- Fast load times (<3s)

---

## Implementation Priority

### Phase 1: Foundation (v0.2)
1. **Navigation restructure** - Add primary nav sections
2. **Homepage redesign** - Hero, product cards, stats
3. **Wallet page** - Classic OS promotion
4. **Apps directory** - Curated ecosystem apps (ETCswap, ClassicUSD, Olympia DAO)

### Phase 2: Content (v0.3)
5. **Learn section** - Basic education content (5-10 guides)
6. **News section** - Blog setup, first 3-5 posts
7. **Markets page** - Price, stats, charts

### Phase 3: Growth (v0.4)
8. **Buy page** - Fiat on-ramps, exchange links
9. **Build section** - Developer resources
10. **Enhanced Apps directory** - User reviews, more dApps

### Phase 4: Scale (v0.5+)
11. **User accounts** (optional) - Saved preferences, bookmarks
12. **Email newsletter** - Weekly ecosystem updates
13. **Events calendar** - Ecosystem events, network upgrades
14. **Multilingual support** - Key languages for global reach

---

## Success Metrics Evolution

### v0.1 (Current)
- **Primary:** Downstream clicks
- **Secondary:** Time on site, bounce rate

### v0.2+ (Target)
- **Wallet adoption:** Classic OS downloads/activations
- **DEX volume:** ETCswap trades from EthereumClassic.com referrals
- **Stablecoin adoption:** ClassicUSD users
- **Engagement:** Pages per session, return visitors
- **Conversion funnel:** Visitor → Wallet user → Active DeFi user
- **Content performance:** News article views, Learn guide completions

---

## Revenue Model

### Current (v0.1)
- No direct revenue
- Ecosystem value (drives adoption of vertically integrated products)

### Target (v0.2+)
1. **Product adoption** - Classic OS, ETCswap, ClassicUSD (primary)
2. **Affiliate fees** - Exchange listings, wallet referrals
3. **Brale partnership** - Fiat on-ramp integration
4. **Future:** Display ads (non-intrusive), sponsored listings

---

## Competitive Positioning

### Bitcoin.com (Primary Reference)
- **Similarities:** Wallet-first, product suite, news section, learning center
- **Differentiation:** DeFi focus (ETCswap, ClassicUSD), Mining OS integration, PoW narrative

### Ethereum.org
- **Contrast:** They're protocol docs, we're consumer products
- **Learn from:** Clean use-case cards, ecosystem stats display

### Solana.com
- **Learn from:** Institutional positioning, real-time stats, video content
- **Differentiation:** PoW security model, immutability focus

---

## Strategic Context

### Roger Ver Advisory
Roger Ver (Bitcoin.com founder) advised:
- Position as consumer gateway, not community project
- Build solo with no external investment (maintain control)
- Focus on products that drive adoption
- Revenue model through product suite, not ads/donations

**Note:** Roger Ver was arrested in Europe on US tax charges (2024) and communication has been limited, but the vision remains aligned with his original guidance.

### .com vs .org Distinction
- **ethereumclassic.org** - Community-run, protocol documentation, ECIP process
- **ethereumclassic.com** - Commercial entity, consumer products, revenue generation

**Advantage:** Clear separation allows EthereumClassic.com to optimize for adoption and revenue without conflicting with community governance.

---

## Risk Mitigation

### Scope Creep
- Phase implementation prevents over-building
- Each phase has clear success metrics
- v0.1 remains available as fallback

### Content Maintenance
- News: 1-2 posts/week manageable
- Learn: Start with 5-10 core guides
- Apps directory: Manual curation initially

### Technical Complexity
- Start with static pages (News, Learn)
- Add dynamic data (Markets) in Phase 2
- Progressive enhancement approach

---

## Open Questions

1. **Subdomain strategy:** Single domain vs subdomains for sections?
2. **Content team:** Solo (architect) vs hire writers?
3. **App directory moderation:** How to handle low-quality dApp submissions?
4. **User accounts:** Required for v0.2 or defer to later phase?
5. **Mobile app:** Web-only initially, or plan native app?

---

## Definition of Done (v0.2)

Site is ready when:
- ✅ Navigation includes: News, Wallet, Apps, Buy, Learn, Build
- ✅ Homepage redesigned with product cards and stats
- ✅ Wallet page promotes Classic OS with clear CTAs
- ✅ Apps directory lists ETCswap, ClassicUSD, Olympia DAO
- ✅ Learn section has 5+ beginner guides
- ✅ News section has blog infrastructure and 3+ posts
- ✅ All pages are mobile-responsive
- ✅ Load time <3s on 4G connection
- ✅ Analytics tracking conversion funnel

---

## Change Control

This roadmap represents the vision for v0.2+.

**Current status:** v0.1 is locked (see `SCOPE-v0.1.md`).

**To begin v0.2 implementation:**
1. Archive v0.1 scope
2. Create detailed specs for Phase 1 items
3. Update agent instructions with v0.2 context
4. Begin implementation with navigation restructure

Any changes to this roadmap require architect approval.
