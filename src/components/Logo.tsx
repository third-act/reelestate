/** Logotyp: byt filnamn i /public/images om ni uppdaterar till SVG. */
const SRC = {
  light: '/images/logo-light-bg.png',
  dark: '/images/logo-dark-bg.png',
} as const

type LogoProps = {
  /** light = för ljus bakgrund, dark = för mörk bakgrund (t.ex. footer) */
  variant: 'light' | 'dark'
  className?: string
}

export function Logo({ variant, className = '' }: LogoProps) {
  return (
    <img
      src={SRC[variant]}
      alt="Reel Estate"
      className={`h-8 w-auto sm:h-9 ${className}`}
      width={180}
      height={36}
      decoding="async"
    />
  )
}
