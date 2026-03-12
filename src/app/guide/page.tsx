import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { getMDXContent, extractFAQs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "The Complete Guide to Buying a Business in India",
  description:
    "Everything you need to know about buying a small business in India. Step-by-step process, valuation, due diligence, financing, and legal requirements.",
  alternates: {
    canonical: "https://buyabusiness-india.com/guide",
  },
};

const chapters = [
  {
    number: "01",
    title: "How to Buy a Business in India",
    description: "The complete step-by-step process from search to close.",
    href: "/guide/how-to-buy",
    time: "15 min read",
  },
  {
    number: "02",
    title: "Why Buy Instead of Start?",
    description: "When buying makes more sense than starting from scratch.",
    href: "/guide/why-buy",
    time: "8 min read",
  },
  {
    number: "03",
    title: "How Much Money Do You Need?",
    description: "Capital requirements, deal sizes, and structuring options.",
    href: "/guide/how-much-money",
    time: "10 min read",
  },
  {
    number: "04",
    title: "Where to Find Businesses for Sale",
    description: "Platforms, brokers, and off-market deal sourcing.",
    href: "/guide/find-businesses",
    time: "12 min read",
  },
  {
    number: "05",
    title: "How to Value a Small Business",
    description: "Valuation methods, multiples, and pricing factors.",
    href: "/guide/valuation",
    time: "15 min read",
  },
  {
    number: "06",
    title: "Due Diligence Checklist",
    description: "What to verify before buying any business.",
    href: "/guide/due-diligence",
    time: "20 min read",
  },
  {
    number: "07",
    title: "How to Negotiate the Deal",
    description: "Negotiation tactics, deal structure, and terms.",
    href: "/guide/negotiation",
    time: "12 min read",
  },
  {
    number: "08",
    title: "Financing Your Acquisition",
    description: "Loans, seller financing, and creative funding.",
    href: "/guide/financing",
    time: "15 min read",
  },
  {
    number: "09",
    title: "Legal Requirements",
    description: "Documentation, compliance, and transfer process.",
    href: "/guide/legal",
    time: "12 min read",
  },
  {
    number: "10",
    title: "First 90 Days After Buying",
    description: "Transition playbook for new business owners.",
    href: "/guide/first-90-days",
    time: "10 min read",
  },
];

export default function GuidePage() {
  // Load MDX content
  const { frontmatter, content } = getMDXContent('guide-index.mdx');
  const faqs = extractFAQs(content);

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        url="https://buyabusiness-india.com/guide"
        datePublished="2026-02-01"
        dateModified={frontmatter.lastUpdated || "2026-02-19"}
      />
      <FAQSchema faqs={faqs} />

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "https://buyabusiness-india.com" },
              { name: "Guide" },
            ]}
          />

          <p className="last-updated">Last updated: {frontmatter.lastUpdated || "February 2026"}</p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {frontmatter.title}
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            This guide covers everything you need to know about acquiring a
            small business in India — from finding opportunities to closing the
            deal and running your new company.
          </p>

          {/* What you'll learn */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What you&apos;ll learn:</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                How to find businesses for sale in India
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Methods to value a small business accurately
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Due diligence checklist to avoid costly mistakes
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Financing options for Indian acquisitions
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Legal requirements and documentation
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Post-acquisition transition strategies
              </li>
            </ul>
          </div>

          {/* Key Insight */}
          <div className="key-insight mt-8">
            <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">
              Key Insight
            </p>
            <p>
              India has over 63 million SMBs but fewer than 20 PE firms focused
              on small business acquisitions. Businesses typically sell for 2-4x
              annual profit — significantly lower than the 4-6x multiples common
              in the US and Europe.
            </p>
          </div>

          {/* Cost Overview Table */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does it cost to buy a small business?</h2>
            <p className="text-gray-600 mb-4">
              Small businesses in India typically sell for 2-4x annual profit (Seller&apos;s Discretionary Earnings), 
              with prices ranging from ₹10 lakh for micro-businesses to ₹10+ crore for established mid-size companies.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Business Profit (Annual)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Multiple</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estimated Price Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹5 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹10-15 lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹10 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹20-30 lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹25 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2.5-3.5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹62-87 lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹50 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">3-4x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹1.5-2 crore</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹1 crore</td>
                    <td className="px-4 py-3 text-sm text-gray-600">3-5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹3-5 crore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Chapter List */}
          <div className="mt-12 space-y-4">
            {chapters.map((chapter) => (
              <Link
                key={chapter.href}
                href={chapter.href}
                className="group block bg-white border border-gray-200 rounded-lg p-5 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <span className="text-sm font-mono text-emerald-600 mt-1">
                      {chapter.number}
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {chapter.title}
                      </h2>
                      <p className="mt-1 text-gray-600">{chapter.description}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    {chapter.time}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Where to Find Businesses */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Where can you find businesses for sale?</h2>
            <p className="text-gray-600 mb-6">
              The primary channels for finding businesses for sale in India include online marketplaces, 
              business brokers, CA networks, and direct outreach to business owners.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Online Marketplaces</h3>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• SMERGERS — India&apos;s largest SME platform</li>
                  <li>• IndiaMart Business Transfer</li>
                  <li>• BizBuySell India</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Professional Networks</h3>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Business brokers and M&A advisors</li>
                  <li>• Chartered Accountant networks</li>
                  <li>• Industry associations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8 faq-section">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <NewsletterSignup />
        </div>
      </article>
    </>
  );
}
