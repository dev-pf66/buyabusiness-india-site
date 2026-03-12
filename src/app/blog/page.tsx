import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog — Business Acquisition Insights & Tips",
  description:
    "Expert articles on buying businesses in India. Learn about valuation, due diligence, financing, negotiation, and running a newly acquired business.",
  openGraph: {
    title: "Blog — Business Acquisition Insights & Tips",
    description:
      "Expert articles on buying businesses in India. Learn about valuation, due diligence, financing, negotiation, and running a newly acquired business.",
    url: "https://buyabusiness-india.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://buyabusiness-india.com/blog",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://buyabusiness-india.com" },
          { name: "Blog", url: "https://buyabusiness-india.com/blog" },
        ]}
      />

      <div className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Business Acquisition Blog
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, guides, and practical advice for buying and running a business in India
            </p>
          </div>

          {/* Blog Posts Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.image && (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-video bg-gray-100 relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-emerald-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
