/**
 * Public JSON-RPC endpoints for Ethereum Classic and Mordor.
 *
 * What this site publishes today is what answers today. `etc.rivet.link` sat in
 * this site's copy and in its live fetch path after it went offline in late
 * August 2026, which is the failure being corrected here, so an endpoint enters
 * a list below only after it answers `eth_chainId` with the right chain ID.
 *
 * The list is checked in rather than fetched at request time: a remote list read
 * on every render decides where this site reads chain data from, with nothing
 * reviewing the change. Refresh it with
 * `node .local/scratch/rpc/refresh-chainlist.mjs`, which reads
 * ethereum-lists/chains (the data ChainList renders), probes every https endpoint
 * with eth_chainId, and prints what passed. Review the diff, then commit it.
 *
 * Order is accountability, not speed, per the bar in app/build/data/build.ts:
 * endpoints with an operator answerable for uptime first, then endpoints other
 * operators publish.
 */

export const ETC_CHAIN_ID = 61
export const MORDOR_CHAIN_ID = 63

/** ChainList, which core-geth's transition page gives as the recommendation until its own endpoints answer. */
export const CHAINLIST_ETC_URL = 'https://chainlist.org/chain/61'
export const CHAINLIST_MORDOR_URL = 'https://chainlist.org/chain/63'

/** Where the services the ETC Cooperative maintained now continue. */
export const ETC_COOPERATIVE_TRANSITION_URL = 'https://docs.coregeth.com/etc-cooperative-transition/'
export const PUBLIC_JSON_RPC_URL = 'https://docs.coregeth.com/etc-cooperative-transition/#public-json-rpc'

/**
 * Being stood up by the Core-Geth maintainers from ethereumclassic/public-rpc and
 * ethereumclassic/nodes, to replace etc.rivet.link and the Mordor endpoint on the
 * dissolving ETC Cooperative's domain.
 *
 * Neither had a DNS record on 2026-09-17, so neither is published as a recommended
 * endpoint and neither is in the rotation below. When they answer, add them to the
 * head of the arrays and swap them into the copy with
 * .local/scratch/rpc/swap-endpoints.py. core-geth's own page says the same:
 * "Until they answer, ChainList is the recommendation."
 */
export const ETC_RPC_PENDING = 'https://rpc.ethereumclassic.net'
export const MORDOR_RPC_PENDING = 'https://rpc-mordor.ethereumclassic.net'

/** What the site names today, in copy and in code examples. */
export const ETC_RPC_RECOMMENDED = 'https://etc.blockscout.com/api/eth-rpc'
export const MORDOR_RPC_RECOMMENDED = 'https://etc-mordor.blockscout.com/api/eth-rpc'

export interface PublicRpcEndpoint {
  url: string
  /** Who answers for it. */
  operator: string
  /** Date it returned this network's chain ID from eth_chainId, checked from this repository. */
  verifiedChainId: string
}

/**
 * Ethereum Classic, chain 61. The two community endpoints come from ChainList and
 * sit last deliberately: they are a last resort for latest-block detail only, and
 * never a source for network figures, which come from lib/hashrate.ts.
 *
 * All three answered eth_blockNumber at the same height on 2026-09-17, and each
 * accepts eth_sendRawTransaction rather than rejecting the method.
 */
export const ETC_RPC_ENDPOINTS: PublicRpcEndpoint[] = [
  { url: ETC_RPC_RECOMMENDED, operator: 'Blockscout', verifiedChainId: '2026-09-17' },
  { url: 'https://geth-at.etc-network.info', operator: 'etc-network.info', verifiedChainId: '2026-09-17' },
  { url: 'https://etc.etcdesktop.com', operator: 'ETC Desktop', verifiedChainId: '2026-09-17' },
]

/** Mordor, chain 63. */
export const MORDOR_RPC_ENDPOINTS: PublicRpcEndpoint[] = [
  { url: MORDOR_RPC_RECOMMENDED, operator: 'Blockscout', verifiedChainId: '2026-09-17' },
  { url: 'https://geth-mordor.etc-network.info', operator: 'etc-network.info', verifiedChainId: '2026-09-17' },
]

/** Probed and rejected on 2026-09-17, recorded so they are not re-added by hand. */
export const ETC_RPC_REJECTED = [
  { url: 'https://etc.rivet.link', reason: 'no DNS record; offline since late August 2026' },
  { url: 'https://besu-at.etc-network.info', reason: 'answers HTTP 404' },
  { url: 'https://etc.mytokenpocket.vip', reason: 'no response within 8 seconds' },
] as const
