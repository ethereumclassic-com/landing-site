# URL Structure - EthereumClassic.com

> **Purpose**: Complete URL endpoint mapping for EthereumClassic.com
>
> **Last Updated**: January 2026 (Milestone 6.22)
>
> **Total Pages**: 137 page.tsx files | ~87% Complete
>
> **Principle**: All endpoints defined upfront. Features built incrementally. Stub pages for unbuilt sections.
>
> **Model**: Bitcoin.com structure adapted for Ethereum Classic ecosystem.

---

## URL Naming Conventions

- Lowercase, hyphenated slugs
- Descriptive, SEO-friendly paths
- Consistent hierarchy depth
- No trailing slashes in links (Next.js handles both)

---

## Complete URL Map

### Root & Core Pages

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/` | Homepage | Complete | P0 |
| `/about` | About EthereumClassic.com | Complete | P2 |
| `/contact` | Contact form | Complete | P3 |
| `/advertise` | Advertising info | Stub | P3 |
| `/partners` | Partner directory | Stub | P3 |
| `/legal` | Legal/Terms | Complete | P2 |
| `/privacy` | Privacy policy | Complete | P2 |
| `/site-map` | HTML sitemap | Complete | P1 |
| `/network` | Network status dashboard | Complete | P1 |
| `/store` | ETC Hardware Store | Complete | P2 |

---

### Wallet Section

**Primary destination for "Use ETC" users.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/wallet` | Wallet hub (Classic OS featured) | Complete | P0 |
| `/wallet/classic-os` | Classic OS dedicated page | Complete | P0 |
| `/wallet/metamask` | MetaMask setup guide | Complete | P1 |
| `/wallet/hardware` | Hardware wallet guide | Complete | P1 |
| `/wallet/compare` | Wallet comparison table | Complete | P1 |
| `/wallet/reviews` | All wallet reviews | Complete | P2 |
| `/wallet/reviews/[wallet]` | Individual wallet review | Complete | P2 |

**Wallet Reviews (Dynamic):**
```
/wallet/reviews/trust-wallet
/wallet/reviews/exodus
/wallet/reviews/ledger
/wallet/reviews/trezor
/wallet/reviews/coinbase-wallet
```

---

### Buy/Sell Section

**Fiat on-ramps and exchange links for acquiring ETC.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/buy` | Buy ETC hub | Complete | P0 |
| `/buy/exchanges` | Exchange listings | Complete | P1 |
| `/buy/reviews` | Exchange reviews | Complete | P2 |
| `/buy/reviews/[exchange]` | Individual exchange review | Complete | P2 |
| `/buy/instant` | Instant buy options | Stub | P2 |
| `/buy/p2p` | P2P trading | Stub | P2 |
| `/buy/atm` | Crypto ATM locator | Stub | P3 |
| `/buy/card` | Buy with card guide | Stub | P2 |
| `/buy/bank` | Buy with bank guide | Stub | P2 |
| `/sell` | Sell ETC hub | Complete | P2 |
| `/sell/exchanges` | Sell on exchanges | Complete | P2 |

---

### Exchange Reviews

**ETC-supporting exchanges with reviews and comparisons.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/exchanges` | Exchange directory | Complete | P1 |
| `/exchanges/reviews` | All exchange reviews | Complete | P2 |
| `/exchanges/reviews/[exchange]` | Individual review | Complete | P2 |
| `/exchanges/compare` | Comparison tool | Complete | P2 |
| `/exchanges/beginners` | Beginner-friendly exchanges | Complete | P2 |
| `/exchanges/lowest-fees` | Low-fee exchanges | Complete | P2 |
| `/exchanges/most-secure` | Secure exchanges | Complete | P2 |
| `/exchanges/decentralized` | DEXs | Complete | P2 |
| `/exchanges/no-kyc` | No-KYC exchanges | Complete | P2 |
| `/exchanges/us-friendly` | US exchanges | Complete | P2 |
| `/exchanges/staking` | Staking exchanges | Complete | P2 |

