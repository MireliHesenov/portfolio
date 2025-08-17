import type { Project } from "@/types/project.type";

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SectionHeader,
  SectionHeaderActions,
  SectionHeaderContent,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/section-header";
import { ProjectCardList, ProjectCard } from "@/components/project-card";

export function ProjectsList() {
  const projects: Project[] = [
    {
      id: "1",
      title: "🎉 AlertBox",
      description: "React native alert & prompt utility",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
    {
      id: "2",
      title: "🚀 Notifly",
      description: "A custom notification component for react native",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
  ];
  return (
    <section data-widget="projects-list" className="py-16">
      <div className="container">
        {/* Section Header */}
        <SectionHeader>
          <SectionHeaderContent>
            <SectionHeaderTitle>Projects</SectionHeaderTitle>
            <SectionHeaderDescription>
              Open-source projects I&apos;ve worked on.
            </SectionHeaderDescription>
          </SectionHeaderContent>

          <SectionHeaderActions>
            <Button asChild variant="link">
              <Link href="/projects">
                View All <ArrowRightIcon />
              </Link>
            </Button>
          </SectionHeaderActions>
        </SectionHeader>

        {/* Project List */}
        <ProjectCardList>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectCardList>
      </div>
    </section>
  );
}
