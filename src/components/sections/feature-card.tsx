import { cn } from 'cn'

import { IconRing } from '@/components/brand/icon-ring'

type FeatureCardProps = {
  icon?: React.ReactNode
  /** Small gradient numeral shown above the title, e.g. "01". */
  number?: string
  title: string
  children: React.ReactNode
  /** Adds the subtle blue wash used to call out one card in a grid. */
  highlight?: boolean
  footer?: React.ReactNode
  className?: string
}

export function FeatureCard({ icon, number, title, children, highlight, footer, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand-blue',
        highlight && 'border-border-strong bg-[linear-gradient(160deg,#0f2440,var(--card)_60%)]',
        className,
      )}
    >
      {icon && <IconRing aria-hidden="true">{icon}</IconRing>}
      {number && <span className="text-gradient font-heading text-sm">{number}</span>}
      <h3 className="text-lg sm:text-[19px]">{title}</h3>
      <p className="m-0 text-muted-foreground">{children}</p>
      {footer && <div className="mt-auto pt-1.5">{footer}</div>}
    </div>
  )
}
