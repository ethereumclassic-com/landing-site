'use client'

import { motion } from 'framer-motion'

interface TrustCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

function TrustCard({ title, description, icon, index }: TrustCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className="group text-center"
    >
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all group-hover:scale-110 group-hover:bg-[var(--color-primary)]/20">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{description}</p>
    </motion.div>
  )
}

const ShieldIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CubeIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
)

const ScaleIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>
)

export default function TrustSignals() {
  const signals = [
    {
      title: 'Security',
      description: 'PoW-secured, battle-tested since 2015',
      icon: <ShieldIcon />,
    },
    {
      title: 'Longevity',
      description: '9+ years continuous operation',
      icon: <ClockIcon />,
    },
    {
      title: 'EVM Compatible',
      description: 'Ethereum tooling works on ETC',
      icon: <CubeIcon />,
    },
    {
      title: 'Immutable',
      description: 'Code is law, no contentious forks',
      icon: <ScaleIcon />,
    },
  ]

  return (
    <section className="px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
            Core Values
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Why Ethereum Classic?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Built on principles of decentralization, immutability, and censorship resistance
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => (
            <TrustCard key={signal.title} {...signal} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
