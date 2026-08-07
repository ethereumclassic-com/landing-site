import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ETC Block Reward Countdown | Ethereum Classic',
  description:
    'Live countdown to the next Ethereum Classic block reward reduction (Fifthing). Track era progress, expected date, and emission schedule under ECIP-1017.',
  openGraph: {
    ...OG_BASE,
    title: 'ETC Block Reward Countdown | Ethereum Classic',
    description:
      'Live countdown to the next ETC fifthing. Track era progress, block reward transition, and expected date under ECIP-1017.',
  },
}

export default function BlockRewardCountdownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
