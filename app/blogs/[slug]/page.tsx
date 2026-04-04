import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getPosts } from "@/lib/blog";
import {
  ArrowLeft01Icon,
  Calendar01Icon,
  Time02Icon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["TheSmoothRere", "Raehan Damai Putra"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Readonly<BlogPageProps>) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl mx-auto py-12 px-4 lg:py-20">
      <Button variant="ghost" className="mb-8 group -ml-4">
        <Link href="/blogs" className="flex items-center gap-2">
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>
      </Button>

      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs lowercase font-mono">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-6 text-sm text-muted-foreground uppercase tracking-widest font-semibold pt-2">
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Time02Icon} className="size-4" />
            {post.readingTime}
          </span>
        </div>
      </div>

      <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:leading-relaxed prose-p:text-muted-foreground">
        {/* For now, just show the description since we're using mock data */}
        <p className="text-xl leading-relaxed text-foreground mb-8">
          {post.description}
        </p>
        
        <div className="p-8 rounded-2xl border bg-muted/30 text-center italic text-muted-foreground">
          Detailed blog content for this post is coming soon! This is a placeholder for the actual article content.
        </div>
      </div>
    </article>
  );
}
