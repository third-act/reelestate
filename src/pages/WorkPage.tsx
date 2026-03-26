import { demoBullets } from '../data/shared'
import { workPage } from '../data/workPage'
import { workZigzagSection } from '../data/workZigzagPlaceholders'
import { ZigzagTextMediaSection } from '../components/layout/ZigzagTextMediaSection'
import { BenefitsGrid } from '../components/sections/BenefitsGrid'
import { DemoSectionBlock } from '../components/sections/DemoSectionBlock'
import { FeaturesIntroGrid } from '../components/sections/FeaturesIntroGrid'
import { PricingSectionBlock } from '../components/sections/PricingSectionBlock'
import { ProcessSectionBlock } from '../components/sections/ProcessSectionBlock'
import { ProductHero } from '../components/sections/ProductHero'
import { WorkValueProps } from '../components/sections/WorkValueProps'

export function WorkPage() {
  return (
    <>
      <ProductHero
        title={workPage.hero.title}
        subtitle={workPage.hero.subtitle}
      />
      <ZigzagTextMediaSection
        sectionTitle={workZigzagSection.sectionTitle}
        sectionLead={workZigzagSection.sectionLead}
        rows={workZigzagSection.rows}
      />
      <WorkValueProps />
      <FeaturesIntroGrid
        title={workPage.featuresIntro.title}
        lead={workPage.featuresIntro.lead}
        items={workPage.featuresIntro.items}
        columns={2}
      />
      <BenefitsGrid
        title={workPage.benefits.title}
        subtitle={workPage.benefits.subtitle}
        items={workPage.benefits.items}
      />
      <ProcessSectionBlock
        title={workPage.process.title}
        intro={workPage.process.intro}
        steps={workPage.process.steps}
        disclaimer={workPage.process.disclaimer}
        ctaLabel={workPage.process.ctaLabel}
      />
      <PricingSectionBlock
        title={workPage.pricing.title}
        subtitle={workPage.pricing.subtitle}
        footnote={workPage.pricing.footnote}
        tiers={workPage.pricing.tiers}
      />
      <DemoSectionBlock
        title={workPage.demo.title}
        intro={workPage.demo.intro}
        bullets={demoBullets.work}
      />
    </>
  )
}
