/**
 * Allt innehåll för /priser — ändra priser, paket och texter här.
 * Prismatris: apartmentTiers (belopp i SEK/mån, exkl. moms).
 */

export const pricingHero = {
  title: 'Priser',
  subtitle:
    'Välj en lösning för bostäder eller kommersiella fastigheter. Alla paket inkluderar 60 dagars prova på-period och är enkla att komma igång med.',
  /** Etiketter på växlaren högst upp */
  tabBoende: 'Boende',
  tabKontor: 'Kontor',
} as const

export type PricingTab = 'boende' | 'kontor'

export const homeResidentialIntro = {
  title: 'Priser för bostäder',
  lead:
    'Reel Estate för boende gör det enkelt att samla kommunikation, bokningar, information och administration i en och samma app. Priserna baseras på antal lägenheter och alla paket inkluderar 60 dagars prova på-period.',
} as const

export type HomePlanId = 'bas' | 'plus' | 'premium'

export const homePlans = [
  {
    id: 'bas' as const,
    name: 'Bas',
    description:
      'För föreningar som vill komma igång enkelt med kommunikation och grundläggande administration.',
    recommended: false,
    features: [
      '1 administratör',
      'Boendeapp',
      'Adminportal',
      'Nyheter',
      'Chatt',
      'Gruppchatt',
      'Extern felanmälan',
      'Digital boendepärm',
      'Obegränsat antal bokningsbara utrymmen',
      '60 dagars prova på',
    ],
  },
  {
    id: 'plus' as const,
    name: 'Plus',
    description:
      'För föreningar som vill ha fler möjligheter för samordning, dokument och vardagsfunktioner.',
    recommended: true,
    features: [
      '3 administratörer',
      'Boendeapp',
      'Adminportal',
      'Alla funktioner i Bas',
      'Styrelsepärm',
      'Tjänster och erbjudanden',
      'Obegränsat antal bokningsbara utrymmen',
      '60 dagars prova på',
    ],
  },
  {
    id: 'premium' as const,
    name: 'Premium',
    description:
      'För större eller mer aktiva föreningar som vill samla hela den digitala boendeupplevelsen i en plattform.',
    recommended: false,
    features: [
      'Obegränsat antal administratörer',
      'Boendeapp',
      'Adminportal',
      'Alla funktioner i Plus',
      'Prioriterad support',
      'Obegränsat antal bokningsbara utrymmen',
      '60 dagars prova på',
    ],
  },
] as const

/** Tabellcell: true = ikon ja, false = streck, sträng = visa text */
export type CompareCell = boolean | string

export type CompareRow = {
  label: string
  bas: CompareCell
  plus: CompareCell
  premium: CompareCell
}

export type CompareGroup = {
  title: string
  rows: readonly CompareRow[]
}

export const homeComparisonGroups: readonly CompareGroup[] = [
  {
    title: 'Översikt',
    rows: [
      {
        label: 'Administratörer',
        bas: '1',
        plus: '3',
        premium: 'Obegränsat',
      },
      { label: 'Boendeapp', bas: true, plus: true, premium: true },
      { label: 'Adminportal', bas: true, plus: true, premium: true },
      { label: '60 dagars prova på', bas: true, plus: true, premium: true },
      {
        label: 'Support',
        bas: 'Standard',
        plus: 'Standard',
        premium: 'Prioriterad',
      },
    ],
  },
  {
    title: 'Funktioner',
    rows: [
      { label: 'Nyheter', bas: true, plus: true, premium: true },
      { label: 'Socialt flöde', bas: false, plus: true, premium: true },
      { label: 'Chatt', bas: true, plus: true, premium: true },
      { label: 'Gruppchatt', bas: true, plus: true, premium: true },
      { label: 'Extern felanmälan', bas: true, plus: true, premium: true },
      { label: 'Digital boendepärm', bas: true, plus: true, premium: true },
      { label: 'Styrelsepärm', bas: false, plus: true, premium: true },
      { label: 'Tjänster / erbjudanden', bas: false, plus: true, premium: true },
      {
        label: 'Antal bokningsbara utrymmen',
        bas: 'Obegränsat',
        plus: 'Obegränsat',
        premium: 'Obegränsat',
      },
    ],
  },
] as const

/** Prismatris bostad — justera belopp per rad här (SEK/mån, exkl. moms) */
export const apartmentTiers = [
  { range: '1–25', bas: 250, plus: 350, premium: 450 },
  { range: '26–50', bas: 400, plus: 550, premium: 700 },
  { range: '51–100', bas: 550, plus: 750, premium: 950 },
  { range: '101–150', bas: 700, plus: 950, premium: 1200 },
  { range: '151–200', bas: 850, plus: 1150, premium: 1450 },
  { range: '200+', bas: 1050, plus: 1400, premium: 1750 },
] as const

export const apartmentMatrixIntro = {
  title: 'Priser efter antal lägenheter',
  subtitle: 'Priserna gäller hela föreningen och anges per månad, exklusive moms.',
  footnote:
    'Alla paket inkluderar 60 dagars prova på-period. Därefter löpande månadspris.',
} as const

