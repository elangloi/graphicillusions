import { CameraIcon } from 'lucide-react'
import { cn } from 'cn'

/** Dashed, striped stand-in for a photo the family still needs to supply. */
export function PhotoPlaceholder({ label, caption, className }: { label: string; caption?: string; className?: string }) {
  return (
    <div
      className={cn(
        'bg-stripes flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-[14px] border-[1.5px] border-dashed border-border-strong p-5 text-center text-muted-foreground',
        className,
      )}
    >
      <CameraIcon className="size-7 text-sky" aria-hidden="true" />
      <b className="font-semibold text-[#d3e0ee]">{label}</b>
      {caption && <span>{caption}</span>}
    </div>
  )
}
