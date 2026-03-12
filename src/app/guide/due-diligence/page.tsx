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
  title: "Due Diligence Checklist for Buying a Business in India (2026)",
  description:
    "Complete due diligence checklist for buying a small business in India. What to verify before you buy: financials, legal, operations, and more.",
  alternates: {
    canonical: "https://buyabusiness-india.com/guide/due-diligence",
  },
};

const ddSteps = [
  {
    name: "Financial due diligence",
    text: "Verify revenue, expenses, profits, cash flow, accounts receivable, and payable. Request 3 years of financials and tax returns. Reconcile bank statements with reported numbers.",
  },
  {
    name: "Tax due diligence",
    text: "Review GST filings, income tax returns, TDS compliance, and any pending assessments or disputes. Verify all statutory payments are current.",
  },
  {
    name: "Legal due diligence",
    text: "Review contracts, licenses, permits, intellectual property, litigation history, and corporate documents. Identify any potential liabilities.",
  },
  {
    name: "Operational due diligence",
    text: "Assess business processes, systems, key employees, suppliers, and operational risks. Understand what makes the business work day-to-day.",
  },
  {
    name: "Commercial due diligence",
    text: "Analyze customers, market position, competition, and growth potential. Verify customer concentration and satisfaction.",
  },
  {
    name: "HR due diligence",
    text: "Review employee contracts, compensation, benefits, PF/ESIC compliance, and identify key person risks.",
  },
];

