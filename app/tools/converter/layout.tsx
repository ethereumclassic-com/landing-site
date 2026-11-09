import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

// The /tools layout appends " | Ethereum Classic" through its title template.
const description =
  'Convert Ethereum Classic to and from US dollars, euros, pounds, yen, Canadian and Australian dollars, Swiss francs, yuan, bitcoin and ether, at current rates.'

export const metadata: Metadata = {
  title: 'ETC Converter',
  description,
  alternates: { canonical: 'https://ethereumclassic.com/tools/converter' },
  openGraph: { ...OG_BASE },
}

export default function ConverterLayout({ children }: { children: React.ReactNode }) {
  return children
}
