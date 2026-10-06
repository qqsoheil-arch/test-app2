import type { MetadataRoute } from "next";
import { products, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/projects", "/services", "/about", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
