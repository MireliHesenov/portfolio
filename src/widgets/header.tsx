import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import DecryptedText from "@/components/ui/decrypted-text";

import ThemeToggle from "@/widgets/theme-toggle";
import { configs } from "@/lib/configs";

export function Header() {
  return (
    <header data-widget="header" className="border-b">
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
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle({
                    className: "flex-row",
                  })}
                >
                  <Link href="/">
                    <span className="mr-1 text-lg">🏠</span> Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle({
                    className: "flex-row",
                  })}
                >
                  <Link href="/projects">
                    <span className="mr-1 text-lg">👾</span> Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle({
                    className: "flex-row",
                  })}
                >
                  <Link href="/blog">
                    <span className="mr-1 text-lg">📝</span> Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle({
                    className: "flex-row",
                  })}
                >
                  <Link href="/about">
                    <span className="mr-1 text-lg">💾</span> About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
