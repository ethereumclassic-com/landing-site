import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fifth Fifthening Countdown | Ethereum Classic',
  description:
    'Live countdown to ETC block 25,000,000 — the Fifth Fifthening where the block reward drops from 2.048 to 1.6384 ETC. Emission curve, annual inflation analysis, supply scarcity, and full era history under ECIP-1017.',
  openGraph: {
    title: 'ETC Fifth Fifthening Countdown',
    description:
      'Live countdown to block 25,000,000. Block reward: 2.048 → 1.6384 ETC. Emission charts, S2F scarcity analysis, and ECIP-1017 era history.',
    type: 'website',
  },
}

export default function FiftheningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
