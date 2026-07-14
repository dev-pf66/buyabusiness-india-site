import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const postUrl = `https://buyabusiness-india.com/blog/${slug}`;
  const articleTags = post.keywords && post.keywords.length > 0
    ? post.keywords
    : (post.tags || []);
  const seoTitle = post.seoTitle || post.title;

  return {
    title: seoTitle,
    description: post.description,
    authors: [{ name: post.author, url: post.authorUrl }],
    keywords: articleTags.join(", "),
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: seoTitle,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      url: postUrl,
      siteName: "Buy a Business India",
      locale: "en_IN",
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : undefined,
      tags: articleTags,
    },
    twitter: {
      card: "summary_large_image",
      site: "@buyabizindia",
      creator: "@buyabizindia",
      title: seoTitle,
      description: post.description,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    alternates: {
      canonical: postUrl,
      languages: { "en-IN": postUrl },
    },
    other: {
      // Geographic
      "geo.region": "IN",
      "geo.country": "India",
      "geo.placename": "India",
      // Language & audience
      "language": "en-IN",
      "content-language": "en-IN",
      "target": "all",
      "audience": "all",
      "revisit-after": "7 days",
      // Classification
      "classification": "Business, Finance, Investment, M&A",
      "subject": post.description,
      "topic": (post.tags || []).join(", "),
      "category": "Business Acquisition",
      "coverage": "India",
      "distribution": "global",
      "rating": "general",
      // Dublin Core
      "DC.title": seoTitle,
      "DC.creator": post.author,
      "DC.subject": (post.tags || []).join("; "),
      "DC.description": post.description,
      "DC.publisher": "Buy a Business India",
      "DC.contributor": post.author,
      "DC.date": post.date,
      "DC.type": "Text",
      "DC.format": "text/html",
      "DC.identifier": postUrl,
      "DC.source": "https://buyabusiness-india.com",
      "DC.language": "en-IN",
      "DC.relation": "https://buyabusiness-india.com/blog",
      "DC.coverage": "India",
      "DC.rights": "Copyright Buy a Business India",
      // Mobile
      "HandheldFriendly": "True",
      "MobileOptimized": "320",
      // Ownership & copyright
      "copyright": "Buy a Business India",
      "owner": "Buy a Business India",
      "url": postUrl,
      "identifier-URL": postUrl,
      // SEO signals
      "news_keywords": articleTags.slice(0, 10).join(", "),
      "abstract": post.description,
      "summary": post.description,
      "pagename": seoTitle,
      "pagetopic": (post.tags || []).slice(0, 3).join(", "),
      // Article metadata
      "article:content_tier": "free",
      "article:opinion": "false",
      "article:section": (post.tags || [])[0] || "Business",
      // Social
      "fb:app_id": "buyabusiness-india",
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Custom MDX components
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 pl-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-700" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-emerald-600 hover:text-emerald-700 underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-4" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={props.alt || ""}
      className="w-full rounded-xl my-6 object-cover shadow-sm"
      style={{ maxHeight: "420px" }}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-900" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100" {...props} />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.relatedPosts);
  const postUrl = `https://buyabusiness-india.com/blog/${slug}`;

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title={post.title}
        description={post.description}
        url={postUrl}
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author}
        authorUrl={post.authorUrl}
        image={post.image}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://buyabusiness-india.com" },
          { name: "Blog", url: "https://buyabusiness-india.com/blog" },
          { name: post.title, url: postUrl },
        ]}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}

      <article className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-emerald-50 to-white">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-emerald-600">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-emerald-600">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 truncate max-w-xs">{post.title}</li>
              </ol>
            </nav>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-6">{post.description}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-700 font-semibold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p>{formatDate(post.date)}</p>
                </div>
              </div>
              <span className="text-gray-300">•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg -mt-4 mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-emerald max-w-none">
            <MDXRemote
                source={post.content}
                components={components}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
          </div>
        </div>

        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-lg p-4 cursor-pointer"
                >
                  <summary className="font-semibold text-gray-900 list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-2 text-emerald-600 group-open:rotate-180 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-100">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {relatedPost.readingTime} min read
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-4">
              Get the latest insights on business acquisition delivered to your inbox.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
