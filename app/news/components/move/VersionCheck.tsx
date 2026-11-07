'use client'

import { useState } from 'react'
import { Tabs } from '@/app/components/ui/Tabs'
import { VERSION_CHECKS } from '../../lib/moves'
import CodeBlock from './CodeBlock'

type CheckId = (typeof VERSION_CHECKS)[number]['id']

/** Each platform's line that reads the release a node runs, from the move steps' last check. */
export default function VersionCheck() {
  const [active, setActive] = useState<CheckId>(VERSION_CHECKS[0].id)
  const check = VERSION_CHECKS.find((candidate) => candidate.id === active) ?? VERSION_CHECKS[0]

  return (
    <div className="my-6">
      <Tabs
        tabs={VERSION_CHECKS.map((candidate) => ({ id: `check-${candidate.id}`, label: candidate.label }))}
        activeTab={`check-${active}`}
        onChange={(id) => setActive(id.slice('check-'.length) as CheckId)}
        aria-label="Platform the node runs on"
        className="flex-wrap"
      />
      <div role="tabpanel" aria-label={check.label} className="mt-3">
        <CodeBlock code={check.line} label={`read the release the node runs, ${check.label}`} />
      </div>
    </div>
  )
}
