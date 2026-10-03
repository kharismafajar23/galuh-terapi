import { Icon } from "@/components/ui/Icon";
import type { Feature } from "@/types/content";

export type FeatureCardProps = { feature: Feature };

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-5 rounded-lg bg-surface-container-low p-6 transition-colors duration-300 hover:bg-surface-container lg:p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary shadow-sm">
        <Icon name={feature.icon} className="text-2xl" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-headline-sm font-bold text-on-surface">
          {feature.title}
        </h3>
        <p className="text-sm md:text-body-md leading-relaxed text-on-surface-variant">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
