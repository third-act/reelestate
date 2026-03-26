import { omReelEstate } from '../../data/shared'
import { PAGE_CONTAINER_NARROW } from '../../layout/pageLayout'
import { PageSection } from '../layout/PageSection'
import { RevealOnScroll } from '../layout/RevealOnScroll'

type Props = { className?: string }

export function OmReelEstateSection({ className = '' }: Props) {
  return (
    <PageSection
      variant="canvas"
      border="y"
      ariaLabelledBy="om-reel-estate-heading"
      className={`py-16 sm:py-20 ${className}`.trim()}
    >
      <div className={`${PAGE_CONTAINER_NARROW} text-center`}>
        <RevealOnScroll>
          <h2
            id="om-reel-estate-heading"
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {omReelEstate.title}
          </h2>
          <div className="mt-6 space-y-4 text-left text-lg leading-relaxed text-muted sm:text-center">
            {omReelEstate.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </PageSection>
  )
}
