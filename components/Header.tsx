"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile panel whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-white/5 bg-ink/95 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/70 via-black/25 to-transparent"
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between gap-6 lg:h-[92px]">
        {/* wordmark */}
        <Link
          href="/"
          className="flex flex-col items-start leading-none"
          aria-label={`${site.nameEn} — صفحه اصلی`}
        >
          <span className="text-[1.3rem] font-bold text-cream lg:text-[1.4rem]">
            {site.name}
          </span>
          <span className="latin mt-1.5 text-[0.58rem] text-gold/85">
            {site.nameEn.toUpperCase()}
          </span>
        </Link>

        {/* desktop navigation */}
        <nav aria-label="ناوبری اصلی" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.95rem]">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 transition-colors duration-300 hover:text-cream ${
                      active ? "text-cream" : "text-muted"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 mx-auto h-px transition-all duration-300 ${
                        active ? "w-5 bg-gold" : "w-0 bg-transparent"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:gap-5">
          {/* call action — always reachable */}
          <a
            href={site.contact.phoneHref}
            className="hidden items-center gap-2 text-[0.9rem] text-muted transition-colors hover:text-gold lg:flex"
          >
            <Icon name="phone" className="size-4.5" />
            <span className="tnum">{site.contact.phoneDisplay}</span>
          </a>

          <Link
            href="/contact"
            className="hidden rounded-full border border-gold/70 bg-gold/10 px-5 py-2.5 text-[0.88rem] font-medium text-gold-soft transition-colors duration-300 hover:bg-gold hover:text-ink lg:inline-flex"
          >
            مشاوره و استعلام قیمت
          </Link>

          <a
            href={site.contact.phoneHref}
            aria-label="تماس تلفنی با وستادور"
            className="grid size-10 place-items-center rounded-full border border-white/12 text-cream lg:hidden"
          >
            <Icon name="phone" className="size-4.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            className="grid size-10 place-items-center rounded-full border border-white/12 text-cream lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/5 bg-ink/98 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="ناوبری موبایل" className="container-page py-6">
          <ul className="flex flex-col divide-y divide-white/5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 text-[1.05rem] text-cream"
                >
                  {item.label}
                  <Icon name="arrow" className="size-4 text-gold/70" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-5 py-3.5 text-center text-[0.95rem] font-medium text-ink"
            >
              مشاوره و استعلام قیمت
            </Link>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/12 px-5 py-3.5 text-center text-[0.95rem] text-cream"
            >
              گفت‌وگو در واتساپ
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
