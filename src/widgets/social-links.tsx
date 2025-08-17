import { configs } from "@/lib/configs";

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-4">
      {configs.socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-muted-foreground hover:text-primary"
          >
            <social.icon className="size-8" />
            <span className="sr-only">{social.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
