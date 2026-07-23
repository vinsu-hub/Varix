import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Post } from "@/types";

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

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const date = new Date(post.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block col-span-full">
        <Card className="h-full overflow-hidden">
          <div className="flex flex-col gap-6 sm:flex-row">
            {/* Image side */}
            <div className="sm:w-2/5 shrink-0">
              <div className="h-48 w-full rounded-lg bg-gradient-to-br from-brand/20 via-brand/10 to-transparent sm:h-full" />
            </div>
            {/* Text side */}
            <div className="flex flex-1 flex-col justify-center py-2">
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-brand/10 text-brand border-brand/20 rounded-full border px-2.5 py-0.5 font-mono text-xs"
                  >
                    {formatTag(tag)}
                  </span>
                ))}
              </div>
              <h2 className="text-foreground mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {post.title}
              </h2>
              <p className="text-muted mt-3 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="text-muted mt-4 flex items-center gap-3 font-mono text-xs">
                <span>{date}</span>
                <span className="text-border">·</span>
                <span>{readingTime(post.content)}</span>
              </div>
              <span className="text-brand mt-4 text-sm font-medium hover:opacity-80">
                Read case study →
              </span>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card className="h-full overflow-hidden">
        {/* Gradient placeholder — swap for <img> when real cover images are added */}
        <div className="h-40 w-full rounded-lg bg-gradient-to-br from-brand/20 via-brand/10 to-transparent" />

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-brand/10 text-brand border-brand/20 rounded-full border px-2 py-0.5 font-mono text-xs"
            >
              {formatTag(tag)}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-foreground mt-3 text-lg font-medium leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted mt-2 flex-1 text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="text-muted mt-4 flex items-center gap-2 font-mono text-xs">
          <span>{date}</span>
          <span className="text-border">·</span>
          <span>{readingTime(post.content)}</span>
        </div>
      </Card>
    </Link>
  );
}
