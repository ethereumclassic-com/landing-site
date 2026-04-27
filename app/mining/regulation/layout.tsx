import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Regulation & Policy — Ethereum Classic',
  description:
    'Global regulatory landscape for ETC mining. Covers the US CLARITY Act, EU MiCA, Central Asia, Canada, Asia-Pacific, and Middle East. PoW mining as a legally defined activity across all major jurisdictions.',
  keywords: [
    'ETC mining regulation',
    'CLARITY Act mining',
    'PoW mining legal',
    'crypto mining policy',
    'ETC mining USA',
    'ETC mining EU',
    'ETChash regulation',
    'mining digital commodity',
    'CFTC mining',
    'made in America crypto mining',
  ],
}

export default function MiningRegulationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
