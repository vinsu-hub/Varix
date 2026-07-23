import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/home/HeroBackground";
import { PostCard } from "@/components/blog/PostCard";
import { AnimateInView } from "@/components/ui/AnimateInView";
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
      <section className="relative min-h-[28rem] overflow-hidden sm:min-h-[32rem]">
        {/* Only shown at lg:+ — below that the text column fills the full
            width and there's no empty space for the video to fill. */}
        <div className="absolute inset-0 hidden lg:block">
          <HeroBackground />
        </div>
        <Container className="relative z-10 flex min-h-[28rem] flex-col justify-center sm:min-h-[32rem]">
          <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="text-muted mt-4 max-w-xl text-lg">
            How we build. What we&apos;re learning.
          </p>
        </Container>
      </section>

      <Section noTopPadding>
        {posts.length === 0 ? (
          <p className="text-muted">
            No posts published yet. Once Supabase is connected and the{" "}
            <code className="font-mono text-sm">posts</code> table has published rows,
            they&apos;ll show up here.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <AnimateInView key={post.id} delay={i * 100} className={i === 0 ? "col-span-full" : ""}>
                <PostCard post={post} featured={i === 0} />
              </AnimateInView>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
