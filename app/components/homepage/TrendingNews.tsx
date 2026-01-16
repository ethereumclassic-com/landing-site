import Link from 'next/link'

interface NewsCardProps {
  title: string
  date: string
  link: string
}

function NewsCard({ title, date, link }: NewsCardProps) {
  return (
    <a
      href={link}
      className="block rounded-xl border border-[var(--border-soft)] bg-[var(--panel)] p-5 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
    >
      <h3 className="font-medium transition hover:text-[var(--etc)]">{title}</h3>
      <p className="mt-2 text-sm text-white/50">{date}</p>
    </a>
  )
}

export default function TrendingNews() {
  // Stub data - Phase 2 will add actual blog/news system
  const articles = [
    { title: 'Classic OS v1.0 Launches', date: 'January 15, 2026', link: '#' },
    { title: 'ETCswap V3 Now Live', date: 'January 10, 2026', link: '#' },
    { title: 'Fukuii Client Update', date: 'January 5, 2026', link: '#' },
  ]

  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Latest News</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.title} {...article} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="text-[var(--etc)] transition hover:text-[var(--etc)]/80"
          >
            View All News →
          </Link>
        </div>
      </div>
    </section>
  )
}
