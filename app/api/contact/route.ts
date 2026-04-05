import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Character limit validation
    if (name.length > 100)
      return NextResponse.json({ error: "Name too long" }, { status: 400 });
    if (email.length > 100)
      return NextResponse.json({ error: "Email too long" }, { status: 400 });
    if (subject.length > 250)
      return NextResponse.json({ error: "Subject too long" }, { status: 400 });
    if (message.length > 1000)
      return NextResponse.json({ error: "Message too long" }, { status: 400 });

    // Rate limiting using Cloudflare KV
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    try {
      const { env } = getCloudflareContext();
      const kv = env.KV_RATE_LIMITER;

      if (kv) {
        const key = `ratelimit:${ip}`;
        const current = await kv.get(key);

        if (current !== null) {
          return NextResponse.json(
            { error: "Rate limit exceeded. Please try again later." },
            { status: 429 },
          );
        }

        // Set the key with a 60-second expiration (TTL)
        await kv.put(key, "1", { expirationTtl: 60 });
      }
    } catch (e) {
      console.warn("Rate limiter check failed or binding missing:", e);
    }

    if (!DISCORD_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const payload = {
      embeds: [
        {
          title: "New Contact Form Inquiry",
          color: 0x3b82f6,
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Subject", value: subject },
            { name: "Message", value: message },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      throw new Error("Discord API error");
    }

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
