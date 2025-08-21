import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleService } from "@/services/article.service";
import { CustomMDXRemote } from "@/components/mdx-remote";

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = ArticleService.findAll();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params: _params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const params = await _params;
  const article = ArticleService.findBySlug(params.slug);

  if (!article.metadata) {
    return notFound();
  }

  return {
    title: article.metadata.title,
    description: article.metadata?.description,
    authors: [{ name: article.metadata.author }],
  };
}

export default async function ArticleDetailPage({
  params: _params,
}: ArticleDetailPageProps) {
  const params = await _params;

  const article = ArticleService.findBySlug(params.slug);

  if (!article.content) {
    return notFound();
  }

  return (
    <main className="py-6 md:py-12">
      <div className="container">
        <div className="prose dark:prose-invert prose-neutral prose-lg mx-auto">
          <CustomMDXRemote source={article.content} />
        </div>
      </div>
    </main>
  );
}
