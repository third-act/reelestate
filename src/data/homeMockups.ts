/** Mockup-bilder i /public/images/mockups/ — använd gemener i filnamn (Linux/Vercel är skiftlägeskänsliga). */
export const homeMockupZigzag = {
  sectionTitle: 'Appen boende möter i vardagen',
  sectionLead:
    'Samma plattform samlar nyheter, bokningar, dokument och ärenden – utan att du behöver växla mellan kanaler.',
  rows: [
    {
      title: 'Överblick, nyheter och bokningar på hem-skärmen',
      body:
        'Se vad som händer i fastigheten, få aviseringar som når fram och håll koll på dina bokningar – till exempel gemensamma utrymmen – direkt när du öppnar appen. Snabbval till felanmälan, event och bopärm gör det enkelt att hitta rätt.',
      image: '/images/mockups/dashboard.png',
      alt: 'Reel Estate-appen: startsida med avisering, bokningar och snabbval',
      imageSide: 'right' as const,
    },
    {
      title: 'Bopärm och fastighetsinfo samlat på ett ställe',
      body:
        'Kontakt till förvaltning, dokument, avtal och praktisk information för hyresgästen – strukturerat och tillgängligt i mobilen. Mindre jakt på PDF:er och mejl, mer tid till det som faktiskt spelar roll i boendet.',
      image: '/images/mockups/boparm.png',
      alt: 'Reel Estate-appen: bopärm med min fastighet och dokument',
      imageSide: 'left' as const,
    },
    {
      title: 'Tydlig felanmälan – rätt kategori på första försöket',
      body:
        'Boende väljer typ av ärende i ett överskådligt gränssnitt så att rätt kompetens kan ta vid. Det minskar friktion för användaren och ger er bättre underlag i förvaltningen.',
      image: '/images/mockups/felanmalan.png',
      alt: 'Reel Estate-appen: felanmälan med kategorier som VVS, el och skador',
      imageSide: 'right' as const,
    },
  ],
} as const

export const homeHeroMockup = {
  src: '/images/mockups/dashboard-angle.png',
  alt: 'Reel Estate boendeapp i telefon med hemvy, bokningar och digital nyckel',
} as const
