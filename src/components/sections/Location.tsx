import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { LocationInfoCard } from "@/components/cards/LocationInfoCard"
import { ContactCtaCard } from "@/components/cards/ContactCtaCard"

export function Location() {
  return (
    <section id="lokasi" className="w-full scroll-mt-20 bg-surface-container-low py-16 md:py-24">
      <Container>
        <SectionHeader icon="location_on" badge="Kunjungan & Reservasi" title="Lokasi & Informasi" />
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <LocationInfoCard />
          <ContactCtaCard />
        </div>
      </Container>
    </section>
  )
}
