import type { ReactNode } from 'react'

export type PageSectionVariant = 'surface' | 'canvas' | 'elevated'

const variantClass: Record<PageSectionVariant, string> = {
  surface: 'bg-surface',
  canvas: 'bg-canvas',
  elevated: 'bg-surface shadow-sm ring-1 ring-black/[0.04]',
}

export type PageSectionBorder = 'none' | 't' | 'b' | 'y'

const borderClass: Record<PageSectionBorder, string> = {
  none: '',
  t: 'border-t border-border',
  b: 'border-b border-border',
  y: 'border-y border-border',
}

type Props = {
  variant: PageSectionVariant
  border?: PageSectionBorder
  id?: string
  /** Tillgänglighet: koppla sektion till rubrik-id */
  ariaLabelledBy?: string
  className?: string
  children: ReactNode
}

export function PageSection({
  variant,
  border = 'none',
  id,
  ariaLabelledBy,
  className = '',
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${variantClass[variant]} ${borderClass[border]} ${className}`.trim()}
    >
      {children}
    </section>
  )
}
