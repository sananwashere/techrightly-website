import Link from 'next/link';
import type { Service } from '@/lib/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5"
    >
      <h3 className="font-heading text-lg font-semibold text-navy-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700">
        Learn more →
      </span>
    </Link>
  );
}
