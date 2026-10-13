import { Eyebrow } from '@/components/brand/eyebrow'
import { Container } from './container'

type PageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
}

/** Centered intro block at the top of an inner page. */
export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section>
      <Container className="flex flex-col items-center gap-5 pt-12 pb-14 text-center sm:pt-16 sm:pb-18">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[960px] text-[32px] leading-[1.1] sm:text-[50px]">{title}</h1>
        {children && <p className="m-0 max-w-[720px] text-lg text-soft sm:text-[19px]">{children}</p>}
      </Container>
    </section>
  )
}
