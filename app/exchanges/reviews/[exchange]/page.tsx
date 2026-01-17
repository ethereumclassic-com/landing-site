import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ exchange: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { exchange } = await params
  const exchangeName = exchange
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${exchangeName} Review | Ethereum Classic`,
    description: `Detailed review of ${exchangeName} for Ethereum Classic trading. Fees, security, features, and user experience.`,
  }
}

export default async function ExchangeReviewPage({ params }: Props) {
  const { exchange } = await params
  const exchangeName = exchange
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={`${exchangeName} Review`}
      description={`Comprehensive review of ${exchangeName} for Ethereum Classic trading. Learn about trading fees, security features, liquidity, supported pairs, and overall user experience.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchange Reviews', href: '/exchanges/reviews' }}
      relatedLinks={[
        { label: 'All Exchange Reviews', href: '/exchanges/reviews' },
        { label: 'Compare Exchanges', href: '/exchanges/compare' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
