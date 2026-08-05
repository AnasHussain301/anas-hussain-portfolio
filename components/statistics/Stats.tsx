"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 30,
    label: "Projects",
  },
  {
    number: 8,
    label: "Technologies",
  },
  {
    number: 4,
    label: "Domains",
  },
  {
    number: 100,
    label: "Passion",
  },
];

export default function Stats() {
  return (
    <section className="grid grid-cols-2 gap-8 py-24 md:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
        >

          <h2 className="text-5xl font-bold text-cyan-400">

            <CountUp end={item.number} duration={2} />+

          </h2>

          <p className="mt-3 text-gray-400">

            {item.label}

          </p>

        </div>

      ))}

    </section>
  );
}