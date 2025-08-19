import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { PageService } from "@/services/page.service";

import { CustomMDXRemote } from "@/components/mdx-remote";

export function generateMetadata(): Metadata {
  const data = PageService.findBySlug("about-me");
  return {
    title: data?.metadata.title,
    description: data?.metadata.description,
    authors: [{ name: data?.metadata.author }],
  };
}

export default function AboutPage() {
  const data = PageService.findBySlug("about-me");

  if (!data) {
    return notFound();
  }

  return (
    <main className="py-6 md:py-12">
      <div className="container">
        <div className="prose prose-lg prose-neutral dark:prose-invert">
          <CustomMDXRemote source={data.content} />
        </div>
      </div>
    </main>
  );
}
