import type { Metadata } from "@/types/common.type";
import path from "path";
import fs from "fs";

export const MdxService = {
  parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);
    const frontMatterBlock = match![1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    const metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
      const [key, ...valueArr] = line.split(": ");
      let value = valueArr.join(": ").trim();
      value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
      metadata[key.trim() as keyof Metadata] = value;
    });

    return { metadata: metadata as Metadata, content };
  },

  getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  },

  readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return this.parseFrontmatter(rawContent);
  },

  getMDXData(dir: string) {
    const mdxFiles = this.getMDXFiles(dir);
    return mdxFiles.map((file) => {
      const { metadata, content } = this.readMDXFile(path.join(dir, file));
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    });
  },
};
