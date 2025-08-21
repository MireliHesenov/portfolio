import type { PaginationOptions } from "@/types/common.type";
import type { WorkExperience } from "@/types/work-experience.type";

import path from "path";
import { MdxService } from "./mdx.service";

export const WorkExperienceService = {
  findAll(options?: { pagination?: Partial<PaginationOptions> }) {
    const data = MdxService.getMDXData<WorkExperience>(
      path.join(process.cwd(), "contents/work-experience"),
      options?.pagination
    );

    data.sort((a, b) => {
      if (!a.metadata?.endDate && b.metadata?.endDate) {
        return -1;
      }

      if (a.metadata?.startDate && b.metadata?.startDate) {
        const aDate = new Date(a.metadata.startDate);
        const bDate = new Date(b.metadata.startDate);
        return bDate.getTime() - aDate.getTime();
      }

      return 0;
    });

    return data;
  },

  findBySlug(slug: string) {
    return MdxService.readMDXFile<WorkExperience>(
      path.join(process.cwd(), "contents/work-experience", `${slug}.mdx`)
    );
  },
};
