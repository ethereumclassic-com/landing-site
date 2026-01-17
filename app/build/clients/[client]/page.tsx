import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ client: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { client } = await params
  const clientName = client
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${clientName} | Ethereum Classic`,
    description: `${clientName} - Ethereum Classic node client. Installation and configuration guide.`,
  }
}

export default async function ClientPage({ params }: Props) {
  const { client } = await params
  const clientName = client
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={clientName}
      description={`${clientName} is an Ethereum Classic node client. Learn about its features, installation process, configuration options, and how to run your own ETC node.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Clients', href: '/build/clients' }}
      relatedLinks={[
        { label: 'All Node Clients', href: '/build/clients' },
        { label: 'Network Info', href: '/build/networks' },
        { label: 'Developer Hub', href: '/build' },
      ]}
    />
  )
}
