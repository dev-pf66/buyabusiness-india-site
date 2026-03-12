import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { getMDXContent, extractFAQs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "How to Value a Small Business in India (2026 Guide)",
  description:
    "Learn how to value a small business in India. Covers valuation methods, profit multiples by sector, and factors that affect business prices.",
  alternates: {
    canonical: "https://buyabusiness-india.com/guide/valuation",
  },
};

export default function ValuationPage() {
  // Load MDX content for FAQs
  const { frontmatter, content } = getMDXContent('valuation.mdx');
  const faqs = extractFAQs(content);

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        url="https://buyabusiness-india.com/guide/valuation"
        datePublished="2026-02-01"
        dateModified={frontmatter.lastUpdated || "2026-02-19"}
      />
      <FAQSchema faqs={faqs} />

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "https://buyabusiness-india.com" },
              { name: "Guide", url: "https://buyabusiness-india.com/guide" },
              { name: "Valuation" },
            ]}
          />

          <p className="last-updated">Last updated: {frontmatter.lastUpdated || "February 2026"}</p>

          <div className="author-byline">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
              BA
            </div>
            <div>
              <p className="font-medium text-gray-900">Buy a Business India</p>
              <p className="text-sm">15 min read</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            How to Value a Small Business in India
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            The most common way to value a small business in India is using a multiple of annual 
            profit—typically 2-4x Seller&apos;s Discretionary Earnings (SDE) for businesses under ₹2 crore 
            and 3-5x EBITDA for larger companies.
          </p>

          <div className="prose mt-12">
            <h2>How do you value a small business in India?</h2>
            <p>
              Small business valuation in India primarily uses the income approach, calculating value 
              as annual profit multiplied by an appropriate multiple based on industry, risk factors, 
              and growth potential. A business generating ₹25 lakh annual profit with a 3x multiple 
              would be valued at approximately ₹75 lakh.
            </p>

            {/* Valuation Table */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Business Profit (Annual)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Multiple</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estimated Value Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹5 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1.5-2.5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹7.5-12.5 lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹10 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹20-30 lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹25 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2.5-3.5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹62.5-87.5 lakh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹50 lakh</td>
                    <td className="px-4 py-3 text-sm text-gray-600">3-4x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹1.5-2 crore</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">₹1 crore</td>
                    <td className="px-4 py-3 text-sm text-gray-600">3.5-5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">₹3.5-5 crore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="key-insight">
              <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">
                Key Insight
              </p>
              <p>
                Small businesses in India typically sell for 2-4x annual profit —
                significantly lower than the 4-6x multiples common in the US.
                This creates opportunity for buyers who can source deals
                effectively.
              </p>
            </div>

            <h2>What is Seller&apos;s Discretionary Earnings (SDE)?</h2>
            <p>
              Seller&apos;s Discretionary Earnings (SDE) is the total annual financial benefit a full-time 
              owner-operator derives from a business, calculated by adding net profit, owner&apos;s salary, 
              owner&apos;s perks, and non-cash expenses like depreciation. SDE is the standard profit measure 
              for valuing owner-operated small businesses.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SDE Calculation Example:</h3>
              <table className="min-w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">Net Profit (as reported)</td>
                    <td className="py-2 text-right text-gray-900">₹8,00,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">+ Owner&apos;s salary</td>
                    <td className="py-2 text-right text-gray-900">₹6,00,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">+ Owner&apos;s car expenses</td>
                    <td className="py-2 text-right text-gray-900">₹1,50,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">+ Personal phone/internet</td>
                    <td className="py-2 text-right text-gray-900">₹30,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">+ Depreciation</td>
                    <td className="py-2 text-right text-gray-900">₹2,00,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">+ One-time legal expense</td>
                    <td className="py-2 text-right text-gray-900">₹75,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-600">- Market-rate manager salary</td>
                    <td className="py-2 text-right text-red-600">(₹3,60,000)</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="py-2 text-gray-900">= Adjusted SDE</td>
                    <td className="py-2 text-right text-emerald-600">₹14,95,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What multiple should you pay for a business in India?</h2>
            <p>
              The appropriate multiple depends on industry, growth rate, owner dependency, customer concentration, 
              and competitive position—typically ranging from 2x for risky owner-dependent businesses to 5x+ for 
              scalable businesses with recurring revenue.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical SDE Multiple</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key Value Drivers</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Manufacturing (B2B)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">3-5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Equipment, customer contracts, capacity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Wholesale/Distribution</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3.5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Supplier relationships, territory</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Retail (single location)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1.5-2.5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Location, lease terms, inventory</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">E-commerce/D2C</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2.5-4x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Brand, repeat customers, margins</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">SaaS/Software</td>
                    <td className="px-4 py-3 text-sm text-gray-600">3-6x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">ARR, churn rate, growth</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Professional Services</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Client relationships, recurring revenue</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Healthcare/Diagnostic</td>
                    <td className="px-4 py-3 text-sm text-gray-600">3-5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Equipment, reputation, licenses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Restaurants/F&B</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1.5-2.5x</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Location, recipes, staff</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What are the main business valuation methods?</h2>
            <p>
              Three primary valuation methods exist: the income approach (multiple of earnings), 
              asset approach (net asset value), and market approach (comparable transactions). 
              For most SMB acquisitions, the income approach is most relevant and commonly used.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">When to Use</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Application</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">SDE Multiple</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Small, owner-operated businesses</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Most deals under ₹2 crore</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">EBITDA Multiple</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Larger businesses with management</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Deals ₹2-50 crore</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Asset-Based</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Manufacturing, real estate, distressed</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Asset-heavy businesses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">DCF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">High-growth, complex projections</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Larger deals, institutional buyers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Market Comps</td>
                    <td className="px-4 py-3 text-sm text-gray-600">When data available</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Benchmarking, negotiation support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What factors increase business value?</h2>
            <p>
              Factors that increase business value include recurring revenue, documented systems, 
              diverse customer base, strong growth trajectory, transferable relationships, and owner independence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-emerald-50 rounded-lg p-4">
                <h3 className="font-semibold text-emerald-800 mb-2">Premium Value Factors</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Recurring Revenue (25-50% premium)</li>
                  <li>• Owner Independence (20-40% premium)</li>
                  <li>• Customer Diversification (15-25% premium)</li>
                  <li>• Documented Systems (10-20% premium)</li>
                  <li>• Growth Trajectory (20-50% premium)</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Discount Factors</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• &gt;40% revenue from one customer (-20-40%)</li>
                  <li>• Owner works 60+ hours/week (-15-30%)</li>
                  <li>• Revenue declining 3+ years (-30-50%)</li>
                  <li>• No audited financials (-10-20%)</li>
                  <li>• Pending litigation (case-specific)</li>
                </ul>
              </div>
            </div>

            <h2>How do you verify the financials are accurate?</h2>
            <p>
              Verify financial accuracy by cross-referencing reported revenues with bank deposits, 
              GST returns, and income tax filings—discrepancies are common in Indian SMBs and must 
              be understood before determining value.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 my-6">
              <h3 className="font-semibold text-amber-800 mb-2">Financial Verification Checklist:</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Compare bank deposits to reported revenue (3 years)</li>
                <li>Review GST returns (GSTR-1, GSTR-3B) against financials</li>
                <li>Check income tax returns for profit consistency</li>
                <li>Verify major receivables exist (call customers if needed)</li>
                <li>Physical verification of inventory and equipment</li>
              </ol>
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

          {/* Related Questions */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Related Questions
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guide/how-much-money"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How much money do you need to buy a business?
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/due-diligence"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  What is due diligence when buying a business?
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/negotiation"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How do you negotiate when buying a business?
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/glossary"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Business acquisition glossary
                </Link>
              </li>
            </ul>
          </section>

          {/* Newsletter */}
          <NewsletterSignup />
        </div>
      </article>
    </>
  );
}
