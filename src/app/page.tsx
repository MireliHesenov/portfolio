import { Separator } from "@/components/ui/separator";
import { IntroductionHero } from "@/widgets/introduction-hero";
import { LatestArticles } from "@/widgets/latest-articles";
import { ProjectsList } from "@/widgets/projects-list";
import { WorkExperienceList } from "@/widgets/work-experience-list";

export default function HomePage() {
  return (
    <main>
      <IntroductionHero />

      <Separator />

      <LatestArticles />

      <Separator />

      <ProjectsList />

      <Separator />

      <WorkExperienceList />

      <Separator />
    </main>
  );
}
