import type { PaginationOptions } from "@/types/common.type";
import path from "path";
import fs from "fs";

export const MdxService = {
  parseFrontmatter<Metadata extends Record<string, unknown>>(
    fileContent: string
  ) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);
    const frontMatterBlock = match![1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    const metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
      const [key, ...valueArr] = line.split(": ");
      let value = valueArr.join(": ").trim();
      value = value.replace(/^['"](.*)['"]$/, "$1");
      metadata[key.trim() as keyof Metadata] =
        value as Metadata[keyof Metadata];
    });

    return { metadata: metadata as Metadata, content };
  },

  getMDXFiles(dir: string, options?: Partial<PaginationOptions>) {
    const files = fs
      .readdirSync(dir)
      .filter((file) => path.extname(file) === ".mdx");
    if (options?.limit && options?.page)
      return files.slice(
        options.limit * (options.page - 1),
        options.limit * options.page
      );
    return files;
  },

  readMDXFile<Metadata extends Record<string, unknown>>(filePath: string) {
    try {
      const rawContent = fs.readFileSync(filePath, "utf-8");
      return this.parseFrontmatter<Metadata>(rawContent);
    } catch {
      return {
        content: null,
        metadata: null,
        filename: null,
      };
    }
  },

  getMDXData<Metadata extends Record<string, unknown>>(
    dir: string,
    options?: Partial<PaginationOptions>
  ) {
    const mdxFiles = this.getMDXFiles(dir, options);
    return mdxFiles.map((file) => {
      const { metadata, content } = this.readMDXFile<Metadata>(
        path.join(dir, file)
      );
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    });
  },
};
