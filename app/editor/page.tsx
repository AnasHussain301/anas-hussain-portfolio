"use client";

import Link from "next/link";

export default function EditorPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-8 backdrop-blur-2xl">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Code-first content</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Portfolio content is managed from source code</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300/90">The public portfolio is driven by the source data files in the project, so changes are made in code and reflected across the site automatically.</p>
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-300">Edit the main content in the portfolio data file and the site will update immediately.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/" className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">Back to portfolio</Link>
            <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">Open admin</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
