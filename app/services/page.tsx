import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ProcessSection } from "@/components/ProcessSection";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "خدمات وستادور | از طراحی و ساخت تا نصب درب و سازه فلزی",
  description:
    "خدمات وستادور: مشاوره و طراحی، اندازه‌گیری و نقشه‌کشی، ساخت در کارگاه، پرداخت و رنگ، حمل و نصب و پشتیبانی پس از نصب درب‌های آهنی و سازه‌های فلزی.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="خدمات وستادور"
        title="از طراحی و ساخت تا نصب و تحویل"
        lead="وستادور تمام مراحل پروژه را خودش اجرا می‌کند؛ مشاوره و طراحی، اندازه‌گیری، ساخت در کارگاه، رنگ، حمل و نصب. همین یکدستی، نتیجه نهایی را دقیق‌تر می‌کند."
        image="/images/product-custom.webp"
        alt="جوش‌کاری و ساخت سازه فلزی سفارشی در کارگاه وستادور"
      />

      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="خدمات ما"
          title="خدمات وستادور در یک نگاه"
          lead="هر خدمت به‌صورت مرحله‌ای انجام و پیش از رفتن به مرحله بعد با کارفرما هماهنگ می‌شود."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-white/8 bg-ink-soft p-7 transition-colors duration-500 hover:border-gold/25">
                <span className="grid size-12 place-items-center rounded-full border border-gold/25 text-gold">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h3 className="mt-6 text-[1.05rem] font-medium text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-[2] text-muted">
                  {service.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-ink-soft">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="مراحل کار"
            title="فرآیند همکاری با وستادور"
            lead="مسیر پروژه از اولین تماس تا تحویل نهایی، در چهار مرحله مشخص پیش می‌رود."
          />
          <div className="mt-12">
            <ProcessSection />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
