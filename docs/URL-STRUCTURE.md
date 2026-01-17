# URL Structure - EthereumClassic.com

> **Purpose**: Complete URL endpoint mapping for EthereumClassic.com v0.2
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
| `/` | Homepage | Build | P0 |
| `/about` | About EthereumClassic.com | Stub | P2 |
| `/contact` | Contact form | Stub | P3 |
| `/advertise` | Advertising info | Stub | P3 |
| `/partners` | Partner directory | Stub | P3 |
| `/legal` | Legal/Terms | Stub | P2 |
| `/privacy` | Privacy policy | Stub | P2 |
| `/sitemap` | HTML sitemap | Build | P1 |

---

### Wallet Section

**Primary destination for "Use ETC" users.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/wallet` | Wallet hub (Classic OS featured) | Build | P0 |
| `/wallet/classic-os` | Classic OS dedicated page | Build | P0 |
| `/wallet/metamask` | MetaMask setup guide | Build | P1 |
| `/wallet/hardware` | Hardware wallet guide | Build | P1 |
| `/wallet/compare` | Wallet comparison table | Build | P1 |
| `/wallet/reviews` | All wallet reviews | Stub | P2 |
| `/wallet/reviews/[wallet]` | Individual wallet review | Stub | P2 |

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
| `/buy` | Buy ETC hub | Build | P0 |
| `/buy/exchanges` | Exchange listings | Build | P1 |
| `/buy/instant` | Instant buy options | Stub | P2 |
| `/buy/p2p` | P2P trading | Stub | P2 |
| `/buy/atm` | Crypto ATM locator | Stub | P3 |
| `/buy/card` | Buy with card guide | Stub | P2 |
| `/buy/bank` | Buy with bank guide | Stub | P2 |
| `/sell` | Sell ETC hub | Stub | P2 |
| `/sell/exchanges` | Sell on exchanges | Stub | P2 |

---

### Exchange Reviews

**ETC-supporting exchanges with reviews and comparisons.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/exchanges` | Exchange directory | Build | P1 |
| `/exchanges/reviews` | All exchange reviews | Stub | P2 |
| `/exchanges/reviews/[exchange]` | Individual review | Stub | P2 |
| `/exchanges/compare` | Comparison tool | Stub | P2 |

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
| `/apps` | Apps directory hub | Build | P0 |
| `/apps/featured` | Featured apps | Build | P0 |
| `/apps/defi` | DeFi apps | Build | P1 |
| `/apps/nft` | NFT platforms | Stub | P2 |
| `/apps/games` | Games/gaming | Stub | P2 |
| `/apps/tools` | Developer tools | Stub | P2 |
| `/apps/infrastructure` | Infrastructure | Build | P1 |
| `/apps/governance` | Governance/DAOs | Build | P1 |
| `/apps/submit` | Submit an app | Stub | P3 |

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
| `/learn` | Learning center hub | Build | P1 |
| `/learn/basics` | ETC basics | Build | P1 |
| `/learn/ethereum-classic` | What is ETC? | Build | P0 |
| `/learn/wallets` | Wallet guides | Build | P1 |
| `/learn/trading` | Trading guides | Stub | P2 |
| `/learn/defi` | DeFi on ETC | Stub | P2 |
| `/learn/mining` | Mining guides | Build | P1 |
| `/learn/staking` | Staking/yield | Stub | P2 |
| `/learn/security` | Security best practices | Stub | P2 |
| `/learn/glossary` | Crypto glossary | Stub | P3 |

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
| `/news` | News hub | Build | P1 |
| `/news/[slug]` | Individual article | Stub | P2 |
| `/news/category/[category]` | Category filter | Stub | P2 |
| `/news/tag/[tag]` | Tag filter | Stub | P2 |

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
| `/markets` | Markets overview | Build | P1 |
| `/price` | ETC price page | Build | P1 |
| `/price/etc` | ETC detailed price | Build | P1 |
| `/price/etc-usd` | ETC/USD pair | Stub | P2 |
| `/price/etc-btc` | ETC/BTC pair | Stub | P2 |
| `/converter` | Price converter | Stub | P2 |
| `/calculator` | Investment calculator | Stub | P2 |

