import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-[90rem] flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        This page wandered off.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
        The link is broken or the page moved. Let's get you back to something
        real.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-lg bg-fg px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          Back home
        </Link>
        <a
          href="mailto:karshin@mit.edu"
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
        >
          Email me
        </a>
      </div>
    </div>
  );
}
