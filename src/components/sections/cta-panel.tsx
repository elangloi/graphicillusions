import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

import { site } from '@/content/site'
import { ContactActions } from './contact-actions'

const ctaPanelVariants = cva(
  'flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center sm:px-8 sm:py-14',
  {
    variants: {
      variant: {
        muted: 'border border-border bg-muted',
        gradient: 'gradient-rim border-2 border-transparent',
      },
    },
    defaultVariants: { variant: 'muted' },
  },
)

type CtaPanelProps = VariantProps<typeof ctaPanelVariants> & {
  title: React.ReactNode
  children?: React.ReactNode
  className?: string
}

/** Closing call-to-action block with the phone/email buttons. */
export function CtaPanel({ title, children, variant, className }: CtaPanelProps) {
  return (
    <div className={cn(ctaPanelVariants({ variant }), className)}>
      <h2 className="max-w-[760px] text-2xl leading-tight sm:text-[32px]">{title}</h2>
      {children && <p className="m-0 max-w-[620px] text-lg text-soft">{children}</p>}
      <ContactActions align="center" />
      {site.email && (
        <p className="m-0 text-soft">
          Or write to{' '}
          <a href={`mailto:${site.email}`} className="font-semibold text-sky underline-offset-4 hover:underline">
            {site.email}
          </a>
        </p>
      )}
    </div>
  )
}
