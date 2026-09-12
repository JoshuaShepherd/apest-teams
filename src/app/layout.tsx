import type { Metadata } from 'next';
import './globals.css';
import { TeamProvider } from '@/context/TeamContext';

export const metadata: Metadata = {
  title: 'APEST Teams — Ecclesial Diagnostic & Formation Platform',
  description:
    'A living ecclesial diagnostic and discipleship engine that reads the collective fivefold ministry (Ephesians 4:1-16) of leadership teams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Newsreader for editorial serif headings, Manrope for humanized sans body, JetBrains Mono for metrics */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-primary/20 selection:text-primary">
        <TeamProvider>{children}</TeamProvider>
      </body>
    </html>
  );
}
