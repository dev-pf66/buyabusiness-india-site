import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Free Resources for Buying a Business in India",
  description:
    "Free tools and resources for business buyers in India: valuation calculator, due diligence checklist, and glossary of acquisition terms.",
  alternates: {
    canonical: "https://buyabusiness-india.com/resources",
  },
};

const resources = [
  {
    title: "Due Diligence Checklist",
    description:
      "Comprehensive checklist covering financials, legal, operations, and more. Everything you need to verify before buying.",
    href: "/resources/checklist",
    icon: "✅",
    status: "Available",
  },
  {
    title: "Deal Calculator",
    description:
      "Analyze any business deal instantly. Calculate ROI, payback period, profit multiples, and get a clear verdict on whether it's worth pursuing.",
    href: "/resources/calculator",
    icon: "🧮",
    status: "Available",
  },
  {
    title: "Acquisition Glossary",
    description:
      "All the terms you need to know: SDE, LOI, earnout, representations, and more. Jargon decoded.",
    href: "/resources/glossary",
    icon: "📖",
    status: "Coming Soon",
  },
];

const guides = [
  {
    title: "How to Buy a Business",
    description: "Step-by-step process from search to close.",
    href: "/guide/how-to-buy",
  },
  {
    title: "Valuation Guide",
    description: "Methods, multiples, and what affects price.",
    href: "/guide/valuation",
  },
  {
    title: "Due Diligence Guide",
    description: "What to check before buying any business.",
    href: "/guide/due-diligence",
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "https://buyabusiness-india.com" },
            { name: "Resources" },
          ]}
        />

        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Free Resources for Business Buyers
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Tools, templates, and guides to help you find, evaluate, and acquire
          your first business in India.
        </p>

        {/* Main Resources */}
        <div className="mt-12 grid gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className={`group block bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all ${
                resource.status === "Coming Soon"
                  ? "opacity-75 pointer-events-none"
                  : ""
              }`}
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{resource.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {resource.title}
                    </h2>
                    {resource.status === "Coming Soon" && (
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-gray-600">{resource.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Related Guides */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">
                  {guide.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-emerald-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Get new resources delivered to your inbox
          </h2>
          <p className="mt-2 text-gray-600">
            Join our newsletter for weekly insights on buying businesses in India.
          </p>
          <Link
            href="/newsletter"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Subscribe Free
          </Link>
        </div>
      </div>
    </div>
  );
}
