# AGENTS.md — Vostadoor (Persian RTL marketing site)

Next.js 15 App Router + TypeScript + Tailwind CSS v4. No database and no external
service: the whole site runs from the cloned source with `next dev`, and the
contact form posts to an internal route handler.

## Run it

```bash
docker compose -f docker-compose.base44.yml up -d --build   # web -> host :3000
docker compose -f docker-compose.base44.yml logs -f web
```

`npm install` runs on container start (deps live in a named volume, not the bind
mount), then `next dev -H 0.0.0.0 -p 3000`. There is no lockfile committed, so
the install is not frozen — if you add dependencies, restart the service.

## Verify it

```bash
for p in / /products /projects /services /about /contact /products/villa-gates /sitemap.xml /robots.txt; do
  printf "%-26s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000$p)"
done
```

Every route must answer 200 (`/products/[slug]` renders from `getProduct`).
`npx tsc --noEmit` inside the container type-checks without a build.

## Quirks worth knowing

- **Never name a top-level export `process` in `lib/site.ts`.** It shadows Node's
  global `process` inside that module, so `site.url` (`process.env.NEXT_PUBLIC_SITE_URL`)
  throws `ReferenceError: Cannot access 'process' before initialization` at import
  time and *every* route returns 500. The process steps are exported as
  `processSteps` for this reason.
- **All copy and data live in `lib/site.ts`** — nav, products (with slugs used as
  URLs), projects, values, benefits, services, process, stats, contact info.
  Edit content there, not in the components.
- `site.contact` (phone, mobile/WhatsApp, Instagram, workshop address, hours) is
  **placeholder data** and must be replaced with the real Vostadoor details.
- `app/api/contact/route.ts` validates a lead and only writes it to the server
  log; a real destination (email / Telegram bot / CRM webhook) still has to be
  wired up there.
- Images are local WebP files in `public/images` referenced as `/images/*.webp`.
  `www.pexels.com` blocks the sandbox (403) but the CDN does not — fetch assets
  straight from `https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&w=1400&fm=webp`.
  Keep `public/images/og-cover.jpg` as a JPEG: social crawlers want a raster format.
- RTL is set once on `<html dir="rtl" lang="fa">` in `app/layout.tsx`; Vazirmatn
  is bundled locally in `app/fonts/` via `next/font/local`, so there is no
  external font request.
- Scroll reveals are `components/Reveal.tsx` (IntersectionObserver + the `.reveal`
  class in `app/globals.css`). Content starts at `opacity: 0`, so a broken observer
  silently produces a blank-looking section.
