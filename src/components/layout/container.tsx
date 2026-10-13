import { cn } from 'cn'

export function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-4 sm:px-6', className)} {...props} />
}
