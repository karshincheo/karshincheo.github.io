import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { site } from "@content/site";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      url: `${site.url}/writing/${post.slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-20 sm:py-24">
      <Link
        href="/writing"
        className="inline-block text-sm font-medium text-muted transition-colors hover:text-fg"
      >
        ← Writing
      </Link>

      <header className="mt-8 animate-fade-up">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-faint">{formatDate(post.date)}</p>
      </header>

      <div className="prose mt-10">
        <MDXRemote source={post.content} />
      </div>

      <footer className="mt-16 border-t border-line pt-8">
        <Link
          href="/writing"
          className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
        >
          ← All writing
        </Link>
      </footer>
    </article>
  );
}
