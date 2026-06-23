import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Contact | TechRightly',
  description: 'Book a free consultation with TechRightly about Fractional CTO, AI Advisory, or Solution Architecture.',
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container-page grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-600">Contact</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Let&apos;s talk about what you&apos;re trying to solve.
          </h1>
          <p className="mt-4 max-w-md text-slate-600">
            Tell us a bit about your company and what&apos;s prompting the conversation. We reply within one
            business day to schedule an initial 30-minute call — no obligation, no sales pitch.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-navy-900">Email</p>
              <a href="mailto:hello@techrightly.com" className="text-teal-600">hello@techrightly.com</a>
            </div>
            <div>
              <p className="font-semibold text-navy-900">LinkedIn</p>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-teal-600">
                linkedin.com/company/techrightly
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy-900">Response time</p>
              <p>Within 1 business day</p>
            </div>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
