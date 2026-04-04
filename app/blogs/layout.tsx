import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and tutorials on backend development, Java Spring Boot, and custom software solutions by TheSmoothRere.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-background/50">
      {/* Blog-specific decoration: Dot pattern and left-sided glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#80808015_1px,transparent_1px)] bg-size-[24px_24px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_1000px_at_0%_300px,var(--primary),transparent)] opacity-[0.03]" />
      
      {children}
    </div>
  );
}
