import { siteConfig } from "@/data/site"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const data = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: siteConfig.heroImage,
  telephone: `+${siteConfig.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "RT 02, Sendangsari",
    addressLocality: "Pajangan, Bantul",
    addressRegion: "DI Yogyakarta",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: "08:00", closes: "20:00" },
  ],
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
