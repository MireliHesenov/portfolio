import type { BlogPost } from "@/types/blog.type";
import Link from "next/link";
import { cn } from "@/lib/utils";

function BlogPostList({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid md:grid-cols-2 gap-x-6 -mx-4", className)}
      {...props}
    />
  );
}

type BlogPostListItemProps = {
  blogPost: Partial<BlogPost>;
  className?: string;
};
function BlogPostListItem({
  blogPost,
  className,
  ...props
}: BlogPostListItemProps) {
  return (
    <Link
      href="/blog/2"
      className={cn(
        "group flex flex-col gap-0.5 py-4 px-4 hover:bg-accent rounded-lg",
        className
      )}
      {...props}
    >
      <h3 className="text-base font-semibold group-hover:underline">
        {blogPost.title}
      </h3>
      <time className="text-base text-muted-foreground">
        {blogPost.createdAt?.toLocaleDateString()}
      </time>
    </Link>
  );
}

export { BlogPostList, BlogPostListItem };
