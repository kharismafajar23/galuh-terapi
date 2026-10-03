import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FeatureCard } from "@/components/cards/FeatureCard"
import { features } from "@/data/features"

export function WhyUs() {
  return (
    <section id="keunggulan" className="w-full scroll-mt-20 bg-surface py-16 md:py-24">
      <Container>
        <SectionHeader icon="workspace_premium" badge="Kelebihan Galuh Terapi" title="Kenapa Harus Memilih Kami?" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}