**By Feature:**
```
/exchanges/beginners
/exchanges/lowest-fees
/exchanges/most-secure
/exchanges/decentralized
/exchanges/no-kyc
/exchanges/us-friendly
/exchanges/staking
```

**By Region (Future):**
```
/exchanges/united-states
/exchanges/europe
/exchanges/asia
/exchanges/[country]
```

**Individual Exchange Reviews:**
```
/exchanges/reviews/coinbase
/exchanges/reviews/kraken
/exchanges/reviews/binance
/exchanges/reviews/kucoin
/exchanges/reviews/gate-io
/exchanges/reviews/htx
/exchanges/reviews/mexc
/exchanges/reviews/okx
/exchanges/reviews/bybit
/exchanges/reviews/bitfinex
/exchanges/reviews/gemini
/exchanges/reviews/bitstamp
/exchanges/reviews/crypto-com
```

---

### Apps/dApps Directory

**ETC ecosystem applications.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/apps` | Apps directory hub | Complete | P0 |
| `/apps/featured` | Featured apps | Complete | P0 |
| `/apps/defi` | DeFi apps | Complete | P1 |
| `/apps/nft` | NFT platforms | Complete | P2 |
| `/apps/games` | Games/gaming | Complete | P2 |
| `/apps/tools` | Developer tools | Complete | P2 |
| `/apps/infrastructure` | Infrastructure | Complete | P1 |
| `/apps/governance` | Governance/DAOs | Complete | P1 |
| `/apps/payments` | Payment apps | Complete | P2 |
| `/apps/submit` | Submit an app | Complete | P3 |
| `/apps/[app]` | Individual app page | Complete | P2 |

**Individual App Pages:**
```
/apps/etcswap
/apps/classic-usd
/apps/blockscout
/apps/[app-slug]
```

---

### Learn/Education Section

**Comprehensive ETC education center.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/learn` | Learning center hub | Complete | P1 |
| `/learn/basics` | ETC basics | Complete | P1 |
| `/learn/basics/[article]` | Individual basics article | Complete | P2 |
| `/learn/ethereum-classic` | What is ETC? | Complete | P0 |
| `/learn/wallets` | Wallet guides | Complete | P1 |
| `/learn/wallets/[article]` | Individual wallet article | Complete | P2 |
| `/learn/trading` | Trading guides | Complete | P2 |
| `/learn/trading/[article]` | Individual trading article | Complete | P2 |
| `/learn/defi` | DeFi on ETC | Complete | P2 |
| `/learn/defi/[article]` | Individual DeFi article | Complete | P2 |
| `/learn/mining` | Mining guides | Complete | P1 |
| `/learn/mining/[article]` | Individual mining article | Complete | P2 |
| `/learn/staking` | Staking/yield | Complete | P2 |
| `/learn/staking/[article]` | Individual staking article | Complete | P2 |
| `/learn/security` | Security best practices | Complete | P2 |
| `/learn/security/[article]` | Individual security article | Complete | P2 |
| `/learn/on-ramp` | Getting started guide | Complete | P1 |
| `/learn/glossary` | Crypto glossary | Complete | P3 |
| `/learn/[category]` | Dynamic category | Complete | P2 |
| `/learn/[category]/[article]` | Dynamic article | Complete | P2 |

**Individual Articles (Examples):**
```
/learn/what-is-ethereum-classic
/learn/etc-vs-eth
/learn/why-proof-of-work
/learn/how-to-buy-etc
/learn/how-to-store-etc
/learn/how-to-mine-etc
/learn/etc-smart-contracts
/learn/etc-tokenomics
/learn/etc-history
/learn/etc-roadmap
```

