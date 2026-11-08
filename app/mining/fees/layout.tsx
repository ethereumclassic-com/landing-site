import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

const description =
  'What Ethereum Classic transactions pay in fees, and what share of miner revenue that is, read from the chain over the last 30 days.'

export const metadata: Metadata = {
  title: 'Network Fees',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/mining/fees' },
  openGraph: { ...OG_BASE },
}

export default function NetworkFeesLayout({ children }: { children: React.ReactNode }) {
  return children
}
