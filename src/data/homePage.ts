export const homePage = {
  hero: {
    title:
      'Samma plattform – olika appar för boende, kontor och coworking.',
    subtitle:
      'Lås upp det digitala hemmet med Reel Estate — en helhetslösning för kommunikation, bokningar, service och fastighetsnära funktioner, samlat i en och samma app.',
  },
  valueProps: {
    sectionEyebrow: 'Hela huset. En app.',
    sectionLead:
      'Samla viktiga funktioner för fastigheten i en enda digital upplevelse. Med Reel Estate kan boende boka resurser, hantera ärenden, ta del av information och använda tjänster direkt i mobilen.',
    blocks: [
      {
        title: 'Bättre boendeupplevelse',
        body: 'Gör vardagen enklare för både boende, styrelse och förvaltare. Från bokningar och information till kommunikation och felanmälan — allt finns samlat på ett ställe.',
      },
      {
        title: 'En digitalare vardag',
        body: 'När kommunikationen flyttar in i mobilen blir det enklare att nå ut, hålla ihop huset och skapa bättre kontakt mellan människor. Det bidrar till ökad trygghet, mindre friktion och en mer levande boendemiljö.',
      },
      {
        title: 'Nya möjligheter för hela fastigheten',
        body: 'Ge boende tillgång till funktioner som öppning av dörrar, bokning av gemensamma resurser, felanmälan och kommunikation med grannar eller förvaltning. Resultatet är en smidigare vardag och en mer effektiv förvaltning.',
      },
      {
        title: 'Kom igång snabbt',
        body: 'Teknik ska inte vara svårt. Reel Estate anpassas efter fastighetens förutsättningar och gör det enkelt att komma igång med en modern digital boendemiljö.',
      },
    ],
    ctaLabel: 'Kom igång',
  },
  /** Sammanslagen sektion (tidigare Teknik + Fördelar). Paket/priser finns på /priser. */
  digitalBoende: {
    title: 'Teknik och fördelar för det digitala boendet',
    lead:
      'En smidigare vardag för styrelse, förvaltare och boende — med funktioner som förenklar administrationen och en app som gör vardagen enklare för alla i huset.',
    items: [
      {
        title: 'Digitala lås',
        body: 'Slipp nyckelstrul och ge boende tillgång till dörrar och utrymmen direkt via mobilen.',
      },
      {
        title: 'Digital boendepärm',
        body: 'Samla information, dokument och viktiga resurser på ett ställe — tillgängligt digitalt för alla som behöver det.',
      },
      {
        title: 'Fastighetsportal',
        body: 'Administrera fastigheten, kommunicera med boende och hantera ärenden i ett samlat verktyg.',
      },
      {
        title: 'Enkel administration',
        body: 'Hantera fastigheten och de boende digitalt från ett och samma ställe.',
      },
      {
        title: 'Granncommunity',
        body: 'Gör det enklare att kommunicera och skapa kontakt mellan boende i huset.',
      },
      {
        title: 'Erbjudanden',
        body: 'Samla relevanta erbjudanden och förmåner för medlemmar eller hyresgäster.',
      },
      {
        title: 'Delning i vardagen',
        body: 'Gör det enklare att dela resurser, föremål eller tjänster mellan boende.',
      },
      {
        title: 'Bokningar i mobilen',
        body: 'Låt boende boka exempelvis tvättstuga eller andra gemensamma resurser direkt i appen.',
      },
      {
        title: 'Bokningstavla',
        body: 'Komplettera appen med en skärmbaserad tavla i huset så bokning och översikt blir enkelt även utan mobil.',
      },
    ],
  },
  process: {
    title: 'Kom igång med Reel Estate Home',
    intro:
      'Kontakta oss så berättar vi mer om hur ni kan samla smarta och användbara tjänster kopplade till er fastighet i en och samma app.',
    steps: [
      { title: '30 min samtal', body: 'Vi går igenom nuläge, behov och mål.' },
      { title: 'Platsbesök', body: 'Vid behov ser vi över fastighetens förutsättningar tillsammans.' },
      { title: 'Anpassat förslag', body: 'Ni får ett förslag anpassat efter er fastighet och era önskemål.' },
      { title: 'Installation', body: 'När tekniska delar behövs hjälper vi till med implementationen.' },
      { title: 'Kom igång', body: 'När lösningen är på plats kan ni börja använda både app och adminportal.' },
    ],
    disclaimer: 'Beroende på era förutsättningar behövs inte alltid alla steg.',
    ctaLabel: 'Boka introduktion',
  },
  demo: {
    title: 'Vill du veta mer om det digitala boendet?',
    intro:
      'Efter ett första samtal får ni en bättre förståelse för vad digitalisering av fastigheter innebär, vad som är möjligt och vilken väg framåt som passar era behov bäst.',
  },
} as const
