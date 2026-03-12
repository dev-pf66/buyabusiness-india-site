import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { getMDXContent, extractFAQs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Due Diligence Checklist for Buying a Business in India (Free)",
  description:
    "Free downloadable due diligence checklist for buying a small business in India. 100+ items covering financial, legal, tax, operational, and HR verification.",
  alternates: {
    canonical: "https://buyabusiness-india.com/resources/checklist",
  },
};

const checklistSections = [
  {
    title: "Financial Due Diligence",
    emoji: "💰",
    items: [
      "Income Tax Returns (3-5 years)",
      "GST Returns - GSTR-1 (2+ years)",
      "GST Returns - GSTR-3B (2+ years)",
      "Bank statements - all accounts (3 years)",
      "Revenue reconciliation (books vs bank vs GST)",
      "Monthly revenue breakdown (24 months)",
      "Revenue by customer (top 20 accounts)",
      "Revenue by product/service line",
      "Accounts receivable aging report",
      "Bad debt history and write-offs",
      "Profit & Loss statements (3 years)",
      "Monthly P&L breakdown (24 months)",
      "Gross margin analysis by product/service",
      "Operating expense breakdown",
      "Owner compensation and perks detail",
      "Related party transactions",
      "SDE/EBITDA calculation and normalization",
    ],
  },
  {
    title: "Tax Compliance",
    emoji: "📋",
    items: [
      "GST registration active and current",
      "All GSTR-1 returns filed",
      "All GSTR-3B returns filed",
      "GST payment challans",
      "Input tax credit reconciliation",
      "Any GST notices or demands",
      "ITR filed all years",
      "Tax audit reports (if applicable)",
      "TDS returns filed",
      "Any assessment orders pending",
      "EPF registration and payments",
      "ESI registration and payments",
      "Professional Tax deductions",
      "Gratuity provision/insurance",
    ],
  },
  {
    title: "Legal Due Diligence",
    emoji: "⚖️",
    items: [
      "Certificate of Incorporation",
      "Memorandum of Association (MOA)",
      "Articles of Association (AOA)",
      "PAN Card of company",
      "GST registration certificate",
      "Shareholding pattern and history",
      "All board resolutions (5 years)",
      "Shop and Establishment license",
      "Trade license (municipal)",
      "FSSAI license (if food business)",
      "Pollution/environmental clearances",
      "Factory license (if applicable)",
      "Property ownership or lease documents",
      "Customer contracts (major)",
      "Supplier and vendor agreements",
      "Trademark registrations",
      "Domain name ownership",
      "Pending lawsuits or litigation",
      "Insurance policies",
    ],
  },
  {
    title: "Operational Due Diligence",
    emoji: "⚙️",
    items: [
      "Standard operating procedures documented",
      "Accounting software and processes",
      "CRM/customer management system",
      "Inventory management system",
      "Quality control procedures",
      "Complete equipment list",
      "Physical verification of assets",
      "Equipment condition assessment",
      "Maintenance records",
      "Inventory physical count",
      "Comparison of inventory to books",
      "Key supplier list and terms",
      "Critical single-source dependencies",
    ],
  },
  {
    title: "Customer Due Diligence",
    emoji: "👥",
    items: [
      "Customer-level revenue (top 20)",
      "Customer concentration analysis",
      "Revenue trend by customer",
      "Contract vs non-contract revenue split",
      "Customer tenure analysis",
      "Key relationship holders (owner vs company)",
      "Contract terms and expiration dates",
      "Customer complaint history",
      "Online reviews and reputation",
      "Top 5 customer conversations",
    ],
  },
  {
    title: "HR Due Diligence",
    emoji: "👔",
    items: [
      "Complete employee list with tenure",
      "Organization structure",
      "Employment contracts/appointment letters",
      "Salary details (all employees)",
      "Benefits and allowances",
      "Bonus/incentive structure",
      "Market rate comparison",
      "Critical employees identified",
      "Key person retention risk",
      "Non-compete agreements in place",
      "EPF compliance verified",
      "ESI compliance verified",
      "Gratuity liability calculated",
      "Leave encashment liability",
      "Any employee disputes pending",
    ],
  },
];

const redFlags = [
  {
    flag: "Cash revenue that can't be verified",
    consequence: "If bank deposits don't match reported revenue, you can't trust the numbers",
  },
  {
    flag: "Single customer >25% of revenue",
    consequence: "Losing one relationship could tank the business",
  },
  {
    flag: "Tax non-compliance or pending disputes",
    consequence: "These become your problem after acquisition",
  },
  {
    flag: "Key employees planning to leave",
    consequence: "Especially if they have critical customer or technical relationships",
  },
  {
    flag: "Seller won't provide documents or is evasive",
    consequence: "Transparency issues early usually mean bigger problems later",
  },
  {
    flag: "Declining revenue without clear explanation",
    consequence: "Understand the cause before proceeding",
  },
  {
    flag: "Pending litigation or regulatory issues",
    consequence: "Unknown liability exposure",
  },
];

