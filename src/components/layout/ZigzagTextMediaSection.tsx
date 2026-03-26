import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { MediaPlaceholder } from './MediaPlaceholder'
import { RevealOnScroll } from './RevealOnScroll'

export type ZigzagTextMediaRow = {
  title: string
  body: string
  imageSide: 'left' | 'right'
}

type Props = {
  sectionTitle: string
  sectionLead: string
  rows: readonly ZigzagTextMediaRow[]
  /** Etikett på placeholder-ytor */
  placeholderLabel?: string
}

export function ZigzagTextMediaSection({
  sectionTitle,
  sectionLead,
  rows,
  placeholderLabel = 'Bild kommer',
}: Props) {
  return (
    <section
      className="border-y border-border bg-surface"
      aria-labelledby="zigzag-media-heading"
    >
      <div className={`${PAGE_CONTAINER} pb-4 pt-14 text-center lg:pt-20`}>
        <RevealOnScroll>
          <h2
            id="zigzag-media-heading"
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {sectionTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">{sectionLead}</p>
        </RevealOnScroll>
      </div>

      {rows.map((row) => {
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
                <MediaPlaceholder aspect="4/3" label={placeholderLabel} />
              </RevealOnScroll>
            </div>
          </div>
        )
      })}
    </section>
  )
}
