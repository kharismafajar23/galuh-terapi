import { Icon } from "@/components/ui/Icon";
import { siteConfig, waLink } from "@/data/site";
import { BsWhatsapp } from "react-icons/bs";

export function ContactCtaCard() {
  return (
    <div
      id="hubungi-kami"
      className="relative flex scroll-mt-24 flex-col justify-between overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary-container to-on-primary-fixed p-8 text-on-primary shadow-xl sm:p-10 lg:col-span-7 lg:p-12"
    >
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-secondary-container/10 blur-2xl" />
      <div className="pointer-events-none absolute right-6 top-4 text-white/50">
        <Icon name="spa" className="select-none text-[160px] leading-none" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container/20 px-3 py-1 text-label-sm font-semibold text-on-primary-container backdrop-blur-sm">
          <span className="h-2 w-2 animate-ping rounded-full bg-primary-fixed" />
          <span>Konsultasi &amp; Reservasi Mudah</span>
        </div>
        <div className="max-w-xl space-y-3">
          <h3 className="text-headline-lg font-bold tracking-tight text-white">
            Siap Merasakan Relaksasi &amp; Kesegaran Alami?
          </h3>
          <p className="text-base md:text-body-lg leading-relaxed text-on-primary/90">
            Silakan hubungi kami untuk reservasi jadwal klinik atau layanan
            terapis panggil ke rumah (Home Care). Respons cepat dan ramah.
          </p>
        </div>
        <div className="pb-2 pt-4 hidden md:block">
          <span className="mb-1 block text-label-md uppercase tracking-wider text-primary-fixed">
            WhatsApp Langsung
          </span>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-headline-lg font-extrabold tracking-wider text-on-primary-container hover:underline lg:text-display"
          >
            {siteConfig.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-6 pt-8">
        <a
          href={waLink(
            "Halo Galuh Terapi, saya ingin konsultasi dan reservasi",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-surface px-8 py-4 text-headline-sm font-bold text-primary shadow-md transition-all duration-300 hover:bg-surface-bright hover:shadow-lg active:scale-[0.98] sm:w-auto"
        >
          <BsWhatsapp size={24} className="text-primary-container" />
          <span>({siteConfig.whatsappDisplay})</span>
        </a>
        <p className="mt-3 text-label-sm text-on-primary/75">
          *Tersedia sesi konsultasi gratis sebelum menentukan jenis perawatan
          yang sesuai.
        </p>
      </div>
    </div>
  );
}
