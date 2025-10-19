import { CoffeeIcon } from "@/assets/icons/coffee.icon";
import { EnvelopeIcon } from "@/assets/icons/envelope.icon";
import { GithubIcon } from "@/assets/icons/github.icon";
import { LinkedinIcon } from "@/assets/icons/linkedin.icon";

export const configs = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || ">_",
    author: process.env.NEXT_PUBLIC_APP_AUTHOR,
    author_name: process.env.NEXT_PUBLIC_APP_AUTHOR_NAME,
    author_email: process.env.NEXT_PUBLIC_APP_AUTHOR_EMAIL,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  },

  socials: {
    linkedin: {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/firuzcan",
    },
    // github: {
    //   name: "GitHub",
    //   icon: GithubIcon,
    //   url: "https://github.com/firuzcanh",
    // },
    email: {
      name: "E-mail",
      icon: EnvelopeIcon,
      url: `mailto:${process.env.NEXT_PUBLIC_APP_AUTHOR_EMAIL}`,
    },
    coffee: {
      name: "Buy me a coffee",
      icon: CoffeeIcon,
      url: "https://kofe.al/@firuzcan",
    },
  },
};
