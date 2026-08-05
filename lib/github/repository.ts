import githubFetch from "./client";

export async function getRepository(name: string) {
  return githubFetch(`/repos/AnasHussain301/${name}`);
}