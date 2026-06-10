import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Power Dolls',
  description:
    'Power Dolls are colourful plush companions created to comfort, encourage, and empower children through life’s big feelings and brave moments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
