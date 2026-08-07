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
      title: 'App Not Found | Ethereum Classic',
    }
  }

  return {
    title: `${app.name} — ${app.category} on Ethereum Classic`,
    description: app.longDescription || app.description,
    alternates: {
      canonical: `https://ethereumclassic.com/apps/${app.slug}`,
    },
    openGraph: {
      ...OG_BASE,
      title: `${app.name} — ${app.category} on Ethereum Classic`,
      description: app.description,
      url: `https://ethereumclassic.com/apps/${app.slug}`,
    },
  }
}

const categoryMap: Record<string, string> = {
  DeFi: 'FinanceApplication',
  Infrastructure: 'WebApplication',
  Governance: 'WebApplication',
  Tools: 'WebApplication',
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
        applicationCategory={categoryMap[app.category] || 'WebApplication'}
        offers={{ price: '0', priceCurrency: 'USD' }}
      />
      <AppDetailClient app={app} />
    </>
  )
}
