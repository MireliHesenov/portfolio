import Link from "next/link";

import { configs } from "@/lib/configs";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DecryptedText } from "@/components/ui/decrypted-text";
import { Guidelines } from "@/components/guidelines";

import ThemeToggle from "@/widgets/theme-toggle";

export function Header() {
  const navigation = [
    {
      label: "Home",
      href: "/",
      icon: "🏠",
    },
    {
      label: "Projects",
      href: "/projects",
      icon: "👾",
    },
    {
      label: "Blog",
      href: "/blog",
      icon: "📝",
    },
    {
      label: "About",
      href: "/about",
      icon: "💾",
    },
  ];

  return (
    <header
      data-widget="header"
      className="sticky top-0 z-20 bg-background/60 backdrop-blur-md border-b"
    >
      <div className="container">
        <div className="grid grid-cols-faf items-center h-18">
          <div>
            <Link href="/" className="text-2xl font-bold font-leading">
              <DecryptedText
                text={configs.app.name}
                animateOn="hover"
                revealDirection="start"
                speed={60}
                sequential
              />
            </Link>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
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
          </NavigationMenu>

          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <Guidelines />
    </header>
  );
}
