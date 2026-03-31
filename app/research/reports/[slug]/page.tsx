import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { reports } from '../../data/research'
import ReportDetailClient from './ReportDetailClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const report = reports.find((r) => r.slug === slug)

  if (!report) {
    return { title: 'Report Not Found | Ethereum Classic' }
  }

  return {
    title: `${report.title} | Ethereum Classic Research`,
    description: report.description,
    alternates: {
      canonical: `https://ethereumclassic.com/research/reports/${report.slug}`,
    },
    openGraph: {
      title: report.title,
      description: report.description,
      url: `https://ethereumclassic.com/research/reports/${report.slug}`,
      type: 'article',
    },
  }
}

export default async function ResearchReportPage({ params }: Props) {
  const { slug } = await params
  const report = reports.find((r) => r.slug === slug)

  if (!report) {
    notFound()
  }

  return <ReportDetailClient report={report} />
}
