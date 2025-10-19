import { Separator } from "@/components/ui/separator";
import { IntroductionHero } from "@/widgets/introduction-hero";
import { LatestArticles } from "@/widgets/latest-articles";
import { ProjectsList } from "@/widgets/projects-list";
import { WorkExperienceList } from "@/widgets/work-experience-list";
import AboutMe from "./about/page";

export default function HomePage() {
  return (
    <main>
      <IntroductionHero />

<AboutMe />
      <Separator />

      {/* <LatestArticles /> */}

      <Separator />

      <ProjectsList />

      <Separator />

      <WorkExperienceList />
    </main>
  );
}
