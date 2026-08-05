import Link from "next/link";

const modules = [
  { label: "Projects", href: "/api/projects", description: "Project cards and case studies" },
  { label: "Skills", href: "/api/skills", description: "Core competencies and stack" },
  { label: "Experience", href: "/api/experience", description: "Career timeline entries" },
  { label: "Blog", href: "/api/blog", description: "Insights and writeups" },
  { label: "Resume", href: "/api/resume", description: "Resume summary and metadata" },
  { label: "Theme", href: "/api/theme", description: "Visual mode and palette controls" },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-8 backdrop-blur-2xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Admin Console</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Portfolio control center</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300/90">Manage the system from one place with live GitHub intelligence, content modules, and future CMS-ready actions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              Open dashboard
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link key={module.label} href={module.href} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10">
              <p className="text-lg font-semibold text-white">{module.label}</p>
              <p className="mt-2 text-sm text-slate-400">{module.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">CMS-ready capability</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
              <li>• The portfolio is already structured around modular content data.</li>
              <li>• Each route can become a create, edit, and delete interface with auth.</li>
              <li>• A future CMS layer can be added without restructuring the frontend.</li>
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h2 className="text-xl font-semibold text-white">Operational next steps</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
              <li>• Add authentication and protected admin routes.</li>
              <li>• Connect a database such as PostgreSQL or Supabase.</li>
              <li>• Build the editor UI for blog posts, projects, and experience items.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
