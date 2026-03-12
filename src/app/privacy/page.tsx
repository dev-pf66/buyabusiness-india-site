import { Metadata } from "next";
import { Breadcrumbs } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Buy a Business India collects, uses, and protects your data.",
  alternates: {
    canonical: "https://buyabusiness-india.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "https://buyabusiness-india.com" },
            { name: "Privacy Policy" },
          ]}
        />

        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600">Last updated: February 2026</p>

        <div className="prose mt-8">
          <h2>Overview</h2>
          <p>
            Buy a Business India (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This
            policy explains what data we collect, how we use it, and your
            rights.
          </p>

          <h2>What We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>
              <strong>Email address:</strong> When you subscribe to our
              newsletter
            </li>
            <li>
              <strong>Form submissions:</strong> Any information you provide
              through contact forms
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Analytics:</strong> We use Plausible Analytics, a
              privacy-friendly service that does not use cookies or track
              personal data. We collect aggregate, anonymous data about page
              views and traffic sources.
            </li>
            <li>
              <strong>Technical data:</strong> Basic server logs including IP
              addresses (anonymized) and browser information for security
              purposes.
            </li>
          </ul>

          <h2>How We Use Your Data</h2>
          <ul>
            <li>To send our newsletter (if you subscribed)</li>
            <li>To respond to your inquiries</li>
            <li>To improve our content and website</li>
            <li>To detect and prevent abuse</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>
              <strong>Vercel:</strong> Website hosting
            </li>
            <li>
              <strong>Plausible Analytics:</strong> Privacy-friendly website
              analytics (no cookies, no personal data tracking)
            </li>
            <li>
              <strong>ConvertKit/Buttondown:</strong> Email newsletter delivery
            </li>
          </ul>
          <p>
            These services have their own privacy policies. We do not sell your
            data to any third parties.
          </p>

          <h2>Cookies</h2>
          <p>
            We do not use tracking cookies. Plausible Analytics is cookie-free.
            Essential cookies may be used for basic website functionality.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Unsubscribe from our newsletter at any time</li>
            <li>Opt out of analytics (Plausible respects Do Not Track)</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your email address for as long as you remain subscribed to
            our newsletter. If you unsubscribe, your email is removed from our
            mailing list. Server logs are retained for 30 days for security
            purposes.
          </p>

          <h2>Security</h2>
          <p>
            We use HTTPS encryption, secure hosting on Vercel, and follow
            security best practices to protect your data. We do not store
            sensitive personal information beyond email addresses.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions or to exercise your rights, contact us
            at: privacy@buyabusiness-india.com
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. Changes will be posted
            on this page with an updated date.
          </p>
        </div>
      </div>
    </article>
  );
}
