import Link from "next/link";
import { configs } from "@/lib/configs";

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: configs.socials.coffee.name,
    href: configs.socials.coffee.url,
  },
];

export function Footer() {
  return (
    <footer data-widget="footer" className="py-10 mt-auto border-t border-border">
      <div className="container">
        <div className="flex items-center justify-between gap-6 mb-4">
          <div className="flex items-center md:justify-start justify-center gap-x-6 gap-y-4 flex-wrap">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground link font-medium md:text-base text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between gap-6">
          <Link
            href="/"
            className="md:text-base text-sm text-muted-foreground hover:text-primary"
          >
            Made with ❤️ by {configs.app.author}
          </Link>
        </div>
      </div>
    </footer>
  );
}
