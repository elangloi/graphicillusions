import { cn } from 'cn'

/** Highlights part of a heading with the logo's blue → purple gradient. */
export function GradientText({ className, ...props }: React.ComponentProps<'span'>) {
  return <span className={cn('text-gradient', className)} {...props} />
}
