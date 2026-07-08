import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import Reveal from "./motion/Reveal";

export default function RelatedLinks({
  title,
  links,
  variant = "grid",
}: {
  title: string;
  links: { label: string; href: string }[];
  variant?: "grid" | "list";
}) {
  if (links.length === 0) return null;

  return (
    <Reveal>
      <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
        {title}
      </h3>
      <ul
        className={
          variant === "grid"
            ? "mt-4 grid gap-3 sm:grid-cols-2"
            : "mt-4 space-y-3"
        }
      >
        {links.map((link, i) => (
          <li key={link.href}>
            <Reveal index={i} direction="none">
              <Link
                href={link.href}
                className="group flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue hover:shadow-md"
              >
                <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                {link.label}
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
