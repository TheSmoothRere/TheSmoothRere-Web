import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { getRepos } from "@/lib/github";
import { ProjectCard } from "@/components/projects/project-card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export async function ProjectsSection() {
  const allRepos = await getRepos();
  const repos = allRepos.slice(0, 3);

  return (
    <section className="px-4 border-t">
      <div className="container max-w-7xl mx-auto py-20 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <Badge variant="outline" className="px-3 py-1">
              Featured Work
            </Badge>
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Latest Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A glimpse into some of the open-source projects I&apos;ve built,
              ranging from backend utilities to Minecraft mods.
            </p>
          </div>
          {repos.length > 0 && (
            <Link href="/projects">
              <Button
                variant="ghost"
                className="group hidden md:flex items-center gap-2 h-12"
              >
                View All Projects
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-4 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? (
            repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)
          ) : (
            <div className="col-span-full">
              <Empty className="py-20 border border-dashed">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <HugeiconsIcon icon={Search01Icon} className="size-4" />
                  </EmptyMedia>
                  <EmptyTitle>No projects found</EmptyTitle>
                  <EmptyDescription>
                    I haven&apos;t added any projects yet. Check back soon!
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </div>
          )}
        </div>

        {repos.length > 0 && (
          <div className="mt-12 md:hidden">
            <Link href="/projects">
              <Button
                variant="outline"
                className="w-full h-11 rounded-full group"
              >
                View All Projects
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
