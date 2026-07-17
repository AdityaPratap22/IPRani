export const metadata = {
  title: "FAQs",
  description: "Find answers to frequently asked questions about trademark registration, patent filing, copyrights, company formation, and commercial legal advisory in India.",
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I know whether I need a trademark, patent, design or copyright?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on what you're protecting — a brand name or logo needs a trademark, an invention needs a patent, a product's visual appearance needs a design registration, and creative or literary work needs copyright. Our IP Advisory team can assess your situation and recommend the right mix."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer fixed-fee pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most of our services are fixed-fee once we understand the scope of your requirement. Get in touch with us for a free consultation to receive a custom quote. We believe in transparent pricing with no hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a trademark registration take in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While a trademark application can be filed and the TM symbol used within 24-48 hours, the complete registration process typically takes 6 to 12 months, depending on whether there are objections or oppositions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I file a patent before building a prototype?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file a Provisional Specification to secure your priority date. You then have 12 months to complete your testing, build a prototype, and file the Complete Specification."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
