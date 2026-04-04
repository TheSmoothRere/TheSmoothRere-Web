import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import { CodeIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Metadata } from "next";
import { CONTACT_LINKS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Services",
  description:
    "Get in touch for custom Discord bots, backend services, and fullstack applications. Available for commissions and collaboration.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background/50">
      <div className="container max-w-7xl mx-auto py-12 px-4 lg:py-20">
        <div className="flex flex-col gap-4 mb-16">
          <Badge variant="outline" className="w-fit px-3 py-1 text-xs">
            Available for Commissions
          </Badge>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-primary underline underline-offset-8">
              great
            </span>{" "}
            together.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Interested in a custom Discord bot or a backend solution? Check out
            my services below and get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                <HugeiconsIcon
                  icon={CodeIcon}
                  className="size-6 text-primary"
                />
                Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((service) => (
                  <Card
                    key={service.title}
                    className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <CardHeader>
                      <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
                        <HugeiconsIcon
                          icon={service.icon}
                          className="size-6 text-primary"
                        />
                      </div>
                      <CardTitle className="font-heading text-lg">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] lowercase font-mono"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator />

            <section className="bg-card/30 backdrop-blur-md rounded-2xl border p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Commission Inquiry: Custom Discord Bot"
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>
                <Button className="w-full md:w-auto h-11 px-8 rounded-full shadow-lg shadow-primary/20">
                  Submit Inquiry
                </Button>
                <p className="text-xs text-muted-foreground text-center md:text-left">
                  This form is currently for demo purposes. Please use the
                  direct links on the right to contact me.
                </p>
              </form>
            </section>
          </div>

          <div className="space-y-8">
            <aside className="sticky top-24">
              <div className="bg-muted/30 backdrop-blur-sm rounded-2xl border p-8 space-y-8">
                <div>
                  <h3 className="font-heading text-lg font-bold mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    {CONTACT_LINKS.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:bg-background/50 hover:border-border/50 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-background border shadow-sm group-hover:text-primary group-hover:border-primary/50 transition-colors">
                          <HugeiconsIcon icon={link.icon} className="size-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {link.name}
                          </span>
                          <span className="text-sm font-medium">
                            {link.label}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-heading text-lg font-bold mb-4">
                    Availability
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond within 24 hours. For urgent requests,
                    Discord is the fastest way to reach me.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
