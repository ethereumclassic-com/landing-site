import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GPU vs ASIC Mining Approaches — Ethereum Classic',
  description:
    'Compare GPU and ASIC mining on ETC. Understand dedicated vs flexible load strategies, scale considerations, and how to choose the right approach for your operation.',
  keywords: [
    'ETC GPU mining',
    'ETC ASIC mining',
    'ETChash',
    'Bitmain ETC',
    'Jasminer',
    'iPollo',
    'dedicated mining',
    'flexible load mining',
    'home mining ETC',
    'industrial mining',
  ],
}

export default function MiningApproachesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
