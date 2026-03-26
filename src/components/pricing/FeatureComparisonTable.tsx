import { Fragment } from 'react'
import type { CompareCell, CompareGroup } from '../../data/pricingPage'
import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'

function Cell({ value }: { value: CompareCell }) {
  if (value === true) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-muted text-brand" aria-label="Ja">
        <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    )
  }
  if (value === false) {
    return <span className="text-muted">—</span>
  }
  return <span className="text-sm font-medium text-ink">{value}</span>
}

type Props = {
  groups: readonly CompareGroup[]
}

export function FeatureComparisonTable({ groups }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:py-20`}>
      <RevealOnScroll>
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm ring-1 ring-black/[0.03] [-webkit-overflow-scrolling:touch]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Jämförelse av funktioner mellan paketen Bas, Plus och Premium
            </caption>
            <thead>
              <tr className="border-b border-border bg-canvas">
                <th scope="col" className="px-4 py-4 font-semibold text-ink lg:px-6">
                  Funktion
                </th>
                <th scope="col" className="px-3 py-4 text-center font-semibold text-ink lg:px-5">
                  Bas
                </th>
                <th scope="col" className="px-3 py-4 text-center font-semibold text-ink lg:px-5">
                  Plus
                </th>
                <th scope="col" className="px-3 py-4 text-center font-semibold text-ink lg:px-5">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="bg-canvas/80">
                    <th
                      colSpan={4}
                      scope="colgroup"
                      className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-muted lg:px-6"
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-t border-border/80">
                      <th scope="row" className="px-4 py-3.5 font-medium text-ink lg:px-6">
                        {row.label}
                      </th>
                      <td className="px-3 py-3.5 text-center lg:px-5">
                        <Cell value={row.bas} />
                      </td>
                      <td className="px-3 py-3.5 text-center lg:px-5">
                        <Cell value={row.plus} />
                      </td>
                      <td className="px-3 py-3.5 text-center lg:px-5">
                        <Cell value={row.premium} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-xs text-muted lg:hidden">
          Scrolla sidledes för hela tabellen.
        </p>
      </RevealOnScroll>
    </div>
  )
}