export default function DueDiligencePage() {
  // Load MDX content for FAQs
  const { frontmatter, content } = getMDXContent('due-diligence.mdx');
  const faqs = extractFAQs(content);

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        url="https://buyabusiness-india.com/guide/due-diligence"
        datePublished="2026-02-01"
        dateModified={frontmatter.lastUpdated || "2026-02-19"}
      />
      <HowToSchema
        name="How to Conduct Due Diligence When Buying a Business"
        description="Step-by-step process for due diligence when acquiring a small business in India."
        totalTime="P6W"
        steps={ddSteps}
      />
      <FAQSchema faqs={faqs} />

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "https://buyabusiness-india.com" },
              { name: "Guide", url: "https://buyabusiness-india.com/guide" },
              { name: "Due Diligence" },
            ]}
          />

          <LastUpdated date={frontmatter.lastUpdated || "February 2026"} />
          <AuthorByline readTime="20 min read" />

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Due Diligence Checklist: What to Check Before Buying a Business
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Due diligence is the comprehensive investigation of a business before finalizing an acquisition—examining 
            financial records, legal compliance, operations, customers, and employees to verify seller claims and 
            uncover hidden risks.
          </p>

          <div className="prose mt-12">
            <h2>What is due diligence when buying a business?</h2>
            <p>
              Due diligence is the buyer&apos;s investigation period between signing a Letter of Intent (LOI) and 
              closing the purchase, typically lasting 4-8 weeks, where you verify every material claim the seller 
              has made about the business. This is your last opportunity to discover problems before committing your capital.
            </p>

            <KeyInsight>
              The goal of due diligence isn&apos;t to find the perfect business — it&apos;s to understand exactly what 
              you&apos;re buying, including the problems. Every business has issues. What matters is whether you can 
              live with them and price them appropriately.
            </KeyInsight>

            {/* Due Diligence Overview Table */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Diligence Area</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">What You&apos;re Checking</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Duration</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Financial</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Revenue, profit, cash flow accuracy</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Legal</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Compliance, contracts, litigation</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Tax</td>
                    <td className="px-4 py-3 text-sm text-gray-600">GST, income tax, PF/ESI compliance</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2-3 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Operational</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Systems, processes, quality</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1-2 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Customer</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Revenue quality, relationships</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1-2 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Employee</td>
                    <td className="px-4 py-3 text-sm text-gray-600">HR compliance, key person risk</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1-2 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Why is due diligence critical for business buyers?</h2>
            <p>
              Due diligence protects you from overpaying for a business, inheriting hidden liabilities, and 
              discovering operational problems after it&apos;s too late to adjust price or walk away. Skipping 
              or rushing due diligence is the most common mistake first-time buyers make.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6 my-6">
              <h3 className="font-semibold text-red-800 mb-2">Cost of Incomplete Due Diligence:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Undisclosed tax liability:</strong> ₹10-50 lakh+ in back taxes, penalties</li>
                <li>• <strong>Pending litigation:</strong> Unknown damages, legal fees</li>
                <li>• <strong>Customer concentration (key customer leaving):</strong> 20-50% revenue loss</li>
                <li>• <strong>Equipment needing replacement:</strong> ₹5-30 lakh capital requirement</li>
                <li>• <strong>Lease not transferable:</strong> Business must relocate</li>
                <li>• <strong>PF/ESI non-compliance:</strong> Back payments plus penalties</li>
              </ul>
            </div>

            <h2>Financial Due Diligence Checklist</h2>
            <p>
              Review at least 3-5 years of income tax returns, GST filings, bank statements, audited financials 
              (if available), and detailed accounts receivable/payable aging to verify reported revenue and profitability.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold text-gray-900 mb-4">Documents to Request:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> Income Tax Returns (3-5 years)</li>
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> GST Returns - GSTR-1 & GSTR-3B (2+ years)</li>
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> Bank statements - all accounts (3 years)</li>
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> Revenue reconciliation (books vs bank vs GST)</li>
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> Profit & Loss statements (3 years)</li>
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> Balance sheets with asset verification</li>
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> Accounts receivable aging report</li>
                <li className="flex items-center"><span className="text-emerald-500 mr-2">☐</span> Accounts payable and debt schedule</li>
              </ul>
            </div>

            <KeyInsight>
              Bank statements don&apos;t lie. Request 12-24 months of bank statements and reconcile deposits 
              with reported revenue. If there&apos;s a significant gap, investigate why. Cash businesses 
              without verifiable revenue are high-risk acquisitions.
            </KeyInsight>

            <h2>Tax Compliance Checklist</h2>
            <p>
              Verify compliance with Goods and Services Tax (GST), Income Tax, Employee Provident Fund (EPF), 
              Employees&apos; State Insurance (ESI), and Professional Tax to avoid inheriting liabilities and penalties.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tax Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Non-Compliance Issues</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">GST</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Late filing, input credit mismatches</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-medium">High (penalties steep)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Income Tax</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Underreported income, TDS defaults</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-medium">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">EPF</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Non-registration, underpayment</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-medium">High (employee claims)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">ESI</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Non-coverage of eligible employees</td>
                    <td className="px-4 py-3 text-sm text-amber-600 font-medium">Medium-High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Professional Tax</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Non-deduction</td>
                    <td className="px-4 py-3 text-sm text-amber-600 font-medium">Low-Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Legal Due Diligence Checklist</h2>
            <p>
              Legal due diligence covers business registration, all licenses and permits, property rights, 
              contracts and agreements, intellectual property, and any pending or potential litigation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Licenses & Permits</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>☐ Shop and Establishment license</li>
                  <li>☐ Trade license (municipal)</li>
                  <li>☐ FSSAI license (if food business)</li>
                  <li>☐ Pollution/environmental clearances</li>
                  <li>☐ Factory license (if applicable)</li>
                  <li>☐ Industry-specific licenses</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Contracts to Review</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>☐ Customer contracts (top 10)</li>
                  <li>☐ Supplier agreements</li>
                  <li>☐ Lease/rental agreements</li>
                  <li>☐ Loan agreements</li>
                  <li>☐ Insurance policies</li>
                  <li>☐ Non-compete agreements</li>
                </ul>
              </div>
            </div>

            <h2>Customer & Revenue Quality Checklist</h2>
            <p>
              Review customer concentration, revenue retention rates, contract terms, and speak directly 
              with major customers to verify relationships and understand their intentions post-acquisition.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Metric</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Low Risk</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Medium Risk</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">High Risk</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Top customer %</td>
                    <td className="px-4 py-3 text-sm text-emerald-600">&lt;10%</td>
                    <td className="px-4 py-3 text-sm text-amber-600">10-25%</td>
                    <td className="px-4 py-3 text-sm text-red-600">&gt;25%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Top 5 customers %</td>
                    <td className="px-4 py-3 text-sm text-emerald-600">&lt;35%</td>
                    <td className="px-4 py-3 text-sm text-amber-600">35-50%</td>
                    <td className="px-4 py-3 text-sm text-red-600">&gt;50%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Contract coverage</td>
                    <td className="px-4 py-3 text-sm text-emerald-600">&gt;70% contracted</td>
                    <td className="px-4 py-3 text-sm text-amber-600">40-70%</td>
                    <td className="px-4 py-3 text-sm text-red-600">&lt;40%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Average tenure</td>
                    <td className="px-4 py-3 text-sm text-emerald-600">&gt;5 years</td>
                    <td className="px-4 py-3 text-sm text-amber-600">2-5 years</td>
                    <td className="px-4 py-3 text-sm text-red-600">&lt;2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>HR & Employee Due Diligence</h2>
            <p>
              Review employee contracts, compensation structure, statutory compliance (EPF, ESI), key person 
              retention risk, and organizational culture to understand workforce stability and potential liabilities.
            </p>

            <KeyInsight>
              Meet key employees before closing, ideally with the seller present. Assess their attitude 
              toward the transition and likelihood of staying. Consider retention bonuses or incentives 
              for critical people.
            </KeyInsight>

            <h2>Due Diligence Timeline</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Week</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Activity</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">1-2</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Document request and initial review; financial DD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">2-3</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Tax and legal review; site visit</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">3-4</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Operational DD; customer interviews</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">4-5</td>
                    <td className="px-4 py-3 text-sm text-gray-600">HR review; follow-up on issues found</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">5-6</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Final verification; DD report compilation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">6+</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Negotiation based on findings; close preparation</td>
                  </tr>
                </tbody>
              </table>
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
                  href="/guide/how-to-buy"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How do you buy a business in India step-by-step?
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/valuation"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How do you value a small business?
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/checklist"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Download the complete due diligence checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/legal"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Legal requirements for buying a business
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
