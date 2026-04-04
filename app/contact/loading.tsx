import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 lg:py-20">
      <div className="flex flex-col gap-4 mb-16">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-16 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-48 rounded-xl" />
            <Skeleton className="h-48 rounded-xl" />
          </div>
          <Skeleton className="h-[400px] rounded-2xl" />
        </div>
        <div>
          <Skeleton className="h-[500px] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
