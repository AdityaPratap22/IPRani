import { BadgeIcon, PinIcon, ClipboardIcon, ClockIcon } from "./icons";
import Reveal from "./motion/Reveal";

const stats = [
  { icon: BadgeIcon, value: "15+", label: "Years of Experience" },
  { icon: PinIcon, value: "5000+", label: "IP Filings" },
  { icon: ClipboardIcon, value: "95%", label: "Success Rate" },
  { icon: ClockIcon, value: "24/7", label: "Client Support" },
];

export default function Stats() {
  return (
    <section className="relative z-10 bg-white px-4 py-10 shadow-[0_15px_25px_-18px_rgba(15,23,42,0.25)] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            index={i}
            className="group flex items-center gap-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <stat.icon className="h-8 w-8 shrink-0 text-navy transition-transform duration-300 group-hover:scale-110" />
            <div>
              <p className="text-2xl font-bold text-navy sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
