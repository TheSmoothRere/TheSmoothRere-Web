import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  StarIcon,
  GitBranchIcon,
  CodeIcon,
  GlobalIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Repo } from "@/lib/github";

interface ProjectCardProps {
  repo: Repo;
}

export function ProjectCard({ repo }: Readonly<ProjectCardProps>) {
  return (
    <Card className="flex flex-col h-full hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="font-heading text-xl">{repo.name}</CardTitle>
            <CardDescription className="line-clamp-2 min-h-10">
              {repo.description || "No description provided."}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-6 space-y-4">
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 4).map((topic) => (
              <Badge
                key={topic}
                variant="outline"
                className="px-1.5 py-0 text-[10px] lowercase text-muted-foreground"
              >
                {topic}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {repo.language && (
            <Badge variant="secondary" className="font-mono text-[10px] h-5">
              <HugeiconsIcon icon={CodeIcon} className="size-3 mr-1" />
              {repo.language}
            </Badge>
          )}
          <div className="flex items-center gap-3 ml-auto text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <HugeiconsIcon icon={StarIcon} className="size-3.5" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <HugeiconsIcon icon={GitBranchIcon} className="size-3.5" />
              {repo.forks_count}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/20 flex gap-2 overflow-hidden p-4">
        <Link href={repo.html_url} target="_blank" className="flex-1">
          <Button
            variant="default"
            size="sm"
            className="w-full h-9 text-xs font-medium gap-2"
          >
            <HugeiconsIcon icon={GithubIcon} className="size-3.5" />
            Code
          </Button>
        </Link>
        {repo.homepage && (
          <Link href={repo.homepage} target="_blank" className="flex-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full text-xs h-9 font-medium gap-2"
            >
              <HugeiconsIcon icon={GlobalIcon} className="size-3.5" />
              Live
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
