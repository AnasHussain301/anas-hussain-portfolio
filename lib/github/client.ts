const BASE_URL = "https://api.github.com";

export default async function githubFetch(endpoint: string) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    next: {
      revalidate: 3600,
    },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error("Github API Error");
  }

  return response.json();
}