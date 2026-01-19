# Stub Pages Documentation

This document tracks all stub pages in the EthereumClassic.com website that need content implementation.

**Generated:** January 2026
**Total Stub Pages:** 22

---

## Status Legend

- **Human Required**: Requires human-written content (legal text, editorial content, policy documents)
- **Data Required**: Can be implemented once data/API is available
- **Buildable**: Can be built with existing patterns and data

---

## Category 1: Human-Required Content (Legal/Policy)

These pages require human-authored content for legal compliance:

| Page | Path | Notes |
|------|------|-------|
| Legal & Terms | `/legal` | Terms of service, disclaimers - requires legal review |
| Privacy Policy | `/privacy` | GDPR/CCPA compliant privacy policy |
| About | `/about` | Company/project information, mission statement |

---

## Category 2: Human-Required Content (Editorial)

These pages require human editorial oversight for quality and accuracy:

| Page | Path | Notes |
|------|------|-------|
| Exchange Reviews Hub | `/exchanges/reviews` | Editorial reviews of exchanges |
| Individual Exchange Reviews | `/exchanges/reviews/[exchange]` | Detailed review articles per exchange |
| Contribute Guide | `/community/contribute` | How to contribute to ETC ecosystem |
| Directory - Community | `/directory/community` | Curated community resources |
| Directory - Developers | `/directory/developers` | Curated developer resources |
| Directory - Mining | `/directory/mining` | Mining resources and guides |

---

## Category 3: Calculator/Converter Tools (Duplicates - Human Decision Required)

These routes have duplicates that need consolidation:

| Page | Path | Status | Notes |
|------|------|--------|-------|
| Investment Calculator | `/calculator` | Stub | Root-level - redirect to /tools/calculator? |
| Tools Calculator | `/tools/calculator` | Stub | Main location - needs implementation |
| Price Converter | `/converter` | Stub | Root-level - redirect to /tools/converter? |
| Tools Converter | `/tools/converter` | Stub | Main location - needs implementation |
| Markets Calculator | `/markets/calculator` | **Implemented** | Full investment calculator |
| Markets Converter | `/markets/converter` | **Implemented** | Full price converter |

**Human Decision Required:**
1. **Option A:** Implement `/tools/*` versions and redirect root paths (`/calculator`, `/converter`) to `/tools/*`
2. **Option B:** Redirect all calculator routes to `/markets/calculator` and converter routes to `/markets/converter`
3. **Option C:** Keep multiple entry points but ensure consistent functionality

**Recommendation:** Option B - The `/markets/*` versions are already fully implemented. Redirect other routes there.

---

## Category 4: Price Pages (API/Data Required)

| Page | Path | Notes |
|------|------|-------|
| Price Pairs | `/price/[pair]` | ETC/USD, ETC/BTC, etc. - needs price API |

---

## Category 5: Research Section (Data/API Required)

| Page | Path | Notes |
|------|------|-------|
| Ecosystem Research | `/research/ecosystem` | ETC ecosystem metrics/analysis |
| Research Reports | `/research/reports/[slug]` | Individual research reports |

---

## Category 6: Learn Article Stubs (Content Required)

Dynamic article pages with placeholder content system already in place:

| Page | Path | Notes |
|------|------|-------|
| Trading Articles | `/learn/trading/[article]` | Uses PlaceholderContent component |
| Security Articles | `/learn/security/[article]` | Uses PlaceholderContent component |
| Staking Articles | `/learn/staking/[article]` | Uses PlaceholderContent component |
| DeFi Articles | `/learn/defi/[article]` | Uses PlaceholderContent component |
| Generic Category | `/learn/[category]` | Dynamic category landing |
| Generic Articles | `/learn/[category]/[article]` | Dynamic article pages |

**Note:** The `/learn/basics/[article]` page has 7 articles fully implemented with content components. Other categories use the PlaceholderContent fallback.

---

## Implementation Priority

### High Priority (Foundation Pages)
1. `/legal` - Legal compliance
2. `/privacy` - Legal compliance
3. `/about` - User trust

### Medium Priority (User Tools)
4. `/tools/calculator` - Investment planning
5. `/tools/converter` - Price conversion
6. `/price/[pair]` - Price tracking

### Lower Priority (Content Pages)
7. `/exchanges/reviews/*` - Exchange reviews
8. `/directory/*` - Directory pages
9. `/research/*` - Research section
10. `/community/contribute` - Contribution guide

---

## Completed Sections (Not Stubs)

The following sections have full implementations:

- `/wallet/*` - Full wallet section with data
- `/buy/*` - Buy section with exchange listings
- `/exchanges/compare` - Interactive comparison table
- `/exchanges/us-friendly` - US-friendly filter
- `/exchanges/lowest-fees` - Fee comparison
- `/exchanges/beginners` - Beginner-friendly list
- `/exchanges/most-secure` - Security-focused list
- `/exchanges/staking` - PoW education page
- `/mining/*` - Mining section (in progress)
- `/learn/basics/*` - 7 fully-written articles
- `/learn/defi` - Category page implemented
- `/directory/wallets` - Full wallet directory
- `/directory/exchanges` - Full exchange directory
- `/apps/*` - dApps directory
- `/build/*` - Developer section
- `/community` - Community hub
- `/contact` - Contact form

---

## Notes

1. Stub pages use the `StubPage` component from `@/app/components/templates`
2. Each stub has proper metadata and related links
3. Learn section uses a data-driven approach with articles defined in `/learn/data/articles.ts`
4. To add new learn articles, add to the articles data file and create content component

---

## QA Review Findings (Phase 7)

### TODO Comments Requiring API Integration

The following pages have hardcoded metrics that need live API integration:

| File | Issue | Priority |
|------|-------|----------|
| `/app/network/page.tsx` | Pool hashrate distribution needs live API | High |
| `/app/network/page.tsx` | Node geographic distribution needs live API | High |
| `/app/network/page.tsx` | Network hashrate hardcoded (~185 TH/s) | High |
| `/app/network/page.tsx` | Node count hardcoded (~840 nodes) | High |
| `/app/network/page.tsx` | Pool distribution hardcoded (~45% top 2) | High |
| `/app/markets/data/markets.ts` | `/api/rates` endpoint needs implementation | High |

### Unused Component Library

The following exported components are not imported by any pages (may be for future use):

**UI Components** (`/app/components/ui/`): Card, Modal, Tooltip, Icon, Input, Select, Tabs, Table, Skeleton, Badge

**Section Components** (`/app/components/sections/`): CTABanner, FAQAccordion, FeatureGrid

**Decision Required:** Keep for future use or remove to reduce bundle size

### Duplicate Component Definitions

| Component | Simple Version | Feature-Rich Version |
|-----------|---------------|---------------------|
| Button | `/components/Button.tsx` | `/components/ui/Button.tsx` |
| Section | `/components/Section.tsx` | `/components/layout/Section.tsx` |

**Recommendation:** Consolidate to single implementations

---

## Related Files

- `/app/components/templates/StubPage.tsx` - Stub page template
- `/app/learn/data/articles.ts` - Article definitions
- `/app/buy/data/exchanges.ts` - Exchange data
- `/app/wallet/data/wallets.ts` - Wallet data
