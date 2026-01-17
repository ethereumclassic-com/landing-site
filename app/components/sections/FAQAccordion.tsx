'use client'

import {
  forwardRef,
  useState,
  useCallback,
  type HTMLAttributes,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../layout/Container'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQAccordionProps extends HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  items: FAQItem[]
  allowMultiple?: boolean
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const accordionContent = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' as const },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' as const },
  },
}

function FAQItemComponent({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[var(--border)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[var(--color-primary)]"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-[var(--color-text-primary)]">
          {item.question}
        </span>
        <span
          className={[
            'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
            'border border-[var(--border)] transition-all duration-300',
            isOpen && 'rotate-45 border-[var(--color-primary)] bg-[var(--color-primary)]/10',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <svg
            className={[
              'h-4 w-4 transition-colors',
              isOpen
                ? 'text-[var(--color-primary)]'
                : 'text-[var(--color-text-secondary)]',
            ]
              .filter(Boolean)
              .join(' ')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={accordionContent}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-12 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQAccordion = forwardRef<HTMLElement, FAQAccordionProps>(
  (
    {
      title,
      subtitle,
      items,
      allowMultiple = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set())

    const toggleItem = useCallback(
      (index: number) => {
        setOpenItems((prev) => {
          const newSet = new Set(prev)

          if (newSet.has(index)) {
            newSet.delete(index)
          } else {
            if (!allowMultiple) {
              newSet.clear()
            }
            newSet.add(index)
          }

          return newSet
        })
      },
      [allowMultiple]
    )

    return (
      <section
        ref={ref}
        className={[
          'py-16 md:py-24',
          'bg-[var(--color-bg-primary)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <Container size="lg">
          {(title || subtitle) && (
            <motion.div
              className="mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              {subtitle && (
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
                  {title}
                </h2>
              )}
            </motion.div>
          )}

          <motion.div
            className="mx-auto max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            {items.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </motion.div>
        </Container>
      </section>
    )
  }
)

FAQAccordion.displayName = 'FAQAccordion'

export default FAQAccordion
