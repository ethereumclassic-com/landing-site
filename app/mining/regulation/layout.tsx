import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Regulation and Policy',
  description:
    'How Proof-of-Work mining is regulated where ETC is mined: the US, where the CLARITY Act is pending, EU MiCA, Canada, Central Asia, Asia-Pacific, Middle East.',
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
