import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background px-4">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
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
            {". "}The source code is available on{" "}
            <a
              href="https://github.com/thesmoothrere/thesmoothrere-web"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              GitHub
            </a>
            {"."}
          </p>
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
