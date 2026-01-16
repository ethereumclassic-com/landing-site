import type { Metadata } from 'next'
import { apps } from './data/apps'
import AppCard from './components/AppCard'

export const metadata: Metadata = {
  title: 'Apps | Ethereum Classic',
  description: 'Discover DeFi, tools, and dApps built on Ethereum Classic',
}

export default function AppsPage() {
  const featuredApps = apps.filter((app) => app.featured)
  const categories = ['DeFi', 'Infrastructure', 'Governance', 'Tools'] as const

  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-20 text-center md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Discover the ETC Ecosystem
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Explore DeFi protocols, developer tools, and infrastructure built on Ethereum Classic
          </p>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Featured Apps</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredApps.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="bg-[var(--panel)]">
        {categories.map((category) => {
          const categoryApps = apps.filter((app) => app.category === category)

          if (categoryApps.length === 0) return null

          return (
            <section key={category} className="px-6 py-16 md:px-10 lg:px-12">
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-8 text-2xl font-bold">{category}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryApps.map((app) => (
                    <AppCard key={app.name} app={app} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
