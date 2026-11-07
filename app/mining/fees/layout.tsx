import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

const description =
  'What Ethereum Classic transactions pay in fees and how much of miner revenue that is, read from the chain over the last 30 days: fees, gas prices and block space used.'

export const metadata: Metadata = {
  title: 'Network Fees',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/mining/fees' },
  openGraph: {
    ...OG_BASE,
    title: 'Ethereum Classic Network Fees',
    description,
  },
}

export default function NetworkFeesLayout({ children }: { children: React.ReactNode }) {
  return children
}
