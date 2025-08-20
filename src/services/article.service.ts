import type { PaginationOptions } from "@/types/common.type";
import type { Article } from "@/types/article.type";

import path from "path";
import { MdxService } from "./mdx.service";

export const ArticleService = {
  findAll(options?: { pagination?: Partial<PaginationOptions> }) {
    return MdxService.getMDXData<Article>(
      path.join(process.cwd(), "contents/articles"),
      options?.pagination
    );
  },

  findBySlug(slug: string) {
    return MdxService.readMDXFile<Article>(
      path.join(process.cwd(), "contents/articles", `${slug}.mdx`)
    );
  },
};
