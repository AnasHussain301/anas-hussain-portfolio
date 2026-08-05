import githubFetch from "./client";

export async function getReadme(repo: string) {
  const response = await githubFetch(`/repos/AnasHussain301/${repo}/readme`);

  if (!response.content) return "";

  return Buffer.from(response.content, "base64").toString("utf-8");
}