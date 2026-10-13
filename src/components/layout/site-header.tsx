import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { MenuIcon, PhoneIcon } from 'lucide-react'
import { cn } from 'cn'

import { Wordmark } from '@/components/brand/wordmark'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { mainNav, primaryCta, site } from '@/content/site'
import { Container } from './container'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('py-3 font-medium text-soft transition-colors hover:text-white', isActive && 'text-white')

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex items-center justify-between gap-4 py-3 lg:py-5">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <NavLink key={item.to} to={item.to} end className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <Button asChild>
            <Link to={primaryCta.to}>{primaryCta.label}</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(320px,85vw)] border-border bg-card">
            <SheetHeader>
              <SheetTitle className="text-wordmark font-heading uppercase">{site.name}</SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col px-4">
              {mainNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-12 items-center border-b border-border text-lg font-medium text-soft hover:text-white',
                      isActive && 'text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild>
                  <Link to={primaryCta.to} onClick={() => setOpen(false)}>
                    {primaryCta.label}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.phoneHref}>
                    <PhoneIcon data-icon="inline-start" />
                    Call {site.phone}
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
