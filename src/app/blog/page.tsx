import { type Metadata } from "next";

import { ArticleService } from "@/services/article.service";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/page-header";
import { ArticleCard } from "@/components/article-card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";

export function generateMetadata(): Metadata {
  return {
    title: "Blog",
    description: "Guides, references, and tutorials I have cooked up.",
  };
}

export default async function BlogPage() {
  const articles = ArticleService.findAll();

  if (!articles?.length) {
    return (
      <Empty className="py-6 mt-auto" size="lg">
        <div className="text-6xl">📝</div>
        <EmptyContent>
          <EmptyTitle>No articles found</EmptyTitle>
          <EmptyDescription>Articles will be published here.</EmptyDescription>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <main className="py-6 md:py-12">
      <div className="container">
        <PageHeader>
          <PageHeaderTitle>Blog</PageHeaderTitle>
          <PageHeaderDescription>
            Guides, references, and tutorials I have cooked up.
          </PageHeaderDescription>
        </PageHeader>

        <div className="grid md:grid-cols-1 gap-x-6 -mx-4">
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.slug}
                article={{
                  ...article.metadata,
                  slug: article.slug,
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
