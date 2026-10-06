"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { Icon } from "./Icons";
import useScrollScrubVideo from "@/hooks/useScrollScrubVideo";
import { site } from "@/lib/site";

/**
 * Scroll-driven cinematic hero.
 *
 * A tall section holds a sticky 100svh viewport; while the section scrolls past,
 * its progress is mapped onto the video timeline, so scrolling feels like driving
 * the camera toward the entrance rather than watching a clip. The video itself
 * never moves — only its playback position does, and only from the rAF loop in
 * `useScrollScrubVideo`. The text drifts on its own softer curve and clears out
 * before the camera reaches the door.
 */
const desktopSource = "/videos/hero-cinematic.mp4";
const mobileSource = "/videos/hero-cinematic-mobile.mp4";
const posterSource = "/images/hero-cinematic-poster.webp";

const clamp01 = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value);
/** Smooth 0→1 ramp between two progress thresholds. */
const ramp = (value: number, from: number, to: number) => {
  const t = clamp01((value - from) / (to - from));
  return t * t * (3 - 2 * t);
};

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);

  // Direct DOM writes only — the hero never re-renders while scrolling.
  const onFrame = useCallback((progress: number) => {
    const content = contentRef.current;
    if (content) {
      content.style.transform = `translate3d(0, ${(-progress * 64).toFixed(2)}px, 0)`;
      content.style.opacity = (1 - ramp(progress, 0.4, 0.9)).toFixed(3);
    }

    const hint = hintRef.current;
    if (hint) hint.style.opacity = (1 - ramp(progress, 0.004, 0.07)).toFixed(3);

    const bar = progressRef.current;
    if (bar) bar.style.transform = `scaleX(${progress.toFixed(4)})`;

    const shade = shadeRef.current;
    if (shade) shade.style.opacity = (0.94 - progress * 0.32).toFixed(3);
  }, []);

  useScrollScrubVideo({ sectionRef, stickyRef, videoRef, onFrame });

  return (
    <section
      ref={sectionRef}
      aria-label="وستادور — درب‌های فلزی سفارشی"
      className="relative h-[240svh] w-full lg:h-[340svh]"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden bg-ink"
      >
        {/* Fallback still — also the only layer shown under reduced motion. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterSource}
          alt=""
          aria-hidden="true"
          className="motion-still absolute inset-0 size-full object-cover object-center"
          decoding="async"
        />

        <video
          ref={videoRef}
          className="motion-move absolute inset-0 size-full object-cover object-center"
          poster={posterSource}
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
        >
          {/* Both point at the same clip; a browser that honours `media` picks the
              lighter mobile encode, one that ignores it falls back to the first. */}
          <source src={desktopSource} type="video/mp4" media="(min-width: 768px)" />
          <source src={mobileSource} type="video/mp4" media="(max-width: 767px)" />
        </video>

        {/* Keeps the copy legible without flattening the footage. */}
        <div
          ref={shadeRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.95)_0%,rgba(17,17,17,0.6)_30%,rgba(17,17,17,0.1)_62%,rgba(17,17,17,0.45)_100%)]"
        />

        <div className="relative flex h-full items-end">
          <div
            ref={contentRef}
            className="container-page w-full pb-24 will-change-transform lg:pb-28"
          >
            <span className="flex items-center gap-3 text-[0.72rem] text-gold-soft">
              <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
              <span className="label">
                طراحی اختصاصی • ساخت سفارشی • اجرای حرفه‌ای
              </span>
            </span>

            <h1 className="mt-6 max-w-[46rem] text-[2.05rem] font-bold leading-[1.65] text-cream sm:text-[2.7rem] lg:text-[3.9rem] lg:leading-[1.5]">
              درب‌هایی که
              <br />
              ورودی خانه شما را متمایز می‌کنند
            </h1>

            <p className="mt-6 max-w-[38rem] text-[0.98rem] leading-[2.1] text-muted lg:text-[1.08rem]">
              طراحی و ساخت درب‌های آهنی، درب ویلا، نرده و سازه‌های فلزی سفارشی با
              اجرای حرفه‌ای؛ متناسب با معماری ساختمان شما.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-gold-soft"
              >
                مشاهده پروژه‌ها
                <Icon
                  name="arrow"
                  className="size-4.5 transition-transform duration-300 group-hover:-translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-[0.95rem] text-cream transition-colors duration-300 hover:border-gold/60 hover:text-gold-soft"
              >
                درخواست مشاوره
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.82rem] text-muted">
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Icon name="phone" className="size-4" />
                <span className="tnum">{site.contact.phoneDisplay}</span>
              </a>
              <span
                className="hidden h-4 w-px bg-white/15 sm:block"
                aria-hidden="true"
              />
              <span>مشاوره و بازدید از پروژه، بدون تعهد</span>
            </div>
          </div>
        </div>

        {/* Cue that fades the moment the visitor starts scrolling. */}
        <div
          ref={hintRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center"
        >
          <span className="flex flex-col items-center gap-1.5 text-[0.68rem] text-muted/70">
            <span className="label">اسکرول کنید</span>
            <span className="h-6 w-px bg-gradient-to-b from-gold/70 to-transparent" />
          </span>
        </div>

        {/* Scroll progress through the shot. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
        >
          <span
            ref={progressRef}
            className="block h-full origin-right bg-gold/70"
            style={{ transform: "scaleX(0)" }}
          />
        </span>
      </div>
    </section>
  );
}
