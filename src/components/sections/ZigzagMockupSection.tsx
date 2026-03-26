import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Row = {
  title: string
  body: string
  image: string
  alt: string
  imageSide: 'left' | 'right'
}

type Props = {
  sectionTitle: string
  sectionLead: string
  rows: readonly Row[]
}

export function ZigzagMockupSection({ sectionTitle, sectionLead, rows }: Props) {
  return (
    <PageSection
      variant="surface"
      border="y"
      ariaLabelledBy="mockup-zigzag-heading"
    >
      <div className={`${PAGE_CONTAINER} pb-4 pt-14 text-center lg:pt-20`}>
        <RevealOnScroll>
          <h2
            id="mockup-zigzag-heading"
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {sectionTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">{sectionLead}</p>
        </RevealOnScroll>
      </div>

      {rows.map((row, i) => {
        const textFirstDesktop = row.imageSide === 'right'
        return (
          <div
            key={row.title}
            className="border-t border-dashed border-border/60 bg-surface first:border-t-0"
          >
            <div
              className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20`}
            >
              <RevealOnScroll
                className={
                  textFirstDesktop
                    ? 'order-2 lg:order-1 lg:max-w-xl lg:justify-self-end'
                    : 'order-2 lg:order-2 lg:max-w-xl lg:justify-self-start'
                }
              >
                <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {row.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {row.body}
                </p>
              </RevealOnScroll>
              <RevealOnScroll
                className={
                  textFirstDesktop
                    ? 'order-1 mb-10 lg:order-2 lg:mb-0 lg:justify-self-start'
                    : 'order-1 mb-10 lg:order-1 lg:mb-0 lg:justify-self-end'
                }
              >
                <img
                  src={row.image}
                  alt={row.alt}
                  width={750}
                  height={1624}
                  className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </RevealOnScroll>
            </div>
          </div>
        )
      })}
    </PageSection>
  )
}
