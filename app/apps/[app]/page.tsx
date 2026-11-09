import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { apps, getAppBySlug } from '../data/apps'
import { SoftwareJsonLd } from '@/app/components/JsonLd'
import AppDetailClient from './AppDetailClient'
import { OG_BASE } from '@/lib/seo'

interface Props {
  params: Promise<{ app: string }>
}

export async function generateStaticParams() {
  return apps.map((app) => ({
    app: app.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { app: slug } = await params
  const app = getAppBySlug(slug)

  if (!app) {
    return {
      title: 'App Not Found',
    }
  }

  return {
    // The section template adds " | Ethereum Classic", so the title carries the app alone.
    title: `${app.name}: ${app.category}`,
    description: app.description,
    alternates: {
      canonical: `https://ethereumclassic.com/apps/${app.slug}`,
    },
    openGraph: {
      ...OG_BASE,
      url: `https://ethereumclassic.com/apps/${app.slug}`,
    },
  }
}

/**
 * schema.org application categories Google supports for SoftwareApplication. WebApplication is a
 * subtype rather than a category, so it is not used: node clients, explorers and RPC listings are
 * developer software.
 */
const categoryMap: Record<string, string> = {
  DeFi: 'FinanceApplication',
  Infrastructure: 'DeveloperApplication',
  Governance: 'FinanceApplication',
  Tools: 'DeveloperApplication',
  Payments: 'FinanceApplication',
}

export default async function AppPage({ params }: Props) {
  const { app: slug } = await params
  const app = getAppBySlug(slug)

  if (!app) {
    notFound()
  }

  return (
    <>
      <SoftwareJsonLd
        name={app.name}
        description={app.description}
        url={app.link}
        applicationCategory={categoryMap[app.category] || 'UtilitiesApplication'}
      />
      <AppDetailClient app={app} />
    </>
  )
}
