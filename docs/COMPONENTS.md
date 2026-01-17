# Component Specifications - EthereumClassic.com v0.2

> **Purpose**: Detailed specifications for all reusable components.
>
> **Reference**: Bitcoin.com component patterns adapted for ETC.

---

## Component Library Overview

```
Components
├── UI (Atomic)           # Base building blocks
├── Layout                # Structural components
├── Sections              # Reusable page sections
├── Features              # Domain-specific components
└── Templates             # Page templates
```

---

## Design Tokens

### Colors

```css
:root {
  /* Brand */
  --color-primary: #3AB83A;        /* ETC Green */
  --color-primary-hover: #2D9E2D;
  --color-primary-light: #E8F5E8;

  /* Backgrounds */
  --color-bg-primary: #0B0F14;     /* Dark base */
  --color-bg-secondary: #131A24;   /* Card backgrounds */
  --color-bg-tertiary: #1A2332;    /* Elevated surfaces */

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #94A3B8;
  --color-text-muted: #64748B;

  /* Borders */
  --color-border: #1E293B;
  --color-border-hover: #334155;

  /* Accents */
  --color-accent-blue: #3B82F6;
  --color-accent-orange: #F97316;
  --color-accent-red: #EF4444;
  --color-accent-yellow: #EAB308;

  /* Status */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Spacing

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Border Radius

```css
:root {
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;
}
```

---

## UI Components (Atomic)

### Button

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  href?: string  // Renders as Link if provided
  onClick?: () => void
  children: ReactNode
}
```

**Variants:**
- `primary`: Green background, white text (main CTAs)
- `secondary`: Dark background, white text
- `outline`: Transparent with border
- `ghost`: Transparent, no border
- `link`: Text only, underline on hover

**Usage:**
```tsx
<Button variant="primary" size="lg">
  Get Wallet
</Button>

<Button variant="outline" icon={<ExternalLinkIcon />} iconPosition="right">
  Launch App
</Button>
```

### Card

```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  href?: string  // Makes card clickable
  children: ReactNode
}
```

**Variants:**
- `default`: Standard background
- `elevated`: Subtle shadow/glow
- `outlined`: Border emphasis
- `interactive`: Hover effects for clickable cards

**Usage:**
```tsx
<Card variant="interactive" href="/wallet/classic-os">
  <CardHeader>
    <CardIcon src="/icons/wallet.svg" />
    <CardTitle>Classic OS</CardTitle>
  </CardHeader>
  <CardDescription>
    The complete economic operating system for Ethereum Classic.
  </CardDescription>
</Card>
```

### Badge

```typescript
interface BadgeProps {
  variant: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline'
  size?: 'sm' | 'md'
  children: ReactNode
}
```

**Usage:**
```tsx
<Badge variant="success">Live</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="outline">DeFi</Badge>
```

### Input

```typescript
interface InputProps {
  type?: 'text' | 'email' | 'number' | 'search' | 'url'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  placeholder?: string
  error?: string
  helper?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  value: string
  onChange: (value: string) => void
}
```

### Select

```typescript
interface SelectProps {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
}
```

### Tabs

```typescript
interface TabsProps {
  tabs: { id: string; label: string; count?: number }[]
  activeTab: string
  onChange: (tabId: string) => void
  variant?: 'default' | 'pills' | 'underline'
}
```

### Table

```typescript
interface TableProps<T> {
  columns: {
    key: keyof T
    header: string
    width?: string
    render?: (value: T[keyof T], row: T) => ReactNode
    sortable?: boolean
  }[]
  data: T[]
  sortKey?: keyof T
  sortDirection?: 'asc' | 'desc'
  onSort?: (key: keyof T) => void
  loading?: boolean
  emptyMessage?: string
}
```

### Tooltip

```typescript
interface TooltipProps {
  content: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  children: ReactNode
}
```

### Skeleton

```typescript
interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  lines?: number  // For text variant
}
```

### Icon

```typescript
interface IconProps {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  className?: string
}
```

---

## Layout Components

### Navigation

