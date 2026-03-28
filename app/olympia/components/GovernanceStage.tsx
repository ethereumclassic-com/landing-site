'use client'

import { motion } from 'framer-motion'
import { governanceFlow, governanceStages, type GovernanceStep } from '../data/olympia'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

function IconSvg({ name, className }: { name: string; className?: string }) {
  const props = { className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (name) {
    case 'FileText':
      return <svg {...props}><path d="M15 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z" /><path d="M14 2v4a2 2 0 002 2h4" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
    case 'Vote':
      return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 8.9 3 12 0v-5" /></svg>
    case 'Timer':
      return <svg {...props}><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2" /><path d="M5 3L2 6" /><path d="M22 6l-3-3" /><path d="M12 2v2" /></svg>
    case 'Zap':
      return <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    case 'Eye':
      return <svg {...props}><path d="M2.062 12.348a1 1 0 010-.696 10.75 10.75 0 0119.876 0 1 1 0 010 .696 10.75 10.75 0 01-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
    default:
      return null
  }
}

function FlowStep({ step, index }: { step: GovernanceStep; index: number }) {
  return (
    <motion.div variants={fadeInUp} className="relative flex flex-col items-center text-center">
      {/* Number badge */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00ffae]/30 bg-[#00ffae]/10">
        <IconSvg name={step.icon} className="h-5 w-5 text-[#00ffae]" />
      </div>

      {/* Connector line (not on last item) */}
      {index < governanceFlow.length - 1 && (
        <div className="absolute left-[calc(50%+24px)] top-6 hidden h-px w-[calc(100%-48px)] bg-gradient-to-r from-[#00ffae]/30 to-[var(--border)] lg:block" />
      )}

      <h3 className="mt-3 text-sm font-semibold text-white">{step.title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-muted)]">
        {step.description}
      </p>
    </motion.div>
  )
}

function StageProgressBar() {
  return (
    <motion.div variants={fadeInUp} className="mt-12">
      <h3 className="text-lg font-semibold text-white">Governance Evolution</h3>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        Olympia governance matures through five stages.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {governanceStages.map((stage) => {
          const statusColor =
            stage.status === 'active' ? '#00ffae' : stage.status === 'next' ? '#38bdf8' : '#6b7280'

          return (
            <div
              key={stage.name}
              className="flex items-center gap-2 rounded-lg border px-3 py-2"
              style={{
                borderColor: `${statusColor}30`,
                backgroundColor: `${statusColor}08`,
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: statusColor }}
              />
              <span className="text-sm font-medium" style={{ color: statusColor }}>
                {stage.number}. {stage.name}
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">{stage.description}</span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function GovernanceStageComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <h2 className="text-2xl font-bold text-white">From Proposal to Execution</h2>
      <p className="mt-2 text-[var(--color-text-muted)]">
        Five stages from idea to execution — every step on-chain, transparent, and auditable.
      </p>

      {/* Flow steps */}
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {governanceFlow.map((step, i) => (
          <FlowStep key={step.title} step={step} index={i} />
        ))}
      </div>

      {/* Stage progression */}
      <StageProgressBar />
    </motion.div>
  )
}
