import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Item = { title: string; body: string }

type Props = {
  title: string
  lead: string
  items: readonly Item[]
  /** 3 kolumner passar t.ex. sex funktioner; 2 för fyra. */
  columns?: 2 | 3
}

export function FeaturesIntroGrid({ title, lead, items, columns = 2 }: Props) {
  const grid =
    columns === 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : 'sm:grid-cols-2 lg:grid-cols-2'
  return (
    <PageSection variant="canvas" border="y" ariaLabelledBy="features-intro-heading">
      <div className={`${PAGE_CONTAINER} py-16 sm:py-20`}>
        <RevealOnScroll>
          <h2
            id="features-intro-heading"
            className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">{lead}</p>
        </RevealOnScroll>
        <ul className={`mt-12 grid gap-6 ${grid}`}>
          {items.map((item) => (
            <RevealOnScroll key={item.title}>
              <li className="rounded-2xl border border-border bg-surface p-6 ring-1 ring-black/[0.03]">
                <div className="mb-3 size-2 rounded-full bg-brand" aria-hidden />
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
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
