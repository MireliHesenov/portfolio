import Link from "next/link";

import { ArticleService } from "@/services/article.service";

import { ArticleCardList, ArticleCard } from "@/components/article-card";
import { GuidelinesCornerPlus } from "@/components/guidelines";
import {
  SectionHeader,
  SectionHeaderActions,
  SectionHeaderContent,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function LatestArticles() {
  const articles = ArticleService.findAll();

  return (
    <section data-widget="latest-articles" className="relative py-16">
      <div className="container">
        {/* Section Header */}
        <SectionHeader>
          <SectionHeaderContent>
            <SectionHeaderTitle>Latest Articles</SectionHeaderTitle>
            <SectionHeaderDescription>
              Guides, references, and tutorials.
            </SectionHeaderDescription>
          </SectionHeaderContent>

          <SectionHeaderActions>
            <Button asChild variant="link">
              <Link href="/blog">
                View All <ArrowRightIcon />
              </Link>
            </Button>
          </SectionHeaderActions>
        </SectionHeader>

        {/* Blog Post List */}
        <ArticleCardList>
          {articles?.map((article) => (
            <ArticleCard
              key={article.slug}
              article={{ ...article.metadata, slug: article.slug }}
            />
          ))}
        </ArticleCardList>
      </div>

      <GuidelinesCornerPlus />
    </section>
  );
}
