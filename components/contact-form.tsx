"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  async function handleAction(formData: FormData) {
      setIsPending(true);

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = (await response.json()) as { message?: string; error?: string };

        if (response.ok) {
          toast.success(result.message || "Thank you! Your inquiry has been sent.");
          formRef.current?.reset();
          setMessageLength(0);
        } else {
          toast.error(result.error || "Something went wrong.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsPending(false);
      }
    }

    return (
      <form ref={formRef} action={handleAction} className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            maxLength={100}
            className="bg-background/50 border-border/50 focus:border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            maxLength={100}
            className="bg-background/50 border-border/50 focus:border-primary/50"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Commission Inquiry: Custom Discord Bot"
          required
          maxLength={250}
          className="bg-background/50 border-border/50 focus:border-primary/50"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="message">Message</Label>
          <span className={cn(
            "text-[10px] font-mono",
            messageLength > 900 ? "text-destructive" : "text-muted-foreground"
          )}>
            {messageLength}/1000
          </span>
        </div>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          required
          maxLength={1000}
          onChange={(e) => setMessageLength(e.target.value.length)}
          className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary/50 resize-none"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full md:w-auto h-11 px-8 rounded-full shadow-lg shadow-primary/20"
      >
        {isPending ? "Sending..." : "Submit Inquiry"}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center md:text-left">
        I typically respond within 24 hours. For urgent requests, please use direct contact links.
      </p>
    </form>
  );
}
