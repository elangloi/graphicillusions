import { cn } from 'cn'

import { Eyebrow } from '@/components/brand/eyebrow'

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'start' | 'center'
  /** Rendered at the end of the row, e.g. a "View all" button. */
  action?: React.ReactNode
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  action,
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div
      className={cn(
        'mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-9',
        centered && 'justify-center text-center',
        className,
      )}
    >
      <div className={cn('flex flex-col gap-3', centered && 'items-center')}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading className={cn(Heading === 'h1' ? 'text-[32px] leading-[1.1] sm:text-[42px]' : 'text-[26px] leading-[1.2] sm:text-[34px]')}>
          {title}
        </Heading>
        {description && <p className="m-0 max-w-[620px] text-lg text-soft">{description}</p>}
      </div>
      {action}
    </div>
  )
}
