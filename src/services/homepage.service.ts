import { ProjectService } from "./project.service";

export const HomepageService = {
  getPageData() {
    const projects = ProjectService.findAll();

    return {
      projects,
    };
  },
};
