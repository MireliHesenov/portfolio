import { Separator } from "@/components/ui/separator";
import { IntroductionHero } from "@/widgets/introduction-hero";
import { LatestArticles } from "@/widgets/latest-articles";

export default function HomePage() {
  return (
    <main>
      <IntroductionHero />

      <Separator />

      <LatestArticles />

      <Separator />
    </main>
  );
}
