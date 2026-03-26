import { Link } from 'react-router-dom'
import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type OfficeCopy = {
  title: string
  lead: string
  closing: string
  cardTitle: string
  bullets: readonly string[]
}

type Props = {
  copy: OfficeCopy
}

export function OfficePricingBlock({ copy }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:py-20`}>
      <RevealOnScroll>
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">{copy.lead}</p>
      </RevealOnScroll>
      <div className="mt-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
        <RevealOnScroll>
          <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
            <h3 className="text-lg font-bold text-ink">{copy.cardTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink">
              {copy.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover sm:w-auto sm:px-8"
            >
              Boka demo
            </Link>
          </article>
        </RevealOnScroll>
        <RevealOnScroll className="mt-8 lg:mt-0">
          <p className="text-base leading-relaxed text-muted lg:pt-2">{copy.closing}</p>
        </RevealOnScroll>
      </div>
    </div>
  )
}
