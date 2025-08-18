import { PageHeader, PageHeaderTitle } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="py-6 md:py-12">
      <div className="container">
        <PageHeader>
          <PageHeaderTitle>About Me</PageHeaderTitle>
        </PageHeader>

        <section className="grid grid-cols-12 gap-12">
          <div className="col-span-8">
            <div className="prose prose-lg prose-neutral dark:prose-invert">
              <p>
                {`I'm Firuzcan! I've been making websites since 2018 and I work as a software engineer. I consistently deliver solutions that balance both technical excellence and visual quality.`}
              </p>

              <p>
                {`I've decided to share my knowledge on this website, and it also helps me stay up to date.`}
              </p>

              <p>
                Here, you can see the open-source projects and portfolio I have
                developed and read the technical articles and notes I have
                written.
              </p>

              <p>My site has no AI generated content and no ads.</p>
            </div>
          </div>

          <div className="col-span-4">
            <Card className="aspect-square shadow-none">
              <Image
                src="/images/author-avatar-1.png"
                alt="Firuzcan"
                className="object-contain w-full h-full"
                width={300}
                height={300}
              />
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
