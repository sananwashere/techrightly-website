'use client';

import { useState, FormEvent } from 'react';
import { services } from '@/lib/services';

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      type: 'lead',
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      service: data.get('service'),
      message: data.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Something went wrong. Please try again.');
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-8 text-center">
        <h3 className="font-heading text-xl font-semibold text-navy-900">Thanks — message received.</h3>
        <p className="mt-2 text-slate-600">
          We typically reply within one business day to schedule an initial call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-900">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-900">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-sm font-medium text-navy-900">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-navy-900">Service of interest</label>
          <select
            id="service"
            name="service"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="">Select one (optional)</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy-900">What are you trying to solve?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={status === 'loading'} className="btn-primary disabled:opacity-60">
        {status === 'loading' ? 'Sending…' : 'Request a Consultation'}
      </button>
      <p className="text-xs text-slate-500">We respond within one business day. No spam, ever.</p>
    </form>
  );
}
