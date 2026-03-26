import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { MediaPlaceholder } from '../layout/MediaPlaceholder'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type AddOn = {
  title: string
  bullets: readonly string[]
  showImagePlaceholder: boolean
}

type Intro = { title: string; subtitle: string }

type Props = {
  intro: Intro
  items: readonly AddOn[]
}

export function AddOnGrid({ intro, items }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:py-20`}>
      <RevealOnScroll>
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {intro.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">{intro.subtitle}</p>
      </RevealOnScroll>
      <ul className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
        {items.map((item) => (
          <RevealOnScroll key={item.title}>
            <li className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm ring-1 ring-black/[0.04]">
              {item.showImagePlaceholder ? (
                <div className="border-b border-border p-4 sm:p-5">
                  <MediaPlaceholder aspect="video" label="Bild: digital bokningstavla" />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          </RevealOnScroll>
        ))}
      </ul>
    </div>
  )
}
