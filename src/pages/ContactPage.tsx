import { demoBullets, CONTACT } from '../data/shared'
import { PAGE_PAD } from '../layout/pageLayout'
import { PageSection } from '../components/layout/PageSection'
import { ContactForm } from '../components/ContactForm'
import { DemoSectionBlock } from '../components/sections/DemoSectionBlock'

export function ContactPage() {
  return (
    <PageSection variant="surface" border="b">
      <DemoSectionBlock
        title="Boka en demo av Reel Estate"
        intro="Boka ett 30-minuters introduktionssamtal där vi går igenom era möjligheter, behov och förutsättningar."
        bullets={demoBullets.contact}
      />

      <section
        className={`mx-auto w-full max-w-xl pb-16 ${PAGE_PAD}`}
        aria-labelledby="demo-form-heading"
      >
        <h2
          id="demo-form-heading"
          className="text-center text-xl font-bold text-ink sm:text-2xl"
        >
          Boka demo
        </h2>
        <p className="mt-3 text-center text-sm text-muted">
          Fyll i formuläret så återkommer vi för att boka in ert samtal.
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-center text-sm text-muted">
          <li>
            <span className="font-medium text-ink">Telefon: </span>
            <a
              href={CONTACT.phoneHref}
              className="text-brand hover:text-brand-hover"
            >
              {CONTACT.phone}
            </a>
          </li>
          <li>
            <span className="font-medium text-ink">E-post: </span>
            <a
              href={CONTACT.emailHref}
              className="text-brand hover:text-brand-hover"
            >
              {CONTACT.email}
            </a>
          </li>
        </ul>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </PageSection>
  )
}