**Category Landing Pages:**
```
/learn/basics/
/learn/basics/what-is-blockchain
/learn/basics/what-is-cryptocurrency
/learn/basics/what-is-proof-of-work
/learn/basics/what-are-smart-contracts

/learn/wallets/
/learn/wallets/types-of-wallets
/learn/wallets/how-to-secure-wallet
/learn/wallets/backup-recovery

/learn/mining/
/learn/mining/getting-started
/learn/mining/hardware-guide
/learn/mining/pool-vs-solo
/learn/mining/profitability

/learn/defi/
/learn/defi/what-is-defi
/learn/defi/liquidity-pools
/learn/defi/yield-farming
/learn/defi/risks
```

---

### News Section

**ETC ecosystem news and updates.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/news` | News hub | Complete | P1 |
| `/news/[slug]` | Individual article | Complete | P2 |
| `/news/category/[category]` | Category filter | Complete | P2 |
| `/news/tag/[tag]` | Tag filter | Complete | P2 |
| `/news/feed.xml` | RSS feed | Complete | P1 |

**Categories:**
```
/news/category/ecosystem
/news/category/development
/news/category/mining
/news/category/defi
/news/category/markets
/news/category/community
```

---

### Markets/Price Section

**ETC market data and analytics.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/markets` | Markets overview | Complete | P1 |
| `/markets/price` | Price page within markets | Complete | P1 |
| `/markets/calculator` | Investment calculator | Complete | P2 |
| `/markets/converter` | Price converter | Complete | P2 |
| `/price` | ETC price page | Complete | P1 |
| `/price/[pair]` | Trading pairs (ETC-USD, etc) | Complete | P2 |
| `/converter` | Price converter (alt route) | Complete | P2 |
| `/calculator` | Investment calculator (alt route) | Complete | P2 |

---

### Mining Section

**ETC mining resources (unique to PoW chains).**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/mining` | Mining hub | Complete | P1 |
| `/mining/getting-started` | Beginner guide | Complete | P1 |
| `/mining/pools` | Pool directory | Complete | P1 |
| `/mining/pools/[pool]` | Individual pool | Complete | P2 |
| `/mining/hardware` | Hardware guide | Complete | P2 |
| `/mining/hardware/buy` | Hardware marketplace | Complete | P2 |
| `/mining/software` | Software guide | Complete | P2 |
| `/mining/os` | Mining OS options | Complete | P2 |
| `/mining/profitability` | Profitability calculator | Complete | P2 |
| `/mining/stats` | Network hashrate stats | Complete | P2 |

**Pool Pages (by hashrate relevance):**

| Pool | Hashrate | Share | Priority |
|------|----------|-------|----------|
| F2Pool | ~79 TH/s | 41% | P1 |
| 2Miners | ~63 TH/s | 33% | P1 |
| K1Pool | ~25 TH/s | 13% | P1 |
| GTPool | ~11 TH/s | 5% | P2 |
| EMCD | ~7 TH/s | 4% | P2 |
| Kryptex | ~2.5 TH/s | 1% | P3 |
| ViaBTC | ~2 TH/s | 1% | P3 |
| AntPool | ~1.8 TH/s | 1% | P3 |

```
/mining/pools/f2pool
/mining/pools/2miners
/mining/pools/k1pool
/mining/pools/gtpool
/mining/pools/emcd
```

**Future: EthereumClassic.com Mining Pool**

Reserved endpoint for future in-house mining pool:
```
/mining/pools/ethereumclassic-com
```

This will integrate with Fukuii development and serve as an ETChash mining hub.
Related projects: FairWins, ClearPath, TokenMint, Prediction DAO research.

---

### Build/Developer Section

**Resources for building on ETC.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/build` | Developer hub | Complete | P1 |
| `/build/getting-started` | Quick start | Complete | P1 |
| `/build/docs` | Documentation links | Complete | P1 |
| `/build/tools` | Developer tools | Complete | P2 |
| `/build/api` | API documentation | Complete | P2 |
| `/build/clients` | Node clients | Complete | P1 |
| `/build/clients/[client]` | Individual client page | Complete | P2 |
| `/build/networks` | Network info | Complete | P2 |
| `/build/faucets` | Testnet faucets | Complete | P2 |
| `/build/grants` | Grants/funding | Complete | P3 |

