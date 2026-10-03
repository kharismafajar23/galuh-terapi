import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { siteConfig, waLink } from "@/data/site";
import type { IconLabel } from "@/types/content";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const trustBadges: IconLabel[] = [
  { label: "Terapis Profesional", icon: "check_circle" },
  { label: "Alat Higienis & Steril", icon: "sanitizer" },
  { label: "Layanan Home Care", icon: "home_pin" },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-24">
      <div className="pointer-events-none absolute -left-20 -top-24 h-96 w-96 rounded-full bg-secondary-container/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-tertiary-fixed/30 blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Teks */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-tertiary-fixed px-4 py-1.5 shadow-sm">
              <Icon name="verified" className="text-[18px] text-tertiary" />
              <span className="text-xs md:text-label-lg font-semibold tracking-wide text-on-tertiary-fixed">
                Promo Kunjungan Pertama! Diskon 15%
              </span>
            </div>

            <h1 className="text-headline-lg font-bold leading-tight tracking-tight text-on-background lg:text-display">
              Sehat Badan, Ringan Langkah,{" "}
              <span className="block text-primary sm:inline">
                Hidup Lebih Bermakna
              </span>
            </h1>

            <p className="max-w-xl text-base md:text-body-lg leading-relaxed text-on-surface-variant">
              Nikmati layanan terapi profesional yang aman dan nyaman. Datang
              langsung ke klinik kami, atau panggil terapis kami ke rumah Anda
              (Home Care).
            </p>

            <div className="flex w-full flex-wrap items-center gap-4 pt-2 sm:w-auto">
              <Link
                href={waLink("Halo Galuh Terapi, saya ingin reservasi jadwal")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary-container px-7 py-3.5 text-label-lg text-on-primary shadow-md transition-all duration-300 hover:bg-primary hover:shadow-lg active:scale-[0.98] sm:w-auto"
              >
                <BsWhatsapp size={20} />
                <span>Pesan Sekarang via WA</span>
              </Link>
              <Link
                href="#layanan"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container-high px-6 py-3.5 text-label-lg text-on-surface transition-all duration-300 hover:bg-surface-variant sm:w-auto"
              >
                <span>Lihat Layanan</span>
                <Icon name="arrow_downward" className="text-base" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-label-sm text-on-surface-variant">
              {trustBadges.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon name={icon} className="text-[18px] text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-2 rotate-1 rounded-xl bg-gradient-to-tr from-secondary-container/40 to-primary-fixed-dim/30 blur-lg" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-container-low shadow-xl sm:aspect-[5/4] lg:aspect-[4/5] md:rounded-xl">
                <Image
                  src={siteConfig.heroImage}
                  alt="Ruang Terapi Galuh Terapi Yogyakarta"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105 object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent" />

                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-lg bg-surface-container-lowest/95 p-3.5 shadow-md backdrop-blur-md sm:right-auto">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <Icon
                      name="star"
                      filled
                      className="text-xl text-on-secondary-container"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-headline-sm font-bold text-on-surface">
                        4.9 / 5
                      </span>
                    </div>
                    <p className="text-label-sm font-medium text-on-surface-variant">
                      Terpercaya di Yogyakarta & Bantul
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
