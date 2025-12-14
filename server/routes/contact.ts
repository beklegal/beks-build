import { RequestHandler } from "express";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body as ContactFormData;

    // Validation
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: "Invalid email address",
      });
      return;
    }

    // Check if API key is set
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "b.e.koranteng@gmail.com";

    // If API key is not set, allow local testing by logging the message
    // and returning success when not in production. In production environments
    // the API key must be provided and sending will fail with 500.
    if (!apiKey) {
      const messagePreview = {
        to: recipientEmail,
        from: "BEKs Build <onboarding@resend.dev>",
        subject: `New Contact Form Submission from ${name}`,
        body: message,
        senderEmail: email,
      };

      if (process.env.NODE_ENV === "production") {
        console.error("RESEND_API_KEY environment variable is not set");
        res.status(500).json({
          success: false,
          error: "Email service not configured",
        });
        return;
      } else {
        // Development fallback: log preview and return success so the frontend
        // can be tested without sending real emails.
        console.warn("RESEND_API_KEY not set — logging outgoing contact message:", messagePreview);
        res.status(200).json({ success: true, message: "Email sending skipped in development (logged)." });
        return;
      }
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send email to admin
    const result = await resend.emails.send({
      from: "BEKs Build <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; font-size: 14px; margin-bottom: 5px;">From:</h3>
              <p style="color: #333; margin: 0;"><strong>${name}</strong></p>
              <p style="color: #666; margin: 0; font-size: 14px;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; font-size: 14px; margin-bottom: 5px;">Message:</h3>
              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2196F3; border-radius: 4px;">
                <p style="color: #333; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                This email was sent from your BEKs Build website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      res.status(500).json({
        success: false,
        error: "Failed to send email",
      });
      return;
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "BEKs Build <onboarding@resend.dev>",
      to: email,
      subject: "We received your message - BEKs Build",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Thank You, ${name}!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              We received your message and appreciate you reaching out to BEKs Build. Our team will review your inquiry and get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f0f7ff; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
              <h3 style="color: #2196F3; margin-top: 0;">What happens next?</h3>
              <ul style="color: #666; margin: 10px 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Our team will review your message</li>
                <li style="margin-bottom: 8px;">We'll contact you within 24 hours</li>
                <li>Let's discuss how we can help with your project</li>
              </ul>
            </div>
            
            <p style="color: #999; font-size: 12px; margin-bottom: 0;">
              Best regards,<br/>
              <strong>BEKs Build Team</strong><br/>
              Engineering the Future of Digital Products
            </p>
          </div>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
