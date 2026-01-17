import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

interface Props {
  params: Promise<{ app: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { app } = await params
  const appName = app
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${appName} | Ethereum Classic`,
    description: `Learn about ${appName}, an application built on Ethereum Classic.`,
  }
}

export default async function AppPage({ params }: Props) {
  const { app } = await params
  const appName = app
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={appName}
      description={`Detailed information about ${appName}, an application built on Ethereum Classic. Learn about its features, how to use it, and how it contributes to the ETC ecosystem.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'Apps Directory', href: '/apps' },
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'Featured Apps', href: '/apps/featured' },
      ]}
    />
  )
}
