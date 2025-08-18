import { configs } from "@/lib/configs";

import {
  SectionHeader,
  SectionHeaderActions,
  SectionHeaderContent,
  SectionHeaderTitle,
} from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import {
  BaseList,
  BaseListItem,
  BaseListItemContent,
  BaseListItemDescription,
  BaseListItemSlot,
  BaseListItemTitle,
} from "@/components/ui/base-list";

export function WorkExperienceList() {
  const data = [
    {
      id: "1",
      company:
        "İqtisadiyyat Nazirliyi tabeiyində İnformasiya Texnologiyaları və Məlumat İdarəetmə Mərkəzi",
      role: "Frontend Engineer",
      startDate: "2023-07-01",
      endDate: "Present",
      location: "Azerbaijan",
      type: "Full-time",
      duration: "2 yrs 2 mos",
    },
    {
      id: "2",
      company: "Edumiro | AI-Powered Digital Learning Platform",
      role: "Software Engineer",
      startDate: "2024-06-01",
      endDate: "2024-09-01",
      location: "Azerbaijan",
      type: "Freelance",
      duration: "4 mos",
      skills: "Software Development · Engineering",
    },
    {
      id: "3",
      company: "CRISP STUDIO",
      role: "Full Stack Engineer",
      startDate: "2022-08-01",
      endDate: "2023-09-01",
      location: "Spain",
      type: "Full-time",
      duration: "1 yr 2 mos",
      skills:
        "Apollo GraphQL · Redux.js · Git · TypeScript · Object-Oriented Programming (OOP)",
    },
    {
      id: "4",
      company: "Freelance",
      role: "Full Stack Developer",
      startDate: "2022-05-01",
      endDate: "2022-08-01",
      location: "Bakü, Baki, Azerbaycan",
      type: "Freelance",
      duration: "4 mos",
      skills:
        "Apollo GraphQL · Redux.js · Git · TypeScript · Object-Oriented Programming (OOP)",
    },
    {
      id: "5",
      company: "APPIDIA",
      role: "Frontend Developer",
      startDate: "2021-09-01",
      endDate: "2022-05-01",
      location: "Turkey",
      type: "Full-time",
      duration: "9 mos",
      skills:
        "Apollo GraphQL · Redux.js · Git · TypeScript · Object-Oriented Programming (OOP)",
    },
    {
      id: "6",
      company: "Devob Creative Agency",
      role: "Frontend Developer",
      startDate: "2018-06-01",
      endDate: "2020-11-01",
      location: "Bakü, Baki, Azerbaycan",
      type: "Full-time",
      duration: "2 yrs 6 mos",
      skills:
        "Apollo GraphQL · Redux.js · Git · Object-Oriented Programming (OOP)",
    },
  ];

  return (
    <section data-widget="work-experience-list" className="relative py-16">
      <div className="container">
        {/* Section Header */}
        <SectionHeader>
          <SectionHeaderContent>
            <SectionHeaderTitle>Work Experience</SectionHeaderTitle>
          </SectionHeaderContent>

          <SectionHeaderActions>
            {configs.socials.linkedin?.url && (
              <Button asChild variant="link">
                <a href={configs.socials.linkedin.url}>
                  View All on LinkedIn
                  <ArrowRightIcon />
                </a>
              </Button>
            )}
          </SectionHeaderActions>
        </SectionHeader>

        {/* List */}
        <BaseList className="grid grid-cols-2 gap-x-6">
          {data.map((item) => {
            return (
              <BaseListItem key={item.id}>
                <BaseListItemContent>
                  <BaseListItemTitle className="text-sm line-clamp-2">
                    {item.company}
                  </BaseListItemTitle>
                  <BaseListItemDescription className="text-sm">
                    {item.role}
                  </BaseListItemDescription>
                </BaseListItemContent>

                <BaseListItemSlot>
                  <time className="text-muted-foreground">
                    {item.startDate} - {item.endDate}
                  </time>
                </BaseListItemSlot>
              </BaseListItem>
            );
          })}
        </BaseList>
      </div>
    </section>
  );
}
