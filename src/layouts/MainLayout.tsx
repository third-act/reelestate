import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function MainLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (hash) {
        const id = hash.slice(1)
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo(0, 0)
    }, 0)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lg"
      >
        Till huvudinnehåll
      </a>
      <Header />
      <main id="innehall">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
