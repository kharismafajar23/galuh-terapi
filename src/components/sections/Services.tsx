import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ServicesSlider } from "@/components/sections/ServicesSlider"

export function Services() {
  return (
    <section id="layanan" className="w-full scroll-mt-20 bg-surface-container-low py-16 md:py-24">
      <Container>
        <SectionHeader
          icon="spa"
          badge="Pilihan Perawatan"
          title="Daftar Layanan Terapi Kami"
          description="Dipadukan dengan minyak esensial alami dan teknik terapi terstandarisasi untuk kenyamanan maksimal."
        />
        <ServicesSlider />
      </Container>
    </section>
  )
}
