import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import MapPlaceholder from "@/components/MapPlaceholder";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با وستادور | مشاوره و استعلام قیمت درب و سازه فلزی",
  description:
    "برای مشاوره، استعلام قیمت و طراحی اختصاصی درب آهنی، درب ویلایی، نرده و سازه‌های فلزی با وستادور تماس بگیرید یا فرم درخواست را تکمیل کنید.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تماس با وستادور"
        title="تماس با وستادور"
        lead="برای انتخاب مدل، استعلام قیمت یا طراحی اختصاصی، فرم درخواست را تکمیل کنید یا مستقیم تماس بگیرید. مشاوره پیش از ساخت، بدون تعهد است."
        image="/images/cta-architecture.webp"
        alt="ورودی یک خانه مدرن با سازه فلزی تیره"
      />

      <section className="container-page py-20 lg:py-28">
        <ContactSection />
      </section>

      <section className="border-t border-white/5 bg-ink-soft">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
          <div>
            <span className="flex items-center gap-3 text-[0.7rem] text-gold">
              <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
              <span className="label">آدرس کارگاه</span>
            </span>
            <h2 className="mt-5 text-[1.5rem] font-semibold leading-[1.7] text-cream sm:text-[1.75rem]">
              بازدید از کارگاه وستادور
            </h2>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-[2.1] text-muted">
              آدرس دقیق کارگاه و زمان‌بندی بازدید در حال نهایی‌شدن است. برای
              هماهنگی بازدید یا ارسال نقشه و ابعاد محل نصب، پیش از مراجعه تماس
              بگیرید.
            </p>
            <p className="mt-6 text-[0.9rem] leading-[2] text-muted">
              <span className="text-cream">{site.contact.address}</span>
              <br />
              {site.contact.hours}
            </p>
          </div>

          <Reveal>
            <MapPlaceholder />
          </Reveal>
        </div>
      </section>
    </>
  );
}
