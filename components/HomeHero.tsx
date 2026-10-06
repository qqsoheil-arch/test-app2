import Link from "next/link";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden lg:min-h-[94svh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-villa-gate.webp"
        alt="ورودی یک ویلای مدرن با نورپردازی گرم در شب"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className="absolute inset-0 -z-10 bg-ink/60"
        aria-hidden="true"
      />
      <div
        className="image-shade absolute inset-0 -z-10"
        aria-hidden="true"
      />

      <div className="container-page relative w-full pb-16 pt-36 lg:pb-24 lg:pt-44">
        <Reveal className="flex flex-col gap-7">
          <span className="flex items-center gap-3 text-[0.72rem] text-gold-soft">
            <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
            <span className="label">
              طراحی اختصاصی • ساخت سفارشی • اجرای حرفه‌ای
            </span>
          </span>

          <h1 className="max-w-[46rem] text-[2.05rem] font-bold leading-[1.65] text-cream sm:text-[2.7rem] lg:text-[3.9rem] lg:leading-[1.5]">
            درب‌هایی که
            <br />
            ورودی خانه شما را متمایز می‌کنند
          </h1>

          <p className="max-w-[38rem] text-[0.98rem] leading-[2.1] text-muted lg:text-[1.08rem]">
            طراحی و ساخت درب‌های آهنی، درب ویلا، نرده و سازه‌های فلزی سفارشی با
            اجرای حرفه‌ای؛ متناسب با معماری ساختمان شما.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
            >
              مشاهده پروژه‌ها
              <Icon
                name="arrow"
                className="size-4.5 transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-[0.95rem] text-cream transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
            >
              درخواست مشاوره
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.82rem] text-muted">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Icon name="phone" className="size-4" />
              <span className="tnum">{site.contact.phoneDisplay}</span>
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
            <span>مشاوره و بازدید از پروژه، بدون تعهد</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
