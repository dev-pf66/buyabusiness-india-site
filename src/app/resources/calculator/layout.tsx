import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Deal Calculator — Analyze Acquisitions Instantly",
  description:
    "Free business deal calculator. Calculate ROI, payback period, profit multiples, and determine if a business acquisition is a good deal. Built for Indian business buyers.",
  keywords: [
    "business valuation calculator",
    "deal calculator India",
    "ROI calculator business",
    "business acquisition calculator",
    "SDE multiple calculator",
    "payback period calculator",
  ],
  alternates: {
    canonical: "https://buyabusiness-india.com/resources/calculator",
  },
  openGraph: {
    title: "Business Deal Calculator — Analyze Acquisitions Instantly",
    description:
      "Free business deal calculator. Calculate ROI, payback period, profit multiples, and determine if a business acquisition is a good deal.",
    url: "https://buyabusiness-india.com/resources/calculator",
    type: "website",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
