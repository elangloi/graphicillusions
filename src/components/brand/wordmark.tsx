import { Link } from 'react-router'
import { cn } from 'cn'

import { site } from '@/content/site'

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn('text-wordmark py-2.5 font-heading text-lg font-bold tracking-[0.02em] uppercase sm:text-[22px]', className)}
    >
      {site.name}
    </Link>
  )
}
