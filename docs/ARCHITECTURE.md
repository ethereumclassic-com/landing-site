# Architecture - EthereumClassic.com v0.2

> **Purpose**: Define the framework, shell structure, and technical architecture for EthereumClassic.com.
>
> **Approach**: Framework/shell first, then core components, then content sections.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        PRESENTATION LAYER                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                     Next.js App Router                       ││
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐││
│  │  │  Pages   │ │  Layouts │ │Components│ │  Route Groups    │││
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────────┘││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                         DATA LAYER                               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────────┐│
│  │ Static Data │ │  API Routes │ │External APIs│ │   CMS      ││
│  │  (JSON/TS)  │ │  (Future)   │ │(Prices,etc) │ │  (Future)  ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                       SHARED SYSTEMS                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│  │  Design  │ │ Analytics│ │   SEO    │ │   i18n   │ │  Auth  ││
│  │  System  │ │          │ │          │ │ (Future) │ │(Future)││
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | App Router, SSG/SSR, API routes |
| React | 19.x | UI components |
| TypeScript | 5.x | Type safety |
| Node.js | 22.x | Runtime |

### Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 4.x | Utility-first CSS |
| CSS Variables | - | Design tokens |
| Framer Motion | 12.x | Animations |

### Data
| Technology | Purpose | Phase |
|------------|---------|-------|
| Static JSON/TS | Content data | Phase 1 |
| External APIs | Price data, stats | Phase 1-2 |
| MDX | Article content | Phase 2 |
| Headless CMS | News, dynamic content | Phase 3 |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| Vercel | Hosting, CDN, Edge |
| GitHub | Source control |
| GitHub Actions | CI/CD |

---

## Project Structure

```
ethereumclassic-com/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Marketing pages group
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   ├── contact/
│   │   └── ...
│   ├── (products)/               # Product pages group
│   │   ├── wallet/
│   │   ├── buy/
│   │   ├── apps/
│   │   └── ...
│   ├── (content)/                # Content pages group
│   │   ├── learn/
│   │   ├── news/
│   │   ├── research/
│   │   └── ...
│   ├── (ecosystem)/              # Ecosystem pages group
│   │   ├── mining/
│   │   ├── build/
│   │   ├── exchanges/
│   │   └── ...
│   ├── (tools)/                  # Tools pages group
│   │   ├── markets/
│   │   ├── price/
│   │   ├── tools/
│   │   └── ...
│   ├── api/                      # API routes (future)
│   ├── components/               # Shared components
│   │   ├── ui/                   # Base UI components
│   │   ├── layout/               # Layout components
│   │   ├── sections/             # Page sections
│   │   └── features/             # Feature components
│   ├── lib/                      # Utilities and helpers
│   ├── data/                     # Static data files
│   ├── styles/                   # Global styles
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global CSS
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── content/                      # MDX content (Phase 2)
│   ├── learn/
│   ├── news/
│   └── ...
├── docs/                         # Project documentation
├── .claude/                      # AI agent instructions
└── .github/                      # GitHub config
```

---

## Shell Structure

### Phase 1: Framework Shell

The shell establishes the site-wide structure before building individual sections.

#### Root Layout (`app/layout.tsx`)
```typescript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundSystem />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
```

#### Navigation Component
```typescript
// Primary navigation structure
const navigation = {
  primary: [
    { label: 'News', href: '/news' },
    { label: 'Wallet', href: '/wallet' },
    { label: 'Apps', href: '/apps' },
    { label: 'Buy', href: '/buy' },
    { label: 'Learn', href: '/learn' },
    { label: 'Mining', href: '/mining' },
    { label: 'Build', href: '/build' },
  ],
  cta: { label: 'Launch App', href: 'https://app.classicos.org' },
  secondary: [
    { label: 'Markets', href: '/markets' },
    { label: 'Exchanges', href: '/exchanges' },
    { label: 'Research', href: '/research' },
  ]
}
```

