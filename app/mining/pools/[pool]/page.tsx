import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ pool: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pool } = await params
  const poolName = pool
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${poolName} | Ethereum Classic Mining`,
    description: `Mine Ethereum Classic with ${poolName}. Pool details, fees, and setup guide.`,
  }
}

export default async function PoolPage({ params }: Props) {
  const { pool } = await params
  const poolName = pool
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={poolName}
      description={`Detailed information about ${poolName} for Ethereum Classic mining. Pool statistics, fee structure, payout methods, and configuration guides.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Pools', href: '/mining/pools' }}
      relatedLinks={[
        { label: 'All Mining Pools', href: '/mining/pools' },
        { label: 'Getting Started', href: '/mining/getting-started' },
        { label: 'Mining Hub', href: '/mining' },
      ]}
    />
  )
}
