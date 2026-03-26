import { faqCta, faqIntro, faqItems } from '../data/faq'
import { PAGE_CONTAINER_NARROW, PAGE_PAD } from '../layout/pageLayout'
import { PageSection } from '../components/layout/PageSection'
import { RevealOnScroll } from '../components/layout/RevealOnScroll'
import { CTARow } from '../components/sections/CTARow'

export function FAQPage() {
  return (
    <>
      <PageSection variant="surface" ariaLabelledBy="faq-page-heading">
        <div className={`${PAGE_CONTAINER_NARROW} py-16 lg:py-20`}>
          <RevealOnScroll>
            <h1
              id="faq-page-heading"
              className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              {faqIntro.title}
            </h1>
            <p className="mt-4 text-center text-muted">{faqIntro.lead}</p>
          </RevealOnScroll>
          <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-border bg-surface px-4 py-1 shadow-sm ring-1 ring-black/[0.03] open:pb-4 open:shadow-md"
            >
              <summary className="cursor-pointer list-none py-4 font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-2">
                  {item.q}
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-canvas text-muted transition group-open:rotate-180"
                    aria-hidden
                  >
                    <svg
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </span>
              </summary>
              <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
          </div>
        </div>
      </PageSection>

      <PageSection variant="canvas" border="t" ariaLabelledBy="faq-cta-heading">
        <div className={`mx-auto w-full max-w-xl py-16 text-center ${PAGE_PAD}`}>
          <RevealOnScroll>
            <h2
              id="faq-cta-heading"
              className="text-xl font-bold text-ink sm:text-2xl"
            >
              {faqCta.title}
            </h2>
            <p className="mt-3 text-muted">{faqCta.body}</p>
            <CTARow
              className="mt-8 justify-center"
              primary={{ to: '/kontakt', label: 'Boka demo' }}
              secondary={{ to: '/kontakt', label: 'Kontakta oss' }}
            />
          </RevealOnScroll>
        </div>
      </PageSection>
    </>
  )
}
