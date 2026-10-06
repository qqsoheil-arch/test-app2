import Link from "next/link";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/cta-architecture.webp"
        alt="نمای معماری یک ورودی مدرن با سازه فلزی تیره"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-ink/85" aria-hidden="true" />

      <div className="container-page py-20 lg:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="label text-[0.7rem] text-gold">
            مشاوره و استعلام قیمت
          </span>
          <h2 className="mt-5 text-[1.55rem] font-semibold leading-[1.7] text-cream sm:text-[1.9rem] lg:text-[2.4rem]">
            برای ورودی خانه‌تان یک انتخاب معمولی نکنید.
          </h2>
          <p className="mt-5 text-[0.96rem] leading-[2.1] text-muted lg:text-[1.02rem]">
            مدل موردنظر خود را انتخاب کنید یا برای طراحی اختصاصی با ما در ارتباط
            باشید.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
            >
              درخواست مشاوره
              <Icon
                name="arrow"
                className="size-4.5 transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-[0.95rem] text-cream transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
            >
              <Icon name="phone" className="size-4.5" />
              تماس با وستادور
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
