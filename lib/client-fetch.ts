'use client'

/**
 * Deduplicating client-side fetch.
 *
 * Several components on one page request the same endpoint independently —
 * the homepage asked /api/hashrate twice, once from the hero chart and once
 * from the network overview, for byte-identical payloads that each cost the
 * upstream a stats call plus 56 block reads.
 *
 * A global provider would fix that but make every page pay for data it does
 * not render, so this dedupes at the request instead: concurrent callers share
 * one in-flight promise, and later callers reuse the result until it ages out.
 *
 * TTL defaults to an hour, matching the ISR revalidate on the routes this
 * fronts. There is no value in a browser asking more often than the server is
 * willing to recompute.
 */

const HOUR_MS = 60 * 60 * 1000

type Entry = { at: number; promise: Promise<unknown> }

const cache = new Map<string, Entry>()

export function cachedFetchJson<T>(url: string, ttlMs: number = HOUR_MS): Promise<T> {
  const hit = cache.get(url)
  if (hit && Date.now() - hit.at < ttlMs) {
    return hit.promise as Promise<T>
  }

  const promise = fetch(url)
    .then((r) => {
      if (!r.ok) throw new Error(`${url} ${r.status}`)
      return r.json()
    })
    .catch((err) => {
      // Do not cache a failure: the next caller should get a fresh attempt
      // rather than inheriting an hour-old error.
      cache.delete(url)
      throw err
    })

  cache.set(url, { at: Date.now(), promise })
  return promise as Promise<T>
}

/** Drop a cached entry, so the next call refetches. */
export function invalidateCachedFetch(url: string): void {
  cache.delete(url)
}
