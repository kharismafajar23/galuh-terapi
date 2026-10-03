export type NavLink = { id: string; label: string };
export type Badge = { label: string; icon: string; className: string };
export type IconLabel = { label: string; icon: string };
export type Service = {
  title: string;
  description: string;
  icon: string;
  badge: Badge;
  meta: IconLabel;
  waText: string;
  image: string;
};
export type Feature = { title: string; description: string; icon: string };
export type LocationInfo = {
  eyebrow: string;
  name: string;
  address: string;
  hours: string;
  hoursNote: string;
  facilities: IconLabel[];
  mapImage: string;
  mapLabel: string;
};
