import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  inquiry_type?: string;
  message?: string;
}

const INQUIRY_LABELS: Record<string, string> = {
  leisure: "Leisure Travel",
  mice: "MICE (Meetings, Incentives, Conferences, Exhibitions)",
  medical: "Medical Tourism",
  custom: "Custom Itinerary",
  partnership: "B2B Partnership",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const phone = data.phone?.trim() || "—";
  const inquiryType = data.inquiry_type?.trim();
  const message = data.message?.trim();

  // Required-field validation (phone is optional).
  if (!name || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error("Contact form: missing SMTP environment variables.");
    return NextResponse.json(
      { error: "The mail server is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = implicit TLS; 587/others use STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const inquiryLabel = INQUIRY_LABELS[inquiryType] ?? inquiryType;

  const textBody = [
    "New inquiry from the KWS website",
    "",
    `Name / Agency: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Inquiry type: ${inquiryLabel}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <h2 style="font-family:sans-serif;color:#173124;margin:0 0 16px;">New inquiry from the KWS website</h2>
    <table style="font-family:sans-serif;font-size:14px;color:#1c1b1b;border-collapse:collapse;">
      <tr><td style="padding:4px 16px 4px 0;font-weight:bold;">Name / Agency</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;font-weight:bold;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:4px 16px 4px 0;font-weight:bold;">Phone</td><td>${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;font-weight:bold;">Inquiry type</td><td>${escapeHtml(inquiryLabel)}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;color:#1c1b1b;white-space:pre-wrap;margin-top:16px;"><strong>Message:</strong><br/>${escapeHtml(message)}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"KWS Website" <${CONTACT_FROM_EMAIL || SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: `"${name}" <${email}>`, // replies go straight to the enquirer
      subject: `New inquiry: ${inquiryLabel} — ${name}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return NextResponse.json(
      {
        error:
          "Sorry, we couldn't send your message. Please try again, or email us directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
