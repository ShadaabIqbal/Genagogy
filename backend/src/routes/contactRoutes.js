const express = require("express");
const { Resend } = require("resend");

const router = express.Router();

// Email configuration
const toEmail = process.env.CONTACT_TO || "contactgenagogy@gmail.com";
const resendApiKey = process.env.RESEND_API_KEY;

/**
 * Initialize Resend client
 * Resend uses HTTP API instead of SMTP, so it works even if ports 465/587 are blocked
 */
function getResendClient() {
  if (!resendApiKey) {
    throw new Error(
      "RESEND_API_KEY not found in environment variables.\n" +
      "Please get your API key from https://resend.com/api-keys and add it to your .env file:\n" +
      "RESEND_API_KEY=re_your_api_key_here"
    );
  }

  return new Resend(resendApiKey);
}

/**
 * POST /api/contact
 * Handle contact form submissions using Resend API
 */
router.post("/", async (req, res) => {
  try {
    // Extract and validate input
    const { name, email, phone, course, message } = req.body || {};
    
    // Validation
    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone, and course are required fields.",
      });
    }

    // Trim whitespace
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedCourse = course.trim();
    const trimmedMessage = (message || "").trim();

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Initialize Resend client
    const resend = getResendClient();

    // Prepare email content
    const subject = `New Contact Form Submission from ${trimmedName}`;
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px; margin-bottom: 20px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 12px; font-weight: bold; width: 140px; background-color: #f5f5f5; border: 1px solid #ddd;">Name:</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${trimmedName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; background-color: #f5f5f5; border: 1px solid #ddd;">Email:</td>
            <td style="padding: 12px; border: 1px solid #ddd;">
              <a href="mailto:${trimmedEmail}" style="color: #0066cc; text-decoration: none;">${trimmedEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; background-color: #f5f5f5; border: 1px solid #ddd;">Phone:</td>
            <td style="padding: 12px; border: 1px solid #ddd;">
              <a href="tel:${trimmedPhone}" style="color: #0066cc; text-decoration: none;">${trimmedPhone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; background-color: #f5f5f5; border: 1px solid #ddd;">Course:</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${trimmedCourse}</td>
          </tr>
          ${trimmedMessage ? `
          <tr>
            <td style="padding: 12px; font-weight: bold; background-color: #f5f5f5; border: 1px solid #ddd; vertical-align: top;">Message:</td>
            <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap; line-height: 1.6;">${trimmedMessage}</td>
          </tr>
          ` : ''}
        </table>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This message was sent from the Technoglobe website contact form.<br>
          You can reply directly to this email to respond to ${trimmedName}.
        </p>
      </div>
    `;

    const text = `
New Contact Form Submission
===========================

Name: ${trimmedName}
Email: ${trimmedEmail}
Phone: ${trimmedPhone}
Course: ${trimmedCourse}

Message:
${trimmedMessage || "(No message provided)"}

---
This message was sent from the Technoglobe website contact form.
You can reply directly to this email to respond to ${trimmedName}.
    `.trim();

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Technoglobe Website <onboarding@resend.dev>", // You'll need to verify your domain with Resend
      to: [toEmail],
      replyTo: trimmedEmail,
      subject,
      html,
      text,
    });

    // Success response
    console.log(`✓ Contact form email sent to ${toEmail} from ${trimmedEmail} (Message ID: ${data.id})`);
    
    return res.json({
      success: true,
      message: "Message sent successfully. We'll get back to you soon!",
    });

  } catch (error) {
    console.error("Contact form error:", error);
    
    // Return appropriate error response
    let errorMessage = "Failed to send message. Please try again later.";
    
    if (error.message?.includes("RESEND_API_KEY")) {
      errorMessage = error.message;
    } else if (error.message?.includes("domain")) {
      errorMessage = "Email domain not verified. Please verify your domain with Resend or contact support.";
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
      details: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
});

/**
 * GET /api/contact/test
 * Test endpoint to verify email configuration (development only)
 */
router.get("/test", async (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(403).json({ success: false, message: "Test endpoint disabled in production" });
  }

  try {
    if (!resendApiKey) {
      return res.status(400).json({
        success: false,
        message: "RESEND_API_KEY not found in environment variables",
        instructions: "Get your API key from https://resend.com/api-keys and add it to your .env file",
      });
    }

    const resend = getResendClient();
    
    // Try sending a test email
    const data = await resend.emails.send({
      from: "Technoglobe Website <onboarding@resend.dev>",
      to: [toEmail],
      subject: "Test Email from Technoglobe Contact Form",
      html: "<p>This is a test email to verify the contact form email configuration is working correctly.</p>",
      text: "This is a test email to verify the contact form email configuration is working correctly.",
    });

    return res.json({
      success: true,
      message: "Test email sent successfully!",
      messageId: data.id,
      to: toEmail,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      details: error.stack,
    });
  }
});

module.exports = router;
