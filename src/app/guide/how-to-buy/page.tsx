import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { HowToSchema } from "@/components/schema/HowToSchema";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { LastUpdated, AuthorByline, KeyInsight } from "@/components/LastUpdated";
import { getMDXContent, extractFAQs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "How to Buy a Business in India: Step-by-Step Guide (2026)",
  description:
    "Complete guide on how to buy a small business in India. Learn the step-by-step process from finding opportunities to closing the deal.",
  alternates: {
    canonical: "https://buyabusiness-india.com/guide/how-to-buy",
  },
};

const howToSteps = [
  {
    name: "Define your criteria",
    text: "Decide what type of business you want to buy: industry, size, location, and price range. Be specific about your skills and what you can bring to a business.",
  },
  {
    name: "Source opportunities",
    text: "Find businesses for sale through online marketplaces (IndiaMart, SMERGERS), brokers, CAs/lawyers, and direct outreach to business owners.",
  },
  {
    name: "Initial screening",
    text: "Review listing details, request basic financials, and assess fit with your criteria. Most buyers review 50-100 opportunities to find 5-10 worth pursuing.",
  },
  {
    name: "Sign NDA and review details",
    text: "Sign a non-disclosure agreement to access detailed information. Review 3 years of financials, customer data, and operational details.",
  },
  {
    name: "Meet the owner and visit",
    text: "Build rapport with the seller, understand their motivations, visit the business, meet key employees, and assess the operation firsthand.",
  },
  {
    name: "Submit Letter of Intent (LOI)",
    text: "Make a formal offer including price, terms, contingencies, and timeline. The LOI is typically non-binding but shows serious intent.",
  },
  {
    name: "Conduct due diligence",
    text: "Verify everything: financials, legal, operational, customers, employees, and contracts. This typically takes 4-8 weeks.",
  },
  {
    name: "Negotiate final terms",
    text: "Based on due diligence findings, negotiate the final purchase price, deal structure, transition support, and any adjustments.",
  },
  {
    name: "Execute legal documents",
    text: "Work with lawyers to draft and sign the Share Purchase Agreement or Asset Purchase Agreement, along with ancillary documents.",
  },
  {
    name: "Close and transition",
    text: "Transfer ownership, receive seller training, meet customers and employees, and begin operating your new business.",
  },
];

