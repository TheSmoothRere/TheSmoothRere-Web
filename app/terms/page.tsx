import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the official website of TheSmoothRere.",
};

export default function TermsPage() {
  const lastUpdated = "April 4, 2026";

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 lg:py-20">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="text-muted-foreground italic">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:leading-relaxed prose-p:text-muted-foreground space-y-8">
        <section>
          <h2 className="text-2xl text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the official personal branding website of TheSmoothRere, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">2. Content Ownership</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and blog posts, is the intellectual property of TheSmoothRere, unless otherwise stated. You may not reproduce, distribute, or use this content for commercial purposes without explicit written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">3. User Conduct</h2>
          <p>
            You agree to use this website only for lawful purposes. You are prohibited from using the contact form to send spam, offensive content, or malicious code. We reserve the right to ignore or block communications that violate these guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">4. Disclaimers</h2>
          <p>
            The information provided on this website is for informational and professional branding purposes only. While we strive for accuracy, we make no guarantees regarding the completeness or timeliness of the information. Any reliance you place on such information is strictly at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">5. Limitation of Liability</h2>
          <p>
            TheSmoothRere shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use this website. This includes, but is not limited to, reliance on any information obtained through the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">6. Modifications</h2>
          <p>
            We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">7. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws applicable to your jurisdiction and ours, without regard to its conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us via the channels listed on our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
