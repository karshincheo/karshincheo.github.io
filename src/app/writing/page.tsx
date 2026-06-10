import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on building products, AI, and going from zero to launch.",
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="animate-fade-up py-20 sm:py-24">
        <p className="eyebrow mb-3">Writing</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Notes on building
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Essays on products, AI, customer discovery, and the gap between a
          clean strategy and a thing people actually use.
        </p>

        {posts.length > 0 ? (
          <ul className="mt-14 divide-y divide-line border-t border-line">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block py-7"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <span className="meta shrink-0">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                    {post.summary}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-faint transition-colors group-hover:text-fg">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-14 rounded-xl border border-line bg-surface px-6 py-14 text-center">
            <p className="text-lg font-medium">Essays coming soon.</p>
            <p className="mx-auto mt-2 max-w-md text-muted">
              I'm writing about building products and shipping AI. Check back —
              or reach out and I'll send you the first one.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
