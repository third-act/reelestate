import { useState } from 'react'
import {
  apartmentMatrixIntro,
  apartmentTiers,
  homeAddOns,
  homeAddOnsIntro,
  homeComparisonGroups,
  homePlans,
  homeResidentialIntro,
  officeExample,
  officeSection,
  onboardingIntro,
  onboardingSteps,
  pricingFaqIntro,
  pricingFaqItems,
  pricingHero,
  type PricingTab,
} from '../data/pricingPage'
import { PageSection } from '../components/layout/PageSection'
import { RevealOnScroll } from '../components/layout/RevealOnScroll'
import { AddOnGrid } from '../components/pricing/AddOnGrid'
import { ApartmentPriceMatrix } from '../components/pricing/ApartmentPriceMatrix'
import { ExampleCallout } from '../components/pricing/ExampleCallout'
import { FeatureComparisonTable } from '../components/pricing/FeatureComparisonTable'
import { HomePlanGrid } from '../components/pricing/HomePlanGrid'
import { OfficePricingBlock } from '../components/pricing/OfficePricingBlock'
import { OnboardingStepsPricing } from '../components/pricing/OnboardingStepsPricing'
import { PricingFaqSection } from '../components/pricing/PricingFaqSection'
import { PricingHero } from '../components/pricing/PricingHero'
import { PAGE_CONTAINER } from '../layout/pageLayout'

export function PricingPage() {
  const [activeTab, setActiveTab] = useState<PricingTab>('boende')

  return (
    <>
      <PricingHero
        title={pricingHero.title}
        subtitle={pricingHero.subtitle}
        tabBoendeLabel={pricingHero.tabBoende}
        tabKontorLabel={pricingHero.tabKontor}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div
        role="tabpanel"
        id="pricing-tabpanel"
        aria-labelledby={
          activeTab === 'boende' ? 'pricing-tab-boende' : 'pricing-tab-kontor'
        }
      >
        {activeTab === 'boende' ? (
          <>
            <PageSection variant="canvas" border="y">
              <div className={`${PAGE_CONTAINER} pt-12 sm:pt-14 lg:pt-16`}>
                <RevealOnScroll>
                  <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {homeResidentialIntro.title}
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
                    {homeResidentialIntro.lead}
                  </p>
                </RevealOnScroll>
              </div>
              <HomePlanGrid plans={homePlans} />
            </PageSection>

            <PageSection variant="surface">
              <FeatureComparisonTable groups={homeComparisonGroups} />
            </PageSection>

            <PageSection variant="canvas">
              <ApartmentPriceMatrix intro={apartmentMatrixIntro} tiers={apartmentTiers} />
            </PageSection>

            <PageSection variant="surface">
              <AddOnGrid intro={homeAddOnsIntro} items={homeAddOns} />
            </PageSection>
          </>
        ) : (
          <PageSection variant="canvas" border="y">
            <OfficePricingBlock copy={officeSection} />
            <ExampleCallout title={officeExample.title} body={officeExample.body} />
          </PageSection>
        )}
      </div>

      <PageSection variant="surface">
        <OnboardingStepsPricing intro={onboardingIntro} steps={onboardingSteps} />
      </PageSection>

      <PageSection variant="canvas" border="b">
        <PricingFaqSection intro={pricingFaqIntro} items={pricingFaqItems} />
      </PageSection>
    </>
  )
}
