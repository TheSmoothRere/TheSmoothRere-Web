import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMonoHeading = JetBrains_Mono({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesmoothrere-web.thesmoothrere.workers.dev"),
  title: {
    default: "TheSmoothRere | Professional Space & Personal Branding",
    template: "%s | TheSmoothRere",
  },
  description: "The professional digital space of TheSmoothRere. Software Engineer and Backend Developer sharing insights on Java, Spring Boot, and modern backend engineering.",
  keywords: ["TheSmoothRere", "Raehan Damai Putra", "Software Engineer", "Backend Developer", "Java", "Spring Boot", "Personal Branding", "Technical Writing", "Backend Engineering"],
  authors: [{ name: "Raehan Damai Putra" }],
  creator: "TheSmoothRere",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesmoothrere-web.thesmoothrere.workers.dev",
    siteName: "TheSmoothRere",
    title: "TheSmoothRere | Professional Space & Personal Branding",
    description: "The professional digital space of TheSmoothRere. Insights into backend engineering and software development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheSmoothRere | Professional Space & Personal Branding",
    description: "The professional digital space of TheSmoothRere. Insights into backend engineering and software development.",
    creator: "@thesmoothrere",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "zqzi27zYhYbN0zPmydqRVTiYHFYeud8BgUQ7o8Kn2vM",
  },
};

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, jetbrainsMonoHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