```typescript
interface NavigationProps {
  // Configuration via data file
}
```

**Structure:**
```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]  News Wallet Apps Buy Learn Mining Build  [Markets ▼]   │
│                                          [Launch App] [Search] │
└─────────────────────────────────────────────────────────────────┘
```

**Features:**
- Sticky header on scroll
- Mobile hamburger menu
- Dropdown menus for overflow items
- Search icon/modal
- Primary CTA button
- Active state indicators

**Mobile:**
```
┌──────────────────────────────────┐
│ [Logo]           [Search] [Menu] │
└──────────────────────────────────┘
```

### Footer

```typescript
interface FooterProps {
  // Configuration via data file
}
```

**Structure:**
```
┌─────────────────────────────────────────────────────────────────┐
│                    Newsletter Signup                             │
├─────────────────────────────────────────────────────────────────┤
│  Products    │   Learn      │   Ecosystem   │   Company         │
│  - Wallet    │   - Basics   │   - Exchanges │   - About         │
│  - Buy ETC   │   - Guides   │   - Mining    │   - Contact       │
│  - Apps      │   - Mining   │   - Build     │   - Advertise     │
│  - Markets   │   - Trading  │   - Research  │   - Partners      │
├─────────────────────────────────────────────────────────────────┤
│  [Twitter] [Discord] [Telegram] [GitHub]                        │
├─────────────────────────────────────────────────────────────────┤
│  © 2026 EthereumClassic.com    Terms | Privacy | Cookies        │
└─────────────────────────────────────────────────────────────────┘
```

### Container

```typescript
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
  children: ReactNode
}
```

**Sizes:**
- `sm`: max-width: 640px
- `md`: max-width: 768px
- `lg`: max-width: 1024px
- `xl`: max-width: 1280px (default)
- `full`: max-width: 100%

### Section

```typescript
interface SectionProps {
  id?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'alt' | 'gradient'
  children: ReactNode
}
```

### Grid

```typescript
interface GridProps {
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'sm' | 'md' | 'lg'
  responsive?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  children: ReactNode
}
```

### PageHeader

```typescript
interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: { label: string; href: string }[]
  actions?: ReactNode
}
```

### Sidebar

```typescript
interface SidebarProps {
  position?: 'left' | 'right'
  sticky?: boolean
  children: ReactNode
}
```

### Breadcrumbs

```typescript
interface BreadcrumbsProps {
  items: { label: string; href: string }[]
  separator?: ReactNode
}
```

---

## Section Components

### Hero

```typescript
interface HeroProps {
  variant: 'home' | 'page' | 'minimal'
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  stats?: { label: string; value: string }[]
  backgroundVariant?: 'gradient' | 'pattern' | 'image'
  image?: string
}
```

**Home Hero Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│            The Home of Ethereum Classic                         │
│                                                                 │
│     The only mature Proof-of-Work blockchain                    │
│           with smart contracts                                  │
│                                                                 │
│        [Get Wallet]  [Buy ETC]                                  │
│                                                                 │
│    ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐              │
│    │ 9+yrs  │  │  $XXX  │  │  XXX   │  │  XX+   │              │
│    │Running │  │  TVL   │  │Hashrate│  │ Apps   │              │
│    └────────┘  └────────┘  └────────┘  └────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### StatsStrip

```typescript
interface StatsStripProps {
  stats: {
    label: string
    value: string
    change?: string
    changeType?: 'positive' | 'negative' | 'neutral'
    icon?: ReactNode
  }[]
  variant?: 'default' | 'compact'
}
```

### ProductCards

```typescript
interface ProductCardsProps {
  cards: {
    icon: string
    title: string
    description: string
    href: string
    cta: string
    badge?: string
  }[]
  columns?: 2 | 3 | 4
}
```

