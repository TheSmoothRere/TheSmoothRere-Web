import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of open-source projects, backend services, and tools developed by TheSmoothRere.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-background/50">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[32px_32px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_100%_200px,var(--primary),transparent)] opacity-[0.03]" />
      
      {children}
    </div>
  );
}