---

### Research Section

**Market research and ecosystem reports.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/research` | Research hub | Complete | P2 |
| `/research/reports` | All reports | Complete | P2 |
| `/research/reports/[slug]` | Individual report | Complete | P3 |
| `/research/network` | Network analysis | Complete | P2 |
| `/research/ecosystem` | Ecosystem reports | Complete | P3 |
| `/research/fees` | Fee market analysis | Complete | P2 |
| `/research/history` | ETC history | Complete | P2 |
| `/research/supply` | Supply tracker & Fifthening | Complete | P2 |

---

### Tools Section

**Utility tools for ETC users.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/tools` | Tools hub | Complete | P2 |
| `/tools/converter` | Price converter | Stub | P2 |
| `/tools/calculator` | Investment calc | Complete | P2 |
| `/tools/gas` | Gas tracker (live) | Complete | P2 |
| `/tools/explorer` | Block explorer links | Complete | P2 |
| `/tools/verify` | Contract verifier | Stub | P3 |

---

### Directory Section

**Ecosystem directory listings.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/directory` | Directory hub | Complete | P2 |
| `/directory/wallets` | Wallet directory | Complete | P1 |
| `/directory/exchanges` | Exchange directory | Complete | P1 |
| `/directory/mining` | Mining directory | Complete | P2 |
| `/directory/developers` | Dev resources | Complete | P2 |
| `/directory/community` | Community links | Complete | P3 |

---

### Community Section

**Community resources and links.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/community` | Community hub | Complete | P2 |
| `/community/social` | Social media links | Complete | P2 |
| `/community/events` | Events calendar | Complete | P3 |
| `/community/contribute` | How to contribute | Complete | P3 |

---

### Account/User Section (Future)

**User accounts for personalization.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/account` | Account dashboard | Stub | P3 |
| `/account/login` | Login | Stub | P3 |
| `/account/register` | Register | Stub | P3 |
| `/account/settings` | Settings | Stub | P3 |
| `/account/watchlist` | Price watchlist | Stub | P3 |
| `/account/portfolio` | Portfolio tracker | Stub | P3 |

---

### Additional Pages

**Miscellaneous pages.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/pool` | ETC Mining Pool (Future) | Stub | P3 |
| `/earn` | Earning ETC | Stub | P3 |
| `/referral` | Referral program | Stub | P3 |
| `/referral/dashboard` | Referral dashboard | Stub | P3 |
| `/content-editor` | Content management | Stub | P3 |

---

### API Section (Future)

