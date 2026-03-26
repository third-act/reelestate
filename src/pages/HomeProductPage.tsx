import { demoBullets } from '../data/shared'
import { homePage } from '../data/homePage'
import { homeHeroMockup, homeMockupZigzag } from '../data/homeMockups'
import { DemoSectionBlock } from '../components/sections/DemoSectionBlock'
import { FeaturesIntroGrid } from '../components/sections/FeaturesIntroGrid'
import { HomeValueProps } from '../components/sections/HomeValueProps'
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
    </>
  )
}
