import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Business Acquisition Glossary: 50+ M&A Terms Explained for Indian Buyers",
  description:
    "Complete glossary of business acquisition and M&A terminology for buyers in India. Understand SDE, EBITDA, LOI, SPA, due diligence, and 50+ essential terms.",
  alternates: {
    canonical: "https://buyabusiness-india.com/resources/glossary",
  },
};

// Define glossary terms organized by category
const glossaryCategories = [
  {
    title: "Valuation Terms",
    id: "valuation",
    terms: [
      {
        term: "SDE (Seller's Discretionary Earnings)",
        definition: "The total financial benefit a single owner-operator derives from a business annually. Calculated by adding net profit, owner's salary, personal expenses, and non-cash expenses like depreciation. SDE is the primary valuation metric for small businesses under ₹10 crore.",
      },
      {
        term: "EBITDA",
        definition: "Earnings Before Interest, Taxes, Depreciation, and Amortization. Measures operational profitability independent of financing decisions and accounting methods. Standard for mid-market transactions (₹10 crore+) where professional management runs operations.",
      },
      {
        term: "Adjusted EBITDA",
        definition: "EBITDA normalized by removing non-recurring, unusual, or non-operational items. Common adjustments include one-time legal settlements, family employment above market rate, and personal expenses run through the company.",
      },
      {
        term: "Valuation Multiple",
        definition: "A ratio used to determine business value by multiplying a financial metric (typically SDE or EBITDA) by an industry-appropriate factor. Small businesses in India typically sell for 2-4x SDE or 3-6x EBITDA.",
      },
      {
        term: "DCF (Discounted Cash Flow)",
        definition: "A valuation method estimating business value based on projected future cash flows, discounted to present value. Common in PE/VC deals but less practical for small business acquisitions.",
      },
      {
        term: "Fair Market Value (FMV)",
        definition: "The price at which a business would change hands between willing buyer and seller, both having reasonable knowledge of relevant facts. Required for tax purposes and related-party transactions.",
      },
      {
        term: "Goodwill",
        definition: "Intangible value beyond physical assets—including brand reputation, customer relationships, trained workforce, and market position. The premium paid above net tangible assets.",
      },
      {
        term: "Book Value",
        definition: "Net worth as recorded in financial statements—total assets minus total liabilities. Represents historical accounting values, not current market values.",
      },
      {
        term: "Enterprise Value (EV)",
        definition: "Total value of a business including both equity and debt. Calculated as: Equity Value + Total Debt - Cash. Purchase prices are often quoted as enterprise value.",
      },
    ],
  },
  {
    title: "Deal Structure Terms",
    id: "deal-structure",
    terms: [
      {
        term: "LOI (Letter of Intent)",
        definition: "Preliminary document outlining principal terms of a proposed acquisition. Typically non-binding except for exclusivity and confidentiality clauses. Secures exclusive negotiating rights for 60-90 days.",
      },
      {
        term: "SPA (Share Purchase Agreement)",
        definition: "The definitive legal contract governing sale of company shares. Contains purchase price, representations and warranties, indemnification provisions, closing conditions, and post-closing obligations.",
      },
      {
        term: "APA (Asset Purchase Agreement)",
        definition: "Governs sale of specific business assets rather than company shares. Allows selective acquisition of desired assets while leaving unwanted liabilities behind. Common for proprietorships and partnerships.",
      },
      {
        term: "Asset Purchase",
        definition: "Acquisition structure where buyer purchases specific assets (equipment, inventory, contracts, IP) rather than company shares. Avoids inheriting unknown liabilities but requires individual asset transfers.",
      },
      {
        term: "Share Purchase",
        definition: "Acquisition structure where buyer acquires all shares of the target company, becoming owner of the entire legal entity. Company continues with same PAN, accounts, and licenses.",
      },
      {
        term: "Earnout",
        definition: "Contingent payment mechanism where portion of purchase price is paid based on achieving specified performance targets post-acquisition. Bridges valuation gaps between buyers and sellers.",
      },
      {
        term: "Seller Financing",
        definition: "When the seller provides a loan to the buyer as part of purchase price. Typically 20-40% of deal value with 15-20% interest over 2-4 years. Demonstrates seller confidence in the business.",
      },
      {
        term: "Holdback",
        definition: "Portion of purchase price retained by buyer for specified period to secure seller obligations—typically 10-20% held for 12-24 months to cover indemnification claims.",
      },
      {
        term: "Escrow",
        definition: "Arrangement where neutral third party holds funds or documents, releasing only when specified conditions are satisfied. Provides security to both parties during transaction.",
      },
      {
        term: "Working Capital Adjustment",
        definition: "Purchase price mechanism ensuring business maintains adequate operating liquidity at closing. Price adjusts based on actual vs. target working capital levels.",
      },
      {
        term: "Exclusivity (No-Shop)",
        definition: "Contractual commitment where seller agrees not to solicit or negotiate with other buyers for specified period (typically 60-120 days) while negotiating with exclusive buyer.",
      },
    ],
  },
  {
    title: "Due Diligence Terms",
    id: "due-diligence",
    terms: [
      {
        term: "Due Diligence",
        definition: "Comprehensive investigation of a target business covering financial, legal, tax, operational, and commercial dimensions. Confirms information, identifies risks, and validates valuation. Typically 30-60 days.",
      },
      {
        term: "Representations and Warranties",
        definition: "Statements of fact in the SPA covering business condition, legal compliance, and financial accuracy. If false, the other party has recourse through indemnification claims.",
      },
      {
        term: "Indemnification",
        definition: "Contractual mechanism obligating seller to compensate buyer for losses arising from breached representations or warranties. Buyer's remedy for post-closing problems.",
      },
      {
        term: "Material Adverse Change (MAC)",
        definition: "Clause allowing transaction termination if significant negative changes affect the target business between signing and closing. Definition heavily negotiated.",
      },
      {
        term: "Disclosure Schedule",
        definition: "Exhibit to SPA listing exceptions to seller's representations. Brings known issues into the open, preventing future claims based on disclosed matters.",
      },
      {
        term: "Quality of Earnings (QofE)",
        definition: "In-depth financial analysis validating EBITDA, identifying adjustments, and assessing earnings sustainability. Gold standard for financial due diligence in mid-market deals.",
      },
      {
        term: "Data Room",
        definition: "Secure repository (typically virtual/cloud-based) containing documents for buyer due diligence review. Organized data rooms accelerate due diligence and signal seller professionalism.",
      },
      {
        term: "Conditions Precedent (CPs)",
        definition: "Requirements that must be satisfied before parties are obligated to close. Common CPs: satisfactory due diligence, regulatory approvals, no material adverse change.",
      },
    ],
  },
  {
    title: "India-Specific Legal Terms",
    id: "india-legal",
    terms: [
      {
        term: "ROC (Registrar of Companies)",
        definition: "Government authority registering companies and maintaining corporate records. Share transfers require ROC filings including Form SH-4 and stamp duty payment.",
      },
      {
        term: "MCA (Ministry of Corporate Affairs)",
        definition: "Government ministry administering Companies Act 2013 and corporate law. MCA21 portal used for all company filings and public record searches.",
      },
      {
        term: "GST (Goods and Services Tax)",
        definition: "India's unified indirect tax on supply of goods and services. GST compliance history is critical in due diligence—non-compliance creates buyer liability risk.",
      },
      {
        term: "EPF/PF (Employee Provident Fund)",
        definition: "Mandatory retirement savings scheme. Employers must contribute 12% of eligible employee wages. Non-compliance creates significant liability exposure for buyers.",
      },
      {
        term: "ESI (Employees' State Insurance)",
        definition: "Social security and health insurance scheme. Applies to establishments with 10+ employees with salary below specified threshold. Another key compliance area.",
      },
      {
        term: "TDS (Tax Deducted at Source)",
        definition: "Mechanism for collecting income tax at payment source. Payers must deduct tax and deposit with government. TDS defaults create buyer liability in acquisitions.",
      },
      {
        term: "Stamp Duty",
        definition: "Tax on legal documents including share transfers. Rates vary by state (typically 0.25% on shares). Must be paid before ROC accepts share transfer filings.",
      },
      {
        term: "FDI (Foreign Direct Investment)",
        definition: "Investment by foreign entities in Indian companies. Most sectors allow 100% FDI under automatic route. Some sectors require government approval.",
      },
      {
        term: "FEMA (Foreign Exchange Management Act)",
        definition: "Law governing foreign exchange transactions and cross-border investments. NRI acquisitions must comply with FEMA regulations for repatriation.",
      },
    ],
  },
  {
    title: "Financing Terms",
    id: "financing",
    terms: [
      {
        term: "Down Payment",
        definition: "Initial cash portion paid at closing, typically 25-50% of purchase price. Balance covered by seller financing or bank loans.",
      },
      {
        term: "Seller Note",
        definition: "Formal promissory note documenting seller financing terms—principal amount, interest rate, repayment schedule, and security arrangements.",
      },
      {
        term: "LAP (Loan Against Property)",
        definition: "Secured loan using real estate as collateral. Common acquisition financing method in India since dedicated acquisition loans are rare.",
      },
      {
        term: "Working Capital",
        definition: "Funds needed for day-to-day operations—cash, receivables, and inventory minus payables. Buyers need working capital reserves beyond purchase price.",
      },
      {
        term: "Debt Service",
        definition: "Total principal and interest payments required on acquisition debt. Critical calculation to ensure business cash flow covers debt obligations.",
      },
    ],
  },
  {
    title: "Transaction Process Terms",
    id: "process",
    terms: [
      {
        term: "Closing (Completion)",
        definition: "Formal event when ownership transfers—signing final documents, paying purchase price, and delivering shares or assets. Post-closing, buyer assumes control.",
      },
      {
        term: "Transition Period",
        definition: "Post-closing period (typically 30-90 days) where seller helps buyer learn operations, introduces customers and suppliers, and transfers knowledge.",
      },
      {
        term: "Non-Compete Agreement",
        definition: "Contract restricting seller from competing with the sold business for specified period and geography. Essential to protect purchased goodwill.",
      },
      {
        term: "Confidentiality Agreement (NDA)",
        definition: "Agreement protecting sensitive business information shared during acquisition process. Required before accessing detailed financials.",
      },
      {
        term: "Information Memorandum (IM)",
        definition: "Detailed document describing business for sale—history, financials, operations, market position, and growth opportunities. Prepared by seller or broker.",
      },
      {
        term: "Teaser",
        definition: "Brief anonymous document describing business opportunity without identifying the company. Used to gauge buyer interest before NDA signing.",
      },
    ],
  },
];

