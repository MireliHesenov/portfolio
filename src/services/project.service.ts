import type { PaginationOptions } from "@/types/common.type";
import type { Project } from "@/types/project.type";

import path from "path";
import { MdxService } from "./mdx.service";

export const ProjectService = {
  findAll(options?: { pagination?: Partial<PaginationOptions> }) {
    const data = MdxService.getMDXData<Project>(
      path.join(process.cwd(), "contents/projects"),
      options?.pagination
    );

    data.sort((a, b) => {
      if (a.metadata?.publishedAt && b.metadata?.publishedAt) {
        return (
          new Date(b.metadata.publishedAt).getTime() -
          new Date(a.metadata.publishedAt).getTime()
        );
      }
      return 0;
    });

  
    return data;
  },

  findBySlug(slug: string) {
    return MdxService.readMDXFile<Project>(
      path.join(process.cwd(), "contents/projects", `${slug}.mdx`)
    );
  },
};
