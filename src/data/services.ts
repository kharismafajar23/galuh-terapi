import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    title: "Pijat Full Body",
    description:
      "Membantu melancarkan peredaran darah, mengurangi pegal, menghilangkan stres dan membuat tubuh lebih rileks.",
    icon: "self_improvement",
    badge: {
      label: "Favorit",
      icon: "local_fire_department",
      className: "bg-tertiary-fixed text-on-tertiary-fixed",
    },
    meta: { label: "60 / 90 Menit", icon: "schedule" },
    waText: "Halo Galuh Terapi, saya mau pesan Pijat Full Body",
    image: "pijat-full-body.png",
  },
  {
    title: "Bekam",
    description:
      "Membantu mengeluarkan darah kotor, melancarkan sirkulasi, meningkatkan imun dan mengurangi nyeri.",
    icon: "health_and_safety",
    badge: {
      label: "Higienis & Steril",
      icon: "shield",
      className: "bg-secondary-fixed text-on-secondary-fixed",
    },
    meta: { label: "Alat Higienis", icon: "verified_user" },
    waText: "Halo Galuh Terapi, saya mau tanya layanan Bekam",
    image: "bekam.png",
  },
  {
    title: "Totok Punggung (Topung)",
    description:
      "Mengurai sumbatan pada sumbernya. Memberikan hasil terapi maksimal pada semua keluhan penyakit.",
    icon: "accessibility_new",
    badge: {
      label: "Terapi Khusus",
      icon: "tune",
      className: "bg-surface-container-high text-on-surface-variant",
    },
    meta: { label: "Titik Akupresur Tulang Belakang", icon: "healing" },
    waText: "Halo Galuh Terapi, saya mau jadwalkan Totok Punggung",
    image: "totok-punggung.png",
  },
  {
    title: "Terapi Energi (Reiki & Prana)",
    description:
      "Penyelarasan kembali medan energi tubuh untuk memicu proses pemulihan alami. Melayani buka aura & netralkan energi negatif.",
    icon: "flare",
    badge: {
      label: "Holistik",
      icon: "auto_awesome",
      className: "bg-secondary-fixed-dim/40 text-on-secondary-fixed-variant",
    },
    meta: { label: "Keseimbangan Jiwa & Raga", icon: "psychology" },
    waText: "Halo Galuh Terapi, saya tertarik dengan Terapi Energi",
    image: "terapi-energi.png",
  },
];
