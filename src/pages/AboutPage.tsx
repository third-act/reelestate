import { OmReelEstateSection } from '../components/sections/OmReelEstateSection'
import { CTARow } from '../components/sections/CTARow'
import { PageSection } from '../components/layout/PageSection'
import { RevealOnScroll } from '../components/layout/RevealOnScroll'
import { PAGE_CONTAINER_NARROW } from '../layout/pageLayout'

export function AboutPage() {
  return (
    <>
      <OmReelEstateSection />
      <PageSection variant="surface" border="b">
        <div className={`${PAGE_CONTAINER_NARROW} py-14 text-center sm:py-16`}>
          <RevealOnScroll>
            <p className="text-muted">
              Vill ni veta hur plattformen kan användas i er fastighet?
            </p>
            <CTARow
              className="mt-6 justify-center"
              primary={{ to: '/kontakt', label: 'Boka demo' }}
              secondary={{ to: '/kontakt', label: 'Kontakta oss' }}
            />
          </RevealOnScroll>
        </div>
      </PageSection>
    </>
  )
}
