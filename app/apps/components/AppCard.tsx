import type { App } from '../data/apps'

interface AppCardProps {
  app: App
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <a
      href={app.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-[var(--border-soft)] bg-[var(--panel)] p-6 transition hover:border-[var(--etc)]/30 hover:bg-[var(--panel-strong)]"
    >
      {app.featured && (
        <div className="absolute right-4 top-4 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-[var(--etc)]">
          Featured
        </div>
      )}

      <div className="mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-xl font-bold text-[var(--etc)]">
          {app.name[0]}
        </div>
      </div>

      <h3 className="text-lg font-semibold transition group-hover:text-[var(--etc)]">
        {app.name}
      </h3>

      <p className="mt-2 text-sm text-white/60">{app.description}</p>

      <div className="mt-4">
        <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
          {app.category}
        </span>
      </div>
    </a>
  )
}
