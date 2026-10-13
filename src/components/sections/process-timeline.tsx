import { cn } from 'cn'

import { Eyebrow } from '@/components/brand/eyebrow'
import { IconRing } from '@/components/brand/icon-ring'
import { PhotoPlaceholder } from './photo-placeholder'

export type TimelineStep = {
  icon: React.ReactNode
  eyebrow: string
  title: string
  body: React.ReactNode
  weHandle: string
  yourRole: string
  photo: { label: string; caption: string }
  highlight?: boolean
}

/** Vertical rollout timeline with a gradient rail and "who does what" chips. */
export function ProcessTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute top-8 bottom-8 left-[23px] w-0.5 bg-[linear-gradient(180deg,var(--brand-blue),var(--brand-indigo)_65%,var(--brand-purple))] sm:left-[31px]"
      />
      <ol className="m-0 flex list-none flex-col gap-10 p-0">
        {steps.map((step) => (
          <li key={step.title} className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
            <IconRing size="lg" aria-hidden="true">
              {step.icon}
            </IconRing>
            <div
              className={cn(
                'grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-7 rounded-[18px] border border-border bg-card p-5 sm:p-7',
                step.highlight &&
                  'gradient-rim border-2 border-transparent [--gb-fill:linear-gradient(160deg,#0f2440,var(--card)_60%)]',
              )}
            >
              <div className="flex flex-col gap-3.5">
                <Eyebrow>{step.eyebrow}</Eyebrow>
                <h3 className="text-xl sm:text-2xl">{step.title}</h3>
                <p className="m-0 text-[17px] text-soft">{step.body}</p>
                <RoleChips weHandle={step.weHandle} yourRole={step.yourRole} />
              </div>
              <PhotoPlaceholder label={step.photo.label} caption={step.photo.caption} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function RoleChips({ weHandle, yourRole }: { weHandle: string; yourRole: string }) {
  return (
    <dl className="m-0 flex flex-col gap-2.5 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        <dt className="bg-brand-gradient rounded-full px-3 py-1 text-[13px] font-semibold text-white">We handle</dt>
        <dd className="m-0">{weHandle}</dd>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <dt className="rounded-full border border-border-strong px-3 py-1 text-[13px] font-semibold text-[#d3e0ee]">Your role</dt>
        <dd className="m-0">{yourRole}</dd>
      </div>
    </dl>
  )
}
