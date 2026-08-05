"use client";

import { useEffect, useState } from "react";

type Stats = {
  repositories: number;
  projects: number;
  languages: number;
  contributions: number;
};

export default function HeroStats() {
  const [stats, setStats] = useState<Stats>({
    repositories: 0,
    projects: 0,
    languages: 0,
    contributions: 0,
  });

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  const cards = [
    {
      label: "Repositories",
      value: stats.repositories,
    },
    {
      label: "Projects",
      value: stats.projects,
    },
    {
      label: "Languages",
      value: stats.languages,
    },
    {
      label: "Contributions",
      value: stats.contributions,
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
      {cards.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/10"
        >
          <div className="text-4xl font-bold text-cyan-400">
            {item.value}
          </div>

          <div className="mt-3 text-sm uppercase tracking-wider text-gray-400">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}