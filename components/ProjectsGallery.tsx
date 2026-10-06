import Reveal from "./Reveal";
import type { Project } from "@/lib/site";

/**
 * Asymmetric architectural gallery: the 12-column spans alternate so the
 * grid never reads as a plain catalogue, and every row keeps a matched
 * aspect ratio so heights stay aligned.
 */
const layout = [
  { span: "lg:col-span-7", ratio: "aspect-[16/11]" },
  { span: "lg:col-span-5", ratio: "aspect-[16/11]" },
  { span: "lg:col-span-5", ratio: "aspect-[16/11]" },
  { span: "lg:col-span-7", ratio: "aspect-[16/11]" },
  { span: "lg:col-span-4", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-4", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-4", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-6", ratio: "aspect-[16/11]" },
  { span: "lg:col-span-6", ratio: "aspect-[16/11]" },
];

export default function ProjectsGallery({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
      {items.map((project, index) => {
        const cell = layout[index % layout.length];

        return (
          <Reveal
            key={`${project.title}-${index}`}
            delay={(index % 3) * 70}
            className={`${cell.span} col-span-1`}
          >
            <figure className="group relative h-full overflow-hidden rounded-xl border border-white/8">
              <div className={`relative w-full ${cell.ratio}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
              </div>

              <div
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <h3 className="text-[1.02rem] font-medium text-cream lg:text-[1.1rem]">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.79rem] text-muted transition-all duration-500 lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <span>{project.productType}</span>
                  <span
                    className="size-1 rounded-full bg-gold/80"
                    aria-hidden="true"
                  />
                  <span>{project.style}</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        );
      })}
    </div>
  );
}
