import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Step = { title: string; body: string }

type Intro = { title: string; lead: string }

type Props = {
  intro: Intro
  steps: readonly Step[]
}

export function OnboardingStepsPricing({ intro, steps }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:py-20`}>
      <RevealOnScroll>
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {intro.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">{intro.lead}</p>
      </RevealOnScroll>
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <RevealOnScroll key={s.title}>
            <li className="relative rounded-2xl border border-border bg-surface p-5 shadow-sm ring-1 ring-black/[0.03] sm:p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          </RevealOnScroll>
        ))}
      </ol>
    </div>
  )
}
