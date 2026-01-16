import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News | Ethereum Classic',
  description: 'Ethereum Classic ecosystem news and updates',
}

export default function NewsPage() {
  return (
    <main className="px-6 py-32 text-center md:px-10 lg:px-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold md:text-5xl">News</h1>
        <p className="mt-6 text-lg text-white/60">
          Ecosystem news and blog coming in Phase 2
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/80 transition hover:bg-white/10"
          >
            Back to Home
          </Link>
          <Link
            href="/apps"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-6 py-3 font-medium text-white transition hover:bg-emerald-400/20"
          >
            Browse Apps
          </Link>
        </div>
      </div>
    </main>
  )
}
