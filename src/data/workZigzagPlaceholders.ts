/** Texter för kontor-sidans zigzag-sektion med bildplaceholders — byt till riktiga bilder senare. */
export const workZigzagSection = {
  sectionTitle: 'Reel Estate i kommersiella miljöer',
  sectionLead:
    'Samla bokningar, kommunikation och fastighetsnära tjänster för hyresgäster och besökare — med samma tydliga upplevelse som för boende.',
  rows: [
    {
      title: 'Gemensamma ytor utan friktion',
      body:
        'Låt hyresgäster boka mötesrum, skrivare eller lounge enkelt i appen. Färre mejl och dubbelbokningar — mer struktur i vardagen.',
      imageSide: 'right' as const,
    },
    {
      title: 'Tydlig kommunikation till alla i huset',
      body:
        'Nyheter, driftinformation och erbjudanden når fram där folk faktiskt är. Mindre jakt i inkorgen, bättre serviceupplevelse.',
      imageSide: 'left' as const,
    },
  ],
} as const
