import { PAGE_CONTAINER, PAGE_CONTAINER_NARROW } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Item = { q: string; a: string }

type Intro = { title: string; lead: string }

type Props = {
  intro: Intro
  items: readonly Item[]
}

export function PricingFaqSection({ intro, items }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:pb-24 lg:pt-20`}>
      <RevealOnScroll>
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {intro.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">{intro.lead}</p>
      </RevealOnScroll>
      <div className={`${PAGE_CONTAINER_NARROW} mt-10`}>
        <div className="space-y-3">
          {items.map((item) => (
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
    </div>
  )
}