export default function HowToBuyPage() {
  // Load MDX content for FAQs
  const { frontmatter, content } = getMDXContent('how-to-buy.mdx');
  const faqs = extractFAQs(content);

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        url="https://buyabusiness-india.com/guide/how-to-buy"
        datePublished="2026-02-01"
        dateModified={frontmatter.lastUpdated || "2026-02-19"}
      />
      <HowToSchema
        name="How to Buy a Business in India"
        description="Step-by-step process to acquire a small business in India, from search to closing."
        totalTime="P4M"
        estimatedCost={{ currency: "INR", value: "1000000" }}
        steps={howToSteps}
      />
      <FAQSchema faqs={faqs} />

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "https://buyabusiness-india.com" },
              { name: "Guide", url: "https://buyabusiness-india.com/guide" },
              { name: "How to Buy" },
            ]}
          />

          <LastUpdated date={frontmatter.lastUpdated || "February 2026"} />
          <AuthorByline readTime="15 min read" />

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {frontmatter.title}
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Buying an existing business is one of the fastest paths to
            entrepreneurship. This guide walks you through the complete process
            of acquiring a small business in India — from finding opportunities
            to closing the deal.
          </p>

          <div className="prose mt-12">
            <h2>What are the steps to buy a business in India?</h2>
            <p>
              The business acquisition process in India consists of seven key phases: 
              criteria definition, search and screening, initial evaluation, due diligence, 
              negotiation, closing, and transition. The entire process typically takes 4-9 months.
            </p>

            {/* Timeline Table */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phase</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key Activities</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Duration</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">1. Define Criteria</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Industry, size, location, budget</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1-2 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">2. Search & Screen</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Find opportunities, initial calls</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-4 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">3. Initial Evaluation</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Review financials, site visits</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-4 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">4. Due Diligence</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Deep investigation, verify claims</td>
                    <td className="px-4 py-3 text-sm text-gray-600">4-8 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">5. Negotiation</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Price, terms, structure</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-4 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">6. Closing</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Documentation, fund transfer</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-4 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">7. Transition</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Seller handover, relationship building</td>
                    <td className="px-4 py-3 text-sm text-gray-600">30-90 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <KeyInsight>
              Most buyers review 50-100 opportunities to find 5-10 worth pursuing,
              and ultimately close on 1. Be prepared for a numbers game — persistence
              and systematic searching are more important than luck.
            </KeyInsight>

            <h2>Step 1: How do you define your acquisition criteria?</h2>
            <p>
              Start by defining your ideal acquisition target based on four factors: 
              industry, size (revenue and profit), location, and budget (total capital you can deploy). 
              Clear criteria prevent wasted time on unsuitable opportunities.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Questions to Define Your Criteria:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li><strong>Industry:</strong> What sectors match your experience? What industries interest you?</li>
                <li><strong>Size:</strong> What revenue and profit range is realistic for your capital and skill?</li>
                <li><strong>Location:</strong> How far are you willing to travel? Remote management possible?</li>
                <li><strong>Owner involvement:</strong> Full-time operations or semi-absentee?</li>
                <li><strong>Growth vs stability:</strong> Turnaround project or steady cash flow?</li>
                <li><strong>Budget:</strong> How much can you invest without financial stress?</li>
              </ol>
            </div>

            <h2>Step 2: Where do you search for businesses for sale?</h2>
            <p>
              Search for acquisition targets through online marketplaces (SMERGERS, IndiaMart, BizBuySell), 
              business brokers, CA networks, industry associations, and direct outreach to business owners. 
              A multi-channel approach is essential since India lacks a centralized business-for-sale platform.
            </p>

            <h3>Search Channels (Priority Order):</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
              <li><strong>SMERGERS</strong> — India&apos;s largest SME marketplace</li>
              <li><strong>Business Brokers</strong> — CAs and M&A advisors often have unlisted deals</li>
              <li><strong>IndiaMart Business Transfer</strong> — Strong for manufacturing, trading</li>
              <li><strong>Industry Networks</strong> — Trade associations, supplier referrals</li>
              <li><strong>LinkedIn Outreach</strong> — Direct approach to business owners</li>
              <li><strong>CA/CS Referrals</strong> — Professionals advising business exits</li>
            </ol>

            <KeyInsight>
              80% of small business sales happen off-market. While online listings
              are a good starting point, the best opportunities often come through
              relationships — CAs, lawyers, industry contacts, and direct outreach.
            </KeyInsight>

            <h2>Step 3: How do you evaluate a business opportunity initially?</h2>
            <p>
              Initial evaluation involves reviewing seller-provided financials, understanding the business model, 
              assessing owner dependency, and determining if the opportunity merits deeper investigation.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Red Flag</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Significance</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Declining revenue (3+ years)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Structural problems</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Investigate cause or pass</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">&gt;40% revenue from one customer</td>
                    <td className="px-4 py-3 text-sm text-gray-600">High concentration risk</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Factor into price/terms</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Owner works 60+ hours/week</td>
                    <td className="px-4 py-3 text-sm text-gray-600">High owner dependency</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Assess operability without owner</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Seller unwilling to finance</td>
                    <td className="px-4 py-3 text-sm text-gray-600">May doubt sustainability</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Proceed with caution</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Step 4: How do you make an offer (Letter of Intent)?</h2>
            <p>
              Once initial evaluation is positive, submit a Letter of Intent (LOI) outlining proposed 
              purchase price, deal structure, key terms, and conditions including exclusivity and due diligence period.
            </p>

            <h3>Standard LOI Components:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
              <li><strong>Purchase Price:</strong> Proposed amount and how you arrived at it</li>
              <li><strong>Deal Structure:</strong> Asset purchase or share purchase</li>
              <li><strong>Payment Terms:</strong> Down payment, seller financing, earnout if any</li>
              <li><strong>Exclusivity Period:</strong> 60-90 days typically</li>
              <li><strong>Due Diligence Scope:</strong> What you&apos;ll investigate</li>
              <li><strong>Conditions:</strong> Financing, due diligence results, lease transfer, etc.</li>
              <li><strong>Proposed Timeline:</strong> Target closing date</li>
            </ol>

            <h2>Step 5: What is involved in due diligence?</h2>
            <p>
              Due diligence is the comprehensive investigation of all aspects of the business—financial, 
              legal, operational, customer, and employee—conducted after LOI signing and before final commitment. 
              This phase typically takes 4-8 weeks.
            </p>
            <p>
              For a detailed framework, see our{" "}
              <Link href="/guide/due-diligence">Due Diligence Checklist</Link>.
            </p>

            <h2>Step 6: How do you negotiate the final deal?</h2>
            <p>
              Use due diligence findings to negotiate final purchase price, deal structure, representations 
              and warranties, indemnification provisions, and transition arrangements.
            </p>

            <h2>Step 7: What documents are required to close?</h2>
            <p>
              The closing requires execution of the purchase agreement (Asset Purchase Agreement or Share Purchase Agreement), 
              transfer documents for assets and licenses, and funds transfer through proper banking channels.
            </p>

            <h3>Key Documents for Asset Purchase:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
              <li>Asset Purchase Agreement (APA)</li>
              <li>Bill of Sale for movable assets</li>
              <li>Assignment and Assumption Agreement (contracts)</li>
              <li>Non-compete agreement</li>
              <li>Transition services agreement</li>
              <li>Employment agreements (key staff)</li>
            </ul>

            <h2>Step 8: What should you do during the transition period?</h2>
            <p>
              The post-closing transition period (typically 30-90 days) involves the seller introducing you 
              to customers, suppliers, and employees while you learn operations and take over day-to-day management.
            </p>

            <KeyInsight>
              Don&apos;t make major changes in your first 90 days. Spend that time
              learning the business, building relationships, and understanding why
              things work the way they do. Premature changes often backfire.
            </KeyInsight>
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
                  href="/guide/valuation"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How do you value a small business in India?
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/due-diligence"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  What should you check during due diligence?
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/financing"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How do you finance a business acquisition?
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/find-businesses"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Where can you find businesses for sale in India?
                </Link>
              </li>
            </ul>
          </section>

          <NewsletterSignup />
        </div>
      </article>
    </>
  );
}
