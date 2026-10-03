import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { locationInfo as info } from "@/data/location";
import GoogleMap from "../ui/Maps";

export type InfoRowProps = { icon: string; title: string; children: ReactNode };

function InfoRow({ icon, title, children }: InfoRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
        <Icon name={icon} className="text-xl" />
      </div>
      <div>
        <p className="text-label-lg font-bold text-on-surface mb-1">{title}</p>
        {children}
      </div>
    </div>
  );
}

export function LocationInfoCard() {
  return (
    <div className="flex flex-col justify-between space-y-8 rounded-lg bg-surface-container-lowest p-8 shadow-sm lg:col-span-5">
      <div className="space-y-6">
        <div>
          <span className="text-label-sm font-bold uppercase tracking-wider text-primary">
            {info.eyebrow}
          </span>
          <h3 className="mt-1 text-headline-md font-bold text-on-surface">
            {info.name}
          </h3>
        </div>

        <div className="space-y-5">
          <InfoRow icon="pin_drop" title="Alamat Lengkap">
            <p className="text-sm md:text-body-md leading-relaxed text-on-surface-variant">
              {info.address}
            </p>
          </InfoRow>
          <InfoRow icon="schedule" title="Jam Buka Pelayanan">
            <p className="text-sm md:text-body-md font-medium text-on-surface-variant mb-1">
              {info.hours}
            </p>
            <p className="mt-0.5 text-label-sm font-semibold text-secondary">
              {info.hoursNote}
            </p>
          </InfoRow>
        </div>
      </div>

      <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded bg-surface-container shadow-inner">
        <GoogleMap zoom={70}></GoogleMap>
      </div>
    </div>
  );
}
