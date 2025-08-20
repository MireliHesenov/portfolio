import type { PaginationOptions } from "@/types/common.type";
import type { Page } from "@/types/page.type";
import { MdxService } from "./mdx.service";

import path from "path";

export const PageService = {
  findAll(options?: { pagination?: Partial<PaginationOptions> }) {
    return MdxService.getMDXData<Page>(
      path.join(process.cwd(), "contents/pages"),
      options?.pagination
    );
  },

  findBySlug(slug: string) {
    return MdxService.readMDXFile(
      path.join(process.cwd(), "contents/pages", `${slug}.mdx`)
    );
  },
};
