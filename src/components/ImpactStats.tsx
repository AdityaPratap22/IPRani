import Reveal from "./motion/Reveal";
import Counter from "./motion/Counter";

const statItems = [
  { value: "1000+", label: "REGISTERED IP CASES HANDLED" },
  { value: "1000+", label: "STARTUPS SUPPORTED VIA SIPP" },
  { value: "50+", label: "COUNTRIES SERVED" },
  { value: "20 Years", label: "YEARS OF COMBINED IP EXPERIENCE" },
  { value: "3k", label: "AVERAGE TURNAROUND FOR TRADEMARK FILING" },
  { value: "250+", label: "ACTIVE LITIGATION CASES (2024)" },
];

export default function ImpactStats() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal direction="down">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span className="h-[1px] w-6 bg-slate-300" />
              OUR IMPACT IN NUMBERS
              <span className="h-[1px] w-6 bg-slate-300" />
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Showcasing our global presence and commitment
            </h2>
            <div className="mx-auto mt-4 h-[1px] w-24 bg-slate-200" />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-10 pb-10 md:pb-0 md:pr-8">
            <Reveal index={0} className="text-center">
              <p className="text-4xl font-bold text-[#b58e63] sm:text-5xl">
                <Counter value={statItems[0].value} />
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                {statItems[0].label}
              </p>
            </Reveal>
            <Reveal index={3} className="text-center">
              <p className="text-4xl font-bold text-[#b58e63] sm:text-5xl">
                <Counter value={statItems[3].value} />
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                {statItems[3].label}
              </p>
            </Reveal>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-10 py-10 md:px-8 md:py-0">
            <Reveal index={1} className="text-center">
              <p className="text-4xl font-bold text-[#b58e63] sm:text-5xl">
                <Counter value={statItems[1].value} />
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                {statItems[1].label}
              </p>
            </Reveal>
            <Reveal index={4} className="text-center">
              <p className="text-4xl font-bold text-[#b58e63] sm:text-5xl">
                <Counter value={statItems[4].value} />
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                {statItems[4].label}
              </p>
            </Reveal>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-10 pt-10 md:pl-8 md:pt-0">
            <Reveal index={2} className="text-center">
              <p className="text-4xl font-bold text-[#b58e63] sm:text-5xl">
                <Counter value={statItems[2].value} />
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                {statItems[2].label}
              </p>
            </Reveal>
            <Reveal index={5} className="text-center">
              <p className="text-4xl font-bold text-[#b58e63] sm:text-5xl">
                <Counter value={statItems[5].value} />
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">
                {statItems[5].label}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Reveal direction="up">
            <p className="text-xs italic text-slate-400">
              These numbers reflect our commitment to quality, speed, and results in IP services.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
