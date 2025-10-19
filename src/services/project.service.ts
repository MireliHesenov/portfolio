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
 
        return (
          new Date(b.metadata?.progressing ? '01-01-2025' : b.metadata?.publishedAt || '').getTime() -
          new Date(a.metadata?.progressing ? '01-01-2025' : a.metadata?.publishedAt || '').getTime()
        );
      
    
    
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
