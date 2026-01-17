# Bitcoin.com Research Analysis

> **Purpose**: Deep analysis of Bitcoin.com's site structure, features, and components to inform the EthereumClassic.com v0.2 rebuild.
>
> **Date**: January 2026
>
> **Goal**: Build the ETC equivalent of Bitcoin.com's full product suite.

---

## Executive Summary

Bitcoin.com operates as a comprehensive cryptocurrency portal with multiple revenue streams:
- **Content/Education**: 1,400+ articles across 25 languages
- **Affiliate Marketing**: Exchange reviews, gambling partnerships
- **Products**: Wallet, buy/sell services, DEX
- **Data**: Price feeds, market data, research reports

EthereumClassic.com will mirror this structure adapted for ETC, with all URL endpoints established upfront for phased development.

---

## Site Structure Analysis

### Sitemap Overview

Bitcoin.com uses **33 XML sitemaps** organized into 4 categories:

| Category | Sitemaps | Content Focus |
|----------|----------|---------------|
| Main | 7 | Core pages, tools, directory |
| Get Started | 10 | Educational content (1,400+ URLs) |
| Exchanges | 5 | Exchange reviews/comparisons |
| Gambling | 11 | Casino/betting affiliate content |

### Primary Navigation Structure

```
[Logo] News | Wallet | Games | Buy | Learn | Research | Reviews | [Launch App] [Login]
```

**Key Sections:**
1. **News** - 24/7 crypto news (subdomain: news.bitcoin.com)
2. **Wallet** - Wallet comparison/reviews + own wallet promotion
3. **Games** - Gambling affiliate section (major revenue)
4. **Buy** - Fiat on-ramp (subdomain: buy.bitcoin.com)
5. **Learn** - Education center with categorical tabs
6. **Research** - Market reports, analysis, whitepapers
7. **Reviews** - Exchanges, wallets, cards, services

---

## Section-by-Section Analysis

### 1. Homepage

**Structure:**
- Hero with primary value proposition
- Stats strip (social proof)
- Product cards (4 main products)
- Trending news carousel
- Feature sections (trading, wallet, games)
- Bitcoin education module with live price
- User testimonials
- Directory listings
- FAQ section
- Final CTA

