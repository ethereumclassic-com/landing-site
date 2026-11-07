/**
 * Terminal recordings of the Linux move steps, made by running those steps on a real node, moved
 * from the release in RECORDED_MOVE to the next. Each plays after the step it shows, named by that
 * step's title on coregeth.com, and a title the mirror no longer has fails the build.
 *
 * The files sit in public/ under RECORDING_DIR: `<id>.webm` and `<id>.mp4` for the recording, and
 * `<id>.png`, its last frame, as the poster and as the image the feeds carry.
 */

import { panelFor, stepIndex } from './moves'

export interface Recording {
  id: string
  /** The Linux step it plays after. */
  step: string
  /** What it shows, in the notes' markup. */
  caption: string
  width: number
  height: number
}

export const RECORDING_DIR = '/news/core-geth-v1-12-to-v1-13-migration'

/** The releases the recordings show, so a later release in the steps above them reads as such. */
export const RECORDED_MOVE = { from: 'v1.12.20', to: 'v1.13.0' } as const

const size = { width: 1200, height: 816 }

export const MOVE_RECORDINGS: readonly Recording[] = [
  {
    id: 'download-and-check',
    step: 'Download the release and check it',
    caption:
      'The node keeps syncing in its own terminal while a second terminal downloads the release and its checksum, and `sha256sum -c` prints `OK`.',
    ...size,
  },
  {
    id: 'record-block-and-id',
    step: "Record the node's block number and ID",
    caption:
      'The block number and ID to keep for later. This node was early in its sync, and the address in its ID, `203.0.113.10`, is one reserved for documentation, set with `GETH_NAT` for the recording.',
    ...size,
  },
  {
    id: 'stop-cleanly',
    step: 'Stop the node cleanly',
    caption:
      "One Ctrl-C in the node's terminal. The log ends with `Blockchain stopped`, and the prompt returns once the process exits.",
    ...size,
  },
  {
    id: 'install-release',
    step: 'Install the release',
    caption:
      'The old binary moves to `geth-v1.12`, the new one installs over `/usr/local/bin/geth`, and `geth version` reports a `v1.13` release.',
    ...size,
  },
  {
    id: 'rename-node-key',
    step: 'Rename the old P2P node key',
    caption: 'After the rename, `ls` shows `nodekey.old-rotated-` and the date where `nodekey` was.',
    ...size,
  },
  {
    id: 'start-node',
    step: 'Start the node',
    caption:
      "Started from a terminal, as the step's note describes: `geth --classic` with `--syncmode full`, which this node already ran with, and `--mess=false`, the MESS setting chosen for it. It comes up with a new ID and resumes syncing where it stopped.",
    ...size,
  },
  {
    id: 'confirm-move',
    step: 'Confirm the move',
    caption:
      'A `v1.13` release, a new ID at the same address and port, peers, and a block number past the one recorded before the move.',
    ...size,
  },
]

export function recordingSrc(recording: Recording, kind: 'webm' | 'mp4' | 'png'): string {
  return `${RECORDING_DIR}/${recording.id}.${kind}`
}

const linux = panelFor('linux')
for (const recording of MOVE_RECORDINGS) stepIndex(linux, recording.step)
