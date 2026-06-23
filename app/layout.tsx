import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TechRightly | Fractional CTO & AI Advisory',
  description:
    'TechRightly provides Fractional CTO, AI Strategy & Advisory, Solution Architecture, Digital Transformation, and Technical Due Diligence for growing companies.',
  metadataBase: new URL('https://techrightly.example.com'),
  openGraph: {
    title: 'TechRightly | Fractional CTO & AI Advisory',
    description:
      'Senior technology leadership — without the full-time overhead.',
    siteName: 'TechRightly',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
