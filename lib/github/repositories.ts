import githubFetch from "./client";

export async function getRepositories() {
  return githubFetch("/users/AnasHussain301/repos?sort=updated&per_page=100");
}