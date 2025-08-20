import { type Metadata } from "next";

import { ProjectService } from "@/services/project.service";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/page-header";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";

import { ProjectsList } from "./_components/projects-list";

export function generateMetadata(): Metadata {
  return {
    title: "Projects",
    description: "Open-source projects I&apos;ve worked on.",
  };
}

export default async function ProjectsPage() {
  const projects = ProjectService.findAll();

  if (!projects?.length) {
    return (
      <Empty className="py-6 mt-auto" size="lg">
        <div className="text-6xl">👾</div>

        <EmptyContent>
          <EmptyTitle>No projects found</EmptyTitle>
          <EmptyDescription>
            I&apos;m still working on some projects, check back later.
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <main className="py-6 md:py-12">
      <div className="container">
        <PageHeader>
          <PageHeaderTitle>Projects</PageHeaderTitle>
          <PageHeaderDescription>
            Open-source projects I&apos;ve worked on.
          </PageHeaderDescription>
        </PageHeader>

        <ProjectsList projects={projects} />
      </div>
    </main>
  );
}
