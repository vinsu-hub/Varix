import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Post } from "@/types";

export function PostCard({ post }: { post: Post }) {
  const date = new Date(post.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card className="hover:border-brand h-full transition-colors">
        <p className="text-muted font-mono text-xs">
          {date} · {post.author}
        </p>
        <h3 className="text-foreground mt-2 text-xl font-medium">{post.title}</h3>
        <p className="text-muted mt-3 text-sm">{post.excerpt}</p>
      </Card>
    </Link>
  );
}
