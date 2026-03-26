import mockupBoparm from '../assets/mockups/boparm.png'
import mockupDashboard from '../assets/mockups/dashboard.png'
import mockupDashboardAngle from '../assets/mockups/dashboard-angle.png'
import mockupFelanmalan from '../assets/mockups/felanmalan.png'

/** Mockups importeras via Vite → stabila /assets/-URL:er (undviker SPA-rewrite som bröt /public/images på Vercel). */
export const homeMockupZigzag = {
  sectionTitle: 'Appen boende möter i vardagen',
  sectionLead:
    'Samma plattform samlar nyheter, bokningar, dokument och ärenden – utan att du behöver växla mellan kanaler.',
  rows: [
    {
      title: 'Överblick, nyheter och bokningar på hem-skärmen',
      body:
        'Se vad som händer i fastigheten, få aviseringar som når fram och håll koll på dina bokningar – till exempel gemensamma utrymmen – direkt när du öppnar appen. Snabbval till felanmälan, event och bopärm gör det enkelt att hitta rätt.',
      image: mockupDashboard,
      alt: 'Reel Estate-appen: startsida med avisering, bokningar och snabbval',
      imageSide: 'right' as const,
    },
    {
      title: 'Bopärm och fastighetsinfo samlat på ett ställe',
      body:
        'Kontakt till förvaltning, dokument, avtal och praktisk information för hyresgästen – strukturerat och tillgängligt i mobilen. Mindre jakt på PDF:er och mejl, mer tid till det som faktiskt spelar roll i boendet.',
      image: mockupBoparm,
      alt: 'Reel Estate-appen: bopärm med min fastighet och dokument',
      imageSide: 'left' as const,
    },
    {
      title: 'Tydlig felanmälan – rätt kategori på första försöket',
      body:
        'Boende väljer typ av ärende i ett överskådligt gränssnitt så att rätt kompetens kan ta vid. Det minskar friktion för användaren och ger er bättre underlag i förvaltningen.',
      image: mockupFelanmalan,
      alt: 'Reel Estate-appen: felanmälan med kategorier som VVS, el och skador',
      imageSide: 'right' as const,
    },
  ],
} as const

export const homeHeroMockup = {
  src: mockupDashboardAngle,
  alt: 'Reel Estate boendeapp i telefon med hemvy, bokningar och digital nyckel',
} as const
