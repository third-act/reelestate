import { cases } from '../data/cases'
import { CaseCardList } from '../components/sections/CaseCardList'
import { PageSection } from '../components/layout/PageSection'
import { RevealOnScroll } from '../components/layout/RevealOnScroll'
import { PAGE_CONTAINER_NARROW } from '../layout/pageLayout'

export function CasePage() {
  return (
    <PageSection variant="surface" ariaLabelledBy="case-page-heading">
      <div className={`${PAGE_CONTAINER_NARROW} py-16 lg:py-20`}>
        <RevealOnScroll>
          <h1
            id="case-page-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Case
          </h1>
          <p className="mt-3 text-muted">
            Nyheter och samarbeten från Reel Estate.
          </p>
        </RevealOnScroll>
        <div className="mt-12">
          <CaseCardList items={cases} showCta />
        </div>
      </div>
    </PageSection>
  )
}
