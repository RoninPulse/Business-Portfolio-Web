import nodemailer from 'nodemailer';
import { ContactFormData } from './validations';

interface SendMailResult {
  success: boolean;
  demo: boolean;
  message?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<SendMailResult> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  const toEmail = CONTACT_TO_EMAIL || 'hello@roninpulse.com';
  const fromEmail = CONTACT_FROM_EMAIL || 'Ronin Pulse <no-reply@roninpulse.com>';

  // Check if credentials exist
  const hasResend = !!RESEND_API_KEY && !RESEND_API_KEY.includes('sample');
  const hasSmtp = !!(SMTP_HOST && SMTP_USER && SMTP_PASS && !SMTP_HOST.includes('example.com'));

  if (!hasResend && !hasSmtp) {
    console.log('\n==========================================');
    console.log('📬 [RONIN PULSE DEMO MODE - CONTACT INQUIRY]');
    console.log(`From: ${data.fullName} <${data.email}>`);
    console.log(`Company: ${data.company || 'N/A'}`);
    console.log(`Phone: ${data.phone || 'N/A'}`);
    console.log(`Service: ${data.service}`);
    console.log(`Budget: ${data.budget || 'N/A'} | Timeline: ${data.timeline || 'N/A'}`);
    console.log(`Message:\n${data.message}`);
    console.log('==========================================\n');
    return { success: true, demo: true, message: 'Message logged in demo mode.' };
  }

  try {
    if (hasResend) {
      // Send using Resend REST API fetch
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: data.email,
          subject: `⚡ New Project Inquiry: ${data.service} - ${data.fullName}`,
          text: `
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Company: ${data.company || 'N/A'}
Service: ${data.service}
Budget: ${data.budget || 'N/A'}
Timeline: ${data.timeline || 'N/A'}

Message:
${data.message}
          `.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Resend API error: ${res.statusText}`);
      }
    } else if (hasSmtp) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: fromEmail,
        to: toEmail,
        replyTo: data.email,
        subject: `⚡ New Project Inquiry: ${data.service} - ${data.fullName}`,
        text: `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nService: ${data.service}\nBudget: ${data.budget || 'N/A'}\nTimeline: ${data.timeline || 'N/A'}\n\nMessage:\n${data.message}`,
      });
    }

    return { success: true, demo: false };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown mailer error';
    console.error('Email sending failed:', message);
    return { success: false, demo: false, message };
  }
}
