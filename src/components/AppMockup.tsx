/** Enkel visuell platshållare – byt mot skärmdump eller video senare. */
export function AppMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-md select-none"
      aria-hidden
    >
      <div className="rounded-[1.75rem] border border-border bg-surface p-2 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.12)] ring-1 ring-black/5">
        <div className="overflow-hidden rounded-2xl bg-canvas">
          <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="h-2 w-16 rounded-full bg-border" />
            <div className="w-8" />
          </div>
          <div className="space-y-4 p-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-brand-muted" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 w-3/4 rounded-full bg-border" />
                <div className="h-2 w-1/2 rounded-full bg-border/80" />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface p-3 shadow-sm">
              <div className="mb-2 h-2 w-24 rounded-full bg-brand/40" />
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-border" />
                <div className="h-2 w-5/6 rounded-full bg-border/90" />
                <div className="h-2 w-2/3 rounded-full bg-border/80" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-border bg-surface p-3 shadow-sm">
                <div className="mb-2 size-8 rounded-lg bg-brand-muted" />
                <div className="h-2 w-16 rounded-full bg-border" />
              </div>
              <div className="rounded-lg border border-border bg-surface p-3 shadow-sm">
                <div className="mb-2 size-8 rounded-lg bg-brand-muted" />
                <div className="h-2 w-20 rounded-full bg-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
