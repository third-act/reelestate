import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Item = { title: string; body: string }

type Props = {
  title: string
  subtitle: string
  items: readonly Item[]
}

export function BenefitsGrid({ title, subtitle, items }: Props) {
  return (
    <PageSection variant="canvas" ariaLabelledBy="benefits-heading">
      <div className={`${PAGE_CONTAINER} py-16 lg:py-20`}>
        <RevealOnScroll>
          <h2
            id="benefits-heading"
            className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            {subtitle}
          </p>
        </RevealOnScroll>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <RevealOnScroll key={item.title}>
              <li className="rounded-xl border border-border bg-surface p-5 shadow-sm ring-1 ring-black/[0.03]">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </PageSection>
  )
}
