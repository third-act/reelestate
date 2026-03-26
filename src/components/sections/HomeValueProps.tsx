import { Link } from 'react-router-dom'
import { homePage } from '../../data/homePage'
import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

export function HomeValueProps() {
  const { sectionEyebrow, sectionLead, blocks, ctaLabel } = homePage.valueProps

  return (
    <PageSection variant="surface" border="y" ariaLabelledBy="home-value-heading">
      <div className={`${PAGE_CONTAINER} py-16 lg:py-20`}>
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="home-value-heading"
              className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {sectionEyebrow}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{sectionLead}</p>
          </div>
        </RevealOnScroll>

        <ul className="mt-14 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10">
          {blocks.map((b) => (
            <RevealOnScroll key={b.title} className="h-full min-h-0">
              <li className="flex h-full min-h-[17rem] flex-col rounded-2xl border border-border bg-canvas p-6 shadow-sm ring-1 ring-black/[0.03] sm:min-h-[18rem] sm:p-8">
                <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{b.body}</p>
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
