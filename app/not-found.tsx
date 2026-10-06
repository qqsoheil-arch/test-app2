import Link from "next/link";
import { Icon } from "@/components/Icons";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
      <span className="label text-[0.7rem] text-gold">صفحه یافت نشد</span>
      <h1 className="mt-6 text-[1.7rem] font-semibold leading-[1.7] text-cream sm:text-[2.2rem]">
        این صفحه در سایت وستادور وجود ندارد
      </h1>
      <p className="mt-5 max-w-lg text-[0.95rem] leading-[2.1] text-muted">
        ممکن است آدرس تغییر کرده باشد. از لینک‌های زیر می‌توانید به بخش‌های
        اصلی سایت برگردید.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
        >
          صفحه اصلی
          <Icon
            name="arrow"
            className="size-4.5 transition-transform duration-300 group-hover:-translate-x-1"
          />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-[0.95rem] text-cream transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
        >
          تماس با وستادور
        </Link>
      </div>

      <nav aria-label="صفحه‌های سایت" className="mt-12">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.9rem] text-muted">
          {nav.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
