import { Link } from 'react-router-dom'
import { cases } from '../data/cases'
import { PAGE_CONTAINER_NARROW } from '../layout/pageLayout'
import { PageSection } from '../components/layout/PageSection'
import { RevealOnScroll } from '../components/layout/RevealOnScroll'
import { demoBullets } from '../data/shared'
import { homePage } from '../data/homePage'
import { homeHeroMockup, homeMockupZigzag } from '../data/homeMockups'
import { CaseCardList } from '../components/sections/CaseCardList'
import { DemoSectionBlock } from '../components/sections/DemoSectionBlock'
import { FeaturesIntroGrid } from '../components/sections/FeaturesIntroGrid'
import { HomeValueProps } from '../components/sections/HomeValueProps'
import { OmReelEstateSection } from '../components/sections/OmReelEstateSection'
import { ProcessSectionBlock } from '../components/sections/ProcessSectionBlock'
import { ProductHero } from '../components/sections/ProductHero'
import { ZigzagMockupSection } from '../components/sections/ZigzagMockupSection'

export function HomeProductPage() {
  return (
    <>
      <ProductHero
        title={homePage.hero.title}
        subtitle={homePage.hero.subtitle}
        visual={{
          src: homeHeroMockup.src,
          alt: homeHeroMockup.alt,
        }}
      />
      <OmReelEstateSection />
      <ZigzagMockupSection
        sectionTitle={homeMockupZigzag.sectionTitle}
        sectionLead={homeMockupZigzag.sectionLead}
        rows={homeMockupZigzag.rows}
      />
      <HomeValueProps />
      <FeaturesIntroGrid
        title={homePage.digitalBoende.title}
        lead={homePage.digitalBoende.lead}
        items={homePage.digitalBoende.items}
        columns={3}
      />
      <ProcessSectionBlock
        title={homePage.process.title}
        intro={homePage.process.intro}
        steps={homePage.process.steps}
        disclaimer={homePage.process.disclaimer}
        ctaLabel={homePage.process.ctaLabel}
      />
      <DemoSectionBlock
        title={homePage.demo.title}
        intro={homePage.demo.intro}
        bullets={demoBullets.home}
      />

      <PageSection variant="canvas" border="y" ariaLabelledBy="case-teaser-heading">
        <div className={`${PAGE_CONTAINER_NARROW} py-16 sm:py-20`}>
          <RevealOnScroll>
            <h2
              id="case-teaser-heading"
              className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Case
            </h2>
            <p className="mt-3 text-center text-muted">
              <Link
                to="/case"
                className="font-semibold text-brand hover:text-brand-hover"
              >
                Visa alla case
              </Link>
            </p>
          </RevealOnScroll>
          <div className="mt-10">
            <CaseCardList items={cases} showCta />
          </div>
        </div>
      </PageSection>
    </>
  )
}
