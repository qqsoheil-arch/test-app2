import Link from "next/link";
import { Icon } from "./Icons";
import { nav, products, site } from "@/lib/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/5 bg-ink-soft">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[1.35rem] font-bold text-cream">
              {site.name}
            </span>
            <span className="latin mt-1.5 text-[0.58rem] text-gold/85">
              {site.nameEn.toUpperCase()}
            </span>
          </div>
          <p className="mt-6 max-w-xs text-[0.92rem] leading-[2] text-muted">
            طراحی و ساخت درب‌های آهنی، درب ویلا، نرده، پله و سازه‌های فلزی
            سفارشی.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.contact.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="اینستاگرام وستادور"
              className="grid size-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Icon name="instagram" className="size-5" />
            </a>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساپ وستادور"
              className="grid size-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Icon name="whatsapp" className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="لینک‌های صفحه‌ها">
          <h3 className="text-[0.95rem] font-medium text-cream">دسترسی سریع</h3>
          <ul className="mt-5 flex flex-col gap-3 text-[0.9rem] text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="محصولات وستادور">
          <h3 className="text-[0.95rem] font-medium text-cream">محصولات</h3>
          <ul className="mt-5 flex flex-col gap-3 text-[0.9rem] text-muted">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="transition-colors hover:text-gold"
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[0.95rem] font-medium text-cream">
            تماس با وستادور
          </h3>
          <ul className="mt-5 flex flex-col gap-4 text-[0.9rem] text-muted">
            <li className="flex items-start gap-3">
              <Icon name="phone" className="mt-1 size-4.5 shrink-0 text-gold/70" />
              <a
                href={site.contact.phoneHref}
                className="tnum transition-colors hover:text-gold"
              >
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-1 size-4.5 shrink-0 text-gold/70" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" className="mt-1 size-4.5 shrink-0 text-gold/70" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-center text-[0.78rem] text-muted sm:flex-row sm:text-right">
          <span className="latin text-[0.72rem]">
            © {year} Vostadoor. All rights reserved.
          </span>
          <span>طراحی و ساخت درب آهنی، نرده و سازه‌های فلزی سفارشی</span>
        </div>
      </div>

      {/* keeps the sticky mobile call bar from covering the last links */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </footer>
  );
}
