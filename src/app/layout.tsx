import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "César García Cabeza - Data Scientist | Software Engineer",
  description: "César García Cabeza's personal website",
  keywords: [
    "César García Cabeza",
    "César García",
    'Data Science',
    'Artificial Intelligence',
    'Cloud Data Engineering',
    'Portfolio',
    'Machine Learning',
    'Python',
    'AWS',
    'GCP',
    'Docker',
    'ETL',
    'CI/CD',
  ],
  authors: [
    {
      name: 'César García Cabeza',
      url: 'https://www.linkedin.com/in/cesargarciacabeza/',
    },
  ],
  icons: {
    icon: 'favicon.png',
    shortcut: 'favicon.png',
    apple: 'favicon.png',  // Optional, if you have an apple-touch-icon
    other: [
      {
        rel: 'icon',
        url: 'favicon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
