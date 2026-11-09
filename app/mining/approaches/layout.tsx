import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GPU vs ASIC Mining Approaches',
  description:
    'Compare GPU and ASIC mining on ETC: dedicated and flexible load strategies, scale, and how to choose the approach that fits your operation.',
  keywords: [
    'ETC GPU mining',
    'ETC ASIC mining',
    'Etchash',
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
