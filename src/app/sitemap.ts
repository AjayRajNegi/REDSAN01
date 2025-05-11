import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.redsan.in";

  // Define all main routes
  const routes = [
    "",
    "/internship",
    "/portfolio",
    "/linkedIn",
    "/detail",
    "/about",
  ];

  // Create sitemap entries for each route
  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return sitemapEntries;
}
