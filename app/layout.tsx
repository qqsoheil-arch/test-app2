import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { vazirmatn } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { site } from "@/lib/site";

const defaultTitle =
  "وستادور | طراحی و ساخت درب آهنی، درب ویلایی و سازه‌های فلزی سفارشی";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: "%s | وستادور",
  },
  description: site.description,
  applicationName: site.nameEn,
  keywords: [
    "درب آهنی",
    "درب ویلایی",
    "درب آهنی ویلا",
    "درب ورودی آهنی",
    "درب فرفورژه",
    "درب فلزی",
    "نرده آهنی",
    "نرده ویلایی",
    "پله فلزی",
    "درب مدرن",
    "درب کلاسیک",
    "سازه فلزی سفارشی",
    "وستادور",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: `${site.name} | ${site.nameEn}`,
    title: defaultTitle,
    description: site.description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1400,
        height: 933,
        alt: "درب ویلایی فلزی سفارشی ساخت وستادور",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "ساخت درب و سازه‌های فلزی",
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  alternateName: site.nameEn,
  url: site.url,
  description: site.description,
  image: `${site.url}/images/og-cover.jpg`,
  telephone: site.contact.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressCountry: "IR",
    streetAddress: site.contact.address,
  },
  areaServed: { "@type": "Country", name: "Iran" },
  sameAs: [site.contact.instagramHref],
  makesOffer: [
    "درب ویلایی",
    "درب ورودی",
    "نرده و حفاظ",
    "پله و سازه‌های فلزی",
    "درب فرفورژه",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="min-h-screen bg-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-[0.9rem] focus:text-ink"
        >
          رفتن به محتوای اصلی
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
