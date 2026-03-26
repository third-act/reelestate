import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'
import type { PricingTab } from '../../data/pricingPage'

type Props = {
  title: string
  subtitle: string
  tabBoendeLabel: string
  tabKontorLabel: string
  activeTab: PricingTab
  onTabChange: (tab: PricingTab) => void
}

export function PricingHero({
  title,
  subtitle,
  tabBoendeLabel,
  tabKontorLabel,
  activeTab,
  onTabChange,
}: Props) {
  const tabBase =
    'relative flex flex-1 items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-6 sm:py-3 sm:text-base'

  return (
    <PageSection variant="surface" border="b">
      <div className={`${PAGE_CONTAINER} py-12 sm:py-16 lg:py-20`}>
        <RevealOnScroll>
          <h1 className="text-balance text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
          <div
            role="tablist"
            aria-label="Välj prisvy: boende eller kontor"
            className="mt-8 w-full rounded-xl border border-border bg-canvas p-1 shadow-inner ring-1 ring-black/[0.03] sm:mt-10"
          >
            <div className="flex w-full gap-1 sm:gap-1.5">
              <button
                type="button"
                role="tab"
                id="pricing-tab-boende"
                aria-selected={activeTab === 'boende'}
                className={`${tabBase} ${
                  activeTab === 'boende'
                    ? 'bg-brand text-white shadow-sm shadow-brand/20'
                    : 'text-muted hover:bg-surface/90 hover:text-ink'
                }`}
                onClick={() => onTabChange('boende')}
              >
                {tabBoendeLabel}
              </button>
              <button
                type="button"
                role="tab"
                id="pricing-tab-kontor"
                aria-selected={activeTab === 'kontor'}
                className={`${tabBase} ${
                  activeTab === 'kontor'
                    ? 'bg-brand text-white shadow-sm shadow-brand/20'
                    : 'text-muted hover:bg-surface/90 hover:text-ink'
                }`}
                onClick={() => onTabChange('kontor')}
              >
                {tabKontorLabel}
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </PageSection>
  )
}
