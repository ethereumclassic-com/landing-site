'use client'

import { motion } from 'framer-motion'
import ECIPCard from './ECIPCard'
import { coreEcips, futureEcips } from '../data/ecips'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

interface ECIPGridProps {
  showFuture?: boolean
}

export default function ECIPGrid({ showFuture = false }: ECIPGridProps) {
  return (
    <div className="space-y-12">
      {/* Core ECIPs */}
      <div>
        <h2 className="text-2xl font-bold text-white">Core ECIPs</h2>
        <p className="mt-2 text-[var(--color-text-muted)]">
          These specifications define the Olympia upgrade and activate together at the fork block.
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {coreEcips.map((ecip) => (
            <ECIPCard key={ecip.id} ecip={ecip} />
          ))}
        </motion.div>
      </div>

      {/* Future ECIPs */}
      {showFuture && futureEcips.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-white">Future Governance Layers</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            These specifications are in draft status and require separate governance approval before activation.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {futureEcips.map((ecip) => (
              <ECIPCard key={ecip.id} ecip={ecip} />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  )
}
