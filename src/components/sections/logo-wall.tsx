import { Eyebrow } from '@/components/brand/eyebrow'

/** Row of client logos. Until real logos exist each slot is a labelled placeholder. */
export function LogoWall({ title, logos }: { title: string; logos: { name: string; src?: string }[] }) {
  return (
    <div>
      <p className="m-0 mb-5 text-center">
        <Eyebrow>{title}</Eyebrow>
      </p>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(170px,100%),1fr))] gap-4 p-0">
        {logos.map((logo, i) =>
          logo.src ? (
            <li key={i} className="flex min-h-[72px] items-center justify-center rounded-xl border border-border p-3">
              <img src={logo.src} alt={logo.name} className="max-h-12 w-auto" loading="lazy" />
            </li>
          ) : (
            <li
              key={i}
              className="flex min-h-[72px] items-center justify-center rounded-xl border-[1.5px] border-dashed border-border-strong text-[13px] font-semibold tracking-[0.06em] text-dim"
            >
              {logo.name}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
