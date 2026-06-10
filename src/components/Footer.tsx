import { site } from "@content/site";

type FooterLink = { label: string; href: string };

export function Footer() {
  const links: FooterLink[] = [
    { label: "Email", href: site.links.email },
    { label: "WhatsApp", href: site.links.whatsapp },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "GitHub", href: site.links.github },
    { label: "X", href: site.links.x },
  ].filter((l) => l.href);

  // Resolved at build time (static export), so it stays correct without JS.
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p className="text-sm text-faint">
          © {year} {site.name}
        </p>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
