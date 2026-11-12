import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    // Default recipient is ipr@iprani.com or overridden by CONTACT_RECEIVER_EMAIL
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "ipr@iprani.com";
    
    // Sender email: Use custom verified sender if configured, or default Resend test address
    const fromEmail = process.env.FROM_EMAIL || "IP Rani Inquiries <onboarding@resend.dev>";

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #0d2b52; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #0d2b52; margin: 0; font-size: 22px;">New Inquiry Received</h2>
          <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px;">Submitted via IP Rani Website Contact Form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Full Name:</td>
              <td style="padding: 10px 0; color: #1e293b; font-weight: 500;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone:</td>
              <td style="padding: 10px 0; color: #1e293b;">${phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Subject:</td>
              <td style="padding: 10px 0; color: #1e293b;">${subject || "General Inquiry"}</td>
            </tr>
          </tbody>
        </table>

        <div style="background-color: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
          <h4 style="margin: 0 0 8px 0; color: #0d2b52; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h4>
          <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</p>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
          <p style="margin: 0;">This email was automatically routed to <strong>${receiverEmail}</strong>.</p>
          <p style="margin: 4px 0 0 0;">You can reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        reply_to: email,
        subject: `New Inquiry from ${name}: ${subject || "Consultation Request"}`,
        html: htmlContent,
      }),
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API Error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to send email via Resend." },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
