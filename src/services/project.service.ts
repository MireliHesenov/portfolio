import type { PaginationOptions } from "@/types/common.type";
import type { Project } from "@/types/project.type";

import path from "path";
import { MdxService } from "./mdx.service";

export const ProjectService = {
  findAll(options?: { pagination?: Partial<PaginationOptions> }) {
    return MdxService.getMDXData<Project>(
      path.join(process.cwd(), "contents/projects"),
      options?.pagination
    );
  },

  findBySlug(slug: string) {
    return MdxService.readMDXFile<Project>(
      path.join(process.cwd(), "contents/projects", `${slug}.mdx`)
    );
  },
};
