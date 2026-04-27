'use client'

import { motion } from 'framer-motion'
import { roadmapStages } from '../data/olympia'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const statusConfig = {
  complete: { label: 'Complete', color: '#00ffae' },
  active: { label: 'Active', color: '#00ffae' },
  research: { label: 'Research', color: '#38bdf8' },
  future: { label: 'Future', color: '#6b7280' },
}

export default function OlympiaRoadmap() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-[var(--text-primary)]">
        Olympia Roadmap
      </motion.h2>
      <motion.p variants={fadeInUp} className="mt-2 text-[var(--color-text-muted)]">
        Five stages from consensus upgrades to permanent protocol integration.
      </motion.p>

      <div className="mt-10 space-y-0">
        {roadmapStages.map((stage, i) => {
          const config = statusConfig[stage.status]
          return (
            <motion.div key={stage.title} variants={fadeInUp} className="relative flex gap-5 pb-8">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className={`h-3 w-3 shrink-0 rounded-full ${stage.status === 'active' ? 'animate-pulse' : ''}`}
                  style={{ backgroundColor: config.color }}
                />
                {i < roadmapStages.length - 1 && (
                  <div className="mt-1 h-full w-px bg-[var(--border)]" />
                )}
              </div>

              <div className="-mt-1 flex-1">
                <div className="flex items-center gap-3">
                  <p className="text-base font-semibold text-[var(--text-primary)]">{stage.title}</p>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      color: config.color,
                      backgroundColor: `${config.color}15`,
                      border: `1px solid ${config.color}30`,
                    }}
                  >
                    {config.label}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {stage.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {stage.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-xs text-[var(--color-text-muted)] before:mr-2 before:content-['·']"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
