import { GithubIcon } from "@/assets/icons/github.icon";
import { LinkedinIcon } from "@/assets/icons/linkedin.icon";
import { CoffeeIcon } from "lucide-react";

export const configs = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || ">_",
    author: process.env.NEXT_PUBLIC_APP_AUTHOR,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  },

  socials: {
    linkedin: {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/firuzcan",
    },
    github: {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/firuzcanh",
    },
    coffee: {
      name: "Buy me a coffee",
      icon: CoffeeIcon,
      url: "https://kofe.al/@firuzcan",
    },
  },
};
