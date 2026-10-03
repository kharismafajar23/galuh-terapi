import { waLink } from "@/data/site";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Galuh Terapi via WhatsApp"
        className="group relative flex h-14 w-14 animate-pulse-soft items-center justify-center rounded-full bg-primary text-on-primary shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <BsWhatsapp size={20} />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-inverse-surface px-space-sm py-1 text-label-sm text-inverse-on-surface opacity-0 shadow-md transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
          Tanya Terapis
        </span>
      </Link>
    </div>
  );
}
