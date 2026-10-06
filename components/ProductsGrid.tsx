import Link from "next/link";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import type { Product } from "@/lib/site";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-white/8 bg-ink-soft transition-colors duration-500 hover:border-gold/30">
      <Link href={`/products/${product.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="size-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <h3 className="text-[1.1rem] font-medium text-cream lg:text-[1.18rem]">
            {product.title}
          </h3>
          <p className="mt-3 flex-1 text-[0.9rem] leading-[2] text-muted">
            {product.text}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[0.85rem] text-gold transition-colors group-hover:text-gold-soft">
            مشاهده جزئیات
            <Icon
              name="arrow"
              className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function ProductsGrid({
  items,
  columns = 3,
}: {
  items: Product[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {items.map((product, index) => (
        <Reveal key={product.slug} delay={index * 60} className="h-full">
          <ProductCard product={product} priority={index < 3} />
        </Reveal>
      ))}
    </div>
  );
}
