import type { Metadata } from 'next';
import { Geist_Mono, Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nuno-tamada.vercel.app'),
  title: 'Nuno Tamada — Mobile Developer',
  description:
    'Portfolio of Nuno Tamada. Cross-platform mobile apps with React Native, Expo, and Flutter.',
  openGraph: {
    title: 'Nuno Tamada — Mobile Developer',
    description: 'Cross-platform mobile developer portfolio.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuno Tamada — Mobile Developer',
    description: 'Cross-platform mobile developer portfolio.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
