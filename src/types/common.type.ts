export type MdxMetadata<Metadata extends Record<string, unknown>> = Metadata & {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
};

export type PaginationOptions = {
  limit: number;
  page: number;
};
