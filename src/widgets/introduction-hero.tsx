import { configs } from "@/lib/configs";
import { SocialLinks } from "./social-links";

export function IntroductionHero() {
  return (
    <section data-widget="introduction-hero" className="py-16">
      <div className="container">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-black font-leading empty:hidden">
                {configs.app.author}
              </h1>
              <p className="text-lg md:text-xl md:max-w-[90%] opacity-80">
                {configs.app.description}
              </p>

              <SocialLinks />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:block hidden"></div>
        </div>
      </div>
    </section>
  );
}