#### Footer Component
```typescript
// Footer structure matching Bitcoin.com
const footer = {
  columns: [
    {
      title: 'Products',
      links: ['Wallet', 'Buy ETC', 'Apps', 'Mining']
    },
    {
      title: 'Learn',
      links: ['What is ETC?', 'Guides', 'Glossary', 'FAQ']
    },
    {
      title: 'Ecosystem',
      links: ['Exchanges', 'Mining Pools', 'Developers', 'Research']
    },
    {
      title: 'Company',
      links: ['About', 'Contact', 'Advertise', 'Legal']
    }
  ],
  social: ['Twitter', 'Discord', 'Telegram', 'GitHub'],
  legal: ['Terms', 'Privacy', 'Cookies'],
  copyright: '© 2026 EthereumClassic.com'
}
```

---

## Layout System

### Page Layout Types

#### 1. Marketing Layout
For homepage and promotional pages.
```typescript
// Full-width, immersive design
<MarketingLayout>
  <Hero />
  <Sections />
  <CTA />
</MarketingLayout>
```

#### 2. Content Layout
For articles, guides, documentation.
```typescript
// Sidebar + content area
<ContentLayout sidebar={<TableOfContents />}>
  <Article />
</ContentLayout>
```

#### 3. Directory Layout
For listings, reviews, comparisons.
```typescript
// Filters + grid/list
<DirectoryLayout filters={<FilterSidebar />}>
  <ListingGrid />
</DirectoryLayout>
```

#### 4. Tool Layout
For calculators, converters, interactive tools.
```typescript
// Centered, focused interface
<ToolLayout>
  <ToolInterface />
  <RelatedContent />
</ToolLayout>
```

---

## Route Groups

Next.js route groups organize pages without affecting URL structure.

### (marketing)
- `/` - Homepage
- `/about` - About page
- `/contact` - Contact page
- `/partners` - Partners page

### (products)
- `/wallet/*` - Wallet section
- `/buy/*` - Buy section
- `/sell/*` - Sell section
- `/apps/*` - Apps directory

### (content)
- `/learn/*` - Education center
- `/news/*` - News section
- `/research/*` - Research reports

### (ecosystem)
- `/exchanges/*` - Exchange directory
- `/mining/*` - Mining section
- `/build/*` - Developer section
- `/directory/*` - Ecosystem directory

### (tools)
- `/markets` - Market overview
- `/price/*` - Price pages
- `/tools/*` - Utility tools
- `/converter` - Price converter
- `/calculator` - Investment calculator

---

## Component Architecture

### Component Hierarchy

```
UI Components (Atomic)
    ↓
Layout Components
    ↓
Section Components
    ↓
Feature Components
    ↓
Page Components
```

### UI Components (`app/components/ui/`)
Atomic, reusable building blocks.

```
ui/
├── Button.tsx
├── Card.tsx
├── Badge.tsx
├── Input.tsx
├── Select.tsx
├── Modal.tsx
├── Dropdown.tsx
├── Tabs.tsx
├── Table.tsx
├── Tooltip.tsx
├── Skeleton.tsx
├── Icon.tsx
└── index.ts
```

### Layout Components (`app/components/layout/`)
Structural components for page layouts.

```
layout/
├── Navigation.tsx
├── Footer.tsx
├── Sidebar.tsx
├── Container.tsx
├── Section.tsx
├── Grid.tsx
├── PageHeader.tsx
├── Breadcrumbs.tsx
└── index.ts
```

### Section Components (`app/components/sections/`)
Reusable page sections.

```
sections/
├── Hero.tsx
├── StatsStrip.tsx
├── ProductCards.tsx
├── FeatureGrid.tsx
├── TestimonialCarousel.tsx
├── CTABanner.tsx
├── FAQAccordion.tsx
├── NewsletterSignup.tsx
├── TrustSignals.tsx
└── index.ts
```

### Feature Components (`app/components/features/`)
Domain-specific components.

```
features/
├── wallet/
│   ├── WalletCard.tsx
│   ├── WalletComparison.tsx
│   └── DownloadCTA.tsx
├── exchange/
│   ├── ExchangeCard.tsx
│   ├── ExchangeTable.tsx
│   └── ExchangeFilters.tsx
├── app/
│   ├── AppCard.tsx
│   ├── AppGrid.tsx
│   └── CategoryNav.tsx
├── price/
│   ├── PriceDisplay.tsx
│   ├── PriceChart.tsx
│   └── PriceConverter.tsx
├── mining/
│   ├── PoolCard.tsx
│   ├── HashRateChart.tsx
│   └── ProfitabilityCalc.tsx
└── learn/
    ├── ArticleCard.tsx
    ├── CategoryTabs.tsx
    └── TableOfContents.tsx
```

