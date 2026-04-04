import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8">
        {/* Subtle background glow */}
        <div className="absolute inset-0 -z-10 bg-primary/20 blur-[50px] rounded-full scale-150 opacity-50" />
        
        <h1 className="font-heading text-9xl font-extrabold tracking-tighter text-primary/20 sm:text-[12rem]">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <Badge variant="outline" className="h-8 px-4 text-sm font-mono bg-background/80 backdrop-blur-sm">
            ERROR_NOT_FOUND
          </Badge>
        </div>
      </div>

      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        Looks like you're lost in the stack.
      </h2>
      
      <p className="max-w-120 text-muted-foreground mb-8 leading-relaxed">
        The page you are looking for might have been moved, deleted, or never existed in the production environment.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href="/">
          <Button size="lg" className="h-11 px-8 rounded-full">
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="mt-16 opacity-30">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Stack Trace: Request failed with status code 404
        </p>
      </div>
    </div>
  );
}
