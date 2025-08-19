import { MdxService } from "./mdx.service";

import path from "path";

export const PageService = {
  findBySlug(slug: string) {
    return MdxService.readMDXFile(
      path.join(process.cwd(), "contents/pages", `${slug}.mdx`)
    );
  },
};