**Layout:**
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   [Icon]    │  │   [Icon]    │  │   [Icon]    │  │   [Icon]    │
│             │  │             │  │             │  │             │
│   Wallet    │  │   Buy ETC   │  │    Apps     │  │   Learn     │
│             │  │             │  │             │  │             │
│  Get the    │  │  Purchase   │  │  Discover   │  │   Guides    │
│  Classic OS │  │  ETC easily │  │  dApps      │  │   & docs    │
│  wallet     │  │             │  │             │  │             │
│             │  │             │  │             │  │             │
│ [Get Now →] │  │ [Buy Now →] │  │[Explore →]  │  │[Start →]    │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

### FeatureGrid

```typescript
interface FeatureGridProps {
  title?: string
  subtitle?: string
  features: {
    icon: ReactNode
    title: string
    description: string
  }[]
  columns?: 2 | 3 | 4
}
```

### TestimonialCarousel

```typescript
interface TestimonialCarouselProps {
  testimonials: {
    quote: string
    author: string
    role?: string
    avatar?: string
  }[]
  autoPlay?: boolean
  interval?: number
}
```

### CTABanner

```typescript
interface CTABannerProps {
  variant: 'primary' | 'secondary' | 'gradient'
  title: string
  description?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  image?: string
}
```

### FAQAccordion

```typescript
interface FAQAccordionProps {
  title?: string
  items: {
    question: string
    answer: string
  }[]
  allowMultiple?: boolean
}
```

### NewsletterSignup

```typescript
interface NewsletterSignupProps {
  variant: 'inline' | 'card' | 'banner'
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
}
```

### TrustSignals

```typescript
interface TrustSignalsProps {
  signals: {
    icon: ReactNode
    title: string
    description: string
  }[]
}
```

**Example Signals:**
- "9+ Years Running" with clock icon
- "Proof-of-Work Security" with shield icon
- "EVM Compatible" with code icon
- "Non-Custodial" with lock icon

---

## Feature Components

### Wallet Components

#### WalletCard

```typescript
interface WalletCardProps {
  wallet: Wallet
  variant?: 'default' | 'featured' | 'compact'
  showRating?: boolean
  showFeatures?: boolean
}
```

**Layout:**
```
┌─────────────────────────────────────────────┐
│  [Logo]  Classic OS              [Featured] │
│                                             │
│  The complete economic operating system     │
│  for Ethereum Classic.                      │
│                                             │
│  ✓ Non-custodial  ✓ Multi-chain            │
│  ✓ DeFi built-in  ✓ Mining OS              │
│                                             │
│  [iOS] [Android] [Desktop]                  │
│                                             │
│  [Learn More]              [Download →]     │
└─────────────────────────────────────────────┘
```

#### WalletComparison

```typescript
interface WalletComparisonProps {
  wallets: Wallet[]
  features: string[]
}
```

### Exchange Components

#### ExchangeCard

```typescript
interface ExchangeCardProps {
  exchange: Exchange
  variant?: 'default' | 'row' | 'compact'
  showFees?: boolean
}
```

#### ExchangeTable

```typescript
interface ExchangeTableProps {
  exchanges: Exchange[]
  sortable?: boolean
  filterable?: boolean
}
```

#### ExchangeFilters

```typescript
interface ExchangeFiltersProps {
  filters: {
    types: string[]
    features: string[]
    countries: string[]
  }
  activeFilters: Record<string, string[]>
  onChange: (filters: Record<string, string[]>) => void
}
```

### App Components

#### AppCard

```typescript
interface AppCardProps {
  app: App
  variant?: 'default' | 'featured' | 'compact'
  showStats?: boolean
}
```

**Layout:**
```
┌─────────────────────────────────────────────┐
│  [Logo]                                     │
│                                             │
│  ETCswap                           [DeFi]   │
│                                             │
│  Decentralized exchange protocol for        │
│  Ethereum Classic. Swap, provide            │
│  liquidity, and earn.                       │
│                                             │
│  TVL: $XX.XM         Users: XX,XXX          │
│                                             │
│  [Learn More]               [Launch App →]  │
└─────────────────────────────────────────────┘
```

#### AppGrid

```typescript
interface AppGridProps {
  apps: App[]
  columns?: 2 | 3 | 4
  showCategory?: boolean
}
```

