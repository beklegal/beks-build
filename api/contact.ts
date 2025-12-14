import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const recipientEmail = process.env.CONTACT_EMAIL || "b.e.koranteng@gmail.com";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  const resend = new Resend(apiKey);

  try {
    // Send email to admin
    await resend.emails.send({
      from: "BEKs Build <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `New Contact Form from ${name}`,
      html: `<p>${message}</p><p>From: ${email}</p>`,
    });

    // Optionally send confirmation to user
    await resend.emails.send({
      from: "BEKs Build <onboarding@resend.dev>",
      to: email,
      subject: "We received your message - BEKs Build",
      html: `<p>Thank you ${name}, we received your message.</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ success: false, error: "Email failed" });
  }
}
