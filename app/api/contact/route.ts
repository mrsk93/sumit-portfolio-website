import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    // NOTE: If you don't have a custom domain, Resend provides a default 'onboarding@resend.dev' address
    // You can find your specific verified sender in the Resend dashboard under "Domains" or "Emails"
    const fromEmail = process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const toEmail = process.env.CONTACT_FORM_EMAIL || "kumar.sumit9981@gmail.com";

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio website contact form.</p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Email sent successfully",
        data: { id: data.id }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Check for specific Resend errors
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json(
          { error: "Invalid Resend API key configuration" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
