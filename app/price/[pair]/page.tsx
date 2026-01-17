import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

interface Props {
  params: Promise<{ pair: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params
  const pairName = pair.toUpperCase().replace('-', '/')

  return {
    title: `${pairName} Price | Ethereum Classic`,
    description: `Live ${pairName} price chart and trading data for Ethereum Classic.`,
  }
}

export default async function PricePairPage({ params }: Props) {
  const { pair } = await params
  const pairName = pair.toUpperCase().replace('-', '/')

  return (
    <StubPage
      title={`${pairName} Price`}
      description={`Live ${pairName} price with interactive charts, order book data, and trading information. Track historical prices and analyze market trends.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Price', href: '/price' }}
      relatedLinks={[
        { label: 'All Prices', href: '/price' },
        { label: 'Markets Overview', href: '/markets' },
        { label: 'Price Converter', href: '/converter' },
      ]}
    />
  )
}
