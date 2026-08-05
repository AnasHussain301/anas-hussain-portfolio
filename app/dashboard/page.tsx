import Link from "next/link";

async function getGitHubStats() {
  try {
    const response = await fetch("http://localhost:3000/api/github", { cache: "no-store" });
    return response.ok ? response.json() : null;
  } catch {
    return null;
  }
}

export default async function DashboardPage() {
  const github = await getGitHubStats();

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-8 backdrop-blur-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Portfolio Control Center</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">System dashboard</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin" className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              Open admin
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["GitHub repos", github?.repositories ?? "—"],
            ["Projects", github?.projects ?? "—"],
            ["Languages", github?.languages ?? "—"],
            ["Contributions", github?.contributions ?? "—"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">CMS-ready content modules</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
              <li>• Projects, skills, experience, testimonials, blog, resume, and theme data are routed through the API layer.</li>
              <li>• The dashboard can be extended with create/edit/delete actions for each module.</li>
              <li>• The portfolio front-end is already data-driven, so a CMS can plug into the same content contracts.</li>
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h2 className="text-xl font-semibold text-white">Next upgrades</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
              <li>• Add authenticated CMS editing with Supabase or Prisma.</li>
              <li>• Connect GitHub API with a personal access token for live repo metrics.</li>
              <li>• Add analytics, post scheduling, and content versioning.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
