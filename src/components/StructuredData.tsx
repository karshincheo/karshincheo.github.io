import { site } from "@content/site";

// JSON-LD Person schema — helps Google build a knowledge panel / rank on his
// name, and disambiguates him as an entity. Built entirely from site config.
export function StructuredData() {
  const sameAs = [site.links.linkedin, site.links.github, site.links.x].filter(
    (href) => href && href.startsWith("http"),
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    description: site.metaDescription,
    jobTitle: "AI-native builder",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "MIT Sloan School of Management" },
      { "@type": "CollegeOrUniversity", name: "Heriot-Watt University" },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
