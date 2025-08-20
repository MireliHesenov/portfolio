import type { Article } from "@/types/article.type";

import Link from "next/link";
import { cn } from "@/lib/utils";

function ArticleCardList({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid md:grid-cols-2 gap-x-6 -mx-4", className)}
      {...props}
    />
  );
}

type ArticleCardProps = {
  article: Partial<Article>;
  className?: string;
};
function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={cn(
        "group flex flex-col gap-0.5 py-4 px-4 hover:bg-accent rounded-lg",
        className
      )}
    >
      <h3 className="text-base font-semibold link dark:text-link group-hover:text-link">
        {article.title}
      </h3>
      <time className="text-base text-muted-foreground">
        {article.publishedAt}
      </time>
    </Link>
  );
}

export { ArticleCardList, ArticleCard };
