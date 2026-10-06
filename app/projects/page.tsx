import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGallery from "@/components/ProjectsGallery";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "پروژه‌های اجرا شده وستادور | درب ویلایی، نرده و سازه فلزی",
  description:
    "نمونه پروژه‌های اجرا شده وستادور: درب‌های ویلایی مدرن و کلاسیک، درب فرفورژه، درب ورودی ساختمان، نرده راه‌پله، حفاظ و سازه‌های فلزی سفارشی.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="پروژه‌های وستادور"
        title="پروژه‌های اجرا شده"
        lead="بخشی از پروژه‌هایی که در آن‌ها درب ویلایی، درب ورودی، درب فرفورژه، نرده، حفاظ و سازه‌های فلزی طراحی، ساخته و نصب کرده‌ایم."
        image="/images/project-01.webp"
        alt="درب ویلایی ساخته شده توسط وستادور در ورودی یک ویلا"
      />

      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="نمونه کارها"
          title="کیفیت اجرا را در جزئیات ببینید"
          lead="هر پروژه با نام محصول، نوع سازه و سبک طراحی آن مشخص شده است تا انتخاب مدل متناسب با نمای ساختمان شما ساده‌تر شود."
        />
        <div className="mt-12">
          <ProjectsGallery items={projects} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
