import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'
import { AppMockup } from '../AppMockup'
import { CTARow } from './CTARow'

type HeroVisual =
  | 'placeholder'
  | { src: string; alt: string }

type Props = {
  title: string
  subtitle: string
  /** default: placeholder UI. Skicka bild för t.ex. startsidan. */
  visual?: HeroVisual
}

export function ProductHero({ title, subtitle, visual = 'placeholder' }: Props) {
  return (
    <section
      className="border-b border-border bg-surface"
      aria-labelledby="product-hero-heading"
    >
      <div
        className={`grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24 ${PAGE_CONTAINER}`}
      >
        <RevealOnScroll className="max-w-xl">
          <h1
            id="product-hero-heading"
            className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{subtitle}</p>
          <CTARow
            className="mt-8"
            primary={{ to: '/kontakt', label: 'Boka demo' }}
          />
        </RevealOnScroll>
        {visual === 'placeholder' ? (
          <RevealOnScroll className="relative lg:justify-self-end">
            <AppMockup />
          </RevealOnScroll>
        ) : (
          <RevealOnScroll className="flex justify-center lg:justify-end">
            <img
              src={visual.src}
              alt={visual.alt}
              width={900}
              height={1200}
              className="h-auto w-full max-w-[min(100%,340px)] lg:max-w-[380px]"
              loading="eager"
              decoding="async"
            />
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}
