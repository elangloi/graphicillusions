import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import type { CategoryFilter as Filter } from '@/lib/search'

type CategoryFilterProps = {
  categories: readonly string[]
  value: Filter
  onChange: (value: Filter) => void
}

/** Single-select chip row; scrolls sideways on phones instead of wrapping. */
export function CategoryFilter({ categories, value, onChange }: CategoryFilterProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(next) => onChange((next || 'All') as Filter)}
      aria-label="Filter by category"
      className="-mr-4 flex w-auto max-w-none gap-2.5 overflow-x-auto pr-4 pb-1.5 [scrollbar-width:none] sm:mr-0 sm:flex-wrap sm:overflow-visible sm:pr-0"
    >
      {['All', ...categories].map((name) => (
        <ToggleGroupItem
          key={name}
          value={name}
          className="h-auto min-h-11 flex-none rounded-full! border border-border-strong bg-transparent px-4 text-[15px] font-semibold whitespace-nowrap text-soft hover:bg-accent hover:text-white data-[state=on]:border-transparent data-[state=on]:bg-brand-gradient data-[state=on]:text-white"
        >
          {name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
