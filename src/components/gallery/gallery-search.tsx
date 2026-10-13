import { SearchIcon, XIcon } from 'lucide-react'
import { cn } from 'cn'

import { Input } from '@/components/ui/input'

type GallerySearchProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

/** Large rounded search field matching the mocks' gallery search. */
export function GallerySearch({ value, onChange, placeholder = 'Search: boat, carved, wrap, laser…', className }: GallerySearchProps) {
  return (
    <div
      role="search"
      className={cn(
        'flex min-h-14 max-w-[560px] items-center gap-3 rounded-[14px] border border-border bg-muted px-5 focus-within:border-brand-blue',
        className,
      )}
    >
      <SearchIcon className="size-[22px] flex-none text-brand-blue" aria-hidden="true" />
      <Input
        type="search"
        aria-label="Search the gallery"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-auto min-w-0 flex-1 border-0 bg-transparent! p-0 text-base shadow-none focus-visible:ring-0 md:text-base [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="-mr-2 flex size-10 items-center justify-center rounded-full text-dim hover:bg-accent hover:text-white"
        >
          <XIcon className="size-4" />
        </button>
      )}
    </div>
  )
}
