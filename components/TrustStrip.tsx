import { Icon } from "./Icons";
import { values } from "@/lib/site";

/** Four trust points directly under the hero. Two columns on phones. */
export default function TrustStrip() {
  return (
    <section
      aria-label="دلایل اعتماد به وستادور"
      className="border-y border-white/5 bg-ink-soft"
    >
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-9 py-10 lg:grid-cols-4 lg:gap-x-10 lg:py-12">
        {values.map((value) => (
          <div key={value.title} className="flex items-start gap-4">
            <Icon
              name={value.icon}
              className="mt-0.5 size-7 shrink-0 text-gold"
            />
            <div>
              <h3 className="text-[0.98rem] font-medium text-cream">
                {value.title}
              </h3>
              <p className="mt-1.5 text-[0.84rem] leading-[1.95] text-muted">
                {value.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
