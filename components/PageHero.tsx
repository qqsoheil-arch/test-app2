import Reveal from "./Reveal";

/** Compact dark hero used at the top of every inner page. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[54svh] items-end overflow-hidden lg:min-h-[60svh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 size-full object-cover object-center"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-ink/70" aria-hidden="true" />
      <div className="image-shade absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page w-full pb-14 pt-36 lg:pb-16 lg:pt-44">
        <Reveal className="flex flex-col gap-5">
          <span className="flex items-center gap-3 text-[0.7rem] text-gold-soft">
            <span className="h-px w-9 bg-gold/60" aria-hidden="true" />
            <span className="label">{eyebrow}</span>
          </span>
          <h1 className="max-w-3xl text-[1.85rem] font-bold leading-[1.65] text-cream sm:text-[2.3rem] lg:text-[3.1rem] lg:leading-[1.55]">
            {title}
          </h1>
          <p className="max-w-2xl text-[0.95rem] leading-[2.1] text-muted lg:text-[1.02rem]">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
