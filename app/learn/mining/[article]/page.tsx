import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${articleTitle} | Ethereum Classic`,
    description: `Mining guide: ${articleTitle.toLowerCase()}. Learn about ETC mining.`,
  }
}

export default async function MiningArticlePage({ params }: Props) {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Comprehensive guide to ${articleTitle.toLowerCase()}. Part of our mining guides series to help you mine Ethereum Classic effectively.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Mining Guides', href: '/learn/mining' }}
      relatedLinks={[
        { label: 'Mining Guides', href: '/learn/mining' },
        { label: 'Mining Hub', href: '/mining' },
        { label: 'Mining Pools', href: '/mining/pools' },
      ]}
    />
  )
}
