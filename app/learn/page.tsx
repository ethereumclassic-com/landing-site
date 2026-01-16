import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Learn | Ethereum Classic',
  description: 'Education center for Ethereum Classic',
}

export default function LearnPage() {
  return (
    <main className="px-6 py-32 text-center md:px-10 lg:px-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold md:text-5xl">Learn</h1>
        <p className="mt-6 text-lg text-white/60">
          Education center and guides coming in Phase 2
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/80 transition hover:bg-white/10"
          >
            Back to Home
          </Link>
          <a
            href="https://docs.classicos.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-400/15 px-6 py-3 font-medium text-white transition hover:bg-emerald-400/20"
          >
            Classic OS Docs
          </a>
        </div>
      </div>
    </main>
  )
}
