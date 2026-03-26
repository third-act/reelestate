import { Link } from 'react-router-dom'
import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Step = { title: string; body: string }

type Props = {
  title: string
  intro: string
  steps: readonly Step[]
  disclaimer: string
  ctaLabel: string
  ctaTo?: string
}

export function ProcessSectionBlock({
  title,
  intro,
  steps,
  disclaimer,
  ctaLabel,
  ctaTo = '/kontakt',
}: Props) {
  return (
    <PageSection variant="canvas" border="y" ariaLabelledBy="process-heading">
      <div className={`${PAGE_CONTAINER} py-16 sm:py-20`}>
        <RevealOnScroll>
          <h2
            id="process-heading"
            className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">{intro}</p>
        </RevealOnScroll>
        <ol className="mt-12 space-y-4">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title}>
              <li className="flex gap-4 rounded-xl border border-border bg-surface p-5 shadow-sm sm:items-start">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm text-muted">{disclaimer}</p>
        <div className="mt-8 text-center">
          <Link
            to={ctaTo}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-hover"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </PageSection>
  )
}
