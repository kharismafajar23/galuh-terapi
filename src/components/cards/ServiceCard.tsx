import { Icon } from "@/components/ui/Icon";
import { waLink } from "@/data/site";
import type { Service } from "@/types/content";
import Image from "next/image";

export type ServiceCardProps = { service: Service };

export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, meta, waText, image } = service;

  return (
    <div className="group flex h-full flex-col justify-between rounded-lg bg-surface-container-lowest shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <Image
        src={`/images/${image}`}
        alt={`Layanan ${title} di Galuh Terapi`}
        width={500}
        height={300}
      ></Image>
      <div className="p-7">
        <div>
          <h3 className="mb-2.5 text-headline-sm font-bold text-on-surface">
            {title}
          </h3>
          <p className="mb-6 text-sm md:text-body-md leading-relaxed text-on-surface-variant">
            {description}
          </p>
        </div>

        <div className="-mx-7 -mb-7 flex flex-wrap items-center justify-end gap-x-4 gap-y-2 rounded-b-lg bg-surface-container/50 px-7 py-4">
          <a
            href={waLink(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-label-lg font-bold text-primary group-hover:text-primary-container"
          >
            Pesan Layanan
            <Icon
              name="arrow_forward"
              className="text-base transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
