import { useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PAGE_CONTAINER } from '../layout/pageLayout'
import { Logo } from './Logo'

const NAV = [
  { to: '/kontor', label: 'Kontor' },
  { to: '/priser', label: 'Priser' },
  { to: '/kontakt', label: 'Kontakt' },
] as const

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-brand-muted text-ink'
      : 'text-muted hover:bg-brand-muted/60 hover:text-ink'
  }`

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className={`flex items-center justify-between gap-4 py-3 ${PAGE_CONTAINER}`}>
        <NavLink
          to="/"
          end
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-label="Reel Estate – startsida"
          onClick={() => setOpen(false)}
        >
          <Logo variant="dark" />
        </NavLink>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Huvudmeny"
        >
          {NAV.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navClass}>
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/kontakt"
            className="ml-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover"
          >
            Boka demo
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <NavLink
            to="/kontakt"
            className="rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white hover:bg-brand-hover"
          >
            Boka demo
          </NavLink>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border bg-surface text-ink hover:bg-canvas"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Stäng' : 'Meny'}</span>
            {open ? (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-surface px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-brand-muted text-ink' : 'text-ink hover:bg-canvas'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
