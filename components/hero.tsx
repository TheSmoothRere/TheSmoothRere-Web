import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--primary)_0%,transparent_100%)] opacity-[0.05]" />

      <div className="container max-w-7xl mx-auto flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-8 h-6 px-3 py-1 text-xs">
          Junior Backend Developer
        </Badge>

        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Building Robust Backends with <span className="text-primary">Java & Spring Boot</span>
        </h1>

        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-10">
          Crafting high-performance systems from Discord bots and Minecraft Fabric mods to 
          scalable services powered by PostgreSQL and Redis.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/blogs">
            <Button size="lg" className="h-11 px-8 rounded-full">
              Read the Blogs
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" size="lg" className="h-11 px-8 rounded-full">
              View Projects
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Tech Stack</span>
          <div className="flex gap-3 flex-wrap justify-center">
            {["Java", "Spring Boot", "PostgreSQL", "Redis", "Fabric API"].map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

