import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'sananwazir13@gmail.com';

async function sendNotificationEmail(body: Record<string, unknown>) {
  const { type, email, name, company, service, message } = body as {
    type?: string;
    email?: string;
    name?: string;
    company?: string;
    service?: string;
    message?: string;
  };

  const subject =
    type === 'lead'
      ? `New lead: ${name} (${service || 'General inquiry'})`
      : `New newsletter signup: ${email}`;

  const html =
    type === 'lead'
      ? `<h2>New lead from TechRightly website</h2>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Company:</strong> ${company || '—'}</p>
         <p><strong>Service:</strong> ${service || '—'}</p>
         <p><strong>Message:</strong></p><p>${message}</p>`
      : `<p>New newsletter signup: <strong>${email}</strong></p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'TechRightly Website <onboarding@resend.dev>',
      to: NOTIFY_EMAIL,
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    console.error('Resend API error:', await res.text());
  }
}

// Phase 4 (Lead Generation System): submissions are emailed via Resend to
// NOTIFY_EMAIL. Swap in a CRM (HubSpot/Mailchimp) integration later if needed.
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

    console.log('[contact-form submission]', JSON.stringify(body));

    if (RESEND_API_KEY) {
      try {
        await sendNotificationEmail(body);
      } catch (emailErr) {
        console.error('Failed to send notification email:', emailErr);
      }
    } else {
      console.warn('RESEND_API_KEY not set — skipping email send.');
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
