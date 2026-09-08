/**
 * ALL BRANDING BOR HÄR.
 * Byt namn, färger, typsnitt, kontaktuppgifter – slår igenom överallt.
 * Färgerna exponeras som CSS-variabler i src/styles/global.css.
 */
export const brand = {
  name: 'Reel Estate',
  legalName: 'Reel Estate AB',
  tagline: 'Din verksamhet. Din egen app.',
  description:
    'White-label medlemsappar med community, bokning och nyckellös access – i ditt namn i App Store och Google Play.',

  colors: {
    primary: '#14213D',     // djup marinblå – text, header, mörka ytor
    accent: '#C8E64A',      // gulgrön – används sparsamt: en CTA, mockup-knappar
    background: '#FAF8F3',  // varmvit sidbakgrund
    surface: '#FFFFFF',
    text: '#14213D',
    muted: '#5B6473',
    line: '#E6E2D8',
  },

  fonts: {
    heading: '"Bricolage Grotesque", system-ui, sans-serif',
    body: '"Instrument Sans", system-ui, sans-serif',
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Instrument+Sans:wght@400;500;600&display=swap',
  },

  logoVariant: 'wordmark' as 'wordmark' | 'symbol+wordmark',

  contactEmail: 'max@reelestate.se',
  plausibleDomain: 'reelestate.se',

  customerLine: 'Används redan av fastighetsägare som',

  customerLogos: [
    { name: 'Granitor', src: '/images/logos/granitor.png', width: 72, height: 14 },
    { name: 'Skanska', src: '/images/logos/skanska.png', width: 64, height: 14 },
  ],

  pricing: {
    heading: 'Fast pris. Inga överraskningar.',
    tiers: [
      { name: 'Liten', who: 'Upp till ett par hundra medlemmar', note: 'En plats, en app' },
      { name: 'Mellan', who: 'Flera hundra medlemmar', note: 'Flera platser i samma app' },
      { name: 'Stor', who: 'Tusentals medlemmar', note: 'Flera arenor, egna roller' },
    ],
    principles: [
      'Fast månadspris som följer antal medlemmar',
      'Ingen startavgift',
      'Uppsägning månadsvis',
      'Appen, backoffice och support ingår',
    ],
  },

  /** Funktioner som nämns på startsidan – håll listan ärlig */
  coreFeatures: [
    'Egen app i App Store och Google Play',
    'Community-flöde och direktmeddelanden',
    'Nyheter, push-notiser och events',
    'Bokning',
    'Nyckellös access via Salto och RCO',
    'Erbjudanden och dokument',
    'Backoffice där ni styr allt innehåll',
  ],
};

export type Brand = typeof brand;
