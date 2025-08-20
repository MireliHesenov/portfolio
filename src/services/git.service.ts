import type { GithubRepo } from "@/types/git.type";

export const GitService = {
  async fetchGithubRepos(): Promise<GithubRepo[]> {
    return fetch(
      "https://api.github.com/users/firuzcanh/repos?per_page=100"
    ).then((res) => res.json());
  },

  getStargazersCountFromRepo(repo: GithubRepo | undefined) {
    return repo?.stargazers_count ?? 0;
  },
};
