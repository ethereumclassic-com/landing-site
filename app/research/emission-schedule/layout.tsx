import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETC Emission Schedule | Ethereum Classic',
  description:
    'Ethereum Classic emission curve, block reward reduction schedule, and ECIP-1017 era history. Supply scarcity analysis and inflation rate by era.',
  openGraph: {
    title: 'ETC Emission Schedule | Ethereum Classic',
    description:
      'Emission curve, annual issuance, stock-to-flow ratio, and full era history under ECIP-1017. Supply scarcity analysis for Ethereum Classic.',
    type: 'website',
  },
}

export default function EmissionScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
