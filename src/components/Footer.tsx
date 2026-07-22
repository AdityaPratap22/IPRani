import Link from "next/link";
import { topServiceLinks } from "@/data/services";
import { priorityIndustries } from "@/data/industries";
import Reveal from "./motion/Reveal";
import {
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "./icons";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/team" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact-us" },
];

const resourceLinks = [
  { label: "Knowledge Center", href: "/knowledge-center" },
  { label: "IP & Legal Tools", href: "/tools" },
  { label: "FAQs", href: "/faqs" },
];

const domesticLocations = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Noida", "Gurgaon", "Jaipur", "Dehradun", "Uttarakhand", "Chandigarh", "Lucknow", "Surat", "Indore", "Nagpur", "Kochi", "Coimbatore", "Ghaziabad", "Faridabad", "Thane", "Navi Mumbai", "Bhopal", "Visakhapatnam", "Patna", "Bhubaneswar", "Vadodara", "Rajkot", "Ludhiana", "Amritsar", "Kanpur", "Varanasi", "Agra", "Nashik", "Mysuru", "Mangalore", "Goa", "Guwahati", "Raipur", "Ranchi", "Jodhpur", "Udaipur", "Vijayawada", "Thiruvananthapuram", "Madurai", "Meerut", "Moradabad", "Prayagraj", "Jammu", "Gwalior"
];

const internationalLocations = [
  { name: "USA", slug: "us-trademark-registration-for-indian-companies" },
  { name: "Australia", slug: "australia-trademark-and-patent-filing-guide" },
  { name: "UK", slug: "uk-trademark-filing-after-brexit" },
  { name: "South Africa", slug: "african-ip-filing-aripo-and-oapi-routes" },
  { name: "Europe", slug: "eu-trademark-filing-from-india" }
];

function getDomesticSlug(city: string) {
  let slugged = city.toLowerCase().replace(/\s+/g, "-");
  if (slugged === "mysuru") slugged = "mysore";
  
  const extraMapping: Record<string, string> = {
    "uttarakhand": "dehradun",
    "goa": "mumbai",
    "navi-mumbai": "mumbai",
    "kanpur": "lucknow",
    "vijayawada": "hyderabad",
    "madurai": "chennai",
    "moradabad": "noida",
    "prayagraj": "varanasi",
    "jammu": "srinagar",
    "gwalior": "bhopal"
  };

  const finalCity = extraMapping[slugged] || slugged;

  const validCities = [
    "mumbai", "delhi", "bangalore", "hyderabad", "chennai", "kolkata", "pune", "ahmedabad",
    "jaipur", "lucknow", "chandigarh", "kochi", "indore", "nagpur", "bhopal", "visakhapatnam",
    "patna", "vadodara", "ghaziabad", "ludhiana", "agra", "nashik", "faridabad", "meerut",
    "rajkot", "varanasi", "srinagar", "aurangabad", "dhanbad", "amritsar", "noida", "gurgaon",
    "coimbatore", "thiruvananthapuram", "guwahati", "mysore", "ranchi", "bhubaneswar",
    "dehradun", "raipur", "jodhpur", "udaipur", "surat", "thane", "mangalore", "shimla",
    "gangtok", "pondicherry"
  ];

  if (validCities.includes(finalCity)) {
    return `/blogs/location/legal-services-in-${finalCity}-complete-guide`;
  }
  return `/blogs/location`;
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-500 shadow-[0_-15px_25px_-20px_rgba(15,23,42,0.15)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-12">
          <Reveal direction="up" className="col-span-2 md:col-span-6 lg:col-span-4">
            <Link href="/" className="inline-flex items-center transition-transform duration-200 hover:scale-[1.03]" aria-label="IP Rani Home">
              <img
                src="/logo-dark.webp"
                alt="IP Rani logo"
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-3 text-sm text-slate-500">
              Protecting ideas.
              <br />
              Powering businesses.
            </p>
            <div className="mt-4 space-y-2.5 text-[11px] text-slate-400 max-w-sm leading-relaxed">
              <p>
                <strong className="text-navy">Corporate Office:</strong> 308/A15, Devika Chambers, RDC Rajnagar, Ghaziabad, U.P. – 201002, India.
              </p>
              <p>
                <strong className="text-navy">Regd. Office: </strong> Chamber No. 88, District &amp; Session Court, Street No. 4, Surajpur, Greater Noida, U.P. - 201306, India.
              </p>
              <p>
                <strong className="text-navy">Offices:</strong> Greater Noida • Ghaziabad • Bengaluru • Germany
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href="mailto:ipr@iprani.com"
                title="Email us"
                aria-label="Send email to IP Rani"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-light text-navy transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-brand-blue hover:text-white focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                <MailIcon className="h-4 w-4" />
              </a>
              <a
                href="tel:+919911655010"
                title="Call us"
                aria-label="Call IP Rani customer service"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-light text-navy transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-brand-blue hover:text-white focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                <PhoneIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919911655010"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp (opens in a new tab)"
                aria-label="Chat with IP Rani on WhatsApp (opens in a new tab)"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-light text-navy transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                <WhatsappIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.05} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {topServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Industries</h4>
            <ul className="mt-4 space-y-2.5">
              {priorityIndustries.slice(0, 6).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.15} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.2} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <hr className="my-10 border-slate-200 hidden" />

        <div className="hidden" aria-hidden="true">
          <Reveal direction="up" className="space-y-6 pb-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                Our Services Are Available In Domestic Locations
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {domesticLocations.map((city) => (
                  <Link
                    key={city}
                    href={getDomesticSlug(city)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-sm"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                Our Services Are Available In International Locations
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {internationalLocations.map((loc) => (
                  <Link
                    key={loc.name}
                    href={`/blogs/international-ip/${loc.slug}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-sm"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-navy px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 text-center text-xs text-slate-300 sm:flex-row sm:gap-2">
          <span>
            <a
              href="https://businessvolunteers.online/"
              target="_blank"
              rel="noopener noreferrer"
              title="Business Volunteer (opens in a new tab)"
              aria-label="Business Volunteer website (opens in a new tab)"
              className="font-semibold text-amber-400 transition-colors hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
            >
              Business Volunteer
            </a>{" "}
            | All Rights Reserved 2025
          </span>
          <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>Digital Marketing Agency / Company in Noida, Delhi NCR, India</span>
        </div>
      </div>
    </footer>
  );
}
