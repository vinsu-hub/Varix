import { Section } from "@/components/layout/Section";
import { PostCard } from "@/components/blog/PostCard";
import { getPublishedPosts } from "@/lib/data/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Case studies, build notes, and technical insights from the Varix team.",
});

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <Section className="pt-28 sm:pt-36">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Blog
        </h1>
      </Section>

      <Section className="pt-0">
        {posts.length === 0 ? (
          <p className="text-muted">
            No posts published yet. Once Supabase is connected and the{" "}
            <code className="font-mono text-sm">posts</code> table has published rows,
            they&apos;ll show up here.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard
                key={post.id}
                post={post}
                featured={i === 0}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
