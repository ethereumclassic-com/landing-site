import type { Metadata } from 'next'
import { getPoolById } from '../../data/mining'
import { OG_BASE } from '@/lib/seo'

/** The page is a client component, so its metadata lives here. */

interface Props {
  params: Promise<{ pool: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pool: slug } = await params
  const pool = getPoolById(slug)

  if (!pool) {
    return { title: 'Pool Not Found | Ethereum Classic Mining' }
  }

  // Measured rather than assumed: the /mining title template does not reach this
  // segment, because app/mining/pools/layout.tsx sets a plain string title. So the
  // title carries its own context instead of relying on a suffix.
  const description = `${pool.name} mines Ethereum Classic at a ${pool.fee}% fee, paying out from ${pool.minPayout} ETC on ${pool.payoutScheme.join(' and ')}. Server regions, ports and setup.`

  return {
    title: `${pool.name} — Ethereum Classic mining pool`,
    description,
    alternates: { canonical: `https://ethereumclassic.com/mining/pools/${slug}` },
    openGraph: { ...OG_BASE, title: `${pool.name} — Ethereum Classic Mining Pool`, description },
  }
}

export default function MiningPoolLayout({ children }: { children: React.ReactNode }) {
  return children
}