#### CategoryNav

```typescript
interface CategoryNavProps {
  categories: { id: string; label: string; count: number }[]
  activeCategory: string
  onChange: (category: string) => void
}
```

### Price Components

#### PriceDisplay

```typescript
interface PriceDisplayProps {
  symbol: string
  price: number
  change24h?: number
  high24h?: number
  low24h?: number
  variant?: 'default' | 'large' | 'compact'
}
```

#### PriceChart

```typescript
interface PriceChartProps {
  symbol: string
  data: { time: number; price: number }[]
  timeframe: '1H' | '24H' | '7D' | '30D' | '1Y' | 'ALL'
  onTimeframeChange: (tf: string) => void
}
```

#### PriceConverter

```typescript
interface PriceConverterProps {
  defaultFrom?: string
  defaultTo?: string
  supportedCurrencies: string[]
}
```

### Mining Components

#### PoolCard

```typescript
interface PoolCardProps {
  pool: MiningPool
  showStats?: boolean
}
```

#### HashRateChart

```typescript
interface HashRateChartProps {
  data: { time: number; hashrate: number }[]
  timeframe: '24H' | '7D' | '30D'
}
```

#### ProfitabilityCalc

```typescript
interface ProfitabilityCalcProps {
  defaultHashrate?: number
  defaultPower?: number
  defaultCost?: number
}
```

### Learn Components

#### ArticleCard

```typescript
interface ArticleCardProps {
  article: {
    title: string
    description: string
    slug: string
    category: string
    readTime?: number
    image?: string
  }
  variant?: 'default' | 'featured' | 'compact'
}
```

#### CategoryTabs

```typescript
interface CategoryTabsProps {
  categories: { id: string; label: string }[]
  activeCategory: string
  onChange: (category: string) => void
}
```

#### TableOfContents

```typescript
interface TableOfContentsProps {
  headings: { id: string; text: string; level: number }[]
  activeId?: string
}
```

---

## Template Components

### StubPage

```typescript
interface StubPageProps {
  title: string
  description: string
  expectedPhase: string
  icon?: ReactNode
  relatedLinks?: { label: string; href: string }[]
  showNewsletter?: boolean
}
```

### DirectoryPage

```typescript
interface DirectoryPageProps<T> {
  title: string
  description: string
  items: T[]
  filters: FilterConfig[]
  renderItem: (item: T) => ReactNode
  emptyMessage: string
}
```

### ArticlePage

```typescript
interface ArticlePageProps {
  title: string
  description: string
  content: ReactNode
  category: string
  readTime: number
  publishedAt: string
  updatedAt?: string
  author?: { name: string; avatar?: string }
  relatedArticles?: Article[]
}
```

---

## Animation Patterns

### Framer Motion Variants

```typescript
// Fade in on scroll
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Scale on hover
export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 }
}
```

### Usage

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeInUp}
>
  <Card>...</Card>
</motion.div>
```

### Reduced Motion

```typescript
// Respect user preferences
const prefersReducedMotion = usePrefersReducedMotion()

const variants = prefersReducedMotion
  ? { hidden: {}, visible: {} }
  : fadeInUp
```

---

## Responsive Patterns

### Breakpoints

```typescript
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}
```

### Mobile-First Approach

```tsx
// Grid example
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Component Variants by Breakpoint

```tsx
// Show different variants based on screen size
<WalletCard
  wallet={wallet}
  variant={{
    base: 'compact',
    md: 'default',
    lg: 'featured'
  }}
/>
```

---

## Accessibility Requirements

1. **Keyboard Navigation**: All interactive elements focusable
2. **ARIA Labels**: Meaningful labels for screen readers
3. **Color Contrast**: WCAG AA minimum (4.5:1 for text)
4. **Focus Indicators**: Visible focus states
5. **Skip Links**: Skip to main content
6. **Alt Text**: All images have descriptive alt text
7. **Semantic HTML**: Proper heading hierarchy
8. **Reduced Motion**: Respect `prefers-reduced-motion`
