import path from "path";
import { MdxService } from "./mdx.service";

export const ProjectService = {
  findAll() {
    return MdxService.getMDXData(path.join(process.cwd(), "contents/projects"));
  },

  findBySlug(slug: string) {
    return MdxService.readMDXFile(
      path.join(process.cwd(), "contents/projects", `${slug}.mdx`)
    );
  },
};
