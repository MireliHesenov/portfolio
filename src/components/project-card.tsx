'use client';
import type { Project } from "@/types/project.type";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from "react";
import './styles.css';
import { WebsiteIcon } from "@/assets/icons/website.icon";
import { IosIcon } from "@/assets/icons/ios.icon";
import { AndroidIcon } from "@/assets/icons/android.icon";

function Tilt(props: any) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

type ProjectCardProps = {
  project: Partial<Project>;
  showArticleButton?: boolean;
  showSourceButton?: boolean;
  stargazers?: number;
  className?: string;
};

export function ProjectCard({
  project,
  showArticleButton = true,
  showSourceButton = true,
  stargazers,
  className,
}: ProjectCardProps) {
  const isExternal = !!(project.source || project.demo);
  console.log(project);
  return (
    <Tilt options={{
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    }}
    className="w-full h-full"
    >
    <Card className={cn("relative gap-4 p-6 w-full h-full   glass-card ", className)}  >
     

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
         
            {project.title}
         
        </h3>
        {project.publishedAt ? (
        <time className="text-sm text-muted-foreground">
          {project.publishedAt.split("-").at(0)}
        </time>
      ) : null}
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

{project.url ? (
          <Button asChild size="sm" variant="outline">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs">
              <WebsiteIcon />
              Website
            </a>
          </Button>
        ) : null}
{project.ios ? (
          <Button asChild size="sm" variant="outline">
            <a href={project.ios} target="_blank" rel="noopener noreferrer" className="text-xs">
              <IosIcon />
              iOS
              </a>  
          </Button>
        ) : null}
        {project.android ? (
          <Button asChild size="sm" variant="outline">
            <a href={project.android} target="_blank" rel="noopener noreferrer" className="text-xs">
              <AndroidIcon />
              Android
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

      {stargazers ? (
        <div className="absolute top-4 right-4">
          <a
            href={`${project.source}/stargazers`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm [&_svg]:text-yellow-500 link"
          >
            <StarIcon size={14} fill="currentColor" />
            <span className="font-semibold">{stargazers}</span>
          </a>
        </div>
      ) : null}
    </Card></Tilt>
  );
}
