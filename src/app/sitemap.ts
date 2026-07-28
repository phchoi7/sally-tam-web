import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-28"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/project`,
      lastModified: new Date("2026-07-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2026-07-28"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date("2026-07-28"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  return [
    ...staticPages,
    ...teachingProjects.map((project) => ({
      url: `${siteUrl}/project/${project.slug}`,
      lastModified: new Date("2026-07-28"),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
