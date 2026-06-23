'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p className="mt-4 text-sm text-teal-400">You&apos;re subscribed. Thanks!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-teal-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="shrink-0 rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-teal-400 disabled:opacity-60"
      >
        {status === 'loading' ? '...' : 'Join'}
      </button>
    </form>
  );
}
