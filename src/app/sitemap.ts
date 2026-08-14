import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const dynamic = "force-static";

const contentUpdatedAt = new Date("2026-08-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/project`,
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: contentUpdatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: contentUpdatedAt,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  return [
    ...staticPages,
    ...teachingProjects.map((project) => ({
      url: `${siteUrl}/project/${project.slug}`,
      lastModified: new Date(project.updatedAt),
      changeFrequency:
        project.projectType === "education-product"
          ? ("monthly" as const)
          : ("yearly" as const),
      priority: project.projectType === "education-product" ? 0.9 : 0.7,
    })),
  ];
}
