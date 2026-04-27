import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETC Block Reward Countdown | Ethereum Classic',
  description:
    'Live countdown to the next Ethereum Classic block reward reduction (Fifthing). Track era progress, expected date, and emission schedule under ECIP-1017.',
  openGraph: {
    title: 'ETC Block Reward Countdown | Ethereum Classic',
    description:
      'Live countdown to the next ETC fifthing. Track era progress, block reward transition, and expected date under ECIP-1017.',
    type: 'website',
  },
}

export default function BlockRewardCountdownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
