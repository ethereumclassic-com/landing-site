export type Locale = 'en' | 'es' | 'zh'

export interface LocaleConfig {
  code: Locale
  name: string
  nativeName: string
  flag: string
}

export const locales: LocaleConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
]

export const defaultLocale: Locale = 'en'

// Translation keys for type safety
export interface TranslationKeys {
  // Common
  'common.learnMore': string
  'common.getStarted': string
  'common.viewAll': string
  'common.search': string
  'common.loading': string
  'common.error': string
  'common.retry': string
  'common.back': string
  'common.next': string
  'common.previous': string
  'common.close': string
  'common.submit': string
  'common.cancel': string
  'common.save': string
  'common.delete': string
  'common.edit': string
  'common.copy': string
  'common.copied': string
  'common.download': string

  // Navigation
  'nav.home': string
  'nav.wallet': string
  'nav.buy': string
  'nav.apps': string
  'nav.learn': string
  'nav.news': string
  'nav.mining': string
  'nav.build': string
  'nav.community': string
  'nav.price': string

  // Homepage
  'home.hero.title': string
  'home.hero.subtitle': string
  'home.hero.cta.wallet': string
  'home.hero.cta.learn': string
  'home.stats.price': string
  'home.stats.marketCap': string
  'home.stats.hashrate': string
  'home.stats.blockHeight': string

  // Wallet
  'wallet.title': string
  'wallet.subtitle': string
  'wallet.compare': string
  'wallet.hardware': string
  'wallet.software': string

  // Buy
  'buy.title': string
  'buy.subtitle': string
  'buy.exchanges': string
  'buy.instant': string
  'buy.p2p': string
  'buy.atm': string

  // Mining
  'mining.title': string
  'mining.subtitle': string
  'mining.profitability': string
  'mining.hardware': string
  'mining.software': string
  'mining.pools': string

  // Footer
  'footer.description': string
  'footer.resources': string
  'footer.community': string
  'footer.developers': string
  'footer.legal': string
  'footer.privacy': string
  'footer.terms': string
  'footer.copyright': string
}

export type TranslationKey = keyof TranslationKeys
