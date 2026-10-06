import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import TrustStrip from "@/components/TrustStrip";
import ProductsGrid from "@/components/ProductsGrid";
import ProjectsGallery from "@/components/ProjectsGallery";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection, WhySection } from "@/components/ProcessSection";
import CtaBand from "@/components/CtaBand";
import ContactSection from "@/components/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { products, projects, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "وستادور | طراحی و ساخت درب آهنی، درب ویلایی و سازه‌های فلزی سفارشی",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />

      {/* محصولات و خدمات */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="محصولات وستادور"
          title="محصولات و خدمات وستادور"
          lead="هر محصول بر اساس ابعاد محل نصب، سبک نمای ساختمان و سلیقه شما طراحی و در کارگاه وستادور ساخته می‌شود."
        />
        <div className="mt-12">
          <ProductsGrid items={products} />
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-[0.92rem] text-cream transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
          >
            مشاهده همه محصولات
            <Icon name="arrow" className="size-4" />
          </Link>
        </Reveal>
      </section>

      {/* پروژه‌های اجرا شده */}
      <section className="border-y border-white/5 bg-ink-soft">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="نمونه کارها"
            title="پروژه‌های اجرا شده"
            lead="گزیده‌ای از درب‌های ویلایی، درب‌های ورودی، نرده، حفاظ و سازه‌های فلزی که در پروژه‌های مختلف طراحی و اجرا کرده‌ایم."
          />
          <div className="mt-12">
            <ProjectsGallery items={projects.slice(0, 6)} />
          </div>
          <Reveal className="mt-11 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
            >
              مشاهده همه پروژه‌ها
              <Icon
                name="arrow"
                className="size-4.5 transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* درباره وستادور */}
      <section className="container-page py-20 lg:py-28">
        <AboutSection />
      </section>

      {/* چرا وستادور */}
      <section className="border-t border-white/5 bg-ink-soft">
        <div className="container-page py-20 lg:py-28">
          <SectionHeading
            eyebrow="تفاوت وستادور"
            title="چرا وستادور؟"
            lead="از بررسی اولیه محل نصب تا تحویل نهایی، هر مرحله با دقت و بر اساس شرایط همان پروژه انجام می‌شود."
          />
          <div className="mt-12">
            <WhySection />
          </div>
        </div>
      </section>

      {/* فرآیند همکاری */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="مراحل کار"
          title="فرآیند همکاری با وستادور"
          lead="چهار مرحله مشخص؛ از اولین مشاوره تا نصب و تحویل محصول در محل پروژه."
        />
        <div className="mt-12">
          <ProcessSection />
        </div>
      </section>

      <CtaBand />

      {/* تماس */}
      <section className="container-page py-20 lg:py-28">
        <ContactSection />
      </section>
    </>
  );
}
