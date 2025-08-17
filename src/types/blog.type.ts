export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  tags: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
};
