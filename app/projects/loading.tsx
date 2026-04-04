import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProjectsLoading() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col gap-4 mb-12">
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-6 w-96 max-w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={"skeleton-" + i} className="flex flex-col h-full bg-card/50">
            <CardHeader className="pb-3">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6" />
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <div className="flex gap-2 mt-auto">
                <Skeleton className="h-5 w-16 rounded-full" />
                <div className="flex gap-3 ml-auto">
                  <Skeleton className="h-4 w-8" />
                  <Skeleton className="h-4 w-8" />
                </div>
              </div>
            </CardContent>
            <div className="h-10 border-t bg-muted/20" />
          </Card>
        ))}
      </div>
    </div>
  );
}
