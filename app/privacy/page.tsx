import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the official website of TheSmoothRere.",
};

export default function PrivacyPage() {
  const lastUpdated = "April 4, 2026";

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 lg:py-20">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground italic">Last Updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:leading-relaxed prose-p:text-muted-foreground space-y-8">
        <section>
          <h2 className="text-2xl text-foreground">1. Introduction</h2>
          <p>
            Welcome to the official personal branding website of TheSmoothRere ("we," "us," or "our"). We respect your privacy and are committed to protecting any personal information you may provide while using this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">2. Information Collection</h2>
          <p>
            This website is designed to be a professional space. We do not require you to create an account or provide personal information to browse. However, if you use the contact form, we collect the information you provide, such as your name, email address, and message content, solely for the purpose of responding to your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">3. Cookies and Tracking</h2>
          <p>
            We may use minimal, essential cookies or local storage to enhance your browsing experience (e.g., remembering theme preferences). We do not use invasive tracking or third-party advertising cookies. Standard server logs may capture basic information like your IP address for security and diagnostic purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">4. Data Usage and Sharing</h2>
          <p>
            Any information you provide via our contact form is used exclusively for communication between you and TheSmoothRere. We do not sell, trade, or otherwise transfer your personal information to outside parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">5. Third-Party Links</h2>
          <p>
            Our website contains links to third-party sites (e.g., GitHub, Discord, Telegram). These sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">6. Contact</h2>
          <p>
            If you have any questions regarding this privacy policy, you may contact us using the information on our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
