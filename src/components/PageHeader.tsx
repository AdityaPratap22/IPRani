import Breadcrumbs, { Crumb } from "./Breadcrumbs";
import Reveal from "./motion/Reveal";

export default function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-navy px-4 py-10 sm:px-6 lg:px-8">
      <Reveal inView={false} className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-slate-300">{subtitle}</p>
        )}
        <div className="mt-3">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, ...crumbs]} />
        </div>
      </Reveal>
    </section>
  );
}
