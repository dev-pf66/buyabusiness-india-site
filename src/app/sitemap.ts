import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buyabusiness-india.com";

  // Only include pages that actually exist
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/guide", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/guide/how-to-buy", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/guide/valuation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/guide/due-diligence", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resources/checklist", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/newsletter", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
