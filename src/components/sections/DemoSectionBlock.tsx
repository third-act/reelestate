import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Bullet = { title: string; body: string }

type Props = {
  id?: string
  title: string
  intro: string
  bullets: readonly Bullet[]
}

export function DemoSectionBlock({ id, title, intro, bullets }: Props) {
  return (
    <PageSection
      variant="surface"
      id={id}
      className="scroll-mt-24"
      ariaLabelledBy={id ? `${id}-heading` : 'demo-section-heading'}
    >
      <div className={`${PAGE_CONTAINER} py-16 lg:py-20`}>
        <RevealOnScroll>
          <h2
            id={id ? `${id}-heading` : 'demo-section-heading'}
            className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            {intro}
          </p>
          <p className="mt-8 text-center text-sm font-semibold text-ink">
            I samtalet går vi igenom:
          </p>
        </RevealOnScroll>
        <ul className="mx-auto mt-6 max-w-2xl space-y-4">
          {bullets.map((b) => (
            <RevealOnScroll key={b.title}>
              <li className="rounded-xl border border-border bg-canvas p-4 shadow-sm">
                <h3 className="font-semibold text-ink">{b.title}</h3>
                <p className="mt-1 text-sm text-muted">{b.body}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </PageSection>
  )
}
