import Link from "next/link";

import { ProjectService } from "@/services/project.service";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SectionHeader,
  SectionHeaderActions,
  SectionHeaderContent,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";

export function ProjectsList() {
  const projects = ProjectService.findAll({
    pagination: { page: 1, limit: 6 },
  });

  return (
    <section data-widget="projects-list" className="py-16">
      <div className="container">
        {/* Section Header */}
        <SectionHeader>
          <SectionHeaderContent>
            <SectionHeaderTitle>Projects</SectionHeaderTitle>
            <SectionHeaderDescription>
              Projects I&apos;ve worked on.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{
                ...project.metadata,
                slug: project.slug,
              }}
              showArticleButton={!!project.content}
              showSourceButton={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
