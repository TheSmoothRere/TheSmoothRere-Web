import { getPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { Note01Icon } from "@hugeicons/core-free-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Sharing my thoughts on backend engineering, Java development, and my journey as a developer.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Blogs
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Thoughts, tutorials, and insights on backend development, Java, and
          the tech industry.
        </p>
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
                  Check back soon for new articles!
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        )}
      </div>
    </div>
  );
}
