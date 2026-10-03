import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { WhyUs } from "@/components/sections/WhyUs"
import { Gallery } from "@/components/sections/Gallery"
import { Location } from "@/components/sections/Location"
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd"

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Location />
    </>
  )
}
