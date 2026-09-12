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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface-base text-ink-primary antialiased selection:bg-rose-100 selection:text-rose-900">
        <TeamProvider>{children}</TeamProvider>
      </body>
    </html>
  );
}