---

### Mining Section

**ETC mining resources (unique to PoW chains).**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/mining` | Mining hub | Build | P1 |
| `/mining/getting-started` | Beginner guide | Build | P1 |
| `/mining/pools` | Pool directory | Build | P1 |
| `/mining/pools/[pool]` | Individual pool | Stub | P2 |
| `/mining/hardware` | Hardware guide | Stub | P2 |
| `/mining/software` | Software guide | Stub | P2 |
| `/mining/profitability` | Calculator | Stub | P2 |
| `/mining/stats` | Network hashrate | Stub | P2 |

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
| `/build` | Developer hub | Build | P1 |
| `/build/getting-started` | Quick start | Build | P1 |
| `/build/docs` | Documentation links | Build | P1 |
| `/build/tools` | Developer tools | Stub | P2 |
| `/build/clients` | Node clients | Build | P1 |
| `/build/clients/core-geth` | Core-Geth | Stub | P2 |
| `/build/clients/hyperledger-besu` | Besu | Stub | P2 |
| `/build/clients/fukuii` | Fukuii | Stub | P2 |
| `/build/networks` | Network info | Stub | P2 |
| `/build/faucets` | Testnet faucets | Stub | P2 |
| `/build/grants` | Grants/funding | Stub | P3 |

---

### Research Section

**Market research and ecosystem reports.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/research` | Research hub | Stub | P2 |
| `/research/reports` | All reports | Stub | P2 |
| `/research/reports/[slug]` | Individual report | Stub | P3 |
| `/research/network` | Network analysis | Stub | P2 |
| `/research/ecosystem` | Ecosystem reports | Stub | P3 |

---

### Tools Section

**Utility tools for ETC users.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/tools` | Tools hub | Stub | P2 |
| `/tools/converter` | Price converter | Stub | P2 |
| `/tools/calculator` | Investment calc | Stub | P2 |
| `/tools/gas` | Gas tracker | Stub | P2 |
| `/tools/explorer` | Block explorer links | Stub | P2 |
| `/tools/verify` | Contract verifier | Stub | P3 |

---

### Directory Section

**Ecosystem directory listings.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/directory` | Directory hub | Stub | P2 |
| `/directory/wallets` | Wallet directory | Build | P1 |
| `/directory/exchanges` | Exchange directory | Build | P1 |
| `/directory/mining` | Mining directory | Stub | P2 |
| `/directory/developers` | Dev resources | Stub | P2 |
| `/directory/community` | Community links | Stub | P3 |

---

### Community Section

**Community resources and links.**

| URL | Page | Status | Priority |
|-----|------|--------|----------|
| `/community` | Community hub | Stub | P2 |
| `/community/social` | Social media links | Stub | P2 |
| `/community/events` | Events calendar | Stub | P3 |
| `/community/contribute` | How to contribute | Stub | P3 |

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
| **Build** | Full page with content |
| **Stub** | Placeholder page with "Coming Soon" |

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

| Section | URLs | P0 | P1 | P2 | P3 |
|---------|------|----|----|----|----|
| Core | 8 | 1 | 1 | 4 | 2 |
| Wallet | 12+ | 2 | 3 | 7+ | 0 |
| Buy/Sell | 10 | 1 | 2 | 7 | 0 |
| Exchanges | 30+ | 0 | 1 | 25+ | 0 |
| Apps | 15+ | 2 | 3 | 10+ | 1 |
| Learn | 40+ | 1 | 4 | 35+ | 1 |
| News | 10+ | 1 | 0 | 10+ | 0 |
| Markets | 8 | 0 | 3 | 5 | 0 |
| Mining | 15+ | 0 | 3 | 12+ | 0 |
| Build | 12+ | 0 | 3 | 8+ | 1 |
| Research | 6 | 0 | 0 | 4 | 2 |
| Tools | 6 | 0 | 0 | 5 | 1 |
| Directory | 6 | 0 | 2 | 3 | 1 |
| Community | 4 | 0 | 0 | 2 | 2 |
| Account | 6 | 0 | 0 | 0 | 6 |
| **TOTAL** | **180+** | **8** | **25** | **135+** | **17** |

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
