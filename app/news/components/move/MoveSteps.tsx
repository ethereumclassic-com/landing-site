'use client'

import { useState } from 'react'
import { Tabs } from '@/app/components/ui/Tabs'
import { InlineText } from '../ArticleInline'
import { MOVE_PANELS, MOVE_SOURCE, type MovePanel, type PanelId, type PhaseKey, stepPhases } from '../../lib/moves'
import { MOVE_RECORDINGS } from '../../lib/recordings'
import CodeBlock from './CodeBlock'
import { PHASE_STYLES } from './phase-styles'
import TerminalRecording from './TerminalRecording'

/** Where a phase begins, marked above the step that begins it. */
const PHASE_START: Partial<Record<PhaseKey, string>> = {
  stopped: 'The node is stopped from here',
  moved: 'The node runs v1.13 from here',
}

function StepList({ panel, withRecordings }: { panel: MovePanel; withRecordings: boolean }) {
  const phases = stepPhases(panel)

  return (
    <>
      <ol className="relative ml-4 mt-8 space-y-10 border-l border-[var(--border)] pl-8">
        {panel.steps.map((step, index) => {
          const phase = phases[index]
          const style = PHASE_STYLES[phase]
          const begins = index > 0 && phases[index - 1] !== phase ? PHASE_START[phase] : undefined
          return (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-sm tabular-nums ${style.badge}`}
              >
                {index + 1}
              </span>
              {begins && (
                <p className={`mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${style.text}`}>
                  {begins}
                </p>
              )}
              <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              {step.before && (
                <p className="mt-3 leading-relaxed text-[var(--color-text-secondary)]">
                  <InlineText text={step.before} />
                </p>
              )}
              {step.code && <CodeBlock code={step.code} label={step.title} />}
              {step.after && (
                <p className="mt-3 leading-relaxed text-[var(--color-text-secondary)]">
                  <InlineText text={step.after} />
                </p>
              )}
              {withRecordings &&
                MOVE_RECORDINGS.filter((recording) => recording.step === step.title).map((recording) => (
                  <TerminalRecording key={recording.id} recording={recording} />
                ))}
            </li>
          )
        })}
      </ol>
      <p className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
        <a
          href={MOVE_SOURCE.page}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--color-primary)] hover:underline"
        >
          The same steps on coregeth.com/downloads →
        </a>
        {panel.guide && (
          <a
            href={panel.guide.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-primary)] hover:underline"
          >
            {panel.guide.label} on docs.coregeth.com →
          </a>
        )}
      </p>
    </>
  )
}

/** coregeth.com's move steps for every platform, in tabs, with a copy button on every block. */
export default function MoveSteps() {
  const [platform, setPlatform] = useState<PanelId>('linux')
  const [sourcePlatform, setSourcePlatform] = useState<PanelId>('linux')
  const panel = MOVE_PANELS.find((candidate) => candidate.id === platform) ?? MOVE_PANELS[0]
  const nested = panel.panels?.find((candidate) => candidate.id === sourcePlatform) ?? panel.panels?.[0]

  return (
    <div className="my-8">
      <Tabs
        tabs={MOVE_PANELS.map((candidate) => ({ id: `move-${candidate.id}`, label: candidate.label }))}
        activeTab={`move-${panel.id}`}
        onChange={(id) => setPlatform(id.slice('move-'.length) as PanelId)}
        aria-label="Platform the node runs on"
        className="flex-wrap"
      />
      <div role="tabpanel" aria-label={`${panel.heading} steps`}>
        {panel.intro?.map((text) => (
          <p key={text} className="mt-6 leading-relaxed text-[var(--color-text-secondary)]">
            <InlineText text={text} />
          </p>
        ))}
        {panel.panels && nested ? (
          <>
            <Tabs
              tabs={panel.panels.map((candidate) => ({ id: `move-source-${candidate.id}`, label: candidate.label }))}
              activeTab={`move-source-${nested.id}`}
              onChange={(id) => setSourcePlatform(id.slice('move-source-'.length) as PanelId)}
              aria-label="Platform to build on"
              variant="underline"
              className="mt-6"
            />
            <div role="tabpanel" aria-label={`Build from source on ${nested.heading}`}>
              <StepList panel={nested} withRecordings={false} />
            </div>
          </>
        ) : (
          <StepList panel={panel} withRecordings={panel.id === 'linux'} />
        )}
      </div>
    </div>
  )
}
