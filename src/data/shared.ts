/** Byt texter och kontaktuppgifter här – delas mellan sidor och footer. */
export const CONTACT = {
  /** Visas på kontaktsidan (footer visar inte telefon). */
  phone: '079-332 66 08',
  phoneHref: 'tel:+46793326608',
  email: 'info@reelestate.se',
  emailHref: 'mailto:info@reelestate.se',
  company: 'Reel Estate AB',
  addressLines: ['Arena Sergel', 'Malmskillnadsgatan 36', '111 57 Stockholm'],
} as const

export const omReelEstate = {
  title: 'Om Reel Estate',
  paragraphs: [
    'Reel Estate är mer än bara en app — det är en plattform för enklare, smartare och mer integrerad fastighetsförvaltning.',
    'Vi förenklar vardagen, förbättrar upplevelsen för boende och hyresgäster, och effektiviserar förvaltningen genom att samla kommunikation, bokningar, service och fastighetsnära tjänster på ett och samma ställe.',
  ],
} as const

export const footerIntro = {
  paragraphs: [
    'Reel Estate är mer än bara en app — det är en plattform för smartare fastigheter och enklare vardag.',
    'Vi kopplar samman boende, hyresgäster, förvaltning och tjänster med byggnaden för att skapa en bättre upplevelse och effektivare fastighetsdrift.',
  ],
} as const

export const demoBullets = {
  work: [
    { title: 'Nuläge', body: 'Hur det ser ut idag och vad ni vill förbättra.' },
    { title: 'Behov och framtid', body: 'Era mål, visioner och prioriteringar för fastigheten.' },
    { title: 'Demo', body: 'Vi visar hur lösningen fungerar i praktiken.' },
    { title: 'Rådgivning och strategi', body: 'Vi går igenom möjliga vägar framåt utifrån era behov.' },
  ],
  home: [
    { title: 'Nuläge', body: 'Hur det ser ut idag och vad ni vill förbättra.' },
    { title: 'Behov och framtid', body: 'Era visioner och mål för fastigheten.' },
    { title: 'Demo', body: 'Vi visar hur lösningen fungerar och hur den kan förenkla vardagen.' },
    { title: 'Rådgivning och strategi', body: 'Vi utforskar tillsammans vilka möjligheter som passar era förutsättningar.' },
  ],
  contact: [
    { title: 'Nuläge', body: 'Hur det ser ut idag och vad ni vill förbättra.' },
    { title: 'Behov och framtid', body: 'Vilka mål ni har för fastigheten och användarupplevelsen.' },
    { title: 'Demo', body: 'Vi visar hur Reel Estate fungerar i praktiken.' },
    { title: 'Rådgivning och strategi', body: 'Vi diskuterar möjliga vägar framåt utifrån era behov.' },
  ],
} as const
