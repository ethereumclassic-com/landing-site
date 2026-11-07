import type { ComponentType } from 'react'
import type { EmbedName } from '../lib/content'
import EnodeChange from './move/EnodeChange'
import MovePhases from './move/MovePhases'
import MoveSteps from './move/MoveSteps'
import VersionCheck from './move/VersionCheck'

/** The component each `::name` line places on the article page. ../lib/content renders the same for the feeds. */
export const EMBED_COMPONENTS: Record<EmbedName, ComponentType> = {
  'version-check': VersionCheck,
  'move-phases': MovePhases,
  'move-steps': MoveSteps,
  'enode-change': EnodeChange,
}
