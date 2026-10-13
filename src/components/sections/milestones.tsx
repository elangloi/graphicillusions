export type Milestone = { title: string; detail: string }

/** Numbered list with sky numerals, used for the company's story. */
export function Milestones({ items }: { items: Milestone[] }) {
  return (
    <ol className="m-0 flex list-none flex-col gap-[22px] p-0">
      {items.map((item, i) => (
        <li key={item.title} className="flex gap-4">
          <span className="pt-[3px] font-heading text-sm text-sky" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <b className="block text-[17px]">{item.title}</b>
            <span className="text-muted-foreground">{item.detail}</span>
          </div>
        </li>
      ))}
    </ol>
  )
}
