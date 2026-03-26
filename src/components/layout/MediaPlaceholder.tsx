type Aspect = 'video' | '4/3' | 'square'

const aspectClass: Record<Aspect, string> = {
  video: 'aspect-video',
  '4/3': 'aspect-[4/3]',
  square: 'aspect-square',
}

type Props = {
  /** Visuell proportion — byt inte utan att justera layout */
  aspect?: Aspect
  className?: string
  /** Kort hjälptext; kan döljas visuellt men finnas för aria */
  label?: string
}

export function MediaPlaceholder({
  aspect = 'video',
  className = '',
  label = 'Bild kommer',
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-border bg-canvas ${aspectClass[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 11px,
            #e5e7eb 11px,
            #e5e7eb 12px
          )`,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span className="rounded-lg bg-surface/90 px-3 py-1.5 text-xs font-medium text-muted shadow-sm ring-1 ring-border">
          {label}
        </span>
      </div>
    </div>
  )
}
