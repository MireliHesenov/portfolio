"use client";

import type { GithubRepo } from "@/types/git.type";
import type { Project } from "@/types/project.type";

import { useEffect, useState } from "react";

import { GitService } from "@/services/git.service";

import { ProjectCard } from "@/components/project-card";

export function ProjectsList({
  projects,
}: {
  projects: {
    metadata: Project | null;
    slug: string;
    content?: string | null;
  }[];
}) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    GitService.fetchGithubRepos().then(setRepos);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {projects.map((project) => {
        const repo = repos.find(
          (repo) => repo.name.toLowerCase() === project.slug.toLowerCase()
        );

        const stargazers = GitService.getStargazersCountFromRepo(repo);

        return (
          <ProjectCard
            key={project.slug}
            project={{
              ...project.metadata,
              slug: project.slug,
            }}
            showArticleButton={!!project.content}
            stargazers={stargazers}
          />
        );
      })}
    </div>
  );
}
