"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Maps the scroll progress of a tall section onto the playback position of a
 * video inside its sticky viewport.
 *
 * The scroll listener never touches the video: it only records a *target*
 * progress (0–1) and wakes the animation loop. Every visual update happens in a
 * single `requestAnimationFrame` pass, where the progress is eased toward the
 * target with frame-rate independent damping and only then translated into a
 * `currentTime` seek. That keeps fast wheel/touch scrolling from turning into a
 * burst of raw seeks, while a stopped scroll still settles on the exact frame.
 */

/** Share of the remaining gap closed per 60fps frame (0–1). */
const FOLLOW = 0.18;
/** Progress delta below which the animation counts as settled. */
const SETTLE = 0.0004;
/** Smallest video-time change worth a seek while the user is scrolling. */
const SEEK_STEP = 0.008;
/** A seek pending longer than this stops blocking newer seeks. */
const SEEK_STALL_MS = 120;

const clamp = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value;

export default function useScrollScrubVideo({
  sectionRef,
  stickyRef,
  videoRef,
  onFrame,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  stickyRef: RefObject<HTMLElement | null>;
  videoRef: RefObject<HTMLVideoElement | null>;
  /** Called once per animation frame with the eased progress (0–1). */
  onFrame?: (progress: number) => void;
}) {
  // Held in a ref so a new callback identity never re-runs the effect.
  const onFrameRef = useRef(onFrame);
  onFrameRef.current = onFrame;

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const video = videoRef.current;
    if (!section || !sticky || !video) return;

    // Reduced motion: keep the poster (see `.motion-still`) and never seek.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.preload = "none";
      return;
    }

    video.preload = "auto";

    let duration = 0;
    let sectionTop = 0;
    let scrollDistance = 1;

    let target = 0;
    let eased = 0;

    /**
     * Animation frame handle. `0` means "nothing scheduled", so the handle
     * doubles as the run flag: even if a frame is lost (throttled tab, a throw
     * inside a visual layer), the next scroll simply schedules a fresh one.
     */
    let frame = 0;
    let previousTimestamp = 0;

    let lastSeek = -1;
    let seekIssuedAt = 0;

    /** Static geometry is measured once and only remeasured on resize/document load. */
    const measure = () => {
      const rect = section.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      scrollDistance = Math.max(1, section.offsetHeight - sticky.offsetHeight);
    };

    const render = (timestamp: number) => {
      frame = 0;

      const elapsed = previousTimestamp
        ? Math.min(timestamp - previousTimestamp, 64)
        : 16.7;
      previousTimestamp = timestamp;

      // Exponential damping: approaches the target without ever overshooting,
      // and behaves the same on 60Hz and 120Hz displays.
      const gap = target - eased;
      if (Math.abs(gap) <= SETTLE) {
        eased = target;
      } else {
        eased += gap * (1 - Math.pow(1 - FOLLOW, elapsed / 16.7));
      }

      onFrameRef.current?.(eased);

      const settled = Math.abs(target - eased) <= SETTLE;
      let pendingSeek = false;

      if (duration > 0) {
        const time = clamp(eased * duration, 0, duration);
        // While moving, ignore sub-frame deltas; once settled, land on the
        // exact frame. A stalled seek never blocks a newer one for long.
        const step = settled ? 0.001 : SEEK_STEP;
        const blocked = video.seeking && timestamp - seekIssuedAt < SEEK_STALL_MS;
        if (!blocked && Math.abs(time - lastSeek) > step) {
          video.currentTime = time;
          lastSeek = time;
          seekIssuedAt = timestamp;
        }
        pendingSeek = Math.abs(clamp(eased * duration, 0, duration) - lastSeek) > 0.001;
      }

      if (!settled || pendingSeek) {
        frame = requestAnimationFrame(render);
      } else {
        previousTimestamp = 0;
      }
    };

    const start = () => {
      if (frame) return;
      previousTimestamp = 0;
      frame = requestAnimationFrame(render);
    };

    const readScroll = () => {
      target = clamp((window.scrollY - sectionTop) / scrollDistance, 0, 1);
      start();
    };

    // Seeking is only possible once the duration is known, so the first frame
    // is pinned here and any progress already scrolled is re-applied.
    const onLoadedMetadata = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
      if (duration > 0) {
        video.currentTime = 0;
        lastSeek = 0;
      }
      readScroll();
    };

    const onResize = () => {
      measure();
      readScroll();
    };

    measure();
    if (video.readyState >= 1) onLoadedMetadata();
    else video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });

    // Fonts and late images can nudge the layout above the section.
    document.fonts?.ready.then(measure).catch(() => {});
    window.addEventListener("load", measure);

    // A backgrounded tab stops delivering frames; on return the geometry is
    // remeasured and the timeline catches straight up to the current scroll.
    const onVisibility = () => {
      if (document.visibilityState === "visible") onResize();
    };

    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    readScroll();

    return () => {
      cancelAnimationFrame(frame);
      frame = 0;
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("load", measure);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [sectionRef, stickyRef, videoRef]);
}
