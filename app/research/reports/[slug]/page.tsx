import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${title} | Ethereum Classic Research`,
    description: `Research report: ${title.toLowerCase()}. Ethereum Classic analysis and insights.`,
  }
}

export default async function ResearchReportPage({ params }: Props) {
  const { slug } = await params
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={title}
      description="This research report is being prepared. Our team is conducting thorough analysis to bring you valuable insights about the Ethereum Classic ecosystem."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Reports', href: '/research/reports' }}
      relatedLinks={[
        { label: 'All Reports', href: '/research/reports' },
        { label: 'Research Hub', href: '/research' },
        { label: 'Network Analysis', href: '/research/network' },
      ]}
    />
  )
}
