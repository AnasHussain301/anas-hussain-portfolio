import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "AnasHussain301";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchGitHubJson(url: string) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-dashboard",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const response = await fetch(url, { headers, next: { revalidate: 300 } });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  return response.json();
}

export async function GET() {
  try {
    const [repos, events] = await Promise.all([
      fetchGitHubJson(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
      fetchGitHubJson(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`),
    ]);

    const repositories = Array.isArray(repos) ? repos.length : 0;
    const projects = Array.isArray(repos) ? repos.filter((repo: { fork?: boolean }) => !repo.fork).length : 0;
    const languages = new Set<string>();

    for (const repo of Array.isArray(repos) ? repos : []) {
      if (repo.language) {
        languages.add(repo.language);
      }
    }

    const contributions = Array.isArray(events) ? events.length : 0;

    return NextResponse.json({
      repositories,
      projects,
      languages: languages.size,
      contributions,
      username: GITHUB_USERNAME,
    });
  } catch {
    return NextResponse.json(
      {
        repositories: 0,
        projects: 0,
        languages: 0,
        contributions: 0,
        username: GITHUB_USERNAME,
        fallback: true,
      },
      { status: 200 }
    );
  }
}