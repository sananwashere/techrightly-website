import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image src="/logo-white.svg" alt="TechRightly" width={170} height={36} />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Senior technology leadership — without the full-time overhead.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-teal-400">About</Link></li>
            <li><Link href="/services" className="hover:text-teal-400">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-teal-400">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-teal-400">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>
            <li><a href="mailto:hello@techrightly.com" className="hover:text-teal-400">hello@techrightly.com</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-teal-400">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-teal-400">X (Twitter)</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Newsletter</h3>
          <p className="mt-4 text-sm text-white/70">Monthly AI &amp; technology insights for technical leaders.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} TechRightly. All rights reserved.</p>
          <p>Fractional CTO · AI Advisory · Solution Architecture · Digital Transformation · Technical Due Diligence</p>
        </div>
      </div>
    </footer>
  );
}