---

## Data Architecture

### Static Data (`app/data/`)

```
data/
├── navigation.ts      # Nav links
├── footer.ts          # Footer content
├── wallets.ts         # Wallet listings
├── exchanges.ts       # Exchange data
├── apps.ts            # App directory
├── pools.ts           # Mining pools
├── articles.ts        # Article metadata
├── faq.ts             # FAQ content
└── config.ts          # Site config
```

### Data Schema Examples

#### Wallet Data
```typescript
interface Wallet {
  id: string
  name: string
  slug: string
  description: string
  type: 'software' | 'hardware' | 'mobile' | 'web'
  platforms: ('ios' | 'android' | 'windows' | 'mac' | 'linux' | 'browser')[]
  features: string[]
  security: 'custodial' | 'non-custodial'
  supportedAssets: string[]
  url: string
  downloadUrls?: {
    ios?: string
    android?: string
    desktop?: string
    browser?: string
  }
  logo: string
  rating?: number
  featured: boolean
}
```

#### Exchange Data
```typescript
interface Exchange {
  id: string
  name: string
  slug: string
  description: string
  type: 'centralized' | 'decentralized' | 'hybrid'
  features: string[]
  tradingPairs: string[]
  fees: {
    maker: number
    taker: number
    withdrawal?: number
  }
  countries: string[]
  url: string
  affiliateUrl?: string
  logo: string
  rating?: number
  featured: boolean
}
```

#### App Data
```typescript
interface App {
  id: string
  name: string
  slug: string
  description: string
  longDescription?: string
  category: 'defi' | 'nft' | 'games' | 'tools' | 'infrastructure' | 'governance'
  tags: string[]
  url: string
  github?: string
  docs?: string
  logo: string
  screenshots?: string[]
  tvl?: number
  users?: number
  featured: boolean
  status: 'live' | 'beta' | 'coming-soon'
  verified: boolean  // REQUIRED: Must be manually vetted
}
```

**IMPORTANT: App Vetting Requirement**

ETC ecosystem has significant scam app prevalence. All apps listed must be:
1. Manually vetted by the architect or trusted contributor
2. Have verifiable on-chain activity
3. Have public team or established reputation
4. Pass security review if DeFi-related

**Trusted Apps (Current):**
- ETCswap (architect-built)
- Classic USD (architect-organized)
- BlockScout (established infrastructure)

New apps require explicit approval before listing.

#### Mining Pool Data
```typescript
interface MiningPool {
  id: string
  name: string
  slug: string
  url: string
  fee: number
  feeType: 'PPS' | 'PPLNS' | 'FPPS' | 'PPS+' | 'SOLO' | 'PROP'
  minPayout: number
  hashrate?: number      // TH/s
  networkShare?: number  // Percentage
  miners?: number
  featured: boolean
  priority: 'P1' | 'P2' | 'P3'
}
```

**Pool Listing Criteria (by hashrate):**

| Priority | Hashrate Threshold | Pools |
|----------|-------------------|-------|
| P1 | >10 TH/s | F2Pool, 2Miners, K1Pool |
| P2 | 1-10 TH/s | GTPool, EMCD |
| P3 | <1 TH/s | Only if notable brand |

Data source: miningpoolstats.stream/ethereumclassic

**Future: EthereumClassic.com Mining Pool**

Reserved for in-house mining pool integrated with Fukuii client development.
- ETChash mining hub
- Integration with FairWins, ClearPath, TokenMint
- Prediction DAO research applications
- GitHub: chippr-robotics/fukuii, prediction-dao-research

---

## External Data Integration

### Price Data
```typescript
// CoinGecko API integration
async function getETCPrice(): Promise<PriceData> {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum-classic&vs_currencies=usd,btc&include_24hr_change=true'
  )
  return response.json()
}
```

### Network Stats
```typescript
// BlockScout or custom API
async function getNetworkStats(): Promise<NetworkStats> {
  // Hashrate, difficulty, block time, etc.
}
```

