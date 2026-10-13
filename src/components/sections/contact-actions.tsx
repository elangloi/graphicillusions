import { cn } from 'cn'

import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

/** Primary "Call" button for contact sections. */
export function ContactActions({ className, align = 'start' }: { className?: string; align?: 'start' | 'center' }) {
  return (
    <div className={cn('flex flex-wrap gap-3', align === 'center' && 'justify-center', className)}>
      <Button asChild>
        <a href={site.phoneHref}>Call {site.phone}</a>
      </Button>
    </div>
  )
}
