import { CustomMDXRemote } from "@/components/mdx-remote";
import { ProjectService } from "@/services/project.service";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
        <div className="prose prose-invert prose-neutral prose-lg mx-auto">
          <CustomMDXRemote source={project.content} />
        </div>
      </div>
    </main>
  );
}
