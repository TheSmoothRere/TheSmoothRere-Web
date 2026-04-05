import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight01Icon,
  DatabaseIcon,
  DiscordIcon,
  GlobalIcon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function ContactSection() {
  const services = [
    {
      title: "Discord Bots",
      description: "Custom bots built with JDA and Spring Boot.",
      icon: DiscordIcon,
    },
    {
      title: "Backend Apps",
      description: "Robust services with Java & Spring Boot.",
      icon: DatabaseIcon,
    },
    {
      title: "Fullstack Solutions",
      description: "Modern apps using Next.js or React.",
      icon: GlobalIcon,
    },
  ];

  return (
    <section className="px-4 border-t bg-muted/30">
      <div className="container max-w-7xl mx-auto py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="px-3 py-1">Available for Commissions</Badge>
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Have a project in mind? Let&apos;s build it.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I specialize in custom Discord bots and high-performance backend systems. 
              Whether it&apos;s a complex integration or a simple utility, I&apos;m ready to help.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 rounded-full group gap-2">
                  Get in Touch
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <Card key={service.title} className="bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors border-border/50">
                <CardHeader className="p-6">
                  <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
                    <HugeiconsIcon icon={service.icon} className="size-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
            <Card className="bg-primary text-primary-foreground border-none flex flex-col items-center justify-center p-6 text-center shadow-lg shadow-primary/20">
              <p className="font-heading font-bold text-lg mb-2">View More</p>
              <p className="text-sm opacity-90 mb-4">Explore all services & availability</p>
              <Link href="/contact">
                <Button variant="secondary" size="sm" className="rounded-full px-6">
                  Go to Contact
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
