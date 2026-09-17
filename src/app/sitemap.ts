import { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { articles } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bungalowinabox.com";

  const staticRoutes = [
    "",
    "/projects",
    "/process",
    "/about",
    "/pricing",
    "/faq",
    "/client-stories",
    "/journal",
    "/start-a-project"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.9 : 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
