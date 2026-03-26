import { Link } from 'react-router-dom'
import { CONTACT, footerIntro } from '../data/shared'
import { PAGE_CONTAINER } from '../layout/pageLayout'
import { Logo } from './Logo'

const NAV_LINKS = [
  { to: '/', label: 'Startsida' },
  { to: '/kontor', label: 'Kontor' },
  { to: '/priser', label: 'Priser' },
  { to: '/case', label: 'Case' },
  { to: '/kontakt', label: 'Kontakt' },
] as const

const LEGAL = [
  { to: '/anvandarvillkor', label: 'Användarvillkor' },
  { to: '/integritet', label: 'Integritetspolicy' },
] as const

export function Footer() {
  return (
    <footer className="bg-footer text-slate-300" role="contentinfo">
      <div className={`py-12 lg:py-14 ${PAGE_CONTAINER}`}>
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label="Reel Estate – startsida"
            >
              <Logo variant="light" />
            </Link>
            <div className="mt-4 max-w-md space-y-3 text-sm leading-relaxed text-slate-400">
              {footerIntro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <nav aria-label="Sidfot länkar">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sidor
              </p>
              <ul className="mt-3 space-y-2">
                {NAV_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/faq"
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    Vanliga frågor
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Kontakt
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={CONTACT.emailHref}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Besök oss
              </p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-slate-400">
                {CONTACT.company}
                <br />
                {CONTACT.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>

            <nav aria-label="Juridisk information">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Legal
              </p>
              <ul className="mt-3 space-y-2">
                {LEGAL.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <p className="pt-8 text-center text-xs text-slate-500 sm:text-left">
          © 2026 Reel Estate
        </p>
      </div>
    </footer>
  )
}
