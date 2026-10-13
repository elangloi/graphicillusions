import { cn } from 'cn'

export function Eyebrow({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-[13px] font-semibold tracking-[0.12em] text-sky uppercase', className)}
      {...props}
    />
  )
}
