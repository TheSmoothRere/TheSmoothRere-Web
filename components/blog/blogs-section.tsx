import { BlogCard } from "@/components/blog/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty";
import { getPosts } from "@/lib/blog";
import { ArrowRight01Icon, Note01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export async function BlogsSection() {
  const allPosts = await getPosts();
  const posts = allPosts.slice(0, 3);

  return (
    <section className="px-4 border-t">
      <div className="container max-w-7xl mx-auto py-20 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <Badge variant="outline" className="px-3 py-1">
              Latest Articles
            </Badge>
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              From the Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Sharing my thoughts on backend engineering, Java development, and
              my journey as a junior developer.
            </p>
          </div>
          {posts.length > 0 && (
            <Link href="/blogs">
              <Button
                variant="ghost"
                className="group hidden md:flex items-center gap-2 h-12"
              >
                View All Posts
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-4 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <div className="col-span-full">
              <Empty className="py-20 border border-dashed">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <HugeiconsIcon icon={Note01Icon} className="size-4" />
                  </EmptyMedia>
                  <EmptyTitle>No blog posts found</EmptyTitle>
                  <EmptyDescription>
                    I haven&apos;t posted anything yet. Check back soon for new
                    articles!
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          )}
        </div>

        {posts.length > 0 && (
          <div className="mt-12 md:hidden">
            <Link href="/blogs">
              <Button
                variant="outline"
                className="w-full h-11 rounded-full group"
              >
                View All Posts
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-4 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
