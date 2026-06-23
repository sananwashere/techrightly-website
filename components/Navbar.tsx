'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="TechRightly" width={170} height={36} priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-900/80 transition-colors hover:text-teal-600"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-outline !px-5 !py-2 text-sm">
            Book a Consultation
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="h-0.5 w-5 bg-navy-900" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-900/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm" onClick={() => setOpen(false)}>
              Book a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
