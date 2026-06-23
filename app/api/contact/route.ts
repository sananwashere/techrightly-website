import { NextRequest, NextResponse } from 'next/server';

// Phase 4 (Lead Generation System) will wire this up to a real provider:
// e.g. forward to HubSpot Free / Mailchimp via their API, or send an email
// via Resend/SendGrid. For now this validates input and logs the submission
// so the form is fully functional end-to-end during development.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    if (type === 'lead' && (!body.name || !body.message)) {
      return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
    }

    // TODO (Phase 4): replace with real CRM / email integration.
    console.log('[contact-form submission]', JSON.stringify(body));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
