import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gerald Limbando | Software Developer',
  description: 'Portfolio of Gerald Limbando, a passionate software developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}