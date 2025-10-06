// const express = require("express");
// const nodemailer = require("nodemailer");

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { name, email, phone, course, message } = req.body || {};
//     // Validate required fields (message optional)
//     if (!name || !email || !phone || !course) {
//       return res.status(400).json({ success: false, message: "name, email, phone, and course are required" });
//     }
//     // Basic email format check
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ success: false, message: "Invalid email format" });
//     }

//     const subject = `New contact message from ${name}`;
//     const text = `
// New contact message
// -------------------
// Name: ${name}
// Email: ${email}
// Phone: ${phone || "-"}
// Course: ${course || "-"}

// Message:
// ${message}
// `;

//     const toEmail = "iqbalshadaab@gmail.com";

//     // Build transporter: prefer SMTP, fallback to Gmail service if provided
//     const host = process.env.SMTP_HOST;
//     const port = Number(process.env.SMTP_PORT || 587);
//     const smtpUser = process.env.SMTP_USER;
//     const smtpPass = process.env.SMTP_PASS;
//     const gmailUser = process.env.GMAIL_USER;
//     const gmailPass = process.env.GMAIL_PASS; // App Password recommended

//     let transporter;
//     let fromAddress;
//     let useEthereal = false;
//     if (host && smtpUser && smtpPass) {
//       transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user: smtpUser, pass: smtpPass } });
//       fromAddress = `Genagogy Website <${smtpUser}>`;
//     } else if (gmailUser && gmailPass) {
//       transporter = nodemailer.createTransport({ service: "gmail", auth: { user: gmailUser, pass: gmailPass } });
//       fromAddress = `Genagogy Website <${gmailUser}>`;
//     } else {
//       // Development fallback (no real delivery): Ethereal test account
//       const testAccount = await nodemailer.createTestAccount();
//       transporter = nodemailer.createTransport({
//         host: testAccount.smtp.host,
//         port: testAccount.smtp.port,
//         secure: testAccount.smtp.secure,
//         auth: { user: testAccount.user, pass: testAccount.pass },
//       });
//       fromAddress = `Genagogy Website <${testAccount.user}>`;
//       useEthereal = true;
//     }

//     // Verify connection early to surface config errors clearly
//     await transporter.verify();

//     const info = await transporter.sendMail({ from: fromAddress, to: toEmail, replyTo: email, subject, text });
//     const previewUrl = useEthereal ? nodemailer.getTestMessageUrl(info) : undefined;

//     return res.json({ success: true, previewUrl });
//   } catch (error) {
//     const details = error && error.message ? error.message : undefined;
//     return res.status(500).json({ success: false, message: "Failed to send message.", details });
//   }
// });

// module.exports = router;

const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body || {};
    if (!name || !email || !phone || !course) {
      return res
        .status(400)
        .json({
          success: false,
          message: "name, email, phone, and course are required",
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    const subject = `New contact message from ${name}`;
    const text = `
New contact message
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Course: ${course || "-"}

Message:
${message}
`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Genagogy Website <${process.env.GMAIL_USER}>`,
      to: "iqbalshadaab@gmail.com",
      replyTo: email,
      subject,
      text,
    });

    return res.json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to send message.",
        details: error.message,
      });
  }
});

module.exports = router;
