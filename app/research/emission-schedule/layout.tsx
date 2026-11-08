import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ETC Emission Schedule',
  description:
    'Ethereum Classic emission curve, block reward reduction schedule, and ECIP-1017 era history. Supply scarcity analysis and inflation rate by era.',
  openGraph: { ...OG_BASE },
}

export default function EmissionScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
