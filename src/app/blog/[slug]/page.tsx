import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { marked } from "marked";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { BlogHeroImage } from "@/components/blog/BlogHeroImage";
import { getPostBySlug, getPublishedPosts } from "@/lib/data/posts";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

function readingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

function formatTag(tag: string): string {
  return tag
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

marked.setOptions({
  breaks: true,
  gfm: true,
});

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

  const htmlContent = marked.parse(post.content) as string;

  return (
    <>
      {/* Hero cover image */}
      {post.cover_image && (
        <div className="relative w-full">
          <BlogHeroImage src={post.cover_image} alt={post.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      )}

      <Section className={post.cover_image ? "-mt-20 relative z-10 pt-0" : "pt-28 sm:pt-36"}>
        <Container className="max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-muted hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          {/* Title */}
          <h1 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="text-muted mt-4 flex flex-wrap items-center gap-2 font-mono text-xs">
            <span>{date}</span>
            <span className="text-border">·</span>
            <span>{post.author}</span>
            <span className="text-border">·</span>
            <span>{readingTime(post.content)}</span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-brand/10 text-brand border-brand/20 rounded-full border px-2.5 py-0.5 font-mono text-xs"
                >
                  {formatTag(tag)}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="border-border my-8 border-t" />

          {/* Article content */}
          <article
            className="prose-blog text-muted text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </Container>
      </Section>
    </>
  );
}
