# EthereumClassic.com v0.2 Phase 1 - Handoff Message

**Ready to begin v0.2 Phase 1 implementation**
**Date:** 2026-01-16
**Status:** All preparation complete, ready for new chat

---

## Quick Start for New Chat

You're beginning implementation of **EthereumClassic.com v0.2 Phase 1** - transforming from a single landing page to a Bitcoin.com-style consumer platform.

### Step 1: Read These Docs First (5 minutes)

**CRITICAL - Read the corrections first:**
- [`docs/PHASE-1-CORRECTIONS.md`](PHASE-1-CORRECTIONS.md) - Important positioning corrections

**Then read implementation plan:**
- [`docs/PHASE-1-implementation-plan.md`](PHASE-1-implementation-plan.md) - Detailed task breakdown

**Strategic context:**
- [`docs/SCOPE-v0.2-roadmap.md`](SCOPE-v0.2-roadmap.md) - Complete v0.2 vision
- [`/docs/ecosystem/positioning-ethereumclassic-com.md`](../../../docs/ecosystem/positioning-ethereumclassic-com.md) - Roger Ver advisory, Bitcoin.com model

**Agent instructions:**
- [`.claude/instructions.md`](../.claude/instructions.md) - Now set to v0.2 active

### Step 2: Create TodoWrite (Start Tracking)

```json
[
  {"content": "Implement navigation structure", "status": "pending", "activeForm": "Implementing navigation structure"},
  {"content": "Create Hero component", "status": "pending", "activeForm": "Creating Hero component"},
  {"content": "Create StatsStrip component", "status": "pending", "activeForm": "Creating StatsStrip component"},
  {"content": "Create ProductCards component", "status": "pending", "activeForm": "Creating ProductCards component"},
  {"content": "Create TrendingNews component", "status": "pending", "activeForm": "Creating TrendingNews component"},
  {"content": "Create EcosystemStats component", "status": "pending", "activeForm": "Creating EcosystemStats component"},
  {"content": "Create ProductSuite component", "status": "pending", "activeForm": "Creating ProductSuite component"},
  {"content": "Create TrustSignals component", "status": "pending", "activeForm": "Creating TrustSignals component"},
  {"content": "Create FinalCTA component", "status": "pending", "activeForm": "Creating FinalCTA component"},
  {"content": "Update homepage with new components", "status": "pending", "activeForm": "Updating homepage with new components"},
  {"content": "Create Apps directory with data", "status": "pending", "activeForm": "Creating Apps directory with data"},
  {"content": "Create Buy/Markets page with exchanges", "status": "pending", "activeForm": "Creating Buy/Markets page with exchanges"},
  {"content": "Create Wallet page with directory", "status": "pending", "activeForm": "Creating Wallet page with directory"},
  {"content": "Create stub pages (News, Learn, Build)", "status": "pending", "activeForm": "Creating stub pages"},
  {"content": "Run validation checklist", "status": "pending", "activeForm": "Running validation checklist"},
  {"content": "Test mobile responsiveness", "status": "pending", "activeForm": "Testing mobile responsiveness"},
  {"content": "Commit Phase 1 implementation", "status": "pending", "activeForm": "Committing Phase 1 implementation"}
]
```

### Step 3: Begin Implementation

**Recommended order:**
1. Navigation restructure
2. Homepage redesign (all sections)
3. Apps directory
4. **Buy/Markets page** (do this before Wallet page)
5. **Wallet page** (with corrections - wallet directory + Classic OS)
6. Stub pages (News, Learn, Build)
7. Validation & commit

---

## What Was v0.1?

v0.1 was a single landing page with 5 sections:
- Hero, Why ETC, Paths (Use/Earn/Build), Audience, Footer
- **Archived:** `docs/archive/SCOPE-v0.1-complete.md`

**Success criteria:** Route visitors to Classic OS/ETCswap within 60 seconds

---

## What Is v0.2 Phase 1?

Transform into **multi-section consumer platform** (Bitcoin.com model):

### New Navigation
```
[ETC Logo] News | Wallet | Apps | Buy | Learn | Build | [Launch App]
```

### New Pages
1. **Homepage** (redesigned) - Product-focused, stats-driven
2. **Wallet page** (new) - Wallet directory + Classic OS as control plane
3. **Apps directory** (new) - Featured dApps (ETCswap, ClassicUSD, Olympia DAO)
4. **Buy/Markets** (new) - Exchange listings (100+ CEXs + ETCswap DEX)
5. **Stub pages** (News, Learn, Build) - Coming in Phase 2/3

---

## Critical Corrections (Read PHASE-1-CORRECTIONS.md First!)

### Classic OS Is NOT a Wallet

