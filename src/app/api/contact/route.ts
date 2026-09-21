import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rate-limit';
import { sendContactEmail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & in-memory rate limiting (max 5 submissions per 60s per IP)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
    const limitCheck = rateLimit(ip, 5, 60_000);

    if (!limitCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a moment before submitting another inquiry.',
        },
        { status: 429 }
      );
    }

    // 2. Parse request JSON body
    const body = await req.json();

    // 3. Honeypot check for bots
    if (body.websiteHoneypot && body.websiteHoneypot.trim() !== '') {
      // Silently discard spam submission
      return NextResponse.json({ success: true, demo: true, message: 'Received' });
    }

    // 4. Server-side schema validation with Zod
    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      const issues = validation.error.issues.map((i) => i.message).join(', ');
      return NextResponse.json(
        { success: false, error: issues || 'Invalid form data provided.' },
        { status: 400 }
      );
    }

    // 5. Send email or execute demo fallback
    const mailResult = await sendContactEmail(validation.data);

    return NextResponse.json({
      success: true,
      demo: mailResult.demo,
      message: mailResult.demo
        ? 'Inquiry received in Demo Mode (logged to server console).'
        : 'Thank you. Your project inquiry has been dispatched to Ronin Pulse engineers.',
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Internal server error';
    console.error('Contact route error:', msg);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again or WhatsApp us.' },
      { status: 500 }
    );
  }
}
