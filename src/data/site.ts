import type { NavLink } from "@/types/content";

export const siteConfig = {
  name: "Galuh Terapi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Layanan pijat full body, bekam, totok punggung, dan terapi energi di Pajangan, Bantul, Yogyakarta. Terapis bersertifikasi, alat steril, tersedia Home Care.",
  tagline: "Sentuhan Alami, Kedamaian Sejati",
  whatsapp: "6285868637366",
  whatsappDisplay: "0858-6863-7366",
  logo: "/logo.png",
  heroImage: "/images/pijat-6.jpeg",
};

export const navLinks: NavLink[] = [
  { id: "layanan", label: "Layanan" },
  { id: "keunggulan", label: "Keunggulan" },
  { id: "lokasi", label: "Lokasi" },
];

export const waLink = (text?: string) =>
  `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
