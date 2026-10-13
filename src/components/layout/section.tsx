import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

import { Container } from './container'

const sectionVariants = cva('', {
  variants: {
    tone: {
      plain: 'pb-16 sm:pb-24',
      /** Full-bleed darker band with hairline borders, used to break up long pages. */
      band: 'mb-16 border-y border-band-border bg-band py-16 sm:mb-24 sm:py-22',
    },
  },
  defaultVariants: { tone: 'plain' },
})

type SectionProps = React.ComponentProps<'section'> &
  VariantProps<typeof sectionVariants> & { containerClassName?: string }

export function Section({ className, containerClassName, tone, children, ...props }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ tone }), 'scroll-mt-24', className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
