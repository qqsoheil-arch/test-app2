import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductsGrid from "@/components/ProductsGrid";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "محصولات وستادور؛ درب آهنی، نرده، پله و سازه‌های فلزی",
  description:
    "محصولات وستادور: درب ویلایی، درب ورودی، درب فرفورژه، نرده و حفاظ، پله فلزی و پروژه‌های سفارشی. طراحی و ساخت بر اساس ابعاد و معماری محل نصب.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="محصولات وستادور"
        title="درب، نرده و سازه‌های فلزی سفارشی"
        lead="محصولات وستادور در کارگاه اختصاصی و بر اساس ابعاد دقیق محل نصب ساخته می‌شوند؛ از درب ویلایی و درب ورودی تا نرده، حفاظ، پله و جزئیات فلزی سفارشی."
        image="/images/product-villa-gate.webp"
        alt="درب ویلایی فلزی سفارشی ساخت وستادور"
      />

      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="دسته‌بندی محصولات"
          title="چه محصولی مناسب پروژه شماست؟"
          lead="اگر بین چند گزینه تردید دارید، کافی است عکس ورودی یا فضای مورد نظر را برای ما بفرستید تا متناسب‌ترین مدل را پیشنهاد دهیم."
        />
        <div className="mt-12">
          <ProductsGrid items={products} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
