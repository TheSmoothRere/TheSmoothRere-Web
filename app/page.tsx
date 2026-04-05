import { Hero } from "@/components/home/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { BlogsSection } from "@/components/blog/blogs-section";
import { ContactSection } from "@/components/contact/contact-section";

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
