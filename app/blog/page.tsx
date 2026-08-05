import Link from "next/link";
import { blogPosts } from "@/lib/portfolio-data";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold">
          AI Engineering Blog
        </h1>

        <p className="mt-4 text-zinc-400">
          Articles on RAG, LLMs, LangChain, LangGraph, Bedrock,
          AI Agents and Production AI.
        </p>
      </div>

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="rounded-xl border border-zinc-800 p-8"
          >
            <h2 className="text-3xl font-bold">
              {post.title}
            </h2>

            <p className="mt-3 text-zinc-400">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 text-black font-semibold"
            >
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}