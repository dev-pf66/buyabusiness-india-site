import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { getMDXContent, extractFAQs } from "@/lib/mdx";

const stats = [
  { value: "63M+", label: "SMBs in India" },
  { value: "<20", label: "Active PE firms in SMB space" },
  { value: "2-4x", label: "Typical profit multiples" },
  { value: "₹10L-1Cr", label: "Common deal sizes" },
];

const guides = [
  {
    title: "How to Buy a Business in India",
    description: "Step-by-step guide from finding deals to closing.",
    href: "/guide/how-to-buy",
    icon: "📘",
  },
  {
    title: "How to Value a Small Business",
    description: "Valuation methods, multiples, and what affects price.",
    href: "/guide/valuation",
    icon: "📊",
  },
  {
    title: "Due Diligence Checklist",
    description: "What to check before you buy any business.",
    href: "/guide/due-diligence",
    icon: "✅",
  },
  {
    title: "Financing Your Acquisition",
    description: "Loans, seller financing, and creative structures.",
    href: "/guide/financing",
    icon: "💰",
  },
];

export default function HomePage() {
  // Load MDX content for FAQs
  const { content } = getMDXContent('homepage.mdx');
  const faqs = extractFAQs(content);

  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Learn how to buy a{" "}
              <span className="text-emerald-600">small business</span> in India
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The complete guide to acquiring profitable businesses. Valuation,
              due diligence, financing, and finding deals — all in one place.
            </p>

            <div className="mt-10">
              <NewsletterSignup variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insight Box - AI Quotable */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-6 sm:p-8">
            <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">
              Key Insight
            </p>
            <p className="text-xl sm:text-2xl font-medium text-gray-900">
              India has over 63 million SMBs but fewer than 20 PE firms focused
              on small business acquisitions. This creates massive opportunity
              for individual buyers — businesses sell for 2-4x profit vs. 4-6x
              in the US.
            </p>
          </div>
        </div>
      </section>

      {/* Why Buy Section - from MDX */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why buy an existing business?
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Buying an existing business eliminates the riskiest phase of entrepreneurship—the startup years. 
              You inherit customers, revenue, trained staff, and operational systems that took years to build.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Path</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time to Profitability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capital at Risk</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Start from scratch</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2-5 years</td>
                  <td className="px-6 py-4 text-sm text-gray-600">High (₹20-50 lakh+)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">~10% survive 5 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">Buy existing business</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 font-medium">Day 1</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Moderate (tied to assets)</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 font-medium">~70% still operating after 5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Start with the fundamentals
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Everything you need to know about buying a business in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{guide.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{guide.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/guide"
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
            >
              View the complete guide
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Types Section - from MDX */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What types of businesses can you buy?
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Small businesses across every sector are available for acquisition in India, 
              from manufacturing units to e-commerce stores.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Price Range</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Profit Range</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Retail/Kirana Store</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹5-30 lakh</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹3-12 lakh</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Restaurant/Café</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹15-75 lakh</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹5-25 lakh</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Manufacturing Unit</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹50 lakh - ₹10 crore</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹15 lakh - ₹2 crore</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Service Business</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹10-50 lakh</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹5-20 lakh</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">E-commerce/D2C</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹20 lakh - ₹3 crore</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹8-60 lakh</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">SaaS/Digital</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹15 lakh - ₹5 crore</td>
                  <td className="px-6 py-4 text-sm text-gray-600">₹5 lakh - ₹1 crore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to buy your first business?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Join our newsletter for weekly insights on deals, valuation tips,
            and market opportunities.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            Subscribe for free
          </Link>
        </div>
      </section>
    </>
  );
}
