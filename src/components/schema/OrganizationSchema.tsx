export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Buy a Business India",
    url: "https://buyabusiness-india.com",
    logo: "https://buyabusiness-india.com/logo.png",
    description:
      "Educational resource for buying small businesses in India. Guides, tools, and market insights.",
    sameAs: [
      // Add social profiles when created
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
