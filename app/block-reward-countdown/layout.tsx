import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ETC Block Reward Countdown | Ethereum Classic',
  description:
    'Live countdown to the next Ethereum Classic block reward reduction (Fifthing). Track era progress, expected date, and emission schedule under ECIP-1017.',
  openGraph: { ...OG_BASE },
}

export default function BlockRewardCountdownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
