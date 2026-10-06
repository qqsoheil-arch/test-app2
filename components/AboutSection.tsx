import Link from "next/link";
import { stats } from "@/lib/site";

export default function StatsRow() {
  return (
    <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/8 pt-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="tnum block text-[1.7rem] font-semibold text-gold lg:text-[2.1rem]">
              {stat.value}
            </span>
            <span className="mt-1 block text-[0.82rem] leading-[1.8] text-muted">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function AboutSection() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="relative">
        <div className="overflow-hidden rounded-xl border border-white/8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-workshop.webp"
            alt="کارگاه ساخت درب و سازه فلزی وستادور"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-4 hidden max-w-[15rem] rounded-xl border border-white/8 bg-ink/95 p-5 backdrop-blur-sm lg:block">
          <span className="label text-[0.68rem] text-gold">
            ساخت سفارشی، از نقشه تا نصب
          </span>
          <p className="mt-2 text-[0.85rem] leading-[1.95] text-muted">
            هر محصول پیش از ساخت بررسی و ابعاد آن با محل نصب تطبیق داده می‌شود.
          </p>
        </div>
      </div>

      <div>
        <span className="flex items-center gap-3 text-[0.7rem] text-gold">
          <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
          <span className="label">درباره وستادور</span>
        </span>

        <h2 className="mt-5 text-[1.6rem] font-semibold leading-[1.7] text-cream sm:text-[1.9rem] lg:text-[2.35rem]">
          وستادور؛ ترکیب طراحی، فلز و معماری
        </h2>

        <div className="mt-6 space-y-5 text-[0.96rem] leading-[2.1] text-muted lg:text-[1.02rem]">
          <p>
            ما در وستادور در زمینه طراحی و ساخت درب‌های آهنی، درب‌های ویلایی،
            نرده، پله و سازه‌های فلزی فعالیت می‌کنیم. تمرکز ما روی ساخت
            محصولاتی است که علاوه بر استحکام و دوام، با معماری ساختمان و سلیقه
            مشتری هماهنگ باشند.
          </p>
          <p>
            هر پروژه با بررسی محل نصب آغاز می‌شود؛ از انتخاب طرح و متریال تا
            رنگ و نصب نهایی، مراحل با هماهنگی کارفرما پیش می‌رود.
          </p>
        </div>

        <StatsRow />

        <Link
          href="/about"
          className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-[0.92rem] text-cream transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
        >
          بیشتر درباره وستادور
        </Link>
      </div>
    </div>
  );
}
