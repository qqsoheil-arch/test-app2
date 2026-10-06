"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

/**
 * Mobile-only sticky bar with the two actions that matter on a phone:
 * a direct call and a WhatsApp conversation. It appears once the visitor
 * has scrolled past the hero so it never competes with the hero CTAs.
 */
export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur-md transition-transform duration-500 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 gap-3 p-3">
        <a
          href={site.contact.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-[0.9rem] font-medium text-ink"
        >
          <Icon name="phone" className="size-4.5" />
          تماس با وستادور
        </a>
        <a
          href={site.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-3 text-[0.9rem] text-cream"
        >
          <Icon name="whatsapp" className="size-4.5 text-gold" />
          واتساپ
        </a>
      </div>
    </div>
  );
}
