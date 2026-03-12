import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buyabusiness-india.com"),
  title: {
    default: "Buy a Business India — Learn How to Acquire Small Businesses",
    template: "%s | Buy a Business India",
  },
  description:
    "The complete guide to buying a small business in India. Learn valuation, due diligence, financing, and how to find businesses for sale.",
  keywords: [
    "buy a business in India",
    "small business for sale India",
    "how to buy a business",
    "business acquisition India",
    "SMB India",
  ],
  authors: [{ name: "Buy a Business India" }],
  creator: "Buy a Business India",
  publisher: "Buy a Business India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://buyabusiness-india.com",
    siteName: "Buy a Business India",
    title: "Buy a Business India — Learn How to Acquire Small Businesses",
    description:
      "The complete guide to buying a small business in India. Learn valuation, due diligence, financing, and how to find businesses for sale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy a Business India — Learn How to Acquire Small Businesses",
    description:
      "The complete guide to buying a small business in India. Learn valuation, due diligence, financing, and how to find businesses for sale.",
  },
  alternates: {
    canonical: "https://buyabusiness-india.com",
    languages: {
      "en-IN": "https://buyabusiness-india.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGBCDTDDDX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DGBCDTDDDX');
          `}
        </Script>
        <OrganizationSchema />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
