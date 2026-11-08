import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

// The /tools layout appends " | Ethereum Classic" through its title template.
const description =
  'Work out what an Ethereum Classic position is worth: enter an amount and entry price to see its value, profit or loss, and how it moves across price scenarios.'

export const metadata: Metadata = {
  title: 'ETC Position Calculator',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/tools/calculator' },
  openGraph: { ...OG_BASE },
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
