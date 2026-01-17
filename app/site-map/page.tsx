import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '../components/layout/Container'

export const metadata: Metadata = {
  title: 'Sitemap | Ethereum Classic',
  description: 'Complete sitemap of EthereumClassic.com. Find all pages and resources.',
}

const siteStructure = [
  {
    title: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
      { label: 'Advertise', href: '/advertise' },
    ],
  },
  {
    title: 'Wallet',
    links: [
      { label: 'Wallet Hub', href: '/wallet' },
      { label: 'Classic OS', href: '/wallet/classic-os' },
      { label: 'MetaMask Setup', href: '/wallet/metamask' },
      { label: 'Hardware Wallets', href: '/wallet/hardware' },
      { label: 'Compare Wallets', href: '/wallet/compare' },
      { label: 'Wallet Reviews', href: '/wallet/reviews' },
    ],
  },
  {
    title: 'Buy & Sell',
    links: [
      { label: 'Buy ETC', href: '/buy' },
      { label: 'Exchanges', href: '/buy/exchanges' },
      { label: 'Instant Buy', href: '/buy/instant' },
      { label: 'P2P Trading', href: '/buy/p2p' },
      { label: 'Buy with Card', href: '/buy/card' },
      { label: 'Buy with Bank', href: '/buy/bank' },
      { label: 'ATM Locator', href: '/buy/atm' },
      { label: 'Sell ETC', href: '/sell' },
    ],
  },
  {
    title: 'Exchanges',
    links: [
      { label: 'Exchange Directory', href: '/exchanges' },
      { label: 'Exchange Reviews', href: '/exchanges/reviews' },
      { label: 'Compare Exchanges', href: '/exchanges/compare' },
      { label: 'Best for Beginners', href: '/exchanges/beginners' },
      { label: 'Lowest Fees', href: '/exchanges/lowest-fees' },
      { label: 'Most Secure', href: '/exchanges/most-secure' },
      { label: 'Decentralized', href: '/exchanges/decentralized' },
      { label: 'No KYC', href: '/exchanges/no-kyc' },
      { label: 'US Friendly', href: '/exchanges/us-friendly' },
    ],
  },
  {
    title: 'Apps',
    links: [
      { label: 'Apps Directory', href: '/apps' },
      { label: 'Featured Apps', href: '/apps/featured' },
      { label: 'DeFi', href: '/apps/defi' },
      { label: 'NFT Platforms', href: '/apps/nft' },
      { label: 'Games', href: '/apps/games' },
      { label: 'Tools', href: '/apps/tools' },
      { label: 'Infrastructure', href: '/apps/infrastructure' },
      { label: 'Governance', href: '/apps/governance' },
      { label: 'Submit an App', href: '/apps/submit' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Learning Center', href: '/learn' },
      { label: 'What is Ethereum Classic?', href: '/learn/ethereum-classic' },
      { label: 'ETC Basics', href: '/learn/basics' },
      { label: 'Wallet Guides', href: '/learn/wallets' },
      { label: 'Trading Guides', href: '/learn/trading' },
      { label: 'DeFi on ETC', href: '/learn/defi' },
      { label: 'Mining Guides', href: '/learn/mining' },
      { label: 'Staking & Yield', href: '/learn/staking' },
      { label: 'Security', href: '/learn/security' },
      { label: 'Glossary', href: '/learn/glossary' },
    ],
  },
  {
    title: 'News',
    links: [
      { label: 'News Hub', href: '/news' },
    ],
  },
  {
    title: 'Markets',
    links: [
      { label: 'Markets Overview', href: '/markets' },
      { label: 'ETC Price', href: '/price' },
      { label: 'Price Converter', href: '/converter' },
      { label: 'Investment Calculator', href: '/calculator' },
    ],
  },
  {
    title: 'Mining',
    links: [
      { label: 'Mining Hub', href: '/mining' },
      { label: 'Getting Started', href: '/mining/getting-started' },
      { label: 'Mining Pools', href: '/mining/pools' },
      { label: 'Hardware Guide', href: '/mining/hardware' },
      { label: 'Software Guide', href: '/mining/software' },
      { label: 'Profitability Calculator', href: '/mining/profitability' },
      { label: 'Network Stats', href: '/mining/stats' },
    ],
  },
  {
    title: 'Build',
    links: [
      { label: 'Developer Hub', href: '/build' },
      { label: 'Getting Started', href: '/build/getting-started' },
      { label: 'Documentation', href: '/build/docs' },
      { label: 'Developer Tools', href: '/build/tools' },
      { label: 'Node Clients', href: '/build/clients' },
      { label: 'Network Info', href: '/build/networks' },
      { label: 'Testnet Faucets', href: '/build/faucets' },
      { label: 'Grants & Funding', href: '/build/grants' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'Research Hub', href: '/research' },
      { label: 'Reports', href: '/research/reports' },
      { label: 'Network Analysis', href: '/research/network' },
      { label: 'Ecosystem Reports', href: '/research/ecosystem' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Tools Hub', href: '/tools' },
      { label: 'Price Converter', href: '/tools/converter' },
      { label: 'Investment Calculator', href: '/tools/calculator' },
      { label: 'Gas Tracker', href: '/tools/gas' },
      { label: 'Block Explorers', href: '/tools/explorer' },
      { label: 'Contract Verifier', href: '/tools/verify' },
    ],
  },
  {
    title: 'Directory',
    links: [
      { label: 'Directory Hub', href: '/directory' },
      { label: 'Wallets', href: '/directory/wallets' },
      { label: 'Exchanges', href: '/directory/exchanges' },
      { label: 'Mining Resources', href: '/directory/mining' },
      { label: 'Developer Resources', href: '/directory/developers' },
      { label: 'Community Links', href: '/directory/community' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Community Hub', href: '/community' },
      { label: 'Social Media', href: '/community/social' },
      { label: 'Events', href: '/community/events' },
      { label: 'Contribute', href: '/community/contribute' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Dashboard', href: '/account' },
      { label: 'Login', href: '/account/login' },
      { label: 'Register', href: '/account/register' },
      { label: 'Settings', href: '/account/settings' },
      { label: 'Watchlist', href: '/account/watchlist' },
      { label: 'Portfolio', href: '/account/portfolio' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/legal' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen py-20">
      <Container size="xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl">
            Sitemap
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Complete directory of all pages on EthereumClassic.com
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {siteStructure.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h2 className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
