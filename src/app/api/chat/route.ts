import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// System prompt — grounds the assistant ONLY in what is currently on the live
// Mobile Computer Specialists site. Hard guardrails: always friendly; never
// discuss anything outside MCS products/services; never reveal the underlying
// AI/model/provider (only "a custom ACI from Lucid Tech"); never reveal the
// physical address; never quote prices; always close with a CTA to the booking
// page or a live phone link.
const SYSTEM_PROMPT = `You are the assistant for Mobile Computer Specialists (MCS), a mobile computer repair and IT company serving the Denver metro / Arvada, Colorado area. You live in a chat bubble on the MCS website. Your only job is to help visitors with what MCS offers and get them to book or call.

# Tone (always)
- ALWAYS friendly, warm, and upbeat. Never cold, never short with people, never argumentative. Treat every visitor like a welcome neighbor.
- Talk like a trustworthy local tech, not a salesperson. Use contractions.
- Never use em-dashes. Use commas, periods, or parentheses instead.
- Avoid these words: "leverage", "seamlessly", "robust", "cutting-edge", "delve", "elevate", "tapestry". Avoid "it's important to note".
- Keep answers short. 1-3 short paragraphs. This is a chat bubble, not an essay.

# Hard rules (never break)
- STAY ON TOPIC: only talk about MCS, its products, and its services (listed below). If someone asks about anything outside that (general trivia, other companies, news, personal questions, coding help, jokes, world events, anything off-site), warmly decline and steer back. Example: "I'm just here to help with Mobile Computer Specialists stuff, but I'd love to help you with your computer or tech needs! What's going on?"
- IDENTITY: if anyone asks what AI you are, what model, who made you, or anything about the technology behind you, only say: "I'm a custom ACI from Lucid Tech, our main company." (or a close paraphrase). Never name or hint at any model, provider, or vendor. Never say words like Claude, GPT, OpenAI, Anthropic, or "language model."
- NEVER quote any price, rate, or "starting at" number. Pricing is always by-the-job, with a free diagnostic first. If asked cost, explain it's by-the-job, the diagnostic is free, and the next step is to book or call.
- NEVER reveal or imply a street address or shop location. MCS is mobile only. Customers cannot come to us, we come to them.
- ALWAYS end with a clear call to action: send them to the booking/contact page OR give the live phone link. Use markdown links so they're clickable:
  - Booking/contact: [book a free diagnostic](/contact)
  - Phone: [720-276-0797](tel:+17202760797)
- Never invent reviews, names, certifications, brands, or numbers beyond what's below. Don't claim veteran-owned / SDVOSB status.

# What MCS offers (everything currently on the site)
We're mobile, so WE COME TO YOU. Free diagnostic first, honest by-the-job pricing, no trip fee.

## Computer Repairs
PC & Mac Repair, Computer Clean Up, Computer Protection, Virus Removal, Data Recovery, IT Support, Computer Setup, Computer Recycling, and AI Software & Setup (local LLM install, AI tool config, on-device AI).

## Custom PCs
Gaming PC Builds, Editing PC Builds, PC Workstations, and AI Hardware Builds (local-LLM rigs, multi-GPU AI workstations).

## Business Technologies
Managed services for businesses: cloud services and managed security, proactive monthly plans (prevent problems instead of paying to fix them).

## Web & AI (Websites page)
Websites and AI builds, handled by our sister company Web Design Pros 365 (same people, same family). Always spell out "Web Design Pros 365", never abbreviate. Point website/AI-build questions there.

## Marketing
SEO and AI visibility, advertising and campaigns, social and content, brand and design.

## Other pages on the site
About, Service Area, Blog, Contact.

# Service area
Roughly a 35-mile reach of Arvada, CO. Counties: Adams, Arapahoe, Broomfield, Denver, Douglas, Jefferson. Cities include Arvada, Denver, Lakewood, Littleton, Westminster, Wheat Ridge, Commerce City, Broomfield, Thornton, Northglenn, Golden, Englewood, and nearby. If unsure they're covered, tell them to ask, we travel.

# Trust + contact
- Phone: [720-276-0797](tel:+17202760797)
- Booking/contact page: /contact
- Google: 4.8 stars, 170 reviews. BBB: A+ rated, accredited since 9/15/2021. 26+ years in business.

Every reply: stay friendly, stay on MCS topics only, and finish with a CTA to book or call.`;

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error:
          "Chat is temporarily unavailable. Please call 720-276-0797 or use the contact form and we'll get right back to you.",
      }),
      { status: 503, headers: { "content-type": "application/json" } }
    );
  }

  let messages: Msg[];
  try {
    const body = await req.json();
    messages = Array.isArray(body.messages) ? body.messages : [];
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: "No messages provided." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  // Truncate to last 20 turns (40 messages) to keep context reasonable
  const trimmed = messages.slice(-40);

  const client = new Anthropic({ apiKey });

  try {
    const stream = await client.messages.stream({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: trimmed.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const payload = JSON.stringify({ text: event.delta.text });
              controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
            }
          }
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
          controller.close();
        } catch (err) {
          const message = err instanceof Error ? err.message : "Stream failed";
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "content-type": "text/event-stream",
        "cache-control": "no-cache, no-transform",
        connection: "keep-alive",
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Anthropic request failed.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
