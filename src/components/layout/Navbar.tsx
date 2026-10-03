"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { navLinks, siteConfig } from "@/data/site";

export function Navbar() {
  const [active, setActive] = useState(navLinks[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-margin-mobile lg:px-margin">
        <Link
          href="/"
          onClick={close}
          className="group flex items-center gap-space-sm"
        >
          <Image
            src={siteConfig.logo}
            alt="Logo Galuh Terapi"
            width={60}
            height={60}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-headline-md font-bold tracking-tight text-primary">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-space-lg md:flex">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-label-lg transition-colors ${
                active === id
                  ? "bg-surface-container-high font-semibold text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            href="#hubungi-kami"
            className="hidden items-center justify-center rounded-lg bg-primary px-space-lg py-2.5 text-label-lg text-on-primary shadow-sm transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container hover:shadow-md sm:inline-flex"
          >
            Hubungi Kami
          </a>
          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container-high md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-surface-variant bg-surface/95 backdrop-blur-xl md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-margin-mobile py-4">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={close}
                aria-current={active === id ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-body-md transition-colors ${
                  active === id
                    ? "bg-surface-container-high font-semibold text-on-surface"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#hubungi-kami"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-label-lg text-on-primary shadow-sm transition-colors hover:bg-primary-container"
            >
              Hubungi Kami
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
