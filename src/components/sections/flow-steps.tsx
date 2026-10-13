import { cn } from 'cn'

export type FlowStep = {
  icon: React.ReactNode
  title: string
  body: string
  variant?: 'default' | 'muted' | 'highlight'
}

/** Short left-to-right sequence of cards, e.g. how a missed install gets fixed. */
export function FlowSteps({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4 p-0">
      {steps.map(({ icon, title, body, variant = 'default' }) => (
        <li
          key={title}
          className={cn(
            'flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-[22px] [&_svg]:size-[26px]',
            variant === 'default' && '[&_svg]:text-sky',
            variant === 'muted' && 'border-dashed border-[#4a5f7a] [&_svg]:text-dim',
            variant === 'highlight' &&
              'gradient-rim border-2 border-transparent [--gb-fill:linear-gradient(#0f2440,var(--card))] [&_svg]:text-ice',
          )}
        >
          <span aria-hidden="true">{icon}</span>
          <b className="text-[17px]">{title}</b>
          <span className={variant === 'highlight' ? 'text-soft' : 'text-muted-foreground'}>{body}</span>
        </li>
      ))}
    </ol>
  )
}