export default function ChecklistPage() {
  // Load MDX content for FAQs
  const { content } = getMDXContent('checklist.mdx');
  const faqs = extractFAQs(content);

  return (
    <>
      <FAQSchema faqs={faqs} />
      
      <div className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "https://buyabusiness-india.com" },
              { name: "Resources", url: "https://buyabusiness-india.com/resources" },
              { name: "Due Diligence Checklist" },
            ]}
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                Due Diligence Checklist
              </h1>
              <p className="mt-2 text-gray-600">
                100+ items to verify before buying a business in India
              </p>
            </div>
          </div>

          <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">💡</span>
              <div>
                <h2 className="font-semibold text-gray-900">How to use this checklist</h2>
                <p className="mt-1 text-gray-600">
                  Work through each section systematically during your due diligence period. 
                  Request documents early, track what you&apos;ve received, and note any concerns. 
                  For a detailed explanation of each area, see our{" "}
                  <Link href="/guide/due-diligence" className="text-emerald-600 hover:underline">
                    Due Diligence Guide
                  </Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Primary Reviewer</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">Financial</td>
                  <td className="px-4 py-3 text-sm text-gray-600">17 items</td>
                  <td className="px-4 py-3 text-sm text-gray-600">CA + Buyer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">Tax Compliance</td>
                  <td className="px-4 py-3 text-sm text-gray-600">14 items</td>
                  <td className="px-4 py-3 text-sm text-gray-600">CA</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">Legal</td>
                  <td className="px-4 py-3 text-sm text-gray-600">19 items</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Lawyer + Buyer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">Operational</td>
                  <td className="px-4 py-3 text-sm text-gray-600">13 items</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Buyer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">Customer</td>
                  <td className="px-4 py-3 text-sm text-gray-600">10 items</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Buyer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600">HR</td>
                  <td className="px-4 py-3 text-sm text-gray-600">15 items</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Lawyer + CA</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Checklist Sections */}
          <div className="mt-12 space-y-10">
            {checklistSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">{section.emoji}</span>
                  {section.title}
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center px-4 py-3 hover:bg-gray-50"
                    >
                      <div className="w-5 h-5 border-2 border-gray-300 rounded mr-4 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Red Flags Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🚨 Red Flags to Watch For
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <ul className="space-y-4">
                {redFlags.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 mt-0.5 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.flag}</span>
                      <span className="text-gray-600"> — {item.consequence}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pro Tips for Effective Due Diligence
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">Request documents upfront</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Send your complete document request list at the start. Waiting for documents extends timelines unnecessarily.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">Use a data room</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Ask the seller to upload documents to a shared folder. Track what&apos;s received vs. outstanding.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">Hire professionals</h3>
                <p className="mt-2 text-sm text-gray-600">
                  For deals over ₹25-50 lakh, hire a CA for financial review and a lawyer for legal review. Worth every rupee.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">Talk to customers</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Customer reference calls are invaluable. Ask about satisfaction, likelihood to continue, and concerns.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">Visit in person</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Spend time at the business. Observe operations. Meet employees. You&apos;ll learn things documents won&apos;t show.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900">Document everything</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Keep detailed notes. Create a due diligence report summarizing findings, concerns, and negotiation points.
                </p>
              </div>
            </div>
          </div>

          {/* Post-Checklist Actions */}
          <div className="mt-12 bg-emerald-50 rounded-xl p-6">
            <h2 className="font-semibold text-gray-900 mb-4">For Each Issue Found:</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li><strong>Quantify</strong> — Calculate financial impact where possible</li>
              <li><strong>Document</strong> — Keep evidence and notes</li>
              <li><strong>Categorize</strong> — Deal-breaker, price adjustment, or accept with protections</li>
              <li><strong>Negotiate</strong> — Use findings in price/terms discussions</li>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Related Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guide/due-diligence"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Due Diligence Guide — Detailed explanation of each area
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/how-to-buy"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How to Buy a Business — Complete step-by-step process
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/valuation"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Valuation Guide — How to value what you&apos;re buying
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/glossary"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Glossary — M&A terms explained
                </Link>
              </li>
            </ul>
          </div>

          <NewsletterSignup />
        </div>
      </div>
    </>
  );
}
