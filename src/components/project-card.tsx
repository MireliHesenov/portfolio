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
  showSourceButton?: boolean;
};

export function ProjectCard({
  project,
  showArticleButton = true,
  showSourceButton = true,
  className,
}: ProjectCardProps) {
  const isExternal = !!(project.source || project.demo);
  return (
    <Card className={cn("gap-4 p-6", className)}>
      {project.publishedAt ? (
        <time className="text-sm text-muted-foreground">
          {project.publishedAt.split("-").at(0)}
        </time>
      ) : null}

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          <Link
            href={project.source || project.demo || `/projects/${project.slug}`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="link dark:text-link"
          >
            {project.title}
          </Link>
        </h3>

        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-auto empty:hidden">
        {showArticleButton ? (
          <Button asChild size="sm" variant="outline">
            <Link href={`/projects/${project.slug}`}>Article</Link>
          </Button>
        ) : null}

        {showSourceButton && project.source ? (
          <Button asChild size="sm" variant="outline">
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              Source
            </a>
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
