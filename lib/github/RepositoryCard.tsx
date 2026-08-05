import Link from "next/link";

export default function RepositoryCard({ repo }: { repo: { name: string } }) {
  return (
    <Link href={`/projects/${repo.name}`} className="block rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <div className="text-sm font-semibold text-white">{repo.name}</div>
    </Link>
  );
}