**❌ WRONG:** "Classic OS Wallet" or "Download wallet"
**✅ CORRECT:** "Classic OS - Economic Operating System" or "Control plane for ETC"

**What Classic OS actually is:**
- Complete economic operating system (control plane/meta dApp)
- Four modules: Produce (Mining OS), Portfolio, Deploy (DeFi automation), Markets
- Works WITH wallets (MetaMask, Ledger, etc.), doesn't replace them

### Wallet Page Structure (Corrected)

The `/wallet` page should have:

1. **Classic OS Section** (top)
   - "Your Control Plane for Ethereum Classic"
   - Four modules showcase
   - "Launch Classic OS" CTA → app.classicos.org

2. **Wallet Directory Section**
   - "Choose Your Wallet"
   - Categories: Hardware, Browser, Mobile, Web
   - 50+ wallets from ethereumclassic.org/services/wallets
   - Each wallet: Logo, name, type, link
   - Notable wallets: MetaMask, Ledger, Trezor, Trust Wallet, Exodus, MyEtherWallet, MyCrypto

3. **Why Classic OS Section**
   - Comparison: Basic wallet vs Classic OS experience
   - Basic wallet: Send, receive, view balance
   - With Classic OS: + Mining integration, Portfolio, DeFi automation, Markets

### Buy/Markets Page (Added to Phase 1)

The `/buy` page should have:

1. **DEX Section** (Featured)
   - ETCswap (primary DEX for ETC)

2. **Major CEX Section**
   - Top 10 by volume: Binance, MEXC, Upbit, Gate, OKX, Coinbase, KuCoin, Bybit, Kraken, Bitget
   - Volume data from CoinGecko (2026-01-16)

3. **All Exchanges Section**
   - 100+ CEXs from CoinGecko
   - Referral links where possible (sign up for affiliate programs)

4. **How to Buy Guide**
   - Step-by-step: Choose exchange → Create account → Deposit → Buy → Withdraw

---

## Phase 1 Deliverables

### What to Build (Phase 1)

- ✅ Navigation with sections (News, Wallet, Apps, Buy, Learn, Build)
- ✅ Homepage redesign (Hero, Stats, Product Cards, News stub, Ecosystem Stats, Product Suite, Trust Signals, CTA)
- ✅ Apps directory (Featured apps with "Featured" badges, categories)
- ✅ **Buy/Markets page** (Exchange listings: 100+ CEXs + ETCswap DEX)
- ✅ **Wallet page** (Wallet directory + Classic OS as control plane)
- ✅ Stub pages (News, Learn, Build - "Coming soon" placeholders)

### What to Defer (Phase 2/3)

- ❌ News content (blog, CMS) → Phase 2
- ❌ Learn content (guides, tutorials) → Phase 2
- ❌ Real-time Markets data (price API, charts) → Phase 2
- ❌ Fiat on-ramp integration → Phase 3
- ❌ Build resources (developer docs) → Phase 3

---

## Data Sources

### Wallets
**Source:** https://ethereumclassic.org/services/wallets

**Key wallets to include:**
- **Hardware:** Ledger, Trezor, SafePal, CoolBitX, Ellipal
- **Browser:** MetaMask, MathWallet, TokenPocket, Brave, Opera
- **Mobile:** Trust Wallet, Exodus, Coinomi, Edge, Atomic Wallet, Guarda
- **Web:** MyEtherWallet, MyCrypto, Coin Wallet

### Exchanges
**Source:** https://www.coingecko.com/en/coins/ethereum-classic (2026-01-16)

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

**Plus 100+ additional CEXs** - See PHASE-1-CORRECTIONS.md for full list

**DEX:**
- ETCswap (primary)

---

## Tech Stack

- **Next.js:** 16.1.1 (App Router)
- **React:** 19.2.3
- **Tailwind CSS:** 4.x
- **Framer Motion:** 12.24.0
- **TypeScript:** 5.x
- **Node:** 22.x

---

## Validation Requirements

Before committing, ALL must pass:

```bash
npm run lint         # Must pass
npm run build        # Must succeed

# Test all routes:
- /
- /wallet
- /apps
- /buy
- /news (stub)
- /learn (stub)
- /build (stub)

# Test mobile responsive (375px, 768px, 1024px, 1440px)
# Test <3s load time on 4G
# Test all CTAs work
# Test navigation on mobile (hamburger menu)
```

---

## Success Criteria (Phase 1)

Phase 1 is successful when:

- ✅ Navigation displays all sections with mobile hamburger menu
- ✅ Homepage redesigned with 9 sections (product-focused)
- ✅ Wallet page shows wallet directory + Classic OS (not positioned as wallet)
- ✅ Apps directory shows featured apps (ETCswap, ClassicUSD, Olympia DAO)
- ✅ Buy/Markets page lists 100+ exchanges + ETCswap
- ✅ Stub pages exist for News, Learn, Build
- ✅ All validation passes (lint, build, mobile, <3s load)
- ✅ No broken links
- ✅ All external CTAs correct (app.classicos.org, docs.classicos.org, etcswap.org)

