import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorUrl?: string;
  image?: string;
  tags?: string[];
  readingTime: number;
  content: string;
  faqs?: { question: string; answer: string }[];
  relatedPosts?: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
  readingTime: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Buy a Business India",
      image: data.image,
      tags: data.tags || [],
      readingTime: calculateReadingTime(content),
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "Buy a Business India",
    authorUrl: data.authorUrl,
    image: data.image,
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    content,
    faqs: data.faqs,
    relatedPosts: data.relatedPosts,
  };
}

export function getRelatedPosts(currentSlug: string, relatedSlugs?: string[]): BlogPostMeta[] {
  const allPosts = getAllPosts();
  
  if (relatedSlugs && relatedSlugs.length > 0) {
    return allPosts.filter((post) => relatedSlugs.includes(post.slug));
  }

  // If no related posts specified, return 3 recent posts (excluding current)
  return allPosts.filter((post) => post.slug !== currentSlug).slice(0, 3);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.tags?.includes(tag));
}
