/**
 * Dev-server origin allow-list.
 *
 * The Base44 preview proxies the app through `https://3000-<public host suffix>`,
 * and the browser sends that origin to the dev server. Next blocks dev asset
 * requests from unknown origins, so the preview origin has to be declared here.
 * `allowedDevOrigins` only matches subdomains for wildcards, so the literal
 * `3000-<suffix>` origin is used (the suffix is provided by the sandbox env).
 */
const previewOrigin = process.env.BASE44_PUBLIC_HOST_SUFFIX
  ? [`3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`]
  : [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: previewOrigin,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
