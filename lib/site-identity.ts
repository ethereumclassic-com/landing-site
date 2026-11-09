import { CONTACT_EMAILS, DISCORD_URL } from '@/lib/social'

/**
 * What this site is and where its facts come from: one source for the structured data
 * (app/components/JsonLd.tsx), the About page and both llms files, so search engines, AI systems and
 * readers are told the same thing. lib/site-facts.ts holds the facts most often stated wrongly elsewhere.
 *
 * The site describes itself by its domain, its sources and its relationships, never as "official":
 * Ethereum Classic is an open network that no one organization speaks for. Authority here comes from
 * linking every claim to its primary source.
 */

export const SITE_URL = 'https://ethereumclassic.com'
/** This site's own source, public: anyone can check how a figure is computed and propose a fix. */
export const SITE_REPO_URL = 'https://github.com/ethereumclassic-com/landing-site'
/** Where Ethereum Classic's reference client and its improvement proposals are maintained. */
export const ETC_GITHUB_URL = 'https://github.com/ethereumclassic'
export const ECIPS_REPO_URL = 'https://github.com/ethereumclassic/ECIPs'
/** The community site, with the network's history, blog and documentation. */
export const COMMUNITY_SITE_URL = 'https://ethereumclassic.org'
export const CORRECTIONS_EMAIL = CONTACT_EMAILS.website

export const SITE_DESCRIPTION =
  'Ethereum Classic at its namesake domain: wallets, exchanges, apps, mining, development and research, with network figures read from the chain and each specification linked to its source.'

/** Pages that identify the Ethereum Classic network itself, for structured data's sameAs. */
export const ETC_IDENTITY_URLS = [
  'https://www.wikidata.org/wiki/Q29583124',
  'https://en.wikipedia.org/wiki/Ethereum_Classic',
  ETC_GITHUB_URL,
  COMMUNITY_SITE_URL,
  'https://www.coingecko.com/en/coins/ethereum-classic',
  'https://coinmarketcap.com/currencies/ethereum-classic/',
  'https://x.com/ETC_Network',
  DISCORD_URL,
]

export interface SourceNote {
  subject: string
  source: string
  href: string
  detail: string
}

export const SITE_SOURCES: SourceNote[] = [
  {
    subject: 'Chain figures',
    source: 'Blockscout',
    href: 'https://etc.blockscout.com',
    detail:
      'Block height, block time, difficulty, hashrate, pool shares and fees are read from Blockscout, the open-source explorer, and derived the same way on every page.',
  },
  {
    subject: 'Prices',
    source: 'CoinGecko',
    href: 'https://www.coingecko.com/en/coins/ethereum-classic',
    detail:
      "Prices and market figures are CoinGecko's, with Blockscout's copy of the same price when CoinGecko cannot be reached. Price history older than a year is Kraken's weekly closing price. A figure no source supplies shows as a dash, never as an old number.",
  },
  {
    subject: 'Specifications',
    source: 'The ECIPs',
    href: ECIPS_REPO_URL,
    detail:
      'Protocol changes are Ethereum Classic Improvement Proposals, kept in the ethereumclassic GitHub organization with the reference client. Pages link the ECIP they describe.',
  },
  {
    subject: 'Clients',
    source: 'Each client’s own project',
    href: 'https://coregeth.com',
    detail: 'Client facts come from the client: coregeth.com for Core-Geth, and fukuii.com for Fukuii.',
  },
]