export const homeAddOnsIntro = {
  title: 'Valfria tillägg',
  subtitle: 'Lägg till funktioner utifrån fastighetens behov.',
} as const

export const homeAddOns = [
  {
    title: 'Digitala lås',
    bullets: [
      'Från 59 kr / dörr / mån',
      'Hårdvara kan tillkomma',
      'Installation offereras separat',
    ],
    showImagePlaceholder: false,
  },
  {
    title: 'Digital bokningstavla',
    bullets: [
      'Från 599 kr / mån',
      'Hårdvara, installation och support kan offereras beroende på upplägg',
    ],
    showImagePlaceholder: true,
  },
] as const

export const officeSection = {
  title: 'Priser för kontor och coworking',
  lead:
    'Reel Estate Kontor är en flexibel lösning för kommersiella fastigheter, coworking-miljöer och moderna kontor. Grundpriset baseras på yta, med möjlighet att lägga till access och fler användare.',
  closing:
    'Passar kontor, coworking spaces och andra kommersiella fastigheter som vill samla kommunikation, bokning, access och fastighetsnära tjänster i en lösning.',
  cardTitle: 'Enkel prismodell för kommersiella fastigheter',
  bullets: [
    'Systemet: 2 kr / kvm / år',
    'Ingår: app, adminportal och alla features',
    'Digitala lås och skåp: 15 kr / st / mån',
    '8 användare ingår',
    'Extra användare: 5 kr / användare / mån',
  ],
} as const

export const officeExample = {
  title: 'Exempel',
  body:
    'För en fastighet på 3 000 kvm blir systemkostnaden 6 000 kr per år. Om ni dessutom har 20 digitala lås eller skåp tillkommer 300 kr per månad. Behöver ni fler än 8 användare tillkommer 5 kr per extra användare och månad.',
} as const

export const onboardingSteps = [
  {
    title: 'Boka demo',
    body: 'Vi går igenom era behov och visar hur Reel Estate fungerar i praktiken.',
  },
  {
    title: 'Behovsanalys',
    body: 'Vi tittar på fastighetens förutsättningar och rekommenderar rätt upplägg.',
  },
  {
    title: 'Uppstart',
    body: 'Vi hjälper er att komma igång med app, adminportal och eventuella tillägg.',
  },
  {
    title: 'Ni är igång',
    body: 'När allt är på plats kan ni börja använda Reel Estate direkt i vardagen.',
  },
] as const

export const onboardingIntro = {
  title: 'Så kommer ni igång',
  lead:
    'Det ska vara enkelt att komma igång. Vi guidar er från första samtal till drift — utan onödig byråkrati.',
} as const

export const pricingFaqIntro = {
  title: 'Vanliga frågor om priser',
  lead: 'Här är svar på det mesta kring paket, provperiod och tillägg. Hör av er om något saknas.',
} as const

export const pricingFaqItems = [
  {
    q: 'Hur fungerar 60 dagars prova på?',
    a: 'Ni får tillgång till valt paket under 60 dagar utan bindning. Därefter går ni över till löpande månadspris enligt prismatrisen, om ni vill fortsätta.',
  },
  {
    q: 'Kan vi byta paket senare?',
    a: 'Ja. Ni kan uppgradera eller nedgradera när behoven ändras. Vi hjälper er att flytta funktioner och användare på ett kontrollerat sätt.',
  },
  {
    q: 'Ingår support?',
    a: 'Ja, support ingår i alla paket för bostad. Premium har prioriterad hantering. Exakt omfattning kan vi gå igenom i demo.',
  },
  {
    q: 'Kan Reel Estate integreras med våra befintliga system?',
    a: 'Vi kan ofta koppla mot eller komplettera system ni redan använder, beroende på leverantör och dataflöden. I behovsanalysen kartlägger vi vad som är möjligt för just er miljö.',
  },
  {
    q: 'Vad kostar digitala lås?',
    a: 'Från 59 kr per dörr och månad, exklusive moms. Hårdvara och installation offereras separat utifrån er fastighet.',
  },
  {
    q: 'Vad kostar Reel Estate för coworking eller kontor?',
    a: 'Kontor prissätts efter yta (2 kr/kvm/år) med tillägg för lås/skåp och extra användare enligt modellen ovan. Boka demo så räknar vi gärna ett exempel utifrån era siffror.',
  },
  {
    q: 'Hur snabbt kan vi komma igång?',
    a: 'Många kommer igång inom några veckor beroende på omfattning, tillägg och hur snabbt ni kan sätta av tid för introduktion och kommunikation mot boende eller hyresgäster.',
  },
  {
    q: 'Behöver vi installera hårdvara?',
    a: 'Grundplattformen är molnbaserad och kräver ingen egen server. För tillägg som digitala lås eller bokningstavla kan hårdvara behövas — det offereras och planeras separat.',
  },
] as const
