import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Fee Calculator & Pricing",
  description: "Calculate legal fees and filing prices with IP Rani's transparent pricing details for trademarks, patents, designs, copyrights, and company registrations in India.",
};

const pricingGroups = [
  {
    name: "Intellectual Property",
    items: [
      { label: "Trademark Filing & Drafting", price: "Starting ₹6,000 + govt. fees" },
      { label: "Patent Drafting & Filing", price: "Starting ₹25,000 + govt. fees" },
      { label: "Design Drafting & Filing", price: "Starting ₹8,000 + govt. fees" },
      { label: "Copyright Registration", price: "Starting ₹5,000 + govt. fees" },
    ],
  },
  {
    name: "Corporate Legal",
    items: [
      { label: "Private Limited Company Registration", price: "Starting ₹9,999 + govt. fees" },
      { label: "LLP Registration", price: "Starting ₹7,999 + govt. fees" },
      { label: "Contract Drafting (per document)", price: "Starting ₹4,000" },
      { label: "Annual Filing", price: "Starting ₹8,000" },
    ],
  },
  {
    name: "Litigation",
    items: [
      { label: "Cheque Bounce Case (per hearing)", price: "Starting ₹10,000" },
      { label: "Title Search Report (TSR)", price: "Starting ₹6,000" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Fee Calculator / Pricing"
        subtitle="Indicative starting fees across our most-requested services. Every quote is confirmed after understanding your specific requirement."
        crumbs={[{ label: "Pricing" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          {pricingGroups.map((group, gi) => (
            <Reveal key={group.name} index={gi}>
              <h2 className="text-xl font-bold text-navy">{group.name}</h2>
              <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-bg-light-2"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-navy">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
          <p className="text-xs text-slate-400">
            Prices are indicative starting fees for standard cases and exclude
            government fees where applicable. Complex matters are quoted
            individually after a free consultation.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Get an exact quote for your requirement."
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