**Design Patterns:**
- Dark theme with orange (#FF9500) accents
- Card-based modular components
- Horizontal scrolling carousels
- Animated gradient backgrounds
- Mobile-first responsive grid

### 2. Wallet Section

**URL**: `/wallet` (redirects to reviews/comparison page)

**Content:**
- Wallet comparison table with rankings
- Featured wallets with ratings
- Supported assets icons
- Security messaging (non-custodial emphasis)
- Download CTAs
- Mobile app promotion

**ETC Equivalent**: Classic OS promotion + third-party wallet reviews

### 3. Buy/Sell Section

**URL**: `/buy-bitcoin` → redirects to `buy.bitcoin.com`

**Features:**
- 5-step purchase flow visualization
- Payment methods (card, bank, Apple/Google Pay)
- Trust signals and security messaging
- Geographic availability
- Multi-crypto support

**ETC Equivalent**: ETC purchase guide, exchange links, fiat on-ramps

### 4. Learn/Education Section

**URL**: `/get-started`

**Structure:**
- Category tabs: Bitcoin, Ethereum, Altcoins, Basics, Academy, Wallets, Trading, Tax
- 70+ guides in main section
- Progressive difficulty (beginner → advanced)
- Consistent article card format
- Newsletter signup integration

**Article Format:**
- Title (question format or descriptive)
- Brief description (1-2 sentences)
- Custom SVG icon
- "Learn more" CTA

**ETC Equivalent**: Full ETC education center with categories

### 5. Research Section

**URL**: `/research`

**Content Types:**
- Market analysis reports
- Educational deep-dives
- Historical analysis
- Year-end reviews
- Macro research
- Price forecasting

**Format:**
- Grid layout (3 columns)
- Thumbnail covers
- Publication dates
- Brief descriptions

**ETC Equivalent**: ETC market research, network analysis, ecosystem reports

### 6. Exchange Reviews

**URL**: `/exchanges/`

**Organization:**
- By cryptocurrency (Bitcoin, Ethereum, Solana, etc.)
- By country (50+ countries)
- By feature (fees, security, beginners, anonymous)
- By trading type (futures, margin, copy trading, P2P)

**Review Format:**
- Ranking table
- Supported crypto icons
- Brief description
- Learn More / Explore CTAs

**ETC Equivalent**: Exchanges supporting ETC, categorized similarly

### 7. Directory Section

**URL**: `/directory/`

**Categories:**
- Wallets
- Cards
- Mining
- Conferences
- Projects

**ETC Equivalent**: ETC ecosystem directory

### 8. Tools Section

**URL**: `/tools/`, `/calculator/`, `/converter/`

**Features:**
- Price converters (15+ pairs)
- Investment calculators
- ATM locator
- Full node info

**ETC Equivalent**: ETC tools, calculators, network stats

### 9. News Section

**URL**: `news.bitcoin.com` (subdomain)

**Features:**
- 24/7 crypto news feed
- Category filtering
- Author attribution
- Related content
- Newsletter integration

**ETC Equivalent**: ETC news aggregator or blog

### 10. Gambling Section (Revenue Driver)

**URL**: `/gambling/`, `/casino/`, `/betting/`

**Scale**: 11 sitemaps (largest section)

**Categories:**
- Casino reviews (by crypto, feature, bonus type)
- Sports betting (by sport, event, region)
- Game guides (slots, poker, blackjack)
- Platform reviews

**ETC Equivalent**: TBD - May adapt to ETC gaming/prediction markets or omit

---

## Geographic & Language Coverage

### Regional Pages
- Country-specific exchange guides
- ATM locators (500+ US cities)
- Regional compliance info

### Language Support
25 languages: ar, bn, cs, de, es, fa, fr, he, hr, hu, id, it, ja, ko, nl, pl, pt, ro, ru, sk, th, tr, uk, vi, zh

**ETC Equivalent**: Start English-only, add i18n infrastructure for future

---

## Design System Analysis

### Color Palette
- **Primary**: Black (#000000), Dark (#0B0F14)
- **Accent**: Orange (#FF9500)
- **Secondary**: White, grays
- **Accent Blues**: For links and highlights

### Typography
- **Display**: Elza Condensed
- **Body**: Satoshi Variable Medium
- **Monospace**: For data/code

### Component Patterns
- Card-based layouts
- Horizontal carousels
- Comparison tables
- Stats strips
- Hero sections with gradient backgrounds
- Floating CTAs
- Mobile-first responsive design

---

## Revenue Model Analysis

### Bitcoin.com Revenue Streams

1. **Affiliate Marketing** (Primary)
   - Exchange referral links
   - Gambling partnerships
   - Wallet recommendations
   - Card/service reviews

2. **Products**
   - Bitcoin.com Wallet
   - Buy/Sell services (fees)
   - Verse DEX

3. **Advertising**
   - Sponsored content
   - Display ads
   - Podcast sponsorships

4. **Data/Research**
   - Premium reports
   - API access

### ETC Equivalent Revenue Model

1. **Affiliate Marketing**
   - Exchange referrals (ETC pairs)
   - Wallet recommendations
   - Mining pool referrals

2. **Products**
   - Classic OS (free, drives ecosystem)
   - ETCswap (protocol fees)
   - ClassicUSD on-ramp partnerships

3. **Advertising**
   - ETC ecosystem project promotions
   - Sponsored listings in Apps directory

---

## Key Takeaways for ETC Implementation

### Must-Have Features
1. Comprehensive navigation with all sections
2. Strong homepage with product cards and stats
3. Education center with categorized content
4. Exchange/wallet review system
5. Tools and calculators
6. Mobile-first responsive design

### Adapt for ETC
1. Mining section (ETC is PoW)
2. Smart contract/dApp focus
3. Classic OS as primary wallet
4. ETCswap as primary DEX
5. ETC-specific network stats

### Consider Omitting/Deferring
1. Gambling section (unless ETC gaming ecosystem grows)
2. 25-language support (start English)
3. Complex affiliate tracking (Phase 2+)

### Technical Requirements
1. Static site with dynamic data fetching
2. SEO-optimized URL structure
3. Fast load times (<3s)
4. Component library for consistency
5. Analytics integration
6. i18n infrastructure (for future)

---

## Appendix: Complete URL Map (Bitcoin.com)

### Core Pages
```
/
/about-us/
/contact-us/
/advertise/
/jobs/
/partners/
/legal/
/sitemap/
```

### Products
```
/wallet/
/buy/
/sell/
/app/
/card/
/atm/
```

### Learn
```
/get-started/
/get-started/bitcoin/
/get-started/ethereum/
/get-started/altcoins/
/get-started/basics/
/get-started/academy/
/get-started/wallets/
/get-started/trading/
/get-started/tax/
```

### Reviews
```
/exchanges/
/exchanges/reviews/[exchange]/
/exchanges/[crypto]/
/exchanges/[country]/
/exchanges/[feature]/
/directory/wallets/
/directory/cards/
```

### Data
```
/price/
/price/[crypto]/
/converter/
/calculator/
/research/
```

### News
```
news.bitcoin.com/
news.bitcoin.com/[category]/
news.bitcoin.com/[article]/
```

### Tools
```
/tools/
/calculator/bitcoin/
/converter/bitcoin-usd/
/full-nodes/
```

### Gambling (if applicable)
```
/gambling/
/casino/
/betting/
/games/
```

---

---

## Content Sourcing: EthereumClassic.org

### Overview

The community-run ethereumclassic.org website contains substantial content that can be adapted for EthereumClassic.com. This is open source content that provides a foundation for the Learn section and other educational materials.

**Source:** https://ethereumclassic.org
**Repository:** https://github.com/ethereumclassic/ethereumclassic.github.io

### Content Available

- What is Ethereum Classic?
- Why Classic? (philosophy, principles)
- Knowledge base articles
- FAQs
- Mining guides
- Development resources
- Ecosystem listings (apps, services, wallets)
- Network information
- Historical context

### Content Review Requirements (CRITICAL)

All content lifted from ethereumclassic.org **MUST be reviewed** for:

| Issue | Action |
|-------|--------|
| **Dated information** | Update or remove |
| **Scam projects/apps** | Remove entirely |
| **Dead/abandoned projects** | Remove or mark as inactive |
| **Outdated technical info** | Update to current specs |
| **Obsolete tools/services** | Remove |
| **Biased/opinionated content** | Neutralize or remove |
| **Fork debates/history wars** | Remove (forward-looking policy) |
| **Governance/ECIP content** | Remove (not for this site) |
| **Inaccurate claims** | Fact-check and correct |

### Review Process

1. **Extract** - Pull relevant content from ethereumclassic.org
2. **Audit** - Check against review requirements above
3. **Verify** - Confirm technical accuracy
4. **Adapt** - Rewrite for EthereumClassic.com tone (forward-looking, action-oriented)
5. **Approve** - Architect sign-off before publishing

### Content Categories to Source

**High Value (likely usable with review):**
- Basic "What is ETC" explanations
- Wallet setup guides
- Mining fundamentals
- Network parameters
- EVM compatibility info

**Medium Value (needs significant review):**
- Ecosystem listings (many may be dead/scams)
- Development resources (may be outdated)
- Historical articles

**Low Value (likely skip or heavily rewrite):**
- Philosophy/ideology content
- Fork history
- Governance discussions
- Opinion pieces

### Integration Timeline

- **Phase 2**: Basic Learn content (What is ETC, basics)
- **Phase 3**: Mining guides, wallet guides
- **Phase 4**: Full article expansion

---

## Next Steps

Documentation complete. Proceed to v0.2 development.
