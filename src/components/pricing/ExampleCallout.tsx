import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Props = {
  title: string
  body: string
}

export function ExampleCallout({ title, body }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} pb-14 sm:pb-16 lg:pb-20`}>
      <RevealOnScroll>
        <div className="rounded-2xl border border-brand/25 bg-brand-muted/50 p-6 shadow-sm ring-1 ring-brand/10 sm:p-8 lg:p-10">
          <h3 className="text-lg font-bold text-ink sm:text-xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
        </div>
      </RevealOnScroll>
    </div>
  )
}
