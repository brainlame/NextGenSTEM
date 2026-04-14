import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { TEAM } from "@/data/team";
import { PROGRAMS } from "@/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const teamRoutes: MetadataRoute.Sitemap = TEAM.map((m) => ({
    url: `${SITE_URL}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const programRoutes: MetadataRoute.Sitemap = PROGRAMS.map((p) => ({
    url: `${SITE_URL}/programs/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...teamRoutes, ...programRoutes];
}
