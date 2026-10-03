"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";

import { ServiceCard } from "@/components/cards/ServiceCard";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";

const arrowClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface-variant bg-surface-container-lowest text-primary cursor-pointer shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-surface-container-lowest disabled:hover:text-primary disabled:hover:shadow-sm";

export function ServicesSlider() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        spaceBetween={16}
        loop
        watchOverflow={false}
        grabCursor
        touchStartPreventDefault
        navigation={{ prevEl, nextEl, addIcons: false }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="-my-8 py-8"
      >
        {services.map((service) => (
          <SwiperSlide key={service.title}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          ref={setPrevEl}
          type="button"
          aria-label="Layanan sebelumnya"
          className={arrowClass}
        >
          <Icon name="chevron_left" className="text-2xl" />
        </button>
        <button
          ref={setNextEl}
          type="button"
          aria-label="Layanan berikutnya"
          className={arrowClass}
        >
          <Icon name="chevron_right" className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
