/**
 * Gemensam maxbredd och padding för header, footer och sidinnehåll.
 * Justera maxbredd här om ni vill gå t.ex. smalare eller bredare sitewide.
 */
export const PAGE_MAX = 'max-w-7xl'

export const PAGE_PAD = 'px-4 sm:px-6 lg:px-8'

/** Standardcontainer för de flesta sektioner */
export const PAGE_CONTAINER = `mx-auto w-full ${PAGE_MAX} ${PAGE_PAD}`

/** Smalare reading width för långa texter (FAQ, case-lista, m.m.) */
export const PAGE_CONTAINER_NARROW = `mx-auto w-full max-w-3xl ${PAGE_PAD}`
