import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProductsGrid from "@/components/ProductsGrid";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@/components/Icons";
import { getProduct, products, site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "محصول یافت نشد" };
  }

  return {
    title: `${product.title} | ساخت سفارشی وستادور`,
    description: product.text,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.title} — وستادور`,
      description: product.text,
      images: [{ url: product.image, alt: product.alt }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.intro,
    image: `${site.url}${product.image}`,
    category: "درب و سازه‌های فلزی",
    brand: { "@type": "Brand", name: site.nameEn },
    manufacturer: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <PageHero
        eyebrow="محصولات وستادور"
        title={product.title}
        lead={product.text}
        image={product.image}
        alt={product.alt}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="text-[1.4rem] font-semibold leading-[1.75] text-cream sm:text-[1.7rem]">
              درباره این محصول
            </h2>
            <p className="mt-6 text-[0.98rem] leading-[2.15] text-muted lg:text-[1.04rem]">
              {product.intro}
            </p>

            <h3 className="mt-11 text-[1.12rem] font-medium text-cream">
              آنچه در این محصول در نظر گرفته می‌شود
            </h3>
            <ul className="mt-5 flex flex-col divide-y divide-white/5 border-y border-white/5">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 py-4 text-[0.94rem] leading-[2] text-muted"
                >
                  <Icon name="detail" className="mt-1.5 size-4 shrink-0 text-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Reveal>
            <aside className="rounded-xl border border-white/8 bg-ink-soft p-7">
              <span className="label text-[0.7rem] text-gold">
                مشاوره و استعلام قیمت
              </span>
              <h3 className="mt-4 text-[1.15rem] font-medium leading-[1.8] text-cream">
                برای {product.title} با ما در تماس باشید
              </h3>
              <p className="mt-4 text-[0.9rem] leading-[2] text-muted">
                ابعاد محل نصب، سبک نما و بازه زمانی پروژه را برای ما بگویید تا
                پیشنهاد فنی و برآورد قیمت آماده شود.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-[0.93rem] font-medium text-ink transition-colors hover:bg-gold-soft"
                >
                  درخواست مشاوره
                  <Icon name="arrow" className="size-4" />
                </Link>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-6 py-3.5 text-[0.93rem] text-cream transition-colors hover:border-gold/60 hover:text-gold-soft"
                >
                  <Icon name="phone" className="size-4" />
                  <span className="tnum">{site.contact.phoneDisplay}</span>
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 text-[0.8rem] text-muted">
                <Icon name="clock" className="size-4 text-gold/70" />
                {site.contact.hours}
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-soft">
        <div className="container-page py-20 lg:py-24">
          <SectionHeading
            eyebrow="محصولات مرتبط"
            title="سایر محصولات وستادور"
          />
          <div className="mt-12">
            <ProductsGrid items={others} />
          </div>
        </div>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
