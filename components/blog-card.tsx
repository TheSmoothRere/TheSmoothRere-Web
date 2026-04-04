import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  Time02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: Readonly<BlogCardProps>) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group block">
      <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group-hover:bg-card/80 group-hover:-translate-y-1 overflow-hidden">
        <CardHeader className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] lowercase font-mono"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 leading-relaxed mt-2 text-sm">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-6 mt-auto">
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
              <span className="flex items-center gap-1">
                <HugeiconsIcon icon={Calendar01Icon} className="size-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <HugeiconsIcon icon={Time02Icon} className="size-3" />
                {post.readingTime}
              </span>
            </div>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
