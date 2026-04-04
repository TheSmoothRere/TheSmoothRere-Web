import { getRepos } from "@/lib/github";
import { ProjectCard } from "@/components/project-card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my open-source work, backend services, and contributions to the developer community.",
};

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of my open-source work, from backend services and Discord
          bots to Minecraft mods.
        </p>
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
                  Check back soon for new projects!
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        )}
      </div>
    </div>
  );
}
