import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Deep Drawing - AI & Human Artistic Collaboration",
  description: "Towards an intuitive artistic dialogue between humans and AI through sound. Deep Drawing is an intermedia AI co-performer creating real-time artistic collaboration.",
  keywords: ["AI", "artificial intelligence", "art", "sound", "machine learning", "human-computer interaction", "collaboration", "University of Michigan", "UARTS FEAST"],
  authors: [{ name: "Deep Drawing Research Team" }],
  creator: "University of Michigan ArtsEngine",
  publisher: "University of Michigan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://deepdrawing.org'),
  openGraph: {
    title: "Deep Drawing - AI & Human Artistic Collaboration",
    description: "Towards an intuitive artistic dialogue between humans and AI through sound.",
    type: "website",
    locale: "en_US",
    siteName: "Deep Drawing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Drawing - AI & Human Artistic Collaboration",
    description: "Towards an intuitive artistic dialogue between humans and AI through sound.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
