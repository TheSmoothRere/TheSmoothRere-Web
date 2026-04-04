import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Services",
  description: "Custom Discord bots, Spring Boot backends, and fullstack application commissions by TheSmoothRere.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-background/50">
      {/* Contact-specific decoration: Diagonal lines and bottom glow */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,#80808008_1px,transparent_1px),linear-gradient(-45deg,#80808008_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_600px_at_50%_100%,var(--primary),transparent)] opacity-[0.04]" />
      
      {children}
    </div>
  );
}