### Caching Strategy
```typescript
// ISR for price data
export const revalidate = 60 // Revalidate every 60 seconds

// Static for directory data
export const dynamic = 'force-static'
```

---

## SEO Architecture

### Metadata Generation
```typescript
// Dynamic metadata per page
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `${page.title} | Ethereum Classic`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      images: [{ url: page.ogImage }],
    },
  }
}
```

### Structured Data
```typescript
// JSON-LD for rich results
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EthereumClassic.com',
  url: 'https://ethereumclassic.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ethereumclassic.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}
```

### Sitemap Generation
```typescript
// Auto-generated from routes
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getAllRoutes()
  return routes.map(route => ({
    url: `https://ethereumclassic.com${route.path}`,
    lastModified: route.updatedAt,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))
}
```

---

## Stub Page System

### Stub Page Template
```typescript
// app/components/StubPage.tsx
interface StubPageProps {
  title: string
  description: string
  expectedPhase: string
  relatedLinks?: { label: string; href: string }[]
}

export function StubPage({ title, description, expectedPhase, relatedLinks }: StubPageProps) {
  return (
    <Container>
      <PageHeader title={title} />
      <Card>
        <h2>Coming Soon</h2>
        <p>{description}</p>
        <Badge>{expectedPhase}</Badge>
        {relatedLinks && (
          <nav>
            <h3>In the meantime, check out:</h3>
            <ul>
              {relatedLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <NewsletterSignup />
      </Card>
    </Container>
  )
}
```

### Stub Page Usage
```typescript
// app/research/page.tsx
import { StubPage } from '@/components/StubPage'

export default function ResearchPage() {
  return (
    <StubPage
      title="Research"
      description="Market analysis, ecosystem reports, and in-depth research on Ethereum Classic."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Learn about ETC', href: '/learn' },
        { label: 'View market data', href: '/markets' },
      ]}
    />
  )
}
```

---

## Performance Architecture

### Core Web Vitals Targets
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| TTFB | < 600ms |

### Optimization Strategies

1. **Static Generation**
   - Pre-render all possible pages at build time
   - ISR for frequently updated data (prices, stats)

2. **Image Optimization**
   - Next.js Image component
   - WebP format with fallbacks
   - Lazy loading below fold

3. **Code Splitting**
   - Route-based splitting (automatic)
   - Component lazy loading for heavy features

4. **Font Optimization**
   - `next/font` for self-hosted fonts
   - Font display swap
   - Subset for used characters only

5. **Asset Optimization**
   - Minification (automatic)
   - Compression (Vercel)
   - CDN delivery

---

## Analytics Architecture

### Event Tracking
```typescript
// Tracking wrapper
function trackEvent(event: AnalyticsEvent) {
  // Google Analytics
  gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  })

  // Additional analytics providers
}
```

### Key Events to Track
- Page views
- CTA clicks (by destination)
- External link clicks
- Download clicks
- Search queries
- Filter usage
- Time on page
- Scroll depth

---

## Future Architecture (Phase 3+)

### Authentication
```typescript
// NextAuth.js integration
// Optional user accounts for:
// - Watchlists
// - Portfolio tracking
// - Personalized content
```

### CMS Integration
```typescript
// Headless CMS for:
// - News articles
// - Dynamic announcements
// - Event listings
// - Community updates
```

### API Layer
```typescript
// API routes for:
// - Price data aggregation
// - Newsletter subscription
// - Contact form
// - Search
```

### Internationalization
```typescript
// next-intl for:
// - Multi-language support
// - Locale-specific content
// - RTL support
```

---

## Development Workflow

### Local Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
```

### Build Process
1. TypeScript compilation
2. Static page generation
3. Asset optimization
4. Sitemap generation
5. Deploy to Vercel

### CI/CD Pipeline
```yaml
# .github/workflows/ci.yml
- Lint check
- Type check
- Build
- Preview deployment (PRs)
- Production deployment (main)
```

---

## Security Considerations

1. **No Wallet Connections** - Route to Classic OS
2. **No User Data Storage** - Phase 1 has no accounts
3. **CSP Headers** - Strict content security policy
4. **External Links** - `rel="noopener noreferrer"`
5. **API Rate Limiting** - When API routes added
6. **Input Sanitization** - For search/forms
