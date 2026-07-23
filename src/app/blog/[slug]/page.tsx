import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { getPostBySlug, getPublishedPosts } from "@/lib/data/posts";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const base = buildMetadata({ title: post.title, description: post.excerpt });
  return post.cover_image
    ? { ...base, openGraph: { ...base.openGraph, images: [post.cover_image] } }
    : base;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Section className="pt-28 sm:pt-36">
      <Link href="/blog" className="text-muted hover:text-foreground text-sm">
        ← All posts
      </Link>

      <p className="text-muted mt-6 font-mono text-xs">
        {date} · {post.author}
      </p>
      <h1 className="text-foreground mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {post.title}
      </h1>

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border-border text-muted rounded-full border px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {post.cover_image && (
        // Cover images come from an arbitrary Supabase storage URL set per-post,
        // so we use a plain <img> rather than next/image (which needs known
        // remote hostnames configured ahead of time in next.config.ts).
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover_image}
          alt={post.title}
          className="border-border mt-8 w-full rounded-(--radius-card) border object-cover"
        />
      )}

      <div className="prose-blog text-muted mt-8 max-w-2xl text-base leading-relaxed">
        {post.content}
      </div>
    </Section>
  );
}
