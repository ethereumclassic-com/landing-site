import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Investment Calculator | Ethereum Classic',
  description: 'Calculate ETC investment returns. Historical and projected analysis.',
}

export default function ToolsCalculatorPage() {
  return (
    <StubPage
      title="Investment Calculator"
      description="Calculate potential returns on Ethereum Classic investments. Analyze historical performance, project future values, and compare with other assets."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Tools', href: '/tools' }}
      relatedLinks={[
        { label: 'Price Converter', href: '/tools/converter' },
        { label: 'ETC Price', href: '/price' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
