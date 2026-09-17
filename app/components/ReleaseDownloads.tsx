import type { ClientRelease } from '@/lib/core-geth'

/**
 * A client release's downloadable files, one row per platform, each linked to the
 * file attached to the release. Shared by /build/clients/[client] and the Olympia
 * client guides, so both list the same files.
 */
export function ReleaseDownloads({ release }: { release: ClientRelease }) {
  return (
    <div>
      <ul className="divide-y divide-[var(--border)] overflow-hidden rounded-lg border border-[var(--border)]">
        {release.downloads.map(({ platform, requirement, files }) => (
          <li key={platform} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-3 py-2">
            <span className="text-sm text-[var(--text-primary)]">
              {platform}
              {requirement && <span className="ml-2 text-xs text-[var(--color-text-muted)]">{requirement}</span>}
            </span>
            <span className="flex min-w-0 flex-wrap gap-x-3 gap-y-1">
              {files.map((file) => (
                <a
                  key={file.name}
                  href={file.url}
                  className="font-mono text-xs text-[var(--color-primary)] [overflow-wrap:anywhere] hover:underline"
                >
                  {file.name}
                </a>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-[var(--color-text-muted)]">
        {release.note}{' '}
        <a
          href={release.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--color-primary)] hover:underline"
        >
          {release.version} release notes →
        </a>
      </p>
    </div>
  )
}
