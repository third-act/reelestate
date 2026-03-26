import { Link } from 'react-router-dom'
import { workPage } from '../../data/workPage'
import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

export function WorkValueProps() {
  const { blocks, ctaLabel } = workPage.valueProps
  const [first, ...rest] = blocks

  return (
    <PageSection variant="surface" border="y" ariaLabelledBy="work-value-heading">
      <div className={`${PAGE_CONTAINER} py-16 lg:py-20`}>
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="work-value-heading"
              className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {first.title}
            </h2>
            <p className="mt-2 text-sm font-semibold text-brand">{first.eyebrow}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{first.body}</p>
          </div>
        </RevealOnScroll>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {rest.map((b) => (
            <RevealOnScroll key={b.title}>
              <li className="rounded-2xl border border-border bg-canvas p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-8">
                <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{b.body}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            to="/kontakt"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-hover"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </PageSection>
  )
}
