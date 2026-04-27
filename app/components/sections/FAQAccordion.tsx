'use client'

import {
  forwardRef,
  useState,
  useCallback,
  type HTMLAttributes,
} from 'react'
import { Container } from '../layout/Container'
import { FadeIn } from '../ui'

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
    <div className="border-b border-[var(--border-default)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[var(--brand-green)]"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-[var(--text-primary)]">
          {item.question}
        </span>
        <span
          className={[
            'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
            'border border-[var(--border-default)] transition-all duration-300',
            isOpen && 'rotate-45 border-[var(--brand-green)] bg-[var(--brand-green)]/10',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <svg aria-hidden="true"
            className={[
              'h-4 w-4 transition-colors',
              isOpen
                ? 'text-[var(--brand-green)]'
                : 'text-[var(--text-secondary)]',
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

      {/* CSS grid-rows animation for smooth height transition */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pr-12 text-sm leading-relaxed text-[var(--text-secondary)]">
            {item.answer}
          </div>
        </div>
      </div>
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
        aria-labelledby={title ? 'faq-accordion-heading' : undefined}
        className={[
          'py-16 md:py-24',
          'bg-[var(--background)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <Container size="lg">
          {(title || subtitle) && (
            <FadeIn>
              <div className="mb-12 text-center">
                {subtitle && (
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--brand-green)]">
                    {subtitle}
                  </p>
                )}
                {title && (
                  <h2 id="faq-accordion-heading" className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                    {title}
                  </h2>
                )}
              </div>
            </FadeIn>
          )}

          <FadeIn delay={100}>
            <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-6">
              {items.map((item, index) => (
                <FAQItemComponent
                  key={index}
                  item={item}
                  isOpen={openItems.has(index)}
                  onToggle={() => toggleItem(index)}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>
    )
  }
)

FAQAccordion.displayName = 'FAQAccordion'

export default FAQAccordion
