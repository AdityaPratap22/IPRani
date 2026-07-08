import Link from "next/link";
import Reveal from "./motion/Reveal";

export default function CtaBanner({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="bg-navy px-4 py-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
          )}
        </div>
        <Link
          href={buttonHref}
          className="shrink-0 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
        >
          {buttonLabel}
        </Link>
      </Reveal>
    </section>
  );
}
