import { Link } from 'react-router-dom'

type Target = {
  label: string
} & ({ to: string } | { href: string })

function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/i.test(path)
}

function CtaButton({
  target,
  variant,
}: {
  target: Target
  variant: 'primary' | 'secondary'
}) {
  const base =
    variant === 'primary'
      ? 'inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover'
      : 'inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-center text-base font-semibold text-ink transition-colors hover:bg-canvas'

  if ('href' in target) {
    return (
      <a href={target.href} className={base}>
        {target.label}
      </a>
    )
  }
  if (isExternal(target.to)) {
    return (
      <a href={target.to} className={base}>
        {target.label}
      </a>
    )
  }
  return (
    <Link to={target.to} className={base}>
      {target.label}
    </Link>
  )
}

type Props = {
  primary?: Target
  secondary?: Target
  className?: string
}

export function CTARow({ primary, secondary, className = '' }: Props) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      {primary ? <CtaButton target={primary} variant="primary" /> : null}
      {secondary ? <CtaButton target={secondary} variant="secondary" /> : null}
    </div>
  )
}
