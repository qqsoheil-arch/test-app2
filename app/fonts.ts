import localFont from "next/font/local";

/**
 * Vazirmatn is bundled locally (no external font CDN) so the Persian
 * typography renders identically offline and without a layout shift.
 */
export const vazirmatn = localFont({
  src: [
    { path: "./fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Vazirmatn-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Vazirmatn-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Tahoma", "sans-serif"],
});
