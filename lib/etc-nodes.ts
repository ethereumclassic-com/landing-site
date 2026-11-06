/**
 * The Ethereum Classic nodes etcnodes.org's crawler is connected to, counted by
 * the country each node's address geolocates to.
 *
 * etcnodes.org is the census coregeth.com cites for what the network runs. Its
 * /peers endpoint lists every node the crawler holds a connection to, so the
 * count is of reachable nodes seen by one crawler, not of every node on the
 * network, and the page says so. Only the counts leave this module; no node's
 * address is shown.
 *
 * Read on the server and revalidated hourly. When etcnodes.org cannot be
 * reached the result is null, and the page says the figures are unavailable
 * rather than showing an estimate.
 */

const PEERS = 'https://api.etcnodes.org/peers'
export const NODE_CENSUS_SOURCE = { label: 'etcnodes.org', href: 'https://etcnodes.org' }

interface Peer {
  ip_info?: { country?: string }
}

export interface NodeCensus {
  total: number
  /** Countries with the most nodes, largest first. */
  countries: { name: string; count: number }[]
  /** Every other node, including any whose address did not geolocate. */
  rest: { countries: number; count: number }
  countryCount: number
}

export async function fetchNodeCensus(top = 5): Promise<NodeCensus | null> {
  try {
    const response = await fetch(PEERS, { headers: { Accept: 'application/json' }, next: { revalidate: 3600 } })
    if (!response.ok) throw new Error(`etcnodes.org peers: HTTP ${response.status}`)
    const peers = (await response.json()) as Peer[]
    if (!Array.isArray(peers) || peers.length === 0) throw new Error('etcnodes.org peers: empty list')

    const byCountry = new Map<string, number>()
    let unlocated = 0
    for (const peer of peers) {
      const country = peer.ip_info?.country
      if (country) byCountry.set(country, (byCountry.get(country) ?? 0) + 1)
      else unlocated++
    }
    const ranked = [...byCountry.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    const shown = ranked.slice(0, top)
    const others = ranked.slice(top)

    return {
      total: peers.length,
      countries: shown.map(([name, count]) => ({ name, count })),
      rest: { countries: others.length, count: others.reduce((sum, [, count]) => sum + count, 0) + unlocated },
      countryCount: ranked.length,
    }
  } catch (error) {
    console.error('node census: etcnodes.org unavailable, showing no node figures.', error)
    return null
  }
}
