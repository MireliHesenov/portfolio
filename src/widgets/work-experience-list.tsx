import { configs } from "@/lib/configs";

import { WorkExperienceService } from "@/services/work-experience.service";

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
  const data = WorkExperienceService.findAll();

  return (
    <section data-widget="work-experience-list" className="relative py-16">
      <div className="container">
        {/* Section Header */}
        <SectionHeader>
          <SectionHeaderContent>
            <SectionHeaderTitle>Work Experience</SectionHeaderTitle>
          </SectionHeaderContent>

          {/* <SectionHeaderActions>
            {configs.socials.linkedin?.url && (
              <Button asChild variant="link">
                <a
                  href={configs.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All on LinkedIn
                  <ArrowRightIcon />
                </a>
              </Button>
            )}
          </SectionHeaderActions> */}
        </SectionHeader>

        {/* List */}
        <BaseList className="grid md:grid-cols-2 gap-x-6">
          {data.map((item) => {
            return (
              <BaseListItem key={item.slug}>
                <BaseListItemContent>
                  <BaseListItemTitle className="text-sm line-clamp-2">
                    {item.metadata?.title}
                  </BaseListItemTitle>
                  <BaseListItemDescription className="text-sm">
                    {item.metadata?.role || "Unknown"}
                  </BaseListItemDescription>
                </BaseListItemContent>

                <BaseListItemSlot>
                  <time className="text-muted-foreground text-sm">
                    {`${item.metadata?.startDate} - ${
                      item.metadata?.endDate || "Present"
                    }`}
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
