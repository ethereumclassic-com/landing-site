import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

// The /tools layout appends " | Ethereum Classic" through its title template.
const description =
  'What an Ethereum Classic position is worth at an entry price, its profit or loss across price scenarios, and what a fixed monthly purchase adds up to.'

export const metadata: Metadata = {
  title: 'ETC Investment Calculator',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/tools/calculator' },
  openGraph: { ...OG_BASE },
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