---

## Common Pitfalls to Avoid

### ❌ Don't Do This

1. **Don't call Classic OS a wallet**
   - Wrong: "Classic OS Wallet"
   - Right: "Classic OS - Economic Operating System"

2. **Don't skip the Buy/Markets page**
   - It's in Phase 1 scope (was added after initial plan)

3. **Don't build wallet connection on this site**
   - This site promotes wallets, doesn't replace them
   - Route to Classic OS for economic activity

4. **Don't add real-time price data in Phase 1**
   - Use static volume data from CoinGecko (2026-01-16)
   - Real-time APIs come in Phase 2

5. **Don't skip mobile testing**
   - Mobile-first is critical
   - Test hamburger menu, all CTAs on mobile

### ✅ Do This

1. **Read PHASE-1-CORRECTIONS.md first**
   - Critical positioning corrections
   - Wallet vs Classic OS distinction

2. **Build Buy/Markets before Wallet page**
   - Wallet page can link to Buy page
   - Better user flow

3. **Use data structures for wallets and exchanges**
   - See PHASE-1-CORRECTIONS.md for TypeScript interfaces
   - Makes it easy to add/update entries

4. **Sign up for affiliate programs**
   - Binance, Coinbase, OKX, Kraken referral links
   - Revenue opportunity

5. **Keep it fast**
   - <3s load time is requirement
   - Optimize images, minimize dependencies

---

## Commit Message (When Done)

```bash
git add .
git commit -m "v0.2 Phase 1: Multi-section platform foundation

- Add navigation with News, Wallet, Apps, Buy, Learn, Build sections
- Redesign homepage with product cards, stats, ecosystem showcase
- Create Wallet page with wallet directory + Classic OS control plane
- Create Apps directory with featured apps (ETCswap, ClassicUSD, Olympia DAO)
- Create Buy/Markets page with 100+ CEX listings + ETCswap DEX
- Add stub pages for News, Learn, Build (Phase 2/3)

Phase 1 transforms site from single-page router to Bitcoin.com-style
consumer platform foundation. All validation passing.

IMPORTANT CORRECTIONS:
- Classic OS positioned as economic operating system (not wallet)
- Wallet page includes wallet directory + Classic OS as control plane
- Buy/Markets page added to Phase 1 scope with exchange listings

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Quick Links

**Documentation:**
- [PHASE-1-CORRECTIONS.md](PHASE-1-CORRECTIONS.md) - **Read this first!**
- [PHASE-1-implementation-plan.md](PHASE-1-implementation-plan.md) - Detailed tasks
- [SCOPE-v0.2-roadmap.md](SCOPE-v0.2-roadmap.md) - Complete v0.2 vision
- [/docs/ecosystem/positioning-ethereumclassic-com.md](../../../docs/ecosystem/positioning-ethereumclassic-com.md) - Strategic context

**Agent Instructions:**
- [.claude/instructions.md](../.claude/instructions.md) - Now v0.2 active

**Related Products:**
- [/products/classicos-app/docs/](../../classicos-app/docs/) - Classic OS polished vision
- [/products/classicos-site/docs/](../../classicos-site/docs/) - ClassicOS landing site

**Data Sources:**
- Wallets: https://ethereumclassic.org/services/wallets
- Exchanges: https://www.coingecko.com/en/coins/ethereum-classic (2026-01-16 data)

---

## Questions?

If you get stuck:

1. **Re-read PHASE-1-CORRECTIONS.md** - Most issues are addressed there
2. **Check PHASE-1-implementation-plan.md** - Step-by-step implementation
3. **Review SCOPE-v0.2-roadmap.md** - Strategic vision and context
4. **Look at classicos-site code** - Similar patterns (product marketing site)

---

## Ready to Begin?

1. ✅ Read PHASE-1-CORRECTIONS.md
2. ✅ Read PHASE-1-implementation-plan.md
3. ✅ Create TodoWrite with task list
4. ✅ Start dev server: `cd /products/ethereumclassic-com && npm run dev`
5. ✅ Begin with Task 1: Navigation restructure

**Good luck with Phase 1!** 🚀

You're building the consumer gateway for Ethereum Classic. Make it professional, fast, and compelling. Remember: this site promotes products (Classic OS, wallets, exchanges), it doesn't replace them.

**Roger Ver's vision:** Position EthereumClassic.com as the Bitcoin.com of Ethereum Classic - the primary entry point for mainstream adoption.
