import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

// The /tools layout appends "| Tools — Ethereum Classic" through its title template.
const description =
  'Work out what an Ethereum Classic position is worth. Enter an ETC amount and entry price to see current value, profit or loss, and what the position does across price scenarios.'

export const metadata: Metadata = {
  title: 'ETC Position Calculator',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/tools/calculator' },
  openGraph: {
    ...OG_BASE,
    title: 'ETC Position Calculator — Value, Profit and Price Scenarios',
    description,
  },
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
