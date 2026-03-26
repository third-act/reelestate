import { Link } from 'react-router-dom'
import type { CaseItem } from '../../data/cases'

type Props = {
  items: readonly CaseItem[]
  showCta?: boolean
}

export function CaseCardList({ items, showCta = true }: Props) {
  return (
    <div>
      <ul className="space-y-8">
        {items.map((c) => (
          <li
            key={c.title}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              {c.date}
            </p>
            <h3 className="mt-2 text-lg font-bold text-ink">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {c.excerpt}
            </p>
          </li>
        ))}
      </ul>
      {showCta ? (
        <div className="mt-10 text-center">
          <Link
            to="/kontakt"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-base font-semibold text-ink hover:bg-canvas"
          >
            Se fler case
          </Link>
        </div>
      ) : null}
    </div>
  )
}
