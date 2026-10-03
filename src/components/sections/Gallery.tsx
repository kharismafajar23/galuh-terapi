"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const images = Array.from(
  { length: 6 },
  (_, i) => `/images/pijat-${i + 1}.jpeg`,
);

export function Gallery() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section className="w-full scroll-mt-20 bg-white py-16 md:py-24">
      <Container>
        <SectionHeader
          icon="photo_library"
          badge="Galeri"
          title="Dokumentasi Terapi Kami"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {images.map((src) => (
            <a key={src} href={src} data-fancybox="gallery">
              <Image
                src={src}
                alt="Galuh Terapi"
                width={400}
                height={300}
                className="h-48 w-full rounded object-cover transition-opacity hover:opacity-80 md:h-64"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
