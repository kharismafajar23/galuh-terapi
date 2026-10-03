import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/data/site";
import Image from "next/image";
import { services } from "@/data/services";

const rituals = ["Pijat Tradisional", "Totok Wajah", "Lulur Herbal"];
const linkClass =
  "text-body-sm text-on-surface-variant transition-colors hover:text-primary";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pb-space-lg pt-space-xl text-on-surface">
      <Container>
        <div className="flex flex-col items-start justify-between gap-space-xl pb-space-xl md:flex-row">
          <div className="max-w-md space-y-space-sm">
            <div className="flex items-center gap-space-sm">
              <Image
                src={siteConfig.logo}
                alt="Logo Galuh Terapi"
                width={60}
                height={60}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-headline-sm font-bold text-primary">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-body-sm leading-relaxed text-on-surface-variant">
              Pijat dan penyembuhan tradisional terpercaya. Mengombinasikan
              kekayaan jamu herbal nusantara dengan terapi relaksasi tubuh
              berstandar klinis higienis.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-space-lg sm:grid-cols-3 md:w-auto">
            <div className="space-y-space-xs">
              <p className="text-label-lg font-bold">Menu</p>
              <ul className="space-y-space-xs">
                {navLinks.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className={linkClass}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-space-xs">
              <p className="text-label-lg font-bold">Daftar Layanan</p>
              <ul className="space-y-space-xs">
                {services.map((item, index) => (
                  <li key={index}>
                    <a href="#layanan" className={linkClass}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 space-y-space-xs sm:col-span-1">
              <p className="text-label-lg font-bold">Konsultasi</p>
              <p className="text-body-sm text-on-surface-variant">
                Reservasi online cepat dan ramah via chat resmi WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-space-sm pt-space-md text-label-sm text-on-surface-variant sm:flex-row">
          <div className="flex items-center gap-space-xs">
            <span>
              © {new Date().getFullYear()} {siteConfig.name} Yogyakarta.{" "}
              {siteConfig.tagline}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
