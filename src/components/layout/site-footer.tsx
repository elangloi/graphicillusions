import { Link } from 'react-router'

import { mainNav, site, fullAddress } from '@/content/site'
import { Container } from './container'

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-wrap justify-between gap-4 py-7 text-sm text-dim">
        <p className="m-0">
          © {year} {site.legalName} · {fullAddress} ·{' '}
          <a href={site.phoneHref} className="text-soft hover:text-white">
            {site.phone}
          </a>
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {mainNav.map((item) => (
            <Link key={item.to} to={item.to} className="text-soft hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  )
}
