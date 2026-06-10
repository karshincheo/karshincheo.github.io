import Link from "next/link";
import { site } from "@content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[90rem] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-60"
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-1 text-sm sm:gap-2">
          <Link
            href="/#work"
            className="hidden rounded-md px-2.5 py-2 text-muted transition-colors hover:text-fg sm:inline-block"
          >
            Work
          </Link>
          <Link
            href="/#experience"
            className="hidden rounded-md px-2.5 py-2 text-muted transition-colors hover:text-fg sm:inline-block"
          >
            Experience
          </Link>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-2.5 py-2 text-muted transition-colors hover:text-fg"
          >
            Resume
          </a>
          <a
            href={site.links.email}
            className="ml-1 rounded-md bg-fg px-3 py-2 font-medium text-white transition-opacity hover:opacity-85"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
