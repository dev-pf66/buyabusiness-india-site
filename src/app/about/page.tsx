import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { getMDXContent, extractFAQs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "About Buy a Business India",
  description:
    "Buy a Business India provides free educational resources on acquiring small and medium businesses in India. Learn about our mission, content approach, and how to use this site.",
  alternates: {
    canonical: "https://buyabusiness-india.com/about",
  },
};

export default function AboutPage() {
  // Load MDX content for FAQs
  const { frontmatter, content } = getMDXContent('about.mdx');
  const faqs = extractFAQs(content);

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "https://buyabusiness-india.com" },
              { name: "About" },
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            About Buy a Business India
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Buy a Business India is a free educational resource helping aspiring business owners 
            navigate the process of acquiring small and medium businesses in India. We provide 
            comprehensive guides, tools, and checklists to help you find, evaluate, and successfully 
            purchase an existing business.
          </p>

          <div className="prose mt-12">
            <h2>What is our mission?</h2>
            <p>
              Our mission is to make business ownership accessible by providing clear, actionable 
              guidance on buying existing businesses in India. We believe that acquiring an established 
              business offers a faster, lower-risk path to entrepreneurship than starting from scratch, 
              and we want to help more people pursue this opportunity.
            </p>
            <p>
              Starting a business from zero requires years of unprofitable operation while you develop 
              products, build a customer base, and figure out what works. Most startups fail. Buying 
              an existing business lets you skip this risky phase entirely—you acquire proven revenue, 
              trained employees, and operational systems from day one.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">What We Believe</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Acquisition &gt; Starting for most people</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Lower risk, immediate cash flow, proven model</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Education should be free</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Access shouldn&apos;t depend on ability to pay advisors</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">India-specific guidance matters</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Global content misses local context</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Practical beats theoretical</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Checklists and tools, not just concepts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Who creates this content?</h2>
            <p>
              Our content is created by people with direct experience in small business acquisitions, 
              investment banking, and entrepreneurship in India. We combine practical deal experience 
              with research into best practices from global acquisition markets.
            </p>
            <p>
              We&apos;re practitioners, not just writers. Our team has evaluated hundreds of small business 
              opportunities, completed acquisitions, and advised business owners on exits. We know what 
              works and what doesn&apos;t because we&apos;ve done it.
            </p>

            <div className="bg-emerald-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold text-emerald-800 mb-3">Our Content Principles:</h3>
              <ol className="text-gray-600 space-y-2">
                <li><strong>1. Accuracy over speed</strong> — We verify information and update content as laws and practices change</li>
                <li><strong>2. Practical over theoretical</strong> — Checklists, templates, and specific steps you can follow</li>
                <li><strong>3. India-specific</strong> — INR figures, Indian legal requirements, local marketplace names</li>
                <li><strong>4. Conservative advice</strong> — We&apos;d rather you walk away from a marginal deal than overpay</li>
                <li><strong>5. Transparent limitations</strong> — We tell you when to hire professionals</li>
              </ol>
            </div>

            <h2>What will you find on this site?</h2>
            <p>
              Buy a Business India provides guides covering the full acquisition lifecycle—from deciding 
              whether to buy a business through finding opportunities, due diligence, valuation, negotiation, 
              and post-acquisition transition. We also offer tools like valuation calculators and downloadable checklists.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Content Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">What It Covers</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Who It&apos;s For</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm"><Link href="/guide" className="text-emerald-600 hover:underline">Complete Guide</Link></td>
                    <td className="px-4 py-3 text-sm text-gray-600">End-to-end acquisition overview</td>
                    <td className="px-4 py-3 text-sm text-gray-600">First-time buyers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm"><Link href="/guide/how-to-buy" className="text-emerald-600 hover:underline">How to Buy</Link></td>
                    <td className="px-4 py-3 text-sm text-gray-600">Step-by-step process</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Active searchers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm"><Link href="/guide/valuation" className="text-emerald-600 hover:underline">Valuation Guide</Link></td>
                    <td className="px-4 py-3 text-sm text-gray-600">Pricing and multiples</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Deal evaluators</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm"><Link href="/guide/due-diligence" className="text-emerald-600 hover:underline">Due Diligence</Link></td>
                    <td className="px-4 py-3 text-sm text-gray-600">What to verify before buying</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Serious buyers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm"><Link href="/resources/checklist" className="text-emerald-600 hover:underline">Checklists</Link></td>
                    <td className="px-4 py-3 text-sm text-gray-600">Downloadable verification lists</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Active deal processors</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm"><Link href="/resources/glossary" className="text-emerald-600 hover:underline">Glossary</Link></td>
                    <td className="px-4 py-3 text-sm text-gray-600">M&A terms explained</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Everyone</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What we don&apos;t do</h2>
            <p>
              We don&apos;t broker deals, provide legal or tax advice, or guarantee any outcomes. Our content 
              is educational. For professional advice specific to your situation, consult qualified lawyers, 
              chartered accountants, and financial advisors.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-emerald-50 rounded-lg p-4">
                <h3 className="font-semibold text-emerald-800 mb-2">We Do</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Explain valuation methods</li>
                  <li>✓ Describe due diligence process</li>
                  <li>✓ Outline legal requirements</li>
                  <li>✓ Share financing options</li>
                  <li>✓ Educate on best practices</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">We Don&apos;t Do</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✗ Value specific businesses</li>
                  <li>✗ Conduct due diligence</li>
                  <li>✗ Provide legal advice</li>
                  <li>✗ Arrange financing</li>
                  <li>✗ Guarantee outcomes</li>
                </ul>
              </div>
            </div>

            <h2>How is this site funded?</h2>
            <p>
              Buy a Business India is independently operated without advertising, affiliate commissions, 
              or sponsored content. We may introduce premium resources or tools in the future, but all 
              educational content remains free.
            </p>
            <p>
              Independence matters because bias corrupts advice. Sites funded by brokers have incentive 
              to encourage deals (more deals = more fees). Sites funded by advertisers have incentive for 
              page views over accuracy. We have no such conflicts.
            </p>

            <h2>Suggested reading order</h2>
            <ol className="space-y-2">
              <li><Link href="/guide" className="text-emerald-600 hover:underline">Complete Guide to Buying a Business in India</Link></li>
              <li><Link href="/guide/why-buy" className="text-emerald-600 hover:underline">Is Buying Better Than Starting?</Link></li>
              <li><Link href="/guide/how-much-money" className="text-emerald-600 hover:underline">How Much Money Do You Need?</Link></li>
              <li><Link href="/guide/find-businesses" className="text-emerald-600 hover:underline">Where to Find Businesses for Sale</Link></li>
              <li><Link href="/guide/valuation" className="text-emerald-600 hover:underline">How to Value a Small Business</Link></li>
              <li><Link href="/guide/due-diligence" className="text-emerald-600 hover:underline">Due Diligence Checklist</Link></li>
              <li><Link href="/guide/financing" className="text-emerald-600 hover:underline">How to Finance an Acquisition</Link></li>
              <li><Link href="/guide/legal" className="text-emerald-600 hover:underline">Legal Requirements</Link></li>
              <li><Link href="/guide/first-90-days" className="text-emerald-600 hover:underline">First 90 Days After Buying</Link></li>
            </ol>
          </div>

          {/* FAQ Section */}
          {faqs.length > 0 && (
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
          )}

          {/* Contact CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Have questions or feedback? Want to share your acquisition story? We&apos;d love to hear from you.{" "}
              <Link href="/newsletter" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                Subscribe to our newsletter
              </Link>{" "}
              for weekly insights, or reach out directly via email.
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-500 italic">
            Buy a Business India provides educational content on business acquisitions. We are not brokers, 
            lawyers, or financial advisors. Always consult qualified professionals before making acquisition decisions.
          </p>
        </div>
      </article>
    </>
  );
}
