import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().max(200),
  message: z.string().max(5000).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      console.warn("[/api/contact] RESEND_API_KEY not configured");
      // Don't fail the user-facing form when key is missing; log and return ok
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const subject = `New Contact: ${service} — ${name}`;
    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #1c1c25;">New contact from mobilecomputerspecialists.com</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #6b6e75;"><strong>Name</strong></td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6e75;"><strong>Email</strong></td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6e75;"><strong>Phone</strong></td><td style="padding: 8px 0;">${escapeHtml(phone || "—")}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6e75;"><strong>Service</strong></td><td style="padding: 8px 0;">${escapeHtml(service)}</td></tr>
        </table>
        <h3 style="margin-top: 24px; color: #1c1c25;">Message</h3>
        <p style="white-space: pre-wrap; padding: 12px 16px; background: #faf9f6; border-left: 3px solid #ffb547; color: #1c1c25;">${escapeHtml(message || "—")}</p>
      </div>
    `;

    await resend.emails.send({
      from: "MCS Website <noreply@mobilecomputerspecialists.com>",
      to: "info@mobilecomputerspecialists.com",
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] error", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
