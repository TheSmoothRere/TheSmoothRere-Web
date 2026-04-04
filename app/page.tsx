import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { BlogsSection } from "@/components/blogs-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
    </>
  );
}
