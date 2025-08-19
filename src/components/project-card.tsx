import type { Project } from "@/types/project.type";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

export function ProjectCardList({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
      {...props}
    />
  );
}

type ProjectCardProps = {
  project: Partial<Project>;
  className?: string;
  showArticleButton?: boolean;
};

export function ProjectCard({
  project,
  showArticleButton = true,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn("gap-2 p-6", className)}>
      <h3 className="text-lg font-semibold">
        <Link
          href={`/projects/${project.slug}`}
          {...(!showArticleButton && {
            href: project.demo ? project.demo : "#",
            target: "_blank",
          })}
          className="link dark:text-link"
        >
          {project.title}
        </Link>
      </h3>
      <p className="text-sm text-muted-foreground">{project.description}</p>

      <div className="flex items-center gap-2 mt-auto empty:hidden">
        {showArticleButton ? (
          <Button asChild size="sm" variant="outline">
            <Link href={`/projects/${project.slug}`}>Article</Link>
          </Button>
        ) : null}

        {project.demo ? (
          <Button asChild size="sm" variant="outline">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
