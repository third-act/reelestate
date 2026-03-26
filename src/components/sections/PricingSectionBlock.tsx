import { Link } from 'react-router-dom'
import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type BasTier = {
  name: string
  description: string
  priceLines: readonly string[]
  appTitle: string
  appFeatures: readonly string[]
  adminTitle: string
  adminFeatures: readonly string[]
  cta: string
}

type ConnectTier = {
  name: string
  description: string
  priceLines: readonly string[]
  includedNote: string
  extras: readonly string[]
  cta: string
}

export type PricingTier = BasTier | ConnectTier

function isBasTier(t: PricingTier): t is BasTier {
  return 'appFeatures' in t
}

type Props = {
  title: string
  subtitle: string
  footnote: string
  tiers: readonly PricingTier[]
}

export function PricingSectionBlock({ title, subtitle, footnote, tiers }: Props) {
  return (
    <PageSection variant="surface" border="y" ariaLabelledBy="pricing-heading">
      <div className={`${PAGE_CONTAINER} py-16 sm:py-20`}>
        <RevealOnScroll>
          <h2
            id="pricing-heading"
            className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            {subtitle}
          </p>
        </RevealOnScroll>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <RevealOnScroll key={tier.name}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-canvas p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-8">
              <h3 className="text-xl font-bold text-ink">{tier.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {tier.description}
              </p>
              <div className="mt-4 space-y-1 border-b border-border pb-4">
                {tier.priceLines.map((line) => (
                  <p key={line} className="text-sm font-semibold text-ink">
                    {line}
                  </p>
                ))}
              </div>
              {isBasTier(tier) ? (
                <div className="mt-4 flex flex-1 flex-col gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-ink">{tier.appTitle}</p>
                    <ul className="mt-2 list-inside list-disc text-muted">
                      {tier.appFeatures.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{tier.adminTitle}</p>
                    <ul className="mt-2 list-inside list-disc text-muted">
                      {tier.adminFeatures.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex-1">
                  <p className="text-sm font-semibold text-ink">
                    {tier.includedNote}
                  </p>
                  <ul className="mt-2 list-inside list-disc text-sm text-muted">
                    {tier.extras.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
                <Link
                  to="/kontakt"
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand py-3 text-center text-sm font-semibold text-white hover:bg-brand-hover"
                >
                  {tier.cta}
                </Link>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">{footnote}</p>
      </div>
    </PageSection>
  )
}
