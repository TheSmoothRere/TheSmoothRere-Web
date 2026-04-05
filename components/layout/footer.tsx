import { CONTACT_LINKS } from "@/lib/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = CONTACT_LINKS.filter((link) => link.onFooter);

  return (
    <footer className="border-t bg-background px-4">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} TheSmoothRere. Built by{" "}
            <a
              href="https://github.com/thesmoothrere"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              TheSmoothRere
            </a>
            {"."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              title={link.name}
            >
              <HugeiconsIcon icon={link.icon} className="size-5" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>

        <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-primary">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
