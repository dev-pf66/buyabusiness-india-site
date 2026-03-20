import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buyabusiness-india.com";

  // Static pages
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/guide", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/guide/how-to-buy", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/guide/valuation", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/guide/due-diligence", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resources/checklist", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resources/calculator", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resources/glossary", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/newsletter", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticSitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date("2026-03-20"),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Dynamic blog posts
  const posts = getAllPosts();
  const blogSitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date("2026-03-20"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticSitemap, ...blogSitemap];
}
