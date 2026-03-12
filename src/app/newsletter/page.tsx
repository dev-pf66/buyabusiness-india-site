import { Metadata } from "next";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Newsletter — Weekly India Acquisition Briefing",
  description:
    "Join 1,000+ entrepreneurs learning how to buy businesses in India. Weekly insights on deals, valuation, and market opportunities.",
  alternates: {
    canonical: "https://buyabusiness-india.com/newsletter",
  },
};

const benefits = [
  {
    title: "Market Insights",
    description:
      "Understand what's happening in India's SMB acquisition market — deals, trends, and opportunities.",
    icon: "📊",
  },
  {
    title: "Practical How-Tos",
    description:
      "Actionable guides on valuation, due diligence, negotiation, and financing.",
    icon: "📘",
  },
  {
    title: "Deal Teardowns",
    description:
      "Real examples of acquisitions — what worked, what didn't, and lessons learned.",
    icon: "🔍",
  },
  {
    title: "No Spam",
    description:
      "One email per week, max. Unsubscribe anytime with one click.",
    icon: "✉️",
  },
];

export default function NewsletterPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "https://buyabusiness-india.com" },
            { name: "Newsletter" },
          ]}
        />

        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            The Weekly India Acquisition Briefing
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Join 1,000+ entrepreneurs learning how to buy profitable businesses
            in India. One email per week with insights you won&apos;t find
            elsewhere.
          </p>
        </div>

        <div className="mt-12">
          <NewsletterSignup variant="hero" />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex space-x-4">
              <span className="text-2xl">{benefit.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-1 text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What subscribers say
          </h2>
          <div className="space-y-6">
            <blockquote className="text-gray-700">
              &quot;Finally, content specifically about the Indian market. Most
              acquisition content is US-focused and doesn&apos;t apply here.&quot;
              <footer className="mt-2 text-sm text-gray-500">
                — Newsletter subscriber
              </footer>
            </blockquote>
            <blockquote className="text-gray-700">
              &quot;The valuation multiples data alone is worth subscribing for.
              Hard to find this info anywhere else.&quot;
              <footer className="mt-2 text-sm text-gray-500">
                — Newsletter subscriber
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