export default function GlossaryPage() {
  const { frontmatter } = getMDXContent('glossary.mdx');

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        url="https://buyabusiness-india.com/resources/glossary"
        datePublished="2026-02-01"
        dateModified="2026-02-19"
      />

      <div className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "https://buyabusiness-india.com" },
              { name: "Resources", url: "https://buyabusiness-india.com/resources" },
              { name: "Glossary" },
            ]}
          />

          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Business Acquisition Glossary
          </h1>

          <p className="mt-4 text-xl text-gray-600 leading-relaxed">
            Everything you need to understand when buying a business in India. This comprehensive 
            glossary covers valuation methods, deal structures, legal requirements, and operational 
            terms used in business acquisitions and M&A transactions.
          </p>

          {/* Quick Navigation */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Jump to section:</h2>
            <div className="flex flex-wrap gap-3">
              {glossaryCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-emerald-300 hover:text-emerald-600 transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>

          {/* Glossary Content */}
          <div className="mt-12 space-y-16">
            {glossaryCategories.map((category) => (
              <section key={category.id} id={category.id}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.terms.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-5 hover:border-emerald-200 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.term}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Key Insight */}
          <div className="mt-16 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-6">
            <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">
              Key Insight
            </p>
            <p className="text-gray-900">
              Understanding M&A terminology is essential for effective negotiation. When buyers 
              and sellers speak the same language, transactions move faster and misunderstandings 
              decrease. Bookmark this glossary for reference during your acquisition journey.
            </p>
          </div>

          {/* Related Resources */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Related Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guide"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Complete Guide to Buying a Business in India
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/valuation"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  How to Value a Small Business
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/due-diligence"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Due Diligence Checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/checklist"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Downloadable Due Diligence Checklist
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-sm text-gray-500 italic">
            This glossary is for educational purposes. Terminology and practices may vary by 
            transaction. Always consult qualified professionals for specific situations.
          </p>
        </div>
      </div>
    </>
  );
}
