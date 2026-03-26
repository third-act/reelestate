import { PAGE_CONTAINER } from '../../layout/pageLayout'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Tier = {
  range: string
  bas: number
  plus: number
  premium: number
}

type Intro = {
  title: string
  subtitle: string
  footnote: string
}

function formatSek(n: number) {
  return `${n.toLocaleString('sv-SE')} kr`
}

type Props = {
  intro: Intro
  tiers: readonly Tier[]
}

export function ApartmentPriceMatrix({ intro, tiers }: Props) {
  return (
    <div className={`${PAGE_CONTAINER} py-14 sm:py-16 lg:py-20`}>
      <RevealOnScroll>
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {intro.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">{intro.subtitle}</p>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm ring-1 ring-black/[0.03] [-webkit-overflow-scrolling:touch]">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Månadspris per paket efter antal lägenheter
            </caption>
            <thead>
              <tr className="border-b border-border bg-canvas">
                <th scope="col" className="px-4 py-4 font-semibold text-ink lg:px-6">
                  Antal lägenheter
                </th>
                <th scope="col" className="px-3 py-4 text-right font-semibold text-ink lg:px-5">
                  Bas
                  <span className="mt-0.5 block text-xs font-normal text-muted">kr/mån</span>
                </th>
                <th scope="col" className="px-3 py-4 text-right font-semibold text-ink lg:px-5">
                  Plus
                  <span className="mt-0.5 block text-xs font-normal text-muted">kr/mån</span>
                </th>
                <th scope="col" className="px-3 py-4 text-right font-semibold text-ink lg:px-5">
                  Premium
                  <span className="mt-0.5 block text-xs font-normal text-muted">kr/mån</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((row) => (
                <tr key={row.range} className="border-t border-border/80">
                  <th scope="row" className="px-4 py-3.5 font-medium text-ink lg:px-6">
                    {row.range}
                  </th>
                  <td className="px-3 py-3.5 text-right tabular-nums text-ink lg:px-5">
                    {formatSek(row.bas)}
                  </td>
                  <td className="px-3 py-3.5 text-right tabular-nums text-ink lg:px-5">
                    {formatSek(row.plus)}
                  </td>
                  <td className="px-3 py-3.5 text-right tabular-nums text-ink lg:px-5">
                    {formatSek(row.premium)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-muted">{intro.footnote}</p>
        <p className="mt-2 text-center text-xs text-muted lg:hidden">
          Scrolla sidledes för alla kolumner.
        </p>
      </RevealOnScroll>
    </div>
  )
}
