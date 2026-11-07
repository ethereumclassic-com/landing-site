/**
 * What the Core-Geth migration article derives from coregeth.com's move steps, which
 * lib/core-geth-moves.ts mirrors. Each lookup names a step by its title on coregeth.com and
 * throws when the mirror has no such step, so a re-mirror that renames one fails the build
 * rather than dropping a diagram, a check or a recording without a word.
 */

import { MOVE_PANELS, MOVE_SOURCE, type MovePanel } from '@/lib/core-geth-moves'

export { MOVE_PANELS, MOVE_SOURCE }
export type { MovePanel }
export type PanelId = MovePanel['id']

export function panelFor(id: PanelId, panels: readonly MovePanel[] = MOVE_PANELS): MovePanel {
  const panel = panels.find((candidate) => candidate.id === id)
  if (!panel) throw new Error(`coregeth.com's move steps have no ${id} tab`)
  return panel
}

export function stepIndex(panel: MovePanel, title: string): number {
  const index = panel.steps.findIndex((step) => step.title === title)
  if (index < 0) throw new Error(`coregeth.com's ${panel.label} move steps have no "${title}" step`)
  return index
}

const STOP_STEP = 'Stop the node cleanly'
/** The step that starts the node on the new release: a new container, on the containers tab. */
const START_STEPS = ['Start the node', 'Replace the container']
const CONFIRM_STEP = 'Confirm the move'

export type PhaseKey = 'running' | 'stopped' | 'moved'

/** Each step's phase: before the stop, from the stop to the start, and from the start. */
export function stepPhases(panel: MovePanel): PhaseKey[] {
  const stop = stepIndex(panel, STOP_STEP)
  const start = panel.steps.findIndex((step, index) => index > stop && START_STEPS.includes(step.title))
  if (start < 0) throw new Error(`coregeth.com's ${panel.label} move steps never start the node after "${STOP_STEP}"`)
  return panel.steps.map((_, index) => (index < stop ? 'running' : index < start ? 'stopped' : 'moved'))
}

// Every tab with steps of its own is read here, so a re-mirror that breaks one fails the build.
for (const panel of MOVE_PANELS) {
  for (const tab of panel.panels ?? [panel]) stepPhases(tab)
}

export interface Phase {
  key: PhaseKey
  label: string
  /** Each step with its number in the Linux tab. */
  steps: { number: number; title: string }[]
}

export const PHASE_LABELS: Record<PhaseKey, string> = {
  running: 'While the node runs',
  stopped: 'While the node is stopped',
  moved: 'Once it runs v1.13',
}

const linux = panelFor('linux')
const linuxPhases = stepPhases(linux)

/** The Linux steps, split where the node stops and where it starts again. */
export const MOVE_PHASES: readonly Phase[] = (['running', 'stopped', 'moved'] as const).map((key) => ({
  key,
  label: PHASE_LABELS[key],
  steps: linux.steps
    .map((step, index) => ({ number: index + 1, title: step.title, phase: linuxPhases[index] }))
    .filter((step) => step.phase === key)
    .map(({ number, title }) => ({ number, title })),
}))

/** Captions the article page and the feeds share, in the notes' markup. */
export const PHASES_CAPTION =
  'The Linux steps, split where the node stops and where it starts again. Everything before the stop happens while the node keeps running.'
export const ENODE_CAPTION =
  'In `enode://<node ID>@<IP>:30303`, the move changes the node ID and keeps the address and the port.'

/**
 * The first line of each platform's "Confirm the move" block, which reads the release a node runs:
 * from the running node itself, or for a container from the binary inside it. A plain `geth version`
 * reads whichever binary is first on `PATH`, and that need not be the one a service starts.
 */
export const VERSION_CHECKS = (['linux', 'macos', 'windows', 'containers'] as const).map((id) => {
  const panel = panelFor(id)
  const line = panel.steps[stepIndex(panel, CONFIRM_STEP)].code?.split('\n')[0]
  if (!line) throw new Error(`coregeth.com's ${panel.label} "${CONFIRM_STEP}" step has no block`)
  return { id, label: panel.label, line }
})
