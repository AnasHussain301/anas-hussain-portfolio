import Link from "next/link";

export default function SharePage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-8 backdrop-blur-2xl">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Read-only share view</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">This portfolio is controlled from code</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300/90">The public page reflects whatever is currently defined in the application source, so updates happen through code changes rather than a website editor.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">Back to portfolio</Link>
          <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">Open admin</Link>
        </div>
      </div>
    </main>
  );
}
