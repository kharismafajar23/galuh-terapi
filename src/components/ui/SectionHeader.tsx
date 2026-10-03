import { Icon } from "./Icon";

export type SectionHeaderProps = {
  icon: string;
  badge: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  icon,
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center lg:mb-16">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-3.5 py-1 text-label-md font-semibold uppercase tracking-wider text-on-secondary-container">
        <Icon name={icon} className="text-sm" />
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl lg:text-headline-lg font-bold tracking-tight text-on-surface">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-body-md leading-relaxed text-on-surface-variant">
          {description}
        </p>
      )}
    </div>
  );
}
