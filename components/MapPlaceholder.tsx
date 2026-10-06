import { Icon } from "./Icons";
import { site } from "@/lib/site";

/**
 * Map placeholder — swap for an embedded map when the workshop coordinates
 * are confirmed. Deliberately dependency-free so nothing is loaded from a
 * third-party domain until that decision is made.
 */
export default function MapPlaceholder() {
  return (
    <div className="blueprint relative flex min-h-[16rem] items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-ink-soft">
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold">
          <Icon name="pin" className="size-5" />
        </span>
        <span className="mt-4 text-[0.95rem] text-cream">
          {site.contact.address}
        </span>
        <span className="mt-2 text-[0.82rem] text-muted">
          برای هماهنگی بازدید از کارگاه، پیش از مراجعه تماس بگیرید.
        </span>
      </div>
    </div>
  );
}
