import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

// The /tools layout appends "| Tools — Ethereum Classic" through its title template.
const description =
  'Convert Ethereum Classic to and from major currencies and bitcoin at current rates, including US dollars, pounds, yen, Swiss francs, Canadian and Australian dollars.'

export const metadata: Metadata = {
  title: 'ETC Converter',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/tools/converter' },
  openGraph: {
    ...OG_BASE,
    title: 'ETC Converter — Ethereum Classic to Dollars, Pounds and Bitcoin',
    description,
  },
}

export default function ConverterLayout({ children }: { children: React.ReactNode }) {
  return children
}
