import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Submit an App | Ethereum Classic',
  description: 'Submit your Ethereum Classic application to be listed in our directory.',
}

export default function SubmitAppPage() {
  return (
    <StubPage
      title="Submit Your App"
      description="Get your Ethereum Classic application listed in our directory. Submit your DeFi protocol, tool, game, or any other ETC-based project for review and inclusion."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'Apps Directory', href: '/apps' },
        { label: 'Build Hub', href: '/build' },
        { label: 'Contact Us', href: '/contact' },
      ]}
    />
  )
}
