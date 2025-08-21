import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { CustomMDXRemote } from "@/components/mdx-remote";
import { ProjectService } from "@/services/project.service";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const projects = ProjectService.findAll();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params: _params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const params = await _params;
  const project = ProjectService.findBySlug(params.slug);

  if (!project.metadata) {
    return notFound();
  }

  return {
    title: project.metadata.title,
    description: project.metadata.description,
    authors: [{ name: project.metadata.author }],
  };
}

export default async function ProjectDetailPage({
  params: _params,
}: ProjectDetailPageProps) {
  const params = await _params;

  const project = ProjectService.findBySlug(params.slug);

  if (!project.content) {
    return notFound();
  }

  return (
    <main className="py-6 md:py-12">
      <div className="container">
        <div className="prose dark:prose-invert prose-neutral prose-lg mx-auto">
          <CustomMDXRemote source={project.content} />
        </div>
      </div>
    </main>
  );
}
