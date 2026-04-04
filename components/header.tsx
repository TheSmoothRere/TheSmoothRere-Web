import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { GlobalIcon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const navLinks = [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight"
          >
            TheSmoothRere
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <Link
            href="https://thesmoothrere-portfolio.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <HugeiconsIcon icon={GlobalIcon} />
              Portfolio
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <HugeiconsIcon icon={Menu01Icon} className="size-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left">
                <SheetTitle className="font-heading font-bold">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-8 px-6">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
                <Link
                  href="https://thesmoothrere-portfolio.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <HugeiconsIcon icon={GlobalIcon} />
                    Portfolio
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
