import { useState, type FormEvent } from 'react'

/** Koppla till backend eller Formspree här. */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div
        className="rounded-2xl border border-border bg-canvas p-8 text-center shadow-sm"
        role="status"
      >
        <p className="font-semibold text-ink">Tack – vi har tagit emot er förfrågan</p>
        <p className="mt-2 text-sm text-muted">
          Vi återkommer för att boka in ert demosamtal. Ersätt denna text när
          formuläret är kopplat till er tjänst.
        </p>
      </div>
    )
  }

  return (
    <form
      className="rounded-2xl border border-border bg-surface p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
            Namn
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-canvas px-3 py-2.5 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
            placeholder="För- och efternamn"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
            E-post
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-canvas px-3 py-2.5 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
            placeholder="du@foretag.se"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
            Meddelande
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            className="mt-1.5 w-full resize-y rounded-lg border border-border bg-canvas px-3 py-2.5 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
            placeholder="Berätta kort om er fastighet och när det passar att bli uppringd."
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full min-h-11 rounded-lg bg-brand py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover sm:w-auto sm:px-8"
      >
        Skicka bokningsförfrågan
      </button>
    </form>
  )
}
