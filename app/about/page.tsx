import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { AboutSection } from "@/components/AboutSection";
import { WhySection } from "@/components/ProcessSection";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "درباره وستادور | طراحی، فلز و معماری",
  description:
    "وستادور طراح و سازنده درب‌های آهنی، درب ویلایی، نرده، حفاظ، پله و سازه‌های فلزی سفارشی است؛ محصولاتی هماهنگ با معماری ساختمان و سلیقه کارفرما.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="درباره وستادور"
        title="درباره وستادور"
        lead={site.tagline}
        image="/images/about-workshop.webp"
        alt="کارگاه ساخت درب و سازه فلزی وستادور"
      />

      <section className="container-page py-20 lg:py-28">
        <AboutSection />
      </section>

      <section className="border-y border-white/5 bg-ink-soft">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="تفاوت وستادور"
            title="چرا وستادور؟"
            lead="چهار اصل که در همه پروژه‌ها، از یک نرده ساده تا درب ویلایی اختصاصی، رعایت می‌شود."
          />
          <div className="mt-12">
            <WhySection />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
