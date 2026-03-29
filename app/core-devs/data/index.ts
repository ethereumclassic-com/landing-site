export interface CDCEntry {
  slug: string
  title: string
  date: string
  summary: string
  content: string
  ecipRefs: string[]
  recordingUrl: string | null
  notesUrl: string | null
  forkBlock: number | null
  isPlaceholder?: boolean
  isRejected?: boolean
}

import frontier from './calls/frontier'
import frontierThawing from './calls/frontier-thawing'
import homestead from './calls/homestead'
import daoFork from './calls/dao-fork'
import gasReprice from './calls/gas-reprice'
import dieHard from './calls/die-hard'
import gotham from './calls/gotham'
import defuseDifficultyBomb from './calls/defuse-difficulty-bomb'
import atlantis from './calls/atlantis'
import agharta from './calls/agharta'
import phoenix from './calls/phoenix'
import ecip1051Treasury from './calls/ecip-1051-treasury'
import ecip1049Keccak from './calls/ecip-1049-keccak'
import thanos from './calls/thanos'
import magneto from './calls/magneto'
import ecip1098ProtoTreasury from './calls/ecip-1098-proto-treasury'
import mystique from './calls/mystique'
import spiral from './calls/spiral'
import olympia from './calls/olympia'

// Sorted chronologically by date (oldest first)
export const cdcEntries: CDCEntry[] = [
  frontier,
  frontierThawing,
  homestead,
  daoFork,
  gasReprice,
  dieHard,
  gotham,
  defuseDifficultyBomb,
  atlantis,
  agharta,
  phoenix,
  ecip1051Treasury,
  ecip1049Keccak,
  thanos,
  ecip1098ProtoTreasury,
  magneto,
  mystique,
  spiral,
  olympia,
]
