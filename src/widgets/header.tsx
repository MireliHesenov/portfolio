import Link from "next/link";

import { configs } from "@/lib/configs";

import { Guidelines } from "@/components/guidelines";
import { DecryptedText } from "@/components/ui/decrypted-text";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ThemeToggle } from "@/widgets/theme-toggle";

import { HeaderMobileNavigation } from "./header-mobile-navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navigation_menu = [
  {
    label: "About",
    href: "/about",
    icon: "💾",
  },
  // {
  //   label: "Projects",
  //   href: "/projects",
  //   icon: "👾",
  // },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: "🏗️",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  //   icon: "📝",
  // },
];

export function Header() {
  return (
    <header
      data-widget="header"
      className="sticky top-0 z-20 bg-background/60 backdrop-blur-md border-b pointer-events-auto"
    >
      <div className="container">
        <div className="grid grid-cols-faf items-center h-18">
          <div className="flex">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xl md:text-2xl font-bold font-leading"
            >
              {/* TODO: Replace with Image component when it's supported by Next.js */}
             <span className={`${poppins.className}`}>hasanov<span className={`${poppins.className} text-sm font-bold font-sans`}>.dev</span></span>
            </Link>
          </div>
    <div></div>
          {/* Navigation menu on desktop */}
          {/* <NavigationMenu>
            <NavigationMenuList className="md:flex hidden">
              {navigation_menu.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle({
                      className: "flex-row bg-transparent",
                    })}
                  >
                    <Link href={item.href}>
                      <span className="mr-1 text-lg">{item.icon}</span>{" "}
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu> */}

          <div className="flex items-center gap-2 ml-auto">
            {/* <ThemeToggle /> */}

            {/* <HeaderMobileNavigation navigation={navigation_menu} /> */}
          </div>
        </div>
      </div>

      {/* <Guidelines /> */}
    </header>
  );
}
