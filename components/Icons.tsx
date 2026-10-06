import type { ReactNode } from "react";

/**
 * Thin line icon set (single stroke weight) so the whole site keeps one
 * consistent, minimal architectural voice. Brand marks are drawn as simple
 * line glyphs on purpose — nothing in the UI uses a filled illustration.
 */
const paths: Record<string, ReactNode> = {
  shield: (
    <path d="M12 3l7 3v5.4c0 4.3-2.9 7.7-7 9.6-4.1-1.9-7-5.3-7-9.6V6l7-3z" />
  ),
  ruler: (
    <>
      <path d="M4.2 14.6L14.6 4.2l5.2 5.2L9.4 19.8 4.2 14.6z" />
      <path d="M7.6 11.2l1.6 1.6M10 8.8l1.6 1.6M12.4 6.4l1.6 1.6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.4 8.6l-1.9 4.9-4.9 1.9 1.9-4.9 4.9-1.9z" />
    </>
  ),
  caliper: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" />
    </>
  ),
  install: (
    <>
      <path d="M12 3v10" />
      <path d="M8.4 9.6L12 13.2l3.6-3.6" />
      <path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3" />
    </>
  ),
  detail: (
    <path d="M12 3.5l1.7 5.3 5.3 1.7-5.3 1.7L12 17.5l-1.7-5.3L5 10.5l5.3-1.7L12 3.5z" />
  ),
  chat: (
    <>
      <path d="M20 12.5c0 3.9-3.6 7-8 7a9 9 0 01-2.9-.5L5 20.5l1.1-3.3A6.7 6.7 0 014 12.5c0-3.9 3.6-7 8-7s8 3.1 8 7z" />
    </>
  ),
  workshop: (
    <>
      <path d="M3 20h18" />
      <path d="M5 20V9.5l7-4 7 4V20" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  paint: (
    <>
      <path d="M12 3.5s5.5 5.9 5.5 9.4A5.5 5.5 0 016.5 12.9C6.5 9.4 12 3.5 12 3.5z" />
      <path d="M9.5 13.6a2.5 2.5 0 002.5 2.5" />
    </>
  ),
  support: (
    <>
      <path d="M5 13v-1.5a7 7 0 0114 0V13" />
      <path d="M5 13h1.6a1 1 0 011 1v3.4a1 1 0 01-1 1H6a1 1 0 01-1-1V13z" />
      <path d="M19 13h-1.6a1 1 0 00-1 1v3.4a1 1 0 001 1H18a1 1 0 001-1V13z" />
      <path d="M17 19.5a3 3 0 01-3 2h-1.5" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11.5 11.5 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.7 2 2 0 016.5 3.5z" />
  ),
  whatsapp: (
    <>
      <path d="M20 11.7c0 4-3.6 7.3-8 7.3a9 9 0 01-3-.5L5 20l1.2-3.4A7 7 0 014 11.7C4 7.7 7.6 4.4 12 4.4s8 3.3 8 7.3z" />
      <path d="M9.6 8.6c.3-.6 1.4-.4 1.6.2l.4 1c.1.3 0 .5-.2.7l-.4.4c-.2.2-.2.4-.1.6a4.6 4.6 0 002.2 2.2c.2.1.4 0 .5-.1l.5-.5c.2-.2.4-.3.7-.1l1 .4c.6.3.7 1.3.2 1.7-.6.5-1.5.7-2.5.3a8 8 0 01-3.9-3.8c-.4-1-.3-1.9 0-2.3z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.6" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="16.9" cy="7.1" r="0.9" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.6 6.5-10.4A6.5 6.5 0 005.5 10.6C5.5 15.4 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.6V12l3 1.8" />
    </>
  ),
  arrow: <path d="M19 12H5M11 6l-6 6 6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export function Icon({
  name,
  className = "size-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? paths.detail}
    </svg>
  );
}
