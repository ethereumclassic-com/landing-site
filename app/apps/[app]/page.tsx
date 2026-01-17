import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { apps, getAppBySlug } from '../data/apps'
import AppDetailClient from './AppDetailClient'

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
    title: `${app.name} | Ethereum Classic`,
    description: app.description,
  }
}

export default async function AppPage({ params }: Props) {
  const { app: slug } = await params
  const app = getAppBySlug(slug)

  if (!app) {
    notFound()
  }

  return <AppDetailClient app={app} />
}
