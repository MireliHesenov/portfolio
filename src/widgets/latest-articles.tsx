import { BlogPost } from "@/types/blog.type";

import Link from "next/link";

import { BlogPostCardList, BlogPostCard } from "@/components/blog-post";
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
  const blogPosts = [
    {
      id: "1",
      title: "Redesign: Version 7.0: Sidebars, light-dark, and Bluesky",
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Enabling Apache ECharts in React for Data Visualization",
      createdAt: new Date(),
    },

    {
      id: "3",
      title: "Redesign: Version 7.0: Sidebars, light-dark, and Bluesky",
      createdAt: new Date(),
    },

    {
      id: "4",
      title: "Redesign: Version 7.0: Sidebars, light-dark, and Bluesky",
      createdAt: new Date(),
    },
  ];

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
        <BlogPostCardList>
          {blogPosts.map((blogPost) => (
            <BlogPostCard key={blogPost.id} blogPost={blogPost as BlogPost} />
          ))}
        </BlogPostCardList>
      </div>

      <GuidelinesCornerPlus />
    </section>
  );
}