**API access for developers.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/api` | API documentation | Stub | P3 |
| `/api/docs` | API reference | Stub | P3 |
| `/api/pricing` | API pricing | Stub | P3 |

---

## Priority Legend

| Priority | Meaning | Timeline |
|----------|---------|----------|
| **P0** | Critical - Must have for launch | Phase 1 |
| **P1** | Important - Core functionality | Phase 1-2 |
| **P2** | Standard - Expected features | Phase 2-3 |
| **P3** | Nice-to-have - Future enhancement | Phase 3+ |

---

## Status Legend

| Status | Meaning |
|--------|---------|
| **Complete** | Full page with content and functionality |
| **Stub** | Placeholder page with "Coming Soon" message |

> **Note**: Status updated January 2026 as part of Milestone 6.22 (URL-STRUCTURE.md Documentation Update)

---

## Stub Page Template

All stub pages should include:
1. Page title
2. Brief description of what's coming
3. Newsletter signup CTA
4. Link back to homepage or related built section
5. Consistent navigation

---

## URL Count Summary

**Updated: January 2026** - Reflects actual page count from `app/` directory (137 page.tsx files)

| Section | URLs | Complete | Stub | Notes |
|---------|------|----------|------|-------|
| Core | 10 | 8 | 2 | +network, +store |
| Wallet | 7 | 7 | 0 | All complete |
| Buy/Sell | 11 | 6 | 5 | Reviews complete |
| Exchanges | 14 | 14 | 0 | All feature pages complete |
| Apps | 11 | 11 | 0 | All complete |
| Learn | 20+ | 20+ | 0 | Dynamic routes, all complete |
| News | 5 | 5 | 0 | +RSS feed |
| Markets | 8 | 8 | 0 | All complete |
| Mining | 10 | 10 | 0 | All complete |
| Build | 10 | 10 | 0 | All complete |
| Research | 8 | 8 | 0 | All complete |
| Tools | 6 | 4 | 2 | Converter, verify stub |
| Directory | 6 | 6 | 0 | All complete |
| Community | 4 | 4 | 0 | All complete |
| Account | 6 | 0 | 6 | Future feature |
| Misc | 5 | 0 | 5 | Pool, earn, referral |
| **TOTAL** | **137** | **~120** | **~17** | **87% Complete** |

---

## Next.js Route Structure

```
app/
├── page.tsx                    # /
├── about/page.tsx              # /about
├── contact/page.tsx            # /contact
├── sitemap/page.tsx            # /sitemap
├── wallet/
│   ├── page.tsx                # /wallet
│   ├── classic-os/page.tsx     # /wallet/classic-os
│   ├── compare/page.tsx        # /wallet/compare
│   └── reviews/
│       ├── page.tsx            # /wallet/reviews
│       └── [wallet]/page.tsx   # /wallet/reviews/[wallet]
├── buy/
│   ├── page.tsx                # /buy
│   ├── exchanges/page.tsx      # /buy/exchanges
│   └── ...
├── exchanges/
│   ├── page.tsx                # /exchanges
│   ├── reviews/
│   │   ├── page.tsx            # /exchanges/reviews
│   │   └── [exchange]/page.tsx # /exchanges/reviews/[exchange]
│   └── [feature]/page.tsx      # /exchanges/[feature]
├── apps/
│   ├── page.tsx                # /apps
│   ├── featured/page.tsx       # /apps/featured
│   ├── defi/page.tsx           # /apps/defi
│   └── [app]/page.tsx          # /apps/[app]
├── learn/
│   ├── page.tsx                # /learn
│   ├── basics/
│   │   ├── page.tsx            # /learn/basics
│   │   └── [article]/page.tsx  # /learn/basics/[article]
│   └── [category]/
│       ├── page.tsx            # /learn/[category]
│       └── [article]/page.tsx  # /learn/[category]/[article]
├── news/
│   ├── page.tsx                # /news
│   ├── [slug]/page.tsx         # /news/[slug]
│   └── category/
│       └── [category]/page.tsx # /news/category/[category]
├── markets/page.tsx            # /markets
├── price/
│   ├── page.tsx                # /price
│   └── [pair]/page.tsx         # /price/[pair]
├── mining/
│   ├── page.tsx                # /mining
│   ├── pools/
│   │   ├── page.tsx            # /mining/pools
│   │   └── [pool]/page.tsx     # /mining/pools/[pool]
│   └── ...
├── build/
│   ├── page.tsx                # /build
│   ├── clients/
│   │   ├── page.tsx            # /build/clients
│   │   └── [client]/page.tsx   # /build/clients/[client]
│   └── ...
├── research/page.tsx           # /research
├── tools/page.tsx              # /tools
├── directory/page.tsx          # /directory
├── community/page.tsx          # /community
└── account/page.tsx            # /account
```

---

## SEO Considerations

1. **Title Pattern**: `{Page Title} | Ethereum Classic`
2. **Description**: Unique per page, action-oriented
3. **Canonical URLs**: Self-referencing
4. **Structured Data**: JSON-LD for articles, products, FAQs
5. **Sitemap**: Auto-generated from routes
6. **robots.txt**: Allow all, specific disallows for account pages
