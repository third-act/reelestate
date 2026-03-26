import { Link } from 'react-router-dom'
import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Plan = {
  id: string
  name: string
  description: string
  recommended: boolean
  features: readonly string[]
}

type Props = {
  plans: readonly Plan[]
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 size-4 shrink-0 text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HomePlanGrid({ plans }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:py-20`}>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
          <RevealOnScroll key={plan.id}>
            <article
              className={`relative flex h-full flex-col rounded-2xl border bg-surface p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8 ${
                plan.recommended
                  ? 'border-brand ring-2 ring-brand/25 lg:scale-[1.02]'
                  : 'border-border'
              }`}
            >
              {plan.recommended ? (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
                  Rekommenderad
                </p>
              ) : null}
              <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{plan.description}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm text-ink">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover"
              >
                Boka demo
              </Link>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
