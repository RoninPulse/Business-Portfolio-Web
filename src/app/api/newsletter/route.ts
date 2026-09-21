import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
    const limitCheck = rateLimit(ip, 5, 60_000);

    if (!limitCheck.success) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again shortly.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validation = newsletterSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    console.log(`\n📨 [RONIN PULSE NEWSLETTER SUBSCRIBER]: ${validation.data.email}\n`);

    return NextResponse.json({
      success: true,
      demo: true,
      message: 'Subscribed to Ronin Pulse Dispatch.',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
